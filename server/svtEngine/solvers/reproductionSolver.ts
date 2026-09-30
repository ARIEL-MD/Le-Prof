/**
 * Solveur déterministe pour la Reproduction et Endocrinologie sexuelle (Terminale D)
 * Thème 6 & 7 : Reproduction chez les mammifères et les spermaphytes
 */

import { buildSvtStructuredResult } from "../resultBuilder";
import { SvtStructuredResult } from "../types";

export function solveReproductionExercise(statement: string): SvtStructuredResult {
  const text = statement.toLowerCase();

  // Cas 1 : Double fécondation chez les Angiospermes
  if (/angiosperme|spermaphyte|double fécondation|sac embryonnaire|pollen|albumen/i.test(text)) {
    const steps = [
      {
        title: "Structure du grain de pollen et du sac embryonnaire",
        observationOrData: "Gamétophyte mâle (2 cellules : végétative + génératrice) et gamétophyte femelle (sac à 7 cellules / 8 noyaux).",
        scientificConceptOrRule: "Les Angiospermes réalisent la double fécondation au sein de l'ovule.",
        deductionOrCalculation:
          "- Le grain de pollen émet un tube pollinique transportant 2 anthérozoïdes (spermatozoïdes).\n- Le sac embryonnaire contient 1 oosphère (gamète femelle $n$) flanquée de 2 synergides au pôle micropylaire, 3 antipodes au pôle opposé, et 1 cellule centrale à 2 noyaux polaires ($n+n$).",
        conclusionOrJustification: "Rencontre des gamètes dans l'ovule.",
      },
      {
        title: "Mécanisme de la double fécondation",
        observationOrData: "Pénétration du tube pollinique par le micropyle.",
        scientificConceptOrRule: "Double événement de fusion nucléaire :",
        deductionOrCalculation:
          "1. Anthérozoïde n°1 ($n$) + Oosphère ($n$) $\\to$ Zygote principal diploïde ($2n$) qui donnera l'embryon de la future plante.\n2. Anthérozoïde n°2 ($n$) + 2 noyaux polaires ($n+n$) $\\to$ Zygote accessoire triploïde ($3n$) qui donnera l'albumen (tissu de réserve nourricier).",
        conclusionOrJustification: "Formation de la graine contenant embryon ($2n$) et albumen ($3n$).",
      },
    ];

    return buildSvtStructuredResult({
      title: "Reproduction végétale : La Double Fécondation chez les Angiospermes",
      themeId: "theme7",
      themeTitle: "Reproduction chez les spermaphytes",
      lessonNumber: 18,
      lessonTitle: "Organisation florale, pollinisation et double fécondation",
      problemStatement: statement,
      steps,
      finalConclusion: "La double fécondation produit simultanément un embryon diploïde ($2n$) et un tissu de réserve triploïde ($3n$).",
      keyScientificTerms: ["Double fécondation", "Angiosperme", "Sac embryonnaire (8 noyaux)", "Oosphère (n)", "Albumen (3n)"],
      commonPitfallsAvoided: ["L'albumen est TRIPLOÏDE (3n) et non diploïde."],
    });
  }

  // Cas 2 : Axe hypothalamo-hypophysaire et cycle ovarien/utérin chez la femme
  const steps = [
    {
      title: "Phase folliculaire et rétrocontrôle ovarien",
      observationOrData: "Développement des follicules sous l'action de la FSH antéhypophysaire.",
      scientificConceptOrRule: "La thèque interne et la granulosa des follicules sécrètent des œstrogènes (œstradiol).",
      deductionOrCalculation:
        "- Taux modéré d'œstradiol $\\to$ Rétrocontrôle négatif freinant la FSH et la LH.\n- Prolifération de la muqueuse utérine (endomètre).",
      conclusionOrJustification: "Croissance folliculaire progressive.",
    },
    {
      title: "Le pic pré-ovulatoire et l'ovulation",
      observationOrData: "Taux d'œstradiol dépassant le seuil critique (> 200 pg/mL) pendant plus de 24h.",
      scientificConceptOrRule: "Inversion du rétrocontrôle : passage en rétrocontrôle POSITIF sur l'axe hypothalamo-hypophysaire.",
      deductionOrCalculation:
        "- Décharge massive de GnRH $\\to$ Pic sécrétoire de LH (décharge ovulante) et de FSH.\n- Rupture du follicule mûr de De Graaf 36h après le pic de LH $\\to$ Expulsion de l'ovocyte II au 14ème jour du cycle.",
      conclusionOrJustification: "Déclenchement inéluctable de l'ovulation.",
    },
    {
      title: "Phase lutéinique et maintien ou régression du corps jaune",
      observationOrData: "Transformation du follicule rompu en corps jaune sous l'effet de la LH.",
      scientificConceptOrRule: "Le corps jaune sécrète la progestérone et des œstrogènes.",
      deductionOrCalculation:
        "- La progestérone induit la dentelle utérine (glandes tortueuses et vascularisation), bloque les contractions utérines (silence utérin) et élève la température matinale (> 37°C).\n- Si absence de fécondation : Dégénérescence du corps jaune au 28e jour $\\to$ Chute hormonale $\\to$ Menstruations (règles).\n- Si fécondation : Le trophoblaste sécrète l'HCG qui maintient le corps jaune gravidique.",
      conclusionOrJustification: "Synchronisme parfait entre cycle ovarien, utérin et hormonal.",
    },
  ];

  return buildSvtStructuredResult({
    title: "Endocrinologie de la reproduction : Régulation du cycle féminin et rétrocontrôles",
    themeId: "theme6",
    themeTitle: "Reproduction chez les mammifères",
    lessonNumber: 16,
    lessonTitle: "Régulation du fonctionnement des appareils génitaux",
    problemStatement: statement,
    steps,
    finalConclusion: "Le cycle féminin est synchronisé par l'axe GnRH-FSH-LH, alternant rétrocontrôle négatif, pic ovulatoire par rétrocontrôle positif et maintien lutéinique par la progestérone.",
    keyScientificTerms: ["FSH", "LH", "Œstradiol", "Progestérone", "Rétrocontrôle positif", "Pic de LH", "Corps jaune", "HCG"],
    commonPitfallsAvoided: ["Ne pas confondre la phase folliculaire (œstrogénique) et la phase lutéinique (progestéronique)."],
  });
}
