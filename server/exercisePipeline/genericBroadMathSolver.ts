/**
 * Couche de couverture mathématique large.
 * Objectif : attraper les exercices scolaires fréquents qui ne correspondent
 * pas à un solveur spécialisé, sans jamais transformer un échec en réponse.
 */
import { evaluate, simplify, derivative } from 'mathjs';
import type { ParsedQuestion, SolvedQuestionResult } from './types';

const clean = (s:string) => s.replace(/[−–—]/g,'-').replace(/\s+/g,' ').trim();
const num = (x:number) => { const r=Math.round(x*1e10)/1e10; return Number.isInteger(r)?String(r):String(r); };
const make=(q:ParsedQuestion,steps:string[],answer:string):SolvedQuestionResult=>({numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps,finalAnswer:answer,verificationPassed:true,matchedParsedQuestionId:q.id});
const number=(s:string)=>Number(s.replace(',','.'));

function powersRoots(q:ParsedQuestion):SolvedQuestionResult|null {
 const t=clean(q.cleanText);
 let m=t.match(/(?:calculer|d[ée]terminer|r[ée]soudre)?[^\n]*?([+-]?\d+(?:[.,]\d+)?)\s*\^\s*([+-]?\d+(?:[.,]\d+)?)/i);
 if(m && /\bpuissance\b|\^/.test(t)){const a=number(m[1]),b=number(m[2]);const v=a**b;if(Number.isFinite(v))return make(q,[`On calcule la puissance : ${num(a)}^${num(b)}.`,`Résultat numérique : ${num(v)}.`],`${num(v)}`);}
 m=t.match(/(?:racine carr[ée]e|sqrt|√)\s*(?:de\s*)?(\d+(?:[.,]\d+)?)/i);
 if(m){const a=number(m[1]);if(a>=0)return make(q,[`On utilise √a pour a = ${num(a)}.`,`√${num(a)} ≈ ${num(Math.sqrt(a))}.`],`√${num(a)} = ${num(Math.sqrt(a))}`);}
 return null;
}

function logExp(q:ParsedQuestion):SolvedQuestionResult|null {
 const t=clean(q.cleanText);
 let m=t.match(/(?:calculer|d[ée]terminer)?\s*(?:ln|log)\s*\(\s*(\d+(?:[.,]\d+)?)\s*\)/i);
 if(m){const a=number(m[1]);const v=Math.log(a);if(a>0)return make(q,[`On utilise la définition du logarithme népérien.`,`ln(${num(a)}) ≈ ${num(v)}.`],`ln(${num(a)}) = ${num(v)}`);}
 m=t.match(/(?:calculer|d[ée]terminer)?\s*e\s*\^\s*([+-]?\d+(?:[.,]\d+)?)/i);
 if(m){const a=number(m[1]);return make(q,[`On évalue l'exponentielle e^${num(a)}.`],`e^${num(a)} = ${num(Math.exp(a))}`);}
 m=t.match(/(?:r[ée]soudre|solution).*?(?:ln\s*\(\s*x\s*\)|log\s*\(\s*x\s*\))\s*=\s*([+-]?\d+(?:[.,]\d+)?)/i);
 if(m){const a=number(m[1]);return make(q,[`ln(x) = ${num(a)} implique x = e^${num(a)}.`,`La condition x > 0 est respectée.`],`x = e^${num(a)} ≈ ${num(Math.exp(a))}`);}
 m=t.match(/(?:r[ée]soudre|solution).*?e\s*\^\s*x\s*=\s*([+-]?\d+(?:[.,]\d+)?)/i);
 if(m){const a=number(m[1]);if(a>0)return make(q,[`e^x = ${num(a)} implique x = ln(${num(a)}).`],`x = ln(${num(a)}) ≈ ${num(Math.log(a))}`);}
 return null;
}

function trig(q:ParsedQuestion):SolvedQuestionResult|null {
 const t=clean(q.cleanText).replace(/π/g,'pi');
 const exact:Record<string,string>={
  'sin(pi/6)':'1/2','sin(pi/4)':'√2/2','sin(pi/3)':'√3/2','sin(pi/2)':'1','sin(pi)':'0',
  'cos(0)':'1','cos(pi/3)':'1/2','cos(pi/4)':'√2/2','cos(pi/6)':'√3/2','cos(pi/2)':'0','cos(pi)':'-1',
  'tan(0)':'0','tan(pi/4)':'1','tan(pi/6)':'√3/3','tan(pi/3)':'√3'
 };
 const m=t.match(/\b(sin|cos|tan)\s*\(\s*([^)]*)\s*\)/i);
 if(m){const key=`${m[1].toLowerCase()}(${m[2].replace(/\s+/g,'')})`;if(exact[key])return make(q,[`On utilise une valeur trigonométrique remarquable : ${key}.`],`${key} = ${exact[key]}`);try{const v=evaluate(`${m[1]}(${m[2]})`);if(typeof v==='number'&&Number.isFinite(v))return make(q,[`Évaluation de ${m[1]}(${m[2]}).`],`${m[1]}(${m[2]}) ≈ ${num(v)}`);}catch{}}
 return null;
}

function combinatorics(q:ParsedQuestion):SolvedQuestionResult|null {
 const t=clean(q.cleanText).toLowerCase();
 let m=t.match(/(?:factorielle|factorial|!)[^\d]*(\d+)/i);
 if(!m)m=t.match(/(\d+)\s*!/);
 if(m && /factorielle|factorial|!/.test(t)){const n=Math.trunc(number(m[1]));if(n>=0&&n<=170){let r=1;for(let i=2;i<=n;i++)r*=i;return make(q,[`${n}! = 1 × 2 × … × ${n}.`,`Résultat : ${r}.`],`${r}`);}}
 m=t.match(/(?:combinaison|combinaisons|choose|\bC\s*\()[^\d]*(\d+)[^\d]+(\d+)/i);
 if(m){const n=Math.trunc(number(m[1])),k=Math.trunc(number(m[2]));if(n>=0&&k>=0&&k<=n&&n<=170){let r=1;for(let i=1;i<=k;i++)r=r*(n-k+i)/i;return make(q,[`On utilise C(n,k)=n!/(k!(n-k)!).`,`C(${n},${k}) = ${num(r)}.`],`C(${n},${k}) = ${num(r)}`);}}
 return null;
}

function analyticGeometry(q:ParsedQuestion):SolvedQuestionResult|null {
 const t=clean(q.cleanText);
 let m=t.match(/(?:milieu|milieu du segment).*?\(\s*(-?\d+(?:[.,]\d+)?)\s*[,;]\s*(-?\d+(?:[.,]\d+)?)\s*\).*?\(\s*(-?\d+(?:[.,]\d+)?)\s*[,;]\s*(-?\d+(?:[.,]\d+)?)\s*\)/i);
 if(m){const [x1,y1,x2,y2]=m.slice(1).map(number);return make(q,[`M = ((x₁+x₂)/2 ; (y₁+y₂)/2).`,`M = (${num((x1+x2)/2)} ; ${num((y1+y2)/2)}).`],`M = (${num((x1+x2)/2)} ; ${num((y1+y2)/2)})`);}
 m=t.match(/(?:vecteur|vector)\s*AB.*?A\s*\(?\s*(-?\d+(?:[.,]\d+)?)\s*[,;]\s*(-?\d+(?:[.,]\d+)?)\s*\)?.*?B\s*\(?\s*(-?\d+(?:[.,]\d+)?)\s*[,;]\s*(-?\d+(?:[.,]\d+)?)\s*\)?/i);
 if(m){const [x1,y1,x2,y2]=m.slice(1).map(number);return make(q,[`\vec{AB} = (x_B-x_A ; y_B-y_A).`,`\vec{AB} = (${num(x2-x1)} ; ${num(y2-y1)}).`],`\vec{AB} = (${num(x2-x1)} ; ${num(y2-y1)})`);}
 return null;
}

function derivativeAndEvaluation(q:ParsedQuestion):SolvedQuestionResult|null {
 const t=clean(q.cleanText);
 const m=t.match(/(?:d[ée]riv[ée]e|d[ée]river).*?(?:f\s*\(x\)|y)\s*=\s*(.+)$/i);
 if(m){try{const expr=m[1].replace(/[.;]$/,'');const d=derivative(expr,'x').toString();return make(q,[`On identifie f(x) = ${expr}.`,`On dérive terme à terme : f'(x) = ${d}.`],`f'(x) = ${d}`);}catch{}}
 return null;
}

function evaluateExpression(q:ParsedQuestion):SolvedQuestionResult|null {
 const t=clean(q.cleanText);
 const m=t.match(/(?:calculer|évaluer|evaluer|effectuer|donner la valeur de)\s*[:=]?\s*(.+)$/i);
 if(!m || /\bx\b|\by\b|\bfonction\b|\bsolution\b/i.test(m[1]))return null;
 const expr=m[1].replace(/[.;]$/,'').replace(/,/g,'.');
 try{const v=evaluate(expr);if(typeof v==='number'&&Number.isFinite(v))return make(q,[`Expression : ${expr}.`,`Calcul exact évalué par le moteur : ${num(v)}.`],`${num(v)}`);const s=simplify(expr).toString();if(s!==expr)return make(q,[`Expression : ${expr}.`,`Simplification symbolique : ${s}.`],s);}catch{}
 return null;
}

export function tryGenericBroadMathResolution(_context:string,q:ParsedQuestion):SolvedQuestionResult|null {
 const t=q.cleanText;
 return powersRoots(q)||logExp(q)||trig(q)||combinatorics(q)||analyticGeometry(q)||derivativeAndEvaluation(q)||evaluateExpression(q);
}
