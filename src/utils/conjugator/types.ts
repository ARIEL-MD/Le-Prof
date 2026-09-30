export type LanguageCode = 'fr' | 'en' | 'de' | 'es';

export interface PersonConjugation {
  person: string;
  form: string;
}

export interface TenseConjugation {
  tenseName: string;
  tenseLabelFr: string;
  forms: PersonConjugation[];
  notes?: string;
}

export interface MoodGroup {
  moodName: string;
  tenses: TenseConjugation[];
}

export interface VerbConjugationResult {
  verb: string;
  language: LanguageCode;
  languageLabel: string;
  infinitive: string;
  translationFr?: string;
  auxiliary?: string; // e.g. 'avoir' | 'être' for FR, 'haben' | 'sein' for DE
  groupOrType?: string; // e.g. '1er groupe', 'Verbe irrégulier', 'Modalverb'
  participles: {
    present: string;
    past: string;
  };
  moods: MoodGroup[];
  quickRules?: string[];
}

export interface ParsedConjugationRequest {
  rawInput: string;
  infinitive: string;
  language: LanguageCode;
  languageLabel: string;
  requestedTenseId?: string;
  requestedTenseLabel?: string;
  isConjugationIntent: boolean;
}
