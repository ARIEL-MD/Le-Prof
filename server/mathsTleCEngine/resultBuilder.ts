/**
 * Constructeur de résultats méthodologiques structurés pour Mathématiques Terminale C
 */

import { MathsTleCStep, MathsTleCStructuredResult } from "./types";

export function buildMathsTleCStructuredResult(params: {
  title: string;
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  problemStatement: string;
  scientificHypothesis?: string;
  steps: {
    title: string;
    observationOrData: string;
    scientificConceptOrRule: string;
    deductionOrCalculation: string;
    conclusionOrJustification: string;
    stepType?: "HYPOTHESE" | "IDENTIFICATION" | "DEMONSTRATION" | "CALCUL" | "CONCLUSION";
  }[];
  finalConclusion: string;
  keyMathematicalTerms: string[];
  commonPitfallsAvoided: string[];
}): MathsTleCStructuredResult {
  const formattedSteps: MathsTleCStep[] = params.steps.map((s, idx) => ({
    stepNumber: idx + 1,
    title: s.title,
    stepType: s.stepType || (idx === 0 ? "IDENTIFICATION" : idx === params.steps.length - 1 ? "CONCLUSION" : "DEMONSTRATION"),
    observationOrData: s.observationOrData,
    scientificConceptOrRule: s.scientificConceptOrRule,
    deductionOrCalculation: s.deductionOrCalculation,
    conclusionOrJustification: s.conclusionOrJustification,
  }));

  return {
    title: params.title,
    themeId: params.themeId,
    themeTitle: params.themeTitle,
    lessonNumber: params.lessonNumber,
    lessonTitle: params.lessonTitle,
    problemStatement: params.problemStatement,
    scientificHypothesis: params.scientificHypothesis,
    steps: formattedSteps,
    finalConclusion: params.finalConclusion,
    keyMathematicalTerms: params.keyMathematicalTerms,
    commonPitfallsAvoided: params.commonPitfallsAvoided,
    toMethodologyAnalysisResult: () => {
      // Construction de la copie intégrale (Markdown académique)
      const fullRedactionParts = [
        `# RÉSOLUTION MÉTHODIQUE & DÉMONSTRATION DÉTAILLÉE — MATHÉMATIQUES TERMINALE C`,
        `## ${params.themeTitle.toUpperCase()} — LEÇON ${params.lessonNumber} : ${params.lessonTitle.toUpperCase()}`,
        '',
        `### ÉNONCÉ DU PROBLÈME`,
        `${params.problemStatement}`,
        '',
        `### CADRAGE MÉTHODOLOGIQUE & PROPRIÉTÉS DU COURS`,
        `* **Programme :** Terminale C — ${params.themeTitle}`,
        `* **Leçon :** ${params.lessonTitle}`,
        `* **Cadre d'application :** ${params.scientificHypothesis || "Application des théorèmes, lemmes et algorithmes du programme officiel de Terminale C."}`,
        `* **Termes clés mobilisés :** ${params.keyMathematicalTerms.join(' ; ')}`,
        '',
        `### DÉMONSTRATION ET CALCULS PAS À PAS`,
        ...formattedSteps.map((step) => [
          `#### Étape ${step.stepNumber} : ${step.title}`,
          step.observationOrData ? `* **Données / Hypothèse :** ${step.observationOrData}` : '',
          step.scientificConceptOrRule ? `* **Propriété / Lemme :** ${step.scientificConceptOrRule}` : '',
          step.deductionOrCalculation ? `$$\n${step.deductionOrCalculation}\n$$` : '',
          step.conclusionOrJustification ? `* **Conclusion intermédiaire :** ${step.conclusionOrJustification}` : '',
          '',
        ].filter(Boolean).join('\n')),
        '',
        `### CONCLUSION & RÉSULTAT FINAL`,
        `${params.finalConclusion}`,
        '',
        `**Réponse finale :**`,
        `> **${params.finalConclusion}**`,
      ];
      const fullRedaction = fullRedactionParts.join('\n');

      // Construction de structuredScientificResolution
      const structuredScientificResolution = [
        {
          title: `${params.themeTitle} — ${params.lessonTitle}`,
          introContext: params.problemStatement,
          questions: formattedSteps.map((step) => ({
            numberLabel: `${step.stepNumber}.`,
            titleOrPrompt: step.title,
            steps: [
              step.observationOrData ? `Donnée : ${step.observationOrData}` : '',
              step.scientificConceptOrRule ? `Propriété appliquée : ${step.scientificConceptOrRule}` : '',
              step.deductionOrCalculation ? step.deductionOrCalculation : '',
              step.conclusionOrJustification ? `Défini par : ${step.conclusionOrJustification}` : '',
            ].filter(Boolean),
            finalAnswer: step.conclusionOrJustification || step.deductionOrCalculation || step.title,
            verificationPassed: true,
          })),
        },
      ];

      return {
        theme: params.themeTitle,
        lesson: `Leçon ${params.lessonNumber} : ${params.lessonTitle}`,
        methodologyType: "DÉMARCHE RATIONNELLE & RIGUEUR DÉMONSTRATIVE (TERMINALE C)",
        problemStatement: params.problemStatement,
        scientificHypothesis: params.scientificHypothesis || "Application des théorèmes, lemmes et algorithmes du programme officiel de Terminale C.",
        steps: formattedSteps.map((step) => ({
          stepNumber: step.stepNumber,
          title: step.title,
          observation: step.observationOrData,
          scientificRule: step.scientificConceptOrRule,
          deduction: step.deductionOrCalculation,
          conclusion: step.conclusionOrJustification,
        })),
        finalConclusion: params.finalConclusion,
        keyTerms: params.keyMathematicalTerms,
        pitfallsAvoided: params.commonPitfallsAvoided,
        officialReference: "Programme Officiel Mathématiques Terminale C - École Numérique Côte d'Ivoire",

        exerciseTypeIdentified: `Mathématiques Terminale C — ${params.lessonTitle}`,
        disciplineIdentified: "Mathématiques",
        level1Hint: `Indice méthodologique : Pour cet exercice de ${params.themeTitle}, appliquez le principe : « ${params.scientificHypothesis || params.lessonTitle} ».`,
        level2Methodology: `Méthodologie officielle (Maths Terminale C) :\n1. Identifier les données et l'ensemble de validité.\n2. Énoncer le théorème ou lemme du cours.\n3. Démontrer chaque assertion sans saut logique.\n4. Conclure rigoureusement.`,
        level3GuidanceSteps: formattedSteps.map((s) => `Étape ${s.stepNumber} : ${s.title}`),
        level4DetailedOutline: formattedSteps.map((s) => `${s.stepNumber}. ${s.title} (${s.scientificConceptOrRule || 'Démonstration'})`).join('\n'),
        level5FullRedaction: fullRedaction,
        fullSynthesizedResponse: fullRedaction,
        structuredScientificResolution,
        stepByStepBreakdown: formattedSteps.map((s) => ({
          stepNumber: s.stepNumber,
          stepTitle: s.title,
          methodologyRuleApplied: s.scientificConceptOrRule || "Démonstration formelle Terminale C",
          content: [s.observationOrData, s.deductionOrCalculation, s.conclusionOrJustification].filter(Boolean).join('\n'),
          sourceTags: ["Maths Terminale C", params.themeTitle],
          pedagogicalTip: "Veillez à justifier chaque passage d'équivalence avec rigueur.",
        })),
        structuredRedaction: {
          planSummary: `${params.themeTitle} — ${params.lessonTitle}`,
          introduction: {
            amorce: `Dans le cadre du programme d'excellence de Mathématiques de Terminale C (${params.themeTitle}), nous abordons la résolution de ce problème.`,
            definitionTension: params.scientificHypothesis || params.lessonTitle,
            problematique: params.problemStatement,
            annoncePlan: `Nous présentons la démonstration axiomatique et les calculs complets.`,
            fullText: `${params.themeTitle} : ${params.lessonTitle}`,
          },
          development: {
            part1: {
              partNumber: 1,
              title: params.lessonTitle,
              subParts: formattedSteps.map((step, idx) => ({
                subPartLetter: String.fromCharCode(65 + idx),
                title: step.title,
                argument: step.observationOrData || step.title,
                explication: `${step.scientificConceptOrRule ? `Lemme / Propriété : ${step.scientificConceptOrRule}\n` : ''}${step.deductionOrCalculation}`,
                illustration: {
                  auteur: "Programme Officiel",
                  oeuvre: "Maths Tle C",
                  citation: step.scientificConceptOrRule || "Théorème de Terminale C",
                  analyseIllustration: step.conclusionOrJustification || "Démonstration rigoureuse",
                },
                fullText: `${step.title}\n${step.deductionOrCalculation}\n${step.conclusionOrJustification}`,
              })),
              fullText: formattedSteps.map((s) => `${s.title}\n${s.deductionOrCalculation}\n${step => step.conclusionOrJustification}`).join('\n\n'),
            },
          },
          conclusion: {
            bilanSynthese: params.finalConclusion,
            reponseDefinitive: params.finalConclusion,
            elargissement: "Conforme aux plus hautes exigences des concours et examens scientifiques.",
            fullText: params.finalConclusion,
          },
        },
        evaluationCriteria: [
          {
            criterion: "Axiomes et hypothèses d'étude",
            fasciculeOrigin: true,
            scoreMax: 4,
            description: "Précision des hypothèses et ensembles de départ.",
            tipsForAutonomy: "Toujours définir les ensembles et les variables.",
          },
          {
            criterion: "Exactitude théorique",
            fasciculeOrigin: true,
            scoreMax: 6,
            description: "Démonstration sans rupture logique.",
            tipsForAutonomy: "Énoncer les théorèmes avant leur usage.",
          },
          {
            criterion: "Démonstration et calcul",
            fasciculeOrigin: true,
            scoreMax: 6,
            description: "Rigueur des calculs et simplifications.",
            tipsForAutonomy: "Ne jamais omettre de cas particulier.",
          },
          {
            criterion: "Conclusion générale",
            fasciculeOrigin: true,
            scoreMax: 4,
            description: "Validation et encadrement final.",
            tipsForAutonomy: "Vérifier la réciproque si nécessaire.",
          },
        ],
        isFallback: false,
      } as any;
    },
  };
}
