/**
 * Types pour le moteur Mathématiques Terminale C
 */

export interface MathsTleCStep {
  stepNumber: number;
  title: string;
  stepType: "HYPOTHESE" | "IDENTIFICATION" | "DEMONSTRATION" | "CALCUL" | "CONCLUSION";
  observationOrData: string;
  scientificConceptOrRule: string;
  deductionOrCalculation: string;
  conclusionOrJustification: string;
}

export interface MathsTleCStructuredResult {
  title: string;
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  problemStatement: string;
  scientificHypothesis?: string;
  steps: MathsTleCStep[];
  finalConclusion: string;
  keyMathematicalTerms: string[];
  commonPitfallsAvoided: string[];
  toMethodologyAnalysisResult: () => any;
}
