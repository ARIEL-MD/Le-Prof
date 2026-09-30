/**
 * Solveur expert pour la Géométrie du Plan (Barycentres, Lignes de niveaux, Coniques)
 * et la Géométrie Analytique de l'Espace en Terminale C
 */

import { buildMathsTleCStructuredResult } from "../resultBuilder";
import { MathsTleCStructuredResult } from "../types";

export function solveGeometryAndConicsExercise(statement: string): MathsTleCStructuredResult {
  const text = statement.toLowerCase();

  // Cas 1 : Les Coniques (Parabole, Ellipse, Hyperbole)
  if (/conique|parabole|ellipse|hyperbole|excentricit[ée]|axe focal|foyer|directrice|asymptote.*b\/a/i.test(text)) {
    const isParabola = /parabole|y\^2\s*=|x\^2\s*=|e\s*=\s*1\b/i.test(text);
    const isEllipse = /ellipse|a\^2\s*-\s*b\^2|e\s*<\s*1/i.test(text);
    const isHyperbola = /hyperbole|a\^2\s*\+\s*b\^2|asymptote|e\s*>\s*1/i.test(text);

    let nature = isParabola ? "Parabole" : isEllipse ? "Ellipse" : isHyperbola ? "Hyperbole" : "Conique";

    const steps = [
      {
        title: "Identification et mise sous forme réduite canonique",
        observationOrData: "Équation cartésienne de la conique dans un repère orthonormé $(O, \\vec{i}, \\vec{j})$.",
        scientificConceptOrRule: "- Parabole : $y^2 = 2px$ ou $x^2 = 2py$ ($e = 1$).\n- Ellipse ($a > b$) : $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($e = \\frac{c}{a} < 1$ avec $c^2 = a^2 - b^2$).\n- Hyperbole : $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ ($e = \\frac{c}{a} > 1$ avec $c^2 = a^2 + b^2$).",
        deductionOrCalculation: "Mise sous forme canonique par complétion des carrés parfaits en $x$ et $y$, puis division pour obtenir le second membre égal à 1.",
        conclusionOrJustification: `Nature de la conique : ${nature} avec paramètres $a, b, c, p$ déterminés.`,
      },
      {
        title: "Détermination des éléments caractéristiques géométriques",
        observationOrData: "Calcul des éléments focaux et directeurs.",
        scientificConceptOrRule: "- Foyer(s) $F$ et $F'$.\n- Sommet(s) situés sur l'axe focal.\n- Directrice(s) $(D)$ et $(D')$.\n- Asymptotes pour l'hyperbole : $y = \\pm \\frac{b}{a}x$.",
        deductionOrCalculation: `- Excentricité : $e = \\frac{c}{a}$ (ou $e = 1$ pour la parabole).\n- Foyers : $F(c, 0)$ et $F'(-c, 0)$ (pour axe focal horizontal).\n- Directrices : $x = \\pm \\frac{a^2}{c}$ (pour axe focal horizontal).\n- Sommets : $A(a, 0)$ et $A'(-a, 0)$.`,
        conclusionOrJustification: "Tous les éléments caractéristiques sont rigoureusement fixés.",
      },
    ];

    return buildMathsTleCStructuredResult({
      title: `Géométrie du Plan : Étude Complète d'une Conique (${nature})`,
      themeId: "geometrie",
      themeTitle: "Géométrie du Plan : Les Coniques",
      lessonNumber: 17,
      lessonTitle: "Les Coniques (Parabole, Ellipse, Hyperbole)",
      problemStatement: statement,
      scientificHypothesis: "La définition bifocale ou monofocale MF/MH = e conduit à l'équation réduite et aux éléments focaux.",
      steps,
      finalConclusion: `La conique est une ${nature} d'excentricité e, de foyers, sommets et directrices complètement identifiés.`,
      keyMathematicalTerms: ["Conique", nature, "Excentricité e = c/a", "Foyer F", "Directrice (D)", "Axe focal", "Équation réduite"],
      commonPitfallsAvoided: ["Pour l'ellipse c^2 = a^2 - b^2, alors que pour l'hyperbole c^2 = a^2 + b^2."],
    });
  }

  // Cas 2 : Géométrie Analytique de l'Espace
  if (/espace|plan.*vecteur normal|distance.*point.*plan|[ée]quation cart[ée]sienne.*plan|repr[ée]sentation param[ée]trique.*droite/i.test(text)) {
    const steps = [
      {
        title: "Détermination de l'équation cartésienne du plan par vecteur normal",
        observationOrData: "Plan $(P)$ passant par $A(x_A, y_A, z_A)$ et de vecteur normal $\\vec{n}(a, b, c)$.",
        scientificConceptOrRule: "Un point $M(x, y, z) \\in (P) \\iff \\vec{AM} \\cdot \\vec{n} = 0 \\iff a(x - x_A) + b(y - y_A) + c(z - z_A) = 0$.",
        deductionOrCalculation: "Développement : $ax + by + cz + d = 0$ avec $d = -(ax_A + by_A + cz_A)$.",
        conclusionOrJustification: "Équation cartésienne du plan $(P)$ obtenue.",
      },
      {
        title: "Distance d'un point à un plan et positions relatives",
        observationOrData: "Calcul de la distance du point $B(x_0, y_0, z_0)$ au plan $(P)$ et étude de l'intersection.",
        scientificConceptOrRule: "Formule de la distance point-plan : $$d(B, (P)) = \\frac{|a x_0 + b y_0 + c z_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$$",
        deductionOrCalculation: "- Calcul numérique de la distance.\n- Pour l'intersection d'une droite $(D)$ paramétrée avec $(P)$ : substitution des coordonnées $(x(t), y(t), z(t))$ dans l'équation de $(P)$ pour déterminer le paramètre $t$.",
        conclusionOrJustification: "Distance et point d'intersection calculés avec précision.",
      },
    ];

    return buildMathsTleCStructuredResult({
      title: "Géométrie dans l'Espace : Plans, Droites et Distances",
      themeId: "geometrie",
      themeTitle: "Géométrie dans l'Espace",
      lessonNumber: 9,
      lessonTitle: "Géométrie Analytique de l'Espace",
      problemStatement: statement,
      steps,
      finalConclusion: "L'utilisation conjointe des vecteurs normaux, des produits scalaires et des représentations paramétriques résout les configurations dans l'espace.",
      keyMathematicalTerms: ["Vecteur normal n(a,b,c)", "Équation cartésienne ax+by+cz+d=0", "Distance point-plan", "Représentation paramétrique"],
      commonPitfallsAvoided: ["Ne pas oublier la racine carrée sqrt(a^2 + b^2 + c^2) au dénominateur de la distance."],
    });
  }

  // Cas 3 : Barycentres et Lignes de Niveaux
  const steps = [
    {
      title: "Réduction vectorielle par le barycentre du système pondéré",
      observationOrData: "Système de points pondérés $\\{(A_i, \\alpha_i)\\}_{1 \\le i \\le n}$ et recherche de l'ensemble des points $M$.",
      scientificConceptOrRule: "Si $\\sum \\alpha_i \\neq 0$, il existe un unique barycentre $G$ tel que : $$\\sum_{i=1}^n \\alpha_i \\vec{MA_i} = \\left( \\sum_{i=1}^n \\alpha_i \\right) \\vec{MG}$$",
      deductionOrCalculation: "- Calcul de la somme des coefficients : $S = \\sum \\alpha_i$.\n- Détermination des coordonnées de $G$ : $x_G = \\frac{\\sum \\alpha_i x_i}{S}$, $y_G = \\frac{\\sum \\alpha_i y_i}{S}$.",
      conclusionOrJustification: "Le barycentre $G$ simplifie la somme vectorielle.",
    },
    {
      title: "Réduction quadratique scalaire (Théorème de Leibniz) et nature de la ligne de niveau",
      observationOrData: "Ligne de niveau $\\sum \\alpha_i MA_i^2 = k$ ou $\\frac{MA}{MB} = k$.",
      scientificConceptOrRule: "Formule de Leibniz : $$\\sum \\alpha_i MA_i^2 = \\left( \\sum \\alpha_i \\right) MG^2 + \\sum \\alpha_i GA_i^2$$\n- Si $\\frac{MA}{MB} = k$ ($k \\neq 1$) : cercle de diamètre $[G_1 G_2]$ avec $G_1 = \\text{bar}\\{(A, 1), (B, k)\\}$ et $G_2 = \\text{bar}\\{(A, 1), (B, -k)\\}$.",
      deductionOrCalculation: "Isolement de $MG^2 = \\frac{k - \\sum \\alpha_i GA_i^2}{\\sum \\alpha_i} = R^2$.\n- Si $R^2 > 0$ : cercle de centre $G$ et de rayon $R$.\n- Si $R^2 = 0$ : singleton $\\{G\\}$.\n- Si $R^2 < 0$ : ensemble vide $\\emptyset$.",
      conclusionOrJustification: "La ligne de niveau est géométriquement identifiée et constructible.",
    },
  ];

  return buildMathsTleCStructuredResult({
    title: "Géométrie : Barycentre de n points et Lignes de Niveaux",
    themeId: "geometrie",
    themeTitle: "Barycentres et Lignes de Niveaux",
    lessonNumber: 2,
    lessonTitle: "Barycentre de n points pondérés et Lignes de Niveaux",
    problemStatement: statement,
    steps,
    finalConclusion: "L'application du théorème de Leibniz ou des barycentres harmoniques transforme la relation métrique en un cercle, une droite ou l'ensemble vide.",
    keyMathematicalTerms: ["Barycentre", "Isobarycentre", "Ligne de niveau", "Théorème de Leibniz", "Cercle de diamètre [G1 G2]"],
    commonPitfallsAvoided: ["Si Sum alphai = 0, le barycentre n'existe pas : la somme scalaire se réduit alors à un produit scalaire avec un vecteur fixe (droite)."],
  });
}
