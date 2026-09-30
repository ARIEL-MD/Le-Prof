/**
 * LE PROF — BASE DE CONNAISSANCES OFFICIELLE : MATHÉMATIQUES SECONDE C
 * Source : Mon École à la Maison — Direction des Écoles, Lycées et Collèges / MENA Côte d'Ivoire
 * Conforme au programme officiel ivoirien de Seconde C (Approche Par Compétences - APC)
 * 
 * Ce fichier est 100% autonome (aucune dépendance IA, aucun appel réseau).
 * Il fournit au moteur local de LE PROF la totalité des concepts, formules exactes,
 * et algorithmes de résolution pas à pas pour les 14 leçons officielles.
 */

export type Chapter = {
  id: string;                // ex: "ch1"
  lessonNumber?: number;
  title: string;             // titre exact du chapitre
  pages?: [number, number];  // si connu
  topics: string[];          // notions abordées, en langage clair
  formulas: string[];        // toutes les formules/théorèmes du chapitre
  methods: string[];         // méthodes de résolution étape par étape
};

export const maths2ndeCKnowledgeBase = {
  name: "LE PROF — Knowledge Base Mathématiques 2nde C",
  version: "1.0.0",
  source: "Mon École à la Maison — Ministère de l'Éducation Nationale et de l'Alphabétisation (Côte d'Ivoire)",
  level: "Seconde C",
  chapters: [
    // -------------------------------------------------------------------------
    // LEÇON 1 : VECTEURS ET POINTS DU PLAN
    // -------------------------------------------------------------------------
    {
      id: "ch1",
      lessonNumber: 1,
      title: "Vecteurs et points du plan",
      pages: [1, 22],
      topics: [
        "Vecteur défini par un couple de points (A, B) : direction de la droite (AB), sens de A vers B, longueur du segment [AB]",
        "Plan vectoriel V : ensemble de tous les vecteurs du plan ; infinité de représentants d'un vecteur",
        "Propriété fondamentale : pour tout point O et tout vecteur u de V, il existe un unique point M tel que vecteur(OM) = u",
        "Norme d'un vecteur : ||u|| = AB où (A, B) est un représentant de u ; ||u|| >= 0 ; ||u|| = 0 <=> u = vecteur(0) ; ||-u|| = ||u|| ; inégalité triangulaire ||u + v|| <= ||u|| + ||v||",
        "Vecteur unitaire : tout vecteur de norme égale à 1 ; si v est non nul, v / ||v|| est un vecteur unitaire",
        "Somme de deux vecteurs et relation de Chasles : vecteur(AB) + vecteur(BC) = vecteur(AC)",
        "Multiplication d'un vecteur par un réel lambda : direction identique, sens identique si lambda > 0 et contraire si lambda < 0, norme |lambda| * ||u|| ; lambda * u = vecteur(0) <=> lambda = 0 ou u = vecteur(0)",
        "Propriétés algébriques du calcul vectoriel : commutativité, associativité, élément neutre vecteur(0), opposé -u, distributivités (lambda + mu)u = lambda*u + mu*u, lambda(u + v) = lambda*u + lambda*v, lambda(mu*u) = (lambda*mu)u, 1*u = u",
        "Combinaison linéaire : tout vecteur de la forme lambda*u + mu*v avec lambda, mu réels",
        "Colinéarité de deux vecteurs : u et v colinéaires <=> l'un d'eux est nul ou ils ont même direction <=> il existe lambda réel tel que v = lambda*u (ou u = lambda*v)",
        "Caractérisation de l'indépendance linéaire : u et v non colinéaires <=> (lambda*u + mu*v = vecteur(0) => lambda = 0 et mu = 0)",
        "Caractérisation de la colinéarité par combinaison linéaire : u et v colinéaires <=> il existe une combinaison linéaire nulle sans que les coefficients soient tous nuls",
        "Caractérisation vectorielle du centre de gravité d'un triangle ABC : unique point G tel que vecteur(GA) + vecteur(GB) + vecteur(GC) = vecteur(0)",
        "Vecteur directeur d'une droite (D) : tout vecteur non nul u ayant la même direction que (D) ; k*u (k != 0) est aussi vecteur directeur",
        "Mesure algébrique sur un axe orienté (D) de repère (O, i) avec ||i|| = 1 : vecteur(AB) = AB_barre * i ; |AB_barre| = AB ; BA_barre = -AB_barre ; AB_barre = 0 <=> A = B ; Chasles : AB_barre + BC_barre = AC_barre",
        "Base du plan vectoriel V : tout couple (i, j) de vecteurs non colinéaires ; base orthogonale si i orthogonal à j ; base orthonormée si i orthogonal à j et ||i|| = ||j|| = 1",
        "Coordonnées d'un vecteur dans une base (i, j) : unique couple (x, y) tel que u = x*i + y*j, noté u(x; y) ; somme (u + u')(x + x'; y + y') ; produit (lambda*u)(lambda*x; lambda*y)",
        "Expression de la norme dans une base orthonormée : ||u|| = sqrt(x^2 + y^2)",
        "Déterminant de deux vecteurs dans une base : det(u, u') = x*y' - y*x' ; critère de colinéarité det(u, u') = 0 ; critère de base det(u, u') != 0",
        "Repère du plan (O, I, J) ou (O, i, j) : coordonnées du vecteur AB(xB - xA ; yB - yA) ; coordonnées du milieu M de [AB] : ((xA+xB)/2 ; (yA+yB)/2) ; coordonnées du centre de gravité G de ABC : ((xA+xB+xC)/3 ; (yA+yB+yC)/3)"
      ],
      formulas: [
        "||u|| = AB où (A, B) est un représentant du vecteur u",
        "||u|| = 0 <=> u = vecteur(0)",
        "||-u|| = ||u||",
        "||u + v|| <= ||u|| + ||v|| (Inégalité triangulaire)",
        "u_unitaire = v / ||v|| pour tout vecteur non nul v",
        "vecteur(AB) + vecteur(BC) = vecteur(AC) (Relation de Chasles)",
        "lambda * u = vecteur(0) <=> lambda = 0 ou u = vecteur(0)",
        "u et v colinéaires <=> v = lambda * u (lambda in R) ou u = lambda * v",
        "u et v non colinéaires <=> (lambda*u + mu*v = vecteur(0) => lambda = 0 et mu = 0)",
        "vecteur(GA) + vecteur(GB) + vecteur(GC) = vecteur(0) (Centre de gravité de ABC)",
        "vecteur(AB) = AB_barre * i (Mesure algébrique sur axe orienté par le vecteur unitaire i)",
        "|AB_barre| = AB",
        "BA_barre = -AB_barre",
        "AB_barre + BC_barre = AC_barre (Relation de Chasles pour mesures algébriques de points alignés)",
        "AC_barre = lambda * AB_barre <=> vecteur(AC) = lambda * vecteur(AB)",
        "u = x*i + y*j <=> u(x; y) dans la base (i, j)",
        "(u + u')(x + x'; y + y')",
        "(lambda * u)(lambda * x; lambda * y)",
        "||u|| = sqrt(x^2 + y^2) (dans une base orthonormée)",
        "det(u, u') = |x  x'| / |y  y'| = x*y' - y*x'",
        "u et u' colinéaires <=> det(u, u') = 0",
        "(u, u') constitue une base du plan V <=> det(u, u') != 0",
        "vecteur(AB)(xB - xA ; yB - yA)",
        "xM = (xA + xB) / 2 et yM = (yA + yB) / 2 (Milieu M de [AB])",
        "xG = (xA + xB + xC) / 3 et yG = (yA + yB + yC) / 3 (Centre de gravité G de ABC)"
      ],
      methods: [
        "Calculer les coordonnées d'un vecteur dans un repère : 1. Relever les coordonnées des points A(xA, yA) et B(xB, yB). 2. Appliquer la formule vecteur(AB)(xB - xA ; yB - yA).",
        "Démontrer la colinéarité de deux vecteurs par le déterminant : 1. Calculer ou identifier les composantes de u(x, y) et v(x', y') dans la base commune. 2. Calculer det(u, v) = x*y' - y*x'. 3. Si le résultat vaut 0, conclure que les vecteurs u et v sont colinéaires ; sinon ils ne le sont pas.",
        "Démontrer que trois points A, B, C sont alignés : 1. Déterminer les coordonnées des vecteurs vecteur(AB) et vecteur(AC). 2. Calculer det(vecteur(AB), vecteur(AC)) = (xB - xA)(yC - yA) - (yB - yA)(xC - xA). 3. Conclure que A, B, C sont alignés si et seulement si ce déterminant est nul.",
        "Démontrer que deux droites (AB) et (CD) sont parallèles : 1. Déterminer les vecteurs directeurs u = vecteur(AB) et v = vecteur(CD). 2. Calculer det(u, v). 3. Si det(u, v) = 0, conclure que les droites (AB) et (CD) sont parallèles.",
        "Déterminer les coordonnées du centre de gravité d'un triangle : 1. Sommer les abscisses des trois sommets et diviser par 3 : xG = (xA + xB + xC)/3. 2. Sommer les ordonnées des trois sommets et diviser par 3 : yG = (yA + yB + yC)/3.",
        "Déterminer si un couple de vecteurs forme une base du plan : 1. Calculer le déterminant det(u, v) = x*y' - y*x'. 2. Si det(u, v) != 0, les vecteurs sont non colinéaires et forment une base de V ; si det = 0, ils sont colinéaires et ne forment pas de base."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 2 : ENSEMBLE DES NOMBRES RÉELS
    // -------------------------------------------------------------------------
    {
      id: "ch2",
      lessonNumber: 2,
      title: "Ensemble des nombres réels",
      pages: [1, 15],
      topics: [
        "Nombres rationnels : nombre pouvant s'écrire sous la forme a/b avec a in Z et b in Z*",
        "Nombres irrationnels : nombre réel qui n'est pas rationnel (ex: sqrt(2), sqrt(3), pi, sqrt(pi - 1))",
        "Raisonnement par l'absurde : supposer la négation non(P), déduire une contradiction logique, conclure que la proposition P est vraie (démonstration de l'irrationalité de sqrt(2) et sqrt(2) - 1)",
        "Ensemble des nombres réels R : réunion des nombres rationnels et irrationnels ; chaîne des inclusions N subset Z subset D subset Q subset R",
        "Intervalles de R : notations d'intervalles bornés et non bornés ([a; +inf[, ]-inf; a], ]-inf; +inf[)",
        "Techniques de comparaison de deux réels : étude du signe de la différence A - B, comparaison à un réel intermédiaire, comparaison des carrés ou racines carrées pour des réels positifs, comparaison des inverses pour des réels strictement positifs de même signe",
        "Ordre et opérations dans R : compatibilité avec l'addition et la multiplication par un réel strictement positif ou négatif ; multiplication membre à membre d'inégalités à termes positifs",
        "Ensemble majoré, minorant, majorant, ensemble borné : M majorant de E <=> pour tout x in E, x <= M ; m minorant de E <=> pour tout x in E, x >= m ; ensemble borné <=> à la fois minoré et majoré",
        "Maximum et minimum d'un sous-ensemble de R : plus grand élément (s'il existe, plus petit des majorants) ; plus petit élément (s'il existe, plus grand des minorants)",
        "Valeur absolue d'un nombre réel : distance à zéro |a| ; propriétés fondamentales (|x| >= 0, |-x| = |x|, |x| = |y| <=> x = y ou x = -y, sqrt(x^2) = |x|, |xy| = |x|*|y|, |x/y| = |x|/|y|, inégalité triangulaire |x + y| <= |x| + |y|)",
        "Distance de deux nombres réels : d(x, y) = |x - y| représentant la longueur du segment [MN] sur une droite graduée",
        "Résolution algébrique et graphique d'équations avec valeur absolue : |x - a| = r (r > 0) a pour ensemble solution {a - r ; a + r}",
        "Résolution algébrique et graphique d'inéquations avec valeur absolue : |x - a| <= r (r > 0) <=> a - r <= x <= a + r <=> ensemble solution [a - r ; a + r]",
        "Calculs approchés : valeur approchée y de x à epsilon près (|x - y| <= epsilon) ; incertitude epsilon ; approximations décimales d'ordre m par défaut et par excès (à 10^-m près) ; arrondi d'ordre m"
      ],
      formulas: [
        "q in Q <=> q = a/b avec a in Z et b in Z*",
        "N subset Z subset D subset Q subset R",
        "a <= b <=> a - b <= 0",
        "a <= b et c > 0 => ac <= bc",
        "a <= b et c < 0 => ac >= bc",
        "0 <= a <= b <=> a^2 <= b^2 <=> sqrt(a) <= sqrt(b)",
        "0 < a <= b <=> 1/a >= 1/b",
        "M majorant de E <=> pour tout x in E, x <= M",
        "m minorant de E <=> pour tout x in E, x >= m",
        "E est borné <=> E est minoré et majoré",
        "|a| = a si a >= 0 et |a| = -a si a <= 0",
        "sqrt(x^2) = |x|",
        "|x| = |y| <=> x = y ou x = -y",
        "|x * y| = |x| * |y|",
        "|x / y| = |x| / |y| (y != 0)",
        "|x + y| <= |x| + |y| (Inégalité triangulaire)",
        "d(x, y) = |x - y|",
        "|x - a| = r (r > 0) <=> x = a - r ou x = a + r <=> S = {a - r ; a + r}",
        "|x - a| <= r (r > 0) <=> a - r <= x <= a + r <=> S = [a - r ; a + r]",
        "|x - y| <= epsilon <=> y est une valeur approchée de x à epsilon près avec incertitude epsilon",
        "Pour un encadrement a <= x <= b : valeur centrale y = (a + b)/2, incertitude epsilon = (b - a)/2"
      ],
      methods: [
        "Comparer deux nombres réels par le signe de leur différence : 1. Former la différence A - B. 2. Déterminer le signe de A - B en factorisant ou réduisant au même dénominateur. 3. Si A - B >= 0, alors A >= B ; si A - B <= 0, alors A <= B.",
        "Comparer deux nombres réels positifs par leurs carrés : 1. Vérifier que les deux nombres A et B sont strictement positifs. 2. Calculer A^2 et B^2. 3. Comparer A^2 et B^2 : A^2 <= B^2 <=> A <= B.",
        "Résoudre une équation du type |x - a| = r (avec r > 0) : 1. Vérifier le signe du membre de droite r. Si r < 0, S = ensemble vide. 2. Si r = 0, solution unique x = a. 3. Si r > 0, poser x - a = r ou x - a = -r. 4. Obtenir les deux solutions x = a + r et x = a - r, d'où S = {a - r ; a + r}.",
        "Résoudre une inéquation du type |x - a| <= r (avec r > 0) : 1. Réécrire sous la forme du double encadrement : -r <= x - a <= r. 2. Ajouter a aux trois membres : a - r <= x <= a + r. 3. Conclure S = [a - r ; a + r].",
        "Déterminer une valeur approchée et son incertitude à partir d'un encadrement a <= x <= b : 1. Calculer le centre de l'intervalle y = (a + b)/2 (valeur approchée). 2. Calculer le rayon de l'intervalle epsilon = (b - a)/2 (incertitude). 3. Écrire le résultat sous la forme |x - y| <= epsilon.",
        "Démontrer l'irrationalité par l'absurde (modèle sqrt(2)) : 1. Supposer que le nombre est rationnel, c'est-à-dire qu'il s'écrit sous forme d'une fraction irréductible a/b (a in N, b in N*). 2. Élever au carré pour obtenir une égalité liant a^2 et b^2 (ex: a^2 = 2b^2). 3. Déduire que a et b partagent un diviseur commun (ex: 2 ou 5), ce qui contredit l'irréductibilité de a/b. 4. Conclure que le nombre est irrationnel."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 3 : UTILISATION DES SYMÉTRIES ET TRANSLATIONS
    // -------------------------------------------------------------------------
    {
      id: "ch3",
      lessonNumber: 3,
      title: "Utilisation des symétries et translations",
      pages: [1, 17],
      topics: [
        "Application du plan dans lui-même : correspondance associant à chaque point M un unique point M' ; point invariant f(M) = M",
        "Translation de vecteur u : application t_u associant à tout point M le point M' tel que vecteur(MM') = u ; aucun point invariant si u != 0 ; identité si u = vecteur(0)",
        "Propriété caractéristique de la translation : f est une translation <=> pour tous points M et N d'images M' et N', vecteur(M'N') = vecteur(MN)",
        "Symétrie centrale de centre I : application S_I associant à tout point M le point M' tel que I est le milieu de [MM'] (vecteur(IM') = -vecteur(IM)) ; unique point invariant : son centre I",
        "Propriété caractéristique de la symétrie centrale : f est une symétrie centrale <=> pour tous points M et N d'images M' et N', vecteur(M'N') = -vecteur(MN)",
        "Symétrie orthogonale d'axe (D) : application S_(D) associant à M le point M' tel que (D) est la médiatrice de [MM'] (si M notin D) et M'=M (si M in D) ; points invariants : l'ensemble des points de la droite (D)",
        "Propriétés de conservation des symétries et translations : conservation de l'alignement, des longueurs de segments, du milieu d'un segment, du parallélisme, de l'orthogonalité, du contact de figures sécantes",
        "Images de figures simples : image d'une droite est une droite parallèle (translation et symétrie centrale) ; image d'un cercle C(O, R) est un cercle C'(O', R) de même rayon ; toute figure a pour image une figure superposable",
        "Utilisation des transformations pour construire : méthode d'esquisse, analyse des contraintes, programme de construction, justification",
        "Utilisation des transformations pour démontrer : concourance de droites, alignement de points, égalité de longueurs, orthogonalité",
        "Utilisation des transformations pour déterminer un lieu géométrique : image d'une droite ou d'un cercle par translation ou symétrie"
      ],
      formulas: [
        "t_u(M) = M' <=> vecteur(MM') = u (Translation)",
        "f est une translation <=> vecteur(M'N') = vecteur(MN) pour tous points distincts M, N",
        "S_I(M) = M' <=> vecteur(IM') = -vecteur(IM) <=> I milieu de [MM'] (Symétrie centrale)",
        "f est une symétrie centrale <=> vecteur(M'N') = -vecteur(MN) pour tous points distincts M, N",
        "S_(D)(M) = M' <=> (D) est médiatrice de [MM'] si M notin (D), et M'=M si M in (D) (Symétrie axiale)",
        "Image d'une droite (D) par t_u ou S_I : droite (D') telle que (D') // (D)",
        "Image d'une droite (D) perpendiculaire à l'axe (L) par S_(L) : la droite (D) elle-même",
        "Image d'un segment [AB] : segment [A'B'] avec A'B' = AB",
        "Image du cercle C(O, R) : cercle C'(O', R) de même rayon R",
        "Conservation du milieu : I milieu de [AB] => f(I) milieu de [A'B']"
      ],
      methods: [
        "Démontrer qu'une application f est une translation : 1. Considérer deux points quelconques M et N et leurs images M' = f(M) et N' = f(N). 2. Établir par le calcul vectoriel que vecteur(M'N') = vecteur(MN). 3. Conclure d'après la propriété caractéristique que f est une translation.",
        "Démontrer qu'une application f est une symétrie centrale : 1. Considérer deux points quelconques M et N et leurs images M' = f(M) et N' = f(N). 2. Établir par le calcul vectoriel que vecteur(M'N') = -vecteur(MN). 3. Conclure d'après la propriété caractéristique que f est une symétrie centrale de centre le milieu de [MM'].",
        "Construire un parallélogramme sous contraintes de droites par translation : 1. Identifier le vecteur de translation imposé par les points connus (ex: vecteur(BA)). 2. Construire l'image de la droite support (L) par cette translation t_BA. 3. Le sommet inconnu D est l'intersection de la droite image (L') et de la seconde droite support (Delta). 4. En déduire le sommet C par translation réciproque sur (L).",
        "Démontrer que trois droites sont concourantes à l'aide d'une translation : 1. Montrer que les trois droites données (L1), (L2), (L3) sont les images respectives de trois droites concourantes connues (AH), (BH), (CH) par une translation t_u. 2. Noter H le point de concours des droites initiales. 3. Conclure que les droites images sont concourantes en K = t_u(H).",
        "Déterminer un lieu géométrique par une transformation : 1. Exprimer le point cherché N en fonction du point mobile M sous la forme d'une transformation géométrique fixe N = f(M) (translation de vecteur fixe ou symétrie de centre/axe fixe). 2. Identifier le lieu géométrique parcouru par M (ex: droite (D) ou cercle (C)). 3. Conclure que le lieu géométrique de N est l'image de ce lieu par la transformation f (droite parallèle ou cercle de même rayon)."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 4 : GÉNÉRALITÉS SUR LES FONCTIONS
    // -------------------------------------------------------------------------
    {
      id: "ch4",
      lessonNumber: 4,
      title: "Généralités sur les fonctions",
      pages: [1, 23],
      topics: [
        "Définition d'une fonction f de A vers B : correspondance associant à chaque élément de A un ou zéro élément de B ; variable x, image f(x), antécédents",
        "Fonction numérique d'une variable réelle : ensemble de départ A subset R et ensemble d'arrivée B subset R",
        "Modes de détermination d'une fonction : formule explicite y = f(x), tableau de valeurs, programme de calcul",
        "Ensemble de définition Df : ensemble des réels x ayant une image par f ; contraintes sur la variable (dénominateur != 0, expression sous radical >= 0)",
        "Courbe représentative (Cf) dans un repère : ensemble des points M(x, f(x)) pour x in Df ; test de la droite verticale (toute parallèle à l'axe (Oy) coupe Cf en au plus un point)",
        "Calcul et lecture d'images et d'antécédents : f(a) ordonnée du point d'abscisse a sur Cf ; antécédents de b = solutions de f(x) = b (abscisses des intersections de Cf avec la droite y = b)",
        "Image directe d'une partie E : f(E) = ensemble des images des éléments de E ; détermination graphique sur un intervalle [a; b] par projection sur l'axe des ordonnées [y_min ; y_max]",
        "Image réciproque d'une partie G : f^-1(G) = ensemble des antécédents des éléments de G ; détermination graphique par projection sur l'axe des abscisses de la bande horizontale",
        "Égalité de deux fonctions : f et g sont égales sur E si elles ont le même ensemble de définition E et pour tout x in E, f(x) = g(x)",
        "Sens de variation d'une fonction sur un intervalle K : fonction croissante (conserve l'ordre), strictement croissante, décroissante (inverse l'ordre), strictement décroissante, constante, monotone",
        "Tableau de variation : résumé synthétique et ordonné des sens de variation et des extremums d'une fonction sur son domaine",
        "Maximum et minimum d'une fonction sur un intervalle E : f(a) est le maximum si pour tout x in E, f(x) <= f(a) ; f(b) est le minimum si pour tout x in E, f(x) >= f(b)"
      ],
      formulas: [
        "M(x; y) in (Cf) <=> x in Df et y = f(x)",
        "Contrainte de fraction rationnelle P(x)/Q(x) : Q(x) != 0",
        "Contrainte de racine carrée sqrt(U(x)) : U(x) >= 0",
        "f croissante sur K <=> pour tous u, v in K, u < v => f(u) <= f(v)",
        "f strictement croissante sur K <=> pour tous u, v in K, u < v => f(u) < f(v)",
        "f décroissante sur K <=> pour tous u, v in K, u < v => f(u) >= f(v)",
        "f strictement décroissante sur K <=> pour tous u, v in K, u < v => f(u) > f(v)",
        "f constante sur K <=> pour tous u, v in K, f(u) = f(v)",
        "f et g égales sur E <=> pour tout x in E, f(x) = g(x)",
        "Maximum M = f(a) sur E <=> pour tout x in E, f(x) <= f(a)",
        "Minimum m = f(b) sur E <=> pour tout x in E, f(x) >= f(b)"
      ],
      methods: [
        "Déterminer l'ensemble de définition d'une fonction explicite : 1. Repérer toutes les contraintes d'existence : dénominateurs non nuls et expressions sous radicaux supérieures ou égales à zéro. 2. Écrire les conditions mathématiques correspondantes. 3. Résoudre chaque condition (équations et inéquations). 4. Déterminer l'intersection de tous les ensembles de validité et l'écrire sous forme d'intervalle ou réunion d'intervalles.",
        "Calculer algébriquement les antécédents d'un réel b par f : 1. Poser l'équation f(x) = b avec la contrainte x in Df. 2. Résoudre algébriquement l'équation. 3. Vérifier que chaque solution obtenue appartient bien à Df. 4. Rassembler les solutions retenues.",
        "Étudier le sens de variation d'une fonction par la définition : 1. Choisir deux réels arbitraires u et v dans l'intervalle I tels que u < v. 2. Former la différence f(u) - f(v) ou appliquer successivement les règles sur les inégalités pour encadrer f(u) et f(v). 3. Comparer f(u) et f(v) : si f(u) < f(v), f est strictement croissante ; si f(u) > f(v), f est strictement décroissante.",
        "Déterminer graphiquement l'image directe d'un intervalle [a; b] : 1. Repérer sur l'axe des abscisses l'intervalle [a; b]. 2. Délimiter la portion correspondante de la courbe Cf. 3. Projeter orthogonalement cette portion de courbe sur l'axe des ordonnées. 4. Repérer l'ordonnée minimale y_min et l'ordonnée maximale y_max ; l'image directe est [y_min ; y_max].",
        "Déterminer graphiquement l'image réciproque d'un intervalle [c; d] : 1. Repérer sur l'axe des ordonnées l'intervalle [c; d]. 2. Tracer la bande horizontale comprise entre y = c et y = d. 3. Identifier les portions de la courbe Cf situées à l'intérieur de cette bande. 4. Projeter ces portions sur l'axe des abscisses pour obtenir l'ensemble des antécédents.",
        "Démontrer qu'une valeur M est le maximum de f : 1. Calculer f(x0) pour vérifier que f(x0) = M. 2. Étudier le signe de f(x) - M pour tout x in Df. 3. Prouver que f(x) - M <= 0, ce qui démontre que f(x) <= M pour tout x, donc M est le maximum."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 5 : GÉOMÉTRIE DE L'ESPACE
    // -------------------------------------------------------------------------
    {
      id: "ch5",
      lessonNumber: 5,
      title: "Géométrie de l'espace",
      pages: [1, 15],
      topics: [
        "Règles fondamentales de l'espace : par deux points distincts passe une unique droite ; par trois points non alignés passe un unique plan ; si deux points appartiennent à un plan, toute la droite y est incluse ; l'intersection de deux plans sécants est une droite ; les théorèmes du plan restent valables dans tout plan de l'espace",
        "Vocabulaire de l'espace : points coplanaires, droites coplanaires, points non coplanaires, solides usuels (tétraèdre à 4 sommets non coplanaires, cube, pyramide, prisme droit)",
        "Positions relatives de deux droites dans l'espace : coplanaires (sécantes en un point, ou parallèles confondues / strictement parallèles disjointes) ; non coplanaires (disjointes et non parallèles)",
        "Détermination d'un plan de l'espace : par 3 points non alignés, par une droite et un point n'appartenant pas à cette droite, par deux droites sécantes, par deux droites strictement parallèles",
        "Positions relatives d'une droite et d'un plan : droite parallèle au plan (incluse dans le plan ou strictement disjointe) ; droite sécante au plan (intersection réduite à un point)",
        "Positions relatives de deux plans : plans parallèles (confondus ou strictement disjoints) ; plans sécants (intersection égale à une droite)",
        "Section plane d'un solide : trace laissée par un plan coupant un solide, formée par l'intersection du plan avec les différentes faces",
        "Propriétés du parallélisme de droites : par un point donné passe une unique parallèle à une droite ; deux droites parallèles à une même troisième sont parallèles entre elles ; si deux droites sont parallèles, tout plan coupant l'une coupe l'autre",
        "Propriétés du parallélisme droite-plan : une droite (D) est parallèle à un plan (P) <=> il existe dans (P) une droite parallèle à (D) ; si (D) // (P), toute droite parallèle à (D) est parallèle à (P) ; une droite parallèle à deux plans sécants est parallèle à leur droite d'intersection",
        "Propriétés du parallélisme de plans : deux plans sont parallèles <=> l'un contient deux droites sécantes parallèles à l'autre ; deux plans parallèles à un même troisième sont parallèles entre eux ; par un point donné passe un unique plan parallèle à un plan donné ; si deux plans sont parallèles, tout plan sécant à l'un coupe l'autre suivant deux droites d'intersection parallèles"
      ],
      formulas: [
        "A in (P) et B in (P) => (AB) subset (P)",
        "(P) et (Q) sécants => (P) cap (Q) = (Delta) (droite d'intersection)",
        "(d) et (d') coplanaires => (d) cap (d') = {I} (sécantes) ou (d) // (d') (parallèles)",
        "(d) et (d') non coplanaires => (d) cap (d') = ensemble vide (disjointes non parallèles)",
        "(d1) // (d2) et (d2) // (d3) => (d1) // (d3)",
        "(D) // (P) <=> il existe (Delta) subset (P) telle que (D) // (Delta)",
        "(D) // (P) et (D) // (Q) avec (P) cap (Q) = (Delta) => (D) // (Delta)",
        "(P) // (Q) <=> il existe (d1) subset (P) et (d2) subset (P) sécantes telles que (d1) // (Q) et (d2) // (Q)",
        "(P) // (Q) et (R) sécant à (P) selon (d1) => (R) sécant à (Q) selon (d2) et (d1) // (d2)",
        "(P1) // (P2) et (P2) // (P3) => (P1) // (P3)"
      ],
      methods: [
        "Démontrer qu'un point appartient à un plan : Montrer que ce point appartient à une droite dont on a préalablement établi qu'elle est incluse dans le plan.",
        "Démontrer qu'une droite (D) est incluse dans un plan (P) : Méthode 1 : Montrer que deux points distincts de (D) appartiennent à (P). Méthode 2 : Montrer qu'elle passe par un point de (P) et est parallèle à une droite contenue dans (P).",
        "Démontrer que deux droites de l'espace sont parallèles : 1. Démontrer qu'elles sont coplanaires en identifiant le plan qui les contient toutes les deux. 2. Appliquer dans ce plan un théorème de géométrie plane (théorème de la droite des milieux dans un triangle, théorème de Thalès, propriétés des parallélogrammes).",
        "Démontrer qu'une droite (D) est parallèle à un plan (P) : 1. Trouver une droite (Delta) tracée dans le plan (P). 2. Démontrer que la droite (D) est parallèle à (Delta). 3. Conclure que la droite (D) est parallèle au plan (P).",
        "Démontrer que deux plans (P) et (Q) sont parallèles : 1. Identifier deux droites sécantes (d1) et (d2) incluses dans le plan (P). 2. Démontrer que (d1) est parallèle au plan (Q) et que (d2) est parallèle au plan (Q). 3. Conclure que le plan (P) est parallèle au plan (Q).",
        "Déterminer la droite d'intersection de deux plans sécants : 1. Trouver un premier point commun A appartenant à la fois aux deux plans. 2. Trouver un second point commun B distinct de A appartenant aux deux plans. 3. La droite (AB) est la droite d'intersection cherchée.",
        "Construire la section d'un solide par un plan : 1. Déterminer l'intersection du plan avec chacune des faces du solide (segments de droite reliant deux points d'une même face). 2. Si le plan coupe deux faces parallèles, tracer des segments d'intersection parallèles. 3. Fermer le contour polygonal de la section."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 6 : FONCTIONS POLYNÔMES ET FONCTIONS RATIONNELLES
    // -------------------------------------------------------------------------
    {
      id: "ch6",
      lessonNumber: 6,
      title: "Fonctions polynômes et fonctions rationnelles",
      pages: [1, 18],
      topics: [
        "Monôme de coefficient a (a != 0) et de degré n : expression de la forme a*x^n ; polynôme = somme algébrique de monômes",
        "Forme réduite et ordonnée d'un polynôme : P(x) = a_n*x^n + a_{n-1}*x^{n-1} + ... + a_1*x + a_0 avec a_n != 0 ; degré noté d°P = n ; coefficients a_k",
        "Polynôme nul : polynôme dont tous les coefficients sont nuls (a_0 = a_1 = ... = a_n = 0)",
        "Égalité de deux polynômes : deux polynômes sont égaux si et seulement si ils ont le même degré et les coefficients des termes de même degré sont égaux",
        "Zéro (ou racine) d'un polynôme : nombre réel alpha tel que P(alpha) = 0 ; chercher les zéros revient à résoudre P(x) = 0",
        "Opérations sur les polynômes : somme P + Q (degré d°(P+Q) <= max(d°P, d°Q)) ; produit P * Q (degré d°(P*Q) = d°P + d°Q)",
        "Produits remarquables usuels : (a+b)^2, (a-b)^2, (a-b)(a+b), (a+b)^3, (a-b)^3, a^3 - b^3, a^3 + b^3",
        "Polynôme du second degré P(x) = ax^2 + bx + c (a != 0)",
        "Forme canonique d'un trinôme du second degré : P(x) = a[(x + b/(2a))^2 - (b^2 - 4ac)/(4a^2)] = a[(x + alpha)^2 + beta] avec alpha = b/(2a) et beta = -(b^2 - 4ac)/(4a^2)",
        "Factorisation et zéros du second degré par la forme canonique : si beta < 0, factorisable sous forme a(x - x1)(x - x2) ; si beta = 0, zéro double x = -alpha ; si beta > 0, non factorisable dans R et aucun zéro",
        "Étude du signe d'un binôme du premier degré ax + b (a != 0) : signe de -a avant -b/a, zéro en -b/a, signe de a après -b/a",
        "Étude du signe d'un trinôme du second degré ax^2 + bx + c : signe de a à l'extérieur des racines, signe de -a entre les racines",
        "Théorème de factorisation par x - alpha : alpha est un zéro de P si et seulement si il existe un polynôme Q tel que P(x) = (x - alpha)*Q(x) avec d°Q = d°P - 1 ; un polynôme de degré n admet au plus n zéros distincts",
        "Méthodes de détermination du quotient Q(x) : méthode des coefficients indéterminés (identification) et méthode de la division euclidienne",
        "Fractions rationnelles f(x) = P(x)/Q(x) : ensemble de définition Df = R privé des zéros de Q ; simplification après factorisation ; tableau de signes ; décomposition en éléments simples sous la forme ax + b + R(x)/Q(x)"
      ],
      formulas: [
        "P(x) = a_n * x^n + a_{n-1} * x^{n-1} + ... + a_1 * x + a_0 (a_n != 0)",
        "d°(P + Q) <= max(d°P, d°Q)",
        "d°(P * Q) = d°P + d°Q",
        "(a + b)^2 = a^2 + 2ab + b^2",
        "(a - b)^2 = a^2 - 2ab + b^2",
        "(a - b)(a + b) = a^2 - b^2",
        "(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3",
        "(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3",
        "a^3 - b^3 = (a - b)(a^2 + ab + b^2)",
        "a^3 + b^3 = (a + b)(a^2 - ab + b^2)",
        "Forme canonique : ax^2 + bx + c = a[(x + b/(2a))^2 - ((b^2 - 4ac)/(4a^2))]",
        "P(alpha) = 0 <=> P(x) = (x - alpha) * Q(x) avec d°Q = d°P - 1",
        "Fraction rationnelle f(x) = P(x) / Q(x) => Df = {x in R | Q(x) != 0}",
        "Signe de ax + b : signe de -a pour x < -b/a, 0 en x = -b/a, signe de a pour x > -b/a",
        "Signe de ax^2 + bx + c (2 racines x1 < x2) : signe de a sur ]-inf; x1[ U ]x2; +inf[, signe de -a sur ]x1; x2["
      ],
      methods: [
        "Mettre un polynôme du second degré ax^2 + bx + c sous forme canonique : 1. Factoriser par a : a[x^2 + (b/a)x + c/a]. 2. Reconnaitre le début d'un carré : x^2 + (b/a)x = (x + b/(2a))^2 - (b/(2a))^2. 3. Remplacer et réduire la constante : a[(x + b/(2a))^2 - (b^2 - 4ac)/(4a^2)].",
        "Factoriser un trinôme du second degré à l'aide de sa forme canonique : 1. Écrire la forme canonique a[(x + alpha)^2 + beta]. 2. Si beta > 0, conclure que le trinôme n'est pas factorisable dans R. 3. Si beta <= 0, poser -beta = k^2 (où k = sqrt(-beta)). 4. Appliquer l'identité remarquable A^2 - B^2 : a[(x + alpha - k)(x + alpha + k)].",
        "Factoriser un polynôme de degré 3 connaissant une racine alpha par identification : 1. Poser P(x) = (x - alpha)(ax^2 + bx + c). 2. Développer le second membre et regrouper par puissances de x : ax^3 + (b - a*alpha)x^2 + (c - b*alpha)x - c*alpha. 3. Identifier terme à terme avec les coefficients de P(x) pour former un système linéaire. 4. Résoudre le système pour trouver a, b, c et factoriser le quotient obtenu.",
        "Factoriser un polynôme par division euclidienne : 1. Disposer le dividende P(x) ordonné et le diviseur (x - alpha). 2. Diviser le monôme de plus haut degré de P(x) par x pour trouver le premier monôme du quotient. 3. Multiplier ce monôme par (x - alpha), soustraire le résultat du dividende. 4. Répéter l'opération avec le reste obtenu jusqu'à ce que le reste devienne 0. 5. Écrire P(x) = (x - alpha)*Q(x).",
        "Étudier le signe d'une fraction rationnelle f(x) = P(x)/Q(x) : 1. Déterminer l'ensemble de définition Df (valeurs interdites annulant Q(x)). 2. Factoriser complètement P(x) et Q(x) en produit de facteurs de degré 1 ou 2. 3. Dresser un tableau de signes incluant tous les facteurs, avec un zéro pour les racines de P(x) et une double barre pour les zéros de Q(x). 4. Appliquer la règle des signes pour déterminer le signe global de f(x) sur chaque intervalle."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 7 : ANGLES INSCRITS
    // -------------------------------------------------------------------------
    {
      id: "ch7",
      lessonNumber: 7,
      title: "Angles inscrits",
      pages: [1, 19],
      topics: [
        "Arcs de cercle définis par une corde [AB] : petit arc noté AB_chapeau et grand arc noté AB_chapeau_renversé",
        "Angle inscrit défini par une corde et un point M du cercle : angle AMB dont le sommet M appartient au cercle et dont les côtés recoupent le cercle en A et B",
        "Angle au centre associé AOB : angle dont le sommet est le centre O du cercle et interceptant le même arc",
        "Propriété de l'angle inscrit aigu : si AMB intercepte le petit arc AB, alors mes(AMB) = (1/2) * mes(AOB)",
        "Propriété de l'angle inscrit obtus : si AMB intercepte le grand arc AB, alors mes(AMB) = 180° - (1/2) * mes(AOB)",
        "Angle inscrit défini par une corde et une demi-tangente : demi-tangente [AT) dans le demi-plan ne contenant pas O : mes(TAB) = (1/2)*mes(AOB) ; demi-tangente opposée [AT') : mes(T'AB) = 180° - (1/2)*mes(AOB)",
        "Conséquences fondamentales : deux angles inscrits interceptant le même arc ont même mesure ; deux angles inscrits interceptant deux arcs de même longueur ont même mesure ; la bissectrice d'un angle inscrit partage l'arc intercepté en deux arcs de même longueur",
        "Quadrilatère inscriptible : si M appartient au grand arc et N au petit arc, les angles opposés AMB et ANB sont supplémentaires : mes(AMB) + mes(ANB) = 180°",
        "Lieu géométrique des points M tels que mes(AMB) = theta (0 < theta < 180°) : réunion de deux arcs de cercle symétriques par rapport à (AB), appelés arcs capables d'angle theta",
        "Cas limites des arcs capables : theta = 0° (droite (AB) privée du segment [AB]) ; theta = 180° (segment [AB] privé de A et B) ; theta = 90° (cercle de diamètre [AB] privé de A et B)",
        "Relations métriques dans un triangle : formule de l'aire du triangle S = (1/2)*b*c*sin(A) = (1/2)*a*c*sin(B) = (1/2)*a*b*sin(C)",
        "Théorème des sinus : a/sin(A) = b/sin(B) = c/sin(C) = abc/(2S) = 2R où R est le rayon du cercle circonscrit"
      ],
      formulas: [
        "mes(AMB) = (1/2) * mes(AOB) (Angle inscrit aigu interceptant le petit arc)",
        "mes(AMB) = 180° - (1/2) * mes(AOB) (Angle inscrit obtus interceptant le grand arc)",
        "mes(TAB) = (1/2) * mes(AOB) (Angle corde-tangente interceptant le petit arc)",
        "mes(T'AB) = 180° - (1/2) * mes(AOB) (Angle corde-tangente interceptant le grand arc)",
        "mes(AMB) = mes(AM'B) (Deux angles inscrits interceptant le même arc)",
        "mes(AMB) + mes(ANB) = 180° (Angles inscrits supplémentaires dans un quadrilatère inscriptible)",
        "Aire d'un triangle : S = (1/2) * b * c * sin(A) = (1/2) * a * c * sin(B) = (1/2) * a * b * sin(C)",
        "Théorème des sinus : a / sin(A) = b / sin(B) = c / sin(C) = 2R",
        "Rayon du cercle circonscrit : R = a / (2 * sin(A)) = abc / (4 * S)",
        "sin(A) + sin(B) + sin(C) = P / (2R) où P = a + b + c est le périmètre du triangle"
      ],
      methods: [
        "Calculer la mesure d'un angle inscrit : 1. Repérer l'arc intercepté par l'angle inscrit. 2. Trouver la mesure de l'angle au centre associé AOB. 3. Appliquer mes(AMB) = (1/2)*mes(AOB) si l'angle est aigu, ou 180° - (1/2)*mes(AOB) s'il est obtus.",
        "Construire l'ensemble des points M tels que mes(AMB) = theta (arc capable) : 1. Tracer le segment [AB]. 2. Tracer la demi-droite [AT) telle que mes(TAB) = theta. 3. Construire la perpendiculaire en A à (AT) et la médiatrice de [AB] ; leur intersection donne le centre O de l'arc capable. 4. Tracer l'arc de cercle de centre O et rayon OA situé dans le demi-plan opposé à T. 5. Construire le symétrique de cet arc par rapport à (AB).",
        "Calculer les côtés et angles d'un triangle par le théorème des sinus : 1. Écrire la double égalité a/sin(A) = b/sin(B) = c/sin(C) = 2R. 2. Isoler la grandeur inconnue (ex: a = b * sin(A) / sin(B) ou sin(A) = a * sin(B) / b). 3. Calculer la valeur numérique recherchée.",
        "Calculer le rayon du cercle circonscrit à un triangle : 1. Identifier une longueur de côté a et son angle opposé A. 2. Appliquer la formule R = a / (2 * sin(A)).",
        "Calculer l'aire d'un triangle connaissant deux côtés et l'angle compris : 1. Relever les longueurs de deux côtés adjacents (ex: AB et AC) et la mesure de l'angle qu'ils forment. 2. Appliquer la formule S = (1/2) * AB * AC * sin(BAC)."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 8 : ANGLES ORIENTÉS ET TRIGONOMÉTRIE
    // -------------------------------------------------------------------------
    {
      id: "ch8",
      lessonNumber: 8,
      title: "Angles orientés et trigonométrie",
      pages: [1, 13],
      topics: [
        "Le radian : unité de mesure telle que la mesure de l'angle au centre AOB est égale à la longueur de l'arc intercepté sur le cercle de rayon 1 ; angle nul = 0 rad, angle plat = pi rad, angle droit = pi/2 rad",
        "Formules de conversion degré-radian : y_rad = (x_deg * pi) / 180° et x_deg = (y_rad * 180°) / pi",
        "Longueur d'un arc de cercle de rayon R intercepté par un angle au centre de alpha radians : L = R * alpha",
        "Orientation du plan : choix d'un sens de parcours sur le cercle ; sens direct (trigonométrique, antihoraire) et sens indirect (rétrograde, horaire)",
        "Angle orienté de deux vecteurs non nuls u et v, noté (u^, v)",
        "Angles orientés particuliers : angle nul (u et v colinéaires de même sens, noté (0^)) ; angle plat (u et v colinéaires de sens contraire, mesure pi) ; angle droit direct (+pi/2) et indirect (-pi/2)",
        "Mesure principale d'un angle orienté : unique valeur appartenant à l'intervalle ]-pi ; pi]",
        "Cercle trigonométrique : cercle de centre O et de rayon 1 dans un repère orthonormé direct (O, I, J) ; point image M(cos(alpha), sin(alpha)) associé à tout réel alpha in ]-pi ; pi]",
        "Définitions trigonométriques : cos(u^, v) = abscisse de M ; sin(u^, v) = ordonnée de M ; tan(u^, v) = sin(alpha)/cos(alpha) (pour alpha != +-pi/2)",
        "Signe de cos(x) et sin(x) sur les quatre quadrants de l'intervalle ]-pi ; pi]",
        "Propriétés trigonométriques fondamentales : -1 <= cos(alpha) <= 1, -1 <= sin(alpha) <= 1, cos^2(alpha) + sin^2(alpha) = 1, cos(-alpha) = cos(alpha), sin(-alpha) = -sin(alpha), 1 + tan^2(alpha) = 1 / cos^2(alpha)"
      ],
      formulas: [
        "y_rad = (x_deg * pi) / 180° et x_deg = (y_rad * 180°) / pi",
        "Longueur de l'arc AB : L = R * alpha (avec alpha en radians)",
        "Mesure principale d'un angle orienté : alpha in ]-pi ; pi]",
        "Coordonnées du point image M sur le cercle trigo : M(cos(alpha) ; sin(alpha))",
        "cos^2(alpha) + sin^2(alpha) = 1",
        "cos(-alpha) = cos(alpha) (fonction cosinus paire)",
        "sin(-alpha) = -sin(alpha) (fonction sinus impaire)",
        "tan(alpha) = sin(alpha) / cos(alpha) pour tout alpha != pi/2 + k*pi",
        "1 + tan^2(alpha) = 1 / cos^2(alpha)",
        "Signe de cos(x) : cos(x) > 0 pour x in ]-pi/2 ; pi/2[ ; cos(x) <= 0 pour x in ]-pi ; -pi/2] U [pi/2 ; pi]",
        "Signe de sin(x) : sin(x) > 0 pour x in ]0 ; pi[ ; sin(x) <= 0 pour x in ]-pi ; 0] U {pi}"
      ],
      methods: [
        "Convertir une mesure d'angle de degrés en radians : 1. Prendre la mesure x en degrés. 2. Calculer y = (x * pi) / 180. 3. Simplifier la fraction pour obtenir un multiple rationnel de pi.",
        "Calculer sin(alpha) connaissant cos(alpha) et le quadrant : 1. Utiliser l'identité cos^2(alpha) + sin^2(alpha) = 1 pour exprimer sin^2(alpha) = 1 - cos^2(alpha). 2. Identifier le signe de sin(alpha) selon l'intervalle donné pour alpha (positif si alpha in [0; pi], négatif si alpha in [-pi; 0]). 3. En déduire la valeur exacte de sin(alpha) en appliquant le signe adéquat devant la racine carrée.",
        "Calculer tan(alpha) sans radical au dénominateur : 1. Calculer sin(alpha) et cos(alpha). 2. Écrire le rapport tan(alpha) = sin(alpha) / cos(alpha). 3. Multiplier numérateur et dénominateur par l'expression conjuguée du dénominateur pour éliminer la racine carrée.",
        "Simplifier une somme trigonométrique comportant des angles opposés : 1. Appliquer les formules de parité : remplacer cos(-x) par cos(x) et sin(-x) par -sin(x). 2. Réduire l'expression algébrique."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 9 : STATISTIQUE
    // -------------------------------------------------------------------------
    {
      id: "ch9",
      lessonNumber: 9,
      title: "Statistique",
      pages: [1, 13],
      topics: [
        "Série statistique quantitative à modalités discrètes ou regroupées en classes [a; b[",
        "Effectifs cumulés croissants (ECC) et décroissants (ECD) : définition et calcul par cumuls successifs",
        "Fréquences cumulées croissantes (FCC) et décroissantes (FCD)",
        "Polygone des effectifs (ou fréquences) cumulés croissants et décroissants : construction graphique point par point (abscisse = borne de classe, ordonnée = effectif cumulé)",
        "Caractéristiques de position : valeurs donnant l'ordre de grandeur central des observations",
        "Mode et classe modale : modalité d'effectif maximal ; classe d'effectif maximal ; le centre de la classe modale est le mode de la série continue",
        "Moyenne arithmétique x_barre : série discrète x_barre = sum(n_i * x_i) / N ; série groupée en classes x_barre = sum(n_i * c_i) / N où c_i = (a_i + b_i)/2 est le centre de chaque classe",
        "Médiane Me : modalité partageant la population ordonnée en deux parties de même effectif (effectif cumulé égal à N/2)",
        "Détermination de la médiane pour série discrète : rang (N+1)/2 si N est impair ; centre de l'intervalle entre les rangs N/2 et N/2 + 1 si N est pair",
        "Détermination de la médiane pour série groupée en classes : lecture graphique (intersection des polygones ECC et ECD ou abscisse correspondant à l'ordonnée N/2) ; calcul algébrique par interpolation linéaire",
        "Caractéristiques de dispersion : valeurs mesurant l'étalement des données autour de la moyenne ou de la médiane",
        "Étendue e : différence entre la plus grande et la plus petite modalité de la série (e = x_max - x_min)",
        "Écart moyen (ou écart absolu moyen) e_m : moyenne des valeurs absolues des écarts à la moyenne",
        "Variance V : moyenne des carrés des écarts à la moyenne V = sum(n_i * (x_i - x_barre)^2) / N ; formule pratique de Koenig V = [sum(n_i * x_i^2) / N] - (x_barre)^2",
        "Écart-type sigma : racine carrée de la variance sigma = sqrt(V) ; mesure fondamentale de la dispersion"
      ],
      formulas: [
        "Effectif total : N = sum(n_i)",
        "Centre de classe [a; b[ : c_i = (a + b) / 2",
        "Moyenne (série discrète) : x_barre = (1/N) * sum_{i=1}^p (n_i * x_i)",
        "Moyenne (série en classes) : x_barre = (1/N) * sum_{i=1}^p (n_i * c_i)",
        "Médiane par interpolation linéaire sur la classe [a; b[ : (Me - a) / (N/2 - c) = (b - a) / (d - c) où c est l'ECC précédent et d l'ECC de la classe",
        "Me = a + ((N/2 - c) / (d - c)) * (b - a)",
        "Étendue : e = x_max - x_min",
        "Écart moyen : e_m = (1/N) * sum_{i=1}^p n_i * |x_i - x_barre|",
        "Variance (formule de définition) : V = (1/N) * sum_{i=1}^p n_i * (x_i - x_barre)^2",
        "Variance (formule développée de calcul rapide) : V = [(1/N) * sum_{i=1}^p (n_i * c_i^2)] - (x_barre)^2",
        "Écart-type : sigma = sqrt(V)"
      ],
      methods: [
        "Calculer la moyenne et l'écart-type d'une série groupée en classes : 1. Déterminer le centre c_i = (a + b)/2 pour chaque classe [a; b[. 2. Calculer les produits n_i * c_i et leur somme, puis diviser par N pour obtenir la moyenne x_barre. 3. Calculer les produits n_i * c_i^2 et leur somme. 4. Calculer la variance par la formule V = [sum(n_i * c_i^2) / N] - (x_barre)^2. 5. Calculer l'écart-type sigma = sqrt(V).",
        "Calculer la médiane d'une série continue par interpolation linéaire : 1. Dresser le tableau des effectifs cumulés croissants (ECC). 2. Calculer le rang N/2. 3. Identifier la classe médiane [a; b[ qui contient ce rang. 4. Relever l'ECC de la classe précédente (noté c) et l'ECC de la classe médiane (noté d). 5. Poser l'équation d'interpolation : (Me - a) / (N/2 - c) = (b - a) / (d - c). 6. Isoler Me et effectuer le calcul.",
        "Déterminer graphiquement la médiane : 1. Tracer le polygone des effectifs cumulés croissants (ou des fréquences). 2. Placer sur l'axe des ordonnées la valeur N/2 (ou 50%). 3. Tracer une ligne horizontale jusqu'à la courbe du polygone. 4. Descendre verticalement sur l'axe des abscisses pour lire la valeur de la médiane Me (ou repérer l'abscisse du point d'intersection des deux polygones ECC et ECD)."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 10 : PRODUIT SCALAIRE
    // -------------------------------------------------------------------------
    {
      id: "ch10",
      lessonNumber: 10,
      title: "Produit scalaire",
      pages: [1, 13],
      topics: [
        "Définition géométrique du produit scalaire de deux vecteurs : u . v = ||u|| * ||v|| * cos(u^, v) si u != 0 et v != 0 ; u . v = 0 si u = 0 ou v = 0",
        "Produit scalaire de deux vecteurs formés par 3 points : vecteur(AB) . vecteur(AC) = AB * AC * cos(BAC)",
        "Propriétés algébriques fondamentales : symétrie u . v = v . u ; inégalité de Cauchy-Schwarz |u . v| <= ||u|| * ||v||",
        "Vecteurs colinéaires : u . v = ||u|| * ||v|| si même sens ; u . v = -||u|| * ||v|| si sens contraires",
        "Carré scalaire : u^2 = u . u = ||u||^2 ; pour deux points A et B, vecteur(AB)^2 = AB^2",
        "Expression par projection orthogonale : vecteur(AB) . vecteur(AC) = AB_barre * AH_barre où H est le projeté orthogonal de C sur (AB) ; vecteur(AB) . vecteur(CD) = AB_barre * HK_barre (H et K projetés de C et D sur (AB))",
        "Orthogonalité de vecteurs et droites : u et v sont orthogonaux <=> u . v = 0 ; (AB) perpendiculaire à (CD) <=> vecteur(AB) . vecteur(CD) = 0",
        "Caractérisation du cercle de diamètre [AB] : M appartient au cercle de diamètre [AB] <=> vecteur(MA) . vecteur(MB) = 0",
        "Opérations et identités remarquables du produit scalaire : distributivité par rapport à l'addition, bilinéarité (k*u).v = k*(u.v), identités (u+v)^2 = u^2 + 2u.v + v^2, (u-v)^2 = u^2 - 2u.v + v^2, (u-v).(u+v) = u^2 - v^2",
        "Formules de polarisation reliant produit scalaire et normes : u . v = (1/2) * (||u + v||^2 - ||u||^2 - ||v||^2) ; u . v = (1/2) * (||u||^2 + ||v||^2 - ||u - v||^2)",
        "Produit scalaire dans un triangle : vecteur(AB) . vecteur(AC) = (1/2) * (AB^2 + AC^2 - BC^2)",
        "Théorème d'Al-Kashi (loi des cosinus) dans un triangle quelconque : a^2 = b^2 + c^2 - 2bc*cos(A) ; b^2 = a^2 + c^2 - 2ac*cos(B) ; c^2 = a^2 + b^2 - 2ab*cos(C)",
        "Relations métriques dans le triangle rectangle en A (H pied de la hauteur issue de A) : BC^2 = AB^2 + AC^2 ; BA^2 = BH_barre * BC_barre ; HA^2 = HB_barre * HC_barre",
        "Théorème de la médiane (A' milieu de [BC]) : AB^2 + AC^2 = 2*AA'^2 + (BC^2)/2 ; vecteur(AB) . vecteur(AC) = AA'^2 - (BC^2)/4",
        "Formule de Héron pour l'aire d'un triangle : S = sqrt(p(p - a)(p - b)(p - c)) où p = (a + b + c)/2 est le demi-périmètre",
        "Expression analytique dans une base orthonormée (i, j) : u(x; y) et v(x'; y') => u . v = x*x' + y*y' ; norme ||u|| = sqrt(x^2 + y^2)"
      ],
      formulas: [
        "u . v = ||u|| * ||v|| * cos(u^, v)",
        "vecteur(AB) . vecteur(AC) = AB * AC * cos(BAC)",
        "u . v = ||u|| * ||v|| (colinéaires de même sens)",
        "u . v = -||u|| * ||v|| (colinéaires de sens contraire)",
        "u^2 = ||u||^2 et vecteur(AB)^2 = AB^2",
        "vecteur(AB) . vecteur(AC) = AB_barre * AH_barre (H projeté orthogonal de C sur (AB))",
        "u orthogonal à v <=> u . v = 0",
        "(AB) perp (CD) <=> vecteur(AB) . vecteur(CD) = 0",
        "M in cercle de diamètre [AB] <=> vecteur(MA) . vecteur(MB) = 0",
        "(u + v)^2 = u^2 + 2(u . v) + v^2",
        "(u - v)^2 = u^2 - 2(u . v) + v^2",
        "(u - v) . (u + v) = u^2 - v^2",
        "u . v = (1/2) * (||u + v||^2 - ||u||^2 - ||v||^2)",
        "u . v = (1/2) * (||u||^2 + ||v||^2 - ||u - v||^2)",
        "vecteur(AB) . vecteur(AC) = (1/2) * (AB^2 + AC^2 - BC^2)",
        "Théorème d'Al-Kashi : a^2 = b^2 + c^2 - 2bc * cos(A)",
        "cos(A) = (b^2 + c^2 - a^2) / (2bc)",
        "Triangle rectangle en A (H pied de la hauteur issue de A) : BA^2 = BH * BC et HA^2 = HB * HC",
        "Théorème de la médiane : AB^2 + AC^2 = 2AA'^2 + (BC^2) / 2 (A' milieu de [BC])",
        "vecteur(AB) . vecteur(AC) = AA'^2 - (BC^2) / 4 (A' milieu de [BC])",
        "Formule de Héron : S = sqrt(p * (p - a) * (p - b) * (p - c)) avec p = (a + b + c) / 2",
        "u . v = x*x' + y*y' (dans une base orthonormée)"
      ],
      methods: [
        "Calculer un produit scalaire connaissant les longueurs des trois côtés : 1. Identifier les longueurs des trois côtés AB, AC, BC du triangle. 2. Appliquer la formule vecteur(AB) . vecteur(AC) = (1/2) * (AB^2 + AC^2 - BC^2).",
        "Calculer une longueur inconnue à l'aide du théorème d'Al-Kashi : 1. Repérer les deux côtés connus b et c et l'angle formé A. 2. Poser la formule a^2 = b^2 + c^2 - 2bc*cos(A). 3. Remplacer les valeurs numériques et calculer a^2. 4. Prendre la racine carrée positive pour trouver a.",
        "Calculer la mesure d'un angle dans un triangle connaissant les trois côtés : 1. Poser la formule isolée cos(A) = (b^2 + c^2 - a^2) / (2bc). 2. Remplacer les trois longueurs a, b, c et calculer la valeur de cos(A). 3. Déterminer l'angle A en radians ou en degrés.",
        "Calculer la longueur d'une médiane dans un triangle : 1. Écrire le théorème de la médiane : AB^2 + AC^2 = 2AA'^2 + BC^2 / 2. 2. Isoler AA'^2 = (1/2) * (AB^2 + AC^2 - BC^2 / 2). 3. Remplacer les valeurs numériques et extraire la racine carrée de AA'^2.",
        "Démontrer l'orthogonalité de deux droites par le produit scalaire : 1. Définir des vecteurs directeurs u et v des deux droites. 2. Décomposer ces vecteurs à l'aide de la relation de Chasles ou exprimer leurs coordonnées dans un repère orthonormé. 3. Calculer le produit scalaire u . v. 4. Si u . v = 0, conclure que les droites sont perpendiculaires.",
        "Calculer l'aire d'un triangle par la formule de Héron : 1. Calculer le demi-périmètre p = (a + b + c)/2. 2. Calculer les trois différences p - a, p - b, p - c. 3. Multiplier ces termes : P = p * (p - a) * (p - b) * (p - c). 4. Prendre la racine carrée S = sqrt(P)."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 11 : ÉQUATIONS ET INÉQUATIONS DANS ℝ
    // -------------------------------------------------------------------------
    {
      id: "ch11",
      lessonNumber: 11,
      title: "Équations et inéquations dans ℝ",
      pages: [1, 7],
      topics: [
        "Équation dans R : égalité f(x) = g(x) à une inconnue réelle ; référentiel de l'équation",
        "Solution d'une équation, ensemble de validité Ev = Df inter Dg ; ensemble de solutions S ; équations équivalentes (même ensemble de solutions)",
        "Équations polynomiales P(x) = Q(x) : réduction à H(x) = P(x) - Q(x) = 0, factorisation par carré parfait ou racines évidentes, règle du produit nul",
        "Équations rationnelles f(x) = g(x) : ensemble de validité (dénominateurs != 0), réduction au même dénominateur ou produit en croix, élimination des solutions extérieures à Ev",
        "Équations avec valeurs absolues : type |f(x)| = |g(x)| équivalent à f(x) = g(x) ou f(x) = -g(x) ; type |x - a| = b (si b < 0, S = vide ; si b = 0, x = a ; si b > 0, x - a = b ou x - a = -b)",
        "Inéquation dans R : inégalité f(x) <= g(x) à une inconnue réelle ; ensemble de validité ; inéquations équivalentes",
        "Inéquations polynomiales : réduction à P(x) < 0 (ou > 0) par différence ; factorisation du polynôme P(x) (mise sous forme canonique pour le 2nd degré) ; tableau de signes ; détermination de l'ensemble solution",
        "Inéquations rationnelles : ensemble de validité (dénominateurs != 0) ; transformation en P(x)/Q(x) < 0 ; tableau de signes avec zéros du numérateur et doubles barres pour les valeurs interdites ; conclusion tenant compte de Ev",
        "Modélisation et résolution de problèmes concrets par des équations ou inéquations du premier et second degré"
      ],
      formulas: [
        "Ensemble de validité : Ev = Df cap Dg",
        "Équations polynomiales : P(x) = Q(x) <=> P(x) - Q(x) = 0",
        "Règle du produit nul : A * B = 0 <=> A = 0 ou B = 0",
        "Équation avec valeur absolue : |f(x)| = |g(x)| <=> f(x) = g(x) ou f(x) = -g(x)",
        "|x - a| = b (b > 0) <=> x = a + b ou x = a - b",
        "|x - a| = b (b < 0) => S = ensemble vide",
        "Inéquations polynomiales : f(x) < g(x) <=> f(x) - g(x) < 0",
        "Forme canonique pour factoriser le trinôme : n^2 - 5n + 6 = (n - 5/2)^2 - 1/4 = (n - 2)(n - 3)",
        "Inéquation rationnelle : P(x)/Q(x) > 0 avec contrainte Q(x) != 0"
      ],
      methods: [
        "Résoudre une équation polynomiale P(x) = Q(x) : 1. Transposer tous les termes dans le premier membre pour obtenir H(x) = P(x) - Q(x) = 0. 2. Factoriser H(x) (par mise en facteur commun, identités remarquables ou forme canonique). 3. Appliquer la règle du produit nul : chaque facteur est égal à 0. 4. Écrire l'ensemble des solutions réelles S.",
        "Résoudre une équation rationnelle : 1. Déterminer les contraintes sur l'inconnue en posant dénominateurs != 0 pour définir Ev. 2. Réduire au même dénominateur ou utiliser le produit en croix pour obtenir une équation polynomiale. 3. Résoudre l'équation polynomiale. 4. Comparer les solutions obtenues avec Ev et éliminer les valeurs interdites. 5. Conclure.",
        "Résoudre une équation avec valeurs absolues |f(x)| = |g(x)| : 1. Utiliser l'équivalence : f(x) = g(x) ou f(x) = -g(x). 2. Résoudre l'équation (E1) : f(x) - g(x) = 0. 3. Résoudre l'équation (E2) : f(x) + g(x) = 0. 4. L'ensemble des solutions est la réunion des solutions de (E1) et (E2).",
        "Résoudre une inéquation polynomiale du second degré : 1. Se ramener à P(x) > 0 ou P(x) < 0. 2. Factoriser P(x) à l'aide de sa forme canonique : a(x - x1)(x - x2). 3. Dresser le tableau de signes avec les lignes x - x1 et x - x2. 4. Lire les intervalles vérifiant l'inégalité demandée et écrire S.",
        "Résoudre une inéquation rationnelle : 1. Déterminer l'ensemble de validité Ev en éliminant les racines du dénominateur. 2. Transposer tous les termes pour obtenir une fraction unique comparée à 0 : N(x)/D(x) > 0 (ou < 0). 3. Factoriser le numérateur et le dénominateur. 4. Construire le tableau de signes avec les zéros du numérateur et les doubles barres pour les zéros du dénominateur. 5. Conclure par l'ensemble des intervalles solutions."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 12 : HOMOTHÉTIE
    // -------------------------------------------------------------------------
    {
      id: "ch12",
      lessonNumber: 12,
      title: "Homothétie",
      pages: [1, 14],
      topics: [
        "Définition d'une homothétie : application h_(Omega; k) de centre Omega et de rapport k (k in R*) associant à tout point M le point M' tel que vecteur(Omega M') = k * vecteur(Omega M)",
        "Cas particuliers de rapport k : k = 1 (application identité du plan) ; k = -1 (symétrie centrale de centre Omega)",
        "Conséquence directe : les points Omega, M et M' sont toujours alignés",
        "Point invariant : toute homothétie de rapport k != 1 admet un unique point invariant qui est son centre Omega",
        "Propriété fondamentale : si M' et N' sont les images respectives de deux points distincts M et N par h_(Omega; k), alors vecteur(M'N') = k * vecteur(MN)",
        "Image d'une droite et d'une demi-droite : l'image d'une droite par une homothétie est une droite qui lui est parallèle ; toute droite passant par le centre Omega est globalement invariante",
        "Image d'un segment et rapport des longueurs : l'image du segment [AB] est le segment [A'B'] et A'B' = |k| * AB",
        "Multiplication des aires : une homothétie de rapport k multiplie les aires de toute surface plane par k^2",
        "Image d'un cercle : l'image du cercle C(O, r) par h_(Omega; k) est le cercle C'(O', r') avec O' = h(O) et r' = |k| * r",
        "Propriétés de conservation : conservation de l'alignement des points, du milieu d'un segment, du parallélisme, de l'orthogonalité, de la mesure des angles orientés",
        "Caractérisation d'une homothétie par son centre A, un point B et son image C : points A, B, C alignés deux à deux distincts => unique homothétie de centre A avec vecteur(AC) = k * vecteur(AB)",
        "Caractérisation par son rapport k != 1, un point A et son image B : unique homothétie de centre O vérifiant vecteur(OB) = k * vecteur(OA)",
        "Caractérisation par deux points distincts et leurs images : si (M'N') // (MN) et vecteur(M'N') != vecteur(MN), il existe une unique homothétie transformant M en M' et N en N' ; son centre O est l'intersection des droites (MM') et (NN')"
      ],
      formulas: [
        "h_(Omega; k)(M) = M' <=> vecteur(Omega M') = k * vecteur(Omega M)",
        "Propriété fondamentale : vecteur(M'N') = k * vecteur(MN)",
        "Longueur image : A'B' = |k| * AB",
        "Aire image : Aire(Figure') = k^2 * Aire(Figure)",
        "Image de cercle : h(C(O, r)) = C'(h(O), |k| * r)",
        "Droite invariante : si Omega in (D), alors h((D)) = (D)",
        "Centre O connaissant rapport k et h(A) = B : vecteur(OB) = k * vecteur(OA) <=> vecteur(AO) = 1/(1 - k) * vecteur(AB)",
        "Alignement et conservation : h(I) = K or I milieu de [DB] => K milieu de [D'B']"
      ],
      methods: [
        "Construire l'image d'un point M par une homothétie h(Omega, k) : 1. Tracer la droite (Omega M). 2. Construire le point M' sur cette droite tel que vecteur(Omega M') = k * vecteur(Omega M) (du même côté de Omega si k > 0, de côtés opposés si k < 0).",
        "Déterminer le centre d'une homothétie transformant A en A' et B en B' : 1. Tracer la droite (AA') reliant le point A à son image A'. 2. Tracer la droite (BB') reliant le point B à son image B'. 3. Le centre O de l'homothétie est le point d'intersection des deux droites (AA') et (BB').",
        "Déterminer le rapport d'une homothétie de centre A transformant B en C : 1. Écrire la relation vectorielle vecteur(AC) = k * vecteur(AB). 2. Exprimer le rapport scalaire k en analysant le rapport des longueurs AC/AB et le sens des deux vecteurs (positif si même sens, négatif si sens contraires).",
        "Construire l'image d'une droite (D) ne passant pas par le centre O : 1. Choisir un point A appartenant à la droite (D). 2. Construire son image A' par l'homothétie : vecteur(OA') = k * vecteur(OA). 3. Tracer par le point A' la droite parallèle à (D) : cette droite est l'image (D').",
        "Résoudre un problème d'agrandissement ou réduction (situation complexe) : 1. Déterminer la plus grande dimension imposée et la dimension correspondante sur la figure initiale. 2. Calculer le rapport d'homothétie k = dimension_cible / dimension_initiale. 3. Multiplier toutes les autres dimensions linéaires par |k| et les aires par k^2. 4. Rédiger le programme de construction de la figure homothétique."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 13 : ÉTUDE DE FONCTIONS ÉLÉMENTAIRES
    // -------------------------------------------------------------------------
    {
      id: "ch13",
      lessonNumber: 13,
      title: "Étude de fonctions élémentaires",
      pages: [1, 10],
      topics: [
        "Fonction affine par intervalles : fonction définie sur un ou plusieurs intervalles disjoints par restrictions de fonctions affines ; représentation graphique = réunion de segments ou demi-droites",
        "Fonction partie entière E(x) : le plus grand entier relatif inférieur ou égal au réel x ; pour tout x réel, unique z in Z tel que z <= x < z + 1 ; représentation graphique en escalier",
        "Fonction carré x |-> x^2 : ensemble de définition R ; strictement décroissante sur ]-inf; 0], strictement croissante sur [0; +inf[ ; tableau de variation avec minimum 0 en 0 ; parabole symétrique par rapport à l'axe (Oy)",
        "Fonction valeur absolue x |-> |x| : ensemble de définition R ; strictement décroissante sur ]-inf; 0], strictement croissante sur [0; +inf[ ; minimum 0 en 0 ; deux demi-droites formant un V",
        "Fonction racine carrée x |-> sqrt(x) : ensemble de définition R+ = [0; +inf[ ; strictement croissante sur [0; +inf[ ; minimum 0 en 0",
        "Fonction inverse x |-> 1/x : ensemble de définition R* = ]-inf; 0[ U ]0; +inf[ ; strictement décroissante sur ]-inf; 0[ et strictement décroissante sur ]0; +inf[ ; hyperbole symétrique par rapport à l'origine O",
        "Fonction cube x |-> x^3 : ensemble de définition R ; strictement croissante sur R ; courbe symétrique par rapport à l'origine O",
        "Résolution graphique d'équations f(x) = k à l'aide de la courbe représentative Cf : intersection de Cf avec la droite horizontale y = k"
      ],
      formulas: [
        "Partie entière : z <= x < z + 1 <=> E(x) = z avec z in Z",
        "Fonction carré f(x) = x^2 : Df = R, décroissante sur ]-inf; 0], croissante sur [0; +inf[, minimum f(0) = 0",
        "Fonction valeur absolue f(x) = |x| : Df = R, f(x) = -x pour x <= 0, f(x) = x pour x >= 0",
        "Fonction racine carrée f(x) = sqrt(x) : Df = [0; +inf[, strictement croissante sur [0; +inf[, minimum f(0) = 0",
        "Fonction inverse f(x) = 1/x : Df = R*, strictement décroissante sur ]-inf; 0[ et strictement décroissante sur ]0; +inf[",
        "Fonction cube f(x) = x^3 : Df = R, strictement croissante sur R",
        "Équation f(x) = k : solutions = abscisses des points d'intersection de (Cf) avec la droite horizontale y = k"
      ],
      methods: [
        "Écrire une fonction avec valeur absolue sous la forme d'une fonction affine par intervalles : 1. Résoudre l'équation annulant le terme sous la valeur absolue : ax + b = 0 => x = -b/a. 2. Dresser le tableau de signes du binôme ax + b. 3. Écrire l'expression sans valeur absolue : f(x) = -(ax + b) sur ]-inf; -b/a] et f(x) = ax + b sur [-b/a; +inf[. 4. Conclure que f est affine par intervalles.",
        "Tracer la représentation graphique d'une fonction affine par intervalles : 1. Repérer chaque intervalle de définition et sa formule affine associée. 2. Calculer les coordonnées des points aux extrémités de chaque intervalle. 3. Tracer les segments de droite ou demi-droites correspondants en respectant les bornes ouvertes ou fermées.",
        "Calculer la partie entière d'un nombre réel : 1. Identifier les deux entiers relatifs consécutifs encadrant le nombre : z <= x < z + 1. 2. La partie entière est l'entier inférieur : E(x) = z (ex: E(7,8) = 7 ; E(-4,02) = -5 car -5 <= -4,02 < -4).",
        "Résoudre graphiquement une équation f(x) = k : 1. Tracer sur le repère la droite horizontale d'équation y = k. 2. Repérer les points où cette droite coupe la courbe (Cf). 3. Lire les abscisses de ces points d'intersection sur l'axe (Ox) : ce sont les solutions de l'équation."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 14 : ROTATION
    // -------------------------------------------------------------------------
    {
      id: "ch14",
      lessonNumber: 14,
      title: "Rotation",
      pages: [1, 16],
      topics: [
        "Définition d'une rotation : application r(O; alpha) de centre O et d'angle orienté de mesure principale alpha in ]-pi ; pi] qui à tout point M != O associe M' tel que OM = OM' et Mes(vecteur(OM)^, vecteur(OM')) = alpha ; et si M = O alors M' = O",
        "Éléments caractéristiques d'une rotation : le centre O et la mesure principale de l'angle alpha",
        "Cas particuliers d'angle : rotation d'angle pi (demi-tour / symétrie centrale de centre O) ; rotation d'angle pi/2 (quart de tour direct) ; rotation d'angle -pi/2 (quart de tour indirect)",
        "Point invariant : toute rotation d'angle non nul admet un unique point invariant qui est son centre O ; si l'angle est nul, chaque point du plan est invariant (identité)",
        "Propriété de la médiatrice : si r(A) = B avec centre O, alors OA = OB, donc le centre O appartient à la médiatrice du segment [AB]",
        "Propriété fondamentale de la rotation : si M' et N' sont les images respectives de deux points distincts M et N par r(O; alpha), alors M'N' = MN (conservation de la distance) et Mes(vecteur(MN)^, vecteur(M'N')) = alpha",
        "Images de figures simples par une rotation : l'image d'une droite (AB) est la droite (A'B') ; l'image d'une demi-droite [AB) est la demi-droite [A'B') ; l'image d'un segment [AB] est le segment [A'B'] de même longueur ; l'image d'un cercle C(O, R) est le cercle C'(O', R) où O' = r(O) et de même rayon R",
        "Propriétés de conservation par rotation : conservation du parallélisme, de l'orthogonalité, des mesures d'angles orientés, du milieu d'un segment, de l'alignement des points, du contact de figures sécantes ou tangentes",
        "Caractérisation par son centre A, un point B et son image C : si AB = AC et A, B, C deux à deux distincts, il existe une unique rotation de centre A transformant B en C, d'angle Mes(vecteur(AB)^, vecteur(AC))",
        "Caractérisation par deux points distincts et leurs images : si MN = M'N', M != N et vecteur(MN) != vecteur(M'N'), il existe une unique rotation r telle que r(M) = M' et r(N) = N' ; son angle est Mes(vecteur(MN)^, vecteur(M'N')) et son centre Omega est l'intersection des médiatrices des segments [MM'] et [NN']",
        "Caractérisation par la donnée de l'angle alpha, un point M et son image N : unique rotation de mesure d'angle alpha transformant M en N ; son centre Omega s'obtient comme l'intersection de la médiatrice de [MN] et de l'arc capable de mesure alpha sur [MN]"
      ],
      formulas: [
        "r(O; alpha)(M) = M' <=> OM = OM' et Mes(vecteur(OM)^, vecteur(OM')) = alpha (si M != O) ; r(O) = O",
        "Quart de tour direct : alpha = pi/2 ; quart de tour indirect : alpha = -pi/2",
        "Demi-tour : alpha = pi <=> symétrie centrale de centre O",
        "r(A) = B => OA = OB => O in médiatrice de [AB]",
        "Propriété fondamentale : M'N' = MN et Mes(vecteur(MN)^, vecteur(M'N')) = alpha",
        "Image d'un cercle : r(C(O, R)) = C'(r(O), R)",
        "Conservation de l'angle orienté : Mes(vecteur(EB)^, vecteur(EA)) = Mes(vecteur(FC)^, vecteur(FA)) si r(E)=F, r(B)=C, r(A)=A",
        "Angle de la rotation r telle que r(M)=M' et r(N)=N' : alpha = Mes(vecteur(MN)^, vecteur(M'N'))",
        "Centre Omega de la rotation : {Omega} = med([MM']) cap med([NN'])"
      ],
      methods: [
        "Construire l'image d'un point M par une rotation r(O, alpha) : 1. Tracer la demi-droite [OM). 2. Construire la demi-droite [OX) telle que Mes(vecteur(OM)^, vecteur(OX)) = alpha. 3. Au compas, reporter la longueur OM sur [OX) pour placer M' tel que OM' = OM.",
        "Déterminer le centre et l'angle d'une rotation transformant M en M' et N en N' : 1. Calculer l'angle orienté alpha = Mes(vecteur(MN)^, vecteur(M'N')). 2. Tracer la médiatrice (Delta) du segment [MM'] et la médiatrice (Delta') du segment [NN']. 3. Le centre Omega de la rotation est le point d'intersection de ces deux médiatrices.",
        "Construire l'image d'une droite (D) par une rotation : 1. Choisir deux points distincts A et B sur la droite (D). 2. Construire leurs images A' = r(A) et B' = r(B) par la rotation. 3. Tracer la droite (A'B') reliant ces deux images.",
        "Démontrer l'égalité de longueurs et d'angles orientés par rotation : 1. Identifier la rotation r (centre O, angle alpha) associant les points de la figure. 2. Noter les images des points concernés : r(A) = A', r(B) = B', r(C) = C'. 3. Appliquer la propriété fondamentale pour déduire A'B' = AB et Mes(vecteur(A'B')^, vecteur(A'C')) = Mes(vecteur(AB)^, vecteur(AC)).",
        "Déterminer un lieu géométrique par rotation : 1. Identifier que le point variable N est l'image d'un point M par une rotation fixe r(O, alpha) (N = r(M)). 2. Déterminer la figure géométrique parcourue par M (par exemple un cercle C(I, R)). 3. En déduire que N décrit l'image de cette figure par r, c'est-à-dire le cercle C'(r(I), R)."
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
 * Normalise une chaîne de caractères pour faciliter la recherche par mots-clés
 */
function normalizeQuery(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // suppression des accents
    .replace(/[^a-z0-9\s]/g, " ")     // remplacement de la ponctuation par des espaces
    .split(/\s+/)
    .filter((w) => w.length >= 3);
}

/**
 * Fonction de recherche du/des chapitre(s) pertinent(s) pour un énoncé donné.
 * Score chaque chapitre selon les correspondances textuelles sur le titre, les notions,
 * formules et méthodes.
 */
export function findMaths2ndeCChapters(query: string, limit = 3): Chapter[] {
  const queryTokens = normalizeQuery(query);
  if (queryTokens.length === 0) {
    return maths2ndeCKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[];
  }

  const scoredChapters = maths2ndeCKnowledgeBase.chapters.map((chapter) => {
    let score = 0;
    const titleTokens = normalizeQuery(chapter.title);
    const topicsTokens = normalizeQuery(chapter.topics.join(" "));
    const formulasTokens = normalizeQuery(chapter.formulas.join(" "));
    const methodsTokens = normalizeQuery(chapter.methods.join(" "));

    for (const token of queryTokens) {
      // Correspondance dans le titre (poids très fort)
      if (titleTokens.includes(token)) score += 10;
      // Correspondance dans les notions
      if (topicsTokens.includes(token)) score += 3;
      // Correspondance dans les formules
      if (formulasTokens.includes(token)) score += 2;
      // Correspondance dans les méthodes
      if (methodsTokens.includes(token)) score += 2;
    }

    // Bonus pour des termes clés très spécifiques
    if (
      (queryTokens.includes("rotation") || queryTokens.includes("quart") || queryTokens.includes("centre")) &&
      chapter.id === "ch14"
    ) score += 15;
    if (
      (queryTokens.includes("homothetie") || queryTokens.includes("agrandissement") || queryTokens.includes("reduction")) &&
      chapter.id === "ch12"
    ) score += 15;
    if (
      (queryTokens.includes("scalaire") || queryTokens.includes("kashi") || queryTokens.includes("heron") || queryTokens.includes("mediane")) &&
      chapter.id === "ch10"
    ) score += 15;
    if (
      (queryTokens.includes("statistique") || queryTokens.includes("mediane") || queryTokens.includes("variance") || queryTokens.includes("ecart") || queryTokens.includes("moyenne")) &&
      chapter.id === "ch9"
    ) score += 15;
    if (
      (queryTokens.includes("trigonometrie") || queryTokens.includes("radian") || queryTokens.includes("cosinus") || queryTokens.includes("sinus") || queryTokens.includes("tangente")) &&
      chapter.id === "ch8"
    ) score += 15;
    if (
      (queryTokens.includes("inscrit") || queryTokens.includes("capable") || queryTokens.includes("corde") || queryTokens.includes("sinus")) &&
      chapter.id === "ch7"
    ) score += 15;
    if (
      (queryTokens.includes("polynome") || queryTokens.includes("rationnelle") || queryTokens.includes("canonique") || queryTokens.includes("degre")) &&
      chapter.id === "ch6"
    ) score += 15;
    if (
      (queryTokens.includes("espace") || queryTokens.includes("tetraedre") || queryTokens.includes("cube") || queryTokens.includes("coplanaire")) &&
      chapter.id === "ch5"
    ) score += 15;
    if (
      (queryTokens.includes("variation") || queryTokens.includes("definition") || queryTokens.includes("antecedent") || queryTokens.includes("extremum")) &&
      chapter.id === "ch4"
    ) score += 15;
    if (
      (queryTokens.includes("symetrie") || queryTokens.includes("translation") || queryTokens.includes("concourante")) &&
      chapter.id === "ch3"
    ) score += 15;
    if (
      (queryTokens.includes("reel") || queryTokens.includes("irrationnel") || queryTokens.includes("absolue") || queryTokens.includes("majorant")) &&
      chapter.id === "ch2"
    ) score += 15;
    if (
      (queryTokens.includes("vecteur") || queryTokens.includes("colineaire") || queryTokens.includes("determinant") || queryTokens.includes("chasles")) &&
      chapter.id === "ch1"
    ) score += 15;
    if (
      (queryTokens.includes("inequation") || queryTokens.includes("equation") || queryTokens.includes("validite")) &&
      chapter.id === "ch11"
    ) score += 15;

    return { chapter, score };
  });

  scoredChapters.sort((a, b) => b.score - a.score);

  const matched = scoredChapters
    .filter((sc) => sc.score > 0)
    .slice(0, limit)
    .map((sc) => sc.chapter as unknown as Chapter);

  return matched.length > 0
    ? matched
    : (maths2ndeCKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[]);
}

/**
 * Construit le contexte texte enrichi à donner au solveur (leçons + notions + formules + méthodes).
 */
export function buildMaths2ndeCContext(query: string): string {
  const relevantChapters = findMaths2ndeCChapters(query, 2);

  let context = `=== LE PROF KNOWLEDGE BASE — MATHÉMATIQUES SECONDE C ===\n`;
  context += `Niveau : Seconde C (Côte d'Ivoire - École Numérique / MENA)\n`;
  context += `Requête analysée : "${query}"\n\n`;

  for (const chap of relevantChapters) {
    context += `--------------------------------------------------------\n`;
    context += `CHAPITRE [${chap.id.toUpperCase()}] : LEÇON ${chap.lessonNumber ?? ""} — ${chap.title.toUpperCase()}\n`;
    if (chap.pages) {
      context += `Pages officielles du manuel : ${chap.pages[0]} à ${chap.pages[1]}\n`;
    }
    context += `\n[NOTIONS ET CONCEPTS CLÉS] :\n`;
    for (const t of chap.topics) {
      context += `- ${t}\n`;
    }

    context += `\n[FORMULES ET THÉORÈMES DU COURS] :\n`;
    for (const f of chap.formulas) {
      context += `• ${f}\n`;
    }

    context += `\n[MÉTHODES DE RÉSOLUTION PAS À PAS] :\n`;
    for (let i = 0; i < chap.methods.length; i++) {
      context += `${i + 1}. ${chap.methods[i]}\n`;
    }
    context += `\n`;
  }

  context += `=== DIRECTIVES DE RÉSOLUTION SANS IA ===\n`;
  context += `1. Utiliser en priorité absolue les formules et théorèmes officiels cités ci-dessus.\n`;
  context += `2. Suivre scrupuleusement les étapes décrites dans les méthodes de résolution pas à pas.\n`;
  context += `3. Rédiger les justifications mathématiques complètes (citations des propriétés, théorèmes et définitions exactes).\n`;

  return context;
}
