import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_3E_HISTOIRE_GEO_COURSES: OfficialIvorianCourse[] = [
  // =========================================================================
  // 1. GÉOGRAPHIE 3E (BEPC) : LA CÔTE D'IVOIRE (MILIEU PHYSIQUE & ÉCONOMIE)
  // =========================================================================
  {
    id: 'geo-3e-cote-divoire-atouts-economie',
    discipline: 'geographie',
    disciplineLabel: 'Géographie (Classe de 3ème - BEPC)',
    level: '3e',
    levelLabel: 'Classe de 3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Troisième BEPC',
    chapter: 'La Côte d\'Ivoire : Milieu Physique, Atouts Naturels & Activités Économiques',
    lessonTitle: 'Relief, climats, hydrographie, agriculture d\'exportation et développement des infrastructures',
    objectifs: [
      'Localiser la Côte d\'Ivoire en Afrique de l\'Ouest et identifier ses limites frontalières (Golfe de Guinée, Libéria, Guinée, Mali, Burkina Faso, Ghana)',
      'Décrire les grands traits du milieu naturel ivoirien : relief étagé en gradins (plaines côtières, bas plateaux, plateaux du nord, montagnes de l\'Ouest avec le Mont Nimba à 1752 m)',
      'Identifier les zones climatiques (climat subéquatorial ou attiéen au sud, climat soudanien ou tropical sec au nord, climat de montagne à l\'ouest)',
      'Analyser le rôle moteur de l\'agriculture ivoirienne (cacao - 1er producteur mondial, café, hévéa, palmier à huile, anacarde/cajou, coton) et de l\'élevage',
      'Décrire les atouts industriels et les infrastructures de transport : Port Autonome d\'Abidjan (PAA), Port de San Pedro, réseau routier bitumé et aéroports'
    ],
    fullCourseContent: `I. LE MILIEU PHYSIQUE ET SES ATOUTS NATURELS :
1. Situation géographique et limites :
Située en Afrique occidentale intertropicale, la Côte d'Ivoire s'étend sur 322 462 km². Elle est bordée au sud par l'Océan Atlantique (Golfe de Guinée), à l'ouest par le Libéria et la Guinée, au nord par le Mali et le Burkina Faso, et à l'est par le Ghana.
2. Le relief :
Le relief ivoirien est généralement plat et s'élève en gradins du sud vers le nord :
- La zone littorale : basse, sableuse à lagunes à l'est (lagune Ébrié), rocheuse à falaises à l'ouest (vers Sassandra et San Pedro).
- La zone des plaines et des bas plateaux (altitude inférieure à 350 m) au centre et au sud.
- Les hauts plateaux granitiques du Nord (altitude entre 350 m et 500 m).
- La région montagneuse de l'Ouest (massifs de Man et chaîne des Dan, culminant au Mont Nimba à 1752 m).
3. Climat et végétation :
- Le Sud (domaine attiéen ou subéquatorial) : 4 saisons (deux saisons des pluies et deux saisons sèches), forte pluviosité (1500 à 2000 mm/an), couvert par la forêt dense humide.
- Le Nord (domaine soudanien ou tropical) : 2 saisons (une longue saison sèche et une saison des pluies de mai à octobre), couvert par la savane arborée et herbeuse.

II. L'ÉCONOMIE IVOIRIENNE : BASE AGRICOLE ET DIVERSIFICATION :
1. L'agriculture, moteur du développement :
- Cultures d'exportation :
  * Cacao : la Côte d'Ivoire est le premier producteur et exportateur mondial (plus de 40% de l'offre mondiale).
  * Anacarde (noix de cajou) : premier producteur et exportateur mondial.
  * Hévéa (caoutchouc naturel) : premier producteur africain.
  * Palmier à huile, café, banane dessert, ananas, coton au Nord.
- Cultures vivrières : igname, manioc, banane plantain, maïs, riz (base de la sécurité alimentaire).
2. L'industrie et les services :
- Agro-industrie développée : raffinage du sucre, transformation du cacao (Abidjan et San Pedro), conserveries de thon, huileries de palme.
- Secteur minier et énergétique : pétrole brut et gaz naturel au large de Grand-Bassam (champs Baleine et Baobab), or, manganèse.
3. Les infrastructures de transport :
- Les ports maritimes : Port Autonome d'Abidjan (hub maritime régional en eaux profondes) et Port Autonome de San Pedro (1er port mondial d'exportation de fèves de cacao).
- Le chemin de fer Abidjan-Ouagadougou (SITARAIL) et le réseau d'autoroutes reliant le nord et l'est du pays.`,
    definitions: [
      { term: 'Relief en gradins', definition: 'Disposition étagée du relief ivoirien qui s\'élève progressivement depuis les plaines côtières du littoral au sud jusqu\'aux plateaux du nord.' },
      { term: 'Culture d\'exportation (ou de rente)', definition: 'Production agricole cultivée principalement pour être vendue sur les marchés internationaux en devises (ex: cacao, café, anacarde, hévéa).' },
      { term: 'Climat attiéen', definition: 'Variété de climat subéquatorial régnant dans le Sud de la Côte d\'Ivoire, caractérisé par une forte humidité et quatre saisons alternées.' },
      { term: 'Hub portuaire', definition: 'Port de transbordement maritime servant de plate-forme de redistribution des marchandises pour toute une région continentale (les pays de l\'hinterland : Mali, Burkina, Niger).' }
    ],
    propertiesAndRules: [
      { name: 'Règle de zonage bioclimatique de la Côte d\'Ivoire', statement: 'Du Sud au Nord, la pluviométrie diminue progressivement, faisant passer la végétation de la forêt dense sempervirente aux forêts galeries puis à la savane soudanienne.' },
      { name: 'Rôle de l\'hinterland', statement: 'Les ports ivoiriens (Abidjan et San Pedro) desservent non seulement le marché national, mais constituent les débouchés maritimes naturels des pays sans littoral de la sous-région (Burkina Faso, Mali, Niger).' }
    ],
    formulas: [
      { name: 'Balance commerciale', formula: 'Solde commercial = Valeur des Exportations (X) - Valeur des Importations (M)', explanation: 'La Côte d\'Ivoire dégage traditionnellement un excédent commercial grâce à ses ventes de cacao, de caoutchouc et de pétrole.' }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Analyser une carte économique de la Côte d\'Ivoire',
        procedure: '1. Repérer le titre, la légende et l\'orientation de la carte. 2. Situer les zones forestières du Sud (cacao, café, palmier, hévéa) et les zones de savane du Nord (coton, anacarde, maïs, élevage bovin). 3. Noter les deux portes maritimes (Abidjan et San Pedro) et l\'axe ferroviaire vers le Burkina Faso.',
        tip: 'Toujours associer une production agricole à son aire climatique et géologique adaptée.'
      },
      {
        stepNumber: 2,
        title: 'Traiter une situation d\'évaluation en Géographie',
        procedure: 'Rédiger l\'introduction en définissant l\'espace ivoirien. Dans le corps du devoir, développer les atouts naturels, puis les productions économiques, et enfin proposer des pistes d\'amélioration (transformation locale des matières premières, préservation de la forêt).',
        tip: 'Éviter de lister de simples chiffres : expliquer l\'impact économique sur les recettes de l\'État et l\'emploi des jeunes.'
      }
    ],
    examples: [
      {
        statement: 'Situation d\'évaluation BEPC : « La Côte d\'Ivoire est le premier producteur mondial de cacao mais importe encore une grande partie de son chocolat et de ses produits manufacturés. Expliquez les conséquences de cette situation et proposez deux solutions économiques durables. »',
        solution: 'Introduction : La Côte d\'Ivoire occupe une place dominante sur le marché mondial des matières premières agricoles, notamment le cacao. Problème : La dépendance vis-à-vis des cours mondiaux fixés à l\'extérieur et le faible taux de transformation locale. Conséquences : Vulnérabilité des revenus des planteurs face à la fluctuation des cours boursiers (bourses de Londres et New York) et perte de valeur ajoutée et d\'emplois industriels. Solutions : 1) Développer des usines de broyage et de chocolaterie industrielle locale pour exporter des produits finis et semi-finis. 2) Diversifier les cultures et soutenir la consommation locale de produits transformés en Côte d\'Ivoire.'
      }
    ],
    exercises: [
      {
        question: 'Citez les quatre grands fleuves de Côte d\'Ivoire du Nord au Sud, et précisez une de leurs caractéristiques de navigabilité.',
        correction: 'Les quatre grands fleuves ivoiriens orientés Nord-Sud sont : le Cavally (frontière ouest avec le Libéria), le Sassandra, le Bandama (seul fleuve dont le bassin est entièrement situé en territoire ivoirien) et la Comoé. Caractéristique : Ces fleuves sont interrompus par de nombreux rapides et des chutes d\'eau (seuils rocheux), ce qui rend leur cours peu navigable pour les grands navires, mais très propice à l\'aménagement de barrages hydroélectriques (Kossou, Taabo, Buyo, Soubré).'
      }
    ],
    examTraps: [
      'Confondre le Mont Nimba (1752 m, à la frontière Guinée-Côte d\'Ivoire-Libéria) avec le Mont Tonkoui (1189 m près de Man).',
      'Dire que le cacao pousse au Nord : le cacao et le café exigent une forte humidité et poussent dans la moitié Sud forestière.',
      'Oublier que le Port Autonome de San Pedro est spécialisé dans le cacao et le bois, tandis que le Port d\'Abidjan est généraliste et industriel.'
    ],
    quickMemo: 'Géographie 3e : Climat du Sud (attiéen, forêt, cacao/café/hévéa) vs Climat du Nord (soudanien, savane, anacarde/coton). Fleuves : Cavally, Sassandra, Bandama, Comoé (barrages). Ports : Abidjan (hub régional) et San Pedro (cacao).',
    keywords: ['Côte d\'Ivoire', 'BEPC', 'Relief', 'Climat attiéen', 'Cacao', 'Anacarde', 'Port d\'Abidjan', 'San Pedro', 'Bandama', 'Agro-industrie']
  },

  // =========================================================================
  // 2. HISTOIRE 3E (BEPC) : LA RÉSISTANCE DES PEUPLES DE CÔTE D'IVOIRE
  // =========================================================================
  {
    id: 'histoire-3e-resistance-colonisation-cote-divoire',
    discipline: 'histoire',
    disciplineLabel: 'Histoire (Classe de 3ème - BEPC)',
    level: '3e',
    levelLabel: 'Classe de 3ème (BEPC)',
    serie: '3e_bepc',
    serieLabel: 'Troisième BEPC',
    chapter: 'La Conquête Coloniale & les Résistances Armées et Pacifiques en Côte d\'Ivoire',
    lessonTitle: 'La pénétration coloniale française et les résistances des peuples de Côte d\'Ivoire (1893-1915)',
    objectifs: [
      'Rappeler la création de la colonie de Côte d\'Ivoire par le décret du 10 mars 1893 avec pour premier gouverneur Louis-Gustave Binger',
      'Analyser la résistance militaire et stratégique de l\'Almamy Samory Touré dans le Nord et l\'Est ivoirien (Kong, Dabakala, Bouna)',
      'Expliquer la résistance acharnée des peuples Baoulé (1898-1910) et le rôle de leaders comme Kuassi Blé contre les colonnes expéditionnaires',
      'Décrire les méthodes brutales de pacification du gouverneur Gabriel Angoulvant (politique de la manière forte, impôt de capitation, désarmement, travail forcé, déportations)',
      'Comprendre les causes de l\'échec final des résistances ivoiriennes (supériorité de l\'armement européen, divisions internes, trahisons)'
    ],
    fullCourseContent: `I. LA CRÉATION DE LA COLONIE ET LE DÉBUT DE LA CONQUÊTE :
1. L'acte de naissance de la colonie :
La colonie française de la Côte d'Ivoire est officiellement créée par le décret du 10 mars 1893. Son premier gouverneur est l'explorateur Louis-Gustave Binger, qui installe la première capitale à Grand-Bassam.
2. Les traités de protectorat et les premières expéditions :
Les Français cherchent à relier leurs possessions du Soudan français (Mali actuel) à la côte atlantique pour contrer les ambitions britanniques et consolider leur empire colonial.

II. LES GRANDES FIGURES ET LES FOYERS DE RÉSISTANCE :
1. La résistance de l'Almamy Samory Touré (1893-1898) :
- Refusant la tutelle française, l'empereur du Wassoulou replie son armée et son empire vers le nord et l'est de la Côte d'Ivoire.
- Il installe sa capitale à Dabakala, contrôle Kong, Bondoukou et Bouna. Il pratique la tactique de la "terre brûlée" face aux armées coloniales françaises.
- Traqué par les colonnes des capitaines Gouraud et Marchand, il est finalement capturé par surprise à Guélémou (près de Touba) le 29 septembre 1898, puis déporté au Gabon où il meurt en 1900.
2. La résistance héroïque du peuple Baoulé (1898-1910) :
- Les Baoulé refusent la domination française, le portage forcé et la réquisition de vivres.
- Embuscades, guerre de partisans dans les forêts denses, destruction des lignes télégraphiques.
- Des chefs valeureux comme Kuassi Blé mènent la lutte armée contre les colonnes françaises (colonne Bailloud, colonne Bouet).
3. Les résistances des autres peuples :
- Chez les Dan et les Guéré à l'Ouest (massifs montagneux).
- La révolte des Bété (1900-1906) menée par Zokou Gbeuly à Daloa.
- La résistance des Agni et des Abbey (révolte des Abbey de 1910 le long de la voie ferrée à Agboville).

III. LA POLITIQUE DE LA "MANIÈRE FORTE" D'ANGOULVANT ET LA SOUMISSION :
1. L'arrivée du gouverneur Gabriel Angoulvant (1908) :
Constatant que quinze ans après sa création, la colonie n'est pas réellement contrôlée à l'intérieur des terres, Angoulvant applique la politique dite de la "manière forte" ou de "pacification intégrale".
2. Les mesures coercitives :
- Désarmement systématique des populations (confiscation de plus de 100 000 fusils de traite).
- Instauration et perception brutale de l'impôt de capitation obligatoire.
- Regroupement forcé des villages le long des pistes et voies ferrées pour faciliter le contrôle policier.
- Réquisition massive de main-d'œuvre pour le travail forcé (construction du chemin de fer et des routes).
- Arrestation, exécution ou déportation des chefs réfractaires (notamment au Congo ou en Mauritanie).
3. Les causes de l'échec des résistances :
- Supériorité écrasante de l'armement moderne français (fusils à répétition, canons, mitrailleuses).
- Absence d'unité et d'alliance entre les différents peuples et royaumes ivoiriens, les Français utilisant la stratégie du "diviser pour régner".`,
    definitions: [
      { term: 'Conquête coloniale', definition: 'Processus militaire, diplomatique et administratif par lequel une puissance européenne soumet un territoire africain à sa souveraineté.' },
      { term: 'Politique de la manière forte', definition: 'Méthode brutale instaurée en 1908 par le gouverneur Angoulvant, combinant expéditions punitives, désarmement, amendes et travail forcé pour soumettre les peuples récalcitrants.' },
      { term: 'Impôt de capitation', definition: 'Taxe financière perçue par tête d\'habitant adulte imposée par l\'administration coloniale pour forcer les Africains à entrer dans l\'économie monétaire.' },
      { term: 'Terre brûlée', definition: 'Stratégie militaire consistant à détruire récoltes, vivres et villages avant de battre en retraite pour priver l\'ennemi poursuivant de toute ressource.' }
    ],
    propertiesAndRules: [
      { name: 'Date clé de création de la Côte d\'Ivoire', statement: '10 mars 1893 : Décret signé par le président de la République française créant officiellement la colonie de Côte d\'Ivoire.' },
      { name: 'Capture de Samory Touré', statement: '29 septembre 1898 à Guélémou (près de Touba) par le capitaine Gouraud, marquant la fin de la résistance armée du Wassoulou.' }
    ],
    formulas: [
      { name: 'Chronologie des capitales historiques de la Côte d\'Ivoire', formula: 'Grand-Bassam (1893) → Bingerville (1900, suite à l\'épidémie de fièvre jaune) → Abidjan (1934) → Yamoussoukro (1983)', explanation: 'Succession officielle des capitales de la Côte d\'Ivoire.' }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Expliquer une cause de révolte',
        procedure: 'Toujours mentionner l\'impôt de capitation en argent, les abus du travail forcé (portage) et la perte de souveraineté des chefs traditionnels.',
        tip: 'Souligner que les populations ivoiriennes ne se sont pas soumises passivement mais ont opposé une farouche résistance pendant plus de 20 ans.'
      },
      {
        stepNumber: 2,
        title: 'Analyser l\'action du gouverneur Gabriel Angoulvant',
        procedure: 'Distinguer les 4 piliers de sa méthode : 1) Le désarmement, 2) L\'impôt de capitation, 3) Le regroupement des villages, 4) L\'internement des chefs.',
        tip: 'Le mot clé à retenir est "pacification par la manière forte" (1908-1915).'
      }
    ],
    examples: [
      {
        statement: 'Sujet type examen : « Pourquoi peut-on affirmer que la résistance des peuples Baoulé à la colonisation a été l\'une des plus tenaces de l\'histoire coloniale en Afrique de l\'Ouest ? »',
        solution: 'On peut l\'affirmer car les Baoulé ont combattu les troupes françaises pendant plus de dix ans (de 1898 à 1910). Grâce à leur maîtrise parfaite de la forêt équatoriale et à leur organisation décentralisée sans chef suprême unique à capturer, chaque clan résistait de façon autonome. Il a fallu l\'arrivée du gouverneur Angoulvant, l\'envoi de puissantes colonnes militaires, la destruction systématique des plantations d\'ignames et le désarmement forcé pour parvenir à pacifier la région en 1910.'
      }
    ],
    exercises: [
      {
        question: 'Qui était Zokou Gbeuly et dans quelle région s\'est illustrée son action de résistance ?',
        correction: 'Zokou Gbeuly était un grand chef de guerre du peuple Bété qui a dirigé la résistance contre l\'installation des troupes coloniales françaises dans la région du Haut-Sassandra (Daloa) entre 1900 et 1906, refusant l\'impôt et le travail forcé.'
      }
    ],
    examTraps: [
      'Affirmer que la Côte d\'Ivoire a été conquise pacifiquement en 1893 : faux, la conquête armée effective a duré jusqu\'en 1915 avec de multiples guerres de pacification.',
      'Oublier la date du 10 mars 1893 (fondation de la colonie).',
      'Confondre Samory Touré (empereur du Wassoulou capturé en 1898) avec Béhanzin (roi du Dahomey) ou Rabah.'
    ],
    quickMemo: 'Histoire 3e : 10 mars 1893 = création colonie (Binger). Résistance de Samory Touré (capturé à Guélémou le 29 sept 1898). Résistances des Baoulé (Kuassi Blé), des Abbey (1910) et des Bété (Zokou Gbeuly). Angoulvant (1908) impose la manière forte.',
    keywords: ['colonisation', 'conquete coloniale', 'resistance', 'resistances', 'resistance colonisation', 'resistances a la colonisation', 'colonisation en cote d ivoire', 'BEPC Histoire', 'Samory Touré', 'Guélémou', 'Kuassi Blé', 'Baoulé', 'Angoulvant', 'Manière forte', 'Agboville', 'Zokou Gbeuly', '10 mars 1893']
  }
];
