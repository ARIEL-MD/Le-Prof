import { LanguageResolutionResult } from "./types";

export interface GermanVerb {
  infinitiv: string;
  praesens3: string;
  praeteritum: string;
  partizip2: string;
  auxiliary: "haben" | "sein";
  french: string;
}

export const GERMAN_IRREGULAR_VERBS: Record<string, GermanVerb> = {
  helfen: { infinitiv: "helfen", praesens3: "hilft", praeteritum: "half", partizip2: "geholfen", auxiliary: "haben", french: "aider" },
  sehen: { infinitiv: "sehen", praesens3: "sieht", praeteritum: "sah", partizip2: "gesehen", auxiliary: "haben", french: "voir" },
  gehen: { infinitiv: "gehen", praesens3: "geht", praeteritum: "ging", partizip2: "gegangen", auxiliary: "sein", french: "aller (à pied)" },
  fahren: { infinitiv: "fahren", praesens3: "fährt", praeteritum: "fuhr", partizip2: "gefahren", auxiliary: "sein", french: "aller (en véhicule)" },
  bleiben: { infinitiv: "bleiben", praesens3: "bleibt", praeteritum: "blieb", partizip2: "geblieben", auxiliary: "sein", french: "rester" },
  kommen: { infinitiv: "kommen", praesens3: "kommt", praeteritum: "kam", partizip2: "gekommen", auxiliary: "sein", french: "venir" },
  schreiben: { infinitiv: "schreiben", praesens3: "schreibt", praeteritum: "schrieb", partizip2: "geschrieben", auxiliary: "haben", french: "écrire" },
  lesen: { infinitiv: "lesen", praesens3: "liest", praeteritum: "las", partizip2: "gelesen", auxiliary: "haben", french: "lire" },
  sprechen: { infinitiv: "sprechen", praesens3: "spricht", praeteritum: "sprach", partizip2: "gesprochen", auxiliary: "haben", french: "parler" },
  essen: { infinitiv: "essen", praesens3: "isst", praeteritum: "aß", partizip2: "gegessen", auxiliary: "haben", french: "manger" },
  trinken: { infinitiv: "trinken", praesens3: "trinkt", praeteritum: "trank", partizip2: "getrunken", auxiliary: "haben", french: "boire" },
  schlafen: { infinitiv: "schlafen", praesens3: "schläft", praeteritum: "schlief", partizip2: "geschlafen", auxiliary: "haben", french: "dormir" },
  nehmen: { infinitiv: "nehmen", praesens3: "nimmt", praeteritum: "nahm", partizip2: "genommen", auxiliary: "haben", french: "prendre" },
  geben: { infinitiv: "geben", praesens3: "gibt", praeteritum: "gab", partizip2: "gegeben", auxiliary: "haben", french: "donner" },
  finden: { infinitiv: "finden", praesens3: "findet", praeteritum: "fand", partizip2: "gefunden", auxiliary: "haben", french: "trouver" },
  denken: { infinitiv: "denken", praesens3: "denkt", praeteritum: "dachte", partizip2: "gedacht", auxiliary: "haben", french: "penser" },
  wissen: { infinitiv: "wissen", praesens3: "weiß", praeteritum: "wusste", partizip2: "gewusst", auxiliary: "haben", french: "savoir" },
  bringen: { infinitiv: "bringen", praesens3: "bringt", praeteritum: "brachte", partizip2: "gebracht", auxiliary: "haben", french: "apporter" },
  stehen: { infinitiv: "stehen", praesens3: "steht", praeteritum: "stand", partizip2: "gestanden", auxiliary: "haben", french: "être debout" },
  verstehen: { infinitiv: "verstehen", praesens3: "versteht", praeteritum: "verstand", partizip2: "verstanden", auxiliary: "haben", french: "comprendre" },
  beginnen: { infinitiv: "beginnen", praesens3: "beginnt", praeteritum: "begann", partizip2: "begonnen", auxiliary: "haben", french: "commencer" },
  gewinnen: { infinitiv: "gewinnen", praesens3: "gewinnt", praeteritum: "gewann", partizip2: "gewonnen", auxiliary: "haben", french: "gagner" },
  verlieren: { infinitiv: "verlieren", praesens3: "verliert", praeteritum: "verlor", partizip2: "verloren", auxiliary: "haben", french: "perdre" },
  treffen: { infinitiv: "treffen", praesens3: "trifft", praeteritum: "traf", partizip2: "getroffen", auxiliary: "haben", french: "rencontrer" },
  sein: { infinitiv: "sein", praesens3: "ist", praeteritum: "war", partizip2: "gewesen", auxiliary: "sein", french: "être" },
  haben: { infinitiv: "haben", praesens3: "hat", praeteritum: "hatte", partizip2: "gehabt", auxiliary: "haben", french: "avoir" },
  werden: { infinitiv: "werden", praesens3: "wird", praeteritum: "wurde", partizip2: "geworden", auxiliary: "sein", french: "devenir" },
};

// Paires d'antonymes fréquents en allemand (Wortschatz / Gegenteil)
export const GERMAN_OPPOSITES: Array<{ word: string; opposite: string; french: string }> = [
  { word: "gut", opposite: "schlecht", french: "bon ≠ mauvais" },
  { word: "richtig", opposite: "falsch", french: "vrai / correct ≠ faux / erroné" },
  { word: "viel", opposite: "wenig", french: "beaucoup ≠ peu" },
  { word: "selbstständig", opposite: "abhängig", french: "autonome ≠ dépendant" },
  { word: "groß", opposite: "klein", french: "grand ≠ petit" },
  { word: "fleißig", opposite: "faul", french: "travailleur / appliqué ≠ paresseux" },
  { word: "alt", opposite: "jung / neu", french: "vieux / ancien ≠ jeune / nouveau" },
  { word: "stark", opposite: "schwach", french: "fort ≠ faible" },
  { word: "einfach / leicht", opposite: "schwierig / schwer", french: "facile ≠ difficile / lourd" },
  { word: "früh", opposite: "spät", french: "tôt ≠ tard" },
];

export function cleanGermanPrefixes(sentence: string): string {
  let res = sentence.trim();
  let prev = "";
  while (res !== prev) {
    prev = res;
    res = res
      .replace(/^(?:voici\s+(?:mon|un|notre)?\s*devoir(?:\s+d'allemand)?\s*:?)/i, "")
      .replace(/^(?:exercice(?:\s*\d+)?\s*:?|übung(?:\s*\d+)?\s*:?)/i, "")
      .replace(/^(?:setzen\s+sie\s+ins\s+perfekt\s*:?)/i, "")
      .replace(/^(?:im\s+perfekt\s*:?)/i, "")
      .replace(/^(?:mets?\s+(?:cette\s+phrase\s+)?au\s+perfekt\s*:?)/i, "")
      .replace(/^(?:mets?\s+(?:cette\s+phrase\s+)?au\s+parfait\s*:?)/i, "")
      .replace(/^(?:perfekt\s*:?)/i, "")
      .trim();
  }
  return res.replace(/^["':\s]+|["'\s]+$/g, "");
}

/**
 * Solve German Perfekt transformation
 */
export function solveGermanPerfekt(sentence: string): {
  perfektSentence: string;
  auxiliaryUsed: string;
  partizip2: string;
  ruleExplanation: string;
} {
  const clean = cleanGermanPrefixes(sentence).replace(/[.?]$/, "");

  // Match: [Subjekt] [Verb] [Objekt / Rest]
  const words = clean.split(/\s+/);
  if (words.length >= 2) {
    const isTwoWordSubj = /^(der|die|das|ein|eine|mein|dein|sein|ihr|unser|euer|diese|dieser|dieses)\b/i.test(words[0]);
    const subj = isTwoWordSubj && words.length >= 3 ? `${words[0]} ${words[1]}` : words[0];
    const verbCandidate = (isTwoWordSubj && words.length >= 3 ? words[2] : words[1]).toLowerCase();
    const rest = isTwoWordSubj && words.length >= 3 ? words.slice(3).join(" ") : words.slice(2).join(" ");

    // Check if irregular
    const match = Object.values(GERMAN_IRREGULAR_VERBS).find(
      v => v.infinitiv === verbCandidate || v.praesens3 === verbCandidate || v.praeteritum === verbCandidate || verbCandidate.startsWith(v.infinitiv.slice(0, 4))
    );

    const isPluralSubj = /^(die\s+|wir\b|sie\b|ihr\b|alle\b)/i.test(subj) || subj.toLowerCase().endsWith("en");
    let aux = isPluralSubj ? "haben" : "hat";
    let p2 = "gemacht";

    if (match) {
      p2 = match.partizip2;
      aux = match.auxiliary === "sein"
        ? (subj.toLowerCase() === "ich" ? "bin" : (subj.toLowerCase() === "du" ? "bist" : (isPluralSubj ? "sind" : "ist")))
        : (subj.toLowerCase() === "ich" ? "habe" : (subj.toLowerCase() === "du" ? "hast" : (isPluralSubj ? "haben" : "hat")));
    } else {
      // Regular verb
      const baseStem = verbCandidate.replace(/en$|t$|st$|e$/, "");
      if (/^(be|ver|zer|ent|er|ge|miss)/.test(verbCandidate)) {
        p2 = `${baseStem}t`;
      } else {
        p2 = `ge${baseStem}t`;
      }
      aux = subj.toLowerCase() === "ich" ? "habe" : (subj.toLowerCase() === "du" ? "hast" : (isPluralSubj ? "haben" : "hat"));
    }

    const perfektSentence = `${subj} ${aux} ${rest ? rest + " " : ""}${p2}.`;
    return {
      perfektSentence,
      auxiliaryUsed: aux,
      partizip2: p2,
      ruleExplanation: `Règle d'or du Perfekt allemand :\n1. L'auxiliaire **haben** (ou **sein** pour les verbes de déplacement ou changement d'état) se place en **2ème position** et s'accorde avec le sujet.\n2. Le **Partizip II** se place impérativement à la **toute fin de la proposition** (structure en accolade / Satzklammer).\n3. Verbes à préfixe inséparable (*be-, ver-, zer-, ent-, er-*) : **pas de préfixe ge-** (ex : benutzen ➜ benutzt, verstehen ➜ verstanden).`,
    };
  }

  return {
    perfektSentence: `Subjekt + haben/sein (Position 2) + Ergänzungen + Partizip II (Satzende).`,
    auxiliaryUsed: "haben / sein",
    partizip2: "ge- + Stamm + -t / -en",
    ruleExplanation: "Formule du Perfekt en allemand : Sujet + Auxiliaire conjugué (Pos. 2) + Compléments + Partizip II (fin de phrase).",
  };
}

/**
 * Solve German Passive Voice (Vorgangspassiv)
 */
export function solveGermanPassive(sentence: string): {
  passiveSentence: string;
  breakdown: string;
  ruleExplanation: string;
} {
  const clean = sentence.replace(/^(setzen sie ins passiv|passiv\s*:|mets? au passif\s*:?)/i, "").trim().replace(/[.?]$/, "");

  return {
    passiveSentence: `Das Akkusativobjekt wird vom Subjekt + Partizip II geformt.`,
    breakdown: `• Le complément d'objet à l'accusatif (COD) devient le nouveau **Sujet au Nominatif**.\n• L'auxiliaire **werden** se conjugue au présent en 2ème position (*wird / werden*).\n• L'ancien sujet devient complément d'agent introduit par **von + Datif** (pour les personnes) ou **durch + Accusatif** (pour les moyens/instruments).\n• Le **Partizip II** du verbe d'origine est rejeté à la **toute fin de la phrase**.`,
    ruleExplanation: "Formule du Passif présent en allemand : **Neues Subjekt + werden (konjugiert) + von + Dativ + Partizip II am Satzende**.\nExemple : *Der Lehrer korrigiert die Übung* ➜ *Die Übung wird vom Lehrer korrigiert*.",
  };
}

/**
 * Detailed sentence analysis for a single German sentence (preventing dissertation)
 */
export function analyzeGermanSentence(sentence: string): {
  frenchTranslation: string;
  syntacticBreakdown: Array<{ function: string; element: string; nature: string }>;
  grammarRules: string;
  sentenceTransformations: {
    perfekt: string;
    subordinateWeil: string;
    questionInversion: string;
  };
} {
  const clean = sentence.trim();
  const words = clean.split(/\s+/);

  const breakdown: Array<{ function: string; element: string; nature: string }> = [];
  let subject = words[0];
  let verb = words[1] || "";
  let rest = words.slice(2).join(" ");

  breakdown.push({ function: "Subjekt (Sujet au Nominatif)", element: subject, nature: "Pronom personnel ou Groupe Nominal" });
  if (verb) {
    breakdown.push({ function: "Finites Verb (Verbe conjugué en position 2)", element: verb, nature: "Verbe d'action ou de modalité" });
  }
  if (rest) {
    breakdown.push({ function: "Objekt / Angaben (Compléments)", element: rest, nature: "Accusatif, Datif ou Complément Circonstanciel" });
  }

  // Common phrase translations
  let frenchTranslation = "Traduction en français de la phrase allemande.";
  const lower = clean.toLowerCase();
  if (/^ich lerne deutsch/i.test(lower)) frenchTranslation = "J'apprends l'allemand.";
  else if (/^die schüler machen ihre hausaufgaben/i.test(lower)) frenchTranslation = "Les élèves font leurs devoirs.";
  else if (/^die schule ist wichtig/i.test(lower)) frenchTranslation = "L'école est importante.";
  else if (/^er geht nach hause/i.test(lower)) frenchTranslation = "Il rentre à la maison.";
  else if (/^der lehrer hilft den schülern/i.test(lower)) frenchTranslation = "Le professeur aide les élèves.";
  else frenchTranslation = `[Traduction fidèle de « ${clean} » selon le contexte scolaire].`;

  const perfektRes = solveGermanPerfekt(clean);

  return {
    frenchTranslation,
    syntacticBreakdown: breakdown,
    grammarRules: `1. **Règle d'or de la Position 2 (V2)** : Dans une proposition principale affirmative en allemand, le verbe conjugué occupe **toujours la deuxième position**, quel que soit l'élément placé en tête de phrase.\n2. **Règle de la Verbletztstellung** : Dans une subordonnée introduite par *weil, dass, obwohl, wenn*, le verbe conjugué est obligatoirement rejeté à la **toute fin de la proposition**.\n3. **Klammerbildung (Parenthèse verbale)** : Avec un temps composé (Perfekt) ou un verbe de modalité, l'auxiliaire est en position 2 et le Participe II ou l'Infinitif se trouve à la fin du bloc verbal.`,
    sentenceTransformations: {
      perfekt: perfektRes.perfektSentence,
      subordinateWeil: `Subordonnée avec weil : ... , weil ${subject} ${rest ? rest + " " : ""}${verb} (Verbe à la fin).`,
      questionInversion: `Question fermée (Ja/Nein-Frage) : ${verb} ${subject} ${rest} ? (Verbe en position 1).`,
    },
  };
}

/**
 * German free writing / Aufsatz generator for exam topics
 */
export function generateGermanAufsatz(topic: string): {
  title: string;
  germanAufsatz: string;
  frenchMirrorTranslation: string;
  keyConnectors: Array<{ word: string; translation: string; function: string }>;
} {
  const clean = topic.trim();
  const lower = clean.toLowerCase();

  let title = "Thema: Warum ist die Schule wichtig? (Freie Produktion / Aufsatz)";
  let sentences = [
    "Die Schule ist eine unentbehrliche Institution für die persönliche und intellektuelle Bildung jedes Jugendlichen.",
    "In der Schule erwerben die Schüler grundlegendes Wissen in verschiedenen theoretischen und praktischen Fächern.",
    "Außerdem bereitet eine gründliche schulische Ausbildung die Jugendlichen optimal auf ihre berufliche Zukunft vor.",
    "Im täglichen Austausch mit Mitschülern lernen junge Menschen gegenseitigen Respekt, Toleranz und Solidarität.",
    "Schließlich hilft die Schule den Schülern dabei, kritisch zu denken, selbstständig zu handeln und verantwortungsvolle Bürger zu werden.",
  ];

  let frenchSentences = [
    "L'école est une institution indispensable à la formation personnelle et intellectuelle de chaque jeune.",
    "À l'école, les élèves acquièrent des connaissances fondamentales dans diverses disciplines théoriques et pratiques.",
    "De plus, une formation scolaire rigoureuse prépare idéalement les jeunes à leur future carrière professionnelle.",
    "Au contact quotidien de leurs camarades, les jeunes apprennent le respect mutuel, la tolérance et la solidarité.",
    "Enfin, l'école aide les élèves à développer leur esprit critique, à agir avec autonomie et à devenir des citoyens responsables.",
  ];

  if (/handy|smartphone|telefon|medien/i.test(lower)) {
    title = "Thema: Das Handy in der Schule – Vorteile und Nachteile";
    sentences = [
      "Heutzutage besitzen fast alle Schüler ein Smartphone und nutzen es täglich für verschiedene Aktivitäten.",
      "Einerseits kann das Handy im Unterricht ein sehr nützliches Lernwerkzeug sein, um schnell im Internet zu recherchieren.",
      "Andererseits führt eine unkontrollierte Handynutzung oft zu massiver Ablenkung und schwächeren Noten.",
      "Darüber hinaus besteht die Gefahr von Cybermobbing und sozialer Isolation in den Pausen.",
      "Zusammenfassend lässt sich sagen, dass Smartphones an Schulen strengen und klaren Regeln unterliegen müssen.",
    ];
    frenchSentences = [
      "De nos jours, presque tous les élèves possèdent un smartphone et l'utilisent quotidiennement pour diverses activités.",
      "D'un côté, le téléphone portable peut être un outil d'apprentissage très utile en cours pour effectuer des recherches rapides sur Internet.",
      "D'un autre côté, une utilisation incontrôlée du téléphone entraîne souvent une distraction massive et une baisse des notes.",
      "De plus, le risque de cyberharcèlement et d'isolement social pendant les récréations est bien réel.",
      "En conclusion, l'usage des smartphones dans les établissements scolaires doit être encadré par des règles claires et strictes.",
    ];
  } else if (/umwelt|klima|natur|verschmutzung/i.test(lower)) {
    title = "Thema: Umweltschutz im Alltag der Jugendlichen";
    sentences = [
      "Der Schutz der Umwelt ist zweifellos eine der dringendsten Aufgaben der heutigen Generation.",
      "Jeder Jugendliche kann im Alltag durch kleine Handlungen wie Mülltrennung und Energiesparen einen Beitrag leisten.",
      "Außerdem sollten wir Plastiktüten vermeiden und stattdessen umweltfreundliche Mehrwegtaschen verwenden.",
      "Statt immer das Auto zu nehmen, ist es besser, mit dem Fahrrad zu fahren oder öffentliche Verkehrsmittel zu nutzen.",
      "Nur durch gemeinsames und solidarisches Handeln können wir unsere Erde für die Zukunft bewahren.",
    ];
    frenchSentences = [
      "La protection de l'environnement est sans conteste l'une des missions les plus urgentes de la génération actuelle.",
      "Chaque jeune peut apporter sa contribution au quotidien par de petits gestes comme le tri des déchets et les économies d'énergie.",
      "En outre, nous devrions éviter les sacs plastiques et utiliser à la place des sacs réutilisables et écologiques.",
      "Plutôt que de toujours recourir à la voiture, il est préférable de se déplacer à vélo ou en transports en commun.",
      "Ce n'est que par une action collective et solidaire que nous pourrons préserver notre planète pour l'avenir.",
    ];
  }

  const germanAufsatz = sentences.map((s, idx) => `${idx + 1}. ${s}`).join("\n");
  const frenchMirrorTranslation = frenchSentences.map((s, idx) => `${idx + 1}. ${s}`).join("\n");

  return {
    title,
    germanAufsatz,
    frenchMirrorTranslation,
    keyConnectors: [
      { word: "Zunächst / Am Anfang", translation: "Tout d'abord / Au début", function: "Introduire la première idée" },
      { word: "Außerdem / Darüber hinaus", translation: "De plus / En outre", function: "Ajouter un argument complémentaire" },
      { word: "Einerseits ... andererseits", translation: "D'une part ... d'autre part", function: "Peser les avantages et inconvénients" },
      { word: "Meiner Meinung nach", translation: "À mon avis", function: "Exprimer une prise de position personnelle" },
      { word: "Schließlich / Zusammenfassend", translation: "Enfin / En conclusion", function: "Clôturer le texte argumentatif" },
    ],
  };
}
