/**
 * MOTEUR UNIVERSEL DE RÉSOLUTION DE DEVOIRS DE PHYSIQUE-CHIMIE INTERNATIONAL
 * "LE PROF — SCIENCES PHYSIQUES MONDIALES"
 *
 * Traite TOUT type de devoirs et d'exercices de Physique et Chimie internationaux :
 * - BACCALAURÉATS FRANCOPHONES ET INTERNATIONAUX :
 *   * France & AEFE : Spécialité Physique-Chimie (Terminale & Première), STL, STI2D, BFI / OIB.
 *   * Afrique de l'Ouest & Centrale (Côte d'Ivoire, Sénégal, Cameroun, Bénin, Burkina Faso, Mali, Togo, Niger, Tchad, RDC, Gabon, Congo, Guinée) : Séries C (Maths-Physique), D (Sciences Expérimentales), E (Sciences & Technique).
 *   * Maghreb (Maroc, Algérie, Tunisie) : Sciences Physiques (PC), Sciences Mathématiques (SM-A / SM-B), SVT en filière générale ou sections internationales BIOF.
 * - CURRICULA INTERNATIONAUX ET ANGLO-SAXONS :
 *   * International Baccalaureate (IB Diploma) : Physics (HL & SL), Chemistry (HL & SL).
 *   * British & Commonwealth : A-Levels Physics & Chemistry (Cambridge CAIE, Edexcel, AQA), IGCSE / O-Level Physics & Chemistry.
 *   * United States & College Board : AP Physics 1 (Algebra-based), AP Physics 2, AP Physics C: Mechanics, AP Physics C: Electricity and Magnetism, AP Chemistry.
 * - ÉTUDES SUPÉRIEURES ET CONCOURS :
 *   * Classes Préparatoires aux Grandes Écoles (CPGE PCSI, PC*, PSI, MPSI, BCPST) & Concours d'Ingénieurs (Polytechnique X, Mines-Ponts, CentraleSupélec).
 *   * Premier cycle universitaire (L1, L2, L3 Physique, Chimie, Sciences de la Matière, PACES / PASS / LAS).
 *
 * Respect absolu des règles pédagogiques strictes (AGENTS.md & Moteur Universel Strict) :
 * - Traiter TOUTES les questions et sous-questions du devoir sans en sauter aucune (1., 2.a, 2.b, 3...).
 * - Ne jamais regrouper de questions ni en modifier l'ordre.
 * - Piliers de la Méthode Papa en Sciences Physiques :
 *   1. Ce qu'on te demande (grandeur physique ou chimique cherchée avec son symbole officiel).
 *   2. Formule littérale ou loi physique/chimique officielle de référence (avec domaine de validité).
 *   3. Démarche en deux temps : expression littérale isolant l'inconnue PUIS application numérique avec conversions strictes dans le Système International (SI).
 *   4. Résultat final encadré en LaTeX (\boxed{...}) obligatoirement accompagné de son unité légale SI.
 *   5. Conseil d'excellence ou piège d'examen classique à éviter (chiffres significatifs, projection de vecteurs, convention récepteur/générateur...).
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
import {
  buildMethodologyResultFromSolvedExercises,
  tryDeterministicPcExerciseResolution,
} from './exerciseSolverPipeline';

export interface InternationalPcQuestionJson {
  numberLabel: string;
  titleOrPrompt: string;
  whatIsAsked: string;
  formulaOrRule: string;
  steps: string[];
  finalAnswer: string;
  pedagogicalTip?: string;
}

export interface InternationalPcExerciseJson {
  title: string;
  disciplineCategory?: 'Physique' | 'Chimie' | 'Sciences Physiques';
  points?: string;
  introContext?: string;
  questions: InternationalPcQuestionJson[];
}

export interface InternationalPcResultJson {
  title: string;
  curriculumDetected?: string;
  topicSummary?: string;
  exercises: InternationalPcExerciseJson[];
  generalAdvice?: string;
}



/**
 * Nettoie et parse le JSON retourné par l'IA pour la Physique-Chimie
 */
function parsePcJsonResponse(rawText: string): InternationalPcResultJson | null {
  try {
    let clean = rawText.trim();
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
    console.error('[InternationalPcSolver] Failed to parse JSON response:', err, rawText.slice(0, 300));
  }
  return null;
}

/**
 * Convertit le résultat structuré en MethodologyAnalysisResult pour le frontend
 */
export function buildMethodologyResultFromPcJson(
  pcData: InternationalPcResultJson,
  rawSubject: string,
  discipline: string = 'Physique-Chimie',
  level: string = 'Terminale'
): MethodologyAnalysisResult {
  const allSolvedExercises: StructuredScientificExercise[] = [];
  const redactionLines: string[] = [];
  const finalSummaryAnswers: { label: string; ans: string }[] = [];
  const stepsBreakdown: StepBreakdown[] = [];

  const mainTitle = pcData.title || 'Devoir de Physique-Chimie — Méthode Papa Intégrale';
  redactionLines.push(`# ${mainTitle.toUpperCase()}\n`);

  if (pcData.topicSummary) {
    redactionLines.push(`> **Notions scientifiques abordées :** ${pcData.topicSummary}\n`);
  }

  let totalQuestionsCount = 0;

  pcData.exercises.forEach((ex, exIdx) => {
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
        redactionLines.push(`**Formule / Loi de référence :**\n${q.formulaOrRule}\n`);
      }

      redactionLines.push(`**Résolution détaillée :**`);
      const formattedSteps = formatPapaMethodSteps(
        q.whatIsAsked || q.titleOrPrompt,
        q.formulaOrRule || 'Loi physique / chimique fondamentale du programme officiel.',
        q.steps && q.steps.length > 0 ? q.steps : [`• Résolution de la question : ${q.finalAnswer || ''}`],
        q.finalAnswer || 'Résultat établi avec unité SI',
        q.pedagogicalTip
      );

      formattedSteps.forEach((st) => {
        redactionLines.push(st);
      });

      if (q.finalAnswer) {
        const cleanAns = q.finalAnswer.trim();
        const displayAns = cleanAns.includes('\\boxed') ? cleanAns : `\\boxed{${cleanAns.replace(/\$/g, '')}}`;
        redactionLines.push(`\n**Réponse finale encadrée :**\n\n$$\n${displayAns}\n$$\n`);
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
        methodologyRuleApplied: q.formulaOrRule || 'Méthode Papa scientifique rigoureuse',
        content: formattedSteps.join('\n'),
        sourceTags: ['Programme Officiel LE PROF', pcData.curriculumDetected || 'Physique-Chimie Internationale'],
        pedagogicalTip: q.pedagogicalTip || 'Veiller aux unités du Système International et aux chiffres significatifs.',
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
    redactionLines.push('### Synthèse des Résultats et Valeurs Numériques Clés\n');
    finalSummaryAnswers.forEach((item) => {
      redactionLines.push(`- **${item.label}** ${item.ans}`);
    });
    redactionLines.push('');
  }

  if (pcData.generalAdvice) {
    redactionLines.push('---\n');
    redactionLines.push(`💡 **Conseil d'excellence du Professeur de Physique-Chimie :**\n${pcData.generalAdvice}\n`);
  }

  const fullRedaction = redactionLines.join('\n');

  const evaluationCriteria: EvaluationCriterion[] = [
    {
      criterion: 'Démarche scientifique et modélisation physique/chimique',
      fasciculeOrigin: true,
      scoreMax: 6,
      description: 'Identification des systèmes, des référentiels, bilan des forces ou équation de réaction équilibrée.',
      tipsForAutonomy: 'Toujours définir le système et le référentiel avant d\'appliquer les lois de Newton ou les lois d\'Ohm.',
    },
    {
      criterion: 'Expression littérale et exactitude des calculs',
      fasciculeOrigin: true,
      scoreMax: 7,
      description: 'Dérivation littérale de la formule isolant l\'inconnue avant toute injection numérique, calculs exacts.',
      tipsForAutonomy: 'Ne jamais faire de calcul numérique intermédiaire sans avoir posé l\'expression littérale complète.',
    },
    {
      criterion: 'Précision des unités SI et chiffres significatifs',
      fasciculeOrigin: true,
      scoreMax: 5,
      description: 'Conversions systématiques (g -> kg, mL -> L, cm -> m, min -> s), conformité des unités du Système International.',
      tipsForAutonomy: 'Vérifier systématiquement l\'homogénéité dimensionnelle de la formule et la cohérence de l\'unité finale.',
    },
    {
      criterion: 'Complétude et rigueur rédactionnelle',
      fasciculeOrigin: true,
      scoreMax: 2,
      description: 'Traitement de 100% des questions et sous-questions de l\'épreuve sans oubli, encadrement des réponses.',
      tipsForAutonomy: 'Relire chaque sous-question (a, b, c) pour vérifier que l\'ensemble des déductions est complet.',
    },
  ];

  return {
    exerciseTypeIdentified: 'Devoir International de Physique-Chimie',
    disciplineIdentified: discipline,
    fasciculeMethodologyActivated: {
      name: 'Méthode Papa Universelle — Sciences Physiques & Chimiques',
      description:
        'Résolution pas à pas intégrale : expression littérale préalable, application numérique rigoureuse, contrôle des unités SI et encadrement des résultats selon les standards académiques mondiaux.',
      stepsApplied: [
        '1. Définition du système physique/chimique, du référentiel et bilan des interactions',
        '2. Énoncé de la loi fondamentale ou formule officielle applicable en LaTeX',
        '3. Dérivation algébrique de la grandeur recherchée sous forme littérale pure',
        '4. Application numérique avec conversions dans le Système International et résultat encadré avec son unité légale',
      ],
    },
    sourceDecomposition: {
      fasciculeMethodologies: ['Méthode Papa Universelle — Sciences Physiques'],
      fasciculeKnowledgeUsed: ['Standards Internationaux (Baccalauréats C/D/E, IB Physics/Chemistry, AP, A-Levels, CPGE)'],
      externalKnowledgeMobilized: ['Lois physiques fondamentales, thermochimie et calcul dimensionnel'],
    },
    pedagogicalTransferExplanation:
      'Chaque question est résolue selon la Méthode Papa en Physique-Chimie : identification de la grandeur, rappel de la loi officielle, expression littérale, calcul numérique aux unités SI, résultat encadré et conseil méthodologique.',
    level1Hint:
      "Identifie le phénomène physique ou chimique en jeu. Pose toujours le système, le référentiel et la loi de cours avant d'isoler l'inconnue.",
    level2Methodology:
      "Respecte les 4 temps : 1. Grandeur cherchée, 2. Loi ou théorème physique/chimique, 3. Expression littérale puis calcul numérique avec unités du SI, 4. Résultat final encadré avec son unité.",
    level3GuidanceSteps: pcData.exercises.map(
      (ex, i) => `Exercice ${i + 1} (${ex.title}) : Résoudre méthodiquement les questions ${ex.questions.map((q) => q.numberLabel).join(', ')}.`
    ),
    level4DetailedOutline: pcData.exercises
      .map(
        (ex, i) =>
          `Partie ${i + 1} - ${ex.title} :\n` +
          ex.questions
            .map(
              (q) =>
                `  • Question ${q.numberLabel} : ${q.titleOrPrompt} -> Utiliser ${q.formulaOrRule || 'loi physique / formule de cours'}`
            )
            .join('\n')
      )
      .join('\n\n'),
    level5FullRedaction: fullRedaction,
    structuredRedaction: {
      planSummary: 'Résolution exhaustive question par question selon la Méthode Papa en Sciences Physiques',
      introduction: {
        amorce: 'Présentation du sujet de Physique-Chimie et rappel des systèmes étudiés.',
        definitionTension: '',
        problematique: 'Résolution rigoureuse, littérale et chiffrée aux unités du Système International de l\'ensemble des exercices.',
        annoncePlan: 'Traitement méthodique de chaque exercice et de chaque sous-question.',
        fullText: 'Résolution scientifique méthodique intégrale.',
      },
      development: {
        part1: {
          partNumber: 1,
          title: pcData.exercises[0]?.title || 'Résolution des exercices de Physique-Chimie',
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
        bilanSynthese: 'Toutes les grandeurs et lois de Physique-Chimie ont été résolues avec rigueur et vérifiées.',
        reponseDefinitive: 'Résultats finaux encadrés avec unités du Système International (SI).',
        elargissement: 'Approfondir avec les exercices de synthèse du chapitre.',
        fullText: 'Fin de la résolution du devoir de Physique-Chimie.',
      },
    },
    structuredScientificResolution: allSolvedExercises,
    stepByStepBreakdown: stepsBreakdown,
    fullSynthesizedResponse: fullRedaction,
    evaluationCriteria,
    isDirectRestitution: false,
    isAcademicPaper: true,
    academicPaperType: 'Devoir de Physique-Chimie',
  };
}

/**
 * Fonction maîtresse de résolution de devoir international de Physique-Chimie
 * (100% Déterministe, Autonome et Local — Méthode Papa)
 */
export async function solveInternationalPcHomework(options: {
  subjectTopic: string;
  parsedStatement?: StatementParsingResult | null;
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
    discipline = 'Physique-Chimie',
    level = 'Terminale',
  } = options;

  if (parsedStatement && (parsedStatement.exercises.length > 0 || parsedStatement.totalQuestionsCount > 0)) {
    try {
      // 1. Tenter la résolution déterministe certifiée PC
      const deterministicPc = tryDeterministicPcExerciseResolution(parsedStatement);
      if (deterministicPc && deterministicPc.success && deterministicPc.solvedExercises.length > 0) {
        return buildMethodologyResultFromSolvedExercises(
          parsedStatement,
          deterministicPc.solvedExercises,
          discipline,
          level,
          parsedStatement.exercises.length > 1
            ? 'Devoir de Physique-Chimie Déterministe'
            : 'Résolution Déterministe de Physique-Chimie'
        );
      }

      // 2. Repli déterministe Méthode Papa
      const papaSolved = solveAllExercisesWithPapaMethod(parsedStatement, discipline, level);
      if (papaSolved && papaSolved.length > 0) {
        return buildMethodologyResultFromSolvedExercises(
          parsedStatement,
          papaSolved,
          discipline,
          level,
          parsedStatement.exercises.length > 1
            ? 'Devoir de Physique-Chimie — Méthode Papa Intégrale'
            : 'Résolution Physique-Chimie — Méthode Papa'
        );
      }
    } catch (err) {
      console.error('[InternationalPcSolver] Échec de la résolution déterministe :', err);
    }
  }

  return null;
}
