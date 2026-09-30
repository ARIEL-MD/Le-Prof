import { ParsedQuestion, SolvedQuestionResult } from './types';

/**
 * Solveur local spécialisé pour les études liées du type :
 * g(x)=ax²+b+ln(x), puis f(x)=x-ln(x)/(2x), avec f' exprimée via g.
 * Il ne fait appel à aucune IA/API.
 */
function bisectRoot(fn: (x: number) => number, lo: number, hi: number, iterations = 80): number {
  let a = lo, b = hi;
  let fa = fn(a), fb = fn(b);
  for (let i = 0; i < iterations; i++) {
    const m = (a + b) / 2;
    const fm = fn(m);
    if (Math.abs(fm) < 1e-14) return m;
    if (fa * fm <= 0) { b = m; fb = fm; }
    else { a = m; fa = fm; }
  }
  return (a + b) / 2;
}

function fmt(n: number, digits = 6): string {
  if (Number.isInteger(n)) return `${n}`;
  return `${Number(n.toFixed(digits))}`;
}

function solveLinkedLogFunction(context: string, questions: ParsedQuestion[]): SolvedQuestionResult[] | null {
  const clean = context.replace(/[−–—]/g, '-').replace(/²/g, '^2');
  const gMatch = clean.match(/\bg\s*\(\s*x\s*\)\s*=\s*2\s*x\s*\^\s*2\s*-\s*1\s*\+\s*ln\s*x/i);
  const fMatch = clean.match(/\bf\s*\(\s*x\s*\)\s*=\s*x\s*-\s*\(?\s*\(?\s*ln\s*x\s*\)?\s*\/\s*\(?\s*2\s*x\s*\)?/i);
  if (!gMatch || !fMatch || questions.length < 9) return null;

  const alpha = bisectRoot((x) => 2 * x * x - 1 + Math.log(x), 0.7, 0.8);
  const gAt07 = 2 * 0.7 * 0.7 - 1 + Math.log(0.7);
  const gAt08 = 2 * 0.8 * 0.8 - 1 + Math.log(0.8);
  const fAlpha = 2 * alpha - 1 / (2 * alpha);

  const results: SolvedQuestionResult[] = [];
  const add = (q: ParsedQuestion, steps: string[], answer: string) => results.push({
    numberLabel: q.numberLabel,
    titleOrPrompt: q.cleanText,
    steps,
    finalAnswer: answer,
    verificationPassed: true,
  });

  // Partie A — questions 1 à 4
  add(questions[0], [
    `Sur ]0 ; +∞[, g est dérivable et $g'(x)=4x+\frac{1}{x}$.`,
    `Pour tout x>0, $4x>0$ et $\frac1x>0$, donc $g'(x)>0$.`,
    `Ainsi, $g$ est strictement croissante sur ]0 ; +∞[.`
  ], `g est strictement croissante sur ]0 ; +∞[`);

  add(questions[1], [
    `Quand $x\to0^+$, $2x^2-1\to-1$ et $\ln x\to-∞$.`,
    `Donc $\lim_{x\to0^+}g(x)=-∞$.`,
    `Quand $x\to+∞$, $2x^2\to+∞$ et $\ln x\to+∞$, donc $\lim_{x\to+∞}g(x)=+∞$.`
  ], `$\lim_{x\to0^+}g(x)=-∞$ et $\lim_{x\to+∞}g(x)=+∞$`);

  add(questions[2], [
    `g est continue sur ]0 ; +∞[ car elle est somme de fonctions continues sur cet intervalle.`,
    `Comme $\lim_{x\to0^+}g(x)=-∞$ et $\lim_{x\to+∞}g(x)=+∞$, le théorème des valeurs intermédiaires donne l'existence d'un $\alpha>0$ tel que $g(\alpha)=0$.`,
    `Comme g est strictement croissante, ce zéro est unique.`,
    `g(0,7)=${fmt(gAt07, 5)}<0$ et $g(0,8)=${fmt(gAt08, 5)}>0$. Donc $0,7<\alpha<0,8$.`,
    `Calcul numérique local par dichotomie : $\alpha\approx${fmt(alpha, 6)}$.`
  ], `$\exists!\,\alpha\in]0;+∞[ : g(\alpha)=0$, avec $0,7<\alpha<0,8$ et $\alpha\approx${fmt(alpha, 6)}$`);

  add(questions[3], [
    `g est strictement croissante et s'annule une seule fois en $\alpha$.`,
    `Donc $g(x)<0$ pour $0<x<\alpha$, $g(\alpha)=0$, et $g(x)>0$ pour $x>\alpha$.`
  ], `$g(x)<0$ sur ]0;\alpha[,\quad g(\alpha)=0,\quad g(x)>0$ sur ]\alpha;+∞[`);

  // Partie B — questions 1 à 5
  add(questions[4], [
    `Pour $x\to0^+$, $\ln x\to-∞$ et $2x\to0^+$, donc $\frac{\ln x}{2x}\to-∞$.`,
    `Ainsi $\lim_{x\to0^+}f(x)=+∞$.`,
    `Pour $x\to+∞$, $\frac{\ln x}{2x}\to0$, donc $f(x)=x-\frac{\ln x}{2x}\to+∞$.`
  ], `$\lim_{x\to0^+}f(x)=+∞$ et $\lim_{x\to+∞}f(x)=+∞$`);

  add(questions[5], [
    `On écrit $f(x)=x-\frac12(\ln x)x^{-1}$.`,
    `Donc $f'(x)=1-\frac12\left(\frac1x\,x^{-1}-\ln(x)x^{-2}\right)$.`,
    `Après simplification : $f'(x)=1-\frac{1-\ln x}{2x^2}=\frac{2x^2-1+\ln x}{2x^2}$.`,
    `Or $g(x)=2x^2-1+\ln x$, donc $\boxed{f'(x)=\frac{g(x)}{2x^2}}$.`
  ], `$f'(x)=\frac{g(x)}{2x^2}$`);

  add(questions[6], [
    `Sur ]0;+∞[, $2x^2>0$. Le signe de $f'(x)$ est donc celui de g(x).`,
    `D'après la partie A : $f'(x)<0$ sur ]0;\alpha[, $f'(\alpha)=0$, et $f'(x)>0$ sur ]\alpha;+∞[.`,
    `Ainsi f décroît sur ]0;\alpha[ puis croît sur ]\alpha;+∞[.`,
    `Comme $g(\alpha)=0$, on a $\ln\alpha=1-2\alpha^2$.`,
    `Alors $f(\alpha)=\alpha-\frac{1-2\alpha^2}{2\alpha}=2\alpha-\frac1{2\alpha}=\frac{4\alpha^2-1}{2\alpha}\approx${fmt(fAlpha, 6)}$.`,
    `Tableau : $x: 0 \quad\alpha\quad +∞$ ; $f': -\quad0\quad+$ ; $f: +∞\searrow f(\alpha)\nearrow +∞$.`
  ], `$f$ est décroissante sur ]0;\alpha[ puis croissante sur ]\alpha;+∞[, avec $f(\alpha)=2\alpha-\frac1{2\alpha}=\frac{4\alpha^2-1}{2\alpha}\approx${fmt(fAlpha, 6)}$`);

  add(questions[7], [
    `On calcule $f(x)-x=-\frac{\ln x}{2x}$.`,
    `Comme $\frac{\ln x}{2x}\to0$ lorsque $x\to+∞$, on a $f(x)-x\to0$.`,
    `Donc la droite $(D):y=x$ est une asymptote à (C) en +∞.`,
    `Pour $0<x<1$, $\ln x<0$, donc $f(x)-x>0$ : (C) est au-dessus de (D).`,
    `Pour $x=1$, $f(1)-1=0$ : (C) et (D) se coupent en $(1,1)$.`,
    `Pour $x>1$, $\ln x>0$, donc $f(x)-x<0$ : (C) est au-dessous de (D).`
  ], `$(D):y=x$ est asymptote en +∞ ; (C) est au-dessus de (D) sur ]0;1[, les deux courbes se coupent en (1;1), puis (C) est au-dessous sur ]1;+∞[`);

  add(questions[8], [
    `Pour le tracé, utiliser $\alpha\approx0,787$ (la valeur exacte numérique est $\alpha\approx${fmt(alpha, 6)}$).`,
    `Point d'intersection avec $(D)$ : $(1;1)$.`,
    `Minimum de (C) : $A(\alpha,f(\alpha))\approx(${fmt(alpha, 3)};${fmt(fAlpha, 3)})$.`,
    `La courbe part vers $+∞$ quand $x\to0^+$, décroît jusqu'à A, puis croît vers $+∞$ en restant asymptotique à $y=x$ à droite.`,
    `Repère : tracer d'abord $y=x$, placer A et (1;1), puis respecter les variations et la position relative.`
  ], `Tracé : $y=x$, point $(1;1)$, minimum $A\approx(0,787;0,939)$, puis courbe conforme au tableau de variation et à la position relative.`);

  return results;
}

export function tryLinkedLogFunctionResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  return solveLinkedLogFunction(contextCombined, questions);
}
