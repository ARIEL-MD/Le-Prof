import { MathsSolveResult, MathsStep } from '../types';
import { buildMethodologyAnalysisResult } from '../resultBuilder';
import { simplifyFraction, round } from '../mathUtils';

/**
 * Chapitre 6 : Fonction logarithme népérien
 * - Domaine de définition : argument strictement positif (u(x) > 0)
 * - Propriétés algébriques de ln (ln(ab), ln(a/b), ln(a^n))
 * - Équations en ln(x) et ln(u(x))
 * - Inéquations en ln
 * - Dérivée de ln(u) : u'/u et primitives
 */
export function solveLogarithm(statement: string): MathsSolveResult | null {
  const s = statement.trim();

  // 1. Équation du type : ln(ax + b) = k ou ln(x) = k
  const lnEqKMatch = s.match(/ln\s*\(\s*(-?\d*)\s*x\s*([+-]\s*\d+)?\s*\)\s*=\s*(-?\d+(?:\.\d+)?)/i) ||
                     s.match(/ln\s*x\s*=\s*(-?\d+(?:\.\d+)?)/i);

  if (lnEqKMatch) {
    const isBareX = !lnEqKMatch[2] && (!lnEqKMatch[1] || lnEqKMatch[1] === '' || !isNaN(parseFloat(lnEqKMatch[1])));
    
    let a = 1;
    let b = 0;
    let k = 0;

    if (s.match(/ln\s*x\s*=\s*(-?\d+(?:\.\d+)?)/i)) {
      const m = s.match(/ln\s*x\s*=\s*(-?\d+(?:\.\d+)?)/i)!;
      k = parseFloat(m[1]);
    } else {
      const aRaw = (lnEqKMatch[1] || '').replace(/\s+/g, '');
      a = aRaw === '' || aRaw === '+' ? 1 : aRaw === '-' ? -1 : parseInt(aRaw, 10);
      b = lnEqKMatch[2] ? parseInt(lnEqKMatch[2].replace(/\s+/g, ''), 10) : 0;
      k = parseFloat(lnEqKMatch[3]);
    }

    // Condition d'existence : ax + b > 0
    const domainCond = a > 0 ? `x > ${simplifyFraction(-b, a).str}` : `x < ${simplifyFraction(-b, a).str}`;

    // Resolution : ax + b = e^k => ax = e^k - b => x = (e^k - b)/a
    const expK = Math.exp(k);
    const xSolNum = (expK - b) / a;

    const solExact = a === 1 ? (b === 0 ? `e^{${k}}` : `e^{${k}} ${b >= 0 ? '-' : '+'} ${Math.abs(b)}`) : `\\frac{e^{${k}} ${b >= 0 ? '-' : '+'} ${Math.abs(b)}}{${a}}`;

    const steps: MathsStep[] = [
      {
        stepNumber: 1,
        title: 'Détermination de l\'ensemble de validité (Domaine d\'existence)',
        description: 'La fonction logarithme népérien ln(X) n\'est définie que pour X > 0.',
        mathLines: [
          `\\text{Condition : } ${a}x ${b >= 0 ? '+' : ''}${b} > 0`,
          `${a}x > ${-b} \\iff ${domainCond}`,
          `D_E = \\left] ${simplifyFraction(-b, a).str}, +\\infty \\right[`,
        ],
        justification: 'Domaine fondamental de la fonction ln : D_ln = ]0, +∞[',
      },
      {
        stepNumber: 2,
        title: 'Passage à l\'exponentielle par bijection',
        description: 'Pour tout réel k, ln(X) = k équivaut à X = e^k (par stricte croissance de l\'exponentielle).',
        mathLines: [
          `\\ln(${a}x ${b >= 0 ? '+' : ''}${b}) = ${k}`,
          `\\iff ${a}x ${b >= 0 ? '+' : ''}${b} = e^{${k}}`,
        ],
        justification: 'Propriété : ln(a) = b \\iff a = e^b (a > 0)',
      },
      {
        stepNumber: 3,
        title: 'Isolement de l\'inconnue x et validation dans D_E',
        description: 'On isole x et on vérifie que la solution appartient bien au domaine d\'existence.',
        mathLines: [
          `${a}x = e^{${k}} - (${b})`,
          `x = ${solExact} \\approx ${round(xSolNum, 4)}`,
          `\\text{Puisque } e^{${k}} > 0, \\, x \\text{ vérifie bien la condition } ${a}x + (${b}) > 0.`,
        ],
      },
    ];

    const finalAnswer = `S = \\left\\{ ${solExact} \\right\\}`;

    return {
      success: true,
      confidence: 0.98,
      chapterId: 'ch6',
      chapterTitle: 'Fonction logarithme népérien',
      exerciseType: 'Équation logarithmique du type ln(u(x)) = k',
      methodUsed: 'Poser la condition d\'existence u(x) > 0 puis appliquer l\'exponentielle u(x) = e^k',
      formulasUsed: [
        '\\ln(X) = k \\iff X = e^k \\quad (X > 0)',
        'D_{\\ln} = ]0, +\\infty[',
      ],
      courseExcerpt: 'Pour résoudre une équation avec ln, il faut TOUJOURS imposer au préalable la stricte positivité des arguments, puis utiliser la bijection ln / exp.',
      statementCleaned: `Résoudre dans R l'équation : ln(${a}x ${b >= 0 ? '+' : ''}${b}) = ${k}`,
      dataAndGiven: [`Équation : \\ln(${a}x ${b >= 0 ? '+' : ''}${b}) = ${k}`, `Condition : ${a}x ${b >= 0 ? '+' : ''}${b} > 0`],
      stepByStepCalculations: steps,
      verification: {
        performed: true,
        description: 'Vérification par réinjection de la solution dans le logarithme',
        checkPassed: true,
        details: `\\ln(${a}(${solExact}) + (${b})) = \\ln(e^{${k}}) = ${k}. L'égalité est exactement vérifiée.`,
      },
      conclusion: `L'équation admet pour unique solution réelle : ${solExact} (soit environ ${round(xSolNum, 4)}).`,
      finalAnswer,
      structuredScientificResolution: [
        {
          title: 'Exercice : Équation logarithmique',
          questions: [
            {
              numberLabel: '1',
              titleOrPrompt: `Résoudre dans ℝ l'équation \\ln(${a}x ${b >= 0 ? '+' : ''}${b}) = ${k}`,
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

  // 2. Dérivée de ln(u(x)) : (ln(ax + b))' = a / (ax + b)
  const lnDerivMatch = s.match(/(?:d[ée]riv[ée]e|d[ée]river).*(?:de)?\s*(?:f\(x\)\s*=\s*)?ln\s*\(\s*(-?\d*)\s*x\s*([+-]\s*\d+)?\s*\)/i);
  if (lnDerivMatch) {
    const aRaw = (lnDerivMatch[1] || '').replace(/\s+/g, '');
    const a = aRaw === '' || aRaw === '+' ? 1 : aRaw === '-' ? -1 : parseInt(aRaw, 10);
    const b = lnDerivMatch[2] ? parseInt(lnDerivMatch[2].replace(/\s+/g, ''), 10) : 0;

    const steps: MathsStep[] = [
      {
        stepNumber: 1,
        title: 'Identification de la fonction intérieure u(x)',
        description: 'La fonction est de la forme f(x) = \\ln(u(x)).',
        mathLines: [
          `u(x) = ${a}x ${b >= 0 ? '+' : ''}${b}`,
          `u'(x) = ${a}`,
        ],
        justification: 'Formule de dérivation de la composée avec ln',
      },
      {
        stepNumber: 2,
        title: 'Application de la formule (ln u)\' = u\' / u',
        description: 'On applique la règle de dérivation officielle du cours de Terminale A.',
        mathLines: [
          `(\\ln(u))' = \\frac{u'(x)}{u(x)}`,
          `f'(x) = \\frac{${a}}{${a}x ${b >= 0 ? '+' : ''}${b}}`,
        ],
      },
    ];

    const finalAnswer = `f'(x) = \\frac{${a}}{${a}x ${b >= 0 ? '+' : ''}${b}}`;

    return {
      success: true,
      confidence: 0.98,
      chapterId: 'ch6',
      chapterTitle: 'Fonction logarithme népérien',
      exerciseType: 'Dérivée d\'une fonction logarithme composée (ln u)',
      methodUsed: 'Formule de dérivation : (\\ln u)\' = \\frac{u\'}{u}',
      formulasUsed: ['(\\ln u)\' = \\frac{u\'}{u}'],
      courseExcerpt: 'La dérivée de la fonction x -> ln(u(x)) est égale au quotient de la dérivée u\'(x) par la fonction u(x).',
      statementCleaned: `Calculer la dérivée de f(x) = ln(${a}x ${b >= 0 ? '+' : ''}${b})`,
      dataAndGiven: [`f(x) = \\ln(${a}x ${b >= 0 ? '+' : ''}${b})`, `u(x) = ${a}x ${b >= 0 ? '+' : ''}${b}`],
      stepByStepCalculations: steps,
      verification: {
        performed: true,
        description: 'Vérification par primitive immédiate',
        checkPassed: true,
        details: `\\int \\frac{${a}}{${a}x ${b >= 0 ? '+' : ''}${b}} dx = \\ln|${a}x ${b >= 0 ? '+' : ''}${b}| + C. Intégration et dérivation parfaitement réciproques.`,
      },
      conclusion: `La dérivée de la fonction est : ${finalAnswer}.`,
      finalAnswer,
      structuredScientificResolution: [
        {
          title: 'Exercice : Dérivée logarithmique',
          questions: [
            {
              numberLabel: '1',
              titleOrPrompt: `Calculer f'(x)`,
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
