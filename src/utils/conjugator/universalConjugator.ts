import { LanguageCode, VerbConjugationResult, ParsedConjugationRequest } from './types';
export type { LanguageCode, VerbConjugationResult, ParsedConjugationRequest };
import { conjugateFrenchVerb } from './frenchConjugator';
import { conjugateEnglishVerb } from './englishConjugator';
import { conjugateGermanVerb } from './germanConjugator';
import { conjugateSpanishVerb } from './spanishConjugator';

const FR_KNOWN_VERBS = [
  'être', 'etre', 'avoir', 'aller', 'faire', 'dire', 'pouvoir', 'vouloir', 'savoir', 'devoir',
  'voir', 'prendre', 'mettre', 'partir', 'tenir', 'venir', 'finir', 'manger', 'aimer', 'chanter',
  'parler', 'choisir', 'rendre', 'écrire', 'ecrire', 'lire', 'croire', 'boire', 'dormir', 'ouvrir',
  'recevoir', 'falloir', 'valoir', 'courir', 'mourir', 'naître', 'naitre', 'vivre', 'connaître', 'connaitre',
  'appeler', 'jeter', 'envoyer', 'payer', 'acheter', 'espérer', 'esperer', 'commencer', 'placer', 'avancer'
];

const EN_KNOWN_VERBS = [
  'be', 'have', 'do', 'go', 'see', 'come', 'take', 'give', 'make', 'write',
  'speak', 'read', 'eat', 'run', 'play', 'think', 'know', 'buy', 'teach', 'drive',
  'swim', 'tell', 'feel', 'leave', 'find', 'bring', 'meet', 'begin', 'work', 'live',
  'walk', 'study', 'understand', 'listen', 'watch', 'stand', 'sit', 'choose', 'drink'
];

const DE_KNOWN_VERBS = [
  'sein', 'haben', 'werden', 'können', 'koennen', 'müssen', 'muessen', 'wollen', 'sollen', 'dürfen', 'duerfen',
  'wissen', 'gehen', 'sehen', 'bleiben', 'fahren', 'arbeiten', 'spielen', 'lernen', 'schreiben', 'lesen',
  'kommen', 'sprechen', 'helfen', 'geben', 'nehmen', 'finden', 'denken', 'bringen', 'trinken', 'essen',
  'schlafen', 'laufen', 'wohnen', 'kaufen', 'beginnen', 'verstehen', 'fragen', 'antworten'
];

const ES_KNOWN_VERBS = [
  'ser', 'estar', 'haber', 'tener', 'hacer', 'decir', 'poder', 'poner', 'salir', 'venir',
  'querer', 'hablar', 'vivir', 'comer', 'estudiar', 'escribir', 'dar', 'ver', 'saber', 'ir',
  'llegar', 'pasar', 'deber', 'creer', 'llevar', 'dejar', 'sentir', 'cantar', 'trabajar', 'tomar',
  'mirar', 'escuchar', 'pensar', 'perder', 'encontrar', 'dormir', 'pedir', 'servir'
];

export interface TenseDefinition {
  id: string;
  labelFr: string;
  patterns: RegExp[];
  lang?: LanguageCode;
}

const TENSE_DEFINITIONS: TenseDefinition[] = [
  // Français
  {
    id: 'present',
    labelFr: "Présent de l'Indicatif",
    lang: 'fr',
    patterns: [
      /\b(?:au\s+)?pr[ée]sent\s+de\s+l['’]indicatif\b/i,
      /\bau\s+pr[ée]sent\b/i,
      /\bpr[ée]sent\b/i
    ]
  },
  {
    id: 'imparfait',
    labelFr: "Imparfait de l'Indicatif",
    lang: 'fr',
    patterns: [
      /\b(?:[àa]\s+l['’])?imparfait\s+de\s+l['’]indicatif\b/i,
      /\b[àa]\s+l['’]imparfait\b/i,
      /\bimparfait\b/i
    ]
  },
  {
    id: 'passe_compose',
    labelFr: "Passé Composé",
    lang: 'fr',
    patterns: [
      /\b(?:au\s+)?pass[ée][- ]compos[ée]\b/i,
      /\bpasse[- ]compose\b/i
    ]
  },
  {
    id: 'passe_simple',
    labelFr: "Passé Simple",
    lang: 'fr',
    patterns: [
      /\b(?:au\s+)?pass[ée][- ]simple\b/i,
      /\bpasse[- ]simple\b/i
    ]
  },
  {
    id: 'plus_que_parfait',
    labelFr: "Plus-que-parfait",
    lang: 'fr',
    patterns: [
      /\b(?:au\s+)?plus[- ]que[- ]parfait\b/i,
      /\bplusqueparfait\b/i
    ]
  },
  {
    id: 'futur_simple',
    labelFr: "Futur Simple",
    lang: 'fr',
    patterns: [
      /\b(?:au\s+)?futur\s+simple\b/i,
      /\bau\s+futur\b/i,
      /\bfutur\b/i
    ]
  },
  {
    id: 'futur_anterieur',
    labelFr: "Futur Antérieur",
    lang: 'fr',
    patterns: [
      /\b(?:au\s+)?futur\s+ant[ée]rieur\b/i
    ]
  },
  {
    id: 'subjonctif_present',
    labelFr: "Subjonctif Présent",
    lang: 'fr',
    patterns: [
      /\b(?:au\s+)?subjonctif\s+pr[ée]sent\b/i,
      /\bau\s+subjonctif\b/i,
      /\bsubjonctif\b/i
    ]
  },
  {
    id: 'conditionnel_present',
    labelFr: "Conditionnel Présent",
    lang: 'fr',
    patterns: [
      /\b(?:au\s+)?conditionnel\s+pr[ée]sent\b/i,
      /\bau\s+conditionnel\b/i,
      /\bconditionnel\b/i
    ]
  },
  {
    id: 'imperatif_present',
    labelFr: "Impératif Présent",
    lang: 'fr',
    patterns: [
      /\b(?:[àa]\s+l['’])?imp[ée]ratif(?:\s+pr[ée]sent)?\b/i
    ]
  },

  // Anglais
  {
    id: 'simple_present',
    labelFr: "Simple Present",
    lang: 'en',
    patterns: [
      /\b(?:in\s+)?simple\s+present\b/i,
      /\bpresent\s+simple\b/i
    ]
  },
  {
    id: 'present_continuous',
    labelFr: "Present Continuous",
    lang: 'en',
    patterns: [
      /\bpresent\s+continuous\b/i,
      /\bpresent\s+progressive\b/i
    ]
  },
  {
    id: 'simple_past',
    labelFr: "Simple Past (Prétérit)",
    lang: 'en',
    patterns: [
      /\b(?:in\s+)?simple\s+past\b/i,
      /\bpast\s+simple\b/i,
      /\bpr[ée]t[ée]rit\b/i,
      /\bpreterite?\b/i
    ]
  },
  {
    id: 'present_perfect',
    labelFr: "Present Perfect",
    lang: 'en',
    patterns: [
      /\bpresent\s+perfect\b/i
    ]
  },
  {
    id: 'past_perfect',
    labelFr: "Past Perfect",
    lang: 'en',
    patterns: [
      /\bpast\s+perfect\b/i,
      /\bpluperfect\b/i
    ]
  },

  // Allemand
  {
    id: 'praesens',
    labelFr: "Präsens (Présent)",
    lang: 'de',
    patterns: [
      /\b(?:im\s+)?pr[äa]sens\b/i
    ]
  },
  {
    id: 'praeteritum',
    labelFr: "Präteritum (Prétérit)",
    lang: 'de',
    patterns: [
      /\b(?:im\s+)?pr[äa]teritum\b/i
    ]
  },
  {
    id: 'perfekt',
    labelFr: "Perfekt (Parfait / Passé composé)",
    lang: 'de',
    patterns: [
      /\b(?:im\s+)?perfekt\b/i
    ]
  },
  {
    id: 'plusquamperfekt',
    labelFr: "Plusquamperfekt",
    lang: 'de',
    patterns: [
      /\b(?:im\s+)?plusquamperfekt\b/i
    ]
  },
  {
    id: 'konjunktiv_ii',
    labelFr: "Konjunktiv II",
    lang: 'de',
    patterns: [
      /\b(?:im\s+)?konjunktiv\s+ii\b/i,
      /\bkonjunktiv\s+2\b/i
    ]
  },

  // Espagnol
  {
    id: 'presente',
    labelFr: "Presente (Présent)",
    lang: 'es',
    patterns: [
      /\b(?:en\s+)?presente\s+de\s+indicativo\b/i,
      /\ben\s+presente\b/i
    ]
  },
  {
    id: 'imperfecto',
    labelFr: "Pretérito Imperfecto",
    lang: 'es',
    patterns: [
      /\b(?:en\s+)?pret[ée]rito\s+imperfecto\b/i,
      /\bimperfecto\b/i
    ]
  },
  {
    id: 'indefinido',
    labelFr: "Pretérito Indefinido (Passé simple)",
    lang: 'es',
    patterns: [
      /\b(?:en\s+)?pret[ée]rito\s+indefinido\b/i,
      /\bindefinido\b/i
    ]
  },
  {
    id: 'subjuntivo_presente',
    labelFr: "Subjuntivo Presente",
    lang: 'es',
    patterns: [
      /\b(?:en\s+)?subjuntivo\s+presente\b/i,
      /\ben\s+subjuntivo\b/i
    ]
  }
];

const LANGUAGE_LABELS: Record<LanguageCode, string> = {
  fr: 'Français',
  en: 'Anglais (English)',
  de: 'Allemand (Deutsch)',
  es: 'Espagnol (Español)'
};

/**
 * Normalise les formes orthographiques courantes (notamment sans accent).
 */
export function normalizeVerbInfinitive(verb: string): string {
  const clean = verb.trim().toLowerCase();
  const replacements: Record<string, string> = {
    'etre': 'être',
    'naitre': 'naître',
    'connaitre': 'connaître',
    'reconnaitre': 'reconnaître',
    'apparaitre': 'apparaître',
    'disparaitre': 'disparaître',
    'paraitre': 'paraître',
    'ecrire': 'écrire',
    'creer': 'créer',
    'ceder': 'céder',
    'esperer': 'espérer',
    'reussir': 'réussir',
    'obeir': 'obéir',
    'guerir': 'guérir',
    'secher': 'sécher',
    'proteger': 'protéger',
    'preferer': 'préférer'
  };
  return replacements[clean] || clean;
}

/**
 * Analyse sémantique complète d'une requête de conjugaison en langage naturel.
 * Reconnaît toutes les variantes :
 * - "conjugaison verbe être au present"
 * - "peux-tu me conjuguer avoir au futur simple s'il te plaît ?"
 * - "verbe speak in simple past"
 * - "sein im präsens"
 * - "comment se conjugue le verbe aller"
 * - etc.
 */
export function parseConjugationRequest(rawInput: string, preferredLang?: LanguageCode): ParsedConjugationRequest {
  const input = rawInput.trim();
  const lower = input.toLowerCase();

  // 1. Détecter si la requête exprime une intention de conjugaison
  //    IMPORTANT : un sujet, un devoir ou un énoncé d'exercice complet ne doit
  //    JAMAIS être réinterprété comme une demande de conjugaison simplement parce
  //    qu'il contient le mot "verbe" ou un mot qui ressemble à un infinitif.
  //    Les indices faibles ci-dessous ne sont donc pris en compte que pour une
  //    commande courte et explicite (ex: "conjugue le verbe finir"), jamais pour
  //    un texte long (sujet, dissertation, exercice, question de cours, etc.).
  const wordCount = input.split(/\s+/).filter(Boolean).length;
  const isShortDirectCommand = wordCount <= 12;

  const triggerKeywords = [
    'conjugaison', 'conjugue', 'conjuguer', 'conjugate', 'conjugation',
    'konjugation', 'konjugiere', 'konjugieren', 'conjugacion', 'conjugación',
    'conjuga', 'conjugar', 'comment se conjugue', 'comment conjuguer',
    'comment s\'écrit le verbe', 'comment ecrit on le verbe', 'table de conjugaison',
    'tableau de conjugaison', 'fiche de conjugaison', 'les temps du verbe'
  ];

  const hasStrongTrigger = triggerKeywords.some(kw => lower.includes(kw));
  const hasWeakTrigger = isShortDirectCommand && (
    /\b(?:le\s+|du\s+|au\s+)?verbe\s+[a-zà-öø-ÿ]+/i.test(lower) ||
    /\b(?:the\s+)?verb\s+[a-z]+/i.test(lower) ||
    /\b(?:das\s+)?verb\s+[a-zäöüß]+/i.test(lower) ||
    /\b(?:el\s+)?verbo\s+[a-zñáéíóú]+/i.test(lower) ||
    /^(?:to\s+[a-z]+)$/i.test(lower)
  );
  const hasTrigger = hasStrongTrigger || hasWeakTrigger;

  // 2. Détecter la langue explicite ou via les indices
  let detectedLang: LanguageCode = preferredLang || 'fr';
  if (/\b(allemand|deutsch|german|auf deutsch)\b/i.test(lower)) {
    detectedLang = 'de';
  } else if (/\b(anglais|english|englais|in english)\b/i.test(lower)) {
    detectedLang = 'en';
  } else if (/\b(espagnol|español|spanish|en español|en espanol)\b/i.test(lower)) {
    detectedLang = 'es';
  } else if (/\b(français|francais|french|en français|en francais)\b/i.test(lower)) {
    detectedLang = 'fr';
  }

  // 3. Détecter si un temps particulier est expressément demandé
  let requestedTenseId: string | undefined;
  let requestedTenseLabel: string | undefined;

  for (const tDef of TENSE_DEFINITIONS) {
    if (tDef.patterns.some(p => p.test(lower))) {
      requestedTenseId = tDef.id;
      requestedTenseLabel = tDef.labelFr;
      if (!preferredLang && tDef.lang) {
        // Renforce la détection de langue si c'est un temps typique
        if (tDef.lang === 'de' && /präsens|präteritum|perfekt|konjunktiv/i.test(lower)) detectedLang = 'de';
        if (tDef.lang === 'en' && /simple\s+past|simple\s+present|present\s+perfect/i.test(lower)) detectedLang = 'en';
        if (tDef.lang === 'es' && /indefinido|imperfecto|subjuntivo/i.test(lower)) detectedLang = 'es';
      }
      break;
    }
  }

  // 4. Nettoyer la phrase pour isoler l'infinitif du verbe
  let cleaned = lower;

  // Supprimer les questions d'ouverture et formules de politesse
  cleaned = cleaned.replace(/^(?:bonjour|bonsoir|salut|s'il\s+te\s+pla[îi]t|svp|stp|peux[- ]tu(?:\s+me)?|pourrais[- ]tu(?:\s+me)?|donne[- ]moi|affiche[- ]moi|montre[- ]moi|je\s+veux|je\s+cherche|comment\s+se\s+conjugue(?:\s+le)?|comment\s+conjuguer(?:\s+le)?)\s+/i, '');
  cleaned = cleaned.replace(/[?!.:;,]/g, ' ');

  // Supprimer les mots déclencheurs de conjugaison
  cleaned = cleaned.replace(/\b(?:la\s+)?conjugaison\s+(?:du\s+verbe\s+|du\s+|de\s+la\s+|de\s+l['’]|de\s+|d['’])?/gi, ' ');
  cleaned = cleaned.replace(/\b(?:tableau|table|fiche)\s+de\s+conjugaison(?:\s+(?:du|de|d['’]))?\b/gi, ' ');
  cleaned = cleaned.replace(/\b(?:conjugue|conjuguer|conjugate|konjugiere|konjugieren|conjuga|conjugar)\s+(?:le\s+verbe\s+|le\s+|la\s+|l['’]|the\s+verb\s+|das\s+verb\s+|el\s+verbo\s+)?/gi, ' ');

  // Supprimer les occurrences isolées de "verbe", "verb", "verbo"
  cleaned = cleaned.replace(/\b(?:le\s+|du\s+|au\s+|un\s+)?verbe\s+(?:de\s+|d['’])?/gi, ' ');
  cleaned = cleaned.replace(/\b(?:the\s+)?verb\s+/gi, ' ');
  cleaned = cleaned.replace(/\b(?:das\s+)?verb\s+/gi, ' ');
  cleaned = cleaned.replace(/\b(?:el\s+)?verbo\s+/gi, ' ');

  // Supprimer les mentions de langue
  cleaned = cleaned.replace(/\b(?:en\s+)?(?:français|francais|anglais|english|allemand|deutsch|german|espagnol|español|spanish)\b/gi, ' ');

  // Supprimer les expressions de temps déjà détectées ou récurrentes
  cleaned = cleaned.replace(/\b(?:au|à\s+l['’]|a\s+l['’]|in|im|en)\s+(?:pr[ée]sent|imparfait|pass[ée][- ]compos[ée]|pass[ée][- ]simple|futur(?:\s+simple)?|plus[- ]que[- ]parfait|subjonctif|conditionnel|simple\s+past|simple\s+present|present\s+perfect|pr[äa]sens|pr[äa]teritum|perfekt|presente|indefinido|imperfecto)(?:\s+de\s+l['’]indicatif)?\b/gi, ' ');
  cleaned = cleaned.replace(/\b(?:pr[ée]sent|imparfait|pass[ée][- ]compos[ée]|pass[ée][- ]simple|futur(?:\s+simple)?|plus[- ]que[- ]parfait|subjonctif|conditionnel)\b/gi, ' ');
  cleaned = cleaned.replace(/\b(?:[àa]\s+tous\s+les\s+temps|dans\s+tous\s+les\s+temps|in\s+all\s+tenses|alle\s+zeiten|en\s+todos\s+los\s+tiempos)\b/gi, ' ');

  // Supprimer les résidus "s'il te plaît" / "merci"
  cleaned = cleaned.replace(/\b(?:s'il\s+te\s+pla[îi]t|s'il\s+vous\s+pla[îi]t|merci|stp|svp)\b/gi, ' ');

  // Nettoyer les espaces
  cleaned = cleaned.replace(/\s+/g, ' ').trim();

  // 5. Recherche par correspondance dans les listes de verbes connus
  const tokens = cleaned.split(/\s+/).filter(t => t.length > 0);

  let candidateVerb = '';

  // Essayer de trouver un verbe connu dans les tokens ou dans la chaîne
  // Priorité : chercher si un verbe exact est présent
  const allKnown = [
    ...FR_KNOWN_VERBS.map(v => ({ v, lang: 'fr' as LanguageCode })),
    ...EN_KNOWN_VERBS.map(v => ({ v, lang: 'en' as LanguageCode })),
    ...DE_KNOWN_VERBS.map(v => ({ v, lang: 'de' as LanguageCode })),
    ...ES_KNOWN_VERBS.map(v => ({ v, lang: 'es' as LanguageCode }))
  ];

  // Match exact sur un token
  for (const t of tokens) {
    const norm = normalizeVerbInfinitive(t);
    const match = allKnown.find(k => k.v === norm || k.v === t);
    if (match) {
      candidateVerb = normalizeVerbInfinitive(match.v);
      if (!preferredLang) detectedLang = match.lang;
      break;
    }
  }

  // Si pas trouvé par token, chercher si l'un des tokens se termine par des terminaisons classiques
  if (!candidateVerb && tokens.length > 0) {
    // Vérifier les formes réfléchies comme "se laver", "s'appeler"
    if (tokens[0] === 'se' && tokens.length > 1) {
      candidateVerb = `se ${normalizeVerbInfinitive(tokens[1])}`;
    } else if (tokens[0].startsWith("s'") && tokens[0].length > 2) {
      candidateVerb = normalizeVerbInfinitive(tokens[0]);
    } else if (tokens[0] === 'to' && tokens.length > 1) {
      candidateVerb = tokens[1];
      detectedLang = 'en';
    } else {
      candidateVerb = normalizeVerbInfinitive(tokens[0]);
    }
  }

  // Si toujours vide, essayer sur l'entrée brute
  if (!candidateVerb) {
    candidateVerb = normalizeVerbInfinitive(cleaned || input);
  }

  // Enlever les éventuels guillemets
  candidateVerb = candidateVerb.replace(/["'«»]/g, '').trim();

  // Normalisation finale
  candidateVerb = normalizeVerbInfinitive(candidateVerb);

  // Détection de langue basée sur le verbe final s'il est sans ambiguïté
  if (DE_KNOWN_VERBS.includes(candidateVerb)) detectedLang = 'de';
  else if (ES_KNOWN_VERBS.includes(candidateVerb) && !FR_KNOWN_VERBS.includes(candidateVerb)) detectedLang = 'es';
  else if (EN_KNOWN_VERBS.includes(candidateVerb) && !FR_KNOWN_VERBS.includes(candidateVerb)) detectedLang = 'en';
  else if (FR_KNOWN_VERBS.includes(candidateVerb)) detectedLang = 'fr';

  // Exclusion formelle : les notions scolaires et thèmes disciplinaires
  // (ex: "guerre", "guerre froide", "histoire", "dissertation", "theoreme", etc.)
  // ne doivent JAMAIS être détournés vers la conjugaison sauf si l'utilisateur
  // a explicitement écrit "conjuguer", "conjugue", "conjugaison" (hasStrongTrigger).
  const isSchoolOrDisciplinaryTopic = /\b(?:guerre|guerre\s+froide|bipolarisation|crise|bataille|traite|colonisation|decolonisation|histoire|geographie|philosophie|dissertation|theoreme|formule|cours|lecon|matiere|physique|chimie|svt|biologie|lettres?|arbre|chiffre|danger|hiver|livre|sucre|pierre|terre|ordre|centre)\b/i.test(lower);
  if (isSchoolOrDisciplinaryTopic && !hasStrongTrigger) {
    return {
      rawInput: input,
      infinitive: candidateVerb || 'être',
      language: detectedLang,
      languageLabel: LANGUAGE_LABELS[detectedLang],
      requestedTenseId: undefined,
      requestedTenseLabel: undefined,
      isConjugationIntent: false
    };
  }

  // Sans déclencheur explicite (hasTrigger = false), on n'accepte la conjugaison QUE :
  // 1. Si un temps grammatical a été expressément nommé (ex: "finir au subjonctif", "aller au futur simple")
  //    ET que le candidat est soit un verbe connu soit a une terminaison verbale canonique ;
  // 2. OU si le mot correspond exactement à un verbe certifié dans nos dictionnaires
  //    dans une commande ultra-courte : 1 mot seul (ex: "chanter") ou 2 mots réflexifs/anglais ("se laver", "to speak").
  // En aucun cas un mot comme "guerre", "lettre", "hiver", "danger" ne doit être deviné comme un verbe
  // simplement parce qu'il se termine par "re" ou "er".
  const isCertifiedKnownVerb =
    FR_KNOWN_VERBS.includes(candidateVerb) ||
    EN_KNOWN_VERBS.includes(candidateVerb) ||
    DE_KNOWN_VERBS.includes(candidateVerb) ||
    ES_KNOWN_VERBS.includes(candidateVerb);

  const isStrictBareVerb =
    (tokens.length === 1 && isCertifiedKnownVerb) ||
    (tokens.length === 2 && (tokens[0] === 'se' || tokens[0].startsWith("s'") || tokens[0] === 'to') && isCertifiedKnownVerb);

  const isTenseGuidedVerb = isShortDirectCommand && !!requestedTenseId && (
    isCertifiedKnownVerb ||
    candidateVerb.endsWith('er') || candidateVerb.endsWith('ir') || candidateVerb.endsWith('re') || candidateVerb.endsWith('ar') || candidateVerb.endsWith('en')
  );

  const looksLikeBareVerbGuess = isStrictBareVerb || isTenseGuidedVerb;
  const isIntent = hasTrigger || looksLikeBareVerbGuess;

  return {
    rawInput: input,
    infinitive: candidateVerb || 'être',
    language: detectedLang,
    languageLabel: LANGUAGE_LABELS[detectedLang],
    requestedTenseId,
    requestedTenseLabel,
    isConjugationIntent: isIntent
  };
}

export function detectVerbLanguage(rawInput: string): LanguageCode {
  const parsed = parseConjugationRequest(rawInput);
  return parsed.language;
}

export function extractInfinitive(rawInput: string): string {
  const parsed = parseConjugationRequest(rawInput);
  return parsed.infinitive;
}

/**
 * Conjugue un verbe en français, anglais, allemand ou espagnol.
 * Utilise l'analyseur de requête pour nettoyer automatiquement toute formulation humaine.
 */
export function conjugateVerb(rawVerb: string, forcedLang?: LanguageCode): VerbConjugationResult {
  const parsed = parseConjugationRequest(rawVerb, forcedLang);
  const infinitive = parsed.infinitive;
  const lang = forcedLang || parsed.language;

  switch (lang) {
    case 'en':
      return conjugateEnglishVerb(infinitive);
    case 'de':
      return conjugateGermanVerb(infinitive);
    case 'es':
      return conjugateSpanishVerb(infinitive);
    case 'fr':
    default:
      return conjugateFrenchVerb(infinitive);
  }
}
