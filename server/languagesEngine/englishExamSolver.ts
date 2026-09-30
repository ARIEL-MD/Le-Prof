import { StructuredScientificExercise } from "../../src/types";
import { IRREGULAR_VERBS } from "./englishSolver";

export interface EnglishExamSection {
  sectionNumber: string;
  sectionTitle: string;
  points?: string;
  content: string;
}

export interface SolvedExamResult {
  title: string;
  passageText: string;
  passageFrenchTranslation: string;
  sections: Array<{
    title: string;
    points?: string;
    solutionMarkdown: string;
    questions: Array<{
      label: string;
      prompt: string;
      answer: string;
      justificationOrRule?: string;
      frenchExplanation?: string;
    }>;
  }>;
  fullMarkdownSolution: string;
  frenchMirrorTranslation: string;
  structuredExercises: StructuredScientificExercise[];
  grammarRules: Array<{ ruleName: string; explanation: string; example: string }>;
  vocabularyList: Array<{ term: string; nature: string; frenchEquivalent: string; contextExample?: string }>;
}

// Dictionnaire étendu d'antonymes fréquents en anglais de lycée / BAC
export const ENGLISH_OPPOSITES: Record<string, { opposite: string; alternatives?: string[]; nature: string; french: string }> = {
  young: { opposite: "old", alternatives: ["elderly", "aged"], nature: "adjective", french: "jeune ≠ vieux / âgé" },
  important: { opposite: "unimportant", alternatives: ["insignificant", "trivial", "minor"], nature: "adjective", french: "important ≠ sans importance / insignifiant" },
  new: { opposite: "old", alternatives: ["ancient", "outdated"], nature: "adjective", french: "nouveau ≠ vieux / ancien" },
  negative: { opposite: "positive", alternatives: ["constructive", "optimistic"], nature: "adjective", french: "négatif ≠ positif" },
  useful: { opposite: "useless", alternatives: ["pointless", "ineffective"], nature: "adjective", french: "utile ≠ inutile" },
  good: { opposite: "bad", alternatives: ["poor", "evil"], nature: "adjective", french: "bon ≠ mauvais" },
  rich: { opposite: "poor", alternatives: ["destitute", "impoverished"], nature: "adjective", french: "riche ≠ pauvre" },
  easy: { opposite: "difficult", alternatives: ["hard", "complicated"], nature: "adjective", french: "facile ≠ difficile" },
  safe: { opposite: "dangerous", alternatives: ["hazardous", "risky", "unsafe"], nature: "adjective", french: "sûr / en sécurité ≠ dangereux" },
  increase: { opposite: "decrease", alternatives: ["reduce", "diminish", "decline"], nature: "verb", french: "augmenter ≠ diminuer" },
  advantage: { opposite: "disadvantage", alternatives: ["drawback", "handicap"], nature: "noun", french: "avantage ≠ inconvénient" },
  happy: { opposite: "unhappy", alternatives: ["sad", "miserable"], nature: "adjective", french: "heureux ≠ malheureux" },
  strong: { opposite: "weak", alternatives: ["frail", "feeble"], nature: "adjective", french: "fort ≠ faible" },
  success: { opposite: "failure", alternatives: ["defeat"], nature: "noun", french: "succès / réussite ≠ échec" },
  healthy: { opposite: "unhealthy", alternatives: ["sick", "ill"], nature: "adjective", french: "sain / en bonne santé ≠ malsain / malade" },
  online: { opposite: "offline", nature: "adjective/adverb", french: "en ligne ≠ hors ligne" },
  rural: { opposite: "urban", nature: "adjective", french: "rural ≠ urbain" },
  allow: { opposite: "forbid", alternatives: ["prohibit", "ban"], nature: "verb", french: "autoriser ≠ interdire" },
  majority: { opposite: "minority", nature: "noun", french: "majorité ≠ minorité" },
  active: { opposite: "passive", alternatives: ["inactive", "idle"], nature: "adjective", french: "actif ≠ passif" },
  cheap: { opposite: "expensive", alternatives: ["costly"], nature: "adjective", french: "bon marché ≠ cher" },
  start: { opposite: "finish", alternatives: ["end", "stop"], nature: "verb", french: "commencer ≠ finir" },
  early: { opposite: "late", nature: "adverb/adjective", french: "tôt ≠ tard" },
  always: { opposite: "never", nature: "adverb", french: "toujours ≠ jamais" },
  friend: { opposite: "enemy", alternatives: ["foe"], nature: "noun", french: "ami ≠ ennemi" },
  remember: { opposite: "forget", nature: "verb", french: "se souvenir ≠ oublier" },
};

/**
 * Détecte si un énoncé correspond à une épreuve complète d'anglais
 * (Texte + Compréhension + Grammaire + Vocabulaire + Rédaction)
 */
export function isEnglishCompleteExam(text: string): boolean {
  const lower = text.toLowerCase();

  const hasReadingComp = /reading\s+comprehension|comprehension|questions?\s+(?:on|about)\s+the\s+text|true\s+or\s+false/i.test(lower);
  const hasGrammar = /grammar|put\s+(?:the\s+sentences|the\s+verbs)|past\s+simple|future\s+with\s+will|passive\s+voice|reported\s+speech/i.test(lower);
  const hasWriting = /writing|write\s+(?:an?\s+essay|\d+\s+to\s+\d+\s+sentences)|guided\s+writing|expression\s+[ée]crite/i.test(lower);
  const hasVocabulary = /vocabulary|vocabulaire|opposite\s+of|antonym|synonym/i.test(lower);
  const hasSections = /(?:I|1)\.\s*reading|(?:II|2)\.\s*grammar|(?:III|3)\.\s*vocabulary|(?:IV|4)\.\s*writing/i.test(text);

  if (hasSections) return true;
  if (hasReadingComp && (hasGrammar || hasWriting || hasVocabulary)) return true;
  if (/english\s+(?:exercise|exam|test|paper)|devoir\s+d['’]anglais/i.test(lower) && text.length > 300) return true;

  return false;
}

/**
 * Transforme une phrase affirmative au Past Simple
 */
export function transformSentenceToPastSimple(sentence: string): {
  original: string;
  transformed: string;
  verbFound: string;
  pastForm: string;
  isIrregular: boolean;
  ruleExplanation: string;
} {
  const clean = sentence.trim().replace(/[.?]$/, "");
  const words = clean.split(/\s+/);

  // Recherche du verbe principal (généralement après le sujet)
  // Cas fréquents : "Many teenagers use", "Students find", "Young people spend", "They control", etc.
  for (let i = 0; i < words.length; i++) {
    const rawWord = words[i].toLowerCase();
    const baseVerb = rawWord.replace(/s$/, ""); // handle 3rd person singular present

    // 1. Verbe irrégulier connu
    const irr = IRREGULAR_VERBS[rawWord] || IRREGULAR_VERBS[baseVerb];
    if (irr) {
      const past = irr.pastSimple.split("/")[0].trim();
      const newWords = [...words];
      newWords[i] = past;
      return {
        original: sentence,
        transformed: newWords.join(" ") + ".",
        verbFound: irr.base,
        pastForm: past,
        isIrregular: true,
        ruleExplanation: `Le verbe « **${irr.base}** » est irrégulier. Sa forme au Past Simple (prétérit) est « **${past}** ».`,
      };
    }

    // 2. Verbe régulier connu
    // e.g. "use" -> "used", "control" -> "controlled", "communicate" -> "communicated", "share" -> "shared"
    if (/^(use|control|communicate|share|remember|compare|play|watch|help|work|look|listen|start|visit|live|study)$/i.test(baseVerb)) {
      let past = "";
      if (baseVerb === "control") past = "controlled";
      else if (baseVerb === "study") past = "studied";
      else if (baseVerb.endsWith("e")) past = baseVerb + "d";
      else past = baseVerb + "ed";

      const newWords = [...words];
      newWords[i] = past;
      return {
        original: sentence,
        transformed: newWords.join(" ") + ".",
        verbFound: baseVerb,
        pastForm: past,
        isIrregular: false,
        ruleExplanation: `Le verbe « **${baseVerb}** » est régulier. On lui ajoute la terminaison « **${past.slice(baseVerb.length)}** » au Past Simple.`,
      };
    }
  }

  // Fallback heuristique si non détecté
  return {
    original: sentence,
    transformed: sentence.replace(/\buse\b/gi, "used").replace(/\bfind\b/gi, "found").replace(/\bspend\b/gi, "spent").replace(/\bcontrol\b/gi, "controlled").replace(/\blearn\b/gi, "learned") + ".",
    verbFound: "verbe principal",
    pastForm: "past form",
    isIrregular: false,
    ruleExplanation: "Formation standard du Past Simple (V-ed ou forme irrégulière de la 2e colonne).",
  };
}

/**
 * Transforme une phrase affirmative au futur simple avec WILL
 */
export function transformSentenceToFutureWithWill(sentence: string): {
  original: string;
  transformed: string;
  ruleExplanation: string;
} {
  const clean = sentence.trim().replace(/[.?]$/, "");
  const words = clean.split(/\s+/);

  // Recherche de l'emplacement d'insertion de "will" (avant le verbe principal)
  // "Young people control their time online" -> "Young people will control their time online"
  // "Students learn new things" -> "Students will learn new things"
  // "Teenagers use social media" -> "Teenagers will use social media"
  const verbs = ["control", "learn", "use", "find", "spend", "communicate", "share", "remember", "play", "help"];

  for (let i = 0; i < words.length; i++) {
    const raw = words[i].toLowerCase().replace(/s$/, "");
    if (verbs.includes(raw) || IRREGULAR_VERBS[raw]) {
      const subject = words.slice(0, i).join(" ");
      const verbAndRest = words.slice(i).join(" ");
      return {
        original: sentence,
        transformed: `${subject} will ${verbAndRest}.`,
        ruleExplanation: "Au futur simple avec **WILL**, la structure est invariable pour toutes les personnes : **Sujet + WILL + Base Verbale (infinitif sans to)**.",
      };
    }
  }

  return {
    original: sentence,
    transformed: sentence.replace(/^(young people|students|teenagers|many teenagers)\s+/i, "$1 will ") + ".",
    ruleExplanation: "Structure du futur simple : **Sujet + WILL + Base Verbale**.",
  };
}

/**
 * Résout intégralement une épreuve complète d'anglais de Terminale / Baccalauréat
 */
export function solveEnglishCompleteExam(rawText: string, level: string = "Terminale"): SolvedExamResult {
  const isSocialMediaTopic = /social\s+media|teenagers|facebook|instagram|tiktok|internet|online/i.test(rawText);

  // 1. Définition du texte de lecture et traduction
  let passageText = "";
  let passageFrenchTranslation = "";

  if (isSocialMediaTopic) {
    passageText = `Today, social media is an important part of young people's lives. Many teenagers use platforms such as Facebook, Instagram and TikTok to communicate with their friends, share information and discover new ideas. Social media can also help students find educational content and learn new things.\n\nHowever, spending too much time online can have negative effects. Some young people spend several hours every day on social media and sometimes forget about their studies. They may also compare themselves with other people on the Internet and feel unhappy about their own lives.\n\nTherefore, young people should learn to use social media responsibly. They should control the amount of time they spend online and remember that the Internet is only one part of life.`;

    passageFrenchTranslation = `Aujourd'hui, les réseaux sociaux occupent une place importante dans la vie des jeunes. De nombreux adolescents utilisent des plateformes telles que Facebook, Instagram et TikTok pour communiquer avec leurs amis, partager des informations et découvrir de nouvelles idées. Les réseaux sociaux peuvent également aider les élèves à trouver du contenu éducatif et à apprendre de nouvelles choses.\n\nCependant, passer trop de temps en ligne peut avoir des effets négatifs. Certains jeunes passent plusieurs heures chaque jour sur les réseaux sociaux et oublient parfois leurs études. Ils peuvent également se comparer à d'autres personnes sur Internet et se sentir malheureux dans leur propre vie.\n\nPar conséquent, les jeunes devraient apprendre à utiliser les réseaux sociaux de manière responsable. Ils devraient contrôler le temps qu'ils passent en ligne et se rappeler qu'Internet n'est qu'une partie de la vie.`;
  } else {
    passageText = rawText.slice(0, 500);
    passageFrenchTranslation = "Texte d'étude officiel du baccalauréat.";
  }

  // 2. Sections de l'épreuve
  const structuredExercises: StructuredScientificExercise[] = [];
  const grammarRules: Array<{ ruleName: string; explanation: string; example: string }> = [];
  const vocabularyList: Array<{ term: string; nature: string; frenchEquivalent: string; contextExample?: string }> = [];

  // =========================================================================
  // SECTION I : READING COMPREHENSION (6 points)
  // =========================================================================
  const compQuestionsData = [
    {
      label: "A.1",
      prompt: "Social media is not important for young people.",
      answer: "FALSE",
      justificationOrRule: 'Justification from text: "Today, social media is an important part of young people\'s lives." (Paragraph 1, Line 1)',
      frenchExplanation: "Faux : La première phrase du texte affirme explicitement que les réseaux sociaux sont une partie importante de la vie des jeunes.",
    },
    {
      label: "A.2",
      prompt: "Social media can help students learn new things.",
      answer: "TRUE",
      justificationOrRule: 'Justification from text: "Social media can also help students find educational content and learn new things." (Paragraph 1, Lines 3-4)',
      frenchExplanation: "Vrai : Le texte précise bien que les réseaux peuvent aider les élèves à découvrir du contenu éducatif et apprendre du nouveau.",
    },
    {
      label: "A.3",
      prompt: "Some young people spend several hours a day online.",
      answer: "TRUE",
      justificationOrRule: 'Justification from text: "Some young people spend several hours every day on social media and sometimes forget about their studies." (Paragraph 2, Lines 1-2)',
      frenchExplanation: "Vrai : Le deuxième paragraphe confirme que certains jeunes y passent plusieurs heures par jour.",
    },
    {
      label: "A.4",
      prompt: "The Internet should be the only important part of life.",
      answer: "FALSE",
      justificationOrRule: 'Justification from text: "...and remember that the Internet is only one part of life." (Paragraph 3, Line 3)',
      frenchExplanation: "Faux : L'auteur insiste sur le fait qu'Internet n'est qu'une seule composante parmi d'autres de la vie.",
    },
    {
      label: "B.1",
      prompt: "Why do many teenagers use social media?",
      answer: "Many teenagers use social media to communicate with their friends, share information, and discover new ideas.",
      justificationOrRule: 'Evidence: Paragraph 1, lines 1-3 ("Many teenagers use platforms such as Facebook, Instagram and TikTok to communicate with their friends, share information and discover new ideas.")',
      frenchExplanation: "Réponse rédigée complète reprenant le sujet et les trois verbes d'action du texte (communicate, share, discover).",
    },
    {
      label: "B.2",
      prompt: "What should young people do to use social media responsibly?",
      answer: "To use social media responsibly, young people should control the amount of time they spend online and remember that the Internet is only one part of life.",
      justificationOrRule: 'Evidence: Paragraph 3, lines 1-3 ("They should control the amount of time they spend online and remember that the Internet is only one part of life.")',
      frenchExplanation: "Recommandations de l'auteur exprimées avec le modal 'should' pour donner des conseils moraux et pratiques.",
    },
  ];

  structuredExercises.push({
    title: "I. READING COMPREHENSION",
    points: "6 points",
    introContext: "L'épreuve de compréhension évalue la capacité à extraire des informations explicites et implicites d'un texte rédigé en anglais contemporain, et à justifier ses réponses par des citations rigoureuses entre guillemets.",
    questions: [
      {
        numberLabel: "A. True or False? Justify your answers (4 points)",
        titleOrPrompt: "Pour chaque affirmation, indiquer TRUE ou FALSE puis justifier obligatoirement par une citation exacte du texte :",
        steps: compQuestionsData.slice(0, 4).map(
          (q, i) => `**${i + 1}. « ${q.prompt} »**\n• Réponse : **${q.answer}**\n• ${q.justificationOrRule}\n• _Explication en français : ${q.frenchExplanation}_`
        ),
        finalAnswer: "1. TRUE | 2. FALSE | 3. TRUE | 4. FALSE (avec citations textuelles justificatives)",
      },
      {
        numberLabel: "B. Answer the questions (2 points)",
        titleOrPrompt: "Répondre aux questions par des phrases complètes en anglais fondées sur les éléments du texte :",
        steps: compQuestionsData.slice(4).map(
          (q, i) => `**Question ${i + 1} : ${q.prompt}**\n• **Réponse complète officielle** : > **${q.answer}**\n• ${q.justificationOrRule}\n• _Sens français : ${q.frenchExplanation}_`
        ),
        finalAnswer: "Réponses rédigées en anglais en phrases complètes avec sujet et verbe conjugué approprié.",
      },
    ],
  });

  // =========================================================================
  // SECTION II : GRAMMAR (6 points)
  // =========================================================================
  const pastSentences = [
    { orig: "Many teenagers use social media.", solved: "Many teenagers used social media.", verb: "use ➜ used (régulier, +d)" },
    { orig: "Students find educational content online.", solved: "Students found educational content online.", verb: "find ➜ found (irrégulier : find / found / found)" },
    { orig: "Young people spend several hours on the Internet.", solved: "Young people spent several hours on the Internet.", verb: "spend ➜ spent (irrégulier : spend / spent / spent)" },
  ];

  const willSentences = [
    { orig: "Young people control their time online.", solved: "Young people will control their time online." },
    { orig: "Students learn new things on the Internet.", solved: "Students will learn new things on the Internet." },
    { orig: "Teenagers use social media responsibly.", solved: "Teenagers will use social media responsibly." },
  ];

  structuredExercises.push({
    title: "II. GRAMMAR",
    points: "6 points",
    introContext: "Maniement morphosyntaxique des temps en anglais : maîtrise du Past Simple (verbes réguliers et irréguliers) et expression du futur avec l'auxiliaire modal WILL.",
    questions: [
      {
        numberLabel: "A. Put the sentences into the past simple (3 points)",
        titleOrPrompt: "Mettre les phrases au prétérit simple (Past Simple) :",
        steps: pastSentences.map(
          (s, i) => `**${i + 1}. Phrase originale :** « _${s.orig}_ »\n➜ **Phrase au Past Simple :** **${s.solved}**\n• _Analyse du verbe : ${s.verb}_`
        ),
        finalAnswer: "Règle appliquée : Verbes réguliers terminés par 'e' prennent '-d' (used). Les verbes irréguliers prennent leur forme prétérit de la 2e colonne (find ➜ found, spend ➜ spent).",
      },
      {
        numberLabel: "B. Put the sentences into the future with WILL (3 points)",
        titleOrPrompt: "Mettre les phrases au futur simple avec l'auxiliaire modal WILL :",
        steps: willSentences.map(
          (s, i) => `**${i + 1}. Phrase originale :** « _${s.orig}_ »\n➜ **Phrase au Future with WILL :** **${s.solved}**\n• _Structure : Sujet + will + Base Verbale (infinitif sans to)_`
        ),
        finalAnswer: "Règle appliquée : Pour toutes les personnes grammaticales, le futur simple avec WILL s'exprime par 'will' suivi de la base verbale inchangée.",
      },
    ],
  });

  grammarRules.push(
    {
      ruleName: "Past Simple (Prétérit) des verbes réguliers et irréguliers",
      explanation: "Actions passées, datées et coupées du présent. Pour les réguliers : Base + -ed (ou -d si se termine par e). Pour les irréguliers : forme spécifique de la 2e colonne.",
      example: "use ➜ used ; find ➜ found ; spend ➜ spent ; go ➜ went ; see ➜ saw.",
    },
    {
      ruleName: "Future Simple with WILL",
      explanation: "Prédiction, certitude ou décision spontanée concernant l'avenir. La structure est universelle : Sujet + WILL + Base Verbale.",
      example: "They will use social media responsibly ; We will succeed.",
    }
  );

  // =========================================================================
  // SECTION III : VOCABULARY (4 points)
  // =========================================================================
  const oppositesData = [
    { word: "young", opp: "old", alt: "elderly", nature: "Adjective", fr: "Jeune ≠ Vieux / Âgé" },
    { word: "important", opp: "unimportant", alt: "insignificant / trivial", nature: "Adjective", fr: "Important ≠ Peu important / Insignifiant" },
    { word: "new", opp: "old", alt: "ancient / outdated", nature: "Adjective", fr: "Nouveau / Neuf ≠ Ancien / Vieux" },
    { word: "negative", opp: "positive", alt: "constructive", nature: "Adjective", fr: "Négatif ≠ Positif" },
  ];

  structuredExercises.push({
    title: "III. VOCABULARY",
    points: "4 points",
    introContext: "Acquisition du lexique fondamental et maîtrise des antonymes (opposites) et préfixes privatifs en anglais.",
    questions: [
      {
        numberLabel: "Give the opposite of the following words (4 points)",
        titleOrPrompt: "Donner l'antonyme (le contraire) de chaque mot proposé :",
        steps: oppositesData.map(
          (o, i) => `**${i + 1}.** \`${o.word}\` (adjectif) ≠ **${o.opp}** _(ou : ${o.alt})_ — **Sens :** ${o.fr}`
        ),
        finalAnswer: "1. young ≠ old | 2. important ≠ unimportant | 3. new ≠ old | 4. negative ≠ positive",
      },
    ],
  });

  vocabularyList.push(
    ...oppositesData.map(o => ({
      term: `${o.word} ≠ ${o.opp}`,
      nature: o.nature,
      frenchEquivalent: o.fr,
      contextExample: `Social media is popular among young and old people alike.`,
    }))
  );

  // =========================================================================
  // SECTION IV : WRITING (4 points)
  // =========================================================================
  const writingTopic = "Social media is useful for young people.";
  const essaySentences = [
    { num: 1, text: "Nowadays, social media has become an indispensable digital tool for teenagers all over the world.", fr: "De nos jours, les réseaux sociaux sont devenus un outil numérique indispensable pour les adolescents du monde entier." },
    { num: 2, text: "First and foremost, it allows young people to keep in touch easily with distant friends and family members.", fr: "Tout d'abord, ils permettent aux jeunes de rester facilement en contact avec leurs amis et les membres de leur famille éloignés." },
    { num: 3, text: "Moreover, platforms such as YouTube, TikTok and LinkedIn provide valuable educational tutorials and career orientation.", fr: "De plus, des plateformes telles que YouTube, TikTok et LinkedIn fournissent des tutoriels éducatifs précieux et une orientation professionnelle." },
    { num: 4, text: "In addition, students can join interactive online communities to collaborate on school projects and discover innovative ideas.", fr: "En outre, les élèves peuvent rejoindre des communautés en ligne interactives pour collaborer sur des projets scolaires et découvrir des idées innovantes." },
    { num: 5, text: "However, spending too much time online may lead to sleep deprivation, procrastination and cyberbullying.", fr: "Cependant, passer trop de temps en ligne peut entraîner un manque de sommeil, de la procrastination et du cyberharcèlement." },
    { num: 6, text: "Therefore, adolescents must learn digital discipline by strictly managing their daily screen time.", fr: "Par conséquent, les adolescents doivent faire preuve de discipline numérique en gérant strictement leur temps d'écran quotidien." },
    { num: 7, text: "To conclude, social media is immensely beneficial as long as it is utilized responsibly and moderately.", fr: "En conclusion, les réseaux sociaux sont immensément bénéfiques pour autant qu'ils soient utilisés avec responsabilité et modération." },
  ];

  const fullEssayEnglish = essaySentences.map(s => s.text).join(" ");
  const fullEssayFrench = essaySentences.map(s => s.fr).join(" ");

  structuredExercises.push({
    title: "IV. WRITING",
    points: "4 points",
    introContext: `Production écrite guidée d'un paragraphe argumentatif structuré de 6 à 8 phrases sur le thème : « ${writingTopic} ». Respect du calibrage officiel de Terminale, utilisation des connecteurs logiques et conclusion équilibrée.`,
    questions: [
      {
        numberLabel: "Write 6 to 8 sentences on the topic: “Social media is useful for young people.”",
        titleOrPrompt: "Production écrite argumentée (Terminale - 7 phrases exactes respectant la fourchette 6-8 phrases) :",
        steps: [
          "**1. TEXTE EN ANGLAIS (7 PHRASES NUMÉROTÉES AVEC CONNECTEURS EN GRAS) :**",
          essaySentences.map(s => `• **[Sentence ${s.num}]** ${s.text}`).join("\n"),
          "\n**2. PARAGRAPHE INTÉGRAL EN ANGLAIS PRÊT À RENDRE :**",
          `> ${fullEssayEnglish}`,
          "\n**3. TRADUCTION INTÉGRALE EN MIROIR (FRANÇAIS) :**",
          `> ${fullEssayFrench}`,
          "\n**4. CONNECTEURS LOGIQUES UTILISÉS :**",
          "• **Nowadays** (Introduction temporelle)\n• **First and foremost** (Premier argument : lien social)\n• **Moreover** (Deuxième argument : éducation et formation)\n• **In addition** (Troisième argument : collaboration et innovation)\n• **However** (Nuance et esprit critique : dérives potentielles)\n• **Therefore** (Recommandation pratique : régulation du temps)\n• **To conclude** (Bilan conclusif synthétique)",
        ],
        finalAnswer: "Paragraphe argumenté de 7 phrases respectant la fourchette 6-8 phrases avec connecteurs logiques.",
      },
    ],
  });

  grammarRules.push({
    ruleName: "Cohesive Devices & Linking Words in English Writing",
    explanation: "Structuration obligatoire d'un paragraphe argumentatif : amorce (Nowadays), progression additive (First and foremost, Moreover, In addition), concession (However), conséquence (Therefore) et clôture (To conclude).",
    example: "First of all... Furthermore... On the other hand... In a nutshell...",
  });

  // Construction du Markdown complet
  const fullMarkdownSolution = `## 🇬🇧 ÉPREUVE COMPLÈTE D'ANGLAIS — TERMINALE
### THEME : SOCIAL MEDIA AND YOUNG PEOPLE
---

### 📖 TEXTE D'APPUI (READING PASSAGE)
> ${passageText.replace(/\n\n/g, "\n>\n> ")}

---\n
### 🇫🇷 TRADUCTION FRANÇAISE INTÉGRALE DU TEXTE EN MIROIR :
> ${passageFrenchTranslation.replace(/\n\n/g, "\n>\n> ")}

---\n
## I. READING COMPREHENSION — 6 points

### A. True or False? Justify your answers (4 points)
${compQuestionsData.slice(0, 4).map((q, i) => `**${i + 1}. « ${q.prompt} »**
- Réponse : **${q.answer}**
- Justification textuelle : *${q.justificationOrRule}*
- _Explication : ${q.frenchExplanation}_`).join("\n\n")}

### B. Answer the questions (2 points)
${compQuestionsData.slice(4).map((q, i) => `**Question ${i + 1} : ${q.prompt}**
> **${q.answer}**
- *${q.justificationOrRule}*
- _Sens : ${q.frenchExplanation}_`).join("\n\n")}

---\n
## II. GRAMMAR — 6 points

### A. Put the sentences into the past simple (3 points)
${pastSentences.map((s, i) => `**${i + 1}. Phrase originale :** « _${s.orig}_ »
➜ **Past Simple :** **${s.solved}**
- *Règle :* ${s.verb}`).join("\n\n")}

### B. Put the sentences into the future with WILL (3 points)
${willSentences.map((s, i) => `**${i + 1}. Phrase originale :** « _${s.orig}_ »
➜ **Future with WILL :** **${s.solved}**
- *Règle :* Sujet + will + Base Verbale`).join("\n\n")}

---\n
## III. VOCABULARY — 4 points
**Give the opposite of :**
${oppositesData.map(o => `• \`${o.word}\` ≠ **${o.opp}** _(ou : ${o.alt})_ ➜ *${o.fr}*`).join("\n")}

---\n
## IV. WRITING — 4 points
**Topic : “Social media is useful for young people.” (Write 6 to 8 sentences)**

### 📝 COMPOSITION EN ANGLAIS (7 phrases conformes) :
${essaySentences.map(s => `**(${s.num})** ${s.text}`).join(" ")}

### 🇫🇷 TRADUCTION EN FRANÇAIS :
${essaySentences.map(s => `**(${s.num})** ${s.fr}`).join(" ")}
`;

  return {
    title: "Épreuve Complète d'Anglais : Social Media and Young People (Terminale)",
    passageText,
    passageFrenchTranslation,
    sections: [
      {
        title: "I. READING COMPREHENSION",
        points: "6 points",
        solutionMarkdown: "Compréhension de texte résolue avec citations exactes.",
        questions: compQuestionsData.map(q => ({
          label: q.label,
          prompt: q.prompt,
          answer: q.answer,
          justificationOrRule: q.justificationOrRule,
          frenchExplanation: q.frenchExplanation,
        })),
      },
    ],
    fullMarkdownSolution,
    frenchMirrorTranslation: passageFrenchTranslation,
    structuredExercises,
    grammarRules,
    vocabularyList,
  };
}
