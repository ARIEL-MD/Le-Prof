import { MethodologyAnalysisResult, StructuredScientificExercise, StepBreakdown, EvaluationCriterion } from '../../src/types';
import { MathsSolveResult } from './types';

export function buildMethodologyAnalysisResult(data: Omit<MathsSolveResult, 'toMethodologyAnalysisResult'>): MethodologyAnalysisResult {
  const stepBreakdowns: StepBreakdown[] = data.stepByStepCalculations.map((step) => ({
    stepNumber: step.stepNumber,
    stepTitle: step.title,
    methodologyRuleApplied: step.justification || data.methodUsed,
    content: [step.description, ...step.mathLines].filter(Boolean).join('\n'),
    sourceTags: ['Fascicule Maths Tle A', `Chapitre ${data.chapterId.toUpperCase()}`],
    pedagogicalTip: step.pedagogicalTip || 'Veillez à bien poser chaque étape de calcul avec rigueur.',
  }));

  // Build full redaction text
  const fullRedactionParts = [
    `# RÉSOLUTION MÉTHODIQUE MATHS TERMINALE A`,
    `## ${data.chapterTitle.toUpperCase()} — ${data.exerciseType}`,
    '',
    `### 1. CADRAGE & RÈGLES DU COURS`,
    `* Notion du programme : ${data.chapterTitle}`,
    `* Méthode clé appliquée : ${data.methodUsed}`,
    `* Formules de référence : ${data.formulasUsed.join(' ; ')}`,
    '',
    `### 2. DONNÉES & HYPOTHÈSES`,
    ...data.dataAndGiven.map((d) => `- ${d}`),
    '',
    `### 3. DÉMONSTRATION ET CALCULS PAS À PAS`,
    ...data.stepByStepCalculations.map((step) => {
      return [
        `#### Étape ${step.stepNumber} : ${step.title}`,
        step.description,
        ...(step.justification ? [`> Propriété : *${step.justification}*`] : []),
        '```math',
        ...step.mathLines,
        '```',
        '',
      ].join('\n');
    }),
    '',
    `### 4. VÉRIFICATION MATHÉMATIQUE RIGOUREUSE`,
    `* ${data.verification.description}`,
    `* Détail du contrôle : ${data.verification.details}`,
    `* Statut du contrôle : ${data.verification.checkPassed ? '✅ Vérification satisfaite avec succès.' : '⚠️ Contrôle à revérifier.'}`,
    '',
    `### 5. CONCLUSION & RÉSULTAT FINAL`,
    `${data.conclusion}`,
    '',
    `**Réponse finale :**`,
    `> **${data.finalAnswer}**`,
  ];

  const fullRedaction = fullRedactionParts.join('\n');

  // Build evaluation criteria
  const evaluationCriteria: EvaluationCriterion[] = [
    {
      criterion: "Identification des données et du cadre d'étude",
      fasciculeOrigin: true,
      scoreMax: 4,
      description: "Identifier correctement le type d'exercice, poser les inconnues ou ensembles de définition.",
      tipsForAutonomy: "Toujours commencer par préciser l'ensemble de validité ou les hypothèses.",
    },
    {
      criterion: 'Application de la formule ou méthode du cours',
      fasciculeOrigin: true,
      scoreMax: 6,
      description: `Mobiliser avec exactitude : ${data.formulasUsed.slice(0, 2).join(' / ')}.`,
      tipsForAutonomy: 'Citer la formule littérale avant toute application numérique.',
    },
    {
      criterion: 'Exactitude des étapes de calcul',
      fasciculeOrigin: true,
      scoreMax: 6,
      description: 'Développer les calculs sans saut d’étape injustifié et simplifier au maximum.',
      tipsForAutonomy: 'Conserver les valeurs exactes sous forme de fractions irréductibles ou radicaux.',
    },
    {
      criterion: 'Vérification et conclusion finale',
      fasciculeOrigin: true,
      scoreMax: 4,
      description: 'Vérifier la validité des solutions trouvées et encadrer la réponse finale.',
      tipsForAutonomy: 'Réinjecter les solutions dans l’énoncé initial pour s’assurer de l’absence d’erreur.',
    },
  ];

  // 5 Levels of Assistance
  const level1Hint = `Indice méthodologique : Pour cet exercice de ${data.chapterTitle}, pensez à appliquer la méthode : « ${data.methodUsed} ». Formule clé : ${data.formulasUsed[0] || 'Se référer aux définitions du cours'}.`;
  
  const level2Methodology = `Méthodologie officielle (Maths Tle A) :\n1. Identifier les données : ${data.dataAndGiven.join(', ')}.\n2. Règle du cours : ${data.methodUsed}.\n3. Formules à mobiliser : ${data.formulasUsed.join(' ; ')}.\n4. Effectuer les calculs et valider par réinjection.`;

  const level3GuidanceSteps = data.stepByStepCalculations.map(
    (step) => `Étape ${step.stepNumber} : ${step.title} — ${step.description}`
  );

  const level4DetailedOutline = [
    `Plan de résolution :`,
    `I. Hypothèses et cadre d'étude (${data.chapterTitle})`,
    ...data.stepByStepCalculations.map((s) => `II.${s.stepNumber}. ${s.title}`),
    `III. Vérification (${data.verification.description}) et conclusion finale (${data.finalAnswer})`,
  ].join('\n');

  return {
    exerciseTypeIdentified: `Mathématiques Terminale A — ${data.exerciseType}`,
    disciplineIdentified: 'Mathématiques',
    conceptualDisambiguation: {
      hasAmbiguousTerm: false,
      term: '',
      possibleMeanings: [],
      retainedMeaning: data.chapterTitle,
      justification: `Exercice conforme au programme officiel de Mathématiques Terminale A (Chapitre : ${data.chapterTitle}).`,
    },
    fasciculeMethodologyActivated: {
      name: `Méthodologie Maths Tle A : ${data.chapterTitle}`,
      description: data.courseExcerpt,
      stepsApplied: data.stepByStepCalculations.map((s) => `${s.title}: ${s.description}`),
    },
    sourceDecomposition: {
      fasciculeMethodologies: [`Programme officiel Maths Tle A - ${data.chapterTitle}`],
      fasciculeKnowledgeUsed: data.formulasUsed,
      externalKnowledgeMobilized: [data.methodUsed],
    },
    pedagogicalTransferExplanation: `La démarche appliquée suit la progression méthodologique du cours de Terminale A : identification du cadre mathématique -> mobilisation de la formule exacte -> développement des calculs -> vérification par cohérence interne.`,
    level1Hint,
    level2Methodology,
    level3GuidanceSteps,
    level4DetailedOutline,
    level5FullRedaction: fullRedaction,
    structuredRedaction: {
      planSummary: `${data.chapterTitle} : ${data.exerciseType}`,
      introduction: {
        amorce: `Dans le cadre du programme de Mathématiques de Terminale A (${data.chapterTitle}), nous étudions l'énoncé proposé.`,
        definitionTension: `L'objectif est d'appliquer les propriétés de : ${data.formulasUsed[0] || data.chapterTitle}.`,
        problematique: `Comment mener la résolution rigoureuse et déterminer ${data.finalAnswer ? 'le résultat exact' : 'la solution'} ?`,
        annoncePlan: `Nous présentons d'abord les données, puis les étapes de calcul, et enfin le contrôle de validité.`,
        fullText: `Cadrage mathématique : ${data.chapterTitle} — ${data.methodUsed}`,
      },
      development: {
        part1: {
          partNumber: 1,
          title: 'Développement méthodique des calculs',
          subParts: data.stepByStepCalculations.map((step, idx) => ({
            subPartLetter: String.fromCharCode(65 + idx),
            title: step.title,
            argument: step.description,
            explication: step.mathLines.join('\n'),
            illustration: {
              auteur: 'Programme Officiel',
              oeuvre: 'Maths Tle A',
              citation: step.justification || data.methodUsed,
              analyseIllustration: `Application rigoureuse de la règle mathématique`,
            },
            fullText: [step.title, step.description, ...step.mathLines].join('\n'),
          })),
          fullText: data.stepByStepCalculations.map((s) => `${s.title}\n${s.mathLines.join('\n')}`).join('\n\n'),
        },
        transition1: `Après avoir établi les étapes de calcul, procédons au contrôle de validité mathématique.`,
        part2: {
          partNumber: 2,
          title: 'Vérification et interprétation du résultat',
          subParts: [
            {
              subPartLetter: 'A',
              title: 'Contrôle mathématique',
              argument: data.verification.description,
              explication: data.verification.details,
              illustration: {
                auteur: 'Autonomie de l’élève',
                oeuvre: 'Contrôle de conformité',
                citation: 'Toujours tester son résultat',
                analyseIllustration: data.verification.checkPassed ? 'Validé' : 'À contrôler',
              },
              fullText: `${data.verification.description}\n${data.verification.details}`,
            },
          ],
          fullText: `${data.verification.description}\n${data.verification.details}`,
        },
      },
      conclusion: {
        bilanSynthese: `La résolution méthodique a permis d'aboutir à la solution en respectant scrupuleusement les théorèmes et propriétés du cours.`,
        reponseDefinitive: `Résultat final : ${data.finalAnswer}`,
        elargissement: `Ce type de raisonnement est standard pour les épreuves du Baccalauréat série A.`,
        fullText: `${data.conclusion}\n\nRésultat final : ${data.finalAnswer}`,
      },
    },
    structuredScientificResolution: data.structuredScientificResolution,
    stepByStepBreakdown: stepBreakdowns,
    fullSynthesizedResponse: fullRedaction,
    evaluationCriteria,
    isFallback: false,
  };
}
