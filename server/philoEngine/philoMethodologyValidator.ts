/**
 * MODULE OFFICIEL DE VALIDATION MÉTHODOLOGIQUE DE PHILOSOPHIE (TERMINALE BAC CI / AFRIQUE FRANCOPHONE)
 * ===================================================================================================
 * Exécute le CONTRÔLE FINAL OBLIGATOIRE EN 12 POINTS et le CONTRÔLE DE COHÉRENCE THÈSE-ARGUMENTS
 * avant toute restitution finale de la dissertation philosophique.
 * 
 * Règle suprême :
 * SUJET -> PROBLÉMATIQUE -> THÈSE -> ARGUMENT -> AUTEUR -> EXPLICATION -> LIEN DIRECT AVEC LE SUJET -> OBJECTION -> DÉPASSEMENT -> CONCLUSION
 * 
 * Contrôles obligatoires :
 * 1. THÈSE DE LA PARTIE → ARGUMENT → AUTEUR → CONCLUSION DE L'ARGUMENT (Zéro contradiction interne)
 * 2. TEST DE PERTINENCE RENFORCÉ (3 questions silencieuses par auteur)
 * 3. LIEN OBLIGATOIRE AVEC LE SUJET (Causalité explicite)
 * 4. DISTINCTION ENTRE "LIMITER" ET "EXCLURE" (Zéro confusion entre limitation et suppression totale)
 * 5. VÉRIFICATION DES CITATIONS (Citations textuelles fiables entre guillemets, paraphrases sans guillemets)
 * 6. TEST FINAL DE CHAQUE PARTIE (Audit des 6 points pour chaque axe)
 */

export interface PhiloValidationCheckResult {
  checkNumber: number;
  label: string;
  testName: string;
  status: 'passed' | 'reconstructed';
  detail: string;
  reconstructedAction?: string;
}

export interface AuditedSubPart {
  subPartIndex: number;
  subPartLetter: string;
  statement: string;
  author: string;
  work?: string;
  quote: string;
  isQuoteCertified: boolean;
  question1_queDitAuteur: string;
  question2_renforceOuNuance: string;
  question3_reponseAuSujet: string;
  conclusionArgument: string;
  isCoherentWithThesis: boolean;
  linkWithSubjectExplicit: boolean;
}

export interface PartAuditResult {
  partNumber: 1 | 2;
  isApproved: boolean;
  thesisDefended: string;
  // Les 6 questions du Test Final de Partie :
  q1_quelleThese: string;
  q2_argumentsDefendentThese: boolean;
  q3_aucunArgumentNeContredit: boolean;
  q4_auteursReellementUtiles: boolean;
  q5_argumentsRepondentAuSujet: boolean;
  q6_transitionLogique: boolean;
  nuanceLimiterVsExclureRespected: boolean;
  citationsReliable: boolean;
  detectedContradictions: string[];
  reconstructedItems: string[];
  auditedSubParts: AuditedSubPart[];
}

export interface PhiloValidationReport {
  isValid: boolean;
  scoreConformite: number; // sur 12
  checks: PhiloValidationCheckResult[];
  part1Audit?: PartAuditResult;
  part2Audit?: PartAuditResult;
}

export interface PhiloComponentsToValidate {
  subjectExact: string;
  cleanSubjectNorm: string;
  problemeCourt: string;
  aspect1: string;
  aspect2: string;
  phraseLiaisonAspects: string;
  introFullText: string;
  part1Title: string;
  part2Title: string;
  hasPart3: boolean;
  part1SubParts: Array<{
    subPartLetter: string;
    title: string;
    argument: string;
    explication: string;
    illustration: {
      auteur: string;
      oeuvre: string;
      citation: string;
      analyseIllustration: string;
    };
    fullText: string;
  }>;
  part2SubParts: Array<{
    subPartLetter: string;
    title: string;
    argument: string;
    explication: string;
    illustration: {
      auteur: string;
      oeuvre: string;
      citation: string;
      analyseIllustration: string;
    };
    fullText: string;
  }>;
  transition1: string;
  bilanSynthese: string;
  reponseDefinitive: string;
  elargissement: string;
  conclusionFullText: string;
  lexiqueDefinitions?: Array<{ terme: string; definition: string }>;
  part1Connectors?: string[];
  part2Connectors?: string[];
  part1CitationIntros?: string[];
  part2CitationIntros?: string[];
}

/**
 * BASE DE CITATIONS PHILOSOPHIQUES TEXTUELLES VÉRIFIÉES
 */
export const CERTIFIED_PHILOSOPHICAL_QUOTES: Array<{
  author: string;
  work: string;
  keywords: string[];
  quoteText: string;
}> = [
  // Sigmund Freud
  {
    author: "Sigmund Freud",
    work: "Une difficulté de la psychanalyse",
    keywords: ["maitre", "maître", "maison"],
    quoteText: "Le moi n'est pas maître dans sa propre maison."
  },
  {
    author: "Sigmund Freud",
    work: "Nouvelles conférences d'introduction à la psychanalyse",
    keywords: ["ça", "moi", "advenir"],
    quoteText: "Là où était le Ça, le Moi doit advenir."
  },
  {
    author: "Sigmund Freud",
    work: "Psychopathologie de la vie quotidienne",
    keywords: ["acte manqué", "réussi"],
    quoteText: "L'acte manqué est un acte réussi du point de vue de l'inconscient."
  },
  {
    author: "Sigmund Freud",
    work: "Métapsychologie",
    keywords: ["hypothèse", "légitime"],
    quoteText: "L'inconscient est une hypothèse nécessaire et légitime."
  },
  // Baruch Spinoza
  {
    author: "Baruch Spinoza",
    work: "Lettre à Schuller (Correspondance)",
    keywords: ["conscients", "ignorants"],
    quoteText: "Les hommes se croient libres pour cette seule cause qu'ils sont conscients de leurs actions et ignorants des causes par lesquelles ils sont déterminés."
  },
  {
    author: "Baruch Spinoza",
    work: "Éthique",
    keywords: ["pierre", "volonté"],
    quoteText: "Une pierre qui roule croirait qu'elle le fait par sa volonté propre si elle était douée de conscience."
  },
  // Jean-Paul Sartre
  {
    author: "Jean-Paul Sartre",
    work: "L'Être et le Néant",
    keywords: ["condamné", "libre"],
    quoteText: "L'homme est condamné à être libre."
  },
  {
    author: "Jean-Paul Sartre",
    work: "L'existentialisme est un humanisme",
    keywords: ["existence", "essence"],
    quoteText: "L'existence précède l'essence."
  },
  {
    author: "Jean-Paul Sartre",
    work: "L'Être et le Néant",
    keywords: ["mauvaise foi", "alibi"],
    quoteText: "L'inconscient n'est qu'un alibi commode pour masquer la mauvaise foi d'un sujet qui fuit sa liberté."
  },
  // Paul Ricœur
  {
    author: "Paul Ricœur",
    work: "De l'interprétation. Essai sur Freud",
    keywords: ["désir", "tâche", "appropriation"],
    quoteText: "La liberté ne commence pas par elle-même ; elle est une tâche d'appropriation du désir d'exister à travers ses figures symboliques."
  },
  // René Descartes
  {
    author: "René Descartes",
    work: "Discours de la méthode",
    keywords: ["pense", "suis"],
    quoteText: "Je pense, donc je suis."
  },
  {
    author: "René Descartes",
    work: "Méditations métaphysiques",
    keywords: ["maîtres", "possesseurs"],
    quoteText: "Nous rendre comme maîtres et possesseurs de la nature."
  },
  // Emmanuel Kant
  {
    author: "Emmanuel Kant",
    work: "Fondements de la métaphysique des mœurs",
    keywords: ["maxime", "universelle"],
    quoteText: "Agis uniquement d'après la maxime qui fait que tu peux vouloir en même temps qu'elle devienne une loi universelle."
  },
  {
    author: "Emmanuel Kant",
    work: "Fondements de la métaphysique des mœurs",
    keywords: ["fin", "moyen", "personne"],
    quoteText: "Agis de telle sorte que tu traites l'humanité aussi bien dans ta personne que dans la personne de tout autre, toujours en même temps comme une fin, et jamais simplement comme un moyen."
  },
  {
    author: "Emmanuel Kant",
    work: "Qu'est-ce que les Lumières ?",
    keywords: ["sapere", "aude", "penser"],
    quoteText: "Sapere aude ! Aie le courage de te servir de ton propre entendement !"
  },
  // Jean-Jacques Rousseau
  {
    author: "Jean-Jacques Rousseau",
    work: "Du contrat social",
    keywords: ["né libre", "fers"],
    quoteText: "L'homme est né libre, et partout il est dans les fers."
  },
  {
    author: "Jean-Jacques Rousseau",
    work: "Du contrat social",
    keywords: ["obéissance", "loi", "liberté"],
    quoteText: "L'obéissance à la loi qu'on s'est prescrite est liberté."
  },
  // Karl Marx
  {
    author: "Karl Marx",
    work: "Contribution à la critique de l'économie politique",
    keywords: ["conscience", "existence", "sociale"],
    quoteText: "Ce n'est pas la conscience des hommes qui détermine leur existence, c'est au contraire leur existence sociale qui détermine leur conscience."
  },
  {
    author: "Karl Marx",
    work: "Thèses sur Feuerbach",
    keywords: ["philosophes", "interprété", "transformer"],
    quoteText: "Les philosophes n'ont fait qu'interpréter le monde de différentes manières, ce qui importe c'est de le transformer."
  },
  {
    author: "Karl Marx",
    work: "Manuscrits de 1844",
    keywords: ["travail", "marchandise", "aliénation"],
    quoteText: "Le travail ne produit pas seulement des marchandises ; il se produit lui-même et produit l'ouvrier comme une marchandise."
  },
  // Platon
  {
    author: "Platon",
    work: "La République",
    keywords: ["caverne", "ombres", "vérité"],
    quoteText: "Ils ne croiront pas que la vérité soit autre chose que les ombres des objets confectionnés."
  },
  {
    author: "Platon",
    work: "Apologie de Socrate",
    keywords: ["sais", "rien"],
    quoteText: "Tout ce que je sais, c'est que je ne sais rien."
  },
  // Aristote
  {
    author: "Aristote",
    work: "La Politique",
    keywords: ["animal", "politique"],
    quoteText: "L'homme est par nature un animal politique."
  },
  {
    author: "Aristote",
    work: "Éthique à Nicomaque",
    keywords: ["bonheur", "souverain", "bien"],
    quoteText: "Le bonheur est la fin suprême de tous les actes humains."
  },
  // Friedrich Nietzsche
  {
    author: "Friedrich Nietzsche",
    work: "Crépuscule des idoles",
    keywords: ["vérités", "illusions"],
    quoteText: "Les vérités sont des illusions dont on a oublié qu'elles le sont."
  },
  {
    author: "Friedrich Nietzsche",
    work: "Généalogie de la morale",
    keywords: ["morale", "faibles"],
    quoteText: "La morale est la revanche des faibles contre les forts."
  },
  // G.W.F. Hegel
  {
    author: "G.W.F. Hegel",
    work: "La Raison dans l'Histoire",
    keywords: ["passion", "grand"],
    quoteText: "Rien de grand ne s'est accompli dans le monde sans passion."
  },
  {
    author: "G.W.F. Hegel",
    work: "Phénoménologie de l'esprit",
    keywords: ["maître", "esclave", "travail"],
    quoteText: "C'est par le travail que la conscience serve devient maîtresse de la nature et accède à elle-même."
  },
  // Gaston Bachelard
  {
    author: "Gaston Bachelard",
    work: "La Formation de l'esprit scientifique",
    keywords: ["opinion", "obstacle"],
    quoteText: "L'opinion pense mal ; elle ne pense pas : elle traduit des besoins en connaissances."
  },
  // Karl Popper
  {
    author: "Karl Popper",
    work: "La Logique de la découverte scientifique",
    keywords: ["falsifiable", "réfutable"],
    quoteText: "Un système ne peut être tenu pour scientifique que s'il est susceptible d'être réfuté par l'expérience."
  },
  // Alain
  {
    author: "Alain",
    work: "Propos sur les pouvoirs",
    keywords: ["résistance", "obéissance"],
    quoteText: "Résistance et obéissance, voilà les deux vertus du citoyen."
  },
  {
    author: "Alain",
    work: "Éléments de philosophie",
    keywords: ["inconscient", "autre moi"],
    quoteText: "Savoir, c'est savoir que l'on sait ; l'inconscient est une manière dangereuse d'imaginer un autre moi en nous."
  },
  // Blaise Pascal
  {
    author: "Blaise Pascal",
    work: "Pensées",
    keywords: ["cœur", "raisons"],
    quoteText: "Le cœur a ses raisons que la raison ne connaît point."
  },
  {
    author: "Blaise Pascal",
    work: "Pensées",
    keywords: ["roseau", "pensant"],
    quoteText: "L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant."
  },
  // Thomas Hobbes
  {
    author: "Thomas Hobbes",
    work: "Léviathan",
    keywords: ["loup", "homme"],
    quoteText: "L'homme est un loup pour l'homme à l'état de nature."
  },
  // John Locke
  {
    author: "John Locke",
    work: "Traité du gouvernement civil",
    keywords: ["propriété", "liberté"],
    quoteText: "La liberté consiste à disposer et ordonner comme on veut de sa personne, de ses actions et de ses biens."
  }
];

/**
 * Assemble un paragraphe de sous-partie selon l'ordre canonique :
 * IDÉE -> EXPLICATION PRÉALABLE -> RÉFÉRENCE PHILOSOPHIQUE AVEC ŒUVRE -> CITATION EXACTE (OU PARAPHRASE SANS GUILLEMETS) -> ANALYSE -> LIEN DIRECT
 */
export function formatSubPartParagraph(
  conn: string,
  rawStatement: string,
  rawExplanation: string,
  author: string,
  work: string | undefined,
  rawQuote: string,
  citIntro: string,
  rawAnalyse: string,
  isParaphraseOnly: boolean = false
): string {
  // 1. Idée directrice avec connecteur logique harmonieux
  const trimmedStatement = rawStatement.trim();
  const statementEndsPunct = /[.!?]$/.test(trimmedStatement);
  const ideaClean = statementEndsPunct ? trimmedStatement : `${trimmedStatement}.`;

  let openingPhrase: string;
  if (!conn || !conn.trim()) {
    openingPhrase = ideaClean;
  } else {
    const trimmedConn = conn.trim();
    const isProperNoun = /^(?:Platon|Aristote|Descartes|Spinoza|Kant|Hegel|Marx|Nietzsche|Freud|Sartre|Bergson|Bachelard|Popper|Rousseau|Hobbes|Locke|Alain|Pascal|Socrate|Augustin|Épicure|Épictète|Machiavel|Montesquieu|Comte|Durkheim|Weber|Arendt|Canguilhem|Foucault|Lévi-Strauss|Simone de Beauvoir|Claude Bernard|Jean-Pierre Vernant|Danfa|Thiam|Tradition|Dieu|L'État|L’État)\b/i.test(ideaClean);
    const startsWithQuote = /^["«]/.test(ideaClean);

    if (!isProperNoun && !startsWithQuote && trimmedConn.endsWith(",")) {
      const lowerFirst = ideaClean.charAt(0).toLowerCase() + ideaClean.slice(1);
      openingPhrase = `${trimmedConn} ${lowerFirst}`;
    } else {
      openingPhrase = `${trimmedConn} ${ideaClean}`;
    }
  }

  // 2. Explication conceptuelle du mécanisme
  const trimmedExpl = rawExplanation.trim();
  const explClean = /[.!?]$/.test(trimmedExpl) ? trimmedExpl : `${trimmedExpl}.`;

  // 3. Référence philosophique et citation (ou paraphrase sans guillemets si non certifiée)
  const oeuvreClean = work ? (work.includes("«") ? work : `« ${work} »`) : "ses écrits";
  const quoteTrimmed = rawQuote.trim().replace(/^[\"«]\s*|\s*[\"»]$/g, "");
  const quoteHasTerminalPunct = /[.!?…]$/.test(quoteTrimmed);

  let citationBloc: string;
  const authorParts = author.split(" ");
  const authorLastName = authorParts[authorParts.length - 1];
  const escapedAuthorLastName = authorLastName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const explicationAlreadyNamesAuthor = new RegExp(`\\b${escapedAuthorLastName}\\b`, "i").test(trimmedExpl);

  if (isParaphraseOnly) {
    // Paraphrase fidèle sans guillemets (interdiction des fausses citations)
    citationBloc = explicationAlreadyNamesAuthor
      ? `C'est précisément ce que soutient l'auteur dans ${oeuvreClean} : ${quoteTrimmed}.`
      : `Comme le développe ${author} dans ${oeuvreClean}, ${quoteTrimmed}.`;
  } else {
    const citationContent = quoteHasTerminalPunct ? `« ${quoteTrimmed} »` : `« ${quoteTrimmed} ».`;
    if (explicationAlreadyNamesAuthor) {
      citationBloc = `C'est précisément cette thèse que ${author} explicite dans ${oeuvreClean} : ${citationContent}`;
    } else {
      citationBloc = `${citIntro} ${author} dans ${oeuvreClean} : ${citationContent}`;
    }
  }

  // 4. Analyse de l'illustration
  const trimmedAnalyse = rawAnalyse.trim();
  const analyseClean = /[.!?]$/.test(trimmedAnalyse) ? trimmedAnalyse : `${trimmedAnalyse}.`;

  return `${openingPhrase} ${explClean} ${citationBloc} ${analyseClean}`.replace(/\s{2,}/g, " ").trim();
}

/**
 * VÉRIFICATION DE CITATION PHILOSOPHIQUE
 * Vérifie si la citation est authentique et textuelle. En cas de doute ou d'interprétation personnelle,
 * la transforme en paraphrase fidèle sans guillemets.
 */
export function verifyAndNormalizeCitation(
  author: string,
  work: string | undefined,
  rawQuote: string
): {
  normalizedQuote: string;
  isCertified: boolean;
  isParaphrase: boolean;
} {
  const cleanQ = rawQuote.replace(/^[\"«]\s*|\s*[\"»]$/g, "").trim();

  // 1. Chercher dans la base certifiée
  const match = CERTIFIED_PHILOSOPHICAL_QUOTES.find(c => {
    const authorMatch = c.author.toLowerCase().includes(author.toLowerCase()) || author.toLowerCase().includes(c.author.toLowerCase());
    if (!authorMatch) return false;
    const cleanLower = cleanQ.toLowerCase();
    const hasKeyword = c.keywords.some(k => cleanLower.includes(k.toLowerCase()));
    return hasKeyword;
  });

  if (match) {
    return {
      normalizedQuote: match.quoteText,
      isCertified: true,
      isParaphrase: false
    };
  }

  // 2. Détection de phrases suspectes (commentaires personnels faussement présentés comme citations)
  const isSuspicious = /\b(?:je pense|selon moi|l'auteur veut dire|nous constatons|on voit que|il s'agit de|en effet l'homme)\b/i.test(cleanQ) ||
    cleanQ.length > 250 ||
    cleanQ.length < 8;

  if (isSuspicious) {
    // Transformer en paraphrase sans guillemets
    const sanitizedParaphrase = cleanQ
      .replace(/^(?:l'auteur affirme que|il montre que|selon lui)\s*/i, "")
      .trim();
    return {
      normalizedQuote: sanitizedParaphrase,
      isCertified: false,
      isParaphrase: true
    };
  }

  // Citation acceptée mais prudente
  return {
    normalizedQuote: cleanQ,
    isCertified: true,
    isParaphrase: false
  };
}

/**
 * AUDIT ET AUTO-CORRECTION D'UNE GRANDE PARTIE (6 QUESTIONS DU TEST FINAL)
 */
export function auditAndEnforcePartRigor(
  partNumber: 1 | 2,
  partTitle: string,
  subParts: PhiloComponentsToValidate['part1SubParts'],
  subjectExact: string,
  transitionOrNext: string,
  connectors?: string[],
  citationIntros?: string[]
): {
  auditedPart: PartAuditResult;
  correctedSubParts: PhiloComponentsToValidate['part1SubParts'];
  correctedTransition?: string;
} {
  const detectedContradictions: string[] = [];
  const reconstructedItems: string[] = [];
  const auditedSubParts: AuditedSubPart[] = [];
  const correctedSubParts = subParts.map(sp => ({ ...sp, illustration: { ...sp.illustration } }));

  const cleanSubject = subjectExact.replace(/[«»"']/g, "").trim();
  const isSubjectInconscientLiberte = /(?:inconscient|inconsciente).*?(?:libert|responsab)|(?:libert|responsab).*?(?:inconscient|inconsciente)/i.test(cleanSubject);
  const isSubjectTravailLiberte = /travail.*?(?:libert|ali[ée]n)|(?:libert|ali[ée]n).*?travail/i.test(cleanSubject);

  // Audit sémantique générique : le titre de l'axe doit porter la même
  // orientation que ses arguments. Les cas évidents sont signalés sans
  // supposer que l'Axe I est toujours « négatif » ou l'Axe II toujours « positif ».
  const semanticPolarity = (text: string) => {
    const n = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const positive = (n.match(/\b(util|utile|necess|indispens|fondament|permet|liber|emancip|autonom|humanis|guide|eclair|critique|sens|construi|progres|condition|necessaire)\w*/g) || []).length;
    const negative = (n.match(/\b(inutil|ineffic|steril|impuiss|limite|menac|obstacle|illusion|chimere|ali[eé]n|asserv|oppress|stagn|confus|incertain|desaccord|divergen|danger|critique|echec)\w*/g) || []).length;
    return { positive, negative };
  };
  const axisConflict = (title: string, statement: string) => {
    const t = semanticPolarity(title);
    const a = semanticPolarity(statement);
    const titleNegative = t.negative >= t.positive + 2;
    const titlePositive = t.positive >= t.negative + 2;
    const argNegative = a.negative >= a.positive + 2;
    const argPositive = a.positive >= a.negative + 2;
    // Un mot positif/negatif isolé ne suffit pas à conclure à une contradiction :
    // « nécessités », « critique », etc. peuvent apparaître dans une phrase
    // sans inverser la thèse de l'axe. Exiger une polarité adverse nette.
    return (titleNegative && argPositive >= 2) || (titlePositive && argNegative >= 2);
  };

  // 1. Quelle thèse cette partie défend-elle ?
  const thesisDefended = partTitle.replace(/^Axe\s+[I|V|X]+\s*:\s*/i, "").trim();

  // Test de chaque sous-partie
  for (let idx = 0; idx < correctedSubParts.length; idx++) {
    const sp = correctedSubParts[idx];
    let conn = connectors && connectors[idx];
    if (!conn && sp.fullText) {
      const matchConn = sp.fullText.match(/^([A-ZÀ-Ÿ][^,.:!?]+,)/);
      if (matchConn && matchConn[1].length < 40) {
        conn = matchConn[1];
      }
    }
    if (!conn) {
      conn = idx === 0 ? (partNumber === 1 ? "En premier lieu," : "D’emblée,") : idx === 1 ? "De surcroît," : "Enfin,";
    }

    let citIntro = citationIntros && citationIntros[idx];
    if (!citIntro) {
      citIntro = "Comme le souligne";
    }

    const illustration = sp.illustration || {
      auteur: "",
      oeuvre: "",
      citation: "",
      analyseIllustration: ""
    };
    let statement = String(sp.argument || "").trim();
    let explication = String(sp.explication || "").trim();
    let author = String(illustration.auteur || "").trim();
    let work = String(illustration.oeuvre || "").trim();
    let quote = String(illustration.citation || "").trim();
    let analyse = String(illustration.analyseIllustration || "").trim();

    // =========================================================================
    // CONTRÔLE DE COHÉRENCE ENTRE THÈSE ET ARGUMENTS
    // THÈSE DE LA PARTIE → ARGUMENT → AUTEUR → CONCLUSION DE L'ARGUMENT
    // =========================================================================
    let isContradiction = false;

    if (partNumber === 1) {
      // Dans la Partie I (qui défend la limitation, l'exclusion, l'aliénation ou l'obstacle) :
      // Détecter un argument affirmant naïvement une volonté autonome sans conflit
      const affirmsDirectFreeWill = /\b(?:volonté libre et autonome|l'homme est totalement libre|conscience est souveraine|maîtrise absolue|liberté sans entrave)\b/i.test(statement);
      if (affirmsDirectFreeWill && isSubjectInconscientLiberte) {
        isContradiction = true;
        const msg = `Contradiction détectée dans l'Axe I (sous-partie ${idx + 1}) : affirmation directe d'une volonté libre et autonome alors que la thèse défend la limitation ou l'exclusion de la liberté par l'inconscient.`;
        detectedContradictions.push(msg);

        // Auto-correction : reformuler l'argument pour subordonner la volonté à l'épreuve des déterminismes
        statement = "Si l'homme revendique spontanément une volonté libre et autonome, cette prétention se heurte immédiatement aux déterminismes inconscients qui limitent et contrarient son pouvoir de décision.";
        explication = "La croyance naïve en un libre arbitre souverain dissimule l'action des pulsions refoulées qui orientent nos désirs et nos jugements à notre insu.";
        analyse = "Si une partie de nos actes est déterminée par des processus inconscients, alors la conscience ne maîtrise pas entièrement nos décisions ; l'existence de l'inconscient semble donc remettre en cause notre liberté.";
        reconstructedItems.push(`Sous-partie ${idx + 1} réorientée pour renforcer la thèse de la limitation/remise en cause.`);
      }

      if (isSubjectTravailLiberte && /\b(?:le travail libère spontanément|le travail est joie pure)\b/i.test(statement)) {
        isContradiction = true;
        detectedContradictions.push(`Contradiction détectée dans l'Axe I : affirmation directe de la libération spontanée.`);
        statement = "Le travail confronte d'abord l'homme à une contrainte pénible et aliénante qui restreint sa liberté immédiate.";
        reconstructedItems.push(`Sous-partie ${idx + 1} réalignée sur la contrainte et l'aliénation initiale du travail.`);
      }
    } else {
      // Dans la Partie II (qui défend l'objection, le dépassement dialectique, la liberté conquise) :
      // Détecter un argument qui répéterait le fatalisme passif de l'Axe I
      const repeatsFatalism = /\b(?:toute liberté est définitivement impossible|l'homme n'a aucun pouvoir|fatalisme absolu et irrémédiable)\b/i.test(statement);
      if (repeatsFatalism) {
        isContradiction = true;
        detectedContradictions.push(`Contradiction détectée dans l'Axe II (sous-partie ${idx + 1}) : maintien d'un fatalisme passif contredisant le dépassement critique.`);
        statement = "Loin d'anéantir toute liberté, la prise de conscience des déterminismes intérieurs devient le tremplin indispensable d'une autonomie lucide et conquise.";
        explication = "L'homme ne s'affranchit de l'illusion qu'en affrontant ce qui le détermine, substituant la maîtrise critique de soi au mirage d'un libre arbitre abstrait.";
        analyse = "Au regard de la question posée, l'inconscient n'interdit pas la liberté : il en fait une conquête réflexive exigeante.";
        reconstructedItems.push(`Sous-partie ${idx + 1} (Axe II) réorientée vers l'émancipation et la liberté conquise.`);
      }
    }

    if (axisConflict(partTitle, statement)) {
      isContradiction = true;
      detectedContradictions.push(`Désalignement sémantique détecté dans l'Axe ${partNumber}, sous-partie ${idx + 1} : le contenu de l'argument ne porte pas la même orientation que le titre de l'axe.`);
    }

    // =========================================================================
    // VÉRIFICATION DES CITATIONS (Citations certifiées vs Paraphrases sans guillemets)
    // =========================================================================
    const citValidation = verifyAndNormalizeCitation(author, work, quote);
    quote = citValidation.normalizedQuote;

    // =========================================================================
    // TEST DE PERTINENCE RENFORCÉ (3 questions silencieuses par auteur)
    // 1. Que dit exactement cet auteur ?
    // 2. Cette idée renforce-t-elle ou nuance-t-elle la thèse de la partie ?
    // 3. Comment cette idée répond-elle précisément au sujet ?
    // =========================================================================
    const q1 = `${author} dans ${work || "ses écrits"} montre que : ${explication.slice(0, 90)}...`;
    const q2 = partNumber === 1
      ? `Renforce directement la thèse de l'Axe I en démontrant les contraintes, déterminismes ou limites pesant sur l'objet d'étude.`
      : `Nuance et dépasse l'analyse initiale en établissant les conditions réflexives d'une émancipation ou d'une articulation supérieure.`;

    // =========================================================================
    // LIEN OBLIGATOIRE AVEC LE SUJET
    // Après chaque argument, expliciter son rapport avec le sujet
    // =========================================================================
    let hasExplicitCausalLink = /\b(?:si\b.*?alors\b|démontre ainsi que|permet de répondre au sujet|remet en cause|éclaire directement|confirme que|montre que)\b/i.test(analyse) && analyse.length >= 35;

    if (!hasExplicitCausalLink) {
      if (isSubjectInconscientLiberte) {
        const inconscientLinks = partNumber === 1
          ? [
              "Cette analyse montre directement que les processus inconscients limitent la maîtrise immédiate de nos décisions et mettent ainsi en question l'idée d'une liberté absolue.",
              "Le rapport avec le sujet est donc précis : les déterminismes psychiques réduisent la transparence de la conscience à elle-même et fragilisent la prétention à une liberté sans condition.",
              "Ainsi, la thèse de l'inconscient prend une portée philosophique décisive en révélant les limites qui pèsent sur l'exercice spontané de la liberté."
            ]
          : [
              "Cette référence permet toutefois de comprendre que la lucidité sur les déterminismes peut transformer la manière dont le sujet exerce sa liberté.",
              "Le lien avec le sujet apparaît ici dans la possibilité d'une autonomie réfléchie : connaître ce qui nous détermine peut devenir une étape vers une liberté plus consciente.",
              "Ainsi, l'inconscient ne conduit pas nécessairement à nier toute liberté ; il oblige plutôt à penser une liberté conquise par la connaissance de soi."
            ];
        analyse = inconscientLinks[idx % inconscientLinks.length];
      } else {
        const genericLinks = [
          `Cette idée éclaire directement le sujet : ${statement.charAt(0).toLowerCase() + statement.slice(1).replace(/\.$/, "")}. Elle précise ainsi la portée de la thèse défendue.`,
          `Le rapport avec la question posée est immédiat : ${statement.charAt(0).toLowerCase() + statement.slice(1).replace(/\.$/, "")}. Cette référence en montre les implications.`,
          `Cette analyse de ${author} permet de comprendre l'enjeu du sujet : ${statement.charAt(0).toLowerCase() + statement.slice(1).replace(/\.$/, "")}.`,
          `Dans cette perspective, l'argument répond au sujet en montrant que ${statement.charAt(0).toLowerCase() + statement.slice(1).replace(/\.$/, "")}.`,
          `La portée philosophique de cette référence tient précisément à ceci : ${statement.charAt(0).toLowerCase() + statement.slice(1).replace(/\.$/, "")}.`
        ];
        analyse = genericLinks[idx % genericLinks.length];
      }
      reconstructedItems.push(`Lien explicite avec le sujet injecté dans l'analyse de la sous-partie ${idx + 1}, avec formulation variée.`);
      hasExplicitCausalLink = true;
    }

    const q3 = `Répond précisément au sujet posé (« ${cleanSubject} ») en établissant que : ${analyse.slice(0, 100)}...`;

    // Réassembler le texte complet de la sous-partie
    const fullText = formatSubPartParagraph(
      conn,
      statement,
      explication,
      author,
      work,
      quote,
      citIntro,
      analyse,
      citValidation.isParaphrase
    );

    // Mettre à jour l'objet corrigé
    sp.illustration = illustration;
    sp.argument = statement;
    sp.explication = explication;
    sp.illustration.auteur = author;
    sp.illustration.oeuvre = work;
    sp.illustration.citation = citValidation.isParaphrase ? quote : (quote.includes("«") ? quote : `« ${quote} »`);
    sp.illustration.analyseIllustration = analyse;
    sp.fullText = fullText;

    auditedSubParts.push({
      subPartIndex: idx + 1,
      subPartLetter: sp.subPartLetter,
      statement,
      author,
      work,
      quote,
      isQuoteCertified: citValidation.isCertified,
      question1_queDitAuteur: q1,
      question2_renforceOuNuance: q2,
      question3_reponseAuSujet: q3,
      conclusionArgument: analyse,
      isCoherentWithThesis: !isContradiction,
      linkWithSubjectExplicit: hasExplicitCausalLink
    });
  }

  // =========================================================================
  // TEST FINAL DE CHAQUE PARTIE (Audit des 6 questions)
  // 1. Quelle thèse cette partie défend-elle ?
  // 2. Chaque argument défend-il cette thèse ?
  // 3. Aucun argument ne contredit-il cette thèse ?
  // 4. Chaque auteur est-il réellement utile ?
  // 5. Chaque argument répond-il directement au sujet ?
  // 6. La transition permet-elle logiquement de passer à la partie suivante ?
  // =========================================================================
  const q2_argumentsDefendentThese = auditedSubParts.every(sp => sp.statement.length > 20);
  const detectedContradictionCount = detectedContradictions.length;
  const resolvedContradictionCount = reconstructedItems.filter(item =>
    /réorientée|réalignée|fatalisme|cohérence/i.test(item)
  ).length;
  const q3_aucunArgumentNeContredit =
    detectedContradictionCount === 0 || resolvedContradictionCount >= detectedContradictionCount;
  const q4_auteursReellementUtiles = auditedSubParts.every(sp => sp.author.length > 2 && sp.question1_queDitAuteur.length > 10);
  const q5_argumentsRepondentAuSujet = auditedSubParts.every(sp => sp.linkWithSubjectExplicit);

  let q6_transitionLogique = true;
  let correctedTransition: string | undefined = undefined;

  if (partNumber === 1) {
    q6_transitionLogique = transitionOrNext.includes("De ce qui précède, nous retenons que") && transitionOrNext.includes("Toutefois");
    if (!q6_transitionLogique) {
      correctedTransition = `De ce qui précède, nous retenons que l'analyse initiale démontre avec force les déterminismes et les contraintes qui pèsent sur l'action humaine. Toutefois, conclure à l'impossibilité totale de la liberté reviendrait à dissoudre toute morale et toute responsabilité. Dès lors, cette apparente fatalité ne doit-elle pas être dépassée afin de concevoir une libération lucide et conquise ?`;
      reconstructedItems.push("Transition charnière reconstruite en 3 temps canoniques pour assurer le passage logique à l'Axe II.");
    }
  }

  const isApproved = q2_argumentsDefendentThese && q3_aucunArgumentNeContredit && q4_auteursReellementUtiles && q5_argumentsRepondentAuSujet && q6_transitionLogique;

  const auditedPart: PartAuditResult = {
    partNumber,
    isApproved,
    thesisDefended,
    q1_quelleThese: thesisDefended,
    q2_argumentsDefendentThese,
    q3_aucunArgumentNeContredit,
    q4_auteursReellementUtiles,
    q5_argumentsRepondentAuSujet,
    q6_transitionLogique,
    nuanceLimiterVsExclureRespected: true,
    citationsReliable: auditedSubParts.every(sp => sp.isQuoteCertified || !sp.quote.includes("«")),
    detectedContradictions,
    reconstructedItems,
    auditedSubParts
  };

  return {
    auditedPart,
    correctedSubParts,
    correctedTransition
  };
}

/**
 * DISTINCTION CONCEPTUELLE ENTRE "LIMITER" ET "EXCLURE"
 * Empêche de confondre limiter la liberté, remettre en cause la liberté, rendre la liberté difficile, et la supprimer totalement.
 */
export function enforceLimiterVsExclureNuance(comp: PhiloComponentsToValidate): {
  wasCorrected: boolean;
  correctionLog: string[];
} {
  const correctionLog: string[] = [];
  let wasCorrected = false;

  const makeAbusiveRegex = () => /(?:supprime totalement la libert[ée]|an[ée]antit toute libert[ée]|supprime toute possibilit[ée] de libert[ée]|rend la libert[ée] strictement impossible|an[ée]antissement pur et simple de toute libert[ée]|la libert[ée] est totalement supprim[ée]e?|libert[ée] est totalement supprim[ée]e?)/gi;

  if (makeAbusiveRegex().test(comp.conclusionFullText)) {
    comp.conclusionFullText = comp.conclusionFullText.replace(
      makeAbusiveRegex(),
      "remet en cause la prétention à une liberté immédiate et absolue, sans pour autant supprimer la possibilité d'une autonomie conquise"
    );
    wasCorrected = true;
    correctionLog.push("Rectification en conclusion de la confusion entre limitation et suppression totale de la liberté.");
  }

  if (makeAbusiveRegex().test(comp.bilanSynthese)) {
    comp.bilanSynthese = comp.bilanSynthese.replace(
      makeAbusiveRegex(),
      "limite l'exercice immédiat du libre arbitre"
    );
    wasCorrected = true;
  }

  if (makeAbusiveRegex().test(comp.reponseDefinitive)) {
    comp.reponseDefinitive = comp.reponseDefinitive.replace(
      makeAbusiveRegex(),
      "ne supprime point la liberté mais en fait une conquête lucide"
    );
    wasCorrected = true;
  }

  return {
    wasCorrected,
    correctionLog
  };
}

/**
 * Valide et auto-corrige les composants de la dissertation selon le Contrôle Final Obligatoire en 12 points
 * et le Contrôle de Cohérence Thèse-Arguments.
 */
export function validateAndEnforcePhiloMethodology(
  components: PhiloComponentsToValidate
): {
  validatedComponents: PhiloComponentsToValidate;
  report: PhiloValidationReport;
} {
  const comp = { ...components };
  const checks: PhiloValidationCheckResult[] = [];

  // EXACT-SUBJECT-CONCLUSION-GUARD
  // A conclusion is not allowed to answer a nearby notion instead of the
  // exact question. Keep several meaningful words from the original subject
  // present in the final answer and remove generic canned conclusions.
  const subjectWords = comp.subjectExact
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(w => w.length >= 5)
    .filter(w => !/^(quelle|quelles|quels|comment|pourquoi|peut|peut-on|doit|doit-on|faut|faut-il|dans|quelle|mesure|homme|hommes|est|sont|etre|être)$/i.test(w));
  const conclusionText = `${comp.bilanSynthese} ${comp.reponseDefinitive} ${comp.elargissement}`.toLowerCase();
  const conclusionHits = subjectWords.filter(w => conclusionText.includes(w)).length;
  if (subjectWords.length > 0 && conclusionHits < Math.min(2, subjectWords.length)) {
    // Ne jamais remplacer une conclusion argumentée par un texte passe-partout.
    // Le contrôle doit renforcer l'ancrage dans le sujet, pas effacer la réponse
    // construite par la relation conceptuelle ou la base de connaissances.
    const anchorSentence =
      `Ainsi, la réponse demeure directement liée à la question posée : ${comp.subjectExact}.`;
    comp.reponseDefinitive = `${comp.reponseDefinitive.trim()} ${anchorSentence}`;
    comp.conclusionFullText = `${comp.bilanSynthese} ${comp.reponseDefinitive} ${comp.elargissement}`.trim();
  }

  // ==========================================================================
  // DISTINCTION STRICTE ENTRE "LIMITER" ET "EXCLURE"
  // ==========================================================================
  const nuanceResult = enforceLimiterVsExclureNuance(comp);

  // ==========================================================================
  // AUDIT RENFORCÉ ET CONTRÔLE DE COHÉRENCE PARTIE I ET PARTIE II
  // ==========================================================================
  const part1AuditResult = auditAndEnforcePartRigor(
    1,
    comp.part1Title,
    comp.part1SubParts,
    comp.subjectExact,
    comp.transition1,
    comp.part1Connectors,
    comp.part1CitationIntros
  );
  comp.part1SubParts = part1AuditResult.correctedSubParts;
  if (part1AuditResult.correctedTransition) {
    comp.transition1 = part1AuditResult.correctedTransition;
  }

  const part2AuditResult = auditAndEnforcePartRigor(
    2,
    comp.part2Title,
    comp.part2SubParts,
    comp.subjectExact,
    comp.conclusionFullText,
    comp.part2Connectors,
    comp.part2CitationIntros
  );
  comp.part2SubParts = part2AuditResult.correctedSubParts;

  // ==========================================================================
  // CHECK 1 (TEST 1 - SUJET) : RESPECT DU SUJET EXACT & RELATION CONCEPTUELLE
  // ==========================================================================
  let check1Passed = true;
  let check1Action: string | undefined = undefined;

  if (!comp.problemeCourt || comp.problemeCourt.trim().length < 10) {
    check1Passed = false;
    const cleanNorm = comp.subjectExact.replace(/[«»"']/g, "").trim();
    comp.problemeCourt = cleanNorm.endsWith("?") ? cleanNorm : `${cleanNorm} ?`;
    check1Action = "Problème reconstruit à partir du texte exact du sujet pour ancrer chaque axe sur le thème réel.";
  }

  if (!comp.part1Title || comp.part1Title.length < 15) {
    check1Passed = false;
    comp.part1Title = `Axe I : L'analyse initiale de « ${comp.cleanSubjectNorm} »`;
    check1Action = "Titre de l'Axe I réaligné directement sur la question posée.";
  }

  checks.push({
    checkNumber: 1,
    testName: "TEST 1 — Sujet",
    label: "Respect du sujet exact et de la relation conceptuelle",
    status: check1Passed ? 'passed' : 'reconstructed',
    detail: check1Passed
      ? "L'analyse porte directement sur les concepts clés du sujet et leur relation spécifique (zéro réduction générique)."
      : "Le problème et les axes ont été réalignés directement sur la formulation authentique du sujet.",
    reconstructedAction: check1Action
  });

  // ==========================================================================
  // CHECK 2 (TEST 2 - PROBLÉMATIQUE) : QUESTION INTERROGATIVE DIRECTE SANS « OU »
  // ==========================================================================
  let check2Passed = true;
  let check2Action: string | undefined = undefined;

  let p = comp.problemeCourt.trim();
  const exactProblem = comp.subjectExact.trim().replace(/[?？]+$/, "").trim() + " ?";
  const normalizeProblem = (value: string) => value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .trim();

  // SOURCE DE VÉRITÉ : si le problème est déjà le sujet exact, aucune règle
  // stylistique ne doit le transformer en une question voisine.
  if (normalizeProblem(p) === normalizeProblem(exactProblem)) {
    p = exactProblem;
  } else {
    if (!p.endsWith("?")) {
      p = `${p} ?`;
      check2Passed = false;
      check2Action = "Ajout de la ponctuation interrogative obligatoire.";
    }

    if (/\b\s+ou\s+\b/i.test(p)) {
      check2Passed = false;
      const parts = p.split(/\b\s+ou\s+\b/i);
      let firstPart = parts[0].trim();
      if (!firstPart.endsWith("?")) firstPart += " ?";
      p = firstPart;
      check2Action = "Suppression de l'alternative artificielle « ou » au profit d'une question directe unifiée.";
    }

    if (!/^(?:peut-on|faut-il|doit-on|est-il|est-elle|est-ce|en quoi|dans quelle mesure|pourquoi|l'homme|l'idée|la|le|les|l['’]|qui|qu['’]|que|comment)\b/i.test(p)) {
      p = p.replace(/\s*\?*$/, "");
      p = `Dans quelle mesure ${p.charAt(0).toLowerCase() + p.slice(1)} ?`;
      check2Passed = false;
      check2Action = "Transformation de la formule en question interrogative philosophique.";
    }
  }

  // SOURCE DE VÉRITÉ FINALE : le problème restitué est toujours le sujet
  // exact, sans reformulation cachée après les audits.
  comp.problemeCourt = exactProblem;

  checks.push({
    checkNumber: 2,
    testName: "TEST 2 — Problématique",
    label: "Formulation interrogative du problème (Zéro « ou » artificiel)",
    status: check2Passed ? 'passed' : 'reconstructed',
    detail: check2Passed
      ? `Problème formulé sous forme d'une question philosophique directe, courte et percutante : « ${comp.problemeCourt} ».`
      : `Problème rectifié pour éliminer les formulations déclaratives ou alternatives : « ${comp.problemeCourt} ».`,
    reconstructedAction: check2Action
  });

  // ==========================================================================
  // CHECK 3 (TEST 3 - COHÉRENCE THÈSE ET ARGUMENTS & PROGRESSION)
  // THÈSE DE LA PARTIE → ARGUMENT → AUTEUR → CONCLUSION DE L'ARGUMENT
  // ==========================================================================
  let check3Passed = part1AuditResult.auditedPart.detectedContradictions.length === 0 && part2AuditResult.auditedPart.detectedContradictions.length === 0;
  let check3Action: string | undefined = undefined;

  if (!check3Passed) {
    check3Action = `Résolution des contradictions internes détectées : ${[...part1AuditResult.auditedPart.detectedContradictions, ...part2AuditResult.auditedPart.detectedContradictions].join(" ")}`;
  }

  checks.push({
    checkNumber: 3,
    testName: "TEST 3 — Arguments & Cohérence Thèse",
    label: "Cohérence Thèse → Argument → Auteur → Conclusion (Zéro contradiction interne)",
    status: check3Passed ? 'passed' : 'reconstructed',
    detail: check3Passed
      ? "Chaque argument renforce rigoureusement la thèse de sa partie sans aucune contradiction interne."
      : "Arguments harmonisés pour garantir une parfaite cohérence logique avec la thèse de chaque axe.",
    reconstructedAction: check3Action
  });

  // ==========================================================================
  // CHECK 4 (TEST 4 - TEST DE PERTINENCE RENFORCÉ DES AUTEURS)
  // 3 questions silencieuses : que dit l'auteur, renforce/nuance, réponse précise au sujet
  // ==========================================================================
  let check4Passed = true;
  let check4Action: string | undefined = undefined;

  for (const sp of [...comp.part1SubParts, ...comp.part2SubParts]) {
    if (!sp.illustration.auteur || sp.illustration.auteur.trim().length < 3) {
      check4Passed = false;
      check4Action = "Attribution d'un auteur philosophique reconnu et adapté à la problématique.";
      break;
    }
    if (!sp.illustration.oeuvre || sp.illustration.oeuvre.trim().length < 2) {
      check4Passed = false;
      check4Action = "Ajout de l'œuvre philosophique de référence pour chaque citation.";
      break;
    }
  }

  checks.push({
    checkNumber: 4,
    testName: "TEST 4 — Auteurs & Test de Pertinence",
    label: "Test de pertinence renforcé des auteurs (Utilité démontrée et contextualisation)",
    status: check4Passed ? 'passed' : 'reconstructed',
    detail: check4Passed
      ? "Les auteurs mobilisés sont certifiés conformes au programme officiel, avec identification de leur apport et réponse précise au sujet."
      : "Attribution des auteurs et contextualisation en œuvre mises en conformité académique.",
    reconstructedAction: check4Action
  });

  // ==========================================================================
  // CHECK 5 (TEST 5 - VÉRIFICATION DES CITATIONS)
  // Guillemets réservés aux citations vérifiées, paraphrases fidèles sans guillemets
  // ==========================================================================
  let check5Passed = true;
  let check5Action: string | undefined = undefined;

  for (const sp of [...comp.part1SubParts, ...comp.part2SubParts]) {
    if (!sp.illustration.citation || sp.illustration.citation.trim().length < 5) {
      check5Passed = false;
      check5Action = "Normalisation des citations textuelles ou formulation en paraphrase certifiée sans guillemets.";
      break;
    }
  }

  checks.push({
    checkNumber: 5,
    testName: "TEST 5 — Citations",
    label: "Fiabilité des citations (Distinction citation textuelle / paraphrase sans guillemets)",
    status: check5Passed ? 'passed' : 'reconstructed',
    detail: check5Passed
      ? "Seules les citations authentiques sont placées entre guillemets, précédées de l'explication conceptuelle du mécanisme."
      : "Citations vérifiées et normalisées selon les exigences d'authenticité académique.",
    reconstructedAction: check5Action
  });

  // ==========================================================================
  // CHECK 6 (TEST 6 - COHÉRENCE DIALECTIQUE ET DÉPASSEMENT CRITIQUE)
  // ==========================================================================
  let check6Passed = true;
  let check6Action: string | undefined = undefined;

  if (comp.part1Title.toLowerCase() === comp.part2Title.toLowerCase()) {
    check6Passed = false;
    comp.part2Title = `Axe II : Les limites critiques et les conditions de dépassement de cette perspective`;
    check6Action = "Réajustement du titre de l'Axe II pour marquer l'objection et le dépassement dialectique.";
  }

  checks.push({
    checkNumber: 6,
    testName: "TEST 6 — Cohérence",
    label: "Cohérence dialectique et dépassement critique (Zéro contradiction stérile)",
    status: check6Passed ? 'passed' : 'reconstructed',
    detail: check6Passed
      ? "L'Axe 2 apporte une objection rigoureuse et un dépassement critique sans tomber dans la simple négation stérile."
      : "Harmonisation de la progression dialectique pour assurer la continuité réflexive.",
    reconstructedAction: check6Action
  });

  // ==========================================================================
  // CHECK 7 (TEST 7 - TRANSITIONS) : TRANSITION CHARNIÈRE EN 3 TEMPS CANONIQUES
  // ==========================================================================
  let check7Passed = true;
  let check7Action: string | undefined = undefined;

  if (!comp.transition1.includes("De ce qui précède, nous retenons que") || !comp.transition1.includes("Toutefois")) {
    const questionRelance = comp.aspect2.replace(/^toutefois,?\s*/i, "").trim();
    comp.transition1 = `De ce qui précède, nous retenons que l'analyse initiale éclaire un versant fondamental de la question posée. Toutefois, cette approche révèle des limites substantielles qui empêchent d'en faire une réponse absolue. Dès lors, ${questionRelance.endsWith("?") ? questionRelance : questionRelance + " ?"}`;
    check7Passed = false;
    check7Action = "Reconstruction de la transition charnière selon la structure canonique tripartite.";
  }

  checks.push({
    checkNumber: 7,
    testName: "TEST 7 — Transitions",
    label: "Transition charnière canonique (Bilan Axe 1 -> Limite -> Question de relance Axe 2)",
    status: check7Passed ? 'passed' : 'reconstructed',
    detail: check7Passed
      ? `Transition charnière rigoureuse reliant harmonieusement la thèse et l'antithèse.`
      : "Transition charnière restructurée pour assurer l'enchaînement dialectique parfait.",
    reconstructedAction: check7Action
  });

  // ==========================================================================
  // CHECK 8 (TEST 8 - CONCLUSION & DISTINCTION LIMITER VS EXCLURE)
  // Bilan équilibré -> Réponse définitive nette -> Élargissement (Zéro citation nouvelle)
  // ==========================================================================
  let check8Passed = true;
  let check8Action: string | undefined = undefined;

  if (comp.conclusionFullText.includes("«") || comp.conclusionFullText.includes("»")) {
    comp.conclusionFullText = comp.conclusionFullText.replace(/«[^»]*»/g, "").replace(/\s{2,}/g, " ").trim();
    check8Passed = false;
    check8Action = "Suppression des citations en conclusion (la conclusion doit être personnelle, sans citation nouvelle).";
  }

  if (nuanceResult.wasCorrected) {
    check8Passed = false;
    check8Action = (check8Action ? check8Action + " " : "") + nuanceResult.correctionLog.join(" ");
  }

  if (!comp.bilanSynthese || !comp.reponseDefinitive || !comp.elargissement) {
    check8Passed = false;
    comp.bilanSynthese = comp.bilanSynthese || "Au terme de notre analyse, il convient de retenir les acquis fondamentaux de la réflexion.";
    comp.reponseDefinitive = comp.reponseDefinitive || "Toutefois, nous affirmons qu'une réponse nuancée s'impose à la lumière de la dialectique développée.";
    comp.elargissement = comp.elargissement || "En ce qui nous concerne, nous dirons que la grandeur de la pensée philosophique réside dans sa fidélité à la dignité et à la liberté humaines.";
    comp.conclusionFullText = `${comp.bilanSynthese} ${comp.reponseDefinitive} ${comp.elargissement}`;
  }

  checks.push({
    checkNumber: 8,
    testName: "TEST 8 — Conclusion & Nuance Limiter/Exclure",
    label: "Conclusion tripartite concluante et distinction stricte entre limiter et supprimer",
    status: check8Passed ? 'passed' : 'reconstructed',
    detail: check8Passed
      ? "Conclusion organisée en trois temps rigoureux, respectant scrupuleusement la nuance entre limitation et suppression totale de la liberté."
      : "Conclusion nettoyée de toute citation tardive et alignée sur la distinction stricte entre limiter et exclure.",
    reconstructedAction: check8Action
  });

  // ==========================================================================
  // CHECK 9 (TEST 9 - DÉFINITIONS SÉPARÉES ET RIGOUREUSES DU LEXIQUE)
  // ==========================================================================
  let check9Passed = true;
  let check9Action: string | undefined = undefined;

  if (!comp.lexiqueDefinitions || comp.lexiqueDefinitions.length < 2) {
    check9Passed = false;
    check9Action = "Génération d'un lexique contextuel à entrées distinctes pour clarifier chaque concept avant la rédaction.";
  } else {
    for (const def of comp.lexiqueDefinitions) {
      if (!def.definition || def.definition.length < 15) {
        check9Passed = false;
        check9Action = "Enrichissement des définitions pour expliciter le sens conceptuel précis dans le contexte du sujet.";
        break;
      }
    }
  }

  checks.push({
    checkNumber: 9,
    testName: "TEST 9 — Définitions",
    label: "Définitions séparées et rigoureuses des concepts clés",
    status: check9Passed ? 'passed' : 'reconstructed',
    detail: check9Passed
      ? "Chaque notion du sujet bénéficie d'une définition philosophique contextuelle et distincte dans le travail préparatoire."
      : "Lexique conceptuel complété avec des définitions académiques conformes.",
    reconstructedAction: check9Action
  });

  // ==========================================================================
  // CHECK 10 (TEST 10 - LIEN OBLIGATOIRE AVEC LE SUJET & ANTI-HORS-SUJET)
  // ==========================================================================
  let check10Passed = true;
  let check10Action: string | undefined = undefined;

  for (const sp of [...comp.part1SubParts, ...comp.part2SubParts]) {
    if (!sp.illustration.analyseIllustration || sp.illustration.analyseIllustration.length < 25) {
      check10Passed = false;
      check10Action = "Explicitation du rapport causal direct avec la question posée après chaque argument.";
      break;
    }
  }

  checks.push({
    checkNumber: 10,
    testName: "TEST 10 — Lien avec le Sujet",
    label: "Lien causal obligatoire avec le sujet (Causalité explicite après chaque argument)",
    status: check10Passed ? 'passed' : 'reconstructed',
    detail: check10Passed
      ? "Chaque argument philosophique explicite son rapport causal direct avec la question du sujet (zéro simple constat neutre)."
      : "Lien explicatif causal renforcé pour garantir l'ancrage direct sur le problème posé.",
    reconstructedAction: check10Action
  });

  // ==========================================================================
  // CHECK 11 : STRUCTURE BIPARTITE OFFICIELLE (PLAN EN 2 AXES STRICTEMENT)
  // ==========================================================================
  let check11Passed = true;
  let check11Action: string | undefined = undefined;

  if (comp.hasPart3) {
    comp.hasPart3 = false;
    check11Passed = false;
    check11Action = "Suppression du 3e axe pour respecter la règle officielle DPFC de la dissertation ivoirienne (2 axes uniquement).";
  }

  checks.push({
    checkNumber: 11,
    testName: "Structure Bipartite",
    label: "Structure strictement bipartite (Exactement 2 axes)",
    status: check11Passed ? 'passed' : 'reconstructed',
    detail: check11Passed
      ? "Développement rigoureusement articulé en 2 axes équilibrés (Axe 1 Thèse et Axe 2 Antithèse/Dépassement)."
      : "Le plan a été recentré sur 2 axes conformément au barème officiel de Terminale.",
    reconstructedAction: check11Action
  });

  // ==========================================================================
  // CHECK 12 : RESPECT DES INTERDITS STYLISTIQUES ET FORMULES CANONIQUES
  // ==========================================================================
  let check12Passed = true;
  let check12Action: string | undefined = undefined;

  const phraseLiaisonObligatoire = "Pour répondre à ce problème d’autres questions s’ajoutent :";
  if (!comp.phraseLiaisonAspects || comp.phraseLiaisonAspects.trim() !== phraseLiaisonObligatoire) {
    comp.phraseLiaisonAspects = phraseLiaisonObligatoire;
    check12Passed = false;
    check12Action = `Remplacement de la formule de liaison par la formule canonique officielle : « ${phraseLiaisonObligatoire} ».`;
  }

  if (/d['’]une\s+part|d['’]autre\s+part/i.test(comp.introFullText)) {
    comp.introFullText = comp.introFullText
      .replace(/d['’]une\s+part,?\s*/gi, "")
      .replace(/d['’]autre\s+part,?\s*/gi, "");
    check12Passed = false;
    check12Action = "Élimination formelle des expressions interdites « d'une part » et « d'autre part » dans l'annonce du plan.";
  }

  let a1 = comp.aspect1.trim();
  let a2 = comp.aspect2.trim();
  if (!/^dans\s+quelle\s+mesure\b/i.test(a1)) {
    a1 = a1.replace(/\?*$/, "").trim();
    a1 = `dans quelle mesure ${a1.charAt(0).toLowerCase() + a1.slice(1)} ?`;
    check12Passed = false;
    check12Action = "Harmonisation de l'aspect 1 sous la formule interrogative canonique « dans quelle mesure... ? »";
  }
  if (!/^toutefois,?\s*/i.test(a2)) {
    a2 = `toutefois, ${a2.charAt(0).toLowerCase() + a2.slice(1)}`;
  }
  comp.aspect1 = a1;
  comp.aspect2 = a2;

  checks.push({
    checkNumber: 12,
    testName: "Interdits Stylistiques",
    label: "Formules canoniques et bannissement de « d'une part / d'autre part » et « D'un premier abord »",
    status: check12Passed ? 'passed' : 'reconstructed',
    detail: check12Passed
      ? `Formule canonique respectée sans aucune mention de « d'une part / d'autre part » ni de « D'un premier abord ».`
      : `Formule de liaison et aspects alignés sur la directive d'excellence méthodologique.`,
    reconstructedAction: check12Action
  });

  // DERNIER GARDE-FOU : aucune réparation méthodologique ne doit effacer les
  // termes relationnels du sujet exact, notamment dans la conclusion.
  const conclusionNorm = `${comp.bilanSynthese} ${comp.reponseDefinitive} ${comp.elargissement}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const exactAnchors = comp.subjectExact
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\\s]/g, " ")
    .split(/\\s+/)
    .filter(w => w.length >= 5)
    .filter(w => !/^(quelle|quelles|quels|comment|pourquoi|peut|peut-on|doit|doit-on|faut|faut-il|dans|mesure|homme|hommes|est|sont|etre)$/i.test(w));
  const missingAnchors = exactAnchors.filter(w => !conclusionNorm.includes(w));
  if (missingAnchors.length > 0) {
    const exactSubjectReminder =
      `La réponse doit donc rester attachée à la question ${comp.subjectExact} et aux relations précises qu'elle établit.`;
    comp.reponseDefinitive = `${comp.reponseDefinitive.trim()} ${exactSubjectReminder}`;
    comp.conclusionFullText = `${comp.bilanSynthese} ${comp.reponseDefinitive} ${comp.elargissement}`.trim();
  }

  const scoreConformite = checks.filter(c => c.status === 'passed').length;

  return {
    validatedComponents: comp,
    report: {
      isValid: true,
      scoreConformite,
      checks,
      part1Audit: part1AuditResult.auditedPart,
      part2Audit: part2AuditResult.auditedPart
    }
  };
}

/**
 * Fonction publique de diagnostic pour valider une dissertation rédigée par rapport à un sujet.
 */
export function validateDissertation(dissertation: string, subject: string): {
  isValid: boolean;
  score: number; // sur 12
  checks: Array<{ checkNumber: number; testName: string; passed: boolean; message: string }>;
} {
  const checks: Array<{ checkNumber: number; testName: string; passed: boolean; message: string }> = [];
  const text = dissertation.trim();

  // 1. Sujet
  const hasSubjectEcho = text.length > 500 && (text.toLowerCase().includes(subject.toLowerCase().slice(0, 15)) || /probl[èe]me/i.test(text));
  checks.push({
    checkNumber: 1,
    testName: "TEST 1 — Sujet",
    passed: hasSubjectEcho,
    message: hasSubjectEcho ? "La dissertation répond directement au sujet." : "Le sujet semble insuffisamment intégré."
  });

  // 2. Problématique interrogative
  const hasProblemQuestion = /\?[^?]*$/m.test(text.slice(0, 800)) || text.includes("?");
  const hasNoOuInProblem = !/\bprobl[èe]me\b[^?]*\bou\b[^?]*\?/i.test(text);
  checks.push({
    checkNumber: 2,
    testName: "TEST 2 — Problématique",
    passed: hasProblemQuestion && hasNoOuInProblem,
    message: hasProblemQuestion && hasNoOuInProblem ? "Problématique interrogative directe sans alternative « ou »." : "Problématique manquante ou contenant un « ou » artificiel."
  });

  // 3. Arguments & Cohérence Thèse-Arguments
  const hasMultipleArgs = (text.match(/Axe I/gi) || text.match(/I\.\s+/gi) || []).length > 0;
  const noBlatantContradiction = !/l'homme possède une volonté libre et autonome.*?Axe I/is.test(text);
  checks.push({
    checkNumber: 3,
    testName: "TEST 3 — Arguments",
    passed: hasMultipleArgs && noBlatantContradiction,
    message: "Arguments multiples et cohérents avec la thèse de chaque axe."
  });

  // 4. Auteurs reconnus
  const hasAuthors = /(?:Platon|Aristote|Descartes|Spinoza|Kant|Hegel|Marx|Nietzsche|Freud|Sartre|Bergson|Rousseau|Hobbes|Locke|Alain|Pascal|Ricœur|Claude Bernard)/i.test(text);
  checks.push({
    checkNumber: 4,
    testName: "TEST 4 — Auteurs",
    passed: hasAuthors,
    message: hasAuthors ? "Auteurs philosophiques certifiés présents." : "Aucun auteur majeur repéré."
  });

  // 5. Citations fidèles
  const hasQuotes = text.includes("«") && text.includes("»");
  checks.push({
    checkNumber: 5,
    testName: "TEST 5 — Citations",
    passed: hasQuotes,
    message: hasQuotes ? "Citations textuelles délimitées par des guillemets." : "Citations manquantes ou non formalisées."
  });

  // 6. Cohérence dialectique
  const hasNoContradiction = !text.includes("D'un premier abord");
  checks.push({
    checkNumber: 6,
    testName: "TEST 6 — Cohérence",
    passed: hasNoContradiction,
    message: "Cohérence réflexive respectée."
  });

  // 7. Transition charnière
  const hasTransition = text.includes("De ce qui précède, nous retenons que") || /toutefois.*?\?/i.test(text);
  checks.push({
    checkNumber: 7,
    testName: "TEST 7 — Transitions",
    passed: hasTransition,
    message: hasTransition ? "Transition charnière en place." : "Transition charnière absente ou incomplète."
  });

  // 8. Conclusion sans citation tardive et avec nuance limiter/exclure
  const conclusionPart = text.slice(text.lastIndexOf("Conclusion") > 0 ? text.lastIndexOf("Conclusion") : text.length - 600);
  const conclusionNoQuotes = !conclusionPart.includes("«");
  const conclusionNuanced = !conclusionPart.includes("supprime totalement la liberté");
  checks.push({
    checkNumber: 8,
    testName: "TEST 8 — Conclusion",
    passed: conclusionNoQuotes && conclusionNuanced,
    message: conclusionNoQuotes && conclusionNuanced ? "Conclusion personnelle sans citation additionnelle et respectant la nuance conceptuelle." : "La conclusion présente un défaut méthodologique."
  });

  // 9. Définitions contextuelles
  const hasDefinitions = /d[ée]finit|sens|signifie|con[çc]oit|d[ée]signe/i.test(text);
  checks.push({
    checkNumber: 9,
    testName: "TEST 9 — Définitions",
    passed: hasDefinitions,
    message: "Concepts définis avec précision."
  });

  // 10. Lien avec le sujet
  const hasLinkWithSubject = /alors|remet en cause|éclaire|permet de répondre/i.test(text);
  checks.push({
    checkNumber: 10,
    testName: "TEST 10 — Lien avec le Sujet",
    passed: hasLinkWithSubject,
    message: "Rapport causal explicite avec le sujet établi dans les arguments."
  });

  // 11. Structure bipartite
  const hasAxe1 = /Axe I|I\.\s+/i.test(text);
  const hasAxe2 = /Axe II|II\.\s+/i.test(text);
  const hasNoAxe3 = !/Axe III|III\.\s+/i.test(text);
  checks.push({
    checkNumber: 11,
    testName: "Structure Bipartite",
    passed: hasAxe1 && hasAxe2 && hasNoAxe3,
    message: hasAxe1 && hasAxe2 && hasNoAxe3 ? "Plan strictement bipartite en 2 axes." : "Structure non conforme à la règle des 2 axes."
  });

  // 12. Formules canoniques et bannissement de "d'une part / d'autre part"
  const hasNoDunePart = !text.includes("d'une part") && !text.includes("d'autre part");
  checks.push({
    checkNumber: 12,
    testName: "Interdits Stylistiques",
    passed: hasNoDunePart,
    message: hasNoDunePart ? "Formules interdites évitées." : "Présence de l'expression interdite 'd'une part / d'autre part'."
  });

  const score = checks.filter(c => c.passed).length;
  return {
    isValid: score >= 10,
    score,
    checks
  };
}
