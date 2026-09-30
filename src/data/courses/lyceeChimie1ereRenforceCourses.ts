import { OfficialIvorianCourse } from '../../types';

export const LYCEE_CHIMIE_1ERE_RENFORCE_COURSES: OfficialIvorianCourse[] = [
  // =========================================================================
  // 1. CHIMIE MINÉRALE : TESTS D'IDENTIFICATION DES IONS & GÉNÉRALITÉS REDOX
  // =========================================================================
  {
    id: 'pc-1ere-chim-tests-ions-redox-solutions',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Première C/D/E)',
    level: '1ere',
    levelLabel: '1ère C & D',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D (Cameroun & Afrique Subsaharienne)',
    chapter: 'Chimie Minérale - Oxydoréduction en Solution Aqueuse',
    lessonTitle: 'Tests d\'Identification des Cations Métalliques et Action des Acides sur les Métaux',
    objectifs: [
      'Identifier expérimentalement les cations métalliques (Ag+, Al3+, Cu2+, Fe2+, Fe3+, Zn2+) par la soude NaOH et l\'ammoniac NH3',
      'Mettre en évidence le caractère amphotère des hydroxydes d\'aluminium Al(OH)3 et de zinc Zn(OH)2 solubles dans un excès de soude',
      'Interpréter l\'action des acides minéraux dilués (HCl, H2SO4) sur les métaux usuels (Al, Fe, Zn) avec dégagement de dihydrogène',
      'Définir l\'oxydation, la réduction, l\'oxydant et le réducteur comme un transfert d\'électrons'
    ],
    fullCourseContent: `I. RAPPELS SUR LES SOLUTIONS AQUEUSES ET TESTS D'IDENTIFICATION DES CATIONS MÉTALLIQUES :

1. Définitions fondamentales :
- Une solution aqueuse est un mélange homogène de soluté dissous dans l'eau (solvant).
- Une solution ionique conduit le courant électrique grâce aux ions hydratés (cations chargés positivement et anions chargés négativement).
- Règle de neutralité électrique : Toute solution aqueuse contient rigoureusement autant de charges élémentaires positives que de charges élémentaires négatives.

2. Protocole et observations des tests caractéristiques :
Dans des tubes à essai contenant 2 mL d'une solution du cation métallique étudié, on verse goutte à goutte une solution d'hydroxyde de sodium (Na+ + HO-) puis on teste l'action d'un excès de soude ou d'ammoniac NH3 :
- Cu2+ (couleur initiale bleue) :
  * Précipité bleu gélatineux d'hydroxyde de cuivre II Cu(OH)2 : Cu2+ + 2 HO- ⟶ Cu(OH)2.
  * Excès de soude HO- : Insoluble.
  * En présence d'ammoniac NH3 en excès : Se dissout en donnant une coloration bleu céleste limpide due au complexe tétramminecuivre(II) [Cu(NH3)4]2+.
- Al3+ (couleur initiale incolore) :
  * Précipité blanc d'hydroxyde d'aluminium Al(OH)3 : Al3+ + 3 HO- ⟶ Al(OH)3.
  * Excès de soude HO- : Se redissout totalement (amphotérie de l'aluminium) pour former l'ion aluminate [Al(OH)4]- (ou AlO2-).
  * En présence d'ammoniac NH3 : Reste insoluble.
- Zn2+ (couleur initiale incolore) :
  * Précipité blanc d'hydroxyde de zinc Zn(OH)2 : Zn2+ + 2 HO- ⟶ Zn(OH)2.
  * Excès de soude HO- : Se redissout totalement pour former l'ion tétrahydroxozincate [Zn(OH)4]2- (amphotérie).
  * En présence d'ammoniac NH3 : Se redissout également pour former le complexe tétramminezinc(II) [Zn(NH3)4]2+.
- Ag+ (couleur initiale incolore) :
  * Précipité blanc d'hydroxyde d'argent AgOH qui brunit spontanément en oxyde d'argent Ag2O : 2 Ag+ + 2 HO- ⟶ Ag2O (s) + H2O.
  * Avec les ions chlorures Cl- : Précipité blanc de chlorure d'argent AgCl qui noircit à la lumière.
  * En présence d'ammoniac NH3 : Précipité soluble (complexe diamminesilver(I) [Ag(NH3)2]+).
- Fe2+ (couleur initiale vert pâle) :
  * Précipité vert d'hydroxyde de fer II Fe(OH)2 : Fe2+ + 2 HO- ⟶ Fe(OH)2.
  * Au contact de l'air : Le précipité rougit progressivement à sa surface car Fe2+ est oxydé par le dioxygène de l'air en hydroxyde de fer III Fe(OH)3.
- Fe3+ (couleur initiale jaune à orangée) :
  * Précipité rouille caractéristique d'hydroxyde de fer III Fe(OH)3 : Fe3+ + 3 HO- ⟶ Fe(OH)3. Insoluble dans un excès de soude.

II. ACTION D'UNE SOLUTION ACIDE SUR UN MÉTAL :

1. Expérience de l'attaque des métaux par HCl ou H2SO4 dilué :
- Dans 5 tubes à essai contenant respectivement de la poudre d'aluminium Al, de la limaille de fer Fe, de la poudre de zinc Zn, un morceau d'argent Ag et une lame de cuivre Cu, on ajoute de l'acide chlorhydrique (H3O+ + Cl-) ou sulfurique (2 H3O+ + SO4(2-)) :
  * Tubes Al, Fe, Zn : Effervescence vive, réaction exothermique, dégagement d'un gaz incolore qui produit une détonation caractéristique ("boum") à l'approche d'une bûchette allumée : c'est le dihydrogène H2.
  * Tubes Ag et Cu : Aucune réaction observable, même après un temps prolongé.

2. Équations électroniques et bilans :
- Les métaux Al, Fe et Zn cèdent des électrons (perte d'électrons = oxydation) captés par les protons hydronium H3O+ (gain d'électrons = réduction) :
  * Aluminium : 2 Al + 6 H3O+ ⟶ 2 Al3+ + 3 H2 (g) + 6 H2O.
  * Fer : Fe + 2 H3O+ ⟶ Fe2+ + H2 (g) + 2 H2O. (Attention : l'acide non oxydant HCl n'oxyde le fer qu'à l'état de Fe2+, jamais Fe3+ !).
  * Zinc : Zn + 2 H3O+ ⟶ Zn2+ + H2 (g) + 2 H2O.
- Les ions chlorures Cl- et sulfates SO4(2-) n'interviennent pas : ce sont des ions spectateurs (ou indifférents).
- Conclusion : Al, Fe et Zn sont plus électropositifs (plus réducteurs) que H2. Le cuivre Cu et l'argent Ag sont moins réducteurs que H2 et ne peuvent pas être oxydés par H3O+.

III. ACTION D'UN ION MÉTALLIQUE SUR UN MÉTAL & DÉFINITIONS FONDAMENTALES :

1. Déplacement des métaux :
- Lame de cuivre Cu immergée dans Fe2+ ou Zn2+ : Aucune réaction.
- Lame de zinc Zn immergée dans une solution bleue de sulfate de cuivre (Cu2+ + SO4(2-)) :
  * Décoloration progressive du bleu de la solution (consommation des ions Cu2+).
  * Dépôt de cuivre métallique rouge sur le zinc : Zn + Cu2+ ⟶ Zn2+ + Cu.
- Pointe de fer Fe immergée dans le sulfate de cuivre Cu2+ :
  * La solution vire au vert pâle (formation d'ions Fe2+).
  * Dépôt de cuivre rouge sur le fer : Fe + Cu2+ ⟶ Fe2+ + Cu.

2. Définitions unifiées :
- Oxydation : Transformation chimique au cours de laquelle une espèce chimique perd un ou plusieurs électrons.
- Réduction : Transformation chimique au cours de laquelle une espèce chimique gagne un ou plusieurs électrons.
- Oxydant : Espèce chimique capable de capter des électrons.
- Réducteur : Espèce chimique capable de céder des électrons.
- Réaction d'oxydoréduction : Réaction de transfert simultané d'électrons entre le réducteur d'un couple et l'oxydant d'un autre couple.`,
    definitions: [
      {
        term: 'Oxydation',
        definition: 'Perte d\'un ou de plusieurs électrons par une entité chimique.'
      },
      {
        term: 'Réduction',
        definition: 'Gain d\'un ou de plusieurs électrons par une entité chimique.'
      },
      {
        term: 'Amphotérie d\'un hydroxyde',
        definition: 'Propriété d\'un hydroxyde insoluble (ex: Al(OH)3, Zn(OH)2) capable de se redissoudre aussi bien en milieu acide qu\'en présence d\'un excès de base forte (soude).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de réactivité avec H3O+',
        statement: 'Seuls les métaux dont le potentiel standard est inférieur à 0,00 V (plus réducteurs que H2, ex: Al, Zn, Fe) sont attaqués par l\'acide chlorhydrique ou sulfurique dilué avec dégagement de H2.'
      },
      {
        name: 'Caractérisation du dihydrogène',
        statement: 'Le dihydrogène H2 s\'enflamme avec une petite explosion caractéristique ("aboiement" ou "boum") à l\'approche d\'une flamme.'
      }
    ],
    formulas: [
      {
        name: 'Attaque du fer par l\'acide chlorhydrique',
        formula: 'Fe (s) + 2 H3O+ (aq) ⟶ Fe2+ (aq) + H2 (g) + 2 H2O (l)',
        explanation: 'Oxydation ménagée du fer métallique en ions ferreux Fe2+ (solution vert pâle).',
        unitOrCondition: 'Acide dilué non oxydant'
      },
      {
        name: 'Attaque de l\'aluminium',
        formula: '2 Al (s) + 6 H3O+ (aq) ⟶ 2 Al3+ (aq) + 3 H2 (g) + 6 H2O (l)',
        explanation: 'Transfert de 6 électrons au total.',
        unitOrCondition: 'Aluminium décapé'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier un cation métallique inconnu en solution',
        procedure: '1. Noter la couleur de la solution initiale (bleu = Cu2+, vert pâle = Fe2+, jaune-orangé = Fe3+, incolore = Al3+, Zn2+, Ag+).\n2. Verser goutte à goutte NaOH : noter la couleur du précipité (bleu = Cu(OH)2, blanc = Al(OH)3 ou Zn(OH)2, vert = Fe(OH)2 qui brunit, rouille = Fe(OH)3).\n3. Ajouter un excès de NaOH : si le précipité blanc se redissout, le cation est Al3+ ou Zn2+.\n4. Sur un nouveau tube avec NH3 : si le précipité blanc se redissout, c\'est Zn2+ ; s\'il reste insoluble, c\'est Al3+.',
        tip: 'Le test à l\'ammoniac NH3 permet de trancher infailliblement entre Al3+ et Zn2+.'
      }
    ],
    examples: [
      {
        statement: 'Une solution incolore donne un précipité blanc avec NaOH. Ce précipité se dissout dans un excès de NaOH mais reste insoluble lorsqu\'on ajoute une solution aqueuse d\'ammoniac. Quel est le cation ?',
        solution: 'Le précipité blanc soluble dans un excès de soude caractérise un hydroxyde amphotère (Al3+ ou Zn2+). Son insolubilité dans l\'ammoniac NH3 élimine Zn2+ et prouve avec certitude la présence de l\'ion aluminium Al3+.'
      }
    ],
    exercises: [
      {
        question: 'On plonge une lame de fer dans 100 mL d\'une solution de sulfate de cuivre II de concentration C = 0,2 mol/L. Écris l\'équation-bilan et calcule la masse de cuivre déposée lorsque tous les ions Cu2+ ont réagi.',
        correction: 'Équation : Fe (s) + Cu2+ (aq) ⟶ Fe2+ (aq) + Cu (s).\nQuantité de Cu2+ initiale : n = C × V = 0,2 × 0,100 = 0,02 mol.\nD\'après les coefficients stœchiométriques, n(Cu) formé = n(Cu2+) consommé = 0,02 mol.\nMasse de cuivre déposée : m(Cu) = n × M(Cu) = 0,02 × 63,5 = 1,27 g.'
      }
    ],
    evaluationSituation: {
      context: 'Au laboratoire de chimie, un laborantin découvre trois flacons non étiquetés contenant respectivement une solution de chlorure de cuivre (CuCl2), de chlorure de fer II (FeCl2) et de chlorure de zinc (ZnCl2). Il dispose de soude (NaOH), d\'ammoniac (NH3) et de limaille de fer.',
      instructions: [
        '1. Propose une démarche expérimentale rigoureuse pour identifier le contenu de chaque flacon.',
        '2. Précise les équations-bilans des réactions de précipitation observées.',
        '3. Indique ce qui se produirait si on plongeait la limaille de fer dans le flacon de chlorure de cuivre.'
      ],
      solutionGuide: '1. Démarche : Observer la couleur : le flacon bleu est CuCl2, le vert pâle est FeCl2, l\'incolore est ZnCl2. Pour confirmer, ajouter NaOH : précipité bleu pour Cu2+, vert rougissant à l\'air pour Fe2+, blanc pour Zn2+. Ajouter un excès de NaOH au précipité blanc : il se redissout totalement, confirmant Zn(OH)2.\n2. Équations : Cu2+ + 2 HO- ⟶ Cu(OH)2 (s) ; Fe2+ + 2 HO- ⟶ Fe(OH)2 (s) ; Zn2+ + 2 HO- ⟶ Zn(OH)2 (s).\n3. Avec la limaille de fer dans CuCl2 : Fe + Cu2+ ⟶ Fe2+ + Cu. Dépôt de cuivre rouge sur le fer et décoloration de la solution bleue qui vire au vert pâle.'
    },
    examTraps: [
      'Confondre Al(OH)3 et Zn(OH)2 : les deux sont solubles dans l\'excès de NaOH, mais seul Zn(OH)2 est soluble dans l\'ammoniac NH3.',
      'Croire que l\'acide chlorhydrique oxyde le cuivre : Cu ne réagit PAS avec HCl ou H2SO4 dilué car son potentiel standard (+0,34 V) est supérieur à celui de H3O+/H2 (0,00 V).'
    ],
    quickMemo: 'Cu2+ = bleu ⟶ Cu(OH)2 bleu (NH3 ⟶ bleu céleste). Fe2+ = vert ⟶ Fe(OH)2 vert vire rouille. Fe3+ = jaune ⟶ Fe(OH)3 rouille. Al3+ = blanc soluble excès NaOH, insoluble NH3. Zn2+ = blanc soluble excès NaOH ET soluble NH3.',
    keywords: ['cations métalliques', 'hydroxyde de sodium', 'ammoniac', 'amphotérie', 'oxyde d\'argent', 'précipité', 'acide chlorhydrique', 'dihydrogène', 'oxydoréduction', 'transfert d\'électrons']
  },

  // =========================================================================
  // 2. CHIMIE MINÉRALE : COUPLES REDOX, PILES, ÉLECTROLYSE & CORROSION
  // =========================================================================
  {
    id: 'pc-1ere-chim-couples-redox-piles-electrolyse',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Première C/D/E)',
    level: '1ere',
    levelLabel: '1ère C & D',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D (Cameroun & Afrique Subsaharienne)',
    chapter: 'Chimie Minérale - Électrochimie et Oxydoréduction Quantitative',
    lessonTitle: 'Classification Électrochimique, Piles, Électrolyse et Protection contre la Corrosion',
    objectifs: [
      'Classer les couples oxydant-réducteur selon leur pouvoir oxydant croissant (POC) et réducteur croissant (PRC)',
      'Appliquer la règle du gamma (γ) pour prévoir le sens spontané d\'une réaction et vérifier la condition de réaction totale (ΔE° ≥ 0,30 V)',
      'Décrire la constitution, le fonctionnement et la f.é.m. de la pile Daniell et des piles de référence (ESH, couple Cu2+/Cu)',
      'Écrire les réactions aux électrodes d\'une électrolyse (cuve à anode soluble, décomposition de l\'eau) et expliquer la protection du fer contre la corrosion'
    ],
    fullCourseContent: `I. NOTION DE COUPLE OXYDANT-RÉDUCTEUR ET CLASSIFICATION QUALITATIVE :

1. Définition du couple redox (Ox/Red) :
- Un couple oxydant-réducteur est constitué de deux espèces chimiques conjuguées qui se transforment l'une en l'autre par gain ou perte de n électrons : Ox + n e- ⇄ Red.
- Par convention internationale, la forme oxydée Ox s'écrit toujours en premier : Mn+/M, Cu2+/Cu, Fe3+/Fe2+, MnO4-/Mn2+.

2. Règle du Gamma (γ) et prévision des réactions :
- Sur un axe vertical orienté vers le haut selon le Pouvoir Oxydant Croissant (POC) et vers le bas selon le Pouvoir Réducteur Croissant (PRC) :
  Au3+/Au (1,50 V) > Pt2+/Pt (1,00 V) > Hg2+/Hg (0,86 V) > Ag+/Ag (0,80 V) > Fe3+/Fe2+ (0,77 V) > I2/I- (0,54 V) > Cu2+/Cu (0,34 V) > H3O+/H2 (0,00 V) > Pb2+/Pb (-0,13 V) > Sn2+/Sn (-0,14 V) > Ni2+/Ni (-0,23 V) > Fe2+/Fe (-0,44 V) > Zn2+/Zn (-0,76 V) > Al3+/Al (-1,66 V) > Mg2+/Mg (-2,37 V) > Na+/Na (-2,71 V).
- Règle fondamentale : L'oxydant le plus fort réagit spontanément avec le réducteur le plus fort pour donner l'oxydant le plus faible et le réducteur le plus faible.
  Ox1 + Red2 ⟶ Ox2 + Red1 (si E°1 > E°2).
- Critère de réaction totale : Si ΔE° = E°(Ox1) - E°(Ox2) ≥ 0,30 V, la réaction est considérée comme quantitative et totale.

II. PILES ÉLECTROCHIMIQUES ET POTENTIELS STANDARDS :

1. La Pile Daniell (Zinc - Cuivre) :
- Constitution :
  * Pôle négatif (-) = ANODE : Lame de zinc plongeant dans une solution de sulfate de zinc (Zn2+ + SO4(2-)). Siège d'une OXYDATION : Zn (s) ⟶ Zn2+ (aq) + 2 e-. L'électrode de zinc s'amincit.
  * Pôle positif (+) = CATHODE : Lame de cuivre plongeant dans une solution de sulfate de cuivre (Cu2+ + SO4(2-)). Siège d'une RÉDUCTION : Cu2+ (aq) + 2 e- ⟶ Cu (s). L'électrode de cuivre s'épaissit.
  * Pont salin (électrolytique) : Tube en U contenant un gel saturé en KCl ou KNO3. Rôles : fermer le circuit électrique et assurer la neutralité électrique des deux compartiments (les ions K+ migrent vers la cathode et Cl- vers l'anode).
- Schéma conventionnel : (-) Zn | Zn2+ (1 mol/L) || Cu2+ (1 mol/L) | Cu (+)
- Force électromotrice standard : E = V(+) - V(-) = E°(Cu2+/Cu) - E°(Zn2+/Zn) = 0,34 - (-0,76) = 1,10 V.

2. Électrode Standard à Hydrogène (ESH) et mesure de E° :
- Lame de platine platiné inattaquable où barbote du dihydrogène H2 gazeux à la pression P = 1 bar, plongeant dans une solution acide de pH = 0 ([H3O+] = 1 mol/L).
- Par convention universelle : E°(H3O+/H2) = 0,00 V à toute température.
- Potentiel standard d'un couple E°(Mn+/M) : Force électromotrice de la pile constituée en associant la demi-pile Mn+/M à l'ESH.

III. ÉLECTROLYSE EN SOLUTION AQUEUSE (RÉACTIONS FORCÉES) :

1. Principe de l'électrolyse :
- Réaction d'oxydoréduction forcée provoquée par le passage d'un courant continu fourni par un générateur extérieur. Le bilan est l'inverse de la réaction spontanée.
- Anode reliée au pôle positif du générateur : Siège d'une OXYDATION.
- Cathode reliée au pôle négatif du générateur : Siège d'une RÉDUCTION.
- Loi quantitative de Faraday : Q = I · Δt = n(e-) · F, avec F = 96 500 C/mol.

2. Exemples classiques :
- Électrolyse du bromure de cuivre II (CuBr2) avec électrodes de graphite :
  * Cathode (-) : Cu2+ + 2 e- ⟶ Cu (dépôt rouge métallique).
  * Anode (+) : 2 Br- ⟶ Br2 (gaz dibrome jaunit l'hexane) + 2 e-.
  * Bilan : Cu2+ + 2 Br- ⟶ Cu + Br2.
- Électrolyse de sulfate de cuivre à ANODE SOLUBLE en cuivre :
  * Anode de cuivre brut : Cu (anode) ⟶ Cu2+ + 2 e- (l'anode se ronge).
  * Cathode de cuivre pur : Cu2+ + 2 e- ⟶ Cu (cathode) (cuivre affiné se dépose).
  * Bilan : Cu (impur) ⟶ Cu (pur). La concentration en Cu2+ et la couleur bleue restent rigoureusement constantes.

IV. CORROSION DU FER ET MÉTHODES DE LUTTE :

1. Mécanisme électrochimique de formation de la rouille :
- Action conjuguée de l'eau, du dioxygène O2 dissous et accélérée par le sel NaCl :
  * Étape 1 : Oxydation du fer en ions ferreux Fe ⟶ Fe2+ + 2 e- et réduction de l'oxygène dissous : O2 + 2 H2O + 4 e- ⟶ 4 HO-. Formation d'hydroxyde de fer II : Fe2+ + 2 HO- ⟶ Fe(OH)2 (s).
  * Étape 2 : Oxydation poussée par O2 en rouille (oxyde de fer III hydraté Fe2O3 · xH2O).

2. Méthodes de protection :
- Revêtements protecteurs étanches : peintures, vernis, graisses, polymères plastiques.
- Revêtements métalliques :
  * Électrozingage ou galvanisation (recouvrement par du zinc).
  * Étamage (recouvrement par de l'étain).
- Protection cathodique :
  * Anode sacrificielle : Relier la coque en acier du navire ou une canalisation enterrée à un bloc métallique plus réducteur (Zinc Zn ou Magnésium Mg). Le zinc s'oxyde préférentiellement en protégeant le fer cathodique.
  * Courant imposé : Générateur débitant un faible potentiel protecteur.`,
    definitions: [
      {
        term: 'Pont salin (pont électrolytique)',
        definition: 'Dispositif reliant les deux demi-piles, assurant la continuité électrique par migration ionique sans mélange des solutions.'
      },
      {
        term: 'Anode sacrificielle',
        definition: 'Bloc d\'un métal plus réducteur que le fer (Zn, Mg) fixé à une structure en acier pour s\'oxyder à sa place et la protéger contre la corrosion.'
      },
      {
        term: 'Électrolyse',
        definition: 'Transformation chimique forcée par un apport d\'énergie électrique d\'un générateur, produisant une oxydation à l\'anode et une réduction à la cathode.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Moyen mnémotechnique des électrodes',
        statement: 'Voyelle avec Voyelle : Anode = Oxydation. Consonne avec Consonne : Cathode = Réduction. Valable aussi bien pour une pile que pour un électrolyseur !'
      },
      {
        name: 'Calcul de la force électromotrice E d\'une pile',
        statement: 'E = E°(pôle positif / cathode) - E°(pôle négatif / anode) > 0 dans les conditions standard.'
      }
    ],
    formulas: [
      {
        name: 'Force électromotrice de la pile Daniell',
        formula: 'E = E°(Cu2+/Cu) - E°(Zn2+/Zn) = 0,34 - (-0,76) = 1,10 V',
        explanation: 'Mesurée en circuit ouvert entre l\'électrode de cuivre (+) et de zinc (-).',
        unitOrCondition: 'Solutions à 1 mol/L et T = 25°C'
      },
      {
        name: 'Loi de Faraday pour l\'électrolyse',
        formula: 'm = (I · Δt · M) / (n · F)',
        explanation: 'Masse m déposée à l\'électrode, avec I en ampères, Δt en secondes, n nombre d\'électrons et F = 96 500 C/mol.',
        unitOrCondition: 'm en grammes'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer la polarité et la f.é.m. d\'une pile à partir des potentiels redox',
        procedure: '1. Comparer les potentiels E° des deux couples : le couple au potentiel le plus élevé constitue le pôle positif (+), celui au potentiel le plus bas constitue le pôle négatif (-).\n2. Écrire la réduction à la cathode (+) et l\'oxydation à l\'anode (-).\n3. Sommer les deux demi-équations pour trouver l\'équation-bilan spontanée.\n4. Calculer la f.é.m. : E = E°(+) - E°(-).\n5. Représenter la pile : (-) Réducteur1 | Oxydant1 || Oxydant2 | Réducteur2 (+).',
        tip: 'Le pôle négatif est toujours placé à gauche dans le schéma conventionnel.'
      }
    ],
    examples: [
      {
        statement: 'On réalise une pile avec les couples Ag+/Ag (E° = 0,80 V) et Cu2+/Cu (E° = 0,34 V). Détermine sa polarité, sa f.é.m. standard et son équation de fonctionnement.',
        solution: 'E°(Ag+/Ag) = 0,80 V > E°(Cu2+/Cu) = 0,34 V.\nPôle positif (+) : électrode d\'argent Ag (réduction : Ag+ + e- ⟶ Ag).\nPôle négatif (-) : électrode de cuivre Cu (oxydation : Cu ⟶ Cu2+ + 2 e-).\nSchéma conventionnel : (-) Cu | Cu2+ || Ag+ | Ag (+).\nf.é.m. standard : E = 0,80 - 0,34 = 0,46 V.\nÉquation-bilan : Cu (s) + 2 Ag+ (aq) ⟶ Cu2+ (aq) + 2 Ag (s).'
      }
    ],
    exercises: [
      {
        question: 'Lors de l\'électrolyse d\'une solution de sulfate de cuivre avec anode soluble, un courant d\'intensité I = 5 A passe pendant Δt = 32 minutes et 10 secondes. Calcule la masse de cuivre pur déposée à la cathode (M(Cu) = 63,5 g/mol, F = 96 500 C/mol).',
        correction: 'Δt = 32 × 60 + 10 = 1930 s.\nQuantité d\'électricité : Q = I × Δt = 5 × 1930 = 9 650 C.\nNombre de moles d\'électrons : n(e-) = Q / F = 9 650 / 96 500 = 0,10 mol.\nÀ la cathode : Cu2+ + 2 e- ⟶ Cu, d\'où n(Cu) = n(e-) / 2 = 0,05 mol.\nMasse déposée : m(Cu) = n(Cu) × M(Cu) = 0,05 × 63,5 = 3,175 g.'
      }
    ],
    evaluationSituation: {
      context: 'La coque en acier d\'un chalutier navigant dans l\'océan Atlantique est exposée à l\'eau salée. Pour empêcher sa détérioration rapide par la rouille, l\'armateur hésite entre fixer des blocs de zinc ou des plaques de cuivre.',
      instructions: [
        '1. Rappelle le mécanisme de formation de la rouille sur le fer.',
        '2. À l\'aide des potentiels E°(Zn2+/Zn) = -0,76 V, E°(Fe2+/Fe) = -0,44 V et E°(Cu2+/Cu) = +0,34 V, explique quel métal doit être impérativement choisi comme anode sacrificielle.',
        '3. Décris ce qui se produirait si on utilisait du cuivre à la place du zinc.'
      ],
      solutionGuide: '1. Mécanisme : Oxydation du fer Fe en Fe2+ simultanée à la réduction du dioxygène dissous O2 en ions HO-, formant Fe(OH)2 qui s\'oxyde en rouille Fe2O3.\n2. Choix : Il faut un métal plus réducteur que le fer (E° plus faible). E°(Zn2+/Zn) = -0,76 V < E°(Fe2+/Fe) = -0,44 V. Le zinc va donc s\'oxyder préférentiellement (Zn ⟶ Zn2+ + 2 e-) en maintenant le fer sous forme réduite métallique (cathode). Le zinc est donc l\'anode sacrificielle idoine.\n3. Si on utilisait du cuivre : E°(Cu2+/Cu) = +0,34 V > E°(Fe2+/Fe). Le couple Fe/Cu formerait une pile où le fer serait l\'anode négative ! La corrosion du fer serait catastrophiquement accélérée.'
    },
    examTraps: [
      'Confondre anode et cathode dans une pile vs un électrolyseur : l\'oxydation a TOUJOURS lieu à l\'anode, mais l\'anode est négative dans une pile et positive dans un électrolyseur.',
      'Oublier de multiplier la demi-équation par le nombre d\'électrons adéquat pour éliminer les électrons dans l\'équation-bilan.'
    ],
    quickMemo: 'Pile Daniell : (-) Zn | Zn2+ || Cu2+ | Cu (+), E = 1,10 V. Anode = Oxydation, Cathode = Réduction. Règle du gamma : Ox1 + Red2 ⟶ Ox2 + Red1 si E°1 > E°2. Faraday : Q = I·t = n_e·F.',
    keywords: ['pile Daniell', 'électrode standard à hydrogène', 'force électromotrice', 'règle du gamma', 'électrolyse', 'anode soluble', 'loi de Faraday', 'rouille', 'anode sacrificielle', 'protection cathodique']
  },

  // =========================================================================
  // 3. CHIMIE MINÉRALE : REDOX PAR VOIE SÈCHE, N.O. & APPLICATIONS INDUSTRIELLES
  // =========================================================================
  {
    id: 'pc-1ere-chim-voie-seche-no-industries',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Première C/D/E)',
    level: '1ere',
    levelLabel: '1ère C & D',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D (Cameroun & Afrique Subsaharienne)',
    chapter: 'Chimie Minérale - Oxydoréduction par Voie Sèche et Procédés Chimiques',
    lessonTitle: 'Oxydoréduction par Voie Sèche, Nombre d\'Oxydation, Sidérurgie et Synthèses Industrielles',
    objectifs: [
      'Distinguer les combustions avec transfert réel d\'électrons de celles sans transfert d\'électrons (composés covalents)',
      'Déterminer le nombre d\'oxydation (n.o.) d\'un élément dans un corps simple, un ion ou une molécule',
      'Équilibrer une réaction d\'oxydoréduction par la méthode des variations de nombres d\'oxydation (Δn.o.) et identifier une dismutation',
      'Décrire les procédés industriels fondamentaux : haut-fourneau (sidérurgie), aluminothermie, synthèse de l\'acide nitrique (Ostwald) et de l\'acide sulfurique (procédé de contact)'
    ],
    fullCourseContent: `I. COMBUSTIONS ET OXYDORÉDUCTION PAR VOIE SÈCHE :

1. Combustions avec transfert réel d'électrons (solides ioniques) :
- Combustion du ruban de magnésium dans le dioxygène :
  * Expérience : Le magnésium brûle avec une lumière blanche aveuglante en produisant des fumées blanches de microcristaux d'oxyde de magnésium (magnésie MgO).
  * Interprétation : 2 Mg (s) + O2 (g) ⟶ 2 MgO (s).
  * Transfert d'électrons direct : Mg ⟶ Mg2+ + 2 e- (oxydation) et O2 + 4 e- ⟶ 2 O2- (réduction). Solide ionique formé de Mg2+ et O2-.
- Action du dichlore sur le magnésium : Mg + Cl2 ⟶ MgCl2 (solide ionique blanc formé de Mg2+ et 2 Cl-).

2. Combustions sans transfert d'électrons (composés covalents) :
- Réaction entre H2 et O2 : 2 H2 (g) + O2 (g) ⟶ 2 H2O (l). La molécule d'eau est purement covalente.
- Réaction entre H2 et Cl2 : H2 (g) + Cl2 (g) ⟶ 2 HCl (g).
- Réaction entre le carbone et le dioxygène : C (s) + O2 (g) ⟶ CO2 (g).
  * Dans CO2, l'oxygène plus électronégatif attire les doublets électroniques (charge partielle 2δ- sur chaque O et 4δ+ sur C).
  * Il n'y a pas d'ions libres formés, mais un déplacement partiel de charges : nécessité du concept de nombre d'oxydation.

II. LE NOMBRE D'OXYDATION (N.O.) :

1. Définition et règles de calcul :
Le nombre d'oxydation (noté en chiffres romains : 0, +I, +II, -I, etc.) mesure l'état d'oxydation d'un élément dans une entité chimique :
- Règle 1 : Dans un corps simple ou atome isolé, n.o. = 0 (ex: Cu, Fe, C, H2, O2, Cl2, N2).
- Règle 2 : Dans un ion monoatomique, n.o. est égal à la charge algébrique de l'ion (ex: Na+ ⟶ +I ; Cu2+ ⟶ +II ; Fe3+ ⟶ +III ; Cl- ⟶ -I ; O2- ⟶ -II).
- Règle 3 : Dans une molécule neutre, la somme des nombres d'oxydation de tous les atomes est nulle : Σ n.o. = 0.
  * Dans la majorité des composés, n.o.(H) = +I (sauf dans les hydrures métalliques NaH où n.o. = -I).
  * n.o.(O) = -II (sauf dans les peroxydes H2O2 où n.o. = -I et OF2 où n.o. = +II).
- Règle 4 : Dans un ion polyatomique, la somme des n.o. est égale à la charge globale de l'ion :
  * Exemple de SO4(2-) : n.o.(S) + 4(-II) = -2 ⟹ n.o.(S) = +VI.
  * Exemple de MnO4- : n.o.(Mn) + 4(-II) = -1 ⟹ n.o.(Mn) = +VII.
  * Exemple de Cr2O7(2-) : 2 n.o.(Cr) + 7(-II) = -2 ⟹ 2 n.o.(Cr) = +12 ⟹ n.o.(Cr) = +VI.
  * Exemple de NH4+ : n.o.(N) + 4(+I) = +1 ⟹ n.o.(N) = -III.

2. Définitions unifiées par le nombre d'oxydation :
- Une oxydation correspond à une AUGMENTATION du nombre d'oxydation de l'élément (perte apparente d'électrons).
- Une réduction correspond à une DIMINUTION du nombre d'oxydation de l'élément (gain apparent d'électrons).
- Une réaction de DISMUTATION est une réaction redox au cours de laquelle un même élément à un degré d'oxydation donné s'oxyde et se réduit simultanément pour donner deux espèces différentes.
  Exemple : H2S (-II pour S) + SO2 (+IV pour S) ⟶ 3 S (0 pour S) + 2 H2O.

3. Méthode d'équilibrage par la variation des n.o. (Σ Δn.o. = 0) :
- Écrire le squelette des réactifs et produits.
- Identifier les éléments dont le n.o. varie et calculer Δn.o. = n.o.(final) - n.o.(initial).
- Ajuster les coefficients stœchiométriques des espèces oxydée et réduite pour que l'augmentation totale de n.o. compense exactement la diminution totale.
- Assurer enfin la conservation des autres éléments (O, H) et des charges.

III. APPLICATIONS INDUSTRIELLES MAJEURES :

1. La Sidérurgie (Haut-fourneau) :
- Réduction du minerai de fer (hématite Fe2O3) par le monoxyde de carbone CO produit in situ à haute température (~2000°C) :
  * Étape 1 (production du réducteur gazeux) : 2 C + O2 ⟶ 2 CO.
  * Étape 2 (réduction du minerai de fer) : Fe2O3 + 3 CO ⟶ 2 Fe + 3 CO2.
  * On obtient de la fonte (fer à 3-5% de carbone) qui est ensuite affinée en acier.

2. L'Aluminothermie :
- Réduction d'un oxyde métallique (Fe2O3) par la poudre d'aluminium :
  Fe2O3 (s) + 2 Al (s) ⟶ Al2O3 (s) + 2 Fe (l).
- Réaction extrêmement exothermique produisant du fer à l'état liquide incandescent (~2500°C), utilisée pour le soudage continu des rails de chemin de fer.

3. Préparation industrielle de l'acide nitrique HNO3 (Procédé Ostwald) :
- Étape 1 (oxydation catalytique de l'ammoniac sur toile de platine à 850°C) :
  4 NH3 + 5 O2 ⟶ 4 NO + 6 H2O.
- Étape 2 (oxydation spontanée de NO à l'air en dioxyde d'azote roux) :
  2 NO + O2 ⟶ 2 NO2.
- Étape 3 (absorption dans l'eau en présence de dioxygène) :
  4 NO2 + O2 + 2 H2O ⟶ 4 HNO3.
- Utilisation : fabrication d'engrais azotés (nitrates) et d'explosifs (TNT, nitrocellulose).

4. Préparation industrielle de l'acide sulfurique H2SO4 (Procédé de Contact) :
- Étape 1 (combustion du soufre) : S + O2 ⟶ SO2.
- Étape 2 (oxydation catalytique sur pentoxyde de vanadium V2O5 à 450°C) :
  2 SO2 + O2 ⇄ 2 SO3.
- Étape 3 (hydratation du trioxyde de soufre SO3 dans H2SO4 concentré pour former l'oléum H2S2O7 puis dilution) :
  SO3 + H2O ⟶ H2SO4.`,
    definitions: [
      {
        term: 'Nombre d\'oxydation (n.o.)',
        definition: 'Grandeur algébrique notée en chiffres romains mesurant le nombre de charges électriques portées par un atome s\'il était complètement ionique.'
      },
      {
        term: 'Dismutation',
        definition: 'Réaction d\'oxydoréduction où un même élément chimique agit simultanément comme oxydant et réducteur en évoluant vers deux degrés d\'oxydation différents.'
      },
      {
        term: 'Aluminothermie',
        definition: 'Réaction très exothermique de réduction d\'oxydes métalliques par l\'aluminium en poudre produisant le métal pur à l\'état liquide.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Critère redox basé sur le n.o.',
        statement: 'Une réaction est d\'oxydoréduction si et seulement si le nombre d\'oxydation d\'au moins un élément chimique varie entre l\'état initial et l\'état final.'
      },
      {
        name: 'Principe de conservation du n.o.',
        statement: 'Dans toute réaction chimique équilibrée, la somme algébrique des variations des nombres d\'oxydation de tous les atomes est strictement nulle : Σ Δn.o. = 0.'
      }
    ],
    formulas: [
      {
        name: 'Réduction du minerai de fer au haut-fourneau',
        formula: 'Fe2O3 + 3 CO ⟶ 2 Fe + 3 CO2',
        explanation: 'Fe passe de +III à 0 (diminution de 3 par atome) ; C passe de +II à +IV (augmentation de 2 par atome).',
        unitOrCondition: 'Température ~2000°C'
      },
      {
        name: 'Aluminothermie',
        formula: 'Fe2O3 + 2 Al ⟶ Al2O3 + 2 Fe',
        explanation: 'Réduction du fer (+III ⟶ 0) par l\'aluminium (0 ⟶ +III).',
        unitOrCondition: 'Fer produit liquide'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer le nombre d\'oxydation d\'un atome dans un édifice polyatomique',
        procedure: '1. Attribuer le n.o. des éléments usuels : H = +I, O = -II, alcalins = +I, halogènes = -I (sauf liaison avec un élément plus électronégatif).\n2. Poser l\'équation algébrique : Σ n.o. = 0 (pour une molécule neutre) ou Σ n.o. = charge q (pour un ion).\n3. Isoler et calculer le n.o. inconnu x.\n4. Écrire le résultat en chiffres romains précédé de son signe (+ ou -).',
        tip: 'Le n.o. du manganèse dans MnO4- vaut VII (+7), dans MnO2 il vaut IV (+4), et dans Mn2+ il vaut II (+2).'
      }
    ],
    examples: [
      {
        statement: 'Détermine si la réaction H3O+ + HO- ⟶ 2 H2O est une réaction d\'oxydoréduction.',
        solution: 'Dans H3O+ : n.o.(H) = +I, n.o.(O) = -II. Dans HO- : n.o.(H) = +I, n.o.(O) = -II. Dans H2O : n.o.(H) = +I, n.o.(O) = -II. Aucun élément ne subit de variation de son nombre d\'oxydation. Cette réaction n\'est donc PAS une réaction d\'oxydoréduction (c\'est une réaction acido-basique de neutralisation).'
      }
    ],
    exercises: [
      {
        question: 'Dans la synthèse de l\'acide nitrique, identifie les éléments oxydés et réduits lors de l\'étape catalytique : 4 NH3 + 5 O2 ⟶ 4 NO + 6 H2O.',
        correction: 'Dans NH3 : n.o.(N) = -III, n.o.(H) = +I.\nDans O2 : n.o.(O) = 0.\nDans NO : n.o.(N) = +II, n.o.(O) = -II.\nDans H2O : n.o.(H) = +I, n.o.(O) = -II.\nL\'azote N passe de -III à +II (augmentation de 5) : N subit une OXYDATION (NH3 est le réducteur).\nL\'oxygène O passe de 0 à -II (diminution de 2) : O subit une RÉDUCTION (O2 est l\'oxydant).'
      }
    ],
    evaluationSituation: {
      context: 'Pour réparer une voie ferrée isolée dans la région du Nord-Cameroun, les ingénieurs utilisent la technique de l\'aluminothermie en mélangeant 160 kg d\'oxyde de fer III Fe2O3 et de la poudre d\'aluminium en proportions stœchiométriques.',
      instructions: [
        '1. Écris l\'équation-bilan de la réaction d\'aluminothermie.',
        '2. Justifie par les nombres d\'oxydation qu\'il s\'agit bien d\'une réaction redox.',
        '3. Calcule la masse minimale de poudre d\'aluminium nécessaire et la masse de fer liquide obtenue (M(Fe)=56 g/mol, M(Al)=27 g/mol, M(O)=16 g/mol).'
      ],
      solutionGuide: '1. Fe2O3 (s) + 2 Al (s) ⟶ Al2O3 (s) + 2 Fe (l).\n2. Nombres d\'oxydation : Fe passe de +III dans Fe2O3 à 0 dans Fe métal (réduction). Al passe de 0 dans Al métal à +III dans Al2O3 (oxydation). La variation simultanée des n.o. confirme la nature redox.\n3. Masse molaire Fe2O3 = 2×56 + 3×16 = 160 g/mol. n(Fe2O3) = 160 000 g / 160 g/mol = 1000 mol.\nD\'après les stœchiométries :\nn(Al) nécessaire = 2 × n(Fe2O3) = 2000 mol ⟹ m(Al) = 2000 × 27 = 54 000 g = 54 kg d\'aluminium.\nn(Fe) produit = 2 × n(Fe2O3) = 2000 mol ⟹ m(Fe) = 2000 × 56 = 112 000 g = 112 kg de fer liquide.'
    },
    examTraps: [
      'Oublier d\'écrire les nombres d\'oxydation en CHIFFRES ROMAINS (ex: +III et non +3).',
      'Confondre le degré d\'oxydation avec la charge électrique réelle : le n.o. est une charge fictive dans les molécules covalentes comme CO2 ou SO2.'
    ],
    quickMemo: 'Corps simple = 0. H = +I (sauf hydrures), O = -II (sauf peroxydes). Σ n.o. = 0 (molécule) ou charge de l\'ion. Oxydation = hausse de n.o. Réduction = baisse de n.o. Haut fourneau : Fe2O3 + 3 CO ⟶ 2 Fe + 3 CO2.',
    keywords: ['voie sèche', 'nombre d\'oxydation', 'dismutation', 'haut fourneau', 'sidérurgie', 'aluminothermie', 'procédé Ostwald', 'acide nitrique', 'acide sulfurique', 'procédé de contact']
  },

  // =========================================================================
  // 4. CHIMIE MINÉRALE : SOLS, COMPLEXE ARGILO-HUMIQUE & ENGRAIS CHIMIQUES
  // =========================================================================
  {
    id: 'pc-1ere-chim-sols-cah-engrais-npk',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Première C/D/E)',
    level: '1ere',
    levelLabel: '1ère C & D',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D (Cameroun & Afrique Subsaharienne)',
    chapter: 'Chimie Minérale - Chimie Agricole et Environnement',
    lessonTitle: 'Composition des Sols, Complexe Argilo-Humique (CAH) et Engrais N-P-K',
    objectifs: [
      'Décrire les constituants minéraux et organiques du sol cultivable (terre arable)',
      'Expliquer le rôle régulateur du Complexe Argilo-Humique (CAH) et le mécanisme du pont calcique',
      'Classer les engrais minéraux simples (azotés, phosphatés, potassiques) et composés (binaires, ternaires N-P-K)',
      'Calculer les teneurs (%N, %P2O5, %K2O) et déterminer la formule d\'un mélange d\'engrais',
      'Analyser les risques écologiques liés à l\'excès d\'engrais (pollution des nappes par nitrates, eutrophisation par phosphates)'
    ],
    fullCourseContent: `I. LA COMPOSITION DES SOLS ET LE COMPLEXE ARGILO-HUMIQUE (CAH) :

1. Constituants du sol cultivable (terre arable) :
- Le sol provient de l'altération physique et chimique de la roche-mère sous l'action du climat, de l'eau et des êtres vivants.
- Constituants minéraux (décomposition des roches) :
  * Sable : silice SiO2 (grains grossiers, perméable à l'eau).
  * Argile : silicates d'aluminium et de fer feuilletés microscopiques portant des groupements silicates SiO4(4-).
  * Calcaire : carbonate de calcium CaCO3 (tampon de pH). Sol calcaire (pH > 7), sol argileux (pH < 7).
- Constituants organiques (l'humus) :
  * Provient de la biodégradation des débris végétaux et animaux par les micro-organismes du sol. L'humus confère à la terre sa couleur sombre et comporte des groupements carboxylates R-COO-.

2. Le Complexe Argilo-Humique (C.A.H.) :
- Structure : Association intime des particules d'argile (chargées négativement par SiO4(4-)) et des macromolécules d'humus (chargées négativement par R-COO-).
- Fixation des cations : Le CAH porte une charge globale négative qui lui permet d'adsorber à sa surface les cations nutritifs du sol : H3O+, NH4+, Ca2+, Mg2+, K+, Fe2+, Al3+...
- Rôle biologique capital :
  * C'est le réservoir d'ions nourriciers de la plante.
  * Il empêche le lessivage des cations par l'eau de pluie.
  * Il échange réversiblement ces cations avec la solution du sol au voisinage des poils absorbants des racines.
- Le cas particulier des anions et le PONT CALCIQUE :
  * Les anions solubles (NO3-, Cl-) ne sont PAS retenus par le CAH car ils sont repoussés par les charges négatives (ils sont facilement lessivés vers les nappes phréatiques).
  * Exception remarquable : L'ion phosphate PO4(3-) est fixé sur le CAH grâce à l'intermédiaire d'un cation bivalent, l'ion calcium Ca2+, qui joue le rôle de pont électrostatique : [Argile-]- ··· Ca2+ ··· [O-PO3(2-)]. C'est le PONT CALCIQUE.

II. LES BESOINS DES PLANTES ET LA NUTRITION MINÉRALE :

1. Composition de la matière végétale :
- Une plante verte contient en moyenne plus de 90% d'eau et 10% de matière sèche.
- La matière sèche est constituée à 99% d'éléments plastiques majeurs :
  * C, H, O : assimilés par photosynthèse foliaire à partir de CO2 et H2O : n CO2 + n H2O ⟶ (CH2O)n + n O2.
  * Azote (N) : prélevé sous forme d'ions nitrate NO3- ou ammonium NH4+. Rôle : synthèse des protéines, chlorophylle, croissance végétative et feuillage.
  * Phosphore (P) : prélevé sous forme d'ions PO4(3-), HPO4(2-) ou H2PO4-. Rôle : échanges d'énergie cellulaire (ATP), développement des racines et fructification.
  * Potassium (K) : prélevé sous forme d'ions K+. Rôle : régulation osmotique, photosynthèse, résistance au froid, aux parasites et aux sécheresses.
- Oligo-éléments (~1% de la matière sèche) : Fe, Mn, Zn, Cu, B, Mo. Catalyseurs biochimiques enzymatiques.

III. LES TYPES D'ENGRAIS ET CALCULS DE FORMULATION :

1. Engrais organiques vs Engrais minéraux :
- Organiques : Compost (déchets végétaux compostés riches en azote) et fumier (paille + déjections animales apportant N, P, K).
- Minéraux : Produits industriels solubles apportant directement les éléments fertilisants.

2. Les engrais simples :
- Engrais azotés :
  * Nitriques (apportés par NO3-, action rapide), ammoniacaux (apportés par NH4+, action progressive), ou ammonitrates (NH4NO3, double action).
  * Richesse ou teneur en azote : %N = (masse d'azote N dans l'échantillon / masse totale d'engrais) × 100.
  * Exemple du nitrate d'ammonium NH4NO3 (M = 80 g/mol) : contient 2 atomes d'azote (2 × 14 = 28 g). %N = (28 / 80) × 100 = 35%.
- Engrais phosphatés :
  * Richesse exprimée conventionnellement en pourcentage massique de pentoxyde de phosphore P2O5 (%P2O5) : masse en kg de P2O5 pour 100 kg d'engrais.
- Engrais potassiques :
  * Richesse exprimée conventionnellement en pourcentage massique d'oxyde de potassium K2O (%K2O) : masse en kg de K2O pour 100 kg d'engrais.

3. Engrais composés et formule N - P - K :
- Engrais binaires (NP, NK, PK) et ternaires (NPK).
- La formule d'un engrais ternaire est notée conventionnellement sous la forme X - Y - Z :
  * X = masse d'azote N (en kg) contenue dans 100 kg d'engrais (%N).
  * Y = masse d'oxyde de phosphore P2O5 (en kg) contenue dans 100 kg d'engrais (%P2O5).
  * Z = masse d'oxyde de potassium K2O (en kg) contenue dans 100 kg d'engrais (%K2O).
  * Exemple : Un engrais 15 - 15 - 15 contient 15% de N, 15% de P2O5 et 15% de K2O.

4. Formule d'un mélange de deux engrais :
Soit un mélange d'une masse mA d'engrais E1 de formule (XA - YA - ZA) et d'une masse mB d'engrais E2 de formule (XB - YB - ZB). La formule (X - Y - Z) du mélange final est :
  X = (mA · XA + mB · XB) / (mA + mB)
  Y = (mA · YA + mB · YB) / (mA + mB)
  Z = (mA · ZA + mB · ZB) / (mA + mB)

IV. POLLUTION DES SOLS ET DES EAUX PAR LES ENGRAIS :

1. Eutrophisation des eaux douces :
- L'excès d'engrais phosphatés PO4(3-) entraîné par le ruissellement superficiel dans les rivières, lacs et lagunes provoque une prolifération anarchique des plantes aquatiques et algues vertes.
- La décomposition de cette biomasse par les bactéries consomme tout le dioxygène dissous dans l'eau, entraînant l'asphyxie et la mort massive de la faune aquatique (poissons).

2. Pollution des nappes phréatiques par les nitrates :
- Comme l'ion nitrate NO3- n'est pas retenu par le CAH, tout apport excessif d'engrais azoté s'infiltre dans la nappe phréatique.
- Consommation d'eau à forte teneur en nitrates : provoque chez les nourrissons la méthémoglobinémie (maladie bleue mortelle par blocage du transport d'oxygène dans l'hémoglobine) et favorise la synthèse de nitrosamines cancérigènes chez l'adulte.`,
    definitions: [
      {
        term: 'Complexe Argilo-Humique (CAH)',
        definition: 'Édifice colloïdal électronégatif formé par l\'association d\'argile et d\'humus, retenant les cations échangeables nutritifs du sol.'
      },
      {
        term: 'Pont calcique',
        definition: 'Liaison ionique établie par le cation bivalent Ca2+ permettant de fixer l\'anion phosphate PO4(3-) sur le complexe argilo-humique négatif.'
      },
      {
        term: 'Eutrophisation',
        definition: 'Enrichissement excessif d\'un milieu aquatique en nutriments (notamment phosphore et azote), provoquant une prolifération d\'algues et l\'anoxie des eaux.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Lessivage sélectif des ions',
        statement: 'Les cations (K+, Ca2+, Mg2+, NH4+) sont protégés du lessivage par adsorption sur le CAH. Les anions (NO3-) ne sont pas adsorbés et sont directement entraînés par les eaux d\'infiltration.'
      },
      {
        name: 'Convention de formulation N-P-K',
        statement: 'Les chiffres X-Y-Z indiquent toujours respectivement les pourcentages massiques en N élémentaire, en P2O5 et en K2O pour 100 kg d\'engrais brut.'
      }
    ],
    formulas: [
      {
        name: 'Teneur massique en azote (%N)',
        formula: '%N = (mN / m_engrais) × 100',
        explanation: 'Pourcentage massique d\'élément azote présent dans l\'engrais minéral.',
        unitOrCondition: 'En % massique'
      },
      {
        name: 'Formule d\'un mélange de deux engrais E1 et E2',
        formula: 'X = (mA·XA + mB·XB)/(mA + mB) ; Y = (mA·YA + mB·YB)/(mA + mB) ; Z = (mA·ZA + mB·ZB)/(mA + mB)',
        explanation: 'Permet de déterminer la composition centésimale N-P-K issue du mélange de deux engrais de masses connues.',
        unitOrCondition: 'Masses en kg'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer la formule N-P-K résultant du mélange de deux engrais',
        procedure: '1. Identifier les masses mA et mB des deux engrais mélangés, puis calculer la masse totale mTot = mA + mB.\n2. Relever les formules respectives XA-YA-ZA et XB-YB-ZB.\n3. Appliquer la formule de la moyenne pondérée pour chaque élément : X = (mA·XA + mB·XB)/mTot, de même pour Y et Z.\n4. Arrondir si nécessaire et écrire la formule sous la forme conventionnelle X - Y - Z.',
        tip: 'Vérifier la cohérence : les valeurs X, Y, Z doivent obligatoirement être comprises entre les valeurs de départ des deux engrais.'
      }
    ],
    examples: [
      {
        statement: 'On mélange mA = 40 kg d\'un engrais E1 de formule 20 - 10 - 10 et mB = 60 kg d\'un engrais E2 de formule 10 - 20 - 20. Détermine la formule N-P-K du mélange obtenu.',
        solution: 'Masse totale m = 40 + 60 = 100 kg.\nX = (40 × 20 + 60 × 10) / 100 = (800 + 600) / 100 = 14.\nY = (40 × 10 + 60 × 20) / 100 = (400 + 1200) / 100 = 16.\nZ = (40 × 10 + 60 × 20) / 100 = (400 + 1200) / 100 = 16.\nLa formule de l\'engrais composé obtenu est donc 14 - 16 - 16.'
      }
    ],
    exercises: [
      {
        question: 'Calcule la teneur en azote %N de l\'urée pure de formule CO(NH2)2. Données : M(C)=12, M(O)=16, M(N)=14, M(H)=1 g/mol.',
        correction: 'Masse molaire de l\'urée CO(NH2)2 : M = 12 + 16 + 2×(14 + 2) = 28 + 32 = 60 g/mol.\nDans une mole d\'urée, il y a 2 atomes d\'azote, soit mN = 2 × 14 = 28 g.\nTeneur en azote : %N = (28 / 60) × 100 = 46,67%.\nL\'urée est l\'engrais azoté solide le plus riche en azote du marché.'
      }
    ],
    evaluationSituation: {
      context: 'Un planteur de maïs à Bouaké désire fertiliser sa parcelle de 2 hectares. Un technicien agricole lui recommande un apport de 60 kg d\'azote N, 40 kg de P2O5 et 40 kg de K2O. Il dispose sur le marché local de sacs de 50 kg d\'un engrais complet ternaire de formule 15 - 10 - 10.',
      instructions: [
        '1. Définis la signification des trois nombres de la formule 15 - 10 - 10.',
        '2. Calcule la masse de cet engrais nécessaire pour satisfaire exactement les besoins en P2O5 et K2O.',
        '3. Vérifie si l\'apport en azote N est alors suffisant ou s\'il nécessite un complément.',
        '4. Rappelle deux conséquences néfastes d\'un surdosage en engrais sur l\'environnement.'
      ],
      solutionGuide: '1. Signification : 100 kg d\'engrais apportent 15 kg de N, 10 kg de P2O5 et 10 kg de K2O.\n2. Pour 40 kg de P2O5 (teneur 10%) : m(engrais) = 40 / 0,10 = 400 kg d\'engrais (soit 8 sacs de 50 kg). Cet apport couvre également exactement les 40 kg de K2O (teneur 10%).\n3. Azote apporté par 400 kg d\'engrais à 15% : mN = 400 × 0,15 = 60 kg de N. L\'apport de 400 kg satisfait donc parfaitement et simultanément les trois besoins recommandés sans excédent ni déficit !\n4. Conséquences environnementales : Lessivage des nitrates polluant les nappes phréatiques (eau non potable) et ruissellement des phosphates provoquant l\'eutrophisation des cours d\'eau et retenues collinaires.'
    },
    examTraps: [
      'Croire que Y représente le phosphore pur P et Z le potassium pur K : conventionnellement, Y est le pentoxyde P2O5 et Z est l\'oxyde K2O.',
      'Oublier que les ions nitrates NO3- NE SONT PAS fixés par le CAH (contrairement aux phosphates PO4(3-) qui forment un pont calcique avec Ca2+).'
    ],
    quickMemo: 'CAH : colloïde négatif fixant Ca2+, Mg2+, K+, NH4+. Pont calcique : fixe PO4(3-). Nitrates NO3- non retenus ⟶ lessivage. Formule N-P-K = %N - %P2O5 - %K2O. Eutrophisation par excès de phosphates.',
    keywords: ['engrais NPK', 'complexe argilo-humique', 'CAH', 'pont calcique', 'eutrophisation', 'lessivage des nitrates', 'engrais ternaire', 'teneur en azote', 'chimie agricole']
  },

  // =========================================================================
  // 5. CHIMIE ORGANIQUE : ANALYSE ÉLÉMENTAIRE & FORMULES BRUTES
  // =========================================================================
  {
    id: 'pc-1ere-chim-analyse-elementaire-formules',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Première C/D/E)',
    level: '1ere',
    levelLabel: '1ère C & D',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D (Cameroun & Afrique Subsaharienne)',
    chapter: 'Chimie Organique - Structure et Analyse Moléculaire',
    lessonTitle: 'Introduction à la Chimie Organique, Analyse Élémentaire et Détermination des Formules Brutes',
    objectifs: [
      'Connaître l\'historique de la chimie organique (abandon de la force vitale par Wöhler en 1828 et Berthelot)',
      'Identifier la présence du carbone, de l\'hydrogène, de l\'azote, du soufre et des halogènes par analyse qualitative',
      'Calculer les pourcentages centésimaux massiques (%C, %H, %O, %N) à partir des résultats d\'une combustion quantitative (tubes à potasse et ponce sulfurique)',
      'Déterminer la masse molaire moléculaire (densité de vapeur d = M/29, loi des gaz parfaits PV = nRT) et la formule brute CxHyOzNt'
    ],
    fullCourseContent: `I. HISTORIQUE ET DÉFINITION DE LA CHIMIE ORGANIQUE :

1. Historique :
- Jusqu'au début du XIXe siècle, on croyait que les substances issues des êtres vivants ne pouvaient être formées que sous l'influence d'une mystérieuse "force vitale".
- En 1828, Friedrich Wöhler réalisa la première synthèse d'un composé organique sans organisme vivant en chauffant du cyanate d'ammonium (minéral) pour obtenir de l'urée : NH4OCN ⟶ CO(NH2)2.
- Marcelin Berthelot mit fin définitivement à la théorie vitaliste au milieu du XIXe siècle en synthétisant le méthanol, l'éthanol, le benzène et l'acétylène à partir des corps simples.

2. Définition actuelle :
- La chimie organique est la chimie des composés du carbone, d'origine naturelle ou synthétique, à l'exception du carbone pur (diamant, graphite), des oxydes de carbone (CO, CO2), des carbonates (CO3(2-)) et des cyanures (CN-).

II. ANALYSE ÉLÉMENTAIRE QUALITATIVE :

Elle recherche la présence des différents éléments constitutifs d'une substance organique :
1. Carbone et Hydrogène :
- Pyrolyse : En chauffant la matière organique en tube fermé, elle noircit en déposant un résidu de charbon (carbone C) avec dégagement de gaz combustibles.
- Combustion : La vapeur d'eau formée se condense en buée sur les parois froides (présence de l'élément H). Le gaz produit trouble l'eau de chaux (formation de CO2 précipitant en CaCO3, présence de l'élément C).
2. Azote : Chauffage avec de la chaux sodée ⟶ dégagement d'ammoniac NH3 caractérisé par son odeur piquante, son action sur le papier pH humide (bleuissement) ou un précipité rouge-brun avec le réactif de Nessler (K2HgI4).
3. Halogènes (Cl, Br, I) : Test de Beilstein (un fil de cuivre décapé trempé dans la substance donne une flamme verte en présence de Cl, rougeâtre avec Br, violette avec I).
4. Soufre : Chauffage avec un fragment de sodium suivi de dissolution dans l'eau acidifiée ⟶ dégagement de H2S qui noircit un papier imbibé d'acétate de plomb (formation de PbS noir).

III. ANALYSE ÉLÉMENTAIRE QUANTITATIVE & DÉTERMINATION DE LA FORMULE BRUTE :

1. Dosage du carbone et de l'hydrogène par combustion :
On brûle complètement une masse connue m de composé organique de formule CxHyOzNt dans un courant de dioxygène pur.
- Le carbone se transforme intégralement en dioxyde de carbone CO2 absorbé dans des tubes à potasse KOH :
  * m(C) = (12 / 44) · m(CO2) = (3 / 11) · m(CO2).
  * Pourcentage de carbone : %C = (m(C) / m) × 100 = (3 · m(CO2) / 11 · m) × 100.
  * Si l'on mesure le volume V(CO2) dégagé : m(C) = 12 · V(CO2) / Vm.
- L'hydrogène se transforme intégralement en eau H2O absorbée dans des tubes à ponce sulfurique imbibée d'acide sulfurique concentré H2SO4 :
  * m(H) = (2 / 18) · m(H2O) = m(H2O) / 9.
  * Pourcentage d'hydrogène : %H = (m(H) / m) × 100 = (m(H2O) / 9 · m) × 100.
- Dosage de l'azote N :
  * Soit sous forme de volume V(N2) dégagé (méthode de Dumas) : m(N) = 28 · V(N2) / Vm.
  * Soit sous forme d'ammoniac NH3 dosé par volumétrie acide (méthode de Kjeldahl) : m(N) = (14 / 17) · m(NH3).
  * %N = (m(N) / m) × 100.
- Dosage de l'oxygène O :
  * L'oxygène est obtenu par différence à 100% : %O = 100 - (%C + %H + %N).

2. Détermination de la masse molaire moléculaire M :
- Pour un gaz ou vapeur : Densité par rapport à l'air : M = 29 · d.
- Loi des gaz parfaits : P · V = n · R · T = (m / M) · R · T ⟹ M = m · R · T / (P · V).
  (avec P en Pa, V en m³, T en Kelvin = θ°C + 273,15, R = 8,314 J·mol⁻¹·K⁻¹).

3. Relation fondamentale et calcul des indices entiers x, y, z, t :
Soit une molécule de formule CxHyOzNt de masse molaire M :
  M = 12x + y + 16z + 14t
La composition centésimale massique vérifie :
  (12x / %C) = (y / %H) = (16z / %O) = (14t / %N) = (M / 100)

Formules directes des indices :
  x = (%C · M) / 1200
  y = (%H · M) / 100
  z = (%O · M) / 1600
  t = (%N · M) / 1400`,
    definitions: [
      {
        term: 'Analyse élémentaire quantitative',
        definition: 'Méthode d\'analyse chimique permettant de mesurer avec précision les pourcentages massiques (%C, %H, %O, %N...) des éléments d\'une molécule.'
      },
      {
        term: 'Densité de vapeur',
        definition: 'Rapport de la masse d\'un volume V de gaz à la masse du même volume d\'air mesuré dans les mêmes conditions de température et pression : d = M / 29.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle d\'absorption sélective',
        statement: 'Le tube à ponce sulfurique (ou perchlorate de magnésium) absorbe exclusivement H2O. Le tube à potasse (KOH concentré) absorbe exclusivement CO2.'
      },
      {
        name: 'Règle de parité de l\'hydrogène',
        statement: 'Dans une molécule neutre comportant C, H, O et N, le nombre d\'atomes d\'hydrogène y a la même parité que le nombre d\'atomes d\'azote t.'
      }
    ],
    formulas: [
      {
        name: 'Masse de carbone à partir de CO2',
        formula: 'm(C) = (3 / 11) · m(CO2)',
        explanation: 'Car M(C) = 12 g/mol et M(CO2) = 44 g/mol.',
        unitOrCondition: 'Masses en grammes'
      },
      {
        name: 'Masse d\'hydrogène à partir de H2O',
        formula: 'm(H) = m(H2O) / 9',
        explanation: 'Car 2 M(H) = 2 g/mol et M(H2O) = 18 g/mol.',
        unitOrCondition: 'Masses en grammes'
      },
      {
        name: 'Formule fondamentale centésimale',
        formula: '12x / %C = y / %H = 16z / %O = 14t / %N = M / 100',
        explanation: 'Relie les pourcentages massiques aux indices atomiques et à la masse molaire.',
        unitOrCondition: 'x, y, z, t entiers naturels'
      },
      {
        name: 'Masse molaire par densité de vapeur',
        formula: 'M = 29 · d',
        explanation: 'd est la densité de la vapeur organique par rapport à l\'air.',
        unitOrCondition: 'd sans unité, M en g/mol'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer la formule brute d\'un composé organique CxHyOz à partir d\'une combustion',
        procedure: '1. Calculer m(C) = (3/11) × m(CO2) et %C = (m(C) / m) × 100.\n2. Calculer m(H) = m(H2O) / 9 et %H = (m(H) / m) × 100.\n3. Vérifier si le composé contient de l\'oxygène : %O = 100 - (%C + %H).\n4. Déterminer la masse molaire M (par la densité d : M = 29 d, ou gaz parfaits).\n5. Calculer x = (%C × M) / 1200, y = (%H × M) / 100, z = (%O × M) / 1600.\n6. Vérifier que x, y, z sont des entiers et écrire la formule brute.',
        tip: 'Si les valeurs trouvées sont proches de décimales (ex: 2,99 ou 6,01), arrondir à l\'entier le plus proche.'
      }
    ],
    examples: [
      {
        statement: 'La combustion complète de m = 3,6 g d\'un composé organique CxHyOz fournit 8,7 g de CO2 et 3,7 g de H2O. La densité de sa vapeur par rapport à l\'air est d = 2,48. Détermine sa formule brute.',
        solution: '1. Masse molaire : M = 29 × d = 29 × 2,48 = 71,92 ≈ 72 g/mol.\n2. Carbone : m(C) = (3/11) × 8,7 = 2,373 g. %C = (2,373 / 3,6) × 100 = 65,91%.\n3. Hydrogène : m(H) = 3,7 / 9 = 0,411 g. %H = (0,411 / 3,6) × 100 = 11,42%.\n4. Oxygène : %O = 100 - (65,91 + 11,42) = 22,67%.\n5. Indices :\n   x = (65,91 × 72) / 1200 = 3,95 ≈ 4.\n   y = (11,42 × 72) / 100 = 8,22 ≈ 8.\n   z = (22,67 × 72) / 1600 = 1,02 ≈ 1.\nFormule brute : C4H8O (butanone ou butanal, M = 4×12 + 8 + 16 = 72 g/mol).'
      }
    ],
    exercises: [
      {
        question: 'Un hydrocarbure gazeux CxHy a une densité par rapport à l\'air d = 1,52. L\'analyse montre qu\'il contient 81,8% de carbone. Trouve sa masse molaire et sa formule brute.',
        correction: 'M = 29 × 1,52 = 44,08 ≈ 44 g/mol.\n%C = 81,8% ⟹ %H = 100 - 81,8 = 18,2%.\nx = (%C × M) / 1200 = (81,8 × 44) / 1200 = 3,00 = 3.\ny = (%H × M) / 100 = (18,2 × 44) / 100 = 8,00 = 8.\nFormule brute : C3H8 (le propane).'
      }
    ],
    evaluationSituation: {
      context: 'Dans un laboratoire de contrôle qualité, on analyse un médicament liquide volatil de formule CxHyOz. On vaporise m = 0,185 g de ce liquide qui occupe un volume V = 77,5 cm³ sous une pression P = 1,013×10⁵ Pa à la température T = 100°C (373,15 K). La combustion de 0,185 g de ce liquide donne 0,44 g de CO2 et 0,225 g de H2O.',
      instructions: [
        '1. Calcule la masse molaire M du composé à l\'aide de l\'équation d\'état des gaz parfaits (R = 8,314 J·mol⁻¹·K⁻¹).',
        '2. Détermine la composition centésimale massique (%C, %H, %O).',
        '3. Déduis la formule brute du composé et propose deux formules semi-développées possibles.'
      ],
      solutionGuide: '1. P·V = (m/M)·R·T ⟹ M = m·R·T / (P·V).\nV = 77,5 × 10⁻⁶ m³. M = (0,185 × 8,314 × 373,15) / (1,013×10⁵ × 77,5×10⁻⁶) = 574,0 / 7,85 = 73,1 ≈ 74 g/mol.\n2. m(C) = (3/11) × 0,44 = 0,12 g. %C = (0,12 / 0,185) × 100 = 64,86%.\nm(H) = 0,225 / 9 = 0,025 g. %H = (0,025 / 0,185) × 100 = 13,51%.\n%O = 100 - (64,86 + 13,51) = 21,63%.\n3. x = (64,86 × 74) / 1200 = 4,00 = 4. y = (13,51 × 74) / 100 = 10,00 = 10. z = (21,63 × 74) / 1600 = 1,00 = 1.\nFormule brute : C4H10O (alcool ou éther-oxyde).\nFormules semi-développées possibles : butan-1-ol (CH3-CH2-CH2-CH2-OH), butan-2-ol (CH3-CH2-CH(OH)-CH3), ou diéthyléther (CH3-CH2-O-CH2-CH3).'
    },
    examTraps: [
      'Oublier de convertir la température en Kelvin (T = θ + 273,15) ou le volume en m³ (1 cm³ = 10⁻⁶ m³) dans la loi des gaz parfaits.',
      'Calculer %O directement au lieu de le déduire par différence à 100%, alors que l\'oxygène de combustion provient du dioxygène injecté !'
    ],
    quickMemo: 'Combustion : m(C) = 3/11 m(CO2), m(H) = m(H2O)/9. %O = 100 - (%C + %H + %N). Densité vapeur : M = 29 d. Relation fondamentale : 12x/%C = y/%H = 16z/%O = 14t/%N = M/100.',
    keywords: ['analyse élémentaire', 'combustion', 'tubes à potasse', 'ponce sulfurique', 'pourcentage centésimal', 'formule brute', 'densité de vapeur', 'gaz parfaits', 'Wöhler']
  },

  // =========================================================================
  // 6. CHIMIE ORGANIQUE : PÉTROLES, GAZ NATURELS, CRAQUAGE & REFORMAGE
  // =========================================================================
  {
    id: 'pc-1ere-chim-petroles-craquage-reformage-octane',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Première C/D/E)',
    level: '1ere',
    levelLabel: '1ère C & D',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D (Cameroun & Afrique Subsaharienne)',
    chapter: 'Chimie Organique - Ressources Fossiles et Industrie Chimique',
    lessonTitle: 'Pétroles et Gaz Naturels : Distillation, Craquage, Reformage et Indice d\'Octane',
    objectifs: [
      'Décrire l\'origine géologique sédimentaire marine, la formation et la composition du pétrole brut et du gaz naturel',
      'Expliquer le principe de la distillation fractionnée en colonne à plateaux et identifier les différentes coupes pétrolières',
      'Différencier le craquage thermique, catalytique, le vapocraquage et l\'hydrocraquage',
      'Définir le reformage catalytique (isomérisation, cyclisation, déshydrocyclisation) et son rôle pour accroître l\'indice d\'octane des carburants'
    ],
    fullCourseContent: `I. ORIGINE, FORMATION ET COMPOSITION DU PÉTROLE ET DU GAZ NATUREL :

1. Origine géologique sédimentaire marine :
- Il y a des dizaines à centaines de millions d'années, du plancton et des matières organiques végétales et animales se sont déposés au fond des mers et lagunes calmes.
- Recouverts de sédiments minéraux (vases, sables) à l'abri du dioxygène, ces débris forment une boue organique carbonée.
- Sous l'action des bactéries anaérobies, puis sous l'effet de l'augmentation de la température et de la pression (géothermie terrestre), les atomes O et N sont éliminés (sous forme de H2O, CO2, NH3) tandis que C et H forment des hydrocarbures liquides (pétrole brut) et gazeux (gaz naturel).

2. Migration et piégeage géologique :
- Le pétrole se forme dans la roche-mère (entre 1000 m et 4000 m de profondeur).
- Plus fluide et moins dense que l'eau, il migre vers le haut à travers des roches poreuses (roche-magasin) jusqu'à être bloqué sous une couche imperméable (roche-couverture argileuse ou saline) formant un gisement ou piège pétrolifère.
- Au-delà de 4000 m de profondeur, la température élevée détruit les chaînes liquides et ne laisse que des hydrocarbures gazeux, constitués à plus de 80-95% de méthane CH4.

3. Composition chimique globale du pétrole brut :
Mélange complexe d'hydrocarbures :
- Alcanes linéaires et ramifiés (paraffines).
- Cycloalcanes (naphtènes, ex: cyclohexane, cyclopentane).
- Hydrocarbures aromatiques (arènes : benzène, toluène, xylènes, naphtalène).
- Impuretés : composés soufrés (H2S, mercaptans responsables des pluies acides), composés oxygénés et métaux lourds (nickel, vanadium).

II. LE RAFFINAGE DU PÉTROLE BRUT : DISTILLATION FRACTIONNÉE :

1. Principe de la distillation fractionnée en colonne à plateaux :
- Le pétrole brut dessalé est chauffé dans un four à ~380°C et injecté à la base d'une grande tour de fractionnement haute de 50 à 60 m comportant 40 à 50 plateaux perforés munis de calottes.
- Les vapeurs montent dans la colonne. Plus on monte, plus la température diminue.
- Chaque coupe d'hydrocarbures se condense au niveau du plateau dont la température correspond à sa zone d'ébullition : c'est le fractionnement en coupes pétrolières.

2. Les différentes coupes pétrolières (distillation atmosphérique) :
- Gaz incondensables (< 40°C) : Méthane, éthane, propane, butane (GPL domestique).
- Essences légères et naphtas (40°C - 180°C) : Carburants pour automobiles, charge de vapocraquage pour la pétrochimie.
- Kérosène (180°C - 230°C) : Carburant pour l'aviation (turboréacteurs), pétrole lampant.
- Gazole ou diesel (230°C - 360°C) : Carburant pour moteurs diesel et fioul domestique de chauffage.
- Résidu atmosphérique lourd (> 360°C) : Traité en distillation sous pression réduite (sous vide à 0,1 bar) pour éviter le craquage thermique spontané. Fournit les fiouls lourds industriels, les huiles lubrifiantes, la paraffine et le bitume routier.

III. LES PROCÉDÉS DE CRAQUAGE :

Le craquage consiste à casser les grosses molécules d'hydrocarbures lourds à longue chaîne carbonée (peu valorisables) pour les transformer en molécules plus courtes, légères et très demandées (essences et monomères pour plastiques) :
1. Le craquage thermique :
- Réalisé sous forte pression et haute température (jusqu'à 800°C) sans catalyseur. Provoque la rupture homolytique des liaisons C-C.
2. Le craquage catalytique :
- Réalisé à température plus modérée (~500°C) en présence d'un catalyseur zéolithe (aluminosilicates).
- Donne un meilleur rendement en essences à haut pouvoir antidétonant et produit des alcènes légers (propène, butènes).
- Exemple : C12H26 ⟶ C8H18 (alcane pour essence) + C4H8 (alcène).
3. Le vapocraquage :
- Craquage en présence de vapeur d'eau à haute température (800°C). Il produit en grande quantité des alcènes légers (éthylène, propène, butadiène) qui sont les monomères de base de la pétrochimie (polyéthylène, PVC, caoutchouc synthétique).
4. L'hydrocraquage :
- Craquage catalytique réalisé sous forte pression de dihydrogène H2. Il sature les doubles liaisons et élimine le soufre (désulfuration poussée).

IV. LE REFORMAGE CATALYTIQUE ET L'INDICE D'OCTANE :

1. L'indice d'octane d'un carburant :
- Dans un moteur à explosion (essence), le mélange air-carburant doit s'enflammer uniquement sous l'action de l'étincelle de la bougie.
- Si le carburant s'auto-enflamme spontanément sous l'effet de la compression, il se produit un phénomène de cliquetis destructeur pour le moteur.
- Échelle de référence de l'indice d'octane :
  * Heptane linéaire CH3-(CH2)5-CH3 : s'auto-enflamme très facilement ⟹ Indice d'octane = 0.
  * 2,2,4-triméthylpentane (isooctane) : très résistant à l'auto-inflammation ⟹ Indice d'octane = 100.
- Plus l'indice d'octane d'un carburant est élevé (ex: Super 95 ou 98), meilleur est son pouvoir antidétonant.

2. Les opérations de reformage catalytique :
Le reformage catalytique permet de modifier la structure moléculaire d'un hydrocarbure sans changer son nombre d'atomes de carbone, en présence de catalyseur (platine déposé sur alumine Pt/Al2O3) à ~500°C sous 15 à 30 bars :
- a) L'isomérisation :
  * Transformation d'un alcane à chaîne linéaire en isomère à chaîne ramifiée.
  * Exemple : Hexane linéaire (indice d'octane = 25) ⟶ 2,2-diméthylbutane (indice d'octane = 92).
- b) La cyclisation :
  * Transformation d'un alcane linéaire en cycloalcane avec libération de dihydrogène H2.
  * Exemple : Hexane linéaire ⟶ cyclohexane + H2 (l'indice passe de 25 à 77).
- c) La déshydrocyclisation (aromatisation) :
  * Transformation d'un alcane linéaire en hydrocarbure aromatique avec élimination de 4 molécules de dihydrogène H2.
  * Exemple fondamental : Hexane CH3-(CH2)4-CH3 ⟶ Benzène C6H6 + 4 H2.
    L'indice d'octane bondit de 25 à plus de 107 !
  * Exemple : Heptane ⟶ Toluène C6H5-CH3 + 4 H2 (indice d'octane = 120).`,
    definitions: [
      {
        term: 'Craquage',
        definition: 'Rupture thermique ou catalytique des liaisons carbone-carbone de grosses molécules d\'hydrocarbures lourds pour produire des molécules plus courtes et légères.'
      },
      {
        term: 'Reformage catalytique',
        definition: 'Opération modifiant la structure géométrique d\'un hydrocarbure sans modifier son nombre de carbones afin d\'accroître considérablement son indice d\'octane.'
      },
      {
        term: 'Indice d\'octane',
        definition: 'Grandeur mesurant la résistance d\'un carburant à l\'auto-inflammation prématurée (pouvoir antidétonant) par rapport au mélange heptane / isooctane.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de l\'indice d\'octane',
        statement: 'Les alcanes linéaires ont un indice d\'octane médiocre. Les alcanes ramifiés ont un bon indice. Les hydrocarbures aromatiques ont le meilleur indice d\'octane (> 100).'
      },
      {
        name: 'Principe du fractionnement',
        statement: 'Les molécules les plus légères (basse température d\'ébullition) s\'évaporent en premier et sont recueillies en haut de la colonne de distillation.'
      }
    ],
    formulas: [
      {
        name: 'Déshydrocyclisation de l\'hexane',
        formula: 'C6H14 (hexane) ⟶ C6H6 (benzène) + 4 H2',
        explanation: 'Réaction de reformage catalytique transformant un alcane linéaire en composé aromatique à haut indice d\'octane.',
        unitOrCondition: 'Catalyseur Pt/Al2O3 à 500°C'
      },
      {
        name: 'Craquage catalytique d\'un alcane',
        formula: 'CnH2n+2 ⟶ CpH2p+2 (alcane) + CqH2q (alcène)',
        explanation: 'Conservation du nombre de carbones et d\'hydrogènes : n = p + q.',
        unitOrCondition: 'Température ~500°C'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier le type de procédé de raffinage mis en jeu',
        procedure: '1. Comparer le nombre d\'atomes de carbone avant et après la réaction.\n2. Si la molécule de départ est scindée en deux molécules plus petites (ex: C10 ⟶ C6 + C4), c\'est un CRAQUAGE.\n3. Si le nombre d\'atomes de carbone est conservé (ex: C6H14 ⟶ C6H6 + 4 H2 ou alcane linéaire ⟶ alcane ramifié), c\'est un REFORMAGE.\n4. Identifier la sous-catégorie du reformage : formation de ramification = isomérisation, formation d\'un cycle saturé = cyclisation, formation d\'un noyau benzénique aromatique = déshydrocyclisation.',
        tip: 'Le reformage préserve le squelette carboné à n carbones ; le craquage diminue la longueur de la chaîne.'
      }
    ],
    examples: [
      {
        statement: 'La réaction suivante est réalisée dans une raffinerie : CH3-(CH2)4-CH3 ⟶ C6H6 + 4 H2. De quelle opération s\'agit-il et quel est son intérêt industriel ?',
        solution: 'Il s\'agit d\'une DÉSHYDROCYCLISATION (ou aromatisation), qui est une réaction de reformage catalytique. Elle transforme l\'hexane linéaire (qui a un très mauvais indice d\'octane de ~25 provoquant des cliquetis moteur) en benzène, un composé aromatique dont l\'indice d\'octane dépasse 107. Cela valorise les essences légères en augmentant leur pouvoir antidétonant.'
      }
    ],
    exercises: [
      {
        question: 'Écris l\'équation d\'une réaction de craquage catalytique du butane C4H10 conduisant au propène.',
        correction: 'C4H10 ⟶ C3H6 (propène) + CH4 (méthane). On vérifie la conservation des atomes : 4 C et 10 H de part et d\'autre.'
      }
    ],
    evaluationSituation: {
      context: 'Une raffinerie de pétrole à Limbé (Cameroun) traite du pétrole brut pour produire du super carburant pour automobiles. Après distillation atmosphérique, l\'essence directe obtenue possède un indice d\'octane insuffisant de 50. L\'ingénieur chimiste envoie cette coupe dans une unité de reformage catalytique opérant à 500°C sous 20 bars en présence d\'un catalyseur au platine.',
      instructions: [
        '1. Définis l\'indice d\'octane d\'un carburant et explique le danger du phénomène de cliquetis.',
        '2. Nomme les trois réactions chimiques qui se déroulent dans l\'unité de reformage catalytique.',
        '3. Écris l\'équation de la déshydrocyclisation de l\'heptane en toluène (méthylbenzène C7H8) et explique pourquoi cette réaction améliore considérablement le carburant.'
      ],
      solutionGuide: '1. Définition : L\'indice d\'octane mesure la résistance d\'une essence à l\'auto-inflammation spontanée sous pression. Le cliquetis est une combustion explosive non synchronisée qui crée des ondes de choc capables de perforer les pistons et détruire le moteur.\n2. Trois réactions de reformage : L\'isomérisation (linéaire ⟶ ramifié), la cyclisation (alcane ⟶ cyclane + H2) et la déshydrocyclisation (alcane ⟶ arène + 4 H2).\n3. Déshydrocyclisation de l\'heptane : CH3-(CH2)5-CH3 (heptane linéaire) ⟶ C6H5-CH3 (toluène) + 4 H2. L\'heptane linéaire a un indice d\'octane nul (0), alors que le toluène aromatique a un indice d\'octane d\'environ 120. Sa présence élève spectaculairement l\'indice global du mélange au-delà de 95.'
    },
    examTraps: [
      'Confondre craquage (scission d\'une grosse molécule en petites molécules) et reformage (changement de géométrie sans modifier le nombre de carbones).',
      'Penser que la distillation fractionnée est une transformation chimique : c\'est une séparation PHYSIQUE basée sur les différences de températures d\'ébullition.'
    ],
    quickMemo: 'Distillation = séparation physique (tour à plateaux). Craquage = casser les grosses molécules (thermique, catalytique, vapo). Reformage = isomérisation, cyclisation, déshydrocyclisation (Pt à 500°C) pour élever l\'indice d\'octane (0 pour heptane, 100 pour isooctane).',
    keywords: ['pétrole brut', 'gaz naturel', 'distillation fractionnée', 'coupes pétrolières', 'craquage catalytique', 'vapocraquage', 'reformage', 'isomérisation', 'déshydrocyclisation', 'indice d\'octane']
  }
];
