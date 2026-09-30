/**
 * Constructeur de résultats méthodologiques structurés pour Mathématiques Terminale D
 */

import { MathsTleDStep, MathsTleDStructuredResult } from "./types";

export function buildMathsTleDStructuredResult(params: {
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
}): MathsTleDStructuredResult {
  const formattedSteps: MathsTleDStep[] = params.steps.map((s, idx) => ({
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
        `# RÉSOLUTION MÉTHODIQUE & DÉMONSTRATION DÉTAILLÉE — MATHÉMATIQUES TERMINALE D`,
        `## ${params.themeTitle.toUpperCase()} — LEÇON ${params.lessonNumber} : ${params.lessonTitle.toUpperCase()}`,
        '',
        `### ÉNONCÉ DU PROBLÈME`,
        `${params.problemStatement}`,
        '',
        `### CADRAGE MÉTHODOLOGIQUE & PROPRIÉTÉS DU COURS`,
        `* **Programme :** Terminale D — ${params.themeTitle}`,
        `* **Leçon :** ${params.lessonTitle}`,
        `* **Cadre d'application :** ${params.scientificHypothesis || "Application rigoureuse des théorèmes et propriétés du cours."}`,
        `* **Termes clés mobilisés :** ${params.keyMathematicalTerms.join(' ; ')}`,
        '',
        `### DÉMONSTRATION ET CALCULS PAS À PAS`,
        ...formattedSteps.map((step) => [
          `#### Étape ${step.stepNumber} : ${step.title}`,
          step.observationOrData ? `* **Données / Hypothèse :** ${step.observationOrData}` : '',
          step.scientificConceptOrRule ? `* **Propriété / Théorème :** ${step.scientificConceptOrRule}` : '',
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
        methodologyType: "DÉMARCHE RATIONNELLE & RIGUEUR DÉMONSTRATIVE (TERMINALE D)",
        problemStatement: params.problemStatement,
        scientificHypothesis: params.scientificHypothesis || "Application rigoureuse des théorèmes, limites usuelles et formules du programme officiel de Terminale D.",
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
        officialReference: "Programme Officiel Mathématiques Terminale D - Fascicule & École Numérique Côte d'Ivoire",

        exerciseTypeIdentified: `Mathématiques Terminale D — ${params.lessonTitle}`,
        disciplineIdentified: "Mathématiques",
        level1Hint: `Indice méthodologique : Pour cet exercice de ${params.themeTitle}, appliquez le principe : « ${params.scientificHypothesis || params.lessonTitle} ».`,
        level2Methodology: `Méthodologie officielle (Maths Terminale D) :\n1. Identifier les données et l'ensemble de validité.\n2. Énoncer la propriété ou le théorème du cours.\n3. Poser les calculs sans omission d'étapes.\n4. Conclure rigoureusement.`,
        level3GuidanceSteps: formattedSteps.map((s) => `Étape ${s.stepNumber} : ${s.title}`),
        level4DetailedOutline: formattedSteps.map((s) => `${s.stepNumber}. ${s.title} (${s.scientificConceptOrRule || 'Calculs'})`).join('\n'),
        level5FullRedaction: fullRedaction,
        fullSynthesizedResponse: fullRedaction,
        structuredScientificResolution,
        stepByStepBreakdown: formattedSteps.map((s) => ({
          stepNumber: s.stepNumber,
          stepTitle: s.title,
          methodologyRuleApplied: s.scientificConceptOrRule || "Règle de calcul officielle",
          content: [s.observationOrData, s.deductionOrCalculation, s.conclusionOrJustification].filter(Boolean).join('\n'),
          sourceTags: ["Maths Terminale D", params.themeTitle],
          pedagogicalTip: "Veillez à justifier chaque égalité et domaine de validité.",
        })),
        structuredRedaction: {
          planSummary: `${params.themeTitle} — ${params.lessonTitle}`,
          introduction: {
            amorce: `Dans le cadre du programme de Mathématiques de Terminale D (${params.themeTitle}), nous étudions le problème proposé.`,
            definitionTension: params.scientificHypothesis || params.lessonTitle,
            problematique: params.problemStatement,
            annoncePlan: `Nous développons la résolution étape par étape selon les exigences officielles du Baccalauréat.`,
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
                explication: `${step.scientificConceptOrRule ? `Théorème : ${step.scientificConceptOrRule}\n` : ''}${step.deductionOrCalculation}`,
                illustration: {
                  auteur: "Programme Officiel",
                  oeuvre: "Maths Tle D",
                  citation: step.scientificConceptOrRule || "Propriété de Terminale D",
                  analyseIllustration: step.conclusionOrJustification || "Validation rigoureuse",
                },
                fullText: `${step.title}\n${step.deductionOrCalculation}\n${step.conclusionOrJustification}`,
              })),
              fullText: formattedSteps.map((s) => `${s.title}\n${s.deductionOrCalculation}\n${s.conclusionOrJustification}`).join('\n\n'),
            },
          },
          conclusion: {
            bilanSynthese: params.finalConclusion,
            reponseDefinitive: params.finalConclusion,
            elargissement: "Conforme aux attentes des jurys du Baccalauréat scientifique.",
            fullText: params.finalConclusion,
          },
        },
        evaluationCriteria: [
          {
            criterion: "Hypothèses et cadre d'étude",
            fasciculeOrigin: true,
            scoreMax: 4,
            description: "Identification des données et domaine d'étude.",
            tipsForAutonomy: "Toujours préciser le domaine de définition.",
          },
          {
            criterion: "Application des théorèmes du cours",
            fasciculeOrigin: true,
            scoreMax: 6,
            description: "Mobilisation des formules exactes.",
            tipsForAutonomy: "Citer le théorème avant d'appliquer.",
          },
          {
            criterion: "Rigueur des calculs",
            fasciculeOrigin: true,
            scoreMax: 6,
            description: "Exactitude des transformations algébriques et analytiques.",
            tipsForAutonomy: "Conserver les valeurs exactes.",
          },
          {
            criterion: "Conclusion et validation",
            fasciculeOrigin: true,
            scoreMax: 4,
            description: "Encadrement et vérification du résultat final.",
            tipsForAutonomy: "Vérifier la cohérence du résultat final.",
          },
        ],
        isFallback: false,
      } as any;
    },
  };
}
