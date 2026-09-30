/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LES ÉQUATIONS DU 3ᵉ DEGRÉ
 * ============================================================
 *
 * Complète mathVerifier.ts (limité au 2nd degré) pour le cas très classique
 * d'exercice de lycée : ax^3 + bx^2 + cx + d = 0 avec a,b,c,d entiers, qui se
 * résout en trouvant une racine "évidente" (entière ou rationnelle simple)
 * par le théorème des racines rationnelles, puis en factorisant par division
 * euclidienne (division synthétique) pour se ramener à un second degré déjà
 * su résoudre via le discriminant.
 *
 * Périmètre VOLONTAIREMENT restreint, conformément au reste du pipeline :
 *  - Uniquement une expression de la forme ax^3+bx^2+cx+d = 0 (coefficients
 *    entiers explicites, a ≠ 0).
 *  - Uniquement si une racine rationnelle p/q existe réellement (p diviseur
 *    de d, q diviseur de a) : on ne devine jamais, on teste et on vérifie
 *    algébriquement chaque candidat.
 *  - Si aucune racine rationnelle n'est trouvée dans une plage raisonnable,
 *    on renvoie null plutôt que d'improviser (méthode de Cardan, approximations
 *    numériques... hors périmètre).
 */

import { ParsedQuestion, SolvedQuestionResult } from './types';

export interface CubicPolynomial {
  a: number;
  b: number;
  c: number;
  d: number;
}

/**
 * Extrait les coefficients d'un polynôme du 3e degré ax^3+bx^2+cx+d, à
 * condition qu'aucun terme de degré supérieur (x^4, x^5...) ne soit présent.
 */
export function parseCubicPolynomial(text: string): CubicPolynomial | null {
  const clean = text
    .replace(/[−–—]/g, '-')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/\s+/g, '');

  if (/x\^([4-9]|\d{2,})|x⁴|x⁵|\bln\b|\blog\b|\bexp\b|\bsqrt\b|\/x/i.test(clean)) {
    return null; // pas un cas de degré exactement 3
  }
  if (!/x\^3/i.test(clean)) return null; // pas de terme cubique : ce n'est pas notre cas

  // On isole l'expression polynomiale elle-même : uniquement les caractères
  // valides d'un polynôme (chiffres, x, ^, +, -, .), pour ignorer tout texte
  // environnant ("Résoudre dans R :", etc.) qui contient aussi le caractère
  // "R" mais n'appartient pas à l'expression algébrique.
  const eqMatch = clean.match(/([0-9x^+\-.]*x\^3[0-9x^+\-.]*)=0/i);
  if (!eqMatch) return null;
  const expr = eqMatch[1];

  // Vérifie qu'il n'y a pas de second membre non nul explicite ailleurs
  // (ex: "...= 5" quelque part), ce qui indiquerait une équation que ce
  // moteur, limité à ax^3+bx^2+cx+d=0, ne sait pas traiter.
  const otherEquals = clean.replace(`${expr}=0`, '');
  if (/[0-9x^+\-.]=(?!0\b)[0-9]/.test(otherEquals)) return null;

  // Découpe l'expression en termes signés : ex "2x^3-3x^2-8x+12" ->
  // ["+2x^3","-3x^2","-8x","+12"]
  const termPattern = /[+-][^+-]+/g;
  const normalized = expr.startsWith('+') || expr.startsWith('-') ? expr : `+${expr}`;
  const terms = normalized.match(termPattern);
  if (!terms) return null;

  let a = 0, b = 0, c = 0, d = 0;
  let sawA = false;

  for (const term of terms) {
    const sign = term[0] === '-' ? -1 : 1;
    const body = term.slice(1);

    if (/^x\^3$/i.test(body)) { a += sign * 1; sawA = true; }
    else if (/^\d+(\.\d+)?x\^3$/i.test(body)) { a += sign * parseFloat(body); sawA = true; }
    else if (/^x\^2$/i.test(body)) { b += sign * 1; }
    else if (/^\d+(\.\d+)?x\^2$/i.test(body)) { b += sign * parseFloat(body); }
    else if (/^x$/i.test(body)) { c += sign * 1; }
    else if (/^\d+(\.\d+)?x$/i.test(body)) { c += sign * parseFloat(body); }
    else if (/^\d+(\.\d+)?$/.test(body)) { d += sign * parseFloat(body); }
    else return null; // terme non reconnu (ex: coefficient non entier mal formé) : on refuse
  }

  if (!sawA || a === 0) return null;
  return { a, b, c, d };
}

function evalCubic(p: CubicPolynomial, x: number): number {
  return p.a * x ** 3 + p.b * x ** 2 + p.c * x + p.d;
}

/** Liste des diviseurs entiers positifs et négatifs d'un entier non nul. */
function integerDivisors(n: number): number[] {
  const nAbs = Math.abs(Math.round(n));
  if (nAbs === 0) return [];
  const divs: number[] = [];
  for (let i = 1; i <= nAbs; i++) {
    if (nAbs % i === 0) divs.push(i);
  }
  return divs;
}

/**
 * Cherche une racine rationnelle p/q par le théorème des racines rationnelles
 * (p divise d, q divise a), en testant tous les candidats et en ne retenant
 * QUE ceux qui annulent exactement (à 1e-9 près) le polynôme.
 */
function findRationalRoot(p: CubicPolynomial): { value: number; label: string } | null {
  if (p.d === 0) return { value: 0, label: '0' };

  const pDivisors = integerDivisors(p.d);
  const qDivisors = integerDivisors(p.a);

  for (const num of pDivisors) {
    for (const den of qDivisors) {
      for (const candidate of [num / den, -num / den]) {
        if (Math.abs(evalCubic(p, candidate)) < 1e-9) {
          const label = den === 1 ? `${candidate}` : `${candidate > 0 ? num : -num}/${den}`;
          return { value: candidate, label };
        }
      }
    }
  }
  return null;
}

function fmtPolyTerm(coef: number, powerLabel: string, isFirst: boolean): string {
  if (coef === 0) return '';
  const sign = coef > 0 ? (isFirst ? '' : '+ ') : (isFirst ? '-' : '- ');
  const abs = Math.abs(coef);
  const coefStr = powerLabel === '' ? `${abs}` : (abs === 1 ? '' : `${abs}`);
  return `${sign}${coefStr}${powerLabel}`;
}

function polyToString(p: CubicPolynomial): string {
  const parts = [
    fmtPolyTerm(p.a, 'x^3', true),
    fmtPolyTerm(p.b, 'x^2', false),
    fmtPolyTerm(p.c, 'x', false),
    fmtPolyTerm(p.d, '', false),
  ].filter(Boolean);
  return parts.join(' ');
}

/** Comme polyToString, mais pour le quotient du second degré (labels x^2, x,
 *  constante) — polyToString ne convient pas car elle étiquette toujours le
 *  premier coefficient "x^3". */
function quadraticToString(a: number, b: number, c: number): string {
  const parts = [
    fmtPolyTerm(a, 'x^2', true),
    fmtPolyTerm(b, 'x', false),
    fmtPolyTerm(c, '', false),
  ].filter(Boolean);
  return parts.join(' ');
}

function fmtNum(n: number): string {
  return Number.isInteger(n) ? `${n}` : `${Math.round(n * 1000) / 1000}`;
}

/**
 * Résout ax^3+bx^2+cx+d=0 : trouve une racine rationnelle x0, factorise par
 * (x - x0) via division synthétique pour obtenir un quotient du second degré
 * ax^2+b'x+c', puis résout ce second degré par le discriminant.
 */
function solveCubicEquation(p: CubicPolynomial): { steps: string[]; solutionSet: string; roots: number[] } | null {
  const root = findRationalRoot(p);
  if (!root) return null; // aucune racine rationnelle trouvée : hors périmètre (Cardan non couvert)

  const x0 = root.value;
  const steps: string[] = [];
  steps.push(`On cherche une racine "évidente" parmi les diviseurs du terme constant (théorème des racines rationnelles).`);
  steps.push(`On teste x = ${root.label} : ${p.a}\\times(${root.label})^3 ${p.b >= 0 ? '+' : ''}${p.b}\\times(${root.label})^2 ${p.c >= 0 ? '+' : ''}${p.c}\\times(${root.label}) ${p.d >= 0 ? '+' : ''}${p.d} = ${fmtNum(evalCubic(p, x0))}.`);
  steps.push(`Donc x = ${root.label} est racine du polynôme.`);

  // Division synthétique par (x - x0) : coefficients [a, b, c, d] -> quotient [a, b2, c2], reste r
  const b2 = p.b + p.a * x0;
  const c2 = p.c + b2 * x0;
  const r = p.d + c2 * x0;

  if (Math.abs(r) > 1e-6) return null; // sécurité : la division doit être exacte

  const quotientStr = quadraticToString(p.a, b2, c2);
  steps.push(`On effectue la division euclidienne de ${polyToString(p)} par (x - ${fmtNum(x0)}) :`);
  steps.push(`${polyToString(p)} = (x - ${fmtNum(x0)})(${quotientStr})`);

  // Résolution du quotient du second degré : p.a x^2 + b2 x + c2 = 0
  const A = p.a, B = b2, C = c2;
  const delta = B * B - 4 * A * C;
  steps.push(`On résout le facteur du second degré ${quotientStr} = 0.`);
  steps.push(`\\Delta = ${fmtNum(B)}^2 - 4\\times(${fmtNum(A)})\\times(${fmtNum(C)}) = ${fmtNum(delta)}`);

  const roots = [x0];
  if (delta > 0) {
    const sq = Math.sqrt(delta);
    const r1 = (-B - sq) / (2 * A);
    const r2 = (-B + sq) / (2 * A);
    steps.push(`\\Delta > 0 : deux racines réelles distinctes x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a} = ${fmtNum(r1)} ou ${fmtNum(r2)}.`);
    roots.push(r1, r2);
  } else if (delta === 0) {
    const r1 = -B / (2 * A);
    steps.push(`\\Delta = 0 : une racine double x = ${fmtNum(r1)}.`);
    roots.push(r1);
  } else {
    steps.push(`\\Delta < 0 : le facteur du second degré n'a pas d'autre racine réelle.`);
  }

  const sortedUnique = Array.from(new Set(roots.map((v) => Math.round(v * 1e9) / 1e9))).sort((u, v) => u - v);
  const solutionSet = `S = {${sortedUnique.map(fmtNum).join(' ; ')}}`;
  steps.push(`L'ensemble des solutions dans ℝ est ${solutionSet}.`);

  return { steps, solutionSet, roots: sortedUnique };
}

export function tryGenericCubicResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  const poly = parseCubicPolynomial(contextCombined);
  if (!poly) return null;

  const solution = solveCubicEquation(poly);
  if (!solution) return null;

  const solved: SolvedQuestionResult[] = [];
  for (const q of questions) {
    const cleanQ = q.cleanText.toLowerCase();
    if (!/r[ée]soudre|racine|solution/i.test(cleanQ)) return null; // question non couverte par ce moteur
    solved.push({
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps: solution.steps,
      finalAnswer: solution.solutionSet,
      verificationPassed: true,
    });
  }
  return solved;
}
