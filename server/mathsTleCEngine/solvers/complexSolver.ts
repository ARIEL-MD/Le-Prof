/**
 * Solveur expert pour les Nombres Complexes, Similitudes Directes et Isométries en Terminale C
 */

import { buildMathsTleCStructuredResult } from "../resultBuilder";
import { MathsTleCStructuredResult } from "../types";

export function solveComplexAndTransformationsExercise(statement: string): MathsTleCStructuredResult {
  const text = statement.toLowerCase();

  // Cas 1 : Similitudes Directes du Plan
  if (/similitude|similitudes directes|triangles? directement semblables?|z'\s*=\s*az\s*\+\s*b/i.test(text)) {
    const steps = [
      {
        title: "Identification de la forme complexe de la transformation et éléments caractéristiques",
        observationOrData: "Transformation du plan d'écriture complexe $z' = az + b$ avec $a \\in \\mathbb{C}^*$ et $b \\in \\mathbb{C}$.",
        scientificConceptOrRule: "Si $a \\neq 1$, $s$ est une similitude directe admettant un unique point invariant $\\Omega$ (centre), de rapport $k = |a|$ et d'angle $\\theta = \\text{Arg}(a) \\pmod{2\\pi}$.",
        deductionOrCalculation: "- Rapport : $k = |a| = \\sqrt{\\text{Re}(a)^2 + \\text{Im}(a)^2}$.\n- Angle : $\\theta = \\text{Arg}(a)$ tel que $\\cos\\theta = \\frac{\\text{Re}(a)}{|a|}$ et $\\sin\\theta = \\frac{\\text{Im}(a)}{|a|}$.\n- Affixe du centre $\\Omega$ : résolution de $z = az + b \\iff z(1 - a) = b \\implies \\omega = z_\\Omega = \\frac{b}{1 - a}$.",
        conclusionOrJustification: "La similitude directe $s(\\Omega, k, \\theta)$ est entièrement caractérisée.",
      },
      {
        title: "Décomposition canonique (forme réduite) de la similitude directe",
        observationOrData: "Expression géométrique intrinsèque de $s$.",
        scientificConceptOrRule: "Toute similitude directe de centre $\\Omega$, de rapport $k$ et d'angle $\\theta$ est la composée commutative d'une homothétie $h(\\Omega, k)$ et d'une rotation $r(\\Omega, \\theta)$ : $s = h(\\Omega, k) \\circ r(\\Omega, \\theta) = r(\\Omega, \\theta) \\circ h(\\Omega, k)$.",
        deductionOrCalculation: "- Forme canonique : $z' - \\omega = k e^{i\\theta} (z - \\omega)$.\n- Pour tout point $M \\neq \\Omega$ d'image $M'$, le triangle $\\Omega M M'$ conserve une forme constante avec $\\frac{\\Omega M'}{\\Omega M} = k$ et $\\text{Mes}(\\vec{\\Omega M}, \\vec{\\Omega M'}) = \\theta$.",
        conclusionOrJustification: "La forme réduite permet les constructions géométriques directes sans passer par les coordonnées.",
      },
      {
        title: "Propriétés métriques, conservation et suites de points associées",
        observationOrData: "Étude des images de figures (longueurs, aires) et suites itératives $A_{n+1} = s(A_n)$.",
        scientificConceptOrRule: "Une similitude directe de rapport $k$ multiplie les distances par $k$, les aires par $k^2$, conserve les angles orientés et les barycentres.",
        deductionOrCalculation: "- Aire de l'image : $\\text{Aire}(s(\\mathcal{F})) = k^2 \\times \\text{Aire}(\\mathcal{F})$.\n- Pour la suite $z_n = s^n(z_0)$ : $z_n - \\omega = (k e^{i\\theta})^n (z_0 - \\omega) = k^n e^{i n \\theta} (z_0 - \\omega)$.\n- Longueur de la ligne brisée $L_n = \\sum A_k A_{k+1}$ : somme des termes d'une suite géométrique de raison $k = |a|$. Si $k < 1$, $\\lim_{n \\to +\\infty} L_n = \\frac{L_1}{1 - k}$.",
        conclusionOrJustification: "Validation des relations métriques et calcul des limites géométriques.",
      },
    ];

    return buildMathsTleCStructuredResult({
      title: "Géométrie & Complexes : Étude Complète d'une Similitude Directe du Plan",
      themeId: "geometrie",
      themeTitle: "Géométrie du Plan & Transformations",
      lessonNumber: 14,
      lessonTitle: "Similitudes Directes du Plan",
      problemStatement: statement,
      scientificHypothesis: "L'écriture z' = az + b caractérise une similitude directe de centre omega = b/(1-a), de rapport k = |a| et d'angle theta = arg(a).",
      steps,
      finalConclusion: "La similitude directe multiplie les distances par k, les aires par k^2 et engendre des configurations de triangles directement semblables.",
      keyMathematicalTerms: ["Similitude directe", "Centre de similitude", "Rapport k = |a|", "Angle theta = Arg(a)", "Décomposition canonique", "Triangles directement semblables"],
      commonPitfallsAvoided: ["Attention : les aires sont multipliées par k^2 et non par k."],
    });
  }

  // Cas 2 : Isométries du Plan (Déplacements, Antidéplacements, Symétrie Glissée)
  if (/isom[ée]trie|antid[ée]placement|d[ée]placement|sym[ée]trie gliss[ée]e|points invariants/i.test(text)) {
    const steps = [
      {
        title: "Classification de l'isométrie par la conservation de l'orientation",
        observationOrData: "Application du plan conservant les distances.",
        scientificConceptOrRule: "- Déplacement : conserve les angles orientés (translation $t_{\\vec{u}}$ ou rotation $r(O, \\theta)$).\n- Antidéplacement : transforme tout angle orienté en son opposé (symétrie orthogonale $S_{(D)}$ ou symétrie glissée).",
        deductionOrCalculation: "Étude des angles orientés formés par les triplets de points et leurs images.",
        conclusionOrJustification: "Nature globale (déplacement ou antidéplacement) établie.",
      },
      {
        title: "Recherche des points invariants et identification de la transformation",
        observationOrData: "Résolution de l'équation $f(M) = M$.",
        scientificConceptOrRule: "- Plan entier : $f = \\text{Id}_{\\mathcal{P}}$.\n- Droite $(D)$ : $f = S_{(D)}$ (symétrie orthogonale).\n- Singleton $\\{\\Omega\\}$ : $f = r(\\Omega, \\theta)$ (rotation).\n- Ensemble vide $\\emptyset$ : translation (si déplacement) ou symétrie glissée (si antidéplacement).",
        deductionOrCalculation: "Analyse des points fixes pour préciser la classe de l'isométrie.",
        conclusionOrJustification: "Type précis de l'isométrie déterminé sans ambiguïté.",
      },
      {
        title: "Décomposition canonique et détermination de l'axe et du vecteur",
        observationOrData: "Pour une symétrie glissée $f = t_{\\vec{u}} \\circ S_{(D)} = S_{(D)} \\circ t_{\\vec{u}}$ avec $\\vec{u}$ vecteur directeur de $(D)$.",
        scientificConceptOrRule: "Pour tout point $M$ et son image $M'$, le milieu $I$ de $[MM']$ appartient à l'axe $(D)$. De plus, $f(f(M)) = M'' \\implies \\vec{u} = \\frac{1}{2} \\vec{MM''}$.",
        deductionOrCalculation: "- L'axe $(D)$ est la droite joignant les milieux des segments formés par deux points et leurs images.\n- Le vecteur $\\vec{u}$ est obtenu par $\\frac{1}{2} \\vec{AA''}$ où $A'' = f(f(A))$.",
        conclusionOrJustification: "Axe et vecteur directeur de la symétrie glissée complètement explicités.",
      },
    ];

    return buildMathsTleCStructuredResult({
      title: "Géométrie du Plan : Classification des Isométries et Symétries Glissées",
      themeId: "geometrie",
      themeTitle: "Géométrie du Plan & Transformations",
      lessonNumber: 13,
      lessonTitle: "Isométries du Plan (Déplacements, Antidéplacements, Symétries Glissées)",
      problemStatement: statement,
      scientificHypothesis: "L'orientation des angles et l'ensemble des points invariants caractérisent de façon unique toute isométrie plane.",
      steps,
      finalConclusion: "L'isométrie est classée (déplacement/antidéplacement) et décomposée selon ses éléments caractéristiques (axe, centre, angle, vecteur).",
      keyMathematicalTerms: ["Déplacement", "Antidéplacement", "Symétrie glissée", "Points invariants", "Composée d'isométries"],
      commonPitfallsAvoided: ["Dans une symétrie glissée, le vecteur de translation doit être rigoureusement colinéaire à l'axe de la symétrie orthogonale."],
    });
  }

  // Cas 3 : Nombres Complexes & Configurations du Plan (Alignement, Orthogonalité, Cocyclicité, Triangles)
  if (/cocycli|birapport|alignement.*complexe|triangle.*complexe|arg\(/i.test(text)) {
    const steps = [
      {
        title: "Interprétation géométrique des quotients d'affixes",
        observationOrData: "Points $A, B, C, D$ d'affixes $z_A, z_B, z_C, z_D$.",
        scientificConceptOrRule: "- Longueur : $AB = |z_B - z_A|$.\n- Angle orienté : $\\text{Mes}(\\vec{AB}, \\vec{CD}) = \\text{arg}\\left(\\frac{z_D - z_C}{z_B - z_A}\\right) \\pmod{2\\pi}$.",
        deductionOrCalculation: "Calcul du quotient $Z = \\frac{z_C - z_A}{z_B - z_A}$ sous forme algébrique puis trigonométrique : $Z = |Z| e^{i\\theta}$.",
        conclusionOrJustification: "Le module donne le rapport des distances $\\frac{AC}{AB}$ et l'argument donne la mesure de l'angle orienté $(\\vec{AB}, \\vec{AC})$.",
      },
      {
        title: "Caractérisation de la configuration (Alignement, Orthogonalité ou Nature du Triangle)",
        observationOrData: "Étude de la nature de $Z$.",
        scientificConceptOrRule: "- Si $Z \\in \\mathbb{R}^*$ : $A, B, C$ sont alignés.\n- Si $Z \\in i\\mathbb{R}^*$ : $(\\vec{AB}) \\perp (\\vec{AC})$, triangle rectangle en $A$.\n- Si $Z = e^{\\pm i \\frac{\\pi}{3}}$ : triangle $ABC$ équilatéral.\n- Si $Z = \\pm i$ : triangle $ABC$ rectangle isocèle en $A$.",
        deductionOrCalculation: "Application directe aux valeurs numériques des affixes données.",
        conclusionOrJustification: "Propriété géométrique rigoureusement démontrée.",
      },
      {
        title: "Condition de cocyclicité par le Birapport",
        observationOrData: "Recherche si 4 points distincts $A, B, C, D$ sont situés sur un même cercle.",
        scientificConceptOrRule: "Les points $A, B, C, D$ sont cocycliques ou alignés si et seulement si le birapport $\\frac{z_C - z_A}{z_C - z_B} : \\frac{z_D - z_A}{z_D - z_B} \\in \\mathbb{R}^*$.",
        deductionOrCalculation: "Calcul algébrique du quotient des deux rapports d'affixes et vérification de la nullité de sa partie imaginaire.",
        conclusionOrJustification: "Les 4 points sont cocycliques (situés sur un cercle de centre et rayon calculables).",
      },
    ];

    return buildMathsTleCStructuredResult({
      title: "Nombres Complexes : Configurations Géométriques, Triangles et Cocyclicité",
      themeId: "geometrie",
      themeTitle: "Nombres Complexes et Géométrie du Plan",
      lessonNumber: 8,
      lessonTitle: "Nombres Complexes et Configurations Géométriques du Plan",
      problemStatement: statement,
      scientificHypothesis: "L'argument et le module du quotient (zC - zA)/(zB - zA) traduisent respectivement les angles orientés et les rapports de distance.",
      steps,
      finalConclusion: "L'outil complexe permet d'établir l'alignement, l'orthogonalité, la cocyclicité et la nature géométrique exacte des figures du plan.",
      keyMathematicalTerms: ["Affixe", "Birapport de 4 points", "Cocyclicité", "Angle orienté arg((zC-zA)/(zB-zA))", "Triangle équilatéral / rectangle isocèle"],
      commonPitfallsAvoided: ["Veiller à l'ordre des affixes : arg((zC - zA)/(zB - zA)) donne l'angle de AB vers AC."],
    });
  }

  // Cas 4 : Nombres Complexes (Algèbre, Racines carrées, 2nd degré, Moivre, Euler, Racines n-ièmes)
  const steps = [
    {
      title: "Mise sous forme algébrique, trigonométrique et exponentielle",
      observationOrData: "Nombre complexe $z = a + ib$.",
      scientificConceptOrRule: "Module $|z| = \\sqrt{a^2 + b^2}$ et argument $\\theta$ tel que $\\cos\\theta = \\frac{a}{|z|}$, $\\sin\\theta = \\frac{b}{|z|}$. Forme exponentielle : $z = |z|e^{i\\theta}$.",
      deductionOrCalculation: "Passage systématique d'une forme à l'autre selon les besoins du problème.",
      conclusionOrJustification: "Forme adaptée aux calculs de puissances et de racines.",
    },
    {
      title: "Résolution des équations dans C et calcul des racines carrées d'un complexe",
      observationOrData: "Recherche des racines carrées $\\delta = x + iy$ d'un complexe $Z_0 = X + iY$.",
      scientificConceptOrRule: "Le système fondamental d'identification : $$x^2 + y^2 = |Z_0|, \\quad x^2 - y^2 = X, \\quad 2xy = Y$$",
      deductionOrCalculation: "- Addition des deux premières équations : $2x^2 = |Z_0| + X \\implies x = \\pm \\sqrt{\\frac{|Z_0| + X}{2}}$.\n- Soustraction : $2y^2 = |Z_0| - X \\implies y = \\pm \\sqrt{\\frac{|Z_0| - X}{2}}$.\n- Le signe du produit $2xy = Y$ fixe les signes relatifs de $x$ et $y$.\n- Application au discriminant $\\Delta$ de l'équation du second degré $az^2 + bz + c = 0$ : $z_{1,2} = \\frac{-b \\pm \\delta}{2a}$.",
      conclusionOrJustification: "Ensemble des solutions dans $\\mathbb{C}$ rigoureusement déterminé.",
    },
    {
      title: "Application des formules de Moivre, d'Euler ou calcul des Racines n-ièmes",
      observationOrData: "Élévation à la puissance $n$ ou extraction des racines $n$-ièmes : $z^n = Z_0 = R e^{i\\theta}$.",
      scientificConceptOrRule: "Les $n$ racines $n$-ièmes sont $z_k = \\sqrt[n]{R} \\, e^{i\\frac{\\theta + 2k\\pi}{n}}$ pour $k \\in \\{0, 1, \\dots, n-1\\}$, formant les sommets d'un polygone régulier à $n$ côtés.",
      deductionOrCalculation: "Calcul des valeurs explicites et somme des racines $\\sum_{k=0}^{n-1} z_k = 0$.",
      conclusionOrJustification: "Résolution complète achevée.",
    },
  ];

  return buildMathsTleCStructuredResult({
    title: "Nombres Complexes : Algèbre, Équations dans C et Racines n-ièmes",
    themeId: "geometrie",
    themeTitle: "Nombres Complexes",
    lessonNumber: 6,
    lessonTitle: "Nombres Complexes (Algèbre, Trigonométrie, Racines n-ièmes)",
    problemStatement: statement,
    steps,
    finalConclusion: "La résolution dans C s'appuie sur la méthode algébrique des racines de discriminant et sur les représentations trigonométriques/exponentielles.",
    keyMathematicalTerms: ["Forme algébrique", "Module et argument", "Formule de Moivre", "Formules d'Euler", "Racines n-ièmes de l'unité", "Discriminant complexe"],
    commonPitfallsAvoided: ["Ne jamais écrire de symbole radical sur un nombre complexe non réel."],
  });
}
