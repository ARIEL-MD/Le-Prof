/**
 * Solveur expert pour les Probabilités, Dénombrement et Statistiques doubles en Terminale D (Côte d'Ivoire)
 * Couvre :
 * - Dénombrement (p-listes n^p, arrangements A_n^p, combinaisons C_n^p) & Probabilités (Leçon 8)
 * - Probabilités conditionnelles, formule des probabilités totales, arbre pondéré (Leçon 8)
 * - Variables aléatoires, loi de probabilité, espérance E(X), variance V(X), fonction de répartition (Leçon 8)
 * - Schéma de Bernoulli et loi binomiale B(n, p) (Leçon 8)
 * - Statistiques à deux variables : tableau à double entrée, séries marginales, point moyen G, covariance, corrélation linéaire r, droites des moindres carrés Y en X et X en Y, prévisions (Leçon 10)
 */

import { buildMathsTleDStructuredResult } from "../resultBuilder";
import { MathsTleDStructuredResult } from "../types";

export function solveProbStatsTleDExercise(statement: string, topicType: string): MathsTleDStructuredResult {
  const text = statement.toLowerCase();

  // 1. STATISTIQUES À DEUX VARIABLES & AJUSTEMENT LINÉAIRE (Leçon 10)
  if (topicType === "statistics_bivariate_regression" || /statistique|s[ée]rie double|s[ée]rie marginale|tableau de contingence|point moyen g|covariance|droite de r[ée]gression|moindres carr[ée]s|correlat/i.test(text)) {
    const isMarginal = /marginale|contingence|tableau.*double entr[ée]e|centre des classes/i.test(text);

    if (isMarginal) {
      const steps = [
        {
          title: "Dressement des séries marginales de X et de Y à partir du tableau de contingence",
          observationOrData: "Tableau de contingence avec effectifs conjoints $n_{ij}$ et effectif total $N$.",
          scientificConceptOrRule: "Les effectifs marginaux sont obtenus en sommant sur les lignes et colonnes : $$n_{i\\cdot} = \\sum_j n_{ij}, \\quad n_{\\cdot j} = \\sum_i n_{ij}, \\quad N = \\sum n_{i\\cdot} = \\sum n_{\\cdot j}$$",
          deductionOrCalculation: "- Si les variables sont groupées en classes $[a, b[$, calcul des centres de classes $x_i = \\frac{a+b}{2}$.\n- Construction des deux tableaux de séries marginales unidimensionnelles de $X$ et de $Y$.",
          conclusionOrJustification: "Séries marginales de $X$ et de $Y$ complètement explicitées.",
        },
        {
          title: "Calcul des moyennes marginales, des variances et des coordonnées du Point Moyen G",
          observationOrData: "Calculs statistiques univariés.",
          scientificConceptOrRule: "$$\\bar{X} = \\frac{1}{N} \\sum n_i x_i, \\quad \\bar{Y} = \\frac{1}{N} \\sum n_j y_j, \\quad V(X) = \\frac{1}{N} \\sum n_i x_i^2 - \\bar{X}^2, \\quad V(Y) = \\frac{1}{N} \\sum n_j y_j^2 - \\bar{Y}^2$$",
          deductionOrCalculation: "Calcul numérique direct des moyennes $\\bar{X}$, $\\bar{Y}$ et des variances marginales.",
          conclusionOrJustification: "Coordonnées du point moyen $G(\\bar{X}, \\bar{Y})$ et dispersions marginales déterminées.",
        },
        {
          title: "Calcul de la Covariance, Corrélation Linéaire r et Droite de Régression",
          observationOrData: "Évaluation de la dépendance linéaire bivariée.",
          scientificConceptOrRule: "- Covariance : $$\\text{Cov}(X, Y) = \\frac{1}{N} \\sum n_{ij} x_i y_j - \\bar{X}\\bar{Y}$$\n- Coefficient de corrélation linéaire : $$r = \\frac{\\text{Cov}(X, Y)}{\\sqrt{V(X)}\\sqrt{V(Y)}}$$\n- Droite de régression de $Y$ en $X$ : $y = ax + b$ avec $a = \\frac{\\text{Cov}(X,Y)}{V(X)}$ et $b = \\bar{Y} - a\\bar{X}$.",
          deductionOrCalculation: "- Si $|r| \\ge 0{,}87$ (ou $\\frac{\\sqrt{3}}{2}$), l'ajustement linéaire par la méthode des moindres carrés est fortement justifié.\n- Calcul des coefficients $a, b$ et prévision numérique demandée.",
          conclusionOrJustification: "Modèle de régression validé et estimation obtenue.",
        },
      ];

      return buildMathsTleDStructuredResult({
        title: "Statistiques : Tableau de Contingence, Séries Marginales et Moindres Carrés",
        themeId: "probabilites_statistiques_d",
        themeTitle: "Statistiques à deux variables",
        lessonNumber: 10,
        lessonTitle: "Statistiques à deux variables et Ajustement Linéaire",
        problemStatement: statement,
        scientificHypothesis: "La réduction aux séries marginales et le calcul de Cov(X,Y) permettent de déterminer la corrélation et la droite des moindres carrés.",
        steps,
        finalConclusion: "Le calcul complet de la covariance et du coefficient r valide l'équation de régression y = ax + b.",
        keyMathematicalTerms: ["Tableau de contingence", "Séries marginales", "Centres de classes", "Point moyen G", "Covariance", "Corrélation r", "Moindres carrés"],
        commonPitfallsAvoided: ["Veiller à pondérer les sommes par les effectifs marginaux et conjoints nij."],
      });
    }

    // Statistiques bivariées standard
    const steps = [
      {
        title: "Calcul des moyennes et coordonnées du Point Moyen G",
        observationOrData: "Série statistique double $(x_i, y_i)_{1 \\le i \\le N}$.",
        scientificConceptOrRule: "Coordonnées du point moyen $G(\\bar{X}, \\bar{Y})$ : $$\\bar{X} = \\frac{1}{N} \\sum_{i=1}^N x_i, \\quad \\bar{Y} = \\frac{1}{N} \\sum_{i=1}^N y_i$$",
        deductionOrCalculation: "Calcul numérique de $\\bar{X}$ et $\\bar{Y}$.",
        conclusionOrJustification: "Le point moyen $G(\\bar{X}, \\bar{Y})$ est le point central par lequel passent obligatoirement les droites d'ajustement.",
      },
      {
        title: "Calcul des Variances, de la Covariance et du Coefficient de Corrélation Linéaire r",
        observationOrData: "Évaluation de la qualité de la corrélation.",
        scientificConceptOrRule: "- Variances : $$V(X) = \\frac{1}{N} \\sum x_i^2 - \\bar{X}^2, \\quad V(Y) = \\frac{1}{N} \\sum y_i^2 - \\bar{Y}^2$$\n- Covariance : $$\\text{Cov}(X, Y) = \\frac{1}{N} \\sum x_i y_i - \\bar{X}\\bar{Y}$$\n- Coefficient de corrélation linéaire : $$r = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y} = \\frac{\\text{Cov}(X, Y)}{\\sqrt{V(X)}\\sqrt{V(Y)}}$$",
        deductionOrCalculation: "Calcul effectif de $r$. Condition d'ajustement : si $|r| \\ge 0{,}87$, la corrélation est forte.",
        conclusionOrJustification: "L'ajustement affine est pleinement justifié.",
      },
      {
        title: "Équation de la Droite de Régression des Moindres Carrés et Estimation",
        observationOrData: "Détermination de la droite $(D) : y = ax + b$ (de $Y$ en $X$) ou $(D') : x = a'y + b'$ (de $X$ en $Y$).",
        scientificConceptOrRule: "$$a = \\frac{\\text{Cov}(X, Y)}{V(X)}, \\quad b = \\bar{Y} - a\\bar{X} \\quad \\text{et} \\quad a' = \\frac{\\text{Cov}(X, Y)}{V(Y)}, \\quad b' = \\bar{X} - a'\\bar{Y}$$",
        deductionOrCalculation: "- Calcul des paramètres $a$ et $b$.\n- Substitution de la valeur cible de $X$ pour obtenir l'estimation de $Y$ (ou inversement pour $X$).",
        conclusionOrJustification: "Équation de la droite de régression et estimation établies.",
      },
    ];

    return buildMathsTleDStructuredResult({
      title: "Statistiques à deux variables : Covariance, Corrélation Linéaire et Droite de Régression",
      themeId: "probabilites_statistiques_d",
      themeTitle: "Statistiques à deux variables",
      lessonNumber: 10,
      lessonTitle: "Statistiques à deux variables et Ajustement Linéaire",
      problemStatement: statement,
      steps,
      finalConclusion: "L'ajustement affine par les moindres carrés y = ax + b modélise la tendance et permet de réaliser des prévisions fiables.",
      keyMathematicalTerms: ["Point moyen G", "Variance V(X)", "Covariance Cov(X,Y)", "Coefficient de corrélation r", "Droite de régression Y en X", "Estimation"],
      commonPitfallsAvoided: ["Ne pas confondre la pente de Y en X (Cov/V(X)) et la pente de X en Y (Cov/V(Y))."],
    });
  }

  // 2. DÉNOMBREMENT, PROBABILITÉS CONDITIONNELLES & LOI BINOMIALE (Leçon 8)
  const isCounting = /d[ée]nombrement|combien de codes|combien de mots|anagramme|tirage.*boules/i.test(text);
  const isBinomial = /loi binomiale|sch[ée]ma de bernoulli|r[ée]p[ée]tition|k succ[èe]s|esp[ée]rance|variance/i.test(text);

  if (isCounting && !isBinomial) {
    const steps = [
      {
        title: "Modélisation combinatoire de l'expérience et choix de l'outil de dénombrement",
        observationOrData: "Tirage ou constitution d'échantillons parmi un ensemble de $n$ éléments.",
        scientificConceptOrRule: "- Tirage simultané de $p$ éléments : Combinaisons $C_n^p = \\frac{n!}{p!(n-p)!}$ (ordre non pris en compte).\n- Tirage successif sans remise de $p$ éléments : Arrangements $A_n^p = \\frac{n!}{(n-p)!}$ (ordre pris en compte).\n- Tirage successif avec remise ou code de $p$ caractères : $p$-listes $n^p$.\n- Anagrammes de $n$ lettres distinctes : Permutations $n!$. Si des lettres sont répétées $k_1, k_2$ fois : $\\frac{n!}{k_1! k_2! \\dots}$.",
        deductionOrCalculation: "Calcul de l'univers des possibles $\\text{Card}(\\Omega)$ et des cas favorables pour chaque événement.",
        conclusionOrJustification: "Le cardinal de l'univers et le nombre de configurations sont déterminés avec exactitude.",
      },
      {
        title: "Calcul des probabilités par équiprobabilité",
        observationOrData: "Évaluation de la probabilité des événements.",
        scientificConceptOrRule: "En situation d'équiprobabilité : $$P(A) = \\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)}$$",
        deductionOrCalculation: "Calcul des rapports et simplification en fractions irréductibles.",
        conclusionOrJustification: "Probabilités exactes des événements obtenues.",
      },
    ];

    return buildMathsTleDStructuredResult({
      title: "Probabilités & Dénombrement : Combinaisons, Arrangements et Équiprobabilité",
      themeId: "probabilites_statistiques_d",
      themeTitle: "Probabilités & Variables Aléatoires",
      lessonNumber: 8,
      lessonTitle: "Dénombrement, Probabilités Conditionnelles et Loi Binomiale",
      problemStatement: statement,
      steps,
      finalConclusion: "L'identification rigoureuse de la nature du tirage (simultané, successif avec/sans remise) fournit le nombre exact de configurations et les probabilités associées.",
      keyMathematicalTerms: ["Combinaisons C_n^p", "Arrangements A_n^p", "p-listes n^p", "Permutations n!", "Équiprobabilité Card(A)/Card(Omega)"],
      commonPitfallsAvoided: ["Attention à l'ordre : le tirage simultané ne tient pas compte de l'ordre, contrairement aux tirages successifs."],
    });
  }

  // Probabilités conditionnelles, loi binomiale & variables aléatoires
  const steps = [
    {
      title: "Construction de l'arbre pondéré et formule des probabilités totales",
      observationOrData: "Expérience aléatoire à étapes dépendantes ou partition de l'univers $\\{A, \\bar{A}\\}$.",
      scientificConceptOrRule: "- Probabilité conditionnelle : $$P_A(B) = \\frac{P(A \\cap B)}{P(A)}$$\n- Formule des probabilités totales : $$P(B) = P(A \\cap B) + P(\\bar{A} \\cap B) = P(A) \\times P_A(B) + P(\\bar{A}) \\times P_{\\bar{A}}(B)$$",
      deductionOrCalculation: "Mise en place de l'arbre pondéré complet et calcul de la probabilité de l'événement cible $B$.",
      conclusionOrJustification: "Probabilité totale de l'événement déterminée avec précision.",
    },
    {
      title: "Loi de la Variable Aléatoire et Loi Binomiale B(n, p)",
      observationOrData: "Répétition de $n$ épreuves de Bernoulli identiques et indépendantes de probabilité de succès $p$.",
      scientificConceptOrRule: "La variable aléatoire $X$ suit la loi binomiale $\\mathcal{B}(n, p)$ : $$P(X = k) = C_n^k p^k (1 - p)^{n - k} \\quad (0 \\le k \\le n)$$\n- Espérance : $$E(X) = n \\times p$$\n- Variance : $$V(X) = n \\times p \\times (1 - p)$$\n- Écart-type : $$\\sigma(X) = \\sqrt{V(X)}$$",
      deductionOrCalculation: "- Calcul des probabilités pour les différentes valeurs de $k$.\n- Calcul de l'événement contraire 'au moins un succès' : $P(X \\ge 1) = 1 - P(X = 0) = 1 - (1 - p)^n$.\n- Évaluation numérique des paramètres $E(X)$, $V(X)$ et $\\sigma(X)$.",
      conclusionOrJustification: "La loi de probabilité complète et ses paramètres de dispersion sont établis.",
    },
    {
      title: "Fonction de répartition F(x) et interprétation",
      observationOrData: "Définition de la fonction de répartition cumulative.",
      scientificConceptOrRule: "$$F(x) = P(X \\le x)$$ est une fonction croissante en escalier, continue à droite, avec $\\lim_{-\\infty} F = 0$ et $\\lim_{+\\infty} F = 1$.",
      deductionOrCalculation: "Tableau des valeurs de $F(x)$ par intervalles.",
      conclusionOrJustification: "Fonction de répartition caractérisée.",
    },
  ];

  return buildMathsTleDStructuredResult({
    title: "Probabilités : Probabilités Totales, Loi Binomiale B(n, p) et Variable Aléatoire",
    themeId: "probabilites_statistiques_d",
    themeTitle: "Probabilités & Variables Aléatoires",
    lessonNumber: 8,
    lessonTitle: "Dénombrement, Probabilités Conditionnelles et Loi Binomiale",
    problemStatement: statement,
    steps,
    finalConclusion: "L'application de la formule des probabilités totales et de la loi binomiale B(n, p) résout entièrement les calculs de risques et d'espérance de gain.",
    keyMathematicalTerms: ["Probabilité conditionnelle", "Formule des probabilités totales", "Arbre pondéré", "Loi binomiale B(n, p)", "Espérance E(X) = np", "Variance V(X) = np(1-p)", "Fonction de répartition"],
    commonPitfallsAvoided: ["Attention à la formule P(au moins un succès) = 1 - P(0 succès) = 1 - (1 - p)^n."],
  });
}
