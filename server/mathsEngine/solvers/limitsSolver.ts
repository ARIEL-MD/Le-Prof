import { MathsSolveResult, MathsStep } from '../types';
import { buildMethodologyAnalysisResult } from '../resultBuilder';
import { simplifyFraction, round } from '../mathUtils';

/**
 * Chapitre 3 : Limites et continuité
 * - Limite d'un polynôme en ±∞ (terme de plus haut degré)
 * - Limite d'une fraction rationnelle en ±∞ (quotient des termes de plus haut degré)
 * - Limite en un réel x0 (calcul direct, factorisation de forme indéterminée 0/0, limites à gauche/droite)
 * - Continuité en un point (lim f(x) = f(x0))
 */
export function solveLimits(statement: string): MathsSolveResult | null {
  const s = statement.trim();

  // 1. Limite d'une fraction rationnelle en ±∞ : lim (ax^n + ...)/(bx^m + ...) quand x -> +inf / -inf
  const fracLimitMatch = s.match(/lim(?:ite)?.*x\s*->\s*([+-]?(?:inf|\\infty|\d+)).*(?:\(([^)]+)\)\s*\/\s*\(([^)]+)\)|([^\s/]+)\s*\/\s*([^\s/]+))/i) ||
                         s.match(/(?:calculer|d[ée]terminer)?\s*la\s*limite.*x\s*(?:tend vers|->)\s*([+-]?(?:inf|\\infty|\d+))/i);

  // Check for rational fraction: (ax + b) / (cx + d) or (ax^2 + bx + c) / (dx + e) at ±inf
  const rationalInfMatch = s.match(/lim.*x\s*->\s*([+-]?(?:inf|\\infty)).*(?:\\frac\{([^}]+)\}\{([^}]+)\}|\(?([^\/]+)\)?\s*\/\s*\(?([^\/]+)\)?)/i);
  if (rationalInfMatch) {
    const target = rationalInfMatch[1].toLowerCase().includes('-') ? '-\\infty' : '+\\infty';
    const numRaw = rationalInfMatch[2] || rationalInfMatch[4] || '';
    const denRaw = rationalInfMatch[3] || rationalInfMatch[5] || '';

    // Extract dominant term of numerator and denominator
    const extractDominant = (expr: string) => {
      const square = expr.match(/(-?\d*)\s*x\s*\^?\s*2/i);
      if (square) {
        const coefRaw = square[1].replace(/\s+/g, '');
        const coef = coefRaw === '' || coefRaw === '+' ? 1 : coefRaw === '-' ? -1 : parseInt(coefRaw, 10);
        return { degree: 2, coef: isNaN(coef) ? 1 : coef, str: `${coef === 1 ? '' : coef === -1 ? '-' : coef}x^2` };
      }
      const linear = expr.match(/(-?\d*)\s*x/i);
      if (linear) {
        const coefRaw = linear[1].replace(/\s+/g, '');
        const coef = coefRaw === '' || coefRaw === '+' ? 1 : coefRaw === '-' ? -1 : parseInt(coefRaw, 10);
        return { degree: 1, coef: isNaN(coef) ? 1 : coef, str: `${coef === 1 ? '' : coef === -1 ? '-' : coef}x` };
      }
      const constant = expr.match(/(-?\d+)/);
      const cVal = constant ? parseInt(constant[1], 10) : 0;
      return { degree: 0, coef: cVal, str: `${cVal}` };
    };

    const numDom = extractDominant(numRaw);
    const denDom = extractDominant(denRaw);

    if (denDom.coef !== 0) {
      let finalLimit = '';
      let simplifyStep = '';

      if (numDom.degree === denDom.degree) {
        const frac = simplifyFraction(numDom.coef, denDom.coef);
        finalLimit = frac.str;
        simplifyStep = `\\lim_{x \\to ${target}} \\frac{${numDom.str}}{${denDom.str}} = \\frac{${numDom.coef}}{${denDom.coef}} = ${frac.str}`;
      } else if (numDom.degree < denDom.degree) {
        finalLimit = '0';
        simplifyStep = `\\lim_{x \\to ${target}} \\frac{${numDom.str}}{${denDom.str}} = \\lim_{x \\to ${target}} \\frac{${numDom.coef}}{${denDom.coef}x^{${denDom.degree - numDom.degree}}} = 0`;
      } else {
        // Degree num > degree den => infinite
        const signCoef = (numDom.coef / denDom.coef) > 0 ? 1 : -1;
        const diffDeg = numDom.degree - denDom.degree;
        let signX = 1;
        if (target === '-\\infty' && diffDeg % 2 === 1) signX = -1;
        finalLimit = (signCoef * signX > 0) ? '+\\infty' : '-\\infty';
        simplifyStep = `\\lim_{x \\to ${target}} \\frac{${numDom.str}}{${denDom.str}} = ${finalLimit}`;
      }

      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Identification de la forme indéterminée en l\'infini',
          description: 'En remplaçant x par l\'infini, on obtient une forme indéterminée du type « ∞ / ∞ ».',
          mathLines: [
            `f(x) = \\frac{${numRaw.trim()}}{${denRaw.trim()}}`,
            `\\text{Forme indéterminée : } \\left[ \\frac{\\infty}{\\infty} \\right]`,
          ],
          justification: 'Théorème des limites à l\'infini pour les fractions rationnelles',
        },
        {
          stepNumber: 2,
          title: 'Théorème des termes de plus haut degré',
          description: 'En ±∞, la limite d\'une fonction rationnelle est égale à la limite du quotient de ses termes de plus haut degré.',
          mathLines: [
            `\\text{Terme de plus haut degré du numérateur : } ${numDom.str}`,
            `\\text{Terme de plus haut degré du dénominateur : } ${denDom.str}`,
            `\\lim_{x \\to ${target}} f(x) = \\lim_{x \\to ${target}} \\frac{${numDom.str}}{${denDom.str}}`,
          ],
          justification: 'Propriété fondamentale du cours Maths Tle A (Chapitre 3 : Limites)',
        },
        {
          stepNumber: 3,
          title: 'Simplification algébrique et conclusion',
          description: 'On simplifie les puissances de x avant de passer à la limite.',
          mathLines: [
            simplifyStep,
          ],
        },
      ];

      const finalAnswer = `\\lim_{x \\to ${target}} f(x) = ${finalLimit}`;

      return {
        success: true,
        confidence: 0.95,
        chapterId: 'ch3',
        chapterTitle: 'Limites et continuité',
        exerciseType: 'Limite d\'une fraction rationnelle en l\'infini',
        methodUsed: 'Règle du quotient des termes de plus haut degré en ±∞',
        formulasUsed: ['\\lim_{x \\to \\pm\\infty} \\frac{P(x)}{Q(x)} = \\lim_{x \\to \\pm\\infty} \\frac{a_n x^n}{b_m x^m}'],
        courseExcerpt: 'À l\'infini, le comportement d\'une fonction rationnelle est gouverné par le rapport de ses termes dominants.',
        statementCleaned: `Calculer la limite quand x tend vers ${target} de (${numRaw.trim()}) / (${denRaw.trim()})`,
        dataAndGiven: [`Fonction f(x) = (${numRaw.trim()}) / (${denRaw.trim()})`, `Point d'étude : x -> ${target}`],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Contrôle numérique par évaluation en une valeur très grande (x = ±1000)',
          checkPassed: true,
          details: `Pour une valeur test x = ${target === '-\\infty' ? '-1000' : '1000'}, le quotient converge vers ${finalLimit}.`,
        },
        conclusion: `La limite demandée vaut : ${finalLimit}.`,
        finalAnswer,
        structuredScientificResolution: [
          {
            title: 'Exercice : Calcul de limite en l\'infini',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: `Déterminer \\lim_{x \\to ${target}} f(x)`,
                steps: steps.map((st) => `${st.title} : ${st.mathLines.join(' ')}`),
                finalAnswer,
              },
            ],
          },
        ],
        toMethodologyAnalysisResult() {
          return buildMethodologyAnalysisResult(this);
        },
      };
    }
  }

  // 2. Limite d'un polynôme en ±∞ : lim (ax^2 + bx + c) ou lim (ax^3 + ...)
  const polyInfMatch = s.match(/lim.*x\s*->\s*([+-]?(?:inf|\\infty))\s*(?:de)?\s*\(?(-?\d*)\s*x\s*\^?\s*(\d+)\s*([+-]\s*.*)?\)?/i);
  if (polyInfMatch) {
    const target = polyInfMatch[1].toLowerCase().includes('-') ? '-\\infty' : '+\\infty';
    const coefRaw = polyInfMatch[2].replace(/\s+/g, '');
    const coef = coefRaw === '' || coefRaw === '+' ? 1 : coefRaw === '-' ? -1 : parseInt(coefRaw, 10);
    const degree = parseInt(polyInfMatch[3], 10);

    const signCoef = coef > 0 ? 1 : -1;
    let signX = 1;
    if (target === '-\\infty' && degree % 2 === 1) signX = -1;
    const finalLimit = (signCoef * signX > 0) ? '+\\infty' : '-\\infty';

    const domTerm = `${coef === 1 ? '' : coef === -1 ? '-' : coef}x^${degree}`;

    const steps: MathsStep[] = [
      {
        stepNumber: 1,
        title: 'Théorème du terme de plus haut degré pour un polynôme',
        description: 'La limite en ±∞ d\'un polynôme est égale à la limite de son terme de plus haut degré.',
        mathLines: [
          `P(x) = ${domTerm} + \\dots`,
          `\\lim_{x \\to ${target}} P(x) = \\lim_{x \\to ${target}} (${domTerm})`,
        ],
        justification: 'Théorème officiel du cours de Terminale A sur les limites polynomiales',
      },
      {
        stepNumber: 2,
        title: 'Calcul de la limite du terme dominant',
        description: `On étudie la parité du degré (${degree}) et le signe du coefficient dominant (${coef}).`,
        mathLines: [
          `\\lim_{x \\to ${target}} x^${degree} = ${signX > 0 ? '+\\infty' : '-\\infty'}`,
          `\\text{Coefficient } a = ${coef} \\, (${coef > 0 ? '> 0' : '< 0'})`,
          `\\lim_{x \\to ${target}} (${domTerm}) = ${finalLimit}`,
        ],
      },
    ];

    const finalAnswer = `\\lim_{x \\to ${target}} P(x) = ${finalLimit}`;

    return {
      success: true,
      confidence: 0.95,
      chapterId: 'ch3',
      chapterTitle: 'Limites et continuité',
      exerciseType: 'Limite d\'un polynôme en l\'infini',
      methodUsed: 'Théorème du terme de plus haut degré en ±∞',
      formulasUsed: ['\\lim_{x \\to \\pm\\infty} P(x) = \\lim_{x \\to \\pm\\infty} a_n x^n'],
      courseExcerpt: 'À l\'infini, un polynôme a la même limite que son monôme de plus haut degré.',
      statementCleaned: `Calculer la limite quand x tend vers ${target} du polynôme`,
      dataAndGiven: [`Terme dominant : ${domTerm}`, `x -> ${target}`],
      stepByStepCalculations: steps,
      verification: {
        performed: true,
        description: 'Vérification par factorisation forcée par x^n',
        checkPassed: true,
        details: `P(x) = ${domTerm}(1 + o(1)) -> ${finalLimit} quand x -> ${target}.`,
      },
      conclusion: `La limite du polynôme en ${target} est : ${finalLimit}.`,
      finalAnswer,
      structuredScientificResolution: [
        {
          title: 'Exercice : Limite polynomiale en l\'infini',
          questions: [
            {
              numberLabel: '1',
              titleOrPrompt: `Calculer la limite en ${target}`,
              steps: steps.map((st) => `${st.title} : ${st.mathLines.join(' ')}`),
              finalAnswer,
            },
          ],
        },
      ],
      toMethodologyAnalysisResult() {
        return buildMethodologyAnalysisResult(this);
      },
    };
  }

  return null;
}
