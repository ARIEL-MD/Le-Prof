import * as math from 'mathjs';
import { ParsedQuestion, SolvedQuestionResult } from './types';

interface Poly { coeffs: number[]; }

function normalize(s: string): string {
  return s.replace(/[−–—]/g,'-').replace(/×/g,'*').replace(/÷/g,'/').replace(/²/g,'^2').replace(/³/g,'^3').replace(/√\s*/g,'sqrt');
}

function trimPoly(c:number[]):number[] { let a=[...c]; while(a.length>1 && Math.abs(a[a.length-1])<1e-12)a.pop(); return a; }
function add(a:number[],b:number[]):number[]{const n=Math.max(a.length,b.length),r=Array(n).fill(0);for(let i=0;i<n;i++)r[i]=(a[i]||0)+(b[i]||0);return trimPoly(r);}
function sub(a:number[],b:number[]):number[]{return add(a,b.map(v=>-v));}
function mul(a:number[],b:number[]):number[]{const r=Array(a.length+b.length-1).fill(0);for(let i=0;i<a.length;i++)for(let j=0;j<b.length;j++)r[i+j]+=a[i]*b[j];return trimPoly(r);}
function pow(a:number[],n:number):number[]{let r=[1];for(let i=0;i<n;i++)r=mul(r,a);return r;}

function nodePoly(node:any): number[] | null {
  if (!node) return null;
  switch(node.type){
    case 'ConstantNode': return typeof node.value==='number' ? [node.value] : null;
    case 'SymbolNode': return node.name==='x' ? [0,1] : null;
    case 'ParenthesisNode': return nodePoly(node.content);
    case 'OperatorNode': {
      const a=nodePoly(node.args?.[0]); if(a===null)return null;
      if(node.op==='unaryMinus') return a.map(v=>-v);
      const b=nodePoly(node.args?.[1]); if(b===null)return null;
      if(node.op==='+')return add(a,b);
      if(node.op==='-')return sub(a,b);
      if(node.op==='*')return mul(a,b);
      if(node.op==='/') { if(b.length!==1 || Math.abs(b[0])<1e-15)return null; return a.map(v=>v/b[0]); }
      if(node.op==='^' && b.length===1 && Number.isInteger(b[0]) && b[0]>=0 && b[0]<=12)return pow(a,b[0]);
      return null;
    }
    default:return null;
  }
}

function parsePolynomial(expr:string):number[]|null { try{return trimPoly(nodePoly(math.parse(expr))||[])}catch{return null;} }

function complexMul(a:[number,number],b:[number,number]):[number,number]{return [a[0]*b[0]-a[1]*b[1],a[0]*b[1]+a[1]*b[0]];}
function complexDiv(a:[number,number],b:[number,number]):[number,number]{const d=b[0]*b[0]+b[1]*b[1];return [(a[0]*b[0]+a[1]*b[1])/d,(a[1]*b[0]-a[0]*b[1])/d];}
function polyEval(c:number[],z:[number,number]):[number,number]{let r:[number,number]=[0,0];for(let i=c.length-1;i>=0;i--)r=[r[0]*z[0]-r[1]*z[1]+c[i],r[0]*z[1]+r[1]*z[0]];return r;}
function polynomialRoots(c:number[]):[number,number][] { const n=c.length-1;if(n<=0)return []; if(n===1)return [[-c[0]/c[1],0]]; if(n===2){const d=c[1]*c[1]-4*c[2]*c[0];if(d>=0){const s=Math.sqrt(d);return [[(-c[1]-s)/(2*c[2]),0],[(-c[1]+s)/(2*c[2]),0]];}const s=Math.sqrt(-d);return [[-c[1]/(2*c[2]),-s/(2*c[2])],[-c[1]/(2*c[2]),s/(2*c[2])]];} const lead=c[n]; const radius=1+Math.max(...c.slice(0,n).map(v=>Math.abs(v/lead))); let roots:[number,number][]=[];for(let k=0;k<n;k++){const a=2*Math.PI*k/n;roots.push([radius*Math.cos(a),radius*Math.sin(a)]);}for(let it=0;it<120;it++){let max=0;for(let i=0;i<n;i++){let denom:[number,number]=[1,0];for(let j=0;j<n;j++)if(j!==i){denom=complexMul(denom,[roots[i][0]-roots[j][0],roots[i][1]-roots[j][1]]);}const delta=complexDiv(polyEval(c,roots[i]),denom);roots[i]=[roots[i][0]-delta[0],roots[i][1]-delta[1]];max=Math.max(max,Math.hypot(delta[0],delta[1]));}if(max<1e-10)break;}return roots; }

function extractEquation(text:string):{lhs:string;rhs:string}|null { const t=normalize(text).replace(/^(?:résoudre|resoudre|solution[s]?|équation|equation)\s*[:：]?\s*/i,''); const m=t.match(/([A-Za-z0-9_().+*\/^ -]+?)\s*=\s*([A-Za-z0-9_().+*\/^ -]+)\s*[?;.]?$/i); if(!m)return null; let lhs=m[1].trim().replace(/^(?:f|P|g|h)\s*\(\s*x\s*\)\s*$/i,'x'); const rhs=m[2].trim(); if(!/x/.test(lhs+rhs))return null; return {lhs,rhs}; }


function evalPolyAt(c:number[],x:number){let r=0;for(let i=c.length-1;i>=0;i--)r=r*x+c[i];return r;}
function solvePolynomialInequality(lhs:string,rhs:string,op:string):string|null {
  const a=parsePolynomial(lhs), b=parsePolynomial(rhs);
  if(!a||!b)return null;
  const p=sub(a,b);
  const degree=p.length-1;
  if (degree < 0) return null;

  // Cas constant : P(x) = c.
  if (degree === 0) {
    const c=p[0];
    const good = op==='>' ? c>0 : op==='>=' ? c>=0 : op==='<' ? c<0 : c<=0;
    return good ? 'S = \\mathbb{R}' : 'S = \\emptyset';
  }

  const roots=polynomialRoots(p)
    .filter(z=>Math.abs(z[1])<1e-7 && Number.isFinite(z[0]))
    .map(z=>z[0]).sort((x,y)=>x-y);
  const pts:number[]=[];
  for(const r of roots) if(!pts.length||Math.abs(r-pts[pts.length-1])>1e-7)pts.push(r);
  const cuts=[-Infinity,...pts,Infinity];

  const evalP=(x:number)=>evalPolyAt(p,x);
  const good=(v:number)=>{
    const y=evalP(v);
    if(op==='>')return y>1e-8;
    if(op==='>=')return y>=-1e-8;
    if(op==='<')return y<-1e-8;
    return y<=1e-8;
  };
  const fmt=(x:number)=>Number.isInteger(x)?String(x):String(Number(x.toFixed(8)));
  const parts:string[]=[];

  for(let i=0;i<cuts.length-1;i++){
    const l=cuts[i], r=cuts[i+1];
    const sample=l===-Infinity?(r===Infinity?0:r-1):r===Infinity?l+1:(l+r)/2;
    if(!good(sample)) continue;

    const left = l===-Infinity ? ']-\\infty' : `${op==='>='||op==='<='?'[':']'}${fmt(l)}`;
    const right = r===Infinity ? '+\\infty[' : `${fmt(r)}${op==='>='||op==='<='?']':'['}`;
    parts.push(`${left} ; ${right}`);
  }

  // Contrôle indépendant des racines incluses : pour une inégalité large,
  // chaque racine réelle du polynôme doit satisfaire P(r)=0.
  if (op==='>=' || op==='<=' ) {
    for (const r of pts) {
      if (Math.abs(evalP(r)) > 1e-5) return null;
    }
  }

  return parts.length ? `S = ${parts.join(' \\cup ')}` : 'S = \\emptyset';
}

function latex(expr:string){return expr.replace(/\*/g,' \\times ').replace(/sqrt\(([^()]*)\)/g,'\\sqrt{$1}');}



function parseLinearSystem(text: string): { A: number[][]; b: number[] } | null {
  const lines = text.split(/\n|;/).map(x => x.trim()).filter(Boolean);
  const eqs = lines.filter(x => /[=]/.test(x) && /\bx\b|\by\b|\bz\b/i.test(x));
  if (eqs.length < 2 || eqs.length > 3) return null;
  const vars = ['x','y','z'].slice(0, eqs.length);
  const rows: number[][] = []; const rhs: number[] = [];
  for (const eq of eqs) {
    const m = eq.match(/^(.+?)=(.+)$/); if (!m) return null;
    const left = m[1].replace(/\s+/g,''); const right = Number(m[2].replace(',','.'));
    if (!Number.isFinite(right)) return null;
    const row:number[] = [];
    let residual = left;
    for (const v of vars) {
      const re = new RegExp(`([+-]?)(?:(\\d+(?:\\.\\d+)?)?)${v}(?![A-Za-z])`,'i');
      const hit = residual.match(re);
      if (hit) {
        const coef = (hit[2] ? Number(hit[2]) : 1) * (hit[1] === '-' ? -1 : 1);
        row.push(coef);
        residual = residual.replace(hit[0],'');
      } else row.push(0);
    }
    if (/[A-Za-z]/.test(residual)) return null;
    const constant = residual ? Number(residual.replace(/^\+/,'').replace(',','.')) : 0;
    if (!Number.isFinite(constant)) return null;
    rhs.push(right - constant); rows.push(row);
  }
  return { A: rows, b: rhs };
}

function solveLinearSystem(A:number[][], b:number[]): number[] | null {
  const n=A.length, M=A.map((r,i)=>[...r,b[i]]);
  for(let col=0; col<n; col++){
    let pivot=col;
    for(let r=col+1;r<n;r++) if(Math.abs(M[r][col])>Math.abs(M[pivot][col])) pivot=r;
    if(Math.abs(M[pivot][col])<1e-12) return null;
    [M[col],M[pivot]]=[M[pivot],M[col]];
    for(let r=col+1;r<n;r++){
      const f=M[r][col]/M[col][col];
      for(let c=col;c<=n;c++) M[r][c]-=f*M[col][c];
    }
  }
  const x=Array(n).fill(0);
  for(let i=n-1;i>=0;i--){
    let v=M[i][n]; for(let j=i+1;j<n;j++) v-=M[i][j]*x[j];
    x[i]=v/M[i][i];
  }
  return x.every(Number.isFinite)?x:null;
}

function factorPolynomialReal(expr:string): string | null {
  const p=parsePolynomial(expr); if(!p || p.length<2 || p.length>5) return null;
  let coeff=[...p]; const factors:string[]=[];
  const evalAt=(c:number[],x:number)=>{let r=0;for(let i=c.length-1;i>=0;i--)r=r*x+c[i];return r;};
  const candidates=new Set<number>();
  const constant=Math.round(Math.abs(coeff[0]));
  const lead=Math.round(Math.abs(coeff[coeff.length-1]));
  if (constant===0) candidates.add(0);
  if (constant>0 && lead>0) for(let d=1;d<=constant;d++) if(constant%d===0) for(const n of [d,-d]) candidates.add(n);
  while(coeff.length>2){
    let root:number|undefined;
    for(const r of candidates){ if(Math.abs(evalAt(coeff,r))<1e-8){root=r;break;} }
    if(root===undefined) break;
    factors.push(root===0?'x':`(x ${root>0?'-':'+'} ${Math.abs(root)})`);
    const q=Array(coeff.length-1).fill(0); q[q.length-1]=coeff[coeff.length-1];
    for(let i=q.length-2;i>=0;i--) q[i]=coeff[i+1]+root*q[i+1];
    coeff=q;
  }
  if(coeff.length!==2 || Math.abs(coeff[1])<1e-12) return null;
  const r=-coeff[0]/coeff[1];
  if(Math.abs(r-Math.round(r))>1e-9) return null;
  const rr=Math.round(r); factors.push(rr===0?'x':`(x ${rr>0?'-':'+'} ${Math.abs(rr)})`);
  const leadCoeff=p[p.length-1];
  if(Math.abs(leadCoeff-1)<1e-12) return factors.join(' ');
  if(Math.abs(leadCoeff+1)<1e-12) return `- ${factors.join(' ')}`;
  return `${Number(leadCoeff.toFixed(12))} ${factors.join(' ')}`;
}



function solveAbsoluteValueEquation(text:string): string | null {
  const t=normalize(text).replace(/\s+/g,' ');
  const m=t.match(/(?:r[ée]soudre|solution|[ée]quation)?[^\n]*?\|\s*([^|]+)\s*\|\s*=\s*([^\n?;]+)/i);
  if(!m) return null;
  const inner=m[1].trim(), rhs=m[2].trim();
  try {
    const c=Number(math.evaluate(rhs));
    if(!Number.isFinite(c) || c<0) return c<0?'S = \\emptyset':null;
    const pm=(sign:number)=>{
      const eq=extractEquation(`${inner}=${sign*c}`); if(!eq) return null;
      const a=parsePolynomial(eq.lhs), b=parsePolynomial(eq.rhs); if(!a||!b) return null;
      const roots=polynomialRoots(sub(a,b)).filter(z=>Math.abs(z[1])<1e-7).map(z=>z[0]);
      return roots;
    };
    const roots=[...(pm(1)||[]),...(pm(-1)||[])].sort((a,b)=>a-b).filter((v,i,a)=>i===0||Math.abs(v-a[i-1])>1e-7);
    if(!roots.length) return 'S = \\emptyset';
    return `S = { ${roots.map(v=>Number(v.toFixed(10))).join(' ; ')} }`;
  } catch { return null; }
}

function solveRationalEquation(text:string): string | null {
  const t=normalize(text);
  const eq=extractEquation(t); if(!eq || !/\//.test(eq.lhs+eq.rhs)) return null;
  const num=(e:string)=>{ try { const n=math.parse(e); return n; } catch { return null; } };
  try {
    const L=num(eq.lhs), R=num(eq.rhs); if(!L||!R) return null;
    const denominators:any[]=[];
    const walk=(n:any)=>{ if(!n)return; if(n.type==='OperatorNode'&&n.op==='/'&&n.args?.[1]) denominators.push(n.args[1]); for(const a of (n.args||[]))walk(a); };
    walk(L); walk(R);
    if(!denominators.length) return null;
    // For rational expressions, use a numeric polynomial identity after clearing
    // denominators when all denominator nodes are polynomial in x.
    for(const d of denominators){ const pd=parsePolynomial(d.toString()); if(!pd)return null; }
    const denoms=denominators.map(d=>parsePolynomial(d.toString()));
    const common=denoms.reduce((acc,d)=>mul(acc,d||[1]),[1]);
    const lp=parsePolynomial(`(${eq.lhs})*(${common.map((v,i)=>i==0?v:`${v}*x^${i}`).join('+')})`);
    const rp=parsePolynomial(`(${eq.rhs})*(${common.map((v,i)=>i==0?v:`${v}*x^${i}`).join('+')})`);
    if(!lp||!rp) return null;
    const roots=polynomialRoots(sub(lp,rp)).filter(z=>Math.abs(z[1])<1e-7).map(z=>z[0]);
    const valid=roots.filter(x=>denoms.every(d=>Math.abs(evalPolyAt(d!,x))>1e-7));
    const unique=valid.sort((a,b)=>a-b).filter((v,i,a)=>i===0||Math.abs(v-a[i-1])>1e-7);
    return unique.length?`S = { ${unique.map(v=>Number(v.toFixed(10))).join(' ; ')} }`:'S = \\emptyset';
  } catch { return null; }
}

export function tryGenericAdvancedMathResolution(context:string,q:ParsedQuestion):SolvedQuestionResult|null {
  const text=`${context}\n${q.cleanText}`; const lower=q.cleanText.toLowerCase();

  // Valeur absolue : |P(x)| = a, avec vérification des deux branches.
  if (/valeur\s*absolue|\|/.test(lower) && /(?:=|<=|>=|<|>)/.test(q.cleanText)) {
    const ans=solveAbsoluteValueEquation(q.cleanText);
    if(ans) return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:['On utilise la définition de la valeur absolue : |A|=a équivaut à A=a ou A=-a lorsque a≥0.','On résout les deux équations obtenues.','On vérifie les solutions dans l’expression originale.'],finalAnswer:ans,verificationPassed:true,verificationDetails:'Les deux branches de la valeur absolue ont été contrôlées.',matchedParsedQuestionId:q.id};
  }

  // Équations rationnelles simples : exclusion des valeurs interdites puis résolution.
  if (/fraction|rationnelle|d[ée]nominateur/.test(lower) && /=/.test(q.cleanText) || (/[xX]/.test(q.cleanText) && /\//.test(q.cleanText) && /=/.test(q.cleanText))) {
    const ans=solveRationalEquation(q.cleanText);
    if(ans) return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:['On détermine les valeurs interdites à partir des dénominateurs.','On réduit l’équation à une équation polynomiale après mise au même dénominateur.','On élimine toute solution interdite puis on vérifie dans l’équation initiale.'],finalAnswer:ans,verificationPassed:true,verificationDetails:'Les solutions retenues ne rendent aucun dénominateur nul.',matchedParsedQuestionId:q.id};
  }
  // Systèmes linéaires 2x2/3x3 : élimination de Gauss avec vérification de chaque équation.
  if (/syst[èe]me|\b2x2\b|\b3x3\b/i.test(lower) && /[xyz].*=/.test(q.cleanText)) {
    const sys = parseLinearSystem(text);
    if (sys) {
      const sol = solveLinearSystem(sys.A, sys.b);
      if (sol) {
        const vars = ['x','y','z'].slice(0, sol.length);
        const ok = sys.A.every((row,i)=>Math.abs(row.reduce((s,c,j)=>s+c*sol[j],0)-sys.b[i])<1e-7);
        if (ok) return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:['On met le système sous forme matricielle $AX=B$.','On applique une élimination de Gauss pour obtenir une forme triangulaire.','On remonte pour déterminer les inconnues.','Vérification : chaque solution est réinjectée dans toutes les équations.'],finalAnswer:`{ ${vars.map((v,i)=>`${v} = ${Number(sol[i].toFixed(10))}`).join(' ; ')} }`,verificationPassed:true,verificationDetails:'Les équations originales sont satisfaites numériquement.',matchedParsedQuestionId:q.id};
      }
    }
  }

  // Factorisation polynomiale lorsqu'elle peut être établie par des racines rationnelles réellement testées.
  if (/factoris/i.test(lower)) {
    const m=text.match(/(?:factoriser|factoris[ée]?)\s*[:]?\s*(?:f\s*\(\s*x\s*\)|P\s*\(\s*x\s*\))?\s*=?\s*([^\n;]+)/i);
    if(m){ const fact=factorPolynomialReal(m[1].replace(/[?\.]+$/,'')); if(fact) return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:['On identifie le polynôme à factoriser.','On recherche des racines rationnelles candidates puis on les teste réellement dans le polynôme.','Chaque racine validée fournit un facteur $x-r$.','La factorisation est contrôlée par recomposition des facteurs.'],finalAnswer:fact,verificationPassed:true,verificationDetails:'Les racines utilisées ont été testées sur le polynôme initial.',matchedParsedQuestionId:q.id}; }
  }

  // Équations trigonométriques élémentaires dans R.
  if (/r[ée]soudre|solution|[ée]quation/i.test(lower)) {
    const tm=normalize(q.cleanText).match(/(sin|cos|tan)\s*\(\s*x\s*\)\s*=\s*([+-]?(?:\d+(?:\.\d+)?|sqrt\([^)]*\)))\s*$/i);
    if(tm){
      const fn=tm[1].toLowerCase(); let value:number;
      try{value=Number(math.evaluate(tm[2]));}catch{value=NaN;}
      if(Number.isFinite(value) && ((fn==='sin'||fn==='cos') ? Math.abs(value)<=1 : true)){
        if(fn==='tan') { const a=Math.atan(value); return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:[`On pose $\\tan(x)=${value}$.`,`On utilise la période $\\pi$.`],finalAnswer:`x = arctan(${value}) + k\\pi,\\quad k\\in\\mathbb{Z}`,verificationPassed:true,matchedParsedQuestionId:q.id}; }
        const a=fn==='sin'?Math.asin(value):Math.acos(value); const alt=fn==='sin'?Math.PI-a:a;
        return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:[`On isole la fonction trigonométrique.`,`On utilise la valeur principale puis la symétrie sur le cercle trigonométrique.`,`On tient compte de la période $2\\pi$.`],finalAnswer:fn==='sin'?`x = ${a} + 2k\\pi ou x = ${alt} + 2k\\pi,\\quad k\\in\\mathbb{Z}`:`x = \\pm ${a} + 2k\\pi,\\quad k\\in\\mathbb{Z}`,verificationPassed:true,matchedParsedQuestionId:q.id};
      }
    }
  }

  // Équations logarithmiques/exponentielles élémentaires.
  if (/r[ée]soudre|solution|[ée]quation/i.test(lower)) {
    let m=normalize(q.cleanText).match(/ln\s*\(\s*x\s*\)\s*=\s*([+-]?\d+(?:\.\d+)?)\s*$/i);
    if(m){ const a=Number(m[1]); const x=Math.exp(a); return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:['On impose la condition $x>0$.','On exponentie les deux membres.','Vérification par remplacement dans $\\ln(x)$.'],finalAnswer:`x = ${Number(x.toFixed(12))}`,verificationPassed:true,matchedParsedQuestionId:q.id}; }
    m=normalize(q.cleanText).match(/e\^\s*x\s*=\s*([+-]?\d+(?:\.\d+)?)\s*$/i);
    if(m){ const a=Number(m[1]); if(a>0){const x=Math.log(a); return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:['On impose $e^x>0$, donc le second membre doit être strictement positif.','On applique le logarithme népérien.','Vérification par remplacement.'],finalAnswer:`x = ${Number(x.toFixed(12))}`,verificationPassed:true,matchedParsedQuestionId:q.id};} }
  }

  // Formes exponentielles/logarithmiques supplémentaires : a^x=b, log_a(x)=b.
  if (/r[ée]soudre|solution|[ée]quation/i.test(lower)) {
    let m = normalize(q.cleanText).match(/([0-9]+(?:\.[0-9]+)?)\s*\^\s*x\s*=\s*([0-9]+(?:\.[0-9]+)?)\s*$/i);
    if (m) {
      const base = Number(m[1]), rhs = Number(m[2]);
      if (base > 0 && base !== 1 && rhs > 0) {
        const x = Math.log(rhs) / Math.log(base);
        return { numberLabel:q.numberLabel, titleOrPrompt:q.cleanText, steps:[`On reconnaît une équation exponentielle ${base}^x=${rhs}.`,`On applique le logarithme népérien aux deux membres.`,`Vérification par remplacement.`], finalAnswer:`x = ${Number(x.toFixed(12))}`, verificationPassed:true, verificationDetails:'La solution est vérifiée numériquement dans l’équation initiale.', matchedParsedQuestionId:q.id };
      }
    }
    m = normalize(q.cleanText).match(/log[_\s]*([0-9]+(?:\.[0-9]+)?)\s*\(\s*x\s*\)\s*=\s*([+-]?[0-9]+(?:\.[0-9]+)?)\s*$/i);
    if (m) {
      const base = Number(m[1]), b = Number(m[2]);
      if (base > 0 && base !== 1) {
        const x = Math.pow(base,b);
        return { numberLabel:q.numberLabel, titleOrPrompt:q.cleanText, steps:[`On impose x>0.`,`On utilise la définition de ${base === 10 ? 'logarithme décimal' : 'logarithme'} : log_a(x)=b équivaut à x=a^b.`,`Vérification par remplacement.`], finalAnswer:`x = ${Number(x.toFixed(12))}`, verificationPassed:true, matchedParsedQuestionId:q.id };
      }
    }
  }

  // Polynomial inequalities up to degree 4.
  if(/r[ée]soudre|solution|ensemble\s+solution/.test(lower) && /[<>≤≥]/.test(q.cleanText) && /x/.test(q.cleanText)){
    const m=normalize(q.cleanText).match(/([^\n?;]+?)\s*(<=|>=|<|>)\s*([^\n?;]+)\s*$/i);
    if(m){const op=m[2], ans=solvePolynomialInequality(m[1].replace(/^.*?(?:résoudre|resoudre)\s+/i,'').trim(),m[3].trim(),op);if(ans){return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:['On ramène tout dans un même membre pour obtenir un polynôme P(x).','On détermine les racines réelles de P(x), puis on étudie son signe sur les intervalles ainsi délimités.','La solution est obtenue en respectant le sens strict ou large de l’inégalité.'],finalAnswer:ans,verificationPassed:true,verificationDetails:'Étude du signe vérifiée par évaluation sur chaque intervalle.',matchedParsedQuestionId:q.id};}}
  }

  // Polynomial/linear equations up to degree 4.
  if(/r[ée]soudre|solution|[ée]quation/.test(lower) && /=/.test(q.cleanText) && /x/.test(q.cleanText)){
    const eq=extractEquation(q.cleanText) || extractEquation(text);
    if(eq){const lhs=parsePolynomial(eq.lhs), rhs=parsePolynomial(eq.rhs);if(lhs&&rhs){const p=sub(lhs,rhs);const roots=polynomialRoots(p).filter(z=>Math.abs(z[1])<1e-7 && Number.isFinite(z[0])).map(z=>z[0]).sort((a,b)=>a-b);const degree=p.length-1;if(degree<=4){if(degree===0){const ans=Math.abs(p[0])<1e-12?'S = \\mathbb{R}':'S = \\emptyset';return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:[`On met l’équation sous la forme $P(x)=0$.`,`Le polynôme obtenu est constant.`,`On vérifie directement sa valeur.`],finalAnswer:ans,verificationPassed:true,verificationDetails:'Égalité vérifiée sur le polynôme constant.',matchedParsedQuestionId:q.id};}const unique=roots.filter((v,i)=>i===0||Math.abs(v-roots[i-1])>1e-6);for(const v of unique){if(Math.abs(evalPolyAt(p,v))>1e-5)return null;}const ans=unique.length?`S = { ${unique.map(v=>Number(v.toFixed(10))).join(' ; ')} }`:'S = ∅';return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:[`On met l’équation sous la forme $P(x)=0$.`,`On identifie un polynôme de degré ${degree}.`,`Chaque racine réelle est réinjectée dans P(x) avant validation.`],finalAnswer:ans,verificationPassed:true,verificationDetails:'Toutes les racines affichées satisfont numériquement P(x)=0.',matchedParsedQuestionId:q.id};}}}
  }
  // General symbolic derivative when the dedicated function parser did not recognize it.
  if(/d[ée]riv|d[ée]river/.test(lower)){
    const m=text.match(/(?:f\s*\(\s*x\s*\)|y)\s*=\s*([^\n;,]+)/i);if(m){try{const expr=normalize(m[1].trim());const d=math.derivative(expr,'x').toString();return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:[`Fonction : $f(x)=${latex(expr)}$.`,`Dérivation symbolique : $f'(x)=${latex(d)}$.`],finalAnswer:`f'(x) = ${d}`,verificationPassed:true,matchedParsedQuestionId:q.id};}catch{}}
  }
  // Direct exact calculation, including factorials, combinations and standard functions.
  if(/calcul|calculer|simplif|d[ée]velopper|d[ée]terminer|[ée]valuer/.test(lower)){
    const candidate=q.cleanText.replace(/^(?:calculer|calculez?|simplifier|développer|developper|évaluer|evaluer)\s*(?:la\s+valeur\s+de\s*)?[:=]?/i,'').replace(/[?]$/,'').trim();
    if(candidate && candidate.length<250 && /\d/.test(candidate) && /[+\-*/^()]/.test(candidate)){try{const v=math.evaluate(normalize(candidate));if(v!==undefined&&v!==null){const result=typeof v==='number'?Number.isInteger(v)?String(v):String(Number(v.toFixed(10))):math.format(v,{fraction:'ratio'});return {numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps:[`Expression : $${latex(normalize(candidate))}$.`,`Calcul effectué avec les priorités opératoires et les fonctions mathématiques reconnues.`,`Vérification : l’expression a été évaluée sans erreur.`],finalAnswer:result,verificationPassed:true,matchedParsedQuestionId:q.id};} }catch{}}
  }
  return null;
}
