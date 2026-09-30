import { OfficialIvorianCourse } from '../../types';

export const LYCEE_MATHS_COURSES: OfficialIvorianCourse[] = [
  // ==========================================
  // SECONDE A & C - MATHÉMATIQUES (DPFC / MENA)
  // ==========================================
  {
    id: 'maths-2nde-fonctions-intervalles-vecteurs',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques (Seconde)',
    level: '2nde',
    levelLabel: 'Seconde (2nde A & 2nde C)',
    serie: '2nde_c',
    serieLabel: '2nde C / 2nde A',
    chapter: 'Généralités sur les Fonctions, Ensembles & Calcul Vectoriel',
    lessonTitle: 'Ensemble de définition, variations, parité et colinéarité de vecteurs',
    objectifs: [
      'Déterminer l\'ensemble de définition d\'une fonction numérique (fractions rationnelles et racines carrées)',
      'Étudier le sens de variation, dresser le tableau de variation et identifier les extrema d\'une fonction',
      'Démontrer la parité (paire / impaire) et interpréter graphiquement les symétries',
      'Calculer les coordonnées de vecteurs, la norme et appliquer la condition de colinéarité'
    ],
    fullCourseContent: `1. Ensembles et Intervalles :
- Notations : Intervalles ouverts, fermés, semi-ouverts.
- Valeur absolue : |x| = x si x ≥ 0, et |x| = -x si x < 0. Distance entre deux réels : d(a, b) = |b - a|.
- Propriété fondamentale : Pour r > 0, |x - a| ≤ r équivaut à x ∈ [a - r ; a + r].

2. Généralités sur les Fonctions :
- Ensemble de définition Df : Ensemble des réels x pour lesquels l'image f(x) existe.
  * Fraction A(x)/B(x) : condition B(x) ≠ 0.
  * Racine carrée √(A(x)) : condition A(x) ≥ 0.
- Sens de variation :
  * f est strictement croissante sur I si pour tous a, b ∈ I avec a < b, on a f(a) < f(b) (l'ordre est conservé).
  * f est strictement décroissante sur I si pour tous a, b ∈ I avec a < b, on a f(a) > f(b) (l'ordre est inversé).
- Parité d'une fonction :
  * Pour tout x ∈ Df, -x ∈ Df (Df symétrique par rapport à 0).
  * Si f(-x) = f(x) pour tout x, f est PAIRE (courbe symétrique par rapport à l'axe des ordonnées).
  * Si f(-x) = -f(x) pour tout x, f est IMPAIRE (courbe symétrique par rapport à l'origine du repère).

3. Vecteurs du plan :
- Dans un repère (O, i⃗, j⃗), pour A(xA, yA) et B(xB, yB) :
  * Vecteur AB⃗ : (xB - xA ; yB - yA)
  * Milieu I de [AB] : ((xA + xB)/2 ; (yA + yB)/2)
  * Norme ||AB⃗|| = √((xB - xA)² + (yB - yA)²)
- Condition de colinéarité de deux vecteurs u⃗(X ; Y) et v⃗(X' ; Y') :
  u⃗ et v⃗ sont colinéaires si et seulement si det(u⃗, v⃗) = X × Y' - X' × Y = 0.`,
    definitions: [
      {
        term: 'Ensemble de définition (Df)',
        definition: 'Ensemble de tous les nombres réels x pour lesquels l\'expression algébrique f(x) a un sens mathématique calculable.'
      },
      {
        term: 'Colinéarité',
        definition: 'Deux vecteurs u⃗ et v⃗ non nuls sont colinéaires s\'il existe un réel k tel que v⃗ = k · u⃗ (ils ont la même direction).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Condition d\'existence d\'une racine carrée',
        statement: 'L\'expression sous le radical √(P(x)) doit impérativement être supérieure ou égale à zéro (P(x) ≥ 0).'
      },
      {
        name: 'Critère de colinéarité par déterminant',
        statement: 'det(u⃗, v⃗) = X·Y\' - X\'·Y = 0 ⇔ u⃗ et v⃗ sont colinéaires.'
      }
    ],
    formulas: [
      {
        name: 'Condition de colinéarité',
        formula: 'X·Y\' - X\'·Y = 0',
        explanation: 'Produit en croix des coordonnées des vecteurs u⃗(X, Y) et v⃗(X\', Y\').',
        unitOrCondition: 'Repère du plan'
      },
      {
        name: 'Norme d\'un vecteur (Distance AB)',
        formula: 'AB = √((xB - xA)² + (yB - yA)²)',
        explanation: 'Calculée dans un repère orthonormé.',
        unitOrCondition: 'Repère orthonormé (O, i⃗, j⃗)'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer l\'ensemble de définition Df',
        procedure: '1. Identifier les dénominateurs et poser ≠ 0.\n2. Identifier les radicandes (sous √) et poser ≥ 0.\n3. Résoudre les équations ou inéquations correspondantes et écrire Df sous forme d\'intervalle ou d\'union d\'intervalles.',
        tip: 'Vérifier la symétrie de Df si l\'on doit ensuite étudier la parité.'
      },
      {
        stepNumber: 2,
        title: 'Démontrer que 3 points A, B, C sont alignés',
        procedure: '1. Calculer les coordonnées du vecteur AB⃗ = (xB - xA ; yB - yA).\n2. Calculer les coordonnées du vecteur AC⃗ = (xC - xA ; yC - yA).\n3. Calculer le déterminant X_AB × Y_AC - X_AC × Y_AB.\n4. Si det = 0, conclure que les vecteurs sont colinéaires et que les points A, B, C sont alignés.',
        tip: 'Les vecteurs ont un point commun (A), ce qui garantit l\'alignement.'
      }
    ],
    examples: [
      {
        statement: 'Soit la fonction f(x) = (2x + 1) / (x - 3). Détermine Df et calcule f(0).',
        solution: 'f(x) existe si et seulement si x - 3 ≠ 0, soit x ≠ 3.\nDonc Df = ℝ \\ {3} = ]-∞ ; 3[ ∪ ]3 ; +∞[.\nf(0) = (2(0) + 1) / (0 - 3) = -1/3.'
      }
    ],
    exercises: [
      {
        question: 'Soit u⃗(2 ; -3) et v⃗(-4 ; m). Détermine la valeur du réel m pour que les vecteurs u⃗ et v⃗ soient colinéaires.',
        correction: 'u⃗ et v⃗ sont colinéaires ⇔ det(u⃗, v⃗) = 0\n⇔ 2 × m - (-3) × (-4) = 0\n⇔ 2m - 12 = 0\n⇔ 2m = 12 => m = 6.'
      }
    ],
    evaluationSituation: {
      context: 'Sur un plan de lotissement à Bingerville rapporté à un repère orthonormé (O, i⃗, j⃗), trois bornes sont placées aux points A(1 ; 2), B(4 ; 8) et C(7 ; 14). Le géomètre veut s\'assurer que ces trois bornes sont parfaitement alignées pour poser une clôture rectiligne.',
      instructions: [
        '1. Calcule les composantes des vecteurs AB⃗ et AC⃗.',
        '2. Utilise la condition de colinéarité pour vérifier si les bornes sont alignées.'
      ],
      solutionGuide: '1. AB⃗ = (4 - 1 ; 8 - 2) = (3 ; 6).\n   AC⃗ = (7 - 1 ; 14 - 2) = (6 ; 12).\n2. Déterminant : det(AB⃗, AC⃗) = (3 × 12) - (6 × 6) = 36 - 36 = 0.\n   Les vecteurs AB⃗ et AC⃗ sont colinéaires et ont le point A en commun.\n   Conclusion : Les bornes A, B et C sont parfaitement alignées.'
    },
    examTraps: [
      'Oublier d\'exclure les valeurs qui annulent le dénominateur.',
      'Confondre parité : f(-x) = -f(x) est IMPAIRE, f(-x) = f(x) est PAIRE.'
    ],
    quickMemo: 'Df : dénominateur ≠ 0 et sous la racine ≥ 0. Colinéarité : X·Y\' - X\'·Y = 0. f paire (axe Oy), f impaire (centre O).',
    keywords: ['fonctions', 'ensemble de définition', 'parité', 'vecteurs', 'colinéarité', 'déterminant', '2nde', '2nde C']
  },

  // ==========================================
  // PREMIÈRE C & D - MATHÉMATIQUES (DPFC / MENA)
  // ==========================================
  {
    id: 'maths-1ere-second-degre-derivation-barycentres',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques (Première C & D)',
    level: '1ere',
    levelLabel: '1ère C & 1ère D',
    serie: '1ere_c_d',
    serieLabel: '1ère C & D',
    chapter: 'Polynômes du Second Degré, Dérivation & Barycentres',
    lessonTitle: 'Résolution par discriminant Δ, calcul de dérivées et applications, barycentres de points pondérés',
    objectifs: [
      'Résoudre les équations et inéquations du second degré ax² + bx + c = 0 à l\'aide du discriminant Δ',
      'Calculer les dérivées usuelles et équation de la tangente à une courbe y = f\'(a)(x - a) + f(a)',
      'Déterminer le signe de la dérivée pour en déduire les variations et extrema d\'une fonction',
      'Construire et utiliser le barycentre G d\'un système de points pondérés {(A, α), (B, β), (C, γ)}'
    ],
    fullCourseContent: `1. Trinôme du Second Degré ax² + bx + c (a ≠ 0) :
- Discriminant : Δ = b² - 4ac.
  * Si Δ > 0 : Deux racines réelles distinctes x1 = (-b - √Δ)/(2a) et x2 = (-b + √Δ)/(2a).
    Forme factorisée : P(x) = a(x - x1)(x - x2).
    Signe de P(x) : Du signe de 'a' à l'extérieur des racines, et du signe de '-a' entre les racines.
  * Si Δ = 0 : Une racine double x0 = -b / (2a).
    Forme factorisée : P(x) = a(x - x0)².
    Signe de P(x) : Toujours du signe de 'a' (nul en x0).
  * Si Δ < 0 : Pas de racine réelle. Pas de factorisation dans ℝ.
    Signe de P(x) : Toujours du signe strict de 'a' pour tout x ∈ ℝ.

2. Dérivation d'une Fonction :
- Nombre dérivé en x0 : f'(x0) = lim (h->0) [f(x0 + h) - f(x0)] / h.
- Équation de la tangente (T) au point d'abscisse a :
  (T) : y = f'(a)(x - a) + f(a).
- Dérivées des fonctions usuelles :
  * (k)' = 0
  * (x^n)' = n · x^(n-1)
  * (1/x)' = -1 / x²
  * (√x)' = 1 / (2√x)
  * (u + v)' = u' + v'
  * (k · u)' = k · u'
  * (u · v)' = u'v + uv'
  * (u / v)' = (u'v - uv') / v²
- Théorème fondamental :
  * Si f'(x) > 0 sur I, alors f est strictement croissante sur I.
  * Si f'(x) < 0 sur I, alors f est strictement décroissante sur I.
  * Si f'(x0) = 0 en changeant de signe, f admet un extremum local en x0.

3. Barycentres dans le Plan (1ère C & D) :
- Soit le système pondéré {(A, α), (B, β)} avec α + β ≠ 0.
  Le barycentre G vérifie : α GA⃗ + β GB⃗ = 0⃗.
  Formule de réduction : Pour tout point M du plan, α MA⃗ + β MB⃗ = (α + β) MG⃗.
  Position de G : AG⃗ = (β / (α + β)) AB⃗.
- Extension à 3 points {(A, α), (B, β), (C, γ)} avec α + β + γ ≠ 0 :
  α GA⃗ + β GB⃗ + γ GC⃗ = 0⃗  =>  AG⃗ = (β / (α+β+γ)) AB⃗ + (γ / (α+β+γ)) AC⃗.`,
    definitions: [
      {
        term: 'Discriminant (Δ)',
        definition: 'Nombre réel Δ = b² - 4ac associé au trinôme ax² + bx + c qui détermine le nombre de racines réelles.'
      },
      {
        term: 'Barycentre',
        definition: 'Point d\'équilibre unique G d\'un système de points pondérés dont la somme des coefficients est non nulle (∑ αi ≠ 0).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle du signe du trinôme',
        statement: 'Le trinôme ax² + bx + c est toujours du signe de "a" à l\'extérieur des racines x1 et x2, et du signe contraire de "a" à l\'intérieur.'
      },
      {
        name: 'Lien Dérivée - Sens de variation',
        statement: 'Le sens de variation d\'une fonction dérivable est donné par le signe de sa fonction dérivée f\'(x).'
      }
    ],
    formulas: [
      {
        name: 'Discriminant',
        formula: 'Δ = b² - 4ac',
        explanation: 'Formule clé de résolution du second degré.',
        unitOrCondition: 'a ≠ 0'
      },
      {
        name: 'Équation de la tangente',
        formula: 'y = f\'(a)(x - a) + f(a)',
        explanation: 'Équation cartésienne de la droite tangente en x = a.',
        unitOrCondition: 'f dérivable en a'
      },
      {
        name: 'Dérivée d\'un quotient',
        formula: '(u/v)\' = (u\'v - uv\') / v²',
        explanation: 'Dérivée de la fraction rationnelle.',
        unitOrCondition: 'v(x) ≠ 0'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Étudier les variations complètes d\'une fonction rationnelle',
        procedure: '1. Déterminer l\'ensemble de définition Df.\n2. Calculer la dérivée f\'(x) avec la formule (u/v)\'.\n3. Étudier le signe du numérateur (dénominateur v² toujours > 0).\n4. Dresser le tableau de variation avec les valeurs des extrema.',
        tip: 'Toujours justifier le signe de f\'(x) par une phrase explicite.'
      }
    ],
    examples: [
      {
        statement: 'Résous dans ℝ l\'inéquation : 2x² - 5x + 2 ≤ 0.',
        solution: 'Calcul de Δ : Δ = (-5)² - 4(2)(2) = 25 - 16 = 9 = 3² > 0.\nRacines : x1 = (5 - 3)/(2×2) = 2/4 = 1/2  et  x2 = (5 + 3)/4 = 8/4 = 2.\nLe coefficient a = 2 > 0. Le trinôme est négatif ou nul entre les racines.\nConclusion : S = [1/2 ; 2].'
      }
    ],
    exercises: [
      {
        question: 'Soit f(x) = x³ - 3x + 2. Détermine l\'équation de la tangente (T) à la courbe de f au point d\'abscisse a = 2.',
        correction: '1. Calcul de f(2) : f(2) = 2³ - 3(2) + 2 = 8 - 6 + 2 = 4.\n2. Calcul de f\'(x) : f\'(x) = 3x² - 3.\n3. f\'(2) = 3(2)² - 3 = 12 - 3 = 9.\n4. Équation de la tangente : y = f\'(2)(x - 2) + f(2)\n   y = 9(x - 2) + 4 = 9x - 18 + 4 = 9x - 14.\nConclusion : (T) : y = 9x - 14.'
      }
    ],
    evaluationSituation: {
      context: 'Un artisan fabricant de chaises en rotin à Grand-Bassam estime que son coût total de production pour x chaises fabriquées (0 ≤ x ≤ 50) est modélisé par C(x) = 0,5x² - 10x + 200 (en milliers de FCFA). Chaque chaise est vendue 20 000 FCFA (soit 20 milliers de FCFA).',
      instructions: [
        '1. Exprime la recette R(x) puis le bénéfice B(x) = R(x) - C(x).',
        '2. Calcule la dérivée B\'(x) et détermine le nombre optimal de chaises à fabriquer pour maximiser le bénéfice.',
        '3. Calcule ce bénéfice maximal.'
      ],
      solutionGuide: '1. Recette R(x) = 20x. Bénéfice B(x) = 20x - (0,5x² - 10x + 200) = -0,5x² + 30x - 200.\n2. Dérivée : B\'(x) = -0,5(2x) + 30 = -x + 30.\n   B\'(x) = 0 ⇔ -x + 30 = 0 ⇔ x = 30 chaises.\n   Comme le coefficient de x² est négatif (-0,5 < 0), la parabole est orientée vers le bas et admet un maximum en x = 30.\n3. Bénéfice maximal : B(30) = -0,5(30)² + 30(30) - 200 = -0,5(900) + 900 - 200 = -450 + 900 - 200 = 250 milliers de FCFA = 250 000 FCFA.'
    },
    examTraps: [
      'Oublier le signe "-" de "-b" dans la formule x = (-b ± √Δ)/(2a) quand b est négatif (ex : b = -5 => -b = +5).',
      'Confondre la dérivée d\'un produit (uv)\' = u\'v + uv\' avec u\'v\' (FAUX).'
    ],
    quickMemo: 'Δ = b² - 4ac. Si Δ > 0 : x = (-b ± √Δ)/(2a). Tangente : y = f\'(a)(x - a) + f(a). Quotient : (u/v)\' = (u\'v - uv\')/v².',
    keywords: ['second degré', 'discriminant', 'dérivation', 'tangente', 'variations', 'barycentre', '1ère C', '1ère D']
  },

  // ==========================================
  // TERMINALE A1 / A2 - MATHÉMATIQUES (DPFC / MENA)
  // ==========================================
  {
    id: 'maths-tle-a-statistiques-exponentielle-probabilites',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques (Terminale A1 & A2)',
    level: 'terminale',
    levelLabel: 'Terminale A (A1 / A2 - Bac)',
    serie: 'tle_a2',
    serieLabel: 'Terminale A1 & A2',
    chapter: 'Statistiques à Deux Variables (Moindres Carrés, Méthode de Mayer), Exponentielle A & Probabilités',
    lessonTitle: 'Ajustement linéaire par les moindres carrés et la droite de Mayer, exponentielles de base e et probabilités conditionnelles',
    objectifs: [
      'Calculer le point moyen G(x̄ ; ȳ) et ajuster un nuage de points par la droite de régression des moindres carrés (D) : y = ax + b',
      'Appliquer la méthode de Mayer en scindant le tableau statistique en deux sous-groupes de même taille',
      'Résoudre des équations et inéquations comportant e^x et ln(x) au niveau Terminale A',
      'Calculer des probabilités à l\'aide d\'arbres pondérés et de tableaux croisés d\'effectifs'
    ],
    fullCourseContent: `1. Statistiques à Deux Variables (Spécificité Bac Séries A1 & A2) :
- Tableau de données : Soit une série statistique double (xi, yi) de N individus.
- Point moyen G : x̄ = (1/N) ∑ xi  et  ȳ = (1/N) ∑ yi.
- Droite d'ajustement linéaire des moindres carrés : (D) : y = ax + b où :
  * a = Cov(X, Y) / V(X) = ( (1/N)∑ xi·yi - x̄·ȳ ) / ( (1/N)∑ xi² - x̄² )
  * b = ȳ - a·x̄.
  La droite passe obligatoirement par le point moyen G(x̄ ; ȳ).
- Méthode de Mayer (très demandée en Tle A2) :
  1. On range les couples (xi, yi) selon l'ordre croissant des xi.
  2. On divise la série en deux sous-groupes de même effectif (ou n et n+1 si impair).
  3. On calcule les points moyens G1(x̄1, ȳ1) et G2(x̄2, ȳ2) de chaque groupe.
  4. La droite de Mayer est la droite (G1G2) d'équation y = a·x + b avec a = (ȳ2 - ȳ1) / (x̄2 - x̄1).

2. Fonctions Exponentielle et Logarithme (Programme Tle A) :
- La fonction exponentielle f(x) = e^x :
  * Définie sur ℝ, strictement positive (e^x > 0), strictement croissante.
  * e^0 = 1, e^1 = e ≈ 2,718.
  * (e^x)' = e^x  et  (e^(ax+b))' = a · e^(ax+b).
  * Propriétés : e^(a+b) = e^a × e^b ; e^(-a) = 1 / e^a ; (e^a)^n = e^(n·a).
- La fonction logarithme népérien f(x) = ln(x) :
  * Définie sur ]0 ; +∞[, réciproque de e^x : ln(e^x) = x et e^(ln x) = x (pour x > 0).
  * ln(1) = 0, ln(e) = 1.
  * ln(a × b) = ln(a) + ln(b) ; ln(a / b) = ln(a) - ln(b) ; ln(a^n) = n · ln(a).

3. Dénombrement et Probabilités (Tle A) :
- Probabilité d'un événement A : P(A) = Nombre d'issues favorables / Nombre d'issues possibles.
- Événement contraire : P(Ā) = 1 - P(A).
- Union et Intersection : P(A ∪ B) = P(A) + P(B) - P(A ∩ B).
- Probabilité conditionnelle : P_B(A) = P(A ∩ B) / P(B) (avec P(B) > 0).`,
    definitions: [
      {
        term: 'Méthode de Mayer',
        definition: 'Méthode d\'ajustement linéaire consistant à partager le nuage de points en deux sous-groupes égaux et à tracer la droite joignant les points moyens de chaque sous-groupe.'
      },
      {
        term: 'Point moyen G',
        definition: 'Point du plan dont les coordonnées sont les moyennes arithmétiques des variables X et Y : G(x̄ ; ȳ).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Passage par le point moyen',
        statement: 'Toute droite d\'ajustement des moindres carrés passe impérativement par le point moyen G(x̄ ; ȳ).'
      },
      {
        name: 'Strict positivité de l\'exponentielle',
        statement: 'Pour tout réel x ∈ ℝ, e^x > 0. L\'équation e^x = k n\'a AUCUNE solution si k ≤ 0.'
      }
    ],
    formulas: [
      {
        name: 'Pente de la droite de Mayer',
        formula: 'a = (ȳ2 - ȳ1) / (x̄2 - x̄1)',
        explanation: 'Coefficient directeur de la droite joignant les deux points moyens G1 et G2.',
        unitOrCondition: 'x̄2 ≠ x̄1'
      },
      {
        name: 'Propriété fondamentale du logarithme',
        formula: 'ln(a · b) = ln(a) + ln(b)',
        explanation: 'Transforme les multiplications en additions.',
        unitOrCondition: 'a > 0 et b > 0'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Appliquer la méthode de Mayer pas-à-pas',
        procedure: '1. Séparer les n données en deux groupes égaux (ex: 3 premiers et 3 derniers).\n2. Calculer x̄1 et ȳ1 pour G1, puis x̄2 et ȳ2 pour G2.\n3. Calculer a = (ȳ2 - ȳ1)/(x̄2 - x̄1).\n4. Déterminer b en utilisant G1 : b = ȳ1 - a × x̄1.\n5. Écrire l\'équation de la droite (D) : y = ax + b.',
        tip: 'Garder au moins 2 décimales pour les coefficients a et b.'
      }
    ],
    examples: [
      {
        statement: 'Résous dans ℝ l\'équation : e^(2x - 1) = 5.',
        solution: 'Comme 5 > 0, on applique le logarithme népérien aux deux membres :\nln(e^(2x - 1)) = ln(5)\n2x - 1 = ln(5)\n2x = 1 + ln(5)\nx = (1 + ln 5) / 2.\nValeur approchée : x ≈ (1 + 1,609) / 2 ≈ 1,30.'
      }
    ],
    exercises: [
      {
        question: 'Le tableau suivant donne le chiffre d\'affaires Y (en millions de FCFA) d\'une librairie à Cocody selon le rang de l\'année X : \nAnnée X : 1, 2, 3, 4, 5, 6\nCA Y : 10, 14, 18, 22, 26, 30\nCalcule les coordonnées du point moyen G et donne l\'équation de la droite d\'ajustement.',
        correction: '1. x̄ = (1+2+3+4+5+6)/6 = 21/6 = 3,5.\n2. ȳ = (10+14+18+22+26+30)/6 = 120/6 = 20.\n   Point moyen G(3,5 ; 20).\n3. On remarque que les points sont parfaitement alignés : y augmente de 4 à chaque unité de x => a = 4.\n   b = ȳ - a·x̄ = 20 - 4(3,5) = 20 - 14 = 6.\n   Équation : y = 4x + 6.'
      }
    ],
    evaluationSituation: {
      context: 'Une coopérative agricole à Korhogo enregistre sa production de mangues séchées sur 4 années consécutives :\nAnnée (X) : 1 (2022), 2 (2023), 3 (2024), 4 (2025)\nProduction (Y en tonnes) : 50, 70, 95, 120\nLe directeur souhaite estimer la production pour l\'année 2027 (X = 6).',
      instructions: [
        '1. Applique la méthode de Mayer en séparant en deux sous-groupes : Groupe 1 (années 1 et 2) et Groupe 2 (années 3 et 4).',
        '2. Calcule les points moyens G1 et G2.',
        '3. Détermine l\'équation de la droite de Mayer et prévois la production en 2027.'
      ],
      solutionGuide: '1. Groupe 1 : (1 ; 50) et (2 ; 70) => G1(x̄1 = 1,5 ; ȳ1 = 60).\n   Groupe 2 : (3 ; 95) et (4 ; 120) => G2(x̄2 = 3,5 ; ȳ2 = 107,5).\n2. Pente a = (107,5 - 60) / (3,5 - 1,5) = 47,5 / 2 = 23,75.\n   Ordonnée à l\'origine b = ȳ1 - a × x̄1 = 60 - (23,75 × 1,5) = 60 - 35,625 = 24,375.\n   Droite de Mayer : y = 23,75 x + 24,375.\n3. Prévision pour 2027 (X = 6) :\n   y = 23,75 × 6 + 24,375 = 142,5 + 24,375 = 166,875 tonnes.'
    },
    examTraps: [
      'Appliquer le logarithme népérien à un nombre négatif (ln(-3) n\'existe pas !).',
      'Confondre la méthode de Mayer (séparation en deux groupes) avec la méthode des moindres carrés.'
    ],
    quickMemo: 'Mayer : G1 et G2, a = (ȳ2-ȳ1)/(x̄2-x̄1), b = ȳ1 - ax̄1. e^x > 0 toujours. ln(e^x) = x.',
    keywords: ['statistiques doubles', 'Mayer', 'moindres carrés', 'exponentielle', 'logarithme', 'probabilités', 'Terminale A', 'Tle A1', 'Tle A2']
  },

  // ==========================================
  // TERMINALE D - MATHÉMATIQUES (DPFC / MENA)
  // ==========================================
  {
    id: 'maths-tle-d-analyse-integrales-suites-complexes',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques (Terminale D)',
    level: 'terminale',
    levelLabel: 'Terminale D (Bac Scientifique)',
    serie: 'tle_d',
    serieLabel: 'Terminale D',
    chapter: 'Analyse (ln, exp), Intégration, Suites numériques & Nombres complexes D',
    lessonTitle: 'Fonctions ln et exp, théorèmes des valeurs intermédiaires (TVI), calcul intégral, suites et probabilités',
    objectifs: [
      'Étudier complètement une fonction comportant ln(x) et e^x (limites avec croissances comparées, asymptotes, TVI, tracé de courbe)',
      'Calculer des intégrales à l\'aide de primitives directes et de l\'intégration par parties (IPP)',
      'Démontrer des propriétés de suites par récurrence et calculer la limite d\'une suite géométrique',
      'Maîtriser la forme algébrique, trigonométrique et exponentielle des nombres complexes pour résoudre az² + bz + c = 0'
    ],
    fullCourseContent: `1. Analyse des Fonctions Exponentielle et Logarithme Népérien :
- Limites remarquables et Croissances comparées indispensables au Bac :
  * lim(x->+∞) (e^x / x^n) = +∞  et  lim(x->-∞) (x^n · e^x) = 0 (n ∈ ℕ*).
  * lim(x->+∞) (ln(x) / x^n) = 0  et  lim(x->0+) (x^n · ln(x)) = 0.
  * lim(x->0) (e^x - 1) / x = 1  et  lim(x->0) (ln(1 + x) / x) = 1.
- Théorème des Valeurs Intermédiaires (TVI / Corollaire de la bijection) :
  Si f est continue et strictement monotone sur [a, b], alors pour tout réel k compris entre f(a) et f(b), l'équation f(x) = k admet une unique solution α dans [a, b].

2. Calcul Intégral et Primitives :
- Intégrale de a à b : ∫[a, b] f(x) dx = [F(x)]_a^b = F(b) - F(a) où F est une primitive de f.
- Primitives usuelles :
  * u' · e^u  ->  e^u
  * u' / u  ->  ln|u|
  * u' · u^n  ->  (u^(n+1)) / (n + 1)  (n ≠ -1)
  * u' / √u  ->  2√u
- Formule d'Intégration Par Parties (IPP) :
  ∫[a, b] u'(x)·v(x) dx = [u(x)·v(x)]_a^b - ∫[a, b] u(x)·v'(x) dx.

3. Suites Numériques et Raisonnement par Récurrence :
- Raisonnement par récurrence (3 étapes obligatoires au Bac) :
  1. Initialisation : Vérifier que P(n0) est vraie pour le premier terme.
  2. Hérédité : Supposer P(n) vraie pour un entier n fixé ≥ n0, et démontrer que P(n+1) est vraie.
  3. Conclusion : D'après le principe de récurrence, P(n) est vraie pour tout n ≥ n0.
- Théorème de convergence monotone :
  * Toute suite croissante et majorée converge vers une limite finie L.
  * Toute suite décroissante et minorée converge vers une limite finie L.

4. Nombres Complexes (Programme Terminale D) :
- Forme algébrique : z = a + ib (a = Re(z), b = Im(z)). Conjugué z̄ = a - ib.
- Module : |z| = √(a² + b²).
- Forme trigonométrique et exponentielle : z = r(cos θ + i sin θ) = r · e^(iθ) avec r = |z| et θ = arg(z) [2π].
- Résolution de az² + bz + c = 0 dans ℂ : Δ = b² - 4ac. Si Δ < 0, z1,2 = (-b ± i√|Δ|) / (2a).`,
    definitions: [
      {
        term: 'Théorème des Valeurs Intermédiaires (TVI)',
        definition: 'Théorème assurant l\'existence et l\'unicité d\'une solution à f(x) = 0 sur un intervalle où f est continue et strictement monotone.'
      },
      {
        term: 'Intégration par parties (IPP)',
        definition: 'Méthode d\'intégration dérivée de la dérivée d\'un produit (uv)\' = u\'v + uv\', permettant de calculer l\'intégrale d\'un produit de fonctions.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Croissances comparées à l\'infini',
        statement: 'L\'exponentielle l\'emporte sur toute puissance de x en +∞, et toute puissance de x l\'emporte sur le logarithme en +∞.'
      },
      {
        name: 'Principe de récurrence',
        statement: 'Nécessite impérativement l\'initialisation, l\'hypothèse de récurrence, la démonstration au rang n+1, et la conclusion formelle.'
      }
    ],
    formulas: [
      {
        name: 'Intégration par parties (IPP)',
        formula: '∫_a^b u\'·v = [u·v]_a^b - ∫_a^b u·v\'',
        explanation: 'Règle ALPES pour choisir v(x) : Arcsin, Logarithme, Polynôme, Exponentielle, Sinus/Cosinus.',
        unitOrCondition: 'u et v dérivables sur [a, b]'
      },
      {
        name: 'Formule d\'Euler',
        formula: 'e^(iθ) = cos(θ) + i·sin(θ)',
        explanation: 'Passage fondamental entre trigonométrie et nombres complexes.',
        unitOrCondition: 'θ réel'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Appliquer l\'Intégration par Parties (IPP)',
        procedure: '1. Poser clairement le choix de u\'(x) et v(x) (règle ALPES : ln en premier pour v(x)).\n2. Calculer la primitive u(x) et la dérivée v\'(x).\n3. Rédiger la formule : ∫ u\'v = [uv] - ∫ uv\'.\n4. Calculer le crochet et la nouvelle intégrale plus simple.',
        tip: 'Ne pas oublier les bornes lors du calcul du crochet [u(x)v(x)]_a^b.'
      }
    ],
    examples: [
      {
        statement: 'Calcule l\'intégrale I = ∫[1, e] x · ln(x) dx.',
        solution: 'On utilise l\'IPP :\nPosons v(x) = ln(x) => v\'(x) = 1/x\nPosons u\'(x) = x => u(x) = x² / 2\nD\'après la formule d\'IPP :\nI = [ (x²/2) · ln(x) ]_1^e - ∫[1, e] (x²/2) · (1/x) dx\nI = (e²/2 · ln(e) - 0) - ∫[1, e] (x/2) dx\nI = e²/2 - [ x² / 4 ]_1^e = e²/2 - (e²/4 - 1/4) = (e² + 1) / 4.'
      }
    ],
    exercises: [
      {
        question: 'Résous dans ℂ l\'équation : z² - 2z + 4 = 0 et écris les solutions sous forme exponentielle.',
        correction: '1. Calcul de Δ : Δ = (-2)² - 4(1)(4) = 4 - 16 = -12 = (2i√3)².\n2. Racines complexes conjuguées :\n   z1 = (2 - 2i√3) / 2 = 1 - i√3\n   z2 = (2 + 2i√3) / 2 = 1 + i√3.\n3. Forme exponentielle de z2 :\n   Module : |z2| = √(1² + (√3)²) = √4 = 2.\n   Argument : cos θ = 1/2 et sin θ = √3/2 => θ = π/3 [2π].\n   Donc z2 = 2 · e^(iπ/3) et z1 = 2 · e^(-iπ/3).'
      }
    ],
    evaluationSituation: {
      context: 'Dans une plantation de palmiers à huile à Dabou, la population d\'arbres matures infectés par un champignon parasite est modélisée par l\'équation f(t) = 100 / (1 + 9·e^(-0,2t)) où t représente le temps écoulé en mois (t ≥ 0) et f(t) le nombre d\'arbres touchés.',
      instructions: [
        '1. Calcule le nombre initial d\'arbres infectés à t = 0.',
        '2. Détermine la limite de f(t) quand t tend vers +∞ et interprète le résultat.',
        '3. Calcule la dérivée f\'(t) et montre que l\'infection progresse continuellement.'
      ],
      solutionGuide: '1. À t = 0 : f(0) = 100 / (1 + 9·e^0) = 100 / (1 + 9) = 10 arbres infectés.\n2. Limite en +∞ : lim(t->+∞) e^(-0,2t) = 0 car -0,2t -> -∞.\n   Donc lim(t->+∞) f(t) = 100 / (1 + 0) = 100 arbres.\n   Interprétation : La maladie s\'étendra au maximum à 100 arbres (effet de saturation).\n3. Dérivée : f = 100/u => f\' = -100 u\' / u² avec u(t) = 1 + 9e^(-0,2t) et u\'(t) = 9(-0,2)e^(-0,2t) = -1,8e^(-0,2t).\n   f\'(t) = -100 × (-1,8e^(-0,2t)) / (1 + 9e^(-0,2t))² = 180 e^(-0,2t) / (1 + 9e^(-0,2t))² > 0 pour tout t ≥ 0.\n   Conclusion : f\'(t) > 0 donc f est strictement croissante : l\'infection progresse de façon continue jusqu\'à atteindre le seuil limite.'
    },
    examTraps: [
      'Oublier les croissances comparées et conclure à une forme indéterminée "∞/∞" évitable.',
      'Oublier d\'inverser le signe de la deuxième intégrale dans l\'IPP.'
    ],
    quickMemo: 'IPP : ∫ u\'v = [uv] - ∫ uv\'. Complexes : z = r e^(iθ). TVI : f continue et strictement monotone => solution unique.',
    keywords: ['Terminale D', 'Bac D', 'analyse', 'exponentielle', 'logarithme', 'IPP', 'intégrale', 'nombres complexes', 'suites']
  },

  // ==========================================
  // TERMINALE C & E - MATHÉMATIQUES (DPFC / MENA)
  // ==========================================
  {
    id: 'maths-tle-c-e-arithmetique-similitudes-coniques',
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques (Terminale C & E)',
    level: 'terminale',
    levelLabel: 'Terminale C & E (Bac Spécialité Maths)',
    serie: 'tle_c',
    serieLabel: 'Terminale C & E',
    chapter: 'Arithmétique dans ℤ (Bézout, Gauss, Congruences), Similitudes Directes & Coniques',
    lessonTitle: 'Division euclidienne, algorithme d\'Euclide étendu, similitudes directes planes et étude des coniques',
    objectifs: [
      'Résoudre les équations diophantiennes ax + by = c dans ℤ × ℤ par l\'algorithme d\'Euclide et les théorèmes de Bézout et Gauss',
      'Manipuler les congruences modulo n pour étudier la divisibilité et les restes de puissances a^n [p]',
      'Caractériser une similitude directe du plan (centre Ω, rapport k, angle θ) sous forme complexe z\' = az + b',
      'Déterminer les foyers, directrices, sommets et excentricité d\'une conique (ellipse, hyperbole, parabole)'
    ],
    fullCourseContent: `1. Arithmétique dans ℤ (Cœur du programme Terminale C) :
- Divisibilité et Division euclidienne : Pour tout a ∈ ℤ et b ∈ ℤ*, il existe un unique couple (q, r) d'entiers tel que a = bq + r avec 0 ≤ r < |b|.
- PGCD et Algorithme d'Euclide : Le PGCD(a, b) est le dernier reste non nul de l'algorithme des divisions successives.
- Théorème de Bézout : Deux entiers a et b sont premiers entre eux (PGCD(a, b) = 1) si et seulement s'il existe (u, v) ∈ ℤ² tels que :
  a·u + b·v = 1.
- Théorème de Gauss : Si a divise le produit bc, et si a et b sont premiers entre eux, alors a divise c.
- Équation diophantienne ax + by = c : Admet des solutions entières si et seulement si PGCD(a, b) divise c.
- Petit Théorème de Fermat : Si p est premier et si a n'est pas divisible par p, alors a^(p-1) ≡ 1 [p].

2. Similitudes Directes du Plan (Terminale C & E) :
- Définition : Une similitude directe s est la composée d'une rotation et d'une homothétie de même centre.
- Écriture complexe : z' = a·z + b avec a, b ∈ ℂ et a ≠ 0.
  * Si a = 1 : Translation de vecteur d'affixe b.
  * Si a ∈ ℝ* \\ {1} : Homothétie de rapport k = a et de centre Ω(b / (1 - a)).
  * Si |a| = 1 et a ≠ 1 : Rotation d'angle θ = arg(a) et de centre Ω(b / (1 - a)).
  * Cas général (a ∉ ℝ et |a| ≠ 1) : Similitude directe d'éléments caractéristiques :
    - Rapport : k = |a| > 0.
    - Angle : θ = arg(a) [2π].
    - Centre : Point invariant unique Ω d'affixe ω = b / (1 - a).

3. Coniques (Terminale C & E) :
- Définition monofocale : Ensemble des points M du plan tels que MF / d(M, D) = e où F est le foyer, D la directrice et e l'excentricité (e > 0).
  * Si e = 1 : Parabole.
  * Si 0 < e < 1 : Ellipse (deux foyers F et F', deux sommets principaux, équation réduite x²/a² + y²/b² = 1 avec a² = b² + c² et e = c/a).
  * Si e > 1 : Hyperbole (deux asymptotes y = ±(b/a)x, équation réduite x²/a² - y²/b² = 1 avec c² = a² + b² et e = c/a).`,
    definitions: [
      {
        term: 'Théorème de Bézout',
        definition: 'Théorème fondamental de l\'arithmétique affirmant que PGCD(a, b) = 1 si et seulement s\'il existe deux entiers relatifs u et v tels que au + bv = 1.'
      },
      {
        term: 'Similitude directe',
        definition: 'Transformation géométrique bijective qui multiplie toutes les distances par un réel strictement positif k et conserve les angles orientés.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Théorème de Gauss',
        statement: 'Si a divise bc et si a et b sont premiers entre eux, alors a divise c.'
      },
      {
        name: 'Classification des coniques par l\'excentricité e',
        statement: 'e = 1 (Parabole) ; e < 1 (Ellipse) ; e > 1 (Hyperbole).'
      }
    ],
    formulas: [
      {
        name: 'Centre d\'une similitude directe z\' = az + b',
        formula: 'ω = b / (1 - a)',
        explanation: 'Affixe du point fixe invariant Ω.',
        unitOrCondition: 'a ≠ 1'
      },
      {
        name: 'Théorème de Bézout',
        formula: 'a·u + b·v = PGCD(a, b)',
        explanation: 'Identité de Bézout obtenue par remontée de l\'algorithme d\'Euclide.',
        unitOrCondition: 'a, b ∈ ℤ*'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Résoudre une équation diophantienne ax + by = c dans ℤ²',
        procedure: '1. Calculer d = PGCD(a, b) avec l\'algorithme d\'Euclide. Vérifier que d divise c.\n2. Remonter l\'algorithme d\'Euclide pour trouver une solution particulière (x0, y0).\n3. Écrire l\'égalité a(x - x0) = -b(y - y0) et simplifier par d.\n4. Appliquer le théorème de Gauss pour obtenir la forme générale des solutions entières x et y dépendant d\'un paramètre k ∈ ℤ.',
        tip: 'Toujours vérifier la solution particulière trouvée dans l\'équation d\'origine.'
      }
    ],
    examples: [
      {
        statement: 'Détermine les éléments caractéristiques de la similitude directe s d\'écriture complexe : z\' = (1 + i√3) z + 2 - 2i√3.',
        solution: 'Ici a = 1 + i√3 et b = 2 - 2i√3.\n1. Rapport k = |a| = √(1² + (√3)²) = √4 = 2.\n2. Angle θ = arg(a) : cos θ = 1/2, sin θ = √3/2 => θ = π/3 [2π].\n3. Centre Ω : ω = b / (1 - a) = (2 - 2i√3) / (1 - (1 + i√3)) = (2 - 2i√3) / (-i√3) = (2 - 2i√3)(i√3) / 3 = (2i√3 + 6) / 3 = 2 + (2√3/3)i.\nConclusion : s est la similitude directe de centre Ω(2 + (2√3/3)i), de rapport k = 2 et d\'angle θ = π/3.'
      }
    ],
    exercises: [
      {
        question: 'Résous dans ℤ l\'équation de congruence : 7x ≡ 1 [11].',
        correction: 'Comme 7 et 11 sont premiers entre eux, 7 admet un inverse modulo 11.\nCherchons un multiple de 7 congru à 1 modulo 11 :\n7 × 1 = 7 ≡ 7 [11]\n7 × 2 = 14 ≡ 3 [11]\n7 × 3 = 21 ≡ 10 ≡ -1 [11]\n7 × 8 = 56 = 5 × 11 + 1 ≡ 1 [11].\nDonc 8 est l\'inverse de 7 modulo 11.\nEn multipliant par 8 : 8 × (7x) ≡ 8 × 1 [11] => x ≡ 8 [11].\nL\'ensemble des solutions est S = {11k + 8, k ∈ ℤ}.'
      }
    ],
    evaluationSituation: {
      context: 'Un système cryptographique bancaire à Abidjan utilise la fonction de chiffrement affine f(x) ≡ 7x + 5 [26] où les lettres de l\'alphabet sont numérotées de 0 (A) à 25 (Z). Un message intercepté porte le code chiffré y = 19.',
      instructions: [
        '1. Justifie que 7 et 26 sont premiers entre eux et détermine l\'inverse de 7 modulo 26.',
        '2. Exprime la fonction de déchiffrement x en fonction de y.',
        '3. Déchiffre le code y = 19 pour retrouver la lettre d\'origine.'
      ],
      solutionGuide: '1. PGCD(7, 26) : 26 = 7 × 3 + 5 ; 7 = 5 × 1 + 2 ; 5 = 2 × 2 + 1. Le PGCD vaut 1, donc 7 et 26 sont premiers entre eux.\n   Recherche de l\'inverse : 7 × 15 = 105 = 4 × 26 + 1 ≡ 1 [26]. L\'inverse de 7 modulo 26 est 15.\n2. Déchiffrement : y ≡ 7x + 5 [26] ⇔ y - 5 ≡ 7x [26] ⇔ x ≡ 15(y - 5) [26] ⇔ x ≡ 15y - 75 ≡ 15y + 3 [26].\n3. Pour y = 19 : x ≡ 15(19) + 3 = 285 + 3 = 288 [26].\n   288 = 11 × 26 + 2 => x = 2.\n   La lettre correspondant à 2 (avec A=0, B=1, C=2) est la lettre C.'
    },
    examTraps: [
      'Appliquer le théorème de Gauss sans avoir vérifié et mentionné explicitement que les deux nombres sont premiers entre eux.',
      'Oublier de multiplier par le conjugué lors du calcul du centre d\'une similitude.'
    ],
    quickMemo: 'Bézout : au + bv = 1. Gauss : a|bc et pgcd(a,b)=1 => a|c. Similitude z\'=az+b : k=|a|, θ=arg(a), centre b/(1-a).',
    keywords: ['Terminale C', 'Terminale E', 'arithmétique', 'Bézout', 'Gauss', 'congruences', 'similitudes directes', 'coniques', 'cryptographie']
  }
];
