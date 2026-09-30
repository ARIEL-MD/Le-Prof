/**
 * Types pour le moteur de résolution déterministe Physique-Chimie Terminales C, D, E
 */

export interface PcStep {
  title: string;
  observationOrData: string;
  scientificConceptOrRule: string;
  deductionOrCalculation: string;
  conclusionOrJustification: string;
}

export interface PcStructuredResultOptions {
  title: string;
  themeId: string;
  themeTitle: string;
  discipline: "CHIMIE" | "PHYSIQUE";
  lessonNumber: number;
  lessonTitle: string;
  problemStatement: string;
  scientificHypothesis?: string;
  steps: PcStep[];
  finalConclusion: string;
  keyScientificTerms: string[];
  commonPitfallsAvoided: string[];
}

export interface PcStructuredResult {
  title: string;
  themeId: string;
  themeTitle: string;
  discipline: "CHIMIE" | "PHYSIQUE";
  lessonNumber: number;
  lessonTitle: string;
  problemStatement: string;
  scientificHypothesis?: string;
  steps: PcStep[];
  finalConclusion: string;
  keyScientificTerms: string[];
  commonPitfallsAvoided: string[];
  toMethodologyAnalysisResult: () => any;
}
