/**
 * Classifieur sémantique pour Mathématiques Terminale D (Côte d'Ivoire)
 * Identifie le chapitre parmi les 11 leçons du programme officiel
 */

export interface MathsTleDClassification {
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  topicType:
    | "limits_continuity_asymptotes"
    | "derivatives_primitives_reciprocal"
    | "symmetry_generalities_functions"
    | "logarithm_study"
    | "exponential_study"
    | "integrals_areas_ipp"
    | "sequences_recurrence_convergence"
    | "probabilities_counting_binomial"
    | "complex_numbers_geometry_transformations"
    | "statistics_bivariate_regression"
    | "differential_equations";
  confidence: number;
}

export function classifyMathsTleDExercise(statement: string): MathsTleDClassification {
  const text = (statement || "").toLowerCase();

  // 1. Équations Différentielles (Leçon 11)
  if (/diff[ée]rentielle|y'\s*\+|y'\s*=|y''\s*\+|y''\s*-|y''\s*=|solution particuli[èe]re.*diff/i.test(text)) {
    return {
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Équations Différentielles",
      lessonNumber: 11,
      lessonTitle: "Équations Différentielles Linéaires du 1er et 2nd Ordre",
      topicType: "differential_equations",
      confidence: 0.96,
    };
  }

  // 2. Statistiques à deux variables (Leçon 10)
  if (/statistique|s[ée]rie double|s[ée]rie marginale|tableau de contingence|point moyen g|covariance|droite de r[ée]gression|moindres carr[ée]s|correlat/i.test(text)) {
    return {
      themeId: "probabilites_statistiques_d",
      themeTitle: "Statistiques à deux variables",
      lessonNumber: 10,
      lessonTitle: "Statistiques à deux variables et Ajustement Linéaire",
      topicType: "statistics_bivariate_regression",
      confidence: 0.95,
    };
  }

  // 3. Nombres Complexes & Transformations (Leçon 9)
  if (/complexe|affixe|forme alg[ée]brique|forme trigonom[ée]trique|forme exponentielle|moivre|euler|racine carr[ée]e.*complexe|z\^2|z\^3|cocycli|birapport|similitude|z'\s*=\s*az\s*\+\s*b/i.test(text)) {
    return {
      themeId: "geometrie_complexes_d",
      themeTitle: "Géométrie & Nombres Complexes",
      lessonNumber: 9,
      lessonTitle: "Nombres Complexes et Transformations du Plan",
      topicType: "complex_numbers_geometry_transformations",
      confidence: 0.95,
    };
  }

  // 4. Probabilités et Dénombrement (Leçon 8)
  if (/probabilit[ée]|d[ée]nombrement|tirage simultan|tirage successif|combinaison|arrangement|permutation|arbre pond[ée]r[ée]|loi binomiale|variable al[ée]atoire|esp[ée]rance|variance|[ée]cart type|fonction de r[ée]partition|bernoulli/i.test(text)) {
    return {
      themeId: "probabilites_statistiques_d",
      themeTitle: "Probabilités & Variables Aléatoires",
      lessonNumber: 8,
      lessonTitle: "Dénombrement, Probabilités Conditionnelles et Loi Binomiale",
      topicType: "probabilities_counting_binomial",
      confidence: 0.95,
    };
  }

  // 5. Suites Numériques (Leçon 7)
  const isSequence = /suite|raisonnement par r[ée]currence|suite arithm[ée]tique|suite g[ée]om[ée]trique|u_\{?n\+1\}?|u_\{?n\}?|v_\{?n\+1\}?|v_\{?n\}?|u[₀₁₂₃₄₅₆₇₈₉]|u[ₙ]|u[\s_]*0\s*=|v[\s_]*0\s*=|convergence.*suite|suite monotone|suite born[ée]e|\b[uvw][\s_]*\{?n\s*\+\s*1\}?\s*=/i.test(text);
  if (isSequence) {
    return {
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Suites Numériques",
      lessonNumber: 7,
      lessonTitle: "Suites Numériques (Arithmétiques, Géométriques, Récurrence et Convergence)",
      topicType: "sequences_recurrence_convergence",
      confidence: 0.95,
    };
  }

  // 6. Intégrale et Calcul d'Aires (Leçon 6)
  if (/int[ée]gral|primitive.*calcul d'aire|int[ée]gration par parties|ipp|calcul d'aire|aire.*d[ée]limit[ée]e|unit[ée] d'aire|chasles/i.test(text)) {
    return {
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Calcul Intégral & Aires",
      lessonNumber: 6,
      lessonTitle: "Intégrale, Intégration par Parties et Calcul d'Aires",
      topicType: "integrals_areas_ipp",
      confidence: 0.95,
    };
  }

  // 7. Fonction Exponentielle (Leçon 5)
  if (/exponentielle|e\^x|\bexp\(|croissances compar[ée]es.*e\^x/i.test(text)) {
    return {
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Fonction Exponentielle",
      lessonNumber: 5,
      lessonTitle: "Fonction Exponentielle Népérienne",
      topicType: "exponential_study",
      confidence: 0.94,
    };
  }

  // 8. Fonction Logarithme Népérien (Leçon 4)
  if (/logarithme|ln\(|\bln\s*x|croissances compar[ée]es.*ln/i.test(text)) {
    return {
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Fonction Logarithme Népérien",
      lessonNumber: 4,
      lessonTitle: "Fonction Logarithme Népérien",
      topicType: "logarithm_study",
      confidence: 0.94,
    };
  }

  // 9. Généralités sur les Études de Fonctions (Leçon 3)
  if (/centre de sym[ée]trie|axe de sym[ée]trie|parit[ée]|fonction paire|fonction impaire|f\(a-x\)\s*\+\s*f\(a\+x\)/i.test(text)) {
    return {
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Généralités sur les Fonctions",
      lessonNumber: 3,
      lessonTitle: "Généralités sur les Études de Fonctions (Parité & Éléments de Symétrie)",
      topicType: "symmetry_generalities_functions",
      confidence: 0.95,
    };
  }

  // 10. Dérivées et Primitives (Leçon 2)
  if (/d[ée]rivabilit[ée]|nombre d[ée]riv[ée]|tangente|point anguleux|demi-tangente|bijection r[ée]ciproque|d[ée]riv[ée]e de la r[ée]ciproque|primitive/i.test(text)) {
    return {
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Dérivation & Primitives",
      lessonNumber: 2,
      lessonTitle: "Dérivées, Dérivabilité, Fonction Réciproque et Primitives",
      topicType: "derivatives_primitives_reciprocal",
      confidence: 0.93,
    };
  }

  // 11. Limites et Continuité (Leçon 1)
  if (/limite|\blim\b|continuit[ée]|prolongement|forme ind[ée]termin[ée]e|asymptote|branche parabolique/i.test(text)) {
    return {
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Limites et Continuité",
      lessonNumber: 1,
      lessonTitle: "Limites, Continuité, Formes Indéterminées et Asymptotes",
      topicType: "limits_continuity_asymptotes",
      confidence: 0.93,
    };
  }

  // Non reconnu comme exercice standard du programme de Terminale D
  return {
    themeId: "analyse_fonctions_d",
    themeTitle: "Analyse : Généralités",
    lessonNumber: 1,
    lessonTitle: "Généralités et notions mathématiques",
    topicType: "limits_continuity_asymptotes",
    confidence: 0.20,
  };
}
