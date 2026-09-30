/**
 * BASE DE CONNAISSANCES OFFICIELLE : SVT TERMINALE D
 * Source : Fascicule officiel d'excellence (Grandprofs de SVT - CAP_SVT_LAB)
 * Conforme au programme en vigueur et à l'Approche Par Compétences (APC)
 * 
 * Contient les 12 Thèmes et 26 Leçons fondamentales avec :
 * - Définitions scientifiques exactes
 * - Expériences clés & protocoles d'investigation (Waller, Bell & Magendie, Stanius, Claude Bernard, Mendel, Morgan, Pavlov, Skinner)
 * - Vocabulaire anatomique, cellulaire et moléculaire
 * - Schémas d'interprétation, bilans et mécanismes de régulation
 */

export interface SvtLesson {
  lessonNumber: number;
  title: string;
  objectives: string[];
  keyDefinitions: Record<string, string>;
  experimentsAndProtocols: {
    name: string;
    protocol: string;
    observation: string;
    interpretation: string;
    conclusion: string;
  }[];
  mechanismsAndRegulations?: string[];
  commonMistakesToAvoid: string[];
}

export interface SvtTheme {
  id: string;
  themeNumber: number;
  partTitle: string;
  title: string;
  lessons: SvtLesson[];
}

export interface SvtTleDKnowledgeBase {
  name: string;
  level: string;
  serie: string;
  version: string;
  themes: SvtTheme[];
}

export const svtTleDKnowledgeBase: SvtTleDKnowledgeBase = {
  name: "Référentiel National SVT Terminale D",
  level: "Terminale",
  serie: "D",
  version: "2024-2026 APC",
  themes: [
    // PARTIE 1 : RELATIONS DE L'ORGANISME AVEC LE MILIEU EXTÉRIEUR
    {
      id: "theme1",
      themeNumber: 1,
      partTitle: "Première partie : Relations de l'organisme avec le milieu extérieur",
      title: "Organisation du système nerveux cérébro-spinal des mammifères",
      lessons: [
        {
          lessonNumber: 1,
          title: "Organisation de l'encéphale",
          objectives: [
            "Localiser l'encéphale et décrire ses enveloppes de protection (méninges)",
            "Décrire l'organisation externe (faces dorsale et ventrale)",
            "Analyser l'organisation interne (coupes longitudinale et transversale, cavités ventriculaires, substance grise et blanche)",
          ],
          keyDefinitions: {
            "Méninges": "Enveloppes protectrices de l'encéphale comprenant de l'extérieur vers l'intérieur : la dure-mère (fibreuse et protectrice), l'arachnoïde (remplie de LCR pour suspension hydraulique) et la pie-mère (fine et richement vascularisée, rôle nourricier).",
            "Cortex cérébral": "Couche superficielle de substance grise recouvrant les hémisphères cérébraux, délimitée par des sillons et des circonvolutions.",
            "Corps calleux et Trigone": "Lames blanches reliant les deux hémisphères cérébraux.",
            "Tronc cérébral": "Ensemble formé par les pédoncules cérébraux, la protubérance annulaire (pont de Varole) et le bulbe rachidien.",
            "Liquide céphalo-rachidien (LCR)": "Liquide présent dans les ventricules encéphaliques et les espaces sous-arachnoïdiens assurant la protection mécanique et l'homéostasie.",
          },
          experimentsAndProtocols: [
            {
              name: "Dissection et coupe médiane de l'encéphale de mouton",
              protocol: "Section longitudinale médiane passant par le sillon inter-hémisphérique et incision du corps calleux et du trigone.",
              observation: "Mise en évidence des 4 ventricules (1er et 2e latéraux, 3e moyen, 4e sous le cervelet), de l'aqueduc de Sylvius et de l'arbre de vie du cervelet.",
              interpretation: "L'encéphale possède un réseau de cavités communicantes entouré de substance grise et blanche.",
              conclusion: "Organisation commune à tous les mammifères avec 5 vésicules embryonnaires : télencéphale, diencéphale, mésencéphale, métencéphale, myélencéphale.",
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre la disposition des substances : dans l'encéphale, la substance grise est périphérique (cortex) et la substance blanche est centrale, avec des noyaux gris profonds.",
          ],
        },
        {
          lessonNumber: 2,
          title: "Organisation de la moelle épinière",
          objectives: [
            "Localiser la moelle épinière dans le canal rachidien",
            "Décrire son anatomie externe et ses racines rachidiennes",
            "Analyser sa structure interne en coupe transversale (inversion des substances par rapport au cerveau)",
          ],
          keyDefinitions: {
            "Moelle épinière": "Cordon blanc cylindrique logé dans le canal rachidien, prolongement du bulbe rachidien.",
            "Ganglion spinal": "Renflement situé sur la racine postérieure (dorsale) du nerf rachidien, contenant les corps cellulaires des neurones sensitifs en T.",
            "Canal de l'épendyme": "Canal central très étroit parcourant la substance grise médullaire, contenant du LCR.",
            "Nerf rachidien": "Nerf mixte formé par la confluence de la racine antérieure motrice et de la racine postérieure sensitive (31 paires chez l'homme).",
          },
          experimentsAndProtocols: [
            {
              name: "Coupe transversale de la moelle épinière",
              protocol: "Coupe mince observée au microscope après coloration.",
              observation: "Substance grise centrale en forme de papillon (ou de X) avec 2 cornes antérieures larges et 2 cornes postérieures étroites, entourée de substance blanche.",
              interpretation: "Inversion parfaite par rapport à l'encéphale (substance grise centrale et substance blanche périphérique).",
              conclusion: "La moelle épinière est un centre réflexe et un conducteur de l'influx nerveux.",
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas oublier que la racine postérieure porte TOUJOURS le ganglion spinal et est sensitive, tandis que la racine antérieure est motrice.",
          ],
        },
      ],
    },
    {
      id: "theme2",
      themeNumber: 2,
      partTitle: "Première partie : Relations de l'organisme avec le milieu extérieur",
      title: "Le tissu nerveux et ses propriétés",
      lessons: [
        {
          lessonNumber: 3,
          title: "Organisation du tissu nerveux",
          objectives: [
            "Identifier les constituants cellulaires du tissu nerveux (neurones et névroglie)",
            "Interpréter les expériences de dégénérescence wallérienne",
            "Classifier les différents types de neurones selon leur morphologie",
          ],
          keyDefinitions: {
            "Neurone": "Unité structurale et fonctionnelle du tissu nerveux, cellule hautement différenciée constituée d'un soma (corps cellulaire), de dendrites et d'un axone unique.",
            "Cellules gliales (Névroglie)": "Cellules nourricières, de soutien et d'isolation (myélinisation) entourant les neurones.",
            "Corps de Nissl": "Amas d'ergastoplasme (réticulum endoplasmique granuleux) très développé dans le soma, lieu de synthèse protéique intense.",
            "Gaine de myéline": "Enveloppe lipidique isolante discontinue formée par les cellules de Schwann dans les nerfs et les oligodendrocytes dans le SNC, interrompue par les nœuds de Ranvier.",
          },
          experimentsAndProtocols: [
            {
              name: "Expérience de dégénérescence wallérienne (Waller, 1850)",
              protocol: "Section d'un nerf rachidien et observation au bout de quelques jours.",
              observation: "Dégénérescence du bout périphérique (anucléé), tandis que le bout central relié à la moelle épinière reste intact et peut régénérer.",
              interpretation: "Le noyau de la fibre nerveuse est situé dans le corps cellulaire au niveau du centre nerveux (principe de la mérotomie cellulaire).",
              conclusion: "La fibre nerveuse est le prolongement direct du corps cellulaire situé dans la substance grise ou le ganglion spinal.",
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas dire que le neurone peut se diviser par mitose : le neurone est amitotique (ne se divise pas après la naissance).",
          ],
        },
        {
          lessonNumber: 4,
          title: "Propriétés du tissu nerveux : Excitabilité et Conductibilité",
          objectives: [
            "Définir et mesurer le seuil d'excitabilité (rhéobase) et la chronaxie sur la courbe de Lapicque",
            "Comprendre les conditions d'efficacité d'un stimulus (loi de brutalité, durée minimale)",
            "Définir la période réfractaire absolue et relative",
          ],
          keyDefinitions: {
            "Rhéobase": "Intensité minimale (seuil) d'un courant électrique capable de déclencher un influx nerveux si la durée est suffisante (temps utile).",
            "Chronaxie": "Durée minimale d'application d'un courant d'intensité égale au double de la rhéobase pour obtenir une réponse.",
            "Période réfractaire absolue (PRA)": "Période brève suivant une excitation durant laquelle la fibre nerveuse est totalement inexcitable, quelle que soit l'intensité du stimulus.",
            "Période réfractaire relative (PRR)": "Période où une excitation supraliminaire peut déclencher un potentiel d'action d'amplitude réduite.",
          },
          experimentsAndProtocols: [
            {
              name: "Courbe intensité-durée de Lapicque",
              protocol: "Application de stimulations électriques rectangulaires de durées variables et détermination de l'intensité seuil correspondante.",
              observation: "Courbe hyperbolique décroissante tendant vers une asymptote horizontale (rhéobase).",
              interpretation: "Plus la durée de stimulation est courte, plus l'intensité nécessaire pour exciter le nerf est élevée.",
              conclusion: "Un tissu est d'autant plus excitable que sa rhéobase est basse et sa chronaxie courte.",
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre temps utile (durée à la rhéobase) et chronaxie (durée au double de la rhéobase).",
          ],
        },
        {
          lessonNumber: 5,
          title: "Phénomènes électriques de l'influx nerveux",
          objectives: [
            "Expliquer le potentiel de repos (-70 mV) par la répartition inégale des ions (K+ intracellulaire, Na+ extracellulaire)",
            "Détailler les phases du potentiel d'action (dépolarisation Na+, repolarisation K+, hyperpolarisation, pompe Na+/K+)",
            "Distinguer la loi du tout ou rien d'une fibre isolée du phénomène de recrutement d'un nerf",
          ],
          keyDefinitions: {
            "Potentiel de repos (PR)": "Différence de potentiel transmembranaire permanente en l'absence de stimulation (-70 mV chez le calmar, -60 à -90 mV chez les mammifères), l'intérieur étant négatif par rapport à l'extérieur.",
            "Potentiel d'action (PA)": "Inversion transitoire et brutale de la polarité membranaire suite à une stimulation efficace, atteignant +30 à +40 mV.",
            "Loi du tout ou rien": "Propriété d'une fibre isolée : en dessous du seuil, aucune réponse ; dès le seuil atteint, PA d'amplitude d'emblée maximale et constante.",
            "Recrutement": "Augmentation progressive de l'amplitude de la réponse globale d'un nerf entier quand l'intensité augmente, due à l'activation d'un nombre croissant de fibres.",
            "Canaux voltage-dépendants": "Protéines canaux dont l'ouverture dépend de la dépolarisation membranaire (Na+ s'ouvrant rapidement, K+ plus lentement).",
            "Pompe Na+/K+ ATPase": "Transporteur actif consommant de l'ATP qui expulse 3 Na+ contre 2 K+ pour rétablir les gradients ioniques initiaux.",
          },
          experimentsAndProtocols: [
            {
              name: "Enregistrement à l'oscilloscope cathodique (Potentiel d'action)",
              protocol: "Microélectrode intracellulaire et électrode de référence de surface.",
              observation: "Artéfact de stimulation $\\to$ Temps de latence $\\to$ Dépolarisation (+40 mV) $\\to$ Repolarisation $\\to$ Hyperpolarisation $\\to$ Retour au PR.",
              interpretation: "Entrée massive d'ions Na+ par les canaux voltage-dépendants suivie de la sortie d'ions K+.",
              conclusion: "L'influx nerveux est une onde de dépolarisation propagée.",
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas attribuer la loi du tout ou rien au nerf entier : elle ne s'applique qu'à la fibre isolée.",
          ],
        },
        {
          lessonNumber: 6,
          title: "Conduction de l'influx nerveux",
          objectives: [
            "Calculer la vitesse de propagation par la méthode de Helmholtz : V = Δd / Δt = (d2 - d1)/(t2 - t1)",
            "Distinguer la conduction continue de proche en proche (fibre amyélinisée) et la conduction saltatoire de nœud en nœud (fibre myélinisée)",
            "Identifier les facteurs faisant varier la vitesse (diamètre, myéline, température)",
          ],
          keyDefinitions: {
            "Conduction continue": "Propagation de proche en proche par courants locaux dans les fibres sans myéline (vitesse lente : ~1 à 2 m/s).",
            "Conduction saltatoire": "Sauts du potentiel d'action d'un nœud de Ranvier à l'autre grâce au rôle isolant de la gaine de myéline (vitesse rapide : jusqu'à 120 m/s).",
            "Méthode de Helmholtz": "Méthode de mesure de la vitesse en faisant varier la distance entre électrodes stimulatrices et réceptrices : $V = \\frac{d_2 - d_1}{t_2 - t_1}$.",
          },
          experimentsAndProtocols: [
            {
              name: "Mesure de la vitesse de l'influx nerveux par Helmholtz",
              protocol: "Stimulation constante, enregistrement en position d1 puis en position d2.",
              observation: "Décalage du pic de latence de t1 à t2.",
              interpretation: "La vitesse est proportionnelle au rapport de l'incrément spatial sur le retard temporel.",
              conclusion: "$V = \\Delta d / \\Delta t$. La vitesse augmente avec le diamètre et la présence de myéline.",
            },
          ],
          commonMistakesToAvoid: [
            "Attention aux unités lors du calcul de V : convertir les millimètres en mètres et les millisecondes en secondes ($1\\text{ ms} = 10^{-3}\\text{ s}$).",
          ],
        },
        {
          lessonNumber: 7,
          title: "Transmission synaptique et intégration neuronale",
          objectives: [
            "Décrire l'ultrastructure de la synapse chimique (membrane pré, fente 20-50 nm, membrane post)",
            "Détailler le mécanisme moléculaire (entrée de Ca2+, exocytose d'acétylcholine/GABA, fixation sur récepteurs chimio-dépendants, PPSE/PPSI, dégradation par l'acétylcholinestérase)",
            "Comprendre les sommations spatiale et temporelle dans le rôle intégrateur du motoneurone",
            "Analyser l'action des poisons et drogues (curare, ésérine, morphine, toxine botulique)",
          ],
          keyDefinitions: {
            "Synapse": "Zone de jonction fonctionnelle entre deux neurones ou entre un neurone et une cellule effectrice (plaque motrice).",
            "PPSE (Potentiel Postsynaptique Excitateur)": "Dépolarisation locale de la membrane postsynaptique due à l'entrée de Na+ via des canaux chimio-dépendants.",
            "PPSI (Potentiel Postsynaptique Inhibiteur)": "Hyperpolarisation locale de la membrane postsynaptique due à l'entrée de Cl- ou la sortie de K+ (ex: action du GABA).",
            "Sommation temporelle": "Addition des potentiels postsynaptiques générés à haute fréquence par une même synapse.",
            "Sommation spatiale": "Addition algébrique des PPSE et PPSI générés simultanément par différentes synapses afférentes.",
            "Curare": "Poison antagoniste compétitif se fixant sur les récepteurs d'acétylcholine de la plaque motrice sans ouvrir les canaux, bloquant la contraction musculaire.",
          },
          experimentsAndProtocols: [
            {
              name: "Expériences sur la transmission neuro-musculaire et le curare",
              protocol: "Stimulation du nerf moteur en présence de curare vs stimulation directe du muscle.",
              observation: "En présence de curare, la stimulation du nerf ne provoque pas de contraction musculaire, mais la stimulation directe du muscle provoque la contraction.",
              interpretation: "Le curare n'altère ni la conduction du nerf ni la contractilité du muscle, il bloque spécifiquement la synapse neuromusculaire.",
              conclusion: "La transmission à la plaque motrice est chimique et médiée par l'acétylcholine.",
            },
          ],
          commonMistakesToAvoid: [
            "La transmission synaptique chimique est rigoureusement UNIVOQUE (toujours du compartiment pré-vers post-synaptique car les vésicules ne sont que du côté présynaptique).",
          ],
        },
      ],
    },
    // PARTIE 2 : COMPORTEMENT MOTEUR & MUSCLE
    {
      id: "theme3",
      themeNumber: 3,
      partTitle: "Première partie : Relations de l'organisme avec le milieu extérieur",
      title: "Rôle du système nerveux dans le comportement moteur",
      lessons: [
        {
          lessonNumber: 8,
          title: "Mouvements involontaires ou réflexes",
          objectives: [
            "Distinguer réflexes innés (stéréotypés, préétablis, absolus) et réflexes conditionnels (acquis par apprentissage)",
            "Démontrer les lois de Pflüger chez la grenouille spinale (unilatéral, symétrique, irradié, généralisé)",
            "Analyser les expériences historiques de Bell et Magendie sur les racines médullaires",
            "Construire l'arc réflexe myotatique monosynaptique et expliquer l'innervation réciproque de Sherrington",
            "Comparer le conditionnement pavlovien (stimulus neutre $\\to$ conditionnel) et skinnérien (opérant avec renforcement)",
          ],
          keyDefinitions: {
            "Réflexe inné": "Réponse motrice involontaire, préétablie, stéréotypée et inéluctable à une stimulation sensorielle, commune à tous les individus d'une espèce.",
            "Arc réflexe": "Trajet anatomique de l'influx nerveux dans un réflexe : Récepteur sensoriel $\\to$ Conducteur afférent (nerf sensitif) $\\to$ Centre nerveux $\\to$ Conducteur efférent (motoneurone) $\\to$ Organe effecteur (muscle).",
            "Réflexe myotatique": "Contraction réflexe d'un muscle squelettique en réponse à son propre étirement (réflexe proprioceptif monosynaptique).",
            "Innervation réciproque (Loi de Sherrington)": "Mécanisme par lequel l'étirement du muscle agoniste excite son motoneurone tout en inhibant, via un interneurone inhibiteur, le motoneurone du muscle antagoniste.",
          },
          experimentsAndProtocols: [
            {
              name: "Expériences de Bell et Magendie (1822)",
              protocol: "Section et stimulation électrique des racines antérieure et postérieure d'un nerf rachidien chez l'animal.",
              observation: "Section racine dorsale : perte de sensibilité, motricité conservée. Stimulation bout central dorsal : douleur. Section racine ventrale : paralysie motrice, sensibilité conservée. Stimulation bout périphérique ventral : contraction.",
              interpretation: "La racine postérieure conduit l'influx sensitif centripète ; la racine antérieure conduit l'influx moteur centrifuge.",
              conclusion: "Le nerf rachidien est un nerf mixte et l'influx circule selon un arc réflexe polarisé.",
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas oublier qu'un réflexe myotatique pur ne comporte qu'UNE SEULE synapse dans la voie excitatrice (monosynaptique), mais nécessite un interneurone pour la voie inhibitrice antagoniste.",
          ],
        },
        {
          lessonNumber: 9,
          title: "Mouvements volontaires ou spontanés",
          objectives: [
            "Localiser les aires corticales motrices (en avant du sillon de Rolando) et l'Homunculus de Penfield",
            "Distinguer l'aire de projection motrice (pyramidale, mouvements fins) et l'aire prémotrice (coordination, langage de Broca)",
            "Tracer les voies motrices directes (croisées au niveau du bulbe/moelle) et voies indirectes",
            "Connaître les techniques d'imagerie moderne (TEP, EEG, IRM, scintigraphie)",
          ],
          keyDefinitions: {
            "Mouvement volontaire": "Activité motrice consciente déclenchée par une intention délibérée du cortex cérébral sans dépendre directement d'un stimulus extérieur.",
            "Homunculus moteur de Penfield": "Représentation somatotopique du corps sur le cortex moteur où la surface allouée à chaque organe est proportionnelle à la précision de sa motricité (mains et face très étendues).",
            "Voie pyramidale (directe)": "Faisceau de fibres cortico-spinales issues des cellules pyramidales du cortex moteur qui décussent (se croisent) pour innerver les motoneurones controlatéraux.",
          },
          experimentsAndProtocols: [
            {
              name: "Expériences d'ablation corticale partielle",
              protocol: "Ablation de l'aire motrice de l'hémisphère gauche.",
              observation: "Paralysie motrice complète et flasque de la moitié droite du corps (hémiplégie droite).",
              interpretation: "Chaque hémisphère cérébral commande la motricité de la moitié opposée du corps.",
              conclusion: "Les voies motrices volontaires sont croisées.",
            },
          ],
          commonMistakesToAvoid: [
            "L'hémisphère cérébral gauche commande le côté DROIT du corps, et vice-versa.",
          ],
        },
      ],
    },
    {
      id: "theme4",
      themeNumber: 4,
      partTitle: "Première partie : Relations de l'organisme avec le milieu extérieur",
      title: "Activité du muscle squelettique",
      lessons: [
        {
          lessonNumber: 10,
          title: "Structure et ultrastructure du muscle strié squelettique",
          objectives: [
            "Décrire l'organisation du muscle du niveau macroscopique au niveau moléculaire",
            "Définir le sarcomère comme unité contractile entre 2 stries Z (bandes I claires, bande A sombre, bande H)",
            "Détailler la structure moléculaire des myofilaments d'actine (avec troponine et tropomyosine) et de myosine",
          ],
          keyDefinitions: {
            "Sarcolemme": "Membrane plasmique de la fibre musculaire entourant le cytoplasme plurinucléé (syncytium).",
            "Sarcomère": "Unité fonctionnelle contractile de la myofibrille, délimitée par deux stries Z successives.",
            "Myofilaments": "Filaments protéiques épais de myosine (à têtes mobiles) et filaments fins d'actine associés à la troponine et à la tropomyosine.",
            "Unité motrice": "Ensemble fonctionnel constitué par un motoneurone $\\alpha$ et toutes les fibres musculaires qu'il innerve.",
          },
          experimentsAndProtocols: [
            {
              name: "Microscopie électronique du sarcomère en contraction",
              protocol: "Comparaison du sarcomère au repos et lors d'une contraction.",
              observation: "Rapprochement des stries Z, raccourcissement des bandes I et disparition de la bande H, tandis que la bande A garde une longueur strictement constante.",
              interpretation: "La contraction résulte du glissement relatif des filaments d'actine le long des filaments de myosine sans raccourcissement des filaments eux-mêmes.",
              conclusion: "Théorie du glissement des myofilaments.",
            },
          ],
          commonMistakesToAvoid: [
            "Ne jamais dire que les myofilaments rétrécissent : ils glissent les uns sur les autres, c'est le sarcomère qui se raccourcit.",
          ],
        },
        {
          lessonNumber: 11,
          title: "Aspects mécaniques, thermiques et énergétiques de la contraction",
          objectives: [
            "Analyser les myogrammes : secousse isolée (latence, contraction, relâchement), fusion de secousses, tétanos imparfait et parfait",
            "Détailler le cycle moléculaire : libération de Ca2+ par le réticulum $\\to$ démasquage des sites d'actine $\\to$ formation du pont acto-myosine $\\to$ pivotement de la tête de myosine par hydrolyse d'ATP $\\to$ détachement par fixation d'un nouvel ATP",
            "Analyser les voies de régénération de l'ATP : rapides (myokinase, phosphagène/créatine phosphate ACP) et lentes (respiration cellulaire, fermentation lactique)",
          ],
          keyDefinitions: {
            "Tétanos physiologique parfait": "Contraction musculaire maximale et soutenue sans oscillation, obtenue par une fréquence élevée de stimulations où les secousses fusionnent complètement.",
            "Rigidité cadavérique": "État de contraction irréversible après la mort dû à l'épuisement total en ATP, empêchant le détachement des têtes de myosine.",
            "Chaleur initiale": "Chaleur dégagée pendant la contraction et le relâchement (liée à l'hydrolyse d'ATP et voies rapides).",
            "Chaleur retardée": "Chaleur lente dégagée après la contraction, liée à la régénération aérobie de l'ATP par la respiration mitochondriale.",
            "Fermentation lactique": "$C_6H_{12}O_6 \\to 2 C_3H_6O_3 + 2 \\text{ATP}$ en anaérobie, responsable de la fatigue musculaire et des crampes.",
          },
          experimentsAndProtocols: [
            {
              name: "Expérience au salyrgan (inhibiteur d'ATPase)",
              protocol: "Traitement d'un muscle par le salyrgan qui bloque l'hydrolyse de l'ATP.",
              observation: "Le muscle stimulé ne se contracte plus.",
              interpretation: "L'énergie mécanique de glissement provient directement de l'hydrolyse de l'ATP par l'activité enzymatique des têtes de myosine.",
              conclusion: "L'ATP est la source directe et immédiate d'énergie mécanique du muscle.",
            },
          ],
          commonMistakesToAvoid: [
            "Le glucose n'est PAS la source directe d'énergie de la contraction : c'est l'ATP déjà présent dans la cellule.",
          ],
        },
      ],
    },
    // PARTIE 3 : CARDIO-VASCULAIRE & PRESSION ARTÉRIELLE
    {
      id: "theme5",
      themeNumber: 5,
      partTitle: "Deuxième partie : Activité cardiaque et pression artérielle",
      title: "Activité cardiaque et régulation de la pression artérielle",
      lessons: [
        {
          lessonNumber: 12,
          title: "Automatisme cardiaque et tissu nodal",
          objectives: [
            "Mettre en évidence l'automatisme cardiaque (cœur isolé continuant de battre)",
            "Analyser les ligatures de Stanius chez la grenouille (nœud de Remark, Bidder, Ludwig)",
            "Décrire le tissu nodal chez les mammifères : nœud sinusal (Keith & Flack, pacemaker), nœud septal (Aschoff-Tawara), faisceau de His, réseau de Purkinje",
            "Valider la théorie myogéniste de l'automatisme cardiaque",
          ],
          keyDefinitions: {
            "Automatisme cardiaque": "Propriété intrinsèque du myocarde à se contracter rythmiquement et spontanément en l'absence de toute stimulation nerveuse extérieure.",
            "Nœud sinusal (Keith et Flack)": "Centre d'entraînement principal (pacemaker) situé dans la paroi de l'oreillette droite imposant sa fréquence à l'ensemble du cœur.",
            "Dissociation auriculo-ventriculaire": "Rythme indépendant des oreillettes et des ventricules obtenu après section du faisceau de His.",
            "Théorie myogène": "Théorie démontrant que l'automatisme cardiaque prend son origine dans le muscle cardiaque spécialisé (tissu nodal) et non dans les ganglions nerveux.",
          },
          experimentsAndProtocols: [
            {
              name: "Ligatures de Stanius sur cœur de grenouille",
              protocol: "1ère ligature entre sinus et oreillettes (L1) ; 2ème ligature au sillon auriculo-ventriculaire (L2).",
              observation: "L1 : arrêt du cœur puis reprise lente des oreillettes et ventricules alors que le sinus garde son rythme rapide. L2 : oreillettes battent normalement, ventricule à rythme très ralenti.",
              interpretation: "Il existe un gradient d'automatisme hiérarchisé : Sinus (Remark) > Oreillettes (Ludwig) > Ventricule (Bidder).",
              conclusion: "Le centre sinusal est le pacemaker qui commande le rythme cardiaque.",
            },
          ],
          commonMistakesToAvoid: [
            "Le cœur des mammifères est myogénique (tissu nodal) et non neurogénique.",
          ],
        },
        {
          lessonNumber: 13,
          title: "Activité cardiaque et régulation de la pression artérielle",
          objectives: [
            "Décrire le cycle cardiaque : systole auriculaire $\\to$ systole ventriculaire $\\to$ diastole générale",
            "Interpréter l'électrocardiogramme (onde P = dépolarisation auriculaire, QRS = dépolarisation ventriculaire, onde T = repolarisation)",
            "Expliquer le baroréflexe : barorécepteurs sino-aortiques, nerfs de Hering et de Cyon, noyau sensitif du X, nerf pneumogastrique X (cardio-modérateur / acétylcholine), système orthosympathique (cardio-accélérateur / noradrénaline)",
            "Détailler la régulation hormonale et neurohormonale (système Rénine-Angiotensine-Aldostérone, ADH, catécholamines)",
          ],
          keyDefinitions: {
            "Pression artérielle (PA)": "Force exercée par le sang sur la paroi des artères : $PA = Q \\times R$ (Débit cardiaque $\\times$ Résistances périphériques).",
            "Nerfs de Hering et Cyon": "Nerfs sensitifs afférents issus respectivement du sinus carotidien et de la crosse aortique renseignant le bulbe rachidien sur la pression artérielle.",
            "Nerf vague (X ou pneumogastrique)": "Nerf moteur parasympathique cardio-modérateur libérant de l'acétylcholine (diminue la FC et la PA).",
            "Angiotensine": "Puissant peptide vasoconstricteur produit à partir de l'angiotensinogène hépatique sous l'action de la rénine rénale, stimulant l'aldostérone.",
            "Aldostérone": "Hormone corticosurrénalienne augmentant la réabsorption rénale de Na+ et d'eau, augmentant la volémie et la PA.",
          },
          experimentsAndProtocols: [
            {
              name: "Expériences de section et stimulation du nerf X et de l'orthosympathique",
              protocol: "Section vs stimulation électrique du nerf vague X.",
              observation: "Section du X : tachycardie et hausse de PA. Stimulation du X : bradycardie immédiate et chute de PA.",
              interpretation: "Le nerf vague X exerce un tonus cardio-modérateur permanent sur le cœur.",
              conclusion: "Le système parasympathique freine le cœur alors que l'orthosympathique l'accélère.",
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre bradycardie (ralentissement) et tachycardie (accélération du rythme cardiaque).",
          ],
        },
      ],
    },
    // PARTIE 4 : REPRODUCTION HUMAINE & VÉGÉTALE
    {
      id: "theme6",
      themeNumber: 6,
      partTitle: "Troisième partie : Reproduction",
      title: "Reproduction chez les mammifères",
      lessons: [
        {
          lessonNumber: 14,
          title: "Organes reproducteurs, gamétogenèse et méiose",
          objectives: [
            "Comparer la spermatogenèse (continue, 4 phases, 1 spermatogonie $\\to$ 4 spermatozoïdes) et l'ovogenèse (discontinue, bloquée en métaphase II, 1 ovogonie $\\to$ 1 ovocyte II + globules polaires)",
            "Détailler la spermiogenèse (acrosome, manchon mitochondrial, flagelle)",
            "Décrire les étapes de la méiose (division réductionnelle puis équationnelle) et les brassages chromosomiques (interchromosomique $2^n$ et intrachromosomique par crossing-over)",
          ],
          keyDefinitions: {
            "Spermatogenèse": "Formation continue des spermatozoïdes dans les tubes séminifères comprenant multiplication, accroissement, maturation (méiose) et différenciation (spermiogenèse).",
            "Cellules de Sertoli": "Cellules nourricières et de soutien de la lignée germinale dans les tubes séminifères.",
            "Cellules de Leydig": "Cellules interstitielles du testicule sécrétant la testostérone.",
            "Folliculogenèse": "Évolution du follicule ovarien : primordial $\\to$ primaire $\\to$ secondaire (plein) $\\to$ cavitaire (tertiaire) $\\to$ mûr de De Graaf.",
            "Crossing-over (enjambement)": "Échange réciproque de segments de chromatides non-sœurs entre chromosomes homologues appariés en prophase I de méiose (chiasmas).",
          },
          experimentsAndProtocols: [
            {
              name: "Analyse microscopique du testicule et de l'ovaire",
              protocol: "Observation de coupes histologiques testiculaires et ovariennes.",
              observation: "Tubes séminifères avec spermatozoïdes dans la lumière vs follicules ovariens à divers stades d'évolution.",
              interpretation: "Différenciation continue chez l'homme, cyclique chez la femme.",
              conclusion: "Les gonades assurent une double fonction : exocrine (gamètes) et endocrine (hormones).",
            },
          ],
          commonMistakesToAvoid: [
            "L'ovulation libère un OVOCYTE II bloqué en métaphase II et non un ovule mûr achevé (qui n'existe qu'après fécondation).",
          ],
        },
        {
          lessonNumber: 15,
          title: "Fécondation et problèmes liés à la fécondation",
          objectives: [
            "Décrire le trajet des gamètes, la capacitation des spermatozoïdes et le lieu de fécondation (1/3 supérieur de la trompe)",
            "Détailler la réaction acrosomique, la réaction corticale (membrane de fécondation anti-polyspermie) et la caryogamie (amphimixie)",
            "Identifier les causes d'infertilité (azoospermie, asthénospermie, oligospermie, trompes bouchées, etc.)",
          ],
          keyDefinitions: {
            "Capacitation": "Maturation finale des spermatozoïdes dans les voies génitales femelles leur conférant l'aptitude à féconder.",
            "Réaction corticale": "Exocytose des granules corticaux de l'ovocyte formant la membrane de fécondation empêchant la polyspermie.",
            "Amphimixie (Caryogamie)": "Fusion des deux pronucléi mâle et femelle pour reconstituer une cellule œuf diploïde à 2n chromosomes.",
          },
          experimentsAndProtocols: [
            {
              name: "Expérience sur la prévention de la polyspermie",
              protocol: "Mise en contact de spermatozoïdes avec un ovocyte sous microscope.",
              observation: "Dès l'entrée du premier spermatozoïde, soulèvement immédiat d'une membrane de fécondation.",
              interpretation: "Libération du contenu des granules corticaux modifiant la zone pellucide.",
              conclusion: "Mono-spermie rigoureuse chez les mammifères.",
            },
          ],
          commonMistakesToAvoid: [
            "La fécondation se déroule dans le 1/3 supérieur de la trompe de Fallope (ampoule), et JAMAIS dans l'utérus.",
          ],
        },
        {
          lessonNumber: 16,
          title: "Régulation du fonctionnement des appareils génitaux",
          objectives: [
            "Schématiser l'axe hypothalamo-hypophyso-testiculaire : GnRH pulsatile $\\to$ FSH (Sertoli) et LH (Leydig $\\to$ testostérone) $\\to$ rétrocontrôle négatif constant",
            "Détailler la synchronisation des cycles ovarien et utérin (phase folliculaire/œstrogènes $\\to$ pic d'œstradiol $\\to$ rétrocontrôle positif et pic de LH $\\to$ ovulation $\\to$ corps jaune/progestérone)",
            "Interpréter le cycle thermique des températures matinales (plateau progestéronique > 37°C)",
          ],
          keyDefinitions: {
            "GnRH": "Neurohormone hypothalamique sécrétée de manière pulsatile stimulant la libération de FSH et LH par l'antéhypophyse.",
            "FSH": "Gonadostimuline stimulant la spermatogenèse (Sertoli) chez l'homme et la croissance folliculaire chez la femme.",
            "LH": "Gonadostimuline stimulant la sécrétion de testostérone (Leydig) chez l'homme et déclenchant l'ovulation lors de son pic chez la femme.",
            "Rétrocontrôle positif": "Phénomène exceptionnel où un taux élevé d'œstradiol (> 200 pg/mL) en fin de phase folliculaire stimule massivement la libération de LH (pic ovulatoire).",
          },
          experimentsAndProtocols: [
            {
              name: "Expériences de castration et de greffes ovariennes/testiculaires",
              protocol: "Castration bilatérale chez l'adulte vs injection d'extraits gonadiques.",
              observation: "La castration entraîne une hypertrophie hypophysaire et une explosion des taux de FSH/LH, corrigée par l'injection de stéroïdes sexuels.",
              interpretation: "Les hormones gonadiques exercent un rétrocontrôle négatif sur l'axe hypothalamo-hypophysaire.",
              conclusion: "Régulation neuroendocrinienne en boucle fermée.",
            },
          ],
          commonMistakesToAvoid: [
            "Chez la femme, le rétrocontrôle est négatif la majeure partie du cycle, mais devient POSITIF juste avant l'ovulation sous l'effet du pic d'œstrogène.",
          ],
        },
        {
          lessonNumber: 17,
          title: "Gestation, accouchement et lactation",
          objectives: [
            "Décrire la migration tubulaire et la nidation dans l'endomètre au 6e-7e jour",
            "Expliquer le rôle de l'HCG (maintien du corps jaune gravidique) et du placenta (échanges, sécrétion d'œstrogène, progestérone, HPL)",
            "Détailler le déclenchement hormonal de l'accouchement (cortisol fœtal, chute de progestérone, ocytocine, prostaglandines)",
            "Expliquer la régulation neuro-hormonale de la lactation (prolactine pour la synthèse par les acini, ocytocine pour l'éjection réflexe par les cellules myoépithéliales)",
          ],
          keyDefinitions: {
            "Nidation": "Implantation de l'embryon au stade blastocyste dans la dentelle utérine de l'endomètre (environ 7 jours après la fécondation).",
            "HCG": "Hormone embryonnaire sécrétée par le trophoblaste maintenant le corps jaune et bloquant le cycle menstruel.",
            "Ocytocine": "Hormone posthypophysaire provoquant les contractions puissantes du myomètre lors du travail et l'éjection du lait lors de la tétée.",
            "Prolactine": "Hormone antéhypophysaire stimulant la synthèse et la sécrétion du lait par les acini mammaires.",
          },
          experimentsAndProtocols: [
            {
              name: "Ablation du corps jaune chez la femelle gestante",
              protocol: "Ovariectomie ou extirpation du corps jaune au premier tiers de la gestation.",
              observation: "Avortement spontané immédiat.",
              interpretation: "La progestérone lutéale est indispensable au maintien de la gestation avant le relais placentaire.",
              conclusion: "La progestérone est l'hormone de maintien de la gestation (silence utérin).",
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre prolactine (production du lait dans les acini) et ocytocine (éjection du lait par contraction des cellules myoépithéliales).",
          ],
        },
      ],
    },
    {
      id: "theme7",
      themeNumber: 7,
      partTitle: "Troisième partie : Reproduction",
      title: "Reproduction chez les spermaphytes",
      lessons: [
        {
          lessonNumber: 18,
          title: "Organisation florale, pollinisation et double fécondation",
          objectives: [
            "Identifier les pièces florales stériles (périanthe : calice, corolle) et fertiles (androcée, gynécée/pistil)",
            "Décrire la formation du grain de pollen (anthère) et du sac embryonnaire à 8 noyaux (ovule)",
            "Détailler la double fécondation propre aux Angiospermes (anthérozoïde 1 + oosphère $\\to$ embryon 2n ; anthérozoïde 2 + 2 noyaux polaires $\\to$ albumen triploïde 3n)",
            "Expliquer le cycle de développement (alternance diplophase sporophytique dominante et haplophase gamétophytique)",
          ],
          keyDefinitions: {
            "Double fécondation": "Caractéristique exclusive des Angiospermes où un grain de pollen libère 2 anthérozoïdes : l'un féconde l'oosphère (donnant le zygote principal 2n) et l'autre féconde les deux noyaux du sac (donnant l'albumen de réserve 3n).",
            "Sac embryonnaire": "Gamétophyte femelle contenant 7 cellules / 8 noyaux : 1 oosphère + 2 synergides (pôle micropylaire), 3 antipodes (pôle chalazien) et 1 cellule centrale à 2 noyaux polaires.",
            "Grain de pollen": "Gamétophyte mâle bicellulaire comprenant une cellule végétative (élaboration du tube pollinique) et une cellule génératrice (2 anthérozoïdes).",
          },
          experimentsAndProtocols: [
            {
              name: "Germination in vitro du grain de pollen",
              protocol: "Mise en culture de grains de pollen sur eau gélosée sucrée.",
              observation: "Émission d'un tube pollinique à travers un pore de l'exine orienté par chimiotropisme.",
              interpretation: "L'intine fait saillie et transporte les deux noyaux spermatiques vers l'ovule.",
              conclusion: "Germination et acheminement des gamètes mâles sans eau libre.",
            },
          ],
          commonMistakesToAvoid: [
            "La graine des Angiospermes comporte DEUX produits de fécondation : l'embryon diploïde (2n) et l'albumen triploïde (3n).",
          ],
        },
      ],
    },
    // PARTIE 5 : HÉRÉDITÉ & GÉNÉTIQUE
    {
      id: "theme8",
      themeNumber: 8,
      partTitle: "Quatrième partie : Hérédité",
      title: "Lois statistiques de la transmission des caractères héréditaires",
      lessons: [
        {
          lessonNumber: 19,
          title: "Monohybridisme, Dihybridisme, Linkage et Cartes factorielles",
          objectives: [
            "Énoncer et appliquer les 3 lois de Mendel (Uniformité de F1, Ségrégation indépendante/pureté des gamètes, Indépendance des couples d'allèles)",
            "Identifier les proportions classiques : Monohybridisme dominance ($3/4, 1/4$), Test-cross ($1/2, 1/2$), Codominance ($1/4, 1/2, 1/4$), Gène létal ($2/3, 1/3$)",
            "Dihybridisme avec gènes indépendants : F2 = $9/16, 3/16, 3/16, 1/16$ et Test-cross = $1/4, 1/4, 1/4, 1/4$",
            "Dihybridisme avec gènes liés (Linkage de Morgan) : linkage absolu ($3/4, 1/4$ en F2, $1/2, 1/2$ en test-cross) vs linkage partiel avec crossing-over (% recombinés < 50%)",
            "Établir une carte factorielle : 1% de recombinaison = 1 centimorgan (cmg)",
          ],
          keyDefinitions: {
            "Loi d'uniformité de F1 (1ère loi de Mendel)": "Le croisement de deux lignées pures homozygotes donne une génération F1 100% homogène.",
            "Loi de disjonction (2ème loi de Mendel)": "Lors de la méiose, les deux allèles d'un même gène se séparent dans des gamètes différents ; les gamètes sont toujours purs.",
            "Loi d'indépendance des caractères (3ème loi de Mendel)": "La ségrégation des allèles d'un gène se fait indépendamment de celle des allèles d'un autre gène (valable pour gènes non liés).",
            "Test-cross (Croisement-test)": "Croisement d'un individu de génotype inconnu (phénotype dominant) avec un individu homozygote récessif, révélant directement la proportion des gamètes formés.",
            "Linkage absolu": "Gènes situés sur le même chromosome sans recombinaison (pas de crossing-over), transmis en bloc.",
            "Carte factorielle": "Représentation linéaire de la position relative des gènes sur un chromosome, graduée en centimorgans (cmg).",
          },
          experimentsAndProtocols: [
            {
              name: "Expériences de Thomas Hunt Morgan sur la drosophile (1910)",
              protocol: "Test-cross femelle F1 corps gris/ailes longues $[b^+ vg^+]$ x mâle double récessif $[b vg]$.",
              observation: "4 phénotypes : $41,5\\% [b^+ vg^+] + 41,5\\% [b vg] + 8,5\\% [b^+ vg] + 8,5\\% [b vg^+]$.",
              interpretation: "Phénotypes parentaux majoritaires ($83\\%$) et recombinés minoritaires ($17\\%$). Les gènes sont portés par le même chromosome et ont subi un crossing-over chez la femelle à hauteur de $17\\%$.",
              conclusion: "Les gènes sont liés (linkage partiel) et distants de $17\\text{ cmg}$.",
            },
          ],
          commonMistakesToAvoid: [
            "Chez la drosophile, le mâle présente un linkage TOUJOURS ABSOLU (aucun crossing-over chez le mâle drosophile, uniquement chez la femelle).",
          ],
        },
      ],
    },
    {
      id: "theme9",
      themeNumber: 9,
      partTitle: "Quatrième partie : Hérédité",
      title: "Hérédité humaine et anomalies chromosomiques",
      lessons: [
        {
          lessonNumber: 20,
          title: "Génétique humaine, Pedigrees et Caryotypes anormaux",
          objectives: [
            "Analyser un arbre généalogique (pedigree) pour déterminer le mode de transmission : autosomique récessif (albinisme, drépanocytose), autosomique dominant (Huntington), récessif lié à X (daltonisme, hémophilie, myopathie de Duchenne), dominant lié à X (rachitisme vitamino-résistant)",
            "Déterminer les génotypes et calculer des probabilités génétiques pour le conseil génétique",
            "Diagnostiquer les anomalies chromosomiques de nombre (Trisomie 21 / Down $2n+1=47$, Klinefelter XXY, Turner X0 $2n-1=45$, XYY) et de structure (délétion Cri du chat, translocations)",
          ],
          keyDefinitions: {
            "Autosomique récessif": "Maladie s'exprimant uniquement à l'état homozygote, touchant indifféremment garçons et filles, avec des sauts de générations possibles chez des parents sains hétérozygotes porteurs.",
            "Récessif lié à X": "Maladie transmise par le chromosome X, touchant quasi exclusivement les garçons ($X^m Y$), transmise par les mères conductrices ($X^N X^m$) ; un père malade ne transmet jamais la tare à ses fils.",
            "Caryotype": "Représentation photographique et ordonnée de l'ensemble des chromosomes d'une cellule bloquée en métaphase.",
            "Non-disjonction méiotique": "Accident lors de l'anaphase I ou II de la méiose conduisant à des gamètes anormaux avec $n+1$ ou $n-1$ chromosomes, source de trisomies ou monosomies.",
          },
          experimentsAndProtocols: [
            {
              name: "Analyse génétique du daltonisme sur arbre généalogique",
              protocol: "Étude de la descendance d'une mère conductrice et d'un père sain.",
              observation: "50% des fils sont daltoniens ($X^d Y$), 50% des filles sont conductrices saines ($X^N X^d$), aucune fille n'est malade.",
              interpretation: "L'allèle muté $d$ est récessif et localisé sur la partie spécifique du chromosome X.",
              conclusion: "Hérédité gonosomique récessive liée à X.",
            },
          ],
          commonMistakesToAvoid: [
            "Pour un gène lié au chromosome X, les hommes n'ont qu'un seul allèle ($X^A Y$ ou $X^a Y$) et ne peuvent donc JAMAIS être qualifiés d'hétérozygotes (ils sont hémizygotes).",
          ],
        },
      ],
    },
    // PARTIE 6 : IMMUNOLOGIE
    {
      id: "theme10",
      themeNumber: 10,
      partTitle: "Quatrième partie : Intégrité de l'organisme",
      title: "Immunologie : Système immunitaire et défenses de l'organisme",
      lessons: [
        {
          lessonNumber: 21,
          title: "Le système immunitaire, le Soi et le Non-Soi",
          objectives: [
            "Définir le Soi biologique (CMH / HLA de classe I sur toutes cellules nucléées, HLA de classe II sur cellules immunitaires)",
            "Identifier les marqueurs des groupes sanguins ABO et facteur Rhésus",
            "Classer les organes lymphoïdes primaires (moelle osseuse, thymus) et secondaires (ganglions, rate, amygdales)",
            "Identifier les cellules immunitaires (phagocytes, LB, LT4, LT8, NK, mastocytes)",
          ],
          keyDefinitions: {
            "Soi biologique": "Ensemble des molécules propres à un individu résultant de l'expression de son génome (marqué par les glycoprotéines du CMH/HLA).",
            "Non-Soi (Antigène)": "Toute substance ou particule étrangère à l'organisme capable de déclencher une réponse immunitaire spécifique.",
            "Épitope (Déterminant antigénique)": "Motif moléculaire spécifique à la surface de l'antigène reconnu par les récepteurs immunitaires (BCR, TCR ou anticorps).",
            "Moelle osseuse": "Organe lymphoïde primaire, lieu de naissance de toutes les cellules sanguines et de maturation des lymphocytes B.",
            "Thymus": "Organe lymphoïde primaire où les lymphocytes T acquièrent leur immunocompétence et subissent la sélection thymique.",
          },
          experimentsAndProtocols: [
            {
              name: "Expériences de greffes de peau chez la souris",
              protocol: "Autogreffe vs Allogreffe vs Xénogreffe.",
              observation: "Autogreffe tolérée ; allogreffe rejetée au 10e-12e jour ; seconde allogreffe rejetée plus rapidement (rejet accéléré en 5 jours).",
              interpretation: "Le système immunitaire reconnaît les marqueurs CMH non compatibles et développe une mémoire immunitaire.",
              conclusion: "Le rejet de greffe est une réponse immunitaire spécifique à médiation cellulaire.",
            },
          ],
          commonMistakesToAvoid: [
            "Les lymphocytes B mûrissent dans la moelle osseuse (Bone marrow) ; les lymphocytes T naissent dans la moelle mais mûrissent dans le THYMUS.",
          ],
        },
        {
          lessonNumber: 22,
          title: "La réponse immunitaire non spécifique et spécifique",
          objectives: [
            "Décrire les étapes de la réaction inflammatoire (vasodilatation, diapédèse des phagocytes, chimiotactisme) et la phagocytose (adhésion, ingestion, digestion, exocytose)",
            "Détailler les 4 phases de la réponse spécifique : Induction (CPA, double reconnaissance HLA-antigène), Amplification clonale (interleukines sécrétées par LT4 helper), Différenciation (LB $\\to$ plasmocytes, LT8 $\\to$ LTc), Phase effectrice (anticorps/complexe immun vs perforines/lyse cellulaire)",
          ],
          keyDefinitions: {
            "Phagocytose": "Processus non spécifique d'ingestion et de digestion des corps étrangers par les granulocytes et macrophages.",
            "Réponse à médiation humorale (RIMH)": "Voie spécifique dirigée contre les antigènes extracellulaires, caractérisée par la production d'anticorps circulants par les plasmocytes.",
            "Réponse à médiation cellulaire (RIMC)": "Voie spécifique dirigée contre les cellules infectées ou tumorales, exécutée par les LT cytotoxiques libérant de la perforine et des granzymes.",
            "Lymphocyte T4 (Auxiliaire / Helper)": "Pivot central de l'immunité adaptative qui, après activation par les CPA, sécrète les interleukines indispensables à l'expansion clonale de tous les lymphocytes.",
          },
          experimentsAndProtocols: [
            {
              name: "Expérience de transfert d'immunité (Sérum vs Cellules)",
              protocol: "Transfert de sérum d'un animal immunisé contre le tétanos vs transfert de lymphocytes d'un animal immunisé contre la tuberculose (BCG).",
              observation: "Le sérum protège contre la toxine tétanique (voie humorale) mais pas contre le bacille de Koch ; les lymphocytes protègent contre la tuberculose (voie cellulaire).",
              interpretation: "L'immunité antitétanique repose sur des molécules circulantes (anticorps), alors que l'immunité antituberculeuse repose sur des cellules effectrices (LT).",
              conclusion: "Dualité fonctionnelle des réponses immunitaires spécifiques (RIMH et RIMC).",
            },
          ],
          commonMistakesToAvoid: [
            "Les anticorps ne détruisent pas directement les bactéries : ils neutralisent les antigènes en formant des complexes immuns ensuite éliminés par phagocytose ou lyse par le complément.",
          ],
        },
        {
          lessonNumber: 23,
          title: "Dysfonctionnements immunitaires et aides (SIDA et Vaccins)",
          objectives: [
            "Décrire le cycle du VIH (rétrovirus à ARN, gp120 se fixant sur le récepteur CD4 des LT4, transcriptase inverse, intégration, bourgeonnement)",
            "Analyser l'évolution de la maladie (primo-infection, phase asymptomatique, phase SIDA déclaré avec chute des LT4 < 200/mm³ et maladies opportunistes)",
            "Distinguer la vaccination (active, préventive, différée, durable par cellules mémoires) de la sérothérapie (passive, curative, immédiate, éphémère)",
          ],
          keyDefinitions: {
            "VIH": "Virus de l'Immunodéficience Humaine, rétrovirus ciblant préférentiellement les lymphocytes T4 porteurs du marqueur CD4.",
            "Transcriptase inverse": "Enzyme virale retro-transcrivant l'ARN viral en ADN proviral double brin intégré au génome de la cellule hôte.",
            "Vaccination": "Immunisation active consistant à introduire un antigène atténué ou inactivé pour créer un pool de lymphocytes mémoires à longue durée de vie.",
            "Sérothérapie": "Immunisation passive d'urgence par injection d'anticorps préformés offrant une protection immédiate mais de courte durée.",
          },
          experimentsAndProtocols: [
            {
              name: "Courbe cinétique de l'infection par le VIH",
              protocol: "Suivi temporel de la charge virale (ARN viral) et du taux de lymphocytes T4 CD4+.",
              observation: "Chute brutale initiale des T4 suivie d'une phase asymptomatique de plusieurs années où les T4 diminuent progressivement jusqu'à l'effondrement (< 200/mm³) et l'explosion de la charge virale.",
              interpretation: "La destruction progressive des LT4 détruit la coordination centrale du système immunitaire.",
              conclusion: "Le SIDA est une immunodéficience acquise conduisant aux infections opportunistes mortelles.",
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre vaccin (stimule activement l'organisme) et sérum (apporte passivement des anticorps sans créer de mémoire).",
          ],
        },
      ],
    },
    // PARTIE 7 : HOMÉOSTASIE & GLYCÉMIE
    {
      id: "theme11",
      themeNumber: 11,
      partTitle: "Quatrième partie : Intégrité de l'organisme",
      title: "Le milieu intérieur et son homéostasie",
      lessons: [
        {
          lessonNumber: 24,
          title: "Composition et rôle du milieu intérieur",
          objectives: [
            "Définir le milieu intérieur : compartiment extracellulaire liquide (plasma sanguin, lymphe interstitielle et lymphe canalisée)",
            "Comparer les compositions du plasma et de la lymphe (identiques sauf la richesse en protéines du plasma)",
            "Expliquer le rôle d'intermédiaire d'échange obligatoire entre les cellules et le milieu extérieur",
          ],
          keyDefinitions: {
            "Milieu intérieur": "Ensemble des liquides extracellulaires (plasma et lymphe) dans lesquels baignent toutes les cellules de l'organisme.",
            "Lymphe interstitielle": "Liquide issu de la filtration du plasma à travers les parois capillaires baignant directement les cellules.",
            "Sérum": "Plasma sanguin débarrassé du fibrinogène après coagulation.",
          },
          experimentsAndProtocols: [
            {
              name: "Sédimentation et analyse chimique du sang",
              protocol: "Centrifugation du sang avec anticoagulant vs coagulation spontanée.",
              observation: "Séparation en 3 phases : plasma (55%), globules blancs/plaquettes (1%), culot d'hématies (44%).",
              interpretation: "Le plasma transporte solutés, gaz, nutriments et protéines de coagulation.",
              conclusion: "Le sang est un tissu conjonctif fluide circulant.",
            },
          ],
          commonMistakesToAvoid: [
            "Le sérum = plasma - fibrinogène.",
          ],
        },
        {
          lessonNumber: 25,
          title: "Régulation de la constance du milieu intérieur (pH et Osmolarité)",
          objectives: [
            "Définir l'homéostasie (Claude Bernard et Cannon)",
            "Expliquer la régulation du pH sanguin (7,40) par les systèmes tampons ($H_2CO_3 / HCO_3^-$), la ventilation pulmonaire ($CO_2$) et l'excrétion rénale ($H^+$)",
            "Détailler le fonctionnement du néphron : filtration glomérulaire (urine primitive), réabsorption tubulaire active et réabsorption d'eau régulée par l'ADH et l'aldostérone",
          ],
          keyDefinitions: {
            "Homéostasie": "Capacité d'un organisme à maintenir la constance relative de ses paramètres physico-chimiques internes malgré les variations extérieures.",
            "Néphron": "Unité fonctionnelle et structurale du rein assurant l'épuration sanguine et l'élaboration de l'urine.",
            "Filtration glomérulaire": "Passage passif de l'eau et des micromolécules du sang vers la capsule de Bowman (urine primitive = plasma sans protéines).",
            "ADH (Vasopressine)": "Neurohormone hypothalamique libérée par la posthypophyse augmentant la réabsorption d'eau dans les tubes collecteurs rénaux, concentrant les urines et réduisant la diurèse.",
          },
          experimentsAndProtocols: [
            {
              name: "Expérience de surcharge hydrique et d'injection d'ADH",
              protocol: "Ingestion massive d'eau vs injection d'extrait posthypophysaire.",
              observation: "La surcharge hydrique provoque une polyurie diluée ; l'injection d'ADH stoppe la diurèse et concentre l'urine.",
              interpretation: "L'ADH ajuste la réabsorption d'eau pour préserver l'osmolarité plasmatique.",
              conclusion: "Boucle de rétroaction négative contrôlant la balance hydrominérale.",
            },
          ],
          commonMistakesToAvoid: [
            "Dans l'urine d'un sujet sain, il n'y a JAMAIS ni protéines ni glucose (glucosurie nulle car réabsorbé à 100% dans le tube proximal).",
          ],
        },
      ],
    },
    {
      id: "theme12",
      themeNumber: 12,
      partTitle: "Quatrième partie : Intégrité de l'organisme",
      title: "La régulation de la glycémie",
      lessons: [
        {
          lessonNumber: 26,
          title: "Régulation hormonale et nerveuse de la glycémie",
          objectives: [
            "Définir la valeur normale de la glycémie (1,0 g/L soit 5,5 mmol/L)",
            "Analyser l'expérience historique du foie lavé de Claude Bernard (1855) démontrant le rôle du foie comme organe de stockage (glycogénogenèse) et de libération (glycogénolyse)",
            "Détailler le rôle du pancréas endocrine (îlots de Langerhans) : cellules $\\beta \\to$ insuline (seule hormone hypoglycémiante), cellules $\\alpha \\to$ glucagon (hyperglycémiant)",
            "Identifier les autres hormones hyperglycémiantes (adrénaline, cortisol, hormone de croissance GH, T3/T4)",
            "Distinguer le diabète de type 1 (juvénile, insulinodépendant, destruction auto-immune des cellules $\\beta$) du diabète de type 2 (adulte, non insulinodépendant, insulinorésistance)",
          ],
          keyDefinitions: {
            "Glycémie": "Concentration de glucose dans le plasma sanguin, régulée autour de 1,0 g/L (0,8 à 1,2 g/L).",
            "Glycogénogenèse": "Polymérisation du glucose en glycogène dans les cellules hépatiques et musculaires sous l'action de l'insuline.",
            "Glycogénolyse": "Hydrolyse du glycogène hépatique en glucose libéré dans le sang sous l'action du glucagon et de l'adrénaline.",
            "Néoglucogenèse": "Synthèse hépatique de nouveau glucose à partir de précurseurs non glucidiques (acides aminés, glycérol, lactate) stimulée par le glucagon et le cortisol.",
            "Insuline": "Hormone peptidique hypoglycémiante sécrétée par les cellules $\\beta$ des îlots de Langerhans stimulant l'entrée et le stockage du glucose dans le foie, les muscles et le tissu adipeux.",
          },
          experimentsAndProtocols: [
            {
              name: "Expérience du foie lavé de Claude Bernard (1855)",
              protocol: "Lavage continu d'un foie frais isolé par la veine porte jusqu'à disparition complète du glucose dans le perfusât, puis repos de 24h à température ambiante et nouveau lavage.",
              observation: "Le second perfusât contient à nouveau une grande quantité de glucose.",
              interpretation: "Le foie renferme une substance insoluble de réserve (le glycogène) qui s'hydrolyse spontanément en glucose.",
              conclusion: "Le foie est l'organe central régulateur capable de stocker et de libérer le glucose.",
            },
          ],
          commonMistakesToAvoid: [
            "Le muscle stocke du glycogène mais NE PEUT PAS libérer de glucose dans le sang car il est dépourvu de l'enzyme glucose-6-phosphatase (seul le foie libère du glucose sanguin).",
          ],
        },
      ],
    },
  ],
};
