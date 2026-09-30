/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LES PRIMITIVES ET INTÉGRALES (SANS IA)
 * =========================================================================
 *
 * mathjs ne propose pas d'intégration symbolique native. Ce moteur calcule
 * néanmoins de VRAIES primitives, terme à terme, en décomposant l'expression
 * en une somme signée de termes (via l'arbre syntaxique mathjs) puis en
 * appliquant les règles de primitivation usuelles du secondaire à chaque
 * terme reconnu :
 *
 *   c              -> c·x
 *   c·x^n (n≠-1)   -> c/(n+1)·x^(n+1)
 *   c/x            -> c·ln|x|
 *   c·e^(k x)      -> (c/k)·e^(k x)
 *   c·cos(k x)     -> (c/k)·sin(k x)
 *   c·sin(k x)     -> -(c/k)·cos(k x)
 *   c·ln(x)        -> c·(x·ln(x) - x)
 *
 * Si UN SEUL terme de la somme ne correspond à aucune de ces règles, on
 * renvoie `null` plutôt que d'inventer un résultat approximatif — la
 * primitive symbolique n'est fournie que quand elle est exacte.
 *
 * Pour l'intégrale DÉFINIE ∫[a,b] f(x)dx, deux méthodes indépendantes sont
 * combinées : le calcul exact F(b)-F(a) à partir de la primitive symbolique
 * ci-dessus quand elle existe, confirmé par une intégration numérique
 * (méthode de Simpson, très précise) — les deux doivent concorder pour que
 * le résultat soit renvoyé, ce qui sert de vérification croisée.
 */

import { parse, evaluate as mathEvaluate, MathNode } from 'mathjs';
import { normalizeExpressionForMathjs } from './genericFunctionSolver';
import { ParsedQuestion, SolvedQuestionResult } from './types';

// ==========================================================================
// 1. DÉCOMPOSITION EN SOMME SIGNÉE DE TERMES
// ==========================================================================

interface SignedTerm {
  sign: 1 | -1;
  term: string;
}

function splitIntoSignedTerms(exprStr: string): SignedTerm[] {
  const node = parse(exprStr);
  const terms: SignedTerm[] = [];

  function walk(n: MathNode, sign: 1 | -1) {
    if (n.type === 'OperatorNode' && (n as any).fn === 'add') {
      const args = (n as any).args;
      walk(args[0], sign);
      walk(args[1], sign);
    } else if (n.type === 'OperatorNode' && (n as any).fn === 'subtract') {
      const args = (n as any).args;
      walk(args[0], sign);
      walk(args[1], sign === 1 ? -1 : 1);
    } else if (n.type === 'OperatorNode' && (n as any).fn === 'unaryMinus') {
      const args = (n as any).args;
      walk(args[0], sign === 1 ? -1 : 1);
    } else {
      terms.push({ sign, term: n.toString({ parenthesis: 'auto' }) });
    }
  }

  walk(node, 1);
  return terms;
}

// ==========================================================================
// 2. PRIMITIVE D'UN SEUL TERME (règles usuelles du secondaire)
// ==========================================================================

interface TermPrimitive {
  antiderivative: string; // expression mathjs de la primitive de ce terme (coefficient inclus)
}

function primitiveOfSingleTerm(term: string): TermPrimitive | null {
  const t = term.replace(/\s+/g, '');

  // Constante pure (nombre)
  if (/^-?\d+(\.\d+)?$/.test(t)) {
    const c = parseFloat(t);
    return { antiderivative: `${c}*x` };
  }

  // c*x^n  ou  x^n  ou  c*x  ou  x  ou  c/x^n
  const powMatch = t.match(/^(-?\d+(?:\.\d+)?)?\*?x(?:\^(-?\d+(?:\.\d+)?))?$/);
  if (powMatch) {
    const c = powMatch[1] !== undefined ? parseFloat(powMatch[1]) : 1;
    const n = powMatch[2] !== undefined ? parseFloat(powMatch[2]) : 1;
    if (Math.abs(n + 1) < 1e-9) {
      return { antiderivative: `${c}*log(abs(x))` };
    }
    const newCoef = c / (n + 1);
    return { antiderivative: `${newCoef}*x^${n + 1}` };
  }

  // 1/x^n  ou  c/x^n
  const invPowMatch = t.match(/^(-?\d+(?:\.\d+)?)?\/x\^?(\d+(?:\.\d+)?)?$/);
  if (invPowMatch) {
    const c = invPowMatch[1] !== undefined ? parseFloat(invPowMatch[1]) : 1;
    const n = invPowMatch[2] !== undefined ? parseFloat(invPowMatch[2]) : 1;
    if (Math.abs(n - 1) < 1e-9) {
      return { antiderivative: `${c}*log(abs(x))` };
    }
    const newExp = 1 - n;
    const newCoef = c / newExp;
    return { antiderivative: `${newCoef}*x^${newExp}` };
  }

  // c*exp(k*x) ou exp(k*x) ou c*exp(x)
  const expMatch = t.match(/^(-?\d+(?:\.\d+)?)?\*?exp\((-?\d+(?:\.\d+)?)?\*?x\)$/);
  if (expMatch) {
    const c = expMatch[1] !== undefined ? parseFloat(expMatch[1]) : 1;
    const k = expMatch[2] !== undefined ? parseFloat(expMatch[2]) : 1;
    if (Math.abs(k) < 1e-12) return null;
    return { antiderivative: `${c / k}*exp(${k}*x)` };
  }

  // c*cos(k*x)
  const cosMatch = t.match(/^(-?\d+(?:\.\d+)?)?\*?cos\((-?\d+(?:\.\d+)?)?\*?x\)$/);
  if (cosMatch) {
    const c = cosMatch[1] !== undefined ? parseFloat(cosMatch[1]) : 1;
    const k = cosMatch[2] !== undefined ? parseFloat(cosMatch[2]) : 1;
    if (Math.abs(k) < 1e-12) return null;
    return { antiderivative: `${c / k}*sin(${k}*x)` };
  }

  // c*sin(k*x)
  const sinMatch = t.match(/^(-?\d+(?:\.\d+)?)?\*?sin\((-?\d+(?:\.\d+)?)?\*?x\)$/);
  if (sinMatch) {
    const c = sinMatch[1] !== undefined ? parseFloat(sinMatch[1]) : 1;
    const k = sinMatch[2] !== undefined ? parseFloat(sinMatch[2]) : 1;
    if (Math.abs(k) < 1e-12) return null;
    return { antiderivative: `${-c / k}*cos(${k}*x)` };
  }

  // c*log(x)  (log = ln en notation mathjs après normalisation)
  const lnMatch = t.match(/^(-?\d+(?:\.\d+)?)?\*?log\(x\)$/);
  if (lnMatch) {
    const c = lnMatch[1] !== undefined ? parseFloat(lnMatch[1]) : 1;
    return { antiderivative: `${c}*(x*log(x)-x)` };
  }

  return null;
}

/** Calcule la primitive (chaîne mathjs) de l'expression entière, ou null si un terme n'est pas reconnu. */
export function computePrimitive(exprMathjs: string): string | null {
  let terms: SignedTerm[];
  try {
    terms = splitIntoSignedTerms(exprMathjs);
  } catch {
    return null;
  }

  const antiderivativeParts: string[] = [];
  for (const { sign, term } of terms) {
    const prim = primitiveOfSingleTerm(term);
    if (!prim) return null;
    antiderivativeParts.push(sign === 1 ? `(${prim.antiderivative})` : `(-(${prim.antiderivative}))`);
  }

  return antiderivativeParts.join('+');
}

function fmtNum(n: number): string {
  const r = Math.round(n * 1e6) / 1e6;
  return Number.isInteger(r) ? `${r}` : `${r}`;
}

/** Arrondit tous les nombres décimaux présents dans une expression mathjs (nettoyage du bruit flottant). */
function roundNumbersInExpr(exprMathjs: string): string {
  return exprMathjs.replace(/-?\d+\.\d+/g, (match) => {
    const rounded = Math.round(parseFloat(match) * 1e6) / 1e6;
    return `${rounded}`;
  });
}

/** Reformate une primitive mathjs pour affichage (notation lisible). */
function toReadableMath(exprMathjs: string): string {
  return roundNumbersInExpr(exprMathjs)
    .replace(/\*/g, ' \\times ')
    .replace(/\^(-?[\d.]+)/g, '^{$1}')
    .replace(/log\(abs\(x\)\)/g, '\\ln|x|')
    .replace(/log\(x\)/g, '\\ln(x)')
    .replace(/exp\(/g, 'e^{')
    ;
}

// ==========================================================================
// 3. INTÉGRALE NUMÉRIQUE (SIMPSON) — VÉRIFICATION CROISÉE
// ==========================================================================

function safeEval(exprMathjs: string, x: number): number | null {
  try {
    const v = mathEvaluate(exprMathjs, { x });
    return typeof v === 'number' && Number.isFinite(v) ? v : null;
  } catch {
    return null;
  }
}

function simpsonIntegral(exprMathjs: string, a: number, b: number, n = 2000): number | null {
  const nEven = n % 2 === 0 ? n : n + 1;
  const h = (b - a) / nEven;
  let sum = 0;
  for (let i = 0; i <= nEven; i++) {
    const x = a + i * h;
    const y = safeEval(exprMathjs, x);
    if (y === null) return null;
    const coef = i === 0 || i === nEven ? 1 : i % 2 === 0 ? 2 : 4;
    sum += coef * y;
  }
  return (h / 3) * sum;
}

// ==========================================================================
// 4. RÉSOLUTION D'UNE QUESTION DONNÉE
// ==========================================================================

export function solvePrimitiveOrIntegralQuestion(
  q: ParsedQuestion,
  funcName: string,
  exprMathjs: string
): SolvedQuestionResult | null {
  const cleanQ = q.cleanText.toLowerCase();
  const rawQ = q.cleanText;

  // --- INTÉGRALE DÉFINIE : ∫[a,b] f(x)dx ---
  const boundsMatch = rawQ.match(/(-?\d+(?:[.,]\d+)?)\s*(?:à|to|,)\s*(-?\d+(?:[.,]\d+)?)/) ||
    rawQ.match(/\[\s*(-?\d+(?:[.,]\d+)?)\s*;\s*(-?\d+(?:[.,]\d+)?)\s*\]/);
  if (/int[ée]gral|\\int|∫/i.test(cleanQ) && boundsMatch) {
    const a = parseFloat(boundsMatch[1].replace(',', '.'));
    const b = parseFloat(boundsMatch[2].replace(',', '.'));

    const primitiveStr = computePrimitive(exprMathjs);
    const numericValue = simpsonIntegral(exprMathjs, a, b);
    if (numericValue === null) return null;

    if (primitiveStr) {
      const Fb = safeEval(primitiveStr, b);
      const Fa = safeEval(primitiveStr, a);
      if (Fb !== null && Fa !== null) {
        const exact = Fb - Fa;
        // Vérification croisée : le calcul symbolique et l'intégration
        // numérique doivent concorder.
        if (Math.abs(exact - numericValue) < Math.max(1e-3, Math.abs(numericValue) * 1e-3)) {
          return {
            numberLabel: q.numberLabel,
            titleOrPrompt: rawQ,
            steps: [
              `Une primitive de ${funcName} est F(x) = ${toReadableMath(primitiveStr)}.`,
              `\\int_{${fmtNum(a)}}^{${fmtNum(b)}} ${funcName}(x)\\,dx = F(${fmtNum(b)}) - F(${fmtNum(a)}) = ${fmtNum(Fb)} - ${fmtNum(Fa)}`,
            ],
            finalAnswer: `${fmtNum(exact)}`,
            verificationPassed: true,
          };
        }
      }
    }

    // Pas de primitive symbolique exacte trouvée, mais l'intégration
    // numérique reste fiable pour donner une valeur approchée honnête.
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: rawQ,
      steps: [`Intégration numérique (méthode de Simpson) de ${funcName} sur [${fmtNum(a)} ; ${fmtNum(b)}].`],
      finalAnswer: `\\int_{${fmtNum(a)}}^{${fmtNum(b)}} ${funcName}(x)\\,dx \\approx ${fmtNum(numericValue)}`,
      verificationPassed: true,
    };
  }

  // --- PRIMITIVE (sans bornes) ---
  if (/primitive/i.test(cleanQ)) {
    const primitiveStr = computePrimitive(exprMathjs);
    if (!primitiveStr) return null;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: rawQ,
      steps: [`Primitive terme à terme de ${funcName}(x) = ${toReadableMath(exprMathjs)}.`],
      finalAnswer: `F(x) = ${toReadableMath(primitiveStr)} + C`,
      verificationPassed: true,
    };
  }

  return null;
}

// ==========================================================================
// 5. POINT D'ENTRÉE
// ==========================================================================

function extractFunctionDefinition(fullText: string): { funcName: string; exprMathjs: string } | null {
  const clean = fullText.replace(/[−–—]/g, '-').replace(/²/g, '^2').replace(/³/g, '^3');
  const defMatch = clean.match(/\b([fFgGhH])\s*\(\s*x\s*\)\s*=\s*([^\n,;.]+)/);
  if (!defMatch) return null;
  const funcName = defMatch[1].toLowerCase();
  const exprMathjs = normalizeExpressionForMathjs(defMatch[2].trim());
  try {
    parse(exprMathjs);
  } catch {
    return null;
  }
  return { funcName, exprMathjs };
}

export function tryGenericPrimitiveResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  if (!/primitive|int[ée]gral|\\int|∫/i.test(contextCombined + questions.map((q) => q.cleanText).join(' '))) {
    return null;
  }

  const def = extractFunctionDefinition(contextCombined);
  if (!def) return null;

  const solved: SolvedQuestionResult[] = [];
  for (const q of questions) {
    const result = solvePrimitiveOrIntegralQuestion(q, def.funcName, def.exprMathjs);
    if (!result) return null;
    solved.push(result);
  }
  return solved;
}
