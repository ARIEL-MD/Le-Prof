import * as math from 'mathjs';
import { ParsedQuestion, SolvedQuestionResult } from './types';
import { formatPapaMethodSteps } from './universalPapaMethodSolver';

/**
 * Nettoie une chaîne pour extraire une expression arithmétique calculable.
 */
export function extractArithmeticExpression(text: string): string | null {
  if (!text) return null;
  let s = text.trim();

  // Enlever les préfixes du type "Calculer :", "Calcule", "Combien font", "Évaluer :"
  s = s.replace(/^(?:calculer|calcule|combien\s+font|combien\s+vaut|déterminer|donner\s+la\s+valeur\s+de|effectuer|résoudre|soit)\s*[:=]?\s*/i, '');
  
  // Enlever les points d'interrogation ou les "= ?"
  s = s.replace(/\s*=\s*\?*\s*$/, '');
  s = s.replace(/\s*\?\s*$/, '');

  // Normaliser les symboles d'opération
  s = s
    .replace(/[×✕]/g, '*')
    .replace(/[÷]/g, '/')
    .replace(/[−–—]/g, '-')
    .replace(/\^/g, '^');

  // Si l'entrée est sur plusieurs lignes (ex: "1\n+\n1\n1+1" ou "1\n+\n1")
  // On teste d'abord la dernière ligne non vide si elle forme une expression complète
  const lines = s.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length > 1) {
    // Si la dernière ligne est une expression valide (comme "1+1")
    const lastLine = lines[lines.length - 1];
    if (isValidArithmeticString(lastLine)) {
      return lastLine;
    }
    // Sinon joindre les lignes avec un espace pour "1 + 1"
    const joined = lines.join(' ');
    if (isValidArithmeticString(joined)) {
      return joined;
    }
  }

  return isValidArithmeticString(s) ? s : null;
}


type Rational = { n: bigint; d: bigint };

function bgcd(a: bigint, b: bigint): bigint {
  let x = a < 0n ? -a : a;
  let y = b < 0n ? -b : b;
  while (y !== 0n) { const t = x % y; x = y; y = t; }
  return x || 1n;
}

function normalizeRational(r: Rational): Rational {
  if (r.d === 0n) throw new Error('division by zero');
  const sign = r.d < 0n ? -1n : 1n;
  const n = r.n * sign;
  const d = r.d * sign;
  const g = bgcd(n, d);
  return { n: n / g, d: d / g };
}

function decimalToRational(value: number): Rational {
  if (!Number.isFinite(value)) throw new Error('non-finite');
  const s = String(value);
  if (!/[eE]/.test(s)) {
    const [whole, frac = ''] = s.split('.');
    const scale = 10n ** BigInt(frac.length);
    return normalizeRational({ n: BigInt(`${whole}${frac}`), d: scale });
  }
  const [mantissa, exponentRaw] = s.toLowerCase().split('e');
  const exponent = Number(exponentRaw);
  const base = decimalToRational(Number(mantissa));
  if (exponent >= 0) return normalizeRational({ n: base.n * 10n ** BigInt(exponent), d: base.d });
  return normalizeRational({ n: base.n, d: base.d * 10n ** BigInt(-exponent) });
}

function exactRationalFromNode(node: any): Rational | null {
  if (!node) return null;
  if (node.type === 'ParenthesisNode') return exactRationalFromNode(node.content);
  if (node.type === 'ConstantNode' && typeof node.value === 'number') return decimalToRational(node.value);
  if (node.type !== 'OperatorNode') return null;

  if (node.op === 'unaryMinus' || node.fn === 'unaryMinus') {
    const a = exactRationalFromNode(node.args?.[0]);
    return a ? { n: -a.n, d: a.d } : null;
  }

  const a = exactRationalFromNode(node.args?.[0]);
  const b = exactRationalFromNode(node.args?.[1]);
  if (!a || !b) return null;

  switch (node.op) {
    case '+': return normalizeRational({ n: a.n * b.d + b.n * a.d, d: a.d * b.d });
    case '-': return normalizeRational({ n: a.n * b.d - b.n * a.d, d: a.d * b.d });
    case '*': return normalizeRational({ n: a.n * b.n, d: a.d * b.d });
    case '/': return normalizeRational({ n: a.n * b.d, d: a.d * b.n });
    case '^': {
      if (b.d !== 1n) return null;
      const exponent = Number(b.n);
      if (!Number.isSafeInteger(exponent) || Math.abs(exponent) > 100) return null;
      if (exponent >= 0) return normalizeRational({ n: a.n ** BigInt(exponent), d: a.d ** BigInt(exponent) });
      if (a.n === 0n) return null;
      return normalizeRational({ n: a.d ** BigInt(-exponent), d: a.n ** BigInt(-exponent) });
    }
    default: return null;
  }
}

function exactRationalExpression(expr: string): Rational | null {
  try {
    const node = math.parse(expr);
    return exactRationalFromNode(node);
  } catch {
    return null;
  }
}

function rationalToString(r: Rational): string {
  const x = normalizeRational(r);
  return x.d === 1n ? x.n.toString() : `\\frac{${x.n}}{${x.d}}`;
}

/**
 * Vérifie si la chaîne ressemble à une expression arithmétique / mathématique simple.
 */
function isValidArithmeticString(s: string): boolean {
  if (!s || s.length > 150) return false;
  
  // Ne doit pas contenir des phrases longues de texte français
  const words = s.split(/\s+/).filter(w => /^[a-zA-ZÀ-ÿ]{3,}$/.test(w));
  // Autoriser seulement des noms de fonctions mathématiques usuelles
  const allowedMathWords = new Set(['sqrt', 'abs', 'cos', 'sin', 'tan', 'ln', 'exp', 'log', 'pi', 'racine']);
  const nonMathWords = words.filter(w => !allowedMathWords.has(w.toLowerCase()));
  if (nonMathWords.length > 2) return false;

  // Doit comporter au moins un chiffre ou constante et un opérateur arithmétique ou fonction
  const hasDigits = /\d/.test(s);
  const hasOperators = /[+\-*/^()]/.test(s) || /sqrt|abs|cos|sin|ln|exp/i.test(s);
  
  return hasDigits && hasOperators;
}

/**
 * Convertit une expression texte en notation LaTeX propre.
 */
function toLatex(expr: string): string {
  return expr
    .replace(/\*/g, ' \\times ')
    .replace(/\//g, ' \\div ')
    .replace(/sqrt\(([^)]+)\)/g, '\\sqrt{$1}');
}

/**
 * Tente de résoudre déterministement une question arithmétique ou de calcul direct.
 */
export function tryGenericArithmeticResolutionForExercise(
  context: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  if (!questions || questions.length === 0) return null;

  const results: SolvedQuestionResult[] = [];

  for (const q of questions) {
    const raw = q.cleanText.trim();
    const expr = extractArithmeticExpression(raw) || extractArithmeticExpression(`${context} ${raw}`);

    if (!expr) return null;

    try {
      // Évaluation avec mathjs
      const mathExpr = expr
        .replace(/racine\(([^)]+)\)/gi, 'sqrt($1)')
        .replace(/racine\s+(\d+)/gi, 'sqrt($1)');

      const evaluated = math.evaluate(mathExpr);
      if (evaluated === undefined || evaluated === null) return null;

      const exact = exactRationalExpression(mathExpr);
      let resultStr: string;
      if (exact) {
        resultStr = rationalToString(exact);
      } else if (typeof evaluated === 'number') {
        if (!Number.isFinite(evaluated)) return null;
        resultStr = Number.isInteger(evaluated) ? `${evaluated}` : parseFloat(evaluated.toFixed(10)).toString();
      } else if (typeof evaluated === 'object' && 'isFraction' in evaluated) {
        resultStr = math.format(evaluated, { fraction: 'ratio' });
      } else {
        resultStr = `${evaluated}`;
      }

      // Vérification réelle : réévaluer l'expression et, pour les calculs
      // rationnels, comparer exactement les deux représentations.
      const verificationValue = math.evaluate(mathExpr);
      if (verificationValue === undefined || verificationValue === null) return null;
      if (exact && typeof verificationValue === 'number') {
        const expected = Number(exact.n) / Number(exact.d);
        if (!Number.isFinite(expected) || Math.abs(verificationValue - expected) > 1e-10) return null;
      }

      const latexExpr = toLatex(expr);
      const isSimple = !expr.includes('(') && !expr.includes('sqrt') && (expr.match(/[+\-*/]/g) || []).length === 1;

      const detailedSteps: string[] = [
        `• **Expression posée :** $${latexExpr}$`,
        `• **Calcul de l'opération :**`,
      ];

      if (expr.includes('+')) {
        detailedSteps.push(`  On effectue l'addition des termes :`);
        detailedSteps.push(`  $$${latexExpr} = ${resultStr}$$`);
      } else if (expr.includes('-')) {
        detailedSteps.push(`  On effectue la soustraction des termes :`);
        detailedSteps.push(`  $$${latexExpr} = ${resultStr}$$`);
      } else if (expr.includes('*') || expr.includes('×')) {
        detailedSteps.push(`  On effectue la multiplication des facteurs :`);
        detailedSteps.push(`  $$${latexExpr} = ${resultStr}$$`);
      } else if (expr.includes('/') || expr.includes('÷')) {
        detailedSteps.push(`  On effectue la division (quotient) :`);
        detailedSteps.push(`  $$${latexExpr} = ${resultStr}$$`);
      } else {
        detailedSteps.push(`  En appliquant les priorités opératoires :`);
        detailedSteps.push(`  $$${latexExpr} = ${resultStr}$$`);
      }

      detailedSteps.push(`• **Vérification mathématique :** l'expression a été réévaluée et le résultat est cohérent${exact ? ' avec la fraction exacte obtenue.' : '.'}`);

      const solved: SolvedQuestionResult = {
        numberLabel: q.numberLabel || '1.',
        titleOrPrompt: q.cleanText,
        steps: formatPapaMethodSteps(
          `Calculer la valeur exacte de l'expression mathématique : $${latexExpr}$.`,
          `Règles fondamentales du calcul arithmétique : respect des priorités opératoires et des propriétés des opérations dans $\\mathbb{R}$.`,
          detailedSteps,
          `${resultStr}`,
          isSimple
            ? `Ce calcul élémentaire est immédiat et constitue la base de tout calcul algébrique.`
            : `Prends soin de toujours respecter l'ordre des priorités (parenthèses, puissances, multiplications/divisions, puis additions/soustractions).`
        ),
        finalAnswer: `${resultStr}`,
        verificationPassed: true,
        matchedParsedQuestionId: q.id,
      };

      results.push(solved);
    } catch {
      return null;
    }
  }

  return results.length === questions.length ? results : null;
}
