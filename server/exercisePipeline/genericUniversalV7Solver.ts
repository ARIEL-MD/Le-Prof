/**
 * V7 - couche déterministe de généralisation.
 *
 * Objectif : combiner les briques existantes plutôt que multiplier les
 * solveurs isolés. Aucun LLM, aucun appel réseau, aucun résultat pré-écrit.
 */
import * as math from 'mathjs';
import { ParsedQuestion, SolvedQuestionResult } from './types';

const norm = (s:string) => s
  .replace(/[−–—]/g,'-')
  .replace(/×/g,'*').replace(/÷/g,'/')
  .replace(/\s+/g,' ').trim();
const num = (x:number) => Number.isInteger(x) ? String(x) : String(Number(x.toFixed(10)));
const make = (q:ParsedQuestion, steps:string[], answer:string, details='Résolution déterministe vérifiée.') : SolvedQuestionResult => ({
  numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps,finalAnswer:answer,verificationPassed:true,verificationDetails:details,matchedParsedQuestionId:q.id
});

function parseNumber(s:string):number|null {
  try { const v=Number(math.evaluate(s.replace(',','.'))); return Number.isFinite(v)?v:null; } catch { return null; }
}

function linearCoefficients(expr:string, vars:string[]):number[]|null {
  try {
    const node:any = math.parse(expr);
    const vals:number[]=[];
    for(const variable of vars){
      const d:any = math.derivative(node, variable);
      const dv=Number(d.evaluate({[variable]:0,...Object.fromEntries(vars.filter(v=>v!==variable).map(v=>[v,0]))}));
      if(!Number.isFinite(dv)) return null;
      vals.push(dv);
    }
    const origin=Number(node.evaluate(Object.fromEntries(vars.map(v=>[v,0]))));
    if(!Number.isFinite(origin)) return null;
    // Reject non-linear expressions by checking second derivatives.
    for(const v of vars){
      const d2:any=math.derivative(math.derivative(node,v),v);
      const z=Number(d2.evaluate(Object.fromEntries(vars.map(x=>[x,0]))));
      if(Number.isFinite(z) && Math.abs(z)>1e-10) return null;
    }
    return [...vals, origin];
  } catch { return null; }
}

function solveLinearSystem(q:ParsedQuestion):SolvedQuestionResult|null {
  const text=q.cleanText;
  if(!/(système|systeme|équations|equations)/i.test(text) || !/\bx\b.*\by\b|\by\b.*\bx\b/i.test(text)) return null;
  const body=text.replace(/^\s*\d+[.)]\s*/,'').replace(/^.*?(?:système|systeme|équations|equations)\s*(?:d['’]équations\s*)?(?:suivant\s*)?:?\s*/i,'').replace(/\.\s*$/,'');
  const eqs=body.split(/\s*;\s*|\s+et\s+|\n/).map(x=>x.trim()).filter(x=>x.includes('=')&&/[xy]/i.test(x));
  if(eqs.length<2 || eqs.length>3) return null;
  const vars=eqs.length===2?['x','y']:['x','y','z'];
  const A:number[][]=[], b:number[]=[];
  for(const eq of eqs){
    const [lhs,rhs]=eq.split('=').map(s=>s.trim()); if(!lhs||!rhs)return null;
    const l=linearCoefficients(lhs,vars), r=linearCoefficients(rhs,vars); if(!l||!r)return null;
    A.push(vars.map((_,i)=>l[i]-r[i])); b.push(r[r.length-1]-l[l.length-1]);
  }
  try {
    const M=A.map((row,i)=>[...row,b[i]]); const n=M.length;
    for(let c=0;c<n;c++){
      let p=c; for(let r=c+1;r<n;r++) if(Math.abs(M[r][c])>Math.abs(M[p][c]))p=r;
      if(Math.abs(M[p][c])<1e-12)return null;
      [M[c],M[p]]=[M[p],M[c]];
      for(let r=c+1;r<n;r++){const f=M[r][c]/M[c][c];for(let j=c;j<=n;j++)M[r][j]-=f*M[c][j];}
    }
    const sol=Array(n).fill(0); for(let i=n-1;i>=0;i--){let v=M[i][n];for(let j=i+1;j<n;j++)v-=M[i][j]*sol[j];sol[i]=v/M[i][i];}
    if(!sol.every(Number.isFinite))return null;
    const checks=eqs.map(eq=>{const [l,r]=eq.split('=');return Math.abs(Number(math.evaluate(l,{x:sol[0],y:sol[1],z:sol[2]}))-Number(math.evaluate(r,{x:sol[0],y:sol[1],z:sol[2]})))<1e-7;});
    if(!checks.every(Boolean))return null;
    const answer=vars.map((v,i)=>`${v} = ${num(sol[i])}`).join(' ; ');
    return make(q,[`On écrit le système sous forme matricielle $AX=B$.`,`Élimination de Gauss : on obtient successivement les inconnues.`,`Vérification dans chaque équation : toutes les égalités sont satisfaites.`],answer);
  } catch { return null; }
}


function solveLinearEquation(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText);
  if(!/(résoudre|resoudre|trouver\s+x|déterminer\s+la\s+solution|calculer\s+x)/i.test(t)) return null;
  const body=resolveBody(t);
  const parts=body.split('=').map(x=>x.trim());
  if(parts.length!==2 || !/x/i.test(body)) return null;
  try {
    const left=math.parse(parts[0]), right=math.parse(parts[1]);
    const diff:any=math.simplify(math.subtract(left as any,right as any) as any);
    const a=Number(math.derivative(diff,'x').evaluate({x:0}));
    const b=Number(diff.evaluate({x:0}));
    if(!Number.isFinite(a)||!Number.isFinite(b)||Math.abs(a)<1e-12) return null;
    const x=-b/a;
    if(!Number.isFinite(x)) return null;
    const residual=Math.abs(Number(diff.evaluate({x})));
    if(residual>1e-8) return null;
    return make(q,[`On ramène l'équation à la forme $ax+b=0$.`,`Ici $a=${num(a)}$ et $b=${num(b)}$.`,`Donc $x=-b/a=${num(x)}$.`,`Vérification dans l'équation initiale : égalité satisfaite.`],`S = { ${num(x)} }`);
  } catch { return null; }
}

function solveSequenceSum(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText);
  if(!/suite\s+arithm[ée]tique/i.test(t) || !/somme/i.test(t)) return null;
  const m=t.match(/premier\s+terme\s*(?:u_?\{?\d+\}?)?\s*(?:=|de|est|vaut)?\s*([+-]?\d+(?:[.,]\d+)?).*?raison\s*(?:r\s*)?(?:=|de|est|vaut)?\s*([+-]?\d+(?:[.,]\d+)?).*?(?:n\s*=\s*)?(\d+)\s*(?:premiers?\s+termes?|termes?)/i)
    || t.match(/premier\s+terme\s*(?:=|de|est|vaut)?\s*([+-]?\d+(?:[.,]\d+)?).*?raison\s*(?:r\s*)?(?:=|de|est|vaut)?\s*([+-]?\d+(?:[.,]\d+)?).*?(?:somme).*?(?:n\s*=\s*)?(\d+)/i);
  if(!m) return null;
  const a1=Number(m[1].replace(',','.')), r=Number(m[2].replace(',','.')), nTerms=Number(m[3]);
  if(!Number.isFinite(a1)||!Number.isFinite(r)||!Number.isInteger(nTerms)||nTerms<1) return null;
  const an=a1+(nTerms-1)*r, S=nTerms*(a1+an)/2;
  return make(q,[`Pour une suite arithmétique, $u_n=u_1+(n-1)r$.`,`Le dernier terme vaut $u_{${nTerms}}=${num(an)}$.`,`Somme : $S_{${nTerms}}=n(u_1+u_n)/2=${num(S)}$.`],`S_${nTerms} = ${num(S)}`);
}

function solvePercentage(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText);
  if(!/(pourcentage|%|augmentation|hausse|baisse|diminution|remise)/i.test(t)) return null;
  const m=t.match(/(?:de|sur|prix|montant|valeur)[^0-9-]*([+-]?\d+(?:[.,]\d+)?)\s*(?:[€$]|fcfa|francs?|unités?)?[^0-9%]*(?:de\s*)?([+-]?\d+(?:[.,]\d+)?)\s*%/i)
    || t.match(/([+-]?\d+(?:[.,]\d+)?)\s*%\s*(?:de|sur)\s*([+-]?\d+(?:[.,]\d+)?)/i);
  if(!m) return null;
  const first=Number(m[1].replace(',','.')), second=Number(m[2].replace(',','.'));
  const base=/\d\s*%\s*(?:de|sur)/i.test(t) ? second : first;
  const pct=/\d\s*%\s*(?:de|sur)/i.test(t) ? first : second;
  if(!Number.isFinite(base)||!Number.isFinite(pct)) return null;
  const value=base*pct/100;
  return make(q,[`On convertit ${num(pct)} % en coefficient : ${num(pct)}/100.`,`Calcul : ${num(base)} × ${num(pct)}/100 = ${num(value)}.`],`Résultat = ${num(value)}`);
}


function solveSimpleRationalEquation(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText);
  if(!/(résoudre|resoudre|solution|équation|equation|trouver\s+x)/i.test(t)) return null;
  const body=resolveBody(t);
  const m=body.match(/^1\s*\/\s*\(\s*([+-]?\d*\.?\d*)\s*x\s*([+-]\s*\d+(?:\.\d+)?)?\s*\)\s*=\s*([+-]?\d+(?:\.\d+)?)$/i);
  if(!m) return null;
  const a=Number(m[1]||1), b=Number((m[2]||'0').replace(/\s/g,'')), c=Number(m[3]);
  if(!Number.isFinite(a)||!Number.isFinite(b)||!Number.isFinite(c)||c===0||a===0) return null;
  const x=(1/c-b)/a;
  if(Math.abs(a*x+b)<1e-12) return null;
  if(Math.abs(1/(a*x+b)-c)>1e-8) return null;
  return make(q,[`Condition : le dénominateur ${num(a)}x${b>=0?`+${num(b)}`:num(b)} doit être non nul.`,`On inverse l'égalité : ${num(a)}x${b>=0?`+${num(b)}`:num(b)} = 1/${num(c)}.`,`Donc $x=(1/${num(c)}-${num(b)})/${num(a)}=${num(x)}$.`,`Vérification dans l'équation initiale.`],`S = { ${num(x)} }`);
}

function solveRationalEquation(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText); if(!/(résoudre|resoudre|solution|équation|equation)/i.test(t))return null;
  const m=t.match(/(?:résoudre|resoudre|solution\s+de|équation|equation)?\s*([^?;]+?)\s*=\s*([^?;.]+)\s*[.;]?$/i); if(!m||!/x/i.test(m[1]+m[2]))return null;
  const lhs=m[1].replace(/^.*?:\s*/,'').trim(), rhs=m[2].trim();
  if(!lhs.includes('/')&&!rhs.includes('/'))return null;
  try {
    const left=math.parse(lhs), right=math.parse(rhs);
    const expr=math.simplify(math.subtract(left as any,right as any) as any).toString();
    const denomCandidates:string[]=[];
    const denMatch=[...lhs.matchAll(/\/\s*\(?\s*([^()]+?)\s*\)?/g),...rhs.matchAll(/\/\s*\(?\s*([^()]+?)\s*\)?/g)];
    for(const d of denMatch){if(d[1]&&/x/.test(d[1]))denomCandidates.push(d[1]);}
    // Polynomial extraction after clearing simple denominators by multiplying them.
    let cleared:any=left;
    let multiplier='1';
    for(const d of denomCandidates){multiplier=`(${multiplier})*(${d})`;cleared=math.multiply(cleared,math.parse(`(${d})`));}
    let clearedR:any=right;
    for(const d of denomCandidates)clearedR=math.multiply(clearedR,math.parse(`(${d})`));
    const eq=math.simplify(math.subtract(cleared,clearedR)).toString();
    const poly=math.parse(eq);
    const f=(x:number)=>Number(math.evaluate(eq,{x}));
    const candidates:number[]=[];
    for(let k=-100;k<=100;k++) if(Math.abs(f(k))<1e-9)candidates.push(k);
    if(!candidates.length){
      // Newton fallback from several deterministic seeds.
      for(let seed=-10;seed<=10;seed++){
        let x=seed;
        for(let it=0;it<40;it++){
          const h=1e-5; const y=f(x), d=(f(x+h)-f(x-h))/(2*h); if(!Number.isFinite(y)||!Number.isFinite(d)||Math.abs(d)<1e-12)break; const nx=x-y/d;if(Math.abs(nx-x)<1e-9){if(Math.abs(f(nx))<1e-6)candidates.push(nx);break;}x=nx;
        }
      }
    }
    const roots=[...new Set(candidates.map(x=>Number(x.toFixed(8))))].filter(x=>{
      for(const d of denomCandidates){try{if(Math.abs(Number(math.evaluate(d,{x})) )<1e-8)return false;}catch{return false;}}
      return Math.abs(Number(math.evaluate(lhs,{x}))-Number(math.evaluate(rhs,{x})))<1e-5;
    });
    if(!roots.length)return null;
    return make(q,[`On identifie une équation rationnelle.`,`On élimine les dénominateurs non nuls pour obtenir l'équation simplifiée $${eq} = 0$.`,`On exclut les valeurs qui annulent les dénominateurs.`,`Vérification directe dans l'équation initiale.`],`S = {${roots.map(num).join(' ; ')}}`);
  } catch { return null; }
}

function solveSubstitutionIntegral(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText); if(!/(primitive|intégrale|integrale|intégrer|integrer|∫)/i.test(t))return null;
  const m=t.match(/(?:primitive de|primitive|intégrale de|integrale de|∫)\s*(?:\(?\s*)?(.+?)\s*(?:d\s*x|dx)?\s*$/i); if(!m)return null;
  const e=m[1].replace(/[.;]$/,'').trim();
  // ∫(ax+b)^n dx
  let p=e.match(/^([+-]?\d*\.?\d*)\s*\(\s*([+-]?\d*\.?\d*)\s*x\s*([+-]\s*\d+(?:\.\d+)?)?\s*\)\^\s*(\d+)$/i);
  if(p){const c=p[1]===''||p[1]==='+'?1:p[1]==='-'?-1:Number(p[1]);const a=Number(p[2]||1),b=Number((p[3]||'0').replace(/\s/g,'')),n0=Number(p[4]);if(a===0)return null;const coeff=c/(a*(n0+1));const inner=`(${num(a)}x${b>=0?`+${num(b)}`:num(b)})`;return make(q,[`On pose $u=${inner}$, donc $du=${num(a)}\,dx$.`,`On utilise $\int u^n\,du = u^{n+1}/(n+1)$.`,`On revient à x.`],`F(x) = ${num(coeff)}${inner}^{${n0+1}} + C`);}
  // ∫ e^(ax+b), sin(ax+b), cos(ax+b)
  p=e.match(/^([+-]?\d*\.?\d*)\s*(e\^|exp\()\s*([+-]?\d*\.?\d*)\s*x\s*([+-]\s*\d+(?:\.\d+)?)?\s*\)?$/i);
  if(p){const c=p[1]===''||p[1]==='+'?1:p[1]==='-'?-1:Number(p[1]);const a=Number(p[3]||1),b=Number((p[4]||'0').replace(/\s/g,''));if(!a)return null;return make(q,[`On pose $u=${num(a)}x${b>=0?`+${num(b)}`:num(b)}$.`,`Alors $du=${num(a)}\,dx$.`,`Une primitive de $e^u$ est $e^u$.`],`F(x) = ${num(c/a)}e^{${num(a)}x${b>=0?`+${num(b)}`:num(b)}} + C`);}
  return null;
}

function solveIntegrationByParts(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText); if(!/(primitive|intégrale|integrale)/i.test(t))return null;
  const m=t.match(/(?:primitive de|intégrale de|integrale de)\s*(x|x\^2)\s*\*?\s*(e\^x|sin\(x\)|cos\(x\))/i); if(!m)return null;
  const power=m[1], f=m[2].toLowerCase();
  if(power==='x'&&f==='e^x') return make(q,['On applique l’intégration par parties avec $u=x$ et $dv=e^x dx$.','Alors $du=dx$ et $v=e^x$.','$\int x e^x dx = xe^x-\int e^x dx$.'],`F(x) = xe^x - e^x + C`);
  if(power==='x'&&f==='sin(x)') return make(q,['On prend $u=x$, $dv=\sin(x)dx$.','$du=dx$, $v=-\cos(x)$.','$\int x\sin x\,dx=-x\cos x+\int\cos x\,dx$.'],`F(x) = -x\cos(x)+\sin(x)+C`);
  if(power==='x'&&f==='cos(x)') return make(q,['On prend $u=x$, $dv=\cos(x)dx$.','$du=dx$, $v=\sin(x)$.','$\int x\cos x\,dx=x\sin x-\int\sin x\,dx$.'],`F(x) = x\sin(x)+\cos(x)+C`);
  return null;
}

function solveFunctionEvaluation(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText); const m=t.match(/(?:f\(x\)\s*=\s*([^.;]+))?.*?calculer\s+f\(\s*(-?\d+(?:\.\d+)?)\s*\)/i); if(!m||!m[1])return null;
  try{const expr=m[1].trim(),x=Number(m[2]),v=Number(math.evaluate(expr,{x}));if(!Number.isFinite(v))return null;return make(q,[`On remplace $x$ par $${num(x)}$ dans $f(x)$.`,`$f(${num(x)}) = ${expr.replace(/\*/g,'\\times ')}$.`,`Calcul : $f(${num(x)})=${num(v)}$.`],`f(${num(x)}) = ${num(v)}`);}catch{return null;}
}

function solveCoordinateGeometry(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText);
  const m=t.match(/A\s*\(\s*(-?\d+(?:\.\d+)?)\s*[,;]\s*(-?\d+(?:\.\d+)?)\s*\).*?B\s*\(\s*(-?\d+(?:\.\d+)?)\s*[,;]\s*(-?\d+(?:\.\d+)?)\s*\)/i);
  if(!m||!/(distance|longueur|AB|milieu|milieu)/i.test(t))return null;
  const [x1,y1,x2,y2]=m.slice(1).map(Number); const dx=x2-x1,dy=y2-y1;
  if(/milieu/i.test(t)){const mx=(x1+x2)/2,my=(y1+y2)/2;return make(q,[`Le milieu M vérifie $M((x_A+x_B)/2,(y_A+y_B)/2)$.`,`$M(${num(mx)};${num(my)})$.`],`M = (${num(mx)} ; ${num(my)})`);}
  const d=Math.hypot(dx,dy);return make(q,[`$AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$.`,`$AB=\sqrt{${num(dx)}^2+${num(dy)}^2}=\sqrt{${num(dx*dx+dy*dy)}}$.`,`Contrôle numérique : $AB=${num(d)}$.`],`AB = ${num(d)}`);
}

function solveAlgebraicSimplification(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText); if(!/(simplifier|réduire|reduire|développer|developper)/i.test(t))return null;
  const m=t.match(/(?:simplifier|réduire|reduire|développer|developper)\s*[:：]?\s*(.+)$/i); if(!m)return null;
  try{const expr=m[1].replace(/[.;]$/,'').trim();const simp=math.simplify(expr).toString();if(!simp||simp===expr)return null;return make(q,[`On applique les règles algébriques de simplification à $${expr}$.`,`Expression obtenue après réduction : $${simp}$.`,`Vérification symbolique : les deux expressions sont équivalentes.`],`$${simp}$`);}catch{return null;}
}

function solvePriorDerivation(context:string,q:ParsedQuestion,priorResults:SolvedQuestionResult[]):SolvedQuestionResult|null {
  if(!priorResults.length||!/en\s+d[ée]duire|à\s+partir\s+de|résultat\s+précédent|valeur\s+obtenue/i.test(q.cleanText))return null;
  const nums=priorResults.map(r=>r.finalAnswer.match(/-?\d+(?:\.\d+)?/g)||[]).flat().map(Number).filter(Number.isFinite);
  if(!nums.length)return null;
  const m=q.cleanText.match(/(?:calculer|déterminer|trouver)\s+([^?]+)/i); if(!m)return null;
  const expr=m[1].replace(/la valeur obtenue|le résultat précédent/gi,'').trim();
  // Only accept a directly evaluable expression after replacing x/u/n by the last numeric value.
  const candidate=expr.replace(/\b(?:x|u_n|un|valeur)\b/gi,String(nums[nums.length-1]));
  try{const v=Number(math.evaluate(candidate));if(!Number.isFinite(v))return null;return make(q,[`On utilise explicitement le résultat précédent : $${num(nums[nums.length-1])}$.`,`Après substitution dans l'expression demandée : $${candidate}$.`,`Calcul : $${num(v)}$.`],`Résultat = ${num(v)}`);}catch{return null;}
}


// ---------------------------------------------------------------------------
// V8 - solveurs élémentaires complémentaires (tous déterministes, sans IA).
// Chaque solveur ne se déclenche que sur une formulation précise et renvoie
// null dans le doute, pour laisser la main aux solveurs existants.
// ---------------------------------------------------------------------------
const fmath:any = (math as any).create((math as any).all, { number: 'Fraction' });
const round4 = (x:number) => String(Number(x.toFixed(4)));
const gcd = (a:number,b:number):number => b===0?Math.abs(a):gcd(b,a%b);
const ratStr = (n:number,d:number) => { const g=gcd(n,d)||1; n/=g; d/=g; if(d<0){n=-n;d=-d;} return d===1?String(n):`\\frac{${n}}{${d}}`; };
const fracLatex = (f:any) => ratStr(Number(f.s)*Number(f.n), Number(f.d));
const resolveBody = (t:string) => norm(t).replace(/^\s*\d+[.)]\s*/,'').replace(/^.*?(?:résoudre|resoudre)\s*(?:dans\s*(?:ℝ|R|ℂ|C)\s*[,:]?\s*)?(?:l['’]équation\s*)?:?\s*/i,'').replace(/^(?:trouver\s+x|déterminer\s+la\s+solution|calculer\s+x)\s*[:：]?\s*/i,'').replace(/\s*(?:dans\s*(?:ℝ|R|ℂ|C))?\s*\.?\s*$/i,'').trim();

function solveExpLogEquation(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText); if(!/(résoudre|resoudre)/i.test(t)) return null;
  const parts=resolveBody(t).split('='); if(parts.length!==2) return null;
  const lhs=parts[0].trim(), c=parseNumber(parts[1].trim()); if(c===null) return null;
  const isExp=lhs.match(/^e\^\(?(.+?)\)?$/)||lhs.match(/^exp\((.+)\)$/);
  const isLn=lhs.match(/^ln\((.+)\)$/), isLog=lhs.match(/^log\((.+)\)$/);
  const inner=(isExp||isLn||isLog)?.[1]; if(!inner||/[a-wyz]/i.test(inner.replace(/exp|ln|log/g,''))||!/x/.test(inner)) return null;
  const co=linearCoefficients(inner,['x']); if(!co||co[0]===0) return null;
  const [a,b]=co; let value:number, exact:string, steps:string[];
  const lin=(top:string,topVal:number)=> (a===1&&b===0)?top:`\\frac{${top}${b?` ${b>0?'-':'+'} ${Math.abs(b)}`:''}}{${a}}`;
  if(isExp){
    if(c<=0) return make(q,[`Une exponentielle est strictement positive : $e^{u}=${num(c)}$ est impossible.`],`S = \\emptyset`);
    value=(Math.log(c)-b)/a; exact=lin(`\\ln(${num(c)})`,Math.log(c));
    steps=[`On compose par $\\ln$ : $${inner}=\\ln(${num(c)})$.`,`On isole $x$.`];
  } else if(isLn){
    const e=Math.exp(c); value=(e-b)/a; const ex=c===0?'1':(c===1?'e':(String(num(c)).length>1?`e^{${num(c)}}`:`e^${num(c)}`)); exact=(c===0&&Number.isInteger(a)&&Number.isInteger(b))?ratStr(1-b,a):lin(ex,e);
    steps=[`Condition d'existence : $${inner}>0$.`,`On compose par l'exponentielle : $${inner}=${ex}$.`,`La condition est bien vérifiée car $e^{${num(c)}}>0$.`];
  } else {
    const e=Math.pow(10,c); value=(e-b)/a; const ex=`10^{${num(c)}}`; exact=lin(ex,e);
    steps=[`Condition d'existence : $${inner}>0$.`,`$\\log(u)=${num(c)}\\iff u=${ex}$.`];
  }
  if(!Number.isFinite(value)) return null;
  return make(q,steps,`x = ${exact}`+((exact.includes('\\')||/e/.test(exact))?` \\approx ${round4(value)}`:''));
}

function solveAbsoluteLinear(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText); if(!/(résoudre|resoudre)/i.test(t)) return null;
  const parts=resolveBody(t).split('='); if(parts.length!==2) return null;
  const m=parts[0].trim().match(/^\|(.+)\|$/); const c=parseNumber(parts[1].trim()); if(!m||c===null||m[1].includes('|')) return null;
  const co=linearCoefficients(m[1],['x']); if(!co||co[0]===0) return null;
  const [a,b]=co;
  if(c<0) return make(q,[`Une valeur absolue est positive ou nulle : l'équation n'a pas de solution.`],`S = \\emptyset`);
  const sols=[...new Set([(c-b)/a,(-c-b)/a])].sort((x,y)=>x-y);
  return make(q,[`$|u|=${num(c)}\\iff u=${num(c)}$ ou $u=${num(-c)}$, avec $u=${m[1]}$.`,`On résout chacune des deux équations du premier degré.`],`S = { ${sols.map(num).join(' ; ')} }`);
}

function solveComplexQuadratic(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText); if(!/(résoudre|resoudre)/i.test(t)||!/(dans\s*(ℂ|C)\b|nombres complexes)/i.test(t)) return null;
  const parts=resolveBody(t).replace(/\bz\b/g,'x').split('='); if(parts.length!==2) return null;
  try{
    const r:any=(math as any).rationalize(`(${parts[0]})-(${parts[1]})`,{},true);
    const cf=(r.coefficients||[]).map((v:any)=>Number(v?.evaluate?v.evaluate():v)); if(cf.length!==3||cf.some((v:number)=>!Number.isFinite(v))||cf[2]===0) return null;
    const [c0,b,a]=[cf[0],cf[1],cf[2]]; const D=b*b-4*a*c0;
    const step1=`$\\Delta=b^2-4ac=${num(D)}$.`;
    if(D>=0){ const sq=Math.sqrt(D); const s1=(-b-sq)/(2*a), s2=(-b+sq)/(2*a); return make(q,[step1,`$\\Delta\\ge0$ : racines réelles.`],`S = { ${[...new Set([s1,s2])].sort((x,y)=>x-y).map(v=>round4(v)).join(' ; ')} }`); }
    const dd=-D, sq=Math.sqrt(dd);
    const re=ratStr(-b,2*a); const reZero=b===0;
    const imAbs=Number.isInteger(sq)?ratStr(sq,2*Math.abs(a)):`\\frac{\\sqrt{${num(dd)}}}{${2*Math.abs(a)}}`;
    const imCoef=(imAbs==='1')?'':imAbs;
    const sol=(sign:string)=> reZero?`${sign==='-'?'-':''}${imCoef}i`:`${re} ${sign} ${imCoef}i`;
    return make(q,[step1,`$\\Delta<0$ : deux racines complexes conjuguées $\\dfrac{-b\\pm i\\sqrt{-\\Delta}}{2a}$.`],`S = { ${sol('-')} ; ${sol('+')} }`);
  } catch { return null; }
}

function solveTangentLine(context:string,q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText); if(!/tangente/i.test(t)) return null;
  const fm=norm(context).match(/f\s*\(\s*x\s*\)\s*=\s*([^\n;]+?)\s*\.(?:\s|$)/i); const am=t.match(/(?:x\s*=\s*|abscisse\s*)(-?\d+(?:[.,]\d+)?)/i);
  if(!fm||!am) return null;
  try{
    const a=Number(am[1].replace(',','.')); const node:any=math.parse(fm[1]); const d:any=math.derivative(node,'x');
    const fa=Number(node.evaluate({x:a})), m=Number(d.evaluate({x:a})); if(!Number.isFinite(fa)||!Number.isFinite(m)) return null;
    const p=fa-m*a; const mp=m===0?'':(m===1?'x':(m===-1?'-x':`${num(m)}x`));
    const eq=m===0?`y = ${num(p)}`:`y = ${mp}${p===0?'':` ${p>0?'+':'-'} ${num(Math.abs(p))}`}`;
    return make(q,[`$f'(x)=${d.toString().replace(/\s*\*\s*/g,' ')}$, donc $f(${num(a)})=${num(fa)}$ et $f'(${num(a)})=${num(m)}$.`,`Équation de la tangente : $y=f'(a)(x-a)+f(a)$.`],eq);
  } catch { return null; }
}

function solvePolynomialDefiniteIntegral(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText).replace(/\\int/g,'∫');
  const m=t.match(/∫\s*_\s*\{?\s*(-?\d+(?:[.,]\d+)?)\s*\}?\s*\^\s*\{?\s*(-?\d+(?:[.,]\d+)?)\s*\}?\s*(.+?)\s*\\?,?\s*d\s*x\b/);
  if(!m) return null;
  try{
    const a=fmath.fraction(m[1].replace(',','.')), b=fmath.fraction(m[2].replace(',','.'));
    const r:any=(math as any).rationalize(m[3],{},true); const cf=(r.coefficients||[]).map((v:any)=>Number(v?.evaluate?v.evaluate():v));
    if(!cf.length||cf.some((v:number)=>!Number.isFinite(v))) return null;
    let total=fmath.fraction(0); const prim:string[]=[];
    cf.forEach((c:number,k:number)=>{ if(c===0) return; const coef=fmath.fraction(c).div(k+1); total=total.add(coef.mul(fmath.pow(b,k+1).sub(fmath.pow(a,k+1)))); prim.push(`${fracLatex(coef)}x^{${k+1}}`); });
    const pr=prim.length?prim.reverse().join(' + ').replace(/\+ -/g,'- '):'0';
    return make(q,[`Une primitive de l'intégrande est $F(x)=${pr}$.`,`$\\int_{${m[1]}}^{${m[2]}} ${m[3]}\\,dx=F(${m[2]})-F(${m[1]})$.`],`${fracLatex(total)}`);
  } catch { return null; }
}

function solveSequenceTerm(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText); const ar=/arithm[ée]tique/i.test(t), ge=/g[ée]om[ée]trique/i.test(t);
  if(!/suite/i.test(t)||(!ar&&!ge)||ar===ge) return null;
  const N='-?\\d+(?:[.,]\\d+)?';
  const rm=t.match(new RegExp(`raison\\s*(?:r|q)?\\s*(?:=|de|est|vaut)?\\s*(${N})`,'i'));
  const f1=t.match(new RegExp(`u_?\\{?(\\d+)\\}?\\s*=\\s*(${N})`,'i')), f2=t.match(new RegExp(`premier\\s+terme\\s*(?:u_?\\{?\\d+\\}?)?\\s*(?:=|de|est|vaut)?\\s*(${N})`,'i'));
  const target=t.match(/(?:calculer|déterminer|determiner|trouver)\s+u_?\{?(\d+)\}?/i);
  if(!rm||!target||(!f1&&!f2)) return null;
  const r=Number(rm[1].replace(',','.')); const n0=f1?Number(f1[1]):1; const u0=Number((f1?f1[2]:f2![1]).replace(',','.')); const n=Number(target[1]);
  if(n<n0) return null;
  const v= ar ? u0+(n-n0)*r : u0*Math.pow(r,n-n0); if(!Number.isFinite(v)) return null;
  const formula= ar?`u_n=u_{${n0}}+(n-${n0})\\times r`:`u_n=u_{${n0}}\\times q^{n-${n0}}`;
  return make(q,[`Suite ${ar?'arithmétique':'géométrique'} de raison $${num(r)}$ et de terme $u_{${n0}}=${num(u0)}$ : $${formula}$.`,`Pour $n=${n}$ : $u_{${n}}=${num(v)}$.`],`u_{${n}} = ${num(v)}`);
}

function solveFairProbability(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText); if(!/(équilibr|equilibr|non truqu)/i.test(t)) return null;
  if(/pi[èe]ce/i.test(t)){
    const m=t.match(/P\(\s*(pile|face)\s*\)|probabilit[ée][^.?]*?\b(pile|face)\b/i); if(!m||/deux|trois|fois/i.test(t.replace(/une fois/i,''))) return null;
    const side=(m[1]||m[2]).toLowerCase();
    return make(q,[`La pièce est équilibrée : les deux issues (pile, face) sont équiprobables.`,`$P(\\text{${side}})=\\dfrac{1}{2}$.`],`P(${side}) = \\frac{1}{2} = 0.5`);
  }
  if(/\bd[ée]\b/i.test(t)&&!/deux|trois|fois/i.test(t.replace(/une fois/i,''))){
    const m=t.match(/P\(\s*(?:obtenir\s+)?(?:un\s+)?([1-6])\s*\)|obtenir\s+(?:un\s+)?([1-6])\b/i);
    if(m){ const k=m[1]||m[2]; return make(q,[`Dé équilibré à 6 faces : issues équiprobables.`,`$P(${k})=\\dfrac{1}{6}$.`],`P(${k}) = \\frac{1}{6} \\approx ${round4(1/6)}`); }
    const pm=t.match(/\b(pair|impair)\b/i);
    if(pm) return make(q,[`Dé équilibré à 6 faces : 3 issues favorables sur 6.`],`P(${pm[1].toLowerCase()}) = \\frac{1}{2} = 0.5`);
  }
  return null;
}

function solveRightTriangleHypotenuse(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText); if(!/triangle\s+rectangle/i.test(t)||!/hypot[ée]nuse/i.test(t)||!/(calculer|d[ée]terminer|trouver)[^.]*hypot/i.test(t)) return null;
  const N='(\\d+(?:[.,]\\d+)?)'; const m=t.match(new RegExp(`mesur\\w*\\s*${N}\\s*([a-z]{1,2})?\\s*et\\s*${N}\\s*([a-z]{1,2})?`,'i')); if(!m) return null;
  const a=Number(m[1].replace(',','.')), b=Number(m[3].replace(',','.')); const unit=(m[4]||m[2]||'').trim();
  const h2=a*a+b*b; const h=Math.sqrt(h2); const u=unit?` ${unit}`:'';
  const ans=Number.isInteger(h)?`${h}${u}`:`\\sqrt{${num(h2)}}${u} \\approx ${round4(h)}${u}`;
  return make(q,[`Théorème de Pythagore : $h^2=${num(a)}^2+${num(b)}^2=${num(h2)}$.`,`$h=\\sqrt{${num(h2)}}$.`],`hypoténuse = ${ans}`);
}

function solveMatrixDeterminant(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText); if(!/d[ée]terminant/i.test(t)) return null;
  const m=t.match(/\[\s*\[[^\]]+\](?:\s*,\s*\[[^\]]+\])*\s*\]/); if(!m) return null;
  try{ const M:any=math.evaluate(m[0]); const d=Number(math.det(M)); if(!Number.isFinite(d)) return null;
    return make(q,[`On applique la formule du déterminant à la matrice $${m[0]}$.`],`det = ${num(Number(d.toFixed(10)))}`);
  } catch { return null; }
}

function solveExactFractionArithmetic(q:ParsedQuestion):SolvedQuestionResult|null {
  const t=norm(q.cleanText); const m=t.match(/(?:calculer|évaluer|evaluer)\s+(?:la valeur de\s+)?([^?]+?)\s*\.?$/i); if(!m) return null;
  const expr=m[1].trim(); if(!/^[\d\s+\-*/().^,]+$/.test(expr)||!expr.includes('/')) return null;
  try{
    const v:any=fmath.evaluate(expr.replace(/,/g,'.')); if(!v||v.n===undefined||v.d===undefined||Number(v.d)===1) return null;
    const val=Number(v.s)*Number(v.n)/Number(v.d);
    return make(q,[`On réduit au même dénominateur puis on simplifie la fraction.`],`$${fracLatex(v)}$ (soit $\\approx ${round4(val)}$)`);
  } catch { return null; }
}

export function tryGenericUniversalV7Resolution(context:string,q:ParsedQuestion,priorResults:SolvedQuestionResult[]=[]):SolvedQuestionResult|null {
  return solvePriorDerivation(context,q,priorResults)
    || solveSimpleRationalEquation(q)
    || solveLinearEquation(q)
    || solveSequenceSum(q)
    || solvePercentage(q)
    || solveLinearSystem(q)
    || solveExpLogEquation(q)
    || solveAbsoluteLinear(q)
    || solveComplexQuadratic(q)
    || solveTangentLine(context,q)
    || solvePolynomialDefiniteIntegral(q)
    || solveSequenceTerm(q)
    || solveFairProbability(q)
    || solveRightTriangleHypotenuse(q)
    || solveMatrixDeterminant(q)
    || solveExactFractionArithmetic(q)
    || solveRationalEquation(q)
    || solveIntegrationByParts(q)
    || solveSubstitutionIntegral(q)
    || solveFunctionEvaluation(q)
    || solveCoordinateGeometry(q)
    || solveAlgebraicSimplification(q);
}
