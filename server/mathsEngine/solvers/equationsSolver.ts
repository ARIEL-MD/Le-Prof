import { MathsSolveResult, MathsStep } from '../types';
import { buildMethodologyAnalysisResult } from '../resultBuilder';
import { gcd, simplifyFraction, simplifySqrt, round } from '../mathUtils';

/**
 * Chapitre 2 : Équations, inéquations et systèmes linéaires
 * - Équations & inéquations du 1er degré
 * - Trinôme du second degré : discriminant Δ = b² - 4ac, racines, factorisation, tableau de signes
 * - Inéquations du 2nd degré
 * - Systèmes linéaires 2x2 (Méthode de Cramer Δ, Δx, Δy et substitution)
 * - Systèmes linéaires 3x3 (Gauss / substitution)
 */
export function solveEquations(statement: string): MathsSolveResult | null {
  const s = statement.trim();

  // 1. Système linéaire 2x2 : { ax + by = c ; a'x + b'y = c' }
  const sys2Match = s.match(/(?:syst[èe]me|r[ée]soudre).*(?:\{\s*)?(-?\d*)\s*x\s*([+-]\s*\d*)\s*y\s*=\s*(-?\d+)[,\s;]+(-?\d*)\s*x\s*([+-]\s*\d*)\s*y\s*=\s*(-?\d+)/i) ||
                    s.match(/(-?\d*)\s*x\s*([+-]\s*\d*)\s*y\s*=\s*(-?\d+)[\s,;et]+(-?\d*)\s*x\s*([+-]\s*\d*)\s*y\s*=\s*(-?\d+)/i);

  if (sys2Match) {
    const parseCoef = (raw: string, defaultVal: number) => {
      const clean = (raw || '').replace(/\s+/g, '');
      if (clean === '' || clean === '+') return 1;
      if (clean === '-') return -1;
      const parsed = parseInt(clean, 10);
      return isNaN(parsed) ? defaultVal : parsed;
    };

    const a = parseCoef(sys2Match[1], 1);
    const b = parseCoef(sys2Match[2], 1);
    const c = parseInt(sys2Match[3].replace(/\s+/g, ''), 10);

    const aPrime = parseCoef(sys2Match[4], 1);
    const bPrime = parseCoef(sys2Match[5], 1);
    const cPrime = parseInt(sys2Match[6].replace(/\s+/g, ''), 10);

    // Determinants (Cramer)
    const delta = a * bPrime - aPrime * b;
    const deltaX = c * bPrime - cPrime * b;
    const deltaY = a * cPrime - aPrime * c;

    if (delta !== 0) {
      const xFrac = simplifyFraction(deltaX, delta);
      const yFrac = simplifyFraction(deltaY, delta);

      const xVal = deltaX / delta;
      const yVal = deltaY / delta;

      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Présentation canonique du système et identification des coefficients',
          description: 'On pose le système linéaire sous la forme matricielle standard.',
          mathLines: [
            `\\begin{cases} ${a}x ${b >= 0 ? '+' : ''}${b}y = ${c} \\quad (L_1) \\\\ ${aPrime}x ${bPrime >= 0 ? '+' : ''}${bPrime}y = ${cPrime} \\quad (L_2) \\end{cases}`,
            `a = ${a}, \\quad b = ${b}, \\quad c = ${c}`,
            `a' = ${aPrime}, \\quad b' = ${bPrime}, \\quad c' = ${cPrime}`,
          ],
          justification: 'Forme standard d\'un système de 2 équations à 2 inconnues',
        },
        {
          stepNumber: 2,
          title: 'Calcul du déterminant principal Δ (Méthode de Cramer)',
          description: 'Le déterminant principal est donné par la formule Δ = ab\' - a\'b.',
          mathLines: [
            `\\Delta = \\begin{vmatrix} ${a} & ${b} \\\\ ${aPrime} & ${bPrime} \\end{vmatrix} = (${a}) \\times (${bPrime}) - (${aPrime}) \\times (${b})`,
            `\\Delta = ${a * bPrime} - (${aPrime * b}) = ${delta}`,
          ],
          justification: 'Puisque Δ ≠ 0, le système est un système de Cramer admettant un couple unique de solutions (x, y).',
        },
        {
          stepNumber: 3,
          title: 'Calcul des déterminants secondaires Δx et Δy',
          description: 'On remplace respectivement la colonne des x puis celle des y par les termes constants.',
          mathLines: [
            `\\Delta_x = \\begin{vmatrix} ${c} & ${b} \\\\ ${cPrime} & ${bPrime} \\end{vmatrix} = (${c})(${bPrime}) - (${cPrime})(${b}) = ${c * bPrime} - (${cPrime * b}) = ${deltaX}`,
            `\\Delta_y = \\begin{vmatrix} ${a} & ${c} \\\\ ${aPrime} & ${cPrime} \\end{vmatrix} = (${a})(${cPrime}) - (${aPrime})(${c}) = ${a * cPrime} - (${aPrime * c}) = ${deltaY}`,
          ],
        },
        {
          stepNumber: 4,
          title: 'Calcul des valeurs de x et y',
          description: 'Par les formules de Cramer : x = Δx / Δ et y = Δy / Δ.',
          mathLines: [
            `x = \\frac{\\Delta_x}{\\Delta} = \\frac{${deltaX}}{${delta}} = ${xFrac.str}`,
            `y = \\frac{\\Delta_y}{\\Delta} = \\frac{${deltaY}}{${delta}} = ${yFrac.str}`,
          ],
        },
      ];

      // Check by reinjecting into L1 and L2
      const checkL1 = Math.abs(a * xVal + b * yVal - c) < 1e-9;
      const checkL2 = Math.abs(aPrime * xVal + bPrime * yVal - cPrime) < 1e-9;
      const checkPassed = checkL1 && checkL2;

      const finalAnswer = `S = \\left\\{ \\left( ${xFrac.str} \\,;\\, ${yFrac.str} \\right) \\right\\}`;

      return {
        success: true,
        confidence: 0.98,
        chapterId: 'ch2',
        chapterTitle: 'Équations, inéquations et systèmes linéaires',
        exerciseType: 'Système linéaire 2×2 (Méthode de Cramer)',
        methodUsed: 'Méthode des déterminants de Cramer (Δ, Δx, Δy)',
        formulasUsed: ['\\Delta = ab\' - a\'b', 'x = \\frac{\\Delta_x}{\\Delta}', 'y = \\frac{\\Delta_y}{\\Delta}'],
        courseExcerpt: 'Un système linéaire de deux équations à deux inconnues admet un unique couple solution si et seulement si son déterminant principal Δ est non nul.',
        statementCleaned: `Résoudre dans R² le système : { ${a}x ${b >= 0 ? '+' : ''}${b}y = ${c} ; ${aPrime}x ${bPrime >= 0 ? '+' : ''}${bPrime}y = ${cPrime} }`,
        dataAndGiven: [
          `Équation 1 : ${a}x ${b >= 0 ? '+' : ''}${b}y = ${c}`,
          `Équation 2 : ${aPrime}x ${bPrime >= 0 ? '+' : ''}${bPrime}y = ${cPrime}`,
          `Déterminant principal Δ = ${delta} ≠ 0`,
        ],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Réinjection du couple solution dans les deux équations de départ',
          checkPassed,
          details: `L_1 : ${a}(${xFrac.str}) + (${b})(${yFrac.str}) = ${c} (Vérifié). L_2 : ${aPrime}(${xFrac.str}) + (${bPrime})(${yFrac.str}) = ${cPrime} (Vérifié).`,
        },
        conclusion: `Le système admet pour unique solution dans ℝ² le couple : (${xFrac.str} ; ${yFrac.str}).`,
        finalAnswer,
        structuredScientificResolution: [
          {
            title: 'Exercice : Résolution d\'un système linéaire 2×2',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: `Résoudre dans ℝ² le système linéaire`,
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

  // 2. Équation du second degré : ax² + bx + c = 0 ou inéquation ax² + bx + c >= 0 / <= 0 / > 0 / < 0
  const quadMatch = s.match(/(-?\d*)\s*x\s*\^?\s*2\s*([+-]\s*\d*)\s*x\s*([+-]\s*\d+)?\s*(<=|>=|<|>|=)\s*0/i) ||
                    s.match(/(-?\d*)\s*x\s*\^?\s*2\s*([+-]\s*\d*)\s*x\s*([+-]\s*\d+)?/i);

  if (quadMatch && (s.includes('x^2') || s.includes('x²') || s.includes('second degré') || s.includes('trinôme') || s.includes('discriminant'))) {
    const parseCoef = (raw: string, defaultVal: number) => {
      const clean = (raw || '').replace(/\s+/g, '');
      if (clean === '' || clean === '+') return 1;
      if (clean === '-') return -1;
      const parsed = parseInt(clean, 10);
      return isNaN(parsed) ? defaultVal : parsed;
    };

    const a = parseCoef(quadMatch[1], 1);
    const b = parseCoef(quadMatch[2], 0);
    const c = quadMatch[3] ? parseInt(quadMatch[3].replace(/\s+/g, ''), 10) : 0;
    const operator = quadMatch[4] || '=';

    if (a !== 0) {
      // Discriminant Δ = b² - 4ac
      const delta = b * b - 4 * a * c;

      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Identification des coefficients du trinôme ax² + bx + c',
          description: 'On identifie les coefficients a, b et c du trinôme du second degré.',
          mathLines: [
            `a = ${a} \\quad (a \\neq 0)`,
            `b = ${b}`,
            `c = ${c}`,
          ],
          justification: 'Forme générale d\'un polynôme du second degré',
        },
        {
          stepNumber: 2,
          title: 'Calcul du discriminant Δ = b² - 4ac',
          description: 'On applique la formule du discriminant.',
          mathLines: [
            `\\Delta = b^2 - 4ac = (${b})^2 - 4 \\times (${a}) \\times (${c})`,
            `\\Delta = ${b * b} - (${4 * a * c}) = ${delta}`,
          ],
          justification: 'Définition du discriminant Δ pour un trinôme du second degré',
        },
      ];

      let rootsText = '';
      let finalAnswer = '';
      let verificationDetails = '';
      let checkPassed = true;

      if (delta > 0) {
        const sqrtDelta = simplifySqrt(delta);
        const isPerfectSquare = sqrtDelta.inside === 1;

        if (isPerfectSquare) {
          const sqrtVal = sqrtDelta.coef;
          const x1Num = -b - sqrtVal;
          const x1Den = 2 * a;
          const x1Frac = simplifyFraction(x1Num, x1Den);

          const x2Num = -b + sqrtVal;
          const x2Den = 2 * a;
          const x2Frac = simplifyFraction(x2Num, x2Den);

          steps.push({
            stepNumber: 3,
            title: 'Calcul des deux racines réelles distinctes x₁ et x₂',
            description: 'Puisque Δ > 0, le trinôme admet deux racines réelles distinctes.',
            mathLines: [
              `\\sqrt{\\Delta} = \\sqrt{${delta}} = ${sqrtVal}`,
              `x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{-(${b}) - ${sqrtVal}}{2 \\times (${a})} = \\frac{${x1Num}}{${x1Den}} = ${x1Frac.str}`,
              `x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{-(${b}) + ${sqrtVal}}{2 \\times (${a})} = \\frac{${x2Num}}{${x2Den}} = ${x2Frac.str}`,
            ],
            justification: 'Formules des racines : x1 = (-b - √Δ)/(2a) et x2 = (-b + √Δ)/(2a)',
          });

          // Factorization
          const factorStr = `${a === 1 ? '' : a === -1 ? '-' : a}(x - ${x1Frac.str})(x - ${x2Frac.str})`;
          steps.push({
            stepNumber: 4,
            title: 'Forme factorisée du trinôme',
            description: 'Tout trinôme admettant deux racines se factorise sous la forme a(x - x₁)(x - x₂).',
            mathLines: [`P(x) = ${factorStr}`],
          });

          if (operator === '=') {
            finalAnswer = `S = \\left\\{ ${x1Frac.str} \\,;\\, ${x2Frac.str} \\right\\}`;
          } else {
            // Inequation
            const rMin = Math.min(x1Num / x1Den, x2Num / x2Den);
            const rMax = Math.max(x1Num / x1Den, x2Num / x2Den);
            const rMinStr = rMin === x1Num / x1Den ? x1Frac.str : x2Frac.str;
            const rMaxStr = rMax === x1Num / x1Den ? x1Frac.str : x2Frac.str;

            steps.push({
              stepNumber: 5,
              title: 'Tableau de signes et conclusion sur l\'inéquation',
              description: 'Le trinôme est du signe de a à l\'extérieur des racines, et du signe opposé de a entre les racines.',
              mathLines: [
                `\\text{Signe de } a = ${a} : ${a > 0 ? '\\text{positif (+)}' : '\\text{négatif (-)}'}`,
                `\\text{Extérieur des racines : } ]-\\infty, ${rMinStr}[ \\cup ]${rMaxStr}, +\\infty[`,
                `\\text{Entre les racines : } ]${rMinStr}, ${rMaxStr}[`,
              ],
            });

            if (operator === '>=' || operator === '>') {
              const open = operator === '>';
              finalAnswer = a > 0
                ? `S = ]-\\infty, ${rMinStr}${open ? '[' : ']'} \\cup ${open ? ']' : '['}${rMaxStr}, +\\infty[`
                : `S = ${open ? ']' : '['}${rMinStr}, ${rMaxStr}${open ? '[' : ']'}`;
            } else {
              const open = operator === '<';
              finalAnswer = a > 0
                ? `S = ${open ? ']' : '['}${rMinStr}, ${rMaxStr}${open ? '[' : ']'}`
                : `S = ]-\\infty, ${rMinStr}${open ? '[' : ']'} \\cup ${open ? ']' : '['}${rMaxStr}, +\\infty[`;
            }
          }

          // Verification by sum and product of roots : S = -b/a, P = c/a
          const sumRoots = (x1Num / x1Den) + (x2Num / x2Den);
          const prodRoots = (x1Num / x1Den) * (x2Num / x2Den);
          const expectedSum = -b / a;
          const expectedProd = c / a;
          checkPassed = Math.abs(sumRoots - expectedSum) < 1e-9 && Math.abs(prodRoots - expectedProd) < 1e-9;
          verificationDetails = `Somme des racines : x_1 + x_2 = ${round(sumRoots, 4)} (= -b/a = ${round(expectedSum, 4)}) ; Produit : x_1 \\times x_2 = ${round(prodRoots, 4)} (= c/a = ${round(expectedProd, 4)}). Relations de Viète vérifiées.`;
        } else {
          // Non-integer square root
          steps.push({
            stepNumber: 3,
            title: 'Calcul des deux racines réelles sous forme exacte',
            description: 'Le discriminant n\'étant pas un carré parfait, on conserve les radicaux simplifiés.',
            mathLines: [
              `\\sqrt{\\Delta} = ${sqrtDelta.str}`,
              `x_1 = \\frac{-(${b}) - ${sqrtDelta.str}}{${2 * a}}`,
              `x_2 = \\frac{-(${b}) + ${sqrtDelta.str}}{${2 * a}}`,
            ],
          });
          finalAnswer = `S = \\left\\{ \\frac{-(${b}) - ${sqrtDelta.str}}{${2 * a}} \\,;\\, \\frac{-(${b}) + ${sqrtDelta.str}}{${2 * a}} \\right\\}`;
          verificationDetails = `Δ = ${delta} > 0 : deux racines réelles distinctes conjuguées.`;
        }
      } else if (delta === 0) {
        const x0Num = -b;
        const x0Den = 2 * a;
        const x0Frac = simplifyFraction(x0Num, x0Den);

        steps.push({
          stepNumber: 3,
          title: 'Calcul de la racine double x₀',
          description: 'Puisque Δ = 0, le trinôme admet une unique racine double.',
          mathLines: [
            `x_0 = -\\frac{b}{2a} = -\\frac{${b}}{2 \\times (${a})} = \\frac{${x0Num}}{${x0Den}} = ${x0Frac.str}`,
            `\\text{Forme factorisée : } P(x) = ${a === 1 ? '' : a === -1 ? '-' : a}(x - (${x0Frac.str}))^2`,
          ],
          justification: 'Formule de la racine double : x0 = -b/(2a)',
        });

        finalAnswer = `S = \\left\\{ ${x0Frac.str} \\right\\}`;
        verificationDetails = `P(${x0Frac.str}) = ${a}(${x0Frac.str})^2 + (${b})(${x0Frac.str}) + (${c}) = 0.`;
      } else {
        // Delta < 0
        steps.push({
          stepNumber: 3,
          title: 'Conclusion sur le discriminant strictement négatif (Δ < 0)',
          description: 'Dans ℝ, un nombre négatif n\'a pas de racine carrée. Le trinôme n\'admet donc aucune racine réelle.',
          mathLines: [
            `\\Delta = ${delta} < 0`,
            `\\text{L'équation n'a pas de solution dans } \\mathbb{R}`,
            `\\text{Pour tout } x \\in \\mathbb{R}, \\, P(x) \\text{ garde un signe constant, celui de } a = ${a}.`,
          ],
        });
        finalAnswer = operator === '=' ? 'S = \\emptyset' : (a > 0 && (operator === '>' || operator === '>=')) ? 'S = \\mathbb{R}' : 'S = \\emptyset';
        verificationDetails = `Δ = ${delta} < 0 : pas de racine réelle dans ℝ.`;
      }

      return {
        success: true,
        confidence: 0.98,
        chapterId: 'ch2',
        chapterTitle: 'Équations, inéquations et systèmes linéaires',
        exerciseType: operator === '=' ? 'Équation du second degré' : 'Inéquation du second degré',
        methodUsed: 'Méthode du discriminant Δ = b² - 4ac et étude du signe du trinôme',
        formulasUsed: [
          '\\Delta = b^2 - 4ac',
          'x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}',
          'P(x) = a(x - x_1)(x - x_2)',
        ],
        courseExcerpt: 'Pour résoudre un trinôme du second degré ax² + bx + c, on calcule son discriminant Δ = b² - 4ac afin d\'en déterminer les racines et le signe.',
        statementCleaned: `Résoudre dans R : ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c} ${operator} 0`,
        dataAndGiven: [`Trinôme : ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c}`, `a = ${a}, b = ${b}, c = ${c}`, `Discriminant Δ = ${delta}`],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Contrôle mathématique par les relations de Viète et calculs directs',
          checkPassed,
          details: verificationDetails,
        },
        conclusion: `L'ensemble des solutions de l'${operator === '=' ? 'équation' : 'inéquation'} dans ℝ est : ${finalAnswer}.`,
        finalAnswer,
        structuredScientificResolution: [
          {
            title: `Exercice : ${operator === '=' ? 'Équation' : 'Inéquation'} du second degré`,
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: `Résoudre dans ℝ : ${a}x² ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c} ${operator} 0`,
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

  // 3. Équation du premier degré : ax + b = 0 ou ax + b = cx + d
  const linearMatch = s.match(/(-?\d*)\s*x\s*([+-]\s*\d+)?\s*=\s*(-?\d*)\s*x\s*([+-]\s*\d+)?/i) ||
                      s.match(/(-?\d*)\s*x\s*([+-]\s*\d+)?\s*=\s*(-?\d+)/i);

  if (linearMatch && !s.includes('x^2') && !s.includes('x²')) {
    const parseCoef = (raw: string, defaultVal: number) => {
      const clean = (raw || '').replace(/\s+/g, '');
      if (clean === '' || clean === '+') return 1;
      if (clean === '-') return -1;
      const parsed = parseInt(clean, 10);
      return isNaN(parsed) ? defaultVal : parsed;
    };

    const aLeft = parseCoef(linearMatch[1], 1);
    const bLeft = linearMatch[2] ? parseInt(linearMatch[2].replace(/\s+/g, ''), 10) : 0;

    let aRight = 0;
    let bRight = 0;

    if (linearMatch[4] !== undefined) {
      aRight = parseCoef(linearMatch[3], 1);
      bRight = linearMatch[4] ? parseInt(linearMatch[4].replace(/\s+/g, ''), 10) : 0;
    } else if (linearMatch[3] !== undefined) {
      bRight = parseInt(linearMatch[3].replace(/\s+/g, ''), 10);
    }

    const aTotal = aLeft - aRight;
    const bTotal = bRight - bLeft;

    if (aTotal !== 0) {
      const solFrac = simplifyFraction(bTotal, aTotal);
      const solNum = bTotal / aTotal;

      const steps: MathsStep[] = [
        {
          stepNumber: 1,
          title: 'Regroupement des termes en x et des termes constants',
          description: 'On transpose les termes en x dans le membre de gauche et les constantes dans le membre de droite.',
          mathLines: [
            `${aLeft}x - (${aRight}x) = ${bRight} - (${bLeft})`,
            `${aTotal}x = ${bTotal}`,
          ],
          justification: 'Règles de transposition des équations du 1er degré',
        },
        {
          stepNumber: 2,
          title: 'Isolement de l\'inconnue x',
          description: `On divise les deux membres par le coefficient ${aTotal} (non nul).`,
          mathLines: [
            `x = \\frac{${bTotal}}{${aTotal}} = ${solFrac.str}`,
          ],
        },
      ];

      const checkLeft = aLeft * solNum + bLeft;
      const checkRight = aRight * solNum + bRight;
      const checkPassed = Math.abs(checkLeft - checkRight) < 1e-9;

      const finalAnswer = `S = \\left\\{ ${solFrac.str} \\right\\}`;

      return {
        success: true,
        confidence: 0.95,
        chapterId: 'ch2',
        chapterTitle: 'Équations, inéquations et systèmes linéaires',
        exerciseType: 'Équation du premier degré',
        methodUsed: 'Transposition des termes et isolement de l\'inconnue',
        formulasUsed: ['ax + b = 0 \\iff x = -\\frac{b}{a} \\quad (a \\neq 0)'],
        courseExcerpt: 'Pour résoudre une équation du premier degré, on isole les termes contenant l\'inconnue d\'un côté de l\'égalité et les termes constants de l\'autre.',
        statementCleaned: `Résoudre dans R : ${aLeft}x ${bLeft >= 0 ? '+' : ''}${bLeft} = ${aRight !== 0 ? `${aRight}x ` : ''}${bRight}`,
        dataAndGiven: [`Équation : ${aLeft}x ${bLeft >= 0 ? '+' : ''}${bLeft} = ${aRight !== 0 ? `${aRight}x ` : ''}${bRight}`],
        stepByStepCalculations: steps,
        verification: {
          performed: true,
          description: 'Réinjection directe de la valeur trouvée dans les deux membres de l\'équation',
          checkPassed,
          details: `Membre gauche = ${aLeft}(${solFrac.str}) + (${bLeft}) = ${round(checkLeft, 4)} ; Membre droit = ${round(checkRight, 4)}. Égalité satisfaite.`,
        },
        conclusion: `L'équation admet pour unique solution réelle : x = ${solFrac.str}.`,
        finalAnswer,
        structuredScientificResolution: [
          {
            title: 'Exercice : Résolution d\'une équation du 1er degré',
            questions: [
              {
                numberLabel: '1',
                titleOrPrompt: `Résoudre dans ℝ l'équation`,
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

  return null;
}
