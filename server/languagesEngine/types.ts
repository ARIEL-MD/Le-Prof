import { MethodologyAnalysisResult } from "../../src/types";

export type SupportedLanguage = "anglais" | "allemand" | "espagnol";

export type LanguageTaskType =
  | "sentence_analysis"       // Analyse et traduction d'une simple phrase ou consigne
  | "passive_voice"           // Voix passive / Passiv / Voz pasiva
  | "reported_speech"         // Discours rapporté / Indirekte Rede / Estilo indirecto
  | "tenses_conjugation"      // Conjugaison et temps des verbes (Perfekt, Prétérit, Subjuntivo...)
  | "reading_comprehension"   // Compréhension de texte (True/False, questions de compréhension)
  | "guided_writing"          // Expression écrite / Rédaction / Aufsatz / Redacción
  | "translation"             // Thème et Version (traduction phrase/texte)
  | "vocabulary"              // Vocabulaire, synonymes, antonymes, dérivation
  | "fill_blanks"             // Texte à trous / Lückentext / Compléter
  | "complete_exam"           // Épreuve complète (Texte + Compréhension + Grammaire + Vocabulaire + Rédaction)
  | "general_exercise";       // Devoir complet polyvalent

export interface LanguageResolutionResult {
  language: SupportedLanguage;
  languageLabel: string;
  taskType: LanguageTaskType;
  title: string;
  fullSolution: string;
  frenchMirrorTranslation?: string;
  grammarRulesApplied: Array<{
    ruleName: string;
    explanation: string;
    example: string;
  }>;
  vocabularyHighlights?: Array<{
    term: string;
    nature: string;
    frenchEquivalent: string;
    contextExample?: string;
  }>;
  isGenericFallback?: boolean;
  methodologyAnalysis: MethodologyAnalysisResult;
}
