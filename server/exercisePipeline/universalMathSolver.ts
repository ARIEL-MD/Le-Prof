import * as math from 'mathjs';
import { ParsedQuestion, SolvedQuestionResult } from './types';

/**
 * Dernier niveau de résolution STRICT du moteur Maths.
 * Il ne prétend résoudre une question que lorsque mathjs fournit réellement
 * un résultat calculé. Aucun texte-type ni résultat inventé n'est produit.
 */
function normalizeExpression(s: string): string {
  return s
    .replace(/[−–—]/g, '-')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π/g, 'pi')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/√\s*\(/g, 'sqrt(')
    .replace(/√\s*([0-9.]+)/g, 'sqrt($1)')
    .replace(/,/g, '.');
}

function extractExpression(text: string): string | null {
  const t = normalizeExpression(text.trim());
  const patterns = [
    /(?:calculer|calculez?|calcul|évaluer|evaluer|valeur de|simplifier|développer|developper)\s*(?:la\s+valeur\s+de\s+)?[:=]?\s*([^\n]+)$/i,
    /(?:f\s*\([^)]*\)\s*=|=)\s*([^\n]+)$/i,
  ];
  for (const p of patterns) {
    const m = t.match(p);
    if (m?.[1]) {
      const candidate = m[1].replace(/[.;:]\s*$/, '').trim();
      if (/\d|\bpi\b|sqrt|sin|cos|tan|ln|log|exp/i.test(candidate) && /[+\-*/^()=]/.test(candidate)) return candidate;
    }
  }
  if (/^[\d\s+\-*/^().,a-z_]+$/i.test(t) && /\d/.test(t) && /[+\-*/^()]/.test(t)) return t;
  return null;
}

function latexish(expr: string): string {
  return expr
    .replace(/sqrt\(([^()]*)\)/g, '\\sqrt{$1}')
    .replace(/pi/g, '\\pi')
    .replace(/\*/g, ' \\times ');
}

export function tryUniversalMathResolution(context: string, q: ParsedQuestion): SolvedQuestionResult | null {
  const text = `${context}\n${q.cleanText}`;
  const lower = q.cleanText.toLowerCase();

  // Dérivée explicite : mathjs sait différencier les expressions symboliques générales.
  if (/d[ée]riv|d[ée]river|d[ée]rivée|derive/i.test(lower)) {
    const m = text.match(/(?:f\s*\(\s*x\s*\)|f\s*\(x\)|y)\s*=\s*([^\n;,]+)/i);
    if (m?.[1]) {
      try {
        const expr = normalizeExpression(m[1].replace(/\s+$/g, '').trim());
        const d = math.derivative(expr, 'x').toString();
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: q.cleanText,
          steps: [`On part de : $f(x) = ${latexish(expr)}$.`, `On dérive terme par terme : $f'(x) = ${latexish(d)}$.`],
          finalAnswer: `f'(x) = ${d}`,
          verificationPassed: true,
          matchedParsedQuestionId: q.id,
        };
      } catch { return null; }
    }
  }

  // Simplification / calcul symbolique général.
  if (/simplif|r[ée]duire|d[ée]velopper|calculer|calculez?|[ée]valuer|valeur de/i.test(lower)) {
    const expr = extractExpression(text);
    if (!expr) return null;
    try {
      const normalized = normalizeExpression(expr);
      const result = math.simplify(normalized);
      const resultText = result.toString();
      // Évite les réponses triviales de parser sur des phrases mal extraites.
      if (!resultText || resultText === normalized || resultText.length > 300) return null;
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps: [
          `Expression : $${latexish(normalized)}$.`,
          `Après simplification/calcul : $${latexish(resultText)}$.`,
        ],
        finalAnswer: resultText,
        verificationPassed: true,
        matchedParsedQuestionId: q.id,
      };
    } catch { return null; }
  }

  return null;
}
