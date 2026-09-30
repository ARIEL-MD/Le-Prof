/**
 * Moteur Expert Physique-Chimie 6ème (Côte d'Ivoire)
 * Orchestre la classification et la résolution déterministe locale selon le programme officiel
 */

import { classifyPc6eExercise, Pc6eClassification } from "./classifier";
import { solvePc6eExercise } from "./solvers/pc6eSolver";
import { Pc6eStructuredResult } from "./types";
import { PC_6E_CURRICULUM } from "../../pc6eKnowledgeBase";

export interface Pc6eEngineResponse {
  success: boolean;
  handledLocally: boolean;
  classification: Pc6eClassification;
  result: Pc6eStructuredResult;
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

export function solvePc6e(statement: string): Pc6eEngineResponse {
  const classification = classifyPc6eExercise(statement);
  const result = solvePc6eExercise(statement, classification.topicType);

  return {
    success: true,
    handledLocally: true,
    classification,
    result,
    methodologyAnalysis: result.toMethodologyAnalysisResult(),
    pedagogicalMetadata: {
      curriculum: "Programme National Officiel de Physique-Chimie 6ème (Côte d'Ivoire)",
      level: "6ème (Collège)",
      themeTitle: classification.themeTitle,
      lessonNumber: classification.lessonNumber,
      lessonTitle: classification.lessonTitle,
      executionMode: "deterministic_local_engine",
      officialReference: "École Numérique & Programmes Éducatifs CI",
    },
  };
}
