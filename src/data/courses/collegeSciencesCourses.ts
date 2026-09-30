import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_SCIENCES_COURSES: OfficialIvorianCourse[] = [
  // ==========================================
  // 5ÈME - PHYSIQUE-CHIMIE (DPFC / MENA)
  // ==========================================
  {
    id: 'pc-5e-electricite-circuits-melanges',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    chapter: 'Électricité : Adaptation, Circuit série/dérivation & Propriétés de la matière',
    lessonTitle: 'Adaptation générateur-récepteur, intensité, tension et états de la matière',
    objectifs: [
      'Distinguer un montage en série d\'un montage en dérivation',
      'Mesurer et calculer l\'intensité (ampèremètre) et la tension (voltmètre)',
      'Expliquer l\'adaptation d\'une lampe à son générateur (tension nominale)',
      'Décrire la pression atmosphérique et les changements d\'état de l\'eau'
    ],
    fullCourseContent: `1. Les montages électriques fondamentaux :
- Circuit en série : Les dipôles sont branchés les uns à la suite des autres en formant une seule boucle. Si une lampe grille ou est dévissée, le circuit est ouvert et toutes les autres lampes s'éteignent.
- Circuit en dérivation (ou parallèle) : Les dipôles sont branchés aux bornes les uns des autres, formant plusieurs boucles indépendantes. Si une lampe s'éteint, les autres continuent de briller avec le même éclat. Dans les habitations en Côte d'Ivoire (CIE), toutes les installations sont branchées en dérivation.

2. Grandeurs électriques : Tension et Intensité :
- La Tension électrique (U) : Exprimée en Volts (V), se mesure avec un voltmètre branché en dérivation aux bornes du dipôle.
- L'Intensité du courant (I) : Exprimée en Ampères (A), correspond au débit d'électrons et se mesure avec un ampèremètre branché en série dans le circuit.
- Lois du circuit en série :
  * Loi d'unicité de l'intensité : I_principale = I1 = I2 = ...
  * Loi d'additivité des tensions : U_générateur = U1 + U2 + ...
- Lois du circuit en dérivation :
  * Loi d'additivité des intensités (Loi des nœuds) : I_principale = I1 + I2 + ...
  * Loi d'unicité de la tension : U_générateur = U1 = U2 = ...

3. Chimie et Propriétés physiques de la matière :
- Pression atmosphérique : La pression de l'air au niveau de la mer (ex: Abidjan) est d'environ 1 013 hPa (ou 1 atm). Elle se mesure avec un baromètre.
- Combustion du carbone et du soufre :
  * Carbone + Dioxygène -> Dioxyde de carbone (C + O2 -> CO2). Le CO2 trouble l'eau de chaux.
  * Soufre + Dioxygène -> Dioxyde de soufre (S + O2 -> SO2, gaz piquant).`,
    definitions: [
      {
        term: 'Tension nominale',
        definition: 'Tension électrique inscrite sur un récepteur pour laquelle il fonctionne normalement sans sous-tension ni surtension.'
      },
      {
        term: 'Nœud de circuit',
        definition: 'Point de jonction où sont connectés au moins trois conducteurs électriques.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Loi des nœuds (Dérivation)',
        statement: 'La somme des intensités des courants qui arrivent à un nœud est égale à la somme des intensités des courants qui en partent.'
      },
      {
        name: 'Loi d\'additivité des tensions (Série)',
        statement: 'Dans un circuit en série, la tension aux bornes du générateur est égale à la somme des tensions aux bornes des différents récepteurs.'
      }
    ],
    formulas: [
      {
        name: 'Loi d\'additivité des tensions en série',
        formula: 'Ug = U1 + U2',
        explanation: 'La tension globale se partage entre les récepteurs branchés en série.',
        unitOrCondition: 'Tension en Volts (V)'
      },
      {
        name: 'Loi des intensités en dérivation',
        formula: 'Itotal = I1 + I2',
        explanation: 'Le courant principal se sépare dans les branches dérivées.',
        unitOrCondition: 'Intensité en Ampères (A)'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Brancher un ampèremètre et un voltmètre',
        procedure: '1. Brancher l\'ampèremètre EN SÉRIE dans la boucle (le courant entre par la borne A ou mA et sort par COM).\n2. Brancher le voltmètre EN DÉRIVATION aux bornes du dipôle (borne V et COM).\n3. Toujours débuter sur le plus grand calibre pour protéger l\'appareil.',
        tip: 'Le voltmètre ne coupe jamais le circuit ; l\'ampèremètre nécessite d\'ouvrir la boucle.'
      }
    ],
    examples: [
      {
        statement: 'Dans un circuit en série alimenté par une pile de 9 V, on branche une lampe L1 (U1 = 3,5 V) et une lampe L2. Calcule la tension U2 aux bornes de L2.',
        solution: 'D\'après la loi d\'additivité des tensions en série : Ug = U1 + U2.\nDonc U2 = Ug - U1 = 9 V - 3,5 V = 5,5 V.'
      }
    ],
    exercises: [
      {
        question: 'Une pile de 4,5 V alimente deux lampes identiques branchées en dérivation. Quelle est la tension aux bornes de chaque lampe ? Que se passe-t-il si l\'on dévisse l\'une des lampes ?',
        correction: '1. D\'après la loi d\'unicité de la tension en dérivation : U1 = U2 = Ug = 4,5 V. Chaque lampe reçoit 4,5 V.\n2. Si l\'on dévisse une lampe, l\'autre reste allumée car elle est située sur une boucle indépendante.'
      }
    ],
    evaluationSituation: {
      context: 'À l\'internat du Lycée de Daloa, un élève constate que dans sa chambre, lorsqu\'une ampoule grille, l\'autre ampoule reste allumée. En revanche, sur sa guirlande de fête, dès qu\'une ampoule est retirée, toute la guirlande s\'éteint.',
      instructions: [
        '1. Identifie le type de montage électrique de la chambre et celui de la guirlande.',
        '2. Justifie pourquoi les maisons ivoiriennes utilisent toutes le montage en dérivation.'
      ],
      solutionGuide: '1. La chambre est en dérivation (boucles indépendantes, la panne d\'une lampe n\'affecte pas l\'autre). La guirlande est en série (boucle unique, l\'ouverture du circuit éteint tous les dipôles).\n2. Les habitations utilisent le montage en dérivation pour : (a) assurer l\'indépendance des appareils, et (b) garantir que chaque appareil reçoit la pleine tension du secteur (220 V - 230 V).'
    },
    examTraps: [
      'Brancher un ampèremètre en dérivation (provoque un court-circuit dangereux).',
      'Penser que le courant s\'affaiblit en traversant une lampe dans un circuit en série (l\'intensité est identique en tout point).'
    ],
    quickMemo: 'Série : I identique partout, U s\'additionne. Dérivation : U identique partout, I s\'additionne (loi des nœuds).',
    keywords: ['électricité 5e', 'série', 'dérivation', 'voltmètre', 'ampèremètre', 'tension', 'intensité', 'combustion']
  },

  // ==========================================
  // 4ÈME - PHYSIQUE-CHIMIE (DPFC / MENA)
  // ==========================================
  {
    id: 'pc-4e-optique-courant-alternatif-ions',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '4e',
    levelLabel: '4ème (Quatrième)',
    chapter: 'Optique, Tension alternative sinusoïdale & Chimie des ions',
    lessonTitle: 'Propagation rectiligne de la lumière, éclipses, tension alternative et atomes/ions',
    objectifs: [
      'Énoncer le principe de propagation rectiligne de la lumière et expliquer les éclipses (Lune et Soleil)',
      'Définir la tension alternative sinusoïdale, la période T, la fréquence f et la tension maximale Umax',
      'Distinguer atome, cation et anion à partir du nombre de protons et d\'électrons',
      'Comprendre le traitement et la potabilité de l\'eau en Côte d\'Ivoire (SODECI)'
    ],
    fullCourseContent: `1. Optique et Propagation de la lumière :
- Principe : Dans un milieu transparent et homogène (air, vide, eau pure), la lumière se propage en ligne droite.
- Modélisation : Un rayon lumineux est représenté par une droite munie d'une flèche indiquant le sens de propagation.
- Éclipse de Soleil : La Lune se trouve entre la Terre et le Soleil. La zone d'ombre portée de la Lune masque le Soleil pour certains observateurs terrestres.
- Éclipse de Lune : La Terre se trouve entre le Soleil et la Lune. La Lune traverse le cône d'ombre de la Terre.

2. Courant et Tension alternatifs sinusoïdaux :
- Production : Une tension alternative est produite par la rotation d'un aimant au voisinage d'une bobine de fil de cuivre (phénomène d'induction électromagnétique, principe de l'alternateur de vélo ou du barrage d'Ayamé/Soubré).
- Caractéristiques oscilloscopiques :
  * Tension maximale Umax = Sensibilité verticale (Sv) × Déviation verticale (Y).
  * Tension efficace Ueff mesurée au voltmètre : Umax = Ueff × √2 (soit Ueff ≈ Umax / 1,414).
  * Période T : Durée d'un motif élémentaire en secondes (s). T = Sensibilité horizontale (Sh) × Nombre de divisions (X).
  * Fréquence f : Nombre de périodes par seconde en Hertz (Hz) : f = 1 / T. En Côte d'Ivoire, le courant du secteur CIE a une fréquence de 50 Hz et une tension efficace de 220 V.

3. Chimie : Atomes et Ions :
- Un atome est électriquement neutre : nombre de protons (+) du noyau = nombre d'électrons (-).
- Un ion est un atome ou groupe d'atomes ayant gagné ou perdu un ou plusieurs électrons :
  * Cation (ion positif) : a perdu des électrons (ex : Cu2+, Fe2+, Fe3+, Na+, Al3+).
  * Anion (ion négatif) : a gagné des électrons (ex : Cl-, SO4^2-, NO3-).`,
    definitions: [
      {
        term: 'Tension alternative sinusoïdale',
        definition: 'Tension variable périodique qui change continuellement de valeur et alternativement de sens en suivant une onde sinusoïdale.'
      },
      {
        term: 'Ion',
        definition: 'Espèce chimique chargée électriquement, issue de la perte (cation) ou du gain (anion) d\'électrons par un atome.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Principe de propagation rectiligne',
        statement: 'Dans tout milieu transparent, isotrope et homogène, la lumière se propage en ligne droite.'
      },
      {
        name: 'Relation entre période et fréquence',
        statement: 'f = 1 / T (avec f en Hertz et T en secondes).'
      }
    ],
    formulas: [
      {
        name: 'Tension maximale',
        formula: 'Umax = Sv × Y',
        explanation: 'Sv en V/div et Y en divisions sur l\'axe vertical.',
        unitOrCondition: 'Volts (V)'
      },
      {
        name: 'Période temporelle',
        formula: 'T = Sh × X',
        explanation: 'Sh en ms/div ou s/div et X en divisions sur l\'axe horizontal.',
        unitOrCondition: 'Secondes (s)'
      },
      {
        name: 'Relation tension efficace et maximale',
        formula: 'Umax = Ueff × 1,414',
        explanation: 'Valable exclusivement pour une tension alternative sinusoïdale.',
        unitOrCondition: 'Volts (V)'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Exploiter un oscillogramme',
        procedure: '1. Repérer la crête pour mesurer Y en divisions, puis calculer Umax = Sv × Y.\n2. Repérer un motif complet pour mesurer X en divisions, puis calculer T = Sh × X (convertir ms en s en divisant par 1000).\n3. Calculer la fréquence f = 1 / T en Hertz (Hz).',
        tip: 'Faire attention à l\'unité de la sensibilité horizontale : ms = 10^(-3) s.'
      }
    ],
    examples: [
      {
        statement: 'Un oscillogramme montre un motif complet sur X = 4 divisions avec Sh = 5 ms/div. Calcule la période T et la fréquence f.',
        solution: 'T = Sh × X = 5 ms/div × 4 div = 20 ms = 0,02 s.\nFréquence f = 1 / T = 1 / 0,02 = 50 Hz.'
      }
    ],
    exercises: [
      {
        question: 'L\'atome de cuivre possède 29 protons. L\'ion cuivre II (Cu2+) se forme lorsque cet atome perd 2 électrons. Détermine le nombre de protons et le nombre d\'électrons de cet ion Cu2+.',
        correction: '1. Nombre de protons dans le noyau de Cu2+ : reste inchangé = 29 protons (charge +29e).\n2. Nombre d\'électrons : 29 - 2 = 27 électrons (charge -27e).\n3. Charge globale : +29e - 27e = +2e, ce qui justifie le symbole Cu²⁺.'
      }
    ],
    evaluationSituation: {
      context: 'Au laboratoire du collège d\'Agboville, un élève mesure la tension délivrée par une prise secteur à l\'aide d\'un voltmètre et lit Ueff = 220 V. Il souhaite connaître la tension de crête (Umax) pour calibrer son oscilloscope sans l\'endommager.',
      instructions: [
        '1. Rappelle la formule liant Umax et Ueff pour une tension sinusoïdale.',
        '2. Calcule la valeur de Umax.',
        '3. Si Sv = 100 V/div, calcule la déviation verticale Y en divisions.'
      ],
      solutionGuide: '1. Umax = Ueff × √2 ≈ Ueff × 1,414.\n2. Umax = 220 × 1,414 ≈ 311,08 V (environ 311 V).\n3. Y = Umax / Sv = 311 / 100 = 3,11 divisions.'
    },
    examTraps: [
      'Oublier de convertir les millisecondes (ms) en secondes (s) lors du calcul de la fréquence f = 1/T.',
      'Croire que les protons changent lorsqu\'un atome devient un ion (seuls les ÉLECTRONS sont gagnés ou perdus).'
    ],
    quickMemo: 'Umax = Sv × Y. T = Sh × X. f = 1/T. Umax = Ueff × √2. Cation = perte d\'électrons (+), Anion = gain d\'électrons (-).',
    keywords: ['optique', 'éclipse', 'tension sinusoïdale', 'période', 'fréquence', 'ions', 'cuivre', '4e']
  },

  // ==========================================
  // 3ÈME / BEPC - PHYSIQUE-CHIMIE (DPFC / MENA)
  // ==========================================
  {
    id: 'pc-3e-poids-masse-solutions-acides-bases-hydrocarbures',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (BEPC)',
    level: '3e',
    levelLabel: '3ème / BEPC',
    chapter: 'Mécanique (Poids & Masse), Solutions aqueuses (pH, Acides/Bases) & Hydrocarbures',
    lessonTitle: 'Poids et masse, force, pH des solutions aqueuses, ions et alcanes',
    objectifs: [
      'Distinguer rigoureusement le poids (P en N) et la masse (m en kg) et appliquer P = m × g',
      'Représenter une force par un vecteur (point d\'application, direction, sens, intensité)',
      'Déterminer le pH d\'une solution aqueuse, classer acide / neutre / basique et réaliser une dilution',
      'Écrire les équations-bilans de combustion complète et incomplète des alcanes (méthane, butane)'
    ],
    fullCourseContent: `1. Mécanique : Poids et Masse d'un corps :
- La Masse (m) : Quantité de matière d'un objet, invariable quel que soit le lieu, mesurée en kilogrammes (kg) avec une balance.
- Le Poids (P) : Force d'attraction gravitationnelle exercée par la Terre sur l'objet, variable selon le lieu et l'altitude, mesurée en Newtons (N) avec un dynamomètre.
- Relation fondamentale : P = m × g
  (En Côte d'Ivoire, l'intensité de la pesanteur g vaut environ 9,8 N/kg ou 10 N/kg selon l'énoncé).
- Caractéristiques du vecteur poids P⃗ :
  * Point d'application : Centre de gravité G de l'objet.
  * Direction : La verticale du lieu.
  * Sens : Vers le bas (vers le centre de la Terre).
  * Intensité : P = m × g (en N).

2. Les Solutions Aqueuses : pH, Acides et Bases :
- L'échelle de pH s'étend de 0 à 14 à 25°C :
  * pH < 7 : Solution acide (ions H+ majoritaires, ex : acide chlorhydrique HCl).
  * pH = 7 : Solution neutre (autant de H+ que de OH-, ex : eau pure).
  * pH > 7 : Solution basique (ions OH- majoritaires, ex : soude NaOH).
- Règle de dilution :
  * Lorsqu'on dilue un acide avec de l'eau, son pH augmente et se rapproche de 7 sans jamais le dépasser.
  * Lorsqu'on dilue une base avec de l'eau, son pH diminue et se rapproche de 7 sans jamais descendre en dessous.
  * Règle de sécurité absolue : TOUJOURS verser l'acide dans l'eau, et JAMAIS l'eau dans l'acide (risque de projection brûlante par réaction exothermique).

3. Chimie Organique : Hydrocarbures et Alcanes :
- Formule générale des alcanes : CnH2n+2.
  * n = 1 : Méthane (CH4)
  * n = 2 : Éthane (C2H6)
  * n = 3 : Propane (C3H8)
  * n = 4 : Butane (C4H10)
- Combustion complète du butane (en excès de dioxygène O2) :
  2 C4H10 + 13 O2 -> 8 CO2 + 10 H2O (flamme bleue vive).
- Combustion incomplète (en défaut de dioxygène O2) :
  Produit du carbone (suie noire C) et du monoxyde de carbone (CO), gaz incolore, inodore et mortel.`,
    definitions: [
      {
        term: 'Poids d\'un corps',
        definition: 'Force à distance exercée par la Terre sur un corps placé dans son champ de gravitation (P en Newtons).'
      },
      {
        term: 'pH (Potentiel Hydrogène)',
        definition: 'Grandeur sans unité mesurant l\'acidité ou la basicité d\'une solution aqueuse en fonction de la concentration en ions hydrogène H+.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Relation Poids-Masse',
        statement: 'P = m × g avec P en Newtons (N), m en kilogrammes (kg) et g en N/kg.'
      },
      {
        name: 'Sécurité de dilution acide',
        statement: 'On verse toujours l\'acide concentré dans l\'eau, goutte à goutte en agitant, jamais l\'inverse.'
      }
    ],
    formulas: [
      {
        name: 'Poids d\'un corps',
        formula: 'P = m × g',
        explanation: 'm doit impérativement être converti en kg avant d\'appliquer la formule.',
        unitOrCondition: 'P en N, m en kg, g en N/kg'
      },
      {
        name: 'Formule générale des alcanes',
        formula: 'CnH2n+2',
        explanation: 'Hydrocarbures saturés à chaîne ouverte.',
        unitOrCondition: 'n entier ≥ 1'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer le poids connaissant la masse en grammes',
        procedure: '1. Convertir la masse m en kg en divisant par 1 000 (ex : 500 g = 0,5 kg).\n2. Écrire la formule P = m × g.\n3. Remplacer par les valeurs et donner le résultat avec l\'unité Newton (N).',
        tip: 'Le piège n°1 au BEPC est d\'oublier de convertir les grammes en kilogrammes.'
      },
      {
        stepNumber: 2,
        title: 'Équilibrer une équation de combustion d\'alcane',
        procedure: '1. Équilibrer le carbone (C).\n2. Équilibrer l\'hydrogène (H).\n3. Équilibrer l\'oxygène (O) en comptant les atomes du côté des produits.\n4. Si le coefficient de O2 est une fraction (ex : 13/2), multiplier toute l\'équation par 2.',
        tip: 'Vérifier la conservation de chaque élément chimique à la fin.'
      }
    ],
    examples: [
      {
        statement: 'Un paquet de sucre pèse m = 2 500 g à Abidjan où g = 9,8 N/kg. Calcule son poids P.',
        solution: 'Conversion : m = 2 500 g = 2,5 kg.\nFormule : P = m × g\nCalcul : P = 2,5 × 9,8 = 24,5 N.'
      }
    ],
    exercises: [
      {
        question: 'Une solution de détartrant a un pH = 2. On y ajoute un grand volume d\'eau distillée. Précise si la solution est acide, neutre ou basique, et comment évolue son pH.',
        correction: '1. pH = 2 < 7, donc la solution est fortement acide.\n2. Lors de la dilution par l\'eau, la concentration en ions H+ diminue : le pH augmente et se rapproche de 7 (la solution devient moins acide).'
      }
    ],
    evaluationSituation: {
      context: 'Dans une cuisine à Cocody, une bouteille de gaz butane (C4H10) de masse de gaz m = 12 kg alimente une cuisinière. Les brûleurs sont mal réglés et produisent une flamme jaune avec un dépôt noir sous les casseroles. L\'utilisateur ressent des maux de tête.',
      instructions: [
        '1. Calcule le poids du gaz butane contenu dans la bouteille (g = 10 N/kg).',
        '2. Explique la cause de la flamme jaune et du dépôt noir.',
        '3. Identifie le gaz toxique responsable des maux de tête et propose une solution technique immédiate.'
      ],
      solutionGuide: '1. Poids : P = m × g = 12 kg × 10 N/kg = 120 N.\n2. La flamme jaune et le dépôt noir indiquent une combustion incomplète du butane due à un manque de dioxygène (O2). Le dépôt noir est du carbone pur (suie).\n3. Le gaz dangereux est le monoxyde de carbone (CO), gaz asphyxiant incolore et inodore.\nSolution : Aérer immédiatement la cuisine et régler la virole d\'arrivée d\'air du brûleur pour rétablir une combustion complète à flamme bleue.'
    },
    examTraps: [
      'Garder la masse en grammes dans P = m × g (ex: 200 g × 10 = 2000 N -> FAUX, c\'est 0,2 × 10 = 2 N).',
      'Croire qu\'en diluant un acide son pH dépasse 7 (la dilution ne peut jamais transformer un acide en base).'
    ],
    quickMemo: 'P = m × g (m en kg !). pH < 7 acide, pH = 7 neutre, pH > 7 base. Butane : C4H10, combustion complète -> CO2 + H2O.',
    keywords: ['poids', 'masse', 'dynamomètre', 'pH', 'acide', 'base', 'dilution', 'butane', 'combustion', '3e', 'BEPC']
  },

  // ==========================================
  // 3ÈME / BEPC - SVT (DPFC / MENA)
  // ==========================================
  {
    id: 'svt-3e-nutrition-digestion-systeme-nerveux-immunite',
    discipline: 'svt',
    disciplineLabel: 'SVT (Sciences de la Vie et de la Terre - BEPC)',
    level: '3e',
    levelLabel: '3ème / BEPC',
    chapter: 'Digestion, Respiration, Système nerveux & Immunité humaine',
    lessonTitle: 'Digestion des aliments, absorption intestinale, réflexe médullaire et défenses immunitaires',
    objectifs: [
      'Schématiser l\'appareil digestif humain et expliquer la simplification moléculaire des aliments par les enzymes',
      'Décrire l\'absorption intestinale au niveau des villosités de l\'intestin grêle',
      'Identifier les organes du réflexe médullaire (récepteur, nerf sensitif, moelle épinière, nerf moteur, effecteur)',
      'Expliquer la phagocytose et la réponse immunitaire humorale (anticorps) et cellulaire'
    ],
    fullCourseContent: `1. La Digestion et la Simplification Moléculaire :
- Définition : La digestion est la transformation mécanique et chimique des aliments complexes en nutriments simples assimilables par l'organisme.
- Rôle des enzymes digestives :
  * Amylase salivaire : Amidon (glucide complexe) -> Maltose (sucre réducteur).
  * Pepsine (suc gastrique) : Protéines -> Peptides.
  * Lipase et bile : Lipides (graisses) -> Acides gras + Glycérol.
  * Maltase / Protéases intestinales : Nutriments finals = Glucose, Acides aminés, Acides gras.
- L'Absorption intestinale : Les nutriments passent à travers la paroi richement vascularisée de l'intestin grêle (surface augmentée par des millions de villosités intestinales) dans le sang (glucose, acides aminés, eau, sels minéraux) et dans la lymphe (acides gras).

2. Le Système Nerveux et les Mouvements Réflexes :
- Mouvement volontaire : Commandé par le cerveau (cortex cérébral moteur).
- Mouvement réflexe inné (ex : retrait de la main face à une flamme ou une épine) :
  * Centre nerveux : La moelle épinière (centre réflexe).
  * Trajet de l'arc réflexe :
    1. Récepteur sensoriel (peau) : capte le stimulus.
    2. Conducteur sensitif (nerf sensitif) : conduit l'influx nerveux centripète.
    3. Moelle épinière : analyse et transforme l'influx sensitif en influx moteur.
    4. Conducteur moteur (nerf moteur) : conduit l'influx nerveux centrifuge.
    5. Organe effecteur (muscle) : se contracte pour réaliser le mouvement de retrait.

3. L'Immunité et la Défense de l'Organisme :
- Les barrières naturelles : Peau, muqueuses, larmes, sueur, sucs acides.
- La Réaction inflammatoire rapide (immunité non spécifique) : Rougeur, chaleur, gonflement, douleur.
- La Phagocytose : Réalisée par les globules blancs (polynucléaires et macrophages) en 4 étapes : Adhésion -> Ingestion -> Digestion intracellulaire -> Rejet des déchets.
- L'Immunité spécifique :
  * Réponse humorale : Lymphocytes B produisant des anticorps spécifiques neutralisant les antigènes.
  * Réponse cellulaire : Lymphocytes T cytotoxiques (T8) détruisant directement les cellules infectées ou cancéreuses.`,
    definitions: [
      {
        term: 'Nutriment',
        definition: 'Molécule simple soluble issue de la digestion des aliments, capable de traverser la paroi intestinale pour nourrir les cellules.'
      },
      {
        term: 'Arc réflexe',
        definition: 'Trajet anatomique emprunté par l\'influx nerveux lors d\'un acte réflexe involontaire, de la détection du stimulus jusqu\'à la réponse motrice.'
      },
      {
        term: 'Antigène',
        definition: 'Toute substance étrangère à l\'organisme (bactérie, virus, toxine) capable de déclencher une réaction immunitaire spécifique.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Spécificité enzymatique',
        statement: 'Une enzyme digestive n\'agit que sur un seul type de substrat précis et dans des conditions optimales de température (37°C) et de pH.'
      },
      {
        name: 'Spécificité antigène-anticorps',
        statement: 'Un anticorps ne neutralise que l\'antigène précis qui a provoqué sa synthèse (système clé-serrure).'
      }
    ],
    formulas: [
      {
        name: 'Bilan de la digestion de l\'amidon',
        formula: 'Amidon + Eau --(Amylase 37°C)--> Maltose --(Maltase)--> Glucose',
        explanation: 'Simplification macromoléculaire progressive jusqu\'au nutriment élémentaire (glucose).',
        unitOrCondition: 'Température corporelle 37°C'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Décrire un arc réflexe lors d\'un sujet BEPC',
        procedure: 'Toujours citer dans l\'ordre chronologique : Stimulus -> Récepteur sensoriel -> Influx sensitif (nerf) -> Moelle épinière (centre intégrateur) -> Influx moteur (nerf) -> Muscle effecteur -> Réponse motrice.',
        tip: 'Faire un schéma fléché clair avec les 5 éléments clés annotés.'
      },
      {
        stepNumber: 2,
        title: 'Décrire les 4 étapes de la phagocytose',
        procedure: '1. Adhésion du phagocyte à la bactérie.\n2. Ingestion (formation de pseudopodes et d\'une vésicule).\n3. Digestion grâce aux enzymes digestives (lysosomes).\n4. Rejet des débris bactériens par exocytose.',
        tip: 'Préciser qu\'il s\'agit d\'une défense non spécifique et immédiate.'
      }
    ],
    examples: [
      {
        statement: 'Un élève touche par inadvertance une marmite brûlante et retire aussitôt la main avant même d\'avoir conscience de la douleur. Explique ce phénomène.',
        solution: 'Il s\'agit d\'un réflexe médullaire inné et involontaire. Le récepteur thermique de la peau envoie un influx sensitif via le nerf jusqu\'à la moelle épinière, qui renvoie immédiatement un influx moteur aux muscles du bras provoquant leur contraction. L\'information n\'atteint le cerveau qu\'après le retrait de la main.'
      }
    ],
    exercises: [
      {
        question: 'Cite les nutriments finaux issus de la digestion complète des protéines et des lipides, et précise leur voie d\'absorption.',
        correction: '1. Protéines -> Acides aminés (absorbés dans les vaisseaux sanguins).\n2. Lipides -> Acides gras et Glycérol (absorbés majoritairement dans les vaisseaux lymphatiques).'
      }
    ],
    evaluationSituation: {
      context: 'Lors d\'une séance d\'EPS au Lycée Municipal d\'Abobo, Bakary se blesse au pied avec un clou rouillé. Quelques heures plus tard, la plaie devient rouge, enflée, chaude et douloureuse. Le lendemain, du pus apparaît.',
      instructions: [
        '1. Nomme la réaction locale observée et ses 4 symptômes.',
        '2. Explique le mécanisme cellulaire qui se déroule au niveau de la plaie pour éliminer les bactéries.',
        '3. Indique de quoi est constitué le pus.',
        '4. Précise le vaccin et le sérum que le médecin doit administrer d\'urgence à Bakary.'
      ],
      solutionGuide: '1. Il s\'agit de la réaction inflammatoire locale aiguë. Ses 4 signes sont : rougeur, chaleur, gonflement (œdème) et douleur.\n2. Le mécanisme est la phagocytose : les globules blancs (macrophages/polynucléaires) sortent des vaisseaux par diapédèse, englobent les bactéries et les digèrent.\n3. Le pus est constitué de débris cellulaires, de bactéries mortes et de globules blancs détruits lors du combat immunitaire.\n4. Le médecin doit administrer : (a) le sérum antitétanique (apport immédiat d\'anticorps prêts à l\'emploi pour neutraliser la toxine), et (b) le vaccin antitétanique (anatoxine tétanique pour conférer une immunité active et durable).'
    },
    examTraps: [
      'Confondre vaccin (préventif, immunité active lente et durable) et sérum (curatif, immunité passive immédiate et temporaire).',
      'Oublier que la moelle épinière est le centre du mouvement réflexe, tandis que le cerveau est le centre du mouvement volontaire.'
    ],
    quickMemo: 'Digestion : Amidon -> Glucose, Protéines -> Acides aminés. Arc réflexe : Récepteur -> Nerf sensitif -> Moelle -> Nerf moteur -> Muscle. Phagocytose : Adhésion -> Ingestion -> Digestion -> Rejet.',
    keywords: ['digestion', 'enzymes', 'absorption intestinale', 'système nerveux', 'moelle épinière', 'réflexe', 'phagocytose', 'anticorps', 'vaccin', 'sérum', '3e', 'BEPC']
  }
];
