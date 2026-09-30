/**
 * BASE DE CONNAISSANCES OFFICIELLE : MATHÉMATIQUES TERMINALE C
 * Source : Ministère de l'Éducation Nationale et de l'Alphabétisation - École Numérique Côte d'Ivoire
 * Conforme au programme officiel national et à l'Approche Par Compétences (APC)
 * 
 * Contient les 19 Leçons fondamentales de Terminale C :
 * 1. Limites et continuité d’une fonction
 * 2. Barycentre et Lignes de niveaux
 * 3. Dérivabilité et Étude de fonctions
 * 4. Arithmétique : Divisibilité dans Z, Nombres premiers et Numération
 * 5. Fonction Logarithme Népérien
 * 6. Nombres Complexes (Forme algébrique, trigo, exponentielle, racines n-ièmes)
 * 7. Fonctions Exponentielles et Puissances
 * 8. Nombres Complexes et Géométrie du Plan (Configurations, écritures complexes)
 * 9. Géométrie Analytique de l'Espace (Plans, droites, distances, positions relatives)
 * 10. Calcul Intégral (Primitives, IPP, Valeur moyenne, Aires)
 * 11. Arithmétique : PPCM, PGCD, Théorème de Bézout, Gauss, Équations ax+by=c
 * 12. Suites Numériques (Convergence, récurrence, suites un+1 = f(un))
 * 13. Isométries du Plan (Déplacements, antidéplacements, symétries glissées)
 * 14. Similitudes Directes du Plan (Écriture complexe, centre, rapport, angle, triangles semblables)
 * 15. Probabilités Conditionnelles et Variables Aléatoires (Arbres, Loi Binomiale, Espérance)
 * 16. Équations Différentielles (y' + ay = b, y'' + omega^2 y = 0, y'' - omega^2 y = 0)
 * 17. Coniques (Parabole, Ellipse, Hyperbole, foyers, directrices, excentricité, asymptotes)
 * 18. Statistique à deux variables (Nuage de points, covariance, corrélation r, droites des moindres carrés)
 * 19. Primitives de fonctions usuelles et composées
 */

export interface MathsTleCLesson {
  lessonNumber: number;
  theme: string;
  title: string;
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

export interface MathsTleCTheme {
  id: string;
  themeTitle: string;
  lessons: MathsTleCLesson[];
}

export interface MathsTleCKnowledgeBase {
  name: string;
  level: string;
  serie: string;
  country: string;
  version: string;
  themes: MathsTleCTheme[];
}

export const mathsTleCKnowledgeBase: MathsTleCKnowledgeBase = {
  name: "Référentiel National Mathématiques Terminale C",
  level: "Terminale",
  serie: "C",
  country: "Côte d'Ivoire (École Numérique)",
  version: "2024-2026 APC",
  themes: [
    // -------------------------------------------------------------
    // THÈME 1 : ARITHMÉTIQUE
    // -------------------------------------------------------------
    {
      id: "arithmetique",
      themeTitle: "Arithmétique dans Z",
      lessons: [
        {
          lessonNumber: 4,
          theme: "Arithmétique",
          title: "Divisibilité dans Z, Nombres premiers et Numération",
          objectives: [
            "Maîtriser la division euclidienne dans Z : a = b*q + r avec 0 <= r < |b|",
            "Manipuler les congruences modulo n : a = b [n] <=> n divise (a - b)",
            "Effectuer les changements de base de numération (binaire, octale, décimale, hexadécimale)",
            "Appliquer les critères de divisibilité par 2, 3, 4, 5, 8, 9, 10, 11, 25",
            "Décomposer un entier en produit de facteurs premiers et dénombrer ses diviseurs : (1+alpha1)...(1+alphak)",
            "Résoudre des problèmes de cryptographie (codage affine, chiffrement exponentiel modulo p)",
          ],
          keyDefinitions: {
            "Divisibilité dans Z": "b divise a (noté b|a) s'il existe k dans Z tel que a = k*b.",
            "Division euclidienne dans Z": "Pour tout a dans Z et b dans Z*, il existe un unique couple (q, r) dans Z x N tel que a = b*q + r avec 0 <= r < |b| (le reste r est TOUJOURS positif ou nul).",
            "Congruence modulo n": "a = b [n] signifie que n divise (a - b), ou encore que a et b ont le même reste dans la division euclidienne par n.",
            "Nombre premier": "Entier naturel p >= 2 possédant exactement deux diviseurs positifs : 1 et p.",
            "Petit théorème de Fermat": "Si p est un nombre premier et a non divisible par p, alors a^(p-1) = 1 [p].",
          },
          formulasAndTheorems: {
            "Division euclidienne": "a = b*q + r avec 0 <= r < |b|",
            "Nombre de diviseurs positifs": "Si n = p1^a1 * p2^a2 * ... * pk^ak, Nb_div = (a1 + 1)(a2 + 1)...(ak + 1)",
            "Écriture en base b": "x = an*b^n + an-1*b^(n-1) + ... + a1*b + a0",
            "Somme géométrique en base a": "111...1 (n fois en base a) = (a^n - 1)/(a - 1)",
            "Fermat": "a^p = a [p] et si pgcd(a,p)=1 alors a^(p-1) = 1 [p]",
          },
          methodsAndAlgorithms: [
            {
              title: "Test de primalité d'un entier n",
              description: "Vérifier si un entier naturel n est premier.",
              stepByStep: [
                "1. Calculer sqrt(n).",
                "2. Lister tous les nombres premiers p <= sqrt(n).",
                "3. Tester la divisibilité de n par chacun de ces nombres premiers.",
                "4. Si aucun ne divise n, alors n est premier.",
              ],
            },
            {
              title: "Résolution de système de congruence et codage RSA/exponentiel",
              description: "Décodage d'un message chiffré par y = x^c [p].",
              stepByStep: [
                "1. Déterminer l'inverse d de c modulo (p-1) à l'aide de l'égalité de Bézout c*d - k*(p-1) = 1.",
                "2. Élever le message codé y à la puissance d : y^d = (x^c)^d = x^(k(p-1)+1) = (x^(p-1))^k * x = 1^k * x = x [p] d'après Fermat.",
                "3. Calculer les puissances successives de y modulo p pour extraire le texte en clair.",
              ],
            },
          ],
          commonMistakesToAvoid: [
            "Le reste r d'une division euclidienne dans Z est TOUJOURS un entier naturel positif (0 <= r < |b|). Pour -127 divisé par 9 : -127 = 9*(-15) + 8 (et non pas -127 = 9*(-14) - 1).",
          ],
        },
        {
          lessonNumber: 11,
          theme: "Arithmétique",
          title: "PPCM, PGCD, Théorème de Bézout, Théorème de Gauss et Équations Diophantiennes",
          objectives: [
            "Calculer le PGCD par l'algorithme d'Euclide des divisions successives",
            "Déterminer les coefficients de Bézout (u, v) tels que a*u + b*v = pgcd(a, b)",
            "Appliquer le théorème de Gauss : Si a | bc et pgcd(a, b) = 1, alors a | c",
            "Résoudre dans Z x Z les équations diophantiennes linéaires a*x + b*y = c",
            "Résoudre les équations de congruences linéaires a*x = b [n]",
            "Utiliser la relation fondamentale : PPCM(a, b) * PGCD(a, b) = |a * b|",
          ],
          keyDefinitions: {
            "PGCD": "Plus grand diviseur commun de a et b noté PGCD(a, b) ou a ^ b.",
            "PPCM": "Plus petit multiple commun strictement positif de a et b.",
            "Nombres premiers entre eux": "a et b sont premiers entre eux ssi PGCD(a, b) = 1.",
            "Théorème de Bézout": "a et b sont premiers entre eux ssi il existe (u, v) dans Z x Z tels que a*u + b*v = 1.",
            "Théorème de Gauss": "Si a divise le produit b*c et si a et b sont premiers entre eux, alors a divise c.",
          },
          formulasAndTheorems: {
            "Relation PPCM-PGCD": "PPCM(a, b) * PGCD(a, b) = a * b (pour a, b > 0)",
            "Condition de résolubilité ax + by = c": "L'équation admet des solutions dans Z x Z ssi d = PGCD(a, b) divise c.",
            "Solutions homogènes ax + by = 0": "Si a'x + b'y = 0 avec a'^b'=1, alors x = b'*k et y = -a'*k (k dans Z).",
            "Solutions générales": "S = {(x0 + b'*k, y0 - a'*k), k dans Z} où (x0, y0) est une solution particulière.",
          },
          methodsAndAlgorithms: [
            {
              title: "Algorithme d'Euclide et remontée de Bézout",
              description: "Trouver le PGCD et une solution particulière de ax + by = d.",
              stepByStep: [
                "1. Effectuer les divisions euclidiennes successives jusqu'au dernier reste non nul r_k = d = PGCD(a, b).",
                "2. Exprimer chaque reste r_i en fonction des deux précédents : r_i = r_{i-2} - q_i * r_{i-1}.",
                "3. Remonter pas à pas pour exprimer le PGCD d sous la forme a*u0 + b*v0 = d.",
              ],
            },
            {
              title: "Résolution complète de ax + by = c dans Z x Z",
              description: "Méthode systématique en 4 étapes.",
              stepByStep: [
                "1. Calculer d = PGCD(a, b). Vérifier que d divise c (sinon S = vide).",
                "2. Simplifier l'équation par d : a'x + b'y = c' avec PGCD(a', b') = 1.",
                "3. Trouver une solution particulière (x0, y0) par l'algorithme d'Euclide ou congruence.",
                "4. Soustraire membre à membre : a'(x - x0) = -b'(y - y0) puis appliquer le théorème de Gauss pour conclure.",
              ],
            },
          ],
          commonMistakesToAvoid: [
            "Avant d'appliquer le théorème de Gauss sur a'(x - x0) = b'(y0 - y), vérifier impérativement que a' et b' sont premiers entre eux.",
          ],
        },
      ],
    },

    // -------------------------------------------------------------
    // THÈME 2 : ANALYSE & FONCTIONS NUMÉRIQUES
    // -------------------------------------------------------------
    {
      id: "analyse_fonctions",
      themeTitle: "Analyse : Limites, Dérivation, Fonctions, Intégrales & Équations Différentielles",
      lessons: [
        {
          lessonNumber: 1,
          theme: "Analyse",
          title: "Limites, Continuité et Théorème des Valeurs Intermédiaires",
          objectives: [
            "Calculer la limite d'une fonction composée lim g(f(x))",
            "Étudier les branches infinies et branches paraboliques (direction (OI) si f(x)/x -> 0, direction (OJ) si f(x)/x -> infini, asymptote oblique y = ax+b si f(x)/x -> a et f(x)-ax -> b)",
            "Définir le prolongement par continuité en x0 si lim f(x) = l finie",
            "Appliquer le Théorème des Valeurs Intermédiaires (TVI) et son corollaire de la bijection strictement monotone",
            "Encadrer une solution unique alpha par balayage ou dichotomie",
          ],
          keyDefinitions: {
            "Limite composée": "Si lim_{x->a} f(x) = b et lim_{y->b} g(y) = L, alors lim_{x->a} (g o f)(x) = L.",
            "TVI (Théorème des valeurs intermédiaires)": "Si f est continue sur [a, b], pour tout réel k compris entre f(a) et f(b), il existe au moins un c dans [a, b] tel que f(c) = k.",
            "Corollaire de la bijection": "Si f est continue et STRICTEMENT monotone sur [a, b], pour tout k compris entre f(a) et f(b), l'équation f(x) = k admet une UNIQUE solution alpha dans [a, b].",
            "Branche parabolique de direction (OI)": "lim f(x) = infini et lim f(x)/x = 0.",
            "Branche parabolique de direction (OJ)": "lim f(x) = infini et lim f(x)/x = infini.",
          },
          formulasAndTheorems: {
            "Asymptote oblique": "y = ax + b ssi lim [f(x) - (ax + b)] = 0 en +/- infini",
            "Bijection réciproque": "f: I -> f(I) continue et strictement monotone admet f^(-1) continue, strictement monotone de même sens sur f(I). Courbes symétriques par rapport à y = x.",
          },
          methodsAndAlgorithms: [
            {
              title: "Méthode de dichotomie pour encadrer alpha à 10^(-p)",
              description: "Trouver une valeur approchée de la racine f(alpha) = 0 sur [a, b].",
              stepByStep: [
                "1. Calculer le milieu m = (a + b) / 2 et évaluer f(m).",
                "2. Si f(a)*f(m) < 0, la racine est dans [a, m] ; poser b = m.",
                "3. Sinon la racine est dans [m, b] ; poser a = m.",
                "4. Répéter jusqu'à ce que l'amplitude (b - a) <= 10^(-p).",
              ],
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas oublier de vérifier la continuité ET la stricte monotonie avant d'affirmer l'unicité de la solution du TVI.",
          ],
        },
        {
          lessonNumber: 3,
          theme: "Analyse",
          title: "Dérivabilité, Théorèmes et Étude de Fonctions",
          objectives: [
            "Étudier la dérivabilité à gauche et à droite : demi-tangentes, points anguleux, demi-tangentes verticales",
            "Dériver une fonction composée : (f o g)'(x) = g'(x) * f'(g(x))",
            "Dériver la bijection réciproque : (f^(-1))'(y0) = 1 / f'(x0) avec y0 = f(x0) et f'(x0) != 0",
            "Appliquer l'Inégalité des Accroissements Finis (IAF) : m(b - a) <= f(b) - f(a) <= M(b - a) si m <= f'(x) <= M",
          ],
          keyDefinitions: {
            "Nombre dérivé": "f'(x0) = lim_{x->x0} (f(x) - f(x0)) / (x - x0).",
            "Point anguleux": "Point où les nombres dérivés à gauche et à droite existent mais sont différents (fg'(x0) != fd'(x0)).",
            "Demi-tangente verticale": "Lorsque le taux d'accroissement tend vers l'infini (+/- infini).",
            "Inégalité des accroissements finis": "Si pour tout x dans [a, b], m <= f'(x) <= M, alors m(b - a) <= f(b) - f(a) <= M(b - a).",
          },
          formulasAndTheorems: {
            "Dérivée bijection réciproque": "(f^(-1))'(y0) = 1 / f'(f^(-1)(y0)) = 1 / f'(x0)",
            "Dérivée de u^n": "(u^n)' = n * u' * u^(n-1)",
            "Dérivée de sqrt(u)": "(sqrt(u))' = u' / (2*sqrt(u))",
            "Dérivée de cos(u)": "(cos u)' = - u' * sin u",
            "Dérivée de sin(u)": "(sin u)' = u' * cos u",
            "Dérivée de tan(u)": "(tan u)' = u' * (1 + tan^2 u) = u' / cos^2 u",
          },
          methodsAndAlgorithms: [
            {
              title: "Calcul de la dérivée de la réciproque en un point",
              description: "Déterminer (f^(-1))'(y0).",
              stepByStep: [
                "1. Résoudre l'équation f(x0) = y0 pour trouver l'antécédent x0.",
                "2. Calculer f'(x) et évaluer f'(x0).",
                "3. Vérifier que f'(x0) != 0.",
                "4. Appliquer la formule (f^(-1))'(y0) = 1 / f'(x0).",
              ],
            },
          ],
          commonMistakesToAvoid: [
            "Attention : (f^(-1))'(y0) s'évalue en x0 = f^(-1)(y0) au dénominateur et NON en y0 directement.",
          ],
        },
        {
          lessonNumber: 5,
          theme: "Analyse",
          title: "Fonction Logarithme Népérien et Logarithmes de base a",
          objectives: [
            "Définir ln x comme l'unique primitive sur ]0, +infini[ de 1/x s'annulant en 1",
            "Maîtriser les propriétés algébriques : ln(ab) = ln a + ln b, ln(a/b) = ln a - ln b, ln(a^r) = r ln a",
            "Connaître les limites de référence et croissances comparées : lim_{x->+inf} (ln x)/x^alpha = 0, lim_{x->0+} x^alpha ln x = 0",
            "Résoudre des équations et inéquations logarithmiques avec ensemble de validité strict",
            "Dériver ln(u) et ln|u| : (ln |u|)' = u'/u",
          ],
          keyDefinitions: {
            "Fonction ln": "Primitive de x -> 1/x sur ]0, +infini[ s'annulant en 1. Strictement croissante, continue, bijection de ]0, +infini[ sur R.",
            "Nombre e": "Unique réel tel que ln(e) = 1 (e ~ 2,71828...).",
            "Logarithme de base a": "log_a(x) = ln(x) / ln(a) pour a > 0 et a != 1. Logarithme décimal : log(x) = ln(x) / ln(10).",
          },
          formulasAndTheorems: {
            "Limites usuelles": "lim_{x->+inf} ln x = +inf ; lim_{x->0+} ln x = -inf ; lim_{x->0} (ln(1+x))/x = 1 ; lim_{x->1} (ln x)/(x-1) = 1",
            "Croissance comparée": "lim_{x->+inf} (ln x)/x^a = 0 (a > 0) ; lim_{x->0+} x^a ln x = 0 (a > 0)",
            "Dérivée": "(ln u)' = u'/u pour u > 0 ; (ln |u|)' = u'/u pour u != 0",
            "Primitive": "Primitive de u'/u est ln|u| + C",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Toujours déterminer l'ensemble de validité AVANT de transformer une équation ou inéquation logarithmique.",
          ],
        },
        {
          lessonNumber: 7,
          theme: "Analyse",
          title: "Fonctions Exponentielles et Fonctions Puissances",
          objectives: [
            "Définir exp x comme la bijection réciproque de ln x sur R",
            "Maîtriser les propriétés : e^(a+b) = e^a * e^b, e^(-a) = 1/e^a, (e^a)^r = e^(a*r)",
            "Connaître les limites usuelles et croissances comparées : lim_{x->+inf} e^x / x^alpha = +inf, lim_{x->-inf} x^alpha e^x = 0",
            "Dériver et primitiver e^u : (e^u)' = u' * e^u, primitive de u' e^u est e^u + C",
            "Étudier les fonctions puissances x^alpha = e^(alpha * ln x) pour x > 0",
          ],
          keyDefinitions: {
            "Fonction exponentielle": "Bijection réciproque de ln : exp(x) = e^x > 0 pour tout x dans R.",
            "Fonction puissance": "Pour alpha dans R, f(x) = x^alpha = e^(alpha * ln x) définie sur ]0, +infini[.",
            "Exponentielle de base a": "a^x = e^(x * ln a) pour a > 0.",
          },
          formulasAndTheorems: {
            "Limites usuelles": "lim_{x->+inf} e^x = +inf ; lim_{x->-inf} e^x = 0 ; lim_{x->0} (e^x - 1)/x = 1",
            "Croissance comparée": "lim_{x->+inf} (e^x) / x^a = +inf (a > 0) ; lim_{x->-inf} x^n e^x = 0 (n dans N*)",
            "Dérivée": "(e^u)' = u' * e^u ; (a^x)' = (ln a) * a^x ; (x^a)' = a * x^(a-1)",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Ne pas oublier que e^x est STRICTEMENT positif pour tout x réel : e^x = -2 n'a aucune solution.",
          ],
        },
        {
          lessonNumber: 10,
          theme: "Analyse",
          title: "Calcul Intégral, Intégration par Parties et Calcul d'Aires",
          objectives: [
            "Définir l'intégrale d'une fonction continue : int_a^b f(x)dx = F(b) - F(a)",
            "Utiliser les propriétés : Relation de Chasles, Linéarité, Positivité, Inégalité de la moyenne",
            "Calculer la valeur moyenne : mu = (1 / (b - a)) * int_a^b f(x)dx",
            "Appliquer l'Intégration Par Parties (IPP) : int_a^b u(x)v'(x)dx = [u(x)v(x)]_a^b - int_a^b u'(x)v(x)dx",
            "Appliquer le changement de variable affine t = alpha*x + beta",
            "Calculer l'aire entre courbes : A = int_a^b |f(x) - g(x)| dx en unités d'aire (u.a = ||i|| * ||j||)",
          ],
          keyDefinitions: {
            "Intégrale": "Nombre réel F(b) - F(a) où F est une primitive quelconque de f sur [a, b].",
            "Valeur moyenne mu": "Hauteur du rectangle équivalent sur [a, b] : mu = 1/(b - a) * int_a^b f(t)dt.",
            "Unité d'aire (u.a)": "Aire du rectangle élémentaire formé par les vecteurs du repère : 1 u.a = ||i|| * ||j|| cm^2.",
          },
          formulasAndTheorems: {
            "IPP": "int_a^b u v' = [u v]_a^b - int_a^b u' v",
            "Chasles": "int_a^b f + int_b^c f = int_a^c f",
            "Parité": "Si f paire sur [-a, a] : int_{-a}^a f = 2 int_0^a f ; Si f impaire : int_{-a}^a f = 0",
            "Périodicité": "Si f est T-périodique : int_{a}^{a+T} f = int_0^T f",
            "Théorème fondamental": "La fonction G(x) = int_a^x f(t)dt est l'unique primitive de f sur I qui s'annule en a : G'(x) = f(x).",
          },
          methodsAndAlgorithms: [
            {
              title: "Règle ALPES pour l'intégration par parties",
              description: "Choisir u(x) selon l'ordre de priorité : Arcsin/Arctan -> Logarithme (ln) -> Polynôme -> Exponentielle -> Sinus/Cosinus.",
              stepByStep: [
                "1. Poser u(x) = fonction prioritaire selon ALPES et v'(x) = le reste.",
                "2. Calculer u'(x) par dérivation et v(x) par primitivation.",
                "3. Appliquer la formule int u v' = [uv] - int u' v.",
              ],
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas oublier de multiplier l'aire en unités d'aire par ||i|| * ||j|| pour l'obtenir en cm^2.",
          ],
        },
        {
          lessonNumber: 16,
          theme: "Analyse",
          title: "Équations Différentielles Linéaires du 1er et 2nd Ordre",
          objectives: [
            "Résoudre y' + ay = 0 (solutions y(x) = k*e^(-ax), k dans R)",
            "Résoudre y' + ay = b (solutions y(x) = k*e^(-ax) + b/a, k dans R)",
            "Résoudre y'' + omega^2 y = 0 (solutions y(x) = A*cos(omega*x) + B*sin(omega*x))",
            "Résoudre y'' - omega^2 y = 0 (solutions y(x) = A*e^(-omega*x) + B*e^(omega*x))",
            "Déterminer l'unique solution vérifiant des conditions initiales données",
          ],
          keyDefinitions: {
            "Équation différentielle": "Équation liant une fonction inconnue y et ses dérivées successives y', y''.",
            "Condition initiale": "Valeur imposée en un point (ex: y(x0) = y0, y'(x0) = z0) garantissant l'unicité de la solution.",
          },
          formulasAndTheorems: {
            "Ordre 1 sans 2nd membre y' + ay = 0": "y(x) = k * e^(-a*x), k dans R",
            "Ordre 1 avec 2nd membre y' + ay = b": "y(x) = k * e^(-a*x) + b/a, k dans R",
            "Ordre 2 harmonique y'' + w^2 y = 0": "y(x) = A * cos(w*x) + B * sin(w*x), (A, B dans R)",
            "Ordre 2 hyperbolique y'' - w^2 y = 0": "y(x) = A * e^(-w*x) + B * e^(w*x), (A, B dans R)",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Attention au signe : les solutions de y' + ay = 0 sont en e^(-ax) (signe opposé à a).",
          ],
        },
        {
          lessonNumber: 12,
          theme: "Analyse",
          title: "Suites Numériques (Convergence, Récurrence & Théorème du point fixe)",
          objectives: [
            "Démontrer par récurrence une propriété P(n)",
            "Étudier le sens de variation (un+1 - un, un+1/un, ou étude de fonction)",
            "Démontrer le théorème de convergence monotone : Toute suite croissante majorée (resp. décroissante minorée) est convergente",
            "Étudier les suites récurrentes un+1 = f(un) et déterminer leur limite par résolution de l'équation f(l) = l",
            "Appliquer les croissances comparées de suites : lim a^n, lim n^alpha, lim (ln n)/n^alpha",
          ],
          keyDefinitions: {
            "Suite convergente": "Suite admettant une limite finie l quand n -> +infini.",
            "Suite récurrente un+1 = f(un)": "Si f est continue sur un intervalle stable et un converge vers l, alors l vérifie f(l) = l.",
          },
          formulasAndTheorems: {
            "Suite géométrique": "un = u0 * q^n ; Somme = u0 * (1 - q^(n+1))/(1 - q) ; Si |q| < 1, lim un = 0",
            "Suite arithmétique": "un = u0 + n*r ; Somme = (n+1) * (u0 + un)/2",
            "Théorème des suites adjacentes": "Si (un) croît, (vn) décroît et lim (vn - un) = 0, alors elles convergent vers la même limite.",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Pour les suites un+1 = f(un), vérifier impérativement que la limite l appartient à l'intervalle d'étude de la suite.",
          ],
        },
      ],
    },

    // -------------------------------------------------------------
    // THÈME 3 : GÉOMÉTRIE DU PLAN & DE L'ESPACE
    // -------------------------------------------------------------
    {
      id: "geometrie",
      themeTitle: "Géométrie : Barycentres, Lignes de niveaux, Nombres Complexes, Isométries, Similitudes, Coniques & Espace",
      lessons: [
        {
          lessonNumber: 2,
          theme: "Géométrie",
          title: "Barycentre de n points pondérés et Lignes de Niveaux",
          objectives: [
            "Définir le barycentre G de {(Ai, alphai)} : Sum alphai GAi = 0 ssi Sum alphai != 0",
            "Utiliser la propriété de réduction vectorielle : Sum alphai MAi = (Sum alphai) MG",
            "Appliquer le barycentre partiel / associativité",
            "Déterminer les lignes de niveau scalaires : Sum alphai MAi^2 = k (cercle de centre G ou vide)",
            "Déterminer la ligne de niveau MA / MB = k (médiatrice si k=1, cercle de diamètre [G1 G2] si k != 1)",
            "Déterminer la ligne de niveau d'angle orienté Mes(MA, MB) = theta [pi] ou [2pi] (arcs de cercles capables)",
          ],
          keyDefinitions: {
            "Barycentre": "Unique point G tel que Sum alphai GAi = 0 (existe ssi Sum alphai != 0).",
            "Isobarycentre": "Barycentre lorsque tous les coefficients sont égaux (centre de gravité pour 3 points).",
            "Ligne de niveau": "Ensemble des points M vérifiant f(M) = k.",
          },
          formulasAndTheorems: {
            "Réduction vectorielle": "Sum alphai MAi = (Sum alphai) MG",
            "Réduction quadratique (Leibniz)": "Sum alphai MAi^2 = (Sum alphai) MG^2 + Sum alphai GAi^2",
            "Ligne MA/MB = k (k != 1)": "Cercle de diamètre [G1 G2] avec G1 = bar{(A, 1), (B, k)} et G2 = bar{(A, 1), (B, -k)}",
            "Ligne MA^2 - MB^2 = k": "Droite perpendiculaire à (AB) en un point H projeté orthogonal.",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Si Sum alphai = 0, le barycentre n'existe PAS : le vecteur Sum alphai MAi est alors constant et indépendant de M.",
          ],
        },
        {
          lessonNumber: 6,
          theme: "Géométrie & Algèbre",
          title: "Nombres Complexes (Algèbre, Forme Trigonométrique, Racines n-ièmes)",
          objectives: [
            "Calculer les formes algébriques, modules et arguments de nombres complexes",
            "Résoudre dans C les équations du 2nd degré az^2 + bz + c = 0 via le calcul de racine carrée de Delta = x^2 - y^2 + 2ixy",
            "Appliquer les formules de Moivre (cos theta + i sin theta)^n = cos(n theta) + i sin(n theta) et d'Euler",
            "Calculer les racines n-ièmes d'un complexe z0 = R e^(i theta) : zk = R^(1/n) e^(i (theta + 2k pi)/n)",
            "Linéariser des polynômes trigonométriques via les formules d'Euler cos^n x et sin^n x",
          ],
          keyDefinitions: {
            "Nombre complexe": "z = a + ib avec i^2 = -1 (a = Re(z), b = Im(z)).",
            "Module": "|z| = sqrt(a^2 + b^2) = sqrt(z * z_bar).",
            "Argument": "theta = arg(z) tel que cos theta = a/|z| et sin theta = b/|z|.",
            "Formule d'Euler": "cos theta = (e^(i theta) + e^(-i theta))/2 ; sin theta = (e^(i theta) - e^(-i theta))/(2i).",
          },
          formulasAndTheorems: {
            "Moivre": "(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta) = e^(i n theta)",
            "Racines n-ièmes": "zk = sqrt[n]{R} * exp(i * (theta + 2k*pi)/n) pour k in {0, 1, ..., n-1}",
            "Racine carrée complexe": "x^2 + y^2 = |Delta|, x^2 - y^2 = Re(Delta), 2xy = Im(Delta)",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Ne jamais utiliser le symbole radical sqrt() sur un nombre complexe non réel : écrire 'soit delta = x + iy tel que delta^2 = Delta'.",
          ],
        },
        {
          lessonNumber: 8,
          theme: "Géométrie & Algèbre",
          title: "Nombres Complexes et Géométrie du Plan",
          objectives: [
            "Interpréter géométriquement : |zB - zA| = AB, arg(zB - zA) = (u, AB) [2pi], arg((zD - zC)/(zB - zA)) = (AB, CD) [2pi]",
            "Démontrer l'alignement : (zC - zA)/(zB - zA) dans R*",
            "Démontrer l'orthogonalité : (zD - zC)/(zB - zA) dans i R*",
            "Démontrer la cocyclicité (points sur un même cercle) : le birapport ((zC-zA)/(zC-zB)) / ((zD-zA)/(zD-zB)) dans R*",
            "Caractériser les triangles particuliers : isocèle ((zC-zA)/(zB-zA) = e^(+/- i alpha)), équilatéral (e^(+/- i pi/3)), rectangle isocèle (+/- i)",
          ],
          keyDefinitions: {
            "Affixe": "Nombre complexe z_M = x + iy associé au point M(x, y).",
            "Birapport": "Quotient ((zC - zA)/(zC - zB)) : ((zD - zA)/(zD - zB)) réel ssi A, B, C, D sont cocycliques ou alignés.",
          },
          formulasAndTheorems: {
            "Angle de vecteurs": "Mes(AB, CD) = arg((zD - zC)/(zB - zA)) [2pi]",
            "Triangle rectangle en A": "(zC - zA)/(zB - zA) = b*i avec b dans R*",
            "Triangle équilatéral direct": "(zC - zA)/(zB - zA) = e^(i pi/3) = 1/2 + i sqrt(3)/2",
            "Triangle rectangle isocèle en A": "(zC - zA)/(zB - zA) = i ou -i",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Attention à l'ordre des affixes : arg((zC - zA)/(zB - zA)) correspond à l'angle (AB, AC) et NON (AC, AB).",
          ],
        },
        {
          lessonNumber: 13,
          theme: "Géométrie",
          title: "Isométries du Plan (Déplacements, Antidéplacements, Symétries Glissées)",
          objectives: [
            "Classer les isométries : Déplacements (conservent les angles orientés : translation, rotation) vs Antidéplacements (inversent les angles : symétrie orthogonale, symétrie glissée)",
            "Caractériser par les points invariants : Id_P (plan entier), S_(D) (droite D), r_(A, theta) (singleton {A}), translation/symétrie glissée (vide)",
            "Décomposer une translation et une rotation en composée de deux symétries orthogonales s_(D2) o s_(D1)",
            "Décomposer canoniquement une symétrie glissée : f = t_u o s_(D) = s_(D) o t_u (avec u vecteur directeur de D)",
            "Déterminer l'axe et le vecteur d'une symétrie glissée à partir de deux points et de leurs images (D passe par les milieux de [MM'] et [NN'])",
          ],
          keyDefinitions: {
            "Isométrie": "Transformation du plan conservant les distances : M'N' = MN.",
            "Déplacement": "Isométrie conservant les angles orientés (translation t_u ou rotation r_(O, theta)).",
            "Antidéplacement": "Isométrie transformant tout angle orienté en son opposé (symétrie orthogonale S_(D) ou symétrie glissée).",
            "Symétrie glissée": "Composée commutative d'une symétrie orthogonale S_(D) et d'une translation de vecteur u directeur de (D).",
          },
          formulasAndTheorems: {
            "Composée d'axes parallèles": "S_(D2) o S_(D1) = t_{2 H1H2}",
            "Composée d'axes sécants en O": "S_(D2) o S_(D1) = r(O, 2*alpha) avec alpha = Mes(u1, u2)",
            "Axes d'une symétrie glissée": "L'axe (D) est la droite reliant les milieux I de [AA'] et J de [BB'] ; le vecteur vaut u = 1/2 AA'' où A'' = f(f(A)).",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Dans une symétrie glissée f = t_u o S_(D), le vecteur u doit IMPÉRATIVEMENT être parallèle à l'axe (D).",
          ],
        },
        {
          lessonNumber: 14,
          theme: "Géométrie",
          title: "Similitudes Directes du Plan",
          objectives: [
            "Caractériser par l'écriture complexe : z' = a*z + b (a dans C*, b dans C)",
            "Déterminer les éléments caractéristiques : Rapport k = |a|, Angle theta = arg(a), Centre Omega d'affixe omega = b / (1 - a) si a != 1",
            "Décomposition canonique : s = h(Omega, k) o r(Omega, theta) = r(Omega, theta) o h(Omega, k)",
            "Déterminer l'unique similitude directe transformant A en C et B en D",
            "Étudier les configurations de triangles directement semblables et les suites géométriques de points associées",
          ],
          keyDefinitions: {
            "Similitude directe": "Transformation du plan multipliant les distances par k > 0 et conservant les angles orientés : z' = a*z + b.",
            "Éléments caractéristiques": "Centre Omega (point fixe), rapport k = |a|, angle theta = arg(a).",
            "Triangles directement semblables": "Deux triangles ABC et A'B'C' de même sens tels que A'B'/AB = A'C'/AC = B'C'/BC et angles orientés homologues égaux.",
          },
          formulasAndTheorems: {
            "Écriture complexe": "z' = k * e^(i theta) * (z - omega) + omega",
            "Multiplication des aires": "Aire(s(Figure)) = k^2 * Aire(Figure)",
            "Détermination par 2 points": "a = (zD - zC) / (zB - zA) et b = zC - a*zA",
          },
          methodsAndAlgorithms: [
            {
              title: "Construction géométrique du centre d'une similitude s(A)=C et s(B)=D",
              description: "Trouver le centre Omega sans calcul analytique.",
              stepByStep: [
                "1. Soit K le point d'intersection des droites (AB) et (CD).",
                "2. Tracer le cercle circonscrit (C1) au triangle KAC.",
                "3. Tracer le cercle circonscrit (C2) au triangle KBD.",
                "4. Le centre Omega est le second point d'intersection de (C1) et (C2) distinct de K.",
              ],
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas oublier que les aires sont multipliées par k^2 (et non par k).",
          ],
        },
        {
          lessonNumber: 17,
          theme: "Géométrie",
          title: "Les Coniques (Parabole, Ellipse, Hyperbole)",
          objectives: [
            "Définition monofocale : MF / MH = e (e=1 parabole, 0<e<1 ellipse, e>1 hyperbole)",
            "Équation réduite de la parabole : y^2 = 2px (foyer F(p/2, 0), directrice x = -p/2)",
            "Équation réduite de l'ellipse : x^2/a^2 + y^2/b^2 = 1 (a > b, c^2 = a^2 - b^2, e = c/a, foyers F(+/- c, 0), directrices x = +/- a^2/c)",
            "Équation réduite de l'hyperbole : x^2/a^2 - y^2/b^2 = 1 (c^2 = a^2 + b^2, e = c/a, asymptotes y = +/- (b/a) x)",
            "Reconnaître et réduire une conique de forme générale Ax^2 + By^2 + Cx + Dy + E = 0 par mise sous forme canonique",
          ],
          keyDefinitions: {
            "Conique": "Ensemble des points M tels que MF = e * d(M, D).",
            "Excentricité e": "Paramètre mesurant l'aplatissement : e = 1 (parabole), e < 1 (ellipse), e > 1 (hyperbole).",
            "Axe focal": "Axe de symétrie passant par le foyer F et perpendiculaire à la directrice (D).",
          },
          formulasAndTheorems: {
            "Parabole y^2 = 2px": "Foyer F(p/2, 0) ; Directrice x = -p/2 ; Sommet (0,0)",
            "Ellipse x^2/a^2 + y^2/b^2 = 1 (a > b)": "c = sqrt(a^2 - b^2) ; e = c/a < 1 ; F(+/- c, 0) ; Sommets (+/- a, 0) et (0, +/- b) ; Directrices x = +/- a^2/c",
            "Hyperbole x^2/a^2 - y^2/b^2 = 1": "c = sqrt(a^2 + b^2) ; e = c/a > 1 ; F(+/- c, 0) ; Sommets (+/- a, 0) ; Asymptotes y = +/- (b/a)x ; Directrices x = +/- a^2/c",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Pour l'ellipse, c^2 = a^2 - b^2 alors que pour l'hyperbole, c^2 = a^2 + b^2.",
          ],
        },
        {
          lessonNumber: 9,
          theme: "Géométrie de l'Espace",
          title: "Géométrie Analytique de l'Espace",
          objectives: [
            "Déterminer l'équation cartésienne d'un plan ax + by + cz + d = 0 à partir d'un point et d'un vecteur normal n(a, b, c)",
            "Calculer la distance d'un point A(x0, y0, z0) au plan (P) : d(A, P) = |ax0 + by0 + cz0 + d| / sqrt(a^2 + b^2 + c^2)",
            "Établir la représentation paramétrique d'une droite (D) : x = x0 + at, y = y0 + bt, z = z0 + ct",
            "Étudier les positions relatives de droites et plans (sécants, parallèles, orthogonaux, droites coplanaires ou non coplanaires)",
          ],
          keyDefinitions: {
            "Vecteur normal à un plan": "Vecteur non nul n orthogonal à deux vecteurs directeurs non colinéaires du plan.",
            "Distance point-plan": "Longueur du segment [AH] où H est le projeté orthogonal de A sur (P).",
          },
          formulasAndTheorems: {
            "Équation de plan": "a(x - xA) + b(y - yA) + c(z - zA) = 0",
            "Distance point-plan": "d(A, P) = |a xA + b yA + c zA + d| / sqrt(a^2 + b^2 + c^2)",
            "Orthogonalité plans": "(P) perp (Q) ssi n_P . n_Q = 0 <=> aa' + bb' + cc' = 0",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Ne pas confondre vecteur directeur d'une droite u(a, b, c) et vecteur normal d'un plan n(a, b, c).",
          ],
        },
      ],
    },

    // -------------------------------------------------------------
    // THÈME 4 : STATISTIQUES & PROBABILITÉS
    // -------------------------------------------------------------
    {
      id: "probabilites_statistiques",
      themeTitle: "Probabilités & Statistiques à deux variables",
      lessons: [
        {
          lessonNumber: 15,
          theme: "Probabilités",
          title: "Probabilités Conditionnelles, Variables Aléatoires et Loi Binomiale",
          objectives: [
            "Calculer la probabilité conditionnelle : P_B(A) = P(A inter B) / P(B)",
            "Appliquer la formule des probabilités totales : P(A) = Sum P(A inter Bi) = Sum P_Bi(A) * P(Bi)",
            "Tester l'indépendance de deux événements : P(A inter B) = P(A) * P(B)",
            "Déterminer la loi d'une variable aléatoire discrète, son espérance E(X) = Sum xi pi, sa variance V(X) = E(X^2) - (E(X))^2 et son écart-type sigma(X) = sqrt(V(X))",
            "Identifier une loi binomiale B(n, p) : P(X = k) = C_n^k * p^k * (1 - p)^(n-k) avec E(X) = n*p et V(X) = n*p*(1-p)",
            "Tracer la fonction de répartition en escalier F(x) = P(X <= x)",
          ],
          keyDefinitions: {
            "Probabilité conditionnelle": "Probabilité de A sachant B : P_B(A) = P(A inter B) / P(B) pour P(B) > 0.",
            "Partition de l'univers": "Famille d'événements deux à deux disjoints dont la réunion forme l'univers Omega tout entier.",
            "Loi binomiale B(n, p)": "Loi du nombre de succès k lors de n répétitions indépendantes d'une même épreuve de Bernoulli de paramètre p.",
          },
          formulasAndTheorems: {
            "Formule de Bayes": "P_A(B) = (P_B(A) * P(B)) / P(A)",
            "Espérance": "E(X) = Sum xi * P(X = xi)",
            "Variance (Koenig-Huygens)": "V(X) = Sum xi^2 * P(X = xi) - (E(X))^2",
            "Loi Binomiale": "P(X = k) = C_n^k * p^k * (1 - p)^(n - k) ; E(X) = n*p ; V(X) = n*p*(1 - p)",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Ne pas confondre événements incompatibles (A inter B = vide) et événements indépendants (P(A inter B) = P(A)*P(B)).",
          ],
        },
        {
          lessonNumber: 18,
          theme: "Statistiques",
          title: "Statistique à deux variables et Ajustement Linéaire",
          objectives: [
            "Calculer les moyennes x_bar et y_bar et déterminer le point moyen G(x_bar, y_bar)",
            "Calculer la covariance : Cov(X, Y) = (1/n) * Sum xi yi - x_bar * y_bar",
            "Calculer le coefficient de corrélation linéaire : r = Cov(X, Y) / (sigma_X * sigma_Y) et l'interpréter (|r| >= 0,87 indique une forte corrélation linéaire)",
            "Déterminer la droite de régression de Y en X : y = a*x + b avec a = Cov(X, Y) / V(X) et b = y_bar - a * x_bar",
            "Déterminer la droite de régression de X en Y : x = a'*y + b' avec a' = Cov(X, Y) / V(Y) et b' = x_bar - a' * y_bar",
            "Effectuer des estimations fiables à partir de l'équation d'ajustement",
          ],
          keyDefinitions: {
            "Point moyen G": "Point du nuage de coordonnées (x_bar, y_bar) par lequel passent obligatoirement les droites de régression.",
            "Covariance Cov(X, Y)": "Moyenne des produits centrés mesurant la variation simultanée des deux variables.",
            "Coefficient de corrélation linéaire r": "Nombre sans dimension compris entre -1 et 1 mesurant la qualité de l'ajustement affine.",
          },
          formulasAndTheorems: {
            "Covariance": "Cov(X, Y) = (1/n) * Sum xi*yi - x_bar * y_bar",
            "Variance": "V(X) = (1/n) * Sum xi^2 - (x_bar)^2",
            "Corrélation": "r = Cov(X, Y) / (sqrt(V(X)) * sqrt(V(Y)))",
            "Droite de régression Y en X": "y = a*x + b avec a = Cov(X, Y) / V(X) et b = y_bar - a * x_bar",
            "Relation entre pentes et r": "a * a' = r^2",
          },
          methodsAndAlgorithms: [],
          commonMistakesToAvoid: [
            "Pour la droite de régression de Y en X, on divise la covariance par V(X) ; pour la droite de X en Y, on divise par V(Y).",
          ],
        },
      ],
    },
  ],
};
