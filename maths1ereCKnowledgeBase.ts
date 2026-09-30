/**
 * LE PROF — BASE DE CONNAISSANCES OFFICIELLE : MATHÉMATIQUES PREMIÈRE C (3ème Année Secondaire - Section Mathématiques)
 * Source : Mathématiques 3ème année de l'enseignement secondaire - Section Mathématiques (Tomes 1 & 2)
 * Élaboré par : Hikma Smida, Ridha Ben Saad, Néjiba Mhamdi, Leila Ben Youssef, Imène Ghedamsi, Ali Béji Hammas, Béchir Labidi.
 * Centre National Pédagogique (Tunisie)
 *
 * 100% autonome : zéro dépendance externe, résolution locale prioritaire sans appel IA.
 */

export type Chapter = {
  id: string;
  lessonNumber?: number;
  tome?: number;
  title: string;
  pages?: [number, number];
  topics: string[];
  formulas: string[];
  methods: string[];
};

export const maths1ereCKnowledgeBase = {
  name: "LE PROF — Knowledge Base Mathématiques Première C / 3ème Math",
  version: "1.0.0",
  source: "Manuel officiel Mathématiques 3ème année secondaire - Section Mathématiques (Tomes 1 & 2) - Centre National Pédagogique",
  level: "Première C",
  chapters: [
    // =========================================================================
    // TOME 1 : ANALYSE, TRIGONOMÉTRIE, SUITES & STATISTIQUES / PROBABILITÉS
    // =========================================================================
    {
      id: "t1_ch1",
      lessonNumber: 1,
      tome: 1,
      title: "Généralités sur les fonctions",
      pages: [5, 20],
      topics: [
        "Ensemble de définition d'une fonction numérique",
        "Sens de variation d'une fonction (croissance, décroissance, constance, monotonie sur un intervalle I)",
        "Fonctions paires et impaires, symétrie axiale par rapport à l'axe des ordonnées (O, j), symétrie centrale par rapport à l'origine O",
        "Restriction d'une fonction f à une partie D de son ensemble de définition",
        "Fonction majorée, minorée, bornée sur un ensemble D",
        "Maximum et minimum d'une fonction sur D en un réel x0",
        "Fonction affine par intervalles et fonction partie entière E(x)",
        "Sens de variation et majoration de la fonction sqrt(f)",
        "Opérations algébriques sur les fonctions : f+g, f*g, lambda*f, 1/g, f/g",
        "Somme de fonctions de même monotonie (f et g croissantes => f+g croissante)"
      ],
      formulas: [
        "f croissante sur I <=> (pour tous a, b in I, a <= b => f(a) <= f(b))",
        "f décroissante sur I <=> (pour tous a, b in I, a <= b => f(a) >= f(b))",
        "f paire <=> (pour tout x in D, -x in D et f(-x) = f(x)) ; axe de symétrie (Oy)",
        "f impaire <=> (pour tout x in D, -x in D et f(-x) = -f(x)) ; centre de symétrie O(0,0)",
        "f majorée sur D <=> il existe M in R tel que pour tout x in D, f(x) <= M",
        "f minorée sur D <=> il existe m in R tel que pour tout x in D, m <= f(x)",
        "f bornée sur D <=> il existe m, M in R tels que pour tout x in D, m <= f(x) <= M",
        "Pour tout x in R, il existe un unique n in Z tel que x in [n, n+1[, d'où E(x) = n et n <= x < n+1",
        "Si f est définie et positive sur I, (f croissante sur I => sqrt(f) croissante sur I)",
        "Si f est définie et positive sur I, (f décroissante sur I => sqrt(f) décroissante sur I)",
        "Si f est positive et majorée par M sur I, alors sqrt(f) est majorée par sqrt(M) sur I",
        "(f + g)(x) = f(x) + g(x) ; (f * g)(x) = f(x) * g(x) ; (lambda * f)(x) = lambda * f(x)"
      ],
      methods: [
        "Déterminer le domaine de définition : poser dénominateurs non nuls et expressions sous radicaux >= 0.",
        "Démontrer la parité : 1. Vérifier que D est centré en 0 (x in D => -x in D) ; 2. Exprimer f(-x) et comparer avec f(x) ou -f(x).",
        "Étudier le sens de variation : choisir deux réels a < b dans l'intervalle I, former la différence f(b) - f(a) ou comparer les images par composition d'opérations élémentaires croissantes.",
        "Encadrer ou majorer/minorer : trouver des bornes fixes m et M sur le domaine ou étudier les extrema atteints via les formes canoniques des trinômes ax^2+bx+c.",
        "Tracer la courbe d'une fonction affine par intervalles ou partie entière : découper le domaine en intervalles [n, n+1[ où la fonction est constante ou affine."
      ]
    },
    {
      id: "t1_ch2",
      lessonNumber: 2,
      tome: 1,
      title: "Continuité",
      pages: [21, 39],
      topics: [
        "Continuité d'une fonction en un réel a (définition avec epsilon/alpha : pour tout beta > 0, il existe alpha > 0...)",
        "Interprétation graphique de la continuité (tracé sans saut ni rupture)",
        "Continuité des fonctions usuelles : constantes, affines, puissances x^n, polynômes sur R, rationnelles sur leur domaine, racine carrée sur [0, +inf[",
        "Continuité de la fonction valeur absolue |f|",
        "Opérations algébriques sur les fonctions continues : f+g, fg, kf, 1/f, f/g en a",
        "Continuité de la racine carrée sqrt(f) en un point a où f(a) >= 0",
        "Continuité à droite et continuité à gauche en un point a",
        "Théorème d'équivalence : f continue en a <=> f continue à droite et à gauche en a",
        "Continuité sur un intervalle (ouvert, semi-ouvert, fermé [a, b])",
        "Théorème de l'image d'un intervalle par une fonction continue : f(I) est un intervalle",
        "Théorème des valeurs intermédiaires (TVI) : existence de solutions à f(x) = k pour k entre f(a) et f(b)",
        "Corollaire du TVI pour le changement de signe : f(a)*f(b) < 0 => au moins un zéro dans [a, b]",
        "Méthode de dichotomie pour l'approximation d'une racine d'équation f(x) = 0"
      ],
      formulas: [
        "f continue en a <=> pour tout beta > 0, il existe alpha > 0 tel que (|x - a| < alpha => |f(x) - f(a)| < beta)",
        "f continue en a <=> (f continue à droite en a ET f continue à gauche en a)",
        "| |f(x)| - |f(a)| | <= |f(x) - f(a)| => (|f| continue en a dès que f l'est)",
        "Si f(a) > 0 et f continue en a, alors |sqrt(f(x)) - sqrt(f(a))| <= |f(x) - f(a)| / sqrt(f(a))",
        "f continue sur [a, b] <=> f continue sur ]a, b[, continue à droite en a et à gauche en b",
        "Théorème des valeurs intermédiaires : f continue sur [a, b], pour tout k entre f(a) et f(b), il existe c in [a, b] tel que f(c) = k",
        "f continue sur [a, b] et f(a)*f(b) < 0 => l'équation f(x) = 0 admet au moins une solution c in [a, b]"
      ],
      methods: [
        "Prouver la continuité en a : vérifier que f est continue à droite (lim_{x->a+} f(x) = f(a)) et à gauche (lim_{x->a-} f(x) = f(a)).",
        "Justifier la continuité sur un intervalle : décomposer f comme somme, produit, quotient ou racine de fonctions usuelles continues sur l'intervalle.",
        "Appliquer le théorème des valeurs intermédiaires : 1. Prouver que f est continue sur [a, b] ; 2. Calculer f(a) et f(b) ; 3. Vérifier que k est compris entre f(a) et f(b) (ou f(a)*f(b) < 0 si k=0) ; 4. Conclure à l'existence d'au moins une solution.",
        "Localiser une racine par dichotomie : calculer f au milieu m = (a+b)/2, remplacer l'intervalle par [a, m] si f(a)*f(m) <= 0, sinon par [m, b], et itérer jusqu'à l'amplitude voulue."
      ]
    },
    {
      id: "t1_ch3",
      lessonNumber: 3,
      tome: 1,
      title: "Limites et continuité",
      pages: [40, 55],
      topics: [
        "Limite finie d'une fonction en un réel a (notation lim_{x->a} f(x) = L)",
        "Unicité de la limite en un point",
        "Lien limite et continuité : f continue en a <=> lim_{x->a} f(x) = f(a)",
        "Règle de coïncidence locale : si f(x) = g(x) pour x != a et g continue en a, alors lim_{x->a} f(x) = g(a)",
        "Prolongement par continuité en un point a non dans le domaine : F(x) = f(x) si x != a et F(a) = L",
        "Opérations algébriques sur les limites finies en a (somme, produit, quotient, multiplication scalaire)",
        "Théorèmes d'ordre et de conservation du signe à la limite : f(x) >= 0 => L >= 0, lim sqrt(f) = sqrt(L)",
        "Limites à droite et limites à gauche : lim_{x->a} f(x) = L <=> lim_{x->a+} f(x) = lim_{x->a-} f(x) = L"
      ],
      formulas: [
        "lim_{x->a} f(x) = L <=> (pour tout beta > 0, il existe alpha > 0 tel que 0 < |x - a| < alpha => |f(x) - L| < beta)",
        "f continue en a <=> lim_{x->a} f(x) = f(a)",
        "lim_{x->a} (f + g)(x) = L + L' ; lim_{x->a} (f * g)(x) = L * L' ; lim_{x->a} (k * f)(x) = k * L",
        "lim_{x->a} (1/f)(x) = 1/L (si L != 0) ; lim_{x->a} (f/g)(x) = L/L' (si L' != 0)",
        "f(x) >= 0 sur I\\{a} et lim_{x->a} f(x) = L => L >= 0 et lim_{x->a} sqrt(f(x)) = sqrt(L)",
        "lim_{x->a} f(x) = L <=> lim_{x->a+} f(x) = L et lim_{x->a-} f(x) = L"
      ],
      methods: [
        "Lever une indétermination 0/0 pour une fraction rationnelle en a : factoriser numérateur et dénominateur par (x - a), simplifier par (x - a) pour x != a, puis évaluer la limite de la fraction simplifiée.",
        "Lever une indétermination 0/0 avec radicaux : multiplier et diviser par l'expression conjuguée, simplifier le facteur (x - a), puis remplacer x par a.",
        "Prolonger une fonction par continuité en a : vérifier que f n'est pas définie en a, calculer L = lim_{x->a} f(x), et poser F(x) = f(x) si x != a et F(a) = L.",
        "Démontrer qu'une fonction n'admet pas de limite en a : calculer les limites à gauche et à droite et montrer qu'elles sont différentes."
      ]
    },
    {
      id: "t1_ch4",
      lessonNumber: 4,
      tome: 1,
      title: "Limites et comportements asymptotiques",
      pages: [56, 79],
      topics: [
        "Limites infinies en +infini et en -infini : définition rigoureuse",
        "Comportement au voisinage de +infini et -infini des puissances x^n et radicaux sqrt(x)",
        "Limites finies en +infini et -infini : définition et notion d'asymptote horizontale",
        "Théorème de l'inverse : lim f = +-inf => lim (1/f) = 0",
        "Asymptote horizontale : droite y = L lorsque lim_{x->+-inf} f(x) = L",
        "Limites infinies en un réel a (à droite a+, à gauche a-) et asymptote verticale x = a",
        "Comportement de 1/(x-a)^n en a selon la parité de n",
        "Tableau complet des opérations sur les limites infinies (+inf + +inf, produit de signes, L/inf = 0, L/0 = inf)",
        "Limite d'un polynôme en +-infini : égale à la limite de son terme de plus haut degré a_n * x^n",
        "Limite d'une fonction rationnelle en +-infini : égale à la limite du quotient de ses termes de plus haut degré",
        "Limite de la composée avec la racine carrée : lim sqrt(f) = sqrt(L) ou +infini",
        "Asymptote oblique : droite y = ax + b telle que lim_{x->+-inf} [f(x) - (ax + b)] = 0",
        "Position relative de la courbe par rapport à une asymptote horizontale ou oblique (signe de f(x) - y_asymptote)",
        "Courbe asymptote : courbe C_g d'équation y = g(x) telle que lim [f(x) - g(x)] = 0"
      ],
      formulas: [
        "lim_{x->+inf} x^n = +inf (n in N*) ; lim_{x->+inf} sqrt(x) = +inf",
        "lim_{x->-inf} x^(2n) = +inf ; lim_{x->-inf} x^(2n-1) = -inf",
        "Droite y = L asymptote horizontale en +inf <=> lim_{x->+inf} f(x) = L (idem en -inf)",
        "Droite x = a asymptote verticale <=> lim_{x->a+} f(x) = +-inf ou lim_{x->a-} f(x) = +-inf",
        "Pour n pair : lim_{x->a} 1/(x-a)^n = +inf ; Pour n impair : lim_{x->a+} 1/(x-a)^n = +inf et lim_{x->a-} 1/(x-a)^n = -inf",
        "lim_{x->+-inf} (a_n*x^n + ... + a_0) = lim_{x->+-inf} (a_n*x^n)",
        "lim_{x->+-inf} (a_n*x^n + ...)/(b_m*x^m + ...) = lim_{x->+-inf} (a_n*x^n) / (b_m*x^m)",
        "Droite y = ax + b asymptote oblique en +-inf <=> lim_{x->+-inf} (f(x) - (ax + b)) = 0",
        "Distance algébrique M P = f(x) - (ax + b) ; Courbe au-dessus <=> f(x) - y > 0 ; au-dessous <=> f(x) - y < 0"
      ],
      methods: [
        "Calculer la limite d'un polynôme en l'infini : factoriser par le terme de plus haut degré x^n et appliquer lim 1/x^k = 0.",
        "Calculer la limite d'une fonction rationnelle en l'infini : prendre le quotient des monômes dominants a_n x^n / (b_m x^m) et simplifier.",
        "Trouver une asymptote oblique : décomposer f(x) sous la forme ax + b + r(x) par division euclidienne ou identification, puis vérifier lim_{x->+-inf} r(x) = 0.",
        "Étudier la position relative de C_f et de l'asymptote D: y = ax + b : étudier le signe du résidu d(x) = f(x) - (ax + b) sur les intervalles du domaine.",
        "Lever les indéterminations infini - infini avec radicaux : factoriser par |x| si les coefficients dominants diffèrent, ou utiliser l'expression conjuguée si les coefficients s'annulent."
      ]
    },
    {
      id: "t1_ch5",
      lessonNumber: 5,
      tome: 1,
      title: "Nombre dérivé",
      pages: [80, 99],
      topics: [
        "Notion cinématique : vitesse moyenne sur [t0, t0+h] et vitesse instantanée v(t0) = lim_{h->0} Delta d / h",
        "Définition du nombre dérivé f'(a) comme limite du taux de variation (f(a+h) - f(a))/h quand h -> 0",
        "Interprétation géométrique : pente de la sécante qui tend vers la pente de la tangente en M(a, f(a))",
        "Équation cartésienne de la tangente : y = f'(a)(x - a) + f(a) et vecteur directeur u(1, f'(a))",
        "Approximation affine locale : f(a+h) approx f(a) + f'(a)*h pour h voisin de 0",
        "Dérivabilité implique continuité (f dérivable en a => f continue en a, la réciproque étant fausse)",
        "Dérivée des fonctions usuelles : constante (0), affine x -> ax+b (a), x -> (x-alpha)^2+beta (2(a-alpha)), 1/(ax+beta) (-a/(ax+beta)^2), sqrt(x) (1/(2*sqrt(a)))",
        "Opérations algébriques sur les nombres dérivés : (f+g)'(a), (fg)'(a), (kf)'(a), (f^k)'(a), (1/f)'(a), (g/f)'(a)",
        "Dérivabilité de la racine carrée sqrt(f) en a : (sqrt(f))'(a) = f'(a)/(2*sqrt(f(a))) si f(a) > 0",
        "Dérivabilité à droite f'_d(a) et à gauche f'_g(a) et demi-tangentes",
        "Théorème de dérivabilité : f dérivable en a <=> f'_d(a) = f'_g(a)",
        "Point anguleux (f'_d(a) != f'_g(a)) et demi-tangente verticale (taux tendant vers +-inf)"
      ],
      formulas: [
        "f'(a) = lim_{h->0} (f(a+h) - f(a))/h = lim_{x->a} (f(x) - f(a))/(x - a)",
        "Équation de la tangente : y = f'(a)(x - a) + f(a)",
        "Approximation affine : f(a + h) approx f(a) + f'(a)*h",
        "Dérivée de constantes et puissances : (c)' = 0 ; (x)' = 1 ; (ax+b)' = a ; ((x-alpha)^2)' = 2(x-alpha)",
        "(1/(ax+b))' = -a / (ax+b)^2 ; (sqrt(x))' = 1 / (2*sqrt(x)) (pour x > 0)",
        "(f + g)'(a) = f'(a) + g'(a) ; (alpha*f + beta*g)'(a) = alpha*f'(a) + beta*g'(a)",
        "(f * g)'(a) = f'(a)g(a) + f(a)g'(a) ; (f^k)'(a) = k * f'(a) * f^(k-1)(a)",
        "(1/f)'(a) = -f'(a) / (f(a))^2 ; (g/f)'(a) = (g'(a)f(a) - g(a)f'(a)) / (f(a))^2",
        "(sqrt(f))'(a) = f'(a) / (2 * sqrt(f(a))) (si f(a) > 0)",
        "Demi-tangente à droite : y = f'_d(a)(x - a) + f(a) pour x >= a, vecteur u_d(1, f'_d(a))",
        "Demi-tangente à gauche : y = f'_g(a)(x - a) + f(a) pour x <= a, vecteur u_g(-1, -f'_g(a))",
        "Taux tendant vers +-inf => demi-tangente verticale d'équation x = a"
      ],
      methods: [
        "Calculer le nombre dérivé par définition : poser le rapport (f(a+h) - f(a))/h, simplifier algébriquement par h != 0, puis calculer la limite quand h -> 0.",
        "Former l'équation de la tangente en un point d'abscisse a : calculer f(a), calculer f'(a), appliquer y = f'(a)(x - a) + f(a).",
        "Donner une valeur approchée via l'approximation affine : identifier a (valeur connue proche) et h (petit écart), puis calculer f(a) + f'(a)*h.",
        "Étudier la dérivabilité d'une fonction définie par morceaux ou avec valeurs absolues : étudier séparément la limite du taux d'accroissement à droite et à gauche en a. Si les deux limites finies sont égales, f est dérivable ; si elles sont différentes, point anguleux ; si infinie, demi-tangente verticale."
      ]
    },
    {
      id: "t1_ch6",
      lessonNumber: 6,
      tome: 1,
      title: "Fonction dérivée",
      pages: [100, 117],
      topics: [
        "Définition de la fonction dérivée f' sur un intervalle I",
        "Dérivabilité sur un intervalle ouvert, semi-ouvert ou fermé",
        "Règles générales de dérivation des sommes, produits, puissances entières, inverses et quotients",
        "Dérivée de la fonction composée g(x) = f(alpha*x + beta) : g'(x) = alpha * f'(alpha*x + beta)",
        "Dérivée de sqrt(f) : f' / (2*sqrt(f)) sur tout intervalle où f est dérivable et strictement positive",
        "Théorème du sens de variation : f' = 0 <=> f constante ; f' >= 0 <=> f croissante ; f' <= 0 <=> f décroissante",
        "Parité et dérivation : f paire => f' impaire ; f impaire => f' paire",
        "Extrema locaux (maximum local, minimum local) et points critiques (f'(a) = 0)",
        "Théorème d'extremum local : f' s'annule en a en changeant de signe <=> f admet un extremum local en a",
        "Tableau de variations d'une fonction et résolution de problèmes d'optimisation (aires, volumes, coûts minimaux)"
      ],
      formulas: [
        "(f + g)' = f' + g' ; (f * g)' = f'*g + f*g' ; (k * f)' = k * f'",
        "(f^n)' = n * f' * f^(n-1) (n in N, n >= 2)",
        "(1/f)' = -f' / f^2 ; (f/g)' = (f'*g - f*g') / g^2",
        "(1/f^k)' = -k * f' / f^(k+1)",
        "(f(alpha*x + beta))' = alpha * f'(alpha*x + beta)",
        "(sqrt(f))' = f' / (2 * sqrt(f)) (sur {x | f(x) > 0})",
        "f'(x) >= 0 sur I <=> f croissante sur I ; f'(x) <= 0 sur I <=> f décroissante sur I ; f'(x) = 0 sur I <=> f constante",
        "f'(a) = 0 avec changement de signe (+ vers -) => maximum local en a",
        "f'(a) = 0 avec changement de signe (- vers +) => minimum local en a"
      ],
      methods: [
        "Déterminer la fonction dérivée : préciser le domaine de dérivabilité de f, identifier la structure de l'expression (somme, produit, quotient, puissance, racine de fonction), puis appliquer la formule correspondante.",
        "Dresser le tableau de variation complet : 1. Déterminer le domaine de définition et de dérivabilité ; 2. Calculer f'(x) et factoriser au maximum ; 3. Déterminer le signe de f'(x) sur chaque intervalle ; 4. Remplir les lignes x, f'(x), f(x) avec les limites aux bornes et les valeurs des extrema.",
        "Résoudre un problème d'optimisation : 1. Exprimer la grandeur à optimiser en fonction d'une seule variable géométrique ou économique x ; 2. Préciser l'intervalle de validité de x ; 3. Calculer la dérivée de la fonction modélisée ; 4. Trouver le zéro de la dérivée avec changement de signe et conclure."
      ]
    },
    {
      id: "t1_ch7",
      lessonNumber: 7,
      tome: 1,
      title: "Exemples d’étude de fonctions",
      pages: [118, 135],
      topics: [
        "Éléments de symétrie d'une courbe : axe de symétrie x = a <=> f(2a - x) = f(x)",
        "Centre de symétrie O'(a, b) <=> f(2a - x) = 2b - f(x)",
        "Étude complète de fonctions polynômes du troisième degré (f(x) = ax^3 + bx^2 + cx + d) et bicarrées (ax^4 + bx^2 + c)",
        "Branches paraboliques : f(x)/x -> +-inf (direction (Oy)) ou f(x)/x -> 0 (direction (Ox))",
        "Étude de fonctions rationnelles homographiques et du type f(x) = (ax^2+bx+c)/(dx+e) ou quotient de deux trinômes",
        "Décomposition en éléments simples pour fonctions rationnelles : f(x) = ax + b + c/(x-x0) ou a + b/(x-x1) + c/(x-x2)",
        "Étude de fonctions irrationnelles avec radicaux f(x) = sqrt(ax+b) et f(x) = sqrt(ax^2+bx+c)",
        "Recherche des asymptotes obliques d'une fonction avec racine carrée via la forme canonique et l'expression conjuguée",
        "Discussion graphique du nombre de solutions d'une équation f(x) = m (m paramètre réel)"
      ],
      formulas: [
        "Axe de symétrie x = a <=> (pour tout x in D, 2a - x in D et f(2a - x) = f(x))",
        "Centre de symétrie O'(a, b) <=> (pour tout x in D, 2a - x in D et f(2a - x) + f(x) = 2b)",
        "Branche parabolique de direction (Oy) en +-inf <=> lim_{x->+-inf} f(x) = +-inf et lim_{x->+-inf} f(x)/x = +-inf",
        "Branche parabolique de direction (Ox) en +-inf <=> lim_{x->+-inf} f(x) = +-inf et lim_{x->+-inf} f(x)/x = 0",
        "Décomposition f(x) = (alpha*x^2 + beta*x + gamma)/(x - x0) = ax + b + c/(x - x0)",
        "Forme canonique de ax^2+bx+c = a[(x + b/(2a))^2 - (b^2-4ac)/(4a^2)]",
        "Pour f(x) = sqrt(x^2+px+q) : asymptote oblique y = x + p/2 en +inf, y = -(x + p/2) en -inf"
      ],
      methods: [
        "Plan général d'étude d'une fonction : 1. Domaine de définition D_f ; 2. Réduction du domaine d'étude par parité ou périodicité ; 3. Limites aux bornes et asymptotes ; 4. Dérivabilité, calcul de f'(x) et tableau de variation ; 5. Recherche de tangentes remarquables et points d'inflexion / centres de symétrie ; 6. Tracé précis de la courbe C_f.",
        "Démontrer qu'une droite x = a est axe de symétrie : vérifier que pour x in D, 2a - x in D puis développer f(2a - x) et montrer que le résultat est identique à f(x).",
        "Démontrer qu'un point O'(a, b) est centre de symétrie : calculer f(2a - x) + f(x) et vérifier que la somme vaut exactement 2b.",
        "Discuter graphiquement le nombre de solutions de f(x) = m : tracer mentalement la droite horizontale y = m et dénombrer les points d'intersection avec la courbe selon les intervalles de m délimités par les extrema locaux."
      ]
    },
    {
      id: "t1_ch8",
      lessonNumber: 8,
      tome: 1,
      title: "Fonctions trigonométriques",
      pages: [136, 155],
      topics: [
        "Fonctions périodiques : définition de la période T (f(x+T) = f(x)) et invariance de la courbe par translation de vecteur k*T*i",
        "Fonctions sinus et cosinus : 2pi-périodicité, parité (cos paire, sin impaire), représentations graphiques (sinusoïdes)",
        "Continuité des fonctions sinus et cosinus en 0 et sur R",
        "Limites fondamentales trigonométriques : lim_{x->0} sin(x)/x = 1, lim_{x->0} (1 - cos(x))/x = 0, lim_{x->0} (1 - cos(x))/x^2 = 1/2",
        "Dérivabilité et dérivées de sinus et cosinus : (sin)'(x) = cos(x), (cos)'(x) = -sin(x)",
        "Dérivée de fonctions composées : (sin(omega*x + phi))' = omega*cos(omega*x + phi) et (cos(omega*x + phi))' = -omega*sin(omega*x + phi)",
        "Fonction tangente tan(x) = sin(x)/cos(x) : ensemble de définition R \\ {pi/2 + k*pi}, pi-périodique, impaire",
        "Dérivée de la fonction tangente : (tan)'(x) = 1 + tan^2(x) = 1/cos^2(x)",
        "Asymptotes verticales de la courbe de tangente en x = pi/2 + k*pi",
        "Applications aux phénomènes périodiques (tension alternative u(t) = U_m * sin(omega*t + phi), période T = 2pi/omega)"
      ],
      formulas: [
        "f périodique de période T <=> pour tout x in D, x+T in D et f(x+T) = f(x)",
        "sin(x + 2pi) = sin(x) ; cos(x + 2pi) = cos(x) ; tan(x + pi) = tan(x)",
        "cos(-x) = cos(x) (paire) ; sin(-x) = -sin(x) (impaire) ; tan(-x) = -tan(x) (impaire)",
        "lim_{x->0} sin(x)/x = 1",
        "lim_{x->0} (1 - cos(x))/x = 0",
        "lim_{x->0} (1 - cos(x))/x^2 = 1/2",
        "lim_{x->0} tan(x)/x = 1",
        "(sin(x))' = cos(x) ; (cos(x))' = -sin(x)",
        "(sin(omega*x + phi))' = omega * cos(omega*x + phi)",
        "(cos(omega*x + phi))' = -omega * sin(omega*x + phi)",
        "(tan(x))' = 1 + tan^2(x) = 1 / cos^2(x)",
        "Période de x -> sin(omega*x + phi) ou cos(omega*x + phi) : T = 2*pi / |omega|"
      ],
      methods: [
        "Étudier une fonction trigonométrique f : 1. Déterminer le domaine et la plus petite période T ; 2. Étudier la parité pour restreindre l'intervalle d'étude à [0, T/2] ; 3. Dériver, factoriser f'(x) en facteurs trigonométriques simples et dresser le tableau de variation ; 4. Tracer la courbe sur une période, puis compléter par translations de vecteurs k*T*i.",
        "Calculer une limite trigonométrique indéterminée en 0 : se ramener aux limites usuelles sin(u)/u -> 1 ou (1-cos(u))/u^2 -> 1/2 en multipliant par des expressions conjuguées ou en effectuant des changements de variable.",
        "Résoudre une inéquation trigonométrique : résoudre l'équation associée sur une période, placer les solutions sur le cercle trigonométrique et déterminer les arcs solutions."
      ]
    },
    {
      id: "t1_ch9",
      lessonNumber: 9,
      tome: 1,
      title: "Suites réelles",
      pages: [156, 172],
      topics: [
        "Définition d'une suite numérique u = (u_n)_{n >= n0} comme fonction de N dans R",
        "Modes de génération : formule explicite u_n = f(n) et relation de récurrence u_{n+1} = f(u_n)",
        "Représentation graphique d'une suite (points isolés A_n(n, u_n) dans le plan ou diagramme en toile d'araignée / escalier sur la droite y = x)",
        "Sens de variation d'une suite : croissante (u_{n+1} >= u_n), décroissante (u_{n+1} <= u_n), constante, monotone",
        "Lien entre variations d'une fonction f et de la suite explicite u_n = f(n)",
        "Suites majorées, minorées, bornées",
        "Suites arithmétiques : u_{n+1} = u_n + r, terme général u_n = u_p + (n-p)r, somme des termes consécutifs",
        "Suites géométriques : u_{n+1} = q * u_n, terme général u_n = u_p * q^(n-p), somme des termes consécutifs",
        "Suites récurrentes arithmético-géométriques u_{n+1} = a*u_n + b et suite auxiliaire v_n = u_n - alpha",
        "Modélisations concrètes : tour de Hanoï (x_{n+1} = 2x_n + 1), croissance bactérienne, désintégration radioactive du carbone 14"
      ],
      formulas: [
        "(u_n) croissante <=> pour tout n >= n0, u_{n+1} >= u_n <=> u_{n+1} - u_n >= 0",
        "(u_n) décroissante <=> pour tout n >= n0, u_{n+1} <= u_n <=> u_{n+1} - u_n <= 0",
        "Si u_n > 0 pour tout n, (u_n) croissante <=> u_{n+1} / u_n >= 1",
        "Si f est croissante sur [0, +inf[, alors la suite u_n = f(n) est croissante",
        "(u_n) majorée <=> il existe M in R, pour tout n, u_n <= M",
        "(u_n) minorée <=> il existe m in R, pour tout n, u_n >= m",
        "(u_n) bornée <=> il existe m, M in R, pour tout n, m <= u_n <= M",
        "Suite arithmétique : u_n = u_0 + n*r ; u_n = u_p + (n - p)*r",
        "Somme arithmétique : S = (nombre de termes) * (premier terme + dernier terme) / 2",
        "Suite géométrique : u_n = u_0 * q^n ; u_n = u_p * q^(n - p)",
        "Somme géométrique : S = (premier terme) * (1 - q^(nombre de termes)) / (1 - q) (si q != 1)",
        "Tour de Hanoï à n disques : x_n = 2^n - 1 coups minimum"
      ],
      methods: [
        "Étudier la monotonie d'une suite : 1. Calculer la différence u_{n+1} - u_n et déterminer son signe ; 2. Ou pour une suite à termes strictement positifs, comparer le quotient u_{n+1}/u_n à 1 ; 3. Ou si u_n = f(n), étudier le sens de variation de la fonction f sur [0, +inf[.",
        "Résoudre une suite arithmético-géométrique u_{n+1} = a*u_n + b (a != 1) : 1. Résoudre le point fixe alpha = a*alpha + b => alpha = b/(1-a) ; 2. Poser la suite auxiliaire v_n = u_n - alpha ; 3. Prouver que v_{n+1} = a*v_n (géométrique de raison a) ; 4. Exprimer v_n = v_0 * a^n, puis u_n = v_0 * a^n + alpha.",
        "Démontrer qu'une suite est bornée par récurrence : initialiser à n=0, supposer m <= u_n <= M, et utiliser les variations de la fonction inductrice pour établir m <= u_{n+1} <= M."
      ]
    },
    {
      id: "t1_ch10",
      lessonNumber: 10,
      tome: 1,
      title: "Limites de suites réelles",
      pages: [173, 191],
      topics: [
        "Définition d'une suite convergente vers un réel L (pour tout epsilon > 0, il existe N in N...)",
        "Unicité de la limite d'une suite",
        "Lien avec la limite d'une fonction : si lim_{x->+inf} f(x) = L alors lim_{n->+inf} f(n) = L",
        "Théorème d'encadrement / Théorème des gendarmes pour les suites : 0 <= |u_n| <= v_n et lim v_n = 0 => lim u_n = 0",
        "Opérations sur les limites finies de suites : somme, produit, multiplication scalaire, quotient",
        "Limites infinies (+infini et -infini) d'une suite",
        "Théorèmes de comparaison à l'infini : v_n <= u_n et lim v_n = +inf => lim u_n = +inf",
        "Théorème de l'inverse : lim |u_n| = +inf <=> lim 1/u_n = 0",
        "Limite d'une suite géométrique q^n selon les valeurs de q : q > 1 (+inf), q = 1 (1), |q| < 1 (0), q <= -1 (divergente)",
        "Inégalité de Bernoulli : (1 + a)^n >= 1 + n*a pour tout a >= 0 et n in N",
        "Application aux sommes partielles, quadratures d'Archimède, méthode des rectangles pour l'aire sous une parabole"
      ],
      formulas: [
        "lim_{n->+inf} u_n = L <=> (pour tout epsilon > 0, il existe N in N tel que n >= N => |u_n - L| < epsilon)",
        "u_n converge vers L <=> |u_n - L| converge vers 0",
        "0 <= |u_n - L| <= v_n avec lim v_n = 0 => lim u_n = L",
        "v_n <= u_n à partir d'un rang N et lim v_n = +inf => lim u_n = +inf",
        "u_n <= v_n à partir d'un rang N et lim v_n = -inf => lim u_n = -inf",
        "Inégalité de Bernoulli : (1 + a)^n >= 1 + n*a (pour a >= 0, n in N)",
        "Pour la suite géométrique q^n : si q > 1, lim q^n = +inf ; si |q| < 1, lim q^n = 0 ; si q <= -1, pas de limite",
        "Somme des carrés : 1^2 + 2^2 + ... + n^2 = n(n + 1)(2n + 1) / 6"
      ],
      methods: [
        "Calculer la limite d'une suite explicite u_n = f(n) : déterminer la limite de f(x) quand x -> +inf en utilisant les règles des fonctions rationnelles ou factorisation du terme prépondérant.",
        "Démontrer la convergence avec le théorème des gendarmes : majorer |u_n - L| par une suite géométrique ou de type c/n dont la limite est 0.",
        "Déterminer la limite d'une suite géométrique : identifier la raison q, tester si |q| < 1 (limite 0) ou q > 1 (limite +inf).",
        "Déterminer un rang N à partir duquel |u_n - L| < epsilon : résoudre l'inéquation en n ou utiliser les propriétés de comparaison."
      ]
    },
    {
      id: "t1_ch11",
      lessonNumber: 11,
      tome: 1,
      title: "Statistiques",
      pages: [192, 220],
      topics: [
        "Organisation des données statistiques discrètes et continues (classes, centres de classes, effectifs, fréquences)",
        "Paramètres de position : mode / classe modale, moyenne arithmétique X_barre, médiane Me, quartiles Q1 et Q3",
        "Calcul de la médiane et des quartiles sur données discrètes rangées par ordre croissant : rangs N/4, N/2, 3N/4 avec partie entière",
        "Polygone des fréquences cumulées croissantes et lecture graphique des quartiles (ordonnées 0.25, 0.50, 0.75)",
        "Paramètres de dispersion : étendue, écart interquartile Q3 - Q1, écart interquartile relatif (Q3 - Q1)/Me",
        "Variance V et écart-type sigma : formules développées de Koenig-Huygens",
        "Transformation affine d'une série : si Y = a*X + b avec a > 0, Y_barre = a*X_barre + b, Me_Y = a*Me_X + b, sigma_Y = a*sigma_X",
        "Diagramme en boîte (boîte à moustaches) : résumé à 5 nombres (Min, Q1, Me, Q3, Max)",
        "Distribution normale ou gaussienne : règle empirique des 68% dans [X_barre - sigma, X_barre + sigma], 95% dans [X_barre - 2*sigma, X_barre + 2*sigma], 99% dans [X_barre - 3*sigma, X_barre + 3*sigma]",
        "Variable centrée réduite Z = (X - X_barre) / sigma : moyenne 0 et écart-type 1",
        "Série statistique à deux variables (X, Y) : nuage de points, point moyen G(X_barre, Y_barre)",
        "Ajustement affine du nuage de points (droite passant par G ou méthode de Mayer scindant le nuage en deux groupes G1 et G2)"
      ],
      formulas: [
        "Moyenne : X_barre = (1/N) * sum_{i=1}^p (n_i * x_i)",
        "Variance : V = (1/N) * sum_{i=1}^p (n_i * x_i^2) - (X_barre)^2 (Formule de Koenig)",
        "Écart-type : sigma = sqrt(V)",
        "Écart interquartile : EI = Q3 - Q1 ; Écart interquartile relatif : EIR = (Q3 - Q1) / Me",
        "Écart-type relatif : ETR = sigma / X_barre",
        "Variable centrée réduite : z_i = (x_i - X_barre) / sigma",
        "Propriété de transformation affine Y = aX + b : Y_barre = a*X_barre + b ; sigma_Y = |a| * sigma_X",
        "Intervalle [X_barre - sigma, X_barre + sigma] contient ~68% des observations gaussiennes",
        "Intervalle [X_barre - 2*sigma, X_barre + 2*sigma] contient ~95% des observations gaussiennes",
        "Intervalle [X_barre - 3*sigma, X_barre + 3*sigma] contient ~99% des observations gaussiennes",
        "Coordonnées du point moyen : G(X_barre, Y_barre) où X_barre = (1/N) sum x_i et Y_barre = (1/N) sum y_i"
      ],
      methods: [
        "Calculer médiane et quartiles pour une série discrète de taille N : ranger les valeurs dans l'ordre croissant ; médiane à la position floor(N/2)+1 ou moyenne des deux valeurs centrales si N pair ; Q1 à la position floor(N/4)+1 ; Q3 à la position floor(3N/4)+1.",
        "Construire le diagramme en boîte : graduer un axe, marquer Min, Q1, Médiane, Q3, Max, dessiner le rectangle central de Q1 à Q3 coupé en Médiane, et relier les moustaches aux valeurs extrêmes.",
        "Ajustement par la méthode des deux points moyens (Mayer) : 1. Scinder les points ordonnés en deux sous-groupes de tailles égales ou quasi-égales ; 2. Calculer les points moyens G1(X1, Y1) et G2(X2, Y2) ; 3. Déterminer la pente a = (Y2 - Y1)/(X2 - X1) et l'ordonnée à l'origine b = Y1 - a*X1 de la droite (G1G2).",
        "Comparer les dispersions de deux séries : si les ordres de grandeurs sont voisins, comparer les écart-types sigma ; si les ordres de grandeurs diffèrent nettement, comparer les écart-types relatifs sigma/X_barre ou les écarts interquartiles relatifs (Q3-Q1)/Me."
      ]
    },
    {
      id: "t1_ch12",
      lessonNumber: 12,
      tome: 1,
      title: "Probabilités",
      pages: [221, 238],
      topics: [
        "Vocabulaire fondamental : expérience aléatoire, épreuve, issue, univers des possibles E, événement, événement élémentaire, événements incompatibles",
        "Définition axiomatique d'une probabilité p sur P(E) : p(E) = 1, p(vide) = 0, p(A) = somme des probabilités des événements élémentaires",
        "Événement contraire A_barre : p(A_barre) = 1 - p(A)",
        "Probabilité de la réunion : p(A union B) = p(A) + p(B) - p(A inter B) ; si incompatibles, p(A union B) = p(A) + p(B)",
        "Situation d'équiprobabilité (loi uniforme) : p(A) = card(A) / card(E)",
        "Épreuves successives et événements indépendants : p(A1 inter A2 inter ... inter An) = p(A1) * p(A2) * ... * p(An)",
        "Épreuves successives et événements dépendants : probabilités conditionnelles séquentielles, utilisation d'arbres de choix pondérés",
        "Modélisations probabilistes classiques : lancers de dés, tirages dans une urne avec/sans remise, jeux répétés, problème du scrutin et chemins sur réseau"
      ],
      formulas: [
        "0 <= p(A) <= 1 pour tout événement A",
        "p(E) = 1 ; p(vide) = 0",
        "p(A_barre) = 1 - p(A)",
        "p(A union B) = p(A) + p(B) - p(A inter B)",
        "A et B incompatibles <=> A inter B = vide => p(A union B) = p(A) + p(B)",
        "En équiprobabilité : p(A) = card(A) / card(E) = (nombre de cas favorables) / (nombre de cas possibles)",
        "Événements indépendants : p(A inter B) = p(A) * p(B)",
        "Probabilité séquentielle avec dépendance : p(A1 inter A2) = p(A1) * p_{A1}(A2)"
      ],
      methods: [
        "Calculer une probabilité en équiprobabilité : 1. Déterminer et dénombrer l'univers E (card(E)) ; 2. Dénombrer les issues réalisant l'événement A (card(A)) en utilisant les techniques de dénombrement appropriées ; 3. Calculer p(A) = card(A) / card(E).",
        "Utiliser un arbre de probabilités : représenter chaque étape par des branches, affecter à chaque branche sa probabilité (conditionnelle si dépendante), la probabilité d'un chemin complet est le produit des branches le composant, et la probabilité d'un événement est la somme des chemins qui y mènent.",
        "Passer par l'événement contraire : lorsque l'événement contient la mention 'au moins un...', poser A_barre = 'aucun...' et calculer p(A) = 1 - p(A_barre)."
      ]
    },

    // =========================================================================
    // TOME 2 : GÉOMÉTRIE DU PLAN ET DE L'ESPACE, ARITHMÉTIQUE & COMPLEXES
    // =========================================================================
    {
      id: "t2_ch1",
      lessonNumber: 1,
      tome: 2,
      title: "Produit scalaire dans le plan",
      pages: [5, 24],
      topics: [
        "Définition géométrique du produit scalaire : u . v = ||u|| * ||v|| * cos(u, v) (ou 0 si l'un est nul)",
        "Carré scalaire et norme : u . u = ||u||^2",
        "Propriétés algébriques : symétrie (u . v = v . u), bilinéarité ((alpha*u) . (beta*v) = alpha*beta*(u . v), u . (v + w) = u . v + u . w)",
        "Identités remarquables scalaires : ||u + v||^2 = ||u||^2 + ||v||^2 + 2(u . v), ||u - v||^2 = ||u||^2 + ||v||^2 - 2(u . v)",
        "Formule de polarisation : u . v = (1/2)(||u + v||^2 - ||u||^2 - ||v||^2) = (1/4)(||u + v||^2 - ||u - v||^2)",
        "Caractérisation de l'orthogonalité : u orthogonal à v <=> u . v = 0 ; droites (AB) perp (CD) <=> AB . CD = 0",
        "Expression avec projection orthogonale : u . v = OA . OH_barre où H est le projeté orthogonal de B sur (OA)",
        "Inégalité de Cauchy-Schwarz : |u . v| <= ||u|| * ||v|| avec égalité ssi u et v sont colinéaires",
        "Expression analytique dans une base orthonormée (i, j) : u(x, y) . v(x', y') = x*x' + y*y'",
        "Lignes de niveau : ensemble des points M tels que u . AM = k (droite perpendiculaire à u)",
        "Lignes de niveau scalaires : MA . MB = k (cercle de centre I milieu de [AB]), MA^2 - MB^2 = k (droite perpendiculaire à (AB)), MA^2 + MB^2 = k",
        "Théorème de la médiane dans un triangle ABC avec A' milieu de [BC] : AB^2 + AC^2 = 2*AA'^2 + BC^2/2 et AB . AC = AA'^2 - BC^2/4",
        "Relations métriques dans le triangle : théorème d'Al-Kashi (loi des cosinus) a^2 = b^2 + c^2 - 2bc*cos(A), règle des sinus a/sin(A) = b/sin(B) = c/sin(C) = 2R, formule de Héron",
        "Puissance d'un point par rapport à un cercle C(O, R) : P_C(M) = MA . MB = MO^2 - R^2 ; points cocycliques"
      ],
      formulas: [
        "u . v = ||u|| * ||v|| * cos(AOB)",
        "u . u = ||u||^2",
        "u . v = 0 <=> u orthogonal à v",
        "Projection orthogonale : u . v = OA . OH_barre (H projeté orthogonal de B sur (OA))",
        "Inégalité de Cauchy-Schwarz : |u . v| <= ||u|| * ||v||",
        "Expression analytique (B.O.N) : u . v = x*x' + y*y' ; ||u|| = sqrt(x^2 + y^2)",
        "Théorème de la médiane : AB^2 + AC^2 = 2*AA'^2 + BC^2 / 2",
        "Produit scalaire et médiane : AB . AC = AA'^2 - BC^2 / 4",
        "Différence de carrés : MA^2 - MB^2 = 2 * MI_vecteur . AB_vecteur = 2 * IH_barre * AB (I milieu de [AB])",
        "Somme de carrés : MA^2 + MB^2 = 2*MI^2 + AB^2 / 2",
        "Produit scalaire MA . MB = MI^2 - AB^2 / 4 (I milieu de [AB])",
        "Théorème d'Al-Kashi : a^2 = b^2 + c^2 - 2*b*c*cos(A)",
        "Règle des sinus : a / sin(A) = b / sin(B) = c / sin(C) = 2R = abc / (2 * Aire(ABC))",
        "Formule de Héron : Aire = sqrt(p(p - a)(p - b)(p - c)) avec p = (a + b + c) / 2",
        "Puissance d'un point : P(M) = MA . MB = MO^2 - R^2"
      ],
      methods: [
        "Calculer un produit scalaire : 1. Par la formule trigonométrique si les longueurs et l'angle sont connus ; 2. Par projection orthogonale si une hauteur est facile à tracer ; 3. Par les coordonnées dans un repère orthonormé judicieusement choisi ; 4. Par décomposition vectorielle avec la relation de Chasles.",
        "Démontrer l'orthogonalité de deux droites : calculer le produit scalaire de leurs vecteurs directeurs u . v et montrer qu'il s'annule.",
        "Déterminer la ligne de niveau MA . MB = k : introduire I milieu de [AB], écrire MA . MB = MI^2 - AB^2/4 = k => MI^2 = k + AB^2/4. Si k + AB^2/4 > 0, c'est le cercle de centre I et de rayon R = sqrt(k + AB^2/4).",
        "Déterminer la ligne de niveau MA^2 - MB^2 = k : introduire I milieu de [AB], factoriser (MA - MB).(MA + MB) = 2*MI . AB = k, projeter M en H sur (AB) pour obtenir 2*IH_barre * AB = k, d'où la droite perpendiculaire à (AB) passant par H."
      ]
    },
    {
      id: "t2_ch2",
      lessonNumber: 2,
      tome: 2,
      title: "Angles orientés",
      pages: [25, 48],
      topics: [
        "Orientation d'un cercle (sens direct trigonométrique anti-horaire, sens indirect horaire) et cercle trigonométrique de rayon 1",
        "Arcs orientés : définition, mesure algébrique modulo 2pi (mes(AB) = L + 2k*pi)",
        "Relation de Chasles pour les arcs orientés : mes(AB) + mes(BC) = mes(AC) [2pi]",
        "Angle orienté de deux vecteurs non nuls (u, v) : définition par arcs de cercle trigonométrique",
        "Mesure principale d'un angle orienté dans ]-pi, pi] et congruence modulo 2pi",
        "Critère d'alignement et de colinéarité : (u, v) = 0 [2pi] (même sens) ou pi [2pi] (sens contraires)",
        "Critère d'orthogonalité : (u, v) = pi/2 [pi] <=> (u, v) = pi/2 [2pi] ou -pi/2 [2pi]",
        "Propriétés algébriques fondamentales : (v, u) = -(u, v) [2pi], (-u, v) = pi + (u, v) [2pi], (-u, -v) = (u, v) [2pi]",
        "Théorème de l'angle inscrit et angle au centre : (OA, OB) = 2*(MA, MB) [2pi] pour M sur le cercle",
        "Ensemble des points M tels que (MA, MB) = theta [2pi] (arc capable) ou theta [pi] (cercle privé de A et B)",
        "Base orthonormée directe : (i, j) telle que ||i|| = ||j|| = 1 et (i, j) = pi/2 [2pi]",
        "Déterminant de deux vecteurs dans une base orthonormée directe : det(u, v) = ||u|| * ||v|| * sin(u, v) = xy' - yx'",
        "Droite et cercle de Simpson, points cocycliques"
      ],
      formulas: [
        "(u, v) = theta [2pi] <=> (u, v) = theta + 2k*pi (k in Z)",
        "Mesure principale in ]-pi, pi]",
        "Chasles : (u, w) = (u, v) + (v, w) [2pi]",
        "(v, u) = -(u, v) [2pi]",
        "(-u, v) = (u, -v) = (u, v) + pi [2pi]",
        "(-u, -v) = (u, v) [2pi]",
        "(au, bv) = (u, v) [2pi] si a*b > 0, et (u, v) + pi [2pi] si a*b < 0",
        "u et v colinéaires de même sens <=> (u, v) = 0 [2pi]",
        "u et v colinéaires de sens contraire <=> (u, v) = pi [2pi]",
        "u et v orthogonaux <=> (u, v) = pi/2 [pi]",
        "Angle inscrit et au centre : (OA, OB) = 2*(MA, MB) [2pi] (M sur le cercle de centre O)",
        "det(u, v) = x*y' - y*x' dans une B.O.N. directe",
        "det(u, v) = ||u|| * ||v|| * sin(u, v)",
        "u . v = ||u|| * ||v|| * cos(u, v) = x*x' + y*y'"
      ],
      methods: [
        "Trouver la mesure principale d'un angle alpha donné : effectuer la division euclidienne ou retrancher/ajouter des multiples de 2*pi (k = round(alpha/(2pi))) pour ramener la valeur dans l'intervalle ]-pi, pi].",
        "Calculer un angle orienté par relation de Chasles : insérer des vecteurs intermédiaires connus, par exemple (AB, CD) = (AB, AC) + (AC, CD) [2pi].",
        "Déterminer l'ensemble des points M vérifiant (MA, MB) = theta [2pi] : construire le cercle passant par A et B tangent à une droite (AT) telle que (AT, AB) = theta [2pi] ; l'ensemble cherché est l'un des deux arcs ouverts d'extrémités A et B.",
        "Démontrer que quatre points A, B, C, D sont cocycliques : montrer que (CA, CB) = (DA, DB) [pi]."
      ]
    },
    {
      id: "t2_ch3",
      lessonNumber: 3,
      tome: 2,
      title: "Trigonométrie",
      pages: [49, 69],
      topics: [
        "Définition du cosinus et sinus d'un réel sur le cercle trigonométrique",
        "Valeurs remarquables des angles 0, pi/6, pi/4, pi/3, pi/2, pi et leurs associés (pi - x, pi + x, -x, pi/2 - x, pi/2 + x)",
        "Tangente d'un réel : tan(x) = sin(x)/cos(x) pour x != pi/2 + k*pi",
        "Coordonnées polaires d'un point dans le plan orienté : M(r, theta) avec r = OM > 0 et theta = (i, OM) [2pi]",
        "Passage coordonnées polaires <-> cartésiennes : x = r*cos(theta), y = r*sin(theta), r = sqrt(x^2+y^2), tan(theta) = y/x",
        "Formules d'addition : cos(a - b), cos(a + b), sin(a - b), sin(a + b)",
        "Formules de duplication : cos(2a) = cos^2(a) - sin^2(a) = 2cos^2(a) - 1 = 1 - 2sin^2(a), sin(2a) = 2sin(a)cos(a)",
        "Transformation de a*cos(x) + b*sin(x) sous la forme R*cos(x - phi) avec R = sqrt(a^2 + b^2)",
        "Résolution des équations fondamentales : cos(x) = cos(alpha), sin(x) = sin(alpha), tan(x) = tan(alpha)",
        "Résolution des inéquations trigonométriques simples sur un intervalle donné"
      ],
      formulas: [
        "cos^2(x) + sin^2(x) = 1 ; 1 + tan^2(x) = 1 / cos^2(x)",
        "cos(-x) = cos(x) ; sin(-x) = -sin(x) ; tan(-x) = -tan(x)",
        "cos(pi - x) = -cos(x) ; sin(pi - x) = sin(x) ; tan(pi - x) = -tan(x)",
        "cos(pi + x) = -cos(x) ; sin(pi + x) = -sin(x) ; tan(pi + x) = tan(x)",
        "cos(pi/2 - x) = sin(x) ; sin(pi/2 - x) = cos(x)",
        "cos(pi/2 + x) = -sin(x) ; sin(pi/2 + x) = cos(x)",
        "cos(a + b) = cos(a)cos(b) - sin(a)sin(b) ; cos(a - b) = cos(a)cos(b) + sin(a)sin(b)",
        "sin(a + b) = sin(a)cos(b) + cos(a)sin(b) ; sin(a - b) = sin(a)cos(b) - cos(a)sin(b)",
        "tan(a + b) = (tan(a) + tan(b)) / (1 - tan(a)tan(b))",
        "cos(2a) = cos^2(a) - sin^2(a) = 2*cos^2(a) - 1 = 1 - 2*sin^2(a)",
        "sin(2a) = 2*sin(a)*cos(a)",
        "Linearisation : cos^2(a) = (1 + cos(2a))/2 ; sin^2(a) = (1 - cos(2a))/2",
        "a*cos(x) + b*sin(x) = sqrt(a^2 + b^2) * cos(x - phi) avec cos(phi) = a/sqrt(a^2+b^2) et sin(phi) = b/sqrt(a^2+b^2)",
        "cos(x) = cos(alpha) <=> x = alpha + 2k*pi ou x = -alpha + 2k*pi (k in Z)",
        "sin(x) = sin(alpha) <=> x = alpha + 2k*pi ou x = pi - alpha + 2k*pi (k in Z)",
        "tan(x) = tan(alpha) <=> x = alpha + k*pi (k in Z)"
      ],
      methods: [
        "Transformer a*cos(x) + b*sin(x) : factoriser par R = sqrt(a^2+b^2), poser cos(phi) = a/R et sin(phi) = b/R, puis réécrire en R*cos(x - phi).",
        "Résoudre une équation trigonométrique : ramener l'expression à cos(X) = cos(alpha) ou sin(X) = sin(alpha), poser les deux familles de solutions avec + 2k*pi, puis isoler x et sélectionner les solutions dans l'intervalle demandé.",
        "Passer des coordonnées cartésiennes aux polaires : calculer r = sqrt(x^2+y^2), puis résoudre le système cos(theta) = x/r et sin(theta) = y/r pour trouver theta in ]-pi, pi].",
        "Linéariser une expression trigonométrique : remplacer les puissances paires par cos^2(u) = (1+cos(2u))/2 et sin^2(u) = (1-cos(2u))/2."
      ]
    },
    {
      id: "t2_ch4",
      lessonNumber: 4,
      tome: 2,
      title: "Rotations",
      pages: [70, 90],
      topics: [
        "Définition géométrique d'une rotation R(O, theta) : centre O invariant, pour tout M != O, OM' = OM et (OM, OM') = theta [2pi]",
        "Cas particuliers : theta = 0 [2pi] (identité du plan), theta = pi [2pi] (symétrie centrale de centre O)",
        "Réciproque d'une rotation : [R(O, theta)]^(-1) = R(O, -theta)",
        "Propriété d'isométrie : conservation des distances A'B' = AB et du produit scalaire",
        "Propriétés de conservation géométrique : conservation des milieux, barycentres, alignement, orthogonalité, parallélisme, angles orientés (A'B', C'D') = (AB, CD) [2pi]",
        "Image d'une droite, d'un segment, d'un cercle (cercle isométrique de même rayon dont le centre est l'image du centre)",
        "Angle de deux droites sous une rotation : (AB, A'B') = theta [2pi]",
        "Détermination d'une rotation : deux points distincts A, B et leurs images A', B' avec AB = A'B' et AB != A'B'_vecteur déterminent une unique rotation",
        "Construction du centre d'une rotation : intersection des médiatrices de [AA'] et [BB']",
        "Figures globalement invariantes par une rotation (triangle équilatéral pour 2pi/3, carré pour pi/2, polygones réguliers)",
        "Composée de deux rotations de même centre : R(O, theta') o R(O, theta) = R(O, theta + theta')",
        "Lieux géométriques et ensembles de points invariants par rotation"
      ],
      formulas: [
        "R(O, theta)(O) = O",
        "R(O, theta)(M) = M' <=> (OM' = OM et (OM, OM') = theta [2pi])",
        "(R(O, theta))^(-1) = R(O, -theta)",
        "Conservation de la distance : A'B' = AB",
        "Conservation des angles orientés : (A'B', A'C') = (AB, AC) [2pi]",
        "Angle entre un vecteur et son image : (AB, A'B') = theta [2pi]",
        "R_2(O, theta2) o R_1(O, theta1) = R(O, theta1 + theta2)",
        "Si theta1 + theta2 = 0 [2pi], R_2 o R_1 = Id_Plan",
        "Image d'un cercle C(I, R) : cercle C'(I', R) où I' = R(O, theta)(I)"
      ],
      methods: [
        "Construire l'image d'un point M par R(O, theta) : tracer le cercle de centre O passant par M, reporter l'angle orienté (OM, OM') = theta dans le sens trigonométrique sur ce cercle.",
        "Déterminer le centre et l'angle d'une rotation envoyant A sur A' et B sur B' : 1. L'angle est theta = (AB, A'B') [2pi] ; 2. Le centre O est le point d'intersection de la médiatrice de [AA'] et de la médiatrice de [BB'].",
        "Démontrer qu'un triangle est équilatéral ou rectangle isocèle : exhiber une rotation de centre O et d'angle pi/3 (ou pi/2) qui transforme un sommet en un autre.",
        "Trouver un lieu géométrique par rotation : si un point variable M décrit une figure géométrique F (cercle, droite) et que N = R(O, theta)(M), alors le lieu de N est la figure F' = R(O, theta)(F)."
      ]
    },
    {
      id: "t2_ch5",
      lessonNumber: 5,
      tome: 2,
      title: "Nombres complexes",
      pages: [91, 108],
      topics: [
        "Ensemble C des nombres complexes, élément imaginaire i tel que i^2 = -1",
        "Forme algébrique / cartésienne : z = a + ib (a = Re(z), b = Im(z)) ; unicité de l'écriture",
        "Égalité de deux complexes, nombres réels (b = 0), nombres imaginaires purs (a = 0 et b != 0)",
        "Opérations algébriques dans C : addition, multiplication, opposé, inverse 1/z = (a - ib)/(a^2 + b^2)",
        "Puissances de i : i^0 = 1, i^1 = i, i^2 = -1, i^3 = -i et périodicité de période 4",
        "Conjugué d'un nombre complexe z_barre = a - ib : propriétés algébriques, z + z_barre = 2*Re(z), z - z_barre = 2i*Im(z), z * z_barre = a^2 + b^2",
        "Résolution des équations z^2 = alpha dans C (solutions réelles si alpha > 0, imaginaires pures +- i*sqrt(|alpha|) si alpha < 0)",
        "Interprétation géométrique : plan complexe, affixe d'un point M(z), image M d'un complexe z",
        "Affixe d'un vecteur AB : z_AB = z_B - z_A ; affixe d'une combinaison linéaire",
        "Module d'un complexe |z| = sqrt(a^2 + b^2) = sqrt(z * z_barre) et interprétation géométrique OM = |z|, AB = |z_B - z_A|",
        "Propriétés du module : |z| >= 0, |z| = 0 <=> z = 0, |z*z'| = |z|*|z'|, |z/z'| = |z|/|z'|, inégalité triangulaire |z + z'| <= |z| + |z'|",
        "Argument d'un nombre complexe non nul : arg(z) = (u, OM) [2pi]",
        "Forme trigonométrique : z = r*(cos(theta) + i*sin(theta)) avec r = |z| et theta = arg(z) [2pi]",
        "Propriétés de l'argument : arg(z*z') = arg(z) + arg(z') [2pi], arg(z^n) = n*arg(z) [2pi], arg(1/z) = -arg(z) [2pi], arg(z/z') = arg(z) - arg(z') [2pi]",
        "Applications géométriques : caractérisation de cercles (|z - z0| = R), médiatrices (|z - zA| = |z - zB|), demi-droites (arg(z - zA) = theta [2pi])",
        "Ensemble des entiers de Gauss G = {a + bi | a, b in Z} et norme arithmétique n(alpha) = |alpha|^2"
      ],
      formulas: [
        "i^2 = -1",
        "z = a + ib <=> Re(z) = a et Im(z) = b (a, b in R)",
        "z = z' <=> Re(z) = Re(z') et Im(z) = Im(z')",
        "z in R <=> Im(z) = 0 <=> z_barre = z",
        "z in iR <=> Re(z) = 0 <=> z_barre = -z",
        "z_barre = a - ib ; z * z_barre = a^2 + b^2 = |z|^2",
        "1/z = z_barre / |z|^2 = (a - ib) / (a^2 + b^2)",
        "Pour z^2 = alpha : si alpha < 0, S = {-i*sqrt(-alpha), i*sqrt(-alpha)}",
        "Affixe du vecteur AB : z_AB = z_B - z_A",
        "Distance géométrique : AB = |z_B - z_A|",
        "Module : |z| = sqrt(a^2 + b^2) ; |z*z'| = |z| * |z'| ; |z^n| = |z|^n ; |z/z'| = |z| / |z'|",
        "Inégalité triangulaire : |z + z'| <= |z| + |z'|",
        "Forme trigonométrique : z = r(cos(theta) + i*sin(theta)) avec r = |z| et theta = arg(z) [2pi]",
        "cos(theta) = a / |z| et sin(theta) = b / |z|",
        "arg(z * z') = arg(z) + arg(z') [2pi]",
        "arg(z^n) = n * arg(z) [2pi]",
        "arg(z / z') = arg(z) - arg(z') [2pi]",
        "arg(z_barre) = -arg(z) [2pi] ; arg(-z) = arg(z) + pi [2pi]",
        "Angle de vecteurs : (AB, CD) = arg((z_D - z_C) / (z_B - z_A)) [2pi]",
        "Alignement : A, B, C alignés <=> (z_C - z_A)/(z_B - z_A) in R",
        "Orthogonalité : (AB) perp (AC) <=> (z_C - z_A)/(z_B - z_A) in iR"
      ],
      methods: [
        "Mettre sous forme algébrique un quotient : multiplier le numérateur et le dénominateur par le conjugué du dénominateur, développer et séparer parties réelle et imaginaire.",
        "Passer de la forme algébrique à la forme trigonométrique : 1. Calculer r = sqrt(a^2 + b^2) ; 2. Factoriser par r pour obtenir cos(theta) = a/r et sin(theta) = b/r ; 3. Déterminer theta à l'aide des valeurs usuelles et des signes.",
        "Déterminer un ensemble de points complexe : 1. Si relation sur des modules |z - zA| = R => cercle de centre A et rayon R ; 2. Si |z - zA| = |z - zB| => médiatrice du segment [AB] ; 3. Si relation sur un argument => demi-droite d'origine le point fixé.",
        "Résoudre une équation du second degré à coefficients réels avec discriminant négatif Delta < 0 : poser delta = i*sqrt(-Delta), les racines sont z1 = (-b - i*sqrt(-Delta))/(2a) et z2 = (-b + i*sqrt(-Delta))/(2a)."
      ]
    },
    {
      id: "t2_ch6",
      lessonNumber: 6,
      tome: 2,
      title: "Dénombrement",
      pages: [109, 125],
      topics: [
        "Cardinal d'un ensemble fini (card(E) = n), ensemble vide card(vide) = 0",
        "Principe additif : réunion disjointe card(A union B) = card(A) + card(B)",
        "Formule du crible pour deux ensembles : card(A union B) = card(A) + card(B) - card(A inter B)",
        "Complémentaire dans un ensemble fini : card(A_barre) = card(E) - card(A)",
        "Principe multiplicatif : produit cartésien card(E x F) = card(E) * card(F)",
        "p-uplets d'un ensemble à n éléments : nombre total = n^p (tirages successifs avec remise, codes, mots)",
        "Permutations d'un ensemble à n éléments : nombre total = n! (avec 0! = 1)",
        "Arrangements de p éléments parmi n : A_n^p = n! / (n - p)! (tirages successifs sans remise, classements, ordres)",
        "Combinaisons de p éléments parmi n : C_n^p = (n choose p) = n! / (p!(n - p)!) (tirages simultanés, parties, sous-ensembles)",
        "Propriétés des coefficients binomiaux : C_n^0 = 1, C_n^1 = n, C_n^n = 1, C_n^p = C_n^(n-p)",
        "Formule de Pascal : C_n^p = C_{n-1}^p + C_{n-1}^{p-1} et construction du triangle de Pascal",
        "Formule du binôme de Newton : (a + b)^n = sum_{p=0}^n C_n^p * a^(n-p) * b^p",
        "Nombre de parties d'un ensemble à n éléments : card(P(E)) = 2^n = sum_{p=0}^n C_n^p"
      ],
      formulas: [
        "card(A union B) = card(A) + card(B) - card(A inter B)",
        "A inter B = vide => card(A union B) = card(A) + card(B)",
        "card(A_barre) = card(E) - card(A)",
        "card(E x F) = card(E) * card(F)",
        "card(E^p) = n^p (p-uplets d'éléments d'un ensemble de cardinal n)",
        "Permutations : P_n = n! = n * (n - 1) * ... * 2 * 1 (avec 0! = 1)",
        "Arrangements : A_n^p = n(n - 1)...(n - p + 1) = n! / (n - p)! (0 <= p <= n)",
        "Combinaisons : C_n^p = (n choose p) = A_n^p / p! = n! / (p! * (n - p)!)",
        "Symétrie : C_n^p = C_n^(n - p)",
        "Formule du triangle de Pascal : C_n^p = C_{n-1}^p + C_{n-1}^{p-1} (1 <= p <= n-1)",
        "Formule du binôme de Newton : (a + b)^n = sum_{k=0}^n C_n^k * a^(n-k) * b^k",
        "Nombre de sous-ensembles : sum_{k=0}^n C_n^k = 2^n",
        "Nombre de diagonales d'un polygone convexe à n côtés : d_n = C_n^2 - n = n(n - 3) / 2"
      ],
      methods: [
        "Choisir le modèle de dénombrement adapté selon les critères 'ordre' et 'répétition' :",
        "  1. Avec ordre et avec répétition => p-uplets (n^p) (ex: mots de passe, numéros de téléphone).",
        "  2. Avec ordre et sans répétition => arrangements A_n^p (ex: tirages successifs sans remise, podium, bureaux ordonnés).",
        "  3. Sans ordre et sans répétition => combinaisons C_n^p (ex: tirages simultanés, mains de cartes, délégations).",
        "  4. Réarrangement d'éléments tous distincts => permutations n!.",
        "Dénombrer avec des contraintes ('au moins un', 'exactement', 'séparés') : utiliser la décomposition en événements disjoints ou soustraire le cas complémentaire du total.",
        "Développer une puissance d'un binôme via Newton : écrire la ligne correspondante du triangle de Pascal pour les coefficients C_n^k, puis affecter les puissances décroissantes de a et croissantes de b."
      ]
    },
    {
      id: "t2_ch7",
      lessonNumber: 7,
      tome: 2,
      title: "Divisibilité dans N",
      pages: [126, 142],
      topics: [
        "Principe de récurrence (axiome de Peano) : initialisation en n0, hérédité P(n) => P(n+1), conclusion",
        "Définition de la divisibilité dans N : a divisible par d <=> il existe k in N tel que a = d*k (d divise a)",
        "Propriétés de base de la divisibilité : réflexivité (a divise a), transitivité (a divise b et b divise c => a divise c), antisymétrie (a divise b et b divise a => a = b)",
        "Combinaisons linéaires : si c divise a et b, alors c divise alpha*a + beta*b et a - b (si a >= b)",
        "Critères de divisibilité classiques : par 2, 3, 4, 5, 8, 9, 11",
        "Division euclidienne dans N : pour tout a in N et b in N*, il existe un unique couple (q, r) in N x N tel que a = b*q + r avec 0 <= r < b",
        "Plus Grand Commun Diviseur (PGCD) noté a ^ b : définition et propriétés",
        "Algorithme d'Euclide des divisions successives pour le calcul du PGCD : a ^ b = b ^ r",
        "Entiers premiers entre eux : a ^ b = 1",
        "Théorème de factorisation par le PGCD : si d = a ^ b, alors a = d*a' et b = d*b' avec a' ^ b' = 1",
        "Lemme de Gauss : si a divise b*c et si a ^ b = 1, alors a divise c",
        "Corollaire du lemme de Gauss : si a et b divisent c avec a ^ b = 1, alors a*b divise c",
        "Plus Petit Commun Multiple (PPCM) noté a v b : définition et propriétés",
        "Relation fondamentale entre PGCD et PPCM : (a ^ b) * (a v b) = a * b",
        "Systèmes de numération : écriture d'un entier en base b (b >= 2) par divisions euclidiennes successives"
      ],
      formulas: [
        "Division euclidienne : a = b*q + r avec q, r in N et 0 <= r < b",
        "c divise a et c divise b => c divise (alpha*a + beta*b) pour tous alpha, beta in N",
        "Algorithme d'Euclide : r_{k-2} = r_{k-1}*q_k + r_k => a ^ b = r_n (dernier reste non nul)",
        "Propriété de linéarité du PGCD : (k*a) ^ (k*b) = k * (a ^ b) pour k in N*",
        "Si d = a ^ b, a = d*a' et b = d*b' avec a' ^ b' = 1",
        "Lemme de Gauss : (a divise b*c ET a ^ b = 1) => a divise c",
        "(a divise c ET b divise c ET a ^ b = 1) => a*b divise c",
        "Relation fondamentale : (a ^ b) * (a v b) = a * b",
        "Écriture en base b : n = c_k*b^k + c_{k-1}*b^(k-1) + ... + c_1*b + c_0 avec 0 <= c_i < b"
      ],
      methods: [
        "Faire une démonstration par récurrence : 1. Initialisation : vérifier la propriété P(n0) ; 2. Hérédité : supposer P(n) vraie pour un entier n >= n0 fixé, exprimer l'expression au rang (n+1) et faire apparaître celle du rang n pour prouver P(n+1) ; 3. Conclure.",
        "Calculer le PGCD par l'algorithme d'Euclide : effectuer des divisions euclidiennes successives a = b*q1 + r1, b = r1*q2 + r2, etc., jusqu'à trouver un reste nul ; le PGCD est le dernier reste non nul.",
        "Résoudre une équation ou système avec PGCD et somme/produit (ex: a + b = S et a ^ b = d) : 1. Poser a = d*a' et b = d*b' avec a' ^ b' = 1 ; 2. Réécrire le système sur a' et b' ; 3. Trouver les couples d'entiers (a', b') premiers entre eux solutions ; 4. Multiplier par d pour trouver (a, b).",
        "Convertir un entier en base b : effectuer des divisions successives par b jusqu'à obtenir un quotient nul ; les chiffres en base b sont les restes successifs lus du dernier au premier."
      ]
    },
    {
      id: "t2_ch8",
      lessonNumber: 8,
      tome: 2,
      title: "Nombres premiers",
      pages: [143, 155],
      topics: [
        "Définition d'un nombre premier p >= 2 (diviseurs stricts 1 et p) et d'un nombre composé",
        "Tout entier n >= 2 admet au moins un diviseur premier (le plus petit diviseur > 1 est premier)",
        "Critère de primalité : un entier n > 1 est premier si et seulement s'il n'admet aucun diviseur premier p <= sqrt(n)",
        "Crible d'Ératosthène pour déterminer la liste des nombres premiers jusqu'à un entier N",
        "Théorème d'Euclide : infinité des nombres premiers",
        "Théorème fondamental de l'arithmétique : décomposition unique en produit de facteurs premiers n = p1^alpha1 * p2^alpha2 * ... * pk^alphak",
        "Nombre et somme des diviseurs d'un entier à partir de sa décomposition canonique",
        "Calcul du PGCD et du PPCM à partir des décompositions en facteurs premiers (min et max des exposants)",
        "Propriété d'Euclide sur les nombres premiers : si p est premier et p divise ab, alors p divise a ou p divise b",
        "Petit théorème de Fermat : pour tout nombre premier p et tout entier a, p divise a^p - a ; si p ne divise pas a, a^(p-1) = 1 [p]",
        "Nombres premiers jumeaux (p et p+2), nombres parfaits (somme des diviseurs stricts égale au nombre)",
        "Applications arithmétiques : cryptographie et chiffrement affine modulo 26 (y = ax + b [26] bijectif ssi a ^ 26 = 1)"
      ],
      formulas: [
        "Critère de primalité : n premier <=> pour tout p premier tel que p <= sqrt(n), p ne divise pas n",
        "Décomposition canonique : n = p_1^(alpha_1) * p_2^(alpha_2) * ... * p_k^(alpha_k)",
        "Nombre de diviseurs : d(n) = (alpha_1 + 1)(alpha_2 + 1)...(alpha_k + 1)",
        "Somme des diviseurs : sigma(n) = prod_{i=1}^k (p_i^(alpha_i + 1) - 1) / (p_i - 1)",
        "PGCD par facteurs premiers : a ^ b = prod p_i^(min(alpha_i, beta_i))",
        "PPCM par facteurs premiers : a v b = prod p_i^(max(alpha_i, beta_i))",
        "Théorème d'Euclide-Fermat : si p premier divise ab => p divise a ou p divise b",
        "Petit théorème de Fermat : a^p = a [p] pour tout a in N et p premier",
        "Petit théorème de Fermat (forme réduite) : a^(p - 1) = 1 [p] si p ne divise pas a",
        "Cryptage affine : y = (ax + b) mod 26 inversible ssi a ^ 26 = 1"
      ],
      methods: [
        "Tester si un nombre N est premier : 1. Calculer sqrt(N) ; 2. Dresser la liste des nombres premiers p <= sqrt(N) ; 3. Tester la divisibilité de N par chacun de ces nombres premiers ; si aucun ne divise N, alors N est premier.",
        "Décomposer un entier en facteurs premiers : diviser successivement par les plus petits nombres premiers possibles (2, 3, 5, 7, 11...) jusqu'à obtenir le quotient 1.",
        "Calculer le PGCD et le PPCM de deux entiers factorisés : prendre les facteurs premiers communs munis du plus petit exposant pour le PGCD, et tous les facteurs premiers munis du plus grand exposant pour le PPCM.",
        "Appliquer le petit théorème de Fermat pour simplifier de grandes puissances modulo p : décomposer l'exposant n = (p-1)*q + r, d'où a^n = (a^(p-1))^q * a^r = 1^q * a^r = a^r [p]."
      ]
    },
    {
      id: "t2_ch9",
      lessonNumber: 9,
      tome: 2,
      title: "Vecteurs de l'espace",
      pages: [156, 175],
      topics: [
        "Généralisation des vecteurs à l'espace tridimensionnel E (bipoints équipollents ayant même milieu des diagonales)",
        "Vecteur nul, norme ||u|| = AB, vecteur opposé -u, direction et sens dans l'espace",
        "Addition vectorielle dans l'espace, relation de Chasles AB + BC = AC et règle du parallélogramme",
        "Multiplication d'un vecteur par un réel lambda, propriétés d'espace vectoriel",
        "Colinéarité de deux vecteurs dans l'espace et repère cartésien d'une droite D(A, u)",
        "Combinaison linéaire de vecteurs dans l'espace, vecteurs coplanaires et repère cartésien d'un plan P(A, u, v)",
        "Familles libres et familles liées de vecteurs dans l'espace",
        "Caractérisation de trois vecteurs coplanaires : {u, v, w} liée <=> l'un est combinaison linéaire des deux autres",
        "Bases et repères cartésiens de l'espace : triplet de vecteurs non coplanaires (i, j, k) formant une base libre",
        "Coordonnées d'un vecteur u(x, y, z) et d'un point M(x, y, z) dans un repère (O, i, j, k)",
        "Coordonnées du milieu d'un segment et du centre de gravité d'un tétraèdre ABCD",
        "Déterminant de trois vecteurs dans une base : det_B(u, v, w) et critère de base (det != 0 <=> famille libre)"
      ],
      formulas: [
        "AB = DC <=> ABDC est un parallélogramme <=> [AD] et [BC] ont même milieu",
        "Relation de Chasles : AB + BC = AC",
        "Centre de gravité d'un tétraèdre ABCD : unique point G tel que GA + GB + GC + GD = 0",
        "Repère cartésien de droite : M in D(A, u) <=> il existe alpha in R tel que AM = alpha * u",
        "Repère cartésien de plan : M in P(A, u, v) <=> il existe alpha, beta in R tels que AM = alpha*u + beta*v (u et v non colinéaires)",
        "Coordonnées du milieu I de [AB] : ((xA+xB)/2, (yA+yB)/2, (zA+zB)/2)",
        "Vecteur AB : (xB - xA, yB - yA, zB - zA)",
        "Centre de gravité du tétraèdre : ((xA+xB+xC+xD)/4, (yA+yB+yC+yD)/4, (zA+zB+zC+zD)/4)",
        "Déterminant 3x3 : det(u, v, w) = a(b'c'' - c'b'') - b(a'c'' - c'a'') + c(a'b'' - b'a'')",
        "{u, v, w} est une base de l'espace <=> det(u, v, w) != 0 <=> {u, v, w} non coplanaires"
      ],
      methods: [
        "Prouver que trois vecteurs sont coplanaires : chercher deux réels alpha et beta tels que w = alpha*u + beta*v, ou calculer leur déterminant et montrer qu'il est nul.",
        "Prouver que quatre points A, B, C, D sont coplanaires : vérifier que les vecteurs AB, AC et AD forment une famille liée (det(AB, AC, AD) = 0).",
        "Démontrer qu'une droite est parallèle à un plan : montrer que le vecteur directeur de la droite est combinaison linéaire des deux vecteurs directeurs du plan.",
        "Calculer le déterminant 3x3 : appliquer le développement suivant la première colonne ou la règle de Sarrus."
      ]
    },
    {
      id: "t2_ch10",
      lessonNumber: 10,
      tome: 2,
      title: "Produit scalaire et produit vectoriel dans l'espace",
      pages: [176, 196],
      topics: [
        "Définition du produit scalaire dans l'espace : u . v = ||u|| * ||v|| * cos(alpha) (même plan contenant u et v)",
        "Orthogonalité dans l'espace : u . v = 0 <=> u orthogonal à v ; droites orthogonales",
        "Vecteur normal à un plan P : vecteur non nul n orthogonal à tous les vecteurs du plan",
        "Caractérisation : n normal à P <=> n orthogonal à deux vecteurs directeurs non colinéaires de P",
        "Base orthonormée de l'espace et repère orthonormé (O, i, j, k) : vecteurs unitaires deux à deux orthogonaux",
        "Expression analytique du produit scalaire : u(x, y, z) . v(x', y', z') = xx' + yy' + zz'",
        "Distance entre deux points dans un repère orthonormé : AB = sqrt((xB - xA)^2 + (yB - yA)^2 + (zB - zA)^2)",
        "Orientation de l'espace (règle de la main droite, bonhomme d'Ampère, tire-bouchon de Maxwell)",
        "Produit vectoriel u wedge v : définition géométrique (vecteur orthogonal à u et v, sens direct, norme ||u||*||v||*sin(theta))",
        "Propriétés du produit vectoriel : antisymétrie (u wedge v = -(v wedge u)), bilinéarité, u wedge v = 0 <=> u et v colinéaires",
        "Expression analytique du produit vectoriel dans une base orthonormée directe : composantes par mineurs 2x2",
        "Applications géométriques : aire d'un parallélogramme S = ||AB wedge AD||, aire d'un triangle S = (1/2)||AB wedge AC||",
        "Volume d'un tétraèdre ABCD : V = (1/6) * |(AB wedge AC) . AD|",
        "Distance d'un point A à une droite D(B, u) : d(A, D) = ||BA wedge u|| / ||u||"
      ],
      formulas: [
        "u . v = ||u|| * ||v|| * cos(u, v)",
        "u . v = x*x' + y*y' + z*z' (dans un R.O.N)",
        "||u|| = sqrt(x^2 + y^2 + z^2)",
        "Distance : AB = sqrt((xB - xA)^2 + (yB - yA)^2 + (zB - zA)^2)",
        "Droites orthogonales <=> u . v = 0",
        "u wedge v = 0 <=> u et v sont colinéaires",
        "u wedge v = -(v wedge u)",
        "||u wedge v|| = ||u|| * ||v|| * sin(alpha)",
        "Composantes du produit vectoriel : u wedge v = (y*z' - z*y')*i + (z*x' - x*z')*j + (x*y' - y*x')*k",
        "Aire d'un triangle ABC : Aire = (1/2) * ||AB wedge AC||",
        "Aire d'un parallélogramme ABCD : Aire = ||AB wedge AD||",
        "Volume du tétraèdre ABCD : V = (1/6) * |(AB wedge AC) . AD|",
        "Distance d'un point A à une droite D(B, u) : d(A, D) = ||BA wedge u|| / ||u||"
      ],
      methods: [
        "Calculer le produit vectoriel de deux vecteurs u(x, y, z) et v(x', y', z') : dresser le tableau des composantes et calculer les trois déterminants 2x2 : X = y*z' - z*y', Y = z*x' - x*z', Z = x*y' - y*x'.",
        "Calculer l'aire d'un triangle dans l'espace : calculer les vecteurs AB et AC, calculer le produit vectoriel AB wedge AC, puis prendre la moitié de sa norme.",
        "Calculer le volume d'un tétraèdre : calculer le produit vectoriel AB wedge AC, faire le produit scalaire avec AD, prendre la valeur absolue et diviser par 6.",
        "Calculer la distance d'un point à une droite dans l'espace : choisir un point B de la droite et un vecteur directeur u, calculer BA wedge u, et diviser sa norme par ||u||."
      ]
    },
    {
      id: "t2_ch11",
      lessonNumber: 11,
      tome: 2,
      title: "Equations de droites et de plans. Equation d’une sphère",
      pages: [197, 216],
      topics: [
        "Représentation paramétrique d'une droite de l'espace D(A(x0, y0, z0), u(a, b, c)) : x = x0 + at, y = y0 + bt, z = z0 + ct",
        "Représentation paramétrique d'un plan P(A(x0, y0, z0), u, v) à deux paramètres alpha et beta",
        "Équation cartésienne d'un plan dans un repère quelconque : ax + by + cz + d = 0 avec (a, b, c) != (0, 0, 0)",
        "Vecteur normal n(a, b, c) à un plan dans un repère orthonormé : M in P <=> AM . n = 0 <=> ax + by + cz + d = 0",
        "Positions relatives de plans : parallèles (vecteurs normaux colinéaires), sécants (intersection = droite), perpendiculaires (n . n' = 0)",
        "Positions relatives de droites et plans : droite parallèle au plan (u . n = 0), droite sécante, droite incluse",
        "Positions relatives de deux droites : coplanaires (sécantes ou parallèles) ou non coplanaires (gauche)",
        "Perpendiculaire commune et distance entre deux droites non coplanaires",
        "Distance d'un point A(x0, y0, z0) à un plan P : d(A, P) = |a*x0 + b*y0 + c*z0 + d| / sqrt(a^2 + b^2 + c^2)",
        "Équation cartésienne d'une sphère de centre I(x0, y0, z0) et de rayon R : (x - x0)^2 + (y - y0)^2 + (z - z0)^2 = R^2",
        "Forme générale x^2 + y^2 + z^2 + ax + by + cz + d = 0 et discussion selon h = a^2/4 + b^2/4 + c^2/4 - d (vide, point, sphère)",
        "Sphère de diamètre [AB] : MA . MB = 0",
        "Intersection d'une sphère S(I, R) et d'un plan P : comparaison de la distance h = d(I, P) et du rayon R (vide si h > R, point de tangence H si h = R, cercle de centre H et de rayon r = sqrt(R^2 - h^2) si h < R)"
      ],
      formulas: [
        "Représentation paramétrique de droite : { x = x0 + a*t ; y = y0 + b*t ; z = z0 + c*t } (t in R)",
        "Représentation paramétrique de plan : { x = x0 + alpha*a + beta*a' ; y = y0 + alpha*b + beta*b' ; z = z0 + alpha*c + beta*c' }",
        "Équation cartésienne de plan : ax + by + cz + d = 0 avec n(a, b, c) vecteur normal (dans un R.O.N)",
        "Plans perpendiculaires <=> n . n' = a*a' + b*b' + c*c' = 0",
        "Droite D(A, u) perpendiculaire au plan P(n) <=> u et n colinéaires",
        "Distance d'un point A(x0, y0, z0) au plan P : d(A, P) = |a*x0 + b*y0 + c*z0 + d| / sqrt(a^2 + b^2 + c^2)",
        "Équation de sphère : (x - x0)^2 + (y - y0)^2 + (z - z0)^2 = R^2",
        "Sphère de diamètre [AB] : (x - xA)(x - xB) + (y - yA)(y - yB) + (z - zA)(z - zB) = 0",
        "Rayon du cercle d'intersection plan-sphère : r = sqrt(R^2 - h^2) où h = d(Centre, Plan) < R"
      ],
      methods: [
        "Trouver une équation cartésienne de plan défini par trois points A, B, C : 1. Calculer un vecteur normal n = AB wedge AC ; 2. Poser ax + by + cz + d = 0 avec les composantes de n ; 3. Déterminer d en injectant les coordonnées de A.",
        "Calculer la distance d'un point à un plan : appliquer directement la formule d(A, P) = |a*xA + b*yA + c*zA + d| / sqrt(a^2 + b^2 + c^2).",
        "Étudier l'intersection d'une sphère et d'un plan : 1. Identifier le centre I et le rayon R de la sphère ; 2. Calculer la distance h = d(I, P) ; 3. Si h > R, intersection vide ; si h = R, plan tangent au point H projeté orthogonal de I sur P ; si h < R, cercle de centre H et de rayon r = sqrt(R^2 - h^2).",
        "Trouver la droite d'intersection de deux plans sécants : résoudre le système des deux équations cartésiennes en exprimant deux coordonnées en fonction de la troisième prise comme paramètre t."
      ]
    },

    // =========================================================================
    // PROGRAMME OFFICIEL PREMIÈRE C (COLLECTION SPM APMGB & ÉCOLE NUMÉRIQUE CI)
    // =========================================================================
    {
      id: "spm_ch2_equations_systemes",
      lessonNumber: 2,
      tome: 1,
      title: "Équations, Inéquations et Systèmes linéaires (Pivot de Gauss, Second degré, Irrationnelles)",
      pages: [28, 42],
      topics: [
        "Polynôme et équation du second degré dans R : forme canonique, discriminant Delta = b^2 - 4ac",
        "Racines du second degré, factorisation P(x) = a(x - x0)^2 ou a(x - x1)(x - x2)",
        "Tableau de signe du trinôme ax^2 + bx + c (du signe de 'a' à l'extérieur des racines, du signe de '-a' entre les racines)",
        "Inéquations du second degré et inéquations rationnelles quotients (ax+b)/(cx+d)",
        "Relations entre coefficients et racines (formules de Viète) : somme S = x1 + x2 = -b/a, produit P = x1*x2 = c/a",
        "Recherche de deux nombres réels connaissant leur somme S et leur produit P via l'équation résolvante x^2 - Sx + P = 0",
        "Détermination d'une racine connaissant une racine évidente (1, -1, 2...)",
        "Équations et inéquations bicarrées ax^4 + bx^2 + c = 0 par changement d'inconnue X = x^2 avec condition X >= 0",
        "Équations irrationnelles sqrt(P(x)) = Q(x) équivalentes à (Q(x) >= 0 ET P(x) = [Q(x)]^2)",
        "Inéquations irrationnelles sqrt(P(x)) <= Q(x) équivalentes à (P(x) >= 0 ET Q(x) >= 0 ET P(x) <= [Q(x)]^2)",
        "Inéquations irrationnelles sqrt(P(x)) > Q(x) équivalentes à (P(x) >= 0 ET Q(x) < 0) OU (Q(x) >= 0 ET P(x) > [Q(x)]^2)",
        "Systèmes linéaires de trois équations à trois inconnues dans R^3",
        "Résolution par la méthode de substitution",
        "Résolution par la méthode du Pivot de Gauss (triangularisation par combinaisons linéaires élémentaires Li <- alpha*Li + beta*Lj)",
        "Modélisation et résolution de problèmes concrets économiques et géométriques (coûts, périmètres, aires, répartitions)"
      ],
      formulas: [
        "Discriminant : Delta = b^2 - 4ac",
        "Si Delta < 0 : pas de racine dans R, non factorisable dans R, signe constant = signe(a)",
        "Si Delta = 0 : racine double unique x0 = -b / (2a), P(x) = a(x - x0)^2, signe(a) pour x != x0",
        "Si Delta > 0 : deux racines distinctes x1 = (-b - sqrt(Delta))/(2a) et x2 = (-b + sqrt(Delta))/(2a), P(x) = a(x - x1)(x - x2)",
        "Somme et produit des racines : S = x1 + x2 = -b/a ; P = x1*x2 = c/a",
        "Deux réels ont pour somme S et pour produit P <=> ils sont solutions de x^2 - Sx + P = 0 (avec Delta = S^2 - 4P >= 0)",
        "Équation irrationnelle : sqrt(P(x)) = Q(x) <=> (Q(x) >= 0 ET P(x) = [Q(x)]^2)",
        "Inéquation irrationnelle sqrt(P) <= Q <=> (P >= 0 ET Q >= 0 ET P <= Q^2)",
        "Inéquation irrationnelle sqrt(P) > Q <=> (P >= 0 ET Q < 0) OU (Q >= 0 ET P > Q^2)",
        "Bicarrée : ax^4 + bx^2 + c = 0 <=> poser X = x^2, résoudre aX^2 + bX + c = 0, puis x = +-sqrt(X) pour chaque X >= 0",
        "Pivot de Gauss : L2 <- L2 - (a21/a11)*L1, L3 <- L3 - (a31/a11)*L1, puis L3 <- L3 - (a32/a22)*L2 pour obtenir un système triangulaire"
      ],
      methods: [
        "Résoudre une équation du second degré : 1. Calculer Delta = b^2 - 4ac ; 2. Selon le signe de Delta, déterminer les racines ; 3. Conclure S_R.",
        "Factoriser un trinôme : calculer Delta ; si Delta > 0, P(x) = a(x - x1)(x - x2) ; si Delta = 0, P(x) = a(x - x0)^2 ; si Delta < 0, pas de factorisation dans R.",
        "Étudier le signe de ax^2+bx+c : dresser le tableau de signes avec le signe de 'a' à l'extérieur des racines et le signe contraire '-a' entre les racines.",
        "Résoudre sqrt(P(x)) = Q(x) : 1. Poser la condition d'existence Q(x) >= 0 ; 2. Élever au carré P(x) = [Q(x)]^2 ; 3. Résoudre l'équation polynomiale résultante ; 4. Ne retenir que les solutions vérifiant Q(x) >= 0.",
        "Résoudre sqrt(P(x)) > Q(x) : distinguer deux cas : Cas 1 (Q(x) < 0 et P(x) >= 0), Cas 2 (Q(x) >= 0 et P(x) > [Q(x)]^2), puis faire l'union S = S1 U S2.",
        "Méthode du Pivot de Gauss dans R^3 : 1. Choisir le premier pivot a11 != 0 en L1 (échanger de ligne si besoin) ; 2. Éliminer x dans L2 et L3 via combinaisons linéaires ; 3. Choisir le second pivot en L2 et éliminer y dans L3 ; 4. Résoudre le système triangulaire en remontant (trouver z, puis y, puis x)."
      ]
    },
    {
      id: "spm_ch_inequations_demi_plans",
      lessonNumber: 3,
      tome: 1,
      title: "Systèmes d'inéquations linéaires dans R x R et Programmation linéaire",
      pages: [61, 70],
      topics: [
        "Inéquation du premier degré dans R x R : ax + by + c < 0, > 0, <= 0, >= 0",
        "Demi-plan frontière (droite D : ax + by + c = 0), demi-plan ouvert (< ou >) et fermé (<= ou >=)",
        "Règle du point test : tester l'origine O(0, 0) ou un point hors de la droite pour identifier le demi-plan solution",
        "Système d'inéquations linéaires dans R x R : intersection de demi-plans dans le repère (O, I, J)",
        "Régionnement du plan et polygone des contraintes (ensemble des solutions admissibles)",
        "Programmation linéaire et optimisation : recherche des couples d'entiers (x, y) dans N x N maximisant un gain ou minimisant des coûts/déchets",
        "Résolution de situations concrètes (artisanat, confection de vêtements, achats de matériel, approvisionnement)"
      ],
      formulas: [
        "Frontière : droite (D) d'équation ax + by + c = 0",
        "Si l'inégalité est stricte (ax+by+c > 0 ou < 0), le demi-plan est ouvert (ne contient pas la droite D)",
        "Si l'inégalité est large (ax+by+c >= 0 ou <= 0), le demi-plan est fermé (contient la droite D)",
        "Test de l'origine : calculer a(0) + b(0) + c = c. Si c vérifie l'inéquation, le demi-plan contient O, sinon il ne le contient pas",
        "Solutions du système : intersection géométrique des demi-plans solutions de chaque inéquation",
        "Contraintes de positivité : x >= 0 et y >= 0 (restriction au premier quadrant)",
        "Optimisation linéaire : tester les sommets de la zone admissible polygonale ou évaluer la fonction objectif f(x, y) = alpha*x + beta*y"
      ],
      methods: [
        "Représenter les solutions d'une inéquation ax+by+c <= 0 : 1. Tracer la droite frontière (D) : ax+by+c=0 (trouver 2 points) ; 2. Choisir un point test, de préférence O(0,0) si (D) ne passe pas par O ; 3. Hachurer le demi-plan qui ne convient pas ou colorier le demi-plan solution ; 4. Préciser si la droite est incluse ou exclue.",
        "Résoudre graphiquement un système d'inéquations : 1. Tracer chacune des droites frontières ; 2. Hachurer pour chaque inéquation la zone exclue ; 3. Identifier la région non hachurée (polygone des solutions).",
        "Résoudre un problème concret d'optimisation (programmation linéaire) : 1. Identifier les variables x et y ; 2. Traduire les contraintes du texte sous forme d'inéquations (y compris x in N, y in N) ; 3. Tracer le domaine de faisabilité ; 4. Dénombrer ou tester les couples de coordonnées entières situés dans la région pour optimiser la fonction de coût ou de profit."
      ]
    },
    {
      id: "spm_ch_applications_fonctions",
      lessonNumber: 4,
      tome: 1,
      title: "Applications (Injections, Surjections, Bijections) et Fonctions associées",
      pages: [3, 27],
      topics: [
        "Application d'un ensemble E dans un ensemble F (tout élément de E a une unique image dans F)",
        "Application injective : tout élément de F a au plus un antécédent (f(a) = f(b) => a = b)",
        "Application surjective : tout élément de F a au moins un antécédent (pour tout y in F, l'équation f(x) = y a au moins une solution dans E)",
        "Application bijective : injective et surjective (pour tout y in F, il existe un unique x in E tel que f(x) = y)",
        "Caractérisation graphique : toute droite horizontale y = b coupe la courbe Cf en au plus un point (injective), en au moins un point (surjective), en un point unique (bijective)",
        "Bijection réciproque f^-1 : f^-1 o f = Id_E et f o f^-1 = Id_F",
        "Courbes de f et f^-1 : symétriques par rapport à la première bissectrice d'équation y = x dans un repère orthonormé",
        "Fonctions associées et transformations géométriques :",
        "  - x |-> f(x) + b : image de Cf par la translation de vecteur b*j",
        "  - x |-> f(x + a) : image de Cf par la translation de vecteur -a*i",
        "  - x |-> f(x + a) + b : image de Cf par la translation de vecteur -a*i + b*j",
        "  - x |-> -f(x) : symétrie orthogonale par rapport à l'axe des abscisses (OI)",
        "  - x |-> f(-x) : symétrie orthogonale par rapport à l'axe des ordonnées (OJ)",
        "  - x |-> |f(x)| : coïncide avec Cf si f(x) >= 0, symétrique par rapport à (OI) si f(x) < 0",
        "Axe de symétrie x = a : pour tout h tel que a+h in Df, a-h in Df et f(a+h) = f(a-h)",
        "Centre de symétrie Omega(a, b) : pour tout h tel que a+h in Df, a-h in Df et [f(a+h) + f(a-h)] / 2 = b <=> f(a+h) + f(a-h) = 2b",
        "Périodicité : f(x + T) = f(x) avec T > 0 minimal, invariance de la courbe par translation de vecteur T*i"
      ],
      formulas: [
        "f injective <=> (pour tous x, x' in E, f(x) = f(x') => x = x')",
        "f surjective <=> (pour tout y in F, il existe x in E tel que f(x) = y)",
        "f bijective <=> (pour tout y in F, il existe un UNIQUE x in E tel que f(x) = y)",
        "Bijection réciproque : y = f(x) <=> x = f^-1(y)",
        "Courbe réciproque : M(x, y) in Cf <=> M'(y, x) in C_{f^-1} (symétrie axiale d'axe y = x)",
        "Translation : y - b = f(x - a) <=> courbe déduite par translation de vecteur u(a, b)",
        "Axe de symétrie x = a : f(a + h) = f(a - h) <=> f(2a - x) = f(x)",
        "Centre de symétrie Omega(a, b) : f(a + h) + f(a - h) = 2b <=> f(2a - x) + f(x) = 2b"
      ],
      methods: [
        "Démontrer qu'une application f est injective : partir de f(x) = f(x') et prouver par étapes algébriques rigoureuses que x = x'.",
        "Démontrer qu'une application f est surjective : soit y in F, résoudre l'équation f(x) = y d'inconnue x, exprimer x en fonction de y et vérifier que x appartient bien à l'ensemble de départ E.",
        "Démontrer qu'une application est bijective et exprimer f^-1 : résoudre f(x) = y avec y in F, montrer l'existence et l'unicité de la solution x in E, puis poser f^-1(y) = expression trouvée.",
        "Tracer la courbe de la réciproque f^-1 : tracer la première bissectrice y = x, puis tracer le symétrique point par point de la courbe Cf.",
        "Démontrer que x = a est axe de symétrie : 1. Vérifier que pour tout h, a+h in Df => a-h in Df ; 2. Calculer f(a+h) et f(a-h) séparément ; 3. Constater l'égalité.",
        "Démontrer que Omega(a, b) est centre de symétrie : 1. Vérifier la condition d'appartenance pour a+h et a-h ; 2. Calculer f(a+h) + f(a-h) ; 3. Vérifier que la somme vaut exactement 2b."
      ]
    },
    {
      id: "spm_ch_barycentre",
      lessonNumber: 5,
      tome: 2,
      title: "Barycentre et Lignes de niveau dans le plan",
      pages: [151, 165],
      topics: [
        "Point pondéré (A, a) avec A point du plan et a coefficient réel (poids)",
        "Définition du barycentre de 2 points : unique point G tel que a*GA + b*GB = 0 (avec a+b != 0)",
        "Définition du barycentre de 3 points : a*GA + b*GB + c*GC = 0 (avec a+b+c != 0)",
        "Définition du barycentre de 4 points : a*GA + b*GB + c*GC + d*GD = 0 (avec a+b+c+d != 0)",
        "Relation vectorielle fondamentale : AG = (b/(a+b))*AB (2 points) ; AG = (b/(a+b+c))*AB + (c/(a+b+c))*AC (3 points)",
        "Propriété de réduction vectorielle de Leibniz : pour tout point M du plan, a*MA + b*MB + c*MC = (a+b+c)*MG",
        "Homogénéité du barycentre : bar{(A, ka), (B, kb), (C, kc)} = bar{(A, a), (B, b), (C, c)} pour tout k != 0",
        "Isobarycentre : barycentre à coefficients égaux non nuls (milieu pour 2 points, centre de gravité du triangle pour 3 points avec GA+GB+GC=0)",
        "Théorème du barycentre partiel (associativité) : on peut remplacer un sous-ensemble de points par leur barycentre partiel affecté de la somme de leurs coefficients",
        "Coordonnées cartésiennes du barycentre dans un repère (O, i, j)",
        "Lignes de niveau d'une fonction f : ensemble des points M du plan tels que f(M) = k",
        "Lignes de niveau de M |-> a*MA^2 + b*MB^2 (avec a+b != 0) : réduction (a+b)MG^2 + a*GA^2 + b*GB^2 = k (cercle, point ou ensemble vide)",
        "Lignes de niveau de M |-> MA / MB = k (avec k > 0) : si k = 1, médiatrice de [AB] ; si k != 1, cercle de diamètre [G1 G2] où G1 = bar{(A,1), (B,k)} et G2 = bar{(A,1), (B,-k)}"
      ],
      formulas: [
        "Définition barycentre 2 points : a*GA + b*GB = 0 <=> AG = (b / (a + b)) * AB",
        "Définition barycentre 3 points : a*GA + b*GB + c*GC = 0 <=> AG = (b/(a+b+c))*AB + (c/(a+b+c))*AC",
        "Réduction vectorielle : pour tout point M, a*MA + b*MB + c*MC = (a + b + c)*MG",
        "Coordonnées de G : xG = (a*xA + b*xB + c*xC) / (a + b + c) ; yG = (a*yA + b*yB + c*yC) / (a + b + c)",
        "Théorème du barycentre partiel : si G = bar{(A, a), (B, b), (C, c)} et H = bar{(A, a), (B, b)} avec a+b != 0, alors G = bar{(H, a+b), (C, c)}",
        "Centre de gravité G de ABC : GA + GB + GC = 0, AG = (2/3)AA' où A' est le milieu de [BC]",
        "Réduction quadratique scalaire : a*MA^2 + b*MB^2 = (a + b)MG^2 + a*GA^2 + b*GB^2 = (a + b)MG^2 + (ab/(a+b))AB^2",
        "Ligne de niveau a*MA^2 + b*MB^2 = k : MG^2 = (k - f(G)) / (a + b). Si > 0 : cercle C(G, R) ; si = 0 : {G} ; si < 0 : ensemble vide",
        "Cercle d'Apollonius : MA / MB = k (k > 0, k != 1) <=> (MA - k*MB) . (MA + k*MB) = 0 <=> MG1 . MG2 = 0 <=> cercle de diamètre [G1 G2]"
      ],
      methods: [
        "Construire le barycentre de 2 points : exprimer AG = (b/(a+b))*AB et graduer le segment [AB].",
        "Construire le barycentre de 3 points : méthode 1 via l'égalité vectorielle AG = (b/S)AB + (c/S)AC ; méthode 2 via le barycentre partiel : poser H = bar{(A, a), (B, b)}, placer H sur (AB), puis placer G sur (HC) comme bar{(H, a+b), (C, c)}.",
        "Simplifier une norme vectorielle ||a*MA + b*MB + c*MC|| : introduire le barycentre G pour obtenir |a+b+c|*MG.",
        "Déterminer le lieu des points M vérifiant ||a*MA + b*MB|| = k : 1. Introduire le barycentre G : |a+b|*MG = k ; 2. Écrire MG = k/|a+b| ; 3. Conclure : cercle de centre G et de rayon R = k/|a+b|.",
        "Déterminer la ligne de niveau a*MA^2 + b*MB^2 = k : 1. Vérifier a+b != 0 et introduire G ; 2. Développer f(M) = (a+b)MG^2 + f(G) ; 3. Isoler MG^2 = [k - f(G)]/(a+b) ; 4. Conclure selon le signe.",
        "Déterminer la ligne de niveau MA/MB = k (k != 1) : 1. Écrire MA^2 - k^2 MB^2 = 0 ; 2. Factoriser via produit scalaire (MA - k*MB).(MA + k*MB) = 0 ; 3. Introduire G1 = bar{(A, 1), (B, k)} et G2 = bar{(A, 1), (B, -k)} ; 4. Obtenir MG1 . MG2 = 0 ; 5. Conclure : cercle de diamètre [G1 G2]."
      ]
    },
    {
      id: "spm_ch_transformations",
      lessonNumber: 6,
      tome: 2,
      title: "Transformations du plan (Composées d'homothéties, rotations et symétries)",
      pages: [184, 205],
      topics: [
        "Translations : définition, propriété caractéristique M'N' = MN, composée t_u o t_v = t_{u+v}, réciproque (t_u)^-1 = t_{-u}",
        "Symétries orthogonales S_D : définition, S_D o S_D = Id",
        "Composée de deux symétries orthogonales d'axes parallèles (D) et (D') : translation de vecteur 2*AA' où A in D et A' projeté de A sur D'",
        "Composée de deux symétries orthogonales d'axes sécants en O d'angle theta : rotation de centre O et d'angle 2*theta",
        "Décomposition d'une translation ou d'une rotation en produit de deux réflexions",
        "Rotations : définition r(O, theta), propriété caractéristique M'N' = MN et (MN, M'N') = theta [2pi]",
        "Composée de deux rotations de même centre : r(O, theta') o r(O, theta) = r(O, theta + theta')",
        "Composée de deux rotations de centres distincts : si theta + theta' != 2k*pi, c'est une rotation d'angle theta + theta' ; si theta + theta' = 2k*pi, c'est une translation",
        "Homothéties : définition h(O, k)(M) = M' <=> OM' = k*OM, propriété caractéristique M'N' = k*MN",
        "Composée de deux homothéties de même centre : h(O, k') o h(O, k) = h(O, k*k')",
        "Composée de deux homothéties de centres distincts O et O' : si k*k' != 1, c'est une homothétie de rapport k*k' dont le centre est aligné avec O et O' ; si k*k' = 1, c'est une translation de vecteur colinéaire à OO'",
        "Applications géométriques : recherche de lieux géométriques, constructions de carrés inscrits, démonstrations d'alignements et de concours"
      ],
      formulas: [
        "Propriété caractéristique translation : M'N' = MN",
        "Composée translations : t_u o t_v = t_{u+v} = t_v o t_u",
        "Symétries parallèles : S_{D'} o S_D = t_{2*AA'} (avec D // D', A in D, A' in D', (AA') perp D)",
        "Symétries sécantes : S_{D'} o S_D = r(O, 2*theta) où O = D inter D' et theta = (u, u') [pi]",
        "Rotations même centre : r(O, theta') o r(O, theta) = r(O, theta + theta')",
        "Rotations centres distincts : r(O', theta') o r(O, theta) = r(Omega, theta + theta') si theta+theta' != 2k*pi ; translation si theta+theta' = 2k*pi",
        "Homothétie : OM' = k*OM <=> M'N' = k*MN ; coordonnée : x' - x0 = k(x - x0), y' - y0 = k(y - y0)",
        "Homothéties même centre : h(O, k') o h(O, k) = h(O, k*k')",
        "Homothéties centres distincts : h(O', k') o h(O, k) = h(Omega, k*k') si k*k' != 1 ; translation si k*k' = 1"
      ],
      methods: [
        "Déterminer la nature et les éléments d'une composée S_D' o S_D : 1. Vérifier la position relative de D et D' ; 2. Si D // D', c'est une translation de vecteur 2*AA' (où A in D et A' projeté orthogonal de A sur D') ; 3. Si D et D' sont sécantes en O, c'est une rotation de centre O et d'angle 2*(u, u').",
        "Déterminer la nature d'une composée de deux homothéties h(O, k) et h(O', k') : 1. Calculer le produit des rapports K = k*k' ; 2. Si K = 1, c'est une translation ; 3. Si K != 1, c'est une homothétie de rapport K ; 4. Pour trouver son centre Omega, chercher le point invariant h(O', k')[h(O, k)(Omega)] = Omega.",
        "Construire l'image d'une figure par homothétie ou rotation : transformer les points clés (centres, sommets, vecteurs directeurs), les droites restent des droites (parallèles par homothétie), les cercles deviennent des cercles de rayon |k|*R.",
        "Trouver un lieu géométrique par transformation : exprimer le point variable M' comme image d'un point M décrivant une courbe connue (C) par une transformation fixe T (translation, rotation, homothétie) ; le lieu de M' est l'image de (C) par T."
      ]
    },
    {
      id: "spm_ch_geom_analytique_plan",
      lessonNumber: 7,
      tome: 2,
      title: "Géométrie analytique du plan (Vecteurs normaux et Distances)",
      pages: [224, 229],
      topics: [
        "Repère orthonormé (O, i, j) du plan",
        "Vecteur normal n à une droite (D) : vecteur non nul orthogonal à tout vecteur directeur de (D)",
        "Équation cartésienne d'une droite de vecteur normal n(a, b) : ax + by + c = 0",
        "Caractérisation d'une droite passant par A(x0, y0) de vecteur normal n(a, b) : a(x - x0) + b(y - y0) = 0",
        "Parallélisme et orthogonalité de deux droites via leurs vecteurs normaux : (D) // (D') <=> n et n' colinéaires (ab' - a'b = 0) ; (D) perp (D') <=> n . n' = 0 (aa' + bb' = 0)",
        "Distance d'un point M(x0, y0) à une droite (D) : ax + by + c = 0 : d(M, D) = |ax0 + by0 + c| / sqrt(a^2 + b^2)",
        "Applications : équation des hauteurs, équation des médiatrices, centre du cercle circonscrit, position relative de deux droites"
      ],
      formulas: [
        "Vecteur normal à (D) : ax + by + c = 0 est n(a, b) ; vecteur directeur u(-b, a)",
        "Équation avec point et vecteur normal : a(x - x0) + b(y - y0) = 0",
        "Critère de parallélisme : (D) // (D') <=> ab' - a'b = 0",
        "Critère de perpendicularité : (D) perp (D') <=> aa' + bb' = 0",
        "Distance d'un point à une droite : d(M, (D)) = |a*x0 + b*y0 + c| / sqrt(a^2 + b^2)",
        "Équation de médiatrice de [AB] : (x - xA)^2 + (y - yA)^2 = (x - xB)^2 + (y - yB)^2 <=> AM^2 = BM^2"
      ],
      methods: [
        "Trouver une équation de droite connaissant un point A(x0, y0) et un vecteur normal n(a, b) : écrire a(x - x0) + b(y - y0) = 0 puis développer sous la forme ax + by + c = 0.",
        "Trouver l'équation de la hauteur issue de A dans un triangle ABC : la droite passe par A et a pour vecteur normal BC(xC - xB, yC - yB) ; écrire (xC - xB)(x - xA) + (yC - yB)(y - yA) = 0.",
        "Calculer la distance d'un point à une droite : appliquer la formule d(A, D) = |a*xA + b*yA + c| / sqrt(a^2 + b^2).",
        "Déterminer les coordonnées du projeté orthogonal H d'un point A sur une droite (D) : 1. Écrire une équation de la perpendiculaire (D') à (D) passant par A ; 2. Résoudre le système linéaire 2x2 formé par les équations de (D) et (D') pour trouver H = (D) inter (D')."
      ]
    },
    {
      id: "spm_ch_statistiques_doubles",
      lessonNumber: 8,
      tome: 1,
      title: "Statistiques à deux variables et Séries groupées en classes",
      pages: [137, 150],
      topics: [
        "Séries statistiques à un caractère regroupé en classes : amplitude a_i = x_{i+1} - x_i, centre c_i = (x_i + x_{i+1})/2",
        "Densité d_i = n_i / a_i d'une classe ; classe modale = classe de densité maximale",
        "Histogramme à amplitudes inégales (largeur = amplitude, hauteur = densité, aire = effectif/fréquence)",
        "Médiane et quartiles Q1, Q3 par interpolation linéaire sur les effectifs ou fréquences cumulés croissants",
        "Écart absolu moyen : e_m = (1/N) * sum(n_i * |c_i - x_bar|)",
        "Variance V(X) = (1/N)*sum(n_i * c_i^2) - (x_bar)^2 et écart-type sigma = sqrt(V)",
        "Séries statistiques doubles (à deux caractères X et Y) : tableau à double entrée, séries marginales de X et de Y",
        "Nuage de points M_i(x_i, y_i) dans un repère orthogonal et point moyen G(x_bar, y_bar)",
        "Covariance Cov(X, Y) = (1/N)*sum((x_i - x_bar)(y_i - y_bar)) = (1/N)*sum(x_i*y_i) - x_bar*y_bar",
        "Ajustement linéaire par la méthode des moindres carrés : droite de régression de Y en X d'équation y = ax + b",
        "Pente a = Cov(X, Y) / V(X) et ordonnée à l'origine b = y_bar - a*x_bar (la droite passe par le point moyen G)",
        "Coefficient de corrélation linéaire r = Cov(X, Y) / [sqrt(V(X)) * sqrt(V(Y))]",
        "Interprétation du coefficient r : |r| <= 1 ; ajustement linéaire justifié et forte corrélation si |r| > 0.8",
        "Prévisions et estimations par interpolation/extrapolation avec la droite de régression"
      ],
      formulas: [
        "Centre de classe : c_i = (borne_inf + borne_sup) / 2 ; amplitude a_i = borne_sup - borne_inf",
        "Densité de classe : d_i = n_i / a_i",
        "Moyenne : x_bar = (1/N) * sum(n_i * c_i)",
        "Interpolation linéaire médiane : (Me - x_inf) / (x_sup - x_inf) = (N/2 - Ecc_inf) / (Ecc_sup - Ecc_inf)",
        "Interpolation quartile Q1 : (Q1 - x_inf) / (x_sup - x_inf) = (N/4 - Ecc_inf) / (Ecc_sup - Ecc_inf)",
        "Interpolation quartile Q3 : (Q3 - x_inf) / (x_sup - x_inf) = (3N/4 - Ecc_inf) / (Ecc_sup - Ecc_inf)",
        "Écart absolu moyen : e_m = (1/N) * sum(n_i * |c_i - x_bar|)",
        "Variance : V(X) = (1/N)*sum(n_i * c_i^2) - (x_bar)^2 ; écart-type sigma = sqrt(V(X))",
        "Point moyen du nuage : G(x_bar, y_bar)",
        "Covariance : Cov(X, Y) = (1/N)*sum(x_i * y_i) - x_bar * y_bar",
        "Droite de régression de Y en X : y = ax + b avec a = Cov(X, Y) / V(X) et b = y_bar - a * x_bar",
        "Coefficient de corrélation linéaire : r = Cov(X, Y) / sqrt(V(X) * V(Y)) = Cov(X, Y) / (sigma_X * sigma_Y)",
        "Propriété de r : -1 <= r <= 1 ; corrélation excellente si |r| >= 0.9, bonne si |r| > 0.8"
      ],
      methods: [
        "Calculer la médiane par interpolation linéaire : 1. Calculer N/2 ; 2. Repérer dans le tableau des ECC la classe médiane [x_inf, x_sup[ ; 3. Poser la proportion (Me - x_inf)/(x_sup - x_inf) = (N/2 - ECC_inf)/(ECC_sup - ECC_inf) ; 4. Isoler et calculer Me.",
        "Calculer la covariance Cov(X, Y) : 1. Calculer x_bar et y_bar ; 2. Dresser le tableau des produits x_i*y_i ou n_ij*x_i*y_j ; 3. Calculer la moyenne des produits ; 4. Soustraire le produit des moyennes : Cov = Moy(XY) - x_bar*y_bar.",
        "Déterminer la droite de régression de Y en X par les moindres carrés : 1. Calculer Cov(X, Y) et V(X) ; 2. Calculer le coefficient directeur a = Cov(X, Y) / V(X) ; 3. Calculer l'ordonnée à l'origine b = y_bar - a*x_bar ; 4. Écrire y = ax + b.",
        "Calculer et interpréter le coefficient de corrélation linéaire r : 1. Calculer V(X) et V(Y), puis sigma_X et sigma_Y ; 2. Poser r = Cov(X, Y) / (sigma_X * sigma_Y) ; 3. Vérifier que |r| <= 1 ; 4. Si |r| > 0.8, conclure qu'un ajustement linéaire par la droite des moindres carrés est pertinent.",
        "Faire une prévision : remplacer x par la valeur souhaitée dans l'équation de la droite y = ax + b pour estimer la valeur correspondante de y."
      ]
    },
    {
      id: "spm_ch_ortho_espace",
      lessonNumber: 9,
      tome: 2,
      title: "Orthogonalité dans l'espace (Droites, Plans perpendiculaires, Projections)",
      pages: [205, 224],
      topics: [
        "Droites orthogonales dans l'espace : deux droites sont orthogonales si leurs parallèles menées par un point quelconque sont perpendiculaires",
        "Propriétés : si (D) perp (D') et (D) // (Delta), alors (Delta) perp (D')",
        "Droite et plan orthogonaux : une droite est orthogonale à un plan ssi elle est orthogonale à deux droites sécantes de ce plan",
        "Théorème fondamental : si une droite (D) est orthogonale à un plan (P), elle est orthogonale à TOUTE droite de (P)",
        "Plans perpendiculaires : deux plans sont perpendiculaires si l'un contient une droite orthogonale à l'autre",
        "Propriété des plans perpendiculaires sécants : si (P) perp (Q) et (P) inter (Q) = (D), toute droite de (P) perpendiculaire à (D) est orthogonale à (Q)",
        "Projection orthogonale sur un plan : image d'un point M (point d'intersection du plan avec la perpendiculaire menée de M), image d'un segment [AB] (segment [A'B'])",
        "Conservation du milieu : le projeté orthogonal du milieu d'un segment est le milieu du segment projeté",
        "Configurations de l'espace : cube, tétraèdre régulier, tétraèdre trirectangle (arêtes issues d'un sommet perpendiculaires 2 à 2, hauteur = orthocentre de la base)"
      ],
      formulas: [
        "(D) perp (D') <=> parallèles par un point O sont perpendiculaires dans leur plan",
        "(D) perp (P) <=> (D) perp (D1) ET (D) perp (D2) où (D1) et (D2) sont deux droites sécantes de (P)",
        "(D) perp (P) et (Delta) in (P) => (D) perp (Delta)",
        "(P) perp (Q) <=> il existe une droite (D) in (P) telle que (D) perp (Q)",
        "(D) perp (P) et (D') // (D) => (D') perp (P)",
        "(P) // (P') et (D) perp (P) => (D) perp (P')",
        "Projection orthogonale : p(M) = M <=> M in (P) ; (M p(M)) perp (P)",
        "Volume d'un tétraèdre / pyramide : V = (1/3) * Aire_base * Hauteur"
      ],
      methods: [
        "Démontrer que deux droites (D) et (Delta) sont orthogonales dans l'espace : 1. Trouver un plan (P) contenant l'une des droites (par ex. Delta) ; 2. Démontrer que (D) est orthogonale à deux droites sécantes de (P) (donc (D) perp (P)) ; 3. En déduire que (D) est orthogonale à toute droite de (P), en particulier à (Delta).",
        "Démontrer qu'une droite (D) est orthogonale à un plan (P) : identifier deux droites sécantes (d1) et (d2) dans (P), et démontrer séparément que (D) perp (d1) et (D) perp (d2).",
        "Démontrer que deux plans (P) et (Q) sont perpendiculaires : identifier une droite (D) incluse dans (P) et prouver que (D) est orthogonale au plan (Q).",
        "Déterminer le projeté orthogonal d'un point sur un plan : tracer ou identifier la droite passant par ce point et orthogonale au plan ; son intersection avec le plan est le projeté cherché."
      ]
    },
    {
      id: "spm_ch_geom_analytique_espace",
      lessonNumber: 10,
      tome: 2,
      title: "Géométrie analytique de l'espace (Plans, Droites, Distances et Positions relatives)",
      pages: [240, 248],
      topics: [
        "Repère orthonormé (O, i, j, k) de l'espace",
        "Vecteur normal n(a, b, c) à un plan (P) : vecteur non nul orthogonal à deux vecteurs directeurs non colinéaires de (P)",
        "Équation cartésienne d'un plan défini par A(x0, y0, z0) et vecteur normal n(a, b, c) : a(x - x0) + b(y - y0) + c(z - z0) = 0",
        "Forme générale ax + by + cz + d = 0 d'une équation cartésienne de plan",
        "Distance d'un point A(x0, y0, z0) à un plan (P) : ax + by + cz + d = 0 : d(A, P) = |a*x0 + b*y0 + c*z0 + d| / sqrt(a^2 + b^2 + c^2)",
        "Représentation paramétrique d'une droite de l'espace passant par A(x0, y0, z0) de vecteur directeur u(a, b, c) : x = x0 + at, y = y0 + bt, z = z0 + ct (t in R)",
        "Positions relatives de deux plans (P) et (P') : parallèles si leurs vecteurs normaux n et n' sont colinéaires ; sécants suivant une droite si n et n' ne sont pas colinéaires",
        "Positions relatives d'une droite (D) et d'un plan (P) : (D) // (P) si u . n = 0 ; sécants en un point unique si u . n != 0",
        "Positions relatives de deux droites dans l'espace : coplanaires (parallèles ou sécantes) ou non coplanaires (gauchères)"
      ],
      formulas: [
        "Vecteur normal au plan (P) : ax + by + cz + d = 0 est n(a, b, c)",
        "Équation cartésienne : a(x - x0) + b(y - y0) + c(z - z0) = 0",
        "Distance d'un point au plan : d(A, (P)) = |a*xA + b*yA + c*zA + d| / sqrt(a^2 + b^2 + c^2)",
        "Représentation paramétrique de droite : { x = x0 + at, y = y0 + bt, z = z0 + ct } avec t in R",
        "Plans parallèles : n et n' colinéaires <=> (a, b, c) = k*(a', b', c')",
        "Plans perpendiculaires : n . n' = 0 <=> aa' + bb' + cc' = 0",
        "Droite // Plan : u . n = 0 <=> a*u1 + b*u2 + c*u3 = 0",
        "Droite perpendiculaire au Plan : u et n colinéaires",
        "Intersection Droite-Plan : injecter x(t), y(t), z(t) dans l'équation cartésienne du plan pour déterminer le paramètre t"
      ],
      methods: [
        "Déterminer une équation cartésienne d'un plan défini par A(x0, y0, z0) et un vecteur normal n(a, b, c) : 1. Écrire a(x - x0) + b(y - y0) + c(z - z0) = 0 ; 2. Développer sous la forme ax + by + cz + d = 0.",
        "Calculer la distance d'un point A à un plan (P) : appliquer directement d(A, P) = |a*xA + b*yA + c*zA + d| / sqrt(a^2 + b^2 + c^2).",
        "Déterminer une représentation paramétrique d'une droite passant par A(x0, y0, z0) et de vecteur directeur u(a, b, c) : écrire le système x = x0 + at, y = y0 + bt, z = z0 + ct pour t in R.",
        "Trouver l'intersection d'une droite (D) et d'un plan (P) : 1. Remplacer x, y, z dans l'équation du plan par leurs expressions paramétriques en t ; 2. Résoudre l'équation du 1er degré en t ; 3. Réinjecter la valeur de t dans la représentation paramétrique de (D) pour obtenir les coordonnées du point d'intersection.",
        "Étudier la position relative de deux droites de l'espace : 1. Vérifier si leurs vecteurs directeurs u et v sont colinéaires (si oui : parallèles) ; 2. Si non, poser le système d'égalités x(t) = x'(t'), y(t) = y'(t'), z(t) = z'(t') ; 3. Si le système admet une solution unique, les droites sont sécantes ; s'il n'admet aucune solution, les droites sont non coplanaires."
      ]
    }
  ],
  runtimePolicy: {
    primarySource: "knowledge_base_local",
    apiRequired: false,
    apiRole: "fallback_only",
    resolutionOrder: [
      "detect_chapter",
      "retrieve_relevant_method_and_formula",
      "solve",
      "verify",
      "generate_explanation"
    ]
  }
} as const;

/**
 * Normalisation de texte pour recherche sémantique locale robuste
 */
function normalizeQuery(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(token => token.length > 2);
}

/**
 * Fonction de recherche du/des chapitre(s) pertinent(s) pour un énoncé donné
 */
export function findMaths1ereCChapters(query: string, limit = 3): Chapter[] {
  const queryTokens = normalizeQuery(query);

  if (queryTokens.length === 0) {
    return maths1ereCKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[];
  }

  const scored = maths1ereCKnowledgeBase.chapters.map(chapter => {
    let score = 0;
    const titleTokens = normalizeQuery(chapter.title);
    const topicsTokens = chapter.topics.flatMap(normalizeQuery);
    const formulasTokens = chapter.formulas.flatMap(normalizeQuery);
    const methodsTokens = chapter.methods.flatMap(normalizeQuery);

    for (const token of queryTokens) {
      if (titleTokens.includes(token)) score += 12;
      if (topicsTokens.includes(token)) score += 4;
      if (formulasTokens.includes(token)) score += 3;
      if (methodsTokens.includes(token)) score += 3;
    }

    return { chapter, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const matched = scored
    .filter(item => item.score > 0)
    .slice(0, limit)
    .map(item => item.chapter as unknown as Chapter);

  return matched.length > 0
    ? matched
    : (maths1ereCKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[]);
}

/**
 * Construit le contexte texte à donner au solveur (leçon + notions + formules + méthodes)
 */
export function buildMaths1ereCContext(query: string): string {
  const chapters = findMaths1ereCChapters(query, 2);
  if (!chapters || chapters.length === 0) {
    return "";
  }

  const sections = chapters.map(ch => {
    const header = `### CHAPITRE ${ch.lessonNumber ?? ch.id} (TOME ${ch.tome ?? 1}) : ${ch.title.toUpperCase()} (Niveau : ${maths1ereCKnowledgeBase.level})\nSource : ${maths1ereCKnowledgeBase.source}`;
    const topics = `#### NOTIONS DU COURS :\n${ch.topics.map(t => `- ${t}`).join("\n")}`;
    const formulas = `#### FORMULES ET THÉORÈMES :\n${ch.formulas.map(f => `- ${f}`).join("\n")}`;
    const methods = `#### MÉTHODES DE RÉSOLUTION PAS À PAS :\n${ch.methods.map((m, idx) => `${idx + 1}. ${m}`).join("\n")}`;

    return `${header}\n\n${topics}\n\n${formulas}\n\n${methods}`;
  });

  return `=== BASE DE CONNAISSANCES OFFICIELLE MATHÉMATIQUES PREMIÈRE C / 3ÈME MATH (LE PROF) ===\n\n${sections.join("\n\n---\n\n")}\n\n=== FIN DU CONTEXTE OFFICIEL ===`;
}

// Alias de rétrocompatibilité et conformité avec les conventions LE PROF
export const maths1ereMathsKnowledgeBase = maths1ereCKnowledgeBase;
export const findMaths1ereMathsChapters = findMaths1ereCChapters;
export const buildMaths1ereMathsContext = buildMaths1ereCContext;
