import { FallbackParams } from "./ivorianFallback";
import { findAcademicKnowledge } from "../src/data/academicKnowledgeBase";
import { StructuredRedaction, SubjectNatureAnalysis } from "../src/types";

function buildSubjectNatureAnalysis(cleanSubject: string, chapterTitle: string, isTwoAxes: boolean, studentProfile?: any): SubjectNatureAnalysis {
  const lower = cleanSubject.toLowerCase();
  const keyWordsFound: { word: string; impact: string }[] = [];

  if (lower.includes("toujours")) {
    keyWordsFound.push({ word: "toujours", impact: "Interroge le caractère absolu ou universel de l'affirmation ; oblige à rechercher les exceptions, restrictions et limites effectives." });
  }
  if (lower.includes("souvent")) {
    keyWordsFound.push({ word: "souvent", impact: "Soulève la question de la fréquence sans être une vérité absolue, invitant à distinguer la règle générale des cas particuliers." });
  }
  if (lower.includes("peut-on") || lower.includes("peut-il") || lower.includes("peut-elle") || lower.includes("peut ")) {
    keyWordsFound.push({ word: "peut-il / peut-on", impact: "Double interrogation : possibilité pratique (de fait) et légitimité éthique, morale ou juridique (de droit)." });
  }
  if (lower.includes("doit-on") || lower.includes("doit-il") || lower.includes("doit-elle") || lower.includes("doit ")) {
    keyWordsFound.push({ word: "doit-il / doit-on", impact: "Interroge l'obligation morale, le devoir impératif ou la nécessité inhérente à la nature des choses." });
  }
  if (lower.includes("dans quelle mesure")) {
    keyWordsFound.push({ word: "dans quelle mesure", impact: "Appelle à évaluer le degré exact de validité et à fixer les bornes précises où cesse la validité de la thèse." });
  }
  if (lower.includes("en quoi")) {
    keyWordsFound.push({ word: "en quoi", impact: "Invite à expliciter la modalité, la nature profonde et les mécanismes concrets de la proposition." });
  }
  if (lower.includes("suffit-il")) {
    keyWordsFound.push({ word: "suffit-il", impact: "Distingue la condition nécessaire de la condition suffisante, commandant de rechercher les compléments indispensables." });
  }
  if (lower.includes("ne... que") || lower.includes("n'est-il que") || lower.includes("n'est que")) {
    keyWordsFound.push({ word: "ne... que", impact: "Interroge un éventuel réductionnisme ; invite à réfuter la vision réductrice en révélant une dimension plus vaste." });
  }

  if (keyWordsFound.length === 0) {
    keyWordsFound.push({ word: "Termes directeurs du sujet", impact: "Étude claire et méthodique pour vérifier le bien-fondé de la thèse et ses limites selon le programme officiel." });
  }

  const isQuestion = cleanSubject.includes("?");
  const subjectType = isQuestion
    ? (lower.includes("ou ") || lower.includes("toujours") || lower.includes("peut") || lower.includes("doit") 
        ? "Sujet de discussion / débat" 
        : "Question directe")
    : (lower.includes("expliquez") || lower.includes("commentez") 
        ? "Sujet d'explication de citation" 
        : "Sujet de réflexion");

  const tensionOrOpposition = `Débat entre la part de vérité de l'affirmation (Axe I) et ses limites ou contre-exemples essentiels (Axe II) dans le chapitre : ${chapterTitle}.`;

  const justificationPlan = isTwoAxes
    ? "Le sujet appelle deux étapes de réflexion (explication de l'idée puis examen des limites). Privilégie un plan en 2 axes simple et direct sans créer un 3e axe artificiel."
    : "Le sujet justifie une progression en 3 axes selon la méthode demandée.";

  let detectedGeographicContext = "Universel / International";
  let detectedCurriculumMethodology = "Dissertation Académique Universelle";
  const userDirectivesApplied: string[] = [];

  if (lower.includes("côte d'ivoire") || lower.includes("cote d'ivoire") || lower.includes("ivoirien")) {
    detectedGeographicContext = "Côte d'Ivoire (Programme National MENA / DPFC)";
    detectedCurriculumMethodology = "Méthodologie Officielle Ivoirienne (BEPC / BAC)";
    userDirectivesApplied.push("Ancrage géographique et institutionnel ivoirien pris en compte");
  } else if (lower.includes("sénégal") || lower.includes("senegal") || lower.includes("sénégalais")) {
    detectedGeographicContext = "Sénégal";
    detectedCurriculumMethodology = "Méthodologie du Baccalauréat Sénégalais";
    userDirectivesApplied.push("Cadre éducatif et références du Sénégal appliqués");
  } else if (lower.includes("cameroun") || lower.includes("camerounais")) {
    detectedGeographicContext = "Cameroun";
    detectedCurriculumMethodology = "Programme Officiel Camerounais (OBC)";
    userDirectivesApplied.push("Cadre éducatif camerounais appliqué");
  } else if (lower.includes("france") || lower.includes("français")) {
    detectedGeographicContext = "France / Réseau AEFE";
    detectedCurriculumMethodology = "Méthodologie Académique Française (Baccalauréat Général)";
  } else if (lower.includes("afrique") || lower.includes("africain")) {
    detectedGeographicContext = "Espace Francophone Africain (UEMOA / CEMAC)";
    detectedCurriculumMethodology = "Méthodologie Harmonisée des Examens Francophones";
  }

  if (lower.includes("3 axes") || lower.includes("trois axes") || lower.includes("3 parties")) {
    userDirectivesApplied.push("Consigne explicite : Plan articulé en 3 axes");
  } else if (lower.includes("2 axes") || lower.includes("deux axes") || lower.includes("2 parties")) {
    userDirectivesApplied.push("Consigne explicite : Plan articulé en 2 axes");
  }

  if (studentProfile && (studentProfile.isRegistered || studentProfile.country)) {
    if (studentProfile.country && detectedGeographicContext === "Universel / International") {
      detectedGeographicContext = studentProfile.country;
    }
    if (studentProfile.educationSystem) {
      detectedCurriculumMethodology = `${studentProfile.educationSystem} (${studentProfile.serie || studentProfile.grade || "Programme Officiel"})`;
    }
    const studentInfo = `Profil élève : ${studentProfile.country} • ${studentProfile.serie || studentProfile.grade || "Inscrit"}`;
    if (!userDirectivesApplied.includes(studentInfo)) {
      userDirectivesApplied.unshift(studentInfo);
    }
  }

  if (userDirectivesApplied.length === 0) {
    userDirectivesApplied.push("Traitement canonique selon l'intitulé du sujet");
  }

  return {
    subjectType,
    keyWordsAnalysis: keyWordsFound,
    tensionOrOpposition,
    recommendedAxesCount: isTwoAxes ? 2 : 3,
    justificationPlan,
    detectedGeographicContext,
    detectedCurriculumMethodology,
    userDirectivesApplied,
  };
}

export function generateAcademicEssayFallback(params: FallbackParams, matchedTopic: any) {
  const {
    subjectTopic,
    discipline = "Philosophie",
    exerciseType,
    isTwoAxes = true,
    fasciculeTitle = "Fascicule de Référence",
  } = params;

  const cleanSubject = subjectTopic.replace(/^«|»$/g, "").trim();
  const essay = matchedTopic.essayStructure;

  if (!essay) {
    // Fallback riche et rédigé in extenso même sans structure prédéfinie
    const c1 = matchedTopic.coreConceptsAndFormulas[0] || {
      name: "Thèse principale",
      formulaOrRule: "Principes directeurs et fondements conceptuels",
      explanation: "Cette perspective s'appuie sur la démonstration méthodique des principes fondamentaux du cours.",
      contextOrApplication: "Fondement théorique du programme officiel"
    };
    const c2 = matchedTopic.coreConceptsAndFormulas[1] || {
      name: "Antithèse critique",
      formulaOrRule: "Limites, nuances et contre-arguments",
      explanation: "L'analyse critique permet de dépasser les apparences pour examiner les contradictions réelles.",
      contextOrApplication: "Perspective critique et examen des limites"
    };

    const fallbackAmorce = `${matchedTopic.definitionAndScope} Dans ce sens, le sujet d'examen — « ${cleanSubject} » — invite à réfléchir de façon claire sur les notions de ${matchedTopic.chapterTitle}.`;
    const fallbackProblematique = `Dans quelle mesure peut-on affirmer que « ${cleanSubject} » ? Quelles sont les limites essentielles à apporter ?`;
    const fallbackAnnoncePlan = `Pour répondre à ce problème, nous verrons d'abord dans quelle mesure cette idée est fondée, puis nous analyserons les limites et les contre-arguments importants.`;
    const fallbackIntroFullText = `${fallbackAmorce} Cette réflexion pose une question essentielle : ${fallbackProblematique} ${fallbackAnnoncePlan}`;

    const part1SubPartA = {
      subPartLetter: "A",
      title: c1.name || "Explication des fondements du sujet",
      argument: c1.explanation || "La valeur de cette idée s'appuie sur les principes clairs expliqués dans le cours.",
      explication: c1.contextOrApplication || "Cette explication montre la logique de la première thèse.",
      illustration: {
        auteur: c1.name || "Référentiel officiel du cours",
        oeuvre: matchedTopic.chapterTitle,
        citation: c1.formulaOrRule || "Principe du cours",
        analyseIllustration: c1.explanation || "Cette règle montre concrètement la part de vérité de l'idée."
      },
      fullText: `${c1.explanation} Comme le rappelle le cours : « ${c1.formulaOrRule} ». ${c1.contextOrApplication}`
    };

    const part2SubPartA = {
      subPartLetter: "A",
      title: c2.name || "Examen des limites et objections",
      argument: c2.explanation || "Une réflexion plus attentive montre qu'on ne peut pas accepter cette idée sans nuance.",
      explication: c2.contextOrApplication || "Cette remarque permet de mieux comprendre la réalité sans tomber dans une idée trop simple.",
      illustration: {
        auteur: c2.name || "Examen critique",
        oeuvre: "Étude des limites",
        citation: c2.formulaOrRule || "Nuance importante",
        analyseIllustration: c2.explanation || "Cet exemple met en valeur les limites de la première idée."
      },
      fullText: `${c2.explanation} En effet, comme le souligne la réflexion : « ${c2.formulaOrRule} ». ${c2.contextOrApplication}`
    };

    const fallbackPart1Full = `D'abord, l'étude des leçons de ${matchedTopic.chapterTitle} confirme la part de vérité de cette affirmation.\n\n${part1SubPartA.fullText}`;
    const fallbackTransition = `Ces premiers arguments montrent bien la force de cette idée. Cependant, peut-on s'arrêter là ? Ne faut-il pas aussi examiner les limites importantes de cette position ?`;
    const fallbackPart2Full = `Ensuite, l'examen des exemples contraires et des limites permet de nuancer le sujet.\n\n${part2SubPartA.fullText}`;

    const fallbackBilan = `Au terme de notre réflexion, nous retenons que « ${cleanSubject} » repose sur des leçons de ${matchedTopic.chapterTitle} qui valident une première explication claire.`;
    const fallbackReponse = `Cependant, l'examen des limites montre que cette affirmation ne s'applique pas partout et doit tenir compte des réalités de la vie.`;
    const fallbackElargissement = `Ainsi, bien comprendre ces notions permet à l'élève de développer un esprit critique et de réussir son épreuve.`;
    const fallbackConclusionFullText = `${fallbackBilan} ${fallbackReponse} ${fallbackElargissement}`;

    const fallbackFullRedactionText = `${fallbackIntroFullText}\n\n${fallbackPart1Full}\n\n${fallbackTransition}\n\n${fallbackPart2Full}\n\n${fallbackConclusionFullText}`;

    const structuredRedaction: StructuredRedaction = {
      planSummary: `I. Fondements et Thèse (${c1.name}) | II. Limites et Antithèse (${c2.name})`,
      introduction: {
        amorce: fallbackAmorce,
        definitionTension: cleanSubject,
        problematique: fallbackProblematique,
        annoncePlan: fallbackAnnoncePlan,
        fullText: fallbackIntroFullText,
      },
      development: {
        part1: {
          partNumber: 1,
          title: `Axe I : Principes fondamentaux et validation de la thèse (${c1.name})`,
          thesisOverview: `Dans un premier temps, l'analyse des concepts de ${matchedTopic.chapterTitle} confirme la pertinence de la thèse.`,
          subParts: [part1SubPartA],
          fullText: fallbackPart1Full,
        },
        transition1: fallbackTransition,
        part2: {
          partNumber: 2,
          title: `Axe II : Approfondissement critique et discussion des limites (${c2.name})`,
          thesisOverview: `Dans un second temps, l'examen des contre-arguments et des limites structurelles permet de nuancer le propos.`,
          subParts: [part2SubPartA],
          fullText: fallbackPart2Full,
        }
      },
      conclusion: {
        bilanSynthese: fallbackBilan,
        reponseDefinitive: fallbackReponse,
        elargissement: fallbackElargissement,
        fullText: fallbackConclusionFullText,
      }
    };

    return {
      disciplineIdentified: matchedTopic.disciplineLabel || discipline,
      exerciseTypeIdentified: exerciseType || (isTwoAxes ? "Dissertation (2 Axes)" : "Dissertation (3 Axes)"),
      conceptualDisambiguation: {
        hasAmbiguousTerm: false,
        term: matchedTopic.chapterTitle,
        possibleMeanings: [matchedTopic.definitionAndScope],
        retainedMeaning: "Sens canonique certifié",
        justification: "Conformité avec les référentiels académiques nationaux.",
      },
      subjectNatureAnalysis: buildSubjectNatureAnalysis(cleanSubject, matchedTopic.chapterTitle, isTwoAxes, params.studentProfile),
      fasciculeMethodologyActivated: {
        name: `Méthodologie Canonique — ${matchedTopic.chapterTitle}`,
        description: `Traitement méthodique du sujet « ${cleanSubject} » rattaché au chapitre : ${matchedTopic.chapterTitle}.`,
        stepsApplied: matchedTopic.stepByStepMethod.map((s: any) => `${s.stepNumber}. ${s.title} : ${s.whatToDo}`),
      },
      sourceDecomposition: {
        fasciculeMethodologies: [fasciculeTitle || "Fascicule officiel"],
        fasciculeKnowledgeUsed: matchedTopic.coreConceptsAndFormulas.map((c: any) => `${c.name} : ${c.formulaOrRule}`),
        externalKnowledgeMobilized: [matchedTopic.quickRevisionMemo],
      },
      pedagogicalTransferExplanation: `Rédaction académique intégrale générée à partir de la base de connaissances certifiée pour : ${matchedTopic.chapterTitle}.`,
      level1Hint: `Mobilisez les concepts de : ${matchedTopic.expectedKeywords.slice(0, 4).join(", ")}.`,
      level2Methodology: matchedTopic.stepByStepMethod.map((s: any) => `${s.stepNumber}. ${s.title}\n${s.whatToDo}\nConseil : ${s.reflexOrTip}`).join("\n\n"),
      level3GuidanceSteps: [
        `1. Introduction : ${fallbackAmorce.slice(0, 100)}...`,
        `2. Problématique : ${fallbackProblematique}`,
        `3. Axe I : ${c1.name}`,
        `4. Transition : ${fallbackTransition.slice(0, 80)}...`,
        `5. Axe II : ${c2.name}`,
        `6. Conclusion : ${fallbackBilan.slice(0, 100)}...`
      ],
      level4DetailedOutline: `I. Introduction\n- Définition et insertion du sujet\n- Problématique : ${fallbackProblematique}\n- Plan en 2 axes\n\nII. Développement\n1. Axe I : ${c1.name}\n   * ${part1SubPartA.title}\n2. Axe II : ${c2.name}\n   * ${part2SubPartA.title}\n\nIII. Conclusion\n- Bilan : ${fallbackBilan}\n- Réponse : ${fallbackReponse}\n- Élargissement : ${fallbackElargissement}`,
      level5FullRedaction: fallbackFullRedactionText,
      structuredRedaction,
      stepByStepBreakdown: matchedTopic.stepByStepMethod.map((s: any) => ({
        stepNumber: s.stepNumber,
        stepTitle: s.title,
        methodologyRuleApplied: s.whatToDo,
        content: s.reflexOrTip,
        sourceTags: ["Base Académique Hors-Ligne", matchedTopic.disciplineLabel],
        pedagogicalTip: s.reflexOrTip,
      })),
      fullSynthesizedResponse: fallbackFullRedactionText,
      evaluationCriteria: [
        {
          criterion: "Maîtrise des concepts du chapitre",
          fasciculeOrigin: true,
          description: matchedTopic.quickRevisionMemo,
          tipsForAutonomy: "Citer avec précision les notions et auteurs clés du cours.",
        }
      ],
      selfCheckChecklist: matchedTopic.selfCheckChecklist,
      quickRevisionMemo: matchedTopic.quickRevisionMemo,
      examPitfalls: matchedTopic.classicExamTraps,
      isFallback: true,
    };
  }

  // Si une structure d'essai riche et rédigée existe dans la base pour ce thème
  const introFullText = `${essay.amorce} C'est dans cette perspective qu'un sujet d'examen affirme : « ${cleanSubject} ». ${essay.definitionTension} ${essay.problematique} ${essay.annoncePlan}`;

  const part1Data = essay.axes[0];
  const part2Data = essay.axes[1] || essay.axes[0];
  const part3Data = essay.axes[2] || null;

  const renderSubParts = (axis: typeof part1Data) => {
    return axis.arguments.map(arg => ({
      subPartLetter: arg.letter,
      title: arg.title,
      argument: arg.argument,
      explication: arg.explication,
      illustration: arg.illustration,
      fullText: `${arg.argument} ${arg.explication} Comme l'illustre ${arg.illustration.auteur} dans ${arg.illustration.oeuvre} : « ${arg.illustration.citation} ». ${arg.illustration.analyseIllustration}`,
    }));
  };

  const part1SubParts = renderSubParts(part1Data);
  const part2SubParts = renderSubParts(part2Data);

  const part1Full = `${part1Data.thesisOverview}\n\n` + part1SubParts.map(sp => sp.fullText).join("\n\n");
  const part2Full = `${part2Data.thesisOverview}\n\n` + part2SubParts.map(sp => sp.fullText).join("\n\n");

  const conclusionFullText = `${essay.conclusion.bilanSynthese} ${essay.conclusion.reponseDefinitive} ${essay.conclusion.elargissement}`;

  const fullRedactionText = `${introFullText}\n\n` +
    `${part1Full}\n\n` +
    `${part1Data.transition || "Ainsi, l'examen de cette première idée nous conduit à interroger ses limites."}\n\n` +
    `${part2Full}\n\n` +
    (part3Data ? `${part3Data.thesisOverview}\n\n` + renderSubParts(part3Data).map(sp => sp.fullText).join("\n\n") + `\n\n` : "") +
    `${conclusionFullText}`;

  return {
    disciplineIdentified: matchedTopic.disciplineLabel || discipline,
    exerciseTypeIdentified: exerciseType || (isTwoAxes ? "Dissertation en 2 Axes" : "Dissertation en 3 Axes"),
    conceptualDisambiguation: {
      hasAmbiguousTerm: false,
      term: matchedTopic.chapterTitle,
      possibleMeanings: [matchedTopic.definitionAndScope],
      retainedMeaning: "Sens philosophique / littéraire clair",
      justification: "Ancrage direct dans les programmes officiels.",
    },
    subjectNatureAnalysis: buildSubjectNatureAnalysis(cleanSubject, matchedTopic.chapterTitle, isTwoAxes, params.studentProfile),
    fasciculeMethodologyActivated: {
      name: `Méthodologie Officielle de Dissertation (${matchedTopic.disciplineLabel})`,
      description: `Traitement méthodique du sujet « ${cleanSubject} » rattaché au chapitre : ${matchedTopic.chapterTitle}.`,
      stepsApplied: [
        "1. Introduction claire en 4 étapes (Amorce, insertion du sujet, problème court, annonce du plan).",
        "2. Axe I avec arguments bien expliqués et exemples d'auteurs authentifiés.",
        "3. Transition fluide formulant le bilan et la question ouvrant l'axe suivant.",
        "4. Axe II avec discussion des limites et illustrations précises.",
        "5. Conclusion en 3 temps (Bilan clair, réponse définitive et ouverture).",
      ],
    },
    sourceDecomposition: {
      fasciculeMethodologies: ["Canevas officiel de dissertation littéraire et philosophique"],
      fasciculeKnowledgeUsed: matchedTopic.coreConceptsAndFormulas.map((c: any) => `${c.name} : ${c.formulaOrRule}`),
      externalKnowledgeMobilized: [matchedTopic.quickRevisionMemo, matchedTopic.certificationNote],
    },
    pedagogicalTransferExplanation: `Rédaction intégrale générée à partir de la base de connaissances académique certifiée pour le thème : ${matchedTopic.chapterTitle}.`,
    level1Hint: `Identifiez la tension centrale de « ${cleanSubject} » à partir des concepts de ${matchedTopic.expectedKeywords.slice(0, 3).join(", ")}.`,
    level2Methodology: matchedTopic.stepByStepMethod.map((s: any) => `${s.stepNumber}. ${s.title} : ${s.whatToDo}`).join("\n"),
    level3GuidanceSteps: [
      `1. Introduction : ${essay.amorce.slice(0, 100)}...`,
      `2. Problématique : ${essay.problematique}`,
      `3. Axe I : ${part1Data.title}`,
      `4. Axe II : ${part2Data.title}`,
      `5. Conclusion : ${essay.conclusion.bilanSynthese.slice(0, 100)}...`,
    ],
    level4DetailedOutline: `I. INTRODUCTION\n- Amorce thématique\n- Insertion du sujet : « ${cleanSubject} »\n- Problématique : ${essay.problematique}\n- Plan : ${essay.annoncePlan}\n\nII. DÉVELOPPEMENT\n1. ${part1Data.title}\n` + part1SubParts.map(sp => `   * ${sp.title} (${sp.illustration.auteur})`).join("\n") + `\n2. ${part2Data.title}\n` + part2SubParts.map(sp => `   * ${sp.title} (${sp.illustration.auteur})`).join("\n") + `\n\nIII. CONCLUSION\n- Bilan : ${essay.conclusion.bilanSynthese}\n- Réponse : ${essay.conclusion.reponseDefinitive}`,
    level5FullRedaction: fullRedactionText,
    structuredRedaction: {
      planSummary: `${part1Data.title} | ${part2Data.title}`,
      introduction: {
        amorce: essay.amorce,
        definitionTension: essay.definitionTension,
        problematique: essay.problematique,
        annoncePlan: essay.annoncePlan,
        fullText: introFullText,
      },
      development: {
        part1: {
          partNumber: 1,
          title: part1Data.title,
          thesisOverview: part1Data.thesisOverview,
          subParts: part1SubParts,
          fullText: part1Full,
        },
        transition1: part1Data.transition || "De cette première analyse, nous retenons que la thèse est solidement étayée. Toutefois, ne comporte-t-elle pas des limites majeures ?",
        part2: {
          partNumber: 2,
          title: part2Data.title,
          thesisOverview: part2Data.thesisOverview,
          subParts: part2SubParts,
          fullText: part2Full,
        },
      },
      conclusion: {
        bilanSynthese: essay.conclusion.bilanSynthese,
        reponseDefinitive: essay.conclusion.reponseDefinitive,
        elargissement: essay.conclusion.elargissement,
        fullText: conclusionFullText,
      },
    },
    stepByStepBreakdown: [
      {
        stepNumber: 1,
        stepTitle: "Introduction rédigée",
        methodologyRuleApplied: "Amorce, sujet cité, problématique et annonce du plan.",
        content: introFullText,
        sourceTags: ["Introduction", matchedTopic.disciplineLabel],
        pedagogicalTip: "Ne jamais oublier d'insérer la citation exacte du sujet dans l'introduction.",
      },
      {
        stepNumber: 2,
        stepTitle: `Axe I : ${part1Data.title}`,
        methodologyRuleApplied: "Chapeau + Arguments et illustrations sourcées.",
        content: part1Full,
        sourceTags: ["Axe I", part1Data.title],
        pedagogicalTip: "Toujours analyser l'exemple ou la citation pour montrer en quoi il valide l'argument.",
      },
      {
        stepNumber: 3,
        stepTitle: `Axe II : ${part2Data.title}`,
        methodologyRuleApplied: "Discussion critique et dépassement de la thèse initiale.",
        content: part2Full,
        sourceTags: ["Axe II", part2Data.title],
        pedagogicalTip: "Veillez à formuler une transition claire et interrogative avant d'aborder le second axe.",
      },
      {
        stepNumber: 4,
        stepTitle: "Conclusion rédigée",
        methodologyRuleApplied: "Bilan des axes, réponse définitive et ouverture.",
        content: conclusionFullText,
        sourceTags: ["Conclusion", "Bilan"],
        pedagogicalTip: "La conclusion doit apporter une réponse nette à la question posée en introduction.",
      },
    ],
    fullSynthesizedResponse: fullRedactionText,
    evaluationCriteria: [
      {
        criterion: "Respect de la structure canonique de dissertation",
        fasciculeOrigin: true,
        description: "Introduction quadripartite, deux axes argumentés et conclusion équilibrée.",
        tipsForAutonomy: "Vérifier la présence des 4 étapes de l'introduction et la cohérence de la conclusion.",
      },
      {
        criterion: "Qualité des références et citations d'auteurs",
        fasciculeOrigin: true,
        description: "Mobilisation d'auteurs authentifiés et contextualisés.",
        tipsForAutonomy: "Ne jamais citer un auteur sans expliquer la thèse de l'ouvrage.",
      },
    ],
    selfCheckChecklist: matchedTopic.selfCheckChecklist,
    quickRevisionMemo: matchedTopic.quickRevisionMemo,
    examPitfalls: matchedTopic.classicExamTraps,
  };
}
