/**
 * Classifieur thématique pour la Géographie en 6ème (Côte d'Ivoire)
 */

export interface Geo6eClassification {
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  topicType:
    | "geographie_objet_demarche"
    | "relief_elements_formes"
    | "climat_zones_mesures"
    | "sol_climat_vegetation"
    | "representation_terre_cartes_projections"
    | "mouvements_terre_rotation_revolution"
    | "population_environnement_abidjan"
    | "cycle_eau_preservation"
    | "impot_developpement_local";
  confidence: number;
}

export function classifyGeo6eExercise(statement: string): Geo6eClassification {
  const text = (statement || "").toLowerCase();

  // Leçon 9 / Thème 2 Leçon 3 : Impôt & Développement local
  if (/imp[ôo]t|contribuable|dgi|recettes fiscales|d[ée]penses publiques|civisme fiscal|tva|igr|taxe fonci[èe]re|mairie|commune|d[ée]tournement/i.test(text)) {
    return {
      themeId: "theme_2_milieu_local_ci",
      themeTitle: "Thème 2 : L'homme et son milieu local en Côte d'Ivoire",
      lessonNumber: 3,
      lessonTitle: "Leçon 3 : L'importance de l'impôt dans le développement de ma région",
      topicType: "impot_developpement_local",
      confidence: 0.95,
    };
  }

  // Leçon 8 / Thème 2 Leçon 2 : Cycle de l'eau
  if (/cycle de l'eau|eau potable|ressource rare|\b3%\b|ruissellement|infiltration|nappe phr[ée]atique|[ée]vaporation (oc[ée]anique|continentale)|transpiration|m[ée]nages|anader/i.test(text)) {
    return {
      themeId: "theme_2_milieu_local_ci",
      themeTitle: "Thème 2 : L'homme et son milieu local en Côte d'Ivoire",
      lessonNumber: 2,
      lessonTitle: "Leçon 2 : L'homme et le cycle de l'eau",
      topicType: "cycle_eau_preservation",
      confidence: 0.95,
    };
  }

  // Leçon 7 / Thème 2 Leçon 1 : Population et environnement local (Abidjan)
  if (/district d'abidjan|yopougon|d[ée]gradation de l'environnement|croissance d[ée]mographique|d[ée]forestation|activit[ée]s humaines|reboisement|habitats pr[ée]caires|embouteillage|inondation|sensibilisation.*village/i.test(text)) {
    return {
      themeId: "theme_2_milieu_local_ci",
      themeTitle: "Thème 2 : L'homme et son milieu local en Côte d'Ivoire",
      lessonNumber: 1,
      lessonTitle: "Leçon 1 : Population et environnement local (District d'Abidjan)",
      topicType: "population_environnement_abidjan",
      confidence: 0.95,
    };
  }

  // Leçon 6 : Mouvements de la terre (rotation / révolution)
  if (/rotation|r[ée]volution|succession des jours et des nuits|24 heures|365 jours|fuseaux horaires|gmt|mouvement apparent du soleil|points cardinaux|in[ée]gale dur[ée]e|saisons|solstice|[ée]quinoxe|canada.*bingerville|coupure d'[ée]lectricit[ée].*jo[ëe]l/i.test(text)) {
    return {
      themeId: "theme_1_bases_geographie",
      themeTitle: "Thème 1 : Les bases de l'étude de la géographie",
      lessonNumber: 6,
      lessonTitle: "Leçon 6 : Les mouvements de la terre et leurs influences sur la vie quotidienne",
      topicType: "mouvements_terre_rotation_revolution",
      confidence: 0.95,
    };
  }

  // Leçon 5 : Représentation de la terre (carte, globe, projections)
  if (/moyens de repr[ée]sentation|globe|planisph[èe]re|mappemonde|m[ée]ridien|parall[èe]le|[ée]quateur|latitude|longitude|projection (cylindrique|conique|polaire|azimutale)|l[ée]gende|[ée]chelle/i.test(text)) {
    return {
      themeId: "theme_1_bases_geographie",
      themeTitle: "Thème 1 : Les bases de l'étude de la géographie",
      lessonNumber: 5,
      lessonTitle: "Leçon 5 : Les moyens de représentation de la terre",
      topicType: "representation_terre_cartes_projections",
      confidence: 0.95,
    };
  }

  // Leçon 4 : Interrelation Sol, Climat et Végétation
  if (/interrelation|sol ferralitique|sol ferrugineux|sol hydromorphe|for[êe]t dense|savane arbustive|savane herbeuse|climat atti[ée]en|climat baoul[ée]en|climat soudanais|cacao|caf[ée]|coton|anacarde|soro.*tioro|adzop[ée].*paris.*sib[ée]rie/i.test(text)) {
    return {
      themeId: "theme_1_bases_geographie",
      themeTitle: "Thème 1 : Les bases de l'étude de la géographie",
      lessonNumber: 4,
      lessonTitle: "Leçon 4 : L'interrelation entre le sol, le climat et la végétation",
      topicType: "sol_climat_vegetation",
      confidence: 0.95,
    };
  }

  // Leçon 3 : Climat
  if (/climat|temp[ée]rature|pr[ée]cipitation|an[ée]mom[èe]tre|pluviom[èe]tre|barom[èe]tre|thermom[èe]tre|amplitude thermique|zone chaude|zone temp[ée]r[ée]e|zone froide|ombrothermique|abidjan en 1992/i.test(text)) {
    return {
      themeId: "theme_1_bases_geographie",
      themeTitle: "Thème 1 : Les bases de l'étude de la géographie",
      lessonNumber: 3,
      lessonTitle: "Leçon 3 : Le climat",
      topicType: "climat_zones_mesures",
      confidence: 0.95,
    };
  }

  // Leçon 2 : Relief
  if (/relief|montagne|plateau|plaine|colline|butte|vall[ée]e|talus|interfluve|cuvette|altitude|pente|d[ée]nivellation|man.*abidjan/i.test(text)) {
    return {
      themeId: "theme_1_bases_geographie",
      themeTitle: "Thème 1 : Les bases de l'étude de la géographie",
      lessonNumber: 2,
      lessonTitle: "Leçon 2 : Le relief",
      topicType: "relief_elements_formes",
      confidence: 0.95,
    };
  }

  // Leçon 1 : La géographie et son objet (par défaut)
  return {
    themeId: "theme_1_bases_geographie",
    themeTitle: "Thème 1 : Les bases de l'étude de la géographie",
    lessonNumber: 1,
    lessonTitle: "Leçon 1 : La géographie et son objet",
    topicType: "geographie_objet_demarche",
    confidence: 0.9,
  };
}
