/**
 * Types pour le moteur d'analyse et de résolution SVT Terminale D
 */

export interface SvtExerciseClassification {
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  topicType:
    | "genetics_cross"
    | "pedigree_human_genetics"
    | "action_potential_nerve"
    | "synapse_integration"
    | "reflex_arc_medullary"
    | "muscle_contraction_energy"
    | "cardiac_pressure_regulation"
    | "reproduction_gametogenesis_hormones"
    | "plant_double_fertilization"
    | "immunology_humoral_cellular"
    | "hiv_aids_evolution"
    | "homeostasis_kidney_ph"
    | "glycemia_regulation"
    | "petroleum_geology_ci"
    | "soil_fertility_management"
    | "drugs_nervous_system"
    | "energy_metabolism_respiration"
    | "general_svt_investigation";
  confidence: number;
  keyEntities: string[];
}

export interface SvtStepSolution {
  title: string;
  observationOrData: string;
  scientificConceptOrRule: string;
  deductionOrCalculation: string;
  conclusionOrJustification: string;
}

export interface SvtStructuredResult {
  title: string;
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  problemStatement: string;
  scientificHypothesis?: string;
  stepByStepResolution: SvtStepSolution[];
  finalConclusion: string;
  keyScientificTerms: string[];
  commonPitfallsAvoided: string[];
  apcScoringGuide: {
    criterion: string;
    description: string;
    points: number;
  }[];
  // Convertisseur vers le format standard MethodologyAnalysisResult attendu par l'UI LE PROF
  toMethodologyAnalysisResult: () => any;
}
