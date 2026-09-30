/**
 * Orchestrateur local hybride.
 *
 * Le pipeline historique exigeait qu'un seul moteur résolve TOUT l'exercice.
 * C'est trop strict pour les exercices scolaires mixtes (dérivée -> signe ->
 * variation -> tangente, ou probabilité + calcul numérique, etc.).
 *
 * Ici, chaque question est confiée uniquement aux moteurs compatibles avec
 * son type de tâche. Le préambule de l'exercice est séparé de la question
 * courante afin d'empêcher toute contamination par une autre question.
 * Les résultats sont ensuite
 * réassemblés dans l'ordre original. Aucun appel IA/API n'est effectué.
 */
import { ParsedQuestion, SolvedExerciseResult, SolvedQuestionResult, StatementParsingResult, CompletenessValidationReport } from './types';
import { parseQuadraticPolynomial } from './mathVerifier';
import { solveQuadraticQuestion } from './exerciseSolverPipeline';
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
import { tryGenericArithmeticResolutionForExercise } from './genericArithmeticSolver';
import { validateCompleteness } from './completenessValidator';
import { tryGenericAdvancedMathResolution } from './genericAdvancedMathSolver';
import { tryGenericCubicResolutionForExercise } from './genericCubicSolver';
import { solveStatistics } from '../mathsEngine/solvers/statisticsSolver';
import { tryUniversalMathResolution } from './universalMathSolver';
import { resolveMathQuestion } from './mathResolutionOrchestrator';
import { tryGenericAppliedMathResolution } from './genericAppliedMathSolver';
import { tryUniversalLocalQuestion } from './universalLocalSolver';
import { tryGenericUniversalV7Resolution } from './genericUniversalV7Solver';
import { tryUniversalCompletionResolution } from './genericUniversalCompletionSolver';
import { tryUniversalFinalResolution } from './genericUniversalFinalSolver';

function isCompatible(q: ParsedQuestion, r: SolvedQuestionResult | null): boolean {
  if (!r || !r.finalAnswer || r.verificationPassed === false) return false;
  if (r.titleOrPrompt?.trim() !== q.cleanText.trim()) return false;
  const text = q.cleanText.toLowerCase();
  const body = `${r.finalAnswer} ${r.steps.join(' ')}`.toLowerCase();
  const forbidden: Record<string, RegExp[]> = {
    limits: [/résoudre.*équation|ensemble\s+des\s+solutions|s\s*=\s*\{/i],
    derivative: [/discriminant|résoudre.*équation|racines?\s+réelles/i],
    variation: [/discriminant|ensemble\s+des\s+solutions/i],
    probability: [/dérivée|discriminant|tableau\s+de\s+variation/i],
    sequence: [/asymptote|domaine\s+de\s+d[ée]finition/i],
  };
  if ((forbidden[q.detectedType] || []).some(re => re.test(body) && !re.test(text))) return false;
  return true;
}

function accept(q: ParsedQuestion, result: SolvedQuestionResult[] | null): SolvedQuestionResult | null {
  if (!result || result.length !== 1) return null;
  return isCompatible(q, result[0]) ? { ...result[0], matchedParsedQuestionId: q.id } : null;
}

function solveOneQuestion(context: string, q: ParsedQuestion, priorResults: SolvedQuestionResult[] = []): SolvedQuestionResult | null {
  // Routeur central inspiré d'une architecture de résolution en cascade :
  // la classification donne une priorité, mais ne bloque jamais les autres
  // familles mathématiques.
  const v7 = tryGenericUniversalV7Resolution(context, q, priorResults);
  if (v7) return v7;
  const completion = tryUniversalCompletionResolution(context, q);
  if (completion) return completion;
  const finalLayer = tryUniversalFinalResolution(context, q);
  if (finalLayer) return finalLayer;
  const applied = tryGenericAppliedMathResolution(context, q);
  if (applied) return applied;
  const localUniversal = tryUniversalLocalQuestion(context, q);
  if (localUniversal) return localUniversal;
  const orchestrated = resolveMathQuestion(context, q, priorResults);
  if (orchestrated) return orchestrated;
  // Le contexte commun contient uniquement les données situées AVANT les questions.
  // La question courante est ajoutée séparément. Cela empêche une autre question
  // de fournir accidentellement la méthode ou les données du solveur.
  const dependencyContext = /en\s+d[ée]duire|pr[ée]c[ée]dent|ci-dessus|en\s+utilisant|d[ée]duire/i.test(q.cleanText) && priorResults.length
    ? `${context}\n\nRÉSULTATS PRÉCÉDENTS EXPLICITEMENT UTILISABLES :\n${priorResults.map(r => `${r.numberLabel} ${r.finalAnswer}`).join('\n')}`
    : context;
  const questionContext = `${dependencyContext}\n${q.cleanText}`;

  const poly = parseQuadraticPolynomial(questionContext);
  const attempts: Array<() => SolvedQuestionResult[] | null> = [];
  let advancedCached: SolvedQuestionResult | null | undefined;
  const advancedAttempt = () => {
    if (advancedCached === undefined) advancedCached = tryGenericAdvancedMathResolution(questionContext, q);
    return advancedCached ? [advancedCached] : null;
  };

  // Le type de tâche est le garde-fou principal : on ne teste pas tous les moteurs.
  switch (q.detectedType) {
    case 'definition_domain':
      attempts.push(advancedAttempt);
      attempts.push(() => tryGenericLimitAndContinuityResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericFunctionResolutionForExercise(questionContext, [q]));
      break;
    case 'limits':
      attempts.push(advancedAttempt);
      attempts.push(() => tryGenericLimitAndContinuityResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericFunctionResolutionForExercise(questionContext, [q]));
      break;
    case 'derivative':
    case 'variation':
    case 'sign_table':
    case 'asymptote':
    case 'tangent':
      attempts.push(advancedAttempt);
      attempts.push(() => tryGenericFunctionResolutionForExercise(questionContext, [q]));
      if (poly) attempts.push(() => [parseQuadraticPolynomial(questionContext) ? solveQuadraticQuestionSafe(q, poly) : null].filter(Boolean) as SolvedQuestionResult[]);
      break;
    case 'evaluation':
      attempts.push(advancedAttempt);
      attempts.push(() => tryGenericArithmeticResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericFunctionResolutionForExercise(questionContext, [q]));
      if (poly) attempts.push(() => [parseQuadraticPolynomial(questionContext) ? solveQuadraticQuestionSafe(q, poly) : null].filter(Boolean) as SolvedQuestionResult[]);
      break;
    case 'sequence':
      attempts.push(advancedAttempt);
      attempts.push(() => tryGenericSequenceResolutionForExercise(questionContext, [q]));
      break;
    case 'probability':
      attempts.push(advancedAttempt);
      attempts.push(() => tryGenericHypergeometricResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericProbabilityResolutionForExercise(questionContext, [q]));
      break;
    case 'complex':
      attempts.push(advancedAttempt);
      attempts.push(() => tryGenericComplexResolutionForExercise(questionContext, [q]));
      break;
    case 'primitive':
      attempts.push(advancedAttempt);
      attempts.push(() => tryGenericPrimitiveResolutionForExercise(questionContext, [q]));
      break;
    case 'geometry':
      // La géométrie conserve ses solveurs dédiés, puis bénéficie aussi du
      // moteur symbolique pour les coordonnées, distances et calculs associés.
      attempts.push(() => tryGenericSpaceGeometryResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericGeometryResolutionForExercise(questionContext, [q]));
      attempts.push(advancedAttempt);
      break;
    case 'matrix':
      attempts.push(advancedAttempt);
      attempts.push(() => tryGenericMatrixResolutionForExercise(questionContext, [q]));
      break;
    case 'factorisation':
    case 'equation':
    case 'inequation':
    case 'general_math':
    case 'general':
      attempts.push(advancedAttempt);
      attempts.push(() => tryGenericCubicResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericLimitAndContinuityResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericArithmeticResolutionForExercise(questionContext, [q]));
      if (poly) attempts.push(() => [solveQuadraticQuestionSafe(q, poly)].filter(Boolean) as SolvedQuestionResult[]);
      attempts.push(() => tryGenericFunctionResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericComplexResolutionForExercise(questionContext, [q]));
      attempts.push(() => tryGenericMatrixResolutionForExercise(questionContext, [q]));
      break;
    case 'statistics':
      attempts.push(advancedAttempt);
      attempts.push(() => {
        const r = solveStatistics(questionContext, { serie: 'A' });
        if (!r?.success || r.verification?.checkPassed === false || !r.finalAnswer) return null;
        const steps = (r.stepByStepCalculations || []).flatMap((st: any) => [st.description, ...(st.mathLines || [])].filter(Boolean));
        if (!steps.length) return null;
        return [{ numberLabel: q.numberLabel, titleOrPrompt: q.cleanText, steps, finalAnswer: r.finalAnswer, verificationPassed: true, verificationDetails: r.verification?.details, matchedParsedQuestionId: q.id }];
      });
      break;
    case 'true_false':
      attempts.push(() => tryGenericArithmeticResolutionForExercise(questionContext, [q]));
      break;
  }

  for (const attempt of attempts) {
    try {
      const solved = accept(q, attempt());
      if (solved) return solved;
    } catch {
      // Un moteur local défaillant ne doit pas contaminer la question suivante.
    }
  }

  // CASSEUR DE CLASSIFICATION : une question peut être mal classée par le
  // détecteur (formulation naturelle, OCR, exercice hybride). On repasse donc
  // par une cascade mathématique générale avant d'abandonner. Chaque solveur
  // reste soumis à isCompatible(), donc aucun résultat n'est accepté sans
  // contrat de sortie valide.
  const broadMathFallbacks: Array<() => SolvedQuestionResult[] | null> = [
    advancedAttempt,
    () => tryGenericArithmeticResolutionForExercise(questionContext, [q]),
    () => tryGenericCubicResolutionForExercise(questionContext, [q]),
    () => tryGenericLimitAndContinuityResolutionForExercise(questionContext, [q]),
    () => tryGenericFunctionResolutionForExercise(questionContext, [q]),
    () => tryGenericSequenceResolutionForExercise(questionContext, [q]),
    () => tryGenericProbabilityResolutionForExercise(questionContext, [q]),
    () => tryGenericHypergeometricResolutionForExercise(questionContext, [q]),
    () => tryGenericComplexResolutionForExercise(questionContext, [q]),
    () => tryGenericPrimitiveResolutionForExercise(questionContext, [q]),
    () => tryGenericGeometryResolutionForExercise(questionContext, [q]),
    () => tryGenericSpaceGeometryResolutionForExercise(questionContext, [q]),
    () => tryGenericMatrixResolutionForExercise(questionContext, [q]),
    () => {
      const r = solveStatistics(questionContext, { serie: 'A' });
      if (!r?.success || r.verification?.checkPassed === false || !r.finalAnswer) return null;
      const steps = (r.stepByStepCalculations || []).flatMap((st: any) => [st.description, ...(st.mathLines || [])].filter(Boolean));
      return steps.length ? [{ numberLabel: q.numberLabel, titleOrPrompt: q.cleanText, steps, finalAnswer: r.finalAnswer, verificationPassed: true, verificationDetails: r.verification?.details, matchedParsedQuestionId: q.id }] : null;
    },
  ];

  for (const attempt of broadMathFallbacks) {
    try {
      const solved = accept(q, attempt());
      if (solved) return solved;
    } catch {
      // Un solveur qui échoue ne doit jamais empêcher les suivants de travailler.
    }
  }

  // Dernier niveau universel STRICT : calcul symbolique réel (mathjs).
  // Il n'est accepté que si un résultat effectivement calculé est obtenu.
  try {
    const universal = tryUniversalMathResolution(questionContext, q);
    if (isCompatible(q, universal)) return universal;
  } catch {
    // Aucun moteur générique ne doit contaminer la question suivante.
  }

  // Niveau avancé : algèbre symbolique et polynômes jusqu’au degré 4.
  try {
    const advanced = tryGenericAdvancedMathResolution(questionContext, q);
    if (isCompatible(q, advanced)) return advanced;
  } catch {
    // Ne jamais transformer une erreur de calcul symbolique en faux résultat.
  }

  // Aucun résultat fiable : on refuse de fabriquer une solution.
  return null;
}

// Le solveur quadratique historique renvoie null lorsqu'il ne reconnaît pas la tâche.
function solveQuadraticQuestionSafe(q: ParsedQuestion, poly: ReturnType<typeof parseQuadraticPolynomial>): SolvedQuestionResult | null {
  if (!poly) return null;
  return solveQuadraticQuestion(q, poly);
}

/**
 * Résolution hybride : chaque question peut utiliser un moteur différent.
 * Retourne null uniquement si au moins une question reste réellement inconnue.
 */
export function tryHybridDeterministicExerciseResolution(
  parsingResult: StatementParsingResult,
): { success: boolean; solvedExercises: SolvedExerciseResult[]; report: CompletenessValidationReport } | null {
  if (!parsingResult.exercises.length) return null;

  const solvedExercises: SolvedExerciseResult[] = [];

  for (const ex of parsingResult.exercises) {
    const context = ex.contextText || '';
    // Ne jamais envoyer toutes les questions au solveur comme contexte principal.
    // Les données de l'exercice sont le préambule; chaque question est traitée séparément.
    const solvedQuestions: SolvedQuestionResult[] = [];

    for (const q of ex.questions) {
      const solved = solveOneQuestion(context, q, solvedQuestions);
      if (!solved) return null;
      solvedQuestions.push(solved);
    }

    solvedExercises.push({
      title: ex.title,
      points: ex.points,
      introContext: ex.contextText,
      questions: solvedQuestions,
    });
  }

  const report = validateCompleteness(parsingResult.exercises, solvedExercises);
  if (!report.isComplete) return null;

  return { success: true, solvedExercises, report };
}
