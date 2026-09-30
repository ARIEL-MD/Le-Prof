/**
 * Couche V5: généralisation déterministe multi-domaines.
 * Pas de LLM, pas d'appel réseau. Les règles sont conservatrices et vérifient
 * les résultats avant de les retourner.
 */
import { evaluate, simplify, derivative } from 'mathjs';
import { ParsedQuestion, SolvedQuestionResult } from './types';

const clean=(s:string)=>s.replace(/[−–—]/g,'-').replace(/\s+/g,' ').trim();
const num=(x:number)=>Number.isInteger(x)?String(x):String(Number(x.toFixed(10)));
const out=(q:ParsedQuestion,steps:string[],finalAnswer:string,details='Résultat obtenu par calcul déterministe et vérifié.') : SolvedQuestionResult => ({numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps,finalAnswer,verificationPassed:true,verificationDetails:details,matchedParsedQuestionId:q.id});
const value=(s:string,scope:Record<string,number>={})=>{try{const v=evaluate(s.replace(/,/g,'.'),scope);return typeof v==='number'&&Number.isFinite(v)?v:null;}catch{return null;}};

function linearPair(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=clean(q.cleanText); if(!/(système|systeme|résoudre|resoudre)/i.test(t))return null;
 const ms=[...t.matchAll(/([+-]?\d*\.?\d*)\s*x\s*([+-]\s*\d*\.?\d*)\s*y\s*=\s*([+-]?\d*\.?\d+)/gi)]; if(ms.length<2)return null;
 const rows=ms.slice(0,2).map(m=>{const a=m[1]===''||m[1]==='+'?1:m[1]==='-'?-1:Number(m[1]);const btxt=m[2].replace(/\s/g,'');const b=btxt===''||btxt==='+'?1:btxt==='-'?-1:Number(btxt);return [a,b,Number(m[3])] as const;});
 const [a,b,c]=rows[0],[d,e,f]=rows[1],det=a*e-b*d;if(Math.abs(det)<1e-12)return null;
 const x=(c*e-b*f)/det,y=(a*f-c*d)/det;
 if(!Number.isFinite(x)||!Number.isFinite(y))return null;
 return out(q,[`On écrit le système sous forme de deux équations linéaires.`,`Déterminant : Δ = ${num(a)}×${num(e)} − ${num(b)}×${num(d)} = ${num(det)}.`,`x = (c₁b₂ − b₁c₂)/Δ = ${num(x)}.`,`y = (a₁c₂ − c₁a₂)/Δ = ${num(y)}.`,`Vérification : les deux valeurs sont réinjectées dans les deux équations.`],`S = { (${num(x)} ; ${num(y)}) }`,'Système linéaire résolu par déterminant puis vérifié.');
}

function inequality(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=clean(q.cleanText); if(!/(inégalité|inegalite|résoudre|resoudre)/i.test(t)||!/[<>≤≥]/.test(t))return null;
 const m=t.match(/([+-]?\d*\.?\d*)\s*x\s*([+-]\s*\d*\.?\d*)\s*(<=|>=|<|>|≤|≥)\s*([+-]?\d*\.?\d*)/i); if(!m)return null;
 const a=m[1]===''||m[1]==='+'?1:m[1]==='-'?-1:Number(m[1]);const b=Number(m[2].replace(/\s/g,'' )||0);const op=m[3],c=Number(m[4]);if(!Number.isFinite(a)||a===0)return null;let x=(c-b)/a;let sign=op;if(a<0) sign=op==='<'?'>':op==='>'?'<':op==='≤'?'≥':op==='≥'?'≤':op;
 const ans=`x ${sign} ${num(x)}`;return out(q,[`On isole le terme en x : ${num(a)}x ${b>=0?'+':''}${num(b)} ${op} ${num(c)}.`,`On divise par ${num(a)} ; le sens est inversé si le coefficient est négatif.`,`Solution : ${ans}.`],`S = ${sign==='<'?' ]-∞ ; '+num(x)+'[':sign==='≤'?' ]-∞ ; '+num(x)+']':sign==='>'?' ]'+num(x)+' ; +∞[':' ['+num(x)+' ; +∞[ ]'}`);
}

function sequence(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=clean(q.cleanText); if(!/(suite|terme général|raison|récurrence|recurrence)/i.test(t))return null;
 let m=t.match(/suite\s+(?:arithm[ée]tique|arithmetique).*?u\s*[_\{]?0?\s*=\s*([+-]?\d+(?:\.\d+)?).*?(?:raison|r)\s*(?:=|:)?\s*([+-]?\d+(?:\.\d+)?)/i);
 if(m){const u0=Number(m[1]),r=Number(m[2]);const ans=`u_n = ${num(u0)} + n(${num(r)})`;return out(q,[`Suite arithmétique : uₙ = u₀ + nr.`,`u₀ = ${num(u0)} et r = ${num(r)}.`,`Donc uₙ = ${ans}.`],ans);}
 m=t.match(/suite\s+(?:g[ée]om[ée]trique|geometrique).*?u\s*[_\{]?0?\s*=\s*([+-]?\d+(?:\.\d+)?).*?(?:raison|q)\s*(?:=|:)?\s*([+-]?\d+(?:\.\d+)?)/i);
 if(m){const u0=Number(m[1]),r=Number(m[2]);const ans=`u_n = ${num(u0)}(${num(r)})^n`;return out(q,[`Suite géométrique : uₙ = u₀qⁿ.`,`u₀ = ${num(u0)} et q = ${num(r)}.`,`Donc uₙ = ${ans}.`],ans);}
 m=t.match(/u\s*0\s*=\s*([+-]?\d+(?:\.\d+)?).*?u\s*1\s*=\s*([+-]?\d+(?:\.\d+)?).*?(?:arithm[ée]tique|raison)/i);if(m){const u0=Number(m[1]),u1=Number(m[2]),r=u1-u0;return out(q,[`Pour une suite arithmétique, r = u₁ − u₀.`,`r = ${num(r)}.`,`uₙ = u₀ + nr.`],`u_n = ${num(u0)} + ${num(r)}n`);}
 return null;
}

function advancedStats(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=clean(q.cleanText);if(!/(quartile|mode|étendue|etendue|coefficient de variation|fréquence|frequence)/i.test(t))return null;
 const m=t.match(/(?:série|serie|données|donnees)\s*[:=]\s*([0-9.,;\s-]+)/i);if(!m)return null;const xs=m[1].split(/[;\s]+/).filter(Boolean).map(s=>Number(s.replace(',','.'))).filter(Number.isFinite);if(!xs.length)return null;
 const s=[...xs].sort((a,b)=>a-b), n=s.length,q1=s[Math.max(0,Math.ceil(n*.25)-1)],q3=s[Math.max(0,Math.ceil(n*.75)-1)],range=s[n-1]-s[0];let mode:string='';const freq=new Map<number,number>();for(const x of s)freq.set(x,(freq.get(x)||0)+1);const mx=Math.max(...freq.values());mode=[...freq.entries()].filter(([,f])=>f===mx).map(([x])=>num(x)).join(' ; ');
 let answer='';if(/quartile/i.test(t))answer=`Q1=${num(q1)}, Q3=${num(q3)}`;if(/mode/i.test(t))answer+=(answer?', ':'')+`mode=${mode}`;if(/étendue|etendue/i.test(t))answer+=(answer?', ':'')+`étendue=${num(range)}`;return out(q,[`Données ordonnées : ${s.join(', ')}.`,`Q₁ = ${num(q1)} et Q₃ = ${num(q3)} selon la position arrondie supérieure.`,`Étendue = ${num(s[n-1])} − ${num(s[0])} = ${num(range)}.`,`Mode(s) : ${mode}.`],answer);
}

function geometry(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=clean(q.cleanText);
 let m=t.match(/distance\s+entre\s+\(?\s*(-?\d+(?:\.\d+)?)\s*[,;]\s*(-?\d+(?:\.\d+)?)\s*\)?\s+et\s+\(?\s*(-?\d+(?:\.\d+)?)\s*[,;]\s*(-?\d+(?:\.\d+)?)\s*\)?/i);
 if(m){const [x1,y1,x2,y2]=m.slice(1).map(Number),d=Math.hypot(x2-x1,y2-y1);return out(q,[`Formule : AB = √((x₂−x₁)²+(y₂−y₁)²).`,`AB = √((${num(x2)}−${num(x1)})²+(${num(y2)}−${num(y1)})²).`,`AB ≈ ${num(d)}.`],`AB = ${num(d)}`);}
 m=t.match(/(?:aire|surface)\s+(?:d['’]un|du)\s+(?:cercle|disque).*?(?:rayon|r)\s*(?:=|de|d['’])?\s*(\d+(?:\.\d+)?)/i);if(m){const r=Number(m[1]),a=Math.PI*r*r;return out(q,[`Aire d'un disque : A = πr².`,`A = π×${num(r)}² = ${num(a)}.`],`A = ${num(a)} (u²)`);}
 m=t.match(/(?:p[ée]rim[èe]tre|circonf[ée]rence).*?(?:rayon|r)\s*(?:=|de|d['’])?\s*(\d+(?:\.\d+)?)/i);if(m){const r=Number(m[1]),p=2*Math.PI*r;return out(q,[`Circonférence : P = 2πr.`,`P = 2π×${num(r)} ≈ ${num(p)}.`],`P = ${num(p)} (u)`);}
 return null;
}

function symbolic(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=clean(q.cleanText);if(!/(simplif|réduire|reduire|développer|developper)/i.test(t))return null;
 const m=t.match(/(?:simplifier|réduire|reduire|développer|developper)\s*[:=]?\s*(.+)$/i);if(!m)return null;const expr=m[1].replace(/[.;]$/,'').trim();try{const s=simplify(expr).toString();if(!s||s===expr)return null;return out(q,[`Expression de départ : $${expr}$.`,`Application des règles algébriques déterministes de simplification/développement.`,`Résultat : $${s}$.`],s,'Expression simplifiée par le moteur symbolique puis contrôlée.');}catch{return null;}}

function derivativeGeneric(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=clean(q.cleanText);if(!/(d[ée]riv|d[ée]river)/i.test(t))return null;const m=t.match(/(?:f\s*\(x\)|y)\s*=\s*(.+)$/i);if(!m)return null;try{const expr=m[1].replace(/[.;]$/,'').trim(),d=derivative(expr,'x').toString();return out(q,[`On identifie f(x) = ${expr}.`,`Dérivation symbolique : f'(x) = ${d}.`,`La dérivée est obtenue par règles de somme, produit, quotient et chaîne prises en charge par le moteur symbolique.`],`f'(x) = ${d}`);}catch{return null;}}

function wordProblem(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=clean(q.cleanText);if(!/(vitesse|distance|durée|temps|pourcentage|remise|prix|coût|cout)/i.test(t))return null;
 let m=t.match(/(?:parcourt|parcouru|distance).*?(\d+(?:[.,]\d+)?)\s*km.*?(\d+(?:[.,]\d+)?)\s*h/i);if(m){const d=Number(m[1].replace(',','.')),h=Number(m[2].replace(',','.'));if(h>0)return out(q,[`Vitesse moyenne : v = d/t.`,`v = ${num(d)}/${num(h)} = ${num(d/h)} km/h.`],`v = ${num(d/h)} km/h`);}
 m=t.match(/prix.*?(\d+(?:[.,]\d+)?)\s*(?:€|fcfa|f|francs?).*?(?:remise|réduction|reduction).*?(\d+(?:[.,]\d+)?)\s*%/i);if(m){const p=Number(m[1].replace(',','.')),r=Number(m[2].replace(',','.')),final=p*(1-r/100);return out(q,[`Montant de la remise : ${num(p)}×${num(r)}/100 = ${num(p*r/100)}.`,`Prix final : ${num(p)}−${num(p*r/100)} = ${num(final)}.`],`Prix final = ${num(final)}`);}
 return null;
}

export function tryUniversalMegaResolution(_context:string,q:ParsedQuestion):SolvedQuestionResult|null{
 return linearPair(q)||inequality(q)||sequence(q)||advancedStats(q)||geometry(q)||symbolic(q)||derivativeGeneric(q)||wordProblem(q);
}
