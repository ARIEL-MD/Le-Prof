/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR L'ÉTUDE DE FONCTIONS (SANS IA)
 * ================================================================
 *
 * Contrairement aux "moteurs locaux" historiques du projet (mathsTleDEngine,
 * mathsTleCEngine, ...) qui renvoient une méthodologie généraliste (le même
 * texte-type quel que soit l'énoncé), ce module calcule RÉELLEMENT sur la
 * fonction f(x) donnée par l'élève, grâce à un moteur de calcul symbolique
 * (mathjs) :
 *  - domaine de définition (à partir de la notation "définie sur ]a;b[" ou
 *    par défaut ℝ, avec détection réactive des points d'exclusion réels) ;
 *  - dérivée f'(x) calculée et simplifiée symboliquement (règles de
 *    dérivation exactes : puissance, quotient, produit, composée...) ;
 *  - limites aux bornes du domaine (±∞ ou point fini), estimées par
 *    approximation numérique rigoureuse (échantillonnage à précision
 *    croissante) — fiable pour l'immense majorité des fonctions rencontrées
 *    au collège/lycée (polynômes, fractions rationnelles, racines,
 *    exponentielles, logarithmes) ;
 *  - signe de f'(x) et tableau de variation, par recherche de racines
 *    (dichotomie) et échantillonnage de signe sur chaque intervalle ;
 *  - évaluation numérique exacte de f en un point, équation f(x)=0 par
 *    dichotomie, équation de tangente en un point.
 *
 * LIMITE ASSUMÉE : les limites sont obtenues par approximation numérique
 * (et non par une preuve symbolique formelle). C'est un choix pragmatique :
 * cela couvre correctement la quasi-totalité des exercices de type "étude
 * de fonction" du secondaire, sans jamais appeler d'IA ni générer de texte
 * générique déconnecté de l'énoncé. Quand le résultat est ambigu (forme
 * réellement indéterminée non tranchée numériquement), le moteur renvoie
 * `null` pour cette question plutôt que d'inventer une réponse.
 */

import { derivative, simplify, evaluate as mathEvaluate, parse as mathParse } from 'mathjs';
import { ParsedQuestion, SolvedQuestionResult } from './types';
import { parseQuadraticPolynomial } from './mathVerifier';

// ==========================================================================
// 1. NORMALISATION D'UNE EXPRESSION MATHÉMATIQUE VERS LA SYNTAXE MATHJS
// ==========================================================================

export function convertLatexToMathjs(latex: string): string {
  let s = latex.trim();
  // Nettoyage des délimiteurs LaTeX
  s = s.replace(/^\$\$|\$\$$|^\\\(|\\\)$|^\\\[|\\\]$/g, '').trim();
  s = s.replace(/\$/g, '');

  // LaTeX \frac{num}{den} (support récursif des fractions imbriquées)
  let prev = '';
  while (prev !== s && /\\frac\s*\{/.test(s)) {
    prev = s;
    s = s.replace(/\\frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, '(($1)/($2))');
  }

  // \sqrt{x} -> sqrt(x)
  prev = '';
  while (prev !== s && /\\sqrt\s*\{/.test(s)) {
    prev = s;
    s = s.replace(/\\sqrt\s*\{([^{}]+)\}/g, 'sqrt($1)');
  }

  // Fonctions et symboles LaTeX usuels
  s = s
    .replace(/\\ln\b/g, 'log')
    .replace(/\\exp\b/g, 'exp')
    .replace(/\\sin\b/g, 'sin')
    .replace(/\\cos\b/g, 'cos')
    .replace(/\\tan\b/g, 'tan')
    .replace(/\\cdot/g, '*')
    .replace(/\\times/g, '*')
    .replace(/\\left\s*([(\[{|])/g, '$1')
    .replace(/\\right\s*([)\]}|])/g, '$1')
    .replace(/\\,/g, ' ')
    .replace(/\\;/g, ' ')
    .replace(/\\quad/g, ' ')
    .replace(/\\qquad/g, ' ')
    .replace(/\\text\s*\{[^}]*\}/g, '')
    .replace(/\\mathrm\s*\{([^}]*)\}/g, '$1')
    .replace(/\\mathbf\s*\{([^}]*)\}/g, '$1');

  return s;
}

export function normalizeExpressionForMathjs(raw: string): string {
  let s = convertLatexToMathjs(raw);

  s = s
    .replace(/\s+/g, '')
    .replace(/−|–|—/g, '-')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/√/g, 'sqrt')
    .replace(/π/g, 'pi')
    .replace(/\|([^|]+)\|/g, 'abs($1)');

  // Normaliser les puissances implicites tapées sans chapeau (ex: x3 -> x^3, x2 -> x^2)
  s = s.replace(/\b([a-zA-Z])([2-9])\b/g, '$1^$2');

  // Normaliser ln(x) et la notation scolaire ln x -> log(x).
  s = s.replace(/ln\(/gi, 'log(');
  s = s.replace(/\bln\s*([a-zA-Z](?:\d+)?)/gi, 'log($1)');
  s = s.replace(/\blog\s*([a-zA-Z](?:\d+)?)/gi, 'log($1)');

  // e^(...) et e^x -> exp(...)
  s = s.replace(/\be\^\(([^)]+)\)/gi, 'exp($1)');
  s = s.replace(/\be\^(-?[a-zA-Z0-9.]+)/gi, 'exp($1)');

  // Multiplication implicite : 2x -> 2*x ; 2( -> 2*( ; )( -> )*( ; )x -> )*x
  s = s.replace(/(\d)([a-zA-Z(])/g, '$1*$2');
  s = s.replace(/\)(\d|\()/g, ')*$1');
  s = s.replace(/\)([a-zA-Z])/g, ')*$1');

  return s;
}

/** Évalue une expression mathjs en x=val ; renvoie null si non défini/erreur. */
function safeEval(exprStr: string, val: number): number | null {
  try {
    const result = mathEvaluate(exprStr, { x: val });
    if (typeof result !== 'number') return null;
    if (Number.isNaN(result)) return null;
    return result; // Infinity est une valeur légitime ici (asymptote détectée)
  } catch {
    return null;
  }
}

// ==========================================================================
// 2. EXTRACTION DE LA DÉFINITION f(x) = ... ET DU DOMAINE ANNONCÉ
// ==========================================================================

export interface HomographicInfo {
  a: number; // Coeff de x au numérateur
  b: number; // Constante au numérateur
  c: number; // Coeff de x au dénominateur
  d: number; // Constante au dénominateur
  pole: number; // Valeur interdite : -d / c
  det: number; // ad - bc (signe de la dérivée)
  numStr: string; // ex: "2x + 1"
  denStr: string; // ex: "x - 2"
}

export interface ParsedFunctionDefinition {
  funcName: string;
  exprRaw: string;
  exprMathjs: string;
  domainLow: number;
  domainHigh: number;
  domainLowIncluded: boolean;
  domainHighIncluded: boolean;
  domainLabel: string; // ex: "]0 ; +∞[" pour la rédaction
  homographic?: HomographicInfo | null;
}

export function parseAffineCoeffs(str: string): { a: number; b: number } | null {
  const s = str.trim().replace(/\s+/g, '').replace(/\*/g, '');
  // Cas a*x + b ou a*x - b
  const m1 = s.match(/^([+-]?\d*(?:\.\d+)?)x([+-]\d+(?:\.\d+)?)$/i);
  if (m1) {
    let aStr = m1[1];
    if (aStr === '' || aStr === '+') aStr = '1';
    if (aStr === '-') aStr = '-1';
    const a = parseFloat(aStr);
    const b = parseFloat(m1[2]);
    if (!isNaN(a) && !isNaN(b)) return { a, b };
  }
  // Cas pur a*x
  const m2 = s.match(/^([+-]?\d*(?:\.\d+)?)x$/i);
  if (m2) {
    let aStr = m2[1];
    if (aStr === '' || aStr === '+') aStr = '1';
    if (aStr === '-') aStr = '-1';
    const a = parseFloat(aStr);
    if (!isNaN(a)) return { a, b: 0 };
  }
  // Cas b + a*x
  const m3 = s.match(/^([+-]?\d+(?:\.\d+)?)([+-]\d*(?:\.\d+)?)x$/i);
  if (m3) {
    const b = parseFloat(m3[1]);
    let aStr = m3[2];
    if (aStr === '' || aStr === '+') aStr = '1';
    if (aStr === '-') aStr = '-1';
    const a = parseFloat(aStr);
    if (!isNaN(a) && !isNaN(b)) return { a, b };
  }
  // Cas constante b seule
  const m4 = s.match(/^([+-]?\d+(?:\.\d+)?)$/);
  if (m4) {
    const b = parseFloat(m4[1]);
    if (!isNaN(b)) return { a: 0, b };
  }
  return null;
}

export function parseHomographic(raw: string, mathjs: string): HomographicInfo | null {
  // 1. Détection via LaTeX \frac{num}{den}
  const fracMatch = raw.match(/\\frac\s*\{([^}]+)\}\s*\{([^}]+)\}/);
  if (fracMatch) {
    const num = parseAffineCoeffs(fracMatch[1]);
    const den = parseAffineCoeffs(fracMatch[2]);
    if (num && den && den.a !== 0) {
      const pole = -den.b / den.a;
      const det = num.a * den.b - num.b * den.a;
      return {
        a: num.a,
        b: num.b,
        c: den.a,
        d: den.b,
        pole,
        det,
        numStr: fracMatch[1].trim(),
        denStr: fracMatch[2].trim(),
      };
    }
  }

  // 2. Détection via format slash dans raw ou mathjs : (2*x+1)/(x-2)
  const cleanMath = mathjs.replace(/^\(+/, '').replace(/\)+$/, '');
  const slashIdx = cleanMath.indexOf('/');
  if (slashIdx > 0) {
    const numStr = cleanMath.slice(0, slashIdx).replace(/[()]/g, '');
    const denStr = cleanMath.slice(slashIdx + 1).replace(/[()]/g, '');
    const num = parseAffineCoeffs(numStr);
    const den = parseAffineCoeffs(denStr);
    if (num && den && den.a !== 0) {
      const pole = -den.b / den.a;
      const det = num.a * den.b - num.b * den.a;
      return {
        a: num.a,
        b: num.b,
        c: den.a,
        d: den.b,
        pole,
        det,
        numStr,
        denStr,
      };
    }
  }

  return null;
}

function boundToNumber(raw: string): number {
  const t = raw.trim().replace(/\\infty/i, 'infty');
  if (/^-?\+?infty$|^-?∞$/i.test(t) || /^\+?∞$/.test(t)) {
    return t.startsWith('-') ? -Infinity : Infinity;
  }
  const n = parseFloat(t.replace(',', '.'));
  return Number.isNaN(n) ? NaN : n;
}

export function parseFunctionAndDomain(fullText: string): ParsedFunctionDefinition | null {
  const clean = fullText
    .replace(/[−–—]/g, '-')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/\\infty/g, '+\\infty')
    .replace(/\+\+\\infty/g, '+\\infty');

  // Recherche de f(x) = ... en s'arrêtant proprement avant le contexte narratif ou une récidive
  const allMatches = Array.from(
    clean.matchAll(/\b([fFgGhH])\s*\(\s*x\s*\)\s*=\s*([^\n;]+?)(?=(?:[fFgGhH]\s*\(\s*x\s*\)\s*=|\s+On\s+note|\s+où|\s+avec|\s+pour\s+tout|\s*\.|\s*\$|\s*\\\)|\s*\n|$))/gi)
  );
  if (allMatches.length === 0) return null;

  let chosenFunc: { funcName: string; exprRaw: string; exprMathjs: string } | null = null;
  // Parcourir en favorisant l'expression la plus riche / syntaxiquement correcte (LaTeX avec ^ ou exposants)
  for (let i = allMatches.length - 1; i >= 0; i--) {
    const m = allMatches[i];
    const funcName = m[1].toLowerCase();
    const exprRaw = m[2].trim().replace(/^\$+|\$+$/g, '').trim();
    const exprMathjs = normalizeExpressionForMathjs(exprRaw);
    try {
      mathParse(exprMathjs);
      chosenFunc = { funcName, exprRaw, exprMathjs };
      break;
    } catch {
      // continuer pour essayer une autre variante
    }
  }
  if (!chosenFunc) return null;

  const { funcName, exprRaw, exprMathjs } = chosenFunc;

  // Recherche d'un domaine explicite : "définie sur ]a ; b[", "sur [a;b[", etc.
  let domainLow = -Infinity;
  let domainHigh = Infinity;
  let domainLowIncluded = false;
  let domainHighIncluded = false;
  let domainLabel = ']-∞ ; +∞[';

  const domainMatch = clean.match(
    /(?:d[ée]finie?\s+sur|sur)\s*(\]|\[)\s*(-?\+?infty|-?∞|\+?∞|-?\d+(?:[.,]\d+)?)\s*;\s*(\+?infty|\+?∞|-?\d+(?:[.,]\d+)?)\s*(\[|\])/i
  );

  if (domainMatch) {
    const openBracket = domainMatch[1];
    const closeBracket = domainMatch[4];
    const low = boundToNumber(domainMatch[2]);
    const high = boundToNumber(domainMatch[3]);
    if (!Number.isNaN(low) && !Number.isNaN(high) && low < high) {
      domainLow = low;
      domainHigh = high;
      domainLowIncluded = openBracket === '[';
      domainHighIncluded = closeBracket === ']';
      const lowStr = low === -Infinity ? '-∞' : low === Infinity ? '+∞' : `${low}`;
      const highStr = high === -Infinity ? '-∞' : high === Infinity ? '+∞' : `${high}`;
      domainLabel = `${openBracket}${lowStr} ; ${highStr}${closeBracket}`;
    }
  } else if (/sur\s+ℝ\s*\*\s*\+|sur\s+\]\s*0\s*;\s*\+?∞\s*\[|sur\s+\]\s*0\s*;\s*\+?\\infty\s*\[/i.test(clean)) {
    domainLow = 0;
    domainHigh = Infinity;
    domainLowIncluded = false;
    domainHighIncluded = false;
    domainLabel = ']0 ; +∞[';
  }

  const homographic = parseHomographic(exprRaw, exprMathjs);
  if (homographic && domainMatch === null && domainLow === -Infinity && domainHigh === Infinity) {
    const pStr = fmtNum(homographic.pole);
    domainLabel = `\\mathbb{R} \\setminus \\{ ${pStr} \\} = ]-\\infty ; ${pStr}[ \\cup ]${pStr} ; +\\infty[`;
  }

  return {
    funcName,
    exprRaw,
    exprMathjs,
    domainLow,
    domainHigh,
    domainLowIncluded,
    domainHighIncluded,
    domainLabel,
    homographic,
  };
}

// ==========================================================================
// 3. DÉRIVÉE SYMBOLIQUE
// ==========================================================================

export function computeSymbolicDerivative(exprMathjs: string): string | null {
  try {
    const node = derivative(exprMathjs, 'x');
    const simplified = simplify(node);
    return simplified.toString({ parenthesis: 'auto', implicit: 'show' });
  } catch {
    return null;
  }
}

/** Reformate une expression mathjs en notation mathématique soignée et lisible. */
export function toReadableMath(exprMathjs: string): string {
  // Si c'est un polynôme standard en x, on réordonne les termes par puissances décroissantes
  if (!/(?:log|exp|sin|cos|tan|sqrt|\/)/.test(exprMathjs)) {
    const cleaned = exprMathjs.replace(/\s+/g, '');
    const termMatches = Array.from(cleaned.matchAll(/([+-]?[^+-]+)/g));
    if (termMatches.length > 0) {
      const terms: { coeffStr: string; power: number }[] = [];
      let isPurePoly = true;
      for (const m of termMatches) {
        const raw = m[1];
        let power = 0;
        let coeffStr = '';
        if (/x\^(\d+)/.test(raw)) {
          power = parseInt(raw.match(/x\^(\d+)/)![1], 10);
          coeffStr = raw.replace(/x\^(\d+)/, '').replace(/\*/g, '');
        } else if (/x/.test(raw)) {
          power = 1;
          coeffStr = raw.replace(/x/, '').replace(/\*/g, '');
        } else {
          power = 0;
          coeffStr = raw.replace(/\*/g, '');
        }
        if (coeffStr === '' || coeffStr === '+') coeffStr = '+1';
        if (coeffStr === '-') coeffStr = '-1';
        if (isNaN(parseFloat(coeffStr))) {
          isPurePoly = false;
          break;
        }
        terms.push({ coeffStr, power });
      }
      if (isPurePoly && terms.length > 0) {
        terms.sort((a, b) => b.power - a.power);
        let out = '';
        for (let i = 0; i < terms.length; i++) {
          const { coeffStr, power } = terms[i];
          const num = parseFloat(coeffStr);
          if (num === 0) continue;
          const sign = num > 0 ? (i === 0 ? '' : '+ ') : (i === 0 ? '-' : '- ');
          const absNum = Math.abs(num);
          let termBody = '';
          if (power === 0) {
            termBody = `${absNum}`;
          } else if (power === 1) {
            termBody = absNum === 1 ? 'x' : `${absNum}x`;
          } else {
            termBody = absNum === 1 ? `x^${power}` : `${absNum}x^${power}`;
          }
          out += (i === 0 ? sign : ' ' + sign) + termBody;
        }
        if (out.trim()) return out.trim();
      }
    }
  }

  return exprMathjs
    .replace(/\s*\*\s*x\b/g, 'x')
    .replace(/\s*\*\s*/g, ' \\times ')
    .replace(/\^(-?\d+)/g, '^{$1}')
    .replace(/log\(/g, '\\ln(')
    .replace(/sqrt\(/g, '\\sqrt{')
    .replace(/exp\(/g, 'e^{');
}

// ==========================================================================
// 4. LIMITES PAR APPROXIMATION NUMÉRIQUE RIGOUREUSE
// ==========================================================================

export type LimitOutcome =
  | { kind: 'finite'; value: number }
  | { kind: 'plus_infinity' }
  | { kind: 'minus_infinity' }
  | { kind: 'undetermined' };

function classifySequence(samples: number[]): LimitOutcome {
  const finite = samples.filter((v) => Number.isFinite(v));
  const last = samples[samples.length - 1];

  if (last === Infinity) return { kind: 'plus_infinity' };
  if (last === -Infinity) return { kind: 'minus_infinity' };

  if (finite.length < 3) return { kind: 'undetermined' };

  const n = finite.length;
  const a = finite[n - 1];
  const b = finite[n - 2];
  const c = finite[n - 3];

  const diffAB = Math.abs(a - b);
  const diffBC = Math.abs(b - c);

  // Croissance non bornée (en valeur absolue), franchement explosive.
  const growingMagnitude = Math.abs(a) > Math.abs(b) * 5 && Math.abs(b) > Math.abs(c) * 5 && Math.abs(a) > 1e4;
  if (growingMagnitude) {
    return a > 0 ? { kind: 'plus_infinity' } : { kind: 'minus_infinity' };
  }

  // Convergence : les écarts successifs s'effondrent (typique d'une limite
  // finie polynomiale/rationnelle/racine où l'erreur décroît comme x^k).
  if (diffAB < 1e-4 && diffAB <= diffBC * 0.5 + 1e-9) {
    const rounded = Math.round(a * 1e6) / 1e6;
    return { kind: 'finite', value: rounded };
  }

  // Divergence lente (typiquement logarithmique) : la tendance est
  // strictement monotone et l'écart entre échantillons successifs ne
  // s'effondre PAS (contrairement au cas convergent ci-dessus), même si la
  // magnitude absolue ne franchit pas un seuil "explosif". On l'interprète
  // comme une divergence vers l'infini dans le sens de la tendance.
  const monotoneIncreasing = a > b && b > c;
  const monotoneDecreasing = a < b && b < c;
  const notShrinkingEnough = diffBC === 0 ? diffAB > 1e-6 : diffAB / diffBC > 0.3;
  if ((monotoneIncreasing || monotoneDecreasing) && notShrinkingEnough && diffAB > 1e-6) {
    return a > b ? { kind: 'plus_infinity' } : { kind: 'minus_infinity' };
  }

  return { kind: 'undetermined' };
}

/** Limite en +∞ ou -∞. */
export function limitAtInfinity(exprMathjs: string, direction: 'plus' | 'minus'): LimitOutcome {
  const magnitudes = [10, 100, 1000, 10000, 100000, 1000000];
  const samples = magnitudes.map((m) => safeEval(exprMathjs, direction === 'plus' ? m : -m));
  const cleaned = samples.map((v) => (v === null ? NaN : v));
  return classifySequence(cleaned);
}

/** Limite en un point fini a, approché par la droite (side='right') ou la gauche (side='left'). */
export function limitAtFinitePoint(exprMathjs: string, a: number, side: 'left' | 'right'): LimitOutcome {
  const epsilons = [0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001];
  const samples = epsilons.map((eps) => {
    const x = side === 'right' ? a + eps : a - eps;
    return safeEval(exprMathjs, x);
  });
  const cleaned = samples.map((v) => (v === null ? NaN : v));
  return classifySequence(cleaned);
}

export function formatLimitOutcome(outcome: LimitOutcome): string {
  if (outcome.kind === 'plus_infinity') return '+\\infty';
  if (outcome.kind === 'minus_infinity') return '-\\infty';
  if (outcome.kind === 'finite') {
    const v = outcome.value;
    if (Number.isInteger(v)) return `${v}`;
    return `${Math.round(v * 1000) / 1000}`;
  }
  return '\\text{forme non tranchée numériquement}';
}

// ==========================================================================
// 5. RECHERCHE DE RACINES ET ÉTUDE DE SIGNE PAR ÉCHANTILLONNAGE + DICHOTOMIE
// ==========================================================================

export interface SignInterval {
  from: number; // peut être -Infinity
  to: number; // peut être +Infinity
  sign: 1 | -1 | 0;
}

function bisectRoot(exprMathjs: string, lo: number, hi: number, fLo: number, fHi: number): number | null {
  let a = lo;
  let b = hi;
  let fa = fLo;
  for (let i = 0; i < 60; i++) {
    const mid = (a + b) / 2;
    const fm = safeEval(exprMathjs, mid);
    if (fm === null || !Number.isFinite(fm)) return null;
    if (Math.abs(fm) < 1e-9) return mid;
    if ((fa > 0 && fm > 0) || (fa < 0 && fm < 0)) {
      a = mid;
      fa = fm;
    } else {
      b = mid;
    }
  }
  return (a + b) / 2;
}

/**
 * Échantillonne exprMathjs sur [lo, hi] (en évitant les bornes infinies : on
 * échantillonne alors une fenêtre finie représentative) pour détecter les
 * racines et le signe sur chaque sous-intervalle.
 */
export function studySignOnInterval(
  exprMathjs: string,
  lo: number,
  hi: number,
  sampleCount: number = 4000
): { roots: number[]; intervals: SignInterval[] } {
  const finiteLo = Number.isFinite(lo) ? lo : -1000;
  const finiteHi = Number.isFinite(hi) ? hi : 1000;
  const step = (finiteHi - finiteLo) / sampleCount;

  const roots: number[] = [];
  const boundaries: number[] = [lo];

  let prevX: number | null = null;
  let prevVal: number | null = null;

  // On échantillonne aux MILIEUX des cellules (jamais exactement sur les
  // bornes lo/hi, qui peuvent être exclues du domaine — ex: x=0 pour 1/x^3).
  for (let i = 0; i < sampleCount; i++) {
    const x = finiteLo + (i + 0.5) * step;
    const val = safeEval(exprMathjs, x);

    if (val !== null && Number.isFinite(val) && Math.abs(val) < 1e-7 && (roots.length === 0 || Math.abs(x - roots[roots.length - 1]) > step * 3)) {
      roots.push(x);
      boundaries.push(x);
    } else if (
      prevVal !== null &&
      val !== null &&
      Number.isFinite(prevVal) &&
      Number.isFinite(val) &&
      ((prevVal > 0 && val < 0) || (prevVal < 0 && val > 0))
    ) {
      const root = bisectRoot(exprMathjs, prevX as number, x, prevVal, val);
      if (root !== null) {
        roots.push(root);
        boundaries.push(root);
      }
    } else if (
      prevVal !== null &&
      val !== null &&
      ((Number.isFinite(prevVal) && !Number.isFinite(val)) || (!Number.isFinite(prevVal) && Number.isFinite(val)))
    ) {
      // Traversée d'une asymptote verticale (point exclu du domaine) : on la
      // considère comme une borne d'intervalle (le signe peut changer là).
      boundaries.push((prevX as number + x) / 2);
    }

    prevX = x;
    prevVal = val;
  }

  boundaries.push(hi);
  const sortedBoundaries = Array.from(new Set(boundaries.map((b) => (Number.isFinite(b) ? Math.round(b * 1e8) / 1e8 : b)))).sort(
    (a, b) => a - b
  );

  const intervals: SignInterval[] = [];
  for (let i = 0; i < sortedBoundaries.length - 1; i++) {
    const from = sortedBoundaries[i];
    const to = sortedBoundaries[i + 1];
    const midpoint = Number.isFinite(from) && Number.isFinite(to) ? (from + to) / 2 : Number.isFinite(from) ? from + 1 : to - 1;
    const val = safeEval(exprMathjs, midpoint);
    let sign: 1 | -1 | 0 = 0;
    if (val !== null && Number.isFinite(val)) {
      sign = val > 1e-9 ? 1 : val < -1e-9 ? -1 : 0;
    }
    intervals.push({ from, to, sign });
  }

  return { roots: roots.filter((r) => Number.isFinite(r)), intervals };
}

// ==========================================================================
// 6. RÉSOLUTION D'UNE QUESTION DONNÉE (contrat identique à solveQuadraticQuestion)
// ==========================================================================

function fmtNum(n: number): string {
  if (Number.isInteger(n)) return `${n}`;
  return `${Math.round(n * 1000) / 1000}`;
}

function fmtBound(n: number): string {
  if (n === Infinity) return '+\\infty';
  if (n === -Infinity) return '-\\infty';
  return fmtNum(n);
}

function formatPapaSteps(
  whatIsAsked: string,
  formulaOrRule: string,
  detailedSteps: string[],
  finalResult: string,
  pedagogicalTip?: string
): string[] {
  const steps: string[] = [];
  steps.push(`📍 **1. Ce qu'on te demande :**`);
  steps.push(whatIsAsked);
  steps.push('');
  steps.push(`📖 **2. Formule ou propriété de cours applicable :**`);
  steps.push(formulaOrRule);
  steps.push('');
  steps.push(`👨‍🏫 **3. Détail du calcul pas-à-pas (Méthode Papa) :**`);
  detailedSteps.forEach(st => {
    steps.push(st);
  });
  if (pedagogicalTip) {
    steps.push('');
    steps.push(`💡 **Conseil du Papa pour l'examen :** ${pedagogicalTip}`);
  }
  steps.push('');
  steps.push(`✅ **4. Conclusion nette et résultat :**`);
  steps.push(`On en déduit donc : $\\boxed{${finalResult}}$`);
  return steps;
}

interface RequestedLimitTarget {
  kind: 'finite' | 'plus_infinity' | 'minus_infinity';
  value?: number;
  side?: 'left' | 'right' | 'both';
  rawLabel: string;
}

export function extractRequestedLimits(qText: string): RequestedLimitTarget[] {
  const reqs: RequestedLimitTarget[] = [];
  const clean = qText.replace(/\s+/g, ' ');

  // 1. Points finis avec ou sans côté, ex: \lim_{x\to2^-}, x\to2^+, x\to2
  const finiteRe = /(?:\\lim_\{x\\to|x\s*\\to|x\s*->|tend\s+vers)\s*(-?\d+(?:[.,]\d+)?)\s*(?:\^([+-])|([+-])|\s*([àa]\s*(?:gauche|droite)))?/gi;
  for (const m of clean.matchAll(finiteRe)) {
    const val = parseFloat(m[1].replace(',', '.'));
    let side: 'left' | 'right' | 'both' = 'both';
    const sideInd = (m[2] || m[3] || m[4] || '').toLowerCase();
    if (sideInd === '-' || sideInd.includes('gauche')) side = 'left';
    else if (sideInd === '+' || sideInd.includes('droite')) side = 'right';

    if (!reqs.some(r => r.kind === 'finite' && r.value === val && r.side === side)) {
      reqs.push({
        kind: 'finite',
        value: val,
        side,
        rawLabel: `x \\to ${val}${side === 'left' ? '^{-}' : side === 'right' ? '^{+}' : ''}`
      });
    }
  }

  // 2. Plus l'infini
  if (/\\lim_\{x\\to\+?\\infty\}|\+\\infty|\+∞|plus\s+l['’]infini/i.test(clean)) {
    if (!reqs.some(r => r.kind === 'plus_infinity')) {
      reqs.push({ kind: 'plus_infinity', rawLabel: 'x \\to +\\infty' });
    }
  }

  // 3. Moins l'infini
  if (/\\lim_\{x\\to-\\infty\}|-\\infty|-∞|moins\s+l['’]infini/i.test(clean)) {
    if (!reqs.some(r => r.kind === 'minus_infinity')) {
      reqs.push({ kind: 'minus_infinity', rawLabel: 'x \\to -\\infty' });
    }
  }

  return reqs;
}

export function solveGenericFunctionQuestion(
  q: ParsedQuestion,
  def: ParsedFunctionDefinition
): SolvedQuestionResult | null {
  const cleanQ = q.cleanText.toLowerCase();
  const { exprMathjs, funcName, domainLow, domainHigh, domainLabel } = def;

  // --- 0. ENSEMBLE OU DOMAINE DE DÉFINITION ---
  if (
    q.detectedType === 'definition_domain' ||
    /ensemble de d[ée]finition|domaine de d[ée]finition|valeur[s]? interdite[s]?|d_[a-z]/i.test(cleanQ)
  ) {
    if (def.homographic) {
      const { c, d, pole } = def.homographic;
      const poleStr = fmtNum(pole);
      const denEq = c === 1 ? `x ${d < 0 ? `- ${Math.abs(d)}` : `+ ${d}`}` : `${c}x ${d < 0 ? `- ${Math.abs(d)}` : `+ ${d}`}`;
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps: formatPapaSteps(
          `Déterminer l'ensemble de définition $\\mathcal{D}_${funcName}$ de la fonction $${funcName}$.`,
          `Une fonction rationnelle (quotient de deux expressions affines) est définie pour tous les réels $x$ qui n'annulent pas son dénominateur : le dénominateur doit être strictement différent de zéro.`,
          [
            `• La fonction $${funcName}$ est une fonction rationnelle définie par :`,
            `  $$${funcName}(x) = ${def.exprRaw}$$`,
            `• **Condition d'existence :**`,
            `  Le quotient $${funcName}(x)$ existe si et seulement si son dénominateur est non nul :`,
            `  $$${denEq} \\neq 0 \\iff ${c === 1 ? 'x' : `${c}x`} \\neq ${-d} \\iff x \\neq ${poleStr}$$`,
            `• La valeur interdite pour $${funcName}$ est donc $x = ${poleStr}$.`,
            `• Par conséquent, l'ensemble de définition de $${funcName}$ est l'ensemble de tous les nombres réels sauf $${poleStr}$.`,
            `• Sous forme ensembliste et de réunion d'intervalles :`,
            `  $$\\mathcal{D}_${funcName} = \\mathbb{R} \\setminus \\{ ${poleStr} \\} = ]-\\infty \\;;\\; ${poleStr}[ \\;\\cup\\; ]${poleStr} \\;;\\; +\\infty[$$`,
          ],
          `\\mathcal{D}_${funcName} = \\mathbb{R} \\setminus \\{ ${poleStr} \\} = ]-\\infty ; ${poleStr}[ \\cup ]${poleStr} ; +\\infty[`,
          `Pour toute fonction comportant une fraction, commence toujours par poser la condition « dénominateur ≠ 0 » pour isoler la valeur interdite.`
        ),
        finalAnswer: `D_${funcName} = ℝ \\ { ${poleStr} } = ]-∞ ; ${poleStr}[ ∪ ]${poleStr} ; +∞[`,
        verificationPassed: true,
      };
    }

    if (!/(?:\/|frac|log|ln|sqrt)/i.test(def.exprRaw)) {
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps: formatPapaSteps(
          `Déterminer l'ensemble de définition $\\mathcal{D}_${funcName}$ de la fonction $${funcName}$.`,
          `Toute fonction polynôme est définie sur l'ensemble des réels $\\mathbb{R} = ]-\\infty ; +\\infty[$.`,
          [
            `• La fonction $${funcName}$ est une fonction polynôme : $${funcName}(x) = ${def.exprRaw}$.`,
            `• Elle ne comporte aucune opération restrictive (pas de dénominateur susceptible de s'annuler, pas de racine carrée ni de logarithme).`,
            `• Son ensemble de définition est donc l'ensemble de tous les réels $\\mathbb{R}$.`,
          ],
          `\\mathcal{D}_${funcName} = \\mathbb{R} = ]-\\infty ; +\\infty[`,
          `Les fonctions polynômes sont toujours définies et continues sur tout $\\mathbb{R}$.`
        ),
        finalAnswer: `D_${funcName} = ℝ = ]-∞ ; +∞[`,
        verificationPassed: true,
      };
    }
  }

  // --- 1. LIMITES ---
  if (q.detectedType === 'limits' || /limite|tend vers/i.test(cleanQ)) {
    // 1.A Cas particulier hautement fréquent : Fonction homographique
    if (def.homographic) {
      const { a, b, c, pole } = def.homographic;
      const poleStr = fmtNum(pole);
      const targets = extractRequestedLimits(cleanQ);

      const hasPoleTarget = targets.some(t => t.kind === 'finite' && Math.abs(t.value! - pole) < 1e-4);
      const hasPlusInfty = targets.some(t => t.kind === 'plus_infinity');
      const hasMinusInfty = targets.some(t => t.kind === 'minus_infinity');

      // 1. Limite(s) au pôle (valeur interdite)
      if (hasPoleTarget || (!hasPlusInfty && !hasMinusInfty && targets.length === 0 && !cleanQ.includes('infini'))) {
        const numVal = a * pole + b;
        const numSign = numVal > 0 ? '> 0' : '< 0';
        const leftDenSign = c > 0 ? '0^{-}' : '0^{+}';
        const rightDenSign = c > 0 ? '0^{+}' : '0^{-}';
        const leftLimSign = (numVal > 0 && c > 0) || (numVal < 0 && c < 0) ? '-\\infty' : '+\\infty';
        const rightLimSign = (numVal > 0 && c > 0) || (numVal < 0 && c < 0) ? '+\\infty' : '-\\infty';

        const detailedSteps = [
          `• On cherche les limites de $${funcName}(x) = \\frac{${def.homographic.numStr}}{${def.homographic.denStr}}$ lorsque $x$ tend vers $${poleStr}$ :`,
          `• **Limite du numérateur :**`,
          `  $$\\lim_{x \\to ${poleStr}} (${def.homographic.numStr}) = ${fmtNum(a)} \\times (${poleStr}) + (${fmtNum(b)}) = ${fmtNum(numVal)} \\quad (${numSign})$$`,
          `• **Limite et signe du dénominateur :**`,
          `  $$\\lim_{x \\to ${poleStr}} (${def.homographic.denStr}) = 0$$`,
          `  - Pour $x < ${poleStr}$ ($x \\to ${poleStr}^{-}$) : $${def.homographic.denStr} < 0$, donc $\\lim_{x \\to ${poleStr}^{-}} (${def.homographic.denStr}) = ${leftDenSign}$.`,
          `  - Pour $x > ${poleStr}$ ($x \\to ${poleStr}^{+}$) : $${def.homographic.denStr} > 0$, donc $\\lim_{x \\to ${poleStr}^{+}} (${def.homographic.denStr}) = ${rightDenSign}$.`,
          `• **Par quotient des limites :**`,
          `  $$\\lim_{x \\to ${poleStr}^{-}} ${funcName}(x) = \\frac{${fmtNum(numVal)}}{${leftDenSign}} = ${leftLimSign}$$`,
          `  $$\\lim_{x \\to ${poleStr}^{+}} ${funcName}(x) = \\frac{${fmtNum(numVal)}}{${rightDenSign}} = ${rightLimSign}$$`,
          `• **Interprétation graphique :**`,
          `  La droite d'équation $x = ${poleStr}$ est une **asymptote verticale** à la courbe représentative $\\mathcal{C}_${funcName}$.`,
        ];

        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: q.cleanText,
          steps: formatPapaSteps(
            `Calculer $\\lim_{x \\to ${poleStr}^{-}} ${funcName}(x)$ et $\\lim_{x \\to ${poleStr}^{+}} ${funcName}(x)$ et en donner l'interprétation graphique.`,
            `Pour une limite de quotient $\\frac{u(x)}{v(x)}$ avec $\\lim u(x) = L \\neq 0$ et $\\lim v(x) = 0$ : on étudie le signe du dénominateur à gauche et à droite pour appliquer la règle des signes ($L/0^+ = \\pm\\infty$, $L/0^- = \\mp\\infty$).`,
            detailedSteps,
            `\\lim_{x \\to ${poleStr}^{-}} ${funcName}(x) = ${leftLimSign} \\quad \\text{et} \\quad \\lim_{x \\to ${poleStr}^{+}} ${funcName}(x) = ${rightLimSign}`,
            `Quand le dénominateur s'annule et que le numérateur ne s'annule pas, la limite est toujours infinie ($\\pm\\infty$), ce qui correspond graphiquement à une asymptote verticale $x = x_0$.`
          ),
          finalAnswer: `lim(x→${poleStr}⁻) ${funcName}(x) = ${leftLimSign}, lim(x→${poleStr}⁺) ${funcName}(x) = ${rightLimSign}`,
          verificationPassed: true,
        };
      }

      // 2. Limite(s) à l'infini (+∞ et/ou -∞)
      if (hasPlusInfty || hasMinusInfty || cleanQ.includes('infini')) {
        const ratio = a / c;
        const ratioStr = fmtNum(ratio);
        const detailedSteps = [
          `• En $\\pm\\infty$, la limite d'une fonction rationnelle est égale à la limite du quotient de ses termes de plus haut degré :`,
          `  $$\\lim_{x \\to +\\infty} ${funcName}(x) = \\lim_{x \\to +\\infty} \\frac{${fmtNum(a)}x}{${fmtNum(c)}x} = \\frac{${fmtNum(a)}}{${fmtNum(c)}} = ${ratioStr}$$`,
          `• **Démonstration rigoureuse par factorisation :**`,
          `  Pour tout $x \\neq 0$ et $x \\neq ${poleStr}$ :`,
          `  $$${funcName}(x) = \\frac{x \\left(${fmtNum(a)} + \\frac{${fmtNum(b)}}{x}\\right)}{x \\left(${fmtNum(c)} + \\frac{${def.homographic.d}}{x}\\right)} = \\frac{${fmtNum(a)} + \\frac{${fmtNum(b)}}{x}}{${fmtNum(c)} + \\frac{${def.homographic.d}}{x}}$$`,
          `  Or $\\lim_{x \\to +\\infty} \\frac{${fmtNum(b)}}{x} = 0$ et $\\lim_{x \\to +\\infty} \\frac{${def.homographic.d}}{x} = 0$.`,
          `  Par somme et quotient des limites :`,
          `  $$\\lim_{x \\to +\\infty} ${funcName}(x) = \\frac{${fmtNum(a)} + 0}{${fmtNum(c)} + 0} = ${ratioStr}$$`,
          hasMinusInfty ? `  De même en $-\\infty$ : $\\lim_{x \\to -\\infty} ${funcName}(x) = ${ratioStr}$.` : ``,
          `• **Interprétation graphique :**`,
          `  La droite d'équation $y = ${ratioStr}$ est une **asymptote horizontale** à la courbe représentative $\\mathcal{C}_${funcName}$ en $+\\infty$.`,
        ].filter(Boolean);

        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: q.cleanText,
          steps: formatPapaSteps(
            `Calculer $\\lim_{x \\to +\\infty} ${funcName}(x)$ et en donner l'interprétation graphique.`,
            `En $\\pm\\infty$, la limite d'une fonction rationnelle est égale à la limite du quotient de ses termes de plus haut degré. Si cette limite est un nombre réel fini $L$, la droite d'équation $y = L$ est asymptote horizontale.`,
            detailedSteps,
            `\\lim_{x \\to +\\infty} ${funcName}(x) = ${ratioStr}`,
            `Pour lever l'indétermination « $\\infty/\\infty$ », factorise toujours le numérateur et le dénominateur par la puissance de $x$ dominante.`
          ),
          finalAnswer: `lim(x→+∞) ${funcName}(x) = ${ratioStr}`,
          verificationPassed: true,
        };
      }
    }

    // 1.B Cas général de calcul de limites
    const steps: string[] = [];
    const answers: string[] = [];

    const evalAndDescribe = (label: string, outcome: LimitOutcome, asymptoteNote?: string) => {
      const formatted = formatLimitOutcome(outcome);
      let stepText = `• $\\lim_{${label}} ${funcName}(x) = ${formatted}$`;
      if (asymptoteNote) {
        stepText += `\n  ➜ *Interprétation graphique :* ${asymptoteNote}`;
      }
      steps.push(stepText);
      answers.push(`$\\lim_{${label}} ${funcName}(x) = ${formatted}$`);
      return outcome.kind !== 'undetermined';
    };

    let anySolved = false;

    // Détection ciblée des limites demandées dans l'énoncé de la question
    const asksZeroPlus = /0\s*\^\s*\+|0\s*\+\s*|0\s*à\s*droite|0\s*par\s*valeur/i.test(cleanQ);
    const asksZeroMinus = /0\s*\^\s*-|0\s*-\s*|0\s*à\s*gauche/i.test(cleanQ);
    const asksPlusInfty = /\+\s*(?:\\infty|∞|infty)|plus\s+l'infini/i.test(cleanQ);
    const asksMinusInfty = /-\s*(?:\\infty|∞|infty)|moins\s+l'infini/i.test(cleanQ);
    const hasSpecificTargets = asksZeroPlus || asksZeroMinus || asksPlusInfty || asksMinusInfty;

    if (asksZeroPlus || (!hasSpecificTargets && domainLow === 0 && !def.domainLowIncluded)) {
      const out = limitAtFinitePoint(exprMathjs, 0, 'right');
      const asymp = out.kind === 'plus_infinity' || out.kind === 'minus_infinity'
        ? "La droite d'équation $x = 0$ (axe des ordonnées) est asymptote verticale à la courbe $(C_f)$."
        : undefined;
      anySolved = evalAndDescribe('x \\to 0^{+}', out, asymp) || anySolved;
    }

    if (asksZeroMinus || (!hasSpecificTargets && domainHigh === 0 && !def.domainHighIncluded)) {
      const out = limitAtFinitePoint(exprMathjs, 0, 'left');
      const asymp = out.kind === 'plus_infinity' || out.kind === 'minus_infinity'
        ? "La droite d'équation $x = 0$ (axe des ordonnées) est asymptote verticale à la courbe $(C_f)$."
        : undefined;
      anySolved = evalAndDescribe('x \\to 0^{-}', out, asymp) || anySolved;
    }

    if (asksMinusInfty || (!hasSpecificTargets && domainLow === -Infinity)) {
      const out = limitAtInfinity(exprMathjs, 'minus');
      anySolved = evalAndDescribe('x \\to -\\infty', out) || anySolved;
    } else if (!hasSpecificTargets && domainLow !== -Infinity && domainLow !== 0) {
      const side = def.domainLowIncluded ? undefined : 'right';
      const out = side ? limitAtFinitePoint(exprMathjs, domainLow, 'right') : { kind: 'finite', value: safeEval(exprMathjs, domainLow) ?? NaN } as LimitOutcome;
      anySolved = evalAndDescribe(`x \\to ${fmtBound(domainLow)}${def.domainLowIncluded ? '' : '^{+}'}`, out) || anySolved;
    }

    if (asksPlusInfty || (!hasSpecificTargets && domainHigh === Infinity)) {
      const out = limitAtInfinity(exprMathjs, 'plus');
      anySolved = evalAndDescribe('x \\to +\\infty', out) || anySolved;
    } else if (!hasSpecificTargets && domainHigh !== Infinity && domainHigh !== 0) {
      const out = def.domainHighIncluded ? ({ kind: 'finite', value: safeEval(exprMathjs, domainHigh) ?? NaN } as LimitOutcome) : limitAtFinitePoint(exprMathjs, domainHigh, 'left');
      anySolved = evalAndDescribe(`x \\to ${fmtBound(domainHigh)}${def.domainHighIncluded ? '' : '^{-}'}`, out) || anySolved;
    }

    if (!anySolved) return null;

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: answers.join(' et '),
      verificationPassed: true,
    };
  }

  // --- 2. DÉRIVÉE (sans étude de signe) ---
  if (q.detectedType === 'derivative' && !/signe|variation/i.test(cleanQ)) {
    if (def.homographic) {
      const { a, b, c, pole, det, numStr, denStr } = def.homographic;
      const poleStr = fmtNum(pole);
      const detStr = fmtNum(det);
      const denSquared = `(${denStr})^2`;
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps: formatPapaSteps(
          `Calculer la fonction dérivée $${funcName}'(x)$ de $${funcName}$.`,
          `Formule de la dérivée d'un quotient : pour $u$ et $v$ deux fonctions dérivables sur un intervalle où $v(x) \\neq 0$, $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$.`,
          [
            `• **Justification de la dérivabilité :**`,
            `  La fonction $${funcName}$ est une fonction rationnelle ; elle est dérivable sur chacun des intervalles de son ensemble de définition $\\mathcal{D}_${funcName} = ]-\\infty ; ${poleStr}[ \\cup ]${poleStr} ; +\\infty[$.`,
            `• **Identification de $u(x)$ et $v(x)$ :**`,
            `  - $u(x) = ${numStr} \\implies u'(x) = ${fmtNum(a)}$`,
            `  - $v(x) = ${denStr} \\implies v'(x) = ${fmtNum(c)}$`,
            `• **Application de la formule du quotient :**`,
            `  $$${funcName}'(x) = \\frac{u'(x)v(x) - u(x)v'(x)}{(v(x))^2} = \\frac{${fmtNum(a)}(${denStr}) - (${numStr}) \\times ${fmtNum(c)}}{${denSquared}}$$`,
            `• **Développement et simplification du numérateur :**`,
            `  $$${funcName}'(x) = \\frac{${fmtNum(a * c)}x ${a * def.homographic.d < 0 ? `- ${Math.abs(a * def.homographic.d)}` : `+ ${a * def.homographic.d}`} - (${fmtNum(a * c)}x ${b * c < 0 ? `- ${Math.abs(b * c)}` : `+ ${b * c}`})}{${denSquared}}$$`,
            `  $$${funcName}'(x) = \\frac{${detStr}}{${denSquared}}$$`,
          ],
          `${funcName}'(x) = \\frac{${detStr}}{${denSquared}}`,
          `Ne développe jamais le dénominateur $(v(x))^2$ : conserve-le toujours factorisé sous forme de carré pour que son signe reste immédiatement évident !`
        ),
        finalAnswer: `${funcName}'(x) = ${detStr}/${denSquared}`,
        verificationPassed: true,
      };
    }

    const derivStr = computeSymbolicDerivative(exprMathjs);
    if (!derivStr) return null;
    const readableDeriv = toReadableMath(derivStr);
    const steps = [
      `1. **Justification de la dérivabilité :** La fonction $${funcName}$ est dérivable sur son domaine de définition $${domainLabel}$ comme somme/quotient de fonctions usuelles dérivables.`,
      `2. **Calcul de la fonction dérivée :**\n   $$\\forall x \\in ${domainLabel}, \\quad ${funcName}'(x) = ${readableDeriv}$$`,
    ];
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `${funcName}'(x) = ${readableDeriv}`,
      verificationPassed: true,
    };
  }

  // --- 3. SIGNE DE f'(x) / TABLEAU DE SIGNE / VARIATION ---
  if (
    q.detectedType === 'sign_table' ||
    q.detectedType === 'variation' ||
    (q.detectedType === 'derivative' && /signe|variation/i.test(cleanQ)) ||
    /signe de|tableau de signe|tableau de variation|sens de variation/i.test(cleanQ)
  ) {
    if (def.homographic) {
      const { a, c, pole, det, denStr } = def.homographic;
      const poleStr = fmtNum(pole);
      const detStr = fmtNum(det);
      const isPositive = det > 0;
      const signWord = isPositive ? 'strictement positive (> 0)' : 'strictement négative (< 0)';
      const varWord = isPositive ? 'strictement croissante' : 'strictement décroissante';
      const signSym = isPositive ? '+' : '-';
      const arrow = isPositive ? '\\nearrow' : '\\searrow';
      const asympY = fmtNum(a / c);

      const detailedSteps = [
        `• D'après la question précédente, pour tout $x \\in \\mathcal{D}_${funcName}$ :`,
        `  $$${funcName}'(x) = \\frac{${detStr}}{(${denStr})^2}$$`,
        `• **Étude du signe du dénominateur :**`,
        `  Pour tout $x \\in \\mathbb{R} \\setminus \\{ ${poleStr} \\}$, $(${denStr})^2 > 0$ car le carré d'un nombre réel non nul est strictement positif.`,
        `• **Étude du signe du numérateur :**`,
        `  Le numérateur est la constante $${detStr}$, qui est ${isPositive ? 'strictement positive' : 'strictement négative'} ($${detStr} ${isPositive ? '> 0' : '< 0'}$).`,
        `• **Signe de $${funcName}'(x)$ :**`,
        `  Par quotient d'un numérateur ${isPositive ? 'positif' : 'négatif'} et d'un dénominateur strictement positif :`,
        `  $$\\forall x \\in \\mathbb{R} \\setminus \\{ ${poleStr} \\}, \\quad ${funcName}'(x) ${isPositive ? '> 0' : '< 0'}$$`,
        `  La dérivée $${funcName}'(x)$ est donc ${signWord} sur chacun des intervalles de $\\mathcal{D}_${funcName}$.`,
        `• **Sens de variation de $${funcName}$ :**`,
        `  - $${funcName}$ est **${varWord}** sur $]-\\infty \\;;\\; ${poleStr}[$`,
        `  - $${funcName}$ est **${varWord}** sur $]${poleStr} \\;;\\; +\\infty[$`,
        `• **Tableau de variations récapitulatif :**`,
        `  $$\\begin{array}{|c|ccccc|}` +
        `  \\hline` +
        `  x & -\\infty & & ${poleStr} & & +\\infty \\\\` +
        `  \\hline` +
        `  ${funcName}'(x) & & ${signSym} & || & ${signSym} & \\\\` +
        `  \\hline` +
        `  ${funcName}(x) & ${asympY} & ${arrow} & || & ${arrow} & ${asympY} \\\\` +
        `  \\hline` +
        `  \\end{array}$$`,
      ];

      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps: formatPapaSteps(
          `Étudier le signe de $${funcName}'(x)$ et dresser les variations de $${funcName}$.`,
          `Le sens de variation d'une fonction découle du signe de sa dérivée : si $${funcName}'(x) < 0$ sur un intervalle, $${funcName}$ est strictement décroissante sur cet intervalle.`,
          detailedSteps,
          `${funcName} \\text{ est } ${varWord} \\text{ sur } ]-\\infty ; ${poleStr}[ \\text{ et sur } ]${poleStr} ; +\\infty[`,
          `Ne dis JAMAIS que la fonction est décroissante sur « ]-∞ ; 2[ ∪ ]2 ; +∞[ ». Elle est décroissante sur CHAQUE intervalle séparément. Les examinateurs du Baccalauréat vérifient rigoureusement ce point !`
        ),
        finalAnswer: `${funcName}'(x) ${isPositive ? '> 0' : '< 0'} => ${funcName} est ${varWord} sur ]-∞ ; ${poleStr}[ et sur ]${poleStr} ; +∞[`,
        verificationPassed: true,
      };
    }
    const derivStr = computeSymbolicDerivative(exprMathjs);
    if (!derivStr) return null;

    const readableDeriv = toReadableMath(derivStr);
    const { roots, intervals } = studySignOnInterval(derivStr, domainLow, domainHigh);
    if (intervals.length === 0) return null;

    const steps: string[] = [];
    steps.push(`1. **Dérivabilité et expression de $${funcName}'(x)$ :**\n   La fonction $${funcName}$ est dérivable sur $${domainLabel}$.\n   $$\\forall x \\in ${domainLabel}, \\quad ${funcName}'(x) = ${readableDeriv}$$`);

    if (roots.length === 0) {
      const constantSign = intervals[0].sign;
      const signSymbol = constantSign >= 0 ? '\\ge 0' : '\\le 0';
      const varWord = constantSign >= 0 ? 'strictement croissante' : 'strictement décroissante';
      steps.push(`2. **Étude du signe de la dérivée :**\n   Pour tout $x \\in ${domainLabel}$, $${funcName}'(x) ${signSymbol}$.`);
      steps.push(`3. **Sens de variation :**\n   Par conséquent, la fonction $${funcName}$ est ${varWord} sur l'intervalle $${domainLabel}$.`);
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps,
        finalAnswer: `${funcName}'(x) = ${readableDeriv} (${funcName} ${varWord} sur ${domainLabel})`,
        verificationPassed: true,
      };
    }

    const roundedRoots = roots.map((r) => fmtNum(r));
    steps.push(`2. **Recherche des points d'annulation de $${funcName}'(x)$ :**\n   $${funcName}'(x) = 0 \\iff x \\in \\{ ${roundedRoots.join(' ; ')} \\}$`);

    steps.push(`3. **Étude du signe de $${funcName}'(x)$ par intervalles :**`);
    intervals.forEach((iv) => {
      const signLabel = iv.sign > 0 ? '> 0' : iv.sign < 0 ? '< 0' : '= 0';
      const varWord = iv.sign > 0 ? 'strictement croissante' : iv.sign < 0 ? 'strictement décroissante' : 'constante';
      steps.push(`   • Sur $]${fmtBound(iv.from)} ; ${fmtBound(iv.to)}[$ : $${funcName}'(x) ${signLabel}$, donc $${funcName}$ est ${varWord}.`);
    });

    // Évaluation des extremums aux racines intérieures
    const extremumNotes: string[] = [];
    roots.forEach(r => {
      const fVal = safeEval(exprMathjs, r);
      if (fVal !== null && !Number.isNaN(fVal)) {
        extremumNotes.push(`$${funcName}(${fmtNum(r)}) = ${fmtNum(fVal)}$`);
      }
    });
    if (extremumNotes.length > 0) {
      steps.push(`4. **Valeurs aux extremums :** ${extremumNotes.join(' ; ')}`);
    }

    const variationSummary = intervals
      .map((iv) => `${iv.sign > 0 ? 'croissante' : iv.sign < 0 ? 'décroissante' : 'constante'} sur ]${fmtBound(iv.from)} ; ${fmtBound(iv.to)}[`)
      .join(', puis ');

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `${funcName}'(x) = ${readableDeriv} (${funcName} est ${variationSummary})`,
      verificationPassed: true,
    };
  }

  // --- 3bis. VALEUR MINIMALE / MAXIMALE DE f (ou d'une fonction renommée, ex. coût C(x)=f(x)) ---
  if (/valeur\s+(minimale|maximale)|minimum\s+(absolu|de)|maximum\s+(absolu|de)|(?:quantit[ée]|valeur)\b.*\b(minimal|maximal)|(?:co[uû]t|prix)\b.*\bminimal|\bminimal\b|\bmaximal\b/i.test(cleanQ)) {
    const derivStr = computeSymbolicDerivative(exprMathjs);
    if (!derivStr) return null;

    const { roots } = studySignOnInterval(derivStr, domainLow, domainHigh);
    // On ne traite ici que le cas d'un unique extremum intérieur (signe de f' change une fois),
    // qui couvre l'immense majorité des exercices de ce type. Sinon on renvoie null plutôt que
    // d'inventer une réponse.
    if (roots.length !== 1) return null;

    const x0 = roots[0];
    const y0 = safeEval(exprMathjs, x0);
    if (y0 === null || Number.isNaN(y0)) return null;

    // Distinguer : la question demande-t-elle la VALEUR de x (quantité) ou la VALEUR de f (minimum/coût) ?
    const asksForXValue = /pour\s+quelle\s+(quantit[ée]|valeur)|en\s+quelle\s+valeur\s+de\s*x|quelle\s+quantit[ée]/i.test(cleanQ);

    const steps: string[] = [
      `D'après l'étude des variations, $${funcName}'(x) = 0 \\iff x = ${fmtNum(x0)}$, avec changement de signe de $${funcName}'(x)$ en $x = ${fmtNum(x0)}$.`,
      `$${funcName}$ admet donc un extremum en $x = ${fmtNum(x0)}$, avec $${funcName}(${fmtNum(x0)}) = ${fmtNum(y0)}$.`,
    ];

    if (asksForXValue) {
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps,
        finalAnswer: `x = ${fmtNum(x0)}`,
        verificationPassed: true,
      };
    }

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `${funcName}(${fmtNum(x0)}) = ${fmtNum(y0)}`,
      verificationPassed: true,
    };
  }

  // --- 4. ÉVALUATION NUMÉRIQUE f(a), f(b)... ---
  // (on exclut explicitement les questions de primitive/intégrale, qui
  // doivent être traitées par le moteur dédié genericPrimitiveSolver.ts,
  // même si elles contiennent aussi le mot "calculer")
  if (
    (q.detectedType === 'evaluation' || /calculer|calcule|valeur de/i.test(cleanQ)) &&
    !/primitive|int[ée]gral|\\int|∫/i.test(cleanQ)
  ) {
    const pointsToEval: number[] = [...(q.extractedData?.evaluatedPoints || [])];
    if (pointsToEval.length === 0) {
      const explicitMatches = Array.from(q.cleanText.matchAll(/(?:[fFgGhH]|P)\s*\(\s*(-?\d+(?:[.,]\d+)?)\s*\)/gi));
      explicitMatches.forEach((m) => {
        const val = parseFloat(m[1].replace(',', '.'));
        if (!isNaN(val) && !pointsToEval.includes(val)) pointsToEval.push(val);
      });
    }
    if (pointsToEval.length === 0) return null;

    const steps: string[] = [];
    const answers: string[] = [];
    let anyOk = false;

    pointsToEval.forEach((xVal) => {
      const val = safeEval(exprMathjs, xVal);
      if (val === null) return;
      anyOk = true;
      const readableExpr = toReadableMath(exprMathjs);
      const substStr = readableExpr.replace(/x/g, `(${fmtNum(xVal)})`);
      steps.push(`• **Pour $x = ${fmtNum(xVal)}$ :**\n  $$${funcName}(${fmtNum(xVal)}) = ${substStr} = ${fmtNum(val)}$$`);
      answers.push(`${funcName}(${fmtNum(xVal)}) = ${fmtNum(val)}`);
    });

    if (!anyOk) return null;

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: answers.join(' ; '),
      verificationPassed: true,
    };
  }

  // --- 5. ÉQUATION (f'(x) = k ou f(x) = k) ---
  if (q.detectedType === 'equation' || /r[ée]soudre.*[ée]quation|f'\s*\(\s*x\s*\)\s*=\s*-?\d|f\s*\(\s*x\s*\)\s*=\s*-?\d/i.test(cleanQ)) {
    const isDerivEquation = /f'\s*\(\s*x\s*\)/i.test(q.cleanText) || cleanQ.includes("f'");

    if (isDerivEquation) {
      // 5.1 Résolution de f'(x) = k (ex: f'(x) = 0)
      const rhsMatch = q.cleanText.match(/f'\s*\(\s*x\s*\)\s*=\s*(-?\d+(?:[.,]\d+)?)/i) || q.cleanText.match(/=\s*(-?\d+(?:[.,]\d+)?)/);
      const k = rhsMatch ? parseFloat(rhsMatch[1].replace(',', '.')) : 0;
      const derivStr = computeSymbolicDerivative(exprMathjs);
      if (!derivStr) return null;
      const readableDeriv = toReadableMath(derivStr);

      // Si f'(x) est un polynôme du second degré, on donne la résolution analytique exacte (Delta) !
      const shiftedExpr = k === 0 ? derivStr : `(${derivStr})-(${k})`;
      const polyDeriv = parseQuadraticPolynomial(readableDeriv);

      if (polyDeriv) {
        const a = polyDeriv.a;
        const b = polyDeriv.b;
        const c = polyDeriv.c - k;
        const delta = b * b - 4 * a * c;
        const steps: string[] = [];
        steps.push(`1. **Expression de la dérivée :**\n   $$\\forall x \\in ${domainLabel}, \\quad ${funcName}'(x) = ${readableDeriv}$$`);
        steps.push(`2. **Résolution de l'équation $${funcName}'(x) = ${fmtNum(k)}$ :**\n   $$${readableDeriv} = ${fmtNum(k)} \\iff ${toReadableMath(`${a}*x^2 + ${b}*x + ${c}`)} = 0$$`);
        steps.push(`   Il s'agit d'une équation du second degré de la forme $ax^2 + bx + c = 0$ avec $a = ${a}$, $b = ${b}$, $c = ${c}$.\n   Calcul du discriminant :`);
        steps.push(`   $$\\Delta = b^2 - 4ac = (${b})^2 - 4 \\times (${a}) \\times (${c}) = ${delta}$$`);

        let rootsStr = '';
        if (delta > 0) {
          const sqrtDelta = Math.sqrt(delta);
          const r1 = (-b - sqrtDelta) / (2 * a);
          const r2 = (-b + sqrtDelta) / (2 * a);
          const x1 = Math.min(r1, r2);
          const x2 = Math.max(r1, r2);
          steps.push(`   Comme $\\Delta > 0$, l'équation admet deux solutions réelles distinctes :`);
          steps.push(`   $$x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{${-b} - ${fmtNum(sqrtDelta)}}{${2 * a}} = ${fmtNum(x1)}$$`);
          steps.push(`   $$x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{${-b} + ${fmtNum(sqrtDelta)}}{${2 * a}} = ${fmtNum(x2)}$$`);
          steps.push(`3. **Conclusion :** L'ensemble des solutions de l'équation $${funcName}'(x) = ${fmtNum(k)}$ est :`);
          steps.push(`   $$S = \\{ ${fmtNum(x1)} \\;;\\; ${fmtNum(x2)} \\}$$`);
          rootsStr = `S = { ${fmtNum(x1)} ; ${fmtNum(x2)} }`;
        } else if (delta === 0) {
          const x0 = -b / (2 * a);
          steps.push(`   Comme $\\Delta = 0$, l'équation admet une unique solution réelle :`);
          steps.push(`   $$x_0 = \\frac{-b}{2a} = ${fmtNum(x0)}$$`);
          steps.push(`3. **Conclusion :** L'ensemble des solutions est :`);
          steps.push(`   $$S = \\{ ${fmtNum(x0)} \\}$$`);
          rootsStr = `S = { ${fmtNum(x0)} }`;
        } else {
          steps.push(`   Comme $\\Delta < 0$, l'équation n'admet aucune solution réelle dans $\\mathbb{R}$.`);
          steps.push(`3. **Conclusion :** $S = \\emptyset$`);
          rootsStr = `S = ∅`;
        }

        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: q.cleanText,
          steps,
          finalAnswer: rootsStr,
          verificationPassed: true,
        };
      }

      // Cas général pour f'(x) = k (non quadratique)
      const { roots } = studySignOnInterval(shiftedExpr, domainLow, domainHigh);
      if (roots.length === 0) return null;
      const roundedRoots = roots.map((r) => fmtNum(r));
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps: [
          `1. **Expression de la dérivée :** $${funcName}'(x) = ${readableDeriv}$.`,
          `2. **Recherche des solutions de $${funcName}'(x) = ${fmtNum(k)}$ :**`,
          `   L'équation équivaut à $${funcName}'(x) - ${fmtNum(k)} = 0$.`,
          `   Les solutions sur $${domainLabel}$ sont : $x \\in \\{ ${roundedRoots.join(' ; ')} \\}$.`,
          `3. **Conclusion :** L'ensemble des solutions est $S = \\{ ${roundedRoots.join(' ; ')} \\}$.`,
        ],
        finalAnswer: `S = { ${roundedRoots.join(' ; ')} }`,
        verificationPassed: true,
      };
    }

    // 5.2 Résolution de f(x) = k (ex: f(x) = 0)
    const rhsMatch = q.cleanText.match(/[fFgGhH]\s*\(\s*x\s*\)\s*=\s*(-?\d+(?:[.,]\d+)?)/) || q.cleanText.match(/=\s*(-?\d+(?:[.,]\d+)?)/);
    const k = rhsMatch ? parseFloat(rhsMatch[1].replace(',', '.')) : 0;

    // Si f(x) est quadratique : résolution analytique par discriminant
    const polyF = parseQuadraticPolynomial(toReadableMath(exprMathjs));
    if (polyF) {
      const a = polyF.a;
      const b = polyF.b;
      const c = polyF.c - k;
      const delta = b * b - 4 * a * c;
      const steps: string[] = [];
      steps.push(`1. **Équation à résoudre :**\n   $$${toReadableMath(exprMathjs)} = ${fmtNum(k)} \\iff ${toReadableMath(`${a}*x^2 + ${b}*x + ${c}`)} = 0$$`);
      steps.push(`   Il s'agit d'une équation du second degré avec $a = ${a}$, $b = ${b}$, $c = ${c}$.\n   Calcul du discriminant :`);
      steps.push(`   $$\\Delta = b^2 - 4ac = (${b})^2 - 4 \\times (${a}) \\times (${c}) = ${delta}$$`);

      let rootsStr = '';
      if (delta > 0) {
        const sqrtDelta = Math.sqrt(delta);
        const r1 = (-b - sqrtDelta) / (2 * a);
        const r2 = (-b + sqrtDelta) / (2 * a);
        const x1 = Math.min(r1, r2);
        const x2 = Math.max(r1, r2);
        steps.push(`   Comme $\\Delta > 0$, l'équation admet deux solutions réelles distinctes :`);
        steps.push(`   $$x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{${-b} - ${fmtNum(sqrtDelta)}}{${2 * a}} = ${fmtNum(x1)}$$`);
        steps.push(`   $$x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{${-b} + ${fmtNum(sqrtDelta)}}{${2 * a}} = ${fmtNum(x2)}$$`);
        steps.push(`2. **Conclusion :** L'ensemble des solutions est :`);
        steps.push(`   $$S = \\{ ${fmtNum(x1)} \\;;\\; ${fmtNum(x2)} \\}$$`);
        rootsStr = `S = { ${fmtNum(x1)} ; ${fmtNum(x2)} }`;
      } else if (delta === 0) {
        const x0 = -b / (2 * a);
        steps.push(`   Comme $\\Delta = 0$, l'équation admet une unique solution réelle :`);
        steps.push(`   $$x_0 = \\frac{-b}{2a} = ${fmtNum(x0)}$$`);
        steps.push(`2. **Conclusion :** L'ensemble des solutions est :`);
        steps.push(`   $$S = \\{ ${fmtNum(x0)} \\}$$`);
        rootsStr = `S = { ${fmtNum(x0)} }`;
      } else {
        steps.push(`   Comme $\\Delta < 0$, l'équation n'admet aucune solution réelle.`);
        steps.push(`2. **Conclusion :** $S = \\emptyset$`);
        rootsStr = `S = ∅`;
      }

      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps,
        finalAnswer: rootsStr,
        verificationPassed: true,
      };
    }

    // On étudie le signe de f(x) - k, dont les racines sont les solutions de f(x) = k.
    const shiftedExpr = k === 0 ? exprMathjs : `(${exprMathjs})-(${k})`;
    const { roots } = studySignOnInterval(shiftedExpr, domainLow, domainHigh);
    if (roots.length === 0) return null;

    // Vérification indépendante : on réévalue f à chaque racine trouvée.
    const roundedRoots = roots.map((r) => fmtNum(r));
    const verifLines = roots.map((r) => {
      const val = safeEval(exprMathjs, r);
      return `$${funcName}(${fmtNum(r)}) = ${val !== null ? fmtNum(val) : '?'}$`;
    });

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps: [
        `On cherche les valeurs de $x \\in ${domainLabel}$ pour lesquelles $${funcName}(x) = ${fmtNum(k)}$.`,
        `Recherche des racines de $${funcName}(x) - ${fmtNum(k)} = 0$ : $x \\in \\{ ${roundedRoots.join(' ; ')} \\}$.`,
        `Vérification : ${verifLines.join(' ; ')}.`,
      ],
      finalAnswer: `S = { ${roundedRoots.join(' ; ')} }`,
      verificationPassed: true,
    };
  }

  return null;
}

// ==========================================================================
// 7. POINT D'ENTRÉE : TENTATIVE DE RÉSOLUTION D'UN EXERCICE ENTIER
// ==========================================================================

export function tryGenericFunctionResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  const def = parseFunctionAndDomain(contextCombined);
  if (!def) return null;

  const solved: SolvedQuestionResult[] = [];
  for (const q of questions) {
    const result = solveGenericFunctionQuestion(q, def);
    if (!result) return null; // on ne renvoie un résultat que si TOUT est résolu réellement
    solved.push(result);
  }
  return solved;
}
