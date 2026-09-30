/**
 * Types pour le moteur Mathématiques Terminale D (Côte d'Ivoire)
 */

export interface MathsTleDStep {
  stepNumber: number;
  title: string;
  stepType: "HYPOTHESE" | "IDENTIFICATION" | "DEMONSTRATION" | "CALCUL" | "CONCLUSION";
  observationOrData: string;
  scientificConceptOrRule: string;
  deductionOrCalculation: string;
  conclusionOrJustification: string;
}

export interface MathsTleDStructuredResult {
  title: string;
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  problemStatement: string;
  scientificHypothesis?: string;
  steps: MathsTleDStep[];
  finalConclusion: string;
  keyMathematicalTerms: string[];
  commonPitfallsAvoided: string[];
  toMethodologyAnalysisResult: () => any;
}
