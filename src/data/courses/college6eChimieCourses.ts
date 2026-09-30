import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_6E_CHIMIE_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 6ÈME - THÈME 2 : PROPRIÉTÉS PHYSIQUES DE LA MATIÈRE - LEÇON 4
  // ========================================================
  {
    id: 'pc-6e-solides-et-liquides',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Propriétés physiques de la matière',
    lessonTitle: 'Solides et liquides : Définitions, propriétés, surface libre et verrerie de laboratoire',
    objectifs: [
      'Définir un solide comme un corps que l\'on peut saisir entre les doigts',
      'Distinguer les solides compacts (formés d\'un seul bloc, possédant une forme propre : banane, igname, charbon) des solides divisés (formés de petits grains, n\'ayant pas de forme propre : sel, riz, farine)',
      'Définir un liquide comme un corps insaisissable qui coule et prend la forme du récipient qui le contient (fluide : eau, huile, alcool)',
      'Énoncer la propriété fondamentale de la surface libre d\'un liquide au repos (toujours plane et horizontale, contrairement à celle d\'un solide divisé qui est quelconque)',
      'Identifier la verrerie usuelle de laboratoire : bécher, verre à pied, erlenmeyer, cristallisoir, tube à essais, éprouvette graduée, fiole jaugée, ballon à fond plat/rond',
      'Reconnaître et interpréter les pictogrammes de danger figurant sur les produits de consommation (inflammable, toxique, corrosif, explosif, comburant, dangereux pour l\'environnement)',
      'Découvrir des états particuliers de la matière : l\'état plasma et l\'état vitreux (solide amorphe)'
    ],
    fullCourseContent: `1. Les Solides :
- Définition : Les solides sont des corps matériels que l'on peut saisir directement entre les doigts.
- Classification des solides :
  * Les solides compacts : Ils sont formés d'un seul bloc continu. Ils ont une forme propre (leur forme ne change pas quel que soit le récipient où on les dépose). Exemples : morceau de craie, igname, banane, caillou, pièce de monnaie, charbon de bois.
  * Les solides divisés (ou pulvérulents) : Ils sont constitués d'une multitude de petits grains solides indépendants. Chaque grain pris isolément est un petit solide compact, mais l'ensemble peut couler. Ils n'ont pas de forme propre : ils prennent la forme de la partie du récipient qui les contient. Exemples : farine de maïs, sel fin, sucre en poudre, grains de riz, sable.
- Surface libre d'un solide divisé au repos : Elle est quelconque (peut former un tas incliné, un cône ou des bosses).

2. Les Liquides :
- Définition : Les liquides sont des corps que l'on ne peut pas saisir entre les doigts (ils glissent et coulent).
- Propriétés :
  * Ils n'ont pas de forme propre : ils épousent la forme du récipient qui les accueille.
  * Les liquides sont des fluides qui s'écoulent. Exemples : eau, huile de palme, jus de fruit, essence, alcool.
- Surface libre d'un liquide au repos :
  * La surface libre est la surface du liquide en contact direct avec l'air ambiant.
  * RÈGLE D'OR : Au repos, la surface libre d'un liquide est TOUJOURS PLANE ET RIGOUREUSEMENT HORIZONTALE, quelle que soit l'inclinaison du récipient ! (C'est le principe du niveau à bulle des maçons).

3. Comparaison Solides Divisés vs Liquides :
- Points communs : Tous deux coulent et prennent la forme du fond du récipient.
- Différences fondamentales :
  * Les solides divisés sont saisissables entre les doigts (on peut attraper une pincée de sel ou des grains de riz), alors que les liquides sont insaisissables.
  * Au repos, la surface libre d'un liquide est plane et horizontale, alors que la surface d'un solide divisé forme un cône ou une surface quelconque.

4. Verrerie Usuelle de Laboratoire :
En chimie, on manipule les solides et liquides avec une verrerie adaptée :
- Le bécher : Récipient cylindrique à fond plat avec bec verseur, pour mélanger ou chauffer modérément.
- L'erlenmeyer : Récipient conique à col étroit, limitant les projections et l'évaporation lors de l'agitation.
- Le tube à essais : Tube étroit en verre pour tester des réactions à petite échelle.
- Le verre à pied : Récipient conique monté sur un socle.
- Le cristallisoir : Récipient large et peu profond pour laisser s'évaporer un solvant.
- L'éprouvette graduée : Récipient cylindrique haut et gradué pour mesurer avec précision le volume des liquides.
- La fiole jaugée et les ballons (à fond plat ou à fond rond pour chauffer au ballon).

5. Notices et Pictogrammes de Sécurité des Produits :
Les produits chimiques ménagers (eau de javel, déboucheur acide, alcool, pétrole, dissolvant) portent des pictogrammes normalisés de danger :
- Inflammable (flamme) : Peut s'enflammer au contact d'une étincelle ou de la chaleur (alcool, essence, vernis).
- Toxique (tête de mort) : Empoisonne gravement même à faible dose.
- Corrosif (produit rongeant une main ou une barre métallique) : Attaque les tissus vivants et les métaux (acide, déboucheur, eau de javel concentrée).
- Comburant (flamme au-dessus d'un cercle) : Apporte de l'oxygène et peut déclencher ou aggraver un incendie.
- Dangereux pour l'environnement (arbre mort et poisson renversé) : Pollue les cours d'eau et détruit la faune aquatique.`,
    definitions: [
      {
        term: 'Solide compact',
        definition: 'Solide formé d\'un seul bloc ayant une forme propre et saisissable entre les doigts.'
      },
      {
        term: 'Solide divisé',
        definition: 'Solide composé d\'un ensemble de petits grains, saisissable, mais sans forme propre globale.'
      },
      {
        term: 'Liquide',
        definition: 'Corps fluide insaisissable entre les doigts, sans forme propre, dont la surface libre au repos est plane et horizontale.'
      },
      {
        term: 'Surface libre',
        definition: 'Surface de séparation entre un liquide au repos et l\'air ambiant.'
      },
      {
        term: 'Pictogramme',
        definition: 'Symbole graphique normalisé apposé sur les emballages pour alerter sur les dangers potentiels d\'un produit.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Propriété de la surface libre d\'un liquide',
        statement: 'Au repos, la surface libre d\'un liquide est toujours plane et horizontale, même si l\'on incline le récipient.'
      },
      {
        name: 'Différence entre solide divisé et liquide',
        statement: 'Le solide divisé est saisissable entre les doigts et sa surface libre est quelconque ; le liquide est insaisissable et sa surface libre est plane et horizontale.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Tracer la surface libre d\'un liquide dans un récipient incliné',
        procedure: '1. Repérer le point marquant le niveau du liquide. 2. Prendre une règle et tracer une ligne rigoureusement parallèle à la table / au bas de la feuille (horizontale), quelle que soit la pente des parois du flacon ou de l\'éprouvette inclinée.',
        tip: 'Attention : ne jamais tracer la ligne parallèle au fond du bocal si celui-ci est penché ! La surface de l\'eau reste toujours parallèle à la terre.'
      }
    ],
    examples: [
      {
        statement: 'Pourquoi la farine n\'est-elle pas classée parmi les liquides bien qu\'elle coule et prenne la forme du bol ?',
        solution: 'La farine est un solide divisé : elle est composée de minuscules grains solides saisissables entre les doigts. De plus, au repos, sa surface n\'est pas plane et horizontale mais peut former un monticule incliné.'
      }
    ],
    exercises: [
      {
        question: 'Vrai ou Faux ?\n1. L\'huile a une forme propre.\n2. La surface libre de l\'eau dans un verre penché est inclinée.\n3. Un grain de maïs est un solide compact.\n4. La farine est un solide divisé.',
        correction: '1. Faux (les liquides n\'ont pas de forme propre).\n2. Faux (elle reste toujours plane et horizontale).\n3. Vrai.\n4. Vrai.'
      },
      {
        question: 'Identifie l\'état physique et le groupe des corps suivants : miel, pièce de 100 F CFA, sucre en poudre, pétrole lampant, manioc frais.',
        correction: '- Miel : liquide.\n- Pièce de 100 F CFA : solide compact.\n- Sucre en poudre : solide divisé.\n- Pétrole lampant : liquide.\n- Manioc frais : solide compact.'
      }
    ],
    evaluationSituation: {
      context: 'De retour du grand marché, ta mère a ramené : de l\'huile de palme, de la farine de manioc, des bananes plantains, du poisson frais, du sel fin et de l\'eau de javel. Elle te demande de ranger ces produits dans la cuisine en les classant selon leurs propriétés physiques.',
      instructions: [
        '1. Rappelle la propriété qui permet de distinguer facilement un solide d\'un liquide.',
        '2. Classe ces articles en trois groupes distincts : solides compacts, solides divisés et liquides.',
        '3. Le bidon d\'eau de javel porte un pictogramme avec un produit rongeant une main. Explique ce qu\'il signifie et donne deux précautions de manipulation.'
      ],
      solutionGuide: '1. Un solide est saisissable entre les doigts, tandis qu\'un liquide est insaisissable et coule. 2. Classement :\n- Solides compacts : bananes plantains, poisson frais (forme propre, un seul bloc).\n- Solides divisés : farine de manioc, sel fin (grains saisissables, pas de forme propre).\n- Liquides : huile de palme, eau de javel (coulent, surface libre plane et horizontale).\n3. Ce pictogramme signifie produit corrosif. Il attaque et détruit la peau et les métaux. Précautions : porter des gants en plastique lors de l\'utilisation, manipuler avec précaution sans éclabousser les yeux, ranger hors de portée des enfants.'
    },
    examTraps: [
      'Dessiner la surface de l\'eau inclinée quand le vase est penché (l\'eau reste strictement horizontale par rapport au sol).',
      'Confondre un solide divisé (farine, sucre) avec un liquide sous prétexte qu\'il s\'écoule dans un récipient.',
      'Ignorer le nom des instruments de verrerie (bécher, erlenmeyer, cristallisoir, éprouvette graduée).'
    ],
    quickMemo: 'Solide compact : saisissable, 1 seul bloc, forme propre | Solide divisé : saisissable, grains, pas de forme propre, surface quelconque | Liquide : insaisissable, pas de forme propre, coule, surface libre plane et horizontale au repos.',
    keywords: ['solides', 'liquides', 'solide compact', 'solide divisé', 'surface libre', 'plane et horizontale', 'verrerie', 'pictogramme', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 2 : PROPRIÉTÉS PHYSIQUES DE LA MATIÈRE - LEÇON 5
  // ========================================================
  {
    id: 'pc-6e-les-gaz',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Propriétés physiques de la matière',
    lessonTitle: 'Les gaz : Existence de l\'air, compressibilité, expansibilité, élasticité, pression et recueillement',
    objectifs: [
      'Prouver expérimentalement l\'existence d\'un gaz invisible tel que l\'air (expérience du tube à essais renversé dans l\'eau : l\'eau ne pénètre pas car l\'air occupe la place ; bulles qui s\'échappent à l\'inclinaison)',
      'Définir et vérifier la compressibilité d\'un gaz (son volume peut être diminué sous l\'effet d\'une force, ex: seringue bouchée)',
      'Définir et vérifier l\'expansibilité d\'un gaz (un gaz n\'a ni forme propre ni volume propre : il occupe tout le volume qu\'on lui offre)',
      'Définir et vérifier l\'élasticité d\'un gaz (reprend sa forme et son volume initial dès que la contrainte cesse)',
      'Définir la notion de pression d\'un gaz (poussée exercée par le gaz sur les parois en contact) et sa relation avec le volume (à température constante : volume diminue -> pression augmente ; volume augmente -> pression diminue)',
      'Décrire le recueillement et le transvasement d\'un gaz par déplacement d\'eau, et sa conservation dans un bocal retourné dans l\'eau',
      'Énoncer les règles de sécurité relatives aux gaz combustibles domestiques (butane, propane, stockage à l\'abri de la chaleur, aération)'
    ],
    fullCourseContent: `1. Existence d'un Gaz : L'Exemple de l'Air :
- L'air est invisible, inodore et incolore, mais il est bien présent tout autour de nous : c'est de la matière à l'état gazeux. L'air forme l'atmosphère qui enveloppe la Terre.
- Expérience de mise en évidence :
  * Plongeons verticalement un tube à essais apparemment « vide » l'ouverture vers le bas dans une cuve d'eau : l'eau n'entre pas dans le tube, car l'air qui s'y trouve fait obstacle.
  * Inclinons doucement le tube : de grosses bulles d'air s'échappent en remontant à la surface et l'eau prend aussitôt la place de l'air.
- Conclusion : L'air existe, a une masse et occupe de l'espace. Il existe une grande variété de gaz : dioxygène, diazote, dioxyde de carbone, gaz butane, propane, méthane.

2. Les Propriétés Fondamentales des Gaz :
À l'aide d'une seringue hermétiquement bouchée avec le doigt, mettons en évidence les 3 grandes propriétés des gaz :
- La Compressibilité :
  * En poussant fermement sur le piston, on parvient à réduire l'espace occupé par le gaz : le volume du gaz diminue.
  * Propriété : Un gaz est COMPRESSIBLE (on peut réduire son volume).
- L'Expansibilité :
  * En tirant sur le piston, le gaz s'étend et remplit immédiatement tout le nouvel espace disponible. Un gaz ne possède aucun volume propre ni forme propre.
  * Propriété : Un gaz est EXPANSIBLE (il occupe tout le volume qu'on lui offre).
- L'Élasticité :
  * Lorsqu'on relâche le piston après l'avoir poussé ou tiré, le piston revient spontanément à sa position d'équilibre initiale.
  * Propriété : Un gaz est ÉLASTIQUE.
- Remarque : Les liquides et les solides sont incompressibles ; seuls les gaz possèdent une compressibilité et une expansibilité remarquables.

3. Notion de Pression d'un Gaz :
- Définition : La pression d'un gaz est la poussée (la force pressante) exercée par les molécules de ce gaz sur chaque unité de surface avec laquelle il est en contact (parois de la seringue, pneu de vélo, ballon).
- Variation de la pression avec le volume :
  * Lorsqu'on comprime un gaz, son volume diminue et sa pression AUGMENTE (on ressent une forte poussée sur le doigt bouchant la seringue).
  * Lorsqu'on détend un gaz, son volume augmente et sa pression DIMINUE.

4. Transvasement, Recueillement et Conservation des Gaz :
- Transvasement par déplacement d'eau :
  * Pour faire passer un gaz d'un tube à un autre sans fuite dans l'air, on immerge les deux récipients dans une cuve à eau. Le gaz, plus léger que l'eau, remonte dans le récipient supérieur en chassant l'eau.
- Recueillement d'un gaz (ex: gaz butane) :
  * On remplit complètement un bocal d'eau, on le retourne dans une cuve à eau (il reste plein par dépression).
  * On place le tube d'échappement de gaz sous le bocal : le gaz monte en bulles et chasse l'eau par déplacement.
- Conservation d'un gaz recueilli :
  * Pour conserver le gaz sans qu'il ne s'échappe ou ne se mélange à l'air, on maintient le bocal retourné avec son goulot immergé dans l'eau. L'eau agit comme un bouchon d'étanchéité naturel.

5. Règles de Sécurité avec les Gaz Domestiques :
- Le gaz butane (vendu en bouteilles de 6 kg ou 12,5 kg) est un gaz combustible hautement inflammable.
- Stockage : Conserver les bouteilles de gaz à l'abri du soleil direct et des sources de chaleur (le butane bout et se vaporise dès 0 °C ; la chaleur augmente dangereusement la pression interne).
- Aération : Les cuisines doivent être largement ventilées car toute fuite de butane forme un mélange explosif avec l'air.`,
    definitions: [
      {
        term: 'Gaz',
        definition: 'État de la matière fluide, compressible, expansible, sans forme propre ni volume propre.'
      },
      {
        term: 'Compressibilité',
        definition: 'Propriété d\'un corps dont on peut réduire le volume en exerçant une pression.'
      },
      {
        term: 'Expansibilité',
        definition: 'Propriété d\'un gaz qui se dilate pour occuper la totalité du volume disponible.'
      },
      {
        term: 'Élasticité d\'un gaz',
        definition: 'Capacité d\'un gaz à reprendre son volume et sa pression d\'origine dès qu\'on cesse d\'agir sur lui.'
      },
      {
        term: 'Pression d\'un gaz',
        definition: 'Poussée exercée par le gaz sur la surface des parois du récipient qui le contient.'
      },
      {
        term: 'Déplacement d\'eau',
        definition: 'Technique permettant de recueillir ou transvaser un gaz en lui faisant chasser l\'eau contenue dans un récipient inversé.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Loi de compression / détente',
        statement: 'Lorsqu\'on comprime un gaz, son volume diminue et sa pression augmente. Lorsqu\'on détend un gaz, son volume augmente et sa pression diminue.'
      },
      {
        name: 'Propriété de volume des gaz',
        statement: 'Les solides et liquides ont un volume propre ; les gaz n\'ont aucun volume propre et sont infiniment expansibles.'
      }
    ],
    formulas: [
      {
        name: 'Relation Volume / Pression (Isotherme)',
        formula: 'V \\searrow \\implies P \\nearrow \\quad \\text{et} \\quad V \\nearrow \\implies P \\searrow',
        explanation: 'À température constante, la pression d\'un gaz enfermé varie en sens inverse de son volume.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Recueillir un gaz par déplacement d\'eau',
        procedure: '1. Remplir un bocal à ras bord avec de l\'eau. 2. Boucher avec la paume ou une plaque de verre et le retourner dans une cuve d\'eau sans laisser entrer d\'air. 3. Introduire l\'embout du tuyau de gaz sous l\'ouverture immergée du bocal. 4. Ouvrir doucement le gaz : les bulles montent et chassent l\'eau vers le bas. 5. Quand le bocal est plein de gaz, le boucher sous l\'eau.',
        tip: 'Cette méthode s\'applique aux gaz insolubles ou très peu solubles dans l\'eau comme l\'air, le dihydrogène, le dioxygène ou le butane.'
      }
    ],
    examples: [
      {
        statement: 'Pour vérifier si une chambre à air de vélo est trouée, pourquoi le vulcanisateur la plonge-t-il gonflée dans une bassine d\'eau ?',
        solution: 'L\'air sous pression enfermé dans la chambre à air s\'échappe par le minuscule trou. Comme l\'air est un gaz expansible et moins dense que l\'eau, il s\'élève sous forme de bulles visibles dans l\'eau, révélant avec précision l\'emplacement de la fuite.'
      }
    ],
    exercises: [
      {
        question: 'Complète les phrases suivantes :\n1. Un gaz occupe tout l\'espace disponible, on dit qu\'il est ......\n2. Lorsqu\'on pousse le piston d\'une seringue bouchée, le volume du gaz ...... et sa pression ......\n3. Pour conserver un gaz recueilli par déplacement d\'eau, on maintient le récipient ...... dans l\'eau.',
        correction: '1. expansible.\n2. diminue ; augmente.\n3. retourné.'
      },
      {
        question: 'Vrai ou Faux ?\na) L\'air est un gaz pur.\nb) Lorsqu\'on détend un gaz, sa pression augmente.\nc) Tous les gaz sont élastiques.',
        correction: 'a) Faux (l\'air est un mélange de plusieurs gaz).\nb) Faux (sa pression diminue lors de la détente).\nc) Vrai.'
      }
    ],
    evaluationSituation: {
      context: 'Pendant un match de football au collège de Yézimala, le ballon se dégonfle régulièrement, obligeant l\'arbitre à interrompre le jeu pour le regonfler. L\'arbitre craint que le ballon ne soit percé d\'un trou invisible et hésite sur la méthode à suivre pour le vérifier sans l\'abîmer.',
      instructions: [
        '1. Nomme le gaz présent à l\'intérieur du ballon de football.',
        '2. Propose une méthode expérimentale simple et fiable pour vérifier si le ballon est percé.',
        '3. Indique la propriété physique des gaz mise en évidence lors de cette vérification.'
      ],
      solutionGuide: '1. Le gaz présent dans le ballon est l\'air. 2. Méthode : Gonfler le ballon au maximum puis l\'immerger progressivement dans une bassine ou un seau rempli d\'eau. Si de petites bulles s\'échappent de manière continue à un endroit donné, le ballon est percé à cet emplacement exact. 3. La propriété mise en évidence est l\'expansibilité (l\'air sous pression s\'échappe pour occuper l\'espace disponible sous forme de bulles de gaz).'
    },
    examTraps: [
      'Croire que l\'air est du vide (l\'air est de la matière qui pèse et occupe un volume).',
      'Confondre compressibilité (diminution de volume sous pression) et expansibilité (augmentation de volume).',
      'Dire que la pression diminue quand on comprime un gaz (la pression augmente quand on réduit le volume).'
    ],
    quickMemo: 'Air = matière gazeuse | Propriétés : compressible (volume diminue), expansible (remplit tout), élastique (revient) | Compression : V baisse, P monte | Détente : V monte, P baisse | Recueillement : par déplacement d\'eau.',
    keywords: ['gaz', 'air', 'compressibilité', 'expansibilité', 'élasticité', 'pression', 'déplacement d\'eau', 'butane', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 2 : PROPRIÉTÉS PHYSIQUES DE LA MATIÈRE - LEÇON 6
  // ========================================================
  {
    id: 'pc-6e-temperature-corps',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Propriétés physiques de la matière',
    lessonTitle: 'Température d\'un corps : Grandeurs, thermomètres de laboratoire et médical, lecture et équilibre thermique',
    objectifs: [
      'Définir la température comme la grandeur physique qui quantifie l\'état chaud ou froid d\'un corps',
      'Montrer par l\'expérience que le toucher est subjectif, relatif et non fiable pour apprécier une température',
      'Identifier l\'instrument de repérage de la température : le thermomètre',
      'Connaître l\'unité légale internationale (le Kelvin, K), l\'unité usuelle (le degré Celsius, °C) et le degré Fahrenheit (°F)',
      'Décrire les parties d\'un thermomètre de laboratoire (réservoir, tube capillaire, graduation, liquide thermométrique alcool ou mercure)',
      'Déterminer la valeur d\'une graduation et lire correctement la température sur un thermomètre',
      'Connaître les températures repères fondamentales : glace fondante (0 °C), eau bouillante (100 °C), air ambiant en laboratoire (~25 °C)',
      'Décrire le thermomètre médical (gradué de 35 °C à 42 °C avec étranglement) et la température normale du corps humain (37 °C ; hyperthermie > 37 °C, hypothermie < 37 °C)',
      'Expliquer la notion d\'équilibre thermique entre deux corps en contact'
    ],
    fullCourseContent: `1. Qu'est-ce que la Température ?
- Expérience des trois récipients : Plongeons la main gauche dans de l'eau froide et la main droite dans de l'eau chaude, puis plongeons les deux mains ensemble dans de l'eau tiède :
  * La main qui sort du froid trouve l'eau tiède « chaude ».
  * La main qui sort du chaud trouve la même eau tiède « froide ».
- Conclusion : La sensation de chaud ou de froid par le toucher est RELATIVE et trompeuse. Pour connaître avec exactitude l'état thermique d'un corps, il faut mesurer une grandeur physique objective appelée la TEMPÉRATURE.

2. Les Unités de Température :
- Unité légale internationale (Système International) : Le Kelvin (symbole K).
- Unité usuelle pratique en Côte d'Ivoire : Le degré Celsius (symbole °C).
  * Relation : Température en Kelvin T(K) = Température en °C + 273,15.
- Dans les pays anglo-saxons (USA, Grande-Bretagne) : Le degré Fahrenheit (symbole °F).

3. Le Thermomètre de Laboratoire :
- Description :
  * Un réservoir en verre fin à la base contenant un liquide thermométrique (alcool teinté en rouge ou bleu, ou autrefois mercure).
  * Une ampoule de sécurité au sommet.
  * Un tube capillaire très étroit dans lequel monte ou descend la colonne de liquide.
  * Une tige graduée en degrés Celsius (°C).
- Principe physique : La dilatation thermique des liquides. Lorsqu'il s'échauffe, le liquide se dilate et monte dans le capillaire ; lorsqu'il se refroidit, il se contracte et descend.
- Détermination de la valeur d'une graduation :
  * On repère deux chiffres consécutifs (ex: 20 et 30) et on compte le nombre d'intervalles (ex: 5).
  * Valeur d'une division = (30 - 20) / 5 = 2 °C.

4. Températures Remarquables de Corps Purs :
- Glace fondante : 0 °C (le niveau se stabilise à 0 °C pendant toute la fonte : équilibre thermique glace-eau).
- Eau pure bouillante (sous pression atmosphérique normale) : 100 °C.
- Air ambiant en laboratoire : environ 25 °C.

5. Le Thermomètre Médical et la Température Corporelle :
- Description : Thermomètre conçu spécialement pour le corps humain, gradué uniquement entre 35 °C et 42 °C (avec une grande précision au 0,1 °C).
- Particularité essentielle : L'ÉTRANGLEMENT situé juste au-dessus du réservoir.
  * Rôle de l'étranglement : Quand on retire le thermomètre du corps du patient, le liquide commence à refroidir et se contracter. L'étranglement brise le fil liquide, empêchant le liquide thermométrique de redescendre immédiatement dans le réservoir avant la lecture !
- Température normale du corps humain : 37 °C (plage normale : 36,5 °C à 37,5 °C).
  * Hyperthermie (fièvre) : Température corporelle supérieure à 37,5 °C (le corps est trop chaud).
  * Hypothermie : Température corporelle inférieure à 36 °C (danger de refroidissement mortel).
- Protocole d'utilisation : Secouer vivement le thermomètre d'un coup de poignet pour faire redescendre le liquide avant usage, placer le réservoir sous l'aisselle ou sous la langue pendant au moins 3 minutes pour atteindre l'équilibre thermique, puis lire.

6. Documentation : Histoire et Évolution de la Température Corporelle :
- Les travaux pionniers du Dr Karl Wunderlich (1868) avaient établi une moyenne de 37 °C sur un million de mesures. Les études récentes montrent une légère baisse de la moyenne (~36,6 °C) grâce à la réduction des infections chroniques et à de meilleures conditions d'hygiène.`,
    definitions: [
      {
        term: 'Température',
        definition: 'Grandeur physique qui caractérise le degré d\'agitation thermique et l\'état plus ou moins chaud ou froid d\'un corps.'
      },
      {
        term: 'Thermomètre',
        definition: 'Instrument de mesure gradué servant à repérer la température d\'un corps.'
      },
      {
        term: 'Équilibre thermique',
        definition: 'État atteint par deux corps en contact lorsque leurs températures s\'égalisent et que le thermomètre se stabilise.'
      },
      {
        term: 'Étranglement',
        definition: 'Rétrécissement du tube capillaire du thermomètre médical maintenant la colonne de liquide en place après le retrait pour permettre la lecture.'
      },
      {
        term: 'Hyperthermie',
        definition: 'Élévation anormale de la température corporelle au-dessus de 37,5 °C (fièvre).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Principe d\'équilibre thermique',
        statement: 'La lecture d\'un thermomètre ne doit être effectuée que lorsque la colonne de liquide a cessé de monter ou descendre.'
      },
      {
        name: 'Lecture sur thermomètre de laboratoire',
        statement: 'Pour un thermomètre de laboratoire, il faut faire la lecture sans retirer le réservoir du liquide pour ne pas fausser la mesure.'
      }
    ],
    formulas: [
      {
        name: 'Conversion Kelvin - Celsius',
        formula: 'T(K) = \\theta(^{\\circ}\\text{C}) + 273{,}15',
        explanation: '0 °C correspond à 273,15 K (le zéro absolu étant 0 K ou -273,15 °C).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Mesurer la température d\'un liquide au laboratoire',
        procedure: '1. Plonger le réservoir du thermomètre dans le liquide sans toucher le fond ni les parois du récipient. 2. Attendre que la colonne de liquide se stabilise (équilibre thermique). 3. Placer l\'œil bien en face du haut du ménisque de la colonne liquide sans sortir le thermomètre du liquide. 4. Noter la valeur avec son unité (°C).',
        tip: 'Sortir le thermomètre du liquide ferait chuter la température au contact de l\'air frais !'
      }
    ],
    examples: [
      {
        statement: 'Sur un thermomètre, l\'intervalle entre 50 °C et 60 °C est divisé en 10 petites graduations. Le niveau se situe 4 graduations au-dessus de 50 °C. Quelle est la température ?',
        solution: 'Chaque graduation vaut (60 - 50) / 10 = 1 °C. La température est donc : 50 °C + (4 × 1 °C) = 54 °C.'
      }
    ],
    exercises: [
      {
        question: 'Quelle est l\'unité légale internationale de température ? Quelle est l\'unité usuelle ?',
        correction: 'L\'unité légale internationale est le Kelvin (symbole K). L\'unité usuelle est le degré Celsius (symbole °C).'
      },
      {
        question: 'Associe chaque état ou corps à sa température caractéristique : 1. Glace fondante | 2. Eau bouillante pure | 3. Corps humain normal | 4. Air d\'un laboratoire.\nTempératures : a. 37 °C | b. 100 °C | c. 25 °C | d. 0 °C.',
        correction: '1 -> d (0 °C) | 2 -> b (100 °C) | 3 -> a (37 °C) | 4 -> c (25 °C).'
      }
    ],
    evaluationSituation: {
      context: 'Un élève de 6ème accompagne sa mère au dispensaire avec son petit frère qui a le front très chaud depuis le milieu de la nuit. L\'infirmier prend un thermomètre en verre gradué de 35 à 42 °C, le secoue d\'un geste sec, le place 3 minutes sous l\'aisselle de l\'enfant, puis lit la valeur 39,4 °C.',
      instructions: [
        '1. Nomme l\'instrument utilisé par l\'infirmier et précise son rôle.',
        '2. Explique pourquoi l\'infirmier a secoué le thermomètre avant de l\'utiliser.',
        '3. Interprète la valeur trouvée (39,4 °C) et nomme l\'état de l\'enfant.'
      ],
      solutionGuide: '1. C\'est un thermomètre médical, conçu pour repérer la température du corps humain. 2. L\'infirmier l\'a secoué pour forcer le liquide thermométrique retenu par l\'étranglement à redescendre complètement dans le réservoir, afin de repartir d\'une mesure à zéro. 3. La température normale du corps est de 37 °C. Avec 39,4 °C (> 37,5 °C), l\'enfant est en état d\'hyperthermie (forte fièvre). Une prise en charge médicale est nécessaire.'
    },
    examTraps: [
      'Confondre le Kelvin (K, sans le signe degré °) avec le degré Celsius (°C).',
      'Oublier le rôle de l\'étranglement dans le thermomètre médical.',
      'Retirer un thermomètre de laboratoire du liquide avant de faire la lecture (seul le thermomètre médical permet la lecture après retrait grâce à son étranglement).'
    ],
    quickMemo: 'Température : mesure du chaud/froid | Unité légale : Kelvin (K) | Unité usuelle : °C | Glace fondante : 0 °C | Eau bouillante : 100 °C | Corps humain sain : 37 °C (> 37,5 = hyperthermie) | Thermomètre médical : 35 à 42 °C avec étranglement.',
    keywords: ['température', 'thermomètre', 'Kelvin', 'degré Celsius', 'thermomètre médical', 'étranglement', 'hyperthermie', '0 °C', '100 °C', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 2 : PROPRIÉTÉS PHYSIQUES DE LA MATIÈRE - LEÇON 7
  // ========================================================
  {
    id: 'pc-6e-changements-etat-eau',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Propriétés physiques de la matière',
    lessonTitle: 'Les changements d\'état de l\'eau : Solidification, fusion, vaporisation, condensation et cycle naturel de l\'eau',
    objectifs: [
      'Identifier les trois états physiques de l\'eau dans la nature : solide (glace, neige, grêle), liquide (pluie, mer, rivière) et gazeux (vapeur d\'eau invisible)',
      'Définir la solidification de l\'eau (passage du liquide au solide à 0 °C sous pression normale)',
      'Définir la fusion de la glace (passage du solide au liquide à 0 °C)',
      'Observer et expliquer le palier de température constante (0 °C) pendant les changements d\'état de l\'eau pure',
      'Démontrer la conservation rigoureuse de la masse au cours des changements d\'état (m_solide = m_liquide)',
      'Mettre en évidence la variation de volume : lors de la solidification le volume de l\'eau augmente ; lors de la fusion le volume diminue (danger d\'éclatement des bouteilles pleines au congélateur)',
      'Définir la vaporisation (liquide vers gaz, par ébullition à 100 °C ou par évaporation) et la condensation/liquéfaction (gaz vers liquide)',
      'Décrire le cycle naturel de l\'eau et souligner l\'importance de préserver l\'or bleu (3 % d\'eau douce sur Terre)'
    ],
    fullCourseContent: `1. Les Trois États Physiques de l'Eau :
L'eau est la seule substance présente naturellement sous trois états physiques sur Terre :
- État solide : Glace, givre, grêle, neige (forme propre, saisissable).
- État liquide : Eau des fleuves, lagunes, océans, pluie (coule, surface plane et horizontale).
- État gazeux : Vapeur d'eau invisible présente dans l'air (brouillard et nuages sont en réalité de fines gouttelettes d'eau liquide suspendues dans l'air !).

2. Solidification et Fusion de l'Eau :
- La Solidification : Passage de l'état liquide à l'état solide.
  * Expérience : On place un tube d'eau dans un mélange réfrigérant (glace pilée + sel).
  * Température : L'eau se solidifie à 0 °C sous la pression atmosphérique normale.
  * Palier de température : Pendant toute la durée de la solidification, la température reste rigoureusement constante et égale à 0 °C tant qu'il reste du liquide et du solide en présence.
- La Fusion : Passage de l'état solide à l'état liquide.
  * Expérience : On sort un glaçon du congélateur et on le laisse fondre.
  * Température : La glace pure fond à 0 °C avec un palier thermique à 0 °C jusqu'à disparition complète du dernier morceau de glace.

3. Conservation de la Masse et Variation du Volume :
- Conservation de la masse :
  * Pesons un récipient hermétique contenant un glaçon : notons m = 100 g.
  * Laissons fondre le glaçon complètement et pesons à nouveau : m = 100 g.
  * RÈGLE : Lors de la fusion ou de la solidification, la masse ne varie pas (la quantité de molécules d'eau reste identique).
- Variation du volume (Comportement exceptionnel de l'eau) :
  * Lors de la solidification, le volume de l'eau AUGMENTE d'environ 9 % !
  * Lors de la fusion, le volume de l'eau DIMINUE.
  * Application pratique : Une bouteille en verre remplie d'eau à ras bord et fermée hermétiquement éclate dans le congélateur car la glace formée occupe plus de volume que l'eau liquide initiale.

4. Vaporisation et Condensation :
- La Vaporisation : Passage de l'état liquide à l'état gazeux (vapeur d'eau).
  * L'évaporation : Vaporisation lente et silencieuse qui se produit à la surface libre de l'eau à n'importe quelle température (ex: linge mouillé qui sèche au soleil).
  * L'ébullition : Vaporisation rapide et tumultueuse avec formation de bulles de vapeur d'eau dans toute la masse du liquide, à 100 °C sous pression normale. La température reste fixe à 100 °C tant que l'eau bout.
- La Condensation (ou Liquéfaction) : Passage de l'état gazeux à l'état liquide.
  * Exemple : De la buée se dépose sur un couvercle froid placé au-dessus d'une casserole d'eau bouillante.

5. Le Cycle Naturel de l'Eau :
Dans la nature, l'eau circule continuellement en boucle fermée grâce à l'énergie solaire :
1. Évaporation des océans, mers, lacs et transpiration des végétaux.
2. Condensation de la vapeur d'eau en altitude pour former les nuages.
3. Précipitations sous forme de pluie ou de neige.
4. Ruissellement (rejoint fleuves et océans) et infiltration dans les nappes phréatiques.
5. Le cycle recommence indéfiniment.

6. L'Importance de l'Eau et sa Préservation :
- L'eau (« l'or bleu ») est vitale pour l'agriculture, la santé, l'industrie et la vie.
- Seuls 3 % de l'eau sur Terre est de l'eau douce (dont la majorité est emprisonnée dans les glaciers).
- Il est impératif d'éviter le gaspillage et de lutter contre la pollution des eaux (orpaillage clandestin, déchets plastiques). Faire bouillir l'eau non traitée permet de détruire les microbes.`,
    definitions: [
      {
        term: 'Solidification',
        definition: 'Changement d\'état physique correspondant au passage de l\'état liquide à l\'état solide (à 0 °C pour l\'eau pure).'
      },
      {
        term: 'Fusion',
        definition: 'Changement d\'état physique correspondant au passage de l\'état solide à l\'état liquide (à 0 °C pour la glace pure).'
      },
      {
        term: 'Vaporisation',
        definition: 'Passage de l\'état liquide à l\'état gazeux (par évaporation lente ou par ébullition à 100 °C).'
      },
      {
        term: 'Condensation (liquéfaction)',
        definition: 'Passage de l\'état gazeux (vapeur d\'eau) à l\'état liquide au contact d\'un milieu plus froid.'
      },
      {
        term: 'Palier de température',
        definition: 'Période pendant laquelle la température d\'un corps pur reste constante tout au long de son changement d\'état.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Conservation de la masse',
        statement: 'Au cours d\'un changement d\'état, la masse d\'un corps se conserve rigoureusement (la masse reste constante).'
      },
      {
        name: 'Anomalie dilatométrique de l\'eau',
        statement: 'Contrairement à la plupart des liquides, l\'eau augmente de volume lorsqu\'elle se solidifie en glace.'
      }
    ],
    formulas: [
      {
        name: 'Conservation de la masse',
        formula: 'm_{\\text{glace}} = m_{\\text{eau liquide}}',
        explanation: 'La masse ne varie pas lors du passage solide <-> liquide.'
      },
      {
        name: 'Variation de volume de l\'eau',
        formula: 'V_{\\text{glace}} > V_{\\text{eau liquide}}',
        explanation: 'La glace occupe plus d\'espace que le même poids d\'eau liquide.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier les changements d\'état de l\'eau',
        procedure: '1. Solide -> Liquide : Fusion (0 °C). 2. Liquide -> Solide : Solidification (0 °C). 3. Liquide -> Gaz : Vaporisation (ébullition à 100 °C ou évaporation). 4. Gaz -> Liquide : Condensation liquide / liquéfaction. 5. Gaz -> Solide : Condensation solide / déposition. 6. Solide -> Gaz : Sublimation.',
        tip: 'Retenir que la vapeur d\'eau est invisible ; le brouillard ou la buée sont déjà des gouttelettes liquides condensées !'
      }
    ],
    examples: [
      {
        statement: 'Un linge mouillé étalé sur une corde au soleil sèche en quelques heures sans que l\'eau n\'ait bouilli à 100 °C. Quel phénomène explique cela ?',
        solution: 'Il s\'agit de l\'évaporation, qui est une vaporisation lente de l\'eau liquide en vapeur gazeuse se produisant à la surface libre du tissu à température ambiante sous l\'effet du vent et de la chaleur.'
      }
    ],
    exercises: [
      {
        question: 'Associe chaque transformation à son nom :\n1. Eau liquide devenant glace | 2. Glaçon devenant eau liquide | 3. Eau liquide devenant vapeur | 4. Vapeur devenant buée liquide.\nNoms : a. Condensation | b. Vaporisation | c. Fusion | d. Solidification.',
        correction: '1 -> d (solidification) | 2 -> c (fusion) | 3 -> b (vaporisation) | 4 -> a (condensation).'
      },
      {
        question: 'Lorsqu\'on fait geler 250 g d\'eau pure :\na) Que devient sa masse ?\nb) Que devient son volume ?',
        correction: 'a) Sa masse reste rigoureusement constante (250 g).\nb) Son volume augmente (la glace prend plus de place que l\'eau liquide).'
      }
    ],
    evaluationSituation: {
      context: 'Un après-midi de grande chaleur à Koun-Fao, une tante désire boire de l\'eau bien glacée. Elle remplit une petite bouteille en verre à ras bord d\'eau du robinet, la ferme hermétiquement avec son bouchon à vis et la place dans le compartiment congélateur. Deux heures plus tard, en ouvrant le congélateur, elle retrouve la bouteille en morceaux de verre brisés au milieu de la glace.',
      instructions: [
        '1. Nomme le changement d\'état physique qui s\'est produit dans le congélateur.',
        '2. Explique scientifiquement la cause de la rupture de la bouteille en verre.',
        '3. Donne deux conseils pratiques pour éviter qu\'un tel accident ne se reproduise.'
      ],
      solutionGuide: '1. Il s\'agit de la solidification de l\'eau (passage de l\'état liquide à l\'état solide). 2. Cause : Lors de la solidification, l\'eau augmente de volume (la glace occupe un volume supérieur à celui de l\'eau liquide de départ). La bouteille étant remplie à ras bord et fermée hermétiquement, la glace en expansion a exercé une force colossale sur les parois en verre indéformables jusqu\'à les faire éclater. 3. Conseils : Ne jamais remplir un récipient à ras bord (laisser un espace d\'air pour permettre l\'expansion de la glace) et privilégier des récipients en plastique souple plutôt qu\'en verre fragile pour le congélateur.'
    },
    examTraps: [
      'Croire que la masse augmente quand l\'eau gèle parce que le volume augmente (la masse se conserve rigoureusement !).',
      'Confondre évaporation (lente, en surface, toute température) et ébullition (rapide, bulles partout, à 100 °C).',
      'Dire que le nuage ou le brouillard est de la vapeur d\'eau gazeuse (c\'est de l\'eau liquide en minuscules gouttelettes suspendues).'
    ],
    quickMemo: 'Fusion (solide -> liquide à 0 °C) | Solidification (liquide -> solide à 0 °C) | Vaporisation (liquide -> gaz à 100 °C ou évaporation) | Condensation (gaz -> liquide) | Masse constante | Volume eau : augmente à la solidification !',
    keywords: ['changements d\'état', 'solidification', 'fusion', 'vaporisation', 'condensation', 'cycle de l\'eau', 'conservation de la masse', '0 °C', '100 °C', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 3 : L'AIR ET LES COMBUSTIONS - LEÇON 8
  // ========================================================
  {
    id: 'pc-6e-constituants-air',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'L\'air et les combustions',
    lessonTitle: 'Les constituants de l\'air : Composition en volume, rôle du dioxygène, pollution et protection de l\'atmosphère',
    objectifs: [
      'Mettre en évidence expérimentalement la composition de l\'air (bougie sous éprouvette graduée inversée sur cuve à eau : extinction de la flamme et montée de l\'eau d\'un cinquième 1/5 du volume total)',
      'Définir l\'air comme un mélange gazeux homogène et non comme un corps pur',
      'Connaître les proportions volumiques des deux constituants essentiels de l\'air sec : environ 1/5 (20 % à 21 %) de dioxygène (O2) et 4/5 (80 % à 78 %) de diazote (N2)',
      'Citer les autres gaz présents en faible proportion : argon (0,93 %), dioxyde de carbone (0,04 %), néon, vapeur d\'eau',
      'Identifier le dioxygène comme le constituant de l\'air indispensable à la vie (respiration) et qui entretient les combustions',
      'Identifier les principales sources de pollution de l\'air en Côte d\'Ivoire (gaz d\'échappement des véhicules, usines, dépôts d\'ordures ménagères, feux de brousse, fumées)',
      'Proposer des actions citoyennes concrètes pour réduire la pollution atmosphérique (vidange régulière des véhicules, planting d\'arbres favorisant la photosynthèse, canaux d\'évacuation, tri des ordures)'
    ],
    fullCourseContent: `1. Les Constituants Essentiels de l'Air :
- Expérience fondamentale :
  * Plaçons une bougie allumée sur un bouchon flottant sur une cuve d'eau.
  * Recouvrons-la d'une éprouvette graduée retournée :
    1. La bougie brûle quelques secondes puis s'éteint rapidement.
    2. L'eau monte dans l'éprouvette et s'immobilise.
    3. Le volume d'eau monté correspond exactement à 1/5 (environ 20 %) du volume total d'air initial dans l'éprouvette.
- Interprétation et conclusions :
  * L'air n'est pas un corps pur, c'est un MÉLANGE de plusieurs gaz.
  * La partie de l'air consommée par la flamme de la bougie est le gaz dioxygène (anciennement appelé gaz oxygène) : il représente 1/5 (20 %) du volume de l'air.
  * Les 4/5 restants (environ 80 %) sont constitués d'un gaz qui n'entretient pas la combustion : le gaz diazote (anciennement appelé gaz azote).

2. Composition Approfondie de l'Air Sec :
Pour 100 litres d'air sec :
- Diazote (N2) : environ 78 % (près de 4/5 en volume, soit 80 L pour 100 L).
- Dioxygène (O2) : environ 21 % (près de 1/5 en volume, soit 20 L pour 100 L).
- Autres gaz (environ 1 %) :
  * Argon (Ar) : 0,93 %
  * Dioxyde de carbone (CO2) : 0,038 % à 0,04 %
  * Néon (Ne), vapeur d'eau et traces de gaz rares.
- Règle de calcul : Dans 1 litre d'air, il y a environ 0,2 L (ou 200 mL) de dioxygène et 0,8 L (ou 800 mL) de diazote. Il y a 4 fois plus de diazote que de dioxygène dans l'air.

3. Rôle Vital du Dioxygène :
- Maintien de la vie : Le dioxygène est absorbé par les poumons lors de la respiration pour oxygéner le sang de tous les êtres vivants (hommes et animaux).
- Entretien des combustions : Sans dioxygène, aucune combustion ne peut avoir lieu (le feu s'éteint immédiatement).

4. La Pollution de l'Air :
- Principales sources de pollution de l'air :
  * Les gaz d'échappement des voitures et motos (pots d'échappement mal réglés rejetant des suies et du monoxyde de carbone).
  * Les ordures ménagères pourrissant à l'air libre ou brûlées anarchiquement dans les rues.
  * Les fumées des usines et des zones industrielles (Vridi, Yopougon).
  * Les feux de brousse en saison sèche.
  * Les eaux usées stagnantes dégageant des odeurs nauséabondes.
- Conséquences : Maladies respiratoires (asthme, bronchites), maux de tête, pluies acides, et réchauffement climatique par accentuation de l'effet de serre dû au dioxyde de carbone (CO2).

5. Actions pour Protéger l'Air et Améliorer sa Qualité :
- Réaliser régulièrement la vidange et le réglage des moteurs de véhicules.
- Déposer les ordures ménagères dans des bennes et centres de transfert aménagés (ANASUR).
- Implanter les usines polluantes loin des agglomérations d'habitation.
- Interdire strictement les feux de brousse.
- Pratiquer le reboisement et le planting d'arbres : Par le mécanisme biologique de la photosynthèse, les feuilles vertes des arbres absorbent le dioxyde de carbone le jour et rejettent du dioxygène pur dans l'atmosphère.`,
    definitions: [
      {
        term: 'Air',
        definition: 'Mélange gazeux formant l\'atmosphère terrestre, composé principalement de diazote (4/5) et de dioxygène (1/5).'
      },
      {
        term: 'Dioxygène (O2)',
        definition: 'Gaz indispensable à la respiration et aux combustions, constituant environ 20 % du volume de l\'air.'
      },
      {
        term: 'Diazote (N2)',
        definition: 'Gaz inerte pour la respiration et la combustion, constituant le gaz le plus abondant de l\'air (environ 80 %).'
      },
      {
        term: 'Photosynthèse',
        definition: 'Processus végétal absorbant le dioxyde de carbone (CO2) sous la lumière pour fabriquer de la matière organique et libérer du dioxygène (O2).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Proportions volumiques de l\'air',
        statement: 'Air = 1/5 de dioxygène (20 %) + 4/5 de diazote (80 %). Le diazote est 4 fois plus abondant que le dioxygène.'
      },
      {
        name: 'Règle de la combustion',
        statement: 'Le dioxygène est le comburant naturel de l\'air qui entretient la flamme ; le diazote est inerte vis-à-vis de la flamme.'
      }
    ],
    formulas: [
      {
        name: 'Volume de dioxygène dans l\'air',
        formula: 'V_{\\text{dioxygène}} = \\frac{1}{5} \\times V_{\\text{air}} = 0{,}20 \\times V_{\\text{air}}',
        explanation: 'Pour 10 L d\'air : V(O2) = 10 / 5 = 2 L.'
      },
      {
        name: 'Volume de diazote dans l\'air',
        formula: 'V_{\\text{diazote}} = \\frac{4}{5} \\times V_{\\text{air}} = 0{,}80 \\times V_{\\text{air}}',
        explanation: 'Pour 10 L d\'air : V(N2) = 10 × 4/5 = 8 L.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer les volumes de gaz contenus dans un volume d\'air donné',
        procedure: '1. Identifier le volume total d\'air V_air. 2. Calculer le volume de dioxygène en divisant V_air par 5 (ou multipliant par 0,2). 3. Calculer le volume de diazote en multipliant V_air par 4/5 (ou par 0,8). 4. Vérifier que la somme des deux volumes est égale au volume d\'air total.',
        tip: 'Exemple pour 50 L d\'air : 50 / 5 = 10 L d\'O2 et 50 × 4/5 = 40 L de N2 (10 + 40 = 50 L).'
      }
    ],
    examples: [
      {
        statement: 'Une salle de classe contient 120 m³ d\'air. Quel est le volume de dioxygène et de diazote qu\'elle renferme ?',
        solution: 'Volume de dioxygène = 120 / 5 = 24 m³. Volume de diazote = 120 × 4/5 = 96 m³.'
      }
    ],
    exercises: [
      {
        question: 'Recopie et complète :\n1. L\'air est un ...... de plusieurs gaz.\n2. Le gaz le plus abondant de l\'air est le ......\n3. Le gaz nécessaire à la vie et aux combustions est le ......\n4. Dans 5 L d\'air, il y a ...... L de dioxygène et ...... L de diazote.',
        correction: '1. mélange | 2. diazote | 3. dioxygène | 4. 1 L de dioxygène et 4 L de diazote.'
      },
      {
        question: 'Cite deux sources majeures de pollution de l\'air dans nos villes et propose pour chacune une solution adaptée.',
        correction: '1. Source : Les gaz d\'échappement des véhicules polluants -> Solution : Réaliser régulièrement les vidanges et faire contrôler le moteur.\n2. Source : Les ordures ménagères brûlées ou amoncelées -> Solution : Déposer les déchets dans les bacs de collecte municipaux prévus à cet effet.'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'une coupure d\'électricité au Lycée Moderne de Koun-Fao, une élève allume une bougie et la recouvre d\'un bocal en verre transparent pour éviter que le courant d\'air ne l\'éteigne. Mais elle est très surprise de constater que quelques secondes après, la flamme faiblit puis s\'éteint complètement, alors qu\'il reste encore presque toute la cire de la bougie.',
      instructions: [
        '1. Nomme le mélange gazeux initialement enfermé dans le bocal.',
        '2. Cite les deux constituants essentiels de ce mélange avec leurs proportions volumiques.',
        '3. Indique le gaz précis qui entretenait la combustion et explique pourquoi la flamme s\'est éteinte.',
        '4. Propose une action citoyenne simple que les élèves du club environnement peuvent mener pour enrichir l\'air du lycée en oxygène.'
      ],
      solutionGuide: '1. Le mélange gazeux enfermé est l\'air. 2. Les deux constituants essentiels sont le dioxygène (environ 1/5 ou 20 %) et le diazote (environ 4/5 ou 80 %). 3. Le gaz qui entretient la combustion est le dioxygène. La flamme s\'est éteinte car tout le dioxygène présent dans le bocal fermé a été entièrement consommé par la combustion. 4. Le club environnement peut organiser une journée de planting d\'arbres et de plantes vertes dans la cour du lycée, car par la photosynthèse, les végétaux absorbent le gaz carbonique et libèrent du dioxygène.'
    },
    examTraps: [
      'Dire que l\'air contient 4/5 de dioxygène (au contraire, c\'est 1/5 de dioxygène et 4/5 de diazote).',
      'Confondre le gaz qui entretient la combustion (le dioxygène) avec le gaz inerte le plus abondant (le diazote).',
      'Croire que le dioxyde de carbone est un constituant majeur en volume (il ne représente que 0,04 % de l\'air).'
    ],
    quickMemo: 'Air = mélange | 1/5 (20 %) Dioxygène O2 (respiration, combustion) | 4/5 (80 %) Diazote N2 (le plus abondant) | 1 % autres gaz (Argon, CO2 0,04 %) | Reboisement = absorption de CO2 et production de O2.',
    keywords: ['constituants de l\'air', 'dioxygène', 'diazote', 'mélange gazeux', '1/5 et 4/5', 'pollution de l\'air', 'planting d\'arbres', 'photosynthèse', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 3 : L'AIR ET LES COMBUSTIONS - LEÇON 9
  // ========================================================
  {
    id: 'pc-6e-combustion-solide-liquide',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'L\'air et les combustions',
    lessonTitle: 'Combustion d\'un solide et d\'un liquide dans l\'air : Charbon de bois, alcool, réactifs, produits et équations littérales',
    objectifs: [
      'Réaliser et observer la combustion d\'un solide : le charbon de bois (essentiellement constitué de carbone C) dans l\'air et dans le dioxygène',
      'Identifier le produit de combustion du charbon de bois : le dioxyde de carbone (ou gaz carbonique CO2), caractérisé par le test de l\'eau de chaux (qui devient trouble/blanchâtre)',
      'Écrire l\'équation chimique littérale de la combustion du carbone : Carbone + gaz oxygène -> dioxyde de carbone',
      'Réaliser et observer la combustion d\'un liquide : l\'alcool (éthanol), brûlant avec une flamme bleue',
      'Identifier les produits de combustion de l\'alcool : l\'eau (buée sur paroi froide, bleuissement du sulfate de cuivre anhydre) et le dioxyde de carbone (eau de chaux troublée)',
      'Écrire l\'équation chimique littérale de la combustion de l\'alcool : Alcool + gaz oxygène -> dioxyde de carbone + eau',
      'Définir une réaction chimique (transformation où les corps initiaux appelés réactifs disparaissent et de nouveaux corps appelés produits se forment)',
      'Distinguer une transformation chimique (formation de corps nouveaux) d\'une transformation physique (changement d\'état d\'un même corps sans modification chimique)',
      'Définir les notions de combustible (corps qui brûle) et de comburant (corps qui entretient la combustion, dioxygène)'
    ],
    fullCourseContent: `1. Combustion du Charbon de Bois (Solide) :
- Le charbon de bois est essentiellement constitué de l'élément Carbone (C).
- Expérience :
  * Chauffons un morceau de charbon de bois jusqu'à incandescence dans l'air.
  * Plongeons-le dans un flacon rempli de gaz dioxygène pur :
    1. Le charbon brûle avec une très vive incandescence (bien plus brillante que dans l'air libre).
    2. La taille du charbon diminue au fur et à mesure.
    3. La combustion s'arrête lorsque tout le dioxygène du flacon est consommé.
- Identification du produit formé :
  * Versons de l'eau de chaux limpide dans le flacon et agitons : l'eau de chaux devient TROUBLE (blanchâtre).
  * Conclusion : Le gaz incolore formé est le DIOXYDE DE CARBONE (ou gaz carbonique).
- Équation chimique littérale :
  Carbone + gaz oxygène —> dioxyde de carbone
  (Réactifs)                     (Produit)

2. Combustion de l'Alcool (Liquide) :
- L'alcool utilisé est généralement l'éthanol à 90° ou l'alcool à brûler.
- Expérience :
  * Versons une petite quantité d'alcool dans une soucoupe et enflammons-le.
  * L'alcool brûle avec une flamme bleue et chaude.
  * Plaçons un verre à pied sec et froid retourné au-dessus de la flamme :
    1. Une fine buée (gouttelettes d'eau) apparaît sur les parois froides du verre. Elle fait bleuir le sulfate de cuivre anhydre (poudre blanche qui devient bleue au contact de l'eau).
    2. En versant de l'eau de chaux dans le verre et en agitant, celle-ci devient trouble.
- Conclusion : La combustion de l'alcool produit de l'eau et du dioxyde de carbone.
- Équation chimique littérale :
  Alcool + gaz oxygène —> dioxyde de carbone + eau
  (Réactifs)                   (Produits)

3. Notion de Réaction Chimique :
- Définition : Une réaction chimique est une transformation de la matière au cours de laquelle des corps de départ appelés RÉACTIFS disparaissent, et de nouveaux corps aux propriétés différentes appelés PRODUITS apparaissent.
- Dans la combustion du carbone :
  * Réactifs qui disparaissent : le carbone et le dioxygène.
  * Produit qui apparaît : le dioxyde de carbone.

4. Différence entre Transformation Chimique et Transformation Physique :
- Transformation chimique (Réaction chimique) : De nouvelles substances apparaissent avec des propriétés totalement différentes (ex: le charbon et l'oxygène deviennent du gaz carbonique ; combustion de l'alcool ; rouille du fer).
- Transformation physique (Changement d'état) : Aucune nouvelle molécule n'est créée ; la même substance change simplement d'aspect ou d'état physique (ex: la glace qui fond devient de l'eau liquide, c'est toujours de l'eau H2O).

5. Combustible et Comburant :
- Le combustible : C'est le corps qui a la propriété de brûler ou de s'enflammer (ex: bois sec, charbon de bois, alcool, essence, pétrole, gaz butane).
- Le comburant : C'est le corps qui permet et entretient la combustion du combustible (dans l'air, le comburant est le gaz dioxygène).
- Rôle de l'éventail : Pour attiser les braises d'un fourneau à charbon, on utilise un éventail pour apporter un flux continu de dioxygène frais, ce qui active vivement la réaction chimique.`,
    definitions: [
      {
        term: 'Réaction chimique',
        definition: 'Transformation au cours de laquelle les corps de départ (réactifs) disparaissent et de nouveaux corps (produits) sont formés.'
      },
      {
        term: 'Réactif',
        definition: 'Corps qui est consommé et disparaît pendant la réaction chimique.'
      },
      {
        term: 'Produit',
        definition: 'Corps nouveau qui apparaît au cours de la réaction chimique.'
      },
      {
        term: 'Combustible',
        definition: 'Substance capable de s\'enflammer et de brûler en dégageant de l\'énergie thermique (charbon, alcool, bois).'
      },
      {
        term: 'Comburant',
        definition: 'Substance indispensable permettant au combustible de brûler (principalement le gaz dioxygène).'
      },
      {
        term: 'Eau de chaux',
        definition: 'Réactif liquide limpide qui se trouble (blanchit) spécifiquement en présence de dioxyde de carbone (CO2).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Test de l\'eau de chaux',
        statement: 'Le dioxyde de carbone (gaz carbonique) est le seul gaz courant qui blanchit et trouble l\'eau de chaux limpide.'
      },
      {
        name: 'Test de présence d\'eau',
        statement: 'L\'eau liquide fait bleuir le sulfate de cuivre anhydre (initialement blanc) et forme de la buée sur paroi froide.'
      }
    ],
    formulas: [
      {
        name: 'Équation littérale combustion carbone',
        formula: '\\text{Carbone} + \\text{Gaz oxygène} \\longrightarrow \\text{Dioxyde de carbone}',
        explanation: 'Réactifs : Carbone et dioxygène. Produit : Dioxyde de carbone.'
      },
      {
        name: 'Équation littérale combustion alcool',
        formula: '\\text{Alcool} + \\text{Gaz oxygène} \\longrightarrow \\text{Dioxyde de carbone} + \\text{Eau}',
        explanation: 'Réactifs : Alcool et dioxygène. Produits : Dioxyde de carbone et eau.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Écrire une équation chimique littérale',
        procedure: '1. Identifier les corps de départ qui brûlent et sont consommés (les réactifs). 2. Les écrire à gauche reliés par le signe +. 3. Tracer une flèche horizontale orientée vers la droite signifiant « donne » ou « forme ». 4. Identifier tous les corps nouveaux formés (les produits). 5. Les écrire à droite de la flèche reliés par le signe +.',
        tip: 'Vérifier que chaque nom est complet (ex: « dioxyde de carbone » et non pas simplement « gaz »).'
      }
    ],
    examples: [
      {
        statement: 'On brûle de l\'alcool sous un verre sec. Quels sont les deux tests qui permettent de prouver la nature des deux produits formés ?',
        solution: '1. Pour prouver la présence d\'eau : observer la buée sur les parois froides du verre et vérifier qu\'elle fait bleuir le sulfate de cuivre anhydre blanc. 2. Pour prouver la présence de dioxyde de carbone : verser un peu d\'eau de chaux limpide dans le verre et constater qu\'elle devient trouble.'
      }
    ],
    exercises: [
      {
        question: 'Distingue transformation physique et réaction chimique parmi : a) La fusion d\'un glaçon ; b) La combustion du charbon de bois ; c) L\'ébullition de l\'eau ; d) La combustion de l\'alcool.',
        correction: '- Transformations physiques : a (fusion glaçon) et c (ébullition eau) car c\'est toujours de l\'eau sous un autre état.\n- Réactions chimiques : b (combustion charbon) et d (combustion alcool) car les réactifs disparaissent et de nouveaux corps apparaissent.'
      },
      {
        question: 'Complète l\'équation littérale suivante :\nCarbone + ...... —> ......',
        correction: 'Carbone + gaz oxygène (ou dioxygène) —> dioxyde de carbone.'
      }
    ],
    evaluationSituation: {
      context: 'Au village de Yézimala, une sœur prépare le repas au fourneau à charbon de bois. Pour attiser les braises qui s\'éteignent, elle utilise un éventail qu\'elle agite vivement. Plus tard, le charbon de bois a complètement disparu et il ne reste qu\'un tas minuscule de cendres grises. Son jeune frère pense que le charbon s\'est simplement évaporé comme de l\'eau.',
      instructions: [
        '1. Nomme les réactifs et le produit principal de la combustion du charbon de bois.',
        '2. Écris l\'équation chimique littérale de cette transformation.',
        '3. Justifie auprès du frère qu\'il s\'agit bien d\'une réaction chimique et non d\'un changement d\'état physique.',
        '4. Explique scientifiquement pourquoi l\'utilisation de l\'éventail a permis de ranimer le feu.'
      ],
      solutionGuide: '1. Les réactifs sont le carbone (charbon de bois) et le gaz oxygène (dioxygène de l\'air). Le produit est le dioxyde de carbone (gaz carbonique). 2. Équation littérale : Carbone + gaz oxygène —> dioxyde de carbone. 3. C\'est une réaction chimique car le carbone solide et le dioxygène de départ ont été consommés et ont disparu pour donner naissance à un corps gazeux entièrement nouveau : le dioxyde de carbone (tandis que lors d\'un changement d\'état, la même molécule se conserve). 4. L\'éventail projette de l\'air frais riche en dioxygène (le comburant) directement sur le carbone incandescent, ce qui accélère la réaction de combustion.'
    },
    examTraps: [
      'Confondre réaction chimique (matières nouvelles créées) et transformation physique (changement d\'état de la même matière).',
      'Oublier le dioxygène parmi les réactifs (le feu a besoin de combustible ET de comburant).',
      'Confondre le test de l\'eau de chaux (CO2) avec le test du sulfate de cuivre anhydre (eau H2O).'
    ],
    quickMemo: 'Carbone + O2 -> CO2 (trouble l\'eau de chaux) | Alcool + O2 -> CO2 + H2O (eau bleuit sulfate de cuivre) | Réactifs (disparaissent) -> Produits (apparaissent) | Combustible (brûle) | Comburant (dioxygène) | Éventail apporte O2.',
    keywords: ['combustion', 'charbon de bois', 'carbone', 'alcool', 'dioxyde de carbone', 'eau de chaux', 'sulfate de cuivre', 'réaction chimique', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 3 : L'AIR ET LES COMBUSTIONS - LEÇON 10
  // ========================================================
  {
    id: 'pc-6e-combustion-gaz-butane',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'L\'air et les combustions',
    lessonTitle: 'Combustion d\'un gaz dans l\'air (le butane) : Combustion complète, incomplète, virole, produits et dangers du CO',
    objectifs: [
      'Réaliser la combustion du gaz butane à l\'aide d\'un brûleur à gaz (labo-gaz ou bec Bunsen)',
      'Définir et caractériser la combustion COMPLÈTE du butane (virole ouverte, apport suffisant en dioxygène, flamme bleue, très chaude, sans fumée ni suie)',
      'Identifier les produits de la combustion complète du butane : dioxyde de carbone (CO2) et eau (H2O)',
      'Écrire l\'équation chimique littérale de la combustion complète : Butane + gaz oxygène -> dioxyde de carbone + eau',
      'Définir et caractériser la combustion INCOMPLÈTE du butane (virole fermée, apport insuffisant en dioxygène, flamme jaune fuligineuse, peu chaude, dégageant de la fumée noire)',
      'Identifier les produits de la combustion incomplète : carbone (dépôt noir/suie qui noircit les casseroles), monoxyde de carbone (CO), dioxyde de carbone et eau',
      'Alerter sur les dangers mortels de la combustion incomplète : le monoxyde de carbone (gaz inodore, incolore, toxique, provoquant asphyxie et arrêts cardiaques) et l\'effet de serre du CO2',
      'Calculer les volumes de gaz mis en jeu (ex: volume d\'air et de dioxygène nécessaires pour brûler un volume de butane donné)'
    ],
    fullCourseContent: `1. Le Gaz Butane et le Brûleur de Laboratoire :
- Le gaz butane est le gaz combustible distribué en bouteilles en Côte d'Ivoire pour la cuisson domestique.
- Le brûleur (labo-gaz ou bec Bunsen) comprend :
  * Une arrivée de gaz butane.
  * Une virole (bague rotative percée de trous) qui permet de régler l'entrée d'air (l'arrivée de dioxygène).
  * Une cheminée d'où jaillit la flamme.

2. La Combustion Complète du Butane (Virole Ouverte) :
- Expérience : Ouvrons la virole du brûleur pour que l'air extérieur puisse pénétrer en abondance.
- Observations :
  * La flamme est courte, BLEUE, très chaude, stable et ne dégage aucune fumée.
  * Si l'on place un verre à pied froid au-dessus de la flamme, des gouttelettes de buée (eau) se déposent sur les parois.
  * Si l'on fait barboter les gaz dans de l'eau de chaux, elle devient trouble (présence de dioxyde de carbone).
- Définition : La combustion du butane est dite COMPLÈTE lorsque la quantité de gaz oxygène (dioxygène) apportée par l'air est SUFFISANTE.
- Produits formés : Uniquement du dioxyde de carbone (CO2) et de l'eau (H2O).
- Équation chimique littérale :
  Butane + gaz oxygène —> dioxyde de carbone + eau
  (Réactifs)                     (Produits)

3. La Combustion Incomplète du Butane (Virole Fermée) :
- Expérience : Fermons complètement la virole du brûleur : l'air n'arrive plus par les trous de la bague.
- Observations :
  * La flamme devient longue, JAUNE FULIGINEUSE, instable et peu chaude.
  * Elle dégage une épaisse fumée noire.
  * En plaçant une soucoupe blanche ou le fond d'une casserole au-dessus de la flamme, un dépôt noir pulvérulent de charbon/suie (carbone pur C) se dépose instantanément.
- Définition : La combustion du butane est dite INCOMPLÈTE lorsque la quantité de gaz oxygène est INSUFFISANTE.
- Produits formés :
  1. Du carbone pur (C, particules de suie noire qui noircissent les ustensiles).
  2. Du monoxyde de carbone (CO, gaz invisible et mortel).
  3. Du dioxyde de carbone (CO2).
  4. De l'eau (H2O).

4. Les Dangers Mortels de la Combustion Incomplète :
- Le Monoxyde de Carbone (CO) : C'est un poison foudroyant. Il est INCOLORE (invisible) et TOTALEMENT INODORE (ne sent rien). Il se fixe sur l'hémoglobine du sang à la place du dioxygène, privant le cerveau et les organes vitaux d'oxygène : il provoque des maux de tête, des vertiges, une perte de connaissance rapide puis l'asphyxie et la mort en quelques minutes !
- Le Dioxyde de Carbone (CO2) : Gaz asphyxiant à haute concentration et principal gaz à effet de serre responsable du dérèglement climatique.
- Mesures de prévention impératives :
  * Nettoyer régulièrement les brûleurs de la cuisinière à gaz.
  * Régler la virole ou l'arrivée d'air pour avoir toujours une belle flamme bleue.
  * Si la flamme devient jaune et noircit les casseroles, aérer immédiatement et faire réviser l'appareil.
  * Ne jamais faire fonctionner un appareil à gaz dans une pièce close non ventilée.

5. Calculs de Volumes en Combustion :
- Pour brûler complètement 0,1 m³ de butane, il faut environ 32,5 m³ d'air.
- Sachant que l'air contient 1/5 de dioxygène :
  Volume de dioxygène consommé = 32,5 m³ / 5 = 6,5 m³.`,
    definitions: [
      {
        term: 'Combustion complète',
        definition: 'Combustion qui a lieu avec une quantité suffisante de dioxygène, produisant uniquement de l\'eau et du dioxyde de carbone avec une flamme bleue.'
      },
      {
        term: 'Combustion incomplète',
        definition: 'Combustion qui a lieu avec un apport insuffisant de dioxygène, produisant du carbone (suie) et du monoxyde de carbone toxique avec une flamme jaune.'
      },
      {
        term: 'Virole',
        definition: 'Bague métallique mobile d\'un brûleur permettant de doser l\'entrée d\'air nécessaire à la combustion.'
      },
      {
        term: 'Monoxyde de carbone (CO)',
        definition: 'Gaz toxique mortel, incolore et inodore, produit par les combustions incomplètes.'
      },
      {
        term: 'Flamme fuligineuse',
        definition: 'Flamme jaune et éclairante qui produit de la suie noire composée de fines particules de carbone.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de la couleur de flamme',
        statement: 'Flamme bleue = combustion complète (assez d\'air, très chaude) ; Flamme jaune = combustion incomplète (manque d\'air, salissante, dangereuse).'
      },
      {
        name: 'Toxicité du monoxyde de carbone',
        statement: 'Le monoxyde de carbone (CO) est indétectable par les sens humains (inodore et incolore) et asphyxie les cellules en se fixant sur l\'hémoglobine.'
      }
    ],
    formulas: [
      {
        name: 'Équation combustion complète du butane',
        formula: '\\text{Butane} + \\text{Gaz oxygène} \\longrightarrow \\text{Dioxyde de carbone} + \\text{Eau}',
        explanation: 'En présence d\'un excès de dioxygène, le butane est totalement oxydé.'
      },
      {
        name: 'Volume de gaz consommé',
        formula: 'V_{\\text{air}} = V_{\\text{butane}} \\times 325 \\quad \\text{et} \\quad V_{\\text{O}_2} = \\frac{V_{\\text{air}}}{5}',
        explanation: '1 m³ de butane nécessite 32,5 m³ d\'air et 6,5 m³ de dioxygène pur pour sa combustion complète.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Régler un brûleur à gaz pour éviter le noircissement des casseroles',
        procedure: '1. Allumer le brûleur avec précaution. 2. Observer la couleur de la flamme. 3. Si la flamme est jaune et fume, faire tourner la virole pour agrandir l\'ouverture d\'arrivée d\'air. 4. Dès que la flamme devient totalement bleue et vive, bloquer la virole. La combustion est désormais complète.',
        tip: 'Si les casseroles noircissent, c\'est le signe incontestable d\'une combustion incomplète et d\'un danger de monoxyde de carbone !'
      }
    ],
    examples: [
      {
        statement: 'Un brûleur de cuisine consomme 0,2 m³ de butane pour cuisiner. Sachant que 0,1 m³ de butane nécessite 32,5 m³ d\'air, quel volume de dioxygène a été consommé ?',
        solution: 'Volume d\'air nécessaire = 0,2 × (32,5 / 0,1) = 0,2 × 325 = 65 m³ d\'air. Comme l\'air contient 1/5 de dioxygène : V(O2) = 65 / 5 = 13 m³ de dioxygène.'
      }
    ],
    exercises: [
      {
        question: 'Complète le tableau comparatif entre combustion complète et incomplète du butane :\n- Position virole : ......\n- Couleur de la flamme : ......\n- Chaleur dégagée : ......\n- Produits formés : ......',
        correction: '- Combustion complète : virole ouverte | flamme bleue | très chaude | dioxyde de carbone + eau.\n- Combustion incomplète : virole fermée | flamme jaune fuligineuse | peu chaude | carbone + monoxyde de carbone + dioxyde de carbone + eau.'
      },
      {
        question: 'Pourquoi le monoxyde de carbone est-il particulièrement traître et dangereux pour l\'homme ?',
        correction: 'Parce qu\'il est totalement inodore et incolore : la victime ne sent rien et ne voit rien venir avant de s\'évanouir et de s\'asphyxier.'
      }
    ],
    evaluationSituation: {
      context: 'Au Lycée Moderne de Boundiali, les élèves de 6ème remarquent que depuis quelques jours, les marmites en aluminium de la cantine scolaire ressortent toutes noircies de suie noire après la cuisson du riz, ce qui n\'arrivait pas auparavant. La cuisinière s\'inquiète et sollicite les élèves.',
      instructions: [
        '1. Nomme le gaz combustible utilisé dans les bouteilles de la cantine.',
        '2. Précise le type de combustion qui se produit sous les marmites.',
        '3. Explique scientifiquement la cause du dépôt noir observé sur les marmites.',
        '4. Alerte la cuisinière sur le gaz toxique invisible produit lors de cette combustion et indique la démarche technique pour résoudre le problème.'
      ],
      solutionGuide: '1. Le combustible utilisé est le gaz butane. 2. Il s\'agit d\'une combustion incomplète du butane. 3. Le manque de dioxygène empêche la combustion totale : des atomes de carbone n\'ont pas pu réagir et se déposent sous forme de suie noire (carbone pur) sur le fond des marmites. 4. Danger : La combustion incomplète produit du monoxyde de carbone (CO), gaz inodore et mortel pouvant asphyxier le personnel de cuisine. Remède : Ouvrir largement la virole d\'admission d\'air des brûleurs pour rétablir une flamme bleue et veiller à une bonne aération de la cantine.'
    },
    examTraps: [
      'Confondre flamme jaune (incomplète, dangereuse) et flamme bleue (complète, optimale).',
      'Oublier de citer le monoxyde de carbone (CO) et le carbone (C) parmi les produits de la combustion incomplète.',
      'Croire que la combustion incomplète ne produit pas d\'eau (elle en produit également, mais avec du carbone et du CO en plus).'
    ],
    quickMemo: 'Butane + assez d\'O2 (virole ouverte) -> Combustion complète : flamme bleue, CO2 + H2O | Butane + manque d\'O2 (virole fermée) -> Combustion incomplète : flamme jaune, carbone C (suie) + monoxyde de carbone CO (mortel inodore) + CO2 + H2O.',
    keywords: ['butane', 'combustion complète', 'combustion incomplète', 'virole', 'flamme bleue', 'flamme jaune', 'monoxyde de carbone', 'carbone', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 3 : L'AIR ET LES COMBUSTIONS - LEÇON 11
  // ========================================================
  {
    id: 'pc-6e-dangers-combustions-securite',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'L\'air et les combustions',
    lessonTitle: 'Dangers des combustions et sécurité : Incendie, asphyxie, explosion, intoxication, triangle du feu et prévention',
    objectifs: [
      'Identifier les quatre dangers majeurs liés aux combustions : l\'incendie (feu destructeur non maîtrisé), l\'asphyxie (privation de dioxygène), l\'explosion (combustion quasi instantanée d\'un mélange gazeux avec onde de choc) et l\'intoxication (empoisonnement par fumées ou monoxyde de carbone)',
      'Définir et schématiser le Triangle du Feu avec ses trois éléments indissociables : le Combustible, le Comburant (dioxygène) et la Source de chaleur (énergie d\'activation)',
      'Expliquer le principe d\'extinction d\'un feu : supprimer au moins l\'un des trois éléments du triangle du feu',
      'Appliquer les méthodes concrètes d\'extinction : refroidir avec de l\'eau (supprimer la chaleur), étouffer avec du sable, une couverture ou un couvercle (supprimer le dioxygène / comburant), fermer le robinet de gaz ou défricher une zone coupe-feu (supprimer le combustible)',
      'Interpréter les pictogrammes de sécurité relatifs aux incendies (substance inflammable, substance comburante, substance explosive)',
      'Énoncer les consignes de sécurité vitales en cas de fuite de gaz ou d\'incendie (ne jamais actionner d\'interrupteur électrique, aérer immédiatement, composer le numéro d\'urgence des pompiers 180)'
    ],
    fullCourseContent: `1. Les Quatre Dangers Majeurs des Combustions :
- L'Incendie : Feu de grande ampleur qui échappe au contrôle de l'homme et se propage rapidement en causant d'immenses pertes matérielles, la destruction des forêts et des habitations, et des pertes en vies humaines.
- L'Asphyxie : État d'un organisme vivant dont les cellules sont privées du dioxygène indispensable à la respiration (survient dans une pièce fermée où le feu a consommé tout l'oxygène).
- L'Explosion : Combustion extrêmement rapide et violente d'un mélange de gaz combustible et d'air, déclenchée par une minuscule étincelle ou flamme, produisant une onde de choc destructrice et un bruit assourdissant.
- L'Intoxication : Empoisonnement de l'organisme provoqué par l'inhalation de substances chimiques toxiques produites par les flammes (monoxyde de carbone CO, vapeurs de plastique brûlé, suies).

2. Le Triangle du Feu :
Pour qu'une combustion puisse s'allumer et se maintenir, TROIS ÉLÉMENTS doivent obligatoirement être réunis simultanément :
1. Le Combustible : La matière qui brûle (bois, papier, charbon, essence, gaz butane, tissus, matières plastiques).
2. Le Comburant : Le gaz qui fait brûler le combustible (le dioxygène présent dans l'air ambiant).
3. La Source de chaleur (ou énergie d'activation) : Ce qui apporte l'énergie thermique nécessaire pour enflammer le mélange (étincelle électrique, flamme d'allumette, braise incandescente, frottement intense, foudre).
Si l'un seul de ces trois éléments vient à manquer, LA COMBUSTION EST IMPOSSIBLE.

3. Comment Éteindre un Feu ? (Rupture du Triangle du Feu) :
Pour éteindre un feu naissant, la règle scientifique consiste à supprimer au moins l'un des trois sommets du triangle du feu :
- Action 1 : Supprimer la source de chaleur (Refroidissement) :
  * Arroser le combustible avec de l'eau. L'eau absorbe la chaleur en se vaporisant et refroidit le combustible en dessous de sa température d'inflammation.
- Action 2 : Supprimer le comburant (Étouffement) :
  * Recouvrir le feu avec un couvercle métallique (sur une poêle), une couverture antifeu, du sable sec ou de la terre.
  * Utiliser un extincteur au dioxyde de carbone (neige carbonique) ou à poudre : le gaz lourd chasse l'air et prive immédiatement les braises de dioxygène.
- Action 3 : Supprimer le combustible (Isolement) :
  * Fermer immédiatement la vanne d'arrivée de la bouteille de gaz.
  * Créer des tranchées pare-feu en défrichant la végétation pour stopper la progression d'un feu de brousse en brousse.

4. Pictogrammes de Sécurité Liés aux Incendies :
- Flamme (Produit inflammable) : S'enflamme très facilement au contact d'une étincelle ou de la chaleur (alcool, vernis, diluants). À tenir éloigné de toute flamme.
- Flamme au-dessus d'un cercle (Produit comburant) : Fournit de l'oxygène et peut déclencher ou attiser violemment un incendie. À stocker à l'écart des combustibles.
- Bombe qui explose (Produit explosif) : Risque de détonation brutale sous le choc, les frottements ou la chaleur (feux d'artifice, dynamite).

5. Règles Pratiques de Sécurité Domestique :
- En cas d'odeur suspecte de gaz dans la cuisine :
  * NE JAMAIS allumer d'allumette, de briquet ou de bougie.
  * NE JAMAIS toucher à un interrupteur électrique (ni pour allumer, ni pour éteindre : l'étincelle interne du bouton ferait exploser la pièce !).
  * Ouvrir grand les portes et fenêtres pour évacuer le gaz par courant d'air.
  * Fermer la bouteille de gaz à la source.
- Feux de brousse en Côte d'Ivoire : Les brûlis agricoles et la chasse aux rongeurs par le feu sont des causes majeures de feux incontrôlés qui détruisent des plantations entières de cacao, café et anacarde, et favorisent la désertification dans le Nord.`,
    definitions: [
      {
        term: 'Triangle du feu',
        definition: 'Modèle représentant les trois conditions indispensables à toute combustion : combustible, comburant et source de chaleur.'
      },
      {
        term: 'Incendie',
        definition: 'Combustion incontrôlée et dévastatrice de matières combustibles se propageant dans l\'espace.'
      },
      {
        term: 'Asphyxie',
        definition: 'Arrêt de l\'oxygénation de l\'organisme dû à l\'épuisement du dioxygène dans l\'air ou au blocage respiratoire.'
      },
      {
        term: 'Explosion',
        definition: 'Combustion instantanée d\'un mélange gazeux combustible libérant brusquement une énorme pression et de la chaleur.'
      },
      {
        term: 'Étouffement',
        definition: 'Action d\'éteindre un feu en le privant de son comburant (le dioxygène de l\'air).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle d\'extinction du feu',
        statement: 'Pour éteindre un feu, il faut et il suffit de supprimer l\'un des trois éléments du triangle du feu.'
      },
      {
        name: 'Règle de sécurité en cas de fuite de gaz',
        statement: 'Ne jamais actionner d\'interrupteur électrique ni allumer de flamme dans une pièce où flotte une odeur de gaz ; aérer immédiatement.'
      }
    ],
    formulas: [
      {
        name: 'Éléments du triangle du feu',
        formula: '\\text{Combustible} + \\text{Comburant (O}_2\\text{)} + \\text{Source de chaleur} \\iff \\text{Feu / Combustion}',
        explanation: 'La rupture d\'un seul de ces trois facteurs éteint le feu immédiatement.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Réagir face à un début d\'incendie de cuisine',
        procedure: '1. Si de l\'huile prend feu dans une poêle, NE JAMAIS VERSER D\'EAU (l\'eau se vaporiserait instantanément et projetterait une boule de feu de gouttelettes brûlantes). 2. Couper le feu sous la poêle (supprimer la chaleur). 3. Poser délicatement un couvercle métallique ou une serviette humide sur la poêle (étouffer le comburant). 4. Couper la vanne de gaz de la bouteille (supprimer le combustible). 5. Si le feu ne s\'éteint pas, évacuer et appeler les sapeurs-pompiers (180).',
        tip: 'L\'eau sur l\'huile bouillante enflammée est extrêmement dangereuse !'
      }
    ],
    examples: [
      {
        statement: 'Pourquoi une allumette s\'éteint-elle lorsqu\'on souffle brusquement dessus ?',
        solution: 'Le souffle d\'air froid rapide disperse et refroidit la flamme en dessous de la température d\'ignition du bois : on a supprimé la source de chaleur nécessaire au maintien du triangle du feu.'
      }
    ],
    exercises: [
      {
        question: 'Associe chaque danger à sa définition :\n1. Explosion | 2. Asphyxie | 3. Incendie | 4. Intoxication.\nDéfinitions : a. Difficulté respiratoire par manque d\'O2 | b. Éclatement violent d\'un mélange gazeux | c. Feu destructeur de grande ampleur | d. Empoisonnement par un produit toxique.',
        correction: '1 -> b (explosion) | 2 -> a (asphyxie) | 3 -> c (incendie) | 4 -> d (intoxication).'
      },
      {
        question: 'Quels sont les trois éléments du triangle du feu ? Donne un exemple concret pour chacun.',
        correction: '1. Le combustible (ex: bois sec, papier, gaz butane).\n2. Le comburant (le dioxygène de l\'air).\n3. La source de chaleur (ex: flamme d\'allumette, étincelle).'
      }
    ],
    evaluationSituation: {
      context: 'Au village de Sapli-Sépingo, deux jeunes garçons vont à la chasse aux rongeurs dans la savane. Pour déloger les rats de leur terrier, ils allument un feu d\'herbes sèches à l\'aide d\'une allumette. Après la chasse, ils s\'en vont sans éteindre les braises. Une demi-heure plus tard, sous l\'effet du vent d\'harmattan, un incendie géant se déclare et ravage les champs de café et de cacao voisins.',
      instructions: [
        '1. Identifie pour ce feu les trois éléments constitutifs du triangle du feu.',
        '2. Explique scientifiquement pourquoi le feu a repris et s\'est propagé à toute allure.',
        '3. Indique deux conséquences graves des feux de brousse sur l\'environnement et l\'économie villageoise.',
        '4. Propose trois mesures concrètes que les chasseurs auraient dû appliquer pour empêcher ce sinistre.'
      ],
      solutionGuide: '1. Triangle du feu : Combustible = les herbes et broussailles sèches ; Comburant = le dioxygène de l\'air apporté par le vent ; Source de chaleur = la braise ardente laissée sans surveillance. 2. Le vent d\'harmattan chaud et sec a apporté un flux continu de comburant (dioxygène) tout en transportant les étincelles vers les herbes très sèches voisines, activant la combustion en chaîne. 3. Conséquences : Perte des récoltes et ruine des paysans (famine et pauvreté), destruction de la faune, dégradation et érosion des sols, et avancée de la désertification. 4. Mesures préventives : Éteindre totalement le foyer avec de l\'eau ou l\'étouffer avec de la terre/du sable avant de quitter les lieux, vérifier qu\'il ne subsiste aucune fumée ni braise, et proscrire l\'utilisation du feu comme méthode de chasse en saison sèche.'
    },
    examTraps: [
      'Verser de l\'eau sur une poêle d\'huile en feu (erreur grave : il faut étouffer avec un couvercle !).',
      'Allumer la lumière en sentant une odeur de gaz (l\'interrupteur produit une étincelle invisible qui fait exploser la pièce).',
      'Confondre asphyxie (manque de dioxygène) et intoxication (inhalation d\'un poison comme le CO).'
    ],
    quickMemo: 'Triangle du feu : Combustible + Comburant (O2) + Source de chaleur | Pour éteindre : casser le triangle (eau = refroidir, sable/couvercle = étouffer O2, vanne = couper combustible) | Odeur de gaz : aérer sans toucher aux interrupteurs ni allumettes !',
    keywords: ['dangers combustions', 'incendie', 'asphyxie', 'explosion', 'intoxication', 'triangle du feu', 'extinction', 'sécurité gaz', '6e']
  }
];
