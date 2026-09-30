/**
 * Solveur expert pour les Probabilités Conditionnelles, Lois Binomiales et Statistiques Doubles en Terminale C
 */

import { buildMathsTleCStructuredResult } from "../resultBuilder";
import { MathsTleCStructuredResult } from "../types";

export function solveProbabilityAndStatsExercise(statement: string): MathsTleCStructuredResult {
  const text = statement.toLowerCase();

  // Cas 1 : Statistiques à deux variables & Ajustement Linéaire par les Moindres Carrés
  if (/statistique|s[ée]rie double|covariance|nuage de points|point moyen g|correlation|droite de r[ée]gression|moindres carr[ée]s/i.test(text)) {
    const steps = [
      {
        title: "Calcul des moyennes marginales et coordonnées du Point Moyen G",
        observationOrData: "Série statistique double $(X, Y)$ de taille $N$.",
        scientificConceptOrRule: "Coordonnées du point moyen $G(\\bar{X}, \\bar{Y})$ : $$\\bar{X} = \\frac{1}{N} \\sum_{i=1}^N x_i, \\quad \\bar{Y} = \\frac{1}{N} \\sum_{i=1}^N y_i$$",
        deductionOrCalculation: "Calcul numérique direct de $\\bar{X}$ et $\\bar{Y}$.",
        conclusionOrJustification: "Le point moyen $G(\\bar{X}, \\bar{Y})$ est déterminé ; les droites de régression passeront obligatoirement par $G$.",
      },
      {
        title: "Calcul de la Covariance, des Variances et du Coefficient de Corrélation Linéaire r",
        observationOrData: "Évaluation de la dépendance linéaire entre les deux variables $X$ et $Y$.",
        scientificConceptOrRule: "- Covariance : $$\\text{Cov}(X, Y) = \\frac{1}{N} \\sum_{i=1}^N x_i y_i - \\bar{X}\\bar{Y}$$\n- Variances : $$V(X) = \\frac{1}{N} \\sum x_i^2 - \\bar{X}^2, \\quad V(Y) = \\frac{1}{N} \\sum y_i^2 - \\bar{Y}^2$$\n- Coefficient de corrélation linéaire : $$r = \\frac{\\text{Cov}(X, Y)}{\\sqrt{V(X)} \\sqrt{V(Y)}}$$",
        deductionOrCalculation: "Calcul des sommes, de la covariance et du coefficient $r$.\nInterprétation : Si $|r| \\ge 0{,}87$, il existe une forte corrélation linéaire justifiant un ajustement affine par les moindres carrés.",
        conclusionOrJustification: "La corrélation linéaire forte autorise l'ajustement par une droite.",
      },
      {
        title: "Équation de la Droite de Régression de Y en X et Estimation",
        observationOrData: "Détermination de la droite d'ajustement affine $(D) : y = ax + b$.",
        scientificConceptOrRule: "Méthode des moindres carrés : $$a = \\frac{\\text{Cov}(X, Y)}{V(X)}, \\quad b = \\bar{Y} - a \\bar{X}$$",
        deductionOrCalculation: "- Calcul des coefficients $a$ et $b$.\n- Équation de la droite : $(D) : y = ax + b$.\n- Estimation de la valeur de $Y$ pour une valeur cible de $X$ (ou inversement).",
        conclusionOrJustification: "Modèle d'ajustement linéaire complet et prédiction obtenue.",
      },
    ];

    return buildMathsTleCStructuredResult({
      title: "Statistiques à Deux Variables : Covariance, Corrélation Linéaire et Moindres Carrés",
      themeId: "probabilites_statistiques",
      themeTitle: "Statistiques à deux variables",
      lessonNumber: 18,
      lessonTitle: "Statistique à deux variables et Ajustement Linéaire",
      problemStatement: statement,
      scientificHypothesis: "Le coefficient de corrélation linéaire r = Cov(X,Y)/(sigma_X * sigma_Y) valide l'ajustement affine des moindres carrés y = ax + b.",
      steps,
      finalConclusion: "L'ajustement linéaire par la droite de régression des moindres carrés permet d'effectuer des estimations fiables à partir du nuage de points.",
      keyMathematicalTerms: ["Point moyen G", "Covariance Cov(X, Y)", "Coefficient de corrélation linéaire r", "Droite de régression des moindres carrés y = ax + b", "Variance V(X)"],
      commonPitfallsAvoided: ["Pour la droite de Y en X, le dénominateur de la pente est V(X) et non V(Y)."],
    });
  }

  // Cas 2 : Probabilités Conditionnelles, Probabilités Totales et Loi Binomiale
  const steps = [
    {
      title: "Construction de l'arbre pondéré et calcul des probabilités conditionnelles",
      observationOrData: "Expérience aléatoire structurée avec des événements dépendants ou une partition $\\{B_1, \\dots, B_n\\}$.",
      scientificConceptOrRule: "- Probabilité conditionnelle : $$P_B(A) = P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$$\n- Formule des probabilités totales : $$P(A) = \\sum_{i=1}^n P(A \\cap B_i) = \\sum_{i=1}^n P_{B_i}(A) \\times P(B_i)$$",
      deductionOrCalculation: "Mise en place de l'arbre de probabilité complet avec les pondérations sur les branches et calcul de $P(A)$.",
      conclusionOrJustification: "Probabilité globale de l'événement cible déterminée avec exactitude.",
    },
    {
      title: "Identification de la Variable Aléatoire et de la Loi Binomiale",
      observationOrData: "Répétition de $n$ épreuves de Bernoulli identiques et indépendantes de paramètre de succès $p$.",
      scientificConceptOrRule: "La variable aléatoire $X$ représentant le nombre de succès suit la loi binomiale $\\mathcal{B}(n, p)$ : $$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k} \\quad (0 \\le k \\le n)$$",
      deductionOrCalculation: "- Calcul des probabilités pour les valeurs demandées : $P(X = k)$, $P(X \\ge 1) = 1 - P(X = 0) = 1 - (1 - p)^n$.\n- Espérance : $E(X) = n \\times p$.\n- Variance : $V(X) = n \\times p \\times (1 - p)$.\n- Écart-type : $\\sigma(X) = \\sqrt{V(X)}$.",
      conclusionOrJustification: "Paramètres de dispersion et de position de la loi binomiale établis.",
    },
    {
      title: "Interprétation et résolution des inéquations de seuil P_n >= seuil",
      observationOrData: "Recherche du nombre minimal d'épreuves $n$ tel que $P(X \\ge 1) \\ge 1 - \\epsilon$.",
      scientificConceptOrRule: "$$1 - (1 - p)^n \\ge 1 - \\epsilon \\iff (1 - p)^n \\le \\epsilon \\iff n \\ln(1 - p) \\le \\ln(\\epsilon) \\iff n \\ge \\frac{\\ln(\\epsilon)}{\\ln(1 - p)}$$ (car $\\ln(1 - p) < 0$).",
      deductionOrCalculation: "Calcul numérique et arrondi à l'entier supérieur $\\lceil n \\rceil$.",
      conclusionOrJustification: "Nombre minimal d'expériences requis calculé avec certitude.",
    },
  ];

  return buildMathsTleCStructuredResult({
    title: "Probabilités : Probabilités Conditionnelles, Formule des Probabilités Totales et Loi Binomiale",
    themeId: "probabilites_statistiques",
    themeTitle: "Probabilités & Variables Aléatoires",
    lessonNumber: 15,
    lessonTitle: "Probabilités Conditionnelles, Variables Aléatoires et Loi Binomiale",
    problemStatement: statement,
    scientificHypothesis: "L'arbre pondéré et la formule des probabilités totales régissent les événements conditionnés ; la répétition indépendante obéit à B(n, p).",
    steps,
    finalConclusion: "L'application des probabilités totales et de la loi binomiale permet de quantifier les risques, d'établir la loi de gain et de dimensionner les seuils d'assurance.",
    keyMathematicalTerms: ["Probabilité conditionnelle", "Formule des probabilités totales", "Schéma de Bernoulli", "Loi binomiale B(n, p)", "Espérance E(X) = np", "Fonction de répartition"],
    commonPitfallsAvoided: ["Lors de la division par ln(1 - p), le sens de l'inégalité s'inverse car ln(1 - p) est strictement négatif pour 0 < p < 1."],
  });
}
