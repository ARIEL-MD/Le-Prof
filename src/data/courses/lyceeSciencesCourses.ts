import { OfficialIvorianCourse } from '../../types';

export const LYCEE_SCIENCES_COURSES: OfficialIvorianCourse[] = [
  // ==========================================
  // SECONDE C - PHYSIQUE-CHIMIE (DPFC / MENA)
  // ==========================================
  {
    id: 'pc-2nde-c-mouvement-quantite-matiere-atome',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Seconde C)',
    level: '2nde',
    levelLabel: '2nde C (Scientifique)',
    serie: '2nde_c',
    serieLabel: '2nde C',
    chapter: 'Mécanique (Cinématique & Forces), Mole & Classification Périodique',
    lessonTitle: 'Vitesse moyenne et instantanée, forces d\'interaction, la mole et le tableau de Mendeleïev',
    objectifs: [
      'Calculer la vitesse moyenne et instantanée d\'un point mobile et tracer le vecteur vitesse v⃗',
      'Énoncer le principe d\'inertie (1ère loi de Newton simplifiée)',
      'Définir la mole, la constante d\'Avogadro NA et calculer la quantité de matière n = m / M = N / NA',
      'Expliquer la structure électronique en couches (K, L, M) et les règles du duet et de l\'octet'
    ],
    fullCourseContent: `1. Cinématique et Mouvements :
- Référentiel : Système par rapport auquel on étudie le mouvement (référentiel terrestre, géocentrique, héliocentrique).
- Trajectoire : Ensemble des positions successives occupées par le point mobile (rectiligne, circulaire, curviligne).
- Vitesse instantanée au point Mi : v_i = M_(i-1)M_(i+1) / (2·τ) où τ est l'intervalle de temps constant entre deux enregistrements successifs.
- Mouvement Rectiligne Uniforme (MRU) : Trajectoire rectiligne et vecteur vitesse constant en direction, sens et norme.

2. Principe de l'Inertie :
Dans un référentiel galiléen, tout corps persévère dans son état de repos ou de mouvement rectiligne uniforme si les forces extérieures qui s'exercent sur lui se compensent (∑ F⃗_ext = 0⃗).

3. Chimie : La Mole et la Quantité de Matière :
- La Mole (mol) : Unité de quantité de matière contenant exactement NA = 6,022 × 10^23 entités chimiques élémentaires (constante d'Avogadro).
- Relations fondamentales :
  * Pour un solide ou liquide : n = m / M (m en g, M en g/mol).
  * Pour un gaz (volume molaire Vm) : n = V / Vm (à 25°C et 1 atm, Vm ≈ 24 L/mol ou 22,4 L/mol dans les CNTP).
  * Concentration molaire C : C = n / V_solution = m / (M · V_solution) en mol/L.

4. Structure de l'Atome et Classification Périodique :
- Notation d'un noyau : ^A_Z X où Z est le numéro atomique (nombre de protons = nombre d'électrons de l'atome neutre) et A le nombre de masse (nucléons = protons + neutrons).
- Répartition électronique des éléments (Z ≤ 18) : Remplissage des couches K (max 2 e-), L (max 8 e-), M (max 8 e-).
- Les familles chimiques :
  * Colonne 1 : Métaux alcalins (1 e- de valence, forment des ions +1, ex: Na+, K+).
  * Colonne 7 : Halogènes (7 e- de valence, forment des ions -1, ex: Cl-, Br-, I-).
  * Colonne 8 : Gaz nobles (couche externe saturée, chimiquement inertes).`,
    definitions: [
      {
        term: 'Mole',
        definition: 'Quantité de matière d\'un système contenant autant d\'entités élémentaires qu\'il y a d\'atomes dans 12 g de carbone 12, soit 6,022 × 10^23 entités.'
      },
      {
        term: 'Masse molaire (M)',
        definition: 'Masse d\'une mole d\'atomes ou de molécules d\'une espèce chimique, exprimée en grammes par mole (g/mol).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de l\'octet',
        statement: 'Les atomes ont tendance à gagner, perdre ou partager des électrons pour acquérir 8 électrons sur leur couche externe (configuration stable de gaz noble).'
      },
      {
        name: 'Principe d\'inertie',
        statement: '∑ F⃗_ext = 0⃗ ⇔ Le centre d\'inertie du solide est au repos ou en Mouvement Rectiligne Uniforme (v⃗ = cte).'
      }
    ],
    formulas: [
      {
        name: 'Quantité de matière (solide / liquide)',
        formula: 'n = m / M',
        explanation: 'm en grammes (g), M en g/mol, n en moles (mol).',
        unitOrCondition: 'Espèce chimique pure'
      },
      {
        name: 'Quantité de matière d\'un gaz',
        formula: 'n = V / Vm',
        explanation: 'V en Litres (L) et Vm en L/mol.',
        unitOrCondition: 'Gaz parfait'
      },
      {
        name: 'Concentration molaire volumique',
        formula: 'C = n / V',
        explanation: 'C en mol/L, n en mol et V en Litres de solution.',
        unitOrCondition: 'Solution homogène'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Préparer une solution par dissolution',
        procedure: '1. Calculer la masse à prélever : m = C × V × M.\n2. Peser précisément la masse m avec une balance électronique et une coupelle.\n3. Transvaser le soluté dans une fiole jaugée de volume V à l\'aide d\'un entonnoir en rinçant.\n4. Remplir à moitié d\'eau distillée, agiter pour dissoudre complètement, puis compléter jusqu\'au trait de jauge.\n5. Boucher et homogénéiser.',
        tip: 'Le bas du ménisque doit être exactement tangent au trait de jauge.'
      }
    ],
    examples: [
      {
        statement: 'On dissout m = 5,85 g de chlorure de sodium (NaCl) dans de l\'eau distillée pour obtenir V = 500 mL de solution. Données : M(Na) = 23 g/mol, M(Cl) = 35,5 g/mol. Calcule la concentration molaire C.',
        solution: '1. Masse molaire de NaCl : M = 23 + 35,5 = 58,5 g/mol.\n2. Quantité de matière : n = m / M = 5,85 / 58,5 = 0,10 mol.\n3. Volume en Litres : V = 500 mL = 0,50 L.\n4. Concentration molaire : C = n / V = 0,10 / 0,50 = 0,20 mol/L.'
      }
    ],
    exercises: [
      {
        question: 'L\'atome de soufre S a pour numéro atomique Z = 16. Donne sa structure électronique et la formule de son ion stable.',
        correction: '1. Structure électronique de S (Z = 16) : (K)²(L)⁸(M)⁶.\n2. L\'atome possède 6 électrons sur sa couche externe M. Pour respecter la règle de l\'octet, il doit gagner 2 électrons pour acquérir la configuration stable (M)⁸ du gaz noble argon.\n3. Formule de l\'ion stable : S²⁻ (ion sulfure).'
      }
    ],
    evaluationSituation: {
      context: 'Au laboratoire de chimie du Lycée Scientifique de Yamoussoukro, un préparateur doit fabriquer 250 mL d\'une solution de sulfate de cuivre (CuSO4) à une concentration C = 0,05 mol/L pour des travaux pratiques. Il dispose de cristaux de sulfate de cuivre pentahydraté (CuSO4, 5H2O) de masse molaire M = 249,6 g/mol.',
      instructions: [
        '1. Calcule la quantité de matière n de soluté nécessaire.',
        '2. Calcule la masse m de cristaux à peser.',
        '3. Décris brièvement le matériel de verrerie nécessaire pour la préparation.'
      ],
      solutionGuide: '1. n = C × V = 0,05 mol/L × 0,250 L = 0,0125 mol.\n2. Masse m = n × M = 0,0125 mol × 249,6 g/mol = 3,12 g.\n3. Matériel requis : Balance de précision, coupelle de pesée, spatule, entonnoir, fiole jaugée de 250 mL, pissette d\'eau distillée et pipette jaugée pour ajuster le trait de jauge.'
    },
    examTraps: [
      'Garder le volume en millilitres (mL) dans C = n / V au lieu de le convertir impérativement en Litres (L).',
      'Confondre nombre de masse A (nucléons) et numéro atomique Z (protons).'
    ],
    quickMemo: 'n = m/M = V/Vm = C×V. MRU : vitesse constante. Structure K² L⁸ M⁸. Octet = 8 électrons externes.',
    keywords: ['mole', 'quantité de matière', 'concentration molaire', 'principe d\'inertie', 'structure électronique', '2nde C']
  },

  // ==========================================
  // TERMINALE D & C - PHYSIQUE-CHIMIE (DPFC / MENA)
  // ==========================================
  {
    id: 'pc-tle-mecanique-newton-acides-bases-organique',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie (Terminale C, D & E)',
    level: 'terminale',
    levelLabel: 'Terminale C, D & E (Bac)',
    serie: 'tle_d',
    serieLabel: 'Terminale C, D & E',
    chapter: 'Mécanique de Newton, Mouvement de Particules Chargées, Acides/Bases (Ka, pH) & Estérification',
    lessonTitle: 'Deuxième loi de Newton (PFD), mouvement dans un champ B et E, équilibres acide-base et cinétique de l\'estérification',
    objectifs: [
      'Appliquer la 2ème loi de Newton (Principe Fondamental de la Dynamique) : ∑ F⃗_ext = m · a⃗',
      'Établir les équations horaires du mouvement d\'un projectile dans le champ de pesanteur uniforme',
      'Calculer le rayon de la trajectoire circulaire d\'une particule chargée dans un champ magnétique uniforme R = (m·v)/(|q|·B)',
      'Déterminer le pH, la constante d\'acidité Ka, le pKa et tracer la courbe de titrage acido-basique (point d\'équivalence pH-métrique)',
      'Écrire la réaction réversible d\'estérification (Acide carboxylique + Alcool ⇌ Ester + Eau) et calculer le rendement'
    ],
    fullCourseContent: `1. Mécanique : 2ème Loi de Newton et Mouvement des Projectiles :
- Deuxième loi de Newton (PFD) : Dans un référentiel galiléen, la somme vectorielle des forces extérieures appliquées à un solide ponctuel de masse m est égale au produit de sa masse par le vecteur accélération :
  ∑ F⃗_ext = m · a⃗.
- Projectile lancé avec une vitesse initiale v⃗0 faisant un angle α avec l'horizontale (champ de pesanteur g⃗ = -g · j⃗) :
  * Accélération : a⃗(ax = 0 ; ay = -g).
  * Vitesse : v⃗(vx = v0·cos α ; vy = -g·t + v0·sin α).
  * Position : OM⃗(x(t) = (v0·cos α)·t ; y(t) = -1/2 g·t² + (v0·sin α)·t + y0).
  * Équation de la trajectoire parabolique : y = - [ g / (2 v0² cos² α) ] · x² + (tan α) · x + y0.
  * Flèche (sommet) : atteinte lorsque vy = 0 => t_sommet = (v0·sin α) / g.
  * Portée horizontale : distance x pour laquelle y = 0.

2. Mouvement d'une Particule Chargée dans un Champ Magnétique Uniforme B⃗ :
- Force de Lorentz magnétique : F⃗_m = q (v⃗ ∧ B⃗).
- Caractéristiques :
  * F⃗_m est toujours perpendiculaire au vecteur vitesse v⃗, donc le travail de la force magnétique est rigoureusement nul (W = 0).
  * L'énergie cinétique et la vitesse v restent constantes (mouvement uniforme).
  * La trajectoire est un cercle plan de rayon : R = (m · v) / (|q| · B).
  * Période de révolution : T = 2π·R / v = (2π·m) / (|q|·B) (indépendante de la vitesse).

3. Chimie : Acides, Bases et Constante d'Acidité Ka :
- Produit ionique de l'eau : Ke = [H3O+] · [OH-] = 10^(-14) à 25°C (pKe = 14).
- Constante d'acidité du couple HA/A- : Ka = ([A-] · [H3O+]) / [HA]  et  pKa = -log(Ka).
- Relation d'Henderson-Hasselbalch : pH = pKa + log ( [A-] / [HA] ).
  * Si pH < pKa : L'espèce acide HA prédomine ([HA] > [A-]).
  * Si pH = pKa : [HA] = [A-] (demi-équivalence).
  * Si pH > pKa : L'espèce basique A- prédomine ([A-] > [HA]).
- Titrage acido-basique : À l'équivalence, les réactifs ont été mélangés dans les proportions stœchiométriques :
  Ca · Va = Cb · Vb_E.

4. Chimie Organique : Estérification et Hydrolyse :
- Réaction générale : Acide carboxylique (R-COOH) + Alcool (R'-OH) ⇌ Ester (R-COO-R') + Eau (H2O).
- Caractéristiques de l'estérification directe : Lente, athermique et limitée par la réaction inverse d'hydrolyse de l'ester.
- Rendement d'estérification à partir d'un mélange équimolaire d'acide et d'alcool :
  * Alcool primaire : Rendement maximal de 67% (2/3).
  * Alcool secondaire : Rendement maximal de 60%.
  * Alcool tertiaire : Rendement très faible (environ 5%).
- Méthodes pour augmenter le rendement ou la vitesse :
  * Vitesse : Utiliser un catalyseur acide (quelques gouttes de H2SO4 concentré) et chauffer à reflux.
  * Rendement : Utiliser un réactif en excès ou éliminer l'un des produits (eau ou ester) au fur et à mesure de sa formation (appareil de Dean-Stark).
  * Réaction totale et rapide : Remplacer l'acide carboxylique par un chlorure d'acyle (R-COCl) ou un anhydride d'acide.`,
    definitions: [
      {
        term: 'Deuxième loi de Newton (PFD)',
        definition: 'Principe fondamental reliant la résultante des forces extérieures appliquées à un corps à son accélération : ∑ F⃗_ext = m · a⃗.'
      },
      {
        term: 'Constante d\'acidité (Ka)',
        definition: 'Constante d\'équilibre thermodynamique associée à la réaction de dissociation d\'un acide faible dans l\'eau : HA + H2O ⇌ A- + H3O+.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Force de Lorentz et travail nul',
        statement: 'Comme la force magnétique F⃗ = q(v⃗ ∧ B⃗) est orthogonale à la vitesse v⃗, son travail est nul et la norme de la vitesse de la particule reste rigoureusement constante.'
      },
      {
        name: 'Relation fondamentale du pH',
        statement: 'pH = pKa + log([Base]/[Acide]). À la demi-équivalence d\'un titrage d\'acide faible par une base forte, pH = pKa.'
      }
    ],
    formulas: [
      {
        name: 'Rayon de courbure magnétique',
        formula: 'R = (m · v) / (|q| · B)',
        explanation: 'Rayon de la trajectoire circulaire d\'une particule chargée dans un champ magnétique uniforme.',
        unitOrCondition: 'm en kg, v en m/s, q en Coulombs (C), B en Teslas (T)'
      },
      {
        name: 'Équation de la trajectoire parabolique',
        formula: 'y = - [ g / (2 v0² cos² α) ] · x² + (tan α) · x',
        explanation: 'Trajectoire d\'un projectile tiré depuis l\'origine O avec un angle α.',
        unitOrCondition: 'Champ de pesanteur uniforme g'
      },
      {
        name: 'Relation à l\'équivalence acido-basique',
        formula: 'Ca · Va = Cb · Vb_E',
        explanation: 'Conservation de la quantité de matière de protons échangés.',
        unitOrCondition: 'Monoacide et monobase'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Résoudre un problème de mécanique newtonienne au Bac',
        procedure: '1. Définir le système matériel et le référentiel d\'étude (terrestre supposé galiléen).\n2. Faire le bilan complet des forces extérieures avec un schéma clair.\n3. Énoncer la 2ème loi de Newton : ∑ F⃗_ext = m · a⃗.\n4. Projeter vectoriellement sur les axes du repère (Ox, Oy) pour obtenir les accélérations ax et ay.\n5. Intégrer successivement pour obtenir les composantes de la vitesse v⃗(t), puis les équations horaires OM⃗(t).',
        tip: 'Vérifier systématiquement les conditions initiales à t = 0 (x0, y0, v0x, v0y).'
      },
      {
        stepNumber: 2,
        title: 'Exploiter une courbe de titrage acido-basique pH = f(Vb)',
        procedure: '1. Tracer les deux tangentes parallèles à la courbe avant et après le saut de pH.\n2. Tracer la droite médiane équidistante : son intersection avec la courbe donne le point d\'équivalence E(VbE ; pHE).\n3. Relever le volume équivalent VbE et calculer la concentration inconnue Ca = (Cb × VbE) / Va.\n4. Pour un acide faible : à Vb = VbE / 2 (demi-équivalence), lire le pKa qui est égal au pH mesuré.',
        tip: 'Utiliser la méthode des tangentes parallèles avec une règle et une équerre propres.'
      }
    ],
    examples: [
      {
        statement: 'On dose Va = 20 mL d\'une solution d\'acide éthanoïque (CH3COOH) par une solution de soude (NaOH) de concentration Cb = 0,10 mol/L. Le volume équivalent mesuré est VbE = 15 mL. Calcule la concentration Ca de l\'acide.',
        solution: 'À l\'équivalence du titrage acido-basique :\nCa · Va = Cb · VbE\nCa = (Cb · VbE) / Va\nCa = (0,10 mol/L × 15 mL) / 20 mL = 1,5 / 20 = 0,075 mol/L.'
      }
    ],
    exercises: [
      {
        question: 'Un proton de masse m = 1,67 × 10^(-27) kg et de charge q = +1,6 × 10^(-19) C pénètre avec une vitesse v = 2,0 × 10^6 m/s perpendiculairement à un champ magnétique uniforme B = 0,50 T. Calcule le rayon R de sa trajectoire.',
        correction: 'La trajectoire du proton est un cercle de rayon :\nR = (m · v) / (|q| · B)\nR = (1,67 × 10^(-27) × 2,0 × 10^6) / (1,6 × 10^(-19) × 0,50)\nR = (3,34 × 10^(-21)) / (8,0 × 10^(-20)) = 0,04175 m = 4,18 cm.'
      }
    ],
    evaluationSituation: {
      context: 'Dans une usine cosmétique à Abidjan, un ingénieur chimiste synthétise de l\'acétate de benzyle (ester à odeur de jasmin) par réaction entre l\'acide éthanoïque et l\'alcool benzylique (alcool primaire). Il mélange 1 mol d\'acide et 1 mol d\'alcool en présence d\'acide sulfurique et chauffe à reflux pendant 2 heures.',
      instructions: [
        '1. Écris l\'équation-bilan de cette réaction chimique et nomme la famille des produits formés.',
        '2. Précise le rôle de l\'acide sulfurique et du chauffage à reflux.',
        '3. Détermine la quantité maximale d\'ester obtenue à l\'équilibre pour cet alcool primaire.',
        '4. Propose une méthode chimique pour obtenir une réaction totale et rapide avec un rendement de 100%.'
      ],
      solutionGuide: '1. Équation : CH3COOH + C6H5-CH2OH ⇌ CH3COOCH2-C6H5 + H2O. Produits : Ester (acétate de benzyle) et eau.\n2. Rôles : L\'acide sulfurique est un catalyseur (augmente la vitesse sans modifier l\'équilibre) ; le chauffage à reflux accélère la réaction tout en condensant les vapeurs pour éviter les pertes de réactifs et de produits.\n3. Pour un mélange équimolaire d\'acide carboxylique et d\'alcool primaire, le rendement d\'estérification est de 67% (2/3) : n_ester = 0,67 mol.\n4. Pour rendre la synthèse totale et rapide, on remplace l\'acide éthanoïque par le chlorure d\'éthanoyle (CH3COCl) ou l\'anhydride éthanoïque ((CH3CO)2O).'
    },
    examTraps: [
      'Oublier de projeter le vecteur accélération dans le repère choisi lors de l\'application du PFD.',
      'Croire que la demi-équivalence correspond à la moitié du pH (c\'est la moitié du VOLUME VbE !).'
    ],
    quickMemo: 'PFD : ∑F = m·a. Rayon B : R = mv/(qB). pH = pKa + log([Base]/[Acide]). Équivalence : CaVa = CbVbE. Estérification primaire : rendement 67%.',
    keywords: ['PFD', 'Newton', 'projectile', 'champ magnétique', 'force de Lorentz', 'titrage', 'pKa', 'équivalence', 'estérification', 'Terminale C', 'Terminale D']
  },

  // ==========================================
  // TERMINALE D - SVT (DPFC / MENA)
  // ==========================================
  {
    id: 'svt-tle-d-genetique-immunologie-neurophysiologie',
    discipline: 'svt',
    disciplineLabel: 'SVT (Terminale D - Bac)',
    level: 'terminale',
    levelLabel: 'Terminale D (Bac Scientifique)',
    serie: 'tle_d',
    serieLabel: 'Terminale D',
    chapter: 'Génétique Formelle & Moléculaire, Immunologie Approfondie & Neurophysiologie',
    lessonTitle: 'Lois de Mendel, dihybridisme, réplication/transcription/traduction, cycle du VIH et potentiel d\'action',
    objectifs: [
      'Résoudre un problème de génétique mendélienne : monohybridisme et dihybridisme (gènes indépendants vs liés, crossing-over)',
      'Décrire la synthèse des protéines : transcription de l\'ADN en ARNm et traduction avec le code génétique',
      'Expliquer le mécanisme d\'infection par le VIH, la destruction des lymphocytes T4 et la phase SIDA',
      'Analyser le potentiel d\'action (dépolarisation, repolarisation, hyperpolarisation) et la transmission synaptique neurochimique'
    ],
    fullCourseContent: `1. Génétique Formelle et Hérédité :
- Monohybridisme (étude d'un seul caractère) :
  * 1ère loi de Mendel (Uniformité des hybrides de F1) : Si deux lignées pures diffèrent par un caractère, la descendance F1 est 100% homogène.
  * Si dominance complète : Croisement F1 × F1 donne en F2 les proportions 3/4 [Phénotype dominant] et 1/4 [Phénotype récessif].
  * Test-cross (croisement test avec un parent récessif) : Donne 50% [Dominant] et 50% [Récessif].
- Dihybridisme (étude de deux caractères) :
  * Deux gènes indépendants (portés par des paires de chromosomes distinctes) :
    Croisement F1 × F1 donne en F2 les proportions [9/16 ; 3/16 ; 3/16 ; 1/16].
    Test-cross donne 4 phénotypes d'égales proportions : 25% ; 25% ; 25% ; 25% (1/4 chacun).
  * Deux gènes liés (linkage, situés sur la même paire de chromosomes) :
    Test-cross donne une majorité de phénotypes parentaux (> 50%) et une minorité de phénotypes recombinés (< 50%) issus du crossing-over (enjambement en prophase I de méiose).
    Pourcentage de recombinaison = (Nombre d'individus recombinés / Total) × 100 = Distance génétique en centimorgans (cM).

2. Génétique Moléculaire :
- Transcription (dans le noyau) : L'ARN polymérase synthétise un brin d'ARNm complémentaire au brin transcrit de l'ADN (A ↔ U, T ↔ A, C ↔ G, G ↔ C).
- Traduction (dans le cytoplasme au niveau des ribosomes) :
  * Initiation : Le ribosome se fixe au codon initiateur AUG (code pour la Méthionine).
  * Élongation : Les ARNt apportent les acides aminés spécifiques selon le code génétique (triplets de nucléotides = codons).
  * Terminaison : Le ribosome rencontre un codon stop (UAA, UAG, UGA) et libère la chaîne polypeptidique.

3. Immunologie et Infection par le VIH :
- Le VIH (Virus de l'Immunodéficience Humaine) est un rétrovirus à ARN qui cible spécifiquement les lymphocytes T4 (LT4 / CD4), véritables chefs d'orchestre de l'immunité.
- Cycle viral : Fixation (gp120 sur récepteur CD4) -> Fusion et pénétration -> Rétrotranscription de l'ARN en ADN proviral par la transcriptase inverse -> Intégration dans le génome de l'hôte par l'intégrase -> Transcription et synthèse des protéines virales -> Assemblage et bourgeonnement.
- Évolution de la maladie : Phase de primo-infection (charge virale élevée, séropositivité) -> Phase asymptomatique (baisse lente des LT4) -> Phase de SIDA déclaré (LT4 < 200/mm³, effondrement immunitaire et apparition de maladies opportunistes : tuberculose, sarcome de Kaposi, candidoses).

4. Neurophysiologie :
- Potentiel de repos : Différence de potentiel transmembranaire de repos d'environ -70 mV (l'intérieur de l'axone est négatif par rapport à l'extérieur, maintenu par la pompe Na+/K+ ATPase).
- Potentiel d'action (PA) : Réponse stéréotypée suivant la "loi du tout ou rien" lorsque le seuil de dépolarisation est atteint :
  1. Dépolarisation brutale (entrée massive d'ions Na+ par les canaux voltage-dépendants).
  2. Repolarisation (fermeture des canaux Na+ et sortie d'ions K+).
  3. Hyperpolarisation transitoire (sortie prolongée de K+).
- Transmission synaptique : Arrivée du PA à la terminaison présynaptique -> Entrée de Ca2+ -> Exocytose des vésicules de neurotransmetteur (ex: acétylcholine) dans la fente synaptique -> Fixation sur les récepteurs postsynaptiques -> Naissance d'un potentiel postsynaptique (PPSE ou PPSI).`,
    definitions: [
      {
        term: 'Crossing-over (Enjambement)',
        definition: 'Échange réciproque de segments de chromatides non-sœurs entre chromosomes homologues lors de la prophase I de la méiose, créant de nouvelles combinaisons alléliques.'
      },
      {
        term: 'Séropositivité',
        definition: 'Présence dans le sérum d\'un individu d\'anticorps spécifiques dirigés contre un agent pathogène déterminé (ex : anticorps anti-VIH), attestant d\'un contact préalable avec ce virus.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Proportions du Test-Cross en dihybridisme',
        statement: '4 phénotypes à 25% chacun = Gènes indépendants (brassage interchromosomique). Majorité de parentaux et minorité de recombinés = Gènes liés (brassage intrachromosomique par crossing-over).'
      },
      {
        name: 'Loi du tout ou rien',
        statement: 'Si la stimulation n\'atteint pas le seuil, aucun potentiel d\'action ne naît. Dès que le seuil est franchi, le PA présente d\'emblée son amplitude maximale constante.'
      }
    ],
    formulas: [
      {
        name: 'Distance génétique (Fréquence de recombinaison)',
        formula: 'd (en cM) = (Nombre de recombinés / Nombre total d\'individus) × 100',
        explanation: 'Pourcentage de recombinaison équivalent à la distance entre deux locus géniques.',
        unitOrCondition: 'Centimorgans (cM)'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Résoudre un exercice de génétique au Bac D',
        procedure: '1. Analyser la descendance F1 : Déduire les allèles dominants et récessifs et nommer les symboles.\n2. Analyser les résultats du croisement F2 ou du test-cross : Déterminer si les gènes sont indépendants (proportions 9:3:3:1 ou 1:1:1:1) ou liés.\n3. Écrire le génotype des parents et dresser l\'échiquier de croisement avec les gamètes et leurs probabilités.\n4. Calculer les proportions théoriques et vérifier la conformité avec les données expérimentales.',
        tip: 'Toujours expliciter la convention de notation des allèles (majuscule pour dominant, minuscule pour récessif).'
      }
    ],
    examples: [
      {
        statement: 'On réalise le test-cross d\'une femelle drosophile hétérozygote de corps gris et ailes longues avec un mâle à corps noir et ailes vestigiales. On obtient : 420 [gris, longues], 410 [noir, vestigiales], 85 [gris, vestigiales], 85 [noir, longues]. Interprète ces résultats.',
        solution: 'Total d\'individus = 420 + 410 + 85 + 85 = 1 000 individus.\nPhénotypes parentaux = 420 + 410 = 830 (83% > 50%).\nPhénotypes recombinés = 85 + 85 = 170 (17% < 50%).\nComme les recombinés sont minoritaires, les deux gènes sont LIÉS (portés par le même chromosome).\nLes individus recombinés résultent d\'un crossing-over survenu en prophase I de méiose chez la femelle.\nDistance génétique = (170 / 1 000) × 100 = 17 cM.'
      }
    ],
    exercises: [
      {
        question: 'Un fragment de brin transcrit d\'ADN porte la séquence suivante : 3\'- TAC GGC TTA CTG ACT - 5\'. Donne la séquence de l\'ARNm transcrit correspondant.',
        correction: 'Par complémentarité des bases (A ↔ U, T ↔ A, C ↔ G, G ↔ C) et inversion de polarité :\nBrin transcrit ADN : 3\'- TAC GGC TTA CTG ACT - 5\'\nBrin d\'ARNm : 5\'- AUG CCG AAU GAC UGA - 3\'.'
      }
    ],
    evaluationSituation: {
      context: 'À la maternité du CHU de Treichville, un couple non atteint demande un conseil génétique car ils ont déjà eu un premier enfant atteint de drépanocytose (forme homozygote SS sévère). La mère est actuellement enceinte de son deuxième enfant et s\'inquiète de la transmission de la maladie.',
      instructions: [
        '1. Rappelle le mode de transmission génétique de la drépanocytose (dominant ou récessif, autosomique ou lié au sexe).',
        '2. Détermine le génotype obligatoire des deux parents.',
        '3. Construis un échiquier de croisement et calcule la probabilité pour le fœtus d\'être : (a) sain non porteur (AA), (b) porteur sain (AS), (c) malade drépanocytaire (SS).'
      ],
      solutionGuide: '1. La drépanocytose est une maladie génétique autosomique récessive (les deux parents sont sains mais ont eu un enfant malade, donc l\'allèle muté S est masqué chez les parents hétérozygotes).\n2. Les parents étant sains mais ayant transmis l\'allèle S à leur premier enfant (SS), ils sont obligatoirement tous deux hétérozygotes de génotype (A // S).\n3. Échiquier de croisement :\n   Gamètes mère : 1/2 A et 1/2 S\n   Gamètes père : 1/2 A et 1/2 S\n   Croisement :\n   - 1/4 (A // A) : Phénotype [A], enfant sain non porteur (25%).\n   - 2/4 = 1/2 (A // S) : Phénotype [A], enfant porteur sain du trait drépanocytaire (50%).\n   - 1/4 (S // S) : Phénotype [S], enfant atteint de drépanocytose (25%).\nConclusion : À chaque grossesse, le risque que l\'enfant naisse malade est de 1/4 (25%).'
    },
    examTraps: [
      'Confondre transcription (dans le noyau, ADN -> ARNm) et traduction (dans le cytoplasme, ARNm -> Protéine).',
      'Oublier que les LT4 sont la cible élective du VIH, ce qui paralyse l\'ensemble de la réponse immunitaire.'
    ],
    quickMemo: 'Gènes indépendants : test-cross 1:1:1:1. Gènes liés : majorités parentaux, minorité recombinés par crossing-over. VIH : cible LT4/CD4. Transcription ADN->ARNm, Traduction ARNm->Protéine.',
    keywords: ['SVT Terminale D', 'Bac D', 'génétique', 'Mendel', 'crossing-over', 'test-cross', 'VIH', 'SIDA', 'LT4', 'potentiel d\'action', 'synapse', 'drépanocytose']
  }
];
