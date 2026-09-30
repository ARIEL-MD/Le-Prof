import { OfficialIvorianCourse } from '../../types';

export const LYCEE_HISTOIREGEO_1ERE_COURSES: OfficialIvorianCourse[] = [
  // =========================================================================
  // 1. HISTOIRE 1ÈRE (A, C, D) — THÈME 1 : ESSOR DU CAPITALISME
  // =========================================================================
  {
    id: 'hg-1ere-h1-essor-capitalisme',
    discipline: 'histoire',
    disciplineLabel: 'Histoire (Premières A, C, D)',
    level: '1ere',
    levelLabel: 'Première (1ère A, C, D)',
    serie: '1ere_a',
    serieLabel: 'Premières Toutes Séries (A, C, D)',
    chapter: 'Thème 1 : Le développement du capitalisme et l\'industrialisation de l\'Europe (XVIIIe - XIXe s.)',
    lessonTitle: 'Leçon 1 : L\'essor du capitalisme et ses conséquences',
    objectifs: [
      'Définir le capitalisme et caractériser ses étapes : commercial (mercantile), industriel puis financier/bancaire',
      'Identifier les valeurs libérales fondamentales : propriété privée, libre entreprise, recherche du profit, régulation par l\'offre et la demande',
      'Expliquer le fonctionnement des nouveaux instruments financiers : capital par actions, obligations, banques de dépôt et d\'affaires, bourses des valeurs',
      'Analyser les conséquences économiques (cycles d\'expansion 1850-1870 et crises de surproduction 1870-1896 incitant à l\'impérialisme colonial)',
      'Décrire la division de la société en classes inégales (Bourgeoisie, Prolétariat, classes moyennes) et l\'essor des luttes ouvrières (droit de grève 1864, syndicats 1884, SFIO 1905, Labour Party 1906)'
    ],
    fullCourseContent: `I. DÉFINITION ET FONDEMENTS DU CAPITALISME :
1. Définition : Le capitalisme est un système économique et social fondé sur la propriété privée des moyens de production, la libre entreprise, la recherche du profit maximum (dividendes, plus-value) et le travail salarié.
2. Évolution historique :
- Le capitalisme commercial ou mercantile (Moyen Âge) : impulsé par les marchands italiens (Gênes, Venise) et les grandes découvertes maritimes.
- Le capitalisme industriel (fin XVIIIe s.) : né de la première révolution industrielle en Angleterre, centré sur la mécanisation et l'usine.
- Le capitalisme financier et bancaire (après 1850) : caractérisé par le rôle central des bourses de valeurs et des sociétés anonymes par actions.
3. Les valeurs libérales : Développées par Adam Smith (libéralisme économique), elles reposent sur :
- La propriété privée des moyens de production et d'échange.
- La libre concurrence et la loi de l'offre et de la demande.
- Le rôle d'arbitre de l'État (laisser-faire, laisser-passer).

II. FONCTIONNEMENT DES INSTRUMENTS DU CAPITALISME :
1. Le Capital : ensemble des ressources financières et techniques. Il est mobilisé sous forme :
- D'actions : parts égales du capital d'une entreprise possédées par des actionnaires percevant des dividendes.
- D'obligations : titres d'emprunt à taux d'intérêt fixe émis par l'État ou des sociétés.
2. Les banques : établissements de crédit et d'épargne (banques de dépôt, d'affaires, d'émission) qui financent les grands investissements industriels et ferroviaires.
3. La Bourse des valeurs : marché financier public où s'achètent et se vendent actions et obligations d'après l'offre et la demande (spéculation).

III. LES CONSÉQUENCES DU DÉVELOPPEMENT DU CAPITALISME :
1. Conséquences économiques : Alternance de phases d'expansion (1850-1870) et de crises aiguës de surproduction (1870-1896) provoquant faillites et chômage, poussant les puissances européennes à conquérir des colonies pour écouler leurs excédents.
2. Conséquences sociales :
- La Bourgeoisie d'affaires : détient les capitaux, banques et usines, impose ses valeurs et son mode de vie opulent.
- Le Prolétariat ouvrier : classe exploitée travaillant 14 à 16h par jour dans l'insalubrité, sans sécurité de l'emploi, soumise au travail précoce des enfants.
3. Luttes ouvrières et conquêtes sociales :
- Mouvements de révolte (luddisme, grèves) débouchant sur la légalisation du droit de grève (1864 en France) et des syndicats (loi Waldeck-Rousseau en 1884).
- Conquêtes : journée de travail réduite, repos dominical, assurances maladie et vieillesse.
- Naissance des partis socialistes ouvriers : SPD allemand (1875), POSDR russe (1898), SFIO française (1905), Labour Party britannique (1906).`,
    definitions: [
      { term: 'Capitalisme', definition: 'Système économique fondé sur la propriété privée des moyens de production, la recherche du profit et la libre concurrence.' },
      { term: 'Action', definition: 'Titre de propriété négociable représentant une fraction du capital d\'une société par actions, donnant droit à des dividendes.' },
      { term: 'Obligation', definition: 'Titre de créance représentant une part d\'emprunt émis par une entreprise ou l\'État, rapportant un intérêt fixe.' },
      { term: 'Prolétariat', definition: 'Classe sociale des ouvriers qui ne possèdent que leur force de travail manuelle pour subsister.' }
    ],
    propertiesAndRules: [
      { name: 'Loi de l\'offre et de la demande', statement: 'Sur un marché concurrentiel libre, le prix baisse quand l\'offre excède la demande (surproduction) et monte quand la demande excède l\'offre.' },
      { name: 'Principe du libéralisme économique d\'Adam Smith', statement: 'L\'État doit limiter son rôle aux fonctions régaliennes (justice, police, défense) et laisser le marché s\'autoréguler par la main invisible.' }
    ],
    formulas: [],
    stepByStepMethods: [
      { stepNumber: 1, title: 'Analyser l\'impact économique du capitalisme', procedure: 'Montrer la succession des phases de croissance (1850-1870) et de crise de surproduction (1870-1896) menant à l\'impérialisme.', tip: 'Toujours associer surproduction industrielle et recherche de débouchés coloniaux.' },
      { stepNumber: 2, title: 'Structurer l\'analyse de la question sociale', procedure: 'Opposer la bourgeoisie triomphante au prolétariat misérable, puis présenter les victoires ouvrières (grève, syndicats, lois sociales).', tip: 'Citer la loi Waldeck-Rousseau de 1884 et les partis socialistes (SFIO, SPD).' }
    ],
    examples: [
      { statement: 'Expliquer comment la crise de surproduction de 1873 a influencé l\'impérialisme colonial.', solution: 'La saturation des marchés intérieurs européens et l\'effondrement des prix ont incité les industriels et gouvernements européens à conquérir des colonies en Afrique et en Asie pour disposer de marchés réservés et de matières premières gratuites.' }
    ],
    exercises: [
      {
        question: 'Définissez le capitalisme et citez les trois formes historiques qu\'il a successivement revêtues.',
        correction: 'Le capitalisme est un système économique et social fondé sur la propriété privée des moyens de production, la recherche du profit et la liberté d\'entreprise. Ses trois formes sont : le capitalisme commercial/mercantile, le capitalisme industriel et le capitalisme financier/bancaire.'
      },
      {
        question: 'Quelles sont les conquêtes sociales majeures obtenues par la classe ouvrière à la fin du XIXe siècle ?',
        correction: 'La reconnaissance légale du droit de grève (1864 en France), la liberté syndicale (1884), la réduction de la journée de travail, le repos hebdomadaire obligatoire, l\'interdiction du travail des enfants et les premières assurances sociales (retraite, maladie).'
      }
    ],
    examTraps: [
      'Confondre capitalisme marchand (XVIe-XVIIIe s.) et capitalisme industriel (XIXe s.).',
      'Oublier que les crises économiques du XIXe siècle sont des crises de surproduction et non de pénurie.',
      'Négliger le rôle des banques de dépôt et des sociétés par actions dans l\'expansion industrielle.'
    ],
    quickMemo: 'Capitalisme : Propriété privée + Profit + Libre concurrence. 3 phases : Marchand -> Industriel -> Financier. 2 classes : Bourgeoisie vs Prolétariat. Crises cycliques de surproduction.',
    keywords: ['capitalisme', 'bourgeoisie', 'prolétariat', 'actions', 'obligations', 'banques', 'surproduction', 'syndicalisme', 'Première']
  },

  // =========================================================================
  // 2. HISTOIRE 1ÈRE (A, C, D) — THÈME 1 : LES RÉVOLUTIONS INDUSTRIELLES
  // =========================================================================
  {
    id: 'hg-1ere-h2-revolutions-industrielles',
    discipline: 'histoire',
    disciplineLabel: 'Histoire (Premières A, C, D)',
    level: '1ere',
    levelLabel: 'Première (1ère A, C, D)',
    serie: '1ere_a',
    serieLabel: 'Premières Toutes Séries (A, C, D)',
    chapter: 'Thème 1 : Le développement du capitalisme et l\'industrialisation de l\'Europe (XVIIIe - XIXe s.)',
    lessonTitle: 'Leçon 2 : Les révolutions industrielles',
    objectifs: [
      'Définir la révolution industrielle et analyser ses facteurs favorables (énergie, capitaux, démographie, sciences)',
      'Comparer la Première (1780-1810, Grande-Bretagne, charbon, vapeur, textile, acier) et la Deuxième Révolution industrielle (1880-1900, Allemagne/USA, pétrole, électricité, chimie)',
      'Expliquer les nouvelles méthodes de production : taylorisme (OST, travail à la chaîne), standardisation, cartels et trusts',
      'Analyser les conséquences économiques, spatiales (urbanisation) et environnementales de l\'industrialisation'
    ],
    fullCourseContent: `I. DÉFINITION ET FACTEURS DE LA RÉVOLUTION INDUSTRIELLE :
1. Définition : Passage historique rapide et profond d'une économie agraire et artisanale manuelle à une production industrielle mécanisée en usine.
2. Facteurs favorables :
- Ressources énergétiques et minières : gisements de fer, charbon/houille, pétrole, énergie hydraulique.
- Capitaux accumulés : profits issus du commerce colonial et des banques d'investissement.
- Révolution démographique : la population européenne double au XVIIIe s. (de 70 à 130 millions), fournissant main-d'œuvre abondante et vaste marché de consommation.
- Inventions scientifiques majeures : Denis Papin (vapeur 1690), James Watt (machine à vapeur 1782), Fourneyron (turbine 1830), Bessemer (acier 1854), Nobel (dynamite 1867), Gramme (dynamo 1869), Tesla (alternateur 1876), Daimler (moteur à explosion 1883), Pasteur (vaccins 1885).

II. LES DEUX RÉVOLUTIONS INDUSTRIELLES :
1. Première Révolution industrielle (1780-1810) :
- Pays pionnier : Grande-Bretagne.
- Énergie motrice : Charbon (houille) et vapeur d'eau.
- Secteurs moteurs : Industrie textile (métiers à tisser mécaniques) et sidérurgie (rails de chemin de fer, fonte).
2. Deuxième Révolution industrielle (1880-1900) :
- Pays pionniers : Allemagne et États-Unis.
- Nouvelles énergies : Pétrole (carburants) et électricité.
- Nouveaux secteurs : Chimie organique (engrais, colorants), industrie automobile, métallurgie de l'aluminium et de l'acier fin.
3. Nouvelles méthodes de travail :
- Le Taylorisme (Organisation Scientifique du Travail) : division horizontale et verticale des tâches, élimination des gestes inutiles, travail à la chaîne.
- La standardisation : fabrication de pièces interchangeables à l'identique pour baisser le coût unitaire.
- Les concentrations d'entreprises : cartels (concentration horizontale) et trusts (concentration verticale).

III. CONSÉQUENCES DES RÉVOLUTIONS INDUSTRIELLES :
1. Conséquences positives : Multiplication phénoménale des biens matériels, baisse des prix, essor fulgurant des transports (chemin de fer, navires à vapeur, automobile), suprématie technique et militaire européenne.
2. Conséquences spatiales et sociales : Exode rural massif et explosion urbaine (villes noires minières et industrielles), disparition progressive de l'artisanat d'atelier.
3. Revers et limites : Pollution atmosphérique au charbon, surexploitation ouvrière et dépendance extérieure aux matières premières conduisant à la conquête impérialiste coloniale.`,
    definitions: [
      { term: 'Révolution industrielle', definition: 'Mutation majeure caractérisée par l\'application massive des découvertes techniques et de la mécanisation à la production en usine.' },
      { term: 'Taylorisme', definition: 'Méthode d\'organisation scientifique du travail fondée sur la parcellisation des tâches, le chronométrage et le travail à la chaîne.' },
      { term: 'Cartel', definition: 'Entente financière horizontale entre entreprises de même secteur pour fixer les prix et répartir les quotas de vente.' },
      { term: 'Trust', definition: 'Concentration financière verticale regroupant plusieurs entreprises sous une direction unique pour maîtriser toute la chaîne de production.' }
    ],
    propertiesAndRules: [
      { name: 'Différence 1ère vs 2ème révolution industrielle', statement: 'La 1ère repose sur la houille, le textile et la machine à vapeur (Royaume-Uni) ; la 2ème repose sur le pétrole, l\'électricité, la chimie et l\'automobile (Allemagne, USA).' }
    ],
    formulas: [],
    stepByStepMethods: [
      { stepNumber: 1, title: 'Distinguer les deux révolutions industrielles', procedure: 'Identifier l\'époque, les pays moteurs, les sources d\'énergie et les secteurs dominants pour chaque phase.', tip: 'Ne pas confondre machine à vapeur (1ère) et moteur à explosion de Daimler (2ème).' }
    ],
    examples: [
      { statement: 'Quel a été l\'impact de l\'invention de James Watt sur les transports ?', solution: 'La machine à vapeur de James Watt (1782) a permis la création de la locomotive à vapeur et du navire à vapeur (steamship), accélérant les échanges commerciaux mondiaux et désenclavant les bassins de production.' }
    ],
    exercises: [
      {
        question: 'Quels facteurs ont favorisé le déclenchement des révolutions industrielles en Europe ?',
        correction: 'L\'abondance de ressources minières et énergétiques (fer, charbon), l\'accumulation de capitaux issus du grand commerce, l\'explosion démographique créant marché et main-d\'œuvre, et une vague d\'inventions scientifiques (machine à vapeur de Watt, acier Bessemer, dynamo de Gramme).'
      },
      {
        question: 'En quoi consiste le taylorisme et quel est son objectif ?',
        correction: 'Le taylorisme est l\'organisation scientifique du travail (OST) basée sur le découpage strict des tâches élémentaires, le travail à la chaîne et le chronométrage, dans le but d\'éliminer les temps morts et de maximiser la productivité ouvrière.'
      }
    ],
    examTraps: [
      'Confondre la 1ère révolution industrielle (charbon, vapeur) avec la 2ème (pétrole, électricité).',
      'Confondre Taylorisme (division chronométrée du travail) et Fordisme (travail à la chaîne + standardisation).',
      'Oublier de citer l\'Allemagne et les États-Unis comme leaders de la 2ème révolution industrielle.'
    ],
    quickMemo: '1ère Rév. Ind. (1780-1850) : Charbon, vapeur, Grande-Bretagne. 2ème Rév. Ind. (1880-1914) : Électricité, pétrole, Allemagne & USA. Organisation : Taylorisme (OST) + Fordisme (chaîne). Concentration : Cartels & Trusts.',
    keywords: ['révolution industrielle', 'vapeur', 'électricité', 'pétrole', 'taylorisme', 'fordisme', 'cartel', 'trust', 'James Watt', 'Première']
  },

  // =========================================================================
  // 3. HISTOIRE 1ÈRE (A, C, D) — THÈME 2 : L'IMPÉRIALISME ET BERLIN
  // =========================================================================
  {
    id: 'hg-1ere-h3-imperialisme-berlin',
    discipline: 'histoire',
    disciplineLabel: 'Histoire (Premières A, C, D)',
    level: '1ere',
    levelLabel: 'Première (1ère A, C, D)',
    serie: '1ere_a',
    serieLabel: 'Premières Toutes Séries (A, C, D)',
    chapter: 'Thème 2 : L\'impérialisme en Afrique du XIXe à la première moitié du XXe siècle',
    lessonTitle: 'Leçon 1 : Le mouvement impérialiste et le congrès de Berlin',
    objectifs: [
      'Définir l\'impérialisme et distinguer les causes profondes (économiques, stratégiques) des prétextes moraux (mission civilisatrice, évangélisation)',
      'Analyser les origines du Congrès de Berlin (l\'Affaire du Congo : Stanley vs Savorgnan de Brazza)',
      'Identifier les participants et les résolutions de l\'Acte final de Berlin (1884-1885) : liberté fluviale, abolition de la traite, principe d\'occupation effective',
      'Démontrer les conséquences géopolitiques : ruée coloniale (Scramble for Africa) et tracé arbitraire des frontières balkanisant l\'Afrique'
    ],
    fullCourseContent: `I. DÉFINITION ET MOTIVATIONS DE L'IMPÉRIALISME :
1. Définition : L'impérialisme est la politique d'expansion et d'hégémonie économique, militaire, politique et culturelle menée par des puissances fortes pour dominer des peuples et territoires plus faibles.
2. Les causes profondes :
- Économiques : recherche impérieuse de débouchés pour la surproduction industrielle, approvisionnement en matières premières bon marché (caoutchouc, cuivre, bois, café, coton) et placement fructueux de capitaux.
- Stratégiques et politiques : affirmation du prestige national, course aux bases navales et militaires pour sécuriser les routes maritimes.
- Démographiques : exutoire pour la surpopulation européenne fuyant les crises.
3. Les prétextes et motifs avoués :
- La prétendue « mission civilisatrice » : devoir proclamé des races dites supérieures d'éduquer les peuples africains (théorie de Jules Ferry).
- L'évangélisation chrétienne (missions catholiques et protestantes).
- La curiosité scientifique : explorations géographiques de l'intérieur du continent noir (Livingstone, Stanley, Brazza, Caillié).

II. LE CONGRÈS DE BERLIN (15 NOVEMBRE 1884 - 26 FÉVRIER 1885) :
1. L'origine : Les rivalités coloniales exacerbées, en particulier l'Affaire du bassin du Congo opposant Léopold II de Belgique (représenté par Stanley), la France (Brazza signant un traité avec le roi Makoko en 1880) et le Portugal.
2. Organisation : Convoqué par le chancelier allemand Otto von Bismarck, réunissant 14 puissances (13 États européens et les États-Unis), en l'absence totale de tout représentant africain.
3. Les résolutions de l'Acte de Berlin :
- Liberté totale de commerce et de navigation internationale sur les fleuves Congo et Niger.
- Abolition formelle de la traite des esclaves sur terre et mer.
- Neutralité et reconnaissance de l'État Indépendant du Congo (EIC) sous la propriété personnelle du roi Léopold II de Belgique.
- Principe de l'occupation effective (Articles 34 et 35) : toute puissance s'installant sur la côte doit occuper l'hinterland avec une autorité militaire réelle et notifier sa possession aux autres puissances signataires.

III. LES CONSÉQUENCES POUR L'AFRIQUE :
1. Le signal de la ruée coloniale (« Scramble for Africa ») : Les puissances lancent des colonnes militaires pour occuper physiquement l'intérieur des terres.
2. La balkanisation du continent : Découpage arbitraire de frontières artificielles sans égard pour les aires culturelles et ethniques préexistantes.
3. La perte totale de souveraineté des royaumes et empires africains.`,
    definitions: [
      { term: 'Impérialisme', definition: 'Doctrine et pratique de domination globale exercée par des puissances impériales sur d\'autres territoires.' },
      { term: 'Principe d\'occupation effective', definition: 'Règle du Congrès de Berlin imposant l\'établissement d\'une autorité militaire et administrative réelle sur le terrain pour faire reconnaître une colonie.' },
      { term: 'Mission civilisatrice', definition: 'Idéologie colonialiste prétendant apporter le progrès et les Lumières aux peuples colonisés pour justifier leur domination.' }
    ],
    propertiesAndRules: [
      { name: 'Articles 34 et 35 de l\'Acte de Berlin', statement: 'Aucune puissance ne peut revendiquer un territoire par simple découverte maritime ; l\'occupation militaire effective et la notification diplomatique sont obligatoires.' }
    ],
    formulas: [],
    stepByStepMethods: [
      { stepNumber: 1, title: 'Commenter l\'Acte de Berlin', procedure: 'Situer le contexte de rivalité au Congo, analyser les 4 résolutions phares et montrer l\'impact de l\'occupation effective sur la conquête militaire.', tip: 'Souligner qu\'aucun souverain africain n\'était invité à la conférence.' }
    ],
    examples: [
      { statement: 'Pourquoi dit-on que le Congrès de Berlin a institutionnalisé le partage de l\'Afrique ?', solution: 'Parce qu\'en posant la clause d\'occupation effective et de notification obligatoire, il a contraint les puissances européennes à lancer sans délai des conquêtes militaires à l\'intérieur du continent pour devancer leurs rivales.' }
    ],
    exercises: [
      {
        question: 'Quelles sont les causes profondes et les prétextes de l\'impérialisme européen en Afrique ?',
        correction: 'Causes profondes : recherche de débouchés pour la surproduction industrielle, accès aux matières premières et aux bases stratégiques. Prétextes : mission civilisatrice des races supérieures, évangélisation religieuse et explorations scientifiques.'
      },
      {
        question: 'Citez trois grandes résolutions adoptées lors du Congrès de Berlin (1884-1885).',
        correction: '1. Liberté de commerce et de navigation sur les fleuves Congo et Niger. 2. Reconnaissance de l\'État Indépendant du Congo sous Léopold II. 3. Règle de l\'occupation effective imposant une présence administrative réelle et une notification officielle.'
      }
    ],
    examTraps: [
      'Croire que l\'Afrique a été découpée avec une carte pendant la Conférence de Berlin (elle a fixé les règles juridiques de l\'occupation, la conquête s\'est faite sur le terrain).',
      'Oublier de préciser que l\'État Indépendant du Congo appartenait à Léopold II à titre privé et non à la Belgique.',
      'Omettre la distinction fondamentale entre causes réelles (économiques/stratégiques) et prétextes moraux (civilisation/évangélisation).'
    ],
    quickMemo: 'Congrès de Berlin (15 nov. 1884 - 26 fév. 1885) : Convoqué par Bismarck. Causes réelles : débouchés, matières premières, nationalisme. Prétextes : mission civilisatrice. Résolutions : liberté de navigation Congo/Niger, Léopold II souverain du Congo, règle de l\'occupation effective déclenchant le Scramble for Africa.',
    keywords: ['Congrès de Berlin', 'Bismarck', 'impérialisme', 'Léopold II', 'Congo', 'occupation effective', 'Scramble for Africa', 'Première']
  },

  // =========================================================================
  // 4. HISTOIRE 1ÈRE (A, C, D) — THÈME 2 : LES RÉSISTANCES EN AFRIQUE & CÔTE D'IVOIRE
  // =========================================================================
  {
    id: 'hg-1ere-h4-resistances-afrique-ci',
    discipline: 'histoire',
    disciplineLabel: 'Histoire (Premières A, C, D)',
    level: '1ere',
    levelLabel: 'Première (1ère A, C, D)',
    serie: '1ere_a',
    serieLabel: 'Premières Toutes Séries (A, C, D)',
    chapter: 'Thème 2 : L\'impérialisme en Afrique du XIXe à la première moitié du XXe siècle',
    lessonTitle: 'Leçon 2 : Les résistances aux conquêtes territoriales en Afrique : exemple de la Côte d\'Ivoire',
    objectifs: [
      'Comparer les systèmes d\'administration coloniale : Direct Rule (France, centralisée) et Indirect Rule (Grande-Bretagne, autorités coutumières)',
      'Identifier les causes multiples des résistances africaines (économiques, politiques, socioculturelles)',
      'Analyser les formes de résistance en Côte d\'Ivoire : résistances organisées (Samory Touré, Zokou Gbeuli) et spontanées/lignagères (Baoulé, Gouro, Lobi)',
      'Expliquer les causes de l\'échec militaire des résistances et leurs conséquences sur les populations'
    ],
    fullCourseContent: `I. LES SYSTÈMES COLONIAUX D'ADMINISTRATION :
1. Le système britannique (Indirect Rule) : Théorisé par Lord Frederick Lugard. Administration indirecte maintenant en place les chefs traditionnels (émirs, rois), respectant les coutumes locales pour collecter l'impôt et maintenir l'ordre à moindre coût.
2. Le système français (Direct Rule) : Administration directe hautement centralisée et uniforme : Ministre à Paris -> Gouverneur Général de l'AOF à Dakar -> Gouverneur de colonie -> Commandant de cercle -> Chef de subdivision -> Chefs de village réduits à des auxiliaires subalternes.

II. LES CAUSES DES RÉSISTANCES EN CÔTE D'IVOIRE :
1. Causes économiques : Refus de l'impôt de capitation payé en argent, pillage des récoltes, travail forcé, réquisition de vivres et corvées sur les routes.
2. Causes politiques : Refus de la sujétion étrangère, perte de souveraineté des chefs traditionnels, désarmement obligatoire et brutalité des colonnes de conquête.
3. Causes socioculturelles : Rejet du christianisme, de l'assimilation et des profanations de bois sacrés et coutumes ancestrales.

III. LES FORMES DE RÉSISTANCE EN CÔTE D'IVOIRE :
1. Les résistances organisées (armées permanentes) :
- Samory Touré : Déplace son empire vers Kong et l'est ivoirien, utilise la guerre de terre brûlée et ses forgerons locaux ; capturé à Guélémou en 1898 par Gouraud, déporté au Gabon où il meurt en 1900.
- Zokou Gbeuli : Chef de guerre bété à Daloa, assiège le poste colonial en 1906 avant d'être capturé et déporté à Zuénoula.
- Kassi Dihyé : Roi du Sanwi et du N'denié.
2. Les résistances populaires et spontanées (sociétés lignagères sans armée de métier) :
- Les Baoulé N'gban (1893-1912) : harcèlement perpétuel par embuscades en forêt dense, blocus de postes militaires.
- Les Gouro (1907-1914) et les Lobi (1898-1920) : résistance opiniâtre utilisant flèches empoisonnées et reliefs escarpés.

IV. LES CAUSES DE L'ÉCHEC ET LES CONSÉQUENCES :
1. Causes de l'échec : Écrasante supériorité militaire française (fusils à répétition, canons, mitrailleuses), division et mésententes séculaires entre royaumes africains, trahisons de chefs alliés aux Français.
2. Conséquences : Éradication des souverainetés locales, déportations de chefs illustres, lourdes pertes humaines et mise en place d'un régime colonial autoritaire.`,
    definitions: [
      { term: 'Indirect Rule', definition: 'Système d\'administration coloniale britannique s\'appuyant sur les institutions et chefs traditionnels locaux.' },
      { term: 'Direct Rule', definition: 'Système d\'administration coloniale français centralisé et direct, gouverné par des administrateurs métropolitains.' },
      { term: 'Guerre de terre brûlée', definition: 'Tactique militaire de destruction préventive des vivres, récoltes et habitations pour affamer l\'assaillant.' }
    ],
    propertiesAndRules: [
      { name: 'Différence essentielle Direct vs Indirect Rule', statement: 'L\'Indirect Rule préserve les chefferies locales comme relais autonomes ; le Direct Rule les destitue ou les réduit à des exécutants subalternes.' }
    ],
    formulas: [],
    stepByStepMethods: [
      { stepNumber: 1, title: 'Catégoriser les résistances ivoiriennes', procedure: 'Séparer nettement les résistances organisées à commandement unifié (Samory, Zokou Gbeuli) des résistances lignagères segmentaires (Baoulé, Gouro, Lobi).', tip: 'Mentionner la capture de Samory en 1898 à Guélémou.' }
    ],
    examples: [
      { statement: 'Pourquoi les sociétés sans chef unique (comme les Baoulé) ont-elles résisté plus longtemps que les empires centralisés ?', solution: 'Parce que les Français ne pouvaient pas décapiter la résistance en capturant un seul souverain : chaque village ou lignage baoulé poursuivait la guérilla de façon autonome en forêt dense.' }
    ],
    exercises: [
      {
        question: 'Distinguez le système colonial français de l\'administration coloniale britannique.',
        correction: 'Le système français (Direct Rule) est centralisé, autoritaire et dirigé directement par des administrateurs français depuis Paris et Dakar, réduisant les chefs locaux à de simples exécutants. Le système britannique (Indirect Rule) s\'appuie sur les structures traditionnelles et les souverains locaux pour gouverner.'
      },
      {
        question: 'Pourquoi la résistance de Samory Touré en Côte d\'Ivoire a-t-elle finalement échoué ?',
        correction: 'À cause de la supériorité technologique et militaire des armes françaises, de l\'épuisement de ses troupes après des décennies de guerre de terre brûlée, de l\'hostilité des populations locales dont les villages étaient ravagés, et de son encerclement aboutissant à sa capture à Guélémou en 1898.'
      }
    ],
    examTraps: [
      'Présenter la colonisation comme une simple promenade militaire sans résistance des peuples africains.',
      'Confondre Direct Rule (assimilation/association directe française) et Indirect Rule (administration indirecte britannique par les chefs traditionnels).',
      'Oublier de citer les résistances ivoiriennes locales : Baoulé, Bété de Zokou Gbeuli, Dan et Gouro.'
    ],
    quickMemo: 'Systèmes coloniaux : Français = Direct Rule (centralisé, chefs locaux réduits à des auxiliaires) ; Britannique = Indirect Rule (Lord Lugard, autonomie coutumière). Résistances : Armées (Samory Touré capturé en 1898 à Guélémou, Zokou Gbeuli en 1906, Baoulé de 1891 à 1911) et Passives (fuite, boycott, refus de l\'impôt).',
    keywords: ['résistances', 'Samory Touré', 'Guélémou', 'Zokou Gbeuli', 'Baoulé', 'Direct Rule', 'Indirect Rule', 'Lord Lugard', 'Première']
  },

  // =========================================================================
  // 5. HISTOIRE 1ÈRE (A, C, D) — THÈME 2 : COLONISATION DE LA CÔTE D'IVOIRE
  // =========================================================================
  {
    id: 'hg-1ere-h5-colonisation-cote-ivoire',
    discipline: 'histoire',
    disciplineLabel: 'Histoire (Premières A, C, D)',
    level: '1ere',
    levelLabel: 'Première (1ère A, C, D)',
    serie: '1ere_a',
    serieLabel: 'Premières Toutes Séries (A, C, D)',
    chapter: 'Thème 2 : L\'impérialisme en Afrique du XIXe à la première moitié du XXe siècle',
    lessonTitle: 'Leçon 3 : La colonisation et les résistances en Côte d\'Ivoire',
    objectifs: [
      'Analyser les étapes de la conquête : pénétration pacifique (Binger, Clozel, 1893-1908) et manière forte brutale (Angoulvant, 1908-1920)',
      'Décrire les mécanismes de l\'économie de traite : cultures obligatoires de rente (café d\'Arthur Verdier à Elima en 1881, cacao de Brétignière en 1882), impôt de capitation, travail forcé, comptoirs européens (CFAO, SCOA)',
      'Étudier les résistances actives armées (révolte des Abbey en 1910) et les résistances passives (fuite massive de 12 000 personnes vers la Gold Coast, boycott)',
      'Évaluer le bilan démographique et socio-économique de la colonisation'
    ],
    fullCourseContent: `I. LES ÉTAPES DE LA CONQUÊTE COLONIALE EN CÔTE D'IVOIRE :
1. Création de la colonie : Décret du 10 mars 1893 créant la colonie de Côte d'Ivoire (1ère capitale : Grand-Bassam, gouverneur : Louis-Gustave Binger).
2. Phase 1 : La « pénétration pacifique » (1893-1908) : Binger puis Clozel privilégient la diplomatie, le commerce et les traités d'amitié. Cette méthode échoue car l'essentiel de l'intérieur du pays reste insoumis à l'autorité coloniale.
3. Phase 2 : La « politique de la manière forte » (1908-1920) : Gabriel Angoulvant applique la pacification brutale : désarmement forcé (confiscation de plus de 100 000 fusils), amendes de guerre écrasantes, déportations, regroupement forcé des villages et incendies de campements.

II. L'APPAREIL D'EXPLOITATION DE L'ÉCONOMIE DE TRAITE :
1. L'économie de traite : Système extraverti consistant à prélever des matières premières brutes (café, cacao, bois, huile de palme) pour les usines métropolitaines et à écouler des produits manufacturés européens.
- Café : 1ère plantation industrielle créée en 1881 à Elima par Arthur Verdier.
- Cacao : introduit en 1882 à Assinie par Amédée de Brétignière.
2. Les instruments fiscaux et de corvée :
- Impôt de capitation : 2,5 à 6 francs prélevés sur tout individu dès 10 ans, forçant les paysans à travailler pour la monnaie coloniale.
- Travail forcé et prestations : corvées obligatoires non rémunérées sur les voies de chemin de fer (Abidjan-Niger dès 1904) et chantiers routiers.
- Monopole des firmes commerciales européennes : CFAO, SCOA, CFCI, Unilever fixant arbitrairement les cours.

III. LES RÉSISTANCES ET LE BILAN :
1. Résistances actives armées :
- Révolte des Abbey (1910) : destruction des voies ferrées à Agboville, exécution du lieutenant Rubino, suivie d'une répression féroce.
- Révoltes sanglantes des Baoulé (1908-1910) et des Gouro : population baoulé réduite de 1,5 million à 260 000 âmes.
2. Résistances passives quotidiennes :
- Exode transfrontalier : fuite de plus de 12 000 Ivoiriens vers la Gold Coast britannique (Ghana) et le Liberia pour échapper aux impôts et aux travaux forcés.
- Boycott des cultures d'exportation imposées et refus de la monnaie coloniale.
3. Bilan : Soumission totale du pays achevée en 1920, déstructuration des sociétés traditionnelles et mise en place d'une économie d'exportation dépendante.`,
    definitions: [
      { term: 'Économie de traite', definition: 'Système d\'échanges inégaux imposé par le colonisateur, fondé sur l\'exportation brute de produits primaires et l\'importation de produits manufacturés.' },
      { term: 'Manière forte (Angoulvant)', definition: 'Doctrine militaire d\'Angoulvant (1908-1920) usant du désarmement, des amendes collectives et de la répression pour briser toute contestation.' },
      { term: 'Impôt de capitation', definition: 'Taxe coloniale obligatoire payée par tête d\'habitant dès l\'âge de 10 ans, obligeant les Africains à intégrer le travail salarié monétaire.' }
    ],
    propertiesAndRules: [
      { name: 'Régime de pacification d\'Angoulvant', statement: 'Gabriel Angoulvant met fin à la méthode douce de Binger dès 1908 et pacifie la Côte d\'Ivoire par les armes, le désarmement et la déportation des chefs rebelles.' }
    ],
    formulas: [],
    stepByStepMethods: [
      { stepNumber: 1, title: 'Expliquer le passage de la pénétration pacifique à la manière forte', procedure: 'Montrer que l\'insoumission persistante de l\'intérieur a poussé le pouvoir colonial à remplacer les traités de Binger par l\'action punitive d\'Angoulvant.', tip: 'Souligner le rôle déclencheur de la révolte des Abbey en 1910.' }
    ],
    examples: [
      { statement: 'En quoi consistaient les résistances passives en Côte d\'Ivoire ?', solution: 'Elles consistaient à refuser silencieusement l\'ordre colonial sans affrontement direct : fuite collective vers la Gold Coast britannique, abandon des villages, arrachage nocturne des plants de café imposés et refus du papier-monnaie français.' }
    ],
    exercises: [
      {
        question: 'Quelles sont les deux grandes phases de la conquête coloniale en Côte d\'Ivoire et leurs gouverneurs respectifs ?',
        correction: 'La phase de la « pénétration pacifique » (1893-1908) sous Louis-Gustave Binger et François Clozel, et la phase de la « politique de la manière forte » (1908-1920) sous Gabriel Angoulvant.'
      },
      {
        question: 'Comment fonctionnait l\'économie de traite mise en place par la métropole française ?',
        correction: 'Elle imposait aux paysans ivoiriens la culture obligatoire de matières premières d\'exportation (café, cacao, bois) achetées à bas prix par des maisons de commerce comme la CFAO et la SCOA, et les contraignait à acheter des produits manufacturés européens en payant des impôts de capitation en argent.'
      }
    ],
    examTraps: [
      'Confondre Louis-Gustave Binger (pénétration pacifique, traités, 1893) et Gabriel Angoulvant (manière forte, désarmement, 1908).',
      'Ignorer le rôle de la révolte des Abbey (1910) et la mort du commandant Rubino dans le durcissement colonial.',
      'Oublier les instruments d\'exploitation coloniale : l\'impôt de capitation, les prestations forcées et le code de l\'indigénat.'
    ],
    quickMemo: 'Colonisation Côte d\'Ivoire (10 mars 1893) : Phase pacifique (1893-1908, Binger & Clozel) -> Phase manière forte (1908-1920, Angoulvant : désarmement de 113 000 fusils, déportation des chefs, impôt forcé). Exploitation : économie de traite (CFAO, SCOA), cultures forcées de rente, chemin de fer Abidjan-Niger (RAN).',
    keywords: ['colonisation', 'Côte d\'Ivoire', 'Binger', 'Angoulvant', 'manière forte', 'économie de traite', 'Abbey', 'Rubino', 'Première']
  },

  // =========================================================================
  // 6. HISTOIRE 1ÈRE (A, C, D) — THÈME 3 : GUERRES ET VIOLENCES DE MASSE
  // =========================================================================
  {
    id: 'hg-1ere-h6-guerres-mondiales-violences',
    discipline: 'histoire',
    disciplineLabel: 'Histoire (Premières A, C, D)',
    level: '1ere',
    levelLabel: 'Première (1ère A, C, D)',
    serie: '1ere_a',
    serieLabel: 'Premières Toutes Séries (A, C, D)',
    chapter: 'Thème 3 : Les guerres et les violences de masse du XXème siècle à nos jours',
    lessonTitle: 'Leçon 1, 2 & 3 : La Première Guerre, la Deuxième Guerre mondiale et les génocides du XXe siècle',
    objectifs: [
      'Analyser les causes de la Première Guerre mondiale (rivalités, Triplice vs Triple Entente, attentat de Sarajevo du 28 juin 1914) et ses conséquences (9M de morts, Diktat de Versailles, création de la SDN)',
      'Expliquer les causes de la Seconde Guerre mondiale (crise de 1929, régimes totalitaires, coups de force hitlériens) et son issue (50-60M de morts, conférences de paix de Yalta, création de l\'ONU, procès de Nuremberg)',
      'Définir le génocide (Convention de l\'ONU de 1948) et analyser les grands génocides : Arméniens (1915), Shoah (1939-1945), Tutsis au Rwanda (1994) et violences de masse (Khmers rouges, Darfour)'
    ],
    fullCourseContent: `I. LA PREMIÈRE GUERRE MONDIALE (1914-1918) :
1. Causes :
- Rivalités territoriales (l'Alsace-Lorraine disputée entre France et Allemagne, rivalités austro-russes dans les Balkans) et coloniales (crises marocaines de 1905 et 1911).
- Blocs d'alliances antagonistes : Triplice (Allemagne, Autriche-Hongrie, Italie) vs Triple Entente (France, Royaume-Uni, Russie).
- Élément déclencheur : Attentat de Sarajevo du 28 juin 1914 (assassinat de François-Ferdinand par Gavrilo Princip).
2. Conséquences :
- Humaines : 9 millions de morts, 20 millions de blessés mutilés (« gueules cassées »), vieillissement démographique.
- Économiques : ruine financière des belligérants européens au profit des États-Unis, nouveaux créanciers du monde.
- Géopolitiques : Traité de Versailles (28 juin 1919) humiliant l'Allemagne (« Diktat », perte de l'Alsace-Lorraine, 132 milliards de réparations), dislocation de 4 empires et création de la Société des Nations (SDN).

II. LA DEUXIÈME GUERRE MONDIALE (1939-1945) :
1. Causes :
- Conséquences de la crise de 1929 et montée des régimes totalitaires fasciste et nazi (Hitler au pouvoir en 1933).
- Coups de force d'Hitler (remilitarisation de la Rhénanie, réarmement, Anschluss en 1938, crise des Sudètes/accords de Munich).
- Pacte germano-soviétique et invasion de la Pologne le 1er septembre 1939.
2. Conséquences :
- Bilan humain catastrophique : 50 à 60 millions de morts (dont plus de 20 millions en URSS), traumatisme moral inouï.
- Règlements de paix : Conférences de Yalta et de Potsdam (1945), création de l'ONU à San Francisco (26 juin 1945).
- Procès de Nuremberg et de Tokyo condamnant les crimes contre l'humanité.
- Déclin définitif de l'Europe et bipartition du monde en deux blocs rivaux (Guerre froide entre USA et URSS).

III. LES VIOLENCES DE MASSE ET LES GÉNOCIDES DU XXE SIÈCLE :
1. Définition : Un génocide (terme forgé par Raphael Lemkin et consacré par l'ONU en 1948) est la destruction intentionnelle et planifiée, totale ou partielle, d'un groupe national, ethnique, racial ou religieux.
2. Les génocides historiques reconnus :
- Le génocide arménien (1915-1916) par les Jeunes-Turcs ottomans : 1,5 million de morts par massacres et marches de la mort.
- La Shoah et le Samudaripen (1939-1945) : extermination industrielle nazie de 6 millions de Juifs et de centaines de milliers de Tsiganes dans les chambres à gaz.
- Le génocide des Tutsis au Rwanda (avril-juillet 1994) : massacre méthodique de 800 000 à 1 million de Tutsis et Hutus modérés par les milices Interahamwe en 100 jours.
3. Autres violences de masse : Khmers rouges au Cambodge (1975-1979, 2 millions de morts), Holodomor en Ukraine (1932-1933, 3 millions), massacres chimiques de Kurdes à Halabja (1988), atrocités au Darfour (depuis 2003).
4. La justice internationale : Mise en place de la Cour Pénale Internationale (CPI) et impératif du devoir de mémoire.`,
    definitions: [
      { term: 'Génocide', definition: 'Crime international caractérisé par l\'intention de détruire méthodiquement et collectivement un groupe national, ethnique ou religieux.' },
      { term: 'Diktat de Versailles', definition: 'Qualification allemande du traité de paix de 1919 imposé sans négociation, prévoyant amputations territoriales et réparations financières.' },
      { term: 'Shoah', definition: 'Extermination systématique et industrielle du peuple juif par l\'Allemagne nazie et ses collaborateurs durant la Seconde Guerre mondiale.' }
    ],
    propertiesAndRules: [
      { name: 'Critères juridiques du génocide (Convention ONU 1948)', statement: 'Le crime de génocide exige la preuve de l\'intentionnalité planifiée de détruire un groupe en tant que tel, indépendamment du nombre final de victimes.' }
    ],
    formulas: [],
    stepByStepMethods: [
      { stepNumber: 1, title: 'Caractériser un génocide', procedure: 'Identifier l\'idéologie stigmatisante, la planification d\'État, l\'appareil logistique d\'extermination et la qualification juridique internationale.', tip: 'Ne pas confondre massacre de guerre spontané et génocide systématique planifié.' }
    ],
    examples: [
      { statement: 'Pourquoi le Traité de Versailles est-il considéré comme l\'une des causes de la Seconde Guerre mondiale ?', solution: 'Parce que les sanctions territoriales, militaires et financières écrasantes infligées à l\'Allemagne ont engendré un profond esprit de revanche et nourri la propagande nationaliste d\'Hitler.' }
    ],
    exercises: [
      {
        question: 'Quel est l\'événement déclencheur immédiat de la Première Guerre mondiale ?',
        correction: 'L\'attentat de Sarajevo du 28 juin 1914, au cours duquel l\'archiduc François-Ferdinand, héritier de l\'empire austro-hongrois, a été assassiné par le nationaliste serbe Gavrilo Princip.'
      },
      {
        question: 'Définissez la notion de génocide selon la convention de l\'ONU de 1948 et citez trois exemples du XXe siècle.',
        correction: 'Un génocide est un acte commis avec l\'intention de détruire, ou tout ou en partie, un groupe national, ethnique, racial ou religieux. Exemples : le génocide arménien (1915-1916), la Shoah des Juifs (1939-1945) et le génocide des Tutsis au Rwanda (1994).'
      }
    ],
    examTraps: [
      'Confondre un massacre de guerre (exactions contre des combattants ou civils isolés) et un génocide (extermination planifiée d\'un groupe ciblé).',
      'Confondre les alliances de 1914 : Triplice (Allemagne, Autriche-Hongrie, Italie) vs Triple Entente (France, Russie, Royaume-Uni).',
      'Oublier que la Seconde Guerre mondiale débute le 1er septembre 1939 par l\'invasion de la Pologne par l\'Allemagne nazie.'
    ],
    quickMemo: '1ère GM (1914-1918) : Sarajevo 28 juin 1914, 9-10M morts, Traité de Versailles (1919), SDN. 2ème GM (1939-1945) : Fascisme/Nazisme, invasion Pologne 1939, capitulation 8 mai & 2 sept 1945, ONU. Génocides : Arméniens (1915), Shoah (6M morts, 1939-1945), Tutsis au Rwanda (800 000 morts en 100 jours, 1994).',
    keywords: ['Première Guerre mondiale', 'Seconde Guerre mondiale', 'Sarajevo', 'Versailles', 'génocide', 'Shoah', 'Rwanda', 'ONU', 'Première']
  },

  // =========================================================================
  // 7. GÉOGRAPHIE 1ÈRE (A, C, D) — THÈME 1 : DYNAMISME DÉMOGRAPHIQUE
  // =========================================================================
  {
    id: 'hg-1ere-g1-dynamisme-demographique',
    discipline: 'geographie',
    disciplineLabel: 'Géographie (Premières A, C, D)',
    level: '1ere',
    levelLabel: 'Première (1ère A, C, D)',
    serie: '1ere_a',
    serieLabel: 'Premières Toutes Séries (A, C, D)',
    chapter: 'Thème 1 : Dynamisme démographique de la Côte d\'Ivoire et dans le monde',
    lessonTitle: 'Leçon 1 & 2 : Dynamisme démographique de la Côte d\'Ivoire et croissance démographique mondiale',
    objectifs: [
      'Analyser l\'évolution de la population ivoirienne (1,8M en 1920, 3,8M en 1960, 22,6M en 2014) et la forme en entonnoir renversé de sa pyramide des âges',
      'Identifier les caractéristiques de la population ivoirienne : jeunesse (> 60% de moins de 25 ans), fort taux d\'immigration étrangère (28%), prédominance du secteur primaire (57%)',
      'Comparer les dynamiques mondiales : vieillissement et dénatalité au Nord (pyramide en parasol/ogive) vs explosion au Sud',
      'Confronter les doctrines démographiques : Malthusianisme (antinataliste) contre Natalisme et analyser les résolutions des conférences de Bucarest, Mexico et Pékin'
    ],
    fullCourseContent: `I. DYNAMISME DÉMOGRAPHIQUE DE LA CÔTE D'IVOIRE :
1. Évolution historique :
- Phase lente (1920-1960) : de 1,8 million à 3,8 millions d'habitants à cause des épidémies et de la forte mortalité infantile.
- Explosion post-indépendance (1960-2014) : bondit à 6,7M en 1975, 12M en 1990, 15,8M en 1998 et 22,6 millions au RGPH de 2014 (doublement tous les 20 ans).
2. Structure par âge et sexe :
- Pyramide des âges en forme d'« entonnoir renversé » : base très large (les jeunes de 0 à 25 ans représentent plus de 60%), flancs rentrants (mortalité adulte précoce) et sommet très effilé (espérance de vie moyenne autour de 60-65 ans).
3. Mobilité et secteurs d'activité :
- Population active : 57% dans le secteur primaire (agricole), 14% dans le secondaire et 29% dans le tertiaire (informel dominant).
- Forte composante migratoire : 28% d'étrangers ouest-africains intégrés dans l'agriculture cacaoyère et le commerce.
- Répartition spatiale déséquilibrée : fortes densités au Sud forestier et à Abidjan, faibles densités au Nord et dans le Sud-Ouest (< 5 hab/km²).

II. LA CROISSANCE DÉMOGRAPHIQUE MONDIALE :
1. Évolution globale : 580 millions en 1600 -> 1,6 milliard en 1900 -> 2,5 milliards en 1950 -> plus de 7 milliards aujourd'hui.
2. La fracture démographique mondiale :
- Pays développés (Nord) : transition démographique achevée, faible fécondité (< 2,1 enfants/femme), croissance quasi nulle (0,2% à 0,6%), pyramides des âges en « parasol » ou « ogive » avec vieillissement prononcé de la population.
- Pays en développement (Sud) : transition inachevée, natalité vigoureuse, population très jeune et forte pression sur les ressources.
3. Débats et politiques de population :
- Malthusianisme : doctrine de Thomas Malthus préconisant le contrôle des naissances (planning familial) pour éviter que la population ne dépasse les moyens de subsistance.
- Natalisme : doctrine encourageant les naissances pour assurer le renouvellement des générations et la puissance économique.
- Conférences de l'ONU : Bucarest (1974), Mexico (1984) et Pékin (2004) promouvant la santé reproductive et l'émancipation de la femme.`,
    definitions: [
      { term: 'Pyramide en entonnoir renversé', definition: 'Profil démographique des pays du Tiers-Monde à large base juvénile et sommet étroit traduisant une forte fécondité et une faible longévité.' },
      { term: 'Malthusianisme', definition: 'Théorie préconisant la restriction volontaire des naissances pour équilibrer la croissance démographique et les ressources.' },
      { term: 'Transition démographique', definition: 'Passage d\'un régime démographique traditionnel (fortes natalité et mortalité) à un régime moderne (faibles natalité et mortalité).' }
    ],
    propertiesAndRules: [
      { name: 'Seuil de renouvellement des générations', statement: 'Il faut un indice synthétique de fécondité de 2,1 enfants par femme pour assurer le maintien stable d\'une population.' }
    ],
    formulas: [
      { name: 'Taux d\'accroissement naturel (TAN)', formula: 'TAN = Taux de natalité (‰) - Taux de mortalité (‰)', explanation: 'Mesure la croissance de la population hors mouvements migratoires.' }
    ],
    stepByStepMethods: [
      { stepNumber: 1, title: 'Commenter une pyramide des âges', procedure: '1. Décrire la base (natalité), 2. Observer les flancs (adultes et mortalité), 3. Analyser le sommet (espérance de vie), 4. En déduire le profil socio-économique.', tip: 'Toujours associer entonnoir renversé à une forte charge de dépendance des jeunes.' }
    ],
    examples: [
      { statement: 'Quels défis pose la jeunesse de la population ivoirienne ?', solution: 'Une population à 60% de moins de 25 ans exige des investissements massifs en écoles, universités, centres de santé et nécessite la création rapide d\'emplois pour absorber les diplômés.' }
    ],
    exercises: [
      {
        question: 'Quelles sont les caractéristiques majeures de la pyramide des âges de la Côte d\'Ivoire ?',
        correction: 'Elle a la forme d\'un entonnoir renversé : une base très large due à une forte natalité (plus de 60% de jeunes de 0-25 ans), des flancs concaves traduisant une mortalité adulte prématurée et un sommet effilé reflétant une espérance de vie modérée (environ 60 ans).'
      },
      {
        question: 'Opposez la théorie malthusienne à la vision nataliste.',
        correction: 'Le malthusianisme prône la limitation impérative des naissances pour empêcher la famine, estimant que la population croît plus vite que les subsistances. Le natalisme soutient au contraire que l\'accroissement démographique est source de dynamisme économique, d\'innovations et de puissance.'
      }
    ],
    examTraps: [
      'Confondre la pyramide en parasol/entonnoir renversé (pays du Sud, jeunes) avec la pyramide en ogive/urne (pays du Nord, vieillissement).',
      'Confondre le taux de natalité (naissances pour 1000 habitants) avec l\'indice synthétique de fécondité (nombre moyen d\'enfants par femme).',
      'Oublier que la forte proportion de jeunes en Côte d\'Ivoire (60%) représente à la fois un défi social lourd et un formidable dividende démographique potentiel.'
    ],
    quickMemo: 'Démographie CI : ~29M hab. (RGPH 2021), croissance rapide (2,6%/an), 60% < 25 ans, pyramide en entonnoir renversé (base large = forte natalité, sommet effilé = mortalité adulte). Démographie mondiale : 8 milliards d\'humains (nov. 2022). Débat : Malthusianisme (frein de la natalité) vs Natalisme (la population comme richesse).',
    keywords: ['démographie', 'Côte d\'Ivoire', 'pyramide des âges', 'entonnoir renversé', 'malthusianisme', 'natalisme', 'croissance démographique', 'Première']
  },

  // =========================================================================
  // 8. GÉOGRAPHIE 1ÈRE (A, C, D) — THÈMES 2, 3 & 4 : URBANISATION, AMÉNAGEMENT & MONDIALISATION
  // =========================================================================
  {
    id: 'hg-1ere-g2-urbanisation-amenagement-mondialisation',
    discipline: 'geographie',
    disciplineLabel: 'Géographie (Premières A, C, D)',
    level: '1ere',
    levelLabel: 'Première (1ère A, C, D)',
    serie: '1ere_a',
    serieLabel: 'Premières Toutes Séries (A, C, D)',
    chapter: 'Thèmes 2, 3 & 4 : Urbanisation, aménagement du territoire ivoirien et mondialisation',
    lessonTitle: 'L\'urbanisation dans le monde, l\'organisation administrative/aménagement en Côte d\'Ivoire et la mondialisation',
    objectifs: [
      'Caractériser l\'urbanisation dans le Tiers-Monde (macrocéphalie d\'Abidjan, bidonvilles) et dans les pays développés (mégalopoles, conurbations, banlieues)',
      'Maîtriser la loi de 2014 régissant l\'organisation administrative ivoirienne : déconcentration (31 Régions, 108 Départements, 426 Sous-préfectures) et décentralisation (31 Conseils Régionaux, 187 Communes, 2 Districts autonomes)',
      'Analyser les projets d\'aménagement en Côte d\'Ivoire : AVB (barrage de Kossou), ARSO (port de San Pedro en 1972), SODESUCRE/CIDT au Nord, Yamoussoukro capitale en 1983',
      'Identifier les acteurs (FMN, États, Triade) et conséquences de la mondialisation (délocalisation, marginalisation de l\'Afrique à moins de 3% des échanges)'
    ],
    fullCourseContent: `I. L'URBANISATION DANS LE MONDE :
1. Dans les pays en développement (Côte d'Ivoire) :
- Urbanisation rapide et explosive nourrie par l'exode rural et la jeunesse démographique.
- Phénomène de macrocéphalie : Abidjan concentre près de 6 millions d'habitants (20% de la population nationale) et l'essentiel des richesses.
- Paysages contrastés : quartiers d'affaires verticaux (Plateau), zones résidentielles (Cocody) et vastes quartiers spontanés ou bidonvilles sous-équipés (inondations, insalubrité).
2. Dans les pays développés (France) :
- Urbanisation ancienne et massive (taux supérieur à 75-80%).
- Formation de conurbations et de mégalopoles géantes (mégalopole européenne).
- Organisation spatiale stricte : centre historique valorisé, CBD (La Défense), banlieues pavillonnaires, villes nouvelles et migrations pendulaires domicile-travail.

II. L'ORGANISATION ADMINISTRATIVE ET L'AMÉNAGEMENT DU TERRITOIRE IVOIRIEN :
1. Organisation administrative (Loi N°2014-451 du 5 août 2014) :
- La déconcentration : l'État central délègue des pouvoirs à des représentants nommés : 31 Régions (Préfet de région), 108 Départements (Préfet), 426 Sous-préfectures (Sous-préfet) et 8 722 Villages (Chefs de village).
- La décentralisation : transfert de compétences à des collectivités territoriales autonomes gérées par des élus : 31 Conseils Régionaux et 187 Communes (Maires).
- Les 2 Districts Autonomes : Abidjan et Yamoussoukro, dirigés par des Gouverneurs nommés.
2. L'aménagement du territoire :
- Objectif : corriger les disparités spatiales entre le Sud forestier favorisé et le Nord savanicole défavorisé.
- Les grandes opérations d'État : AVB (barrage hydroélectrique de Kossou en 1969), ARSO et création du port de San Pedro (inauguré en 1972) pour désenclaver le Sud-Ouest.
- Agro-industrie : SODESUCRE et CIDT au Nord, SODEPALM au Sud-Ouest, usines textiles à Bouaké, Dimbokro et Agboville.
- Décision politique : transfert de la capitale à Yamoussoukro en 1983.

III. LE PROCESSUS DE LA MONDIALISATION :
1. Facteurs : Révolution des transports (porte-conteneurs géants), essor des TIC (internet) formant le « village planétaire », accords de libre-échange sous l'égide de l'OMC et du FMI.
2. Acteurs : Firmes Multinationales (plus de 64 000 contrôlant 2/3 des échanges mondiaux), États souverains et blocs régionaux (UE, ALENA, CEDEAO).
3. Conséquences :
- Domination de la Triade (USA, UE, Asie orientale captant 85% des flux mondiaux).
- Délocalisations industrielles profitant aux Nouveaux Pays Industrialisés (Chine, Corée du Sud, Inde).
- Marginalisation économique criante de l'Afrique (moins de 3% du commerce mondial).`,
    definitions: [
      { term: 'Déconcentration', definition: 'Délégation de compétences administratives de l\'État central à des fonctionnaires nommés sur le territoire (Préfets, Sous-préfets).' },
      { term: 'Décentralisation', definition: 'Transfert de pouvoirs de gestion et de budgets de l\'État à des collectivités territoriales élues par les citoyens (Régions, Communes).' },
      { term: 'Triade', definition: 'Ensemble des trois pôles économiques dominant l\'économie mondiale : Amérique du Nord, Union Européenne et Asie de l\'Est.' },
      { term: 'Macrocéphalie urbaine', definition: 'Développement hypertrophié d\'une ville principale qui écrase le reste du réseau urbain national.' }
    ],
    propertiesAndRules: [
      { name: 'Différence déconcentration vs décentralisation', statement: 'Les préfets sont nommés par décret présidentiel (déconcentration) ; les maires et présidents de conseils régionaux sont élus au suffrage universel (décentralisation).' }
    ],
    formulas: [],
    stepByStepMethods: [
      { stepNumber: 1, title: 'Expliquer les enjeux de l\'aménagement du territoire en Côte d\'Ivoire', procedure: '1. Rappeler le déséquilibre Nord/Sud hérité de l\'économie de plantation, 2. Citer les actions de l\'ARSO (San Pedro) et de l\'AVB (Kossou), 3. Présenter le rôle de la décentralisation.', tip: 'Mentionner le barrage de Kossou et le port de San Pedro (1972).' }
    ],
    examples: [
      { statement: 'Pourquoi a-t-on créé le port de San Pedro en 1972 ?', solution: 'L\'ARSO a fait construire le port de San Pedro pour désenclaver l\'Ouest et le Sud-Ouest ivoiriens, évacuer le bois et les produits agricoles sans transiter par Abidjan et créer un second pôle économique.' }
    ],
    exercises: [
      {
        question: 'Distinguez la déconcentration de la décentralisation dans l\'administration ivoirienne.',
        correction: 'La déconcentration consiste pour l\'État à déléguer son autorité à des représentants nommés (Préfets, Sous-préfets) agissant au nom du gouvernement dans des circonscriptions territoriales. La décentralisation transfère la gestion d\'affaires locales à des collectivités autonomes dotées de personnalités morales et de budgets propres, dirigées par des conseils élus (Conseils régionaux, Mairies).'
      },
      {
        question: 'Qu\'est-ce que la Triade dans la mondialisation et quelle est la place de l\'Afrique ?',
        correction: 'La Triade est l\'ensemble des trois pôles majeurs de l\'économie mondiale (Amérique du Nord, Union Européenne, Asie orientale/Japon) qui concentrent plus de 80% des richesses, du commerce et des innovations. L\'Afrique subsaharienne y demeure marginalisée avec moins de 3% du commerce international, cantonnée à l\'exportation brute de matières premières.'
      }
    ],
    examTraps: [
      'Confondre déconcentration (délégation du pouvoir central à des préfets/sous-préfets nommés) et décentralisation (transfert de compétences à des élus locaux : maires, présidents de régions).',
      'Confondre macrocéphalie urbaine (hypertrophie d\'Abidjan concentrant 20% de la population et 80% de l\'industrie) avec un réseau urbain équilibré.',
      'Oublier les programmes d\'aménagement régionaux ivoiriens : ARSO (Sud-Ouest, San Pedro 1972) et AVB (Centre, Kossou 1969).'
    ],
    quickMemo: 'Urbanisation : PVD = croissance anarchique & macrocéphalie (Abidjan > 5M hab.) ; Pays développés = conurbations, mégalopoles, périurbanisation. Organisation CI : Déconcentration (Préfet/Sous-préfet) vs Décentralisation (Régions/Communes). Aménagement : ARSO (San Pedro 1972), AVB (Kossou 1969). Mondialisation : Triade motrice, FMN, libéralisation (OMC), marginalisation africaine (<3%).',
    keywords: ['urbanisation', 'macrocéphalie', 'Abidjan', 'déconcentration', 'décentralisation', 'aménagement du territoire', 'ARSO', 'AVB', 'mondialisation', 'Triade', 'Première']
  }
];
