import { MethodologyAnalysisResult, StructuredScientificExercise } from '../../src/types';

export type ChapterId =
  | 'ch1' // Étude de fonctions polynômes et rationnelles / Nombres réels
  | 'ch2' // Probabilités / Équations & systèmes
  | 'ch3' // Logarithme népérien / Limites
  | 'ch4' // Fonction exponentielle / Dérivées
  | 'ch5' // Suites numériques / Étude de fonctions
  | 'ch6' // Statistique à deux variables / Logarithme
  | 'ch7' // Systèmes linéaires dans R x R & Programmation linéaire / Exponentielle
  | 'ch8' // Primitives et calcul intégral (A1) / Statistiques
  | 'ch9'; // Probabilités

export interface MathsSolveOptions {
  serie?: 'A1' | 'A2' | 'A' | string;
  level?: string;
  discipline?: string;
}

export interface MathsStep {
  stepNumber: number;
  title: string;
  description: string;
  mathLines: string[];
  justification?: string;
  pedagogicalTip?: string;
}

export interface MathsVerification {
  performed: boolean;
  description: string;
  checkPassed: boolean;
  details: string;
}

export interface MathsSolveResult {
  success: boolean;
  confidence: number; // 0.0 to 1.0
  chapterId: ChapterId;
  chapterTitle: string;
  exerciseType: string;
  methodUsed: string;
  formulasUsed: string[];
  courseExcerpt: string;
  statementCleaned: string;
  dataAndGiven: string[];
  stepByStepCalculations: MathsStep[];
  verification: MathsVerification;
  conclusion: string;
  finalAnswer: string;
  structuredScientificResolution: StructuredScientificExercise[];
  toMethodologyAnalysisResult: () => MethodologyAnalysisResult;
  applicableSeries?: ('A1' | 'A2')[];
  serieNotice?: string;
}

export interface MathsClassifierResult {
  isMathsTleA: boolean;
  chapterId?: ChapterId;
  chapterTitle?: string;
  exerciseType?: string;
  confidence: number;
  matchedKeywords: string[];
  relevantFormulas: string[];
  relevantMethods: string[];
}

