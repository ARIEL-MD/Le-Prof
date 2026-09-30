import { francaisTleDissertationKnowledgeBase, LITERARY_VOCATIONS } from "../../francaisTleDissertationKnowledgeBase";
import { FrancaisPreliminaryWork, MethodologyAnalysisResult, StructuredRedaction } from "../../src/types";
import { francaisTleKnowledgeBase } from "../../src/data/francaisTleKnowledgeBase";
import { findOfficialAnnale, AnnaleItem } from "../../src/data/annalesFrancaisMahamatBase";
import { findKouadiaSubject, SecretFrancaisSubject } from "../../src/data/secretFrancaisBacKouadiaBase";
import { POETRY_FUNCTIONS_KNOWLEDGE_BASE, PoetryFunctionKey } from "../../src/data/poetryFunctionsKnowledgeBase";
import { THEATRE_FUNCTIONS_KNOWLEDGE_BASE, TheatreFunctionKey } from "../../src/data/theatreFunctionsKnowledgeBase";
import { findFomesoutraDissertationReference } from "../fomesoutraDissertationReference";

export interface FrancaisSolutionResult {
  title: string;
  genreOrTopic: string;
  problemStatement: string;
  thesis: string;
  antithesis: string;
  steps: {
    phaseName: string;
    instructions: string;
    exemplaryDraft: string;
  }[];
  finalConclusion: string;
  toMethodologyAnalysisResult: () => MethodologyAnalysisResult;
}

/**
 * Nettoie et extrait la citation ou pensée du sujet séparément de la consigne.
 * RÈGLE D'OR : On ne met JAMAIS la consigne dans l'introduction !
 */
function extractSubjectAndConsigne(raw: string): { citationPure: string; consigneIsolee: string } {
  const cleanRaw = raw.trim();
  const consigneRegex = /(expliqu(?:ez|er)|discut(?:ez|er)|comment(?:ez|er)|partagez[\s-]vous|qu'en pensez[\s-]vous|en vous appuyant sur|illustrez|analys(?:ez|er)|dans quelle mesure|justifi(?:ez|er)|dans un d[ée]veloppement|en vous r[ée]f[ée]rant)[^.?!]*[.?!]?/i;

  // Si le sujet contient des guillemets
  const quoteMatch = cleanRaw.match(/«([^»]+)»|"([^"]+)"/);
  if (quoteMatch) {
    const citation = (quoteMatch[1] || quoteMatch[2]).trim();
    const outsideQuote = cleanRaw.replace(quoteMatch[0], "").trim();
    const consigneMatch = outsideQuote.match(consigneRegex);
    const consigne = consigneMatch ? consigneMatch[0].trim() : (outsideQuote || "Expliquez et discutez cette affirmation en vous appuyant sur des œuvres littéraires.");
    return { citationPure: citation, consigneIsolee: consigne };
  }

  // Si pas de guillemets explicites, chercher la consigne vers la fin
  const match = cleanRaw.match(consigneRegex);
  if (match && match.index !== undefined && match.index > 15) {
    const citation = cleanRaw.substring(0, match.index).trim().replace(/[.:;,]+$/, "");
    const consigne = cleanRaw.substring(match.index).trim();
    return { citationPure: citation, consigneIsolee: consigne };
  }

  return {
    citationPure: cleanRaw.replace(/^«|»$/g, '').trim(),
    consigneIsolee: "Expliquez et discutez cette affirmation en vous appuyant sur des œuvres littéraires lues ou étudiées."
  };
}


/**
 * Variation rédactionnelle par requête.
 *
 * CONTRAT PÉDAGOGIQUE : le plan, la problématique, les idées, les œuvres et la
 * progression restent inchangés ; seule la formulation française varie.
 * Cela évite de servir un texte identique à deux utilisateurs sur le même sujet.
 */
function pickVariant<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function varyFrenchDissertationText(input: {
  citationPure: string;
  referenceReformulation: string;
  problemStatement: string;
  thesis: string;
  antithesis: string;
  part1ThesisOverview: string;
  transition1: string;
  part2ThesisOverview: string;
  bilanSynthese: string;
  reponseDefinitive: string;
  elargissement: string;
  part1SubParts: any[];
  part2SubParts: any[];
}) {
  const introOpeners = [
    "La littérature entretient depuis longtemps un lien étroit avec la société : elle permet de comprendre les hommes, de questionner leur époque et de donner forme aux émotions.",
    "Depuis des siècles, les œuvres littéraires ne cessent d'accompagner la vie humaine en donnant à voir les réalités du monde comme les mouvements de l'esprit.",
    "Qu'elle raconte la société, dénonce une injustice ou fasse rêver, la littérature occupe une place particulière dans la vie des hommes et dans leur manière de penser le monde.",
    "L'écriture littéraire ne se réduit pas à l'assemblage de belles phrases : elle peut également porter un regard sur la société et sur les préoccupations de son temps."
  ];
  const explanationOpeners = [
    "Autrement dit, cette affirmation revient à considérer que",
    "En d'autres termes, l'idée défendue ici est que",
    "Cette pensée peut donc être comprise comme l'affirmation selon laquelle",
    "Il faut entendre par là que"
  ];
  const questionOpeners = [
    "Dès lors, une interrogation s'impose :",
    "On peut alors se demander :",
    "Cette affirmation conduit ainsi à poser la question suivante :",
    "Il convient donc de s'interroger sur un point essentiel :"
  ];
  const planOpeners = [
    "Pour éclairer cette question, nous montrerons d'abord que",
    "Afin de répondre à cette interrogation, nous verrons en premier lieu que",
    "Notre réflexion commencera par établir que",
    "Dans un premier temps, il conviendra de montrer que"
  ];
  const planSecond = [
    "avant d'examiner, dans un second temps, en quoi",
    "puis nous mettrons en évidence le fait que",
    "pour considérer ensuite la manière dont",
    "avant de montrer également que"
  ];
  const axisOpeners = [
    "En premier lieu,",
    "Tout d'abord,",
    "Pour commencer,",
    "Dans un premier mouvement,"
  ];
  const axis2Openers = [
    "Dans un second temps,",
    "Par ailleurs,",
    "À présent,",
    "Dans une autre perspective,"
  ];
  const transitionOpeners = [
    "Toutefois, cette première fonction ne saurait épuiser à elle seule les possibilités de la littérature.",
    "Néanmoins, réduire l'œuvre littéraire à cet engagement reviendrait à négliger une autre dimension essentielle de l'écriture.",
    "Cependant, cette fonction engagée ne doit pas faire oublier que l'art littéraire possède également une vocation esthétique et imaginative.",
    "Pour autant, l'engagement n'est pas la seule voie offerte à l'écrivain : la littérature peut poursuivre d'autres finalités."
  ];
  const transitionQuestions = [
    "Dès lors, peut-on véritablement enfermer la littérature dans cette seule mission ?",
    "Faut-il pour autant réduire l'activité de l'écrivain à la défense d'une cause ?",
    "La création littéraire ne possède-t-elle pas également une dimension de plaisir, de beauté et d'évasion ?",
    "L'écrivain ne peut-il pas aussi chercher à émouvoir, divertir et faire rêver son lecteur ?"
  ];
  const conclusionOpeners = [
    "En définitive,",
    "Au terme de cette réflexion,",
    "À l'issue de notre analyse,",
    "En somme,"
  ];
  const conclusionLinks = [
    "Ainsi, ces deux dimensions ne s'excluent pas :",
    "Il ressort donc de cette étude que",
    "On comprend dès lors que",
    "La réflexion permet finalement de constater que"
  ];

  const intro = `${pickVariant(introOpeners)} ${pickVariant([`C'est dans cette perspective que l'on peut comprendre la formule : « ${input.citationPure} ».`, `Une telle conception apparaît dans l'affirmation suivante : « ${input.citationPure} ».`, `Cette idée est précisément formulée dans la citation : « ${input.citationPure} ».`])} ${pickVariant(explanationOpeners)} ${input.referenceReformulation.toLowerCase()} ${pickVariant(questionOpeners)} ${input.problemStatement} ${pickVariant(planOpeners)} ${input.thesis.toLowerCase()} ${pickVariant(planSecond)} ${input.antithesis.toLowerCase()}`;

  const part1Overview = `${pickVariant(axisOpeners)} nous montrerons que ${input.thesis.toLowerCase()}`;
  const transition = `${pickVariant(transitionOpeners)} ${pickVariant(transitionQuestions)}`;
  const part2Overview = `${pickVariant(axis2Openers)} nous verrons que ${input.antithesis.toLowerCase()}`;

  const varyParagraph = (sp: any) => {
    const connector = pickVariant(["En effet,", "De fait,", "À ce titre,", "Ainsi,", "De cette manière,"]);
    const explanationLink = pickVariant(["Cette idée se vérifie notamment dans", "Cette réalité apparaît clairement dans", "L'œuvre de cet auteur en fournit une illustration avec", "On en trouve une expression concrète dans"]);
    const ending = pickVariant([
      "Cet exemple montre ainsi la portée de cette fonction littéraire.",
      "Cette référence confirme donc l'importance de cette dimension de l'œuvre.",
      "L'exemple permet ainsi de mieux comprendre le rôle attribué à la littérature.",
      "On voit par là comment l'écriture peut donner une portée concrète à cette idée."
    ]);
    return `${connector} ${sp.argument} ${sp.explication} ${explanationLink} « ${sp.illustration?.oeuvre || "cette œuvre"} » de ${sp.illustration?.auteur || "l'auteur étudié"}. ${sp.illustration?.citation ? `L'auteur écrit notamment : ${sp.illustration.citation} ` : ""}${sp.illustration?.analyseIllustration || ""} ${ending}`.replace(/\s+/g, " ").trim();
  };

  const part1SubParts = input.part1SubParts.map(sp => ({ ...sp, fullText: varyParagraph(sp) }));
  const part2SubParts = input.part2SubParts.map(sp => ({ ...sp, fullText: varyParagraph(sp) }));
  const bilan = `${pickVariant(conclusionOpeners)} ${input.bilanSynthese.toLowerCase()}`;
  const response = `${pickVariant(conclusionLinks)} ${input.reponseDefinitive.toLowerCase()}`;
  const ending = pickVariant([
    input.elargissement,
    `Cette complémentarité rappelle enfin que ${input.elargissement.replace(/^Dès lors, comme le rappelait /i, "").replace(/^[^,]+, /, "")}`,
    `Cette conception rejoint finalement l'idée que ${input.elargissement.replace(/^Dès lors, comme le rappelait /i, "").replace(/^[^,]+, /, "")}`
  ]);

  return { intro, part1Overview, transition, part2Overview, part1SubParts, part2SubParts, bilan, response, ending };
}

/**
 * Assure qu'aucun mot « ou » ne figure dans la formulation du problème.
 * RÈGLE D'OR : Le problème ne doit comporter aucun mot 'ou'.
 */
function sanitizeProblemStatementWithoutOu(problem: string): string {
  // Remplacer les 'ou' isolés par 'et' ou restructurer la phrase
  let sanitized = problem.trim();
  if (/\bou\b/i.test(sanitized)) {
    sanitized = sanitized.replace(/\s+\bou\b\s+/gi, " et ");
  }
  return sanitized;
}


/** Direct literary-argument lookup: do not turn an argument search into a dissertation. */
export function searchLiteraryArguments(statement: string): string | null {
  const clean = statement.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (!/\b(?:argument|arguments)\b/i.test(clean)) return null;

  const genre = /\b(?:roman|romans|romancier|romanesque)\b/i.test(clean)
    ? "Roman"
    : /\b(?:poesie|poeme|poete)\b/i.test(clean)
      ? "Poésie"
      : /\b(?:theatre|theatral|dramaturge|piece|tragedie|comedie)\b/i.test(clean)
        ? "Théâtre"
        : null;
  if (!genre) return null;

  const study = francaisTleKnowledgeBase.literaryGenreStudy.find(g => g.genre === genre);
  if (!study) return null;

  let functions = study.functions;
  if (/engag|combat|militan|politique|injust|corruption|liberte|oppression/i.test(clean)) {
    const targeted = functions.filter(f => /engag|combat|critique|satir|polit/i.test(f.functionName));
    if (targeted.length) functions = targeted;
  } else if (/evasion|evasiv|fict|imaginaire|aventure/i.test(clean)) {
    const targeted = functions.filter(f => /evas|fict|ludiq/i.test(f.functionName));
    if (targeted.length) functions = targeted;
  } else if (/estheti|beaute|style/i.test(clean)) {
    const targeted = functions.filter(f => /estheti/i.test(f.functionName));
    if (targeted.length) functions = targeted;
  }

  const lines: string[] = [];
  let n = 1;
  for (const fnData of functions) {
    for (const item of fnData.argumentsAndExamples) {
      lines.push(`${n}. Argument : ${item.argument}`);
      lines.push(`Explication : ${item.explanation}`);
      if (item.author) lines.push(`Auteur : ${item.author}`);
      if (item.work) lines.push(`Œuvre : ${item.work}`);
      if (item.example) lines.push(`Exemple : ${item.example}`);
      lines.push("");
      n++;
    }
  }
  return lines.join("\n").replace(/\*{1,3}/g, "").trim();
}


function introFullTextFromVaried(amorce: string, citation: string, definition: string, problem: string, plan: string): string {
  const frames = [
    `${amorce} ${pickVariant(["C'est dans cette perspective que l'on peut comprendre", "Une telle vision trouve un écho dans", "Cette conception se retrouve dans"])} la citation ${citation}. ${definition} ${pickVariant(["Dès lors, une interrogation s'impose :", "On peut alors se demander :", "Il convient donc de s'interroger :"])} ${problem} ${plan}`,
    `${amorce} ${pickVariant(["La pensée proposée affirme :", "L'idée centrale apparaît dans la formule :", "Cette conception est résumée par la formule :"])} ${citation}. ${definition} ${pickVariant(["Cette affirmation conduit ainsi à poser la question suivante :", "Une question essentielle se dégage alors :", "Il faut dès lors examiner le problème suivant :"])} ${problem} ${plan}`
  ];
  return pickVariant(frames);
}

export function solveFrancaisTle(statement: string): {
  success: boolean;
  classification: {
    genreOrTopic: string;
    confidence: number;
  };
  result?: FrancaisSolutionResult;
  methodologyAnalysis?: MethodologyAnalysisResult;
  pedagogicalMetadata?: {
    level: string;
    discipline: string;
    examType: string;
  };
} {
  const clean = statement.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const { citationPure, consigneIsolee } = extractSubjectAndConsigne(statement);

  // Une recherche d'arguments est une intention documentaire, pas une demande de dissertation.
  const directArguments = searchLiteraryArguments(statement);
  if (directArguments) {
    const genre = /\b(?:roman|romans|romancier|romanesque)\b/i.test(clean)
      ? "Roman"
      : /\b(?:poesie|poeme|poete)\b/i.test(clean)
        ? "Poésie"
        : "Théâtre";
    const analysis: MethodologyAnalysisResult = {
      exerciseTypeIdentified: `Recherche directe — Arguments sur le ${genre.toLowerCase()}`,
      disciplineIdentified: "Français",
      fasciculeMethodologyActivated: {
        name: "Recherche d'arguments",
        description: "Argument → explication → illustration littéraire.",
        stepsApplied: ["Identifier la fonction littéraire.", "Donner l'argument.", "Donner l'explication.", "Associer une œuvre et un auteur."]
      },
      sourceDecomposition: {
        fasciculeMethodologies: ["Base locale de littérature"],
        fasciculeKnowledgeUsed: [],
        externalKnowledgeMobilized: []
      },
      pedagogicalTransferExplanation: "La demande est traitée comme une recherche documentaire : aucune dissertation complète n'est générée.",
      level1Hint: "Choisir l'argument qui répond au sujet.",
      level2Methodology: "Argument → explication → illustration.",
      level3GuidanceSteps: [],
      level4DetailedOutline: directArguments,
      level5FullRedaction: directArguments,
      structuredRedaction: {
        planSummary: `Arguments sur le ${genre.toLowerCase()}`,
        introduction: { amorce: "", definitionTension: "", problematique: "", annoncePlan: "", fullText: "" },
        development: {
          part1: { partNumber: 1, title: `Arguments sur le ${genre.toLowerCase()}`, thesisOverview: directArguments, subParts: [], fullText: directArguments },
          transition1: "",
          part2: { partNumber: 2, title: "", thesisOverview: "", subParts: [], fullText: "" }
        },
        conclusion: { bilanSynthese: "", reponseDefinitive: "", elargissement: "", fullText: "" }
      },
      stepByStepBreakdown: [],
      fullSynthesizedResponse: directArguments,
      evaluationCriteria: [],
      isDirectRestitution: true
    };
    return {
      success: true,
      classification: { genreOrTopic: `Le ${genre} — arguments`, confidence: 0.99 },
      result: {
        title: `Arguments sur le ${genre.toLowerCase()}`,
        genreOrTopic: `Le ${genre}`,
        problemStatement: "",
        thesis: "",
        antithesis: "",
        steps: [{ phaseName: "Arguments", instructions: "Argument → explication → illustration.", exemplaryDraft: directArguments }],
        finalConclusion: "",
        toMethodologyAnalysisResult: () => analysis
      },
      methodologyAnalysis: analysis,
      pedagogicalMetadata: { level: "Terminale", discipline: "Français", examType: "Recherche d'arguments" }
    };
  }

  // Calibration prioritaire sur le corpus documentaire Fomesoutra :
  // sujet -> reformulation -> problème scolaire -> 2 axes.
  // Ce chemin est déterministe et ne fait appel à aucune IA/API d'IA.
  const fomesoutraReference = findFomesoutraDissertationReference(statement);

  // Base spécialisée : fonctions du théâtre. Les faits bibliographiques sont fixes.
  if (/fonction(?:s)? du théâtre|fonctions du théâtre|fonction lyrique.*théâtre|fonction esthétique.*théâtre|fonction esthetique.*théâtre|fonction évasive.*théâtre|fonction evasive.*théâtre|fonction fictive.*théâtre|fonction ludique.*théâtre|fonction didactique.*théâtre|fonction engagée.*théâtre|fonction engagee.*théâtre|fonction satirique.*théâtre/i.test(statement)) {
    const normalized = clean;
    const aliases: Array<[TheatreFunctionKey, RegExp]> = [
      ['lyrique', /lyrique|lyrisme/],
      ['esthetique', /esthetique/],
      ['evasive_fictive', /evasive|fictive|evasion|imaginaire/],
      ['ludique', /ludique|divertir|comique|quiproquo/],
      ['didactique', /didactique|instruire|reflechir|lecon/],
      ['engagee', /engagee|engagement|denonce|injustice|liberte|racisme|colonial/],
      ['satirique', /satirique|satire|ironie|caricature/],
    ];
    const selected = aliases.filter(([, pattern]) => pattern.test(normalized)).map(([key]) => key);
    const functions = selected.length ? THEATRE_FUNCTIONS_KNOWLEDGE_BASE.filter(item => selected.includes(item.key)) : THEATRE_FUNCTIONS_KNOWLEDGE_BASE;
    const blocks = functions.map((fn) => {
      const argumentsText = fn.arguments.map((item) =>
        `Argument : ${item.argument}\nExplication : ${item.explanation}\nAuteur : ${item.example.author}\nŒuvre : ${item.example.work}\nExemple : ${item.example.detail}`
      ).join('\n\n');
      return `## ${fn.title}\n${fn.definition}\n\n${argumentsText}`;
    }).join('\n\n');
    const analysis: MethodologyAnalysisResult = {
      exerciseTypeIdentified: 'Base de connaissances — Fonctions du théâtre',
      disciplineIdentified: 'Français',
      conceptualDisambiguation: { hasAmbiguousTerm: false, term: 'Fonctions du théâtre', possibleMeanings: functions.map(f => f.title), retainedMeaning: 'Fonctions littéraires et scéniques du théâtre utilisées pour construire des arguments de dissertation.', justification: 'Correspondance directe avec une base pédagogique spécialisée et structurée.' },
      fasciculeMethodologyActivated: { name: 'Méthode argumentative — théâtre', description: 'Argument → explication → exemple littéraire vérifié → phrase à retenir.', stepsApplied: ['Choisir la fonction pertinente.', 'Formuler un argument distinct.', 'Expliquer simplement.', 'Associer une pièce et un auteur vérifiés.', 'Retenir une formulation courte.'] },
      sourceDecomposition: { fasciculeMethodologies: ['Base locale des fonctions du théâtre'], fasciculeKnowledgeUsed: functions.flatMap(f => f.arguments.map(a => `${a.example.author} — ${a.example.work}`)), externalKnowledgeMobilized: [] },
      pedagogicalTransferExplanation: 'Les variantes modifient uniquement la formulation pédagogique ; les faits littéraires restent fixes.',
      level1Hint: 'Mémoriser la fonction puis l’idée principale.',
      level2Methodology: 'Pour chaque argument : idée claire → explication → exemple précis → pièce → auteur → phrase à retenir.',
      level3GuidanceSteps: functions.map((f, i) => `${i + 1}. ${f.title} : ${f.arguments.length} arguments structurés.`),
      level4DetailedOutline: blocks.slice(0, 3000),
      level5FullRedaction: blocks,
      structuredRedaction: { planSummary: functions.map(f => f.title).join(' | '), introduction: { amorce: '', definitionTension: 'Fonctions du théâtre', problematique: 'Comment le théâtre peut-il associer expression, spectacle, réflexion et critique ?', annoncePlan: functions.map(f => f.title).join(' ; '), fullText: '' }, development: { part1: { partNumber: 1, title: functions[0]?.title || 'Fonctions du théâtre', thesisOverview: functions[0]?.definition || '', subParts: (functions[0]?.arguments || []).map(a => ({ subPartLetter: 'A', title: a.argument, argument: a.argument, explication: a.explanation, illustration: { auteur: a.example.author, oeuvre: a.example.work, citation: '', analyseIllustration: a.example.detail }, fullText: `${a.argument} ${a.explanation} ${a.example.detail}` })), fullText: blocks }, transition1: '', part2: { partNumber: 2, title: functions[1]?.title || '', thesisOverview: functions[1]?.definition || '', subParts: [], fullText: '' } }, conclusion: { bilanSynthese: '', reponseDefinitive: '', elargissement: '', fullText: '' } },
      stepByStepBreakdown: [],
      fullSynthesizedResponse: blocks,
      evaluationCriteria: []
    };
    return {
      success: true,
      classification: { genreOrTopic: 'Théâtre — fonctions littéraires et scéniques', confidence: 0.99 },
      result: { title: 'Fonctions du théâtre — base argumentative', genreOrTopic: 'Théâtre', problemStatement: 'Comment le théâtre peut-il associer expression, spectacle, réflexion et critique ?', thesis: functions[0]?.definition || '', antithesis: functions[1]?.definition || '', steps: [{ phaseName: 'Base de connaissances', instructions: 'Argument → explication → exemple → œuvre → auteur → phrase à retenir.', exemplaryDraft: blocks }], finalConclusion: 'Base structurée prête pour la dissertation littéraire.', toMethodologyAnalysisResult: () => analysis },
      methodologyAnalysis: analysis,
      pedagogicalMetadata: { level: 'Terminale', discipline: 'Français', examType: 'Dissertation littéraire' }
    };
  }

  // Base spécialisée : fonctions de la poésie. Les faits bibliographiques
  // sont fixes ; seules les formulations pédagogiques peuvent varier.
  if (/fonction(?:s)? de la poésie|fonctions de la poésie|fonction lyrique|fonction esthétique|fonction esthetique|fonction évasive|fonction evasive|fonction fictive|fonction ludique|fonction didactique|fonction engagée|fonction engagee/i.test(statement)) {
    const normalized = clean;
    const aliases: Array<[PoetryFunctionKey, RegExp]> = [
      ['lyrique', /lyrique|lyrisme/],
      ['esthetique', /esthetique/],
      ['evasive_fictive', /evasive|fictive|evasion/],
      ['ludique', /ludique|jeu avec les mots/],
      ['didactique', /didactique|instruire|morale/],
      ['engagee', /engagee|engagement|denonce|resistance|liberte/]
    ];
    const selected = aliases.filter(([, pattern]) => pattern.test(normalized)).map(([key]) => key);
    const functions = selected.length
      ? POETRY_FUNCTIONS_KNOWLEDGE_BASE.filter((item) => selected.includes(item.key))
      : POETRY_FUNCTIONS_KNOWLEDGE_BASE;
    const blocks = functions.map((fn) => {
      const argumentsText = fn.arguments.map((item) =>
        `Argument : ${item.argument}\nExplication : ${item.explanation}\nAuteur : ${item.example.author}\nŒuvre : ${item.example.work}\nExemple : ${item.example.detail}`
      ).join('\n\n');
      return `## ${fn.title}\n${fn.definition}\n\n${argumentsText}`;
    }).join('\n\n');
    const analysis: MethodologyAnalysisResult = {
      exerciseTypeIdentified: 'Base de connaissances — Fonctions de la poésie',
      disciplineIdentified: 'Français',
      conceptualDisambiguation: { hasAmbiguousTerm: false, term: 'Fonctions de la poésie', possibleMeanings: functions.map((f) => f.title), retainedMeaning: 'Fonctions littéraires de la poésie utilisées pour construire des arguments de dissertation.', justification: 'Correspondance directe avec une base pédagogique spécialisée et structurée.' },
      fasciculeMethodologyActivated: { name: 'Méthode argumentative — poésie', description: 'Argument → explication → exemple littéraire vérifié → phrase à retenir.', stepsApplied: ['Choisir la fonction pertinente.', 'Formuler un argument distinct.', 'Expliquer simplement.', 'Associer une œuvre et un auteur vérifiés.', 'Retenir une formulation courte.'] },
      sourceDecomposition: { fasciculeMethodologies: ['Base locale des fonctions de la poésie'], fasciculeKnowledgeUsed: functions.flatMap((f) => f.arguments.map((a) => `${a.example.author} — ${a.example.work}`)), externalKnowledgeMobilized: [] },
      pedagogicalTransferExplanation: 'Les variantes modifient uniquement la formulation pédagogique ; les faits bibliographiques restent fixes.',
      level1Hint: 'Mémoriser la fonction puis l’idée principale.',
      level2Methodology: 'Pour chaque argument : idée claire → explication → exemple précis → phrase à retenir.',
      level3GuidanceSteps: functions.map((f, i) => `${i + 1}. ${f.title} : ${f.arguments.length} arguments structurés.`),
      level4DetailedOutline: blocks.slice(0, 3000),
      level5FullRedaction: blocks,
      structuredRedaction: { planSummary: functions.map((f) => f.title).join(' | '), introduction: { amorce: '', definitionTension: 'Fonctions de la poésie', problematique: 'Comment les différentes fonctions de la poésie permettent-elles de construire des arguments littéraires solides ?', annoncePlan: functions.map((f) => f.title).join(' ; '), fullText: '' }, development: { part1: { partNumber: 1, title: functions[0]?.title || 'Fonctions de la poésie', thesisOverview: functions[0]?.definition || '', subParts: (functions[0]?.arguments || []).map((a) => ({ subPartLetter: 'A', title: a.argument, argument: a.argument, explication: a.explanation, illustration: { auteur: a.example.author, oeuvre: a.example.work, citation: '', analyseIllustration: a.example.detail }, fullText: `${a.argument} ${a.explanation} ${a.example.detail}` })), fullText: blocks }, transition1: '', part2: { partNumber: 2, title: functions[1]?.title || '', thesisOverview: functions[1]?.definition || '', subParts: [], fullText: '' } }, conclusion: { bilanSynthese: '', reponseDefinitive: '', elargissement: '', fullText: '' } },
      stepByStepBreakdown: [],
      fullSynthesizedResponse: blocks,
      evaluationCriteria: []
    };
    return {
      success: true,
      classification: { genreOrTopic: 'Poésie — fonctions littéraires', confidence: 0.99 },
      result: { title: 'Fonctions de la poésie — base argumentative', genreOrTopic: 'Poésie', problemStatement: 'Comment les différentes fonctions de la poésie permettent-elles de construire des arguments de dissertation ?', thesis: functions[0]?.definition || '', antithesis: functions[1]?.definition || '', steps: [{ phaseName: 'Base de connaissances', instructions: 'Argument → explication → exemple → œuvre → auteur → phrase à retenir.', exemplaryDraft: blocks }], finalConclusion: 'Base structurée prête pour la dissertation littéraire.', toMethodologyAnalysisResult: () => analysis },
      methodologyAnalysis: analysis,
      pedagogicalMetadata: { level: 'Terminale', discipline: 'Français', examType: 'Dissertation littéraire' }
    };
  }

  // 0. CAS PRIORITAIRE : Sujet correspondant à une annale officielle vérifiée (BAC / Fascicules d'excellence)
  const matchedAnnale = findOfficialAnnale(statement);
  if (matchedAnnale) {
    const isCommentaire = matchedAnnale.type === "commentaire_compose";
    const planSummary = matchedAnnale.developpement.parties.map(p => p.titre).join(" | ");
    const introFullText = matchedAnnale.introduction.texteComplet;
    const part1Title = matchedAnnale.developpement.parties[0]?.titre || "Axe I";
    const part1Full = matchedAnnale.developpement.parties[0]?.contenu || "";
    const part2Title = matchedAnnale.developpement.parties[1]?.titre || "Axe II";
    const part2Full = matchedAnnale.developpement.parties[1]?.contenu || "";
    const conclusionFullText = matchedAnnale.conclusion.texteComplet;
    const fullRedactionText = `${introFullText}\n\n${part1Full}\n\n${part2Full}\n\n${conclusionFullText}`;

    const structuredRedaction: StructuredRedaction = {
      planSummary,
      introduction: {
        amorce: matchedAnnale.introduction.amorce || matchedAnnale.introduction.presentation || "",
        definitionTension: matchedAnnale.introduction.themesOuCentresInteret?.join(" et ") || "",
        problematique: matchedAnnale.introduction.problematique || (isCommentaire ? "Quels enjeux dramatiques, stylistiques et éthiques sous-tendent cet extrait ?" : "Dans quelle mesure cette analyse éclaire-t-elle la condition humaine et sociale ?"),
        annoncePlan: matchedAnnale.introduction.annoncePlan,
        fullText: introFullText
      },
      development: {
        part1: {
          partNumber: 1,
          title: part1Title,
          thesisOverview: part1Title,
          subParts: [
            {
              subPartLetter: "A",
              title: part1Title,
              argument: part1Title,
              explication: part1Full,
              illustration: {
                auteur: matchedAnnale.author,
                oeuvre: matchedAnnale.work || "",
                citation: matchedAnnale.developpement.parties[0]?.citationsEtProcedes?.[0] || "",
                analyseIllustration: "Procédés littéraires et portée sémantique analysés avec rigueur."
              },
              fullText: part1Full
            }
          ],
          fullText: part1Full
        },
        transition1: "Ainsi, après avoir mis en lumière cette première dimension fondamentale du texte, il convient d'en approfondir la seconde perspective.",
        part2: {
          partNumber: 2,
          title: part2Title,
          thesisOverview: part2Title,
          subParts: [
            {
              subPartLetter: "A",
              title: part2Title,
              argument: part2Title,
              explication: part2Full,
              illustration: {
                auteur: matchedAnnale.author,
                oeuvre: matchedAnnale.work || "",
                citation: matchedAnnale.developpement.parties[1]?.citationsEtProcedes?.[0] || "",
                analyseIllustration: "Procédés stylistiques et portée thématique interprétés."
              },
              fullText: part2Full
            }
          ],
          fullText: part2Full
        }
      },
      conclusion: {
        bilanSynthese: matchedAnnale.conclusion.bilan,
        reponseDefinitive: matchedAnnale.conclusion.bilan,
        elargissement: matchedAnnale.conclusion.ouverture,
        fullText: conclusionFullText
      }
    };

    const steps = [
      {
        phaseName: isCommentaire ? "1. Détermination des Centres d'Intérêt & Analyse du Contexte" : "1. Analyse du Sujet & Problématisation sans 'ou'",
        instructions: isCommentaire 
          ? "Situer l'extrait dans l'œuvre, identifier l'auteur, la date de parution et formuler deux centres d'intérêt majeurs."
          : "Isoler la citation hors de l'amorce, définir les notions clés et poser la problématique sans le mot 'ou'.",
        exemplaryDraft: isCommentaire
          ? `• Auteur : ${matchedAnnale.author} | Œuvre : ${matchedAnnale.work || "Texte d'auteur"}\n• Centres d'intérêt : 1. ${matchedAnnale.developpement.parties[0]?.titre} ; 2. ${matchedAnnale.developpement.parties[1]?.titre}`
          : `• Citation : « ${matchedAnnale.subjectExcerpt} »\n• Problématique : ${matchedAnnale.introduction.problematique || "Question philosophique et littéraire posée."}`
      },
      {
        phaseName: "2. Introduction Méthodique Complète",
        instructions: isCommentaire
          ? "Présentation de l'auteur et de l'œuvre -> Situation du passage -> Dégagement des centres d'intérêt -> Annonce du plan."
          : "Amorce -> Énoncé de la citation sans consigne -> Explication -> Problématique sans 'ou' -> Annonce du plan.",
        exemplaryDraft: introFullText
      },
      {
        phaseName: `3. Axe I — ${part1Title}`,
        instructions: "Développement méthodique articulant argument, citations textuelles, analyse des procédés et portée littéraire.",
        exemplaryDraft: part1Full
      },
      {
        phaseName: `4. Axe II — ${part2Title}`,
        instructions: "Approfondissement dialectique ou second centre d'intérêt avec citations, figures de style et démonstration.",
        exemplaryDraft: part2Full
      },
      {
        phaseName: "5. Conclusion & Élargissement",
        instructions: "Bilan équilibré des axes d'analyse -> Portée universelle de l'œuvre -> Ouverture littéraire pertinente.",
        exemplaryDraft: conclusionFullText
      }
    ];

    const methodologyAnalysis: MethodologyAnalysisResult = {
      exerciseTypeIdentified: isCommentaire ? "Commentaire Composé (Annale Officielle)" : "Dissertation Littéraire (Annale Officielle)",
      disciplineIdentified: "Français",
      conceptualDisambiguation: {
        hasAmbiguousTerm: false,
        term: matchedAnnale.title,
        possibleMeanings: [matchedAnnale.sessionOrReference],
        retainedMeaning: "Annale officielle du Baccalauréat avec corrigé rédigé certifié conforme aux normes d'inspection.",
        justification: `Sujet tiré du corpus officiel : ${matchedAnnale.sessionOrReference}`
      },
      fasciculeMethodologyActivated: {
        name: `Méthodologie Officielle du ${isCommentaire ? "Commentaire Composé" : "la Dissertation Littéraire"} (${matchedAnnale.sessionOrReference})`,
        description: `Corrigé intégral et méthodique issu du recueil officiel d'annales du Baccalauréat. Auteur étudié : ${matchedAnnale.author}.`,
        stepsApplied: [
          "1. Respect strict des règles académiques : aucun 'ou' dans la problématique, aucune consigne dans l'introduction.",
          "2. Plan en 2 axes équilibrés avec exploitation détaillée des citations et procédés stylistiques.",
          "3. Rédaction continue prête pour l'examen avec alinéas et transitions soignées."
        ]
      },
      sourceDecomposition: {
        fasciculeMethodologies: [`Annales Officielles du Baccalauréat — ${matchedAnnale.sessionOrReference}`],
        fasciculeKnowledgeUsed: [matchedAnnale.author, matchedAnnale.work || "Œuvre au programme"],
        externalKnowledgeMobilized: matchedAnnale.keywords
      },
      pedagogicalTransferExplanation: `Ce devoir corrigé respecte scrupuleusement les exigences des correcteurs du Baccalauréat. Référence : ${matchedAnnale.sessionOrReference}.`,
      level1Hint: `Retenez les deux axes majeurs : d'abord « ${part1Title} », puis « ${part2Title} ».`,
      level2Methodology: steps.map(s => `${s.phaseName} : ${s.instructions}`).join("\n"),
      level3GuidanceSteps: steps.map((s, i) => `${i + 1}. ${s.phaseName} : ${s.instructions}`),
      level4DetailedOutline: `I. INTRODUCTION\n${introFullText.slice(0, 160)}...\n\nII. DÉVELOPPEMENT\n1. ${part1Title}\n2. ${part2Title}\n\nIII. CONCLUSION\n${conclusionFullText.slice(0, 140)}...`,
      level5FullRedaction: fullRedactionText,
      structuredRedaction,
      stepByStepBreakdown: steps.map((s, idx) => ({
        stepNumber: idx + 1,
        stepTitle: s.phaseName,
        methodologyRuleApplied: s.instructions,
        content: s.exemplaryDraft,
        sourceTags: ["Français", matchedAnnale.sessionOrReference, matchedAnnale.author],
        pedagogicalTip: isCommentaire ? "Pour chaque citation, précisez toujours le procédé stylistique (métaphore, répétition, interrogation)." : "Chaque argument doit être illustré d'un exemple précis d'auteur avec analyse."
      })),
      fullSynthesizedResponse: fullRedactionText,
      evaluationCriteria: [
        {
          criterion: isCommentaire ? "Compréhension et centres d'intérêt" : "Compréhension du sujet",
          fasciculeOrigin: true,
          scoreMax: 6,
          description: "Centres d'intérêt pertinents et conformité aux règles d'introduction.",
          tipsForAutonomy: "Ne jamais faire de paraphrase dans un commentaire composé."
        },
        {
          criterion: "Analyse littéraire et stylistique",
          fasciculeOrigin: true,
          scoreMax: 6,
          description: "Présence de citations textuelles exactes et analyse des figures de style.",
          tipsForAutonomy: "Associez toujours le fond et la forme."
        },
        {
          criterion: "Qualité de l'expression et de l'enchaînement",
          fasciculeOrigin: true,
          scoreMax: 6,
          description: "Clarté du style, richesse du vocabulaire et transitions équilibrées.",
          tipsForAutonomy: "Utilisez des connecteurs logiques variés."
        },
        {
          criterion: "Présentation de la copie",
          fasciculeOrigin: true,
          scoreMax: 2,
          description: "Texte soigné avec alinéas visibles et absence de titres apparents dans la copie finale.",
          tipsForAutonomy: "Rédigez d'un trait sans faire figurer les numéros de parties."
        }
      ],
      isFallback: false
    };

    const solutionResult: FrancaisSolutionResult = {
      title: matchedAnnale.title,
      genreOrTopic: matchedAnnale.work || matchedAnnale.title,
      problemStatement: matchedAnnale.introduction.problematique || (isCommentaire ? "Quels sont les enjeux littéraires du passage ?" : "Problématique littéraire"),
      thesis: part1Title,
      antithesis: part2Title,
      steps,
      finalConclusion: conclusionFullText,
      toMethodologyAnalysisResult: () => methodologyAnalysis
    };

    return {
      success: true,
      classification: {
        genreOrTopic: matchedAnnale.work || matchedAnnale.title,
        confidence: 0.99
      },
      result: solutionResult,
      methodologyAnalysis,
      pedagogicalMetadata: {
        level: matchedAnnale.level || "Terminale A, C, D",
        discipline: "Français",
        examType: matchedAnnale.sessionOrReference
      }
    };
  }

  // 0.bis CAS PRIORITAIRE : Sujet extrait du manuel d'excellence "SECRET FRANÇAIS BAC" (Kouadia Nahounou Félix)
  const matchedKouadia = findKouadiaSubject(statement);
  if (matchedKouadia) {
    const isCommentaire = matchedKouadia.category === "commentaire_compose";
    const planSummary = matchedKouadia.developpement.parties.map(p => p.titre).join(" | ");
    const introFullText = matchedKouadia.introduction.fullText;
    const part1Title = matchedKouadia.developpement.parties[0]?.titre || "Axe I";
    const part1Full = matchedKouadia.developpement.parties[0]?.fullText || matchedKouadia.developpement.parties[0]?.sousParties.map(sp => `${sp.argument} ${sp.explication}`).join("\n\n") || "";
    const part2Title = matchedKouadia.developpement.parties[1]?.titre || "Axe II";
    const part2Full = matchedKouadia.developpement.parties[1]?.fullText || matchedKouadia.developpement.parties[1]?.sousParties.map(sp => `${sp.argument} ${sp.explication}`).join("\n\n") || "";
    const conclusionFullText = matchedKouadia.conclusion.fullText;
    const fullRedactionText = `${introFullText}\n\n${part1Full}\n\n${part2Full}\n\n${conclusionFullText}`;

    const part1SubParts = matchedKouadia.developpement.parties[0]?.sousParties.map((sp, idx) => ({
      subPartLetter: String.fromCharCode(65 + idx),
      title: sp.titre,
      argument: sp.argument,
      explication: sp.explication,
      illustration: {
        auteur: matchedKouadia.authorOrSource,
        oeuvre: matchedKouadia.work || "",
        citation: sp.exemplesEtCitations[0] || "",
        analyseIllustration: sp.exemplesEtCitations[1] || "Exemple littéraire et procédé stylistique démontrés."
      },
      fullText: `${sp.argument} ${sp.explication} ${sp.exemplesEtCitations.join(" ")}`
    })) || [];

    const part2SubParts = matchedKouadia.developpement.parties[1]?.sousParties.map((sp, idx) => ({
      subPartLetter: String.fromCharCode(65 + idx),
      title: sp.titre,
      argument: sp.argument,
      explication: sp.explication,
      illustration: {
        auteur: matchedKouadia.authorOrSource,
        oeuvre: matchedKouadia.work || "",
        citation: sp.exemplesEtCitations[0] || "",
        analyseIllustration: sp.exemplesEtCitations[1] || "Exemple littéraire et procédé stylistique démontrés."
      },
      fullText: `${sp.argument} ${sp.explication} ${sp.exemplesEtCitations.join(" ")}`
    })) || [];

    const structuredRedaction: StructuredRedaction = {
      planSummary,
      introduction: {
        amorce: matchedKouadia.introduction.amorce,
        definitionTension: matchedKouadia.introduction.citationEtExplication,
        problematique: matchedKouadia.problematique || matchedKouadia.introduction.problematique,
        annoncePlan: matchedKouadia.introduction.annoncePlan,
        fullText: introFullText
      },
      development: {
        part1: {
          partNumber: 1,
          title: part1Title,
          thesisOverview: part1Title,
          subParts: part1SubParts,
          fullText: part1Full
        },
        transition1: matchedKouadia.developpement.parties[0]?.transition || "Ainsi, après avoir examiné cette première perspective, il convient d'en analyser les prolongements essentiels.",
        part2: {
          partNumber: 2,
          title: part2Title,
          thesisOverview: part2Title,
          subParts: part2SubParts,
          fullText: part2Full
        }
      },
      conclusion: {
        bilanSynthese: matchedKouadia.conclusion.bilan,
        reponseDefinitive: matchedKouadia.conclusion.jugement,
        elargissement: matchedKouadia.conclusion.ouverture,
        fullText: conclusionFullText
      }
    };

    const steps = [
      {
        phaseName: isCommentaire ? "1. Détermination des Centres d'Intérêt & Contexte Littéraire" : "1. Analyse du Sujet & Problématisation sans 'ou'",
        instructions: isCommentaire
          ? "Situer l'extrait dans l'œuvre de l'auteur et formuler les deux centres d'intérêt majeurs."
          : "Analyser les termes du sujet, expliciter la citation sans la consigne et poser la problématique sans 'ou'.",
        exemplaryDraft: isCommentaire
          ? `• Auteur : ${matchedKouadia.authorOrSource} | Œuvre : ${matchedKouadia.work || "Texte d'auteur"}\n• Centres d'intérêt : 1. ${part1Title} ; 2. ${part2Title}`
          : `• Citation : « ${matchedKouadia.statement} »\n• Problématique : ${matchedKouadia.problematique || matchedKouadia.introduction.problematique}`
      },
      {
        phaseName: "2. Introduction Méthodique Complète",
        instructions: isCommentaire
          ? "Présentation de l'auteur et de l'œuvre -> Situation du passage -> Centres d'intérêt -> Annonce du plan."
          : "Amorce -> Citation sans consigne -> Explication -> Problématique sans 'ou' -> Annonce du plan.",
        exemplaryDraft: introFullText
      },
      {
        phaseName: `3. Axe I — ${part1Title}`,
        instructions: "Développement méthodique articulant arguments littéraires, citations textuelles et démonstration.",
        exemplaryDraft: part1Full
      },
      {
        phaseName: `4. Axe II — ${part2Title}`,
        instructions: "Second axe d'analyse ou approfondissement dialectique avec citations et procédés stylistiques.",
        exemplaryDraft: part2Full
      },
      {
        phaseName: "5. Conclusion & Élargissement",
        instructions: "Bilan synthétique -> Jugement critique -> Élargissement littéraire pertinent.",
        exemplaryDraft: conclusionFullText
      }
    ];

    const methodologyAnalysis: MethodologyAnalysisResult = {
      exerciseTypeIdentified: isCommentaire ? "Commentaire Composé (Secret Français Bac)" : "Dissertation Littéraire (Secret Français Bac)",
      disciplineIdentified: "Français",
      conceptualDisambiguation: {
        hasAmbiguousTerm: false,
        term: matchedKouadia.title,
        possibleMeanings: [matchedKouadia.themeOrGenre],
        retainedMeaning: "Corrigé modèle rédigé issu du recueil de référence 'SECRET FRANÇAIS BAC' (Kouadia Nahounou Félix).",
        justification: `Source certifiée : ${matchedKouadia.authorOrSource}`
      },
      fasciculeMethodologyActivated: {
        name: `Méthodologie d'Excellence — Secret Français Bac (${isCommentaire ? "Commentaire Composé" : "Dissertation Littéraire"})`,
        description: `Corrigé intégral et méthodique issu du manuel de référence 'SECRET FRANÇAIS BAC' par Kouadia Nahounou Félix. Thème : ${matchedKouadia.themeOrGenre}.`,
        stepsApplied: [
          "1. Respect strict des règles académiques : aucun 'ou' dans la problématique, aucune consigne dans l'introduction.",
          "2. Plan rigoureux en 2 axes équilibrés avec exploitation méthodique des arguments et citations d'auteurs.",
          "3. Rédaction continue in extenso prête pour l'examen avec alinéas et transitions soignées."
        ]
      },
      sourceDecomposition: {
        fasciculeMethodologies: ["SECRET FRANÇAIS BAC (Kouadia Nahounou Félix, Enseignant de Lettres Modernes)"],
        fasciculeKnowledgeUsed: [matchedKouadia.authorOrSource, matchedKouadia.work || matchedKouadia.themeOrGenre],
        externalKnowledgeMobilized: matchedKouadia.keywords
      },
      pedagogicalTransferExplanation: `Ce devoir corrigé applique à la perfection la méthodologie enseignée dans 'SECRET FRANÇAIS BAC'.`,
      level1Hint: `Retenez la démarche : d'abord « ${part1Title} », puis « ${part2Title} ».`,
      level2Methodology: steps.map(s => `${s.phaseName} : ${s.instructions}`).join("\n"),
      level3GuidanceSteps: steps.map((s, i) => `${i + 1}. ${s.phaseName} : ${s.instructions}`),
      level4DetailedOutline: `I. INTRODUCTION\n${introFullText.slice(0, 160)}...\n\nII. DÉVELOPPEMENT\n1. ${part1Title}\n2. ${part2Title}\n\nIII. CONCLUSION\n${conclusionFullText.slice(0, 140)}...`,
      level5FullRedaction: fullRedactionText,
      structuredRedaction,
      stepByStepBreakdown: steps.map((s, idx) => ({
        stepNumber: idx + 1,
        stepTitle: s.phaseName,
        methodologyRuleApplied: s.instructions,
        content: s.exemplaryDraft,
        sourceTags: ["Français", "Secret Français Bac", matchedKouadia.authorOrSource],
        pedagogicalTip: isCommentaire ? "Pour chaque citation, identifiez le procédé d'écriture et analysez son effet de sens." : "Chaque sous-partie doit développer une idée directrice étayée d'une référence littéraire précise."
      })),
      fullSynthesizedResponse: fullRedactionText,
      evaluationCriteria: [
        {
          criterion: isCommentaire ? "Compréhension et centres d'intérêt" : "Compréhension du sujet",
          fasciculeOrigin: true,
          scoreMax: 6,
          description: "Centres d'intérêt pertinents et problématisation sans le mot 'ou'.",
          tipsForAutonomy: "Ne déformez jamais la pensée de l'auteur et n'intégrez pas la consigne dans l'introduction."
        },
        {
          criterion: "Qualité de l'argumentation littéraire",
          fasciculeOrigin: true,
          scoreMax: 6,
          description: "Solidité des arguments et exactitude des références littéraires.",
          tipsForAutonomy: "Associez chaque argument à une illustration concrète."
        },
        {
          criterion: "Maîtrise de la langue et expression",
          fasciculeOrigin: true,
          scoreMax: 6,
          description: "Style académique soutenu, clarté et transitions équilibrées.",
          tipsForAutonomy: "Soignez l'enchaînement logique entre les parties."
        },
        {
          criterion: "Présentation et lisibilité de la copie",
          fasciculeOrigin: true,
          scoreMax: 2,
          description: "Respect des paragraphes et alinéas sans titres apparents dans la copie rédigée.",
          tipsForAutonomy: "La dissertation finale se lit d'un seul jet fluide."
        }
      ],
      isFallback: false
    };

    const solutionResult: FrancaisSolutionResult = {
      title: matchedKouadia.title,
      genreOrTopic: matchedKouadia.themeOrGenre || matchedKouadia.title,
      problemStatement: matchedKouadia.problematique || matchedKouadia.introduction.problematique,
      thesis: part1Title,
      antithesis: part2Title,
      steps,
      finalConclusion: conclusionFullText,
      toMethodologyAnalysisResult: () => methodologyAnalysis
    };

    return {
      success: true,
      classification: {
        genreOrTopic: matchedKouadia.themeOrGenre || matchedKouadia.title,
        confidence: 0.99
      },
      result: solutionResult,
      methodologyAnalysis,
      pedagogicalMetadata: {
        level: "Terminale A, C, D",
        discipline: "Français",
        examType: "Secret Français Bac (Kouadia)"
      }
    };
  }

  // 1. CAS PARTICULIER : Sujet modèle exemplaire du BAC (Le Théâtre, l'hilarité et la réflexion)
  const isSujetModeleTheatre =
    /point n'est besoin de r[ée]fl[ée]chir|tout est dans l'hilarit[ée]|th[ée][âa]tre.*hilarit/i.test(clean) ||
    (/th[ée][âa]tre/i.test(clean) && /r[ée]fl[ée]chir/i.test(clean) && /rire|hilarit/i.test(clean));

  if (isSujetModeleTheatre) {
    const modele = francaisTleDissertationKnowledgeBase.sujetModeleExemplaire;
    const { analyseDuSujet, problematisationSansOu, planRetenu } = modele.travailPreliminaire;
    const { introduction, developpement, conclusion } = modele.redactionIntegrale;

    const part1Title = developpement.axe1.titre;
    const part1ThesisOverview = developpement.axe1.chapeau;
    const part1SubParts = developpement.axe1.paragraphes.map(p => ({
      subPartLetter: p.numero === 1 ? "A" : "B",
      title: p.argument,
      argument: p.argument,
      explication: p.explication,
      illustration: {
        auteur: p.auteur,
        oeuvre: p.oeuvre,
        citation: p.citation,
        analyseIllustration: p.analyse
      },
      fullText: `${p.argument} ${p.explication} Comme le montre ${p.auteur} dans « ${p.oeuvre} » : ${p.citation} ${p.analyse}`
    }));

    const transition1 = developpement.axe1.transition;

    const part2Title = developpement.axe2.titre;
    const part2ThesisOverview = developpement.axe2.chapeau;
    const part2SubParts = developpement.axe2.paragraphes.map((p, idx) => ({
      subPartLetter: idx === 0 ? "A" : idx === 1 ? "B" : "C",
      title: p.argument,
      argument: p.argument,
      explication: p.explication,
      illustration: {
        auteur: p.auteur,
        oeuvre: p.oeuvre,
        citation: p.citation,
        analyseIllustration: p.analyse
      },
      fullText: `${p.argument} ${p.explication} En témoigne ${p.auteur} dans « ${p.oeuvre} » lorsqu'il affirme : ${p.citation} ${p.analyse}`
    }));

    const introFullText = introduction.texteComplet;
    const part1Full = `${part1ThesisOverview}\n\n` + part1SubParts.map(sp => sp.fullText).join("\n\n");
    const part2Full = `${part2ThesisOverview}\n\n` + part2SubParts.map(sp => sp.fullText).join("\n\n");
    const conclusionFullText = conclusion.texteComplet;

    const fullRedactionText = `${introFullText}\n\n` +
      `${part1Full}\n\n` +
      `${transition1}\n\n` +
      `${part2Full}\n\n` +
      `${conclusionFullText}`;

    const structuredRedaction: StructuredRedaction = {
      planSummary: `${part1Title} | ${part2Title}`,
      introduction: {
        amorce: introduction.amorce,
        definitionTension: introduction.explicationCitation,
        problematique: introduction.problemeSansOu,
        annoncePlan: introduction.annoncePlan,
        fullText: introFullText
      },
      development: {
        part1: {
          partNumber: 1,
          title: part1Title,
          thesisOverview: part1ThesisOverview,
          subParts: part1SubParts,
          fullText: part1Full
        },
        transition1,
        part2: {
          partNumber: 2,
          title: part2Title,
          thesisOverview: part2ThesisOverview,
          subParts: part2SubParts,
          fullText: part2Full
        }
      },
      conclusion: {
        bilanSynthese: conclusion.bilan,
        reponseDefinitive: conclusion.pointDeVuePersonnel,
        elargissement: conclusion.ouverture,
        fullText: conclusionFullText
      }
    };

    const francaisPreliminaryWork: FrancaisPreliminaryWork = {
      analyseDuSujet: {
        motsCles: analyseDuSujet.motsCles,
        consigneIsolee: consigneIsolee || analyseDuSujet.consigneIsolee,
        rappelConsigne: analyseDuSujet.rappelConsigne,
        reformulation: analyseDuSujet.reformulation,
        vocationsMobilisees: [
          { vocation: "Vocation Ludique", justification: "Le rire franc, la farce, l'amusement récréatif et la fête scénique défendue par la citation." },
          { vocation: "Vocation Morale", justification: "Castigat ridendo mores : corriger les vices des hommes en les divertissant (Molière)." },
          { vocation: "Vocation Didactique & Satirique", justification: "Instruire le peuple et fustiger les abus de pouvoir politiques (Dadié)." },
          { vocation: "Vocation Émotive", justification: "Susciter la terreur et la pitié tragique par la catharsis (Sophocle, Anouilh)." }
        ]
      },
      problematisation: {
        problemeSansOu: problematisationSansOu.problemeFormule,
        regleRespectee: "Conforme à la règle d'or de l'inspecteur : Aucun mot 'ou' dans le problème.",
        tensionDialectique: "Tension entre l'hilarité immédiate et la portée réflexive, morale et civique du théâtre."
      },
      introductionMethodique: {
        amorce: introduction.amorce,
        citationSansConsigne: citationPure,
        explicationCitation: introduction.explicationCitation,
        problemeSansOu: introduction.problemeSansOu,
        annoncePlan: introduction.annoncePlan,
        texteComplet: introFullText
      },
      planStructure: {
        typeDePlan: planRetenu.type,
        axe1: {
          titre: part1Title,
          vocationPrincipale: "Vocation Ludique",
          chapeau: part1ThesisOverview,
          paragraphes: developpement.axe1.paragraphes.map(p => ({
            idee: p.argument,
            explication: p.explication,
            oeuvre: p.oeuvre,
            auteur: p.auteur,
            citation: p.citation,
            analyse: p.analyse
          }))
        },
        transitionAxe1Axe2: transition1,
        axe2: {
          titre: part2Title,
          vocationPrincipale: "Vocations Morale, Didactique, Satirique et Émotive",
          chapeau: part2ThesisOverview,
          paragraphes: developpement.axe2.paragraphes.map(p => ({
            idee: p.argument,
            explication: p.explication,
            oeuvre: p.oeuvre,
            auteur: p.auteur,
            citation: p.citation,
            analyse: p.analyse
          }))
        }
      },
      conclusionMethodique: {
        bilan: conclusion.bilan,
        priseDePosition: conclusion.pointDeVuePersonnel,
        ouverture: conclusion.ouverture,
        texteComplet: conclusionFullText
      }
    };

    const steps = [
      {
        phaseName: "1. Travail Préliminaire (Analyse, Vocations & Brouillon)",
        instructions: "Analyser les mots-clés, isoler la consigne hors de l'introduction, identifier les vocations littéraires et poser le problème sans 'ou'.",
        exemplaryDraft: `• Citation isolée : « ${citationPure} »\n• Consigne isolée (NON reportée dans l'intro) : ${consigneIsolee}\n• Vocations littéraires : Vocation Ludique vs Vocations Morale, Didactique, Satirique\n• Problème (sans 'ou') : ${problematisationSansOu.problemeFormule}`
      },
      {
        phaseName: "2. Introduction Méthodique Réalisée",
        instructions: "Amorce -> Citation sans consigne -> Explication -> Problème sans 'ou' -> Annonce du plan.",
        exemplaryDraft: introFullText
      },
      {
        phaseName: "3. Axe I — Vocation Ludique & Fête de l'Hilarité",
        instructions: "Paragraphes argumentés : Idée + Explication + Exemple + Citation + Analyse.",
        exemplaryDraft: part1Full
      },
      {
        phaseName: "4. Transition & Axe II — Mission Morale et Réflexive",
        instructions: "Démontrer la fonction d'éveil des consciences, de critique sociale et de catharsis tragique.",
        exemplaryDraft: `Transition : ${transition1}\n\n${part2Full}`
      },
      {
        phaseName: "5. Conclusion en 3 temps",
        instructions: "Bilan des axes -> Prise de position personnelle argumentée -> Ouverture prospective.",
        exemplaryDraft: conclusionFullText
      }
    ];

    const methodologyAnalysis: MethodologyAnalysisResult = {
      exerciseTypeIdentified: "Dissertation Littéraire (Méthodologie Officielle)",
      disciplineIdentified: "Français",
      conceptualDisambiguation: {
        hasAmbiguousTerm: false,
        term: "Au théâtre, point n'est besoin de réfléchir, de penser. Tout est dans l'hilarité.",
        possibleMeanings: ["Référentiel officiel de Français Terminales A, C, D — Dissertation Littéraire"],
        retainedMeaning: "Méthodologie canonique : Pas de consigne dans l'introduction & Problème sans 'ou'",
        justification: "Conformité stricte aux exigences méthodologiques de l'Inspection Pédagogique Nationale."
      },
      fasciculeMethodologyActivated: {
        name: "Méthodologie Officielle de la Dissertation Littéraire (DPFC / MENA)",
        description: "Traitement méthodique complet : Travail préparatoire avec 9 vocations, introduction sans consigne, problème sans 'ou', développement quintuple et conclusion tripartite.",
        stepsApplied: [
          "1. Travail préliminaire au brouillon : analyse du sujet, consigne isolée hors de l'intro, vocations repérées.",
          "2. Introduction en 4 étapes : amorce, énoncé du sujet pur sans consigne, explication, problème sans 'ou', annonce de plan.",
          "3. Axe I : thèse justifiée avec exemples précis d'œuvres (Molière, Kacou) et citations intégrées.",
          "4. Transition interrogative entre les deux axes sans saut de ligne artificiel.",
          "5. Axe II : antithèse et discussion approfondie (Molière, Dadié, Sophocle/Anouilh).",
          "6. Conclusion en 3 temps : bilan, point de vue personnel argumenté et ouverture."
        ]
      },
      sourceDecomposition: {
        fasciculeMethodologies: ["Canevas de dissertation littéraire Terminales A, C, D", ...(fomesoutraReference ? ["Corpus documentaire Fomesoutra : sujets et corrigés de dissertation"] : [])],
        fasciculeKnowledgeUsed: ["Molière (Les Fourberies de Scapin, Tartuffe)", "Hyacinthe Kacou (On se chamaille pour un siège)"],
        externalKnowledgeMobilized: ["Bernard Binlin Dadié (Monsieur Tôgôgnini)", "Sophocle / Anouilh (Antigone)"]
      },
      pedagogicalTransferExplanation: "Rédaction littéraire intégrale certifiée conforme aux règles strictes : aucune mention de la consigne dans l'introduction et aucun mot 'ou' dans la problématisation.",
      level1Hint: `Observez que le sujet oppose divertissement scénique (hilarité) et portée intellectuelle (réfléchir, penser). La dissertation doit dépasser cette fausse opposition.`,
      level2Methodology: steps.map(s => `${s.phaseName} : ${s.instructions}`).join("\n"),
      level3GuidanceSteps: [
        `1. Introduction méthodique : Amorce contextuelle -> Citation « ${citationPure} » -> Explication -> Problème sans 'ou' -> Plan en 2 axes.`,
        `2. Axe I : Le théâtre comme triomphe du comique et de l'hilarité récréative (Scapin, Kacou).`,
        `3. Transition : Démontrer que le rire n'est que la porte d'entrée d'une méditation plus grave.`,
        `4. Axe II : Le théâtre comme miroir moral, politique et cathartique (Tartuffe, Tôgôgnini, Antigone).`,
        `5. Conclusion : Synthèse des axes, avis personnel motivé et ouverture vers d'autres formes artistiques.`
      ],
      level4DetailedOutline: `I. INTRODUCTION\n- Amorce contextuelle sur le rassemblement théâtral\n- Citation pure sans consigne : « ${citationPure} »\n- Problématique sans 'ou' : ${problematisationSansOu.problemeFormule}\n- Annonce de plan : I. Triomphe de l'hilarité ; II. Portée réflexive et morale\n\nII. DÉVELOPPEMENT\n1. ${part1Title}\n${part1SubParts.map(sp => `   * ${sp.title}`).join("\n")}\n2. ${part2Title}\n${part2SubParts.map(sp => `   * ${sp.title}`).join("\n")}\n\nIII. CONCLUSION\n- Bilan : ${conclusion.bilan}\n- Prise de position : ${conclusion.pointDeVuePersonnel}\n- Ouverture : ${conclusion.ouverture}`,
      level5FullRedaction: fullRedactionText,
      structuredRedaction,
      francaisPreliminaryWork,
      stepByStepBreakdown: steps.map((s, idx) => ({
        stepNumber: idx + 1,
        stepTitle: s.phaseName,
        methodologyRuleApplied: s.instructions,
        content: s.exemplaryDraft,
        sourceTags: ["Français", "Théâtre"],
        pedagogicalTip: "N'oubliez jamais : la consigne est pour vous au brouillon, jamais pour le correcteur dans l'introduction !"
      })),
      fullSynthesizedResponse: fullRedactionText,
      evaluationCriteria: [
        {
          criterion: "Compréhension du sujet (CS)",
          fasciculeOrigin: true,
          scoreMax: 6,
          description: "Sens exact de la citation dégagé, consigne isolée sans être insérée dans l'intro, problème formulé sans 'ou'.",
          tipsForAutonomy: "Ne mettez jamais la consigne dans l'introduction et évitez tout 'ou' dans la question centrale."
        },
        {
          criterion: "Organisation des idées (OI)",
          fasciculeOrigin: true,
          scoreMax: 6,
          description: "Plan dialectique équilibré, enchaînement fluide des paragraphes et présence d'une transition explicite.",
          tipsForAutonomy: "Chaque paragraphe doit comporter Idée + Explication + Exemple + Citation + Analyse."
        },
        {
          criterion: "Langue et expression (LE)",
          fasciculeOrigin: true,
          scoreMax: 6,
          description: "Correction grammaticale, vocabulaire littéraire précis, variété des connecteurs logiques.",
          tipsForAutonomy: "Variez les tournures et soignez les transitions logiques."
        },
        {
          criterion: "Présentation de la copie (P)",
          fasciculeOrigin: true,
          scoreMax: 2,
          description: "Propreté de la copie, alinéas visibles à chaque paragraphe, absence totale de titres apparents.",
          tipsForAutonomy: "La copie finale d'examen doit être un texte continu prêt à lire."
        }
      ],
      isFallback: false
    };

    const solutionResult: FrancaisSolutionResult = {
      title: "Dissertation Littéraire — Le Théâtre : Hilarité et Réflexion",
      genreOrTopic: "Le Théâtre (Divertissement comique et Éveil critique)",
      problemStatement: problematisationSansOu.problemeFormule,
      thesis: "Le spectacle théâtral est une fête de l'hilarité et du divertissement comique.",
      antithesis: "Le théâtre constitue un miroir lucide de réflexion morale, civique et existentielle.",
      steps,
      finalConclusion: "Résolution littéraire certifiée conforme aux canons officiels du Baccalauréat.",
      toMethodologyAnalysisResult: () => methodologyAnalysis
    };

    return {
      success: true,
      classification: {
        genreOrTopic: "Le Théâtre (Divertissement comique et Éveil critique)",
        confidence: 0.99
      },
      result: solutionResult,
      methodologyAnalysis,
      pedagogicalMetadata: {
        level: "Terminale A, C, D",
        discipline: "Français",
        examType: "Baccalauréat"
      }
    };
  }

  // 2. CAS GÉNÉRAUX (Poésie, Roman, Théâtre général, Littérature et Engagement)
  let genreOrTopic = "Littérature et Société";
  let confidence = 0.88;
  let thesis = "La littérature a pour mission essentielle de s'engager, de dénoncer les injustices et d'éveiller les consciences.";
  let antithesis = "La littérature a également pour rôle de faire rêver, de faire aimer la beauté des mots et d'exprimer les sentiments personnels.";
  let problemStatement = "Dans quelle mesure l'écriture littéraire parvient-elle à allier l'engagement citoyen face aux problèmes du monde et la recherche de la beauté artistique ?";
  let vocationsList = [
    { vocation: "Vocation Satirique", justification: "Dénoncer les injustices et réveiller la conscience des citoyens." },
    { vocation: "Vocation Esthétique", justification: "Mettre en valeur la beauté du style et la qualité des mots." },
    { vocation: "Vocation Morale", justification: "Instruire le lecteur et encourager les bons comportements." }
  ];

  let referenceReformulation = thesis;
  if (fomesoutraReference) {
    genreOrTopic = fomesoutraReference.genre === "poesie" ? "La Poésie" : fomesoutraReference.genre === "roman" ? "Le Roman" : fomesoutraReference.genre === "theatre" ? "Le Théâtre" : "La Littérature";
    confidence = 0.995;
    referenceReformulation = fomesoutraReference.reformulation;
    problemStatement = fomesoutraReference.probleme;
    thesis = fomesoutraReference.axe1;
    antithesis = fomesoutraReference.axe2;
  }

  let part1SubParts: any[] = [];
  let part2SubParts: any[] = [];

  if (/poesie|poete|vers|rime|lyrisme|strophe|alexandrin/i.test(clean)) {
    genreOrTopic = "La Poésie (Lyrisme, Esthétique et Engagement)";
    confidence = 0.97;
    thesis = "La poésie est un puissant moyen d'action, de témoignage et de combat pour la liberté.";
    antithesis = "La poésie est aussi et avant tout la recherche de la beauté des mots, de la musique et l'expression des sentiments du cœur.";
    // STRICTEMENT AUCUN "OU"
    if (!fomesoutraReference) problemStatement = "La poésie se limite-t-elle à la recherche de la beauté et à l’expression des sentiments ?";
    vocationsList = [
      { vocation: "Vocation Satirique & Engagée", justification: "Porter la voix des personnes opprimées et dénoncer les injustices (Césaire, David Diop)." },
      { vocation: "Vocation Lyrique", justification: "Exprimer les émotions du cœur, l'amour et la tristesse (Lamartine, Hugo)." },
      { vocation: "Vocation Esthétique", justification: "Travailler le rythme des vers, la musique des sons et la beauté des images (Baudelaire, Gautier)." }
    ];

    part1SubParts = [
      {
        subPartLetter: "A",
        title: "La poésie comme cri de révolte et arme contre l'injustice",
        argument: "Le poète engagé met ses mots au service des personnes sans défense pour combattre les injustices.",
        explication: "Face à la domination ou aux abus de pouvoir, les poèmes deviennent de véritables armes pacifiques pour redonner courage et dignité aux peuples.",
        illustration: {
          auteur: "Aimé Césaire",
          oeuvre: "Cahier d'un retour au pays natal",
          citation: "« Ma bouche sera la bouche des malheurs qui n'ont point de bouche, ma voix, la liberté de celles qui s'affaissent au cachot du désespoir. »",
          analyseIllustration: "Césaire devient ici le porte-parole courageux de tous ceux qui souffrent et n'ont pas la parole."
        },
        fullText: "Le poète engagé met ses mots au service des personnes sans défense pour combattre les injustices. Face à la domination ou aux abus de pouvoir, les poèmes deviennent de véritables armes pacifiques pour redonner courage et dignité aux peuples. Comme le proclame Aimé Césaire dans « Cahier d'un retour au pays natal » : « Ma bouche sera la bouche des malheurs qui n'ont point de bouche, ma voix, la liberté de celles qui s'affaissent au cachot du désespoir. » Césaire devient ainsi la voix vibrante de tout un peuple blessé."
      },
      {
        subPartLetter: "B",
        title: "Le poète comme guide et éclaireur du peuple",
        argument: "La poésie a pour mission d'éclairer la société et de guider les hommes vers un avenir meilleur.",
        explication: "L'écrivain ne peut pas rester indifférent aux souffrances de son époque ; il encourage le peuple à ouvrir les yeux et à progresser.",
        illustration: {
          auteur: "Victor Hugo",
          oeuvre: "Les Rayons et les Ombres",
          citation: "« Peuples ! écoutez le poète ! Écoutez le rêveur sacré ! Dans votre nuit, sans lui complète, lui seul a le front éclairé. »",
          analyseIllustration: "Hugo confie au poète la noble mission d'éclairer les consciences et de montrer le chemin du bien."
        },
        fullText: "La poésie a pour mission d'éclairer la société et de guider les hommes vers un avenir meilleur. L'écrivain ne peut pas rester indifférent aux souffrances de son époque ; il encourage le peuple à ouvrir les yeux et à progresser. Ainsi que l'affirme Victor Hugo dans « Les Rayons et les Ombres » : « Peuples ! écoutez le poète ! Écoutez le rêveur sacré ! Dans votre nuit, sans lui complète, lui seul a le front éclairé. » Hugo montre avec force que la poésie est une lumière essentielle pour guider l'humanité."
      }
    ];

    part2SubParts = [
      {
        subPartLetter: "A",
        title: "La recherche de la beauté des mots et de l'harmonie",
        argument: "La poésie est avant tout un travail soigné sur la beauté du langage et le rythme des vers.",
        explication: "Le poète recherche la musique des phrases et la force des images, pour le plaisir de créer une œuvre harmonieuse.",
        illustration: {
          auteur: "Charles Baudelaire",
          oeuvre: "Les Fleurs du Mal",
          citation: "« Tu m'as donné ta boue et j'en ai fait de l'or. »",
          analyseIllustration: "Baudelaire montre ici comment le travail poétique transforme la douleur de la vie en une œuvre de pure beauté."
        },
        fullText: "La poésie est avant tout un travail soigné sur la beauté du langage et le rythme des vers. Le poète recherche la musique des phrases et la force des images, pour le plaisir de créer une œuvre harmonieuse. C'est le sens de la démarche de Charles Baudelaire dans « Les Fleurs du Mal » lorsqu'il écrit : « Tu m'as donné ta boue et j'en ai fait de l'or. » Par la magie des mots, le poète change la tristesse en beauté durable."
      },
      {
        subPartLetter: "B",
        title: "L'expression des sentiments intimes et des émotions du cœur",
        argument: "La poésie est le lieu privilégié pour confier ses sentiments intimes, son amour et sa peine.",
        explication: "En racontant ses émotions personnelles, le poète touche le cœur de chaque lecteur qui se reconnaît dans ses paroles.",
        illustration: {
          auteur: "Alphonse de Lamartine",
          oeuvre: "Méditations poétiques",
          citation: "« Un seul être vous manque, et tout est dépeuplé ! »",
          analyseIllustration: "Ce vers simple et célèbre traduit avec émotion la solitude éprouvée après la perte d'un être cher."
        },
        fullText: "La poésie est le lieu privilégié pour confier ses sentiments intimes, son amour et sa peine. En racontant ses émotions personnelles, le poète touche le cœur de chaque lecteur qui se reconnaît dans ses paroles. Lamartine dans « Méditations poétiques » en donne un exemple très émouvant : « Un seul être vous manque, et tout est dépeuplé ! » Ce poème console le lecteur en exprimant une émotion que tout être humain a déjà ressentie."
      }
    ];
  } else if (/theatre|dramaturge|scene|piece|tragedie|comedie|hilarite/i.test(clean)) {
    genreOrTopic = "Le Théâtre (Divertissement, Éveil et Miroir Social)";
    confidence = 0.98;
    thesis = "Le théâtre est un miroir lucide qui instruit le spectateur et dénonce les injustices et les abus de pouvoir.";
    antithesis = "Le théâtre est aussi un lieu de jeu, de rire, d'amusement et de libération des émotions.";
    // STRICTEMENT AUCUN "OU"
    if (!fomesoutraReference) problemStatement = "Quelle est la fonction du théâtre ?";
    vocationsList = [
      { vocation: "Vocation Morale & Didactique", justification: "Corriger les défauts des hommes par le rire (Castigat ridendo mores de Molière)." },
      { vocation: "Vocation Satirique", justification: "Critiquer la corruption et les abus politiques (Dadié)." },
      { vocation: "Vocation Ludique", justification: "Offrir une fête joyeuse et un divertissement immédiat au public." }
    ];

    part1SubParts = [
      {
        subPartLetter: "A",
        title: "La critique des défauts et le rôle moral du théâtre",
        argument: "En montrant sur scène les faiblesses humaines, la pièce de théâtre aide à corriger les erreurs de comportement.",
        explication: "L'auteur fait rire le public pour lui ouvrir les yeux sur l'hypocrisie, l'avarice ou l'égoïsme.",
        illustration: {
          auteur: "Molière",
          oeuvre: "Tartuffe (Préface)",
          citation: "« L'emploi de la comédie est de corriger les vices des hommes. »",
          analyseIllustration: "Molière rappelle ainsi la règle classique : corriger les mauvais comportements en faisant rire."
        },
        fullText: "En montrant sur scène les faiblesses humaines, la pièce de théâtre aide à corriger les erreurs de comportement. L'auteur fait rire le public pour lui ouvrir les yeux sur l'hypocrisie, l'avarice ou l'égoïsme. Comme l'affirme Molière dans la préface de « Tartuffe » : « L'emploi de la comédie est de corriger les vices des hommes. » La comédie pousse ainsi le spectateur à réfléchir sur lui-même tout en s'amusant."
      },
      {
        subPartLetter: "B",
        title: "Le théâtre politique et la dénonciation des injustices",
        argument: "Sur scène, le théâtre devient une tribune courageuse pour dénoncer les abus de pouvoir et défendre la liberté.",
        explication: "Les auteurs africains et du monde entier mettent en scène l'histoire pour réveiller la citoyenneté et condamner les injustices.",
        illustration: {
          auteur: "Bernard Dadié",
          oeuvre: "Béatrice du Congo",
          citation: "« La scène montre la résistance héroïque face à l'injustice coloniale et à la corruption des dirigeants. »",
          analyseIllustration: "Dadié met en scène l'héroïne Béatrice pour encourager le courage et l'amour de la liberté."
        },
        fullText: "Sur scène, le théâtre devient une tribune courageuse pour dénoncer les abus de pouvoir et défendre la liberté. Les auteurs africains et du monde entier mettent en scène l'histoire pour réveiller la citoyenneté et condamner les injustices. À travers « Béatrice du Congo », Bernard Dadié raconte la résistance face à l'oppression, montrant que la parole au théâtre est un appel vibrant à la dignité et à la justice."
      }
    ];

    part2SubParts = [
      {
        subPartLetter: "A",
        title: "La fête du spectacle, le rire et la détente",
        argument: "Le théâtre est d'abord une fête joyeuse où le jeu des comédiens procure une joie immédiate.",
        explication: "Le public vient dans la salle pour oublier ses soucis de la journée et partager un bon moment d'amusement.",
        illustration: {
          auteur: "Eugène Ionesco",
          oeuvre: "Notes et Contre-notes",
          citation: "« Le théâtre est un jeu, il est le lieu où tout est permis, où l'imagination se déploie sans entrave. »",
          analyseIllustration: "Ionesco rappelle que la liberté du jeu sur scène fait tout le charme du théâtre."
        },
        fullText: "Le théâtre est d'abord une fête joyeuse où le jeu des comédiens procure une joie immédiate. Le public vient dans la salle pour oublier ses soucis de la journée et partager un bon moment d'amusement. Comme le remarque Eugène Ionesco dans « Notes et Contre-notes » : « Le théâtre est un jeu, il est le lieu où tout est permis. » C'est ce plaisir du jeu et du rire partagé qui rassemble les spectateurs."
      },
      {
        subPartLetter: "B",
        title: "La tragédie et l'apaisement des émotions",
        argument: "En faisant ressentir de la pitié et de l'admiration, la tragédie permet au public de libérer ses propres angoisses.",
        explication: "Les grandes épreuves vécues par les héros sur scène permettent aux spectateurs de mieux comprendre la fragilité humaine.",
        illustration: {
          auteur: "Aristote",
          oeuvre: "Poétique",
          citation: "« La tragédie suscite la terreur et la pitié, opérant ainsi la purgation de pareilles émotions. »",
          analyseIllustration: "Selon Aristote, voir les malheurs d'un héros sur scène soulage et apaise l'esprit du spectateur."
        },
        fullText: "En faisant ressentir de la pitié et de l'admiration, la tragédie permet au public de libérer ses propres angoisses. Les grandes épreuves vécues par les héros sur scène permettent aux spectateurs de mieux comprendre la fragilité humaine. C'est l'explication donnée par Aristote dans sa « Poétique » : le spectacle tragique aide le spectateur à calmer ses peurs en voyant le courage de l'homme face au destin."
      }
    ];
  } else {
    // Roman / Littérature générale
    genreOrTopic = "Le Roman (Miroir du Réel et Univers de Fiction)";
    confidence = 0.97;
    thesis = "Le roman fonctionne comme un miroir fidèle de la société pour raconter la vérité humaine et dénoncer les injustices.";
    antithesis = "Le roman est aussi un formidable espace d'imagination, d'aventures passionnantes et d'évasion.";
    // STRICTEMENT AUCUN "OU"
    if (!fomesoutraReference) problemStatement = "Quelle est la fonction du roman ?";
    vocationsList = [
      { vocation: "Vocation Réaliste", justification: "Montrer la vie quotidienne et décrire les relations humaines en toute franchise (Stendhal, Balzac)." },
      { vocation: "Vocation Fictive & Évasive", justification: "Inventer des histoires passionnantes et faire voyager l'esprit du lecteur (Saint-Exupéry, Jules Verne)." },
      { vocation: "Vocation Didactique", justification: "Faire réfléchir le lecteur sur les injustices de son époque (Kourouma)." }
    ];

    part1SubParts = [
      {
        subPartLetter: "A",
        title: "Le roman comme miroir de la société et découverte du réel",
        argument: "Le romancier observe attentivement la société pour raconter fidèlement la vie et les épreuves des hommes.",
        explication: "À travers des descriptions vivantes et des histoires réalistes, l'écrivain raconte ce que vivent les gens ordinaires.",
        illustration: {
          auteur: "Stendhal",
          oeuvre: "Le Rouge et le Noir",
          citation: "« Un roman est un miroir qui se promène sur une grande route. Tantôt il reflète à vos yeux l'azur des cieux, tantôt la fange des bourbiers. »",
          analyseIllustration: "Cette image montre que le romancier doit rester honnête et raconter la vérité sans rien embellir."
        },
        fullText: "Le romancier observe attentivement la société pour raconter fidèlement la vie et les épreuves des hommes. À travers des descriptions vivantes et des histoires réalistes, l'écrivain raconte ce que vivent les gens ordinaires. C'est la pensée de Stendhal dans « Le Rouge et le Noir » : « Un roman est un miroir qui se promène sur une grande route. » Le roman montre ainsi avec sincérité les beautés et les difficultés de la vie humaine."
      },
      {
        subPartLetter: "B",
        title: "Le roman africain : témoignage sincère et dénonciation des abus",
        argument: "Dans les livres africains, le roman raconte les espoirs et les déceptions du peuple après les indépendances.",
        explication: "L'écrivain critique la corruption et le manque de liberté pour réveiller la responsabilité des citoyens.",
        illustration: {
          auteur: "Ahmadou Kourouma",
          oeuvre: "Les Soleils des indépendances",
          citation: "« À travers l'histoire de Fama, l'auteur dénonce les abus du pouvoir et la souffrance des citoyens ordinaires. »",
          analyseIllustration: "Kourouma utilise un style très vivant et direct pour crier la déception du peuple."
        },
        fullText: "Dans les livres africains, le roman raconte les espoirs et les déceptions du peuple après les indépendances. L'écrivain critique la corruption et le manque de liberté pour réveiller la responsabilité des citoyens. Dans « Les Soleils des indépendances », Ahmadou Kourouma montre le désarroi de son personnage Fama pour dénoncer les promesses non tenues et encourager une société plus juste."
      }
    ];

    part2SubParts = [
      {
        subPartLetter: "A",
        title: "La liberté de l'imagination et la création d'histoires captivantes",
        argument: "Le roman ne se contente pas de copier la réalité : il invente des mondes passionnants où tout devient possible.",
        explication: "Le lecteur prend plaisir à suivre des personnages inventés qui vivent des aventures extraordinaires.",
        illustration: {
          auteur: "Albert Camus",
          oeuvre: "L'Homme révolté",
          citation: "« Le roman fabrique du destin sur mesure. C'est ainsi qu'il rivalise avec la création et qu'il la corrige provisoirement. »",
          analyseIllustration: "Camus montre que les histoires inventées par l'écrivain permettent de donner du sens et de l'émotion à la vie."
        },
        fullText: "Le roman ne se contente pas de copier la réalité : il invente des mondes passionnants où tout devient possible. Le lecteur prend plaisir à suivre des personnages inventés qui vivent des aventures extraordinaires. Comme l'explique Albert Camus dans « L'Homme révolté » : « Le roman fabrique du destin sur mesure. » La fiction permet ainsi au lecteur d'élargir ses horizons et de rêver librement."
      },
      {
        subPartLetter: "B",
        title: "Le plaisir de l'évasion et le divertissement par la lecture",
        argument: "La lecture d'un roman offre un vrai voyage intérieur qui permet d'oublier la fatigue et les soucis.",
        explication: "Grâce aux intrigues entraînantes et aux voyages imaginaires, le livre devient un refuge agréable et apaisant.",
        illustration: {
          auteur: "Antoine de Saint-Exupéry",
          oeuvre: "Le Petit Prince",
          citation: "« On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux. »",
          analyseIllustration: "Ce beau conte poétique fait voyager petits et grands tout en transmettant une belle leçon d'amour et de simplicité."
        },
        fullText: "La lecture d'un roman offre un vrai voyage intérieur qui permet d'oublier la fatigue et les soucis. Grâce aux intrigues entraînantes et aux voyages imaginaires, le livre devient un refuge agréable et apaisant. C'est le pouvoir de Saint-Exupéry dans « Le Petit Prince », où le voyage d'une planète à l'autre émerveille le lecteur et lui rappelle la valeur de l'amitié sincère."
      }
    ];
  }

  // Dernière priorité : si un sujet est reconnu dans le corpus Fomesoutra,
  // ses quatre sorties scolaires priment sur les canevas génériques du genre.
  if (fomesoutraReference) {
    genreOrTopic = fomesoutraReference.genre === "poesie" ? "La Poésie" : fomesoutraReference.genre === "roman" ? "Le Roman" : fomesoutraReference.genre === "theatre" ? "Le Théâtre" : "La Littérature";
    referenceReformulation = fomesoutraReference.reformulation;
    problemStatement = fomesoutraReference.probleme;
    thesis = fomesoutraReference.axe1;
    antithesis = fomesoutraReference.axe2;
    vocationsList = [
      { vocation: "Axe 1", justification: fomesoutraReference.axe1 },
      { vocation: "Axe 2", justification: fomesoutraReference.axe2 }
    ];
  }

  // Nettoyage absolu du problème pour respecter formellement la règle de l'inspecteur
  problemStatement = sanitizeProblemStatementWithoutOu(problemStatement);

  // Construction variable de la rédaction : le plan et les idées restent fixes,
  // mais l'expression, les connecteurs, les transitions et les formulations changent.
  const varied = varyFrenchDissertationText({
    citationPure,
    referenceReformulation,
    problemStatement,
    thesis,
    antithesis,
    part1ThesisOverview: `Dans un premier temps, nous montrerons que l'œuvre littéraire a pour mission importante d'éveiller les consciences, de témoigner et d'encourager la justice.`,
    transition1: `Cependant, même si le rôle engagé et critique de l'œuvre est bien réel, peut-on réduire la littérature à ce seul rôle ?`,
    part2ThesisOverview: `Dans un second temps, nous verrons que la littérature est aussi un formidable espace de beauté, de détente et de liberté créatrice.`,
    bilanSynthese: `Au terme de notre analyse, il apparaît clairement que la littérature ne se limite pas à un seul rôle : elle sert à la fois à faire réfléchir sur le monde et à offrir un moment d'évasion et de plaisir.`,
    reponseDefinitive: `Loin de s'opposer, ces deux rôles se complètent : un livre instruit d'autant mieux qu'il captive son lecteur.`,
    elargissement: `Dès lors, comme le rappelait Léopold Sédar Senghor, l'écrivain réussit pleinement sa mission quand il sait lier la défense de son peuple à la beauté universelle de l'art.`,
    part1SubParts,
    part2SubParts
  });

  const amorce = varied.intro;
  const citationInIntro = `« ${citationPure} »`;
  const definitionTension = `${pickVariant(["Autrement dit, ", "En d'autres termes, ", "Cette idée signifie que ", "Cette affirmation revient à dire que "])}${referenceReformulation}`;
  const annoncePlan = `Le raisonnement suivra donc deux axes : ${thesis.toLowerCase()}, puis ${antithesis.toLowerCase()}.`;
  const introFullText = introFullTextFromVaried(amorce, citationInIntro, definitionTension, problemStatement, annoncePlan);

  const part1Title = `Axe I. ${thesis}`;
  const part1ThesisOverview = varied.part1Overview;
  const transition1 = varied.transition;
  const part2Title = `Axe II. ${antithesis}`;
  const part2ThesisOverview = varied.part2Overview;

  const bilanSynthese = varied.bilan;
  const reponseDefinitive = varied.response;
  const elargissement = varied.ending;
  const conclusionFullText = `${bilanSynthese} ${reponseDefinitive} ${elargissement}`;

  const part1Full = `${part1ThesisOverview}\n\n` + varied.part1SubParts.map(sp => sp.fullText).join("\n\n");
  const part2Full = `${part2ThesisOverview}\n\n` + varied.part2SubParts.map(sp => sp.fullText).join("\n\n");

  const fullRedactionText = `${introFullText}\n\n` +
    `${part1Full}\n\n` +
    `${transition1}\n\n` +
    `${part2Full}\n\n` +
    `${conclusionFullText}`;

  // Garder les mêmes données pédagogiques, mais exposer les formulations variées.
  part1SubParts = varied.part1SubParts;
  part2SubParts = varied.part2SubParts;

  const structuredRedaction: StructuredRedaction = {
    planSummary: `${part1Title} | ${part2Title}`,
    introduction: {
      amorce,
      definitionTension,
      problematique: problemStatement,
      annoncePlan,
      fullText: introFullText
    },
    development: {
      part1: {
        partNumber: 1,
        title: part1Title,
        thesisOverview: part1ThesisOverview,
        subParts: part1SubParts,
        fullText: part1Full
      },
      transition1,
      part2: {
        partNumber: 2,
        title: part2Title,
        thesisOverview: part2ThesisOverview,
        subParts: part2SubParts,
        fullText: part2Full
      }
    },
    conclusion: {
      bilanSynthese,
      reponseDefinitive,
      elargissement,
      fullText: conclusionFullText
    }
  };

  const francaisPreliminaryWork: FrancaisPreliminaryWork = {
    analyseDuSujet: {
      motsCles: [
        { mot: citationPure.slice(0, 40) + "...", sens: "Expression centrale soumise à l'analyse critique." },
        { mot: "Portée littéraire", sens: "Interrogation sur la vocation, les finalités et les pouvoirs de l'art d'écrire." }
      ],
      consigneIsolee,
      rappelConsigne: "RAPPEL STRICT : Cette consigne commande le plan au brouillon mais est FORMELLEMENT EXCLUE de l'introduction rédigée.",
      reformulation: definitionTension,
      vocationsMobilisees: vocationsList
    },
    problematisation: {
      problemeSansOu: problemStatement,
      regleRespectee: "Conforme à la règle d'or de l'inspecteur : Aucun mot 'ou' dans le problème.",
      tensionDialectique: `Tension dialectique entre ${thesis.toLowerCase()} et ${antithesis.toLowerCase()}`
    },
    introductionMethodique: {
      amorce,
      citationSansConsigne: citationPure,
      explicationCitation: definitionTension,
      problemeSansOu: problemStatement,
      annoncePlan,
      texteComplet: introFullText
    },
    planStructure: {
      typeDePlan: "Plan dialectique (Thèse / Antithèse)",
      axe1: {
        titre: part1Title,
        vocationPrincipale: vocationsList[0]?.vocation || "Vocation Satirique / Réaliste",
        chapeau: part1ThesisOverview,
        paragraphes: part1SubParts.map(sp => ({
          idee: sp.argument,
          explication: sp.explication,
          oeuvre: sp.illustration.oeuvre,
          auteur: sp.illustration.auteur,
          citation: sp.illustration.citation,
          analyse: sp.illustration.analyseIllustration
        }))
      },
      transitionAxe1Axe2: transition1,
      axe2: {
        titre: part2Title,
        vocationPrincipale: vocationsList[1]?.vocation || "Vocation Esthétique / Lyrique",
        chapeau: part2ThesisOverview,
        paragraphes: part2SubParts.map(sp => ({
          idee: sp.argument,
          explication: sp.explication,
          oeuvre: sp.illustration.oeuvre,
          auteur: sp.illustration.auteur,
          citation: sp.illustration.citation,
          analyse: sp.illustration.analyseIllustration
        }))
      }
    },
    conclusionMethodique: {
      bilan: bilanSynthese,
      priseDePosition: reponseDefinitive,
      ouverture: elargissement,
      texteComplet: conclusionFullText
    }
  };

  const steps = [
    {
      phaseName: "1. Analyse du sujet & Travail Préliminaire",
      instructions: "Cerner les mots-clés, isoler la consigne hors de l'introduction, identifier les vocations et poser le problème sans 'ou'.",
      exemplaryDraft: `• Citation isolée : « ${citationPure} »\n• Consigne isolée (NON copiée dans l'intro) : ${consigneIsolee}\n• Thème : ${genreOrTopic}\n• Problème (sans 'ou') : ${problemStatement}\n• Thèse (Axe 1) : ${thesis}\n• Antithèse (Axe 2) : ${antithesis}`
    },
    {
      phaseName: "2. Introduction Méthodique Réalisée",
      instructions: "Amorce littéraire -> Citation sans consigne -> Explication -> Problème sans 'ou' -> Annonce du plan.",
      exemplaryDraft: introFullText
    },
    {
      phaseName: "3. Axe 1 — Analyse et Justification de la Thèse",
      instructions: "Développer 2 arguments solides illustrés par des exemples précis de la littérature africaine et universelle.",
      exemplaryDraft: part1Full
    },
    {
      phaseName: "4. Transition & Axe 2 — Antithèse et Nuance",
      instructions: "Montrer les autres dimensions indispensables de l'art d'écrire.",
      exemplaryDraft: `Transition : ${transition1}\n\n${part2Full}`
    },
    {
      phaseName: "5. Conclusion & Synthèse Littéraire",
      instructions: "Bilan des axes, réponse équilibrée et jugement personnel sur la vitalité de l'art.",
      exemplaryDraft: conclusionFullText
    }
  ];

  const methodologyAnalysis: MethodologyAnalysisResult = {
    exerciseTypeIdentified: "Dissertation Littéraire (Méthodologie Officielle)",
    disciplineIdentified: "Français",
    conceptualDisambiguation: {
      hasAmbiguousTerm: false,
      term: genreOrTopic,
      possibleMeanings: ["Référentiel officiel de Français Terminales A, C, D"],
      retainedMeaning: "Programme officiel DPFC / MENA Côte d'Ivoire",
      justification: "Conformité stricte aux canons méthodologiques de la dissertation littéraire."
    },
    fasciculeMethodologyActivated: {
      name: "Méthodologie Officielle de Dissertation Littéraire",
      description: `Traitement dialectique sur le thème « ${genreOrTopic} » respectant l'exclusion de la consigne dans l'introduction et l'absence de 'ou' dans le problème.`,
      stepsApplied: [
        "1. Introduction en un bloc (Amorce, citation/insertion sans consigne, explication, problème sans 'ou', annonce de plan).",
        "2. Première partie argumentée avec auteurs africains et universels.",
        "3. Transition interrogative articulant le bilan et le basculement.",
        "4. Deuxième partie explorant les fonctions esthétiques et ludiques.",
        "5. Conclusion tripartite avec bilan, réponse et élargissement."
      ]
    },
    sourceDecomposition: {
      fasciculeMethodologies: ["Canevas de dissertation littéraire Terminales A, C, D", ...(fomesoutraReference ? ["Corpus documentaire Fomesoutra : sujets et corrigés de dissertation"] : [])],
      fasciculeKnowledgeUsed: [ ...(fomesoutraReference ? [fomesoutraReference.sourceLabel] : []), ...part1SubParts.map(s => `${s.illustration.auteur} (${s.illustration.oeuvre})`) ],
      externalKnowledgeMobilized: [...part2SubParts.map(s => `${s.illustration.auteur} (${s.illustration.oeuvre})`)]
    },
    pedagogicalTransferExplanation: `Rédaction littéraire intégrale rédigée in extenso pour le thème « ${genreOrTopic} ».`,
    level1Hint: `Analysez la tension entre la portée sociale et la liberté créatrice dans « ${citationPure} ».`,
    level2Methodology: steps.map(s => `${s.phaseName} : ${s.instructions}`).join("\n"),
    level3GuidanceSteps: [
      `1. Introduction : Poser le problème sans aucun 'ou' (${problemStatement})`,
      `2. Axe I : ${part1Title}`,
      `3. Transition : Démontrer les limites de l'utilitarisme littéraire`,
      `4. Axe II : ${part2Title}`,
      `5. Conclusion : Établir la complémentarité dialectique des fonctions de l'art`
    ],
    level4DetailedOutline: `I. INTRODUCTION\n- Amorce littéraire\n- Citation épurée sans consigne : « ${citationPure} »\n- Problématique sans 'ou' : ${problemStatement}\n- Annonce du plan\n\nII. DÉVELOPPEMENT\n1. ${part1Title}\n` + part1SubParts.map(sp => `   * ${sp.title}`).join("\n") + `\n2. ${part2Title}\n` + part2SubParts.map(sp => `   * ${sp.title}`).join("\n") + `\n\nIII. CONCLUSION\n- Bilan : ${bilanSynthese}\n- Réponse : ${reponseDefinitive}\n- Élargissement : ${elargissement}`,
    level5FullRedaction: fullRedactionText,
    structuredRedaction,
    francaisPreliminaryWork,
    stepByStepBreakdown: steps.map((s, idx) => ({
      stepNumber: idx + 1,
      stepTitle: s.phaseName,
      methodologyRuleApplied: s.instructions,
      content: s.exemplaryDraft,
      sourceTags: ["Français", genreOrTopic],
      pedagogicalTip: "Veillez à toujours expliciter la citation pour prouver votre argument."
    })),
    fullSynthesizedResponse: fullRedactionText,
    evaluationCriteria: [
      {
        criterion: "Compréhension du sujet (CS)",
        fasciculeOrigin: true,
        scoreMax: 6,
        description: "Exactitude dans la saisie du sens de la citation et problématisation rigoureuse sans le mot 'ou'.",
        tipsForAutonomy: "Ne déformez jamais la pensée de l'auteur ; supprimez la consigne de l'introduction."
      },
      {
        criterion: "Organisation des idées (OI)",
        fasciculeOrigin: true,
        scoreMax: 6,
        description: "Plan dialectique équilibré, enchaînement fluide des paragraphes et présence de transitions.",
        tipsForAutonomy: "Chaque sous-partie doit correspondre à une seule idée directrice illustrée."
      },
      {
        criterion: "Langue et expression (LE)",
        fasciculeOrigin: true,
        scoreMax: 6,
        description: "Correction grammaticale, richesse du vocabulaire et syntaxe soutenue.",
        tipsForAutonomy: "Variez les connecteurs logiques et soignez la ponctuation."
      },
      {
        criterion: "Présentation de la copie (P)",
        fasciculeOrigin: true,
        scoreMax: 2,
        description: "Propreté, lisibilité, respect des alinéas sans aucun titre apparent.",
        tipsForAutonomy: "La copie finale d'examen doit être un texte continu prêt à lire."
      }
    ],
    isFallback: false
  };

  const result: FrancaisSolutionResult = {
    title: `Dissertation Littéraire — ${genreOrTopic}`,
    genreOrTopic,
    problemStatement,
    thesis,
    antithesis,
    steps,
    finalConclusion: fomesoutraReference
      ? `Résolution déterministe calibrée sur un patron de sujet/corrigé documentaire Fomesoutra ; ce corpus est une source pédagogique documentaire et non un référentiel ministériel.`
      : `Résolution littéraire déterministe fondée sur les connaissances locales du moteur.`,
    toMethodologyAnalysisResult: () => methodologyAnalysis
  };

  return {
    success: true,
    classification: {
      genreOrTopic,
      confidence
    },
    result,
    methodologyAnalysis,
    pedagogicalMetadata: {
      level: "Terminale A, C, D",
      discipline: "Français",
      examType: "Baccalauréat"
    }
  };
}
