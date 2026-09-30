/**
 * Classifieur thématique pour les Mathématiques en 6ème (Côte d'Ivoire)
 */

export interface Maths6eClassification {
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  topicType:
    | "entiers_naturels_divisibilite"
    | "droites_et_points"
    | "decimaux_relatifs_droite"
    | "segments_milieu_mediatrice"
    | "cercles_et_disques"
    | "fractions_simplification_somme"
    | "angles_mesure_bissectrice"
    | "triangles_droites_remarquables"
    | "proportionnalite_pourcentages_echelle"
    | "symetrie_centrale_point"
    | "parallelogramme_aire_perimetre"
    | "paves_cylindres_volumes"
    | "statistiques_effectifs_frequences";
  confidence: number;
}

export function classifyMaths6eExercise(statement: string): Maths6eClassification {
  const text = (statement || "").toLowerCase();

  // Pavés droits et cylindres droits (Volumes)
  if (/pav[ée] droit|cylindre droit|volume.*(carton|livre|cube|citerne|seau)|boite.*tomate|patron.*(cube|pav[ée]|cylindre)|aire lat[ée]rale.*(pav[ée]|cylindre)|55,566|172 800|189 dm/i.test(text)) {
    return {
      themeId: "theme_3_configurations_espace",
      themeTitle: "Thème 3 : Configurations de l'espace",
      lessonNumber: 12,
      lessonTitle: "Leçon 12 : Pavés droits et cylindres droits",
      topicType: "paves_cylindres_volumes",
      confidence: 0.95,
    };
  }

  // Statistiques
  if (/statistique|effectif|fr[ée]quence|tableau des effectifs|kodjo.*atti[ée]k[ée]|lancer de d[ée]|canaux de formation.*covid|groupe sanguin/i.test(text)) {
    return {
      themeId: "theme_1_calculs_algebriques_numeriques",
      themeTitle: "Thème 1 : Calculs algébriques / Activités numériques",
      lessonNumber: 12,
      lessonTitle: "Leçon 12 : Statistiques",
      topicType: "statistiques_effectifs_frequences",
      confidence: 0.95,
    };
  }

  // Parallélogramme
  if (/parall[ée]logramme|quadrilat[èe]re.*ebfc|pagne kita|daoukro|aire du parall[ée]logramme|p[ée]rim[èe]tre.*parall[ée]logramme|diagonales.*m[êe]me milieu/i.test(text)) {
    return {
      themeId: "theme_2_geometrie_plan_configurations",
      themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
      lessonNumber: 11,
      lessonTitle: "Leçon 11 (Configurations) : Parallélogramme",
      topicType: "parallelogramme_aire_perimetre",
      confidence: 0.95,
    };
  }

  // Figures symétriques par rapport à un point (Symétrie centrale)
  if (/sym[ée]trique par rapport|sym[ée]trie centrale|centre de sym[ée]trie|m[ée]r[ée]gou.*koudoubon|katiola.*foronan/i.test(text)) {
    return {
      themeId: "theme_2_geometrie_plan_configurations",
      themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
      lessonNumber: 10,
      lessonTitle: "Leçon 11 : Figures symétriques par rapport à un point",
      topicType: "symetrie_centrale_point",
      confidence: 0.95,
    };
  }

  // Proportionnalités, pourcentages, échelles
  if (/proportionnalit[ée]|coefficient de proportionnalit[ée]|pourcentage|25%|80%|bissap|sucre.*bouteille|1\/400\.000|[ée]chelle|r[ée]duction au m[êe]me|lin[ée]arit[ée]/i.test(text)) {
    return {
      themeId: "theme_1_calculs_algebriques_numeriques",
      themeTitle: "Thème 1 : Calculs algébriques / Activités numériques",
      lessonNumber: 9,
      lessonTitle: "Leçon 9 : Proportionnalités",
      topicType: "proportionnalite_pourcentages_echelle",
      confidence: 0.95,
    };
  }

  // Triangles
  if (/triangle|isoc[èe]le|[ée]quilat[ée]ral|triangle rectangle|hypot[ée]nuse|hauteur d'un triangle|m[ée]diane d'un triangle|m[ée]diatrice d'un triangle|aire.*triangle|p[ée]rim[èe]tre.*triangle|lunule/i.test(text)) {
    return {
      themeId: "theme_2_geometrie_plan_configurations",
      themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
      lessonNumber: 8,
      lessonTitle: "Leçon 8 : Triangles",
      topicType: "triangles_droites_remarquables",
      confidence: 0.95,
    };
  }

  // Angles
  if (/angle|rapporteur|bissectrice|angle aigu|angle droit|angle obtus|angle plat|angle nul|sommet.*c[ôo]t[ée]s.*angle|tiassal[ée]|tir au but/i.test(text)) {
    return {
      themeId: "theme_2_geometrie_plan_configurations",
      themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
      lessonNumber: 7,
      lessonTitle: "Leçon 7 : Angles",
      topicType: "angles_mesure_bissectrice",
      confidence: 0.95,
    };
  }

  // Fractions
  if (/fraction|num[ée]rateur|d[ée]nominateur|fraction d[ée]cimale|simplifi.*fraction|mangue.*koleat|b[oe]ufs.*diallo|concours d'excellence.*lyc[ée]e/i.test(text)) {
    return {
      themeId: "theme_1_calculs_algebriques_numeriques",
      themeTitle: "Thème 1 : Calculs algébriques / Activités numériques",
      lessonNumber: 6,
      lessonTitle: "Leçon 6 : Fractions",
      topicType: "fractions_simplification_somme",
      confidence: 0.95,
    };
  }

  // Cercles et disques
  if (/cercle|disque|rayon|diam[èe]tre|corde|p[ée]rim[èe]tre.*cercle|aire.*disque|mouton.*tabaski|cl[ôo]ture circulaire/i.test(text)) {
    return {
      themeId: "theme_2_geometrie_plan_configurations",
      themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
      lessonNumber: 5,
      lessonTitle: "Leçon 5 : Cercles et disques",
      topicType: "cercles_et_disques",
      confidence: 0.95,
    };
  }

  // Segments, milieu, médiatrice
  if (/segment|extr[ée]mit[ée]s|milieu d'un segment|m[ée]diatrice|deux villages.*distants|dispensaire.*moulin/i.test(text)) {
    return {
      themeId: "theme_2_geometrie_plan_configurations",
      themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
      lessonNumber: 4,
      lessonTitle: "Leçon 4 : Segments",
      topicType: "segments_milieu_mediatrice",
      confidence: 0.95,
    };
  }

  // Décimaux relatifs
  if (/d[ée]cimaux relatifs|entiers relatifs|\b\(-[0-9]+|\b\(\+[0-9]+|distance [àa] z[ée]ro|oppos[ée]|somme.*relatifs|cocody angr[ée].*temp[ée]rature|acapulo|helsinki|moscou|sib[ée]rie/i.test(text)) {
    return {
      themeId: "theme_1_calculs_algebriques_numeriques",
      themeTitle: "Thème 1 : Calculs algébriques / Activités numériques",
      lessonNumber: 3,
      lessonTitle: "Leçon 3 : Nombres décimaux relatifs",
      topicType: "decimaux_relatifs_droite",
      confidence: 0.95,
    };
  }

  // Droites et points
  if (/droite|point|s[ée]cante|perpendiculaire|parall[èe]le|demi-droite|\(ab\)|\[ab\)|appartenance.*droite|tambi/i.test(text)) {
    return {
      themeId: "theme_2_geometrie_plan_configurations",
      themeTitle: "Thème 2 : Géométrie du plan & Configurations du plan",
      lessonNumber: 2,
      lessonTitle: "Leçon 2 : Droites et points",
      topicType: "droites_et_points",
      confidence: 0.95,
    };
  }

  // Nombres entiers naturels par défaut
  return {
    themeId: "theme_1_calculs_algebriques_numeriques",
    themeTitle: "Thème 1 : Calculs algébriques / Activités numériques",
    lessonNumber: 1,
    lessonTitle: "Leçon 1 : Nombres entiers naturels",
    topicType: "entiers_naturels_divisibilite",
    confidence: 0.9,
  };
}
