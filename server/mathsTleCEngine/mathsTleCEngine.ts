/**
 * Moteur d'orchestration local Mathématiques Terminale C
 * Pipeline déterministe Local-First pour les Mathématiques Série C
 */

import { classifyMathsTleCExercise } from "./classifier";
import { solveAnalysisExercise } from "./solvers/analysisSolver";
import { solveArithmeticExercise } from "./solvers/arithmeticSolver";
import { solveComplexAndTransformationsExercise } from "./solvers/complexSolver";
import { solveGeometryAndConicsExercise } from "./solvers/geometryConicsSolver";
import { solveProbabilityAndStatsExercise } from "./solvers/probabilityStatsSolver";
import { MathsTleCStructuredResult } from "./types";

export interface MathsTleCSolutionResponse {
  handledLocally: boolean;
  themeId?: string;
  themeTitle?: string;
  lessonNumber?: number;
  lessonTitle?: string;
  confidence?: number;
  result?: MathsTleCStructuredResult;
}

export function solveMathsTleCExercise(
  statement: string,
  options?: { serie?: string; level?: string }
): MathsTleCSolutionResponse {
  if (!statement || statement.trim().length === 0) {
    return { handledLocally: false };
  }

  // 1. Classification sémantique selon le programme officiel Terminale C
  const classification = classifyMathsTleCExercise(statement);

  // 2. Routage vers le solveur spécialisé
  try {
    let result: MathsTleCStructuredResult | null = null;

    switch (classification.topicType) {
      // Arithmétique
      case "arithmetic_divisibility_primes_congruence":
      case "arithmetic_euclid_bezout_gauss_diophantine":
        result = solveArithmeticExercise(statement);
        break;

      // Nombres complexes & Transformations
      case "complex_algebra_roots":
      case "complex_geometry_plan":
      case "similarities_plane":
      case "isometries_plane":
        result = solveComplexAndTransformationsExercise(statement);
        break;

      // Analyse, Fonctions, Intégrales, Équations différentielles, Suites
      case "analysis_limits_continuity_tvi":
      case "analysis_differentiation_study":
      case "analysis_logarithm_powers":
      case "analysis_exponential":
      case "analysis_integrals_areas":
      case "differential_equations":
      case "sequences":
        result = solveAnalysisExercise(statement);
        break;

      // Géométrie du plan, Barycentres, Lignes de niveaux, Coniques, Espace
      case "conics":
      case "geometry_space":
      case "barycenters_level_lines":
        result = solveGeometryAndConicsExercise(statement);
        break;

      // Probabilités & Statistiques doubles
      case "probabilities_conditional_binomial":
      case "statistics_bivariate":
        result = solveProbabilityAndStatsExercise(statement);
        break;

      default:
        result = solveAnalysisExercise(statement);
        break;
    }

    if (result) {
      return {
        handledLocally: true,
        themeId: classification.themeId,
        themeTitle: classification.themeTitle,
        lessonNumber: classification.lessonNumber,
        lessonTitle: classification.lessonTitle,
        confidence: classification.confidence,
        result,
      };
    }
  } catch (err) {
    console.warn("[MathsTleCEngine] Error in local Maths Tle C solver:", err);
  }

  return {
    handledLocally: false,
    themeId: classification.themeId,
    themeTitle: classification.themeTitle,
    confidence: classification.confidence,
  };
}
