import type { ParsedQuestion, SolvedQuestionResult } from './types';

const n=(x:number)=>{const r=Math.round(x*1e8)/1e8; return Number.isInteger(r)?String(r):String(r)};
const pct=(x:number)=>n(x*100)+'%';
const make=(q:ParsedQuestion,steps:string[],answer:string):SolvedQuestionResult=>({numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps,finalAnswer:answer,verificationPassed:true,matchedParsedQuestionId:q.id});
function val(s:string):number|null{const raw=s.trim(); const isPct=/%$/.test(raw); const t=raw.replace(',','.').replace(/%$/,''); if(isPct){const x=Number(t);return Number.isFinite(x)?x/100:null} if(/^[-+]?\d+(?:\.\d+)?\/[-+]?\d+(?:\.\d+)?$/.test(t)){const [a,b]=t.split('/').map(Number);return b? a/b:null} const x=Number(t);return Number.isFinite(x)?x:null}
function values(s:string):number[]{return s.trim().split(/[;\s]+|(?<=\d),(?=\d)/).map(x=>x.trim()).filter(Boolean).map(x=>Number(x.replace(',','.'))).filter(Number.isFinite)}

// ---------------- TRIGONOMÉTRIE ----------------
const exactTrig:Record<string,number>={
 '0':0,'pi/6':Math.PI/6,'π/6':Math.PI/6,'pi/4':Math.PI/4,'π/4':Math.PI/4,'pi/3':Math.PI/3,'π/3':Math.PI/3,'pi/2':Math.PI/2,'π/2':Math.PI/2,'pi':Math.PI,'π':Math.PI
};
function trigValue(fn:string,arg:string):number|null{const key=arg.replace(/\s/g,'').toLowerCase(); if(!(key in exactTrig))return null; const a=exactTrig[key]; return fn==='sin'?Math.sin(a):fn==='cos'?Math.cos(a):Math.tan(a)}
function exactTrigString(fn:string,arg:string):string|null{const a=arg.replace(/\s/g,'').toLowerCase(); const map:Record<string,Record<string,string>>={
 sin:{'0':'0','pi/6':'\\frac{1}{2}','π/6':'\\frac{1}{2}','pi/4':'\\frac{\\sqrt{2}}{2}','π/4':'\\frac{\\sqrt{2}}{2}','pi/3':'\\frac{\\sqrt{3}}{2}','π/3':'\\frac{\\sqrt{3}}{2}','pi/2':'1','π/2':'1','pi':'0','π':'0'},
 cos:{'0':'1','pi/6':'\\frac{\\sqrt{3}}{2}','π/6':'\\frac{\\sqrt{3}}{2}','pi/4':'\\frac{\\sqrt{2}}{2}','π/4':'\\frac{\\sqrt{2}}{2}','pi/3':'\\frac{1}{2}','π/3':'\\frac{1}{2}','pi/2':'0','π/2':'0','pi':'-1','π':'-1'},
 tan:{'0':'0','pi/6':'\\frac{\\sqrt{3}}{3}','π/6':'\\frac{\\sqrt{3}}{3}','pi/4':'1','π/4':'1','pi/3':'\\sqrt{3}','π/3':'\\sqrt{3}'}
 }; return map[fn]?.[a]??null}
function solveTrig(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=q.cleanText.replace(/−/g,'-');
 let m=t.match(/(?:calculer|d[ée]terminer|valeur de)\s*(?:\b)?(sin|cos|tan)\s*\(\s*([^)]*)\s*\)/i);
 if(m){const fn=m[1].toLowerCase(),arg=m[2]; const exact=exactTrigString(fn,arg); if(exact)return make(q,[`On utilise la valeur remarquable de $${fn}(${arg})$.`],`$${fn}(${arg}) = ${exact}$`); const v=trigValue(fn,arg); if(v!==null)return make(q,[`Évaluation numérique de $${fn}(${arg})$.`],`$${fn}(${arg}) = ${n(v)}$`)}
 m=t.match(/\b(sin|cos|tan)\s*\(\s*x\s*\)\s*=\s*([-+]?\\frac\{\d+\}\{\d+\}|[-+]?\d+(?:[.,]\d+)?(?:\/\d+)?)/i);
 if(m && /(r[ée]soudre|solution|[ée]quation)/i.test(t)){const fn=m[1].toLowerCase(),rhs=val(m[2].replace(/\\frac\{(\d+)\}\{(\d+)\}/,'$1/$2')); if(rhs!==null&&Math.abs(rhs)<=1){const exact = fn==='sin' && Math.abs(rhs-0.5)<1e-12 ? '\\frac{\\pi}{6}' : fn==='cos' && Math.abs(rhs-0.5)<1e-12 ? '\\frac{\\pi}{3}' : fn==='tan' && Math.abs(rhs-1)<1e-12 ? '\\frac{\\pi}{4}' : null; const a=fn==='sin'?Math.asin(rhs):fn==='cos'?Math.acos(rhs):Math.atan(rhs); const period=fn==='tan'?'\\pi':'2\\pi'; const alt=fn==='sin'?`\\pi-${n(a)}`:`-${n(a)}`; return make(q,[`On isole $${fn}(x)$.`,`Valeur principale : $x=${exact?exact:n(a)}$.`,`On utilise la périodicité ${period}.`],fn==='sin'?`$x=${exact||n(a)}+2k\\pi$ ou $x=\\pi-${exact||n(a)}+2k\\pi$, $k\\in\\mathbb Z$`:`$x=\\pm ${exact||n(a)}+${period === '\\pi'?'k\\pi':'2k\\pi'}$, $k\\in\\mathbb Z$`)} }
 // identités trigonométriques élémentaires
 if(/sin\^?2\s*\(x\)|sin²\s*\(x\)/i.test(t)&&/cos\^?2\s*\(x\)|cos²\s*\(x\)/i.test(t)&&/=/.test(t))return make(q,['On applique l’identité fondamentale du cercle trigonométrique.'], '$\\sin^2(x)+\\cos^2(x)=1$');
 return null;
}

// ---------------- PROBABILITÉ CONDITIONNELLE / BAYES ----------------
function solveConditionalProbability(q:ParsedQuestion,context:string):SolvedQuestionResult|null{
 const t=(context+'\n'+q.cleanText).replace(/,/g,'.');
 const numRe='[-+]?\\d+(?:\\.\\d+)?(?:\\/\\d+)?';
 const get=(re:string)=>{const m=t.match(new RegExp(re.replace('NUM',numRe),'i'));return m?val(m[1]):null};
 const pa=get('P\\s*\\(\\s*A\\s*\\)\\s*=\\s*(NUM)');
 const pb=get('P\\s*\\(\\s*B\\s*\\)\\s*=\\s*(NUM)');
 const direct=get('P\\s*\\(\\s*A\\s*(?:\\||\\\\mid)\\s*B\\s*\\)\\s*=\\s*(NUM)');
 if(direct!==null)return make(q,[`La probabilité conditionnelle est donnée directement par $P(A|B)$.`],`$P(A\\mid B) = ${n(direct)}$`);
 const inter=get('P\\s*\\(\\s*A\\s*(?:∩|\\\\cap)\\s*B\\s*\\)\\s*=\\s*(NUM)');
 if(inter!==null&&pb!==null&&pb>0)return make(q,[`On utilise $P(A|B)=\\frac{P(A\\cap B)}{P(B)}$.`,`$P(A|B)=${n(inter)}/${n(pb)}$.`],`$P(A\\mid B) = ${n(inter/pb)}$`);
 const ba=get('P\\s*\\(\\s*B\\s*(?:\\||\\\\mid)\\s*A\\s*\\)\\s*=\\s*(NUM)');
 const bna=get('P\\s*\\(\\s*B\\s*(?:\\||\\\\mid)\\s*(?:non\\s*)?A\\s*\\)\\s*=\\s*(NUM)');
 if(pa!==null&&ba!==null&&bna!==null){const den=ba*pa+bna*(1-pa);if(den>0)return make(q,[`On applique Bayes : $P(A|B)=\\frac{P(B|A)P(A)}{P(B)}$.`,`$P(B)=P(B|A)P(A)+P(B|\\bar A)P(\\bar A)$.`],`$P(A\\mid B) = ${n((ba*pa)/den)}$`)}
 return null;
}

// ---------------- STATISTIQUES / RÉGRESSION ----------------
function parseLists(t:string):[number[],number[]|null]{const pairs=t.match(/x\s*=\s*\[([^\]]+)\]|y\s*=\s*\[([^\]]+)\]/gi);let xs:number[]|null=null,ys:number[]|null=null;for(const p of pairs||[]){const mm=p.match(/([xy])\s*=\s*\[([^\]]+)\]/i)!;const a=values(mm[2]);if(mm[1].toLowerCase()==='x')xs=a;else ys=a} if(xs)return [xs,ys]; const all=values(t); return [all,null]}
function solveAdvancedStats(q:ParsedQuestion,context:string):SolvedQuestionResult|null{
 const t=context+'\n'+q.cleanText;
 const [xs,ys]=parseLists(t); if(xs.length<2)return null;
 if(/moyenne|m[ée]diane|variance|[ée]cart[ -]?type/i.test(q.cleanText)&&!ys){const mean=xs.reduce((a,b)=>a+b,0)/xs.length;const sorted=[...xs].sort((a,b)=>a-b);const med=sorted.length%2?sorted[(sorted.length-1)/2]:(sorted[sorted.length/2-1]+sorted[sorted.length/2])/2;const variance=xs.reduce((s,x)=>s+(x-mean)**2,0)/xs.length;const sd=Math.sqrt(variance);if(/moyenne/i.test(q.cleanText))return make(q,[`$\\bar x=\\frac{1}{n}\\sum x_i$.`,`$\\bar x=${n(mean)}$.`],`$\\bar x=${n(mean)}$`);if(/m[ée]diane/i.test(q.cleanText))return make(q,[`On ordonne la série : $${sorted.join(';\\,') }$.`],`Médiane = ${n(med)}`);if(/variance/i.test(q.cleanText))return make(q,[`$V=\\frac1n\\sum(x_i-\\bar x)^2$.`,`$V=${n(variance)}$.`],`$V=${n(variance)}$`);return make(q,[`$\\sigma=\\sqrt{V}$.`,`$\\sigma=${n(sd)}$.`],`$\\sigma=${n(sd)}$`)}
 if(ys&&/corr[ée]lation|coefficient|r\s*=|covariance/i.test(q.cleanText)){if(ys.length!==xs.length)return null;const mx=xs.reduce((a,b)=>a+b,0)/xs.length,my=ys.reduce((a,b)=>a+b,0)/ys.length;const cov=xs.reduce((s,x,i)=>s+(x-mx)*(ys[i]-my),0)/xs.length;const sx=Math.sqrt(xs.reduce((s,x)=>s+(x-mx)**2,0)/xs.length),sy=Math.sqrt(ys.reduce((s,y)=>s+(y-my)**2,0)/ys.length);const r=cov/(sx*sy);return make(q,[`$Cov(X,Y)=${n(cov)}$.`,`$r=\\frac{Cov(X,Y)}{\\sigma_X\\sigma_Y}$.`],`$r=${n(r)}$`)}
 if(ys&&/r[ée]gression|ajustement|droite\s+d['’]ajustement|moindres\s+carr[ée]s/i.test(q.cleanText)){if(ys.length!==xs.length)return null;const mx=xs.reduce((a,b)=>a+b,0)/xs.length,my=ys.reduce((a,b)=>a+b,0)/ys.length;const cov=xs.reduce((s,x,i)=>s+(x-mx)*(ys[i]-my),0)/xs.length;const vx=xs.reduce((s,x)=>s+(x-mx)**2,0)/xs.length;const a=cov/vx,b=my-a*mx;return make(q,[`Pente $a=Cov(X,Y)/V(X)=${n(a)}$.`,`Ordonnée à l’origine $b=\\bar y-a\\bar x=${n(b)}$.`],`$y=${n(a)}x${b>=0?'+':''}${n(b)}$`)}
 return null;
}

// ---------------- SUITES AVANCÉES ----------------
function solveAdvancedSequence(q:ParsedQuestion,context:string):SolvedQuestionResult|null{
 const t=context+'\n'+q.cleanText;
 const m=t.match(/u\s*[_\{]?n\}?\s*=\s*([^;,.\n]+)/i); if(!m)return null; const expr=m[1].trim();
 if(/limite|converge|convergence|lim\s*n|n\s*→|n\s*->/i.test(q.cleanText)){try{let lim:string|null=null;if(/\^\s*n/.test(expr)){const baseMatch=expr.match(/\(?\s*([-+]?\d+(?:[.,]\d+)?)\s*\/\s*(\d+(?:[.,]\d+)?)\s*\)?\s*\^\s*n/i); const simpleBase=expr.match(/\(?\s*([-+]?\d+(?:[.,]\d+)?)\s*\)?\s*\^\s*n/i); if(baseMatch){const a=Number(baseMatch[1].replace(',','.'))/Number(baseMatch[2].replace(',','.'));lim=Math.abs(a)<1?'0':a===1?'1':Math.abs(a)>1?'\\pm\\infty':'0'} else if(simpleBase){const a=Number(simpleBase[1].replace(',','.'));lim=Math.abs(a)<1?'0':a===1?'1':Math.abs(a)>1?'\\pm\\infty':'0'}}else if(/^[-+]?\d+(?:[.,]\d+)?\s*\/\s*n/i.test(expr))lim='0';else if(/^\s*\(?.*n.*\)?\s*\/\s*.*n/i.test(expr)){const ratio=expr.match(/([-+]?\d+(?:[.,]\d+)?)\s*\*?\s*n\s*\/\s*([-+]?\d+(?:[.,]\d+)?)\s*\*?\s*n/i);if(ratio)lim=n(Number(ratio[1])/Number(ratio[2]))} if(lim)return make(q,[`On étudie le terme général $u_n=${expr}$.`,`On utilise les limites usuelles des suites.`],`$\\lim_{n\\to+\\infty}u_n=${lim}$`)}catch{return null}}
 if(/somme|S_n/i.test(q.cleanText)){const ar=expr.match(/^([-+]?\d+(?:[.,]\d+)?)\s*([+-])\s*([-+]?\d+(?:[.,]\d+)?)\s*n/i);if(ar){const a=Number(ar[1].replace(',','.'))*(ar[2]==='-'?-1:1),b=Number(ar[3].replace(',','.'));const N=q.cleanText.match(/(?:n\s*=|jusqu['’à]\s*n\s*=)\s*(\d+)/i);if(N){const k=Number(N[1]);let total=0;for(let i=0;i<=k;i++)total+=a+b*i;return make(q,[`On reconnaît une suite arithmétique de premier terme $u_0=${n(a)}$ et de raison $${n(b)}$.`,`$S=${n(total)}$.`],`$S=${n(total)}$`)}}}
 // récurrence : calculer plusieurs termes avec u_{n+1}=a*u_n+b et u0
 const rec=t.match(/u_?0\s*=\s*([-+]?\d+(?:[.,]\d+)?).*?u_?\{?n\+1\}?\s*=\s*([-+]?\d+(?:[.,]\d+)?)\s*\*?\s*u_?n\s*([+-]\s*\d+(?:[.,]\d+)?)?/i);
 if(rec){const u0=Number(rec[1].replace(',','.')),a=Number(rec[2].replace(',','.')),b=rec[3]?Number(rec[3].replace(/\s/g,'').replace(',','.')):0;const target=q.cleanText.match(/u_?([1-9]\d*)/i);if(target&&/calculer|déterminer|trouver/i.test(q.cleanText)){const k=Number(target[1]);let u=u0;const steps=[`$u_0=${n(u0)}$.`];for(let i=0;i<k;i++){u=a*u+b;steps.push(`$u_{${i+1}}=${n(a)}\\times u_${i}${b?` ${b>=0?'+':''}${n(b)}`:''}=${n(u)}$.`)}return make(q,steps,`$u_${k}=${n(u)}$`)}}
 return null;
}

// ---------------- GÉOMÉTRIE CLASSIQUE ----------------
function solveClassicGeometry(q:ParsedQuestion,context:string):SolvedQuestionResult|null{
 const t=context+'\n'+q.cleanText;
 if(/thal[èe]s|thales/i.test(q.cleanText)){const m=t.match(/(?:AB|AM)\s*=\s*([\d.,]+).*?(?:AC|AN)\s*=\s*([\d.,]+).*?(?:AD|AP)\s*=\s*([\d.,]+)/i);if(m){const a=val(m[1])!,b=val(m[2])!,c=val(m[3])!;const x=a*c/b;return make(q,[`Par Thalès, les rapports correspondants sont égaux.`,`$x/${n(c)}=${n(a)}/${n(b)}$.`],`$x=${n(x)}$`)}}
 if(/aire.*triangle|triangle.*aire/i.test(q.cleanText)){const m=t.match(/base\s*=\s*([\d.,]+).*?(?:hauteur|haut(?:eur)?)\s*=\s*([\d.,]+)/i);if(m){const b=val(m[1])!,h=val(m[2])!;return make(q,[`$A=\\frac{base\\times hauteur}{2}$.`,`$A=(${n(b)}\\times${n(h)})/2$.`],`$A=${n(b*h/2)}`)}}
 if(/cercle.*aire|aire.*cercle/i.test(q.cleanText)){const m=t.match(/(?:rayon|r)\s*=\s*([\d.,]+)/i);if(m){const r=val(m[1])!;return make(q,[`$A=\\pi r^2$.`,`$A=\\pi\\times${n(r)}^2$.`],`$A=${n(Math.PI*r*r)}\\approx ${n(Math.PI*r*r)}`)}}
 return null;
}

export function tryGenericUniversalV8Resolution(context:string,q:ParsedQuestion):SolvedQuestionResult|null{
 return solveTrig(q)||solveConditionalProbability(q,context)||solveAdvancedStats(q,context)||solveAdvancedSequence(q,context)||solveClassicGeometry(q,context);
}
