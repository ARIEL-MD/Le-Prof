/**
 * Types pour le moteur Géographie 6ème (Côte d'Ivoire)
 */

export interface Geo6eStep {
  stepNumber: number;
  title: string;
  stepType: "OBSERVATION" | "LOCALISATION" | "DESCRIPTION" | "EXPLICATION" | "COMPARAISON" | "CONSEIL_CIVIQUE";
  observationOrData: string;
  scientificConceptOrRule: string;
  deductionOrExplanation: string;
  conclusionOrJustification: string;
}

export interface Geo6eStructuredResult {
  title: string;
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  problemStatement: string;
  contextSituation?: string;
  steps: Geo6eStep[];
  finalConclusion: string;
  keyGeographicalTerms: string[];
  commonPitfallsAvoided: string[];
  toMethodologyAnalysisResult: () => any;
}
