/**
 * Moteur Expert Mathématiques 6ème (Côte d'Ivoire)
 * Orchestre la classification et la résolution déterministe locale selon le programme officiel
 */

import { classifyMaths6eExercise, Maths6eClassification } from "./classifier";
import { solveMaths6eExercise } from "./solvers/maths6eSolver";
import { Maths6eStructuredResult } from "./types";
import { MATHS_6E_CURRICULUM } from "../../maths6eKnowledgeBase";

export interface Maths6eEngineResponse {
  success: boolean;
  handledLocally: boolean;
  classification: Maths6eClassification;
  result: Maths6eStructuredResult;
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

export function solveMaths6e(statement: string): Maths6eEngineResponse {
  const classification = classifyMaths6eExercise(statement);
  const result = solveMaths6eExercise(statement, classification.topicType);

  return {
    success: true,
    handledLocally: true,
    classification,
    result,
    methodologyAnalysis: result.toMethodologyAnalysisResult(),
    pedagogicalMetadata: {
      curriculum: "Programme National Officiel de Mathématiques 6ème (Côte d'Ivoire)",
      level: "6ème (Collège)",
      themeTitle: classification.themeTitle,
      lessonNumber: classification.lessonNumber,
      lessonTitle: classification.lessonTitle,
      executionMode: "deterministic_local_engine",
      officialReference: "École Numérique & Programmes Éducatifs CI",
    },
  };
}
