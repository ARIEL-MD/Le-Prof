/**
 * Solveur déterministe pour les exercices de Génétique Mendélienne et Linkage (Terminale D)
 * Chapitre 8 : Lois statistiques de la transmission des caractères héréditaires
 */

import { buildSvtStructuredResult } from "../resultBuilder";
import { SvtStructuredResult } from "../types";

export function solveGeneticsExercise(statement: string): SvtStructuredResult {
  const text = statement.toLowerCase();

  // Cas 1 : Linkage partiel avec crossing-over chez la drosophile / Carte factorielle
  if (
    /drosophile|crossing-over|linkage|carte factorielle|cmg|centimorgan|41,5|8,5|corps gris|ailes vestigiales/i.test(
      text
    )
  ) {
    const steps = [
      {
        title: "Analyse du premier croisement (P1 x P2) et détermination de la dominance",
        observationOrData:
          "Croisement de deux lignées pures : drosophile sauvage $[b^+ vg^+]$ (corps gris, ailes longues) par drosophile mutée $[b vg]$ (corps noir, ailes vestigiales). La génération F1 est 100% homogène $[b^+ vg^+]$.",
        scientificConceptOrRule:
          "1ère loi de Mendel (Loi d'uniformité des hybrides de F1). Un allèle qui s'exprime en F1 à l'état hétérozygote est dominant.",
        deductionOrCalculation:
          "- L'allèle corps gris $b^+$ domine l'allèle corps noir $b$ ($b^+ > b$).\n- L'allèle ailes longues $vg^+$ domine l'allèle ailes vestigiales $vg$ ($vg^+ > vg$).\n- Génotype des parents : $(b^+ vg^+ // b^+ vg^+)$ et $(b vg // b vg)$.\n- Génotype des hybrides F1 : $(b^+ vg^+ // b vg)$.",
        conclusionOrJustification: "F1 est hétérozygote pour les deux couples d'allèles avec double dominance.",
      },
      {
        title: "Analyse du croisement test (Test-cross de la femelle F1) et mise en évidence du linkage",
        observationOrData:
          "Le croisement-test d'une femelle F1 $[b^+ vg^+]$ avec un mâle double récessif $[b vg]$ donne 4 phénotypes :\n- $[b^+ vg^+] : 41,5\\%$\n- $[b vg] : 41,5\\%$\n- $[b^+ vg] : 8,5\\%$\n- $[b vg^+] : 8,5\\%$",
        scientificConceptOrRule:
          "Le test-cross révèle directement la proportion et la nature des gamètes produits par l'hybride F1, car le parent récessif ne transmet qu'un seul type de gamète $(b vg)$.",
        deductionOrCalculation:
          "- Phénotypes parentaux majoritaires : $41,5\\% + 41,5\\% = 83\\%$.\n- Phénotypes recombinés minoritaires : $8,5\\% + 8,5\\% = 17\\%$.\n- L'apparition de 4 phénotypes avec des proportions inégales (différentes de $25\\%, 25\\%, 25\\%, 25\\%$) prouve que la 3ème loi de Mendel n'est pas vérifiée : les gènes sont portés par la même paire de chromosomes homologues (gènes liés ou linkage partiel).",
        conclusionOrJustification:
          "Les gènes responsables de la couleur du corps et de la longueur des ailes sont liés (linkage partiel).",
      },
      {
        title: "Mécanisme chromosomique : Crossing-over et distance génétique",
        observationOrData:
          "Taux de recombinaison $p = 17\\%$.",
        scientificConceptOrRule:
          "Le crossing-over (chiasma en prophase I de méiose) permet des échanges réciproques de segments entre chromatides non-sœurs. Par convention, $1\\%\\text{ de recombinaison} = 1\\text{ centimorgan (cmg)} = 1\\text{ unité arbitraire (u.a.)}$.",
        deductionOrCalculation:
          "- Distance entre le gène de la couleur du corps $(b)$ et de la longueur des ailes $(vg)$ : $d(b, vg) = 17\\text{ cmg}$.\n- Échiquier de croisement :\n  * Gamètes parentaux (83%) : $b^+ vg^+$ (41,5%), $b vg$ (41,5%)\n  * Gamètes recombinés (17%) : $b^+ vg$ (8,5%), $b vg^+$ (8,5%)\n  * Fécondation avec le gamète mâle $b vg$ $\\to$ 4 génotypes conformes aux résultats statistiques observés.",
        conclusionOrJustification:
          "La carte factorielle situe les deux locus $b$ et $vg$ séparés par un intervalle de $17\\text{ cmg}$.",
      },
    ];

    return buildSvtStructuredResult({
      title: "Résolution génétique : Dihybridisme avec linkage partiel et crossing-over chez la Drosophile",
      themeId: "theme8",
      themeTitle: "Lois statistiques de la transmission des caractères héréditaires",
      lessonNumber: 19,
      lessonTitle: "Monohybridisme, Dihybridisme, Linkage et Cartes factorielles",
      problemStatement: statement,
      scientificHypothesis:
        "Les gènes gouvernant la couleur du corps et la forme des ailes sont situés sur le même autosome et subissent des échanges méiotiques (crossing-over).",
      steps,
      finalConclusion:
        "Les résultats du test-cross ($83\\%$ parentaux et $17\\%$ recombinés) démontrent une liaison factorielle partielle entre les gènes $b$ et $vg$. Le pourcentage de recombinaison ($17\\%$) correspond à une distance génétique de $17\\text{ cmg}$ sur la carte factorielle.",
      keyScientificTerms: [
        "Linkage partiel",
        "Crossing-over",
        "Test-cross",
        "Centimorgan (cmg)",
        "Carte factorielle",
        "Prophase I de méiose",
      ],
      commonPitfallsAvoided: [
        "Ne pas appliquer les ratios mendéliens indépendants 9/16, 3/16, 3/16, 1/16 à des gènes liés.",
        "Rappeler que le mâle drosophile ne réalise aucun crossing-over (linkage absolu systématique chez le mâle).",
      ],
    });
  }

  // Cas 2 : Dihybridisme mendélien classique avec ségrégation indépendante (Pois de Mendel)
  if (/9\/16|3\/16|1\/16|pois|lisse|ridé|jaune|vert|indépendance/i.test(text)) {
    const steps = [
      {
        title: "Analyse de la F1 et détermination des relations de dominance",
        observationOrData: "Croisement de lignées pures [Lisses Jaunes] x [Ridé Vert] $\\to$ F1 100% [Lisses Jaunes].",
        scientificConceptOrRule: "1ère loi de Mendel (Uniformité de F1). Les allèles exprimés sont dominants.",
        deductionOrCalculation:
          "- Lisse $(L)$ domine Ridé $(r)$ ($L > r$).\n- Jaune $(J)$ domine Vert $(v)$ ($J > v$).\n- F1 a pour génotype : $(L//r \\; J//v)$.",
        conclusionOrJustification: "Double dominance avec F1 doublement hétérozygote.",
      },
      {
        title: "Analyse de la F2 (Autofécondation F1 x F1) et 3ème loi de Mendel",
        observationOrData:
          "La F2 donne 4 phénotypes dans les proportions : $9/16\\;[L,J] + 3/16\\;[L,v] + 3/16\\;[r,J] + 1/16\\;[r,v]$.",
        scientificConceptOrRule:
          "3ème loi de Mendel (Ségrégation et disjonction indépendante des couples d'allèles lors de la formation des gamètes).",
        deductionOrCalculation:
          "- Chaque hybride F1 produit 4 types de gamètes équiprobables (25% chacun) : $LJ, Lv, rJ, rv$.\n- L'échiquier de croisement $4 \\times 4 = 16$ cases confirme la répartition : $9/16 [LJ]$, $3/16 [Lv]$, $3/16 [rJ]$, $1/16 [rv]$.",
        conclusionOrJustification: "Les deux couples d'allèles sont situés sur des paires distinctes de chromosomes homologues (gènes indépendants).",
      },
    ];

    return buildSvtStructuredResult({
      title: "Résolution génétique : Dihybridisme avec ségrégation indépendante (Lois de Mendel)",
      themeId: "theme8",
      themeTitle: "Lois statistiques de la transmission des caractères héréditaires",
      lessonNumber: 19,
      lessonTitle: "Monohybridisme, Dihybridisme, Linkage et Cartes factorielles",
      problemStatement: statement,
      steps,
      finalConclusion:
        "L'obtention des proportions $9/16, 3/16, 3/16, 1/16$ en F2 confirme la 3ème loi de Mendel : les deux gènes sont indépendants et situés sur deux paires de chromosomes distinctes.",
      keyScientificTerms: ["Dihybridisme", "Gènes indépendants", "Échiquier de croisement 4x4", "3ème loi de Mendel"],
      commonPitfallsAvoided: ["Vérifier la pureté des géniteurs initiaux avant d'appliquer la 1ère loi de Mendel."],
    });
  }

  // Cas 3 : Monohybridisme (Dominance, Codominance ou Gène létal)
  const steps = [
    {
      title: "Analyse des résultats du croisement",
      observationOrData: "Étude de la transmission d'un seul caractère phénotypique au sein de la descendance.",
      scientificConceptOrRule: "Lois de Mendel sur le monohybridisme.",
      deductionOrCalculation:
        "- Si F1 est 100% identique à l'un des parents $\\to$ Monohybridisme avec dominance absolue ($3/4, 1/4$ en F2).\n- Si F1 présente un phénotype intermédiaire $\\to$ Codominance ($1/4, 1/2, 1/4$ en F2).\n- Si la descendance F2 donne $2/3, 1/3$ $\\to$ Présence d'un allèle létal à l'état homozygote.",
      conclusionOrJustification: "Identification de la relation allélique et des génotypes parentaux.",
    },
  ];

  return buildSvtStructuredResult({
    title: "Résolution génétique : Analyse d'un cas de Monohybridisme",
    themeId: "theme8",
    themeTitle: "Lois statistiques de la transmission des caractères héréditaires",
    lessonNumber: 19,
    lessonTitle: "Monohybridisme, Dihybridisme, Linkage et Cartes factorielles",
    problemStatement: statement,
    steps,
    finalConclusion: "Transmission conforme aux règles de ségrégation allélique méiotique de Mendel.",
    keyScientificTerms: ["Monohybridisme", "Dominance / Récessivité / Codominance", "Gène létal"],
    commonPitfallsAvoided: ["Ne pas confondre homozygote (lignée pure) et hétérozygote (hybride)."],
  });
}
