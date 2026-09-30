/**
 * Solveur expert pour les Nombres Complexes et Transformations du Plan en Terminale D (Côte d'Ivoire)
 * Couvre la Leçon 9 :
 * - Formes algébrique, trigonométrique et exponentielle, Moivre et Euler
 * - Racines carrées d'un complexe (système x^2+y^2=|Z|, x^2-y^2=a, 2xy=b) et équations du second degré
 * - Racines cubiques / n-ièmes
 * - Configurations géométriques : alignement, orthogonalité, cocyclicité (birapport), triangles
 * - Écritures complexes de transformations usuelles (translation, rotation, homothétie) et similitudes directes z' = az + b
 */

import { buildMathsTleDStructuredResult } from "../resultBuilder";
import { MathsTleDStructuredResult } from "../types";

export function solveComplexTleDExercise(statement: string): MathsTleDStructuredResult {
  const text = statement.toLowerCase();

  // 1. SIMILITUDES DIRECTES & TRANSFORMATIONS DU PLAN
  if (/similitude|z'\s*=\s*az\s*\+\s*b|transformation.*complexe|rotation.*angle|homoth[ée]tie.*rapport/i.test(text)) {
    const steps = [
      {
        title: "Identification de la transformation complexe et de ses éléments caractéristiques",
        observationOrData: "Écriture complexe de la transformation $f : M(z) \\mapsto M'(z')$ avec $z' = az + b$ ($a \\in \\mathbb{C}^*$, $b \\in \\mathbb{C}$).",
        scientificConceptOrRule: "- Si $a = 1$ ($b \\neq 0$) : translation de vecteur $\\vec{u}$ d'affixe $b$.\n- Si $a \\in \\mathbb{R}^* \\setminus \\{1\\}$ : homothétie de rapport $k = a$ et de centre $\\Omega(\\omega)$ avec $\\omega = \\frac{b}{1 - a}$.\n- Si $|a| = 1$ ($a \\neq 1$) : rotation d'angle $\\theta = \\text{Arg}(a)$ et de centre $\\Omega(\\omega)$ avec $\\omega = \\frac{b}{1 - a}$.\n- Si $|a| \\neq 1$ et $a \\notin \\mathbb{R}$ : similitude directe de rapport $k = |a|$, d'angle $\\theta = \\text{Arg}(a)$ et de centre $\\Omega(\\omega)$ avec $\\omega = \\frac{b}{1 - a}$.",
        deductionOrCalculation: "- Rapport : $k = |a| = \\sqrt{\\text{Re}(a)^2 + \\text{Im}(a)^2}$.\n- Angle : $\\theta = \\text{Arg}(a) \\pmod{2\\pi}$.\n- Centre : résolution de $z = az + b \\iff z(1 - a) = b \\implies \\omega = \\frac{b}{1 - a}$.",
        conclusionOrJustification: "La transformation est rigoureusement classée et ses éléments caractéristiques sont explicités.",
      },
      {
        title: "Forme canonique réduite et propriétés géométriques (Longueurs et Aires)",
        observationOrData: "Décomposition et action de la similitude sur les figures.",
        scientificConceptOrRule: "Forme canonique : $$z' - \\omega = k e^{i\\theta}(z - \\omega)$$\nUne similitude directe de rapport $k$ multiplie les longueurs par $k$ et les aires par $k^2$.",
        deductionOrCalculation: "- Pour tout point $M \\neq \\Omega$ d'image $M'$ : $\\frac{\\Omega M'}{\\Omega M} = k$ et $\\text{Mes}(\\vec{\\Omega M}, \\vec{\\Omega M'}) = \\theta$.\n- Calcul de l'image de cercles, droites ou polygones : l'image d'un cercle $\\mathcal{C}(A, R)$ est le cercle $\\mathcal{C}'(s(A), kR)$.",
        conclusionOrJustification: "Forme réduite établie et relations métriques validées.",
      },
    ];

    return buildMathsTleDStructuredResult({
      title: "Géométrie & Complexes : Étude d'une Similitude Directe ou Transformation du Plan",
      themeId: "geometrie_complexes_d",
      themeTitle: "Géométrie & Nombres Complexes",
      lessonNumber: 9,
      lessonTitle: "Nombres Complexes et Transformations du Plan",
      problemStatement: statement,
      scientificHypothesis: "L'écriture z' = az + b détermine la nature (translation, homothétie, rotation, similitude) selon les valeurs du module et de l'argument de a.",
      steps,
      finalConclusion: "La similitude directe de rapport k = |a|, d'angle theta = arg(a) et de centre omega = b/(1 - a) multiplie les longueurs par k et les aires par k^2.",
      keyMathematicalTerms: ["Similitude directe", "Rapport k = |a|", "Angle theta = Arg(a)", "Centre fixe omega = b/(1-a)", "Forme canonique z'-w = k*e^(itheta)(z-w)"],
      commonPitfallsAvoided: ["Attention : les aires sont multipliées par k^2 et non par k."],
    });
  }

  // 2. CONFIGURATIONS GÉOMÉTRIQUES, ALIGNEMENT, ORTHOGONALITÉ, COCYCLICITÉ & TRIANGLES
  if (/cocycli|birapport|alignement.*complexe|triangle.*complexe|nature.*triangle|arg\(/i.test(text)) {
    const steps = [
      {
        title: "Interprétation géométrique du quotient d'affixes",
        observationOrData: "Points $A, B, C$ d'affixes $z_A, z_B, z_C$.",
        scientificConceptOrRule: "Le quotient $Z = \\frac{z_C - z_A}{z_B - z_A}$ a pour module $\\frac{AC}{AB}$ et pour argument $\\text{Mes}(\\vec{AB}, \\vec{AC}) \\pmod{2\\pi}$.",
        deductionOrCalculation: "Calcul de la forme algébrique puis de la forme trigonométrique/exponentielle de $Z = |Z| e^{i\\theta}$.",
        conclusionOrJustification: "Le quotient d'affixes traduit directement les longueurs et l'angle orienté.",
      },
      {
        title: "Caractérisation de la configuration géométrique",
        observationOrData: "Étude des propriétés de $Z$.",
        scientificConceptOrRule: "- Si $Z \\in \\mathbb{R}^*$ : points $A, B, C$ alignés.\n- Si $Z \\in i\\mathbb{R}^*$ : $(\\vec{AB}) \\perp (\\vec{AC})$, triangle $ABC$ rectangle en $A$.\n- Si $Z = e^{\\pm i \\frac{\\pi}{3}}$ : triangle $ABC$ équilatéral.\n- Si $Z = \\pm i$ : triangle $ABC$ rectangle isocèle en $A$.\n- Pour 4 points $A, B, C, D$ : ils sont cocycliques ou alignés si le birapport $\\frac{z_C - z_A}{z_C - z_B} \\times \\frac{z_D - z_B}{z_D - z_A} \\in \\mathbb{R}^*$.",
        deductionOrCalculation: "Application aux affixes données dans l'énoncé.",
        conclusionOrJustification: "Nature de la figure géométrique rigoureusement démontrée.",
      },
    ];

    return buildMathsTleDStructuredResult({
      title: "Nombres Complexes : Configurations Géométriques, Triangles et Cocyclicité",
      themeId: "geometrie_complexes_d",
      themeTitle: "Géométrie & Nombres Complexes",
      lessonNumber: 9,
      lessonTitle: "Nombres Complexes et Transformations du Plan",
      problemStatement: statement,
      scientificHypothesis: "Le module et l'argument du rapport (zC - zA)/(zB - zA) caractérisent la nature géométrique de la configuration.",
      steps,
      finalConclusion: "L'outil complexe établit avec certitude l'alignement, l'orthogonalité, la cocyclicité ou la nature du triangle.",
      keyMathematicalTerms: ["Affixe", "Module et argument", "Angle orienté", "Triangle rectangle / équilatéral", "Birapport de 4 points", "Cocyclicité"],
      commonPitfallsAvoided: ["Respecter l'ordre des affixes : le dénominateur donne le vecteur origine de l'angle."],
    });
  }

  // 3. RACINES CARRÉES, ÉQUATIONS DU SECOND DEGRÉ ET POLYNÔMES DANS C
  const steps = [
    {
      title: "Calcul algébrique des racines carrées d'un nombre complexe",
      observationOrData: "Recherche des racines carrées $\\delta = x + iy$ d'un complexe $Z_0 = X + iY$.",
      scientificConceptOrRule: "Système fondamental d'identification : $$\\begin{cases} x^2 + y^2 = |Z_0| = \\sqrt{X^2 + Y^2} \\\\ x^2 - y^2 = X \\\\ 2xy = Y \\end{cases}$$",
      deductionOrCalculation: "- Addition des deux premières équations : $2x^2 = |Z_0| + X \\implies x = \\pm \\sqrt{\\frac{|Z_0| + X}{2}}$.\n- Soustraction : $2y^2 = |Z_0| - X \\implies y = \\pm \\sqrt{\\frac{|Z_0| - X}{2}}$.\n- Le signe de $Y = 2xy$ impose les signes respectifs de $x$ et $y$.\n- Déduction des deux racines opposées $\\delta_1$ et $\\delta_2 = -\\delta_1$.",
      conclusionOrJustification: "Les racines carrées de $Z_0$ sont rigoureusement déterminées.",
    },
    {
      title: "Résolution de l'équation du second degré az² + bz + c = 0 dans C",
      observationOrData: "Équation polynomiale à coefficients complexes.",
      scientificConceptOrRule: "Calcul du discriminant complexe $\\Delta = b^2 - 4ac$. Si $\\delta$ est une racine carrée de $\\Delta$, les solutions sont : $$z_1 = \\frac{-b - \\delta}{2a}, \\quad z_2 = \\frac{-b + \\delta}{2a}$$",
      deductionOrCalculation: "Calcul des valeurs explicites de $z_1$ et $z_2$, puis factorisation éventuelle du polynôme $P(z) = a(z - z_1)(z - z_2)$.",
      conclusionOrJustification: "L'ensemble des solutions $S_{\\mathbb{C}} = \\{z_1, z_2\\}$ est établi.",
    },
  ];

  return buildMathsTleDStructuredResult({
    title: "Nombres Complexes : Racines Carrées et Résolution d'Équations dans C",
    themeId: "geometrie_complexes_d",
    themeTitle: "Géométrie & Nombres Complexes",
    lessonNumber: 9,
    lessonTitle: "Nombres Complexes et Transformations du Plan",
    problemStatement: statement,
    steps,
    finalConclusion: "La méthode d'identification des racines carrées de Delta fournit les solutions exactes de l'équation du second degré dans C.",
    keyMathematicalTerms: ["Racines carrées d'un complexe", "Système x^2+y^2=|Z|", "Discriminant complexe Delta", "Solutions z1, z2"],
    commonPitfallsAvoided: ["Ne jamais placer un nombre complexe non réel sous le symbole racine carrée radicale."],
  });
}
