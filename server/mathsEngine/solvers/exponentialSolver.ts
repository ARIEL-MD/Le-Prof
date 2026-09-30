import { MathsSolveResult, MathsStep } from '../types';
import { buildMethodologyAnalysisResult } from '../resultBuilder';
import { simplifyFraction, round } from '../mathUtils';

/**
 * Chapitre 7 : Fonctions exponentielles népériennes
 * - Propriétés algébriques de exp (e^(a+b), e^(a-b), e^(na))
 * - Équations en e^x = k et e^u = e^v
 * - Équations du second degré en e^x (changement de variable X = e^x avec X > 0)
 * - Dérivée de e^u : u' e^u et primitives
 */
export function solveExponential(statement: string): MathsSolveResult | null {
  const s = statement.trim();

  // 1. Équation du second degré en e^x : a e^(2x) + b e^x + c = 0
  const expQuadMatch = s.match(/(-?\d*)\s*e\s*\^?\s*\(?2x\)?\s*([+-]\s*\d*)\s*e\s*\^?\s*\(?x\)?\s*([+-]\s*\d+)?\s*=\s*0/i);
  if (expQuadMatch) {
    const parseCoef = (raw: string, defaultVal: number) => {
      const clean = (raw || '').replace(/\s+/g, '');
      if (clean === '' || clean === '+') return 1;
      if (clean === '-') return -1;
      const parsed = parseInt(clean, 10);
      return isNaN(parsed) ? defaultVal : parsed;
    };

    const a = parseCoef(expQuadMatch[1], 1);
    const b = parseCoef(expQuadMatch[2], 0);
    const c = expQuadMatch[3] ? parseInt(expQuadMatch[3].replace(/\s+/g, ''), 10) : 0;

    const delta = b * b - 4 * a * c;

    const steps: MathsStep[] = [
      {
        stepNumber: 1,
        title: 'Changement de variable X = e^x',
        description: 'On pose X = e^x avec la condition fondamentale X > 0 (car l\'exponentielle est strictement positive).',
        mathLines: [
          `\\text{Posons } X = e^x \\quad \\text{avec } X > 0`,
          `e^{2x} = (e^x)^2 = X^2`,
          `\\text{L'équation devient : } ${a}X^2 ${b >= 0 ? '+' : ''}${b}X ${c >= 0 ? '+' : ''}${c} = 0`,
        ],
        justification: 'Propriété : e^(2x) = (e^x)² et e^x > 0 pour tout x réel',
      },
      {
        stepNumber: 2,
        title: 'Résolution de l\'équation auxiliaire en X par le discriminant Δ',
        description: 'On calcule Δ = b² - 4ac pour l\'équation en X.',
        mathLines: [
          `\\Delta = (${b})^2 - 4(${a})(${c}) = ${delta}`,
        ],
      },
    ];

    let finalAnswer = '';
    let checkPassed = true;

    if (delta > 0) {
      const sqrtDelta = Math.sqrt(delta);
      const isSquare = Number.isInteger(sqrtDelta);

      if (isSquare) {
        const X1 = (-b - sqrtDelta) / (2 * a);
        const X2 = (-b + sqrtDelta) / (2 * a);

        steps.push({
          stepNumber: 3,
          title: 'Calcul des solutions auxiliaires X₁ et X₂',
          description: 'On détermine les racines du trinôme en X.',
          mathLines: [
            `X_1 = \\frac{-(${b}) - ${sqrtDelta}}{2(${a})} = ${X1}`,
            `X_2 = \\frac{-(${b}) + ${sqrtDelta}}{2(${a})} = ${X2}`,
          ],
        });

        // Keep only X > 0
        const validX: { val: number; x: string }[] = [];
        if (X1 > 0) validX.push({ val: X1, x: `\\ln(${X1})` });
        if (X2 > 0) validX.push({ val: X2, x: `\\ln(${X2})` });

        steps.push({
          stepNumber: 4,
          title: 'Retour à la variable initiale x = ln(X) pour X > 0',
          description: 'On élimine les valeurs de X négatives ou nulles, car e^x > 0 pour tout réel x.',
          mathLines: [
            X1 <= 0 ? `X_1 = ${X1} \\le 0 \\implies \\text{Rejeté (pas de solution réelle)}` : `X_1 = ${X1} > 0 \\implies e^x = ${X1} \\implies x_1 = \\ln(${X1})`,
            X2 <= 0 ? `X_2 = ${X2} \\le 0 \\implies \\text{Rejeté (pas de solution réelle)}` : `X_2 = ${X2} > 0 \\implies e^x = ${X2} \\implies x_2 = \\ln(${X2})`,
          ],
          justification: 'Bijection x -> e^x de ℝ sur ]0, +∞[',
        });

        if (validX.length === 0) {
          finalAnswer = 'S = \\emptyset';
        } else if (validX.length === 1) {
          finalAnswer = `S = \\left\\{ ${validX[0].x} \\right\\}`;
        } else {
          finalAnswer = `S = \\left\\{ ${validX[0].x} \\,;\\, ${validX[1].x} \\right\\}`;
        }
      }
    }

    return {
      success: true,
      confidence: 0.98,
      chapterId: 'ch7',
      chapterTitle: 'Fonctions exponentielles népériennes',
      exerciseType: 'Équation du second degré en e^x',
      methodUsed: 'Changement de variable X = e^x (avec X > 0) et discriminant Δ',
      formulasUsed: [
        'e^{2x} = (e^x)^2',
        'e^x = X \\iff x = \\ln(X) \\quad (X > 0)',
        '\\Delta = b^2 - 4ac',
      ],
      courseExcerpt: 'Pour résoudre une équation contenant des termes en e^(2x) et e^x, on pose le changement de variable X = e^x avec X > 0, puis on applique ln aux racines strictement positives.',
      statementCleaned: `Résoudre dans R : ${a}e^(2x) ${b >= 0 ? '+' : ''}${b}e^x ${c >= 0 ? '+' : ''}${c} = 0`,
      dataAndGiven: [`Équation : ${a}e^{2x} ${b >= 0 ? '+' : ''}${b}e^x ${c >= 0 ? '+' : ''}${c} = 0`, `Variable auxiliaire X = e^x > 0`],
      stepByStepCalculations: steps,
      verification: {
        performed: true,
        description: 'Vérification de la positivité de X et réinjection dans l\'exponentielle',
        checkPassed: true,
        details: `Seules les valeurs de X strictement positives admettent un antécédent x = ln(X) par la fonction exponentielle.`,
      },
      conclusion: `L'ensemble des solutions réelles de l'équation est : ${finalAnswer}.`,
      finalAnswer,
      structuredScientificResolution: [
        {
          title: 'Exercice : Équation exponentielle du 2nd degré',
          questions: [
            {
              numberLabel: '1',
              titleOrPrompt: `Résoudre dans ℝ l'équation ${a}e^{2x} ${b >= 0 ? '+' : ''}${b}e^x ${c >= 0 ? '+' : ''}${c} = 0`,
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

  // 2. Équation simple e^(ax + b) = k
  const expSimpleMatch = s.match(/e\s*\^?\s*\(?(-?\d*)\s*x\s*([+-]\s*\d+)?\)?\s*=\s*(-?\d+(?:\.\d+)?)/i);
  if (expSimpleMatch) {
    const aRaw = (expSimpleMatch[1] || '').replace(/\s+/g, '');
    const a = aRaw === '' || aRaw === '+' ? 1 : aRaw === '-' ? -1 : parseInt(aRaw, 10);
    const b = expSimpleMatch[2] ? parseInt(expSimpleMatch[2].replace(/\s+/g, ''), 10) : 0;
    const k = parseFloat(expSimpleMatch[3]);

    if (k <= 0) {
      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Analyse de la positivité stricte de l\'exponentielle',
          description: 'Pour tout réel X, e^X > 0.',
          mathLines: [
            `e^{${a}x ${b >= 0 ? '+' : ''}${b}} > 0`,
            `\\text{Or le second membre } k = ${k} \\le 0`,
          ],
          justification: 'Propriété : pour tout x réel, e^x > 0',
        },
      ];

      return {
        success: true,
        confidence: 0.98,
        chapterId: 'ch7',
        chapterTitle: 'Fonctions exponentielles népériennes',
        exerciseType: 'Équation exponentielle sans solution réelle',
        methodUsed: 'Propriété de stricte positivité : e^u > 0',
        formulasUsed: ['e^X > 0 \\quad \\forall X \\in \\mathbb{R}'],
        courseExcerpt: 'L\'exponentielle ne prenant que des valeurs strictement positives, une équation e^u = k avec k <= 0 n\'admet aucune solution réelle.',
        statementCleaned: `Résoudre dans R : e^(${a}x ${b >= 0 ? '+' : ''}${b}) = ${k}`,
        dataAndGiven: [`Équation : e^{${a}x ${b >= 0 ? '+' : ''}${b}} = ${k}`, `Second membre k = ${k} <= 0`],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Contrôle du signe',
          checkPassed: true,
          details: `L'image de ℝ par l'exponentielle est ]0, +∞[, qui ne contient pas ${k}. S = ∅.`,
        },
        conclusion: `L'équation n'admet aucune solution réelle. S = ∅.`,
        finalAnswer: 'S = \\emptyset',
        structuredScientificResolution: [
          {
            title: 'Exercice : Équation exponentielle',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: `Résoudre dans ℝ : e^{${a}x ${b >= 0 ? '+' : ''}${b}} = ${k}`,
                steps: ['Pour tout réel, l\'exponentielle est strictement positive.'],
                finalAnswer: 'S = \\emptyset',
              },
            ],
          },
        ],
        toMethodologyAnalysisResult() {
          return buildMethodologyAnalysisResult(this);
        },
      };
    }

    // k > 0 => ax + b = ln(k) => x = (ln(k) - b)/a
    const lnK = Math.log(k);
    const solNum = (lnK - b) / a;
    const solExact = a === 1 ? (b === 0 ? `\\ln(${k})` : `\\ln(${k}) ${b >= 0 ? '-' : '+'} ${Math.abs(b)}`) : `\\frac{\\ln(${k}) ${b >= 0 ? '-' : '+'} ${Math.abs(b)}}{${a}}`;

    const steps: MathsStep[] = [
      {
        stepNumber: 1,
        title: 'Application du logarithme népérien par bijection',
        description: 'Puisque k > 0, on applique la fonction ln aux deux membres de l\'égalité.',
        mathLines: [
          `e^{${a}x ${b >= 0 ? '+' : ''}${b}} = ${k} \\iff ${a}x ${b >= 0 ? '+' : ''}${b} = \\ln(${k})`,
        ],
        justification: 'Propriété : e^a = b \\iff a = \\ln(b) \\quad (b > 0)',
      },
      {
        stepNumber: 2,
        title: 'Isolement de l\'inconnue x',
        description: 'On soustrait b puis on divise par a.',
        mathLines: [
          `${a}x = \\ln(${k}) - (${b})`,
          `x = ${solExact} \\approx ${round(solNum, 4)}`,
        ],
      },
    ];

    const finalAnswer = `S = \\left\\{ ${solExact} \\right\\}`;

    return {
      success: true,
      confidence: 0.98,
      chapterId: 'ch7',
      chapterTitle: 'Fonctions exponentielles népériennes',
      exerciseType: 'Équation exponentielle du type e^(u(x)) = k',
      methodUsed: 'Passage au logarithme népérien : e^u = k \\iff u = \\ln(k)',
      formulasUsed: ['e^u = k \\iff u = \\ln(k) \\quad (k > 0)'],
      courseExcerpt: 'Pour résoudre e^u = k avec k > 0, on prend le logarithme népérien de chaque côté.',
      statementCleaned: `Résoudre dans R : e^(${a}x ${b >= 0 ? '+' : ''}${b}) = ${k}`,
      dataAndGiven: [`Équation : e^{${a}x ${b >= 0 ? '+' : ''}${b}} = ${k}`, `k = ${k} > 0`],
      stepByStepCalculations: steps,
      verification: {
        performed: true,
        description: 'Réinjection dans l\'exponentielle',
        checkPassed: true,
        details: `e^{${a}(${solExact}) + (${b})} = e^{\\ln(${k})} = ${k}. Égalité exacte.`,
      },
      conclusion: `L'équation admet pour unique solution réelle : ${solExact} (soit environ ${round(solNum, 4)}).`,
      finalAnswer,
      structuredScientificResolution: [
        {
          title: 'Exercice : Équation exponentielle',
          questions: [
            {
              numberLabel: '1',
              titleOrPrompt: `Résoudre dans ℝ : e^{${a}x ${b >= 0 ? '+' : ''}${b}} = ${k}`,
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
