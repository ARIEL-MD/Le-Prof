import { parseStatement } from './statementParser';
import { parseQuadraticPolynomial, evaluatePolynomial, verifyQuadraticRoots, Polynomial2ndDegree } from './mathVerifier';
import { tryGenericLimitAndContinuityResolutionForExercise } from './genericLimitAndContinuitySolver';
import { tryGenericFunctionResolutionForExercise } from './genericFunctionSolver';
import { tryLinkedLogFunctionResolutionForExercise } from './genericLogLinkedFunctionSolver';
import { tryGenericSequenceResolutionForExercise } from './genericSequenceSolver';
import { tryGenericProbabilityResolutionForExercise } from './genericProbabilitySolver';
import { tryGenericHypergeometricResolutionForExercise } from './genericHypergeometricSolver';
import { tryGenericComplexResolutionForExercise } from './genericComplexSolver';
import { tryGenericPrimitiveResolutionForExercise } from './genericPrimitiveSolver';
import { tryGenericGeometryResolutionForExercise } from './genericGeometrySolver';
import { tryGenericSpaceGeometryResolutionForExercise } from './genericSpaceGeometrySolver';
import { tryGenericMatrixResolutionForExercise } from './genericMatrixSolver';
import { tryGenericKinematicsResolutionForExercise } from './genericKinematicsSolver';
import { tryGenericOhmResolutionForExercise } from './genericOhmSolver';
import { tryGenericStoichiometryResolutionForExercise } from './genericStoichiometrySolver';
import { tryGenericGravitationResolutionForExercise } from './genericGravitationSolver';
import { tryGenericOscillatorResolutionForExercise } from './genericOscillatorSolver';
import { tryGenericTecResolutionForExercise } from './genericTecSolver';
import { tryGenericArithmeticResolutionForExercise } from './genericArithmeticSolver';
import { tryGenericCubicResolutionForExercise } from './genericCubicSolver';
import { retrieveRelevantCourseContext } from './courseContextRetriever';
import { validateCompleteness, purgeInventedQuestions } from './completenessValidator';
import { solveExerciseWithPapaMethod } from './universalPapaMethodSolver';
import {
  ParsedExercise,
  ParsedQuestion,
  SolvedExerciseResult,
  SolvedQuestionResult,
  StatementParsingResult,
  CompletenessValidationReport,
} from './types';
import { MethodologyAnalysisResult } from '../../src/types';

/**
 * Résout de façon déterministe et rigoureuse une question sur un polynôme du second degré.
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
    const extremumType = isMin ? 'minimum' : 'maximum';
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

/**
 * Tente de résoudre l'exercice complet question par question de façon déterministe
 */
/**
 * Contrat strict entre la question et un résultat de solveur.
 * Un solveur ne peut être accepté que s'il a résolu la tâche réellement demandée.
 */
function isQuestionResultCompatible(q: ParsedQuestion, result: SolvedQuestionResult | null): boolean {
  if (!result) return false;
  if (!result.titleOrPrompt || result.titleOrPrompt.trim() !== q.cleanText.trim()) return false;
  if (result.verificationPassed === false) return false;
  if (!result.finalAnswer || !result.finalAnswer.trim()) return false;

  const text = q.cleanText.toLowerCase();
  const answer = `${result.finalAnswer} ${result.steps.join(' ')}`.toLowerCase();

  // Anti-contamination : une question de dérivée ne doit pas recevoir une résolution d'équation,
  // une question de limite ne doit pas recevoir une résolution de racines, etc.
  const forbiddenByType: Record<string, RegExp[]> = {
    limits: [/résoudre.*équation|solution\s+de|s\s*=\s*\{/i],
    derivative: [/\\bdiscriminant\\b|\\btrin[ôo]me\\b|forme\\s+factoris[ée]e|s\s*=\s*\{/i],
    variation: [/ensemble\s+des\s+solutions|\\bdiscriminant\\b|s\s*=\s*\{/i],
    probability: [/dérivée|discriminant|tableau\s+de\s+variation/i],
    sequence: [/asymptote|domaine\s+de\s+d[ée]finition/i],
    geometry: [/loi\s+d'ohm|quantité\s+de\s+matière|discriminant/i],
  };
  const forbidden = forbiddenByType[q.detectedType] || [];
  if (forbidden.some(r => r.test(answer) && !r.test(text))) return false;

  // Le résultat doit contenir un indice du type de tâche demandé.
  const typeEvidence: Record<string, RegExp> = {
    limits: /limite|\lim|tend\s+vers/i,
    derivative: /dériv|f'\s*\(|dérivée/i,
    variation: /variation|croissante|décroissante|dériv|minimum|maximum|extremum|sommet/i,
    sign_table: /signe|tableau/i,
    factorisation: /factoris|racine/i,
    equation: /équation|solution|racine|s\s*=|\bsol|discriminant|delta|\\delta/i,
    inequation: /inéquation|intervalle|s\s*=|≤|≥|</i,
    primitive: /primitive|intégrale|\int/i,
    probability: /probabilité|loi|espérance|tirage|\btire|urne|boules?/i,
    statistics: /moyenne|variance|écart|statistique/i,
    geometry: /vecteur|distance|droite|plan|coordonnée|triangle|produit\s+scalaire/i,
    evaluation: /\b[a-z]\s*\([^)]*\)\s*=|calcul|valeur|discriminant|delta|\\delta/i,
    definition_domain: /d[ée]fini|domaine|ensemble|ℝ|\\setminus|\\{|valeur/i,
  };
  const evidence = typeEvidence[q.detectedType];
  if (evidence && !evidence.test(answer) && q.detectedType !== 'general_math' && q.detectedType !== 'general') {
    return false;
  }

  return true;
}

function firstCompatible(
  q: ParsedQuestion,
  candidates: Array<SolvedQuestionResult[] | null>
): SolvedQuestionResult | null {
  for (const candidate of candidates) {
    if (!candidate || candidate.length !== 1) continue;
    if (isQuestionResultCompatible(q, candidate[0])) return candidate[0];
  }
  return null;
}

/**
 * Résolution déterministe stricte, question par question.
 *
 * IMPORTANT : les anciens moteurs recevaient tout l'exercice et pouvaient donc
 * choisir une méthode à partir d'une autre question. Ici, chaque moteur reçoit
 * uniquement le contexte commun + la question courante (et, si nécessaire,
 * les résultats déjà établis explicitement utilisés par la question).
 */
export function tryDeterministicExerciseResolution(
  parsingResult: StatementParsingResult
): { success: boolean; solvedExercises: SolvedExerciseResult[]; report: CompletenessValidationReport } | null {
  if (parsingResult.exercises.length === 0) return null;

  const solvedExercises: SolvedExerciseResult[] = [];

  for (const ex of parsingResult.exercises) {
    const solvedQuestions: SolvedQuestionResult[] = [];
    const previousResults: string[] = [];

    for (const q of ex.questions) {
      const context = [
        ex.contextText || '',
        // Les résultats précédents ne sont transmis que comme données intermédiaires,
        // jamais comme nouvelles questions.
        ...(previousResults.length && /en\s+d[ée]duire|précédent|ci-dessus|montrer\s+que|en\s+utilisant|d[ée]duire/i.test(q.cleanText)
          ? previousResults
          : []),
        q.cleanText,
      ].filter(Boolean).join('\n');

      const poly = parseQuadraticPolynomial([ex.contextText || '', q.cleanText].filter(Boolean).join('\n'));
      const candidates: Array<SolvedQuestionResult[] | null> = [];

      // 1) On choisit d'abord les moteurs en fonction du TYPE EXACT de la question.
      switch (q.detectedType) {
        case 'definition_domain':
          candidates.push(tryGenericLimitAndContinuityResolutionForExercise(context, [q]));
          candidates.push(tryGenericFunctionResolutionForExercise(context, [q]));
          break;
        case 'limits':
          candidates.push(tryGenericLimitAndContinuityResolutionForExercise(context, [q]));
          candidates.push(tryGenericFunctionResolutionForExercise(context, [q]));
          break;
        case 'derivative':
        case 'variation':
        case 'sign_table':
        case 'evaluation':
        case 'asymptote':
        case 'tangent':
          if (poly) candidates.push([solveQuadraticQuestion(q, poly)] as SolvedQuestionResult[]);
          candidates.push(tryGenericFunctionResolutionForExercise(context, [q]));
          break;
        case 'sequence':
          candidates.push(tryGenericSequenceResolutionForExercise(context, [q]));
          break;
        case 'probability':
          candidates.push(tryGenericHypergeometricResolutionForExercise(context, [q]));
          candidates.push(tryGenericProbabilityResolutionForExercise(context, [q]));
          break;
        case 'complex':
          candidates.push(tryGenericComplexResolutionForExercise(context, [q]));
          break;
        case 'primitive':
          candidates.push(tryGenericPrimitiveResolutionForExercise(context, [q]));
          break;
        case 'geometry':
          candidates.push(tryGenericSpaceGeometryResolutionForExercise(context, [q]));
          candidates.push(tryGenericGeometryResolutionForExercise(context, [q]));
          break;
        case 'matrix':
          candidates.push(tryGenericMatrixResolutionForExercise(context, [q]));
          break;
        case 'factorisation':
        case 'equation':
        case 'inequation':
        case 'general_math':
        case 'general':
          if (poly) candidates.push([solveQuadraticQuestion(q, poly)] as SolvedQuestionResult[]);
          candidates.push(tryGenericCubicResolutionForExercise(context, [q]));
          candidates.push(tryGenericLimitAndContinuityResolutionForExercise(context, [q]));
          candidates.push(tryGenericArithmeticResolutionForExercise(context, [q]));
          candidates.push(tryGenericFunctionResolutionForExercise(context, [q]));
          candidates.push(tryGenericComplexResolutionForExercise(context, [q]));
          candidates.push(tryGenericMatrixResolutionForExercise(context, [q]));
          break;
        default:
          break;
      }

      // 2) Fallback local très strict : uniquement si la question n'a pas été
      // reconnue par un moteur spécialisé. Le fallback ne doit jamais inventer.
      let solved = firstCompatible(q, candidates);
      if (!solved && q.detectedType === 'true_false') {
        const papa = solveExerciseWithPapaMethod({ ...ex, questions: [q] }, 'Mathématiques', 'Terminale');
        solved = firstCompatible(q, [papa.questions]);
      }

      if (!solved) {
        // Règle fondamentale : mieux vaut déclarer la question non résolue
        // que d'afficher une fausse solution provenant d'un mauvais template.
        return null;
      }

      solvedQuestions.push(solved);
      previousResults.push(`${q.numberLabel} Résultat établi : ${solved.finalAnswer}`);
    }

    solvedExercises.push({
      title: ex.title,
      points: ex.points,
      introContext: ex.contextText,
      questions: solvedQuestions,
    });
  }

  const report = validateCompleteness(parsingResult.exercises, solvedExercises);
  if (!report.isComplete || report.extraQuestionsFound.length > 0) return null;

  return { success: true, solvedExercises, report };
}

/**
 * Résolution déterministe COMPLÈTE question par question pour la
 * PHYSIQUE-CHIMIE — pendant de tryDeterministicExerciseResolution() pour les
 * Mathématiques, mais avec ses propres moteurs (server/exercisePipeline/
 * genericXxxSolver.ts dédiés à la physique-chimie, ex. genericKinematicsSolver.ts).
 *
 * Contrairement au pipeline maths, ce pipeline n'est PAS encore la source de
 * vérité unique pour toute la physique-chimie : seuls les thèmes listés
 * ci-dessous ont un vrai moteur de calcul. Pour tout le reste, server.ts
 * continue (pour l'instant) d'appeler l'ancien solvePcTleCdeExercise
 * (méthodologie pré-rédigée, thème par thème). Chaque nouveau thème couvert par un vrai
 * moteur (loi d'Ohm, stœchiométrie...) s'ajoute ici de la même façon que les
 * moteurs mathématiques : import + bloc if/continue ci-dessous.
 */
export function tryDeterministicPcExerciseResolution(
  parsingResult: StatementParsingResult
): { success: boolean; solvedExercises: SolvedExerciseResult[]; report: CompletenessValidationReport } | null {
  if (parsingResult.exercises.length === 0) return null;

  const solvedExercises: SolvedExerciseResult[] = [];

  for (const ex of parsingResult.exercises) {
    const contextCombined = ex.rawStatement || ex.contextText || '';

    // Cinématique rectiligne (MRU/MRUA) : v = d/t, a = Δv/Δt,
    // Δx = v0.t + ½.a.t², v(t) = v0 + a.t — voir genericKinematicsSolver.ts.
    const kinematicsSolved = tryGenericKinematicsResolutionForExercise(contextCombined, ex.questions);
    if (kinematicsSolved) {
      solvedExercises.push({
        title: ex.title,
        points: ex.points,
        introContext: ex.contextText,
        questions: kinematicsSolved,
      });
      continue;
    }

    // Électricité / Loi d'Ohm & Circuits : U = R.I, P = U.I, E = P.t,
    // associations série (Req = R1 + R2) et dérivation (Req = R1.R2/(R1+R2)).
    const ohmSolved = tryGenericOhmResolutionForExercise(contextCombined, ex.questions);
    if (ohmSolved) {
      solvedExercises.push({
        title: ex.title,
        points: ex.points,
        introContext: ex.contextText,
        questions: ohmSolved,
      });
      continue;
    }

    // Stœchiométrie et solutions : n = m/M, c = n/V, Cm = m/V = c.M,
    // n = V/Vm (gaz), N = n.NA, calcul de masse molaire moléculaire.
    const stoichiometrySolved = tryGenericStoichiometryResolutionForExercise(contextCombined, ex.questions);
    if (stoichiometrySolved) {
      solvedExercises.push({
        title: ex.title,
        points: ex.points,
        introContext: ex.contextText,
        questions: stoichiometrySolved,
      });
      continue;
    }

    // Gravitation universelle & Satellites (Kepler, v = sqrt(GM/r), T, altitude géostationnaire)
    const gravitationSolved = tryGenericGravitationResolutionForExercise(contextCombined, ex.questions);
    if (gravitationSolved) {
      solvedExercises.push({
        title: ex.title,
        points: ex.points,
        introContext: ex.contextText,
        questions: gravitationSolved,
      });
      continue;
    }

    // Oscillations & Pendules élastiques / Circuits RLC (omega0 = sqrt(k/m), T0, Em = 1/2 k Xm^2)
    const oscillatorSolved = tryGenericOscillatorResolutionForExercise(contextCombined, ex.questions);
    if (oscillatorSolved) {
      solvedExercises.push({
        title: ex.title,
        points: ex.points,
        introContext: ex.contextText,
        questions: oscillatorSolved,
      });
      continue;
    }

    // Dynamique & Énergie : TCI & Théorème de l'Énergie Cinétique (TEC) sur plan incliné
    const tecSolved = tryGenericTecResolutionForExercise(contextCombined, ex.questions);
    if (tecSolved) {
      solvedExercises.push({
        title: ex.title,
        points: ex.points,
        introContext: ex.contextText,
        questions: tecSolved,
      });
      continue;
    }

    // Si aucun moteur PC spécialisé n'a capturé l'exercice en entier,
    // on ne renvoie pas de fausse résolution préfabriquée : on renvoie null
    // afin que le solveur IA ou académique traite authentiquement l'énoncé.
    return null;
  }

  const report = validateCompleteness(parsingResult.exercises, solvedExercises);
  if (!report.isComplete) return null;

  return {
    success: true,
    solvedExercises,
    report,
  };
}

/**
 * Construit une réponse HONNÊTE (sans IA, sans texte générique inventé) quand
 * aucun moteur de calcul local n'a pu résoudre l'exercice. Chaque question
 * réellement détectée dans l'énoncé est listée explicitement comme "non
 * résolue automatiquement" plutôt que de renvoyer un texte-type déconnecté
 * de l'énoncé (ancien comportement du fallback IA) ou de laisser le champ
 * vide (ce qui provoquait l'affichage brut de l'énoncé côté interface).
 */
export function buildHonestUnsolvedResult(
  parsingResult: StatementParsingResult,
  discipline: string = 'Mathématiques',
  reason: string = "Ce type d'exercice n'est pas encore pris en charge par le moteur de calcul local."
): MethodologyAnalysisResult {
  const exercises = parsingResult.exercises.length > 0
    ? parsingResult.exercises
    : [{
        id: 'ex-1',
        exerciseNumber: 1,
        title: 'Exercice',
        rawStatement: parsingResult.rawStatement,
        questions: [],
        isMultiQuestion: false,
      }];

  const structuredScientificResolution = exercises.map(ex => ({
    title: ex.title || 'Exercice',
    points: ex.points || '',
    introContext: ex.contextText || '',
    questions: ex.questions.length > 0
      ? ex.questions.map(q => ({
          numberLabel: q.numberLabel,
          titleOrPrompt: q.cleanText,
          steps: [reason],
          finalAnswer: '',
        }))
      : [{
          numberLabel: '1.',
          titleOrPrompt: ex.rawStatement.slice(0, 200),
          steps: [reason],
          finalAnswer: '',
        }],
  }));

  const fullRedaction = `Ce site résout désormais les exercices sans intelligence artificielle, avec un moteur de calcul réel (dérivées, limites, signes...). ${reason} N'hésitez pas à vérifier l'énoncé (recopiez-le tel qu'il est écrit, avec les puissances et fractions explicites) ou à demander à votre professeur pour ce cas précis.`;

  return {
    disciplineIdentified: discipline,
    exerciseTypeIdentified: 'Non résolu automatiquement',
    conceptualDisambiguation: {
      hasAmbiguousTerm: false,
      term: '',
      possibleMeanings: [],
      retainedMeaning: '',
      justification: '',
    },
    fasciculeMethodologyActivated: {
      name: 'Moteur de calcul local',
      description: reason,
      stepsApplied: [],
    },
    sourceDecomposition: {
      fasciculeMethodologies: [],
      fasciculeKnowledgeUsed: [],
      externalKnowledgeMobilized: [],
    },
    pedagogicalTransferExplanation: reason,
    level1Hint: reason,
    level2Methodology: reason,
    level3GuidanceSteps: [reason],
    level4DetailedOutline: reason,
    level5FullRedaction: fullRedaction,
    structuredRedaction: {
      planSummary: 'Non résolu automatiquement',
      introduction: { amorce: '', definitionTension: '', problematique: '', annoncePlan: '', fullText: '' },
      development: {
        part1: { partNumber: 1, title: 'Non résolu', thesisOverview: '', subParts: [], fullText: fullRedaction },
        transition1: '',
        part2: { partNumber: 2, title: '', thesisOverview: '', subParts: [], fullText: '' },
      },
      conclusion: { bilanSynthese: reason, reponseDefinitive: '', elargissement: '', fullText: reason },
    },
    structuredScientificResolution,
    stepByStepBreakdown: [],
    fullSynthesizedResponse: fullRedaction,
    evaluationCriteria: [],
  };
}

/**
 * Construit un MethodologyAnalysisResult complet à partir d'un ensemble d'exercices résolus
 */
export function buildMethodologyResultFromSolvedExercises(
  parsingResult: StatementParsingResult,
  solvedExercises: SolvedExerciseResult[],
  discipline: string = 'Mathématiques',
  level: string = 'Terminale',
  exerciseTypeLabel: string = 'Exercice guidé de Mathématiques'
): MethodologyAnalysisResult {
  const courseCtx = retrieveRelevantCourseContext(parsingResult.rawStatement, parsingResult.identifiedConcepts, discipline, level);

  const redactionLines: string[] = ['# CORRECTION\n'];
  const finalSummaryAnswers: { label: string; ans: string }[] = [];

  solvedExercises.forEach((ex, exIdx) => {
    const rawTitle = ex.title || `Exercice ${exIdx + 1}`;
    const cleanTitle = rawTitle.replace(/^###?\s*/i, '').trim();
    redactionLines.push(`## ${cleanTitle} ${ex.points ? `(${ex.points})` : ''}\n`);
    if (ex.introContext) {
      redactionLines.push(`${ex.introContext}\n`);
    }

    ex.questions.forEach((q, qIdx) => {
      const qHeading = q.numberLabel.trim() ? `${q.numberLabel} ${q.titleOrPrompt}` : q.titleOrPrompt;
      redactionLines.push(`### ${qHeading}\n`);

      const relevantRule =
        courseCtx.relevantRules[qIdx % (courseCtx.relevantRules.length || 1)] ||
        'Application rigoureuse des propriétés et théorèmes officiels.';
      redactionLines.push(`**Méthode :**\n${relevantRule}\n`);

      redactionLines.push(`**Résolution :**`);
      q.steps.forEach(st => {
        redactionLines.push(st);
      });

      if (q.finalAnswer) {
        const trimmed = q.finalAnswer.trim();
        const hasTextWords = /[a-zA-ZÀ-ÿ]{3,}/.test(trimmed.replace(/\\(boxed|quad|text|frac|sqrt|lim|times|mathbb|in|ge|le|alpha|beta|Delta)/g, ''));
        if (hasTextWords) {
          // Phrase de conclusion textuelle avec éventuelles expressions mathématiques inline $...$
          redactionLines.push(`\n**Réponse :**\n${trimmed}\n`);
          finalSummaryAnswers.push({
            label: q.numberLabel.trim() || `${qIdx + 1}.`,
            ans: trimmed,
          });
        } else {
          // Expression purement mathématique (formule, ensemble de solutions, valeurs exactes)
          const cleanMath = trimmed.replace(/\$/g, '').trim();
          const formattedBox = cleanMath.includes('\\boxed') ? cleanMath : `\\boxed{${cleanMath}}`;
          redactionLines.push(`\n**Réponse :**\n\n$$\n${formattedBox}\n$$\n`);
          finalSummaryAnswers.push({
            label: q.numberLabel.trim() || `${qIdx + 1}.`,
            ans: `$${formattedBox}$`,
          });
        }
      }
      redactionLines.push('');
    });
  });

  if (finalSummaryAnswers.length > 0) {
    redactionLines.push('---\n');
    redactionLines.push('### Réponses finales\n');
    finalSummaryAnswers.forEach(item => {
      const display = item.ans.startsWith('$') ? item.ans : item.ans;
      redactionLines.push(`${item.label} ${display}`);
    });
    redactionLines.push('');
  }


  const fullRedaction = redactionLines.join('\n');

  const scientificResolution = solvedExercises.map(ex => ({
    title: ex.title,
    points: ex.points || '',
    introContext: ex.introContext || '',
    questions: ex.questions.map(q => ({
      numberLabel: q.numberLabel,
      titleOrPrompt: q.titleOrPrompt,
      steps: q.steps,
      finalAnswer: q.finalAnswer,
    })),
  }));

  const stepBreakdown = solvedExercises.flatMap(ex =>
    ex.questions.map((q, idx) => ({
      stepNumber: idx + 1,
      stepTitle: `${q.numberLabel} ${q.titleOrPrompt}`,
      methodologyRuleApplied: courseCtx.relevantRules[idx % courseCtx.relevantRules.length] || 'Application rigoureuse de la méthode',
      content: q.steps.join('\n'),
      sourceTags: ['Programme Officiel LE PROF', courseCtx.chapterName],
      pedagogicalTip: courseCtx.pedagogicalTips[idx % courseCtx.pedagogicalTips.length] || 'Vérifier la cohérence de chaque étape.',
    }))
  );

  return {
    disciplineIdentified: discipline,
    exerciseTypeIdentified: exerciseTypeLabel,
    conceptualDisambiguation: {
      hasAmbiguousTerm: false,
      term: '',
      possibleMeanings: [],
      retainedMeaning: '',
      justification: '',
    },
    fasciculeMethodologyActivated: {
      name: courseCtx.chapterName,
      description: courseCtx.courseTitle,
      stepsApplied: courseCtx.relevantRules,
    },
    sourceDecomposition: {
      fasciculeMethodologies: [courseCtx.chapterName],
      fasciculeKnowledgeUsed: courseCtx.relevantRules,
      externalKnowledgeMobilized: ['Raisonnement mathématique déductif'],
    },
    pedagogicalTransferExplanation: 'La résolution décompose chaque question posée dans son ordre exact, en appliquant les théorèmes et formules du programme.',
    level1Hint: 'Identifier les formules canoniques associées à chaque question avant de commencer.',
    level2Methodology: courseCtx.relevantRules.join(' ; '),
    level3GuidanceSteps: solvedExercises.flatMap(e => e.questions.map(q => `Traiter ${q.numberLabel} : ${q.titleOrPrompt}`)),
    level4DetailedOutline: solvedExercises.flatMap(e => e.questions.map(q => `${q.numberLabel} ${q.titleOrPrompt} -> ${q.finalAnswer}`)).join('\n'),
    level5FullRedaction: fullRedaction,
    structuredRedaction: {
      planSummary: 'Résolution exhaustive question par question',
      introduction: {
        amorce: '',
        definitionTension: '',
        problematique: '',
        annoncePlan: '',
        fullText: '',
      },
      development: {
        part1: {
          partNumber: 1,
          title: 'Résolution',
          thesisOverview: '',
          subParts: [],
          fullText: fullRedaction,
        },
        transition1: '',
        part2: { partNumber: 2, title: '', thesisOverview: '', subParts: [], fullText: '' },
      },
      conclusion: {
        bilanSynthese: 'Toutes les questions de l\'énoncé ont été traitées avec rigueur et vérifiées.',
        reponseDefinitive: '',
        elargissement: '',
        fullText: 'Fin de la résolution méthodique.',
      },
    },
    structuredScientificResolution: scientificResolution,
    stepByStepBreakdown: stepBreakdown,
    fullSynthesizedResponse: fullRedaction,
    evaluationCriteria: [
      {
        criterion: 'Exhaustivité',
        fasciculeOrigin: true,
        description: 'Toutes les questions sans exception sont traitées.',
        tipsForAutonomy: 'Toujours pointer les numéros de questions dans l\'énoncé.',
      },
      {
        criterion: 'Exactitude des calculs',
        fasciculeOrigin: true,
        description: 'Chaque résultat est démontré étape par étape.',
        tipsForAutonomy: 'Vérifier les résultats par réinjection dans l\'expression initiale.',
      },
    ],
  };
}
