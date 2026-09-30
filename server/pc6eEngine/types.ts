/**
 * Types pour le moteur Physique-Chimie 6ème (Côte d'Ivoire)
 */

export interface Pc6eStep {
  stepNumber: number;
  title: string;
  stepType: "OBSERVATION" | "IDENTIFICATION" | "EXPERIENCE" | "CALCUL" | "CONCLUSION_SECURITE";
  observationOrData: string;
  scientificConceptOrRule: string;
  deductionOrCalculation: string;
  conclusionOrJustification: string;
}

export interface Pc6eStructuredResult {
  title: string;
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  problemStatement: string;
  steps: Pc6eStep[];
  finalConclusion: string;
  keyScientificTerms: string[];
  commonPitfallsAvoided: string[];
  toMethodologyAnalysisResult: () => any;
}
