/**
 * ROUTAGE PAR DISCIPLINE — SOURCE UNIQUE DE VÉRITÉ
 * ==================================================
 *
 * PROBLÈME CORRIGÉ :
 * Le champ `discipline` envoyé par le client n'est PAS un code stable
 * ("philo", "mathematiques"...) mais un LABEL humain ("Philosophie",
 * "Mathématiques", "Français & Lettres", "Géographie"...), avec accents et
 * texte additionnel. Les comparaisons strictes historiques du serveur
 * (`discipline.toLowerCase() === "mathematiques"`, `=== "geographie"`,
 * `=== "francais"`) ne correspondaient donc JAMAIS aux valeurs réellement
 * envoyées par le client dès qu'un accent ou un suffixe intervenait
 * (ex: "mathématiques" ≠ "mathematiques", "géographie" ≠ "geographie",
 * "français & lettres" ≠ "francais"). Résultat concret : le signal fiable
 * (la discipline déjà déterminée, éventuellement par IA) était quasiment
 * toujours ignoré, et TOUT le routage reposait sur des regex de mots-clés
 * très larges appliquées au texte du sujet — d'où des collisions entre
 * matières (un sujet d'Histoire ou de Français contenant "liberté" ou
 * "société" partait dans le moteur de Philosophie, etc.).
 *
 * RÈGLE APPLIQUÉE ICI :
 * 1. On canonicalise le label reçu (accents/casse/texte parasite) en un
 *    code stable.
 * 2. Si la discipline est explicitement connue, elle fait autorité : les
 *    moteurs locaux des AUTRES matières ne se déclenchent plus, même si
 *    leurs regex de mots-clés matchent par accident.
 * 3. Les regex de mots-clés ne servent de filet de secours QUE lorsque la
 *    discipline est absente/inconnue.
 */

export type CanonicalDiscipline =
  | "philosophie"
  | "mathematiques"
  | "francais"
  | "geographie"
  | "histoire"
  | "physique_chimie"
  | "svt"
  | "anglais"
  | "allemand"
  | "espagnol"
  | "ses"
  | "informatique"
  | "droit_gestion"
  | "sciences_ingenieur"
  | "autre"
  | "";

/** Retire les accents et met en minuscules, sans autre hypothèse. */
export function normalizeText(raw: string | undefined | null): string {
  if (!raw) return "";
  return raw
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/**
 * Convertit n'importe quel label/code de discipline reçu (client, IA de
 * classification, saisie manuelle...) en code canonique stable. Robuste aux
 * accents, à la casse et aux suffixes ("Français & Lettres" -> "francais").
 */
export function canonicalDiscipline(raw: string | undefined | null): CanonicalDiscipline {
  const n = normalizeText(raw);
  if (!n) return "";

  if (/philo|philosophy|tok|theory of knowledge/.test(n)) return "philosophie";
  if (/math|mathematics|calculus|algebre|geometrie/.test(n)) return "mathematiques";
  if (/francais|litterature|lettres|french/.test(n)) return "francais";
  // Géographie avant Histoire pour ne pas laisser "histoire-geo" retomber
  // uniquement sur "histoire" quand geo est explicitement demandé ; les deux
  // sont de toute façon traités ensemble par le moteur HG Tle.
  if (/geographie|^geo$|geography|hggsp/.test(n)) return "geographie";
  if (/histoire|history/.test(n)) return "histoire";
  if (/physique|chimie|physics|chemistry|\bpc\b/.test(n)) return "physique_chimie";
  if (/svt|biologie|geologie|sciences de la vie|biology|geology|earth science|bcpst/.test(n)) return "svt";
  if (/anglais|english|anglaise|englais/.test(n)) return "anglais";
  if (/allemand|deutsch|german|allemande/.test(n)) return "allemand";
  if (/espagnol|espanol|spanish|espagnole/.test(n)) return "espagnol";
  if (/ses|economie|sociologie|economics|macro|micro|sciences economiques/.test(n)) return "ses";
  if (/informatique|nsi|computer science|programmation|algorithmique|snt|python|coding/.test(n)) return "informatique";
  if (/droit|gestion|management|comptabilite|law|business/.test(n)) return "droit_gestion";
  if (/sciences de l'ingenieur|\bsi\b|technologie|engineering|mecanique/.test(n)) return "sciences_ingenieur";
  return "";
}

/**
 * Détecte si un énoncé ou texte est une épreuve, un exercice ou une phrase
 * en Langue Vivante (Anglais, Allemand, Espagnol).
 * Permet d'éviter à 100% que des devoirs de langue ne tombent par mégarde
 * dans le moteur de dissertation philosophique ou littéraire française.
 */
export function detectTextLanguage(raw: string | undefined | null): "anglais" | "allemand" | "espagnol" | "" {
  if (!raw) return "";
  const text = raw.trim();
  if (!text) return "";

  // Si le texte contient des signatures mathématiques ou scientifiques évidentes,
  // ce n'est JAMAIS une langue vivante étrangère.
  if (
    /(\b(f\s*\([a-z]\)|g\s*\([a-z]\)|h\s*\([a-z]\)|u_n|v_n|limite|\blim\b|dérivée|tableau de variations|intégrale|primitive|suite|matrice|vecteur|ln\s*[a-z0-9]|exp\s*[a-z0-9]|racine carrée|pythagore|thalès|polynôme|inéquation|équation|barycentre|fonctions et limites)\b|[=<>≤≥∫∑√]|\$\$.*\$\$|\\lim|\\frac|\\to)/i.test(
      text
    )
  ) {
    return "";
  }

  // Si l'élève spécifie explicitement un devoir d'une autre matière
  if (
    /\b(?:devoir|exercice|cours|sujet|épreuve|epreuve|interro|fiche)\s+(?:d['’]|de\s+)(?:maths?|math[ée]matiques?|physique|chimie|svt|biologie|g[ée]ologie|philosophie|philo|histoire|g[ée]ographie|fran[çc]ais|litt[ée]rature|lettres)\b/i.test(
      text
    )
  ) {
    return "";
  }

  // 0. Détection explicite de devoirs ou sujets de langues ("mon devoir d'anglais", "devoir d'englais", etc.)
  if (/\b(?:devoir|exercice|cours|sujet|épreuve|epreuve|interro|fiche)\s+(?:d['’]|de\s+)(?:anglais|englais|english)\b/i.test(text)) {
    return "anglais";
  }
  if (/\b(?:devoir|exercice|cours|sujet|épreuve|epreuve|interro|fiche)\s+(?:d['’]|de\s+)(?:allemand|deutsch|german)\b/i.test(text)) {
    return "allemand";
  }
  if (/\b(?:devoir|exercice|cours|sujet|épreuve|epreuve|interro|fiche)\s+(?:d['’]|de\s+)(?:espagnol|español|spanish)\b/i.test(text)) {
    return "espagnol";
  }

  // 1. ALLEMAND
  const germanExplicit = /\b(allemand|deutsch|german|traduire en allemand|traduis en allemand|[üu]bersetze|[üu]bersetzen|textverst[äa]ndnis|leseverstehen|fragen zum text|richtig oder falsch|begr[üu]ndung|grammatik|perfekt|pr[äa]teritum|passiv|konjunktiv|deklination|akkusativ|dativ|genitiv|nominativ|wechselpr[äa]positionen|nebensatz|weil|obwohl|damit|aufsatz|leserbrief|stellungnahme|freie produktion|wortschatz|gegenteil)\b/i.test(text);
  const germanWords = text.match(/\b(ich|du|er|sie|wir|ihr|bin|bist|ist|sind|seid|habe|hast|hat|haben|nicht|kein|keine|keinen|keinem|keiner|der|die|das|den|dem|des|schule|hausaufgaben|sch[üu]ler|lehrer|deutschland|berlin|immer|heute|gestern|morgen|bitte|danke|f[üu]r|mit|wichtig|bildung|jugendliche|jugend)\b/gi);
  if (germanExplicit || (germanWords && germanWords.length >= 3)) {
    return "allemand";
  }

  // 2. ESPAGNOL
  // IMPORTANT : Ne JAMAIS inclure "de", "la", "en", "que", "un", "con", "sin", "para", "por", "al", "del"
  // car ces mots existent en français ou apparaissent dans presque toutes les phrases françaises !
  const spanishExplicit = /\b(espagnol|espa[ñn]ol|spanish|traduire en espagnol|traduis en espagnol|traduce|traducir|comprensi[óo]n lectora|preguntas de comprensi[óo]n|verdadero o falso|justificaci[óo]n|gram[áa]tica|vocabulario|ser y estar|ser o estar|por y para|por o para|subjuntivo|pret[ée]rito|indefinido|imperfecto|pluscuamperfecto|imperativo|voz pasiva|estilo indirecto|redacci[óo]n|ensayo|carta|art[íi]culo|conectores|sin[óo]nimos|ant[óo]nimos)\b/i.test(text);
  const spanishWords = text.match(/\b(yo|t[úu]|él|ella|usted|nosotros|vosotros|ellos|ellas|ustedes|soy|eres|somos|sois|son|estoy|est[áa]s|est[áa]|estamos|est[áa]n|tengo|tienes|tiene|tenemos|tienen|pero|aunque|porque|por qu[ée]|c[óo]mo|d[óo]nde|qui[ée]n|qu[ée]|cu[áa]ndo|españa|madrid|barcelona|gracias|hola|adi[óo]s|lengua|palabra|palabras|mucho|mucha|muchos|muchas|bueno|buena|buenos|buenas|los|las|unos|unas|alumno|alumnos|escuela|todos|todas|d[íi]as|d[íi]a|van|muy)\b/gi);
  if (spanishExplicit || (spanishWords && spanishWords.length >= 3) || (/[¿¡]/.test(text) && spanishWords && spanishWords.length >= 1)) {
    return "espagnol";
  }

  // 3. ANGLAIS
  const englishExplicit = /\b(anglais|english|englais|traduire en anglais|traduis en anglais|traduire en englais|traduis en englais|translate|translation|passive voice|reported speech|fill in the blanks?|verbs? in brackets?|past simple|simple past|present perfect|past continuous|present continuous|conditional|prepositions?|irregular verbs?|reading comprehension|wh- questions?|true or false|guided writing|essay|letter|dialogue|speech|statement|opinion|gap-fill|turn into passive|turn into indirect|put the verbs)\b/i.test(text);
  const englishWords = text.match(/\b(the|is|are|was|were|have|has|had|been|do|does|did|will|would|can|could|should|must|don't|doesn't|didn't|won't|can't|there is|there are|this|that|these|those|what|where|when|which|who|whom|whose|why|how|because|although|however|therefore|yesterday|tomorrow|always|never|every day|at school|he|she|they|we|my|your|his|her|their|our)\b/gi);
  if (englishExplicit || (englishWords && englishWords.length >= 3)) {
    return "anglais";
  }

  return "";
}

/**
 * Décide si un moteur local d'une discipline donnée a le droit de se
 * déclencher :
 *  - la discipline explicite (si connue) doit correspondre exactement ;
 *  - à défaut de discipline explicite, on retombe sur le signal texte
 *    (résultat des regex de mots-clés historiques), en dernier recours
 *    seulement.
 */
export function disciplineEngineAllowed(
  explicitDiscipline: CanonicalDiscipline,
  targetDiscipline: CanonicalDiscipline,
  textKeywordSignal: boolean
): boolean {
  if (explicitDiscipline) return explicitDiscipline === targetDiscipline;
  return textKeywordSignal;
}
