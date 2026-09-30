import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_EXTRA_HUMANITIES_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 6ÈME - FRANÇAIS (DPFC / PROGRAMME OFFICIEL MENA-CI)
  // ========================================================
  {
    id: 'francais-6e-grammaire-classes-fonctions-recit',
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    chapter: 'Grammaire Fondamentale & Schéma Narratif',
    lessonTitle: 'Nature et fonctions des mots, types de phrases et structure du récit (schéma narratif)',
    objectifs: [
      'Distinguer la nature (classe grammaticale) et la fonction d\'un mot dans la phrase',
      'Identifier et analyser le groupe nominal (Nom noyau, Déterminant, Adjectif qualificatif épithète, Complément du nom)',
      'Identifier les fonctions fondamentales : Sujet, COD, COI, Attribut du sujet et Compléments circonstanciels (Lieu, Temps, Manière)',
      'Maîtriser les 5 étapes du schéma narratif du texte de 6e (Situation initiale, Élément perturbateur, Péripéties, Dénouement, Situation finale)'
    ],
    fullCourseContent: `1. Nature et Fonction d'un mot :
- La Nature (ou classe grammaticale) : C'est l'identité invariable du mot telle qu'elle figure dans le dictionnaire (Nom, Pronom, Verbe, Adjectif, Déterminant, Préposition, Conjonction, Adverbe).
- La Fonction : C'est le rôle que joue le mot ou le groupe de mots dans la phrase (Sujet, Complément d'Objet Direct/Indirect, Attribut, Complément Circonstanciel, Épithète).

2. Le Groupe Nominal et ses Expansions :
- Le Nom Noyau est accompagné d'un déterminant (article défini, indéfini, possessif, démonstratif).
- Expansions du nom :
  * L'Adjectif qualificatif épithète : placé directement à côté du nom qu'il qualifie (ex : "Une *belle* pirogue").
  * Le Complément du nom (CDN) : relié au nom par une préposition (de, à, en, sans...) : (ex : "La lagune *d'Ébrié*").

3. Les Fonctions autour du Verbe :
- Le Sujet : Répond à la question "Qui est-ce qui ?" avant le verbe.
- Le COD (Complément d'Objet Direct) : Relié directement au verbe d'action, répond à la question "qui ?" ou "quoi ?" après le verbe (ex : "L'écolier ouvre *son cahier*").
- Le COI (Complément d'Objet Indirect) : Introduit par une préposition (à, de), répond à "à qui ?", "à quoi ?", "de qui ?", "de quoi ?".
- L'Attribut du Sujet : Relié au sujet par un verbe d'état (être, paraître, sembler, devenir, demeurer) et s'accorde en genre et en nombre avec le sujet (ex : "Cette mangue est *mûre*").

4. Le Schéma Narratif (Structure du Récit en 6e) :
- 1. Situation Initiale (SI) : Présentation du cadre spatio-temporel, des personnages et du calme初始.
- 2. Élément Modificateur / Déclencheur : Événement qui vient perturber l'équilibre (introduit par : "Tout à coup", "Un jour", "Soudain").
- 3. Péripéties : Suite d'actions, d'épreuves et de rebondissements vécus par le héros.
- 4. Dénouement : Résolution de la crise ou fin de l'épreuve.
- 5. Situation Finale (SF) : Retour à un nouvel équilibre stable (heureux ou malheureux).`,
    definitions: [
      {
        term: 'Classe grammaticale (Nature)',
        definition: 'Catégorie fixe à laquelle appartient un mot dans la langue française (ex: nom, adjectif, verbe).'
      },
      {
        term: 'Attribut du sujet',
        definition: 'Mot ou groupe de mots qui exprime une qualité ou un état attribué au sujet par l\'intermédiaire d\'un verbe d\'état (être, devenir, paraître, etc.).'
      },
      {
        term: 'Schéma narratif',
        definition: 'Modèle structural universel en 5 étapes ordonnées décrivant la progression dramatique d\'un récit littéraire.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de l\'accord de l\'attribut du sujet',
        statement: 'L\'attribut du sujet s\'accorde toujours en genre et en nombre avec le sujet du verbe d\'état.'
      },
      {
        name: 'Distinction COD / Attribut',
        statement: 'Après un verbe d\'action, le groupe nominal est un COD ; après un verbe d\'état (être, sembler, demeurer...), le mot est un Attribut du sujet.'
      }
    ],
    formulas: [
      {
        name: 'Structure du schéma narratif',
        formula: 'Récit = SI + Élément Perturbateur + Péripéties + Dénouement + SF',
        explanation: 'Enchaînement chronologique des cinq phases du récit.',
        unitOrCondition: 'Texte narratif en 6e'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Analyser la nature et la fonction d\'un mot',
        procedure: '1. Identifier la nature du mot dans le dictionnaire (Nom, verbe, adjectif...).\n2. Poser la question grammaticale pour trouver la fonction : \n   - "Qui est-ce qui + verbe ?" -> Sujet\n   - "Verbe + qui / quoi ?" -> COD\n   - "Verbe + à qui / à quoi / de qui / de quoi ?" -> COI\n   - "Verbe d\'état + adjectif/nom ?" -> Attribut du sujet\n3. Rédiger clairement : "[Mot] est un [Nature], fonction : [Fonction de quel mot]".',
        tip: 'Toujours préciser par rapport à quel mot s\'exerce la fonction (ex: COD du verbe "mange").'
      }
    ],
    examples: [
      {
        statement: 'Dans la phrase : "L\'élève ivoirien reste attentif pendant le cours.", donne la nature et la fonction des mots "attentif" et "pendant le cours".',
        solution: '- "attentif" : Nature = Adjectif qualificatif. Fonction = Attribut du sujet "L\'élève ivoirien" (relié par le verbe d\'état "reste").\n- "pendant le cours" : Nature = Groupe nominal prépositionnel. Fonction = Complément circonstanciel de temps (CCT) du verbe "reste".'
      }
    ],
    exercises: [
      {
        question: 'Indique la fonction exacte du groupe de mots souligné dans la phrase : "Aya offre *un magnifique pagne baoulé* à sa grand-mère."',
        correction: 'Question : "Aya offre quoi ?" -> "un magnifique pagne baoulé".\nIl est placé directement après le verbe d\'action "offre" sans préposition.\nConclusion : "un magnifique pagne baoulé" a pour fonction Complément d\'Objet Direct (COD) du verbe "offre".'
      }
    ],
    evaluationSituation: {
      context: 'Pendant les vacances scolaires à Man, Kouassi a assisté à une scène où un petit chien a sauvé un poussin tombé dans un caniveau. De retour en classe de 6e, son professeur de français lui demande de rédiger un court récit de 10 lignes respectant scrupuleusement les 5 étapes du schéma narratif.',
      instructions: [
        '1. Dégage les 5 étapes indispensables que Kouassi doit planifier au brouillon.',
        '2. Rédige une phrase type pour l\'élément perturbateur introduite par un connecteur temporel approprié.',
        '3. Rédige la situation finale montrant le retour à l\'apaisement.'
      ],
      solutionGuide: '1. Les 5 étapes : Situation initiale (le calme dans la cour), Élément perturbateur (chute du poussin), Péripéties (aboiements du chien, intervention du chien), Dénouement (le poussin est remonté sain et sauf), Situation finale (soulagement et joie dans la cour).\n2. Exemple d\'élément perturbateur : "Soudain, un violent coup de vent fit basculer un jeune poussin imprudent au fond du caniveau profond."\n3. Exemple de situation finale : "Désormais hors de danger, le poussin rejoignit sa mère tandis que les enfants caressaient chaleureusement le chien héroïque sous le soleil couchant."'
    },
    examTraps: [
      'Confondre la nature d\'un mot (ce qu\'il est toujours) avec sa fonction (le rôle qu\'il joue dans une phrase précise).',
      'Confondre un COD avec un attribut du sujet (attention au verbe d\'état !).'
    ],
    quickMemo: 'Nature = Identité du mot (Nom, Verbe, Adjectif). Fonction = Rôle (Sujet, COD, Attribut). Schéma narratif = SI + Perturbation + Actions + Dénouement + SF.',
    keywords: ['grammaire', 'nature', 'fonction', 'COD', 'COI', 'attribut du sujet', 'schéma narratif', '6e', 'français']
  },

  // ========================================================
  // 6ÈME - SVT (DPFC / PROGRAMME OFFICIEL MENA-CI)
  // ========================================================
  {
    id: 'svt-6e-cellule-vivant-regimes-alimentaires',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (SVT)',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    chapter: 'Unité du vivant & Nutrition des animaux',
    lessonTitle: 'La cellule unité structurale du vivant, régimes alimentaires et adaptation de l\'appareil digestif',
    objectifs: [
      'Observer et schématiser une cellule au microscope optique avec ses trois constituants fondamentaux (Membrane plasmique, Cytoplasme, Noyau)',
      'Classer les animaux selon leur régime alimentaire : Herbivores / Phytophages, Carnivores / Zoophages, Omnivores',
      'Établir la relation entre la denture d\'un mammifère et son régime alimentaire (dentition complète vs incomplète, présence de diastème)',
      'Comparer la longueur et la structure du tube digestif chez les herbivores et les carnivores'
    ],
    fullCourseContent: `1. La Cellule : Unité Fondamentale de Tous les Êtres Vivants :
- Découverte microscopique : Tous les êtres vivants (animaux, végétaux, champignons, bactéries) sont constitués de cellules.
- Les 3 constituants universels d'une cellule animale ou végétale :
  1. La Membrane plasmique : Enveloppe externe qui délimite la cellule et régule les échanges avec le milieu extérieur.
  2. Le Cytoplasme : Milieu intérieur gélatineux où baignent les organites cellulaires.
  3. Le Noyau : Organite central qui contient l'information génétique.
- Différence Végétale / Animale : La cellule végétale possède en plus une *paroi pectocellulosique* rigide, de grandes *vacuoles* et des *chloroplastes* (contenant la chlorophylle verte).

2. Les Régimes Alimentaires chez les Animaux :
- Herbivores (Phytophages) : Se nourrissent exclusivement de végétaux (herbe, feuilles, graines, fruits) (ex : la vache, le mouton, l'agouti).
- Carnivores (Zoophages) : Se nourrissent d'aliments d'origine animale (viande, insectes, poissons) (ex : le lion, le chat, la panthère).
- Omnivores : Consomment à la fois des aliments d'origine animale et végétale (ex : l'homme, le porc, le chimpanzé).

3. Adaptation de la Denture et de l'Appareil Digestif :
- Chez le Carnivore (ex: le chat / le lion) :
  * Incisives petites et tranchantes.
  * Canines (crocs) très développées, pointues et recourbées pour tuer et déchirer la chair.
  * Molaires en dents de scie (carnassières) pour cisailler la viande.
  * Tube digestif court (la viande se digère vite et fermente rapidement).
- Chez l'Herbivore (ex: la vache / le bœuf) :
  * Absence de canines à la mâchoire supérieure : présence d'une barre ou d'un *diastème* (espace sans dents) et d'un bourrelet corné.
  * Molaires à crêtes d'émail pour broyer l'herbe et les fibres dures.
  * Tube digestif très long avec un estomac complexe compartimenté (panse, bonnet, feuillet, caillette chez les ruminants) pour digérer la cellulose.`,
    definitions: [
      {
        term: 'Cellule',
        definition: 'La plus petite unité structurale et fonctionnelle vivante microscopique capable d\'assurer les fonctions de la vie.'
      },
      {
        term: 'Diastème (ou barre)',
        definition: 'Espace édenté situé entre les incisives et les molaires chez les mammifères herbivores (absence de canines).'
      },
      {
        term: 'Régime alimentaire',
        definition: 'Ensemble des aliments consommés de façon préférentielle et habituelle par une espèce animale pour subvenir à ses besoins nutritifs.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Théorie cellulaire universelle',
        statement: 'Tout être vivant est composé d\'une (unicellulaire) ou de plusieurs (pluricellulaire) cellules provenant de la division d\'une cellule préexistante.'
      },
      {
        name: 'Principe d\'adaptation anatomique',
        statement: 'La forme des dents et la longueur du tube digestif sont parfaitement adaptées au type d\'aliments consommés par l\'animal.'
      }
    ],
    formulas: [
      {
        name: 'Formule dentaire (Demi-mâchoire)',
        formula: 'FD = (i I + c C + pm PM + m M) / (i\' I + c\' C + pm\' PM + m\' M)',
        explanation: 'Nombre d\'incisives, canines, prémolaires et molaires par demi-mâchoire supérieure et inférieure.',
        unitOrCondition: 'Mammifères'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Réaliser le dessin d\'observation d\'une cellule au microscope',
        procedure: '1. Tracer un trait net au crayon à papier représentant le contour cellulaire (membrane).\n2. Dessiner le cytoplasme et placer le noyau sous forme d\'un disque foncé au centre.\n3. Tracer des flèches horizontales bien droites avec une règle pour pointer les éléments.\n4. Écrire les légendes alignées à droite (Membrane, Cytoplasme, Noyau).\n5. Ajouter un titre souligné et le grossissement utilisé (ex: Grossissement × 400).',
        tip: 'Ne jamais croiser les traits de rappel des légendes.'
      }
    ],
    examples: [
      {
        statement: 'On découvre le crâne d\'un animal inconnu. Il possède des canines très longues et pointues et des molaires coupantes en forme de ciseaux. Quel est son régime alimentaire ?',
        solution: 'L\'animal possède des canines développées en crocs et des molaires carnassières spécialisées dans la déchirure et le cisaillement des chairs.\nConclusion : Cet animal possède une denture caractéristique d\'un régime alimentaire carnivore (zoophage).'
      }
    ],
    exercises: [
      {
        question: 'Cite les trois parties fondamentales communes à toute cellule animale et végétale, et nomme un constituant exclusif aux cellules végétales.',
        correction: '1. Les trois parties fondamentales communes sont : la membrane plasmique, le cytoplasme et le noyau.\n2. Un constituant exclusif aux cellules végétales est : la paroi pectocellulosique (ou les chloroplastes / les vacuoles géantes).'
      }
    ],
    evaluationSituation: {
      context: 'Dans un village de Korhogo, un éleveur constate que ses bœufs broutent de l\'herbe pendant des heures puis s\'allongent à l\'ombre pour "mâcher à nouveau sans manger d\'herbe fraîche". Son fils en classe de 6e lui explique le phénomène de la rumination.',
      instructions: [
        '1. Nomme le régime alimentaire du bœuf.',
        '2. Explique pourquoi le bœuf a besoin d\'un tube digestif très long par rapport à celui d\'un chien.',
        '3. Décris brièvement ce qui se passe pendant la rumination.'
      ],
      solutionGuide: '1. Le bœuf est un herbivore (phytophage) ruminant.\n2. L\'herbe est riche en cellulose, une matière végétale très dure et lente à digérer, ce qui nécessite un très long tube digestif avec plusieurs poches stomacales pour permettre la fermentation bactérienne.\n3. La rumination consiste à faire remonter les boules d\'herbe stockées dans la panse vers la bouche pour les mâcher à nouveau longuement avec les molaires et les imprégner de salive avant de les avaler définitivement vers la caillette.'
    },
    examTraps: [
      'Confondre carnivore (mange de la viande) et herbivore (mange des végétaux).',
      'Oublier d\'indiquer le titre et le grossissement sur un schéma de cellule en SVT.'
    ],
    quickMemo: 'Cellule = Membrane + Cytoplasme + Noyau. Carnivore = Canines/crocs + Intestin court. Herbivore = Diastème/Bourrelet + Intestin très long + Ruminant.',
    keywords: ['cellule', 'microscope', 'membrane', 'cytoplasme', 'noyau', 'herbivore', 'carnivore', 'denture', '6e', 'SVT']
  },

  // ========================================================
  // 5ÈME - HISTOIRE-GÉOGRAPHIE (DPFC / PROGRAMME OFFICIEL MENA-CI)
  // ========================================================
  {
    id: 'hg-5e-grands-empires-afrique-zones-climatiques',
    discipline: 'histoire',
    disciplineLabel: 'Histoire-Géographie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    chapter: 'Histoire : Les Grands Empires Médiévaux Africains & Géographie : Les Zones Climatiques Mondiales',
    lessonTitle: 'Les empires du Ghana, du Mali et du Songhaï, et les grandes zones bioclimatiques de la planète',
    objectifs: [
      'Situer dans le temps et dans l\'espace les trois grands empires du Soudan occidental (Ghana, Mali, Songhaï)',
      'Identifier les facteurs de puissance : Commerce transsaharien (or, sel, esclaves), cavalerie militaire et organisation politique',
      'Nommer les grands empereurs historiques : Soundiata Keïta, Kankou Moussa, Sonni Ali Ber, Askia Mohammed',
      'Caractériser les 3 grandes zones climatiques mondiales (Zone chaude intertropicale, Zones tempérées, Zones froides polaires)'
    ],
    fullCourseContent: `I. HISTOIRE : LES GRANDS EMPIRES DU SOUDAN OCCIDENTAL (VIIIe - XVIe SIÈCLE) :

1. L'Empire du Ghana ("Le pays de l'or", du VIIIe au XIe siècle) :
- Capitale : Koumbi Saleh (composée d'une ville royale et d'une ville marchande musulmane).
- Économie et Puissance : Le roi (le Tounka ou Kaya Maghan) contrôlait les mines d'or de Bambouk et de Bouré et taxait le commerce transsaharien (échange d'or contre le sel gemme du Sahara).
- Déclin : Attaques des Almoravides au XIe siècle (1076) et assèchement du climat.

2. L'Empire du Mali (du XIIIe au XVe siècle) :
- Fondation : Fondé par Soundiata Keïta après sa victoire historique à la bataille de Kirina (1235) contre Soumaoro Kanté (roi du Sosso).
- Organisation : Proclamation de la *Charte de Kouroukan Fouga* (l'une des plus anciennes déclarations des droits de l'homme et du vivre-ensemble).
- Apogée : Sous l'empereur Kankou Moussa (1312-1337), célèbre pour son pèlerinage fastueux à La Mecque en 1324 où il distribua des tonnes d'or, plaçant le Mali sur les cartes du monde entier. Capitale : Niani ; centre intellectuel et religieux : Tombouctou et Djenné.

3. L'Empire Songhaï (du XVe au XVIe siècle) :
- Capitale : Gao sur le fleuve Niger.
- Grands souverains :
  * Sonni Ali Ber (1464-1492) : Bâtisseur militaire infatigable disposant d'une flotte fluviale et d'une cavalerie redoutable.
  * Askia Mohammed (1493-1528) : Réorganisateur administratif, promoteur de l'islam et mécène de l'Université de Sankoré à Tombouctou.
- Chute : Défaite de Tondibi en 1591 face aux troupes marocaines armées d'arquebuses à feu.

II. GÉOGRAPHIE : LES GRANDES ZONES BIOCLIMATIQUES DE LA TERRE :

1. La Zone Chaude Intertropicale (Entre les tropiques du Cancer et du Capricorne) :
- Climat Équatorial : Chaud et très humide toute l'année, une seule saison (forêt dense sempervirente).
- Climat Tropical (humide et sec) : Deux saisons alternées (une saison sèche et une saison des pluies). Végétation : Forêt claire et savanes (arborée, herbeuse). C'est le climat dominant en Côte d'Ivoire.
- Climat Désertique : Chaleur extrême le jour, précipitations quasi nulles (< 200 mm/an). Végétation : Végétation clairsemée, oasis (erg, reg).

2. Les Zones Tempérées (Entre les tropiques et les cercles polaires) :
- Alternance de 4 saisons bien marquées (Printemps, Été, Automne, Hiver).
- Climats océanique, continental et méditerranéen.

3. Les Zones Froides Polaires (Au-delà des cercles polaires) :
- Froid glacial permanent, températures très négatives, toundra et inlandsis (glaces éternelles).`,
    definitions: [
      {
        term: 'Commerce transsaharien',
        definition: 'Réseau commercial historique caravanier traversant le désert du Sahara, reliant l\'Afrique noire subsaharienne au Maghreb et à la Méditerranée (or, sel, étoffes, ivoire).'
      },
      {
        term: 'Charte de Kouroukan Fouga',
        definition: 'Constitution orale proclamée en 1235 par Soundiata Keïta et ses alliés, fixant les règles de paix sociale, de respect de la vie humaine et d\'organisation de la société mandingue.'
      },
      {
        term: 'Zone intertropicale',
        definition: 'Bande de la surface terrestre située entre le Tropique du Cancer (23°26\' N) et le Tropique du Capricorne (23°26\' S), caractérisée par des températures élevées toute l\'année.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Facteurs de prospérité des empires médiévaux',
        statement: 'La puissance des empires du Soudan reposait sur la maîtrise du fleuve Niger, une cavalerie efficace et le monopole du commerce de l\'or et du sel.'
      },
      {
        name: 'Règle de répartition des climats',
        statement: 'La température diminue de l\'équateur vers les pôles en raison de l\'inclinaison des rayons solaires par rapport à la courbure terrestre.'
      }
    ],
    formulas: [
      {
        name: 'Bilan pluviothermique (Diagramme ombrothermique)',
        formula: 'Mois sec si P ≤ 2T',
        explanation: 'Un mois est considéré comme écologiquement sec lorsque les précipitations P (en mm) sont inférieures ou égales au double de la température T (en °C).',
        unitOrCondition: 'P en mm, T en °C'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Analyser un événement historique médiéval africain',
        procedure: '1. Identifier l\'empire concerné (Ghana, Mali ou Songhaï).\n2. Préciser le siècle et les acteurs majeurs (souverains, conquérants).\n3. Analyser les causes de l\'essor ou de la chute.\n4. Souligner l\'héritage culturel et civilisationnel (Tombouctou, Charte de Kouroukan Fouga).',
        tip: 'Toujours associer chaque souverain à son empire correspondant.'
      }
    ],
    examples: [
      {
        statement: 'Explique pourquoi le pèlerinage de Kankou Moussa en 1324 a marqué l\'histoire mondiale.',
        solution: 'Lors de son pèlerinage à La Mecque en 1324, l\'empereur Kankou Moussa voyagea avec une suite immense de milliers de personnes et transporta des tonnes d\'or qu\'il distribua généreusement au Caire et en Arabie. Cette abondance provoqua une baisse du cours de l\'or pendant des années en Méditerranée et fit inscrire l\'Empire du Mali et son souverain sur le célèbre Atlas Catalan de 1375 comme le monarque le plus riche du monde connu.'
      }
    ],
    exercises: [
      {
        question: 'Associe chaque empereur à son empire : 1. Soundiata Keïta ; 2. Sonni Ali Ber ; 3. Kankou Moussa ; 4. Askia Mohammed.',
        correction: '1. Soundiata Keïta -> Empire du Mali\n2. Sonni Ali Ber -> Empire Songhaï\n3. Kankou Moussa -> Empire du Mali\n4. Askia Mohammed -> Empire Songhaï'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'un concours inter-collèges à Daloa, un élève de 5e doit présenter un exposé démontrant que l\'Afrique de l\'Ouest possédait de grandes civilisations structurées, riches et organisées bien avant l\'arrivée des Européens.',
      instructions: [
        '1. Présente deux exemples concrets tirés des empires du Mali et du Songhaï (villes universitaires, règles juridiques).',
        '2. Explique le rôle clé joué par le commerce transsaharien dans la richesse de ces empires.',
        '3. Rédige une brève conclusion sur la fierté du patrimoine historique africain.'
      ],
      solutionGuide: '1. Exemples concrets : La Charte de Kouroukan Fouga (1235) dans l\'Empire du Mali qui protégeait les droits humains, et les universités renommées de Tombouctou (comme l\'Université de Sankoré) et Djenné sous l\'Empire Songhaï où étudiaient des milliers de savants en droit, astronomie et théologie.\n2. Rôle du commerce : Ces empires contrôlaient les routes des caravanes à travers le Sahara, échangeant l\'or des mines du Sud contre le sel des mines du Nord, ainsi que des livres précieux et des soieries, prélevant des taxes douanières qui enrichissaient le trésor impérial.\n3. Conclusion : Ces réalisations prouvent le haut degré d\'organisation politique, économique et intellectuelle des sociétés africaines médiévales.'
    },
    examTraps: [
      'Confondre la bataille de Kirina (1235 - Victoire de Soundiata Keïta) avec la bataille de Tondibi (1591 - Défaite du Songhaï).',
      'Croire que la zone intertropicale ne comprend que des déserts (elle comprend aussi la forêt équatoriale et les savanes ivoiriennes).'
    ],
    quickMemo: 'Ghana = Or de Bambouk. Mali = Soundiata Keïta (1235), Kankou Moussa (1324). Songhaï = Sonni Ali Ber & Askia Mohammed (Gao, Tombouctou). Climat CI = Zone intertropicale chaude et humide.',
    keywords: ['Mali', 'Ghana', 'Songhaï', 'Soundiata Keïta', 'Kankou Moussa', 'transsaharien', 'climats', 'savane', '5e', 'histoire-géo']
  }
];
