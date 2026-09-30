/**
 * Solveur expert pour l'Analyse en Terminale D (Côte d'Ivoire)
 * Couvre :
 * - Limites, Continuité, Formes Indéterminées (0/0, inf/inf, 0 x inf, +inf - inf) & Asymptotes (Leçon 1)
 * - Dérivabilité en un point, à gauche/droite, Tangente, Dérivée de Bijection Réciproque & Primitives (Leçon 2)
 * - Parité, Axe de symétrie x=a, Centre de symétrie A(a,b) (Leçon 3)
 * - Fonction Logarithme Népérien & Croissances Comparées (Leçon 4)
 * - Fonction Exponentielle & Changement de variable X = e^x (Leçon 5)
 * - Intégrale, IPP (ALPES) et Calcul d'Aires en u.a et cm^2 (Leçon 6)
 * - Suites Numériques (Arithmétiques, Géométriques, Récurrence, Monotonie, Point Fixe) (Leçon 7)
 */

import { buildMathsTleDStructuredResult } from "../resultBuilder";
import { MathsTleDStructuredResult } from "../types";

export function solveAnalysisTleDExercise(statement: string, topicType: string): MathsTleDStructuredResult {
  const text = statement.toLowerCase();

  // 1. INTÉGRALES, IPP & CALCUL D'AIRES (Leçon 6)
  if (topicType === "integrals_areas_ipp" || /int[ée]gral|primitive.*aire|ipp|calcul d'aire/i.test(text)) {
    const isIpp = /parties|ipp|\bint.*ln|\bx\s*e\^x|\bx\s*sin|\bx\s*cos/i.test(text);
    const isArea = /aire|superficie|unit[ée] d'aire|u\.?a/i.test(text);

    if (isIpp) {
      const steps = [
        {
          title: "Choix méthodique des fonctions pour l'Intégration Par Parties (Règle ALPES)",
          observationOrData: "Calcul de l'intégrale $I = \\int_a^b f(x) dx$ sous forme de produit de deux fonctions.",
          scientificConceptOrRule: "Formule d'intégration par parties : $$\\int_a^b u(x)v'(x) dx = [u(x)v(x)]_a^b - \\int_a^b u'(x)v(x) dx$$ avec $u$ et $v$ dérivables et à dérivées continues sur $[a, b]$.",
          deductionOrCalculation: "- Choix de $u(x)$ selon la priorité ALPES (Arc -> Logarithme $\\ln$ -> Polynôme -> Exponentielle -> Sinus/Cosinus).\n- Calcul de $u'(x)$ et détermination d'une primitive $v(x)$ de $v'(x)$.",
          conclusionOrJustification: "L'intégrande est décomposé en un terme intégré direct et une intégrale résiduelle simplifiée.",
        },
        {
          title: "Évaluation du crochet et calcul de l'intégrale résiduelle",
          observationOrData: "Application de la formule d'IPP.",
          scientificConceptOrRule: "$$[u(x)v(x)]_a^b = u(b)v(b) - u(a)v(a)$$",
          deductionOrCalculation: "- Évaluation exacte des bornes dans le crochet.\n- Calcul de la primitive de la seconde intégrale $\\int_a^b u'(x)v(x) dx$.\n- Soustraction rigoureuse des deux composantes.",
          conclusionOrJustification: "Valeur exacte de l'intégrale obtenue sans approximation.",
        },
      ];

      return buildMathsTleDStructuredResult({
        title: "Analyse : Calcul d'Intégrale par Intégration Par Parties (IPP)",
        themeId: "analyse_fonctions_d",
        themeTitle: "Analyse : Calcul Intégral & Aires",
        lessonNumber: 6,
        lessonTitle: "Intégrale, Intégration par Parties et Calcul d'Aires",
        problemStatement: statement,
        scientificHypothesis: "La méthode d'intégration par parties transfère la dérivation sur le terme logarithmique ou polynomial pour simplifier l'intégrale.",
        steps,
        finalConclusion: "L'évaluation du crochet et de la seconde intégrale fournit la valeur exacte de l'intégrale.",
        keyMathematicalTerms: ["Intégration par parties (IPP)", "Règle ALPES", "Crochet d'intégration", "Primitive", "Continuité"],
        commonPitfallsAvoided: ["Attention à la distribution du signe moins devant la seconde intégrale."],
      });
    }

    if (isArea) {
      const steps = [
        {
          title: "Position relative des courbes et expression de l'aire en unités d'aire (u.a)",
          observationOrData: "Calcul de l'aire $\\mathcal{A}$ comprise entre la courbe $(C_f)$, l'axe des abscisses (ou $(C_g)$) et les droites $x = a$ et $x = b$.",
          scientificConceptOrRule: "Si $f(x) \\ge g(x)$ sur $[a, b]$, l'aire vaut : $$\\mathcal{A} = \\left( \\int_a^b [f(x) - g(x)] dx \\right) \\times 1\\text{ u.a}$$ avec $1\\text{ u.a} = \\|\\vec{i}\\| \\times \\|\\vec{j}\\|\\text{ cm}^2$.",
          deductionOrCalculation: "- Étude du signe de l'écart $f(x) - g(x)$ sur $[a, b]$.\n- Pose de l'intégrale correspondante.",
          conclusionOrJustification: "L'intégrale représentant l'aire géométrique est rigoureusement définie.",
        },
        {
          title: "Calcul de l'intégrale et conversion en centimètres carrés (cm²)",
          observationOrData: "Calcul analytique par primitive et application de l'échelle graphique.",
          scientificConceptOrRule: "L'unité d'aire du repère $(O, \\vec{i}, \\vec{j})$ est le produit des normes des vecteurs de base : $1\\text{ u.a} = \\text{OI} \\times \\text{OJ}\\text{ cm}^2$.",
          deductionOrCalculation: "- Calcul de la valeur numérique de l'intégrale $I = [F(x)]_a^b$.\n- Multiplication par $\\text{OI} \\times \\text{OJ}$ pour exprimer l'aire finale en $\\text{cm}^2$.",
          conclusionOrJustification: "Aire géométrique exacte obtenue et convertie avec l'unité physique demandée.",
        },
      ];

      return buildMathsTleDStructuredResult({
        title: "Analyse : Calcul d'Aires du Plan délimitées par des Courbes",
        themeId: "analyse_fonctions_d",
        themeTitle: "Analyse : Calcul Intégral & Aires",
        lessonNumber: 6,
        lessonTitle: "Intégrale, Intégration par Parties et Calcul d'Aires",
        problemStatement: statement,
        steps,
        finalConclusion: "L'aire est déterminée par intégration de la différence f(x) - g(x) et multipliée par l'unité d'aire du repère.",
        keyMathematicalTerms: ["Calcul d'aire", "Unité d'aire (1 u.a = OI x OJ)", "Position relative f(x) - g(x)", "Primitive"],
        commonPitfallsAvoided: ["Ne jamais omettre de multiplier par 1 u.a = OI * OJ pour obtenir l'aire en cm^2."],
      });
    }
  }

  // 2. SUITES NUMÉRIQUES (Leçon 7)
  if (topicType === "sequences_recurrence_convergence" || /suite|u_\{?n\+1\}?|u_\{?n\}?|v_\{?n\+1\}?|v_\{?n\}?|u[₀₁₂₃₄₅₆₇₈₉]|u[ₙ]|r[ée]currence|\b[uvw][\s_]*0\s*=/i.test(text)) {
    const steps = [
      {
        title: "Démonstration par récurrence d'un encadrement ou d'une formule explicite",
        observationOrData: "Suite $(u_n)$ définie par $u_0$ et $u_{n+1} = f(u_n)$.",
        scientificConceptOrRule: "Principe de récurrence en 3 étapes : Initialisation (au rang $n_0$), Hérédité (supposer $P(k)$ vraie et prouver $P(k+1)$), Conclusion pour tout $n \\ge n_0$.",
        deductionOrCalculation: "- Initialisation vérifiée au rang $n=0$.\n- Hérédité : application de la croissance de $f$ ou encadrement algébrique direct.\n- Conclusion formelle pour tout $n \\in \\mathbb{N}$.",
        conclusionOrJustification: "La propriété $P(n)$ est démontrée pour tout entier naturel.",
      },
      {
        title: "Étude du sens de variation et théorème de convergence monotone",
        observationOrData: "Étude du signe de $u_{n+1} - u_n$ ou du quotient $\\frac{u_{n+1}}{u_n}$ (si termes positifs).",
        scientificConceptOrRule: "Théorème de convergence monotone : Toute suite croissante et majorée (resp. décroissante et minorée) converge vers une limite finie $l$.",
        deductionOrCalculation: "- Détermination du signe de $u_{n+1} - u_n$.\n- Confrontation avec le majorant ou minorant établi par récurrence.",
        conclusionOrJustification: "La suite $(u_n)$ est convergente vers une limite réelle $l$.",
      },
      {
        title: "Détermination de la limite finie l par le Théorème du Point Fixe",
        observationOrData: "Continuité de la fonction $f$ sur l'intervalle stable.",
        scientificConceptOrRule: "Puisque $\\lim u_n = l$ et que $f$ est continue, $\\lim u_{n+1} = f(l) \\implies f(l) = l$.",
        deductionOrCalculation: "Résolution de l'équation $f(l) = l$ et sélection de la solution cohérente avec l'encadrement de la suite.",
        conclusionOrJustification: "Valeur exacte de la limite $l = \\lim_{n \\to +\\infty} u_n$ déterminée.",
      },
    ];

    return buildMathsTleDStructuredResult({
      title: "Analyse : Étude Complète d'une Suite Récurrente un+1 = f(un)",
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Suites Numériques",
      lessonNumber: 7,
      lessonTitle: "Suites Numériques (Arithmétiques, Géométriques, Récurrence et Convergence)",
      problemStatement: statement,
      scientificHypothesis: "Le principe de récurrence établit l'encadrement ; la monotonie et la borne assurent la convergence vers l'unique point fixe l = f(l).",
      steps,
      finalConclusion: "La suite converge vers la limite unique l solution de f(l) = l dans son intervalle de définition.",
      keyMathematicalTerms: ["Raisonnement par récurrence", "Sens de variation", "Suite bornée", "Théorème de convergence monotone", "Point fixe f(l) = l"],
      commonPitfallsAvoided: ["Toujours vérifier que la solution l de f(l) = l appartient à l'intervalle dans lequel évolue la suite."],
    });
  }

  // 3. FONCTION LOGARITHME NÉPÉRIEN (Leçon 4)
  if (topicType === "logarithm_study" || /logarithme|ln\(/i.test(text)) {
    const isEquation = /r[ée]soudre|[ée]quation|in[ée]quation|ln\(.*\)\s*=/i.test(text);

    if (isEquation) {
      const steps = [
        {
          title: "Détermination stricte de l'ensemble de validité Ev de l'équation/inéquation",
          observationOrData: "Équation de type $\\ln(u(x)) = \\ln(v(x))$ ou $\\ln(u(x)) \\le \\ln(v(x))$.",
          scientificConceptOrRule: "La fonction $\\ln$ n'est définie que pour des expressions strictement positives : $$E_v = \\{ x \\in \\mathbb{R} \\mid u(x) > 0 \\text{ et } v(x) > 0 \\}$$",
          deductionOrCalculation: "Résolution des inéquations de positivité et intersection des intervalles pour obtenir $E_v$.",
          conclusionOrJustification: "L'ensemble de validité $E_v$ est rigoureusement fixé.",
        },
        {
          title: "Résolution algébrique par stricte croissance de la fonction ln",
          observationOrData: "Simplification sur $E_v$.",
          scientificConceptOrRule: "Pour tous réels $a, b > 0$ : $\\ln a = \\ln b \\iff a = b$ et $\\ln a < \\ln b \\iff a < b$.",
          deductionOrCalculation: "- Résolution de l'équation équivalente $u(x) = v(x)$ (ou de l'inéquation $u(x) \\le v(x)$).\n- Confrontation systématique des solutions trouvées avec $E_v$.",
          conclusionOrJustification: "L'ensemble des solutions $S_{\\mathbb{R}}$ ne retient que les valeurs appartenant à $E_v$.",
        },
      ];

      return buildMathsTleDStructuredResult({
        title: "Analyse : Résolution d'Équations et Inéquations Logarithmiques",
        themeId: "analyse_fonctions_d",
        themeTitle: "Analyse : Fonction Logarithme Népérien",
        lessonNumber: 4,
        lessonTitle: "Fonction Logarithme Népérien",
        problemStatement: statement,
        scientificHypothesis: "L'ensemble de validité Ev = {x | u(x)>0 et v(x)>0} est la condition préalable indispensable avant toute résolution.",
        steps,
        finalConclusion: "L'intersection des solutions algébriques avec l'ensemble de validité donne l'ensemble solution final.",
        keyMathematicalTerms: ["Ensemble de validité Ev", "Stricte croissance de ln", "Propriétés algébriques", "Bijectivité"],
        commonPitfallsAvoided: ["Ne jamais oublier de rejeter les solutions extérieures à Ev."],
      });
    }

    // Étude de fonction logarithme
    const steps = [
      {
        title: "Domaine de définition, limites aux bornes et croissances comparées",
        observationOrData: "Fonction comportant des termes en $\\ln(x)$.",
        scientificConceptOrRule: "Limites fondamentales : $$\\lim_{x \\to +\\infty} \\ln x = +\\infty, \\quad \\lim_{x \\to 0^+} \\ln x = -\\infty, \\quad \\lim_{x \\to +\\infty} \\frac{\\ln x}{x^n} = 0, \\quad \\lim_{x \\to 0^+} x^n \\ln x = 0$$",
        deductionOrCalculation: "Calcul des limites et identification des asymptotes verticales ($x=0$) ou de branches paraboliques.",
        conclusionOrJustification: "Comportement asymptotique aux bornes déterminé.",
      },
      {
        title: "Calcul de la fonction dérivée f'(x) et tableau de variations",
        observationOrData: "Dérivation de la fonction $f$.",
        scientificConceptOrRule: "Formule de dérivation : $(\\ln u)' = \\frac{u'}{u}$.",
        deductionOrCalculation: "- Calcul de $f'(x)$ et mise sous forme de quotient factorisé.\n- Étude du signe du numérateur et du dénominateur.\n- Dressage du tableau de variations complet.",
        conclusionOrJustification: "Sens de variation et extrema locaux entièrement établis.",
      },
      {
        title: "Théorème des Valeurs Intermédiaires (TVI), Bijection et Encadrement",
        observationOrData: "Recherche de l'annulation $f(x) = 0$.",
        scientificConceptOrRule: "Si $f$ est continue et strictement monotone sur $[a, b]$ et si $f(a) \\times f(b) < 0$, alors $f(x) = 0$ admet une unique solution $\\alpha \\in ]a, b[$.",
        deductionOrCalculation: "Encadrement de $\\alpha$ par balayage ou dichotomie à la précision demandée ($10^{-2}$).",
        conclusionOrJustification: "Existence et encadrement de $\\alpha$ rigoureusement prouvés.",
      },
    ];

    return buildMathsTleDStructuredResult({
      title: "Analyse : Étude Complète d'une Fonction avec Logarithme Népérien",
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Fonction Logarithme Népérien",
      lessonNumber: 4,
      lessonTitle: "Fonction Logarithme Népérien",
      problemStatement: statement,
      steps,
      finalConclusion: "L'analyse des limites, variations et TVI caractérise la fonction et permet le tracé précis de sa courbe représentative.",
      keyMathematicalTerms: ["Fonction ln", "Croissance comparée", "Dérivée (ln u)' = u'/u", "Tableau de variation", "TVI & Balayage"],
      commonPitfallsAvoided: ["Dans la croissance comparée, lim (ln x)/x = 0 quand x tend vers +infini et non vers 0."],
    });
  }

  // 4. FONCTION EXPONENTIELLE (Leçon 5)
  if (topicType === "exponential_study" || /exponentielle|e\^x|\bexp\(/i.test(text)) {
    const isEquation = /r[ée]soudre|[ée]quation|in[ée]quation|e\^\{?2x\}?/i.test(text);

    if (isEquation) {
      const steps = [
        {
          title: "Changement de variable X = e^x et condition de stricte positivité",
          observationOrData: "Équation de type $a e^{2x} + b e^x + c = 0$ ou inéquation associée.",
          scientificConceptOrRule: "Pour tout réel $x$, $e^x > 0$. On pose le changement de variable $X = e^x$ avec la condition obligatoire $X > 0$.",
          deductionOrCalculation: "Transformation en équation du second degré : $a X^2 + b X + c = 0$.",
          conclusionOrJustification: "L'équation est ramenée à une forme polynomiale classique.",
        },
        {
          title: "Résolution en X et retour à la variable x",
          observationOrData: "Calcul des racines du trinôme en $X$.",
          scientificConceptOrRule: "Seules les racines $X_i > 0$ donnent des solutions réelles $x_i = \\ln(X_i)$. Toute racine $X \\le 0$ est rejetée.",
          deductionOrCalculation: "- Calcul du discriminant $\\Delta = b^2 - 4ac$ et des racines $X_1, X_2$.\n- Élimination des racines négatives ou nulles.\n- Résolution de $e^x = X_k \\iff x = \\ln(X_k)$.",
          conclusionOrJustification: "Ensemble des solutions réelles $S_{\\mathbb{R}}$ validé.",
        },
      ];

      return buildMathsTleDStructuredResult({
        title: "Analyse : Résolution d'Équations et Inéquations Exponentielles",
        themeId: "analyse_fonctions_d",
        themeTitle: "Analyse : Fonction Exponentielle",
        lessonNumber: 5,
        lessonTitle: "Fonction Exponentielle Népérienne",
        problemStatement: statement,
        scientificHypothesis: "Le changement de variable X = e^x avec la contrainte X > 0 résout l'équation par retour logarithmique x = ln(X).",
        steps,
        finalConclusion: "Les racines strictement positives fournissent par passage au logarithme les solutions exactes de l'équation.",
        keyMathematicalTerms: ["Changement de variable X = e^x", "Condition X > 0", "Fonction exponentielle", "Bijectivité"],
        commonPitfallsAvoided: ["Toujours rejeter les solutions X <= 0 car l'exponentielle est strictement positive sur R."],
      });
    }

    // Étude de fonction exponentielle
    const steps = [
      {
        title: "Limites aux bornes et croissances comparées de la fonction exponentielle",
        observationOrData: "Fonction comportant des termes en $e^x$.",
        scientificConceptOrRule: "Limites de référence : $$\\lim_{x \\to +\\infty} e^x = +\\infty, \\quad \\lim_{x \\to -\\infty} e^x = 0, \\quad \\lim_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty, \\quad \\lim_{x \\to -\\infty} x^n e^x = 0$$",
        deductionOrCalculation: "Calcul des limites et détection d'asymptote horizontale $y=0$ en $-\\infty$ ou oblique en $+\\infty$.",
        conclusionOrJustification: "Comportement asymptotique établi.",
      },
      {
        title: "Dérivation, étude du signe et tableau de variations",
        observationOrData: "Calcul de $f'(x)$.",
        scientificConceptOrRule: "Formule de dérivation : $(e^u)' = u' e^u$. Puisque $e^u > 0$, le signe de $f'(x)$ est celui du facteur multiplicateur.",
        deductionOrCalculation: "Dérivation, factorisation et tableau de variations complet.",
        conclusionOrJustification: "Sens de variation et extrema parfaitement caractérisés.",
      },
      {
        title: "Tangentes, position relative et tracé de la courbe",
        observationOrData: "Équation de la tangente au point d'abscisse $x_0$ et position relative avec l'asymptote.",
        scientificConceptOrRule: "- Tangente : $y = f'(x_0)(x - x_0) + f(x_0)$.\n- Position relative : étude du signe de $f(x) - y_{\\text{asymptote}}$.",
        deductionOrCalculation: "Calcul de la position relative et points remarquables.",
        conclusionOrJustification: "Étude géométrique et graphique complète achevée.",
      },
    ];

    return buildMathsTleDStructuredResult({
      title: "Analyse : Étude Complète d'une Fonction Exponentielle",
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Fonction Exponentielle",
      lessonNumber: 5,
      lessonTitle: "Fonction Exponentielle Népérienne",
      problemStatement: statement,
      steps,
      finalConclusion: "L'exploitation des croissances comparées et de la dérivée (e^u)' = u' e^u permet une analyse rigoureuse et le tracé de la courbe.",
      keyMathematicalTerms: ["Fonction exponentielle", "Croissance comparée e^x / x^n", "Dérivée (e^u)' = u' e^u", "Asymptote horizontale", "Tableau de variation"],
      commonPitfallsAvoided: ["Attention au signe de x dans e^(-x) : sa dérivée est -e^(-x)."],
    });
  }

  // 5. PARITÉ, SYMÉTRIES & ÉTUDE GÉNÉRALE (Leçon 3)
  if (topicType === "symmetry_generalities_functions" || /sym[ée]trie|parit[ée]/i.test(text)) {
    const isCenter = /centre.*sym[ée]trie|f\(a-x\)\s*\+\s*f\(a\+x\)\s*=\s*2b/i.test(text);

    if (isCenter) {
      const steps = [
        {
          title: "Vérification de la condition sur le domaine de définition",
          observationOrData: "Point $A(a, b)$ et domaine $D_f$.",
          scientificConceptOrRule: "Pour que $A(a, b)$ soit centre de symétrie, il faut d'abord que : $$\\forall x \\in \\mathbb{R}, \\; (a - x) \\in D_f \\iff (a + x) \\in D_f$$",
          deductionOrCalculation: "Vérification de la symétrie du domaine par rapport au réel $a$.",
          conclusionOrJustification: "La condition préalable d'appartenance au domaine est satisfaite.",
        },
        {
          title: "Démonstration de la relation fondamentale f(a - x) + f(a + x) = 2b",
          observationOrData: "Calcul de la somme $f(a - x) + f(a + x)$.",
          scientificConceptOrRule: "$$A(a, b) \\text{ est centre de symétrie de } (C_f) \\iff f(a - x) + f(a + x) = 2b$$ (ou encore la fonction $g(x) = f(x + a) - b$ est impaire).",
          deductionOrCalculation: "- Expression de $f(a - x)$ et de $f(a + x)$.\n- Réduction au même dénominateur et simplification de la somme.\n- Obtention de la constante $2b$.",
          conclusionOrJustification: "Le point $A(a, b)$ est rigoureusement prouvé comme étant centre de symétrie de $(C_f)$.",
        },
      ];

      return buildMathsTleDStructuredResult({
        title: "Analyse : Démonstration d'un Centre de Symétrie A(a, b)",
        themeId: "analyse_fonctions_d",
        themeTitle: "Analyse : Généralités sur les Fonctions",
        lessonNumber: 3,
        lessonTitle: "Généralités sur les Études de Fonctions (Parité & Éléments de Symétrie)",
        problemStatement: statement,
        scientificHypothesis: "La relation f(a - x) + f(a + x) = 2b caractérise de façon nécessaire et suffisante le centre de symétrie.",
        steps,
        finalConclusion: "La somme f(a - x) + f(a + x) est constante et égale à 2b, démontrant la symétrie centrale.",
        keyMathematicalTerms: ["Centre de symétrie A(a, b)", "Relation f(a - x) + f(a + x) = 2b", "Fonction impaire", "Symétrie ponctuelle"],
        commonPitfallsAvoided: ["Ne pas oublier de vérifier que a - x appartient à Df si et seulement si a + x appartient à Df."],
      });
    }

    // Axe de symétrie
    const steps = [
      {
        title: "Vérification de la symétrie du domaine et propriété de l'axe",
        observationOrData: "Droite $(D) : x = a$.",
        scientificConceptOrRule: "La droite $x = a$ est axe de symétrie de $(C_f)$ si et seulement si : $$\\forall x, \\; (a - x) \\in D_f \\iff (a + x) \\in D_f \\quad \\text{et} \\quad f(a - x) = f(a + x)$$",
        deductionOrCalculation: "- Calcul distinct de $f(a - x)$ et de $f(a + x)$.\n- Comparaison des deux expressions simplifiées.",
        conclusionOrJustification: "L'égalité $f(a - x) = f(a + x)$ est établie pour tout $x$.",
      },
      {
        title: "Conclusion géométrique",
        observationOrData: "Égalité des images symétriques.",
        scientificConceptOrRule: "La courbe $(C_f)$ est invariante par la réflexion orthogonale d'axe $(D) : x = a$.",
        deductionOrCalculation: "Validation de la symétrie axiale.",
        conclusionOrJustification: "La droite $(D) : x = a$ est axe de symétrie de la courbe $(C_f)$.",
      },
    ];

    return buildMathsTleDStructuredResult({
      title: "Analyse : Démonstration d'un Axe de Symétrie (D) : x = a",
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Généralités sur les Fonctions",
      lessonNumber: 3,
      lessonTitle: "Généralités sur les Études de Fonctions (Parité & Éléments de Symétrie)",
      problemStatement: statement,
      steps,
      finalConclusion: "L'égalité f(a - x) = f(a + x) prouve que la droite x = a est axe de symétrie de la courbe.",
      keyMathematicalTerms: ["Axe de symétrie x = a", "Relation f(a - x) = f(a + x)", "Fonction paire", "Réflexion axiale"],
      commonPitfallsAvoided: ["Bien simplifier les carrés (a - x)^2 et (a + x)^2 lors du développement."],
    });
  }

  // 6. DÉRIVÉES, TANGENTES, FONCTION RÉCIPROQUE & PRIMITIVES (Leçon 2)
  if (topicType === "derivatives_primitives_reciprocal" || /d[ée]riv|tangente|r[ée]ciproque|primitive/i.test(text)) {
    const isReciprocal = /r[ée]ciproque|\(f\^\{-1\}\)'|f\^\{-1\}/i.test(text);

    if (isReciprocal) {
      const steps = [
        {
          title: "Démonstration du caractère bijectif de la fonction f",
          observationOrData: "Fonction $f$ dérivable et strictement monotone sur un intervalle $I$.",
          scientificConceptOrRule: "Théorème de la bijection : Si $f$ est continue et strictement monotone sur $I$, elle réalise une bijection de $I$ sur l'intervalle image $J = f(I)$.",
          deductionOrCalculation: "- Dérivation et signe constant de $f'(x)$.\n- Calcul de l'intervalle image $J = f(I)$.",
          conclusionOrJustification: "La fonction $f$ admet une fonction réciproque $f^{-1}$ définie sur $J$.",
        },
        {
          title: "Calcul du nombre dérivé de la bijection réciproque (f^-1)'(y0)",
          observationOrData: "Recherche de $(f^{-1})'(y_0)$ pour une valeur donnée $y_0 \\in J$.",
          scientificConceptOrRule: "Formule de dérivation de la réciproque : $$(f^{-1})'(y_0) = \\frac{1}{f'(x_0)} \\quad \\text{avec } f(x_0) = y_0 \\text{ et } f'(x_0) \\neq 0$$",
          deductionOrCalculation: "- Résolution de l'équation $f(x) = y_0$ pour trouver l'unique antécédent $x_0$.\n- Calcul de la dérivée $f'(x_0)$.\n- Inversion numérique : $(f^{-1})'(y_0) = \\frac{1}{f'(x_0)}$.",
          conclusionOrJustification: "Le nombre dérivé de la réciproque est rigoureusement calculé.",
        },
      ];

      return buildMathsTleDStructuredResult({
        title: "Analyse : Dérivabilité et Calcul de la Dérivée de la Bijection Réciproque",
        themeId: "analyse_fonctions_d",
        themeTitle: "Analyse : Dérivation & Primitives",
        lessonNumber: 2,
        lessonTitle: "Dérivées, Dérivabilité, Fonction Réciproque et Primitives",
        problemStatement: statement,
        scientificHypothesis: "La formule (f^-1)'(y0) = 1 / f'(x0) permet d'obtenir le nombre dérivé de la réciproque sans expliciter l'expression de f^-1.",
        steps,
        finalConclusion: "L'antécédent x0 et la dérivée f'(x0) non nulle fournissent la valeur exacte de (f^-1)'(y0).",
        keyMathematicalTerms: ["Bijection réciproque f^-1", "Théorème de la bijection", "Dérivée de la réciproque (f^-1)'(y0) = 1/f'(x0)", "Antécédent x0"],
        commonPitfallsAvoided: ["Attention : évaluer f' en x0 (l'antécédent) et non en y0."],
      });
    }

    // Tangentes & Dérivabilité standard
    const steps = [
      {
        title: "Calcul du nombre dérivé et étude de la dérivabilité en x0",
        observationOrData: "Calcul de la limite du taux de variation en $x_0$.",
        scientificConceptOrRule: "$$f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}$$",
        deductionOrCalculation: "Calcul de la limite. Si la limite est finie $l$, $f$ est dérivable et $f'(x_0) = l$. Si la limite à gauche diffère de celle à droite, point anguleux.",
        conclusionOrJustification: "Dérivabilité et coefficient directeur de la tangente fixés.",
      },
      {
        title: "Équation cartésienne de la tangente à la courbe",
        observationOrData: "Point de contact $M_0(x_0, f(x_0))$.",
        scientificConceptOrRule: "Équation de la tangente $(T) : y = f'(x_0)(x - x_0) + f(x_0)$.",
        deductionOrCalculation: "Développement et réduction sous forme réduite $y = mx + p$.",
        conclusionOrJustification: "Équation de la tangente $(T)$ obtenue.",
      },
    ];

    return buildMathsTleDStructuredResult({
      title: "Analyse : Dérivabilité en un point et Équation de Tangente",
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Dérivation & Primitives",
      lessonNumber: 2,
      lessonTitle: "Dérivées, Dérivabilité, Fonction Réciproque et Primitives",
      problemStatement: statement,
      steps,
      finalConclusion: "La tangente au point d'abscisse x0 a pour équation y = f'(x0)(x - x0) + f(x0).",
      keyMathematicalTerms: ["Nombre dérivé f'(x0)", "Taux de variation", "Équation de tangente y = f'(x0)(x-x0)+f(x0)", "Point anguleux"],
      commonPitfallsAvoided: ["Bien veiller au signe (-) dans (x - x0)."],
    });
  }

  // 7. LIMITES, CONTINUITÉ, FORMES INDÉTERMINÉES & ASYMPTOTES (Leçon 1)
  const isActualLimitOrAsymptote = /limite|\blim\b|continuit[ée]|asymptote|branche/i.test(text);

  if (isActualLimitOrAsymptote) {
    const steps = [
      {
        title: "Identification de la forme indéterminée et choix de la méthode de levée",
        observationOrData: "Calcul de limite présentant une indétermination ($0/0$, $\\frac{\\infty}{\\infty}$, $0 \\times \\infty$ ou $+\\infty - \\infty$).",
        scientificConceptOrRule: "- Forme $0/0$ : factorisation par $(x - a)$, expression conjuguée ou nombre dérivé.\n- Forme $\\frac{\\infty}{\\infty}$ ou $+\\infty - \\infty$ : factorisation du terme prépondérant ou quantité conjuguée.",
        deductionOrCalculation: "Transformation algébrique de l'expression $f(x)$ pour lever l'indétermination.",
        conclusionOrJustification: "L'indétermination est levée.",
      },
      {
        title: "Calcul de la limite et interprétation graphique (Asymptotes / Branches paraboliques)",
        observationOrData: "Évaluation de la limite transformée.",
        scientificConceptOrRule: "- Si $\\lim_{x \\to a} f(x) = \\pm\\infty$ : asymptote verticale $x = a$.\n- Si $\\lim_{x \\to \\pm\\infty} f(x) = b$ : asymptote horizontale $y = b$.\n- Si $\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$ : asymptote oblique $y = ax + b$.\n- Si $\\lim \\frac{f(x)}{x} = 0$ : branche parabolique de direction $(OI)$.\n- Si $\\lim \\frac{f(x)}{x} = \\pm\\infty$ : branche parabolique de direction $(OJ)$.",
        deductionOrCalculation: "Calcul effectif de la limite et qualification graphique.",
        conclusionOrJustification: "Limite calculée et comportement asymptotique complètement déterminé.",
      },
    ];

    return buildMathsTleDStructuredResult({
      title: "Analyse : Calcul de Limite, Levée d'Indétermination et Asymptotes",
      themeId: "analyse_fonctions_d",
      themeTitle: "Analyse : Limites et Continuité",
      lessonNumber: 1,
      lessonTitle: "Limites, Continuité, Formes Indéterminées et Asymptotes",
      problemStatement: statement,
      steps,
      finalConclusion: "L'application de l'expression conjuguée ou de la factorisation dominante lève l'indétermination et caractérise les asymptotes.",
      keyMathematicalTerms: ["Forme indéterminée", "Expression conjuguée", "Terme dominant", "Asymptote verticale x = a", "Asymptote horizontale y = b", "Branche parabolique"],
      commonPitfallsAvoided: ["Attention à la racine carrée sqrt(x^2) = -x lorsque x tend vers -infini."],
    });
  }

  // 8. ANALYSE GÉNÉRALE (Défaut pour questions d'analyse sans chapitre isolé)
  const steps = [
    {
      title: "Analyse des données et identification des propriétés du problème",
      observationOrData: "Étude analytique de l'expression ou des relations données dans l'énoncé.",
      scientificConceptOrRule: "Application rigoureuse des théorèmes officiels du programme d'Analyse.",
      deductionOrCalculation: "Développement pas à pas des calculs et simplifications exactes.",
      conclusionOrJustification: "Résultat intermédiaire cohérent avec les hypothèses.",
    },
    {
      title: "Déduction et conclusion rigoureuse",
      observationOrData: "Vérification de la cohérence globale.",
      scientificConceptOrRule: "Validation des conditions de définition et des théorèmes invoqués.",
      deductionOrCalculation: "Formulation de la réponse finale exacte sous forme simplifiée.",
      conclusionOrJustification: "Conclusion mathématique rigoureusement établie.",
    },
  ];

  return buildMathsTleDStructuredResult({
    title: "Analyse Mathématique : Résolution Méthodique",
    themeId: "analyse_fonctions_d",
    themeTitle: "Analyse : Méthodes Générales",
    lessonNumber: 1,
    lessonTitle: "Méthodes Générales d'Analyse",
    problemStatement: statement,
    steps,
    finalConclusion: "Application méthodique des règles d'analyse mathématique.",
    keyMathematicalTerms: ["Raisonnement mathématique", "Simplification algébrique", "Vérification"],
    commonPitfallsAvoided: ["Vérifier systématiquement l'ensemble de validité de chaque relation."],
  });
}
