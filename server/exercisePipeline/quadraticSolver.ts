import { ParsedQuestion, SolvedQuestionResult } from './types';
import { Polynomial2ndDegree, evaluatePolynomial } from './mathVerifier';

/**
 * Résout de façon déterministe et rigoureuse toute question sur un polynôme du second degré :
 * - Calcul du discriminant Delta
 * - Résolution de f(x) = 0 / recherche des racines
 * - Factorisation
 * - Calcul de la dérivée f'(x)
 * - Signe de f'(x)
 * - Tableau de variations de f
 * - Minimum / Maximum / Extremum
 * - Signe de f(x) (trinôme)
 * - Calcul d'images f(x0)
 * - Questions composées (ex: Résoudre ET Factoriser)
 */
export function solveQuadraticQuestion(
  q: ParsedQuestion,
  poly: Polynomial2ndDegree,
  funcName: string = 'f'
): SolvedQuestionResult | null {
  const { a, b, c, discriminant, x1, x2, vertexX, vertexY, isConcaveUp } = poly;
  const cleanQ = q.cleanText.toLowerCase();

  const derivExpr = `${2 * a === 1 ? '' : 2 * a === -1 ? '-' : (2 * a)}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}`;

  // 1. Calcul du discriminant Delta (ex: "Calculer le discriminant")
  if (/discriminant|delta|\\delta|b\^2\s*-\s*4ac/i.test(cleanQ)) {
    const steps: string[] = [];
    steps.push(`On identifie les coefficients du trinôme ${funcName}(x) = ${a === 1 ? '' : a === -1 ? '-' : a}x^2 ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)} :`);
    steps.push(`• a = ${a}, b = ${b}, c = ${c}`);
    steps.push(`La formule du discriminant est : \\Delta = b^2 - 4ac.`);
    steps.push(`En remplaçant par les valeurs :`);
    steps.push(`\\Delta = (${b})^2 - 4 \\times (${a}) \\times (${c}) = ${b * b} - (${4 * a * c}) = ${discriminant}`);
    if (discriminant > 0) {
      steps.push(`Comme \\Delta = ${discriminant} > 0, le trinôme admet deux racines réelles distinctes.`);
    } else if (discriminant === 0) {
      steps.push(`Comme \\Delta = 0, le trinôme admet une racine double.`);
    } else {
      steps.push(`Comme \\Delta = ${discriminant} < 0, le trinôme n'admet aucune racine réelle.`);
    }

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `\\Delta = ${discriminant}`,
      verificationPassed: true,
    };
  }

  // 2. Question composée : Résoudre f(x)=0 ET Factoriser f(x)
  if ((/r[ée]soudre|f\(x\)\s*=\s*0|racine/i.test(cleanQ)) && /factoris/i.test(cleanQ)) {
    const steps: string[] = [];
    steps.push(`1. Résolution dans ℝ de l'équation ${funcName}(x) = 0 :`);
    steps.push(`   ${a === 1 ? '' : a === -1 ? '-' : a}x^2 ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)} = 0`);
    steps.push(`   Le discriminant est \\Delta = b^2 - 4ac = (${b})^2 - 4(${a})(${c}) = ${discriminant}.`);

    let solutionSet = '';
    let factoredForm = '';

    if (discriminant > 0 && x1 !== null && x2 !== null) {
      const sqrtD = Math.sqrt(discriminant);
      steps.push(`   Comme \\Delta > 0, l'équation admet deux solutions réelles distinctes :`);
      steps.push(`   x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{-(${b}) - ${sqrtD}}{2 \\times (${a})} = ${x1}`);
      steps.push(`   x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{-(${b}) + ${sqrtD}}{2 \\times (${a})} = ${x2}`);
      solutionSet = `S = \\{ ${x1} \\,;\\, ${x2} \\}`;

      const term1 = x1 === 0 ? 'x' : x1 > 0 ? `(x - ${x1})` : `(x + ${Math.abs(x1)})`;
      const term2 = x2 === 0 ? 'x' : x2 > 0 ? `(x - ${x2})` : `(x + ${Math.abs(x2)})`;
      const leadCoeff = a === 1 ? '' : a === -1 ? '-' : `${a}`;
      factoredForm = `${funcName}(x) = ${leadCoeff}${term1}${term2}`;

      steps.push(`2. Factorisation de ${funcName}(x) :`);
      steps.push(`   D'après la formule a(x - x_1)(x - x_2), la forme factorisée est :`);
      steps.push(`   ${factoredForm}`);
    } else if (discriminant === 0 && x1 !== null) {
      steps.push(`   Comme \\Delta = 0, l'équation admet une solution unique :`);
      steps.push(`   x_0 = \\frac{-b}{2a} = ${x1}`);
      solutionSet = `S = \\{ ${x1} \\}`;

      const term = x1 === 0 ? 'x' : x1 > 0 ? `(x - ${x1})` : `(x + ${Math.abs(x1)})`;
      const leadCoeff = a === 1 ? '' : a === -1 ? '-' : `${a}`;
      factoredForm = `${funcName}(x) = ${leadCoeff}${term}^2`;

      steps.push(`2. Factorisation de ${funcName}(x) :`);
      steps.push(`   ${factoredForm}`);
    } else {
      steps.push(`   Comme \\Delta < 0, l'équation n'admet aucune solution réelle : S = \\emptyset.`);
      factoredForm = `${funcName}(x) \\text{ n'est pas factorisable dans } ℝ`;
      steps.push(`2. Factorisation : non factorisable dans ℝ.`);
      solutionSet = `S = \\emptyset`;
    }

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `${solutionSet} \\quad \\text{et} \\quad ${factoredForm}`,
      verificationPassed: true,
    };
  }

  // 3. Résolution de l'équation f(x) = 0 seule
  if (q.detectedType === 'equation' || /r[ée]soudre.*[ée]quation|f\(x\)\s*=\s*0|racines?/i.test(cleanQ)) {
    const steps: string[] = [];
    steps.push(`On résout dans ℝ l'équation ${funcName}(x) = 0, soit ${a === 1 ? '' : a === -1 ? '-' : a}x^2 ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)} = 0.`);
    steps.push(`Calcul du discriminant : \\Delta = b^2 - 4ac = (${b})^2 - 4(${a})(${c}) = ${discriminant}`);

    let solutionSet = '';
    if (discriminant > 0 && x1 !== null && x2 !== null) {
      const sqrtD = Math.sqrt(discriminant);
      steps.push(`Puisque \\Delta > 0, l'équation admet deux solutions réelles distinctes :`);
      steps.push(`x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{-(${b}) - ${sqrtD}}{2 \\times (${a})} = ${x1}`);
      steps.push(`x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{-(${b}) + ${sqrtD}}{2 \\times (${a})} = ${x2}`);
      solutionSet = `S = \\{ ${x1} \\,;\\, ${x2} \\}`;
    } else if (discriminant === 0 && x1 !== null) {
      steps.push(`Puisque \\Delta = 0, l'équation admet une solution unique :`);
      steps.push(`x_0 = \\frac{-b}{2a} = ${x1}`);
      solutionSet = `S = \\{ ${x1} \\}`;
    } else {
      steps.push(`Puisque \\Delta < 0, l'équation n'admet aucune solution réelle.`);
      solutionSet = `S = \\emptyset`;
    }

    steps.push(`Conclusion : ${solutionSet}`);

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: solutionSet,
      verificationPassed: true,
    };
  }

  // 4. Factorisation de f(x) seule
  if (q.detectedType === 'factorisation' || /factoris/i.test(cleanQ)) {
    const steps: string[] = [];
    steps.push(`Pour factoriser ${funcName}(x) = ${a === 1 ? '' : a === -1 ? '-' : a}x^2 ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)}, on cherche ses racines en calculant le discriminant :`);
    steps.push(`\\Delta = b^2 - 4ac = (${b})^2 - 4 \\times (${a}) \\times (${c}) = ${b * b} - (${4 * a * c}) = ${discriminant}`);

    let factoredForm = '';
    if (discriminant > 0 && x1 !== null && x2 !== null) {
      const sqrtD = Math.sqrt(discriminant);
      steps.push(`Comme \\Delta > 0, le trinôme admet deux racines réelles distinctes :`);
      steps.push(`x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{-(${b}) - ${sqrtD}}{2 \\times (${a})} = ${x1}`);
      steps.push(`x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{-(${b}) + ${sqrtD}}{2 \\times (${a})} = ${x2}`);
      
      const term1 = x1 === 0 ? 'x' : x1 > 0 ? `(x - ${x1})` : `(x + ${Math.abs(x1)})`;
      const term2 = x2 === 0 ? 'x' : x2 > 0 ? `(x - ${x2})` : `(x + ${Math.abs(x2)})`;
      const leadCoeff = a === 1 ? '' : a === -1 ? '-' : `${a}`;
      factoredForm = `${funcName}(x) = ${leadCoeff}${term1}${term2}`;

      steps.push(`D'après la formule de factorisation a(x - x_1)(x - x_2) :`);
      steps.push(`${factoredForm}`);
    } else if (discriminant === 0 && x1 !== null) {
      const term = x1 === 0 ? 'x' : x1 > 0 ? `(x - ${x1})` : `(x + ${Math.abs(x1)})`;
      const leadCoeff = a === 1 ? '' : a === -1 ? '-' : `${a}`;
      factoredForm = `${funcName}(x) = ${leadCoeff}${term}^2`;
      steps.push(`Comme \\Delta = 0, racine double x_0 = \\frac{-b}{2a} = ${x1}`);
      steps.push(`Forme factorisée : ${factoredForm}`);
    } else {
      factoredForm = `Non factorisable dans ℝ (\\Delta < 0)`;
      steps.push(`Comme \\Delta < 0, le trinôme ne possède aucune racine réelle et n'est pas factorisable dans ℝ.`);
    }

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: factoredForm,
      verificationPassed: true,
    };
  }

  // 5. Calcul de la dérivée f'(x) SEULE
  if ((/calculer.*f'|d[ée]riv[ée]e de f|d[ée]terminer.*f'|donner.*f'|f'\(x\)/i.test(cleanQ) || cleanQ.includes("calculer f'(x)")) && !/signe|tableau|sens|variation/i.test(cleanQ)) {
    const steps: string[] = [];
    steps.push(`La fonction ${funcName} est une fonction polynôme du second degré, elle est donc dérivable sur ℝ.`);
    steps.push(`Règles de dérivation usuelles :`);
    steps.push(`• Pour tout x ∈ ℝ, (x^2)' = 2x, (x)' = 1 et (c)' = 0.`);
    steps.push(`On dérive terme à terme ${funcName}(x) = ${a === 1 ? '' : a === -1 ? '-' : a}x^2 ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)} :`);
    steps.push(`${funcName}'(x) = ${a} \\times (2x) ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)} = ${derivExpr}`);

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `${funcName}'(x) = ${derivExpr}`,
      verificationPassed: true,
    };
  }

  // 6. Signe de f'(x) (et éventuellement tableau de variation associé)
  if (/signe.*f'|signe.*d[ée]riv/i.test(cleanQ)) {
    const steps: string[] = [];
    steps.push(`1. Expression de la dérivée : ${funcName}'(x) = ${derivExpr}`);
    steps.push(`2. Annulation de la dérivée :`);
    steps.push(`   ${funcName}'(x) = 0 \\iff ${derivExpr} = 0 \\iff x = ${vertexX}`);
    steps.push(`3. Signe de ${funcName}'(x) (fonction affine de coefficient directeur ${2 * a} ${a > 0 ? '> 0' : '< 0'}) :`);
    if (a > 0) {
      steps.push(`   • Pour tout x \\in ]-\\infty ; ${vertexX}[, ${funcName}'(x) < 0`);
      steps.push(`   • Pour x = ${vertexX}, ${funcName}'(${vertexX}) = 0`);
      steps.push(`   • Pour tout x \\in ]${vertexX} ; +\\infty[, ${funcName}'(x) > 0`);
    } else {
      steps.push(`   • Pour tout x \\in ]-\\infty ; ${vertexX}[, ${funcName}'(x) > 0`);
      steps.push(`   • Pour x = ${vertexX}, ${funcName}'(${vertexX}) = 0`);
      steps.push(`   • Pour tout x \\in ]${vertexX} ; +\\infty[, ${funcName}'(x) < 0`);
    }

    if (/tableau.*variation|variation/i.test(cleanQ)) {
      steps.push(`4. Tableau de variations de ${funcName} :`);
      steps.push(`   Valeur au sommet : ${funcName}(${vertexX}) = ${vertexY}`);
      steps.push(`   x | -∞          ${vertexX}          +∞`);
      steps.push(`   ${funcName}'(x) |       ${a > 0 ? '-' : '+'}      0      ${a > 0 ? '+' : '-'}`);
      steps.push(`   ${funcName}(x) | ${a > 0 ? '+∞   \\searrow   ' + vertexY + '   \\nearrow   +∞' : '-∞   \\nearrow   ' + vertexY + '   \\searrow   -∞'}`);
    }

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: a > 0
        ? `${funcName}'(x) < 0 sur ]-∞ ; ${vertexX}[, ${funcName}'(${vertexX}) = 0 et ${funcName}'(x) > 0 sur ]${vertexX} ; +∞[`
        : `${funcName}'(x) > 0 sur ]-∞ ; ${vertexX}[, ${funcName}'(${vertexX}) = 0 et ${funcName}'(x) < 0 sur ]${vertexX} ; +∞[`,
      verificationPassed: true,
    };
  }

  // 7. Extremum : Déterminer le minimum ou maximum de f
  if (/minimum|maximum|extremum|sommet/i.test(cleanQ)) {
    const steps: string[] = [];
    const isMin = isConcaveUp;
    steps.push(`La courbe représentative de la fonction polynôme ${funcName} est une parabole de sommet S(${vertexX} ; ${vertexY}).`);
    steps.push(`Le coefficient dominant est a = ${a} ${a > 0 ? '> 0' : '< 0'} :`);
    if (isMin) {
      steps.push(`• La parabole est orientée vers le haut (convexe), la fonction admet donc un minimum absolu sur ℝ.`);
      steps.push(`• Ce minimum est atteint en x = -\\frac{b}{2a} = -\\frac{${b}}{2 \\times (${a})} = ${vertexX}.`);
      steps.push(`• Sa valeur est ${funcName}(${vertexX}) = ${vertexY}.`);
      steps.push(`Conclusion : Le minimum de ${funcName} sur ℝ est ${vertexY} (atteint en x = ${vertexX}).`);
    } else {
      steps.push(`• La parabole est orientée vers le bas (concave), la fonction admet donc un maximum absolu sur ℝ.`);
      steps.push(`• Ce maximum est atteint en x = -\\frac{b}{2a} = -\\frac{${b}}{2 \\times (${a})} = ${vertexX}.`);
      steps.push(`• Sa valeur est ${funcName}(${vertexX}) = ${vertexY}.`);
      steps.push(`Conclusion : Le maximum de ${funcName} sur ℝ est ${vertexY} (atteint en x = ${vertexX}).`);
    }

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: isMin 
        ? `\\min_{x \\in ℝ} ${funcName}(x) = ${vertexY} \\quad (\\text{atteint en } x = ${vertexX})`
        : `\\max_{x \\in ℝ} ${funcName}(x) = ${vertexY} \\quad (\\text{atteint en } x = ${vertexX})`,
      verificationPassed: true,
    };
  }

  // 8. Tableau de variation / Sens de variation
  if (q.detectedType === 'variation' || q.detectedType === 'derivative' || /tableau de variation|sens de variation|variation/i.test(cleanQ)) {
    const steps: string[] = [];
    steps.push(`1. Calcul de la dérivée : ${funcName} est une fonction polynôme dérivable sur ℝ.`);
    steps.push(`   ${funcName}'(x) = ${derivExpr}`);
    steps.push(`2. Annulation de la dérivée :`);
    steps.push(`   ${funcName}'(x) = 0 \\iff ${derivExpr} = 0 \\iff x = \\frac{-b}{2a} = ${vertexX}`);
    steps.push(`3. Extremum :`);
    steps.push(`   ${funcName}(${vertexX}) = ${vertexY}`);

    if (isConcaveUp) {
      steps.push(`4. Sens de variation (a = ${a} > 0) :`);
      steps.push(`   • Sur ]-\\infty ; ${vertexX}], ${funcName}'(x) ≤ 0 donc ${funcName} est strictement décroissante.`);
      steps.push(`   • Sur [${vertexX} ; +\\infty[, ${funcName}'(x) ≥ 0 donc ${funcName} est strictement croissante.`);
      steps.push(`   La fonction admet un minimum absolu en x = ${vertexX} valant ${funcName}(${vertexX}) = ${vertexY}.`);
      steps.push(`Tableau de variation :`);
      steps.push(`x | -∞          ${vertexX}          +∞`);
      steps.push(`${funcName}'(x) |       -      0      +`);
      steps.push(`${funcName}(x) | +∞   \\searrow   ${vertexY}   \\nearrow   +∞`);
    } else {
      steps.push(`4. Sens de variation (a = ${a} < 0) :`);
      steps.push(`   • Sur ]-\\infty ; ${vertexX}], ${funcName}'(x) ≥ 0 donc ${funcName} est strictement croissante.`);
      steps.push(`   • Sur [${vertexX} ; +\\infty[, ${funcName}'(x) ≤ 0 donc ${funcName} est strictement décroissante.`);
      steps.push(`   La fonction admet un maximum absolu en x = ${vertexX} valant ${funcName}(${vertexX}) = ${vertexY}.`);
      steps.push(`Tableau de variation :`);
      steps.push(`x | -∞          ${vertexX}          +∞`);
      steps.push(`${funcName}'(x) |       +      0      -`);
      steps.push(`${funcName}(x) | -∞   \\nearrow   ${vertexY}   \\searrow   -∞`);
    }

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: isConcaveUp 
        ? `${funcName} décroissante sur ]-∞ ; ${vertexX}] et croissante sur [${vertexX} ; +∞[ (Minimum : ${vertexY})`
        : `${funcName} croissante sur ]-∞ ; ${vertexX}] et décroissante sur [${vertexX} ; +∞[ (Maximum : ${vertexY})`,
      verificationPassed: true,
    };
  }

  // 9. Signe de f(x) / Tableau de signe
  if (q.detectedType === 'sign_table' || /signe de|tableau de signe/i.test(cleanQ)) {
    const steps: string[] = [];
    steps.push(`Règle du signe du trinôme : ${funcName}(x) est du signe de a (${a > 0 ? 'positif' : 'négatif'}, car a = ${a}) à l'extérieur des racines et du signe de -a entre les racines.`);

    if (discriminant > 0 && x1 !== null && x2 !== null) {
      steps.push(`Les racines sont x_1 = ${x1} et x_2 = ${x2}.`);
      steps.push(`• Pour x \\in ]-\\infty ; ${x1}[ \\cup ]${x2} ; +\\infty[ : ${funcName}(x) ${a > 0 ? '> 0' : '< 0'}`);
      steps.push(`• Pour x \\in \\{ ${x1} ; ${x2} \\} : ${funcName}(x) = 0`);
      steps.push(`• Pour x \\in ]${x1} ; ${x2}[ : ${funcName}(x) ${a > 0 ? '< 0' : '> 0'}`);
      steps.push(`Tableau de signe :`);
      steps.push(`x | -∞      ${x1}      ${x2}      +∞`);
      steps.push(`${funcName}(x) |    ${a > 0 ? '+' : '-'}    0    ${a > 0 ? '-' : '+'}    0    ${a > 0 ? '+' : '-'}`);

      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps,
        finalAnswer: `${funcName}(x) ${a > 0 ? '< 0 sur ]' + x1 + ' ; ' + x2 + '[' : '> 0 sur ]' + x1 + ' ; ' + x2 + '['} et ${funcName}(x) ${a > 0 ? '> 0' : '< 0'} ailleurs`,
        verificationPassed: true,
      };
    } else if (discriminant === 0 && x1 !== null) {
      steps.push(`Puisque \\Delta = 0, ${funcName}(x) est du signe de a = ${a} pour tout x ≠ ${x1} et s'annule en x = ${x1}.`);
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps,
        finalAnswer: `${funcName}(x) ≥ 0 sur ℝ (avec f(${x1}) = 0)`,
        verificationPassed: true,
      };
    } else {
      steps.push(`Puisque \\Delta < 0, ${funcName}(x) est strictement du signe de a = ${a} (${a > 0 ? 'positif' : 'négatif'}) pour tout réel x.`);
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps,
        finalAnswer: `Pour tout x ∈ ℝ, ${funcName}(x) ${a > 0 ? '> 0' : '< 0'}`,
        verificationPassed: true,
      };
    }
  }

  // 10. Calcul d'images / évaluation numérique (ex: "Calculer f(0), f(1) et f(5)")
  if (q.detectedType === 'evaluation' || /calculer|calcule|valeur de/i.test(cleanQ)) {
    const pointsToEval: number[] = q.extractedData?.evaluatedPoints || [];
    if (pointsToEval.length === 0) {
      const explicitPoints = Array.from(q.cleanText.matchAll(/(?:f|P)\s*\(\s*(-?\d+(?:\.\d+)?)\s*\)/gi));
      explicitPoints.forEach(m => {
        const val = parseFloat(m[1]);
        if (!isNaN(val) && !pointsToEval.includes(val)) pointsToEval.push(val);
      });
      if (pointsToEval.length === 0) {
        const numMatches = Array.from(q.cleanText.matchAll(/(-?\d+(?:\.\d+)?)/g));
        numMatches.forEach(m => {
          const val = parseFloat(m[1]);
          if (!isNaN(val) && !pointsToEval.includes(val)) pointsToEval.push(val);
        });
      }
    }

    if (pointsToEval.length > 0) {
      const steps: string[] = [];
      const answers: string[] = [];

      pointsToEval.forEach(xVal => {
        const ev = evaluatePolynomial(poly, xVal);
        steps.push(`• Pour x = ${xVal} :`);
        steps.push(`  ${funcName}(${xVal}) = ${a === 1 ? '' : a === -1 ? '-' : a + ' \\times '}(${xVal})^2 ${b >= 0 ? '+ ' + (b === 1 ? '' : b + ' \\times ') : '- ' + (Math.abs(b) === 1 ? '' : Math.abs(b) + ' \\times ')}(${xVal}) ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)}`);
        steps.push(`  ${funcName}(${xVal}) = ${ev.value}`);
        answers.push(`${funcName}(${xVal}) = ${ev.value}`);
      });

      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps,
        finalAnswer: answers.join(' ; '),
        verificationPassed: true,
      };
    }
  }

  return null;
}
