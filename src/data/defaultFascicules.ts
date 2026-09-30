import { Fascicule } from '../types';

export const DEFAULT_FASCICULES: Fascicule[] = [
  // ==========================================
  // PREMIER CYCLE : COLLÈGE (6e, 5e, 4e, 3e)
  // ==========================================
  {
    id: 'francais-college-initiation',
    title: 'Français 6e / 5e / 4e : Récit Narratif, Descriptif, Portrait & Écrit d\'Idées',
    discipline: 'francais',
    disciplineLabel: 'Français (6e, 5e, 4e)',
    badgeColor: 'rose',
    cycle: 'premier_cycle_bepc',
    summary: 'Méthodologie d\'expression écrite et d\'analyse de texte pour les classes de 6e, 5e et 4e : schéma narratif, description d\'un lieu ou d\'un personnage (portrait physique et moral), insertion de dialogues, questions de compréhension et initiation au paragraphe argumentatif.',
    methodologyOverview: `1. LE RÉCIT NARRATIF ET DESCRIPTIF (6e - 5e) :
   - Schéma narratif classique : Situation initiale -> Élément perturbateur -> Péripéties -> Élément de résolution -> Situation finale.
   - Le portrait (physique et moral) : Utilisation des adjectifs qualificatifs, des comparaisons et du vocabulaire des sensations (vue, ouïe, toucher).
   - L'insertion du dialogue : Ponctuation rigoureuse (tirets, deux-points, guillemets) et verbes de parole variés (déclarer, répliquer, s'écrier).

2. INITIATION À L'EXPLICATION ET À L'ARGUMENTATION (4e) :
   - Découverte du thème et distinction claire entre un fait objectif et une opinion subjective.
   - Formulation d'une idée directrice accompagnée d'un argument simple et d'un exemple concret du quotidien.
   - Maîtrise des connecteurs logiques de base : d'abord, ensuite, mais, car, parce que, enfin.

3. QUESTIONS DE COMPRÉHENSION ET DE LANGUE (6e à 4e) :
   - Répondre par des phrases complètes sans paraphraser.
   - Justifier par un relevé textuel entre guillemets.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Analyse de la consigne et du cadre spatio-temporel',
        description: 'Repérer le lieu, l\'époque, les personnages principaux et le type de texte demandé (raconter, décrire, dialoguer).',
        keyRules: ['Définir le temps de narration principal (Passé simple/Imparfait ou Présent de narration)', 'Respecter la cohérence de l\'énonciation']
      },
      {
        name: 'Étape 2 : Élaboration du plan et des péripéties',
        description: 'Structurer l\'histoire en paragraphes distincts avec transitions logiques et chronologiques.',
        keyRules: ['1 paragraphe par étape du récit', 'Enrichir avec des détails sensoriels et des figures simples']
      },
      {
        name: 'Étape 3 : Rédaction et relecture soignée',
        description: 'Vérifier la concordance des temps, les accords en genre et en nombre, et la ponctuation du dialogue.',
        keyRules: ['Pas de répétitions de verbes génériques (faire, dire)', 'Vérifier l\'orthographe des homophones (a/à, et/est, son/sont)']
      }
    ],
    coreKnowledgeExcerpt: `Notions fondamentales de 6e, 5e et 4e en Côte d'Ivoire :
- Les types de textes : narratif, descriptif, explicatif, injonctif et dialogal.
- La conjugaison : présent, imparfait et passé simple de l'indicatif, futur simple, conditionnel présent, accords du participe passé.
- Les figures de style de base : comparaison, métaphore simple, personnification.
- Thématiques : les contes africains et universels, la vie familiale et villageoise, la protection de la nature, l'amitié, les aventures et découvertes.`,
    sampleInBookletSubjects: [
      'Rédaction 6e : « Un jour de marché au village ou en ville, un événement imprévu perturbe la foule. Raconte cette scène en décrivant l\'ambiance et la réaction des passants. »',
      'Rédaction 5e : « Fais le portrait physique et moral d\'un camarade ou d\'un aîné que tu admires particulièrement pour son courage et sa gentillesse. »',
      'Rédaction 4e : « Au cours d\'une discussion, ton ami soutient que la lecture des contes et romans est une perte de temps. Rédige un dialogue où tu lui expliques avec deux arguments pourquoi la lecture est enrichissante. »'
    ],
    sampleNewUntreatedSubjects: [
      'Raconte une journée mémorable passée pendant les vacances scolaires dans ton village ou dans une autre ville de Côte d\'Ivoire.',
      'Décris la forêt sacrée ou un monument historique de ta région en utilisant des comparaisons et des adjectifs de couleur et de forme.',
      'Rédige un court récit intégrant un dialogue entre un élève et son maître sur l\'importance de la discipline à l\'école.'
    ]
  },
  {
    id: 'francais-bepc-texte-argumentatif',
    title: 'Français 3e / BEPC : Texte Argumentatif (Étayer / Réfuter) & Résumé de Texte',
    discipline: 'francais',
    disciplineLabel: 'Français (3e / BEPC)',
    badgeColor: 'rose',
    cycle: 'premier_cycle_bepc',
    summary: 'Méthodologie officielle ivoirienne de l\'épreuve de Français au BEPC : Sujet 1 (Texte argumentatif de réflexion : Thème, Reformulation, Production étayante/réfutante) et Sujet 2 (Résumé de texte : Questions de Compréhension & Vocabulaire, Résumé au 1/3 de volume).',
    methodologyOverview: `1. PREMIER SUJET - TEXTE ARGUMENTATIF (Sujet de réflexion) :
   - Question 1 (2 pts) : Identification claire et concise du thème (sans paraphraser tout le sujet).
   - Question 2 (4 pts) : Reformulation précise et fidèle de la thèse soutenue avec vos propres mots (« Selon l'auteur... »).
   - Question 3 (14 pts) : Rédaction de la production argumentative (Étayer = soutenir avec arguments/exemples ; Réfuter = contester avec contre-arguments/exemples) :
     * Introduction : Amorce thématique de société + Présentation du sujet + Problématique + Annonce de la démarche.
     * Développement : 2 à 3 arguments solides, bien distincts, chacun étayé par des exemples concrets tirés de l'école, de la vie quotidienne ou de la société ivoirienne/africaine.
     * Conclusion : Bilan des arguments + Prise de position citoyenne finale.

2. DEUXIÈME SUJET - RÉSUMÉ DE TEXTE ARGUMENTATIF :
   - I- QUESTIONS (6 pts) :
     * A - Compréhension (4 pts) : 1- Thème abordé (2 pts), 2- Thèse de l'auteur (2 pts).
     * B - Vocabulaire (2 pts) : Explication en contexte de l'expression demandée (sens littéral + sens contextuel).
   - II- RÉSUMÉ (14 pts) :
     * Sélection des idées maîtresses et élimination des exemples superflus, chiffres accessoires et répétitions.
     * Rédaction au tiers (1/3) du volume initial avec respect de la marge de ±10%.
     * Respect strict du système d'énonciation et reformulation personnelle sans copier/coller.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Traitement du Thème & Reformulation de la Thèse',
        description: 'Dégager le thème en 1 courte phrase et reformuler la thèse fidèlement sans déformation.',
        keyRules: ['Thème : De quoi parle le texte/sujet ?', 'Thèse : Que dit exactement l\'auteur à ce sujet ?']
      },
      {
        name: 'Étape 2 : Choix de la posture (Étayer ou Réfuter)',
        description: 'Vérifier la consigne : étayer (apporter des preuves confirmatives) ou réfuter (démontrer les failles).',
        keyRules: ['Développer au moins 2 arguments solides', 'Associer à chaque argument un exemple concret du vécu']
      },
      {
        name: 'Étape 3 : Rédaction de la production ou du résumé',
        description: 'Respecter le schéma Introduction - Développement - Conclusion pour le sujet 1, ou le calibrage au 1/3 pour le sujet 2.',
        keyRules: ['Connecteurs logiques clairs (D\'abord, Ensuite, Enfin)', 'Mentionner le décompte exact des mots pour le résumé']
      }
    ],
    coreKnowledgeExcerpt: `Thématiques clés du programme de 3e / BEPC en Côte d'Ivoire :
- L'École, l'éducation, la formation civique et la réconciliation nationale.
- La jeunesse, les dérives juvéniles (violence, drogue, cybercriminalité / broutement, grossesses précoces en milieu scolaire).
- Les technologies de l'information (réseaux sociaux, téléphone portable, internet : atouts et dangers).
- La protection de l'environnement, le réchauffement climatique et la salubrité urbaine.
- Le travail des enfants, la solidarité, la tolérance et la citoyenneté responsable.`,
    sampleInBookletSubjects: [
      'Au cours d\'un débat animé par la CDVR dans ton établissement, un membre déclare : « L\'école peut jouer un grand rôle dans la réconciliation des filles et fils de la Côte d\'Ivoire ». 1- Thème, 2- Reformule la thèse, 3- Rédige en étayant ce point de vue (BEPC Session 2022)',
      'Résumé de texte argumentatif : « La violence juvénile » par Brigivie Guirathe (BEPC Session 2022 - Questions et Résumé au 1/3)'
    ],
    sampleNewUntreatedSubjects: [
      'Un conférencier affirme devant les élèves : « Les réseaux sociaux constituent aujourd\'hui un frein à la réussite scolaire des jeunes. » 1- Identifie le thème, 2- Reformule la thèse, 3- Rédige ta production en étayant cette affirmation.',
      '« Le travail de groupe permet aux élèves de mieux progresser que le travail individuel. » Rédige une production argumentative pour réfuter cette opinion.',
      'Un observateur soutient : « Le respect des règles d\'hygiène et la préservation de l\'environnement relèvent d\'abord de la responsabilité des citoyens avant celle de l\'État. » Développe ton argumentation en étayant ce point de vue.',
      '« La lecture d\'œuvres littéraires est indispensable pour forger l\'esprit critique de la jeunesse moderne. » Explique et étaye ce point de vue.'
    ]
  },
  {
    id: 'histoire-geo-college',
    title: 'Histoire-Géographie Collège (6e, 5e, 4e, 3e) : Repères, Documents & Situation d\'Évaluation',
    discipline: 'histoire',
    disciplineLabel: 'Histoire-Géo (Collège 6e-3e)',
    badgeColor: 'amber',
    cycle: 'premier_cycle_bepc',
    summary: 'Méthodologie officielle d\'Histoire et Géographie au Premier Cycle : repérages chronologiques et spatiaux (6e-5e), analyse guidée de documents (4e) et maîtrise des connaissances couplée à la situation d\'évaluation en 3 consignes (3e / BEPC).',
    methodologyOverview: `1. PREMIÈRE PARTIE - MAÎTRISE DES CONNAISSANCES :
   - Définitions claires des concepts clés (ex: Impérialisme, Colonisation, Traite négrière, Résistance, Déforestation, Exode rural, PAA, Relief, Climat).
   - Localisation sur carte de Côte d'Ivoire ou d'Afrique (fleuves, ports, zones agro-écologiques).
   - Chronologie et associations événements/dates majeures.

2. DEUXIÈME PARTIE - SITUATION D'ÉVALUATION (Approche par compétences) :
   - Consigne 1 : Identification du fait historique ou du phénomène géographique décrit dans le texte.
   - Consigne 2 : Explication approfondie des causes, manifestations ou conséquences en combinant texte et cours.
   - Consigne 3 : Proposition de solutions concrètes, durables et réalistes, ou prise de position argumentée.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Réponse aux questions de connaissances',
        description: 'Formuler des définitions rigoureuses et situer précisément les repères chronologiques.',
        keyRules: ['Définition scientifique sans à-peu-près', 'Précision des dates et des acteurs']
      },
      {
        name: 'Étape 2 : Traitement de la situation d\'évaluation (Consignes 1, 2 et 3)',
        description: 'Répondre consigne par consigne avec développement rédigé et structuré.',
        keyRules: ['Identifier le problème central', 'Expliquer 2 causes et 2 conséquences', 'Proposer 2 solutions réalistes']
      }
    ],
    coreKnowledgeExcerpt: `Programme d'Histoire et Géographie du Collège (Côte d'Ivoire) :
- 6e : La Préhistoire en Afrique, l'Égypte antique, la Terre dans l'univers, les milieux naturels.
- 5e : Les grands empires ouest-africains (Ghana, Mali, Songhaï), la traite transsaharienne et atlantique, la population mondiale.
- 4e : Les révolutions du XVIIIe siècle, la colonisation au XIXe siècle, les activités économiques et l'urbanisation.
- 3e : L'impérialisme, les résistances (Samory Touré), la colonisation en Côte d'Ivoire, l'accession à l'indépendance de 1960 (Félix Houphouët-Boigny), le milieu naturel, la population et l'agriculture ivoirienne (cacao/café/hévéa).`,
    sampleInBookletSubjects: [
      'Situation d\'évaluation 3e : La déforestation et la dégradation des sols en Côte d\'Ivoire (Consignes : identifier le problème, expliquer deux causes humaines, proposer deux solutions de reboisement)',
      'Questions de cours 4e : Définir "Traite négrière" et expliquer ses conséquences démographiques sur le continent africain',
      'Exercice 5e/6e : Citer les trois grands empires du Soudan médiéval et localiser le fleuve Niger'
    ],
    sampleNewUntreatedSubjects: [
      'Situation d\'évaluation sur l\'exode rural et la poussée urbaine à Abidjan : Causes socio-économiques, conséquences sur les infrastructures et solutions d\'aménagement.',
      'Situation d\'évaluation sur la lutte anticoloniale en Côte d\'Ivoire : Du Syndicat Agricole Africain (SAA) à l\'indépendance de 1960.',
      'L\'impact du changement climatique sur les rendements de la cacaoculture en Côte d\'Ivoire : Analyse et propositions.'
    ]
  },
  {
    id: 'math-college',
    title: 'Mathématiques Collège (6e, 5e, 4e, 3e) : Arithmétique, Calcul Littéral & Géométrie Plane',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques (Collège 6e-3e)',
    badgeColor: 'sky',
    cycle: 'premier_cycle_bepc',
    summary: 'Méthodologie complète de résolution pour toutes les classes du Collège : opérations arithmétiques et fractions (6e/5e), puissances et théorème de Pythagore (4e), calcul littéral, factorisations avec identités remarquables, équations-produits, théorème de Thalès, trigonométrie et repérage cartésien (3e / BEPC).',
    methodologyOverview: `1. ANALYSE DE L'ÉNONCÉ & IDENTIFICATION DES FORMULES :
   - Écrire explicitement la formule de cours avant son application (ex: Théorème de Pythagore, Propriété de Thalès, Identités remarquables : (a+b)², (a-b)², a²-b²).
2. DÉMARCHE DE RÉSOLUTION DÉTAILLÉE :
   - Présenter chaque étape de calcul intermédiaire sans raccourci.
   - Poser les égalités avec rigueur et appliquer les règles des signes et des priorités opératoires.
3. JUSTIFICATIONS GÉOMÉTRIQUES :
   - Vérifier les hypothèses préalables (ex: « Le triangle ABC est rectangle en A, donc d'après le théorème de Pythagore... »).
4. CONCLUSION & RÉSULTAT ENCADRÉ :
   - Mettre en valeur le résultat numérique avec son unité (cm, cm², °) ou l'ensemble des solutions S = {...}.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Relevé des données et théorèmes associés',
        description: 'Identifier l\'inconnue et énoncer la règle ou le théorème applicable.',
        keyRules: ['Poser les conditions (triangle rectangle, droites parallèles)', 'Rappeler la formule littérale']
      },
      {
        name: 'Étape 2 : Développement des calculs algébriques et géométriques',
        description: 'Effectuer les calculs pas à pas avec gestion rigoureuse des signes et parenthèses.',
        keyRules: ['Respecter les priorités de calcul (parenthèses, puissances, multiplications)', 'Réduire les termes semblables']
      },
      {
        name: 'Étape 3 : Conclusion et vérification',
        description: 'Vérifier la cohérence du résultat et formuler une phrase de réponse claire.',
        keyRules: ['Encadrer le résultat final', 'Écrire l\'ensemble des solutions sous la forme S = {x1; x2}']
      }
    ],
    coreKnowledgeExcerpt: `Notions du Collège (6e à 3e en Côte d'Ivoire) :
- 6e / 5e : Nombres décimaux, fractions, symétrie axiale et centrale, angles, périmètres et aires de polygones et disques, proportionnalité.
- 4e : Nombres relatifs, puissances de 10, calcul littéral simple (développement), Théorème de Pythagore et sa réciproque, cosinus dans le triangle rectangle, statistiques.
- 3e / BEPC : Identités remarquables, factorisations, équations du 1er degré et équations-produits nuls, inéquations et représentation graphique sur une droite graduée, systèmes de deux équations à deux inconnues, Théorème de Thalès et sa réciproque, trigonométrie (cosinus, sinus, tangente), vecteurs et repérage cartésien.`,
    sampleInBookletSubjects: [
      'Calcul littéral 3e : Soit A(x) = (2x - 3)² - (x + 1)². 1) Développer et réduire A(x). 2) Factoriser A(x). 3) Résoudre A(x) = 0 dans R.',
      'Géométrie 3e : Soit un triangle ABC rectangle en A tel que AB = 6 cm et AC = 8 cm. 1) Calculer BC. 2) Calculer cos(ABC) puis en déduire la mesure de l\'angle au degré près.',
      'Exercice 4e/5e : Calculer et donner sous forme de fraction irréductible B = (3/4 - 1/2) * (5/3 + 2).'
    ],
    sampleNewUntreatedSubjects: [
      'Résoudre dans R le système d\'équations : { 2x + 3y = 12 ; 5x - y = 13 } par la méthode de combinaison linéaire ou de substitution.',
      'Dans un repère orthonormé (O, I, J), placer les points A(2; 3), B(-1; 1) et C(4; -2). 1) Calculer les coordonnées du milieu K de [AB]. 2) Calculer la distance AB.',
      'Factoriser les expressions : B(x) = 9x² - 25 et C(x) = (3x - 5)(2x + 1) + (3x - 5)(x - 4).'
    ]
  },
  {
    id: 'geographie-6e-officiel',
    title: 'Géographie 6ème (Programme Officiel CI) : La Terre, Milieux Naturels & Civisme Fiscal',
    discipline: 'geographie',
    disciplineLabel: 'Géographie 6ème',
    badgeColor: 'emerald',
    cycle: 'premier_cycle_bepc',
    summary: 'Référentiel officiel de Géographie 6ème conforme APC : Les mouvements de la Terre et les fuseaux horaires, les milieux physiques (reliefs, climats, végétations), les fleuves et le cycle de l\'eau, et l\'importance citoyenne de l\'impôt dans le développement national.',
    methodologyOverview: `1. LA PLANÈTE TERRE ET LE TEMPS :
   - Rotation (24h) et alternance jour/nuit ; Révolution (365j 1/4) et alternance des saisons.
   - Calcul des fuseaux horaires : 360° / 24h = 15° par heure (Vers l'Est on ajoute, vers l'Ouest on retranche).
2. LES MILIEUX PHYSIQUES ET L'HYDROGRAPHIE :
   - Les formes de relief (plaines, plateaux, montagnes) et leur étagement.
   - Les zones climatiques (chaude, tempérée, froide) et types de végétations associées.
   - Le cycle de l'eau : Évaporation -> Condensation -> Précipitations -> Infiltration & Ruissellement.
3. CITOYENNETÉ ET DÉVELOPPEMENT :
   - L'impôt comme contribution civique obligatoire finançant les infrastructures publiques (écoles, hôpitaux, routes, électrification).
   - Rôle de la DGI (Direction Générale des Impôts) et civisme fiscal.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Définition exacte et localisation spatiale',
        description: 'Définir rigoureusement les notions géographiques avec le vocabulaire scientifique officiel.',
        keyRules: ['Pas d\'à-peu-près sur les concepts (rotation, sol, plateau)', 'Précision des repères cardinaux']
      },
      {
        name: 'Étape 2 : Explication des mécanismes naturels ou humains',
        description: 'Détailler les causes, les étapes chronologiques et les conséquences environnementales ou civiques.',
        keyRules: ['Démarche logique cause -> conséquence', 'Exemples concrets du milieu ivoirien et mondial']
      },
      {
        name: 'Étape 3 : Conclusion citoyenne et bilan',
        description: 'Synthétiser les enjeux de préservation de la nature et de participation citoyenne.',
        keyRules: ['Rappeler les gestes écologiques ou l\'acte civique de paiement de l\'impôt']
      }
    ],
    coreKnowledgeExcerpt: `Programme officiel de Géographie 6ème (Côte d'Ivoire) :
- Thème 1 : La Terre dans l'espace, mouvements de rotation et révolution, fuseaux horaires.
- Thème 2 : Les milieux physiques du globe : reliefs (montagnes, plateaux, plaines), climats, végétations et sols.
- Thème 3 : Les eaux continentales et océaniques, cours d'eau, cycle de l'eau.
- Thème 4 : Éducation financière et civisme fiscal : rôle et importance de l'impôt dans le développement local et national.`,
    sampleInBookletSubjects: [
      'Fuseaux horaires : Il est 12h à Abidjan (Méridien de Greenwich 0°). Quelle heure est-il dans une ville située à 45° de longitude Est ?',
      'Milieux physiques : Décris les caractéristiques distinctives d\'un plateau par rapport à une plaine et cite un exemple de relief en Côte d\'Ivoire.',
      'Civisme fiscal : Explique en 3 points pourquoi tout citoyen contribuable doit payer régulièrement ses impôts à la DGI.'
    ],
    sampleNewUntreatedSubjects: [
      'Explique le phénomène de l\'alternance des saisons à partir du mouvement de révolution de la Terre et de l\'inclinaison de son axe.',
      'Schématise et explique les 4 étapes fondamentales du cycle de l\'eau dans la nature.',
      'Quelles sont les conséquences de la déforestation sur l\'érosion des sols et le régime des cours d\'eau ?'
    ]
  },
  {
    id: 'maths-6e-officiel',
    title: 'Mathématiques 6ème (Programme Officiel CI) : Arithmétique, Décimaux & Géométrie Fondamentale',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques 6ème',
    badgeColor: 'sky',
    cycle: 'premier_cycle_bepc',
    summary: 'Référentiel officiel de Mathématiques 6ème : Nombres entiers naturels et décimaux, 4 opérations et règles de priorité, fractions et écritures fractionnaires, proportionnalité et pourcentages, droites sécantes, perpendiculaires et parallèles, angles, cercles et polygones (triangles, rectangles, losanges, carrés), périmètres et aires.',
    methodologyOverview: `1. ARITHMÉTIQUE ET CALCUL NUMÉRIQUE :
   - Entiers et décimaux : valeur de position (dixièmes, centièmes, millièmes), comparaison, encadrement et troncature/arrondi.
   - Les 4 opérations posées et calcul en ligne avec respect strict des priorités opératoires.
   - Fractions : simplification, égalité a/b = (a*k)/(b*k), comparaison à 1 et addition/soustraction de même dénominateur.
   - Proportionnalité : passage à l'unité, produit en croix, calcul de pourcentage (P = Total * (t/100)).
2. GÉOMÉTRIE DU PLAN ET MESURES :
   - Notations : droite (AB), segment [AB], demi-droite [AB), longueur AB.
   - Droites perpendiculaires et parallèles : utilisation de l'équerre et de la règle, médiatrice d'un segment.
   - Les angles : aigu (< 90°), droit (= 90°), obtus (> 90°), plat (= 180°), utilisation du rapporteur.
   - Triangles et quadrilatères usuels (propriétés des côtés et des diagonales).
   - Formules de périmètres (Carré : 4*c ; Rectangle : 2*(L+l) ; Cercle : 2*pi*r) et d'aires (Carré : c² ; Rectangle : L*l ; Triangle : (b*h)/2 ; Disque : pi*r²).`,
    methodologySteps: [
      {
        name: 'Étape 1 : Poser les données et la règle mathématique',
        description: 'Relever les valeurs connues avec leurs unités et citer la définition ou la formule.',
        keyRules: ['Notations géométriques conformes', 'Formule littérale avant le calcul']
      },
      {
        name: 'Étape 2 : Calculs pas à pas et respect des conversions',
        description: 'Harmoniser toutes les longueurs dans la même unité avant de multiplier ou d\'additionner.',
        keyRules: ['Une ligne par étape de calcul', 'Respect strict des priorités de calcul']
      },
      {
        name: 'Étape 3 : Formulation du résultat avec unité',
        description: 'Écrire une phrase de conclusion complète avec le résultat numérique exact et son unité.',
        keyRules: ['Résultat final encadré', 'Unité légale obligatoire (cm, m, cm², m², FCFA)']
      }
    ],
    coreKnowledgeExcerpt: `Programme officiel de Mathématiques 6ème (Côte d'Ivoire) :
- Nombres entiers naturels et décimaux, comparaison, ordre croissant/décroissant.
- Opérations, puissances de 10, division euclidienne et division décimale.
- Fractions, pourcentages et problèmes de la vie courante.
- Droites, segments, milieu, médiatrice, angles et bissectrice.
- Figures usuelles : triangles, rectangles, carrés, losanges, cercles et disques.
- Périmètres, aires et volumes élémentaires (pavé droit).`,
    sampleInBookletSubjects: [
      'Calcul posé : Calcule A = 24,5 + 18,75 et B = 105,4 - 38,65. Détermine ensuite C = 12,5 * 4,2.',
      'Priorités opératoires : Calcule D = 35 - (4 * 6 - 8) + 15 / 3.',
      'Géométrie et aires : Un champ rectangulaire a pour longueur L = 80 m et largeur l = 45 m. 1) Calcule son périmètre. 2) Calcule son aire en m².'
    ],
    sampleNewUntreatedSubjects: [
      'Une boutique accorde une remise de 15% sur un article coûtant 12 000 FCFA. Calcule le montant de la réduction et le prix final à payer.',
      'Construis un triangle ABC tel que AB = 6 cm, AC = 5 cm et BC = 4 cm. Trace la médiatrice du segment [AB] et justifie la construction.',
      'Simplifie la fraction 48/60 pour obtenir une fraction irréductible en détaillant les étapes de division.'
    ]
  },
  {
    id: 'physique-chimie-6e-officiel',
    title: 'Physique-Chimie 6ème (Programme Officiel CI) : Électricité, Matière & Combustions',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie 6ème',
    badgeColor: 'amber',
    cycle: 'premier_cycle_bepc',
    summary: 'Référentiel officiel de Physique-Chimie 6ème conforme APC : Circuits électriques simples, dipôles générateurs et récepteurs, montage va-et-vient, court-circuit et dispositifs de protection (fusible, disjoncteur), états de la matière (solide, liquide, gazeux), mesures de masse (balance Roberval) et de volume (éprouvette graduée), thermométrie et changements d\'état (fusion, solidification, ébullition), constitution de l\'air et combustions (butane, charbon de bois).',
    methodologyOverview: `1. ÉLECTRICITÉ ET SÉCURITÉ EN 6ÈME :
   - Éléments du circuit : Générateur (pile), Récepteur (lampe, moteur), Interrupteur, Fils de connexion.
   - Sens conventionnel du courant : de la borne (+) vers la borne (-) à l'extérieur du générateur.
   - Conducteurs (métaux, graphite, eau salée) et Isolants (plastique, verre, bois sec, air sec).
   - Montage va-et-vient (2 commutateurs à 3 bornes pour commander un point lumineux depuis deux endroits).
   - Court-circuit : danger d'échauffement et d'incendie ; Rôle protecteur du coupe-circuit à fusible et du disjoncteur différentiel.
2. MATIÈRE, MESURES ET CHANGEMENTS D'ÉTAT :
   - États physiques : Solide (compact ou divisé, forme propre), Liquide (incompressible, surface libre plane et horizontale au repos), Gaz (expansible et compressible, occupe tout le volume disponible).
   - Mesures : Volume par éprouvette graduée (lecture au bas du ménisque), Masse par double pesée ou tare avec balance Roberval.
   - Changements d'état de l'eau : Température de fusion de la glace = 0 °C ; Température d'ébullition de l'eau pure à pression atmosphérique = 100 °C (paliers thermiques pour un corps pur).
3. L'AIR ET LES COMBUSTIONS :
   - Composition approximative de l'air : 21% de dioxygène (O2 - comburant indispensable), 78% de diazote (N2), 1% d'autres gaz.
   - Combustion complète du butane (virole ouverte, flamme bleue, très chaude, produit CO2 qui trouble l'eau de chaux + H2O qui bleuit le sulfate de cuivre anhydre).
   - Combustion incomplète du butane (virole fermée, flamme jaune, éclairante, produit du carbone/suie et du monoxyde de carbone toxique CO).`,
    methodologySteps: [
      {
        name: 'Étape 1 : Schématisation normalisée et relevé d\'expériences',
        description: 'Utiliser les symboles normalisés pour les circuits ou identifier les réactifs et produits d\'une combustion.',
        keyRules: ['Symboles électriques officiels', 'Identifier le réactif comburant (dioxygène) et combustible']
      },
      {
        name: 'Étape 2 : Raisonnement scientifique et interprétation',
        description: 'Expliquer le phénomène observé (test à l\'eau de chaux, court-circuit, ménisque, palier de température).',
        keyRules: ['Distinguer observation et conclusion scientifique', 'Préciser les conditions expérimentales']
      },
      {
        name: 'Étape 3 : Mesures exactes et consignes de sécurité',
        description: 'Donner la valeur chiffrée avec unité (g, kg, mL, cm³, °C) et rappeler les règles de sécurité domestique.',
        keyRules: ['Unité de mesure indispensable', 'Règles de prévention contre l\'électrocution et l\'asphyxie au CO']
      }
    ],
    coreKnowledgeExcerpt: `Programme officiel de Physique-Chimie 6ème (Côte d'Ivoire) :
- Électricité : Circuit simple, conducteurs/isolants, va-et-vient, court-circuit, fusible et disjoncteur.
- États de la matière : Solides, liquides, gaz, volume, masse, masse volumique simple, changements d'état physique de l'eau.
- Chimie et combustions : Composition de l'air, rôle du dioxygène, combustion complète et incomplète du butane, combustion du charbon de bois, dangers et sécurité.`,
    sampleInBookletSubjects: [
      'Circuit électrique : Schématise un circuit en boucle simple comportant une pile, une lampe et un interrupteur fermé, et indique le sens du courant par des flèches.',
      'Mesure de volume et masse : Une éprouvette contient 40 mL d\'eau. On immerge un caillou de masse m = 65 g, le niveau monte à 65 mL. 1) Calcule le volume du caillou. 2) Calcule sa masse volumique.',
      'Combustions : Pourquoi la flamme de la cuisinière à gaz devient-elle jaune et noircit-elle les casseroles quand la virole est fermée ? Quel gaz dangereux peut alors se former ?'
    ],
    sampleNewUntreatedSubjects: [
      'Explique le fonctionnement du montage électrique va-et-vient dans un couloir ou une cage d\'escalier avec un schéma normalisé.',
      'Lors de la fusion de la glace pure, comment évolue la température mesurée par le thermomètre ? Que constate-t-on pour la masse et le volume lors de la solidification ?',
      'Quels sont les tests d\'identification caractéristiques pour : a) le dioxyde de carbone, b) la vapeur d\'eau ?'
    ]
  },

  // ==========================================
  // SECOND CYCLE (2nde, 1ère, Terminale)
  // ==========================================
  {
    id: 'francais-litterature',
    title: 'Français Terminale A, C, D : Dissertation Littéraire, Commentaire Composé & Résumé-Production',
    discipline: 'francais',
    disciplineLabel: 'Français (Terminale A, C, D)',
    badgeColor: 'rose',
    cycle: 'second_cycle_bac',
    summary: 'Guide intégral conforme au BAC ivoirien : les 7 courants littéraires (Négritude, Classicisme, Lumières, Romantisme, Réalisme, Naturalisme, Parnasse, Symbolisme, Surréalisme), les 3 genres (Poésie, Roman, Théâtre), les figures de style, le barème officiel (OI: 6pts, CS: 6pts, LE: 6pts, P: 2pts), 40 œuvres analysées et 40 sujets types de dissertation.',
    methodologyOverview: `1. MÉTHODOLOGIE DE LA DISSERTATION LITTÉRAIRE (BAC CI) :
   - Étude parcellaire du sujet : repérage des mots-clés, formulation de la thèse de l'auteur, problématisation interrogative.
   - Introduction complète en 3 étapes : Amorce par contexte/définition -> Position du problème (reformulation fidèle) -> Annonce claire des 2 axes.
   - Développement dialectique équilibré : Axe 1 (Explication et justification de la thèse avec œuvres et citations) -> Transition rédigée -> Axe 2 (Antithèse : autres vocations de l'art littéraire : évasion, esthétique, expression personnelle).
   - Conclusion en 3 temps : Bilan des axes + Point de vue personnel sur la vitalité de l'art + Ouverture facultative.

2. MÉTHODOLOGIE DU COMMENTAIRE COMPOSÉ (Grille Stylistique) :
   - Introduction : Contexte de l'extrait, idée générale, annonce des centres d'intérêt.
   - Développement : Paragraphe ordonné selon la règle d'or : Idée secondaire -> Outil d'analyse textuel (procédé, figure, grammaire) -> Effet de sens/interprétation -> Transition.
   - Conclusion : Bilan des axes + Double intérêt du texte (littéraire, didactique, philosophique, social, historique, stylistique) + Élargissement.

3. RÉSUMÉ DE TEXTE & PRODUCTION ÉCRITE :
   - Résumé : Respect strict du 1/3 de volume (+/- 10%), conservation du système d'énonciation sans ajout de formule subjective ('selon l'auteur').
   - Production écrite : Thème de société (Éducation, Jeunesse, Réseaux Sociaux, Immigration, Paix, TIC, Pollution) structuré en Intro - Dév - Concl.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Analyse de la consigne et problématisation',
        description: 'Distinguer la thèse de la consigne (Expliquez et discutez) et formuler les deux axes d\'analyse.',
        keyRules: ['Définition contextuelle des mots-clés', 'Formulation interrogative de la problématique']
      },
      {
        name: 'Étape 2 : Mobilisation du corpus et des citations',
        description: 'Sélectionner les œuvres représentatives de la littérature négro-africaine (Césaire, Senghor, Dadié, Kourouma, Oyono) et universelle (Hugo, Baudelaire, Zola, Molière).',
        keyRules: ['Au moins 2 citations exactes analysées par axe', 'Expliquer la portée de chaque référence']
      },
      {
        name: 'Étape 3 : Rédaction académique soignée',
        description: 'Sauter deux lignes entre les grandes parties, alinéa au début de chaque paragraphe, connecteurs logiques variés.',
        keyRules: ['Pas d\'abréviations ni d\'usage du "je"', 'Respect du barème : OI (6 pts), CS (6 pts), LE (6 pts), P (2 pts)']
      }
    ],
    coreKnowledgeExcerpt: `Référentiel des œuvres et citations majeures du BAC ivoirien :
- Poésie engagée & Négritude : Aimé Césaire (Cahier d'un retour au pays natal : « Ma bouche sera la bouche des malheurs qui n'ont point de bouche »), David Diop (Coups de pilon : « Afrique mon Afrique »), Léopold Sédar Senghor (Chants d'ombre, « Femme noire »), Paul Éluard (« Liberté »).
- Roman engagé & Désenchantement : Ahmadou Kourouma (Les Soleils des indépendances), Ferdinand Oyono (Une vie de boy, Le Vieux Nègre et la médaille), Sembène Ousmane (Les Bouts de bois de Dieu, Le Mandat), Bernard Dadié (Climbié), Émile Zola (Germinal), Stendhal (« Le roman est un miroir que l'on promène le long d'une route »).
- Théâtre & Satire sociale : Aimé Césaire (La Tragédie du roi Christophe, Une Saison au Congo), Bernard Dadié (Monsieur Tôgôgnini, Les Voix dans le vent, Béatrice du Congo), Guillaume Oyono M'bia (Trois Prétendants... un mari), Molière (L'Avare, Tartuffe), Eugène Ionesco (Rhinocéros).`,
    sampleInBookletSubjects: [
      '« Au théâtre, point n\'est besoin de réfléchir, de penser. Tout est dans l\'hilarité. » Expliquez et discutez cette opinion. (Dissertation modèle rédigée)',
      'Commentaire composé du poème « Gorgé de sang » de Mukala Kadima N\'zuji : les conséquences apocalyptiques de la guerre sur les hommes et sur la nature.',
      'Commentaire composé du poème « Fer de lance » de Bottey Zadi Zaourou : l\'hostilité de la nature et la farouche détermination des guerriers.'
    ],
    sampleNewUntreatedSubjects: [
      'Roland Barthes affirme : « L\'univers poétique est rempli de tourments qui font des poètes des gens qui n\'ont jamais souri. » Expliquez et discutez.',
      'Jean-Paul Sartre : « La littérature vous jette dans la bataille ; écrire c\'est une certaine façon de vouloir la liberté. » Expliquez et discutez.',
      'Maupassant affirme que « le but du roman n\'est pas de nous amuser, mais de nous forcer à penser ». Partagez-vous ce point de vue ?',
      'Camara Nangala : « L\'écrivain manifeste le regard critique porté sur le dysfonctionnement de la société. » Expliquez et discutez.'
    ]
  },
  {
    id: 'philo-dissertation',
    title: 'Philosophie Terminale A, C, D : Dissertation Dialectique, Commentaire de Texte & Corpus Notions',
    discipline: 'philo',
    disciplineLabel: 'Philosophie (Terminale A, C, D)',
    badgeColor: 'indigo',
    cycle: 'second_cycle_bac',
    summary: 'Programme officiel complet de Philosophie Terminale en Côte d\'Ivoire : méthodologie de la dissertation (Paradoxe, Problème, 2 Aspects, Axes, Bilan, Point de vue personnel, Ouverture), méthodologie du commentaire de texte (Grille de lecture, Démarche argumentative, Critique interne et externe), fiches intégrales des 25 notions/antithèses et 100+ citations canoniques expliquées.',
    methodologyOverview: `1. LA DISSERTATION PHILOSOPHIQUE (Méthode officielle BAC CI) :
   - Étude parcellaire : Lexique contextuel -> Reformulation -> Problématisation (Problème philosophique + Aspect 1 conditionnel + Aspect 2 antithétique).
   - Introduction en bloc : Paradoxe d'accroche (par définition, constat ou citation) -> Insertion du problème -> Annonce des 2 aspects.
   - Développement dialectique : Axe 1 (Justification rigoureuse de la thèse) -> Transition logique -> Axe 2 (Antithèse critique et dépassement). Chaque paragraphe articulé selon : Idée directrice -> Analyse conceptuelle -> Citation d'auteur expliquée -> Illustration.
   - Conclusion : Bilan des deux axes + Point de vue personnel motivé (orienté vers le bonheur, la liberté, la vérité ou la dignité humaine) + Ouverture prospective.

2. LE COMMENTAIRE DE TEXTE PHILOSOPHIQUE :
   - Grille de lecture préliminaire : Thème, Problème, Thèse, Antithèse, Intention (but immédiat), Enjeu (but lointain), Structure logique (mouvements avec lignes).
   - Étude ordonnée : Explication linéaire du cheminement argumentatif sans paraphrase ni contresens.
   - Intérêt philosophique : Critique interne (évaluation de la cohérence logique et de la pertinence des arguments) + Critique externe (confirmation de la thèse par d'autres auteurs puis dépassement critique).
   - Conclusion : Synthèse du débat critique et prise de position finale.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Étude parcellaire et Problématisation',
        description: 'Définir les concepts clés, formuler la contradiction aporétique et poser les deux questions d\'aspects.',
        keyRules: ['Définition philosophique précise', 'Formuler l\'aspect 1 au conditionnel et l\'aspect 2 sous forme antithétique interrogative']
      },
      {
        name: 'Étape 2 : Rédaction de l\'Introduction en un seul bloc',
        description: 'Construire le paradoxe d\'accroche (thèse vs antithèse) et insérer la problématisation complète.',
        keyRules: ['Pas d\'alinéa à l\'intérieur de l\'introduction', 'Sauter 2 lignes avant le développement']
      },
      {
        name: 'Étape 3 : Développement argumenté et Transitions',
        description: 'Développer 2 ou 3 arguments solides par axe, étayés par des citations d\'auteurs expliquées.',
        keyRules: ['Une transition rédigée obligatoire entre l\'axe 1 et l\'axe 2', 'Toujours expliciter le lien entre la citation et le sujet']
      },
      {
        name: 'Étape 4 : Conclusion avec Point de Vue Personnel',
        description: 'Rappeler le bilan des axes, énoncer son point de vue personnel motivé et proposer une ouverture.',
        keyRules: ['Pas de nouvelle citation dans la conclusion', 'Sauter 2 lignes avant la conclusion']
      }
    ],
    coreKnowledgeExcerpt: `Notions et antithèses fondamentales du programme officiel :
- La Conscience (Descartes - « Je pense, donc je suis », Rousseau - Conscience juge infaillible, Bergson - Mémoire et choix) vs L'Inconscient (Freud - « Le Moi n'est pas maître dans sa propre maison », Leibniz - Petites perceptions).
- La Liberté (Sartre - « L'homme est condamné à être libre », Descartes - Volonté infinie) vs Déterminisme / Illusion (Spinoza - Ignorance des causes, Marx - Conditions matérielles).
- L'État & La Loi (Hobbes - Léviathan contre l'état de guerre, Rousseau - Obéissance à la loi est liberté) vs L'État oppresseur (Nietzsche - « Le plus froid des monstres froids », Bakounine, Marx).
- La Philosophie (Descartes - Ouvrir les yeux fermés, Sénèque - Règle la vie) vs Inutilité pratique (Marx - Interpréter vs transformer, Jaspers - Absence de résultats apodictiques).
- Le Travail & La Technique (Hegel - Libération par la transformation de la nature, Voltaire - Éloigne l'ennui, le vice et le besoin) vs Aliénation (Marx - Manuscrits de 1844, Arendt, Rabelais - Science sans conscience).`,
    sampleInBookletSubjects: [
      '« Faut-il envisager l\'extinction de la philosophie dans l\'ordonnancement du savoir et de l\'existence ? » (Dissertation modèle intégralement rédigée)',
      'Commentaire de texte philosophique de David Hume (Traité de la nature humaine) : Les faiblesses naturelles de l\'homme et la nécessité compensatoire de la société. (Étude ordonnée et intérêt rédigés)'
    ],
    sampleNewUntreatedSubjects: [
      'L\'État est-il un frein ou un garant de la liberté individuelle ?',
      'La foi religieuse est-elle incompatible avec la rationalité philosophique ?',
      'Le progrès technique contribue-t-il nécessairement au bonheur de l\'homme ?',
      'L\'oubli est-il une défaillance de l\'esprit ou une condition de la vie ?',
      'L\'art a-t-il pour mission d\'imiter la réalité ou d\'en inventer une nouvelle ?'
    ]
  },
  {
    id: 'histoire-methodologie',
    title: 'Histoire Terminale A, C, D : Relations Internationales, Guerre Froide, Décolonisations & Bipolarité',
    discipline: 'histoire',
    disciplineLabel: 'Histoire (Terminale A, C, D)',
    badgeColor: 'amber',
    cycle: 'second_cycle_bac',
    summary: 'Programme officiel complet d\'Histoire Terminale en Côte d\'Ivoire : L\'ONU (Création, Organes, Bilan, Réformes), L\'Ère de la Bipolarisation et la Guerre Froide (1947-1991 : Blocus et Mur de Berlin, Crise de Cuba 1962, Coexistence pacifique, Guerre du Vietnam, Chute de l\'URSS 1991), Le Monde unipolaire et multipolaire (BRICS), La Décolonisation africaine (Nationalismes, Décolonisation pacifique de la Côte d\'Ivoire 1944-1960 avec Félix Houphouët-Boigny, Décolonisation armée de l\'Algérie 1954-1962, L\'Union Africaine).',
    methodologyOverview: `1. TYPOLOGIES DE SUJETS DE DISSERTATION EN HISTOIRE :
   - Sujet chronologique / évolutif : Découpage par césures temporelles majeures (ex: La décolonisation de la Côte d'Ivoire de 1944 à 1960 : 1944-1947 éveil syndical / 1947-1950 répression / 1950-1960 collaboration et souveraineté).
   - Sujet dialectique : Analyse d'une thèse historique -> Limites et contre-exemples -> Bilan global.
   - Sujet tableau / inventaire : Analyse synchronique par axes politique, économique, social et géostratégique.
   - Sujet biographique : Trajectoire d'une grande figure (Félix Houphouët-Boigny, Kwame Nkrumah, De Gaulle).

2. COMMENTAIRE DE DOCUMENTS EN HISTOIRE (Grille NODDACI) :
   - Nature : Discours, traité diplomatique, article de presse, télégramme secret, tableau statistique, carte.
   - Origine : Source officielle, mémoires, archives nationales, journal.
   - Date & Destinataire : Date précise de l'événement et public cible.
   - Auteur : Statut, idéologie et rôle de l'auteur dans l'événement.
   - Contexte historique : Événements immédiats ayant provoqué le texte.
   - Idée générale : Message central résumé sans paraphrase.
   - Questions d'exploitation & Portée : Analyse critique, vérification factuelle et répercussions historiques futures.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Analyse spatio-temporelle et type de plan',
        description: 'Identifier les bornes chronologiques (1945, 1947, 1960, 1962, 1989, 1991) et le type de sujet.',
        keyRules: ['Zéro anachronisme', 'Définir clairement les acteurs et le théâtre des opérations']
      },
      {
        name: 'Étape 2 : Structuration des axes avec dates et faits précis',
        description: 'Chaque sous-partie doit comporter des faits vérifiés, traités officiels, noms d\'acteurs et chiffres repères.',
        keyRules: ['Illustrer chaque argument par des repères historiques précis', 'Formuler des transitions récapitulatives']
      },
      {
        name: 'Étape 3 : Rédaction soignée et conclusion bilan',
        description: 'Introduction en 3 temps (Généralité, Problématique, Plan) et conclusion répondant nettement à la question posée.',
        keyRules: ['Style objectif et impersonnel (bannir le "je")', 'Soigner l\'ouverture prospective']
      }
    ],
    coreKnowledgeExcerpt: `Repères chronologiques incontournables du BAC ivoirien :
- 1945 : Charte de San Francisco (26 juin) / Entrée en vigueur de l'ONU (24 octobre).
- 1947 : Rupture de la Guerre froide (Doctrine Truman 12 mars, Plan Marshall 5 juin, Doctrine Jdanov sept, Kominform oct).
- 1948-1949 : 1ère Crise de Berlin (Blocus soviétique et Pont aérien américain -> Naissance RFA et RDA en 1949).
- 1949 : Marche des femmes sur Grand-Bassam (24 décembre) pour la libération des prisonniers politiques.
- 1950 : Fusillade de Dimbokro (30 janvier, 13 morts) et désapparentement du PDCI-RDA avec le PCF.
- 1954 : Toussaint rouge en Algérie (1er nov, début de la guerre d'indépendance) et Accords de Genève sur l'Indochine.
- 1955 : Conférence de Bandung des pays non-alignés (avril) et signature du Pacte de Varsovie (mai).
- 1960 : Proclamation de l'Indépendance de la Côte d'Ivoire (7 août) par Félix Houphouët-Boigny.
- 1961 : Construction du Mur de Berlin (12-13 août).
- 1962 : Accords d'Évian (18 mars) / Indépendance de l'Algérie (5 juillet) et Crise des missiles de Cuba (octobre).
- 1975 : Accords d'Helsinki sur la sécurité et les droits de l'homme en Europe / Chute de Saïgon (30 avril).
- 1989-1991 : Chute du Mur de Berlin (9 nov 1989), réunification allemande (1990) et dislocation officielle de l'URSS (25 déc 1991).
- 2002 : Naissance de l'Union Africaine (UA) à Durban succédant à l'OUA.`,
    sampleInBookletSubjects: [
      'La décolonisation de la Côte d\'Ivoire de 1944 à 1960 : étapes, luttes et indépendance négociée. (Plan évolutif complet)',
      'La crise des missiles de Cuba (1962) : causes, manifestations et conséquences sur la détente internationale.',
      'L\'Organisation des Nations Unies (ONU) : succès, échecs et perspectives de réformes du Conseil de sécurité.',
      'La guerre d\'Algérie de 1954 à 1962 : de l\'insurrection armée aux Accords d\'Évian.'
    ],
    sampleNewUntreatedSubjects: [
      'Dans quelle mesure la Guerre froide (1947-1991) a-t-elle été une guerre sans affrontement militaire direct entre les superpuissances ?',
      'Le processus d\'intégration africaine de l\'OUA à l\'UA : avancées, blocages et défis d\'avenir.',
      'D\'un monde bipolaire à un monde multipolaire (1991 à nos jours) : l\'émergence des BRICS face à l\'hégémonie occidentale.'
    ]
  },
  {
    id: 'geographie-methodologie',
    title: 'Géographie Terminale A, C, D : Économie Ivoirienne, Corée du Sud, CEDEAO & Relations UE-ACP',
    discipline: 'geographie',
    disciplineLabel: 'Géographie (Terminale A, C, D)',
    badgeColor: 'emerald',
    cycle: 'second_cycle_bac',
    summary: 'Programme officiel complet de Géographie Terminale en Côte d\'Ivoire : Les Fondements et Dynamiques de l\'Économie Ivoirienne (Atouts naturels, capital humain 77,7% <35 ans, politique libérale et CEPICI, agriculture 33% du PIB, 1er mondial cacao, industrie 20% du PIB, SIR, ports Abidjan et San-Pédro, secteur informel 60%), La Corée du Sud (Miracle du fleuve Han, chaebols Samsung/Hyundai, étapes d\'industrialisation), L\'Intégration régionale (CEDEAO 1975, ECOMOG, libre circulation) et la Coopération Nord-Sud (Accords UE-ACP de Yaoundé, Lomé I à IV avec STABEX/SYSMIN, Cotonou 2000).',
    methodologyOverview: `1. LA DISSERTATION EN GÉOGRAPHIE :
   - Structure en 2 ou 3 axes : I. Atouts, potentialités et réalisations spatiales -> II. Freins, déséquilibres régionaux et contraintes -> III. Politiques d'aménagement et solutions durables.
   - Utilisation impérative d'indicateurs chiffrés récents (PIB, population, production, exportations) et de repères spatiaux (villes, ports, axes de communication).

2. LE COMMENTAIRE DE DOCUMENTS GÉOGRAPHIQUES :
   - Cartes thématiques, tableaux statistiques, graphiques d'évolution (courbes, histogrammes).
   - Analyse spatiale : décrire la répartition, calculer les taux d'évolution et expliquer les facteurs explicatifs humains, économiques et politiques.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Définition de l\'espace et problématique géographique',
        description: 'Délimiter le territoire d\'étude (Côte d\'Ivoire, Corée du Sud, Espace CEDEAO, Espace UE-ACP) et poser les enjeux de développement.',
        keyRules: ['Vocabulaire géographique précis (façade maritime, hub, hinterland, PNB, PIB, tertiairisation)', 'Poser la problématique spatio-économique']
      },
      {
        name: 'Étape 2 : Développement par facteurs et impacts territoriaux',
        description: 'Articuler les facteurs naturels, humains, politiques et économiques avec des chiffres officiels et des noms d\'entreprises/structures.',
        keyRules: ['Citer les structures ivoiriennes : ANADER, CNRA, CCC, CEPICI, SIR, PND', 'Citer les chaebols coréens : Samsung, Hyundai, POSCO, LG']
      },
      {
        name: 'Étape 3 : Bilan et perspectives d\'aménagement',
        description: 'Synthétiser les performances et proposer des solutions d\'aménagement équilibré et durable du territoire.',
        keyRules: ['Encourager la transformation locale des matières premières', 'Promouvoir l\'intégration sous-régionale']
      }
    ],
    coreKnowledgeExcerpt: `Chiffres et repères clés de Géographie Terminale (BAC CI) :
- Côte d'Ivoire : Population jeune (77,7 % < 35 ans, taux naturel 3,8 %/an), 560 km de façade maritime, 2 grands ports (Abidjan - 1er port thonier et hub sous-régional, San-Pédro - 1er port mondial exportateur de cacao). Agriculture = 33 % du PIB, 70 % des exportations, 60 % des emplois actifs. 1er producteur mondial de cacao, 1er producteur africain de caoutchouc naturel et de noix de cajou. Industrie = 18-20 % du PIB (SIR, agroalimentaire, BTP). Secteur informel = 60 % des emplois.
- Corée du Sud : Territoire montagneux à 70 % (chaîne du Taebaek), 51 millions d'habitants, révolution éducative (alphabétisation de 22% à 88% en 1970). Miracle du fleuve Han. Étapes : substitution aux importations (1953-61) -> exportations légères (1961-73) -> industries lourdes et électronique de pointe (1973+ avec Samsung, Hyundai, POSCO, KAIST). 6e rang mondial automobile et acier.
- CEDEAO : Fondée le 28 mai 1975 à Lagos (siège à Abuja, 15 États membres), passeport CEDEAO, ECOMOG, Ecobank. Limites : échanges intra-communautaires < 12 %, multiplicité des monnaies, insécurité au Sahel.
- Relations UE-ACP : Création du groupe ACP en 1975 à Georgetown (79 pays). Accords de Lomé I à IV (1975-1989) avec instruments STABEX (agricole) et SYSMIN (minier), Accord de Cotonou (2000). Défis : détérioration des termes de l'échange et endettement.`,
    sampleInBookletSubjects: [
      'La place de l\'industrie dans l\'économie ivoirienne : atouts, réalisations et défis d\'avenir. (Tableau d\'analyse complet)',
      'Les fondements humains et politiques du développement économique de la Côte d\'Ivoire.',
      'La Corée du Sud : un territoire aux contraintes naturelles fortes devenu une puissance économique émergente.',
      'La CEDEAO : réalisations, blocages et perspectives d\'intégration régionale.'
    ],
    sampleNewUntreatedSubjects: [
      'L\'agriculture ivoirienne face au défi de la transformation locale et de la préservation du couvert forestier.',
      'Le secteur des transports en Côte d\'Ivoire : vecteur de désenclavement national et moteur de l\'intégration sous-régionale.',
      'Les relations UE-ACP : un partenariat Nord-Sud modèle ou un facteur de dépendance économique ?'
    ]
  },
  {
    id: 'math-lycee',
    title: 'Mathématiques (2nde, 1ère, Terminale - Séries A, C, D, E) : Analyse, Suites & Complexes',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques (2nde-Tle)',
    badgeColor: 'sky',
    cycle: 'second_cycle_bac',
    summary: 'Méthodologie experte pour les classes de 2nde, 1ère et Terminale (Séries C, D, E, A, TI) : fonctions polynômes, dérivation, suites arithmétiques et géométriques, barycentres, fonctions exponentielle et logarithme, limites et TVI, calcul intégral, nombres complexes et similitudes directes, probabilités conditionnelles et lois binomiales.',
    methodologyOverview: `1. Identification & Décodage des Hypothèses :
   - Relever le domaine de définition Df, les ensembles de référence (R, C, N, Z), les conditions d'existence et les hypothèses initiales.
   - Poser clairement l'objectif mathématique (résoudre, démontrer, calculer, encadrer, étudier les variations, interpréter géométriquement).
2. Justifications et Théorèmes Clés :
   - Citer explicitement le théorème ou la propriété appliquée avant chaque calcul majeur (ex: Théorème des valeurs intermédiaires / bijection, Dérivée d'une fonction composée, Intégration par parties, Raisonnement par récurrence, Équations différentielles).
3. Rigueur de la Rédaction Mathématique :
   - Employer les connecteurs logiques de déduction : « Soit... », « On sait que... », « Or... », « D'où... », « Par conséquent... », « On en déduit que... ».
   - Présenter les étapes intermédiaires de calcul sans saut d'étape opaque.
4. Encadrement & Vérification Finale :
   - Encadrer ou mettre en valeur chaque résultat final avec son interprétation géométrique ou probabiliste.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Analyse de l\'énoncé & Hypothèses',
        description: 'Identifier le cadre mathématique, le domaine de validité et poser les variables.',
        keyRules: ['Déterminer l\'ensemble de définition Df ou le cadre géométrique', 'Préciser les conditions aux limites et hypothèses']
      },
      {
        name: 'Étape 2 : Démonstration méthodique & Justification théorique',
        description: 'Appliquer les théorèmes du programme avec rédaction canonique étape par étape.',
        keyRules: ['Justifier les hypothèses avant d\'appliquer un théorème', 'Expliciter l\'initialisation, l\'hérédité et la conclusion pour les récurrences']
      },
      {
        name: 'Étape 3 : Calculs détaillés & Tableaux de synthèse',
        description: 'Développer les calculs analytiques et dresser les tableaux de signes, de variations ou d\'effectifs.',
        keyRules: ['Dresser un tableau complet avec limites et valeurs remarquables', 'Vérifier la cohérence numérique des résultats']
      },
      {
        name: 'Étape 4 : Conclusion & Interprétation géométrique/physique',
        description: 'Fournir la conclusion finale claire, interpréter les asymptotes, tangentes, positions relatives ou probabilités.',
        keyRules: ['Encadrer le résultat final', 'Donner l\'interprétation géométrique ou concrète']
      }
    ],
    coreKnowledgeExcerpt: `Programme de Mathématiques (2nde à Terminale) :
- 2nde : Fonctions affines, polynômes du second degré, vecteurs, produit scalaire, géométrie analytique.
- 1ère (Séries C, D, A) : Nombre dérivé, fonction dérivée, étude des variations, suites numériques (arithmétiques, géométriques), trigonométrie circulaire, barycentres dans le plan et l'espace, dénombrement.
- Terminale (Séries C, D, E, A, TI) : Fonctions exponentielles et logarithmes népériens, limites et croissances comparées, TVI, calcul intégral et intégration par parties, équations différentielles, suites et récurrence, nombres complexes et similitudes planes directes, probabilités conditionnelles et loi binomiale, lois à densité.`,
    sampleInBookletSubjects: [
      'Étude complète de la fonction f(x) = (x - 2) * e^x + 1 : Domaine, limites, dérivée, variations, branches infinies et tracé de courbe (Problème canonique Terminale)',
      'Suites & Récurrence 1ère/Terminale : Soit U0 = 1 et U(n+1) = (2Un + 3)/(Un + 4). Démontrer par récurrence que 0 < Un < 1 et étudier sa convergence.',
      'Résolution dans C de l\'équation z² - 2(1 + cos θ)z + 2(1 + cos θ) = 0 et interprétation géométrique des racines (Exercice Terminale C/D)'
    ],
    sampleNewUntreatedSubjects: [
      'Une urne contient 4 boules blanches et 6 boules noires. On tire simultanément 3 boules. Déterminer la loi de probabilité du nombre de boules blanches tirées et calculer son espérance.',
      'Dans le plan muni d\'un repère orthonormé, étudier les branches infinies et dresser le tableau de variations de la fonction f(x) = ln((x + 1)/(x - 1)).',
      'Résoudre dans R l\'inéquation : e^(2x) - 3e^x + 2 <= 0.',
      'Soit f(x) = 2x² - 4x + 1 en classe de 2nde. Déterminer sa forme canonique, son extremum et dresser son tableau de variations.'
    ]
  },
  {
    id: 'math-superieur-universite',
    title: 'Mathématiques Supérieur & Université (Licence L1/L2/L3, Prépa CPGE, BTS) : Algèbre Linéaire, Analyse Réelle & Séries',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques (Supérieur & Université)',
    badgeColor: 'sky',
    cycle: 'superieur_universite',
    summary: 'Cadre méthodologique formel pour l\'enseignement supérieur et les classes préparatoires : espaces vectoriels, applications linéaires, diagonalisation et valeurs propres, développements limités et formules de Taylor, séries numériques et entières, intégrales généralisées, équations différentielles linéaires d\'ordre n, topologie des espaces métriques et probabilités continues.',
    methodologyOverview: `1. Identification & Formalisation des Hypothèses :
   - Énoncer les espaces de travail (E-ev sur K = R ou C, domaine ouvert U, intervalle I).
   - Préciser la classe de régularité (C^0, C^1, C^k, C^∞, L^1, L^2).
2. Démonstrations & Théorèmes Fondamentaux :
   - Citer les théorèmes avec vérification explicite des hypothèses (Théorème du rang, Bolzano-Weierstrass, Heine, Théorème de convergence dominée, Règle de d'Alembert/Cauchy, Théorème de Cauchy-Lipschitz).
3. Rigueur Analytique et Algébrique :
   - Traiter les équivalents, dominations (Landau o, O, ~) avec précaution (jamais d'équivalents terme à terme dans une somme).
   - Manipuler les bases, matrices de passage P^-1 A P et polynômes caractéristiques avec exactitude.
4. Rédaction Universitaire & Concours :
   - Distinguer clairement l'analyse (recherche nécessaire) de la synthèse (condition suffisante).
   - Conclure rigoureusement sans ellipse injustifiée.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Analyse des structures et hypothèses de départ',
        description: 'Vérifier la dimension des espaces, la complétude, la compacité ou la connexité si requises.',
        keyRules: ['Poser rigoureusement les quantificateurs (∀, ∃)', 'Vérifier que les opérations sont bien définies']
      },
      {
        name: 'Étape 2 : Démonstration et calcul pas à pas',
        description: 'Appliquer les théorèmes généraux avec justification complète de chaque lemme intermédiaire.',
        keyRules: ['Justifier toutes les hypothèses avant d\'invoquer un théorème', 'Garder les valeurs et constantes exactes']
      },
      {
        name: 'Étape 3 : Synthèse et validation du résultat',
        description: 'Vérifier la cohérence matricielle, dimensionnelle ou asymptotique et conclure formellement.',
        keyRules: ['Encadrer le résultat final', 'Vérifier les cas limites (n=0, x->0, borne)']
      }
    ],
    coreKnowledgeExcerpt: `Programme d'Enseignement Supérieur (L1, L2, L3, CPGE MPSI/PCSI/MP/PSI) :
- Algèbre linéaire & bilinéaire : Espaces vectoriels, familles libres/génératrices/bases, théorème du rang, produit matriciel, déterminants, valeurs et vecteurs propres, diagonalisation, trigonalisation, produit scalaire euclidien et procédé de Gram-Schmidt.
- Analyse réelle et complexe : Suites réelles (critères de Cauchy, suites adjacentes), continuité uniforme, développements limités et asymptotiques, séries numériques (séries de Riemann, critères de comparaison), séries entières et séries de Fourier, intégrales impropres et intégrales à paramètres.
- Équations différentielles : Systèmes différentiels linéaires à coefficients constants, méthode de variation de la constante, équations non-linéaires fondamentales.
- Probabilités & Statistiques : Variables aléatoires discrètes et à densité (loi normale, exponentielle, uniforme), espérance, variance, covariance, inégalités de Bienaymé-Tchebychev et loi forte des grands nombres.`,
    sampleInBookletSubjects: [
      'Algèbre linéaire L1/L2 : Soit E = R3[X]. Soit l\'endomorphisme u défini par u(P) = (X² - 1)P\'\' + 2XP\'. 1) Déterminer la matrice de u dans la base canonique. 2) Trouver les valeurs propres et les sous-espaces propres. 3) u est-il diagonalisable ?',
      'Analyse L2/CPGE : Étudier la convergence de l\'intégrale généralisée I = ∫ (de 0 à +∞) (sin(x) / x) dx et calculer sa valeur par la méthode des intégrales à paramètre.',
      'Séries numériques L1/L2 : Déterminer la nature de la série de terme général Un = ln(1 + 1/n) - 1/n et donner un équivalent de son reste Rn.'
    ],
    sampleNewUntreatedSubjects: [
      'Soit A une matrice carrée d\'ordre 3 telle que A^3 - 3A + 2I = 0. Déterminer les valeurs propres possibles de A et montrer que A est inversible.',
      'Déterminer le développement limité à l\'ordre 3 au voisinage de 0 de la fonction f(x) = (1 + x)^(1/x).',
      'Calculer l\'intégrale double ∬_D (x² + y²) dx dy sur le disque D = {(x,y) ∈ R² : x² + y² ≤ 1}.',
      'Résoudre l\'équation différentielle du second ordre : y\'\' - 4y\' + 4y = e^(2x) / (1 + x²).'
    ]
  },
  // ==========================================
  // 6. PHYSIQUE - CHIMIE (Collège & Lycée)
  // ==========================================
  {
    id: 'physique-chimie-expert',
    title: 'Physique - Chimie (Collège & Lycée : Séries C, D, E, TI) : Mécanique, Électricité, Chimie Organique & Solutions',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique - Chimie',
    badgeColor: 'amber',
    cycle: 'second_cycle_bac',
    summary: 'Méthodologie experte de résolution en Physique-Chimie : identification du système et du référentiel, bilan des forces et inventaire des réactifs, formule littérale avec symboles normalisés, analyse dimensionnelle, calculs sans saut d\'étape avec unités SI et chiffres significatifs, interprétation physique/chimique des résultats.',
    methodologyOverview: `1. PHYSIQUE : MÉTHODE CANONIQUE DE RÉSOLUTION :
   - Définir précisément le SYSTÈME d'étude {objet ou ensemble} et le RÉFÉRENTIEL d'espace et de temps (ex: référentiel terrestre supposé galiléen).
   - Faire le Bilan exhaustif des forces appliquées avec schéma vectoriel (Poids P, Réaction R, Frottements f, Tension T, Force électrique F = qE, Force de Lorentz F = qv^B).
   - Énoncer le théorème ou la loi fondamentale (2nde Loi de Newton : Σ F = m*a, Théorème de l'Énergie Cinétique, Conservation de l'Énergie Mécanique, Loi des Mailles / Nœuds, etc.).
   - Établir l'ÉQUATION DIFFÉRENTIELLE ou la FORMULE LITTÉRALE avant tout calcul numérique.
   - Effectuer l'APPLICATION NUMÉRIQUE avec unités du Système International (SI) et respect des CHIFFRES SIGNIFICATIFS.

2. CHIMIE : DÉMARCHE OPÉRATOIRE & ANALYSE RÉACTIONNELLE :
   - Écrire et équilibrer l'équation-bilan de la réaction chimique (réactions acido-basiques, oxydoréduction avec demi-équations, estérification).
   - Dresser le TABLEAU D'AVANCEMENT avec l'état initial, intermédiaire et final, et déterminer le réactif limitant (x_max).
   - Exprimer les grandeurs (Concentration C = n/V, pH = -log[H3O+], pKa, Vitesse volumique de réaction v = (1/V)*(dx/dt), Constante d'équilibre K, Rendement η).
   - Interpréter l'équivalence (relation de dosage : Ca*Va = Cb*Vb à l'équivalence).`,
    methodologySteps: [
      {
        name: 'Étape 1 : Cadrage du système, hypothèses et inventaire des grandeurs',
        description: 'Préciser le système, le référentiel, lister les données avec leurs unités SI et repérer l\'inconnue.',
        keyRules: ['Définir le système et le référentiel galiléen', 'Convertir toutes les données en unités SI (m, s, kg, A, mol/L, V, J)']
      },
      {
        name: 'Étape 2 : Justification théorique et expression littérale',
        description: 'Citer la loi physique ou le principe chimique applicable et isoler littéralement la variable cherchée.',
        keyRules: ['Toujours exprimer la formule littérale avant d\'insérer les nombres', 'Vérifier l\'homogénéité par analyse dimensionnelle']
      },
      {
        name: 'Étape 3 : Application numérique rigoureuse et chiffres significatifs',
        description: 'Remplacer les valeurs numériques avec puissances de dix et calculer sans approximation prématurée.',
        keyRules: ['Respecter le nombre de chiffres significatifs de la donnée la moins précise', 'Accompagner le résultat de son unité légale SI']
      },
      {
        name: 'Étape 4 : Interprétation concrète et validation du résultat',
        description: 'Commenter le résultat obtenu au regard du phénomène physique ou de l\'équilibre chimique.',
        keyRules: ['Vérifier l\'ordre de grandeur', 'Conclure par une phrase explicite']
      }
    ],
    coreKnowledgeExcerpt: `Programme fondamental de Physique-Chimie (Collège à Terminale) :
- Mécanique : Cinématique du point, 2e loi de Newton, mouvement de projectiles dans un champ de pesanteur uniforme, mouvement de particules chargées dans un champ électrostatique/magnétique, satellites et lois de Kepler, oscillateurs mécaniques (pendule élastique, énergie mécanique).
- Électricité & Ondes : Dipôles RC, RL, RLC (charge/décharge, équations différentielles, oscillations libres et amorties), propagation des ondes (fréquence, longueur d'onde λ = v*T), optique géométrique (lentilles minces convergentes, grandissement γ, vergence C = 1/f'), physique nucléaire (radioactivité α, β-, β+, γ, demi-vie t1/2, défaut de masse et énergie de liaison E = Δm*c²).
- Chimie : Cinétique chimique (facteurs cinétiques, catalyse), équilibres chimiques et quotient de réaction, acides et bases de Brönsted (pH, Ka, pKa, domaine de prédominance, solution tampon), titrages pH-métriques et colorimétriques, chimie organique (alcools, aldéhydes, cétones, acides carboxyliques, esters, estérification/hydrolyse, saponification, polymères).`,
    sampleInBookletSubjects: [
      'Étude du mouvement d\'un projectile lancé avec une vitesse v0 faisant un angle α avec l\'horizontale dans le champ de pesanteur g : Équations horaires, trajectoire, portée et flèche.',
      'Dosage d\'un acide faible HA de concentration Ca inconnue par une solution d\'hydroxyde de sodium (Na+ + HO-) de concentration Cb : Équation de réaction, tableau d\'avancement, pH à l\'équivalence et à la demi-équivalence (pH = pKa).'
    ],
    sampleNewUntreatedSubjects: [
      'Un solide de masse m = 200 g glisse sur un plan incliné d\'un angle θ = 30° avec frottements f = 0,5 N. Déterminer l\'accélération du centre d\'inertie et la vitesse au bas de la pente.',
      'Décharge d\'un condensateur de capacité C = 100 µF à travers un conducteur ohmique de résistance R = 1 kΩ : Établir l\'équation différentielle de la tension u_c(t), déterminer la constante de temps τ et calculer la durée au bout de laquelle 99% de l\'énergie est dissipée.',
      'On réalise l\'estérification d\'une mole d\'acide éthanoïque et d\'une mole d\'éthanol. Calculer la composition du mélange à l\'équilibre sachant que la constante K = 4 et déterminer le rendement de la réaction.',
      'Désintégration du Cobalt-60 (émetteur β- et γ de demi-vie T = 5,27 ans). Calculer la constante radioactive λ, l\'activité initiale d\'un échantillon de 1 µg et son activité au bout de 15 ans.'
    ]
  },

  // ==========================================
  // 7. SCIENCES DE LA VIE ET DE LA TERRE (SVT)
  // ==========================================
  {
    id: 'svt-sciences-vie-terre',
    title: 'SVT (Sciences de la Vie et de la Terre - Collège & Lycée Séries D, C, A) : Génétique, Immunologie, Neuro & Géologie',
    discipline: 'svt',
    disciplineLabel: 'SVT',
    badgeColor: 'emerald',
    cycle: 'second_cycle_bac',
    summary: 'Méthodologie du raisonnement scientifique en SVT : Restitution organisée des connaissances (plan structuré avec introduction, schéma fonctionnel et conclusion) et Exploitation méthodique de documents (Je constate d\'après le graphe/document... Or je sais que... J\'en conclus que...).',
    methodologyOverview: `1. EXERCICE 1 - RESTITUTION ORGANISÉE DES CONNAISSANCES (ROC) :
   - Introduction : Cadrer le sujet, définir le concept biologique/géologique clé, poser la problématique et annoncer le plan.
   - Développement structuré : Présenter les mécanismes biologiques avec précision moléculaire et cellulaire, relier les causes aux effets.
   - Schéma fonctionnel ou bilan obligatoire : Soigné, titré, légendé avec code couleur clair.
   - Conclusion : Bilan synthétique répondant à la problématique et élargissement fonctionnel.

2. EXERCICE 2 - RAISONNEMENT SCIENTIFIQUE & ANALYSE DE DOCUMENTS (Démarche I-S-O-C) :
   - Saisie des informations (« Je constate / J\'observe que... ») : Relever les données quantitatives et qualitatives du document avec chiffres précis et unités.
   - Mobilisation des connaissances (« Or je sais que... ») : Rappeler la notion du cours qui éclaire ces observations.
   - Mise en relation & Déduction (« Donc j\'en déduis que... ») : Expliquer le mécanisme sous-jacent.
   - Synthèse globale : Répondre rigoureusement à la question posée.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Analyse des documents et relevé précis des variables',
        description: 'Identifier les paramètres mesurés (abscisse, ordonnée, conditions témoins et expérimentales).',
        keyRules: ['Citer les valeurs chiffrées avec leurs unités', 'Comparer les états initiaux et finaux ou conditions témoins']
      },
      {
        name: 'Étape 2 : Mobilisation des connaissances biologiques ou géologiques',
        description: 'Associer les résultats observés aux notions théoriques précises (protéines, synapses, chromosomes, plaques).',
        keyRules: ['Vocabulaire scientifique rigoureux (ex: endocytose, antigène, allèle récessif, subduction)']
      },
      {
        name: 'Étape 3 : Déduction logique et conclusion argumentée',
        description: 'Articuler l\'observation et le savoir pour déduire la réponse avec certitude scientifique.',
        keyRules: ['Utiliser les connecteurs déductifs : Par conséquent, Ce qui prouve que', 'Dresser le schéma fonctionnel si demandé']
      }
    ],
    coreKnowledgeExcerpt: `Notions indispensables du programme de SVT :
- Génétique & Hérédité : Mitose, Méiose (brassage interchromosomique en anaphase I, brassage intrachromosomique / crossing-over en prophase I), monohybridisme et dihybridisme mendélien, gènes liés et indépendants, arbre généalogique et transmission de maladies héréditaires (autosomique/gonosomique, dominante/récessive).
- Immunologie & Défense de l'organisme : Réaction inflammatoire innée (phagocytose), immunité adaptative humorale (LB, plasmocytes, anticorps / immunoglobulines) et cellulaire (LT4 / auxiliaires, LT8 / cytotoxiques), le VIH et l'immunodéficience acquise, vaccins et mémoire immunitaire.
- Communication nerveuse & Régulation : Réflexe myotatique, potentiel de repos et potentiel d'action, propagation saltatoire, transmission synaptique neuro-neuronique et neuro-musculaire (acétylcholine), contrôle hormonal de la reproduction (axe hypothalamo-hypophysaire, FSH, LH, rétrocontrôle ovarien œstrogènes/progestérone).
- Géologie & Tectonique : Lithosphère, asthénosphère, frontières de plaques, zones de subduction (métamorphisme haute pression, volcanisme andésitique), zones de collision (orogenèse), dérive des continents et paléomagnétisme.`,
    sampleInBookletSubjects: [
      'Génétique formelle : Analyse d\'un croisement de drosophiles pour deux caractères (couleur du corps et longueur des ailes) avec calcul des pourcentages de phénotypes recombinés et établissement de la carte factorielle.',
      'Immunologie : Expliquer par un texte illustré d\'un schéma bilan comment la coopération cellulaire entre LT4, LT8 et LB permet l\'élimination d\'un antigène viral.'
    ],
    sampleNewUntreatedSubjects: [
      'À partir de l\'analyse d\'un arbre généalogique familial, déterminer le mode de transmission d\'une anomalie héréditaire (dominant/récessif, porté par un autosome ou le chromosome X) et calculer la probabilité pour un futur enfant d\'être atteint.',
      'Expliquer le mécanisme de genèse et de propagation du potentiel d\'action le long d\'une fibre nerveuse myélinisée et son franchissement d\'une synapse neuromusculaire.',
      'Montrer comment les mécanismes de la subduction océanique conduisent à la fusion partielle de la péridonite et à la genèse du magmatisme des zones de convergence.',
      'La glycémie est une constante biologique régulée autour de 1 g/L. Expliquer le rôle des cellules alpha et bêta des îlots de Langerhans du pancréas lors d\'une hyperglycémie post-prandiale.'
    ]
  },

  // ==========================================
  // 8. ANGLAIS (Collège & Lycée)
  // ==========================================
  {
    id: 'anglais-exam-excellence',
    title: 'Anglais (Collège & Lycée / BEPC & BAC) : Reading Comprehension, Grammar in Context & Model Essay',
    discipline: 'anglais',
    disciplineLabel: 'Anglais',
    badgeColor: 'blue',
    cycle: 'second_cycle_bac',
    summary: 'Méthodologie complète des épreuves d\'anglais (BEPC & BAC) : Compréhension de texte (Justifications textuelles exactes, QCM, Vrai/Faux), Maîtrise linguistique (Grammar & Tenses, Passive Voice, Conditionals, Reported Speech) et Production écrite (Formal/Informal Letter, Opinion Essay, Article avec connecteurs logiques).',
    methodologyOverview: `1. PART ONE - READING COMPREHENSION (Text Analysis) :
   - Direct Wh- Questions : Answer clearly in full sentences without copying unnecessary lines.
   - True / False / Not Mentioned : State T or F, then quote the exact supporting sentence from the text between quotation marks with line reference.
   - Vocabulary in context : Identify contextual synonyms or antonyms matching the grammatical form (verb for verb, noun for noun).

2. PART TWO - LANGUAGE IN USE / GRAMMAR :
   - Tenses & Aspects : Present Simple / Continuous, Past Simple / Past Perfect, Present Perfect Simple/Continuous.
   - Grammatical Transformations : Active to Passive voice, Direct to Reported Speech, Conditionals (Types 0, 1, 2, 3), Wish / If only, Modals (must, should, ought to, have to, might).
   - Word Building : Suffixes, Prefixes, Parts of speech.

3. PART THREE - GUIDED WRITING / ESSAY :
   - Introduction : Hook (General context) + Paraphrase of topic + Clear Thesis Statement.
   - Body Paragraphs (2 to 3) : Topic Sentence + Explanation + Concrete Real-World Example + Concluding sentence.
   - Linking Words / Transitions : First of all, Furthermore, Moreover, On the one hand / On the other hand, However, As a consequence, Therefore.
   - Conclusion : Summary of main arguments + Final thought / Recommendation.`,
    methodologySteps: [
      {
        name: 'Step 1 : Text Decoding & Question Analysis',
        description: 'Read the text thoroughly, underline keywords in questions and locate relevant paragraphs.',
        keyRules: ['Never lift entire chunks of text when personal formulation is requested', 'Always include line references for T/F justifications']
      },
      {
        name: 'Step 2 : Grammar Accuracy & Structure Application',
        description: 'Apply grammar transformation rules systematically (concordance of tenses, subject-verb agreement).',
        keyRules: ['Check irregular verbs forms', 'Respect punctuation and capital letters']
      },
      {
        name: 'Step 3 : Essay Planning & Cohesive Writing',
        description: 'Organize the essay with structured paragraphs and varied linking words.',
        keyRules: ['1 Idea = 1 Paragraph with Topic Sentence', 'Use advanced academic vocabulary and avoid colloquialisms']
      }
    ],
    coreKnowledgeExcerpt: `Key English Grammar & Thematic syllabus :
- Grammar Masterpoints : Conditionals (If + past simple, would + V / If + past perfect, would have + V3), Passive voice (Be + past participle), Reported speech (backshift of tenses and pronouns), Relative clauses (who, which, whose, where, that), Question tags, Gerund vs Infinitive, Connectors of contrast (although, despite, whereas, however).
- Themes (BEPC & BAC) : Youth and Technology (Social media, Artificial intelligence), Climate Change and Environmental Preservation, Education and Gender Equality, Brain Drain and Migration, Cultural Heritage and Globalization, Health and Epidemics, Peace and Civic Responsibility.`,
    sampleInBookletSubjects: [
      'Reading Comprehension & Essay : "The impact of artificial intelligence on youth employment". 1- Comprehension questions, 2- Grammar transformations (Passive voice & Conditionals), 3- Write a 150-200 word essay presenting the pros and cons of AI.',
      'BAC Essay : "Some people believe that traditional cultures are being destroyed by globalization. Do you agree or disagree? Write an argumentative essay to support your viewpoint."'
    ],
    sampleNewUntreatedSubjects: [
      'Write a formal letter to the Minister of Youth and Employment suggesting three concrete measures to promote entrepreneurship among young high school graduates.',
      '"Social media platforms do more harm than good to students\' academic performance." Discuss this statement by providing two arguments in favour and two against, then give your personal conclusion.',
      'Turn the following sentences from active to passive voice, and from direct into reported speech with full grammatical justifications.',
      'Write a speech delivered at your school assembly about the importance of girls\' education in developing nations.'
    ]
  },

  // ==========================================
  // 9. ALLEMAND (Collège & Lycée)
  // ==========================================
  {
    id: 'allemand-exam-excellence',
    title: 'Allemand (Collège & Lycée / BEPC & BAC) : Textverständnis, Grammatik, Übersetzung & Aufsatz',
    discipline: 'allemand',
    disciplineLabel: 'Allemand',
    badgeColor: 'violet',
    cycle: 'second_cycle_bac',
    summary: 'Méthodologie complète des épreuves d\'Allemand : Compréhension de texte (Textverständnis : Fragen, Richtig/Falsch mit Textbelegen), Maîtrise de la langue (Grammatik : Deklination, Kasus, Passiv, Konjunktiv II, Nebensätze) et Expression écrite (Freier Aufsatz / Stellungnahme mit Konnektoren).',
    methodologyOverview: `1. TEIL 1 - TEXTVERSTÄNDNIS (Compréhension de texte) :
   - W-Fragen beantworten : Antworten in vollständigen Sätzen (Subjekt + Verb + Ergänzungen) ohne blindes Abschreiben.
   - Richtig oder Falsch (R / F) : Entscheidung klar angeben und das genaue Zitat aus dem Text mit Zeilenangabe (« ... », Zeile X) anführen.
   - Wortschatz : Synonyme und Antonyme im Textkontext finden.

2. TEIL 2 - GRAMMATIK & STRUKTUREN (Grammaire & Syntaxe) :
   - Deklination der Adjektive (starke, schwache und gemischte Deklination nach Kasus : Nominativ, Akkusativ, Dativ, Genitiv).
   - Satzbau & Nebensätze : Verbletztstellung bei Kausalsätzen (weil, da), Finalsätzen (damit, um... zu), Konditionalsätzen (wenn), Konzessivsätzen (obwohl) und Relativsätzen.
   - Passivbildung (werden + Partizip II) und Konjunktiv II (Höflichkeit, Wunsch, Irrealität mit würde + Infinitiv oder wäre / hätte).

3. TEIL 3 - FREIER AUFSATZ & STELLUNGNAHME (Expression écrite) :
   - Einleitung : Thema vorstellen und Problematik formulieren.
   - Hauptteil : Mindestens 2 gut strukturierte Argumente mit Beispielen aus dem Alltag oder Afrika/Deutschland.
   - Konnektoren verwenden : Zuerst, Außerdem, Darüber hinaus, Einerseits... andererseits, Meiner Meinung nach, Schließlich.
   - Schluss : Zusammenfassung und persönlicher Standpunkt.`,
    methodologySteps: [
      {
        name: 'Schritt 1 : Textanalyse & Fragenverständnis',
        description: 'Den Text sorgfältig lesen, Schlüsselwörter in den Fragen markieren und Textstellen lokalisieren.',
        keyRules: ['Textbelege immer mit Anführungszeichen und Zeilennummer angeben', 'Vollständige Sätze formulieren']
      },
      {
        name: 'Schritt 2 : Grammatische Regeln exakt anwenden',
        description: 'Endungen der Adjektive, Verbstellung im Haupt- und Nebensatz und Zeitenfolge beachten.',
        keyRules: ['Im Nebensatz steht das konjugierte Verb am Ende', 'Präpositionen bestimmen den Kasus (Dativ / Akkusativ)']
      },
      {
        name: 'Schritt 3 : Aufsatzstruktur & Argumentation',
        description: 'Den Aufsatz in Einleitung, Hauptteil mit Konnektoren und Schluss gliedern.',
        keyRules: ['Jedes Argument mit einem konkreten Beispiel belegen', 'Auf korrekte Groß-/Kleinschreibung der Nomen achten']
      }
    ],
    coreKnowledgeExcerpt: `Wichtige Grammatik- und Themenbereiche im Fach Deutsch :
- Grammatikschwerpunkte : Kasuslehre (Präpositionen mit Dativ : aus, bei, mit, nach, seit, von, zu ; mit Akkusativ : durch, für, gegen, ohne, um ; Wechselpräpositionen : an, auf, hinter, in, neben, über, unter, vor, zwischen), Passiv (Präsens, Präteritum, Perfekt), Konjunktiv II der Gegenwart und Vergangenheit, Infinitivkonstruktionen (um...zu, ohne...zu, anstatt...zu).
- Zentrale Themen : Jugend und Beruf (Ausbildung, Praktikum, Arbeitswelt), Umweltschutz und Klimawandel (Erneuerbare Energien, Mülltrennung), Digitalisierung und Soziale Medien, Migration und Integration, Tradition und Moderne in Afrika und Europa, Kultur und Schulalltag.`,
    sampleInBookletSubjects: [
      'Textverständnis und Aufsatz : "Die Rolle der Solarenergie für die Entwicklung in afrikanischen Ländern". 1- Fragen zum Text, 2- Grammatik (Passiv & Nebensätze mit weil/obwohl), 3- Aufsatz : Warum ist Umweltschutz heute für die Jugend so wichtig?',
      'BAC Aufsatz : "Manche Jugendliche bevorzugen das Leben in der Großstadt, andere bleiben lieber auf dem Lande." Was ist Ihre Meinung dazu? Begründen Sie Ihren Standpunkt mit Argumenten.'
    ],
    sampleNewUntreatedSubjects: [
      'Verfassen Sie einen Leserbrief an eine Jugendzeitschrift über die Vor- und Nachteile von Smartphones im Unterricht.',
      'Setzen Sie die Sätze ins Passiv und verwandeln Sie die Hauptsätze in Nebensätze mit den Konjunktionen "obwohl", "weil" und "damit".',
      '"Freiwilligenarbeit und bürgerschaftliches Engagement machen junge Menschen solidarischer." Nehmen Sie Stellung zu dieser Aussage.',
      'Übersetzen Sie den folgenden kurzen Textabschnitt ins Französische (Version) unter Beachtung der genauen Bedeutung.'
    ]
  },

  // ==========================================
  // 10. ESPAGNOL (Collège & Lycée)
  // ==========================================
  {
    id: 'espagnol-exam-excellence',
    title: 'Espagnol (Collège & Lycée / BEPC & BAC) : Comprensión de Lectura, Gramática y Redacción',
    discipline: 'espagnol',
    disciplineLabel: 'Espagnol',
    badgeColor: 'rose',
    cycle: 'second_cycle_bac',
    summary: 'Méthodologie officielle des épreuves d\'Espagnol : Compréhension de texte (Comprensión : Preguntas directas, Verdadero/Falso con justificación textual exacta), Structures de la langue (Gramática : Ser/Estar, Por/Para, Subjuntivo, Concordance des temps) et Expression écrite (Redacción / Ensayo argumentativo con conectores discursivos).',
    methodologyOverview: `1. PRIMERA PARTE - COMPRENSIÓN DEL TEXTO :
   - Preguntas de comprensión : Responder con oraciones completas y redactadas con vocabulario propio sin copiar párrafos enteros innecesarios.
   - Verdadero o Falso (V / F) : Justificar obligatoriamente con la cita textual exacta del texto entre comillas (« ... », línea X).
   - Léxico y vocabulario : Identificar sinónimos o antónimos en el contexto del texto.

2. SEGUNDA PARTE - COMPETENCIA LINGÜÍSTICA Y GRAMÁTICA :
   - Diferenciación fundamental Ser vs Estar (cualidad esencial vs estado transitorio o localización).
   - Uso contrastado de Por vs Para (causa, medio, duración vs finalidad, destino, plazo).
   - El Modo Subjuntivo : Presente e Imperfecto de Subjuntivo para expresar duda, deseo, orden negativa, hipótesis (ojalá, es necesario que, para que, aunque + subjuntivo).
   - Concordancia temporal y perífrasis verbales (soler + infinitivo, acabar de + infinitivo, ponerse a + infinitivo, seguir + gerundio).

3. TERCERA PARTE - EXPRESIÓN ESCRITA / REDACCIÓN ARGUMENTATIVA :
   - Introducción : Presentación atractiva del tema y planteamiento de la pregunta clave.
   - Desarrollo : 2 a 3 argumentos sólidos ilustrados con ejemplos concretos de la sociedad hispanohablante o africana.
   - Conectores discursivos : En primer lugar, Además, Por un lado / Por otro lado, Sin embargo, Por consiguiente, En resumen.
   - Conclusión : Balance final y opinión personal fundada.`,
    methodologySteps: [
      {
        name: 'Paso 1 : Lectura comprensiva y análisis de consignas',
        description: 'Leer atentamente el texto, subrayar ideas principales y responder con precisión a las preguntas.',
        keyRules: ['Citar siempre entre comillas con el número de línea para V/F', 'Redactar respuestas completas']
      },
      {
        name: 'Paso 2 : Aplicación rigurosa de las reglas gramaticales',
        description: 'Verificar la conjugación verbal, concordancia de género/número y uso correcto del subjuntivo.',
        keyRules: ['Atención a la acentuación de palabras (agudas, llanas, esdrújulas)', 'Diferenciar correctamente por y para']
      },
      {
        name: 'Paso 3 : Estructuración de la redacción',
        description: 'Organizar el texto en párrafos claros con conectores lógicos variados.',
        keyRules: ['1 Párrafo = 1 Idea argumentada con un ejemplo real', 'Evitar repeticiones y enriquecer el léxico']
      }
    ],
    coreKnowledgeExcerpt: `Contenidos gramaticales y temáticos esenciales de Español :
- Gramática clave : Ser y Estar, Por y Para, Usos del Subjuntivo (Presente: -e/-a ; Imperfecto: -ra/-se), Condicional y oraciones condicionales (Si + imperfecto de subjuntivo, condicional simple), Voz pasiva refleja (Se + verbo en 3ª persona), Estilo indirecto y cambios verbales, Pronombres de CD y CI (leísmo/loísmo, se lo).
- Ejes temáticos : Juventud y Futuro profesional (Empleo, Emprendimiento, Nuevas tecnologías), Protección del Medio Ambiente y Energías Limpias, Migración e Integración cultural, Mujer y Desarrollo socioeconómico, El mundo hispánico (Cultura, Tradiciones y Diversidad de España e Iberoamérica), Convivencia y Paz.`,
    sampleInBookletSubjects: [
      'Comprensión lectora y Redacción : "El impacto de las redes sociales en las relaciones familiares de los jóvenes". 1- Preguntas de comprensión y V/F, 2- Ejercicios gramaticales (Subjuntivo & Ser/Estar), 3- Redacción : ¿Son las redes sociales un factor de unión o de aislamiento para la juventud moderna?',
      'BAC Ensayo : "Muchos jóvenes afirman que para tener éxito en la vida es indispensable viajar o vivir en el extranjero." Discuta esta afirmación dando su opinión personal con argumentos claros.'
    ],
    sampleNewUntreatedSubjects: [
      'Escriba un artículo de opinión para el periódico escolar explicando tres medidas concretas para preservar el medio ambiente en nuestra comunidad.',
      'Transforme las siguientes frases utilizando el modo Subjuntivo y la construcción impersonal con "Se".',
      '"El aprendizaje de lenguas extranjeras abre las puertas hacia un futuro laboral exitoso." Desarrolle su argumentación a favor o en contra de esta idea.',
      'Redacte una carta formal dirigida al Director de una empresa solicitando una pasantía o prácticas profesionales durante las vacaciones.'
    ]
  },
  {
    id: 'allemand-bac-excellence',
    title: 'Allemand Terminale (Toutes Séries / BAC) : Leseverstehen, Grammatik & Schriftlicher Ausdruck',
    discipline: 'allemand',
    disciplineLabel: 'Allemand (Terminale A, C, D)',
    badgeColor: 'rose',
    cycle: 'second_cycle_bac',
    summary: 'Méthodologie officielle de l\'épreuve d\'Allemand au Baccalauréat (Ihr und wir plus 3 - DPFC / MENA) : Compréhension de texte (Leseverstehen : Richtig/Falsch mit Textbeleg, W-Fragen), Maîtrise de la langue (Grammatik : Konditionalsätze, Je... desto, Passiversatzformen, Finalsätze damit / um...zu, Plusquamperfekt) et Production écrite (Freie Schriftliche Produktion : Stellungnahme, Problemanalyse, Ratschläge geben).',
    methodologyOverview: `1. ERSTER TEIL - LESEVERSTEHEN (COMPRÉHENSION DE TEXTE) :
   - W-Fragen (Wer, Was, Warum, Wie, Wo) : Répondre par des phrases complètes, précises et sans recopier aveuglément tout le paragraphe.
   - Richtig oder Falsch (R / F) : Justifier obligatoirement par la citation textuelle exacte entre guillemets (« ... », Zeile X).
   - Wortschatz : Trouver des synonymes ou antonymes dans le texte selon le contexte.

2. ZWEITER TEIL - SPRACHLICHE STRUKTUREN & GRAMMATIK :
   - Konditionalsätze : mit "wenn" (Verbe conjugué à la fin), ohne "wenn" (Verbe conjugué en 1ère position) et nominalisation avec "Bei + Dativ + Genitiv".
   - Unpersönliche Ausdrucksweise : Passiv, man, lässt sich + Infinitiv, sein + zu + Infinitiv, Adjektive auf -bar.
   - Komparativ : Je + Komparativ ... (Verb am Ende), desto/umso + Komparativ + Verb + Subjekt ...
   - Finalsätze : "damit" (sujets différents ou mêmes) vs "um ... zu + Infinitiv" (même sujet obligatoire).
   - Temporalsätze : Nachdem + Plusquamperfekt (hatte/war + Partizip II), Präteritum.
   - Modalsätze : ohne ... zu, ohne dass, (an)statt ... zu, (an)statt dass.

3. DRITTER TEIL - SCHRIFTLICHER AUSDRUCK / PRODUKTION :
   - Struktur : Einleitung (Thema vorstellen) -> Hauptteil (2-3 Argumente mit konkreten Beispielen) -> Schluss (Persönliche Meinung und Fazit).
   - Connecteurs logiques : Erstens, Zweitens, Außerdem, Einerseits / Andererseits, Jedoch, Deshalb, Schließlich.
   - Themenbereiche : Klimawandel & Umweltschutz, Soziales Engagement (Workcamp, Umweltclub), Streitschlichtung an Schulen, Drogenprävention, Werbung und Schönheitsideale.`,
    methodologySteps: [
      {
        name: 'Schritt 1 : Gründliches Lesen und Textanalyse',
        description: 'Repérer le thème central, la structure du texte et répondre aux questions de compréhension.',
        keyRules: ['Toujours citer la ligne exacte pour Richtig/Falsch', 'Formuler des phrases complètes']
      },
      {
        name: 'Schritt 2 : Grammatikalische Präzision und Transformationen',
        description: 'Appliquer rigoureusement la place du verbe conjugué (à la fin dans les subordonnées, en 1ère position sans "wenn" ou après "desto").',
        keyRules: ['Vérifier l\'accord sujet-verbe et les cas (Nominativ, Akkusativ, Dativ, Genitiv)', 'Ne jamais utiliser um... zu quand les sujets diffèrent']
      },
      {
        name: 'Schritt 3 : Strukturierung der freien Produktion',
        description: 'Rédiger une argumentation claire en 3 parties avec des connecteurs logiques allemands variés.',
        keyRules: ['Un paragraphe par idée étayée d\'un exemple concret', 'Exprimer clairement sa prise de position citoyenne']
      }
    ],
    coreKnowledgeExcerpt: `Thèmes et notions fondamentales d'Allemand Terminale (Ihr und wir plus 3) :
- Leçon 1 : Mitmachen — Globaler Klimawandel, Treibhausgase, Dürren, Umweltclub, Bananenabfälle recyceln, Workcamp, Konditionalsätze (Indikativ / Konjunktiv II), Passiversatzformen (lässt sich, ist zu, -bar), Relativsätze (wo, was).
- Leçon 2 : Kein Problem ?! — Streitschlichtung in der Schule, Drogenkonsum als Einbahnstraße, Ursachen und Folgen von Sucht, Ratschläge geben, Je ... desto / umso, Plusquamperfekt mit nachdem.
- Leçon 3 : Alles Illusion ? — Liebe und Liebeskummer (positive & negative Seiten), Schönheitsideale vs innere Werte, Werbung und Konsumgesellschaft, Finalsätze (damit / um... zu), Modalsätze (ohne / anstatt), Relativsätze mit wer/wen/wem.`,
    sampleInBookletSubjects: [
      'BAC Allemand Écrit : Texte "Globaler Klimawandel und Jugendliche". 1- Leseverstehen (W-Fragen & R/F), 2- Grammatik (Konditionalsätze mit wenn / ohne wenn, Passiversatz mit lässt sich), 3- Freie Produktion : "Was können Jugendliche in ihrer Schule konkret für den Umweltschutz tun?" (Einen Aufsatz mit 2 konkreten Maßnahmen verfassen).',
      'BAC Situation d\'évaluation : "Konflikte und Streitschlichtung am Gymnasium". 1- Erkläre zwei Ursachen für Streit unter Schülern. 2- Formuliere zwei Ratschläge an streitende Klassenkameraden.'
    ],
    sampleNewUntreatedSubjects: [
      'Verfasse einen Artikel für die Schülerzeitung über die Gefahren des Drogenkonsums und schlage zwei Lösungen vor.',
      'Transformiere die Sätze : "Wenn große Mengen an CO2 produziert werden, steigen die Temperaturen" in a) einen Satz ohne "wenn", b) eine nominale Konstruktion mit "Bei".',
      'Erörtere das Thema : "Beeinflusst die Werbung wirklich unsere Kaufentscheidungen oder sind wir frei?"',
      'Bilde Sätze mit "Je ... desto" zu den Themen Lernen, Gesundheit und Umweltschutz.'
    ]
  },
  // ==========================================
  // GRANDES ANNALES : FRANÇAIS & LITTÉRATURE TERMINALE
  // ==========================================
  {
    id: 'annales-francais-litterature-tle',
    title: 'Annales Officielles Français Tle : Commentaires Composés & Dissertations Intégrales',
    discipline: 'francais',
    disciplineLabel: 'Français & Littérature (Terminale A, C, D)',
    badgeColor: 'rose',
    cycle: 'second_cycle_bac',
    summary: 'Corpus officiel d\'annales du Baccalauréat et des grands lycées d\'excellence. Comprend les commentaires composés rédigés sur La Tragédie du Roi Christophe (Aimé Césaire), Les Mains sales (Jean-Paul Sartre), L\'Étudiant de Soweto (Maoundoué Naïndouba), Coups de pilon (David Diop), L\'Aventure ambiguë (Cheikh Hamidou Kane) et 15 sujets de dissertations littéraires intégrales (Bettelheim, Hugo, Camus, Thabo Mbeki, etc.).',
    methodologyOverview: `1. COMMENTAIRE COMPOSÉ (PROGRAMME OFFICIEL TERMINALE) :
   - Introduction : Présentation de l'auteur et de l'œuvre (date, contexte d'écriture) -> Situation du passage dans l'intrigue -> Dégagement des deux centres d'intérêt majeurs -> Annonce claire du plan en 2 axes.
   - Développement : 2 axes équilibrés, chacun subdivisé en 2 sous-parties. Chaque sous-partie articule : Idée directrice + Relevé textuel précis (citations, figures de style, temps verbaux) + Interprétation littéraire. Transition soignée entre l'axe 1 et l'axe 2.
   - Conclusion : Bilan synthétique des deux centres d'intérêt -> Portée de l'extrait dans l'œuvre -> Ouverture littéraire pertinente.

2. DISSERTATION LITTÉRAIRE & D'IDÉES :
   - Analyse préalable du sujet et isolement de la citation hors de l'amorce.
   - Problématique formulée sous forme de question philosophique ou littéraire sans le mot « ou ».
   - Développement dialectique ou thématique en 2 ou 3 axes étayés d'œuvres maîtresses de la littérature africaine et universelle (Césaire, Diop, Sartre, Kourouma, Camara Laye, Hugo, Camus).
   - Conclusion en 3 temps : bilan équilibré, prise de position personnelle argumentée et élargissement.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Délimitation et Centres d\'Intérêt',
        description: 'Pour le commentaire composé, repérer les mouvements du texte et formuler deux centres d\'intérêt contrastés.',
        keyRules: ['Toujours associer fond et forme (procédés stylistiques et sens)', 'Ne jamais faire de paraphrase']
      },
      {
        name: 'Étape 2 : Rédaction méthodique des sous-parties',
        description: 'Chaque paragraphe combine connecteur logique, argument d\'analyse, citation exacte entre guillemets et analyse du procédé.',
        keyRules: ['Minimum 2 sous-parties par axe', 'Transition obligatoire entre les deux axes']
      },
      {
        name: 'Étape 3 : Synthèse et portée de l\'œuvre',
        description: 'Conclure par la réponse directe au problème et replacer le texte dans son contexte historique et esthétique.',
        keyRules: ['Pas de nouvelle idée dans la conclusion', 'Ouverture vers une autre œuvre du même auteur ou un thème similaire']
      }
    ],
    coreKnowledgeExcerpt: `Corpus littéraire des annales du Baccalauréat :
- Théâtre engagé et négritude : Aimé Césaire (La Tragédie du Roi Christophe : fierté nationale, construction d'Haïti, révolte contre l'indolence), Maoundoué Naïndouba (L'Étudiant de Soweto : révolte scolaire, dénonciation de l'apartheid et du Broederbond), Jean-Paul Sartre (Les Mains sales : idéalisme moral d'Hugo vs réalisme politique d'Hoederer).
- Poésie militante : David Diop (Coups de pilon : mémoire des souffrances coloniales, l'amère saveur de la liberté, l'Afrique dressée comme un arbre jeune et robuste).
- Roman et choc des cultures : Cheikh Hamidou Kane (L'Aventure ambiguë : le discours de la Grande Royale, le sacrifice des enfants à l'école occidentale comparés aux graines enfouies dans la terre).
- Dissertations : Bruno Bettelheim (causes de la violence armée), Victor Hugo (ouvrir une école pour fermer une prison), Albert Camus (grandeur de l'homme et exigence de justice personnelle).`,
    sampleInBookletSubjects: [
      'Commentaire composé : La Tragédie du Roi Christophe (Acte 1, scène 2) : « Assez ! Qu’est ce que ce peuple qui, pour conscience nationale, n’a qu’un conglomérat de ragots ! » (Césaire).',
      'Commentaire composé : BAC D 2012 / BAC A4 2010 : Le dialogue entre Magny et Christophe devant Port-au-Prince encerclée (« Il n’y aura pas d’assaut... édifier ce pays et unir ce peuple »).',
      'Commentaire composé : BAC D 2014 : Christophe méditant sur la balkanisation : « Pauvre Afrique ! Je veux dire pauvre Haïti ! ... De la poussière ! Pas de pierre ! »',
      'Commentaire composé : Les Mains sales (Sartre) : « À quoi sert de lutter pour la libération des hommes, si on les méprise assez pour leur bourrer le crâne ? »',
      'Commentaire composé : L\'Étudiant de Soweto (Naïndouba) : « Qui a peur de qui ? ... Nous sommes dix-huit millions, vous, quatre seulement... Peur de nous, le géant noir ».',
      'Commentaire composé : Coups de pilon (David Diop) : Le poème « Afrique » (« Afrique mon Afrique... Ce dos tremblant à zébrures rouges... L’amère saveur de la liberté »).',
      'Commentaire composé : BAC D 2013 : L\'Aventure ambiguë (Cheikh Hamidou Kane) : Le discours de la Grande Royale sur l\'école des Blancs (« Nos meilleures graines, ce sont nos enfants »).',
      'Dissertation BAC A4 2014 : Bruno Bettelheim : « Au lieu de se borner à condamner la violence, on ferait mieux de penser à ce qui cause la violence... »',
      'Dissertation BAC A4 2006 : Albert Camus : « La grandeur de l’homme est dans sa dimension d’être plus fort que sa condition et si sa condition est injuste, il n’y a qu’une seule mesure de la surmonter, c’est d’être juste lui-même ».',
      'Dissertation : Victor Hugo : « Ouvrir une école c’est fermer la prison ».'
    ],
    sampleNewUntreatedSubjects: [
      'Commentaire composé : La Tragédie du Roi Christophe (Acte 2, scène 6) : La visite de Christophe aux chantiers de la Citadelle la Ferrière.',
      'Commentaire composé : L\'Étudiant de Soweto (Acte 2) : La confrontation entre Mulube et le directeur de l\'université sur l\'enseignement en langue afrikaans.',
      'Dissertation : « Le théâtre est-il une simple fête de l\'hilarité ou un tribunal de la conscience morale et civique ? »',
      'Dissertation : « La littérature négro-africaine doit-elle se borner à chanter le passé précolonial ou affronter sans complaisance les dérives du pouvoir postcolonial ? »'
    ]
  },
  // ==========================================
  // REP LITTÉRAIRE 2021 : GROUPE ACADEMIC LE SUCCÈS
  // ==========================================
  {
    id: 'rep-litteraire-2021-academic',
    title: 'REP Littéraire 2021 (Groupe Academic Le Succès) : Annales & Cours Clés Tle A',
    discipline: 'philo',
    disciplineLabel: 'Pluridisciplinaire Littéraire (Philo, Français, HG, Anglais, Maths Tle A)',
    badgeColor: 'blue',
    cycle: 'second_cycle_bac',
    summary: 'Manuel officiel d\'excellence REP Littéraire 2021 (Groupe Academic Le Succès, Dir. Fabrice Koré, Prof. Jean-Jacques Degnadji). Couvre la méthodologie structurée APC, les fiches de cours antithétiques (Conscience/Inconscient, État/Loi, Société/Autrui, Progrès/Travail/Art, Foi/Raison), le perfectionnement stylistique et les annales de Français, les 7 secrets de la dissertation d\'Histoire-Géo, le guide Writing d\'Anglais, les mathématiques Tle A1/A2 et l\'Allemand LV2.',
    methodologyOverview: `1. DISSERTATION PHILOSOPHIQUE (APC RIGOUREUSE) :
   - Analyse notionnelle contextuelle des termes polysémiques.
   - Problématique centrale sous forme d'une interrogation philosophique UNIQUE (sans dilemme artificiel "A ou B").
   - Détermination des aspects introduits par : « Pour répondre à ce problème d'autres questions s'ajoutent : ».
   - Structuration en axes (Thèse, Antithèse / Limites, Dépassement lucide) avec auteurs et citations vérifiées.

2. FRANÇAIS (DISSERTATION, COMMENTAIRE COMPOSÉ & RÉSUMÉ) :
   - Dissertation littéraire : distinguer les vocations (engagée, esthétique, morale, didactique, ludique, réaliste) et le type de sujet (Étayer vs Discuter).
   - Commentaire composé : repérage textuel minutieux (figures de style, temps verbaux, tonalités) + analyse des procédés + interprétation du sens.
   - Résumé de texte : 11 règles d'or, réduction au quart ou au tiers (marge de ±10%), sans formule "selon l'auteur".

3. HISTOIRE-GÉOGRAPHIE (LES 7 SECRETS DE DISSERTATION & COMMENTAIRE) :
   - Géographie : Maîtrise des sujets en "EN", "DANS", "ET", dialectique, chronologique, synthèse et analytique.
   - Histoire : Monde bipolaire, crises majeures (Berlin, Cuba, Vietnam), décolonisation (Côte d'Ivoire, Algérie), réformes de Gorbatchev, organisations (ONU, UA, CEDEAO, UE/ACP).
   - Commentaire de document : méthode NODACI pour le texte, analyse des tracés statistiques et diagrammes.

4. ANGLAIS, MATHS TLE A & ALLEMAND :
   - Anglais : Méthodologie du Newspaper Article (5W), de l'Essay (Causes, Consequences, Solutions), maîtrise des modaux, conditionals et temps.
   - Maths Tle A : Étude de fonctions (ln, exp, polynômes, rationnelles), calculs de probabilités (combinaisons C_n^p, arrangements A_n^p, p-listes).
   - Allemand LV2 : Modes (Indikativ, Konjunktiv I/II), temps et auxiliaires (sein, haben, werden).`,
    methodologySteps: [
      {
        name: 'Étape 1 : Analyse contextuelle et Problématisation authentique',
        description: 'En Philo et en Lettres, définir les termes en contexte et poser une problématique sans opposition artificielle.',
        keyRules: ['Pas de "ou" automatique en guise de problème philosophique', 'Identifier la visée argumentative de l\'auteur']
      },
      {
        name: 'Étape 2 : Planification rigoureuse et argumentation outillée',
        description: 'Ordonner les axes de réflexion avec des arguments denses, appuyés par des concepts et doctrines reconnus.',
        keyRules: ['Associer à chaque argument une explication et une référence précise', 'Transition logique obligatoire entre les axes']
      },
      {
        name: 'Étape 3 : Rédaction académique soignée',
        description: 'Respecter le calibrage formel, la fluidité des connecteurs logiques et la clarté de la langue.',
        keyRules: ['Aucune omission de questions dans les épreuves structurées', 'Formulation des conclusions avec prise de position équilibrée']
      }
    ],
    coreKnowledgeExcerpt: `REP Littéraire 2021 — Corpus pédagogique intégré :
- Philosophie : Pascal, Descartes, Bergson, Rousseau, Husserl, Freud, Leibniz, Alain, Sartre, Bakounine, Nietzsche, Marx, Spinoza, Hobbes, Voltaire, Dadié, Schopenhauer, Camus.
- Français : Kourouma, Sembène Ousmane, Henri Lopes, Badian, Chinua Achebe, Mariama Bâ, Camara Laye, David Diop, Senghor, Damas, Rimbaud, Baudelaire, Hugo, Césaire, Corneille, Molière, Gary.
- Histoire-Géo : Bipolarisation 1947-1991, crises de Berlin et Cuba, guerre du Vietnam, décolonisation ivoirienne (Brazzaville, SAA, PDCI-RDA, désapparentement 1950, indépendance 1960), Algérie (FLN, Évian 1962), ONU, UA, CEDEAO, partenariat UE/ACP ; Géographie complète de la Côte d'Ivoire (relief, climat, hydrographie, agriculture vivrière et de rente, industrie, commerce, tertiaire informel).
- Anglais : Modals (must, should, may, can), Conditionals types 1/2/3, Passive voice, Reported speech, Articles et Essays thématiques.
- Mathématiques Série A : Fonctions numériques, dérivation, primitives, ln, exp, dénombrement (p-listes, arrangements, combinaisons) et probabilités finies.`,
    sampleInBookletSubjects: [
      'Philo : L\'inconscient nous prive-t-il de notre liberté ? (Banque de sujets REP n°25)',
      'Philo : La loi est-elle la condition de la liberté ? (Banque de sujets REP n°13)',
      'Philo : Le pouvoir de l’État est-il un facteur de liberté ou d’oppression ? (REP page 31)',
      'HG : Analyse du texte de Mikhaïl Gorbatchev sur la fin de la guerre froide et la Perestroïka (REP page 78)',
      'HG : Évolution de la forêt ivoirienne et répartition du chiffre d\'affaires industriel (REP page 80)',
      'Français : Commentaire composé du poème "Gorgé de sang" de Mukala Kadima Nzuji (REP page 49)',
      'Français : Commentaire composé de "Saint-Louis du Sénégal" dans Climbié de Bernard Dadié (REP page 50)',
      'Anglais : Sujet type BAC sur le récit autobiographique de Frederick Douglass (Slavery, REP page 95)',
      'Maths Tle A : Calcul de jurys et probabilités combinatoires (REP page 110, Application 4 & 5)'
    ],
    sampleNewUntreatedSubjects: [
      'Philo : « L\'organisation en société vise-t-elle l\'intérêt de l\'homme ? » (REP n°27)',
      'Philo : « Que valent les progrès de la technique pour notre bonheur ? » (REP n°19)',
      'HG : « La Côte d\'Ivoire peut-elle toujours compter sur son agriculture ? » (Dissertation dialectique)',
      'HG : « Bilan des actions de l\'ONU dans le maintien de la paix : des origines à nos jours »',
      'Français : Dissertation sur la pensée de Jean Cocteau : « Je ne crois pas à l\'évasion, je crois à l\'invasion par l\'œuvre »',
      'Anglais : Newspaper article on the misuse of social networks and children\'s digital safety'
    ]
  },
  // ==========================================
  // LE FRANÇAIS EN TERMINALE : M. CHÉRIF OUSMANE AÏDARA & M. OUSSEYNOU WADE
  // ==========================================
  {
    id: 'aidara-wade-francais-tle',
    title: 'Le Français en Terminale : Manuel Intégral (M. Aïdara & M. Wade)',
    discipline: 'francais',
    disciplineLabel: 'Français & Littérature (Terminale Toutes Séries)',
    badgeColor: 'rose',
    cycle: 'second_cycle_bac',
    summary: 'Manuel exhaustif de référence rédigé par M. Chérif Ousmane Aïdara (Lycée Seydina Limamoulaye, Guédiawaye) et M. Ousseynou Wade (Lycée Moderne de Dakar). Comprend l\'histoire des courants littéraires (du XVIe au XXe siècle), l\'étude monographique des grandes œuvres au programme (Fables de La Fontaine, Les Contemplations de Hugo, Chants d\'ombre de Senghor, Coups de pilon de David Diop, Manon Lescaut de l\'Abbé Prévost, L\'Étranger de Camus, Les Soleils des Indépendances de Kourouma, L\'Étrange destin de Wangrin d\'Hampaté Bâ, Antigone d\'Anouilh, La Mort de Chaka de Seydou Badian, Les Nouveaux Contes d\'Amadou Koumba de Birago Diop), la versification poétique intégrale, la méthodologie de la dissertation, du commentaire de texte et du résumé suivi de discussion, ainsi qu\'un florilège de citations et de commentaires modèles rédigés.',
    methodologyOverview: `1. COURANTS LITTERAIRES ET ESTHETIQUE DES GENRES :
   - Du XVIe au XXe siècle : Humanisme (Montaigne, Rabelais), Pléiade (Ronsard, Du Bellay), Classicisme (règle des trois unités, honnête homme, Boileau, Racine, Molière), Lumières (rationalisme critique, Voltaire, Rousseau, Diderot), Romantisme (lyrisme personnel, Hugo, Lamartine), Réalisme (le miroir stendhalien, Balzac, Flaubert), Naturalisme (déterminisme physiologique, Zola), Parnasse (l'art pour l'art, Gautier), Symbolisme (monde des signes, vers libre, Baudelaire, Rimbaud, Verlaine), Surréalisme (écriture automatique, Breton, Éluard, Aragon) et Négritude.
   - Les genres fondamentaux : Poésie (épique, lyrique, didactique, missions de connaissance et d'engagement), Roman (schéma narratif, focalisations zéro/interne/externe, fiction vs réalité), Théâtre (dialogue, didascalies, catharsis, castigare ridendo mores, miroir et tribune politique), Conte (tradition orale, morphologie de Propp) et Nouvelle (brièveté, instant décisif).

2. DISSERTATION LITTERAIRE :
   - Typologie des libellés : opinion / consigne / conseils.
   - Plans types : dialectique (thèse / antithèse / synthèse pour consignes "discutez", "partagez-vous"), synthétique (analyse par domaines pour "expliquez et commentez"), comparatif.
   - Rédaction : introduction tripartite en bloc, paragraphes rigoureusement articulés (idée -> explication -> citation -> analyse), conclusion équilibrée avec jugement personnel et ouverture.

3. COMMENTAIRE DE TEXTE (COMPOSE OU SUIVI) :
   - Exploitation minutieuse du paratexte (auteur, œuvre, date, contexte).
   - Formulation des centres d'intérêt alliant constamment le fond (le sens) et la forme (procédés stylistiques, temps verbaux, syntaxe).
   - Utilisation des verbes techniques de l'analyse littéraire (caractérise, met en valeur, trahit, suggère, confère).`,
    methodologySteps: [
      {
        name: 'Étape 1 : Analyse des composantes et repérage stylistique',
        description: 'Isoler l\'opinion centrale et relever les figures de style, le lexique, la métrique et les tonalités dominantes.',
        keyRules: ['Toujours associer procédé technique et interprétation littéraire', 'Ne jamais paraphraser']
      },
      {
        name: 'Étape 2 : Organisation rigoureuse des centres d\'intérêt',
        description: 'Bâtir 2 ou 3 axes thématiques équilibrés découpés en sous-parties progressives.',
        keyRules: ['Citations textuelles obligatoires entre guillemets', 'Transitions récapitulatives et annonciatrices entre chaque axe']
      },
      {
        name: 'Étape 3 : Rédaction académique d\'excellence',
        description: 'Rédiger une introduction continue, un développement fluide balisé de connecteurs logiques et une conclusion de portée universelle.',
        keyRules: ['Pas de formule "selon l\'auteur"', 'Style clair, précis et soutenu']
      }
    ],
    coreKnowledgeExcerpt: `Corpus littéraire d'excellence du manuel Aïdara & Wade :
- Poésie : La Fontaine (Fables), Victor Hugo (Les Contemplations, Pauca Meae : « Demain dès l'aube... », « À Villequier »), Senghor (Chants d'ombre : « Femme noire », « Joal », « Nuit de Sine »), David Diop (Coups de pilon : « Défi à la force », « Le temps du martyre », « Les Vautours »), Guillaume Apollinaire (Alcools : « Les Colchiques », « Le Pont Mirabeau », Calligrammes : « La colombe poignardée et le jet d'eau »), Paul Éluard (Capitale de la douleur : « La courbe de tes yeux », Poésie et Vérité : « Liberté »).
- Roman : Abbé Prévost (Manon Lescaut), Albert Camus (L'Étranger), Ahmadou Kourouma (Les Soleils des Indépendances), Amadou Hampaté Bâ (L'Étrange destin de Wangrin).
- Théâtre : Jean Anouilh (Antigone), Seydou Badian (La Mort de Chaka).
- Conte : Birago Diop (Les Nouveaux Contes d'Amadou Koumba : L'Os, Le Boli, Les deux Gendres, Liguidi-Malgam).
- Versification : Décompte des syllabes, règle du e muet, diérèse/synérèse, alexandrin classique (6/6) et trimètre romantique (4/4/4), césure, rejets et contre-rejets, rimes plates/croisées/embrassées, richesse des rimes.`,
    sampleInBookletSubjects: [
      'Commentaire composé intégral : Victor Hugo, « Demain dès l\'aube... » (Les Contemplations, Pauca Meae XIV)',
      'Commentaire composé intégral : Paul Éluard, « La courbe de tes yeux » (Capitale de la douleur)',
      'Commentaire composé intégral : Paul Éluard, « Liberté » (Poésie et Vérité 1942)',
      'Commentaire composé intégral : Léopold Sédar Senghor, « Femme noire » (Étude approfondie par Oumar Sankharé)',
      'Commentaire composé : Guillaume Apollinaire, « La colombe poignardée et le jet d\'eau » (Calligrammes)',
      'Commentaire composé : Guillaume Apollinaire, « Les Colchiques » (Alcools)',
      'Dissertation littéraire : Gustave Flaubert : « L\'art n\'est pas la réalité mais quoi qu\'on fasse on est obligé de choisir parmi les éléments qu\'elle fournit »',
      'Dissertation littéraire : Victor Hugo : « Esprit, soyez utiles ! L\'art pour l\'art peut être beau, mais l\'art pour le progrès est plus beau encore »',
      'Dissertation littéraire : Stendhal : « Un roman est un miroir qu\'on promène le long d\'un chemin »',
      'Dissertation littéraire : Sembène Ousmane : « Le roman n\'est pas seulement pour moi témoignage, description, mais action, une action au service de l\'homme »'
    ],
    sampleNewUntreatedSubjects: [
      'Dissertation : « Le poète doit-il être un artisan des mots célébrant la beauté pure ou le guide des peuples marchant vers la lumière ? »',
      'Commentaire composé : Ahmadou Kourouma, Les Soleils des Indépendances : Le désarroi de Fama sur la place du marché d\'Abidjan.',
      'Commentaire composé : Jean Anouilh, Antigone : La confrontation tragique entre Créon et Antigone sur le bonheur.',
      'Résumé suivi de discussion : Texte d\'Alain Robbe-Grillet sur la conscience du langage et l\'engagement romanesque.'
    ]
  },
  // ==========================================
  // FICHE OFFICIELLE : FIGURES DE STYLE (MME FEREYROLLES - COLLÈGE M. GENEVOIX)
  // ==========================================
  {
    id: 'figures-de-style-genevoix',
    title: 'Figures de Style : Fiches Méthodologiques, Exercices & Corrigés d\'Excellence',
    discipline: 'francais',
    disciplineLabel: 'Français (Figures de Style & Stylistique)',
    badgeColor: 'rose',
    cycle: 'premier_cycle_bepc',
    summary: 'Corpus officiel complet d\'exercices et de corrigés détaillés conçu par Mme Fereyrolles (Collège Maurice Genevoix, Decize). Permet l\'entraînement intensif à l\'identification des figures de style (analogie, substitution, insistance, opposition, rupture), la transformation raisonnée de métaphores en comparaisons, et l\'analyse littéraire approfondie d\'extraits de Voltaire (Candide), Gustave Flaubert (Madame Bovary) et des frères Goncourt (Germinie Lacerteux).',
    methodologyOverview: `1. CLASSIFICATION SYSTEMATIQUE DES FIGURES DE STYLE :
   - Figures d'analogie : Comparaison (avec comparant, comparé, outil comparatif), Métaphore (in praesentia / in absentia, sans outil), Personnification, Allégorie.
   - Figures de substitution : Métonymie (contenant/contenu, lieu/institution, cause/effet), Synecdoque (partie pour le tout), Périphrase.
   - Figures d'opposition : Antithèse (mots opposés dans un même énoncé), Oxymore (termes contradictoires juxtaposés dans le même groupe), Chiasme (structure croisée AB/BA), Antiphrase (ironie).
   - Figures d'insistance et d'amplification : Anaphore (répétition en début de vers ou de phrase), Accumulation/Énumération, Gradation (ascendante ou descendante), Hyperbole (exagération délibérée).
   - Figures d'atténuation : Litote (dire moins pour suggérer plus, tournure négative), Euphémisme (masquer une réalité choquante ou brutale).

2. METHODOLOGIE DE L'INTERPRETATION EN CONTEXTE :
   - Toujours nommer la figure avec précision.
   - Citer l'indice textuel exact.
   - Expliquer l'effet de sens produit sur le lecteur (émotion, effroi, dénonciation, malaise, insistance, dérision).`,
    methodologySteps: [
      {
        name: 'Étape 1 : Repérage formel des indices linguistiques',
        description: 'Analyser la présence d\'outils comparatifs, de répétitions de mots, d\'inversions syntaxiques ou de contradictions lexicales.',
        keyRules: ['Vérifier si les termes sont séparés (antithèse) ou collés (oxymore)', 'Ne pas confondre litote et euphémisme']
      },
      {
        name: 'Étape 2 : Justification de l\'effet stylistique',
        description: 'Expliquer pourquoi l\'auteur s\'écarte du langage ordinaire.',
        keyRules: ['Relier la figure à l\'intention de l\'auteur', 'Identifier la tonalité (satirique, pathétique, lyrique)']
      },
      {
        name: 'Étape 3 : Rédaction claire de la réponse',
        description: 'Formuler une réponse complète articulant nom de la figure, citation entre guillemets et analyse littéraire.',
        keyRules: ['Phrase rédigée sans abréviation', 'Vocabulaire critique précis']
      }
    ],
    coreKnowledgeExcerpt: `Banque de 22 citations analysées et corrigées :
- Hugo : « O flots [...] ces voix désespérées » (Personnification + Apostrophe).
- Voltaire : « langue de Shakespeare » (Périphrase).
- Café : « Je ne dirais pas non » (Litote).
- Élysée : « décision de l'Elysée » (Métonymie).
- La Fontaine : « Elle se hâte avec lenteur » (Paradoxe / Oxymore).
- Mme de Sévigné : « C'est le vent... c'est la bise... c'est le diable » (Anaphore + Parallélisme + Accumulation).
- Brel : « Les mariniers me voient vieillir / Je vois vieillir les mariniers » (Chiasme).
- Senghor : « Femme nue, femme noire » (Anaphore + Parallélisme).
- Camus : « Un silence assourdissant » (Oxymore).
- Aragon : « Vingt et trois... » (Anaphore).
- Extraits de textes commentés : Candide de Voltaire (euphémismes sur le viol et la mort à la guerre), Madame Bovary de Flaubert (énumération traduisant le malaise d'Emma), Germinie Lacerteux des Goncourt (oxymore "noir bonheur", comparaison et métaphore de l'ivresse destructrice).`,
    sampleInBookletSubjects: [
      'Exercice 1 : Identification de 22 citations littéraires classiques et modernes',
      'Exercice 2 : Transformation systématique de 5 métaphores en comparaisons (« Son teint de rose », « L’éclat d’or du soleil », « Un vrai poisson », « Un couvercle de pollution », « Des serpents »)',
      'Exercice 3 : Analyse stylistique et commentaire d\'extraits de Voltaire (Candide), Flaubert (Mme Bovary) et Goncourt (Germinie Lacerteux)'
    ],
    sampleNewUntreatedSubjects: [
      'Identifier et interpréter les figures de style dans la tirade des nez d\'Edmond Rostand (Cyrano de Bergerac).',
      'Analyser le réseau métaphorique et les antithèses dans le sonnet « L\'Ennemi » de Baudelaire.',
      'Transformer 5 comparaisons célèbres de Victor Hugo en métaphores condensées.'
    ]
  },
  // ==========================================
  // FASCICULE OFFICIEL : PRÉPARER LES ÉPREUVES DE FRANÇAIS AU BACCALAURÉAT (CHEIKH LÔ THIAM - UGB SAINT-LOUIS)
  // ==========================================
  {
    id: 'cheikh-lo-thiam-bac-francais',
    title: 'Préparer les Épreuves de Français au Baccalauréat (Sénégal) : Annales, Méthodologies & Corrigés',
    discipline: 'francais',
    disciplineLabel: 'Français (Baccalauréat - Annales Corrigées)',
    badgeColor: 'blue',
    cycle: 'second_cycle_bac',
    summary: 'Ouvrage de référence méthodologique conçu par Cheikh Lô Thiam (Université Gaston Berger de Saint-Louis, Sénégal). Réunit les cours d\'esthétique des genres (poésie, roman, théâtre), les règles d\'or de la dissertation, du commentaire suivi et composé et du résumé de texte, ainsi qu\'un corpus exhaustif d\'annales officielles du Baccalauréat sénégalais corrigées dans le détail (Chateaubriand 2006, Mauriac 2004, Gide 2003, Senghor 2002 & 2001, Laforgue 2004, Victor Hugo 2002, Baudelaire 1995, Albert Camus 2006, Kourouma 2005, Simenon 2003, Schweitzer 1992, Bonnefous 1994).',
    methodologyOverview: `1. LA DISSERTATION LITTERAIRE AU BAC :
   - L'introduction tripartite : Amener le sujet (contexte/généralité sans cliché), Poser le sujet (citation fidèle et problématique centrale), Annoncer le plan (chronologie de l'argumentation sans formules lourdes).
   - Le développement structuré : Plan dialectique (thèse, antithèse, synthèse nuancée), plan analytique (causes, manifestations, conséquences, perspectives), plan thématique. Respect du circuit argumentatif : Idée directrice -> Arguments développés -> Exemples concrets & citations précises -> Transitions et conclusions partielles.
   - La conclusion : Synthèse du développement, réponse claire à la problématique initiale et élargissement mesuré du débat.

2. LE COMMENTAIRE DE TEXTE (SUIVI OU COMPOSE) :
   - Ne jamais dissocier l'étude du fond (sens, thèmes) de l'étude de la forme (procédés stylistiques, métrique, syntaxe).
   - Commentaire suivi : explication linéaire analytique mouvement par mouvement.
   - Commentaire composé : regroupement synthétique par centres d'intérêt thématiques et formels.

3. LE RESUME DE TEXTE SUIVI DE DISCUSSION :
   - Contraction objective au quart (ou tiers) avec marge stricte de +/- 10%.
   - Fidélité absolue au système d'énonciation, aux idées et à la chronologie de l'auteur, avec reformulation personnelle intégrale (proscription du copier-coller).`,
    methodologySteps: [
      {
        name: 'Étape 1 : Analyse approfondie du sujet et délimitation de la consigne',
        description: 'Définir les mots-clés, identifier la consigne (« discutez », « expliquez », « commentez ») et formuler la problématique.',
        keyRules: ['Repérer les présupposés de la citation', 'Formuler une véritable question problématique']
      },
      {
        name: 'Étape 2 : Construction du plan détaillé et sélection des références',
        description: 'Établir les grandes parties et associer à chaque sous-partie un argument littéraire solide et des citations vérifiées.',
        keyRules: ['Équilibrer le volume des parties', 'Bannir les citations vagues ou inventées']
      },
      {
        name: 'Étape 3 : Rédaction académique soignée et transitions logiques',
        description: 'Rédiger avec clarté en utilisant des connecteurs logiques rigoureux et soigner les conclusions partielles.',
        keyRules: ['Pas de jargon inutile', 'Ménager une transition fluide entre chaque grande partie']
      }
    ],
    coreKnowledgeExcerpt: `Annales et auteurs phares du recueil Cheikh Lô Thiam :
- Dissertation Bac 2006 : Chateaubriand, Mémoires d'outre-tombe (la société ruche et le machinisme déshumanisant).
- Dissertation Bac 2004 : François Mauriac (l'engagement politique de l'écrivain pendant l'Occupation).
- Dissertation Bac 2003 : André Gide (le grand écrivain comme être essentiellement anticonformiste).
- Dissertation Bac 2002 : Léopold Sédar Senghor (l'aventure des écrivains nègres comme passion politique).
- Commentaire Bac 2004 : Jules Laforgue, Spleen (ennui décadent, style disloqué et correspondances urbaines).
- Commentaire Bac 2002 : Victor Hugo, Quia pulvis es (dialogue métaphysique entre les vivants et les morts).
- Commentaire Bac 2001 : Senghor, Que m'accompagnent koras et balafong (déchirement identitaire et choix de la trompette noire).
- Commentaire Bac 1995 : Baudelaire, L'Ennemi (la jeunesse orageuse et le Temps dévoreur d'inspiration).
- Commentaire Bac 2006 : Albert Camus, La Peste (l'agonie de l'enfant du juge Othon, mise en scène pathétique du mal absolu).
- Commentaire Bac 2005 : Ahmadou Kourouma, Les Soleils des Indépendances (la désillusion de Fama devant la concession ruinée de Togobala).
- Résumé et discussion Bac 1996 : Senghor, Poète et ingénieur (la substitution de l'art à la religion dans la civilisation des loisirs).
- Résumé et discussion Bac 1994 : Édouard Bonnefous, L'Homme ou la nature ? (défendre la nature, c'est défendre l'homme).`,
    sampleInBookletSubjects: [
      'Dissertation Bac 2006 : « Dans quelle mesure la civilisation de masse actuelle permet-elle de vérifier la prédiction de Chateaubriand sur la société ruche ? »',
      'Dissertation Bac 2004 : « François Mauriac : "La politique nous concerne nous tous, et nous serons des lâches si nous cédons à cette facilité : celle du détachement". Expliquez et discutez. »',
      'Commentaire Bac 2004 : Jules Laforgue, « Spleen » (Poèmes inédits)',
      'Commentaire Bac 2006 : Albert Camus, « L\'agonie de l\'enfant » (La Peste)',
      'Résumé & Discussion Bac 1996 : Léopold Sédar Senghor, « Poète et ingénieur » (Liberté 5)'
    ],
    sampleNewUntreatedSubjects: [
      'Dissertation : « Le poète est-il un prophète chargé de guider les hommes ou un simple magicien des sonorités verbales ? »',
      'Commentaire composé : David Diop, « Les Vautours » (Coups de pilon) : Dénonciation du pillage colonial et foi dans le renouveau africain.',
      'Résumé suivi de discussion : Texte d\'Aimé Césaire sur la culture et l\'identité noire face à la mondialisation.'
    ]
  },
  // ==========================================
  // FASCICULE OFFICIEL : RÉUSSIR LA DISSERTATION FRANÇAISE AU BAC (M. MAMADOU LAMINE DANFA - UCAD)
  // ==========================================
  {
    id: 'mamadou-danfa-dissertation-bac',
    title: 'Réussir la Dissertation Française au Bac (UCAD) : Méthode Réformée, Piliers Littéraires & 24 Sujets Types',
    discipline: 'francais',
    disciplineLabel: 'Français (Méthodologie & 24 Sujets de Dissertation)',
    badgeColor: 'emerald',
    cycle: 'second_cycle_bac',
    summary: 'Manuel méthodologique d\'excellence conçu par M. Mamadou Lamine Danfa (Université Cheikh Anta Diop de Dakar - UCAD). Conforme aux nouvelles réformes du Baccalauréat au Sénégal. Traite des piliers fondamentaux de la création littéraire (engagement politique, thérapie de l\'angoisse, divertissement, Art pour l\'art, lyrisme, hermétisme vs clarté), intègre le répertoire complet des connecteurs logiques classés par fonction, et propose 24 sujets de dissertation approfondis avec problématiques, plans dialectiques/analytiques/thématiques et corpus d\'illustrations.',
    methodologyOverview: `1. LA REFORME DE LA DISSERTATION LITTERAIRE AU SENEGAL :
   - Structure en paragraphes argumentatifs normalisés (environ 15 lignes par paragraphe) : Idée directrice formulée sans détour -> Argumentation logique et théorique -> Exemple précis tiré d'une œuvre majeure -> Analyse critique de la portée de l'exemple.
   - Usage obligatoire des connecteurs logiques de transition pour articuler les arguments et ménager des ruptures franches (antithèse).
   - Évaluation équilibrée : pertinence de la compréhension du sujet, qualité du style académique, rigueur méthodologique et richesse des références littéraires (françaises et négro-africaines).

2. LES GRANDS AXES THEORIQUES DE LA DISSERTATION AU BAC :
   - Axe A : L'engagement moral (dénonciation de l'hypocrisie et des vices : Molière, La Fontaine).
   - Axe B : L'engagement politique et civique (Hugo, Zola, Césaire, David Diop, Sembène Ousmane).
   - Axe C : La littérature comme thérapie existentielle (Montesquieu, Césaire, Birago Diop).
   - Axe D : La littérature comme divertissement et évasion (Kléber Haedens, Dumas, Jules Verne).
   - Axe E : Le lyrisme personnel et l'exploration de l'âme (Lamartine, Musset, Camara Laye, Rousseau).
   - Axe F : L'Art pour l'Art et le culte du Beau pur (Théophile Gautier, Parnasse, Symbolisme).
   - Axe G : L'échec et les désillusions de l'engagement (Sartre Les Mots, Bernanos, Gautier après 1848).
   - Axe H & I : Le débat sur l'accessibilité populaire vs l'hermétisme sacré (Boileau, Mariama Bâ vs Mallarmé, Breton, Kourouma).`,
    methodologySteps: [
      {
        name: 'Étape 1 : Déconstruction de la citation et problématisation',
        description: 'Repérer le thème, la thèse implicite ou explicite de l\'auteur, et poser la difficulté philosophique ou esthétique sous forme interrogative.',
        keyRules: ['Bannir la paraphrase mécanique', 'Identifier si le sujet est dialectique ou explicatif']
      },
      {
        name: 'Étape 2 : Élaboration du plan détaillé selon les normes standard',
        description: 'Chaque grande partie comprend une phrase de présentation, deux ou trois paragraphes structurés (idée + argument + exemple), et une conclusion partielle avec transition.',
        keyRules: ['Interdiction formelle de juxtaposer des exemples sans analyse', 'Chaque paragraphe doit apporter une preuve nouvelle']
      },
      {
        name: 'Étape 3 : Conclusion tripartite et ouverture prospective',
        description: 'Faire le bilan des conclusions partielles, exprimer une position personnelle nuancée et ouvrir le débat vers une perspective féconde.',
        keyRules: ['Ne jamais contredire le raisonnement développé', 'Ouverture pertinente sans banalité']
      }
    ],
    coreKnowledgeExcerpt: `Banque des 24 sujets traités dans l'ouvrage de M. Mamadou Lamine Danfa :
- Sujet 1 : L'actualité comme source d'inspiration : péril pour la postérité ou terreau de l'éternité ?
- Sujet 2 : Émile Cioran (« Malheur au livre qu’on peut lire sans s’interroger tout le temps sur l’auteur »).
- Sujet 3 : La biographie de l'écrivain est-elle indispensable pour comprendre et aimer son œuvre ?
- Sujet 4 : Émile Zola (« J’aurais voulu aplatir le monde, d’un coup de ma plume, en forgeant des fictions utiles »).
- Sujet 5 : L'écrivain est-il un être à part ou semblable au commun des mortels ?
- Sujet 6 : Charles Baudelaire (« J’ai pétri de la boue et j’en ai fait de l’or » - L'alchimie du Beau et du Mal).
- Sujet 7 : Théophile Gautier (« La politique dans une œuvre d’art, c’est comme un coup de pistolet au milieu d’un concert »).
- Sujet 8 : Senghor (« La poésie est moins un objet de musée qu’un puissant instrument de libération »).
- Sujet 9 : Flaubert (« L’artiste doit être dans son œuvre comme Dieu dans la création : présent partout et visible nulle part »).
- Sujet 10 : La censure d'une œuvre d'art comme preuve de vérité.
- Sujet 11 : Roger Caillois (« Une littérature existe dans une société donnée ; elle en reçoit l’empreinte et, en retour, lui imprime une direction »).
- Sujet 12 : Victor Hugo (« J’aurais été soldat si je n’étais poète » - Fonction du poète dans Les Rayons et les Ombres).
- Sujet 13 : Victor Hugo (« Tant qu’il y aura sur cette terre misère et ignorance, des livres de la nature de celui-ci pourront ne pas être inutiles » - Préface des Misérables).
- Sujet 14 : Gotthold Lessing (L'éloge de l'œuvre plutôt que de la personne de l'artiste).
- Sujet 15 : La Fontaine (« Je me sers d’animaux pour instruire les hommes » - La littérature didactique).
- Sujet 16 : Alfred de Musset (« Ah ! Frappe-toi le cœur ! C’est là qu’est le génie »).
- Sujet 17 : Victor Hugo (« Imposer la même technique d’écriture à tout le monde revient à demander à toute l’humanité de porter la même pointure de chaussures »).
- Sujet 18 : Les frères Goncourt (« Un auteur dans son livre est comme la police dans une ville : partout et nulle part »).
- Sujet 19 : Victor Hugo (« L’art pour l’art peut être beau, mais l’art pour le progrès est plus beau encore »).
- Sujet 20 : L'écrivain comme médecin sans frontières et son propre médecin.
- Sujet 21 : Paul Valéry (« Une œuvre d’art devrait toujours nous apprendre que nous n’avions pas vu ce que nous avions vu »).
- Sujet 22 : Witold Gombrowicz (« L’artiste est un mouton qui se sépare du troupeau »).
- Sujet 23 : Émile Zola (« Un roman qui sente l’odeur du peuple » - Préface de L'Assommoir).
- Sujet 24 : La fausse réduction : théâtre au rire, roman à l'évasion, poésie au lyrisme.`,
    sampleInBookletSubjects: [
      'Sujet 1 : « Si l’écrivain veut que ses écrits soient toujours d’actualité, qu’ils fassent long feu... il doit se méfier de l’actualité comme source d’inspiration ». Expliquez et discutez.',
      'Sujet 4 : Émile Zola : « J’aurais voulu aplatir le monde, d’un coup de ma plume, en forgeant des fictions utiles ». Analysez et discutez.',
      'Sujet 6 : Charles Baudelaire : « J’ai pétri de la boue et j’en ai fait de l’or ». Expliquez cette alchimie créatrice.',
      'Sujet 8 : Léopold Sédar Senghor : « La poésie est moins un objet de musée qu’un puissant instrument de libération ». Commentez et discutez.',
      'Sujet 24 : « On a tendance à réduire les œuvres : théâtrales au rire, romanesques à l’évasion, et poétiques au lyrisme ». Discutez ce point de vue.'
    ],
    sampleNewUntreatedSubjects: [
      'Sujet type Bac 2018 : « Toute grande œuvre littéraire est un miroir où le lecteur se contemple et se transforme ». Expliquez et discutez à l\'aide d\'exemples précis.',
      'Sujet type Bac : « La littérature n\'a pas vocation à changer le monde, mais à embellir notre passage sur terre ». Partagez-vous ce point de vue ?',
      'Sujet type Bac : « Dans quelle mesure la parole poétique négro-africaine a-t-elle su marier la révolte politique à la célébration esthétique de la nature ? »'
    ]
  },
  {
    id: 'figures-style-ricalens-pourchot',
    title: 'Dictionnaire des Figures de Style (Nicole Ricalens-Pourchot, Armand Colin)',
    discipline: 'francais',
    disciplineLabel: 'Français — Rhétorique & Figures de Style',
    badgeColor: 'amber',
    cycle: 'second_cycle_bac',
    summary: 'Ouvrage de référence absolue en stylistique et rhétorique (Armand Colin). Propose 28 formules mnémotechniques, une classification alphabétique détaillée (définitions, étymologies latines et grecques, exemples d\'auteurs) et 16 planches thématiques arborescentes (Ajout, Amplification, Atténuation, Complicité, Contraste, Déplacement, Interruption, Ironie, Jeux, Juxtaposition, Mise en relief, Rapprochement, Répétition, Suppression, Insolite, Transferts et Tropes).',
    methodologyOverview: `1. DÉFINITION DE LA FIGURE DE STYLE :
   - Écart par rapport à la neutralité langagière ou « degré zéro de l'écriture » (Roland Barthes).
   - Tours particuliers donnés aux pensées et aux mots pour animer, orner ou élever le discours (Fontanier, Du Marsais, Littré, Robert).

2. LES 28 FORMULES CLÉS POUR RECONNAÎTRE LES FIGURES :
   - 1. Jongler avec le sens des mots : antanaclase, diaphore, syllepse, tautologie, paronomase, catachrèse.
   - 2. Couper court au discours : anacoluthe, aposiopèse, réticence.
   - 3. Invoquer et faire parler : prosopopée, personnification, sermocination.
   - 4. S'exprimer à moindres frais : zeugme (adjonction/disjonction), ellipse, brachylogie, enthymémisme.
   - 5. Manifester compassion ou atténuer : euphémisme, litote, métalepse, exténuation, tapinose, hypocorisme, circonlocution.
   - 6. Jouer avec les sons : onomatopée, assonance, allitération, apophonie, dérivation, homéotéleute, polyptote.
   - 7. Répéter selon la place : épanalepse (A-A), épanadiplose (A-, -A), anaphore, épiphore, symploque, palillogie, anadiplose, épanode, antépiphore.
   - 8. Figurer l'abstrait : symbole, abstraction.
   - 9. Rapprochement analogique : comparaison, métaphores (in praesentia, in absentia, filée, concetti), antéisagoge.
   - 10. Désignation indirecte : pronomination, métonymie, synecdoque, hyponymie.
   - 11. Récit imagé : allégorie, parabole, mythe.
   - 12. Couper les syllabes (métaplasmes) : aphérèse, apocope, syncope, mot-valise, tmèse.
   - 13. Ajout/suppression de liaisons : explétion, polysyndète, asyndète, parataxe.
   - 14. Jeux d'esprit et de lettres : calembour, verlan, anagramme, palindrome, contrepèterie, lapalissade, lipogramme.
   - 15. Symétrie : parallélisme, réversion (A-B B-A), chiasme (A-B B'-A'), épitrochasme.
   - 16. Ironie : astéisme, antiphrase, épitrope, chleuasme, prétérition.
   - 17. Contrastes : attelage, oxymoron, hypallage, antithèse, antilogie.
   - 18. Déplacements : dislocation, hyperbate, hendiadyn.
   - 19. Bouleversement logique : prolepse, hystérologie.
   - 20. Phrases bancales : anapodoton, anantapodoton.
   - 21. Exagération : hyperbole, adynaton.
   - 22. Interruption : apostrophe, parembole.
   - 23. Explication : apposition, redondance, pléonasme, périphrase.
   - 24. Transfert grammatical : énallage, antonomase, annomination.
   - 25. Ordre des mots : inversion, anastrophe.
   - 26. Vocabulaire : archaïsme, néologisme, pérégrinisme.
   - 27. Listes : énumération, accumulation, gradation, bathos.
   - 28. Pléonasmes vicieux : périssologie, battologie.

3. LES 16 PLANCHES THÉMATIQUES :
   - Planche I : Ajout (mots au lexique, à la phrase, propositions).
   - Planche II : Amplification (exagération, addition d'éléments, concernant le mot).
   - Planche III : Atténuation (quantitative : litote, exténuation, métalepse ; qualitative : antiphrase, euphémisme, hypocorisme, périphrase).
   - Planche IV : Complicité et participation.
   - Planche V : Contraste et opposition (élimination, deux idées, deux vérités, deux mots, intention vs discours).
   - Planche VI : Déplacement et permutation (lettres, syllabes, mots, propositions).
   - Planche VII : Interruption et coupure (mot, syntagme, fin de phrase, cours des idées, énonciation).
   - Planche VIII : Ironie et humour (à propos d'autrui, de soi-même, d'une vérité, équivoque de mots).
   - Planche IX : Jeux (morphologiques A, phonétiques B, sémantiques C, syntaxiques D).
   - Planche X : Juxtaposition (mots, syntagmes, propositions).
   - Planche XI : Mise en relief et insistance (moyens grammaticaux A, lexicaux B, sémantiques C).
   - Planche XII : Rapprochement et ressemblance.
   - Planche XIII : Répétition (sens/idée/structure A, mots seuls ou deux à deux B).
   - Planche XIV : Suppression (syllabes/lettres, mots, niveau du discours).
   - Planche XV : Surprenant et insolite.
   - Planche XVI : Transfert et substitution (grammaticaux/lexicaux A, sémantiques B, Tropes C, paralinguistiques D).`,
    methodologySteps: [
      {
        name: 'Étape 1 : Identifier la nature de l\'écart stylistique',
        description: 'Déterminer si l\'écart repose sur le sens (trope/sémantique), la syntaxe (construction/ordre), les sonorités (phonétique) ou le lexique.',
        keyRules: ['Distinguer comparaison et métaphore (absence de mot-outil)', 'Distinguer métonymie (contiguïté) et synecdoque (inclusion)']
      },
      {
        name: 'Étape 2 : Analyser l\'effet expressif recherché par l\'auteur',
        description: 'Relier la figure à l\'émotion, à la visée argumentative ou à l\'effet poétique créé dans le texte.',
        keyRules: ['Ne jamais nommer une figure sans analyser sa portée', 'Repérer les combinaisons de figures (ex: antithèse + chiasme, litote + euphémisme)']
      }
    ],
    coreKnowledgeExcerpt: `Extraits fondamentaux du Dictionnaire des figures de style (Nicole Ricalens-Pourchot) :
- Chiasme : A - B / B' - A' (« Tel qui rit vendredi, dimanche pleurera » Racine ; « Un roi chantait en bas, en haut mourait un Dieu » Hugo).
- Oxymoron : Alliance intime de termes opposés dans un même syntagme (« Cette obscure clarté qui tombe des étoiles » Corneille ; « Hâtez-vous lentement » Boileau).
- Attelage : Deux compléments sémantiquement incompatibles (abstrait/concret) rattachés à un même verbe (« Vêtu de probité candide et de lin blanc » Hugo ; « Il posa sa canne et une question »).
- Allégorie : Récit imagé continu représentant une notion abstraite (La mort comme faucheuse dans « Mors » de Hugo ; la caverne de Platon ; l'Espérance chez Chateaubriand).
- Prétérition : Déclarer ne pas parler de ce que l'on dit (« Je ne vous peindrai point le tumulte et les cris / Le sang de tous côtés ruisselant dans Paris » Voltaire).
- Hendiadyn : Dédoublement d'un syntagme en deux noms (« Respirer l'air du lac et la fraîcheur » Rousseau pour 'l'air frais du lac').
- Hypallage : Adjectif attribué à un autre mot que celui attendu (« Ce marchand accoudé sur son comptoir avide » Hugo).`,
    sampleInBookletSubjects: [
      'Analyse stylistique : Identifier et commenter les figures de style dans la tirade du nez de Cyrano de Bergerac (Rostand) : adynaton, gradation, métaphore.',
      'Étude comparée : Distinguer le chiasme, la réversion (antimétabole) et le parallélisme dans les tragédies de Corneille et Racine.',
      'Dissertation stylistique : Pourquoi le poète use-t-il de la métaphore filée plutôt que de la comparaison explicite ? (Exemples chez Baudelaire et Valéry).'
    ],
    sampleNewUntreatedSubjects: [
      'Comment les figures d\'atténuation (litote, euphémisme, tapinose) servent-elles la bienséance classique et l\'ironie moderne ?',
      'L\'oxymore et l\'antithèse dans le théâtre baroque et romantique : de Ruy Blas à Phèdre.',
      'Les figures de répétition sonore (allitération, assonance, homéotéleute) dans la création poétique symboliste.'
    ]
  },
  {
    id: 'bac-expression-ecrite-complete',
    title: 'Expression Écrite au Baccalauréat : Annales Complètes (Commentaires, Dissertations, Résumés-Discussions)',
    discipline: 'francais',
    disciplineLabel: 'Français — Épreuves Complètes du Baccalauréat',
    badgeColor: 'emerald',
    cycle: 'second_cycle_bac',
    summary: 'Corpus officiel et exhaustif pour l\'épreuve de Français au Baccalauréat (Séries A1, A2, B, C, D, L, S). Comprend 10 Commentaires composés corrigés in extenso, 10 Dissertations littéraires intégralement rédigées avec plan tripartite, et 7 sujets complets Question + Résumé (au 1/4 du volume) + Discussion argumentée.',
    methodologyOverview: `1. PARTIE A - COMMENTAIRE COMPOSÉ (10 Sujets types corrigés) :
   - Sujet 1 : Bottey Zady Zaourou, Fer de lance (Hostilité de la nature vs détermination héroïque des guerriers).
   - Sujet 2 : Jean Routaud, Des hommes illustres (La nature ravagée par le bulldozer : combat mécanique et défaite de la nature).
   - Sujet 3 : Ferdinand Oyono, Une vie de boy (La bastonnade de deux noirs chez Janopoulos : scène de torture et prise de conscience anticoloniale de Toundi).
   - Sujet 4 : Seydou Badian, Sous l'orage (Le mariage de Kany : attachement patriarcal de Sibiri vs réification de la femme africaine).
   - Sujet 5 : Mukala Kadima N'juzi, Redire les mots anciens (« Gorgé de sang » : apocalypse de la guerre sur les hommes et la terre).
   - Sujet 6 : Mongo Beti, Mission terminée (L'école coloniale et le troupeau d'écoliers abrutis : conditions misérables et éducation inadaptée).
   - Sujet 7 : François d'Assise N'Da, Le retour de l'enfant soldat (« Rien qu'à y penser » : introspection de Zango et absurdité de la guerre).
   - Sujet 8 : Serge Grah, Passion de soutane (La Cité des Milliardaires : peinture réaliste du luxe et satire de la psychose sécuritaire des riches).
   - Sujet 9 : Senouvo Agbota Zinsou, La Tortue qui chante (« Le roi Podogan 1er » : mégalomanie politique, corruption et flagornerie de la presse).
   - Sujet 10 : Sophie Heidi Kam, Quête (« Le blues de l'Afrique II » : allégorie de l'Afrique en larmes, dénonciation des conflits fratricides et mal gouvernance).

2. PARTIE B - DISSERTATION LITTÉRAIRE (10 Sujets rédigés) :
   - Sujet 1 : Julien Clerc / Lucien Rioux (L'art comme divertissement vs éveilleur de conscience morale et politique).
   - Sujet 2 : « Le roman doit transcrire objectivement la réalité » (Réalisme/Naturalisme de Balzac, Stendhal, Zola vs Imagination de Dumas, Verne, Boulle).
   - Sujet 3 : Émile Lalsaga (La poésie comme vibrations intenses d'être vivant : exploration du cœur vs combat poétique).
   - Sujet 4 : « La fonction du personnage de roman est de refléter la société » (Personnage miroir social vs héros mythique, allégorique ou fantastique).
   - Sujet 5 : Emmanuel Dongala (« La littérature négro-africaine est une littérature de remise en cause et de remise en place »).
   - Sujet 6 : François Mauriac (Personnages fictifs aidant à se connaître : modèles d'identification vs héros déroutants).
   - Sujet 7 : « Ma plume est mon épée » (Littérature militante et de combat vs littérature esthétique et didactique).
   - Sujet 8 : Michel Tournier (« J'ai tout inventé » : invention romanesque absolue vs ancrage nécessaire dans le réel).
   - Sujet 9 : Jean Cocteau (« Je crois à l'invasion... être envahi, habité, dérangé par une œuvre »).
   - Sujet 10 : Bertolt Brecht (« Un théâtre où on ne rit pas est un théâtre dont on doit rire »).

3. PARTIE C - QUESTION + RÉSUMÉ + DISCUSSION (7 Sujets complets) :
   - Sujet 1 : Mukala Kadima-Nzuji, Jeune Afrique (Diagnostic de l'enseignement en Afrique : le français vs langues nationales - Résumé 177 mots).
   - Sujet 2 : Joseph Ki-Zerbo, À quand l'Afrique ? (Chefs d'États irresponsables et déficit de redevabilité - Résumé 150 mots).
   - Sujet 3 : Norbert Zongo, L'Indépendant (Que faire ? Afro-pessimisme vs afro-optimisme - Résumé 164 mots).
   - Sujet 4 : Julien Debelque, Diagonales (Les enfants exploités et le travail forcé dans le tiers-monde).
   - Sujet 5 : Delphine Lecoutre & Admore Mupoki, Le Monde diplomatique (Vers un divorce entre Paris et l'Afrique ?).
   - Sujet 6 : Martin Luther King, Combats pour la liberté (« La non-violence n'engendre que haine et amertume » - Résumé 199 mots).
   - Sujet 7 : Agnès Callamard, Le Monde diplomatique (A-t-on le droit de tout dire ? Liberté d'expression vs lois sécuritaires - Résumé 216 mots).`,
    methodologySteps: [
      {
        name: 'Méthode du Commentaire Composé',
        description: 'Construire 2 ou 3 centres d\'intérêt sans jamais séparer l\'étude du fond (thème) de l\'étude de la forme (procédés stylistiques et grammaticaux).',
        keyRules: ['Introduction en 3 parties (situer, caractériser, annoncer)', 'Chaque sous-partie lie citation, figure et interprétation', 'Conclusion avec bilan et ouverture littéraire']
      },
      {
        name: 'Méthode de la Dissertation Littéraire',
        description: 'Problématiser le sujet sous forme d\'une question centrale et articuler le développement en paragraphes de 15 lignes (idée directrice, argument, citation/œuvre analysée).',
        keyRules: ['Introduction tripartite obligatoire', 'Plan dialectique thèse/antithèse/synthèse équilibré', 'Bannir les listes d\'exemples sans argumentation préalable']
      },
      {
        name: 'Méthode du Résumé et Discussion',
        description: 'Résumer fidèlement au 1/4 (+/- 10%) en respectant le système d\'énonciation et développer la discussion argumentée.',
        keyRules: ['Décompte exact des mots mentionné à la fin', 'Discussion en plan ordonné avec arguments concrets']
      }
    ],
    coreKnowledgeExcerpt: `Corpus littéraire africain et mondial au Baccalauréat :
- Romans de combat : Ville cruelle (Eza Boto), Les Soleils des Indépendances (Ahmadou Kourouma), Rebelle (Fatou Keïta), Une vie de boy (Ferdinand Oyono), Mission terminée (Mongo Beti).
- Poésie et Négritude : Chants d'ombre (L.S. Senghor), Coups de pilon (David Diop), Cahier d'un retour au pays natal (Aimé Césaire), Fer de lance (Bottey Zady Zaourou), Quête (Sophie Heidi Kam).
- Pensée critique contemporaine : À quand l'Afrique ? (Joseph Ki-Zerbo), Le Parachutage (Norbert Zongo), Combats pour la liberté (Martin Luther King).
- Théâtre : Le Tartuffe (Molière), La Tortue qui chante (Senouvo Agbota Zinsou), Antigone (Anouilh), En attendant Godot (Beckett).`,
    sampleInBookletSubjects: [
      'Commentaire composé : Bottey Zady Zaourou, Fer de lance : L\'hostilité de la nature et l\'héroïsme des guerriers.',
      'Commentaire composé : Ferdinand Oyono, Une vie de boy : La scène de flagellation des deux prisonniers chez Janopoulos.',
      'Dissertation littéraire : Emmanuel Dongala : « La littérature négro-africaine est une littérature de remise en cause et de remise en place ». Expliquez et discutez.',
      'Résumé & Discussion : Joseph Ki-Zerbo : « Les chefs d’États ont une tendance à vouloir diriger sans répondre de leurs actes ». (Résumé 150 mots et discussion argumentée).'
    ],
    sampleNewUntreatedSubjects: [
      'Commentaire composé sur l\'exode et le déracinement culturel dans L\'Aventure ambiguë de Cheikh Hamidou Kane.',
      'Dissertation : « Le romancier africain est-il condamné à n\'être que le chroniqueur de ses malheurs historiques ? »',
      'Résumé & Discussion : L\'impact de l\'intelligence artificielle et du numérique sur l\'avenir des langues nationales africaines.'
    ]
  },
  {
    id: 'dissertation-litteraire-diomande-narcisse',
    title: 'Dissertation Littéraire en Une Minute (Diomande Sadia Narcisse — Tle A/C/D)',
    discipline: 'francais',
    disciplineLabel: 'Français — Dissertation Littéraire (Terminale A, C, D)',
    badgeColor: 'amber',
    cycle: 'second_cycle_bac',
    summary: 'Méthode accélérée et synthétique de Diomande Sadia Narcisse (Côte d\'Ivoire). Contient les règles pour éliminer les fautes sur la copie, un tableau de 16 œuvres phares du programme ivoirien et francophone, la méthodologie en 4 mouvements d\'introduction + modèle passe-partout, et 4 sujets types rédigés in extenso.',
    methodologyOverview: `MÉTHODOLOGIE ACCÉLÉRÉE DE LA DISSERTATION LITTÉRAIRE :
1. PRÉSENTATION ET RIGUEUR SUR LA COPIE :
   - Clarté, lisibilité et zéro rature (la première impression conditionne la notation).
   - Vigilance grammaticale : accord sujet-verbe pluriel, pluriels des noms composés, concordance des temps.
   - Recopier intégralement le sujet sur la copie avant le traitement.

2. ÉTUDE PARCELLAIRE & REFORMULATION :
   - Définir chaque mot-clé dans le contexte exact du sujet.
   - Reformuler sans dénaturer ni changer le sens.
   - Dégager le problème central (formulation interrogative ou déclarative nette).

3. L'INTRODUCTION EN 4 MOUVEMENTS :
   - 1. Généralité / amorce (définition, citation ou constat littéraire fort).
   - 2. Insertion du sujet (avec phrase de liaison intermédiaire).
   - 3. Problème du sujet (la question centrale posée).
   - 4. Annonce du plan (lignes directrices du développement au futur ou sous forme interrogative).

4. LE DÉVELOPPEMENT RIGOUROUX (AXE 1 -> TRANSITION -> AXE 2) :
   - Chaque axe comporte au moins 2 paragraphes équilibrés : Argument + Explication + Illustration (tirée d'une œuvre littéraire précise).
   - Règle d'or : Utiliser tous les genres (poésie, roman, théâtre) pour un sujet général sur la littérature ; cantonner aux œuvres du genre quand le sujet est spécialisé.

5. LA CONCLUSION EN 3 ÉTAPES :
   - Bilan concis des deux axes + Prise de position personnelle littéraire + Ouverture facultative.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Étude parcellaire et ciblage du genre',
        description: 'Définir les expressions-clés et vérifier si le sujet porte sur la littérature générale, le roman, la poésie ou le théâtre.',
        keyRules: ['Définir dans le contexte précis', 'Ne pas plaquer le sujet sans liaison', 'Identifier le genre imposé']
      },
      {
        name: 'Étape 2 : L\'Introduction en 4 parties',
        description: 'Rédiger en 1 paragraphe : Généralité littéraire -> Insertion fluide du sujet -> Problème -> Annonce du plan.',
        keyRules: ['Modèle passe-partout adaptable', 'Formuler le problème comme question centrale']
      },
      {
        name: 'Étape 3 : Paragraphes argumentatifs illustrés',
        description: 'Structurer chaque paragraphe en trois temps : Argumentation -> Explication -> Exemple littéraire analysé.',
        keyRules: ['Égalité du nombre d\'arguments entre axes', 'Mobiliser les 16 œuvres majeures du programme']
      }
    ],
    coreKnowledgeExcerpt: `Corpus des 16 œuvres majeures du fascicule :
- Théâtre : On se chamaille pour un siège (Hyacinthe Kakou : tolérance post-électorale), Le Médecin malgré lui (Molière : comique et satire), Les enfants de Soweto (Gerum Carlos : catharsis de l'apartheid), Assemien Déhilé (Bernard Dadié : mœurs royales agni).
- Roman : Les soleils des indépendances (Ahmadou Kourouma : mauvaise gouvernance), Sous le voile de la mariée (Mathurin Goli Bi Irié : mariage civil et condition féminine), Rebelle (Fatou Keïta : lutte contre l'excision), La planète des singes (Pierre Boulle : fiction et inversion), Petit Bodiel (Amadou Hampâté Bâ : conte et rire salvateur), Le monde s'effondre (Chinua Achebe : sacrifices humains et tradition ibo).
- Poésie : Les Rayons et les Ombres (Victor Hugo : poésie engagée anti-tyrannie), Demain dès l'aube (Hugo : élégie et deuil intime), Chants d'ombre - Joal (L.S. Senghor : mémoire culturelle), Émaux et Camées (Théophile Gautier : culte parnassien du beau), Soleils fusillés (David Diop : métaphore et révolte).`,
    sampleInBookletSubjects: [
      'Sujet 1 rédigé : « La poésie est un ornement, le roman un ailleurs, le théâtre un jeu, confondre ces trois genres serait une méprise dommageable. » (Différence formelle vs convergence thématique).',
      'Sujet 2 rédigé : « Le dramaturge a des objectifs envers le spectateur : amuser la galerie et lui faire prendre conscience. » (Théâtre comique et cathartique vs satire politique et éveil).',
      'Sujet 3 rédigé : « Sans se soucier des autres, sans penser à l\'atmosphère tendue, le poète est subjectif. » (Lyrisme personnel de la douleur vs poésie engagée et collective).',
      'Sujet 4 rédigé : « Il y a deux sortes de roman : le roman qui nous fait oublier notre vie et le roman qui nous explique notre vie. » (Roman d\'évasion vs roman miroir critique).'
    ],
    sampleNewUntreatedSubjects: [
      'Alain (Propos de littérature 1934) : « Tout l’art du roman vise à nous tirer d’impatience... un vrai roman est toujours court. »',
      'Joubert : « Les écrivains qui ont de l’influence ne sont que des hommes qui expriment parfaitement ce que les autres pensent... »',
      'Blaise Cendrars : « Je ne trempe pas ma plume dans un encrier mais dans la vie. »'
    ]
  },
  {
    id: 'annales-francais-bac-burkina-faso',
    title: 'Annales Français Terminale A (MENAPLN Burkina Faso — Sessions 2016-2020)',
    discipline: 'francais',
    disciplineLabel: 'Français — Annales Officielles (Terminale A, C, D, L)',
    badgeColor: 'emerald',
    cycle: 'second_cycle_bac',
    summary: 'Recueil officiel du Ministère de l\'Éducation nationale du Burkina Faso (Direction Générale de la Recherche en Éducation et de l\'Innovation Pédagogique). Rédigé par les Inspecteurs de l\'Enseignement Secondaire (IES Joseph André Ouédraogo, Saïdou Ouédraogo, Adama Yaméogo, W. Yolande Ido). Couvre les 3 épreuves au choix avec corrigés intégraux.',
    methodologyOverview: `MÉTHODOLOGIE OFFICIELLE DES TROIS SUJETS AU CHOIX AU BACCALAURÉAT :
1. LA CONTRACTION DE TEXTE :
   - Résumé au 1/4 du volume (marge de tolérance de +/- 10%) : interdiction de juger, reformulation obligatoire, maintien du système d'énonciation. Règle : « Le texte, tout le texte, rien que le texte ».
   - Explication de vocabulaire en contexte : phrase brève et complète, sans synonymie brute ni répétition.
   - Discussion : mini-dissertation en deux axes (Thèse / Antithèse) avec arguments tirés de l'actualité et de la culture générale.

2. LE COMMENTAIRE COMPOSÉ :
   - Règle fondamentale : Ne jamais dissocier le fond de la forme.
   - Organisation en 2 ou 3 centres d'intérêt, chacun divisé en sous-parties.
   - Formule d'or : Idée directrice + Relevé textuel (citations intégrées entre guillemets) + Procédé formel identifié + Effet de sens produit.

3. LA DISSERTATION / ESSAI LITTÉRAIRE :
   - « Le sujet, tout le sujet, rien que le sujet » : analyse approfondie des mots-clés et de la consigne.
   - Développement en paragraphes argumentatifs de structure rigoureuse (Affirmation -> Justification logique -> Illustration littéraire concrète).
   - Plan dialectique (Thèse / Antithèse / Synthèse combinatoire) ou analytique selon le libellé.`,
    methodologySteps: [
      {
        name: 'Contraction de texte : Calibrage et reformulation',
        description: 'Dégager les grandes articulations logiques et reformuler les idées essentielles sans aucun plagiat de phrases entières.',
        keyRules: ['Respect du quart à +/- 10%', 'Indiquer le décompte exact des mots à la fin']
      },
      {
        name: 'Commentaire composé : Alliance fond et forme',
        description: 'Justifier chaque constat thématique par un procédé d\'écriture précis (figure de style, champ lexical, temps verbal, syntaxe).',
        keyRules: ['Bannir la paraphrase linéaire', 'Rédiger des transitions soignées entre centres d\'intérêt']
      },
      {
        name: 'Dissertation : Paragraphe argumentatif complet',
        description: 'Équilibrer les parties et appuyer chaque idée sur des œuvres précises du patrimoine négro-africain et mondial.',
        keyRules: ['Introduction en un seul paragraphe', 'Souligner les titres d\'œuvres complètes']
      }
    ],
    coreKnowledgeExcerpt: `Sujets et textes officiels traités dans les annales :
- Contraction N°1 : Mukala Kadima-Nzuji (« Diagnostic de l'enseignement en Afrique », Jeune Afrique 2011) - Résumé 177 mots, vocabulaire contextuel, discussion sur le choix des langues nationales comme vecteurs du savoir.
- Contraction N°2 : Joseph Ki-Zerbo (« Chefs d'États irresponsables », À quand l'Afrique ? 2013) - Résumé 150 mots, vocabulaire, discussion sur la redevabilité politique (Mandela, Nyerere vs dérives patrimoniales).
- Contraction N°3 : Norbert Zongo (« Que faire ? », L'Indépendant 1997) - Résumé 164 mots, vocabulaire, discussion sur l'afro-optimisme et la culture du travail.
- Commentaire N°1 : Mukala Kadima-Nzuji (« Gorgé de sang », Redire les mots anciens 1977) - L'Afrique ravagée par la guerre et le traumatisme du poète.
- Commentaire N°2 : Emile Lalsaga (« Perdition », Les sillons de l'existence 2014) - La perte des valeurs et la déshumanisation du monde.
- Commentaire N°3 rédigé : Sophie Heidi Kam (« Le blues de l'Afrique II », Quêtes 2004) - Peinture de la souffrance et appel au sursaut collectif.
- Dissertations rédigées : Catherine Cusset (Indigo : la littérature comme énoncé de la vérité), Prosper Kompaoré (Le théâtre-forum comme alternative d'éveil des consciences), Julien Clerc (L'art comme divertissement vs engagement), Emile Lalsaga (La poésie comme vibration intense de la vie).`,
    sampleInBookletSubjects: [
      'Contraction N°1 : Mukala Kadima-Nzuji : « Pourquoi ne pas faire de la langue du plus grand nombre le véhicule des connaissances ? » (Résumé 177 mots + Discussion).',
      'Contraction N°2 : Joseph Ki-Zerbo : « Les chefs d’États ont une tendance à vouloir diriger sans répondre de leurs actes. » (Résumé 150 mots + Discussion).',
      'Commentaire rédigé : Sophie Heidi Kam, Le blues de l’Afrique (II) : Allégorie d\'un continent meurtri et appel déchirant au changement.',
      'Dissertation : Catherine Cusset (Indigo) : « Je ne conçois la littérature que comme l’énoncé de la vérité. Au prix de la vie. Sinon ce n’est pas la peine d’écrire. »'
    ],
    sampleNewUntreatedSubjects: [
      'Commentaire composé : Jean-Pierre Guingané, Papa, oublie-moi : la critique théâtrale de la gérontocratie.',
      'Dissertation : « Le théâtre-forum peut-il véritablement transformer les mentalités citoyennes plus efficacement que le discours politique ? »',
      'Résumé & Discussion : La souveraineté monétaire et l\'autonomie économique de l\'Afrique à l\'ère de la mondialisation.'
    ]
  },
  {
    id: 'philo-sujets-corriges-ntsgod',
    title: 'Luxe des Philosophies : Dissertations et Commentaires de Textes Corrigés (Toutes Séries)',
    author: 'Dr Prince Fréjus Igouie QUENUM',
    roleOrAffiliation: 'Fondation Les Solutions du Prince Igouie Quenum (FOSOPIQ) — « Le Bac c\'est maintenant » (Bénin / Panafricain)',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['A1', 'A2', 'B', 'C', 'D', 'E'],
    discipline: 'philo',
    disciplineLabel: 'Philosophie & Épreuves du BAC (Luxe des Philosophies - FOSOPIQ)',
    badgeColor: 'purple',
    publicationYear: 2023,
    coverDescription: 'Ouvrage officiel d\'excellence didactique « Luxe des Philosophies — Le Bac c\'est maintenant », conçu par le Dr Prince Fréjus Igouie QUENUM (Fondation FOSOPIQ). Comporte 11 dissertations types intégralement traitées (définition des termes, reformulation, problème interrogatif, axes d\'analyse et références) et 8 commentaires de textes philosophiques intégraux avec étude ordonnée et double critique interne/externe.',
    overview: `Ouvrage didactique de référence de la Fondation FOSOPIQ (Dr Prince Fréjus Igouie QUENUM, « Luxe des Philosophies »).
Regroupe 11 dissertations philosophiques approfondies (Définition des expressions et termes essentiels, Reformulation, Problème interrogatif, Axes d'analyse et références d'auteurs) et 8 commentaires de textes philosophiques intégraux avec étude ordonnée et double critique interne/externe (Henri Bergson, G.W.F. Hegel, Friedrich Nietzsche, Jean-Paul Sartre, Jean-Jacques Rousseau, David Hume).`,
    keyConcepts: [
      'Conscience et animalité : rupture ontologique vs persistance pulsionnelle (Descartes, Pascal, Freud, Hobbes)',
      'Inconscient : nature ou histoire (Piaget, Wordsworth, Freud, Jung)',
      'L\'État : mal nécessaire ou accomplissement éthique (Althusser, Bakounine, Hobbes, Spinoza, Hegel, Rousseau)',
      'Pouvoir politique et violence : contrainte légitime vs despotisme (Schopenhauer, Gusdorf, Pascal, Valéry)',
      'Autrui et solitude : « L\'enfer c\'est l\'absence des autres » (Aristote, Malson, Saint-Exupéry, Sartre)',
      'Droit et justice : distinction légalité positive et équité éthique (Platon, Marx, Kant, Spinoza)',
      'Commentaires ordonnés : Bergson (L\'évolution créatrice), Hegel (Esthétique), Nietzsche (Généalogie de la morale, Humain trop humain, Par-delà le bien et le mal), Sartre (L\'existentialisme est un humanisme), Rousseau (Discours sur l\'inégalité), Hume (Du contrat originel)'
    ],
    methodologicalHighlights: [
      {
        name: 'Dissertation : Architecture conceptuelle en 4 temps',
        description: 'I. Définition rigoureuse des expressions et termes essentiels -> II. Reformulation fidèle du sujet -> III. Formulation du Problème interrogatif -> IV. Axes d\'analyse et références philosophiques précises.',
        keyRules: ['Pas d\'affirmation en guise de problème', 'Problématique formulée sous forme de vraie question']
      },
      {
        name: 'Commentaire de texte : Structure ordonnée & Intérêt philosophique',
        description: 'I. Éléments d\'introduction (Thème, Problème, Thèse de l\'auteur) -> II. Étude ordonnée par mouvements textuels précis -> III. Intérêt philosophique articulant Critique interne (intention et démarche) et Critique externe (enjeu problématisé et confrontation avec d\'autres doctrines).',
        keyRules: ['Délimiter précisément les lignes de chaque mouvement', 'Poser l\'enjeu philosophique sous forme de question problématisée']
      }
    ],
    coreKnowledgeExcerpt: `Corpus des sujets traités :
- Dissertations : 1. La conscience nous exclut-elle de l'animalité ? | 2. Peut-on considérer l'inconscient comme une nature ou une histoire ? | 3. L'État est-il un mal nécessaire ? | 4. Le pouvoir d'État est-il nécessairement violent ? | 5. « L'enfer c'est l'absence des autres » | 6. Suffit-il d'appliquer le droit pour que règne la justice ? | 7. « La liberté consiste à ne dépendre que des lois » | 8. La nation relève-t-elle de l'utopie ? | 9. L'athéisme est-il une illusion ? | 10. Le regain de la foi religieuse dans un monde scientifique | 11. La pratique religieuse est-elle caduque ?
- Commentaires de textes : Bergson (cerveau humain et indéfini des déclics), Hegel (double existence de l'homme : en soi et pour soi), Nietzsche (l'oubli comme faculté active et gardienne du bonheur), Sartre (la liberté se veut dans le concret avec autrui), Rousseau (la liberté sous la loi), Nietzsche (l'instinct grégaire d'obéissance), Nietzsche (la justice comme troc entre puissances égales), Hume (l'origine réelle du gouvernement dans la force et la conquête).`,
    sampleInBookletSubjects: [
      'Dissertation : « La conscience nous exclut-elle de l’animalité ? »',
      'Dissertation : « L’État est-il un mal nécessaire ? »',
      'Dissertation : « Suffit-il d\'appliquer le droit pour que règne la justice ? »',
      'Commentaire de texte : Henri Bergson, L\'évolution créatrice : De la conscience animale à la conscience humaine créatrice.',
      'Commentaire de texte : Friedrich Nietzsche, Généalogie de la morale : De la valeur vitale de la faculté d\'oubli.'
    ],
    sampleNewUntreatedSubjects: [
      'Dissertation : « La technique délivre-t-elle l\'homme des servitudes naturelles ? »',
      'Dissertation : « Peut-il y avoir une vérité sans démonstration ? »',
      'Commentaire : Spinoza, Traité politique : De la liberté de pensée comme fin suprême de la république.'
    ]
  },
  {
    id: 'philo-20-sujets-bac-tchad-farcha',
    title: '20 Sujets de Philosophie Type Bac Traités & Corrigés',
    author: 'Saleh Mahamat Addimi & Allah Hogoum Bessalé',
    roleOrAffiliation: 'Lycée Adventiste de Farcha (N\'Djaména, Tchad) — Fomesoutra.com',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['A', 'C', 'D'],
    discipline: 'philo',
    disciplineLabel: 'Philosophie & Épreuves du BAC (Dissertations Types Traitées)',
    badgeColor: 'purple',
    publicationYear: 2022,
    coverDescription: 'Recueil officiel tchadien regroupant 20 sujets types du Baccalauréat rédigés par Saleh Mahamat Addimi et validés par le Pr Allah Hogoum Bessalé.',
    overview: `Ouvrage d'entraînement intensif au Baccalauréat élaboré au Lycée Adventiste de Farcha à N'Djaména (Tchad).
Fournit 20 dissertations complètes couvrant l'ensemble du programme de philosophie de Terminale : conscience, inconscient, autrui, langage, travail, culture, violence, droit, État, démocratie, science, rôle du chef d'État, réconciliation nationale, et nature de la philosophie. Illustré de références universelles (Descartes, Sartre, Hegel, Marx, Freud, Gandhi) et panafricaines majeures (Seydou Badian, Thomas Sankara, François Tombalbaye / Ngarta).`,
    keyConcepts: [
      'Conscience & Inconscient : souveraineté réflexive vs faillibilité humaine (Valéry, Freud, Descartes, Bergson)',
      'Autrui & Altérité : « L\'homme n\'est rien sans les autres » (Seydou Badian, Sartre)',
      'Langage : véhicule de vérité et arme destructrice (« Les mots sont des pistolets chargés », Hölderlin, Sartre, Benveniste)',
      'Travail : aliénation et libération (Genèse, dialectique hégélienne du maître et de l\'esclave, Voltaire)',
      'Culture : relativisme et égale dignité contre le préjugé ethnocentrique (Aristote, Lévi-Strauss)',
      'Violence & Droit : non-violence active vs violence révolutionnaire (Gandhi, Max Weber, Marx, Bakounine)',
      'Paix & Gouvernance en Afrique : justice équitable, réconciliation et intégrité des dirigeants (Thomas Sankara, François Tombalbaye)',
      'Démocratie & Tyrannie : souveraineté populaire vs risques d\'instabilité (Lamartine, Platon)',
      'Science & Bonheur : puissance technique vs exigence éthique (« Science sans conscience », Rabelais, Descartes)',
      'Politique et force : « Ce n\'est pas la violence qui restaure, mais la violence qui ruine » (Machiavel, Bac 2021)'
    ],
    methodologicalHighlights: [
      {
        name: 'Dissertation type Bac Tchadien : Problématisation & Démarche Dialectique',
        description: 'Introduction posant la définition, le constat de contradiction et la question centrale -> Développement structuré en deux mouvements antithétiques étayés par des auteurs reconnus -> Bilan et ouverture.',
        keyRules: ['Définir précisément le terme directeur dès l\'entrée en matière', 'Mobiliser les penseurs africains et universels en prise directe avec le sujet']
      }
    ],
    coreKnowledgeExcerpt: `20 Sujets traités in extenso :
1. L’existence de l’inconscient est une certitude ou une hypothèse ? | 2. Paul Valéry : « La conscience règne mais ne gouverne pas » | 3. Peut-on vivre sans autrui ? | 4. Le langage est-il propre à l'homme ? | 5. Hölderlin : « Le langage est le bien le plus précieux en même temps le plus dangereux » | 6. Jean Lacroix : « Le travail est le signe d'aliénation en même temps remède à cette aliénation » | 7. Toutes les cultures se valent-elles ? | 8. L'homme est un être culturel ou naturel ? | 9. Est-il normal de faire la violence pour défendre ses droits ? | 10. L'État a-t-il pour but d'assurer le bonheur aux hommes ? | 11. L'homme est-il maître de ses opinions et de ses actes ? | 12. Le dialogue renvoie-t-il toutes violences ? | 13. Comment peut-on avoir une paix durable dans un État ? | 14. La démocratie est-elle préférable ? | 15. Est-ce que la science favorise toujours le bonheur ? | 16. Quel est le rôle d'un chef d'État dans une société ? | 17. Paul Valéry : « Si l'État est fort, il nous écrase. S'il est faible nous périssons » | 18. René Descartes : « Il n'y a pas de philosophie que l'on puisse apprendre mais on ne peut apprendre qu'à philosopher » | 19. L'homme peut-il être juste sans les autres ? | 20. Bac 2021 : Machiavel : « Ce n'est pas la violence qui restaure, mais la violence qui ruine, qu'il faut condamner ».`,
    sampleInBookletSubjects: [
      'Sujet 2 : Paul Valéry : « La conscience règne mais ne gouverne pas ». (Conscience vs pulsions inconscientes).',
      'Sujet 3 : « Peut-on vivre sans autrui ? » (Seydou Badian, Sous l\'orage : l\'homme n\'est rien sans les autres vs l\'enfer c\'est les autres).',
      'Sujet 13 : « Comment peut-on avoir une paix durable dans un État ? » (Thomas Sankara et François Tombalbaye : justice, patriotisme et bonne gouvernance).',
      'Sujet 20 (Bac 2021) : Machiavel : « Ce n\'est pas la violence qui restaure, mais la violence qui ruine, qu\'il faut condamner ».'
    ],
    sampleNewUntreatedSubjects: [
      'Dissertation : « La justice sociale peut-elle exister sans liberté d\'expression ? »',
      'Dissertation : « L\'art est-il une évasion hors du monde ou une prise de conscience de la réalité ? »',
      'Dissertation : « Le développement économique est-il la condition première du bonheur citoyen ? »'
    ]
  },
  {
    id: 'philo-precis-citations-ougard',
    title: 'Précis de Citations Philosophiques (Classées par Thème : Aspect Positif & Critique)',
    author: 'Ougard Aimé',
    roleOrAffiliation: 'Édition Méditon — Collection « PRÉCIS » (Ministère de l\'Éducation Nationale, Côte d\'Ivoire)',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['A1', 'A2', 'C', 'D', 'E'],
    discipline: 'philo',
    disciplineLabel: 'Philosophie & Épreuves du BAC (Corpus de Citations & Dictionnaire Parcellaire)',
    badgeColor: 'purple',
    publicationYear: 2020,
    coverDescription: 'Recueil officiel ivoirien regroupant plus de 200 citations philosophiques commentées sur 25 notions du programme avec double éclairage (thèse positive et critique/limites) et dictionnaire adapté à l\'étude parcellaire.',
    overview: `Ouvrage didactique incontournable pour la classe de Terminale en Côte d'Ivoire et dans les pays francophones (Éditions Méditon).
Chaque chapitre traite une notion centrale du programme officiel (Conscience, Inconscient, Mémoire, Société, Violence, Autrui, État et justice, Droit et justice, Liberté, Dieu et religion, Humanité, Histoire, Existence, Mythe et raison, Bonheur, Progrès, Technique, Philosophie, Désir, Imagination, Travail, Art, Langage, Théorie et expérience, Science) en articulant systématiquement :
1. Une définition rigoureuse de la notion
2. Un volet « Aspect positif » fournissant les citations de thèse avec auteurs, œuvres et explications
3. Un volet « Aspect critique » fournissant les citations d'antithèse et de contestation
4. Un dictionnaire de philosophie adapté à l'étude parcellaire (termes de A à V définis avec précision pour éviter les confusions conceptuelles et les contre-sens).`,
    keyConcepts: [
      'Conscience : intuition réflexive et dignité (Socrate, Descartes, Pascal, Rousseau, Hegel) vs limites et déterminismes (Schopenhauer, Bergson, Kant, Comte, Spinoza, Nietzsche, Freud, Valéry, Marx)',
      'Inconscient : contenu psychique refoulé actif (Freud, Hobbes) vs obstacle à la responsabilité morale (Alain, Sartre, Janet)',
      'Violence : fait naturel et rôle historique (Freud, Hobbes, Marx, Sorel, Machiavel, Weber) vs non-violence et éducation (Gandhi, Kant, Eschyle)',
      'Autrui : médiateur d\'humanisation (Saint-Exupéry, Sartre, Kant, Malson) vs rivalité, regard aliénateur et conflit (Sartre, Hegel, Schopenhauer, Stirner)',
      'État & Justice : facteur de liberté civile et d\'ordre (Montesquieu, Hegel, Kant, Rousseau, Spinoza, Pascal) vs monstre froid et instrument de domination (Hölderlin, Nietzsche, Althusser, Marx, Bakounine)',
      'Religion & Dieu : cohésion sociale et espérance (Jean-Paul II, Bergson, Voltaire, Dostoïevski) vs illusion, aliénation et intolérance (Bakounine, Feuerbach, Marx, Freud, Spinoza)',
      'Travail : humanisation, dignité et indépendance (Marx, Voltaire, Beauvoir, Bernard Dadié, Amadou Koné, Hegel) vs aliénation, exploitation et souffrance (Marx, Alain, Nietzsche, Genèse)',
      'Technique & Science : maîtrise de la nature et bien-être (Descartes, Comte, Galilée, Leroi-Gourhan) vs menaces écologiques, désacralisation et apprenti sorcier (Rabelais, Hans Jonas, Einstein, Ellul)',
      'Dictionnaire parcellaire : définitions normatives pour l\'analyse de sujets (Absolu, Acte manqué, Arbitraire, Déterminisme, Dialectique, Droit positif/naturel, etc.)'
    ],
    methodologicalHighlights: [
      {
        name: 'Méthode de la double exploitation des citations (Thèse vs Antithèse)',
        description: 'Chaque citation est explicitée selon son contexte philosophique propre pour nourrir l\'argumentation sans jamais la réduire à un catalogue mécanique.',
        keyRules: ['Toujours expliciter le lien entre la citation et le problème posé', 'Confronter systématiquement la thèse et son revers critique']
      },
      {
        name: 'Étude parcellaire du sujet de dissertation',
        description: 'Définition exacte de chaque terme du sujet à l\'aide du lexique spécialisé pour dégager la véritable tension conceptuelle sans contresens.',
        keyRules: ['Définir chaque mot selon son sens philosophique contextuel', 'Repérer les opérateurs logiques et les présupposés']
      }
    ],
    coreKnowledgeExcerpt: `25 Notions traitées sous angle positif et critique avec citations maîtresses :
- Conscience, Inconscient, Mémoire, Société, Violence, Autrui, État et justice, Droit et justice, Liberté, Dieu et religion, Humanité, Histoire, Existence, Mythe et raison, Bonheur, Progrès, Technique, Philosophie, Désir, Imagination, Travail, Art, Langage, Théorie et expérience, Science.
- Dictionnaire philosophique de l'étude parcellaire : définitions de A à V.`,
    sampleInBookletSubjects: [
      'Étude parcellaire et citations : « La conscience est-elle source de liberté ou d\'illusion ? »',
      'Thèse / Antithèse : « L\'État est-il le garant de la justice ou le fossoyeur de nos libertés ? »',
      'Confrontation : « La technique nous libère-t-elle de la nature ou nous asservit-elle à la machine ? »',
      'Lexique : Définitions comparées de la contrainte, de l\'obligation, du droit positif et du droit naturel.'
    ],
    sampleNewUntreatedSubjects: [
      'Dissertation : « Peut-on concevoir une société sans autorité politique ? »',
      'Dissertation : « La vérité scientifique est-elle définitive ou provisoire ? »',
      'Dissertation : « Le bonheur est-il le but suprême de la morale ? »'
    ]
  },
  {
    id: 'philo-resume-cours-fosopiq',
    title: 'Résumé des Cours de Philosophie (9 Leçons Méthodiques & Lexique Fondamental)',
    author: 'Fondation Fosopiq Éducation',
    roleOrAffiliation: 'Fosopiq Pédagogie — Programme Panafricain de Terminale',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['A', 'C', 'D'],
    discipline: 'philo',
    disciplineLabel: 'Philosophie & Épreuves du BAC (Fiches Synthétiques de Cours)',
    badgeColor: 'purple',
    publicationYear: 2023,
    coverDescription: 'Fiches synthétiques de révision rapide couvrant les 9 leçons clés du programme officiel avec distinctions thèse/antithèse, citations authentifiées et lexique conceptuel.',
    overview: `Manuel condensé conçu par la Fondation Fosopiq Éducation pour permettre aux candidats au Baccalauréat d'assimiler rapidement l'armature conceptuelle et argumentative de la philosophie en 9 leçons :
1. La Conscience et l'Inconscient (Pascal, Descartes, Rousseau, Bergson, Kant vs Freud, Sartre, Alain)
2. La Violence (Freud, Hobbes, Nietzsche vs Pascal, Balzac)
3. Autrui (Sartre, Hegel, Hobbes vs Seydou Badian, Aristote, Kant, Spinoza)
4. L'État (Rousseau, Bergson, Pascal vs Bakounine, Marx, Nietzsche, Gandhi, Platon)
5. La Religion (Pascal, Bergson, Moubarak vs Nietzsche, Feuerbach, Marx, Hobbes)
6. L'Histoire (Sartre, Marx vs Plotin, Hegel, Freud)
7. Le Travail (Descartes, Bernard Dadié, Voltaire vs Genèse, Marx, Platon)
8. La Technique et la Science (Descartes, Jean Rostand vs Hans Jonas, Rabelais, Jaspers, Huxley)
9. La Philosophie (Descartes, Rabelais vs Marx, Kant)
Complété par un lexique des notions fondamentales (Aliénation, Fatalité, Inhérent, Destin, Contrainte, Liberté, etc.).`,
    keyConcepts: [
      'Leçon 1 : Conscience garante de la liberté vs Inconscient et déresponsabilisation',
      'Leçon 2 : Violence comme fait pulsionnel vs Maîtrise par la conscience morale',
      'Leçon 3 : Autrui aliénateur (regard, duel) vs Autrui source d\'humanisation (« L\'homme n\'est rien sans les autres »)',
      'Leçon 4 : L\'État nécessaire pour la paix vs L\'État oppresseur et voies pacifiques',
      'Leçon 5 : Religion facteur d\'unité et refuge vs Religion opium et aliénation',
      'Leçon 6 : Homme acteur de l\'histoire vs Homme produit de l\'histoire',
      'Leçon 7 : Travail source d\'émancipation et de dignité vs Travail aliéné et mortification',
      'Leçon 8 : Technique émancipatrice vs Périls technoscientifiques et principe responsabilité',
      'Leçon 9 : Philosophie indispensable veilleuse éthique vs Querelles théoriques abstraites'
    ],
    methodologicalHighlights: [
      {
        name: 'Structure Bipolaire de Révision Rapide (Aspects Positifs / Limites & Critiques)',
        description: 'Chaque leçon présente clairement les arguments de soutien à la notion et les arguments de réfutation ou de nuance pour bâtir immédiatement un plan dialectique équilibré.',
        keyRules: ['Maîtriser au moins deux auteurs pour la thèse et deux auteurs pour l\'antithèse', 'Utiliser les citations contextualisées']
      }
    ],
    coreKnowledgeExcerpt: `9 Leçons complètes de Terminale :
1. Conscience & Inconscient | 2. Violence | 3. Autrui | 4. État | 5. Religion | 6. Histoire | 7. Travail | 8. Technique & Science | 9. Philosophie.
Lexique conceptuel de base.`,
    sampleInBookletSubjects: [
      'Fiche Leçon 1 : « La conscience est-elle synonyme de liberté ? »',
      'Fiche Leçon 3 : « Peut-on vivre sans autrui ? » (Seydou Badian vs Sartre)',
      'Fiche Leçon 4 : « L\'État est-il l\'ennemi de la liberté individuelle ? » (Rousseau vs Bakounine)',
      'Fiche Leçon 8 : « Le progrès technique garantit-il le bonheur de l\'homme ? »'
    ],
    sampleNewUntreatedSubjects: [
      'Dissertation : « La vérité exige-t-elle le doute ? »',
      'Dissertation : « Faut-il craindre la liberté ? »',
      'Dissertation : « Le droit peut-il être injuste ? »'
    ]
  },
  {
    id: 'philo-kit-survie-maoude-reboot',
    title: 'Kit de Survie Philosophie 1ère/Tle : Cours, 40 Citations Clés, Définitions & Sujets Corrigés (Maoude Gochi Ali / Maoude Reboot)',
    discipline: 'philo',
    disciplineLabel: 'Philosophie (Terminale & Première)',
    badgeColor: 'amber',
    cycle: 'second_cycle_bac',
    author: 'Maoude Gochi Ali (Collection Maoude Reboot, Nouvelle Édition)',
    countryOrigin: 'Niger / Burkina Faso / Bénin / Côte d’Ivoire / CEDEAO',
    summary: 'Manuel didactique de référence pour les Terminales A, C, D, G et Premières de l\'espace CEDEAO : cours complets (Origines et spécificité, Comparaisons avec Mythe/Religion/Science, Métaphysique, Anthropologie, Axiologie, Philosophie Africaine), 40 citations incontournables expliquées, définitions rigoureuses de tous les concepts, méthodologie du plan directeur (4 étapes de la dissertation et grille du commentaire) et sujets types Bac rédigés.',
    methodologyOverview: `MÉTHODOLOGIE DU PLAN DIRECTEUR EN DISSERTATION PHILOSOPHIQUE (Maoude Gochi Ali) :
1. Étude parcellaire : Répertorier les mots, groupes de mots et expressions essentiels ou difficiles et les définir en contexte philosophique pour éviter tout contresens.
2. Reformulation du sujet : Exprimer autrement le sujet pour mieux le comprendre et en dégager l'orientation.
3. Problématisation : Poser clairement le problème philosophique central (l'obstacle / controverse sous forme interrogative).
4. Plan détaillé du développement : Structurer la réflexion en axes progressifs (généralement 2 ou 3) avec transitions critiques solides.

MÉTHODOLOGIE DU COMMENTAIRE COMPOSÉ (8 points de la grille de lecture) :
- Introduction : Thème, problème soulevé, thèse de l'auteur, antithèse, division logique du texte en mouvements (parties) et enjeux.
- Étude ordonnée : Explication suivie du texte, mouvement par mouvement, en analysant les articulations logiques et les termes pivots sans jamais paraphraser.
- Intérêt philosophique : Critique interne (évaluation de la cohérence et de la méthode de l'auteur) et critique externe (confrontation avec d'autres penseurs majeurs).
- Conclusion : Bilan synthétique et prise de position personnelle nuancée.`,
    keyConcepts: [
      'Origines : Naissance en Grèce (Milet, Hadot, Heidegger) vs Origines égyptiennes africaines (Cheikh Anta Diop)',
      'Définition : Quête de vérité et non possession (Jaspers), esprit critique (Jankélévitch, Towa)',
      'Spécificité : Philosophie vs Mythe (irréel vs réel), Religion (foi vs raison), Science (pourquoi vs comment, épistémologie)',
      'Métaphysique : Dualisme platonicien, racines de l\'arbre cartésien, critique kantienne des noumènes, Marx, Nietzsche',
      'Anthropologie & Axiologie : Microcosme rationnel (Descartes, Hume, Malson), valeurs morales (Lat Dior, Soundiata, Aline Sitoé Diatta)',
      'Philosophie Africaine : Débat sur la Philosophie bantoue de Placide Tempels (Senghor, Kagamé vs Towa, Hountondji)',
      'Notions clés : Conscience, Inconscient, Passions, Autrui, Espace et Temps, Histoire, Travail, Langage, Vérité, État, Justice, Liberté'
    ],
    methodologicalHighlights: [
      {
        name: '4 Modèles d\'Introduction Rédigés au Bac',
        description: 'Présentation pas à pas des 4 techniques d\'amorce : par définition de concepts, par citation, par constat de départ, ou pour un sujet citation à apprécier.',
        keyRules: ['Toujours formuler le problème sous forme de question', 'Annoncer les axes avec des liens logiques et non un catalogue vide']
      },
      {
        name: 'Technique d\'Argumentation en 6 Étapes',
        description: '1. Rappeler la thèse -> 2. Reformuler la thèse -> 3. Justifier avec un argument -> 4. Illustrer par un exemple -> 5. Citation d\'auteur -> 6. Expliciter la citation en lien avec la thèse.',
        keyRules: ['1 paragraphe = 1 argument + 1 exemple + 1 citation expliquée', 'Transitions critiques obligatoires entre les parties']
      }
    ],
    coreKnowledgeExcerpt: `40 Citations clés du Baccalauréat (Descartes, Socrate, Kant, Nietzsche, Platon, Aristote, Spinoza, Locke, Marx, Hobbes, Épicure, Hegel, Sartre, Pascal, Husserl, Bergson, etc.).
Sujets entièrement corrigés dans le fascicule :
- « Qui suis-je ? » (Identité sociale, inconscient freudien, liberté sartrienne)
- « Est-il possible d'échapper au temps ? »
- « Le travail divise-t-il les hommes ? »
- « À quoi bon expliquer une œuvre d'art ? »
- « Autrui est-il condition ou limite à ma liberté ? »
- « La conscience est-elle source de liberté ou de contrainte ? »
- « La liberté est-elle une illusion ? »
- Commentaire d'Hegel (Esthétique : le beau naturel vs le beau artistique)
- Commentaire de Freud (Essais de psychanalyse appliquée : le moi n'est pas maître dans sa maison).`,
    sampleInBookletSubjects: [
      'Sujet 1 : « Est-il possible d’échapper au temps ? » (Épicure, Saint Augustin, Proust, Arendt, Pascal)',
      'Sujet 2 : « Le travail divise-t-il les hommes ? » (Marx, Adam Smith, Platon, Bergson)',
      'Sujet 3 : « À quoi bon expliquer une œuvre d’art ? » (Kant, Hannah Arendt, Picasso, Hegel, Bergson)',
      'Sujet 4 : « Autrui est-il condition ou limite à ma liberté ? » (Sartre, Hobbes, Kant, Levinas)',
      'Sujet 6 : « La liberté est-elle une illusion ? » (Descartes, Spinoza, Marx, Freud, Platon, Kant)'
    ],
    sampleNewUntreatedSubjects: [
      'Dissertation : « La science peut-elle tenir lieu de philosophie ? »',
      'Dissertation : « L\'inconscient est-il une excuse pour fuir notre responsabilité ? »',
      'Commentaire : Texte de Marcien Towa sur la critique de l\'ethnophilosophie'
    ]
  },
  {
    id: 'philo-brochure-le-baobab-guinee',
    title: 'Brochure de Philosophie & Français Terminale — Le Baobab (1ère Édition - Mr Augustin Soukouya Sevadouno "Mr Seva")',
    discipline: 'philo',
    disciplineLabel: 'Philosophie & Français (Terminale)',
    badgeColor: 'emerald',
    cycle: 'second_cycle_bac',
    author: 'Collection de professeurs réunis autour du « BAOBAB », sous la direction de Mr Augustin Soukouya Sevadouno ("MR SEVA")',
    countryOrigin: 'République de Guinée (Conakry, Lycées GS Baba Cissé, etc.)',
    summary: 'Ouvrage didactique officiel conforme au nouveau programme guinéen des Terminales Sciences Sociales, Maths et Expérimentales : synthèse complète du programme de philosophie (Chapitre I : Esthétique & Art africain traditionnel ; Chapitre II : Épistémologie & Méthode expérimentale ; Chapitre III : Philosophie morale et politique : État, Droit, Liberté, Justice) avec 18 sujets de Baccalauréat intégralement traités et expliqués.',
    methodologyOverview: `APPROCHE PÉDAGOGIQUE DU BAOBAB (Mr Augustin Soukouya Sevadouno "Mr Seva") :
1. Articulation des concepts aux réalités africaines et universelles :
   - L'Esthétique : confrontation du réalisme (Bacon, Zeuxis) et du surréalisme (Breton, Sartre), le beau kantien, et les 7 fonctions sacrées de l'art africain traditionnel (politico-sociale, thérapeutique comme le Tarassi chez les Touaregs, magico-religieuse, ludique et pédagogique, symbolique, commémorative, esthétique-utile).
   - L'Épistémologie : classification tripartite des sciences (formelles/abstraites, humaines/sociales, expérimentales), la démarche de Claude Bernard (observation -> idée hypothèse -> expérimentation -> théorie), et la vérité scientifique (provisoire, fille du temps, rectification d'erreurs selon Bachelard).
   - La Philosophie politique et morale : nécessité de l'État de droit contre l'état de guerre sauvage (Bossuet, Hobbes, Spinoza), les libertés civile et politique, l'indépendance de la justice face au pouvoir, et les limites éthiques de la liberté d'expression.

2. Structure des corrigés de sujets :
   - Compréhension du thème et formulation des Problèmes / Pistes de Réflexion (PPR).
   - Traité possible pas à pas mobilisant philosophes occidentaux et contextes africains concrets (Guinée, Côte d'Ivoire, Tchad, Somalie, etc.).`,
    keyConcepts: [
      'Esthétique : Définition du beau (Kant : plaisir universel sans concept), réalisme vs surréalisme, art vs artisanat',
      'Art Africain : 7 fonctions fondamentales (sacré, anonyme, utilitaire, communautaire, thérapeutique du Tarassi)',
      'Épistémologie : Sciences logico-formelles, sciences humaines, sciences de la nature',
      'Méthode expérimentale : Claude Bernard (« Le fait suggère l\'idée, l\'idée dirige l\'expérience, l\'expérience juge l\'idée »)',
      'Vérité scientifique : Vérités formelle, objective (dialectique, fille du temps, Bachelard), utilitaire (pragmatisme)',
      'État & Liberté : Absolutisme, anarchie, démocratie ; État gendarme et État providence ; liberté naturelle vs liberté civile',
      'Justice & Force : Pascal (« La justice sans la force est impuissante, la force sans la justice est tyrannique »)',
      'Liberté d\'expression : Démocratie (Jefferson, Spinoza) vs dérives de la haine ethnocentriste'
    ],
    methodologicalHighlights: [
      {
        name: 'Les 7 Fonctions Vitales de l\'Art Africain Traditionnel',
        description: 'Grille d\'analyse systématique pour tous les sujets d\'esthétique africaine au Bac : politique, thérapeutique, magico-religieuse, ludique, symbolique, commémorative, esthétique au service de l\'utile.',
        keyRules: ['En Afrique traditionnelle, n\'est beau que ce qui sert', 'L\'art africain est collectif, anonyme et sacré']
      },
      {
        name: 'Les 3 Étapes de la Démarche Expérimentale (Claude Bernard & Bachelard)',
        description: 'Observation du fait -> Formulation de l\'hypothèse provisoire -> Expérimentation instrumentée (vérification).',
        keyRules: ['La vérité scientifique est une rectification permanente d\'erreurs', 'Elle est fille du temps et non absolue']
      }
    ],
    coreKnowledgeExcerpt: `18 Sujets majeurs traités et analysés :
- Sujet Bac Unique 2007 : « L'homme montre mieux son habileté dans les productions surgissant de l'esprit qu'en imitant la nature » (Hegel)
- Sujet : « L'artiste contrairement au savant ne voit pas la nature comme elle est, mais comme il est »
- Sujet Bac 2008 : « Rien n'est beau ou tout peut être beau pour qui sait voir... » (Alain)
- Sujet Bac Blanc Coyah 2012 : « En Afrique traditionnelle, n'est beau que tout ce qui sert »
- Sujet Bac 2001 : « Quel que soit le point de départ de l'activité scientifique... » (Gaston Bachelard)
- Sujet : « C'est en cherchant l'impossible que le scientifique a toujours réalisé le possible » (Lavoisier, Claude Bernard)
- Sujet : « La vérité est une conquête progressive et elle est fille du temps »
- Sujet Bac 2003 & 2011 : « Sans État, c'est la guerre de tous contre tous... » (Bossuet)
- Sujet : « Être libre dans la société... » (Liberté, lois et dérives en Afrique)
- Sujet Bac 2012 : « La justice sans la force est impuissante, la force sans la justice est tyrannique » (Pascal, émergence africaine)
- Sujet Bac 2008 : « Le droit à l'expression autorise-t-il à soutenir n'importe quelle opinion ? »
- Sujet Bac Blanc Guéckédou 2012 : « La démocratie... conscience civique acquise par les peuples »
- Sujet Bac II 1995 : « Je déteste vos idées mais je suis prêt à mourir pour que vous les exprimiez » (Voltaire).`,
    sampleInBookletSubjects: [
      'Sujet Bac Unique 2007 : « L\'homme montre mieux son habileté dans les productions de l\'esprit qu\'en imitant la nature » (Hegel)',
      'Sujet Bac Blanc Coyah 2012 : « En Afrique traditionnelle, n\'est beau que tout ce qui sert »',
      'Sujet Bac 2001 : « Toute explication est transcendante » (Bachelard)',
      'Sujet Bac 2003/2011 : « Sans État, c\'est la guerre de tous contre tous » (Bossuet)',
      'Sujet Bac 2012 : « La justice sans la force est impuissante, la force sans la justice est tyrannique » (Pascal)',
      'Sujet Bac 2008 : « Le droit à l\'expression autorise-t-il à soutenir n\'importe quelle opinion ? »'
    ],
    sampleNewUntreatedSubjects: [
      'Dissertation : « L\'État doit-il être fondé sur la morale ou sur la force ? »',
      'Dissertation : « La technique nous libère-t-elle de la nature ou nous asservit-elle ? »',
      'Dissertation : « L\'artiste a-t-il un devoir envers sa communauté ? »'
    ]
  },
  {
    id: 'philo-tra-bi-honore-prepa-bac-2024',
    title: 'Top Philo : Méthodologie du Commentaire et de la Dissertation Philosophique (Spécial Prépa BAC)',
    author: 'Prof. TRA BI Kouadio Honoré',
    roleOrAffiliation: 'Lycée Municipal de Sinematiali, Lycée Moderne 1 de Bouaflé, Lycée Moderne de Zuénoula, Collège MUPES de Hiré',
    countryOrigin: 'Côte d\'Ivoire',
    discipline: 'philo',
    disciplineLabel: 'Philosophie & Épreuves du BAC',
    badgeColor: 'emerald',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['A1', 'A2', 'B', 'C', 'D', 'E', 'H'],
    publicationYear: 2024,
    coverDescription: 'Ouvrage officiel didactique d\'excellence Spécial Prépa Bac 2023-2024, conçu par le Prof. TRA BI Kouadio Honoré (Côte d\'Ivoire). Devise : « La pédagogie notre métier, l\'excellence notre devise — Le Bac c\'est nous ! »',
    overview: 'Guide didactique exhaustif (154 pages) couvrant les 4 grandes compétences du programme officiel des Terminales : Compétence I (Méthodologie intégrale de la dissertation et du commentaire de texte philosophique avec étude ordonnée, critique interne et externe), Compétence II (Connaissance de l\'homme : conscience, inconscient, mémoire, violence ; Vie en société : État, droit, justice, autrui ; Dieu et religion), Compétence III (Valeur de la philosophie, progrès, travail et bonheur), Compétence IV (Le langage, la vérité et la démarche scientifique de Claude Bernard et Bachelard). Contient 55 textes d\'auteurs majeurs commentés et les corrigés de sujets d\'annales du Baccalauréat ivoirien.',
    keyConcepts: [
      'Méthodologie de la Dissertation en 3 étapes préalables (Étude parcellaire, Reformulation, Problématisation avec aspects)',
      'Méthodologie du Commentaire de Texte (Thème, Problème, Thèse, Mouvements, Étude ordonnée, Critique interne et externe)',
      'Conscience & Inconscient (Cogito cartésien, Ça/Moi/Surmoi freudien, Sartre mauvaise foi, Alain idolâtrie du corps)',
      'Mémoire bergsonienne (Mémoire-habitude vs Mémoire pure dans Matière et mémoire)',
      'Violence et État (Max Weber monopole de la violence légitime, Spinoza fin de l\'État est la liberté, Stirner/Nietzsche/Marx)',
      'Relation à autrui (Sartre l\'enfer c\'est les autres vs Badian l\'homme n\'est rien sans les hommes, Garaudy, Malson)',
      'Dieu et Religion (Durkheim le sacré, Ibn Khaldun cohésion, Bergson assurance, Marx opium, Freud névrose, Gandhi)',
      'Valeur de la Philosophie (Descartes yeux fermés sans philosopher, Jaspers être en route, Marx thèse XI, Hountondji débat)',
      'Progrès, Travail et Bonheur (Tripalium vs humanisation, Voltaire, Dadié Climbié, Heidegger Sérénité, Jonas)',
      'Langage et Vérité (Hegel nous pensons dans les mots, Saussure, Brice Parrain, Diderot et Bergson limites du langage)',
      'Connaissance scientifique (Démarche expérimentale de Claude Bernard, Bachelard rupture épistémologique, Popper falsifiabilité)'
    ],
    methodologicalHighlights: [
      {
        name: 'Phase préparatoire de la Dissertation (Étude parcellaire & Problématisation)',
        description: 'Définir les termes pivots dans leur contexte philosophique précis, reformuler sans trahir le sens global, et faire jaillir le problème central sous forme interrogative suivi des questions d\'aspects.',
        keyRules: [
          'Le problème doit être une question philosophique qui révèle la contradiction interne.',
          'Les aspects doivent être des questions directes annonçant clairement les axes du développement.'
        ]
      },
      {
        name: 'L\'Intérêt philosophique du Commentaire (Critique interne & Critique externe)',
        description: 'Évaluer la forme dans la critique interne (cohérence logique, adéquation démarche/intention de l\'auteur) puis le fond dans la critique externe (Axe 1 : étayage de la thèse ; Axe 2 : dépassement critique par d\'autres penseurs).',
        keyRules: [
          'Ne jamais réduire le commentaire à une explication de texte littéraire.',
          'La critique externe doit comporter un débat d\'idées équilibré entre auteurs contradictoires.'
        ]
      }
    ],
    coreKnowledgeExcerpt: `55 Textes commentés et sujets du Bac traités dans l'ouvrage de TRA BI Kouadio Honoré :
- Sujet : « Doit-on condamner le progrès technique ? » (Heidegger, Jonas vs Bergson, Descartes)
- Sujet : « Le travail humanise-t-il ? » (Marx Le Capital, Voltaire vs Platon La République, Simone Weil)
- Sujet Bac : « L'inconscient n'est-il qu'un mythe ? » (Sartre, Alain, Kant vs Freud, Valéry)
- Sujet : « L'homme est-il toujours libre ? » (Descartes vs Freud, Marx)
- Sujet Bac 2019 : « La conscience nous exclut-elle de l'animalité ? »
- Sujet : « Peut-on se fier à la conscience ? » (Descartes, Rousseau vs Leibniz, Freud)
- Sujet : « Peut-on qualifier l'État d'immoral ? » (Lénine, Nietzsche, Stirner vs Spinoza, Hegel)
- Sujet : « « L'enfer c'est les autres ». Qu'en pensez-vous ? » (Sartre, Machiavel vs Bachelard, Aristote, Badian)
- Sujet Bac C-D-E 2006 : « La liberté consiste à ne dépendre que des lois » (Rousseau, Hobbes vs Platon Calliclès, Marx)
- Sujet : « La justice est-elle nécessaire à la cohésion sociale ? » (Platon, Rousseau vs Marx)
- Sujet : « Peut-on gouverner sans violence ? » (Spinoza vs Machiavel, Weber)
- Sujet : « La religion rend-elle l'homme meilleur ? » (Kant, Martin Gray vs Marx, Nietzsche)
- Sujet : « La croyance en Dieu relève-t-elle de l'utopie ? » (Marx, Freud vs Pascal, Descartes)
- Sujet : « La religion est-elle le ciment de la cohésion sociale ? » (Durkheim, Ibn Khaldun vs Khomeini, Nietzsche)
- Sujet Bac C-D-E 2001 : « La religion est le soupir de la créature opprimée » (Marx, Hume vs Saint Augustin, Gabriel Marcel)
- Sujet : « La pratique religieuse est-elle une activité caduque ? » (Comte, Schopenhauer vs Bacon, Bergson)
- Sujet Bac C-D-E 1998 : « Le fanatisme religieux se justifie-t-il ? » (Alain, Jacob, Rousseau)
- Sujet : « La religion peut-elle servir de rempart contre la barbarie ? » (Durkheim, Bible vs Nietzsche, Khomeini)
- Sujet : « « La philosophie est une activité rétrograde ». Qu'en pensez-vous ? » (Marx vs Descartes, Russell, Socrate)
- Sujet Bac A1&A2 2018 : « Le rejet de la philosophie constitue-t-il un danger pour l'humanité ? » (Platon philosophes rois, Russell)
- Sujet Bac B 2009 : « Peut-on tenir la philosophie en marge du progrès de l'humanité ? »
- Sujet Bac C-D-E 2005 : « L'homme n'a pas d'histoire mais il est une histoire » (Sartre, Malson vs Freud, Ecclésiaste)
- Sujet Bac 2018 : « L'existence humaine est-elle une page à écrire ? » (Sartre existentialisme vs Hegel déterminisme divin, Freud)
- Sujet : « La science peut-elle résoudre tous les problèmes de l'homme ? » (Descartes, Ellul vs Rousseau, Hans Jonas)
- Sujet Bac 2019 : « Le progrès scientifique rend-il caduque le discours philosophique ? » (Marx, Ellul vs Descartes, Alain, Rabelais)
- Sujet Bac A1/A2 2021 : « Le travail n'est pour l'homme qu'un moyen de subvenir à ses besoins » (Foucault, Kane vs Nietzsche, Mounier)
- Sujet : « Le refus du travail a-t-il un sens ? » (Simone Weil, Genèse vs Hegel, Adam Smith, Voltaire)
- Sujet Bac A1/A2 2022 : « La technique menace-t-elle l'homme ? » (Bergson, Jonas, Einstein vs Spengler, Descartes)
- Sujet Bac B-H 2017 : « Parler, est-ce ne dire que la vérité ? » (Hegel, Platon Cratyle vs Bergson, Freud, Wittgenstein)
- Sujet Bac C-D-E 1996 : « L'unanimité est-elle un critère de vérité ? » (Platon doxa vs Bachelard vérité polémique)
- Sujet Bac A1-A2 2003 : « La vérité est-elle facteur de cohésion sociale ? » (Nietzsche, Platon caverne, Fichte)
- Sujet Bac C-D-E 2011 : « La démarche scientifique exclut-elle tout recours à la foi ? » (Freud vs Claude Bernard, Nietzsche)
- Sujet Bac C-D-E 2023 : « Peut-on connaître scientifiquement l'homme ? » (Descartes, Naville béhaviorisme vs Bergson, Sartre, Arendt)
- Textes commentés : Spinoza (Traité théologico-politique), Bergson (L'Évolution créatrice), Freud (Malaise dans la civilisation), Descartes (Discours de la méthode, Règles pour la direction de l'esprit), Pascal (Pensées, De l'esprit géométrique), Kant (Critique de la raison pure, Critique de la faculté de juger), Hegel (Philosophie de l'Esprit, La Raison dans l'histoire), Hume (Dialogues sur la religion naturelle), Nietzsche (Le Gai Savoir, Le Livre du philosophe), Hountondji (Sur la philosophie africaine), Marc-Aurèle (Pensées pour moi-même), Bachelard (La Formation de l'esprit scientifique, La Psychanalyse du feu, La Philosophie du non), Alain (Propos).`,
    sampleInBookletSubjects: [
      'Sujet Bac : « Doit-on condamner le progrès technique ? »',
      'Sujet Bac : « Le travail humanise-t-il ? »',
      'Sujet Bac : « L\'inconscient n\'est-il qu\'un mythe ? »',
      'Sujet Bac : « Peut-on qualifier l\'État d\'immoral ? »',
      'Sujet Bac C-D-E 2006 : « La liberté consiste à ne dépendre que des lois »',
      'Sujet Bac C-D-E 2011 : « La démarche scientifique exclut-elle tout recours à la foi ? »',
      'Sujet Bac C-D-E 2023 : « Peut-on connaître scientifiquement l\'homme ? »',
      'Texte commenté : Spinoza sur la liberté civile et l\'État de raison',
      'Texte commenté : Bergson sur la différence de nature entre conscience humaine et animale'
    ],
    sampleNewUntreatedSubjects: [
      'Dissertation : « La vérité scientifique est-elle définitive ? »',
      'Dissertation : « Peut-on concilier le devoir moral et la quête du bonheur ? »',
      'Commentaire de texte : Alain sur le doute comme sel de l\'esprit'
    ]
  },
  {
    id: 'philo-ouali-50-sujets-corriges',
    title: 'Recueil des 50 Sujets de Dissertation Philosophique Traités et Corrigés',
    author: 'John Kennedy OUALI',
    roleOrAffiliation: 'Professeur et Chercheur en Philosophie Africaine et Francophone',
    countryOrigin: 'Burkina Faso / International',
    discipline: 'philo',
    disciplineLabel: 'Philosophie & Épreuves du BAC',
    badgeColor: 'violet',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['A', 'C', 'D', 'G', 'E'],
    publicationYear: 2023,
    coverDescription: 'Ouvrage d\'excellence didactique et méthodologique comprenant 50 dissertations philosophiques intégralement rédigées et corrigées selon les normes académiques officielles. Devise : « L\'éducation notre dénominateur commun » — John Kennedy OUALI.',
    overview: 'Recueil monumental traitant 50 sujets incontournables du Baccalauréat en Terminale. Chaque sujet bénéficie d\'une introduction complète (amorce, définitions contextuelles, problématisation rigoureuse, questions directrices), d\'un développement dialectique approfondi en 2 ou 3 parties étayé par les grands philosophes classiques, modernes, contemporains et africains (Socrate, Platon, Aristote, Descartes, Spinoza, Kant, Hegel, Marx, Nietzsche, Freud, Bergson, Alain, Bachelard, Sartre, Habermas, Rawls, Ki-Zerbo, Hountondji), et d\'une conclusion synthétique nuancée.',
    keyConcepts: [
      'Le Doute philosophique (Descartes doute méthodique vs Pyrrhon scepticisme vs Alain le sel de l\'esprit)',
      'Science vs Philosophie (Piaget, Bachelard la science crée de la philo, Cheikh Anta Diop, Descartes arbre)',
      'Foi et Raison (Encyclique Fides et Ratio de Jean-Paul II, Pascal le cœur a ses raisons, Leibniz)',
      'Critique de la Démocratie (Platon République livre VII licence et tyrannie, Rousseau, Montesquieu, Nietzsche)',
      'L\'État, un mal nécessaire ? (Hobbes Léviathan, Marx AIE, Proudhon, Bakounine, Weber monopole violence légitime)',
      'Nature et Culture (Lucien Malson Les enfants sauvages, Marx 11e thèse sur Feuerbach, Sartre, Senghor)',
      'Dogmatisme en philosophie (Pythagore ami de la sagesse, Socrate humilité, Gusdorf vœu secret, Kant)',
      'Art africain traditionnel (Civilisation Nok, masques Nimba, Hegel vs Ki-Zerbo, fonctions magico-sociales)',
      'Liberté vs Bonheur (La Fontaine Le loup et le chien, Kant impératif catégorique, Épicure, Alain action libre)',
      'Société sans religion (Auguste Comte loi des 3 états, Nietzsche mort de Dieu et totalitarismes du 20e siècle)',
      'Théories scientifiques et réel (Pierre Duhem La théorie physique : description vs explication, Karl Popper)',
      'Travail : contrainte ou obligation (Tripalium, mythe de Prométhée, Marx travail aliéné vs perfectibilité)',
      'La passion et la lucidité (Stendhal cristallisation, Zénon de Citium vs Hegel rien de grand sans passion, Dunant, Gandhi)',
      'Éthique de la discussion contre la violence (Lyotard Le Différend vs Habermas De l\'éthique de la discussion, Rawls, Dubet)',
      'Temps et Histoire (Ecclésiaste vanité, Alexandre le Grand vs Marx moteur de la lutte des classes, imprimerie)'
    ],
    methodologicalHighlights: [
      {
        name: 'Problématisation dialectique approfondie des 50 sujets',
        description: 'Mise en lumière de la tension philosophique réelle au cœur de chaque libellé sans jamais tomber dans l\'affirmation gratuite ni le plan binaire simpliste.',
        keyRules: [
          'Le problème central doit faire jaillir le paradoxe ou la controverse fondamentale.',
          'Chaque axe de développement doit comporter l\'idée directrice, la référence conceptuelle précise et l\'illustration concrète.'
        ]
      },
      {
        name: 'Mobilisation rigoureuse des doctrines et des textes fondateurs',
        description: 'Articuler les philosophes classiques (Platon, Aristote, Descartes, Kant, Spinoza) avec les épistémologues (Bachelard, Popper, Duhem) et les penseurs contemporains (Habermas, Lyotard, Rawls, Senghor, Ki-Zerbo).',
        keyRules: [
          'Toujours expliciter la citation dans son contexte argumentatif.',
          'Intégrer les enjeux de l\'Afrique contemporaine (développement, démocratie, identité culturelle).'
        ]
      }
    ],
    coreKnowledgeExcerpt: `Sommaire et extraits des 50 sujets traités dans le recueil de John Kennedy OUALI :
1. Qu'apporte de douter ? (Descartes doute méthodique vs Pyrrhon scepticisme vs Alain sel de l'esprit)
2. La religion est-elle nécessairement en conflit avec la raison ? (Kant, Spinoza vs Jean-Paul II Fides et Ratio, Pascal)
3. Opposer science et philosophie, est-ce légitime ? (Piaget, Bachelard, Cheikh Anta Diop, Descartes, Lalande)
4. Le questionnement perpétuel peut-il être source de savoir ? (Jaspers être en route, Merleau-Ponty contestation, Socrate)
5. Faut-il opposer foi et raison ? (Feuerbach, Nietzsche vs preuves métaphysiques, pari de Pascal, Leibniz)
6. Peut-on critiquer la démocratie ? (Platon dérive en tyrannie, Nietzsche égalitarisme vs Montesquieu, Aristote médiété)
7. L'État est-il un mal nécessaire ? (Hobbes, Marx, Althusser, Proudhon, Nietzsche vs Spinoza, Weber, Valéry, Kourouma)
8. Ce qui fait l'homme tient plus de la culture que de la nature (Malson enfants sauvages, Marx, Sartre, Senghor, Morin)
9. La philosophie se trahit elle-même lorsqu'elle dégénère en dogmatisme (Pythagore, Socrate vs Marx conditionnement, Gusdorf)
10. Qui possède le savoir ne philosophie point (Platon Banquet, Socrate accoucheur des esprits, Hegel concepts)
11. L'obéissance aux lois est-elle conciliable à la liberté humaine ? (Spinoza liberté comprise, Rousseau, Marx)
12. L'homme est-il conscient de tous ses actes ? (Descartes substance pensante vs Freud actes manqués, lapsus, Leibniz)
13. Quelle est la place de la souffrance dans la connaissance de soi ? (Pradines destruction/construction, sacrifice)
14. La passion rend-elle aveugle ? (Pati, Stendhal cristallisation, Zénon, Kant vs Hegel, Copernic, Dunant, Gandhi)
15. Y a-t-il des questions auxquelles aucune science ne répond ? (Auguste Comte 3 états vs Leibniz pourquoi l'être plutôt que rien)
16. L'art africain et ses fonctions esthétiques et communautaires (Nok, Nimba, Ki-Zerbo, Youssouf N'Dour, refus art pour l'art)
17. La liberté consiste-t-elle à faire ce qui nous plaît ? (Hobbes désir et pouvoir vs Kant impératif catégorique, Buridan)
18. Faut-il préférer la liberté au bonheur ? (La Fontaine Loup et Chien, Kant devoir moral vs Alain le bonheur dans l'action)
19. Une société sans religion est-elle possible ? (Comte religion de l'Humanité, Nietzsche mort de Dieu, goulag soviétique)
20. Les théories scientifiques décrivent-elles la réalité ? (Pierre Duhem instrumentalisme vs réalisme, Popper, physique quantique)
22. Le travail n'est-il qu'une contrainte ? (Tripalium, punition divine Genèse vs Rousseau perfectibilité, Kant, Stendhal passion)
23. Croire en la science, est-ce une forme de religion ? (Diderot, Russell science non dogmatique vs scientisme aveugle Alain)
24. La connaissance de soi est-elle plus facile que celle des choses ? (Descartes cogito vs Rimbaud je est un autre, Comte)
26. La science se limite-t-elle à constater les faits ? (Torricelli et Pascal au Puy de Dôme, Galilée chute des corps, Gall et Neptune)
27. La technique peut-elle transformer la morale ? (Kant impératif catégorique vs Marx idéologie, mères porteuses, bombe atomique)
28. Maître et possesseur de la nature : l'homme en est-il plus heureux ? (Descartes vs Gabriel Marcel, Bergson, Jonas)
29. Les pratiques artistiques transforment-elles le monde ? (Rimbaud changer la vie, Merleau-Ponty, Sartre engagement dans La Nausée)
30. Revient-il à l'État de décider de ce qui est juste ? (Hobbes, Rousseau, Montesquieu séparation des pouvoirs, Valéry)
31. La foi est-elle l'ennemi de la preuve ? (Procès de Galilée 1633, fanatisme vs foi de confiance Pascal, Diderot)
32. Le temps efface-t-il l'histoire ? (Ecclésiaste vanité, Alexandre le Grand vs Marx lutte des classes, imprimerie Gutenberg)
33. La politique peut-elle être un métier ? (Athènes assemblée Pnyx vs Max Weber vocation/métier, Machiavel, Platon kallipolis)
34. Discuter est-ce renoncer à la violence ? (Lyotard Le Différend, Habermas éthique de la discussion, Rawls, Aristote philia)
36. L'inconscient échappe-t-il à toute forme de connaissance ? (Freud, Jung, roman Un secret de P. Grimbert, cryptes et fantômes)
37. Sommes-nous responsables de l'avenir ? (Leibniz Théodicée vs Hans Jonas Principe responsabilité, Rawls générations futures)
38. Le langage n'est-il qu'un outil ? (Ferdinand de Saussure, saint Augustin De Magistro, John Austin Quand dire c'est faire)
39. Pouvons-nous affirmer que le temps nous appartient ? (Laforgue, Heidegger être pour la mort, Bergson temps vécu, Ronsard)
40. La conscience fait-elle la grandeur ou la misère de l'homme ? (Pascal roseau pensant, Descartes vs Marx aliénation, Freud)
43. La liberté comporte-t-elle des degrés ? (Aristote actes volontaires/mixtes/involontaires, Leibniz monades vs Kant absolu, Hegel)
44. Autrui m'est-il toujours étranger ? (Merleau-Ponty perception, Sartre regard, Husserl intersubjectivité, Bachelard Je-Tu)
45. Le bonheur nous échappe-t-il inévitablement ? (Schopenhauer pendule souffrance/ennui vs Sénèque ascèse, Alain créativité)
46. Peut-on penser une société sans État ? (Thomas More Utopie, Voltaire Eldorado, Proudhon, Marx vs totalitarisme)
47. Faut-il rester fidèle ? (Aristote habitus vertueux, Kant respect du contrat et promesse vs sincérité et adaptation au temps)
48. Existe-t-il des violences légitimes ? (Loi du talion, légitime défense, Marat, Max Weber violence physique légitime vs éducation)
49. Sommes-nous prisonniers de notre corps ? (Platon le corps tombeau de l'âme vs empirisme fenêtres sur le monde, Nietzsche grande raison)
50. Discuter est-ce renoncer à la violence ? (Lyotard, Habermas, Tocqueville passion de l'égalité, Dubet, Aristote philia).`,
    sampleInBookletSubjects: [
      'Sujet 1 : Qu\'apporte de douter ?',
      'Sujet 7 : L\'État est-il un mal nécessaire ?',
      'Sujet 16 : L\'art africain et ses fonctions esthétiques et communautaires',
      'Sujet 18 : Faut-il préférer la liberté au bonheur ?',
      'Sujet 20 : Les théories scientifiques décrivent-elles la réalité ?',
      'Sujet 26 : La science se limite-t-elle à constater les faits ?',
      'Sujet 34 : Discuter est-ce renoncer à la violence ?',
      'Sujet 39 : Pouvons-nous affirmer que le temps nous appartient ?',
      'Sujet 48 : Existe-t-il des violences légitimes ?'
    ],
    sampleNewUntreatedSubjects: [
      'Dissertation : « La vérité peut-elle être dangereuse ? »',
      'Dissertation : « Le progrès technique garantit-il la justice sociale ? »',
      'Dissertation : « Peut-on vivre sans mémoire ? »'
    ]
  },
  {
    id: 'philo-intelligentsia-arguments-tous-chapitres',
    title: 'La Philosophie en Terminale : Arguments sur Tous les Chapitres',
    author: 'Intelligentsia Corporation',
    roleOrAffiliation: 'Centre National d\'Orientation et de Préparation aux Concours d\'entrée dans les Grandes Écoles et Facultés du Cameroun (Since 2006, Yaoundé)',
    countryOrigin: 'Cameroun',
    discipline: 'philo',
    disciplineLabel: 'Philosophie & Épreuves du BAC (Répertoire d\'Arguments par Chapitre)',
    badgeColor: 'amber',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['A', 'ABI', 'C', 'D', 'E', 'TI', 'SH'],
    publicationYear: 2024,
    coverDescription: 'Fascicule didactique d\'excellence méthodologique conçu par Intelligentsia Corporation (Yaoundé, Cameroun). Répertoire systématique des problèmes fondamentaux, thèses, antithèses, arguments numérotés, citations textuelles et illustrations concrètes pour les 18 chapitres du programme.',
    overview: `Ouvrage didactique de référence au Cameroun et en Afrique francophone élaboré par Intelligentsia Corporation (Since 2006, Yaoundé).
Structure de manière exhaustive les 18 chapitres du programme de philosophie en Terminale sous forme de fiches d'argumentation dialectique rigoureuses avec citations textuelles certifiées et illustrations de terrain :
- Chapitre 1 : Qu'est-ce que la philosophie ? (Valeur : détracteurs [déséquilibre, subversion, incertitude, athéisme, abstraction] vs partisans [guide intellectuel Descartes, sortie de l'obscurantisme, instrument de gouvernance Platon, préfiguration de la science Towa, ancrage pratique Njoh Mouelle] ; Nature : savoir constitué vs recherche permanente du savoir Jaspers/Kant).
- Chapitre 2 : La philosophie en Afrique (Thèse ethnocentriste Hegel/Lévy-Bruhl/Heidegger vs Thèse africaniste : Cheikh Anta Diop origines égyptiennes de Thalès/Pythagore/Platon, Ptahhotep, Zera Yacob, Walda Heywat, Guillaume Amo, Marcien Towa, Ebénézer Njoh Mouelle, Hubert Mono Ndzana, Nsame Mbongo, Fabien Eboussi Boulaga, Paulin Hountondji).
- Chapitre 3 : La conscience et l'inconscient (Thèse rationaliste Lalande/Descartes/Rousseau vs Thèse psychanalytique : Freud lapsus/rêves/topiques, Wordsworth « l'enfant est le père de l'homme », Roger Ebacher « l'inconscient agit en nous, sans nous et malgré nous »).
- Chapitre 4 : Désir et passion (Valeur des désirs : insatiabilité et tonneau percé de Calliclès/Platon, Schopenhauer vs essence de l'homme et aiguillon Spinoza/Locke ; Valeur des passions : erreur Alquié, maladie de l'âme Kant vs moteur de l'histoire Hegel « rien de grand ne s'est accompli sans passion », Rousseau, Fourier).
- Chapitre 5 : Personnalité et personne (Déterminismes sociologiques Durkheim, psychologiques, héréditaires Lombroso « criminel-né » vs Liberté et responsabilité Sartre « l'homme est condamné à être libre », Bergson « conscience est synonyme de choix », Alain « le caractère d'un homme est son serment »).
- Chapitre 6 : Autrui (Connaissance d'autrui : intuition Bergson, analogie Malebranche, dialogue Merleau-Ponty, amitié Saint Augustin vs opacité Sartre, caméléon Montaigne, for intérieur inviolable Gaston Berger, monade Leibniz ; Rapports : belliqueux Hobbes, Freud thanatos, honte et enfer Sartre, lutte de reconnaissance Hegel vs bienveillance Rousseau, « Le ciel c'est les autres » Gabriel Marcel).
- Chapitre 7 : La société (Origine : naturelle Aristote animal politique vs culturelle Hobbes, Rousseau contrat social, Spinoza ; Valeur : étouffement Durkheim, aliénation Njoh Mouelle « homme médiocre », lutte des classes Marx vs sécurité Hobbes, moralisation Rousseau, secours mutuel Hume).
- Chapitre 8 : La morale (Origine : innée Rousseau pitié, Descartes, Kant vs acquise Freud surmoi, Durkheim, Nietzsche fable des faibles, utilitarisme ; Nature : relative Durkheim, Pascal « vérité en deçà des Pyrénées », Protagoras vs universelle Kant impératif catégorique ; Valeur : frein vital Nietzsche, opium Marx vs noblesse Alain « se savoir esprit », ataraxie Épicure, respect Kant).
- Chapitre 9 : Droit et justice (Légitimité : juste Montesquieu raison, Rousseau volonté générale vs lois immorales Veil, droit du plus fort La Fontaine, Bismarck, Marx oppression de classe ; Fondement : force Spinoza puissance, Calliclès, Platon République vs raison et contrat).
- Chapitre 10 : L'État et le pouvoir (Valeur : mal absolu Weber monopole violence légitime, Althusser ARE/AIE, Saint Augustin troupe de brigands, Marx instrument bourgeois, Bakounine cimetière de l'individualité vs bienfaiteur sécurité, ministères sociaux, remède à l'état de nature ; Origine : divine Saint Paul, Bossuet vs contrat Hobbes, Rousseau).
- Chapitre 11 : La violence (Origine : naturelle de Maistre, Hobbes, Freud agressivité native vs culturelle machines, propriété privée Rousseau, Marx ; Valeur : légitime Calliclès, Nietzsche, Kant guerre sublime, Marx accoucheuse de l'histoire vs péché et déshumanisation Kant ; Dépassement : espérance judéo-chrétienne Apocalypse, société communiste sans classes, Gandhi vs illusion Héraclite combat roi de tout, thanatos Freud).
- Chapitre 12 : Liberté et responsabilité (Réalité : libre arbitre Descartes, acte gratuit Gide Lafcadio, Sartre existence précède l'essence vs déterminismes Épictète, Durkheim, Wordsworth, Lombroso).
- Chapitre 14 : Le Panafricanisme (Possibilité des États-Unis d'Afrique : mythe Ziegler « tout idéalisme est une erreur », rivalités de leadership Félix Houphouët-Boigny « tête d'une fourmi plutôt que queue d'un éléphant », balkanisation Berlin vs projet réalisable Cheikh Anta Diop unité culturelle, intégration CEMAC/CEDEAO/UA).
- Chapitre 15 : Nature et culture (Hiérarchisation des cultures : préjugé suprarationnel Lévy-Bruhl, Hegel nuit africaine vs égale valeur Montaigne « chacun appelle barbare ce qui n'est pas de son usage », Lévi-Strauss ; Nature humaine : attributs naturels Aristote animal raisonnable, Descartes vs être culturel Sartre indétermination, Lucien Malson enfants sauvages).
- Chapitre 17 : Le travail et les modes de production (Négatif : punition divine Genèse, aliénation capitaliste Marx vampire, André Breton vs positif : remède aux trois maux Voltaire, émancipation par la dialectique du maître et de l'esclave Hegel).
- Chapitre : La science (Bénéfique : libération de l'obscurantisme Goblot, maîtrise technique Bacon/Descartes vs maléfique : écrasement de l'humanité Bergson, armes atomiques, dérives bioéthiques).
- Chapitre : Les mathématiques (Origine empirique Locke/Stuart Mill/Paul Mouy vs pure imagination cosinus/sinus/logarithmes ; Inutilité Aristote noblesse de ne servir à rien, Russell vs alphabet de la nature Galilée, Brunschvicg « connaître c'est mesurer », Platon Académie).
- Chapitre : Dieu et la religion (Preuves de l'existence : cause ultime, Voltaire horloge et horloger, preuve ontologique Descartes vs athéisme empiriste Locke/Carnap, absence de nature humaine Sartre, problème du mal dans le monde ; Religion négative : trois états Comte, dogmatisme Njoh Mouelle, opium Marx vs religion bénéfique : Bergson supplément d'âme, lien social, Voltaire « Si Dieu n'existait pas, il faudrait l'inventer »).`,
    keyConcepts: [
      'Nature et valeur de la philosophie (Détracteurs vs partisans, Descartes yeux fermés, Towa, Njoh Mouelle)',
      'La philosophie africaine (Réfutation de l\'ethnocentrisme de Hegel/Lévy-Bruhl/Heidegger, Cheikh Anta Diop, Ptahhotep, Zera Yacob, Amo, Towa, Hountondji)',
      'Conscience et Inconscient (Cogito cartésien vs topiques freudiennes, Wordsworth, Ebacher)',
      'Désir et passion (Insatiabilité du désir Platon tonneau percé, Schopenhauer vs moteur Spinoza ; Aliénation passionnée vs génie historique Hegel)',
      'Personnalité et liberté (Déterminismes sociologiques Durkheim, psychologiques et génétiques Lombroso vs Liberté absolue Sartre, Bergson, Alain)',
      'Autrui et altérité (Connaissance intuitive Bergson, analogique Malebranche, dialogique Merleau-Ponty vs opacité ; Rapports belliqueux Hobbes/Sartre vs pacifiques Rousseau/Marcel)',
      'Société et institution (Origine naturelle Aristote vs contrat Hobbes/Rousseau/Spinoza ; Obstacle aliénant Durkheim/Marx vs source de bien-être Hume)',
      'Morale et éthique (Innée Rousseau/Kant vs acquise Freud/Nietzsche ; Relative vs universelle impératif catégorique Kant ; Danger vs ataraxie Épicure)',
      'Droit et justice (Légitimité de la loi Montesquieu vs droit du plus fort Calliclès/Bismarck/Marx)',
      'L\'État et le pouvoir politique (Monopole de la violence Weber, AIE/ARE Althusser, Bakounine vs bienfaiteur social ; Origine divine Bossuet vs contrat)',
      'Violence et histoire (Violence naturelle vs sociale ; Rôle accoucheur Marx vs déshumanisation Kant ; Dépassement Gandhi vs permanence Héraclite)',
      'Liberté et responsabilité (Libre arbitre Descartes, acte gratuit Lafcadio vs fatalisme et déterminismes)',
      'Le Panafricanisme (Mythe et balkanisation Jean Ziegler, Houphouët-Boigny vs réalisation concrète Cheikh Anta Diop, CEMAC, CEDEAO, UA)',
      'Nature et culture (Réfutation de la hiérarchisation des cultures Montaigne, Lévi-Strauss ; Être naturel vs être culturel sans essence Sartre, Malson)',
      'Travail et libération (Malédiction et vampire capitaliste Marx vs remède de Voltaire et dialectique du maître et de l\'esclave Hegel)',
      'La science et ses enjeux (Savoir et pouvoir Bacon/Descartes vs aliénation et avertissement de Bergson)',
      'Les mathématiques (Origine empirique des géomètres vs création de l\'esprit ; Langage mathématique de la nature Galilée, Platon)',
      'Dieu et la religion (Horloger de Voltaire et preuve ontologique Descartes vs athéisme Sartre/Marx ; Opium du peuple vs supplément d\'âme Bergson)'
    ],
    methodologicalHighlights: [
      {
        name: 'Structure dialectique binaire rigoureuse (Problème fondamental -> Thèse vs Antithèse)',
        description: 'Chaque problème est abordé en deux volets équilibrés et documentés, fournissant aux élèves 2 à 5 arguments numérotés avec auteurs, citations textuelles et exemples réels.',
        keyRules: [
          'Ne jamais formuler un problème sous forme d\'affirmation dogmatique.',
          'Toujours appuyer l\'argument sur une citation philosophique exacte et une illustration concrète.'
        ]
      },
      {
        name: 'Mobilisation des philosophes camerounais et africains contemporains',
        description: 'Intégration systématique des maîtres à penser africains (Marcien Towa, Ebénézer Njoh Mouelle, Hubert Mono Ndzana, Fabien Eboussi Boulaga, Cheikh Anta Diop, Paulin Hountondji, Nsame Mbongo) aux côtés des classiques universels.',
        keyRules: [
          'Articuler les concepts philosophiques universels aux réalités et défis de l\'Afrique contemporaine.',
          'Citer précisément les textes et positions des penseurs africains.'
        ]
      }
    ],
    coreKnowledgeExcerpt: `Répertoire des 18 chapitres traités par Intelligentsia Corporation (Yaoundé, Cameroun) :
- Chap 1 : Qu'est-ce que la philosophie ? (Valeur : détracteurs [déséquilibre psychoaffectif, subversion politique Socrate/Marx, incertitude, athéisme Nietzsche/Sartre, abstraction stérile Valéry/Rosset/Duverger] vs partisans [guide moral Descartes, rationalité contre mythe, gouvernance Platon, mère des sciences Towa, ancrage pratique Hegel/Marx/Njoh Mouelle] ; Nature : savoir transmissible vs recherche permanente Kant/Jaspers).
- Chap 2 : La philosophie en Afrique (Ethnocentrisme Hegel/Lévy-Bruhl/Heidegger « la philosophie est grecque dans son être propre » vs Africanisme Descartes bon sens partagé, Cheikh Anta Diop origines égyptiennes de Pythagore/Platon, Ptahhotep, Zera Yacob, Amo, Towa, Njoh Mouelle, Mono Ndzana, Hountondji).
- Chap 3 : La conscience et l'inconscient (Rationalisme Lalande intuition claire, Descartes cogito, Rousseau instinct divin, Socrate démon intérieur vs Psychanalyse Freud lacunes de la conscience/topiques, Wordsworth, Roger Ebacher « l'inconscient agit en nous, sans nous et malgré nous »).
- Chap 4 : Désir et passion (Désir dangereux : punition androgyne Platon, tonneau percé Calliclès, Schopenhauer asservissement vs Moteur : Spinoza essence de l'homme, Locke aiguillon ; Passions négatives : étymologie souffrance, erreur Alquié, liberticide Kant « maladie de l'âme » vs Positives : Rousseau âmes de feu, Hegel rien de grand sans passion, Fourier essor intégral).
- Chap 5 : Personnalité et personne (Déterminismes : destin Épictète, société Durkheim, psychologie Wordsworth, génétique Lombroso criminels-nés vs Liberté/Responsabilité : Sartre pas de Dieu ni de nature prédéfinie, Bergson choix infini, Alain caractère est serment).
- Chap 6 : Autrui (Connaissance possible : intuition Bergson, analogie Malebranche, dialogue Merleau-Ponty, amitié Saint Augustin vs Inaccessible : liberté Sartre, caméléon Montaigne, ombre Proust, conscience inviolable Gaston Berger, monade Leibniz ; Rapports belliqueux : loup Hobbes, thanatos Freud, regard chosifiant Sartre, lutte de reconnaissance Hegel, volonté de puissance Nietzsche vs Pacifiques : bonté Rousseau, Gabriel Marcel « Le ciel c'est les autres »).
- Chap 7 : La société (Naturelle : Aristote cité naturelle et animal politique vs Culturelle : jungle de l'état de nature Hobbes, contrat social Rousseau, entraide Spinoza ; Obstacle : conformisme Durkheim, homme médiocre Njoh Mouelle, lutte des classes Marx vs Bonheur : sécurité Hobbes, moralisation Rousseau, compensation des infirmités Hume).
- Chap 8 : La morale (Innée : Rousseau pitié et voix céleste, Descartes bon sens, Kant liberté autonome vs Acquise : surmoi Freud, société Durkheim, invention des faibles Nietzsche, utilitarisme ; Relative : Durkheim, Pascal Pyrénées, Protagoras vs Universelle : Kant impératif catégorique ; Dangereuse : frein vital Nietzsche, opium Marx vs Bénéfique : se savoir esprit Alain, ataraxie Épicure, respect Kant).
- Chap 9 : Droit et justice (Légitimité : raison Montesquieu, liberté sous la loi Rousseau vs injustice positive, droit du plus fort La Fontaine/Bismarck, oppression Marx ; Fondement : force Spinoza puissance naturelle, Calliclès, Platon République vs raison et volonté générale).
- Chap 10 : L'État et le pouvoir (Mal absolu : monopole violence légitime Weber, ARE/AIE Althusser, troupe de brigands Saint Augustin, instrument bourgeois Marx, vaste cimetière Bakounine vs Bienfaiteur : sécurité, ministères sociaux santé/éducation, ordre social Hobbes/Locke/Spinoza ; Origine : divine Saint Paul/Bossuet vs contrat Hobbes/Rousseau).
- Chap 11 : La violence (Naturelle : catastrophes Joseph de Maistre, loup Hobbes, agressivité native Freud vs Culturelle : machines et accidents, propriété privée Rousseau, lutte des classes Marx ; Légitime : Calliclès droit naturel du plus fort, Nietzsche, guerre sublime Kant, accoucheuse de l'histoire Marx, appareils répressifs vs Immorale : décalogue, impératif catégorique Kant ; Dépassement : Apocalypse, société sans classes communiste, non-violence Gandhi vs Illusion : combat roi de tout Héraclite, thanatos Freud).
- Chap 12 : Liberté et responsabilité (Réalité : libre arbitre Descartes, crime immotivé Lafcadio Gide, liberté absolue Sartre vs Fiction : rôle théâtral Épictète, contrainte sociale Durkheim, traumatismes Wordsworth, gènes Lombroso).
- Chap 14 : Le Panafricanisme (Mythe : gouvernements fantoches, idéalisme comme erreur Jean Ziegler, querelle de leadership Félix Houphouët-Boigny « tête d'une fourmi plutôt que queue d'un éléphant », balkanisation Conférence de Berlin vs Possible : unité culturelle Cheikh Anta Diop, éveil des consciences dans les écoles et médias, intégration régionale CEMAC, CEDEAO, UA).
- Chap 15 : Nature et culture (Hiérarchisation des cultures : préjugé infériorisant Lévy-Bruhl/Hegel vs Égale valeur de toute culture Montaigne « barbare ce qui n'est pas de son usage », Lévi-Strauss ; Nature humaine : attributs naturels Aristote animal raisonnable, Descartes vs Être culturel libre Sartre existence précède l'essence, Lucien Malson enfants sauvages).
- Chap 17 : Le travail et les modes de production (Négatif : punition divine Genèse, exploitation et vampire capitaliste Marx, André Breton vs Positif : remède au vice/ennui/besoin Voltaire, dialectique du maître et de l'esclave Hegel).
- Chap : La science (Bénéfique : clarté intellectuelle Goblot, maître et possesseur Descartes, savoir est pouvoir Bacon vs Maléfique : fardeau et dégradation Bergson, armes atomiques, aliénation).
- Chap : Les mathématiques (Origine : observation Locke tabula rasa, Stuart Mill, Paul Mouy mesureurs de terre vs imagination cosinus/sinus/logarithmes ; Inutilité abstraite Aristote noblesse de ne servir à rien, Russell vs utilité Galilée livre de la nature, Brunschvicg « connaître c'est mesurer », Platon Académie).
- Chap : Dieu et la religion (Preuves : principe de raison suffisante, Voltaire horloger, preuve ontologique Descartes vs Athéisme : absence de preuve empirique Locke/Carnap, liberté sartrienne, problème du mal sur terre ; Religion négative : trois états Comte, dogmatisme Njoh Mouelle, opium Marx vs Bénéfique : supplément d'âme Bergson, fraternité sociale, Voltaire « Si Dieu n'existait pas, il faudrait l'inventer »).`,
    sampleInBookletSubjects: [
      'Chapitre 1 : « La philosophie est-elle une activité utile à la société ? » (Descartes, Platon, Towa vs Valéry, Rosset)',
      'Chapitre 2 : « L\'Afrique a-t-elle une tradition philosophique authentique ? » (Hegel, Heidegger vs Cheikh Anta Diop, Towa, Hountondji)',
      'Chapitre 6 : « L\'enfer, est-ce les autres ? » (Sartre, Hobbes vs Gabriel Marcel, Rousseau, Merleau-Ponty)',
      'Chapitre 10 : « L\'État est-il le protecteur ou l\'oppresseur des citoyens ? » (Weber, Althusser, Bakounine vs Hobbes, Rousseau)',
      'Chapitre 14 : « La création des États-Unis d\'Afrique relève-t-elle de l\'utopie ? » (Jean Ziegler, Houphouët-Boigny vs Cheikh Anta Diop, UA, CEMAC)',
      'Chapitre 17 : « Le travail est-il une malédiction ou une libération pour l\'homme ? » (Marx, Genèse vs Voltaire, Hegel)'
    ],
    sampleNewUntreatedSubjects: [
      'Dissertation : « La science peut-elle suffire au bonheur de l\'homme sans la philosophie ? »',
      'Dissertation : « Le respect des lois garantit-il toujours la justice ? »',
      'Commentaire : Marcien Towa sur la nécessité de l\'esprit critique pour le développement africain'
    ]
  },
  {
    id: 'philo-1000-citations-nathan',
    title: '1000 citations philosophiques : Pour bien placer les citations !',
    author: 'Collectif Nathan (Dir. Denis Hoch, Softwin)',
    roleOrAffiliation: 'Éditions Nathan (Collection Petites Références, Paris)',
    countryOrigin: 'France / International BAC',
    discipline: 'philo',
    disciplineLabel: 'Philosophie Terminale — Recueil Méthodologique de Citations Commentées',
    badgeColor: 'indigo',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['Toutes Séries', 'A', 'B', 'C', 'D', 'L', 'S', 'Générale', 'Technologique'],
    publicationYear: 2008,
    coverDescription: 'Recueil exhaustif de 1000 citations philosophiques classées par notions et orientations problématiques du programme de Terminale (Le Sujet, La Culture, La Raison et le Réel, La Politique, La Morale). Avec conseils méthodologiques stricts sur l\'art de citer, explications de portée et index intégral auteurs et œuvres.',
    overview: `Ouvrage de référence pédagogique des Éditions Nathan (Collection Petites Références) regroupant 1 000 citations philosophiques canoniques rigoureusement attribuées, contextualisées et commentées, articulées autour des 5 grandes parties et notions du programme de Terminale :
- I. LE SUJET : Le sujet (affirmation, substance, esprit qui connaît, Delphes, recherche du moi, condition humaine, invention récente Foucault) ; La conscience (conscience de soi, intentionnalité Husserl/Sartre, cogito cartésien et critiques, moi et le monde, temps et mémoire Bergson) ; La perception (sensation/jugement Alain/Lalande, doute des sens Descartes, sensible et intelligible Platon/Kant, esse est percipi Berkeley) ; L'inconscient (petites perceptions Leibniz, hypothèse freudienne, rêves et actes manqués, censure/refoulement, critiques de mauvaise foi Sartre et d'idolâtrie du corps Alain) ; Autrui (intersubjectivité, alter ego, regard chosifiant Sartre, visage Levinas, maître et esclave Hegel, pitié Rousseau, charité/amitié) ; Le désir (manque Platon, essence de l'homme Spinoza/Hobbes, désir mimétique René Girard, désir de connaître) ; L'existence et le temps (angoisse, contingence Sartre/Spinoza, valeur de la vie Camus/Nietzsche, apories augustiniennes du temps, durée vécue Bergson, Dasein et être-pour-la-mort Heidegger, mémoire et oubli).
- II. LA CULTURE : Nature et culture (état de nature Hobbes/Rousseau, prohibition de l'inceste Lévi-Strauss, perfectibilité, ethnocentrisme Montaigne/Lévi-Strauss) ; Le langage (origine des langues Rousseau/Lucrèce, signe et signifiant/signifié Saussure, parole agissante Austin, ineffable vs mot juste Hegel) ; L'art (imitation dévaluée Platon vs vérité de l'art Hegel/Heidegger, contemplation désintéressée Kant, transfiguration du visible Klee/Bergson, jugement de goût universel sans concept) ; Le travail et la technique (homo faber Bergson, travail aliéné Marx, domination de la nature Bacon/Descartes, arraisonnement de la technique Heidegger, responsabilité Hans Jonas) ; La religion (sacré et profane Caillois, preuves et critique théodicée Pascal/Leibniz/Freud/Marx) ; L'histoire (connaissance du passé Marrou/Ricœur, ruse de la raison Hegel, événement Braudel) ; Les sciences humaines (modèle sociologique Durkheim/Comte, structuralisme Lévi-Strauss) ; La philosophie (étonnement Aristote, 4 questions de Kant, chouette de Minerve Hegel, apprendre à philosopher Kant) ; La métaphysique (science de l'être, besoins métaphysiques Schopenhauer, critique positiviste Carnap).
- III. LA RAISON ET LE RÉEL : Raison et irrationnel (animal rationnel, principe de causalité et non-contradiction, antinomies de Kant, raison et folie Foucault/Morin) ; Théorie et expérience (critère de réfutabilité/falsifiabilité Karl Popper, obstacles épistémologiques et rationalisme appliqué Bachelard, méthode expérimentale Claude Bernard, empirisme Locke/Hume) ; Jugement et idée (vérités de raison et de fait Leibniz, jugements synthétiques a priori Kant) ; La démonstration (logique formelle, induction et déduction, modèle mathématique Descartes, axiomatique Poincaré/Blanché) ; L'interprétation (cercle herméneutique Dilthey/Gadamer, œuvre ouverte Umberto Eco) ; L'imagination (maîtresse d'erreur Pascal/Malebranche vs fonction irréalisante Sartre) ; Le vivant (animal-machine Descartes vs finalisme Aristote, élan vital Bergson, génétique Jacob) ; La mort (méditation de la vie Spinoza, néant Épicure, angoisse existentielle Heidegger/Jankélévitch) ; La matière et l'esprit (dualisme cartésien, monisme Spinoza, matérialisme historique Marx) ; La vérité (adéquation Thomas d'Aquin, évidence Descartes, doute méthodique vs sceptique, pragmatisme William James, critique généalogique Nietzsche).
- IV. LA POLITIQUE : La politique (animal politique Aristote, république et démocratie Montesquieu/Rousseau, machiavélisme et autonomie politique, révolte et révolution Camus/Aron) ; La société (fondement contractuel Hobbes/Locke/Rousseau, insociable sociabilité Kant, lutte des classes Marx, utopies) ; Les échanges (valeur d'usage et valeur d'échange Aristote/Marx, monnaie, don et contre-don Mauss, fétichisme) ; La justice et le droit (légalité vs légitimité, justice distributive et commutative Aristote, force et droit Rousseau/Pascal, droit naturel vs positif) ; L'État (monopole de la violence légitime Weber, État de droit contre despotisme, critique anarchiste Bakounine/Proudhon, raison d'État).
- V. LA MORALE : La morale (souverain bien, relativisme vs impératif catégorique Kant, généalogie des valeurs Nietzsche) ; La liberté (libre arbitre Descartes vs déterminisme Spinoza/Bourdieu, liberté en situation Sartre, obéissance à la loi Rousseau) ; Le devoir (agir par devoir vs conformément au devoir Kant, impératif catégorique, devoir social Durkheim/Mauss) ; Le bonheur (souverain bien contemplatif Aristote, ataraxie épicurienne et stoïcienne, idéal de l'imagination Kant, création joyeuse Bergson).`,
    keyConcepts: [
      'Règles méthodologiques de la citation : ne jamais citer sans argumenter ni expliciter',
      'Le Sujet et la Conscience (Cogito, intentionnalité, phénoménologie)',
      'L\'Inconscient et ses critiques (Freud, Alain, Sartre)',
      'La Culture, le Langage et l\'Art (Mimèsis, jugement de goût, œuvre d\'art)',
      'Le Travail et la Technique (Homo faber, aliénation, principe responsabilité)',
      'Épistémologie : Théorie, Expérience et Falsifiabilité (Popper, Bachelard, Bernard)',
      'La Politique, l\'État et la Justice (Contrat social, séparation des pouvoirs, légalité et légitimité)',
      'La Morale, le Devoir, la Liberté et le Bonheur (Impératif catégorique, autonomie, ataraxie, joie bergsonienne)'
    ],
    methodologicalHighlights: [
      {
        name: 'Règle impérative : « Il faut rendre à César... »',
        description: 'Reproduire fidèlement la citation entre guillemets, nommer obligatoirement l\'auteur, souligner le titre de l\'œuvre et utiliser les crochets [...] en cas de coupure.',
        keyRules: [
          'Vérifier rigoureusement l\'attribution (ex : ne jamais attribuer à Rousseau ce qui est de Nietzsche).',
          'Intégrer la citation avec fluidité syntaxique dans le corps du paragraphe argumentatif.'
        ]
      },
      {
        name: 'Une bonne citation est une citation bien choisie',
        description: 'Éviter le catalogue ou le défilé artificiel d\'auteurs. La citation doit s\'intégrer comme un prolongement naturel du raisonnement pour définir, illustrer ou objecter.',
        keyRules: [
          'Assurer l\'adéquation directe de la citation avec le problème philosophique traité.',
          'Ne jamais convoquer un auteur simplement pour remplir la copie.'
        ]
      },
      {
        name: 'Citer ne dispense pas d\'argumenter ni d\'expliciter',
        description: 'La citation n\'est pas un argument d\'autorité. Il faut toujours penser par soi-même et faire suivre la citation de 2 à 3 lignes d\'analyse conceptuelle.',
        keyRules: [
          'Élucider le sens exact des termes de la citation dans le cadre de la doctrine de son auteur.',
          'Montrer ce que la citation apporte à la résolution de la tension du sujet.'
        ]
      }
    ],
    coreKnowledgeExcerpt: `Corpus méthodologique des 1000 citations classées (Nathan) :
- Notions du sujet : Descartes (Cogito, Discours 1637 & Méditations 1641), Locke (Entendement 1690), Kant (Anthropologie 1798 & Raison pure 1781), Husserl (Méditations cartésiennes 1931), Sartre (L'Être et le Néant 1943), Freud (Métapsychologie, Introduction à la psychanalyse), Alain (Éléments de philosophie 1941, Propos), Bergson (Données immédiates 1889, Matière et Mémoire 1896, Énergie spirituelle 1919).
- Notions de culture & technique : Lévi-Strauss (Structures élémentaires de la parenté 1949, Race et Histoire 1968, Tristes Tropiques 1955), Saussure (Cours de linguistique générale 1916), Benveniste (Problèmes de linguistique générale 1966), Bacon (Novum Organum 1620), Heidegger (La Question de la technique 1953), Jonas (Le Principe Responsabilité 1979).
- Notions de politique et justice : Platon (République, Gorgias, Lois), Aristote (Politique, Éthique à Nicomaque), Machiavel (Le Prince 1532, Tite-Live), Hobbes (Léviathan 1651, Du Citoyen 1642), Spinoza (Traité théologico-politique 1670, Traité politique 1677), Rousseau (Contrat social 1762, Inégalité 1755), Montesquieu (De l'Esprit des lois 1748), Marx (Le Capital 1867, Idéologie allemande 1845), Max Weber (Le Savant et le Politique 1919), Rawls (Justice et Démocratie 1990).
- Notions de raison et morale : Pascal (Pensées 1670), Kant (Fondements de la métaphysique des mœurs 1785, Raison pratique 1788, Faculté de juger 1790), Popper (Conjectures et Réfutations 1963, Connaissance objective 1972), Bachelard (Formation de l'esprit scientifique 1938, Nouvel esprit scientifique 1934), Épicure (Lettre à Ménécée), Épictète (Manuel, Entretiens), Marc-Aurèle (Pensées pour moi-même).`,
    sampleInBookletSubjects: [
      '« Toute vérité est-elle démontrable ? » (Popper, Descartes, Pascal)',
      '« Le travail n\'est-il pour l\'homme qu\'un moyen de subvenir à ses besoins ? » (Marx, Hegel, Bergson, Nietzsche)',
      '« L\'État est-il l\'ennemi de la liberté ? » (Hobbes, Rousseau, Bakounine, Weber)'
    ],
    sampleNewUntreatedSubjects: [
      'Dissertation : « Suffit-il d\'avoir le choix pour être libre ? »',
      'Dissertation : « La science détruit-elle les mythes ou en crée-t-elle de nouveaux ? »',
      'Commentaire : Pascal, Pensées, sur la disproportion de l\'homme entre le néant et l\'infini'
    ]
  },
  {
    id: 'philo-mes-annees-bac-bordas-boissier',
    title: 'Mes années BAC - Philosophie Terminale : Pour réussir le jour J (Nouveau BAC)',
    author: 'Dominique Boissier',
    roleOrAffiliation: 'Professeur de philosophie, Éditions Bordas (Collection Mes années BAC)',
    countryOrigin: 'France / Programme Officiel Nouveau Baccalauréat',
    discipline: 'philo',
    disciplineLabel: 'Philosophie Terminale — Cours Complet, Méthode, Cartes Mentales & Sujets Corrigés',
    badgeColor: 'emerald',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['Générale', 'Toutes Spécialités', 'Technologique', 'Séries A, B, C, D'],
    publicationYear: 2020,
    coverDescription: 'Manuel officiel complet couvrant les 17 notions du nouveau programme du Baccalauréat avec fiches "Les 5 points incontournables", cours magistral, fiches "En perspectives" (3 perspectives : existence humaine/culture, morale/politique, connaissance), "Pour réussir le jour J" (œuvres clés, glossaire des repères), QCM, sujets guidés et corrigés intégraux rédigés (Dissertation & Explication de texte).',
    overview: `Ouvrage pédagogique de référence de Dominique Boissier (Éditions Bordas) conçu pour la préparation intégrale des épreuves du Baccalauréat de philosophie (Dissertation et Explication de texte) autour des 17 notions officielles :
1. La conscience : présence à soi et au monde, cogito cartésien du doute à la certitude, intentionnalité (Husserl), moi psychologique vs moi métaphysique/transcendantal, conséquences existentielles et mauvaise foi (Sartre), limites de l'introspection (Mauriac, rétrospection).
2. L'inconscient : petites perceptions (Leibniz), inconscient culturel/idéologique (Nietzsche, Marx, Lévi-Strauss), hypothèse freudienne (nécessaire, légitime, vraie), topiques (ça, moi, surmoi), manifestations (rêves, actes manqués, névroses), thérapie et transfert, critiques d'Alain (tromperie objective, idolâtrie du corps) et de Sartre (mauvaise foi chosifiée).
3. Le temps : approches scientifiques (Newton temps absolu réversible, Carnot flèche du temps, Einstein relativité), temps social (Durkheim, Halbwachs), temps de l'âme et distension (Saint Augustin), paradoxes de Zénon et durée vécue qualitative vs temps spatialisé des horloges (Bergson), Dasein et être-pour-la-mort (Heidegger).
4. Le langage : linguistique comme fait social (Saussure, double articulation monèmes/phonèmes), communication animale vs langage humain (Benveniste, abeilles de Von Frisch), ineffable bergsonien vs mot juste hegelien, rhétorique sophistique vs dialogue socratique/maïeutique, jeux de langage (Wittgenstein).
5. Le travail : spécificité humaine (représentation préalable de la fin Marx), conception judéo-chrétienne (Genèse) et mythe de Prométhée, dialectique du maître et de l'esclave (Hegel), chrématistique naturelle vs mauvaise (Aristote), aliénation ouvrière, critique du travail policier (Nietzsche), otium vs occupati (Sénèque), revalorisation par le sens et le plaisir (Jouvenel, Delacroix).
6. La technique : spécificité vis-à-vis de la science et de l'artisanat (Lévi-Strauss bricoleur vs ingénieur), rationalité de moyens, permanence de l'outil, conditionnement et aliénation technologique (Heidegger question de la technique, biotechnologies, Gattaca), métaphysique de l'action faustienne (Grimaldi, Spengler).
7. L'art : mimèsis et simulacre (Platon République X) vs imitation créatrice (Aristote Poétique, Ricœur), transfiguration du réel et esprit extériorisé (Hegel, Bergson), esthétique kantienne (plaisir désintéressé, beau = ce qui plaît universellement sans concept), indépendance de l'art envers le moralisme (Fellini, Hölderlin).
8. La religion : institution structurante universelle (Bergson, Durkheim), sacré et profane, sentiment religieux et numineux (Rudolf Otto), preuves de Dieu (finalité Voltaire, contingence Thomas d'Aquin, preuve ontologique Descartes/critique de Kant), critiques de la religion (projection Feuerbach, opium du peuple Marx, névrose infantile Freud, mort de Dieu Nietzsche).
9. La nature : phusis aristotélicienne (principe de mouvement et de repos) vs mécanisme cartésien, behaviorisme et illusion naturaliste, amoralité de la nature (Spinoza), réfutation des théories raciales (Gobineau réfuté par François Jacob), passage de la nature à la culture et prohibition de l'inceste (Rousseau, Lévi-Strauss).
10. La science : exigence d'objectivité et décentration (Piaget), rupture épistémologique et obstacles (Bachelard), structures a priori de l'entendement (Kant) vs empirisme de la table rase (Locke), falsifiabilité/réfutabilité (Popper), physique classique (Newton) vs mécanique quantique (Heisenberg incertitude, fentes d'Young).
11. La vérité : mythe d'Er et réminiscence (Platon), principe de non-contradiction (Aristote), réfutation du relativisme de Protagoras, vérité comme idée innée et adéquation (Descartes), doute méthodique vs doute sceptique (Montaigne, Sextus Empiricus), conception pragmatiste (William James).
12. La raison : bon sens cartésien et les 4 règles de la méthode (évidence, analyse, ordre, dénombrement), rationalité technique, scientifique, philosophique et morale, rationalisation des affects (Spinoza) vs raisons du cœur et limites de la raison (Pascal).
13. L'État : institution et pouvoir légal (Max Weber), contrats sociaux (soumission chez Hobbes vs association chez Rousseau), critique marxiste de l'État bourgeois, dérives de l'égalitarisme et tyrannie de la majorité (Tocqueville), valeurs républicaines et esprit de vigilance démocratique.
14. La justice : droit garant de la cohésion face à l'insociable sociabilité (Kant), séparation des pouvoirs (Montesquieu), droit positif vs droit naturel, justice distributive (proportionnelle) vs commutative (indistincte) chez Aristote, équité et conscience morale face à la loi (Antigone, Thoreau).
15. Le devoir : interdits originels (meurtre, inceste), devoirs sociaux et don (Marcel Mauss potlatch), banalité du mal et obéissance aveugle (Hannah Arendt Eichmann), impératif catégorique kantien (« Agis uniquement d'après la maxime... »), devoir comme autonomie et liberté.
16. La liberté : volonté infinie et entendement limité (Descartes), illusion du libre arbitre et habitus (Spinoza, Bourdieu), déterminisme vs fatalisme, responsabilité morale inséparable de la liberté (Kant), liberté en situation et mauvaise foi (Sartre).
17. Le bonheur : souverain bien et vie contemplative (Aristote), ataraxie stoïcienne (ce qui dépend de nous) et épicurienne (plaisirs naturels et nécessaires), critique kantienne (idéal de l'imagination, se rendre digne du bonheur), création joyeuse et élan vital (Bergson).
Comporte également la méthodologie détaillée de la dissertation (plan dialectique thèse/antithèse/synthèse, transitions critiques, introduction problématisée) et de l'explication de texte (mouvements, citations intégrées, conclusion critique), ainsi que les corrigés complets des 3 sujets types bac.`,
    keyConcepts: [
      'Les 17 notions du programme officiel (Conscience, Inconscient, Temps, Langage, Travail, Technique, Art, Religion, Nature, Science, Vérité, Raison, État, Justice, Devoir, Liberté, Bonheur)',
      'Les 3 perspectives transversales du Bac : L\'existence humaine et la culture, La morale et la politique, La connaissance',
      'Glossaire des repères fondamentaux (Absolu/Relatif, En acte/En puissance, Contingent/Nécessaire, Croire/Savoir, En fait/En droit, Légal/Légitime, etc.)',
      'Méthode de la dissertation : Choix du sujet, problématisation, plan dialectique et progressif, transitions rédigées, conclusion sans fausse ouverture',
      'Méthode de l\'explication de texte : Découpage des mouvements, analyse linéaire, insertion de citations courtes, conclusion critique d\'intérêt philosophique'
    ],
    methodologicalHighlights: [
      {
        name: 'Architecture de la Dissertation Dialectique (Bordas)',
        description: 'Introduction rigoureuse (accroche, analyse des termes, problématique sous forme de question, annonce du plan avec 3 questions directrices) -> 3 parties équilibrées -> transitions sous forme d\'objection à la fin des parties I et II -> conclusion synthétique sans question d\'ouverture superflue.',
        keyRules: [
          'Ne jamais donner la réponse au sujet dès l\'introduction.',
          'La troisième partie doit être un véritable dépassement (synthèse féconde), jamais un compromis mou.'
        ]
      },
      {
        name: 'Protocole de l\'Explication de Texte Philosophique',
        description: 'Lecture bienveillante -> Découpage physique en moments argumentatifs via les connecteurs logiques -> Introduction (thème, thèse, délimitation textuelle précise) -> Explication linéaire commentant les concepts sans paraphrase -> Conclusion critique évaluant l\'enjeu universel.',
        keyRules: [
          'Ne jamais paraphraser le texte : toujours expliquer le principe sous-jacent.',
          'Insérer les citations textuelles de manière brève et fluide dans la phrase d\'analyse.'
        ]
      },
      {
        name: 'Maîtrise des Repères Philosophiques du Bac',
        description: 'Mobilisation exacte des couples conceptuels (En fait / En droit, Légal / Légitime, Croire / Savoir, Contingent / Nécessaire, Transcendant / Immanent, etc.) pour départager les thèses.',
        keyRules: [
          'Définir précisément le repère dès sa première utilisation.',
          'Éviter toute confusion entre nécessité physique et obligation morale.'
        ]
      }
    ],
    coreKnowledgeExcerpt: `Synthèse des notions et repères (Bordas - Dominique Boissier) :
- Sujet 1 Dissertation Corrigé : « Pense-t-on par soi-même ? » (I. Penser par soi-même comme exigence de singularité contre la dictature du On [Alain, Heidegger, Bachelard] ; II. Autrui et la transmission comme conditions indispensables pour s'orienter et éviter le solipsisme [Descartes, Platon Caverne, Rousseau] ; III. Penser par soi-même comme conversion intérieure et réappropriation critique du savoir [Platon conversion du regard, Valéry repenser ce qui fut pensé]).
- Sujet 2 Explication Corrigée : Épictète, Entretiens I, XVIII (Thèse : l'injustice et la faute relèvent de l'erreur intellectuelle sur le Bien et le Mal, il faut éduquer et plaindre plutôt que punir et s'irriter ; Repères : En fait / En droit, Erreur / Faute).
- Sujet 3 Explication Corrigée : Bergson, La pensée et le mouvant (Thèse : l'art dévoile la réalité désintéressée masquée par nos perceptions utilitaires ordinaires ; l'artiste comme révélateur et "distrait" de l'action ; Klee, Valéry, Holbein Les Ambassadeurs).
- Glossaire des repères : Absolu/Relatif, Abstrait/Concret, En acte/En puissance, Analyse/Synthèse, Concept/Image/Métaphore, Contingent/Nécessaire, Croire/Savoir, Essentiel/Accidentel, Exemple/Preuve, Expliquer/Comprendre, En fait/En droit, Formel/Matériel, Genre/Espèce/Individu, Hypothèse/Conséquence/Conclusion, Idéal/Réel, Identité/Égalité/Différence, Impossible/Possible, Intuitif/Discursif, Légal/Légitime, Médiat/Immédiat, Objectif/Subjectif/Intersubjectif, Obligation/Contrainte, Origine/Fondement, Persuader/Convaincre, Principe/Cause/Fin, Public/Privé, Ressemblance/Analogie, Théorie/Pratique, Transcendant/Immanent, Universel/Particulier/Général/Singulier, Vrai/Probable/Certain.`,
    sampleInBookletSubjects: [
      'Sujet 1 (Dissertation) : « Pense-t-on par soi-même ? » (Corrigé intégral rédigé p. 290-297)',
      'Sujet 2 (Explication) : Épictète, Entretiens I, XVIII (Corrigé intégral rédigé p. 298-304)',
      'Sujet 3 (Explication) : Bergson, La pensée et le mouvant (Corrigé intégral rédigé p. 306-312)',
      'Dissertation d\'application Chapitre 1 : « Suffit-il d\'être différent pour être soi-même ? » (p. 21)',
      'Dissertation d\'application Chapitre 13 : « L\'État rend-il libre ? » (p. 222)',
      'Dissertation d\'application Chapitre 14 : « Le respect de la légalité est-il toujours juste ? » (p. 236)'
    ],
    sampleNewUntreatedSubjects: [
      'Dissertation : « La vérité dépend-elle de nous ? »',
      'Dissertation : « L\'obéissance à la loi exclut-elle toute liberté ? »',
      'Explication de texte : Kant, Fondements de la métaphysique des mœurs, sur la bonne volonté'
    ]
  },
  {
    id: 'svt-annales-terminale-ucad-senegal',
    title: 'Annales de SVT Niveau Terminale : Sujets & Corrigés de BAC Séries S1 & S1A (2008-2017)',
    author: 'Office du Baccalauréat — Université Cheikh Anta Diop de Dakar (UCAD)',
    roleOrAffiliation: 'Office du Baccalauréat du Sénégal (Dakar)',
    countryOrigin: 'Sénégal / Espace UEMOA & BAC S1-S1A-S2',
    discipline: 'svt',
    disciplineLabel: 'SVT Terminale S1/S1A — Annales Officielles & Corrigés Intégraux (2008-2017)',
    badgeColor: 'emerald',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['S1', 'S1A', 'S2', 'C', 'D'],
    publicationYear: 2017,
    coverDescription: 'Recueil officiel des épreuves écrites et des corrigés barémés du Baccalauréat S1 et S1A du Sénégal de 2008 à 2017. Couvre les trois volets de l\'épreuve : I. Maîtrise des connaissances (exposés structurés avec schémas cotés 2n=4, arcs réflexes, régulations hormonales), II. Exploitation de documents (analyses de graphes, expériences in vitro/in vivo, déductions rigoureuses) et III. Pratique du raisonnement scientifique (génétique humaine, arbres généalogiques, calculs de probabilités, échiquiers de croisement).',
    overview: `Recueil de référence des annales officielles de SVT Série S1 et S1A délivré par l'Office du Baccalauréat de l'Université Cheikh Anta Diop de Dakar (UCAD) avec corrigés types détaillés et barèmes officiels point par point :
- Structure officielle de l'épreuve (Durée 2h ou 3h selon la série, Coefficient 2 en S1, 6 en S2) :
  1. I. Maîtrise des connaissances (4 points) : exposé structuré (Introduction définissant les termes et annonçant le plan, développement logique avec schémas scientifiques indispensables, conclusion bilan).
  2. II. Exploitation de documents (6 points) : analyse méthodique des enregistrements (oscilloscope, dosages hormonaux, protéinogrammes, contractions musculaires) et déductions causales.
  3. III. Pratique du raisonnement scientifique (8 points) : génétique des populations et génétique humaine formelle (arbres généalogiques, détermination de la dominance/récessivité, localisation autosomale ou gonosomale X/Y, génotypes et échiquiers de croisement, calculs de probabilités de descendance).
  4. IV. Communication (2 points) : plan du texte, qualité de l'expression scientifique, soin des schémas et de la présentation.

- Corpus des sessions et corrigés officiels intégrés :
  • BAC 2008 S1 :
    - I. Maîtrise : Réaction immunitaire à médiation humorale (RIMH) ; reconnaissance de l'épitope par les Ig de surface des LB, sélection clonale, coopération avec les LT4/LTa via interleukines (Il4 prolifération, Il6 différenciation en plasmocytes sécréteurs d'anticorps), neutralisation par complexe immun et élimination par phagocytose/complément.
    - II. Exploitation : Moelle épinière et voies de la douleur ; enregistrement du potentiel d'action (2b), comparaison avec/sans morphine (inhibition des trains tardifs de PA), diamètre et myélinisation des fibres (fibres A myélinisées à conduction rapide 6-24 m/s vs fibres B amyéliniques à conduction lente 1-2 m/s), rôle de l'interneurone à enképhaline (« morphine naturelle ») bloquant la libération de substance P par le neurone sensitif S.
    - III. Raisonnement : Drépanocytose (anémie falciforme, chaîne bêta Hbs vs HbA) ; transmission autosomale récessive (fille malade II5 issue de parents sains I1 et I2 ; rejet de l'hérédité liée à Y et à X) ; probabilité de 1/4 pour le couple d'hétérozygotes ; confirmation par électrophorèse des protéines (protéinogramme avec double bande HbA et Hbs).
  • BAC 2009 S1 :
    - I. Maîtrise : Méiose et fécondation comme garants de la constance du caryotype d'une espèce (schémas à 2n=4, anaphase 1 division réductionnelle séparant les homologues haploïdie n, anaphase 2 division équationnelle, et fécondation restaurant la diploïdie 2n).
    - II. Exploitation : Maladie d'Alzheimer et neurotransmetteurs ; déficit sélectif en acétylcholine ; rôle de l'atropine comme inhibiteur compétitif sur le muscle fundus de rat ; confirmation par dégénérescence massive des neurones cholinergiques des noyaux gris.
    - III. Raisonnement : Glandes surrénales et pression artérielle ; surrénalectomie entraînant hypovolémie et hypotension ; parabiose démontrant la voie humorale ; élimination urinaire accrue de Na+ et rétention de K+ ; rôle de l'aldostérone et de la boucle rénine-angiotensine-aldostérone dans la réabsorption de Na+ et d'eau.
  • BAC 2010 S1 :
    - I. Maîtrise : Méiose et unicité génétique des individus ; brassage interchromosomique en anaphase I (2^23 = 8 388 608 combinaisons chez l'homme, probabilité de ressemblance 1 / 2*2^23) et brassage intrachromosomique (crossing-over en prophase I avec 3 couples d'allèles Aa, Bb, Cc sur deux paires de chromosomes).
    - II. Exploitation : Potentiel transmembranaire de repos (-60 mV à -70 mV) ; inégale répartition Na+ extracellulaire (440 mM) et K+ intracellulaire (400 mM) ; flux entrant actif de 42K+ inhibé par le dinitrophénol (DNP, poison respiratoire bloquant l'ATP) démontrant l'existence d'une pompe Na+/K+ ATPase.
    - III. Raisonnement : Double transmission héréditaire ; aptitude à goûter la PTC (allèle récessif autosomal g) et hypertrichose auriculaire (présence exclusive chez les hommes de père en fils, gène holandrique lié au chromosome Y) ; échiquier de croisement et probabilités de 25 % pour chaque combinaison.
  • BAC 2012 S1 :
    - I. Maîtrise : Potentiel d'action monophasique sur fibre nerveuse isolée ; montage avec électrode endocavitaire R1 et électrode de référence fixe R2 ; phases de dépolarisation (ouverture des canaux Na+ voltage-dépendants), repolarisation (fermeture Na+, ouverture K+ voltage-dépendants) et hyperpolarisation transitoire.
    - II. Exploitation : Régulation de la volémie par l'ADH (hormone antidiurétique) ; volorécepteurs de l'oreillette gauche, nerf vague X sensitif inhibant les neurones hypothalamiques sécréteurs d'ADH ; lors d'une hémorragie, levée d'inhibition entraînant hypersécrétion d'ADH et rétention rénale d'eau.
    - III. Raisonnement : Maladies héréditaires M1 (autosomale récessive) et M2 (gonosomale dominante liée au chromosome X) ; analyse des croisements et calculs de risques génétiques pour les descendants.
  • BAC 2013 S1 :
    - I. Maîtrise : Plaque motrice / synapse neuromusculaire à acétylcholine ; appareil sous-neural plissé du sarcolemme ; libération d'acétylcholine créant un PA musculaire se propageant par les tubules transverses vers le réticulum endoplasmique lisse (REL) ; libération massive de Ca2+ déclenchant le glissement des myofilaments d'actine sur la myosine et raccourcissement des sarcomères.
    - II. Exploitation : Coopération cellulaire dans la RIMH ; rôle obligatoire des lymphocytes T (démontré par cobayes thymectomisés) et des macrophages (test des filtrats en tube à essai).
    - III. Raisonnement : Hypercholestérolémie familiale ; allèles codominants régissant le nombre de récepteurs membranaires aux LDL (RF = N//N taux 1, RM = N//M taux 0,5, RE = M//M taux 0 conduisant à l'athérosclérose fulminante) ; fréquence génique 1/1 000 000 en population.
  • BAC 2014 S1 :
    - I. Maîtrise : Régulation de la pression osmotique consécutive à une déshydratation/transpiration ; intervention des osmorécepteurs carotidiens et hypothalamiques via le nerf de Hering et sécrétion d'ADH pour rétablir la volémie.
    - II. Exploitation : Énergétique musculaire ; hydrolyse immédiate de la phosphocréatine reconstituant l'ATP ; chronologie des voies métaboliques (créatine phosphate -> glycolyse anaérobie lactique -> oxydation aérobie cellulaire durable).
    - III. Raisonnement : Déficit familial en APTR (adénine phosphoribosyltransférase) ; transmission autosomale récessive ; hétérozygotie à 50 % d'activité enzymatique.
  • BAC 2015 S1/S1A :
    - I. Maîtrise : Organisation comparée des appareils génitaux humain mâle/femelle et des gamètes (spermatozoïde mobile flagellé à acrosome vs ovocyte II volumineux bloqué en métaphase II entouré de la zone pellucide).
    - II. Exploitation : Intégration synaptique sur motoneurone N3 ; sommation spatiale d'un PPSE (synapse excitatrice) et d'un PPSI (synapse inhibitrice) ; rôle indispensable des ions Ca2+ dans l'exocytose des neurotransmetteurs.
    - III. Raisonnement : Effet immunosuppresseur du THC (cannabis) sur les lymphocytes T (diminution de la prolifération des LT8 en LT cytotoxiques LTC et échec du rejet tumoral).
  • BAC 2016 S1/S1A :
    - I. Maîtrise : Système rénine-angiotensine-aldostérone en réponse à une hypotension rénale (vasoconstriction, tachycardie, rétention hydrosodée).
    - II. Exploitation : Analyse plasmatique et urinaire lors de l'effort physique ; apparition d'acide lactique et baisse du pH régulée par élimination rénale des ions H+ sous forme de phosphate diacide H2PO4-.
    - III. Raisonnement : Albinisme oculaire lié au chromosome X récessif (individus atteints [c], sains [a], femmes conductrices [b] à fond d'œil moucheté).
  • BAC 2017 S1/S1A :
    - I. Maîtrise : Testostéronémie et boucle de régulation hormonale (cellules de Leydig stimulées par LH/ICSH, rétrocontrôle négatif de la testostérone sur la GnRH hypothalamique).
    - II. Exploitation : Système du complément et complexe immun ; lyse des hématies de mouton (GRM) uniquement en présence conjointe d'anticorps spécifiques et de complément actif.
    - III. Raisonnement : Régulation de la pression artérielle ; identification du nerf vague X (cardiomodérateur hypotenseur) et de l'angiotensine (vasoconstricteur).`,
    keyConcepts: [
      'Méiose et fécondation : brassages interchromosomique et intrachromosomique (crossing-over)',
      'Neurophysiologie : potentiel de repos, potentiel d\'action monophasique, synapses chimiques (PPSE, PPSI, sommation)',
      'Physiologie musculaire : plaque motrice, couplage excitation-contraction, voies énergétiques ATP/phosphocréatine/glycolyse/respiration',
      'Immunologie : RIMH, RIMC, sélection clonale, coopération cellulaire LB/LT4/macrophages, système du complément',
      'Endocrinologie et Homéostasie : régulation de la pression artérielle et volémie (système RAA, ADH, nerf vague, Hering), régulation de la testostéronémie',
      'Génétique humaine formelle : arbres généalogiques, allèles dominants/récessifs/codominants, localisation autosomale vs gonosomale X/Y, échiquiers de croisement'
    ],
    methodologicalHighlights: [
      {
        name: 'Protocole de Résolution en Génétique Humaine (UCAD Bac S1)',
        description: 'Méthode en 5 étapes pour l\'analyse de pedigree : 1. Démontrer la dominance ou récessivité par l\'analyse des parents et enfants sains/atteints ; 2. Tester et éliminer successivement l\'hypothèse liée à Y, puis liée à X ; 3. Conclure sur la localisation autosomale ou gonosomale ; 4. Écrire les génotypes complets ; 5. Construire l\'échiquier de croisement avec proportions gamétiques pour déterminer les probabilités.',
        keyRules: [
          'Ne jamais affirmer sans justifier en citant les numéros précis des individus de l\'arbre généalogique.',
          'Préciser la convention d\'écriture des allèles (ex: M/m ou S/s avec indices).'
        ]
      },
      {
        name: 'Démarche d\'Exploitation de Documents Scientifiques',
        description: 'Règle stricte en trois temps : « Je vois que... » (lecture objective et chiffrée des courbes/tableaux avec unités) -> « Or je sais que... » (mobilisation des connaissances biologiques) -> « Donc je déduis que... » (conclusion causale répondant à la question).',
        keyRules: [
          'Comparer systématiquement les témoins et les conditions expérimentales.',
          'Quantifier systématiquement les variations observées (ex: passage de -60 mV à -30 mV).'
        ]
      },
      {
        name: 'Construction d\'un Exposé Structuré en SVT',
        description: 'Introduction posant le problème et annonçant le plan -> Parties titrées et articulées -> Schémas fonctionnels obligatoires grand format avec titre, légende et flèches de sens -> Conclusion récapitulative.',
        keyRules: [
          'Utiliser le nombre de chromosomes demandé dans le sujet (ex: 2n=4).',
          'Soigner la présentation et la rigueur du vocabulaire biologique.'
        ]
      }
    ],
    coreKnowledgeExcerpt: `Banque d'annales et corrigés officiels UCAD Dakar SVT S1/S1A :
- Sujet 2008 S1 : RIMH et production d'anticorps ; Moelle épinière, fibres myélinisées A vs amyéliniques B, enképhaline et substance P ; Génétique drépanocytose autosomale récessive et protéinogramme HbA/Hbs.
- Sujet 2009 S1 : Méiose, fécondation et constance du caryotype (2n=4) ; Maladie d'Alzheimer, déficit acétylcholine, atropine ; Régulation rénine-angiotensine-aldostérone et volémie.
- Sujet 2010 S1 : Méiose et unicité (brassage inter 2^23 et intra crossing-over) ; Potentiel de repos, gradient Na+/K+, pompe Na+/K+ ATP-dépendante ; Génétique PTC autosomale récessive et hypertrichose liée à Y.
- Sujet 2012 S1 : PA monophasique (dépolarisation Na+, repolarisation K+) ; Régulation volémie/ADH par volorécepteurs et nerf X ; Maladies héréditaires M1 autosomale récessive et M2 liée à X dominante.
- Sujet 2013 S1 : Synapse neuromusculaire, acétylcholine, Ca2+ et contraction musculaire ; Coopération immunitaire LB/LT4/macrophages ; Hypercholestérolémie familiale codominante et récepteurs LDL.
- Sujet 2014 S1 : Régulation pression osmotique, déshydratation et ADH ; Énergie musculaire, phosphocréatine et métabolisme anaérobie/aérobie ; Déficit enzymatique APTR autosomal récessif.
- Sujet 2015 S1/S1A : Appareils génitaux et gamètes comparés ; Intégration synaptique PPSE/PPSI et rôle du Ca2+ ; Immunité antitumorale, THC et lymphocytes T cytotoxiques.
- Sujet 2016 S1/S1A : Régulation hypotension par système RAA ; Effort physique, acide lactique et régulation du pH par les reins (phosphate diacide) ; Albinisme oculaire lié à X récessif.
- Sujet 2017 S1/S1A : Testostéronémie, cellules de Leydig, LH et rétrocontrôle négatif ; Système du complément et hémolyse par complexes immuns ; Régulation de la pression artérielle par nerf vague et angiotensine.`,
    sampleInBookletSubjects: [
      'BAC 2008 S1 : Déclenchement de la RIMH et production d\'anticorps (Corrigé p. 27-29)',
      'BAC 2009 S1 : Méiose, fécondation et constance du caryotype (Corrigé p. 30-32)',
      'BAC 2010 S1 : Méiose et unicité des individus, brassage inter et intra-chromosomique (Corrigé p. 33-36)',
      'BAC 2012 S1 : PA monophasique et régulation de l\'hypotension par l\'ADH (Corrigé p. 37-40)',
      'BAC 2013 S1 : Jonction neuromusculaire et génétique de l\'hypercholestérolémie (Corrigé p. 41-44)',
      'BAC 2014 S1 : Régulation de la pression osmotique et voies énergétiques musculaires (Corrigé p. 45-47)',
      'BAC 2015 S1 : Organisation comparée des gamètes et intégration synaptique (Corrigé p. 48-50)',
      'BAC 2016 S1 : Système rénine-angiotensine-aldostérone et albinisme oculaire (Corrigé p. 51-53)',
      'BAC 2017 S1 : Régulation de la testostéronémie et action du complément (Corrigé p. 54-56)'
    ],
    sampleNewUntreatedSubjects: [
      'Sujet type : Régulation de la glycémie après un repas riche en glucides (cellules bêta, insuline, récepteurs hépatiques)',
      'Sujet type : Transmission d\'une maladie autosomale dominante à pénétrance complète',
      'Sujet type : Analyse comparative du réflexe myotatique et du réflexe de flexion'
    ]
  },
  {
    id: 'anglais-annales-terminale-cd-burkina',
    title: 'Annales d\'Anglais Terminales Séries C et D : Rappel de cours, Épreuves & Corrigés (2020)',
    author: 'Christian Paulin Zouré, Salam Zorom, Tendouindé Bruno Nikiema (IES) — Préface Pr Stanislas Ouaro',
    roleOrAffiliation: 'Ministère de l\'Éducation nationale (MENAPLN) — DGREIP, Burkina Faso',
    countryOrigin: 'Burkina Faso / Afrique de l\'Ouest BAC C-D',
    discipline: 'anglais',
    disciplineLabel: 'Anglais Terminale C & D — Cours Grammatical Complet, Guided Commentary & Sujets Corrigés',
    badgeColor: 'sky',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['C', 'D', 'S1', 'S2', 'Scientifiques'],
    publicationYear: 2020,
    coverDescription: 'Ouvrage officiel du Ministère de l\'Éducation nationale du Burkina Faso (MENAPLN) pour les séries C et D. Comprend un mémento grammatical complet (tableau synthétique des 16 temps, ordre des mots en affirmative/négative/interrogative, règle d\'ordre des adjectifs de l\'abstrait au concret, liste de verbes irréguliers, parties du discours, connecteurs, mots usuels et faux amis), la méthodologie du Guided Commentary et du Paragraph Writing, ainsi que 11 sessions d\'épreuves du Baccalauréat avec leurs corrigés détaillés.',
    overview: `Manuel officiel d'annales d'anglais conçu par une équipe d'inspecteurs et d'encadreurs pédagogiques (IES) du Burkina Faso sous l'égide du Ministère de l'Éducation nationale (MENAPLN, DGREIP) :
- I. RAPPEL DE COURS & OUTILS LINGUISTIQUES :
  • Thèmes émergents au programme : Population, Health and sanitation, Gender issues, Environmental issues, Agriculture, Science and technology, Energy.
  • Tableau synthétique exhaustif des temps (Tenses) : Simple Present, Present Continuous, Simple Past, Past Continuous, Present Perfect Simple & Continuous, Past Perfect Simple & Continuous, Will-future, Going-to future, Future Continuous, Future Perfect Simple & Continuous, Conditional Simple, Conditional Continuous, Conditional Perfect Simple & Continuous.
  • Structure de la phrase et ordre des mots (Word Order) :
    - Phrase affirmative : basique (S + V + O) et élaborée (Subject + Verb + Indirect Object + Direct Object + Place + Time). Ex: "I will tell you the story at school tomorrow."
    - Phrase négative : Subject + Auxiliary + NOT + Verb + IO + DO + Place + Time.
    - Phrase interrogative : Question word + Auxiliary/be + Subject + Other verb + IO + DO + Place + Time (ou sans auxiliaire quand la question porte sur le sujet : "Who asked you?").
  • Ordre canonique des adjectifs (de l'abstrait au concret) :
    1. Opinion (unusual, lovely, beautiful) -> 2. Size (big, small, tall) -> 3. Physical quality (thin, rough, untidy) -> 4. Shape (round, square) -> 5. Age (young, old) -> 6. Colour (blue, red) -> 7. Origin (Dutch, Japanese) -> 8. Material (metal, wood, plastic) -> 9. Type (four-sided, U-shaped) -> 10. Purpose (cleaning, cooking).
    Exemple type : "Miss Burkina was a beautiful, tall, thin, young, black-haired girl." / "My uncle has bought a nice, new, black, Japanese car."
  • Verbes irréguliers incontournables (forme infinitive, past simple, past participle de become à write).
  • Les parties du discours (Parts of speech) : Noun, Verb, Adjective, Adverb, Pronoun, Conjunction (coordinating, subordinating, conjunctive adverbs, correlative), Preposition, Interjection, Article.
  • Mots usuels d'examen (account for, pattern, quotation, rephrase, relevant, state, sum up, facts and figures, etc.).
  • Faux amis fréquents (ability = aptitude [non habileté], actually = en fait [non actuellement], character = personnage [non caractère], hazard = danger/risque [non hasard], issue = problème [non issue], sensible = raisonnable [non sensible], to achieve = réaliser [non achever], to resume = reprendre [non résumer], to use = utiliser [non user]).
  • Méthodologie du Paragraph Writing (27-29) : Définition, structure d'un paragraphe (Topic sentence + Supporting ideas 1..n avec connecteurs + Concluding sentence facultative). Exemples modèles rédigés sur l'environnement et l'industrie pharmaceutique.
  • Conseils méthodologiques pour le Guided Commentary : lire attentivement sans recopier le texte mot à mot, répondre avec ses propres mots, organiser l'essay avec connecteurs logiques.

- II. ÉPREUVES DU BACCALAURÉAT ET CORRIGÉS DÉTAILLÉS :
  • Session normale 2019 : "A Drought Fighting Technique" (Yacouba Sawadogo, le zaï au Sahel, restauration de 40 ha de forêt et lutte contre l'émigration).
  • Session remplacement 2018 : "Our Bodies, Our Fears" (Physiologie de la peur et de l'anxiété, amygdale, hypothalamus, CRF, adrénaline, cortisol, infarctus).
  • Session normale 2017 (2e tour) : "The Miracle Algae" (La spiruline / Dihé au Tchad, région du Kanem-Lac, apport en protéines, autonomisation économique des femmes).
  • Session normale 2016 (2e tour) : "Living Longer" (Gérontologie, allongement de l'espérance de vie, alimentation, conséquences démographiques et sociétales).
  • Session normale 2016 (1er tour) : "Biofortification: Hope for Africa's Malnourished" (Perpetua Okao en Ouganda, patate douce orange riche en vitamine A, Harvest Plus).
  • Session normale 2015 (1er tour) : "Renal Dialysis" (Insuffisance rénale, urémie, dialyse péritonéale et hémodialyse, shunt artério-veineux).
  • Session remplacement 2014 : "Battle for a Vaccine" (Grippe aviaire H5N1, refus de l'Indonésie de céder gratuitement les souches à l'OMS, accord Baxter, équité sanitaire Nord-Sud).
  • Session normale 2014 (1er tour) : "Genetically Modified Morals" (Aide alimentaire OGM en Afrique australe, réglementation UE, protocole de Carthagène sur la biosécurité).
  • Session normale 2012 (1er tour) : "Agroforestry" (Association arbres-cultures, ICRAF, séquestration du carbone, mécanisme de développement propre du Protocole de Kyoto).
  • Session normale 2011 (1er tour) : "Killer Stroke" (Accidents vasculaires cérébraux, facteurs de risque, hygiène bucco-dentaire et bactéries).
  • Session normale 2010 (1er tour) : "Cancer Control in Developing Countries" (Charge du cancer dans le tiers-monde, programmes nationaux de prévention et soins OMS).`,
    keyConcepts: [
      'Grammaire anglaise complète (Tableau des 16 temps, modaux, conditionnels I, II, III)',
      'Syntaxe et Word Order : structures affirmative (S+V+IO+DO+P+T), négative et interrogative',
      'Règle d\'or de l\'ordre des adjectifs : Opinion -> Size -> Quality -> Shape -> Age -> Colour -> Origin -> Material -> Type -> Purpose',
      'Faux amis classiques et mots usuels d\'examen en anglais',
      'Méthodologie du Guided Commentary : compréhension écrite autonome et reformulation',
      'Technique du Paragraph Writing : Topic sentence, supporting ideas (exemples, faits, statistiques) et conclusion',
      'Thèmes majeurs contemporains : Drought & Zaï, Fear & Stress physiology, Spirulina & Nutrition, Biofortification, Medical technology (Dialysis, Vaccines), Agroforestry, Cancer control'
    ],
    methodologicalHighlights: [
      {
        name: 'Règle d\'Ordre des Adjectifs Qualificatifs (MENAPLN)',
        description: 'Classer impérativement les adjectifs qualificatifs de l\'abstrait au concret : 1. Opinion -> 2. Taille/Dimension -> 3. Qualité physique -> 4. Forme -> 5. Âge -> 6. Couleur -> 7. Origine/Nationalité -> 8. Matière -> 9. Type -> 10. Usage/Fonction.',
        keyRules: [
          'Ne pas dépasser 3 à 4 adjectifs successifs pour préserver l\'élégance de la phrase.',
          'Exemple canonique : "a beautiful (opinion) tall (size) young (age) black-haired (colour) girl".'
        ]
      },
      {
        name: 'Architecture du Paragraph Writing pour l\'Essay (80-100 mots)',
        description: '1. Topic sentence claire posant l\'idée maîtresse ; 2. Trois idées de soutien (Supporting ideas) introduites par des connecteurs logiques précis (First, Second, Furthermore, For example, Last) ; 3. Concluding sentence récapitulative.',
        keyRules: [
          'Respecter rigoureusement la contrainte de longueur (environ 80 à 100 mots).',
          'Illustrer les arguments par des faits concrets ancrés dans les réalités africaines (ex: Zaï au Sahel, médecine traditionnelle au Burkina Faso).'
        ]
      },
      {
        name: 'Traitement des Questions de Compréhension (Guided Commentary)',
        description: 'Répondre avec ses propres mots en s\'appuyant sur les indices textuels sans jamais recopier des phrases entières du texte (lifting textuel sanctionné).',
        keyRules: [
          'Faire attention aux faux amis (ex: actually = en réalité, issue = problème).',
          'Vérifier la concordance des temps entre la question et la réponse.'
        ]
      }
    ],
    coreKnowledgeExcerpt: `Corpus de textes et corrigés types d'Anglais Terminale C/D (Burkina Faso) :
- Sujet 2019 : A Drought Fighting Technique (Zaï de Yacouba Sawadogo, fosse de rétention, compost, arbres, lutte contre la désertification et l'émigration rurale).
- Sujet 2018 : Our Bodies, Our Fears (Anatomie de la peur : amygdale -> hypothalamus -> CRF -> hypophyse et surrénales -> adrénaline et cortisol ; impact sur le cœur et l'immunité).
- Sujet 2017 : The Miracle Algae (Dihé / spiruline du lac Tchad ; 15g de spiruline = 100g de bœuf ; vente au marché de Mao et autonomie des femmes).
- Sujet 2016 : Living Longer (Recherche gérontologique, recul du vieillissement cellulaire, régimes équilibrés et conséquences sur le travail des seniors) & Biofortification (Patate douce à chair orange d'Ouganda par Perpetua Okao, lutte contre la cécité infantile causée par le manque de vitamine A).
- Sujet 2015 : Renal Dialysis (Insuffisance rénale aiguë et chronique, épuration du sang à travers une membrane de cellophane, risque d'hémorragie par déconnexion du shunt).
- Sujet 2014 : Battle for a Vaccine (Conflit Indonésie-OMS sur les échantillons de H5N1 et accès équitable aux vaccins) & Genetically Modified Morals (Refus des OGM par l'Afrique australe et protocole de Carthagène).
- Sujet 2012 : Agroforestry (ICRAF, cultures intercalaires arborées, séquestration carbone et crédits carbone du protocole de Kyoto).
- Sujet 2011 : Killer Stroke (Accidents vasculaires cérébraux, hypertension, rôle pathogène des bactéries buccales).
- Sujet 2010 : Cancer Control (Stratégies OMS d'évaluation et de déploiement des soins anticancéreux dans les pays en développement).`,
    sampleInBookletSubjects: [
      'Session 2019 : "A Drought Fighting Technique" (Corrigé complet p. 56)',
      'Session 2018 : "Our Bodies, Our Fears" (Corrigé complet p. 57)',
      'Session 2017 : "The Miracle Algae" (Corrigé complet p. 58)',
      'Session 2016 : "Living Longer" & "Biofortification: Hope for Africa\'s Malnourished" (Corrigés p. 59-61)',
      'Session 2015 : "Renal Dialysis" (Corrigé complet p. 62-63)',
      'Session 2014 : "Battle for a Vaccine" & "Genetically Modified Morals" (Corrigés p. 64-67)',
      'Session 2012 : "Agroforestry" (Corrigé complet p. 68-69)',
      'Session 2011 : "Killer Stroke" (Corrigé complet p. 70-71)',
      'Session 2010 : "Cancer Control in Developing Countries" (Corrigé complet p. 71-72)'
    ],
    sampleNewUntreatedSubjects: [
      'Guided Commentary : Renewable Energies in the Sahel (Solar energy and sustainable development)',
      'Paragraph writing : "How can youth entrepreneurship fight unemployment in West Africa?"',
      'Grammar test : Sentence transformation and correct order of adjectives in descriptive essays'
    ]
  },
  {
    id: 'svt-cours-terminale-l2-pakao',
    title: 'Collection Le Pakao — Fascicule SVT : Cours Intégral Terminale L2',
    author: 'Équipe Pédagogique Le Pakao (reseauscolaire.com)',
    roleOrAffiliation: 'Collection Pédagogique Le Pakao (Sénégal & Espace UEMOA)',
    countryOrigin: 'Sénégal / Programme Officiel Terminale L2',
    discipline: 'svt',
    disciplineLabel: 'SVT Terminale L2 — Cours Complet des 7 Thèmes du Programme Officiel',
    badgeColor: 'teal',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['L2', 'L1', 'L', 'S2', 'S1'],
    publicationYear: 2021,
    coverDescription: 'Manuel de cours complet de Sciences de la Vie et de la Terre conforme au programme officiel sénégalais de Terminale L2. Organisé en 5 parties et 7 thèmes majeurs : Relation de l\'organisme avec le milieu extérieur (Système nerveux, mouvements réflexes et volontaires), L\'activité cardiaque et sa régulation, Intégrité de l\'organisme (Régulation de la glycémie, Immunologie et SIDA), Reproduction chez les mammifères (Gamétogenèse, régulation hormonale, fécondation, gestation, contraception) et Hérédité humaine (Pedigrees, groupes sanguins, daltonisme, hémophilie, anomalies chromosomiques).',
    overview: `Fascicule exhaustif de référence pour la classe de Terminale L2 élaboré par l'équipe pédagogique « Collection Le Pakao » couvrant la totalité des compétences et connaissances exigibles au Baccalauréat :
- PROGRAMME STRUCTURÉ EN 5 PARTIES ET 7 THÈMES :
  • Thème 1 : Organisation du système nerveux des mammifères
    - Encéphale : 3 méninges protectrices (dure-mère fibreuse, pie-mère nourricière, arachnoïde avec liquide céphalorachidien amortisseur de chocs) ; faces dorsale (cerveau avec hémisphères, scissures de Rolando et de Sylvius, cervelet avec vermis et arbre de vie, bulbe rachidien) et ventrale (tronc cérébral, pont de Varole, chiasma optique, hypothalamus) ; organisation interne (ventricules latéraux 1 et 2, trou de Monro, 3e ventricule, aqueduc de Sylvius, 4e ventricule, trou de Magendie, canal de l'épendyme) ; substance grise périphérique (cortex cérébral 1 à 4 mm) et blanche centrale avec noyaux gris (thalamus, corps strié).
    - Moelle épinière : cordon de 45 cm, substance grise centrale en forme de X avec cornes antérieure large et postérieure étroite, substance blanche périphérique (inversion de structure par rapport à l'encéphale), ganglion spinal sur la racine postérieure sensitive, racine antérieure motrice, nerf rachidien mixte (31 paires chez l'homme, 12 paires de nerfs crâniens dont le X pneumogastrique).
  • Thème 2 : Rôle du système nerveux dans le comportement moteur
    - Réflexes innés (absolus) : involontaires, stéréotypés, prévisibles et protecteurs (réflexes rotulien, achilléen, plantaire).
    - Démonstration expérimentale sur la grenouille spinale : loi de Pflüger (seuil d'excitation 1/50, réponses localisée, unilatérale, symétrique, irradiée, généralisée). Arc réflexe à 5 éléments : récepteur sensoriel, conducteur centripète sensitif, centre médullaire intégrateur, conducteur centrifuge moteur, effecteur musculaire.
    - Expériences fondamentales de Bell et Magendie & dégénérescence wallérienne : racine postérieure sensitive (perte de sensibilité après section, neurones en T du ganglion spinal), racine antérieure motrice (paralysie motrice après section, motoneurones de la corne antérieure).
    - Réflexes myotatiques : contraction en réponse à l'étirement (monosynaptique rapide, fuseaux neuromusculaires) ; réflexe myotatique inverse (inhibition autogène protectrice par les organes tendineux de Golgi) ; innervation réciproque agoniste/antagoniste.
    - Réflexes conditionnels : pavlovien (stimulus neutre son/lumière associé au stimulus inconditionnel viande créant une liaison temporaire entre cortex auditif et centre salivaire) et skinnérien (conditionnement opérant du rat par levier et renforcement positif/négatif).
    - Mouvements volontaires : intentionnels, conscients et imprévisibles ; aires corticales motrices (projection motrice en avant du sillon de Rolando, hémiplégie croisée, homonculus moteur) et psychomotrice ; voies pyramidales directes monosynaptiques et extrapyramidales polysynaptiques ; imagerie cérébrale (EEG, scanner X, angiographie, IRM, scintigraphie).
  • Thème 3 : L'activité cardiaque et la vasomotricité
    - Révolution cardiaque : systole auriculaire (onde P), systole ventriculaire (complexe QRS), diastole générale (onde T) ; propriétés du myocarde : intétanisable (période réfractaire absolue pendant la systole), extrasystole ventriculaire non décalente avec repos compensateur vs extrasystole sinusale décalente ; loi du tout ou rien expliquée par les stries scalariformes.
    - Siège de l'automatisme : tissu nodal myogène chez les mammifères (nœud sinusal pacemaker, nœud septal, faisceau de His, réseau de Purkinje) ; expériences de Stannius sur grenouille (ganglion de Remak dans le sinus veineux, ganglion de Ludwig inhibiteur dans l'oreillette, ganglion de Bidder dans le ventricule).
    - Régulation de la pression artérielle ($PA = DC \times R$) : débit cardiaque $DC = VS \times FC$ ; régulation nerveuse par barorécepteurs (sinus carotidien, crosse aortique) via nerfs sensitifs de Hering et Cyon ; nerf vague X cardiomodérateur parasympathique (acétylcholine, expérience des deux cœurs de Loewi, échappement vagal) vs nerfs sympathiques cardioaccélérateurs (noradrénaline) ; régulation hormonale par le système rénine-angiotensine-aldostérone en hypotension ; pathologies (athérosclérose, angine de poitrine, infarctus du myocarde, anévrisme, hypertension primaire et secondaire).
  • Thème 4 : La régulation de la glycémie
    - Glycémie normale : constante biologique 0,85 à 1,15 g/L ; conséquences du déséquilibre (coma/mort en hypoglycémie, soif/amaigrissement/vasoconstriction en hyperglycémie).
    - Rôle du foie : organe régulateur effecteur (glycogénogenèse par stockage et glycogénolyse par libération, testé par la perfusion hépatique de Claude Bernard).
    - Rôle du pancréas comme glande mixte : acini exocrines (sécrétion digestive) et îlots de Langerhans endocrines (cellules $\beta$ sécrétant l'insuline hypoglycémiante, cellules $\alpha$ sécrétant le glucagon hyperglycémiant).
    - Hormones hyperglycémiantes complémentaires : adrénaline médullosurrénale, cortisol/ACTH, hormone de croissance GH.
    - Pathologies : Diabète de type 1 insulino-dépendant (destruction auto-immune des cellules $\beta$) vs Diabète de type 2 insulino-résistant (anomalie des récepteurs membranaires ou de l'insuline).
  • Thème 5 : L'immunologie et les défenses de l'organisme
    - Soi et non-soi : marqueurs majeurs (CMH I sur toutes les cellules nucléées, CMH II sur lymphocytes et macrophages, codés sur le chromosome 6) et mineurs (groupes sanguins ABO et Rhésus).
    - Organes lymphoïdes centraux (moelle osseuse rouge où naissent tous les leucocytes et maturent les LB ; thymus où maturent les LT) et périphériques (rate, ganglions, amygdales).
    - Phagocytose : réaction non spécifique en 4 temps (attraction chimiotactique, fixation/ingestion en phagosome, digestion lysosomiale, exocytose et présentation d'antigène CPA). Signes cardinaux de l'inflammation : rougeur, chaleur, gonflement, douleur.
    - RIMH (médiation humorale) : LB activés se transformant en plasmocytes sécréteurs d'anticorps sous l'action des interleukines de LT4 auxiliaires, formation de complexes immuns éliminés par phagocytose ou complément.
    - RIMC (médiation cellulaire) : LT8 activés évoluant en LT cytotoxiques (LTc) sécrétant de la perforine pour lyser les cellules cancéreuses ou greffons incompatibles.
    - Dysfonctionnements : SIDA/VIH (rétrovirus à ARN, fixation GP120 sur récepteur CD4 des LT4, transcriptase inverse, phases de primo-infection, asymptomatique et SIDA déclaré) ; maladies auto-immunes (thyroïdite, diabète T1) ; allergies (hypersensibilité immédiate avec IgE et libération d'histamine par les mastocytes).
    - Aides thérapeutiques : vaccination (active, préventive, durable avec cellules mémoires) vs sérothérapie (passive, curative, immédiate mais éphémère).
  • Thème 6 : Reproduction chez les mammifères
    - Anatomie comparée homme/femme et souris ; gamétogenèse comparée : spermatogenèse continue dans les tubes séminifères (cellules de Sertoli et de Leydig, phases de multiplication, accroissement, méiose réductionnelle/équationnelle et spermiogenèse en 74 jours) vs ovogenèse cyclique dans les follicules ovariens (atrésie, blocage fœtal en prophase I puis métaphase II lors de l'ovulation).
    - Cycles ovarien (folliculaire, ovulation au 14e jour par pic de LH, phase lutéinique), utérin (prolifération de l'endomètre, dentelle utérine, règles) et hormonal (œstradiol folliculaire et progestérone lutéale) ; rétrocontrôle négatif et rétrocontrôle positif pré-ovulatoire de l'œstradiol sur l'axe hypothalamus-hypophyse (GnRH, LH, FSH).
    - Fécondation : capacitation des spermatozoïdes, réaction acrosomique, blocage de la polyspermie par exocytose des granules corticaux, émission du 2e globule polaire, caryogamie/amphimixie restaurant la diploïdie $2n=46$.
    - Gestation, placenta (nutrition fœtale sélective et sécrétion d'HCG puis progestérone), accouchement (ocytocine, prostaglandines) et lactation (prolactine pour la sécrétion, ocytocine pour l'éjection réflexe).
    - Contraception : hormonale (micropilules progestatives, pilule combinée bloquant l'ovulation, pilule du lendemain, RU 486 antihormone) et mécanique/chirurgicale (préservatif, stérilet, ligature).
  • Thème 7 : Hérédité humaine
    - Méthodes d'étude : arbres généalogiques (pedigrees) ; critères de dominance et récessivité ; transmission autosomale vs liée aux gonosomes X ou Y (chromosome Y holandrique : uniquement des hommes atteints de père en fils ; chromosome X : père malade ne transmet jamais à son fils).
    - Exemples classiques : albinisme (autosomal récessif), groupes sanguins ABO (A et B codominants, O récessif) et Rhésus, daltonisme et hémophilie (récessifs liés à l'X).
    - Aberrations chromosomiques : Trisomie 21 (syndrome de Down), syndrome de Turner (44A + X), syndrome de Klinefelter (44A + XXY) et notions de conseil génétique préventif.`,
    keyConcepts: [
      'Neurophysiologie : méninges, encéphale, moelle épinière, arc réflexe inné, lois de Pflüger, réflexe myotatique monosynaptique',
      'Activité cardiaque : tissu nodal, automatisme myogène, ECG, expériences de Stannius et Loewi, régulation baroréflexe de la PA',
      'Régulation de la glycémie : glycogénogenèse, glycogénolyse, insuline/glucagon, diabète de type 1 et 2',
      'Immunologie : CMH I et II, phagocytose, RIMH et RIMC, coopération cellulaire, infection à VIH/SIDA, vaccination/sérothérapie',
      'Reproduction humaine : spermatogenèse, ovogenèse, cycles sexuels et rétrocontrôles hormonaux, fécondation, placenta, contraception',
      'Génétique humaine : arbres généalogiques, allèles récessifs/dominants/codominants, liaison à l\'X ou l\'Y, anomalies chromosomiques'
    ],
    methodologicalHighlights: [
      {
        name: 'Protocole d\'Analyse des Réflexes Médullaires (Le Pakao)',
        description: 'Vérifier successivement les 5 organes de l\'arc réflexe (récepteur, conducteur afférent, centre médullaire, conducteur efférent, effecteur musculaire) et appliquer la loi de Pflüger selon l\'intensité du stimulus.',
        keyRules: [
          'La destruction de la moelle épinière abolit tous les réflexes médullaires.',
          'La racine dorsale porte le ganglion spinal et conduit l\'influx sensitif centripète.'
        ]
      },
      {
        name: 'Schéma de la Régulation Baroréflexe de la Pression Artérielle',
        description: 'Articuler stimulus (hausse ou baisse de PA) -> mécanorécepteurs sino-aortiques -> nerfs de Hering/Cyon -> centre bulbaire dépresseur -> nerf vague X inhibiteur ou nerf sympathique accélérateur -> correction de la PA.',
        keyRules: [
          'Le nerf vague X ralentit le cœur en libérant de l\'acétylcholine.',
          'L\'hypotension rénale déclenche la cascade rénine -> angiotensine -> aldostérone.'
        ]
      },
      {
        name: 'Résolution des Pedigrees en Génétique Humaine',
        description: 'Méthodologie en 4 temps : 1. Prouver la récessivité ou dominance ; 2. Discuter l\'hypothèse liée à Y puis à X ; 3. Conclure sur le mode autosomal ou gonosomal ; 4. Écrire les génotypes complets.',
        keyRules: [
          'Deux parents sains ayant un enfant malade prouvent formellement la récessivité.',
          'Une fille malade ayant un père sain prouve formellement la non-liaison au chromosome X pour un allèle récessif.'
        ]
      }
    ],
    coreKnowledgeExcerpt: `Synthèse de cours Terminale L2 (Collection Le Pakao) :
- Thème 1 : Système nerveux des mammifères (Méninges dure-mère/arachnoïde/pie-mère ; 4 ventricules cérébraux ; substance grise corticale cérébrale vs substance grise centrale en X de la moelle ; 31 paires de nerfs rachidiens mixtes).
- Thème 2 : Comportement moteur (Réflexes rotulien et achilléen ; seuil d'excitation et loi de Pflüger ; expériences de Magendie ; réflexe myotatique monosynaptique des fuseaux neuromusculaires ; réflexe salivaire pavlovien ; motricité volontaire pyramidale).
- Thème 3 : Activité cardiaque et vasomotricité (Révolution cardiaque SA, SV, DG ; intétanisie du myocarde ; tissu nodal sinusal/septal/His/Purkinje ; barorécepteurs de Hering et Cyon ; nerf vague X parasympathique et acétylcholine ; système rénine-angiotensine-aldostérone).
- Thème 4 : Régulation de la glycémie (Constante 0,85-1,15 g/L ; glycogénogenèse hépatique et glycogénolyse ; îlots de Langerhans : cellules bêta insuline hypoglycémiante, cellules alpha glucagon hyperglycémiant ; diabètes insulino-dépendant et insulino-résistant).
- Thème 5 : Immunologie (CMH I et II ; phagocytose en 4 étapes ; RIMH par LB et plasmocytes ; RIMC par LT8 et LTc à perforine ; cycle du VIH GP120-CD4 et transcriptase inverse ; vaccination vs sérothérapie).
- Thème 6 : Reproduction chez les mammifères (Spermatogenèse dans les tubes séminifères en 74 jours ; ovogenèse avec folliculogenèse ; cycle de 28 jours avec pic de LH au 14e jour ; fécondation, réaction acrosomique et caryogamie ; placenta et HCG ; contraception).
- Thème 7 : Hérédité humaine (Analyse de pedigrees ; daltonisme et hémophilie liés à l'X ; groupes ABO et Rhésus ; trisomie 21, syndrome de Turner 44A+X, syndrome de Klinefelter 44A+XXY).`,
    sampleInBookletSubjects: [
      'Thème 1 : Organisation de l\'encéphale et de la moelle épinière des mammifères (p. 3-7)',
      'Thème 2 : Rôle du système nerveux dans les réflexes et mouvements volontaires (p. 8-21)',
      'Thème 3 : Automatisme cardiaque, révolution cardiaque et régulation de la tension artérielle (p. 22-39)',
      'Thème 4 : La régulation de la glycémie et les dysfonctionnements diabétiques (p. 40-47)',
      'Thème 5 : Le système immunitaire, phagocytose, RIMH, RIMC et infection par le VIH (p. 47-58)',
      'Thème 6 : Organisation des appareils génitaux, gamétogenèse, fécondation et régulation hormonale (p. 58-84)',
      'Thème 7 : Hérédité humaine, méthodologie des pedigrees et anomalies chromosomiques (p. 85-89)'
    ],
    sampleNewUntreatedSubjects: [
      'Sujet type : Comparaison des effets de la stimulation du nerf pneumogastrique et du nerf sympathique sur le rythme cardiaque',
      'Sujet type : Mécanisme d\'action de la pilule combinée sur le complexe hypothalamo-hypophysaire',
      'Sujet type : Analyse d\'un arbre généalogique de transmission de l\'hémophilie chez les descendants de la reine Victoria'
    ]
  },
  {
    id: 'genetique-exercices-corriges-partie2',
    title: 'Exercices de Génétique Classique – Partie II : Arbres Généalogiques & Corrigés Méthodiques',
    author: 'Chaire Pédagogique de Génétique & SVT',
    roleOrAffiliation: 'Recueil d\'Exercices de Génétique Humaine Formelle (Niveau Lycée & Baccalauréat)',
    countryOrigin: 'Espace Francophone / Programmes Officiels Bac SVT',
    discipline: 'svt',
    disciplineLabel: 'SVT Génétique Humaine — Résolution Méthodique de Pedigrees & Calculs de Risque',
    badgeColor: 'violet',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['S1', 'S2', 'C', 'D', 'L2'],
    publicationYear: 2022,
    coverDescription: 'Recueil d\'exercices résolus et rigoureusement commentés d\'analyse généalogique humaine (Partie II). Traite les grands modèles de transmission génétique : 1. Idiotie phénylpyruvique (autosomal récessif, calcul de risque pour mariage consanguin de cousins germains), 2. Transmission des cheveux roux (autosomal récessif), 3. Surdi-mutité (autosomal récessif avec intégration de la fréquence allélique en population 1/30), 4. Chorée de Huntington (autosomal dominant à pénétrance tardive vers 40 ans, démonstration probabiliste et risque de 50%), 5. Maladie de Kennedy (récessif lié au chromosome X, prédominance masculine, détermination des mères porteuses), 6. Syndrome MELAS (hérédité mitochondriale à transmission maternelle stricte).',
    overview: `Recueil spécialisé de référence pour la maîtrise de la génétique formelle humaine et l'analyse critique des pedigrees complexes au Baccalauréat :
- ANALYSE DÉTAILLÉE DES 6 EXERCICES RÉSOLUS :
  • Exercice 1 : L'idiotie phénylpyruvique (Phénylcétonurie)
    - Dominance / Récessivité : Allèle responsable récessif car la fille atteinte n°4 est issue de parents sains (n°1 et 2) qui possédaient l'allèle à l'état masqué. Même justification possible pour les couples (9,10,16) ou (11,12,18,19,20).
    - Localisation chromosomique : Le gène est autosomal. Si le gène était sur le chromosome X, la fille n°4 ($X^m X^m$) aurait obligatoirement hérité d'un allèle $X^m$ de son père n°2 qui aurait été malade ($X^m Y$) ; or le père 2 est sain. De plus, son fils n°11 aurait obligatoirement hérité de son $X^m$ et serait malade ; or il est sain.
    - Conseil génétique et consanguinité : Les individus 11 et 12 sont cousins germains. Recommandation d'un test génétique de dépistage des hétérozygotes avant procréation.
    - Identification rigoureuse des hétérozygotes : Parents d'enfants malades (1, 2, 9, 10, 11, 12) et enfants sains de parents malades (8, 9, 11).
  • Exercice 2 : Caractère « cheveux roux »
    - Démonstration de la récessivité : Deux parents à cheveux d'autre couleur (n°7 et 8) donnent une fille rousse n°14. L'allèle roux est donc récessif.
    - Localisation autosomale : Si l'allèle était sur X, le père n°8 de la fille rousse n°14 ($X^r X^r$) aurait obligatoirement été roux ($X^r Y$) ; or il ne l'est pas. Autre preuve : le garçon n°13 n'est pas roux alors que sa mère n°5 est rousse ($X^r X^r$ devrait donner 100% de fils roux).
    - Statut des hétérozygotes : Parents non-roux d'enfants roux (1, 3, 7, 8) et enfants non-roux de parents roux (7, 9, 11, 12, 13).
  • Exercice 3 : La surdi-mutité et calcul de risque en population générale
    - Mode de transmission : Autosomal récessif (parents sains 3 et 4 donnant enfants sourds-muets 7 et 8 ; père 4 sain ayant une fille malade 8 exclut la liaison à X).
    - Condition pour l'enfant de Mme X (n°11, fille d'un père sourd-muet) : Elle est obligatoirement conductrice hétérozygote. Son enfant ne risque d'être atteint que si le père n°10 est également hétérozygote.
    - Calcul de probabilité combinée : Fréquence des porteurs dans la population générale européenne = $1/30$. Risque que l'enfant naisse sourd-muet $= P(\text{père porteur}) \times P(\text{transmission de deux allèles mutants}) = \frac{1}{30} \times \frac{1}{4} = \frac{1}{120}$ (soit environ 0,83 %).
  • Exercice 4 : La maladie de Huntington (transmission dominante à début tardif)
    - Démonstration de la dominance : Tous les individus malades ont au moins un parent malade. Si la maladie était récessive, chaque conjoint sain étranger à la famille devrait être hétérozygote ; avec une fréquence de porteurs de $1/30$, la probabilité que 4 conjoints successifs (1, 5, 10, 11) soient tous hétérozygotes serait de $(1/30)^4 = 1 / 810\,000$, ce qui est statistiquement impossible. La transmission est donc dominante.
    - Localisation autosomale : Un père malade dominant sur X transmettrait systématiquement la maladie à 100% de ses filles. Or le père malade n°6 a une fille saine n°13.
    - Évaluation du risque pré-symptomatique pour M. Y (n°21, 25 ans) : Croisement mère saine 16 ($nn$) $\times$ père malade hétérozygote 17 ($nM$) $\rightarrow$ risque de 50 % (1 chance sur 2) d'exprimer la chorée d'ici 15 ans. Recommandation d'une consultation de conseil génétique et d'un test prédictif.
  • Exercice 5 : La maladie de Kennedy (amyotrophie récessive liée au chromosome X)
    - Mode récessif lié à X : Prédominance écrasante masculine (5 hommes malades pour 1 seule femme) ; transmission en diagonale par les mères conductrices asymptomatiques ($X^N X^m$) ; respect absolu de toutes les contraintes de l'hérédité liée à l'X.
    - Génotypes précis : Hommes sains $X^N Y$ (1, 4, 6, 8, 11, 14, 22) ; femmes conductrices obligatoires $X^N X^m$ (filles de pères malades 16 et 20, mères d'enfants malades 2, 3, 9, 12, 16). Statut indéterminé de 18 (1 chance sur 2 d'être conductrice).
  • Exercice 6 : Le syndrome MELAS (Hérédité mitochondriale cytoplasmique)
    - Caractéristique clé : Transmission exclusivement maternelle. Tous les enfants (filles et garçons) d'une mère atteinte héritent de l'anomalie mitochondriale par le cytoplasme de l'ovocyte, tandis qu'aucun enfant d'un père atteint n'est malade (les spermatozoïdes ne transmettent pas leurs mitochondries au zygote).`,
    keyConcepts: [
      'Méthode canonique de déduction de dominance/récessivité dans un arbre généalogique',
      'Critères d\'exclusion rigoureuse d\'une liaison au chromosome Y et au chromosome X',
      'Calcul des probabilités de descendance en croisement intrafamilial et avec la population générale',
      'Maladies autosomales récessives (Phénylcétonurie, Surdi-mutité, Albinisme)',
      'Maladies autosomales dominantes à révélation tardive (Chorée de Huntington)',
      'Maladies récessives liées au chromosome X (Maladie de Kennedy, Daltonisme, Hémophilie)',
      'Hérédité non mendélienne : transmission mitochondriale maternelle exclusive (Syndrome MELAS)'
    ],
    methodologicalHighlights: [
      {
        name: 'Règle Fondamentale d\'Élimination de la Liaison à l\'X Récessive',
        description: 'Pour un caractère récessif : 1. Si une fille est malade, son père DOIT être malade (car il lui donne obligatoirement un chromosome X). Si le père est sain, le gène n\'est PAS sur X ; 2. Si une mère est malade, TOUS ses fils DOIVENT être malades. Si un fils est sain, le gène n\'est PAS sur X.',
        keyRules: [
          'Toujours vérifier le génotype du père de chaque fille malade.',
          'Toujours vérifier le phénotype des fils de chaque mère malade.'
        ]
      },
      {
        name: 'Règle Fondamentale d\'Élimination de la Liaison à l\'X Dominante',
        description: 'Pour un caractère dominant : Un homme malade (XMY) transmet son unique chromosome X à 100% de ses filles. Si un homme malade a ne serait-ce qu\'une seule fille saine, le gène N\'EST PAS sur X.',
        keyRules: [
          'Exemple canonique Huntington : père n°6 malade ayant une fille saine n°13 prouve que le gène est autosomal.'
        ]
      },
      {
        name: 'Calcul de Risque Génétique avec Fréquence de Population',
        description: 'Multiplier la probabilité que le conjoint soit hétérozygote porteur sain par la probabilité mendélienne de croisement (généralement 1/4 pour deux allèles récessifs).',
        keyRules: [
          'Formule : Risque global = P(Parent 1 porteur) x P(Parent 2 porteur) x 1/4.',
          'Exemple surdi-mutité : 1 x (1/30) x (1/4) = 1/120.'
        ]
      }
    ],
    coreKnowledgeExcerpt: `Banque de cas résolus en Génétique Humaine (Partie II) :
- Cas 1 (Phénylcétonurie) : Récessif car parents 1-2 sains avec fille malade 4 ; Autosomal car père 2 sain ; Cousins germains 11 et 12 hétérozygotes.
- Cas 2 (Cheveux roux) : Récessif car parents 7-8 sains avec fille rousse 14 ; Autosomal car père 8 non roux et fils 13 non roux avec mère 5 rousse.
- Cas 3 (Surdi-mutité) : Autosomal récessif ; Risque pour l'enfant de Mme X avec un individu de la population européenne = 1 x (1/30) x (1/4) = 1/120.
- Cas 4 (Huntington) : Autosomal dominant (probabilité de 4 conjoints hétérozygotes 1/810 000 rejetée) ; Non lié à X car père malade 6 a une fille saine 13 ; Risque 50% pour M. Y à 25 ans.
- Cas 5 (Maladie de Kennedy) : Récessif lié à X ; Prédominance masculine nette ; Filles de pères malades et mères de fils malades obligatoirement conductrices.
- Cas 6 (Syndrome MELAS) : Transmission mitochondriale cytoplasmique maternelle stricte (100% de transmission par la mère, 0% par le père).`,
    sampleInBookletSubjects: [
      'Exercice 1 : Arbre généalogique de l\'idiotie phénylpyruvique et consanguinité (p. 1)',
      'Exercice 2 : Transmission du caractère « cheveux roux » et statut des porteurs (p. 2)',
      'Exercice 3 : Surdi-mutité et calcul de risque en population européenne 1/120 (p. 3)',
      'Exercice 4 : Chorée de Huntington, démonstration de dominance et risque de 50% (p. 4)',
      'Exercice 5 : Maladie de Kennedy, liaison au chromosome X et mères vectrices (p. 5)',
      'Exercice 6 : Syndrome MELAS et transmission mitochondriale maternelle (p. 6)'
    ],
    sampleNewUntreatedSubjects: [
      'Exercice d\'application : Transmission de l\'achondroplasie (mutation autosomale dominante létale à l\'état homozygote)',
      'Exercice d\'application : Myopathie de Duchenne et calcul bayésien du statut de conductrice pour une sœur de garçon atteint',
      'Exercice d\'application : Mucoviscidose et calcul de probabilité d\'atteinte avec dépistage moléculaire de la mutation delta F508'
    ]
  },
  {
    id: 'fascicule-svt-crac-gueye-ts2',
    title: 'Fascicule SVT TS2 — Les CRAC (Collection M. GUEYE)',
    author: 'M. GUEYE, Professeur de SVT (Collection Les CRAC, Sénégal)',
    roleOrAffiliation: 'Professeur de SVT, Collection Les CRAC (Lycées du Sénégal)',
    countryOrigin: 'Sénégal (Programmes Officiels SVT TS2)',
    discipline: 'svt',
    disciplineLabel: 'SVT TS2 — Maîtrise des Connaissances, Synthèses Types & Schémas Cotés',
    badgeColor: 'blue',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['S1', 'S2', 'C', 'D'],
    publicationYear: 2022,
    coverDescription: 'Recueil de 13 sujets corrigés intégraux de maîtrise des connaissances (Partie I du Baccalauréat) avec méthodologie pas à pas, schémas annotés cotés et 2 bonus d\'excellence rédigés par M. Gueye. Couvre les propriétés du tissu nerveux, potentiel de repos et d\'action, synapses à acétylcholine et curare, propagation et vitesse de l\'influx, régulation de la pression artérielle et système rénine-angiotensine-aldostérone, réponse immunitaire spécifique humorale et cellulaire, rôle des macrophages et anticorps, folliculogenèse et cycle ovarien/utérin, milieu intérieur et néphron, régulation du pH et acidose, régénération de l\'ATP et activité musculaire, intégration synaptique et dégénérescence wallérienne.',
    keyConcepts: [
      'Propriétés bioélectriques du tissu nerveux et maintien actif du potentiel de repos (-70 mV)',
      'Transmission neuromusculaire, exocytose d\'acétylcholine et pharmacologie synaptique (curare)',
      'Propagation de l\'influx nerveux (courants locaux vs conduction saltatoire sur fibre myélinisée)',
      'Régulation neuro-hormonale de la pression artérielle et boucle rénine-angiotensine-aldostérone',
      'Coopération cellulaire immunitaire (macrophages CPA, LT4 auxiliaires, LT8 cytotoxiques et LB)',
      'Structure, diversité et rôles des anticorps sériques et membranaires',
      'Folliculogenèse, pic œstrogénique pré-ovulatoire, décharge ovulante de LH et corps jaune',
      'Milieu intérieur, filtration/réabsorption néphronique et correction de l\'acidose métabolique',
      'Énergétique musculaire, voies rapides (phosphocréatine) et lentes (respiration aérobie) de l\'ATP',
      'Intégration neuronale au cône axonique (sommations temporelle et spatiale des potentiels postsynaptiques)'
    ],
    methodologicalHighlights: [
      {
        name: 'Méthodologie de la Maîtrise des Connaissances (Partie I du Bac)',
        description: '1. Lecture et délimitation du sujet (mots-clés, verbes d\'action) ; 2. Préparation au brouillon (sélection rigoureuse des acquis sans récitation mécanique) ; 3. Rédaction structurée avec introduction (contexte, définitions, problématique, plan annoncé), développement en parties apparentes titrées avec paragraphes aérés, schémas grands formats légendés et conclusion répondant au problème sans résumé répétitif.',
        keyRules: [
          'Définir les termes du sujet et poser la problématique dans l\'introduction.',
          'Structurer le devoir avec des parties et sous-parties explicites.',
          'Fournir des schémas grands formats fonctionnels avec titre et légende soignée.'
        ]
      },
      {
        name: 'Règles d\'Excellence Graphique en SVT',
        description: 'Chaque schéma fonctionnel ou structural doit obligatoirement comporter : un titre complet souligné, une échelle si nécessaire, des flèches d\'orientation des flux, une légende complète et un code couleur soigné.',
        keyRules: [
          'Le titre du schéma doit être complet et souligné.',
          'Indiquer clairement le sens de propagation ou d\'écoulement par des flèches.',
          'Associer des légendes scientifiques précises sans abréviations non explicitées.'
        ]
      },
      {
        name: 'Origine et Maintien du Potentiel de Repos (Sujet 1)',
        description: 'Démontrer l\'inégalité de répartition des ions Na+ et K+ de part et d\'autre de l\'axolemme (plus perméable à K+ qu\'à Na+ par dialyse passive) et son maintien actif par la pompe Na+/K+ ATPase dépendante de l\'ATP (sensible aux poisons respiratoires DNP et cyanure).',
        keyRules: [
          'La pompe Na+/K+ ATPase expulse 3 Na+ et fait entrer 2 K+ par tour de rotation à contre-courant du gradient.',
          'Le blocage de la respiration cellulaire par le DNP annule l\'efflux actif de Na+.'
        ]
      },
      {
        name: 'Fonctionnement Synaptique & Neurotransmetteurs (Sujets 2 & Bonus 1)',
        description: 'Décrire la séquence complète : arrivée du PA -> entrée des ions Ca2+ voltage-dépendants -> exocytose de l\'acétylcholine -> fixation sur les récepteurs post-synaptiques (canaux Na+ chimio-dépendants) -> PPSE dépolarisant -> hydrolyse par l\'acétylcholinestérase et recapture de la choline. Expliquer le mode d\'action du curare qui occupe compétitivement les récepteurs de l\'appareil sous-neural.',
        keyRules: [
          'Le curare mime l\'acétylcholine et bloque les récepteurs nicotiniques sans ouvrir les canaux Na+, entraînant la paralysie.',
          'L\'intégration neuronale au cône axonique réalise la sommation spatiale et temporelle des PPSE et PPSI.'
        ]
      },
      {
        name: 'Régulation de la Pression Artérielle (Sujet 4)',
        description: 'Exposer les trois facteurs cardiovasculaires majeurs (débit cardiaque, vasomotricité, volémie) et le mécanisme hormonal de correction d\'une hypotension par le système rénine-angiotensine-aldostérone.',
        keyRules: [
          'La rénine rénale convertit l\'angiotensinogène hépatique en angiotensine active.',
          'L\'angiotensine provoque la vasoconstriction artériolaire directe et stimule l\'aldostérone corticosurrénalienne (rétention de Na+ et d\'eau).'
        ]
      },
      {
        name: 'Immunologie Spécifique & Coopération Cellulaire (Sujets 5, 6 & 7)',
        description: 'Décrire l\'origine monocytaire des macrophages médullaires, leur rôle de CPA avec CMH I (vers LT8) et CMH II (vers LT4), la libération d\'IL1, l\'amplification clonale sous IL2, la différenciation en plasmocytes et le triple rôle des anticorps sériques (neutralisation, opsonisation pour phagocytose par fraction Fc, activation de la lyse par le complément).',
        keyRules: [
          'Les anticorps membranaires des LB assurent la reconnaissance directe de l\'épitope.',
          'Les anticorps circulants ne détruisent pas directement l\'antigène : ils le neutralisent et le préparent à la phagocytose (opsonisation) ou à la lyse par le complément.'
        ]
      },
      {
        name: 'Folliculogenèse, Ovulation & Cycle Ovarien (Sujets 8 & 9)',
        description: 'Détailler l\'évolution du follicule primordial (ovocyte I bloqué en prophase I) au follicule mûr de De Graaf (reprise de méiose en ovocyte II + GP1), le pic d\'œstrogènes préovulatoire déclenchant la décharge ovulante de LH à J14, et la transformation en corps jaune lutéal sécrétant progestérone et œstrogènes.',
        keyRules: [
          'Le pic de LH (décharge ovulante) est provoqué par le rétrocontrôle positif d\'un fort taux d\'œstrogènes (> 200 pg/mL pendant 48h).',
          'En cas de fécondation, la sécrétion d\'hCG par le trophoblaste maintient le corps jaune gestatif et empêche l\'apparition des menstrues.'
        ]
      },
      {
        name: 'Milieu Intérieur & Correction de l\'Acidose (Sujets 10 & 11)',
        description: 'Expliquer les trois rôles du néphron (filtration glomérulaire, réabsorption tubulaire du glucose et des ions, sécrétion tubulaire) et les trois mécanismes de défense contre l\'acidose : systèmes tampons chimiques H2CO3/HCO3-, excrétion rénale de H+ avec réabsorption de HCO3-, et élimination pulmonaire de CO2 par hyperventilation.',
        keyRules: [
          'Le rein régule le pH à long terme en éliminant les protons H+ et en épargnant les bicarbonates.',
          'L\'hyperventilation respiratoire abaisse rapidement la concentration plasmatique en acide carbonique en rejetant le CO2.'
        ]
      },
      {
        name: 'Énergétique Musculaire & Voies de Restauration de l\'ATP (Sujets 12 & 13)',
        description: 'Distinguer les voies rapides directes (phosphocréatine + ADP -> ATP + créatine via créatine-kinase ; 2 ADP -> ATP + AMP via myokinase) et les voies lentes indirectes (glycolyse anaérobie alactique, fermentation lactique anaérobie et respiration cellulaire aérobie avec 36 ATP). Distinguer chaleur initiale (contraction/relâchement) et chaleur retardée.',
        keyRules: [
          'L\'ATP est la source immédiate et exclusive de l\'énergie mécanique de glissement des têtes de myosine.',
          'La chaleur retardée provient exclusivement des oxydations respiratoires mitochondriales.'
        ]
      }
    ],
    coreKnowledgeExcerpt: `Fascicule SVT TS2 — Les CRAC (Collection M. GUEYE) :
- Sujet 1 : Potentiel de repos (PR = -70 mV). Mise en évidence par microélectrode endocavitaire. Origine : inégale répartition des ions (Na+ externe > Na+ interne ; K+ interne > K+ externe), perméabilité différentielle de l'axolemme. Maintien : transport actif par la pompe Na+/K+ ATPase (3 Na+ expulsés pour 2 K+ entrés) inhibée par le DNP.
- Sujet 2 : Transmission neuromusculaire. Bouton synaptique présynaptique, influx de Ca2+, exocytose d'acétylcholine, récepteurs canaux chimio-dépendants à Na+ sur l'appareil sous-neural, dépolarisation (potentiel de plaque motrice). Perturbation par le curare : blocage compétitif des récepteurs à acétylcholine -> paralysie motrice flasque.
- Sujet 3 : Propagation du message nerveux. Courants locaux de proche en proche sur fibre amyélinique ; conduction saltatoire de nœud de Ranvier en nœud de Ranvier sur fibre myélinisée (plus rapide). Facteurs de vitesse : diamètre de la fibre, présence de myéline, température.
- Sujet 4 : Régulation de la pression artérielle. Facteurs : débit cardiaque, résistance périphérique vasomotrice, volémie. Système RAA : baisse de PA -> rénine rénale -> conversion de l'angiotensinogène en angiotensine -> vasoconstriction et libération d'aldostérone par la corticosurrénale -> rétention de Na+ et d'eau -> restauration de la volémie et de la PA.
- Sujets 5 & 6 : Réponse immunitaire spécifique. Origine des macrophages (monocytes médullaires). Rôle de CPA avec CMH I et II. Coopération cellulaire : CPA présente l'épitope aux LT4 et LT8 et sécrète l'IL1 ; les LT4 activés sécrètent l'IL2 stimulant la prolifération et différenciation des LB en plasmocytes et des LT8 en LTc. Élimination virale par anticorps circulants (complexes immuns, complément, opsonisation).
- Sujet 7 : Rôle des anticorps. Anticorps membranaires (récepteurs BCR des LB) vs anticorps circulants (sécrétés par plasmocytes : neutralisation des antigènes, opsonisation des phagocytes, activation de la cytolyse par le complément).
- Sujets 8 & 9 : Folliculogenèse et cycle sexuel. Du follicule primordial au corps jaune gravidique. Follicule mûr : granulosa, thèques interne et externe, antrum à liquide folliculaire, ovocyte II bloqué en métaphase II avec GP1. Décharge ovulante de LH consécutive au pic d'œstrogènes à J12-J14. Lutéinisation en corps jaune sécrétant progestérone. Rôle de l'hCG embryonnaire empêchant la régression du corps jaune.
- Sujets 10 & 11 : Milieu intérieur & Homéostasie. Rôle du néphron (filtration glomérulaire, réabsorption tubulaire active du glucose avec seuil 1,8 g/L, réabsorption d'eau et d'ions Na+, sécrétion tubulaire d'acide hippurique et NH4+). Correction de l'acidose (pH < 7,35) par les tampons H2CO3/HCO3-, l'excrétion rénale de H+ et l'hyperventilation pulmonaire chassant le CO2.
- Sujets 12 & 13 : Activité musculaire et régénération de l'ATP. Voies rapides directes (phosphocréatine et myokinase). Voies lentes (glycolyse sarcoplasmique, fermentation lactique anaérobie, respiration aérobie mitochondriale produisant 36 ATP). Chaleurs de contraction, de relâchement et chaleur retardée de respiration.
- Bonus 1 & 2 : Intégration neuronale (sommations temporelle et spatiale au cône axonique) et structure médullaire avec expérience de dégénérescence wallérienne prouvant la continuité anatomique du neurone.`,
    sampleInBookletSubjects: [
      'Sujet 1 : Propriétés du tissu nerveux — Mise en évidence, origine et maintien du potentiel de repos (p. 4, 7-8)',
      'Sujet 2 : Synapses — Transmission neuromusculaire à acétylcholine et perturbation par le curare (p. 4, 9-10)',
      'Sujet 3 : Réflexe inné — Mécanisme de propagation et facteurs de variation de la vitesse de l\'influx (p. 4, 11-12)',
      'Sujet 4 : Régulation de la pression artérielle — Facteurs de variation et système rénine-angiotensine-aldostérone (p. 4, 13-14)',
      'Sujet 5 : Immunologie — Origine et rôles des macrophages dans le maintien de l\'intégrité de l\'organisme (p. 4, 15-16)',
      'Sujet 6 : Réponse immunitaire spécifique — Apparition des anticorps circulants et élimination du virus (p. 4, 17-18)',
      'Sujet 7 : Rôle des anticorps membranaires et sériques au cours de la réponse humorale (p. 5, 18)',
      'Sujet 8 : Folliculogenèse — Activité fonctionnelle du follicule mûr, mécanisme de l\'ovulation et corps jaune (p. 5, 19-20)',
      'Sujet 9 : « Du follicule primordial au corps jaune gravidique, une évolution longue, lente et aléatoire » (p. 5, 21-22)',
      'Sujet 10 : Milieu intérieur — Rôles du néphron dans les étapes de formation de l\'urine définitive (p. 5, 22-23)',
      'Sujet 11 : Régulation du pH — Mise en place d\'une acidose et correction par tampons, reins et poumons (p. 5, 23-25)',
      'Sujet 12 : Activité du muscle squelettique — Voies lentes de régénération de l\'ATP et formes de chaleur (p. 6, 26-27)',
      'Sujet 13 : Activité du muscle squelettique — Voies métaboliques directes et indirectes de l\'ATP (p. 6, 28-29)',
      'Bonus 1 : Transmission synaptique et intégration des PPSE et PPSI au niveau du cône axonique (p. 30)',
      'Bonus 2 : Structure de la moelle épinière et expérience historique de dégénérescence wallérienne (p. 31-33)'
    ],
    sampleNewUntreatedSubjects: [
      'Sujet d\'application Bac TS2 : « Montrez comment l\'organisme corrige une hyperthermie lors d\'un effort physique prolongé en milieu chaud. »',
      'Sujet d\'application Bac TS2 : « Expliquez comment la pilule combinée œstro-progestative bloque l\'ovulation par rétrocontrôle négatif. »',
      'Sujet d\'application Bac TS2 : « Décrivez la coopération cellulaire nécessaire à la genèse d\'une réponse immunitaire à médiation cellulaire cytotoxique (RIMC). »'
    ]
  },
  {
    id: 'fascicule-svt-exercices-diedhiou-ts',
    title: 'Fascicule d\'exercices SVT Terminales S — Abdoulaye DIEDHIOU',
    author: 'Abdoulaye DIEDHIOU, Professeur de SVT (L.T.P_F.X.NDIONE de Thiès, Sénégal)',
    roleOrAffiliation: 'Professeur de SVT au L.T.P. François-Xavier Ndione de Thiès (fomesoutra.com)',
    countryOrigin: 'Sénégal / fomesoutra.com (Programmes Officiels SVT S1/S2)',
    discipline: 'svt',
    disciplineLabel: 'SVT Terminales S — Recueil Intégral d\'Exercices & Corrigés des 12 Thèmes',
    badgeColor: 'emerald',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['S1', 'S2', 'C', 'D'],
    publicationYear: 2023,
    coverDescription: 'Somme pédagogique de 234 pages structurée en 12 thèmes majeurs du programme officiel de SVT des classes de Terminale S (S1, S2) : Organisation du système nerveux cérébro-spinal ; Tissu nerveux et propriétés bioélectriques ; Comportement moteur et réflexes innés/conditionnels ; Muscle strié squelettique et énergétique de la contraction ; Activité cardiaque et régulation de la pression artérielle ; Milieu intérieur et équilibre hydrominéral/pH ; Régulation de la glycémie et diabètes ; Immunologie fondamentale et appliquée (VIH, greffes) ; Reproduction chez les mammifères (cycles, contraception, procréation) ; Reproduction chez les spermaphytes (fleurs, pollinisation, double fécondation) ; Génétique classique formelle (monohybridisme, dihybridisme, liaison factorielle) ; Hérédité humaine (analyse de pedigrees, électrophorèse d\'ADN, diagnostics prénataux et anomalies chromosomiques). Chaque thème comprend énoncés complets, QCM de vérification et corrigés modèles rigoureux.',
    keyConcepts: [
      'Organisation du système nerveux cérébro-spinal et propriétés bioélectriques des axones',
      'Comportement moteur, réflexes innés myotatiques et réflexes conditionnels pavloviens',
      'Énergétique de la contraction musculaire, ultrastructure du sarcomère et métabolisme de l\'ATP',
      'Activité cardiaque, tissu nodal et boucle baroréflexe de régulation de la pression artérielle',
      'Milieu intérieur, régulation hydro-minérale et équilibre acido-basique néphronique',
      'Régulation de la glycémie, cellules des îlots de Langerhans et physiopathologie des diabètes',
      'Immunologie fondamentale et appliquée, double reconnaissance CMH et pathogenèse du VIH',
      'Reproduction des mammifères, régulation neuro-hormonale des cycles et procréation médicalement assistée',
      'Reproduction chez les spermaphytes, sac embryonnaire et double fécondation des angiospermes',
      'Génétique classique formelle, brassages méiotiques, crossing-over et cartes génétiques factorielles',
      'Hérédité humaine, analyse de pedigrees, électrophorèses d\'ADN et anomalies caryotypiques'
    ],
    methodologicalHighlights: [
      {
        name: 'Méthodologie Officielle de l\'Épreuve de SVT au Baccalauréat',
        description: 'Deux compétences évaluées : Partie I - Restitution organisée des connaissances (plan apparent, illustrations indispensables) ; Partie II - Compétences méthodologiques d\'analyse de documents (Protocole rigoureux : Présenter le document -> Décrire les résultats chiffrés -> Interpréter biologiquement avec les acquis -> Conclure/Bilan).',
        keyRules: [
          'Partie I : Respect strict du triptyque Introduction - Développement articulé - Conclusion.',
          'Partie II : Ne jamais paraphraser un document sans interpréter biologiquement.',
          'Citer systématiquement les valeurs chiffrées avec leurs unités.'
        ]
      },
      {
        name: 'Guide d\'Analyse des Arbres Généalogiques & Électrophorèses d\'ADN',
        description: 'Protocole en 3 étapes chronologiques strictes : 1. Déterminer la dominance ou récessivité de l\'allèle morbide (parents sains donnant un enfant malade = récessif ; malade à chaque génération = dominant) ; 2. Discuter l\'hypothèse liée à Y (présence de femmes malades ou père sain ayant un fils malade l\'invalide) puis liée à X (père sain avec fille malade récessive élimine X ; père malade avec fille saine dominante élimine X) ; 3. Conclure au mode autosomal ou gonosomal et confronter aux bandes d\'électrophorèse.',
        keyRules: [
          'Rechercher en premier les couples de parents sains ayant au moins un enfant atteint pour prouver la récessivité.',
          'Pour éliminer la liaison à l\'X récessive : identifier un père sain ayant une fille atteinte.',
          'Pour éliminer la liaison à l\'X dominante : identifier un père atteint ayant une fille saine.'
        ]
      },
      {
        name: 'Tableau Déductif des Proportions en Génétique Formelle',
        description: 'Monohybridisme : 3/4-1/4 (dominance F2) ; 1/2-1/4-1/4 (codominance F2) ; 2/3-1/3 (allèle létal). Dihybridisme : 9/16-3/16-3/16-1/16 (gènes indépendants F2) ; 1/4-1/4-1/4-1/4 (test-cross gènes indépendants) ; pourcentages inégaux parentaux > recombinés (gènes liés avec crossing-over).',
        keyRules: [
          'Toujours comparer les effectifs observés aux effectifs théoriques.',
          'Identifier les types parentaux et recombinés pour calculer la distance génétique en centimorgans.',
          'Chez la drosophile mâle, absence totale de crossing-over.'
        ]
      },
      {
        name: 'Tissu Nerveux & Pharmacologie Synaptique (Thème 2)',
        description: 'Étude des canaux CVD à Na+ (s\'ouvrant à -50 mV lors de la dépolarisation) et CVD à K+ (s\'ouvrant à +30 mV lors de la repolarisation). Analyse expérimentale des neurotoxines : le venin de scorpion bloque la fermeture des CVD à Na+ (maintien de la dépolarisation à +25 mV) ; le curare bloque les récepteurs de l\'acétylcholine ; le GABA entraîne une entrée de Cl- et un PPSI (hyperpolarisation) renforcé par les benzodiazépines (Valium) et inhibé par la picrotoxine.',
        keyRules: [
          'La toxine scorpionique s\'oppose à l\'inactivation des CVD à Na+, empêchant toute repolarisation.',
          'Les benzodiazépines potentialisent l\'action inhibitrice du GABA sur les motoneurones en augmentant l\'amplitude de l\'hyperpolarisation (-140 mV).'
        ]
      },
      {
        name: 'Comportement Moteur & Réflexe Myotatique (Thème 3)',
        description: 'Analyse du réflexe conditionnel (salivation pavlovienne, évitement skinnérien chez le rat avec extinction par non-entretien). Réflexe myotatique monosynaptique excitateur du muscle étiré et polysynaptique inhibiteur du muscle antagoniste par interneurone inhibiteur (innervation réciproque).',
        keyRules: [
          'Le fuseau neuromusculaire est le transducteur sensoriel qui convertit l\'énergie mécanique en train de PA en modulation de fréquence.',
          'La différence de latence de 0,5 ms entre motoneurone agoniste et antagoniste correspond exactement au délai synaptique de l\'interneurone inhibiteur.'
        ]
      },
      {
        name: 'Muscle Squelettique & Métabolisme Énergétique (Thème 4)',
        description: 'Ultrastructure du sarcomère entre deux stries Z. Glissement des myofilaments d\'actine sur la myosine déclenché par l\'efflux de Ca2+ du réticulum endoplasmique et l\'hydrolyse d\'ATP. Expériences de blocage métabolique : distinction entre phosphocréatine (voie anaérobie alactique rapide) et glycolyse (voie anaérobie lactique). Effets de l\'EPO et de l\'entraînement en altitude sur l\'hématocrite et la performance aérobie.',
        keyRules: [
          'Au cours de la contraction : raccourcissement du sarcomère, réduction des disques clairs I et de la zone H, tandis que la bande sombre A reste invariable.',
          'L\'entraînement en altitude accroît naturellement l\'érythropoïétine, augmentant le transport d\'O2 sans dopage exogène.'
        ]
      },
      {
        name: 'Activité Cardiaque, Baroréflexe & Volémie (Thème 5)',
        description: 'Tissu nodal (automatisme myogène intracardiaque). Baroréflexe : augmentation de PA -> étirement des barorécepteurs carotidiens/aortiques -> nerfs afférents de Hering et Cyon -> bulbe cardiomodérateur -> nerf pneumogastrique X efférent (acétylcholine) -> bradycardie correctrice. En cas d\'hypotension : stimulation sympathique (noradrénaline, adrénaline médullosurrénale), système rénine-angiotensine-aldostérone et vasopressine ADH.',
        keyRules: [
          'La section des nerfs de Hering ou Cyon supprime le frein inhibiteur et provoque une tachycardie et une hypertension immédiate.',
          'L\'ADH hypothalamique diminue la diurèse en augmentant la perméabilité des tubes collecteurs de Bellini à l\'eau.'
        ]
      },
      {
        name: 'Milieu Intérieur & Régulation de l\'Équilibre Acido-Basique (Thème 6)',
        description: 'Le néphron comme unité fonctionnelle d\'ultrafiltration, réabsorption sélective (glucose à seuil 1,8 g/L) et sécrétion. Maintien du pH plasmatique à 7,4 par les tampons bicarbonates, la régulation respiratoire pulmonaire et la régulation rénale avec couplage réabsorption Na+ / sécrétion H+.',
        keyRules: [
          'Une insuffisance respiratoire entraîne une acidose gazeuse par rétention de CO2.',
          'Chez l\'animal surrénalectomisé, la perte d\'aldostérone induit une fuite urinaire de Na+, une baisse de volémie et une chute de PA.'
        ]
      },
      {
        name: 'Régulation de la Glycémie & Types de Diabètes (Thème 7)',
        description: 'Constante glycémique à 1 g/L. Cellules bêta des îlots de Langerhans (insuline hypoglycémiante favorisant la glycogénogenèse et la lipogenèse) vs cellules alpha (glucagon hyperglycémiant activant la glycogénolyse hépatique via la phosphorylase). Diabète de type 1 par destruction auto-immune des cellules bêta (déficit de sécrétion) vs Diabète de type 2 par anomalie des récepteurs à l\'insuline des cellules cibles.',
        keyRules: [
          'Le foie est le seul organe capable de libérer du glucose dans le sang (le glycogène musculaire ne sert qu\'au muscle).',
          'La glycosurie apparaît dès que la glycémie dépasse le seuil rénal d\'élimination de 1,8 g/L.'
        ]
      },
      {
        name: 'Immunologie, VIH & Marqueurs du Soi (Thème 8)',
        description: 'Double reconnaissance antigénique : peptide du non-soi + CMH I par le TCR des LT8 (cytolyse par perforines et granzymes) ; peptide du non-soi + CMH II par le TCR des LT4 (activation par IL1 et sécrétion d\'IL2). Étude de l\'infection par le VIH : tropisme pour les récepteurs CD4 des LT4, destruction des auxiliaires conduisant à l\'effondrement de l\'immunité humorale et cellulaire.',
        keyRules: [
          'Sans LT4, il n\'y a ni différenciation des LB en plasmocytes ni maturation des LT8 en LTc.',
          'La technique en chambre de Marbrook prouve que la coopération LT4/LB s\'effectue par des molécules solubles (interleukines) et non par contact direct obligatoire.'
        ]
      },
      {
        name: 'Reproduction des Mammifères & Rétrocontrôles (Thème 9)',
        description: 'Gamétogenèse masculine continue (Sertoli régulée par FSH, Leydig régulée par LH et testostérone exerçant un rétrocontrôle négatif sur GnRH/LH). Cycle ovarien féminin : phase folliculaire (œstrogènes à rétrocontrôle négatif puis positif déclenchant le pic ovulatoire de LH à J14), phase lutéale (progestérone et œstrogènes à rétrocontrôle négatif). Rôle de la pilule combinée bloquant l\'axe gonadotrope, rôle de l\'hCG embryonnaire maintenant le corps jaune.',
        keyRules: [
          'La chute des hormones ovariennes en fin de cycle lève l\'inhibition sur l\'hypophyse, déclenchant le cycle suivant.',
          'La parturition est déclenchée par la chute de la progestérone placentaire et la sécrétion d\'ocytocine neurohypophysaire stimulant les contractions du myomètre.'
        ]
      },
      {
        name: 'Reproduction des Spermaphytes & Double Fécondation (Thème 10)',
        description: 'Organisation florale (étamines, pistil, ovule à sac embryonnaire à 7 cellules et 8 noyaux). Pollinisation et autostérilité (pommiers, primevères). Germination du grain de pollen guidée par chimiotactisme (acide borique). Double fécondation caractéristique des Angiospermes : anthérozoïde 1 + oosphère (n+n=2n) -> zygote principal (embryon) ; anthérozoïde 2 + 2 noyaux de la cellule centrale (n+2n=3n) -> zygote accessoire (albumen triploïde).',
        keyRules: [
          'La double fécondation assure simultanément la genèse de l\'embryon diploïde (2n) et du tissu nourricier de réserve (albumen triploïde 3n).',
          'L\'acide borique présent sur le stigmate stimule la germination du grain de pollen et oriente le tube pollinique.'
        ]
      },
      {
        name: 'Génétique Classique & Cartes Factorielles (Thème 11)',
        description: 'Lois de Mendel, dihybridisme avec gènes indépendants ou liés. Brassage interchromosomique en anaphase I et intrachromosomique (crossing-over) en prophase I. Calcul de la distance génétique en centimorgans (cM) : d = (nombre de recombinés / total) x 100.',
        keyRules: [
          'Chez la drosophile mâle, il n\'y a jamais de crossing-over (linkage absolu).',
          'Un test-cross à 4 phénotypes inégaux (parentaux majoritaires, recombinés minoritaires) prouve formellement la liaison génique.'
        ]
      },
      {
        name: 'Hérédité Humaine, Pedigrees & Diagnostics Génétiques (Thème 12)',
        description: 'Résolution méthodique de cas cliniques : achondroplasie (dominante autosomique létale à l\'état homozygote), daltonisme et hémophilie (récessifs liés à X), syndrome de Di George (microdélétion 22q11), anomalies de méiose par non-disjonction chromosomique en anaphase I ou II conduisant à la trisomie 21 (47, XY, +21) ou trisomie 18 (47, XX, +18). Confrontation avec les profils d\'électrophorèse d\'ADN (sondes moléculaires).',
        keyRules: [
          'Si un homme atteint a une fille saine dans une maladie dominante, la maladie ne peut pas être liée au chromosome X.',
          'La non-disjonction d\'une paire d\'homologues en anaphase I produit 50% de gamètes n+1 et 50% de gamètes n-1.'
        ]
      }
    ],
    coreKnowledgeExcerpt: `Fascicule d'exercices SVT Terminales S — Abdoulaye DIEDHIOU (L.T.P. Thiès) :
- Thème 1 : Système nerveux cérébro-spinal (SNC = encéphale + moelle ; SNP = 12 paires de nerfs crâniens + 31 paires de nerfs rachidiens ; méninges : dure-mère, arachnoïde, pie-mère ; canal de l'épendyme et LCR ; ventricules cérébraux 1 à 4).
- Thème 2 : Tissu nerveux (Potentiel de repos = -60 à -70 mV par répartition Na+/K+ et pompe Na+/K+ ATPase ; PA monophasique avec CVD Na+ à -50 mV et CVD K+ à +30 mV ; période réfractaire absolue et relative ; propagation saltatoire sur fibres myélinisées ; action de la toxine scorpionique, curare, GABA, benzodiazépines, acide valproïque, toxine tétanique).
- Thème 3 : Comportement moteur (Réflexes conditionnels pavlovien et skinnérien, inhibition par non-renouvellement ; réflexe myotatique monosynaptique excitateur, fuseau neuromusculaire et fibre Ia, innervation réciproque par interneurone inhibiteur sur motoneurone antagoniste, mouvements volontaires corticaux).
- Thème 4 : Muscle strié squelettique (Sarcomère contractile entre deux stries Z ; glissement actine/myosine dépendant du Ca2+ libéré par le réticulum et de l'ATP ; secousse musculaire isolée et tétanos parfait par sommation temporelle ; régénération rapide par phosphocréatine et myokinase ; régénération lente par glycolyse, fermentation lactique et respiration aérobie ; effets de l'EPO et de l'entraînement).
- Thème 5 : Activité cardiaque et pression artérielle (Automatisme myogène du tissu nodal ; barorécepteurs carotidiens et aortiques ; nerfs de Hering et Cyon ; nerf pneumogastrique X cardiomodérateur et acétylcholine ; nerf orthosympathique et noradrénaline ; adaptation à l'hémorragie et au stress ; système rénine-angiotensine-aldostérone et vasopressine ADH).
- Thème 6 : Milieu intérieur (Néphron : filtration glomérulaire, réabsorption tubulaire du glucose à seuil 1,8 g/L, réabsorption d'eau régulée par l'ADH hypothalamique, équilibre sodique régulé par l'aldostérone corticosurrénalienne ; régulation du pH à 7,4 par tampons bicarbonates, reins et poumons).
- Thème 7 : Régulation de la glycémie (Homéostasie 1 g/L ; pancréas endocrine : cellules bêta sécrétant l'insuline hypoglycémiante, cellules alpha sécrétant le glucagon hyperglycémiant ; glycogénogenèse, glycogénolyse hépatique via phosphorylase ; diabète type 1 insulino-dépendant par carence en cellules bêta vs type 2 par résistance des récepteurs).
- Thème 8 : Immunologie (Soi et non-soi, molécules HLA/CMH I et II ; phagocytose non spécifique ; coopération cellulaire CPA/LT4/LT8/LB ; rôle pivot des LT4 et interleukines IL1/IL2 ; RIMC par LTc cytotoxiques et perforines ; RIMH par plasmocytes sécrétant des anticorps circulants ; cycle et immunopathologie du VIH).
- Thème 9 : Reproduction chez les mammifères (Spermatogenèse testiculaire continue régulée par l'axe GnRH-FSH/LH-testostérone ; ovogenèse et folliculogenèse cyclique avec pic ovulatoire d'œstradiol et décharge de LH à J14 ; corps jaune sécrétant progestérone ; rétrocontrôles ovariens ; pilule combinée ; parturition et lactation sous ocytocine et prolactine ; rôle de l'hCG).
- Thème 10 : Reproduction chez les spermaphytes (Fleur bisexuée, étamines, anthères, formation des microspores et grains de pollen bicellulaires ; pistil, ovule et sac embryonnaire à 8 noyaux ; pollinisation croisée et autostérilité chez pommiers et primevères ; double fécondation : zygote principal 2n formant l'embryon et zygote accessoire 3n formant l'albumen).
- Thème 11 : Génétique classique (Monohybridisme et dihybridisme chez drosophiles, maïs, pois et tomates ; test-cross ; gènes indépendants avec ségrégation mendélienne 9:3:3:1 ou 1:1:1:1 ; gènes liés avec crossing-over en prophase I chez la femelle ; calcul de distance génétique en centimorgan et cartes factorielles).
- Thème 12 : Hérédité humaine (Méthodologie d'analyse d'arbres généalogiques ; détermination de la dominance/récessivité ; localisation autosomale vs gonosomale liée à X ou Y ; confrontation avec électrophorèse d'ADN ; achondroplasie, hémophilie, daltonisme, syndrome de Di George 22q11 ; caryotypes et anomalies de méiose : non-disjonction chromosomique conduisant à la trisomie 21 ou trisomie 18).`,
    sampleInBookletSubjects: [
      'Thème 1 : Organisation du système nerveux cérébro-spinal des mammifères (Exercices 1 à 5, p. 7-12)',
      'Thème 2 : Tissu nerveux et ses propriétés bioélectriques (Exercices 1 à 17, p. 13-42)',
      'Thème 3 : Rôle du système nerveux dans le comportement moteur (Exercices 1 à 12, p. 43-61)',
      'Thème 4 : Activité du muscle strié squelettique et énergétique (Exercices 1 à 9, p. 62-77)',
      'Thème 5 : Activité cardiaque et régulation de la pression artérielle (Exercices 1 à 19, p. 78-108)',
      'Thème 6 : Milieu intérieur, fonction rénale et équilibre acido-basique (Exercices 1 à 11, p. 109-122)',
      'Thème 7 : Régulation de la glycémie et diabètes (Exercices 1 à 14, p. 123-143)',
      'Thème 8 : Immunologie, défenses de l\'organisme et infection VIH (Exercices 1 à 14, p. 144-164)',
      'Thème 9 : Reproduction chez les mammifères et régulations hormonales (Exercices 1 à 17, p. 165-191)',
      'Thème 10 : Reproduction chez les spermaphytes et double fécondation (Exercices 1 à 10, p. 192-204)',
      'Thème 11 : Génétique formelle classique et cartes génétiques (Exercices 1 à 15, p. 205-210, 217-227)',
      'Thème 12 : Hérédité humaine, pedigrees et anomalies chromosomiques (Exercices 16 à 29, p. 211-216, 227-234)'
    ],
    sampleNewUntreatedSubjects: [
      'Sujet de synthèse Bac S1/S2 : « Expliquez comment la coordination entre les systèmes nerveux et hormonal assure le maintien de l\'homéostasie cardiovasculaire après une hémorragie aiguë. »',
      'Exercice de génétique humaine : « Analyse d\'un pedigree familial de rachitisme vitamino-résistant hypophosphatémique (dominant lié à l\'X) avec calcul de risque préconceptionnel. »',
      'Exercice d\'immunologie appliquée : « Diagnostic de la séropositivité au VIH par Western Blot et suivi de la charge virale sous trithérapie antirétrovirale. »'
    ]
  },
  {
    id: 'fascicule-svt-1s2-toffe-diome-dieye',
    title: 'Fascicule SVT 1ère S2 — Séries d\'exercices & Devoirs corrigés (Toffène Diome, Mansour Dieye, Mbaye Diome)',
    author: 'M. Toffène DIOME, M. Mansour DIEYE & M. Mbaye DIOME (Collection Toffe-Sora-Mbaye)',
    roleOrAffiliation: 'Lycée mixte de Ngane SAER (Kaolack), Lycée Ibrahima DIOUF (Kaolack) & Lycée Diakhao-Sine (Fatick)',
    countryOrigin: 'Sénégal (Programme Officiel SVT 1ère S2)',
    discipline: 'svt',
    disciplineLabel: 'SVT 1ère S2 — Séries d\'exercices & Devoirs semestriels corrigés (Kaolack & Diakhao-Sine)',
    badgeColor: 'emerald',
    cycle: 'second_cycle_bac',
    level: '1ere',
    series: ['S2', 'S1', 'C', 'D'],
    publicationYear: 2014,
    coverDescription: 'Recueil pédagogique officiel de 72 pages pour la classe de Première S2 (Sénégal), élaboré par le collectif Toffe-Sora-Mbaye (Lycées de Kaolack et Fatick). Comprend 5 séries thématiques d\'exercices avec corrections intégrales (Structure et ultrastructure cellulaire, échanges cellulaires et pression osmotique, division cellulaire et cinétique d\'ADN, chromosomes et synthèse des protéines, physiologie digestive, enzymologie et quotient respiratoire) ainsi que les annales corrigées pas à pas des devoirs surveillés et compositions semestrielles des Lycées Ngane Saer, Ibrahima Diouf et Diakhao-Sine.',
    keyConcepts: [
      'Structure et ultrastructure cellulaire : comparaison cellule animale et végétale, microscopie photonique vs électronique',
      'Calculs en microscopie : Grossissement total G = G_obj x G_ocul, taille apparente et calcul de taille réelle en micromètres',
      'Organites cellulaires et fonctions : noyau, chloroplastes, mitochondries, REG/ergastoplasme, dictyosomes, centrosomes',
      'Échanges cellulaires et osmose : plasmolyse, turgescence, déplasmolyse spontanée (solutés dialysables) et provoquée',
      'Loi de Van \'t Hoff de la pression osmotique : Po = n·i·R·T·C (C = Cm/M) en atmosphères et conversion en Pascals (1 atm = 10^5 Pa)',
      'Perméabilités membranaires : perméabilité sélective, différentielle (formamide rapide vs acétamide lent) et orientée (rouge neutre)',
      'Division cellulaire et cycle : phases G1, S (duplication de l\'ADN), G2, M (mitose) et évolution de la quantité d\'ADN',
      'Mitose végétale et animale : reconnaissance des stades (interphase, prophase, métaphase, anaphase, télophase)',
      'Perturbateurs cellulaires : 5-bromodésoxyuridine (inhibition de la duplication de l\'ADN en G1) et cystéamine (inhibition de la cytodiérèse)',
      'Synthèse des protéines : transcription dans le nucléoplasme, traduction dans le cytoplasme, code génétique, brin codant vs transcrit',
      'Mutations génétiques : substitutions (faux-sens, non-sens), délétions et insertions entraînant des décalages du cadre de lecture',
      'Biologie moléculaire appliquée : ocytocine vs vasopressine, chaîne B de l\'insuline humaine, bactériophage T4, mucoviscidose CFTR',
      'Physiologie digestive : mise en évidence des constituants du lait (eau, caséine/lactalbumine, chlorures, calcium, lactose, lipides)',
      'Enzymologie fondamentale : spécificité de substrat (amylosynthétase, maltase, saccharase) et thermodépendance/inhibition par pH',
      'Respiration et énergétique : quotient respiratoire QR = VCO2/VO2, équations de combustion complète des glucides et des lipides',
      'Anomalies chromosomiques : caryotypes anormaux, trisomie 13 (Patau), trisomie 8, syndrome de Klinefelter (XXY), syndrome de Turner (X)'
    ],
    methodologicalHighlights: [
      {
        name: 'Calculs de Microscopie & Tailles Réelles',
        description: 'Protocole rigoureux d\'exploitation des microphotographies et dessins d\'observation.',
        keyRules: [
          'Grossissement total : G = Grossissement objectif x Grossissement oculaire.',
          'Formule de la dimension réelle : Taille réelle = Taille apparente (mesurée à la règle sur le document) / Grossissement.',
          'Homogénéité absolue des unités : convertir la taille apparente en micromètres (1 cm = 10 000 µm, 1 mm = 1 000 µm) avant de diviser par le grossissement.'
        ]
      },
      {
        name: 'Loi de Van \'t Hoff & Détermination Graphique de l\'Isotonie',
        description: 'Méthodologie mathématique et graphique des échanges osmotiques en Première S2.',
        keyRules: [
          'Formule officielle : Po = n · i · R · T · C où C = Cm / M (concentration molaire en mol/L), R = 0,082 L·atm/(mol·K), T = température absolue en Kelvin (T = θ°C + 273).',
          'Coefficient d\'ionisation i : i = 1 pour molécules non ionisables (saccharose, glucose, urée) ; i = 2 pour NaCl (Na+ + Cl-) ; i = 3 pour Na2SO4 (2 Na+ + SO4^2-).',
          'Conversion des unités : 1 atm = 10^5 Pascals (Pa).',
          'Isotonie cellulaire : graphiquement repérée à l\'abscisse correspondant à 50% de cellules plasmolysées, ou au point où la variation de longueur/masse ΔL ou ΔP est nulle.'
        ]
      },
      {
        name: 'Analyse des Cinétiques d\'ADN & Détection des Cycles',
        description: 'Méthode d\'analyse de la courbe de variation de la quantité d\'ADN par noyau.',
        keyRules: [
          'Phase G1 : quantité d\'ADN stable à Q (chromosomes simples à 1 chromatide décondensée).',
          'Phase S : synthèse d\'ADN, quantité doublant progressivement de Q à 2Q.',
          'Phase G2 : quantité d\'ADN stable à 2Q (chromosomes doubles dupliqués).',
          'Phase M (Mitose) : séparation anaphasique des chromatides et cytodiérèse, chute brutale de 2Q à Q.',
          'Durée d\'un cycle cellulaire : mesurée entre le début d\'une phase G1 et le début de la phase G1 suivante (ex: 22h - 2h = 20h).'
        ]
      }
    ],
    coreKnowledgeExcerpt: `FASCICULE SVT 1ère S2 — PROGRAMME DU SÉNÉGAL (Toffène DIOME, Mansour DIEYE, Mbaye DIOME) :
1. Structure et ultrastructure cellulaire :
- Cellule animale : délimitée par la membrane plasmique seule, petites vacuoles, présence de centrosome (paire de centrioles formés de 9 triplets de microtubules).
- Cellule végétale : entourée d'une paroi squelettique pectocellulosique rigide perforée de plasmodesmes, volumineuse vacuole centrale, présence de plastes (chloroplastes à double membrane, thylakoïdes et grana assurant la photosynthèse).
- Rôles des organites : Régulation transcriptionnelle par le noyau (euchromatine active, hétérochromatine dense) ; synthèse des protéines par le REG/ergastoplasme recouvert de ribosomes ; maturation, emballage et exportation vésiculaire par les dictyosomes de l'appareil de Golgi ; respiration cellulaire et synthèse d'ATP par les mitochondries ; maintien osmotique par la vacuole.

2. Échanges cellulaires et phénomènes osmotiques :
- Osmose : diffusion spontanée de l'eau à travers une membrane semi-perméable du milieu le moins concentré en soluté (hypotonique) vers le milieu le plus concentré (hypertonique).
- Plasmolyse : décollement de la membrane plasmique par rapport à la paroi lors de la perte d'eau en milieu hypertonique.
- Déplasmolyse : rétablissement du volume cellulaire et recollement de la membrane à la paroi. Spontanée si le soluté est dialysable (pénétration du soluté augmentant la pression interne, entraînant une réentrée d'eau) ; provoquée si on replace les cellules plasmolysées dans l'eau distillée.
- Perméabilité différentielle : mise en évidence par des vitesses distinctes de pénétration des solutés (le formamide traverse plus vite que l'acétamide).
- Perméabilité orientée : démontrée par le rouge neutre qui entre et s'accumule dans la vacuole sans pouvoir en ressortir spontanément.
- Pression osmotique chez les halophytes : Les salicornes du fleuve Sénégal accumulent NaCl dans leur suc vacuolaire à une concentration très élevée (59,85 g/L sous Po = 50 atm) face à un sol à 15 g/L grâce à un transport actif contre gradient d'ions Na+ et Cl-.

3. Division cellulaire et cycle :
- Mitose : Prophase (condensation de la chromatine, disparition de l'enveloppe nucléaire, mise en place du fuseau achromatique) -> Métaphase (disposition des centromères des chromosomes dupliqués dans le plan équatorial) -> Anaphase (clivage synchrone des centromères, disjonction et migration polaire des chromatides sœurs) -> Télophase (décondensation, reconstitution nucléaire et cytodiérèse par sillon de division chez l'animal ou phragmoplaste centrifuge chez le végétal).
- Action d'agents chimiques : 5-bromodésoxyuridine (empêche la duplication de l'ADN en phase S, bloque la cellule en G1) ; cystéamine (bloque la cytodiérèse en maintenant la division nucléaire, produisant des cellules plurinucléées).

4. Chromosomes et synthèse protéique :
- Transcription : copie du brin non codant (transcrit) d'ADN en ARNm complémentaire par l'ARN polymérase dans le nucléoplasme.
- Traduction : décodage de l'ARNm en acides aminés au niveau des ribosomes dans le cytoplasme selon le code génétique universel et dégénéré.
- Mutation de l'ocytocine et vasopressine : 9 acides aminés avec 2 substitutions ponctuelles (Ile <-> Phe en position 3 et Leu <-> Arg en position 8).
- Mucoviscidose : gène CFTR (1480 AA), transporteur transmembranaire de chlorure. La mutation majeure delta F508 correspond à la délétion de 3 nucléotides CTT supprimant la Phénylalanine en position 508.

5. Physiologie de la nutrition et enzymologie :
- Constituants du lait : eau (évaporation), lactalbumine (précipitation à chaud et réaction xanthoprotéique jaune puis orangée à l'ammoniaque), sels minéraux (chlorures précipitant en blanc avec AgNO3, calcium avec oxalate d'ammonium), sucre réducteur (lactose donnant précipité rouge brique avec liqueur de Fehling), matière grasse (tache translucide sur papier).
- Cinétique enzymatique : la saccharase dédouble le saccharose en glucose + fructose ; la maltase hydrolyse le maltose en 2 glucoses. Les enzymes sont dénaturées par l'ébullition (perte irréversible d'activité au-delà de 60°C) et inhibées réversiblement à 0°C.
- Quotient respiratoire : QR = VCO2 / VO2. QR = 1 pour combustion du glucose (C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O) ; QR = 0,70 à 0,72 pour combustion des lipides (C35H68O4 + 50 O2 -> 35 CO2 + 34 H2O) chez le sujet à jeun.`,
    sampleInBookletSubjects: [
      'Série 1 : Structure et ultrastructure cellulaire, organites et calculs de taille réelle (p. 4-5)',
      'Série 2 : Échanges cellulaires, cylindres de pomme de terre, perméabilités et formules Po (p. 6-7)',
      'Série 3 : Cinétique d\'ADN en culture synchrone, phases G1/S/G2 et clichés de mitose d\'oignon (p. 8-9)',
      'Série 4 : Code génétique, caryotype de criquet, ocytocine, vasopressine et mucoviscidose CFTR (p. 10-12)',
      'Série 5 : Composition biochimique du lait, métabolisme de la levure et quotient respiratoire (p. 12-14)',
      'Devoir surveillé n°1 premier semestre (Lycée mixte Ngane Saer) : Mérotomie, cellule animale et plastes (p. 21-22, 48)',
      'Devoir n°1 premier semestre (Lycée Ibrahima Diouf) : Mosaïque fluide membranaire, mitochondrie aérobie/anaérobie (p. 23-24, 49-50)',
      'Devoir surveillé n°1 premier semestre (Lycée Diakhao-Sine) : Constituants cellulaires, schéma ultrastructural (p. 25-26, 50-51)',
      'Devoir surveillé n°2 premier semestre (Lycées Ngane Saer & Ibrahima Diouf) : Osmose, soluté N et P, sperme et ATP (p. 27-28, 51-52)',
      'Devoir surveillé n°2 premier semestre (Lycée Diakhao-Sine) : Calculs Po glucose/NaCl/Na2SO4, hématies équines (p. 29, 52-54)',
      'Devoir surveillé n°3 premier semestre : Définitions, rapport K d\'Hibiscus, perméabilités à l\'urée et au NaCl (p. 30-32, 54-56)',
      'Devoir surveillé n°2 (Diakhao-Sine 2013-2014) : Pétales de tulipe, constante K1 et substitution Ser-Ile-Thr (p. 33-34, 57-58)',
      'Devoir n°1 second semestre (Ngane Saer) : Étude des chromosomes, chaîne B de l\'insuline humaine (p. 35-36, 59-61)',
      'Devoir surveillé n°1 second semestre (Diakhao-Sine) : Mitose animale, trisomie 13 et trisomie 8 sur caryotypes (p. 37, 61)',
      'Devoir n°2 second semestre : Classification des aliments, équipement enzymatique du porcelet et levures (p. 38-39, 61-62)',
      'Devoir surveillé n°1 second semestre (Diakhao-Sine 2011-2012) : Réplication d\'ADN, mitose de Bellevalia (p. 40, 62-63)',
      'Devoir surveillé n°2 second semestre (Diakhao-Sine 2011-2012) : Klinefelter, Turner, digestion salivaire de l\'amidon (p. 41-42, 63-64)',
      'Composition premier semestre (Ngane Saer / Ibrahima Diouf) : Mitose comparée, paramécies et salicornes du Sénégal (p. 43-45, 64-66)',
      'Composition second semestre : Fermentations, basalte vs granite, bactériophage T4 et caryotypes d\'enfants (p. 46-47, 66-67)'
    ],
    sampleNewUntreatedSubjects: [
      'Exercice d\'application : Calcul de la pression osmotique d\'une solution de CaCl2 à 11,1 g/L à 25°C et prédiction du comportement d\'hématies humaines.',
      'Sujet de synthèse : « Exposez le rôle coordonné du noyau, du réticulum endoplasmique granuleux et de l\'appareil de Golgi dans la synthèse et l\'exportation d\'une enzyme digestive. »',
      'Exercice de génétique moléculaire : « Analyse de mutations dans le gène de la bêta-globine conduisant à la drépanocytose (mutation HbS) et conséquences sur la structure protéique. »'
    ]
  },
  {
    id: 'fascicule-svt-ts-toffe-diome-dieye',
    title: 'Fascicule SVT Terminale S1-S2 — Exercices Corrigés (Toffène Diome, Mansour Dieye, Mbaye Diome)',
    author: 'M. Toffène DIOME, M. Mansour DIEYE & M. Mbaye DIOME (Collection Toffe-Sora-Mbaye)',
    roleOrAffiliation: 'Lycée mixte de Ngane SAER (Kaolack), Lycée Ibrahima DIOUF (Kaolack) & Lycée de Diofior (Fatick)',
    countryOrigin: 'Sénégal (Programme Officiel SVT Terminales S1-S2)',
    discipline: 'svt',
    disciplineLabel: 'SVT Terminales S1-S2 — Recueil Complet de 67 Exercices Corrigés (Collection Toffe-Sora-Mbaye)',
    badgeColor: 'indigo',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['S1', 'S2', 'C', 'D'],
    publicationYear: 2014,
    coverDescription: 'Ouvrage d\'excellence de 146 pages réunissant 67 exercices d\'évaluation et de baccalauréat avec leurs résolutions méthodiques intégrales rédigées par M. Toffène Diome, M. Mansour Dieye et M. Mbaye Diome (Lycées de Kaolack et Fatick). Couvre l\'intégralité des 11 thèmes officiels du programme de Terminale S1 et S2 : Système nerveux et ses propriétés bioélectriques, motricité réflexe (innée, conditionnelle, myotatique), muscle squelettique et énergétique, activité cardiaque et baroréflexe, milieu intérieur et néphron, régulation de la glycémie, immunologie (RIMH, RIMC, rejet de greffes, VIH), reproduction des mammifères et spermaphytes, génétique formelle mendélienne et hérédité humaine.',
    keyConcepts: [
      'Système nerveux : potentiel de repos (-70 mV, gradients ioniques, dialyse, pompe Na+/K+ sensible au DNP et au cyanure)',
      'Potentiel d\'action : dépolarisation (canaux CVD Na+), repolarisation (CVD K+), hyperpolarisation, vitesse V = 6·d sur fibre myélinisée',
      'Conduction saltatoire aux nœuds de Ranvier : faible rhéobase au niveau des nœuds de Ranvier (forte densité de canaux voltage-dépendants)',
      'Neurobiologie de la douleur : fibres A myélinisées à conduction rapide (60 m/s) vs fibres B amyéliniques lentes (1-2 m/s)',
      'Neurochimie synaptique : substance P médiatrice de la douleur, interneurones à enképhaline (« morphine naturelle ») inhibiteurs',
      'Pharmacologie du système nerveux : atropine et maladie d\'Alzheimer, ecstasy (suractivation sérotoninergique puis effondrement)',
      'Comportement moteur : réflexes innés vs conditionnels (David de Wied chez le rat avec métronome et choc électrique, extinction)',
      'Réflexe myotatique achilléen : récepteur fuseau neuromusculaire en modulation de fréquence, arc monosynaptique agoniste (aspartate) et interneurone inhibiteur (GABA)',
      'Thermorégulation : déclenchement du frisson thermique par l\'hypothalamus refroidi par voie sanguine centrale et afférences cutanées',
      'Muscle squelettique : unités motrices A (rapides, amplitude forte, tétanos imparfait) vs B (lentes, posture, tétanos parfait)',
      'Ultrastructure et mécanique du sarcomère : raccourcissement des bandes I et zone H, invariance de la bande A, pivotement des têtes de myosine',
      'Pharmacologie musculaire : curare (bloqueur des récepteurs nicotiniques post-synaptiques), ésérine (inhibiteur de l\'acétylcholinestérase), myasthénie et α-bungarotoxine',
      'Métabolisme énergétique musculaire : phosphocréatine (anaérobie alactique), glycolyse (acide lactique), oxydations phosphorylantes mitochondriales',
      'Typologie des fibres musculaires : fibres rouges aérobies (myoglobine, mitochondries, endurance, faible fatigabilité) vs fibres pâles anaérobies',
      'Activité cardiaque : baroréflexe (sinus carotidien, nerfs de Hering/Cyon, nerf X cardiomodérateur et sympathiques cardio-accélérateurs)',
      'Cœur transplanté dénervé : adaptation cardiaque lente exclusivement hormonale par sécrétion surrénalienne de catécholamines',
      'Système rénine-angiotensine-aldostérone (RAA) : régulation de la volémie et vasoconstriction artériolaire lors de l\'hypotension rénale',
      'Néphron et urogenèse : filtration glomérulaire (130 mL/min d\'urine primitive), réabsorption tubulaire d\'eau (99,2%) et de glucose (187,2 g/24h)',
      'Régulation de la glycémie : constante de 1 g/L (5,55 mmol/L), ablation du foie, pancréas endocrine (îlots de Langerhans : cellules β à insuline et α à glucagon)',
      'Immunologie fondamentale : coopération cellulaire macrophages-LT4-LB, production d\'anticorps circulants, neutralisation, opsonisation, complément',
      'Cytotoxicité cellulaire : RIMC par LTc (double reconnaissance CMH I-Ag), sécrétion de perforines et granzymes créant des pores membranaires',
      'Transplantation et greffes : allogreffes, rejet de greffe et rôle indispensable du thymus, protection fœtale par HLA-G trophoblastique inhibant les récepteurs KIR des cellules NK',
      'Infection par le VIH : gp120 sur récepteurs CD4 et corécepteurs CCR5, résistance naturelle des homozygotes mutants délétés CCR5-Δ32 (génotype RR)',
      'Reproduction des mammifères : cycle ovarien/utérin, décharge ovulante de LH à J14 par rétrocontrôle positif, glaire cervicale lâche à J13-14, clomifène',
      'Réflexe neuro-endocrinien de la lactation : récepteurs du mamelon -> hypothalamus -> prolactine (synthèse) et ocytocine (éjection du lait)',
      'Reproduction des spermaphytes : fleur, étamine, grain de pollen, sac embryonnaire à 8 noyaux, double fécondation (embryon 2n et albumen 3n)',
      'Génétique classique : monohybridisme avec allèle létal (poulets à pattes courtes), gonosomes ZW chez les papillons Aurinia, dihybridisme drosophile et maïs',
      'Cartes factorielles : calcul de distance génétique en centimorgans (cM = % de recombinés), liaison partielle avec crossing-over',
      'Hérédité humaine : surdi-mutité autosomale et daltonisme lié à X, translocation robertsonienne 14/21 et trisomie 21, liaison groupe sanguin ABO et ostéo-arthro-onychodysplasie, électrophorèse G6PD (Klinefelter XXY, Turner X)'
    ],
    methodologicalHighlights: [
      {
        name: 'Calcul de Vitesse de Conduction du Nerf à Deux Électrodes',
        description: 'Méthode d\'élimination du temps de réponse du nerf pour un calcul de vitesse rigoureux.',
        keyRules: [
          'Formule : V = (d2 - d1) / (t2 - t1) = Δd / Δt.',
          'Pourquoi deux enregistrements sont indispensables : un seul enregistrement inclut le temps de réponse propre du nerf (délai d\'excitation) ; la différence de distance divisée par la différence de temps de latence élimine ce délai et fournit la vitesse réelle de propagation.',
          'Application numérique type (Exercice 8) : d1 = 50 mm, d2 = 150 mm, Δd = 100 mm ; pour fibres rapides Δt = 2,5 ms -> V = 40 m/s ; pour fibres lentes Δt = 5 ms -> V = 20 m/s.'
        ]
      },
      {
        name: 'Démonstration du Caractère Monosynaptique d\'un Réflexe',
        description: 'Protocole de calcul du délai synaptique médullaire.',
        keyRules: [
          'Délai synaptique unitaire moyen : environ 0,5 ms par synapse franchie.',
          'Calcul du temps de transit intramédullaire : tB - tA (temps mesuré entre le motoneurone de sortie B et le neurone sensitif d\'entrée A).',
          'Interprétation : Si tB - tA = 0,77 ms (proche de 0,5 ms), le message n\'a franchi qu\'une seule synapse (arc monosynaptique). S\'il y avait 2 synapses (arc disynaptique avec interneurone), le délai serait supérieur ou égal à 2 x 0,5 ms = 1,0 ms.'
        ]
      },
      {
        name: 'Algorithme d\'Analyse des Arbres Généalogiques (Hérédité Humaine)',
        description: 'Démarche séquentielle infaillible validée par les jurys du Baccalauréat.',
        keyRules: [
          '1. Dominance ou Récessivité : Deux parents sains ayant un enfant malade prouvent que l\'allèle de la maladie est récessif (masqué chez les parents hétérozygotes). Deux parents malades ayant un enfant sain prouvent que l\'allèle est dominant.',
          '2. Test de localisation sur Y : Si une femme est atteinte ou si un père malade a des fils sains, l\'allèle n\'est pas sur Y.',
          '3. Test de récessivité liée à X : Si une fille malade a un père sain, l\'allèle ne peut pas être récessif lié à X (la fille recevrait le X sain de son père).',
          '4. Test de dominance liée à X : Si un homme malade a une fille saine ou une mère saine, l\'allèle ne peut pas être dominant lié à X.',
          '5. Conclusion et confirmation autosomale : Formuler les génotypes complets et valider les probabilités par un échiquier de croisement mendélien.'
        ]
      },
      {
        name: 'Interprétation des Électrophorèses & Anomalies Chromosomiques',
        description: 'Lecture des bandes protéiques ou d\'ADN pour identifier génotypes et aneuploïdies.',
        keyRules: [
          'Gène codominant lié au chromosome X (ex: enzyme G6PD avec formes A et B) : un individu de sexe masculin normal (XY) n\'a qu\'un seul chromosome X et ne présente qu\'une seule bande (A ou B).',
          'Un individu masculin présentant DEUX bandes distinctes A et B possède nécessairement deux chromosomes X actifs : génotype X^A X^B Y, signant le syndrome de Klinefelter (47, XXY).',
          'Un individu féminin ne présentant qu\'une seule bande d\'origine paternelle sans la bande maternelle attendue possède un seul chromosome X (X^B 0), signant le syndrome de Turner (45, X).'
        ]
      }
    ],
    coreKnowledgeExcerpt: `FASCICULE SVT TERMINALE S1-S2 — RECUEIL INTÉGRAL DE 67 EXERCICES CORRIGÉS (Toffène DIOME, Mansour DIEYE, Mbaye DIOME) :
1. Système nerveux et propriétés bioélectriques (Ex. 1 à 9) :
- Potentiel de repos (-70 mV) : résultat d'une asymétrie ionique ([Na+]ext 440 mM > [Na+]int 50 mM ; [K+]int 400 mM > [K+]ext 20 mM). La pompe Na+/K+ ATPase utilise l'ATP pour rejeter 3 Na+ et réabsorber 2 K+, maintenant le gradient. Les inhibiteurs respiratoires (DNP, cyanure) bloquent la synthèse d'ATP et font chuter le flux actif de K+.
- Potentiel d'action : stimulation supraliminaire ouvrant les canaux CVD à Na+ (dépolarisation brutale jusqu'à +30 mV), puis fermeture et ouverture des canaux CVD à K+ (repolarisation puis hyperpolarisation transitoire).
- Vitesse de conduction : fonction linéaire du diamètre pour les fibres myélinisées (V = 6·d en m/s). Conduction saltatoire de nœud de Ranvier en nœud de Ranvier (rhéobase minimale aux nœuds où la membrane dénudée concentre les canaux CVD).
- Dualité de la douleur : la douleur rapide chemine par les grosses fibres myélinisées A (vitesse 6 à 24 m/s), la douleur lente par les petites fibres amyéliniques B (vitesse 1 à 2 m/s). Dans la corne dorsale de la moelle épinière, les neurones sensitifs libèrent la substance P ; les interneurones locaux sécrètent l'enképhaline (« morphine naturelle ») qui inhibe l'exocytose de substance P. La morphine exogène bloque la salve tardive de potentiels d'action.
- Neuropharmacologie : la maladie d'Alzheimer résulte de la dégénérescence des neurones cholinergiques des noyaux gris du cortex cérébral ; l'atropine est un antagoniste compétitif des récepteurs à l'acétylcholine. L'ecstasy (MDMA) provoque une libération massive de sérotonine avec inhibition de sa recapture, stimulant les neurones à dopamine (euphorie durant 0-4h) avant d'épuiser les stocks et d'inhiber la synthèse (dépression sévère au-delà de 4h).

2. Rôle du système nerveux dans le comportement moteur (Ex. 10 à 14) :
- Réflexe conditionnel d'évitement (David de Wied) : stimulus absolu inconditionnel (choc électrique aux pattes) + stimulus conditionnel neutre (bruit du métronome). L'association répétée crée une réaction d'évitement conditionnée qui s'éteint si le signal sonore n'est plus associé au choc. Le réflexe conditionnel nécessite l'intégrité du cortex cérébral et de la formation réticulée.
- Réflexe myotatique achilléen : contraction réflexe du triceps sural (muscle extenseur étiré) et relâchement réciproque du muscle fléchisseur antagoniste. Le fuseau neuromusculaire code l'étirement mécanique en fréquence de potentiels d'action. L'arc réflexe vers le muscle extenseur est monosynaptique (délai intramédullaire de 0,77 ms pour un délai synaptique unitaire de 0,5 ms) sous neurotransmetteur excitateur aspartate ; la voie vers le muscle antagoniste est disynaptique via un interneurone inhibiteur à GABA.
- Thermorégulation : le frisson thermique est un réflexe moteur de thermogenèse déclenché par les thermorécepteurs cutanés et le refroidissement sanguin de l'hypothalamus, relayé par la moelle épinière vers les motoneurones squelettiques.

3. Activité du muscle strié squelettique et énergétique (Ex. 15 à 21) :
- Unités motrices A (fibres rapides de type II, contractions de 40g en 75 ms, métabolisme anaérobie) vs B (fibres lentes de type I, contractions durables de 2g sur 300 ms, riches en mitochondries et myoglobine, posture).
- Ultrastructure du sarcomère : délimité par 2 stries Z, comprenant une bande sombre A médiane (filaments épais de myosine) et deux demi-bandes claires I (filaments fins d'actine) avec zone H centrale claire. Lors de la contraction, les têtes de myosine hydrolysent l'ATP, pivotent et font glisser les filaments d'actine : raccourcissement des bandes I et de la zone H, la bande A restant constante.
- Couplage excitation-contraction : dépolarisation du sarcolemme et des tubules T -> libération de Ca2+ par le réticulum sarcoplasmique -> fixation sur la troponine -> déplacement de la tropomyosine -> fixation myosine-actine.
- Pharmacologie neuromusculaire : le curare bloque les récepteurs nicotiniques postsynaptiques à acétylcholine sans stimuler la fibre (paralysie flasque) ; l'ésérine inhibe l'acétylcholinestérase (accumulation d'ACh dans la fente) ; la myasthénie est une maladie auto-immune avec déficit de récepteurs nicotiniques fonctionnels (révélé par autoradiographie à l'α-bungarotoxine).
- Énergétique : régénération immédiate de l'ATP par la phosphocréatine (ADP + phosphocréatine -> ATP + créatine par la phosphocréatinase) ; régénération à court terme par la glycolyse anaérobie lactique (production de lactate) ; régénération durable par la respiration aérobie mitochondriale. Les fibres musculaires rouges sont riches en myoglobine et mitochondries (adaptées à l'effort soutenu, marathon, VO2 max élevé), les fibres pâles sont riches en glycogène et enzymes de glycolyse (effort violent et bref, 100m, fatigabilité rapide).

4. Activité cardiaque et régulation de la pression artérielle (Ex. 22 à 26) :
- Système baroréflexe : les barorécepteurs du sinus carotidien et de la crosse aortique émettent des potentiels d'action le long des nerfs afférents de Hering et Cyon vers les centres bulbaires. Une hausse de pression stimule le centre cardio-modérateur (nerf vague X parasympathique libérant l'acétylcholine -> bradycardie) et inhibe le centre cardio-accélérateur orthosympathique. Une baisse de pression lève l'inhibition sympathique (ganglion étoilé, noradrénaline -> tachycardie et vasoconstriction).
- Cœur transplanté : dénervé, le cœur greffé ne réagit pas par voie nerveuse réflexe mais s'adapte lentement par voie hormonale via les catécholamines plasmatiques (adrénaline et noradrénaline sécrétées par la médullosurrénale).
- Système Rénine-Angiotensine-Aldostérone (RAA) : lors d'une hypovolémie ou hypotension rénale, le rein sécrète de la rénine qui transforme l'angiotensinogène hépatique en angiotensine (vasoconstricteur puissant). L'angiotensine stimule la corticosurrénale qui sécrète l'aldostérone, hormone augmentant la réabsorption rénale de Na+ et d'eau, restaurant la volémie et la pression artérielle.

5. Milieu intérieur et fonction rénale (Ex. 27) :
- Le néphron comprend la capsule de Bowman, le tubule contourné proximal, l'anse de Henle, le tubule contourné distal et le tube collecteur.
- Filtration glomérulaire : formation de 130 mL/min d'urine primitive (187 L/24h), identique au plasma débarrassé des protéines macromoléculaires (80 g/L).
- Réabsorption tubulaire : 99,2% de l'eau est réabsorbée (129 mL/min réabsorbé pour 1 mL/min d'urine définitive excrétée). Le glucose est totalement réabsorbé (187,2 g/24h pour une glycémie normale de 1 g/L). L'urée est concentrée par réabsorption d'eau (passe de 0,3 g/L à 20 g/L dans l'urine définitive). Synthèse d'ions ammonium NH4+ par le tubule.

6. Régulation de la glycémie (Ex. 28 à 30) :
- Glycémie physiologique stable à 1 g/L (5,55 mmol/L).
- Rôle effecteur du foie : organe tampon glucidique. Hépatectomie -> hypoglycémie mortelle en quelques heures. Après le repas, le foie stocke le glucose sous forme de glycogène (glycogénogenèse) ; pendant le jeûne, il mobilise le glycogène (glycogénolyse) et synthétise du glucose à partir de substrats non glucidiques (néoglucogenèse).
- Pancréas endocrine : îlots de Langerhans. Cellules β sécrétant l'insuline (hypoglycémiante, favorisant l'entrée cellulaire du glucose et la glycogénogenèse, détruites par l'alloxane) ; cellules α sécrétant le glucagon (hyperglycémiant, stimulant la glycogénolyse hépatique, détruites par le diéthylthiocarbamate). Action strictement hormonale prouvée par la greffe de pancréas au cou.

7. Immunologie fondamentale et appliquée (Ex. 31 à 38) :
- RIMH : les lymphocytes B reconnaissent l'antigène natif par leur BCR. Avec la coopération des macrophages (CPAg présentant les peptides sur le CMH II) et des lymphocytes T4 auxiliaires sécréteurs d'interleukines, les LB se multiplient et se différencient en plasmocytes (sécréteurs d'anticorps spécifiques) et LB mémoire. Les anticorps neutralisent l'antigène en formant des complexes immuns, favorisent l'opsonisation (phagocytose par macrophages via les récepteurs Fc) et activent la cascade du complément (complexe d'attaque membranaire lytique).
- RIMC : double reconnaissance obligatoire par les lymphocytes T cytotoxiques (LTc / CD8+) du soi modifié : le TCR reconnaît simultanément l'antigène étranger et la molécule du CMH I de la cellule hôte infectée (expériences de Zinkernagel avec le virus de la vaccine). Le contact étroit polarise les granules cytoplasmiques et libère de la perforine qui polymérise en pores membranaires, provoquant la lyse osmotique de la cellule cible.
- Rejet de greffe : les allogreffes sont rejetées par les LT4 et LT8 après reconnaissance des antigènes d'histocompatibilité (CMH/HLA) du donneur comme non-soi. Le rejet est accéléré lors d'une seconde greffe (mémoire immunitaire). Le thymus est indispensable à la maturation des LT (les souris nudes athymiques acceptent les allogreffes et xénogreffes de rat).
- Tolérance foeto-maternelle : les cellules trophoblastiques isolant le fœtus n'expriment pas les molécules HLA classiques mais la protéine non classique HLA-G, identique chez tous les fœtus, qui se fixe sur les récepteurs KIR des cellules NK (Natural Killer) maternelles et inhibe leur cytotoxicité.
- VIH/SIDA : le virus se fixe par sa glycoprotéine de surface gp120 sur le récepteur CD4 et le corécepteur CCR5 des LT4 et macrophages. Les individus homozygotes pour la mutation délétère CCR5-Δ32 (allèle R, protéine tronquée à 205 AA au lieu de 352 AA, génotype RR) sont totalement résistants à l'infection au VIH ; les hétérozygotes SR expriment 50% de récepteurs normaux et résistent plus longtemps à la progression vers le SIDA.

8. Reproduction chez les mammifères et les spermaphytes (Ex. 39, 40, 50, 51, 52, 53, 54, 55) :
- Cycle reproducteur féminin : régulation par l'axe hypothalamo-hypophysaire. Les follicules ovariens sécrètent des œstrogènes. Au 12e-13e jour, le dépassement du seuil critique d'œstradiol déclenche un rétrocontrôle positif provoquant la décharge ovulante de LH (et FSH) à J14. Le corps jaune sécrète progestérone et œstrogènes. La glaire cervicale devient abondante et lâche à J13-J14, permettant le passage des spermatozoïdes. Traitement au clomifène (anti-œstrogène) pour induire l'ovulation en levant le rétrocontrôle négatif. Contraception progestative (norgestriénone) maintenant la glaire cervicale dense et imperméable.
- Maintien du corps jaune gravidique : après fécondation, le trophoblaste de l'embryon précoce sécrète l'hormone hCG dès le 12e-14e jour qui prend le relais de la LH pour maintenir le corps jaune et la production de progestérone (>10 ng/mL, évitant l'avortement spontané) jusqu'au relais placentaire au 3e mois.
- Réflexe de lactation : la succion du mamelon stimule des récepteurs tactiles dont l'influx afférent gagne l'hypothalamus via la moelle épinière. L'antéhypophyse libère la prolactine (synthèse du lait) et la posthypophyse libère l'ocytocine (éjection du lait par contraction des cellules myoépithéliales des acini mammaires).
- Angiospermes : le grain de pollen germe sur le stigmate du pistil et émet un tube pollinique descendant dans le style. Double fécondation : un spermatozoïde (n) féconde l'oosphère (n) pour former le zygote principal diploïde (2n) donnant l'embryon ; le second spermatozoïde (n) fusionne avec les deux noyaux du sac embryonnaire (n+n) pour former le zygote accessoire triploïde (3n) donnant l'albumen de réserve. L'ovule fécondé devient la graine.

9. Génétique formelle mendélienne et hérédité humaine (Ex. 56 à 67) :
- Monohybridisme et gène létal : croisement de poulets à pattes courtes (allèle dominant C) entre eux donnant 2/3 de descendants à pattes courtes (Cn) et 1/3 à pattes normales (nn), le génotype homozygote dominant CC étant létal in ovo.
- Gonosomes ZW : chez les Lépidoptères (papillon Aurinia), les femelles sont hétérogamétiques ZW et les mâles homogamétiques ZZ.
- Dihybridisme et test-cross chez la Drosophile : chez le mâle drosophile, absence totale de crossing-over (linkage absolu). Chez la femelle, les gènes liés subissent des enjambements en prophase I de méiose, produisant des gamètes recombinés. Calcul de la distance génétique : d = (% de recombinés) en centimorgans (cM). Exemple chez le maïs : 3,597 cM entre les gènes de forme du grain et de couleur de l'albumen.
- Translocation robertsonienne 14/21 : fusion centrique entre un chromosome 14 et un 21. La mère porteuse équilibrée (45 chromosomes dont un 14/21) a un phénotype normal mais présente un risque élevé de transmettre le chromosome 14/21 avec un 21 libre, engendrant un zygote à 46 chromosomes avec trisomie 21 fonctionnelle (syndrome de Down).
- Arbres généalogiques combinés : analyse simultanée de la surdi-mutité (autosomique récessive, allèles S/m) et du daltonisme (récessif lié au chromosome X, allèles Xs/Xd).
- Liaison autosomale entre groupes sanguins ABO et ostéo-arthro-onychodysplasie (syndrome Nail-Patella) : les allèles de la maladie (M dominant) et du groupe sanguin sont situés sur la même paire d'autosomes (chromosome 9), les rares exceptions résultant d'un crossing-over maternel.
- Électrophorèse de l'enzyme G6PD liée à l'X (formes codominantes A et B) : un garçon exprimant simultanément les bandes A et B est obligatoirement atteint du syndrome de Klinefelter (47, XA XB Y) ; une fille n'exprimant qu'une bande paternelle sans allèle maternel est atteinte du syndrome de Turner (45, XB 0).`,
    sampleInBookletSubjects: [
      'Exercice 1 : Potentiels de repos et d\'action diphasique/monophasique (p. 3-4)',
      'Exercice 2 : Douleur cutanée rapide et lente, fibres myélinisées A et amyéliniques B, enképhaline et morphine (p. 4-7)',
      'Exercice 3 : Maladie d\'Alzheimer, déficit en acétylcholine et action compétitive de l\'atropine (p. 7-8)',
      'Exercice 4 : Mécanismes ioniques du potentiel de repos, inégale répartition Na+/K+ et pompe ATPase sensible au DNP (p. 8-11)',
      'Exercice 5 : Facteurs de conduction de l\'influx et relation mathématique vitesse-diamètre V = 6·d (p. 11-12)',
      'Exercice 6 : Distribution trimodale des fibres du nerf rachidien et électroneurogramme à potentiels multiples (p. 12-14)',
      'Exercice 7 : Enregistrement sur axone géant de seiche et rhéobase le long d\'une fibre myélinisée (p. 14-16)',
      'Exercice 8 : Électroneurogramme du nerf sciatique et vitesse des fibres rapides (40 m/s) et lentes (20 m/s) (p. 16-18)',
      'Exercice 9 : Pharmacologie de l\'ecstasy (MDMA) sur neurones à sérotonine et neurones à dopamine (p. 19-21)',
      'Exercice 10 : Réflexe conditionnel d\'évitement chez le rat et extinction (David de Wied) (p. 23-24)',
      'Exercice 11 : Réflexe myotatique achilléen et fuseau neuromusculaire (p. 24-26)',
      'Exercice 12 : Circuit neuronique intramédullaire, motoneurones extenseur/fléchisseur, aspartate et GABA (p. 26-28)',
      'Exercice 13 : Thermorégulation et déclenchement du frisson thermique par l\'hypothalamus (p. 29-31)',
      'Exercice 14 : Conditionnement pavlovien chez le chat, rôle du cortex et de la formation réticulée (p. 31-33)',
      'Exercice 15 : Propriétés des unités motrices A (rapides) et B (lentes, posture) chez le chat (p. 35-38)',
      'Exercice 17 : Action du curare et de l\'ésérine sur la jonction neuromusculaire (p. 39-41)',
      'Exercice 18 : Physiopathologie de la myasthénie et marquage des récepteurs par l\'α-bungarotoxine (p. 41-43)',
      'Exercice 19 : Énergétique musculaire, phosphocréatine, glycolyse lactique et acide iodo-acétique (p. 43-45)',
      'Exercice 20 : Mécanisme moléculaire du sarcomère, troponine, tropomyosine et VO2 max à l\'effort (p. 46-49)',
      'Exercice 21 : Typologie des fibres musculaires rouges (aérobie) vs fibres pâles (anaérobie) (p. 50-51)',
      'Exercice 22 : Adaptation cardiovasculaire lors d\'une course-poursuite chien-chat et adrénaline (p. 53-55)',
      'Exercice 23 : Greffe cardiaque et régulation hormonale par catécholamines à l\'effort (p. 55-58)',
      'Exercice 24 : Circulations céphaliques croisées chez le chien et chémorécepteurs au CO2 (p. 58-61)',
      'Exercice 25 : Baroréflexe carotidien, nerfs de Hering et Cyon, expériences de ligature en amont/aval (p. 61-62)',
      'Exercice 26 : Hypertension rénovasculaire et système rénine-angiotensine-aldostérone (p. 62-63)',
      'Exercice 27 : Néphron, filtration glomérulaire, réabsorption d\'eau (99,2%) et de glucose (p. 65-66)',
      'Exercice 28 : Expériences de Claude Bernard, hépatectomie et glycogénolyse hépatique (p. 68-72)',
      'Exercice 29 : Pancréatectomie, alloxane, diéthylthiocarbamate et greffe de pancréas au cou (p. 72-76)',
      'Exercice 30 : Biopsies hépatiques du glycogène lors du jeûne et cellules α des îlots de Langerhans (p. 76-78)',
      'Exercice 31 : RIMH, différenciation des lymphocytes B en plasmocytes et neutralisation par anticorps (p. 80-82)',
      'Exercice 32 : RIMC, double reconnaissance du soi (CMH I) et non-soi par les LT (Zinkernagel) (p. 82-83)',
      'Exercice 33 : Cinétique des anticorps maternels A1 et néonataux A2 et mémoire immunitaire (p. 83-85)',
      'Exercice 34 : Rejet de greffe cutanée chez la souris, rôle du thymus et coopération LT4-LT8-macrophages (p. 86-88)',
      'Exercice 35 : Autogreffes, allogreffes, souris nudes athymiques et tolérance fœtale HLA-G/KIR (p. 88-90)',
      'Exercice 36 : Réponse immunitaire primaire vs secondaire et mémoire immunitaire (p. 90-92)',
      'Exercice 37 : Infection par le VIH, corécepteur CCR5 et résistance génétique des homozygotes RR (p. 92-95)',
      'Exercice 38 : Cytotoxicité des LTc par sécrétion de perforines et sérologie de la syphilis (p. 95-97)',
      'Exercice 39 : Dosage quotidien de LH, stérilité féminine et traitement inducteur par le clomifène (p. 99-101)',
      'Exercice 40 : Glaire cervicale, cycle sexuel féminin et contraception par microprogestatif norgestriénone (p. 101-104)',
      'Exercice 50 : Réflexe neuro-endocrinien de lactation chez la brebis (prolactine et ocytocine) (p. 104-106)',
      'Exercice 51 : Tolérance immunitaire fœto-maternelle, molécule HLA-G et récepteurs KIR des NK (p. 106-108)',
      'Exercice 52 : Méiose chez l\'Ascaris (2n=4), métaphase I et II, expulsion des globules polaires (p. 108-110)',
      'Exercice 53 : Rôle de l\'hCG trophoblastique dans le maintien du corps jaune gravidique (p. 110-112)',
      'Exercice 54 : Reproduction des spermaphytes, germination du pollen et double fécondation (p. 114-115)',
      'Exercice 55 : Évolution de la quantité d\'ADN lors de la sporogenèse chez les plantes à fleurs (p. 115-117)',
      'Exercice 56 : Monohybridisme chez le poulet, crête rosacée et allèle létal pattes courtes (p. 119-121)',
      'Exercice 57 : Transplantation nucléaire chez la souris et génétique du pelage (gènes C, D, A, R) (p. 121-125)',
      'Exercice 58 : Gonosomes ZW chez les papillons Aurinia et allèle létal roux (p. 126-128)',
      'Exercice 59 : Dihybridisme chez la drosophile (corps ébony, antennes courtes, yeux bruns) (p. 129-130)',
      'Exercice 60 : Gène lié au sexe chez Lychnis et test-cross chez le maïs (distance 3,597 cM) (p. 131-133)',
      'Exercice 61 : Dihybridisme chez une plante ornementale, linkage absolu vs crossing-over (p. 133-134)',
      'Exercice 62 : Hybridation de lignées pures de pois par Mendel et Lamprecht (p. 134-136)',
      'Exercice 63 : Translocation robertsonienne 14/21 chez la mère et risque de trisomie 21 (p. 138-140)',
      'Exercice 64 : Pedigree familial avec surdi-mutité autosomale et daltonisme lié à l\'X (p. 140-142)',
      'Exercice 65 : Liaison génétique entre groupe sanguin ABO et ostéo-arthro-onychodysplasie (p. 142-144)',
      'Exercice 66 : Arbre généalogique et diagnostic prénatal d\'une maladie récessive liée à l\'X (p. 144-145)',
      'Exercice 67 : Électrophorèse de l\'enzyme G6PD et détection des syndromes de Klinefelter et Turner (p. 145-146)'
    ],
    sampleNewUntreatedSubjects: [
      'Exercice de synthèse Bac S2 : « Rôle coordonné du néphron et du système rénine-angiotensine-aldostérone lors d\'une déshydratation aiguë chez un sujet exposé à une forte chaleur. »',
      'Exercice de génétique médicale : « Analyse d\'un pedigree et d\'une électrophorèse d\'ADN pour l\'hémophilie A avec estimation bayésienne du risque pour la descendance d\'une conductrice. »',
      'Exercice de neurophysiologie comparée : « Comparaison des modes d\'action de la toxine tétanique (inhibition présynaptique du GABA/glycine) et du curare sur la motricité striée. »'
    ]
  },
  {
    id: 'fascicule-svt-tled-c-adouko-ci',
    title: 'Recueil d\'exercices SVT Terminale D & C — M. ADOUKO Topo Désiré (Côte d\'Ivoire)',
    author: 'M. ADOUKO Topo Désiré, Professeur de Lycée SVT',
    roleOrAffiliation: 'Professeur de Lycée SVT, Collège Moderne La Colombe (Abidjan, Côte d\'Ivoire)',
    countryOrigin: 'Côte d\'Ivoire (Programme Officiel SVT Terminales D & C)',
    discipline: 'svt',
    disciplineLabel: 'SVT Terminales D & C — Recueil Complet d\'Exercices Corrigés (M. ADOUKO Topo Désiré)',
    badgeColor: 'emerald',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['D', 'C', 'S1', 'S2'],
    publicationYear: 2017,
    coverDescription: 'Ouvrage de référence pédagogique ivoirien de 318 pages conçu par M. ADOUKO Topo Désiré (Collège Moderne La Colombe, Abidjan). Il couvre l\'intégralité des 11 grands domaines officiels du Baccalauréat Séries D et C avec énoncés intégraux et corrigés modèles détaillés : 1. Géologie des gisements miniers et pétroliers (or d\'Ity, Angovia, Yaouré, Afema, bauxites/latérites, kérogène et hydrocarbures, prospection géochimique et géophysique, bâtée) ; 2. Pédologie et amélioration des sols (NPK, loi du minimum de Liebig, Sesbania rostrata, Rhizobium, humus, amendements calcaires, chaux vive, marnes, turricules de vers de terre, pollution aux nitrates, terrasses) ; 3. Nutrition, sang, milieu intérieur et homéostasie (néphron, filtration glomérulaire, réabsorption tubulaire, ADH/vasopressine, aldostérone, volémie, surrénalectomie) ; 4. Régulation de la glycémie et diabètes (foie tampon, insuline, glucagon, adrénaline, alloxane, seuil rénal 1,75 g/L) ; 5. Activité cardiaque et régulation de la pression artérielle (automatisme, tissu nodal, pacemaker, cardiogramme, ECG, nerf vague X cardiomodérateur, orthosympathique cardioaccélérateur, acétylcholine, noradrénaline, baroréflexe de Hering) ; 6. Immunologie et SIDA (moelle osseuse, thymus, CMH/HLA, différenciation LB -> plasmocyte, phagocytose, anatoxine vs toxine, sérovaccination, classes d\'Ig, coopération cellulaire, rejet de greffes, VIH/SIDA avec gp120, CD4, CCR5, transcriptase inverse, AZT, ELISA, Western Blot) ; 7. Reproduction chez les mammifères (spermatogenèse, ovogenèse, folliculogenèse, cycles ovarien/utérin, dentelle utérine, rétrocontrôles, pilule, fécondation, caryogamie, blocage polyspermie, nidation, régulation testiculaire) ; 8. Reproduction chez les spermaphytes (grain de pollen, sac embryonnaire, double fécondation avec embryon 2n et albumen 3n) ; 9. Communication nerveuse et réflexes (potentiels de repos -70 mV, PA, vitesse, conduction saltatoire, rhéobase, chronaxie, période réfractaire, transmission synaptique, curare, GABA, nicotine/diazépam, réflexe myotatique, conditionnement de Pavlov et David de Wied) ; 10. Muscle squelettique et production d\'énergie (sarcomère, glissement actine/myosine, Ca2+, ATP, voies de régénération, respiration mitochondriale 38 ATP, fermentation lactique et alcoolique du tchapalo) ; 11. Génétique et amélioration des espèces (clonage de Gurdon chez le Xénope, vaches laitières, hybridation et hétérosis/vigueur hybride, FIVETE, monohybridisme, dihybridisme, gènes liés, génétique humaine).',
    keyConcepts: [
      'Géologie minière et pétrolière : gisements primaires magmatiques/filoniens (Angovia) vs secondaires résiduels d\'altération météorique (Ity à Danané)',
      'Prospection géochimique de l\'or : prélèvements alluvionnaires tous les 2 km, préparation sur tamis, dosage à la rhodamine, courbes isovaleurs et anomalies minières',
      'Genèse des hydrocarbures : matière organique piégée dans bassins subsidents en milieu réducteur -> kérogène -> rupture thermique des chaînes latérales -> pétrole (CnH2n+2) entre 1800 et 3500 m (fenêtre à huile à 104°C)',
      'Pédologie et engrais : classification NPK (unités fertilisantes UF par 100 kg), loi du minimum de Liebig (le phosphore facteur limitant), amendements calcaires (chaux vive CaO, marnes) et ponts calciques sur le CAH',
      'Symbiose fixatrice d\'azote : nodosités racinaires à Rhizobium et leghémoglobine chez les légumineuses (Sesbania rostrata, soja) fournissant jusqu\'à 200 kg N/ha sans engrais chimique',
      'Rôle écologique des vers de terre : turricules enrichis en Ca2+, Mg2+, K+, NO3- et pH neutralisé (pH 7 contre 6,4 dans le sol non travaillé)',
      'Homéostasie du milieu intérieur : néphron (filtration glomérulaire 125 mL/min = 180 L/24h), réabsorption tubulaire active de Na+ (contrôlée par l\'aldostérone des corticosurrénales) et d\'eau (contrôlée par l\'ADH/vasopressine post-hypophysaire)',
      'Glycémie et seuil rénal : réabsorption totale du glucose jusqu\'à la glycémie seuil de 1,75 g/L ; au-delà, apparition de glycosurie osmotique',
      'Activité cardiaque et automatisme : nœud sinusal (pacemaker entraîneur 70-80 bat/min) -> nœud septal -> faisceau de His -> réseau de Purkinje. Échappement vagal par hydrolyse de l\'acétylcholine par l\'acétylcholinestérase',
      'Baroréflexe carotidien : ligature basse des carotides -> chute de pression au sinus -> stimulation sympathique -> tachycardie. Ligature haute -> surpression -> stimulation du nerf de Hering -> inhibition bulbaire -> bradycardie',
      'Immunologie et SIDA : différenciation LB -> plasmocyte avec développement majeur de l\'ergastoplasme et dictyosomes. VIH : fixation gp120 sur CD4 et CCR5, pénétration, transcriptase inverse, intégration provirale, bourgeonnement, lymphopénie T4',
      'Reproduction mammifères : phase folliculaire (œstradiol) -> pic d\'œstradiol -> rétrocontrôle positif -> pic de LH -> ovulation -> phase lutéale (progestérone et œstradiol). Dentelle utérine sous action séquentielle œstradiol puis progestérone',
      'Contraception hormonale : pilules combinées normodosées maintenant un taux constant d\'œstrogène-progestatif exerçant un rétrocontrôle négatif permanent bloquant les pics de LH/FSH et l\'ovulation',
      'Double fécondation des Angiospermes : 2 anthérozoïdes issus de la mitose du noyau reproducteur ; anthérozoïde 1 + oosphère = œuf principal (2n) donnant l\'embryon ; anthérozoïde 2 + 2 noyaux centraux = œuf accessoire (3n) donnant l\'albumen',
      'Neurophysiologie : potentiel de repos (-70 mV), potentiel d\'action monophasique et diphasique (symétrique si électrodes écartées, asymétrique chevauchant si rapprochées), conduction saltatoire, période réfractaire absolue et relative',
      'Pharmacologie synaptique : curare bloquant compétitivement les récepteurs à acétylcholine de la plaque motrice ; GABA inhibiteur provoquant l\'ouverture des canaux Cl- (PPSI) potentialisé par les benzodiazépines',
      'Muscle et énergétique : sarcomère, glissement actine-myosine démasqué par Ca2+ fixé sur la troponine, hydrolyse d\'ATP ; régénération par phosphocréatine (myokinase), fermentation lactique et respiration aérobie (38 ATP/glucose)',
      'Fermentation alcoolique : préparation traditionnelle du tchapalo (bière de mil de Katiola) par germination de mil (amylase transformant l\'amidon en glucose) puis fermentation anaérobie par Saccharomyces cerevisiae',
      'Amélioration génétique : clonage par transplantation nucléaire chez le Xénope (Gurdon) et bovins (reproduction conforme de clones) ; hybridation et vigueur hybride (hétérosis du porc charcutier et caféier arabusta)',
      'Génétique humaine : analyse rigoureuse de pedigrees pour la galactosémie (enzyme de transformation du galactose 1-P en glucose 1-P), l\'ataxie télangiectasie, la maladie de Recklinghausen, le rachitisme vitamino-résistant, le daltonisme et le favisme'
    ],
    methodologicalHighlights: [
      {
        name: 'Calcul du Facteur de Concentration et de Rentabilité Minière',
        description: 'Méthode d\'évaluation quantitative de l\'anomalie minière.',
        keyRules: [
          'Formule : Facteur de concentration FC = TM / Tc (où TM = teneur du métal dans le minerai en exploitation, Tc = teneur moyenne normale dans la croûte terrestre).',
          'Teneur dans une tonne de minerai : TM = Tc x FC. Exemple pour l\'or : Tc = 0,0000002 % (0,002 g/t), FC = 4000 -> TM = 8 g/t de minerai.',
          'Condition de minerai : une forte concentration ne suffit pas ; l\'exploitation doit être économiquement rentable (seuil de rentabilité en fonction du cours mondial et des coûts d\'extraction).'
        ]
      },
      {
        name: 'Interprétation du Bilan Glucidique et du Seuil Rénal du Glucose',
        description: 'Protocole de diagnostic fonctionnel rénal et pancréatique.',
        keyRules: [
          'Chez le sujet sain, la réabsorption tubulaire du glucose par cotransport Na+/glucose est totale (100%) tant que la charge filtrée ne dépasse pas la capacité maximale de transport tubulaire (TmG).',
          'Seuil rénal normal : 1,70 à 1,75 g/L (environ 10 mmol/L). En deçà, glycosurie = 0. Au-delà, la capacité de réabsorption est saturée, le glucose excédentaire est éliminé dans l\'urine définitive, entraînant une polyurie osmotique.'
        ]
      },
      {
        name: 'Calcul de l\'Hétérosis ou Vigueur Hybride',
        description: 'Quantification du gain de productivité chez les hybrides F1.',
        keyRules: [
          'Formule : H = GMQ(hybride) - [GMQ(Parent A) + GMQ(Parent B)] / 2.',
          'Exemple du porc charcutier (Exercice 3 & 11) : GMQ(A) = 850 g/j, GMQ(B) = 730 g/j, Moyenne parentale = (850 + 730)/2 = 790 g/j. GMQ(Hybride F1) = 830 g/j -> Hétérosis H = 830 - 790 = +40 g/j.',
          'Intérêt agronomique : combinaison des aptitudes parentales complémentaires (qualité de viande, vitesse de croissance, résistance).'
        ]
      }
    ],
    coreKnowledgeExcerpt: `RECUEIL SVT TERMINALE D & C — M. ADOUKO TOPO DÉSIRÉ (Collège Moderne La Colombe, Abidjan) :
1. Géologie et gisements miniers (Ex. 1 à 19) :
- Gisements primaires : formés directement par les processus magmatiques endogènes (cristallisation fractionnée, pegmatites riches en béryllium/lithium/étain, filons pneumatolytiques et hydrothermaux aurifères d'Angovia à Bouaflé avec gangue de quartz).
- Gisements secondaires : formés par altération météorique de surface sous climat tropical humide (gîte résiduel d'or d'Ity à Danané piégé dans les roches latéritiques et argileuses ; bauxites alumineuses issues de l'altération de roches calcaires ou silicatées ; placers alluvionnaires de Yaouré exploités à la bâtée par séparation densimétrique).
- Pétrole et gaz : bassin sédimentaire subsident en milieu réducteur anaérobie -> sédiments argileux riches en plancton -> formation de kérogène -> craquage thermique des liaisons chimiques sous l'effet du gradient géothermique (30°C par 1000 m) produisant des hydrocarbures liquides (huile) et gazeux -> migration primaire hors de la roche-mère -> migration secondaire vers une roche-réservoir poreuse et perméable (grès, calcaire fissuré) piégée sous une couverture imperméable (argile, sel, pièges anticlinaux ou failles). En laboratoire, la pyrolyse à 450°C compense le facteur temps géologique (12 millions d'années à 104°C). Prospection par sismique réflexion marine (hydrophones) et forages.

2. Pédologie et amélioration des sols (Ex. 1 à 18 Pédologie) :
- Éléments fertilisants majeurs NPK : Azote N (croissance végétative foliaire sous forme NO3- nitrique mobile ou NH4+ ammoniacal fixé sur le CAH), Phosphore P (racines, floraison, fructification sous forme H2PO4- ou P2O5), Potassium K (résistance, turgescence, régulation osmotique sous forme K+).
- Formule d'engrais NPK 14-12-16 UF : signifie que 100 kg d'engrais apportent 14 kg de N pur, 12 kg de P2O5 et 16 kg de K2O.
- Loi du minimum (Liebig) : la croissance des végétaux est limitée par l'élément nutritif le plus déficitaire par rapport aux besoins de la plante (facteur limitant).
- Amendements calcaires : la chaux vive (CaO + H2O -> Ca(OH)2 -> Ca2+ + 2 OH-) et les marnes (CaCO3) neutralisent les sols acides tropicaux en remplaçant les ions H+ fixés sur le complexe argilo-humique (CAH) par des ions Ca2+ (ponts calciques), formant de l'eau avec les OH- et relevant le pH.
- Rôle des vers de terre : digestion du sol et production de turricules riches en matières minérales échangeables (Ca2+, Mg2+, K+, NO3-) et en humus, avec remontée du pH à la neutralité (pH 7).
- Légumineuses et symbiose : bactéries Rhizobium spécifiques formant des nodosités sur les racines de soja ou de Sesbania rostrata. Synthèse de la leghémoglobine assurant un milieu micro-aérobie protecteur de la nitrogénase, convertissant le N2 atmosphérique en NH4+ et acides aminés. L'enfouissement de Sesbania rostrata en rizière apporte 200 kg N/ha, doublant le rendement du riz sans frais d'engrais chimique.

3. Milieu intérieur, néphron et homéostasie (Ex. 1 à 16 Nutrition) :
- Rôles du néphron : filtration glomérulaire non sélective (débit 125 mL/min soit 180 L/24h de filtrat sans protéines macromoléculaires ni lipides) ; réabsorption tubulaire sélective active (glucose réabsorbé à 100% tant que glycémie < 1,75 g/L ; sodium réabsorbé sous l'action de l'aldostérone) et passive (eau réabsorbée à 99,2% sous l'action de l'ADH vasopressine) ; sécrétion tubulaire (ammoniac, ions H+, K+) et excrétion terminale de l'urée concentrée.
- Régulation de l'eau : baisse de volémie ou hausse de la pression osmotique -> stimulation des osmorécepteurs hypothalamiques -> sécrétion d'ADH par la post-hypophyse -> augmentation de la perméabilité des tubes collecteurs de Bellini à l'eau -> réabsorption accrue d'eau et oligurie concentrée.
- Régulation du sodium : baisse de la natrémie ou hypovolémie -> sécrétion de rénine par l'appareil juxtaglomérulaire rénal -> conversion de l'angiotensinogène en angiotensine -> sécrétion d'aldostérone par la corticosurrénale -> réabsorption tubulaire de Na+ dans le tube contourné distal. Surrénalectomie bilatérale -> fuite urinaire massive de Na+, rétention de K+, baisse de la pression osmotique plasmatique et polyurie mortelle (corrigée par injection d'extraits corticosurrénaux).

4. Activité cardiaque et régulation de la pression artérielle (Ex. 1 à 14 Activité Cardiaque) :
- Automatisme cardiaque intrinsèque : myogène, siégeant dans le tissu nodal (nœud sinusal de Keith et Flack = pacemaker entraîneur -> nœud septal d'Aschoff-Tawara -> faisceau de His -> réseau de Purkinje). Les cellules nodales présentent une dépolarisation lente spontanée diastolique (potentiel pacemaker) liée à une baisse de perméabilité à K+ et entrée de Na+/Ca2+.
- Révolution cardiaque (0,75 s) : systole auriculaire (0,15 s), systole ventriculaire (0,20 s), diastole générale (0,40 s ou 0,60 s auriculaire) -> le cœur se repose plus qu'il ne travaille.
- Innervation cardiaque : nerf vague pneumogastrique X (parasympathique à acétylcholine, cardiomodérateur et hypotenseur ; phénomène d'échappement vagal par hydrolyse rapide de l'ACh par l'acétylcholinestérase) vs nerfs cardiaques sympathiques (orthosympathique à noradrénaline, cardioaccélérateur et hypertenseur).
- Baroréflexe de Hering et Cyon : barorécepteurs du sinus carotidien et de la crosse aortique. Hausse de PA -> influx afférents par le nerf de Hering -> bulbe cardio-modérateur excité et centre vasomoteur inhibé -> bradycardie et vasodilatation rétablissant la pression.

5. Immunologie et infection par le VIH (Ex. 1 à 12 Immunologie & SIDA) :
- Coopération cellulaire dans la RIMH : capture et apprêtement de l'antigène par le macrophage (CPAg) -> présentation sur CMH II aux récepteurs TCR des LT4 -> sécrétion d'interleukines (IL-1 par macrophage, IL-2 par LT4) -> expansion clonale des LB -> différenciation en plasmocytes volumineux riches en ergastoplasme granuleux et dictyosomes -> synthèse et sécrétion d'anticorps circulants.
- Cinétique des anticorps : réponse primaire lente (phase de latence 7 jours, anticorps IgM puis IgG à titre modéré) vs réponse secondaire rapide, intense et durable (titre très élevé en IgG grâce aux lymphocytes B mémoires).
- Infection par le VIH : rétrovirus à ARN enveloppé. La glycoprotéine gp120 se fixe sur la molécule CD4 des LT4, macrophages et monocytes, et sur le corécepteur CCR5. Pénétration par fusion membranaire médiée par gp41 -> rétrotranscription de l'ARN viral en ADN proviral par la transcriptase inverse (bloquée par l'AZT) -> intégration dans l'ADN cellulaire par l'intégrase -> latence clinique asymptomatique (équilibre virus/anticorps anti-gp120 et anti-p24) -> échappement viral et effondrement des LT4 (< 200/mm3) -> stade SIDA déclaré avec infections opportunistes.

6. Reproduction des Mammifères & Spermaphytes (Ex. 1 à 17 Reproduction) :
- Régulation testiculaire : GnRH pulsatile -> LH stimulant les cellules de Leydig (sécrétion de testostérone stimulant les caractères sexuels secondaires et la spermatogenèse) ; FSH stimulant les cellules de Sertoli (sécrétion d'ABP fixatrice d'androgènes et d'inhibine). Rétrocontrôle négatif de la testostérone sur LH/GnRH et de l'inhibine sur FSH.
- Régulation ovarienne : phase folliculaire (FSH induit la croissance folliculaire ; sécrétion croissante d'œstradiol exerçant un rétrocontrôle négatif limitant le nombre de follicules) -> pic d'œstradiol (>200 pg/mL pendant 36h) à J12-13 déclenchant un rétrocontrôle positif -> pic aigu de LH (décharge ovulante) à J14 provoquant l'ovulation et la lutéinisation -> corps jaune sécrétant progestérone et œstradiol (phase lutéinique avec rétrocontrôle négatif inhibant toute nouvelle ovulation). En l'absence de fécondation, régression du corps jaune à J28 -> chute hormonale -> desquamation de l'endomètre (menstruation).
- Fécondation humaine : rencontre dans le tiers supérieur de la trompe (ampoule) -> traversée du cumulus oophorus et réaction acrosomique -> perforation de la zone pellucide -> fusion des membranes -> blocage précoce de la polyspermie par dépolarisation membranaire, puis blocage tardif par exocytose des granules corticaux durcissant la zone pellucide -> réveil physiologique de l'ovocyte II et achèvement de l'anaphase II avec expulsion du 2e globule polaire -> gonflement des noyaux en pronucléus mâle et femelle -> caryogamie rétablissant la diploïdie 2n=46 -> segmentation (morula puis blastocyste) et nidation dans la dentelle utérine au 7e jour.

7. Neurophysiologie, réflexe myotatique & muscle strié (Ex. 1 à 43 Communication) :
- Potentiel d'action monophasique (enregistré entre une microélectrode intracellulaire et une électrode de référence extracellulaire) : potentiel de repos à -70 mV ; artéfact de stimulation ; temps de latence ; dépolarisation ascendante brutale jusqu'à +35 mV (entrée massive de Na+ par ouverture des canaux voltage-dépendants) ; repolarisation descendante (fermeture des canaux Na+ et ouverture des canaux K+ avec sortie d'ions K+) ; hyperpolarisation transitoire (maintien de l'ouverture des canaux K+) ; restauration par la pompe Na+/K+ ATPase.
- Potentiel d'action diphasique (deux électrodes à la surface du nerf) : symétrique si les électrodes sont suffisamment éloignées (deux déviations de sens inverse séparées par un retour à la ligne isoélectrique) ; asymétrique si les électrodes sont rapprochées (chevauchement des phases de dépolarisation).
- Réflexe myotatique rotulien/achilléen : étirement du muscle extenseur -> excitation des fuseaux neuromusculaires codée en modulation de fréquence -> fibres afférentes sensitives Ia cheminant par la racine dorsale -> synapse excitatrice directe sur le motoneurone alpha de la corne antérieure médullaire (délai monosynaptique) -> contraction du muscle extenseur homolytique. Simultanément, collatérale activant un interneurone inhibiteur à GABA relâchant le muscle fléchisseur antagoniste (innervation réciproque).

8. Génétique formelle et humaine (Ex. 1 à 11 Amélioration des espèces & Génétique) :
- Clonage chez le Xénope (expérience historique de John Gurdon, 1960) : irradiation UV d'ovules de crapaud sauvage brun-vert (énucléation) + transplantation du noyau d'une cellule intestinale de têtard albinos -> obtention de grenouilles adultes toutes albinos et de même sexe. Prouve la totipotence génétique des noyaux somatiques différenciés et que l'information héréditaire réside exclusivement dans le noyau.
- Hétérosis chez le porc charcutier et le caféier arabusta : supériorité de l'hybride F1 sur les deux parents de race pure pour la vigueur, la productivité et la résistance.
- Analyse méthodique de pedigrees : galactosémie autosomique récessive (déficit en enzyme GALT), rachitisme vitamino-résistant dominant lié au chromosome X (un père atteint transmet l'anomalie à 100% de ses filles et à 0% de ses fils car il ne transmet que son chromosome Y aux garçons).`,
    sampleInBookletSubjects: [
      'Exercice 1 Géologie : Gisements aurifères d\'Angovia (filonien hydrothermal) et d\'Ity (résiduel d\'altération) (p. 3)',
      'Exercice 4 Géologie : Facteur de concentration des métaux, anomalie minière et seuil de rentabilité économique (p. 4-5)',
      'Exercice 10-12 Géologie : Bassin sédimentaire subsident, kérogène, fenêtre à huile et sismique réflexion (p. 7-9)',
      'Exercice 1 Pédologie : Engrais NPK (14-12-16 UF), loi du minimum de Liebig et phosphore facteur limitant (p. 28)',
      'Exercice 2-3 Pédologie : Nodosités racinaires à Rhizobium et leghémoglobine fixatrice d\'azote chez le soja (p. 29-30)',
      'Exercice 6-7 Pédologie : Amendements calcaires (chaux vive CaO, marnes) et association pailles/engrais verts (p. 31-32)',
      'Exercice 14 Pédologie : Rôle des turricules de vers de terre dans la fertilité minérale et la neutralisation du sol (p. 36)',
      'Exercice 1 Nutrition : Schéma et fonctionnement du néphron, diurèse et pression osmotique après ingestion d\'eau (p. 54-55)',
      'Exercice 2-3 Nutrition : Surrénalectomie, réabsorption tubulaire de Na+, polyurie et régulation par l\'ADH et l\'aldostérone (p. 55-57)',
      'Exercice 5-7 Glycémie : Seuil rénal du glucose (1,75 g/L), adrénaline et régulation hormonale insuline/glucagon (p. 57-58)',
      'Exercice 1-3 Cœur : Automatisme du sinus veineux, cardiographe à balancier et durée d\'une révolution cardiaque (p. 77-78)',
      'Exercice 6-10 Cœur : Échappement vagal à l\'acétylcholine, perfusion de Loewi et baroréflexe du nerf de Hering (p. 80-84)',
      'Exercice 1-3 Immunologie : Rôles respectifs de la moelle osseuse et du thymus, CMH/HLA et différenciation des plasmocytes (p. 98-99)',
      'Exercice 4-8 Immunologie : Phagocytose, sérovaccination antitétanique et cinétique comparée des anticorps sériques/vaccinaux (p. 99-103)',
      'Exercice 1-6 SIDA : Mode d\'infection des cellules CD4/CCR5 par le VIH, cycles de réplication et tests ELISA/Western Blot (p. 125-129)',
      'Exercice 1-4 Reproduction : Rencontre des gamètes, blocage de la polyspermie, caryogamie et dentelle utérine (p. 144-147)',
      'Exercice 7-13 Reproduction : Rétrocontrôle testiculaire (testostérone/inhibine), clomifène et mode d\'action des pilules combinées (p. 150-155)',
      'Exercice 1-9 Spermaphytes : Germination du pollen, structure du sac embryonnaire et double fécondation des Angiospermes (p. 172-176)',
      'Exercice 1-15 Communication : Potentiel de repos (-70 mV), PA monophasique/diphasique, rhéobase, chronaxie et vitesse de l\'influx (p. 187-196)',
      'Exercice 24-28 Communication : Action du curare à la plaque motrice, synapses inhibitrices à GABA et benzodiazépines (p. 203-207)',
      'Exercice 32-34 Communication : Réflexe myotatique rotulien, motoneurone alpha, sommation spatiale et temporelle des PPSE (p. 210-212)',
      'Exercice 1-13 Muscle : Ultrastructure du sarcomère, actine/myosine, rôle du Ca2+ et de l\'ATP, secousse et tétanos (p. 248-257)',
      'Exercice 16-23 Muscle & Énergie : Régénération de l\'ATP, créatine-phosphate, glycolyse, cycle de Krebs et fermentation du tchapalo (p. 257-265)',
      'Exercice 1-4 Amélioration : Clonage par transplantation nucléaire chez le Xénope (Gurdon) et vigueur hybride (hétérosis) (p. 296-298)',
      'Exercice 5-11 Génétique Humaine : Arbres généalogiques de la galactosémie, rachitisme vitamino-résistant lié à X, daltonisme et favisme (p. 307-316)'
    ],
    sampleNewUntreatedSubjects: [
      'Sujet Bac Série D : « Mécanismes moléculaires de la fertilisation des sols ferrallitiques tropicaux par l\'association légumineuses-Rhizobium et régulation du complexe argilo-humique. »',
      'Sujet Bac Série C/D : « Analyse comparée de la régulation de la volémie et de la pression artérielle par le système RAA et l\'hormone antidiurétique chez un grand brûlé. »',
      'Sujet Bac Expérimental : « Diagnostic de transmission d\'une anomalie enzymatique liée au sexe par l\'analyse combinée d\'un pedigree et d\'une carte de restriction d\'ADN. »'
    ]
  },
  {
    id: 'recueil-qcm-svt-bac-alouane-mbarek',
    title: 'Collection SVT : QCM SVT BAC — Alouane MBAREK (Inspecteur Principal de l\'E.S)',
    author: 'Alouane MBAREK, Inspecteur Principal de l\'Enseignement Secondaire',
    roleOrAffiliation: 'Inspecteur Principal de l\'E.S, Spécialiste des Épreuves de Baccalauréat Scientifique',
    countryOrigin: 'Tunisie / Espace Francophone (Baccalauréat Scientifique SVT)',
    discipline: 'svt',
    disciplineLabel: 'QCM SVT BAC — Des centaines de QCM Officiels & Corrigés Détaillés (Alouane MBAREK)',
    badgeColor: 'amber',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    series: ['D', 'C', 'S1', 'S2', 'Sciences Expérimentales'],
    publicationYear: 2018,
    coverDescription: 'Ouvrage didactique de 179 pages rédigé par Alouane MBAREK, Inspecteur Principal de l\'Enseignement Secondaire. Ce recueil complet de validation et d\'auto-évaluation regroupe des centaines de QCM officiels classés par thèmes couvrant les programmes des sections Sciences Expérimentales et Séries Scientifiques du Baccalauréat, avec corrigés intégraux, grilles de correction et justifications rigoureuses : 1. Reproduction humaine : fonction reproductrice chez l\'homme (QCM 1 à 83, spermatogenèse, Sertoli, Leydig, LH/FSH, testostérone, rétrocontrôle négatif) et chez la femme (QCM 1 à 145, ovogenèse, folliculogenèse, cycles ovarien/utérin, œstradiol, progestérone, rétrocontrôles, décharge ovulante, contraception, fécondation, caryogamie, nidation, FIVETE) ; 2. Génétique : brassage génétique et dihybridisme (QCM 1 à 43, méiose, crossing-over, brassages inter et intrachromosomiques, lois de Mendel, test-cross) et génétique humaine (QCM 1 à 54, pedigrees, mucoviscidose, daltonisme, hémophilie, myopathie de Duchenne, caryotypes, trisomie 21, Klinefelter, Turner, système HLA) ; 3. Évolution biologique (QCM 1 à 6, sélection naturelle, mutations, spéciation) ; 4. Neurophysiologie : tissu nerveux (QCM 1 à 28), réflexe myotatique (QCM 1 à 147, potentiels récepteurs, PA, PPSE/PPSI, sommation temporelle/spatiale, synapses), muscle squelettique (QCM 1 à 30, sarcomère, troponine, ATP, créatine-phosphate) et régulation de la pression artérielle (QCM 1 à 30, barorécepteurs, Hering, Cyon, nerf X, orthosympathique) ; 5. Immunologie : immunité spécifique (QCM 1 à 138, cellules de l\'immunité, CMH I/II, RIMH, RIMC, interleukines, allogreffes) et dysfonctionnements (QCM 139 à 148, allergie immédiate, mastocytes/IgE, VIH/SIDA).',
    keyConcepts: [
      'Reproduction masculine (QCM 1-83) : spermatogenèse centripète continue dans les tubes séminifères (74 jours) ; cellules de Leydig interstitielles sous contrôle LH produisant la testostérone à taux pulsatile régulé ; cellules de Sertoli sous FSH produisant l\'inhibine et l\'ABP',
      'Rétrocontrôle testiculaire : la testostérone exerce un rétrocontrôle négatif sur l\'axe hypothalamo-hypophysaire (LH et GnRH) ; l\'inhibine exerce un rétrocontrôle négatif spécifique sur la FSH. Il n\'y a jamais de rétrocontrôle positif chez le mâle',
      'Reproduction féminine (QCM 1-145) : ovogenèse discontinue initiée in utero, bloquée en prophase I jusqu\'à la puberté puis en métaphase II jusqu\'à la fécondation ; folliculogenèse (primordial -> primaire -> secondaire -> cavitaire/tertiaire -> mûr de De Graaf)',
      'Décharge ovulante : un taux élevé d\'œstradiol (> 200 pg/mL pendant plus de 36h en fin de phase folliculaire) inverse le rétrocontrôle de négatif en positif, déclenchant le pic massif de LH (et FSH) provoquant l\'ovulation à J14',
      'Contraception hormonale féminine : la pilule combinée (œstrogène + progestatif) maintient un freinage négatif permanent sur l\'hypophyse, supprimant les pics de FSH/LH, empêchant la maturation folliculaire et l\'ovulation ; elle atrophie l\'endomètre et rend la glaire cervicale imperméable',
      'Brassage méiotique (QCM 1-43) : brassage intrachromosomique par crossing-over (chiasmas entre chromatides non-sœurs des bivalents en prophase I) ; brassage interchromosomique par ségrégation aléatoire des chromosomes homologues en anaphase I (2^n combinaisons gamétiques)',
      'Génétique humaine et pedigrees (QCM 1-54) : critères d\'exclusion formels (Y, récessif lié à X, dominant lié à X, autosomique) ; risque de transmission d\'allèles récessifs accrus par la consanguinité ; non-disjonction méiotique en anaphase I ou II à l\'origine des aneuploïdies (trisomies, monosomies)',
      'Système nerveux (QCM 1-28) : neurones avec corps cellulaire en substance grise/ganglions et axone myélinisé en substance blanche/nerfs ; cellules gliales nourricières et isolantes (gaine de Schwann et oligodendrocytes)',
      'Réflexe myotatique et synapses (QCM 1-147) : fuseau neuromusculaire = récepteur sensoriel émettant un potentiel de récepteur gradué codé en amplitude converti au site générateur en potentiels d\'action codés en fréquence. Synapses excitatrices (PPSE par entrée de Na+) vs inhibitrices (PPSI par entrée de Cl- via GABA/glycine) ; intégration par sommation temporelle et spatiale au cône axonique',
      'Contraction musculaire (QCM 1-30) : myogramme élémentaire (latence, contraction, relâchement). Myofibrille striée : disque sombre A anisotrope constant, disques clairs I isotropes réduits, strie Z centrale rapprochée, zone H rétrécie. Têtes de myosine hydrolysant l\'ATP en présence de Ca2+ libéré par les citernes du réticulum sarcoplasmique',
      'Régulation de la pression artérielle (QCM 1-30) : baroréflexe bulbaire. Hypertension -> stimulation des barorécepteurs -> influx afférents de Hering/Cyon -> excitation du centre cardiomodérateur bulbaire (nerf X parasympathique libérant l\'acétylcholine -> bradycardie et baisse de PA) et inhibition du centre cardioaccélérateur médullaire orthosympathique (noradrénaline)',
      'Immunologie spécifique (QCM 1-138) : reconnaissance de l\'antigène (BCR pour les LB, TCR restreint au CMH pour les LT) ; coopération cellulaire par interleukines (IL1 macrophagique, IL2 sécrétée par les LTh/LT4 activés) ; RIMH (plasmocytes et anticorps à deux sites variables Fab et une région constante Fc) ; RIMC (LTc perforant la membrane des cellules infectées)',
      'Dysfonctionnements immunitaires (QCM 139-148) : allergie de type I (sensibilisation avec fixation d\'IgE sur mastocytes -> pontage lors d\'un contact ultérieur -> dégranulation d\'histamine) ; VIH (rétrovirus détruisant spécifiquement les LT4 après liaison gp120/CD4, entraînant le déficit immunitaire acquis et l\'émergence de maladies opportunistes)'
    ],
    methodologicalHighlights: [
      {
        name: 'Grille d\'Analyse Infaillible pour QCM de SVT au Bac',
        description: 'Méthodologie de validation des items à choix multiples conçue par l\'Inspecteur Principal Alouane Mbarek.',
        keyRules: [
          '1. Lecture analytique de la consigne : identifier s\'il s\'agit d\'une réponse unique, de choix multiples, ou d\'identifier les propositions fausses à rectifier.',
          '2. Chasse aux pièges lexicaux : repérer les termes absolus piégeux (« toujours », « jamais », « uniquement », « toutes les cellules »). Exemple : « Le réflexe myotatique n\'est jamais volontaire (Vrai) » vs « La testostérone est sécrétée à taux constant (Faux, sécrétion pulsatile) ».',
          '3. Règle des rétrocontrôles : le mâle n\'exerce qu\'un rétrocontrôle négatif ; chez la femelle, le rétrocontrôle est négatif durant la majorité du cycle mais devient POSITIF transitoirement 24 à 48h avant l\'ovulation lorsque l\'œstradiol dépasse 200 pg/mL.',
          '4. Règle de génétique formelle : un test-cross sur un individu hétérozygote pour deux gènes indépendants donne toujours 4 phénotypes équiprobables (25% chacun) ; si 2 phénotypes parentaux dominent largement (>50%) deux phénotypes recombinés minoritaires, les gènes sont liés avec crossing-over.'
        ]
      },
      {
        name: 'Vérification Rapide des Phénotypes & Anomalies Gonosomiques',
        description: 'Mémento de diagnostic rapide selon l\'ouvrage d\'Alouane Mbarek.',
        keyRules: [
          'Formule chromosomique de Turner : 45, X (44 autosomes + un seul gonosome X). Phénotype féminin stérile.',
          'Formule chromosomique de Klinefelter : 47, XXY (44 autosomes + 2 X + 1 Y). Phénotype masculin stérile avec gynécomastie.',
          'Transmission liée à l\'X récessive (Daltonisme, Hémophilie, Myopathie de Duchenne) : un père atteint ne transmet jamais la tare à ses fils (il leur donne son chromosome Y) ; toutes ses filles sont conductrices obligatoires (hétérozygotes).'
        ]
      }
    ],
    coreKnowledgeExcerpt: `COLLECTION QCM SVT BAC — ALOUANE MBAREK (Inspecteur Principal de l'E.S) :
1. Reproduction chez l'homme (QCM 1 à 83) :
- Les testicules sont des glandes mixtes : fonction exocrine (production de spermatozoïdes dans les tubes séminifères) et fonction endocrine (sécrétion de testostérone dans le sang par les cellules interstitielles de Leydig).
- La cryptorchidie (testicules non descendus dans les bourses) entraîne la stérilité par dégénérescence de la spermatogenèse sensible à la température corporelle interne (37°C), mais conserve les caractères sexuels secondaires car les cellules de Leydig restent fonctionnelles.
- La spermatogenèse se déroule de la paroi vers la lumière du tube séminifère en 4 phases : multiplication des spermatogonies (2n=46) par mitoses -> accroissement en spermatocytes I (2n) -> maturation par méiose (spermatocytes I donnent spermatocytes II à n chromosomes doubles, puis spermatides à n chromosomes simples) -> différenciation ou spermiogenèse (formation de l'acrosome, condensation du noyau, flagelle, élimination du cytoplasme en gouttelette). Durée : environ 74 jours chez l'homme.
- Régulation : GnRH hypothalamique sécrétée par pulses réguliers -> stimulation de l'antéhypophyse qui libère LH et FSH par pulses synchrones -> LH active la sécrétion de testostérone par les cellules de Leydig ; FSH active les cellules de Sertoli pour la synthèse d'ABP et d'inhibine. Rétrocontrôle négatif de la testostérone sur l'hypothalamus et l'hypophyse (freine LH) ; rétrocontrôle négatif de l'inhibine sur l'hypophyse (freine FSH). La castration entraîne l'hypertrophie de l'hypophyse et l'élévation massive de LH et FSH.

2. Reproduction chez la femme et procréation (QCM 1 à 145) :
- L'ovaire assure la gamétogenèse cyclique (ovogenèse) et l'endocrinologie sexuelle (œstrogènes et progestérone).
- Ovogenèse : s'initie durant la vie embryonnaire (multiplication des ovogonies et début de méiose bloquée en prophase I au stade ovocyte I dans les follicules primordiaux). À chaque cycle dès la puberté, une cohorte de follicules évolue. L'ovocyte I achève sa division réductionnelle juste avant l'ovulation pour donner un ovocyte II (bloqué en métaphase II) et un 1er globule polaire. L'ovulation libère un ovocyte II entouré de la zone pellucide et de la corona radiata. La méiose ne s'achève (expulsion du 2e globule polaire et formation de l'ovotide/zygote) qu'EN CAS DE FÉCONDATION.
- Cycle ovarien (28 jours) : phase folliculaire (durée variable, 1 à 14 jours, croissance folliculaire sous FSH, sécrétion croissante d'œstradiol par la thèque interne et la granulosa) -> ovulation à J14 induite par le pic préovulatoire de LH (décharge ovulante) consécutif au rétrocontrôle positif de l'œstradiol (> 200 pg/mL) -> phase lutéinique (durée fixe de 14 jours, transformation du follicule rompu en corps jaune sous l'effet de la LH, sécrétion conjointe de progestérone et d'œstrogènes exerçant un rétrocontrôle négatif freinant FSH et LH). En l'absence de fécondation, le corps jaune régresse en corpus albicans -> chute brutale des hormones ovariennes -> ischémie et nécrose de la couche fonctionnelle de l'endomètre -> règles (menstruation).
- Contraception : les pilules oestro-progestatives combinées apportent des hormones de synthèse maintenant un rétrocontrôle négatif continu sur le complexe hypothalamo-hypophysaire, abolissant les sécrétions cycliques de FSH et LH, bloquant l'ovulation et rendant la glaire cervicale imperméable aux spermatozoïdes.

3. Brassage de l'information génétique & Dihybridisme (QCM 1 à 43) :
- Méiose : 1 cellule diploïde (2n à 2 chromatides) -> 2 cellules haploïdes (n à 2 chromatides) après division réductionnelle I -> 4 cellules haploïdes (n à 1 chromatide) après division équationnelle II.
- Brassage intrachromosomique : crossing-over en prophase I au cours de l'appariement des bivalents (tétrades), échange réciproque de segments de chromatides non-sœurs au niveau des chiasmas.
- Brassage interchromosomique : répartition indépendante et aléatoire des chromosomes homologues d'origine maternelle et paternelle vers les pôles cellulaires en anaphase I (2^n combinaisons possibles sans tenir compte des crossing-over).
- Dihybridisme : deux gènes indépendants donnent en F2 par autofécondation d'hybrides F1 un ratio mendélien 9/16 [AB], 3/16 [Ab], 3/16 [aB], 1/16 [ab] et en test-cross un ratio 1:1:1:1 (25% chacun). Deux gènes liés (linkage) donnent en test-cross une majorité de phénotypes parentaux (> 50%) et une minorité de phénotypes recombinés issus du crossing-over méiotique.

4. Génétique humaine & Anomalies (QCM 1 à 54) :
- Arbre généalogique : caractère récessif si des parents sains ont un enfant atteint ; caractère dominant si chaque individu atteint a au moins un parent atteint et qu'il apparaît sans saut de génération.
- Liaison aux gonosomes : une tare portée par Y ne touche que les hommes et se transmet de père en fils. Une tare récessive liée à l'X (daltonisme, hémophilie, myopathie) touche préférentiellement les hommes (hémizygotes XmY) ; une femme malade (XmXm) a nécessairement un père malade (XmY) et une mère au moins conductrice (XNXm). Une tare dominante liée à l'X touche davantage de femmes ; un homme atteint transmet la maladie à 100% de ses filles et à 0% de ses fils.
- Aneuploïdies : anomalies de nombre par non-disjonction des chromosomes homologues en anaphase I ou des chromatides en anaphase II (Trisomie 21 = 47, XX+21 ou 47, XY+21 ; Syndrome de Klinefelter = 47, XXY ; Syndrome de Turner = 45, X0).

5. Neurophysiologie et réflexe myotatique (QCM 1 à 147) :
- Potentiel de repos (-70 mV) : polarité négative interne maintenue par la pompe Na+/K+ ATPase contre les flux passifs de fuite (K+ sortant > Na+ entrant).
- Potentiel d'action : loi du tout ou rien sur la fibre isolée dès que le seuil de dépolarisation (-50 mV) est atteint. Amplitude fixe (~100 mV). Vitesse proportionnelle au diamètre et accrue par la gaine de myéline (conduction saltatoire).
- Période réfractaire : absolue (inactivation des canaux Na+ voltage-dépendants, aucune réponse possible) puis relative (canaux K+ encore ouverts, seuil d'excitation surélevé), assurant la propagation unidirectionnelle de l'influx.
- Synapses : PPSE (dépolarisation locale par entrée de Na+ induite par l'acétylcholine ou glutamate) vs PPSI (hyperpolarisation locale par entrée de Cl- induite par le GABA ou la glycine). Le motoneurone intègre les signaux par sommation spatio-temporelle au niveau du cône axonique.

6. Régulation de la pression artérielle (QCM 1 à 30) :
- Grand réflexe dépresseur : barorécepteurs du sinus carotidien et de la crosse aortique sensibles à l'étirement mécanique. En hypertension, élévation de la fréquence de PA dans les nerfs afférents de Hering et Cyon -> excitation du centre cardiomodérateur bulbaire (nerf vague X parasympathique libérant l'acétylcholine) -> bradycardie et baisse du débit cardiaque ; inhibition simultanée du centre vasoconstricteur orthosympathique -> vasodilatation artériolaire.
- En cas d'hémorragie (hypotension brutale) : baisse de fréquence dans les nerfs de Hering/Cyon -> levée d'inhibition du centre bulbaire cardio-accélérateur -> activation orthosympathique (noradrénaline) et sécrétion d'adrénaline par la médullosurrénale -> tachycardie, augmentation de la force contractile et vasoconstriction périphérique générale (pâleur cutanée).

7. Immunologie et SIDA (QCM 1 à 148) :
- Molécules du CMH (HLA chez l'homme) : glycoprotéines membranaires codées sur le chromosome 6, très polymorphes. CMH I présent sur toutes les cellules nucléées de l'organisme ; CMH II présent sur les cellules présentatrices d'antigènes (CPAg : macrophages, cellules dendritiques, lymphocytes B).
- Réponse immunitaire : sélection clonale -> prolifération et différenciation sous l'action de l'IL-2 produite par les LT4 auxiliaires. Les LT8 deviennent des LTc cytotoxiques détruisant les cellules cibles (CMH I altéré par un antigène viral ou tumoral) par libération de perforines et granzymes (apoptose). Les LB deviennent des plasmocytes sécrétant les anticorps spécifiques.
- Greffes : autogreffe et isogreffe (vrais jumeaux) 100% acceptées ; allogreffes rejetées par réaction immunitaire médiée par les lymphocytes T ciblant les antigènes HLA étrangers du donneur (prévention par immunosuppresseurs comme la ciclosporine).
- VIH/SIDA : le virus cible les cellules porteuses de CD4 (principalement LT4). Phase primaire fébrile -> phase de latence séropositive (taux d'anticorps anti-gp120 et anti-p24 élevé, virémie contrôlée) -> phase terminale d'effondrement des défenses où le taux de LT4 descend sous 200/mm3, ouvrant la voie aux infections opportunistes mortelles.`,
    sampleInBookletSubjects: [
      'Reproduction masculine : Sécrétions hormonales, spermatogenèse et rôles des cellules de Leydig et Sertoli (QCM 1 à 83, p. 5-18)',
      'Reproduction féminine : Cycles sexuels, ovulation, rétrocontrôles hormonaux et contraception orale combinée (QCM 1 à 145, p. 19-38)',
      'Génétique formelle : Dihybridisme, test-cross, crossing-over et cartographie chromosomique (QCM 1 à 43, p. 39-52)',
      'Génétique humaine : Diagnostic des pedigrees, daltonisme, hémophilie, Turner et Klinefelter (QCM 1 à 54, p. 53-68)',
      'Évolution biologique : Sélection naturelle, polymorphisme et mécanismes de spéciation (QCM 1 à 6, p. 69-72)',
      'Tissu nerveux et potentiel d\'action : Potentiel de repos (-70 mV), conduction saltatoire et loi du tout ou rien (QCM 1 à 28, p. 73-82)',
      'Réflexe myotatique et synapses : Arc réflexe, neurotransmetteurs, PPSE, PPSI et sommation temporelle/spatiale (QCM 1 à 147, p. 83-110)',
      'Contraction musculaire : Ultrastructure de la myofibrille, sarcomère, hydrolyse de l\'ATP et rôle du Ca2+ (QCM 1 à 30, p. 111-120)',
      'Régulation de la pression artérielle : Barorécepteurs, nerfs de Hering et Cyon, centres bulbaires et nerf vague (QCM 1 à 30, p. 121-130)',
      'Immunologie spécifique : CMH I/II, coopération cellulaire, interleukines, RIMH et RIMC cytotoxique (QCM 1 à 138, p. 131-160)',
      'Dysfonctionnements immunitaires : Allergie de type I à IgE et immunodéficience acquise par le VIH (QCM 139 à 148, p. 161-179)'
    ],
    sampleNewUntreatedSubjects: [
      'QCM Type Bac : « Déterminer parmi 5 propositions l\'exacte régulation de la sécrétion pulsatile de GnRH et de testostérone chez l\'homme adulte. »',
      'QCM Type Bac : « Identification des étapes cytologiques de la méiose générant une recombinaison intrachromosomique lors d\'un dihybridisme. »',
      'QCM Type Bac : « Analyse rigoureuse des baroréflexes lors d\'une hypotension orthostatique : variation des fréquences de potentiels d\'action dans les nerfs de Cyon et le nerf pneumogastrique. »'
    ]
  },
  {
    id: 'svt-etoile-tunisie',
    title: 'SVT4 L\'ÉTOILE — 4ème Année Sciences Expérimentales (Bac Tunisien 2000-2018)',
    author: 'Abdessattar Frikha & Sami Châabouni',
    roleOrAffiliation: 'Professeurs Principaux Hors Classe — Maison Bayram Édition & Diffusion (Sfax, Tunisie)',
    countryOrigin: 'Tunisie (Baccalauréat Séries Scientifiques / Sciences Expérimentales & Mathématiques)',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre',
    badgeColor: 'bg-amber-600 text-white',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    summary:
      'L\'ouvrage de référence par excellence de SVT pour le Baccalauréat Tunisien (4ème Sciences Expérimentales & Mathématiques). Il intègre les annales officielles complètes du Baccalauréat (sessions Principale et Contrôle de 2000 à 2018) avec corrections méthodologiques exhaustives, QCM rigoureux, exercices de restitution et de mobilisation des connaissances, ainsi que des fiches de synthèse en couleur couvrant les 5 grands thèmes officiels : Reproduction humaine et santé, Génétique diploïde et humaine, Évolution biologique, Neurophysiologie et Immunologie.',
    methodologyOverview:
      'Méthodologie d\'analyse expérimentale rigoureuse propre au Baccalauréat Tunisien de SVT : 1° Analyse analytique et comparative des documents (courbes, oscillogrammes, microphotographies, électronographies, tableaux de croisements, électrophorèses d\'ADN et pedigrees) ; 2° Déduction logique immédiate des mécanismes physiologiques et génétiques ; 3° Confrontation aux hypothèses de départ (mise à l\'épreuve des hypothèses) ; 4° Synthèse fonctionnelle intégrée sous forme de schémas fonctionnels fléchés commentés (+ / - / rétrocontrôles). Respect strict des exigences formelles : pas de paraphrase, justification systématique de chaque étape et mise en relation des données expérimentales avec les connaissances certifiées du cours.',
    keyConcepts: [
      'Thème 1 : Reproduction humaine et santé (Fonction reproductrice masculine, fonction reproductrice féminine, procréation naturelle et PMA / FIVETE)',
      'Thème 2 : La Génétique (Brassage génétique méiotique, transmission de deux couples d\'allèles / dihybridisme, génétique humaine et analyse de pedigrees)',
      'Thème 3 : L\'Évolution biologique (Homologies anatomiques, embryologiques et moléculaires, mécanismes de spéciation et arbres phylogénétiques)',
      'Thème 4 : Neurophysiologie (Tissu nerveux, potentiel de repos et d\'action, réflexe myotatique, contraction du muscle squelettique, régulation neuro-hormonale de la pression artérielle, hygiène du système nerveux : stress et drogues)',
      'Thème 5 : L\'Immunité (Le soi et le non-soi, système ABO, système CMH/HLA, RIMH, RIMC, coopération cellulaire macrophage-LT4-LT8-LB, vaccins et sérums, allergie immédiate, infection par le VIH/SIDA)'
    ],
    pedagogicalThemes: [
      'Thème 1 : Reproduction humaine et santé (Fonction reproductrice masculine, fonction reproductrice féminine, procréation naturelle et PMA / FIVETE)',
      'Thème 2 : La Génétique (Brassage génétique méiotique, transmission de deux couples d\'allèles / dihybridisme, génétique humaine et analyse de pedigrees)',
      'Thème 3 : L\'Évolution biologique (Homologies anatomiques, embryologiques et moléculaires, mécanismes de spéciation et arbres phylogénétiques)',
      'Thème 4 : Neurophysiologie (Tissu nerveux, potentiel de repos et d\'action, réflexe myotatique, contraction du muscle squelettique, régulation neuro-hormonale de la pression artérielle, hygiène du système nerveux : stress et drogues)',
      'Thème 5 : L\'Immunité (Le soi et le non-soi, système ABO, système CMH/HLA, RIMH, RIMC, coopération cellulaire macrophage-LT4-LT8-LB, vaccins et sérums, allergie immédiate, infection par le VIH/SIDA)'
    ],
    coreKnowledgeExcerpt: `SYNTHÈSE ACADÉMIQUE DE RÉFÉRENCE — SVT4 L'ÉTOILE (A. Frikha & S. Châabouni, Maison Bayram) :

1. Thème 1 : Reproduction humaine et santé (p. 4 à 45, corrigés p. 177 à 211, résumé p. 329 à 340) :
- Fonction masculine : Tubes séminifères (spermatogenèse en 74 jours : spermatogonies 2n -> spermatocytes I 2n -> spermatocytes II n -> spermatides n -> spermatozoïdes n). Cellules de Sertoli (nourricières, sécrètent l'ABP sous l'effet de FSH et l'inhibine qui exerce un rétrocontrôle négatif sélectif sur la FSH). Cellules interstitielles de Leydig (sécrètent la testostérone sous l'effet de la LH). La testostérone maintient les caractères sexuels secondaires et exerce un rétrocontrôle négatif (RC-) permanent sur l'axe hypothalamo-hypophysaire. La cryptorchidie détruit la spermatogenèse mais conserve les cellules de Leydig (maintien de la virilité).
- Fonction féminine : Ovogenèse discontinue (amorcée in utero, bloquée en prophase I, reprise cyclique dès la puberté, ovocyte II bloqué en métaphase II à l'ovulation, méiose achevée uniquement en cas de fécondation). Folliculogenèse : primordial -> primaire -> secondaire -> tertiaire (cavitaire) -> mûr de De Graaf -> ovulation -> corps jaune (sécrétant progestérone et œstradiol). Pic d'œstradiol (> 200 pg/mL) à J12-J13 déclenchant un rétrocontrôle positif (RC+) -> décharge ovulante de LH à J14. Phase lutéale : RC(-) exercé par la progestérone et l'œstradiol sur le complexe H-H.
- Contraception & PMA : Pilule combinée (œstro-progestatif maintenant un RC(-) continu, supprimant les pics de LH/FSH, bloquant l'ovulation et imperméabilisant la glaire cervicale). HCG embryonnaire maintenant le corps jaune gestatif (absence de règles). FIVETE : blocage par analogues de GnRH, superovulation par FSH, déclenchement par HCG, ponction folliculaire, fécondation in vitro et transfert embryonnaire.

2. Thème 2 : Génétique diploïde & humaine (p. 46 à 78, corrigés p. 212 à 256, résumé p. 341 à 344) :
- Brassage intrachromosomique : Crossing-over en prophase I de méiose au niveau des chiasmas.
- Brassage interchromosomique : Ségrégation indépendante et aléatoire des chromosomes homologues en anaphase I.
- Dihybridisme : Gènes indépendants -> F2 = 9/16, 3/16, 3/16, 1/16 et test-cross = 25%, 25%, 25%, 25% (1:1:1:1). Gènes liés (linkage partiel) -> test-cross donne > 50% de phénotypes parentaux et < 50% de recombinés. Distance d = % de recombinés (en centiMorgan cM). Chez la drosophile mâle, AUCUN crossing-over n'a lieu (linkage absolu).
- Génétique humaine : Analyse rigoureuse de pedigrees et profils d'électrophorèse d'ADN.
  * Maladie autosomique récessive : parents sains ayant un enfant malade ; les deux parents sont hétérozygotes obligatoires.
  * Récessive liée à X : hommes malades hémizygotes (XmY) ; un père sain ne peut avoir de fille malade ; une femme malade (XmXm) a obligatoirement un père malade et une mère conductrice.
  * Dominante autosomique : chaque malade a au moins un parent atteint.
  * Dominante liée à X : un père atteint transmet la maladie à 100% de ses filles et 0% de ses fils.
  * Aneuploïdies : Trisomie 21 (non-disjonction en anaphase I ou II), Turner (45, X0), Klinefelter (47, XXY).

3. Thème 3 : Évolution biologique (p. 79 à 85, corrigés p. 256 à 259, résumé p. 344) :
- Preuves de l'évolution : Homologies anatomiques (organisation du membre antérieur des tétrapodes : humérus, radius/cubitus, carpes, métacarpes, phalanges chez l'homme, le cheval, la baleine) ; homologies embryologiques ; homologies moléculaires (séquences d'acides aminés de l'hémoglobine, de l'insuline, de la myoglobine).
- Arbres phylogénétiques : La proximité phylogénétique est proportionnelle au pourcentage de similitude entre séquences homologues.
- Spéciation : Allopatrique (barrière géographique divisant une population initiale) vs sympatrique (barrières écologiques, comportementales, ou caryotypiques comme la polyploïdie ou les fusions chromosomiques).

4. Thème 4 : Neurophysiologie, Pression Artérielle & Stress (p. 86 à 147, corrigés p. 260 à 304, résumé p. 345 à 359) :
- Potentiel de repos (-70 mV) : maintenu par la pompe Na+/K+ ATPase et les canaux de fuite.
- Potentiel d'action (PA) : dépolarisation par ouverture des CVD Na+ (-50 mV jusqu'à +30 mV), repolarisation par ouverture des CVD K+ et fermeture des CVD Na+, hyperpolarisation transitoire. Conduction saltatoire sur fibre myélinisée (nœuds de Ranvier).
- Récepteur sensoriel : Potentiel de récepteur (local, gradué, sommable au site transducteur) converti au site générateur en potentiels d'action propagés codés en fréquence.
- Réflexe myotatique : Arc réflexe monosynaptique excitateur (fuseau neuromusculaire -> fibre sensitive afférente Ia -> synapse excitatrice sur le motoneurone alpha du muscle agoniste, PPSE) et innervation réciproque par interneurone inhibiteur (PPSI à GABA sur le motoneurone du muscle antagoniste fléchisseur).
- Synapse neuro-musculaire (Plaque motrice) : Arrivée du PA -> entrée de Ca2+ présynaptique -> exocytose d'acétylcholine -> fixation sur récepteurs chimiodépendants CCD Na+ postsynaptiques -> PPM (dépolarisation supra-liminaire déclenchant le PA musculaire). Hydrolyse par l'acétylcholinestérase. Antagoniste compétitif : curare (bloque les CCD sans dépolariser). Toxine botulique (bloque l'exocytose), alpha-bungarotoxine.
- Contraction musculaire : Sarcomère délimité par 2 stries Z. Le PA musculaire se propage via les tubules transverses (système T) -> libération de Ca2+ par le réticulum sarcoplasmique -> fixation du Ca2+ sur la troponine démasquant les sites d'actine -> fixation des têtes de myosine hydrolysant l'ATP -> pivotement et glissement des filaments d'actine vers le centre du sarcomère (rétrécissement de la bande H et des disques clairs I, disque sombre A constant). Voies de régénération de l'ATP : rapide alactique (phosphocréatine + ADP -> ATP + créatine), rapide lactique (glycolyse anaérobie -> 2 ATP + 2 acides lactiques), lente aérobie (respiration mitochondriale -> 36 à 38 ATP).
- Pression artérielle : Régulation nerveuse réflexe de Hering et Cyon. En hypertension : stimulation des barorécepteurs -> influx afférents de Hering/Cyon vers le bulbe -> excitation du centre cardiomodérateur (nerf vague X parasympathique libérant l'acétylcholine) -> bradycardie et vasodilatation artériolaire (inhibition du centre vasoconstricteur sympathique). En hypotension (hémorragie) : levée de l'inhibition -> activation sympathique (noradrénaline) et sécrétion d'adrénaline par la médullosurrénale -> tachycardie et vasoconstriction. Régulation hormonale : système rénine-angiotensine-aldostérone (hypotension -> rénine rénale -> angiotensine -> vasoconstriction et aldostérone corticosurrénalienne réabsorbant Na+ et eau).
- Hygiène du système nerveux : Stress en 3 phases (alarme à noradrénaline/adrénaline, résistance/adaptation avec l'axe hypothalamo-hypophysaire CRH-ACTH-cortisol stimulant la néoglucogenèse, épuisement). Drogues (cocaïne bloquant la recapture de la dopamine dans la synapse du circuit de la récompense, maintenant une stimulation permanente et entraînant tolérance et dépendance).

5. Thème 5 : L'Immunité & SIDA (p. 148 à 176, corrigés p. 305 à 328, résumé p. 360 à 364) :
- Soi et non-soi : Système ABO (érythrocytes avec agglutinogènes A et B, sérum avec agglutinines anti-A et anti-B) ; système CMH / HLA (chromosome 6, CMH I sur toutes cellules nucléées, CMH II sur CPAg). Rejet d'allogreffe médié par les LT cytotoxiques reconnaissant le CMH étranger.
- Réponse immunitaire spécifique :
  * Phase d'induction : Présentation de l'antigène par la CPAg (macrophage) aux LT4 (double reconnaissance CMH II + peptide antigénique via TCR) et sécrétion d'IL-1. Sélection clonale des LB (reconnaissance directe de l'antigène natif par les BCR/Ig membranaires) et des LT8 (double reconnaissance CMH I + peptide antigénique).
  * Phase d'amplification & différenciation : Les LT4 activés deviennent des LTh (auxiliaires) et sécrètent de l'interleukine 2 (IL-2). L'IL-2 induit la prolifération clonale et la différenciation des LB en plasmocytes (sécréteurs d'anticorps pour la RIMH) et des LT8 en LTc cytotoxiques (libérateurs de perforines et granzymes pour la RIMC).
  * Phase effectrice : En RIMH, les anticorps forment des complexes immuns neutralisant l'antigène et favorisant l'opsonisation/phagocytose ou la lyse par le complément. En RIMC, le LTc se fixe sur la cellule cible (CMH I altéré) et induit sa lyse osmotique et son apoptose.
- Sérothérapie (immunité passive immédiate et transitoire) vs vaccination (immunité active durable à mémoire immunitaire).
- Allergie immédiate (type I) : phase de sensibilisation (synthèse d'IgE fixées sur mastocytes via fragment Fc) -> phase de déclenchement (pontage des IgE par l'allergène -> dégranulation explosive d'histamine).
- VIH/SIDA : Rétrovirus à ARN fixant sa gp120 sur le CD4 des LT4. Rétrotranscription de l'ARN en ADN proviral par la transcriptase inverse, intégration dans le génome de l'hôte. Chute progressive des LT4 sous le seuil critique de 200/mm3 entraînant le stade SIDA avec maladies opportunistes.`,
    sampleInBookletSubjects: [
      'Exercice Bac 2014 Principale (Reproduction homme) : Troubles de puberté chez deux garçons X et Y, injections de HCG/FSH, analyse de dosages de GnRH et schémas fonctionnels H-H (p. 14-15, corrigé p. 186-187)',
      'Exercice Bac 2008 Principale (Reproduction femme) : Cycles sexuels chez la femme jeune vs ménopausée, analyse comparée des taux d\'œstradiol, progestérone, LH et FSH (p. 41, corrigé p. 206-207)',
      'Exercice Bac 2010 Contrôle (Dihybridisme drosophile) : Transmission de deux couples d\'allèles (couleur du corps et taille des soies), test-cross, crossing-over et cartographie (p. 59, corrigé p. 236)',
      'Exercice Bac 2018 Principale (Génétique humaine) : Pedigree d\'une tare héréditaire, électrophorèse d\'ADN, fœtoscopie et calcul de risques génétiques (p. 78, corrigé p. 255-256)',
      'Exercice Bac 2008 Contrôle (Évolution) : Filiations phylogénétiques chez la carpe, le cheval et l\'homme à partir des séquences peptidiques de l\'hémoglobine (p. 85, corrigé p. 259)',
      'Exercice Bac 2017 Principale (Neurophysiologie) : Réflexe myotatique, fuseau neuromusculaire, potentiels de récepteurs et potentiels d\'action codés en fréquence (p. 124-125, corrigé p. 286)',
      'Exercice Bac 2016 Principale (Pression artérielle) : Régulation de la pression artérielle lors d\'une hypotension provoquée au sinus carotidien chez le chien, boucle bulbaire (p. 138-139, corrigé p. 297-298)',
      'Exercice Bac 2012 Contrôle (Stress et hygiène nerveuse) : Réponses cardiovasculaires face à une situation stressante, rôle du nerf splanchnique et de l\'adrénaline (p. 146-147, corrigé p. 303-304)',
      'Exercice Bac 2016 Contrôle (Immunologie spécifique) : Coopération cellulaire macrophage-LT4-LT8, rôle central des interleukines 1 et 2, cytotoxicité au 51Cr (p. 173-174, corrigé p. 325-326)'
    ],
    sampleNewUntreatedSubjects: [
      'Sujet Bac Sciences Expérimentales : « Expliquez, à l\'aide d\'un schéma fonctionnel commenté, comment le rétrocontrôle positif exercé par l\'œstradiol déclenche l\'ovulation chez la femme. »',
      'Sujet Bac Sciences Expérimentales : « Chez la drosophile, montrez par un raisonnement génétique complet pourquoi le test-cross d\'un mâle dihybride ne donne jamais de phénotypes recombinés. »',
      'Sujet Bac Sciences Expérimentales : « À partir des données expérimentales d\'une hémorragie aiguë, retracez la cascade neuro-hormonale (baroréflexe et système rénine-angiotensine-aldostérone) assurant le rétablissement de la volémie et de la pression artérielle. »'
    ]
  },
  {
    id: 'svt-atelier-analyse-ivoirien',
    title: 'Atelier de Renforcement : Techniques d\'Analyse & d\'Interprétation des Résultats en SVT',
    author: 'YAO FIENI FRANÇOIS (Inspecteur Pédagogique)',
    roleOrAffiliation: 'Ministère de l\'Éducation Nationale et de l\'Enseignement Technique — APFC Abidjan 3 — Coordination Régionale des SVT (Côte d\'Ivoire)',
    countryOrigin: 'Côte d\'Ivoire (Direction Régionale Abidjan 3 / Baccalauréat Scientifique)',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre',
    badgeColor: 'bg-emerald-700 text-white',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    summary:
      'Guide méthodologique officiel rédigé sous la direction de l\'Inspecteur Pédagogique YAO FIENI FRANÇOIS (APFC Abidjan 3). Il définit les protocoles d\'excellence pour l\'analyse et l\'interprétation des résultats scientifiques aux examens du Baccalauréat en SVT : schémas, microphotographies, électronographies, tableaux de données, graphiques & courbes, histogrammes, croisements de monohybridisme et dihybridisme (système branché et test d\'hypothèses), pedigrees d\'hérédité liée au sexe (favisme) et textes scientifiques.',
    methodologyOverview:
      'Règles méthodologiques impératives de la pédagogie ivoirienne en SVT : 1° Distinction stricte entre Analyse ("Ce que je vois objectivement avec repères chiffrés et découpage en phases") et Interprétation ("L\'explication biologique causale : causes, mécanismes biochimiques et conséquences"). 2° Règle anatomique : s\'agissant d\'une structure d\'appareil, d\'organe ou de cellule, l\'interprétation n\'est pas nécessaire, seule l\'analyse morphologique et la conclusion sont attendues. 3° Pour les courbes : proscrire formellement les termes vagues "varie", "évolue" ainsi que la paraphrase "la courbe monte ou descend", découper en phases aux points de rupture et chiffrer. 4° Pour le dihybridisme : analyse séparée caractère par caractère (3/4 1/4), méthode du système branché (9/16, 3/16, 3/16, 1/16) et test d\'hypothèse statistique comparant effectifs observés et théoriques. 5° Pour les pedigrees : identifier les couples clés démontrant sans ambiguïté la récessivité, la dominance et l\'éventuelle liaison au gonosome X.',
    keyConcepts: [
      'Analyse vs Interprétation : protocoles méthodologiques stricts selon le type de support documentaire',
      'Observations morphologiques & cytologiques : organes reproducteurs et ultrastructure de la synapse en microscopie électronique (repos vs exocytose)',
      'Expérimentations en schémas : germination du cacao (influence de l\'eau) et immunité spécifique antitétanique vs diphtérique',
      'Tableaux de compatibilité : transfusion sanguine ABO, donneur universel O et receveur universel AB',
      'Graphiques & courbes : cinétique photosynthétique de l\'élodée (température limitante, optimale et létale) et action des drogues (nicotine, cocaïne, diazépam)',
      'Histogrammes : rôle de filtre sélectif du rein entre plasma et urine primitive (micromolécules vs macromolécules)',
      'Génétique formelle : monohybridisme autosomique (3/4 1/4 et test-cross 1/2 1/2) et dihybridisme chez le manioc (système branché 9/16, 3/16, 3/16, 1/16 et validation d\'hypothèse)',
      'Enquêtes génétiques & pedigrees : étude de l\'hérédité liée au chromosome sexuel X (cas du favisme / déficit en G6PD)'
    ],
    pedagogicalThemes: [
      'Méthodologie d\'analyse et d\'interprétation de documents scientifiques',
      'Exploitation des électronographies et ultrastructures cellulaires',
      'Traitement rigoureux des données graphiques et histogrammes physiologiques',
      'Résolution mathématique et statistique des croisements mendéliens (système branché)',
      'Diagnostic formel des modes de transmission génétique sur pedigrees'
    ],
    coreKnowledgeExcerpt: `GUIDE MÉTHODOLOGIQUE OFFICIEL D'ANALYSE & D'INTERPRÉTATION EN SVT (Inspecteur Yao Fieni François, MENET Côte d'Ivoire, APFC Abidjan 3) :

1. ANALYSE ET INTERPRÉTATION DE SCHÉMAS & ÉLECTRONOGRAPHIES :
- Technique d'analyse : identifier la nature de la structure (organisme, appareil, organe, cellule, organite) ; identifier les différentes parties ou éléments essentiels ; relever les similitudes et les différences ; mettre en relation les éléments essentiels.
- Technique d'interprétation : expliquer l'organisation et la disposition des éléments de la structure et les phénomènes impliqués.
- RÈGLE ESSENTIELLE : S'agissant de la structure des appareils, des organes, des cellules ou des organites cellulaires, l'interprétation n'est PAS nécessaire (seule l'analyse et la conclusion sont exigées).
- Exemple de la synapse au microscope électronique : Figure 1 (repos) = vésicules synaptiques isolées de la membrane présynaptique, fente synaptique libre ; Figure 2 (activité) = vésicules ayant fusionné avec la membrane présynaptique, déformations membranaires caractéristiques de l'exocytose sous l'action du Ca2+, libération du neurotransmetteur.

2. ANALYSE ET INTERPRÉTATION DE COURBES & GRAPHIQUES :
- Technique d'analyse en 5 points : 1° Présenter le document ("La courbe traduit l'évolution de [ordonnée] en fonction de [abscisse]") ; 2° Subdiviser en phases (origine, seuil, rupture de pente, optimum, palier, fin) ; 3° Chiffrer précisément chaque phase avec ses unités ; 4° Mettre en relation ordonnée et abscisse ; 5° Comparer les courbes en cas de courbes multiples.
- RÈGLE D'OR INTERDITE : Proscrire formellement les termes "la courbe monte", "la courbe descend" (paraphrase) et les verbes vagues "varie", "évolue" qui n'indiquent pas le sens de variation !
- Exemple Photosynthèse de l'élodée : À 0°C, 0 bulle rejetée (enzymes inactives au froid) ; de 0 à 20°C, augmentation continue jusqu'à l'optimum de 50 bulles/min (la température agit comme facteur limitant stimulant la vitesse enzymatique) ; de 20 à 25°C, palier constant à 50 bulles/min (vitesse maximale des enzymes) ; de 25 à 50°C, chute brutale jusqu'à annulation à 50°C (dénaturation thermique irréversible des enzymes, température létale).
- Exemple drogues : Nicotine/cocaïne augmentent l'amplitude et la fréquence des PA (effet excitateur par stimulation dopaminergique ou inhibition de recapture) ; diazépam annule les PA (effet inhibiteur sur les récepteurs GABA postsynaptiques).

3. ANALYSE ET INTERPRÉTATION D'HISTOGRAMMES :
- Exemple Fonction rénale (plasma vs urine primitive) : Glucose (1 g/L), Na+, Cl- et urée sont en concentrations identiques dans le plasma et l'urine primitive car ce sont des micromolécules qui traversent librement la paroi glomérulaire et la capsule de Bowman. En revanche, les protéines et triglycérides (macromolécules) sont présentes dans le plasma mais strictement absentes de l'urine primitive, car le filtre glomérulaire s'oppose à leur passage. Conclusion : le rein joue le rôle de filtre sélectif.

4. GÉNÉTIQUE : MÉTHODOLOGIE DU SYSTÈME BRANCHÉ ET TEST D'HYPOTHÈSE :
- Monohybridisme : F1 homogène -> dominance complète ; F2 3/4 [dominant] et 1/4 [récessif] -> disjonction indépendante d'un couple d'allèles autosomal ; test-cross 1/2 [dominant] et 1/2 [récessif] -> confirme l'hétérozygotie.
- Dihybridisme (cas du manioc, p. 15-18) :
  * Étape 1 : Analyse séparée caractère par caractère sur la F2 (comportement au pourrissement : résistant 75% = 3/4, sensible 25% = 1/4 -> dominance S/s ; taille des tubercules : petit 75% = 3/4, gros 25% = 1/4 -> dominance G/g).
  * Étape 2 : Étude simultanée par le système branché :
    3/4 [G] x 3/4 [S] = 9/16 [G S]
    3/4 [G] x 1/4 [s] = 3/16 [G s]
    1/4 [g] x 3/4 [S] = 3/16 [g S]
    1/4 [g] x 1/4 [s] = 1/16 [g s]
  * Étape 3 : Test statistique de l'hypothèse de gènes indépendants : calcul des effectifs théoriques attendus (Total x 9/16, Total x 3/16, etc.) et comparaison aux effectifs observés. Si conformité statistique, conclure que les gènes sont indépendants (portés par des paires chromosomiques différentes).

5. ENQUÊTES GÉNÉTIQUES ET PEDIGREES (Cas du favisme, p. 19-20) :
- Analyse : Père malade A x mère saine B ont des enfants sains ; couple de parents sains D et E ont deux fils atteints (I et K) ; seuls les garçons sont atteints.
- Interprétation : L'allèle responsable est masqué chez les parents sains D et E, il est donc récessif (f) et l'allèle normal est dominant (F). L'anomalie n'atteignant que des sujets de sexe masculin, le gène est porté par le chromosome sexuel X (gonosomal).
- Vérification chromosomique : Père E (XF Y) x Mère D (XF Xf) -> Filles 50% XF XF [F] et 50% XF Xf [F] (toutes saines) ; Fils 50% XF Y [F] (sains) et 50% Xf Y [f] (malades atteints du favisme). Les résultats théoriques sont rigoureusement conformes aux résultats observés.`,
    sampleInBookletSubjects: [
      'Exemple 1 (Observations) : Organisation anatomique comparée des appareils reproducteurs homme/femme et conclusion fonctionnelle (p. 3)',
      'Exemple 2 (Électronographies) : Ultrastructure de la synapse neuro-musculaire au repos et en activité d\'exocytose (p. 4)',
      'Exemple 3 (Schémas) : Germination de la fève de cacao en milieu humide, sec et inondé (p. 5)',
      'Exemple 4 (Schémas) : Spécificité immunitaire de l\'anatoxine tétanique contre la toxine tétanique vs diphtérique (p. 6)',
      'Exemple 5 (Tableaux) : Règles de transfusion sanguine ABO, agglutination et notion de donneur/receveur universel (p. 7)',
      'Exemple 6 (Courbes) : Influence de la température sur la photosynthèse chez l\'élodée et délimitation de l\'optimum thermique (p. 8-9)',
      'Exemple 7 (Courbes) : Enregistrements électrophysiologiques comparés sous nicotine, cocaïne et diazépam (p. 10)',
      'Exemple 8 (Histogrammes) : Concentrations ioniques et protéiques du plasma et de l\'urine primitive (rôle de filtre sélectif rénal) (p. 11)',
      'Exemple 9 (Génétique) : Monohybridisme de la couleur du pelage chez la souris (3/4 1/4 et test-cross 1/2 1/2) (p. 12-14)',
      'Exemple 10 (Génétique) : Dihybridisme chez le manioc, système branché et test d\'hypothèse de gènes indépendants (p. 15-18)',
      'Exemple 11 (Pedigree) : Transmission gonosomale récessive du favisme liée au chromosome sexuel X (p. 19-20)',
      'Exemple 12 (Textes) : Modifications physiologiques de la puberté chez la jeune fille et le jeune garçon (p. 21)'
    ],
    sampleNewUntreatedSubjects: [
      'Sujet Méthodologique Bac : « À partir de l\'analyse d\'une courbe de pression artérielle et d\'un enregistrement de décharge du nerf de Hering, dégagez rigoureusement les étapes du baroréflexe sans jamais employer les termes "monte", "descend" ou "varie". »',
      'Sujet Méthodologique Bac : « Appliquez la méthode du système branché et le test d\'hypothèse statistique aux résultats d\'un croisement de deux variétés de maïs pour prouver la disjonction indépendante de deux couples d\'allèles. »',
      'Sujet Méthodologique Bac : « Démontrez par un raisonnement génétique formel appuyé sur un échiquier chromosomique pourquoi une tare récessive liée à X ne peut être transmise à une fille que si son père est lui-même atteint. »'
    ]
  },
  {
    id: 'svt-cours-integral-tle-d',
    title: 'SVT Terminale D : Cours Officiel Intégral (15 Chapitres, 175h, Coeff. 5)',
    author: 'Inspection Générale de SVT & Équipe Pédagogique Nationale',
    roleOrAffiliation: 'Direction de la Pédagogie et des Programmes — Ministère de l\'Éducation Nationale (Côte d\'Ivoire & Programmes Harmonisés Afrique de l\'Ouest)',
    countryOrigin: 'Côte d\'Ivoire / Espace UEMOA-CAMES (Programme Officiel de Terminale D)',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre',
    badgeColor: 'bg-teal-700 text-white',
    cycle: 'second_cycle_bac',
    level: 'terminale',
    summary:
      'Le cours officiel complet de SVT en classe de Terminale D structuré en 5 grandes parties et 15 chapitres académiques (volume horaire annuel : 175 heures, hebdomadaire : 7 heures, coefficient 5). Il couvre avec une exhaustivité totale : 1. Unicité des individus & diversité génétique (Reproduction mammifères et spermaphytes, brassage génétique méiotique, génétique des populations, prévisions en génétique humaine et pedigrees) ; 2. Évolution de la Terre et du vivant (Histoire géologique, expérience de Miller-Urey, crises biologiques, lignée humaine et hominisation) ; 3. Mécanismes de l\'immunité (Soi/non-soi, CMH I/II, immunocompétence, RIMH, RIMC, interleukines, SIDA, auto-immunité) ; 4. Neurophysiologie (Réflexes médullaires, transmission synaptique, potentiels d\'action, motricité volontaire et voies cérébrales) ; 5. Régulations neuro-hormonales (Axe hypothalamo-hypophysaire, cycle sexuel, régulation de la glycémie et pression artérielle).',
    methodologyOverview:
      'Maîtrise des concepts biologiques canoniques, rigueur terminologique (vocabulaire cytologique, génétique et physiologique certifié), restitution organisée des connaissances (plan structuré avec introduction, développement problématisé et conclusion) et schémas fonctionnels fléchés de synthèse.',
    keyConcepts: [
      'Partie I (Chap. I à IV) : Reproduction mammifères (spermatogenèse, ovogenèse, fécondation, polyspermie, amphimixie) & Spermaphytes (étamine, pistil, double fécondation embryon 2n/albumen 3n, cycles), lois de Mendel, monohybridisme/dihybridisme, linkage de Morgan, drépanocytose/paludisme, pedigrees, aneuploïdies (Trisomie 21, Turner XO, Klinefelter XXY)',
      'Partie II (Chap. V à VII) : Histoire géologique, expérience de Miller-Urey 1953 (soupe primitive, coacervats), photosynthèse anaérobie H2S puis aérobie (ozone O3), crises biologiques (Permien 90%, Crétacé 65 Ma astéroïde/Deccan), théories de l\'évolution (Lamarck, Darwin, néodarwinisme), hominisation (bipédie 3 Ma, crâne 400 à 1400 cm3, outils, feu, langage, Lucy, Habilis, Erectus, Néandertal, Sapiens)',
      'Partie III (Chap. VIII à X) : Soi/non-soi, greffes, CMH/HLA I et II, hématopoïèse, maturation thymique des LT (sélection positive/négative CD4/CD8), RIMH (plasmocytes, anticorps), RIMC (LTc, perforines/granzymes), coopération IL-1/IL-2, auto-immunité (myasthénie, Basedow), allergies type I (IgE, histamine), VIH/SIDA (gp120, CD4, seuil 200 LT4/mm3)',
      'Partie IV (Chap. XI à XIII) : Activité réflexe (innés vs acquis, Magendie, dégénérescence wallérienne, arc réflexe myotatique monosynaptique agoniste et innervation réciproque interneurone GABA antagoniste, Pavlov/Skinner), tissu nerveux (PR -70 mV, PA dépolarisation CVD Na+ repolarisation CVD K+, TTX/TEA, synapses, PPSE, PPSI, sommation spatio-temporelle, drogues curare/cocaïne/morphine), motricité dirigée (cortex moteur, homoncule de Penfield, voies pyramidales croisées, méninges, Parkinson, Alzheimer)',
      'Partie V (Chap. XIV & XV) : Régulation hormonale (axe CHH, testostérone RC- permanent, cycles féminins, pic œstradiol RC+ ovulatoire LH, pilule combinée, RU486, FIVETE), homéostasie de Claude Bernard, régulation de la glycémie (foie lavé, glycogénogenèse, glycogénolyse, néoglucogenèse, insuline hypoglycémiante cellules bêta, glucagon hyperglycémiant cellules alpha, diabète I et II), régulation de la pression artérielle (baroréflexe Hering/Cyon bulbe cardiomodérateur nerf X acétylcholine bradycardie vs sympathique noradrénaline, système rénine-angiotensine-aldostérone, ADH, FNA)'
    ],
    pedagogicalThemes: [
      'Partie I : Unicité des individus et diversité génétique des populations (Chap. I à IV)',
      'Partie II : L\'évolution de la Terre et du monde vivant (Chap. V à VII)',
      'Partie III : Mécanismes de l\'immunité (Chap. VIII à X)',
      'Partie IV : Quelques aspects du fonctionnement des centres nerveux (Chap. XI à XIII)',
      'Partie V : Régulations hormonale et nerveuse (Chap. XIV & XV)'
    ],
    coreKnowledgeExcerpt: `COURS OFFICIEL INTÉGRAL DE SVT TERMINALE D (Programme National, 15 Chapitres, 175h) :

I. REPRODUCTION ET GÉNÉTIQUE :
- Spermatogenèse : se déroule dans les tubes séminifères en 74 jours de façon continue (multiplication, accroissement, maturation méiotique, spermiogenèse). Cellules de Sertoli (nourricières, sécrètent ABP et inhibine). Cellules de Leydig (sécrètent testostérone sous LH). La testostérone exerce un RC(-) permanent sur l'axe hypothalamo-hypophysaire (GnRH, LH, FSH).
- Ovogenèse : discontinue (initiée in utero, bloquée en prophase I, reprise dès la puberté, ovocyte II bloqué en métaphase II à l'ovulation, achevée uniquement si fécondation). Folliculogenèse : follicule primordial -> primaire -> secondaire (granulosa, thèque interne sécrétant œstrogènes) -> tertiaire/cavitaire -> mûr de De Graaf -> ponte ovulaire à J14 sous l'effet du pic ovulant de LH déclenché par le rétrocontrôle positif de l'œstradiol (> 200 pg/mL à J12). Le follicule rompu devient corps jaune sécrétant progestérone et œstradiol (RC- lutéal).
- Spermaphytes : fleur avec périanthe (calice + corolle), androcée (étamines produisant grains de pollen à 2 noyaux : végétatif et reproducteur), gynécée (carpelle/ovaire avec ovule orthotrope, campylotrope ou anatrope contenant le sac embryonnaire à 8 noyaux : oosphère, 2 synergides, 3 antipodes, 2 noyaux centraux). Double fécondation caractéristique des Angiospermes : 1er anthérozoïde + oosphère -> œuf embryon diploïde (2n) ; 2ème anthérozoïde + 2 noyaux centraux -> œuf albumen triploïde (3n) qui constituera les réserves de la graine.
- Génétique : Lois de Mendel (uniformité de F1, ségrégation des allèles, disjonction indépendante). Dihybridisme : gènes indépendants (9/16, 3/16, 3/16, 1/16 en F2, 1:1:1:1 en test-cross) vs gènes liés avec crossing-over (linkage partiel, distance en centimorgans cM). Chez la drosophile mâle, crossing-over nul (linkage absolu). Détermination du sexe : système XY (homme hétérogamétique, femme homogamétique XX), ZW (femelle hétérogamétique chez oiseaux/papillons), gène SRY sur Y initiant la différenciation testiculaire.
- Génétique humaine : drépanocytose (mutation ponctuelle GAG -> GTG substituant l'acide glutamique par la valine en position 6 de la chaîne bêta de l'hémoglobine HbS, avantage sélectif hétérozygote AS contre le paludisme), mucoviscidose, albinisme, système ABO et facteur Rhésus (maladie hémolytique du nouveau-né si mère Rh- et fœtus Rh+), hémophilie et daltonisme liés à X récessif, myopathie de Duchenne.

II. ÉVOLUTION DE LA TERRE ET DU VIVANT :
- Origine de la vie : Terre primitive (4,6 Ga), atmosphère réductrice anoxique (CO2, CH4, NH3, H2O, H2). Expérience de Stanley Miller et Harold Urey (1953) : étincelles électriques reproduisant les éclairs dans un mélange gazeux -> synthèse prébiotique de 4 acides aminés baignant dans la "soupe primitive", condensation en coacervats. Apparition des premières cellules hétérotrophes anaérobies (-3,8 Ga), puis photosynthèse anaérobie à H2S, puis cyanobactéries réalisant la photosynthèse oxygénique il y a 2 Ga -> formation de la couche d'ozone O3 protégeant des UV et permettant la colonisation des terres émergées il y a 400 Ma.
- Crises biologiques majeures : Ordovicien (-435 Ma), Dévonien (-360 Ma), Permien (-245 Ma, 90% d'extinction marine dont les trilobites), Trias (-205 Ma), Crétacé-Tertiaire (-65 Ma, extinction des dinosaures et ammonites causée par l'impact d'un astéroïde de 10 km au Mexique / cratère de Chicxulub enrichi en iridium et les trapps du Deccan).
- Lignée humaine : Ancêtre commun homme-chimpanzé (-7 à -5 Ma) à 48 chromosomes (fusion de deux paires surnuméraires donnant le chromosome 2 humain à 46 chromosomes). Hominisation : acquisition de la bipédie (3 Ma, bassin court/large, fémur incliné, colonne vertébrale à 4 courbures, trou occipital avancé), encéphalisation (400 cm3 chez l'australopithèque Lucy à 1400 cm3 chez Sapiens), fabrication d'outils (Habilis 2,5 Ma), domestication du feu (Erectus 1200 cm3), rites funéraires (Néandertal), pensée artistique et symbolique (Homo sapiens sapiens).

III. IMMUNITÉ :
- Système immunitaire : CMH I (toutes cellules nucléées) et CMH II (CPAg : macrophages, cellules dendritiques, lymphocytes B).
- RIMH : reconnaissance directe de l'antigène libre par les BCR des LB, prolifération clonale sous IL-2 des LT4 auxiliaires, différenciation en plasmocytes sécrétant des anticorps spécifiques neutralisants (opsonisation, activation du complément).
- RIMC : double reconnaissance du CMH I + peptide antigénique par les TCR des LT8, prolifération sous IL-2, différenciation en LTc cytotoxiques détruisant les cellules cibles par libération de perforines (canaux membranaires lytiques) et de granzymes (apoptose).
- Pathologies : Maladies auto-immunes (sclérose en plaques, myasthénie par destruction des récepteurs d'ACh, Basedow, diabète de type I insulino-dépendant par destruction auto-immune des cellules bêta des îlots de Langerhans). Allergie de type I à médiation IgE (sensibilisation puis dégranulation d'histamine par les mastocytes). SIDA causé par le rétrovirus VIH ciblant le récepteur CD4 des LT4 via sa gp120 (chute sous 200 LT4/mm3 ouvrant la voie aux infections opportunistes).

IV. NEUROPHYSIOLOGIE :
- Potentiel de repos (-70 mV) : créé par la perméabilité différentielle (canaux de fuite) et entretenu activement par la pompe Na+/K+ ATPase consommatrice d'ATP.
- Potentiel d'action (100 mV) : obéit à la loi du tout ou rien dès que le seuil de dépolarisation (-50 mV) est franchi. Phase de dépolarisation (+30 mV) par entrée massive et passive de Na+ via les CVD Na+ (bloqués spécifiquement par la tétrodotoxine TTX). Phase de repolarisation par sortie de K+ via les CVD K+ (bloqués par le TEA). Conduction saltatoire sur axones myélinisés (nœuds de Ranvier).
- Synapse : arrivée du PA -> entrée de Ca2+ -> exocytose d'acétylcholine -> fixation sur CCD Na+ postsynaptiques -> PPSE -> sommation spatio-temporelle au niveau du cône axonique. Les synapses inhibitrices (GABA, glycine) ouvrent des canaux Cl- créant un PPSI hyperpolarisant.
- Réflexe myotatique : contraction réflexe d'un muscle suite à son étirement. Récepteur : fuseau neuromusculaire (FNM) codant l'étirement en fréquence de PA. Voie afférente : fibre sensitive Ia. Centre : moelle épinière (synapse excitatrice directe sur le motoneurone alpha du muscle étiré agoniste) avec innervation réciproque (interneurone inhibiteur bloquant le motoneurone du muscle antagoniste fléchisseur).

V. RÉGULATIONS HOMÉOSTASIQUES :
- Régulation de la glycémie (0,8 à 1,2 g/L) : rôle tampon du foie (expérience du foie lavé de Claude Bernard, 1855) assurant la glycogénogenèse après les repas et la glycogénolyse / néoglucogenèse à jeun. Rôle endocrine du pancréas : cellules bêta sécrétant l'insuline hypoglycémiante (stimule le stockage de glycogène et l'entrée cellulaire de glucose) et cellules alpha sécrétant le glucagon hyperglycémiant (stimule la glycogénolyse hépatique). Rôle du système nerveux : sympathique splanchnique hyperglycémiant vs parasympathique pneumogastrique X hypoglycémiant.
- Régulation de la pression artérielle (12/8 cmHg) :
  * Voie nerveuse réflexe (baroréflexe bulbaire) : en hypertension, les barorécepteurs carotidiens et aortiques sont stimulés -> augmentation des influx afférents de Hering et Cyon -> excitation du centre cardiomodérateur bulbaire -> nerf vague X libérant l'acétylcholine -> bradycardie et baisse de pression artérielle. En hypotension, le sympathique cardioaccélérateur libère la noradrénaline (tachycardie et vasoconstriction).
  * Voie hormonale lente : en hypotension, le rein sécrète la rénine -> transforme l'angiotensinogène hépatique en angiotensine I, convertie dans les poumons en angiotensine II (puissant vasoconstricteur) -> stimule la sécrétion d'aldostérone par la corticosurrénale réabsorbant Na+ et eau au niveau des tubules rénaux -> restauration de la volémie et de la pression artérielle. L'ADH hypophysaire réabsorbe l'eau et le FNA auriculaire favorise l'élimination du sodium en cas d'hypertension.`,
    sampleInBookletSubjects: [
      'Chapitre I : Gamétogenèse comparée spermatogenèse/ovogenèse et double fécondation des Spermaphytes (p. 2-15)',
      'Chapitre II : Dihybridisme de Morgan chez la drosophile et cartographie en centimorgans (p. 16-28)',
      'Chapitre III : Polymorphisme allélique, hétérosis drépanocytaire et dérive génétique (p. 29-32)',
      'Chapitre IV : Calculs de risques génétiques sur pedigrees, système ABO et mucoviscidose (p. 33-41)',
      'Chapitre V : Synthèse prébiotique de Miller-Urey et crises biologiques de la Terre (p. 42-49)',
      'Chapitre VI : Théories de l\'évolution et mécanismes de spéciation allopatrique (p. 50-53)',
      'Chapitre VII : Phylogénie des primates, critères d\'hominisation et lignée humaine (p. 53-56)',
      'Chapitre VIII : Système CMH/HLA et règles de compatibilité des greffes (p. 57-59)',
      'Chapitre IX : Hématopoïèse et différenciation thymique des récepteurs TCR/BCR (p. 59-62)',
      'Chapitre X : Cinétique comparée de la RIMH et de la RIMC et cycle du VIH (p. 63-72)',
      'Chapitre XI : Expériences de Magendie et arc réflexe myotatique monosynaptique (p. 73-82)',
      'Chapitre XII : Biophysique membranaire du potentiel d\'action et transmission synaptique (p. 83-98)',
      'Chapitre XIII : Somatotopie corticale motrice et voies motrices pyramidales croisées (p. 99-105)',
      'Chapitre XIV : Rétrocontrôles ovariens pré et post-ovulatoires de l\'axe hypothalamo-hypophysaire (p. 106-116)',
      'Chapitre XV : Homéostasie glycémique de Claude Bernard et baroréflexe de la pression artérielle (p. 117-126)'
    ],
    sampleNewUntreatedSubjects: [
      'Sujet Bac Terminale D : « Montrez comment la double fécondation chez les Angiospermes assure à la fois la pérennité de l\'espèce par l\'embryon et la constitution des réserves nutritives par l\'albumen. »',
      'Sujet Bac Terminale D : « À l\'aide d\'un raisonnement rigoureux, démontrez les rôles respectifs des ions Ca2+, de l\'ATP et des myofilaments d\'actine et de myosine dans le raccourcissement du sarcomère. »',
      'Sujet Bac Terminale D : « Expliquez comment la coopération cellulaire entre macrophages, lymphocytes T4 et lymphocytes T8 permet l\'élimination d\'une cellule infectée par un virus. »'
    ]
  },
  {
    id: 'guide-officiel-4-disciplines-tle-bac',
    title: 'Guide Officiel : Français - Philosophie - Histoire - Géographie (Terminale Baccalauréat - 127 pages)',
    discipline: 'francais',
    disciplineLabel: 'Guide Polyvalent (Français, Philo, Histoire, Géo)',
    badgeColor: 'emerald',
    cycle: 'second_cycle_bac',
    summary: 'Le grand guide officiel de révision pluridisciplinaire de Terminale (127 pages). Contient l\'intégralité des programmes de Français (courants, genres, rhétorique, 40 sujets types), Philosophie (méthodologie, Hume, 17 chapitres doctrinaux), Géographie (Côte d\'Ivoire, Corée du Sud, CEDEAO, UE-ACP) et Histoire (ONU, Guerre froide, décolonisation, Indépendance de la Côte d\'Ivoire, Algérie, UA, tableau des 24 sujets types).',
    methodologyOverview: `STRUCTURE GLOBALE DU GUIDE DE RÉVISION OFFICIEL (127 PAGES) :

1. FRANÇAIS (Pages 4 à 46) :
   - Chapitre 1 : Littérature négro-africaine (Poésie, Roman, Théâtre avant et après 1960).
   - Chapitre 2 : Les grands courants littéraires (Classicisme, Lumières, Romantisme, Réalisme, Naturalisme, Parnasse, Symbolisme, Surréalisme).
   - Chapitre 3 : Étude des genres littéraires (Poésie, Roman, Théâtre) avec banques complètes d'arguments et d'exemples par fonction (lyrique, esthétique, évasive/fictive, ludique, didactique, engagée).
   - Chapitre 4 : Outils de langue (6 familles de figures de style, 11 tonalités, table complète des connecteurs logiques, sémantique).
   - Chapitre 5 : Méthodologie et devoirs rédigés (Dissertation avec sujet "Au théâtre point n'est besoin de réfléchir", Commentaire composé avec poème "Gorgé de sang" de Mukala Kadima et "Fer de lance" de Zadi Zaourou, Résumé de texte et Production écrite).
   - Chapitre 6 : Citations commentées, résumés d'œuvres patrimoniales et guide des 40 sujets de dissertation décortiqués.

2. PHILOSOPHIE (Pages 48 à 78) :
   - Méthodologie canonique de la dissertation et du commentaire de texte (grille de lecture, étude ordonnée, critique interne/externe).
   - Applications modèles rédigées : Sujet "Faut-il envisager l'extinction de la philosophie..." et Commentaire intégral du texte de David Hume (Traité de la nature humaine).
   - Corpus d'arguments et citations par notions : Conscience, Inconscient, Mémoire/Oubli, Liberté, Violence, Société, Autrui, État, Loi, Droit/Justice, Religion, Athéisme, Foi/Raison, Humanité, Sujet/Objet de l'histoire, Colonisation, Mythe/Raison, Progrès technique, Travail, Art, Désir, Langage, Vérité.

3. GÉOGRAPHIE (Pages 80 à 94) :
   - Économie ivoirienne : Fondements naturels (relief, climat, sols, sous-sol, réseau hydrographique), humains (population 23-29M, 77% < 35 ans) et politiques (libéralisme, CEPICI, État-planificateur).
   - Secteurs d'activité de la Côte d'Ivoire : Primaire (Agriculture, Pêche, Élevage, Forêt), Secondaire (Agroalimentaire, SIR, textile, BTP), Tertiaire (Commerce, Informel >60%, Transports, Tourisme), Problèmes et Solutions d'émergence.
   - La Corée du Sud : Modèle de développement émergent (Miracle du fleuve Han, Chaebols, éducation, industrie de pointe, énergie nucléaire).
   - Intégration régionale et coopération Nord-Sud : La CEDEAO (Lagos 1975, ECOMOG, passeport CEDEAO, limites) et relations UE-ACP (accords de Yaoundé, Lomé I-IV, Cotonou 2000).

4. HISTOIRE (Pages 96 à 126) :
   - L'ONU : Naissance progressive (San Francisco 1945, 193 États), organes directeurs, institutions spécialisées, succès, échecs, limites et réformes.
   - La Guerre Froide (1947-1991) : Bipolarisation (Truman, Marshall, Jdanov, Kominform), crises de Berlin (1948-1949 et mur de 1961), crise de Cuba (1962), Vietnam (1964-1975), fin de l'URSS (1991), monde unipolaire puis multipolaire (BRICS).
   - Décolonisation africaine : Nationalismes, indépendance pacifique de la Côte d'Ivoire (1944-1960, SAA, loi Houphouët-Boigny, Dimbokro 1950, 7 août 1960), guerre d'Algérie (1954-1962), création de l'Union Africaine (2002).
   - Civilisations : Monde occidental contemporain vs Civilisation négro-africaine traditionnelle et ses mutations.
   - Méthodologie et Grille des 24 grands sujets types d'examen en Histoire-Géographie.`,
    methodologySteps: [
      {
        name: 'Étape 1 : Maîtrise des concepts et repérage contextuel',
        description: 'Définir rigoureusement les notions clés, situer les bornes spatio-temporelles et identifier la consigne d\'action.',
        keyRules: ['Pas d\'anachronisme', 'Définitions philosophiques et littéraires précises']
      },
      {
        name: 'Étape 2 : Structuration des axes et argumentation solide',
        description: 'Mobiliser les arguments certifiés du guide, étayés par des citations d\'auteurs ou des données chiffrées officielles.',
        keyRules: ['Chaque argument = Idée + Explication + Illustration + Commentaire', 'Transitions soignées entre les axes']
      },
      {
        name: 'Étape 3 : Rédaction selon les normes académiques',
        description: 'Introduction en 3 blocs, paragraphes aérés avec alinéa, et conclusion conclusive avec ouverture équilibrée.',
        keyRules: ['Éviter le style personnel (je/tu)', 'Respecter le barème officiel du Baccalauréat']
      }
    ],
    coreKnowledgeExcerpt: `Extrait des données clés du guide officiel de 127 pages :
- Littérature négro-africaine : Negro-Renaissance (Harlem, 1930), négritude (Césaire, Senghor, Damas), désenchantement postcolonial (Kourouma, Sembène Ousmane).
- Philosophie : 17 notions traitées bilatéralement (Thèse / Antithèse) avec citations complètes de Descartes, Kant, Spinoza, Marx, Freud, Sartre, Bergson, Nietzsche, Rousseau, Aristote.
- Géographie ivoirienne : 1er producteur mondial de cacao, 77% de population jeune de moins de 35 ans, 560 km de littoral, ports d'Abidjan et San-Pédro.
- Corée du Sud : 70% de montagnes, PIB tiré par les Chaebols (Samsung, POSCO, Hyundai), 5e producteur nucléaire mondial.
- Histoire : Rupture de 1947 (Doctrines Truman et Jdanov), crise des missiles de Cuba (1962), indépendance ivoirienne (7 août 1960), accords d'Évian (1962).`,
    sampleInBookletSubjects: [
      'Français : « Au théâtre, point n\'est besoin de réfléchir, de penser. Tout est dans l\'hilarité. » Expliquez et discutez.',
      'Français : Commentaire composé du poème « Gorgé de sang » de Mukala Kadima N\'zuji (Redire les mots anciens).',
      'Philosophie : « Faut-il envisager l\'extinction de la philosophie dans l\'ordonnancement du savoir et de l\'existence ? »',
      'Philosophie : Commentaire de texte extrait du Traité de la nature humaine de David Hume.',
      'Histoire : « Les fondements et manifestations des nationalismes en Afrique »',
      'Géographie : « La place de l\'industrie dans l\'économie ivoirienne »'
    ],
    sampleNewUntreatedSubjects: [
      'Sujet Bac : « La littérature n\'a pas la vérité pour objet. Il faut laisser la vérité aux sciences car elle est leur objet. L\'art du roman est de savoir mentir. »',
      'Sujet Bac : « Peut-on considérer la société comme un obstacle à la liberté de l\'individu ? »',
      'Sujet Bac : « En quoi le capital humain constitue-t-il le moteur essentiel du développement économique de la Côte d\'Ivoire ? »',
      'Sujet Bac : « Analysez les causes et les manifestations de la Coexistence Pacifique entre 1956 et 1979. »'
    ]
  }
];








