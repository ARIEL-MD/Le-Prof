import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_6E_HISTOIRE_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 6ÈME - THÈME 1 : LES BASES DE L'ÉTUDE DE L'HISTOIRE - LEÇON 1
  // ========================================================
  {
    id: 'hist-6e-histoire-et-son-objet',
    discipline: 'histoire',
    disciplineLabel: 'Histoire',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Les bases de l\'étude de l\'histoire',
    lessonTitle: 'L\'histoire et son objet : Définition, événement, civilisation, démarche scientifique et utilité',
    objectifs: [
      'Donner l\'étymologie du mot histoire (du grec « Historia » signifiant enquête) et identifier le père fondateur de l\'histoire : Hérodote d\'Halicarnasse',
      'Définir l\'histoire comme la science humaine qui étudie le passé des hommes et des sociétés',
      'Définir et illustrer la notion d\'événement historique (fait marquant ayant transformé une société, ex : indépendance de la Côte d\'Ivoire le 7 août 1960, Seconde Guerre mondiale 1939-1945)',
      'Définir la notion de civilisation (ensemble des croyances, traditions, arts, techniques, coutumes et modes de vie d\'un peuple)',
      'Énumérer dans l\'ordre les 5 étapes de la démarche scientifique de l\'historien : 1. Détermination du problème, 2. Élaboration d\'hypothèses, 3. Recherche ou collecte d\'informations, 4. Vérification des hypothèses (critique), 5. Rédaction du rapport ou synthèse',
      'Expliquer l\'utilité et l\'intérêt de l\'histoire pour la formation du citoyen (connaître le passé pour comprendre le présent et préparer l\'avenir, cultiver la tolérance, l\'impartialité selon Ibn Khaldoun, et le patriotisme)'
    ],
    fullCourseContent: `1. Introduction et Définition de l'Histoire :
- Étymologie : Le mot histoire vient du grec ancien « Historia », qui signifie « enquête », « recherche », « témoignage ».
- Le père de l'histoire : Le Grec Hérodote (Ve siècle avant J.-C.) est considéré comme le fondateur de la discipline historique, car il a été le premier à voyager pour enquêter auprès des témoins et relater méthodiquement les guerres médiques.
- Définition : L'histoire est la science humaine qui étudie et fait revivre le passé de l'humanité à travers les traces et documents conservés.

2. L'Objet d'Étude de l'Histoire :
L'histoire s'intéresse à deux composantes fondamentales :
- La notion d'événement historique :
  * Un événement est un fait saillant, mémorable et daté qui a exercé une influence déterminante sur l'évolution d'une communauté, d'un peuple ou d'une nation.
  * Exemples : La proclamation de l'indépendance de la République de Côte d'Ivoire le 7 août 1960 par Félix Houphouët-Boigny ; la Seconde Guerre mondiale (1939-1945) ; l'abolition de la traite négrière en 1848.
- La notion de civilisation :
  * Une civilisation est l'ensemble des mœurs, des coutumes, des croyances religieuses, des arts, des savoir-faire techniques, des lois et des institutions qui caractérisent une société humaine à une époque donnée.
  * Règle d'or : Il n'existe aucun peuple sans civilisation ! Chaque groupe humain possède ses propres traditions, son architecture, ses fêtes et son organisation.

3. La Démarche Scientifique de l'Historien en 5 Étapes :
L'histoire n'est pas un simple recueil de contes imaginaires ; c'est une science rigoureuse qui obéit à une méthode critique en cinq étapes successives :
1. La détermination du problème : L'historien pose une question précise de recherche sur un fait du passé non éclairci.
2. L'élaboration des hypothèses : Il formule des suppositions logiques et provisoires pour tenter d'expliquer ce problème.
3. La collecte ou recherche des informations : Il rassemble toutes les sources disponibles (archives écrites, récits oraux, fouilles archéologiques, photographies).
4. La vérification et confrontation des hypothèses : Il examine minutieusement l'authenticité des documents, compare les versions et élimine les faux témoignages pour retenir les faits prouvés.
5. La conclusion par la rédaction d'un rapport : Il rédige une synthèse claire, chronologique et objective des événements.

4. L'Intérêt et l'Utilité de l'Histoire :
L'histoire est indispensable à la société humaine pour plusieurs raisons :
- Comprendre le présent et préparer l'avenir : Un peuple qui ignore son passé est comme un arbre sans racines. Connaître les erreurs passées permet d'éviter de les reproduire.
- Former la conscience citoyenne : L'histoire enseigne l'amour de la patrie, le respect de la mémoire collective et le sentiment d'appartenance à une nation unie.
- Développer l'esprit critique et l'impartialité : Comme l'écrivait le grand historien médiéval Ibn Khaldoun (1332-1406) dans son livre « Al Muqaddima », l'historien doit rejeter l'esprit de parti, le fanatisme et la complaisance pour rechercher la vérité nue.
- Promouvoir la paix et la tolérance : La découverte de la richesse des autres civilisations détruit les préjugés et suscite le respect mutuel entre les peuples.`,
    definitions: [
      {
        term: 'Histoire',
        definition: 'Science humaine qui étudie, analyse et relate le passé des hommes et des sociétés.'
      },
      {
        term: 'Événement historique',
        definition: 'Fait marquant et important qui a transformé la vie d\'un peuple ou d\'une nation.'
      },
      {
        term: 'Civilisation',
        definition: 'Ensemble des croyances, traditions, techniques, institutions et modes de vie caractérisant une société.'
      },
      {
        term: 'Impartialité',
        definition: 'Attitude d\'objectivité et de neutralité qui consiste à juger ou rapporter des faits sans parti pris ni parti favori.'
      },
      {
        term: 'Hypothèse',
        definition: 'Supposition ou réponse provisoire posée au début d\'une enquête historique qu\'il convient de vérifier par les faits.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Les 5 étapes de la démarche historique',
        statement: '1. Détermination du problème -> 2. Élaboration d\'hypothèses -> 3. Collecte d\'informations -> 4. Vérification critique -> 5. Rédaction du rapport.'
      },
      {
        name: 'Principe d\'universalité des civilisations',
        statement: 'Tous les peuples sans exception ont une civilisation propre avec leurs coutumes, langues et structures sociales.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mener une enquête historique locale',
        procedure: '1. Choisir le sujet ou problème (ex: la fondation de son village). 2. Émettre des hypothèses de départ. 3. Recueillir les témoignages oraux des anciens/griots et consulter les écrits disponibles. 4. Confronter les récits pour éliminer les déformations et légendes. 5. Rédiger le compte rendu chronologique fidèle.',
        tip: 'Toujours croiser au moins deux témoignages indépendants avant de valider une information.'
      }
    ],
    examples: [
      {
        statement: 'Un élève affirme que l\'histoire est une fiction comme un roman. Que lui répondre ?',
        solution: 'L\'histoire se distingue de la fiction par sa démarche scientifique : elle s\'appuie exclusivement sur des preuves matérielles vérifiables, des documents authentiques et une méthode critique rigoureuse, alors que le roman repose sur l\'imagination de l\'auteur.'
      }
    ],
    exercises: [
      {
        question: 'Quelle est la signification étymologique du mot Histoire et qui en est considéré comme le père ?',
        correction: 'Le mot histoire vient du mot grec « Historia » signifiant « enquête » ou « recherche ». Son fondateur est le savant grec Hérodote.'
      },
      {
        question: 'Range dans l\'ordre chronologique les étapes de la démarche de l\'historien : a) Vérification des hypothèses ; b) Rédaction du rapport ; c) Détermination du problème ; d) Élaboration d\'hypothèses ; e) Collecte des informations.',
        correction: 'L\'ordre méthodique est : 1. c (Détermination du problème) -> 2. d (Élaboration d\'hypothèses) -> 3. e (Collecte des informations) -> 4. a (Vérification des hypothèses) -> 5. b (Rédaction du rapport).'
      },
      {
        question: 'Cite trois valeurs civiques et morales enseignées par l\'histoire.',
        correction: 'L\'histoire enseigne la vérité, la tolérance, la justice, la solidarité, l\'esprit critique et la sagesse.'
      }
    ],
    evaluationSituation: {
      context: 'Ton camarade de classe Gabriel néglige les cours d\'histoire sous prétexte que cette matière n\'est qu\'une suite de vieilles querelles sans utilité pour son avenir, affirmant qu\'il préfère les sciences exactes. Ton ami Robert lui répond : « Tu te trompes, l\'histoire est une science rigoureuse et indispensable à la vie citoyenne ».',
      instructions: [
        '1. Identifie le problème soulevé dans cette situation.',
        '2. Explique pourquoi l\'on peut affirmer que l\'histoire est une véritable science.',
        '3. Donne deux arguments précis pour convaincre Gabriel de l\'importance vitale de l\'histoire dans sa formation d\'homme et de citoyen.'
      ],
      solutionGuide: '1. Le problème posé est la méconnaissance de la valeur scientifique et de l\'utilité de l\'histoire. 2. L\'histoire est une science car elle ne se contente pas de raconter des fables : elle utilise une méthode scientifique rigoureuse (recherche de preuves, collecte de sources, critique interne et externe des documents, vérification des hypothèses et neutralité de l\'analyse). 3. Arguments : a) L\'histoire permet de connaître ses racines, de comprendre le monde actuel et d\'éclairer les choix de demain ; b) Elle forge l\'esprit critique contre la manipulation et développe la tolérance interculturelle indispensable dans un pays cosmopolite comme la Côte d\'Ivoire.'
    },
    examTraps: [
      'Confondre le mot « histoire » au sens de récit imaginaire/conte avec la « science historique » qui repose sur des preuves.',
      'Oublier une des cinq étapes de la démarche scientifique ou les intervertir.',
      'Croire que certains peuples du monde n\'avaient pas de civilisation avant l\'écriture.'
    ],
    quickMemo: 'Histoire = « Historia » (enquête) | Père = Hérodote | Objet = événements passés + civilisations | 5 étapes : Problème -> Hypothèses -> Collecte -> Vérification -> Rapport | Utilité : connaître le passé, bâtir l\'avenir, tolérance et impartialité (Ibn Khaldoun).',
    keywords: ['histoire', 'historia', 'Hérodote', 'événement', 'civilisation', 'démarche scientifique', 'impartialité', 'Ibn Khaldoun', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 1 : LES BASES DE L'ÉTUDE DE L'HISTOIRE - LEÇON 2
  // ========================================================
  {
    id: 'hist-6e-sources-de-histoire',
    discipline: 'histoire',
    disciplineLabel: 'Histoire',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Les bases de l\'étude de l\'histoire',
    lessonTitle: 'Les sources de l\'histoire : Écrites, orales, archéologiques, audiovisuelles et critique des sources',
    objectifs: [
      'Définir ce qu\'est une source historique (tout vestige, trace, récit ou document permettant de reconstituer les faits passés)',
      'Identifier et caractériser les 4 grandes catégories de sources : sources écrites, sources orales (tradition orale), sources archéologiques (ou muettes) et sources audiovisuelles',
      'Donner des exemples concrets pour chaque type de source (Tarikhs de Tombouctou, manuscrits arabes d\'Ibn Battuta, récits des griots mandingues, légende d\'Abla Pokou, peintures rupestres, poteries, émissions de radio/télé, internet)',
      'Définir le rôle des sciences auxiliaires de l\'histoire : archéologie, datation au carbone 14, numismatique (monnaies), dendrochronologie (bois), épigraphie (inscriptions sur pierre)',
      'Analyser les difficultés inhérentes à chaque type de source (fragilité des manuscrits, déformation et oubli dans la tradition orale, coût élevé et acidité des sols pour l\'archéologie)',
      'Expliquer la nécessité impérieuse de confronter plusieurs sources pour établir la vérité historique'
    ],
    fullCourseContent: `1. Qu'est-ce qu'une Source Historique ?
- Définition : Les sources de l'histoire sont l'ensemble des éléments, vestiges, témoignages et documents laissés par les générations passées qui permettent à l'historien de reconstituer fidèlement les faits d'autrefois.
- Sans sources, il n'y a pas d'histoire ! L'historien ne peut rien inventer.

2. Les Quatre Grands Types de Sources Historiques :
- Les sources écrites :
  * Ce sont tous les textes consignés sur des supports matériels (papyrus, parchemins, tablettes d'argile, papier, stèles gravées).
  * Exemples : Manuscrits anciens de Tombouctou, archives nationales de Côte d'Ivoire, lettres administratives, livres saints (Bible, Coran), mémoires d'hommes d'État, chroniques arabes médiévales (les Tarikhs d'El Bekri au XIe siècle, d'Ibn Battuta au XIVe siècle, le Tarikh es-Soudan d'Abderrahmane Es Sâdi).
  * Avantages : Elles fixent les faits avec précision dans le temps et ne changent pas avec les années.
- Les sources orales (ou tradition orale) :
  * Ce sont les témoignages verbaux, récits, chants, contes, légendes et proverbes transmis de bouche à oreille, de génération en génération.
  * Porteurs de la mémoire : Les vieillards, les patriarches, les chefs coutumiers et surtout les griots (comme le griot Djeli Mamadou Kouyaté dans l'épopée de Soundjata Keïta).
  * Importance pour l'Afrique : L'écrivain malien Amadou Hampâté Bâ disait : « En Afrique, un vieillard qui meurt est une bibliothèque qui brûle ». La tradition orale a permis aux peuples d'Afrique de préserver leur mémoire séculaire en l'absence d'écriture formelle.
- Les sources archéologiques (ou sources muettes) :
  * Ce sont tous les objets matériels fabriqués ou utilisés par les hommes du passé mis au jour lors de fouilles.
  * Exemples : Outils en pierre taillée ou polie, armes en fer, débris de poteries, ossements humains et animaux, bijoux, ruines de cités anciennes (comme Koumbi Saleh), monnaies antiques, amas coquilliers.
  * Méthodes de datation : La méthode du Carbone 14 (pour les matières organiques anciennes jusqu'à 50 000 ans) et le recours aux sciences auxiliaires (la numismatique pour les monnaies, la dendrochronologie pour l'âge des bois via les cernes, l'épigraphie pour les inscriptions).
- Les sources audiovisuelles et multimédias :
  * Ce sont les documents contemporains enregistrés : émissions de radio, reportages télévisés, photographies, films d'archives, disques, enregistrements numériques sur internet.

3. Les Limites et Difficultés Inhérentes aux Sources :
Aucune source n'est infaillible à 100 % :
- Difficultés des sources écrites : Rares en Afrique subsaharienne ancienne ; coût élevé ; problèmes de traduction et de langue ; fragilité des supports détruits par les insectes ou l'humidité ; subjectivité des auteurs partisans.
- Difficultés des sources orales : Risque d'oubli avec le temps ; déformation involontaire des récits ; imprécision chronologique des dates ; tendance à embellir les victoires de son ethnie et à taire ses défaites.
- Difficultés des sources muettes : Coût financier considérable des chantiers de fouilles ; manque d'archéologues qualifiés ; sols ivoiriens acides et très humides qui dissolvent rapidement les ossements et le bois ; difficulté d'interpréter un objet muet.
- Difficultés des sources audiovisuelles : Fragilité des bandes magnétiques et clés USB ; risques de manipulation d'images et de fausses nouvelles (fake news).

4. La Règle Méthodologique : La Confrontation des Sources :
Pour s'approcher au plus près de la vérité historique, l'historien ne se fie jamais à un seul témoignage. Il doit impérativement CONFRONTER (croiser, comparer) les sources orales avec les découvertes archéologiques et les documents écrits existants.`,
    definitions: [
      {
        term: 'Source historique',
        definition: 'Tout document, vestige matériel ou témoignage oral permettant de prouver et reconstituer un événement du passé.'
      },
      {
        term: 'Tradition orale',
        definition: 'Ensemble des connaissances, coutumes et récits historiques transmis verbalement d\'une génération à la suivante.'
      },
      {
        term: 'Archéologie',
        definition: 'Science qui étudie le passé humain par la fouille et l\'analyse des vestiges matériels et objets enfouis dans le sol.'
      },
      {
        term: 'Carbone 14',
        definition: 'Méthode de datation radioactive permettant de déterminer l\'âge absolu de restes organiques fossiles (os, bois, charbon).'
      },
      {
        term: 'Numismatique',
        definition: 'Science auxiliaire de l\'histoire spécialisée dans l\'étude des médailles et des monnaies anciennes.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de confrontation des sources',
        statement: 'Pour établir la vérité d\'un fait passé, l\'historien doit croiser plusieurs sources différentes afin d\'en éliminer les erreurs et la subjectivité.'
      },
      {
        name: 'Valeur de la tradition orale en Afrique',
        statement: 'La tradition orale constitue une source historique capitale qui, rigoureusement vérifiée et recoupée avec l\'archéologie, restitue l\'histoire des peuples sans écriture.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Critiquer un document historique',
        procedure: '1. Identifier la nature de la source (écrite, orale, vestige, photo). 2. Vérifier l\'origine, l\'auteur et la date. 3. Évaluer l\'objectivité de l\'auteur (est-il témoin direct ? a-t-il un intérêt politique ou personnel ?). 4. Recouper avec d\'autres témoignages contemporains.',
        tip: 'Toujours se méfier des récits élogieux rédigés pour plaire aux rois ou aux vainqueurs.'
      }
    ],
    examples: [
      {
        statement: 'Quelle différence y a-t-il entre une source archéologique et une source écrite ?',
        solution: 'Une source écrite est un texte lisible sur papier, tablette ou pierre (archives, lettres, livres), tandis qu\'une source archéologique est un vestige matériel muet (objet, squelette, outil, poterie) extrait du sol par des fouilles et nécessitant une interprétation scientifique.'
      }
    ],
    exercises: [
      {
        question: 'Classe les éléments suivants selon leur catégorie de source : Les manuscrits de Tombouctou, la légende de la reine Abla Pokou, une poterie néolithique de Korhogo, un documentaire télévisé sur la colonisation.',
        correction: '- Source écrite : Les manuscrits de Tombouctou.\n- Source orale : La légende de la reine Abla Pokou.\n- Source archéologique : La poterie néolithique de Korhogo.\n- Source audiovisuelle : Le documentaire télévisé.'
      },
      {
        question: 'Cite deux difficultés majeures qui compliquent la recherche archéologique en Côte d\'Ivoire.',
        correction: '1. L\'acidité élevée des sols et le climat tropical très humide qui décomposent rapidement les ossements et le bois.\n2. Le coût financier très élevé des chantiers de fouilles et le manque d\'équipements spécialisés.'
      }
    ],
    evaluationSituation: {
      context: 'Pendant les vacances scolaires au village, ton camarade français en visite te présente un manuel d\'histoire de son pays richement illustré de textes anciens. Lorsque tu lui proposes de l\'emmener chez ton grand-père pour qu\'il lui raconte l\'histoire de votre peuple, il rétorque avec dédain : « La tradition orale ne vaut rien car elle n\'est pas écrite, vous n\'avez pas d\'histoire sans documents écrits ».',
      instructions: [
        '1. Nomme les deux types de sources opposées dans cette situation.',
        '2. Donne deux limites propres aux documents écrits et deux limites de la tradition orale.',
        '3. Réfute l\'affirmation de ton ami en montrant l\'importance inestimable de la tradition orale et la façon dont l\'historien moderne valide son contenu.'
      ],
      solutionGuide: '1. Il s\'agit des sources écrites et des sources orales (tradition orale). 2. Limites de l\'écrit : risque de falsification ou propagande de l\'auteur, fragilité des supports, exclusion des couches populaires qui ne savent pas écrire. Limites de l\'oral : risque d\'oubli, déformations dans le temps, imprécision des dates. 3. Réfutation : L\'Afrique possède une histoire millénaire transmise avec une prodigieuse fidélité par des castes professionnelles de mémoire comme les griots. De plus, l\'historien moderne ne prend pas la tradition orale aveuglément : il la confronte aux fouilles archéologiques (Koumbi Saleh, outils de fer, poteries) et aux écrits des voyageurs (Ibn Battuta, Tarikhs), ce qui lui confère une authenticité scientifique irréfutable.'
    },
    examTraps: [
      'Croire que la tradition orale est un ensemble de mensonges sans valeur historique.',
      'Oublier que les sources archéologiques sont aussi qualifiées de « sources muettes ».',
      'Attribuer la méthode du Carbone 14 aux documents audiovisuels (le carbone 14 ne date que les restes organiques vivants fossilisés).'
    ],
    quickMemo: '4 sources : Écrites (archives, livres, Tarikhs) | Orales (anciens, griots, contes) | Archéologiques / muettes (fossiles, poteries, fer, C14) | Audiovisuelles (vidéo, radio) | Règle : toujours CONFRONTER les sources pour trouver la vérité.',
    keywords: ['sources de l\'histoire', 'sources écrites', 'tradition orale', 'griot', 'sources archéologiques', 'sources muettes', 'carbone 14', 'Amadou Hampâté Bâ', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 1 : LES BASES DE L'ÉTUDE DE L'HISTOIRE - LEÇON 3
  // ========================================================
  {
    id: 'hist-6e-dignite-humaine-temps-de-guerre',
    discipline: 'histoire',
    disciplineLabel: 'Histoire',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Les bases de l\'étude de l\'histoire',
    lessonTitle: 'Les sources d\'information et la dignité humaine en temps de guerre ou de violence : Droit International Humanitaire (DIH)',
    objectifs: [
      'Distinguer les différentes sources d\'information en temps de guerre ou de crise : sources officielles/étatiques (armées, ministères), sources non officielles traditionnelles (témoins, victimes, ONG, journalistes) et sources multimédias/réseaux sociaux',
      'Expliquer l\'impact des rumeurs et fausses informations (fake news) qui attisent la haine et aggravent les violences',
      'Définir la dignité humaine (considération et respect inaliénable que mérite tout individu, sans distinction d\'ethnie, religion, âge, sexe ou état de santé)',
      'Identifier et classifier les atteintes à la dignité humaine : violences physiques (viols, meurtres, mutilations), violences morales (injures, humiliations), crimes de guerre (tortures, exécutions d\'otages) et crimes contre l\'humanité (génocides, déportations)',
      'Énumérer les conséquences désastreuses de ces atteintes : deuils, orphelins, traumatismes psychologiques, grossesses forcées, contamination au VIH-SIDA, cycle de vengeance',
      'Présenter le Droit International Humanitaire (DIH ou droit de la guerre), son histoire (Henry Dunant, bataille de Solférino 1859, création du CICR et Conventions de Genève)',
      'Citer les règles fondamentales du DIH : protection des civils, secours aux blessés, interdiction de la torture et des armes non conventionnelles'
    ],
    fullCourseContent: `1. Les Sources d'Information en Temps de Conflit :
En période de guerre civile, de violences intercommunautaires ou de conflit armé, la communication devient une arme stratégique. On distingue :
- Les sources étatiques ou officielles :
  * Communiqués de l'état-major militaire, déclarations des gouvernements belligérants diffusées par la télévision nationale, la radio d'État ou les agences officielles. Elles cherchent souvent à rassurer et à galvaniser les troupes.
- Les sources non officielles :
  * Les sources de terrain : Témoignages directs des victimes, des rescapés, déclarations des personnels humanitaires d'ONG (Croix-Rouge, Médecins Sans Frontières) et des journalistes indépendants accrédités.
  * Les sources multimédias et réseaux sociaux (WhatsApp, Facebook, TikTok) : Très rapides mais hautement dangereuses. Elles véhiculent souvent des rumeurs mensongères, des vidéos tronquées ou des incitations à la haine ethnique qui enflamment les tensions et provoquent des massacres aveugles.

2. Qu'est-ce que la Dignité Humaine ?
- Définition : La dignité humaine est le respect absolu, la valeur inestimable et la considération sacrée que mérite tout être humain par le simple fait qu'il est un homme, quelles que soient sa nationalité, son appartenance ethnique, sa religion, son statut social, son sexe ou son âge.

3. Les Atteintes à la Dignité Humaine et Leurs Conséquences :
Pendant les guerres, la dignité humaine est souvent bafouée à travers plusieurs catégories d'actes criminels :
- Violences physiques et destructions : Meurtres, mutilations corporelles, viols, pillages des biens privés et incendies de villages entiers.
- Violences morales : Injures publiques, humiliations, profanations d'édifices religieux (églises, mosquées), menaces de mort.
- Crimes de guerre : Assassinats prémédités de prisonniers de guerre désarmés, tortures, prises et exécutions d'otages, enrôlement d'enfants-soldats.
- Crimes contre l'humanité : Actes généralisés ou systématiques contre une population civile (déportations massives, disparitions forcées, génocide visant l'extermination d'un groupe humain).
- Conséquences tragiques sur la société :
  * Perte de milliers de vies humaines innocentes.
  * Multiplication d'orphelins sans abri et de veuves démunies.
  * Traumatismes psychologiques indélébiles.
  * Grossesses non désirées issues de viols et propagation dramatique du VIH-SIDA et d'infections sexuellement transmissibles.
  * Enracinement durable de la haine, de la méfiance et du désir de vengeance entre communautés.

4. La Préservation de la Dignité par le Droit International Humanitaire (DIH) :
- Origine historique :
  * En juin 1859, le citoyen suisse Henry Dunant est témoin des horreurs de la bataille de Solférino en Italie, où 40 000 soldats agonisent sans soins.
  * Choqué, il organise les premiers secours et fonde en 1863 la Croix-Rouge (CICR). Il recevra le tout premier Prix Nobel de la Paix en 1901.
  * En 1864 naît la première Convention de Genève, base du DIH.
- Règles d'or du DIH (qui s'imposent à tous les belligérants) :
  1. Les civils, les femmes et les enfants ne doivent jamais être attaqués ni pris pour cibles.
  2. Interdiction formelle de tuer ou blesser un combattant ennemi qui s'est rendu, qui est désarmé ou hors de combat.
  3. Secourir et soigner tous les blessés et malades, sans distinction de camp.
  4. Interdiction absolue de la torture et des traitements dégradants sur les prisonniers de guerre.
  5. Interdiction des armes qui causent des souffrances inutiles ou frappent à l'aveugle (mines antipersonnel, armes chimiques).
  6. Sanctuarisation des personnels médicaux et des convois de la Croix-Rouge (reconnaissables à l'emblème de la croix rouge ou du croissant rouge).`,
    definitions: [
      {
        term: 'Dignité humaine',
        definition: 'Principe fondamental selon lequel tout être humain a droit au respect absolu et inconditionnel de sa personne et de sa vie.'
      },
      {
        term: 'Droit International Humanitaire (DIH)',
        definition: 'Ensemble de règles internationales (Conventions de Genève) visant à limiter les effets des conflits armés et protéger les personnes vulnérables.'
      },
      {
        term: 'Crime de guerre',
        definition: 'Violation grave des lois et coutumes de la guerre commise à l\'encontre de civils ou de prisonniers (tortures, exécutions sommaires).'
      },
      {
        term: 'Crime contre l\'humanité',
        definition: 'Attaque généralisée et systématique lancée contre une population civile (génocide, extermination, esclavage).'
      },
      {
        term: 'CICR',
        definition: 'Comité International de la Croix-Rouge, organisation humanitaire neutre et indépendante fondée par Henry Dunant en 1863.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Immunité des personnes civiles',
        statement: 'Les populations civiles et les infrastructures non militaires (écoles, hôpitaux, lieux de culte) ne doivent en aucun cas faire l\'objet d\'attaques.'
      },
      {
        name: 'Protection des blessés et prisonniers',
        statement: 'Tout soldat désarmé ou blessé doit être soigné et respecté ; la torture est un crime international imprescriptible.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Vérifier une information en période de tension pour éviter les rumeurs',
        procedure: '1. Identifier la source exacte de la publication (est-ce un canal officiel ou un compte anonyme ?). 2. Analyser les images à l\'aide d\'une recherche inversée pour repérer les faux montages. 3. Attendre la confirmation des médias de référence et des ONG humanitaires. 4. Ne pas partager de contenus haineux ou non vérifiés.',
        tip: 'En période de crise, partager une fausse vidéo peut coûter des vies humaines innocentes.'
      }
    ],
    examples: [
      {
        statement: 'Un soldat capture un combattant ennemi blessé et sans arme. Selon le DIH, a-t-il le droit de l\'achever ? Justifie.',
        solution: 'Non, c\'est formellement interdit et cela constitue un crime de guerre. Selon le DIH, un combattant désarmé ou blessé est hors de combat ; il a droit au respect de sa vie, à des soins médicaux immédiats et à un traitement digne en tant que prisonnier de guerre.'
      }
    ],
    exercises: [
      {
        question: 'Qui est le fondateur de la Croix-Rouge et quel événement l\'a poussé à agir ?',
        correction: 'Le fondateur est le Suisse Henry Dunant. Il a été marqué par l\'abandon des milliers de blessés lors de la sanglante bataille de Solférino en 1859.'
      },
      {
        question: 'Cite trois conséquences dramatiques du viol utilisé comme arme de guerre sur les femmes.',
        correction: '1. Des traumatismes physiques et la stérilité.\n2. La transmission d\'infections graves comme le VIH-SIDA.\n3. Des grossesses non désirées et une détresse psychologique profonde.'
      }
    ],
    evaluationSituation: {
      context: 'Un conflit éclate entre deux villages voisins en Côte d\'Ivoire suite à des messages vocaux anonymes partagés sur WhatsApp prétendant faussement qu\'un groupe avait agressé un transporteur. Des jeunes armés de machettes attaquent le village d\'en face, incendiant des concessions, blessant des vieillards et agressant des femmes. Choqué, le préfet t\'invite à rédiger un message de sensibilisation radiodiffusé.',
      instructions: [
        '1. Nomme la source d\'information à l\'origine du drame et relève deux atteintes à la dignité humaine commises.',
        '2. Explique le danger de propager des rumeurs non vérifiées en période de tension sociale.',
        '3. Rédige un court message civique rappelant aux populations l\'importance du respect de la dignité humaine et des règles du DIH.'
      ],
      solutionGuide: '1. Source à l\'origine : Les réseaux sociaux / messageries instantanées (rumeurs non vérifiées). Atteintes : incendies de maisons (destructions de biens), blessures sur vieillards (violences physiques), agressions sexuelles sur femmes. 2. Le partage irresponsable de rumeurs enflamme la colère, aveugle le jugement et déclenche des représailles violentes contre des innocents. 3. Message : « Chers concitoyens, aucune rumeur ne doit briser notre fraternité. Toute vie humaine est sacrée et inviolable. La dignité de la personne doit être respectée en tout temps et en tout lieu. Rejetons la violence, refusons de nous faire justice nous-mêmes, protégeons les femmes, les enfants et les personnes âgées, et faisons confiance à la justice de notre pays pour que règne la paix ».'
    },
    examTraps: [
      'Penser que la guerre donne tous les droits aux combattants (les règles du DIH s\'appliquent obligatoirement à tous les camps).',
      'Confondre les ONG humanitaires indépendantes (Croix-Rouge) avec les sources étatiques officielles des armées.',
      'Croire que les civils peuvent être visés s\'ils appartiennent à l\'ethnie ou au camp adverse.'
    ],
    quickMemo: 'Dignité humaine : valeur sacrée de tout être humain | Rumeurs/réseaux sociaux = amplificateurs de haine | Atteintes : violences physiques, crimes de guerre, crimes contre l\'humanité | Protection : DIH (Conventions de Genève, Henry Dunant, CICR 1863) | Ne jamais attaquer les civils ni torturer les blessés.',
    keywords: ['dignité humaine', 'DIH', 'Droit International Humanitaire', 'Conventions de Genève', 'Henry Dunant', 'CICR', 'crimes de guerre', 'rumeurs', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 1 : LES BASES DE L'ÉTUDE DE L'HISTOIRE - LEÇON 4
  // ========================================================
  {
    id: 'hist-6e-notion-de-chronologie',
    discipline: 'histoire',
    disciplineLabel: 'Histoire',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Les bases de l\'étude de l\'histoire',
    lessonTitle: 'La notion de chronologie : Mesure du temps, calcul des siècles, calendrier grégorien/musulman et frise chronologique',
    objectifs: [
      'Donner l\'étymologie de la chronologie (du grec « Chronos » = temps et « Logos » = étude/science) et la définir comme la science de la mesure et de la localisation des événements dans le temps',
      'Distinguer les unités de temps court (heure, jour, semaine, mois, année, décennie = 10 ans) et les unités de temps long (génération = 25 ans, siècle = 100 ans, millénaire = 1000 ans ou 10 siècles, époque, période, ère)',
      'Calculer avec exactitude le siècle correspondant à une année donnée (règle : ajouter 1 au nombre des centaines)',
      'Écrire et lire correctement les siècles en chiffres romains (I, V, X, L, C, D, M)',
      'Identifier les points de repère des ères : l\'an 1 de l\'ère chrétienne (naissance de Jésus-Christ, calendrier grégorien) et l\'an 622 de l\'ère musulmane (l\'Hégire, départ du Prophète Mahomet de La Mecque à Médine)',
      'Construire avec précision une frise chronologique horizontale (choix de l\'échelle, orientation de gauche à droite, flèche vers le futur, dates et événements, titre et légende)'
    ],
    fullCourseContent: `1. Définition et Intérêt de la Chronologie :
- Étymologie : Formé à partir des racines grecques « Chronos » (temps) et « Logos » (discours, étude, science).
- Définition : La chronologie est la science qui étudie le temps et fixe l'ordre exact et la date de déroulement des événements historiques.
- Rôle en histoire : Les événements n'ont de sens que s'ils sont ordonnés dans le temps. La chronologie permet d'établir les liens de cause à effet et d'éviter les anachronismes (erreurs de date).

2. Les Unités de Mesure du Temps :
- Les unités de temps court :
  * 1 heure = 60 minutes
  * 1 jour = 24 heures
  * 1 semaine = 7 jours
  * 1 mois = 28, 29, 30 ou 31 jours
  * 1 an (année ordinaire) = 365 jours (ou 366 jours lors d'une année bissextile tous les 4 ans) = 52 semaines = 12 mois.
  * 1 décennie = 10 ans.
- Les unités de temps long :
  * 1 génération = environ 25 à 30 ans (durée moyenne séparant la naissance des parents de celle de leurs enfants).
  * 1 siècle = 100 ans = 10 décennies.
  * 1 millénaire = 1 000 ans = 10 siècles = 100 décennies.
  * Époque / Période : Tranche de temps plus ou moins longue délimitée par des ruptures majeures.
  * Ère : Espace de temps très long prenant son point de départ à un événement fondateur majeur.

3. Règle de Calcul et Écriture des Siècles :
- En histoire, les siècles s'écrivent obligatoirement en CHIFFRES ROMAINS.
- Tableau de correspondance des chiffres romains :
  * 1 = I | 5 = V | 10 = X | 50 = L | 100 = C | 500 = D | 1000 = M
  * Règle : Un même signe ne peut jamais être écrit plus de 3 fois consécutives (ex : 4 s'écrit IV et non IIII ; 9 s'écrit IX ; 40 s'écrit XL).
- Règle de calcul du siècle à partir d'une année :
  * Pour une année se terminant par « 00 » (ex: 1500, 1900) : Le siècle est égal au nombre formé par les chiffres des centaines (1500 -> XVe siècle ; 1900 -> XIXe siècle).
  * Pour toute autre année (ne se terminant pas par 00) : On prend le nombre des centaines et on y AJOUTE 1 :
    - 374 -> centaine = 3 -> 3 + 1 = IVe siècle.
    - 1235 -> centaines = 12 -> 12 + 1 = XIIIe siècle.
    - 1789 -> centaines = 17 -> 17 + 1 = XVIIIe siècle.
    - 1960 -> centaines = 19 -> 19 + 1 = XXe siècle.
    - 2024 -> centaines = 20 -> 20 + 1 = XXIe siècle.
    - Années négatives (av. J.-C.) : -25 -> Ier siècle av. J.-C. ; -500 -> VIe siècle av. J.-C.

4. Les Points de Départ des Échelles de Temps (Les Ères) :
Toutes les civilisations n'ont pas adopté le même repère initial :
- L'ère chrétienne (Calendrier grégorien) :
  * Point de départ : L'an 1 marque la naissance de Jésus-Christ.
  * C'est le calendrier civil d'usage officiel en Côte d'Ivoire et dans la plupart des pays du monde.
  * Les événements antérieurs à l'an 1 sont notés « avant Jésus-Christ » (av. J.-C.) ou précédés du signe « moins » (-). Attention : avant J.-C., les années se comptent à rebours (ex: -3000 est plus ancien que -1500).
- L'ère musulmane (Calendrier hégirien) :
  * Point de départ : L'an 622 de l'ère chrétienne, correspondant à l'Hégire (départ / émigration du prophète Mahomet de La Mecque vers la ville de Médine, jadis nommée Yathrib).
  * Ce calendrier lunaire compte des années de 354 ou 355 jours.

5. Méthodologie de Construction de la Frise Chronologique :
La frise chronologique est un ruban ou axe orienté sur lequel sont représentés des faits historiques dans l'ordre de leur déroulement.
- Étapes de construction sur papier :
  1. Tracer deux droites parallèles horizontales espacées de 1 à 2 cm.
  2. Fermer l'extrémité gauche par un trait vertical et terminer l'extrémité droite par une flèche indiquant que le temps continue.
  3. Choisir et appliquer une échelle régulière (ex: 1 cm pour 10 ans, ou 3 cm pour 1000 ans).
  4. Graduer l'axe à intervalles réguliers selon l'échelle.
  5. Positionner les repères de dates au-dessus de l'axe et inscrire les événements correspondants sous l'axe.
  6. Donner un titre complet à la frise et mentionner l'échelle retenue.`,
    definitions: [
      {
        term: 'Chronologie',
        definition: 'Science qui étudie la mesure du temps et permet de situer et ordonner les événements historiques dans leur succession logique.'
      },
      {
        term: 'Siècle',
        definition: 'Unité de temps long équivalant à une durée de cent (100) années consécutives.'
      },
      {
        term: 'Millénaire',
        definition: 'Période de temps équivalant à mille (1000) ans, soit dix (10) siècles.'
      },
      {
        term: 'Hégire',
        definition: 'Événement de l\'an 622 marquant le départ du prophète Mahomet de La Mecque à Médine, début de l\'ère musulmane.'
      },
      {
        term: 'Frise chronologique',
        definition: 'Représentation graphique linéaire graduée figurant la succession des faits historiques selon une échelle de temps déterminée.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle du calcul des siècles',
        statement: 'Si l\'année ne finit pas par 00 : Siècle = (Chiffre des centaines) + 1. Les siècles s\'écrivent obligatoirement en chiffres romains.'
      },
      {
        name: 'Comptage du temps avant Jésus-Christ',
        statement: 'Avant l\'an 1 (av. J.-C.), le temps se compte à rebours : plus le chiffre négatif est grand, plus l\'événement est ancien (-3000 est antérieur à -500).'
      }
    ],
    formulas: [
      {
        name: 'Formule du siècle',
        formula: '\\text{Année } A = (C \\times 100) + R \\implies \\text{Siècle} = \\begin{cases} C & \\text{si } R = 0 \\\\ C + 1 & \\text{si } R > 0 \\end{cases}',
        explanation: 'Où C est le nombre des centaines et R le reste (dizaines et unités).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer le siècle d\'une année',
        procedure: '1. Isoler les deux derniers chiffres de l\'année. 2. S\'ils valent 00, le siècle est le nombre restant devant (ex: 1800 -> XVIIIe s.). 3. S\'ils sont différents de 00, ajouter 1 au nombre restant devant (ex: 1960 -> 19 + 1 = 20 -> XXe siècle). 4. Transcrire le résultat en chiffres romains.',
        tip: 'Attention : l\'année 2000 appartient au XXe siècle, mais 2001 inaugure le XXIe siècle.'
      }
    ],
    examples: [
      {
        statement: 'À quel siècle appartiennent les dates suivantes : 1492, 476, 2010, -500 ?',
        solution: '- 1492 : 14 + 1 = XVe siècle.\n- 476 : 4 + 1 = Ve siècle.\n- 2010 : 20 + 1 = XXIe siècle.\n- -500 : Ve siècle avant J.-C. (ou -Ve siècle).'
      }
    ],
    exercises: [
      {
        question: 'Range ces années de la plus ancienne à la plus récente : 1960 ; -1275 ; 2002 ; 65 ; -3000 ; 1789.',
        correction: 'Ordre chronologique : -3000 < -1275 < 65 < 1789 < 1960 < 2002.'
      },
      {
        question: 'Quelle est la différence entre le calendrier grégorien et le calendrier musulman quant à leur point de départ ?',
        correction: 'Le calendrier grégorien (ère chrétienne) prend pour point de départ la naissance de Jésus-Christ (an 1), tandis que le calendrier musulman prend pour point de départ l\'Hégire en l\'an 622 après J.-C.'
      }
    ],
    evaluationSituation: {
      context: 'En effectuant des recherches au CDI, un élève de 6ème découvre les événements marquants de l\'histoire contemporaine de la Côte d\'Ivoire : 1920 (fin de la pacification coloniale) ; 1960 (indépendance) ; 1993 (décès de Félix Houphouët-Boigny) ; 2002 (début de la rébellion armée) ; 2010 (crise postélectorale). Il doit construire une frise chronologique avec l\'échelle : 1 cm pour 10 ans, largeur 2 cm.',
      instructions: [
        '1. Détermine le siècle correspondant aux années 1920, 1960 et 2010.',
        '2. Donne le nombre d\'années écoulées entre la fin de la conquête (1920) et l\'indépendance (1960).',
        '3. Décris les étapes pour construire correctement cette frise chronologique sur une feuille de papier.'
      ],
      solutionGuide: '1. 1920 et 1960 appartiennent au XXe siècle (19 + 1) ; 2010 appartient au XXIe siècle (20 + 1). 2. Durée : 1960 - 1920 = 40 ans (soit 4 décennies). 3. Étapes de construction : a) Tracer deux segments horizontaux parallèles de 2 cm de largeur et d\'environ 10 cm de long ; b) Graduer tous les 1 cm (chaque centimètre représentant 10 ans, soit 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010) ; c) Terminer à droite par une flèche ; d) Pointer avec précision les dates et y associer les événements ; e) Écrire le titre « Frise chronologique des repères contemporains de la Côte d\'Ivoire » et mentionner l\'échelle « 1 cm = 10 ans ».'
    },
    examTraps: [
      'Écrire les siècles en chiffres arabes (ex: 21ème siècle au lieu de XXIe siècle est compté faux à l\'examen).',
      'Confondre l\'ordre avant J.-C. : l\'an -1000 est antérieur à l\'an -500 (et non l\'inverse).',
      'Oublier d\'ajouter 1 au chiffre des centaines pour les années courantes.'
    ],
    quickMemo: 'Chronos (temps) + Logos (science) | Siècle = 100 ans (chiffres romains I, V, X, L, C, D, M) | Siècle = centaines + 1 | Calendrier chrétien : An 1 (naissance Jésus) | Calendrier musulman : 622 (l\'Hégire) | Frise : échelle fixe, orientée vers la droite avec flèche.',
    keywords: ['chronologie', 'mesure du temps', 'siècle', 'chiffres romains', 'ère chrétienne', 'ère musulmane', 'Hégire', 'frise chronologique', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 1 : LES BASES DE L'ÉTUDE DE L'HISTOIRE - LEÇON 5
  // ========================================================
  {
    id: 'hist-6e-grandes-periodes-histoire',
    discipline: 'histoire',
    disciplineLabel: 'Histoire',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Les bases de l\'étude de l\'histoire',
    lessonTitle: 'Les grandes périodes de l\'histoire : Découpage universel, périodisation de l\'Afrique et de la Côte d\'Ivoire',
    objectifs: [
      'Définir la notion de période historique (intervalle de temps continu marqué par des caractéristiques communes) et de rupture (événement charnière marquant la fin d\'une époque et l\'ouverture d\'une autre)',
      'Identifier et caractériser les 4 grandes périodes classiques de l\'histoire universelle : Antiquité (-3000 à 476), Moyen Âge (476 à 1492), Temps Modernes (1492 à 1789), Époque Contemporaine (1789 à nos jours)',
      'Expliquer les événements de rupture mondiale : l\'invention de l\'écriture en -3000, la chute de l\'Empire romain d\'Occident en 476, la découverte de l\'Amérique par Christophe Colomb en 1492, la Révolution française en 1789',
      'Décrire la périodisation spécifique de l\'histoire de l\'Afrique en 5 phases : période obscure (-3000 à 476), Moyen Âge africain / grands empires (476 à 1492), traite négrière atlantique (1492 à 1848), colonisation (1848 à 1960), indépendances (depuis 1960)',
      'Décrire le découpage historique de la Côte d\'Ivoire en 4 phases : période obscure (-1500 à 1470), période précoloniale (1470 à 1893), période coloniale (1893 à 1960), période des indépendances (depuis le 7 août 1960)',
      'Construire et interpréter les frises chronologiques comparées de ces découpages'
    ],
    fullCourseContent: `1. Notions Fondamentales : Période et Rupture Historique :
- La période : En histoire, une période est une tranche de temps plus ou moins longue au cours de laquelle les hommes partagent un mode de vie, des techniques et une organisation politique relativement stables.
- La rupture (ou tournant historique) : C'est un événement majeur qui bouleverse brutalement l'ordre établi, clôture une période et en ouvre une nouvelle.
- Principe méthodologique : Chaque continent et chaque pays découpe son histoire en fonction de ses propres réalités et des tournants qui ont marqué son propre peuple.

2. Les Quatre Grandes Périodes Classiques de l'Histoire Universelle :
Le découpage traditionnel de l'histoire du monde comprend :
- 1. L'Antiquité (de -3000 à 476 après J.-C.) :
  * Début : Naissance de l'écriture en Mésopotamie (cunéiforme) et en Égypte (hiéroglyphes) vers 3000 avant J.-C., marquant la fin de la Préhistoire.
  * Fin : Chute de l'Empire romain d'Occident en 476 sous les invasions barbares.
  * C'est la période la plus longue de l'Histoire (environ 35 siècles). Elle voit fleurir l'Égypte pharaonique, la Grèce antique et Rome.
- 2. Le Moyen Âge (de 476 à 1492) :
  * Début : Chute de Rome en 476.
  * Fin : Découverte du continent américain par le navigateur Christophe Colomb en 1492.
  * Période marquée par la féodalité, les châteaux forts et l'expansion de l'Islam et du christianisme.
- 3. Les Temps Modernes (de 1492 à 1789) :
  * Début : 1492 (Grandes découvertes maritimes).
  * Fin : Déclenchement de la Révolution française en 1789.
  * Période de la Renaissance, des monarchies absolues, du commerce triangulaire et du siècle des Lumières.
- 4. L'Époque Contemporaine (de 1789 à nos jours) :
  * Débute avec la Révolution française de 1789 et se poursuit jusqu'à nos jours.
  * Période des révolutions industrielles, des luttes coloniales, des guerres mondiales et de l'ère numérique.

3. La Périodisation Spécifique de l'Histoire de l'Afrique :
L'histoire africaine a son propre rythme en 5 grandes périodes :
1. La période obscure (de -3000 à 476) : Période ancienne peu documentée par les écrits occidentaux, marquée par des civilisations brillantes (Égypte antique, Nubie/Koush, Nok au Nigeria).
2. Le Moyen Âge africain (de 476 à 1492) : C'est l'âge d'or des puissants empires ouest-africains (Empire du Ghana, Empire du Mali avec Kankou Moussa, Empire Songhaï), maîtres du commerce transsaharien de l'or et du sel.
3. La période de la traite négrière (de 1492 à 1848) : Commerce transatlantique dévastateur déportant des millions d'Africains vers les Amériques, prenant fin avec l'abolition dans les colonies françaises en 1848 par Victor Schœlcher.
4. La période coloniale (de 1848 à 1960) : Conquête militaire européenne, partage de l'Afrique à Berlin (1885), exploitation économique et travail forcé jusqu'aux mouvements d'émancipation.
5. La période des indépendances (de 1960 à nos jours) : Vague d'accession à la souveraineté nationale (1960 = « Année de l'Afrique ») et défis de la construction nationale.

4. Les Grandes Périodes de l'Histoire de la Côte d'Ivoire :
L'histoire ivoirienne s'articule en 4 grandes phases significatives :
1. La période obscure (de -1500 à 1470) : S'étend de la fin du néolithique ivoirien jusqu'à l'arrivée des premiers navigateurs européens (les Portugais Soeiro da Costa et João de Santarém en 1470 sur les côtes de Sassandra et San-Pédro).
2. La période précoloniale (de 1470 à 1893) : Époque des grandes migrations des peuples (Akan, Mandé, Krou, Voltaïques), mise en place des chefferies et royaumes (Royaume de Kong, Royaume de Krinjabo, Royaume Abron) et commerce côtier d'ivoire et d'or.
3. La période coloniale (de 1893 à 1960) : Débute le 10 mars 1893 avec le décret français érigeant la Côte d'Ivoire en colonie autonome avec Louis-Gustave Binger comme premier gouverneur, et s'achève le 7 août 1960.
4. La période de l'indépendance / postcoloniale (depuis le 7 août 1960) : Proclamation de la République indépendante par Félix Houphouët-Boigny, développement économique et marche vers la modernité.`,
    definitions: [
      {
        term: 'Période historique',
        definition: 'Époque ou division du temps historique caractérisée par une certaine unité sociale, culturelle et politique.'
      },
      {
        term: 'Rupture historique',
        definition: 'Événement majeur ou tournant qui transforme en profondeur les sociétés et sépare deux périodes distinctes.'
      },
      {
        term: 'Antiquité',
        definition: 'Première période de l\'histoire humaine, allant de l\'invention de l\'écriture (-3000) à la chute de l\'Empire romain d\'Occident (476).'
      },
      {
        term: 'Temps Modernes',
        definition: 'Troisième période de l\'histoire universelle, comprise entre 1492 (découverte de l\'Amérique) et 1789 (Révolution française).'
      },
      {
        term: 'Période précoloniale',
        definition: 'Période de l\'histoire ivoirienne (1470-1893) marquée par les vagues migratoires et les grands royaumes traditionnels avant la colonisation.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Relativité du découpage historique',
        statement: 'Le découpage de l\'histoire n\'est pas universellement identique : il varie selon les continents pour refléter les événements cruciaux vécus par chaque peuple.'
      },
      {
        name: 'Dates charnières universelles',
        statement: '-3000 (écriture) | 476 (chute de Rome) | 1492 (Amérique) | 1789 (Révolution française).'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Tracer la frise des grandes périodes de l\'histoire universelle',
        procedure: '1. Tracer un axe horizontal gradué de -3000 à nos jours. 2. Placer les 4 repères de rupture : -3000, 476, 1492, 1789. 3. Colorier les 4 blocs distincts : Antiquité, Moyen Âge, Temps Modernes, Époque Contemporaine. 4. Ajouter le titre et la légende.',
        tip: 'Vérifier que l\'Antiquité apparaît bien comme la période la plus longue sur la frise.'
      }
    ],
    examples: [
      {
        statement: 'Quel événement sépare le Moyen Âge des Temps Modernes dans l\'histoire universelle ?',
        solution: 'C\'est la découverte du continent américain par Christophe Colomb en 1492.'
      }
    ],
    exercises: [
      {
        question: 'Associe chaque période de l\'histoire de Côte d\'Ivoire à sa date de début et de fin :\n1. Période obscure | 2. Période précoloniale | 3. Période coloniale | 4. Période d\'indépendance.\nDates : a. 1893 à 1960 | b. 1470 à 1893 | c. -1500 à 1470 | d. 1960 à nos jours.',
        correction: '1 -> c (-1500 à 1470) | 2 -> b (1470 à 1893) | 3 -> a (1893 à 1960) | 4 -> d (1960 à nos jours).'
      },
      {
        question: 'À quoi correspond le Moyen Âge dans l\'histoire de l\'Afrique ?',
        correction: 'Le Moyen Âge africain (476 à 1492) correspond à l\'apogée des grands empires ouest-africains (Ghana, Mali, Songhaï).'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'une conférence organisée par le Club d\'Histoire-Géographie, un conférencier invité affirme : « Les grandes périodes de l\'histoire de France ne doivent pas être confondues avec celles de l\'Afrique ou de la Côte d\'Ivoire. Cependant, la périodisation africaine présente de fortes similitudes avec celle de la Côte d\'Ivoire ».',
      instructions: [
        '1. Nomme les quatre périodes classiques de l\'histoire universelle.',
        '2. Explique pourquoi le découpage de l\'histoire de la France ne peut pas être appliqué trait pour trait à la Côte d\'Ivoire.',
        '3. Justifie l\'existence de similitudes fortes entre les périodes historiques de l\'Afrique et celles de la Côte d\'Ivoire.'
      ],
      solutionGuide: '1. Antiquité, Moyen Âge, Temps Modernes, Époque Contemporaine. 2. La France a connu des événements spécifiques comme la chute de l\'Empire romain en 476 et la Révolution de 1789 qui n\'ont pas eu d\'impact direct immédiat sur la vie des peuples vivant alors en Côte d\'Ivoire. Chaque société divise son histoire en fonction de ses propres ruptures vécues. 3. La Côte d\'Ivoire et l\'ensemble des pays africains partagent des étapes historiques communes déterminantes : la période précoloniale des grands royaumes et des migrations, le traumatisme commun de la traite atlantique, la colonisation européenne de la fin du XIXe siècle jusqu\'en 1960, et enfin la vague simultanée des indépendances nationales en 1960.'
    },
    examTraps: [
      'Croire que la colonisation de la Côte d\'Ivoire a commencé en 1470 (1470 est l\'arrivée des navigateurs sur les côtes ; la colonie officielle est créée le 10 mars 1893).',
      'Confondre la fin de l\'Antiquité (476) avec la fin du Moyen Âge (1492).',
      'Oublier que la préhistoire s\'achève vers -3000 avec l\'invention de l\'écriture.'
    ],
    quickMemo: 'Universel : Antiquité (-3000 à 476) -> Moyen Âge (476 à 1492) -> Temps Modernes (1492 à 1789) -> Époque Contemporaine (1789 à nos jours) | Côte d\'Ivoire : Obscure (-1500 à 1470) -> Précoloniale (1470 à 1893) -> Coloniale (1893 à 1960) -> Indépendance (depuis 1960).',
    keywords: ['grandes périodes', 'Antiquité', 'Moyen Âge', 'Temps Modernes', 'Époque Contemporaine', 'périodisation Afrique', 'histoire de Côte d\'Ivoire', 'rupture historique', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 2 : LA PRÉHISTOIRE DE LA CÔTE D'IVOIRE - LEÇON 1
  // ========================================================
  {
    id: 'hist-6e-paleolithique-ivoirien',
    discipline: 'histoire',
    disciplineLabel: 'Histoire',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'La préhistoire de la Côte d\'Ivoire',
    lessonTitle: 'Le Paléolithique ivoirien : Sites archéologiques, outils en quartz taillé et mode de vie nomade',
    objectifs: [
      'Définir le Paléolithique comme le premier et plus long âge de la préhistoire (l\'âge de la pierre taillée)',
      'Situer chronologiquement le Paléolithique en Côte d\'Ivoire (d\'environ -100 000 à -8 000 avant J.-C.)',
      'Localiser les principaux sites archéologiques paléolithiques sur la carte de la Côte d\'Ivoire : Nord (Kong, Boundiali, Touba, Séguéla, Fourouna, Odienné), Sud (Bingerville, Anyama, Attinguié), Centre (Béoumi, Toumodi, Bouaké), Est (Abengourou), Ouest (Foué près de Guiglo)',
      'Identifier et décrire les vestiges matériels : outils grossiers taillés dans le quartz à l\'aide de percuteurs (galets aménagés / choppers, bifaces très lourds, racloirs, grattoirs, perçoirs, pointes)',
      'Décrire la civilisation et le mode de vie des hommes paléolithiques en Côte d\'Ivoire : vie nomade, chasse au gibier, cueillette, pêche, habitat troglodyte (grottes, abris sous roche, huttes), vêtements en peaux d\'animaux et écorces',
      'Expliquer pourquoi les vestiges paléolithiques sont rares en Côte d\'Ivoire (acidité des sols forestiers, humidité destructrice, végétation dense)'
    ],
    fullCourseContent: `1. Introduction et Définition du Paléolithique :
- La Préhistoire est la très longue période qui s'étend depuis l'apparition des premiers hominidés sur Terre (il y a environ 3,5 millions d'années) jusqu'à l'invention de l'écriture vers 3000 avant J.-C.
- Le Paléolithique vient du grec « Palaios » (ancien) et « Lithos » (pierre) : c'est l'Âge de la pierre taillée.
- En Côte d'Ivoire, le Paléolithique s'étend d'environ 100 000 ans avant J.-C. jusqu'à 8 000 ans avant J.-C. Il atteste formellement que la Côte d'Ivoire était déjà peuplée dès la haute préhistoire.

2. Les Sites Archéologiques du Paléolithique Ivoirien :
Un site archéologique est un lieu où les chercheurs ont mis au jour des traces et des vestiges abandonnés par les hommes préhistoriques.
En Côte d'Ivoire, les sites sont répartis sur l'ensemble des régions naturelles :
- Au Nord : Fourouna, Kong, Boundiali, Odienné, Touba, Séguéla.
- Au Sud (Basse Côte) : Carrières d'Anyama, carrières d'Attinguié, Bingerville (autour d'Abidjan).
- Au Centre : Béoumi, Bouaké, Toumodi, Divo, Lakota.
- À l'Est : Abengourou.
- À l'Ouest : Foué (près de Guiglo).

3. Les Vestiges et l'Outillage Paléolithique :
Les outils abandonnés par ces premiers hommes sont taillés dans des blocs de quartz ou de quartzite très durs à l'aide de percuteurs en pierre ou en bois dur :
- Les galets aménagés (choppers) : Galets de rivière dont un bord a été grossièrement fracturé pour créer un tranchant rudimentaire. Ce sont les plus anciens outils humains (trouvés à Bingerville, Odienné, Fourouna).
- Les bifaces (pics) : Très gros outils en pierre taillés symétriquement sur leurs deux faces pour former une pointe tranchante. Très lourds, ils servaient à creuser, fendre le bois ou briser les os.
- Les racloirs et grattoirs : Éclats de quartz retouchés servant à racler et nettoyer les peaux de bêtes pour faire des vêtements, ou à tailler des morceaux de bois.
- Les perçoirs, harpons et pointes de flèches pour la chasse et la défense.

4. La Civilisation et le Mode de Vie des Hommes du Paléolithique :
- Des nomades en quête permanente de nourriture : Les hommes préhistoriques de cette période ne possédaient ni champs ni bétail. Ils vivaient en petits groupes nomades et se déplaçaient constamment en suivant les troupeaux de gibier et la maturation des fruits sauvages.
- Activités de subsistance :
  * La chasse au gros et moyen gibier (pièges, sagaies à pointe de pierre).
  * La cueillette de fruits, baies, racines et tubercules sauvages.
  * La pêche dans les rivières et lagunes.
- Habitat : Des troglodytes. Ils s'abritaient dans les cavités naturelles de la roche, les grottes, sous les contreforts géants des grands arbres ou dormaient à l'air libre près d'un feu protecteur.
- Vêtements : Ils se couvraient le corps de peaux de bêtes tannées, de feuilles d'arbres et d'écorces battues.

5. Pourquoi Peu d'Ossements Ont-ils Été Retrouvés en Côte d'Ivoire ?
Alors que l'Afrique de l'Est (vallée du Rift) et du Sud regorge de squelettes fossiles, la Côte d'Ivoire compte peu de restes humains du Paléolithique :
- L'extrême acidité des sols ferrallitiques ivoiriens dissout les os et les matières organiques en quelques siècles.
- Le climat chaud et très humide accélère la décomposition.
- La dense couverture végétale de la forêt tropicale rend les fouilles très difficiles.`,
    definitions: [
      {
        term: 'Paléolithique',
        definition: 'Première période de la préhistoire caractérisée par l\'usage exclusif d\'outils en pierre taillée grossière et un mode de vie nomade.'
      },
      {
        term: 'Galet aménagé',
        definition: 'Galet naturel dont une extrémité a été taillée pour créer un tranchant acéré (le plus vieil outil fabriqué par l\'homme).'
      },
      {
        term: 'Biface',
        definition: 'Gros outil en pierre taillé sur ses deux faces opposées pour former une arête tranchante et une pointe.'
      },
      {
        term: 'Nomade',
        definition: 'Personne ou communauté humaine qui n\'a pas d\'habitation fixe et se déplace continuellement pour trouver sa nourriture.'
      },
      {
        term: 'Troglodyte',
        definition: 'Être humain qui habite dans des grottes naturelles ou des abris creusés sous la roche.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Datation du Paléolithique ivoirien',
        statement: 'Le Paléolithique ivoirien s\'étend de -100 000 à -8 000 avant J.-C. et est attesté par l\'industrie lithique sur quartz.'
      },
      {
        name: 'Facteur de conservation des fossiles',
        statement: 'L\'acidité élevée des sols et l\'humidité forestière de la Côte d\'Ivoire détruisent les squelettes et limitent les vestiges aux seuls outils de pierre.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier un outil du Paléolithique ivoirien',
        procedure: '1. Observer la matière : bloc de quartz ou quartzite dur. 2. Observer la technique : pierre simplement éclatée/taillée avec des enlèvements grossiers (non polie). 3. Identifier la forme : forme lourde et anguleuse (biface, racloir, galet taillé).',
        tip: 'Si l\'outil est lisse et brillant au toucher, il ne date pas du Paléolithique mais du Néolithique (pierre polie) !'
      }
    ],
    examples: [
      {
        statement: 'Pourquoi les hommes du Paléolithique en Côte d\'Ivoire taillaient-ils principalement des bifaces et des racloirs ?',
        solution: 'Ils avaient besoin de gros outils solides pour abattre du bois, dépecer les carcasses d\'animaux abattus à la chasse et racler les peaux pour se vêtir contre les intempéries.'
      }
    ],
    exercises: [
      {
        question: 'Parmi les outils suivants, souligne ceux du Paléolithique ivoirien : Hache polie, galet aménagé, meule en pierre, racloir, biface, faucille.',
        correction: 'Outils du Paléolithique : Galet aménagé, racloir, biface (la hache polie, la meule et la faucille appartiennent au Néolithique).'
      },
      {
        question: 'Cite deux sites archéologiques du Paléolithique situés dans le Sud de la Côte d\'Ivoire.',
        correction: 'Bingerville, carrières d\'Anyama, carrières d\'Attinguié.'
      }
    ],
    evaluationSituation: {
      context: 'Au Musée des Civilisations d\'Abidjan au Plateau, deux élèves de 6ème observent une vitrine présentant de gros blocs de quartz aux formes taillées grossières découverts à Attinguié et Fourouna. L\'un d\'eux s\'étonne : « Pourquoi ces outils sont-ils si lourds et difformes ? Pourquoi ne fabriquaient-ils pas des maisons pour vivre tranquillement ? ».',
      instructions: [
        '1. Nomme la période préhistorique à laquelle appartiennent ces outils et donne sa durée en Côte d\'Ivoire.',
        '2. Nomme deux de ces outils en précisant leur utilité pour les hommes préhistoriques.',
        '3. Explique à ton camarade pourquoi ces hommes étaient nomades et ne construisaient pas de villages fixes.'
      ],
      solutionGuide: '1. Il s\'agit du Paléolithique ivoirien (âge de la pierre taillée), qui s\'étend d\'environ -100 000 à -8 000 avant J.-C. 2. Outils : Le biface (servait à fendre le bois, dépecer la viande et chasser) et le racloir (servait à gratter et préparer les peaux d\'animaux). 3. Explication : À cette époque, l\'agriculture et l\'élevage n\'étaient pas encore inventés. Pour survivre, ces hommes vivaient exclusivement de cueillette et de chasse ; dès que le gibier et les fruits s\'épuisaient dans un secteur, le groupe devait obligatoirement migrer pour trouver d\'autres ressources.'
    },
    examTraps: [
      'Dire que les hommes du Paléolithique pratiquaient l\'agriculture ou vivaient dans des villages (ce sont des caractéristiques du Néolithique !).',
      'Confondre pierre taillée (Paléolithique) et pierre polie (Néolithique).',
      'Oublier de préciser que le quartz était la matière première principale des outils en Côte d\'Ivoire.'
    ],
    quickMemo: 'Paléolithique (-100 000 à -8 000) = Âge de la pierre taillée | Outils en quartz : galets aménagés, bifaces, racloirs, grattoirs | Mode de vie : nomades, chasseurs-cueilleurs, troglodytes (grottes) | Sites : Bingerville, Attinguié, Fourouna, Kong, Béoumi.',
    keywords: ['paléolithique ivoirien', 'pierre taillée', 'biface', 'galet aménagé', 'racloir', 'quartz', 'nomade', 'troglodyte', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 2 : LA PRÉHISTOIRE DE LA CÔTE D'IVOIRE - LEÇON 2
  // ========================================================
  {
    id: 'hist-6e-revolution-neolithique-cote-ivoire',
    discipline: 'histoire',
    disciplineLabel: 'Histoire',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'La préhistoire de la Côte d\'Ivoire',
    lessonTitle: 'La Révolution du Néolithique en Côte d\'Ivoire : Pierre polie, sédentarisation, agriculture, poterie et amas coquilliers',
    objectifs: [
      'Définir le Néolithique (du grec « Neos » = nouveau et « Lithos » = pierre) : l\'Âge de la nouvelle pierre ou pierre polie',
      'Situer chronologiquement le Néolithique ivoirien (de -8 000 à -1 500 avant J.-C.)',
      'Localiser les nombreux sites néolithiques ivoiriens : Sud/Littoral (Adiopodoumé, Dabou, Divo, Loviguié, Lozoua, Assinie), Centre-Ouest (Daloa, Bouaflé), Centre (Toumodi, Dimbokro, Bouaké), Nord (Ferkessédougou, Korhogo, Odienné, Boundiali, Kong), Ouest (Man, Touba), Est (Arrah)',
      'Identifier la diversité des vestiges matériels : haches polies en roches vertes, amas de coquillages sur le littoral, tessons de poterie d\'argile, meules dormantes et pilons pour écraser les grains, gravures et peintures rupestres, grandes dalles',
      'Expliquer en quoi le Néolithique constitue une véritable « révolution » : passage du nomadisme prédateur à la sédentarisation (villages durables, cases), naissance de l\'agriculture, élevage/domestication des animaux, artisanat et troc',
      'Décrire les débuts de l\'organisation sociale et des croyances religieuses (chefferies, culte des ancêtres, vénération des esprits de la nature, sépultures funéraires soignées)'
    ],
    fullCourseContent: `1. Qu'est-ce que le Néolithique et la « Révolution Néolithique » ?
- Étymologie : Le mot Néolithique vient du grec « Neos » (nouveau, jeune) et « Lithos » (pierre) : c'est l'Âge de la nouvelle pierre ou l'Âge de la pierre polie.
- Chronologie : En Côte d'Ivoire, le Néolithique commence vers 8 000 avant J.-C. et se prolonge jusqu'à environ 1 500 avant J.-C.
- Pourquoi parle-t-on de « révolution » ? Ce terme désigne une transformation radicale, profonde et irréversible de l'ensemble des activités humaines, des techniques et du mode de vie qui a fait entrer l'humanité dans les temps modernes de la civilisation.

2. Les Sites et Vestiges du Néolithique en Côte d'Ivoire :
Contrairement au Paléolithique, les sites néolithiques sont très abondants et présents dans toutes les régions de Côte d'Ivoire :
- Les haches polies (appelées traditionnellement "pierres de foudre" ou "tonnerre" dans les contes populaires) : Taillées dans des roches dures (roches vertes volcaniques) puis frottées sur des polissoirs de grès jusqu'à devenir parfaitement lisses et tranchantes. Présentes partout sur le territoire.
- Les amas de coquillages (ou amas coquilliers) : Monticules gigantesques de coquilles d'huîtres et de mollusques lagunaires accumulés sur les berges par les hommes préhistoriques qui s'en nourrissaient. Sites : Littoral lagunaire (Adiopodoumé, Dabou, Lozoua, Loviguié, Assinie, Krinjabo).
- Les tessons de poterie : Morceaux de récipients en terre cuite prouvant l'invention de la céramique pour stocker l'eau, les huiles et les récoltes de grains (Ferkessédougou, Korhogo, Toumodi).
- Les meules en pierre et pilons : Blocs de pierre creusés utilisés avec un broyeur pour moudre les céréales et tubercules.
- Les gravures rupestres et grottes : Dessins gravés sur des parois rocheuses à Man, Niakaramadougou et Daloa.
- Les grandes dalles mégalithiques d'Odienné.

3. Les Nouvelles Activités Économiques :
Grâce à de nouveaux outils plus fins, légers et maniables (haches polies, faucilles, herminettes, pointes de flèches fines, hameçons en os) :
- L'Agriculture : Les hommes découvrent qu'une graine enfouie dans la terre germe et donne une plante. Ils commencent à défricher la forêt, semer et récolter les premiers tubercules (ignames sauvages) et céréales.
- L'Élevage et la domestication : Au lieu de chasser les animaux sauvages, les hommes capturent des bêtes vivantes (chèvres, moutons, volailles, bovins) pour les élever dans des enclos, obtenant viande, lait et peaux sans dépendre du hasard.
- L'Artisanat :
  * La poterie (façonnage et cuisson de l'argile).
  * Le tissage de fibres végétales et la vannerie (paniers, nasses de pêche).
- Le Troc : Échange direct de produits entre communautés sans utilisation de monnaie (ex : du sel marin et du poisson fumé du Sud échangés contre des céréales du Nord).

4. Un Nouveau Mode de Vie : La Sédentarisation :
- Fin du nomadisme : Pour surveiller leurs champs tout au long de l'année et nourrir leurs troupeaux, les hommes ne peuvent plus se déplacer sans cesse : ils deviennent SÉDENTAIRES.
- Naissance des villages : Les hommes construisent des habitations solides et durables (cases en torchis, bois et paille) groupées en villages protégés.
- Organisation sociale et politique : Les familles se regroupent en tribus, chefferies et petites royautés locales avec une hiérarchie respectée (chefs de terre, conseils des anciens).
- Les croyances spirituelles :
  * Culte des morts : Au lieu d'abandonner les cadavres, les hommes du Néolithique creusent de véritables tombes, déposent les défunts avec des offrandes (poteries, colliers, outils) et adorent leurs ancêtres protecteurs.
  * Culte des forces de la nature (l'eau, le soleil, la terre fertile, les rochers sacrés).`,
    definitions: [
      {
        term: 'Néolithique',
        definition: 'Deuxième période de la préhistoire marquée par l\'usage de la pierre polie, l\'agriculture, l\'élevage et la sédentarisation.'
      },
      {
        term: 'Pierre polie',
        definition: 'Outil en pierre dure frotté avec de l\'eau et du sable sur un polissoir pour lui donner une surface lisse et un tranchant très net.'
      },
      {
        term: 'Sédentarisation',
        definition: 'Fait pour une population de se fixer de manière permanente dans un habitat durable (village).'
      },
      {
        term: 'Amas coquillier',
        definition: 'Monticule artificiel de coquillages marins et lagunaires accumulés sur les côtes ivoiriennes par les hommes du Néolithique.'
      },
      {
        term: 'Troc',
        definition: 'Système commercial d\'échange direct d\'une marchandise contre une autre sans monnaie.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'La rupture de la Révolution Néolithique',
        statement: 'L\'homme cesse d\'être un simple prédateur (chasse/cueillette) pour devenir un producteur autonome de ses ressources (agriculture/élevage).'
      },
      {
        name: 'Distribution des vestiges néolithiques',
        statement: 'Les vestiges néolithiques en Côte d\'Ivoire sont répartis sur tout le pays (haches polies au Nord et Centre, amas coquilliers au littoral Sud).'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Comparer le mode de vie Paléolithique et Néolithique',
        procedure: '1. Outils : pierre taillée grossière (Paléolithique) VS pierre polie, poteries et faucilles (Néolithique). 2. Habitat : grottes et abris temporaires nomades VS villages de cases sédentaires. 3. Alimentation : prédation (chasse, cueillette) VS production (agriculture, élevage). 4. Société : petites bandes isolées VS chefferies et villages organisés.',
        tip: 'Le mot clé de la rupture est la SÉDENTARISATION.'
      }
    ],
    examples: [
      {
        statement: 'Pourquoi trouve-t-on des amas de coquillages spécifiquement sur le littoral de Grand-Bassam, Dabou et Assinie ?',
        solution: 'Parce que les hommes néolithiques vivaient à proximité des lagunes ivoiriennes riches en mollusques et huîtres. Après avoir consommé la chair, ils rejetaient les coquilles au même endroit pendant des siècles, formant d\'immenses buttes d\'amas coquilliers.'
      }
    ],
    exercises: [
      {
        question: 'Classe ces activités selon qu\'elles appartiennent au Paléolithique ou au Néolithique : Chasse au gros gibier, poterie d\'argile, nomadisme, sédentarisation en village, culture de l\'igname, taille grossière du quartz.',
        correction: '- Paléolithique : Chasse au gros gibier, nomadisme, taille grossière du quartz.\n- Néolithique : Poterie d\'argile, sédentarisation en village, culture de l\'igname.'
      },
      {
        question: 'Cite trois sites néolithiques ivoiriens et précise leur vestige caractéristique.',
        correction: '1. Dabou / Adiopodoumé : amas de coquillages.\n2. Odienné : grandes dalles mégalithiques.\n3. Ferkessédougou / Toumodi : débris de poteries et haches polies.'
      }
    ],
    evaluationSituation: {
      context: 'Au CDI du collège, un élève lit un extrait du Mémorial de la Côte d\'Ivoire : « Le Néolithique est une période de grands bouleversements. L\'homme apprend à polir la pierre, à cultiver la terre et à élever du bétail. Il bâtit des villages et enterre ses morts... ». Étonné, son camarade lui demande pourquoi les historiens appellent cette époque une « révolution » alors qu\'il n\'y a pas eu de guerre.',
      instructions: [
        '1. Définis le terme « Néolithique » et donne ses dates approximatives en Côte d\'Ivoire.',
        '2. Relève dans le texte trois changements majeurs qui ont transformé la vie humaine.',
        '3. Explique pourquoi les historiens utilisent le mot « révolution » pour qualifier cette période préhistorique.'
      ],
      solutionGuide: '1. Le Néolithique désigne l\'Âge de la pierre polie (de -8 000 à -1 500 av. J.-C. en Côte d\'Ivoire). 2. Changements : le polissage de la pierre, l\'invention de l\'agriculture et de l\'élevage, la sédentarisation dans des villages fixes et le culte des morts (sépultures). 3. Le mot « révolution » n\'exprime pas une guerre armée mais un changement fondamental et radical dans l\'histoire de l\'humanité : pour la première fois, l\'homme cesse d\'être soumis aux caprices de la nature (nomadisme, cueillette) pour devenir le maître et le producteur de sa propre subsistance (champs, troupeaux, artisanat, villages), posant les fondations de toutes les civilisations futures.'
    },
    examTraps: [
      'Croire que le mot « révolution » implique forcément un soulèvement populaire avec des armes.',
      'Oublier que les populations du Néolithique ivoirien connaissaient déjà la poterie et l\'art rupestre.',
      'Confondre les dates du Néolithique en Côte d\'Ivoire (-8000 à -1500) avec celles de l\'Égypte (-8000 à -3000).'
    ],
    quickMemo: 'Néolithique (-8000 à -1500) = Pierre polie | Révolution = Sédentarisation + Agriculture + Élevage + Poterie + Villages | Vestiges : Haches polies (roches vertes), amas coquilliers (littoral), dalles (Odienné), tessons de poterie (Toumodi, Ferké).',
    keywords: ['néolithique ivoirien', 'pierre polie', 'révolution néolithique', 'sédentarisation', 'agriculture', 'élevage', 'amas coquilliers', 'poterie', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 2 : LA PRÉHISTOIRE DE LA CÔTE D'IVOIRE - LEÇON 3
  // ========================================================
  {
    id: 'hist-6e-metallurgie-du-fer',
    discipline: 'histoire',
    disciplineLabel: 'Histoire',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'La préhistoire de la Côte d\'Ivoire',
    lessonTitle: 'La métallurgie du fer en Côte d\'Ivoire : Sidérurgie directe, hauts fourneaux, étapes et bouleversements socio-économiques',
    objectifs: [
      'Définir la métallurgie du fer (transformation par la chaleur du minerai de fer brut extrait de la terre en outils et armes de travail)',
      'Situer l\'Âge du fer en Côte d\'Ivoire (du XIe siècle avant J.-C. au VIIe siècle après J.-C.)',
      'Localiser les sites archéologiques de la métallurgie du fer en Côte d\'Ivoire : Sud (Lozoua, Attinguié, Agboville), Centre-Ouest (Oumé, Issia), Ouest (Toulepleu), Nord (Odienné, Boundiali, Doropo)',
      'Décrire dans l\'ordre chronologique les 4 étapes de la sidérurgie directe : 1. Extraction du minerai de fer (puits), 2. Fonte dans les fourneaux traditionnels à haute température avec charbon de bois, 3. Solidification en barres ou loupes de fer, 4. Transformation/forgeage en outils par le forgeron (enclume et marteau)',
      'Identifier les outils métalliques forgés : dabas, houes, haches, faucilles, couteaux, lances, flèches, marmites, fusils traditionnels',
      'Analyser les immenses progrès économiques et sociaux engendrés par le fer : explosion de la production agricole, extraction aurifère intensive (mines d\'or), essor des marchés et cités marchandes (Kong, Bondoukou, Ténéguéra), naissance de la caste respectée des forgerons et artisans, accroissement de la sécurité et de l\'espérance de vie'
    ],
    fullCourseContent: `1. Qu'est-ce que la Métallurgie du Fer ?
- Définition : La métallurgie du fer (ou sidérurgie) est l'art et la technique de transformer un minerai rocheux contenant du fer brut en métal utilisable, puis de le forger en outils, instruments et armes.
- Chronologie en Côte d'Ivoire : L'Âge du fer se situe entre le XIe siècle avant Jésus-Christ et le VIIe siècle après Jésus-Christ. Il succède à l'Âge de la pierre et marque une étape technologique capitale.

2. Les Sites de la Métallurgie Ancienne du Fer en Côte d'Ivoire :
Les fouilles archéologiques ont révélé des scories (résidus vitrifiés de fonte), des tuyères en terre cuite et des vestiges d'anciens hauts et bas fourneaux dans plusieurs localités :
- Au Sud : Lozoua, Attinguié et Agboville.
- Au Centre-Ouest : Oumé et Issia.
- À l'Ouest : Toulepleu.
- Au Nord et Nord-Est : Boundiali, Odienné et Doropo.

3. La Chaîne Opératoire du Travail du Fer (Les 4 Étapes Fondamentales) :
La méthode traditionnelle utilisée en Côte d'Ivoire est la méthode de sidérurgie directe en 4 étapes successives :
1. L'extraction du minerai de fer : Les mineurs creusent des puits verticaux et des tranchées dans le sol pour extraire la latérite ferrugineuse et les blocs de minerai brut mélangés à la terre, puis lavent les cristaux.
2. La fonte du minerai (dans des hauts/bas fourneaux) :
   * Le minerai concassé est disposé en couches alternées avec du charbon de bois dur dans un fourneau cylindrique en argile réfractaire.
   * L'air est insufflé à l'aide de soufflets manuels en peau à travers des tuyères en terre cuite pour atteindre des températures dépassant 1 100 °C à 1 200 °C.
   * Le fer se sépare des impuretés (les scories liquides qui s'écoulent) pour former une masse spongieuse de fer incandescent appelée « loupe de fer » ou fonte brute.
3. La solidification : Le métal liquide/pâteux est coulé et refroidi dans des cavités pour former des barres, lingots ou boules de fer solides.
4. La transformation en outils (Le forgeage) :
   * Le forgeron réchauffe les barres de fer à blanc ou rouge dans le foyer de la forge.
   * Avec une enclume en pierre ou en métal et des marteaux, il martèle, étire et façonne le fer pour créer des instruments aux formes variées.
- Outils fabriqués :
  * Pour l'agriculture : Dabas, houes, haches, faucilles, machettes, pioches.
  * Pour la chasse, la pêche et la guerre : Pointes de flèches acérées, lances, harpons, couteaux de jet, fusils artisanaux.
  * Pour l'équipement ménager : Marmites, trépieds, fourneaux, tenailles.

4. Les Progrès Économiques Engendrés par le Fer :
L'introduction du métal a bouleversé l'économie traditionnelle ivoirienne :
- Révolution de la production agricole : Avec la daba et la hache en fer, le défrichage de la forêt dense devient infiniment plus rapide et les labours sont plus profonds. Les récoltes d'igname et de céréales augmentent considérablement, éloignant la famine.
- Développement des mines d'or : Les outils métalliques (barres à mine, pics) permettent de creuser de profonds puits miniers pour exploiter les riches gisements d'or de Côte d'Ivoire.
- Essor du commerce régional et cités marchandes : Le surplus agricole et l'or attirent les caravanes sahéliennes. De grands carrefours d'échanges naissent et deviennent de puissantes cités marchandes : Kong, Bondoukou, Ténéguéra.
- Création de nouveaux métiers : Métiers d'artisans spécialisés : forgerons, armuriers, fondeurs, orfèvres.

5. Les Progrès Sociaux et Politiques :
- Naissance de nouvelles classes sociales et castes :
  * Le forgeron occupe une place à part dans la société : c'est un personnage respecté, craint et presque sacré, considéré comme le maître du feu et de la terre. Il forme une caste fermée.
- Amélioration de la sécurité et des conditions de vie : Meilleure défense des villages contre les attaques de bêtes fauves et d'envahisseurs grâce aux armes en fer.
- Hausse de l'espérance de vie grâce à une alimentation plus abondante et variée.
- Cristallisation des chefferies et royaumes : La maîtrise du fer et des armes métalliques permet à des chefs de conquérir de vastes territoires et de fonder des espaces politiques organisés.`,
    definitions: [
      {
        term: 'Métallurgie du fer (sidérurgie)',
        definition: 'Technique d\'extraction du fer à partir de son minerai par chauffage intense et de son façonnage en objets utiles.'
      },
      {
        term: 'Haut fourneau traditionnel',
        definition: 'Four en argile réfractaire utilisé pour fondre le minerai de fer avec du charbon de bois à très haute température.'
      },
      {
        term: 'Daba',
        definition: 'Instrument aratoire africain traditionnel à lame de fer emmanchée servant à labourer et butter la terre.'
      },
      {
        term: 'Caste des forgerons',
        definition: 'Groupe social spécialisé et respecté dans les sociétés traditionnelles ouest-africaines détenant le savoir sacré du travail du fer.'
      },
      {
        term: 'Scories',
        definition: 'Résidus vitrifiés et déchets solides rejetés lors de la fonte du minerai de fer.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Les 4 étapes de la sidérurgie directe',
        statement: '1. Extraction du minerai -> 2. Fonte dans les fourneaux -> 3. Solidification en barres -> 4. Transformation/forgeage en outils.'
      },
      {
        name: 'Impact socio-économique du fer',
        statement: 'L\'outillage en fer a permis le défrichage de la forêt dense, l\'essor de l\'orpaillage, le commerce caravanier et la naissance de cités marchandes (Kong, Bondoukou).'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Décrire la chaîne opératoire du forgeron traditionnel',
        procedure: '1. Creuser pour extraire le minerai et le laver. 2. Construire le fourneau en argile et y alterner minerai et charbon de bois. 3. Activer les soufflets pour atteindre plus de 1 100 °C jusqu\'à formation de la loupe de fer. 4. Couler et solidifier en barres. 5. Réchauffer à la forge et marteler sur l\'enclume pour façonner dabas, couteaux ou pointes de lances.',
        tip: 'Le charbon de bois fournit à la fois le combustible et le carbone réducteur pour extraire le fer métallique.'
      }
    ],
    examples: [
      {
        statement: 'Pourquoi la métallurgie du fer a-t-elle favorisé le développement de l\'exploitation aurifère en Côte d\'Ivoire ?',
        solution: 'Les outils en pierre taillée ou polie n\'étaient pas assez résistants pour perforer la roche dure. Grâce aux pics, burins et barres à mine en fer, les mineurs ont pu creuser des puits profonds dans les filons de quartz pour en extraire l\'or.'
      }
    ],
    exercises: [
      {
        question: 'Remets dans l\'ordre chronologique les quatre étapes de fabrication d\'un outil en fer : a) Solidification du métal ; b) Transformation en outils à l\'enclume ; c) Extraction du minerai de fer ; d) Fonte dans le haut fourneau.',
        correction: 'L\'ordre chronologique est : 1. c (Extraction) -> 2. d (Fonte) -> 3. a (Solidification) -> 4. b (Transformation à l\'enclume).'
      },
      {
        question: 'Cite deux sites archéologiques de l\'Âge du fer en Côte d\'Ivoire au Sud et deux au Nord.',
        correction: '- Sud : Lozoua, Attinguié, Agboville.\n- Nord : Odienné, Boundiali, Doropo.'
      }
    ],
    evaluationSituation: {
      context: 'À la bibliothèque du collège, un groupe d\'élèves découvre un extrait de l\'étude des professeures Timpoko Hélène et Kiénon Kaboré : « Maîtriser la sidérurgie directe du fer suppose une agriculture plus performante, l\'essor de l\'exploitation de l\'or et une puissance économique certaine : en un mot, l\'avènement d\'un nouvel ordre économique et social ».',
      instructions: [
        '1. Définis la métallurgie du fer et donne sa période en Côte d\'Ivoire.',
        '2. Relève dans le texte deux activités économiques boostées par le travail du fer.',
        '3. Justifie l\'affirmation des auteures selon laquelle la métallurgie du fer a créé un « nouvel ordre économique et social » en Côte d\'Ivoire.'
      ],
      solutionGuide: '1. La métallurgie du fer est la transformation par la chaleur du minerai de fer brut en métal puis en outils de travail (en Côte d\'Ivoire : du XIe siècle av. J.-C. au VIIe siècle apr. J.-C.). 2. Deux activités : l\'agriculture (dabas, houes plus efficaces) et l\'exploitation minière de l\'or. 3. Justification : Le fer a provoqué un bond démographique et économique en chassant la famine grâce à des récoltes abondantes. Il a stimulé le commerce transsaharien de l\'or et fondé de grandes cités marchandes comme Kong et Bondoukou. Sur le plan social, il a donné naissance à des corps de métiers spécialisés (la caste prestigieuse des forgerons et orfèvres) et a renforcé la puissance militaire des chefs, facilitant la création des chefferies et royaumes organisés.'
    },
    examTraps: [
      'Inverser l\'ordre de la fonte et de la solidification dans la chaîne opératoire du fer.',
      'Oublier que l\'Âge du fer en Côte d\'Ivoire commence dès le XIe siècle avant Jésus-Christ.',
      'Penser que le fer n\'a servi qu\'à faire des armes pour la guerre (son rôle dans l\'agriculture avec la daba et l\'abattage du bois est prépondérant).'
    ],
    quickMemo: 'Métallurgie du fer (XIe s. av. J.-C. au VIIe s. apr. J.-C.) | 4 étapes : Extraction -> Fonte en fourneau (> 1100 °C) -> Solidification -> Forgeage à l\'enclume | Conséquences : essor agricole (daba, houe), mines d\'or, cités marchandes (Kong, Bondoukou), caste des forgerons, sécurité.',
    keywords: ['métallurgie du fer', 'âge du fer', 'sidérurgie directe', 'haut fourneau', 'forgeron', 'daba', 'Kong', 'Bondoukou', '6e']
  }
];
