export type DisciplineType = 
  | 'philo' 
  | 'francais' 
  | 'histoire' 
  | 'geographie' 
  | 'mathematiques' 
  | 'physique_chimie' 
  | 'svt' 
  | 'edhc'
  | 'anglais' 
  | 'allemand' 
  | 'espagnol'
  | 'ses'
  | 'informatique'
  | 'droit_gestion'
  | 'sciences_ingenieur'
  | 'autre'
  | 'tice';

export type EducationCycle = 'premier_cycle_bepc' | 'second_cycle_bac' | 'superieur_universite';

export type SecondaryLevel = '6e' | '5e' | '4e' | '3e' | '2nde' | '1ere' | 'terminale' | 'superieur';

export type AcademicSerie = 
  | 'auto'
  | '6e'
  | '5e'
  | '4e'
  | '3e_bepc'
  | '2nde_a'
  | '2nde_c'
  | '1ere_a'
  | '1ere_c'
  | '1ere_d'
  | '1ere_c_d'
  | '1ere_g1'
  | '1ere_g2'
  | 'tle_a'
  | 'tle_a1'
  | 'tle_a2'
  | 'tle_c'
  | 'tle_d'
  | 'tle_e'
  | 'college_6e_4e'
  | 'superieur';

export interface OfficialIvorianCourse {
  id: string;
  discipline: DisciplineType;
  disciplineLabel: string;
  level: SecondaryLevel;
  levelLabel: string;
  serie?: AcademicSerie;
  serieLabel?: string;
  chapter: string;
  lessonTitle: string;
  objectifs: string[];
  fullCourseContent: string;
  definitions: { term: string; definition: string }[];
  propertiesAndRules: { name: string; statement: string; explanation?: string }[];
  formulas: { name: string; formula: string; explanation: string; unitOrCondition?: string }[];
  stepByStepMethods: { stepNumber: number; title: string; procedure: string; tip: string }[];
  examples: { statement: string; solution: string }[];
  exercises: {
    question: string;
    correction: string;
  }[];
  evaluationSituation?: {
    context: string;
    instructions: string[];
    solutionGuide: string;
  };
  examTraps: string[];
  quickMemo: string;
  keywords: string[];
}

export interface AcademicProfileInfo {
  serie: AcademicSerie;
  serieLabel: string;
  level: SecondaryLevel;
  levelLabel: string;
  cycle: EducationCycle;
  curriculumGuidelines: string;
}

export type AssistanceLevel = 1 | 2 | 3 | 4 | 5;

export interface FasciculeMethodologyStep {
  name: string;
  description: string;
  keyRules: string[];
}

export interface CourseConceptFormula {
  name: string;
  formulaOrRule?: string;
  formula?: string;
  explanation: string;
  contextOrApplication?: string;
}

export interface CourseMethodStep {
  stepNumber: number;
  title: string;
  whatToDo?: string;
  reflexOrTip?: string;
  procedure?: string;
  tip?: string;
}

export interface CourseSolvedExample {
  problemStatement?: string;
  solutionStepByStep?: string;
  finalAnswer?: string;
  statement?: string;
  solution?: string;
}

export interface CourseSearchResult {
  query: string;
  discipline: DisciplineType;
  disciplineLabel: string;
  cycle: EducationCycle;
  level: SecondaryLevel;
  levelLabel: string;
  chapterTitle: string;
  directContent?: string;
  /** Texte intégral du cours officiel (toutes les parties développées) */
  fullCourseContent?: string;
  /** Recherche ciblée : n'affiche que la réponse demandée, sans la fiche complète. */
  isDirectAnswer?: boolean;
  definitionAndScope: string;
  coreConceptsAndFormulas: CourseConceptFormula[];
  stepByStepMethod: CourseMethodStep[];
  solvedExample: CourseSolvedExample;
  classicExamTraps: string[];
  selfCheckChecklist: string[];
  quickRevisionMemo: string;
  certificationNote: string;
  curriculumStandard?: string;
  activeVariant?: number;
  totalVariants?: number;
  openEndedVariants?: boolean;
  argumentVariantsAvailable?: { id: number; label: string; perspective: string }[];
  isInternational?: boolean;
  /** Aucun résultat fiable trouvé : ne pas traiter comme une fiche de cours. */
  noResult?: boolean;
  /** Indique si tous les angles complémentaires ont déjà été intégrés via 'Voir plus' */
  hasLoadedAllVariants?: boolean;
  /** Titre officiel du cours ou chapitre complet auquel la notion est rattachée */
  relatedCourseTitle?: string;
  /** Provenance explicite de la réponse pour permettre la vérification par l'élève. */
  sourceKind?: 'official_local' | 'curated_academic_local' | 'international_curriculum' | 'encyclopedia_external' | 'structured_external' | 'none';
  sourceName?: string;
  sourceUrl?: string;
  verificationStatus?: 'verified' | 'external_reference' | 'not_verified' | 'no_result';
  confidence?: number;
  /** Contexte géographique explicite détecté par le moteur. */
  curriculumCountryCode?: string;
  curriculumCountryName?: string;
  curriculumAuthority?: string;
  curriculumSourceYear?: string;
}

export interface Fascicule {
  id: string;
  title: string;
  author?: string;
  roleOrAffiliation?: string;
  countryOrigin?: string;
  discipline: DisciplineType;
  disciplineLabel: string;
  badgeColor?: string;
  cycle?: EducationCycle;
  level?: SecondaryLevel;
  series?: string[];
  publicationYear?: number;
  coverDescription?: string;
  overview?: string;
  keyConcepts?: string[];
  pedagogicalThemes?: string[];
  methodologicalHighlights?: FasciculeMethodologyStep[];
  summary?: string;
  methodologyOverview?: string;
  methodologySteps?: FasciculeMethodologyStep[];
  coreKnowledgeExcerpt: string;
  sampleInBookletSubjects: string[];
  sampleNewUntreatedSubjects: string[];
}

export interface SourceDecomposition {
  fasciculeMethodologies: string[];
  fasciculeKnowledgeUsed: string[];
  externalKnowledgeMobilized: string[];
}

export interface StepBreakdown {
  stepNumber: number;
  stepTitle: string;
  methodologyRuleApplied: string;
  content: string;
  sourceTags: string[];
  pedagogicalTip: string;
}

export interface EvaluationCriterion {
  criterion: string;
  fasciculeOrigin: boolean;
  scoreMax?: number;
  description: string;
  tipsForAutonomy: string;
}

export interface IllustrationData {
  auteur: string;
  oeuvre: string;
  citation: string;
  analyseIllustration: string;
}

export interface SubPartData {
  subPartLetter: string;
  title: string;
  argument: string;
  explication: string;
  illustration: IllustrationData;
  fullText: string;
}

export interface DevelopmentPartData {
  partNumber: number;
  title: string;
  thesisOverview?: string;
  subParts: SubPartData[];
  subPartA?: string;
  subPartB?: string;
  subPartC?: string;
  transition?: string;
  fullText: string;
}

export interface StructuredRedaction {
  planSummary: string;
  introduction: {
    amorce: string;
    definitionTension: string;
    problematique: string;
    annoncePlan: string;
    fullText: string;
  };
  development: {
    part1: DevelopmentPartData;
    transition1: string;
    part2: DevelopmentPartData;
    transition2?: string;
    part3?: DevelopmentPartData;
  };
  conclusion: {
    bilanSynthese: string;
    reponseDefinitive: string;
    elargissement: string;
    fullText: string;
  };
}

export interface StructuredScientificQuestion {
  numberLabel: string;
  titleOrPrompt?: string;
  steps: string[];
  finalAnswer?: string;
}

export interface StructuredScientificExercise {
  title: string;
  points?: string;
  introContext?: string;
  questions: StructuredScientificQuestion[];
}

export interface ConceptualDisambiguation {
  hasAmbiguousTerm: boolean;
  term: string;
  possibleMeanings: string[];
  retainedMeaning: string;
  justification: string;
}

export interface StudentProfile {
  id: string;
  email?: string;
  password?: string;
  lastName?: string;
  firstName?: string;
  fullName: string;
  country: string;
  countryCode: string;
  flagEmoji: string;
  phoneCode?: string;
  educationSystem: string;
  curriculumAuthority?: string;
  grade: string;
  serie?: string;
  schoolName?: string;
  city?: string;
  phoneNumber?: string;
  parentPhoneNumber?: string;
  studentMatricule?: string;
  subscriptionStatus?: 'free_discovery' | 'active_student' | 'premium_soon';
  subscriptionLabel?: string;
  isRegistered: boolean;
  registeredAt?: string;
  updatedAt?: string;
}

export interface SubjectNatureAnalysis {
  subjectType: string;
  keyWordsAnalysis: { word: string; impact: string }[];
  tensionOrOpposition?: string;
  recommendedAxesCount: number;
  justificationPlan: string;
  detectedGeographicContext?: string;
  detectedCurriculumMethodology?: string;
  userDirectivesApplied?: string[];
}

export interface PhiloIntroVariant {
  type: 'definition' | 'constat' | 'citation';
  titre: string;
  description: string;
  amorceParadoxe: string;
  texteComplet: string;
}

export interface PhiloPreliminaryWork {
  lexiqueDefinitions: { terme: string; definition: string }[];
  reformulation: string;
  tensionPhilosophique?: string;
  problematisation: {
    probleme: string; // Court, percutant et direct (jamais long !)
    aspect1: string;  // Dans quelle mesure / En quoi ... ?
    aspect2: string;  // Cependant / Toutefois, ... ne ... pas ?
  };
  introVariants?: PhiloIntroVariant[];
  planAxe1?: {
    titre: string;
    arguments: { idee: string; auteur: string; oeuvre: string; citation: string; explication: string }[];
  };
  transitionAxe1Axe2?: string;
  planAxe2?: {
    titre: string;
    arguments: { idee: string; auteur: string; oeuvre: string; citation: string; explication: string }[];
  };
  validationReport?: {
    isValid: boolean;
    scoreConformite: number;
    checks: {
      checkNumber: number;
      label: string;
      status: 'passed' | 'reconstructed';
      detail: string;
      reconstructedAction?: string;
    }[];
    part1Audit?: any;
    part2Audit?: any;
  };
  activeVariant?: number;
  totalVariants?: number;
  argumentVariantsAvailable?: { id: number; label: string; perspective?: string }[];
  /** Le corpus peut produire de nouvelles présentations déterministes sans épuiser les angles de référence. */
  openEndedVariants?: boolean;
}

export interface FrancaisPreliminaryWork {
  analyseDuSujet: {
    motsCles: { mot: string; sens: string }[];
    consigneIsolee: string;
    rappelConsigne: string;
    reformulation: string;
    vocationsMobilisees: {
      vocation: string;
      justification: string;
    }[];
  };
  problematisation: {
    problemeSansOu: string;
    regleRespectee: string;
    tensionDialectique: string;
  };
  introductionMethodique: {
    amorce: string;
    citationSansConsigne: string;
    explicationCitation: string;
    problemeSansOu: string;
    annoncePlan: string;
    texteComplet: string;
  };
  planStructure: {
    typeDePlan: string;
    axe1: {
      titre: string;
      vocationPrincipale?: string;
      chapeau?: string;
      paragraphes: {
        idee: string;
        explication: string;
        oeuvre: string;
        auteur: string;
        citation: string;
        analyse: string;
      }[];
    };
    transitionAxe1Axe2: string;
    axe2: {
      titre: string;
      vocationPrincipale?: string;
      chapeau?: string;
      paragraphes: {
        idee: string;
        explication: string;
        oeuvre: string;
        auteur: string;
        citation: string;
        analyse: string;
      }[];
    };
    axe3?: {
      titre: string;
      vocationPrincipale?: string;
      chapeau?: string;
      paragraphes: {
        idee: string;
        explication: string;
        oeuvre: string;
        auteur: string;
        citation: string;
        analyse: string;
      }[];
    };
  };
  conclusionMethodique: {
    bilan: string;
    priseDePosition: string;
    ouverture: string;
    texteComplet: string;
  };
}

export interface MethodologyAnalysisResult {
  exerciseTypeIdentified: string;
  disciplineIdentified: string;
  subjectNatureAnalysis?: SubjectNatureAnalysis;
  conceptualDisambiguation?: ConceptualDisambiguation;
  philoPreliminaryWork?: PhiloPreliminaryWork;
  francaisPreliminaryWork?: FrancaisPreliminaryWork;
  fasciculeMethodologyActivated: {
    name: string;
    description: string;
    stepsApplied: string[];
  };
  sourceDecomposition: SourceDecomposition;
  pedagogicalTransferExplanation: string;
  // 5 Levels of Assistance
  level1Hint: string;
  level2Methodology: string;
  level3GuidanceSteps: string[];
  level4DetailedOutline: string;
  level5FullRedaction: string;
  structuredRedaction: StructuredRedaction;
  // Rempli uniquement pour Mathématiques / Physique-Chimie / SVT : évite le parsing fragile
  // de texte libre côté client en fournissant directement la résolution découpée en étapes.
  structuredScientificResolution?: StructuredScientificExercise[];
  stepByStepBreakdown: StepBreakdown[];
  fullSynthesizedResponse: string;
  evaluationCriteria: EvaluationCriterion[];
  // true quand il s'agit d'une question directe, citation ou restitution de connaissances (pas une dissertation)
  isDirectRestitution?: boolean;
  // true quand il s'agit d'un devoir académique ou commentaire de document
  isAcademicPaper?: boolean;
  academicPaperType?: string;
  // true quand cette résolution vient du moteur de secours local (hors-ligne, sans IA)
  // plutôt que du moteur IA principal — à afficher clairement à l'élève.
  isFallback?: boolean;
  activeVariant?: number;
  totalVariants?: number;
  argumentVariantsAvailable?: { id: number; label: string; perspective?: string }[];
}

export interface StudentCorrectionResult {
  globalScore: number; // e.g. 14.5 / 20
  appreciation: string;
  targetAdvice: string;
  criteriaScores: {
    comprehension: { score: number; max: 20; comment: string };
    methodology: { score: number; max: 20; comment: string };
    problematique: { score: number; max: 20; comment: string };
    organisationPlan: { score: number; max: 20; comment: string };
    argumentation: { score: number; max: 20; comment: string };
    exemplesReferences: { score: number; max: 20; comment: string };
    redactionStyle: { score: number; max: 20; comment: string };
  };
  whatIsSuccessful: string[];
  toImprove: string[];
  criticalErrors: string[];
  conceptsToReview: string[];
  remedialTips: string[];
  // true quand cette correction vient du moteur de secours local (hors-ligne, sans IA)
  // plutôt que du moteur IA principal — à afficher clairement à l'élève.
  isFallback?: boolean;
}

export interface SavedExercise {
  id: string;
  date: string;
  subjectTitle: string;
  discipline: string;
  exerciseType: string;
  result: MethodologyAnalysisResult;
  isFavorite: boolean;
  userScore?: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  timestamp: string;
}

