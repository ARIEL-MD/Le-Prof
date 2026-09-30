/**
 * Solveur déterministe pour la Génétique Humaine et Pedigrees (Terminale D)
 * Chapitre 9 : Hérédité humaine et anomalies chromosomiques
 */

import { buildSvtStructuredResult } from "../resultBuilder";
import { SvtStructuredResult } from "../types";

export function solvePedigreeExercise(statement: string): SvtStructuredResult {
  const text = statement.toLowerCase();

  // Cas A : Hérédité autosomale récessive (ex: Albinisme, Drépanocytose, Mucoviscidose)
  if (/albinisme|albinos|drépanocytose|mucoviscidose|parents sains.*enfants malades|saut de génération/i.test(text)) {
    const steps = [
      {
        title: "Détermination du mode de transmission : Allèle dominant ou récessif ?",
        observationOrData:
          "Des parents phénotypiquement sains (non atteints) donnent naissance à des enfants malades.",
        scientificConceptOrRule:
          "Si un allèle responsable d'une anomalie s'exprime chez un enfant alors que ses parents ne le manifestent pas, c'est que l'allèle était présent chez les parents à l'état masqué.",
        deductionOrCalculation:
          "- L'allèle responsable de la maladie est récessif (noté $a$ ou $m$).\n- L'allèle normal est dominant (noté $N$ ou $A$).\n- Les parents sont obligatoirement hétérozygotes porteurs sains $(N//a)$.",
        conclusionOrJustification: "L'allèle de l'anomalie est récessif.",
      },
      {
        title: "Localisation du gène : Autosomal ou lié au sexe (Gonosomique X ou Y) ?",
        observationOrData:
          "Examen de la répartition de l'anomalie selon le sexe des individus atteints.",
        scientificConceptOrRule:
          "Critères de rejet des hypothèses gonosomiques :\n1. Si lié à Y : seuls les hommes seraient atteints et tout père malade transmettrait la tare à 100% de ses fils.\n2. Si récessif lié à X : toute fille malade ($X^a X^a$) proviendrait obligatoirement d'un père malade ($X^a Y$) et d'une mère porteuse ($X^N X^a$).",
        deductionOrCalculation:
          "- L'anomalie touche aussi bien les filles que les garçons.\n- Des filles malades sont issues de pères sains, ce qui exclut formellement une transmission récessive liée à X.\n- L'absence de transmission exclusive de père en fils exclut le chromosome Y.",
        conclusionOrJustification: "Le gène est porté par un autosome (hérédité autosomale récessive).",
      },
      {
        title: "Détermination des génotypes et calcul des probabilités génétiques",
        observationOrData: "Arbre généalogique et conseil génétique.",
        scientificConceptOrRule:
          "Les individus malades ont pour génotype $(a//a)$. Les parents sains d'un individu malade ont pour génotype $(N//a)$.",
        deductionOrCalculation:
          "- Individus atteints : $(a//a)$ avec certitude (100%).\n- Parents de malades : $(N//a)$ avec certitude (100%).\n- Enfant sain issu de parents $(N//a) \\times (N//a)$ : probabilité d'être porteur sain $(N//a) = 2/3$, probabilité d'être homozygote sain $(N//N) = 1/3$.\n- Risque pour un couple de porteurs sains $(N//a) \\times (N//a)$ d'avoir un enfant malade : $P = 1/4$ ($25\\%$).",
        conclusionOrJustification: "Génotypes établis et risque de transmission quantifié.",
      },
    ];

    return buildSvtStructuredResult({
      title: "Analyse génétique d'un pedigree : Hérédité autosomique récessive",
      themeId: "theme9",
      themeTitle: "Hérédité humaine et anomalies chromosomiques",
      lessonNumber: 20,
      lessonTitle: "Génétique humaine, Pedigrees et Caryotypes anormaux",
      problemStatement: statement,
      scientificHypothesis:
        "L'anomalie est gouvernée par un gène autosomal récessif transmis selon les lois de disjonction mendéliennes.",
      steps,
      finalConclusion:
        "La maladie est autosomique récessive. Les individus sains ayant des enfants atteints sont hétérozygotes $(N//a)$. Le risque pour deux parents hétérozygotes d'avoir un enfant atteint est de $1/4$ ($25\\%$).",
      keyScientificTerms: [
        "Autosomique récessif",
        "Hétérozygote conducteur",
        "Pedigree / Arbre généalogique",
        "Probabilité de transmission (1/4)",
        "Consanguinité",
      ],
      commonPitfallsAvoided: [
        "Ne pas oublier qu'un enfant sain au sein d'une fratrie avec un frère malade a 2 chances sur 3 (2/3) d'être porteur sain, et non 1/2.",
      ],
    });
  }

  // Cas B : Hérédité récessive liée au chromosome sexuel X (ex: Daltonisme, Hémophilie, Myopathie)
  if (/daltonisme|hémophilie|myopathie|duchenne|lié à x|gonosomique récessif/i.test(text)) {
    const steps = [
      {
        title: "Détermination du caractère dominant ou récessif",
        observationOrData: "Des garçons malades naissent de parents phénotypiquement normaux.",
        scientificConceptOrRule: "L'allèle responsable ne s'exprime pas chez la mère conductrice : il est récessif.",
        deductionOrCalculation:
          "- Allèle muté $d$ (ou $h$) récessif devant l'allèle normal $N$ ($N > d$).\n- La mère est hétérozygote conductrice $(X^N X^d)$ et le père est sain $(X^N Y)$.",
        conclusionOrJustification: "L'allèle est récessif.",
      },
      {
        title: "Démonstration de la localisation sur le chromosome sexuel X",
        observationOrData:
          "La maladie touche principalement les garçons. Un père atteint ne transmet pas la maladie à ses fils, mais toutes ses filles reçoivent son chromosome $X^d$.",
        scientificConceptOrRule:
          "Chez l'homme ($XY$), le chromosome Y ne porte pas d'allèle homologue pour ce locus (hémizygotie). Tout allèle récessif porté par X s'exprime obligatoirement chez le garçon ($X^d Y$).",
        deductionOrCalculation:
          "- Une femme ne peut être malade que si elle est homozygote $(X^d X^d)$, nécessitant un père malade ($X^d Y$) et une mère au moins conductrice ($X^N X^d$).\n- Le croisement d'une mère conductrice $(X^N X^d)$ et d'un père sain $(X^N Y)$ donne :\n  * $50\\%$ des fils malades $(X^d Y)$ et $50\\%$ des fils sains $(X^N Y)$.\n  * $100\\%$ des filles saines (dont $50\\%$ conductrices $X^N X^d$).",
        conclusionOrJustification: "L'anomalie est récessive liée au chromosome X.",
      },
      {
        title: "Attribution des génotypes",
        observationOrData: "Génotypes des membres de la famille.",
        scientificConceptOrRule: "Notation gonosomique obligatoire ($X^N, X^d, Y$).",
        deductionOrCalculation:
          "- Hommes sains : $X^N Y$\n- Hommes malades : $X^d Y$\n- Femmes saines non conductrices : $X^N X^N$\n- Femmes saines conductrices : $X^N X^d$\n- Femmes malades : $X^d X^d$",
        conclusionOrJustification: "Génotypes gonosomiques complets établis sans ambiguïté.",
      },
    ];

    return buildSvtStructuredResult({
      title: "Analyse génétique : Hérédité récessive liée au chromosome sexuel X",
      themeId: "theme9",
      themeTitle: "Hérédité humaine et anomalies chromosomiques",
      lessonNumber: 20,
      lessonTitle: "Génétique humaine, Pedigrees et Caryotypes anormaux",
      problemStatement: statement,
      steps,
      finalConclusion:
        "La maladie est transmise selon le mode récessif lié au chromosome sexuel X. Les femmes conductrices transmettent la tare à 50% de leurs fils.",
      keyScientificTerms: ["Récessif lié à X", "Hémizygote", "Femme conductrice (XN Xd)", "Gonosomique"],
      commonPitfallsAvoided: [
        "Un homme ne peut jamais être 'porteur sain' d'une tare récessive liée à X : s'il a l'allèle, il est obligatoirement malade.",
      ],
    });
  }

  // Cas C : Hérédité autosomale dominante (ex: Chorée de Huntington, Achondroplasie)
  const steps = [
    {
      title: "Mise en évidence de la dominance",
      observationOrData: "La maladie est présente à chaque génération (aucun saut de génération) et tout malade a au moins un parent malade.",
      scientificConceptOrRule: "Caractéristiques d'une tare dominante : s'exprime dès la présence d'un seul allèle muté.",
      deductionOrCalculation:
        "- Allèle morbide dominant $M > n$.\n- Un couple de parents sains $(n//n) \\times (n//n)$ ne donne jamais d'enfant malade.\n- Les individus sains sont obligatoirement homozygotes récessifs $(n//n)$.",
      conclusionOrJustification: "L'allèle responsable de la maladie est dominant.",
    },
    {
      title: "Localisation autosomale",
      observationOrData: "Transmission d'un père malade à son fils sans restriction liée au sexe.",
      scientificConceptOrRule: "Si l'allèle était dominant lié à X, un père malade ($X^M Y$) transmettrait la maladie à 100% de ses filles et 0% de ses fils.",
      deductionOrCalculation: "L'observation d'un garçon malade issu d'un père malade ou d'une fille saine issue d'un père malade prouve que le gène n'est pas sur X : il est autosomal.",
      conclusionOrJustification: "Hérédité autosomale dominante.",
    },
  ];

  return buildSvtStructuredResult({
    title: "Analyse génétique d'un pedigree : Hérédité autosomale dominante",
    themeId: "theme9",
    themeTitle: "Hérédité humaine et anomalies chromosomiques",
    lessonNumber: 20,
    lessonTitle: "Génétique humaine, Pedigrees et Caryotypes anormaux",
    problemStatement: statement,
    steps,
    finalConclusion: "L'affection est transmise sur un mode autosomal dominant. Le risque de transmission pour un parent atteint hétérozygote est de 50% à chaque grossesse.",
    keyScientificTerms: ["Autosomal dominant", "Absence de saut de génération", "Chorée de Huntington", "Pénétrance"],
    commonPitfallsAvoided: ["Les individus sains dans une maladie dominante sont TOUJOURS homozygotes récessifs (n//n)."],
  });
}
