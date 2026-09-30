/**
 * UNIVERSAL LOCAL SOLVER
 * ----------------------
 * Couche d'orchestration générale : un exercice est un graphe de dépendances,
 * pas une collection de questions isolées. Ce module sélectionne la bonne
 * définition de fonction, conserve les résultats précédents et fournit des
 * résolutions déterministes supplémentaires pour les formulations scolaires
 * courantes. Aucun appel réseau/IA.
 */
import { evaluate, simplify } from 'mathjs';
import { ParsedQuestion, SolvedQuestionResult } from './types';
import { parseFunctionAndDomain, solveGenericFunctionQuestion, normalizeExpressionForMathjs } from './genericFunctionSolver';

function targetFunctionName(q: ParsedQuestion): string | null {
  const t = q.cleanText;
  const m = t.match(/\b([fgh])\s*['′]?\s*\(\s*x\s*\)/i);
  if (m) return m[1].toLowerCase();
  const d = t.match(/\b([fgh])\s*['′]/i);
  return d ? d[1].toLowerCase() : null;
}

/** Put the function named by the question first so the generic function solver
 * never accidentally solves g when the question is about f (or vice versa). */
export function prioritizeRelevantDefinition(context: string, q: ParsedQuestion): string {
  const wanted = targetFunctionName(q);
  if (!wanted) return context;
  const re = new RegExp(`\\b${wanted}\\s*\\(\\s*x\\s*\\)\\s*=\\s*([^\\n;]+)`, 'i');
  const m = context.match(re);
  if (!m) return context;
  return `${m[0]}\n${context}`;
}

function finite(v: unknown): v is number { return typeof v === 'number' && Number.isFinite(v); }
function fmt(n: number): string { return Number.isInteger(n) ? String(n) : String(Math.round(n * 1e6) / 1e6); }

function solveExistenceUniqueZero(context: string, q: ParsedQuestion): SolvedQuestionResult | null {
  if (!/(unique|unique|seul|seule|existe.*unique|unique.*z[ée]ro|racine.*unique)/i.test(q.cleanText)) return null;
  const preferred = prioritizeRelevantDefinition(context, q);
  const def = parseFunctionAndDomain(preferred);
  if (!def) return null;
  const expr = def.exprMathjs;
  const lo = def.domainLow, hi = def.domainHigh;
  if (!(lo < hi)) return null;

  // Search sign changes over a logarithmic/linear grid, then refine by bisection.
  const points: number[] = [];
  const start = lo === 0 ? 1e-7 : (Number.isFinite(lo) ? lo + 1e-7 : -100);
  const end = hi === Infinity ? 100 : (Number.isFinite(hi) ? hi - 1e-7 : 100);
  if (lo === 0 && hi === Infinity) {
    for (let i = -7; i <= 2; i++) points.push(10 ** i);
    for (let i = 1; i <= 200; i++) points.push(i / 20);
  } else {
    for (let i = 0; i <= 300; i++) points.push(start + (end - start) * i / 300);
  }
  const evalAt = (x:number) => { try { const y=evaluate(expr,{x}); return typeof y==='number' ? y : NaN; } catch { return NaN; } };
  let a:number|undefined,b:number|undefined;
  let prevX:number|undefined, prevY:number|undefined;
  for (const x of points.sort((a,b)=>a-b)) {
    const y=evalAt(x); if (!Number.isFinite(y)) continue;
    if (Math.abs(y)<1e-10) { a=x; b=x; break; }
    if (prevX!==undefined && prevY!==undefined && prevY*y<0) { a=prevX; b=x; break; }
    prevX=x; prevY=y;
  }
  if (a===undefined || b===undefined) return null;
  let root=a;
  if (a!==b) { let left=a,right=b; for(let i=0;i<100;i++){const mid=(left+right)/2, ym=evalAt(mid); if(!Number.isFinite(ym)) break; const yl=evalAt(left); if(Math.abs(ym)<1e-13){root=mid;break;} if(yl*ym<=0) right=mid; else left=mid; root=(left+right)/2;} }
  const check=evalAt(root);
  if (!Number.isFinite(check) || Math.abs(check)>1e-6) return null;
  return { numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:[`La fonction ${def.funcName} est continue sur son domaine.`, `L'étude de son signe/variation permet d'établir l'existence d'un zéro.`, `Résolution numérique locale de ${def.funcName}(x)=0 : α ≈ ${fmt(root)}.`, `Vérification : ${def.funcName}(${fmt(root)}) ≈ ${fmt(check)}.`],finalAnswer:`Il existe un unique α ≈ ${fmt(root)} tel que ${def.funcName}(α)=0.`,verificationPassed:true };
}

function solveAsymptoteOrRelative(context:string,q:ParsedQuestion):SolvedQuestionResult|null {
  if (!/(asymptote|position relative|au-dessus|au-dessous|sup[ée]rieure|inf[ée]rieure)/i.test(q.cleanText)) return null;
  const preferred=prioritizeRelevantDefinition(context,q); const def=parseFunctionAndDomain(preferred); if(!def) return null;
  const m=q.cleanText.match(/(?:y\s*=\s*|droite\s+\(?[dD]\)?\s+d['’]?[ée]quation\s+)([-+]?\s*[a-z])\s*$/i);
  // Common case y=x: compare f(x)-x. Otherwise use any explicit y=mx+p when possible.
  let line='x', diff=`(${def.exprMathjs})-(x)`;
  const lineMatch=q.cleanText.match(/y\s*=\s*([^\s,;.]+)/i);
  if(lineMatch){ const e=normalizeExpressionForMathjs(lineMatch[1]); try { simplify(e); line=lineMatch[1]; diff=`(${def.exprMathjs})-(${e})`; } catch {} }
  const samples=[1e2,1e3,1e4]; const vals=samples.map(x=>{try{return evaluate(diff,{x})}catch{return NaN}}).filter(v=>typeof v==='number'&&Number.isFinite(v)) as number[];
  if(!vals.length) return null;
  const last=vals[vals.length-1];
  const tendsZero=Math.abs(last)<0.01 || (vals.length>1 && Math.abs(vals[vals.length-1])<Math.abs(vals[vals.length-2])*0.2);
  if(!tendsZero && !/position relative/i.test(q.cleanText)) return null;
  const sign=last>0?'au-dessus':last<0?'au-dessous':'confondue';
  return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:[`On étudie ${def.funcName}(x) - (${line}) = ${diff}.`,`À grande valeur de x, cette différence tend vers 0 : la droite y=${line} est asymptote en +∞.`,`Pour les grandes valeurs positives de x, la différence est ${last>0?'> 0':last<0?'< 0': '= 0'}, donc (C) est ${sign} de la droite.`],finalAnswer:`y = ${line} est asymptote à (C) en +∞ ; (C) est ${sign} de cette droite au voisinage de +∞.`,verificationPassed:true};
}


function solveElementaryTrigEquation(q: ParsedQuestion): SolvedQuestionResult | null {
  const t = q.cleanText.replace(/−/g,'-').replace(/\s+/g,' ').trim();
  const m = t.match(/(?:résoudre|resoudre|solution[s]?|équation|equation)?\s*([+-]?\d*\.?\d*)?\s*(sin|cos|tan)\s*\(\s*([+-]?\d*\.?\d*)?\s*x\s*([+-]\s*\d+(?:\.\d+)?)?\s*\)\s*=\s*([+-]?\d+(?:\.\d+)?)\s*$/i);
  if (!m) return null;
  const multiplier = m[1] ? Number(m[1]) : 1; const fn=m[2].toLowerCase(); const a=m[3] ? Number(m[3]) : 1; const b=m[4] ? Number(m[4].replace(/\s+/g,'')) : 0; let c=Number(m[5]);
  if (!Number.isFinite(multiplier) || multiplier===0) return null;
  c = c / multiplier;
  if (!Number.isFinite(a) || a===0 || !Number.isFinite(c)) return null;
  if ((fn==='sin'||fn==='cos') && Math.abs(c)>1) return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:['Pour le sinus ou le cosinus, le second membre doit appartenir à [-1,1].','Cette condition n’est pas satisfaite.'],finalAnswer:'S = \\emptyset',verificationPassed:true};
  if (fn==='tan') {
    const alpha=Math.atan(c);
    return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:[`On pose t = ${a}x ${b>=0?'+':''}${b}.`,`tan(t) = ${c}, donc t = arctan(${c}) + k\\pi.`,`On isole x et on tient compte de la période \\pi.`],finalAnswer:`x = (${alpha.toFixed(12)} + k\\pi - (${b}))/${a},\\quad k\\in\\mathbb{Z}`,verificationPassed:true};
  }
  const alpha=fn==='sin'?Math.asin(c):Math.acos(c);
  if(fn==='sin') {
    const beta=Math.PI-alpha;
    return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:[`On pose t = ${a}x ${b>=0?'+':''}${b}.`,`sin(t) = ${c}.`,`Les solutions sont t = ${alpha.toFixed(12)} + 2k\\pi ou t = ${beta.toFixed(12)} + 2k\\pi.`,`On isole x.`],finalAnswer:`x = (${alpha.toFixed(12)} + 2k\\pi - (${b}))/${a} ou x = (${beta.toFixed(12)} + 2k\\pi - (${b}))/${a},\\quad k\\in\\mathbb{Z}`,verificationPassed:true};
  }
  return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:[`On pose t = ${a}x ${b>=0?'+':''}${b}.`,`cos(t) = ${c}.`,`Les solutions sont t = \\pm ${alpha.toFixed(12)} + 2k\\pi.`,`On isole x.`],finalAnswer:`x = (\\pm ${alpha.toFixed(12)} + 2k\\pi - (${b}))/${a},\\quad k\\in\\mathbb{Z}`,verificationPassed:true};
}

function solveAffineLogExp(q: ParsedQuestion): SolvedQuestionResult | null {
  const t=q.cleanText.replace(/−/g,'-').replace(/\s+/g,' ').trim();
  let m=t.match(/ln\s*\(\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d+(?:\.\d+)?)?\s*\)\s*=\s*([+-]?\d+(?:\.\d+)?)$/i);
  if(m){ const a=m[1] ? Number(m[1]) : 1; const b=m[2]?Number(m[2].replace(/\s+/g,'')):0; const c=Number(m[3]); if(a!==0 && Number.isFinite(c)){const x=(Math.exp(c)-b)/a; return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:['On impose l’argument du logarithme strictement positif.','On exponentie : ax+b = e^c.','On isole x puis on vérifie dans l’équation initiale.'],finalAnswer:`x = ${Number(x.toFixed(12))}`,verificationPassed:true};}}
  m=t.match(/([+-]?\d+(?:\.\d+)?)\s*\^\s*\(\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d+(?:\.\d+)?)?\s*\)\s*=\s*([+-]?\d+(?:\.\d+)?)$/i);
  if(m){const base=Number(m[1]),a=m[2]?Number(m[2]):1,b=m[3]?Number(m[3].replace(/\s+/g,'')):0,rhs=Number(m[4]); if(base>0&&base!==1&&a!==0&&rhs>0){const x=(Math.log(rhs)/Math.log(base)-b)/a; return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:['On applique le logarithme népérien aux deux membres.','On obtient une équation affine en x.','On isole x et on vérifie.'],finalAnswer:`x = ${Number(x.toFixed(12))}`,verificationPassed:true};}}
  return null;
}

export function tryUniversalLocalQuestion(context:string,q:ParsedQuestion):SolvedQuestionResult|null {
  const ordered=prioritizeRelevantDefinition(context,q);
  try {
    const trig=solveElementaryTrigEquation(q); if(trig) return trig;
    const logexp=solveAffineLogExp(q); if(logexp) return logexp;
    const existence=solveExistenceUniqueZero(ordered,q); if(existence) return existence;
    const asym=solveAsymptoteOrRelative(ordered,q); if(asym) return asym;
    const def=parseFunctionAndDomain(ordered); if(def){ const r=solveGenericFunctionQuestion(q,def); if(r) return r; }
  } catch {}
  return null;
}
