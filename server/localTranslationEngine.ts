/**
 * Traduction locale déterministe — sans IA, sans API externe.
 *
 * Ce moteur privilégie les expressions scolaires fréquentes et un petit lexique
 * pédagogique. Il ne prétend pas remplacer un traducteur généraliste : lorsque
 * la phrase n'est pas suffisamment couverte, l'interface propose Google Traduction
 * comme solution externe volontaire (simple URL, aucune API Google n'est appelée).
 */

export type TranslationLang = 'fr' | 'en' | 'de' | 'es';

const PHRASES: Record<string, Record<string, string>> = {
  'fr→en': {
    'bonjour': 'hello',
    'merci': 'thank you',
    's’il vous plaît': 'please',
    's il vous plaît': 'please',
    'comment allez-vous ?': 'how are you?',
    'quelle est la définition de': 'what is the definition of',
    'définir': 'define',
    'expliquez': 'explain',
    'explique': 'explain',
    'calculez': 'calculate',
    'démontrez': 'prove',
    'justifiez': 'justify',
    'comparez': 'compare',
    'traduisez': 'translate',
    'lisez le texte': 'read the text',
    'répondez aux questions': 'answer the questions',
    'exercice': 'exercise',
    'question': 'question',
    'réponse': 'answer',
    'devoir': 'homework',
    'professeur': 'teacher',
    'élève': 'student',
    'école': 'school',
    'classe': 'class',
    'livre': 'book',
    'texte': 'text',
  },
  'en→fr': {
    'hello': 'bonjour', 'thank you': 'merci', 'please': 's’il vous plaît',
    'what is the definition of': 'quelle est la définition de', 'define': 'définir',
    'explain': 'expliquer', 'calculate': 'calculer', 'prove': 'démontrer',
    'justify': 'justifier', 'compare': 'comparer', 'translate': 'traduire',
    'read the text': 'lire le texte', 'answer the questions': 'répondre aux questions',
    'exercise': 'exercice', 'question': 'question', 'answer': 'réponse',
    'homework': 'devoir', 'teacher': 'professeur', 'student': 'élève',
    'school': 'école', 'class': 'classe', 'book': 'livre', 'text': 'texte',
  },
  'fr→de': {
    'bonjour': 'hallo', 'merci': 'danke', 's’il vous plaît': 'bitte',
    's il vous plaît': 'bitte', 'définir': 'definieren', 'expliquez': 'erklären',
    'calculez': 'berechnen', 'démontrez': 'beweisen', 'justifiez': 'begründen',
    'comparez': 'vergleichen', 'traduisez': 'übersetzen', 'exercice': 'Übung',
    'question': 'Frage', 'réponse': 'Antwort', 'devoir': 'Hausaufgabe',
    'professeur': 'Lehrer', 'élève': 'Schüler', 'école': 'Schule',
    'classe': 'Klasse', 'livre': 'Buch', 'texte': 'Text',
  },
  'de→fr': {
    'hallo': 'bonjour', 'danke': 'merci', 'bitte': 's’il vous plaît',
    'definieren': 'définir', 'erklären': 'expliquer', 'berechnen': 'calculer',
    'beweisen': 'démontrer', 'begründen': 'justifier', 'vergleichen': 'comparer',
    'übersetzen': 'traduire', 'übung': 'exercice', 'frage': 'question',
    'antwort': 'réponse', 'hausaufgabe': 'devoir', 'lehrer': 'professeur',
    'schüler': 'élève', 'schule': 'école', 'klasse': 'classe', 'buch': 'livre', 'text': 'texte',
  },
  'fr→es': {
    'bonjour': 'hola', 'merci': 'gracias', 's’il vous plaît': 'por favor',
    's il vous plaît': 'por favor', 'définir': 'definir', 'expliquez': 'explique',
    'calculez': 'calcule', 'démontrez': 'demuestre', 'justifiez': 'justifique',
    'comparez': 'compare', 'traduisez': 'traduzca', 'exercice': 'ejercicio',
    'question': 'pregunta', 'réponse': 'respuesta', 'devoir': 'deberes',
    'professeur': 'profesor', 'élève': 'alumno', 'école': 'escuela',
    'classe': 'clase', 'livre': 'libro', 'texte': 'texto',
  },
  'es→fr': {
    'hola': 'bonjour', 'gracias': 'merci', 'por favor': 's’il vous plaît',
    'definir': 'définir', 'explique': 'expliquer', 'calcule': 'calculer',
    'demuestre': 'démontrer', 'justifique': 'justifier', 'compare': 'comparer',
    'traduzca': 'traduire', 'ejercicio': 'exercice', 'pregunta': 'question',
    'respuesta': 'réponse', 'deberes': 'devoir', 'profesor': 'professeur',
    'alumno': 'élève', 'escuela': 'école', 'clase': 'classe', 'libro': 'livre', 'texto': 'texte',
  },
  'en→de': {
    'hello': 'hallo', 'thank you': 'danke', 'please': 'bitte', 'exercise': 'Übung',
    'question': 'Frage', 'answer': 'Antwort', 'homework': 'Hausaufgabe', 'teacher': 'Lehrer',
    'student': 'Schüler', 'school': 'Schule', 'class': 'Klasse', 'book': 'Buch', 'text': 'Text',
  },
  'de→en': {
    'hallo': 'hello', 'danke': 'thank you', 'bitte': 'please', 'übung': 'exercise',
    'frage': 'question', 'antwort': 'answer', 'hausaufgabe': 'homework', 'lehrer': 'teacher',
    'schüler': 'student', 'schule': 'school', 'klasse': 'class', 'buch': 'book', 'text': 'text',
  },
  'en→es': {
    'hello': 'hola', 'thank you': 'gracias', 'please': 'por favor', 'exercise': 'ejercicio',
    'question': 'pregunta', 'answer': 'respuesta', 'homework': 'deberes', 'teacher': 'profesor',
    'student': 'alumno', 'school': 'escuela', 'class': 'clase', 'book': 'libro', 'text': 'texto',
  },
  'es→en': {
    'hola': 'hello', 'gracias': 'thank you', 'por favor': 'please', 'ejercicio': 'exercise',
    'pregunta': 'question', 'respuesta': 'answer', 'deberes': 'homework', 'profesor': 'teacher',
    'alumno': 'student', 'escuela': 'school', 'clase': 'class', 'libro': 'book', 'texto': 'text',
  },
  'de→es': {
    'hallo': 'hola', 'danke': 'gracias', 'bitte': 'por favor', 'übung': 'ejercicio',
    'frage': 'pregunta', 'antwort': 'respuesta', 'hausaufgabe': 'deberes', 'lehrer': 'profesor',
    'schüler': 'alumno', 'schule': 'escuela', 'klasse': 'clase', 'buch': 'libro', 'text': 'texto',
  },
  'es→de': {
    'hola': 'hallo', 'gracias': 'danke', 'por favor': 'bitte', 'ejercicio': 'Übung',
    'pregunta': 'Frage', 'respuesta': 'Antwort', 'deberes': 'Hausaufgabe', 'profesor': 'Lehrer',
    'alumno': 'Schüler', 'escuela': 'Schule', 'clase': 'Klasse', 'libro': 'Buch', 'texto': 'Text',
  },
};

const normalize = (s: string) => s.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

const LANGUAGE_HINTS: Record<Exclude<TranslationLang, 'fr'>, RegExp> = {
  en: /\b(the|this|that|what|where|when|why|how|and|or|with|from|school|exercise|question|answer|homework)\b/i,
  de: /\b(der|die|das|ein|eine|und|oder|mit|von|ist|sind|schule|übung|frage|hausaufgabe)\b/i,
  es: /\b(el|la|los|las|un|una|y|o|con|de|es|son|escuela|ejercicio|pregunta|respuesta)\b/i,
};

export function detectTranslationLanguage(text: string): TranslationLang {
  const scores: Record<TranslationLang, number> = { fr: 0, en: 0, de: 0, es: 0 };
  for (const [lang, regex] of Object.entries(LANGUAGE_HINTS) as Array<[Exclude<TranslationLang, 'fr'>, RegExp]>) {
    scores[lang] = (text.match(new RegExp(regex.source, 'gi')) || []).length;
  }
  scores.fr = (text.match(/\b(le|la|les|un|une|des|et|ou|avec|dans|est|sont|école|exercice|question|réponse)\b/gi) || []).length;
  return (Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] as TranslationLang) || 'fr';
}

export function translateLocally(text: string, sourceLang: TranslationLang | 'auto', targetLang: TranslationLang) {
  const source = sourceLang === 'auto' ? detectTranslationLanguage(text) : sourceLang;
  if (source === targetLang) return { source, target: targetLang, text, coverage: 1 };
  const dict = PHRASES[`${source}→${targetLang}`] || {};
  let translated = text;
  let hits = 0;
  const entries = Object.entries(dict).sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of entries) {
    const re = new RegExp(`(^|\\b)${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=\\b|[?!.,;:]|$)`, 'giu');
    const before = translated;
    translated = translated.replace(re, (_, prefix) => `${prefix}${to}`);
    if (translated !== before) hits += 1;
  }
  const tokenCount = Math.max(1, normalize(text).split(/\s+/).length);
  return { source, target: targetLang, text: translated, coverage: Math.min(1, hits / Math.max(1, Math.ceil(tokenCount / 3))) };
}
