import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_4E_PHYSIQUE_CHIMIE_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 4ÈME - THÈME OPTIQUE : LEÇON 1 - SOURCES ET RÉCEPTEURS DE LUMIÈRE
  // ========================================================
  {
    id: 'pc-4e-sources-recepteurs-lumiere',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Optique : Sources et Récepteurs de lumière',
    lessonTitle: 'Sources primaires, sources secondaires, récepteurs photochimiques et photoélectriques',
    objectifs: [
      'Définir une source de lumière et distinguer sources primaires et sources secondaires (objets éclairés)',
      'Classer les sources lumineuses en naturelles (Soleil, étoiles, lucioles) et artificielles (lampes, bougies, lasers)',
      'Définir un récepteur de lumière et distinguer récepteurs naturels (œil, peau, chlorophylle) et artificiels',
      'Décrire le fonctionnement du chlorure d\'argent (récepteur photochimique) et de la photorésistance LDR (récepteur photoélectrique)',
      'Identifier des applications technologiques des récepteurs de lumière (alarme, éclairage public, cellules photovoltaïques)'
    ],
    fullCourseContent: `1. Sources de lumière :
- Définition : Une source de lumière est un corps qui émet de la lumière.
- Deux grands types de sources :
  * Sources primaires de lumière : Corps qui émettent la lumière qu'ils produisent eux-mêmes.
    - Naturelles : le Soleil, les étoiles, les lucioles...
    - Artificielles : flamme d'une bougie, lampe à incandescence allumée, tube fluorescent, écran de téléviseur, laser...
  * Sources secondaires de lumière (objets éclairés) : Corps qui ne produisent pas de lumière, mais diffusent ou renvoient la lumière qu'ils reçoivent d'une autre source.
    - Naturelles : la Lune, la Terre, les planètes (Mars, Jupiter), les nuages...
    - Artificielles : un mur éclairé, un miroir, un tableau de classe, un écran blanc de cinéma.
- Condition de visibilité : Pour voir un objet, l'œil de l'observateur doit recevoir directement de la lumière émise ou diffusée par cet objet.

2. Récepteurs de lumière :
- Définition : Un récepteur de lumière est un corps sensible à la lumière ou dont les propriétés physiques/chimiques sont modifiées par la lumière.
- Classification :
  * Récepteurs naturels : L'œil (cellules rétiniennes transmettant le message au nerf optique), la peau humaine (bronzage, synthèse de vitamine D), la chlorophylle des feuilles vertes (photosynthèse pour fabriquer la matière organique).
  * Récepteurs artificiels :
    - Récepteur photochimique : Le chlorure d'argent (AgCl). Obtenu par mélange d'eau salée (NaCl) et de nitrate d'argent (AgNO3), ce précipité blanc reste blanc dans l'obscurité, mais NOIRCIT sous l'action de la lumière (photolyse libérant de l'argent métallique). C'est la base de la pellicule photographique argentique.
    - Récepteur photoélectrique : La photorésistance ou LDR (Light Dependent Resistor). Dans l'obscurité, la LDR a une très grande résistance et se comporte comme un isolant électrique (interrupteur ouvert). Éclairée, sa résistance chute fortement et elle devient conductrice de courant (interrupteur fermé).
    - Autres récepteurs : Les photopiles ou panneaux solaires (effet photovoltaïque générant une tension électrique).

3. Applications des récepteurs de lumière :
- Éclairage public automatique (allumage automatique des lampadaires à la tombée de la nuit grâce à une LDR).
- Systèmes d'alarme antivol (déclenchement d'une sonnerie dès l'apparition d'un faisceau lumineux dans une salle obscure).
- Calculatrices et panneaux solaires.`,
    definitions: [
      {
        term: 'Source primaire de lumière',
        definition: 'Corps qui produit lui-même la lumière qu\'il émet (ex: Soleil, flamme, lampe allumée).'
      },
      {
        term: 'Source secondaire de lumière',
        definition: 'Corps qui ne produit pas de lumière, mais diffuse celle qu\'il reçoit (ex: la Lune, un mur).'
      },
      {
        term: 'Récepteur photochimique',
        definition: 'Corps subissant une réaction chimique sous l\'effet de la lumière (ex: chlorure d\'argent qui noircit).'
      },
      {
        term: 'Photorésistance (LDR)',
        definition: 'Composant électronique dont la résistance électrique diminue fortement lorsqu\'il est éclairé.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Comportement électrique de la LDR',
        statement: 'Dans l\'obscurité, la LDR se comporte comme un isolant (interrupteur ouvert). À la lumière, la LDR se comporte comme un conducteur (interrupteur fermé).'
      },
      {
        name: 'Principe de visibilité',
        statement: 'Un objet n\'est visible que si de la lumière issue de cet objet pénètre dans l\'œil de l\'observateur.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Concevoir un circuit d\'alarme à LDR',
        procedure: '1. Brancher en série une pile, une sonnerie et une photorésistance LDR.\n2. Dans l\'obscurité, la LDR est isolante : aucun courant ne passe, la sonnerie est muette.\n3. Dès qu\'un intrus allume une lampe ou qu\'un rayon frappe la LDR, elle devient conductrice, fermant le circuit et activant la sonnerie.',
        tip: 'Le symbole de la LDR est un rectangle barré avec deux flèches obliques représentant la lumière incidente.'
      }
    ],
    examples: [
      {
        statement: 'Pourquoi la Lune brille-t-elle la nuit ? Est-elle une source primaire ?',
        solution: 'La Lune n\'est pas une source primaire car elle ne produit aucune lumière. C\'est une source secondaire qui diffuse vers la Terre la lumière qu\'elle reçoit du Soleil.'
      }
    ],
    exercises: [
      {
        question: 'Le chlorure d\'argent est-il un récepteur photoélectrique ou photochimique ? Justifie.',
        correction: 'C\'est un récepteur photochimique car la lumière provoque une réaction chimique de noircissement (décomposition en argent métallique noir).'
      }
    ],
    evaluationSituation: {
      context: 'Au laboratoire du collège de Facobly, deux élèves débattent : l\'un affirme que les feuilles de manguier de la cour sont à la fois sources et récepteurs de lumière, tandis que l\'autre soutient qu\'elles ne sont que des sources.',
      instructions: [
        '1. Définis une source et un récepteur de lumière.',
        '2. Explique si les feuilles de manguier sont une source primaire ou secondaire.',
        '3. Justifie qui a raison en analysant la présence de chlorophylle.'
      ],
      solutionGuide: '1. Source : corps qui émet ou diffuse de la lumière. Récepteur : corps sensible dont les propriétés changent sous l\'effet de la lumière.\n2. Les feuilles sont visibles de jour, donc elles diffusent la lumière du Soleil : ce sont des sources secondaires de lumière.\n3. De plus, les feuilles contiennent de la chlorophylle qui capte la lumière pour réaliser la photosynthèse : elles sont donc aussi des récepteurs de lumière. Le premier élève a donc parfaitement raison : les feuilles sont à la fois sources secondaires et récepteurs.'
    },
    examTraps: [
      'Croire que la Lune est une source primaire parce qu\'elle éclaire la nuit (c\'est une source secondaire).',
      'Confondre le comportement de la LDR : elle conduit à la lumière, elle isole dans le noir.'
    ],
    quickMemo: 'Source primaire = produit sa lumière. Source secondaire = diffuse. LDR = isolante dans le noir, conductrice à la lumière.',
    keywords: ['sources primaires', 'sources secondaires', 'LDR', 'chlorure argent', 'recepteur photochimique', 'physique 4e']
  },

  // ========================================================
  // 4ÈME - THÈME OPTIQUE : LEÇON 2 - PROPAGATION DE LA LUMIÈRE
  // ========================================================
  {
    id: 'pc-4e-propagation-rectiligne-lumiere',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Optique : Propagation de la lumière',
    lessonTitle: 'Propagation rectiligne de la lumière, chambre noire, vitesse et année-lumière',
    objectifs: [
      'Définir et distinguer les milieux transparents, translucides, opaques et homogènes',
      'Énoncer le principe de la propagation rectiligne de la lumière',
      'Définir et représenter un rayon lumineux et un faisceau lumineux',
      'Expliquer le principe de la chambre noire et caractériser l\'image obtenue (renversée et inversée)',
      'Connaître la vitesse de propagation de la lumière dans le vide (c = 300 000 km/s) et calculer le temps de parcours d = v × t',
      'Définir l\'année-lumière (a.l) comme unité astronomique de distance'
    ],
    fullCourseContent: `1. Milieu homogène et transparent :
- Milieu transparent : Milieu qui se laisse traverser par la lumière et à travers lequel on voit nettement les objets (l'air, l'eau limpide, le vide, le verre).
- Milieu translucide : Milieu qui laisse passer la lumière mais ne permet pas de distinguer nettement les objets (papier calque, verre dépoli).
- Milieu opaque : Milieu qui ne laisse pas passer la lumière (bois, mur en briques, métaux).
- Milieu homogène : Milieu qui présente les mêmes propriétés physiques et chimiques en tout point (ex : eau pure, air calme, vide).

2. Principe de propagation rectiligne de la lumière :
- Énoncé : Dans un milieu transparent et homogène, la lumière se propage en ligne droite.
- Expérience des plaques perforées : Un point lumineux n'est visible sur l'écran que lorsque les trous des plaques opaques sont rigoureusement alignés sur la même ligne droite avec la source.

3. Rayons lumineux et faisceaux lumineux :
- Rayon lumineux : Ligne droite fléchée modélisant le trajet suivi par la lumière. La flèche indique le sens de propagation.
- Faisceau lumineux : Ensemble de rayons lumineux émis par une même source (parallèle/cylindrique, convergent ou divergent).

4. Application : La chambre noire (Sténopé) :
- Description : Boîte opaque munie sur la face avant d'une minuscule ouverture appelée sténopé et sur la face arrière d'un écran translucide.
- Caractéristiques de l'image : L'image d'un objet lumineux (bougie) formée sur l'écran est RENVERSÉE (le haut se retrouve en bas) et INVERSÉE (la gauche à droite).
  * Ex : L'image de la lettre "p" devient la lettre "d", l'image de la lettre "q" devient la lettre "b".
- Explication : Conséquence directe de la propagation rectiligne : les rayons issus du haut de l'objet passent par le sténopé et frappent le bas de l'écran.
- Effet de la distance : Lorsqu'on rapproche la bougie du sténopé, la taille de l'image augmente ; lorsqu'on l'éloigne, elle diminue.

5. Vitesse de la lumière et Année-lumière :
- Vitesse dans le vide et dans l'air : c = 300 000 000 m/s = 3 × 10^8 m/s = 300 000 km/s.
  * Comparaison : La vitesse du son dans l'air est de seulement 330 m/s à 340 m/s. C'est pourquoi lors d'un orage, on voit d'abord l'éclair avant d'entendre le tonnerre !
- Temps de trajet Terre-Soleil (d = 150 000 000 km) :
  t = d / c = 150 000 000 / 300 000 = 500 secondes = 8 minutes et 20 secondes.
- L'année-lumière (symbole a.l) :
  * Définition : Distance parcourue par la lumière dans le vide en une année (365,25 jours).
  * 1 a.l = 365 × 24 × 3 600 × 300 000 km ≈ 9,46 × 10^12 km (environ 9 460 milliards de km).`,
    definitions: [
      {
        term: 'Milieu transparent',
        definition: 'Milieu laissant passer la lumière et permettant de voir nettement les objets au travers.'
      },
      {
        term: 'Propagation rectiligne',
        definition: 'Propriété de la lumière de se propager en ligne droite dans un milieu homogène et transparent.'
      },
      {
        term: 'Chambre noire',
        definition: 'Dispositif optique constitué d\'une boîte fermée avec sténopé donnant une image inversée et renversée.'
      },
      {
        term: 'Année-lumière (a.l)',
        definition: 'Unité de distance astronomique égale à la distance parcourue par la lumière en un an (environ 9,46 × 10^12 km).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Principe de propagation rectiligne',
        statement: 'Dans tout milieu transparent et homogène, la lumière se propage en ligne droite.'
      },
      {
        name: 'Formation de l\'image au sténopé',
        statement: 'L\'image d\'un objet à travers une chambre noire est renversée et inversée en raison du croisement rectiligne des rayons au sténopé.'
      }
    ],
    formulas: [
      {
        name: 'Relation distance - vitesse - temps',
        formula: 'd = c × t  <=>  t = d / c',
        explanation: 'c = 300 000 km/s dans le vide et l\'air.',
        unitOrCondition: 'd en km, c en km/s, t en s'
      },
      {
        name: 'Année-lumière',
        formula: '1 a.l ≈ 9,46 × 10^12 km',
        explanation: 'Distance parcourue par la lumière en 1 an.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer le temps de propagation de la lumière',
        procedure: '1. Identifier la distance d en kilomètres.\n2. Utiliser la célérité c = 300 000 km/s.\n3. Calculer t = d / c en secondes.\n4. Convertir en minutes et secondes si nécessaire (diviser par 60).',
        tip: 'Vérifier la concordance des unités (km avec km/s).'
      }
    ],
    examples: [
      {
        statement: 'L\'étoile Proxima du Centaure est située à 4,2 années-lumière. Combien de temps met sa lumière pour atteindre la Terre ?',
        solution: 'Par définition de l\'année-lumière, la lumière met exactement 4,2 ans pour nous parvenir.'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi observe-t-on l\'éclair avant d\'entendre le tonnerre alors qu\'ils sont émis au même instant ?',
        correction: 'La lumière voyage à 300 000 000 m/s alors que le son ne se déplace qu\'à 330 m/s dans l\'air (la lumière est environ un million de fois plus rapide). La lumière arrive donc quasi-instantanément à nos yeux.'
      }
    ],
    evaluationSituation: {
      context: 'Un élève de 4ème observe que la toiture percée d\'une maison produit des taches lumineuses bien rondes sur le sol par temps de soleil. Devant une chambre noire, il constate que l\'image de la lettre "p" donne la lettre "d".',
      instructions: [
        '1. Nomme les deux éléments principaux de la chambre noire.',
        '2. Donne les deux caractéristiques de l\'image formée.',
        '3. Explique à l\'aide du principe de la lumière pourquoi "p" devient "d".'
      ],
      solutionGuide: '1. Le sténopé (petit trou avant) et l\'écran translucide (face arrière).\n2. L\'image est renversée (sens haut-bas inversé) et inversée (sens gauche-droite inversé).\n3. La lumière se propageant en ligne droite dans l\'air, les rayons du haut du "p" traversent le trou et arrivent en bas de l\'écran (renversement), tandis que les rayons de la boucle à droite passent à gauche (inversion), formant ainsi la lettre "d".'
    },
    examTraps: [
      'Penser que l\'année-lumière est une unité de temps (c\'est une unité de DISTANCE !).',
      'Oublier que l\'image dans une chambre noire est à la fois renversée ET inversée.'
    ],
    quickMemo: 'Lumière en ligne droite. c = 300 000 km/s. Chambre noire = image renversée et inversée. 1 a.l = 9,46 × 10^12 km.',
    keywords: ['propagation rectiligne', 'chambre noire', 'stenope', 'vitesse lumiere', 'annee lumiere', 'physique 4e']
  },

  // ========================================================
  // 4ÈME - THÈME OPTIQUE : LEÇON 3 - PHASES DE LA LUNE ET ÉCLIPSES
  // ========================================================
  {
    id: 'pc-4e-phases-lune-eclipses',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Optique : Les Phases de la Lune et les Éclipses',
    lessonTitle: 'Ombres, lunaison, les 8 phases de la Lune et mécanismes des éclipses',
    objectifs: [
      'Définir et distinguer ombre propre, ombre portée et cône d\'ombre',
      'Expliquer la cause des phases de la Lune et définir la lunaison (29 jours et 13 heures)',
      'Nommer et ordonner les 8 phases successives de la Lune',
      'Expliquer le mécanisme et l\'alignement astronomique d\'une éclipse de Soleil (S-L-T) et d\'une éclipse de Lune (S-T-L)',
      'Distinguer éclipses totales et partielles, et comprendre la notion de cycle de Saros'
    ],
    fullCourseContent: `1. Identification des ombres :
- Ombre propre : Partie de l'objet opaque qui ne reçoit pas directement la lumière de la source.
- Cône d'ombre : Espace sombre (non éclairé) situé dans l'espace entre l'objet et l'écran.
- Ombre portée : Tache d'ombre projetée par l'objet opaque sur un écran ou sur le sol.
- Pénombre : Zone partiellement éclairée entourant le cône d'ombre lorsque la source de lumière est étendue.

2. Les phases de la Lune :
- Origine : La Lune est un corps opaque éclairé en permanence sur une moitié par le Soleil. En tournant autour de la Terre, la portion de sa face éclairée visible depuis la Terre change continuellement : ce sont les phases de la Lune.
- Durée de la lunaison (révolution synodique) : Environ 29,5 jours (29 jours et 13 heures).
- Ordre chronologique des 8 phases :
  1. Nouvelle Lune (Lune invisible dans le ciel de nuit, située entre Terre et Soleil).
  2. Premier croissant (visible à l'Ouest au coucher du Soleil).
  3. Premier quartier (demi-disque, forme de "p").
  4. Première Lune gibbeuse (plus de la moitié éclairée).
  5. Pleine Lune (disque complet illuminé, observable toute la nuit).
  6. Deuxième Lune gibbeuse (gibbeuse décroissante).
  7. Dernier quartier (demi-disque, forme de "d").
  8. Dernier croissant (visible à l'Est avant l'aube).

3. Les Éclipses :
- Éclipse de Soleil (alignement : SOLEIL - LUNE - TERRE) :
  * Se produit UNIQUEMENT à la NOUVELLE LUNE.
  * La Lune passe exactement entre le Soleil et la Terre et projette son ombre sur la surface terrestre.
  * Éclipse totale : observée dans la zone d'ombre portée de la Lune (obscurité en plein jour, couronne solaire visible).
  * Éclipse partielle : observée dans la zone de pénombre.
- Éclipse de Lune (alignement : SOLEIL - TERRE - LUNE) :
  * Se produit UNIQUEMENT à la PLEINE LUNE.
  * La Lune pénètre dans le cône d'ombre de la Terre.
  * Éclipse totale de Lune : la Lune est totalement dans l'ombre terrestre ; elle prend une couleur rougeâtre cuivrée due à la réfraction de la lumière solaire par l'atmosphère de la Terre.
- Périodicité (Saros) : Cycle d'environ 18 ans et 11 jours au terme duquel les éclipses se reproduisent dans une configuration quasi-identique.`,
    definitions: [
      {
        term: 'Ombre propre',
        definition: 'Partie non éclairée de l\'objet lui-même.'
      },
      {
        term: 'Ombre portée',
        definition: 'Trace d\'ombre projetée par l\'objet sur un écran ou sur une autre surface.'
      },
      {
        term: 'Éclipse de Soleil',
        definition: 'Phénomène d\'occultation du Soleil par la Lune, avec alignement Soleil - Lune - Terre à la nouvelle Lune.'
      },
      {
        term: 'Éclipse de Lune',
        definition: 'Phénomène où la Lune traverse le cône d\'ombre de la Terre, avec alignement Soleil - Terre - Lune à la pleine Lune.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Alignement éclipse solaire',
        statement: 'Soleil — Lune — Terre (à la nouvelle Lune). La Terre se trouve dans l\'ombre portée de la Lune.'
      },
      {
        name: 'Alignement éclipse lunaire',
        statement: 'Soleil — Terre — Lune (à la pleine Lune). La Lune pénètre dans le cône d\'ombre de la Terre.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Reconnaître premier quartier et dernier quartier',
        procedure: '1. Regarder la forme du croissant ou demi-disque.\n2. Ajouter mentalement une barre verticale sur le bord droit ou gauche.\n3. Si cela forme un "p", c\'est le Premier quartier (la Lune croît).\n4. Si cela forme un "d", c\'est le Dernier quartier (la Lune décroît).',
        tip: 'P pour Premier, D pour Dernier.'
      }
    ],
    examples: [
      {
        statement: 'Peut-on observer une éclipse de Soleil en pleine nuit ?',
        solution: 'Non, une éclipse de Soleil nécessite que le Soleil soit levé et que la Lune passe devant lui : elle a toujours lieu en plein jour à la nouvelle Lune.'
      }
    ],
    exercises: [
      {
        question: 'Quelle est la différence fondamentale d\'alignement entre éclipse de Soleil et éclipse de Lune ?',
        correction: 'Éclipse de Soleil : le Soleil, la Lune et la Terre sont alignés dans cet ordre (S-L-T). Éclipse de Lune : le Soleil, la Terre et la Lune sont alignés dans cet ordre (S-T-L).'
      }
    ],
    evaluationSituation: {
      context: 'À Tanguelan (Agnibilékrou), en plein jour ensoleillé, le ciel s\'assombrit soudainement et le Soleil prend l\'aspect d\'un anneau lumineux. Les élèves de 4ème veulent expliquer ce phénomène.',
      instructions: [
        '1. Nomme le phénomène observé.',
        '2. Donne l\'ordre d\'alignement des trois astres concernés.',
        '3. Précise lors de quelle phase de la Lune ce phénomène s\'est produit.'
      ],
      solutionGuide: '1. Il s\'agit d\'une éclipse de Soleil (éclipse annulaire/totale).\n2. Les trois astres sont alignés dans l\'ordre : Soleil — Lune — Terre.\n3. Ce phénomène se produit exclusivement lors de la phase de Nouvelle Lune.'
    },
    examTraps: [
      'Inverser l\'alignement Soleil-Terre-Lune (éclipse de Lune) avec Soleil-Lune-Terre (éclipse de Soleil).',
      'Croire qu\'une éclipse de Lune se produit à la nouvelle Lune (c\'est à la PLEINE LUNE).'
    ],
    quickMemo: 'Éclipse Soleil = Soleil-Lune-Terre (Nouvelle Lune). Éclipse Lune = Soleil-Terre-Lune (Pleine Lune). Lunaison = 29,5 jours.',
    keywords: ['phases de la lune', 'lunaison', 'eclipse solaire', 'eclipse lunaire', 'ombre propre', 'ombre portee', 'physique 4e']
  },

  // ========================================================
  // 4ÈME - THÈME OPTIQUE : LEÇON 4 - ANALYSE ET SYNTHÈSE DE LA LUMIÈRE BLANCHE
  // ========================================================
  {
    id: 'pc-4e-analyse-synthese-lumiere-blanche',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Optique : Analyse et Synthèse de la lumière blanche',
    lessonTitle: 'Décomposition du spectre, synthèse additive, filtres et couleur des objets',
    objectifs: [
      'Décrire l\'analyse (décomposition) de la lumière blanche à l\'aide d\'un prisme, d\'un verre d\'eau ou d\'un CD',
      'Citer dans l\'ordre les 7 couleurs du spectre visible (Violet, Indigo, Bleu, Vert, Jaune, Orange, Rouge)',
      'Expliquer la formation de l\'arc-en-ciel par les gouttes d\'eau',
      'Réaliser la synthèse de la lumière blanche avec le disque de Newton et les 3 couleurs primaires (Rouge, Vert, Bleu)',
      'Définir le rôle d\'un filtre et expliquer la couleur prise par un objet selon la lumière qui l\'éclaire'
    ],
    fullCourseContent: `1. Analyse de la lumière blanche (Dispersion) :
- Dispositifs de dispersion : Un prisme de verre, un récipient d'eau, un réseau de diffraction ou la surface d'un disque compact (CD).
- Observation : La lumière blanche du Soleil ou d'une lampe se décompose en une bande continue de couleurs appelée spectre de la lumière blanche.
- Les 7 couleurs du spectre (de la plus déviée à la moins déviée) :
  Violet, Indigo, Bleu, Vert, Jaune, Orange, Rouge (moyen mnémotechnique : VIB-V-JOR).

2. L'Arc-en-ciel :
- Phénomène naturel causé par la réfraction et la décomposition de la lumière blanche du Soleil par une infinité de gouttelettes d'eau de pluie en suspension dans l'atmosphère.
- Condition d'observation : L'observateur doit avoir le dos tourné au Soleil et faire face à la zone de pluie.

3. Synthèse de la lumière blanche (Reconstitution) :
- Disque de Newton : Disque divisé en secteurs peints aux couleurs de l'arc-en-ciel. Mis en rotation rapide, les couleurs se mélangent par persistance rétinienne et la surface apparaît blanche.
- Synthèse additive avec les 3 couleurs primaires de lumière (Rouge, Vert, Bleu) :
  * Rouge + Vert + Bleu = Blanc.
  * Rouge + Bleu = Magenta (couleur secondaire).
  * Rouge + Vert = Jaune (couleur secondaire).
  * Bleu + Vert = Cyan (couleur secondaire).

4. Rôle d'un filtre coloré :
- Un filtre absorbe certaines couleurs de la lumière blanche incidente et ne transmet (laisse passer) que la couleur correspondant à sa propre teinte.
  * Ex : Un filtre rouge absorbe toutes les composantes sauf le rouge.

5. Couleur des objets :
- La couleur d'un objet dépend de la nature de la lumière qui l'éclaire et des composantes qu'il diffuse ou absorbe :
  * Un objet blanc diffuse toutes les couleurs de la lumière qu'il reçoit (il n'en absorbe aucune).
  * Un objet noir absorbe toutes les couleurs de la lumière qu'il reçoit (il n'en renvoie aucune).
  * Couleur propre : C'est la couleur de l'objet lorsqu'il est éclairé en lumière blanche naturelle.
  * Éclairage par une lumière colorée :
    - Si l'objet est éclairé par une lumière contenant sa propre couleur, il diffuse cette couleur.
    - S'il est éclairé par une couleur qu'il absorbe totalement, il apparaît NOIR !
    - Ex : Une chemise rouge (absorbe bleu et vert, diffuse rouge) éclairée en lumière bleue apparaît NOIRE ! Une voiture bleue éclairée sous un lampadaire jaune (composé de rouge + vert) absorbe tout et paraît noire !`,
    definitions: [
      {
        term: 'Spectre visible',
        definition: 'Ensemble des radiations colorées monochromatiques (7 couleurs fondamentales) obtenues par décomposition de la lumière blanche.'
      },
      {
        term: 'Couleurs primaires (lumière)',
        definition: 'Les trois lumières de base (Rouge, Vert, Bleu) dont la superposition en proportions égales donne le blanc.'
      },
      {
        term: 'Couleur propre',
        definition: 'Couleur observée d\'un objet lorsqu\'il est éclairé par de la lumière blanche.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Synthèse additive des couleurs',
        statement: 'Rouge + Vert + Bleu = Blanc ; Rouge + Vert = Jaune ; Rouge + Bleu = Magenta ; Bleu + Vert = Cyan.'
      },
      {
        name: 'Règle de diffusion et absorption',
        statement: 'Un objet éclairé par une couleur qu\'il absorbe apparaît noir. Il ne diffuse que les composantes communes à sa couleur propre et à la lumière incidente.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer la couleur d\'un objet sous une lumière colorée',
        procedure: '1. Identifier la couleur propre de l\'objet (quelles couleurs il diffuse : ex, objet rouge diffuse le rouge, absorbe vert et bleu).\n2. Analyser la lumière incidente (quelles couleurs elle contient : ex, lumière jaune = rouge + vert).\n3. Chercher l\'intersection : la composante commune est le rouge.\n4. Conclure : l\'objet apparaîtra rouge.',
        tip: 'Si aucune couleur n\'est en commun, l\'objet est noir.'
      }
    ],
    examples: [
      {
        statement: 'Un objet rouge est éclairé par une lumière bleue. De quelle couleur apparaît-il ?',
        solution: 'L\'objet rouge absorbe le bleu et ne diffuse que le rouge. Comme la lumière incidente est bleue (ne contient pas de rouge), toute la lumière est absorbée : l\'objet apparaît noir.'
      }
    ],
    exercises: [
      {
        question: 'Quelles sont les 3 couleurs primaires de la lumière et que produit leur superposition simultanée ?',
        correction: 'Les 3 couleurs primaires sont le Rouge, le Vert et le Bleu. Leur superposition produit de la lumière blanche.'
      }
    ],
    evaluationSituation: {
      context: 'Un élève de 4ème au Lycée de Facobly achète une chemise bleue. Garé le soir sous un lampadaire de couleur jaune, son père s\'étonne : la chemise paraît totalement noire. L\'élève veut expliquer ce phénomène.',
      instructions: [
        '1. Rappelle de quelles lumières colorées simples est constituée la lumière jaune.',
        '2. Explique le comportement d\'un objet bleu vis-à-vis de la lumière.',
        '3. Déduis pourquoi la chemise bleue paraît noire sous l\'éclairage jaune.'
      ],
      solutionGuide: '1. La lumière jaune est composée de lumière rouge et de lumière verte.\n2. Un objet bleu absorbe toutes les composantes de la lumière sauf le bleu qu\'il diffuse.\n3. La lumière jaune ne contient aucune radiation bleue. La chemise bleue absorbe donc intégralement le rouge et le vert du lampadaire et ne renvoie aucune lumière à l\'œil de l\'observateur : elle paraît noire.'
    },
    examTraps: [
      'Confondre couleurs primaires de la lumière (synthèse additive : Rouge, Vert, Bleu) avec celles des peintres (synthèse soustractive : Cyan, Magenta, Jaune).',
      'Oublier qu\'un objet noir absorbe toutes les lumières et qu\'un objet blanc renvoie tout.'
    ],
    quickMemo: 'Lumière blanche = 7 couleurs (VIBVJOR). Primaires R-V-B. R+V+B=Blanc. Objet absorbe tout => apparaît noir.',
    keywords: ['lumiere blanche', 'arc en ciel', 'spectre', 'couleurs primaires', 'synthese additive', 'physique 4e']
  },

  // ========================================================
  // 4ÈME - THÈME COURANTS ALTERNATIFS : LEÇON 5 - AIMANT ET BOBINE
  // ========================================================
  {
    id: 'pc-4e-aimant-bobine-electroaimant',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Courants et tensions alternatifs : Aimant et Bobine',
    lessonTitle: 'Propriétés des aimants, comportement d\'une bobine traversée par un courant et électroaimant',
    objectifs: [
      'Identifier les différents types d\'aimants (droit, cylindrique, en U) et leurs propriétés magnétiques',
      'Définir les deux pôles d\'un aimant (Nord et Sud) et énoncer les lois d\'attraction et de répulsion',
      'Décrire une bobine et montrer qu\'une bobine parcourue par un courant se comporte comme un aimant',
      'Identifier les faces Nord et Sud d\'une bobine en fonction du sens du courant',
      'Décrire et schématiser un électroaimant (bobine + noyau de fer doux) et citer ses applications (relais, télérupteur)'
    ],
    fullCourseContent: `1. Les aimants :
- Définition : Un aimant est un corps qui possède des propriétés magnétiques : il attire le fer, le nickel, le cobalt et les alliages ferromagnétiques.
- Types d'aimants : Aimant droit, aimant en U, aimant cylindrique, aiguille aimantée.
- Les deux pôles d'un aimant :
  * Un aimant possède toujours deux pôles situés à ses extrémités : un pôle Nord (N) et un pôle Sud (S).
  * Suspendu librement, le pôle Nord s'oriente vers le pôle Nord géographique terrestre.
- Interactions entre aimants :
  * Deux pôles de même nom se REPOUSSENT (Nord repousse Nord, Sud repousse Sud).
  * Deux pôles de noms différents s'ATTIRENT (Nord attire Sud).

2. La Bobine :
- Définition : Une bobine est un enroulement régulier d'un long fil conducteur électrique en cuivre isolé (verni) sur un support généralement cylindrique.
- Comportement sous courant électrique :
  * Lorsqu'une bobine est parcourue par un courant continu, elle se comporte exactement comme un aimant droit : elle attire de la limaille de fer et dévie une aiguille aimantée.
  * Les deux extrémités de la bobine constituent deux faces magnétiques : une face Nord et une face Sud.
  * La nature des faces dépend du sens de circulation du courant électrique. Si on inverse les bornes de la pile, les faces Nord et Sud s'inversent !

3. L'Électroaimant :
- Description : Un électroaimant est constitué d'une bobine parcourue par un courant électrique à l'intérieur de laquelle est introduite une tige en fer appelée noyau de fer doux.
- Rôle du noyau : Le noyau de fer doux canalise et amplifie considérablement le champ magnétique de la bobine (l'attraction est beaucoup plus puissante).
- Propriété temporaire : L'aimantation du fer doux cesse dès que l'on coupe le courant électrique.
- Applications industrielles et domestiques :
  * Le relais électromagnétique (interrupteur télécommandé par électroaimant).
  * Le télérupteur (commande d'éclairage par boutons-poussoirs).
  * Disjoncteurs magnétiques, grues de triage de ferraille, gâches électriques de portes.`,
    definitions: [
      {
        term: 'Aimant',
        definition: 'Corps capable d\'attirer le fer, le nickel et le cobalt par ses extrémités appelées pôles.'
      },
      {
        term: 'Bobine',
        definition: 'Enroulement de fil de cuivre isolé sur un support cylindrique.'
      },
      {
        term: 'Électroaimant',
        definition: 'Ensemble formé par une bobine parcourue par un courant et contenant un noyau de fer doux qui renforce l\'attraction.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Loi d\'interaction magnétique',
        statement: 'Deux pôles de même nom se repoussent ; deux pôles de noms contraires s\'attirent.'
      },
      {
        name: 'Propriété magnétique de la bobine',
        statement: 'Toute bobine parcourue par un courant électrique se comporte comme un aimant dont la polarité dépend du sens du courant.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier les pôles d\'un aimant inconnu',
        procedure: '1. Approcher le pôle inconnu du pôle Nord d\'une aiguille aimantée de boussole.\n2. S\'il y a attraction, le pôle testé est un pôle Sud.\n3. S\'il y a répulsion, le pôle testé est un pôle Nord.',
        tip: 'Seule la répulsion permet de conclure avec certitude sur la nature d\'un pôle.'
      }
    ],
    examples: [
      {
        statement: 'Que se passe-t-il si l\'on inverse le sens du courant dans une bobine attirant un aimant ?',
        solution: 'Les faces magnétiques de la bobine s\'inversent. L\'interaction qui était une attraction devient alors une répulsion.'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi utilise-t-on un noyau de fer doux dans un électroaimant plutôt qu\'un acier trempé ?',
        correction: 'Le fer doux acquiert une forte aimantation temporaire en présence de courant et perd instantanément son magnétisme dès que le courant est coupé, ce qui permet un contrôle précis de l\'appareil (relais).'
      }
    ],
    evaluationSituation: {
      context: 'Au Lycée de Danané, trois aimants droits AB, CD et EF sont disposés sur la table : A attire C, D repousse E, et F est un pôle Sud connu.',
      instructions: [
        '1. Détermine la nature de chacun des pôles A, B, C, D, E et F.',
        '2. Indique s\'il y a attraction ou répulsion entre A et E, E et B, puis A et F.'
      ],
      solutionGuide: '1. F = Sud => E = Nord (car EF est un aimant). D repousse E(Nord) => D = Nord et C = Sud. A attire C(Sud) => A = Nord et B = Sud.\nRésumé : A = Nord, B = Sud, C = Sud, D = Nord, E = Nord, F = Sud.\n2. A(Nord) et E(Nord) => Répulsion. E(Nord) et B(Sud) => Attraction. A(Nord) et F(Sud) => Attraction.'
    },
    examTraps: [
      'Penser qu\'une bobine non alimentée attire le fer (elle n\'a de propriétés magnétiques que lorsqu\'elle est parcourue par un courant).',
      'Confondre les pôles d\'un aimant avec les charges positives et négatives.'
    ],
    quickMemo: 'Pôles identiques se repoussent, opposés s\'attirent. Bobine sous tension = aimant. Électroaimant = bobine + fer doux.',
    keywords: ['aimant', 'poles magnetiques', 'bobine', 'electroaimant', 'relais', 'physique 4e']
  },

  // ========================================================
  // 4ÈME - THÈME COURANTS ALTERNATIFS : LEÇON 6 - PRODUCTION D'UNE TENSION ALTERNATIVE
  // ========================================================
  {
    id: 'pc-4e-production-tension-alternative',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Courants et tensions alternatifs : Production d\'une tension alternative',
    lessonTitle: 'Induction électromagnétique, alternateur, dynamo de vélo et centrales électriques en Côte d\'Ivoire',
    objectifs: [
      'Mettre en évidence la production d\'une tension par le mouvement d\'un aimant devant une bobine',
      'Distinguer une tension continue (pile) d\'une tension alternative variable',
      'Décrire la constitution d\'un alternateur (rotor mobile et stator fixe)',
      'Expliquer le principe de fonctionnement de la génératrice de bicyclette (galet, aimant, bobine)',
      'Connaître les modes de production industrielle d\'électricité en Côte d\'Ivoire (centrales hydroélectriques Soubré, Taabo, Kossou et thermiques Azito)'
    ],
    fullCourseContent: `1. Production d'une tension à partir d'un aimant et d'une bobine :
- Expérience fondamentale : On déplace un aimant au voisinage de la face d'une bobine reliée à un galvanomètre à zéro central.
- Observations :
  * Lorsque l'aimant s'approche, l'aiguille dévie dans un sens.
  * Lorsque l'aimant s'éloigne, l'aiguille dévie dans le sens opposé.
  * Si l'aimant et la bobine sont tous deux immobiles, l'aiguille reste à zéro (aucune tension).
- Conclusion : Le déplacement d'un aimant au voisinage d'une bobine produit une tension électrique à ses bornes : c'est le phénomène d'induction électromagnétique.

2. Nature de la tension produite :
- Deux diodes électroluminescentes (DEL) montées en tête-bêche aux bornes de la bobine s'allument alternativement lorsque l'aimant tourne.
- Cette tension change périodiquement de sens et de valeur au cours du temps : c'est une tension alternative.
- Différence avec une pile : Une pile délivre une tension continue (de valeur constante et de signe fixe, visualisée comme une droite horizontale à l'oscilloscope).

3. L'Alternateur :
- Un alternateur est une machine qui transforme l'énergie mécanique en énergie électrique alternative.
- Il comporte deux parties fondamentales :
  * Le Rotor : partie mobile en rotation, constituée d'aimants ou d'électroaimants.
  * Le Stator : partie fixe immobile, constituée d'enroulements de bobines fixes.

4. Exemples d'application :
- La génératrice de bicyclette (couramment appelée dynamo) :
  * La roue du vélo entraîne par frottement le galet de la génératrice.
  * Le galet fait tourner un aimant (rotor) à l'intérieur ou devant une bobine fixe (stator).
  * Une tension alternative est créée aux bornes de la bobine et allume le phare du vélo.
- Production industrielle d'électricité en Côte d'Ivoire :
  * Centrales hydroélectriques : La force motrice de l'eau retenue dans les barrages entraîne des turbines reliées à des alternateurs géants (Barrage de Soubré : 275 MW, Taabo : 210 MW, Kossou : 176 MW, Buyo : 165 MW, Ayamé 1 et 2).
  * Centrales thermiques : La combustion du gaz naturel (ou du fioul) produit de la vapeur sous pression qui fait tourner des turbines couplées aux alternateurs (ex : Centrale thermique d'Azito à Abidjan).`,
    definitions: [
      {
        term: 'Tension alternative',
        definition: 'Tension électrique dont la valeur varie au cours du temps en changeant de signe (alternativement positive et négative).'
      },
      {
        term: 'Alternateur',
        definition: 'Générateur transformant l\'énergie mécanique en énergie électrique alternative, composé d\'un rotor (aimant) et d\'un stator (bobine).'
      },
      {
        term: 'Rotor',
        definition: 'Partie mobile tournante de l\'alternateur comportant l\'aimant.'
      },
      {
        term: 'Stator',
        definition: 'Partie fixe de l\'alternateur comportant la bobine.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Condition de production de tension',
        statement: 'Il faut obligatoirement un mouvement relatif entre l\'aimant et la bobine. Si l\'aimant est immobile par rapport à la bobine, aucune tension n\'est produite.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Expliquer le fonctionnement d\'une dynamo de bicyclette',
        procedure: '1. Le pneu en rotation entraîne le galet métallique par frottement.\n2. L\'axe du galet met en rotation l\'aimant (rotor).\n3. L\'aimant en rotation modifie le champ magnétique dans la bobine fixe (stator).\n4. Une tension alternative est créée aux bornes de la bobine et alimente la lampe.',
        tip: 'Quand le vélo s\'arrête, l\'aimant s\'immobilise et la tension tombe à 0 V (le phare s\'éteint).'
      }
    ],
    examples: [
      {
        statement: 'Pourquoi le phare du vélo s\'éteint-il dès que le cycliste s\'arrête ?',
        solution: 'À l\'arrêt, la roue ne tourne plus, le galet et l\'aimant s\'arrêtent de tourner. En l\'absence de mouvement relatif entre l\'aimant et la bobine, la tension produite devient nulle.'
      }
    ],
    exercises: [
      {
        question: 'Quelles sont les deux parties principales d\'un alternateur industriel ?',
        correction: 'Le rotor (partie mobile munie d\'aimants) et le stator (partie fixe contenant les bobines).'
      }
    ],
    evaluationSituation: {
      context: 'Des élèves visitent la centrale thermique d\'Azito puis observent le vélo d\'un camarade. Ils veulent expliquer la similarité de fonctionnement entre la centrale et la dynamo.',
      instructions: [
        '1. Définis le rôle d\'une bobine dans un alternateur.',
        '2. Nomme la partie mobile et la partie fixe d\'une génératrice de vélo.',
        '3. Décris l\'allure de la tension produite observée sur l\'écran d\'un oscilloscope.'
      ],
      solutionGuide: '1. La bobine constitue le stator : elle est le siège de la tension électrique induite créée par la rotation de l\'aimant.\n2. Partie mobile = rotor (l\'aimant couplé au galet) ; partie fixe = stator (la bobine de cuivre).\n3. La tension est alternative sinusoïdale : elle est représentée par une courbe ondulée qui monte au-dessus de zéro (positive) puis descend en-dessous de zéro (négative).'
    },
    examTraps: [
      'Penser qu\'un aimant immobile devant une bobine produit un courant continu (il ne produit RIEN).',
      'Confondre le rotor (qui tourne) et le stator (qui est statique/fixe).'
    ],
    quickMemo: 'Mouvement aimant + bobine => tension alternative. Alternateur = rotor (aimant tournant) + stator (bobine fixe).',
    keywords: ['alternateur', 'tension alternative', 'rotor', 'stator', 'dynamo', 'centrales electriques', 'physique 4e']
  },

  // ========================================================
  // 4ÈME - THÈME COURANTS ALTERNATIFS : LEÇON 7 - TENSION ALTERNATIVE SINUSOÏDALE
  // ========================================================
  {
    id: 'pc-4e-tension-alternative-sinusoidale',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Courants et tensions alternatifs : Tension alternative sinusoïdale',
    lessonTitle: 'Caractéristiques d\'une tension sinusoïdale : Période, fréquence, tension maximale et efficace',
    objectifs: [
      'Visualiser une tension alternative sinusoïdale sur l\'écran d\'un oscilloscope',
      'Définir la période T (en secondes) et déterminer sa valeur à partir du balayage horizontal',
      'Définir la fréquence N (en Hertz) et appliquer la relation N = 1 / T',
      'Déterminer la tension maximale Umax à partir de la sensibilité verticale',
      'Définir la tension efficace Ueff mesurée au voltmètre et appliquer Umax = 1,41 × Ueff'
    ],
    fullCourseContent: `1. Visualisation à l'oscilloscope :
- L'oscilloscope est un appareil de mesure qui trace la courbe de la tension électrique en fonction du temps : U = f(t).
- Une tension alternative sinusoïdale produit une courbe ondulée régulière appelée sinusoïde, qui alterne symétriquement entre valeurs positives et négatives.

2. Les caractéristiques d'une tension sinusoïdale :
- La Période T :
  * Définition : La période est la durée minimale nécessaire pour qu'un phénomène se reproduise identique à lui-même (durée d'un motif élémentaire : une alternance positive + une alternance négative).
  * Unité : La seconde (symbole s) ; sous-multiple usuel : la milliseconde (1 ms = 0,001 s = 10^(-3) s).
  * Mesure : T = (nombre de divisions horizontales pour un motif) × (sensibilité horizontale ou balayage b).
- La Fréquence N (ou f) :
  * Définition : Nombre de périodes accomplies par seconde. C'est l'inverse de la période : N = 1 / T.
  * Unité : Le Hertz (symbole Hz) ; multiples : kHz (10^3 Hz), MHz (10^6 Hz).
- La Tension Maximale Umax :
  * Définition : La plus grande valeur atteinte par la courbe (hauteur de la crête par rapport à l'axe central 0 V).
  * Unité : Le Volt (symbole V).
  * Mesure : Umax = (nombre de divisions verticales de la crête) × (sensibilité verticale s_v).
- La Tension Efficace Ueff :
  * Définition : Valeur de la tension mesurée directement avec un voltmètre branché en mode alternatif (AC).
  * Unité : Le Volt (symbole V).

3. Relation fondamentale entre Umax et Ueff :
- Pour toute tension alternative sinusoïdale, le rapport Umax / Ueff est constant et vaut racine carrée de 2 ≈ 1,41 :
  * Umax = 1,41 × Ueff
  * Ueff = Umax / 1,41.
- Exemple du secteur ivoirien (CIE) : Ueff = 220 V et fréquence N = 50 Hz.
  * Umax = 220 × 1,41 = 310,2 V ≈ 311 V.
  * Période T = 1 / 50 = 0,02 s = 20 ms.`,
    definitions: [
      {
        term: 'Période (T)',
        definition: 'Durée minimale d\'un cycle complet (motif élémentaire) de la tension, exprimée en secondes (s).'
      },
      {
        term: 'Fréquence (N)',
        definition: 'Nombre de cycles par seconde, calculée par N = 1/T et exprimée en Hertz (Hz).'
      },
      {
        term: 'Tension maximale (Umax)',
        definition: 'Valeur de crête la plus élevée atteinte par la tension sinusoïdale par rapport à l\'axe 0 V.'
      },
      {
        term: 'Tension efficace (Ueff)',
        definition: 'Valeur de la tension indiquée par un voltmètre en courant alternatif, reliée à Umax par Ueff = Umax / 1,41.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Relation entre tension crête et efficace',
        statement: 'Umax = racine(2) × Ueff ≈ 1,41 × Ueff pour une sinusoïde.'
      }
    ],
    formulas: [
      {
        name: 'Fréquence',
        formula: 'N = 1 / T',
        explanation: 'T doit impérativement être converti en secondes.',
        unitOrCondition: 'N en Hz, T en s'
      },
      {
        name: 'Tension efficace',
        formula: 'Ueff = Umax / 1,41',
        explanation: '1,41 correspond à racine de 2.',
        unitOrCondition: 'Tensions en Volts (V)'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Exploiter un oscillogramme',
        procedure: '1. Repérer le motif élémentaire (une crête vers le haut + un creux vers le bas).\n2. Compter le nombre de carreaux horizontaux (X) et multiplier par la sensibilité horizontale pour trouver T : T = X × b.\n3. Convertir T en secondes si donné en ms (diviser par 1000) et calculer N = 1 / T.\n4. Compter le nombre de carreaux verticaux (Y) du sommet par rapport à l\'axe 0 et multiplier par la sensibilité verticale : Umax = Y × s_v.\n5. Calculer Ueff = Umax / 1,41.',
        tip: 'Toujours convertir les millisecondes (ms) en secondes (s) avant de calculer la fréquence.'
      }
    ],
    examples: [
      {
        statement: 'Sur un oscilloscope, la sensibilité horizontale est 5 ms/div et un motif occupe 4 divisions. La sensibilité verticale est 5 V/div et la crête occupe 3 divisions. Calcule T, N, Umax et Ueff.',
        solution: 'T = 4 div × 5 ms/div = 20 ms = 0,02 s.\nN = 1 / 0,02 = 50 Hz.\nUmax = 3 div × 5 V/div = 15 V.\nUeff = 15 / 1,41 ≈ 10,64 V.'
      }
    ],
    exercises: [
      {
        question: 'Un appareil porte l\'indication N = 100 Hz et Ueff = 200 V. Calcule sa période T et sa tension maximale Umax.',
        correction: 'T = 1 / N = 1 / 100 = 0,01 s = 10 ms.\nUmax = 1,41 × Ueff = 1,41 × 200 = 282 V.'
      }
    ],
    evaluationSituation: {
      context: 'Au laboratoire de Physique, un générateur délivre une tension alternative dont la fréquence est affichée à 50 Hz et le voltmètre indique une tension de 220 V. Un élève veut vérifier la tension maximale de crête.',
      instructions: [
        '1. Nomme l\'appareil qui permet de mesurer directement la valeur efficace de 220 V.',
        '2. Calcule la période de cette tension en secondes et en millisecondes.',
        '3. Calcule la valeur maximale de la tension Umax.'
      ],
      solutionGuide: '1. Le voltmètre en mode alternatif (AC).\n2. T = 1 / N = 1 / 50 = 0,02 s = 20 ms.\n3. Umax = 1,41 × Ueff = 1,41 × 220 = 310,2 V (environ 310 V).'
    },
    examTraps: [
      'Calculer N = 1/T en laissant T en millisecondes (erreur de facteur 1000 !).',
      'Confondre la hauteur crête-à-crête (du bas tout en haut) avec Umax (du zéro jusqu\'au sommet).'
    ],
    quickMemo: 'T en secondes (1 ms = 0,001 s). N = 1/T en Hz. Umax = 1,41 × Ueff. Ueff au voltmètre.',
    keywords: ['tension alternative sinusoidale', 'periode T', 'frequence N', 'tension maximale', 'tension efficace', 'physique 4e']
  },

  // ========================================================
  // 4ÈME - THÈME COURANTS ALTERNATIFS : LEÇON 8 - LES DANGERS DU COURANT DU SECTEUR
  // ========================================================
  {
    id: 'pc-4e-dangers-courant-secteur-securite',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Courants et tensions alternatifs : Les Dangers du courant du secteur',
    lessonTitle: 'Caractéristiques du secteur CIE, électrisation, électrocution, court-circuit et protection',
    objectifs: [
      'Identifier les caractéristiques du courant du secteur délivré par la CIE en Côte d\'Ivoire (220 V, 50 Hz, Umax = 310 V)',
      'Identifier les trois bornes d\'une prise secteur (Phase P, Neutre N, Prise de Terre T) avec un tournevis testeur',
      'Définir et distinguer électrisation et électrocution',
      'Définir le court-circuit et la surcharge et identifier les risques d\'incendie',
      'Expliquer le rôle des dispositifs de sécurité : fusible, disjoncteur général, disjoncteur différentiel (30 mA), prise de terre, stabilisateur et onduleur',
      'Énoncer les règles essentielles de sécurité électrique domestique'
    ],
    fullCourseContent: `1. Caractéristiques du courant du secteur en Côte d'Ivoire (CIE) :
- Distribué par la Compagnie Ivoirienne d'Électricité (CIE).
- C'est une tension alternative sinusoïdale de :
  * Tension efficace : Ueff = 220 V.
  * Tension maximale : Umax = 1,41 × 220 V = 310 V.
  * Fréquence : N = 50 Hz.
  * Période : T = 1 / 50 = 0,02 s = 20 ms.

2. Les bornes d'une prise du secteur :
- Une prise de terre murale comporte 3 bornes :
  * La Phase (P) : fil sous tension dangereuse (couleur rouge ou marron). La lampe du tournevis testeur s'allume au contact de la phase.
  * Le Neutre (N) : potentiel nul (couleur bleue). Le testeur reste éteint.
  * La Terre (T) : borne métallique de protection (couleur vert/jaune). Le testeur reste éteint.
- Mesures au voltmètre :
  * U(Phase - Neutre) = 220 V.
  * U(Phase - Terre) = 220 V.
  * U(Neutre - Terre) = 0 V.

3. Les dangers du courant du secteur :
- Pour les personnes :
  * Le corps humain est conducteur d'électricité. Dès 25 V (en milieu humide) ou 50 V (en milieu sec), le courant devient dangereux.
  * Électrisation : Choc physiologique provoqué par le passage du courant dans le corps (secousses, brûlures, tétanisation des muscles, arrêt respiratoire).
  * Électrocution : Électrisation entraînant la MORT de la personne (asphyxie ou arrêt cardiaque).
  * Danger mortel : Toucher simultanément la Phase et le Neutre, ou toucher la Phase les pieds sur le sol (retour par la terre).
- Pour les installations :
  * Court-circuit : Contact accidentel direct entre le fil de Phase et le fil de Neutre (ou la Terre). Il produit une surintensité brutale, un échauffement violent des câbles et un départ d'incendie.
  * Surcharge : Branchement d'un trop grand nombre d'appareils puissants sur une même multiprise, créant une surintensité dangereuse.

4. Dispositifs de protection :
- Pour les appareils et l'installation :
  * Le Fusible : comporte un fil calibré qui fond (calibre dépassé) et coupe le circuit en cas de surintensité.
  * Le Disjoncteur général : coupe automatiquement le courant dans tout le bâtiment en cas de court-circuit ou si la puissance totale dépasse la valeur souscrite.
  * Le Stabilisateur : régule et stabilise la tension face aux baisses et surtensions du réseau.
  * L'Onduleur : sert de stabilisateur et de réserve d'énergie (batterie de secours pour éviter l'extinction brutale des ordinateurs).
- Pour la protection des personnes :
  * La Prise de terre : relie la carcasse métallique des appareils (réfrigérateur, machine à laver) à la terre.
  * Le Disjoncteur différentiel (sensibilité 30 mA) : compare en permanence l'intensité entrant par la Phase et celle sortant par le Neutre. Dès qu'une fuite de courant vers la terre dépasse 30 mA (par exemple si une personne touche une carcasse métallique sous tension), il coupe le courant en quelques millisecondes, sauvant la vie de la personne !

5. Règles d'or de sécurité :
- Ne jamais manipuler d'appareils branchés les mains ou pieds mouillés.
- Couper le disjoncteur général avant toute intervention (changer une ampoule, réparer une prise).
- Ne jamais surcharger les prises avec des multiprises en cascade.
- Remplacer immédiatement les fils dénudés ou fiches abîmées.`,
    definitions: [
      {
        term: 'Électrisation',
        definition: 'Ensemble des réactions physiologiques et traumatismes provoqués par le passage du courant dans le corps.'
      },
      {
        term: 'Électrocution',
        definition: 'Passage du courant électrique dans l\'organisme entraînant le décès de l\'individu.'
      },
      {
        term: 'Court-circuit',
        definition: 'Mise en contact direct accidentelle de deux conducteurs de polarité différente (phase et neutre).'
      },
      {
        term: 'Disjoncteur différentiel 30 mA',
        definition: 'Dispositif de sécurité coupant instantanément le circuit dès qu\'une fuite de courant de 30 mA est détectée vers la terre.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Protection par association terre + disjoncteur différentiel',
        statement: 'La carcasse métallique d\'un appareil doit toujours être reliée à la prise de terre pour qu\'en cas de défaut d\'isolement, le disjoncteur différentiel déclenche immédiatement.'
      }
    ],
    formulas: [
      {
        name: 'Tension crête du secteur',
        formula: 'Umax = 1,41 × Ueff = 1,41 × 220 V ≈ 310 V',
        explanation: 'Tension maximale atteinte par le secteur en Côte d\'Ivoire.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier les bornes d\'une prise à l\'aide d\'un voltmètre',
        procedure: '1. Mesurer la tension entre les bornes deux à deux.\n2. La seule paire donnant 0 V correspond aux bornes Neutre et Terre.\n3. La borne restante (qui donne 220 V avec les deux autres) est obligatoirement la PHASE.',
        tip: 'La Phase est la seule borne qui présente un potentiel élevé avec les deux autres.'
      }
    ],
    examples: [
      {
        statement: 'Une prise de courant a trois bornes A, B, C. On mesure U(AB) = 230 V, U(BC) = 0 V et U(AC) = 230 V. Quelle est la borne de Phase ?',
        solution: 'La borne B et la borne C donnent 0 V : ce sont le neutre et la terre. La borne A donne 230 V avec B et avec C : la borne A est reliée à la phase.'
      }
    ],
    exercises: [
      {
        question: 'Quelle est la différence cruciale entre électrisation et électrocution ?',
        correction: 'L\'électrisation désigne les dommages et chocs corporels dus au courant sans décès immédiat, tandis que l\'électrocution désigne spécifiquement une électrisation ayant causé la mort de la personne.'
      }
    ],
    evaluationSituation: {
      context: 'Au quartier Commerce de Facobly, un incendie se déclare dans une maison. L\'enquête révèle qu\'il est dû à un court-circuit sur une prise surchargée. De plus, une fillette a été électrisée en touchant la carcasse d\'un vieux réfrigérateur non relié à la terre.',
      instructions: [
        '1. Définis le court-circuit et explique comment il déclenche un feu.',
        '2. Explique le rôle de la prise de terre et du disjoncteur différentiel pour éviter l\'électrocution de la fillette.',
        '3. Donne 3 règles de sécurité à respecter impérativement.'
      ],
      solutionGuide: '1. Un court-circuit est le contact direct entre la phase et le neutre sans récepteur. Il provoque une élévation brutale de l\'intensité qui enflamme les isolants en plastique.\n2. Si la carcasse était reliée à la terre, le courant de fuite aurait été évacué directement vers le sol et le disjoncteur différentiel aurait immédiatement coupé le circuit avant que la fillette ne subisse de choc.\n3. Règles : ne jamais surcharger une prise, ne pas toucher un appareil avec les mains mouillées, faire vérifier le raccordement de la prise de terre.'
    },
    examTraps: [
      'Confondre électrisation (blessure/choc) et électrocution (décès obligatoire).',
      'Croire que le fusible protège les personnes contre les chocs électriques (le fusible protège les appareils et les fils contre les incendies, c\'est le disjoncteur différentiel qui protège les personnes).'
    ],
    quickMemo: 'Secteur CIE = 220 V / 50 Hz / Umax = 310 V. Phase = dangereux (rouge). Terre + différentiel 30 mA = protection humaine. Fusible = protection matériel.',
    keywords: ['courant du secteur', 'CIE', 'electrisation', 'electrocution', 'court-circuit', 'disjoncteur differentiel', 'prise de terre', 'physique 4e']
  },

  // ========================================================
  // 4ÈME - THÈME COURANTS ALTERNATIFS : LEÇON 9 - TRANSFORMATION, REDRESSEMENT ET LISSAGE
  // ========================================================
  {
    id: 'pc-4e-transformation-redressement-lissage',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Courants et tensions alternatifs : Transformation, redressement et lissage',
    lessonTitle: 'De l\'alternatif au continu : Transformateur, diodes, pont de Graetz, condensateur et adaptateur',
    objectifs: [
      'Décrire la constitution d\'un transformateur (bobine primaire, bobine secondaire, circuit magnétique) et son rôle (abaisseur/élévateur)',
      'Expliquer qu\'un transformateur conserve la nature et la fréquence de la tension alternative tout en modifiant sa valeur maximale',
      'Définir le rôle d\'une diode (sens passant) et expliquer le redressement simple alternance',
      'Définir le rôle d\'un pont de diodes (pont de Graetz) et expliquer le redressement double alternance',
      'Expliquer le rôle d\'un condensateur dans le lissage d\'une tension redressée',
      'Décrire la chaîne complète d\'un adaptateur secteur (chargeur de téléphone/ordinateur) pour obtenir une tension continue constante'
    ],
    fullCourseContent: `1. Le Transformateur :
- Description : Un transformateur est un quadripôle (4 bornes) composé de deux bobines électriquement distinctes mais couplées magnétiquement par un noyau de fer doux fermé.
  * Le circuit primaire (entrée) reçoit la tension alternative.
  * Le circuit secondaire (sortie) délivre la tension transformée.
- Fonctionnement :
  * Ne fonctionne QU'EN COURANT ALTERNATIF (ne fonctionne jamais avec une pile ou du continu !).
  * Conserve la forme sinusoïdale et la fréquence N de la tension d'entrée (N_sortie = N_entrée).
  * Modifie la valeur efficace et maximale de la tension :
    - Transformateur abaisseur : Usortie < Uentree (ex : 220 V -> 12 V ou 5 V).
    - Transformateur élévateur : Usortie > Uentree.

2. La Diode et le Redressement simple alternance :
- La Diode : Composant électronique à semi-conducteur qui ne laisse passer le courant que dans un seul sens, appelé sens passant (de l'anode vers la cathode). Dans l'autre sens (sens bloqué), elle se comporte comme un isolant.
- Redressement simple alternance :
  * Placée en série avec une tension sinusoïdale, la diode laisse passer l'alternance positive et bloque l'alternance négative (qui devient nulle).
  * L'oscillogramme montre des arches positives séparées par des plats à 0 V.

3. Le Pont de Diodes (Pont de Graetz) et Redressement double alternance :
- Le pont de diodes est un assemblage de 4 diodes disposées en pont.
- Redressement double alternance :
  * Il conserve les alternances positives ET redresse les alternances négatives en alternances positives.
  * Aucune alternance n'est perdue : le courant circule toujours dans le même sens dans le récepteur.
  * L'oscillogramme présente une succession continue d'arches positives.

4. Le Condensateur et le Lissage :
- Le condensateur est un composant capable de stocker de l'énergie électrique sous forme de charges électrostatiques.
- Rôle de lissage : Branché en dérivation aux bornes de la tension redressée, le condensateur se charge rapidement au sommet de chaque arche et se décharge lentement lorsque la tension baisse.
- Résultat : Les ondulations sont atténuées et la tension devient une tension continue quasi-constante (visualisée par une ligne horizontale à l'oscilloscope).

5. Constitution et fonctionnement d'un adaptateur secteur :
- Un adaptateur secteur (chargeur de smartphone, alimentation de PC portable) réalise successivement trois opérations :
  1. ABANDON/TRANSFORMATION : Le transformateur abaisse la tension du secteur de 220 V à une basse tension (ex : 5 V ou 12 V).
  2. REDRESSEMENT : Le pont de diodes redresse la tension alternative en tension redressée double alternance.
  3. LISSAGE : Le condensateur lisse la tension pour délivrer une tension continue constante indispensable aux appareils électroniques.`,
    definitions: [
      {
        term: 'Transformateur',
        definition: 'Appareil électrique modifiant la valeur d\'une tension alternative sans en changer la fréquence.'
      },
      {
        term: 'Diode',
        definition: 'Composant électronique ne laissant passer le courant électrique que dans un seul sens (sens passant).'
      },
      {
        term: 'Pont de diodes',
        definition: 'Ensemble de 4 diodes permettant le redressement double alternance.'
      },
      {
        term: 'Condensateur',
        definition: 'Composant électronique assurant le lissage de la tension en stockant et restituant des charges.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Conservation de fréquence par le transformateur',
        statement: 'La fréquence de la tension de sortie d\'un transformateur est rigoureusement égale à la fréquence de la tension d\'entrée.'
      },
      {
        name: 'Sens passant de la diode',
        statement: 'Le courant ne circule dans la diode que dans le sens indiqué par la flèche de son symbole normalisé.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Les 3 étapes de conversion alternatif -> continu',
        procedure: '1. Étape 1 : Transformation (abaissement de tension par le transformateur).\n2. Étape 2 : Redressement (suppression ou retournement des alternances négatives par diodes).\n3. Étape 3 : Lissage (effacement des ondulations par le condensateur en parallèle).',
        tip: 'Mémoriser l\'ordre chronologique : Transformateur -> Diodes -> Condensateur.'
      }
    ],
    examples: [
      {
        statement: 'Un transformateur alimenté en 220 V / 50 Hz délivre 12 V à sa sortie. Quelle est la fréquence de sortie ?',
        solution: 'Le transformateur conserve la fréquence : la fréquence de sortie est de 50 Hz.'
      }
    ],
    exercises: [
      {
        question: 'Quel composant électronique utilise-t-on pour réaliser le lissage d\'une tension redressée ?',
        correction: 'On utilise un condensateur branché en dérivation aux bornes de la sortie.'
      }
    ],
    evaluationSituation: {
      context: 'Un enfant reçoit un jouet fonctionnant sous une tension continue de 6 V fournie par 4 piles rondes de 1,5 V. Les piles s\'épuisent en 2 jours. Son grand frère en 4ème décide de fabriquer un adaptateur branché sur le secteur 220 V.',
      instructions: [
        '1. Indique la nature de la tension du secteur et celle requise par le jouet.',
        '2. Cite les 3 composants nécessaires à intégrer dans l\'adaptateur.',
        '3. Précise le rôle exact de chacun de ces 3 composants dans la transformation.'
      ],
      solutionGuide: '1. Secteur : tension alternative sinusoïdale 220 V. Jouet : tension continue constante 6 V.\n2. Les trois composants sont : un transformateur abaisseur (220 V -> 6 V), un pont de diodes et un condensateur.\n3. Rôles : le transformateur abaisse la tension de 220 V à 6 V ; le pont de diodes effectue un redressement double alternance en rendant toutes les alternances positives ; le condensateur lisse la tension pour la rendre continue et constante.'
    },
    examTraps: [
      'Croire qu\'un transformateur peut fonctionner avec une pile ou du courant continu (il a impérativement besoin d\'un courant alternatif variable).',
      'Confondre redressement (assuré par les diodes) et lissage (assuré par le condensateur).'
    ],
    quickMemo: 'Adaptateur = Transformateur (abaisse) + Pont de diodes (redresse) + Condensateur (lisse) => tension continue constante.',
    keywords: ['transformateur', 'diode', 'pont de diodes', 'condensateur', 'lissage', 'redressement', 'physique 4e']
  },

  // ========================================================
  // 4ÈME - THÈME LES IONS : LEÇON 10 - ATOMES ET IONS
  // ========================================================
  {
    id: 'pc-4e-atomes-et-ions',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Les Ions : Atomes et Ions',
    lessonTitle: 'Structure de l\'atome, formation des cations et anions, et identification en solution aqueuse',
    objectifs: [
      'Décrire la constitution de l\'atome (noyau chargé positivement et électrons négatifs) et sa neutralité électrique',
      'Définir un ion et distinguer un cation (atome ayant perdu des électrons) d\'un anion (atome ayant gagné des électrons)',
      'Connaître les noms et formules des principaux ions (Cu2+, Fe2+, Fe3+, Zn2+, Al3+, Cl-, SO4(2-), OH-)',
      'Définir une solution aqueuse ionique et sa neutralité électrique globale',
      'Identifier les ions métalliques et les anions par leurs tests de précipitation caractéristiques (soude, nitrate d\'argent, chlorure de baryum)'
    ],
    fullCourseContent: `1. Constitution de l'atome :
- Définition : L'atome est la plus petite particule constitutive de la matière.
- Deux parties fondamentales :
  * Le noyau : situé au centre de l'atome, il porte des charges électriques positives.
  * Les électrons : particules minuscules qui gravitent à grande vitesse autour du noyau, portant chacune une charge électrique élémentaire négative (-e).
- Neutralité électrique : Dans un atome, le nombre de charges positives du noyau est rigoureusement égal au nombre de charges négatives portées par les électrons. La charge globale de l'atome est nulle : l'atome est électriquement neutre.

2. Notion d'Ion :
- Définition : Un ion est un atome ou un groupement d'atomes qui a perdu ou gagné un ou plusieurs électrons :
  * Cation (Ion positif) : Atome ayant PERDU un ou plusieurs électrons.
    - Cu2+ (ion cuivre II) : atome de Cu ayant perdu 2 électrons.
    - Fe2+ (ion fer II / ferreux) : atome de Fe ayant perdu 2 électrons.
    - Fe3+ (ion fer III / ferrique) : atome de Fe ayant perdu 3 électrons.
    - Zn2+ (ion zinc) : a perdu 2 électrons.
    - Al3+ (ion aluminium) : a perdu 3 électrons.
    - Na+ (ion sodium) : a perdu 1 électron.
    - Ag+ (ion argent) : a perdu 1 électron.
    - H+ (ion hydrogène) : a perdu 1 électron.
  * Anion (Ion négatif) : Atome ayant GAGNÉ un ou plusieurs électrons.
    - Cl- (ion chlorure) : atome de Cl ayant gagné 1 électron.
    - OH- (ion hydroxyde) : groupement ayant gagné 1 électron.
    - SO4(2-) (ion sulfate) : groupement ayant gagné 2 électrons.
    - NO3(-) (ion nitrate) : groupement ayant gagné 1 électron.
    - CO3(2-) (ion carbonate) : groupement ayant gagné 2 électrons.

3. Solution aqueuse ionique :
- Une solution aqueuse est obtenue par dissolution d'un soluté dans l'eau (solvant).
- Une solution ionique contient à la fois des cations et des anions. Elle est globalement électriquement neutre : la somme des charges positives compense exactement la somme des charges négatives.

4. Tests d'identification des ions en solution aqueuse :
- Couleur propre en solution :
  * Cu2+ : solution bleue.
  * Fe2+ : solution vert pâle.
  * Fe3+ : solution rouille / jaune-orangé.
  * Zn2+, Al3+, Na+, Cl-, SO4(2-) : solutions incolores.
- Tests aux réactifs et précipités formés :
  * Cu2+ + Soude (NaOH) -> Précipité bleu gélatineux d'hydroxyde de cuivre Cu(OH)2.
  * Fe2+ + Soude -> Précipité vert pâle d'hydroxyde de fer II Fe(OH)2 (s'oxyde à l'air en rouille).
  * Fe3+ + Soude -> Précipité rouille d'hydroxyde de fer III Fe(OH)3.
  * Zn2+ + Soude -> Précipité blanc d'hydroxyde de zinc Zn(OH)2.
  * Cl- + Nitrate d'argent (AgNO3) -> Précipité blanc de chlorure d'argent AgCl qui NOIRCIT à la lumière.
  * SO4(2-) + Chlorure de baryum (BaCl2) -> Précipité blanc de sulfate de baryum BaSO4.`,
    definitions: [
      {
        term: 'Cation',
        definition: 'Ion chargé positivement résultant de la perte d\'un ou plusieurs électrons par un atome.'
      },
      {
        term: 'Anion',
        definition: 'Ion chargé négativement résultant du gain d\'un ou plusieurs électrons par un atome.'
      },
      {
        term: 'Précipité',
        definition: 'Composé solide insoluble qui se forme dans une solution lors d\'une réaction chimique entre deux réactifs.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Neutralité de la matière et des solutions',
        statement: 'Les atomes et les solutions aqueuses ioniques sont toujours globalement neutres électriquement.'
      },
      {
        name: 'Test au nitrate d\'argent',
        statement: 'Les ions chlorure Cl- réagissent avec les ions argent Ag+ pour former un précipité blanc d\'AgCl qui noircit sous l\'action de la lumière.'
      }
    ],
    formulas: [
      {
        name: 'Précipitation chlorure d\'argent',
        formula: 'Ag+ + Cl- -> AgCl (précipité blanc noircissant à la lumière)',
        explanation: 'Test spécifique des ions chlorure.'
      },
      {
        name: 'Précipitation sulfate de baryum',
        formula: 'Ba2+ + SO4(2-) -> BaSO4 (précipité blanc)',
        explanation: 'Test spécifique des ions sulfate.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier un ion métallique inconnu',
        procedure: '1. Noter la couleur naturelle de la solution (bleue = Cu2+, verte = Fe2+, rouille = Fe3+, incolore = Zn2+ ou Al3+).\n2. Verser quelques gouttes de soude NaOH.\n3. Observer la couleur du précipité : bleu = Cu(OH)2, vert pâle = Fe(OH)2, rouille = Fe(OH)3, blanc = Zn(OH)2 ou Al(OH)3.',
        tip: 'Le nitrate d\'argent sert pour Cl-, le chlorure de baryum pour SO4(2-).'
      }
    ],
    examples: [
      {
        statement: 'Un atome d\'aluminium Al possède 13 protons et 13 électrons. Combien d\'électrons possède l\'ion Al3+ ?',
        solution: 'L\'ion Al3+ a perdu 3 électrons : 13 - 3 = 10 électrons.'
      }
    ],
    exercises: [
      {
        question: 'Quel réactif utilise-t-on pour détecter les ions sulfate SO4(2-) et qu\'observe-t-on ?',
        correction: 'On utilise une solution de chlorure de baryum (BaCl2). On observe la formation d\'un précipité blanc de sulfate de baryum BaSO4.'
      }
    ],
    evaluationSituation: {
      context: 'Au laboratoire du collège, deux flacons de produits chimiques ont perdu leurs étiquettes. Dans le flacon A, l\'ajout de soude donne un précipité vert pâle. Dans le flacon B, l\'ajout de soude donne un précipité rouille.',
      instructions: [
        '1. Identifie l\'ion métallique présent dans le flacon A et nomme le précipité.',
        '2. Identifie l\'ion métallique présent dans le flacon B et nomme le précipité.',
        '3. Donne les formules chimiques respectives de ces deux ions.'
      ],
      solutionGuide: '1. Flacon A : ion fer II, le précipité est l\'hydroxyde de fer II Fe(OH)2.\n2. Flacon B : ion fer III, le précipité est l\'hydroxyde de fer III Fe(OH)3.\n3. Formules : ion fer II = Fe2+, ion fer III = Fe3+.'
    },
    examTraps: [
      'Penser qu\'un ion positif a gagné des protons (les protons ne bougent pas, c\'est une PERTE d\'électrons négatifs qui rend l\'ion positif).',
      'Confondre l\'ion fer II Fe2+ (vert pâle) et le fer III Fe3+ (rouille).'
    ],
    quickMemo: 'Cation (+) = perte d\'électrons. Anion (-) = gain d\'électrons. Soude : Cu2+ bleu, Fe2+ vert, Fe3+ rouille. AgNO3 : Cl- blanc qui noircit.',
    keywords: ['atome', 'ion', 'cation', 'anion', 'tests d identification', 'soude', 'nitrate d argent', 'physique 4e']
  },

  // ========================================================
  // 4ÈME - THÈME LES IONS : LEÇON 11 - TRANSFORMATION DU MÉTAL CUIVRE EN ION ET INVERSEMENT
  // ========================================================
  {
    id: 'pc-4e-transformation-cuivre-ion',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Les Ions : Transformation du cuivre en ion et inversement',
    lessonTitle: 'Oxydation du cuivre par l\'acide nitrique, réduction par le fer et électrolyse à anode soluble',
    objectifs: [
      'Décrire la transformation du métal cuivre Cu en ion Cu2+ par voie chimique (action de l\'acide nitrique HNO3)',
      'Identifier le gaz roux toxique dégagé : dioxyde d\'azote NO2',
      'Décrire la transformation inverse de l\'ion Cu2+ en cuivre métallique par action du fer : Fe + Cu2+ -> Fe2+ + Cu',
      'Décrire la transformation électrochimique du cuivre par électrolyse à anode soluble (amincissement de l\'anode et dépôt de cuivre à la cathode)',
      'Définir la nature du courant électrique dans les métaux (électrons libres) et dans les solutions (double migration d\'ions)'
    ],
    fullCourseContent: `1. Transformation du métal cuivre en ion cuivre II par voie chimique :
- Expérience : On verse de l'acide nitrique concentré (HNO3) sur des copeaux de cuivre métallique (rouge).
- Observations immédiates :
  * Ébullition vigoureuse et disparition des copeaux de cuivre.
  * Dégagement abondant d'un gaz ROUX très toxique : le dioxyde d'azote (NO2).
  * La solution incolore devient d'un BLEU intense caractéristique des ions cuivre II (Cu2+).
  * L'ajout de soude confirme la présence de Cu2+ par l'obtention d'un précipité bleu de Cu(OH)2.
- Équation de demi-réaction : Cu -> Cu2+ + 2e- (le cuivre perd 2 électrons).

2. Transformation de l'ion cuivre II en métal cuivre par voie chimique (Déplacement par le fer) :
- Expérience : On plonge un clou de fer métallique gris (Fe) dans une solution bleue de sulfate de cuivre (Cu2+ + SO4(2-)).
- Observations après quelques minutes/heures :
  * Un dépôt rouge pulvérulent de cuivre métallique (Cu) recouvre la surface du clou de fer.
  * La couleur bleue de la solution s'estompe et vire progressivement au VERT PÂLE.
  * L'ajout de soude produit un précipité vert pâle : présence d'ions fer II (Fe2+).
- Interprétation : Les ions Cu2+ captent 2 électrons pour redevenir des atomes de cuivre Cu, tandis que les atomes de fer Fe cèdent 2 électrons pour devenir des ions Fe2+ :
  * Cu2+ + 2e- -> Cu
  * Fe -> Fe2+ + 2e-
  * Équation-bilan globale : Fe + Cu2+ -> Fe2+ + Cu.

3. Transformation par voie électrochimique (Électrolyse à anode soluble de cuivre) :
- Montage : Deux électrodes plongées dans une solution de sulfate de cuivre reliées à un générateur continu :
  * Anode (reliée à la borne +) : lame de cuivre.
  * Cathode (reliée à la borne -) : tige de graphite.
- Observations et conclusions :
  * À l'anode (+) : La lame de cuivre est rongée et perd de la masse : Cu -> Cu2+ + 2e-.
  * À la cathode (-) : Un dépôt rouge brillant de cuivre métallique se forme sur le graphite : Cu2+ + 2e- -> Cu.
  * La solution conserve sa belle couleur bleue car la quantité d'ions Cu2+ consommée à la cathode est exactement compensée par celle produite à l'anode.
  * C'est le principe industriel du cuivrage et de l'affinage électrolytique du cuivre.

4. Nature du courant électrique :
- Dans les conducteurs métalliques : Le courant électrique est constitué par la circulation ordonnée d'électrons libres de la borne négative (-) vers la borne positive (+).
- Dans les solutions aqueuses électrolytiques : Le courant est assuré par la DOUBLE MIGRATION des ions :
  * Les cations (+) se déplacent vers la cathode (-).
  * Les anions (-) se déplacent vers l'anode (+).`,
    definitions: [
      {
        term: 'Dioxyde d\'azote (NO2)',
        definition: 'Gaz roux hautement toxique dégagé lors de l\'attaque du cuivre par l\'acide nitrique.'
      },
      {
        term: 'Électrolyse à anode soluble',
        definition: 'Électrolyse où l\'anode métallique s\'oxyde et se dissout pour reconstituer les ions de la solution déposés à la cathode.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Nature du courant électrique',
        statement: 'Dans les métaux : circulation d\'électrons libres. Dans les électrolytes : double migration des cations vers la cathode et des anions vers l\'anode.'
      }
    ],
    formulas: [
      {
        name: 'Attaque du cuivre par l\'acide',
        formula: 'Cu -> Cu2+ + 2e-',
        explanation: 'Oxydation du cuivre métal en ion cuivrique.'
      },
      {
        name: 'Déplacement du cuivre par le fer',
        formula: 'Fe + Cu2+ -> Fe2+ + Cu',
        explanation: 'Réaction spontanée d\'oxydoréduction.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mettre en évidence le transfert d\'électrons Fe -> Cu2+',
        procedure: '1. Préparer une solution bleue de sulfate de cuivre.\n2. Immerger une lame de fer propre.\n3. Constater le dépôt rouge de cuivre sur le fer.\n4. Tester la solution devenue verdâtre avec de la soude pour révéler le précipité vert de Fe(OH)2.\n5. Écrire l\'équation-bilan Fe + Cu2+ -> Fe2+ + Cu.',
        tip: 'Le sulfate SO4(2-) est spectateur et ne participe pas à l\'échange.'
      }
    ],
    examples: [
      {
        statement: 'Que devient un clou de fer plongé dans une solution de sulfate de cuivre après 2 jours ?',
        solution: 'Le clou se recouvre d\'un dépôt métallique rouge de cuivre (Cu) et la solution bleue devient verte par formation d\'ions fer II (Fe2+).'
      }
    ],
    exercises: [
      {
        question: 'Quel est le rôle de la cathode dans l\'électrodéposition du cuivre ?',
        correction: 'La cathode (reliée au pôle -) apporte des électrons aux ions Cu2+ de la solution, provoquant leur réduction en atomes de cuivre métallique qui s\'y déposent.'
      }
    ],
    evaluationSituation: {
      context: 'Au laboratoire, un élève fait tomber par mégarde un morceau de cuivre dans un flacon d\'acide nitrique. Un gaz roux se dégage et la solution devient bleue. Ensuite, son professeur verse cette solution sur de la poudre de fer.',
      instructions: [
        '1. Nomme le gaz roux dégagé et précise son danger.',
        '2. Nomme l\'ion responsable de la couleur bleue apparue.',
        '3. Écris l\'équation-bilan traduisant la réaction lorsque la solution est versée sur le fer.'
      ],
      solutionGuide: '1. Le gaz roux est le dioxyde d\'azote (NO2), très toxique et irritant pour les voies respiratoires.\n2. L\'ion responsable de la coloration bleue est l\'ion cuivre II (Cu2+).\n3. L\'équation-bilan de la réaction avec le fer est : Fe + Cu2+ -> Fe2+ + Cu (dépôt rouge de cuivre et coloration vert pâle de Fe2+).'
    },
    examTraps: [
      'Oublier que le gaz roux dégagé est le NO2 et non pas le dihydrogène (l\'acide nitrique réagit différemment de l\'acide chlorhydrique).',
      'Confondre la migration des ions : les cations positifs vont vers la cathode négative (-).'
    ],
    quickMemo: 'Cuivre + Acide nitrique => Cu2+ (bleu) + NO2 (gaz roux). Cu2+ + Fe => Cu (dépôt rouge) + Fe2+ (vert). Métaux = électrons, Solutions = ions.',
    keywords: ['cuivre', 'ion cuivre II', 'acide nitrique', 'dioxyde azote', 'electrolyse', 'anode soluble', 'physique 4e']
  },

  // ========================================================
  // 4ÈME - THÈME EAU POTABLE : LEÇON 12 - TRAITEMENT DE L'EAU POTABLE
  // ========================================================
  {
    id: 'pc-4e-traitement-eau-potable',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Eau potable : Traitement de l\'eau',
    lessonTitle: 'Étapes industrielles de potabilisation (SODECI), décryptage de facture d\'eau et écogestes',
    objectifs: [
      'Identifier la nécessité de traiter les eaux naturelles avant consommation et citer les polluants',
      'Décrire dans l\'ordre les 5 étapes du traitement physico-chimique de l\'eau à la SODECI',
      'Expliquer le rôle de chaque étape : floculation au sulfate d\'alumine, décantation, filtration, désinfection/stérilisation, neutralisation',
      'Lire et interpréter une facture d\'eau SODECI (ancien index, nouvel index, cubage consommé)',
      'Proposer des méthodes de traitement d\'urgence en milieu rural et adopter des gestes éco-citoyens contre le gaspillage'
    ],
    fullCourseContent: `1. Nécessité de traiter l'eau & Agents de pollution :
- L'eau brute de surface (fleuves Bandama, Sassandra, Comoé, lacs et lagunes) contient des polluants dangereux : microbes pathogènes (bactéries, virus, amibes), matières organiques en décomposition, particules d'argile en suspension et résidus de pesticides.
- En Côte d'Ivoire, la Société de Distribution d'Eau de Côte d'Ivoire (SODECI) capte ces eaux brutes et les traite pour les rendre potables selon les normes de santé publique.

2. Les 5 Étapes du traitement physico-chimique à la SODECI :
- Étape 1 : Floculation (ou Coagulation) :
  * On injecte dans l'eau un réactif coagulant : le sulfate d'alumine Al2(SO4)3, 18 H2O.
  * Les fines particules d'argile et matières organiques en suspension s'agglomèrent pour former de gros flocons visibles.
- Étape 2 : Décantation :
  * L'eau floculée repose dans de grands bassins de décantation. Les flocons lourds tombent et se déposent au fond sous l'effet de la pesanteur. L'eau surnageante devient limpide.
- Étape 3 : Filtration sur sable :
  * L'eau traverse d'épaisses couches de sable fin et de graviers qui retiennent les dernières particules fines résiduelles.
- Étape 4 : Désinfection (ou Stérilisation) :
  * Étape capitale visant à détruire les micro-organismes pathogènes pour éviter la typhoïde, le choléra et les diarrhées.
  * Procédés : Injection de dichlore gazeux (Cl2), d'eau de Javel, d'hypochlorite de calcium Ca(ClO)2 ou traitement à l'ozone (O3).
- Étape 5 : Neutralisation :
  * Ajustement du pH de l'eau pour qu'il soit proche de la neutralité (pH ≈ 7 à 7,5) afin d'éviter la corrosion des tuyaux ou l'entartrage.

3. Traitement de l'eau en milieu rural (eau de marigot) :
- Décantation dans un canari -> Filtration sur tissu propre ou filtre à sable/charbon -> Désinfection par ébullition prolongée (au moins 10 minutes) ou ajout de quelques gouttes d'eau de Javel (3 gouttes par litre d'eau claire).

4. Interprétation d'une facture d'eau SODECI :
- Éléments clés de la facture :
  * Ancien index : Chiffre du compteur relevé lors de la facture précédente (en m³).
  * Nouvel index : Chiffre relevé sur le compteur lors du passage récent de l'agent SODECI (en m³).
  * Cubage consommé (en m³) : Différence entre le nouvel index et l'ancien index :
    Cubage consommé = Nouvel index - Ancien index.
- 1 m³ d'eau équivaut à 1 000 litres. La facture applique une tarification progressive par tranche (tranche sociale, normale, etc.).

5. Éco-gestes pour préserver l'eau :
- Fermer le robinet pendant le brossage des dents ou le savonnage.
- Réparer rapidement les fuites de robinets et de chasses d'eau.
- Préférer les douches courtes aux bains.
- Arroser les plantes le soir pour limiter l'évaporation.`,
    definitions: [
      {
        term: 'Floculation',
        definition: 'Agglomération des matières en suspension dans l\'eau sous forme de flocons grâce au sulfate d\'alumine.'
      },
      {
        term: 'Décantation',
        definition: 'Séparation mécanique consistant à laisser reposer l\'eau pour que les impuretés lourdes se déposent au fond.'
      },
      {
        term: 'Désinfection',
        definition: 'Élimination des germes microbiens et bactéries de l\'eau par action de réactifs chimiques (chlore, ozone).'
      },
      {
        term: 'Cubage consommé',
        definition: 'Volume d\'eau utilisé en m³, calculé par la différence entre le nouvel index et l\'ancien index.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Ordre chronologique des étapes de potabilisation',
        statement: '1. Floculation -> 2. Décantation -> 3. Filtration -> 4. Désinfection (chloration) -> 5. Neutralisation.'
      }
    ],
    formulas: [
      {
        name: 'Calcul de la consommation d\'eau',
        formula: 'Cubage consommé (m³) = Nouvel Index - Ancien Index',
        explanation: '1 m³ = 1 000 L.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer la consommation sur une facture SODECI',
        procedure: '1. Relever le nouvel index (ex: 1 452 m³).\n2. Relever l\'ancien index (ex: 1 337 m³).\n3. Soustraire : 1 452 - 1 337 = 115 m³.\n4. Convertir en litres si demandé : 115 × 1 000 = 115 000 litres.',
        tip: 'Le nouvel index est toujours supérieur ou égal à l\'ancien index.'
      }
    ],
    examples: [
      {
        statement: 'Une facture indique : Ancien index = 1 337 m³, Nouvel index = 1 452 m³. Calcule le cubage consommé.',
        solution: 'Cubage consommé = 1 452 - 1 337 = 115 m³ (soit 115 000 litres d\'eau).'
      }
    ],
    exercises: [
      {
        question: 'Quel réactif utilise la SODECI pour réaliser l\'étape de floculation ?',
        correction: 'La SODECI utilise le sulfate d\'alumine de formule Al2(SO4)3, 18H2O.'
      }
    ],
    evaluationSituation: {
      context: 'À Abengourou, l\'eau du robinet provient d\'une rivière locale traitée par la station SODECI. Un habitant demande comment cette eau boueuse devient potable et comment sa facture est calculée.',
      instructions: [
        '1. Cite les 5 étapes du traitement de l\'eau dans l\'ordre.',
        '2. Explique le rôle de la désinfection.',
        '3. Écris la formule permettant de calculer le cubage consommé sur sa facture.'
      ],
      solutionGuide: '1. Les 5 étapes : Floculation, Décantation, Filtration, Désinfection (stérilisation), Neutralisation.\n2. La désinfection détruit les microbes et bactéries pathogènes par ajout de chlore ou d\'ozone pour rendre l\'eau sans danger pour la santé.\n3. Cubage consommé = Nouvel index - Ancien index (en m³).'
    },
    examTraps: [
      'Inverser l\'ordre entre décantation et filtration (on décante toujours AVANT de filtrer).',
      'Confondre eau limpide (claire à l\'œil) et eau potable (qui est exempte de microbes et chimiquement saine).'
    ],
    quickMemo: 'Potabilisation = Floculation -> Décantation -> Filtration -> Désinfection -> Neutralisation. Conso = Nouvel index - Ancien index.',
    keywords: ['eau potable', 'SODECI', 'floculation', 'decantation', 'filtration', 'desinfection', 'facture d eau', 'physique 4e']
  },

  // ========================================================
  // 4ÈME - THÈME EAU POTABLE : LEÇON 13 - QUALITÉ DE L'EAU ET MINÉRAUX
  // ========================================================
  {
    id: 'pc-4e-qualite-eau-durete-mineraux',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    serie: 'college_6e_4e',
    serieLabel: 'Collège (4ème)',
    chapter: 'Eau potable : Qualité de l\'eau et Minéraux',
    lessonTitle: 'Critères de potabilité OMS, dureté de l\'eau (Ca2+, Mg2+) et rôle nutritionnel des ions',
    objectifs: [
      'Définir une eau potable selon les normes de l\'OMS',
      'Distinguer paramètres organoleptiques (saveur, odeur, couleur) et physico-chimiques (pH, conductivité, dureté)',
      'Définir la dureté d\'une eau et l\'attribuer aux ions calcium (Ca2+) et magnésium (Mg2+)',
      'Réaliser les tests de caractérisation des ions minéraux dans une eau minérale (Ca2+ à l\'oxalate d\'ammonium, SO4(2-) au BaCl2, Cl- au AgNO3)',
      'Expliquer l\'importance biologique des ions minéraux pour le corps humain (croissance osseuse, influx nerveux, globules rouges)'
    ],
    fullCourseContent: `1. Notion d'eau potable et normes de l'OMS :
- Définition : Une eau est dite potable lorsqu'elle peut être consommée quotidiennement sans danger pour la santé humaine et qu'elle respecte les normes sanitaires fixées par l'Organisation Mondiale de la Santé (OMS).
- Paramètres d'évaluation :
  * Paramètres organoleptiques : Couleur, transparence, odeur et saveur. (Attention : une eau claire n'est pas forcément potable et une eau avec une légère saveur minérale peut l'être).
  * Paramètres physico-chimiques :
    - pH : doit être compris entre 6,5 et 8,5.
    - Conductivité électrique : liée à la minéralisation totale (≤ 500 µS/cm).
    - Dureté : teneur en sels de calcium et de magnésium dissous.
  * Substances toxiques (à éliminer rigoureusement) : Métaux lourds (plomb, mercure, arsenic, cadmium).
  * Teneurs maximales autorisées : Nitrates ≤ 50 mg/L, Nitrites ≤ 0,2 mg/L, Fer ≤ 0,3 mg/L, Chlorures ≤ 200 mg/L, Sulfates ≤ 500 mg/L.

2. La Dureté de l'eau :
- Définition : La dureté de l'eau caractérise sa teneur en ions calcium (Ca2+) et en ions magnésium (Mg2+).
- Classification :
  * Eau douce (0 à 60 mg/L de Ca2+) : mousse facilement avec le savon, mais peut corroder les canalisations métalliques si elle est acide.
  * Eau dure (> 120 mg/L de Ca2+) : ne mousse pas facilement avec le savon, entartre les chauffe-eaux et les tuyauteries par dépôt de calcaire (tartre CaCO3), mais apporte du calcium à l'organisme.

3. Identification des ions dans une eau minérale (ex: AWA, Céleste) :
- Test des ions Calcium (Ca2+) :
  * On ajoute de l'oxalate d'ammonium (C2O4(2-)).
  * On observe un précipité blanc d'oxalate de calcium.
- Test des ions Sulfate (SO4(2-)) :
  * On ajoute du chlorure de baryum (BaCl2).
  * On observe un précipité blanc de sulfate de baryum BaSO4.
- Test des ions Chlorure (Cl-) :
  * On ajoute du nitrate d'argent (AgNO3).
  * On observe un précipité blanc de chlorure d'argent AgCl qui noircit à la lumière.

4. Importance des ions minéraux dans notre alimentation :
- Ions Calcium (Ca2+) et Magnésium (Mg2+) : Essentiels à la formation et à la consolidation des os et des dents, particulièrement chez le nourrisson et la femme enceinte ; préviennent l'ostéoporose ; le magnésium est un relaxant neuromusculaire anti-fatigue.
- Ions Sodium (Na+) et Potassium (K+) : Régulent la pression artérielle et assurent la propagation de l'influx nerveux.
- Ions Sodium (Na+) et Chlorure (Cl-) : Maintiennent l'équilibre hydrique du corps et la contraction musculaire.
- Ions Fer (Fe2+) : Constituant indispensable de l'hémoglobine des globules rouges pour le transport du dioxygène. Leur carence provoque l'anémie.
- Ions Bicarbonate (HCO3-) : Facilitent la digestion et régulent le pH gastrique.`,
    definitions: [
      {
        term: 'Eau potable',
        definition: 'Eau saine, exempte de micro-organismes pathogènes et de poisons chimiques, consommable sans risque.'
      },
      {
        term: 'Dureté de l\'eau',
        definition: 'Teneur globale de l\'eau en sels dissous de calcium (Ca2+) et magnésium (Mg2+).'
      },
      {
        term: 'Paramètres organoleptiques',
        definition: 'Propriétés perceptibles par les sens : goût, odeur, couleur et transparence.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Test spécifique du calcium',
        statement: 'Les ions Ca2+ réagissent avec l\'oxalate d\'ammonium en donnant un précipité blanc.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Décrypter l\'étiquette d\'une eau minérale',
        procedure: '1. Séparer la liste en cations (Ca2+, Mg2+, Na+, K+) et anions (HCO3-, SO4(2-), Cl-, NO3-).\n2. Repérer l\'ion majoritaire (le plus élevé en mg/L).\n3. Évaluer la dureté en observant la teneur en Ca2+ (faible = douce, élevée = dure).\n4. Vérifier que la teneur en nitrates est bien inférieure à 50 mg/L.',
        tip: 'Pour les nourrissons, privilégier une eau riche en calcium et très pauvre en nitrates et sodium.'
      }
    ],
    examples: [
      {
        statement: 'Sur l\'étiquette de l\'eau AWA, on lit : Calcium 52 mg/L, Magnésium 2,8 mg/L, Bicarbonates 264 mg/L. Cette eau est-elle dure ?',
        solution: 'Avec 52 mg/L de calcium (compris entre 28 et 60 mg/L), c\'est une eau douce à modérément minéralisée, facile à digérer et adaptée à la consommation.'
      }
    ],
    exercises: [
      {
        question: 'Quel est l\'effet d\'une carence en ions fer II (Fe2+) dans l\'organisme ?',
        correction: 'Les ions Fe2+ entrent dans la composition de l\'hémoglobine transportant le dioxygène. Une carence provoque une anémie (fatigue intense, pâleur).'
      }
    ],
    evaluationSituation: {
      context: 'Un pédiatre recommande à une jeune mère de choisir pour son bébé de 6 mois une eau minérale riche en calcium et en magnésium pour sa croissance osseuse. En magasin, deux bouteilles sont disponibles : Bouteille 1 (Ca2+: 68 mg/L, Mg2+: 11 mg/L) et Bouteille 2 (Ca2+: 9 mg/L, Mg2+: 5 mg/L).',
      instructions: [
        '1. Rappelle le rôle biologique du calcium et du magnésium chez le nourrisson.',
        '2. Compare la composition des deux bouteilles.',
        '3. Conseille la mère avec justification.'
      ],
      solutionGuide: '1. Le calcium et le magnésium sont indispensables à l\'ossification, à la formation du squelette et à la dentition du nourrisson.\n2. La bouteille 1 contient 68 mg/L de calcium et 11 mg/L de magnésium, contre seulement 9 mg/L de Ca2+ et 5 mg/L de Mg2+ pour la bouteille 2.\n3. La mère doit choisir la Bouteille 1 car elle apporte les taux de minéraux nécessaires à la croissance osseuse de son enfant.'
    },
    examTraps: [
      'Penser qu\'une eau minérale ne doit contenir aucun ion (au contraire, les ions minéraux sont indispensables à la santé).',
      'Confondre le réactif du calcium (oxalate d\'ammonium) avec celui du sulfate (chlorure de baryum).'
    ],
    quickMemo: 'Dureté = Ca2+ et Mg2+. Ca2+ + oxalate -> blanc. SO4(2-) + BaCl2 -> blanc. Cl- + AgNO3 -> blanc noircissant.',
    keywords: ['qualite de l eau', 'normes OMS', 'durete de l eau', 'calcium', 'oxalate ammonium', 'physique 4e']
  }
];
