import { histoireGeoTleKnowledgeBase, HgThemeLesson } from "../../src/data/histoireGeoTleKnowledgeBase";
import { histoireGeo1ereKnowledgeBase } from "../../src/data/histoireGeo1ereKnowledgeBase";
import { MethodologyAnalysisResult, StructuredRedaction } from "../../src/types";

export interface HgSolutionResult {
  title: string;
  discipline: "Histoire" | "Géographie";
  lessonId: string;
  lessonTitle: string;
  problemStatement: string;
  keyStatsAndDates: Record<string, string>;
  keyConcepts: Record<string, string>;
  steps: {
    stepName: string;
    description: string;
    content: string;
  }[];
  finalConclusion: string;
  toMethodologyAnalysisResult: () => MethodologyAnalysisResult;
}

/**
 * Moteur local déterministe d'Histoire et Géographie Terminale (BAC Côte d'Ivoire)
 * 100% autonome, zéro appel IA, rigueur chronologique et statistique stricte.
 */
export function solveHistoireGeoTle(
  statement: string,
  options?: { exerciseType?: string; discipline?: string; level?: string }
): {
  success: boolean;
  classification: {
    discipline: "Histoire" | "Géographie";
    lessonId: string;
    lessonTitle: string;
    exerciseType: "Dissertation" | "Commentaire de Document" | "Situation d'Évaluation" | "Chronologie / Dates" | "Notions & Concepts" | "Question de Cours" | "Question Directe / Restitution";
    confidence: number;
  };
  result?: HgSolutionResult;
  methodologyAnalysis?: MethodologyAnalysisResult;
  pedagogicalMetadata?: {
    level: string;
    discipline: string;
    examType: string;
  };
} {
  const clean = statement.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Protection stricte contre les fausses classifications :
  // Si la discipline explicite n'est pas Histoire ou Géographie, ou si le sujet porte manifestement sur
  // la philosophie, les sciences, le français ou les langues vivantes sans mot-clé propre à HG, refuser.
  const optDisc = (options?.discipline || "").toLowerCase();
  const isExplicitNonHg = Boolean(optDisc && !/histoire|g[ée]ographie|geo\b/i.test(optDisc));
  if (isExplicitNonHg) {
    return {
      success: false,
      classification: { discipline: "Histoire", lessonId: "", lessonTitle: "", exerciseType: "Question Directe / Restitution", confidence: 0 }
    };
  }

  const hasPhiloKeywords = /\b(mythe|mythes|raison|logos|muthos|philosophie|philosophe|conscience|inconscient|libert[ée]|libre\s+arbitre|responsabilit[ée]|bonheur|devoir|morale?|justice|v[ée]rit[ée]|autrui|d[ée]sir|m[ée]taphysique|cogito)\b/i.test(clean);
  const hasHgKeywords = /histoire|g[ée]ographie|guerre froide|bipolarisation|d[ée]colonisation|houphou[ëe]t|algerie|fln|blocus.*berlin|crise.*cuba|plan marshall|kominform|otan|pacte de varsovie|onu|soci[ée]t[ée] des nations|sdn|samory|samori|colonisation|relief.*ivoirien|climat.*ivoirien|fondements.*ivoirienne|capitalisme|r[ée]volution industrielle/i.test(clean);

  if (hasPhiloKeywords && !hasHgKeywords) {
    return {
      success: false,
      classification: { discipline: "Histoire", lessonId: "", lessonTitle: "", exerciseType: "Question Directe / Restitution", confidence: 0 }
    };
  }

  // 1. Détection du type d'exercice
  let exerciseType: "Dissertation" | "Commentaire de Document" | "Situation d'Évaluation" | "Chronologie / Dates" | "Notions & Concepts" | "Question de Cours" | "Question Directe / Restitution" = "Question Directe / Restitution";

  const isExplicitDissertation = /sujet de dissertation|redige une dissertation|plan de dissertation|dans quelle mesure|partages-tu l['’]avis|commentez et discutez/i.test(clean);
  const isDirectQuestionOrCitation =
    Boolean(options?.exerciseType && /restitution|question directe|question de cours/i.test(options.exerciseType)) ||
    /\b(cite|citez|liste|listez|enumere|donne|donnez|nomme|nommez|mentionne|mentionnez|quels sont|quelles sont|quel est|quelle est|caracterise|caracteristiques?|relief\w*|climat\w*|fleuve\w*|vegetation|organes?|atouts?|facteurs?|causes?|consequences?|etapes?)\b/i.test(clean);

  if (/situation d['’]evaluation|consigne.*1|consigne.*2|consigne.*3|dis de quoi il s['’]agit/i.test(clean)) {
    exerciseType = "Situation d'Évaluation";
  } else if (/commentaire.*(?:document|texte|historique)|analyse.*texte|noddaci|portee historique|idee generale du document|presentation du document|devoir.*document|document\s*«|document[\s\S]*questions?/i.test(clean)) {
    exerciseType = "Commentaire de Document";
  } else if (/date|chronolog|annee|reperes chronologiques|chiffres cles|quand.*cree|quand.*signe/i.test(clean) && !isExplicitDissertation) {
    exerciseType = "Chronologie / Dates";
  } else if (/c['’]est quoi|definition|definir|que signifie|explique la notion|notion de/i.test(clean) && !isExplicitDissertation) {
    exerciseType = "Notions & Concepts";
  } else if (isExplicitDissertation) {
    exerciseType = "Dissertation";
  } else if (isDirectQuestionOrCitation || clean.length < 110) {
    exerciseType = "Question Directe / Restitution";
  } else if (/pourquoi|comment expliquer|quel est le bilan/i.test(clean) && clean.length < 160) {
    exerciseType = "Question de Cours";
  } else {
    exerciseType = "Dissertation";
  }

  // 2. Détection de la leçon correspondante
  let matchedLesson: HgThemeLesson | undefined;
  let discipline: "Histoire" | "Géographie" = "Histoire";
  let confidence = 0.95;

  // --- HISTOIRE TERMINALE (Priorité pour Terminale) ---
  if (/d[ée]colonisation|tiers-monde|peuples colonis[ée]s|nationalisme.*afrique|montee des nationalismes|bandung|negritude|harrisme|kimbanguisme|feanf|travaux forces/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.histoireLessons.find(l => l.id === "montee-des-nationalismes-en-afrique");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/independance.*cote d'ivoire|decolonisation.*cote d'ivoire|houphouet|pechoux|latrille|saa|pdci|dimbokro|marche des femmes|loi-cadre|desapparentement|7 aout 1960/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.histoireLessons.find(l => l.id === "accession-cote-ivoire-independance");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/algerie|fln|aln|toussaint rouge|accords d'evian|ben bella|messali hadj|ferhat abbas|ben badis|oulema|oas|pieds-noirs|setif/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.histoireLessons.find(l => l.id === "accession-algerie-independance");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/union africaine|oua|syrte|durban|kame|faki|addis-abeba|conseil de paix et de securite|cps/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.histoireLessons.find(l => l.id === "union-africaine-creation-bilan");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/guerre froide|bipolarisation|truman|jdanov|blocus.*berlin|mur de berlin|missiles.*cuba|vietnam|coexistence pacifique|detente|gorbatchev|rideau de fer|perestroika|glasnost/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.histoireLessons.find(l => l.id === "bipolarisation-guerre-froide-1947-1991");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/onu|nations unies|casques bleus|conseil de securite|droit de veto|san francisco|boutros|guterres/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.histoireLessons.find(l => l.id === "onu-creation-fonctionnement-bilan");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/multipolaire|unipolaire|hyperpuissance|11 septembre|ben laden|al-qaida|bush|gendarme du monde|brics|irak 2003|afghanistan 2001/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.histoireLessons.find(l => l.id === "monde-multipolaire-apres-guerre-froide");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/occidental|occident|democratie liberale|clisthene|athenes|droit romain|john locke|capitalisme liberal/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.histoireLessons.find(l => l.id === "croyances-valeurs-monde-occidental");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/civilisation negro-africaine|societe precoloniale|chefferie|arbre a palabre|poro|animisme|societe negro-africaine|gerontocratie/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.histoireLessons.find(l => l.id === "mutations-civilisation-negro-africaine");
    discipline = "Histoire";
    confidence = 0.99;
  }
  // --- HISTOIRE 1ÈRE ---
  else if (/essor.*capitalisme|capitalisme.*consequences|actionnaire|dividende|obligation.*bourse|bourse des valeurs|loi.*waldeck|proletariat.*bourgeoisie/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.histoireLessons.find(l => l.id === "hg-1ere-h1-essor-capitalisme");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/revolution.*industrielle|taylorisme|standardisation|james watt|machine a vapeur|bessemer|dynamite|moteur a explosion|daimler|cartel.*trust/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.histoireLessons.find(l => l.id === "hg-1ere-h2-revolutions-industrielles");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/congres de berlin|conference de berlin|acte.*berlin|occupation effective|scramble for africa|stanley.*savorgnan|leopold ii.*congo|bismarck.*berlin/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.histoireLessons.find(l => l.id === "hg-1ere-h3-imperialisme-berlin");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/resistance.*samory|samory toure|guelemou|zokou gbeuli|kassi dihye|indirect rule|direct rule|frederick lugard|lobi.*resistance|gouro.*resistance/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.histoireLessons.find(l => l.id === "hg-1ere-h4-resistances-afrique-ci");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/colonisation.*cote d'ivoire|penetration pacifique|binger.*clozel|angoulvant|maniere forte|revolte des abbey|rubino|elima.*verdier|bretigniere|impot de capitation/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.histoireLessons.find(l => l.id === "hg-1ere-h5-colonisation-cote-ivoire");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/premiere guerre mondiale|1914-1918|attentat.*sarajevo|gavrilo princip|francois-ferdinand|triplice|triple entente|diktat.*versailles|traite de versailles|sdn/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.histoireLessons.find(l => l.id === "hg-1ere-h6-premiere-guerre-mondiale");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/deuxieme guerre mondiale|seconde guerre mondiale|1939-1945|anschluss|munich 1938|sudetes|lebensraum|axe rome-berlin|pacte germano-sovietique|1er septembre 1939/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.histoireLessons.find(l => l.id === "hg-1ere-h7-deuxieme-guerre-mondiale");
    discipline = "Histoire";
    confidence = 0.99;
  } else if (/genocide|shoah|samudaripen|genocide armenien|genocide.*tutsis|rwanda 1994|interahamwe|khmers rouges|holodomor|halabja|darfour|violences de masse/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.histoireLessons.find(l => l.id === "hg-1ere-h8-violences-masse-genocides");
    discipline = "Histoire";
    confidence = 0.99;
  }
  // --- GÉOGRAPHIE 1ÈRE ---
  else if (/entonnoir renverse|dynamisme demographique.*cote d'ivoire|demographie.*ivoirienne|rgph 2014|qualite de la vie.*cote d'ivoire|secteur primaire.*57/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.geographieLessons.find(l => l.id === "hg-1ere-g1-dynamisme-demographique-ci");
    discipline = "Géographie";
    confidence = 0.99;
  } else if (/croissance demographique mondiale|malthus|malthusianisme|natalisme|pyramide.*parasol|pyramide.*ogive|conference.*bucarest|conference.*mexico|pekin 2004/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.geographieLessons.find(l => l.id === "hg-1ere-g2-croissance-demographique-mondiale");
    discipline = "Géographie";
    confidence = 0.99;
  } else if (/urbanisation.*cote d'ivoire|ville millionnaire|macrocephalie.*abidjan|generations de villes|bidonville.*abidjan|habitat precaire.*abidjan/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.geographieLessons.find(l => l.id === "hg-1ere-g3-urbanisation-pvd-cote-ivoire");
    discipline = "Géographie";
    confidence = 0.99;
  } else if (/urbanisation.*pays developpes|urbanisation.*france|megalopole europeenne|conurbation|migrations pendulaires|villes nouvelles|cbd.*defense/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.geographieLessons.find(l => l.id === "hg-1ere-g4-urbanisation-pays-developpes-france");
    discipline = "Géographie";
    confidence = 0.99;
  } else if (/organisation administrative.*cote d'ivoire|loi n.*2014-451|deconcentration.*decentralisation|prefet.*sous-prefet|31 regions|108 departements|187 communes|district autonome/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.geographieLessons.find(l => l.id === "hg-1ere-g5-organisation-administrative-ci");
    discipline = "Géographie";
    confidence = 0.99;
  } else if (/amenagement du territoire.*cote d'ivoire|avb|arso|barrage.*kossou|port de san pedro.*1972|sodesucre|sodepalm|cidt|yamoussoukro.*capitale.*1983|fetes tournantes|frar/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.geographieLessons.find(l => l.id === "hg-1ere-g6-amenagement-territoire-ci");
    discipline = "Géographie";
    confidence = 0.99;
  } else if (/facteurs.*mondialisation|acteurs.*mondialisation|village planetaire|firmes transnationales|fmn.*filiales|bretton woods|omc.*gatt|dereglementation/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.geographieLessons.find(l => l.id === "hg-1ere-g7-facteurs-acteurs-mondialisation");
    discipline = "Géographie";
    confidence = 0.99;
  } else if (/consequences.*mondialisation|triade.*mondialisation|division internationale du travail|dit.*mondialisation|delocalisation|marginalisation.*afrique|homogeneisation culturelle/i.test(clean)) {
    matchedLesson = histoireGeo1ereKnowledgeBase.geographieLessons.find(l => l.id === "hg-1ere-g8-consequences-mondialisation");
    discipline = "Géographie";
    confidence = 0.99;
  }
  // --- GÉOGRAPHIE TERMINALE ---
  else if (/coree du sud|chaebol|fleuve han|taebaek|kaist|seoul|park chung|trois blancs/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.geographieLessons.find(l => l.id === "fondements-developpement-coree-du-sud");
    discipline = "Géographie";
    confidence = 0.99;
  } else if (/cedeao|traite de lagos|ecomog|monnaie eco|bidc|libre circulation.*ouest/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.geographieLessons.find(l => l.id === "cedeao-organisation-regionale-economique");
    discipline = "Géographie";
    confidence = 0.99;
  } else if (/ue.*acp|acp|stabex|sysmin|yaounde|lome|cotonou|ape|cooperation nord-sud|fed|bei/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.geographieLessons.find(l => l.id === "relations-ue-acp-cooperation-nord-sud");
    discipline = "Géographie";
    confidence = 0.99;
  } else if (/probleme.*developpement.*cote d'ivoire|dette.*cote d'ivoire|deforestation.*cote d'ivoire|secteur informel|aderiz|fardeau demographique/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.geographieLessons.find(l => l.id === "problemes-developpement-cote-ivoire");
    discipline = "Géographie";
    confidence = 0.99;
  } else if (/secteur.*activite.*cote d'ivoire|cacao.*cote d'ivoire|industrie.*ivoirienne|anacarde|port d'abidjan|tourisme.*cote d'ivoire|peche.*cote d'ivoire/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.geographieLessons.find(l => l.id === "secteurs-activites-economiques-cote-ivoire");
    discipline = "Géographie";
    confidence = 0.99;
  } else if (/relief\w*.*c[oô]te d'ivoire|c[oô]te d'ivoire.*relief\w*|relief\w* ivoirien|fondement.*economie.*c[oô]te d'ivoire|climat\w*.*c[oô]te d'ivoire|c[oô]te d'ivoire.*climat\w*|population.*c[oô]te d'ivoire|atout.*c[oô]te d'ivoire|fleuve\w*.*c[oô]te d'ivoire|hydrographie.*c[oô]te d'ivoire|vegetation.*c[oô]te d'ivoire/i.test(clean)) {
    matchedLesson = histoireGeoTleKnowledgeBase.geographieLessons.find(l => l.id === "fondements-developpement-cote-ivoire");
    discipline = "Géographie";
    confidence = 0.99;
  } else {
    // Si aucun motif HG ne correspond et qu'on n'est pas explicitement dans une épreuve d'Histoire ou Géographie certifiée,
    // REFUSER immédiatement pour ne pas détourner les autres matières vers l'ONU par défaut.
    const isStrictHgContext = /histoire|g[ée]ographie|geo\b/i.test(options?.discipline || "");
    if (!isStrictHgContext || !hasHgKeywords) {
      return {
        success: false,
        classification: {
          discipline: "Histoire",
          lessonId: "",
          lessonTitle: "",
          exerciseType,
          confidence: 0,
        },
      };
    }
    // Si c'est explicitement Histoire avec mots-clés d'Histoire mais sans leçon spécifique
    matchedLesson = histoireGeoTleKnowledgeBase.histoireLessons[0];
    discipline = "Histoire";
    confidence = 0.5;
  }

  // 3. Construction des étapes de résolution selon le type d'exercice
  const steps: { stepName: string; description: string; content: string }[] = [];
  let introFullText = "";
  let part1Full = "";
  let transition1 = "";
  let part2Full = "";
  let conclusionFullText = "";
  let fullDirectResponse = "";
  let customGuidanceSteps: string[] | null = null;
  let customDetailedOutline: string | null = null;
  let customStructuredRedaction: StructuredRedaction | null = null;

  // A. Cas DISSERTATION
  if (exerciseType === "Dissertation") {
    const amorce = `L'étude de « ${matchedLesson.lessonTitle} » permet de comprendre les dynamiques historiques et contemporaines liées au thème.`;
    const definitionTension = `Ce sujet invite à examiner de manière méthodique comment les évolutions historiques ou géographiques ont transformé les sociétés et les équilibres territoriaux.`;
    const problematique = matchedLesson.examDissertationPlan.problemStatement;
    const annoncePlan = `Pour répondre à cette question, nous analyserons dans un premier temps ${matchedLesson.examDissertationPlan.axes[0].axeTitle.replace(/^[I|V|X]+\.\s*/, "").toLowerCase()}, puis nous étudierons dans un second temps ${matchedLesson.examDissertationPlan.axes[1].axeTitle.replace(/^[I|V|X]+\.\s*/, "").toLowerCase()}.`;

    introFullText = `${amorce} ${definitionTension} ${problematique} ${annoncePlan}`;

    const part1Title = matchedLesson.examDissertationPlan.axes[0].axeTitle;
    const part1SubParts = matchedLesson.examDissertationPlan.axes[0].arguments.map((arg, idx) => {
      const letters = ["A", "B", "C"];
      const dateEntry = Object.entries(matchedLesson.keyDatesOrStats)[idx];
      const illustrationText = dateEntry ? `À titre d'illustration, ${dateEntry[0]} correspond à ${dateEntry[1]}.` : `Cette réalité est confirmée par les données du programme officiel.`;
      return {
        subPartLetter: letters[idx] || `${idx + 1}`,
        title: `Sous-partie ${letters[idx] || idx + 1}`,
        argument: arg,
        explication: `${arg} Ce phénomène structure l'ensemble de la période et oriente les choix stratégiques des acteurs concernés.`,
        illustration: {
          auteur: "Programme Officiel HG Terminale",
          oeuvre: matchedLesson.lessonTitle,
          citation: dateEntry ? `${dateEntry[0]} : ${dateEntry[1]}` : "Données académiques officielles",
          analyseIllustration: illustrationText
        },
        fullText: `${arg} ${illustrationText} Cela met en évidence la solidité des faits et l'impact direct de ce phénomène sur le cours de l'histoire et du développement.`
      };
    });
    part1Full = `${part1Title}\n\n` + part1SubParts.map(sp => `• ${sp.argument}\n  ${sp.fullText}`).join("\n\n");

    transition1 = `En somme, l'examen de ces premiers éléments démontre l'importance des acquis et des facteurs structurants. Toutefois, une analyse rigoureuse nécessite d'examiner également les limites, les blocages ou les défis qui y sont associés.`;

    const part2Title = matchedLesson.examDissertationPlan.axes[1].axeTitle;
    const part2SubParts = matchedLesson.examDissertationPlan.axes[1].arguments.map((arg, idx) => {
      const letters = ["A", "B", "C"];
      const conceptEntry = Object.entries(matchedLesson.keyConcepts)[idx];
      const conceptText = conceptEntry ? `En effet, la notion de « ${conceptEntry[0]} » (${conceptEntry[1]}) permet d'éclairer cette réalité.` : `Ces difficultés s'expliquent par des contraintes matérielles et politiques précises.`;
      return {
        subPartLetter: letters[idx] || `${idx + 1}`,
        title: `Sous-partie ${letters[idx] || idx + 1}`,
        argument: arg,
        explication: `${arg} Les facteurs structurels et les limites observées révèlent la complexité de la situation.`,
        illustration: {
          auteur: "Référentiel MENA / DPFC",
          oeuvre: matchedLesson.lessonTitle,
          citation: conceptEntry ? `${conceptEntry[0]} : ${conceptEntry[1]}` : "Repères et notions officielles",
          analyseIllustration: conceptText
        },
        fullText: `${arg} ${conceptText} Ces éléments révèlent la complexité des défis à surmonter pour garantir un équilibre durable.`
      };
    });
    part2Full = `${part2Title}\n\n` + part2SubParts.map(sp => `• ${sp.argument}\n  ${sp.fullText}`).join("\n\n");

    const bilanSynthese = `Au terme de notre analyse, il ressort clairement que « ${matchedLesson.lessonTitle} » a engendré des transformations profondes et des avancées indéniables.`;
    const reponseDefinitive = `Néanmoins, les insuffisances structurelles et les défis contemporains rappellent que la consolidation de ces acquis exige des réformes continues et une volonté politique affermie.`;
    const elargissement = `Dès lors, on peut se demander comment les acteurs concernés sauront adapter leurs stratégies face aux mutations rapides du XXIe siècle.`;

    conclusionFullText = `${bilanSynthese} ${reponseDefinitive} ${elargissement}`;

    steps.push(
      {
        stepName: "1. Analyse du sujet et cadre méthodologique",
        description: "Définition des termes, délimitation spatio-temporelle et formulation de la problématique.",
        content: `• Leçon : ${matchedLesson.lessonTitle} (${matchedLesson.themeTitle})\n• Problématique retenue : ${problematique}\n• Plan retenu : 1. ${part1Title} / 2. ${part2Title}`
      },
      {
        stepName: "2. Rédaction de l'Introduction (en un seul bloc)",
        description: "Amorce, définition/tension, problématique et annonce du plan.",
        content: introFullText
      },
      {
        stepName: "3. Axe 1 du Développement — Analyse détaillée et illustrations",
        description: "Exposé des arguments de la première partie appuyés par des dates et faits précis.",
        content: part1Full
      },
      {
        stepName: "4. Transition et Axe 2 du Développement — Nuances et perspectives",
        description: "Liaison logique et approfondissement critique de la seconde partie.",
        content: `Transition : ${transition1}\n\n${part2Full}`
      },
      {
        stepName: "5. Rédaction de la Conclusion (Bilan, Réponse et Ouverture)",
        description: "Synthèse des axes, réponse nette à la problématique et élargissement.",
        content: conclusionFullText
      }
    );
  }

  // B1. Cas COMMENTAIRE DE DOCUMENT (Méthodologie Officielle Bac : I. Présentation, II. Compréhension/Analyse, III. Commentaire organisé)
  else if (exerciseType === "Commentaire de Document") {
    const isDecolonisation = /d[ée]colonisation|tiers-monde|peuples colonis[ée]s|asie.*ind[ée]pendance|afrique.*ind[ée]pendance|non-align[ée]s|inde.*1947|ann[ée]e 1960/i.test(clean);
    const isColdWar = !isDecolonisation && /blocus.*berlin|mur de berlin|missiles.*cuba|plan marshall|jdanov|truman|crise de berlin|crise de cuba|bipolarisation.*1947-1991/i.test(clean);

    if (isDecolonisation) {
      const part1Pres = `### I. PREMIÈRE PARTIE : PRÉSENTATION DU DOCUMENT (4 points)

1. **Présentation méthodique du document** :
• **Nature** : Extrait d'un texte d'analyse historique contemporain (synthèse historiographique et didactique sur les relations internationales et les mouvements d'émancipation).
• **Thème** : Le processus historique de la décolonisation en Asie et en Afrique et l'émergence géopolitique du tiers-monde au lendemain de la Seconde Guerre mondiale.
• **Contexte historique** : L'immédiat après-guerre (période ouverte en 1945), caractérisé par l'affaiblissement économique, militaire et moral des métropoles européennes (France, Royaume-Uni), la proclamation de la Charte de l'ONU affirmant le droit des peuples à disposer d'eux-mêmes, et l'essor des mouvements nationalistes anticolonialistes à travers le monde.

2. **Signification du terme « décolonisation »** :
La **décolonisation** désigne le processus historique, politique, diplomatique ou armé par lequel un territoire et un peuple soumis à une tutelle ou domination coloniale impérialiste s'émancipent et accèdent à la pleine souveraineté nationale et internationale (l'indépendance).`;

      const part2Comp = `### II. DEUXIÈME PARTIE : COMPRÉHENSION ET ANALYSE DU TEXTE (6 points)

1. **Deux facteurs qui favorisent la décolonisation relevés dans le texte** :
D'après le document, deux facteurs majeurs favorisent ce processus :
• L'affaiblissement des puissances européennes au lendemain de la Seconde Guerre mondiale (« *L’affaiblissement des puissances européennes* »).
• Les principes de liberté solennellement proclamés par la Charte des Nations unies (« *les principes de liberté proclamés par la Charte des Nations unies* »), combinés à l'essor des mouvements nationalistes.

2. **Exemple de pays asiatique devenu indépendant après la Seconde Guerre mondiale** :
L'**Inde** (« *L’Inde devient indépendante en 1947* »), arrachant son indépendance à l'Empire britannique sous l'égide du Parti du Congrès conduit par le Mahatma Gandhi et Jawaharlal Nehru.

3. **Pourquoi l’année 1960 est considérée comme une année importante dans l’histoire de l’Afrique** :
L'année 1960 est universellement consacrée comme **« l'Année de l'Afrique »** parce qu'elle a vu pas moins de dix-sept (17) pays africains accéder simultanément à la souveraineté internationale, brisant l'armature coloniale du continent (notamment 14 anciennes colonies françaises dont la Côte d'Ivoire proclamée indépendante le 7 août 1960 par Félix Houphouët-Boigny, le Sénégal, le Mali, le Niger, le Tchad, le Gabon, ainsi que le Nigéria et la République Démocratique du Congo).

4. **Difficultés auxquelles sont confrontés les nouveaux États indépendants relevées dans le document** :
Le texte met en exergue trois défis structurels critiques :
• Le sous-développement économique (« *sous-développement économique* ») lié à des économies de traite extraverties et dépendantes de l'exportation de matières premières brutes.
• L'instabilité politique (« *instabilité politique* »), marquée par la fragilité des institutions républicaines naissantes, les tensions ethniques et les coups d'État militaires.
• L'analphabétisme (« *analphabétisme* ») et la pénurie aiguë de cadres administratifs, techniques et médicaux qualifiés.

5. **Explication de l'expression « pays non-alignés »** :
L'expression **« pays non-alignés »** renvoie aux nations du tiers-monde qui, réunies lors de la conférence historique de Bandung en avril 1955 puis constituées en mouvement officiel à Belgrade en septembre 1961 (sous l'impulsion de Nehru, Nasser, Tito et Soekarno), ont proclamé solennellement leur refus de s'inféoder ou de conclure une alliance militaire avec l'un des deux blocs hégémoniques rivaux de la Guerre froide (le bloc capitaliste américain ou le bloc communiste soviétique). Ce non-alignement visait à sauvegarder leur souveraineté chèrement acquise, à promouvoir la coexistence pacifique, à lutter contre le néocolonialisme et à revendiquer un ordre économique mondial plus équitable.`;

      const part3Comm = `### III. TROISIÈME PARTIE : COMMENTAIRE HISTORIQUE ORGANISÉ (10 points)

#### INTRODUCTION DU COMMENTAIRE
Au lendemain du second conflit mondial, le système colonial séculaire qui asservissait l'Asie et l'Afrique s'effondre sous l'effet conjugué des crises métropolitaines et de l'essor irrésistible des mouvements d'émancipation nationale. En quelques décennies, des millions d'hommes et de femmes brisent le joug étranger et font irruption sur la scène internationale en constituant le « tiers-monde ». Dès lors, comment la dynamique de la décolonisation s'est-elle déployée après 1945 et à quelles réalités structurelles les jeunes nations indépendantes ont-elles été confrontées ? Pour répondre à cette problématique, nous examinerons en premier lieu les causes fondamentales de la décolonisation après 1945 ; nous retracerons en deuxième lieu les principales étapes de l'accession de l'Afrique à la souveraineté ; enfin, nous analyserons les difficultés majeures rencontrées par les nouveaux États africains dans la consolidation de leur indépendance.

---

#### DÉVELOPPEMENT ORGANISÉ

##### 1. Les causes majeures de la décolonisation après 1945
La décolonisation résulte de facteurs internes aux colonies et d'une conjoncture internationale profondément modifiée par la Seconde Guerre mondiale :
• **L'impact du second conflit mondial** : La défaite rapide des métropoles (notamment la France en 1940) brise le mythe de l'invincibilité de l'homme blanc. Des centaines de milliers de tirailleurs et soldats africains et asiatiques ont combattu pour la liberté du monde ; de retour au pays, ils refusent le maintien du statut de sujets coloniaux de seconde zone et nourrissent les rangs nationalistes.
• **Le rôle des élites et des mouvements nationalistes** : Formées dans les universités occidentales ou au sein d'organisations syndicales (comme le Syndicat Agricole Africain - SAA fondé en Côte d'Ivoire en 1944 par Félix Houphouët-Boigny), les élites intellectuelles et politiques réclament la fin des abus coloniaux (travaux forcés abolis par la loi Houphouët-Boigny d'avril 1946, indigénat) puis l'émancipation totale.
• **Le contexte international anticolonialiste** : La Charte de l'Atlantique (1941) et la Charte des Nations unies de San Francisco (1945) proclament solennellement « l'égalité des droits des peuples et leur droit à disposer d'eux-mêmes ». Parallèlement, les deux superpuissances maîtresses du monde, les États-Unis (ancienne colonie émancipée) et l'Union Soviétique (au nom de l'idéologie marxiste anti-impérialiste), encouragent activement l'affranchissement des colonies. Enfin, la conférence de Bandung (1955) sonne le réveil politique du tiers-monde.

##### 2. Les principales étapes de la décolonisation en Afrique
La décolonisation du continent africain s'est opérée selon deux voies contrastées, pacifique ou violente, et par vagues chronologiques distinctes :
• **La décolonisation en Afrique du Nord** : Dès les années 1950, le Maghreb s'enflamme. Alors que la Tunisie de Habib Bourguiba et le Maroc du sultan Mohammed V obtiennent leur indépendance par la négociation en mars 1956, l'Algérie, considérée comme territoire français de peuplement, plonge dans une guerre de libération impitoyable de huit ans (1954-1962). Menée par le Front de Libération Nationale (FLN), cette lutte acharnée aboutit aux accords d'Évian et à l'indépendance en juillet 1962.
• **La décolonisation en Afrique subsaharienne** :
  - Dans l'empire britannique, le Ghana ouvre la marche de façon pacifique en 1957 sous le leadership de Kwame Nkrumah, suivi par le Nigéria en 1960.
  - Dans l'espace francophone, la dynamique s'accélère après la conférence de Brazzaville (1944). Après la loi-cadre Defferre de 1956 instituant l'autonomie et le référendum de 1958 instaurant la Communauté française (où la Guinée d'Ahmed Sékou Touré vote « Non » et prend immédiatement son indépendance), l'année 1960 consacre l'accession pacifique à l'indépendance de quatorze États d'Afrique noire, dont la Côte d'Ivoire le 7 août 1960.
  - Les colonies portugaises (Angola, Mozambique, Guinée-Bissau), quant à elles, n'obtiendront leur indépendance qu'après de longues guerres de guérilla en 1974-1975 consécutives à la Révolution des Œillets à Lisbonne.

##### 3. Les défis et difficultés des nouveaux États après l'indépendance
L'euphorie de la souveraineté retrouvée laisse rapidement place à de redoutables épreuves de construction nationale :
• **Des économies vulnérables et extraverties** : Les jeunes États héritent d'une économie coloniale de traite dépendante de l'exportation de matières premières agricoles (café, cacao) ou minières. Privés de tissu industriel et victimes de la détérioration des termes de l'échange, ils tombent sous la coupe de dettes massives et du néocolonialisme économique.
• **L'instabilité politique et les rivalités ethniques** : Les frontières coloniales arbitraires, tracées à la règle lors de la conférence de Berlin (1884-1885), ont morcelé des groupes humains cohérents ou réuni des ethnies rivales. Cela déclenche des crises sécessionnistes dramatiques (guerre du Biafra au Nigéria de 1967 à 1970, crise congolaise dès 1960) et favorise une cascade de coups d'État militaires et l'instauration de régimes à parti unique.
• **Les retards sociaux considérables** : Le sous-équipement en infrastructures scolaires, universitaires et hospitalières freine le développement humain face à une explosion démographique galopante.

---

#### CONCLUSION DU COMMENTAIRE
En définitive, la décolonisation consacre l'un des bouleversements géopolitiques les plus considérables du XXe siècle en restituant aux peuples colonisés leur dignité et leur souveraineté historique. Cependant, la conquête de l'indépendance politique n'a pas suffi à garantir l'indépendance économique : confrontés au sous-développement et à l'instabilité, les nouveaux États ont cherché refuge dans le non-alignement et l'intégration continentale avec la fondation de l'OUA le 25 mai 1963 à Addis-Abeba. Aujourd'hui, l'Union Africaine et les regroupements régionaux comme la CEDEAO demeurent le terrain privilégié pour transformer ce combat historique en une émancipation économique et démocratique pérenne.`;

      introFullText = part1Pres;
      part1Full = part2Comp;
      part2Full = part3Comm;
      conclusionFullText = `En définitive, la décolonisation consacre l'émancipation des peuples dominés et l'affirmation du tiers-monde sur l'échiquier international. Si l'indépendance politique est acquise dès 1960, le défi majeur des nations africaines contemporaines réside dans la conquête de leur autonomie économique et leur intégration régionale au sein de l'Union Africaine.`;
      fullDirectResponse = `${part1Pres}\n\n---\n\n${part2Comp}\n\n---\n\n${part3Comm}`;

      steps.push(
        {
          stepName: "Première Partie : Présentation du Document (4 points)",
          description: "Identification méthodique de la nature, du thème, du contexte historique et définition du terme clé.",
          content: part1Pres
        },
        {
          stepName: "Deuxième Partie : Compréhension et Analyse du Document (6 points)",
          description: "Réponses argumentées et citations textuelles précises répondant aux questions de compréhension.",
          content: part2Comp
        },
        {
          stepName: "Troisième Partie : Commentaire Historique Organisé (10 points)",
          description: "Rdaction complète et académique : Introduction rédigée, Développement en trois parties équilibrées, Conclusion.",
          content: part3Comm
        }
      );

      customGuidanceSteps = [
        "Identifier précisément la nature, le thème central et le contexte historique sans appliquer mécaniquement une grille si elle n'est pas demandée.",
        "Justifier systématiquement les réponses de compréhension par des citations exactes du texte entre guillemets.",
        "Rédiger un commentaire historique structuré en 3 axes équilibrés : causes post-1945, étapes majeures, défis des nouveaux États indépendants."
      ];

      customDetailedOutline = `I. PRÉSENTATION DU DOCUMENT (4 pts)
1. Fiche technique : Nature, Thème central, Contexte historique de 1945.
2. Signification académique du terme « Décolonisation ».

II. COMPRÉHENSION DU TEXTE (6 pts)
1. Facteurs favorisants relevés dans le texte (Affaiblissement européen, Charte ONU, nationalismes).
2. Exemple asiatique majeur : L'Inde (1947).
3. Portée historique de l'année 1960 en Afrique (« L'Année de l'Afrique », 17 indépendances dont la Côte d'Ivoire).
4. Défis des jeunes nations (Sous-développement, instabilité politique, analphabétisme).
5. Définition et portée de l'expression « pays non-alignés » (Bandung 1955, Belgrade 1961).

III. COMMENTAIRE HISTORIQUE ORGANISÉ (10 pts)
- Introduction : Accroche historique, Problématique, Annonce du plan en 3 axes.
- Axe 1 : Les causes fondamentales de la décolonisation après 1945 (internes et internationales).
- Axe 2 : Les étapes contrastées de la décolonisation en Afrique (Maghreb armé, Afrique noire négociée).
- Axe 3 : Les défis et difficultés post-indépendance (économiques, politiques, sociaux et OUA 1963).
- Conclusion : Bilan géopolitique, Réponse définitive et perspective d'intégration panafricaine.`;

      customStructuredRedaction = {
        planSummary: "Plan en 3 axes : 1. Causes de la décolonisation après 1945 ; 2. Étapes de l'émancipation en Afrique ; 3. Défis majeurs des nouveaux États africains.",
        introduction: {
          amorce: "Au lendemain de la Seconde Guerre mondiale, le système colonial séculaire s'effondre sous l'effet de l'essor irrésistible des mouvements d'émancipation nationale.",
          definitionTension: "La décolonisation et l'émergence du tiers-monde bouleversent la géopolitique mondiale.",
          problematique: "Comment la décolonisation s'est-elle déployée après 1945 et à quels défis structurels les jeunes nations indépendantes ont-elles été confrontées ?",
          annoncePlan: "Nous analyserons d'abord les causes de la décolonisation après 1945, puis nous retracerons les étapes de l'émancipation en Afrique, avant d'examiner les difficultés majeures des nouveaux États.",
          fullText: `Au lendemain de 1945, les empires coloniaux s'effondrent sous l'impulsion des peuples dominés. Comment ce mouvement historique s'est-il accompli et quelles réalités ont marqué les jeunes États indépendants ? Nous verrons d'abord les causes de la décolonisation, puis ses étapes en Afrique, et enfin les défis majeurs de l'Afrique indépendante.`
        },
        development: {
          part1: {
            partNumber: 1,
            title: "Partie 1 : Les causes majeures de la décolonisation après 1945",
            subParts: [
              {
                subPartLetter: "A",
                title: "L'affaiblissement des métropoles et la prise de conscience des peuples colonisés",
                argument: "La guerre a détruit le mythe de l'invincibilité européenne et galvanisé les tirailleurs.",
                explication: "Participation aux combats et démystification de la puissance coloniale.",
                illustration: {
                  auteur: "Tirailleurs sénégalais",
                  oeuvre: "Tirailleurs et anciens combattants africains",
                  citation: "Fin de l'indigénat et égalité des droits",
                  analyseIllustration: "Les anciens combattants africains revendiquent l'égalité des droits et la fin de l'indigénat."
                },
                fullText: "La Seconde Guerre mondiale détruit le prestige des métropoles européennes vaincues ou affaiblies. Les soldats africains ont combattu pour la liberté du monde et exigent la leur en retour."
              },
              {
                subPartLetter: "B",
                title: "Le rôle moteur des élites et des mouvements nationalistes",
                argument: "Les leaders africains organisent la contestation syndicale et politique.",
                explication: "Création de partis et syndicats, abolition du travail forcé.",
                illustration: {
                  auteur: "Félix Houphouët-Boigny",
                  oeuvre: "Syndicat Agricole Africain (SAA) 1944",
                  citation: "Loi Houphouët-Boigny d'avril 1946",
                  analyseIllustration: "Loi Houphouët-Boigny d'avril 1946 abolissant le travail forcé dans les colonies françaises."
                },
                fullText: "Des figures politiques émergent pour fédérer les revendications des peuples colonisés à travers partis de masse et syndicats."
              }
            ],
            fullText: part3Comm
          },
          transition1: "Au-delà des causes fondamentales de la décolonisation, celle-ci s'est concrétisée selon des modalités contrastées selon les régions africaines.",
          part2: {
            partNumber: 2,
            title: "Partie 2 : Les étapes et modalités de la décolonisation en Afrique",
            subParts: [
              {
                subPartLetter: "A",
                title: "La voie armée en Afrique du Nord : l'exemple algérien",
                argument: "En Algérie, le refus des réformes coloniales entraîne une guerre de libération nationale.",
                explication: "Insurrection du FLN en 1954, guerre de 8 ans et accords d'Évian de 1962.",
                illustration: {
                  auteur: "Front de Libération Nationale",
                  oeuvre: "FLN algérien",
                  citation: "Guerre de libération nationale (1954-1962)",
                  analyseIllustration: "Proclamation de l'indépendance algérienne le 5 juillet 1962 après les accords d'Évian."
                },
                fullText: "En Afrique du Nord et dans les colonies de peuplement, l'émancipation arrachée par les armes s'avère sanglante."
              },
              {
                subPartLetter: "B",
                title: "La voie négociée et pacifique en Afrique subsaharienne",
                argument: "Des réformes successives mènent à l'indépendance dans la concertation.",
                explication: "Loi-cadre Defferre de 1956, Communauté de 1958, l'année 1960 et ses 17 indépendances.",
                illustration: {
                  auteur: "Félix Houphouët-Boigny",
                  oeuvre: "Proclamation de l'indépendance de la Côte d'Ivoire",
                  citation: "Proclamation de l'indépendance le 7 août 1960",
                  analyseIllustration: "Accession pacifique et négociée à la souveraineté internationale de la République de Côte d'Ivoire."
                },
                fullText: "En Afrique noire française et britannique, l'accession à la souveraineté s'opère majoritairement par la négociation politique."
              }
            ],
            fullText: part3Comm
          },
          transition2: "Cependant, l'accession à la souveraineté politique n'a pas suffi à résoudre les lourds handicaps hérités de la colonisation.",
          part3: {
            partNumber: 3,
            title: "Partie 3 : Les difficultés majeures des nouveaux États indépendants",
            subParts: [
              {
                subPartLetter: "A",
                title: "La dépendance économique et le néocolonialisme",
                argument: "Les économies restent extraverties et vulnérables aux cours mondiaux des matières premières.",
                explication: "Économie de traite et détérioration des termes de l'échange.",
                illustration: {
                  auteur: "Économistes du Tiers-Monde",
                  oeuvre: "Économie postcoloniale africaine",
                  citation: "Exportation de matières premières brutes sans industries locales",
                  analyseIllustration: "La faiblesse industrielle maintient une dépendance financière envers les anciennes métropoles."
                },
                fullText: "Sur le plan économique, le manque de diversification et d'infrastructures limite l'autonomie réelle des nouveaux États."
              },
              {
                subPartLetter: "B",
                title: "L'instabilité institutionnelle et les tensions politiques",
                argument: "Le tracé artificiel des frontières et les rivalités de pouvoir alimentent coups d'État et guerres civiles.",
                explication: "Fragilité des institutions démocratiques naissantes et création de l'OUA en 1963.",
                illustration: {
                  auteur: "Chefs d'État africains fondateurs",
                  oeuvre: "Organisation de l'Unité Africaine (OUA)",
                  citation: "Charte d'Addis-Abeba de mai 1963",
                  analyseIllustration: "Création de l'OUA pour promouvoir la solidarité continentale et préserver la souveraineté des jeunes États."
                },
                fullText: "Sur le plan politique, les jeunes républiques font face à des crises de gouvernance et cherchent leur unité dans le panafricanisme."
              }
            ],
            fullText: part3Comm
          }
        },
        conclusion: {
          bilanSynthese: "La décolonisation a transformé la scène internationale en consacrant l'éveil du tiers-monde.",
          reponseDefinitive: "Si l'indépendance juridique et politique a été conquise, l'indépendance économique demeure un défi permanent.",
          elargissement: "Elle appelle au renforcement des solidarités régionales et continentales au sein de l'Union Africaine.",
          fullText: conclusionFullText
        }
      };
    } else if (isColdWar) {
      const part1Pres = `# CORRIGÉ — DEVOIR D’HISTOIRE : COMMENTAIRE DE DOCUMENT (LES RELATIONS INTERNATIONALES DEPUIS 1945)

## I. Présentation du document — 4 points (Première partie : Présentation méthodique du document)

### 1. Présente le document en précisant : sa nature ; son thème ; son contexte historique.

**Réponse :**
- **Nature du document :** Extrait d'un texte d'analyse historique contemporain (synthèse historiographique et didactique sur les relations internationales).
- **Thème :** L'émergence de la bipolarisation du monde et la rivalité idéologique et stratégique entre les États-Unis et l'URSS sans affrontement militaire direct sous la menace nucléaire.
- **Contexte historique :** L'immédiat après-Seconde Guerre mondiale (1945), marqué par l'effondrement de l'Allemagne nazie et des puissances de l'Axe, la ruine économique de l'Europe traditionnelle, la dislocation de la « Grande Alliance » de circonstance entre Washington et Moscou, et l'émergence des deux superpuissances mondiales rivales dotées de l'arme atomique.

### 2. Identifie les deux grandes puissances évoquées dans le document.

**Réponse :** Les deux grandes puissances évoquées dans le document sont les **États-Unis d'Amérique (USA)** d'une part, et l'**Union des Républiques Socialistes Soviétiques (URSS)** d'autre part.`;

      const part2Comp = `## II. Compréhension du document — 6 points (Deuxième partie : Compréhension et analyse du texte)

### 1. Explique pourquoi les États-Unis et l’URSS deviennent les deux grandes puissances après 1945.

**Réponse :**
- **Pour les États-Unis :** Ils s'affirment comme les géants économiques absolus de la planète. Leur territoire est resté vierge de toute destruction matérielle (hormis Pearl Harbor) ; ils détiennent près des deux tiers (65 %) du stock d'or mondial ; le dollar américain devient la monnaie universelle de référence lors des accords de Bretton Woods (1944) ; enfin, ils possèdent dès juillet 1945 le monopole de l'arme atomique (bombardements d'Hiroshima et Nagasaki).
- **Pour l'Union Soviétique (URSS) :** Elle bénéficie d'un prestige politique et militaire immense acquis en portant le coup décisif à la Wehrmacht nazie sur le front de l'Est (bataille de Stalingrad, prise du Reichstag à Berlin au prix de 27 millions de morts soviétiques). Elle dispose de la plus formidable armée de terre au monde (l'Armée rouge) occupant désormais l'Europe centrale et orientale.
- **Par contraste :** Les anciennes puissances coloniales traditionnelles (France, Royaume-Uni, Allemagne, Italie) sortent exsangues, ruinées et incapables d'assurer la régulation géopolitique du globe.

### 2. Relève dans le texte les deux systèmes idéologiques qui s’opposent.

**Réponse :** Le document oppose formellement :
- **Le système américain :** « *le système capitaliste et la démocratie libérale* », fondé sur la souveraineté populaire, le pluralisme politique, les libertés individuelles, la propriété privée des moyens de production et l'économie de marché.
- **Le système soviétique :** « *le communisme et le système socialiste* », fondé sur le marxisme-léninisme, la dictature du prolétariat sous la houlette d'un parti unique (le PCUS), la collectivisation des terres et des usines, ainsi que la planification centrale autoritaire de l'économie.

### 3. Explique ce que signifie l'expression « Guerre froide ».

**Réponse :** Popularisée dès 1947 par le conseiller politique Bernard Baruch et le journaliste Walter Lippmann, l'expression **« Guerre froide »** caractérise une situation de conflictualité permanente, globale et multiforme (idéologique, diplomatique, technologique, spatiale, de propagande et de course aux armements) entre le bloc de l'Ouest et le bloc de l'Est, sans qu'aucun **affrontement armé direct** n'éclate entre les deux armées américaine et soviétique (« *rivalité permanente entre les deux puissances sans affrontement militaire direct entre elles* »).
Cette retenue militaire directe découle de la dissuasion nucléaire et de **« l'équilibre de la terreur »** : dès lors que l'URSS a testé avec succès sa première bombe A en août 1949, toute guerre totale bilatérale aurait inévitablement déclenché une destruction mutuelle assurée (concept MAD : *Mutually Assured Destruction*) anéantissant l'humanité entière.

### 4. Montre, à partir du document, comment chaque puissance cherche à étendre son influence.

**Réponse :**
- **Les États-Unis** déploient le **Plan Marshall** (European Recovery Program, annoncé le 5 juin 1947), injectant plus de 13 milliards de dollars de dons et prêts pour relever l'appareil productif d'Europe occidentale. L'objectif est double : redresser l'économie européenne pour créer des débouchés commerciaux et éradiquer la misère sociale qui constituait le terreau électoral des partis communistes locaux (stratégie de l'*endiguement* ou *containment* du président Harry Truman). Cette politique sera complétée sur le plan militaire par l'Alliance atlantique et l'**OTAN** (créée le 4 avril 1949).
- **L'Union Soviétique** renforce son « *contrôle sur l'Europe de l'Est* » en éliminant les oppositions démocratiques pour instaurer des « démocraties populaires » inféodées à Moscou (ex. le coup de Prague en février 1948). Elle arrime ces pays satellites par le **Kominform** (bureau de coordination idéologique créé en octobre 1947), le **CAEM / Comecon** (Conseil d'Aide Économique Mutuelle fondé en janvier 1949) et le **Pacte de Varsovie** (alliance militaire défensive créée en mai 1955 sous commandement soviétique).`;

      const part3Comm = `## III. Commentaire historique — 10 points (Troisième partie : Commentaire historique organisé)

### Introduction (Introduction du commentaire)

Au lendemain de la victoire conjointe des Alliés sur la barbarie nazie en mai 1945, les espoirs d'une paix universelle incarnée par l'ONU sont rapidement balayés par la dislocation de la « Grande Alliance ». Dès 1947, l'antagonisme irréductible entre les États-Unis et l'Union Soviétique plonge les relations internationales dans une division bipolaire rigide : l'ère de la Guerre froide. Dès lors, comment la confrontation idéologique et stratégique entre Washington et Moscou a-t-elle engendré des crises majeures de 1947 à 1962, jusqu'à faire vaciller la planète au bord de l'abîme nucléaire à Cuba ? Pour élucider cette dynamique, nous analyserons en premier lieu les causes fondamentales de la rupture ; nous retracerons ensuite les principales manifestations de la Guerre froide entre 1947 et 1962 ; enfin, nous expliquerons pourquoi la crise des missiles de Cuba représenta le paroxysme le plus périlleux de cette ère d'affrontement.

### 1. Montre les causes de la Guerre froide (Développement organisé : premier axe)

#### A. L'opposition idéologique et doctrinale irréconciliable

L'avènement de la Guerre froide trouve son origine première dans une incompatibilité doctrinale absolue. D'un côté, les États-Unis incarnent le libéralisme politique et économique, défendant les libertés publiques, le multipartisme et la liberté d'entreprendre. De l'autre, l'URSS s'érige en porte-drapeau de l'idéologie marxiste-léniniste, prônant la révolution prolétarienne, la disparition des classes sociales, la planification économique impérative et la confiscation du pouvoir par le Parti communiste.

#### B. La rupture des doctrines et les rivalités géopolitiques (1947)

À cette opposition de valeurs s'ajoutent les contentieux géopolitiques non résolus lors des conférences de Yalta et de Potsdam (1945). Constatant la soviétisation forcée de l'Europe centrale (mise en place de régimes fantoches en Pologne, Roumanie, Bulgarie), les Occidentaux prennent conscience de la volonté hégémonique de Joseph Staline. En mars 1946 à Fulton, Winston Churchill alerte l'opinion en dénonçant le « rideau de fer » tombé à travers le continent, de Stettin sur la Baltique à Trieste sur l'Adriatique.
La rupture devient officielle et irréversible en 1947 par la confrontation de deux doctrines incompatibles : le 12 mars 1947, le président Harry Truman expose la doctrine de l'« endiguement » (*containment*), promettant l'assistance financière et militaire des USA à toute nation luttant contre la sujétion communiste (immédiatement concrétisée par le Plan Marshall). En réplique, le secrétaire du PCUS Andreï Jdanov théorise en septembre 1947 la scission du monde en deux camps antinomiques : le « camp impérialiste et antidémocratique » dominé par les Américains, face au « camp anti-impérialiste et démocratique » guidé par l'URSS.

### 2. Présente les principales manifestations de la Guerre froide de 1947 à 1962 (Deuxième axe)

#### A. Les crises en Europe : le blocus de Berlin et le mur de Berlin

Entre 1947 et 1962, la rivalité des deux superpuissances se matérialise par la constitution de blocs militaires hermétiques et l'éclatement de crises explosives sur plusieurs continents.
En Europe, l'Allemagne devient le théâtre privilégié de la confrontation. Face à la décision des Occidentaux d'unifier économiquement leurs zones par la création du Deutsche Mark, Staline réagit en ordonnant le blocus terrestre total des secteurs occidentaux de Berlin le 23 juin 1948. Les États-Unis relèvent le défi avec brio en organisant un gigantesque pont aérien (plus de 275 000 rotations ravitaillant deux millions d'habitants pendant onze mois), contraignant l'URSS à lever le siège en mai 1949. Cette crise fondatrice consacre la division durable de la nation allemande en deux États souverains rivaux : la République Fédérale d'Allemagne (RFA, capitale Bonn) proclamée le 23 mai 1949, et la République Démocratique Allemande (RDA, satellite soviétique, capitale Berlin-Est) fondée le 7 octobre 1949.
Plus tard, pour enrayer l'exil de plus de 2,7 millions d'Allemands de l'Est vers l'Ouest entre 1949 et 1961, les autorités communistes de RDA érigent subrepticement dans la nuit du 12 au 13 août 1961 le Mur de Berlin (« le mur de la honte »), bétonnant la frontière physique de la division bipolaire.

#### B. L'extension du conflit en Asie : la guerre de Corée (1950-1953)

Parallèlement, la Guerre froide s'élargit à l'Asie avec la victoire de Mao Zedong proclamant la République Populaire de Chine en octobre 1949, suivie par la sanglante Guerre de Corée (1950 - 1953). L'agression du Sud par la Corée du Nord communiste provoque l'intervention de l'ONU emmenée par l'armée américaine face aux forces nord-coréennes et aux contingents chinois. Le conflit s'achève en juillet 1953 par l'armistice de Panmunjom qui fige la scission de la péninsule au niveau du 38e parallèle.

### 3. Explique pourquoi la crise des missiles de Cuba représenta le paroxysme le plus périlleux de la Guerre froide (Troisième axe)

#### A. L'installation de missiles nucléaires soviétiques à 150 km des côtes américaines

Si les crises de Berlin et de Corée ont suscité de vives inquiétudes, c'est la crise de Cuba d'octobre 1962 qui représente le moment le plus angoissant et le plus périlleux de toute la Guerre froide.
Le contentieux s'amorce avec la révolution cubaine de 1959 menée par Fidel Castro. Face à l'hostilité de Washington (embargo et tentative d'invasion manquée de la Baie des Cochons en 1961), Cuba s'allie à l'URSS. À l'été 1962, Nikita Khrouchtchev prend la décision audacieuse de déployer secrètement sur le sol cubain des fusées nucléaires soviétiques à moyenne portée (SS-4 et SS-5), capables de frapper les principales villes de la côte Est américaine en moins de quinze minutes.
Repérées le 14 octobre 1962 par des avions espions américains U-2, ces installations franchissent une ligne rouge inacceptable pour la sécurité des États-Unis. Le 22 octobre, dans une allocution télévisée dramatique, le président John F. Kennedy annonce l'instauration d'un blocus naval rigoureux (« quarantaine ») autour de l'île pour stopper les cargos soviétiques convoyant du matériel militaire, et met en demeure Moscou de démanteler sans délai les rampes de tir.

#### B. Les six jours au bord de la guerre nucléaire totale (DEFCON 2)

Pendant six jours d'une intensité inouïe (du 22 au 28 octobre 1962), le monde se retrouve au seuil d'un embrasement thermonucléaire planétaire. Les forces armées américaines sont placées pour la seule fois de leur histoire au niveau d'alerte DEFCON 2. Les convois de cargos soviétiques continuent d'avancer vers la ligne de blocus, et un avion U-2 américain est abattu au-dessus de Cuba. 
Le dénouement s'obtient grâce à d'intenses tractations diplomatiques secrètes : le 28 octobre, Khrouchtchev ordonne à ses navires de faire demi-tour et accepte de démonter les fusées sous contrôle de l'ONU, en contrepartie de l'engagement solennel de Kennedy de ne pas envahir Cuba et du retrait secret des missiles américains Jupiter implantés en Turquie.
Cet épisode constitue un électrochoc salutaire pour les états-majors des deux blocs : la certitude que toute escalade atomique conduirait à un anéantissement universel impose l'ouverture d'un dialogue direct permanent.

### Conclusion (Conclusion du commentaire)

Au terme de notre analyse, il apparaît que le commentaire de ce document illustre parfaitement les mécanismes d'un monde bipolaire issu du cataclysme de 1945. Fondée sur des antagonismes idéologiques et des visées impérialistes concurrentes, la Guerre froide a fragmenté l'ordre mondial en deux blocs antagonistes, tout en évitant le choc frontal direct grâce à la terreur nucléaire.
La crise des missiles de Cuba en 1962 aura constitué l'acmé dramatique de ce duel au sommet : en approchant l'holocauste planétaire d'aussi près, les deux superpuissances ont pris la mesure de leur vulnérabilité commune.
Cet effroi salutaire a ouvert la voie à la période de **Détente** et de **Coexistence pacifique**, formalisée par l'installation du « Téléphone rouge » en 1963 et la signature des premiers traités de limitation des armements stratégiques (TNP en 1968, accords SALT 1 en 1972).`;

      fullDirectResponse = `${part1Pres}\n\n---\n\n${part2Comp}\n\n---\n\n${part3Comm}`;
      introFullText = part1Pres;
      part1Full = part2Comp;
      part2Full = part3Comm;
      transition1 = "---";
      conclusionFullText = "En conclusion, l'étude de ce document et des relations internationales depuis 1945 démontre que la dissuasion nucléaire, tout en générant une angoisse existentielle permanente, a paradoxalement contenu les deux superpuissances dans des limites évitant un troisième conflit mondial destructeur.";

      steps.push(
        {
          stepName: "1. Présentation Méthodique du Document (Grille NODDACI — 4 pts)",
          description: "Nature, Origine, Date, Contexte historique, Idée générale et Acteurs identifiés.",
          content: part1Pres
        },
        {
          stepName: "2. Compréhension et Analyse du Document (Questions de cours — 6 pts)",
          description: "Réponses intégrales et argumentées aux 4 questions d'explication interne et externe.",
          content: part2Comp
        },
        {
          stepName: "3. Commentaire Historique Organisé (Dissertation guidée — 10 pts)",
          description: "Introduction, Développement en 3 parties et Conclusion rédigées in extenso.",
          content: part3Comm
        }
      );

      customGuidanceSteps = [
        "1. Présenter le document en mobilisant scrupuleusement la grille officielle NODDACI (Nature, Origine, Date, Contexte, Thème).",
        "2. Répondre à chacune des questions de compréhension en articulant les citations extraites du texte avec les repères factuels du cours (dates, doctrines).",
        "3. Rédiger le commentaire organisé en 3 temps : Introduction (amorce, problématique, plan), Développement équilibré (causes, manifestations 1947-1962, crise de Cuba) et Conclusion (bilan et ouverture sur la Détente)."
      ];

      customDetailedOutline = `I. PRÉSENTATION DU DOCUMENT (4 pts)
- Nature : Synthèse historique contemporaine
- Origine & Date : Histoire des relations internationales après 1945
- Contexte : Effondrement de l'Axe, ruine de l'Europe et dislocation de la Grande Alliance en 1945
- Idée générale : Bipolarisation du monde, rivalité idéologique et stratégies d'influence
- Acteurs : États-Unis d'Amérique (USA) et Union Soviétique (URSS)

II. COMPRÉHENSION ET ANALYSE (6 pts)
1. Superpuissances après 1945 : USA (monopole atomique, 65% de l'or mondial, dollar Bretton Woods) vs URSS (Armée rouge victorieuse, prestige militaire de Berlin, 27 millions de victimes)
2. Opposition idéologique : Capitalisme libéral et démocratie pluraliste vs Communisme marxiste et économie planifiée
3. Guerre froide : Tension permanente sans guerre militaire directe en raison de l'équilibre de la terreur nucléaire
4. Moyens d'influence : Plan Marshall (13 milliards $) et OTAN (1949) côté USA ; Kominform (1947), CAEM (1949) et Pacte de Varsovie (1955) côté URSS

III. COMMENTAIRE HISTORIQUE ORGANISÉ (10 pts)
- Introduction : Rupture de 1945, émergence de la Guerre froide et problématique
- Axe 1 : Les causes profondes et doctrinales de la rupture (incompatibilité axiologique, désaccords de Yalta, doctrines Truman vs Jdanov en 1947)
- Axe 2 : Les manifestations majeures de 1947 à 1962 (Blocus de Berlin 1948-1949 et division RFA/RDA, guerre de Corée 1950-1953, Mur de Berlin 1961)
- Axe 3 : La crise des fusées de Cuba (octobre 1962) : le paroxysme du danger nucléaire, blocus maritime américain DEFCON 2, issue négociée et genèse de la Détente
- Conclusion : Bilan de la bipolarisation et ouverture sur les traités de limitation d'armements (TNP 1968, SALT 1972)`;

      customStructuredRedaction = {
        planSummary: "I. Présentation NODDACI (4 pts) | II. Compréhension du document (6 pts) | III. Commentaire organisé (10 pts)",
        introduction: {
          amorce: "Au lendemain de 1945, la fin de la Seconde Guerre mondiale consacre l'émergence des deux superpuissances.",
          definitionTension: "L'antagonisme idéologique et stratégique oppose le bloc de l'Est au bloc de l'Ouest.",
          problematique: "Comment la rivalité américano-soviétique a-t-elle façonné les relations internationales jusqu'à la crise de Cuba ?",
          annoncePlan: "I. Présentation méthodique | II. Compréhension du document | III. Commentaire historique organisé",
          fullText: part1Pres
        },
        development: {
          part1: {
            partNumber: 1,
            title: "II. Compréhension et analyse interne du document (6 pts)",
            thesisOverview: "Réponses argumentées aux 4 questions avec citations et repères du cours.",
            subParts: [
              {
                subPartLetter: "A",
                title: "Émergence des deux superpuissances et opposition idéologique",
                argument: "Les États-Unis et l'URSS deviennent les puissances dominantes par leur prépondérance militaire et géopolitique.",
                explication: "Les États-Unis détiennent le monopole atomique et l'or mondial ; l'URSS possède l'Armée rouge victorieuse.",
                illustration: {
                  auteur: "Histoire Contemporaine",
                  oeuvre: "Relations Internationales",
                  citation: "Bipolarisation du monde",
                  analyseIllustration: "Rupture de la Grande Alliance."
                },
                fullText: part2Comp
              }
            ],
            fullText: part2Comp
          },
          transition1: "Au-delà de l'analyse interne du document, les connaissances du cours permettent de contextualiser la dynamique globale de la Guerre froide.",
          part2: {
            partNumber: 2,
            title: "III. Commentaire historique organisé (10 pts)",
            thesisOverview: "Causes, manifestations majeures de 1947 à 1962 et crise de Cuba.",
            subParts: [
              {
                subPartLetter: "A",
                title: "Développement rédigé en trois axes majeurs",
                argument: "La confrontation des blocs a traversé des crises intenses jusqu'au paroxysme nucléaire de 1962.",
                explication: "Du blocus de Berlin à la crise de Cuba, la terreur nucléaire a évité l'affrontement armé direct.",
                illustration: {
                  auteur: "Guerre Froide",
                  oeuvre: "Crise des Missiles de Cuba",
                  citation: "DEFCON 2 et Téléphone rouge",
                  analyseIllustration: "Prise de conscience du péril atomique."
                },
                fullText: part3Comm
              }
            ],
            fullText: part3Comm
          }
        },
        conclusion: {
          bilanSynthese: "L'étude de ce document illustre parfaitement les mécanismes de la bipolarisation et la rivalité Est-Ouest.",
          reponseDefinitive: "La crise des missiles de Cuba de 1962 a constitué l'acmé de la confrontation, imposant ensuite la Coexistence pacifique et la Détente.",
          elargissement: "Elle débouche sur les premiers traités de non-prolifération et de limitation des armements stratégiques (TNP 1968, SALT 1 1972).",
          fullText: conclusionFullText
        }
      };
    } else {
      // Pour tout autre sujet de commentaire de document (décolonisation, ONU, Côte d'Ivoire, climat, urbanisation, etc.)
      const datesFormatted = Object.entries(matchedLesson.keyDatesOrStats).map(([d, desc]) => `• **${d}** : ${desc}`).join("\n");
      const conceptsFormatted = Object.entries(matchedLesson.keyConcepts).map(([c, def]) => `• **${c}** : ${def}`).join("\n");
      const wantsNoddaci = /noddaci/i.test(clean);

      const presBlock = `### I. PREMIÈRE PARTIE : PRÉSENTATION DU DOCUMENT ${wantsNoddaci ? "(Grille NODDACI — 4 points)" : "(4 points)"}

• **Nature** : Document à caractère historique ou géographique issu de sources officielles et didactiques relatives à l'enseignement secondaire.
• **Origine / Source** : Référentiel et corpus académique certifié conforme au programme national de Terminale.
• **Date & Cadre temporel** : Événements et dynamiques s'inscrivant dans la période couverte par le thème : « ${matchedLesson.themeTitle} ».
• **Contexte historique / spatial** : Le document s'insère dans le cadre de « ${matchedLesson.lessonTitle} ». Il met en lumière les mutations structurelles, les tensions géopolitiques et les enjeux territoriaux propres à cette thématique.
• **Idée générale / Thème central** : Ce document analyse les dynamiques majeures, les facteurs déterminants et les répercussions liées à **${matchedLesson.lessonTitle}**.`;

      const compBlock = `### II. DEUXIÈME PARTIE : COMPRÉHENSION ET ANALYSE DU TEXTE (6 points)

1. **Éléments d'explication et repères fondamentaux du cours** :
${datesFormatted}

2. **Notions et concepts clés mobilisés** :
${conceptsFormatted}

3. **Analyse des mécanismes et causes sous-jacentes** :
${(matchedLesson.causesOrFactors || []).map(c => `• ${c}`).join("\n")}`;

      const commBlock = `### III. TROISIÈME PARTIE : COMMENTAIRE ORGANISÉ (10 points)

#### INTRODUCTION DU COMMENTAIRE
L'étude méthodique de « ${matchedLesson.lessonTitle} » constitue un axe capital des programmes officiels de Terminale. Ce sujet nous invite à examiner de façon rigoureuse les forces en présence, les ruptures temporelles et les équilibres en jeu. Dès lors, comment appréhender la problématique fondamentale suivante : ${matchedLesson.examDissertationPlan.problemStatement} ? Pour y répondre avec méthode, nous analyserons d'abord ${matchedLesson.examDissertationPlan.axes[0]?.axeTitle.replace(/^[I|V|X]+\.\s*/, "") || "les fondements du phénomène"}, puis nous approfondirons ${matchedLesson.examDissertationPlan.axes[1]?.axeTitle.replace(/^[I|V|X]+\.\s*/, "") || "les évolutions et bilans"}.

#### DÉVELOPPEMENT
##### 1. ${matchedLesson.examDissertationPlan.axes[0]?.axeTitle || "Première partie"}
${(matchedLesson.examDissertationPlan.axes[0]?.arguments || []).map((arg, i) => `**Axe 1.${i + 1}** : ${arg}`).join("\n\n")}

##### 2. ${matchedLesson.examDissertationPlan.axes[1]?.axeTitle || "Seconde partie"}
${(matchedLesson.examDissertationPlan.axes[1]?.arguments || []).map((arg, i) => `**Axe 2.${i + 1}** : ${arg}`).join("\n\n")}

#### CONCLUSION DU COMMENTAIRE
En définitive, l'analyse approfondie de ce document met en évidence la complexité des enjeux liés à ${matchedLesson.lessonTitle}. Les repères chronologiques et conceptuels attestent de mutations profondes dont la portée continue d'éclairer les réalités géopolitiques et territoriales contemporaines.`;

      fullDirectResponse = `${presBlock}\n\n---\n\n${compBlock}\n\n---\n\n${commBlock}`;
      introFullText = presBlock;
      part1Full = compBlock;
      part2Full = commBlock;
      transition1 = "---";
      conclusionFullText = `En conclusion, ce commentaire méthodique démontre la maîtrise requise pour l'épreuve d'Histoire-Géographie au Baccalauréat.`;

      steps.push(
        {
          stepName: "1. Présentation Méthodique du Document (NODDACI — 4 pts)",
          description: "Cadrage précis d'après les directives officielles.",
          content: presBlock
        },
        {
          stepName: "2. Compréhension et Analyse du Document (6 pts)",
          description: "Mobilisation des dates, concepts et causes du cours.",
          content: compBlock
        },
        {
          stepName: "3. Commentaire Organisé (10 pts)",
          description: "Développement structuré en parties et sous-parties selon le plan académique.",
          content: commBlock
        }
      );

      customGuidanceSteps = [
        "1. Présenter le document selon la grille officielle NODDACI.",
        "2. Traiter les questions de compréhension en confrontant le texte et le cours.",
        "3. Rédiger le commentaire organisé avec Introduction, Développement et Conclusion."
      ];

      customDetailedOutline = `I. PRÉSENTATION (NODDACI)\nII. COMPRÉHENSION & CONNAISSANCES\nIII. COMMENTAIRE ORGANISÉ :\n  - ${matchedLesson.examDissertationPlan.axes[0]?.axeTitle}\n  - ${matchedLesson.examDissertationPlan.axes[1]?.axeTitle}`;

      customStructuredRedaction = {
        planSummary: `I. Présentation NODDACI | II. Compréhension & Analyse | III. Commentaire organisé`,
        introduction: {
          amorce: `L'étude de ce document porte sur ${matchedLesson.lessonTitle.toLowerCase()}.`,
          definitionTension: `Le texte reflète les tensions et dynamiques caractéristiques du thème ${matchedLesson.themeTitle}.`,
          problematique: matchedLesson.examDissertationPlan.problemStatement || "Quels sont les enjeux majeurs soulevés par ce document ?",
          annoncePlan: `I. Présentation méthodique | II. Compréhension et repères clés | III. Commentaire historique / géographique`,
          fullText: presBlock
        },
        development: {
          part1: {
            partNumber: 1,
            title: "II. Compréhension et repères du cours",
            thesisOverview: "Analyse interne et connaissances certifiées du programme.",
            subParts: [
              {
                subPartLetter: "A",
                title: "Notions et repères fondamentaux",
                argument: "Les repères spatio-temporels éclairent le document.",
                explication: conceptsFormatted,
                illustration: {
                  auteur: "Histoire-Géographie",
                  oeuvre: matchedLesson.lessonTitle,
                  citation: "Repères officiels",
                  analyseIllustration: datesFormatted
                },
                fullText: compBlock
              }
            ],
            fullText: compBlock
          },
          transition1: "Au-delà de la compréhension immédiate du document, l'analyse approfondie permet d'en dégager la portée globale.",
          part2: {
            partNumber: 2,
            title: "III. Commentaire organisé",
            thesisOverview: `Axes directeurs : ${matchedLesson.examDissertationPlan.axes[0]?.axeTitle} et ${matchedLesson.examDissertationPlan.axes[1]?.axeTitle}.`,
            subParts: [
              {
                subPartLetter: "A",
                title: matchedLesson.examDissertationPlan.axes[0]?.axeTitle || "Axe 1",
                argument: matchedLesson.examDissertationPlan.axes[0]?.arguments[0] || "Premier argument",
                explication: "Explication historique et géographique conforme au programme.",
                illustration: {
                  auteur: "Programme Officiel",
                  oeuvre: matchedLesson.lessonTitle,
                  citation: "Données certifiées",
                  analyseIllustration: "Démonstration méthodique."
                },
                fullText: commBlock
              }
            ],
            fullText: commBlock
          }
        },
        conclusion: {
          bilanSynthese: `En définitive, l'analyse méthodique de ce document éclaire les enjeux fondamentaux de « ${matchedLesson.lessonTitle} ».`,
          reponseDefinitive: `Les données analysées confirment l'importance de ces évolutions pour comprendre le monde contemporain.`,
          elargissement: `Cette étude ouvre des perspectives sur les mutations à venir dans ce domaine.`,
          fullText: conclusionFullText
        }
      };
    }
  }

  // B2. Cas SITUATION D'ÉVALUATION
  else if (exerciseType === "Situation d'Évaluation") {
    const datesFormatted = Object.entries(matchedLesson.keyDatesOrStats).map(([d, desc]) => `• **${d}** : ${desc}`).join("\n");
    const conceptsFormatted = Object.entries(matchedLesson.keyConcepts).map(([c, def]) => `• **${c}** : ${def}`).join("\n");

    const sitPres = `### I. IDENTIFICATION DU PROBLÈME ET CONTEXTE (Consigne 1)
• **Thème** : ${matchedLesson.themeTitle}
• **Leçon de référence** : ${matchedLesson.lessonTitle}
• **Idée générale & Problème posé** : Le sujet met en jeu les dynamiques, tensions et défis majeurs soulevés par ${matchedLesson.lessonTitle.toLowerCase()}.
• **Contexte spatio-temporel** : Les faits s'inscrivent dans l'évolution officielle documentée par le programme de Terminale.`;

    const sitExplic = `### II. EXPLICATION MÉTHODIQUE ET CONNAISSANCES DU COURS (Consigne 2)
1. **Repères chronologiques ou statistiques incontournables** :
${datesFormatted}

2. **Notions fondamentales mobilisées** :
${conceptsFormatted}

3. **Explication approfondie** :
${matchedLesson.examDissertationPlan.axes[0]?.arguments?.join("\n\n") || "Analyse méthodique fondée sur les faits du cours."}`;

    const sitSol = `### III. APPRÉCIATION CRITIQUE ET PERSPECTIVES D'AVENIR (Consigne 3)
Face aux défis exposés dans cette situation d'évaluation, une approche équilibrée s'impose :
• D'une part, reconnaître les acquis majeurs, les réformes positives et les progrès accomplis (${matchedLesson.examDissertationPlan.axes[0]?.arguments[0] || "avancées significatives"}).
• D'autre part, identifier avec lucidité les limites structurelles, blocages ou contraintes persistantes (${matchedLesson.examDissertationPlan.axes[1]?.arguments[0] || "défis structurels"}).
• Enfin, formuler des recommandations concrètes, concertées et pérennes conformes aux grilles d'évaluation APC (Approche Par Compétences) du Baccalauréat.`;

    conclusionFullText = `En conclusion, la résolution de cette situation d'évaluation illustre l'aptitude de l'élève à mobiliser les ressources du cours d'Histoire-Géographie pour analyser un fait contemporain et formuler des propositions raisonnées.`;

    fullDirectResponse = `${sitPres}\n\n---\n\n${sitExplic}\n\n---\n\n${sitSol}\n\n---\n\n${conclusionFullText}`;
    introFullText = sitPres;
    part1Full = sitExplic;
    part2Full = sitSol;
    transition1 = "---";

    steps.push(
      {
        stepName: "1. Identification du problème et contexte historique / géographique",
        description: "Dégager l'idée générale et le contexte d'après la grille officielle.",
        content: sitPres
      },
      {
        stepName: "2. Explication méthodique et connaissances du cours associées",
        description: "Clarification des passages clés avec faits, dates et mécanismes précis.",
        content: sitExplic
      },
      {
        stepName: "3. Traitement rédigé des consignes du sujet",
        description: "Réponses complètes aux 3 consignes selon le barème officiel du Baccalauréat.",
        content: sitSol
      }
    );

    customGuidanceSteps = [
      "1. Identifier clairement le problème historique ou géographique posé dans la situation.",
      "2. Mobiliser les connaissances factuelles précises du cours (dates, chiffres, notions).",
      "3. Proposer une analyse critique ou des solutions réalistes et argumentées."
    ];

    customDetailedOutline = `Consigne 1 : Identification et contexte\nConsigne 2 : Explication méthodique\nConsigne 3 : Appréciation critique et solutions`;

    customStructuredRedaction = {
      planSummary: `Consigne 1 : Identification | Consigne 2 : Explication méthodique | Consigne 3 : Appréciation critique & solutions`,
      introduction: {
        amorce: `Cette situation d'évaluation porte sur ${matchedLesson.lessonTitle.toLowerCase()}.`,
        definitionTension: `Le problème posé met en jeu les facteurs, manifestations et répercussions de cette thématique.`,
        problematique: matchedLesson.examDissertationPlan.problemStatement || "Quelles sont les causes, manifestations et solutions face à ce problème ?",
        annoncePlan: `Traitement méthodique des trois consignes de l'épreuve.`,
        fullText: sitPres
      },
      development: {
        part1: {
          partNumber: 1,
          title: "II. Explication méthodique et connaissances du cours (Consigne 2)",
          thesisOverview: "Mobilisation des repères chronologiques, notions et mécanismes explicatifs.",
          subParts: [
            {
              subPartLetter: "A",
              title: "Mécanismes et données certifiées du cours",
              argument: "Analyse approfondie conforme au programme officiel.",
              explication: conceptsFormatted,
              illustration: {
                auteur: "Programme National",
                oeuvre: matchedLesson.lessonTitle,
                citation: "Données du cours",
                analyseIllustration: datesFormatted
              },
              fullText: sitExplic
            }
          ],
          fullText: sitExplic
        },
        transition1: "Au-delà de l'explication des faits, l'évaluation requiert un esprit critique et la proposition de solutions pérennes.",
        part2: {
          partNumber: 2,
          title: "III. Appréciation critique et perspectives d'avenir (Consigne 3)",
          thesisOverview: "Bilan équilibré entre avancées, limites et pistes de solutions durables.",
          subParts: [
            {
              subPartLetter: "A",
              title: "Évaluation raisonnée et recommandations",
              argument: "Mise en perspective selon la démarche par compétences.",
              explication: "Formulation de solutions réalistes et concertées.",
              illustration: {
                auteur: "Grille APC Baccalauréat",
                oeuvre: "Situation d'Évaluation",
                citation: "Consigne 3",
                analyseIllustration: "Critères de pertinence et de cohérence."
              },
              fullText: sitSol
            }
          ],
          fullText: sitSol
        }
      },
      conclusion: {
        bilanSynthese: `La résolution méthodique de cette situation d'évaluation met en évidence les acquis et les défis liés à « ${matchedLesson.lessonTitle} ».`,
        reponseDefinitive: `L'application combinée des connaissances du cours et de l'esprit critique permet de répondre pleinement aux exigences de l'épreuve.`,
        elargissement: `Ces enseignements constituent des leviers indispensables pour appréhender les enjeux contemporains.`,
        fullText: conclusionFullText
      }
    };
  }

  // C. Cas CHRONOLOGIE / DATES
  else if (exerciseType === "Chronologie / Dates") {
    const datesFormatted = Object.entries(matchedLesson.keyDatesOrStats).map(([d, desc]) => `• ${d} : ${desc}`).join("\n");
    steps.push(
      {
        stepName: "Repères Chronologiques & Chiffres Clés Certifiés",
        description: "Dates exactes et données statistiques officielles du programme national.",
        content: `Leçon : ${matchedLesson.lessonTitle}\n\n${datesFormatted}`
      }
    );
    conclusionFullText = `Toutes ces dates et statistiques sont rigoureusement conformes aux manuels et fiches pédagogiques officielles du Ministère de l'Éducation Nationale.`;
  }

  // D. Cas NOTIONS & CONCEPTS
  else if (exerciseType === "Notions & Concepts") {
    const conceptsFormatted = Object.entries(matchedLesson.keyConcepts).map(([c, def]) => `• **${c}** : ${def}`).join("\n\n");
    steps.push(
      {
        stepName: "Définitions et Notions Clés Officielles",
        description: "Définitions claires, simples et faciles à retenir pour le Baccalauréat.",
        content: `Leçon : ${matchedLesson.lessonTitle}\n\n${conceptsFormatted}`
      }
    );
    conclusionFullText = `Ces définitions constituent le vocabulaire fondamental exigé dans les copies de dissertation et de commentaire.`;
    fullDirectResponse = `### Définitions et Notions Clés : ${matchedLesson.lessonTitle}\n\n${conceptsFormatted}\n\n${conclusionFullText}`;
  }

  // E. Cas QUESTION DIRECTE / RESTITUTION DE CONNAISSANCES
  else if (exerciseType === "Question Directe / Restitution") {
    // 1. RELIEFS DE LA CÔTE D'IVOIRE
    if (/relief/i.test(clean)) {
      fullDirectResponse = `### 1. Vue d'ensemble de la topographie ivoirienne
Le relief de la Côte d'Ivoire est dans son ensemble **plat, tabulaire et monotone**, sans barrière montagneuse infranchissable. Le territoire forme un vaste plan incliné en pente douce depuis le Nord (altitude moyenne de 300 à 400 m) vers le Sud au niveau du Golfe de Guinée (océan Atlantique).

Le relief ivoirien se subdivise en **trois (3) grandes unités géomorphologiques** :

---

### 2. Les trois (3) grandes unités de relief

#### A. Les Plaines côtières et littorales (au Sud)
* **Localisation & Altitude** : Elles s'étendent le long des 520 km de façade maritime sur l'océan Atlantique, avec des altitudes très basses comprises entre **0 et 50 mètres**.
* **Caractéristiques géomorphologiques** :
  - **À l'Est de Fresco** : côte basse et sablonneuse bordée d'un cordon littoral et d'un vaste réseau lagunaire (lagunes Ébrié, Aby, Grand-Lahou).
  - **À l'Ouest de Fresco** : côte rocheuse et escarpée avec des falaises, criques et promontoires (Sassandra, San-Pédro, Tabou).
* **Rôle économique et atouts** : Implantation des deux grands ports maritimes (Abidjan et San-Pédro), pêche maritime, tourisme balnéaire et cultures industrielles littorales (palmier à huile, cocotier, hévéa).

#### B. Les Plateaux (au Centre et au Nord)
* **Localisation & Altitude** : Ils couvrent la majeure partie du territoire ivoirien (**plus de 70 % de la superficie nationale**), étagés entre **200 et 500 mètres** d'altitude (plateaux du Centre ou Baoulé, plateaux du Nord ou Sénoufo).
* **Caractéristiques géomorphologiques** :
  - Surfaces planes ou mollement ondulées, légèrement entaillées par les vallées fluviales (bassins du Bandama, de la Comoé, du Sassandra et du Cavally).
  - Présence par endroits de dômes rocheux résiduels et collines granitiques isolées appelés **inselbergs** (ex : inselbergs du pays Sénoufo et du V Baoulé).
* **Rôle économique et atouts** : Cœur agricole de la Côte d'Ivoire :
  - Au Centre/Est : zone forestière favorable aux cultures d'exportation (cacao, café, hévéa).
  - Au Nord : zone de savane idéale pour le coton, l'anacarde (cajou), les céréales (maïs, mil) et l'élevage bovin.
  - La planéité facilite considérablement la construction du réseau routier et de la voie ferrée Abidjan-Ouagadougou.

#### C. Les Montagnes et massifs montagneux (à l'Ouest)
* **Localisation & Altitude** : Situés dans l'Ouest et le Nord-Ouest de la Côte d'Ivoire (District des Montagnes, région de Man, Danané, Touba). Les altitudes dépassent fréquemment **1 000 mètres**.
* **Principaux sommets et reliefs remarquables** :
  - **Le Mont Nimba (1 752 m)** : Point culminant de la Côte d'Ivoire, situé à la frontière commune entre la Côte d'Ivoire, la Guinée et le Libéria.
  - **Le Mont Tonkoui (1 189 m)** : Deuxième sommet majeur, abritant une station émettrice et offrant un panorama remarquable.
  - **Le Mont Momi (1 302 m)**, **le Mont Glo (1 100 m)** et la **Dent de Man (881 m)**.
* **Caractéristiques géomorphologiques** : Reliefs vigoureux et accidentés, vallées encaissées, fortes pentes et cascades (cascade de la Zadipleu à Man).
* **Rôle économique et atouts** : Climat frais d'altitude favorable à la culture de l'arabica et au maraîchage, potentiel touristique important, gisements miniers (fer des monts Nimba et Klahoyo, nickel de Sipilou) et château d'eau naturel alimentant les affluents fluviaux.

---

### 3. Tableau Récapitulatif Mémotechnique

| Unité de relief | Localisation | Altitude moyenne | Éléments caractéristiques | Atouts économiques majeurs |
| :--- | :--- | :--- | :--- | :--- |
| **Plaines côtières** | Sud (Littoral) | 0 à 50 m | Cordons sableux, lagunes Ébrié/Aby/Grand-Lahou, falaises à l'Ouest | Ports d'Abidjan & San-Pédro, pêche, tourisme, hévéa/palmier |
| **Plateaux** | Centre et Nord (> 70 % du pays) | 200 à 500 m | Surfaces ondulées, inselbergs granitiques (Sénoufo, Baoulé) | Agriculture (cacao, café, anacarde, coton), réseau routier aisé |
| **Montagnes** | Ouest (Région de Man) | > 1 000 m | Mont Nimba (1 752 m), Mont Tonkoui (1 189 m), Mont Glo | Café arabica, fer, nickel, tourisme de montagne, hydrographie |`;

      steps.push(
        {
          stepName: "1. Morphologie Générale (Relief plat et tabulaire)",
          description: "Topographie générale d'ensemble et orientation de la pente nationale.",
          content: "Le relief de la Côte d'Ivoire est un vaste plan incliné en pente douce du Nord (300-400 m) vers le Sud océanique (0 m). L'absence de relief infranchissable facilite les communications."
        },
        {
          stepName: "2. Les Plaines côtières et littorales (au Sud : 0 à 50 m)",
          description: "Basses terres le long des 520 km de côte atlantique.",
          content: "Côte sablonneuse à lagunes à l'Est de Fresco (lagunes Ébrié, Aby), côte rocheuse à falaises à l'Ouest. Implantation des ports d'Abidjan et San-Pédro."
        },
        {
          stepName: "3. Les Plateaux du Centre et du Nord (200 à 500 m)",
          description: "Vastes surfaces étagées couvrant plus de 70 % du territoire ivoirien.",
          content: "Surfaces mollement ondulées parsemées d'inselbergs (pays Sénoufo et V Baoulé). Vocation agricole majeure : binôme café-cacao au Sud, anacarde et coton au Nord."
        },
        {
          stepName: "4. Les Montagnes de l'Ouest (Région de Man)",
          description: "Massif vigoureux dépassant 1 000 m dans le District des Montagnes.",
          content: "Point culminant : Mont Nimba (1 752 m, sommet national), Mont Tonkoui (1 189 m), Mont Glo. Gisements de fer et de nickel, culture de café arabica et château d'eau."
        },
        {
          stepName: "5. Bilan Économique & Tableau Mémotechnique",
          description: "Impact direct sur le développement national et récapitulatif pour les révisions.",
          content: "La topographie plane sur plus de 90 % du territoire a permis l'aménagement d'un des réseaux routiers les plus denses d'Afrique et l'extension rapide de l'agriculture."
        }
      );

      customGuidanceSteps = [
        "1. Poser le cadre topographique général : relief plat et tabulaire incliné en pente douce du Nord vers le Sud.",
        "2. Citer la première unité : Les plaines littorales et côtières (au Sud, 0 à 50 m d'altitude).",
        "3. Citer la deuxième unité : Les plateaux (au Centre et au Nord, 200 à 500 m d'altitude, plus de 70% du pays).",
        "4. Citer la troisième unité : Les massifs montagneux (à l'Ouest, Mont Nimba 1 752 m et Mont Tonkoui 1 189 m).",
        "5. Synthétiser les atouts économiques majeurs de chaque zone dans un tableau mémo."
      ];

      customDetailedOutline = `1. Morphologie d'ensemble : Relief tabulaire incliné du Nord vers le Sud.\n2. Plaines côtières (Sud, 0-50 m) : cordons sableux, lagunes, falaises, ports d'Abidjan et San-Pédro.\n3. Plateaux (Centre/Nord, 200-500 m) : surfaces ondulées, inselbergs, cultures d'exportation.\n4. Montagnes (Ouest, > 1 000 m) : Mont Nimba (1 752 m), Mont Tonkoui (1 189 m), fer, café arabica.\n5. Tableau récapitulatif & atouts économiques.`;

      customStructuredRedaction = {
        planSummary: "1. Plaines Littorales (Sud) | 2. Plateaux (Centre & Nord) | 3. Montagnes (Ouest)",
        introduction: {
          amorce: "Le relief de la Côte d'Ivoire est dans son ensemble plat, tabulaire et monotone, sans barrière montagneuse infranchissable.",
          definitionTension: "Le territoire forme un plan incliné en pente douce depuis le Nord vers l'océan Atlantique au Sud.",
          problematique: "Quelles sont les trois unités géomorphologiques qui composent le relief ivoirien et leurs spécificités ?",
          annoncePlan: "La Côte d'Ivoire comprend trois grandes unités : les plaines côtières au Sud, les plateaux au Centre et au Nord, et les massifs montagneux à l'Ouest.",
          fullText: "Le relief de la Côte d'Ivoire est dans son ensemble plat, tabulaire et monotone, sans barrière montagneuse infranchissable. Le territoire forme un vaste plan incliné en pente douce depuis le Nord vers l'océan Atlantique au Sud. On distingue trois (3) grandes unités géomorphologiques : les plaines littorales au Sud, les plateaux au Centre et au Nord, et les massifs montagneux à l'Ouest."
        },
        development: {
          part1: {
            partNumber: 1,
            title: "1. Les Plaines côtières et littorales (au Sud : 0 à 50 m)",
            thesisOverview: "Basses terres bordant les 520 km de littoral sur l'océan Atlantique.",
            subParts: [
              {
                subPartLetter: "A",
                title: "Localisation et caractéristiques physiques",
                argument: "Elles s'étendent le long de la façade maritime avec des altitudes n'excédant pas 50 mètres.",
                explication: "On distingue à l'Est de Fresco une côte basse sablonneuse à lagunes (Ébrié, Aby) et à l'Ouest une côte rocheuse escarpée à falaises (Sassandra, San-Pédro).",
                illustration: {
                  auteur: "Milieu Physique Ivoirien",
                  oeuvre: "Géomorphologie Littorale",
                  citation: "Cordons littoraux et réseau lagunaire",
                  analyseIllustration: "Zone d'implantation des ports d'Abidjan et San-Pédro."
                },
                fullText: "Les plaines littorales s'étendent sur 520 km de côte avec des altitudes comprises entre 0 et 50 m. À l'Est de Fresco, la côte est sablonneuse et bordée d'un vaste chapelet de lagunes (Ébrié, Aby, Grand-Lahou). À l'Ouest de Fresco, elle devient rocheuse et accidentée de falaises et promontoires (Sassandra, San-Pédro)."
              },
              {
                subPartLetter: "B",
                title: "Rôle économique et atouts",
                argument: "Cette unité constitue le débouché maritime et le premier pôle économique du pays.",
                explication: "Elle accueille les deux grands ports du pays, la pêche, les activités balnéaires et les plantations industrielles (palmier à huile, hévéa).",
                illustration: {
                  auteur: "Économie Nationale",
                  oeuvre: "Façade Maritime",
                  citation: "Ports d'Abidjan et San-Pédro",
                  analyseIllustration: "Canaux indispensables du commerce extérieur."
                },
                fullText: "Sur le plan économique, cette frange littorale héberge les ports d'Abidjan et San-Pédro, véritables poumons économiques, ainsi que les grandes plantations d'hévéa et de palmier à huile."
              }
            ],
            fullText: "Les plaines côtières et littorales (au Sud : 0 à 50 m d'altitude) bordent l'océan Atlantique. À l'Est de Fresco, la côte est basse, sablonneuse et dotée d'un réseau lagunaire (Ébrié, Aby, Grand-Lahou). À l'Ouest de Fresco, la côte est rocheuse avec des falaises. Elles abritent les ports d'Abidjan et San-Pédro ainsi que les cultures d'hévéa et de palmier."
          },
          transition1: "Au-delà du cordon littoral, le territoire est largement dominé par les vastes plateaux de l'intérieur.",
          part2: {
            partNumber: 2,
            title: "2. Les Plateaux du Centre et du Nord (200 à 500 m : > 70 % du pays)",
            thesisOverview: "Immenses surfaces tabulaires et ondulées qui forment l'ossature géographique de la Côte d'Ivoire.",
            subParts: [
              {
                subPartLetter: "A",
                title: "Morphologie et collines résiduelles (inselbergs)",
                argument: "Les plateaux couvrent plus des deux tiers de la superficie nationale entre 200 et 500 m d'altitude.",
                explication: "Ces surfaces planes sont entrecoupées par les vallées fluviales et surmontées de collines granitiques isolées appelées inselbergs au pays Sénoufo et Baoulé.",
                illustration: {
                  auteur: "Géologie Ivoirienne",
                  oeuvre: "Socle précambrien",
                  citation: "Inselbergs du Centre et du Nord",
                  analyseIllustration: "Témoins d'une érosion séculaire sur le socle granitique."
                },
                fullText: "Les plateaux couvrent plus de 70 % de la Côte d'Ivoire, étagés entre 200 et 500 m. Ce sont des surfaces mollement ondulées surmontées de dômes granitiques résiduels appelés inselbergs."
              },
              {
                subPartLetter: "B",
                title: "Atouts agricoles et de communication",
                argument: "Les plateaux constituent le cœur de la production agricole vivrière et de rente.",
                explication: "Le Centre forestier accueille le cacao et le café, tandis que le Nord de savane produit le coton, l'anacarde et les céréales. Leur planéité a grandement facilité la création du réseau routier.",
                illustration: {
                  auteur: "Ministère de l'Agriculture",
                  oeuvre: "Bassins de production",
                  citation: "Cacao, café, anacarde et coton",
                  analyseIllustration: "Piliers de l'économie d'exportation ivoirienne."
                },
                fullText: "Les plateaux représentent le cœur agricole de la nation : cacao et café au Centre, coton, anacarde et élevage au Nord. Leur topographie plane a facilité le traçage des routes et de la ligne de chemin de fer."
              }
            ],
            fullText: "Les plateaux (Centre et Nord : 200 à 500 m) occupent plus de 70 % du territoire national. Surfaces mollement ondulées parsemées d'inselbergs, ils constituent le cœur agricole du pays (cacao/café au Sud-Forestier, anacarde/coton au Nord) et facilitent les voies de communication."
          },
          transition2: "À l'extrémité occidentale du pays, le relief s'élève vigoureusement en un ensemble montagneux remarquable.",
          part3: {
            partNumber: 3,
            title: "3. Les Montagnes et massifs montagneux de l'Ouest (> 1 000 m)",
            thesisOverview: "Reliefs accidentés et vigoureux concentrés dans la région de Man et le District des Montagnes.",
            subParts: [
              {
                subPartLetter: "A",
                title: "Sommets majeurs et point culminant",
                argument: "L'Ouest abrite la chaîne des 18 Montagnes avec des altitudes dépassant fréquemment 1 000 mètres.",
                explication: "Le point culminant de la Côte d'Ivoire est le Mont Nimba (1 752 m), complété par le Mont Tonkoui (1 189 m), le Mont Momi (1 302 m), le Mont Glo (1 100 m) et la Dent de Man (881 m).",
                illustration: {
                  auteur: "Topographie Nationale",
                  oeuvre: "District des Montagnes",
                  citation: "Mont Nimba (1 752 m, sommet national)",
                  analyseIllustration: "Relief le plus élevé et accidenté du pays."
                },
                fullText: "Situées à l'Ouest (région de Man), les montagnes dépassent souvent 1 000 m. Le Mont Nimba (1 752 m) est le point culminant de la Côte d'Ivoire, aux côtés du Mont Tonkoui (1 189 m) et de la Dent de Man."
              },
              {
                subPartLetter: "B",
                title: "Atouts économiques, climatiques et miniers",
                argument: "Cette zone montagneuse offre un climat d'altitude favorable, des réserves minières et un château d'eau naturel.",
                explication: "Elle permet la culture du café arabica et du maraîchage, recèle d'importants gisements de fer (Nimba, Klahoyo) et de nickel (Sipilou), et alimente les cours d'eau pérennes.",
                illustration: {
                  auteur: "Ressources Minières",
                  oeuvre: "Gisements de l'Ouest",
                  citation: "Fer des Monts Nimba et Nickel de Sipilou",
                  analyseIllustration: "Potentiel d'industrialisation lourde."
                },
                fullText: "La zone des montagnes bénéficie d'un climat frais propice au café arabica, recèle d'immenses gisements miniers (fer des monts Nimba, nickel de Sipilou) et constitue un puissant château d'eau naturel."
              }
            ],
            fullText: "Les montagnes de l'Ouest (région de Man) culminent au Mont Nimba (1 752 m), plus haut sommet de Côte d'Ivoire, complété par le Mont Tonkoui (1 189 m). Elles offrent un climat d'altitude pour le café arabica, de riches gisements miniers (fer, nickel) et un potentiel touristique et hydrographique."
          }
        },
        conclusion: {
          bilanSynthese: "En conclusion, le relief de la Côte d'Ivoire est très majoritairement tabulaire et plat (plaines et plateaux couvrant plus de 90 % de l'espace national), encadré à l'Ouest par le massif de Man.",
          reponseDefinitive: "Cette monotonie d'ensemble a représenté un atout géographique majeur pour l'unification spatiale, la circulation des personnes et des biens, et la mise en valeur agricole.",
          elargissement: "Le défi actuel réside dans la gestion durable des sols face au déboisement et à l'érosion pluviale.",
          fullText: "En conclusion, le relief de la Côte d'Ivoire est très majoritairement tabulaire et plat (plaines et plateaux couvrant plus de 90 % de l'espace national), encadré à l'Ouest par le massif de Man. Cette monotonie d'ensemble a représenté un atout géographique majeur pour l'unification spatiale, la circulation des personnes et des biens, et la mise en valeur agricole. Le défi actuel réside dans la gestion durable des sols face au déboisement et à l'érosion pluviale."
        }
      };
    } else {
      // 2. RÉPONSE UNIVERSELLE DE COURS STRUCTURÉE POUR TOUT AUTRE SUJET DIRECT
      const causesFormatted = (matchedLesson.causesOrFactors || []).map((c, idx) => `${idx + 1}. ${c}`).join("\n");
      const manifestationsFormatted = (matchedLesson.manifestationsOrDevelopments || []).map((m, idx) => `${idx + 1}. ${m}`).join("\n");
      const consequencesFormatted = (matchedLesson.consequencesOrEvaluation || []).map((e, idx) => `${idx + 1}. ${e}`).join("\n");
      const datesFormatted = Object.entries(matchedLesson.keyDatesOrStats || {}).slice(0, 6).map(([d, val]) => `• **${d}** : ${val}`).join("\n");

      fullDirectResponse = `### Restitution Méthodique : ${matchedLesson.lessonTitle}

#### 1. Éléments et facteurs fondamentaux :
${causesFormatted || "Voir notions clés du programme."}

---

#### 2. Manifestations, évolutions et repères concrets :
${manifestationsFormatted || "Voir détails institutionnels et historiques."}

---

#### 3. Bilan, portée et conséquences :
${consequencesFormatted || "Voir évaluation officielle."}

---

#### 4. Repères et données chiffrées officielles :
${datesFormatted || "Repères certifiés conformes au programme officiel."}`;

      steps.push(
        {
          stepName: "1. Facteurs et Fondements",
          description: "Origines et causes premières selon le cours.",
          content: causesFormatted || "Facteurs clés du programme."
        },
        {
          stepName: "2. Évolutions et Manifestations",
          description: "Déroulement concret et faits marquants.",
          content: manifestationsFormatted || "Développements certifiés."
        },
        {
          stepName: "3. Bilan et Portée",
          description: "Conséquences directes et perspectives d'avenir.",
          content: consequencesFormatted || "Bilan officiel."
        }
      );
    }
  }

  // F. Cas QUESTION DE COURS (générique)
  else {
    const causesFormatted = (matchedLesson.causesOrFactors || []).map(c => `• ${c}`).join("\n");
    const manifestationsFormatted = (matchedLesson.manifestationsOrDevelopments || []).map(m => `• ${m}`).join("\n");
    const consequencesFormatted = (matchedLesson.consequencesOrEvaluation || []).map(e => `• ${e}`).join("\n");

    steps.push(
      {
        stepName: "Synthèse Complète de la Leçon",
        description: "Explication claire et structurée du cours avec phrases simples et fluides.",
        content: `**Leçon : ${matchedLesson.lessonTitle}**\n\n**1. Causes et Fondements :**\n${causesFormatted || "Voir axes du cours."}\n\n**2. Manifestations et Évolutions :**\n${manifestationsFormatted || "Voir détails des événements."}\n\n**3. Bilan, Conséquences et Perspectives :**\n${consequencesFormatted || "Voir bilan officiel."}`
      }
    );
    conclusionFullText = `Cette synthèse couvre l'intégralité des points exigibles au Baccalauréat sur cette leçon.`;
    fullDirectResponse = `### Synthèse : ${matchedLesson.lessonTitle}\n\n**1. Causes et Fondements :**\n${causesFormatted}\n\n**2. Manifestations :**\n${manifestationsFormatted}\n\n**3. Bilan et Conséquences :**\n${consequencesFormatted}`;
  }

  const structuredRedaction: StructuredRedaction = {
    planSummary: `${matchedLesson.examDissertationPlan.axes[0]?.axeTitle || "Axe 1"} | ${matchedLesson.examDissertationPlan.axes[1]?.axeTitle || "Axe 2"}`,
    introduction: {
      amorce: introFullText.split(". ")[0] + ".",
      definitionTension: introFullText.split(". ")[1] || "",
      problematique: matchedLesson.examDissertationPlan.problemStatement,
      annoncePlan: introFullText.split(". ")[3] || "",
      fullText: introFullText || "Introduction méthodique."
    },
    development: {
      part1: {
        partNumber: 1,
        title: matchedLesson.examDissertationPlan.axes[0]?.axeTitle || "Partie 1",
        thesisOverview: matchedLesson.examDissertationPlan.axes[0]?.arguments[0] || "",
        subParts: (matchedLesson.examDissertationPlan.axes[0]?.arguments || []).map((arg, idx) => ({
          subPartLetter: ["A", "B", "C"][idx] || `${idx + 1}`,
          title: `Argument ${idx + 1}`,
          argument: arg,
          explication: `${arg} Analyse méthodique tirée du référentiel officiel.`,
          illustration: {
            auteur: "Programme Officiel HG",
            oeuvre: matchedLesson.lessonTitle,
            citation: Object.keys(matchedLesson.keyDatesOrStats)[idx] || "Repère officiel",
            analyseIllustration: Object.values(matchedLesson.keyDatesOrStats)[idx] || "Preuve factuelle vérifiée"
          },
          fullText: arg
        })),
        fullText: part1Full
      },
      transition1: transition1 || "Transition.",
      part2: {
        partNumber: 2,
        title: matchedLesson.examDissertationPlan.axes[1]?.axeTitle || "Partie 2",
        thesisOverview: matchedLesson.examDissertationPlan.axes[1]?.arguments[0] || "",
        subParts: (matchedLesson.examDissertationPlan.axes[1]?.arguments || []).map((arg, idx) => ({
          subPartLetter: ["A", "B", "C"][idx] || `${idx + 1}`,
          title: `Argument ${idx + 1}`,
          argument: arg,
          explication: `${arg} Examen critique et mise en perspective officielle.`,
          illustration: {
            auteur: "Programme Officiel HG",
            oeuvre: matchedLesson.lessonTitle,
            citation: Object.keys(matchedLesson.keyConcepts)[idx] || "Concept clé",
            analyseIllustration: Object.values(matchedLesson.keyConcepts)[idx] || "Définition certifiée"
          },
          fullText: arg
        })),
        fullText: part2Full
      }
    },
    conclusion: {
      bilanSynthese: conclusionFullText.split(". ")[0] + ".",
      reponseDefinitive: conclusionFullText.split(". ")[1] || "",
      elargissement: conclusionFullText.split(". ")[2] || "",
      fullText: conclusionFullText
    }
  };

  const toMethodologyAnalysisResult = (): MethodologyAnalysisResult => ({
    exerciseTypeIdentified: `${exerciseType} (${discipline} Terminale)`,
    disciplineIdentified: discipline,
    conceptualDisambiguation: {
      hasAmbiguousTerm: false,
      term: matchedLesson.lessonTitle,
      possibleMeanings: ["Programme officiel d'Histoire-Géographie Terminale"],
      retainedMeaning: "Référentiel MENETFP / École Numérique Côte d'Ivoire",
      justification: "Conformité stricte aux exigences de l'épreuve du Baccalauréat."
    },
    fasciculeMethodologyActivated: {
      name: exerciseType === "Question Directe / Restitution"
        ? `Méthodologie Officielle de Restitution Organisée (${discipline} Terminale)`
        : `Méthodologie Officielle de ${exerciseType} (${discipline} Terminale)`,
      description: `Traitement académique du sujet « ${statement} » selon les normes officielles du Baccalauréat ivoirien.`,
      stepsApplied: exerciseType === "Question Directe / Restitution"
        ? [
            "1. Délimitation stricte du champ de la question sans digression ni verbiage inutile.",
            "2. Énumération ordonnée, chiffrée et hiérarchisée des unités géographiques ou repères historiques.",
            "3. Précision des caractéristiques physiques, économiques ou historiques et tableau mémotechnique de synthèse."
          ]
        : [
            "1. Respect rigoureux de la structure officielle (Introduction, Développement équilibré, Conclusion).",
            "2. Mobilisation exacte des dates, statistiques, noms d'institutions et de traités sans aucune approximation.",
            "3. Formulation en phrases élégantes, claires et faciles à mémoriser."
          ]
    },
    sourceDecomposition: {
      fasciculeMethodologies: ["Guide méthodologique officiel HG Bac Côte d'Ivoire"],
      fasciculeKnowledgeUsed: Object.keys(matchedLesson.keyDatesOrStats),
      externalKnowledgeMobilized: Object.keys(matchedLesson.keyConcepts)
    },
    pedagogicalTransferExplanation: `Application directe des compétences disciplinaires de Terminale : analyse spatiale, contextualisation chronologique et argumentation structurée.`,
    level1Hint: exerciseType === "Question Directe / Restitution"
      ? `Identifie et nomme directement les composantes fondamentales de « ${matchedLesson.lessonTitle} » sans te perdre dans des développements hors sujet.`
      : `Rappelle-toi les repères fondamentaux de la leçon « ${matchedLesson.lessonTitle} » : dates, acteurs majeurs et articulations logiques du plan.`,
    level2Methodology: exerciseType === "Question Directe / Restitution"
      ? `Organise ta réponse par unités géographiques ou logiques ordonnées avec leurs altitudes, localisations et rôles socio-économiques.`
      : `Adopte une structure claire en parties équilibrées en reliant chaque argument à une donnée précise (date ou chiffre officiel).`,
    level3GuidanceSteps: customGuidanceSteps || [
      `1. Problématiser le sujet autour de : ${matchedLesson.examDissertationPlan.problemStatement}`,
      `2. Développer l'axe 1 : ${matchedLesson.examDissertationPlan.axes[0]?.axeTitle}`,
      `3. Rédiger la transition et développer l'axe 2 : ${matchedLesson.examDissertationPlan.axes[1]?.axeTitle}`,
      `4. Conclure par un bilan synthétique et une ouverture.`
    ],
    level4DetailedOutline: customDetailedOutline || `I. ${matchedLesson.examDissertationPlan.axes[0]?.axeTitle}\n${(matchedLesson.examDissertationPlan.axes[0]?.arguments || []).map(a => `  - ${a}`).join("\n")}\n\nII. ${matchedLesson.examDissertationPlan.axes[1]?.axeTitle}\n${(matchedLesson.examDissertationPlan.axes[1]?.arguments || []).map(a => `  - ${a}`).join("\n")}`,
    level5FullRedaction: fullDirectResponse || `${introFullText}\n\n${part1Full}\n\n${transition1}\n\n${part2Full}\n\n${conclusionFullText}`,
    structuredRedaction: customStructuredRedaction || structuredRedaction,
    stepByStepBreakdown: steps.map((s, idx) => ({
      stepNumber: idx + 1,
      stepTitle: s.stepName,
      methodologyRuleApplied: s.description,
      content: s.content,
      sourceTags: [matchedLesson.lessonTitle, discipline],
      pedagogicalTip: "Veille à la fluidité de la rédaction et à la précision des repères factuels."
    })),
    fullSynthesizedResponse: fullDirectResponse || `${introFullText}\n\n${part1Full}\n\n${transition1}\n\n${part2Full}\n\n${conclusionFullText}`,
    evaluationCriteria: [
      {
        criterion: "Pertinence et compréhension du sujet",
        fasciculeOrigin: true,
        scoreMax: 6,
        description: "Adéquation de la problématique et maîtrise du cadre spatio-temporel.",
        tipsForAutonomy: "Définis toujours les termes clés avant d'élaborer le questionnement."
      },
      {
        criterion: "Richesse et exactitude des connaissances",
        fasciculeOrigin: true,
        scoreMax: 8,
        description: "Exactitude des dates, chiffres et concepts du programme officiel.",
        tipsForAutonomy: "Appuie chaque argument sur au moins une date ou statistique précise."
      },
      {
        criterion: "Cohérence de l'argumentation et qualité d'expression",
        fasciculeOrigin: true,
        scoreMax: 6,
        description: "Clarté du plan, transitions logiques et style soigné sans jargon excessif.",
        tipsForAutonomy: "Privilégie des phrases simples, équilibrées et des connecteurs logiques évidents."
      }
    ],
    isDirectRestitution: exerciseType === "Question Directe / Restitution",
    isAcademicPaper: exerciseType === "Commentaire de Document" || exerciseType === "Dissertation" || exerciseType === "Situation d'Évaluation",
    academicPaperType: exerciseType === "Commentaire de Document" ? "Commentaire de Document" : "Dissertation",
    isFallback: false
  });

  const result: HgSolutionResult = {
    title: `${exerciseType} : ${matchedLesson.lessonTitle}`,
    discipline: discipline,
    lessonId: matchedLesson.id,
    lessonTitle: matchedLesson.lessonTitle,
    problemStatement: matchedLesson.examDissertationPlan.problemStatement,
    keyStatsAndDates: matchedLesson.keyDatesOrStats,
    keyConcepts: matchedLesson.keyConcepts,
    steps: steps,
    finalConclusion: conclusionFullText,
    toMethodologyAnalysisResult: toMethodologyAnalysisResult
  };

  return {
    success: true,
    classification: {
      discipline: discipline,
      lessonId: matchedLesson.id,
      lessonTitle: matchedLesson.lessonTitle,
      exerciseType: exerciseType,
      confidence: confidence
    },
    result: result,
    methodologyAnalysis: toMethodologyAnalysisResult(),
    pedagogicalMetadata: {
      level: matchedLesson.id.startsWith("hg-1ere") ? "Première" : "Terminale",
      discipline: discipline,
      examType: matchedLesson.id.startsWith("hg-1ere") ? "Programme Officiel Première Côte d'Ivoire" : "Baccalauréat Officiel Côte d'Ivoire"
    }
  };
}

export const solveHistoireGeo = solveHistoireGeoTle;
