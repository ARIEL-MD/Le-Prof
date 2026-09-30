import { OfficialIvorianCourse } from '../../types';

export const LYCEE_SECONDE_COURSES: OfficialIvorianCourse[] = [
  // ==========================================
  // 1. SVT - SECONDE C & A : LA CELLULE & L'ULTRASTRUCTURE
  // ==========================================
  {
    id: 'svt-2nde-cellule-ultrastructure',
    discipline: 'svt',
    disciplineLabel: 'SVT (Seconde C & A)',
    level: '2nde',
    levelLabel: 'Seconde (2nde A & 2nde C)',
    serie: '2nde_c',
    serieLabel: '2nde C / 2nde A',
    chapter: "Organisation et ultrastructure de la cellule vivante",
    lessonTitle: "La cellule, unité structurale et fonctionnelle de tous les êtres vivants",
    objectifs: [
      "Identifier au microscope optique et électronique les constituants fondamentaux d'une cellule animale et végétale",
      "Distinguer une cellule procaryote (sans noyau délimité) d'une cellule eucaryote (avec noyau et organites)",
      "Reconnaître le rôle clé de la membrane plasmique, du cytoplasme, du noyau, des mitochondries et des chloroplastes",
      "Schématiser avec rigueur et légender une cellule eucaryote observée au microscope"
    ],
    fullCourseContent: `1. La théorie cellulaire :
Tous les êtres vivants (animaux, végétaux, champignons, bactéries) sont constitués d'une ou plusieurs cellules. La cellule est l'unité fondamentale structurale, fonctionnelle et reproductive du vivant.

2. Comparaison cellule animale et cellule végétale :
- Points communs (cellules eucaryotes) :
  * Membrane plasmique : délimite la cellule et régule les échanges avec le milieu extérieur.
  * Cytoplasme : milieu hyaloplasmique gélatineux contenant les organites.
  * Noyau : entouré d'une double membrane perforée de pores, renferme l'information génétique (ADN sous forme de chromatine).
  * Mitochondries : organites de la respiration cellulaire, centrales énergétiques produisant de l'ATP.
  * Réticulum endoplasmique et appareil de Golgi : synthèse, maturation et transport des protéines.
- Spécificités de la cellule végétale :
  * Paroi squelettique pectocellulosique : rigide, externe à la membrane, confère forme géométrique et résistance mécanique.
  * Chloroplastes : organites contenant la chlorophylle, siège de la photosynthèse chez les autotrophes.
  * Grande vacuole centrale : occupe jusqu'à 90% du volume cellulaire, assure la turgescence cellulaire.

3. Cellules procaryotes vs eucaryotes :
- Eucaryotes : possèdent un noyau vrai délimité par une enveloppe nucléaire et des organites compartimentés (ex : cellule d'épiderme d'oignon, cellule buccale humaine).
- Procaryotes : matériel génétique circulaire libre dans le cytoplasme (nucléoïde) sans enveloppe nucléaire ni organites membranés (ex : bactéries comme Escherichia coli).`,
    definitions: [
      {
        term: 'Cellule',
        definition: "Plus petite unité vivante autonome capable de métabolisme, de croissance et de reproduction."
      },
      {
        term: 'Organite',
        definition: "Compartiment cellulaire délimité par une ou deux membranes biologiques et accomplissant une fonction physiologique spécifique (ex : mitochondrie, chloroplaste)."
      },
      {
        term: 'Autotrophie',
        definition: "Capacité d'un végétal chlorophyllien à synthétiser sa propre matière organique à partir d'eau, de sels minéraux et de CO2 en utilisant l'énergie lumineuse."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de distinction eucaryote / procaryote',
        statement: 'Présence de noyau individualisé = Eucaryote ; Absence d\'enveloppe nucléaire = Procaryote.'
      },
      {
        name: 'Signes distinctifs de la cellule végétale',
        statement: 'Paroi cellulosique rigide + chloroplastes verts + grande vacuole = Végétale chlorophyllienne.'
      }
    ],
    formulas: [
      {
        name: 'Grossissement total du microscope optique',
        formula: 'G_{total} = G_{oculaire} \\times G_{objectif}',
        explanation: 'Multiplication du pouvoir grossissant de l\'oculaire par celui de l\'objectif utilisé.',
        unitOrCondition: 'Sans unité (ex: 10 × 40 = 400×)'
      },
      {
        name: 'Taille réelle d\'un objet microscopique',
        formula: 'Taille_{reelle} = \\frac{Taille_{mesuree}}{Grossissement}',
        explanation: 'Permet de convertir la taille mesurée sur un dessin ou sous micromètre oculaire en micromètres (µm).',
        unitOrCondition: '1 µm = 10⁻⁶ m = 0,001 mm'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Réaliser un dessin d\'observation cellulaire conforme aux normes SVT',
        procedure: '1. Tracer au crayon de papier net et non gras, sans hachures ni coloriage.\n2. Aligner les traits de rappel horizontaux à la règle à droite ou à gauche.\n3. Écrire les légendes en lettres minuscules bien lisibles au bout des traits de rappel.\n4. Mentionner impérativement le titre complet souligné (ex : Dessin d\'observation d\'une cellule d\'épiderme d\'oignon) et le grossissement total.',
        tip: 'Ne jamais croiser les traits de rappel et ne jamais mettre de flèches au bout des traits.'
      }
    ],
    examples: [
      {
        statement: "Un élève observe une cellule végétale au microscope optique avec un oculaire x10 et un objectif x40. Sur son dessin, la cellule mesure 4 cm. Calcule le grossissement total et la taille réelle de la cellule en micromètres.",
        solution: "1. Grossissement total : G = 10 × 40 = 400.\n2. Taille mesurée : 4 cm = 40 000 µm.\n3. Taille réelle = 40 000 / 400 = 100 µm."
      }
    ],
    exercises: [
      {
        question: "Citez trois organites présents dans une cellule foliaire d'épinard mais absents d'un globule blanc humain.",
        correction: "1. La paroi squelettique (ou paroi pectocellulosique).\n2. Les chloroplastes (siège de la photosynthèse).\n3. La grande vacuole centrale développée (les cellules animales n'ont que de très petites vésicules vacuolaires temporaires)."
      }
    ],
    evaluationSituation: {
      context: "Lors d'une séance de TP de SVT au Lycée Moderne d'Adzopé, un groupe d'élèves observe au microscope deux préparations sans étiquette : le prélèvement X montre des cellules polygonales emboîtées avec un liséré externe rigide et des grains verts ; le prélèvement Y montre des cellules arrondies isolées sans enveloppe rigide.",
      instructions: [
        "1. Identifie la nature animale ou végétale de chaque prélèvement en justifiant par deux critères visibles.",
        "2. Nomme les organites verts responsables de la couleur du prélèvement X et précise leur fonction biochimique.",
        "3. Schématise une cellule type du prélèvement X avec 5 légendes exactes."
      ],
      solutionGuide: "X = cellule végétale (paroi pectocellulosique rigide et chloroplastes verts). Y = cellule animale (forme souple/arrondie, absence de paroi et de chloroplastes). Organite vert = chloroplaste (assure la photosynthèse par captation de l'énergie lumineuse et synthèse de glucides)."
    },
    examTraps: [
      "Confondre membrane plasmique et paroi cellulaire : toutes les cellules ont une membrane plasmique, mais seuls les végétaux, champignons et bactéries possèdent en plus une paroi externe.",
      "Oublier d'indiquer le grossissement ou le titre sur un dessin d'observation (pénalisé systématiquement au barème de SVT)."
    ],
    quickMemo: "Cellule = membrane + cytoplasme + noyau (si eucaryote). Végétale = paroi + chloroplaste + grande vacuole. Animal = pas de paroi, pas de chloroplaste.",
    keywords: ["cellule", "ultrastructure", "organite", "membrane", "cytoplasme", "noyau", "chloroplaste", "mitochondrie", "paroi", "eucaryote", "procaryote", "svt 2nde"]
  },

  // ==========================================
  // 2. SVT - SECONDE C & A : L'ADN & LA MITOSE
  // ==========================================
  {
    id: 'svt-2nde-adn-mitose-cycle-cellulaire',
    discipline: 'svt',
    disciplineLabel: 'SVT (Seconde C & A)',
    level: '2nde',
    levelLabel: 'Seconde (2nde A & 2nde C)',
    serie: '2nde_c',
    serieLabel: '2nde C / 2nde A',
    chapter: "L'information génétique et sa transmission par mitose",
    lessonTitle: "Structure de la molécule d'ADN et déroulement du cycle cellulaire mitotique",
    objectifs: [
      "Décrire la structure universelle en double hélice de la molécule d'ADN et la complémentarité des bases azotées (A-T, C-G)",
      "Définir les notions de gène, allèle, chromosome et caryotype",
      "Expliquer les étapes du cycle cellulaire : interphase (G1, S, G2) et mitose (Prophase, Métaphase, Anaphase, Télophase)",
      "Démontrer que la mitose assure une reproduction cellulaire conforme conservant le nombre de chromosomes (2n)"
    ],
    fullCourseContent: `1. L'ADN, support moléculaire de l'hérédité :
- Structure : Découverte par Watson et Crick (1953), l'ADN (Acide Désoxyribonucléique) est une molécule universelle formée de deux brins enroulés en double hélice antiparallèle.
- Les nucléotides : chaque nucléotide est constitué d'un acide phosphorique, d'un sucre (désoxyribose) et d'une base azotée parmi quatre :
  * Adénine (A)
  * Thymine (T)
  * Guanine (G)
  * Cytosine (C)
- Règle de complémentarité : A s'apparie toujours avec T (par 2 liaisons hydrogène), G s'apparie toujours avec C (par 3 liaisons hydrogène). Ainsi, [A] = [T] et [G] = [C].

2. Chromosomes, gènes et allèles :
- Chromatine et chromosome : Le chromosome est de l'ADN condensé associé à des protéines (histones).
- Gène : Fragment d'ADN codant pour un caractère précis.
- Allèles : Versions alternatives d'un même gène résultant de mutations.
- Caryotype : Carte ordonnée des chromosomes d'une cellule diploïde (2n = 46 chromosomes chez l'être humain, dont 22 paires d'autosomes et 1 paire d'hétérochromosomes sexuels XX ou XY).

3. Le cycle cellulaire et la mitose :
- Interphase :
  * Phase G1 (croissance et synthèse d'ARN et protéines, chromosomes à 1 chromatide)
  * Phase S (réplication semi-conservative de l'ADN, la quantité d'ADN passe de Q à 2Q, chromosomes passent à 2 chromatides identiques unies par le centromère)
  * Phase G2 (préparation à la division)
- La Mitose (P-M-A-T) :
  * Prophase : condensation de la chromatine en chromosomes visibles, disparition de la membrane nucléaire, formation du fuseau achromatique.
  * Métaphase : alignement des centromères des chromosomes sur le plan équatorial (plaque équatoriale).
  * Anaphase : rupture brutale des centromères et migration polaire des chromatides sœurs vers chaque pôle de la cellule.
  * Télophase : décondensation des chromosomes, reformation des membranes nucléaires, cytodiérèse (étranglement cellulaire chez l'animal, plaque cellulaire chez le végétal).
- Conclusion fondamentale : 1 cellule mère à 2n chromosomes à 2 chromatides donne 2 cellules filles identiques à 2n chromosomes à 1 chromatide.`,
    definitions: [
      {
        term: 'Mitose',
        definition: "Processus de division cellulaire eucaryote qui produit deux cellules filles génétiquement identiques entre elles et à la cellule mère initiale."
      },
      {
        term: 'Réplication semi-conservative',
        definition: "Mécanisme au cours duquel chaque brin de la molécule d'ADN mère sert de matrice pour la synthèse d'un brin nouveau complémentaire."
      },
      {
        term: 'Diploïdie (2n)',
        definition: "État d'une cellule possédant des paires de chromosomes homologues, un d'origine paternelle et un d'origine maternelle."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Loi de Chargaff (complémentarité)',
        statement: 'Dans toute molécule d\'ADN bicaténaire : %A = %T et %G = %C, donc (A+G)/(T+C) = 1.'
      },
      {
        name: 'Maintien du caryotype par mitose',
        statement: 'La mitose conserve rigoureusement le nombre de chromosomes : une cellule 2n = 46 produit deux cellules 2n = 46.'
      }
    ],
    formulas: [
      {
        name: 'Équivalence des bases azotées',
        formula: '\\frac{A + G}{T + C} = 1 \\quad \\text{et} \\quad \\%A + \\%T + \\%G + \\%C = 100\\%',
        explanation: 'Vérifie la double hélice et la complémentarité stricte des bases puriques (A, G) et pyrimidiques (T, C).',
        unitOrCondition: 'ADN bicaténaire'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Reconnaître les 4 phases de la mitose sous microscope',
        procedure: '1. Chromosomes dispersés en pelote épaisse : Prophase.\n2. Chromosomes alignés au centre de la cellule : Métaphase (plaque équatoriale).\n3. Deux lots de chromatides séparés se déplaçant vers les pôles opposés : Anaphase.\n4. Deux noyaux fils reformés et sillon de division au milieu : Télophase.',
        tip: 'Le mot mnémotechnique est PMAT (Pour Mon Agréable Téléphone).'
      }
    ],
    examples: [
      {
        statement: "Un fragment d'ADN compte 1 000 nucléotides au total. L'analyse révèle qu'il contient 300 Adénines. Détermine le nombre de Thymines, Guanines et Cytosines.",
        solution: "1. Par complémentarité : Nombre de T = Nombre de A = 300.\n2. Total A + T = 300 + 300 = 600.\n3. Reste pour G + C = 1 000 - 600 = 400.\n4. Comme G = C, on a : G = 400 / 2 = 200 et C = 200.\nConclusion : A = 300, T = 300, G = 200, C = 200."
      }
    ],
    exercises: [
      {
        question: "À quelle phase du cycle cellulaire la quantité d'ADN est-elle doublée ? Sous quelle forme se présentent les chromosomes à la fin de cette phase ?",
        correction: "La quantité d'ADN est doublée pendant la phase S (phase de Synthèse) de l'interphase par réplication semi-conservative. À la fin de cette phase, chaque chromosome est constitué de deux chromatides sœurs rigoureusement identiques reliées par un centromère."
      }
    ],
    evaluationSituation: {
      context: "Dans un laboratoire de recherche agronomique à Bingerville, des chercheurs dosent la quantité d'ADN par cellule dans des racines d'igname en prolifération. Ils constatent que le taux passe de 3,2 pg en début d'interphase à 6,4 pg avant la division cellulaire, puis retombe à 3,2 pg par cellule fille.",
      instructions: [
        "1. Nomme le phénomène biologique qui permet de faire passer la masse d'ADN de 3,2 pg à 6,4 pg.",
        "2. Explique précisément l'étape de la mitose qui permet de ramener la masse d'ADN à 3,2 pg dans chaque cellule fille.",
        "3. Déduis l'importance de ce mécanisme pour la stabilité de la variété d'igname."
      ],
      solutionGuide: "1. La réplication semi-conservative de l'ADN en phase S. 2. L'anaphase, où a lieu le clivage des centromères et la séparation des deux chromatides sœurs vers chaque pôle. 3. Cela garantit une reproduction conforme : toutes les cellules conservent le même patrimoine génétique et les qualités agronomiques de la variété."
    },
    examTraps: [
      "Confondre mitose et méiose : la mitose produit 2 cellules diploïdes (2n) identiques pour la croissance, la méiose produit 4 gamètes haploïdes (n) différents pour la reproduction.",
      "Confondre chromosome à 2 chromatides (1 seul chromosome dédoublé) et paire de chromosomes homologues."
    ],
    quickMemo: "ADN = A-T (2 liaisons) et G-C (3 liaisons). Cycle cellulaire = Interphase (G1, S, G2) + Mitose (PMAT). Mitose : 1 cellule 2n → 2 cellules 2n conformes.",
    keywords: ["ADN", "mitose", "interphase", "prophase", "métaphase", "anaphase", "télophase", "caryotype", "chromosome", "nucléotide", "réplication", "svt 2nde"]
  },

  // ==========================================
  // 3. FRANÇAIS - SECONDE : LA CONTRACTION DE TEXTE (RÉSUMÉ AU LYCÉE)
  // ==========================================
  {
    id: 'francais-2nde-contraction-de-texte-resume',
    discipline: 'francais',
    disciplineLabel: 'Français (Seconde)',
    level: '2nde',
    levelLabel: 'Seconde (2nde A & 2nde C)',
    serie: '2nde_a',
    serieLabel: '2nde A & 2nde C',
    chapter: "Techniques d'expression écrite : La contraction de texte",
    lessonTitle: "Méthodologie officielle du résumé de texte argumentatif au lycée",
    objectifs: [
      "Analyser la structure argumentative d'un texte d'auteur (thèse défendue, arguments principaux, exemples)",
      "Dégager le système d'énonciation et la progression logique des connecteurs",
      "Reformuler les idées essentielles dans son propre style sans plagier ni déformer la pensée de l'auteur",
      "Respecter scrupuleusement la règle du quota de mots (réduction au quart ou au tiers avec marge de ±10%)"
    ],
    fullCourseContent: `1. Définition et exigences de l'épreuve :
La contraction de texte (ou résumé de texte) consiste à réduire un texte discursif ou argumentatif à une fraction prescrite de sa longueur initiale (généralement le quart ou le tiers), tout en conservant :
- Le système d'énonciation (rester à la même personne grammaticale que l'auteur, ne jamais dire "l'auteur dit que..."),
- L'ordre et l'enchaînement logique des arguments,
- La neutralité absolue (aucun commentaire personnel, aucune contestation des propos).

2. Ce qu'il faut conserver vs ce qu'il faut éliminer :
- À conserver impérativement :
  * Le thème général et la thèse soutenue par l'auteur,
  * Les arguments majeurs étayant chaque étape du raisonnement,
  * Les connecteurs logiques structurants (cause, conséquence, opposition, concession).
- À éliminer :
  * Les exemples purement illustratifs (sauf s'ils constituent l'argument lui-même),
  * Les répétitions, digressions et paraphrases oratoires,
  * Les citations intégrales d'autres auteurs,
  * Les métaphores poétiques et fioritures de style.

3. La règle du décompte des mots au lycée ivoirien :
- Qu'est-ce qu'un mot ? Toute unité typographique séparée par deux espaces ou par un tiret / apostrophe.
- Exemples de comptage :
  * "c'est-à-dire" = 4 mots (c' / est / à / dire)
  * "l'arbre" = 2 mots (l' / arbre)
  * "aujourd'hui" = 1 seul mot (reconnu comme mot unique)
  * "socio-économique" = 2 mots
  * "Côte d'Ivoire" = 3 mots
- Marge tolérée : ±10%. Pour une consigne de 100 mots, le résumé doit obligatoirement compter entre 90 et 110 mots. Indiquer le décompte exact à la fin de la copie.`,
    definitions: [
      {
        term: 'Contraction de texte',
        definition: "Exercice méthodique consistant à condenser un texte argumentatif en respectant l'enchaînement des idées, le système d'énonciation de l'auteur et un calibrage de mots strict."
      },
      {
        term: 'Paraphrase',
        definition: "Défaut majeur consistant à recopier le texte en changeant simplement quelques mots sans véritable effort de reformulation personnelle."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Interdiction de la distanciation énonciative',
        statement: 'Ne jamais écrire "L\'auteur démontre que", "Selon l\'auteur" ou "Dans ce texte". Épouser directement la voix énonciative de l\'auteur.'
      },
      {
        name: 'Règle des ±10% du volume de mots',
        statement: 'Si le calibrage demandé est de N mots, le texte rédigé doit vérifier : 0,90 × N ≤ Nombre_de_mots ≤ 1,10 × N.'
      }
    ],
    formulas: [
      {
        name: 'Fourchette de calibrage autorisée',
        formula: 'N_{min} = N \\times 0{,}90 \\quad \\le \\quad N_{redige} \\quad \\le \\quad N_{max} = N \\times 1{,}10',
        explanation: 'Tout dépassement en dessous ou au-dessus de cette fourchette entraîne des pénalités directes de points sur la copie.',
        unitOrCondition: 'Ex: Pour N = 120 mots, intervalle [108 ; 132 mots]'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Première lecture et balisage du texte',
        procedure: '1. Lire le texte une première fois pour saisir le thème et la thèse centrale.\n2. Souligner les connecteurs logiques majeurs (Mais, Or, Cependant, En effet, Par conséquent).\n3. Découper le texte en unités de sens ou paragraphes argumentatifs.',
        tip: 'Identifier la question implicite à laquelle répond le texte.'
      },
      {
        stepNumber: 2,
        title: 'Sélection et reformulation des idées',
        procedure: '1. Rédiger pour chaque paragraphe une phrase de synthèse sans regarder le texte d\'origine.\n2. Remplacer les listes d\'énumérations par un terme générique (hyperonyme).\n3. Relier les phrases par des connecteurs précis et fluides.',
        tip: 'Bannir le montage de citations ou les copier-coller de phrases entières.'
      },
      {
        stepNumber: 3,
        title: 'Comptage précis et ajustement',
        procedure: '1. Compter les mots du premier jet.\n2. Si trop long : condenser les propositions subordonnées en groupes nominaux.\n3. Si trop court : expliciter un lien logique ou un argument condensé à l\'excès.\n4. Recopier au propre et mentionner en bas : [Nombre de mots : ...].',
        tip: 'Placer une barre verticale tous les 50 mots au brouillon pour sécuriser le compte.'
      }
    ],
    examples: [
      {
        statement: "Texte source (42 mots) : « L'utilisation inconsidérée des sacs plastiques non biodégradables provoque une pollution massive des lagunes d'Abidjan, obstrue les canalisations urbaines et décime la faune aquatique, entraînant ainsi des inondations meurtrières à chaque saison des pluies. » Résumez en une phrase de 12 à 15 mots.",
        solution: "« Les déchets plastiques polluent les eaux urbaines et causent de désastreuses inondations saisonnières. » (13 mots, calibrage parfaitement respecté)."
      }
    ],
    exercises: [
      {
        question: "Pourquoi l'emploi de la formule « L'auteur affirme que la jeunesse doit s'instruire » est-elle sanctionnée dans un résumé de texte ?",
        correction: "Parce que le résumé exige d'épouser le système d'énonciation du texte sans introduire de regard extérieur ni de mention méta-textuelle de l'auteur. Il fallait écrire directement : « La jeunesse doit s'instruire »."
      }
    ],
    evaluationSituation: {
      context: "En devoir surveillé au Lycée Classique de Cocody, les élèves doivent résumer un texte de 400 mots de Bernard Dadié sur l'importance du travail et des valeurs morales en Afrique. La consigne impose : Résumez ce texte en 100 mots (marge de ±10%).",
      instructions: [
        "1. Calcule la fourchette minimale et maximale du nombre de mots autorisés.",
        "2. Identifie les éléments du texte que tu dois obligatoirement supprimer.",
        "3. Rédige un projet de résumé fluide respectant les contraintes énonciatives."
      ],
      solutionGuide: "1. 100 - 10% = 90 mots minimum ; 100 + 10% = 110 mots maximum. 2. Supprimer les anecdotes personnelles, les exemples locaux répétitifs, les adverbes superflus et les figures de style purement oratoires. 3. Respecter la stricte neutralité énonciative."
    },
    examTraps: [
      "Oublier d'écrire le nombre exact de mots à la fin du devoir (pénalité de 1 à 2 points).",
      "Faire du copier-coller (plagiat textuel), ce qui est sévèrement sanctionné.",
      "Donner son propre avis personnel ou conclure par une ouverture (strictement réservé à la discussion/commentaire, interdit dans le résumé)."
    ],
    quickMemo: "Résumé = Pas de 'l'auteur dit', pas d'exemples inutiles, pas d'avis personnel. Respecter ±10% des mots et l'ordre des arguments de l'auteur.",
    keywords: ["contraction de texte", "résumé", "arguments", "décompte de mots", "énonciation", "hyperonyme", "connecteurs logiques", "français 2nde"]
  },

  // ==========================================
  // 4. HISTOIRE - SECONDE : L'AFRIQUE MÉDIÉVALE & LES GRANDS EMPIRES
  // ==========================================
  {
    id: 'histoire-2nde-afrique-empires-ghana-mali-songhai',
    discipline: 'histoire',
    disciplineLabel: 'Histoire (Seconde)',
    level: '2nde',
    levelLabel: 'Seconde (2nde A & 2nde C)',
    serie: '2nde_a',
    serieLabel: '2nde A & 2nde C',
    chapter: "L'Afrique des origines au XVIe siècle",
    lessonTitle: "Les grands empires de l'Afrique de l'Ouest : Ghana, Mali et Songhaï",
    objectifs: [
      "Caractériser l'organisation politique, économique et socioculturelle de l'Empire du Ghana (Wagadou)",
      "Expliquer l'apogée de l'Empire du Mali sous Soundiata Keïta et Mansa Moussa (le pèlerinage de 1324)",
      "Analyser la grandeur et l'effondrement de l'Empire Songhaï (bataille de Tondibi en 1591)",
      "Comprendre le rôle du commerce transsaharien (or, sel, esclaves) et l'islamisation dans le rayonnement ouest-africain"
    ],
    fullCourseContent: `1. L'Empire du Ghana (IVe - XIe siècle) :
- Surnommé « le pays de l'or » par les chroniqueurs arabes (comme Al-Bakri), le Ghana est le premier grand empire soudanais.
- Capitale : Koumbi Saleh, divisée en deux quartiers (le quartier royal animiste et le quartier commerçant musulman).
- Économie : Contrôle rigoureux du commerce transsaharien du sel gemme du Sahara échangé contre l'or du Bambouk et du Bouré.
- Déclin : Fragilisé par les invasions des Almoravides au XIe siècle et les révoltes des vassaux sosso (Soumaoro Kanté).

2. L'Empire du Mali (XIIIe - XVe siècle) :
- Fondation : Fondé par Soundiata Keïta après sa victoire historique à la bataille de Kirina (1235) contre Soumaoro Kanté.
- Charte de Kouroukan Fouga (1236) : Considérée comme l'une des premières déclarations des droits humains (paix sociale, respect des métiers, dignité humaine).
- Apogée sous Kankou Moussa (Mansa Moussa) : Son célèbre pèlerinage à La Mecque en 1324, avec des tonnes d'or distribuées au Caire, fit chuter le cours mondial de l'or et fit inscrire le Mali sur l'Atlas Catalan de 1375.
- Rayonnement intellectuel : Tombouctou et Djenné deviennent de hauts lieux d'enseignement islamique et universitaire (mosquée et université de Sankoré).

3. L'Empire Songhaï (XVe - XVIe siècle) :
- Grands souverains : Sonni Ali Ber (fondateur militaire) puis Askia Mohammed Touré (fondateur de la dynastie des Askias, réorganisateur administratif).
- Organisation : Empire centralisé avec ministres, gouverneurs provinciaux et flotte fluviale sur le fleuve Niger.
- Chute brutale : Défait en 1591 à la bataille de Tondibi par l'armée marocaine de Djouder Pacha, armée d'arquebuses à feu face aux lances et arcs songhaïs.`,
    definitions: [
      {
        term: 'Commerce transsaharien',
        definition: "Réseau d'échanges marchands reliant l'Afrique du Nord et le Moyen-Orient à l'Afrique subsaharienne à travers le désert du Sahara, grâce aux caravanes de dromadaires."
      },
      {
        term: 'Charte du Manden (Kouroukan Fouga)',
        definition: "Serment solennel proclamé en 1236 après l'avènement de Soundiata Keïta, établissant les principes fondamentaux de coexistence pacifique, de justice et de libertés individuelles au Mali médiéval."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Fondement économique des empires ouest-africains',
        statement: 'La puissance des empires soudanais reposait sur le contrôle stratégique des pistes caravanières et l\'échange or du Sud contre sel du Nord.'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Analyser un document historique sur l\'Afrique médiévale',
        procedure: '1. Identifier la nature (récit de voyageur arabe comme Ibn Battuta ou Al-Bakri, tradition orale des griots).\n2. Situer le contexte chronologique (siècle, règne du souverain).\n3. Extraire les informations économiques, politiques ou religieuses.\n4. Confronter la source écrite extérieure avec les données archéologiques et la tradition orale.',
        tip: 'Toujours exercer un esprit critique sur le regard des chroniqueurs arabes extérieurs.'
      }
    ],
    examples: [
      {
        statement: "Quel événement survenu en 1591 a marqué la fin des grands empires soudanais médiévaux en Afrique de l'Ouest ?",
        solution: "C'est la bataille de Tondibi (1591), où l'armée songhaï fut écrasée par l'expédition marocaine du sultan Ahmed al-Mansur, marquant la dislocation de l'Empire Songhaï."
      }
    ],
    exercises: [
      {
        question: "Citez deux raisons qui expliquent le rayonnement mondial de l'Empire du Mali au XIVe siècle.",
        correction: "1. La colossale richesse en or mise en valeur par le pèlerinage de Mansa Moussa en 1324.\n2. Le rayonnement scientifique et universitaire des centres de Tombouctou (université de Sankoré) et Djenné attirant savants et théologiens."
      }
    ],
    evaluationSituation: {
      context: "Lors d'un débat au Club d'Histoire du lycée de Daloa, un intervenant soutient que l'Afrique subsaharienne n'avait aucune structure étatique organisée ni droit écrit avant l'arrivée des puissances coloniales européennes au XIXe siècle.",
      instructions: [
        "1. Réfute cette affirmation en t'appuyant sur l'exemple précis de l'Empire du Mali au XIIIe siècle.",
        "2. Présente le contenu et la portée historique de la Charte de Kouroukan Fouga.",
        "3. Montre l'importance des villes de Tombouctou et Gao dans les échanges internationaux."
      ],
      solutionGuide: "Démontrer l'existence d'États centralisés hautement structurés (Ghana, Mali, Songhaï). La Charte de Kouroukan Fouga (1236) est l'une des plus anciennes constitutions au monde codifiant droits sociaux et paix civile. Tombouctou et Gao étaient des métropoles marchandes et intellectuelles mondiales."
    },
    examTraps: [
      "Confondre la capitale du Ghana (Koumbi Saleh) avec celle du Mali (Niani) ou du Songhaï (Gao).",
      "Attribuer la victoire de Kirina à Mansa Moussa au lieu de Soundiata Keïta (1235)."
    ],
    quickMemo: "Ghana (Or & Sel, Koumbi Saleh) → Mali (Soundiata, Mansa Moussa 1324, Kirina 1235) → Songhaï (Sonni Ali, Askia Mohammed, chute à Tondibi 1591).",
    keywords: ["Ghana", "Mali", "Songhaï", "Soundiata Keïta", "Mansa Moussa", "Kouroukan Fouga", "Tombouctou", "Tondibi", "commerce transsaharien", "histoire 2nde"]
  },

  // ==========================================
  // 5. GÉOGRAPHIE - SECONDE : CLIMATS & BIOMES EN CÔTE D'IVOIRE
  // ==========================================
  {
    id: 'geographie-2nde-milieux-naturels-cote-ivoire',
    discipline: 'geographie',
    disciplineLabel: 'Géographie (Seconde)',
    level: '2nde',
    levelLabel: 'Seconde (2nde A & 2nde C)',
    serie: '2nde_a',
    serieLabel: '2nde A & 2nde C',
    chapter: "La Terre et les grands ensembles bioclimatiques",
    lessonTitle: "Les milieux naturels et zones climatiques de la Côte d'Ivoire",
    objectifs: [
      "Localiser et caractériser les deux grandes zones climatiques ivoiriennes (climat équatorial de transition au Sud et climat tropical au Nord)",
      "Expliquer l'influence des masses d'air majeures : la Mousson humide du Golfe de Guinée et l'Harmattan sec du Sahara",
      "Décrire la végétation correspondante : forêt dense ombrophile au Sud et savanes arborées/herbeuses au Nord",
      "Évaluer les menaces environnementales : déforestation massive, désertification et mesures de préservation"
    ],
    fullCourseContent: `1. Facteurs généraux du climat ivoirien :
Située entre le 4e et le 10e parallèle Nord, la Côte d'Ivoire bénéficie d'un climat chaud et humide rythmé par le balancement de deux masses d'air :
- La Mousson : vent humide du Sud-Ouest issu de l'anticyclone de Sainte-Hélène apportant les pluies.
- L'Harmattan : vent sec, chaud et poussiéreux du Nord-Est soufflant depuis le désert saharien pendant la saison sèche.
- La limite de rencontre de ces deux masses d'air est le Front Intertropical (FIT).

2. Les deux grands domaines climatiques :
- Le Sud (Climat équatorial atténué ou attiéen) :
  * 4 saisons bien marquées : grande saison des pluies (mai-juillet), petite saison sèche (août), petite saison des pluies (septembre-novembre), grande saison sèche (décembre-avril).
  * Pluviométrie abondante (> 1 400 à 2 200 mm/an), hygrométrie élevée (> 80%).
  * Végétation : Forêt dense humide toujours verte (forêt ombrophile et mésophile) avec espèces arborées précieuses (Iroko, Samba, Teck, Acajou).
- Le Nord (Climat tropical soudanien ou baouléen vers le centre) :
  * 2 saisons seulement : une saison des pluies (mai à octobre) et une longue saison sèche (novembre à avril) sous forte influence de l'Harmattan.
  * Pluviométrie modérée (1 000 à 1 200 mm/an).
  * Végétation : Savane herbeuse, savane arborée et forêts-galeries le long des cours d'eau (Bandama, Comoé, Sassandra).

3. Enjeux écologiques et agronomiques :
- La déforestation : Le couvert forestier ivoirien est passé de 16 millions d'hectares en 1960 à moins de 3 millions aujourd'hui sous l'effet de l'agriculture pionnière extensive (cacao, café, hévéa) et du bois d'œuvre.
- Stratégies de remédiation : Politique nationale de reforestation (reboisement intensif de la SODEFOR), agroforesterie cacaoyère et création de parcs nationaux protégés (Taï, Comoé).`,
    definitions: [
      {
        term: 'Mousson',
        definition: "Vent océanique chaud et chargé d'humidité provenant de l'océan Atlantique Sud, responsable de la majeure partie des précipitations en Afrique de l'Ouest."
      },
      {
        term: 'Harmattan',
        definition: "Vent continental sec, chaud le jour et frais la nuit, transportant de fines poussières sahariennes et provoquant une baisse drastique de l'humidité relative."
      },
      {
        term: 'Front Intertropical (FIT)',
        definition: "Zone de convergence intertropicale où se rencontrent la Mousson humide et l'Harmattan sec, déterminant les dates d'apparition des pluies."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Décroissance pluviométrique Sud-Nord',
        statement: 'En Côte d\'Ivoire, la pluviométrie moyenne décroît globalement du Sud côtier (> 1800 mm) vers le Nord frontalier (< 1000 mm).'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Construire et analyser un diagramme ombrothermique (Courbe de Gaussen)',
        procedure: '1. Tracer l\'axe horizontal avec les 12 mois de l\'année (J à D).\n2. Axe vertical gauche : Précipitations P en mm.\n3. Axe vertical droit : Températures T en °C avec l\'échelle P = 2T.\n4. La période est dite sèche lorsque la courbe des précipitations passe sous celle des températures (P < 2T).',
        tip: 'Le critère de Gaussen (P < 2T) est universel pour identifier les mois biologiquement secs.'
      }
    ],
    examples: [
      {
        statement: "À Korhogo (Nord de la Côte d'Ivoire), le mois de janvier enregistre T = 27 °C et P = 3 mm. Ce mois est-il écologiquement sec ?",
        solution: "On applique la règle de Gaussen : 2 × T = 2 × 27 = 54 mm. Comme P (3 mm) < 2T (54 mm), le mois de janvier est un mois aride/sec."
      }
    ],
    exercises: [
      {
        question: "Citez les deux vents antagonistes dont le déplacement régit les saisons en Côte d'Ivoire.",
        correction: "La Mousson (vent océanique humide venant du Sud-Ouest) et l'Harmattan (vent continental sec venant du Nord-Est)."
      }
    ],
    evaluationSituation: {
      context: "Une coopérative agricole de San Pedro souhaite développer des cultures maraîchères et s'interroge sur les périodes d'irrigation et les risques de sécheresse comparés à la région de Ferkessédougou.",
      instructions: [
        "1. Indique le type de climat régnant à San Pedro et celui de Ferkessédougou.",
        "2. Compare le régime pluviométrique de ces deux localités (nombre de saisons et volume annuel).",
        "3. Propose deux recommandations agronomiques pour préserver les sols à San Pedro face aux fortes pluies."
      ],
      solutionGuide: "San Pedro = Climat équatorial de transition (4 saisons, plus de 1800 mm/an). Ferkessédougou = Climat tropical soudanien (2 saisons, longue saison sèche). Recommandations : culture sous couvert végétal, paillage, bandes enherbées pour limiter le ravinement et le lessivage des sols ferrallitiques."
    },
    examTraps: [
      "Confondre la Mousson (vent humide) et l'Harmattan (vent sec).",
      "Affirmer que toute la Côte d'Ivoire n'a que deux saisons : le Sud a 4 saisons et le Nord en a 2."
    ],
    quickMemo: "Sud = Attiéen (4 saisons, forêt dense, > 1400 mm). Nord = Soudanien (2 saisons, savane, Harmattan, ~1000 mm). Mousson = pluie, Harmattan = sécheresse.",
    keywords: ["climat ivoirien", "mousson", "harmattan", "FIT", "forêt dense", "savane", "déforestation", "diagramme ombrothermique", "géographie 2nde"]
  },

  // ==========================================
  // 6. MATHS - SECONDE : LE SECOND DEGRÉ DANS ℝ
  // ==========================================
  {
    id: 'maths-2nde-second-degre-trinome',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques (Seconde C & A)',
    level: '2nde',
    levelLabel: 'Seconde (2nde A & 2nde C)',
    serie: '2nde_c',
    serieLabel: '2nde C / 2nde A',
    chapter: "Équations, Inéquations et Trinôme du Second Degré",
    lessonTitle: "Forme canonique, discriminant Δ, factorisation et signe du trinôme",
    objectifs: [
      "Mettre un polynôme du second degré P(x) = ax² + bx + c sous sa forme canonique",
      "Calculer le discriminant Δ = b² - 4ac et déterminer le nombre de racines réelles",
      "Factoriser P(x) en produit de facteurs du premier degré lorsque cela est possible",
      "Dresser le tableau de signes du trinôme et résoudre des inéquations du second degré"
    ],
    fullCourseContent: `1. Définition du trinôme du second degré :
On appelle polynôme ou trinôme du second degré toute expression de la forme :
P(x) = ax² + bx + c, où a, b, c sont des réels et a ≠ 0.

2. Forme canonique :
Pour tout x ∈ ℝ :
P(x) = a [ (x + b / (2a))² - (b² - 4ac) / (4a²) ]
En posant le discriminant Δ = b² - 4ac :
P(x) = a [ (x + b / (2a))² - Δ / (4a²) ]

3. Résolution de l'équation ax² + bx + c = 0 dans ℝ :
- Si Δ < 0 : L'équation n'admet aucune racine réelle. L'ensemble des solutions est S = ∅. Le trinôme n'est pas factorisable dans ℝ.
- Si Δ = 0 : L'équation admet une racine double : x₀ = -b / (2a).
  Forme factorisée : P(x) = a (x - x₀)².
- Si Δ > 0 : L'équation admet deux racines réelles distinctes :
  x₁ = (-b - √Δ) / (2a)   et   x₂ = (-b + √Δ) / (2a).
  Forme factorisée : P(x) = a (x - x₁) (x - x₂).

4. Signe du trinôme ax² + bx + c :
- Règle générale : Le trinôme ax² + bx + c est toujours du signe de a à l'extérieur des racines, et du signe opposé de a entre les racines.
  * Si Δ < 0 : P(x) est du signe strict de a pour tout x ∈ ℝ.
  * Si Δ = 0 : P(x) est du signe de a pour tout x ≠ x₀, et s'annule en x₀.
  * Si Δ > 0 : P(x) est du signe de a sur ]-∞ ; x₁[ ∪ ]x₂ ; +∞[ et du signe de (-a) sur ]x₁ ; x₂[ (en supposant x₁ < x₂).`,
    definitions: [
      {
        term: 'Discriminant (Δ)',
        definition: "Nombre réel défini par Δ = b² - 4ac dont le signe détermine le nombre de racines réelles de l'équation ax² + bx + c = 0."
      },
      {
        term: 'Racine d\'un polynôme',
        definition: "Valeur de x pour laquelle le polynôme s'annule : P(x) = 0."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle du signe du trinôme',
        statement: 'ax² + bx + c est du signe de a partout, sauf entre ses racines (quand Δ > 0) où il est du signe de -a.'
      },
      {
        name: 'Somme et produit des racines',
        statement: 'Si ax² + bx + c = 0 admet deux racines x₁ et x₂, alors S = x₁ + x₂ = -b/a et P = x₁ · x₂ = c/a.'
      }
    ],
    formulas: [
      {
        name: 'Discriminant',
        formula: '\\Delta = b^2 - 4ac',
        explanation: 'Permet de classifier les solutions réelles d\'une équation quadratique.',
        unitOrCondition: 'a ≠ 0'
      },
      {
        name: 'Racines distinctes (quand Δ > 0)',
        formula: 'x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}, \\quad x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}',
        explanation: 'Solutions exactes de l\'équation ax² + bx + c = 0.',
        unitOrCondition: 'Δ > 0'
      },
      {
        name: 'Forme factorisée',
        formula: 'P(x) = a(x - x_1)(x - x_2)',
        explanation: 'Ne jamais oublier de multiplier par le coefficient dominant a devant !',
        unitOrCondition: 'Δ > 0'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Résoudre une inéquation du second degré P(x) ≤ 0 ou P(x) > 0',
        procedure: '1. Identifier a, b et c.\n2. Calculer le discriminant Δ = b² - 4ac.\n3. Trouver les racines éventuelles x₁ et x₂.\n4. Construire le tableau de signes avec la règle : signe de a à l\'extérieur des racines, signe contraire de a entre les racines.\n5. Lire l\'ensemble des solutions sous forme d\'intervalle selon le sens de l\'inégalité.',
        tip: 'Toujours faire attention à l\'inclusion ou exclusion des bornes (inégalité stricte ou large).'
      }
    ],
    examples: [
      {
        statement: "Résous dans ℝ l'inéquation : 2x² - 5x + 2 ≤ 0.",
        solution: "1. a = 2, b = -5, c = 2.\n2. Δ = (-5)² - 4(2)(2) = 25 - 16 = 9 = 3² > 0.\n3. Racines : x₁ = (5 - 3) / 4 = 2/4 = 1/2 et x₂ = (5 + 3) / 4 = 8/4 = 2.\n4. Comme a = 2 > 0, le trinôme est négatif ou nul entre les racines.\n5. Conclusion : S = [1/2 ; 2]."
      }
    ],
    exercises: [
      {
        question: "Donne la forme canonique de P(x) = x² - 6x + 5.",
        correction: "P(x) = (x - 3)² - 9 + 5 = (x - 3)² - 4."
      }
    ],
    evaluationSituation: {
      context: "Un artisan chaudronnier à Bouaké fabrique des bacs métalliques à section rectangulaire. L'aire de la section en mètres carrés dépend de la largeur x selon l'expression : A(x) = -2x² + 8x. L'artisan doit obtenir une aire d'au moins 6 m².",
      instructions: [
        "1. Écris l'inéquation traduisant la contrainte de l'artisan.",
        "2. Résous l'équation associée -2x² + 8x - 6 = 0.",
        "3. Détermine l'intervalle des largeurs x répondant au cahier des charges."
      ],
      solutionGuide: "1. -2x² + 8x ≥ 6 équivaut à -2x² + 8x - 6 ≥ 0. 2. Δ = 64 - 48 = 16 = 4². x₁ = (-8 + 4) / -4 = 1 m et x₂ = (-8 - 4) / -4 = 3 m. 3. Comme a = -2 < 0, le trinôme est positif entre les racines : S = [1 ; 3]. La largeur doit être comprise entre 1 m et 3 m."
    },
    examTraps: [
      "Oublier de multiplier par a dans la forme factorisée a(x - x₁)(x - x₂). Si a = 2, écrire (x - x₁)(x - x₂) sans le 2 est une erreur fréquente.",
      "Calculer (-5)² en écrivant -25 au lieu de +25."
    ],
    quickMemo: "P(x) = ax² + bx + c. Δ = b² - 4ac. Si Δ > 0 : deux racines. Signe de a à l'extérieur des racines, signe de -a entre les racines.",
    keywords: ["second degré", "discriminant", "racines", "forme canonique", "trinôme", "inéquation", "tableau de signes", "maths 2nde"]
  }
];
