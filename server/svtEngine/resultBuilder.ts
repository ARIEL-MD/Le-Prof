/**
 * Constructeur de résultats méthodologiques SVT Terminale D
 * Calibré sur les 5 paliers d'assistance pédagogique de LE PROF
 */

import { MethodologyAnalysisResult, StepBreakdown, StructuredScientificExercise } from "../../src/types";
import { SvtStepSolution, SvtStructuredResult } from "./types";

export function buildSvtStructuredResult(params: {
  title: string;
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  problemStatement: string;
  scientificHypothesis?: string;
  steps: SvtStepSolution[];
  finalConclusion: string;
  keyScientificTerms: string[];
  commonPitfallsAvoided: string[];
  apcScoringGuide?: { criterion: string; description: string; points: number }[];
}): SvtStructuredResult {
  const apcScoring = params.apcScoringGuide || [
    {
      criterion: "Pertinence (CP1)",
      description: "Identification exacte du problème biologique et mobilisation des concepts du cours.",
      points: 2.0,
    },
    {
      criterion: "Utilisation correcte des outils scientifiques (CP2)",
      description: "Rigueur des déductions, échiquiers de croisement, bilans hormonaux ou flux ioniques.",
      points: 3.5,
    },
    {
      criterion: "Cohérence du raisonnement (CP3)",
      description: "Enchaînement logique : Observation → Analyse → Interprétation → Conclusion.",
      points: 1.5,
    },
    {
      criterion: "Qualité de la langue et de la rédaction (CP4)",
      description: "Précision du vocabulaire scientifique et clarté des justifications.",
      points: 1.0,
    },
  ];

  return {
    title: params.title,
    themeId: params.themeId,
    themeTitle: params.themeTitle,
    lessonNumber: params.lessonNumber,
    lessonTitle: params.lessonTitle,
    problemStatement: params.problemStatement,
    scientificHypothesis: params.scientificHypothesis,
    stepByStepResolution: params.steps,
    finalConclusion: params.finalConclusion,
    keyScientificTerms: params.keyScientificTerms,
    commonPitfallsAvoided: params.commonPitfallsAvoided,
    apcScoringGuide: apcScoring,

    toMethodologyAnalysisResult: (): MethodologyAnalysisResult => {
      // Repères d'assistance
      const level1Hint = `Thème du programme : ${params.themeTitle} (Leçon n°${params.lessonNumber} : ${params.lessonTitle}).\n` +
        `Notions scientifiques clés à mobiliser : ${params.keyScientificTerms.join(", ")}.\n` +
        `Démarche attendue : Identifier les faits observés, confronter aux lois biologiques du cours, déduire rigoureusement.`;

      const level2Methodology = `Protocole officiel SVT Terminale D / C / E :\n` +
        `1. Saisie des données : Ce que je constate dans les documents ou résultats expérimentaux.\n` +
        `2. Connaissances mobilisées : Les notions de cours (Leçon ${params.lessonNumber} : ${params.lessonTitle}).\n` +
        `3. Interprétation & Déduction : Explication biologique du phénomène ou calcul génétique/physiologique.\n` +
        `4. Bilan scientifique : Conclusion rigoureuse répondant précisément au problème posé.`;

      const level3GuidanceSteps = params.steps.map(
        (st, idx) => `Étape ${idx + 1} (${st.title}) : Appliquer la notion "${st.scientificConceptOrRule}" pour analyser "${st.observationOrData}" et conclure : ${st.conclusionOrJustification}`
      );

      const level4DetailedOutline = `PLAN DÉTAILLÉ DE RÉSOLUTION :\n` +
        params.steps.map((st, idx) => `  ${idx + 1}. ${st.title} : ${st.observationOrData} → ${st.conclusionOrJustification}`).join("\n") +
        `\n  ➜ Bilan & Conclusion finale : ${params.finalConclusion}`;

      // Rédaction intégrale prête à rendre
      const fullSolutionMarkdown = `### ${params.title}
**Discipline** : SVT (Sciences de la Vie et de la Terre) — **Terminale D / C / E** (Programme National APC)  
**Chapitre** : *${params.themeTitle}* — **Leçon ${params.lessonNumber} : ${params.lessonTitle}**

---

#### 1. Analyse des données et Démarche scientifique
${params.scientificHypothesis ? `> **Hypothèse / Problématique** : ${params.scientificHypothesis}\n\n` : ""}
${params.steps
  .map(
    (step, idx) => `##### Étape ${idx + 1} : ${step.title}
* **Données observées / Faits** : ${step.observationOrData}
* **Règle scientifique / Notions du cours** : ${step.scientificConceptOrRule}
* **Déduction & Analyse** :
${step.deductionOrCalculation}
* **Conclusion partielle** : ${step.conclusionOrJustification}
`
  )
  .join("\n\n")}

---

#### 2. Bilan & Conclusion Scientifique
${params.finalConclusion}

---

#### 3. Vocabulaire scientifique clé à maîtriser
${params.keyScientificTerms.map((term) => `- **${term}**`).join("\n")}

---

#### 4. Pièges classiques évités
${params.commonPitfallsAvoided.map((pit) => `⚠️ **À ne pas confondre** : ${pit}`).join("\n")}
`;

      const stepByStepBreakdown: StepBreakdown[] = params.steps.map((st, idx) => ({
        stepNumber: idx + 1,
        stepTitle: st.title,
        methodologyRuleApplied: st.scientificConceptOrRule,
        content: `• Données : ${st.observationOrData}\n• Déduction : ${st.deductionOrCalculation}\n• Conclusion : ${st.conclusionOrJustification}`,
        sourceTags: ["SVT", "Terminale D", params.themeTitle],
        pedagogicalTip: `Veillez à toujours expliciter la règle biologique avant de déduire.`,
      }));

      const structuredScientificResolution: StructuredScientificExercise[] = [
        {
          title: params.title || `Exercice SVT - ${params.lessonTitle}`,
          points: "20 points",
          introContext: params.problemStatement,
          questions: params.steps.map((st, idx) => ({
            numberLabel: `Question ${idx + 1}`,
            titleOrPrompt: st.title,
            steps: [
              `Observation : ${st.observationOrData}`,
              `Notion appliquée : ${st.scientificConceptOrRule}`,
              `Analyse : ${st.deductionOrCalculation}`,
            ],
            finalAnswer: st.conclusionOrJustification,
          })),
        },
      ];

      return {
        exerciseTypeIdentified: `Raisonnement Scientifique & Résolution de Problème (SVT Terminale D / C / E)`,
        disciplineIdentified: "SVT",
        conceptualDisambiguation: {
          hasAmbiguousTerm: false,
          term: params.lessonTitle,
          possibleMeanings: params.keyScientificTerms,
          retainedMeaning: params.lessonTitle,
          justification: params.themeTitle,
        },
        fasciculeMethodologyActivated: {
          name: `Fascicule SVT Terminale D (APC) - Leçon ${params.lessonNumber}`,
          description: `Démarche expérimentale et rigueur d'analyse des phénomènes biologiques (Leçon ${params.lessonNumber} : ${params.lessonTitle})`,
          stepsApplied: [
            "Analyse minutieuse des constats et données de départ",
            "Mobilisation ciblée des notions et lois biologiques du programme",
            "Déduction explicite et interprétation sans saut logique",
            "Conclusion synthétique et validation du problème biologique",
          ],
        },
        sourceDecomposition: {
          fasciculeMethodologies: [`Démarche d'évaluation APC SVT Terminale D/C/E`, params.themeTitle],
          fasciculeKnowledgeUsed: params.keyScientificTerms,
          externalKnowledgeMobilized: [params.lessonTitle, ...params.steps.map((s) => s.title)],
        },
        pedagogicalTransferExplanation: `Cette démarche méthodique permet de résoudre avec précision les situations d'évaluation en SVT Terminale D, C et E en évitant les erreurs de raisonnement.`,
        level1Hint,
        level2Methodology,
        level3GuidanceSteps,
        level4DetailedOutline,
        level5FullRedaction: fullSolutionMarkdown,
        structuredRedaction: {
          planSummary: params.steps.map((s) => s.title).join(" | "),
          introduction: {
            amorce: `L'étude porte sur : ${params.themeTitle} (${params.lessonTitle}).`,
            definitionTension: params.scientificHypothesis || "Comprendre et expliquer les mécanismes biologiques observés.",
            problematique: params.problemStatement,
            annoncePlan: `L'analyse se décline en ${params.steps.length} étape(s) méthodique(s).`,
            fullText: `Dans le cadre du programme de SVT en Terminale, cette étude porte sur ${params.lessonTitle}. Il s'agit d'analyser les données expérimentales pour en dégager les lois biologiques régissant ce phénomène.`,
          },
          development: {
            part1: {
              partNumber: 1,
              title: params.steps[0]?.title || "Analyse biologique",
              thesisOverview: params.steps[0]?.observationOrData || "",
              subParts: params.steps.map((st, idx) => ({
                subPartLetter: ["A", "B", "C", "D", "E"][idx] || `${idx + 1}`,
                title: st.title,
                argument: st.scientificConceptOrRule,
                explication: st.deductionOrCalculation,
                illustration: {
                  auteur: "SVT Terminale D/C/E",
                  oeuvre: params.lessonTitle,
                  citation: st.observationOrData,
                  analyseIllustration: st.conclusionOrJustification,
                },
                fullText: `${st.title} : ${st.observationOrData} ➜ ${st.deductionOrCalculation} ➜ ${st.conclusionOrJustification}`,
              })),
              fullText: fullSolutionMarkdown,
            },
            transition1: "L'analyse des faits permet d'établir les lois biologiques fondamentales.",
            part2: {
              partNumber: 2,
              title: "Synthèse et validation scientifique",
              thesisOverview: params.finalConclusion,
              subParts: [
                {
                  subPartLetter: "A",
                  title: "Conclusion biologique",
                  argument: params.finalConclusion,
                  explication: "Validation des mécanismes observés.",
                  illustration: {
                    auteur: "Programme Officiel SVT",
                    oeuvre: params.lessonTitle,
                    citation: params.finalConclusion,
                    analyseIllustration: "Conformité avec les lois de la biologie.",
                  },
                  fullText: params.finalConclusion,
                },
              ],
              fullText: params.finalConclusion,
            },
          },
          conclusion: {
            bilanSynthese: params.finalConclusion,
            reponseDefinitive: params.finalConclusion,
            elargissement: `Ces concepts fondamentaux de ${params.lessonTitle} s'appliquent à l'ensemble des études biologiques en Terminale D, C et E.`,
            fullText: params.finalConclusion,
          },
        },
        structuredScientificResolution,
        stepByStepBreakdown,
        fullSynthesizedResponse: fullSolutionMarkdown,
        evaluationCriteria: apcScoring.map((crit) => ({
          criterion: crit.criterion,
          fasciculeOrigin: true,
          description: crit.description,
          tipsForAutonomy: `Allouer ${crit.points} points pour ce critère d'évaluation APC.`,
        })),
        isFallback: true,
      };
    },
  };
}
