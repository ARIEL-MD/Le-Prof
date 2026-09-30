/**
 * Types pour le moteur Mathématiques 6ème (Côte d'Ivoire)
 */

export interface Maths6eStep {
  stepNumber: number;
  title: string;
  stepType: "HYPOTHESE" | "IDENTIFICATION" | "DEMONSTRATION" | "CALCUL" | "CONCLUSION";
  observationOrData: string;
  scientificConceptOrRule: string;
  deductionOrCalculation: string;
  conclusionOrJustification: string;
}

export interface Maths6eStructuredResult {
  title: string;
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  problemStatement: string;
  steps: Maths6eStep[];
  finalConclusion: string;
  keyMathematicalTerms: string[];
  commonPitfallsAvoided: string[];
  toMethodologyAnalysisResult: () => any;
}
