/**
 * Classifieur thématique pour la Physique-Chimie en 6ème (Côte d'Ivoire)
 */

export interface Pc6eClassification {
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  topicType:
    | "circuit_electrique_elements_sens"
    | "commande_interrupteur_va_et_vient"
    | "court_circuit_fusible_disjoncteur"
    | "dangers_combustions_triangle_feu"
    | "solides_liquides_surface_libre_verrerie"
    | "gaz_compressibilite_pression_butane"
    | "temperature_thermometre_points_fixes"
    | "changements_etat_eau_conservation_masse"
    | "constituants_air_dioxygene_diazote"
    | "combustion_solide_liquide_charbon_alcool"
    | "combustion_gaz_butane_complete_incomplete"
    | "mesure_volume_liquide_solide"
    | "mesure_masse_balance_pesee";
  confidence: number;
}

export function classifyPc6eExercise(statement: string): Pc6eClassification {
  const text = (statement || "").toLowerCase();

  // Masse d'un solide et d'un liquide
  if (/masse|balance|roberval|masses marqu[ée]es|simple pes[ée]e|double pes[ée]e|tare|gramme|kilogramme|\bkg\b|\bg\b|boucher.*viande|g[âa]teau.*farine/i.test(text)) {
    return {
      themeId: "theme_4_mesure_grandeurs",
      themeTitle: "Thème 4 : Mesure de grandeurs physiques",
      lessonNumber: 13,
      lessonTitle: "Leçon 13 : Masse d'un solide et d'un liquide",
      topicType: "mesure_masse_balance_pesee",
      confidence: 0.95,
    };
  }

  // Volume d'un solide et d'un liquide
  if (/volume|[ée]prouvette|m[ée]nisque|d[ée]placement de liquide|capacit[ée]|litre|\bdm³\b|\bcm³\b|\bm³\b|f[ûu]t d'huile|citerne.*bidon/i.test(text)) {
    return {
      themeId: "theme_4_mesure_grandeurs",
      themeTitle: "Thème 4 : Mesure de grandeurs physiques",
      lessonNumber: 12,
      lessonTitle: "Leçon 12 : Volume d'un liquide et d'un solide",
      topicType: "mesure_volume_liquide_solide",
      confidence: 0.95,
    };
  }

  // Combustion du butane (gaz)
  if (/butane|br[ûu]leur|virole|flamme bleue|flamme jaune|suie|monoxyde de carbone|\bco\b|casserole noircie|combustion compl[èe]te|combustion incompl[èe]te/i.test(text)) {
    return {
      themeId: "theme_3_air_combustions",
      themeTitle: "Thème 3 : L'air et les combustions",
      lessonNumber: 11,
      lessonTitle: "Leçon 11 : Combustion d'un gaz dans l'air (Butane)",
      topicType: "combustion_gaz_butane_complete_incomplete",
      confidence: 0.95,
    };
  }

  // Combustion d'un solide et d'un liquide (charbon, alcool)
  if (/charbon de bois|carbone|combustion de l'alcool|eau de chaux|sulfate de cuivre anhydre|r[ée]actifs|produits|dioxyde de carbone.*chaux/i.test(text)) {
    return {
      themeId: "theme_3_air_combustions",
      themeTitle: "Thème 3 : L'air et les combustions",
      lessonNumber: 10,
      lessonTitle: "Leçon 10 : Combustion d'un solide et d'un liquide dans l'air",
      topicType: "combustion_solide_liquide_charbon_alcool",
      confidence: 0.95,
    };
  }

  // Constituants de l'air
  if (/constituants de l'air|dioxyg[èe]ne|diazote|\bo2\b|\bn2\b|1\/5|4\/5|20%|80%|bougie.*[ée]prouvette|pollution de l'air|planting d'arbres/i.test(text)) {
    return {
      themeId: "theme_3_air_combustions",
      themeTitle: "Thème 3 : L'air et les combustions",
      lessonNumber: 9,
      lessonTitle: "Leçon 9 : Les constituants de l'air",
      topicType: "constituants_air_dioxygene_diazote",
      confidence: 0.95,
    };
  }

  // Changements d'état de l'eau
  if (/changement d'[ée]tat|solidification|fusion|vaporisation|[ée]bullition|[ée]vaporation|condensation|liqu[ée]faction|gla[çc]on|bouteille.*cong[ée]lateur|conservation de la masse/i.test(text)) {
    return {
      themeId: "theme_2_proprietes_matiere",
      themeTitle: "Thème 2 : Propriétés physiques de la matière",
      lessonNumber: 8,
      lessonTitle: "Leçon 8 : Les changements d'état de l'eau",
      topicType: "changements_etat_eau_conservation_masse",
      confidence: 0.95,
    };
  }

  // Température d'un corps
  if (/temp[ée]rature|thermom[èe]tre|degr[ée] celsius|kelvin|\b37\s*°c\b|fi[èe]vre|[ée]tranglement|glace fondante|eau bouillante|100\s*°c/i.test(text)) {
    return {
      themeId: "theme_2_proprietes_matiere",
      themeTitle: "Thème 2 : Propriétés physiques de la matière",
      lessonNumber: 7,
      lessonTitle: "Leçon 7 : Température d'un corps",
      topicType: "temperature_thermometre_points_fixes",
      confidence: 0.95,
    };
  }

  // Les gaz (propriétés, seringue, butane)
  if (/gaz|compressibilit[ée]|expansibilit[ée]|[ée]lasticit[ée]|pression.*gaz|seringue|transvasement|d[ée]placement d'eau|vulcanisateur|chambre [àa] air/i.test(text)) {
    return {
      themeId: "theme_2_proprietes_matiere",
      themeTitle: "Thème 2 : Propriétés physiques de la matière",
      lessonNumber: 6,
      lessonTitle: "Leçon 6 : Les gaz",
      topicType: "gaz_compressibilite_pression_butane",
      confidence: 0.95,
    };
  }

  // Solides et liquides
  if (/solide compact|solide divis[ée]|liquide|surface libre|plane et horizontale|b[ée]cher|erlenmeyer|tube [àa] essais|fiole|verrerie/i.test(text)) {
    return {
      themeId: "theme_2_proprietes_matiere",
      themeTitle: "Thème 2 : Propriétés physiques de la matière",
      lessonNumber: 5,
      lessonTitle: "Leçon 5 : Solides et liquides",
      topicType: "solides_liquides_surface_libre_verrerie",
      confidence: 0.95,
    };
  }

  // Dangers des combustions & triangle du feu
  if (/danger.*combustion|triangle du feu|combustible|comburant|source de chaleur|incendie|asphyxie|explosion|intoxication|[ée]teindre.*feu|extincteur/i.test(text)) {
    return {
      themeId: "theme_1_electricite",
      themeTitle: "Thème 1 : Électricité",
      lessonNumber: 4,
      lessonTitle: "Leçon 4 : Dangers des combustions",
      topicType: "dangers_combustions_triangle_feu",
      confidence: 0.95,
    };
  }

  // Court-circuit, fusible, disjoncteur
  if (/court-circuit|fusible|disjoncteur|fil d[ée]nud[ée]|coupe-circuit|recherche de panne|paille de fer/i.test(text)) {
    return {
      themeId: "theme_1_electricite",
      themeTitle: "Thème 1 : Électricité",
      lessonNumber: 3,
      lessonTitle: "Leçon 3 : Court-circuit et protection des installations électriques",
      topicType: "court_circuit_fusible_disjoncteur",
      confidence: 0.95,
    };
  }

  // Commande d'un circuit (interrupteur, va-et-vient, poussoir)
  if (/interrupteur|bouton-poussoir|commutateur|va-et-vient|r[ée]frig[ée]rateur|sonnette|deux endroits|allumage altern[ée]/i.test(text)) {
    return {
      themeId: "theme_1_electricite",
      themeTitle: "Thème 1 : Électricité",
      lessonNumber: 2,
      lessonTitle: "Leçon 2 : Commande d'un circuit électrique",
      topicType: "commande_interrupteur_va_et_vient",
      confidence: 0.95,
    };
  }

  // Leçon 1 : Le circuit électrique (par défaut)
  return {
    themeId: "theme_1_electricite",
    themeTitle: "Thème 1 : Électricité",
    lessonNumber: 1,
    lessonTitle: "Leçon 1 : Le circuit électrique",
    topicType: "circuit_electrique_elements_sens",
    confidence: 0.9,
  };
}
