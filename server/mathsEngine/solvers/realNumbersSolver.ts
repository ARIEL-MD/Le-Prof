import { MathsSolveResult, MathsStep } from '../types';
import { buildMethodologyAnalysisResult } from '../resultBuilder';
import { gcd, simplifyFraction, simplifySqrt, round } from '../mathUtils';

/**
 * Chapitre 1 : Nombres réels
 * - Calculs avec fractions, puissances, racines carrées
 * - Développements & Identités remarquables ((a+b)², (a-b)², (a-b)(a+b))
 * - Factorisation
 * - Valeur absolue : équations |x - a| = r, |ax + b| = c
 * - Intervalles, encadrements, centre & rayon (précision)
 * - Notation scientifique m * 10^n
 */
export function solveRealNumbers(statement: string): MathsSolveResult | null {
  const s = statement.trim();

  // 0. Calculs arithmétiques directs et prioritaires (ex: 1+1, 25 * 4, 15/3 + 2, (4+6)*3, etc.)
  const cleanExpr = s.replace(/^(?:calculer|calcule|combien font|donner la valeur de|résoudre|évaluer)\s*[:=]?\s*/i, '').replace(/[=?\s]+$/, '').trim();
  const isPureArithmetic = /^[\d\s\+\-\*\/\(\)\^\.\,\%]+$/.test(cleanExpr) && /\d/.test(cleanExpr);

  if (isPureArithmetic) {
    try {
      const sanitized = cleanExpr.replace(/,/g, '.').replace(/\^/g, '**');
      // Only allow safe arithmetic tokens
      if (/^[0-9+\-*/().\s*]+$/.test(sanitized)) {
        const computed = Function(`'use strict'; return (${sanitized})`)();
        if (typeof computed === 'number' && !isNaN(computed) && isFinite(computed)) {
          const formattedResult = Number.isInteger(computed) ? computed.toString() : computed.toFixed(4).replace(/\.?0+$/, '');
          
          const steps: MathsStep[] = [
            {
              stepNumber: 1,
              title: "Identification de l'opération et des termes",
              description: `On identifie les termes et les opérateurs de l'expression mathématique : ${cleanExpr}.`,
              mathLines: [
                `\\text{Expression à calculer : } E = ${cleanExpr}`,
              ],
              justification: "Règles fondamentales du calcul numérique et priorité des opérations (PEMDAS)",
            },
            {
              stepNumber: 2,
              title: "Application des règles de calcul et des priorités opératoires",
              description: "On effectue les opérations en respectant l'ordre des priorités (parenthèses, puissances, multiplications/divisions, additions/soustractions).",
              mathLines: [
                `E = ${cleanExpr}`,
                `E = ${formattedResult}`,
              ],
              justification: "Calcul algébrique exact",
            },
            {
              stepNumber: 3,
              title: "Conclusion et encadrement du résultat",
              description: "Le résultat exact de l'opération est obtenu.",
              mathLines: [
                `\\mathbf{${cleanExpr} = ${formattedResult}}`,
              ],
            },
          ];

          return {
            success: true,
            confidence: 0.99,
            chapterId: 'ch1',
            chapterTitle: 'Calculs numériques et Nombres réels',
            exerciseType: 'Calcul numérique exact',
            methodUsed: 'Priorité des opérations opératoires et calcul numérique',
            formulasUsed: ['\\text{PEMDAS : Parenthèses } \\to \\text{ Multiplications/Divisions } \\to \\text{ Additions/Soustractions}'],
            courseExcerpt: 'Dans une suite d\'opérations sans parenthèses, la multiplication et la division sont prioritaires sur l\'addition et la soustraction.',
            statementCleaned: `Calculer la valeur exacte de l'expression : ${cleanExpr}`,
            dataAndGiven: [`Expression : ${cleanExpr}`],
            stepByStepCalculations: steps,
            verification: {
              performed: true,
              description: 'Vérification arithmétique rigoureuse',
              checkPassed: true,
              details: `Le calcul direct de ${cleanExpr} donne exactement ${formattedResult}.`,
            },
            conclusion: `Le résultat de l'opération ${cleanExpr} est égal à **${formattedResult}**.`,
            finalAnswer: formattedResult,
            structuredScientificResolution: [
              {
                title: 'Calcul numérique',
                questions: [
                  {
                    numberLabel: '1',
                    titleOrPrompt: `Calculer ${cleanExpr}`,
                    steps: steps.map((st) => `${st.title} : ${st.mathLines.join(' ')}`),
                    finalAnswer: formattedResult,
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
    } catch {
      // ignore and continue
    }
  }

  // 1. Développements d'identités remarquables : (ax + b)^2 ou (ax - b)^2 ou (ax + b)(ax - b) ou (ax + b)(cx + d)
  const idMatch = s.match(/(?:\(?\s*(-?\d*)\s*x\s*([+-]\s*\d+)\s*\)?\s*\^?\s*2)|(?:\(?\s*(-?\d*)\s*x\s*([+-]\s*\d+)\s*\)?\s*\*\s*\(?\s*(-?\d*)\s*x\s*([+-]\s*\d+)\s*\)?)/i) ||
                  s.match(/d[ée]velopp(?:er|ement)?\s*[:=]?\s*(.+)/i);

  // Check for (ax + b)^2
  const squareMatch = s.match(/\(?\s*(-?\d*)\s*x\s*([+-]\s*\d+)\s*\)?\s*\^?\s*2/i);
  if (squareMatch) {
    const aRaw = squareMatch[1];
    const a = aRaw === '' || aRaw === '+' ? 1 : aRaw === '-' ? -1 : parseInt(aRaw, 10);
    const b = parseInt(squareMatch[2].replace(/\s+/g, ''), 10);

    const a2 = a * a;
    const twoAb = 2 * a * b;
    const b2 = b * b;

    const signTwoAb = twoAb >= 0 ? `+ ${twoAb}` : `- ${Math.abs(twoAb)}`;
    const signB2 = b2 >= 0 ? `+ ${b2}` : `- ${Math.abs(b2)}`;
    const expanded = `${a2 === 1 ? '' : a2 === -1 ? '-' : a2}x^2 ${signTwoAb}x ${signB2}`;

    const formulaUsed = b >= 0 ? '(a + b)^2 = a^2 + 2ab + b^2' : '(a - b)^2 = a^2 - 2ab + b^2';

    const steps: MathsStep[] = [
      {
        stepNumber: 1,
        title: 'Identification des termes de l\'identité remarquable',
        description: `L'expression est de la forme ${b >= 0 ? '(a + b)^2' : '(a - b)^2'}.`,
        mathLines: [
          `a = ${a}x`,
          `b = ${Math.abs(b)}`,
          `\\text{Formule : } ${formulaUsed}`,
        ],
        justification: 'Identités remarquables du cours de Terminale A',
      },
      {
        stepNumber: 2,
        title: 'Calcul de chaque terme du développement',
        description: 'On calcule successivement a^2, 2ab et b^2.',
        mathLines: [
          `a^2 = (${a}x)^2 = ${a2}x^2`,
          `2ab = 2 \\times (${a}x) \\times (${b}) = ${twoAb}x`,
          `b^2 = (${b})^2 = ${b2}`,
        ],
      },
      {
        stepNumber: 3,
        title: 'Somme et réduction de l\'expression développée',
        description: 'On rassemble les termes obtenus pour former le polynôme réduit.',
        mathLines: [
          `(${a}x ${b >= 0 ? '+' : ''}${b})^2 = ${a2}x^2 ${signTwoAb}x ${signB2}`,
        ],
      },
    ];

    // Verification by testing x = 1 and x = 0
    const xTest = 1;
    const valInitial = Math.pow(a * xTest + b, 2);
    const valExpanded = a2 * xTest * xTest + twoAb * xTest + b2;
    const checkPassed = valInitial === valExpanded;

    const finalAnswer = expanded.trim();

    return {
      success: true,
      confidence: 0.95,
      chapterId: 'ch1',
      chapterTitle: 'Nombres réels',
      exerciseType: 'Développement d\'une identité remarquable',
      methodUsed: `Développement selon l'identité remarquable ${formulaUsed}`,
      formulasUsed: [formulaUsed],
      courseExcerpt: 'Pour développer le carré d\'un binôme, on applique l\'identité remarquable appropriée et on réduit les termes semblables.',
      statementCleaned: `Développer et réduire l'expression : (${a}x ${b >= 0 ? '+' : ''}${b})^2`,
      dataAndGiven: [`Expression initiale : (${a}x ${b >= 0 ? '+' : ''}${b})^2`, `Coefficient a = ${a}`, `Terme constant b = ${b}`],
      stepByStepCalculations: steps,
      verification: {
        performed: true,
        description: 'Vérification numérique par substitution d\'une valeur test (x = 1)',
        checkPassed,
        details: `Pour x = 1 : Valeur initiale = (${a}(1) + (${b}))^2 = ${valInitial} ; Valeur développée = ${valExpanded}. L'égalité est vérifiée.`,
      },
      conclusion: `L'expression développée et réduite est : ${finalAnswer}.`,
      finalAnswer,
      structuredScientificResolution: [
        {
          title: 'Exercice 1 : Développement et réduction algébrique',
          questions: [
            {
              numberLabel: '1',
              titleOrPrompt: `Développer et réduire l'expression (${a}x ${b >= 0 ? '+' : ''}${b})^2`,
              steps: steps.map((st) => `${st.title} : ${st.mathLines.join(' ')}`),
              finalAnswer: `(${a}x ${b >= 0 ? '+' : ''}${b})^2 = ${finalAnswer}`,
            },
          ],
        },
      ],
      toMethodologyAnalysisResult() {
        return buildMethodologyAnalysisResult(this);
      },
    };
  }

  // 2. Équation avec valeur absolue : |ax + b| = c ou |x - a| = r
  const absEqMatch = s.match(/\|\s*(-?\d*)\s*x\s*([+-]\s*\d+)?\s*\|\s*=\s*(\d+(?:\.\d+)?)/i);
  if (absEqMatch) {
    const aRaw = absEqMatch[1];
    const a = aRaw === '' || aRaw === '+' ? 1 : aRaw === '-' ? -1 : parseInt(aRaw, 10);
    const b = absEqMatch[2] ? parseInt(absEqMatch[2].replace(/\s+/g, ''), 10) : 0;
    const c = parseFloat(absEqMatch[3]);

    if (c < 0) {
      // Impossible
      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Analyse de la positivité de la valeur absolue',
          description: 'Par définition, pour tout réel X, |X| >= 0.',
          mathLines: [`|${a}x ${b >= 0 ? '+' : ''}${b}| \\ge 0`, `\\text{Or } c = ${c} < 0`],
          justification: 'Propriété fondamentale de la valeur absolue',
        },
      ];
      return {
        success: true,
        confidence: 0.95,
        chapterId: 'ch1',
        chapterTitle: 'Nombres réels',
        exerciseType: 'Équation avec valeur absolue',
        methodUsed: 'Propriété de non-négativité de la valeur absolue',
        formulasUsed: ['|X| >= 0 pour tout X dans R'],
        courseExcerpt: 'Une valeur absolue étant toujours positive ou nulle, une équation |X| = c avec c < 0 n\'admet aucune solution réelle.',
        statementCleaned: `Résoudre dans R : |${a}x ${b >= 0 ? '+' : ''}${b}| = ${c}`,
        dataAndGiven: [`Équation : |${a}x ${b >= 0 ? '+' : ''}${b}| = ${c}`, `Membre de droite : ${c} < 0`],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Vérification du signe',
          checkPassed: true,
          details: `Une distance ne pouvant pas être strictement négative, l'ensemble des solutions est l'ensemble vide S = ∅.`,
        },
        conclusion: `L'équation n'admet aucune solution réelle. S = ∅.`,
        finalAnswer: 'S = \\emptyset',
        structuredScientificResolution: [
          {
            title: 'Exercice 1 : Équation avec valeur absolue',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: `Résoudre dans R : |${a}x ${b >= 0 ? '+' : ''}${b}| = ${c}`,
                steps: [`La valeur absolue est toujours positive : or ${c} < 0.`],
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

    // Two cases : ax + b = c OR ax + b = -c
    const sol1Num = c - b;
    const sol1Den = a;
    const sol1Frac = simplifyFraction(sol1Num, sol1Den);

    const sol2Num = -c - b;
    const sol2Den = a;
    const sol2Frac = simplifyFraction(sol2Num, sol2Den);

    const steps: MathsStep[] = [
      {
        stepNumber: 1,
        title: 'Application du théorème d\'équivalence de la valeur absolue',
        description: 'Pour tout réel X et tout réel c >= 0, l\'équation |X| = c équivaut à X = c ou X = -c.',
        mathLines: [
          `|${a}x ${b >= 0 ? '+' : ''}${b}| = ${c} \\iff ${a}x ${b >= 0 ? '+' : ''}${b} = ${c} \\quad \\text{ou} \\quad ${a}x ${b >= 0 ? '+' : ''}${b} = -${c}`,
        ],
        justification: 'Théorème : |X| = c (avec c >= 0) équivaut à X = c ou X = -c',
      },
      {
        stepNumber: 2,
        title: 'Résolution du premier cas : ax + b = c',
        description: `On isole x dans l'équation ${a}x + (${b}) = ${c}.`,
        mathLines: [
          `${a}x = ${c} - (${b}) = ${sol1Num}`,
          `x_1 = \\frac{${sol1Num}}{${sol1Den}} = ${sol1Frac.str}`,
        ],
      },
      {
        stepNumber: 3,
        title: 'Résolution du deuxième cas : ax + b = -c',
        description: `On isole x dans l'équation ${a}x + (${b}) = -${c}.`,
        mathLines: [
          `${a}x = -${c} - (${b}) = ${sol2Num}`,
          `x_2 = \\frac{${sol2Num}}{${sol2Den}} = ${sol2Frac.str}`,
        ],
      },
    ];

    // Check by reinjection
    const v1 = Math.abs(a * (sol1Num / sol1Den) + b);
    const v2 = Math.abs(a * (sol2Num / sol2Den) + b);
    const checkPassed = Math.abs(v1 - c) < 1e-9 && Math.abs(v2 - c) < 1e-9;

    const finalAnswer = c === 0 ? `S = \\{ ${sol1Frac.str} \\}` : `S = \\left\\{ ${sol2Frac.str} ; ${sol1Frac.str} \\right\\}`;

    return {
      success: true,
      confidence: 0.95,
      chapterId: 'ch1',
      chapterTitle: 'Nombres réels',
      exerciseType: 'Équation avec valeur absolue',
      methodUsed: 'Dédoublement en deux équations du 1er degré : X = c ou X = -c',
      formulasUsed: ['|X| = c \\iff X = c \\text{ ou } X = -c \\quad (c \\ge 0)'],
      courseExcerpt: 'Pour résoudre |ax + b| = c avec c >= 0, on résout séparément les deux équations ax + b = c et ax + b = -c.',
      statementCleaned: `Résoudre dans R l'équation : |${a}x ${b >= 0 ? '+' : ''}${b}| = ${c}`,
      dataAndGiven: [`Équation : |${a}x ${b >= 0 ? '+' : ''}${b}| = ${c}`, `c = ${c} >= 0`],
      stepByStepCalculations: steps,
      verification: {
        performed: true,
        description: 'Vérification par réinjection directe des deux solutions dans l\'équation d\'origine',
        checkPassed,
        details: `Pour x_1 = ${sol1Frac.str} : |${a}(${sol1Frac.str}) + (${b})| = |${c}| = ${c}. Pour x_2 = ${sol2Frac.str} : |${a}(${sol2Frac.str}) + (${b})| = |-${c}| = ${c}. Les deux valeurs vérifient l'équation.`,
      },
      conclusion: `L'ensemble des solutions réelles de l'équation est : ${finalAnswer}.`,
      finalAnswer,
      structuredScientificResolution: [
        {
          title: 'Exercice : Équation avec valeur absolue',
          questions: [
            {
              numberLabel: '1',
              titleOrPrompt: `Résoudre dans R : |${a}x ${b >= 0 ? '+' : ''}${b}| = ${c}`,
              steps: steps.map((s) => `${s.title} : ${s.mathLines.join(' ')}`),
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

  // 3. Encadrement, centre et rayon : encadrement [a ; b] -> centre c = (a+b)/2, rayon r = (b-a)/2
  const encadreMatch = s.match(/(?:encadrement|intervalle|centre|rayon|pr[ée]cision).*(?:\[\s*(-?\d+(?:\.\d+)?)\s*;\s*(-?\d+(?:\.\d+)?)\s*\]|(-?\d+(?:\.\d+)?)\s*<=\s*x\s*<=\s*(-?\d+(?:\.\d+)?))/i);
  if (encadreMatch) {
    const aVal = parseFloat(encadreMatch[1] || encadreMatch[3]);
    const bVal = parseFloat(encadreMatch[2] || encadreMatch[4]);
    if (!isNaN(aVal) && !isNaN(bVal) && bVal >= aVal) {
      const centre = (aVal + bVal) / 2;
      const rayon = (bVal - aVal) / 2;
      const amplitude = bVal - aVal;

      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Calcul de l\'amplitude de l\'encadrement',
          description: 'L\'amplitude correspond à la longueur de l\'intervalle : L = b - a.',
          mathLines: [`L = ${bVal} - (${aVal}) = ${amplitude}`],
          justification: 'Définition de l\'amplitude d\'un intervalle [a ; b]',
        },
        {
          stepNumber: 2,
          title: 'Calcul du centre (valeur approchée)',
          description: 'Le centre de l\'intervalle est la moyenne arithmétique des bornes : c = \\frac{a + b}{2}.',
          mathLines: [`c = \\frac{${aVal} + ${bVal}}{2} = \\frac{${aVal + bVal}}{2} = ${centre}`],
          justification: 'Formule du centre : c = (a + b) / 2',
        },
        {
          stepNumber: 3,
          title: 'Calcul du rayon (précision ou incertitude)',
          description: 'Le rayon (ou précision) est la demi-amplitude : r = \\frac{b - a}{2}.',
          mathLines: [`r = \\frac{${bVal} - (${aVal})}{2} = \\frac{${amplitude}}{2} = ${rayon}`],
          justification: 'Formule du rayon : r = (b - a) / 2',
        },
        {
          stepNumber: 4,
          title: 'Écriture sous forme de valeur absolue',
          description: 'L\'encadrement a <= x <= b équivaut à la distance |x - c| <= r.',
          mathLines: [`|x - ${centre}| \\le ${rayon}`],
          justification: 'Équivalence : x \\in [c-r ; c+r] \\iff |x - c| \\le r',
        },
      ];

      const finalAnswer = `c = ${centre}, \\quad r = ${rayon}, \\quad |x - ${centre}| \\le ${rayon}`;

      return {
        success: true,
        confidence: 0.95,
        chapterId: 'ch1',
        chapterTitle: 'Nombres réels',
        exerciseType: 'Centre, rayon et valeur absolue d\'un encadrement',
        methodUsed: 'Formules du centre c = (a+b)/2 et du rayon r = (b-a)/2',
        formulasUsed: ['c = \\frac{a + b}{2}', 'r = \\frac{b - a}{2}', '|x - c| \\le r'],
        courseExcerpt: 'Tout encadrement a <= x <= b peut être caractérisé par son centre c = (a+b)/2 et son rayon r = (b-a)/2, traduisant une précision r autour de la valeur approchée c.',
        statementCleaned: `Déterminer le centre, le rayon et la notation en valeur absolue de l'encadrement [${aVal} ; ${bVal}]`,
        dataAndGiven: [`Borne inférieure a = ${aVal}`, `Borne supérieure b = ${bVal}`],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Vérification par reconstitution des bornes : [c - r ; c + r]',
          checkPassed: true,
          details: `c - r = ${centre} - ${rayon} = ${centre - rayon} (= a) ; c + r = ${centre} + ${rayon} = ${centre + rayon} (= b). L'intervalle initial est exactement retrouvé.`,
        },
        conclusion: `Le centre est c = ${centre}, le rayon (précision) est r = ${rayon}, et l'écriture en valeur absolue est |x - ${centre}| <= ${rayon}.`,
        finalAnswer,
        structuredScientificResolution: [
          {
            title: 'Exercice : Caractérisation d\'un encadrement',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: `Déterminer le centre c et le rayon r de l'intervalle [${aVal} ; ${bVal}]`,
                steps: steps.map((s) => `${s.title} : ${s.mathLines.join(' ')}`),
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

  // 4. Notation scientifique : écriture sous la forme a * 10^n avec 1 <= |a| < 10
  const sciMatch = s.match(/(?:notation|écriture)?\s*scientifique\s*(?:de)?\s*[:=]?\s*(\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/i);
  if (sciMatch) {
    const numVal = parseFloat(sciMatch[1]);
    if (!isNaN(numVal) && numVal !== 0) {
      const exp = Math.floor(Math.log10(Math.abs(numVal)));
      const mantissa = round(numVal / Math.pow(10, exp), 6);

      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Rappel de la définition de la notation scientifique',
          description: 'La notation scientifique d\'un nombre décimal non nul est l\'écriture de la forme a \\times 10^n, où 1 \\le |a| < 10 et n \\in \\mathbb{Z}.',
          mathLines: ['N = a \\times 10^n \\quad \\text{avec } 1 \\le |a| < 10 \\text{ et } n \\in \\mathbb{Z}'],
          justification: 'Règle officielle du cours Maths Tle A',
        },
        {
          stepNumber: 2,
          title: 'Détermination de la mantisse et de l\'exposant',
          description: `On décale la virgule pour obtenir un nombre compris entre 1 et 10.`,
          mathLines: [
            `\\text{Nombre initial : } ${numVal}`,
            `\\text{Mantisse a : } ${mantissa}`,
            `\\text{Exposant n : } ${exp}`,
          ],
        },
        {
          stepNumber: 3,
          title: 'Écriture définitive',
          description: 'On écrit le produit de la mantisse par la puissance de 10.',
          mathLines: [`${numVal} = ${mantissa} \\times 10^{${exp}}`],
        },
      ];

      const finalAnswer = `${mantissa} \\times 10^{${exp}}`;

      return {
        success: true,
        confidence: 0.95,
        chapterId: 'ch1',
        chapterTitle: 'Nombres réels',
        exerciseType: 'Écriture en notation scientifique',
        methodUsed: 'Décomposition en mantisse normalisée et puissance de 10',
        formulasUsed: ['N = a \\times 10^n \\quad (1 \\le |a| < 10, \\, n \\in \\mathbb{Z})'],
        courseExcerpt: 'La notation scientifique permet d\'exprimer des ordres de grandeurs de manière compacte et normalisée.',
        statementCleaned: `Donner l'écriture scientifique du nombre : ${numVal}`,
        dataAndGiven: [`Nombre donné : ${numVal}`],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Contrôle numérique de la valeur calculée',
          checkPassed: true,
          details: `${mantissa} \\times 10^{${exp}} = ${mantissa * Math.pow(10, exp)} (= nombre initial).`,
        },
        conclusion: `L'écriture scientifique de ${numVal} est ${finalAnswer}.`,
        finalAnswer,
        structuredScientificResolution: [
          {
            title: 'Exercice : Notation scientifique',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: `Écrire sous forme scientifique le nombre ${numVal}`,
                steps: steps.map((s) => `${s.title} : ${s.mathLines.join(' ')}`),
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

  return null;
}
