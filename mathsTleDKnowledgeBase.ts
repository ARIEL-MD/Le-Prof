/**
 * BASE DE CONNAISSANCES OFFICIELLE : MATHÉMATIQUES TERMINALE D
 * Source : Ministère de l'Éducation Nationale et de l'Alphabétisation - École Numérique Côte d'Ivoire
 * Conforme au programme officiel national et à l'Approche Par Compétences (APC)
 * 
 * Contient les 11 Chapitres / Leçons fondamentales de Terminale D :
 * 1. Limites et Continuité (Limites de référence, opérations, levée d'indéterminations, asymptotes, branches paraboliques)
 * 2. Dérivées et Primitives (Dérivabilité en un point, à gauche/droite, fonction réciproque, dérivée de composées, primitives usuelles et composées)
 * 3. Généralités sur les Études de Fonctions (Parité, centre de symétrie A(a,b), axe de symétrie x=a, éléments caractéristiques)
 * 4. Fonction Logarithme Népérien (Domaine de validité, propriétés algébriques, limites usuelles, croissances comparées, dérivées, primitives, TVI)
 * 5. Fonction Exponentielle (Propriétés algébriques, équations/inéquations, dérivées, primitives, limites, croissances comparées)
 * 6. Intégrale et Calcul d'Aires (Propriétés, Chasles, Linéarité, Positivité, Intégration par parties, Calcul d'aires entre courbes en u.a et cm^2)
 * 7. Suites Numériques (Suites arithmétiques et géométriques, raisonnement par récurrence, monotonie, suites bornées, convergence monotone, suites un+1 = f(un))
 * 8. Probabilités et Dénombrement (p-listes, arrangements, permutations, combinaisons, probabilités conditionnelles, arbres pondérés, variables aléatoires, loi binomiale B(n,p), espérance, variance, fonction de répartition)
 * 9. Nombres Complexes (Forme algébrique, trigonométrique, exponentielle, Moivre, Euler, racines carrées d'un complexe, équations du second degré dans C, racines n-ièmes, configurations géométriques, écritures complexes de transformations et similitudes directes)
 * 10. Statistiques à deux variables (Tableaux de contingence, séries marginales, nuage de points, point moyen G, covariance, corrélation linéaire r, droites de régression des moindres carrés, estimations)
 * 11. Équations Différentielles (y' = ay, y' + ay = b, y'' = 0, y'' - omega^2 y = 0, y'' + omega^2 y = 0, conditions initiales, solution particulière)
 */

export interface MathsTleDLesson {
  lessonNumber: number;
  chapterTitle: string;
  theme: string;
  objectives: string[];
  keyDefinitions: Record<string, string>;
  formulasAndTheorems: Record<string, string>;
  methodsAndAlgorithms: {
    title: string;
    description: string;
    stepByStep: string[];
  }[];
  commonMistakesToAvoid: string[];
}

export interface MathsTleDTheme {
  id: string;
  themeTitle: string;
  lessons: MathsTleDLesson[];
}

export interface MathsTleDKnowledgeBase {
  name: string;
  level: string;
  serie: string;
  country: string;
  version: string;
  themes: MathsTleDTheme[];
}

export const mathsTleDKnowledgeBase: MathsTleDKnowledgeBase = {
  name: "Référentiel National Mathématiques Terminale D",
  level: "Terminale",
  serie: "D",
  country: "Côte d'Ivoire (École Numérique)",
  version: "2024-2026 APC",
  themes: [
    // -------------------------------------------------------------
    // THÈME 1 : ANALYSE & FONCTIONS NUMÉRIQUES
    // -------------------------------------------------------------
    {
      id: "analyse_fonctions_d",
      themeTitle: "Analyse : Limites, Continuité, Dérivation, Primitives, Logarithmes & Exponentielles",
      lessons: [
        {
          lessonNumber: 1,
          chapterTitle: "Limites et Continuité",
          theme: "Analyse",
          objectives: [
            "Connaître et appliquer les limites de référence en l'infini et en un point",
            "Étudier la limite à gauche et à droite pour déterminer la continuité en un point",
            "Calculer les limites de fonctions composées lim (g o f)(x)",
            "Lever les 4 formes indéterminées fondamentales (+inf - inf, 0/0, inf/inf, 0 x inf) via expression conjuguée, factorisation du terme dominant, ou taux de variation",
            "Interpréter graphiquement les limites : Asymptotes verticales (x = a), horizontales (y = b), obliques (y = ax + b)",
            "Identifier les branches paraboliques de direction (OI) (lim f(x)/x = 0) et de direction (OJ) (lim f(x)/x = inf)",
          ],
          keyDefinitions: {
            "Continuité en un point": "f est continue en x0 ssi lim_{x -> x0^-} f(x) = lim_{x -> x0^+} f(x) = f(x0).",
            "Limite d'une fonction composée": "Si lim_{x -> a} g(x) = l et lim_{y -> l} f(y) = l', alors lim_{x -> a} (f o g)(x) = l'.",
            "Asymptote verticale": "La droite x = a est asymptote verticale si lim_{x -> a} f(x) = +inf ou -inf.",
            "Asymptote horizontale": "La droite y = b est asymptote horizontale en +inf (ou -inf) si lim_{x -> +inf} f(x) = b.",
            "Asymptote oblique": "La droite y = ax + b est asymptote oblique si lim_{x -> +/-inf} [f(x) - (ax + b)] = 0.",
            "Branche parabolique direction (OI)": "lim f(x) = inf et lim f(x)/x = 0 en +/-inf.",
            "Branche parabolique direction (OJ)": "lim f(x) = inf et lim f(x)/x = inf en +/-inf.",
          },
          formulasAndTheorems: {
            "Taux de variation usuel": "lim_{x -> 0} (sin x)/x = 1 ; lim_{x -> 0} (cos x - 1)/x = 0",
            "Polynôme en l'infini": "lim (an x^n + ... + a0) = lim (an x^n)",
            "Fonction rationnelle en l'infini": "lim (P(x)/Q(x)) = lim (terme de plus haut degré de P / terme de plus haut degré de Q)",
          },
          methodsAndAlgorithms: [
            {
              title: "Levée de l'indétermination 0/0",
              description: "Techniques pour simplifier les fractions rationnelles ou irrationnelles.",
              stepByStep: [
                "1. Pour une fraction rationnelle P(x)/Q(x) où P(a) = Q(a) = 0, factoriser par (x - a) au numérateur et au dénominateur puis simplifier.",
                "2. Pour une expression avec racine carrée sqrt(u(x)) - v(x), multiplier le numérateur et le dénominateur par l'expression conjuguée sqrt(u(x)) + v(x).",
                "3. Utiliser la définition du nombre dérivé : lim_{x -> a} (g(x) - g(a))/(x - a) = g'(a).",
              ],
            },
            {
              title: "Levée de l'indétermination +inf - inf",
              description: "Techniques pour les sommes de radicaux en l'infini.",
              stepByStep: [
                "1. Si les coefficients dominants sous la racine sont différents : factoriser par x (terme dominant).",
                "2. Si les coefficients dominants sous la racine sont égaux : multiplier et diviser par l'expression conjuguée.",
              ],
            },
          ],
          commonMistakesToAvoid: [
            "Attention à la sortie de x d'une racine carrée en -infini : sqrt(x^2) = |x| = -x pour x < 0.",
          ],
        },
        {
          lessonNumber: 2,
          chapterTitle: "Dérivées et Primitives",
          theme: "Analyse",
          objectives: [
            "Calculer le nombre dérivé en x0 et donner l'équation de la tangente y = f'(x0)(x - x0) + f(x0)",
            "Étudier la dérivabilité à gauche et à droite, interpréter les points anguleux et les demi-tangentes verticales",
            "Dériver une fonction composée : (g o f)'(x) = f'(x) * g'(f(x))",
            "Dériver la bijection réciproque : (f^(-1))'(y0) = 1 / f'(x0) avec y0 = f(x0) et f'(x0) != 0",
            "Déterminer les primitives de fonctions élémentaires et composées usuelles",
            "Trouver l'unique primitive vérifiant une condition initiale F(x0) = y0",
          ],
          keyDefinitions: {
            "Nombre dérivé": "f'(x0) = lim_{x -> x0} (f(x) - f(x0)) / (x - x0).",
            "Tangente": "Droite passant par (x0, f(x0)) de coefficient directeur f'(x0) : y = f'(x0)(x - x0) + f(x0).",
            "Point anguleux": "Point d'abscisse x0 où fg'(x0) != fd'(x0) (demi-tangentes sécantes non alignées).",
            "Demi-tangente verticale": "Lorsque lim_{x -> x0} (f(x) - f(x0))/(x - x0) = +/-inf.",
            "Primitive": "Fonction F dérivable sur I telle que F'(x) = f(x) pour tout x dans I.",
          },
          formulasAndTheorems: {
            "Dérivée de u^n": "(u^n)' = n * u' * u^(n-1)",
            "Dérivée de sqrt(u)": "(sqrt(u))' = u' / (2 sqrt(u))",
            "Dérivée de cos(u)": "(cos u)' = -u' sin(u)",
            "Dérivée de sin(u)": "(sin u)' = u' cos(u)",
            "Dérivée de tan(u)": "(tan u)' = u'(1 + tan^2 u) = u' / cos^2 u",
            "Dérivée de f^(-1)": "(f^(-1))'(y0) = 1 / f'(x0) avec f(x0) = y0",
            "Primitive de u' u^n": "(1 / (n+1)) * u^(n+1) + C (n != -1)",
            "Primitive de u' / sqrt(u)": "2 sqrt(u) + C",
            "Primitive de u' / u^r": "-1 / ((r - 1) u^(r-1)) + C (r != 1)",
            "Primitive de u' cos(u)": "sin(u) + C",
            "Primitive de u' sin(u)": "-cos(u) + C",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Toujours vérifier que u > 0 sur l'intervalle d'étude lors du calcul des dérivées et primitives de sqrt(u).",
          ],
        },
        {
          lessonNumber: 3,
          chapterTitle: "Généralités sur les Études de Fonctions",
          theme: "Analyse",
          objectives: [
            "Étudier la parité d'une fonction (f(-x) = f(x) paire => symétrie axiale (OJ) ; f(-x) = -f(x) impaire => symétrie centrale O)",
            "Démontrer qu'un point A(a, b) est centre de symétrie : f(a - x) + f(a + x) = 2b ou g(x) = f(x + a) - b est impaire",
            "Démontrer qu'une droite (D): x = a est axe de symétrie : f(a - x) = f(a + x) ou g(x) = f(x + a) est paire",
            "Dresser un tableau de variation complet et construire précisément les courbes et asymptotes",
          ],
          keyDefinitions: {
            "Centre de symétrie A(a, b)": "Pour tout x tel que a - x in Df, a + x in Df et f(a - x) + f(a + x) = 2b.",
            "Axe de symétrie x = a": "Pour tout x tel que a - x in Df, a + x in Df et f(a - x) = f(a + x).",
          },
          formulasAndTheorems: {
            "Centre de symétrie": "f(2a - x) + f(x) = 2b ou f(a - x) + f(a + x) = 2b",
            "Axe de symétrie": "f(2a - x) = f(x) ou f(a - x) = f(a + x)",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Bien vérifier la condition préalable d'appartenance au domaine : pour tout x, (a - x) in Df <=> (a + x) in Df.",
          ],
        },
        {
          lessonNumber: 4,
          chapterTitle: "Fonction Logarithme Népérien",
          theme: "Analyse",
          objectives: [
            "Définir ln x comme l'unique primitive de 1/x sur ]0, +inf[ s'annulant en 1",
            "Déterminer l'ensemble de validité des équations/inéquations : u(x) > 0 pour ln(u) et u(x) != 0 pour ln|u|",
            "Maîtriser les propriétés algébriques : ln(ab) = ln a + ln b, ln(a/b) = ln a - ln b, ln(a^r) = r ln a, ln(sqrt(a)) = 1/2 ln a",
            "Connaître les limites de référence et croissances comparées : lim_{x -> +inf} ln x = +inf, lim_{x -> 0+} ln x = -inf, lim_{x -> +inf} (ln x)/x = 0, lim_{x -> 0+} x ln x = 0",
            "Dériver ln(u) (u'/u) et primitiver u'/u (ln|u| + C)",
            "Appliquer le TVI et encadrer la solution par dichotomie ou balayage",
          ],
          keyDefinitions: {
            "Fonction ln": "Unique primitive sur ]0, +inf[ de 1/x s'annulant en 1. Continue, strictement croissante, bijection de ]0, +inf[ sur R.",
            "Nombre e": "Unique réel tel que ln(e) = 1 (e ~ 2,718).",
          },
          formulasAndTheorems: {
            "Propriétés": "ln(ab) = ln a + ln b ; ln(a/b) = ln a - ln b ; ln(a^r) = r ln a ; ln(1) = 0 ; ln(e) = 1",
            "Dérivée": "(ln u)' = u' / u ; (ln |u|)' = u' / u",
            "Limites usuelles": "lim_{x -> +inf} ln x = +inf ; lim_{x -> 0+} ln x = -inf ; lim_{x -> 0} ln(1+x)/x = 1 ; lim_{x -> 1} ln x / (x-1) = 1",
            "Croissance comparée": "lim_{x -> +inf} (ln x)/x^alpha = 0 (alpha > 0) ; lim_{x -> 0+} x^alpha ln x = 0 (alpha > 0)",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Toujours poser l'ensemble de validité avant d'appliquer les formules algébriques (ex: ln(x^2 - 4) = ln(3x) exige x^2 - 4 > 0 et 3x > 0).",
          ],
        },
        {
          lessonNumber: 5,
          chapterTitle: "Fonction Exponentielle",
          theme: "Analyse",
          objectives: [
            "Définir exp x comme la bijection réciproque de ln x sur R (notée e^x > 0)",
            "Résoudre les équations et inéquations en posant X = e^x (X > 0)",
            "Dériver et primitiver e^u : (e^u)' = u' e^u et primitive de u' e^u est e^u + C",
            "Maîtriser les limites et croissances comparées : lim_{x -> +inf} e^x = +inf, lim_{x -> -inf} e^x = 0, lim_{x -> +inf} e^x / x^alpha = +inf, lim_{x -> -inf} x^alpha e^x = 0",
            "Étudier complètement les fonctions associant polynômes, logarithmes et exponentielles",
          ],
          keyDefinitions: {
            "Fonction exponentielle": "Bijection réciproque de ln : e^x = y <=> x = ln y (pour y > 0). Toujours strictement positive sur R.",
          },
          formulasAndTheorems: {
            "Propriétés": "e^(a+b) = e^a * e^b ; e^(-b) = 1/e^b ; e^(a-b) = e^a / e^b ; (e^a)^r = e^(ar) ; e^0 = 1 ; e^1 = e",
            "Dérivée": "(e^u)' = u' * e^u",
            "Limites": "lim_{x -> +inf} e^x = +inf ; lim_{x -> -inf} e^x = 0 ; lim_{x -> 0} (e^x - 1)/x = 1",
            "Croissance comparée": "lim_{x -> +inf} (e^x) / x^alpha = +inf (alpha > 0) ; lim_{x -> -inf} x^n e^x = 0 (n in N*)",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Lors de la pose X = e^x, rejeter systématiquement toute racine X <= 0 car l'exponentielle est strictement positive.",
          ],
        },
        {
          lessonNumber: 6,
          chapterTitle: "Intégrale et Calcul d'Aires",
          theme: "Analyse",
          objectives: [
            "Définir l'intégrale d'une fonction continue : int_a^b f(x) dx = F(b) - F(a)",
            "Utiliser les propriétés : Chasles, linéarité, positivité, comparaison",
            "Appliquer l'Intégration Par Parties (IPP) : int_a^b u(x)v'(x)dx = [u(x)v(x)]_a^b - int_a^b u'(x)v(x)dx",
            "Calculer l'aire délimitée par la courbe et l'axe (OI) : A = int_a^b |f(x)| dx * u.a",
            "Calculer l'aire entre deux courbes (Cf) et (Cg) : A = int_a^b [f(x) - g(x)] dx * u.a (pour f >= g)",
            "Convertir l'aire en cm^2 avec 1 u.a = ||i|| * ||j|| cm^2",
          ],
          keyDefinitions: {
            "Intégrale": "Nombre réel F(b) - F(a) où F est une primitive quelconque de f sur [a, b].",
            "Unité d'aire": "Aire du rectangle élémentaire formé par les vecteurs de base : 1 u.a = OI * OJ cm^2.",
          },
          formulasAndTheorems: {
            "IPP": "int_a^b u v' = [u v]_a^b - int_a^b u' v",
            "Chasles": "int_a^b f + int_b^c f = int_a^c f",
            "Aire entre courbes": "A = (int_a^b [f(x) - g(x)] dx) * (OI * OJ) cm^2 pour f >= g",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Ne pas oublier de multiplier par l'unité d'aire 1 u.a = ||i|| * ||j|| (ex: si OI = 2cm et OJ = 3cm, 1 u.a = 6 cm^2).",
          ],
        },
        {
          lessonNumber: 7,
          chapterTitle: "Suites Numériques",
          theme: "Analyse",
          objectives: [
            "Reconnaître et caractériser les suites arithmétiques (un = u0 + nr, S = (n+1)(u0+un)/2) et géométriques (vn = v0 q^n, S = v0 (1-q^(n+1))/(1-q))",
            "Démontrer par récurrence une propriété P(n) pour tout n >= n0",
            "Étudier le sens de variation (un+1 - un, un+1/un, ou étude de fonction)",
            "Appliquer le théorème de convergence monotone (suite croissante majorée ou décroissante minorée)",
            "Étudier la convergence des suites géométriques : si |q| < 1, lim q^n = 0 ; si q > 1, lim q^n = +inf",
            "Déterminer la limite d'une suite récurrente un+1 = f(un) par résolution de l'équation du point fixe f(l) = l",
          ],
          keyDefinitions: {
            "Suite arithmétique": "un+1 = un + r ; terme général un = u0 + nr = up + (n - p)r.",
            "Suite géométrique": "vn+1 = q * vn ; terme général vn = v0 * q^n = vp * q^(n - p).",
            "Théorème de convergence monotone": "Toute suite croissante et majorée (resp. décroissante et minorée) converge vers une limite finie l.",
          },
          formulasAndTheorems: {
            "Somme suite arithmétique": "S = (nombre de termes) * (1er terme + dernier terme) / 2",
            "Somme suite géométrique": "S = (1er terme) * (1 - q^(nombre de termes)) / (1 - q) pour q != 1",
            "Point fixe": "Si un+1 = f(un) converge vers l et f est continue, alors f(l) = l",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Bien compter le nombre de termes dans la somme : de up à un, il y a (n - p + 1) termes.",
          ],
        },
        {
          lessonNumber: 11,
          chapterTitle: "Équations Différentielles",
          theme: "Analyse",
          objectives: [
            "Résoudre y' = ay ou y' + ay = 0 (solutions y(x) = k e^(-ax), k in R)",
            "Résoudre y' + ay = b (solutions y(x) = k e^(-ax) + b/a, k in R)",
            "Résoudre y'' = 0 (solutions y(x) = Ax + B, (A, B) in R^2)",
            "Résoudre y'' - omega^2 y = 0 (solutions y(x) = A e^(omega x) + B e^(-omega x))",
            "Résoudre y'' + omega^2 y = 0 (solutions y(x) = A cos(omega x) + B sin(omega x))",
            "Déterminer l'unique solution vérifiant des conditions initiales y(x0) = y0, y'(x0) = z0",
          ],
          keyDefinitions: {
            "Équation différentielle": "Équation liant la fonction inconnue y et ses dérivées successives y', y''.",
            "Problème de Cauchy": "Recherche de la solution unique vérifiant des conditions initiales données en un point.",
          },
          formulasAndTheorems: {
            "y' + ay = 0": "y(x) = k * e^(-ax), k in R",
            "y' + ay = b": "y(x) = k * e^(-ax) + b/a, k in R",
            "y'' + w^2 y = 0": "y(x) = A * cos(wx) + B * sin(wx), (A, B) in R^2",
            "y'' - w^2 y = 0": "y(x) = A * e^(wx) + B * e^(-wx), (A, B) in R^2",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Attention à ne pas confondre le signe dans l'exposant : y' + 2y = 0 a pour solution k*e^(-2x) et non k*e^(2x).",
          ],
        },
      ],
    },

    // -------------------------------------------------------------
    // THÈME 2 : GÉOMÉTRIE & NOMBRES COMPLEXES
    // -------------------------------------------------------------
    {
      id: "geometrie_complexes_d",
      themeTitle: "Géométrie & Nombres Complexes",
      lessons: [
        {
          lessonNumber: 9,
          chapterTitle: "Nombres Complexes et Transformations du Plan",
          theme: "Géométrie",
          objectives: [
            "Manipuler la forme algébrique z = a + ib, conjugué z_bar = a - ib, module |z| = sqrt(a^2 + b^2)",
            "Écrire sous forme trigonométrique z = r(cos theta + i sin theta) et exponentielle z = r e^(i theta)",
            "Appliquer les formules de Moivre (cos theta + i sin theta)^n = cos(n theta) + i sin(n theta) et d'Euler",
            "Résoudre dans C les équations du second degré via le calcul des racines carrées de Delta (x^2 + y^2 = |Delta|, x^2 - y^2 = a, 2xy = b)",
            "Interpréter géométriquement : |zB - zA| = AB, arg((zC - zA)/(zB - zA)) = (AB, AC)",
            "Démontrer l'alignement ((zC-zA)/(zB-zA) in R), l'orthogonalité (dans iR), la cocyclicité (birapport in R), triangles particuliers",
            "Identifier et caractériser les transformations usuelles par leur écriture complexe : translation z' = z + b, homothétie z' - omega = k(z - omega), rotation z' - omega = e^(i theta)(z - omega), similitude directe z' = az + b (rapport |a|, angle arg(a), centre omega = b/(1-a))",
          ],
          keyDefinitions: {
            "Nombre complexe": "z = a + ib avec i^2 = -1.",
            "Module": "|z| = sqrt(a^2 + b^2) = distance OM.",
            "Argument": "theta = Mes(u, OM) [2pi] tel que cos theta = a/|z|, sin theta = b/|z|.",
            "Similitude directe": "Transformation d'écriture z' = az + b avec rapport k = |a|, angle theta = arg(a) et centre fixe omega = b/(1 - a).",
          },
          formulasAndTheorems: {
            "Moivre": "(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta) = e^(i n theta)",
            "Euler": "cos theta = (e^(i theta) + e^(-i theta))/2 ; sin theta = (e^(i theta) - e^(-i theta))/(2i)",
            "Angle orienté": "Mes(AB, CD) = arg((zD - zC) / (zB - zA)) [2pi]",
            "Similitude directe": "z' - omega = k * e^(i theta) * (z - omega)",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Une similitude directe de rapport k multiplie les distances par k et les AIRES par k^2.",
          ],
        },
      ],
    },

    // -------------------------------------------------------------
    // THÈME 3 : PROBABILITÉS & STATISTIQUES
    // -------------------------------------------------------------
    {
      id: "probabilites_statistiques_d",
      themeTitle: "Probabilités & Statistiques",
      lessons: [
        {
          lessonNumber: 8,
          chapterTitle: "Dénombrement et Probabilités",
          theme: "Probabilités",
          objectives: [
            "Choisir l'outil de dénombrement adapté : p-listes (n^p, tirage successif avec remise), arrangements A_n^p (tirage successif sans remise), combinaisons C_n^p (tirage simultané)",
            "Calculer les probabilités conditionnelles P_A(B) = P(A inter B) / P(A)",
            "Construire un arbre pondéré et appliquer la formule des probabilités totales : P(B) = P(A inter B) + P(A_bar inter B)",
            "Vérifier l'indépendance de deux événements : P(A inter B) = P(A) * P(B)",
            "Déterminer la loi d'une variable aléatoire discrète X, son espérance E(X) = Sum xi pi, sa variance V(X) et son écart-type sigma(X) = sqrt(V(X))",
            "Reconnaître un schéma de Bernoulli et une loi binomiale B(n, p) : P(X = k) = C_n^k p^k (1 - p)^(n-k)",
            "Tracer la fonction de répartition en escalier F(x) = P(X <= x)",
          ],
          keyDefinitions: {
            "Équiprobabilité": "P(A) = Card(A) / Card(Omega) = (nombre de cas favorables) / (nombre de cas possibles).",
            "Probabilité conditionnelle": "P_A(B) = P(A inter B) / P(A).",
            "Événements indépendants": "P(A inter B) = P(A) * P(B) <=> P_A(B) = P(B).",
            "Loi Binomiale B(n, p)": "Loi du nombre de succès k sur n répétitions indépendantes d'une épreuve de Bernoulli de paramètre p.",
          },
          formulasAndTheorems: {
            "Combinaisons": "C_n^p = n! / (p! (n - p)!)",
            "Arrangements": "A_n^p = n! / (n - p)!",
            "Probabilités totales": "P(B) = Sum P(Ai inter B) = Sum P_Ai(B) * P(Ai)",
            "Loi Binomiale": "P(X = k) = C_n^k * p^k * (1 - p)^(n-k) ; E(X) = n*p ; V(X) = n*p*(1 - p)",
            "Variance": "V(X) = E(X^2) - (E(X))^2 = Sum xi^2 pi - (E(X))^2",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Ne pas confondre 'tirage simultané' (Combinaisons C_n^p) et 'tirage successif sans remise' (Arrangements A_n^p).",
          ],
        },
        {
          lessonNumber: 10,
          chapterTitle: "Statistiques à Deux Variables",
          theme: "Statistiques",
          objectives: [
            "Exploiter les tableaux de contingence et dresser les tableaux des séries marginales de X et de Y",
            "Calculer les moyennes x_bar et y_bar et déterminer le point moyen G(x_bar, y_bar)",
            "Calculer la covariance : Cov(X, Y) = (1/n) Sum xi yi - x_bar y_bar",
            "Calculer les variances V(X), V(Y) et le coefficient de corrélation linéaire r = Cov(X, Y) / (sigma_X * sigma_Y)",
            "Interpréter r : si |r| >= 0,87 (ou sqrt(3)/2), l'ajustement affine est justifié et de bonne qualité",
            "Déterminer l'équation de la droite de régression de Y en X : y = ax + b avec a = Cov(X, Y)/V(X) et b = y_bar - a x_bar",
            "Déterminer la droite de régression de X en Y : x = a'y + b' avec a' = Cov(X, Y)/V(Y) et b' = x_bar - a' y_bar",
            "Effectuer des prévisions et calculs d'estimations à partir du modèle linéaire",
          ],
          keyDefinitions: {
            "Point moyen G": "G(x_bar, y_bar) est le barycentre du nuage de points par lequel passent toujours les droites de régression.",
            "Covariance": "Cov(X, Y) = 1/n Sum xi yi - x_bar y_bar mesurant la variation conjointe de X et Y.",
            "Corrélation linéaire r": "Indicateur sans dimension mesurant l'intensité de la relation linéaire (-1 <= r <= 1).",
          },
          formulasAndTheorems: {
            "Covariance": "Cov(X, Y) = 1/n Sum xi yi - x_bar y_bar",
            "Variance": "V(X) = 1/n Sum xi^2 - (x_bar)^2",
            "Corrélation": "r = Cov(X, Y) / (sqrt(V(X)) sqrt(V(Y)))",
            "Droite de régression Y en X": "y = a*x + b avec a = Cov(X, Y) / V(X) et b = y_bar - a * x_bar",
            "Droite de régression X en Y": "x = a'*y + b' avec a' = Cov(X, Y) / V(Y) et b' = x_bar - a' * y_bar",
            "Relation entre pentes": "a * a' = r^2",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Pour la droite de régression de Y en X, la pente est a = Cov(X,Y)/V(X) (et non V(Y)).",
          ],
        },
      ],
    },
  ],
};

export const MATHS_TLE_D_CURRICULUM = mathsTleDKnowledgeBase.themes.flatMap(t =>
  t.lessons.map(l => ({
    themeId: t.id,
    themeTitle: t.themeTitle,
    lessonNumber: l.lessonNumber,
    lessonTitle: l.chapterTitle,
    objectives: l.objectives,
    keyDefinitions: l.keyDefinitions,
    formulasAndTheorems: l.formulasAndTheorems,
    methodsAndAlgorithms: l.methodsAndAlgorithms,
    commonMistakesToAvoid: l.commonMistakesToAvoid,
  }))
);

