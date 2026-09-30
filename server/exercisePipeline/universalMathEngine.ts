/**
 * Point d'entrée UNIQUE du moteur mathématique généraliste.
 *
 * Ce module ne choisit jamais une classe scolaire. Le niveau éventuel est
 * purement pédagogique ; le calcul est déterminé par la nature mathématique
 * de chaque question.
 *
 * Architecture :
 * entrée → normalisation/parsing → analyse → routage compétence → résolution
 * → vérification → correction structurée.
 */
import { parseStatement } from './statementParser';
import { tryHybridDeterministicExerciseResolution } from './hybridDeterministicSolver';
import { StatementParsingResult, SolvedExerciseResult, CompletenessValidationReport } from './types';

export type UniversalMathStatus = 'SOLVED' | 'UNSUPPORTED' | 'INVALID';

export interface UniversalMathEngineResult {
  status: UniversalMathStatus;
  success: boolean;
  solvedExercises: SolvedExerciseResult[];
  report: CompletenessValidationReport | null;
  parsing: StatementParsingResult;
  reason?: string;
}

export function solveUniversalMathHomework(statement: string | StatementParsingResult): UniversalMathEngineResult {
  const parsing = typeof statement === 'string' ? parseStatement(statement) : statement;

  if (!parsing.rawStatement?.trim() || parsing.exercises.length === 0 || parsing.totalQuestionsCount === 0) {
    return {
      status: 'INVALID',
      success: false,
      solvedExercises: [],
      report: null,
      parsing,
      reason: 'Aucune question mathématique exploitable n’a été détectée.',
    };
  }

  try {
    const result = tryHybridDeterministicExerciseResolution(parsing);

    if (result?.success && result.report.isComplete) {
      return {
        status: 'SOLVED',
        success: true,
        solvedExercises: result.solvedExercises,
        report: result.report,
        parsing,
      };
    }

    const report = result?.report ?? {
      isComplete: false,
      detectedQuestionsCount: parsing.totalQuestionsCount,
      solvedQuestionsCount: result?.solvedExercises.reduce((n, ex) => n + ex.questions.length, 0) ?? 0,
      missingQuestions: parsing.exercises.flatMap(ex => ex.questions),
      extraQuestionsFound: [],
      inventedQuestionsRemoved: [],
      complianceRate: 0,
      details: 'La résolution complète n’a pas pu être établie par les solveurs déterministes disponibles.',
    };
    const missing = report.missingQuestions.map(q => `${q.numberLabel} (${q.detectedType})`).join(', ');
    const recognized = parsing.identifiedConcepts.length
      ? ` Domaines reconnus : ${parsing.identifiedConcepts.join(', ')}.`
      : '';
    return {
      status: 'UNSUPPORTED',
      success: false,
      solvedExercises: result?.solvedExercises ?? [],
      report,
      parsing,
      reason: `UNSUPPORTED — questions non résolues : ${missing || 'aucune question exploitable'}.${recognized} Aucun résultat n’a été inventé.`,
    };
  } catch (error) {
    return {
      status: 'UNSUPPORTED',
      success: false,
      solvedExercises: [],
      report: null,
      parsing,
      reason: 'Une étape déterministe locale a échoué ; aucun résultat n’a été inventé.',
    };
  }
}
