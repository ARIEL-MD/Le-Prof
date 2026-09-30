import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_6E_PHYSIQUE_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 6ÈME - THÈME 1 : ÉLECTRICITÉ - LEÇON 1
  // ========================================================
  {
    id: 'pc-6e-circuit-electrique',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Électricité',
    lessonTitle: 'Le circuit électrique : Éléments, schématisation, sens du courant, conducteurs et isolants',
    objectifs: [
      'Identifier les bornes d\'une pile plate (petite lame = borne positive +, grande lame = borne négative -) et d\'une pile cylindrique (bouton central = +, enveloppe/base métallique = -)',
      'Identifier les deux bornes d\'une lampe électrique (le culot et le plot central pour lampes à vis ou à baïonnette)',
      'Réaliser l\'allumage d\'une lampe avec une pile plate puis une pile cylindrique à l\'aide d\'un fil conducteur',
      'Définir un circuit électrique simple (chaîne continue de dipôles formant une boucle fermée reliée aux bornes d\'un générateur)',
      'Distinguer le générateur (fournit le courant : pile, batterie, panneau solaire) du récepteur (utilise le courant : lampe, moteur)',
      'Schématiser un circuit électrique en utilisant les symboles normalisés (pile, lampe, fil, interrupteur ouvert/fermé, moteur)',
      'Mettre en évidence le sens conventionnel du courant électrique (sort par la borne + et rentre par la borne - du générateur) à l\'aide d\'un moteur',
      'Distinguer un conducteur électrique (laisse passer le courant : métaux fer, cuivre, aluminium, graphite/mine de crayon) d\'un isolant (ne laisse pas passer le courant : plastique, bois sec, verre, gomme, air, papier sec)'
    ],
    fullCourseContent: `1. Les Bornes d'une Pile et d'une Lampe :
- Une pile est un générateur électrique : elle possède deux bornes différentes (c'est un dipôle polarisé).
  * Pile plate (4,5 V) : Elle possède deux lames métalliques. La petite lame est la borne positive (+) et la grande lame est la borne négative (-).
  * Pile cylindrique (1,5 V) : Le bouton central est la borne positive (+) et le culot/enveloppe/base métallique plate est la borne négative (-).
- Une lampe électrique est un récepteur électrique muni de deux bornes : le culot (partie métallique filetée ou cylindrique) et le plot central (point noir/grisâtre situé à la base).

2. Allumage d'une Lampe Électrique :
- Avec une pile plate : Mettre directement en contact le plot central de la lampe avec l'une des lames de la pile et le culot avec l'autre lame.
- Avec une pile cylindrique : Poser le plot central de la lampe sur le bouton central (+) de la pile, et relier le culot à la base métallique (-) à l'aide d'un fil de connexion conducteur.

3. Circuit Électrique Simple Allumage :
- Un circuit électrique est une chaîne continue d'éléments électriques (dipôles) reliés les uns aux autres directement ou par des fils de connexion aux bornes d'un générateur.
- Rôles des composants :
  * Le générateur (la pile) : fournit et fait circuler le courant électrique.
  * Le récepteur (la lampe, le moteur) : consomme et utilise le courant électrique.
  * L'interrupteur : commande l'ouverture ou la fermeture du circuit.
  * Les fils de connexion : assurent la liaison électrique entre les dipôles.
- Circuit fermé : Le courant circule, la lampe brille.
- Circuit ouvert : Le courant ne circule pas, la lampe est éteinte.

4. Schématisation Normalisée d'un Circuit Électrique :
Pour représenter clairement un circuit, on utilise des symboles conventionnels universels :
- Pile : deux traits inégaux et parallèles (grand trait fin pour +, petit trait épais pour -).
- Lampe : un cercle traversé d'une croix.
- Moteur : un cercle contenant la lettre M.
- Fil de connexion : un trait droit continu.
- Interrupteur ouvert : deux points reliés par un trait levé.
- Interrupteur fermé : deux points reliés par un trait couché.
Un schéma électrique se dessine toujours à la règle, de forme rectangulaire.

5. Sens Conventionnel du Courant Électrique :
- Expérience : Branchons un petit moteur électrique aux bornes d'une pile. Le moteur tourne dans un sens. Si on inverse les branchements aux bornes de la pile, le moteur tourne en sens inverse.
- Règle fondamentale : Dans un circuit électrique extérieur, le courant électrique sort du générateur par la borne positive (+) et revient au générateur par la borne négative (-). Ce sens est indiqué sur les schémas par des flèches placées sur les fils de connexion.

6. Conducteurs et Isolants Électriques :
En intercalant divers objets dans un circuit testeur (composé d'une pile, d'une lampe et de fils) :
- Conducteur électrique : Corps qui se laisse traverser par le courant électrique (la lampe s'allume). Exemples : tous les métaux (cuivre, fer, aluminium, or, argent), la mine de crayon (graphite), l'eau salée, le corps humain.
- Isolant électrique : Corps qui ne se laisse pas traverser par le courant électrique (la lampe reste éteinte). Exemples : plastique, bois sec, verre, caoutchouc, gomme, air, porcelaine, tissu sec.`,
    definitions: [
      {
        term: 'Circuit électrique',
        definition: 'Chaîne ininterrompue d\'éléments électriques reliés aux bornes d\'un générateur pour former une boucle conductrice.'
      },
      {
        term: 'Générateur',
        definition: 'Dipôle qui produit le courant électrique et le fait circuler dans le circuit (ex: pile plate, pile ronde, batterie, panneau solaire, dynamo).'
      },
      {
        term: 'Récepteur',
        definition: 'Dipôle qui utilise le courant électrique fourni par le générateur pour fonctionner (ex: lampe, moteur électrique, sonnerie).'
      },
      {
        term: 'Conducteur électrique',
        definition: 'Matériau qui permet le passage du courant électrique (ex: cuivre, aluminium, fer, graphite).'
      },
      {
        term: 'Isolant électrique',
        definition: 'Matériau qui s\'oppose au passage du courant électrique (ex: plastique, verre, bois sec, caoutchouc).'
      },
      {
        term: 'Sens conventionnel du courant',
        definition: 'Sens de circulation du courant électrique à l\'extérieur du générateur, de la borne positive (+) vers la borne négative (-).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle des bornes de la pile',
        statement: 'Pour la pile plate : petite lame = borne positive (+), grande lame = borne négative (-). Pour la pile cylindrique : bouton central = borne (+), base métallique = borne (-).'
      },
      {
        name: 'Règle des bornes de la lampe',
        statement: 'Une lampe brille uniquement si ses deux bornes distinctes (le culot et le plot central) sont connectées chacune à une borne différente de la pile.'
      },
      {
        name: 'Sens du courant',
        statement: 'À l\'extérieur du générateur, le courant électrique circule toujours du pôle positif (+) vers le pôle négatif (-).'
      }
    ],
    formulas: [
      {
        name: 'Condition de circulation du courant',
        formula: '\\text{Circuit fermé avec générateur} \\implies \\text{Courant circule} \\implies \\text{Récepteur actif}',
        explanation: 'Si le circuit comporte un isolant ou un interrupteur ouvert, la boucle est rompue et le courant ne circule plus.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Schématiser un circuit électrique simple',
        procedure: '1. Tracer un rectangle au crayon à papier à l\'aide d\'une règle. 2. Laisser des espaces pour insérer les dipôles. 3. Dessiner le symbole de la pile en identifiant la grande barre fine (+) et la petite épaisse (-). 4. Insérer le cercle avec une croix pour la lampe et les deux points pour l\'interrupteur. 5. Placer des flèches sur les fils orientées de (+) vers (-) pour le sens conventionnel du courant.',
        tip: 'Ne jamais placer un symbole dans un coin du rectangle, toujours sur les côtés droits.'
      },
      {
        stepNumber: 2,
        title: 'Tester si un matériau est conducteur ou isolant',
        procedure: '1. Réaliser un circuit série avec une pile, une lampe et deux pinces crocodiles libres. 2. Pincer l\'objet à tester entre les deux pinces. 3. Si la lampe s\'allume -> l\'objet est conducteur. Si la lampe reste éteinte -> l\'objet est isolant.',
        tip: 'La mine de crayon est en graphite (carbone) : bien que non métallique, elle est conductrice !'
      }
    ],
    examples: [
      {
        statement: 'Un élève relie les deux lames d\'une pile plate au culot d\'une lampe uniquement. La lampe s\'allume-t-elle ?',
        solution: 'Non, la lampe ne s\'allumera pas car les deux bornes de la pile sont reliées à la même borne de la lampe (le culot). Pour s\'allumer, il faut relier une lame au culot et l\'autre lame au plot central.'
      }
    ],
    exercises: [
      {
        question: 'Complète : La pile plate possède deux lames. La petite lame est la borne ...... et la grande lame est la borne ...... Les deux bornes de la lampe sont le ...... et le ......',
        correction: 'La petite lame est la borne positive (+) et la grande lame est la borne négative (-). Les deux bornes de la lampe sont le culot et le plot central.'
      },
      {
        question: 'Parmi les corps suivants, classe les conducteurs et les isolants : fil de cuivre, règle en plastique, gomme, clou en fer, mine de crayon à papier, bois sec, eau salée.',
        correction: '- Conducteurs : fil de cuivre, clou en fer, mine de crayon à papier (graphite), eau salée.\n- Isolants : règle en plastique, gomme, bois sec.'
      },
      {
        question: 'Quel est le sens conventionnel du courant électrique dans un circuit ?',
        correction: 'Le courant électrique sort du générateur par sa borne positive (+) et revient par sa borne négative (-).'
      }
    ],
    evaluationSituation: {
      context: 'Une élève de 6ème veut s\'exercer à la réalisation d\'un circuit électrique. Elle dispose d\'une pile plate, de trois fils de connexion, d\'une lampe montée sur support, de deux pinces crocodiles et d\'une règle en bois trouvée dans l\'atelier de son père. Elle relie tous ces éléments les uns à la suite des autres en boucle fermée, mais constate avec déception que la lampe ne s\'allume pas.',
      instructions: [
        '1. Définis ce qu\'est un circuit électrique.',
        '2. Schématise le circuit réalisé par l\'élève en faisant apparaître la règle en bois.',
        '3. Explique scientifiquement pourquoi la lampe ne s\'allume pas et propose une solution pour qu\'elle brille.'
      ],
      solutionGuide: '1. Un circuit électrique est une chaîne ininterrompue d\'éléments électriques reliés aux bornes d\'un générateur par des conducteurs. 2. Schéma : rectangle avec pile (+ -), lampe (croix dans cercle), fils et symbole d\'une résistance/bloc annoté « règle en bois ». 3. Explication : La règle en bois sec est un isolant électrique, elle ne laisse pas passer le courant électrique et empêche la fermeture du circuit. Solution : Retirer la règle en bois et relier directement les pinces crocodiles entre elles ou intercaler un objet conducteur (ex: tige métallique, fil de cuivre).'
    },
    examTraps: [
      'Confondre la borne positive et la borne négative de la pile plate (la petite lame est la borne +, la grande lame est la borne -).',
      'Croire que le verre de l\'ampoule ou le culot seul est une borne (les deux bornes sont le culot et le plot central).',
      'Penser que tous les conducteurs sont des métaux (la mine de crayon en graphite et l\'eau salée sont conductrices sans être des métaux).',
      'Oublier d\'orienter les flèches du courant de (+) vers (-) à l\'extérieur de la pile.'
    ],
    quickMemo: 'Pile plate (+ petite lame, - grande lame) | Pile ronde (+ bouton, - base) | Lampe (culot + plot central) | Sens : du (+) vers le (-) | Conducteurs : métaux, fer, cuivre, alu, graphite | Isolants : plastique, bois sec, verre, air, gomme.',
    keywords: ['circuit électrique', 'pile plate', 'pile cylindrique', 'lampe', 'culot', 'plot central', 'générateur', 'récepteur', 'conducteurs', 'isolants', 'sens du courant', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 1 : ÉLECTRICITÉ - LEÇON 2
  // ========================================================
  {
    id: 'pc-6e-commande-circuit-electrique',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Électricité',
    lessonTitle: 'Commande d\'un circuit électrique : Interrupteur simple, bouton-poussoir, commutateur et va-et-vient',
    objectifs: [
      'Identifier le rôle d\'un organe de commande dans un circuit électrique (ouvrir ou fermer le circuit pour commander le récepteur)',
      'Décrire le fonctionnement et le symbole d\'un interrupteur simple (commande permanente)',
      'Décrire le fonctionnement et les deux types de boutons-poussoirs : ouvert au repos (BP-O, commande temporaire : sonnette, sirène de collège) et fermé au repos (BP-F, commande temporaire : lampe de réfrigérateur, plafonnier de portière de voiture)',
      'Décrire le fonctionnement d\'un commutateur à 3 bornes (C = commun, R = repos, T = travail) permettant l\'allumage alterné de deux lampes',
      'Réaliser et schématiser un montage va-et-vient utilisant deux commutateurs pour allumer ou éteindre une lampe depuis deux points distincts (escaliers, couloirs, chambres)',
      'Découvrir le relais électromagnétique (dispositif permettant à un circuit de faible puissance de commander un circuit de forte puissance à distance)'
    ],
    fullCourseContent: `1. Commande d'un Circuit Électrique par Interrupteur Simple :
- Rôle : L'interrupteur simple permet d'ouvrir ou de fermer un circuit électrique de façon permanente.
- Fonctionnement :
  * Interrupteur fermé : Le contact métallique est établi, le courant circule en boucle fermée, la lampe reste allumée en continu.
  * Interrupteur ouvert : Le contact est rompu (l'air isole), le circuit est ouvert, la lampe reste éteinte.
- Utilisation : Éclairage habituel des pièces de la maison (chambres, salon).

2. Commande par Bouton-Poussoir (Commande Temporaire) :
Un bouton-poussoir ne maintient son action que lorsqu'on appuie dessus ; dès qu'on le relâche, un ressort interne le ramène à sa position initiale. Il permet donc une commande temporaire. On distingue :
- Le Bouton-Poussoir Ouvert au repos (BP-O) :
  * Au repos (sans appui) : Le circuit est ouvert, la lampe ou sonnerie ne fonctionne pas.
  * En position travail (lorsqu'on appuie) : Le circuit se ferme temporairement et le récepteur fonctionne.
  * Usages courants : Bouton de sonnette à l'entrée d'une maison, avertisseur sonore / sirène de collège, démarreur de moto.
- Le Bouton-Poussoir Fermé au repos (BP-F) :
  * Au repos (aucun obstacle n'appuie dessus) : Le circuit est fermé, la lampe est allumée.
  * En position travail (lorsqu'un obstacle appuie sur le poussoir) : Le contact s'ouvre et la lampe s'éteint.
  * Usages courants : Lampe à l'intérieur du réfrigérateur (en ouvrant la porte, le poussoir se détend au repos et s'allume ; en fermant la porte, la portière appuie sur le poussoir et éteint la lampe) ; plafonnier de portière de voiture.

3. Commande par Commutateur et Allumage Alterné :
- Un commutateur possède trois bornes :
  * La borne Commune (notée C)
  * La borne Repos (notée R)
  * La borne Travail (notée T)
- Fonctionnement : Selon la position de la manette, la borne C est connectée soit à R, soit à T.
- Allumage alterné de deux lampes (L1 et L2) :
  * En position repos (C relié à R) : La lampe L1 est allumée et la lampe L2 est éteinte.
  * En position travail (C relié à T) : La lampe L2 s'allume et la lampe L1 s'éteint.
  * Le commutateur permet ainsi d'allumer alternativement deux lampes.

4. Le Montage Va-et-Vient :
- Définition et principe : Le montage va-et-vient utilise deux commutateurs (C1 et C2) reliés entre eux par leurs bornes R-R' et T-T'.
- Il permet de commander (allumer ou éteindre) une même lampe électrique à partir de deux endroits différents.
- Fonctionnement :
  * Si les deux commutateurs sont sur la même position (tous deux sur R ou tous deux sur T), le circuit est fermé : la lampe brille.
  * Si l'un est sur R et l'autre sur T, le circuit est ouvert : la lampe est éteinte.
  * Actionner l'un ou l'autre des commutateurs inverse l'état de la lampe (l'allume si elle était éteinte, l'éteint si elle était allumée).
- Usages : Éclairage des escaliers d'un immeuble (un interrupteur au bas, un interrupteur en haut), longs couloirs, chambres avec commande à la porte et au chevet du lit.

5. Documentation : Le Relais Électrique :
- Inventé par Samuel Morse en 1837, le relais est un interrupteur actionné à distance par un électro-aimant.
- Rôle : Il sépare le circuit de commande (faible tension, faible intensité, sans danger) du circuit de puissance ou d'exécution (forte intensité, comme les phares de voiture ou les moteurs industriels).
- Avantages : Évite la surchauffe des câbles, protège les interrupteurs du tableau de bord et élimine les chutes de tension.`,
    definitions: [
      {
        term: 'Organe de commande',
        definition: 'Élément qui permet d\'interrompre ou d\'établir le passage du courant électrique dans un circuit (interrupteur, poussoir, commutateur).'
      },
      {
        term: 'Interrupteur simple',
        definition: 'Organe de commande qui ouvre ou ferme un circuit électrique de façon permanente (stable).'
      },
      {
        term: 'Bouton-poussoir',
        definition: 'Organe de commande qui ouvre ou ferme un circuit électrique de façon temporaire grâce à un ressort de rappel.'
      },
      {
        term: 'Commutateur',
        definition: 'Organe de commande à trois bornes (Commun, Repos, Travail) dirigeant le courant vers deux voies distinctes.'
      },
      {
        term: 'Montage va-et-vient',
        definition: 'Montage électrique utilisant deux commutateurs pour allumer ou éteindre une lampe depuis deux points distincts.'
      },
      {
        term: 'Relais',
        definition: 'Interrupteur commandé à distance par un signal électrique séparant circuit de commande et circuit de puissance.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Distinction Permanente vs Temporaire',
        statement: 'L\'interrupteur simple commande de manière permanente ; le bouton-poussoir commande de manière temporaire.'
      },
      {
        name: 'Principe du va-et-vient',
        statement: 'La lampe est allumée quand les deux commutateurs sont connectés à la même ligne intermédiaire (soit R-R\', soit T-T\').'
      }
    ],
    formulas: [
      {
        name: 'État d\'un montage va-et-vient',
        formula: '\\text{État de la lampe} = \\begin{cases} \\text{Allumée} & \\text{si } (C_1 = R \\text{ et } C_2 = R\') \\text{ ou } (C_1 = T \\text{ et } C_2 = T\') \\\\ \\text{Éteinte} & \\text{si les positions diffèrent} \\end{cases}',
        explanation: 'Permet de basculer l\'éclairage depuis le haut ou le bas d\'un escalier.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Choisir le bon organe de commande',
        procedure: '1. Identifier le besoin : commande permanente d\'une lampe -> Interrupteur simple. 2. Sonnerie / avertisseur -> Bouton-poussoir ouvert au repos. 3. Éclairage frigo / portière auto -> Bouton-poussoir fermé au repos. 4. Deux lampes alternées -> 1 commutateur. 5. Éclairage en deux points (escalier) -> 2 commutateurs en va-et-vient.',
        tip: 'Le mot "temporaire" élimine l\'interrupteur simple ; le mot "deux endroits différents" appelle immédiatement le va-et-vient.'
      }
    ],
    examples: [
      {
        statement: 'Quel organe de commande trouve-t-on dans un réfrigérateur pour éclairer son intérieur ? Justifie.',
        solution: 'On trouve un bouton-poussoir fermé au repos. Quand la porte est ouverte, aucun obstacle n\'appuie sur le bouton : il reste fermé au repos et la lampe brille. Quand on referme la porte, celle-ci appuie sur le bouton qui passe en position travail ouverte, coupant le circuit et éteignant la lampe.'
      }
    ],
    exercises: [
      {
        question: 'Associe chaque organe à son application : 1. Interrupteur simple | 2. Bouton-poussoir ouvert au repos | 3. Bouton-poussoir fermé au repos | 4. Montage va-et-vient.\nApplications : a. Lampe de réfrigérateur | b. Éclairage d\'escalier | c. Éclairage d\'un salon | d. Sonnette de maison.',
        correction: '1 -> c (éclairage salon) | 2 -> d (sonnette) | 3 -> a (réfrigérateur) | 4 -> b (escalier).'
      },
      {
        question: 'Quelles sont les trois bornes d\'un commutateur ?',
        correction: 'Les trois bornes d\'un commutateur sont : la borne Commune (C), la borne Repos (R) et la borne Travail (T).'
      }
    ],
    evaluationSituation: {
      context: 'Les escaliers pour accéder à l\'étage de la maison familiale de Kofi sont éclairés par une lampe électrique commandée en deux points : au rez-de-chaussée et à l\'étage. Son cousin, venu du village pendant les congés, est émerveillé de pouvoir éteindre la lampe en haut alors qu\'elle a été allumée en bas.',
      instructions: [
        '1. Nomme ce type de montage électrique.',
        '2. Donne la liste du matériel nécessaire pour le réaliser.',
        '3. Schématise le montage avec les symboles normalisés et explique brièvement son principe de fonctionnement.'
      ],
      solutionGuide: '1. Il s\'agit d\'un montage va-et-vient. 2. Matériel : un générateur (pile ou secteur), une lampe électrique, deux commutateurs (avec bornes C, R, T et C\', R\', T\') et des fils de connexion conducteurs. 3. Schéma : rectangle avec générateur et lampe en bas, deux commutateurs en haut dont les bornes communes C et C\' sont reliées au circuit et les bornes R-R\' et T-T\' sont reliées par deux fils navettes parallèles. Explication : Quand les commutateurs sont sur la même navette, la boucle est fermée et la lampe brille. Manœuvrer l\'un quelconque des commutateurs ouvre le circuit ou le referme sur l\'autre navette.'
    },
    examTraps: [
      'Confondre un bouton-poussoir ouvert au repos (sonnette) et fermé au repos (frigo).',
      'Penser qu\'un va-et-vient utilise des interrupteurs simples ordinaires (il nécessite impérativement deux commutateurs à 3 bornes).',
      'Oublier de nommer les trois bornes du commutateur (Commun C, Repos R, Travail T).'
    ],
    quickMemo: 'Interrupteur simple : permanent (salon) | BP ouvert au repos : temporaire (sonnette) | BP fermé au repos : temporaire (frigo/portière auto) | Commutateur : 3 bornes (C, R, T) | Va-et-vient : 2 commutateurs (escaliers, couloirs) | Relais : commande à distance.',
    keywords: ['commande de circuit', 'interrupteur simple', 'bouton-poussoir', 'ouvert au repos', 'fermé au repos', 'commutateur', 'va-et-vient', 'relais', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 1 : ÉLECTRICITÉ - LEÇON 3
  // ========================================================
  {
    id: 'pc-6e-court-circuit-protection-installations',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Électricité',
    lessonTitle: 'Court-circuit et protection des installations électriques : Causes, dangers, fusible, disjoncteur et recherche de panne',
    objectifs: [
      'Définir le court-circuit (liaison directe entre les deux bornes d\'un dipôle par un bon conducteur électrique)',
      'Identifier les causes d\'un court-circuit dans une installation domestique (fils conducteurs dénudés qui se touchent, détérioration des gaines isolantes, infiltration d\'eau, surcharge)',
      'Décrire les effets et dangers d\'un court-circuit : la lampe s\'éteint, le courant devient très intense, échauffement excessif des fils, fusion des gaines plastiques, risque d\'incendie dévastateur et destruction du générateur',
      'Expliquer le rôle et le fonctionnement des organes de protection : le fusible (coupe-circuit par fusion d\'un fil fin calibré) et le disjoncteur (interrupteur automatique magnétique/thermique coupant le courant en cas de surintensité)',
      'Énoncer les règles de sécurité fondamentales (ne jamais bricoler un fusible avec un fil de cuivre, ne jamais toucher avec les mains mouillées, couper le disjoncteur avant intervention, ne jamais insérer d\'objets dans les prises)',
      'Décrire la méthode méthodique de recherche de panne (testeur de continuité ou circuit témoin par substitution)'
    ],
    fullCourseContent: `1. Qu'est-ce qu'un Court-Circuit ?
- Définition : Il y a court-circuit lorsque les deux bornes d'un composant électrique (générateur ou récepteur) sont directement reliées par un conducteur électrique sans résistance suffisante.
- Expérience de mise en évidence :
  * Réalisons un circuit avec une pile, une lampe allumée et un tampon de paille de fer fine.
  * Relions directement les deux bornes de la pile par un fil conducteur :
    1. La lampe électrique s'éteint immédiatement.
    2. La pile chauffe très rapidement.
    3. La paille de fer rougit, produit des étincelles et prend feu !
- Causes courantes dans une installation domestique :
  * Deux fils électriques dénudés dont les cuivres se touchent.
  * Usure ou craquelure de la gaine isolante en plastique due à la chaleur ou aux rongeurs.
  * Appareil défectueux dont les bornes internes entrent en contact accidentel.
  * Infiltration d'eau dans une prise ou un boîtier électrique.

2. Les Dangers du Court-Circuit :
- Courant de surintensité : La résistance du circuit devient quasi nulle, ce qui produit un courant électrique extrêmement élevé.
- Effet Joule violent : Les conducteurs chauffent instantanément, les gaines isolantes fondent et dégagent des gaz toxiques, provoquant des départs de feu et des incendies d'habitations.
- Détérioration ou explosion de la pile ou batterie par décharge brutale.

3. Protection des Installations Électriques :
Pour éviter les incendies et protéger les vies humaines, toute installation est munie de dispositifs de sécurité :
- Le Fusible (Coupe-circuit) :
  * Tube cylindrique contenant un fil métallique très fin calibré.
  * Fonctionnement : Lorsque le courant dépasse la valeur maximale admise (surintensité ou court-circuit), le fil fin s'échauffe, fond instantanément et coupe le circuit.
  * RÈGLE D'OR : Il ne faut JAMAIS remplacer un fusible fondu par un fil de cuivre ordinaire ou un morceau de papier aluminium ! Ce bricolage empêcherait la coupure et provoquerait un incendie.
- Le Disjoncteur :
  * Placé à l'entrée de l'installation électrique de la maison (après le compteur CIE).
  * Il protège à la fois les personnes et les matériels.
  * Fonctionnement automatique : Il « saute » (se déclenche automatiquement) pour couper le courant dès qu'il détecte une surintensité ou un court-circuit.
  * Fonctionnement manuel : Il sert aussi d'interrupteur général pour couper le courant lorsqu'on effectue des travaux ou réparations.

4. Règles de Sécurité Électrique Domestique :
- Toujours couper le disjoncteur général avant de changer une ampoule ou d'ouvrir un appareil.
- Ne jamais toucher à un conducteur dénudé ou une prise avec les mains mouillées ou les pieds nus dans l'eau (l'eau et le corps humain conduisent le courant : risque d'électrisation ou d'électrocution mortelle).
- Ne jamais surcharger une multiprise avec trop d'appareils puissants.
- Ne jamais laisser les enfants jouer avec les prises électriques (utiliser des caches-prises).

5. Recherche et Réparation de Panne dans un Circuit Électrique :
Lorsqu'un circuit est fermé mais que la lampe ne s'allume pas, il y a une panne (interruption ou composant défaillant).
- Méthode 1 : Utilisation d'un testeur de continuité pour tester un à un chaque élément hors tension.
- Méthode 2 : Méthode du circuit témoin (ou substitution) :
  * On dispose d'un circuit de référence en parfait état de fonctionnement.
  * On remplace un seul composant suspect à la fois (la pile, puis la lampe, puis l'interrupteur, puis chaque fil).
  * L'élément qui empêche l'allumage dans le circuit témoin est l'élément défectueux.
- Réparation : Remplacer systématiquement l'élément défectueux par un élément neuf en bon état.`,
    definitions: [
      {
        term: 'Court-circuit',
        definition: 'Liaison directe et anormale entre deux bornes d\'un dipôle par un bon conducteur, provoquant une hausse brutale du courant.'
      },
      {
        term: 'Fusible',
        definition: 'Dispositif de protection contenant un fil conducteur calibré qui fond et coupe le circuit en cas de surintensité.'
      },
      {
        term: 'Disjoncteur',
        definition: 'Appareil électromécanique monté à l\'entrée de l\'installation coupant automatiquement le courant en cas d\'anomalie ou manuellement pour maintenance.'
      },
      {
        term: 'Électrisation',
        definition: 'Passage du courant électrique à travers le corps humain, provoquant des brûlures ou des tétanies musculaires (mortel = électrocution).'
      },
      {
        term: 'Recherche de panne',
        definition: 'Démarche expérimentale méthodique visant à identifier le composant défectueux dans un circuit hors d\'usage.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Effet d\'un court-circuit sur le récepteur',
        statement: 'Lorsqu\'un récepteur est court-circuité, il ne reçoit plus de courant et s\'éteint.'
      },
      {
        name: 'Effet d\'un court-circuit sur le générateur',
        statement: 'Le générateur produit un courant anormalement élevé, s\'échauffe dangereusement et peut être détruit.'
      },
      {
        name: 'Interdiction absolue du fil de cuivre',
        statement: 'Remplacer un fusible fondu par un fil quelconque supprime toute protection et expose l\'installation à l\'incendie.'
      }
    ],
    formulas: [
      {
        name: 'Loi de protection par fusible',
        formula: 'I > I_{\\text{calibre}} \\implies \\text{Fusion immédiate du fil de fusible} \\implies \\text{Ouverture du circuit}',
        explanation: 'Empêche l\'échauffement des conducteurs de l\'habitation.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Rechercher une panne par la méthode du circuit témoin',
        procedure: '1. Prendre un circuit témoin dont la pile et la lampe fonctionnent parfaitement. 2. Remplacer la lampe témoin par la lampe du circuit en panne. Si elle s\'allume, elle est bonne ; si elle reste éteinte, elle est grillée. 3. Tester de la même manière la pile, puis les fils de connexion un à un. 4. Isoler le composant défectueux et le remplacer.',
        tip: 'Ne changer qu\'un seul élément à la fois pour être sûr d\'identifier la panne.'
      }
    ],
    examples: [
      {
        statement: 'Dans une chambre, deux fils dénudés d\'une rallonge se touchent. Que se passe-t-il immédiatement au niveau du tableau électrique ?',
        solution: 'Le contact entre deux fils dénudés crée un court-circuit. Le courant devient très intense. Immédiatement, le disjoncteur divisionnaire ou le fusible de la ligne coupe le circuit électrique pour empêcher les fils de prendre feu.'
      }
    ],
    exercises: [
      {
        question: 'Vrai ou Faux ?\na) Un incendie domestique peut être provoqué par un court-circuit.\nb) Le fusible coupe le circuit en augmentant la résistance du fil.\nc) On peut remplacer un fusible fondu par un clou ou un fil de cuivre.',
        correction: 'a) Vrai.\nb) Faux (il coupe le circuit en fondant sous l\'effet de la chaleur).\nc) Faux (c\'est extrêmement dangereux et interdit car le clou ne fondra pas en cas de surintensité).'
      },
      {
        question: 'Cite deux causes de court-circuit dans une maison.',
        correction: '1. Le contact direct entre deux fils conducteurs dénudés.\n2. La détérioration ou la fonte de la gaine isolante entourant les fils.'
      }
    ],
    evaluationSituation: {
      context: 'Au cours d\'une séance de travaux pratiques, ton groupe d\'élèves de 6ème réalise un circuit comprenant une pile, un interrupteur, une lampe et des fils de connexion. Vous fermez le circuit et constatez que la lampe ne brille pas. Un élève relie directement la lampe aux bornes de la pile : elle ne s\'allume toujours pas. Cependant, branchée sur une autre pile neuve, cette même lampe brille normalement. Ton groupe te demande de conclure.',
      instructions: [
        '1. Nomme la démarche d\'investigation entreprise par l\'élève.',
        '2. Identifie précisément l\'élément défectueux en justifiant ta réponse.',
        '3. Indique la démarche à suivre pour remettre le circuit en bon état de fonctionnement.'
      ],
      solutionGuide: '1. La démarche entreprise est la recherche de panne (par substitution/test direct). 2. L\'élément défectueux est la pile : en effet, la lampe brille normalement lorsqu\'elle est alimentée par une autre pile neuve, ce qui prouve que la lampe n\'est pas grillée et que c\'est la première pile qui est usée ou déchargée. 3. Pour réparer le circuit, il suffit de remplacer la pile déchargée par la pile neuve en bon état.'
    },
    examTraps: [
      'Penser qu\'un récepteur court-circuité brille plus fort (au contraire, il est privé de courant et s\'éteint complètement).',
      'Confondre disjoncteur (réarmable) et fusible (à remplacer après fusion).',
      'Négliger le rôle de la gaine isolante en plastique pour la sécurité des personnes.'
    ],
    quickMemo: 'Court-circuit : 2 bornes reliées par un fil conducteur | Conséquences : récepteur éteint, pile chauffe, surintensité, feu | Protections : fusible (fond), disjoncteur (déclenche) | Jamais de fil de cuivre à la place d\'un fusible !',
    keywords: ['court-circuit', 'fusible', 'disjoncteur', 'protection électrique', 'incendie', 'sécurité électrique', 'recherche de panne', 'surintensité', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 4 : MESURE DE GRANDEURS PHYSIQUES - LEÇON 12
  // ========================================================
  {
    id: 'pc-6e-volume-liquide-solide',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Mesure de grandeurs physiques',
    lessonTitle: 'Volume d\'un liquide et d\'un solide : Unités, éprouvette graduée, ménisque, déplacement d\'eau et formules',
    objectifs: [
      'Définir le volume d\'un corps (espace à 3 dimensions occupé par ce corps, noté V)',
      'Définir la capacité ou contenance d\'un récipient (volume maximal de liquide qu\'il peut contenir)',
      'Connaître l\'unité légale de volume (le mètre cube, m³) et ses sous-multiples (dm³, cm³, mm³)',
      'Connaître l\'unité légale de capacité (le litre, L) et ses multiples/sous-multiples (kL, hL, daL, L, dL, cL, mL)',
      'Établir la correspondance essentielle entre unités de volume et de capacité : 1 dm³ = 1 L ; 1 cm³ = 1 mL ; 1 m³ = 1000 L',
      'Mesurer le volume d\'un liquide à l\'aide d\'une éprouvette graduée en positionnant correctement l\'œil en face de la base du ménisque',
      'Mesurer le volume d\'un solide de forme quelconque par la méthode de déplacement de liquide (V = V2 - V1)',
      'Calculer le volume d\'un solide géométrique régulier par formule mathématique : Cube (V = a³), Pavé droit (V = L × l × h), Cylindre (V = π × r² × h), Sphère (V = 4/3 × π × r³)'
    ],
    fullCourseContent: `1. Volume d'un Corps et Capacité d'un Récipient :
- Le Volume d'un corps : C'est la portion d'espace à trois dimensions occupée par ce corps. On le note V. Tout corps (solide, liquide, gaz) possède un volume.
- La Capacité (ou contenance) d'un récipient : C'est le volume maximal de liquide que ce récipient peut contenir lorsqu'il est rempli à ras bord.

2. Les Unités de Mesure et Leurs Correspondances :
- Unité légale de volume : Le mètre cube, symbole m³.
  * Multiples et sous-multiples : Chaque colonne du tableau de volume se subdivise en 3 sous-colonnes (car en 3D : 1 m = 10 dm -> 1 m³ = 1000 dm³).
  * Tableau : m³ (3 cases) | dm³ (3 cases) | cm³ (3 cases) | mm³ (3 cases).
- Unité de capacité : Le litre, symbole L.
  * Sous-multiples et multiples : kL, hL, daL, L, dL, cL, mL (1 case par unité).
- Correspondances fondamentales à retenir par cœur :
  * 1 dm³ = 1 L
  * 1 cm³ = 1 mL
  * 1 m³ = 1 000 dm³ = 1 000 L

3. Mesure du Volume d'un Liquide à l'Éprouvette Graduée :
- Choix du récipient : On utilise de la verrerie graduée (éprouvette graduée, fiole jaugée, bécher gradué). L'éprouvette graduée est la plus précise.
- Protocole de mesure :
  1. Poser l'éprouvette sur une table plane et horizontale.
  2. Verser le liquide avec précaution sans éclabousser.
  3. Déterminer la valeur d'une graduation (ex : écart entre 20 et 30 divisé par 10 divisions = 1 mL par graduation).
  4. Placer impérativement son œil bien horizontalement en face de la BASE DU MÉNISQUE (courbure inférieure formée par la surface libre du liquide).
  5. Effectuer la lecture avec son unité (ex: V = 45 mL).

4. Mesure du Volume d'un Solide Quelconque (Méthode de Déplacement de Liquide) :
- Principe : Utilisée pour les solides insolubles dans l'eau et de forme irrégulière (caillou, clé, boulon, figurine).
- Étapes :
  1. Verser un volume initial de liquide V1 dans l'éprouvette graduée (suffisant pour recouvrir complètement le solide).
  2. Glisser délicatement le solide dans l'éprouvette inclinée pour ne pas casser le verre ni faire gicler de liquide.
  3. Le niveau monte : lire le nouveau volume total V2.
  4. Le volume du solide est égal au volume de liquide déplacé : V = V2 - V1.

5. Calcul du Volume des Solides Géométriques Simples :
Si le solide a une forme régulière, on mesure ses dimensions (règle, pied à coulisse) et on applique la formule :
- Cube d'arête a : V = a × a × a = a³
- Pavé droit (parallélépipède rectangle) de longueur L, largeur l et hauteur h : V = L × l × h
- Cylindre de rayon r et hauteur h : V = π × r² × h (avec π ≈ 3,14)
- Sphère de rayon r : V = 4/3 × π × r³`,
    definitions: [
      {
        term: 'Volume',
        definition: 'Espace à trois dimensions occupé par un corps, noté V.'
      },
      {
        term: 'Capacité (ou contenance)',
        definition: 'Volume maximal de liquide qu\'un récipient peut contenir.'
      },
      {
        term: 'Ménisque',
        definition: 'Surface courbe que présente un liquide au contact des parois d\'un tube étroit (verre).'
      },
      {
        term: 'Déplacement de liquide',
        definition: 'Méthode consistant à immerger un solide dans un liquide pour déterminer son volume par différence des niveaux (V2 - V1).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Équivalence Volume - Capacité',
        statement: '1 dm³ = 1 L ; 1 cm³ = 1 mL ; 1 m³ = 1000 dm³ = 1000 L.'
      },
      {
        name: 'Position de l\'œil pour la lecture du ménisque',
        statement: 'L\'œil doit se trouver exactement au niveau horizontal de la partie la plus basse du ménisque (le fond du creux).'
      }
    ],
    formulas: [
      {
        name: 'Volume par déplacement d\'eau',
        formula: 'V_{\\text{solide}} = V_2 - V_1',
        explanation: 'V1 = volume initial du liquide seul, V2 = volume du liquide + solide immergé.'
      },
      {
        name: 'Volume d\'un pavé droit',
        formula: 'V = L \\times l \\times h',
        explanation: 'L = longueur, l = largeur, h = hauteur.'
      },
      {
        name: 'Volume d\'un cube',
        formula: 'V = a^3',
        explanation: 'a = longueur de l\'arête du cube.'
      },
      {
        name: 'Volume d\'un cylindre',
        formula: 'V = \\pi \\times r^2 \\times h',
        explanation: 'r = rayon de la base circulaire, h = hauteur du cylindre.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Lire le volume sur une éprouvette graduée',
        procedure: '1. Repérer deux graduations chiffrées consécutives (ex: 40 et 50). 2. Calculer la différence (50 - 40 = 10). 3. Compter le nombre de petits intervalles entre les deux (ex: 5). 4. Diviser pour trouver la valeur d\'un intervalle (10 / 5 = 2 mL par graduation). 5. Lire la position du bas du ménisque.',
        tip: 'Toujours poser l\'éprouvette sur la paillasse horizontale, ne jamais la tenir penchée en main.'
      }
    ],
    examples: [
      {
        statement: 'Un pavé droit mesure 10 cm de longueur, 5 cm de largeur et 3 cm de hauteur. Calcule son volume.',
        solution: 'V = L × l × h = 10 cm × 5 cm × 3 cm = 150 cm³ (ce qui équivaut à 150 mL ou 0,15 L).'
      }
    ],
    exercises: [
      {
        question: 'Une éprouvette contient V1 = 40 cm³ d\'eau. Après immersion d\'une pierre, le niveau monte à V2 = 64 cm³. Calcule le volume de la pierre.',
        correction: 'V = V2 - V1 = 64 cm³ - 40 cm³ = 24 cm³ (soit 24 mL).'
      },
      {
        question: 'Effectue les conversions suivantes :\na) 15 m³ en L\nb) 20 cL en L\nc) 30 000 cm³ en m³.',
        correction: 'a) 15 m³ = 15 000 dm³ = 15 000 L.\nb) 20 cL = 0,20 L = 0,2 L.\nc) 30 000 cm³ = 30 dm³ = 0,030 m³ = 0,03 m³.'
      }
    ],
    evaluationSituation: {
      context: 'Le chef d\'un village dispose d\'une grande citerne communautaire d\'eau de capacité 15 m³. Pour distribuer l\'eau aux familles, il utilise des bidons rectangulaires ayant les dimensions intérieures suivantes : hauteur h = 60 cm, longueur L = 25 cm, largeur l = 20 cm. Le chef te sollicite pour savoir combien de bidons pleins cette citerne peut remplir.',
      instructions: [
        '1. Rappelle la définition du volume d\'un liquide et de la capacité d\'un récipient.',
        '2. Calcule le volume d\'un bidon en cm³, puis convertis ce résultat en m³.',
        '3. Détermine le nombre total de bidons que la citerne peut servir.'
      ],
      solutionGuide: '1. Le volume d\'un liquide est l\'espace occupé par ce liquide. La capacité d\'un récipient est le volume maximal de liquide qu\'il peut contenir. 2. Volume d\'un bidon : V = L × l × h = 25 cm × 20 cm × 60 cm = 30 000 cm³. En m³ : sachant que 1 m³ = 1 000 000 cm³, on a V = 30 000 / 1 000 000 = 0,03 m³ (ou 30 L). 3. Nombre de bidons servis : N = Volume total / Volume d\'un bidon = 15 m³ / 0,03 m³ = 500 bidons.'
    },
    examTraps: [
      'Confondre volume (espace occupé) et capacité (ce que peut contenir un récipient).',
      'Regarder le haut du ménisque au lieu du bas du ménisque pour les liquides comme l\'eau.',
      'Oublier qu\'en volume chaque unité possède 3 chiffres dans le tableau de conversion (1 m³ = 1 000 dm³).'
    ],
    quickMemo: 'Volume V (espace occupé, m³) | Capacité (contenance, L) | 1 L = 1 dm³ | 1 mL = 1 cm³ | 1 m³ = 1000 L | Éprouvette : œil en face de la base du ménisque | Solide quelconque : V = V2 - V1 | Pavé : V = L × l × h | Cube : V = a³.',
    keywords: ['volume', 'capacité', 'contenance', 'éprouvette graduée', 'ménisque', 'déplacement d\'eau', 'mètre cube', 'litre', '6e']
  },

  // ========================================================
  // 6ÈME - THÈME 4 : MESURE DE GRANDEURS PHYSIQUES - LEÇON 13
  // ========================================================
  {
    id: 'pc-6e-masse-solide-liquide',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '6e',
    levelLabel: '6ème (Sixième)',
    serie: '6e',
    serieLabel: 'Collège 6ème',
    chapter: 'Mesure de grandeurs physiques',
    lessonTitle: 'Masse d\'un solide et d\'un liquide : Balance Roberval, simple pesée, double pesée et masses marquées',
    objectifs: [
      'Définir la masse d\'un corps comme la grandeur physique mesurant la quantité de matière contenue dans ce corps (notée m ou M)',
      'Connaître l\'unité légale de masse (le kilogramme, kg) et le tableau des unités (tonne t, quintal q, point, kg, hg, dag, g, dg, cg, mg)',
      'Identifier les parties de la balance Roberval (socle, fléau, aiguille, cadran, deux plateaux) et la boîte de masses marquées (de 1 g à 500 g)',
      'Réaliser une simple pesée d\'un solide (équilibre à vide préalable, objet sur un plateau, masses marquées sur l\'autre de la plus lourde à la plus légère)',
      'Mesurer la masse d\'un liquide par simple pesée en effectuant la différence : masse du récipient vide (m1), masse du récipient + liquide (m2), masse liquide m = m2 - m1 (notion de tare)',
      'Réaliser une double pesée (méthode de Borda ou de substitution) pour obtenir une pesée exacte avec une balance fausse ou non équilibrée à vide (m = m2 - m1)',
      'Distinguer les autres types de balances usuelles (balance électronique, balance romaine, bascule, pèse-lettre)',
      'Distinguer la masse (quantité de matière en kg, constante) du poids (force de pesanteur en Newtons N, mesurée par dynamomètre)'
    ],
    fullCourseContent: `1. Qu'est-ce que la Masse d'un Corps ?
- Définition : La masse d'un corps est une grandeur physique intrinsèque qui mesure la quantité de matière constituant ce corps. Elle se note m ou M.
- La masse d'un objet ne dépend ni de sa forme, ni de sa position, ni du lieu où il se trouve dans l'univers.
- Unité légale de masse : Le kilogramme (symbole kg).
- Tableau des unités de masse :
  * Multiples : Tonne (t, 1 t = 1000 kg), Quintal (q, 1 q = 100 kg), dizaine de kg (notée par un point « . »).
  * Sous-multiples du kg : hectogramme (hg), décagramme (dag), gramme (g, 1 kg = 1000 g), décigramme (dg), centigramme (cg), milligramme (mg, 1 g = 1000 mg).

2. La Balance Roberval et les Masses Marquées :
- Description de la balance Roberval :
  * Un socle supportant un fléau articulé.
  * Deux plateaux identiques suspendus aux extrémités du fléau.
  * Une aiguille solidaire du fléau oscillant devant un cadran gradué.
- Équilibre à vide : Avant toute pesée, la balance posée sur un plan horizontal doit être parfaitement équilibrée à vide (l'aiguille s'immobilise en face du repère zéro central). Si ce n'est pas le cas, on ajuste avec de petits morceaux de papier ou de plomb sur le plateau le plus léger.
- La boîte de masses marquées : Contient des masses de référence en laiton ou en fonte : 500 g, 200 g, 100 g, 100 g, 50 g, 20 g, 10 g, 10 g, 5 g, 2 g, 2 g, 1 g (et des lamelles en mg).

3. Mesure de la Masse d'un Solide par Simple Pesée :
- Protocole :
  1. Vérifier l'équilibre à vide de la balance.
  2. Déposer l'objet dont on cherche la masse sur le plateau gauche.
  3. Placer des masses marquées sur le plateau droit en commençant par la masse la plus forte estimée supérieure, puis en procédant par valeurs décroissantes.
  4. Rétablir l'équilibre (aiguille au zéro central).
  5. Calculer la masse totale de l'objet en additionnant la valeur de toutes les masses marquées utilisées : m = somme des masses marquées.
  * Exemple : Pour un ananas équilibré par 500 g + 100 g + 20 g -> m = 620 g.

4. Mesure de la Masse d'un Liquide par Simple Pesée :
Comme un liquide ne peut être posé directement sur le plateau sans récipient, on procède en deux pesées successives :
  1. Étape 1 : Peser le récipient vide (bécher ou gobelet) et noter sa masse m1.
  2. Étape 2 : Verser le liquide dans le récipient, peser l'ensemble (récipient + liquide) et noter la masse m2.
  3. Étape 3 : Calculer la masse nette du liquide en faisant la soustraction : m_liquide = m2 - m1.
  * Exemple : m1 (gobelet vide) = 150 g ; m2 (gobelet + jus) = 710 g -> m_jus = 710 g - 150 g = 560 g.
- Sur une balance électronique moderne, on utilise la touche TARE qui remet l'affichage à zéro après avoir posé le récipient vide.

5. Mesure de la Masse d'un Solide par Double Pesée (Balance Faussée) :
Si la balance n'est pas juste ou si ses bras sont inégaux, la simple pesée donne un résultat erroné. On applique la méthode de double pesée (méthode de substitution de Borda) :
  1. Placer l'objet de masse m inconnue sur un plateau.
  2. Sur l'autre plateau, placer une tare quelconque (plomb, sable, grenaille) plus lourde que l'objet.
  3. Ajouter des masses marquées sur le plateau où se trouve l'objet pour réaliser l'équilibre avec la tare. Noter cette masse m1.
  4. Retirer l'objet en laissant la tare en place, et rajouter des masses marquées sur le premier plateau jusqu'à rétablir exactement le même équilibre. Noter cette nouvelle masse totale m2.
  5. La masse exacte de l'objet est : m = m2 - m1.
  * Exemple : m1 = 55 g (avec objet) ; m2 = 270 g (sans objet pour la même tare) -> m = 270 g - 55 g = 215 g.

6. Distinction Fondamentale entre Masse et Poids :
- La masse (m) : Quantité de matière invariable, mesurée avec une balance en kilogrammes (kg).
- Le poids (P) : Force d'attraction gravitationnelle exercée par la Terre sur l'objet, dirigée vers le bas, mesurée avec un dynamomètre en Newtons (N). (Le pèse-personne mesure en réalité une force de compression mais est étalonné en kg par commodité).`,
    definitions: [
      {
        term: 'Masse',
        definition: 'Grandeur physique mesurant la quantité de matière contenue dans un corps, notée m et exprimée en kg.'
      },
      {
        term: 'Simple pesée',
        definition: 'Pesée directe consistant à équilibrer l\'objet sur un plateau avec des masses marquées sur l\'autre plateau d\'une balance juste.'
      },
      {
        term: 'Double pesée (méthode de tare)',
        definition: 'Méthode permettant d\'obtenir la masse exacte d\'un corps avec une balance non juste grâce à une tare de référence.'
      },
      {
        term: 'Tare',
        definition: 'Masse du récipient vide ou contrepoids utilisé pour compenser un déséquilibre ou isoler la masse nette du contenu.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Invariance de la masse',
        statement: 'La masse d\'un corps reste rigoureusement constante quels que soient l\'état physique (glace ou eau), la forme ou l\'endroit de mesure.'
      },
      {
        name: 'Ordre de placement des masses marquées',
        statement: 'On place toujours les masses marquées de la plus grande à la plus petite pour approcher rapidement et précisément l\'équilibre.'
      }
    ],
    formulas: [
      {
        name: 'Masse d\'un liquide par simple pesée',
        formula: 'm_{\\text{liquide}} = m_2 - m_1',
        explanation: 'm1 = masse du récipient vide, m2 = masse du récipient contenant le liquide.'
      },
      {
        name: 'Masse d\'un solide par double pesée',
        formula: 'm = m_2 - m_1',
        explanation: 'm1 = masses associées à l\'objet face à la tare, m2 = masses équilibrant la tare seule.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Peser un liquide avec une balance Roberval',
        procedure: '1. Vérifier l\'équilibre à vide. 2. Déposer le récipient vide sur le plateau gauche et équilibrer avec des masses marquées à droite : noter m1. 3. Verser le liquide dans le récipient sans déplacer la balance. 4. Ajouter de nouvelles masses marquées à droite pour rétablir l\'équilibre : noter m2. 5. Calculer la masse du liquide : m = m2 - m1.',
        tip: 'Toujours manipuler les petites masses marquées avec des pinces pour ne pas les salir ou les oxyder.'
      }
    ],
    examples: [
      {
        statement: 'Une boîte de conserve vide pèse m1 = 50 g. Remplie de tomates concentrées, elle pèse m2 = 450 g. Quelle est la masse nette de tomate ?',
        solution: 'm_tomate = m2 - m1 = 450 g - 50 g = 400 g.'
      }
    ],
    exercises: [
      {
        question: 'Dago effectue les étapes suivantes pour peser de l\'eau : A (ajoute masses avec eau), B (équilibre à vide), C (lecture m2), D (pose récipient vide), E (calcule m = m2 - m1). Range ces étapes dans l\'ordre chronologique.',
        correction: 'L\'ordre chronologique est : B (équilibre à vide) -> D (pose récipient vide) -> A (ajoute masses pour m1 puis ajoute eau) -> C (lecture m2) -> E (calcule m = m2 - m1).'
      },
      {
        question: 'Un commerçant doit peser 875 g de viande avec sa boîte de masses marquées. Quelles masses marquées doit-il choisir ?',
        correction: 'Il doit combiner : 500 g + 200 g + 100 g + 50 g + 20 g + 5 g = 875 g.'
      }
    ],
    evaluationSituation: {
      context: 'Deux élèves de 6ème d\'une même famille préparent un gâteau pour le nouvel an. La recette demande : 200 g de farine, 50 g de beurre, 2 g de levure et 160 g de lait liquide. Elles disposent d\'une balance Roberval, d\'un verre doseur et d\'une boîte de masses marquées, mais hésitent sur la façon de peser le lait sans fausser la recette.',
      instructions: [
        '1. Nomme l\'unité légale de masse et l\'instrument de mesure adéquat.',
        '2. Décris précisément les étapes pour peser les 160 g de lait liquide.',
        '3. Indique la masse totale affichée sur la balance si le bol vide pèse 75 g.'
      ],
      solutionGuide: '1. L\'unité légale de masse est le kilogramme (kg). L\'instrument est la balance Roberval avec masses marquées. 2. Étapes de la pesée du liquide : a. Vérifier l\'équilibre à vide de la balance ; b. Poser le bol vide sur le plateau gauche et équilibrer avec des masses marquées pour mesurer m1 (m1 = 75 g) ; c. Ajouter 160 g de masses marquées supplémentaires sur le plateau droit (total = 75 + 160 = 235 g) ; d. Verser doucement le lait dans le bol jusqu\'à ce que l\'aiguille revienne exactement à la position d\'équilibre centrale. 3. La masse totale sur le plateau droit à l\'équilibre sera m2 = 75 g + 160 g = 235 g.'
    },
    examTraps: [
      'Confondre la masse (en kg, constante partout) et le poids (en N, force variable selon la planète).',
      'Oublier de soustraire la masse du récipient vide (tare) lorsqu\'on pèse un liquide.',
      'Croire qu\'une balance faussée ne peut pas servir (la méthode de double pesée permet une mesure rigoureusement exacte).'
    ],
    quickMemo: 'Masse m (quantité de matière, kg) | Balance Roberval (socle, fléau, aiguille, plateaux) | Simple pesée : m = somme masses marquées | Liquide : m = m2 - m1 | Double pesée : avec tare, m = m2 - m1 | Poids en Newton ≠ Masse en kg.',
    keywords: ['masse', 'balance', 'balance Roberval', 'simple pesée', 'double pesée', 'tare', 'masses marquées', 'kilogramme', '6e']
  }
];
