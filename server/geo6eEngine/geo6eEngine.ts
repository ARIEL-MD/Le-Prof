/**
 * Moteur Expert Géographie 6ème (Côte d'Ivoire)
 * Orchestre la classification et la résolution déterministe locale selon le programme officiel
 */

import { classifyGeo6eExercise, Geo6eClassification } from "./classifier";
import { solveGeo6eExercise } from "./solvers/geo6eSolver";
import { Geo6eStructuredResult } from "./types";
import { GEO_6E_CURRICULUM } from "../../geographie6eKnowledgeBase";
import { solveGeo6eQuantitative } from "./advancedGeo6eSolver";

export interface Geo6eEngineResponse {
  success: boolean;
  handledLocally: boolean;
  classification: Geo6eClassification;
  result: Geo6eStructuredResult;
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

export function solveGeo6e(statement: string): Geo6eEngineResponse {
  const classification = classifyGeo6eExercise(statement);
  const advanced = solveGeo6eQuantitative(statement);
  const result = solveGeo6eExercise(statement, classification.topicType);
  if (advanced.handled) {
    result.steps = [{ stepNumber: 1, title: advanced.title, stepType: "EXPLICATION", observationOrData: statement, scientificConceptOrRule: advanced.rule, deductionOrExplanation: advanced.solution, conclusionOrJustification: advanced.solution }];
    result.finalConclusion = advanced.solution;
  }

  return {
    success: true,
    handledLocally: true,
    classification,
    result,
    methodologyAnalysis: result.toMethodologyAnalysisResult(),
    pedagogicalMetadata: {
      curriculum: "Programme National Officiel de Géographie 6ème (Côte d'Ivoire)",
      level: "6ème (Collège)",
      themeTitle: classification.themeTitle,
      lessonNumber: classification.lessonNumber,
      lessonTitle: classification.lessonTitle,
      executionMode: "deterministic_local_engine",
      officialReference: "École Numérique & Programmes Éducatifs CI",
    },
  };
}
