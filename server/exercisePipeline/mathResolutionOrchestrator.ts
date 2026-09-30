import { ParsedQuestion, SolvedQuestionResult } from './types';
import { tryGenericAdvancedMathResolution } from './genericAdvancedMathSolver';
import { tryGenericArithmeticResolutionForExercise } from './genericArithmeticSolver';
import { tryGenericCubicResolutionForExercise } from './genericCubicSolver';
import { tryGenericLimitAndContinuityResolutionForExercise } from './genericLimitAndContinuitySolver';
import { tryGenericFunctionResolutionForExercise } from './genericFunctionSolver';
import { tryGenericSequenceResolutionForExercise } from './genericSequenceSolver';
import { tryGenericProbabilityResolutionForExercise } from './genericProbabilitySolver';
import { tryGenericHypergeometricResolutionForExercise } from './genericHypergeometricSolver';
import { tryGenericComplexResolutionForExercise } from './genericComplexSolver';
import { tryGenericPrimitiveResolutionForExercise } from './genericPrimitiveSolver';
import { tryGenericGeometryResolutionForExercise } from './genericGeometrySolver';
import { tryGenericSpaceGeometryResolutionForExercise } from './genericSpaceGeometrySolver';
import { tryGenericMatrixResolutionForExercise } from './genericMatrixSolver';
import { solveStatistics } from '../mathsEngine/solvers/statisticsSolver';
import { tryUniversalMathResolution } from './universalMathSolver';
import { tryGenericAppliedMathResolution } from './genericAppliedMathSolver';
import { tryUniversalLocalQuestion } from './universalLocalSolver';
import { tryUniversalCompletionResolution } from './genericUniversalCompletionSolver';
import { tryUniversalMegaResolution } from './genericUniversalMegaSolver';
import { tryUniversalFinalResolution } from './genericUniversalFinalSolver';
import { tryGenericUniversalV7Resolution } from './genericUniversalV7Solver';
import { tryGenericUniversalV8Resolution } from './genericUniversalV8Solver';
import { tryGenericBroadMathResolution } from './genericBroadMathSolver';

/**
 * Moteur central de résolution mathématique.
 *
 * Architecture :
 * 1. normalisation/parsing déjà effectués par statementParser ;
 * 2. classification souple (q.detectedType) ;
 * 3. sélection de stratégies candidates ;
 * 4. calcul réel par un solveur spécialisé ;
 * 5. validation du contrat de sortie ;
 * 6. fallback multi-domaine si la classification initiale est incomplète.
 *
 * Ce routeur ne contient aucun résultat pré-écrit pour un exercice : un
 * solveur doit effectivement calculer une réponse avant qu'elle soit retenue.
 */

function valid(q: ParsedQuestion, r: SolvedQuestionResult | null): r is SolvedQuestionResult {
  if (!r || !r.finalAnswer || r.titleOrPrompt.trim() !== q.cleanText.trim() || r.verificationPassed === false) {
    return false;
  }

  // Une résolution numériquement valide n'est pas forcément la résolution
  // de LA question posée. Le routeur applique donc un second garde-fou
  // sémantique avant d'accepter un solveur de secours.
  const body = `${r.finalAnswer} ${(r.steps || []).join(' ')}`.toLowerCase();
  const text = q.cleanText.toLowerCase();
  const forbidden: Record<string, RegExp[]> = {
    limits: [/ensemble\s+des\s+solutions|s\s*=\s*\{|racines?\s+réelles/i],
    derivative: [/discriminant|ensemble\s+des\s+solutions|racines?\s+réelles/i],
    variation: [/discriminant|ensemble\s+des\s+solutions/i],
    sign_table: [/dérivée\s*=|limite\s+en|ensemble\s+des\s+solutions/i],
    probability: [/dérivée|discriminant|tableau\s+de\s+variation/i],
    sequence: [/asymptote|domaine\s+de\s+d[ée]finition/i],
    geometry: [/discriminant|ensemble\s+des\s+solutions/i],
  };
  if ((forbidden[q.detectedType] || []).some(re => re.test(body) && !re.test(text))) {
    return false;
  }

  return true;
}

function accept(q: ParsedQuestion, rs: SolvedQuestionResult[] | null): SolvedQuestionResult | null {
  if (!rs || rs.length !== 1) return null;
  return valid(q, rs[0]) ? { ...rs[0], matchedParsedQuestionId: q.id } : null;
}

function stats(context: string, q: ParsedQuestion): SolvedQuestionResult[] | null {
  const r = solveStatistics(context, { serie: 'A' });
  if (!r?.success || r.verification?.checkPassed === false || !r.finalAnswer) return null;
  const steps = (r.stepByStepCalculations || []).flatMap((s: any) => [s.description, ...(s.mathLines || [])].filter(Boolean));
  if (!steps.length) return null;
  return [{ numberLabel: q.numberLabel, titleOrPrompt: q.cleanText, steps, finalAnswer: r.finalAnswer,
    verificationPassed: true, verificationDetails: r.verification?.details, matchedParsedQuestionId: q.id }];
}

export function resolveMathQuestion(
  context: string,
  q: ParsedQuestion,
  priorResults: SolvedQuestionResult[] = [],
): SolvedQuestionResult | null {
  const dependency = /en\s+d[ée]duire|pr[ée]c[ée]dent|ci-dessus|en\s+utilisant|d[ée]duire/i.test(q.cleanText) && priorResults.length
    ? `${context}\n\nRÉSULTATS PRÉCÉDENTS EXPLICITEMENT UTILISABLES :\n${priorResults.map(r => `${r.numberLabel} ${r.finalAnswer}`).join('\n')}`
    : context;
  const input = `${dependency}\n${q.cleanText}`;

  let advanced: SolvedQuestionResult | null | undefined;
  const adv = () => {
    if (advanced === undefined) advanced = tryGenericAdvancedMathResolution(input, q);
    return advanced ? [advanced] : null;
  };

  const v7 = () => { const r = tryGenericUniversalV7Resolution(input, q, priorResults); return r ? [r] : null; };

  const v8 = () => { const r = tryGenericUniversalV8Resolution(input, q); return r ? [r] : null; };

  const common: Array<() => SolvedQuestionResult[] | null> = [
    () => { const r = tryGenericBroadMathResolution(input, q); return r ? [r] : null; },
    v8,
    v7,
    () => { const r = tryGenericAppliedMathResolution(input, q); return r ? [r] : null; },
    () => { const r = tryUniversalLocalQuestion(input, q); return r ? [r] : null; },
    () => { const r = tryUniversalCompletionResolution(input, q); return r ? [r] : null; },
    () => { const r = tryUniversalMegaResolution(input, q); return r ? [r] : null; },
    () => { const r = tryUniversalFinalResolution(input, q); return r ? [r] : null; },
    adv,
    () => tryGenericArithmeticResolutionForExercise(input, [q]),
    () => tryGenericCubicResolutionForExercise(input, [q]),
    () => tryGenericLimitAndContinuityResolutionForExercise(input, [q]),
    () => tryGenericFunctionResolutionForExercise(input, [q]),
    () => tryGenericSequenceResolutionForExercise(input, [q]),
    () => tryGenericProbabilityResolutionForExercise(input, [q]),
    () => tryGenericHypergeometricResolutionForExercise(input, [q]),
    () => tryGenericComplexResolutionForExercise(input, [q]),
    () => tryGenericPrimitiveResolutionForExercise(input, [q]),
    () => tryGenericGeometryResolutionForExercise(input, [q]),
    () => tryGenericSpaceGeometryResolutionForExercise(input, [q]),
    () => tryGenericMatrixResolutionForExercise(input, [q]),
    () => stats(input, q),
  ];

  // La notion détectée sert à placer les solveurs les plus probables en tête,
  // mais ne limite jamais la résolution aux seuls solveurs de cette catégorie.
  const priority: Record<string, number[]> = {
    evaluation: [1,2,3,7], factorisation: [1,2,4,3], equation: [1,2,6,4,8,9,5], inequation: [1,2,6,8,4,5],
    definition_domain: [1,2,6,7], limits: [1,2,7,8,5], derivative: [1,2,8,7,5], variation: [1,2,8,7,5], sign_table: [1,2,8,7,5],
    asymptote: [1,2,7,8,5], tangent: [1,2,8,7,5], primitive: [1,2,13,5], sequence: [1,2,9,5], probability: [1,2,10,11,5],
    complex: [1,2,12,5], matrix: [1,2,16,5], statistics: [1,2,17,5], geometry: [1,14,15,2,3,5], general_math: [1,2,4,6,7,8,9,11,12,13,15,16,5],
    general: [1,2,4,6,7,8,9,10,11,12,13,14,15,16,5],
    trigonometry: [1,2,4,6,8,9,5],
  };

  const order = priority[q.detectedType] || priority.general;
  const seen = new Set<number>();
  for (const index of [...order, ...common.map((_, i) => i)]) {
    if (seen.has(index) || !common[index]) continue;
    seen.add(index);
    try {
      const result = accept(q, common[index]());
      if (result) return result;
    } catch {
      // Un solveur local peut échouer : on poursuit avec les stratégies suivantes.
    }
  }

  // Dernier niveau strict : calcul symbolique générique. Il ne fabrique pas de
  // réponse si l'expression n'est pas réellement comprise/calculée.
  try {
    const universal = tryUniversalMathResolution(input, q);
    if (valid(q, universal)) return universal;
  } catch {
    // Rien à faire : QUESTION_NON_RESOLUE au niveau supérieur.
  }
  return null;
}
