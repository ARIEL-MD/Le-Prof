/**
 * LE PROF — Maths Tle A Knowledge Base
 * Generated from the supplied Maths Tle A course.
 *
 * This file stores structured, paraphrased knowledge:
 * chapters, notions, formulas and resolution methods.
 * The original PDF remains the source document for detailed retrieval.
 */

export type MathsChapter = {
  id: string;
  lessonNumber?: number;
  title: string;
  pages: [number, number];
  applicableSeries: ('A1' | 'A2')[];
  topics: string[];
  formulas: string[];
  methods: string[];
  seriesSpecificities?: {
    a1Only?: string[];
    a2Only?: string[];
    commonNotes?: string[];
  };
};

export const mathsTleAKnowledgeBase: {
  name: string;
  version: string;
  source: string;
  level: string;
  chapters: MathsChapter[];
  seriesGuidelines: {
    A1: {
      description: string;
      allowedMethods: string[];
      specificContent: string[];
    };
    A2: {
      description: string;
      allowedMethods: string[];
      forbiddenMethodsForA2: string[];
      defaultAdjustmentMethod: string;
    };
  };
  runtimePolicy: {
    primarySource: string;
    apiRequired: boolean;
    apiRole: string;
    resolutionOrder: string[];
    photoFlow: string[];
  };
} = {
  "name": "LE PROF — Knowledge Base Maths Tle A (A1 & A2)",
  "version": "2.0.0",
  "source": "Mathématiques Terminales Littéraires - Côte d'Ivoire École Numérique (Tle A1 & A2)",
  "level": "Terminale A (A1 & A2)",
  "seriesGuidelines": {
    "A1": {
      "description": "Série A1 (Littéraire avec dominante Mathématiques renforcées) : programme complet incluant Moindres Carrés, variables aléatoires, primitives avancées e^u & calcul intégral/aires.",
      "allowedMethods": [
        "Ajustement linéaire par Moindres Carrés (Covariance, variances, r, droites y=ax+b et x=a'y+b')",
        "Méthode de Mayer",
        "Ajustement non-linéaire avec changement de variable logarithmique (y = ln z)",
        "Tableau de séries marginales et fréquences marginales",
        "Variables aléatoires X, loi de probabilité, espérance E(X), variance V(X), écart-type σ",
        "Primitives de fonctions exponentielles (e^(ax+b), u'e^u, quotients)",
        "Calcul intégral ∫_a^b f(x)dx et calcul d'aires délimitées par courbes",
        "Suites arithmétiques et géométriques",
        "Systèmes linéaires R² et inéquations graphiques"
      ],
      "specificContent": [
        "Variables aléatoires, espérance, variance et rentabilité de jeu",
        "Moindres Carrés, coefficient de corrélation r (|r| ≥ 0.87), droites de régression Y en X et X en Y",
        "Primitives de u'e^u et primitives rationnelles d'exponentielles",
        "Calcul d'intégrales et calculs d'aires en u.a et cm²"
      ]
    },
    "A2": {
      "description": "Série A2 (Littéraire standard) : résolution ciblée sur les méthodes autorisées pour A2 (Mayer, probabilités finies simples, polynômes/rationnelles, ln/exp sans intégrales ni variables aléatoires).",
      "allowedMethods": [
        "Ajustement linéaire par la Méthode de Mayer (droite G1G2 passant par G)",
        "Point moyen G(X̄, Ȳ)",
        "Probabilités sur ensembles finis, équiprobabilité, événement contraire",
        "Fonctions polynômes et rationnelles (limites, dérivées, variations, TVI, dichotomie, balayage)",
        "Logarithme népérien et exponentielle népérienne (bases, équations, variations)",
        "Suites arithmétiques et géométriques (sommes, intérêts simples/composés)",
        "Systèmes linéaires R² (substitution, combinaison) et inéquations graphiques"
      ],
      "forbiddenMethodsForA2": [
        "Variables aléatoires (loi de probabilité, espérance E(X), variance V(X), écart type σ) -> Réservé A1",
        "Méthode des moindres carrés (Covariance, coefficient de corrélation r, droites de régression moindres carrés) -> Réservé A1 (utiliser Mayer pour A2)",
        "Ajustement logarithmique non-linéaire (y = ln z) -> Réservé A1",
        "Séries marginales complètes avec tableau de contingence avancé -> Réservé A1",
        "Primitives d'exponentielles composées (u'e^u) et calcul intégral / calcul d'aires -> Réservé A1"
      ],
      "defaultAdjustmentMethod": "Méthode de Mayer"
    }
  },
  "chapters": [
    {
      "id": "ch1",
      "lessonNumber": 1,
      "title": "Étude de fonctions polynômes et rationnelles",
      "pages": [22, 49],
      "applicableSeries": ["A1", "A2"],
      "topics": [
        "limite d'un polynôme en un point",
        "limite d'un polynôme à l'infini (terme de plus haut degré)",
        "limite d'une fraction rationnelle (définie / non définie, limite à gauche/droite)",
        "opérations sur les limites (somme, produit, inverse, quotient)",
        "formes indéterminées",
        "asymptote horizontale y=b",
        "asymptote verticale x=a",
        "asymptote oblique y=ax+b (lim [f(x)-(ax+b)]=0)",
        "position relative courbe et asymptote",
        "dérivées usuelles et opérations (u+v, ku, uv, u^n, 1/u, u/v)",
        "dérivée et sens de variation",
        "extremum relatif",
        "équation de la tangente y=f'(a)(x-a)+f(a)",
        "théorème des valeurs intermédiaires (TVI)",
        "encadrement par dichotomie",
        "encadrement par balayage",
        "centre de symétrie"
      ],
      "formulas": [
        "lim(x->a) P(x) = P(a)",
        "lim(x->±∞) P(x) = lim(x->±∞) a_n x^n",
        "lim(x->±∞) P(x)/Q(x) = lim(x->±∞) (a_n x^n)/(b_m x^m)",
        "lim(x->a±) 1/(x-a) = ±∞",
        "(u/v)' = (u'v - v'u)/v^2",
        "(u^n)' = n u' u^(n-1)",
        "Tangente : y = f'(a)(x - a) + f(a)",
        "Asymptote oblique : lim(x->±∞) [f(x) - (ax+b)] = 0",
        "Centre de symétrie A(a,b) : f(a+x) + f(a-x) = 2b"
      ],
      "methods": [
        "Calculer limites aux bornes du domaine",
        "Identifier les asymptotes verticales, horizontales et obliques",
        "Calculer f'(x), étudier son signe et dresser le tableau de variations",
        "Appliquer le TVI pour justifier l'existence et l'unicité de la solution f(α)=0",
        "Donner un encadrement de α par dichotomie (division par 2) ou par balayage (pas de 0,1)"
      ]
    },
    {
      "id": "ch2",
      "lessonNumber": 2,
      "title": "Probabilités",
      "pages": [50, 62],
      "applicableSeries": ["A1", "A2"],
      "topics": [
        "expérience aléatoire",
        "univers Ω",
        "éventualités",
        "événements (certain, impossible, contraire Ā, incompatibles)",
        "équiprobabilité P(A) = Card(A)/Card(Ω)",
        "propriétés des probabilités (P(A∪B) = P(A)+P(B)-P(A∩B), P(Ā) = 1-P(A))",
        "tirages simultanés (combinaisons C_n^p)",
        "tirages successifs sans remise (arrangements A_n^p)",
        "tirages successifs avec remise (p-listes n^p)",
        "variable aléatoire X (A1 seulement)",
        "loi de probabilité P(X=x_i) (A1 seulement)",
        "espérance mathématique E(X) (A1 seulement)",
        "variance V(X) et écart-type σ (A1 seulement)",
        "jeu équitable, favorable, défavorable (A1 seulement)"
      ],
      "formulas": [
        "P(A) = Card(A) / Card(Ω)",
        "P(Ā) = 1 - P(A)",
        "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
        "C_n^p = n! / (p!(n-p)!)",
        "A_n^p = n! / (n-p)!",
        "[A1 SEULEMENT] E(X) = Σ p_i x_i",
        "[A1 SEULEMENT] V(X) = Σ p_i x_i^2 - (E(X))^2",
        "[A1 SEULEMENT] σ(X) = √V(X)"
      ],
      "methods": [
        "Identifier le type de tirage et calculer Card(Ω)",
        "Calculer la probabilité d'événements élémentaires et composés",
        "Utiliser l'événement contraire pour les énoncés 'au moins un'",
        "[A1 SEULEMENT] Définir les valeurs prises par la variable aléatoire Ω' = {x_1, ..., x_m}",
        "[A1 SEULEMENT] Dresser le tableau de la loi de probabilité et vérifier Σ p_i = 1",
        "[A1 SEULEMENT] Calculer E(X), V(X), σ(X) et conclure sur la rentabilité du jeu"
      ],
      "seriesSpecificities": {
        "a1Only": [
          "Variables aléatoires X",
          "Loi de probabilité d'une variable aléatoire",
          "Espérance mathématique E(X)",
          "Variance V(X) et Écart-type σ(X)",
          "Jeux équitables (E=0), favorables (E>0), défavorables (E<0)"
        ],
        "a2Only": [
          "Limité aux probabilités sur ensembles finis, dénombrement, équiprobabilité et événement contraire"
        ]
      }
    },
    {
      "id": "ch3",
      "lessonNumber": 3,
      "title": "Logarithme népérien",
      "pages": [63, 72],
      "applicableSeries": ["A1", "A2"],
      "topics": [
        "définition de ln",
        "domaine ]0, +∞[",
        "propriétés algébriques (produit, quotient, puissance, racine)",
        "limites de référence (en 0+, en +∞, croissances comparées x ln x, ln x / x)",
        "dérivée (ln x)' = 1/x et (ln u)' = u'/u",
        "sens de variation (strictement croissante sur ]0, +∞[)",
        "équations et inéquations avec ln",
        "primitives du type u'/u -> ln(u) + k"
      ],
      "formulas": [
        "D_ln = ]0, +∞[, ln(1) = 0, ln(e) = 1",
        "ln(ab) = ln a + ln b",
        "ln(a/b) = ln a - ln b",
        "ln(1/b) = -ln b",
        "ln(a^n) = n ln a",
        "ln(√a) = (1/2) ln a",
        "lim(x->+∞) ln x = +∞, lim(x->0+) ln x = -∞",
        "lim(x->0+) x ln x = 0, lim(x->+∞) (ln x)/x = 0",
        "(ln u)' = u'/u (u > 0)",
        "Primitives : a/(cx+d) -> (a/c) ln(cx+d) + k, u'/u -> ln(u) + k"
      ],
      "methods": [
        "Poser les contraintes de validité (arguments strictement positifs)",
        "Résoudre équations ln(u)=ln(v) <=> u=v et inéquations ln(u)<ln(v) <=> u<v",
        "Résoudre équations du second degré en ln x en posant X = ln x",
        "Étudier les fonctions comportant du logarithme (limites, dérivée, variations, asymptotes)"
      ]
    },
    {
      "id": "ch4",
      "lessonNumber": 4,
      "title": "Fonction exponentielle",
      "pages": [73, 86],
      "applicableSeries": ["A1", "A2"],
      "topics": [
        "définition comme réciproque de ln",
        "domaine ℝ, e^0=1, e^1=e, e^x > 0",
        "propriétés algébriques (produit, quotient, puissances)",
        "limites de référence (en -∞, en +∞, croissances comparées x e^x, e^x/x, (e^x-1)/x)",
        "dérivée (e^x)' = e^x et (e^u)' = u' e^u",
        "sens de variation (strictement croissante sur ℝ)",
        "équations et inéquations avec exponentielle",
        "primitives d'exponentielles (A1 uniquement : e^(ax+b), u'e^u)",
        "limites rationnelles d'exponentielles (A1 uniquement)"
      ],
      "formulas": [
        "e^x > 0, ln(e^x) = x, e^(ln a) = a (a > 0)",
        "e^(a+b) = e^a e^b, e^(a-b) = e^a / e^b, e^(-a) = 1/e^a, (e^a)^r = e^(ar)",
        "lim(x->+∞) e^x = +∞, lim(x->-∞) e^x = 0",
        "lim(x->+∞) e^x/x = +∞, lim(x->-∞) x e^x = 0, lim(x->0) (e^x-1)/x = 1",
        "(e^u)' = u' e^u",
        "[A1 UNIQUEMENT] Primitives : e^(ax+b) -> (1/a) e^(ax+b) + k, u' e^u -> e^u + k"
      ],
      "methods": [
        "Résoudre e^u = e^v <=> u = v et e^u = k <=> u = ln k (k > 0)",
        "Résoudre équations du second degré en e^x en posant X = e^x avec X > 0",
        "Étudier le signe d'expressions factorisées avec exponentielles",
        "[A1 UNIQUEMENT] Déterminer les primitives composées faisant intervenir u' e^u",
        "[A1 UNIQUEMENT] Calculer les limites indéterminées de quotients comportant e^x"
      ],
      "seriesSpecificities": {
        "a1Only": [
          "Primitives de fonctions exponentielles : e^(ax+b), u'e^u, e^(2x)/(1+e^(2x))",
          "Limites de fractions rationnelles d'exponentielles à l'infini"
        ],
        "a2Only": [
          "Propriétés algébriques, équations, inéquations, limites de base et dérivée simple (sans primitives d'exponentielles)"
        ]
      }
    },
    {
      "id": "ch5",
      "lessonNumber": 5,
      "title": "Suites numériques",
      "pages": [12, 21],
      "applicableSeries": ["A1", "A2"],
      "topics": [
        "suites arithmétiques (définition u_(n+1) = u_n + r, raison r)",
        "terme général d'une suite arithmétique u_n = u_0 + nr ou u_n = u_p + (n-p)r",
        "sens de variation d'une suite arithmétique",
        "somme de termes consécutifs d'une suite arithmétique",
        "suites géométriques (définition v_(n+1) = q v_n, raison q)",
        "terme général d'une suite géométrique v_n = v_0 q^n ou v_n = v_p q^(n-p)",
        "sens de variation d'une suite géométrique à termes positifs",
        "somme de termes consécutifs d'une suite géométrique S = v_p (1-q^(n-p+1))/(1-q)",
        "modélisation économique : placement à intérêts simples (arithmétique)",
        "modélisation économique : placement à intérêts composés (géométrique)"
      ],
      "formulas": [
        "Suite arithmétique : u_(n+1) - u_n = r",
        "Terme général arithmétique : u_n = u_p + (n - p)r",
        "Somme arithmétique : S = (nombre de termes) × (premier terme + dernier terme) / 2 = (n - p + 1)(u_p + u_n)/2",
        "Suite géométrique : v_(n+1) / v_n = q",
        "Terme général géométrique : v_n = v_p × q^(n - p)",
        "Somme géométrique : S = (premier terme) × (1 - q^(nombre de termes)) / (1 - q) = v_p (1 - q^(n - p + 1))/(1 - q) (q ≠ 1)"
      ],
      "methods": [
        "Démontrer qu'une suite est arithmétique en calculant u_(n+1) - u_n = r",
        "Démontrer qu'une suite est géométrique en calculant v_(n+1) / v_n = q",
        "Exprimer le terme général en fonction de n",
        "Calculer la somme des n premiers termes",
        "Modéliser des situations concrètes d'évolution de capital ou de salaire"
      ]
    },
    {
      "id": "ch6",
      "lessonNumber": 6,
      "title": "Statistique à deux variables",
      "pages": [87, 108],
      "applicableSeries": ["A1", "A2"],
      "topics": [
        "série statistique double (X, Y)",
        "tableau de contingence",
        "tableaux de séries marginales et fréquences marginales (A1 seulement)",
        "nuage de points",
        "point moyen G(X̄, Ȳ)",
        "ajustement linéaire par la méthode de Mayer (G1, G2, droite (G1G2))",
        "covariance Cov(X,Y) (A1 seulement)",
        "variances V(X) et V(Y) (A1 seulement)",
        "coefficient de corrélation linéaire r (A1 seulement)",
        "condition de forte corrélation |r| ≥ 0.87 (A1 seulement)",
        "droite de régression de Y en X par les moindres carrés (A1 seulement)",
        "droite de régression de X en Y (A1 seulement)",
        "propriété aa' = r² et |r| = √(aa') (A1 seulement)",
        "ajustement non-linéaire avec changement de variable logarithmique y = ln z (A1 seulement)",
        "estimations et prévisions (Mayer pour A2, Moindres Carrés pour A1)"
      ],
      "formulas": [
        "Point moyen : X̄ = (1/n) Σ x_i, Ȳ = (1/n) Σ y_i => G(X̄, Ȳ)",
        "Méthode de Mayer : a = (Ȳ_2 - Ȳ_1)/(X̄_2 - X̄_1), b = Ȳ_1 - a X̄_1 => (G1G2) : y = ax + b",
        "[A1 SEULEMENT] Cov(X,Y) = (1/n) Σ x_i y_i - X̄ Ȳ",
        "[A1 SEULEMENT] V(X) = (1/n) Σ x_i^2 - X̄^2, V(Y) = (1/n) Σ y_i^2 - Ȳ^2",
        "[A1 SEULEMENT] r = Cov(X,Y) / (√V(X) √V(Y))",
        "[A1 SEULEMENT] Droite de régression Y en X : y = ax + b avec a = Cov(X,Y)/V(X) et b = Ȳ - a X̄",
        "[A1 SEULEMENT] Droite de régression X en Y : x = a'y + b' avec a' = Cov(X,Y)/V(Y) et b' = X̄ - a' Ȳ",
        "[A1 SEULEMENT] aa' = r²"
      ],
      "methods": [
        "Représenter le nuage de points et calculer le point moyen G(X̄, Ȳ)",
        "A2 et A1 : Appliquer la méthode de Mayer (partage en 2 sous-séries, calcul de G1 et G2, équation de (G1G2), prévision)",
        "[A1 SEULEMENT] Dresser les séries marginales en ligne et colonne",
        "[A1 SEULEMENT] Calculer Cov(X,Y), V(X), V(Y) et le coefficient de corrélation r",
        "[A1 SEULEMENT] Vérifier si |r| ≥ 0.87 pour justifier l'ajustement affine",
        "[A1 SEULEMENT] Déterminer la droite de régression des moindres carrés et faire l'estimation",
        "[A1 SEULEMENT] Réaliser un ajustement exponentiel par transformation logarithmique y = ln z"
      ],
      "seriesSpecificities": {
        "a1Only": [
          "Tableaux de séries marginales et fréquences marginales",
          "Covariance Cov(X,Y)",
          "Coefficient de corrélation linéaire r et condition |r| ≥ 0.87",
          "Méthode des moindres carrés (droites de régression Y en X et X en Y)",
          "Ajustement non-linéaire (changement de variable logarithmique y = ln z)"
        ],
        "a2Only": [
          "Méthode de Mayer comme méthode de référence pour l'ajustement et les prévisions",
          "Calcul du point moyen G(X̄, Ȳ) et des points moyens de sous-nuages G1 et G2"
        ]
      }
    },
    {
      "id": "ch7",
      "lessonNumber": 7,
      "title": "Systèmes linéaires dans ℝ × ℝ et programmation linéaire",
      "pages": [2, 11],
      "applicableSeries": ["A1", "A2"],
      "topics": [
        "systèmes d'équations linéaires dans ℝ × ℝ (méthode de substitution, méthode de combinaison)",
        "systèmes non-linéaires avec changement de variables (a ln x + b ln y = c, a e^x + b e^y = c)",
        "inéquations dans ℝ × ℝ du type ax + by + c > 0 ou ax + by + c ≥ 0",
        "droite frontière (D) : ax + by + c = 0, demi-plans ouverts et fermés",
        "systèmes d'inéquations dans ℝ × ℝ (intersection de demi-plans)",
        "programmation linéaire : domaine des possibilités / région de faisabilité",
        "recherche des couples solutions à coordonnées entières dans le domaine des possibilités"
      ],
      "formulas": [
        "Système linéaire : { ax + by = c ; a'x + b'y = c' }",
        "Changement de variables ln : X = ln x, Y = ln y (x > 0, y > 0) => x = e^X, y = e^Y",
        "Changement de variables exp : X = e^x, Y = e^y (X > 0, Y > 0) => x = ln X, y = ln Y",
        "Droite frontière : ax + by + c = 0",
        "Test de l'origine O(0,0) : ax_O + by_O + c = c"
      ],
      "methods": [
        "Résoudre un système linéaire par substitution ou combinaison linéaire",
        "Poser le changement de variable X=ln x, Y=ln y ou X=e^x, Y=e^y puis résoudre le système linéaire associé",
        "Tracer la droite frontière (D) dans un repère (O,I,J)",
        "Tester un point hors de la droite (ex. origine O(0,0)) pour déterminer le demi-plan solution",
        "Modéliser une situation complexe sous forme de système d'inéquations et déterminer les solutions entières admissibles"
      ]
    },
    {
      "id": "ch8",
      "lessonNumber": 8,
      "title": "Primitives et calcul intégral",
      "pages": [109, 117],
      "applicableSeries": ["A1"],
      "topics": [
        "définition de primitive F'(x) = f(x)",
        "ensemble des primitives F(x) + c",
        "primitive vérifiant une condition initiale F(x_0) = y_0",
        "primitives des fonctions usuelles (a, x^n, 1/x^n, x^r)",
        "opérations sur les primitives (u+v, au, u' u^m, u'/u, u' e^u)",
        "définition de l'intégrale ∫_a^b f(x)dx = [F(x)]_a^b = F(b) - F(a)",
        "propriété de la variable muette ∫_a^b f(x)dx = ∫_a^b f(t)dt",
        "interprétation graphique de l'intégrale d'une fonction positive",
        "unité d'aire (1 u.a = OI × OJ cm²)",
        "calcul d'aire délimitée par une courbe et l'axe des abscisses",
        "calcul d'aire délimitée par deux courbes A = ∫_a^b [f(x) - g(x)] dx u.a (f ≥ g)"
      ],
      "formulas": [
        "F'(x) = f(x)",
        "∫ a dx = ax + c",
        "∫ x^n dx = (x^(n+1))/(n+1) + c (n ∈ ℕ)",
        "∫ 1/x^n dx = -1/((n-1)x^(n-1)) + c (n ≥ 2)",
        "∫ x^r dx = (x^(r+1))/(r+1) + c (r ≠ -1)",
        "∫ u' u^m dx = (u^(m+1))/(m+1) + c (m ≠ -1)",
        "∫ u'/u dx = ln|u| + c",
        "∫ u' e^u dx = e^u + c",
        "Intégrale : ∫_a^b f(x)dx = [F(x)]_a^b = F(b) - F(a)",
        "Aire sous courbe : A = (∫_a^b f(x)dx) u.a",
        "Aire entre deux courbes : A = (∫_a^b [f(x) - g(x)]dx) u.a"
      ],
      "methods": [
        "Reconnaître la forme d'une fonction pour trouver sa primitive",
        "Déterminer la constante c à partir d'une condition initiale",
        "Calculer une intégrale définie par les crochets [F(x)]_a^b",
        "Calculer l'aire sous une courbe ou entre deux courbes en unités d'aire puis convertir en cm²"
      ],
      "seriesSpecificities": {
        "a1Only": [
          "Calcul intégral, intégrales définies ∫_a^b f(x)dx",
          "Calculs d'aires délimitées par courbes et droites",
          "Primitives de composées avancées (u'u^m, u'e^u)"
        ],
        "a2Only": [
          "Non inclus au programme de Terminale A2 (A2 se limite aux dérivées et primitives simples de polynômes/rationnelles)"
        ]
      }
    }
  ],
  "runtimePolicy": {
    "primarySource": "Mathématiques Terminales Littéraires (Tle A1 & A2) - Côte d'Ivoire École Numérique",
    "apiRequired": false,
    "apiRole": "fallback only",
    "resolutionOrder": [
      "detect_serie_a1_vs_a2",
      "detect_exercise_type",
      "retrieve_chapter",
      "retrieve_relevant_method_and_formula",
      "enforce_serie_specific_constraints",
      "solve",
      "verify",
      "generate_explanation"
    ],
    "photoFlow": [
      "OCR/vision",
      "clean_statement",
      "detect_exercise_type",
      "retrieve_course_knowledge",
      "solve",
      "verify"
    ]
  }
} as any;

/** Returns the most relevant chapters for an exercise, taking serie into account if provided. */
export function findMathsChapters(query: string, limit = 3, serie?: 'A1' | 'A2'): MathsChapter[] {
  const q = query.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
  const scored = mathsTleAKnowledgeBase.chapters.map(chapter => {
    let score = 0;
    if (serie && chapter.applicableSeries.includes(serie)) {
      score += 3;
    }
    for (const term of [...chapter.topics, ...chapter.formulas, ...chapter.methods]) {
      const t = term.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
      if (q.includes(t)) score += 2;
    }
    return { chapter, score };
  });
  return scored.sort((a,b) => b.score - a.score).slice(0, limit).map(x => x.chapter);
}

/** Returns whether a given method is officially allowed for the chosen serie (A1 or A2). */
export function isMethodAllowedForSerie(methodName: string, serie: 'A1' | 'A2'): boolean {
  if (serie === 'A1') return true;
  const m = methodName.toLowerCase();
  if (m.includes('moindres carr') || m.includes('covariance') || m.includes('variable aléatoire') || m.includes('intégrale') || m.includes('calcul d\'aire')) {
    return false;
  }
  return true;
}

/** Returns the resolution instructions that should be passed to a solver. */
export function buildMathsContext(query: string, serie?: 'A1' | 'A2'): string {
  const chapters = findMathsChapters(query, 2, serie);
  if (!chapters.length) return "Aucun chapitre Tle A identifié.";
  const serieNotice = serie === 'A2'
    ? "NOTE IMPORTANTE SÉRIE A2 : Résolution strictement au niveau A2 (utiliser la méthode de Mayer pour les ajustements statistiques doubles, pas de moindres carrés, pas de variables aléatoires, pas de calcul intégral)."
    : serie === 'A1'
    ? "NOTE IMPORTANTE SÉRIE A1 : Résolution au niveau A1 approfondi (moindres carrés, covariance, r, variables aléatoires, primitives avancées e^u et calcul intégral autorisés)."
    : "Série A (A1/A2)";

  return `${serieNotice}\n\n` + chapters.map(c =>
    `LEÇON ${c.lessonNumber || ''}: ${c.title} (Séries: ${c.applicableSeries.join(', ')})\nNOTIONS: ${c.topics.join(", ")}\nFORMULES: ${c.formulas.join(" | ")}\nMETHODES: ${c.methods.join(" | ")}`
  ).join("\n\n");
}

