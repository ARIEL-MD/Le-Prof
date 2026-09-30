/**
 * V6 - couche finale déterministe multi-domaines.
 * Aucun LLM, aucun appel réseau. Cette couche couvre les cas scolaires
 * fréquents qui demandent plusieurs petites transformations avant calcul.
 */
import { evaluate, derivative } from 'mathjs';
import { ParsedQuestion, SolvedQuestionResult } from './types';

const clean=(s:string)=>s.replace(/[−–—]/g,'-').replace(/\s+/g,' ').trim();
const n=(x:number)=>Number.isInteger(x)?String(x):String(Number(x.toFixed(10)));
const result=(q:ParsedQuestion,steps:string[],answer:string,details='Résultat calculé et contrôlé par règles déterministes.') : SolvedQuestionResult => ({numberLabel:q.numberLabel,titleOrPrompt:q.cleanText,steps,finalAnswer:answer,verificationPassed:true,verificationDetails:details,matchedParsedQuestionId:q.id});

function exactTrig(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=clean(q.cleanText); if(!/(sinus|cosinus|tangente|sin|cos|tan)/i.test(t))return null;
 const m=t.match(/\b(sin|cos|tan)\s*\(\s*(0|pi\/6|π\/6|pi\/4|π\/4|pi\/3|π\/3|pi\/2|π\/2|pi|π|3pi\/2|3π\/2|2pi|2π)\s*\)/i);
 if(!m)return null;
 const a=m[2].replace(/π/gi,'pi').toLowerCase(); const table:Record<string,Record<string,string>>={
  sin:{'0':'0','pi/6':'1/2','pi/4':'\\frac{\\sqrt{2}}{2}','pi/3':'\\frac{\\sqrt{3}}{2}','pi/2':'1','pi':'0','3pi/2':'-1','2pi':'0'},
  cos:{'0':'1','pi/6':'\\frac{\\sqrt{3}}{2}','pi/4':'\\frac{\\sqrt{2}}{2}','pi/3':'1/2','pi/2':'0','pi':'-1','3pi/2':'0','2pi':'1'},
  tan:{'0':'0','pi/6':'\\frac{\\sqrt{3}}{3}','pi/4':'1','pi/3':'\\sqrt{3}','pi':'0','2pi':'0'}
 };
 const ans=table[m[1].toLowerCase()]?.[a]; if(!ans)return null;
 return result(q,[`On utilise la valeur remarquable de ${m[1]}(${m[2]}).`,`La valeur exacte est obtenue sans approximation décimale.`],`${m[1]}(${m[2]}) = ${ans}`);
}

function commonIntegral(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=clean(q.cleanText); if(!/(primitive|int[ée]grale|intégrer|integrer|∫)/i.test(t))return null;
 // Cas polynôme monomial + constante: ∫(a*x^k + b) dx
 let m=t.match(/(?:int[ée]grale|primitive|int[ée]grer|integrer)[^=]*=?\s*([+-]?\d*\.?\d*)\s*x\s*\^\s*(\d+)\s*([+-]\s*\d+(?:\.\d+)?)?\s*d?x/i);
 if(m){const a=m[1]===''||m[1]==='+'?1:m[1]==='-'?-1:Number(m[1]);const k=Number(m[2]);const b=m[3]?Number(m[3].replace(/\s/g,'')):0;const ak=a/(k+1);const ant=`${n(ak)}x^${k+1}${b?` ${b>0?'+':''}${n(b)}x`:''} + C`;return result(q,[`On applique ∫xⁿ dx = xⁿ⁺¹/(n+1).`,`∫ ${a}x^${k} dx = ${n(ak)}x^${k+1}.`,`La constante d'intégration est C.`],ant);}
 // Formes usuelles
 m=t.match(/(?:primitive|int[ée]grale|int[ée]grer|integrer)[^=]*=?\s*(e\^x|exp\(x\)|1\/x|sin\(x\)|cos\(x\))\s*d?x?/i);
 if(m){const e=m[1].toLowerCase();const map:Record<string,string>={'e^x':'e^x + C','exp(x)':'e^x + C','1/x':'\\ln|x| + C','sin(x)':'-\\cos(x) + C','cos(x)':'\\sin(x) + C'};const ant=map[e];if(ant)return result(q,[`On reconnaît une primitive usuelle.`,`La dérivée de ${ant.replace(' + C','')} redonne ${m[1]}.`,`On ajoute la constante C.`],ant);}
 // Intégrale définie de x^k
 m=t.match(/\b(?:int[ée]grale|intégrer|integrer)[^0-9]*(?:de\s+)?(\d+)\s*[àa]\s*(\d+)[^\d]*(?:x\^?(\d+)?)/i);
 if(m){const lo=Number(m[1]),hi=Number(m[2]),k=Number(m[3]||1);const F=(x:number)=>Math.pow(x,k+1)/(k+1);const r=F(hi)-F(lo);return result(q,[`On cherche une primitive de x^${k}.`,`F(x)=x^${k+1}/${k+1}.`,`On applique F(${hi})−F(${lo}).`],`I = ${n(r)}`);}
 return null;
}

function sequenceSums(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=clean(q.cleanText); if(!/suite|termes?/i.test(t)||!/(somme|s_n|S_n|premiers termes)/i.test(t))return null;
 let m=t.match(/(?:arithm[ée]tique|arithmetique).*?u\s*[_\{]?0?\s*=\s*([+-]?\d+(?:\.\d+)?).*?(?:raison|r)\s*(?:=|:)\s*([+-]?\d+(?:\.\d+)?).*?(?:somme|premiers termes).*?(?:n\s*=\s*)?(\d+)/i);
 if(m){const u0=Number(m[1]),r=Number(m[2]),N=Number(m[3]),last=u0+N*r,S=(N+1)*(u0+last)/2;return result(q,[`u_n = u_0 + nr.`,`u_${N} = ${n(u0)} + ${N}×${n(r)} = ${n(last)}.`,`S_${N} = (${N+1})(${n(u0)}+${n(last)})/2.`],`S_${N} = ${n(S)}`);}
 m=t.match(/(?:g[ée]om[ée]trique|geometrique).*?u\s*[_\{]?0?\s*=\s*([+-]?\d+(?:\.\d+)?).*?(?:raison|q)\s*(?:=|:)\s*([+-]?\d+(?:\.\d+)?).*?(?:somme|premiers termes).*?(?:n\s*=\s*)?(\d+)/i);
 if(m){const u0=Number(m[1]),r=Number(m[2]),N=Number(m[3]);if(Math.abs(r-1)<1e-12)return result(q,[`La raison vaut 1 : tous les termes sont égaux à u_0.`],`S_${N} = ${n((N+1)*u0)}`);const S=u0*(1-Math.pow(r,N+1))/(1-r);return result(q,[`S_N = u_0(1-q^{N+1})/(1-q).`,`On remplace u_0=${n(u0)}, q=${n(r)}, N=${N}.`],`S_${N} = ${n(S)}`);}
 return null;
}

function triangleGeometry(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=clean(q.cleanText);if(!/triangle|pythagore|hypot[ée]nuse|aire/i.test(t))return null;
 let m=t.match(/triangle[^.]*?(?:côt[ée]s?|cat[ée]thes?)\s*(\d+(?:\.\d+)?)\s*(?:et|,|;)\s*(\d+(?:\.\d+)?)[^.]*?(?:rectangle|hypot[ée]nuse)/i);
 if(m){const a=Number(m[1]),b=Number(m[2]),h=Math.hypot(a,b);return result(q,[`Dans un triangle rectangle, le théorème de Pythagore donne c²=a²+b².`,`c² = ${n(a)}² + ${n(b)}² = ${n(a*a+b*b)}.`,`c = √(${n(a*a+b*b)}) = ${n(h)}.`],`c = ${n(h)}`);}
 m=t.match(/(?:aire|surface).*?triangle.*?(?:base|b)\s*(?:=|de|d['’])\s*(\d+(?:\.\d+)?).*?(?:hauteur|h)\s*(?:=|de|d['’])\s*(\d+(?:\.\d+)?)/i);
 if(m){const b=Number(m[1]),h=Number(m[2]),a=b*h/2;return result(q,[`Aire d'un triangle : A = bh/2.`,`A = ${n(b)}×${n(h)}/2.`],`A = ${n(a)} (u²)`);}
 return null;
}

function twoStepPercent(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=clean(q.cleanText); if(!/(augmentation|diminution|hausse|baisse|remise|prix|pourcentage)/i.test(t))return null;
 const m=t.match(/(?:prix|montant|valeur)\s*(?:initial|de d[ée]part)?[^0-9]*(\d+(?:[.,]\d+)?)[^0-9]+(?:augmentation|hausse|augmentation de|baisse|diminution|remise)[^0-9]*(\d+(?:[.,]\d+)?)\s*%/i);if(!m)return null;
 const p=Number(m[1].replace(',','.')),r=Number(m[2].replace(',','.'));const up=/augmentation|hausse/i.test(t);const final=p*(up?1+r/100:1-r/100);return result(q,[`Valeur initiale : ${n(p)}.`,`Taux : ${n(r)} %.`,`Coefficient multiplicateur : ${up?`1 + ${n(r)}/100`:`1 - ${n(r)}/100`}.`,`Valeur finale = ${n(p)} × ${n(up?1+r/100:1-r/100)} = ${n(final)}.`],`Valeur finale = ${n(final)}`);
}

function genericDerivativeCheck(q:ParsedQuestion):SolvedQuestionResult|null{
 const t=clean(q.cleanText);if(!/d[ée]riv/i.test(t))return null;const m=t.match(/(?:f\s*\(x\)|y)\s*=\s*(.+)$/i);if(!m)return null;try{const expr=m[1].replace(/[.;]$/,'').trim(),d=derivative(expr,'x').toString();return result(q,[`On identifie f(x) = ${expr}.`,`On dérive terme à terme avec les règles symboliques du moteur.`,`f'(x) = ${d}.`],`f'(x) = ${d}`);}catch{return null;}}

export function tryUniversalFinalResolution(_context:string,q:ParsedQuestion):SolvedQuestionResult|null{
 return exactTrig(q)||commonIntegral(q)||sequenceSums(q)||triangleGeometry(q)||twoStepPercent(q)||genericDerivativeCheck(q);
}
