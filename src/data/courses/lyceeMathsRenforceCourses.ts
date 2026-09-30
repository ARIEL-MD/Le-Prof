import { OfficialIvorianCourse } from '../../types';

export const LYCEE_MATHS_RENFORCE_COURSES: OfficialIvorianCourse[] = [
  // ==========================================
  // 1. MATHS 1ÈRE C & D : LE BARYCENTRE DANS LE PLAN
  // ==========================================
  {
    id: 'maths-1ere-cd-barycentre-plan',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques (Première C & D)',
    level: '1ere',
    levelLabel: 'Première C & D',
    serie: '1ere_c',
    serieLabel: 'Première C & D',
    chapter: "Géométrie vectorielle : Le Barycentre",
    lessonTitle: "Barycentre de deux, trois et quatre points pondérés, associativité et lignes de niveau",
    objectifs: [
      "Définir le barycentre de points pondérés (A, α), (B, β), (C, γ) sous la condition fondamentale α + β + γ ≠ 0",
      "Exprimer la position du barycentre par la relation vectorielle fondamentale et calculer ses coordonnées cartésiennes",
      "Appliquer le théorème du barycentre partiel (propriété d'associativité) pour construire des points et démontrer des alignements ou concours de droites",
      "Déterminer et construire les lignes de niveau de l'application M ↦ ||α MA⃗ + β MB⃗|| ou f(M) = α MA² + β MB²"
    ],
    fullCourseContent: `1. Définition et existence du barycentre :
- Soit un système de n points pondérés (Aᵢ, αᵢ).
- Condition d'existence : Le barycentre G existe si et seulement si la somme des coefficients est non nulle :
  ∑ αᵢ = α₁ + α₂ + ... + αₙ ≠ 0.
- Relation vectorielle de définition :
  G est l'unique point du plan vérifiant :
  ∑ αᵢ G Aᵢ⃗ = α₁ GA₁⃗ + α₂ GA₂⃗ + ... + αₙ GAₙ⃗ = 0⃗.

2. Propriété fondamentale de réduction :
Pour tout point M quelconque du plan :
α₁ MA₁⃗ + α₂ MA₂⃗ + ... + αₙ MAₙ⃗ = (∑ αᵢ) MG⃗.
En choisissant M = O (origine du repère) ou M = A, on en déduit la relation de construction :
AG⃗ = (β / (α + β)) AB⃗ (pour deux points (A, α) et (B, β)).

3. Coordonnées cartésiennes du barycentre :
Dans un repère (O, i⃗, j⃗), si A(x_A, y_A), B(x_B, y_B) et C(x_C, y_C) :
x_G = (α x_A + β x_B + γ x_C) / (α + β + γ)
y_G = (α y_A + β y_B + γ y_C) / (α + β + γ)

4. Propriété d'associativité (Barycentre partiel) :
Le barycentre d'un système ne change pas si l'on remplace plusieurs points par leur barycentre partiel affecté de la somme de leurs coefficients (à condition que cette somme partielle soit non nulle).
Exemple : Si H = bar{(A, α), (B, β)} avec α + β ≠ 0, alors :
G = bar{(A, α), (B, β), (C, γ)} = bar{(H, α + β), (C, γ)}.

5. Lignes de niveau associées :
- Ensemble des points M tels que ||α MA⃗ + β MB⃗|| = k :
  On réduit le vecteur : ||(α + β) MG⃗|| = k ⇔ |α + β| × MG = k ⇔ MG = k / |α + β| = R.
  * Si R > 0 : Cercle de centre G et de rayon R.
  * Si R = 0 : Le point unique {G}.
  * Si R < 0 : Ensemble vide ∅.
- Ensemble des points M tels que ||MA⃗ + MB⃗|| = ||MA⃗ - MB⃗|| :
  ||2 MI⃗|| = ||BA⃗|| (où I est le milieu de [AB]). Donc MI = AB / 2 : Cercle de diamètre [AB].`,
    definitions: [
      {
        term: 'Point pondéré',
        definition: "Couple formé d'un point géométrique et d'un nombre réel non nul appelé coefficient ou masse affecté à ce point, noté (A, α)."
      },
      {
        term: 'Centre de gravité (Isobarycentre)',
        definition: "Barycentre particulier d'un système de points affectés de coefficients tous égaux (ex: α = β = γ = 1 pour un triangle)."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Invariance par multiplication des coefficients',
        statement: 'Le barycentre ne change pas si l\'on multiplie tous ses coefficients par un même réel k non nul : bar{(A, kα), (B, kβ)} = bar{(A, α), (B, β)}.'
      },
      {
        name: 'Homogénéité vectorielle de réduction',
        statement: 'Pour tout point M : α MA⃗ + β MB⃗ + γ MC⃗ = (α + β + γ) MG⃗.'
      }
    ],
    formulas: [
      {
        name: 'Relation de positionnement',
        formula: '\\vec{AG} = \\frac{\\beta}{\\alpha + \\beta} \\vec{AB}',
        explanation: 'Permet de placer directement le point G sur la droite (AB).',
        unitOrCondition: 'α + β ≠ 0'
      },
      {
        name: 'Coordonnées du barycentre dans le repère',
        formula: 'x_G = \\frac{\\alpha x_A + \\beta x_B + \\gamma x_C}{\\alpha + \\beta + \\gamma}, \\quad y_G = \\frac{\\alpha y_A + \\beta y_B + \\gamma y_C}{\\alpha + \\beta + \\gamma}',
        explanation: 'Moyenne pondérée des coordonnées.',
        unitOrCondition: 'Repère cartésien'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer la ligne de niveau ||2 MA⃗ + 3 MB⃗|| = 10',
        procedure: '1. Vérifier la somme des coefficients : 2 + 3 = 5 ≠ 0.\n2. Poser G = bar{(A, 2), (B, 3)}.\n3. Réduire la somme vectorielle : 2 MA⃗ + 3 MB⃗ = 5 MG⃗.\n4. Prendre la norme : ||5 MG⃗|| = 5 MG = 10.\n5. En déduire MG = 10 / 5 = 2.\n6. Conclure : L\'ensemble des points M est le cercle de centre G et de rayon R = 2.',
        tip: 'Toujours bien factoriser la constante par sa valeur absolue.'
      }
    ],
    examples: [
      {
        statement: "Soient A(1, 2) et B(4, -1). Détermine les coordonnées de G = bar{(A, 2), (B, 1)}.",
        solution: "1. Somme des coefficients = 2 + 1 = 3 ≠ 0.\n2. x_G = (2 × 1 + 1 × 4) / 3 = (2 + 4) / 3 = 6/3 = 2.\n3. y_G = (2 × 2 + 1 × (-1)) / 3 = (4 - 1) / 3 = 3/3 = 1.\nConclusion : G(2, 1)."
      }
    ],
    exercises: [
      {
        question: "Soit un triangle ABC. Démontrez que le centre de gravité G est situé aux deux tiers de chaque médiane en partant du sommet.",
        correction: "G est l'isobarycentre de {(A, 1), (B, 1), (C, 1)}. Soit I le milieu de [BC], donc I = bar{(B, 1), (C, 1)} avec masse 2. Par associativité, G = bar{(A, 1), (I, 2)}. On en déduit : 1 GA⃗ + 2 GI⃗ = 0⃗ ⇔ AG⃗ = (2/3) AI⃗. G est donc situé aux 2/3 du segment médian [AI] à partir du sommet A."
      }
    ],
    evaluationSituation: {
      context: "Un réseau de transport de courant haute tension relie trois sous-stations électriques situées aux points A(0, 0), B(6, 0) et C(3, 6) (coordonnées en kilomètres). Les charges de consommation imposent d'installer un transformateur central au barycentre G des points (A, 1), (B, 2) et (C, 3).",
      instructions: [
        "1. Justifie l'existence du point d'implantation G.",
        "2. Calcule les coordonnées exactes du transformateur G dans le plan.",
        "3. Détermine le rayon de la zone de sécurité circulaire décrite par l'équation ||MA⃗ + 2MB⃗ + 3MC⃗|| ≤ 18 km."
      ],
      solutionGuide: "1. 1 + 2 + 3 = 6 ≠ 0, donc G existe et est unique. 2. x_G = (1(0) + 2(6) + 3(3)) / 6 = (12 + 9) / 6 = 21/6 = 3,5 km ; y_G = (1(0) + 2(0) + 3(6)) / 6 = 18/6 = 3 km. Donc G(3.5 ; 3). 3. ||6 MG⃗|| ≤ 18 ⇔ 6 MG ≤ 18 ⇔ MG ≤ 3 km. Il s'agit du disque fermé de centre G et de rayon R = 3 km."
    },
    examTraps: [
      "Oublier de vérifier si la somme des coefficients est non nulle avant de conclure à l'existence du barycentre.",
      "Confondre la somme vectorielle α MA⃗ + β MB⃗ qui se réduit avec G, et la différence MA⃗ - MB⃗ qui est un vecteur constant égal à BA⃗ (indépendant de M car somme des coefficients nulle 1 - 1 = 0)."
    ],
    quickMemo: "bar{(A,α), (B,β)} : AG⃗ = (β/(α+β)) AB⃗ si α+β ≠ 0. Réduction : αMA⃗ + βMB⃗ = (α+β)MG⃗. Coordonnées : moyenne pondérée.",
    keywords: ["barycentre", "points pondérés", "associativité", "isobarycentre", "lignes de niveau", "géométrie vectorielle", "maths 1ere c"]
  },

  // ==========================================
  // 2. MATHS TLE C : ARITHMÉTIQUE DANS ℤ
  // ==========================================
  {
    id: 'maths-tle-c-arithmetique-congruences-bezout',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques (Terminale C)',
    level: 'terminale',
    levelLabel: 'Terminale C',
    serie: 'tle_c',
    serieLabel: 'Terminale C',
    chapter: "Arithmétique dans l'ensemble des entiers relatifs ℤ",
    lessonTitle: "Divisibilité, division euclidienne, congruences modulo n, PGCD et théorèmes de Bézout et Gauss",
    objectifs: [
      "Maîtriser la division euclidienne dans ℤ et le calcul du PGCD par l'algorithme d'Euclide",
      "Résoudre des équations diophantiennes linéaires de type ax + by = c dans ℤ × ℤ",
      "Énoncer et appliquer le théorème de Bézout (a ∧ b = 1 ⇔ ∃ u, v ∈ ℤ, au + bv = 1) et le théorème de Gauss",
      "Calculer dans l'anneau des congruences ℤ/nℤ et appliquer le petit théorème de Fermat pour la cryptographie RSA"
    ],
    fullCourseContent: `1. Divisibilité et division euclidienne dans ℤ :
- Définition : Soient a, b ∈ ℤ avec b ≠ 0. On dit que b divise a (noté b | a) s'il existe un entier k ∈ ℤ tel que a = k · b.
- Théorème de la division euclidienne : Pour tout a ∈ ℤ et b ∈ ℕ*, il existe un unique couple d'entiers (q, r) tel que :
  a = b · q + r   avec   0 ≤ r < b.

2. PGCD et Algorithme d'Euclide :
- Le PGCD de a et b (noté a ∧ b ou PGCD(a, b)) est le plus grand entier naturel qui divise simultanément a et b.
- Propriété fondamentale : Si a = bq + r, alors PGCD(a, b) = PGCD(b, r).
- Deux entiers a et b sont dits premiers entre eux si PGCD(a, b) = 1.

3. Théorèmes de Bézout et de Gauss :
- Théorème de Bézout : Deux entiers a et b sont premiers entre eux si et seulement s'il existe deux entiers relatifs u et v tels que :
  a · u + b · v = 1.
- Identité de Bézout générale : Pour tous a, b ∈ ℤ, il existe u, v ∈ ℤ tels que :
  a · u + b · v = PGCD(a, b).
- Théorème de Gauss : Soient a, b, c ∈ ℤ.
  Si a divise le produit b · c et si a est premier avec b (a ∧ b = 1), alors a divise c.
- Conséquence : Si p est un nombre premier et si p | ab, alors p | a ou p | b.

4. Congruences modulo n :
- Définition : Pour n ∈ ℕ* et a, b ∈ ℤ, on écrit a ≡ b [n] (lire "a est congru à b modulo n") si n divise (a - b), ou de manière équivalente si a et b ont le même reste dans la division euclidienne par n.
- Propriétés :
  * Compatibilité avec l'addition : a ≡ b [n] et c ≡ d [n] ⇒ a + c ≡ b + d [n].
  * Compatibilité avec la multiplication : a ≡ b [n] et c ≡ d [n] ⇒ a · c ≡ b · d [n].
  * Compatibilité avec les puissances : a ≡ b [n] ⇒ aᵏ ≡ bᵏ [n] pour tout k ∈ ℕ.

5. Le Petit Théorème de Fermat :
Si p est un nombre premier et a un entier non divisible par p, alors :
a^(p - 1) ≡ 1 [p].
Pour tout entier a ∈ ℤ : a^p ≡ a [p].`,
    definitions: [
      {
        term: 'Nombres premiers entre eux',
        definition: "Deux entiers relatifs dont le seul diviseur commun strictement positif est 1 (PGCD = 1)."
      },
      {
        term: 'Équation diophantienne',
        definition: "Équation algébrique à coefficients entiers dont on recherche exclusivement les solutions entières dans ℤ."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Condition de résolubilité d\'une équation diophantienne',
        statement: 'L\'équation ax + by = c admet des solutions dans ℤ² si et seulement si PGCD(a, b) divise c.'
      },
      {
        name: 'Théorème de Gauss',
        statement: 'Si a divise b·c et PGCD(a, b) = 1, alors a divise impérativement c.'
      }
    ],
    formulas: [
      {
        name: 'Identité de Bézout',
        formula: 'a \\cdot u + b \\cdot v = \\text{PGCD}(a, b)',
        explanation: 'Les coefficients u et v s\'obtiennent en remontant l\'algorithme d\'Euclide.',
        unitOrCondition: 'u, v ∈ ℤ'
      },
      {
        name: 'Petit théorème de Fermat',
        formula: 'a^{p-1} \\equiv 1 \\pmod{p}',
        explanation: 'Valable si p est premier et a non divisible par p.',
        unitOrCondition: 'p premier, p ∤ a'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Résoudre l\'équation diophantienne 7x - 5y = 1 dans ℤ²',
        procedure: '1. PGCD(7, 5) = 1 qui divise 1, donc il existe des solutions entières.\n2. Trouver une solution particulière évidente : 7(3) - 5(4) = 21 - 20 = 1, donc (x₀, y₀) = (3, 4).\n3. Soustraire membre à membre : 7(x - 3) - 5(y - 4) = 0 ⇔ 7(x - 3) = 5(y - 4).\n4. Appliquer le théorème de Gauss : 7 divise 5(y - 4). Comme PGCD(7, 5) = 1, 7 divise (y - 4), donc y - 4 = 7k, soit y = 7k + 4 (k ∈ ℤ).\n5. Remplacer dans l\'égalité : 7(x - 3) = 5(7k) ⇒ x - 3 = 5k ⇒ x = 5k + 3.\n6. Ensemble des solutions : S = {(5k + 3 ; 7k + 4), k ∈ ℤ}.',
        tip: 'Toujours tester la réciproque en réinjectant la solution dans l\'équation initiale.'
      }
    ],
    examples: [
      {
        statement: "Détermine le reste de la division euclidienne de 3²⁰²⁴ par 7.",
        solution: "1. Le nombre 7 est premier et ne divise pas 3. Par le petit théorème de Fermat, 3⁶ ≡ 1 [7].\n2. Effectuons la division euclidienne de 2024 par 6 : 2024 = 6 × 337 + 2.\n3. Donc 3²⁰²⁴ = (3⁶)³³⁷ × 3² ≡ 1³³⁷ × 9 [7] ≡ 1 × 2 [7] ≡ 2 [7].\nConclusion : Le reste est 2."
      }
    ],
    exercises: [
      {
        question: "Démontrez que pour tout entier naturel n, la fraction (2n + 1) / (3n + 1) est irréductible.",
        correction: "On cherche une relation de Bézout entre (2n + 1) et (3n + 1) indépendante de n : 3(2n + 1) - 2(3n + 1) = 6n + 3 - 6n - 2 = 1. D'après le théorème de Bézout, PGCD(2n + 1, 3n + 1) = 1 pour tout n ∈ ℕ. La fraction est donc irréductible."
      }
    ],
    evaluationSituation: {
      context: "Un cryptologue ivoirien conçoit un protocole de chiffrement basé sur les congruences modulaires. Le message m est chiffré sous la forme c ≡ m^e [n]. Pour n = 11 (nombre premier) et e = 7, un client reçoit le cryptogramme c = 4.",
      instructions: [
        "1. Justifie que pour tout message m non multiple de 11, m¹⁰ ≡ 1 [11].",
        "2. Détermine un entier d tel que e · d ≡ 1 [10].",
        "3. Déchiffre le message d'origine m en calculant c^d mod 11."
      ],
      solutionGuide: "1. Application directe du petit théorème de Fermat avec p = 11 premier. 2. On cherche 7d ≡ 1 [10]. Comme 7 × 3 = 21 ≡ 1 [10], on choisit d = 3. 3. m ≡ c³ ≡ 4³ = 64 [11]. Or 64 = 5 × 11 + 9, donc m = 9."
    },
    examTraps: [
      "Oublier de vérifier la condition PGCD(a, b) = 1 avant d'utiliser le théorème de Gauss.",
      "Travailler avec le module dans les puissances : pour les puissances de a modulo p, on travaille avec l'exposant modulo (p-1) et non modulo p !"
    ],
    quickMemo: "Bézout : au + bv = 1 ⇔ a ∧ b = 1. Gauss : a | bc et a ∧ b = 1 ⇒ a | c. Fermat : a^(p-1) ≡ 1 [p] si p premier et p ∤ a.",
    keywords: ["arithmétique", "divisibilité", "PGCD", "Bézout", "Gauss", "congruence", "Fermat", "équation diophantienne", "maths tle c"]
  },

  // ==========================================
  // 3. MATHS TLE C & D : INTÉGRATION & ÉQUATIONS DIFFÉRENTIELLES
  // ==========================================
  {
    id: 'maths-tle-cd-integration-equations-differentielles',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques (Terminale C & D)',
    level: 'terminale',
    levelLabel: 'Terminale C & D',
    serie: 'tle_d',
    serieLabel: 'Terminale C & D',
    chapter: "Calcul intégral et Équations différentielles",
    lessonTitle: "Primitives, intégration par parties, calcul d'aires et résolution de y' + ay = b et y'' + ω²y = 0",
    objectifs: [
      "Calculer l'intégrale d'une fonction continue à l'aide de primitives usuelles",
      "Maîtriser la formule d'intégration par parties (IPP) pour des produits de fonctions (polynôme × exponentielle ou logarithme)",
      "Calculer des aires géométriques de domaines délimités par des courbes planes en unités d'aire (u.a.)",
      "Résoudre les équations différentielles linéaires du 1er ordre (y' + ay = b) et du 2nd ordre sans amortissement (y'' + ω²y = 0)"
    ],
    fullCourseContent: `1. Intégrale d'une fonction continue :
- Soit f une fonction continue sur [a, b] et F une primitive de f sur [a, b]. L'intégrale de f de a à b est le nombre réel :
  ∫ₐᵇ f(t) dt = [F(t)]ₐᵇ = F(b) - F(a).
- Propriétés fondamentales :
  * Linéarité : ∫ (α f + β g) = α ∫ f + β ∫ g.
  * Relation de Chasles : ∫ₐᵇ f(t) dt + ∫_b^c f(t) dt = ∫ₐᶜ f(t) dt.
  * Positivité : Si f ≥ 0 sur [a, b] avec a ≤ b, alors ∫ₐᵇ f(t) dt ≥ 0.
  * Valeur moyenne : μ = (1 / (b - a)) ∫ₐᵇ f(t) dt.

2. Intégration par parties (IPP) :
- Soient u et v deux fonctions dérivables sur [a, b] à dérivées continues.
  ∫ₐᵇ u(t) v'(t) dt = [u(t) v(t)]ₐᵇ - ∫ₐᵇ u'(t) v(t) dt.
- Règle pratique de choix ALPES :
  Priorité pour poser u(t) : A (Arctan), L (Logarithme ln), P (Polynôme), E (Exponentielle), S (Sin/Cos).

3. Interprétation géométrique et calcul d'aires :
- Si f ≥ g sur [a, b], l'aire du domaine délimité par les courbes Cf, Cg et les droites x = a, x = b est :
  A = ∫ₐᵇ (f(x) - g(x)) dx (en unités d'aire u.a.).
- En centimètres carrés : Aire (cm²) = A × ||i⃗|| × ||j⃗||.

4. Équations différentielles linéaires :
- Type 1 : y' + ay = 0 (avec a constant non nul) :
  Solutions générales : y(x) = C · e^(-ax), où C ∈ ℝ.
- Type 2 : y' + ay = b (avec a ≠ 0, b constants) :
  Solution particulière constante : y_p = b / a.
  Solutions générales : y(x) = C · e^(-ax) + b / a.
- Type 3 : y'' + ω² y = 0 (avec ω > 0) :
  Solutions générales : y(x) = A · cos(ωx) + B · sin(ωx), où A, B ∈ ℝ.
  Forme harmonique équivalente : y(x) = X_m · cos(ωx + φ).`,
    definitions: [
      {
        term: 'Intégrale définie',
        definition: "Nombre réel mesurant l'aire algébrique sous la courbe représentative d'une fonction continue entre deux bornes a et b."
      },
      {
        term: 'Équation différentielle',
        definition: "Équation dont l'inconnue est une fonction y, reliant y à ses dérivées successives y', y''."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Théorème de la primitive',
        statement: 'Toute fonction continue sur un intervalle I admet des primitives sur I.'
      },
      {
        name: 'Unicité avec condition initiale',
        statement: 'L\'équation y\' + ay = b admet une unique solution vérifiant la condition initiale y(x₀) = y₀.'
      }
    ],
    formulas: [
      {
        name: 'Formule d\'Intégration Par Parties (IPP)',
        formula: '\\int_a^b u(t) v\'(t) \\, dt = \\big[ u(t) v(t) \\big]_a^b - \\int_a^b u\'(t) v(t) \\, dt',
        explanation: 'Permet d\'abaisser le degré d\'un polynôme ou d\'éliminer un logarithme.',
        unitOrCondition: 'u, v de classe C¹'
      },
      {
        name: 'Solution générale de y\'\' + ω²y = 0',
        formula: 'y(x) = A \\cos(\\omega x) + B \\sin(\\omega x)',
        explanation: 'Modélise les oscillateurs harmoniques en physique (ressort, circuit LC).',
        unitOrCondition: 'A, B ∈ ℝ'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer ∫₁ᵉ x ln(x) dx par intégration par parties',
        procedure: '1. Appliquer la règle ALPES : poser u(x) = ln(x) et v\'(x) = x.\n2. Dériver et primitiver : u\'(x) = 1/x et v(x) = x² / 2.\n3. Appliquer la formule IPP : [ (x²/2) ln(x) ]₁ᵉ - ∫₁ᵉ (1/x)(x²/2) dx.\n4. Calculer le crochet : (e²/2) ln(e) - (1²/2) ln(1) = e²/2 - 0 = e²/2.\n5. Calculer la nouvelle intégrale : ∫₁ᵉ (x/2) dx = [ x² / 4 ]₁ᵉ = (e² - 1) / 4.\n6. Résultat final : e²/2 - (e² - 1)/4 = (2e² - e² + 1) / 4 = (e² + 1) / 4.',
        tip: 'Vérifier la positivité du résultat final car x ln(x) ≥ 0 sur [1, e].'
      }
    ],
    examples: [
      {
        statement: "Résous l'équation différentielle 2y' + 6y = 12 avec la condition initiale y(0) = 5.",
        solution: "1. Écrire sous forme standard : y' + 3y = 6 (donc a = 3 et b = 6).\n2. Solution générale : y(x) = C e^(-3x) + 6/3 = C e^(-3x) + 2.\n3. Utiliser la condition initiale y(0) = 5 : C e^(0) + 2 = 5 ⇔ C + 2 = 5 ⇔ C = 3.\nConclusion : L'unique solution est y(x) = 3 e^(-3x) + 2."
      }
    ],
    exercises: [
      {
        question: "Donne l'ensemble des solutions de l'équation différentielle y'' + 16y = 0.",
        correction: "On a ω² = 16, d'où ω = 4. Les solutions générales sont les fonctions définies sur ℝ par : y(x) = A cos(4x) + B sin(4x), où A et B sont deux constantes réelles quelconques."
      }
    ],
    evaluationSituation: {
      context: "En physique nucléaire, la désintégration d'un échantillon radioactif d'Iode 131 suit l'équation différentielle dN/dt + λ N = 0, où N(t) est le nombre de noyaux radioactifs à l'instant t (en jours) et λ = 0,0866 j⁻¹. À t = 0, l'échantillon contient N₀ = 10¹² noyaux.",
      instructions: [
        "1. Résous analytiquement cette équation différentielle pour exprimer N(t) en fonction de t.",
        "2. Détermine la demi-vie T₁/₂ de l'Iode 131 (durée au bout de laquelle N(t) = N₀ / 2).",
        "3. Calcule le nombre de noyaux restants après 24 jours (environ 3 demi-vies)."
      ],
      solutionGuide: "1. N(t) = N₀ e^(-λt) = 10¹² e^(-0,0866 t). 2. N₀/2 = N₀ e^(-λ T₁/₂) ⇔ e^(λ T₁/₂) = 2 ⇔ T₁/₂ = ln(2) / λ = 0,693 / 0,0866 ≈ 8 jours. 3. Après 24 jours (3 demi-vies) : N(24) = N₀ / 2³ = 10¹² / 8 = 1,25 × 10¹¹ noyaux."
    },
    examTraps: [
      "Oublier le signe négatif dans la solution générale : c'est e^(-ax) et non e^(ax).",
      "Inverser u et v' lors de l'intégration par parties, ce qui complique l'intégrale au lieu de la simplifier."
    ],
    quickMemo: "IPP : ∫ u v' = [u v] - ∫ u' v. y' + ay = b ⇒ y = C e^(-ax) + b/a. y'' + ω²y = 0 ⇒ y = A cos(ωx) + B sin(ωx).",
    keywords: ["calcul intégral", "primitive", "intégration par parties", "équations différentielles", "aire", "crochet", "maths tle c", "maths tle d"]
  }
];
