import { OfficialIvorianCourse } from '../../types';

export const LYCEE_PHYSIQUE_CHIMIE_1ERE_COURSES: OfficialIvorianCourse[] = [
  // =========================================================================
  // 1. CHIMIE ORGANIQUE : ALCANES ET CYCLANES
  // =========================================================================
  {
    id: 'pc-1ere-chim-alcanes-cyclanes',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Première C/D/E)',
    level: '1ere',
    levelLabel: '1ère C, D, E',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D',
    chapter: 'Chimie Organique - Hydrocarbures Saturés',
    lessonTitle: 'Alcanes et Cyclanes : Structures, Nomenclature et Réactions',
    objectifs: [
      'Définir un alcane, un carbone tétragonal (angle 109°28\') et un cyclane',
      'Appliquer les règles de la nomenclature officielle IUPAC aux alcanes et cyclanes (groupes sec-butyle, tert-butyle, néopentyle)',
      'Décrire les conformations moléculaires : projection de Newman (décalée/éclipsée) et conformations chaise/bateau du cyclohexane',
      'Écrire les équations-bilans des combustions, de la substitution photochimique et de la préparation au laboratoire du méthane par le carbure d\'aluminium'
    ],
    fullCourseContent: `1. Généralités et Carbone Tétragonal :
- La chimie organique est la chimie des composés du carbone.
- Les alcanes sont des hydrocarbures saturés à chaîne carbonée ouverte ne comportant que des liaisons simples de covalence C-C et C-H. Tous les atomes de carbone sont tétragonaux (géométrie tétraédrique, angle H-C-H = 109°28', longueur C-H = 109 pm, C-C = 154 pm).
- Formule générale brute des alcanes : CnH2n+2 (n ≥ 1).
- Les cyclanes (cycloalcanes) sont des hydrocarbures saturés à chaîne fermée en cycle. Formule générale : CnH2n (n ≥ 3). Exemples : cyclopropane, cyclobutane, cyclopentane, cyclohexane.

2. Règles de Nomenclature IUPAC :
- Alcanes linéaires : Méthane (CH4), Éthane (C2H6), Propane (C3H8), Butane (C4H10), Pentane (C5H12), Hexane (C6H14), Heptane (C7H16), Octane (C8H18), Nonane (C9H20), Décane (C10H22).
- Groupes alkyles (CnH2n+1-) : Remplacement de "-ane" par "-yle" (méthyle -CH3, éthyle -C2H5, propyle -CH2CH2CH3, isopropyle -CH(CH3)2).
- Alcanes ramifiés :
  1. Choisir la chaîne carbonée la plus longue (chaîne principale).
  2. Numéroter la chaîne principale de manière à attribuer les indices de position les plus petits possibles aux ramifications.
  3. Placer les noms des substituants par ordre alphabétique (sans le 'e' final) précédés de leur indice, puis le nom de l'alcane principal.
  4. Utiliser les préfixes multiplicatifs di-, tri-, tétra- sans incidence sur l'ordre alphabétique.

3. Isomérie de Chaîne :
- Des isomères de chaîne possèdent la même formule brute mais des squelettes carbonés différents.
- Exemple pour C4H10 : butane linéaire et 2-méthylpropane.
- Exemple pour C5H12 : pentane, 2-méthylbutane et 2,2-diméthylpropane.

4. Propriétés Chimiques et Synthèse au Laboratoire :
- Combustion complète : CnH2n+2 + [(3n+1)/2] O2 ⟶ n CO2 + (n+1) H2O. Très exothermique.
- Combustion incomplète (défaut de O2) : Formation de CO (toxique) et de suie de carbone C.
- Substitution photochimique (chloration du méthane) : Nécessite de la lumière diffuse (photons hν).
  * CH4 + Cl2 ⟶ CH3Cl (chlorométhane) + HCl
  * CH3Cl + Cl2 ⟶ CH2Cl2 (dichlorométhane) + HCl
  * CH2Cl2 + Cl2 ⟶ CHCl3 (trichlorométhane / chloroforme) + HCl
  * CHCl3 + Cl2 ⟶ CCl4 (tétrachlorométhane) + HCl.
- Synthèse du méthane au laboratoire :
  * Action de l'eau acidulée sur le carbure d'aluminium :
  * Al4C3 (s) + 12 H2O (l) ⟶ 4 Al(OH)3 (s) + 3 CH4 (g).
  * Dépôt blanc de Al(OH)3 et dégagement de méthane recueilli sur cuve à eau.`,
    definitions: [
      {
        term: 'Alcane',
        definition: 'Hydrocarbure saturé acyclique ne contenant que des liaisons simples C-C et C-H, de formule générale CnH2n+2.'
      },
      {
        term: 'Carbone tétragonal',
        definition: 'Atome de carbone engagé dans quatre liaisons covalentes simples orientées vers les sommets d\'un tétraèdre régulier.'
      },
      {
        term: 'Réaction photochimique',
        definition: 'Réaction chimique initiée ou accélérée par l\'énergie lumineuse (ex: chloration des alcanes en présence de lumière diffuse).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle des indices minimaux en nomenclature IUPAC',
        statement: 'La numérotation de la chaîne principale est choisie de sorte que le premier point de différence fournisse les indices de position les plus faibles.'
      },
      {
        name: 'Combustion complète des alcanes',
        statement: 'CnH2n+2 + [(3n+1)/2] O2 ⟶ n CO2 + (n+1) H2O. Le rapport molaire n(CO2)/n(H2O) vaut n/(n+1).'
      }
    ],
    formulas: [
      {
        name: 'Formule générale des alcanes',
        formula: 'CnH2n+2',
        explanation: 'Masse molaire : M = 14n + 2 g/mol.',
        unitOrCondition: 'n entier ≥ 1'
      },
      {
        name: 'Densité de vapeur par rapport à l\'air',
        formula: 'd = M / 29',
        explanation: 'Permet de déterminer la masse molaire M = 29 × d.',
        unitOrCondition: 'Dans les CNTP'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer la formule brute d\'un alcane à partir de sa combustion',
        procedure: '1. Calculer les moles de CO2 formé : n(CO2) = m(CO2) / 44.\n2. Calculer les moles d\'eau formée : n(H2O) = m(H2O) / 18.\n3. Poser le rapport stœchiométrique n(CO2) / n(H2O) = n / (n+1).\n4. Résoudre l\'équation pour trouver l\'entier n, puis déduire la formule brute CnH2n+2.',
        tip: 'Vérifier la cohérence en recalculant la masse de l\'échantillon m = 12n(CO2) + 2n(H2O).'
      }
    ],
    examples: [
      {
        statement: 'La combustion complète de 1,16 g d\'un alcane ramifié produit 3,52 g de CO2 et 1,80 g d\'H2O. Trouve sa formule brute et son nom sachant qu\'il est ramifié.',
        solution: 'n(CO2) = 3,52 / 44 = 0,08 mol.\nn(H2O) = 1,80 / 18 = 0,10 mol.\nn(CO2)/n(H2O) = n / (n+1) = 0,08 / 0,10 = 0,8 => 0,10n = 0,08n + 0,08 => 0,02n = 0,08 => n = 4.\nFormule brute : C4H10. Comme il est ramifié, son nom est le 2-méthylpropane (isobutane).'
      }
    ],
    exercises: [
      {
        question: 'Écris les formules semi-développées et donne les noms des 3 isomères de formule brute C5H12.',
        correction: '1. CH3-CH2-CH2-CH2-CH3 : pentane.\n2. CH3-CH(CH3)-CH2-CH3 : 2-méthylbutane.\n3. CH3-C(CH3)2-CH3 : 2,2-diméthylpropane.'
      }
    ],
    evaluationSituation: {
      context: 'Au laboratoire de chimie, un échantillon gazeux d\'un alcane A de densité de vapeur d = 2,0 produit par monochloration photochimique un seul et unique dérivé chloré B.',
      instructions: [
        '1. Détermine la masse molaire de l\'alcane A et sa formule brute.',
        '2. Écris les formules semi-développées de tous les isomères de A.',
        '3. Identifie formellement A et donne le nom du dérivé chloré B obtenu.'
      ],
      solutionGuide: '1. M = 29 × d = 29 × 2,0 = 58 g/mol. Formule brute : 14n + 2 = 58 => n = 4, donc C4H10.\n2. Isomères : butane CH3-CH2-CH2-CH3 et 2-méthylpropane CH(CH3)3.\n3. Le butane donne 2 dérivés monochlorés (1-chlorobutane et 2-chlorobutane). Seul le 2-méthylpropane posséderait 2 dérivés (1-chloro-2-méthylpropane et 2-chloro-2-méthylpropane). Si un alcane ne donne qu\'un seul dérivé monochloré parmi ses isomères de chaîne à symétrie parfaite, dans le cas de C5H12 ce serait le 2,2-diméthylpropane ; pour le méthane (1 seul) ou l\'éthane (1 seul : chloroéthane).'
    },
    examTraps: [
      'Oublier que les cyclanes ont pour formule CnH2n et non CnH2n+2.',
      'Numéroter la chaîne à l\'envers sans chercher la somme minimale des indices.',
      'Omettre la lumière lors de la réaction de chloration des alcanes (réaction photochimique).'
    ],
    quickMemo: 'Alcanes : CnH2n+2. Cyclanes : CnH2n. Combustion : CnH2n+2 + (3n+1)/2 O2 -> n CO2 + (n+1) H2O. Substitution photochimique : R-H + Cl2 -> R-Cl + HCl.',
    keywords: ['alcanes', 'cyclanes', 'méthane', 'butane', 'combustion', 'chloration', 'substituant', 'IUPAC', 'isomères']
  },

  // =========================================================================
  // 2. CHIMIE ORGANIQUE : ALCÈNES ET ALCYNES
  // =========================================================================
  {
    id: 'pc-1ere-chim-alcenes-alcynes',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Première C/D/E)',
    level: '1ere',
    levelLabel: '1ère C, D, E',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D',
    chapter: 'Chimie Organique - Hydrocarbures Insaturés',
    lessonTitle: 'Alcènes et Alcynes : Isomérie Z/E, Réactions d\'Addition, Règle de Markovnikov et Polymérisation',
    objectifs: [
      'Définir la double liaison C=C (carbone trigonal, 120°) et la triple liaison C≡C (carbone digonal, 180°)',
      'Identifier la stéréoisomérie géométrique Z/E chez les alcènes',
      'Appliquer les règles d\'addition (H2, X2, HX, H2O) et la règle de Markovnikov',
      'Décrire les réactions de polymérisation (polyéthylène PE, PVC, PTFE téflon, polystyrène PS)'
    ],
    fullCourseContent: `1. Structure des Alcènes et Alcynes :
- Alcènes : Hydrocarbures insaturés à double liaison C=C. Formule brute : CnH2n (n ≥ 2).
  * Les carbones de la double liaison sont trigonaux (angles de 120°, molécule plane au niveau de la double liaison, longueur C=C = 134 pm).
  * La double liaison empêche la libre rotation, ce qui engendre la stéréoisomérie géométrique Z/E lorsque chaque carbone porte deux substituants distincts :
    - Isomère Z (Zusammen = ensemble) : les groupes prioritaires sont du même côté du plan de la double liaison.
    - Isomère E (Entgegen = opposé) : les groupes prioritaires sont de côtés opposés.
- Alcynes : Hydrocarbures insaturés à triple liaison C≡C. Formule brute : CnH2n-2 (n ≥ 2).
  * Les carbones de la triple liaison sont digonaux (angles de 180°, structure linéaire, longueur C≡C = 120 pm).

2. Réactions d'Addition sur les Alcènes :
- Hydrogénation catalytique : R1-CH=CH-R2 + H2 ⟶ R1-CH2-CH2-R2 (en présence de Nickel Ni ou Platine Pt).
- Halogénation (Dihalogènes Cl2, Br2) : Addition sans lumière (contrairement aux alcanes).
  * Test caractéristique à l'eau de brome : Les alcènes décolorent instantanément l'eau de brome brune par formation d'un dérivé dibromé incolore (ex: CH2=CH2 + Br2 ⟶ CH2Br-CH2Br).
- Addition de chlorure d'hydrogène HCl :
  * Règle de Markovnikov : Lors de l'addition d'un réactif dissymétrique H-X ou H-OH sur un alcène dissymétrique, l'atome d'hydrogène se fixe préférentiellement sur le carbone le plus hydrogéné (le moins substitué), et l'anion (ou groupe OH) se fixe sur le carbone le plus substitué.
  * Exemple : CH3-CH=CH2 + HCl ⟶ CH3-CHCl-CH3 (2-chloropropane majoritaire).
- Hydratation (H2O en milieu H2SO4 à 300°C) :
  * CH2=CH2 + H2O ⟶ CH3-CH2OH (éthanol).
  * CH3-CH=CH2 + H2O ⟶ CH3-CH(OH)-CH3 (propan-2-ol majoritaire).

3. Réactions d'Addition sur les Alcynes :
- Hydrogénation totale (Ni ou Pt) : R-C≡C-R' + 2 H2 ⟶ R-CH2-CH2-R' (alcane).
- Hydrogénation partielle (Palladium désactivé / Lindlar) : R-C≡C-R' + H2 ⟶ R-CH=CH-R' (alcène Z).
- Addition de HCl :
  * Étape 1 : CH≡CH + HCl ⟶ CH2=CHCl (chlorure de vinyle / chloroéthylène).
  * Étape 2 : CH2=CHCl + HCl ⟶ CH3-CHCl2 (1,1-dichloroéthane).
- Hydratation de l'acétylène (H2O, Hg2+, H2SO4 à 80°C) :
  * CH≡CH + H2O ⟶ CH3-CHO (éthanal / aldéhyde).
  * Pour un alcyne substitué (ex: propyne) : donne une cétone (propanone).

4. Réactions de Polymérisation (Polyaddition) :
- Addition répétée d'un grand nombre de molécules de monomère identique : n M ⟶ -(M)-n.
- Degré de polymérisation : n = M(polymère) / M(monomère).
- Exemples industriels :
  * Polyéthylène (PE) : n (CH2=CH2) ⟶ -(CH2-CH2)n- (sacs, films, flacons).
  * Polychlorure de vinyle (PVC) : n (CH2=CHCl) ⟶ -(CH2-CH(Cl))n- (tuyaux d'évacuation, bouteilles).
  * Polytétrafluoroéthylène (PTFE / Téflon) : n (CF2=CF2) ⟶ -(CF2-CF2)n- (antiadhésif, joints).
  * Polystyrène (PS) : n (C6H5-CH=CH2) ⟶ -(CH2-CH(C6H5))n- (pots de yaourt, isolants).`,
    definitions: [
      {
        term: 'Règle de Markovnikov',
        definition: 'Règle régissant l\'addition ionique électrophile sur un alcène dissymétrique : l\'atome d\'hydrogène se lie au carbone doublement lié qui porte déjà le plus d\'atomes d\'hydrogène.'
      },
      {
        term: 'Polymérisation',
        definition: 'Réaction d\'addition au cours de laquelle un très grand nombre de molécules insaturées identiques (monomères) s\'unissent pour former une macromolécule (polymère).'
      },
      {
        term: 'Stéréoisomérie Z/E',
        definition: 'Isomérie géométrique due à l\'impossibilité de rotation autour de la liaison double C=C reliant des carbones porteurs de groupements différents.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Test à l\'eau de brome',
        statement: 'La décoloration immédiate d\'une solution aqueuse de dibrome sans lumière prouve la présence d\'une insaturation (double ou triple liaison C-C).'
      },
      {
        name: 'Degré de polymérisation n',
        statement: 'n = M_polymère / M_monomère. Il représente le nombre moyen de motifs constitutifs par chaîne macromoléculaire.'
      }
    ],
    formulas: [
      {
        name: 'Formule brute des alcènes',
        formula: 'CnH2n',
        explanation: 'Contient une liaison double C=C. Masse molaire : M = 14n g/mol.',
        unitOrCondition: 'n ≥ 2'
      },
      {
        name: 'Formule brute des alcynes',
        formula: 'CnH2n-2',
        explanation: 'Contient une liaison triple C≡C. Masse molaire : M = 14n - 2 g/mol.',
        unitOrCondition: 'n ≥ 2'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Prévoir le produit majoritaire d\'une addition selon Markovnikov',
        procedure: '1. Repérer les deux atomes de carbone engagés dans la double liaison.\n2. Compter le nombre d\'atomes d\'hydrogène directement liés à chacun.\n3. Fixer l\'atome H du réactif sur le carbone qui en a le plus.\n4. Fixer le groupe nucléophile (Cl, Br, OH) sur le carbone restant (le plus substitué).',
        tip: 'Vérifier la tétravalence du carbone pour chaque produit écrit.'
      }
    ],
    examples: [
      {
        statement: 'Un polymère a une masse molaire M = 85 kg/mol et est obtenu par polymérisation du 1,1-dichloroéthylène (CH2=CCl2). Calcule son degré de polymérisation n.',
        solution: 'Monomère : CH2=CCl2. Masse molaire M_m = 12×2 + 2×1 + 35,5×2 = 24 + 2 + 71 = 97 g/mol.\nM_polymère = 85 000 g/mol.\nDegré de polymérisation n = 85 000 / 97 ≈ 876.'
      }
    ],
    exercises: [
      {
        question: 'Nomme et représente les isomères Z et E du but-2-ène.',
        correction: '(Z)-but-2-ène : les deux groupements méthyle -CH3 sont du même côté du plan C=C.\n(E)-but-2-ène : les deux groupements méthyle -CH3 sont situés de part et d\'autre du plan C=C.'
      }
    ],
    evaluationSituation: {
      context: 'Dans un atelier, on réalise l\'hydrogénation catalytique complète d\'un volume V = 20 cm³ d\'un alcyne A inconnu en présence de nickel. On recueille un alcane B de masse mB = 0,023 g. L\'analyse de A montre qu\'il contient en masse 12 fois plus de carbone que d\'hydrogène.',
      instructions: [
        '1. Détermine la formule brute de l\'alcyne A.',
        '2. Écris l\'équation-bilan de l\'hydrogénation de A sur nickel.',
        '3. Calcule la masse mB théorique d\'alcane attendue et compare avec la mesure.'
      ],
      solutionGuide: '1. Formule alcyne CnH2n-2. mC = 12n et mH = 2n-2. mC = 12 mH => 12n = 12(2n-2) => n = 2n-2 => n = 2. A est l\'acétylène (éthyne) C2H2.\n2. C2H2 + 2 H2 ⟶ C2H6 (éthane).\n3. n(C2H2) = V / Vm = 20×10^-3 / 22,4 = 8,93×10^-4 mol. n(B) = n(A) = 8,93×10^-4 mol. mB = n(B) × M(C2H6) = 8,93×10^-4 × 30 = 0,0268 g ≈ 0,023 g (rendement ~86%).'
    },
    examTraps: [
      'Confondre hydrogénation sur Ni (totale donnant l\'alcane) et sur Pd de Lindlar (partielle s\'arrêtant à l\'alcène).',
      'Oublier que l\'hydratation d\'un alcyne donne un énol instable qui se tautomérise en aldéhyde (éthanal) ou en cétone.'
    ],
    quickMemo: 'Alcène : CnH2n. Alcyne : CnH2n-2. Markovnikov : H va sur le C le plus hydrogéné. Eau de brome : décolorée par double/triple liaison. Degré n = M_poly / M_mono.',
    keywords: ['alcènes', 'alcynes', 'acétylène', 'Markovnikov', 'Z/E', 'polymérisation', 'PVC', 'PE', 'eau de brome']
  },

  // =========================================================================
  // 3. CHIMIE ORGANIQUE : LE BENZÈNE ET LES COMPOSÉS AROMATIQUES
  // =========================================================================
  {
    id: 'pc-1ere-chim-composes-aromatiques',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Première C/D/E)',
    level: '1ere',
    levelLabel: '1ère C, D, E',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D',
    chapter: 'Chimie Organique - Composés Aromatiques',
    lessonTitle: 'Le Benzène et ses Dérivés : Structure, Additions et Substitutions Électrophiles',
    objectifs: [
      'Décrire la structure du benzène C6H6 (hexagone régulier, 6 électrons π délocalisés)',
      'Distinguer les réactions d\'addition rares et destructrices du cycle des substitutions conservatrices du noyau',
      'Écrire les réactions de substitution : chloration (AlCl3), bromation (FeBr3), nitration (HNO3+H2SO4), sulfonation (oléum)',
      'Nommer les isomères de position ortho, méta, para (ex: xylènes, dichlorobenzènes)'
    ],
    fullCourseContent: `1. Structure du Benzène et Aromaticité :
- Formule brute : C6H6. Découvert par Faraday (1825).
- Structure : Molécule plane hexagonale régulière. Les 6 liaisons C-C sont rigoureusement identiques de longueur 140 pm (intermédiaire entre simple 154 pm et double 134 pm).
- Délocalisation électronique : Les 6 électrons p forment un nuage électronique délocalisé au-dessus et en-dessous du plan du cycle, conférant au benzène une stabilité thermodynamique exceptionnelle (aromaticité selon la règle de Hückel : 4n+2 électrons π avec n=1).
- Dérivés aromatiques usuels : Toluène (méthylbenzène C7H8), Phénol (C6H5-OH), Aniline (C6H5-NH2), Styrène (C6H5-CH=CH2), Xylènes (diméthylbenzènes C8H10 : ortho- 1,2 ; méta- 1,3 ; para- 1,4).

2. Réactions d'Addition (Rares, en bloc, destructrices du noyau aromatique) :
- Hydrogénation totale : C6H6 + 3 H2 ⟶ C6H12 (cyclohexane) à 200°C sous pression en présence de Nickel divisé.
- Chloration photochimique : C6H6 + 3 Cl2 ⟶ C6H6Cl6 (hexachlorocyclohexane / lindane, puissant insecticide) en présence de rayonnement UV.

3. Réactions de Substitution Électrophile (Faciles, conservent le noyau aromatique) :
- Remplacement d'un atome H du cycle benzénique par un groupe électrophile :
  * Chloration : C6H6 + Cl2 ⟶ C6H5-Cl (chlorobenzène) + HCl (catalyseur acide de Lewis : AlCl3 ou FeCl3).
  * Bromation : C6H6 + Br2 ⟶ C6H5-Br (bromobenzène) + HBr (catalyseur : FeBr3 ou limaille de fer). Dégagement de HBr gazeux faisant rougir le papier pH humide.
  * Nitration : C6H6 + HNO3 ⟶ C6H5-NO2 (nitrobenzène, liquide huileux jaune à odeur d'amande amère) + H2O. Réalisée avec le mélange sulfonitrique (HNO3 concentré + H2SO4 concentré déshydratant).
    - Nitration poussée : conduit au 2,4,6-trinitrotoluène (T.N.T., explosif brisant).
  * Sulfonation : C6H6 + H2SO4 ⟶ C6H5-SO3H (acide benzènesulfonique) + H2O (avec l'oléum SO3 dans H2SO4).
  * Alkylation de Friedel et Crafts : C6H6 + CH3Cl ⟶ C6H5-CH3 (toluène) + HCl (catalyseur AlCl3).`,
    definitions: [
      {
        term: 'Noyau benzénique',
        definition: 'Cycle à six atomes de carbone hybridés sp2 formant un hexagone régulier plan où 6 électrons sont délocalisés.'
      },
      {
        term: 'Substitution électrophile aromatique',
        definition: 'Réaction dans laquelle un atome d\'hydrogène fixé au noyau aromatique est remplacé par un réactif électrophile sans rompre le cycle délocalisé.'
      },
      {
        term: 'Isomérie ortho, méta, para',
        definition: 'Positions relatives de deux substituants sur le noyau benzénique : ortho (1,2), méta (1,3), para (1,4).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Conservation du noyau aromatique',
        statement: 'Les substitutions aromatiques conservent la délocalisation cyclique des 6 électrons π, tandis que les additions détruisent l\'aromaticité en formant un cycle saturé.'
      }
    ],
    formulas: [
      {
        name: 'Formule du benzène',
        formula: 'C6H6',
        explanation: 'Masse molaire M = 78 g/mol.',
        unitOrCondition: 'Hydrocarbure liquide pur'
      },
      {
        name: 'Nitration du benzène',
        formula: 'C6H6 + HNO3 ⟶ C6H5-NO2 + H2O',
        explanation: 'Catalysée par H2SO4 concentré (mélange sulfonitrique).',
        unitOrCondition: 'Formation de nitrobenzène'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier le type de réaction sur le benzène',
        procedure: '1. Examiner les réactifs et les catalyseurs : si AlCl3, FeCl3, FeBr3 ou H2SO4 sont présents, c\'est une substitution électrophile.\n2. Si la lumière UV ou Ni à 200°C est utilisée, c\'est une addition en bloc de 3 molécules.\n3. Vérifier si le produit final conserve le noyau benzénique (substitution) ou devient un cycle saturé (addition).',
        tip: 'Ne jamais écrire d\'addition d\'eau sur le benzène (réaction impossible).'
      }
    ],
    examples: [
      {
        statement: 'On réalise la mononitration de 7,8 g de benzène. Calcule la masse théorique de nitrobenzène C6H5NO2 obtenue.',
        solution: 'M(C6H6) = 78 g/mol ; M(C6H5NO2) = 12×6 + 5 + 14 + 32 = 123 g/mol.\nn(benzène) = 7,8 / 78 = 0,10 mol.\nLa réaction étant mole à mole : n(nitrobenzène) = 0,10 mol.\nm = n × M = 0,10 × 123 = 12,3 g de nitrobenzène.'
      }
    ],
    exercises: [
      {
        question: 'Écris la formule semi-développée et le nom des trois isomères du diméthylbenzène (xylène).',
        correction: '1. 1,2-diméthylbenzène (orthoxylène).\n2. 1,3-diméthylbenzène (métaxylène).\n3. 1,4-diméthylbenzène (paraxylène).'
      }
    ],
    evaluationSituation: {
      context: 'Dans un laboratoire d\'analyse, un hydrocarbure aromatique A de densité de vapeur d = 3,655 produit par combustion complète de 0,875 g une masse de 2,91 g de CO2.',
      instructions: [
        '1. Calcule la masse molaire M de l\'hydrocarbure A.',
        '2. Détermine le pourcentage massique de carbone et la formule brute de A.',
        '3. Sachant que A est un xylène, donne ses formules possibles.'
      ],
      solutionGuide: '1. M = 29 × 3,655 = 106 g/mol.\n2. mC = (12/44) × 2,91 = 0,794 g. %C = (0,794 / 0,875) × 100 = 90,7%. n = (106 × 0,907) / 12 ≈ 8 atomes de C. Formule brute : C8H10 (M = 8×12 + 10 = 106 g/mol).\n3. Formules possibles : 1,2-diméthylbenzène (ortho), 1,3-diméthylbenzène (méta) ou 1,4-diméthylbenzène (para), ou encore l\'éthylbenzène.'
    },
    examTraps: [
      'Confondre chloration par addition photochimique (donne C6H6Cl6) et chloration par substitution avec AlCl3 (donne C6H5Cl + HCl).',
      'Oublier le rôle déshydratant et catalytique de H2SO4 dans le mélange sulfonitrique.'
    ],
    quickMemo: 'Benzène C6H6 : Plan, hexagone régulier, 6e π délocalisés. Additions en bloc : 3 H2 (cyclohexane), 3 Cl2 (lindane). Substitutions (AlCl3/FeBr3/H2SO4) : Cl, Br, NO2, SO3H, alkyle. Isomères : ortho (1,2), méta (1,3), para (1,4).',
    keywords: ['benzène', 'toluène', 'xylène', 'substitution aromatique', 'nitration', 'sulfonation', 'Friedel-Crafts', 'lindane', 'TNT']
  },

  // =========================================================================
  // 4. CHIMIE ORGANIQUE : COMPOSÉS OXYGÉNÉS ET ESTÉRIFICATION
  // =========================================================================
  {
    id: 'pc-1ere-chim-composes-oxygenes-esterification',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Première C/D/E)',
    level: '1ere',
    levelLabel: '1ère C, D, E',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D',
    chapter: 'Chimie Organique - Composés Oxygénés',
    lessonTitle: 'Alcools, Composés Carbonylés, Acides, Esters, Éthanol et Équilibre d\'Estérification-Hydrolyse',
    objectifs: [
      'Identifier les familles oxygénées : alcools (classes I, II, III), éthers, aldéhydes, cétones, acides, esters',
      'Réaliser les tests caractéristiques des carbonylés (DNPH, Schiff, Fehling, Tollens)',
      'Détailler l\'oxydation ménagée de l\'éthanol (lampe sans flamme et oxydants chimiques MnO4-, Cr2O7 2-)',
      'Maîtriser la réaction d\'estérification-hydrolyse : caractéristiques, équilibre chimique et calcul de rendement'
    ],
    fullCourseContent: `1. Familles des Composés Organiques Oxygénés :
- Alcools (R-OH) : Formule brute saturée CnH2n+2O. Carbone fonctionnel tétragonal lié à -OH.
  * Alcool primaire : R-CH2-OH (ex: éthanol, propan-1-ol).
  * Alcool secondaire : R-CH(OH)-R' (ex: propan-2-ol).
  * Alcool tertiaire : R-C(OH)(R')-R'' (ex: 2-méthylpropan-2-ol).
- Éthers-oxydes (R-O-R') : Formule CnH2n+2O. Nom : alcoxyalcane ou oxyde de dialkyle (ex: éthoxyéthane).
- Aldéhydes (R-CHO) et Cétones (R-CO-R') : Formule brute saturée CnH2nO. Groupe carbonyle C=O.
  * Tests d'identification des composés carbonylés :
    - 2,4-DNPH : Précipité jaune-orangé avec aldéhydes ET cétones.
    - Réactif de Schiff : Se colore en rose/violet UNIQUEMENT avec les aldéhydes.
    - Liqueur de Fehling à chaud : Précipité rouge brique (oxyde cuivreux Cu2O) UNIQUEMENT avec les aldéhydes.
    - Réactif de Tollens (nitrate d'argent ammoniacal) : Dépôt d'un miroir d'argent UNIQUEMENT avec les aldéhydes.
- Acides carboxyliques (R-COOH) : Formule CnH2nO2. Groupe carboxyle -COOH (rougit le papier pH).
- Esters (R-COO-R') : Formule CnH2nO2. Dérivés d'acides à odeur agréable de fruits (ex: éthanoate d'éthyle, arôme de banane = éthanoate de 3-méthylbutyle).

2. L'Éthanol et son Oxydation Ménagée :
- Obtention : Fermentation alcoolique du glucose (C6H12O6 ⟶ 2 C2H5OH + 2 CO2) ou hydratation de l'éthylène.
- Oxydation ménagée : Conserve le squelette carboné (contrairement à la combustion complète).
  * Expérience de la lampe sans flamme : Vapeurs d'éthanol sur fil de cuivre incandescent.
    - Étape 1 : CH3-CH2OH + 1/2 O2 ⟶ CH3-CHO (éthanal) + H2O (rosit Schiff).
    - Étape 2 : CH3-CHO + 1/2 O2 ⟶ CH3-COOH (acide éthanoïque) + H2O (rougit papier pH).
  * Règle générale d'oxydation ménagée des alcools :
    - Alcool primaire ⟶ Aldéhyde ⟶ Acide carboxylique.
    - Alcool secondaire ⟶ Cétone (pas d'oxydation ultérieure sans rupture de chaîne).
    - Alcool tertiaire ⟶ Pas d'oxydation ménagée.

3. Réactions d'Estérification et d'Hydrolyse :
- Équation : R-COOH + R'-OH ⇄ R-COO-R' + H2O.
- Trois caractéristiques fondamentales : Lente, réversible (limitée par l'hydrolyse inverse) et athermique (ΔH = 0).
- Équilibre chimique et rendements (mélange initial équimolaire 1:1) :
  * Alcool primaire : Rendement limite = 67% (2/3 de l'acide estérifié).
  * Alcool secondaire : Rendement limite = 60%.
  * Alcool tertiaire : Rendement très faible (~5%).
- Facteurs influençant la réaction :
  * Catalyseur (H2SO4) et température : Augmentent la vitesse sans modifier la composition de l'équilibre.
  * Augmentation du rendement : Utiliser un réactif en excès (acide ou alcool) ou éliminer l'eau/ester au fur et à mesure (distillation fractionnée).`,
    definitions: [
      {
        term: 'Estérification',
        definition: 'Réaction entre un acide carboxylique et un alcool produisant un ester et de l\'eau. C\'est une réaction lente, réversible et athermique.'
      },
      {
        term: 'Oxydation ménagée',
        definition: 'Oxydation douce qui transforme la fonction chimique d\'une molécule sans détruire son squelette carboné.'
      },
      {
        term: 'Groupe carbonyle',
        definition: 'Groupement fonctionnel divalent C=O présent dans les aldéhydes et les cétones.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Rendements d\'estérification selon la classe de l\'alcool',
        statement: 'Pour un mélange équimolaire acide/alcool : Alcool I = 67% ; Alcool II = 60% ; Alcool III = 5%.'
      },
      {
        name: 'Test de Schiff et Liqueur de Fehling',
        statement: 'Les aldéhydes sont réducteurs : ils réduisent la liqueur de Fehling (précipité rouge brique Cu2O) et le réactif de Tollens (miroir d\'argent), contrairement aux cétones.'
      }
    ],
    formulas: [
      {
        name: 'Rendement d\'estérification ρ',
        formula: 'ρ = n(ester formé) / n(acide initial)',
        explanation: 'Pour un mélange stœchiométrique équimolaire.',
        unitOrCondition: 'Sans unité ou en pourcentage (%)'
      },
      {
        name: 'Formule des esters et acides carboxyliques',
        formula: 'CnH2nO2',
        explanation: 'Masse molaire M = 14n + 32 g/mol.',
        unitOrCondition: 'Esters et acides saturés'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer la classe d\'un alcool et ses produits d\'oxydation',
        procedure: '1. Identifier le carbone fonctionnel lié au groupe -OH.\n2. Compter le nombre de carbones directement attachés à ce carbone : 1 => classe I, 2 => classe II, 3 => classe III.\n3. Si classe I : premier produit = aldéhyde (test Schiff +), deuxième = acide carboxylique (pH < 7).\n4. Si classe II : produit unique = cétone (DNPH +, Schiff -).\n5. Si classe III : inerte face aux oxydants ménagés doux.',
        tip: 'Le méthanol CH3OH est rattaché par convention à la classe des alcools primaires.'
      }
    ],
    examples: [
      {
        statement: 'On chauffe un mélange de 0,15 mol d\'acide éthanoïque et 0,15 mol d\'éthanol en présence d\'acide sulfurique. Calcule la masse d\'éthanoate d\'éthyle obtenue à l\'équilibre (M = 88 g/mol).',
        solution: 'L\'éthanol est un alcool primaire, donc le rendement d\'estérification pour un mélange équimolaire est de 67%.\nn(ester) = 0,67 × 0,15 mol = 0,10 mol.\nMasse d\'ester m = n × M = 0,10 × 88 = 8,8 g.'
      }
    ],
    exercises: [
      {
        question: 'Comment différencier expérimentalement le propanal de la propanone ?',
        correction: '1. Les deux composés donnent un précipité jaune avec la 2,4-DNPH (présence du groupe carbonyle C=O).\n2. Seul le propanal (aldéhyde) rosit le réactif de Schiff et donne un précipité rouge brique à chaud avec la liqueur de Fehling. La propanone (cétone) ne réagit pas à ces deux tests réducteurs.'
      }
    ],
    evaluationSituation: {
      context: 'Un arôme alimentaire à odeur d\'ananas de masse molaire M = 116 g/mol contient en masse 62,1% de carbone, 10,3% d\'hydrogène et 27,6% d\'oxygène. On sait qu\'il est préparé à partir d\'acide butanoïque.',
      instructions: [
        '1. Détermine la formule brute de cet ester.',
        '2. Écris sa formule semi-développée et donne son nom officiel.',
        '3. Identifie l\'alcool utilisé pour sa synthèse et précise sa classe.'
      ],
      solutionGuide: '1. Formule CxHyOz. MC = 0,621 × 116 = 72 => x = 72/12 = 6. MH = 0,103 × 116 = 12 => y = 12. MO = 0,276 × 116 = 32 => z = 32/16 = 2. Formule brute : C6H12O2.\n2. Synthétisé à partir d\'acide butanoïque (CH3-CH2-CH2-COOH, 4 carbones). Le reste alkyle comporte donc 6 - 4 = 2 carbones (éthyle). Formule : CH3-CH2-CH2-COO-CH2-CH3 (butanoate d\'éthyle).\n3. L\'alcool utilisé est l\'éthanol (CH3-CH2-OH), alcool primaire.'
    },
    examTraps: [
      'Affirmer que l\'acide sulfurique déplace l\'équilibre (il est simple catalyseur, il accélère sans changer le rendement final).',
      'Confondre le résultat de la DNPH (positif pour aldéhyde ET cétone) avec les tests spécifiques réducteurs (Schiff, Fehling).'
    ],
    quickMemo: 'Alcool I -> Aldéhyde -> Acide. Alcool II -> Cétone. Alcool III -> Rien. Estérification : Acide + Alcool ⇄ Ester + Eau (lente, réversible, athermique). Rendement équimolaire : I = 67%, II = 60%, III = 5%. DNPH (+) = C=O ; Fehling (+) = aldéhyde.',
    keywords: ['alcools', 'aldéhydes', 'cétones', 'esters', 'estérification', 'hydrolyse', 'éthanol', 'Fehling', 'Tollens', 'Schiff']
  },

  // =========================================================================
  // 5. OXYDORÉDUCTION : PILES, DOSAGES ET ÉLECTROLYSE
  // =========================================================================
  {
    id: 'pc-1ere-chim-oxydoreduction-piles-electrolyse',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Première C/D/E)',
    level: '1ere',
    levelLabel: '1ère C, D, E',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D',
    chapter: 'Oxydoréduction & Électrochimie',
    lessonTitle: 'Couples Redox, Pile Daniell, Dosages (Manganimétrie/Iodométrie), Nombres d\'Oxydation et Électrolyse',
    objectifs: [
      'Définir un oxydant, un réducteur, et équilibrer les demi-équations en milieu acide (H3O+/H+)',
      'Décrire la pile Daniell, calculer sa force électromotrice E = E(+) - E(-) et appliquer la règle du gamma',
      'Exploiter les dosages par manganimétrie (KMnO4) et iodométrie (I2 / S2O3 2-)',
      'Déterminer le nombre d\'oxydation (n.o.) et équilibrer les réactions par voie sèche (aluminothermie, sidérurgie)',
      'Expliquer l\'électrolyse (anode soluble, bilan quantitatif de Faraday Q = I·Δt = ne·F) et la protection contre la corrosion'
    ],
    fullCourseContent: `1. Couples Oxydant/Réducteur et Règle du Gamma :
- Oxydant : Espèce capable de capter un ou plusieurs électrons (subit une réduction).
- Réducteur : Espèce capable de céder un ou plusieurs électrons (subit une oxydation).
- Électrode Standard à Hydrogène (ESH) : Couple de référence H+/H2 dont le potentiel normal est conventionnellement nul à toute température : E°(H+/H2) = 0,00 V.
- Règle du gamma : L'oxydant le plus fort réagit spontanément avec le réducteur le plus fort. La réaction est considérée comme quasi-totale si ΔE° = E°(ox) - E°(red) ≥ 0,30 V.

2. Piles Électrochimiques (Exemple : Pile Daniell) :
- Constitution : Demi-pile Zn2+/Zn (lame de zinc dans solution de ZnSO4) reliée par un pont salin (K+, Cl-) à la demi-pile Cu2+/Cu (lame de cuivre dans CuSO4).
- Polarité : E°(Cu2+/Cu) = +0,34 V > E°(Zn2+/Zn) = -0,76 V.
  * Borne (+) = Cuivre (cathode, siège de la réduction : Cu2+ + 2 e- ⟶ Cu). Gain de masse.
  * Borne (-) = Zinc (anode, siège de l'oxydation : Zn ⟶ Zn2+ + 2 e-). Perte de masse.
  * Schéma conventionnel : (-) Zn | Zn2+ || Cu2+ | Cu (+).
  * Force électromotrice standard : E° = E°(+) - E°(-) = 0,34 - (-0,76) = 1,10 V.

3. Dosages d'Oxydoréduction :
- Manganimétrie (dosage de Fe2+ par KMnO4 acidifié) :
  * Couple MnO4-/Mn2+ (violet ⟶ incolore) et Fe3+/Fe2+.
  * Demi-équations :
    MnO4- + 8 H+ + 5 e- ⟶ Mn2+ + 4 H2O
    5 × (Fe2+ ⟶ Fe3+ + e-)
    Bilan : MnO4- + 5 Fe2+ + 8 H+ ⟶ Mn2+ + 5 Fe3+ + 4 H2O.
  * À l'équivalence : n(Fe2+) = 5 n(MnO4-) => Cred · Vred = 5 Cox · Vox_eq. Teinte violette persistante.
- Iodométrie (dosage de I2 par le thiosulfate S2O3 2-) :
  * I2 + 2 S2O3 2- ⟶ 2 I- + S4O6 2- (tétrathionate).
  * À l'équivalence : n(I2) = 1/2 n(S2O3 2-). Indicateur : empois d'amidon (décoloration du bleu).

4. Oxydoréduction par Voie Sèche et Nombre d'Oxydation (n.o.) :
- Le nombre d'oxydation représente la charge fictive portée par un atome :
  * Corps pur simple (Fe, O2, H2) : n.o. = 0.
  * Ion monoatomique (Fe3+, Cl-) : n.o. = charge de l'ion (+III, -I).
  * Dans une molécule neutre : somme des n.o. = 0 (H = +I, O = -II généralement).
  * Oxydation = augmentation du n.o. ; Réduction = diminution du n.o.
- Applications industrielles :
  * Sidérurgie (Haut fourneau) : Réduction de Fe2O3 par le monoxyde de carbone : Fe2O3 (+III) + 3 CO (+II) ⟶ 2 Fe (0) + 3 CO2 (+IV).
  * Aluminothermie : Fe2O3 + 2 Al ⟶ 2 Fe + Al2O3 (très exothermique, soudure de rails).

5. Électrolyse et Protection contre la Corrosion :
- Électrolyse : Réaction d'oxydoréduction forcée par un générateur extérieur.
  * À l'anode (+) : oxydation du réducteur le plus fort.
  * À la cathode (-) : réduction de l'oxydant le plus fort.
  * Anode soluble : le métal de l'anode s'oxyde et se dépose à la cathode (purification du cuivre, galvanoplastie / argenture).
  * Loi de Faraday : Q = I · Δt = n(e-) · F, avec F = 96 500 C/mol. Masse déposée : m = (M · I · Δt) / (n · F).
- Corrosion des métaux : Oxydation destructrice du métal par le milieu ambiant.
  * Protection par revêtement : Galvanisation (zinc), étamage (fer blanc).
  * Protection cathodique : Anode sacrificielle en zinc ou magnésium pour protéger la coque des navires ou les pipelines.`,
    definitions: [
      {
        term: 'Nombre d\'oxydation (n.o.)',
        definition: 'Nombre algébrique écrit en chiffres romains traduisant l\'état de perte ou de gain fictif d\'électrons d\'un atome dans une entité chimique.'
      },
      {
        term: 'Électrolyse',
        definition: 'Ensemble des réactions chimiques forcées se produisant aux électrodes sous l\'action d\'un courant électrique continu.'
      },
      {
        term: 'Faraday (F)',
        definition: 'Valeur absolue de la charge électrique transportée par une mole d\'électrons : F = NA · e ≈ 96 500 C/mol.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de polarité d\'une pile',
        statement: 'Le pôle positif correspond au couple de potentiel le plus élevé (siège de la réduction). Le pôle négatif correspond au couple de potentiel le plus faible (siège de l\'oxydation).'
      },
      {
        name: 'Loi quantitative de l\'électrolyse',
        statement: 'Q = I · Δt = n(e-) · F. La masse de métal déposé à la cathode est proportionnelle à la quantité d\'électricité débitée.'
      }
    ],
    formulas: [
      {
        name: 'Force électromotrice de pile',
        formula: 'E = E°(pôle +) - E°(pôle -)',
        explanation: 'Différence entre le potentiel le plus élevé et le plus faible.',
        unitOrCondition: 'En Volts (V)'
      },
      {
        name: 'Masse déposée par électrolyse',
        formula: 'm = (M · I · Δt) / (z · F)',
        explanation: 'z est le nombre d\'électrons échangés par ion métallique.',
        unitOrCondition: 'm en g, I en A, Δt en s, F = 96500 C/mol'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Équilibrer une équation redox en milieu acide (méthode officielle en 5 étapes)',
        procedure: '1. Écrire les espèces Ox et Red en équilibrant l\'élément principal.\n2. Équilibrer l\'oxygène avec des molécules d\'eau H2O.\n3. Équilibrer l\'hydrogène avec des protons H+ (ou H3O+).\n4. Équilibrer les charges électriques globales en ajoutant des électrons e- du côté de l\'oxydant.\n5. Multiplier les deux demi-équations pour égaliser le nombre d\'électrons cédés et captés, puis sommer.',
        tip: 'Vérifier toujours la conservation de la charge totale des deux côtés de la flèche.'
      }
    ],
    examples: [
      {
        statement: 'On dose 12 mL d\'une solution de Fe2+ par une solution de KMnO4 à 0,0126 mol/L. Le volume équivalent est Veq = 16,5 mL. Calcule la concentration en ions Fe2+.',
        solution: 'À l\'équivalence : n(Fe2+) = 5 n(MnO4-) => C(Fe2+) × V(Fe2+) = 5 C(ox) × Veq.\nC(Fe2+) = (5 × 0,0126 × 16,5) / 12 = 1,0395 / 12 = 0,0866 mol/L ≈ 0,087 mol/L.'
      }
    ],
    exercises: [
      {
        question: 'Détermine le nombre d\'oxydation du soufre S dans SO2, SO4 2- et H2SO4.',
        correction: '1. Dans SO2 : n.o.(S) + 2(-II) = 0 => n.o.(S) = +IV.\n2. Dans SO4 2- : n.o.(S) + 4(-II) = -2 => n.o.(S) = +VI.\n3. Dans H2SO4 : 2(+I) + n.o.(S) + 4(-II) = 0 => n.o.(S) = +VI.'
      }
    ],
    evaluationSituation: {
      context: 'Un artisan bijoutier veut argenter une médaille en zinc de surface totale S = 12 cm² par électrolyse d\'une solution de nitrate d\'argent (Ag+). Il applique un courant d\'intensité I = 1,0 A pour déposer une épaisseur h = 7 μm d\'argent de masse volumique ρ = 10,5 g/cm³.',
      instructions: [
        '1. Précise la polarité de l\'électrode où est fixée la médaille.',
        '2. Calcule la masse d\'argent métallique m(Ag) à déposer.',
        '3. Détermine la durée nécessaire Δt pour réaliser ce placage.'
      ],
      solutionGuide: '1. Le dépôt d\'argent résulte de la réduction Ag+ + e- ⟶ Ag : la médaille doit être reliée à la cathode (pôle négatif).\n2. Volume d\'argent V = S × h = 12 cm² × 7×10^-4 cm = 8,4×10^-3 cm³.\nMasse m(Ag) = ρ × V = 10,5 g/cm³ × 8,4×10^-3 cm³ = 0,0882 g = 88,2 mg.\n3. Quantité de matière n(Ag) = 0,0882 / 108 = 8,17×10^-4 mol.\nCharge Q = n(Ag) × F = 8,17×10^-4 × 96 500 = 78,8 C.\nDurée Δt = Q / I = 78,8 / 1,0 = 78,8 s.'
    },
    examTraps: [
      'Inverser anode et cathode : l\'oxydation a TOUJOURS lieu à l\'anode, et la réduction à la cathode, que ce soit pour une pile ou pour une électrolyse.',
      'Oublier le coefficient 5 lors du dosage de Fe2+ par le permanganate MnO4-.'
    ],
    quickMemo: 'Pile Daniell : (-) Zn | Zn2+ || Cu2+ | Cu (+), E = 1,10 V. Électrolyse : forcée, anode = oxydation, cathode = réduction. Faraday : Q = I·t = ne·F. Nombre d\'oxydation : Oxydation = augmentation du n.o. ; Réduction = diminution.',
    keywords: ['oxydoréduction', 'pile Daniell', 'électrolyse', 'manganimétrie', 'iodométrie', 'Faraday', 'nombre d\'oxydation', 'corrosion', 'anode sacrificielle']
  },

  // =========================================================================
  // 6. PHYSIQUE : MÉCANIQUE (TRAVAIL, ÉNERGIE CINÉTIQUE ET ÉNERGIE MÉCANIQUE)
  // =========================================================================
  {
    id: 'pc-1ere-phys-mecanique-travail-energie',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Première C/D/E)',
    level: '1ere',
    levelLabel: '1ère C, D, E',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D',
    chapter: 'Physique - Mécanique et Énergie',
    lessonTitle: 'Travail, Puissance, Énergie Cinétique, Théorème de l\'Énergie Cinétique et Conservation de l\'Énergie Mécanique',
    objectifs: [
      'Calculer le travail et la puissance d\'une force en translation (moteur, résistant, nul) et en rotation',
      'Établir le travail du poids W(P) = mg(zA - zB) et de la tension d\'un ressort W(T) = -1/2 k(x2² - x1²)',
      'Énoncer et appliquer le Théorème de l\'Énergie Cinétique (TEC) : ΔEc = ∑ W(Fext)',
      'Définir l\'énergie potentielle (pesanteur et élastique) et analyser la conservation ou dissipation de l\'énergie mécanique'
    ],
    fullCourseContent: `1. Travail et Puissance d'une Force Constante en Mouvement de Translation :
- Travail d'une force constante F⃗ lors d'un déplacement rectiligne AB⃗ :
  W_AB(F⃗) = F⃗ · AB⃗ = F · AB · cos α (exprimé en Joules J).
  * Si α < 90° : W > 0, travail moteur (favorise le mouvement).
  * Si α = 90° : W = 0, travail nul (force orthogonale au déplacement, ex: réaction normale Rn).
  * Si 90° < α ≤ 180° : W < 0, travail résistant (s'oppose au mouvement, ex: frottement f⃗ : W(f⃗) = -f · AB).
- Travail du poids P⃗ : W_AB(P⃗) = mg(zA - zB) = mgΔz.
  * Propriété fondamentale : Le travail du poids est indépendant du chemin suivi, il ne dépend que des altitudes de départ zA et d'arrivée zB. Le poids est une force conservative.
- Travail de la force de rappel d'un ressort : W_AB(T⃗) = -1/2 k(x2² - x1²).
- Puissance d'une force :
  * Puissance moyenne : P_m = W / Δt (en Watts W).
  * Puissance instantanée : P = F⃗ · v⃗ = F · v · cos α.

2. Mouvement de Rotation d'un Solide autour d'un Axe Fixe (Δ) :
- Grandeurs cinématiques : Abscisse angulaire θ (rad), curviligne s = R·θ (m), vitesse angulaire ω = dθ/dt (rad/s), vitesse linéaire v = R·ω.
- Moment d'une force : M_Δ(F⃗) = ± F · d où d est le bras de levier (distance orthogonale entre l'axe et la droite d'action de la force).
- Théorème des moments (équilibre) : ∑ M_Δ(F⃗) = 0.
- Moment d'un couple de forces : M_C = F · d.
- Travail et puissance en rotation : W = M_Δ(F⃗) · θ et P = M_Δ(F⃗) · ω.

3. Énergie Cinétique et Théorème de l'Énergie Cinétique (TEC) :
- En translation : Ec = 1/2 m v² (m en kg, v en m/s, Ec en J).
- En rotation autour d'un axe fixe : Ec = 1/2 J_Δ · ω² où J_Δ est le moment d'inertie du solide (kg·m²).
  * Disque / cylindre plein : J_Δ = 1/2 M R² ; Anneau : J_Δ = M R² ; Sphère pleine : J_Δ = 2/5 M R² ; Tige mince de longueur L au centre : J_Δ = 1/12 M L².
- Énoncé du TEC : Dans un référentiel galiléen, la variation de l'énergie cinétique d'un solide entre deux instants est égale à la somme algébrique des travaux de toutes les forces extérieures appliquées :
  ΔEc = Ec2 - Ec1 = ∑ W_1⟶2(F⃗_ext).

4. Énergie Potentielle et Énergie Mécanique :
- Énergie potentielle de pesanteur : Epp(z) = mg(z - z0) où z0 est l'altitude de l'état de référence (Epp(z0) = 0).
  * Relation travail - énergie potentielle : ΔEpp = - W(P⃗).
- Énergie potentielle élastique d'un ressort : Epe(x) = 1/2 k x² (référence x = 0). ΔEpe = - W(T⃗).
- Énergie mécanique : Em = Ec + Ep.
  * Conservation : En l'absence de frottements (forces conservatives uniquement), Em se conserve : ΔEm = 0 => Em1 = Em2.
  * Non-conservation : En présence de frottements de travail résistant W(f⃗) < 0, l'énergie mécanique diminue : ΔEm = W(f⃗) < 0 (dissipation thermique sous forme de chaleur).`,
    definitions: [
      {
        term: 'Théorème de l\'énergie cinétique (TEC)',
        definition: 'Dans un référentiel galiléen, la variation de l\'énergie cinétique d\'un solide entre deux positions est égale à la somme des travaux des forces extérieures qui s\'exercent sur lui : ΔEc = ∑ W(Fext).'
      },
      {
        term: 'Force conservative',
        definition: 'Force dont le travail ne dépend pas de la trajectoire suivie mais uniquement des positions initiale et finale (ex: le poids, la force électrostatique).'
      },
      {
        term: 'Moment d\'une force',
        definition: 'Grandeur algébrique mesurant l\'aptitude d\'une force à faire tourner un solide autour d\'un axe fixe : M_Δ(F) = ± F · d.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Principe de conservation de l\'énergie mécanique',
        statement: 'Si un système n\'est soumis qu\'à des forces conservatives (ou si les autres forces ont un travail nul), son énergie mécanique reste constante au cours du temps : Em = Ec + Ep = cte.'
      }
    ],
    formulas: [
      {
        name: 'Travail du poids',
        formula: 'W_AB(P⃗) = mg(zA - zB)',
        explanation: 'Ne dépend que du dénivelé vertical h = zA - zB.',
        unitOrCondition: 'En Joules (J)'
      },
      {
        name: 'Énergie cinétique de rotation',
        formula: 'Ec = 1/2 J_Δ · ω²',
        explanation: 'J_Δ est le moment d\'inertie en kg·m², ω la vitesse angulaire en rad/s.',
        unitOrCondition: 'Solide en rotation pure'
      },
      {
        name: 'Puissance instantanée',
        formula: 'P = F · v · cos α  ou  P = M_Δ · ω',
        explanation: 'Produit de l\'effort par la vitesse.',
        unitOrCondition: 'En Watts (W)'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Appliquer le Théorème de l\'Énergie Cinétique',
        procedure: '1. Définir le système matériel et le référentiel galiléen.\n2. Faire l\'inventaire complet de toutes les forces extérieures appliquées.\n3. Exprimer le travail de chaque force entre l\'état 1 et l\'état 2.\n4. Écrire le bilan : 1/2 m v2² - 1/2 m v1² = ∑ W(Fext) et isoler la grandeur inconnue (vitesse, distance, force).',
        tip: 'Le travail de la réaction normale d\'un support sans frottement est toujours nul (W = 0).'
      }
    ],
    examples: [
      {
        statement: 'Un solide de masse m = 85 kg descend sans vitesse initiale un plan incliné AB = 20 m d\'angle α = 30° sans frottement. Calcule sa vitesse vB au bas de la pente (g = 10 N/kg).',
        solution: 'Bilan des forces : Poids P⃗ et réaction normale R⃗_N (W(R_N) = 0 car R_N ⊥ AB).\nAppliquons le TEC entre A et B :\n1/2 m vB² - 0 = W(P⃗) = mg · AB · sin α.\nvB = √(2 g · AB · sin α) = √(2 × 10 × 20 × sin 30°) = √(200) = 14,14 m/s.'
      }
    ],
    exercises: [
      {
        question: 'Un pendule simple de masse m = 100 g et de longueur L = 40 cm est écarté d\'un angle θ = 60° puis lâché sans vitesse initiale. Calcule le travail du poids lorsque la bille passe à la verticale.',
        correction: 'W(P⃗) = mg L (1 - cos θ) = 0,10 kg × 10 N/kg × 0,40 m × (1 - cos 60°) = 0,40 × 0,5 = 0,20 J.'
      }
    ],
    evaluationSituation: {
      context: 'Un wagonnet de masse m = 950 kg est tiré à vitesse constante v = 54 km/h sur une voie horizontale AB = 150 m par une force motrice F = 50 N parallèle aux rails. Il aborde ensuite une montée CD = 165 m de pente 2% avec une corde inclinée.',
      instructions: [
        '1. Convertis la vitesse en m/s et calcule la puissance développée sur la portion AB.',
        '2. Calcule le travail de la force motrice sur AB.',
        '3. Détermine le travail du poids lors de la montée CD où le dénivelé est h = 165 × 0,02 = 3,3 m.'
      ],
      solutionGuide: '1. v = 54 / 3,6 = 15 m/s. Puissance P = F × v = 50 × 15 = 750 W.\n2. W_AB(F) = F × AB = 50 × 150 = 7 500 J = 7,5 kJ.\n3. Montée : W_CD(P) = - mgh = - 950 × 10 × 3,3 = - 31 350 J (travail résistant).'
    },
    examTraps: [
      'Oublier de convertir les km/h en m/s (diviser par 3,6).',
      'Confondre le travail du poids en montée (négatif / résistant) et en descente (positif / moteur).',
      'Oublier que l\'énergie mécanique ne se conserve PAS dès qu\'il y a des frottements.'
    ],
    quickMemo: 'W = F·d·cos α. Travail poids : W = mg(zA - zB). Ressort : W = -1/2 k(x2² - x1²). TEC : ΔEc = ∑W. Conservation : Em = Ec + Ep = cte si pas de frottement. Dissipation : ΔEm = W(f) = -f·d.',
    keywords: ['travail', 'puissance', 'énergie cinétique', 'énergie potentielle', 'TEC', 'énergie mécanique', 'frottements', 'ressort', 'pendule']
  },

  // =========================================================================
  // 7. PHYSIQUE : ÉLECTRICITÉ ET ÉLECTRONIQUE (CHAMP, CONDENSATEURS, AO)
  // =========================================================================
  {
    id: 'pc-1ere-phys-electricite-electronique-ao-condensateur',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Première C/D/E)',
    level: '1ere',
    levelLabel: '1ère C, D, E',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D',
    chapter: 'Physique - Électricité & Électronique',
    lessonTitle: 'Champ Électrostatique, Condensateurs et Amplificateur Opérationnel (AO)',
    objectifs: [
      'Déterminer les caractéristiques du champ électrostatique uniforme E⃗ = U/d et de la force F⃗ = q·E⃗',
      'Appliquer les lois du condensateur (Q = C·U, associations série/parallèle, énergie E = 1/2 CU²)',
      'Analyser le fonctionnement de l\'amplificateur opérationnel (AO) en régime linéaire (i+ = i- = 0, Ud = 0)',
      'Établir les relations entrée/sortie des montages à AO : suiveur, amplificateur inverseur, non-inverseur, sommateur et comparateur'
    ],
    fullCourseContent: `1. Champ Électrostatique Uniforme et Énergie Potentielle :
- Force électrostatique de Coulomb : F⃗ = q · E⃗.
  * Si q > 0 : F⃗ et E⃗ ont même direction et même sens.
  * Si q < 0 : F⃗ et E⃗ ont même direction mais des sens opposés.
- Champ uniforme entre plaques parallèles distantes de d sous une tension U :
  E = U / d (exprimé en V/m ou N/C). E⃗ est dirigé de la plaque positive (+) vers la plaque négative (-) (sens des potentiels décroissants).
- Travail de la force électrostatique : W_AB(F⃗) = q · E⃗ · AB⃗ = q (VA - VB) = q · U_AB.
  * Le travail est indépendant du chemin suivi (force conservative).
- Énergie potentielle électrostatique : Ep(M) = q · VM.

2. Le Condensateur :
- Constitution : Deux armatures conductrices en regard séparées par un isolant diélectrique (air, mica, céramique).
- Relation charge-tension : Q = C · U (Q en Coulombs C, C en Farads F, U en Volts V).
- Capacité d'un condensateur plan : C = (ε0 · εr · S) / d avec ε0 = 8,85 × 10^-12 F/m.
- Associations de condensateurs :
  * En parallèle (dérivation) : C_eq = C1 + C2 + ... + Cn. Même tension U, charges cumulées Q = ∑Qi.
  * En série : 1 / C_eq = 1/C1 + 1/C2 + ... + 1/Cn (pour 2 : C_eq = (C1·C2)/(C1+C2)). Même charge Q, tensions cumulées U = ∑Ui.
- Énergie emmagasinée : E_e = 1/2 C U² = 1/2 Q U = 1/2 Q² / C (en Joules J).

3. L'Amplificateur Opérationnel (AO) :
- Boîtier à 8 bornes :
  * Borne 2 : Entrée inverseuse (E-).
  * Borne 3 : Entrée non-inverseuse (E+).
  * Borne 6 : Sortie (S).
  * Bornes 4 et 7 : Alimentations symétriques -Vcc et +Vcc.
- Caractéristiques de l'AO idéal en Régime Linéaire (bouclage sur l'entrée inverseuse E-) :
  * Courants d'entrée nuls (impédance d'entrée infinie) : i+ = i- = 0.
  * Tension différentielle nulle : Ud = V+ - V- = 0 => V+ = V-.
  * Tension de sortie bornée : |Us| ≤ Vsat (avec Vsat ≈ Vcc - 1,5 V).
- Montages fondamentaux en régime linéaire :
  1. Montage Suiveur : Ue reliée à E+, sortie S bouclée directement sur E-.
     Us = Ue (Gain G = 1, sert d'adaptateur d'impédance).
  2. Amplificateur Inverseur : Entrée E+ à la masse (V+ = 0). Résistance R1 en entrée sur E-, R2 en boucle de réaction entre S et E-.
     Us = - (R2 / R1) · Ue. Gain en tension G = |Us / Ue| = R2 / R1.
  3. Amplificateur Non-Inverseur : Ue appliquée sur E+. Diviseur de tension R1, R2 sur E-.
     Us = (1 + R2 / R1) · Ue. Gain G = 1 + R2 / R1 ≥ 1.
  4. Montage Sommateur Inverseur : Deux entrées U1 (via R1) et U2 (via R2) sur E-, réaction R3 sur S.
     Us = - R3 [ (U1 / R1) + (U2 / R2) ]. Si R1 = R2 = R3 : Us = - (U1 + U2).
- Régime Saturé (sans boucle de réaction, boucle ouverte) :
  * Ud ≠ 0. Si V+ > V- (Ud > 0) => Us = +Vsat. Si V+ < V- (Ud < 0) => Us = -Vsat.
  * Montage Comparateur : compare une tension variable à une tension de référence.`,
    definitions: [
      {
        term: 'Amplificateur Opérationnel idéal',
        definition: 'Composant électronique intégré linéaire caractérisé par un gain différentiel infini, des courants d\'entrée nuls (i+ = i- = 0) et une tension différentielle nulle en régime linéaire (V+ = V-).'
      },
      {
        term: 'Capacité d\'un condensateur',
        definition: 'Coefficient de proportionnalité reliant la charge électrique accumulée sur l\'armature positive à la tension appliquée entre ses bornes : C = Q / U.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle d\'or de l\'AO en régime linéaire',
        statement: 'Dès qu\'une boucle de rétroaction relie la sortie S à l\'entrée inverseuse E-, l\'AO fonctionne en régime linéaire : i+ = i- = 0 et V+ = V- (Ud = 0).'
      }
    ],
    formulas: [
      {
        name: 'Amplificateur inverseur',
        formula: 'Us = - (R2 / R1) · Ue',
        explanation: 'Inverse le signe de la tension d\'entrée et multiplie par le rapport R2/R1.',
        unitOrCondition: 'Tant que |Us| < Vsat'
      },
      {
        name: 'Énergie d\'un condensateur',
        formula: 'E = 1/2 C · U²',
        explanation: 'C en Farads (F), U en Volts (V), E en Joules (J).',
        unitOrCondition: 'Charge complète ou partielle'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Établir la relation entrée/sortie d\'un montage à AO',
        procedure: '1. Vérifier la rétroaction négative (sortie reliée à E-) => Régime linéaire : i+ = i- = 0 et V+ = V-.\n2. Exprimer le potentiel V+ à l\'aide des données ou d\'un pont diviseur.\n3. Exprimer le potentiel V- à l\'aide de la loi des nœuds en termes de potentiels (Millman) ou de la loi des mailles.\n4. Égaler V+ = V- et isoler Us en fonction de Ue et des résistances.',
        tip: 'Toujours vérifier la condition de non-saturation : |Us| ≤ Vsat.'
      }
    ],
    examples: [
      {
        statement: 'Dans un montage amplificateur inverseur, on applique Ue = 2,0 V avec R1 = 1 kΩ et R2 = 2 kΩ. L\'alimentation est ±15 V (Vsat = 14 V). Calcule Us.',
        solution: 'Us = - (R2 / R1) × Ue = - (2 000 / 1 000) × 2,0 = - 2 × 2,0 = - 4,0 V.\nComme |-4 V| < 14 V, l\'AO reste bien en régime linéaire. Us = - 4,0 V.'
      }
    ],
    exercises: [
      {
        question: 'Deux condensateurs C1 = 2 μF et C2 = 3 μF sont associés en parallèle sous 100 V. Calcule la capacité équivalente et l\'énergie totale stockée.',
        correction: 'En parallèle : C_eq = C1 + C2 = 2 + 3 = 5 μF.\nÉnergie E = 1/2 C_eq U² = 1/2 × 5×10^-6 × 100² = 1/2 × 5×10^-6 × 10 000 = 0,025 J = 25 mJ.'
      }
    ],
    evaluationSituation: {
      context: 'Un groupe d\'élèves monte un sommateur inverseur à deux entrées avec R1 = 250 Ω, R2 = 250 Ω et R3 = 250 Ω. On injecte U1 = 4,0 V et U2 = 6,0 V. L\'AO est alimenté sous ±12 V (Vsat = 11 V).',
      instructions: [
        '1. Rappelle les propriétés de l\'AO idéal en régime linéaire.',
        '2. Écris l\'expression de Us en fonction de U1, U2 et des résistances.',
        '3. Calcule la valeur numérique de Us et vérifie si l\'AO est saturé.'
      ],
      solutionGuide: '1. Propriétés : i+ = i- = 0 (courants nuls) et Ud = V+ - V- = 0 => V+ = V-.\n2. Us = - R3 [(U1/R1) + (U2/R2)] = - (U1 + U2) car R1 = R2 = R3.\n3. Us = - (4,0 + 6,0) = - 10,0 V. Comme |-10 V| < 11 V, l\'AO n\'est pas saturé.'
    },
    examTraps: [
      'Confondre gain de l\'inverseur (R2/R1) et du non-inverseur (1 + R2/R1).',
      'Oublier que les condensateurs s\'additionnent en parallèle et s\'inversent en série (l\'inverse des résistances !).'
    ],
    quickMemo: 'E = U/d, F = qE. Condensateur : Q = CU, E = 1/2 CU². Parallèle : Ceq = C1+C2 ; Série : 1/Ceq = 1/C1 + 1/C2. AO linéaire : i+ = i- = 0, V+ = V-. Inverseur : Us = -(R2/R1)Ue. Non-inverseur : Us = (1+R2/R1)Ue.',
    keywords: ['champ électrostatique', 'condensateur', 'amplificateur opérationnel', 'suiveur', 'inverseur', 'sommateur', 'comparateur', 'régime linéaire']
  },

  // =========================================================================
  // 8. PHYSIQUE : OPTIQUE GÉOMÉTRIQUE ET LENTILLES MINCES
  // =========================================================================
  {
    id: 'pc-1ere-phys-optique-lentilles-minces',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Première C/D/E)',
    level: '1ere',
    levelLabel: '1ère C, D, E',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D',
    chapter: 'Physique - Optique Géométrique',
    lessonTitle: 'Lois de Descartes (Réflexion/Réfraction), Réflexion Totale et Lentilles Minces',
    objectifs: [
      'Énoncer et appliquer les lois de Descartes pour la réflexion (i = r) et la réfraction (n1 sin i1 = n2 sin i2)',
      'Déterminer l\'angle limite et les conditions de la réflexion totale (milieu plus réfringent vers moins réfringent)',
      'Distinguer lentilles minces convergentes et divergentes et calculer la vergence C = 1/f\' (théorème des vergences)',
      'Construire géométriquement l\'image d\'un objet et appliquer la formule de conjugaison et de grandissement'
    ],
    fullCourseContent: `1. Propagation de la Lumière et Lois de Descartes :
- Milieu transparent homogène et isotrope : La lumière s'y propage en ligne droite (principe de propagation rectiligne).
- Indice de réfraction d'un milieu : n = c / v (c = 3,0 × 10^8 m/s, v = vitesse de la lumière dans le milieu, n ≥ 1).
  * Exemples : Air n = 1,00 ; Eau n = 1,33 ; Verre n = 1,50 à 1,70 ; Diamant n = 2,42.
- Première loi de Descartes (réflexion et réfraction) : Le rayon réfléchi et le rayon réfracté sont contenus dans le plan d'incidence défini par le rayon incident et la normale à la surface.
- Deuxième loi pour la réflexion : L'angle de réflexion r est égal à l'angle d'incidence i (mesurés par rapport à la normale) : r = i.
- Deuxième loi pour la réfraction (Descartes-Snell) : n1 · sin i1 = n2 · sin i2.

2. Réflexion Totale :
- Condition indispensable : Le rayon passe d'un milieu plus réfringent vers un milieu moins réfringent (n1 > n2).
- Angle limite de réfraction L : Lorsque l'angle de réfraction atteint i2 = 90° (π/2 rad) :
  sin L = n2 / n1.
- Réflexion totale : Si l'angle d'incidence i1 > L, aucun rayon n'est réfracté : la totalité de la lumière est réfléchie par l'interface.
- Application industrielle : Fibre optique (télécommunications, endoscopie médicale, capteurs).

3. Les Lentilles Minces :
- Définition : Milieu transparent limité par deux calottes sphériques ou une calotte et un plan, dont l'épaisseur au centre est très faible.
  * Lentille convergente : Bords minces, centre épais. Symbole : double flèche vers l'extérieur. Foyers réels.
  * Lentille divergente : Bords épais, centre mince. Symbole : flèche inversée vers l'intérieur. Foyers virtuels.
- Éléments caractéristiques :
  * Centre optique O : Tout rayon passant par O n'est pas dévié.
  * Foyer principal image F' : Point de convergence de tous les rayons incidents parallèles à l'axe optique.
  * Foyer principal objet F : Symétrique de F' par rapport à O (OF = OF' = f).
  * Distance focale f' = OF' (positive pour une convergente, négative pour une divergente).
  * Vergence C : C = 1 / f' (exprimée en dioptries δ avec f' en mètres).
  * Théorème des vergences (lentilles minces accolées) : C_totale = C1 + C2.

4. Formules de Conjugaison et Grandissement (Relation de Descartes) :
- Formule de conjugaison : 1 / OA' - 1 / OA = 1 / OF' = C.
  (Avec les grandeurs algébriques mesurées selon le sens de propagation de la lumière).
- Formule du grandissement : γ = A'B' / AB = OA' / OA.
  * Si γ < 0 : L'image est renversée par rapport à l'objet.
  * Si γ > 0 : L'image est droite.
  * Si |γ| > 1 : L'image est agrandie (principe de la loupe lorsque l'objet est entre F et O).
  * Si |γ| < 1 : L'image est réduite (principe de l'appareil photographique avec objet au-delà de 2F).`,
    definitions: [
      {
        term: 'Réfraction',
        definition: 'Changement brutal de direction que subit un faisceau lumineux lorsqu\'il traverse la surface de séparation de deux milieux transparents d\'indices différents.'
      },
      {
        term: 'Vergence (C)',
        definition: 'Inverse de la distance focale image d\'une lentille mince : C = 1 / f\', exprimée en dioptries (δ).'
      },
      {
        term: 'Réflexion totale',
        definition: 'Phénomène optique dans lequel un rayon lumineux abordant un milieu moins réfringent sous un angle supérieur à l\'angle limite est intégralement réfléchi sans réfraction.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Loi de Descartes-Snell pour la réfraction',
        statement: 'n1 · sin(i1) = n2 · sin(i2). Si n2 > n1, le rayon réfracté se rapproche de la normale (i2 < i1).'
      },
      {
        name: 'Théorème des vergences',
        statement: 'La vergence d\'un système de deux lentilles minces accolées est égale à la somme algébrique de leurs vergences : C = C1 + C2.'
      }
    ],
    formulas: [
      {
        name: 'Angle limite de réflexion totale',
        formula: 'sin L = n2 / n1',
        explanation: 'Uniquement valable si le milieu incident 1 est plus réfringent que le milieu 2 (n1 > n2).',
        unitOrCondition: 'i1 > L => réflexion totale'
      },
      {
        name: 'Formule de conjugaison des lentilles minces',
        formula: '1 / OA\' - 1 / OA = 1 / OF\'',
        explanation: 'En mesures algébriques. OF\' > 0 pour convergente, OF\' < 0 pour divergente.',
        unitOrCondition: 'Distances en mètres'
      },
      {
        name: 'Grandissement linéaire',
        formula: 'γ = A\'B\' / AB = OA\' / OA',
        explanation: 'Rapport de taille et de position algébrique.',
        unitOrCondition: 'Sans unité'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Construire l\'image d\'un objet AB à travers une lentille convergente',
        procedure: '1. Tracer le rayon 1 issu de B passant par le centre optique O : il se propage sans déviation.\n2. Tracer le rayon 2 issu de B parallèle à l\'axe optique : il émerge en passant par le foyer image F\'.\n3. Tracer le rayon 3 issu de B passant par le foyer objet F : il émerge parallèlement à l\'axe optique.\n4. L\'intersection de ces rayons (ou de leurs prolongements) définit l\'image B\'. Projeter orthogonalement sur l\'axe pour trouver A\'.',
        tip: 'Deux rayons suffisent pour déterminer géométriquement la position de l\'image.'
      }
    ],
    examples: [
      {
        statement: 'Un rayon arrive avec une incidence i1 = 45° sur la surface d\'une eau d\'indice n2 = 1,33 depuis l\'air (n1 = 1,00). Calcule l\'angle de réfraction i2.',
        solution: 'n1 · sin i1 = n2 · sin i2 => sin i2 = (n1 · sin i1) / n2 = (1,00 × sin 45°) / 1,33 = 0,707 / 1,33 = 0,5317.\ni2 = arcsin(0,5317) = 32,1° (le rayon se rapproche de la normale car l\'eau est plus réfringente).'
      }
    ],
    exercises: [
      {
        question: 'Une lentille L1 de vergence C1 = -5 δ et une lentille L2 de distance focale f2 = +20 cm sont accolées. Calcule la vergence totale C du système.',
        correction: 'Vergence de L2 : C2 = 1 / f2 = 1 / 0,20 m = +5 δ.\nThéorème des vergences pour deux lentilles accolées : C = C1 + C2 = -5 δ + 5 δ = 0 δ.\nLe système se comporte comme une lame à faces parallèles sans pouvoir convergent.'
      }
    ],
    evaluationSituation: {
      context: 'Un groupe d\'élèves place un objet réel AB de hauteur 10 cm perpendiculairement à l\'axe d\'une lentille convergente de distance focale f = 20 cm, à une distance OA = -50 cm.',
      instructions: [
        '1. Énonce la formule de conjugaison et celle du grandissement.',
        '2. Calcule la position algébrique OA\' de l\'image.',
        '3. Détermine la nature, le sens et la taille de l\'image A\'B\'.'
      ],
      solutionGuide: '1. Formule de conjugaison : 1/OA\' - 1/OA = 1/OF\'. Grandissement : γ = OA\' / OA = A\'B\' / AB.\n2. 1/OA\' = 1/OF\' + 1/OA = 1/20 + 1/(-50) = 5/100 - 2/100 = 3/100 => OA\' = 100/3 ≈ +33,3 cm.\n3. OA\' > 0 donc l\'image est RÉELLE (située après la lentille).\nGrandissement γ = (+33,3) / (-50) = -0,67. Comme γ < 0, l\'image est RENVERSÉE.\nTaille A\'B\' = |γ| × AB = 0,67 × 10 cm = 6,7 cm (image plus petite que l\'objet).'
    },
    examTraps: [
      'Oublier les signes algébriques : OA est TOUJOURS négatif pour un objet réel situé avant la lentille.',
      'Oublier que la réflexion totale est STRICTEMENT IMPOSSIBLE lorsqu\'on passe d\'un milieu moins réfringent à un milieu plus réfringent (il faut obligatoirement n1 > n2).'
    ],
    quickMemo: 'Descartes réfraction : n1 sin i1 = n2 sin i2. Réflexion totale : sin L = n2/n1 (si n1 > n2). Lentilles : C = 1/f\'. Conjugaison : 1/OA\' - 1/OA = 1/OF\'. Grandissement : γ = OA\'/OA = A\'B\'/AB.',
    keywords: ['Descartes', 'réflexion', 'réfraction', 'réflexion totale', 'fibre optique', 'lentilles minces', 'vergence', 'conjugaison', 'grandissement', 'loupe']
  }
];
