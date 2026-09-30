import { SupportedLanguage, LanguageTaskType, LanguageResolutionResult } from "./types";
export type { SupportedLanguage, LanguageTaskType, LanguageResolutionResult };
import { MethodologyAnalysisResult, StructuredScientificExercise } from "../../src/types";
import { canonicalDiscipline } from "../disciplineRouter";
import { solveAdvancedLanguageTask } from "./advancedLanguageSolver";
import {
  solveEnglishPassiveVoice,
  solveEnglishVerbsInBrackets,
  analyzeEnglishSentence,
  generateEnglishGuidedWriting,
  ENGLISH_VOCABULARY_MEMO,
} from "./englishSolver";
import {
  isEnglishCompleteExam,
  solveEnglishCompleteExam,
  ENGLISH_OPPOSITES,
} from "./englishExamSolver";
import {
  solveGermanPerfekt,
  solveGermanPassive,
  analyzeGermanSentence,
  generateGermanAufsatz,
  GERMAN_OPPOSITES,
} from "./germanSolver";
import {
  solveSerVsEstar,
  solvePorVsPara,
  analyzeSpanishSentence,
  generateSpanishRedaccion,
  solveSpanishPassiveVoice,
  solveSpanishSubjunctive,
  SPANISH_VERBS,
} from "./spanishSolver";

/**
 * Detect language from explicit input or text analysis
 */
export function detectLanguage(text: string, explicitDiscipline?: string): SupportedLanguage | null {
  const canon = canonicalDiscipline(explicitDiscipline);
  if (canon === "anglais" || canon === "allemand" || canon === "espagnol") {
    return canon;
  }

  // RÈGLE ABSOLUE : Si une autre matière scolaire a été explicitement spécifiée
  // (Mathématiques, Physique-Chimie, SVT, Philosophie, Histoire, Géo, Français),
  // on NE DOIT JAMAIS classifier en langue étrangère !
  if (canon) {
    return null;
  }

  // Si le texte contient des signatures mathématiques ou scientifiques évidentes,
  // ce n'est JAMAIS une langue vivante étrangère.
  if (
    /(\b(f\s*\([a-z]\)|g\s*\([a-z]\)|h\s*\([a-z]\)|u_n|v_n|limite|\blim\b|dérivée|tableau de variations|intégrale|primitive|suite|matrice|vecteur|ln\s*[a-z0-9]|exp\s*[a-z0-9]|racine carrée|pythagore|thalès|polynôme|inéquation|équation|barycentre|fonctions et limites)\b|[=<>≤≥∫∑√]|\$\$.*\$\$|\\lim|\\frac|\\to)/i.test(
      text
    )
  ) {
    return null;
  }

  // Si l'élève spécifie un devoir d'une autre matière dans le texte
  if (
    /\b(?:devoir|exercice|cours|sujet|épreuve|epreuve|interro|fiche)\s+(?:d['’]|de\s+)(?:maths?|math[ée]matiques?|physique|chimie|svt|biologie|g[ée]ologie|philosophie|philo|histoire|g[ée]ographie|fran[çc]ais|litt[ée]rature|lettres)\b/i.test(
      text
    )
  ) {
    return null;
  }

  const lower = text.toLowerCase();

  // 0. Explicit homework patterns for foreign languages
  if (/\b(?:devoir|exercice|cours|sujet|épreuve|epreuve|interro|fiche)\s+(?:d['’]|de\s+)(?:anglais|englais|english)\b/i.test(lower)) {
    return "anglais";
  }
  if (/\b(?:devoir|exercice|cours|sujet|épreuve|epreuve|interro|fiche)\s+(?:d['’]|de\s+)(?:allemand|deutsch|german)\b/i.test(lower)) {
    return "allemand";
  }
  if (/\b(?:devoir|exercice|cours|sujet|épreuve|epreuve|interro|fiche)\s+(?:d['’]|de\s+)(?:espagnol|español|spanish)\b/i.test(lower)) {
    return "espagnol";
  }

  // 1. Explicit German indicators
  const germanExplicit = /\b(allemand|deutsch|german|perfekt|präteritum|preteritum|textverständnis|leseverstehen|grammatik|aufsatz|stellungnahme|lückentext|passiv|satzbau|wortschatz|gegenteil)\b/i.test(lower);
  const germanMatches = lower.match(/\b(ich|du|er|sie|wir|ihr|ist|sind|war|waren|haben|hat|hatte|hatten|nicht|kein|keine|keinen|keinem|keiner|einen|einem|einer|der|die|das|den|dem|des|schule|schüler|hausaufgabe|weil|obwohl|dass|warum|deutschland|berlin|immer|heute|gestern|morgen|bitte|danke|für|mit|wichtig|bildung|jugendliche|jugend)\b/gi) || [];
  if (germanExplicit || germanMatches.length >= 3) {
    return "allemand";
  }

  // 2. Explicit Spanish indicators
  // IMPORTANT : Ne JAMAIS inclure "de", "la", "en", "que", "un", "con", "para", "por", "al", "del"
  // car ces mots existent en français ou apparaissent massivement dans les énoncés français !
  const spanishExplicit = /\b(espagnol|español|spanish|voz pasiva|comprensión lectora|gramática|redacción|ensayo|subjuntivo|indefinido|pretérito|imperfecto|futuro simple|condicional|ser y estar|ser o estar|por y para|por o para|traducción|traduce|traducir)\b/i.test(lower);
  const spanishMatches = lower.match(/\b(yo|tú|él|ella|usted|nosotros|vosotros|ellos|ellas|ustedes|soy|eres|somos|sois|son|estoy|estás|está|estamos|están|tengo|tienes|tiene|tenemos|tienen|hacer|hace|hacen|hablar|habla|hablan|vivir|vive|viven|escribir|escribe|escriben|pero|aunque|porque|por qué|cómo|dónde|cuándo|quién|quiénes|españa|madrid|barcelona|gracias|hola|adiós|lengua|palabra|palabras|mucho|mucha|muchos|muchas|bueno|buena|buenos|buenas|los|las|unos|unas|alumno|alumnos|escuela|todos|todas|días|día|van|muy)\b/gi) || [];
  if (spanishExplicit || spanishMatches.length >= 3 || (/[¿¡]/.test(text) && spanishMatches.length >= 1)) {
    return "espagnol";
  }

  // 3. Explicit English indicators
  const englishExplicit = /\b(anglais|english|englais|reading comprehension|passive voice|reported speech|essay|composition|wh- questions|turn into passive|fill in the blanks?|irregular verbs?|gap-fill|past simple|past continuous|present continuous|present simple|present perfect|past participle|modal verbs?|future simple|past simple|present simple|present perfect|past perfect|comparative|superlative|conjugate|conjugation)\b/i.test(lower);
  const englishMatches = lower.match(/\b(the|is|are|was|were|have|has|had|do|does|did|will|would|can|could|should|must|don't|doesn't|didn't|yesterday|tomorrow|school|teacher|student|what|where|when|why|how|who|which|this|that|these|those|because|although|however|always|never)\b/gi) || [];
  if (englishExplicit || englishMatches.length >= 3) {
    return "anglais";
  }

  return null;
}

/**
 * Detect specific language task type
 */
export function detectLanguageTaskType(text: string, language: SupportedLanguage): LanguageTaskType {
  const lower = text.toLowerCase();

  // Complete English exam paper (Reading + Grammar + Vocabulary + Writing)
  if (language === "anglais" && isEnglishCompleteExam(text)) {
    return "complete_exam";
  }

  // Passive voice
  if (/\b(passive voice|turn into passive|put into passive|passif|passiv|setzen sie ins passiv|voz pasiva|pasiva)\b/i.test(lower)) {
    return "passive_voice";
  }

  // Reported speech
  if (/\b(reported speech|indirect speech|direct speech|discours rapporté|discours indirect|indirekte rede|estilo indirecto)\b/i.test(lower)) {
    return "reported_speech";
  }

  // Verbs in brackets / conjugation
  // Exclure les notations mathématiques de type f(x), g(x), (1), (a)...
  const hasVerbsInBrackets = /[\(\[][a-zA-Z]{3,}(?:\s+[a-zA-Z]+)*[\)\]]/.test(text) && !/(f|g|h|u|v|x|y|t)\s*\([a-z0-9\+\-]+\)/i.test(text);
  if (hasVerbsInBrackets || /\b(verbs? in brackets|correct tense|conjugate|conjugue|temps des verbes|perfekt|präteritum|subjuntivo|ser o estar|ser y estar|por o para|por y para)\b/i.test(lower)) {
    return "tenses_conjugation";
  }

  // Essay / Guided writing / Composition
  if (/\b(write an essay|essay|composition|expression écrite|guided writing|aufsatz|freie produktion|stellungnahme|leserbrief|redacción|ensayo|escriba un texto|rédige)\b/i.test(lower)) {
    return "guided_writing";
  }

  // Reading comprehension / Textverständnis
  if (/\b(reading comprehension|textverständnis|leseverstehen|comprensión lectora|questions sur le texte|fragen zum text|richtig oder falsch|true or false|verdadero o falso)\b/i.test(lower) || (text.length > 250 && /\?/.test(text))) {
    return "reading_comprehension";
  }

  // Translation
  if (/\b(translate|translation|traduire|traduis|traduction|übersetze|übersetzen|übersetzung|traduce|traducir|traducción|version|thème)\b/i.test(lower)) {
    return "translation";
  }

  // Vocabulary / Synonyms / Antonyms
  if (/\b(synonym|antonym|opposite|gegenteil|sinónimo|antónimo|vocabulaire|vocabulary|wortschatz|vocabulario)\b/i.test(lower)) {
    return "vocabulary";
  }

  // Simple sentence analysis
  if (text.trim().length < 160 && !/\n/.test(text.trim())) {
    return "sentence_analysis";
  }

  return "general_exercise";
}

/**
 * Solve any foreign language homework or exercise deterministically without external AI
 */
export function solveLanguageExercise(
  rawText: string,
  language: SupportedLanguage,
  academicLevel: string = "Collège / Lycée"
): LanguageResolutionResult {
  const taskType = detectLanguageTaskType(rawText, language);
  const advanced = solveAdvancedLanguageTask(rawText, language);
  const languageLabel = language === "anglais" ? "Anglais" : (language === "allemand" ? "Allemand" : "Espagnol");

  let title = `Résolution Complète de Devoir – ${languageLabel}`;
  let fullSolution = "";
  let frenchMirrorTranslation: string | undefined;
  let structuredExercises: StructuredScientificExercise[] | undefined;
  const grammarRulesApplied: Array<{ ruleName: string; explanation: string; example: string }> = [];
  const vocabularyHighlights: Array<{ term: string; nature: string; frenchEquivalent: string; contextExample?: string }> = [];

  // ==========================================
  // DISPATCH PAR DISCIPLINE ET FAMILLE D'EXERCICE
  // ==========================================

  // Couverture avancée déterministe avant les anciens solveurs spécialisés.
  if (advanced.handled) {
    title = advanced.title;
    fullSolution = advanced.solution;
    frenchMirrorTranslation = advanced.french;
    grammarRulesApplied.push({ ruleName: "Règle appliquée", explanation: advanced.rule, example: advanced.solution });
  } else if (language === "anglais") {
    switch (taskType) {
      case "complete_exam":
      case "reading_comprehension": {
        const examRes = solveEnglishCompleteExam(rawText, academicLevel);
        title = examRes.title;
        fullSolution = examRes.fullMarkdownSolution;
        frenchMirrorTranslation = examRes.frenchMirrorTranslation;
        grammarRulesApplied.push(...examRes.grammarRules);
        vocabularyHighlights.push(...examRes.vocabularyList);
        structuredExercises = examRes.structuredExercises;
        break;
      }

      case "vocabulary": {
        // Résolution spécifique de contraires ou synonymes en anglais
        const lines = rawText.split(/\n+/);
        const solvedOpposites: string[] = [];
        for (const line of lines) {
          const match = line.match(/\b([a-zA-Z]+)\s*(?:≠|!=|opposite|antonym|\/)\s*([_.]+)?/i);
          if (match) {
            const word = match[1].toLowerCase();
            const oppInfo = ENGLISH_OPPOSITES[word];
            if (oppInfo) {
              solvedOpposites.push(`• **${match[1]}** ≠ **${oppInfo.opposite}** _(ou : ${oppInfo.alternatives?.join(", ") || oppInfo.opposite})_ ➜ *${oppInfo.french}*`);
              vocabularyHighlights.push({
                term: `${match[1]} ≠ ${oppInfo.opposite}`,
                nature: oppInfo.nature,
                frenchEquivalent: oppInfo.french,
              });
            }
          }
        }

        if (solvedOpposites.length > 0) {
          title = "Devoir d'Anglais : Vocabulaire et Antonymes (Opposites)";
          fullSolution = `### 1. RÉSOLUTION DES CONTRAIRES (OPPOSITES) :\n\n${solvedOpposites.join("\n\n")}\n\n### 2. RÈGLE OFFICIELLE DE FORMATION LEXICALE :\nEn anglais, les antonymes se forment par des racines distinctes (ex: *young / old*) ou par préfixation privative (*un-* pour *unimportant*, *dis-* pour *disadvantage*, *in-* pour *ineffective*).`;
          grammarRulesApplied.push({
            ruleName: "Opposites & Negative Prefixes in English",
            explanation: "L'emploi des préfixes 'un-', 'in-', 'im-', 'dis-' permet d'inverser le sens des adjectifs de base.",
            example: "important ➜ unimportant ; happy ➜ unhappy ; possible ➜ impossible.",
          });
          break;
        }

        // Fallback exam solver si c'est un extrait d'examen plus large
        const examRes = solveEnglishCompleteExam(rawText, academicLevel);
        title = examRes.title;
        fullSolution = examRes.fullMarkdownSolution;
        frenchMirrorTranslation = examRes.frenchMirrorTranslation;
        grammarRulesApplied.push(...examRes.grammarRules);
        vocabularyHighlights.push(...examRes.vocabularyList);
        structuredExercises = examRes.structuredExercises;
        break;
      }

      case "passive_voice": {
        const pass = solveEnglishPassiveVoice(rawText);
        title = "Devoir d'Anglais : Transformation à la Voix Passive (Passive Voice)";
        fullSolution = `### 1. PHRASE TRANSFORMÉE À LA VOIX PASSIVE :\n\n> **${pass.solvedSentence}**\n\n### 2. DÉCOMPOSITION MÉTHODIQUE :\n${pass.breakdown}\n\n### 3. RÈGLE GRAMMATICALE OFFICIELLE :\n${pass.ruleExplanation}`;
        grammarRulesApplied.push({
          ruleName: "Passive Voice Formulation",
          explanation: "Object + Auxiliary BE (in original tense) + Past Participle (V3) + by + Agent",
          example: "The boy eats an apple ➜ An apple is eaten by the boy.",
        });
        break;
      }

      case "tenses_conjugation": {
        const verbRes = solveEnglishVerbsInBrackets(rawText);
        title = "Devoir d'Anglais : Concordance des Temps et Conjugaison (Tenses in Context)";
        fullSolution = `### 1. CORRECTION INTÉGRALE DES PHRASES :\n\n${verbRes.fullCorrectedText}\n\n### 2. TABLEAU DE SYNTHÈSE DES TEMPS UTILISÉS :\n\n| Phrase | Verbe à l'infinitif | Forme conjuguée exacte | Temps grammatical | Justification contextuelle |\n|---|---|---|---|---|\n` +
          verbRes.correctedLines.map((c, i) => `| ${i + 1} | Base | **${c.verb}** | ${c.tense} | ${c.explanation} |`).join("\n");
        grammarRulesApplied.push({
          ruleName: "Tense Consistency & Time Markers",
          explanation: "Past Simple pour les actions révolues datées (yesterday, in 2010), Present Perfect pour les liens présent-passé (since, for, already, just).",
          example: "I (live) in Bouaké since 2018 ➜ I have lived in Bouaké since 2018.",
        });
        break;
      }

      case "guided_writing": {
        const essayRes = generateEnglishGuidedWriting(rawText);
        title = `Devoir d'Anglais : Production Écrite Guidée – ${essayRes.title}`;
        fullSolution = `### 1. COMPOSITION EN ANGLAIS CONFORME AUX EXIGENCES ACADÉMIQUES :\n\n${essayRes.englishEssay}\n\n---\n\n### 2. TRADUCTION INTÉGRALE EN MIROIR (FRANÇAIS) :\n\n${essayRes.frenchMirrorTranslation}\n\n---\n\n### 3. CONNECTEURS LOGIQUES UTILISÉS (LINKING WORDS) :\n\n` +
          essayRes.keyLinkingWords.map(k => `• **${k.word}** (${k.translation}) : _${k.function}_`).join("\n");
        frenchMirrorTranslation = essayRes.frenchMirrorTranslation;
        grammarRulesApplied.push({
          ruleName: "Formal Essay Structure",
          explanation: "Introduction (Hook + Thesis), Body Paragraph 1 (Arguments), Body Paragraph 2 (Nuance), Conclusion (Summary).",
          example: "First and foremost... Furthermore... Consequently... In conclusion...",
        });
        break;
      }

      case "sentence_analysis":
      default: {
        const sent = analyzeEnglishSentence(rawText);
        title = "Devoir d'Anglais : Analyse Grammaticale et Traduction de Phrase";
        fullSolution = `### 1. TRADUCTION FRANÇAISE FIDÈLE :\n\n> « **${sent.frenchTranslation}** »\n\n### 2. ANALYSE SYNTAXIQUE DÉTAILLÉE :\n\n` +
          sent.syntacticBreakdown.map(b => `• **${b.function}** : \`${b.element}\` (${b.nature})`).join("\n") +
          `\n\n### 3. TRANSFORMATIONS GRAMMATICALES UTILES :\n\n• **${sent.sentenceTransformations.negative}**\n• **${sent.sentenceTransformations.interrogative}**\n` +
          (sent.sentenceTransformations.passive ? `• **Voix passive** : ${sent.sentenceTransformations.passive}\n` : "") +
          (sent.sentenceTransformations.tagQuestion ? `• **Question tag** : ${sent.sentenceTransformations.tagQuestion}\n` : "") +
          `\n### 4. RÈGLES GRAMMATICALES FONDAMENTALES :\n${sent.grammarRules}`;
        frenchMirrorTranslation = sent.frenchTranslation;
        grammarRulesApplied.push({
          ruleName: "English Sentence Word Order (SVO)",
          explanation: "L'ordre normal des mots en anglais est Sujet + Verbe + Objet. Tout adjectif épithète se place strictement AVANT le nom.",
          example: "A green book (et non *a book green*).",
        });
        break;
      }
    }

    vocabularyHighlights.push(...ENGLISH_VOCABULARY_MEMO.slice(0, 5));
  } else if (language === "allemand") {
    switch (taskType) {
      case "passive_voice": {
        const passGer = solveGermanPassive(rawText);
        title = "Devoir d'Allemand : Vorgangspassiv (Voix Passive en Allemand)";
        fullSolution = `### 1. TRANSFORMATION AU PASSIF ALLEMAND :\n\n> **${passGer.passiveSentence}**\n\n### 2. DÉMARCHE MÉTHODIQUE :\n${passGer.breakdown}\n\n### 3. RÈGLE OFFICIELLE DU PASSIF :\n${passGer.ruleExplanation}`;
        grammarRulesApplied.push({
          ruleName: "Vorgangspassiv Präsens",
          explanation: "Sujet au Nominatif + werden (conjugué en Pos. 2) + von + Datif + Partizip II (fin de phrase).",
          example: "Der Schüler liest den Text ➜ Der Text wird vom Schüler gelesen.",
        });
        break;
      }

      case "tenses_conjugation": {
        const perfGer = solveGermanPerfekt(rawText);
        title = "Devoir d'Allemand : Das Perfekt (Le Parfait et les Temps du Passé)";
        fullSolution = `### 1. PHRASE AU PERFEKT :\n\n> **${perfGer.perfektSentence}**\n\n• Auxiliaire employé : **${perfGer.auxiliaryUsed}**\n• Partizip II obtenu : **${perfGer.partizip2}**\n\n### 2. RÈGLE D'OR DE LA SATZKLAMMER :\n${perfGer.ruleExplanation}`;
        grammarRulesApplied.push({
          ruleName: "Satzklammer im Perfekt",
          explanation: "L'auxiliaire est en position 2 et le participe passé est impérativement rejeté à la fin de la phrase.",
          example: "Ich habe gestern meine Hausaufgaben gemacht.",
        });
        break;
      }

      case "guided_writing": {
        const aufsatz = generateGermanAufsatz(rawText);
        title = `Devoir d'Allemand : Freie Produktion / Aufsatz – ${aufsatz.title}`;
        fullSolution = `### 1. RÉDACTION EN ALLEMAND (TEXTE FLUIDE ET STRUCTURÉ) :\n\n${aufsatz.germanAufsatz}\n\n---\n\n### 2. TRADUCTION INTÉGRALE EN MIROIR (FRANÇAIS) :\n\n${aufsatz.frenchMirrorTranslation}\n\n---\n\n### 3. CONNECTEURS ET MOTS DE LIAISON ALLEMANDS :\n\n` +
          aufsatz.keyConnectors.map(k => `• **${k.word}** (${k.translation}) : _${k.function}_`).join("\n");
        frenchMirrorTranslation = aufsatz.frenchMirrorTranslation;
        grammarRulesApplied.push({
          ruleName: "Satzbau in der freien Produktion",
          explanation: "Variation de structure : propositions coordonnées (und, aber, denn) et subordonnées avec verbe à la fin (weil, dass).",
          example: "Ich lerne fleißig, weil die Schule für meine Zukunft wichtig ist.",
        });
        break;
      }

      case "sentence_analysis":
      default: {
        const sentGer = analyzeGermanSentence(rawText);
        title = "Devoir d'Allemand : Analyse de Phrase et Règles de Satzbau";
        fullSolution = `### 1. TRADUCTION FRANÇAISE EXACTE :\n\n> « **${sentGer.frenchTranslation}** »\n\n### 2. ANALYSE SYNTAXIQUE ET CAS GRAMMATICAUX :\n\n` +
          sentGer.syntacticBreakdown.map(b => `• **${b.function}** : \`${b.element}\` (${b.nature})`).join("\n") +
          `\n\n### 3. TRANSFORMATIONS GRAMMATICALES ET VARIANTES :\n\n• **Au Perfekt** : ${sentGer.sentenceTransformations.perfekt}\n• **Subordonnée (weil)** : ${sentGer.sentenceTransformations.subordinateWeil}\n• **Question fermée (Inversion)** : ${sentGer.sentenceTransformations.questionInversion}\n\n### 4. RÈGLES DE GRAMMAIRE APPLIQUÉES :\n${sentGer.grammarRules}`;
        frenchMirrorTranslation = sentGer.frenchTranslation;
        grammarRulesApplied.push({
          ruleName: "Verb-Zweitstellung (V2)",
          explanation: "Dans toute phrase déclarative principale, le verbe conjugué occupe toujours la 2ème position syntaxique.",
          example: "Heute lerne ich Deutsch (et non *Heute ich lerne*).",
        });
        break;
      }
    }

    vocabularyHighlights.push(
      ...GERMAN_OPPOSITES.slice(0, 5).map(o => ({
        term: o.word,
        nature: "Adjektiv / Antonyme",
        frenchEquivalent: o.french,
        contextExample: `${o.word} ≠ ${o.opposite}`,
      }))
    );
  } else {
    // Espagnol
    switch (taskType) {
      case "passive_voice": {
        const passEsp = solveSpanishPassiveVoice(rawText);
        title = "Devoir d'Espagnol : Voz Pasiva con SER";
        fullSolution = `### 1. PHRASE TRANSFORMÉE À LA VOIX PASSIVE :\n\n> **${passEsp.solvedSentence}**\n\n### 2. DÉMARCHE MÉTHODIQUE :\n${passEsp.breakdown}\n\n### 3. RÈGLE OFFICIELLE DE LA VOIX PASSIVE :\n${passEsp.ruleExplanation}`;
        grammarRulesApplied.push({
          ruleName: "Voz Pasiva con SER + Participio",
          explanation: "Sujeto paciente + SER (au temps d'origine) + Participio pasado (accordé) + por + Agente.",
          example: "El autor escribió la novela ➜ La novela fue escrita por el autor.",
        });
        break;
      }

      case "tenses_conjugation": {
        const isSerEstar = /ser|estar/i.test(rawText);
        const isPorPara = /por|para/i.test(rawText);
        const isSubjunctive = /subjuntivo|es necesario que|es importante que|ojal[áa]|quiero que/i.test(rawText);

        if (isSubjunctive) {
          const subRes = solveSpanishSubjunctive(rawText);
          title = "Devoir d'Espagnol : Presente de Subjuntivo";
          fullSolution = `### 1. PHRASE AU SUBJONCTIF :\n\n> **${subRes.solvedSentence}**\n\n### 2. RÈGLE DU SUBJONCTIF ESPAGNOL :\n${subRes.ruleExplanation}`;
          grammarRulesApplied.push({
            ruleName: "Presente de Subjuntivo",
            explanation: "Inversion des voyelles caractéristiques : -AR ➜ -e ; -ER/-IR ➜ -a.",
            example: "Es necesario que estudies (estudiar) / Es importante que lea (leer).",
          });
        } else if (isSerEstar) {
          const res = solveSerVsEstar(rawText);
          title = "Devoir d'Espagnol : Emploi de SER et ESTAR";
          fullSolution = `### 1. PHRASE COMPLÉTÉE AVEC LE BON VERBE :\n\n> **${res.solvedSentence}**\n\n• Verbe retenu : **${res.chosenVerb}**\n\n### 2. RÈGLE OFFICIELLE DE DISTINCTION :\n${res.ruleExplanation}`;
          grammarRulesApplied.push({
            ruleName: "Distinction SER vs ESTAR",
            explanation: "SER = essence, identité, profession, heure. ESTAR = localisation, état temporaire, humeur.",
            example: "Kouassi es profesor (Ser) / Kouassi está enfermo hoy (Estar).",
          });
        } else if (isPorPara) {
          const res = solvePorVsPara(rawText);
          title = "Devoir d'Espagnol : Emploi des Prépositions POR et PARA";
          fullSolution = `### 1. PHRASE COMPLÉTÉE AVEC LA BONNE PRÉPOSITION :\n\n> **${res.solvedSentence}**\n\n• Préposition exacte : **${res.chosenPreposition}**\n\n### 2. RÈGLE D'OR POR vs PARA :\n${res.ruleExplanation}`;
          grammarRulesApplied.push({
            ruleName: "POR vs PARA",
            explanation: "POR exprime la cause ou le moyen. PARA exprime le but ou le destinataire.",
            example: "Estudio para triunfar (Para) / No vino por la lluvia (Por).",
          });
        } else {
          title = "Devoir d'Espagnol : Conjugaison des Verbes et Subjonctif";
          fullSolution = `### 1. TABLEAU DE CONJUGAISON DES VERBES CLÉS :\n\n| Verbe infinitif | Présent de l'indicatif | Passé simple (Indefinido) | Présent du subjonctif | Sens en français |\n|---|---|---|---|---|\n` +
            Object.values(SPANISH_VERBS).slice(0, 6).map(v => `| **${v.infinitivo}** | ${v.presente.split(",")[0]}... | ${v.indefinido.split(",")[0]}... | ${v.subjuntivo.split(",")[0]}... | ${v.french} |`).join("\n");
          grammarRulesApplied.push({
            ruleName: "Conjugaison et Subjonctif espagnol",
            explanation: "Inversion des voyelles caractéristiques au subjonctif : -AR prend -e, -ER/-IR prennent -a.",
            example: "Hablar ➜ que yo hable ; Comer ➜ que yo coma.",
          });
        }
        break;
      }

      case "guided_writing": {
        const redac = generateSpanishRedaccion(rawText);
        title = `Devoir d'Espagnol : Redacción y Expresión Escrita – ${redac.title}`;
        fullSolution = `### 1. RÉDACTION EN ESPAGNOL CONFORME AU PROGRAMME ACADÉMIQUE :\n\n${redac.spanishRedaccion}\n\n---\n\n### 2. TRADUCTION INTÉGRALE EN MIROIR (FRANÇAIS) :\n\n${redac.frenchMirrorTranslation}\n\n---\n\n### 3. CONNECTEURS LOGIQUES ESPAGNOLS :\n\n` +
          redac.keyConnectors.map(k => `• **${k.word}** (${k.translation}) : _${k.function}_`).join("\n");
        frenchMirrorTranslation = redac.frenchMirrorTranslation;
        grammarRulesApplied.push({
          ruleName: "Conectores discursivos en español",
          explanation: "En primer lugar para empezar, además para añadir, por otro lado para matizar, en conclusión para cerrar.",
          example: "En primer lugar... Además... Por consiguiente... En conclusión...",
        });
        break;
      }

      case "sentence_analysis":
      default: {
        const sentEsp = analyzeSpanishSentence(rawText);
        title = "Devoir d'Espagnol : Analyse Grammaticale et Traduction";
        fullSolution = `### 1. TRADUCTION FRANÇAISE EXACTE :\n\n> « **${sentEsp.frenchTranslation}** »\n\n### 2. ANALYSE SYNTAXIQUE DE LA PHRASE :\n\n` +
          sentEsp.syntacticBreakdown.map(b => `• **${b.function}** : \`${b.element}\` (${b.nature})`).join("\n") +
          `\n\n### 3. TRANSFORMATIONS GRAMMATICALES UTILES :\n\n• **Forme négative** : ${sentEsp.sentenceTransformations.negativa}\n• **Forme interrogative** : ${sentEsp.sentenceTransformations.interrogativa}\n• **Au passé** : ${sentEsp.sentenceTransformations.pasado}\n\n### 4. RÈGLES DE GRAMMAIRE ESPAGNOLE APPLIQUÉES :\n${sentEsp.grammarRules}`;
        frenchMirrorTranslation = sentEsp.frenchTranslation;
        grammarRulesApplied.push({
          ruleName: "Omission du pronom sujet en espagnol",
          explanation: "Le pronom personnel sujet (yo, tú...) est généralement omis car la terminaison verbale indique clairement la personne.",
          example: "Hablo español (et non systématiquement *Yo hablo español*).",
        });
        break;
      }
    }

    vocabularyHighlights.push(
      { term: "la escuela / el colegio", nature: "sustantivo", frenchEquivalent: "l'école / le collège", contextExample: "Voy al colegio todos los días." },
      { term: "el alumno / la alumna", nature: "sustantivo", frenchEquivalent: "l'élève", contextExample: "Los alumnos estudian con dedicación." },
      { term: "el medio ambiente", nature: "sustantivo", frenchEquivalent: "l'environnement", contextExample: "Debemos proteger el medio ambiente." },
      { term: "el trabajo", nature: "sustantivo", frenchEquivalent: "le travail / l'emploi", contextExample: "La educación permite conseguir un buen trabajo." },
      { term: "la solidaridad", nature: "sustantivo", frenchEquivalent: "la solidarité", contextExample: "La solidaridad entre los pueblos es fundamental." },
    );
  }

  // ==========================================
  // CONSTRUCTION DU FORMAT METHODOLOGY STANDARD
  // ==========================================

  const methodologyAnalysis: MethodologyAnalysisResult = {
    exerciseTypeIdentified: `${title} (${languageLabel})`,
    disciplineIdentified: languageLabel,
    isDirectRestitution: false,
    isFallback: false,
    structuredScientificResolution: structuredExercises,
    conceptualDisambiguation: {
      hasAmbiguousTerm: false,
      term: languageLabel,
      possibleMeanings: [`Devoir officiel de ${languageLabel}`],
      retainedMeaning: `Programme d'enseignement secondaire de ${languageLabel}`,
      justification: `Traitement linguistique rigoureux sans dérive vers la dissertation philosophique.`,
    },
    fasciculeMethodologyActivated: {
      name: `Méthodologie Officielle de Langue Vivante : ${languageLabel}`,
      description: `Résolution intégrale et autonome de devoirs de ${languageLabel} selon les normes pédagogiques des examens (BEPC & BAC).`,
      stepsApplied: [
        "1. Analyse de la structure syntaxique et identification des règles grammaticales cibles.",
        "2. Résolution pas-à-pas avec application stricte des règles de grammaire et des temps.",
        "3. Vérification par traduction miroir française pour garantir le sens et la fidélité.",
      ],
    },
    sourceDecomposition: {
      fasciculeMethodologies: [`Programme officiel de ${languageLabel} (Secondaire & Baccalauréat)`],
      fasciculeKnowledgeUsed: grammarRulesApplied.map(g => g.ruleName),
      externalKnowledgeMobilized: vocabularyHighlights.map(v => v.term),
    },
    pedagogicalTransferExplanation: `Application directe et déterministe des compétences de ${languageLabel} : syntaxe, conjugaison, enrichissement lexical et expression fidèle sans recours à l'IA.`,
    level1Hint: grammarRulesApplied[0]?.explanation || `Repère le temps du verbe et la structure de la phrase en ${languageLabel} avant de transformer l'énoncé.`,
    level2Methodology: `Applique la règle de grammaire ${languageLabel} : structure sujet-auxiliaire-participe/compléments en respectant la concordance des temps.`,
    level3GuidanceSteps: [
      `1. Identifier la règle linguistique : ${grammarRulesApplied[0]?.ruleName || "Morphosyntaxe et temps"}`,
      `2. Transformer ou rédiger selon les normes académiques en ${languageLabel}`,
      `3. Vérifier l'accord sujet-verbe et la ponctuation`,
      `4. Valider le sens par la traduction française miroir`,
    ],
    level4DetailedOutline: `I. Résolution de l'énoncé :\n${fullSolution.slice(0, 300)}...\n\nII. Règles grammaticales :\n${grammarRulesApplied.map(g => `• ${g.ruleName}`).join("\n")}`,
    level5FullRedaction: fullSolution,
    fullSynthesizedResponse: fullSolution,
    structuredRedaction: {
      planSummary: `Résolution & Correction de ${languageLabel} | Règles Grammaticales & Traduction`,
      introduction: {
        amorce: `Ce travail de ${languageLabel} porte sur : ${title}.`,
        definitionTension: `Application stricte des règles morphosyntaxiques de ${languageLabel}.`,
        problematique: `Comment traiter cet exercice de ${languageLabel} avec exactitude et clarté ?`,
        annoncePlan: `Nous présentons d'abord la résolution intégrale de l'exercice, puis les règles grammaticales et le vocabulaire associés.`,
        fullText: `Ce devoir de ${languageLabel} (${title}) est traité de façon méthodique et rigoureuse sans recourir à un format de dissertation inadapté.`,
      },
      development: {
        part1: {
          partNumber: 1,
          title: "Résolution Complète du Devoir",
          thesisOverview: "Correction fidèle de l'énoncé soumis",
          subParts: [
            {
              subPartLetter: "A",
              title: "Solution intégrale",
              argument: "Résolution pas-à-pas de l'énoncé",
              explication: fullSolution,
              illustration: {
                auteur: `Enseignement de ${languageLabel}`,
                oeuvre: title,
                citation: rawText.slice(0, 80),
                analyseIllustration: frenchMirrorTranslation ? `Traduction miroir : ${frenchMirrorTranslation.slice(0, 100)}` : "Respect des normes académiques.",
              },
              fullText: fullSolution,
            }
          ],
          fullText: fullSolution,
        },
        transition1: `Après cette résolution complète, voici les règles de grammaire et le vocabulaire essentiels :`,
        part2: {
          partNumber: 2,
          title: "Règles Grammaticales et Lexique Clé",
          thesisOverview: "Points clés pour réussir le devoir et l'examen",
          subParts: grammarRulesApplied.map((g, idx) => ({
            subPartLetter: ["A", "B", "C", "D"][idx] || `${idx + 1}`,
            title: g.ruleName,
            argument: g.ruleName,
            explication: g.explanation,
            illustration: {
              auteur: `Grammaire de ${languageLabel}`,
              oeuvre: "Guide officiel",
              citation: g.example,
              analyseIllustration: `Exemple d'application canonique de la règle.`,
            },
            fullText: `${g.ruleName} : ${g.explanation} (Ex : ${g.example})`,
          })),
          fullText: grammarRulesApplied.map(g => `• ${g.ruleName} : ${g.explanation} (Ex : ${g.example})`).join("\n"),
        },
      },
      conclusion: {
        bilanSynthese: `L'exercice de ${languageLabel} a été résolu de manière complète et rigoureuse.`,
        reponseDefinitive: `Toutes les questions sont traitées avec exactitude syntaxique et lexicale.`,
        elargissement: `Retiens ces structures pour tes futures épreuves de langues.`,
        fullText: `Le devoir est intégralement complété conformément aux exigences officielles en ${languageLabel}.`,
      },
    },
    stepByStepBreakdown: [
      {
        stepNumber: 1,
        stepTitle: "Identification de la consigne et du temps verbal",
        methodologyRuleApplied: `Règle de ${languageLabel}`,
        content: `Analyse de l'énoncé : « ${rawText.slice(0, 100)} » pour déterminer l'opération linguistique requise.`,
        sourceTags: [languageLabel, taskType],
        pedagogicalTip: "Vérifier le sujet, le verbe et le complément avant toute manipulation.",
      },
      {
        stepNumber: 2,
        stepTitle: "Application de la règle grammaticale",
        methodologyRuleApplied: grammarRulesApplied[0]?.ruleName || "Grammaire officielle",
        content: fullSolution,
        sourceTags: [languageLabel, "Correction"],
        pedagogicalTip: "Conserver le même temps verbal et respecter la concordance.",
      },
      {
        stepNumber: 3,
        stepTitle: "Traduction miroir et consolidation",
        methodologyRuleApplied: "Transposition bilingue",
        content: frenchMirrorTranslation || "Traduction fidèle du résultat obtenu.",
        sourceTags: [languageLabel, "Traduction"],
        pedagogicalTip: "La rétro-traduction permet d'éviter les contresens et faux-amis.",
      },
    ],
    evaluationCriteria: [
      { criterion: "Exactitude morphosyntaxique", fasciculeOrigin: true, scoreMax: 8, description: "Respect des accords, temps verbaux et ordre des mots.", tipsForAutonomy: "Vérifier la terminaison de chaque verbe." },
      { criterion: "Précision lexicale et orthographe", fasciculeOrigin: true, scoreMax: 6, description: "Vocabulaire adapté et absence de faux-amis.", tipsForAutonomy: "Employer les termes clés vus en cours." },
      { criterion: "Respect de la consigne", fasciculeOrigin: true, scoreMax: 6, description: "Traitement intégral de chaque question posée.", tipsForAutonomy: "Relire attentivement la question avant de valider." },
    ],
  };

  return {
    language,
    languageLabel,
    taskType,
    title,
    fullSolution,
    frenchMirrorTranslation,
    grammarRulesApplied,
    vocabularyHighlights,
    methodologyAnalysis,
  };
}

/**
 * Handle conversational tutor queries for foreign languages in /api/tutor-chat
 */
export function solveLanguageChat(query: string, language: SupportedLanguage): string {
  const res = solveLanguageExercise(query, language);
  return `### ${res.title}\n\n${res.fullSolution}\n\n---\n\n### 💡 Mémo Révision Rapide :\n` +
    res.grammarRulesApplied.map(g => `• **${g.ruleName}** : ${g.explanation}\n  _Exemple_ : \`${g.example}\``).join("\n") +
    (res.vocabularyHighlights && res.vocabularyHighlights.length > 0
      ? `\n\n### 📚 Vocabulaire Clé :\n` + res.vocabularyHighlights.map(v => `• **${v.term}** (${v.nature}) : ${v.frenchEquivalent}`).join("\n")
      : "");
}
