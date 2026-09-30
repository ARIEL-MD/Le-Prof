/**
 * Moteur Expert Mathématiques Terminale D (Côte d'Ivoire)
 * Orchestre la classification et la résolution déterministe locale selon le programme officiel
 */

import { classifyMathsTleDExercise, MathsTleDClassification } from "./classifier";
import { solveAnalysisTleDExercise } from "./solvers/analysisTleDSolver";
import { solveComplexTleDExercise } from "./solvers/complexTleDSolver";
import { solveProbStatsTleDExercise } from "./solvers/probStatsTleDSolver";
import { solveDifferentialTleDExercise } from "./solvers/differentialTleDSolver";
import { MathsTleDStructuredResult } from "./types";
import { MATHS_TLE_D_CURRICULUM } from "../../mathsTleDKnowledgeBase";

export interface MathsTleDEngineResponse {
  success: boolean;
  classification: MathsTleDClassification;
  result: MathsTleDStructuredResult;
  methodologyAnalysis: any;
  pedagogicalMetadata: {
    curriculum: string;
    level: string;
    themeTitle: string;
    lessonNumber: number;
    lessonTitle: string;
    executionMode: "deterministic_local_engine";
    officialReference: string;
  };
}

export function solveMathsTleD(statement: string): MathsTleDEngineResponse {
  const classification = classifyMathsTleDExercise(statement);

  let result: MathsTleDStructuredResult;

  switch (classification.topicType) {
    case "differential_equations":
      result = solveDifferentialTleDExercise(statement);
      break;

    case "statistics_bivariate_regression":
    case "probabilities_counting_binomial":
      result = solveProbStatsTleDExercise(statement, classification.topicType);
      break;

    case "complex_numbers_geometry_transformations":
      result = solveComplexTleDExercise(statement);
      break;

    case "sequences_recurrence_convergence":
    case "integrals_areas_ipp":
    case "exponential_study":
    case "logarithm_study":
    case "symmetry_generalities_functions":
    case "derivatives_primitives_reciprocal":
    case "limits_continuity_asymptotes":
    default:
      result = solveAnalysisTleDExercise(statement, classification.topicType);
      break;
  }

  // Trouve les métadonnées officielles correspondantes dans la base de connaissances
  const matchedLesson = MATHS_TLE_D_CURRICULUM.find(l => l.lessonNumber === classification.lessonNumber);
  const success = classification.confidence >= 0.70;

  return {
    success,
    classification,
    result,
    methodologyAnalysis: result.toMethodologyAnalysisResult(),
    pedagogicalMetadata: {
      curriculum: "Mathématiques Terminale D (Côte d'Ivoire)",
      level: "Terminale D",
      themeTitle: matchedLesson ? matchedLesson.themeTitle : classification.themeTitle,
      lessonNumber: classification.lessonNumber,
      lessonTitle: matchedLesson ? matchedLesson.lessonTitle : classification.lessonTitle,
      executionMode: "deterministic_local_engine",
      officialReference: "Programme Officiel Ministère de l'Éducation Nationale et de l'Alphabétisation CI (Maths Tle D)",
    },
  };
}
