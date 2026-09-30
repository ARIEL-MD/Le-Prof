export interface EducationCountryConfig {
  id: string;
  name: string;
  flag: string;
  phoneCode: string;
  educationSystem: string;
  curriculumAuthority: string;
  defaultGrades: string[];
  seriesByGrade: Record<string, { id: string; label: string; description: string }[]>;
  methodologyNotes: string;
}

export const EDUCATION_COUNTRIES: EducationCountryConfig[] = [
  {
    id: 'CI',
    name: "Côte d'Ivoire",
    flag: '🇨🇮',
    phoneCode: '+225',
    educationSystem: 'Programme National Ivoirien',
    curriculumAuthority: 'Ministère de l’Éducation Nationale et de l’Alphabétisation (MENA / DPFC / DECO)',
    defaultGrades: ['6e', '5e', '4e', '3e', '2nde', '1ere', 'Terminale', 'Supérieur'],
    seriesByGrade: {
      'Terminale': [
        { id: 'tle_d', label: 'Terminale D', description: 'Sciences de la Vie et de la Terre & Mathématiques' },
        { id: 'tle_c', label: 'Terminale C', description: 'Mathématiques pures & Sciences Physiques' },
        { id: 'tle_a1', label: 'Terminale A1', description: 'Lettres, Langues & Mathématiques' },
        { id: 'tle_a2', label: 'Terminale A2', description: 'Lettres, Philosophie & Sciences Humaines' },
        { id: 'tle_e', label: 'Terminale E', description: 'Mathématiques & Technique' },
      ],
      '1ere': [
        { id: '1ere_d', label: '1ère D', description: 'Sciences Expérimentales' },
        { id: '1ere_c', label: '1ère C', description: 'Mathématiques & Sciences Physiques' },
        { id: '1ere_a', label: '1ère A', description: 'Littéraire & Sciences Humaines' },
      ],
      '2nde': [
        { id: '2nde_c', label: '2nde C', description: 'Scientifique' },
        { id: '2nde_a', label: '2nde A', description: 'Littéraire' },
      ],
      '3e': [
        { id: '3e_bepc', label: 'Classe de 3e (BEPC)', description: 'Examen du Brevet d’Études du Premier Cycle' },
      ]
    },
    methodologyNotes: 'APC (Approche Par les Compétences), situations d’évaluation, dissertation littéraire/philo en 2 ou 3 axes sans synthèse forcée, barèmes DECO.'
  },
  {
    id: 'SN',
    name: 'Sénégal',
    flag: '🇸🇳',
    phoneCode: '+221',
    educationSystem: 'Baccalauréat & BFEM Sénégalais',
    curriculumAuthority: 'Ministère de l’Éducation Nationale du Sénégal (Office du Baccalauréat)',
    defaultGrades: ['6e', '5e', '4e', '3e', '2nde', '1ere', 'Terminale', 'Supérieur'],
    seriesByGrade: {
      'Terminale': [
        { id: 'sn_s2', label: 'Terminale S2', description: 'Sciences Expérimentales (SVT, PC, Maths)' },
        { id: 'sn_s1', label: 'Terminale S1', description: 'Sciences Exactes (Maths & Sciences Physiques renforcées)' },
        { id: 'sn_s3', label: 'Terminale S3', description: 'Sciences & Techniques Industrielles' },
        { id: 'sn_l2', label: 'Terminale L2', description: 'Lettres & Sciences Humaines' },
        { id: 'sn_l1', label: 'Terminale L1', description: 'Lettres & Langues Classiques / Vivantes' },
        { id: 'sn_g', label: 'Terminale G', description: 'Sciences Économiques et Gestion' },
      ],
      '1ere': [
        { id: 'sn_1s', label: '1ère S', description: 'Première Scientifique' },
        { id: 'sn_1l', label: '1ère L', description: 'Première Littéraire' },
      ],
      '2nde': [
        { id: 'sn_2s', label: 'Seconde S', description: 'Seconde Scientifique' },
        { id: 'sn_2l', label: 'Seconde L', description: 'Seconde Littéraire' },
      ],
      '3e': [
        { id: 'sn_bfem', label: 'Classe de 3e (BFEM)', description: 'Brevet de Fin d’Études Moyennes' }
      ]
    },
    methodologyNotes: 'Excellence oratoire et littéraire, dissertation philosophique rigoureuse, commentaire composé, démonstrations mathématiques formelles.'
  },
  {
    id: 'CM',
    name: 'Cameroun',
    flag: '🇨🇲',
    phoneCode: '+237',
    educationSystem: 'Office du Baccalauréat du Cameroun (OBC)',
    curriculumAuthority: 'Ministère des Enseignements Secondaires (MINESEC / OBC)',
    defaultGrades: ['6e', '5e', '4e', '3e', '2nde', '1ere', 'Terminale', 'Supérieur'],
    seriesByGrade: {
      'Terminale': [
        { id: 'cm_c', label: 'Terminale C', description: 'Mathématiques & Sciences Physiques' },
        { id: 'cm_d', label: 'Terminale D', description: 'Sciences de la Nature et de la Vie' },
        { id: 'cm_a', label: 'Terminale A', description: 'Lettres & Philosophie (A4 Espagnol / Allemand)' },
        { id: 'cm_ti', label: 'Terminale TI', description: 'Technologies de l’Information' },
      ],
      '1ere': [
        { id: 'cm_probatoire', label: 'Classe de 1ère (Probatoire C/D/A)', description: 'Examen officiel du Probatoire' }
      ],
      '3e': [
        { id: 'cm_bepc', label: 'Classe de 3e (BEPC Camerounais)', description: 'Brevet d’Études du Premier Cycle' }
      ]
    },
    methodologyNotes: 'Système à deux examens probatoires et baccalauréat, rigueur analytique, commentaire composé et dissertation philosophique canonique.'
  },
  {
    id: 'BF',
    name: 'Burkina Faso',
    flag: '🇧🇫',
    phoneCode: '+226',
    educationSystem: 'Baccalauréat & BEPC Burkinabè',
    curriculumAuthority: 'Ministère de l’Éducation Nationale, de l’Alphabétisation et de la Promotion des Langues Nationales (MENAPLN / DGEC)',
    defaultGrades: ['6e', '5e', '4e', '3e', '2nde', '1ere', 'Terminale', 'Supérieur'],
    seriesByGrade: {
      'Terminale': [
        { id: 'bf_d', label: 'Terminale D', description: 'Sciences Biologiques et Géologiques & Maths' },
        { id: 'bf_c', label: 'Terminale C', description: 'Mathématiques & Sciences Physiques' },
        { id: 'bf_a4', label: 'Terminale A4', description: 'Lettres, Philosophie et Langues' },
        { id: 'bf_g2', label: 'Terminale G2', description: 'Comptabilité et Gestion' },
      ],
      '3e': [
        { id: 'bf_bepc', label: 'Classe de 3e (BEPC Burkinabè)', description: 'Brevet d’Études du Premier Cycle' }
      ]
    },
    methodologyNotes: 'Programmes nationaux du Burkina Faso, dissertations littéraires rigoureuses, épreuves scientifiques conformes à la DGEC.'
  },
  {
    id: 'GA',
    name: 'Gabon',
    flag: '🇬🇦',
    phoneCode: '+241',
    educationSystem: 'Baccalauréat & BEPC Gabonais',
    curriculumAuthority: 'Ministère de l’Éducation Nationale du Gabon / Direction Générale des Examens et Concours (DGEC)',
    defaultGrades: ['6e', '5e', '4e', '3e', '2nde', '1ere', 'Terminale', 'Supérieur'],
    seriesByGrade: {
      'Terminale': [
        { id: 'ga_c', label: 'Terminale C', description: 'Mathématiques & Sciences Physiques' },
        { id: 'ga_d', label: 'Terminale D', description: 'Sciences de la Vie et de la Terre' },
        { id: 'ga_a1', label: 'Terminale A1', description: 'Lettres, Philosophie et Langues' },
        { id: 'ga_b', label: 'Terminale B', description: 'Sciences Économiques' },
      ],
      '3e': [
        { id: 'ga_bepc', label: 'Classe de 3e (BEPC Gabon)', description: 'Brevet d’Études du Premier Cycle' }
      ]
    },
    methodologyNotes: 'Curriculum officiel gabonais, dissertations littéraires et philosophiques selon les barèmes de la DGEC.'
  },
  {
    id: 'BJ',
    name: 'Bénin',
    flag: '🇧🇯',
    phoneCode: '+229',
    educationSystem: 'Baccalauréat & BEPC Béninois',
    curriculumAuthority: 'Ministère des Enseignements Secondaire, Technique et de la Formation Professionnelle (MESTFP / DOB)',
    defaultGrades: ['6e', '5e', '4e', '3e', '2nde', '1ere', 'Terminale', 'Supérieur'],
    seriesByGrade: {
      'Terminale': [
        { id: 'bj_c', label: 'Terminale C', description: 'Mathématiques & Sciences Physiques' },
        { id: 'bj_d', label: 'Terminale D', description: 'Sciences Biologiques et Géologiques' },
        { id: 'bj_a1', label: 'Terminale A1', description: 'Lettres et Philosophie' },
        { id: 'bj_a2', label: 'Terminale A2', description: 'Lettres et Sciences Humaines' },
        { id: 'bj_b', label: 'Terminale B', description: 'Économie et Gestion' },
      ],
      '3e': [
        { id: 'bj_bepc', label: 'Classe de 3e (BEPC Bénin)', description: 'Brevet d’Études du Premier Cycle' }
      ]
    },
    methodologyNotes: 'Système béninois, rigueur mathématique et démonstrations complètes, dissertation méthodique.'
  },
  {
    id: 'TG',
    name: 'Togo',
    flag: '🇹🇬',
    phoneCode: '+228',
    educationSystem: 'Baccalauréat & BEPC Togolais',
    curriculumAuthority: 'Ministère des Enseignements Primaire, Secondaire et Technique (DEXC)',
    defaultGrades: ['6e', '5e', '4e', '3e', '2nde', '1ere', 'Terminale', 'Supérieur'],
    seriesByGrade: {
      'Terminale': [
        { id: 'tg_c', label: 'Terminale C', description: 'Mathématiques et Sciences Physiques' },
        { id: 'tg_d', label: 'Terminale D', description: 'Sciences de la Nature et de la Vie' },
        { id: 'tg_a4', label: 'Terminale A4', description: 'Lettres et Philosophie' },
      ],
      '1ere': [
        { id: 'tg_bac1', label: 'Classe de 1ère (BAC 1)', description: 'Baccalauréat 1ère Partie' }
      ],
      '3e': [
        { id: 'tg_bepc', label: 'Classe de 3e (BEPC Togo)', description: 'Brevet d’Études du Premier Cycle' }
      ]
    },
    methodologyNotes: 'Double niveau de baccalauréat (BAC 1 et BAC 2), rigueur des démonstrations et maîtrise des concepts fondamentaux.'
  },
  {
    id: 'ML',
    name: 'Mali',
    flag: '🇲🇱',
    phoneCode: '+223',
    educationSystem: 'Baccalauréat & DEF Malien',
    curriculumAuthority: 'Ministère de l’Éducation Nationale du Mali (CNECE)',
    defaultGrades: ['7e-9e (Fondamental)', '10e', '11e', '12e (Terminale)', 'Supérieur'],
    seriesByGrade: {
      '12e (Terminale)': [
        { id: 'ml_tse', label: 'Terminale Sciences Exactes (TSE)', description: 'Mathématiques et Sciences Physiques' },
        { id: 'ml_tsexp', label: 'Terminale Sciences Expérimentales (TSExp)', description: 'Sciences Biologiques et Physiques' },
        { id: 'ml_tss', label: 'Terminale Sciences Sociales (TSS)', description: 'Histoire, Géographie, Philosophie et Économie' },
        { id: 'ml_tal', label: 'Terminale Arts et Lettres (TAL)', description: 'Littérature, Langues et Philosophie' },
        { id: 'ml_tco', label: 'Terminale Sciences Économiques (TCO)', description: 'Comptabilité et Gestion' },
      ],
      '7e-9e (Fondamental)': [
        { id: 'ml_def', label: 'Classe de 9e (DEF)', description: 'Diplôme d’Études Fondamentales' }
      ]
    },
    methodologyNotes: 'Programmes du Mali, structure 10e, 11e, 12e année, dissertations et épreuves scientifiques conformes au CNECE.'
  },
  {
    id: 'GN',
    name: 'Guinée (Conakry)',
    flag: '🇬🇳',
    phoneCode: '+224',
    educationSystem: 'Baccalauréat Unique & BEPC Guinéen',
    curriculumAuthority: 'Ministère de l’Enseignement Pré-Universitaire et de l’Alphabétisation (MEPU-A / INRAP)',
    defaultGrades: ['7e-10e (Collège)', '11e', '12e', 'Terminale', 'Supérieur'],
    seriesByGrade: {
      'Terminale': [
        { id: 'gn_sm', label: 'Sciences Mathématiques (SM)', description: 'Mathématiques et Sciences Physiques approfondies' },
        { id: 'gn_se', label: 'Sciences Expérimentales (SE)', description: 'Biologie, Chimie et Géologie' },
        { id: 'gn_ss', label: 'Sciences Sociales (SS)', description: 'Philosophie, Histoire-Géo, Français et Économie' },
      ],
      '7e-10e (Collège)': [
        { id: 'gn_bepc', label: 'Classe de 10e (BEPC Guinée)', description: 'Brevet de Fin d’Études du Premier Cycle' }
      ]
    },
    methodologyNotes: 'Baccalauréat Unique de Guinée, respect des trois profils (SM, SE, SS), barèmes stricts du MEPU-A.'
  },
  {
    id: 'CG',
    name: 'Congo (Brazzaville)',
    flag: '🇨🇬',
    phoneCode: '+242',
    educationSystem: 'Baccalauréat & BEPC Congolais',
    curriculumAuthority: 'Ministère de l’Enseignement Préscolaire, Primaire, Secondaire et de l’Alphabétisation (DEC)',
    defaultGrades: ['6e', '5e', '4e', '3e', '2nde', '1ere', 'Terminale', 'Supérieur'],
    seriesByGrade: {
      'Terminale': [
        { id: 'cg_c', label: 'Terminale C', description: 'Mathématiques et Sciences Physiques' },
        { id: 'cg_d', label: 'Terminale D', description: 'Sciences Naturelles et Mathématiques' },
        { id: 'cg_a', label: 'Terminale A', description: 'Lettres et Sciences Humaines' },
        { id: 'cg_bg', label: 'Terminale BG', description: 'Bureautique et Gestion' },
      ],
      '3e': [
        { id: 'cg_bepc', label: 'Classe de 3e (BEPC Congo)', description: 'Brevet d’Études du Premier Cycle' }
      ]
    },
    methodologyNotes: 'Programmes nationaux de la République du Congo, épreuves de la DEC.'
  },
  {
    id: 'CD',
    name: 'RD Congo (Kinshasa)',
    flag: '🇨🇩',
    phoneCode: '+243',
    educationSystem: 'Examen d’État (EXETAT) & TENASOSP',
    curriculumAuthority: 'Ministère de l’Enseignement Primaire, Secondaire et Technique (EPST)',
    defaultGrades: ['7e-8e Éducation de Base', '1ère-2ème Humanités', '3ème-4ème Humanités (Terminale)', 'Supérieur'],
    seriesByGrade: {
      '3ème-4ème Humanités (Terminale)': [
        { id: 'cd_scientifique', label: 'Humanités Scientifiques (Bio-Chimie / Math-Physique)', description: 'Option Math-Physique ou Biologie-Chimie' },
        { id: 'cd_litteraire', label: 'Humanités Littéraires (Latin-Philo)', description: 'Option Latin-Philosophie et Lettres modernes' },
        { id: 'cd_commerciale', label: 'Humanités Commerciales et Gestion', description: 'Option Commerciale et Administrative' },
        { id: 'cd_pedagogie', label: 'Humanités Pédagogiques', description: 'Pédagogie générale et psychologie' },
      ]
    },
    methodologyNotes: 'Normes de l’Examen d’État (EXETAT), items QCM et épreuves écrites traditionnelles, programmes de l’EPST.'
  },
  {
    id: 'TD',
    name: 'Tchad',
    flag: '🇹🇩',
    phoneCode: '+235',
    educationSystem: 'Baccalauréat & BEF Tchadien',
    curriculumAuthority: 'Ministère de l’Éducation Nationale / Office National des Examens et Concours du Supérieur (ONECS)',
    defaultGrades: ['6e', '5e', '4e', '3e', '2nde', '1ere', 'Terminale', 'Supérieur'],
    seriesByGrade: {
      'Terminale': [
        { id: 'td_c', label: 'Terminale C', description: 'Mathématiques et Sciences Physiques' },
        { id: 'td_d', label: 'Terminale D', description: 'Sciences de la Vie et de la Terre' },
        { id: 'td_a4', label: 'Terminale A4', description: 'Lettres et Philosophie' },
      ],
      '3e': [
        { id: 'td_bef', label: 'Classe de 3e (BEF)', description: 'Brevet d’Études Fondamentales' }
      ]
    },
    methodologyNotes: 'Épreuves du baccalauréat tchadien sous l’ONECS, rigueur conceptuelle et dissertations de référence.'
  },
  {
    id: 'NE',
    name: 'Niger',
    flag: '🇳🇪',
    phoneCode: '+227',
    educationSystem: 'Baccalauréat & BEPC Nigérien',
    curriculumAuthority: 'Ministère de l’Éducation Nationale / Office du Baccalauréat du Niger (OBN)',
    defaultGrades: ['6e', '5e', '4e', '3e', '2nde', '1ere', 'Terminale', 'Supérieur'],
    seriesByGrade: {
      'Terminale': [
        { id: 'ne_c', label: 'Terminale C', description: 'Mathématiques et Sciences Physiques' },
        { id: 'ne_d', label: 'Terminale D', description: 'Sciences Naturelles' },
        { id: 'ne_a', label: 'Terminale A', description: 'Lettres et Sciences Humaines' },
      ],
      '3e': [
        { id: 'ne_bepc', label: 'Classe de 3e (BEPC Niger)', description: 'Brevet d’Études du Premier Cycle' }
      ]
    },
    methodologyNotes: 'Standards de l’Office du Baccalauréat du Niger (OBN), respect des programmes harmonisés.'
  },
  {
    id: 'FR',
    name: 'France & Lycées Français (AEFE)',
    flag: '🇫🇷',
    phoneCode: '+33',
    educationSystem: 'Baccalauréat Général & Technologique',
    curriculumAuthority: 'Ministère de l’Éducation Nationale et de la Jeunesse / Réseau AEFE Monde',
    defaultGrades: ['6e', '5e', '4e', '3e', '2nde', '1ere', 'Terminale', 'Supérieur'],
    seriesByGrade: {
      'Terminale': [
        { id: 'fr_gen_maths_pc', label: 'Spécialités Maths + Physique-Chimie', description: 'Voie générale scientifique' },
        { id: 'fr_gen_maths_svt', label: 'Spécialités Maths + SVT', description: 'Voie générale biomédicale et environnement' },
        { id: 'fr_gen_pc_svt', label: 'Spécialités Physique-Chimie + SVT', description: 'Sciences expérimentales' },
        { id: 'fr_gen_ses_hggsp', label: 'Spécialités SES + HGGSP', description: 'Sciences économiques et politiques' },
        { id: 'fr_gen_hlp_philo', label: 'Spécialités HLP + Philosophie', description: 'Humanités, Littérature et Philosophie' },
      ],
      '3e': [
        { id: 'fr_dnb', label: 'Classe de 3e (Brevet DNB)', description: 'Diplôme National du Brevet' }
      ]
    },
    methodologyNotes: 'Épreuves terminales du Baccalauréat général, dissertation littéraire/philo en 3 ou 2 parties, Grand Oral, épreuves de spécialités.'
  },
  {
    id: 'MAGHREB',
    name: 'Maroc, Algérie, Tunisie',
    flag: '🇲🇦',
    phoneCode: '+212',
    educationSystem: 'Baccalauréat & Enseignement Secondaire du Maghreb',
    curriculumAuthority: 'Ministères de l’Éducation Nationale (Maroc, Tunisie, Algérie)',
    defaultGrades: ['Collège', 'Tronc Commun', '1ère Année Bac', '2ème Année Bac (Terminale)', 'Supérieur'],
    seriesByGrade: {
      '2ème Année Bac (Terminale)': [
        { id: 'maghreb_sm', label: 'Sciences Mathématiques (A / B)', description: 'Filière d’excellence en mathématiques' },
        { id: 'maghreb_pc', label: 'Sciences Physiques (PC)', description: 'Sciences expérimentales physiques et chimiques' },
        { id: 'maghreb_svt', label: 'Sciences de la Vie et de la Terre (SVT)', description: 'Sciences biologiques' },
        { id: 'maghreb_eco', label: 'Sciences Économiques et Gestion', description: 'Économie, compta et droit' },
        { id: 'maghreb_lettres', label: 'Lettres & Sciences Humaines', description: 'Littérature, philosophie et langues' }
      ]
    },
    methodologyNotes: 'Épreuves nationales du baccalauréat, sections internationales (BIOF), rigueur formelle poussée.'
  },
  {
    id: 'IB',
    name: 'Baccalauréat International (IB Diploma)',
    flag: '🌐',
    phoneCode: '+1',
    educationSystem: 'International Baccalaureate Organisation (IBO)',
    curriculumAuthority: 'IB Curriculum and Assessment Centre (Cardiff / Genève)',
    defaultGrades: ['MYP (Collège)', 'IB DP 1ère Année (Year 1)', 'IB DP 2ème Année (Year 2 / Terminale)'],
    seriesByGrade: {
      'IB DP 2ème Année (Year 2 / Terminale)': [
        { id: 'ib_math_aa_hl', label: 'Math AA HL (Analysis & Approaches)', description: 'Mathématiques pures, calcul infinitésimal, algèbre et démonstrations approfondies (Higher Level)' },
        { id: 'ib_math_aa_sl', label: 'Math AA SL (Analysis & Approaches)', description: 'Analyse et approches mathématiques standard (Standard Level)' },
        { id: 'ib_math_ai_hl', label: 'Math AI HL (Applications & Interpretation)', description: 'Modélisation, statistiques avancées, matrices et calcul appliqué (Higher Level)' },
        { id: 'ib_math_ai_sl', label: 'Math AI SL (Applications & Interpretation)', description: 'Applications mathématiques, statistiques et fonctions (Standard Level)' },
        { id: 'ib_physics_hl', label: 'IB Physics (HL / SL)', description: 'Mechanics, thermal physics, waves, electricity & magnetism, circular motion & gravitation, atomic & nuclear physics' },
        { id: 'ib_chemistry_hl', label: 'IB Chemistry (HL / SL)', description: 'Stoichiometry, atomic structure, bonding, thermodynamics, kinetics, equilibrium, acids & bases, redox, organic chemistry' },
        { id: 'ib_biology_hl', label: 'IB Biology (HL / SL)', description: 'Molecular biology, genetics, ecology, evolution, human physiology and biotechnology' },
        { id: 'ib_history_hl', label: 'IB History & Global Politics', description: 'Authoritarian states, 20th-century world history, Cold War and international relations' },
        { id: 'ib_economics_hl', label: 'IB Economics (HL / SL)', description: 'Microeconomics, macroeconomics, international trade and development' },
        { id: 'ib_tok', label: 'Theory of Knowledge (TOK)', description: 'Epistemology, knowledge questions, areas of knowledge and TOK exhibition' }
      ]
    },
    methodologyNotes: 'Standards de l’IB : rigueur formelle, justification pas-à-pas de chaque étape, écriture mathématique et scientifique internationale, précision des unités et interprétations concrètes.'
  },
  {
    id: 'ANGLO',
    name: 'Systèmes Anglo-Saxons (AP, A-Levels, SAT)',
    flag: '🇬🇧',
    phoneCode: '+44',
    educationSystem: 'Cambridge Assessment / College Board / Edexcel',
    curriculumAuthority: 'College Board (USA) / Cambridge Assessment International Education (UK)',
    defaultGrades: ['Grade 9-10 (IGCSE)', 'Grade 11 (AS-Level / AP 1)', 'Grade 12 (A-Level / AP 2)', 'College / University Prep'],
    seriesByGrade: {
      'Grade 12 (A-Level / AP 2)': [
        { id: 'anglo_ap_calc_bc', label: 'AP Calculus BC & AB', description: 'Limits, derivatives, integrals, series, polar/parametric & vector functions' },
        { id: 'anglo_ap_physics', label: 'AP Physics 1, 2 & C (Mechanics / E&M)', description: 'Newtonian mechanics, work, energy, rotational dynamics, electromagnetism & circuits' },
        { id: 'anglo_ap_chem', label: 'AP Chemistry', description: 'Intermolecular forces, kinetics, thermodynamics, equilibrium, acid-base, electrochemistry' },
        { id: 'anglo_ap_bio', label: 'AP Biology', description: 'Biochemistry, cellular processes, genetics, gene expression, natural selection and ecology' },
        { id: 'anglo_ap_cs', label: 'AP Computer Science A & Principles', description: 'Java programming, object-oriented design, algorithms and computational thinking' },
        { id: 'anglo_ap_history', label: 'AP World / European / US History', description: 'DBQ analysis, primary source evidence, historical reasoning and LEQ essays' },
        { id: 'anglo_ap_econ', label: 'AP Macroeconomics & Microeconomics', description: 'Economic models, market efficiency, monetary/fiscal policy and trade' },
        { id: 'anglo_alevel_math', label: 'A-Level Mathematics (Pure 1-4, Stats & Mech)', description: 'Cambridge / Edexcel Pure Mathematics, Mechanics and Probability & Statistics' },
        { id: 'anglo_alevel_physics', label: 'A-Level Physics (CIE / Edexcel / AQA)', description: 'Physical quantities, kinematics, dynamics, waves, fields, nuclear physics' },
        { id: 'anglo_alevel_chem', label: 'A-Level Chemistry (CIE / Edexcel / AQA)', description: 'Physical, inorganic and organic chemistry, reaction kinetics and spectroscopy' },
        { id: 'anglo_alevel_bio', label: 'A-Level Biology', description: 'Cell biology, biochemistry, inheritance, regulation and physiology' },
        { id: 'anglo_further_math', label: 'A-Level Further Mathematics', description: 'Complex numbers, matrices, hyperbolic functions, differential equations' },
        { id: 'anglo_ap_stats', label: 'AP Statistics & Data Analysis', description: 'Data distributions, probability models, inference, hypothesis testing' },
        { id: 'anglo_sat_act', label: 'SAT / ACT Mathematics & Critical Reading', description: 'Advanced algebra, data analysis and evidence-based reading mastery' }
      ]
    },
    methodologyNotes: 'Standards internationaux anglo-saxons : explicitation rigoureuse des théorèmes, étapes algébriques complètes, justification des conditions d’application et des unités SI.'
  },
  {
    id: 'PREPA',
    name: 'Classes Préparatoires & Concours (CPGE)',
    flag: '🏛️',
    phoneCode: '+33',
    educationSystem: 'Classes Préparatoires aux Grandes Écoles & Concours Nationaux',
    curriculumAuthority: 'Ministère de l’Enseignement Supérieur et de la Recherche (Grandes Écoles X, ENS, Mines, Centrale)',
    defaultGrades: ['1ère Année CPGE (Maths Sup)', '2ème Année CPGE (Maths Spé)', 'Licence / Université (L1-L3)'],
    seriesByGrade: {
      '2ème Année CPGE (Maths Spé)': [
        { id: 'prepa_mp', label: 'Filière MP / MP* (MPSI)', description: 'Mathématiques pures, analyse, algèbre bilinéaire, topologie et géométrie différentielle' },
        { id: 'prepa_pc', label: 'Filière PC / PC* (PCSI)', description: 'Physique et Chimie approfondies, thermodynamique, électromagnétisme, mécanique des fluides, chimie organique et quantique' },
        { id: 'prepa_psi', label: 'Filière PSI / PSI* (PCSI)', description: 'Physique et sciences de l’ingénieur, modélisation mathématique et analyse vectorielle' },
        { id: 'prepa_mpi', label: 'Filière MPI / MPI* (MP2I)', description: 'Mathématiques, physique et informatique fondamentale' },
        { id: 'prepa_bcpst', label: 'Filière BCPST (Biologie & Géologie)', description: 'Mathématiques appliquées, probabilités, analyse et sciences expérimentales' },
        { id: 'prepa_ecg', label: 'Filière ECG (Grandes Écoles de Commerce)', description: 'Mathématiques approfondies ou appliquées, algèbre linéaire et probabilités' }
      ]
    },
    methodologyNotes: 'Excellence des concours : rigueur axiomatique, démonstrations intégrales, vérification minutieuse des hypothèses de chaque théorème.'
  },
  {
    id: 'UNIV',
    name: 'Universel / International',
    flag: '🌐',
    phoneCode: '+00',
    educationSystem: 'Standards Académiques Francophones Internationaux',
    curriculumAuthority: 'Normes Académiques Universelles',
    defaultGrades: ['Collège (6e-3e)', 'Lycée (2nde-1ère)', 'Terminale', 'Classes Préparatoires / Supérieur'],
    seriesByGrade: {
      'Terminale': [
        { id: 'univ_sciences', label: 'Filière Scientifique', description: 'Mathématiques, Physique-Chimie & Biologie' },
        { id: 'univ_lettres', label: 'Filière Littéraire & Philosophie', description: 'Humanités, Lettres classiques & modernes' },
        { id: 'univ_eco', label: 'Filière Économique & Sociale', description: 'Sciences économiques et politiques' }
      ]
    },
    methodologyNotes: 'Méthodologie universelle, indépendante de toute frontière administrative : rigueur scientifique absolue, clarté argumentative, canons de dissertation.'
  }
];

export const DEFAULT_STUDENT_PROFILE = {
  id: 'guest_student',
  lastName: '',
  firstName: '',
  fullName: '',
  country: "Côte d'Ivoire",
  countryCode: 'CI',
  flagEmoji: '🇨🇮',
  phoneCode: '+225',
  educationSystem: 'Programme National Ivoirien (MENA / DECO)',
  curriculumAuthority: 'Ministère de l’Éducation Nationale et de l’Alphabétisation (MENA / DPFC / DECO)',
  grade: 'Terminale',
  serie: 'Terminale D',
  schoolName: '',
  city: '',
  phoneNumber: '',
  parentPhoneNumber: '',
  studentMatricule: 'LP-INVITE',
  subscriptionStatus: 'free_discovery' as const,
  subscriptionLabel: 'Pass Découverte Gratuit',
  isRegistered: false,
};
