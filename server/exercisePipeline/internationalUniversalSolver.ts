/**
 * MOTEUR UNIVERSEL DE RÉSOLUTION DE DEVOIRS ET EXERCICES INTERNATIONAUX
 * "LE PROF — TOUTES MATIÈRES & TOUS NIVEAUX MONDIAUX"
 *
 * Traite TOUT type de devoirs, d'épreuves et d'exercices scolaires et universitaires
 * pour TOUTES les autres disciplines (SVT, Histoire-Géographie, Philosophie, Français,
 * Langues Vivantes [Anglais, Espagnol, Allemand...], SES / Économie, Informatique / NSI,
 * Droit, Gestion, Sciences de l'Ingénieur...) et pour TOUS les niveaux (de la 6e à la Terminale,
 * Classes Préparatoires CPGE et Premier Cycle Universitaire / Supérieur).
 *
 * RESPECT STRICT DU MOTEUR UNIVERSEL D'EXERCICES ET DES RÈGLES D'AGENTS.MD :
 * - Règle absolue : Le sujet fourni est la seule et unique source de vérité.
 * - Répondre à TOUTES les questions et sous-questions sans exception, dans le même ordre.
 * - Ne jamais sauter, regrouper ou remplacer une question.
 * - Ne jamais changer la consigne (calculer, relever, expliquer, montrer, traduire, conjuguer, etc.).
 * - Règle d'or Histoire-Géographie (Terminale & Secondaire) :
 *     Structure obligatoire en I. Présentation, II. Compréhension, III. Commentaire.
 *     Pour « Relève » : citation exacte entre guillemets (« ... »).
 *     Pour « Explique » : causes, mécanismes et conséquences.
 *     Pour « Montre » : preuves du document + connaissances certifiées du programme.
 * - Règle d'or Philosophie (Terminale & International / TOK) :
 *     Analyse contextuelle des termes (sens possibles, sens retenu, justification).
 *     Problématique centrale = QUESTION philosophique claire (jamais affirmation ni "ou" artificiel).
 *     Questions secondaires obligatoirement introduites par : « Pour répondre à ce problème d'autres questions s'ajoutent : ».
 *     Hiérarchie Problème -> Aspects (questions courtes et directes) -> Arguments -> Doctrines d'auteurs (Kant, Spinoza, Sartre, etc.).
 * - Règle d'or Langues Vivantes (Anglais, Espagnol, Allemand...) :
 *     Respect scrupuleux de la consigne (grammar, reading comprehension, essay, translation).
 *     Ne jamais transformer un exercice d'anglais en cours de français ou d'histoire.
 * - Règle d'or SVT & Sciences Expérimentales :
 *     Démarche d'investigation : Constat/Observation -> Connaissances -> Déduction/Conclusion.
 *     Rigueur génétique, moléculaire et géologique.
 */

import {
  MethodologyAnalysisResult,
  StructuredScientificExercise,
  StepBreakdown,
  EvaluationCriterion,
  StructuredRedaction,
  PhiloPreliminaryWork,
  FrancaisPreliminaryWork,
} from '../../src/types';
import { StatementParsingResult } from './types';
import {
  formatPapaMethodSteps,
  solveAllExercisesWithPapaMethod,
} from './universalPapaMethodSolver';
import { tryHybridDeterministicExerciseResolution } from './hybridDeterministicSolver';
import { buildMethodologyResultFromSolvedExercises } from './exerciseSolverPipeline';

export interface UniversalSolverParams {
  subjectTopic: string;
  parsedStatement: StatementParsingResult;
  discipline: string;
  level: string;
  serie?: string;
  serieLabel?: string;
  studentProfile?: any;
  fasciculeKnowledge?: string;
  attachedImagePart?: any;
  exerciseType?: string;
}

interface UniversalQuestionJson {
  numberLabel: string;
  titleOrPrompt: string;
  whatIsAsked: string;
  actionVerb: string;
  methodOrRule: string;
  steps: string[];
  finalAnswer: string;
  pedagogicalTip?: string;
}

interface UniversalExerciseJson {
  exerciseNumber: number;
  title: string;
  points?: string;
  introContext?: string;
  questions: UniversalQuestionJson[];
}

interface UniversalRedactionJson {
  planSummary: string;
  introduction: {
    amorce: string;
    definitionTension: string;
    problematique: string;
    annoncePlan: string;
    fullText: string;
  };
  development: {
    part1: {
      partNumber: number;
      title: string;
      thesisOverview?: string;
      subParts: {
        subPartLetter: string;
        title: string;
        argument: string;
        explication: string;
        illustration: {
          type: string;
          auteur: string;
          oeuvreOuSource: string;
          citation: string;
          analyseIllustration: string;
        };
        fullText: string;
      }[];
      fullText: string;
    };
    transition1?: string;
    part2: {
      partNumber: number;
      title: string;
      thesisOverview?: string;
      subParts: {
        subPartLetter: string;
        title: string;
        argument: string;
        explication: string;
        illustration: {
          type: string;
          auteur: string;
          oeuvreOuSource: string;
          citation: string;
          analyseIllustration: string;
        };
        fullText: string;
      }[];
      fullText: string;
    };
    transition2?: string;
    part3?: {
      partNumber: number;
      title: string;
      thesisOverview?: string;
      subParts: {
        subPartLetter: string;
        title: string;
        argument: string;
        explication: string;
        illustration: {
          type: string;
          auteur: string;
          oeuvreOuSource: string;
          citation: string;
          analyseIllustration: string;
        };
        fullText: string;
      }[];
      fullText: string;
    };
  };
  conclusion: {
    bilanSynthese: string;
    reponseDefinitive: string;
    elargissement: string;
    fullText: string;
  };
}

interface UniversalResultJson {
  curriculumDetected: string;
  disciplineDetected: string;
  gradeLevelDetected: string;
  exerciseTypeDetected: string;
  isQuestionByQuestion: boolean;
  conceptualDisambiguation?: {
    hasAmbiguousTerm: boolean;
    term: string;
    possibleMeanings: string[];
    retainedMeaning: string;
    justification: string;
  };
  philoPreliminaryWork?: PhiloPreliminaryWork;
  francaisPreliminaryWork?: FrancaisPreliminaryWork;
  exercises: UniversalExerciseJson[];
  structuredRedaction: UniversalRedactionJson;
  fullRedactionText: string;
  stepByStepBreakdown: {
    stepNumber: number;
    title: string;
    whatToDo: string;
    whyItWorks: string;
    pitfallsToAvoid: string;
    academicStandard: string;
  }[];
  evaluationCriteria: {
    criterion: string;
    weight: string;
    description: string;
    targetStandard: string;
  }[];
}

function parseUniversalJsonResponse(rawText: string): UniversalResultJson | null {
  try {
    let clean = rawText.trim();
    if (clean.startsWith('```json')) {
      clean = clean.replace(/^```json\s*/i, '').replace(/\s*```$/, '');
    } else if (clean.startsWith('```')) {
      clean = clean.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }
    const parsed = JSON.parse(clean);
    if (!parsed) return null;
    return parsed as UniversalResultJson;
  } catch (err) {
    console.error('[InternationalUniversalSolver] JSON parse error:', err);
    return null;
  }
}

/**
 * Construit la réponse MethodologyAnalysisResult à partir du résultat JSON universel
 */
function buildUniversalMethodologyResult(
  universalData: UniversalResultJson,
  discipline: string,
  level: string
): MethodologyAnalysisResult {
  const allSolvedExercises: StructuredScientificExercise[] = (universalData.exercises || []).map((ex, i) => ({
    title: ex.title || `Exercice ${i + 1}`,
    points: ex.points || undefined,
    introContext: ex.introContext || undefined,
    questions: (ex.questions || []).map((q) => ({
      numberLabel: q.numberLabel || '1.',
      titleOrPrompt: q.titleOrPrompt || q.whatIsAsked,
      steps: [
        `**Consigne & Action attendue :** ${q.whatIsAsked || q.titleOrPrompt}`,
        q.methodOrRule ? `**Méthode / Notions de cours mobilisées :** ${q.methodOrRule}` : '',
        ...(q.steps || []).map((step) => step),
        q.pedagogicalTip ? `*Conseil méthodologique :* ${q.pedagogicalTip}` : '',
      ].filter(Boolean),
      finalAnswer: q.finalAnswer || '',
    })),
  }));

  const stepsBreakdown: StepBreakdown[] =
    universalData.stepByStepBreakdown && universalData.stepByStepBreakdown.length > 0
      ? universalData.stepByStepBreakdown.map((s, idx) => ({
          stepNumber: s.stepNumber || idx + 1,
          stepTitle: s.title || `Étape ${idx + 1}`,
          methodologyRuleApplied: s.whyItWorks || "Méthode d'excellence académique",
          content: s.whatToDo || '',
          sourceTags: ['Programme Officiel', 'Excellence Internationale'],
          pedagogicalTip: s.pitfallsToAvoid ? `À éviter : ${s.pitfallsToAvoid}` : 'Respecter la démarche pas à pas.',
        }))
      : [
          {
            stepNumber: 1,
            stepTitle: 'Identification précise de la consigne et du contexte',
            methodologyRuleApplied: 'Règle de lecture analytique et cadrage du sujet',
            content: 'Repérer le verbe d’action, le document ou les données sources.',
            sourceTags: ['Méthodologie d’Excellence'],
            pedagogicalTip: 'Ne pas lire la consigne jusqu’au bout ou inventer une donnée absente.',
          },
          {
            stepNumber: 2,
            stepTitle: 'Mobilisation des concepts et démonstration structurée',
            methodologyRuleApplied: 'Règle de démonstration scientifique et argumentative',
            content: 'Appliquer les règles disciplinaires en articulant preuves et justifications.',
            sourceTags: ['Savoirs Académiques Certifiés'],
            pedagogicalTip: 'Donner une réponse brute sans justification ni citation du texte.',
          },
          {
            stepNumber: 3,
            stepTitle: 'Formulation claire et vérification finale',
            methodologyRuleApplied: 'Règle de conclusion formelle et complétude',
            content: 'Présenter la conclusion de manière soignée, vérifiée et conforme au barème.',
            sourceTags: ['Critères de Barème'],
            pedagogicalTip: 'Oublier une sous-question ou négliger l’orthographe/syntaxe.',
          },
        ];

  const evaluationCriteria: EvaluationCriterion[] =
    universalData.evaluationCriteria && universalData.evaluationCriteria.length > 0
      ? universalData.evaluationCriteria.map((c) => ({
          criterion: c.criterion,
          fasciculeOrigin: true,
          scoreMax: 20,
          description: c.description || c.targetStandard || '',
          tipsForAutonomy: c.targetStandard ? `Standard visé : ${c.targetStandard}` : 'Vérifier la rigueur démonstrative.',
        }))
      : [
          {
            criterion: 'Complétude et respect strict des consignes',
            fasciculeOrigin: true,
            scoreMax: 6,
            description: 'Toutes les questions et sous-questions sont traitées dans l’ordre.',
            tipsForAutonomy: '100% des questions résolues sans omission',
          },
          {
            criterion: 'Justification et rigueur disciplinaire',
            fasciculeOrigin: true,
            scoreMax: 8,
            description: 'Utilisation exacte des concepts, citations ou démonstrations de cours.',
            tipsForAutonomy: 'Précision conceptuelle irréprochable',
          },
          {
            criterion: 'Qualité d’expression et clarté du raisonnement',
            fasciculeOrigin: true,
            scoreMax: 6,
            description: 'Rédaction soignée, vocabulaire technique maîtrisé, conclusion nette.',
            tipsForAutonomy: 'Niveau d\'excellence académique',
          },
        ];

  function buildPartFullText(part: any): string {
    if (!part) return '';
    if (part.fullText && part.fullText.trim().length > 80) return part.fullText.trim();
    const subTexts = (part.subParts || []).map((sp: any) => {
      if (sp.fullText && sp.fullText.trim().length > 30) return sp.fullText.trim();
      const parts = [
        sp.argument,
        sp.explication,
        sp.illustration?.citation
          ? `Comme l'illustre ${sp.illustration.auteur || 'l\'auteur'} dans ${sp.illustration.oeuvreOuSource || 'son œuvre'} : « ${sp.illustration.citation} ».`
          : '',
        sp.illustration?.analyseIllustration,
      ].filter(Boolean);
      return parts.join(' ');
    }).filter(Boolean);

    const heading = part.thesisOverview || part.title ? `**${part.title || 'Axe'}** : ${part.thesisOverview || ''}` : '';
    return [heading, ...subTexts].filter(Boolean).join('\n\n');
  }

  // Construction de la rédaction intégrale textuelle
  let fullRedaction = universalData.fullRedactionText || '';
  if (!fullRedaction && universalData.structuredRedaction) {
    const sr = universalData.structuredRedaction;
    const intro = sr.introduction?.fullText || [sr.introduction?.amorce, sr.introduction?.definitionTension, sr.introduction?.problematique, sr.introduction?.annoncePlan].filter(Boolean).join(' ');
    const part1 = buildPartFullText(sr.development?.part1);
    const trans1 = sr.development?.transition1 || '';
    const part2 = buildPartFullText(sr.development?.part2);
    const trans2 = sr.development?.transition2 || '';
    const part3 = buildPartFullText(sr.development?.part3);
    const concl = sr.conclusion?.fullText || [sr.conclusion?.bilanSynthese, sr.conclusion?.reponseDefinitive, sr.conclusion?.elargissement].filter(Boolean).join(' ');

    fullRedaction = [
      intro,
      part1,
      trans1,
      part2,
      trans2,
      part3,
      concl,
    ]
      .filter(Boolean)
      .join('\n\n');
  }

  if (!fullRedaction && allSolvedExercises.length > 0) {
    fullRedaction = allSolvedExercises
      .map(
        (ex) =>
          `### ${ex.title}\n\n` +
          ex.questions
            .map(
              (q) =>
                `#### Question ${q.numberLabel} : ${q.titleOrPrompt}\n\n` +
                q.steps.map((st) => `${st}`).join('\n\n') +
                (q.finalAnswer ? `\n\n**Réponse finale :** ${q.finalAnswer}` : '')
            )
            .join('\n\n---\n\n')
      )
      .join('\n\n====================\n\n');
  }

  const structuredRedaction: StructuredRedaction = universalData.structuredRedaction
    ? {
        planSummary: universalData.structuredRedaction.planSummary || 'Résolution méthodique intégrale',
        introduction: {
          amorce: universalData.structuredRedaction.introduction?.amorce || '',
          definitionTension: universalData.structuredRedaction.introduction?.definitionTension || '',
          problematique: universalData.structuredRedaction.introduction?.problematique || '',
          annoncePlan: universalData.structuredRedaction.introduction?.annoncePlan || '',
          fullText: universalData.structuredRedaction.introduction?.fullText || '',
        },
        development: {
          part1: {
            partNumber: 1,
            title: universalData.structuredRedaction.development?.part1?.title || 'Première partie',
            thesisOverview: universalData.structuredRedaction.development?.part1?.thesisOverview || '',
            subParts: (universalData.structuredRedaction.development?.part1?.subParts || []).map((sp) => ({
              subPartLetter: sp.subPartLetter || 'A',
              title: sp.title || '',
              argument: sp.argument || '',
              explication: sp.explication || '',
              illustration: {
                auteur: sp.illustration?.auteur || '',
                oeuvre: sp.illustration?.oeuvreOuSource || '',
                citation: sp.illustration?.citation || '',
                analyseIllustration: sp.illustration?.analyseIllustration || '',
              },
              fullText: sp.fullText || '',
            })),
            fullText: universalData.structuredRedaction.development?.part1?.fullText || '',
          },
          transition1: universalData.structuredRedaction.development?.transition1 || '',
          part2: {
            partNumber: 2,
            title: universalData.structuredRedaction.development?.part2?.title || 'Deuxième partie',
            thesisOverview: universalData.structuredRedaction.development?.part2?.thesisOverview || '',
            subParts: (universalData.structuredRedaction.development?.part2?.subParts || []).map((sp) => ({
              subPartLetter: sp.subPartLetter || 'A',
              title: sp.title || '',
              argument: sp.argument || '',
              explication: sp.explication || '',
              illustration: {
                auteur: sp.illustration?.auteur || '',
                oeuvre: sp.illustration?.oeuvreOuSource || '',
                citation: sp.illustration?.citation || '',
                analyseIllustration: sp.illustration?.analyseIllustration || '',
              },
              fullText: sp.fullText || '',
            })),
            fullText: universalData.structuredRedaction.development?.part2?.fullText || '',
          },
          transition2: universalData.structuredRedaction.development?.transition2 || undefined,
          part3: universalData.structuredRedaction.development?.part3
            ? {
                partNumber: 3,
                title: universalData.structuredRedaction.development?.part3?.title || 'Troisième partie',
                thesisOverview: universalData.structuredRedaction.development?.part3?.thesisOverview || '',
                subParts: (universalData.structuredRedaction.development?.part3?.subParts || []).map((sp) => ({
                  subPartLetter: sp.subPartLetter || 'A',
                  title: sp.title || '',
                  argument: sp.argument || '',
                  explication: sp.explication || '',
                  illustration: {
                    auteur: sp.illustration?.auteur || '',
                    oeuvre: sp.illustration?.oeuvreOuSource || '',
                    citation: sp.illustration?.citation || '',
                    analyseIllustration: sp.illustration?.analyseIllustration || '',
                  },
                  fullText: sp.fullText || '',
                })),
                fullText: universalData.structuredRedaction.development?.part3?.fullText || '',
              }
            : undefined,
        },
        conclusion: {
          bilanSynthese: universalData.structuredRedaction.conclusion?.bilanSynthese || '',
          reponseDefinitive: universalData.structuredRedaction.conclusion?.reponseDefinitive || '',
          elargissement: universalData.structuredRedaction.conclusion?.elargissement || '',
          fullText: universalData.structuredRedaction.conclusion?.fullText || '',
        },
      }
    : {
        planSummary: 'Résolution méthodique question par question',
        introduction: {
          amorce: 'Présentation du sujet et identification du cadre disciplinaire.',
          definitionTension: '',
          problematique: 'Résolution intégrale de toutes les questions posées.',
          annoncePlan: 'Démarche ordonnée respectant scrupuleusement la numérotation du sujet.',
          fullText: 'Résolution académique méthodique.',
        },
        development: {
          part1: {
            partNumber: 1,
            title: 'Résolution détaillée',
            thesisOverview: 'Traitement méthodique pas à pas.',
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
          bilanSynthese: 'Toutes les questions ont été résolues avec rigueur et vérification.',
          reponseDefinitive: 'Résultats finaux conformes aux exigences académiques officielles.',
          elargissement: 'Approfondir avec les notions clés associées.',
          fullText: 'Fin de la correction du devoir.',
        },
      };

  const isPhilo = /philo/i.test(discipline) || /philosophie/i.test(universalData.disciplineDetected || '');
  const isFrancais = /fran[çc]ais|litt[ée]rature|lettres/i.test(discipline) || /fran[çc]ais|litt[ée]rature/i.test(universalData.disciplineDetected || '');
  const isDissertationOrEssay =
    isPhilo ||
    /dissertation|essai\b|sujet de r[ée]flexion|commentaire\s*(?:compos[ée]|litt[ée]raire|philosophique)/i.test(
      (universalData.exerciseTypeDetected || '') + ' ' + discipline
    );

  const isQuestionByQuestion = !isDissertationOrEssay && (universalData.isQuestionByQuestion || allSolvedExercises.length > 0);

  return {
    exerciseTypeIdentified:
      universalData.exerciseTypeDetected || 'Devoir Académique International — Résolution d\'Excellence',
    disciplineIdentified: universalData.disciplineDetected || discipline,
    subjectNatureAnalysis: {
      subjectType: universalData.exerciseTypeDetected || 'Devoir structuré',
      keyWordsAnalysis: [
        { word: discipline, impact: 'Discipline académique officielle' },
        { word: level, impact: 'Niveau scolaire et standard d’évaluation' },
      ],
      recommendedAxesCount: 3,
      justificationPlan:
        'Conformité stricte aux exigences méthodologiques officielles et au barème d’examen international.',
      detectedGeographicContext: universalData.curriculumDetected || 'Programme International / National',
      detectedCurriculumMethodology:
        'Méthode Universelle d\'Excellence : respect scrupuleux de l\'ordre, décomposition analytique et rédaction intégrale.',
      userDirectivesApplied: [
        'Moteur Universel Mode Strict (AGENTS.md)',
        'Complétude absolue : 100% des questions résolues',
        'Justification intégrale par les règles et concepts officiels',
      ],
    },
    conceptualDisambiguation: universalData.conceptualDisambiguation,
    philoPreliminaryWork: isPhilo ? universalData.philoPreliminaryWork : undefined,
    francaisPreliminaryWork: isFrancais ? universalData.francaisPreliminaryWork : undefined,
    fasciculeMethodologyActivated: {
      name: `Méthodologie Universelle — ${discipline}`,
      description: `Normes d'excellence pédagogique pour ${discipline} au niveau ${level}`,
      stepsApplied: [
        '1. Lecture contextuelle et identification rigoureuse des consignes',
        '2. Mobilisation certifiée des savoirs et méthodes du programme officiel',
        '3. Rédaction complète, structurée et sans omission de chaque réponse',
        '4. Vérification finale et mise en valeur des résultats clés',
      ],
    },
    sourceDecomposition: {
      fasciculeMethodologies: [
        'Méthodologie Universelle d\'Excellence Académique (AGENTS.md)',
        'Démarche structurée en contrat Question -> Méthode -> Résolution -> Réponse',
      ],
      fasciculeKnowledgeUsed: [
        'Connaissances certifiées du programme officiel international',
        'Concepts fondamentaux et définitions rigoureuses de la discipline',
      ],
      externalKnowledgeMobilized: [
        'Données et questions textuelles du sujet',
        'Barèmes et standards d\'examen d\'excellence',
      ],
    },
    pedagogicalTransferExplanation:
      'Chaque réponse est entièrement justifiée et démontrée afin de permettre à l\'élève d\'assimiler le raisonnement exact attendu le jour de l\'examen.',
    level1Hint:
      'Commence par identifier le verbe d\'action précis de chaque consigne et repère les notions clés du cours requises.',
    level2Methodology:
      'Structure chaque réponse en respectant le contrat Question -> Méthode -> Démonstration -> Réponse finale.',
    level3GuidanceSteps: isDissertationOrEssay
      ? [
          "1. Analyser les termes du sujet et construire la problématique sous forme de question philosophique centrale.",
          "2. Rédiger l'introduction complète avec annonce des aspects (« Pour répondre à ce problème d'autres questions s'ajoutent : »).",
          "3. Rédiger l'Axe I avec phrase d'accroche et arguments approfondis appuyés sur des doctrines d'auteurs authentiques.",
          "4. Formuler une transition rigoureuse vers l'Axe II.",
          "5. Rédiger l'Axe II et la conclusion en 3 temps (bilan, nuance, réponse définitive et élévation)."
        ]
      : (universalData.exercises || []).map(
          (ex, i) =>
            `Exercice ${i + 1} (${ex.title}) : Résoudre méthodiquement les questions ${ex.questions.map((q) => q.numberLabel).join(', ')}.`
        ),
    level4DetailedOutline: isDissertationOrEssay && universalData.structuredRedaction
      ? `Introduction :\n• Problématique : ${universalData.structuredRedaction.introduction?.problematique || 'Question centrale du sujet'}\n• Plan : ${universalData.structuredRedaction.introduction?.annoncePlan || 'Examen dialectique'}\n\nI. ${universalData.structuredRedaction.development?.part1?.title || 'Première thèse'}\n\nII. ${universalData.structuredRedaction.development?.part2?.title || 'Seconde thèse'}${universalData.structuredRedaction.development?.part3 ? `\n\nIII. ${universalData.structuredRedaction.development?.part3?.title || 'Synthèse / Dépassement'}` : ''}\n\nConclusion :\n• Bilan : ${universalData.structuredRedaction.conclusion?.bilanSynthese || 'Synthèse des deux approches'}`
      : (universalData.exercises || [])
          .map(
            (ex, i) =>
              `Partie ${i + 1} - ${ex.title} :\n` +
              ex.questions
                .map(
                  (q) =>
                    `  • Question ${q.numberLabel} : ${q.titleOrPrompt} -> Utiliser ${q.methodOrRule || 'notions clés / documents sources'}`
                )
                .join('\n')
          )
          .join('\n\n'),
    level5FullRedaction: fullRedaction,
    structuredRedaction,
    structuredScientificResolution: !isDissertationOrEssay && allSolvedExercises.length > 0 ? allSolvedExercises : undefined,
    stepByStepBreakdown: stepsBreakdown,
    fullSynthesizedResponse: fullRedaction,
    evaluationCriteria,
    isDirectRestitution: isQuestionByQuestion,
    isAcademicPaper: isDissertationOrEssay || !isQuestionByQuestion,
    academicPaperType: isPhilo
      ? 'Dissertation Philosophique Canonique'
      : isFrancais
      ? 'Dissertation Littéraire'
      : universalData.exerciseTypeDetected || `Devoir de ${discipline}`,
  };
}

/**
 * Résout tout devoir ou exercice d'une discipline internationale (SVT, HG, Philo, Français, Anglais, SES, etc.)
 * 100% Déterministe, Autonome et Local (Méthode Papa et Moteurs Académiques)
 */
export async function solveInternationalUniversalHomework(
  params: UniversalSolverParams
): Promise<MethodologyAnalysisResult | null> {
  const {
    parsedStatement,
    discipline = 'Discipline Générale',
    level = 'Terminale',
  } = params;

  if (parsedStatement && (parsedStatement.exercises.length > 0 || parsedStatement.totalQuestionsCount > 0)) {
    try {
      const isMath = /math|math[ée]matiques/i.test(discipline);
      if (isMath) {
        const hybrid = tryHybridDeterministicExerciseResolution(parsedStatement);
        if (hybrid?.success && hybrid.solvedExercises.length > 0) {
          return buildMethodologyResultFromSolvedExercises(
            parsedStatement,
            hybrid.solvedExercises,
            discipline,
            level,
            parsedStatement.exercises.length > 1
              ? `Devoir de ${discipline} — Résolution universelle`
              : `Exercice de ${discipline} — Résolution universelle`
          );
        }
      } else {
        const papaSolved = solveAllExercisesWithPapaMethod(parsedStatement, discipline, level);
        if (papaSolved && papaSolved.length > 0) {
          return buildMethodologyResultFromSolvedExercises(
            parsedStatement,
            papaSolved,
            discipline,
            level,
            parsedStatement.exercises.length > 1
              ? `Devoir de ${discipline} — Résolution Intégrale`
              : `Exercice de ${discipline} — Résolution Méthodique`
          );
        }
      }
    } catch (err) {
      console.error('[InternationalUniversalSolver] Échec de la résolution déterministe :', err);
    }
  }

  return null;
}
