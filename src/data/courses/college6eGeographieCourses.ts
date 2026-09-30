import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_6E_GEOGRAPHIE_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 6ÈME - GÉOGRAPHIE : THÈME 1 - LEÇON 1
  // ========================================================
  {
    id: 'geo-6e-geographie-et-son-objet',
    discipline: 'geographie',
    disciplineLabel: 'Géographie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Les bases de l\'étude de la géographie',
    lessonTitle: 'La géographie et son objet : Définition, branches, démarche scientifique et utilité pour l\'homme',
    objectifs: [
      'Donner l\'étymologie du mot géographie (du grec « Gê » = Terre et « Graphein » = dessin, écriture, description)',
      'Définir la géographie moderne comme la science qui décrit et explique les phénomènes physiques, biologiques et humains à la surface de la Terre et leurs interactions avec l\'homme',
      'Identifier et caractériser les 3 grandes branches de la géographie : la géographie physique (relief, climat, sol, hydrographie, végétation), la géographie humaine (population, démographie, habitat, migrations) et la géographie économique (agriculture, pêche, industrie, commerce, transport)',
      'Énumérer dans l\'ordre les 5 étapes de la démarche géographique : 1. L\'observation (directe sur le terrain ou indirecte sur cartes/photos), 2. La localisation (situer dans l\'espace avec des repères), 3. La description (mettre en relief les caractéristiques), 4. L\'explication (donner les causes, le pourquoi et le comment), 5. La comparaison (mettre en évidence similitudes et différences)',
      'Expliquer l\'utilité de la géographie dans la vie quotidienne et la formation citoyenne (ouverture d\'esprit, tolérance interculturelle, aménagement du territoire, protection de l\'environnement et solidarité des nations)'
    ],
    fullCourseContent: `1. Définition et Étymologie de la Géographie :
- Étymologie : Le terme géographie est formé à partir de deux mots grecs : « Gê » qui signifie « la Terre » et « Graphein » qui signifie « écrire, dessiner, décrire ».
- Sens étymologique : À l'origine, la géographie était simplement la description ou le dessin de la surface terrestre.
- Définition moderne : Aujourd'hui, la géographie est une science d'observation et d'explication. C'est la science qui décrit, analyse et explique la répartition des phénomènes physiques, biologiques et humains à la surface de la Terre, ainsi que les relations réciproques (interactions) qui s'établissent entre l'homme et son milieu de vie.

2. Les Trois Grandes Branches de la Géographie :
La géographie se subdivise en trois branches complémentaires :
- 1. La géographie physique :
  * Elle étudie les éléments naturels du milieu terrestre sans l'intervention de l'homme.
  * Ses domaines d'étude : Le relief (montagnes, plaines, plateaux), le climat (températures, pluies, vents), les sols, la végétation naturelle (forêts, savanes) et l'hydrographie (cours d'eau, lacs, mers, nappes phréatiques).
- 2. La géographie humaine :
  * Elle étudie la présence des hommes à la surface de la Terre et la façon dont ils occupent l'espace.
  * Ses domaines d'étude : La population, la démographie (natalité, mortalité, accroissement naturel), la structure de la population par âge et par sexe, les migrations (exode rural, immigration) et les formes d'habitat (villes, villages).
- 3. La géographie économique :
  * Elle étudie les activités de production, de transformation et d'échange développées par les hommes pour subvenir à leurs besoins.
  * Ses domaines d'étude : L'agriculture vivrière et d'exportation, l'élevage, la pêche, l'artisanat, l'exploitation minière et industrielle, le commerce et les voies de transport.

3. Les Cinq Étapes de la Démarche Géographique :
Pour étudier un espace de manière scientifique, le géographe suit une méthode rigoureuse en 5 étapes successives :
1. L'observation : Regarder directement un terrain (sortie d'étude) ou indirectement à travers des photographies, des images satellites ou des cartes.
2. La localisation : Situer avec précision le phénomène étudié dans l'espace à l'aide de repères géographiques (pays, région, coordonnées, points cardinaux).
3. La description : Énumérer et mettre en relief les particularités, les dimensions et les formes observables du paysage.
4. L'explication : Rechercher les causes des phénomènes observés, expliquer le pourquoi et le comment (pourquoi cette forêt s'étend-elle ici ? pourquoi cette région est-elle très peuplée ?).
5. La comparaison : Rapprocher le phénomène d'autres espaces pour identifier les points communs (similitudes) et les différences.

4. L'Utilité de la Géographie pour les Hommes :
La géographie n'est pas un simple catalogue de noms de capitales ou de paysages :
- Elle procure une meilleure connaissance du monde et instruit notre esprit.
- Elle développe l'esprit d'ouverture, la curiosité et la tolérance envers les coutumes et modes de vie des autres peuples de la planète.
- Elle prépare à la vie citoyenne et à la solidarité internationale en révélant les inégalités de développement et les besoins d'entraide entre pays riches et pays vulnérables.
- Elle est indispensable aux ingénieurs et décideurs pour réussir l'aménagement du territoire (construction de routes, ponts, barrages, parcs naturels) en respectant la nature.`,
    definitions: [
      {
        term: 'Géographie',
        definition: 'Science qui décrit et explique les phénomènes physiques, biologiques et humains à la surface de la terre et leurs relations mutuelles.'
      },
      {
        term: 'Géographie physique',
        definition: 'Branche de la géographie qui étudie les composantes naturelles de la terre (relief, climat, sols, cours d\'eau, végétation).'
      },
      {
        term: 'Géographie humaine',
        definition: 'Branche de la géographie consacrée à l\'étude des populations, de leur nombre, de leur répartition et de leurs modes de vie.'
      },
      {
        term: 'Géographie économique',
        definition: 'Branche qui analyse les activités productives de l\'homme (agriculture, industrie, commerce, transports) dans l\'espace.'
      },
      {
        term: 'Localisation',
        definition: 'Action de situer avec exactitude un lieu, un relief ou un fait à la surface de la terre par rapport à des repères connus.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Les 5 étapes de la méthode géographique',
        statement: '1. Observation -> 2. Localisation -> 3. Description -> 4. Explication -> 5. Comparaison.'
      },
      {
        name: 'Les 3 branches de la géographie',
        statement: 'Géographie physique (nature) + Géographie humaine (population) + Géographie économique (activités et richesses).'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Appliquer la démarche géographique sur un paysage local',
        procedure: '1. Observer attentivement le paysage (ex: la vallée du Bandama). 2. Localiser la zone sur une carte de la Côte d\'Ivoire (Centre du pays). 3. Décrire ce que l\'on voit (cours d\'eau sinueux, arbres au bord de l\'eau, cultures d\'igname). 4. Expliquer pourquoi ces cultures sont là (présence d\'eau pour irriguer et sol meuble). 5. Comparer cette vallée avec une zone sèche du Nord (Boundiali).',
        tip: 'Toujours associer l\'observation à l\'explication du "pourquoi".'
      }
    ],
    examples: [
      {
        statement: 'Un élève affirme que la géographie ne sert qu\'à regarder de belles images. Que lui répondre ?',
        solution: 'La géographie va bien au-delà des images : elle explique scientifiquement les causes des phénomènes terrestres (climats, sécheresses, inondations), apprend à gérer les ressources naturelles et aide à mieux comprendre et tolérer les autres cultures du globe.'
      }
    ],
    exercises: [
      {
        question: 'Quelle est l\'origine étymologique du mot géographie ?',
        correction: 'Le mot vient des racines grecques « Gê » (la Terre) et « Graphein » (dessin, écriture, description).'
      },
      {
        question: 'Classe ces éléments selon la branche de géographie concernée : Le climat équatorial, l\'usine de transformation de café-cacao, la densité de population d\'Abidjan, le Mont Nimba, le commerce de gros.',
        correction: '- Géographie physique : Le climat équatorial, le Mont Nimba.\n- Géographie humaine : La densité de population d\'Abidjan.\n- Géographie économique : L\'usine de café-cacao, le commerce de gros.'
      }
    ],
    evaluationSituation: {
      context: 'Dans la cour du lycée moderne 1 d\'Abobo, deux élèves de 6ème se disputent. Dadié affirme que la géographie est inutile et fait perdre du temps. Yassa réplique qu\'au contraire, c\'est une discipline fondamentale pour tout citoyen du XXIe siècle. Ils viennent te trouver pour les départager.',
      instructions: [
        '1. Donne la définition complète de la géographie.',
        '2. Nomme ses trois branches principales et les cinq étapes de sa démarche d\'investigation.',
        '3. Rédige un court paragraphe expliquant à Dadié l\'utilité indispensable de la géographie pour réussir ses études et sa vie en société.'
      ],
      solutionGuide: '1. La géographie est la science qui décrit et explique les phénomènes physiques, biologiques et humains à la surface de la terre ainsi que les interactions entre l\'homme et son milieu. 2. Branches : physique, humaine, économique. 5 étapes : observation, localisation, description, explication, comparaison. 3. Utilité : La géographie apprend à connaître le milieu où l\'on vit pour le protéger des pollutions. Elle développe l\'esprit d\'observation, enseigne la tolérance envers les autres peuples du monde et permet de comprendre les grands enjeux planétaires (changement climatique, gestion de l\'eau, aménagement des villes).'
    },
    examTraps: [
      'Confondre géographie humaine (population, naissances) et géographie économique (agriculture, commerce, usines).',
      'Oublier l\'étape de l\'explication dans la démarche (la géographie ne se contente pas de décrire, elle cherche la cause).',
      'Penser que la géographie physique étudie les machines ou les usines.'
    ],
    quickMemo: 'Gê (Terre) + Graphein (dessin) | 3 branches : Physique (relief, climat, eau) | Humaine (population) | Économique (agriculture, commerce) | Démarche en 5 étapes : Observation -> Localisation -> Description -> Explication -> Comparaison.',
    keywords: ['géographie et son objet', 'gê', 'graphein', 'géographie physique', 'géographie humaine', 'géographie économique', 'démarche géographique', '6e']
  },

  // ========================================================
  // 6ÈME - GÉOGRAPHIE : THÈME 1 - LEÇON 2
  // ========================================================
  {
    id: 'geo-6e-le-relief',
    discipline: 'geographie',
    disciplineLabel: 'Géographie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Les bases de l\'étude de la géographie',
    lessonTitle: 'Le relief : Définition, formes majeures (montagnes, plateaux, plaines), formes élémentaires et éléments du relief',
    objectifs: [
      'Définir le relief (ensemble des bosses, creux, inégalités et formes variés qui modèlent la surface de la terre et le fond des océans)',
      'Identifier et caractériser les 3 grands ensembles de relief : les montagnes (relief très élevé > 900 m à pentes fortes et raides), les plateaux (étendues plates ou ondulées où les cours d\'eau coulent au fond de vallées encaissées), les plaines (surfaces presque planes de 0 à 50/200 m où les rivières coulent à fleur de sol)',
      'Définir les formes élémentaires du relief : la colline (petite élévation à sommet arrondi), la butte (petite élévation à sommet plat), la vallée (creux façonné par un cours d\'eau), le talus (paroi en pente reliant deux surfaces d\'altitudes différentes), l\'interfluve (espace compris entre deux vallées voisines), la cuvette (dépression fermée vers laquelle convergent les pentes)',
      'Définir et calculer les 3 éléments de mesure du relief : l\'altitude (hauteur verticale d\'un point par rapport au niveau zéro de la mer, notée en mètres), la pente (degré d\'inclinaison d\'un terrain exprimé en degrés ou %), la dénivellation (différence d\'altitude entre deux points, D = Alt_B - Alt_A)',
      'Reconnaître et schématiser ces formes de relief sur un profil topographique'
    ],
    fullCourseContent: `1. Qu'est-ce que le Relief ?
- Définition : Le relief désigne l'ensemble des inégalités, des aspérités, des élévations et des dépressions qui modèlent la surface de la Terre émergée ainsi que le fond des océans.
- La Terre n'est pas plate : elle alterne des zones très hautes, des terrains plats et de profonds creux.

2. Les Trois Grands Ensembles de Relief :
À l'échelle du globe terrestre, on distingue trois grandes catégories de relief :
- 1. Les montagnes :
  * Ce sont les reliefs les plus élevés de la planète. L'altitude dépasse généralement 900 mètres.
  * Caractéristiques : Versants à fortes pentes très raides, sommets pointus ou crêtes aiguës, séparés par des vallées très profondes et encaissées.
  * Exemple : Le Mont Nimba (1 752 m) et le Mont Tonkpi (1 189 m) dans l'Ouest de la Côte d'Ivoire ; la chaîne de l'Himalaya avec l'Everest (8 848 m) dans le monde.
- 2. Les plateaux :
  * Ce sont de vastes surfaces planes ou légèrement ondulées d'altitude moyenne (souvent entre 200 et 500 mètres).
  * Caractéristique fondamentale : Les cours d'eau y ont creusé de véritables vallées encaissées. Les rivières ne coulent pas à fleur de sol mais en contrebas.
  * Exemple : Les plateaux du Centre et du Nord ivoirien (autour de Bouaké et Korhogo).
- 3. Les plaines :
  * Ce sont de vastes étendues presque parfaitement planes et de basse altitude (généralement entre 0 et 50 mètres au-dessus du niveau de la mer).
  * Caractéristique fondamentale : Les cours d'eau y coulent à fleur de sol, sans creuser de vallées profondes (risques fréquents d'inondation en crue).
  * Exemple : La plaine côtière du Sud de la Côte d'Ivoire (autour d'Abidjan, San-Pédro, Grand-Bassam).

3. Les Formes Élémentaires du Relief :
Ce sont des reliefs de dimension plus réduite qui composent le paysage :
- La colline : Petite élévation de terrain aux pentes douces avec un sommet arrondi.
- La butte : Petite élévation de terrain avec un sommet plat ou tabulaire et des pentes plus raides.
- La vallée : Creux allongé façonné au fil du temps par le ruissellement de l'eau d'une rivière ou d'un fleuve entre deux versants.
- Le talus : Paroi à pente plus ou moins abrupte qui relie deux surfaces planes situées à des altitudes différentes.
- L'interfluve : Bande de terre ou crête comprise entre deux vallées voisines.
- La cuvette : Dépression circulaire ou ovale fermée où les pentes convergent de tous côtés vers le centre.

4. Les Éléments de Mesure du Relief :
Pour décrire et quantifier un relief avec précision, le géographe mesure :
- 1. L'altitude : C'est la distance verticale qui sépare un point du relief du niveau moyen de la mer (choisi conventionnellement comme le niveau zéro : 0 mètre). Elle se mesure en mètres (m).
- 2. La pente : C'est le degré d'inclinaison d'un versant de terrain par rapport à l'horizontale. Elle s'exprime en degrés (°) ou en pourcentage (%). Plus la pente est forte, plus la montée est raide.
- 3. La dénivellation : C'est la différence de hauteur (d'altitude) existant entre deux points distincts du relief :
  $$\\text{Dénivellation} = \\text{Altitude du point B (sommet)} - \\text{Altitude du point A (base)}$$
  Exemple : Si la base d'une colline A est à 50 m d'altitude et son sommet B à 80 m, la dénivellation est de : $80 - 50 = 30\\text{ m}$.`,
    definitions: [
      {
        term: 'Relief',
        definition: 'Ensemble des inégalités et des formes variées modelant la surface de la terre et les fonds océaniques.'
      },
      {
        term: 'Montagne',
        definition: 'Relief de haute altitude (dépassant 900 m) caractérisé par de fortes pentes raides et des vallées profondes.'
      },
      {
        term: 'Plateau',
        definition: 'Surface plane ou ondulée d\'altitude moyenne où les cours d\'eau coulent dans des vallées encaissées.'
      },
      {
        term: 'Plaine',
        definition: 'Surface plane de basse altitude où les cours d\'eau coulent à fleur de terre sans creuser de vallées.'
      },
      {
        term: 'Altitude',
        definition: 'Élévation verticale d\'un point par rapport au niveau zéro de la mer (exprimée en mètres).'
      },
      {
        term: 'Dénivellation',
        definition: 'Différence mathématique d\'altitude entre deux points situés sur un même relief.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Distinction clé Plaine vs Plateau',
        statement: 'Dans une plaine, les rivières coulent à fleur de sol (pas de vallée creusée) ; sur un plateau, les rivières ont creusé des vallées encaissées.'
      },
      {
        name: 'Niveau de référence de l\'altitude',
        statement: 'Le niveau moyen de la mer correspond universellement à l\'altitude 0 mètre.'
      }
    ],
    formulas: [
      {
        name: 'Calcul de la dénivellation',
        formula: 'D = \\text{Altitude}_B - \\text{Altitude}_A',
        explanation: 'Différence entre le point le plus haut et le point le plus bas.',
        unitOrCondition: 'Exprimée en mètres (m).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer la dénivellation d\'une pente',
        procedure: '1. Repérer l\'altitude du sommet B sur la courbe de niveau ou le document. 2. Repérer l\'altitude de la base A. 3. Effectuer la soustraction : D = Alt_B - Alt_A. 4. Donner le résultat en mètres.',
        tip: 'La dénivellation est toujours une valeur positive lorsqu\'on mesure une montée.'
      }
    ],
    examples: [
      {
        statement: 'Un marcheur part du niveau de la mer (0 m) et gravit le Mont Tonkpi à Man jusqu\'au sommet à 1 189 m. Quelle est la dénivellation gravie ?',
        solution: 'D = 1 189 m - 0 m = 1 189 mètres. C\'est une montagne remarquable de la région des 18 Montagnes en Côte d\'Ivoire.'
      }
    ],
    exercises: [
      {
        question: 'Quelle est la différence fondamentale entre une colline et une butte ?',
        correction: 'La colline présente un sommet arrondi avec des pentes douces, tandis que la butte possède un sommet aplati (tabulaire) et des versants souvent plus raides.'
      },
      {
        question: 'Un promeneur se trouve à 140 m d\'altitude au bord d\'un plateau et descend au fond de la vallée encaissée à 60 m. Calcule la dénivellation de cette descente.',
        correction: 'Dénivellation = 140 m - 60 m = 80 mètres.'
      }
    ],
    evaluationSituation: {
      context: 'M. Guéhi, chauffeur originaire de Man, conduit un groupe de touristes d\'Abidjan vers l\'Ouest montagnard de la Côte d\'Ivoire. Au départ d\'Abidjan, la route est parfaitement plate le long de la lagune. Arrivé vers Yamoussoukro et Bouaké, le paysage devient étagé avec des rivières coulant au fond de tranchées. Enfin, à Man, de gigantesques massifs rocheux aux pentes abruptes dominent le ciel. Les touristes lui demandent de nommer ces paysages.',
      instructions: [
        '1. Identifie les trois grands ensembles de relief traversés par M. Guéhi d\'Abidjan à Man.',
        '2. Définis chacun d\'eux en indiquant le critère qui permet de les distinguer.',
        '3. Définis l\'altitude et la dénivellation pour ces voyageurs.'
      ],
      solutionGuide: '1. D\'Abidjan à Man, le circuit traverse : la plaine côtière du Sud, les plateaux du Centre, puis les montagnes de l\'Ouest. 2. Définitions : Plaine = surface basse et plane où les cours d\'eau coulent à fleur de terre ; Plateau = surface plane d\'altitude moyenne avec des rivières coulant dans des vallées encaissées ; Montagne = relief très élevé (> 900 m) avec des pentes raides et des versants escarpés. 3. L\'altitude est la hauteur mesurée par rapport au niveau de la mer (0 m). La dénivellation est la différence de hauteur entre le bas d\'une pente et son sommet.'
    },
    examTraps: [
      'Confondre plaine et plateau (le piège classique porte sur les cours d\'eau : encaissés sur le plateau, à fleur de terre dans la plaine).',
      'Donner l\'unité de la pente en mètres (la pente s\'exprime en degrés ou en pourcentage, alors que l\'altitude s\'exprime en mètres).',
      'Dire qu\'une colline est plus élevée qu\'une montagne.'
    ],
    quickMemo: 'Relief = inégalités de la surface terrestre | 3 grands ensembles : Montagnes (> 900 m, pentes raides) | Plateaux (altitude moyenne, rivières encaissées) | Plaines (basse altitude, rivières à fleur de terre) | Éléments : Altitude (par rapport à la mer), Pente (° ou %), Dénivellation (Alt_B - Alt_A).',
    keywords: ['relief', 'montagne', 'plateau', 'plaine', 'colline', 'butte', 'vallée', 'altitude', 'dénivellation', 'pente', '6e']
  },

  // ========================================================
  // 6ÈME - GÉOGRAPHIE : THÈME 1 - LEÇON 3
  // ========================================================
  {
    id: 'geo-6e-le-climat',
    discipline: 'geographie',
    disciplineLabel: 'Géographie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Les bases de l\'étude de la géographie',
    lessonTitle: 'Le climat : Composantes, instruments météorologiques, calculs climatologiques et 3 grandes zones mondiales',
    objectifs: [
      'Définir le climat comme l\'état moyen de l\'atmosphère en un lieu donné, déterminé par l\'observation régulière des conditions météo sur une longue durée (au moins 30 ans)',
      'Identifier les composantes fondamentales du climat : la température, les précipitations et le vent',
      'Associer chaque grandeur à son instrument météorologique de mesure : thermomètre pour la température (°C), pluviomètre pour les précipitations (mm), anémomètre pour la vitesse du vent (m/s ou km/h), girouette pour la direction du vent, baromètre pour la pression atmosphérique',
      'Calculer l\'amplitude thermique annuelle (A = T_max - T_min) et le total pluviométrique annuel (somme des 12 mois en mm)',
      'Construire et analyser un diagramme ombrothermique (courbe des températures en rouge et histogramme des précipitations en bleu selon la règle P = 2T)',
      'Localiser et caractériser les trois grandes zones climatiques mondiales : la zone chaude ou intertropicale (entre tropique du Cancer et tropique du Capricorne), les zones tempérées (entre tropiques et cercles polaires), les zones froides ou polaires (entre cercles polaires et les pôles)'
    ],
    fullCourseContent: `1. Qu'est-ce que le Climat ?
- Définition : Le climat est l'état moyen de l'atmosphère dans une région donnée de la Terre, observé et mesuré sur une longue période de temps (au moins 30 années d'observations météorologiques régulières).
- Différence entre météo et climat :
  * Le temps météorologique (la météo) est l'état passager de l'atmosphère à un moment précis et en un lieu donné (ex: « il pleut ce matin à Abidjan »).
  * Le climat est l'ensemble des saisons et des types de temps qui se succèdent habituellement et fidèlement année après année (ex: « le Sud de la Côte d'Ivoire a un climat subéquatorial chaud et pluvieux »).

2. Les Éléments du Climat et Leurs Instruments de Mesure :
Dans une station météorologique, des appareils mesurent les composantes atmosphériques :
- 1. La température :
  * C'est la quantité de chaleur contenue dans l'air ambiant. Elle s'exprime en degré Celsius (°C).
  * Instrument : Le thermomètre (contenant du mercure ou de l'alcool coloré placé sous abri météorologique à 1,5 m du sol).
- 2. Les précipitations :
  * C'est toute l'eau atmosphérique qui tombe des nuages sur la surface de la Terre.
  * Formes de précipitations : La pluie (la plus fréquente en Afrique), la neige (cristaux de glace dans les zones tempérées et froides), la grêle (billes de glace solides) et la rosée (vapeur d'eau nocturne condensée sur les herbes).
  * Instrument : Le pluviomètre (composé d'un entonnoir récepteur et d'une éprouvette graduée mesurant la hauteur d'eau en millimètres, notée mm ; 1 mm d'eau équivaut à 1 litre d'eau tombé sur un mètre carré).
- 3. Le vent :
  * C'est le déplacement horizontal d'une masse d'air depuis une zone de haute pression vers une zone de basse pression.
  * Instruments : L'anémomètre (à coupelles tournantes qui mesure la vitesse du vent en km/h ou m/s) et la girouette (qui indique la direction d'où vient le vent : Nord, Sud, Est, Ouest).
  * Vents clés en Côte d'Ivoire :
    - La mousson : Vent chaud et très humide venant de l'Océan Atlantique (Sud-Ouest), apportant les pluies bienfaitrices.
    - L'harmattan : Vent sec, chaud et poussiéreux soufflant du désert du Sahara (Nord-Est) entre décembre et février.
- 4. La pression atmosphérique :
  * Poids exercé par la colonne d'air sur la surface terrestre. Instrument : Le baromètre (mesuré en hectopascals hPa ou millibars).

3. Les Calculs Climatologiques Essentiels :
- L'amplitude thermique annuelle (A) :
  C'est la différence entre la température du mois le plus chaud et celle du mois le plus froid de l'année :
  $$A = T_{\\text{max}} - T_{\\text{min}}$$
- Le total pluviométrique annuel (P_total) :
  C'est l'addition des hauteurs d'eau de pluie recueillies pendant les 12 mois de l'année :
  $$P_{\\text{annuel}} = P_{\\text{janv}} + P_{\\text{fév}} + \\dots + P_{\\text{déc}}$$
- Le diagramme ombrothermique (courbe de Gaussen) :
  Graphique combiné associant sur un même document :
  * En abscisse : Les 12 mois de l'année (J, F, M, A, M, J, J, A, S, O, N, D).
  * En ordonnée gauche : Les précipitations en millimètres ($P$).
  * En ordonnée droite : Les températures en degrés Celsius ($T$).
  * Échelle de Gaussen : $P = 2T$ (par exemple, en face de $20^\\circ\\text{C}$ on place $40\\text{ mm}$). Si la colonne de pluie $P$ dépasse la courbe de température $2T$, le mois est dit humide ; si elle passe en dessous, le mois est sec.

4. Les Trois Grandes Zones Climatiques du Globe :
En raison de la forme sphérique de la Terre et de l'inclinaison des rayons solaires, le monde est divisé en trois grandes zones :
- 1. La zone chaude (ou zone intertropicale) :
  * Localisation : Située entre le Tropique du Cancer ($23^\\circ 27'\\text{ N}$) et le Tropique du Capricorne ($23^\\circ 27'\\text{ S}$), traversée au milieu par l'Équateur.
  * Caractéristiques : Températures élevées toute l'année ($> 20^\\circ\\text{C}$), forte luminosité. Deux saisons dominantes : saison des pluies et saison sèche.
  * Types de climats : Climat équatorial, climat tropical humide ou sec, climat désertique (Sahara). Toute la Côte d'Ivoire est située dans la zone chaude.
- 2. Les zones tempérées (2 zones, une dans chaque hémisphère) :
  * Localisation : Entre les tropiques et les cercles polaires (Arctique au Nord, Antarctique au Sud).
  * Caractéristiques : Alternance très nette de quatre saisons (printemps, été, automne, hiver).
  * Types de climats : Climat océanique, climat continental, climat méditerranéen.
- 3. Les zones froides ou polaires (2 zones aux extrémités) :
  * Localisation : Entre les cercles polaires et les pôles terrestres (Pôle Nord et Pôle Sud).
  * Caractéristiques : Températures négatives et glaces permanentes pendant la majeure partie de l'année. Deux saisons extrêmes : un hiver glacial de longue nuit et un été très court.`,
    definitions: [
      {
        term: 'Climat',
        definition: 'Ensemble des conditions atmosphériques moyennes (température, pluies, vents) propres à une région observées sur au moins 30 ans.'
      },
      {
        term: 'Amplitude thermique',
        definition: 'Différence numérique entre la température la plus élevée (mois le plus chaud) et la température la plus basse (mois le plus froid).'
      },
      {
        term: 'Pluviomètre',
        definition: 'Instrument météorologique servant à mesurer la quantité d\'eau de pluie tombée au mètre carré (en mm).'
      },
      {
        term: 'Anémomètre',
        definition: 'Instrument météorologique servant à mesurer la vitesse du vent.'
      },
      {
        term: 'Zone intertropicale',
        definition: 'Zone chaude de la Terre comprise entre le tropique du Cancer au Nord et le tropique du Capricorne au Sud.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Échelle ombrothermique de Gaussen',
        statement: 'Sur un diagramme climatique, l\'échelle est fixée selon la convention P = 2T (un mois est sec lorsque P < 2T).'
      },
      {
        name: 'Les deux vents dominants en Côte d\'Ivoire',
        statement: 'La Mousson (humide et pluvieuse, venant du Sud-Ouest océanique) et l\'Harmattan (sec et poussiéreux, venant du Nord-Est désertique).'
      }
    ],
    formulas: [
      {
        name: 'Amplitude thermique annuelle',
        formula: 'A = T_{\\max} - T_{\\min}',
        explanation: 'Différence entre le mois le plus chaud et le mois le moins chaud.',
        unitOrCondition: 'En degrés Celsius (°C).'
      },
      {
        name: 'Hauteur d\'eau pluviométrique',
        formula: '1\\text{ mm de pluie} = 1\\text{ litre d\'eau / m}^2',
        explanation: 'Équivalence physique de la mesure au pluviomètre.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer l\'amplitude thermique à partir d\'un tableau',
        procedure: '1. Repérer dans la ligne des températures la valeur maximale T_max. 2. Repérer la valeur minimale T_min. 3. Poser la soustraction : A = T_max - T_min. 4. Écrire le résultat en °C.',
        tip: 'Vérifier attentivement les 12 mois pour ne pas confondre le mois le plus chaud et le mois le plus sec.'
      }
    ],
    examples: [
      {
        statement: 'À Abidjan, la température moyenne la plus chaude est relevée en février (29 °C) et la moins chaude en août (24,7 °C). Calcule l\'amplitude thermique.',
        solution: 'A = 29 °C - 24,7 °C = 4,3 °C. Cette très faible amplitude thermique est caractéristique du climat chaud subéquatorial.'
      }
    ],
    exercises: [
      {
        question: 'Associe chaque appareil météorologique à son rôle :\n1. Baromètre | 2. Anémomètre | 3. Pluviomètre | 4. Thermomètre.\nRôles : a) Vitesse du vent | b) Pression de l\'air | c) Température | d) Quantité de pluie.',
        correction: '1 -> b (Baromètre = pression) | 2 -> a (Anémomètre = vitesse du vent) | 3 -> d (Pluviomètre = pluie) | 4 -> c (Thermomètre = température).'
      },
      {
        question: 'Dans quelle zone climatique se situe la Côte d\'Ivoire et quels sont les deux grands types de vents qui la traversent ?',
        correction: 'La Côte d\'Ivoire se situe entièrement dans la zone chaude (zone intertropicale). Les deux vents majeurs sont la mousson (pluvieuse) et l\'harmattan (sec).'
      }
    ],
    evaluationSituation: {
      context: 'Pendant les congés de Noël, le grand-père planteur de Konan regarde le journal télévisé. Le météorologue annonce qu\'au Canada, les températures descendent à -30 °C sous de fortes tempêtes de neige, alors qu\'à Bingerville en Côte d\'Ivoire il fait 30 °C avec un soleil radieux. Le grand-père ne comprend pas pourquoi le froid n\'arrive jamais chez eux.',
      instructions: [
        '1. Nomme les deux zones climatiques mondiales où se trouvent respectivement la Côte d\'Ivoire et le Canada.',
        '2. Nomme l\'instrument qui a permis d\'enregistrer ces températures.',
        '3. Explique au grand-père pourquoi il fait chaud toute l\'année en Côte d\'Ivoire alors que le Canada subit un froid polaire.'
      ],
      solutionGuide: '1. La Côte d\'Ivoire est dans la zone chaude (zone intertropicale), tandis que le Canada se situe dans la zone tempérée et la zone froide polaire. 2. L\'instrument de mesure est le thermomètre. 3. Explication : La Terre étant ronde, les rayons du Soleil frappent la zone intertropicale (proche de l\'équateur) de manière presque verticale et directe toute l\'année, y maintenant une chaleur constante. En revanche, au Canada (proche du pôle Nord), les rayons solaires arrivent très inclinés et se dispersent sur une grande surface, fournissant très peu de chaleur et provoquant des hivers extrêmement froids avec de la neige.'
    },
    examTraps: [
      'Confondre météo (temps du jour) et climat (moyenne sur plusieurs décennies).',
      'Confondre anémomètre (vitesse) et girouette (direction du vent).',
      'Penser qu\'il y a 4 saisons partout dans le monde (dans la zone chaude, il y a principalement 2 saisons : saison sèche et saison des pluies).'
    ],
    quickMemo: 'Climat = état moyen de l\'atmosphère sur 30 ans | Éléments : Température (thermomètre °C), Pluie (pluviomètre mm), Vent (anémomètre km/h), Pression (baromètre hPa) | A = T_max - T_min | 3 zones : Chaude (intertropicale), Tempérées (4 saisons), Froides (pôles).',
    keywords: ['climat', 'température', 'précipitations', 'vent', 'thermomètre', 'pluviomètre', 'anémomètre', 'amplitude thermique', 'zone chaude', '6e']
  },

  // ========================================================
  // 6ÈME - GÉOGRAPHIE : THÈME 1 - LEÇON 4
  // ========================================================
  {
    id: 'geo-6e-sol-climat-vegetation',
    discipline: 'geographie',
    disciplineLabel: 'Géographie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Les bases de l\'étude de la géographie',
    lessonTitle: 'L\'interrelation entre le sol, le climat et la végétation : Types de milieux en Côte d\'Ivoire et équilibre écologique',
    objectifs: [
      'Définir le sol (couche superficielle meuble de la terre riche en matière organique/humus où s\'enracinent les plantes) et la végétation (ensemble des formations végétales d\'une contrée)',
      'Identifier et caractériser les 3 grands types de sols en Côte d\'Ivoire : sols ferrallitiques (épais, fertiles, rouges au Sud et à l\'Ouest), sols ferrugineux (moins profonds, grisâtres au Centre et au Nord), sols hydromorphes (gorgés d\'eau dans les bas-fonds et le littoral)',
      'Identifier et localiser les deux grandes formations végétales ivoiriennes : la forêt (forêt dense au Sud et Ouest, forêt claire au Centre) et la savane (savane arbustive au Centre, savane herbeuse au Nord)',
      'Mettre en relation chaque milieu naturel avec ses cultures phares : café, cacao, palmier à huile, hévéa sur sols ferrallitiques sous climat attiéen humide ; coton, anacarde, maïs, mangue, mil sur sols ferrugineux sous climat soudanais sec',
      'Expliquer l\'interdépendance réciproque entre sol, climat et végétation (le climat façonne le sol et la flore ; la végétation attire la pluie par évapotranspiration et protège le sol contre l\'érosion)',
      'Analyser les menaces pesant sur cet équilibre : déforestation abusive, appauvrissement des sols et solutions de reboisement'
    ],
    fullCourseContent: `1. Définition du Sol et de la Végétation :
- Le sol : C'est la couche meuble superficielle de la croûte terrestre résultant de l'altération de la roche-mère sous l'effet de l'eau et de la décomposition des débris végétaux et animaux (humus). C'est le support nourricier de la vie végétale.
- La végétation : C'est l'ensemble des plantes, arbres, arbustes, herbes et lianes qui poussent naturellement ou sont cultivés dans une région donnée.

2. Les Types de Végétations en Côte d'Ivoire :
Le paysage ivoirien se divise en deux grands domaines biogéographiques :
- 1. Le domaine forestier (au Sud et à l'Ouest) :
  * La forêt dense (ou ombrophile) : Forêt sempervirente (toujours verte) aux arbres géants atteignant 40 à 50 mètres de haut (iroko, samba, acajou), riche en lianes et épiphytes.
  * La forêt claire (ou mésophile) : Forêt semi-décidue aux arbres moins serrés se dénudant en saison sèche (forêt de transition au Centre).
- 2. Le domaine des savanes (au Centre et au Nord) :
  * La savane arbustive et arborée (au Centre, région des Baoulé) : Mosaïque de bouquets d'arbres, rôniers et hautes herbes.
  * La savane herbeuse (au Nord soudanais) : Immense tapis d'herbes graminées dominé par quelques arbres résistants à la sécheresse (baobabs, karités, nérés).

3. Les Types de Sols et Leurs Aptitudes Agricoles :
- Les sols ferrallitiques (au Sud et à l'Ouest) :
  * Caractéristiques : Sols très profonds, de couleur rougeâtre ou ocre (riches en oxydes de fer et d'aluminium), riches en humus en surface grâce à la litière forestière.
  * Aptitude agricole : Très fertiles pour les grandes cultures d'exportation pérennes : caféier, cacaoyer, palmier à huile, hévéa, bananier, cocotier.
- Les sols ferrugineux (au Centre et au Nord) :
  * Caractéristiques : Sols moins épais, de couleur grise ou brune, souvent durcis en carapace latéritique, plus pauvres en matière organique.
  * Aptitude agricole : Adaptés aux cultures vivrières et industrielles de savane : coton, anacarde (noix de cajou), mangue, maïs, arachide, igname, mil, sorgho, canne à sucre.
- Les sols hydromorphes (sur le cordon littoral lagunaire et les bas-fonds) :
  * Caractéristiques : Sols gorgés d'eau en permanence, bleuâtres ou grisâtres, très riches en matières organiques mais souvent asphyxiants.
  * Aptitude agricole : Idéaux pour la riziculture irriguée, le maraîchage et la pisciculture.

4. La Relation d'Interdépendance Écologique :
Il existe une corrélation étroite et indissociable entre ces trois composantes naturelles :
- Le climat détermine la végétation et le sol :
  * Un climat chaud et très humide (climat attiéen) favorise la décomposition rapide des roches et produit un sol ferrallitique épais qui nourrit une forêt dense et luxuriante.
  * Un climat sec à longue saison sèche (climat soudanais) donne un sol ferrugineux moins humifère où ne peut prospérer qu'une végétation de savane herbeuse.
- La végétation protège le sol et nourrit le climat :
  * Les racines des grands arbres retiennent la terre et empêchent les pluies torrentielles d'arracher la couche fertile par l'érosion.
  * La forêt renvoie d'énormes quantités de vapeur d'eau dans l'atmosphère par transpiration foliaire, ce qui entretient la formation de nuages et attire de nouvelles pluies.
- Les conséquences de l'action humaine :
  * Si l'homme abat anarchiquement la forêt (déforestation), le sol nu est directement brûlé par le soleil et lessivé par les pluies (érosion). Il devient stérile, le climat local s'assèche et la région s'achemine vers la désertification.`,
    definitions: [
      {
        term: 'Sol',
        definition: 'Couche meuble supérieure de la croûte terrestre composée de minéraux et d\'humus où se développent les racines végétales.'
      },
      {
        term: 'Humus',
        definition: 'Matière organique noirâtre résultant de la décomposition des feuilles et débris végétaux qui fertilise le sol.'
      },
      {
        term: 'Sol ferrallitique',
        definition: 'Sol tropical profond et rougeâtre riche en fer, typique des régions forestières humides de Côte d\'Ivoire.'
      },
      {
        term: 'Savane',
        definition: 'Formation végétale des régions tropicales sèches constituée principalement de hautes herbes parsemées d\'arbres isolés.'
      },
      {
        term: 'Érosion du sol',
        definition: 'Dégradation et décapage de la couche arable superficielle de la terre sous l\'action combinée de l\'eau et du vent.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Trilogie géographique ivoirienne',
        statement: 'Climat humide (Sud) <-> Sol ferrallitique <-> Forêt dense (Cacao/Café) VS Climat sec (Nord) <-> Sol ferrugineux <-> Savane (Coton/Anacarde).'
      },
      {
        name: 'Rôle protecteur du couvert végétal',
        statement: 'La destruction du couvert forestier entraîne inévitablement l\'érosion des sols, la baisse des pluies et la dégradation du climat.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier les caractéristiques d\'une région naturelle ivoirienne',
        procedure: '1. Repérer la zone géographique (Sud, Centre ou Nord). 2. Déduire le climat dominant (attiéen, baouléen ou soudanais). 3. Identifier le sol correspondant (ferrallitique ou ferrugineux). 4. Préciser la végétation naturelle (forêt dense ou savane) et les cultures associées.',
        tip: 'Le mot "ferrallitique" évoque la forêt et le rouge ; "ferrugineux" évoque la savane et le gris.'
      }
    ],
    examples: [
      {
        statement: 'Pourquoi la cacaoculture ne se développe-t-elle pas dans le grand Nord de la Côte d\'Ivoire à Korhogo ou Ferké ?',
        solution: 'Le cacaoyer a besoin d\'un climat très humide avec des pluies abondantes et régulières toute l\'année ainsi que d\'un sol ferrallitique épais et meuble. Le climat du Nord est un climat tropical sec marqué par l\'harmattan avec des sols ferrugineux moins propices à cet arbre fragile.'
      }
    ],
    exercises: [
      {
        question: 'Relie chaque zone de Côte d\'Ivoire à son type de végétation et à son sol :\n1. Sud | 2. Centre | 3. Nord.\nÉléments : a) Savane herbeuse / sol ferrugineux | b) Forêt dense / sol ferrallitique | c) Savane arbustive / sol ferrugineux.',
        correction: '1 -> b (Sud : forêt dense / sol ferrallitique) | 2 -> c (Centre : savane arbustive / sol ferrugineux) | 3 -> a (Nord : savane herbeuse / sol ferrugineux).'
      },
      {
        question: 'Cite deux dangers environnementaux graves causés par la déforestation intensive en Côte d\'Ivoire.',
        correction: '1. L\'érosion et l\'appauvrissement irréversible des sols agricoles.\n2. La perturbation du cycle des pluies et l\'avancée de la sécheresse.'
      }
    ],
    evaluationSituation: {
      context: 'Soro, jeune élève de CM2 né à Abidjan, se rend pour la première fois chez ses grands-parents à Korhogo. Durant le voyage en car, il remarque avec étonnement que les immenses forêts d\'arbres géants d\'Abidjan et Agboville cèdent progressivement la place à des bouquets d\'arbrisseaux à Yamoussoukro, puis à d\'immenses prairies d\'herbes jaunes parsemées de baobabs à Bouaké et Katiola. À son retour, il te demande de lui expliquer ce changement de paysage.',
      instructions: [
        '1. Nomme les zones climatiques et les types de végétations traversés par Soro du Sud au Nord.',
        '2. Précise le type de sol caractéristique de chaque étape.',
        '3. Rédige une explication scientifique montrant à Soro comment le climat façonne la végétation et la qualité des sols le long de ce trajet.'
      ],
      solutionGuide: '1. Du Sud au Nord, Soro traverse la zone forestière sous climat attiéen (forêt dense), puis la zone de transition sous climat baouléen (forêt claire et savane arbustive), et enfin la zone de savane sous climat soudanais (savane arborée et herbeuse). 2. Sols : Sols ferrallitiques rouges au Sud, puis sols ferrugineux grisâtres au Centre et au Nord. 3. Explication : À mesure que l\'on s\'éloigne de l\'Océan Atlantique vers le Nord, les pluies diminuent fortement et la saison sèche devient plus longue et rigoureuse à cause de l\'harmattan. Les grands arbres de la forêt dense qui ont besoin de beaucoup d\'eau ne peuvent pas survivre dans le Nord ; seules les herbes et les arbres à écorce épaisse (baobab, karité) y résistent. De même, sous ces faibles pluies, les sols sont moins altérés et moins humifères, produisant des sols ferrugineux de savane.'
    },
    examTraps: [
      'Penser que la savane pousse sur des sols ferrallitiques humides.',
      'Croire que le café et le cacao peuvent pousser sur les sols ferrugineux secs du Nord.',
      'Oublier de citer les sols hydromorphes présents dans les bas-fonds marécageux du Sud.'
    ],
    quickMemo: 'Sud : Climat attiéen (humide) + Sol ferrallitique (rouge, fertile) -> Forêt dense (cacao, café, hévéa) | Centre : Climat baouléen + Sol ferrugineux -> Forêt claire / savane arbustive | Nord : Climat soudanais (sec) + Sol ferrugineux (gris) -> Savane herbeuse (coton, anacarde, maïs).',
    keywords: ['sol', 'climat', 'végétation', 'sol ferrallitique', 'sol ferrugineux', 'forêt dense', 'savane', 'humus', 'érosion', '6e']
  },

  // ========================================================
  // 6ÈME - GÉOGRAPHIE : THÈME 1 - LEÇON 5
  // ========================================================
  {
    id: 'geo-6e-moyens-representation-terre',
    discipline: 'geographie',
    disciplineLabel: 'Géographie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Les bases de l\'étude de la géographie',
    lessonTitle: 'Les moyens de représentation de la terre : Globe terrestre, cartes, planisphère, coordonnées et projections',
    objectifs: [
      'Donner la forme réelle de la Terre : une sphère légèrement aplatie aux pôles (un géoïde)',
      'Comparer les différentes formes de représentation : le globe terrestre (image sphérique fidèle à dimensions réduites), la carte (représentation plane d\'un pays ou continent), le planisphère (toute la terre à plat), la mappemonde (la terre en deux hémisphères) et le plan (représentation détaillée d\'un espace restreint)',
      'Identifier les composantes obligatoires d\'une carte géographique : le titre, l\'orientation (la flèche du Nord), la légende (signes et couleurs explicatifs) et l\'échelle (numérique ou graphique)',
      'Définir le réseau des lignes imaginaires : l\'Équateur (parallèle zéro séparant l\'hémisphère Nord de l\'hémisphère Sud), les tropiques (Cancer et Capricorne), le méridien de Greenwich (méridien zéro)',
      'Définir les coordonnées géographiques : la latitude (distance angulaire d\'un point par rapport à l\'équateur en degrés Nord ou Sud) et la longitude (distance angulaire par rapport au méridien de Greenwich en degrés Est ou Ouest)',
      'Distinguer les 3 principaux types de projections cartographiques : la projection cylindrique (idéale pour la zone chaude intertropicale), la projection conique (adaptée pour les zones tempérées) et la projection polaire ou azimutale (adaptée pour les pôles)'
    ],
    fullCourseContent: `1. La Forme Réelle de la Terre :
- La planète Terre n'est pas un disque plat : c'est un corps céleste volumineux en forme de sphère, légèrement aplati au niveau des deux pôles (Pôle Nord et Pôle Sud) et renflé à l'équateur. Les géologues lui donnent le nom scientifique de « géoïde ».
- Ne pouvant pas manipuler la Terre avec ses dimensions réelles colossales (40 075 km de circonférence à l'équateur), les hommes utilisent des représentations réduites.

2. Les Principaux Moyens de Représentation de la Terre :
- 1. Le globe terrestre :
  * C'est une sphère miniature sur laquelle est dessinée la surface de la Terre.
  * Avantage : C'est la représentation la plus fidèle et la plus exacte de la réalité, sans aucune déformation des continents, des océans ni des distances.
  * Inconvénients : Il est encombrant à transporter, ne permet pas de voir la totalité de la planète d'un seul coup d'œil (un seul hémisphère à la fois) et ne peut pas montrer les détails locaux.
- 2. La carte géographique :
  * C'est la représentation géométrique plane, réduite et simplifiée de tout ou partie de la surface terrestre sur une feuille ou un écran.
  * Le planisphère : Carte plane représentant la totalité du globe terrestre en une seule vue d'ensemble.
  * La mappemonde : Carte représentant le globe terrestre divisé en deux hémisphères juxtaposés (hémisphère oriental et hémisphère occidental).
  * La carte thématique : Carte illustrant un sujet particulier (relief, climat, végétation, réseau routier, densité de population).
- 3. Le plan :
  * C'est la représentation plane à très grande échelle d'un espace très restreint (un quartier, une ville, une concession scolaire, une maison).

3. Les Éléments Indispensables d'une Carte :
Toute carte géographique doit obligatoirement comporter quatre éléments majeurs :
1. Le titre : Indique avec précision ce que représente la carte et le lieu géographique (ex: « Carte des précipitations en Côte d'Ivoire »).
2. L'orientation : Symbolisée par une boussole ou une flèche pointant vers le Nord géographique.
3. La légende : Tableau récapitulatif expliquant la signification exacte de toutes les couleurs, figurés, symboles et lignes utilisés sur la carte.
4. L'échelle : Rapport constant entre la distance mesurée sur la carte et la distance réelle correspondante sur le terrain :
   * L'échelle numérique : Fraction telle que $1 / 100\\,000$ (signifie que $1\\text{ cm}$ sur la carte représente $100\\,000\\text{ cm}$, soit $1\\text{ km}$ sur le terrain).
   * L'échelle graphique : Segment gradué en kilomètres ou mètres permettant une lecture directe avec une règle.

4. Les Lignes Imaginaires et les Coordonnées Géographiques :
Pour localiser n'importe quel point sur Terre, les géographes ont quadrillé le globe :
- Les parallèles : Cercles imaginaires parallèles entre eux et perpendiculaires à l'axe des pôles.
  * Le parallèle zéro ($0^\\circ$) est l'Équateur : Il divise la Terre en deux moitiés égales appelées Hémisphère Nord et Hémisphère Sud.
  * Les tropiques : Tropique du Cancer ($23^\\circ 27'\\text{ N}$) et Tropique du Capricorne ($23^\\circ 27'\\text{ S}$).
  * Les cercles polaires : Arctique ($66^\\circ 33'\\text{ N}$) et Antarctique ($66^\\circ 33'\\text{ S}$).
- Les méridiens : Demi-cercles imaginaires reliant les deux pôles.
  * Le méridien zéro ($0^\\circ$) est le Méridien de Greenwich (qui passe près de Londres).
- Les coordonnées géographiques d'un point :
  * La latitude : Distance angulaire mesurée en degrés ($0^\\circ$ à $90^\\circ$) vers le Nord ou vers le Sud par rapport à l'Équateur.
  * La longitude : Distance angulaire mesurée en degrés ($0^\\circ$ à $180^\\circ$) vers l'Est ou vers l'Ouest par rapport au méridien de Greenwich.
  * Exemple : La ville d'Abidjan est localisée à environ $5^\\circ 19'\\text{ de latitude Nord}$ et $4^\\circ 01'\\text{ de longitude Ouest}$.

5. Les Projections Cartographiques :
Il est impossible d'aplatir une sphère sur une feuille sans la déformer (comme étaler la peau d'une orange). La technique mathématique permettant de projeter la surface ronde de la Terre sur un plan s'appelle la PROJECTION.
- La projection cylindrique (ex: projection de Mercator) :
  * On imagine le globe inséré dans un cylindre de papier tangent à l'équateur.
  * Utilisation : Très fidèle pour représenter la zone intertropicale (chaude).
  * Inconvénient : Déforme et agrandit démesurément les régions polaires.
- La projection conique :
  * On coiffe le globe d'un cône de papier tangent aux moyennes latitudes.
  * Utilisation : Parfaitement adaptée pour cartographier les zones tempérées (Europe, Amérique du Nord, Asie centrale).
- La projection polaire (ou azimutale) :
  * On pose une feuille plane en contact direct avec l'un des pôles.
  * Utilisation : Idéale pour représenter avec exactitude les régions polaires (Arctique et Antarctique).`,
    definitions: [
      {
        term: 'Globe terrestre',
        definition: 'Modèle réduit sphérique en trois dimensions représentant la terre de la façon la plus fidèle sans déformation.'
      },
      {
        term: 'Planisphère',
        definition: 'Carte géographique représentant l\'ensemble de la surface terrestre projetée sur un seul plan horizontal.'
      },
      {
        term: 'Échelle',
        definition: 'Rapport mathématique entre la distance mesurée sur une carte et la distance réelle sur le terrain.'
      },
      {
        term: 'Latitude',
        definition: 'Distance angulaire exprimée en degrés d\'un point de la terre par rapport à l\'équateur (de 0° à 90° Nord ou Sud).'
      },
      {
        term: 'Longitude',
        definition: 'Distance angulaire exprimée en degrés d\'un point de la terre par rapport au méridien de Greenwich (de 0° à 180° Est ou Ouest).'
      },
      {
        term: 'Projection cartographique',
        definition: 'Méthode géométrique et mathématique permettant de transposer la surface sphérique de la terre sur une surface plane.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Les 4 composantes obligatoires d\'une carte',
        statement: 'Titre + Orientation (Nord) + Légende + Échelle.'
      },
      {
        name: 'Choix de la projection selon la latitude',
        statement: 'Zone intertropicale -> Projection cylindrique | Zones tempérées -> Projection conique | Zones polaires -> Projection azimutale/polaire.'
      }
    ],
    formulas: [
      {
        name: 'Échelle cartographique',
        formula: '\\text{Distance sur le terrain} = \\text{Distance sur la carte} \\times \\text{Dénominateur de l\'échelle}',
        explanation: 'Ex: sur une carte au 1/50 000, 2 cm correspondent à 2 x 50 000 cm = 100 000 cm = 1 km.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Lire les coordonnées géographiques d\'une ville',
        procedure: '1. Identifier la ligne de latitude (parallèle) passant par la ville et noter le degré suivi de Nord ou Sud (ex: 5° N). 2. Identifier la ligne de longitude (méridien) passant par la ville et noter le degré suivi d\'Est ou Ouest (ex: 4° O). 3. Noter les coordonnées sous la forme : (5° N ; 4° O).',
        tip: 'L\'équateur est la référence pour la latitude (0°), Greenwich pour la longitude (0°).'
      }
    ],
    examples: [
      {
        statement: 'Sur une carte à l\'échelle 1/200 000, deux villes sont séparées de 5 cm. Quelle est la distance réelle sur le terrain ?',
        solution: 'Distance réelle = 5 cm x 200 000 = 1 000 000 cm = 10 000 m = 10 km. Les deux villes sont séparées de 10 kilomètres dans la réalité.'
      }
    ],
    exercises: [
      {
        question: 'Quelle est la projection cartographique la plus appropriée pour représenter la Côte d\'Ivoire sur une carte plane sans déformation excessive ? Justifie.',
        correction: 'C\'est la projection cylindrique, car la Côte d\'Ivoire est située dans la zone intertropicale chaude près de l\'Équateur, zone où le cylindre touche le globe avec le moins de déformation.'
      },
      {
        question: 'Définis la différence entre un planisphère et un globe terrestre.',
        correction: 'Le globe terrestre est une sphère en 3D qui représente la Terre fidèlement sans déformation mais ne montre qu\'une moitié à la fois. Le planisphère est une carte à plat qui montre l\'ensemble des terres et océans en une seule vue mais entraîne des déformations géométriques.'
      }
    ],
    evaluationSituation: {
      context: 'Au cours du premier trimestre de géographie, le professeur de 6ème accroche au tableau une grande carte représentant le monde entier. Ton voisin de banc Adahi, qui a manqué les cours pour cause de maladie, observe les couleurs, les chiffres et les petits signes bizarres et te demande de lui expliquer à quoi sert ce schéma et comment le lire.',
      instructions: [
        '1. Nomme le type exact de carte accrochée au tableau.',
        '2. Énumère les quatre éléments indispensables que doit comporter cette carte pour être lue correctement.',
        '3. Explique à Adahi le rôle de la légende et de l\'échelle pour comprendre la réalité du terrain.'
      ],
      solutionGuide: '1. Il s\'agit d\'un planisphère (carte plane du monde entier). 2. Les quatre éléments indispensables sont : le titre, l\'orientation (la flèche du Nord), la légende et l\'échelle. 3. Explication : La légende est la clé de lecture qui traduit chaque signe, chaque symbole et chaque couleur en élément réel (bleu pour l\'eau, vert pour la forêt, jaune pour le désert, points pour les capitales). L\'échelle permet de connaître la taille réelle des pays et de calculer la vraie distance entre deux villes en multipliant la distance mesurée sur la carte par le coefficient d\'échelle.'
    },
    examTraps: [
      'Inverser latitude (mesurée par rapport à l\'équateur) et longitude (mesurée par rapport au méridien de Greenwich).',
      'Oublier qu\'un globe terrestre ne peut jamais être dessiné à plat.',
      'Attribuer la projection conique aux zones polaires (la projection conique est réservée aux zones tempérées).'
    ],
    quickMemo: 'Terre = sphère aplatie aux pôles (géoïde) | Globe (sphérique, fidèle) vs Carte/Planisphère (plat, vue d\'ensemble) | 4 éléments : Titre + Orientation + Légende + Échelle | Équateur (0° latitude) | Greenwich (0° longitude) | Projections : Cylindrique (chaude), Conique (tempérée), Polaire/Azimutale (pôles).',
    keywords: ['représentation de la terre', 'globe terrestre', 'planisphère', 'carte', 'échelle', 'légende', 'latitude', 'longitude', 'projection cylindrique', '6e']
  },

  // ========================================================
  // 6ÈME - GÉOGRAPHIE : THÈME 1 - LEÇON 6
  // ========================================================
  {
    id: 'geo-6e-mouvements-de-la-terre',
    discipline: 'geographie',
    disciplineLabel: 'Géographie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Les bases de l\'étude de la géographie',
    lessonTitle: 'Les mouvements de la terre et leurs influences : Rotation (24h, jours/nuits, fuseaux) et Révolution (365j, saisons)',
    objectifs: [
      'Situer la Terre dans le système solaire (3e planète en partant du Soleil) et rappeler qu\'elle est animée de deux mouvements permanents',
      'Définir le mouvement de rotation de la Terre : tour complet que la Terre effectue sur elle-même autour de son axe des pôles en 24 heures (1 jour) d\'Ouest en Est',
      'Identifier et expliquer les conséquences directes de la rotation : 1. L\'alternance de la succession des jours et des nuits, 2. Le mouvement apparent du Soleil dans le ciel (qui semble se lever à l\'Est et se coucher à l\'Ouest), 3. La détermination des 4 points cardinaux (Est, Ouest, Nord, Sud) pour s\'orienter, 4. La division de la Terre en 24 fuseaux horaires de 1h chacun (fuseau de Greenwich GMT = heure d\'Abidjan), 5. La déviation des vents et courants marins (force de Coriolis : vers la droite au Nord, vers la gauche au Sud)',
      'Définir le mouvement de révolution de la Terre : tour complet que la Terre effectue autour du Soleil en 365 jours et 6 heures (une année)',
      'Identifier et expliquer les conséquences de la révolution : 1. L\'inégale durée des jours et des nuits au fil de l\'année, 2. La succession des quatre saisons (printemps, été, automne, hiver) due à l\'inclinaison constante de l\'axe terrestre (23°27\'), 3. L\'inégale répartition de la chaleur à la surface du globe'
    ],
    fullCourseContent: `1. La Terre dans le Système Solaire :
- La Terre est la troisième planète du système solaire en partant du Soleil, gravitant entre Vénus et Mars.
- Loin d'être immobile, la Terre est animée en permanence de deux mouvements fondamentaux : la ROTATION et la RÉVOLUTION.

2. Le Mouvement de Rotation de la Terre :
- Définition : La rotation est le mouvement par lequel la Terre tourne sur elle-même autour de son axe imaginaire des pôles (incliné à 23°27').
- Sens du mouvement : La Terre tourne d'Ouest en Est (dans le sens inverse des aiguilles d'une montre quand on regarde depuis le pôle Nord).
- Durée : Une rotation complète s'effectue en 24 heures, soit un jour civil.

3. Les Conséquences de la Rotation sur la Vie Quotidienne :
La rotation terrestre produit cinq conséquences majeures :
- 1. L'alternance du jour et de la nuit :
  * La Terre étant une sphère opaque éclairée par le Soleil, seule la moitié exposée aux rayons reçoit la lumière : c'est le JOUR.
  * La moitié opposée reste dans l'ombre : c'est la NUIT.
  * En tournant continuellement d'Ouest en Est, chaque région de la Terre passe successivement de l'ombre à la lumière, créant la succession ininterrompue des jours et des nuits.
- 2. Le mouvement apparent du Soleil :
  * Dans le ciel, nous avons l'illusion que le Soleil se déplace au cours de la journée en se levant à l'Est, culminant à midi au zénith et se couchant à l'Ouest.
  * Ce mouvement n'est qu'une illusion d'optique (mouvement apparent) : en réalité, le Soleil est fixe par rapport à nous, c'est la Terre qui tourne !
- 3. La détermination des points cardinaux et l'orientation :
  * C'est le repérage du lever (Est / Levant) et du coucher (Ouest / Ponant) du Soleil qui a permis aux hommes de définir les 4 points cardinaux fondamentaux : Est, Ouest, Nord et Sud indispensables pour s'orienter sur terre et sur mer.
- 4. La division de la Terre en 24 fuseaux horaires :
  * Puisqu'une rotation complète fait 360° en 24 heures, la Terre est divisée en 24 tranches horaires de $15^\\circ$ de longitude chacune ($360 / 24 = 15^\\circ$). Chaque tranche correspond exactement à 1 heure de décalage.
  * Le fuseau horaire de référence est celui du méridien de Greenwich ($0^\\circ$), appelé GMT (Greenwich Mean Time) ou Temps Universel (UTC).
  * La Côte d'Ivoire (Abidjan) est située dans le fuseau horaire de Greenwich (GMT 0).
  * Règle de calcul horaire : Quand on voyage vers l'Est, on avance sa montre (+1 heure par fuseau dépassé) ; quand on voyage vers l'Ouest, on retarde sa montre (-1 heure par fuseau).
- 5. La déviation des vents et courants marins (Effet Coriolis) :
  * Sous l'effet de la vitesse de rotation de la Terre, les masses d'air et les courants océaniques sont déviés vers la droite dans l'hémisphère Nord, et vers la gauche dans l'hémisphère Sud.

4. Le Mouvement de Révolution de la Terre :
- Définition : La révolution est le mouvement orbital que la Terre accomplit autour du Soleil sur une trajectoire elliptique.
- Durée : Un tour complet dure exactement 365 jours et 6 heures (une année tropique).
- Année bissextile : Pour rattraper les 6 heures supplémentaires chaque année ($6\\text{ h} \\times 4 = 24\\text{ h} = 1\\text{ jour}$), on ajoute un 366e jour tous les quatre ans au mois de février (29 jours).

5. Les Conséquences de la Révolution Terrestre :
Associée à l'inclinaison constante de l'axe de rotation de la Terre ($23^\\circ 27'$), la révolution entraîne :
- 1. L'inégale durée du jour et de la nuit :
  * Selon la position de la Terre sur son orbite, l'hémisphère penché vers le Soleil bénéficie de journées longues et de nuits courtes (solstice d'été). L'autre hémisphère connaît des journées courtes et des nuits longues (solstice d'hiver).
  * Aux équinoxes (21 mars et 21 septembre), le jour et la nuit ont exactement la même durée (12h de jour, 12h de nuit) partout sur la planète.
  * À l'équateur (Côte d'Ivoire), le jour et la nuit ont une durée presque égale (environ 12 heures chacun) toute l'année.
- 2. La succession des quatre saisons :
  * Dans les zones tempérées, l'ensoleillement et la chaleur varient régulièrement au cours de l'année, donnant naissance aux 4 saisons : le printemps (renouveau de la végétation), l'été (période chaude), l'automne (chute des feuilles) et l'hiver (période froide et neigeuse).`,
    definitions: [
      {
        term: 'Rotation de la terre',
        definition: 'Mouvement de la terre tournant sur elle-même autour de son axe en 24 heures d\'Ouest en Est.'
      },
      {
        term: 'Révolution de la terre',
        definition: 'Mouvement de translation que la terre effectue autour du soleil en 365 jours et 6 heures.'
      },
      {
        term: 'Mouvement apparent du soleil',
        definition: 'Impression visuelle que le soleil se déplace d\'Est en Ouest dans le ciel causée par la rotation réelle de la terre.'
      },
      {
        term: 'Fuseau horaire',
        definition: 'Chacune des 24 tranches géographiques de 15° de longitude à l\'intérieur de laquelle toutes les horloges indiquent la même heure.'
      },
      {
        term: 'Solstice',
        definition: 'Moment de l\'année où la différence entre la durée du jour et de la nuit est la plus grande (21 juin et 21 décembre).'
      },
      {
        term: 'Équinoxe',
        definition: 'Moment de l\'année où le soleil est au zénith à l\'équateur, rendant la durée du jour égale à celle de la nuit (21 mars et 21 septembre).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Sens et durée des mouvements',
        statement: 'Rotation : sur elle-même, sens Ouest -> Est, durée = 24 heures | Révolution : autour du soleil, durée = 365 jours 6 heures.'
      },
      {
        name: 'Règle des fuseaux horaires',
        statement: 'Déplacement vers l\'Est -> on ajoute 1 heure par fuseau (+1h) ; Déplacement vers l\'Ouest -> on retranche 1 heure par fuseau (-1h).'
      }
    ],
    formulas: [
      {
        name: 'Calcul du décalage d\'un fuseau',
        formula: '1\\text{ fuseau} = \\frac{360^\\circ}{24\\text{ h}} = 15^\\circ\\text{ de longitude} = 1\\text{ heure de temps}',
        explanation: 'La Terre parcourt 15 degrés d\'angle chaque heure.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer l\'heure d\'une ville selon son fuseau horaire',
        procedure: '1. Identifier l\'heure d\'origine à Abidjan (fuseau GMT 0). 2. Repérer si la ville de destination est située à l\'Est ou à l\'Ouest de Greenwich. 3. Compter le nombre de fuseaux franchis. 4. Ajouter (si Est) ou soustraire (si Ouest) ce nombre d\'heures à l\'heure d\'Abidjan.',
        tip: 'Paris est à GMT+1 en hiver (+2h en été) ; New York est à GMT-5.'
      }
    ],
    examples: [
      {
        statement: 'Lorsqu\'il est 12h00 à Abidjan (méridien 0°), quelle heure est-il à Nairobi située à 45° de longitude Est ?',
        solution: 'Calcul : 45° / 15° = 3 fuseaux vers l\'Est. On ajoute donc 3 heures : 12h00 + 3h = 15h00. Il est 15 heures à Nairobi.'
      }
    ],
    exercises: [
      {
        question: 'Distingue les conséquences de la rotation de celles de la révolution parmi la liste : a) Succession des 4 saisons ; b) Succession du jour et de la nuit ; c) Division en 24 fuseaux horaires ; d) Inégale durée des jours et des nuits.',
        correction: '- Conséquences de la rotation : b) Succession du jour et de la nuit ; c) Division en 24 fuseaux horaires.\n- Conséquences de la révolution : a) Succession des 4 saisons ; d) Inégale durée des jours et des nuits.'
      },
      {
        question: 'Pourquoi dit-on que le déplacement du soleil dans le ciel est un « mouvement apparent » ?',
        correction: 'Parce que ce n\'est pas le soleil qui se lève ou tourne autour de la Terre : le soleil est immobile au centre du système solaire et c\'est la Terre qui tourne sur elle-même d\'Ouest en Est, donnant l\'illusion d\'un déplacement solaire.'
      }
    ],
    evaluationSituation: {
      context: 'À 19h30, pendant qu\'il fait nuit noire à Abidjan, le petit frère de Kouamé en classe de CE2 regarde un match de football en direct retransmis depuis San Francisco aux États-Unis, où le soleil brille encore en plein jour. Très troublé, le petit demande à Kouamé : « Comment se fait-il qu\'il fasse jour là-bas pendant qu\'il fait nuit chez nous ? Est-ce qu\'il y a deux soleils ? ».',
      instructions: [
        '1. Nomme le mouvement de la Terre responsable de cette situation.',
        '2. Donne le sens et la durée complète de ce mouvement.',
        '3. Explique clairement au petit frère le mécanisme astronomique qui fait qu\'il fait jour aux États-Unis alors qu\'il fait déjà nuit en Côte d\'Ivoire.'
      ],
      solutionGuide: '1. Le mouvement responsable est la rotation de la Terre sur elle-même. 2. La rotation s\'effectue d\'Ouest en Est en 24 heures. 3. Explication : Il n\'y a qu\'un seul Soleil dans notre système. La Terre étant une boule ronde et opaque, le Soleil ne peut éclairer qu\'une moitié de la planète à la fois. Lorsque la face de la Terre où se trouve la Côte d\'Ivoire tourne et se retrouve dans l\'ombre (la nuit), la face opposée où se situent les États-Unis d\'Amérique (à l\'Ouest) est encore directement exposée aux rayons solaires (le jour).'
    },
    examTraps: [
      'Confondre rotation (24 h, jour/nuit) et révolution (365 jours, saisons).',
      'Dire que le soleil tourne autour de la Terre.',
      'Soustraire des heures quand on se déplace vers l\'Est au lieu d\'ajouter.'
    ],
    quickMemo: 'Rotation : Terre sur elle-même en 24h d\'Ouest en Est -> Jour/Nuit, mouvement apparent du soleil, points cardinaux, 24 fuseaux horaires GMT | Révolution : Terre autour du soleil en 365j 6h -> 4 saisons, inégale durée jours/nuits.',
    keywords: ['rotation de la terre', 'révolution de la terre', 'jour et nuit', 'fuseaux horaires', 'GMT', 'saisons', 'mouvement apparent du soleil', '6e']
  },

  // ========================================================
  // 6ÈME - GÉOGRAPHIE : THÈME 2 - LEÇON 1
  // ========================================================
  {
    id: 'geo-6e-population-et-environnement-local',
    discipline: 'geographie',
    disciplineLabel: 'Géographie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'L\'homme et son milieu local en Côte d\'Ivoire',
    lessonTitle: 'Population et environnement local : Cadre physique du District d\'Abidjan, installation humaine, dégradation et protection',
    objectifs: [
      'Définir la population (ensemble des personnes résidant sur un territoire déterminé) et l\'environnement (cadre de vie global comprenant les éléments naturels et les aménagements humains)',
      'Décrire les caractéristiques du milieu physique du District d\'Abidjan : relief de plaines et bas plateaux faciles à aménager, climat attiéen chaud et très pluvieux, couvert forestier littoral et mangrove, sols ferrallitiques et hydromorphes fertiles, réseau hydrographique dense (Lagune Ébrié, fleuves côtiers, Océan Atlantique) et richesses du sous-sol (pétrole et gaz naturel offshore)',
      'Expliquer les facteurs naturels et économiques qui favorisent l\'installation humaine massive dans le District d\'Abidjan',
      'Identifier les graves conséquences de la croissance démographique urbaine rapide : insuffisance des infrastructures scolaires et sanitaires, prolifération de quartiers précaires et bidonvilles sur pentes à risques, embouteillages monstres, inondations meurtrières en saison des pluies',
      'Analyser l\'impact des activités humaines sur la dégradation environnementale : déforestation périurbaine, pollution de la lagune et de l\'air par les rejets industriels et les véhicules, accumulation anarchique des ordures ménagères',
      'Proposer des solutions citoyennes et publiques pour un aménagement durable : décentralisation, campagnes de reboisement, curage des caniveaux, recyclage des déchets et civisme écologique'
    ],
    fullCourseContent: `1. Notions Préliminaires : Population et Environnement :
- La population : C'est l'ensemble des êtres humains qui vivent, habitent et exercent leurs activités sur un territoire géographique donné (ville, région, pays).
- L'environnement : C'est tout ce qui nous entoure. Il comprend le milieu naturel (l'air, l'eau, le sol, la végétation, les animaux) et le milieu humain aménagé (les maisons, les routes, les ponts, les usines).

2. Le Milieu Physique Favorable du District d'Abidjan :
Situé au Sud de la Côte d'Ivoire sur le Golfe de Guinée, le District Autonome d'Abidjan bénéficie d'atouts naturels exceptionnels qui ont favorisé l'installation des hommes :
- Le relief : Constitué de plaines côtières et de bas plateaux d'altitude très faible (0 à 50 mètres). Ce relief plat facilite considérablement la construction d'habitations, d'usines, de routes et de plantations.
- Le climat : Climat attiéen (subéquatorial) caractérisé par une chaleur constante ($26$ à $28^\\circ\\text{C}$) et des précipitations très abondantes (plus de $2\\,000\\text{ mm}$ de pluie par an) réparties en deux saisons pluvieuses.
- La végétation : Forêt dense ombrophile humide et mangrove sur les rives lagunaires, maintenant l'humidité et régulant les températures.
- Les sols : Sols ferrallitiques profonds favorables aux cultures (hévéa, palmier à huile) et sols hydromorphes dans les bas-fonds gorgés d'eau.
- L'hydrographie : Un réseau aquatique remarquable constitué par l'Océan Atlantique, l'immense plan d'eau de la Lagune Ébrié (artère de transport lagunaire et de pêche) et plusieurs fleuves et rivières (la Mé, l'Agnéby).
- Les ressources du sous-sol : Présence de gisements pétroliers et gaziers offshore au large des côtes abidjanaises (champs Bélier, Espoir, Baobab, Baleine).

3. La Croissance Démographique Galopante et Ses Défis Urbains :
Abidjan est la capitale économique de la Côte d'Ivoire et compte plus de 6 millions d'habitants :
- Les facteurs d'attraction : La présence du port autonome d'Abidjan (PAA), la concentration de 75 % des industries ivoiriennes, des universités, des grands hôpitaux et des banques créent un attrait migratoire intense (exode rural et immigration sous-régionale).
- Les problèmes posés par la surpopulation urbaine :
  * Insuffisance aiguë des infrastructures socio-économiques : Écoles surchargées (classes de 80 à 100 élèves), manque de lits dans les centres de santé, pénuries d'eau potable et coupures d'électricité.
  * Crise du logement et développement d'habitats précaires : Multiplication de bidonvilles insalubres (Yopougon, Attécoubé, Abobo) construits sans permis sur des flancs de collines sablonneuses instables.
  * Inondations meurtrières et glissements de terrain : Chaque année, lors de la grande saison des pluies en juin-juillet, les eaux de ruissellement bloquées par les constructions anarchiques provoquent des éboulements tragiques.
  * Embouteillages monstres : Saturation permanente des grandes voies routières reliant les communes.

4. L'Impact des Activités Humaines sur la Dégradation de l'Environnement :
L'intensité des activités de la population abidjanaise agresse le cadre de vie naturel :
- La déforestation périurbaine : Abattage massif des arbres pour l'extension anarchique des lotissements et la production de charbon de bois.
- La pollution de l'eau et de la Lagune Ébrié : Déversement direct d'eaux usées domestiques non traitées, rejets toxiques des usines de la zone industrielle de Yopougon et Vridi, entraînant la mort des poissons et l'asphyxie du plan d'eau.
- La pollution de l'air : Émissions toxiques des pots d'échappement des vieux véhicules (taxis communaux Wôrô-wôrô, gbakas) et des cheminées industrielles.
- L'insalubrité publique : Prolifération de dépôts sauvages d'ordures ménagères, bouteilles plastiques bouchant les caniveaux, favorisant le paludisme, le choléra et la fièvre typhoïde.

5. Les Solutions pour Préserver Notre Environnement :
- Rôle des pouvoirs publics et de l'État :
  * Aménagement urbain planifié et déguerpissement des zones à haut risque inondable.
  * Renforcement des réseaux de canalisations d'eaux pluviales et curage préventif régulier des caniveaux.
  * Politique de décentralisation économique pour développer les villes de l'intérieur (Bouaké, Korhogo, San-Pédro) et freiner l'exode vers Abidjan.
- Rôle éco-citoyen de chaque habitant :
  * Ne jamais jeter d'ordures ni de sachets plastiques dans les caniveaux d'évacuation.
  * Pratiquer le tri et le recyclage des déchets ménagers.
  * Planter des arbres autour des maisons et dans les écoles (reboisement urbain).
  * Adopter le gaz domestique à la place du bois de chauffe pour sauver les forêts.`,
    definitions: [
      {
        term: 'Population',
        definition: 'Ensemble des individus résidant dans un espace géographique déterminé à un moment précis.'
      },
      {
        term: 'Environnement',
        definition: 'Ensemble des éléments naturels (air, eau, sol, faune, flore) et bâtis qui entourent un individu ou une communauté.'
      },
      {
        term: 'Habitat précaire (bidonville)',
        definition: 'Zone urbaine d\'habitations de fortune construites avec des matériaux de récupération sans viabilisation ni eau courante.'
      },
      {
        term: 'Déforestation',
        definition: 'Action de détruire et déboiser les forêts naturelles pour l\'agriculture, l\'urbanisation ou le bois sans replanter.'
      },
      {
        term: 'Exode rural',
        definition: 'Départ massif et définitif des populations des villages de l\'intérieur vers les grandes villes.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Atouts du site d\'Abidjan',
        statement: 'Plaines plates + Climat très pluvieux + Lagune Ébrié + Accès maritime océanique = Fort dynamisme économique mais forte vulnérabilité écologique.'
      },
      {
        name: 'Règle de salubrité publique',
        statement: 'Les caniveaux sont exclusivement destinés à l\'évacuation des eaux de pluie ; y jeter des ordures cause directement les inondations.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Organiser une action de salubrité dans son quartier ou son collège',
        procedure: '1. Identifier les points noirs d\'insalubrité (tas d\'ordures, caniveaux bouchés). 2. Munir les participants de gants et pelles de protection. 3. Déboucher les canaux d\'évacuation des eaux pluviales. 4. Collecter et ensacher les déchets plastiques pour les confier aux services de voirie. 5. Sensibiliser les commerçants riverains.',
        tip: 'Le civisme commence par son propre geste : ne jamais jeter un sachet dans la rue.'
      }
    ],
    examples: [
      {
        statement: 'Pourquoi la saison des pluies à Abidjan entraîne-t-elle souvent des pertes en vies humaines dans des communes comme Attécoubé ou Yopougon ?',
        solution: 'Parce que de nombreuses habitations précaires sont construites de façon anarchique sur des pentes sableuses instables et à flanc de ravins. Lorsque les pluies torrentielles saturent le sol ferrallitique meuble, celui-ci s\'effondre sous forme de glissements de terrain, emportant les maisons fragiles.'
      }
    ],
    exercises: [
      {
        question: 'Cite trois facteurs naturels qui favorisent l\'installation de la population dans le District d\'Abidjan.',
        correction: '1. Le relief plat de plaines facile à aménager.\n2. Le climat attiéen très pluvieux et la disponibilité d\'eau.\n3. La lagune Ébrié et l\'Océan Atlantique permettant le commerce portuaire et la pêche.'
      },
      {
        question: 'Donne deux solutions concrètes pour lutter contre la dégradation de l\'environnement urbain.',
        correction: '1. Le curage régulier des caniveaux et l\'interdiction des dépôts sauvages d\'ordures.\n2. Le reboisement urbain et la création d\'espaces verts protégés.'
      }
    ],
    evaluationSituation: {
      context: 'Pendant les vacances de Pâques au village, tu constates que les villageois abattent massivement les arbres le long de la rivière locale pour faire du charbon de bois, lavent leurs motos dans l\'eau avec des détergents chimiques et brûlent des pneus usés. Le chef du village, inquiet de voir la rivière s\'assécher et les enfants tomber malades, sollicite ton aide en tant qu\'élève de 6ème.',
      instructions: [
        '1. Identifie deux activités nuisibles à l\'environnement pratiquées par les villageois.',
        '2. Explique deux conséquences graves de ces pratiques sur le sol, l\'eau et la santé des habitants.',
        '3. Rédige trois conseils simples et concrets à prodiguer aux villageois pour sauver leur rivière et préserver leur cadre de vie.'
      ],
      solutionGuide: '1. Activités nuisibles : l\'abattage des arbres au bord de l\'eau (déforestation de la ripisylve) et le lavage d\'engins avec pollution chimique de la rivière. 2. Conséquences : L\'abattage des arbres entraîne l\'érosion des berges, l\'envasement et le tarissement précoce de la rivière en saison sèche ; la pollution de l\'eau par les produits pétroliers et détergents tue les poissons et provoque des maladies hydriques (diarrhées, fièvre) chez les enfants qui consomment cette eau. 3. Conseils : a) Interdire formellement de couper les arbres à moins de 50 mètres des berges pour garder la source ombragée ; b) Créer une aire de lavage éloignée de la rivière pour que les eaux sales s\'infiltrent dans un puits perdu ; c) Reboiser les berges en plantant de nouveaux arbres d\'ombrage.'
    },
    examTraps: [
      'Confondre pollution de l\'air (gaz d\'échappement, fumées d\'usines) et pollution de l\'eau (déchets dans la lagune).',
      'Penser qu\'Abidjan est une ville de montagne (le relief d\'Abidjan est constitué de plaines et bas plateaux).',
      'Accuser uniquement la nature pour les inondations sans mentionner le blocage des caniveaux par les ordures humaines.'
    ],
    quickMemo: 'District d\'Abidjan : plaines, climat attiéen pluvieux, lagune Ébrié, forêt littorale | Problèmes : explosion démographique, bidonvilles, inondations, pollutions, ordures | Solutions : décentralisation, curage des caniveaux, reboisement, civisme éco-responsable.',
    keywords: ['population', 'environnement', 'District d\'Abidjan', 'plaines', 'lagune Ébrié', 'bidonvilles', 'inondations', 'pollution', '6e']
  },

  // ========================================================
  // 6ÈME - GÉOGRAPHIE : THÈME 2 - LEÇON 2
  // ========================================================
  {
    id: 'geo-6e-homme-et-cycle-de-eau',
    discipline: 'geographie',
    disciplineLabel: 'Géographie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'L\'homme et son milieu local en Côte d\'Ivoire',
    lessonTitle: 'L\'homme et le cycle de l\'eau : États de l\'eau, circuit permanent, utilité vitale et sauvegarde de la ressource',
    objectifs: [
      'Définir l\'eau (liquide transparent, inodore, incolore et sans saveur) et identifier ses 3 états physiques : liquide (mers, pluies, lacs), solide (glace, neige, grêle) et gazeux (vapeur d\'eau invisible dans l\'air)',
      'Définir le cycle de l\'eau comme le renouvellement naturel, matériel et continu de l\'eau entre la terre, les océans et l\'atmosphère',
      'Décrire et schématiser les étapes du cycle de l\'eau : 1. L\'évaporation océanique et l\'évapotranspiration continentale sous l\'effet du rayonnement solaire, 2. La condensation de la vapeur d\'eau en nuages, 3. Les précipitations (pluie, neige, grêle), 4. Le ruissellement de surface (cours d\'eau vers l\'océan) et l\'infiltration en profondeur (nappes phréatiques)',
      'Expliquer l\'utilité vitale de l\'eau pour l\'homme et l\'économie : besoins domestiques (boisson, cuisine, hygiène), agriculture (irrigation), production d\'énergie hydroélectrique (barrages de Kossou, Taabo, Buyo, Soubré), voies navigables et pêche',
      'Prendre conscience que l\'eau douce potable est une ressource rare (moins de 3 % de l\'eau totale de la planète) et menacée',
      'Identifier les menaces de gaspillage et de pollution (orpaillage clandestin, rejets d\'égouts, produits phytosanitaires) et promouvoir les gestes citoyens d\'économie et de protection'
    ],
    fullCourseContent: `1. Propriétés Physiques et États de l'Eau :
- Qu'est-ce que l'eau pure ? C'est un corps chimique liquide à température ambiante, transparent, sans odeur (inodore), sans couleur (incolore) et sans goût (insipide).
- L'eau est présente sur Terre sous trois états physiques réversibles :
  * L'état liquide : L'eau des mers, des océans, des fleuves, des lacs, des marécages et des nappes souterraines.
  * L'état gazeux : La vapeur d'eau invisible présente dans l'air que nous respirons.
  * L'état solide : La glace, les icebergs, la neige et les grêlons au sommet des hautes montagnes et aux pôles.

2. Le Cycle Naturel de l'Eau (Un Circuit Fermé Permanent) :
L'eau présente sur notre planète est toujours la même depuis des milliards d'années : elle se recycle perpétuellement selon un circuit continu en 4 étapes majeures :
1. L'évaporation et l'évapotranspiration :
   * Sous la chaleur du rayonnement solaire, l'eau des océans, des mers et des cours d'eau se réchauffe et se transforme en vapeur d'eau qui monte dans l'atmosphère (évaporation océanique).
   * Sur les continents, les plantes et les forêts rejettent d'énormes quantités de vapeur d'eau par transpiration foliaire, associées à la respiration des êtres vivants (évapotranspiration continentale).
2. La condensation :
   * En s'élevant en altitude, la vapeur d'eau rencontre des couches d'air très froides. Elle se refroidit et se condense en minuscules gouttelettes d'eau liquide en suspension, formant les NUAGES.
3. Les précipitations :
   * Lorsque les gouttelettes d'eau dans les nuages grossissent et deviennent trop lourdes, elles retombent sur Terre sous l'effet de la pesanteur sous forme de pluie, d'averses, de grêle ou de neige.
4. Le ruissellement et l'infiltration :
   * Une partie de l'eau tombée sur les sols s'écoule à la surface en suivant la pente naturelle du terrain pour alimenter les ruisseaux, les rivières et les fleuves qui la ramènent vers la mer : c'est le RUISSELLEMENT.
   * Une autre partie pénètre profondément dans le sol à travers les roches perméables pour alimenter les réserves souterraines d'eau douce appelées NAPPES PHRÉATIQUES : c'est l'INFILTRATION.

3. L'Utilité Fondamentale de l'Eau pour les Hommes :
L'eau est surnommée à juste titre « l'or bleu » car aucune vie animale ou végétale n'est possible sans elle :
- Dans la vie quotidienne et domestique : Boisson vitale pour étancher la soif, préparation des repas, hygiène corporelle, lessive et salubrité des habitations.
- Dans l'agriculture : Arrosage et irrigation des cultures vivrières et maraîchères (riz, légumes), abreuvement du bétail.
- Dans la production d'énergie : L'eau des fleuves retenue par de grands barrages hydroélectriques fait tourner de puissantes turbines qui fabriquent l'électricité indispensable au pays (barrages de Kossou, Taabo, Buyo, Ayamé 1 et 2, Soubré).
- Dans les transports et l'alimentation : Navigation sur la lagune et les fleuves, pêche maritime et fluviale.

4. L'Eau, une Ressource Précieuse et Vulnérable à Protéger :
- La rareté de l'eau douce : Plus de 97 % de l'eau présente sur Terre est salée (océans et mers). Moins de 3 % est de l'eau douce, dont la majorité est piégée dans les glaciers polaires. L'eau douce liquide disponible pour l'humanité ne représente que moins de 1 % du total mondial !
- Les menaces actuelles en Côte d'Ivoire :
  * Pollution destructrice par l'orpaillage clandestin : Utilisation sauvage de mercure et de cyanure pour extraire l'or, empoisonnant des fleuves entiers (Comoé, Bandama, Cavally).
  * Rejet d'eaux usées domestiques et industrielles sans traitement dans les lagunes.
  * Gaspillage d'eau courante (robinets qui fuient, tuyauteries cassées).
- Les gestes éco-citoyens de sauvegarde :
  * Fermer les robinets pendant le savonnage et réparer rapidement les fuites.
  * Protéger les cours d'eau en interdisant le rejet d'ordures et de produits chimiques.
  * Préserver le couvert forestier des bassins versants pour faciliter l'infiltration des nappes.`,
    definitions: [
      {
        term: 'Cycle de l\'eau',
        definition: 'Circuit naturel et permanent par lequel l\'eau circule continuellement entre la surface de la terre et l\'atmosphère.'
      },
      {
        term: 'Évaporation',
        definition: 'Transformation de l\'eau liquide en vapeur d\'eau gazeuse sous l\'effet de la chaleur solaire.'
      },
      {
        term: 'Condensation',
        definition: 'Transformation de la vapeur d\'eau invisible en gouttelettes d\'eau liquide formant les nuages sous l\'effet du froid.'
      },
      {
        term: 'Infiltration',
        definition: 'Pénétration lente des eaux de pluie dans les profondeurs du sol alimentant les nappes phréatiques.'
      },
      {
        term: 'Nappe phréatique',
        definition: 'Réservoir d\'eau douce souterraine accumulée dans les couches perméables du sous-sol alimentant les puits.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Principe de conservation de l\'eau',
        statement: 'La quantité totale d\'eau sur la planète Terre ne change jamais : l\'eau ne se crée pas et ne se détruit pas, elle change perpétuellement d\'état et de lieu.'
      },
      {
        name: 'Rareté de l\'eau douce exploitable',
        statement: 'Moins de 1 % de l\'eau du globe terrestre est accessible sous forme d\'eau douce liquide de surface et souterraine pour l\'humanité.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Schématiser le cycle de l\'eau sur son cahier',
        procedure: '1. Dessiner un océan à gauche et une montagne à droite avec un soleil rayonnant au-dessus. 2. Tracer des flèches ondulées bleues montant de l\'océan et des forêts vers le ciel étiquetées "Évaporation" et "Évapotranspiration". 3. Dessiner des nuages d\'altitude étiquetés "Condensation". 4. Tracer des flèches descendantes avec des gouttes étiquetées "Précipitations". 5. Dessiner une rivière retournant à la mer étiquetée "Ruissellement" et des flèches pénétrant sous terre étiquetées "Infiltration dans la nappe phréatique".',
        tip: 'Le cycle forme une boucle fermée sans début ni fin.'
      }
    ],
    examples: [
      {
        statement: 'Que se passerait-il si les nuages ne se formaient plus dans le ciel ?',
        solution: 'Sans condensation ni formation de nuages, les précipitations (pluie) cesseraient totalement. Les cours d\'eau s\'assécheraient par ruissellement et évaporation, les nappes ne seraient plus réalimentées, entraînant la mort de la végétation, des animaux et de l\'espèce humaine.'
      }
    ],
    exercises: [
      {
        question: 'Associe chaque étape du cycle de l\'eau à sa définition :\n1. Condensation | 2. Ruissellement | 3. Infiltration | 4. Évaporation.\nDéfinitions : a) Lente pénétration de l\'eau dans le sol | b) Passage de l\'eau liquide en vapeur | c) Écoulement superficiel des eaux de pluie | d) Transformation de la vapeur en fines gouttelettes.',
        correction: '1 -> d (Condensation) | 2 -> c (Ruissellement) | 3 -> a (Infiltration) | 4 -> b (Évaporation).'
      },
      {
        question: 'Cite deux grands barrages hydroélectriques en Côte d\'Ivoire qui utilisent l\'énergie de l\'eau pour produire de l\'électricité.',
        correction: 'Le barrage de Kossou (sur le fleuve Bandama) et le barrage de Soubré (sur le fleuve Sassandra) [ou Buyo, Taabo, Ayamé].'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'une visite scolaire dans les locaux de l\'ANADER, un agronome présente une carte montrant que de nombreux puits du village sont asséchés en mars et que la petite rivière locale est gravement polluée par des orpailleurs clandestins qui y déversent des boues et des produits toxiques. Les paysans n\'ont plus d\'eau potable ni d\'eau pour arroser leurs pépinières de cacaoyers.',
      instructions: [
        '1. Nomme les deux étapes du cycle de l\'eau qui permettent aux puits et aux cours d\'eau de se remplir.',
        '2. Explique pourquoi l\'eau douce est qualifiée de ressource rare à l\'échelle de la Terre.',
        '3. Rédige un message d\'appel citoyen alertant sur les dangers de l\'orpaillage clandestin pour l\'accès à l\'eau potable.'
      ],
      solutionGuide: '1. Les deux étapes sont les précipitations (qui apportent l\'eau de pluie) et l\'infiltration (qui remplit la nappe phréatique souterraine alimentant les puits). 2. L\'eau douce est rare car 97 % de l\'eau mondiale est de l\'eau de mer salée imbuvable, et sur les 3 % d\'eau douce restante, plus des deux tiers sont congelés dans les calottes polaires. L\'eau douce liquide utilisable par l\'homme représente moins de 1 % de toute l\'eau de la planète. 3. Message : « L\'eau c\'est la vie ! Empoisonner nos rivières par l\'orpaillage clandestin, c\'est condamner nos enfants à la maladie et détruire nos plantations. Préservons nos cours d\'eau et nos nappes phréatiques, car sans eau propre, aucun développement n\'est possible ».'
    },
    examTraps: [
      'Confondre évaporation (liquide -> gaz) et condensation (gaz -> liquide).',
      'Croire que la quantité totale d\'eau sur Terre diminue (c\'est l\'eau DOUCE NON POLLUÉE qui devient rare, pas le volume total d\'eau).',
      'Oublier le rôle majeur de la forêt dans l\'évapotranspiration.'
    ],
    quickMemo: 'Eau : 3 états (liquide, gazeux, solide) | Cycle : Évaporation/Transpiration -> Condensation (nuages) -> Précipitations (pluies) -> Ruissellement + Infiltration (nappes phréatiques) | Rôle : vie, boisson, agriculture, barrages hydroélectriques (Kossou, Soubré) | Eau douce = moins de 3% sur Terre.',
    keywords: ['cycle de l\'eau', 'évaporation', 'condensation', 'précipitations', 'ruissellement', 'infiltration', 'nappe phréatique', 'barrages', '6e']
  },

  // ========================================================
  // 6ÈME - GÉOGRAPHIE : THÈME 2 - LEÇON 3
  // ========================================================
  {
    id: 'geo-6e-importance-de-impot',
    discipline: 'geographie',
    disciplineLabel: 'Géographie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'L\'homme et son milieu local en Côte d\'Ivoire',
    lessonTitle: 'L\'importance de l\'impôt dans le développement de ma région : Formes d\'impôts, contribuables, rôle de la DGI et civisme fiscal',
    objectifs: [
      'Définir l\'impôt comme un prélèvement financier obligatoire opéré par l\'État ou les collectivités locales sur les revenus et les biens des citoyens pour financer les dépenses publiques',
      'Identifier les deux grandes formes d\'impôts : l\'impôt direct (prélevé directement sur la personne ou ses biens, ex : IGR sur les salaires, impôt foncier sur les maisons, patente des commerçants) et l\'impôt indirect (inclus dans le prix des marchandises, ex : TVA, taxes sur le carburant, timbres d\'État)',
      'Définir la notion de contribuable (toute personne physique ou morale qui paie des impôts à l\'État : fonctionnaires, commerçants, artisans, propriétaires, entreprises)',
      'Présenter la Direction Générale des Impôts (DGI) et le Trésor Public comme les structures étatiques officielles chargées du recouvrement des recettes fiscales',
      'Expliquer l\'utilité capitale des recettes fiscales pour le développement d\'une région : financement des infrastructures publiques (écoles, collèges, hôpitaux, routes, électrification, eau potable, ponts) et paiement des salaires des agents publics (enseignants, médecins, policiers, pompiers)',
      'Démontrer que payer son impôt est un devoir civique fondamental et que l\'incivisme fiscal bloque le développement local'
    ],
    fullCourseContent: `1. Qu'est-ce que l'Impôt ?
- Définition : L'impôt est un versement financier obligatoire, sans contrepartie directe immédiate, prélevé par l'État ou les collectivités territoriales (mairies, conseils régionaux) sur les revenus, les bénéfices et le patrimoine des habitants et des entreprises afin de couvrir les dépenses d'intérêt public.
- Principe constitutionnel : En Côte d'Ivoire, payer ses impôts est un devoir civique prescrit par la Constitution pour chaque citoyen en fonction de ses capacités financières.

2. Les Différentes Formes d'Impôts :
Le système fiscal ivoirien distingue deux catégories majeures :
- 1. Les impôts directs :
  * Ce sont des impôts dont le montant est calculé et payé directement par le contribuable lui-même au service des impôts.
  * L'Impôt Général sur le Revenu (IGR) et l'impôt sur les salaires : Retenus sur la rémunération mensuelle des travailleurs et fonctionnaires.
  * L'impôt foncier : Payé annuellement par les propriétaires de maisons, terrains, magasins ou immeubles bâtis.
  * La patente et l'impôt synthétique : Payés par les commerçants, entrepreneurs, artisans, transporteurs et professions libérales.
- 2. Les impôts indirects :
  * Ce sont des impôts incorporés directement dans le prix de vente des biens de consommation et des services, que le consommateur paie sans s'en rendre compte lorsqu'il achète un produit. Le commerçant reverse ensuite cette taxe à l'État.
  * La Taxe sur la Valeur Ajoutée (TVA) : Prélevée sur les articles dans les supermarchés, les recharges téléphoniques, l'électricité, les vêtements (taux standard de 18 % en Côte d'Ivoire).
  * Les droits de douane : Taxes imposées sur les marchandises importées de l'étranger au port d'Abidjan ou de San-Pédro.
  * Les timbres fiscaux d'État (collés sur les extraits de naissance, certificats, passeports) et les taxes sur le carburant.

3. Les Contribuables : Qui Paie l'Impôt ?
- Définition : Le contribuable est toute personne physique (un individu travailleur, commerçant, propriétaire) ou morale (une société, une entreprise, une banque) soumise légalement au paiement de l'impôt.
- Règle fondamentale : Presque tout le monde paie des impôts ! Même un enfant ou un étranger qui achète un cahier ou une bouteille d'eau paie indirectement de la TVA à l'État.

4. Les Organes de Recouvrement de l'Impôt :
En Côte d'Ivoire, la collecte des impôts est assurée par :
- La Direction Générale des Impôts (DGI) : Organisme sous tutelle du Ministère de l'Économie et des Finances chargé de déterminer le montant des impôts (l'assiette fiscale), de contrôler les déclarations et de sensibiliser les populations par des caravanes et émissions d'information.
- Le Trésor Public : Reçoit et centralise les fonds collectés pour exécuter les paiements ordonnés par l'État.

5. L'Importance Vitale de l'Impôt pour le Développement Régional :
Sans recettes fiscales, aucun État ne peut fonctionner ni développer ses régions :
- Financement des infrastructures socio-économiques indispensables :
  * Dans l'éducation : Construction et équipement de lycées, collèges municipaux, écoles primaires, universités et octroi de bourses d'études aux élèves méritants.
  * Dans la santé : Construction d'hôpitaux généraux, maternités, centres de santé ruraux, achat d'ambulances et de médicaments essentiels.
  * Dans le transport et l'énergie : Bitumage des routes, construction de ponts, électrification des villages et adduction en eau potable.
  * Dans l'assainissement : Ramassage des ordures ménagères, curage des caniveaux et construction de marchés modernes.
- Prise en charge des services régaliens de l'État :
  * Paiement régulier des salaires des serviteurs publics : enseignants, infirmiers, médecins, policiers, gendarmes, militaires, magistrats, pompiers.
  * Équipement des forces de sécurité pour assurer la protection des biens et des personnes.

6. Le Civisme Fiscal : Un Devoir Républicain :
- Payer loyalement son impôt est le premier acte de patriotisme et de participation au bien commun.
- Refuser de payer l'impôt (la fraude fiscale) prive la mairie et la région des moyens financiers indispensables pour réparer les routes, ramasser les ordures et doter les collèges de tables-bancs.`,
    definitions: [
      {
        term: 'Impôt',
        definition: 'Prélèvement financier obligatoire de l\'État sur les ressources des contribuables pour financer les dépenses publiques.'
      },
      {
        term: 'Contribuable',
        definition: 'Toute personne physique ou morale assujettie au paiement d\'un impôt légal.'
      },
      {
        term: 'Impôt direct',
        definition: 'Impôt versé directement au fisc par la personne qui en est redevable (ex: IGR, impôt foncier).'
      },
      {
        term: 'Impôt indirect',
        definition: 'Impôt inclus dans le prix d\'achat des marchandises et payé par le consommateur (ex: TVA).'
      },
      {
        term: 'DGI',
        definition: 'Direction Générale des Impôts, structure publique ivoirienne chargée de calculer et recouvrer les impôts.'
      },
      {
        term: 'Civisme fiscal',
        definition: 'Comportement d\'un citoyen qui accomplit volontairement et fidèlement son devoir de payer ses impôts.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Distinction direct / indirect',
        statement: 'Impôt direct : payé nommément par le contribuable sur ses revenus/terrains | Impôt indirect : payé anonymement lors de l\'achat d\'un bien (TVA).'
      },
      {
        name: 'Lien impôt et développement',
        statement: 'Les impôts collectés financent directement les routes, les hôpitaux, les collèges et les salaires des fonctionnaires.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Expliquer à un citoyen l\'importance de payer son impôt foncier',
        procedure: '1. Rappeler que l\'impôt est une obligation légale inscrite dans la Constitution. 2. Expliquer que l\'argent versé à la mairie sert à ramasser les poubelles du quartier et éclairer les rues. 3. Montrer que sans impôt, il est impossible de construire des classes pour ses enfants. 4. Proposer le slogan : « Payer l\'impôt, c\'est développer ma commune ! »',
        tip: 'Insister sur le fait que la commune ne peut rien construire sans ressources fiscales propres.'
      }
    ],
    examples: [
      {
        statement: 'Un commerçant de quartier refuse de payer sa patente à la mairie sous prétexte qu\'il travaille pour lui-même. Pourquoi son attitude nuit-elle à la collectivité ?',
        solution: 'Le commerçant bénéficie des routes pour acheminer ses marchandises, de la sécurité assurée par la police et de l\'éclairage public devant sa boutique. En refusant de payer sa patente, il prive la commune des moyens d\'entretenir ces services publics indispensables dont il profite chaque jour.'
      }
    ],
    exercises: [
      {
        question: 'Indique par Vrai ou Faux pour chaque affirmation :\n1. Payer l\'impôt est un devoir civique obligatoire.\n2. Seuls les fonctionnaires paient des impôts.\n3. La TVA est un exemple d\'impôt indirect.\n4. Les impôts financent les salaires des enseignants et des soignants.',
        correction: '1. Vrai | 2. Faux (les commerçants, propriétaires et consommateurs paient aussi des impôts) | 3. Vrai | 4. Vrai.'
      },
      {
        question: 'Quelle structure étatique est chargée du recouvrement des impôts en Côte d\'Ivoire ?',
        correction: 'La Direction Générale des Impôts (DGI), sous l\'autorité du Ministère de l\'Économie et des Finances.'
      }
    ],
    evaluationSituation: {
      context: 'Tante Adjoua, qui a hérité de la maison de son père à Abobo-Avocatier, découvre dans sa boîte postale un avis d\'imposition de la DGI lui réclamant le paiement de 240 000 FCFA au titre de l\'impôt foncier. Très en colère, elle s\'écrie : « C\'est la maison de mon défunt père, l\'État n\'a pas mis un centime pour la construire, je refuse catégoriquement de payer ! ».',
      instructions: [
        '1. Identifie la nature exacte de l\'impôt réclamé à Tante Adjoua (direct ou indirect).',
        '2. Nomme la structure publique qui a émis cet avis d\'imposition.',
        '3. Rédige une argumentation bienveillante en trois points pour convaincre Tante Adjoua de s\'acquitter de son impôt afin d\'aider au développement de son quartier.'
      ],
      solutionGuide: '1. Il s\'agit d\'un impôt direct (l\'impôt foncier sur les propriétés bâties). 2. La structure est la Direction Générale des Impôts (DGI). 3. Argumentation : a) L\'impôt foncier est une obligation légale qui frappe tous les propriétaires immobiliers pour participer à la vie de la nation ; b) Les 240 000 FCFA versés serviront à bitumer la route passant devant sa concession, à installer des lampadaires contre les braquages nocturnes et à alimenter le collège municipal du quartier où vont ses enfants ; c) Refuser de payer expose à des pénalités financières et prive la commune d\'Abobo des fonds nécessaires pour lutter contre les ordures et les inondations.'
    },
    examTraps: [
      'Croire que les enfants ou les personnes sans salaire ne paient aucun impôt (ils paient la TVA sur chaque achat).',
      'Confondre impôt direct (payé au Trésor/DGI) et indirect (inclus dans la facture de marchandise).',
      'Penser que l\'impôt est une amende ou une punition (l\'impôt est une contribution normale au budget national).'
    ],
    quickMemo: 'Impôt = prélèvement financier obligatoire pour financer les services publics | 2 formes : Directs (IGR salaires, foncier maison, patente) & Indirects (TVA 18%, douanes, timbres) | Acteurs : DGI (fisc) + Trésor Public | Rôle : écoles, hôpitaux, routes, sécurité, salaires publics | Payer l\'impôt = acte de civisme et patriotisme.',
    keywords: ['impôt', 'impôt direct', 'impôt indirect', 'TVA', 'DGI', 'contribuable', 'civisme fiscal', 'développement régional', '6e']
  }
];
