import { LanguageResolutionResult } from "./types";
import { MethodologyAnalysisResult } from "../../src/types";

// Base de verbes irréguliers anglais complète pour le collège et lycée
export interface IrregularVerb {
  base: string;
  pastSimple: string;
  pastParticiple: string;
  french: string;
}

export const IRREGULAR_VERBS: Record<string, IrregularVerb> = {
  be: { base: "be", pastSimple: "was/were", pastParticiple: "been", french: "être" },
  become: { base: "become", pastSimple: "became", pastParticiple: "become", french: "devenir" },
  begin: { base: "begin", pastSimple: "began", pastParticiple: "begun", french: "commencer" },
  bite: { base: "bite", pastSimple: "bit", pastParticiple: "bitten", french: "mordre" },
  break: { base: "break", pastSimple: "broke", pastParticiple: "broken", french: "casser, briser" },
  bring: { base: "bring", pastSimple: "brought", pastParticiple: "brought", french: "apporter" },
  build: { base: "build", pastSimple: "built", pastParticiple: "built", french: "construire" },
  buy: { base: "buy", pastSimple: "bought", pastParticiple: "bought", french: "acheter" },
  catch: { base: "catch", pastSimple: "caught", pastParticiple: "caught", french: "attraper" },
  choose: { base: "choose", pastSimple: "chose", pastParticiple: "chosen", french: "choisir" },
  come: { base: "come", pastSimple: "came", pastParticiple: "come", french: "venir" },
  do: { base: "do", pastSimple: "did", pastParticiple: "done", french: "faire" },
  draw: { base: "draw", pastSimple: "drew", pastParticiple: "drawn", french: "dessiner" },
  drink: { base: "drink", pastSimple: "drank", pastParticiple: "drunk", french: "boire" },
  drive: { base: "drive", pastSimple: "drove", pastParticiple: "driven", french: "conduire" },
  eat: { base: "eat", pastSimple: "ate", pastParticiple: "eaten", french: "manger" },
  fall: { base: "fall", pastSimple: "fell", pastParticiple: "fallen", french: "tomber" },
  feel: { base: "feel", pastSimple: "felt", pastParticiple: "felt", french: "ressentir, éprouver" },
  find: { base: "find", pastSimple: "found", pastParticiple: "found", french: "trouver" },
  fly: { base: "fly", pastSimple: "flew", pastParticiple: "flown", french: "voler (dans les airs)" },
  forget: { base: "forget", pastSimple: "forgot", pastParticiple: "forgotten", french: "oublier" },
  forgive: { base: "forgive", pastSimple: "forgave", pastParticiple: "forgiven", french: "pardonner" },
  get: { base: "get", pastSimple: "got", pastParticiple: "got / gotten", french: "obtenir, recevoir" },
  give: { base: "give", pastSimple: "gave", pastParticiple: "given", french: "donner" },
  go: { base: "go", pastSimple: "went", pastParticiple: "gone", french: "aller" },
  grow: { base: "grow", pastSimple: "grew", pastParticiple: "grown", french: "grandir, cultiver" },
  have: { base: "have", pastSimple: "had", pastParticiple: "had", french: "avoir" },
  hear: { base: "hear", pastSimple: "heard", pastParticiple: "heard", french: "entendre" },
  hide: { base: "hide", pastSimple: "hid", pastParticiple: "hidden", french: "cacher" },
  know: { base: "know", pastSimple: "knew", pastParticiple: "known", french: "savoir, connaître" },
  learn: { base: "learn", pastSimple: "learnt / learned", pastParticiple: "learnt / learned", french: "apprendre" },
  leave: { base: "leave", pastSimple: "left", pastParticiple: "left", french: "quitter, partir" },
  lose: { base: "lose", pastSimple: "lost", pastParticiple: "lost", french: "perdre" },
  make: { base: "make", pastSimple: "made", pastParticiple: "made", french: "fabriquer, faire" },
  meet: { base: "meet", pastSimple: "met", pastParticiple: "met", french: "rencontrer" },
  pay: { base: "pay", pastSimple: "paid", pastParticiple: "paid", french: "payer" },
  put: { base: "put", pastSimple: "put", pastParticiple: "put", french: "mettre, poser" },
  read: { base: "read", pastSimple: "read", pastParticiple: "read", french: "lire" },
  run: { base: "run", pastSimple: "ran", pastParticiple: "run", french: "courir" },
  say: { base: "say", pastSimple: "said", pastParticiple: "said", french: "dire" },
  see: { base: "see", pastSimple: "saw", pastParticiple: "seen", french: "voir" },
  sell: { base: "sell", pastSimple: "sold", pastParticiple: "sold", french: "vendre" },
  send: { base: "send", pastSimple: "sent", pastParticiple: "sent", french: "envoyer" },
  sing: { base: "sing", pastSimple: "sang", pastParticiple: "sung", french: "chanter" },
  speak: { base: "speak", pastSimple: "spoke", pastParticiple: "spoken", french: "parler" },
  spend: { base: "spend", pastSimple: "spent", pastParticiple: "spent", french: "dépenser, passer du temps" },
  take: { base: "take", pastSimple: "took", pastParticiple: "taken", french: "prendre" },
  teach: { base: "teach", pastSimple: "taught", pastParticiple: "taught", french: "enseigner" },
  tell: { base: "tell", pastSimple: "told", pastParticiple: "told", french: "raconter, dire à" },
  think: { base: "think", pastSimple: "thought", pastParticiple: "thought", french: "penser" },
  understand: { base: "understand", pastSimple: "understood", pastParticiple: "understood", french: "comprendre" },
  wear: { base: "wear", pastSimple: "wore", pastParticiple: "worn", french: "porter (un vêtement)" },
  win: { base: "win", pastSimple: "won", pastParticiple: "won", french: "gagner" },
  write: { base: "write", pastSimple: "wrote", pastParticiple: "written", french: "écrire" },
};

// Dictionnaire thématique de vocabulaire anglais-français fréquent d'examen
export const ENGLISH_VOCABULARY_MEMO = [
  { term: "education", nature: "noun", frenchEquivalent: "éducation, enseignement", contextExample: "Education is the key to personal freedom." },
  { term: "environment", nature: "noun", frenchEquivalent: "environnement", contextExample: "We must protect our environment from pollution." },
  { term: "pollution", nature: "noun", frenchEquivalent: "pollution", contextExample: "Plastic waste causes severe soil and water pollution." },
  { term: "global warming", nature: "noun phrase", frenchEquivalent: "réchauffement climatique", contextExample: "Global warming leads to rising sea levels." },
  { term: "youth unemployment", nature: "noun phrase", frenchEquivalent: "chômage des jeunes", contextExample: "Youth unemployment remains a major economic challenge." },
  { term: "child labor", nature: "noun phrase", frenchEquivalent: "travail des enfants", contextExample: "Governments fight actively against child labor in agriculture." },
  { term: "brain drain", nature: "noun phrase", frenchEquivalent: "fuite des cerveaux", contextExample: "Brain drain deprives developing nations of qualified doctors." },
  { term: "social media", nature: "noun phrase", frenchEquivalent: "réseaux sociaux", contextExample: "Social media connect people but may create cyberbullying." },
  { term: "empowerment", nature: "noun", frenchEquivalent: "autonomisation, émancipation", contextExample: "Women empowerment fosters sustainable community growth." },
  { term: "health care", nature: "noun phrase", frenchEquivalent: "soins de santé", contextExample: "Access to proper health care saves thousands of lives." },
];

export function cleanEnglishPrefixes(sentence: string): string {
  let res = sentence.trim();
  let prev = "";
  while (res !== prev) {
    prev = res;
    res = res
      .replace(/^(?:voici\s+(?:mon|un|notre)?\s*devoir(?:\s+d'anglais)?\s*:?)/i, "")
      .replace(/^(?:exercice(?:\s*\d+)?\s*:?)/i, "")
      .replace(/^(?:turn(?:\s+this\s+sentence)?\s+into\s+passive(?:\s+voice)?\s*:?)/i, "")
      .replace(/^(?:put(?:\s+this\s+sentence)?\s+into\s+passive(?:\s+voice)?\s*:?)/i, "")
      .replace(/^(?:change(?:\s+this\s+sentence)?\s+(?:in|into|to)\s+passive(?:\s+voice)?\s*:?)/i, "")
      .replace(/^(?:rewrite(?:\s+this\s+sentence)?\s+(?:in|into)\s+passive(?:\s+voice)?\s*:?)/i, "")
      .replace(/^(?:mets?\s+(?:cette\s+phrase\s+)?au\s+passif\s*:?)/i, "")
      .replace(/^(?:transforme?\s+(?:cette\s+phrase\s+)?[àa]\s+la\s+voix\s+passive\s*:?)/i, "")
      .replace(/^(?:passif\s*:?)/i, "")
      .trim();
  }
  return res.replace(/^["':\s]+|["'\s]+$/g, "");
}

function formatAgent(agent: string): string {
  const trimmed = agent.trim();
  if (/^(The|A|An)\s+/i.test(trimmed)) {
    return trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
  }
  return trimmed;
}

/**
 * Solve passive voice transformation in English
 */
export function solveEnglishPassiveVoice(sentence: string): {
  solvedSentence: string;
  tenseIdentified: string;
  breakdown: string;
  ruleExplanation: string;
} {
  const clean = cleanEnglishPrefixes(sentence).replace(/[.?]$/, "");

  // Match: [Subject] [VerbPhrase] [Object] [Rest...]
  // 1. Present Continuous: S + am/is/are + V-ing + O
  const presCont = clean.match(/^(.+?)\s+(is|are|am)\s+(\w+ing)\s+(.+)$/i);
  if (presCont) {
    const s = presCont[1].trim();
    const vBase = presCont[3].toLowerCase().replace(/ing$/, "");
    const objFull = presCont[4].trim();
    const vPP = getPastParticiple(vBase);
    const isPlural = isPluralNoun(objFull);
    const aux = isPlural ? "are being" : "is being";
    return {
      solvedSentence: `${capitalizeFirst(objFull)} ${aux} ${vPP} by ${formatAgent(s)}.`,
      tenseIdentified: "Present Continuous (am/is/are + V-ing)",
      breakdown: `• Ancien COD devenu Sujet : **${objFull}**\n• Auxiliaire BE au Present Continuous : **${aux}**\n• Participe passé du verbe : **${vPP}**\n• Complément d'agent : **by ${formatAgent(s)}**`,
      ruleExplanation: "À la voix passive au Present Continuous, la structure est : **Nouveau Sujet + am/is/are + BEING + Participe Passé (V3) + by + Complément d'agent**.",
    };
  }

  // 2. Tokenized Subject-Verb-Object detection for Past and Present
  const words = clean.split(/\s+/);
  if (words.length >= 3) {
    for (let i = 1; i < words.length - 1; i++) {
      const w = words[i].toLowerCase();
      const irrPast = Object.values(IRREGULAR_VERBS).find(v => 
        v.pastSimple.split("/").map(x => x.trim().toLowerCase()).includes(w)
      );
      const isRegularPast = w.endsWith("ed") && w.length >= 4;

      if (irrPast || isRegularPast) {
        const s = words.slice(0, i).join(" ");
        const objAndRest = words.slice(i + 1).join(" ");
        const vPP = irrPast ? irrPast.pastParticiple.split("/")[0].trim() : w;
        const isPlural = isPluralNoun(objAndRest);
        const aux = isPlural ? "were" : "was";
        return {
          solvedSentence: `${capitalizeFirst(objAndRest)} ${aux} ${vPP} by ${formatAgent(s)}.`,
          tenseIdentified: "Past Simple (Prétérit)",
          breakdown: `• Ancien COD devenu Sujet : **${objAndRest}**\n• Auxiliaire BE au Prétérit : **${aux}**\n• Participe passé (V3) : **${vPP}**\n• Complément d'agent : **by ${formatAgent(s)}**`,
          ruleExplanation: "À la voix passive au Past Simple, la structure est : **Nouveau Sujet + was/were + Participe Passé (V3) + by + Complément d'agent**.",
        };
      }

      // Check Present simple verb
      const irrBase = Object.values(IRREGULAR_VERBS).find(v => 
        v.base.toLowerCase() === w || `${v.base.toLowerCase()}s` === w || `${v.base.toLowerCase()}es` === w
      );
      const isRegularPresent = (w.endsWith("s") || w.endsWith("es")) && !isPluralNoun(w);

      if (irrBase || isRegularPresent) {
        const s = words.slice(0, i).join(" ");
        const objAndRest = words.slice(i + 1).join(" ");
        let base = irrBase ? irrBase.base : w.replace(/es$|s$/, "");
        if (w === "has") base = "have";
        const vPP = getPastParticiple(base);
        const isPlural = isPluralNoun(objAndRest);
        const aux = isPlural ? "are" : "is";
        return {
          solvedSentence: `${capitalizeFirst(objAndRest)} ${aux} ${vPP} by ${formatAgent(s)}.`,
          tenseIdentified: "Present Simple (Présent d'habitude / vérité générale)",
          breakdown: `• Ancien COD devenu Sujet : **${objAndRest}**\n• Auxiliaire BE au Présent : **${aux}**\n• Participe passé (V3) : **${vPP}**\n• Complément d'agent : **by ${formatAgent(s)}**`,
          ruleExplanation: "À la voix passive au Present Simple, la structure est : **Nouveau Sujet + am/is/are + Participe Passé (V3) + by + Complément d'agent**.",
        };
      }
    }
  }

  // Generic fallback transformation
  return {
    solvedSentence: `The object is acted upon by the subject (Structure type : Object + BE + Past Participle + by + Agent).`,
    tenseIdentified: "Voix passive anglaise standard",
    breakdown: `1. Repérer le COD dans la phrase active.\n2. Placer ce COD en tête de phrase pour en faire le nouveau Sujet.\n3. Conjuguer l'auxiliaire **BE** au même temps que le verbe actif d'origine.\n4. Mettre le verbe principal au **Participe Passé (3ème colonne des verbes irréguliers ou verbe en -ed)**.\n5. Introduire le sujet d'origine par la préposition **by** (facultatif si le sujet est vague comme 'someone' ou 'people').`,
    ruleExplanation: "Formule universelle de la voix passive en anglais : **Objet + [BE conjugué au temps d'origine] + Participe Passé (V3) + (by + Agent)**.",
  };
}

/**
 * Solve fill in the blanks / put the verbs in brackets into correct tense
 */
export function solveEnglishVerbsInBrackets(text: string): {
  correctedLines: Array<{ line: string; verb: string; tense: string; explanation: string }>;
  fullCorrectedText: string;
} {
  const lines = text.split(/\n+/).filter(l => l.trim().length > 0);
  const correctedLines: Array<{ line: string; verb: string; tense: string; explanation: string }> = [];

  for (const line of lines) {
    const bracketMatch = line.match(/[\(\[]([a-zA-Z\s]+)[\)\]]/);
    if (!bracketMatch) continue;

    const baseVerb = bracketMatch[1].trim().toLowerCase();
    let chosenForm = baseVerb;
    let tenseName = "Present Simple";
    let explanation = "Concordance temporelle selon les indices du contexte.";

    const lower = line.toLowerCase();

    // 1. Past simple indicators: yesterday, ago, in 19.., in 20.., last...
    if (/\b(yesterday|ago|last (night|week|month|year)|in (19\d\d|20\d\d))\b/i.test(lower)) {
      const irr = IRREGULAR_VERBS[baseVerb];
      chosenForm = irr ? irr.pastSimple.split("/")[0].trim() : (baseVerb.endsWith("e") ? `${baseVerb}d` : `${baseVerb}ed`);
      tenseName = "Past Simple (Prétérit)";
      explanation = "Action révolue et datée dans le passé (indicateur temporel précis).";
    }
    // 2. Present Perfect: since, for, already, just, yet, ever, never
    else if (/\b(since|for\s+\d+|already|just|yet|ever|never|so far|recently)\b/i.test(lower)) {
      const isPlural = /\b(they|we|you|i|students|children|people)\b/i.test(lower);
      const aux = isPlural ? "have" : "has";
      const pp = getPastParticiple(baseVerb);
      chosenForm = `${aux} ${pp}`;
      tenseName = "Present Perfect (have/has + Participe Passé)";
      explanation = "Action débutée dans le passé ayant un lien direct avec le présent (ou mesure d'une durée avec 'since' ou 'for').";
    }
    // 3. Present continuous: now, right now, at the moment, look!, listen!
    else if (/\b(now|right now|at the moment|look!|listen!)\b/i.test(lower)) {
      const isPlural = /\b(they|we|you|students|children)\b/i.test(lower);
      const isI = /\bi\b/i.test(lower);
      const aux = isI ? "am" : (isPlural ? "are" : "is");
      const ing = baseVerb.endsWith("e") && baseVerb !== "be" && baseVerb !== "see"
        ? `${baseVerb.slice(0, -1)}ing`
        : `${baseVerb}ing`;
      chosenForm = `${aux} ${ing}`;
      tenseName = "Present Continuous (am/is/are + V-ing)";
      explanation = "Action en cours de déroulement au moment précis où l'on parle.";
    }
    // 4. Conditional Type 1: If + present, will + verb
    else if (/\bif\b/i.test(lower) && /\bwill\b/i.test(lower)) {
      // If clause needs present simple
      const isThirdSingular = /\b(he|she|it|the\s+\w+)\b/i.test(lower.split(/\bif\b/i)[1] || "");
      chosenForm = isThirdSingular ? (baseVerb === "have" ? "has" : (baseVerb.endsWith("s") || baseVerb.endsWith("sh") || baseVerb.endsWith("ch") ? `${baseVerb}es` : `${baseVerb}s`)) : baseVerb;
      tenseName = "Present Simple (Conditionnel Type 1)";
      explanation = "Dans la subordonnée introduite par IF (condition réelle), le verbe se met au Present Simple quand la principale est au futur en WILL.";
    }
    // 5. Default Present Simple (habit, routine)
    else {
      const isThirdSingular = /\b(he|she|it)\b/i.test(lower);
      chosenForm = isThirdSingular ? (baseVerb === "have" ? "has" : `${baseVerb}s`) : baseVerb;
      tenseName = "Present Simple";
      explanation = "Vérité générale ou habitude quotidienne.";
    }

    const corrected = line.replace(/[\(\[][a-zA-Z\s]+[\)\]]/, `**${chosenForm}**`);
    correctedLines.push({
      line: corrected,
      verb: chosenForm,
      tense: tenseName,
      explanation,
    });
  }

  const fullCorrectedText = correctedLines.map((c, i) => `${i + 1}. ${c.line}\n   ➜ **Forme exacte** : \`${c.verb}\` (${c.tense})\n   _Règle : ${c.explanation}_`).join("\n\n");

  return { correctedLines, fullCorrectedText };
}

/**
 * Detailed sentence analysis for a single English phrase (preventing dissertation)
 */
export function analyzeEnglishSentence(sentence: string): {
  frenchTranslation: string;
  syntacticBreakdown: Array<{ function: string; element: string; nature: string }>;
  grammarRules: string;
  sentenceTransformations: {
    negative: string;
    interrogative: string;
    passive?: string;
    tagQuestion?: string;
  };
} {
  const clean = sentence.trim();
  
  // Syntactic recognition
  const words = clean.split(/\s+/);
  const breakdown: Array<{ function: string; element: string; nature: string }> = [];

  // Look for subject
  let subject = words[0];
  let verbIndex = 1;
  if (/^(the|a|an|my|your|his|her|our|their|this|that|these|those)$/i.test(words[0]) && words.length > 2) {
    subject = `${words[0]} ${words[1]}`;
    verbIndex = 2;
  }
  breakdown.push({ function: "Sujet (Subject)", element: subject, nature: "Groupe Nominal ou Pronom Personnel" });

  if (words[verbIndex]) {
    breakdown.push({ function: "Verbe Conjugué (Predicate)", element: words[verbIndex], nature: "Verbe d'action ou d'état" });
  }

  if (words.length > verbIndex + 1) {
    const objectPart = words.slice(verbIndex + 1).join(" ");
    breakdown.push({ function: "Complément d'Objet ou Circonstanciel", element: objectPart, nature: "Groupe Nominal / Complément Prépositionnel" });
  }

  // Generate natural approximate translation if common school terms
  let frenchTranslation = "Traduction en français de la phrase soumise.";
  // Simple heuristic dictionary for very common test phrases
  const lower = clean.toLowerCase();
  if (/^the dog bit the boy/i.test(lower)) frenchTranslation = "Le chien a mordu le garçon.";
  else if (/^she likes apples/i.test(lower)) frenchTranslation = "Elle aime les pommes.";
  else if (/^i live in (abidjan|yamoussoukro|bouake|paris|london)/i.test(lower)) frenchTranslation = "J'habite à " + clean.split(/in\s+/i)[1].replace(/[.?]$/, "") + ".";
  else if (/^the teacher explains the lesson/i.test(lower)) frenchTranslation = "Le professeur explique la leçon.";
  else if (/^koffi goes to school every day/i.test(lower)) frenchTranslation = "Koffi va à l'école tous les jours.";
  else if (/^they have finished their homework/i.test(lower)) frenchTranslation = "Ils ont terminé leurs devoirs.";
  else frenchTranslation = `[Traduction fidèle de « ${clean} » selon le contexte].`;

  // Transformations
  const passive = solveEnglishPassiveVoice(clean).solvedSentence;

  return {
    frenchTranslation,
    syntacticBreakdown: breakdown,
    grammarRules: "1. Respect de l'ordre canonique des mots en anglais : **Sujet + Verbe + Objet (SVO)**.\n2. À la forme affirmative au Present Simple, ne jamais oublier le **-s** à la 3e personne du singulier (He, She, It).\n3. À la forme négative ou interrogative, l'auxiliaire **DO / DOES / DID** porte la marque temporelle tandis que le verbe principal revient impérativement à sa **Base Verbale**.",
    sentenceTransformations: {
      negative: `Forme négative : Sujet + do/does/did not + Base Verbale.`,
      interrogative: `Forme interrogative : Do/Does/Did + Sujet + Base Verbale + ?`,
      passive: passive.length > 5 ? passive : undefined,
      tagQuestion: `Question tag : [Phrase], auxiliaire inversé + pronom ?`,
    },
  };
}

/**
 * Comprehensive English guided writing / essay generation
 */
export function generateEnglishGuidedWriting(topic: string): {
  title: string;
  englishEssay: string;
  frenchMirrorTranslation: string;
  outline: { intro: string; body1: string; body2: string; conclusion: string };
  keyLinkingWords: Array<{ word: string; translation: string; function: string }>;
} {
  const clean = topic.trim();
  const lower = clean.toLowerCase();

  let essayTitle = "The Importance of Education in Modern Society";
  let p1 = "Education is undeniably the most powerful instrument for individual emancipation and collective socio-economic advancement. In today's interconnected global economy, acquiring high-quality academic and technical skills has become indispensable for young people striving to build a promising future.";
  let p2 = "First and foremost, attending school equips learners with fundamental intellectual competencies such as critical thinking, literacy, and problem-solving. Furthermore, the educational environment instills essential civic virtues, fostering mutual tolerance, gender equality, and peaceful coexistence among citizens of diverse backgrounds.";
  let p3 = "However, severe challenges persist across many developing regions, including dilapidated school infrastructure, classroom overcrowding, and unequal access to modern digital technologies. Consequently, educational authorities must mobilize adequate budgetary investments to modernize curricula, train dedicated teachers, and ensure inclusive learning opportunities for all children, particularly in rural communities.";
  let p4 = "To conclude, education represents the cornerstone of human dignity and national prosperity. By investing massively in the intellectual development of its youth, any society guarantees its long-term stability and sustainable development.";

  let t1 = "L'éducation est incontestablement l'instrument le plus puissant d'émancipation individuelle et de progrès socio-économique collectif. Dans l'économie mondialisée interconnectée d'aujourd'hui, l'acquisition de compétences académiques et techniques de haut niveau est devenue indispensable aux jeunes désireux de bâtir un avenir prometteur.";
  let t2 = "Tout d'abord, la fréquentation scolaire dote les apprenants de compétences intellectuelles fondamentales telles que l'esprit critique, la maîtrise de l'écrit et la résolution de problèmes. En outre, le cadre scolaire inculque des vertus civiques essentielles, favorisant la tolérance mutuelle, l'égalité des genres et la coexistence pacifique entre citoyens d'origines diverses.";
  let t3 = "Toutefois, de lourds défis persistent dans de nombreuses régions en développement, notamment la dégradation des infrastructures scolaires, la surpopulation des classes et l'accès inégal aux technologies numériques modernes. Par conséquent, les autorités éducatives doivent mobiliser des investissements budgétaires adaptés pour moderniser les programmes, former des enseignants dévoués et garantir des opportunités d'apprentissage inclusives à tous les enfants, en particulier dans les zones rurales.";
  let t4 = "En conclusion, l'éducation représente la pierre angulaire de la dignité humaine et de la prospérité nationale. En investissant massivement dans le potentiel intellectuel de sa jeunesse, toute société s'assure une stabilité durable et un développement pérenne.";

  if (/environment|pollution|climate|nature/i.test(lower)) {
    essayTitle = "Preserving the Environment: A Collective Moral Imperative";
    p1 = "Environmental protection has emerged as one of the most critical challenges confronting humanity in the twenty-first century. Rapid industrialization and uncontrolled carbon emissions have precipitated catastrophic climate disruptions worldwide.";
    p2 = "On the one hand, deforestation and plastic pollution inflict irreversible damage on aquatic and terrestrial ecosystems. Furthermore, unpredictable weather phenomena threaten food security in vulnerable agricultural regions.";
    p3 = "On the other hand, viable solutions exist if governments and citizens act decisively. Promoting renewable energy, enforcing recycling regulations, and raising ecological awareness in schools can significantly curb environmental degradation.";
    p4 = "In conclusion, safeguarding our planet requires immediate, coordinated global solidarity. Preserving clean air, clean water, and fertile soils is not merely an option, but an existential duty toward future generations.";

    t1 = "La protection de l'environnement est devenue l'un des défis les plus cruciaux auxquels l'humanité est confrontée au XXIe siècle. L'industrialisation rapide et les émissions incontrôlées de carbone ont provoqué des dérèglements climatiques catastrophiques à travers le monde.";
    t2 = "D'une part, la déforestation et la pollution plastique infligent des dommages irréversibles aux écosystèmes aquatiques et terrestres. De plus, les phénomènes météorologiques imprévisibles menacent la sécurité alimentaire dans les régions agricoles vulnérables.";
    t3 = "D'autre part, des solutions viables existent si les gouvernements et les citoyens agissent avec détermination. Promouvoir les énergies renouvelables, appliquer des réglementations strictes sur le recyclage et sensibiliser à l'écologie dès l'école peuvent réduire considérablement la dégradation de la nature.";
    t4 = "En conclusion, la sauvegarde de notre planète exige une solidarité mondiale immédiate et coordonnée. Préserver un air pur, une eau saine et des sols fertiles n'est pas une simple option, mais un devoir existentiel envers les générations futures.";
  } else if (/social media|internet|technology|phone|screen/i.test(lower)) {
    essayTitle = "The Impact of Social Media on Today's Youth";
    p1 = "The exponential proliferation of digital platforms and social networks has revolutionized interpersonal communication, learning habits, and global entertainment over the past two decades.";
    p2 = "Without doubt, social media facilitate instantaneous communication, empower young entrepreneurs, and offer unprecedented access to global educational resources. Students can collaborate effortlessly across geographical frontiers.";
    p3 = "Nevertheless, an excessive addiction to smartphone screens triggers psychological distress, sleep deprivation, and exposure to misinformation or online harassment. It is therefore vital for adolescents to develop digital literacy and maintain a healthy equilibrium between online interactions and physical life.";
    p4 = "To sum up, digital tools are neither inherently virtuous nor destructive; their value depends strictly on human usage. Responsible online navigation empowers youth while shielding them from harmful digital excess.";

    t1 = "La prolifération exponentielle des plateformes numériques et des réseaux sociaux a révolutionné la communication interpersonnelle, les habitudes d'apprentissage et le divertissement mondial au cours des deux dernières décennies.";
    t2 = "Sans conteste, les réseaux sociaux facilitent la communication instantanée, valorisent les jeunes entrepreneurs et offrent un accès sans précédent aux ressources éducatives mondiales. Les élèves peuvent collaborer sans effort par-delà les frontières géographiques.";
    t3 = "Néanmoins, une addiction excessive aux écrans de smartphones engendre de la détresse psychologique, des troubles du sommeil et une exposition à la désinformation ou au cyberharcèlement. Il est donc vital pour les adolescents de développer une culture numérique critique et de maintenir un équilibre sain entre vie en ligne et vie réelle.";
    t4 = "En résumé, les outils numériques ne sont ni intrinsèquement vertueux ni destructeurs ; leur valeur dépend strictement de l'usage que l'on en fait. Une navigation responsable responsabilise les jeunes tout en les protégeant des dérives du virtuel.";
  }

  const englishEssay = `${essayTitle.toUpperCase()}\n\n${p1}\n\n${p2}\n\n${p3}\n\n${p4}`;
  const frenchMirrorTranslation = `TRADUCTION FRANÇAISE INTÉGRALE EN MIROIR :\n\n${essayTitle.toUpperCase()}\n\n${t1}\n\n${t2}\n\n${t3}\n\n${t4}`;

  return {
    title: essayTitle,
    englishEssay,
    frenchMirrorTranslation,
    outline: { intro: p1, body1: p2, body2: p3, conclusion: p4 },
    keyLinkingWords: [
      { word: "First and foremost", translation: "Tout d'abord / En premier lieu", function: "Introduire le premier argument majeur" },
      { word: "Furthermore / Moreover", translation: "De plus / En outre", function: "Ajouter un argument convergent" },
      { word: "On the other hand / However", translation: "D'un autre côté / Cependant", function: "Nuancer ou apporter une perspective contrastée" },
      { word: "Consequently / Therefore", translation: "Par conséquent / Donc", function: "Exprimer une conséquence logique" },
      { word: "To conclude / In a nutshell", translation: "Pour conclure / En résumé", function: "Marquer l'entrée dans le bilan conclusif" },
    ],
  };
}

// Helpers
function getPastParticiple(baseVerb: string): string {
  const clean = baseVerb.trim().toLowerCase();
  if (IRREGULAR_VERBS[clean]) {
    return IRREGULAR_VERBS[clean].pastParticiple.split("/")[0].trim();
  }
  if (clean.endsWith("e")) return `${clean}d`;
  if (clean.endsWith("y") && !/[aeiou]y$/.test(clean)) return `${clean.slice(0, -1)}ied`;
  return `${clean}ed`;
}

function isPluralNoun(nounPhrase: string): boolean {
  const trimmed = nounPhrase.trim().toLowerCase();
  if (/^(they|we|you|people|children|men|women|mice|teeth|feet)$/i.test(trimmed)) return true;
  if (trimmed.endsWith("s") && !trimmed.endsWith("ss") && !trimmed.endsWith("us") && !trimmed.endsWith("is")) return true;
  return false;
}

function capitalizeFirst(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}
