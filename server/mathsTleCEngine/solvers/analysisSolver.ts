/**
 * Solveur expert pour l'Analyse en Terminale C
 * Intégrales, IPP, Aires, Équations différentielles, Suites numériques, Logarithmes, Exponentielles, TVI
 */

import { buildMathsTleCStructuredResult } from "../resultBuilder";
import { MathsTleCStructuredResult } from "../types";

export function solveAnalysisExercise(statement: string): MathsTleCStructuredResult {
  const text = statement.toLowerCase();

  // Cas 1 : Calcul Intégral, Intégration par Parties, Valeur Moyenne et Calcul d'Aires
  if (/int[ée]gral|primitive|int[ée]gration par parties|valeur moyenne.*int|calcul d'aire|aire.*d[ée]limit[ée]e par/i.test(text)) {
    const isIpp = /parties|ipp|\bint.*ln|\bx\s*e\^x|\bx\s*sin|\bx\s*cos/i.test(text);
    const isArea = /aire|superficie|unit[ée] d'aire|u\.?a/i.test(text);

    if (isIpp) {
      const steps = [
        {
          title: "Choix des fonctions pour l'Intégration Par Parties (Règle ALPES)",
          observationOrData: "Calcul de l'intégrale $I = \\int_a^b f(x) dx$ se présentant sous la forme d'un produit de deux fonctions.",
          scientificConceptOrRule: "Formule d'intégration par parties : $$\\int_a^b u(x)v'(x) dx = [u(x)v(x)]_a^b - \\int_a^b u'(x)v(x) dx$$ avec $u$ et $v$ de classe $\\mathcal{C}^1$ sur $[a, b]$.",
          deductionOrCalculation: "- Choix de $u(x)$ selon la priorité ALPES (Arcsin/Arctan -> Logarithme $\\ln$ -> Polynôme -> Exponentielle -> Sinus/Cosinus).\n- Calcul de la dérivée $u'(x)$ et détermination d'une primitive $v(x)$ de $v'(x)$.",
          conclusionOrJustification: "Le produit est décomposé en termes directement intégrables.",
        },
        {
          title: "Calcul du crochet et de la seconde intégrale",
          observationOrData: "Application de la formule d'IPP.",
          scientificConceptOrRule: "Évaluation du crochet : $[u(x)v(x)]_a^b = u(b)v(b) - u(a)v(a)$.",
          deductionOrCalculation: "- Calcul numérique ou formel de $[u(x)v(x)]_a^b$.\n- Calcul de l'intégrale résiduelle $\\int_a^b u'(x)v(x) dx$.\n- Soustraction des deux quantités.",
          conclusionOrJustification: "Valeur exacte de l'intégrale obtenue.",
        },
      ];

      return buildMathsTleCStructuredResult({
        title: "Analyse : Calcul d'Intégrales par Intégration Par Parties (IPP)",
        themeId: "analyse_fonctions",
        themeTitle: "Analyse : Calcul Intégral",
        lessonNumber: 10,
        lessonTitle: "Calcul Intégral, Intégration par Parties et Calcul d'Aires",
        problemStatement: statement,
        scientificHypothesis: "L'IPP permet de transférer la dérivation sur le facteur logarithmique ou polynomial pour simplifier l'intégrande.",
        steps,
        finalConclusion: "L'intégration par parties conduit à la valeur exacte de l'intégrale après évaluation du crochet et de la primitive résiduelle.",
        keyMathematicalTerms: ["Intégration par parties (IPP)", "Règle ALPES", "Crochet [u(x)v(x)]", "Primitive", "Fonction de classe C1"],
        commonPitfallsAvoided: ["Attention aux signes (-) lors du développement du crochet et de la soustraction de la seconde intégrale."],
      });
    }

    if (isArea) {
      const steps = [
        {
          title: "Position relative des courbes et définition de l'intégrale d'aire",
          observationOrData: "Calcul de l'aire $\\mathcal{A}$ de la portion de plan délimitée par $(C_f)$, $(C_g)$ et les droites $x = a$ et $x = b$.",
          scientificConceptOrRule: "Pour $f(x) \\ge g(x)$ sur $[a, b]$, l'aire vaut : $$\\mathcal{A} = \\left( \\int_a^b [f(x) - g(x)] dx \\right) \\times 1\\text{ u.a}$$ où $1\\text{ u.a} = \\|\\vec{i}\\| \\times \\|\\vec{j}\\|\\text{ cm}^2$.",
          deductionOrCalculation: "- Étude du signe de la différence $f(x) - g(x)$ sur $[a, b]$.\n- Subdivisions éventuelles par la relation de Chasles si le signe change.",
          conclusionOrJustification: "L'intégrale représentant l'aire est rigoureusement posée.",
        },
        {
          title: "Calcul de la primitive et conversion en centimètres carrés",
          observationOrData: "Calcul analytique de l'aire.",
          scientificConceptOrRule: "Application du théorème fondamental de l'analyse avec les primitives usuelles.",
          deductionOrCalculation: "- Calcul du résultat en unités d'aire (u.a).\n- Multiplication par $\\|\\vec{i}\\| \\times \\|\\vec{j}\\|$ pour obtenir l'aire en $\\text{cm}^2$.",
          conclusionOrJustification: "Aire géométrique exacte et unité physique validées.",
        },
      ];

      return buildMathsTleCStructuredResult({
        title: "Analyse : Calcul d'Aires et Intégrales",
        themeId: "analyse_fonctions",
        themeTitle: "Analyse : Calcul Intégral",
        lessonNumber: 10,
        lessonTitle: "Calcul Intégral, Intégration par Parties et Calcul d'Aires",
        problemStatement: statement,
        steps,
        finalConclusion: "L'aire délimitée est obtenue par intégration de la fonction d'écart [f(x) - g(x)] et multipliée par l'unité d'aire du repère.",
        keyMathematicalTerms: ["Calcul d'aire", "Unité d'aire (u.a)", "Position relative f(x) - g(x)", "Relation de Chasles"],
        commonPitfallsAvoided: ["Ne jamais oublier de multiplier par l'unité d'aire (ex: 2cm x 2cm = 4 cm^2)."],
      });
    }
  }

  // Cas 2 : Équations Différentielles
  if (/diff[ée]rentielle|y'\s*\+\s*ay|y''\s*\+\s*|y''\s*-\s*|dissolution|croissance d[ée]mographique/i.test(text)) {
    const isSecondOrder = /y''|d\^2y|d2f/i.test(text);

    if (isSecondOrder) {
      const isHarmonic = /y''\s*\+\s*\w*y\s*=\s*0|\+ \d+y/i.test(text);
      const steps = [
        {
          title: "Identification du type de l'équation différentielle du second ordre",
          observationOrData: "Équation de la forme $y'' + my = 0$ avec $m \\in \\mathbb{R}$.",
          scientificConceptOrRule: isHarmonic
            ? "Pour $m = \\omega^2 > 0$, l'équation $y'' + \\omega^2 y = 0$ a pour solutions générales : $$y(x) = A \\cos(\\omega x) + B \\sin(\\omega x), \\quad (A, B) \\in \\mathbb{R}^2$$"
            : "Pour $m = -\\omega^2 < 0$, l'équation $y'' - \\omega^2 y = 0$ a pour solutions générales : $$y(x) = A e^{-\\omega x} + B e^{\\omega x}, \\quad (A, B) \\in \\mathbb{R}^2$$",
          deductionOrCalculation: "Identification de $\\omega = \\sqrt{|m|}$.",
          conclusionOrJustification: "Famille de solutions générales établie.",
        },
        {
          title: "Détermination de la solution unique vérifiant les conditions initiales",
          observationOrData: "Conditions initiales données : $y(x_0) = y_0$ et $y'(x_0) = z_0$.",
          scientificConceptOrRule: "Théorème de Cauchy : Il existe un unique couple de constantes $(A, B)$ satisfaisant le système linéaire des conditions initiales.",
          deductionOrCalculation: "- Calcul de la dérivée première $y'(x)$.\n- Évaluation en $x_0$ et résolution du système 2x2 en $(A, B)$.",
          conclusionOrJustification: "Solution unique entièrement explicitée.",
        },
      ];

      return buildMathsTleCStructuredResult({
        title: "Analyse : Résolution d'une Équation Différentielle Linéaire du Second Ordre",
        themeId: "analyse_fonctions",
        themeTitle: "Analyse : Équations Différentielles",
        lessonNumber: 16,
        lessonTitle: "Équations Différentielles Linéaires du 1er et 2nd Ordre",
        problemStatement: statement,
        scientificHypothesis: "L'équation harmonique y'' + w^2 y = 0 admet des solutions sinusoïdales vérifiant de façon unique les conditions initiales.",
        steps,
        finalConclusion: "La solution générale et l'unique solution vérifiant les conditions initiales sont établies avec rigueur.",
        keyMathematicalTerms: ["Équation différentielle du 2nd ordre", "Pulsation omega", "Harmonique", "Conditions initiales y(x0) et y'(x0)"],
        commonPitfallsAvoided: ["Bien dériver cos(wx) en -w*sin(wx) et sin(wx) en w*cos(wx) lors de l'application des conditions initiales."],
      });
    }

    // Ordre 1 : y' + ay = b
    const steps = [
      {
        title: "Résolution générale de l'équation différentielle linéaire d'ordre 1",
        observationOrData: "Équation $y' + ay = b$ avec $a, b \\in \\mathbb{R}$ ($a \\neq 0$).",
        scientificConceptOrRule: "Les solutions sur $\\mathbb{R}$ sont de la forme : $$y(x) = k e^{-ax} + \\frac{b}{a}, \\quad k \\in \\mathbb{R}$$",
        deductionOrCalculation: "- Solution de l'équation homogène sans second membre $y' + ay = 0$ : $y_0(x) = k e^{-ax}$.\n- Solution particulière constante $y_p(x) = \\frac{b}{a}$.\n- Solution générale : $y(x) = y_0(x) + y_p(x) = k e^{-ax} + \\frac{b}{a}$.",
        conclusionOrJustification: "Ensemble des solutions générales obtenu.",
      },
      {
        title: "Détermination de la constante k par la condition initiale",
        observationOrData: "Condition initiale $y(x_0) = y_0$.",
        scientificConceptOrRule: "$y(x_0) = y_0 \\iff k e^{-a x_0} + \\frac{b}{a} = y_0 \\implies k = \\left(y_0 - \\frac{b}{a}\\right) e^{a x_0}$.",
        deductionOrCalculation: "Calcul de la constante $k$ et écriture de la fonction solution.",
        conclusionOrJustification: "Solution unique du problème de Cauchy obtenue.",
      },
    ];

    return buildMathsTleCStructuredResult({
      title: "Analyse : Résolution de l'Équation Différentielle Linéaire d'Ordre 1",
      themeId: "analyse_fonctions",
      themeTitle: "Analyse : Équations Différentielles",
      lessonNumber: 16,
      lessonTitle: "Équations Différentielles Linéaires du 1er et 2nd Ordre",
      problemStatement: statement,
      steps,
      finalConclusion: "L'équation différentielle admet pour solution unique la fonction y(x) = k*e^(-ax) + b/a ajustée aux conditions aux limites.",
      keyMathematicalTerms: ["Équation différentielle y' + ay = b", "Solution homogène", "Solution particulière b/a", "Problème de Cauchy"],
      commonPitfallsAvoided: ["Ne pas oublier le signe (-) dans l'exposant e^(-ax)."],
    });
  }

  // Cas 3 : Suites Numériques (Convergence, Récurrence, Théorème du Point Fixe)
  if (/suite|raisonnement par r[ée]currence|u_\{n\+1\}|u_n|convergence.*suite/i.test(text)) {
    const steps = [
      {
        title: "Démonstration par récurrence d'un encadrement ou d'une propriété",
        observationOrData: "Suite $(u_n)$ définie par son premier terme $u_0$ et la relation $u_{n+1} = f(u_n)$.",
        scientificConceptOrRule: "Raisonnement par récurrence en 3 étapes : Initialisation au rang $n_0$, Hérédité (supposer $P(k)$ vraie et montrer $P(k+1)$), Conclusion pour tout $n \\ge n_0$.",
        deductionOrCalculation: "- Initialisation vérifiée au rang $n=0$.\n- Hérédité : utilisation de la croissance de $f$ ou de calculs algébriques directs pour établir $P(k+1)$.\n- Conclusion validée pour tout $n \\in \\mathbb{N}$.",
        conclusionOrJustification: "La propriété $P(n)$ est démontrée pour tout entier naturel.",
      },
      {
        title: "Étude du sens de variation et théorème de convergence monotone",
        observationOrData: "Étude du signe de $u_{n+1} - u_n$.",
        scientificConceptOrRule: "Théorème de convergence monotone : Toute suite croissante et majorée (resp. décroissante et minorée) est convergente.",
        deductionOrCalculation: "- Calcul du signe de $u_{n+1} - u_n$ (ou démonstration par récurrence de la monotonie).\n- Mise en relation avec la borne supérieure ou inférieure.",
        conclusionOrJustification: "La suite $(u_n)$ admet une limite finie $l$.",
      },
      {
        title: "Détermination de la limite finie l (Théorème du point fixe)",
        observationOrData: "Continuité de la fonction $f$ sur l'intervalle stable contenant la suite.",
        scientificConceptOrRule: "Puisque $\\lim u_n = l$ et que $f$ est continue, on a $\\lim u_{n+1} = f(l)$, d'où $f(l) = l$.",
        deductionOrCalculation: "Résolution de l'équation du point fixe $f(l) = l$ et sélection de la racine compatible avec l'encadrement de la suite.",
        conclusionOrJustification: "Valeur exacte de la limite $l = \\lim_{n \\to +\\infty} u_n$ déterminée.",
      },
    ];

    return buildMathsTleCStructuredResult({
      title: "Analyse : Étude Complète d'une Suite Récurrente un+1 = f(un)",
      themeId: "analyse_fonctions",
      themeTitle: "Analyse : Suites Numériques",
      lessonNumber: 12,
      lessonTitle: "Suites Numériques (Convergence, Récurrence & Suites récurrentes)",
      problemStatement: statement,
      scientificHypothesis: "La monotonie et le caractère borné assurent la convergence vers un point fixe l = f(l).",
      steps,
      finalConclusion: "La suite converge vers l'unique point fixe l vérifiant f(l) = l dans son intervalle de définition.",
      keyMathematicalTerms: ["Raisonnement par récurrence", "Suite bornée", "Théorème de convergence monotone", "Point fixe f(l) = l"],
      commonPitfallsAvoided: ["Toujours vérifier que le point fixe l appartient à l'intervalle de définition de la suite."],
    });
  }

  // Cas 4 : Étude de Fonctions, Dérivation, TVI, Bijection réciproque
  const steps = [
    {
      title: "Ensemble de définition, limites aux bornes et branches infinies",
      observationOrData: "Fonction numérique $f$ définie sur son domaine $D_f$.",
      scientificConceptOrRule: "Recherche des asymptotes verticales ($x = x_0$ si $\\lim f(x) = \\pm\\infty$), horizontales ($y = l$ si $\\lim f(x) = l$) ou obliques ($y = ax + b$).",
      deductionOrCalculation: "Calcul des limites en levant les indéterminations à l'aide des croissances comparées ($\\\\lim \\frac{\\ln x}{x} = 0$, $\\\\lim \\frac{e^x}{x} = +\\infty$).",
      conclusionOrJustification: "Comportement asymptotique complet établi.",
    },
    {
      title: "Calcul de la dérivée, signe et tableau de variations",
      observationOrData: "Dérivation de la fonction $f$.",
      scientificConceptOrRule: "Le signe de la dérivée $f'(x)$ détermine strictement le sens de variation de $f$.",
      deductionOrCalculation: "Calcul de $f'(x)$, factorisation, étude du signe et tracé du tableau de variation complet.",
      conclusionOrJustification: "Extrema et variations rigoureusement fixés.",
    },
    {
      title: "Théorème des Valeurs Intermédiaires (TVI), Bijection et Dérivée de la Réciproque",
      observationOrData: "Résolution d'équations $f(x) = 0$ et dérivabilité de $f^{-1}$.",
      scientificConceptOrRule: "- Si $f$ est continue et strictement monotone sur $[a, b]$, $f(x) = 0$ admet une unique solution $\\alpha \\in ]a, b[$.\n- Formule de dérivation de la réciproque : $(f^{-1})'(y_0) = \\frac{1}{f'(x_0)}$ avec $y_0 = f(x_0)$ et $f'(x_0) \\neq 0$.",
      deductionOrCalculation: "Application aux valeurs données de l'exercice.",
      conclusionOrJustification: "Résolution complète de l'étude analytique.",
    },
  ];

  return buildMathsTleCStructuredResult({
    title: "Analyse : Étude de Fonctions, Dérivation et Bijection Réciproque",
    themeId: "analyse_fonctions",
    themeTitle: "Analyse : Dérivation & Étude de fonctions",
    lessonNumber: 3,
    lessonTitle: "Dérivabilité, Théorèmes et Étude de Fonctions",
    problemStatement: statement,
    steps,
    finalConclusion: "L'analyse complète des limites, dérivées, variations et bijections permet de caractériser intégralement le comportement de la fonction.",
    keyMathematicalTerms: ["Tableau de variation", "Asymptote oblique", "TVI & Bijection", "Dérivée de la réciproque (f^-1)'(y0) = 1/f'(x0)", "Croissances comparées"],
    commonPitfallsAvoided: ["Ne pas oublier d'évaluer le dénominateur de (f^-1)'(y0) en x0 = f^-1(y0)."],
  });
}
