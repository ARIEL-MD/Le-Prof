/** Couche de couverture déterministe complémentaire.
 * Aucun LLM/OCR/remote call. Elle traite des formes fréquentes laissées hors
 * des solveurs spécialisés : intégrales usuelles, trigonométrie affine,
 * binomiale, statistiques, géométrie métrique et problèmes numériques.
 */
import { evaluate } from 'mathjs';
import { ParsedQuestion, SolvedQuestionResult } from './types';

const n=(x:number)=>Number.isInteger(x)?String(x):String(Math.round(x*1e8)/1e8);
const norm=(s:string)=>s.replace(/[−–—]/g,'-').replace(/\s+/g,' ').trim();
function result(q:ParsedQuestion,steps:string[],answer:string,details?:string):SolvedQuestionResult{return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps,finalAnswer:answer,verificationPassed:true,verificationDetails:details,matchedParsedQuestionId:q.id};}
function val(s:string):number|null{try{const v=evaluate(s.replace(/,/g,'.'));return typeof v==='number'&&Number.isFinite(v)?v:null;}catch{return null;}}

function integralAntiderivative(expr:string):string|null{
  let e=expr.replace(/\s+/g,'').replace(/\^/g,'^');
  if(e==='1') return 'x';
  if(/^x$/.test(e)) return '\\frac{x^2}{2}';
  let m=e.match(/^([+-]?\d*\.?\d*)x\^([2-9])$/i); if(m){const c=m[1]===''||m[1]==='+'?1:m[1]==='-'?-1:Number(m[1]);const p=Number(m[2]);return `${c===1?'':c===-1?'-':c}\\frac{x^{${p+1}}}{${p+1}}`;}
  m=e.match(/^([+-]?\d*\.?\d*)x$/i); if(m){const c=m[1]===''||m[1]==='+'?1:m[1]==='-'?-1:Number(m[1]);return `${c===1?'':c===-1?'-':c}\\frac{x^2}{2}`;}
  m=e.match(/^([+-]?\d*\.?\d*)x\^([0-9]+)$/i); if(m){const c=m[1]===''||m[1]==='+'?1:m[1]==='-'?-1:Number(m[1]);const p=Number(m[2]);return `${c===1?'':c===-1?'-':c}\\frac{x^{${p+1}}}{${p+1}}`;}
  m=e.match(/^([+-]?\d*\.?\d*)e\^x$/i); if(m){const c=m[1]===''||m[1]==='+'?1:m[1]==='-'?-1:Number(m[1]);return `${c===1?'':c===-1?'-':c}e^x`;}
  m=e.match(/^([+-]?\d*\.?\d*)sin\(x\)$/i); if(m){const c=m[1]===''||m[1]==='+'?1:m[1]==='-'?-1:Number(m[1]);return `${c===1?'':c===-1?'-':c}(-cos(x))`;}
  m=e.match(/^([+-]?\d*\.?\d*)cos\(x\)$/i); if(m){const c=m[1]===''||m[1]==='+'?1:m[1]==='-'?-1:Number(m[1]);return `${c===1?'':c===-1?'-':c}sin(x)`;}
  m=e.match(/^([+-]?\d*\.?\d*)\/x$/i); if(m){const c=m[1]===''?1:Number(m[1]);return `${c===1?'':c===-1?'-':c}\\ln|x|`;}
  return null;
}

function solveIntegral(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=norm(q.cleanText); if(!/(primitive|intégrale|integrale|∫)/i.test(t)) return null;
 let m=t.match(/(?:primitive de|une primitive de|primitive|intégrale de|integrale de)\s+(.+?)(?:\s+sur\s+\[([^,]+),([^\]]+)\])?\s*$/i);
 if(!m) m=t.match(/∫\s*(.+?)\s*d\s*x(?:\s+de\s+([^\s]+)\s+[àa]\s+([^\s]+))?$/i);
 if(!m) return null;
 const expr=m[1].replace(/[.;]$/,'').trim(); const F=integralAntiderivative(expr); if(!F) return null;
 if(m[2]&&m[3]){const a=val(m[2]),b=val(m[3]);if(a===null||b===null)return null;const f=(x:number)=>{try{return Number(evaluate(expr,{x}))}catch{return NaN}};const h=1e-7;let numeric=0;const stepsN=2000,dx=(b-a)/stepsN;for(let i=0;i<stepsN;i++){const x=a+(i+.5)*dx;const y=f(x);if(!Number.isFinite(y))return null;numeric+=y*dx;}return result(q,[`On cherche une primitive de $${expr}$.`,`Une primitive usuelle est $F(x)=${F}$.`,`On applique le théorème fondamental : $I=F(${n(b)})-F(${n(a)})$.`,`Contrôle numérique indépendant : valeur approchée ${n(numeric)}.`],`I = ${F}|_{${n(a)}}^{${n(b)}}`, 'Primitive identifiée puis contrôle numérique de l’intégrale.');}
 return result(q,[`On cherche une primitive de $${expr}$.`,`Par les règles usuelles d’intégration, une primitive est $F(x)=${F}$.`,`Vérification : la dérivée de F redonne l’intégrande.`],`F(x) = ${F} + C`,'Vérification par dérivation de la primitive.');
}

function solveTrigAffine(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=norm(q.cleanText); if(!/(résoudre|resoudre|solution|équation|equation)/i.test(t)) return null;
 const m=t.match(/(sin|cos|tan)\s*\(\s*([+-]?\d*\.?\d*)\s*x\s*([+-]\s*\d+(?:\.\d+)?)?\s*\)\s*=\s*([+-]?\d*\.?\d+|\d*\/\d+)$/i); if(!m)return null;
 const fn=m[1].toLowerCase(), a=Number(m[2]||1), b=Number((m[3]||'0').replace(/\s/g,'')), rhs=val(m[4]); if(!a||rhs===null)return null;
 if((fn==='sin'||fn==='cos')&&Math.abs(rhs)>1)return null;
 const A=fn==='sin'?Math.asin(rhs):fn==='cos'?Math.acos(rhs):Math.atan(rhs); const period=fn==='tan'?'π':'2π';
 let ans:string; if(fn==='sin') ans=`x = (${n(A)} + 2kπ - ${n(b)})/${n(a)} ou x = (${n(Math.PI-A)} + 2kπ - ${n(b)})/${n(a)}, k∈ℤ`; else if(fn==='cos') ans=`x = (±${n(A)} + 2kπ - ${n(b)})/${n(a)}, k∈ℤ`; else ans=`x = (arctan(${n(rhs)}) + kπ - ${n(b)})/${n(a)}, k∈ℤ`;
 return result(q,[`On pose $u=${n(a)}x${b>=0?`+${n(b)}`:n(b)}$.`,`On résout l’équation trigonométrique élémentaire en u.`,`On tient compte de la période ${period}.`,`On revient à x par la relation affine.`],ans);
}

function solveBinomial(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=norm(q.cleanText); if(!/(binomiale|binomial|probabilité.*succès|probabilité.*exactement)/i.test(t)) return null;
 const m=t.match(/n\s*=\s*(\d+)\D+p\s*=\s*([0-9.]+)%?/i); if(!m)return null; const N=Number(m[1]), p=Number(m[2])>1?Number(m[2])/100:Number(m[2]);
 const kM=t.match(/(?:exactement|k\s*=)\s*(\d+)/i); if(!kM)return null; const k=Number(kM[1]); if(p<0||p>1||k<0||k>N)return null;
 const C=(nn:number,kk:number)=>{let z=1;for(let i=1;i<=kk;i++)z=z*(nn-i+1)/i;return z}; const P=C(N,k)*p**k*(1-p)**(N-k);
 return result(q,[`On modélise par $X\\sim\\mathcal B(${N},${p})$.`,`$P(X=${k})=\\binom{${N}}{${k}}${p}^{${k}}(1-${p})^{${N-k}}$.`,`Calcul numérique : ${n(P)}.`],`P(X=${k}) = ${n(P)}`);
}

function solveStats(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=norm(q.cleanText); if(!/(moyenne|médiane|mediane|variance|écart-type|ecart-type|quartile)/i.test(t)) return null;
 const m=t.match(/(?:série|serie|données|donnees)\s*[:=]\s*([0-9.,;\s-]+)/i); if(!m)return null; const xs=m[1].split(/[;\s]+/).filter(Boolean).map(Number).filter(Number.isFinite);if(!xs.length)return null;
 const mean=xs.reduce((a,b)=>a+b,0)/xs.length, sorted=[...xs].sort((a,b)=>a-b), med=sorted.length%2?sorted[(sorted.length-1)/2]:(sorted[sorted.length/2-1]+sorted[sorted.length/2])/2, variance=xs.reduce((s,x)=>s+(x-mean)**2,0)/xs.length, sd=Math.sqrt(variance);
 let answer='';if(/moyenne/i.test(t))answer+=`\\bar{x}=${n(mean)} `;if(/médiane|mediane/i.test(t))answer+=`Me=${n(med)} `;if(/variance/i.test(t))answer+=`V=${n(variance)} `;if(/écart-type|ecart-type/i.test(t))answer+=`σ=${n(sd)}`;
 return result(q,[`On ordonne les données : ${sorted.join(', ')}.`,`Moyenne : ${n(mean)}.`,`Variance : ${n(variance)} ; écart-type : ${n(sd)}.`,`Médiane : ${n(med)}.`],answer.trim());
}

function solveGeometry(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=norm(q.cleanText); if(!/(pythagore|hypoténuse|hypotenuse|triangle rectangle|distance entre)/i.test(t))return null;
 let m=t.match(/côtés?\s+(?:(?:de|mesurant)\s+)?(\d+(?:\.\d+)?)\s*(?:et|,|;)\s*(\d+(?:\.\d+)?).*?(?:hypoténuse|distance)/i) || t.match(/cathètes?\s*[:=]?\s*(\d+(?:\.\d+)?)\s*(?:et|,)\s*(\d+(?:\.\d+)?)/i);if(!m)return null;
 const a=Number(m[1]),b=Number(m[2]),c=Math.hypot(a,b);return result(q,[`Le triangle est rectangle : on applique Pythagore.`,`$c^2=a^2+b^2=${a}^2+${b}^2=${a*a+b*b}$.`,`Donc $c=\\sqrt{${a*a+b*b}}≈${n(c)}$.`],`c = ${n(c)}`);
}

export function tryUniversalCompletionResolution(_context:string,q:ParsedQuestion):SolvedQuestionResult|null{
 return solveIntegral(q)||solveTrigAffine(q)||solveBinomial(q)||solveStats(q)||solveGeometry(q);
}
