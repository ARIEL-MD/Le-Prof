/**
 * Classifieur sémantique pour Mathématiques Terminale C
 */

export interface MathsTleCClassification {
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  topicType:
    | "arithmetic_divisibility_primes_congruence"
    | "arithmetic_euclid_bezout_gauss_diophantine"
    | "complex_algebra_roots"
    | "complex_geometry_plan"
    | "similarities_plane"
    | "isometries_plane"
    | "conics"
    | "geometry_space"
    | "barycenters_level_lines"
    | "analysis_limits_continuity_tvi"
    | "analysis_differentiation_study"
    | "analysis_logarithm_powers"
    | "analysis_exponential"
    | "analysis_integrals_areas"
    | "differential_equations"
    | "sequences"
    | "probabilities_conditional_binomial"
    | "statistics_bivariate";
  confidence: number;
}

export function classifyMathsTleCExercise(statement: string): MathsTleCClassification {
  const text = (statement || "").toLowerCase();

  // 1. Arithmétique : Bézout / Gauss / ax+by=c / PPCM-PGCD
  if (/b[ée]zout|th[ée]or[èe]me de gauss|pgcd|ppcm|algorithme d'euclide|diophantienne|\bax\s*\+\s*by\s*=|premier.*entre eux/i.test(text)) {
    return {
      themeId: "arithmetique",
      themeTitle: "Arithmétique dans Z",
      lessonNumber: 11,
      lessonTitle: "PPCM, PGCD, Théorème de Bézout, Gauss et Équations Diophantiennes",
      topicType: "arithmetic_euclid_bezout_gauss_diophantine",
      confidence: 0.95,
    };
  }

  // 2. Arithmétique : Divisibilité / Nombres premiers / Numération / Congruence / Chiffrement
  if (/congruen|modulo|chiffrement|cryptograph|codage|nombre premier|divisibilit[ée]|base 2|base 16|binaire|hexad[ée]cimal|fermat|d[ée]composition.*facteur/i.test(text)) {
    return {
      themeId: "arithmetique",
      themeTitle: "Arithmétique dans Z",
      lessonNumber: 4,
      lessonTitle: "Divisibilité dans Z, Nombres premiers et Numération",
      topicType: "arithmetic_divisibility_primes_congruence",
      confidence: 0.95,
    };
  }

  // 3. Similitudes directes du plan
  if (/similitude|similitudes directes|triangle.*directement semblable|rapport k.*angle|centre \u03a9.*d'affixe|z'\s*=\s*az\s*\+\s*b/i.test(text)) {
    return {
      themeId: "geometrie",
      themeTitle: "Géométrie du Plan & Transformations",
      lessonNumber: 14,
      lessonTitle: "Similitudes Directes du Plan",
      topicType: "similarities_plane",
      confidence: 0.95,
    };
  }

  // 4. Isométries du plan (déplacements, antidéplacements, symétrie glissée)
  if (/isom[ée]trie|antid[ée]placement|d[ée]placement|sym[ée]trie gliss[ée]e|points invariants|compos[ée]e.*sym[ée]trie/i.test(text)) {
    return {
      themeId: "geometrie",
      themeTitle: "Géométrie du Plan & Transformations",
      lessonNumber: 13,
      lessonTitle: "Isométries du Plan (Déplacements, Antidéplacements, Symétries Glissées)",
      topicType: "isometries_plane",
      confidence: 0.95,
    };
  }

  // 5. Coniques (parabole, ellipse, hyperbole)
  if (/conique|parabole|ellipse|hyperbole|excentricit[ée]|axe focal|foyer|directrice|asymptote.*b\/a/i.test(text)) {
    return {
      themeId: "geometrie",
      themeTitle: "Géométrie du Plan : Les Coniques",
      lessonNumber: 17,
      lessonTitle: "Les Coniques (Parabole, Ellipse, Hyperbole)",
      topicType: "conics",
      confidence: 0.95,
    };
  }

  // 6. Nombres Complexes : Géométrie & configurations
  if (/cocycli|birapport|affixe|alignement.*complexe|triangle.*isoc[èe]le.*complexe|triangle.*[ée]quilat[ée]ral.*complexe|arg\(/i.test(text)) {
    return {
      themeId: "geometrie",
      themeTitle: "Nombres Complexes et Géométrie du Plan",
      lessonNumber: 8,
      lessonTitle: "Nombres Complexes et Configurations Géométriques du Plan",
      topicType: "complex_geometry_plan",
      confidence: 0.92,
    };
  }

  // 7. Nombres Complexes : Algèbre, racines n-ièmes, 2nd degré
  if (/complexe|forme trigonom[ée]trique|forme exponentielle|moivre|euler|racine carr[ée]e.*complexe|racine n-i[èe]me|racine.*de l'unit[ée]|z\^2\s*\+|z\^3\s*\+/i.test(text)) {
    return {
      themeId: "geometrie",
      themeTitle: "Nombres Complexes",
      lessonNumber: 6,
      lessonTitle: "Nombres Complexes (Algèbre, Trigonométrie, Racines n-ièmes)",
      topicType: "complex_algebra_roots",
      confidence: 0.93,
    };
  }

  // 8. Barycentres et Lignes de niveaux
  if (/barycentre|isobarycentre|ligne de niveau|lignes de niveaux|ma\^2|mb\^2|ma\/mb\s*=|points pond[ée]r[ée]s/i.test(text)) {
    return {
      themeId: "geometrie",
      themeTitle: "Barycentres et Lignes de Niveaux",
      lessonNumber: 2,
      lessonTitle: "Barycentre de n points pondérés et Lignes de Niveaux",
      topicType: "barycenters_level_lines",
      confidence: 0.94,
    };
  }

  // 9. Géométrie Analytique de l'Espace
  if (/espace|vecteur normal.*plan|distance.*point.*plan|[ée]quation cart[ée]sienne du plan|repr[ée]sentation param[ée]trique.*droite|droites non coplanaires/i.test(text)) {
    return {
      themeId: "geometrie",
      themeTitle: "Géométrie dans l'Espace",
      lessonNumber: 9,
      lessonTitle: "Géométrie Analytique de l'Espace",
      topicType: "geometry_space",
      confidence: 0.94,
    };
  }

  // 10. Équations différentielles
  if (/diff[ée]rentielle|y'\s*\+\s*ay|y''\s*\+\s*|y''\s*-\s*|vitesse de dissolution|croissance d[ée]mographique.*diff/i.test(text)) {
    return {
      themeId: "analyse_fonctions",
      themeTitle: "Analyse : Équations Différentielles",
      lessonNumber: 16,
      lessonTitle: "Équations Différentielles Linéaires du 1er et 2nd Ordre",
      topicType: "differential_equations",
      confidence: 0.95,
    };
  }

  // 11. Calcul Intégral & Primitives & Aires
  if (/int[ée]gral|primitive|int[ée]gration par parties|valeur moyenne.*int[ée]grale|calcul d'aire|aire.*d[ée]limit[ée]e par|chasles/i.test(text)) {
    return {
      themeId: "analyse_fonctions",
      themeTitle: "Analyse : Calcul Intégral",
      lessonNumber: 10,
      lessonTitle: "Calcul Intégral, Intégration par Parties et Calcul d'Aires",
      topicType: "analysis_integrals_areas",
      confidence: 0.95,
    };
  }

  // 12. Suites Numériques
  if (/suite|raisonnement par r[ée]currence|suite arithm[ée]tique|suite g[ée]om[ée]trique|u_\{n\+1\}|u_n|convergence.*suite|suite monotone/i.test(text)) {
    return {
      themeId: "analyse_fonctions",
      themeTitle: "Analyse : Suites Numériques",
      lessonNumber: 12,
      lessonTitle: "Suites Numériques (Convergence, Récurrence & Suites récurrentes)",
      topicType: "sequences",
      confidence: 0.95,
    };
  }

  // 13. Probabilités conditionnelles & Loi binomiale
  if (/probabilit[ée]|conditionnelle|loi binomiale|variable al[ée]atoire|esp[ée]rance|variance|[ée]cart type|arbre pond[ée]r[ée]|bernoulli|fonction de r[ée]partition/i.test(text)) {
    return {
      themeId: "probabilites_statistiques",
      themeTitle: "Probabilités & Variables Aléatoires",
      lessonNumber: 15,
      lessonTitle: "Probabilités Conditionnelles, Variables Aléatoires et Loi Binomiale",
      topicType: "probabilities_conditional_binomial",
      confidence: 0.95,
    };
  }

  // 14. Statistique à deux variables & Moindres carrés
  if (/statistique|s[ée]rie double|covariance|nuage de points|point moyen g|correlation|droite de r[ée]gression|moindres carr[ée]s/i.test(text)) {
    return {
      themeId: "probabilites_statistiques",
      themeTitle: "Statistiques à deux variables",
      lessonNumber: 18,
      lessonTitle: "Statistique à deux variables et Ajustement Linéaire",
      topicType: "statistics_bivariate",
      confidence: 0.95,
    };
  }

  // 15. Fonctions Logarithmes
  if (/logarithme|ln\(|log\(/i.test(text)) {
    return {
      themeId: "analyse_fonctions",
      themeTitle: "Analyse : Fonctions Logarithmes",
      lessonNumber: 5,
      lessonTitle: "Fonction Logarithme Népérien et Logarithmes de base a",
      topicType: "analysis_logarithm_powers",
      confidence: 0.90,
    };
  }

  // 16. Fonctions Exponentielles
  if (/exponentielle|e\^x|exp\(/i.test(text)) {
    return {
      themeId: "analyse_fonctions",
      themeTitle: "Analyse : Fonctions Exponentielles",
      lessonNumber: 7,
      lessonTitle: "Fonctions Exponentielles et Fonctions Puissances",
      topicType: "analysis_exponential",
      confidence: 0.90,
    };
  }

  // 17. Dérivabilité & Étude de fonctions
  if (/d[ée]rivabilit[ée]|nombre d[ée]riv[ée]|tangente|point anguleux|accroissements finis|bijection r[ée]ciproque.*d[ée]riv/i.test(text)) {
    return {
      themeId: "analyse_fonctions",
      themeTitle: "Analyse : Dérivation & Étude de fonctions",
      lessonNumber: 3,
      lessonTitle: "Dérivabilité, Théorèmes et Étude de Fonctions",
      topicType: "analysis_differentiation_study",
      confidence: 0.88,
    };
  }

  // 18. Limites & Continuité & TVI (par défaut pour analyse)
  return {
    themeId: "analyse_fonctions",
    themeTitle: "Analyse : Fonctions Numériques",
    lessonNumber: 1,
    lessonTitle: "Limites, Continuité et Théorème des Valeurs Intermédiaires",
    topicType: "analysis_limits_continuity_tvi",
    confidence: 0.85,
  };
}
