import { DisciplineType, EducationCycle, SecondaryLevel, CourseConceptFormula, CourseMethodStep, CourseSolvedExample, CourseSearchResult } from '../types';

export interface InternationalCourseDefinition {
  id: string;
  queryKeywords: RegExp;
  keywords: string[];
  discipline: DisciplineType;
  disciplineLabel: string;
  cycle: EducationCycle;
  level: SecondaryLevel;
  levelLabel: string;
  curriculumStandard: string;
  chapterTitle: string;
  definitionAndScope: string;
  fullCourseContent?: string;
  coreConceptsAndFormulas: CourseConceptFormula[];
  stepByStepMethod: CourseMethodStep[];
  solvedExample: CourseSolvedExample;
  classicExamTraps: string[];
  selfCheckChecklist: string[];
  quickRevisionMemo: string;
  certificationNote: string;
}

export const INTERNATIONAL_COURSES_BASE: InternationalCourseDefinition[] = [
  // =========================================================================
  // 1. BACCALAURÉAT INTERNATIONAL (IB DP) : TOK (THEORY OF KNOWLEDGE)
  // =========================================================================
  {
    id: 'ib-dp-theory-of-knowledge-tok',
    queryKeywords: /\b(?:tok|theory\s*of\s*knowledge|th[ée]orie\s*de\s*la\s*connaissance|knowledge\s*questions?|aok|areas?\s*of\s*knowledge|wok|ways?\s*of\s*knowing)\b/i,
    keywords: ['tok', 'theory of knowledge', 'théorie de la connaissance', 'ib', 'baccalauréat international', 'knowledge framework', 'areas of knowledge', 'ways of knowing', 'aok', 'wok', 'epistemology', 'ib dp'],
    discipline: 'philo',
    disciplineLabel: 'Philosophie & Épistémologie (Baccalauréat International IB)',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'IB Diploma Programme (DP Years 1 & 2)',
    curriculumStandard: 'Baccalauréat International (IB DP - Tronc Commun Obligatoire)',
    chapterTitle: 'Theory of Knowledge (TOK) : Le Cadre de Connaissances, les Domaines du Savoir (AOK) et l\'Évaluation',
    definitionAndScope: `La Théorie de la Connaissance (TOK / Theory of Knowledge) constitue le cœur philosophique et épistémologique du Programme du Diplôme du Baccalauréat International (IB DP). 
Plutôt que d'accumuler de nouvelles données factuelles, TOK invite l'élève à adopter une posture réflexive et critique de second ordre : « Comment savons-nous ce que nous prétendons savoir ? » (How do we know what we claim to know ?).
L'enseignement s'articule autour du Thème central (« La connaissance et le connaisseur »), de quatre Thèmes optionnels (Technologies, Langage, Politique, Religion, Savoirs indigènes) et de cinq Domaines de Connaissances fondamentaux (Areas of Knowledge - AOK) :
1. Les Sciences de la Nature (Natural Sciences)
2. Les Sciences Humaines (Human Sciences)
3. L'Histoire (History)
4. Les Arts (The Arts)
5. Les Mathématiques (Mathematics).
Chaque domaine est interrogé à travers les quatre piliers du Cadre de Connaissances (Knowledge Framework) : Portée (Scope), Perspectives, Méthodes et Outils (Methods and Tools), et Éthique (Ethics).`,
    fullCourseContent: `I. LE CADRE DE CONNAISSANCES DE TOK (KNOWLEDGE FRAMEWORK) :
1. Portée (Scope) :
- Définit l'objet d'étude de chaque domaine : quelles questions ce domaine tente-t-il de résoudre ?
- Délimite ce qui relève du domaine et ce qui en est exclu (démarcation scientifique selon Popper, sens esthétique, vérités mathématiques déductives vs vérités empiriques).
2. Perspectives :
- Rôle du contexte historique, culturel, sociologique et personnel dans la production et l'interprétation des savoirs.
- Importance de la pluralité des points de vue (ex: historiographie révisionniste, paradigmes scientifiques selon Thomas Kuhn).
3. Méthodes et Outils (Methods and Tools) :
- Mécanismes de justification et de preuve : méthode hypothético-déductive, protocoles expérimentaux, axiomatique formelle, modélisation statistique, herméneutique textuelle.
- Les technologies numériques comme amplificateurs ou biais de la recherche.
4. Éthique (Ethics) :
- Les responsabilités morales des producteurs de savoir (chercheurs, historiens, artistes, algorithmes).
- Éthique de la recherche (expérimentation humaine/animale, intégrité académique, applications militaires/biotechnologiques).

II. LES CINQ DOMAINES DE CONNAISSANCES OBLIGATOIRES (AOK) :
1. Les Mathématiques : Système formel fondé sur des axiomes, des définitions et la déduction pure. Certitude absolue au sein du système, mais indépendance relative du réel empirique.
2. Les Sciences de la Nature : Fondées sur l'observation, l'expérimentation répétable et la réfutabilité (falsifiability). Rôle de l'induction et de la construction de modèles provisoires.
3. Les Sciences Humaines (Économie, Sociologie, Psychologie) : Étude du comportement humain. Complexité liée à l'effet observateur (effet Hawthorne) et à la conscience réflexive des sujets étudiés.
4. L'Histoire : Reconstitution critique du passé à partir de traces et sources primaires/secondaires lacunaires. Nécessité d'affronter les biais de sélection et les récits partisans.
5. Les Arts : Expression sensible et subjective véhiculant des vérités émotionnelles, esthétiques et politiques universelles non traduisibles en propositions logiques formelles.

III. ÉVALUATION OFFICIELLE DU COURS TOK :
1. L'Exposition TOK (33% de la note finale) : L'élève choisit un objet réel et répond à une des 35 invites officielles prescrites par l'IB en montrant comment TOK se manifeste dans le monde réel.
2. L'Essai TOK (67% de la note finale) : Rédaction de 1 600 mots maximum sur l'un des 6 titres prescrits (Prescribed Titles) publiés par l'IB pour chaque session d'examen.`,
    coreConceptsAndFormulas: [
      {
        name: 'Question de Connaissance (Knowledge Question - KQ)',
        formula: '\\text{KQ} = \\text{Question ouverte, de second ordre, générale et axée sur la nature de la justification}',
        explanation: 'Une KQ ne demande pas « Quel est le taux d\'inflation ? » (premier ordre), mais « Dans quelle mesure les modèles statistiques permettent-ils de prédire les comportements économiques ? » (second ordre TOK).'
      },
      {
        name: 'Matrice de Notation du Diplôme IB (TOK + EE)',
        formula: '\\text{Points Bonus} \\in [0 ; 3] \\quad \\text{selon le croisement des mentions A, B, C, D, E de TOK et de l\'Extended Essay}',
        explanation: 'TOK et l\'Extended Essay (Mémoire) attribuent jusqu\'à 3 points bonus cruciaux pour atteindre le score maximal de 45 points du Diplôme IB. Une note E à l\'un des deux éléments entraîne automatiquement l\'échec au diplôme.'
      },
      {
        name: 'Critère de Réfutabilité (Karl Popper)',
        formula: '\\forall H, \\quad H \\text{ est scientifique} \\iff \\exists \\text{ observation } O \\text{ pouvant infirmer } H',
        explanation: 'Pilier fondamental de l\'AOK Sciences de la nature : une théorie qui n\'est réfutable par aucune expérience n\'est pas scientifique.'
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Déconstruire un Titre Prescrit d\'Essai TOK (Prescribed Title)',
        procedure: '1. Identifier les termes clés du titre et leurs définitions épistémologiques précises.\n2. Repérer l\'affirmation centrale (claim) et son présupposé sous-jacent.\n3. Sélectionner impérativement DEUX Domaines de Connaissances (AOK) contrastés (ex: Mathématiques vs Sciences Humaines).\n4. Formuler des arguments étayés par des exemples concrets du monde réel (Real-Life Situations - RLS) précis et personnels.\n5. Développer systématiquement un contre-argument (counterclaim) solide pour chaque argument afin de nuancer l\'analyse.',
        tip: 'Bannir les généralités vagues du type « Depuis la nuit des temps » ou les exemples éculés comme Galilée ou Newton : privilégier des cas de recherche récents et documentés.'
      }
    ],
    solvedExample: {
      statement: 'Sujet prescrit type : « Les faits bruts existent-ils indépendamment de toute interprétation ? » Discutez cette affirmation en vous référant à deux domaines de connaissances.',
      solution: '1. Analyse conceptuelle : Définir le "fait brut" (donnée brute, observation objective) face à "l\'interprétation" (grille théorique, sélection, langage).\n2. Dans les Sciences de la Nature : La théorie détermine ce que nous pouvons observer (Einstein/Kuhn). Même une mesure d\'appareil présuppose les théories physiques régissant cet appareil. Contre-argument : La résistance du réel (une molécule réagit chimiquement que l\'homme l\'observe ou non) atteste d\'une matérialité indépendante.\n3. Dans l\'Histoire : Il n\'y a pas d\'histoire sans documents, mais un document ne devient source que par le questionnement de l\'historien (Marc Bloch). Les traces subsistent, mais le récit historique est par essence une construction interprétative rigoureuse.'
    },
    classicExamTraps: [
      'Traiter l\'essai TOK comme une simple dissertation de culture générale sans mobiliser le Cadre de Connaissances (Scope, Perspectives, Methods, Ethics).',
      'Donner des exemples hypothétiques ou vagues (« Imaginez un scientifique... ») au lieu d\'exemples réels, vérifiables et précis.',
      'Oublier de relier explicitement chaque paragraphe à la Question de Connaissance principale posée par le titre.'
    ],
    selfCheckChecklist: [
      'Ai-je respecté la limite absolue de 1 600 mots fixée par le règlement de l\'IB ?',
      'Mes deux Domaines de Connaissances (AOK) sont-ils traités avec un équilibre parfait ?',
      'Chaque argument est-il immédiatement suivi d\'un contre-argument rigoureux et d\'une réconciliation conceptuelle ?'
    ],
    quickRevisionMemo: 'TOK en 3 mots : Connaisseur, Justification, Perspectives. 5 AOK (Maths, Sciences Nature, Sciences Humaines, Histoire, Arts) x 4 Piliers (Portée, Perspectives, Méthodes, Éthique).',
    certificationNote: 'Référentiel International certifié conforme au Guide Officiel de Théorie de la Connaissance de l\'Organisation du Baccalauréat International (IBO).'
  },

  // =========================================================================
  // 2. BACCALAURÉAT INTERNATIONAL (IB DP) : STRUCTURE GÉNÉRALE DU DIPLÔME
  // =========================================================================
  {
    id: 'ib-dp-diploma-programme-overview',
    queryKeywords: /\b(?:baccalaur[ée]at\s*international|ib\s*dp|diploma\s*programme|programme\s*du\s*dipl[ôo]me\s*ib|ibo|internal\s*assessment|extended\s*essay|cas\s*ib)\b/i,
    keywords: ['baccalauréat international', 'ib dp', 'diploma programme', 'ibo', 'extended essay', 'cas', 'internal assessment', 'hl', 'sl', 'higher level', 'standard level', '45 points'],
    discipline: 'autre',
    disciplineLabel: 'Sciences de l\'Éducation & Cursus Internationaux',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'IB Diploma Programme (16–19 ans)',
    curriculumStandard: 'Organisation du Baccalauréat International (IBO - Genève / Cardiff)',
    chapterTitle: 'Le Baccalauréat International (IB DP) : Structure des 6 Groupes, Tronc Commun et Évaluation',
    definitionAndScope: `Le Programme du Diplôme du Baccalauréat International (IB DP) est un cursus d'études secondaires pré-universitaire bilingue et rigoureux dispensé sur deux ans dans plus de 5 000 établissements du monde entier.
Le programme se structure autour d'un hexagone de 6 matières académiques combiné à un tronc commun obligatoire en 3 volets (Core) :
1. Le Tronc Commun (Core) : Théorie de la Connaissance (TOK), Mémoire de recherche indépendant de 4 000 mots (Extended Essay - EE), et Créativité, Activité, Service (CAS).
2. Les 6 Groupes disciplinaires :
- Groupe 1 : Études en langue et littérature (Langue A)
- Groupe 2 : Acquisition de langues (Langue B ou Ab initio)
- Groupe 3 : Individus et sociétés (Histoire, Économie, Géographie, Psychologie, Politique mondiale)
- Groupe 4 : Sciences expérimentales (Biologie, Chimie, Physique, Systèmes environnementaux)
- Groupe 5 : Mathématiques (Analysis & Approaches ou Applications & Interpretation)
- Groupe 6 : Les arts (ou une matière optionnelle supplémentaire choisie dans les groupes 1 à 4).
Chaque élève suit obligatoirement 3 matières au Niveau Supérieur (Higher Level - HL, 240 heures) et 3 matières au Niveau Moyen (Standard Level - SL, 150 heures).`,
    fullCourseContent: `I. LE SYSTÈME DE NOTATION SUR 45 POINTS :
- Chaque matière académique (6 au total) est notée sur une échelle de 1 (très faible) à 7 (excellent).
- Total des matières : 6 x 7 = 42 points.
- Tronc Commun (TOK + Extended Essay) : Jusqu'à 3 points bonus selon la grille matricielle A-B-C-D-E.
- Score maximal théorique : 42 + 3 = 45 points.
- Conditions d'obtention du Diplôme IB :
  * Obtenir au moins 24 points au total.
  * Valider obligatoirement le programme CAS (satisfaisant).
  * Obtenir au moins 12 points dans les matières de Niveau Supérieur (HL).
  * Obtenir au moins 9 points dans les matières de Niveau Moyen (SL).
  * Aucune note 1 et pas plus de deux notes 2.
  * Pas de note E à TOK ou à l'Extended Essay.

II. L'ÉVALUATION INTERNE (INTERNAL ASSESSMENT - IA) :
Dans chaque matière, une part de 20% à 30% de la note finale provient d'un travail de recherche personnel encadré par le professeur et modéré par les examinateurs internationaux de l'IB :
- En Mathématiques : Exploration mathématique de 12 à 20 pages.
- En Sciences : Rapport d'expérimentation en laboratoire ou modélisation de données (12 pages).
- En Histoire : Investigation historique guidée de 2 200 mots.
- En Économie : Recueil de 3 commentaires d'articles d'actualité économique avec diagrammes.

III. LES VALEURS DU PROFIL DE L'APPRENANT DE L'IB :
L'IB vise à former des citoyens du monde : Chercheurs, Informés, Sensés, Communicatifs, Intègres, Ouverts d'esprit, Altruistes, Audacieux, Équilibrés, Réfléchis.`,
    coreConceptsAndFormulas: [
      {
        name: 'Calcul du Score Final du Diplôme IB',
        formula: '\\text{Score Final} = \\sum_{i=1}^{6} \\text{Note}_i + \\text{Points Bonus}_{\\text{TOK} + \\text{EE}} \\quad (\\text{Max} = 45)',
        explanation: 'Le seuil de réussite est de 24/45. Les universités d\'élite mondiales (Oxford, Cambridge, Harvard, MIT, Polytechnique) exigent généralement entre 38 et 42 points avec 7,7,6 en HL.'
      },
      {
        name: 'Répartition Horaire HL vs SL',
        formula: '\\text{HL} = 240\\text{ h d\'enseignement}, \\quad \\text{SL} = 150\\text{ h d\'enseignement}',
        explanation: 'Le Niveau Supérieur (HL) approfondit la théorie et requiert une maîtrise analytique et conceptuelle accrue.'
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Planifier et Réussir l\'Extended Essay (Mémoire IB de 4 000 mots)',
        procedure: '1. Choisir une discipline académique autorisée et formuler une Question de Recherche (Research Question - RQ) précise et ciblée.\n2. Réaliser une revue critique de la littérature académique de référence.\n3. Définir une méthodologie rigoureuse (enquête empirique, calcul théorique, analyse textuelle comparative).\n4. Rédiger le mémoire en respectant les normes de citation académique (APA, MLA ou Chicago) avec bibliographie complète.\n5. Compléter les 3 séances de réflexion obligatoires avec le superviseur (RPPF - Reflections on Planning and Progress Form).',
        tip: 'Ne jamais dépasser la limite absolue de 4 000 mots sous peine de pénalité immédiate de lecture.'
      }
    ],
    solvedExample: {
      statement: 'Un candidat au diplôme IB obtient les notes suivantes : HL Maths AA : 6, HL Physique : 6, HL Économie : 7 ; SL Français A : 5, SL Anglais B : 6, SL Chimie : 5. Son Extended Essay obtient la note B et TOK la note B. Calculez son score total et indiquez s\'il obtient le diplôme.',
      solution: '1. Somme des 6 matières : 6 + 6 + 7 + 5 + 6 + 5 = 35 points.\n2. Tronc commun : La matrice TOK (B) + Extended Essay (B) donne 2 points bonus.\n3. Score total : 35 + 2 = 37 points sur 45.\n4. Vérification des conditions : Total >= 24 (37 >= 24) ; HL total = 6 + 6 + 7 = 19 >= 12 ; SL total = 5 + 6 + 5 = 16 >= 9 ; aucune note inférieure à 5. Le candidat est diplômé avec mention d\'excellence.'
    },
    classicExamTraps: [
      'Négliger le programme CAS (Créativité, Activité, Service) : même avec 45/45, l\'absence de validation CAS empêche la délivrance du diplôme.',
      'Plagiat ou intelligence artificielle non citée dans l\'Extended Essay ou l\'Internal Assessment : détection par l\'IB entraînant l\'exclusion pour faute académique.',
      'Sous-estimer la charge de travail combinée des évaluations internes (IAs) au premier trimestre de la deuxième année.'
    ],
    selfCheckChecklist: [
      'Ai-je 3 matières au Niveau Supérieur (HL) et 3 au Niveau Moyen (SL) ?',
      'Mes 3 séances de réflexion RPPF d\'Extended Essay sont-elles signées et documentées ?',
      'Mon portfolio CAS contient-il les réflexions sur les 7 résultats d\'apprentissage ?'
    ],
    quickRevisionMemo: 'IB DP = 6 matières (3 HL + 3 SL) notées de 1 à 7 + Core (TOK + Extended Essay 4 000 mots + CAS) = 45 points max. Diplôme dès 24 points.',
    certificationNote: 'Guide et règlements officiels de l\'Organisation du Baccalauréat International (IBO).'
  },

  // =========================================================================
  // 3. CAMBRIDGE ASSESSMENT INTERNATIONAL EDUCATION (CAIE) : A-LEVELS
  // =========================================================================
  {
    id: 'cambridge-international-as-a-levels',
    queryKeywords: /\b(?:cambridge|a\s*levels?|as\s*level|caie|cie|igcse|gce\s*advanced\s*level|cambridge\s*assessment)\b/i,
    keywords: ['cambridge', 'a-levels', 'as level', 'caie', 'igcse', 'gce', 'pure mathematics', 'cambridge international', 'papers', 'a*', 'ucas'],
    discipline: 'autre',
    disciplineLabel: 'Système Éducatif Britannique & International (Cambridge CAIE)',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    levelLabel: 'Cambridge International AS & A Level (16–19 ans)',
    curriculumStandard: 'Cambridge Assessment International Education (University of Cambridge)',
    chapterTitle: 'Cambridge International AS & A-Levels : Structure des Examens, Syllabus et Notation A* à E',
    definitionAndScope: `Les examens Cambridge International General Certificate of Education Advanced Level (A-Levels) constituent la référence internationale des admissions universitaires dans le monde anglo-saxon et international (Royaume-Uni, États-Unis, Canada, Singapour, Europe).
Gérés par Cambridge Assessment International Education (département de l'Université de Cambridge), les A-Levels permettent aux élèves de se spécialiser en profondeur dans 3 ou 4 matières majeures choisies librement en fonction de leur future filière universitaire (Médecine, Ingénierie, Droit, Économie, Sciences humaines).
Le cycle se déroule sur deux années :
1. AS-Level (Advanced Subsidiary, Year 12) : Première moitié du cursus, pouvant constituer une certification autonome ou la première composante du A-Level complet.
2. A2-Level (Year 13) : Deuxième moitié du cursus, avec des épreuves approfondies (Papers) permettant l'attribution de la note finale globale sur l'échelle de A* à E.`,
    fullCourseContent: `I. STRUCTURE DES ÉPREUVES (PAPERS) ET CODES SYLLABUS MAJEURS :
1. Cambridge International A-Level Mathematics (Syllabus 9709) :
- Paper 1 : Pure Mathematics 1 (P1 - Fonctions, géométrie analytique, trigonométrie, dérivation, intégration basique).
- Paper 3 : Pure Mathematics 3 (P3 - Algèbre poussée, exponentielles/logarithmes, intégration par parties/fractions partielles, équations différentielles, nombres complexes, vecteurs 3D).
- Paper 4 : Mechanics (M1 - Cinématique, lois de Newton, énergie/puissance, équilibre de forces).
- Paper 5 ou 6 : Probability & Statistics (S1 / S2 - Probabilités combinatoires, variables aléatoires discrètes et continues, lois binomiale/normale/Poisson, tests d'hypothèses).

2. Cambridge International A-Level Sciences (Physics 9702, Chemistry 9701, Biology 9700) :
- Paper 1 : Multiple Choice (QCM 40 questions, 1h15).
- Paper 2 : AS Level Structured Questions (Questions rédigées théoriques).
- Paper 3 : Advanced Practical Skills (Épreuve pratique obligatoire en laboratoire de 2 heures).
- Paper 4 : A2 Level Structured Questions (Théorie avancée et applications).
- Paper 5 : Planning, Analysis and Evaluation (Conception expérimentale, incertitudes et traitement de données).

3. Cambridge International A-Level Economics (Syllabus 9708) :
- AS Level (Papers 1 & 2) : Marchés, élasticités, défaillances de marché, commerce international et balance des paiements.
- A2 Level (Papers 3 & 4) : Structures de marché (monopole, oligopole), efficience allocative/productive, marché du travail, politiques macroéconomiques et développement durable.

II. SYSTÈME DE NOTATION ET ÉQUIVALENCES UCAS :
- Les notes vont de A* (la plus haute distinction, généralement 90%+ uniform mark scale) à E (seuil minimal de réussite), suivies de U (Ungraded).
- Au niveau AS seul, la note maximale est un A (pas de A* au niveau AS).
- Tarif UCAS (Royaume-Uni) : A* = 56 points, A = 48 points, B = 40 points, C = 32 points, D = 24 points, E = 16 points.`,
    coreConceptsAndFormulas: [
      {
        name: 'Structure Standard A-Level Mathematics (9709)',
        formula: '\\text{A-Level Maths} = \\text{P1 (30\\%)} + \\text{P3 (30\\%)} + \\text{M1 (20\\%)} + \\text{S1 (20\\%)}',
        explanation: 'Formule standard la plus choisie pour intégrer les filières scientifiques ou d\'ingénierie.'
      },
      {
        name: 'Échelle des Mentions Cambridge',
        formula: 'A^* \\ (\\ge 90\\%), \\quad A \\ (80\\text{--}89\\%), \\quad B \\ (70\\text{--}79\\%), \\quad C \\ (60\\text{--}69\\%), \\quad D \\ (50\\text{--}59\\%), \\quad E \\ (40\\text{--}49\\%)',
        explanation: 'Notes délivrées par composante (Uniform Mark Scale - UMS) pour standardiser la difficulté des sessions d\'examen de mai/juin et octobre/novembre.'
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Maîtriser la Résolution des Papers Cambridge',
        procedure: '1. Télécharger le Syllabus officiel et la table de formules autorisée (MF19 pour les mathématiques).\n2. Résoudre au moins 5 années de Past Papers complets en conditions d\'examen chronométrées strictes.\n3. Consulter systématiquement les Mark Schemes officiels pour repérer les points de méthode (M marks) et les points de résultat exact (A marks).\n4. Lire le rapport de l\'examinateur en chef (Examiner Report) pour identifier les erreurs récurrentes des candidats mondiaux.',
        tip: 'Dans les sciences Cambridge, les chiffres significatifs et les unités physiques exactes sont sanctionnés à chaque question.'
      }
    ],
    solvedExample: {
      statement: 'Cambridge A-Level Maths (Pure 3) : Résoudre l\'équation différentielle \\frac{dy}{dx} = 2y(x+1) sachant que y = 3 pour x = 0.',
      solution: '1. Séparation des variables : \\frac{1}{y} dy = 2(x+1) dx.\n2. Intégration des deux membres : \\int \\frac{1}{y} dy = \\int (2x + 2) dx \\implies \\ln|y| = x^2 + 2x + C.\n3. Détermination de la constante C : Pour x = 0 et y = 3, \\ln(3) = 0 + 0 + C \\implies C = \\ln(3).\n4. Expression explicite de y : \\ln|y| = x^2 + 2x + \\ln(3) \\implies y = e^{x^2 + 2x + \\ln(3)} = 3e^{x^2 + 2x}.'
    },
    classicExamTraps: [
      'Oublier la constante d\'intégration C dans les questions de calcul différentiel et intégral des Papers P1 et P3.',
      'Négliger l\'épreuve pratique de laboratoire (Paper 3) dans les matières scientifiques, qui requiert une technique manipulatoire réelle et le calcul rigoureux des incertitudes.',
      'Confondre les exigences de commande des verbes Cambridge : « State » (citer sans justifier), « Explain » (causes et mécanismes), « Evaluate » (jugement critique équilibré).'
    ],
    selfCheckChecklist: [
      'Ai-je mémorisé les définitions exactes du glossaire du syllabus Cambridge ?',
      'Mes réponses respectent-elles le nombre de chiffres significatifs imposé par la consigne ?',
      'Ai-je rédigé toutes les étapes intermédiaires nécessaires à l\'attribution des "Method Marks" (M) ?'
    ],
    quickRevisionMemo: 'Cambridge A-Levels : 3 à 4 matières spécialisées en profondeur. Évaluation par Papers (examens écrits et pratiques). Notes de A* à E.',
    certificationNote: 'Référentiel certifié conforme aux Syllabus officiels de Cambridge Assessment International Education (CAIE).'
  },

  // =========================================================================
  // 4. SCIENCES ÉCONOMIQUES & SUPÉRIEUR : MICROÉCONOMIE (OFFRE ET DEMANDE)
  // =========================================================================
  {
    id: 'eco-microeconomie-offre-demande-marche',
    queryKeywords: /\b(?:micro[ée]conomie|microeconomics|offre\s*et\s*demande|supply\s*(?:and|&)\s*demand|market\s*equilibrium|loi\s*de\s*l'offre|prix\s*d'[ée]quilibre|[ée]lasticit[ée]\s*prix|price\s*elasticity|surplus\s*du\s*consommateur|consumer\s*surplus|producer\s*surplus|concurrence\s*pure\s*et\s*parfaite|perfect\s*competition|cpp)\b/i,
    keywords: ['microéconomie', 'microeconomics', 'offre et demande', 'supply and demand', 'marché', 'market equilibrium', 'prix d équilibre', 'equilibrium price', 'élasticité', 'elasticity', 'surplus du consommateur', 'consumer surplus', 'surplus du producteur', 'producer surplus', 'cpp', 'concurrence pure et parfaite', 'perfect competition', 'deadweight loss', 'perte sèche'],
    discipline: 'ses',
    disciplineLabel: 'Sciences Économiques et Sociales (Licence, Prépa & International)',
    cycle: 'superieur_universite',
    level: 'superieur',
    levelLabel: 'Licence 1 Économie-Gestion / CPGE / International',
    curriculumStandard: 'Standards Universitaires Internationaux de Microéconomie (Mankiw, Varian, Krugman)',
    chapterTitle: 'Microéconomie Fondamentale : Théorie de l\'Offre et de la Demande, Équilibre de Marché et Élasticités',
    definitionAndScope: `La microéconomie étudie les choix individuels des agents économiques (consommateurs cherchant à maximiser leur utilité, producteurs cherchant à maximiser leur profit) et la manière dont leurs interactions sur les marchés concurrentiels déterminent les prix relatifs et l'allocation des ressources rares.
Le modèle canonique de l'offre et de la demande dans un marché de concurrence pure et parfaite (CPP) repose sur 5 hypothèses fondamentales :
1. Atomicité des agents (aucun agent ne peut influencer le prix individuellement, ils sont « price takers »)
2. Homogénéité des produits (produits parfaitement substituables)
3. Libre entrée et sortie du marché (absence de barrières à l'entrée)
4. Transparence de l'information (information parfaite, symétrique et gratuite)
5. Mobilité parfaite des facteurs de production (travail et capital).`,
    fullCourseContent: `I. LA FONCTION DE DEMANDE ET LE SURPLUS DU CONSOMMATEUR :
- Loi de la demande : La quantité demandée d'un bien normal est une fonction décroissante de son prix (\\frac{\\partial Q_d}{\\partial P} < 0), sous l'effet de substitution et de l'effet revenu.
- Exceptions : Biens de Giffen (biens inférieurs dont la demande augmente quand le prix monte par effet revenu dominant) et biens de Veblen (biens de luxe dont l'utilité découle du signal de distinction sociale).
- Surplus du consommateur : Différence entre le prix maximal que le consommateur était prêt à payer (prix de réserve) et le prix effectivement payé sur le marché.

II. LA FONCTION D'OFFRE ET LE SURPLUS DU PRODUCTEUR :
- Loi de l'offre : La quantité offerte par les entreprises est une fonction croissante du prix de marché (\\frac{\\partial Q_s}{\\partial P} > 0), car les coûts marginaux de production sont croissants à court terme.
- Surplus du producteur : Différence entre le prix perçu par le producteur et le coût marginal minimal auquel il était prêt à vendre.

III. ÉQUILIBRE DU MARCHÉ ET OPTIMUM DE PARETO :
- L'équilibre concurrentiel (P^*, Q^*) est atteint à l'intersection des courbes d'offre et de demande (Q_d(P^*) = Q_s(P^*)).
- Premier théorème fondamental de l'économie du bien-être : Tout équilibre concurrentiel en CPP est un optimum de Pareto (maximisation de la somme des surplus collectifs : Surplus Total = Surplus Consommateur + Surplus Producteur).

IV. LES ÉLASTICITÉS :
- Élasticité-prix de la demande : Mesure la sensibilité relative de la quantité demandée aux variations de prix.
- Élasticité-revenu : Permet de classifier les biens inférieurs (e_R < 0), normaux (0 \\le e_R \\le 1) et supérieurs/luxe (e_R > 1).
- Élasticité-croisée : Mesure si deux biens sont substituables (e_{xy} > 0) ou complémentaires (e_{xy} < 0).`,
    coreConceptsAndFormulas: [
      {
        name: 'Équilibre de Marché Concurrentiel',
        formula: 'Q_d(P^*) = Q_s(P^*) \\implies P^* \\text{ (Prix d\'équilibre)}, \\ Q^* \\text{ (Quantité d\'équilibre)}',
        explanation: 'Le prix ajuste automatiquement les écarts d\'offre excédentaire (surproduction) ou de demande excédentaire (pénurie).'
      },
      {
        name: 'Élasticité-Prix de la Demande (\\varepsilon_{p})',
        formula: '\\varepsilon_p = \\frac{\\% \\Delta Q_d}{\\% \\Delta P} = \\frac{\\partial Q_d}{\\partial P} \\times \\frac{P}{Q_d}',
        explanation: 'Si |\\varepsilon_p| > 1, la demande est élastique (une hausse de prix fait chuter le chiffre d\'affaires). Si |\\varepsilon_p| < 1, la demande est inélastique ou rigide (biens de première nécessité).'
      },
      {
        name: 'Perte Sèche (Deadweight Loss)',
        formula: '\\text{Perte Sèche} = \\Delta \\text{Surplus Total} < 0 \\quad \\text{induite par une taxe, un quota ou un monopole}',
        explanation: 'Mesure l\'inefficience économique générée par une distorsion de marché qui empêche la réalisation de transactions mutuellement bénéfiques.'
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Calculer l\'Équilibre de Marché et les Surplus',
        procedure: '1. Écrire les équations d\'offre Q_s(P) et de demande Q_d(P).\n2. Poser l\'égalité Q_s(P^*) = Q_d(P^*) et isoler le prix d\'équilibre P^*.\n3. Remplacer P^* dans l\'une des équations pour déduire la quantité d\'équilibre Q^*.\n4. Tracer le graphique avec P en ordonnée et Q en abscisse (diagramme de Marshall).\n5. Calculer le surplus du consommateur comme l\'aire du triangle sous la courbe de demande au-dessus du prix P^* : SC = \\frac{1}{2} \\times (P_{\\max} - P^*) \\times Q^*.\n6. Calculer le surplus du producteur : SP = \\frac{1}{2} \\times (P^* - P_{\\min}) \\times Q^*.',
        tip: 'Attention : Dans les équations économiques, on exprime souvent P en fonction de Q (demande inverse P = a - bQ) pour tracer directement le graphique.'
      }
    ],
    solvedExample: {
      statement: 'Soit la demande d\'un marché donnée par Q_d = 120 - 2P et l\'offre donnée par Q_s = 3P - 30. Déterminez le prix d\'équilibre, la quantité d\'équilibre, puis l\'élasticité-prix de la demande à l\'équilibre.',
      solution: '1. Équilibre : Q_d = Q_s \\iff 120 - 2P = 3P - 30 \\iff 5P = 150 \\iff P^* = 30.\n2. Quantité d\'équilibre : Q^* = 120 - 2(30) = 60.\n3. Élasticité-prix à l\'équilibre : \\frac{dQ_d}{dP} = -2. Donc \\varepsilon_p = -2 \\times \\frac{P^*}{Q^*} = -2 \\times \\frac{30}{60} = -1,0.\n4. Interprétation : À l\'équilibre, l\'élasticité-prix est unitaire. Une augmentation de 1% du prix entraîne une baisse exactement proportionnelle de 1% de la quantité demandée.'
    },
    classicExamTraps: [
      'Inverser l\'axe des prix et l\'axe des quantités : par convention marshallienne, le prix P est toujours sur l\'axe vertical (ordonnées) et la quantité Q sur l\'axe horizontal (abscisses).',
      'Confondre un « déplacement le long de la courbe » (dû à une variation du prix du bien lui-même) et un « déplacement de la courbe » (dû à une variation d\'un paramètre externe comme le revenu, les goûts ou les coûts de production).',
      'Oublier le signe négatif de l\'élasticité-prix de la demande (ou omettre de préciser s\'il s\'agit de la valeur absolue).'
    ],
    selfCheckChecklist: [
      'Mon prix d\'équilibre et ma quantité d\'équilibre sont-ils strictement positifs ?',
      'La pente de ma courbe d\'offre est-elle positive et celle de ma demande négative ?',
      'Le surplus total correspond-il bien à la somme arithmétique SC + SP ?'
    ],
    quickRevisionMemo: 'Microéconomie : Marché CPP (5 hypothèses). Équilibre à Q_d = Q_s. Élasticité-prix e_p = (dQ/dP) * (P/Q). L\'équilibre concurrentiel maximise le surplus social (Optimum de Pareto).',
    certificationNote: 'Conforme aux programmes académiques universitaires de Licence 1 Économie et Gestion et aux épreuves d\'Économie des Prépas ECG/D2.'
  },

  // =========================================================================
  // 5. MATHÉMATIQUES SUPÉRIEURES : ALGÈBRE LINÉAIRE (ESPACES VECTORIELS)
  // =========================================================================
  {
    id: 'maths-sup-algebre-lineaire-espaces-vectoriels',
    queryKeywords: /\b(?:alg[èe]bre\s*lin[ée]aire|espaces?\s*vectoriels?|sous[- ]espaces?\s*vectoriels?|sev|famille\s*(?:libre|g[ée]n[ée]ratrice)|base\s*vectorielle|dimension\s*finie|th[ée]or[èe]me\s*du\s*rang|diagonalisation|valeurs?\s*propres?)\b/i,
    keywords: ['algèbre linéaire', 'espace vectoriel', 'sous-espace vectoriel', 'famille libre', 'base', 'dimension', 'application linéaire', 'théorème du rang', 'noyau', 'image', 'matrice', 'diagonalisation'],
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques Supérieures (CPGE MPSI/PCSI, Licence L1/L2 & International)',
    cycle: 'superieur_universite',
    level: 'superieur',
    levelLabel: 'Classes Préparatoires (MPSI / PCSI) & Université L1/L2',
    curriculumStandard: 'Programme Officiel des Classes Préparatoires aux Grandes Écoles (CPGE) et Licences de Mathématiques',
    chapterTitle: 'Algèbre Linéaire : Espaces Vectoriels, Applications Linéaires, Théorème du Rang et Réduction',
    definitionAndScope: `L'algèbre linéaire constitue le socle fondamental des mathématiques modernes, de la physique théorique (mécanique quantique) et de l'informatique appliquée (intelligence artificielle, traitement du signal, infographie 3D).
Un espace vectoriel sur un corps $\\mathbb{K}$ ($\\mathbb{R}$ ou $\\mathbb{C}$) est un ensemble $E$ muni d'une loi de composition interne $(+)$ conférant à $(E, +)$ une structure de groupe abélien, et d'une loi de composition externe $(\\cdot)$ vérifiant les axiomes de distributivité et d'associativité.
Le cours analyse la structure des sous-espaces vectoriels (SEV), les combinaisons linéaires, les notions d'indépendance linéaire (familles libres), de systèmes générateurs et de bases, la dimension finie, les morphismes (applications linéaires), le théorème du rang et la théorie spectrale (diagonalisation des endomorphismes).`,
    fullCourseContent: `I. SOUS-ESPACES VECTORIELS (SEV) :
- Caractérisation d'un SEV : Soit $F \\subset E$. $F$ est un sous-espace vectoriel de $E$ si et seulement si :
  1. $0_E \\in F$ (F est non vide).
  2. $\\forall (u, v) \\in F^2, \\ \\forall (\\lambda, \\mu) \\in \\mathbb{K}^2, \\ \\lambda u + \\mu v \\in F$ (stabilité par combinaison linéaire).
- Intersection de SEV : L'intersection d'une famille quelconque de SEV de $E$ est un SEV de $E$.
- Somme de SEV : $F + G = \\{u + v \\mid u \\in F, v \\in G\\}$. La somme est directe ($F \\oplus G$) ssi $F \\cap G = \\{0_E\\}$.

II. FAMILLES LIBRES, GÉNÉRATRICES ET BASES :
- Famille libre (vecteurs linéairement indépendants) : $\\sum_{i=1}^n \\lambda_i u_i = 0_E \\implies \\lambda_1 = \\lambda_2 = \\dots = \\lambda_n = 0$.
- Famille génératrice : $\\text{Vect}(u_1, \\dots, u_n) = E$.
- Base : Famille à la fois libre et génératrice. Tout vecteur s'écrit de manière unique comme combinaison linéaire des vecteurs de la base.
- Théorème de la dimension : En dimension finie $n$, toute base de $E$ admet exactement $n$ vecteurs. Toute famille libre de $n$ vecteurs est une base ; toute famille génératrice de $n$ vecteurs est une base.

III. APPLICATIONS LINÉAIRES ET THÉORÈME DU RANG :
- Soit $f \\in \\mathcal{L}(E, F)$ :
  * Noyau : $\\ker(f) = \\{x \\in E \\mid f(x) = 0_F\\}$. $f$ est injective $\\iff \\ker(f) = \\{0_E\\}$.
  * Image : $\\text{Im}(f) = \\{f(x) \\mid x \\in E\\}$. $f$ est surjective $\\iff \\text{Im}(f) = F$.
- Théorème du Rang : Si $E$ est de dimension finie, alors :
  $$\\dim(E) = \\dim(\\ker(f)) + \\text{rg}(f) \\quad \\text{où } \\text{rg}(f) = \\dim(\\text{Im}(f))$$
- Conséquence majeure : Si $\\dim(E) = \\dim(F)$, alors $f$ injective $\\iff f$ surjective $\\iff f$ bijective.

IV. DIAGONALISATION DES ENDOMORPHISMES :
- Soit $u \\in \\mathcal{L}(E)$ : Un scalaire $\\lambda$ est valeur propre de $u$ ssi $\\ker(u - \\lambda \\text{Id}) \\ne \\{0\\} \\iff \\det(A - \\lambda I) = 0$.
- $u$ est diagonalisable ssi son polynôme caractéristique est scindé sur $\\mathbb{K}$ et la multiplicité algébrique de chaque valeur propre est égale à la dimension de son sous-espace propre associé.`,
    coreConceptsAndFormulas: [
      {
        name: 'Théorème du Rang (Rank-Nullity Theorem)',
        formula: '\\dim(E) = \\dim(\\ker(f)) + \\text{rg}(f)',
        explanation: 'Relation fondamentale liant la dimension de l\'espace de départ, la taille du noyau et la dimension de l\'espace image.'
      },
      {
        name: 'Condition de Liberté d\'une Famille',
        formula: '\\sum_{i=1}^p \\lambda_i v_i = 0_E \\implies \\lambda_1 = \\dots = \\lambda_p = 0',
        explanation: 'Aucun vecteur ne peut être exprimé comme combinaison linéaire des autres.'
      },
      {
        name: 'Formule de Grassmann',
        formula: '\\dim(F + G) = \\dim(F) + \\dim(G) - \\dim(F \\cap G)',
        explanation: 'Généralise la formule du cardinal d\'une réunion aux espaces vectoriels.'
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Déterminer une Base et la Dimension du Noyau et de l\'Image d\'une Application Linéaire',
        procedure: '1. Écrire la matrice $A$ de l\'application linéaire $f$ dans les bases canoniques.\n2. Résoudre le système linéaire homogène $A \\cdot X = 0$ par la méthode du pivot de Gauss pour déterminer $\\ker(f)$.\n3. Exprimer le vecteur générique de $\\ker(f)$ en fonction des variables libres pour en extraire une base, d\'où $\\dim(\\ker(f))$.\n4. Appliquer le théorème du rang pour déduire immédiatement le rang : $\\text{rg}(f) = \\dim(E) - \\dim(\\ker(f))$.\n5. Sélectionner les colonnes de la matrice $A$ correspondant aux pivots de la forme échelonnée pour former une base de $\\text{Im}(f)$.',
        tip: 'Toujours vérifier que $\\dim(\\ker(f)) + \\text{rg}(f)$ redonne exactement le nombre de colonnes de la matrice $A$.'
      }
    ],
    solvedExample: {
      statement: 'Soit $f : \\mathbb{R}^3 \\to \\mathbb{R}^3$ définie par $f(x, y, z) = (x + 2y - z, \\ 2x + 4y - 2z, \\ -x - 2y + z)$. Déterminez une base de $\\ker(f)$ et une base de $\\text{Im}(f)$.',
      solution: '1. Noyau : $(x, y, z) \\in \\ker(f) \\iff x + 2y - z = 0$ (les trois équations sont proportionnelles). Donc $z = x + 2y$.\n2. Vecteur générique : $(x, y, x + 2y) = x(1, 0, 1) + y(0, 1, 2)$.\n3. Les vecteurs $u_1 = (1, 0, 1)$ et $u_2 = (0, 1, 2)$ sont non colinéaires et générateurs, donc $((1, 0, 1), (0, 1, 2))$ forme une base de $\\ker(f)$. Ainsi $\\dim(\\ker(f)) = 2$.\n4. Rang : Par le théorème du rang, $\\text{rg}(f) = \\dim(\\mathbb{R}^3) - \\dim(\\ker(f)) = 3 - 2 = 1$.\n5. Image : L\'image est de dimension 1. Une base de $\\text{Im}(f)$ est donnée par le premier vecteur colonne non nul de la matrice : $w = (1, 2, -1)$.'
    },
    classicExamTraps: [
      'Confondre la dimension de l\'espace de départ $\\dim(E)$ et celle de l\'espace d\'arrivée $\\dim(F)$ dans le théorème du rang : la somme $\\dim(\\ker(f)) + \\text{rg}(f)$ vaut toujours $\\dim(E)$, jamais $\\dim(F)$.',
      'Affirmer qu\'une famille est libre simplement parce que ses vecteurs sont deux à deux non colinéaires (la non-colinéarité ne suffit que pour $p=2$ vecteurs, faux dès $p \\ge 3$).',
      'Oublier de vérifier que le vecteur nul appartient au sous-ensemble candidat lors de la vérification d\'un SEV.'
    ],
    selfCheckChecklist: [
      'Ai-je vérifié que le déterminant de la matrice de passage est non nul lors d\'un changement de base ?',
      'Mes vecteurs propres associés à des valeurs propres distinctes sont-ils bien linéairement indépendants ?',
      'La somme des dimensions des sous-espaces propres est-elle égale à $n$ pour conclure à la diagonalisabilité ?'
    ],
    quickRevisionMemo: 'Algèbre linéaire : SEV stable par CL. Famille libre + génératrice = base. Théorème du rang : dim(E) = dim(ker f) + rg(f). Diagonalisation : ker(A - λI).',
    certificationNote: 'Programme officiel des CPGE scientifiques (MPSI/PCSI/MP/PSI) et des Universités de Sciences.'
  },

  // =========================================================================
  // 6. PHYSIQUE SUPÉRIEURE : THERMODYNAMIQUE (1ER ET 2ND PRINCIPES)
  // =========================================================================
  {
    id: 'physique-sup-thermodynamique-principes-cycles',
    queryKeywords: /\b(?:thermodynamique|premier\s*principe|deuxi[èe]me\s*principe|second\s*principe|entropie|enthalpie|cycle\s*de\s*carnot|rendement\s*thermique|chaleur|capacit[ée]\s*thermique)\b/i,
    keywords: ['thermodynamique', 'premier principe', 'deuxième principe', 'entropie', 'enthalpie', 'carnot', 'énergie interne', 'rendement', 'transfert thermique', 'travail', 'gaz parfait'],
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique Fondamentale (CPGE, Licence & International)',
    cycle: 'superieur_universite',
    level: 'superieur',
    levelLabel: 'Classes Préparatoires / Licence L1/L2 Physique',
    curriculumStandard: 'Programme National de Physique de CPGE et Licence Universitaire',
    chapterTitle: 'Thermodynamique Classique : Premier et Deuxième Principes, Fonctions d\'État (U, H, S) et Cycles Moteurs',
    definitionAndScope: `La thermodynamique est la science des transformations de l'énergie et des échanges de chaleur (transfert thermique $Q$) et de travail mécanique ($W$) entre un système macroscopique et le milieu extérieur.
Elle repose sur deux principes universels formulés par Clausius, Carnot, Joule et Kelvin :
1. Le Premier Principe (Principe de conservation de l'énergie) : Introduit l'énergie interne $U$ comme fonction d'état conservative.
2. Le Deuxième Principe (Principe d'évolution et d'irréversibilité) : Introduit l'entropie $S$ comme mesure du désordre microscopique et de la dégradation qualitative de l'énergie lors de processus réels spontanés.
Le cours couvre l'équation d'état des gaz parfaits, les transformations remarquables (isochore, isobare, isotherme, adiabatique réversible selon la loi de Laplace), les bilans enthalpiques et l'efficacité thermodynamique des machines thermiques (moteurs thermiques, réfrigérateurs, pompes à chaleur).`,
    fullCourseContent: `I. PREMIER PRINCIPE DE LA THERMODYNAMIQUE :
- Énoncé : Pour tout système fermé évoluant d'un état 1 à un état 2, la variation de son énergie totale est égale à la somme du travail et du transfert thermique échangés avec l'extérieur :
  $$\\Delta U + \\Delta E_c + \\Delta E_p = W + Q$$
- Pour un système au repos macroscopique : $\\Delta U = W + Q$.
- Travail des forces de pression : $\\delta W = -P_{\\text{ext}} \\, dV$.
- Enthalpie $H = U + PV$ : Pour une transformation monobare ($P = \\text{cste}$), la variation d'enthalpie est égale au transfert thermique reçu : $\\Delta H = Q_P$.

II. DEUXIÈME PRINCIPE ET ENTROPIE :
- Énoncé : Pour tout système fermé, il existe une fonction d'état extensive non conservative appelée entropie $S$, telle que :
  $$\\Delta S = S_{\\text{échangé}} + S_{\\text{créé}} = \\int \\frac{\\delta Q}{T_{\\text{frontière}}} + S_c$$
  avec $S_c \\ge 0$ (le terme de création d'entropie est strictement positif pour toute transformation réelle irréversible, et nul pour une transformation réversible).
- Pour un système isolé ($\\delta Q = 0$) : $\\Delta S = S_c \\ge 0$ (l'entropie d'un système isolé ne peut que croître ou rester constante).

III. MACHINES THERMIQUES ET CYCLE DE CARNOT :
- Théorème de Carnot : Le rendement thermique de tout moteur ditherme fonctionnant entre une source chaude à température $T_c$ et une source froide à $T_f$ est borné par le rendement idéal réversible de Carnot :
  $$\\eta_{\\text{Carnot}} = 1 - \\frac{T_f}{T_c}$$
- Égalité de Clausius pour un cycle réversible : $\\oint \\frac{\\delta Q}{T} = 0 \\iff \\frac{Q_c}{T_c} + \\frac{Q_f}{T_f} = 0$.`,
    coreConceptsAndFormulas: [
      {
        name: 'Premier Principe de la Thermodynamique',
        formula: '\\Delta U = W + Q, \\quad dU = \\delta W + \\delta Q = -P_{\\text{ext}} dV + \\delta Q',
        explanation: 'Conservation de l\'énergie totale. $U$ est une fonction d\'état dont la variation ne dépend pas du chemin suivi.'
      },
      {
        name: 'Deuxième Principe de la Thermodynamique',
        formula: '\\Delta S = \\int \\frac{\\delta Q}{T_{\\text{ext}}} + S_{\\text{créée}}, \\quad S_{\\text{créée}} \\ge 0',
        explanation: 'Indique le sens spontané des transformations et l\'irréversibilité fondamentale des processus naturels.'
      },
      {
        name: 'Rendement de Carnot d\'un Moteur Ditherme',
        formula: '\\eta = \\frac{|W|}{Q_c} \\le 1 - \\frac{T_f}{T_c}',
        explanation: 'Limite physique absolue de conversion de chaleur en travail mécanique imposée par le second principe.'
      },
      {
        name: 'Lois de Laplace (Gaz Parfait, Adiabatique Réversible)',
        formula: 'P V^\\gamma = \\text{cste}, \\quad T V^{\\gamma - 1} = \\text{cste}, \\quad T^\\gamma P^{1-\\gamma} = \\text{cste}',
        explanation: 'Valable pour un gaz parfait subissant une détente ou compression isentropique avec $\\gamma = C_p / C_v$.'
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Résoudre un Problème de Cycle Thermodynamique Moteur',
        procedure: '1. Identifier la nature de chaque transformation du cycle (isotherme, isochore, isobare, adiabatique).\n2. Calculer les variables d\'état $(P, V, T)$ à chaque sommet du cycle à l\'aide de l\'équation des gaz parfaits $PV = nRT$.\n3. Calculer pour chaque étape le travail $W$ et le transfert thermique $Q$ en utilisant les lois appropriées ($dU = C_v dT$, $dH = C_p dT$).\n4. Vérifier que sur l\'ensemble du cycle $\\Delta U_{\\text{cycle}} = W_{\\text{net}} + Q_{\\text{net}} = 0$, donc $W_{\\text{net}} = -Q_{\\text{net}}$.\n5. Identifier la chaleur reçue de la source chaude $Q_c > 0$ et calculer le rendement $\\eta = \\frac{-W_{\\text{net}}}{Q_c}$.\n6. Comparer systématiquement la valeur obtenue au rendement maximal théorique de Carnot $\\eta_C = 1 - \\frac{T_f}{T_c}$.',
        tip: 'Les températures doivent obligatoirement être converties en Kelvins ($T(K) = \\theta(°C) + 273,15$).'
      }
    ],
    solvedExample: {
      statement: 'Une machine thermique ditherme fonctionne réversiblement selon un cycle de Carnot entre une source chaude à 500 °C et une source froide à 20 °C. Calculez son rendement de Carnot. Si le moteur reçoit 10 kJ de la source chaude, déterminez le travail mécanique produit.',
      solution: '1. Conversion en Kelvins : $T_c = 500 + 273,15 = 773,15$ K ; $T_f = 20 + 273,15 = 293,15$ K.\n2. Rendement de Carnot : $\\eta_C = 1 - \\frac{T_f}{T_c} = 1 - \\frac{293,15}{773,15} \\approx 1 - 0,379 = 0,621$, soit 62,1%.\n3. Travail mécanique produit : $|W| = \\eta_C \\times Q_c = 0,621 \\times 10 \\text{ kJ} = 6,21$ kJ.\n4. Chaleur cédée à la source froide : $Q_f = -(Q_c - |W|) = -(10 - 6,21) = -3,79$ kJ.'
    },
    classicExamTraps: [
      'Calculer le rendement de Carnot avec des températures en degrés Celsius au lieu de Kelvins (erreur éliminatoire classique).',
      'Confondre chaleur $Q$ et température $T$ : la température est une variable d\'état intensive, la chaleur est un mode de transfert d\'énergie en transit.',
      'Oublier le signe négatif dans l\'expression du travail des forces de pression : $\\delta W = -P_{\\text{ext}} dV$ (si le volume augmente, le système fournit du travail à l\'extérieur, donc $W < 0$).'
    ],
    selfCheckChecklist: [
      'La variation totale d\'énergie interne sur le cycle complet est-elle strictement nulle (\\Delta U_{cycle} = 0) ?',
      'Le rendement calculé est-il strictement inférieur à 1 et conforme à la borne de Carnot (\\eta \\le \\eta_C) ?',
      'L\'entropie créée $S_c$ est-elle positive ou nulle lors de chaque transformation ?'
    ],
    quickRevisionMemo: 'Thermodynamique : 1er principe ΔU = W + Q (conservation). 2nd principe ΔS = Séch + Sc avec Sc ≥ 0 (irréversibilité). Moteur de Carnot : η = 1 - Tf/Tc.',
    certificationNote: 'Conforme aux programmes de physique de CPGE (MPSI, PCSI, PTSI, BCPST) et Licences de Sciences Physiques.'
  },

  // =========================================================================
  // 7. GÉOPOLITIQUE & RELATIONS INTERNATIONALES : MONDIALISATION & GOUVERNANCE
  // =========================================================================
  {
    id: 'geopolitique-mondialisation-institutions-internationales',
    // Note : "onu" retiré du déclenchement immédiat (queryKeywords) — un cours dédié et plus
    // précis existe pour l'ONU dans le référentiel officiel ivoirien (BEPC/BAC), qui doit
    // toujours être trouvé en priorité pour une requête sur l'ONU. "onu" reste dans les
    // mots-clés de scoring ci-dessous pour continuer à valoriser cette fiche quand la requête
    // porte véritablement sur la mondialisation/gouvernance mondiale et mentionne l'ONU au passage.
    queryKeywords: /\b(?:mondialisation|globalisation|gouvernance\s*mondiale|institutions?\s*internationales?|fmi|banque\s*mondiale|omc|triade|brics|relations\s*internationales)\b/i,
    keywords: ['mondialisation', 'gouvernance mondiale', 'fmi', 'banque mondiale', 'omc', 'onu', 'triade', 'brics', 'géopolitique', 'relations internationales', 'multilatéralisme', 'droit international'],
    discipline: 'geographie',
    disciplineLabel: 'Géopolitique & Relations Internationales (Supérieur & Bac)',
    cycle: 'superieur_universite',
    level: 'superieur',
    levelLabel: 'Sciences Po / CPGE HEC / Licence & Terminale HGGSP',
    curriculumStandard: 'Standards Académiques Internationaux de Relations Internationales & Géopolitique',
    chapterTitle: 'Mondialisation et Gouvernance Mondiale : Acteurs, Flux, Tensions Géopolitiques et Crise du Multilatéralisme',
    definitionAndScope: `La mondialisation est le processus géoéconomique et géopolitique d'interconnexion croissante des territoires, des économies et des sociétés à l'échelle planétaire, caractérisé par l'accélération et l'intensification des flux (marchandises, capitaux financiers, informations et personnes).
Née des accords de Bretton Woods (1944) et amplifiée par la chute du mur de Berlin (1989), la mondialisation contemporaine est marquée par :
1. Les acteurs institutionnels multilatéraux : Organisation des Nations Unies (ONU), Fonds Monétaire International (FMI), Banque Mondiale, Organisation Mondiale du Commerce (OMC).
2. Les firmes transnationales (FTN) et les marchés financiers mondialisés.
3. Une recomposition spatiale polycentrique : transition de la domination historique de la Triade (États-Unis, Union Européenne, Japon) vers l'affirmation des puissances émergentes (Chine, Inde, BRICS+) et la fragmentation du Sud Global.`,
    fullCourseContent: `I. LES FONDEMENTS DE LA MONDIALISATION CONTEMPORAINE :
- Révolution des transports et des communications : Conteneurisation maritime (Malcom McLean), baisse drastique des coûts du fret, câbles sous-marins et internet instantané.
- Libéralisation financière et commerciale : Consensus de Washington, dérégulation financière (« les 3D » de Bourguinat : Désintermédiation, Décloisonnement, Déréglementation) et abaissement des droits de douane sous l'égide du GATT puis de l'OMC (créée en 1995).

II. ACTEURS ET HIÉRARCHIE DE L'ESPACE MONDIALISÉ :
- Les métropoles globales (Global Cities selon Saskia Sassen) : New York, Londres, Tokyo, Paris, Singapour, concentrant les fonctions de commandement économique, financier et culturel.
- Les Firmes Transnationales (FTN) : Maîtresses de la Division Internationale du Travail (DIT) et des chaînes de valeur mondiales fragmentées.
- Les États-Nations : Tiraillés entre le rôle régalien de régulation territoriale et la concurrence fiscale pour attirer les investissements directs étrangers (IDE).

III. LES DÉFIS ET LA CRISE DU MULTILATÉRALISME :
- Crise des institutions de Bretton Woods : Blocage de l'organe de règlement des différends (ORD) de l'OMC, sous-représentation des pays du Sud au FMI et au Conseil de Sécurité de l'ONU.
- Affirmation du Sud Global et des BRICS+ : Création d'institutions alternatives (Nouvelle Banque de Développement, dédollarisation partielle des échanges commerciaux, routes de la soie chinoises BRI).
- Retours du protectionnisme et rivalités de superpuissances : Guerre commerciale et technologique États-Unis / Chine (semi-conducteurs, intelligence artificielle, transition énergétique).
- Inégalités sociospatiales : Enrichissement spectaculaire des classes moyennes asiatiques et des très hauts revenus mondiaux (« courbe de l'éléphant » de Branko Milanović), précarisation des classes ouvrières occidentales et marginalisation des PMA.`,
    coreConceptsAndFormulas: [
      {
        name: 'Division Internationale des Processus Productifs (DIPP)',
        formula: '\\text{DIPP} = \\text{Fragmentation spatiale des étapes de fabrication selon les avantages comparatifs territoriaux}',
        explanation: 'Conception (R&D à forte valeur ajoutée dans les pays développés), fabrication des composants (usines spécialisées), assemblage (pays à bas coûts de main-d\'œuvre).'
      },
      {
        name: 'Courbe de l\'Éléphant de Milanović',
        formula: '\\Delta \\text{Revenu Réel} = f(\\text{Centile de Revenu Mondial})',
        explanation: 'Visualise les grands gagnants de la mondialisation (classes moyennes émergentes d\'Asie et les 1% les plus riches du monde) et les perdants relatifs (classes moyennes inférieures des pays développés).'
      }
    ],
    stepByStepMethod: [
      {
        stepNumber: 1,
        title: 'Construire une Dissertation Géopolitique de Relations Internationales',
        procedure: '1. Définir précisément les concepts géographiques et géopolitiques du sujet.\n2. Contextualiser l\'émergence de la question (post-Guerre froide, multipolarité, tensions actuelles).\n3. Élaborer une problématique montrant la tension fondamentale (ex: entre intégration économique globale et fragmentation géopolitique nationale).\n4. Développer un plan équilibré en 3 axes (I. Les moteurs de l\'intégration ; II. Les fractures et déséquilibres créés ; III. Vers une gouvernance multipolaire renouvelée).\n5. Fournir des exemples précis, cartographiables et chiffrés pour chaque argument.',
        tip: 'Toujours intégrer une réflexion sur les échelles spatiales (locale, nationale, régionale, mondiale).'
      }
    ],
    solvedExample: {
      statement: 'Analysez en quoi la crise de l\'Organisation Mondiale du Commerce (OMC) illustre les mutations de la géopolitique mondiale contemporaine.',
      solution: '1. Présentation de l\'OMC : Fondée en 1995 (accords de Marrakech) pour succéder au GATT, l\'OMC incarnait le triomphe du multilatéralisme libéral et du libre-échange régulé par le droit, notamment via son Organe de Règlement des Différends (ORD).\n2. Les mécanismes du blocage : Depuis 2019, les États-Unis bloquent le renouvellement des juges de l\'ORD, paralysant la cour d\'appel. L\'OMC est incapable de conclure les cycles de négociation multilatéraux (échec du cycle de Doha).\n3. Signification géopolitique : (a) Passage d\'un multilatéralisme universaliste à un bilatéralisme de rapport de force brut ; (b) Rivalité hégémonique sino-américaine (les USA reprochant à l\'OMC de ne pas sanctionner le capitalisme d\'État et les subventions industrielles chinoises) ; (c) Prolifération des accords régionaux préférentiels (RCEP, USMCA) qui fragmentent l\'espace géoéconomique mondial.'
    },
    classicExamTraps: [
      'Réduire la mondialisation au seul aspect commercial en oubliant les dimensions culturelles, financières, numériques et géostratégiques.',
      'Parler des BRICS comme d\'un bloc homogène : il existe de profondes divergences géopolitiques internes (rivalité frontalière Chine-Inde, régimes politiques distincts).',
      'Confondre démondialisation (recul généralisé des flux mondiaux) et régionalisation ou réorganisation stratégique des chaînes de valeur (nearshoring, friendshoring).'
    ],
    selfCheckChecklist: [
      'Ai-je mobilisé les auteurs et théories clés (Saskia Sassen, Branko Milanović, Robert Keohane, Joseph Nye) ?',
      'Mes exemples couvrent-ils à la fois les puissances traditionnelles (USA, UE) et les pays émergents (Chine, Inde) ?',
      'Ai-je proposé une typologie claire des acteurs (États, FTN, ONG, institutions multilatérales) ?'
    ],
    quickRevisionMemo: 'Mondialisation : Flux mondiaux accrus (conteneurisation, télécoms, libre-échange). Crise du multilatéralisme (blocage OMC/ONU) et montée du Sud Global (BRICS+).',
    certificationNote: 'Conforme aux programmes de Géopolitique des Classes Préparatoires ECG, Sciences Po et Concours d\'Enseignement.'
  }
];

/**
 * Recherche dans la base de savoirs internationaux et supérieurs
 */
export function findInternationalCourse(query: string): CourseSearchResult | null {
  const qClean = (query || "").trim();
  if (!qClean) return null;

  for (const course of INTERNATIONAL_COURSES_BASE) {
    if (course.queryKeywords.test(qClean)) {
      return {
        query: qClean,
        discipline: course.discipline,
        disciplineLabel: course.disciplineLabel,
        cycle: course.cycle,
        level: course.level,
        levelLabel: course.levelLabel,
        curriculumStandard: course.curriculumStandard,
        chapterTitle: course.chapterTitle,
        definitionAndScope: course.definitionAndScope,
        fullCourseContent: course.fullCourseContent,
        coreConceptsAndFormulas: course.coreConceptsAndFormulas,
        stepByStepMethod: course.stepByStepMethod,
        solvedExample: course.solvedExample,
        classicExamTraps: course.classicExamTraps,
        selfCheckChecklist: course.selfCheckChecklist,
        quickRevisionMemo: course.quickRevisionMemo,
        certificationNote: course.certificationNote,
        isInternational: true
      };
    }
  }

  // Recherche scoring par pertinence des mots-clés et expressions
  const qNorm = qClean.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let bestMatch: InternationalCourseDefinition | null = null;
  let maxScore = 0;

  for (const course of INTERNATIONAL_COURSES_BASE) {
    let score = 0;
    if (course.queryKeywords.test(qClean)) {
      score += 100;
    }

    for (const kw of course.keywords) {
      const kwNorm = kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (kwNorm.includes(' ')) {
        if (qNorm.includes(kwNorm)) {
          score += 20 * kwNorm.split(/\s+/).length;
        }
      } else {
        const escaped = kwNorm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        if (new RegExp(`\\b${escaped}\\b`, 'i').test(qNorm)) {
          score += 10 + kwNorm.length;
        }
      }
    }

    if (score > maxScore) {
      maxScore = score;
      bestMatch = course;
    }
  }

  if (bestMatch && maxScore >= 20) {
    return {
      query: qClean,
      discipline: bestMatch.discipline,
      disciplineLabel: bestMatch.disciplineLabel,
      cycle: bestMatch.cycle,
      level: bestMatch.level,
      levelLabel: bestMatch.levelLabel,
      curriculumStandard: bestMatch.curriculumStandard,
      chapterTitle: bestMatch.chapterTitle,
      definitionAndScope: bestMatch.definitionAndScope,
      fullCourseContent: bestMatch.fullCourseContent,
      coreConceptsAndFormulas: bestMatch.coreConceptsAndFormulas.map(c => ({
        name: c.name,
        formulaOrRule: c.formulaOrRule || c.formula || '',
        explanation: c.explanation || '',
        contextOrApplication: c.contextOrApplication || ''
      })),
      stepByStepMethod: bestMatch.stepByStepMethod.map(s => ({
        stepNumber: s.stepNumber,
        title: s.title,
        whatToDo: s.whatToDo || s.procedure || '',
        reflexOrTip: s.reflexOrTip || s.tip || ''
      })),
      solvedExample: {
        problemStatement: bestMatch.solvedExample.problemStatement || bestMatch.solvedExample.statement || '',
        solutionStepByStep: bestMatch.solvedExample.solutionStepByStep || bestMatch.solvedExample.solution || '',
        finalAnswer: bestMatch.solvedExample.finalAnswer || ''
      },
      classicExamTraps: bestMatch.classicExamTraps,
      selfCheckChecklist: bestMatch.selfCheckChecklist,
      quickRevisionMemo: bestMatch.quickRevisionMemo,
      certificationNote: bestMatch.certificationNote,
      isInternational: true
    };
  }

  return null;
}
