/**
 * MOTEUR UNIVERSEL DE RÉSOLUTION DE DEVOIRS DE MATHÉMATIQUES INTERNATIONAL
 * "LE PROF — ÉDITION MONDIALE"
 *
 * Traite TOUT type de devoirs et d'exercices de mathématiques internationaux :
 * - Baccalauréats francophones & internationaux (Tle C, D, E, A, BFI, OIB, Maroc, Tunisie, Sénégal, Côte d'Ivoire...)
 * - International Baccalaureate (IB Math AA / AI HL & SL)
 * - Advanced Placement (AP Calculus AB & BC, AP Precalculus, AP Statistics)
 * - British & Commonwealth Curricula (A-Levels Mathematics, Further Mathematics, IGCSE)
 * - American High School & College (SAT Math, ACT Math, Algebra I & II, Geometry, Precalculus, College Calculus)
 * - Classes Préparatoires (MPSI, PCSI, BCPST, ECS/ECG) & Concours d'entrée
 *
 * Respect absolu des règles pédagogiques strictes (AGENTS.md) :
 * - Traiter TOUTES les questions et sous-questions du devoir sans en sauter aucune.
 * - Ne jamais regrouper de questions.
 * - Respecter scrupuleusement la numérotation d'origine (1., 2.a, 2.b, 3...).
 * - Piliers de la Méthode Papa :
 *   1. Ce qu'on te demande
 *   2. Formule ou théorème de cours applicable
 *   3. Détail du calcul pas-à-pas (Méthode Papa : substitutions, factorisations, études de signes)
 *   4. Conclusion nette et résultat encadré (\boxed{...})
 * - Écriture scientifique LaTeX impeccable ($...$ inline et $$...$$ display) pour rendu KaTeX.
 */

import {
  MethodologyAnalysisResult,
  StructuredScientificExercise,
  StepBreakdown,
  EvaluationCriterion,
} from '../../src/types';
import { StatementParsingResult } from './types';
import {
  formatPapaMethodSteps,
  solveAllExercisesWithPapaMethod,
} from './universalPapaMethodSolver';
import { buildMethodologyResultFromSolvedExercises } from './exerciseSolverPipeline';
import { tryHybridDeterministicExerciseResolution } from './hybridDeterministicSolver';

export interface InternationalMathExerciseJson {
  title: string;
  points?: string;
  introContext?: string;
  questions: Array<{
    numberLabel: string;
    titleOrPrompt: string;
    whatIsAsked: string;
    formulaOrRule: string;
    steps: string[];
    finalAnswer: string;
    pedagogicalTip?: string;
  }>;
}

export interface InternationalMathResultJson {
  title: string;
  curriculumDetected?: string;
  topicSummary?: string;
  exercises: InternationalMathExerciseJson[];
  generalAdvice?: string;
}



/**
 * Nettoie et parse le JSON retourné par l'IA
 */
function parseMathJsonResponse(rawText: string): InternationalMathResultJson | null {
  try {
    let clean = rawText.trim();
    // Retirer d'éventuels backticks markdown
    if (clean.startsWith('```json')) {
      clean = clean.replace(/^```json\s*/i, '').replace(/\s*```$/, '');
    } else if (clean.startsWith('```')) {
      clean = clean.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }
    const parsed = JSON.parse(clean);
    if (parsed && parsed.exercises && Array.isArray(parsed.exercises) && parsed.exercises.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.error('[InternationalMathSolver] Failed to parse JSON response:', err, rawText.slice(0, 300));
  }
  return null;
}

/**
 * Convertit le résultat structuré en MethodologyAnalysisResult pour le frontend
 */
export function buildMethodologyResultFromMathJson(
  mathData: InternationalMathResultJson,
  rawSubject: string,
  discipline: string = 'Mathématiques',
  level: string = 'Terminale'
): MethodologyAnalysisResult {
  const allSolvedExercises: StructuredScientificExercise[] = [];
  const redactionLines: string[] = [];
  const finalSummaryAnswers: { label: string; ans: string }[] = [];
  const stepsBreakdown: StepBreakdown[] = [];

  const mainTitle = mathData.title || 'Devoir de Mathématiques — Méthode Papa Intégrale';
  redactionLines.push(`# ${mainTitle.toUpperCase()}\n`);

  if (mathData.topicSummary) {
    redactionLines.push(`> **Notions abordées :** ${mathData.topicSummary}\n`);
  }

  let totalQuestionsCount = 0;

  mathData.exercises.forEach((ex, exIdx) => {
    const rawExTitle = ex.title || `Exercice ${exIdx + 1}`;
    const cleanTitle = rawExTitle.replace(/^###?\s*/i, '').trim();
    const exPoints = ex.points ? `(${ex.points})` : '';
    
    redactionLines.push(`## ${cleanTitle} ${exPoints}\n`);
    if (ex.introContext) {
      redactionLines.push(`${ex.introContext}\n`);
    }

    const structuredQuestions: StructuredScientificExercise['questions'] = [];

    ex.questions.forEach((q, qIdx) => {
      totalQuestionsCount++;
      const numLabel = q.numberLabel?.trim() || `${qIdx + 1}.`;
      const qHeading = `${numLabel} ${q.titleOrPrompt}`.trim();
      redactionLines.push(`### ${qHeading}\n`);

      if (q.formulaOrRule) {
        redactionLines.push(`**Méthode :**\n${q.formulaOrRule}\n`);
      }

      redactionLines.push(`**Résolution :**`);
      const formattedSteps = formatPapaMethodSteps(
        q.whatIsAsked || q.titleOrPrompt,
        q.formulaOrRule || 'Propriété fondamentale du programme.',
        q.steps && q.steps.length > 0 ? q.steps : [`• Résolution de la question : ${q.finalAnswer || ''}`],
        q.finalAnswer || 'Résultat établi',
        q.pedagogicalTip
      );

      formattedSteps.forEach(st => {
        redactionLines.push(st);
      });

      if (q.finalAnswer) {
        const cleanAns = q.finalAnswer.trim();
        const displayAns = cleanAns.includes('\\boxed') ? cleanAns : `\\boxed{${cleanAns.replace(/\$/g, '')}}`;
        redactionLines.push(`\n**Réponse :**\n\n$$\n${displayAns}\n$$\n`);
        finalSummaryAnswers.push({
          label: numLabel,
          ans: `$${displayAns}$`,
        });
      }

      redactionLines.push('');

      structuredQuestions.push({
        numberLabel: numLabel,
        titleOrPrompt: q.titleOrPrompt,
        steps: formattedSteps,
        finalAnswer: q.finalAnswer,
      });

      stepsBreakdown.push({
        stepNumber: totalQuestionsCount,
        stepTitle: qHeading,
        methodologyRuleApplied: q.formulaOrRule || 'Méthode Papa rigoureuse',
        content: formattedSteps.join('\n'),
        sourceTags: ['Programme Officiel LE PROF', mathData.curriculumDetected || 'Mathématiques Internationales'],
        pedagogicalTip: q.pedagogicalTip || 'Vérifier la cohérence de chaque étape de calcul.',
      });
    });

    allSolvedExercises.push({
      title: cleanTitle,
      points: ex.points || '',
      introContext: ex.introContext || '',
      questions: structuredQuestions,
    });
  });

  if (finalSummaryAnswers.length > 0) {
    redactionLines.push('---\n');
    redactionLines.push('### Synthèse des Résultats Finaux\n');
    finalSummaryAnswers.forEach(item => {
      redactionLines.push(`- **${item.label}** ${item.ans}`);
    });
    redactionLines.push('');
  }

  if (mathData.generalAdvice) {
    redactionLines.push('---\n');
    redactionLines.push(`💡 **Conseil méthodologique du Professeur :**\n${mathData.generalAdvice}\n`);
  }

  const fullRedaction = redactionLines.join('\n');

  const evaluationCriteria: EvaluationCriterion[] = [
    {
      criterion: 'Rigueur mathématique et justifications',
      fasciculeOrigin: true,
      scoreMax: 6,
      description: 'Définitions exactes, énoncé explicite des théorèmes et conditions de validité.',
      tipsForAutonomy: 'Toujours nommer le théorème avant de l\'appliquer.',
    },
    {
      criterion: 'Exactitude des calculs et simplifications',
      fasciculeOrigin: true,
      scoreMax: 8,
      description: 'Calculs intermédiaires complets sans saut magique, valeurs exactes et encadrement des résultats.',
      tipsForAutonomy: 'Prendre le temps d\'écrire les étapes de réduction au même dénominateur et factorisation.',
    },
    {
      criterion: 'Clarté de la rédaction et symbolisme LaTeX',
      fasciculeOrigin: true,
      scoreMax: 4,
      description: 'Structure Question -> Méthode -> Résolution -> Réponse, écriture scientifique propre.',
      tipsForAutonomy: 'Bien espacer les lignes de calcul et encadrer le résultat final.',
    },
    {
      criterion: 'Complétude du sujet',
      fasciculeOrigin: true,
      scoreMax: 2,
      description: 'Traitement exhaustif de 100% des questions et sous-questions du devoir.',
      tipsForAutonomy: 'Relire le sujet pour s\'assurer qu\'aucune sous-question n\'a été oubliée.',
    },
  ];

  return {
    exerciseTypeIdentified: 'Devoir International de Mathématiques',
    disciplineIdentified: discipline,
    fasciculeMethodologyActivated: {
      name: 'Méthode Papa Universelle — Mathématiques Internationales',
      description:
        'Résolution pas à pas intégrale, calculs intermédiaires explicités, rigueur scientifique et écriture LaTeX conforme aux standards mondiaux.',
      stepsApplied: [
        "1. Identification précise de l'action demandée (calcul, démonstration, déduction, étude)",
        '2. Mobilisation du théorème officiel et des formules littérales de cours',
        '3. Exécution pas à pas des calculs avec substitutions détaillées',
        '4. Conclusion définitive encadrée et vérification de cohérence',
      ],
    },
    sourceDecomposition: {
      fasciculeMethodologies: ['Méthode Papa Universelle'],
      fasciculeKnowledgeUsed: ['Standards Internationaux (Bac / IB / AP / A-Level)'],
      externalKnowledgeMobilized: ['Raisonnement mathématique déductif et calcul scientifique'],
    },
    pedagogicalTransferExplanation:
      'Chaque question est résolue selon la Méthode Papa : formulation claire, rappel de cours, calculs détaillés sans saut, résultat encadré et conseil pour éviter les pièges.',
    level1Hint:
      "Commence par identifier précisément le type de chaque question (limite, dérivée, intégrale, équation, probabilité). Écris toujours la formule littérale avant d'injecter les valeurs numériques.",
    level2Methodology:
      "Applique la structure : 1. Ce qu'on cherche, 2. Théorème ou formule applicable, 3. Calculs intermédiaires détaillés, 4. Conclusion encadrée. Ne saute aucune étape de factorisation ou de simplification.",
    level3GuidanceSteps: mathData.exercises.map(
      (ex, i) => `Exercice ${i + 1} (${ex.title}) : Résoudre méthodiquement les questions ${ex.questions.map(q => q.numberLabel).join(', ')}.`
    ),
    level4DetailedOutline: mathData.exercises
      .map(
        (ex, i) =>
          `Partie ${i + 1} - ${ex.title} :\n` +
          ex.questions.map(q => `  • Question ${q.numberLabel} : ${q.titleOrPrompt} -> Utiliser ${q.formulaOrRule || 'formule de cours'}`).join('\n')
      )
      .join('\n\n'),
    level5FullRedaction: fullRedaction,
    structuredRedaction: {
      planSummary: 'Résolution exhaustive question par question selon la Méthode Papa',
      introduction: {
        amorce: 'Présentation du sujet de mathématiques et objectifs.',
        definitionTension: '',
        problematique: 'Résolution rigoureuse et complète de l\'ensemble des exercices.',
        annoncePlan: 'Traitement ordonné de chaque exercice et question.',
        fullText: 'Résolution méthodique intégrale.',
      },
      development: {
        part1: {
          partNumber: 1,
          title: mathData.exercises[0]?.title || 'Résolution des exercices',
          thesisOverview: 'Application pas à pas de la méthode Papa.',
          subParts: [],
          fullText: fullRedaction,
        },
        transition1: '',
        part2: {
          partNumber: 2,
          title: '',
          thesisOverview: '',
          subParts: [],
          fullText: '',
        },
      },
      conclusion: {
        bilanSynthese: 'Toutes les questions du devoir ont été résolues avec rigueur et vérifiées.',
        reponseDefinitive: 'Résultats finaux encadrés.',
        elargissement: 'Approfondir avec les exercices de synthèse du chapitre.',
        fullText: 'Fin de la résolution du devoir.',
      },
    },
    structuredScientificResolution: allSolvedExercises,
    stepByStepBreakdown: stepsBreakdown,
    fullSynthesizedResponse: fullRedaction,
    evaluationCriteria,
    isDirectRestitution: false,
    isAcademicPaper: true,
    academicPaperType: 'Devoir de Mathématiques',
  };
}

/**
 * Point d'entrée principal pour la résolution d'un devoir de mathématiques international
 * (100% Déterministe, Autonome et Local — Méthode Papa)
 */
export async function solveInternationalMathHomework(options: {
  subjectTopic: string;
  parsedStatement?: StatementParsingResult;
  discipline?: string;
  level?: string;
  serie?: string;
  serieLabel?: string;
  studentProfile?: any;
  fasciculeKnowledge?: string;
  attachedImagePart?: any;
}): Promise<MethodologyAnalysisResult | null> {
  const {
    subjectTopic: _subjectTopic,
    parsedStatement,
    discipline = 'Mathématiques',
    level = 'Terminale',
  } = options;

  if (parsedStatement && (parsedStatement.exercises.length > 0 || parsedStatement.totalQuestionsCount > 0)) {
    try {
      // Le pipeline hybride est désormais la voie principale : chaque question
      // est envoyée au moteur réellement compatible avec sa nature. Il ne
      // fabrique jamais une solution lorsqu'aucun solveur fiable ne répond.
      const hybrid = tryHybridDeterministicExerciseResolution(parsedStatement);
      if (hybrid?.success && hybrid.solvedExercises.length > 0) {
        return buildMethodologyResultFromSolvedExercises(
          parsedStatement,
          hybrid.solvedExercises,
          discipline,
          level,
          parsedStatement.exercises.length > 1
            ? 'Devoir de Mathématiques — Résolution universelle'
            : 'Résolution Mathématiques — Résolution universelle'
        );
      }
    } catch (err) {
      console.error('[InternationalMathSolver] Échec de la résolution déterministe hybride :', err);
    }
  }

  // Aucun résultat fiable : le niveau supérieur peut afficher une demande de
  // précision au lieu de présenter une fausse correction.
  return null;
}
