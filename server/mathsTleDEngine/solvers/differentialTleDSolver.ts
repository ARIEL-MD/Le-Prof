/**
 * Solveur expert pour les Équations Différentielles en Terminale D (Côte d'Ivoire)
 * Couvre la Leçon 11 :
 * - Équations différentielles du 1er ordre :
 *   - Homogène : y' = ay  ou  y' - ay = 0  =>  y(x) = C e^(ax)  (C dans R)
 *   - Avec second membre constant : y' + ay = b  =>  y(x) = C e^(-ax) + b/a
 *   - Avec second membre fonction : y' + ay = g(x)  =>  y = y_H + y_P (solution particulière)
 * - Équations différentielles du 2nd ordre :
 *   - y'' = 0  =>  y(x) = Ax + B  (A, B dans R)
 *   - y'' - w² y = 0 (w > 0)  =>  y(x) = A e^(wx) + B e^(-wx)  (A, B dans R)
 *   - y'' + w² y = 0 (w > 0)  =>  y(x) = A cos(wx) + B sin(wx)  (A, B dans R) ou K cos(wx + phi)
 * - Détermination des constantes d'intégration à l'aide des conditions initiales y(x_0) = y_0 et y'(x_0) = y'_0
 */

import { buildMathsTleDStructuredResult } from "../resultBuilder";
import { MathsTleDStructuredResult } from "../types";

export function solveDifferentialTleDExercise(statement: string): MathsTleDStructuredResult {
  const text = statement.toLowerCase();

  const isSecondOrder = /y''/i.test(text);
  const isSecondOrderOscillating = /y''\s*\+\s*\d*(\s*\.?\s*\d*)?\s*y\s*=\s*0|y''\s*\+\s*\w+\s*y\s*=\s*0|oscillat|cos\(|sin\(/i.test(text);
  const isSecondOrderHyperbolic = /y''\s*-\s*\d*(\s*\.?\s*\d*)?\s*y\s*=\s*0/i.test(text);

  // 1. ÉQUATIONS DU SECOND ORDRE y'' + w² y = 0 OU y'' - w² y = 0
  if (isSecondOrder) {
    if (isSecondOrderOscillating) {
      const steps = [
        {
          title: "Identification de la forme canonique de l'équation différentielle du 2nd ordre",
          observationOrData: "Équation différentielle de type $y'' + \\omega^2 y = 0$ avec $\\omega > 0$.",
          scientificConceptOrRule: "Théorème : Les solutions générales sur $\\mathbb{R}$ de l'équation $y'' + \\omega^2 y = 0$ sont les fonctions de la forme : $$y(x) = A \\cos(\\omega x) + B \\sin(\\omega x) \\quad (A, B \\in \\mathbb{R})$$ ou sous forme d'amplitude/phase : $y(x) = K \\cos(\\omega x + \\varphi)$ avec $K = \\sqrt{A^2 + B^2}$.",
          deductionOrCalculation: "- Identification de la pulsation $\\omega = \\sqrt{\\omega^2}$.\n- Écriture de la solution générale avec constantes réelles arbitraires $A$ et $B$.",
          conclusionOrJustification: "Forme générale des solutions oscillantes établie.",
        },
        {
          title: "Application des conditions initiales et unicité de la solution (Problème de Cauchy)",
          observationOrData: "Conditions initiales données : $y(x_0) = y_0$ et $y'(x_0) = y'_0$.",
          scientificConceptOrRule: "Dérivée de la solution : $$y'(x) = -A\\omega \\sin(\\omega x) + B\\omega \\cos(\\omega x)$$\nLe système linéaire $\\begin{cases} y(x_0) = y_0 \\\\ y'(x_0) = y'_0 \\end{cases}$ admet un unique couple $(A, B) \\in \\mathbb{R}^2$.",
          deductionOrCalculation: "- Substitution de $x_0$ dans $y(x)$ et $y'(x)$.\n- Résolution du système linéaire à 2 inconnues pour déterminer les valeurs exactes de $A$ et $B$.",
          conclusionOrJustification: "L'unique solution répondant aux conditions initiales est entièrement déterminée.",
        },
      ];

      return buildMathsTleDStructuredResult({
        title: "Équations Différentielles : Résolution de y'' + w² y = 0 (2nd Ordre Harmonique)",
        themeId: "analyse_fonctions_d",
        themeTitle: "Analyse : Équations Différentielles",
        lessonNumber: 11,
        lessonTitle: "Équations Différentielles Linéaires du 1er et 2nd Ordre",
        problemStatement: statement,
        scientificHypothesis: "La structure y'' + w² y = 0 admet pour base de solutions les fonctions trigonométriques cos(wx) et sin(wx).",
        steps,
        finalConclusion: "La solution générale est y(x) = A cos(wx) + B sin(wx) ; la prise en compte des conditions initiales fixe les constantes A et B.",
        keyMathematicalTerms: ["Équation différentielle du second ordre", "Forme y'' + w² y = 0", "Solutions y(x) = A cos(wx) + B sin(wx)", "Conditions initiales y(x0) et y'(x0)", "Unicité"],
        commonPitfallsAvoided: ["Attention à la dérivée : la dérivée de cos(wx) est -w sin(wx)."],
      });
    }

    if (isSecondOrderHyperbolic) {
      const steps = [
        {
          title: "Identification de la forme y'' - w² y = 0 et solutions exponentielles",
          observationOrData: "Équation différentielle de type $y'' - \\omega^2 y = 0$ avec $\\omega > 0$.",
          scientificConceptOrRule: "Théorème : Les solutions sur $\\mathbb{R}$ de l'équation $y'' - \\omega^2 y = 0$ sont les fonctions : $$y(x) = A e^{\\omega x} + B e^{-\\omega x} \\quad (A, B \\in \\mathbb{R})$$",
          deductionOrCalculation: "- Identification de $\\omega$.\n- Écriture de la solution générale exponentielle.",
          conclusionOrJustification: "Solution générale en combinaisons linéaires d'exponentielles établie.",
        },
        {
          title: "Détermination des constantes avec les conditions initiales",
          observationOrData: "Conditions $y(x_0) = y_0$ et $y'(x_0) = y'_0$.",
          scientificConceptOrRule: "Dérivée : $y'(x) = A\\omega e^{\\omega x} - B\\omega e^{-\\omega x}$. Système de Cramer à solution unique.",
          deductionOrCalculation: "Résolution du système et calcul de $A$ et $B$.",
          conclusionOrJustification: "Solution unique validée.",
        },
      ];

      return buildMathsTleDStructuredResult({
        title: "Équations Différentielles : Résolution de y'' - w² y = 0",
        themeId: "analyse_fonctions_d",
        themeTitle: "Analyse : Équations Différentielles",
        lessonNumber: 11,
        lessonTitle: "Équations Différentielles Linéaires du 1er et 2nd Ordre",
        problemStatement: statement,
        steps,
        finalConclusion: "La solution générale est y(x) = A e^(wx) + B e^(-wx), particularisée par les conditions initiales.",
        keyMathematicalTerms: ["Équation différentielle y'' - w² y = 0", "Solutions exponentielles", "Conditions initiales"],
        commonPitfallsAvoided: ["Ne pas confondre le signe (-) dans y'' - w^2 y = 0 avec le cas trigonométrique y'' + w^2 y = 0."],
      });
    }
  }

  // 2. ÉQUATIONS DU PREMIER ORDRE y' + ay = b OU y' + ay = g(x)
  const isWithSecondMember = /=\s*[^0\s]|second membre|solution particuli[èe]re/i.test(text);

  if (isWithSecondMember) {
    const steps = [
      {
        title: "Résolution de l'équation différentielle homogène associée (E0)",
        observationOrData: "Équation $(E) : y' + ay = g(x)$ (ou $y' + ay = b$). Équation sans second membre associée $(E_0) : y' + ay = 0$.",
        scientificConceptOrRule: "Les solutions de $(E_0) : y' = -ay$ sont les fonctions : $$y_0(x) = C e^{-ax} \\quad (C \\in \\mathbb{R})$$",
        deductionOrCalculation: "Identification du coefficient $a$ et expression explicite de la solution homogène $y_0(x)$.",
        conclusionOrJustification: "L'ensemble des solutions de l'équation sans second membre est établi.",
      },
      {
        title: "Recherche d'une solution particulière y_p(x)",
        observationOrData: "Présence du second membre $g(x)$.",
        scientificConceptOrRule: "- Si $g(x) = b$ (constante) : solution particulière constante $y_p(x) = \\frac{b}{a}$ ($a \\neq 0$).\n- Si $g(x)$ est un polynôme ou une exponentielle : recherche d'une fonction de même nature par identification des coefficients.",
        deductionOrCalculation: "Substitution de la forme postulée dans l'équation $(E)$ pour déterminer les coefficients de $y_p(x)$.",
        conclusionOrJustification: "La solution particulière $y_p(x)$ est validée.",
      },
      {
        title: "Solution générale de (E) et prise en compte de la condition initiale",
        observationOrData: "Théorème de superposition des solutions linéaires.",
        scientificConceptOrRule: "Toute solution générale de $(E)$ est la somme : $$y(x) = y_0(x) + y_p(x) = C e^{-ax} + y_p(x) \\quad (C \\in \\mathbb{R})$$\nLa condition initiale $y(x_0) = y_0$ détermine de manière unique la constante $C$.",
        deductionOrCalculation: "- Pose de l'équation $C e^{-ax_0} + y_p(x_0) = y_0$.\n- Calcul de $C = (y_0 - y_p(x_0)) e^{ax_0}$.",
        conclusionOrJustification: "Solution exacte et unique du problème différentiel obtenue.",
      },
    ];

    return buildMathsTleDStructuredResult({
      title: "Équations Différentielles : Résolution de y' + ay = g(x) avec Solution Particulière",
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Équations Différentielles",
      lessonNumber: 11,
      lessonTitle: "Équations Différentielles Linéaires du 1er et 2nd Ordre",
      problemStatement: statement,
      scientificHypothesis: "La structure linéaire garantit que la solution générale est la somme de la solution homogène et d'une solution particulière.",
      steps,
      finalConclusion: "La solution générale y(x) = C e^(-ax) + y_p(x) est particularisée par la condition initiale y(x0) = y0.",
      keyMathematicalTerms: ["Équation différentielle du 1er ordre", "Solution homogène y_0(x) = C e^(-ax)", "Solution particulière y_p", "Théorème de superposition", "Condition initiale"],
      commonPitfallsAvoided: ["Attention au signe de a dans y' + ay = 0 : la solution est C e^(-ax) et non C e^(ax)."],
    });
  }

  // 1er ordre homogène simple y' = ay
  const steps = [
    {
      title: "Résolution directe de l'équation différentielle homogène y' = ay",
      observationOrData: "Équation différentielle linéaire du 1er ordre à coefficients constants $y' = ay$.",
      scientificConceptOrRule: "Théorème : Les solutions sur $\\mathbb{R}$ de l'équation $y' = ay$ sont les fonctions : $$y(x) = C e^{ax} \\quad (C \\in \\mathbb{R})$$",
      deductionOrCalculation: "Identification directe de la constante multiplicative $a$.",
      conclusionOrJustification: "Solution générale établie.",
    },
    {
      title: "Détermination de la constante C par la condition initiale",
      observationOrData: "Condition $y(x_0) = y_0$.",
      scientificConceptOrRule: "$$y(x_0) = C e^{ax_0} = y_0 \\implies C = y_0 e^{-ax_0}$$",
      deductionOrCalculation: "Calcul de $C$ et écriture de l'unique solution $y(x) = y_0 e^{a(x - x_0)}$.",
      conclusionOrJustification: "L'unique solution du problème de Cauchy est validée.",
    },
  ];

  return buildMathsTleDStructuredResult({
    title: "Équations Différentielles : Résolution de y' = ay du 1er Ordre",
    themeId: "analyse_fonctions_d",
    themeTitle: "Analyse : Équations Différentielles",
    lessonNumber: 11,
    lessonTitle: "Équations Différentielles Linéaires du 1er et 2nd Ordre",
    problemStatement: statement,
    steps,
    finalConclusion: "L'unique solution est de la forme y(x) = y0 e^(a(x - x0)).",
    keyMathematicalTerms: ["Équation différentielle 1er ordre y' = ay", "Solution y(x) = C e^(ax)", "Condition initiale y(x0) = y0"],
    commonPitfallsAvoided: ["Veiller à ne pas oublier la constante d'intégration C."],
  });
}
