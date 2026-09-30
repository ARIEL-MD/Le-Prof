import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_5E_PHYSIQUE_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 5ÈME - PHYSIQUE : LEÇON 1 - ADAPTATION GÉNÉRATEUR / RÉCEPTEUR
  // ========================================================
  {
    id: 'pc-5e-adaptation-generateur-recepteur',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Électricité : Circuits & Adaptation',
    lessonTitle: 'Adaptation d\'un générateur à un récepteur : Tension nominale, tension d\'usage et sécurité',
    objectifs: [
      'Distinguer un générateur électrique (fournit le courant : pile, batterie, panneau solaire) d\'un récepteur électrique (utilise le courant : lampe, moteur, téléviseur)',
      'Définir la tension nominale d\'un générateur et la tension d\'usage d\'un récepteur (exprimées en Volts V)',
      'Identifier les trois régimes de fonctionnement : sous-tension (éclat faible), adaptation normale (éclat normal), surtension (éclat très vif et risque de destruction)',
      'Connaître la tension du secteur (220 V) et les dangers pour le corps humain (dangereux dès 24 V en milieu humide)',
      'Expliquer l\'utilité d\'un stabilisateur de tension face aux variations du réseau électrique'
    ],
    fullCourseContent: `1. Générateurs et Récepteurs électriques :
- Générateur : Tout appareil capable de faire circuler un courant électrique dans un circuit fermé. Exemples : pile plate (4,5 V), pile cylindrique (1,5 V), batterie d'accumulateurs (12 V ou 24 V), panneau photovoltaïque.
- Récepteur : Tout appareil qui transforme l'énergie électrique en une autre forme d'énergie (lumière, chaleur, mouvement, son). Exemples : lampe électrique, moteur, électrolyseur, poste radio, téléviseur.

2. Notion de Tension Électrique :
- La tension électrique traduit la différence d'état électrique entre les bornes d'un dipôle.
- Elle se note U et son unité internationale est le Volt (symbole V).
- Tension nominale du générateur : Valeur de la tension inscrite par le constructeur sur le générateur pour laquelle il est conçu.
- Tension d'usage du récepteur : Valeur de la tension requise par le récepteur pour fonctionner dans des conditions optimales d'efficacité et de durée de vie.

3. Adaptation d'un générateur à un récepteur :
Branchons une lampe dont la tension d'usage est de 3,5 V successivement sur trois générateurs différents :
- Cas 1 (Pile 1,5 V) : U_générateur < U_usage. La lampe brille faiblement : elle est en SOUS-TENSION. L'appareil ne s'abîme pas mais fonctionne mal.
- Cas 2 (Pile 4,5 V) : U_générateur est voisine de U_usage. La lampe brille normalement : il y a ADAPTATION entre le générateur et le récepteur.
- Cas 3 (Générateur 9 V) : U_générateur >> U_usage. La lampe brille d'un éclat très vif puis son filament grille aussitôt : elle est en SURTENSION. La surtension détériore le récepteur.

4. Dangers de la tension du secteur domestique :
- En Côte d'Ivoire, la Compagnie Ivoirienne d'Électricité (CIE) délivre une tension alternative du secteur de 220 V.
- Le corps humain est conducteur et commence à être en danger d'électrocution dès que la tension dépasse 24 V en milieu humide (ou 50 V en milieu sec). La tension de 220 V est mortelle !
- Pour protéger les appareils électroménagers contre les hausses brutales (surtensions) ou les baisses de tension (sous-tensions), on utilise un stabilisateur ou un régulateur de tension.`,
    definitions: [
      {
        term: 'Générateur électrique',
        definition: 'Dipôle qui produit et maintient la circulation du courant électrique dans un circuit fermé.'
      },
      {
        term: 'Récepteur électrique',
        definition: 'Dipôle qui consomme du courant électrique pour accomplir un travail (éclairer, chauffer, tourner).'
      },
      {
        term: 'Adaptation',
        definition: 'Situation où la tension nominale du générateur est égale ou très proche de la tension d\'usage du récepteur.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle d\'adaptation',
        statement: 'Pour qu\'un récepteur fonctionne normalement sans risque de détérioration, la tension nominale du générateur doit être égale ou voisine de sa tension d\'usage.'
      },
      {
        name: 'Effet de la surtension',
        statement: 'Si U_générateur est nettement supérieure à U_usage, le dipôle récepteur risque d\'être détruit prématurément.'
      }
    ],
    formulas: [
      {
        name: 'Critère d\'adaptation optimale',
        formula: 'U_{\\text{générateur}} \\approx U_{\\text{usage (récepteur)}}',
        explanation: 'Assure un fonctionnement normal et préserve la durée de vie du dipôle.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Choisir la bonne pile pour une lampe électrique',
        procedure: '1. Lire la tension d\'usage inscrite sur le culot de la lampe (ex : 3,8 V). 2. Comparer avec les piles disponibles (1,5 V, 4,5 V, 9 V). 3. Retenir la pile dont la tension nominale est la plus proche (ici 4,5 V). 4. Éviter 9 V (surtension) et 1,5 V (sous-tension).',
        tip: 'Toujours couper le circuit avant d\'insérer une nouvelle source d\'alimentation.'
      }
    ],
    examples: [
      {
        statement: 'Une lampe porte l\'inscription 6 V. On dispose de deux générateurs : une pile de 4,5 V et une batterie de 12 V. Que se passe-t-il dans chaque cas ?',
        solution: '1. Avec la pile de 4,5 V : 4,5 V < 6 V, la lampe est en sous-tension, elle éclaire faiblement.\n2. Avec la batterie de 12 V : 12 V >> 6 V, la lampe est en forte surtension, elle brille très vivement et son filament fond immédiatement.'
      }
    ],
    exercises: [
      {
        question: 'Quelle est la tension du courant du secteur délivrée par la CIE en Côte d\'Ivoire, et quel dispositif permet de protéger les appareils contre ses fluctuations ?',
        correction: 'La tension du secteur est de 220 V. L\'appareil utilisé pour stabiliser cette tension et protéger les équipements contre les surtensions et sous-tensions est un stabilisateur de tension.'
      }
    ],
    evaluationSituation: {
      context: 'Au Lycée Moderne de Yopougon, un élève branche une ampoule de 3,8 V sur une batterie de 9 V. La lampe s\'allume d\'un éclair éblouissant puis s\'éteint définitivement.',
      instructions: [
        '1. Nomme le phénomène physique survenu.',
        '2. Explique pourquoi la lampe ne s\'allume plus.',
        '3. Quelle pile aurait-il dû utiliser parmi une pile cylindrique (1,5 V), une pile plate (4,5 V) et la batterie (9 V) ?'
      ],
      solutionGuide: '1. Le phénomène survenu est la surtension. 2. La tension du générateur (9 V) étant beaucoup trop élevée par rapport à la tension d\'usage (3,8 V), le filament de tungstène a fondu sous l\'effet d\'une surintensité thermique (la lampe est grillée). 3. Il devait utiliser la pile plate de 4,5 V car sa tension nominale est la plus proche de 3,8 V.'
    },
    examTraps: [
      'Confondre tension nominale (sur le générateur) et tension d\'usage (sur le récepteur).',
      'Penser qu\'une lampe de 220 V peut fonctionner sur une pile de 4,5 V.',
      'Croire que la sous-tension détruit la lampe (elle brille juste faiblement).'
    ],
    quickMemo: 'U_générateur ≈ U_usage = Adaptation (normal) | U_générateur < U_usage = Sous-tension (faible) | U_générateur > U_usage = Surtension (danger/grille).',
    keywords: ['adaptation', 'générateur', 'récepteur', 'tension nominale', 'tension d\'usage', 'surtension', 'sous-tension', 'stabilisateur', '220V']
  },

  // ========================================================
  // 5ÈME - PHYSIQUE : LEÇON 2 - ASSOCIATIONS DE LAMPES (SÉRIE & DÉRIVATION)
  // ========================================================
  {
    id: 'pc-5e-associations-lampes-series-derivation',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Électricité : Circuits & Adaptation',
    lessonTitle: 'Associations de lampes : Montage en série, montage en dérivation, panne et court-circuit',
    objectifs: [
      'Identifier et schématiser un circuit de lampes en série (une seule boucle de courant)',
      'Identifier et schématiser un circuit de lampes en dérivation ou parallèle (au moins deux boucles distinctes)',
      'Analyser l\'effet d\'une lampe défectueuse (dévissée ou grillée) dans chaque montage',
      'Analyser l\'effet d\'une lampe court-circuitée dans chaque type d\'association',
      'Justifier l\'utilisation du montage en dérivation pour les installations domestiques et l\'éclairage public'
    ],
    fullCourseContent: `1. Montage de lampes en série :
- Définition : Des lampes sont montées en série lorsqu'elles sont branchées les unes à la suite des autres en formant une seule et unique boucle avec le générateur.
- Éclat des lampes : Lorsque deux lampes identiques sont montées en série sur une pile, elles brillent plus faiblement qu'une lampe seule, car elles se partagent la tension du générateur. Plus on ajoute de lampes en série, plus leur éclat s'affaiblit.
- Lampe défectueuse en série : Si une lampe est dévissée ou grillée, le circuit est ouvert : TOUTES les autres lampes s'éteignent instantanément.
- Lampe court-circuitée en série : Si on relie les bornes de la lampe L1 par un fil conducteur (court-circuit) :
  * La lampe L1 court-circuitée s'éteint car le courant passe par le fil de court-circuit.
  * La lampe L2 reçoit alors toute la tension de la pile : elle brille plus fortement !

2. Montage de lampes en dérivation (ou parallèle) :
- Définition : Des lampes sont montées en dérivation lorsqu'elles sont branchées aux bornes les unes des autres, formant plusieurs boucles indépendantes avec le générateur.
- Éclat des lampes : Chaque lampe reçoit la totalité de la tension du générateur (U = U1 = U2). Elles brillent toutes normalement, indépendamment du nombre de lampes branchées.
- Lampe défectueuse en dérivation : Si une lampe est dévissée ou grillée, les autres continuent de briller tout à fait normalement. Chaque boucle reste fermée.
- Lampe court-circuitée en dérivation : DANGER MAJEUR ! Si on court-circuite une lampe dans une dérivation :
  * Toutes les lampes s'éteignent immédiatement.
  * Le courant prend le chemin sans récepteur et court-circuite directement les deux bornes du générateur.
  * Le générateur chauffe très vite et risque de s'enflammer ou d'exploser.

3. Domaines d'application et intérêt pratique :
- Circuit en série : Très peu utilisé aujourd'hui sauf pour certaines guirlandes lumineuses décoratives traditionnelles.
- Circuit en dérivation : Montage universel des installations électriques domestiques (maisons, écoles) et de l'éclairage public des rues. Si un lampadaire de la rue s'éteint ou est cassé, tous les autres continuent d'éclairer la voie !`,
    definitions: [
      {
        term: 'Circuit en série',
        definition: 'Circuit composé d\'une seule boucle fermée reliant les dipôles bout à bout.'
      },
      {
        term: 'Circuit en dérivation',
        definition: 'Circuit comportant plusieurs boucles indépendantes alimentées par le même générateur.'
      },
      {
        term: 'Court-circuit',
        definition: 'Liaison directe par un conducteur de très faible résistance entre deux points d\'un circuit ou les bornes d\'un dipôle.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Autonomie en dérivation',
        statement: 'Dans un montage en dérivation, la panne ou la déconnexion d\'un récepteur n\'affecte pas le fonctionnement des autres récepteurs.'
      },
      {
        name: 'Danger du court-circuit en dérivation',
        statement: 'Un court-circuit sur une seule branche dérivée court-circuite l\'ensemble du circuit et provoque l\'échauffement intense du générateur.'
      }
    ],
    formulas: [
      {
        name: 'Partage de tension en série',
        formula: 'U_{\\text{pile}} = U_1 + U_2 + ... + U_n',
        explanation: 'En série, les récepteurs se partagent la tension totale disponible.'
      },
      {
        name: 'Égalité des tensions en dérivation',
        formula: 'U_{\\text{pile}} = U_1 = U_2 = ... = U_n',
        explanation: 'Chaque branche dérivée reçoit la tension totale de la source.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Diagnostiquer l\'extinction d\'une lampe dans un circuit',
        procedure: '1. Observer si les autres lampes sont éteintes : si oui et que la pile ne chauffe pas, c\'est un montage série avec lampe grillée. 2. Si les autres lampes restent allumées, c\'est un montage en dérivation avec lampe défectueuse. 3. Si tout s\'éteint et que la pile devient brûlante, il y a un court-circuit.',
        tip: 'Débrancher immédiatement la pile en cas d\'échauffement rapide pour éviter tout incendie.'
      }
    ],
    examples: [
      {
        statement: 'Dans une salle de classe à Abongoua, l\'une des 4 lampes du plafond est grillée. Les trois autres continuent de fonctionner. Quel est le type de montage ?',
        solution: 'Le montage est en dérivation (ou parallèle), car chaque lampe est sur une boucle indépendante. La défaillance d\'une lampe n\'interrompt pas le courant dans les autres boucles.'
      }
    ],
    exercises: [
      {
        question: 'Que se passe-t-il si l\'on court-circuite l\'une des deux lampes montées en série ?',
        correction: 'La lampe court-circuitée s\'éteint. L\'autre lampe continue de briller et son éclat augmente car elle reçoit désormais la totalité de la tension du générateur.'
      }
    ],
    evaluationSituation: {
      context: 'En rentrant le soir au quartier, Koffi remarque que sur l\'avenue principale, certains lampadaires sont allumés alors que deux sont totalement éteints.',
      instructions: [
        '1. Précise le mode d\'association de ces lampadaires.',
        '2. Explique pourquoi les autres lampadaires restent allumés malgré les deux lampadaires éteints.',
        '3. Quel serait le problème majeur si ces lampadaires avaient été reliés en série ?'
      ],
      solutionGuide: '1. Les lampadaires sont montés en dérivation (parallèle). 2. En dérivation, les récepteurs forment des boucles indépendantes reliées aux bornes du secteur : les lampadaires éteints sont simplement grillés ou défectueux sans couper l\'alimentation des autres. 3. En série, une seule ampoule grillée ouvrirait le circuit et plongerait toute la ville dans le noir complet.'
    },
    examTraps: [
      'Croire qu\'un court-circuit en série fait chauffer la pile (en série, le récepteur restant absorbe le courant ; en dérivation, c\'est le générateur qui est directement court-circuité).',
      'Dire que les lampes en dérivation se partagent la tension de la pile.'
    ],
    quickMemo: 'Série = 1 boucle | 1 lampe grillée -> tout s\'éteint | 1 court-circuit -> l\'autre brille plus fort. Dérivation = plusieurs boucles | 1 lampe grillée -> les autres brillent | 1 court-circuit -> tout s\'éteint et la pile chauffe.',
    keywords: ['lampes en série', 'lampes en dérivation', 'court-circuit', 'lampe grillée', 'boucle de courant', 'éclairage public']
  },

  // ========================================================
  // 5ÈME - PHYSIQUE : LEÇON 3 - ASSOCIATION DE PILES EN SÉRIE
  // ========================================================
  {
    id: 'pc-5e-association-piles-serie-concordance-opposition',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Électricité : Circuits & Adaptation',
    lessonTitle: 'Association de piles en série : Série concordance, série opposition et batteries d\'accumulateurs',
    objectifs: [
      'Distinguer une association de piles en série concordance d\'une association en série opposition',
      'Calculer la tension résultante aux bornes d\'une association de piles en série concordance (addition des tensions)',
      'Calculer la tension résultante lorsqu\'une ou plusieurs piles sont montées en série opposition (soustraction de la tension opposée)',
      'Identifier la structure d\'une pile plate de 4,5 V (trois éléments cylindriques de 1,5 V en série concordance)',
      'Expliquer le principe d\'une batterie d\'accumulateurs (association de cellules rechargeables pour élever la tension ou l\'autonomie)'
    ],
    fullCourseContent: `1. Association de piles en série concordance :
- Définition : Des piles sont montées en série concordance lorsque les bornes en contact sont de signes contraires : la borne positive (+) de la première pile touche la borne négative (-) de la suivante.
- Règle de calcul : Dans une association en série concordance, les tensions nominales des piles s'additionnent.
  Exemple : Trois piles de 1,5 V montées en concordance fournissent : U = 1,5 V + 1,5 V + 1,5 V = 4,5 V.
- Application pratique :
  * La pile plate de 4,5 V est composée à l'intérieur de 3 piles cylindriques de 1,5 V montées en série concordance.
  * Les lampes torches fonctionnent souvent avec deux ou trois piles cylindriques de 1,5 V associées en concordance pour alimenter une ampoule de 2,5 V ou 3,8 V.

2. Association de piles en série opposition :
- Définition : Des piles sont montées en série opposition lorsque les bornes en contact sont de même signe : borne (+) contre borne (+), ou borne (-) contre borne (-).
- Règle de calcul : La tension de la pile montée en opposition se retranche (se soustrait) de la somme des tensions des piles montées en concordance.
  Exemple : Dans un boîtier contenant 3 piles de 1,5 V, si la pile centrale est retournée (mise en opposition) :
  U_totale = 1,5 V - 1,5 V + 1,5 V = 1,5 V.
- Conséquence : La tension globale devient trop faible (1,5 V au lieu de 4,5 V). Une lampe de 3,8 V sera en sous-tension et brillera très faiblement, voire pas du tout. C'est l'erreur fréquente commise lorsqu'on insère mal les piles dans une télécommande ou une lampe torche !

3. Batteries d'accumulateurs :
- Une batterie d'accumulateurs est un ensemble d'éléments rechargeables (cellules chimiques) reliés entre eux.
- Câblage en série : Permet d'additionner les tensions pour atteindre la tension requise (ex : une batterie de voiture de 12 V est formée de 6 éléments de 2 V montés en série ; une batterie de camion de 24 V regroupe 12 éléments de 2 V).
- Utilisation : Démarrage des véhicules, alimentation de secours (onduleurs/UPS), stockage de l'énergie solaire photovoltaïque, téléphones portables et ordinateurs.`,
    definitions: [
      {
        term: 'Série concordance',
        definition: 'Montage en série de générateurs où la borne (+) de l\'un est connectée à la borne (-) du suivant, additionnant leurs tensions.'
      },
      {
        term: 'Série opposition',
        definition: 'Montage où deux générateurs sont connectés par des bornes de même signe (+/+ ou -/-), la tension de l\'un diminuant celle de l\'ensemble.'
      },
      {
        term: 'Batterie d\'accumulateurs',
        definition: 'Ensemble d\'éléments électrochimiques rechargeables associés pour délivrer une tension et une capacité données.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Loi de la série concordance',
        statement: 'Les tensions des piles montées en série concordance s\'additionnent purement et simplement.'
      },
      {
        name: 'Loi de la série opposition',
        statement: 'Toute pile insérée en opposition retranche sa tension de la tension globale délivrée.'
      }
    ],
    formulas: [
      {
        name: 'Tension en série concordance',
        formula: 'U_{\\text{totale}} = U_1 + U_2 + ... + U_n',
        explanation: 'Somme des tensions de chaque pile.',
        unitOrCondition: 'Tensions en Volts (V)'
      },
      {
        name: 'Tension avec pile en opposition',
        formula: 'U_{\\text{totale}} = U_{\\text{concordance}} - U_{\\text{opposition}}',
        explanation: 'La pile inversée diminue la tension résultante.',
        unitOrCondition: 'Tensions en Volts (V)'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer la tension totale d\'un ensemble de piles',
        procedure: '1. Repérer le sens de chaque pile (+ vers -). 2. Compter les piles montées dans le sens normal (concordance) et sommer leurs tensions. 3. Repérer les piles inversées (en opposition) et soustraire leur tension. 4. Conclure sur la tension finale disponible aux bornes.',
        tip: 'Vérifier toujours les signes gravés (+ et -) dans le compartiment à piles avant tout allumage.'
      }
    ],
    examples: [
      {
        statement: 'Un poste radio nécessite 6 V pour fonctionner. Il contient 4 piles de 1,5 V. Si une pile est montée à l\'envers, quelle est la tension totale ? Le poste fonctionnera-t-il ?',
        solution: 'Avec 3 piles en concordance et 1 pile en opposition :\nU_totale = 1,5 V + 1,5 V + 1,5 V - 1,5 V = 3,0 V.\n3,0 V étant nettement inférieur aux 6 V requis, le poste radio est en sous-tension et ne fonctionnera pas.'
      }
    ],
    exercises: [
      {
        question: 'Comment est constituée une pile plate de 4,5 V vendue dans le commerce ?',
        correction: 'Une pile plate de 4,5 V est constituée de trois piles cylindriques de 1,5 V chacune, montées à l\'intérieur en série concordance (1,5 + 1,5 + 1,5 = 4,5 V).'
      }
    ],
    evaluationSituation: {
      context: 'Pendant une coupure d\'électricité à Bongouanou, un père de famille remplace les 3 piles de sa lampe torche (lampe de 3,8 V). Après remontage, la torche éclaire très faiblement.',
      instructions: [
        '1. Quelle devrait être la tension normale fournie par les 3 piles neuves de 1,5 V en bon état ?',
        '2. Explique pourquoi la torche éclaire faiblement.',
        '3. Calcule la tension réelle reçue par l\'ampoule si une pile a été montée à l\'envers.'
      ],
      solutionGuide: '1. En série concordance normale, U = 1,5 V + 1,5 V + 1,5 V = 4,5 V (adaptée pour l\'ampoule de 3,8 V). 2. La torche éclaire faiblement parce qu\'une des piles a été montée en opposition (à l\'envers). 3. Calcul de la tension : U = 1,5 V + 1,5 V - 1,5 V = 1,5 V. La lampe de 3,8 V est donc en sous-tension.'
    },
    examTraps: [
      'Multiplier les tensions au lieu de les additionner.',
      'Oublier de retrancher la tension de la pile en opposition.',
      'Confondre le symbole de la borne positive (long trait fin) et de la borne négative (court trait épais).'
    ],
    quickMemo: 'Concordance (+ avec -) -> Tensions s\'ajoutent (1,5 + 1,5 = 3 V). Opposition (+ avec + ou - avec -) -> La tension opposée se retranche (1,5 - 1,5 = 0 V).',
    keywords: ['piles en série', 'série concordance', 'série opposition', 'pile plate', 'accumulateurs', 'tension totale', '5e']
  },

  // ========================================================
  // 5ÈME - PHYSIQUE : LEÇON 4 - INTENSITÉ & TENSION (LOIS & MESURES)
  // ========================================================
  {
    id: 'pc-5e-intensite-tension-lois-mesures',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Mesure de Grandeurs Physiques',
    lessonTitle: 'Intensité et Tension électriques : Appareils de mesure, calibres et lois dans les circuits',
    objectifs: [
      'Définir l\'intensité du courant électrique (I) en Ampères (A), son appareil de mesure (l\'ampèremètre branché en série)',
      'Définir la tension électrique (U) en Volts (V), son appareil de mesure (le voltmètre branché en dérivation)',
      'Énoncer et appliquer la loi d\'unicité de l\'intensité en série (I = I1 = I2) et la loi d\'additivité en dérivation (loi des nœuds : I = I1 + I2)',
      'Énoncer et appliquer la loi d\'additivité des tensions en série (U = U1 + U2) et la loi d\'unicité des tensions en dérivation (U = U1 = U2)',
      'Effectuer les conversions d\'unités : mA, A, kA, mV, V, kV'
    ],
    fullCourseContent: `1. L'Intensité du courant électrique (I) :
- Notion : L'intensité mesure le débit d'électricité qui circule en un point du circuit (analogie avec le débit d'un fleuve).
- Symbole et Unités : Elle se note I et son unité est l'Ampère (symbole A), en hommage à André-Marie Ampère.
  * 1 kA = 1000 A
  * 1 A = 1000 mA (donc 1 mA = 0,001 A)
- Appareil de mesure : L'Ampèremètre (symbole un cercle avec la lettre A).
  * Il se branche TOUJOURS en SÉRIE dans la branche où l'on veut mesurer le courant.
  * Polarité : Le courant entre par la borne positive (+) ou A/mA et ressort par la borne négative (-) ou COM.
  * Consigne de sécurité : Choisir d'abord le calibre le plus grand pour éviter de griller l'appareil, puis affiner.
- Lois de l'Intensité :
  * Circuit en SÉRIE (Loi d'unicité) : L'intensité du courant électrique a la même valeur en tout point du circuit : I = I1 = I2 = I3.
  * Circuit en DÉRIVATION (Loi des nœuds / d'additivité) : L'intensité du courant dans la branche principale est égale à la somme des intensités dans les branches dérivées : I = I1 + I2.

2. La Tension électrique (U) :
- Notion : La tension électrique est la différence d'état électrique (ou différence de potentiel) entre deux points d'un circuit.
- Symbole et Unités : Elle se note U et son unité est le Volt (symbole V), en hommage à Alessandro Volta.
  * 1 kV = 1000 V
  * 1 V = 1000 mV (donc 100 mV = 0,1 V)
- Appareil de mesure : Le Voltmètre (symbole un cercle avec la lettre V).
  * Il se branche TOUJOURS en DÉRIVATION aux bornes du dipôle dont on souhaite connaître la tension.
  * Polarité : La borne V est reliée côté pôle (+) du générateur et la borne COM côté pôle (-).
- Lois de la Tension :
  * Circuit en SÉRIE (Loi d'additivité) : La tension aux bornes de l'association de dipôles en série est égale à la somme des tensions à leurs bornes : U = U1 + U2.
  * Circuit en DÉRIVATION (Loi d'unicité) : La tension est identique aux bornes de dipôles branchés en dérivation : U = U1 = U2.`,
    definitions: [
      {
        term: 'Ampèremètre',
        definition: 'Instrument de mesure de l\'intensité électrique, obligatoirement branché en série dans le circuit.'
      },
      {
        term: 'Voltmètre',
        definition: 'Instrument de mesure de la tension électrique, obligatoirement branché en dérivation aux bornes du dipôle.'
      },
      {
        term: 'Calibre',
        definition: 'Valeur maximale de la grandeur mesurable pour une position donnée du sélecteur de l\'appareil.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de branchement des appareils',
        statement: 'Ampèremètre en série (ne jamais le mettre aux bornes d\'une pile !) ; Voltmètre en dérivation (en parallèle).'
      },
      {
        name: 'Déchiffrage croisé Série / Dérivation',
        statement: 'En série : I est unique (I=I1=I2) et U s\'additionne (U=U1+U2). En dérivation : U est unique (U=U1=U2) et I s\'additionne (I=I1+I2).'
      }
    ],
    formulas: [
      {
        name: 'Loi des intensités en série',
        formula: 'I_{\\text{générateur}} = I_1 = I_2 = ... = I_n',
        explanation: 'Le courant est identique en tout point d\'une boucle unique.'
      },
      {
        name: 'Loi d\'additivité des intensités (dérivation)',
        formula: 'I_{\\text{principale}} = I_1 + I_2',
        explanation: 'Le courant principal se sépare dans les branches dérivées.'
      },
      {
        name: 'Loi d\'additivité des tensions (série)',
        formula: 'U_{\\text{générateur}} = U_1 + U_2',
        explanation: 'La tension globale se répartit entre les dipôles en série.'
      },
      {
        name: 'Loi d\'unicité des tensions (dérivation)',
        formula: 'U_{\\text{générateur}} = U_1 = U_2',
        explanation: 'Toutes les branches dérivées ont la même tension.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer les grandeurs inconnues dans un circuit mixte',
        procedure: '1. Identifier si les branches sont en série ou en dérivation. 2. Pour les dipôles en série sur une même branche, appliquer I identique et U additionnés. 3. Pour les branches en dérivation, appliquer U identique et I additionnés au nœud. 4. Convertir toutes les unités en A et V avant de calculer.',
        tip: 'Faire attention à ne pas mélanger mA et A : 60 mA = 0,06 A.'
      }
    ],
    examples: [
      {
        statement: 'Dans un circuit en dérivation, la branche principale délivre I = 3 A. La lampe L1 reçoit I1 = 2 A. Quelle est l\'intensité I2 dans la lampe L2 ?',
        solution: 'D\'après la loi des intensités en dérivation :\nI = I1 + I2\n3 A = 2 A + I2\nI2 = 3 A - 2 A = 1 A.'
      }
    ],
    exercises: [
      {
        question: 'Deux lampes L1 et L2 sont montées en série aux bornes d\'un générateur délivrant U = 6 V. La tension mesurée aux bornes de L2 est U2 = 2 V. Calcule la tension U1 aux bornes de L1.',
        correction: 'Dans un circuit en série, les tensions s\'additionnent : U = U1 + U2. On a donc U1 = U - U2 = 6 V - 2 V = 4 V.'
      }
    ],
    evaluationSituation: {
      context: 'Au laboratoire du lycée de Dimbokro, un montage comporte un générateur de 6 V, une lampe L1 seule sur une branche dérivée, et deux lampes L2 et L3 en série sur une seconde branche dérivée. U2 = 2 V.',
      instructions: [
        '1. Détermine la tension U1 aux bornes de la lampe L1.',
        '2. Détermine la tension U3 aux bornes de la lampe L3.',
        '3. Quel voltmètre se monte en dérivation ?'
      ],
      solutionGuide: '1. L1 est en dérivation sur le générateur de 6 V, donc d\'après la loi d\'unicité des tensions : U1 = U = 6 V. 2. La seconde branche est soumise à 6 V et comprend L2 et L3 en série : U = U2 + U3 => 6 V = 2 V + U3 => U3 = 4 V. 3. Tout voltmètre se monte obligatoirement en dérivation aux bornes du dipôle à mesurer.'
    },
    examTraps: [
      'Brancher un ampèremètre en dérivation aux bornes du générateur (crée un court-circuit destructeur).',
      'Confondre les unités : Volts pour la tension (U), Ampères pour l\'intensité (I).',
      'Oublier que la borne COM doit être reliée vers le pôle négatif (-).'
    ],
    quickMemo: 'Ampèremètre en série (I en A) | Voltmètre en dérivation (U en V) | En série : I constante, U s\'ajoute | En dérivation : U constante, I s\'ajoute.',
    keywords: ['intensité', 'tension', 'ampèremètre', 'voltmètre', 'loi des nœuds', 'loi d\'unicité', 'additivité', 'calibre', '5e']
  },

  // ========================================================
  // 5ÈME - PHYSIQUE : LEÇON 5 - AIMANTS ET ÉLECTROAIMANTS
  // ========================================================
  {
    id: 'pc-5e-aimants-et-electroaimants',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Électromagnétisme & Induction',
    lessonTitle: 'Aimants et électroaimants : Pôles, ferromagnétisme, boussole, solénoïde et applications techniques',
    objectifs: [
      'Définir un aimant naturel (magnétite Fe3O4) et artificiel (acier, barreau, aimant en U, aiguille aimantée)',
      'Caractériser les pôles d\'un aimant (Pôle Nord et Pôle Sud) et les interactions (attraction entre pôles contraires, répulsion entre pôles de même nom)',
      'Distinguer les substances ferromagnétiques (fer, acier, nickel, cobalt) des métaux non ferromagnétiques (cuivre, aluminium, zinc, or, argent)',
      'Distinguer l\'aimantation permanente (acier) de l\'aimantation temporaire (fer doux)',
      'Décrire la réalisation et le fonctionnement d\'un électroaimant (bobine + noyau en fer doux + courant électrique)'
    ],
    fullCourseContent: `1. Généralités sur les Aimants :
- Définition : Un aimant est un corps possédant des propriétés magnétiques capables d'attirer les substances ferromagnétiques.
- Types d'aimants :
  * Aimant naturel : Roche ferrugineuse appelée magnétite (oxyde magnétique de fer Fe3O4).
  * Aimant artificiel : Fabriqué par l'homme sous diverses formes : barreau droit, aimant en U, aiguille aimantée, aimant circulaire ou cylindrique.
- Les Pôles d'un aimant :
  * Tout aimant possède exactement deux pôles : un Pôle Nord (N) et un Pôle Sud (S).
  * Les propriétés magnétiques sont maximales aux pôles et quasi nulles au centre (zone neutre).
  * Insecabilité des pôles : Si on brise un aimant en deux, chaque morceau reforme instantanément un pôle Nord et un pôle Sud. Il est impossible d'isoler un pôle magnétique unique.
- Interactions magnétiques :
  * Deux pôles de même nom se repoussent (Nord - Nord ou Sud - Sud -> Répulsion).
  * Deux pôles de noms contraires s'attirent (Nord - Sud ou Sud - Nord -> Attraction).

2. Ferromagnétisme et procédés d'aimantation :
- Substances ferromagnétiques : Matériaux attirés par un aimant. Ce sont le fer et ses alliages (acier, fonte), ainsi que le nickel et le cobalt. Les autres métaux (cuivre, aluminium, zinc, or, plomb) et les isolants (bois, plastique, verre) ne sont PAS attirés.
- Aimantation par contact :
  * Avec l'acier : Une tige d'acier mise en contact avec un aimant devient un aimant permanent (conserve son magnétisme même après retrait de l'aimant).
  * Avec le fer doux (fer très pur) : Le fer doux n'attire la limaille que tant qu'il est en contact avec l'aimant. Dès qu'on retire l'aimant, il perd son magnétisme : c'est une aimantation temporaire.

3. Réalisation et caractéristiques d'un Électroaimant :
- Constitution : Un électroaimant est formé d'une bobine de fil de cuivre conducteur (solénoïde) à l'intérieur de laquelle est inséré un noyau de fer doux.
- Fonctionnement :
  * Quand le courant circule dans la bobine, le noyau en fer doux s'aimante fortement et attire les objets ferreux.
  * Dès que le courant est coupé, l'aimantation disparaît instantanément et les objets retombent.
  * C'est un aimant temporaire commandé à distance par le courant électrique.
- Facteurs augmentant la force d'un électroaimant :
  * Augmenter l'intensité du courant électrique (ex: ajouter une pile en série).
  * Augmenter le nombre de spires (tours de fil) de la bobine.
  * Utiliser un noyau de fer doux adapté.
- Polarité de l'électroaimant : Les faces de la bobine correspondent à un pôle Nord et un pôle Sud, qui s'inversent lorsqu'on inverse le sens du courant électrique.

4. Applications pratiques des aimants et électroaimants :
- La Boussole : Aiguille aimantée mobile sur pivot qui s'oriente selon le champ magnétique terrestre (pointe vers le pôle Nord magnétique).
- Détecteur à cadre mobile : Ampèremètres et voltmètres analogiques à aiguille (cadre bobiné tournant dans l'entrefer d'un aimant en U).
- Le Relais électromagnétique : Interrupteur commandé par un circuit de commande à faible courant pour actionner un circuit de puissance à fort courant (démarrage automobile, automatismes industriels).
- Les Haut-parleurs (baffles) : Une bobine mobile fixée à une membrane vibre sous l'effet du signal électrique dans le champ magnétique d'un aimant permanent pour produire du son.
- Les grues électromagnétiques : Levage et tri des ferrailles dans les ports et usines de recyclage.`,
    definitions: [
      {
        term: 'Aimant',
        definition: 'Corps capable d\'attirer des objets ferromagnétiques grâce à son champ magnétique.'
      },
      {
        term: 'Ferromagnétique',
        definition: 'Matière contenant du fer, du nickel ou du cobalt sensible à l\'attraction magnétique.'
      },
      {
        term: 'Électroaimant',
        definition: 'Aimant temporaire constitué d\'une bobine conductrice entourant un noyau de fer doux, activé par le passage du courant.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Loi d\'interaction magnétique',
        statement: 'Les pôles de même nom se repoussent (N-N, S-S) ; les pôles de noms contraires s\'attirent (N-S).'
      },
      {
        name: 'Principe de l\'électroaimant',
        statement: 'L\'aimantation d\'un électroaimant est temporaire : elle existe uniquement tant que le courant électrique traverse sa bobine.'
      }
    ],
    formulas: [
      {
        name: 'Interactions magnétiques',
        formula: '\\text{Nord} \\leftrightarrow \\text{Nord (Répulsion)} \\quad | \\quad \\text{Nord} \\to \\leftarrow \\text{Sud (Attraction)}',
        explanation: 'Comportement fondamental des pôles magnétiques.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Tester si un objet métallique est ferromagnétique',
        procedure: '1. Approcher l\'objet d\'un pôle d\'aimant sans le toucher. 2. Observer s\'il subit une force d\'attraction. 3. S\'il est attiré (clou en fer, trombone en acier, pièce en nickel), il est ferromagnétique. 4. S\'il n\'est pas attiré (canette en aluminium, fil de cuivre, tuyau en plomb), il est non ferromagnétique.',
        tip: 'Le cuivre et l\'aluminium sont des métaux mais ne sont JAMAIS attirés par un aimant.'
      }
    ],
    examples: [
      {
        statement: 'Un élève fait tomber une boîte contenant des aiguilles en acier, des clous en fer, des morceaux de cuivre, des boutons en plastique et des rondelles en zinc. Quels objets seront récupérés avec un aimant ?',
        solution: 'L\'aimant n\'attire que les substances ferromagnétiques : les aiguilles en acier et les clous en fer seront récupérés. Les morceaux de cuivre, les boutons en plastique et les rondelles en zinc ne seront pas attirés.'
      }
    ],
    exercises: [
      {
        question: 'Quelle est la différence fondamentale entre l\'aimantation d\'une barre d\'acier et celle d\'une barre de fer doux ?',
        correction: 'L\'acier subit une aimantation permanente (il reste aimanté même après le retrait de l\'aimant extérieur). Le fer doux subit une aimantation temporaire (il perd immédiatement ses propriétés magnétiques dès qu\'on éloigne l\'aimant ou coupe le courant).'
      }
    ],
    evaluationSituation: {
      context: 'Dans un port de commerce à San Pedro, une grande grue utilise un disque circulaire métallique sans crochet pour décharger des tonnes de ferraille d\'un navire et les déposer sur des camions.',
      instructions: [
        '1. Nomme le dispositif électrique fixé à la grue.',
        '2. Explique son fonctionnement pour soulever puis relâcher la ferraille.',
        '3. Pourquoi n\'utilise-t-on pas un aimant permanent naturel ?'
      ],
      solutionGuide: '1. Il s\'agit d\'un électroaimant de levage. 2. Quand l\'opérateur ferme le circuit de commande, le courant passe dans la bobine : le noyau de fer doux s\'aimante et attire massivement les blocs de fer. Arrivé au-dessus du camion, il ouvre le circuit : le courant est coupé, le fer doux se désaimante instantanément et la ferraille retombe. 3. Un aimant permanent attirerait la ferraille mais ne permettrait pas de la lâcher sur commande.'
    },
    examTraps: [
      'Affirmer qu\'un aimant attire tous les métaux (le cuivre, l\'or, l\'argent et l\'aluminium ne sont pas attirés).',
      'Penser qu\'on peut fabriquer un aimant avec un seul pôle en le cassant.',
      'Confondre fer doux (temporaire) et acier (permanent).'
    ],
    quickMemo: 'Aimant = Pôle Nord + Pôle Sud | Même nom se repoussent, contraires s\'attirent | Ferromagnétique = Fer, Acier, Nickel | Électroaimant = Bobine + Fer doux parcouru par courant (aimant commandé).',
    keywords: ['aimant', 'électroaimant', 'pôle nord', 'pôle sud', 'ferromagnétisme', 'fer doux', 'acier', 'boussole', 'relais', '5e']
  },

  // ========================================================
  // 5ÈME - PHYSIQUE : LEÇON 6 - PRODUCTION DU COURANT ALTERNATIF & ALTERNATEURS
  // ========================================================
  {
    id: 'pc-5e-production-courant-alternatif-alternateurs',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Électromagnétisme & Induction',
    lessonTitle: 'Production du courant électrique : Induction magnétique, courant alternatif, alternateurs et dynamo de bicyclette',
    objectifs: [
      'Mettre en évidence la production d\'un courant électrique par déplacement d\'un aimant devant une bobine (phénomène d\'induction)',
      'Définir le courant alternatif : courant dont le sens s\'inverse périodiquement au cours du temps',
      'Identifier les deux parties essentielles d\'un alternateur : le rotor (partie tournante, aimant ou électroaimant) et le stator (partie fixe formée de bobines)',
      'Décrire le fonctionnement de la dynamo (génératrice) de bicyclette',
      'Distinguer une génératrice électrique (convertit l\'énergie mécanique en énergie électrique) d\'un moteur électrique (convertit l\'énergie électrique en énergie mécanique)'
    ],
    fullCourseContent: `1. Production du courant par déplacement d'un aimant devant une bobine :
- Expérience fondamentale : Relions les bornes d'une bobine de fil de cuivre à un voltmètre à aiguille (ou à zéro central).
  * Quand l'aimant est immobile devant la bobine : la tension mesurée est strictement nulle (U = 0 V).
  * Quand on approche le pôle Nord de l'aimant : l'aiguille dévie vers les valeurs positives (U > 0).
  * Quand on éloigne le pôle Nord : l'aiguille dévie vers les valeurs négatives (U < 0).
  * Quand on approche le pôle Sud : la tension devient négative.
- Conclusion : Un courant électrique apparaît dans la bobine UNIQUEMENT pendant le mouvement relatif de l'aimant par rapport à la bobine.
- Définition du Courant Alternatif : Si l'aimant effectue un mouvement de va-et-vient ou s'il tourne de manière continue à proximité de la bobine, le courant électrique change constamment et alternativement de sens : c'est un courant alternatif.

2. L'Alternateur de centrale électrique :
- Rôle : C'est le composant central qui convertit l'énergie mécanique fournie par une turbine en énergie électrique alternative dans les centrales électriques.
- Constitution :
  * Le Stator : Partie fixe comprenant plusieurs bobines de cuivre enroulées sur des noyaux ferromagnétiques.
  * Le Rotor : Partie mobile rotative constituée d'un électroaimant puissant tournant à l'intérieur du stator.
- Sources d'énergie motrice :
  * Centrales hydroélectriques (barrages de Kossou, Taabo, Soubré en Côte d'Ivoire) : La force de l'eau entraîne la turbine qui fait tourner le rotor.
  * Centrales thermiques (Ciprel, Azito à Abidjan) : La vapeur produite par la combustion du gaz naturel met en rotation les turbines.
  * Éoliennes : L'énergie cinétique du vent fait tourner les pales reliées à l'alternateur.

3. La Génératrice de bicyclette (couramment appelée Dynamo) :
- Description : Dispositif fixé contre la roue d'un vélo pour alimenter les feux avant et arrière.
- Mécanisme :
  * Quand le cycliste pédale, le pneu entraîne un petit galet en rotation.
  * Ce galet fait tourner un aimant permanent (rotor) à l'intérieur d'une bobine fixe (stator).
  * La rotation de l'aimant dans la bobine produit un courant électrique alternatif transmis à l'ampoule.
- Comparaison Génératrice vs Moteur :
  * La génératrice (alternateur) : Énergie mécanique (mouvement) -> Énergie électrique (courant).
  * Le moteur électrique : Énergie électrique (courant d'une pile ou du secteur) -> Énergie mécanique (rotation de l'arbre).`,
    definitions: [
      {
        term: 'Courant alternatif',
        definition: 'Courant électrique qui change de sens périodiquement dans le circuit à intervalle régulier.'
      },
      {
        term: 'Rotor',
        definition: 'Partie mobile d\'un alternateur ou d\'un moteur qui tourne autour d\'un axe.'
      },
      {
        term: 'Stator',
        definition: 'Partie fixe entourant le rotor, contenant généralement les bobines réceptrices de courant.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Condition d\'induction',
        statement: 'Le courant induit n\'apparaît que s\'il y a mouvement relatif entre l\'aimant et la bobine ; à l\'arrêt, aucun courant n\'est produit.'
      },
      {
        name: 'Principe de réciprocité générateur / moteur',
        statement: 'Un moteur et un alternateur utilisent les mêmes constituants (bobine et aimant) mais accomplissent des conversions d\'énergie inverses.'
      }
    ],
    formulas: [
      {
        name: 'Conversion dans l\'alternateur',
        formula: '\\text{Énergie mécanique (Turbine / Galet)} \\xrightarrow{\\text{Alternateur}} \\text{Énergie électrique (Courant alternatif)}',
        explanation: 'Principe universel de production d\'électricité à grande échelle.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Expliquer la production de courant sur une bicyclette',
        procedure: '1. Identifier la source d\'énergie : les jambes du cycliste qui font tourner la roue. 2. Montrer la transmission : la roue entraîne le galet puis l\'aimant mobile (rotor). 3. Expliquer la création du courant : l\'aimant en rotation induit un courant alternatif dans la bobine fixe (stator). 4. Préciser le récepteur : le phare du vélo qui convertit le courant en lumière.',
        tip: 'Si le cycliste s\'arrête de pédaler, l\'aimant s\'arrête et la lampe s\'éteint immédiatement.'
      }
    ],
    examples: [
      {
        statement: 'À quel moment une dynamo de vélo produit-elle le courant le plus intense ?',
        solution: 'Plus le cycliste roule vite, plus la roue et l\'aimant tournent rapidement devant la bobine. La variation du champ magnétique est plus rapide, ce qui engendre un courant induit de plus forte intensité et un éclairage plus brillant.'
      }
    ],
    exercises: [
      {
        question: 'Quelles sont les deux parties principales d\'un alternateur et laquelle est mobile ?',
        correction: 'Les deux parties sont le rotor et le stator. Le rotor est la partie mobile (en rotation), tandis que le stator est la partie fixe.'
      }
    ],
    evaluationSituation: {
      context: 'En visite au barrage hydroélectrique de Soubré, des élèves de 5ème découvrent d\'immenses turbines raccordées à des alternateurs géants produisant de l\'électricité pour tout le réseau national ivoirien.',
      instructions: [
        '1. Nomme la forme d\'énergie fournie par l\'eau à la turbine.',
        '2. Précise le rôle de l\'alternateur.',
        '3. Indique le type de courant produit (continu ou alternatif).'
      ],
      solutionGuide: '1. L\'eau en chute fournit de l\'énergie mécanique (cinétique et potentielle). 2. L\'alternateur transforme cette énergie mécanique en énergie électrique grâce à la rotation d\'un rotor électromagnétique devant des bobines statoriques. 3. Le courant produit est un courant alternatif.'
    },
    examTraps: [
      'Penser qu\'un aimant immobile dans une bobine produit du courant (il faut impérativement un mouvement).',
      'Confondre le rôle de la dynamo (génératrice : mouvement -> électricité) et du moteur (électricité -> mouvement).',
      'Croire que la dynamo de vélo fournit du courant continu (elle produit du courant alternatif).'
    ],
    quickMemo: 'Mouvement d\'un aimant devant une bobine = Courant alternatif | Alternateur = Rotor (mobile, aimant) + Stator (fixe, bobines) | Énergie mécanique -> Énergie électrique.',
    keywords: ['courant alternatif', 'alternateur', 'rotor', 'stator', 'dynamo', 'bobine', 'induction', 'barrage hydroélectrique', '5e']
  },

  // ========================================================
  // 5ÈME - PHYSIQUE : LEÇON 7 - PRESSION ATMOSPHÉRIQUE & GAZ
  // ========================================================
  {
    id: 'pc-5e-pression-atmospherique-et-gaz',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Mesure de Grandeurs Physiques',
    lessonTitle: 'La pression atmosphérique et la pression des gaz : Expérience de Torricelli, baromètre, manomètre et météo',
    objectifs: [
      'Mettre en évidence la pression atmosphérique (expérience du verre d\'eau renversé fermé par une feuille de papier)',
      'Définir la pression atmosphérique comme la poussée exercée par l\'air sur toute surface en contact',
      'Connaître les unités de pression : Pascal (Pa, unité légale), hectopascal (1 hPa = 100 Pa), bar (1 bar = 100 000 Pa = 1 000 hPa) et mm de mercure (1013 hPa = 760 mmHg)',
      'Distinguer les instruments de mesure : baromètre (pour la pression atmosphérique) et manomètre (pour un gaz enfermé en surpression ou dépression)',
      'Exploiter une carte météorologique : lignes isobares, anticyclone A (haute pression, beau temps), dépression D (basse pression, mauvais temps) et direction des vents'
    ],
    fullCourseContent: `1. Mise en évidence et Définition de la Pression Atmosphérique :
- Expérience du verre d'eau : Remplissons un verre d'eau à ras bord et posons une feuille de papier sur l'ouverture. En retournant le verre, l'eau ne se renverse pas et le papier ne tombe pas.
- Explication : L'air environnant appuie vers le haut sur la feuille avec une force plus grande que le poids de l'eau. Cette poussée exercée par l'air s'appelle la pression atmosphérique.
- Définition : La pression atmosphérique est la force pressante qu'exerce l'air atmosphérique sur chaque unité de surface de tout corps avec lequel il est en contact.

2. Unités et Instruments de mesure de la Pression :
- Unités de pression :
  * Unité légale internationale : Le Pascal (symbole Pa).
  * Unité météorologique : L'hectopascal (1 hPa = 100 Pa).
  * Unité industrielle usuelle : Le bar (1 bar = 1000 hPa = 100 000 Pa).
  * Millimètre de mercure (mmHg) : 760 mmHg correspondent à la pression moyenne au niveau de la mer.
  * Valeur de référence normale : P_atm moyenne au niveau de la mer = 1013 hPa = 1013 mbar = 760 mmHg.
- Instruments de mesure :
  * Le Baromètre : Mesure la pression atmosphérique libre (baromètre à mercure de Torricelli, baromètre anéroïde métallique).
  * Le Manomètre : Mesure la pression d'un gaz enfermé dans une enceinte fermée (pneus de voiture, bouteille de gaz, manomètre à eau en U).
  * Surpression et dépression : Dans un manomètre en U à eau, si P_gaz > P_atm, il y a surpression (P_gaz = P_atm + h) ; si P_gaz < P_atm, il y a dépression (P_gaz = P_atm - h).

3. Exploitation des cartes météorologiques et prévision du temps :
- Lignes Isobares : Lignes reliant tous les points géographiques ayant la même pression atmosphérique à un moment donné.
- Les zones de pression :
  * Zone de Haute Pression (Anticyclone, noté A) : Pression supérieure à la moyenne normale (ex : P > 1013 hPa, 1020 hPa). Elle annonce un temps sec, calme et ensoleillé (beau temps).
  * Zone de Basse Pression (Dépression, notée D) : Pression inférieure à la moyenne normale (ex : P < 1013 hPa, 995 hPa). Elle annonce un risque d'orages, de nuages et de pluie (mauvais temps).
- Déplacement des vents : Les masses d'air se déplacent naturellement des zones de haute pression (anticyclones) vers les zones de basse pression (dépressions).
- Autres instruments météo : Thermomètre (température), hygromètre (humidité de l'air), anémomètre (vitesse du vent), girouette (direction du vent).`,
    definitions: [
      {
        term: 'Pression atmosphérique',
        definition: 'Poussée exercée par le poids de l\'air de l\'atmosphère sur toutes les surfaces en contact.'
      },
      {
        term: 'Baromètre',
        definition: 'Instrument servant à mesurer la pression atmosphérique ambiante.'
      },
      {
        term: 'Manomètre',
        definition: 'Instrument mesurant la pression d\'un fluide ou d\'un gaz enfermé dans une cuve ou un pneu.'
      },
      {
        term: 'Isobare',
        definition: 'Ligne d\'une carte météorologique reliant les points de même pression atmosphérique.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle météo fondamentale',
        statement: 'Haute pression (Anticyclone A > 1013 hPa) = Beau temps ; Basse pression (Dépression D < 1013 hPa) = Mauvais temps / pluie.'
      },
      {
        name: 'Loi des vents',
        statement: 'Le vent souffle toujours des zones de haute pression vers les zones de basse pression.'
      }
    ],
    formulas: [
      {
        name: 'Conversions de pression',
        formula: '1\\,\\text{bar} = 1000\\,\\text{hPa} = 100\\,000\\,\\text{Pa} \\quad | \\quad P_{\\text{mer}} = 1013\\,\\text{hPa} = 760\\,\\text{mmHg}',
        explanation: 'Équivalences officielles des unités de pression.'
      },
      {
        name: 'Surpression et Dépression au manomètre',
        formula: 'P_{\\text{surpression}} = P_{\\text{atm}} + h \\quad | \\quad P_{\\text{dépression}} = P_{\\text{atm}} - h',
        explanation: 'Calcul de la pression d\'un gaz avec la dénivellation d\'un manomètre à liquide.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Lire une carte météo pour prévoir le temps',
        procedure: '1. Repérer la valeur de la pression sur la ligne isobare de la ville étudiée. 2. Comparer à la pression normale (1013 hPa). 3. Si P > 1013 hPa (Anticyclone A) -> Prévoir un temps ensoleillé. 4. Si P < 1013 hPa (Dépression D) -> Prévoir des risques de pluie et vent fort.',
        tip: 'Le vent est d\'autant plus violent que les lignes isobares sont resserrées.'
      }
    ],
    examples: [
      {
        statement: 'Un pneu de camion est gonflé à 8 bars. Exprime cette pression en hPa puis en Pa.',
        solution: 'Comme 1 bar = 1 000 hPa = 100 000 Pa :\nP = 8 × 1 000 hPa = 8 000 hPa.\nP = 8 × 100 000 Pa = 800 000 Pa.'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi l\'eau ne coule-t-elle pas lorsqu\'on retourne un verre plein d\'eau recouvert d\'un morceau de papier ?',
        correction: 'L\'eau ne coule pas car la pression atmosphérique exercée par l\'air extérieur de bas en haut sur la feuille est plus forte que la pression due au poids de l\'eau dans le verre.'
      }
    ],
    evaluationSituation: {
      context: 'Avant le départ en car pour les vacances à Bongouanou, le chauffeur vérifie la pression des pneus chez le vulcanisateur. Celui-ci annonce : "La pression est de 3 kilos".',
      instructions: [
        '1. Quelle est l\'unité légale de pression et son symbole ?',
        '2. Nomme l\'instrument utilisé par le vulcanisateur.',
        '3. Corrige l\'expression orale du vulcanisateur en donnant la valeur correcte en bar et en hPa.'
      ],
      solutionGuide: '1. L\'unité légale internationale de pression est le Pascal (Pa). 2. L\'instrument utilisé pour mesurer la pression d\'un gaz enfermé est le manomètre. 3. Le vulcanisateur dit par abus "3 kilos" pour signifier 3 bars (ou 3 kgf/cm²). La formulation correcte est 3 bars, soit 3 000 hPa (ou 300 000 Pa).'
    },
    examTraps: [
      'Confondre baromètre (mesure de l\'air libre) et manomètre (mesure d\'un gaz sous pression enfermé).',
      'Confondre anticyclone (A, beau temps) et dépression (D, pluie).',
      'Dire que 1 hPa = 10 Pa (1 hPa = 100 Pa car hecto = 100).'
    ],
    quickMemo: 'Patm normale = 1013 hPa = 760 mmHg | Baromètre = air ambiant | Manomètre = gaz enfermé | Anticyclone A (>1013) = Beau temps | Dépression D (<1013) = Pluie | Vent = Haute vers Basse pression.',
    keywords: ['pression atmosphérique', 'pascal', 'hectopascal', 'bar', 'baromètre', 'manomètre', 'isobares', 'anticyclone', 'dépression', '5e']
  },

  // ========================================================
  // 5ÈME - PHYSIQUE : LEÇON 8 - DILATATION THERMIQUE (SOLIDES, LIQUIDES, GAZ)
  // ========================================================
  {
    id: 'pc-5e-dilatation-thermique-solides-liquides-gaz',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Propriétés Physiques de la Matière',
    lessonTitle: 'Dilatation thermique des corps : Solides, liquides, gaz, bilames et sécurité des récipients clos',
    objectifs: [
      'Définir la dilatation thermique comme l\'augmentation des dimensions ou du volume d\'un corps lors d\'une élévation de température (et la contraction lors d\'un refroidissement)',
      'Distinguer la dilatation linéaire (augmentation de longueur) et la dilatation volumique (augmentation de volume dans toutes les directions)',
      'Identifier les facteurs de dilatation d\'un solide : élévation de température, nature du matériau (l\'aluminium se dilate plus que le fer), longueur initiale',
      'Comprendre le principe du bilame (deux métaux soudés de dilatabilités différentes) et son application dans le thermostat (fer à repasser)',
      'Connaître les applications techniques : joints de dilatation (ponts, rails), emmanchement forcé',
      'Comparer les trois états : les gaz se dilatent beaucoup plus que les liquides, qui se dilatent plus que les solides (Gaz >> Liquides > Solides)',
      'Expliquer les dangers de la dilatation des gaz en vase clos (bombes aérosols, bouteilles de butane) et les consignes de sécurité'
    ],
    fullCourseContent: `1. Phénomène général de Dilatation Thermique :
- Principe fondamental : Lorsqu\'on chauffe un corps (solide, liquide ou gaz), son volume augmente : on dit qu\'il se DILATE. Lorsqu\'on le refroidit, son volume diminue : on dit qu\'il se CONTRACTE.
- Règle de conservation : Pendant la dilatation ou la contraction, la masse (quantité de matière) NE CHANGE PAS. En revanche, le volume augmentant à chaud, sa masse volumique (rho = m/V) DIMINUE.

2. Dilatation des Solides :
- Dilatation linéaire : Augmentation de la longueur d'un solide (tige métallique). Elle s'observe au dilatomètre.
- Dilatation volumique : Augmentation dans toutes les dimensions spatiales. Expérience de l'anneau de 's Gravesande : à froid, une sphère en cuivre passe juste dans l'anneau ; chauffée à la flamme, elle grossit et ne passe plus !
- Facteurs influençant la dilatation d'un solide :
  * L'augmentation de température (Delta T) : plus il fait chaud, plus il s'allonge.
  * La nature du solide : À température et dimensions égales, l'aluminium se dilate plus que le cuivre, qui se dilate plus que le fer, qui se dilate plus que le verre ordinaire.
  * Les dimensions initiales : une barre de 2 mètres s'allonge deux fois plus qu'une barre de 1 mètre.
- Applications industrielles et domestiques :
  * Le Bilame : Lame bimétallique formée de deux métaux soudés (ex: cuivre et acier). Comme le cuivre se dilate plus vite que l'acier, le bilame se courbe du côté du métal le moins dilatable (l'acier) quand il est chauffé. Utilisé comme interrupteur automatique dans le thermostat des fers à repasser, chauffe-eau et radiateurs.
  * Les Joints de dilatation : Espaces vides réservés entre les sections de ponts routiers, de viaducs ou de rails de chemin de fer pour éviter les déformations et ruptures en été.
  * L'emmanchement forcé : Chauffer une pièce métallique creuse pour l'élargir, insérer l'axe, puis laisser refroidir pour obtenir un serrage indémontable (manches d'outils, tuyaux SODECI).

3. Dilatation des Liquides :
- Les liquides ne subissent qu'une dilatation volumique.
- Expérience : Un ballon plein d'eau colorée surmonté d'un tube fin plonge dans l'eau chaude : le liquide monte nettement dans le tube capillaire.
- Comparaison : À température égale, les liquides se dilatent beaucoup plus que les solides (l'alcool se dilate 50 fois plus que le verre, le mercure 7 fois plus).
- Applications : Le thermomètre à liquide (alcool ou mercure), les vases d'expansion dans les circuits de refroidissement automobile ou de chaudières.

4. Dilatation des Gaz et Dangers en Vase Clos :
- Observation : L'air enfermé dans un ballon de baudruche chauffé au soleil se dilate et fait gonfler le ballon jusqu'à éclater.
- Propriété universelle : Tous les gaz se dilatent exactement de la même façon pour une élévation de température donnée, indépendamment de leur nature chimique !
- Hiérarchie de dilatation : Gaz >> Liquides > Solides.
- Dangers en vase clos (Bombes aérosols et Bouteilles de gaz) :
  * Si un gaz est enfermé dans un récipient rigide indéformable, son volume ne peut pas augmenter : c'est sa PRESSION qui monte en flèche !
  * Si la température dépasse 50 °C (au soleil ou près d'un feu), la surpression entraîne l'explosion violente du récipient avec risque de projection et d'incendie.
- Règles de sécurité : Ne jamais percer une bombe aérosol, ne jamais jeter un aérosol au feu même vide, ne pas stocker les bouteilles de gaz au soleil.`,
    definitions: [
      {
        term: 'Dilatation thermique',
        definition: 'Augmentation du volume ou des dimensions d\'un corps sous l\'effet d\'une hausse de température.'
      },
      {
        term: 'Bilame',
        definition: 'Dispositif composé de deux lames métalliques de natures différentes soudées, qui se courbe sous l\'effet de la chaleur.'
      },
      {
        term: 'Joint de dilatation',
        definition: 'Espace aménagé dans une construction pour absorber les variations de dimensions dues aux changements thermiques.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Invariance de la masse',
        statement: 'Lors de la dilatation thermique, la masse du corps reste strictement constante, seul son volume augmente (sa masse volumique diminue).'
      },
      {
        name: 'Échelle de dilatation des trois états',
        statement: 'Les gaz se dilatent énormément, les liquides modérément, et les solides très peu : Gaz >> Liquides > Solides.'
      },
      {
        name: 'Indépendance de nature pour les gaz',
        statement: 'Tous les gaz (air, butane, dioxygène, dioxyde de carbone) se dilatent de la même façon à même température.'
      }
    ],
    formulas: [
      {
        name: 'Hiérarchie de dilatation',
        formula: '\\Delta V_{\\text{Gaz}} \\gg \\Delta V_{\\text{Liquides}} > \\Delta V_{\\text{Solides}}',
        explanation: 'Comparaison des taux de dilatation pour une même élévation de température.'
      },
      {
        name: 'Variation de masse volumique',
        formula: '\\rho = \\frac{m}{V} \\implies \\text{À chaud : } V \\nearrow \\iff \\rho \\searrow',
        explanation: 'L\'air chaud a une masse volumique plus faible, ce qui explique qu\'il s\'élève (courants de convection).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Séparer deux récipients coincés par dilatation',
        procedure: '1. Identifier le récipient extérieur (ex: gobelet en aluminium) et intérieur (gobelet en verre). 2. Chauffer délicatement le récipient extérieur pour qu\'il se dilate. 3. Mettre éventuellement de l\'eau froide ou de la glace dans le récipient intérieur pour le contracter. 4. Les deux récipients se débloquent sans casse.',
        tip: 'L\'aluminium se dilate beaucoup plus vite et plus fort que le verre ordinaire.'
      }
    ],
    examples: [
      {
        statement: 'Pourquoi le portail métallique d\'un collège à Adzopé frotte-t-il contre son cadre l\'après-midi vers 14h alors qu\'il s\'ouvre parfaitement le matin à 6h ?',
        solution: 'Sous l\'action du soleil intense de l\'après-midi, la température du portail s\'élève. Le fer se dilate (dilatation linéaire et volumique) et augmente de dimensions, ce qui fait coincer le portail dans son cadre. Le matin à la fraîcheur, le portail s\'est contracté et retrouve ses dimensions initiales.'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi est-il strictement interdit de jeter une bombe aérosol (déodorant ou insecticide) dans un feu de brousse ou un fourneau, même si elle semble vide ?',
        correction: 'Même vide de produit liquide, la bombe contient encore du gaz résiduel. En vase clos métallique, le chauffage intense entraîne une augmentation formidable de la pression du gaz qui finit par faire exploser le récipient avec projection d\'éclats dangereux.'
      }
    ],
    evaluationSituation: {
      context: 'Pendant une fête de fin d\'année scolaire à Sominassé, des élèves décorent la cour en plein soleil avec des ballons de baudruche gonflés le matin à l\'air frais. À midi, les ballons éclatent les uns après les autres sans que personne ne les touche.',
      instructions: [
        '1. Nomme le phénomène physique à l\'origine de l\'éclatement des ballons.',
        '2. Explique le mécanisme qui a conduit à cet éclatement.',
        '3. Quels sont les deux facteurs qui déterminent la dilatation d\'un gaz ?'
      ],
      solutionGuide: '1. Le phénomène responsable est la dilatation thermique des gaz (l\'air contenu dans le ballon). 2. Avec la montée de la température au soleil, l\'air enfermé se dilate et son volume augmente. La membrane élastique du ballon est étirée au-delà de sa limite de résistance mécanique et finit par se rompre (éclatement). 3. Les deux facteurs sont le volume initial de gaz et l\'élévation de température.'
    },
    examTraps: [
      'Dire que la masse d\'un solide augmente quand on le chauffe (la masse ne change jamais, seul le volume varie).',
      'Confondre dilatation linéaire (longueur d\'une tige) et volumique (volume global d\'une sphère ou liquide).',
      'Croire que les différents gaz se dilatent différemment (tous les gaz se dilatent identiquement).'
    ],
    quickMemo: 'Chaud = Dilatation (volume augmente, masse constante, masse volumique diminue) | Froid = Contraction | Gaz >> Liquides > Solides | Bilame = thermostat fer à repasser | Vase clos + chaleur = danger d\'explosion.',
    keywords: ['dilatation', 'contraction', 'dilatation linéaire', 'dilatation volumique', 'bilame', 'thermostat', 'joint de dilatation', 'aérosol', '5e']
  },

  // ========================================================
  // 5ÈME - PHYSIQUE : LEÇON 9 - MASSE VOLUMIQUE ET DENSITÉ
  // ========================================================
  {
    id: 'pc-5e-masse-volumique-et-densite',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Propriétés Physiques de la Matière',
    lessonTitle: 'Masse volumique et densité : Formules, méthode de mesure par déplacement d\'eau, densimètre et flottabilité',
    objectifs: [
      'Définir la masse volumique (rho ou a) comme le quotient de la masse d\'un corps par son volume (rho = m / V)',
      'Maîtriser les unités de masse volumique : kg/m³ (unité légale), g/cm³, g/L, kg/L et effectuer les conversions (1 g/cm³ = 1000 kg/m³)',
      'Déterminer expérimentalement le volume d\'un solide par déplacement de liquide (éprouvette graduée : V = V2 - V1)',
      'Mesurer la masse d\'un liquide par méthode de double pesée (m = m2 - m1)',
      'Définir la densité (d) d\'un solide ou liquide par rapport à l\'eau (d = rho / rho_eau) et d\'un gaz par rapport à l\'air (d = M / 29)',
      'Mesurer directement la densité avec un densimètre (aéromètre) basé sur la poussée d\'Archimède'
    ],
    fullCourseContent: `1. La Masse Volumique d\'un corps (rho ou a) :
- Définition : La masse volumique d'une substance est la masse par unité de volume de cette substance. Elle traduit à quel point la matière est compacte.
- Formule mathématique : rho = m / V (ou a = m / V).
  * m : masse du corps (exprimée en kg ou en g).
  * V : volume occupé par le corps (exprimé en m³ ou en cm³ ou en L).
  * rho : masse volumique (exprimée en kg/m³ dans le SI, ou en g/cm³).
- Valeurs de référence indispensables :
  * Eau pure : rho_eau = 1 g/cm³ = 1 kg/L = 1000 kg/m³.
  * Air (dans les CNTP : 0 °C, 1 atm) : rho_air = 1,3 g/L = 1,29 kg/m³.
  * Quelques métaux : Fer (7,8 g/cm³), Cuivre (8,9 g/cm³), Aluminium (2,7 g/cm³), Mercure (13,6 g/cm³).

2. Méthodes de mesure expérimentale :
- Pour un solide de forme quelconque :
  1. On mesure sa masse m à l'aide d'une balance électronique ou à plateaux (ex : m = 160 g).
  2. On verse de l'eau dans une éprouvette graduée et on note le volume initial V1 (ex : V1 = 60 cm³).
  3. On immerge délicatement le solide : le niveau monte à V2 (ex : V2 = 90 cm³).
  4. Le volume du solide est V = V2 - V1 = 90 - 60 = 30 cm³.
  5. On calcule : rho = m / V = 160 / 30 = 5,33 g/cm³.
- Pour un solide de forme géométrique régulière :
  * Pavé droit : V = L × l × h
  * Cube : V = c³
  * Cylindre : V = pi × r² × h
- Pour un liquide (Double pesée) :
  1. Peser l'éprouvette vide -> masse m1.
  2. Verser un volume V de liquide et peser l'ensemble -> masse m2.
  3. Masse réelle du liquide : m = m2 - m1.
  4. Calcul : rho = (m2 - m1) / V.

3. La Notion de Densité (d) :
- Définition : La densité d'un corps est le rapport sans dimension de sa masse volumique à celle d'un corps de référence pris dans les mêmes conditions de température et de pression.
  * Pour les solides et liquides : Le corps de référence est l'EAU PURE (rho_eau = 1 g/cm³ = 1000 kg/m³).
    d = rho_corps / rho_eau.
  * Pour les gaz : Le corps de référence est l'AIR (d = rho_gaz / rho_air = M / 29, où M est la masse molaire).
- Propriété essentielle : La densité n'a PAS d'unité (c'est un nombre pur).
- Flottabilité :
  * Si d < 1 (rho < 1 g/cm³) : le corps flotte sur l'eau (ex : huile d = 0,9, bois d = 0,6).
  * Si d > 1 (rho > 1 g/cm³) : le corps coule au fond de l'eau (ex : fer d = 7,8, verre d = 2,5).
- Mesure directe : Le Densimètre (ou aéromètre).
  * Flotteur en verre lesté qui s'enfonce plus ou moins profondément dans le liquide selon le principe d'Archimède.
  * Plus le liquide est dense (ex : eau très salée ou sirop), plus le densimètre flotte haut.`,
    definitions: [
      {
        term: 'Masse volumique (rho)',
        definition: 'Grandeur physique égale au quotient de la masse d\'un échantillon de matière par son volume : rho = m / V.'
      },
      {
        term: 'Densité (d)',
        definition: 'Rapport sans unité entre la masse volumique d\'un corps et celle du corps de référence (l\'eau pour solides/liquides, l\'air pour les gaz).'
      },
      {
        term: 'Densimètre',
        definition: 'Instrument plongeur gradué permettant la lecture directe de la densité d\'un liquide par flottaison.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de flottabilité',
        statement: 'Tout corps de densité inférieure à 1 flotte sur l\'eau pure ; tout corps de densité supérieure à 1 coule.'
      },
      {
        name: 'Équivalence des unités de masse volumique',
        statement: '1 g/cm³ = 1 kg/dm³ = 1 kg/L = 1000 kg/m³.'
      }
    ],
    formulas: [
      {
        name: 'Masse volumique',
        formula: '\\rho = \\frac{m}{V}',
        explanation: 'Rapport de la masse sur le volume.',
        unitOrCondition: 'm en kg et V en m³ (rho en kg/m³) ou m en g et V en cm³ (rho en g/cm³)'
      },
      {
        name: 'Densité d\'un solide ou liquide',
        formula: 'd = \\frac{\\rho}{\\rho_{\\text{eau}}} = \\frac{m}{m_{\\text{eau (même volume)}}}',
        explanation: 'Rapport sans unité comparant la matière à l\'eau pure.'
      },
      {
        name: 'Densité d\'un gaz',
        formula: 'd = \\frac{\\rho_{\\text{gaz}}}{\\rho_{\\text{air}}} = \\frac{M}{29}',
        explanation: 'Densité d\'un gaz par rapport à l\'air à partir de sa masse molaire M (g/mol).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier un métal inconnu grâce à sa masse volumique',
        procedure: '1. Peser le bloc de métal sur une balance pour trouver m en grammes. 2. Mesurer son volume V par immersion dans une éprouvette graduée (V = V2 - V1 en cm³). 3. Calculer rho = m / V en g/cm³. 4. Comparer avec le tableau des masses volumiques étalons (Al = 2,7 ; Fer = 7,8 ; Cuivre = 8,9).',
        tip: 'Vérifier qu\'aucune bulle d\'air ne reste piégée sous le solide dans l\'eau.'
      }
    ],
    examples: [
      {
        statement: 'Un pavé de dimensions 2 cm × 4 cm × 2,5 cm a une masse de 54 g. Calcule son volume, sa masse volumique et identifie son matériau parmi : Verre (2,5 g/cm³), Aluminium (2,7 g/cm³), Fer (7,8 g/cm³).',
        solution: '1. Volume du pavé : V = 2 × 4 × 2,5 = 20 cm³.\n2. Masse volumique : rho = m / V = 54 / 20 = 2,7 g/cm³.\n3. Identification : 2,7 g/cm³ correspond exactement à l\'aluminium.'
      }
    ],
    exercises: [
      {
        question: 'La masse de 0,25 L d\'une huile végétale est de 230 g. Calcule sa masse volumique en g/cm³ puis sa densité par rapport à l\'eau.',
        correction: '0,25 L = 250 cm³. rho = m / V = 230 / 250 = 0,92 g/cm³. Sa densité par rapport à l\'eau est d = rho / rho_eau = 0,92 / 1 = 0,92. Comme d < 1, cette huile flotte sur l\'eau.'
      }
    ],
    evaluationSituation: {
      context: 'Un élève de 5ème trouve une bille métallique lourde. Il veut savoir si elle est en plomb pur (rho = 11,3 g/cm³) ou en fer (rho = 7,8 g/cm³). Il dispose d\'une balance et d\'une éprouvette graduée contenant 50 cm³ d\'eau. La balance indique 78 g et après immersion de la bille, l\'eau monte à 60 cm³.',
      instructions: [
        '1. Calcule le volume de la bille.',
        '2. Calcule la masse volumique de la bille en g/cm³.',
        '3. Identifie le métal et précise s\'il flotterait sur le mercure (rho = 13,6 g/cm³).'
      ],
      solutionGuide: '1. Volume V = V2 - V1 = 60 - 50 = 10 cm³. 2. Masse volumique rho = m / V = 78 g / 10 cm³ = 7,8 g/cm³. 3. Le métal est le fer. Comme la masse volumique du fer (7,8 g/cm³) est inférieure à celle du mercure liquide (13,6 g/cm³), la bille de fer flottera sur le mercure liquide.'
    },
    examTraps: [
      'Donner une unité à la densité (la densité est sans unité !).',
      'Confondre masse volumique (rho = m/V en g/cm³) et masse (m en g).',
      'Oublier de convertir les litres en cm³ ou m³ dans les calculs.'
    ],
    quickMemo: 'rho = m / V (en g/cm³ ou kg/m³) | Eau : rho = 1 g/cm³ = 1000 kg/m³ | d = rho / rho_eau (sans unité) | Si d < 1 -> flotte ; si d > 1 -> coule.',
    keywords: ['masse volumique', 'densité', 'déplacement d\'eau', 'double pesée', 'densimètre', 'flottabilité', '5e']
  }
];
