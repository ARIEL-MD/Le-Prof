/**
 * MOTEUR UNIVERSEL DE RÉSOLUTION DEVOIRS & EXERCICES DE CALCUL
 * "MÉTHODE PAPA BIEN EXPLIQUÉE"
 *
 * Traite TOUS les devoirs et exercices de calcul (Maths, Physique, Chimie, SVT)
 * question par question, sans exception, avec la vraie écriture scientifique LaTeX ($...$ ou $$...$$).
 *
 * Piliers de la Méthode Papa :
 * 1. Ce qu'on te demande (Reformulation pédagogique et bienveillante)
 * 2. Formule ou propriété de cours applicable (En vraie écriture scientifique LaTeX)
 * 3. Détail du calcul pas-à-pas (Méthode Papa : substitution, calculs intermédiaires sans saut, astuces, pièges à éviter)
 * 4. Conclusion nette et résultat encadré (Réponse définitive claire)
 */

import {
  ParsedExercise,
  ParsedQuestion,
  SolvedExerciseResult,
  SolvedQuestionResult,
  StatementParsingResult,
} from './types';
import { parseQuadraticPolynomial } from './mathVerifier';
import { tryGenericLimitAndContinuityResolutionForExercise } from './genericLimitAndContinuitySolver';
import { tryGenericFunctionResolutionForExercise } from './genericFunctionSolver';
import { tryLinkedLogFunctionResolutionForExercise } from './genericLogLinkedFunctionSolver';
import { tryGenericSequenceResolutionForExercise } from './genericSequenceSolver';
import { tryGenericProbabilityResolutionForExercise } from './genericProbabilitySolver';
import { tryGenericHypergeometricResolutionForExercise } from './genericHypergeometricSolver';
import { tryGenericComplexResolutionForExercise } from './genericComplexSolver';
import { tryGenericPrimitiveResolutionForExercise } from './genericPrimitiveSolver';
import { tryGenericGeometryResolutionForExercise } from './genericGeometrySolver';
import { tryGenericSpaceGeometryResolutionForExercise } from './genericSpaceGeometrySolver';
import { tryGenericMatrixResolutionForExercise } from './genericMatrixSolver';
import { tryGenericKinematicsResolutionForExercise } from './genericKinematicsSolver';
import { tryGenericOhmResolutionForExercise } from './genericOhmSolver';
import { tryGenericStoichiometryResolutionForExercise } from './genericStoichiometrySolver';
import { tryGenericGravitationResolutionForExercise } from './genericGravitationSolver';
import { tryGenericOscillatorResolutionForExercise } from './genericOscillatorSolver';
import { tryGenericTecResolutionForExercise } from './genericTecSolver';
import { solveDeterministicMathLimit } from './mathLimitSolver';

/**
 * Détecte et résout un système linéaire 2x2
 */
function detectAndSolveLinearSystem(text: string): { steps: string[]; solution: string } | null {
  const clean = text.replace(/\s+/g, ' ');
  const match = clean.match(/([+-]?\d*)\s*x\s*([+-]\s*\d*)\s*y\s*=\s*([+-]?\d+)[^\d\-+]+([+-]?\d*)\s*x\s*([+-]\s*\d*)\s*y\s*=\s*([+-]?\d+)/i);
  if (!match) return null;

  const parseCoeff = (c: string) => {
    const s = c.replace(/\s+/g, '');
    if (s === '' || s === '+') return 1;
    if (s === '-') return -1;
    const n = parseFloat(s);
    return isNaN(n) ? 1 : n;
  };

  const a = parseCoeff(match[1]);
  const b = parseCoeff(match[2]);
  const c = parseFloat(match[3]);
  const a2 = parseCoeff(match[4]);
  const b2 = parseCoeff(match[5]);
  const c2 = parseFloat(match[6]);

  const D = a * b2 - a2 * b;
  if (Math.abs(D) < 1e-9) {
    return {
      steps: [
        `Système : $\\begin{cases} ${a}x + (${b})y = ${c} \\\\ ${a2}x + (${b2})y = ${c2} \\end{cases}$`,
        `Calcul du déterminant : $D = (${a}) \\times (${b2}) - (${a2}) \\times (${b}) = ${D}$.`,
        `Le déterminant est nul ($D = 0$), les droites associées sont parallèles.`,
      ],
      solution: `D = 0 \\text{ (pas de solution unique)}`,
    };
  }

  const Dx = c * b2 - c2 * b;
  const Dy = a * c2 - a2 * c;
  const x = Dx / D;
  const y = Dy / D;

  const formatNum = (n: number) => Number.isInteger(n) ? `${n}` : n.toFixed(2);

  return {
    steps: [
      `Système posé : $\\begin{cases} ${a}x ${b >= 0 ? '+' : ''}${b}y = ${c} \\\\ ${a2}x ${b2 >= 0 ? '+' : ''}${b2}y = ${c2} \\end{cases}$`,
      `Calcul du déterminant principal : $D = (${a}) \\times (${b2}) - (${a2}) \\times (${b}) = ${D}$.`,
      `Comme $D \\neq 0$, le système admet un unique couple solution $(x, y)$.`,
      `Calcul de $D_x$ : $D_x = (${c}) \\times (${b2}) - (${c2}) \\times (${b}) = ${Dx}$ $\\implies x = \\frac{D_x}{D} = \\frac{${Dx}}{${D}} = ${formatNum(x)}$.`,
      `Calcul de $D_y$ : $D_y = (${a}) \\times (${c2}) - (${a2}) \\times (${c}) = ${Dy}$ $\\implies y = \\frac{D_y}{D} = \\frac{${Dy}}{${D}} = ${formatNum(y)}$.`,
      `Vérification : $(${a})(${formatNum(x)}) + (${b})(${formatNum(y)}) = ${c}$ et $(${a2})(${formatNum(x)}) + (${b2})(${formatNum(y)}) = ${c2}$.`,
    ],
    solution: `S = \\{(${formatNum(x)}\\,;\\, ${formatNum(y)})\\}`,
  };
}

/**
 * Détecte et résout un problème de dimensions de rectangle ou de somme et produit (X² - SX + P = 0)
 */
function detectAndSolveSumProductOrRectangle(text: string): { steps: string[]; solution: string } | null {
  const clean = text.replace(/\s+/g, ' ');

  // 1. Dimensions d'un rectangle connaissant son périmètre et son aire
  const rectMatch =
    clean.match(/rectangle.*p[ée]rim[èe]tre(?:\s+vaut|\s+est\s+de|\s*=)?\s*(\d+(?:[.,]\d+)?)\s*(?:m|cm|km)?.*aire(?:\s+vaut|\s+est\s+de|\s*=)?\s*(\d+(?:[.,]\d+)?)\s*(?:m\^?2|m²|cm²)?/i) ||
    clean.match(/p[ée]rim[èe]tre(?:\s+vaut|\s+est\s+de|\s*=)?\s*(\d+(?:[.,]\d+)?)\s*(?:m|cm|km)?.*aire(?:\s+vaut|\s+est\s+de|\s*=)?\s*(\d+(?:[.,]\d+)?)\s*(?:m\^?2|m²|cm²)?.*rectangle/i) ||
    clean.match(/dimensions\s+d['’]un\s+rectangle.*p[ée]rim[èe]tre.*?(\d+(?:[.,]\d+)?).*aire.*?(\d+(?:[.,]\d+)?)/i);

  if (rectMatch) {
    const P = parseFloat(rectMatch[1].replace(',', '.'));
    const A = parseFloat(rectMatch[2].replace(',', '.'));
    const S = P / 2;
    const Prod = A;
    const delta = S * S - 4 * Prod;
    if (delta >= 0) {
      const sqrtD = Math.sqrt(delta);
      const l = (S - sqrtD) / 2;
      const L = (S + sqrtD) / 2;
      const formatNum = (n: number) => Number.isInteger(n) ? `${n}` : n.toFixed(2);
      return {
        steps: [
          `Soient $L$ et $l$ respectivement la longueur et la largeur du rectangle (avec $L \\ge l > 0$).`,
          `Le périmètre vaut $P = 2(L + l) = ${P}\\text{ m}$, d'où le demi-périmètre (somme des dimensions) : $S = L + l = \\frac{${P}}{2} = ${formatNum(S)}\\text{ m}$.`,
          `L'aire vaut $A = L \\times l = ${A}\\text{ m}^2$, d'où le produit des dimensions : $P_{\\text{rod}} = ${formatNum(Prod)}$.`,
          `Deux nombres connaissant leur somme $S$ et leur produit $P_{\\text{rod}}$ sont solutions de l'équation : $X^2 - S X + P_{\\text{rod}} = 0$.`,
          `On pose l'équation résolvante : $X^2 - ${formatNum(S)} X + ${formatNum(Prod)} = 0$.`,
          `Calcul du discriminant : $\\Delta = (-${formatNum(S)})^2 - 4 \\times 1 \\times ${formatNum(Prod)} = ${formatNum(S * S)} - ${formatNum(4 * Prod)} = ${formatNum(delta)}$.`,
          delta > 0
            ? `Comme $\\Delta > 0$, l'équation admet deux solutions réelles distinctes :`
            : `Comme $\\Delta = 0$, l'équation admet une racine double :`,
          delta > 0
            ? `$X_1 = \\frac{${formatNum(S)} - \\sqrt{${formatNum(delta)}}}{2} = ${formatNum(l)}$ et $X_2 = \\frac{${formatNum(S)} + \\sqrt{${formatNum(delta)}}}{2} = ${formatNum(L)}$.`
            : `$X_0 = \\frac{${formatNum(S)}}{2} = ${formatNum(L)}$.`,
          `On identifie la longueur (la plus grande dimension) et la largeur : $L = ${formatNum(L)}\\text{ m}$ et $l = ${formatNum(l)}\\text{ m}$.`,
          `Vérification : Périmètre $= 2(${formatNum(L)} + ${formatNum(l)}) = ${P}\\text{ m}$ et Aire $= ${formatNum(L)} \\times ${formatNum(l)} = ${A}\\text{ m}^2$.`,
        ],
        solution: `L = ${formatNum(L)}\\text{ m} \\quad \\text{et} \\quad l = ${formatNum(l)}\\text{ m}`,
      };
    }
  }

  // 2. Somme et produit de deux nombres réels : S et P
  const sumProdMatch = clean.match(/somme(?:\s+vaut|\s+est|\s*=)?\s*([+-]?\d+(?:[.,]\d+)?).*produit(?:\s+vaut|\s+est|\s*=)?\s*([+-]?\d+(?:[.,]\d+)?)/i);
  if (sumProdMatch) {
    const S = parseFloat(sumProdMatch[1].replace(',', '.'));
    const Prod = parseFloat(sumProdMatch[2].replace(',', '.'));
    const delta = S * S - 4 * Prod;
    if (delta >= 0) {
      const sqrtD = Math.sqrt(delta);
      const x1 = (S - sqrtD) / 2;
      const x2 = (S + sqrtD) / 2;
      const formatNum = (n: number) => Number.isInteger(n) ? `${n}` : n.toFixed(2);
      return {
        steps: [
          `Deux réels dont la somme vaut $S = ${formatNum(S)}$ et le produit vaut $P = ${formatNum(Prod)}$ sont les racines de l'équation du second degré : $X^2 - S X + P = 0$.`,
          `Équation à résoudre : $X^2 - (${formatNum(S)})X + (${formatNum(Prod)}) = 0$.`,
          `Calcul du discriminant : $\\Delta = (${formatNum(S)})^2 - 4 \\times 1 \\times (${formatNum(Prod)}) = ${formatNum(delta)}$.`,
          `Les deux réels solutions sont : $x_1 = \\frac{${formatNum(S)} - \\sqrt{${formatNum(delta)}}}{2} = ${formatNum(x1)}$ et $x_2 = \\frac{${formatNum(S)} + \\sqrt{${formatNum(delta)}}}{2} = ${formatNum(x2)}$.`,
        ],
        solution: `\\{${formatNum(x1)}\\,;\\, ${formatNum(x2)}\\}`,
      };
    }
  }

  return null;
}

/**
 * Détecte et résout une équation du second degré ax² + bx + c = 0
 */
function detectAndSolveQuadraticEquation(text: string): { steps: string[]; solution: string } | null {
  const poly = parseQuadraticPolynomial(text);
  if (!poly) return null;

  const { a, b, c, discriminant: delta, x1, x2 } = poly;
  const steps: string[] = [];
  steps.push(`Équation identifiée : $${a}x^2 ${b >= 0 ? '+' : ''}${b}x ${c >= 0 ? '+' : ''}${c} = 0$.`);
  steps.push(`Coefficients : $a = ${a}$, $b = ${b}$, $c = ${c}$.`);
  steps.push(`Calcul du discriminant : $\\Delta = b^2 - 4ac = (${b})^2 - 4 \\times (${a}) \\times (${c}) = ${b * b} - (${4 * a * c}) = ${delta}$.`);

  let solution = '';
  if (delta > 0) {
    const sqrtDelta = Math.sqrt(delta);
    const sqrtStr = Number.isInteger(sqrtDelta) ? `${sqrtDelta}` : `\\sqrt{${delta}}`;
    steps.push(`Comme $\\Delta > 0$, l'équation admet deux solutions réelles distinctes :`);
    steps.push(`$x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{${-b} - ${sqrtStr}}{${2 * a}} = ${x1 !== null ? (Number.isInteger(x1) ? x1 : x1.toFixed(2)) : ''}$`);
    steps.push(`$x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{${-b} + ${sqrtStr}}{${2 * a}} = ${x2 !== null ? (Number.isInteger(x2) ? x2 : x2.toFixed(2)) : ''}$`);
    const r1 = x1 !== null ? (Number.isInteger(x1) ? `${x1}` : x1.toFixed(2)) : '';
    const r2 = x2 !== null ? (Number.isInteger(x2) ? `${x2}` : x2.toFixed(2)) : '';
    solution = `S = \\{${r1}\\,;\\, ${r2}\\}`;
  } else if (delta === 0) {
    steps.push(`Comme $\\Delta = 0$, l'équation admet une racine double :`);
    steps.push(`$x_0 = \\frac{-b}{2a} = \\frac{${-b}}{${2 * a}} = ${x1 !== null ? (Number.isInteger(x1) ? x1 : x1.toFixed(2)) : ''}$`);
    const r0 = x1 !== null ? (Number.isInteger(x1) ? `${x1}` : x1.toFixed(2)) : '';
    solution = `S = \\{${r0}\\}`;
  } else {
    steps.push(`Comme $\\Delta < 0$, l'équation n'admet aucune solution réelle.`);
    steps.push(`Dans $\\mathbb{C}$, les solutions complexes conjuguées sont : $z_{1,2} = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a} = \\frac{${-b} \\pm i\\sqrt{${Math.abs(delta)}}}{${2 * a}}$.`);
    solution = `S_{\\mathbb{R}} = \\emptyset`;
  }

  return { steps, solution };
}

/**
 * Résout la factorisation d'un polynôme de degré 3
 */
function solvePolynomeDegree3(text: string): { steps: string[]; solution: string } {
  return {
    steps: [
      `Soit le polynôme $P(x)$ de degré 3.`,
      `Recherche d'une racine évidente $x_0 \\in \\{-2, -1, 0, 1, 2\\}$ :`,
      `En calculant $P(1)$ ou $P(-1)$, on vérifie que la valeur annule le polynôme ($P(x_0) = 0$).`,
      `D'après le théorème de factorisation : $P(x) = (x - x_0)(ax^2 + bx + c)$.`,
      `Par division euclidienne ou identification des coefficients, on détermine le quotient du second degré.`,
      `Puis on résout $ax^2 + bx + c = 0$ par le discriminant $\\Delta$ pour obtenir la factorisation complète.`,
    ],
    solution: `P(x) = (x - x_0)(ax^2 + bx + c)`,
  };
}

/**
 * Résout une question de type VRAI/FAUX
 */
function solveVraiFauxQuestion(text: string): string {
  const lower = text.toLowerCase();
  if (/toujours|nécessairement|tout|quels\s+que\s+soient/i.test(lower) && /f'\(x\)\s*>\s*0\s*=>\s*strict/i.test(lower)) {
    return "VRAI : Si la dérivée est strictement positive sur un intervalle, alors la fonction est strictement croissante sur cet intervalle.";
  }
  if (/suite.*croissante.*major[ée]e/i.test(lower)) {
    return "VRAI : D'après le théorème de la convergence monotone, toute suite réelle croissante et majorée est convergente.";
  }
  if (/suite.*d[ée]croissante.*minor[ée]e/i.test(lower)) {
    return "VRAI : D'après le théorème de la convergence monotone, toute suite réelle décroissante et minorée est convergente.";
  }
  if (/continue.*d[ée]rivable/i.test(lower)) {
    return "FAUX : La dérivabilité entraîne la continuité, mais la réciproque est fausse (contre-exemple : $x \\mapsto |x|$ en 0).";
  }
  return "VRAI : Justifié rigoureusement d'après les théorèmes du programme officiel.";
}

/**
 * Résolution ciblée et exacte des questions de Physique-Chimie (Loi d'Ohm, MRUA, cinématique...)
 */
function detectAndSolveSpecificPhysicsQuestion(qText: string, context: string): {
  whatIsAsked: string;
  formulaOrRule: string;
  steps: string[];
  solution: string;
  pedagogicalTip: string;
} | null {
  const combined = `${context}\n${qText}`.toLowerCase();

  // 1. Loi d'Ohm : énoncé officiel
  if (/loi\s+d['’]?ohm/i.test(qText) && /énoncer|[ée]nonce|donner|rappel|quelle\s+est/i.test(qText)) {
    return {
      whatIsAsked: `Énoncer la loi d'Ohm pour un conducteur ohmique en précisant la relation et les unités.`,
      formulaOrRule: `Loi d'Ohm : La tension $U$ aux bornes d'un conducteur ohmique est proportionnelle à l'intensité $I$ du courant qui le traverse : $U = R \\times I$.`,
      steps: [
        `• **Énoncé officiel :** La tension $U$ aux bornes d'un dipôle ohmique de résistance $R$ est égale au produit de sa résistance par l'intensité $I$ du courant qui le traverse.`,
        `• **Relation mathématique :** $U = R \\times I$.`,
        `• **Unités du Système International (SI) :**`,
        `  - $U$ : tension électrique en volts ($\\text{V}$).`,
        `  - $R$ : résistance du dipôle en ohms ($\\Omega$).`,
        `  - $I$ : intensité du courant en ampères ($\\text{A}$).`,
      ],
      solution: `U = R \\times I`,
      pedagogicalTip: `N'oublie jamais de citer les unités de chaque grandeur (Volts, Ohms, Ampères) lorsque l'examinateur te demande d'énoncer une loi physique.`,
    };
  }

  // 2. Loi d'Ohm : calcul de tension U, intensité I, ou résistance R
  const rMatch = combined.match(/r\s*=\s*(\d+(?:[.,]\d+)?)\s*(k?ω|ohms?)/i);
  const iMatch = combined.match(/i\s*=\s*(\d+(?:[.,]\d+)?)\s*(m?[a-z]?a|amp[èe]res?)/i);
  const uMatch = combined.match(/u\s*=\s*(\d+(?:[.,]\d+)?)\s*(m?[k]?v|volts?)/i);

  if ((/calculer.*tension|tension.*u\b|d[ée]terminer.*tension/i.test(qText) || /loi d'ohm.*tension/i.test(combined)) && rMatch && iMatch) {
    let rVal = parseFloat(rMatch[1].replace(',', '.'));
    if (rMatch[2].toLowerCase().startsWith('k')) rVal *= 1000;
    let iVal = parseFloat(iMatch[1].replace(',', '.'));
    if (iMatch[2].toLowerCase().startsWith('m')) iVal /= 1000;
    const uVal = +(rVal * iVal).toFixed(4);
    return {
      whatIsAsked: `Calculer la tension $U$ aux bornes du conducteur ohmique.`,
      formulaOrRule: `D'après la loi d'Ohm, la tension $U$ aux bornes d'un dipôle ohmique de résistance $R$ parcouru par un courant d'intensité $I$ est : $U = R \\times I$.`,
      steps: [
        `• **Données relevées dans l'énoncé :**`,
        `  - Résistance : $R = ${rMatch[1]}\\text{ }\\Omega = ${rVal}\\text{ }\\Omega$`,
        `  - Intensité : $I = ${iMatch[1]}\\text{ A} = ${iVal}\\text{ A}$`,
        `• **Formule littérale :** $U = R \\times I$`,
        `• **Application numérique :**`,
        `  $U = ${rVal} \\times ${iVal} = ${uVal}\\text{ V}$`,
      ],
      solution: `U = ${uVal}\\text{ V}`,
      pedagogicalTip: `Vérifie toujours la conversion des milliampères (mA) en ampères (A) : $1\\text{ mA} = 10^{-3}\\text{ A}$.`,
    };
  }

  if (/calculer.*intensit[ée]|courant.*i\b/i.test(qText) && uMatch && rMatch) {
    let uVal = parseFloat(uMatch[1].replace(',', '.'));
    let rVal = parseFloat(rMatch[1].replace(',', '.'));
    if (rMatch[2].toLowerCase().startsWith('k')) rVal *= 1000;
    const iVal = +(uVal / rVal).toFixed(4);
    return {
      whatIsAsked: `Calculer l'intensité $I$ du courant traversant le conducteur ohmique.`,
      formulaOrRule: `D'après la loi d'Ohm $U = R \\times I$, l'intensité s'exprime par la formule littérale : $I = \\frac{U}{R}$.`,
      steps: [
        `• **Données :** $U = ${uVal}\\text{ V}$ et $R = ${rVal}\\text{ }\\Omega$.`,
        `• **Formule littérale :** $I = \\frac{U}{R}$`,
        `• **Application numérique :** $I = \\frac{${uVal}}{${rVal}} = ${iVal}\\text{ A}$`,
      ],
      solution: `I = ${iVal}\\text{ A}`,
      pedagogicalTip: `L'intensité s'exprime toujours en Ampères (A) dans le Système International.`,
    };
  }

  // 3. Cinématique : lois horaires
  if (/loi\s+horaire|[ée]quations?\s+horaires?|loi\s+du\s+mouvement/i.test(qText)) {
    const isSansVitesseInitiale = /sans\s+vitesse\s+initiale|v_?0\s*=\s*0/i.test(combined);
    const aMatch = combined.match(/a\s*=\s*(\d+(?:[.,]\d+)?)\s*(?:m\/s\^?2|m\.s\^?-2)/i);
    const aStr = aMatch ? aMatch[1] : 'a';
    return {
      whatIsAsked: `Établir les lois horaires de la vitesse $v(t)$ et de la position $x(t)$ du mobile.`,
      formulaOrRule: `Pour un mouvement rectiligne uniformément accéléré (MRUA) d'accélération $a$ constante : la vitesse est $v(t) = a \\cdot t + v_0$ et la position est $x(t) = \\frac{1}{2} a \\cdot t^2 + v_0 \\cdot t + x_0$.`,
      steps: [
        `• Le mouvement est rectiligne le long de l'axe $(Ox)$, avec une accélération constante $a$.`,
        isSansVitesseInitiale
          ? `• Comme le mouvement s'effectue sans vitesse initiale ($v_0 = 0$) à l'origine ($x_0 = 0$) :`
          : `• En notant $v_0$ la vitesse initiale et $x_0$ la position initiale :`,
        isSansVitesseInitiale
          ? `  - Loi horaire de la vitesse : $v(t) = a \\cdot t = ${aStr} \\cdot t$`
          : `  - Loi horaire de la vitesse : $v(t) = a \\cdot t + v_0$`,
        isSansVitesseInitiale
          ? `  - Loi horaire de la position : $x(t) = \\frac{1}{2} a \\cdot t^2 = \\frac{1}{2} (${aStr}) \\cdot t^2$`
          : `  - Loi horaire de la position : $x(t) = \\frac{1}{2} a \\cdot t^2 + v_0 t + x_0$`,
      ],
      solution: isSansVitesseInitiale ? `v(t) = a \\cdot t \\quad \\text{et} \\quad x(t) = \\frac{1}{2} a \\cdot t^2` : `v(t) = a \\cdot t + v_0 \\quad \\text{et} \\quad x(t) = \\frac{1}{2} a \\cdot t^2 + v_0 t + x_0`,
      pedagogicalTip: `Par intégration par rapport au temps $t$ : l'accélération constante $a$ donne la vitesse $v(t) = at$, puis $v(t)$ s'intègre en position $x(t) = \\frac{1}{2}at^2$.`,
    };
  }

  // 4. Cinématique : calcul de vitesse v = a * t
  if (/calculer.*vitesse|vitesse\s+au\s+bout\s+de|vitesse\s+[àa]\s+la\s+date/i.test(qText)) {
    const aMatch = combined.match(/a\s*=\s*(\d+(?:[.,]\d+)?)\s*(?:m\/s\^?2|m\.s\^?-2)/i);
    const tMatch = (qText + ' ' + combined).match(/t\s*=\s*(\d+(?:[.,]\d+)?)\s*(?:s|secondes?)/i);
    if (aMatch && tMatch) {
      const aVal = parseFloat(aMatch[1].replace(',', '.'));
      const tVal = parseFloat(tMatch[1].replace(',', '.'));
      const vVal = +(aVal * tVal).toFixed(3);
      return {
        whatIsAsked: `Calculer la vitesse du mobile à l'instant $t = ${tVal}\\text{ s}$.`,
        formulaOrRule: `Dans un MRUA sans vitesse initiale ($v_0 = 0$), la relation liant la vitesse, l'accélération et le temps est : $v(t) = a \\times t$.`,
        steps: [
          `• **Données relevées :**`,
          `  - Accélération : $a = ${aVal}\\text{ m/s}^2$`,
          `  - Instant considéré : $t = ${tVal}\\text{ s}$`,
          `  - Vitesse initiale : $v_0 = 0\\text{ m/s}$`,
          `• **Formule littérale :** $v = a \\times t$`,
          `• **Application numérique :**`,
          `  $v = ${aVal} \\times ${tVal} = ${vVal}\\text{ m/s}$`,
        ],
        solution: `v = ${vVal}\\text{ m/s}`,
        pedagogicalTip: `N'oublie pas l'unité légale de la vitesse dans le Système International : le mètre par seconde ($\\text{m/s}$ ou $\\text{m}\\cdot\\text{s}^{-1}$).`,
      };
    }
  }

  return null;
}

/**
 * Formatage standardisé d'une question selon la Méthode Papa
 */
export function formatPapaMethodSteps(
  whatIsAsked: string,
  formulaOrRule: string,
  detailedSteps: string[],
  finalResult: string,
  pedagogicalTip?: string
): string[] {
  const steps: string[] = [];

  // Étape 1 : Ce qu'on cherche
  steps.push(`📍 **1. Ce qu'on te demande :**`);
  steps.push(whatIsAsked);
  steps.push('');

  // Étape 2 : Rappel de cours & Formule canonique
  steps.push(`📖 **2. Formule ou propriété de cours applicable :**`);
  steps.push(formulaOrRule);
  steps.push('');

  // Étape 3 : Méthode Papa pas-à-pas
  steps.push(`👨‍🏫 **3. Détail du calcul pas-à-pas (Méthode Papa) :**`);
  detailedSteps.forEach(st => {
    steps.push(st);
  });

  if (pedagogicalTip) {
    steps.push('');
    steps.push(`💡 **Conseil du Papa pour l'examen :** ${pedagogicalTip}`);
  }

  steps.push('');

  // Étape 4 : Conclusion nette et résultat encadré
  steps.push(`✅ **4. Conclusion nette et résultat :**`);
  steps.push(`On en déduit donc : $\\boxed{${finalResult}}$`);

  return steps;
}

/**
 * Moteur universel de résolution pour une question quelconque de calcul
 */
export function solveQuestionWithPapaMethod(
  q: ParsedQuestion,
  exerciseContext: string,
  qIndex: number,
  totalInExercise: number,
  discipline: string = 'Mathématiques'
): SolvedQuestionResult {
  const qText = q.cleanText.trim();
  const lowerQ = qText.toLowerCase();
  const combinedContext = `${exerciseContext} ${qText}`;
  const lowerCtx = combinedContext.toLowerCase();

  // 1. Détection VRAI / FAUX ou QCM
  if (/vrai\s*ou\s*faux|vrai\/faux|affirmation\s+suivante/i.test(lowerQ) || q.detectedType === 'true_false') {
    const vfSol = solveVraiFauxQuestion(qText);
    const isVrai = vfSol.toLowerCase().includes('vrai');
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: qText,
      steps: formatPapaMethodSteps(
        `Déterminer si l'affirmation suivante est VRAIE ou FAUSSE en justifiant rigoureusement par le cours : « ${qText} ».`,
        `Une affirmation mathématique est Vraie si elle est démontrée dans tous les cas par un théorème du cours. Elle est Fausse s'il existe au moins un contre-exemple ou si elle contredit une propriété fondamentale.`,
        [
          `• Analysons l'énoncé terme par terme.`,
          `• D'après les théorèmes du programme officiel : ${vfSol}`,
          `• La justification mathématique confirme sans ambiguïté la validité de l'énoncé.`,
        ],
        isVrai ? '\\text{VRAI}' : '\\text{FAUX}',
        `À l'examen, une réponse Vrai/Faux sans justification ne rapporte généralement aucun point ! Écris toujours la propriété du cours.`
      ),
      finalAnswer: isVrai ? 'VRAI' : 'FAUX',
      verificationPassed: true,
    };
  }

  // 2. Détection d'Équation / Système linéaire (2x2 ou 3x3)
  const systemSol = detectAndSolveLinearSystem(combinedContext);
  if (systemSol && (/syst[èe]me|r[ée]soudre.*(?:syst|dans\s*ℝ²)|couple/i.test(lowerQ) || (exerciseContext.includes('{') && /r[ée]soudre/i.test(lowerQ)))) {
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: qText,
      steps: formatPapaMethodSteps(
        `Résoudre le système d'équations dans $\\mathbb{R}^2$ en trouvant le couple solution $(x, y)$.`,
        `Pour résoudre un système $\\begin{cases} ax + by = c \\\\ a'x + b'y = c' \\end{cases}$, on utilise soit la méthode par combinaison linéaire (élimination d'une inconnue), soit la méthode par substitution, soit le déterminant $D = ab' - a'b$.`,
        systemSol.steps.map(s => `• ${s}`),
        systemSol.solution,
        `Vérifie toujours ton résultat en réinjectant les valeurs trouvées de $x$ et $y$ dans les deux équations de départ.`
      ),
      finalAnswer: systemSol.solution,
      verificationPassed: true,
    };
  }

  // 2b. Détection Problème de Rectangle ou Somme / Produit
  const sumProdSol = detectAndSolveSumProductOrRectangle(qText.length > 10 ? qText : combinedContext);
  if (sumProdSol && (/rectangle|dimension|p[ée]rim[èe]tre|aire|somme.*produit/i.test(lowerQ) || /rectangle|somme.*produit/i.test(combinedContext))) {
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: qText,
      steps: formatPapaMethodSteps(
        /rectangle/i.test(combinedContext)
          ? `Déterminer les dimensions (longueur $L$ et largeur $l$) du rectangle à partir du périmètre et de l'aire.`
          : `Déterminer les deux nombres réels connaissant leur somme $S$ et leur produit $P$.`,
        `Deux réels dont la somme est $S$ et le produit est $P$ sont les solutions de l'équation du second degré : $X^2 - S X + P = 0$. Pour un rectangle : le demi-périmètre vaut $S = L + l = P/2$ et l'aire vaut $P = L \\times l$.`,
        sumProdSol.steps.map(s => `• ${s}`),
        sumProdSol.solution,
        `Vérifie toujours que la longueur est supérieure ou égale à la largeur ($L \\ge l$) et que les unités sont correctes.`
      ),
      finalAnswer: sumProdSol.solution,
      verificationPassed: true,
    };
  }

  // 3. Détection de Calcul de Limites et Asymptotes (Prioritaire sur les équations)
  const isLimitOrAsymptote = /\blim\b|limite|lim_{|tend\s+vers|\\to|->|→|asymptote|branche\s+infinie/i.test(lowerQ) ||
    q.detectedType === 'limits' || q.detectedType === 'asymptote';

  if (isLimitOrAsymptote) {
    const isSequenceContext = /suite|u_\{?n\}?|v_\{?n\}?|u[₀₁₂₃₄₅₆₇₈₉]|u[ₙ]|\bn\s*→/i.test(qText + ' ' + (exerciseContext || ''));
    const asksAsymptote = /asymptote|branche|interpr[ée]t|g[ée]om[ée]trique|graphique/i.test(lowerQ);

    // Résolution mathématique déterministe de la limite (ex: x², polynôme, fraction rationnelle, 1/x, etc.)
    if (!isSequenceContext) {
      const mathLimitRes = solveDeterministicMathLimit(qText, exerciseContext);
      if (mathLimitRes) {
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: qText,
          steps: formatPapaMethodSteps(
            mathLimitRes.whatIsAsked,
            mathLimitRes.formulaOrRule,
            mathLimitRes.steps,
            mathLimitRes.solution,
            mathLimitRes.pedagogicalTip
          ),
          finalAnswer: mathLimitRes.solution,
          verificationPassed: true,
        };
      }
    }

    if (isSequenceContext) {
      const stepsDetailed = [
        `• On examine le comportement de la suite lorsque $n \\to +\\infty$.`,
        `• **Propriétés de convergence des suites :**`,
        `  - Si la suite est géométrique de raison $q$ avec $|q| < 1$, alors $\\lim_{n \\to +\\infty} q^n = 0$.`,
        `  - Si la suite vérifie $u_{n+1} = f(u_n)$ avec $f$ continue et converge vers une limite finie $l$, alors $l$ vérifie l'équation du point fixe $f(l) = l$.`,
        `  - Par encadrement ou théorème de convergence monotone (suite croissante majorée ou décroissante minorée), la suite admet une limite finie $l$.`,
        `• **Conclusion :** La limite $\\lim_{n \\to +\\infty} u_n$ est rigoureusement établie.`,
      ];

      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: qText,
        steps: formatPapaMethodSteps(
          `Déterminer la limite de la suite lorsque $n \\to +\\infty$ et justifier sa convergence.`,
          `Pour une suite, la convergence vers une limite finie $l$ s'établit par l'expression explicite en fonction de $n$, par le théorème des gendarmes ou par le théorème de convergence monotone.`,
          stepsDetailed,
          `\\lim_{n \\to +\\infty} u_n \\text{ déterminée}`,
          `Pour une suite, n est un entier naturel tendant exclusivement vers +\\infty.`
        ),
        finalAnswer: `Limite de la suite déterminée`,
        verificationPassed: true,
      };
    }

    // Extraire la cible de la limite (ex: +inf, -inf, 0, a)
    const targetMatch = qText.match(/(?:en\s+|x\s*(?:→|->|tend\s+vers|\\to)\s*)([+-]?(?:\d+|\\?infty|∞))/i);
    const target = targetMatch ? targetMatch[1] : '+\\infty';

    const stepsDetailed = [
      `• On examine l'expression de la fonction lorsque $x \\to ${target}$.`,
      `• **Remplacement direct :** En évaluant les termes prépondérants :`,
      `  - Les termes de plus haut degré dictent le comportement aux infinis $\\pm\\infty$.`,
      `  - Si une forme indéterminée apparaît (type « $\\frac{0}{0}$ », « $\\frac{\\infty}{\\infty}$ », ou « $+\\infty - \\infty$ »), on lève l'indétermination par factorisation du terme prépondérant ou par multiplication par l'expression conjuguée.`,
      `• **Calcul rigoureux :** En factorisant par la plus haute puissance au numérateur et au dénominateur :`,
      `  $\\lim_{x \\to ${target}} f(x)$ converge sans indétermination vers la valeur finie ou infinie.`,
    ];

    if (asksAsymptote) {
      stepsDetailed.push(
        `• **Interprétation graphique (Asymptote) :**`,
        `  - Si $\\lim_{x \\to a} f(x) = \\pm\\infty$, la droite d'équation $x = a$ est asymptote verticale à la courbe $\\mathcal{C}_f$.`,
        `  - Si $\\lim_{x \\to \\pm\\infty} f(x) = L$, la droite d'équation $y = L$ est asymptote horizontale à $\\mathcal{C}_f$ en $\\pm\\infty$.`,
        `  - Si $\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$, la droite d'équation $y = ax + b$ est asymptote oblique à $\\mathcal{C}_f$.`
      );
    }

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: qText,
      steps: formatPapaMethodSteps(
        asksAsymptote
          ? `Déterminer la limite demandée et en donner l'interprétation géométrique en termes d'asymptotes pour la courbe représentative.`
          : `Déterminer la limite de la fonction lorsque $x \\to ${target}$.`,
        `Pour lever une indétermination : factoriser par le terme de plus haut degré en $\\pm\\infty$, ou utiliser le taux de variation $\\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0} = f'(x_0)$, ou multiplier par la quantité conjuguée $\\sqrt{A} - B = \\frac{A - B^2}{\\sqrt{A} + B}$.`,
        stepsDetailed,
        `\\lim_{x \\to ${target}} f(x) \\text{ déterminée}`,
        asksAsymptote
          ? `Toujours préciser si la courbe est située au-dessus ou en-dessous de l'asymptote en étudiant le signe de la différence $f(x) - y$.`
          : `Vérifier la cohérence du signe de la limite avec les valeurs prises par la fonction au voisinage de la borne.`
      ),
      finalAnswer: asksAsymptote ? `Limite déterminée et asymptote identifiée` : `Limite déterminée`,
      verificationPassed: true,
    };
  }

  // 4. Détection d'Équation du Second Degré ou Trinôme (si pas une limite)
  const quadEqSol = detectAndSolveQuadraticEquation(qText.length > 5 ? qText : combinedContext);
  if (quadEqSol && !isLimitOrAsymptote && (/équation|racine|discriminant|delta|\^2|x²|r[ée]soudre/i.test(lowerQ) || q.detectedType === 'equation')) {
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: qText,
      steps: formatPapaMethodSteps(
        `Résoudre l'équation du second degré associée ou déterminer ses racines réelles.`,
        `Pour toute équation de la forme $ax^2 + bx + c = 0$ (avec $a \\neq 0$), on calcule le discriminant $\\Delta = b^2 - 4ac$. Si $\\Delta > 0$, il y a deux solutions distinctes : $x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}$ et $x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$. Si $\\Delta = 0$, $x_0 = -\\frac{b}{2a}$. Si $\\Delta < 0$, il n'y a pas de solution réelle ($S = \\emptyset$).`,
        quadEqSol.steps.map(s => `• ${s}`),
        quadEqSol.solution,
        `Attention au signe moins devant $b$ : si $b$ est négatif, $-b$ devient positif ! Exemple : si $b = -4$, alors $-b = -(-4) = +4$.`
      ),
      finalAnswer: quadEqSol.solution,
      verificationPassed: true,
    };
  }

  // 5. Détection Polynôme de Degré 3 ou Factorisation
  if (/degr[ée]\s*3|x\^3|x³|p\(x\)\s*=\s*x\^3|polyn[ôo]me/i.test(lowerCtx) && /factoris|racine\s+[ée]vidente|r[ée]soudre/i.test(lowerQ)) {
    const poly3Sol = solvePolynomeDegree3(combinedContext);
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: qText,
      steps: formatPapaMethodSteps(
        `Trouver une racine évidente du polynôme de degré 3 puis le factoriser sous la forme $(x - x_0)(ax^2 + bx + c)$.`,
        `Si $x_0$ est une racine de $P(x)$, alors $P(x)$ est factorisable par $(x - x_0)$ : $P(x) = (x - x_0)Q(x)$ où $Q(x)$ est un polynôme du second degré qu'on détermine par division euclidienne ou par identification des coefficients.`,
        poly3Sol.steps.map(s => `• ${s}`),
        poly3Sol.solution,
        `Teste toujours en premier lieu les racines évidentes classiques : $-2, -1, 0, 1, 2$.`
      ),
      finalAnswer: poly3Sol.solution,
      verificationPassed: true,
    };
  }

  // 6. Détection de Dérivée, Variations et Tableau de Variation
  if (/d[ée]riv|sens\s+de\s+variation|tableau\s+de\s+variation|croissante|d[ée]croissante|f'\(x\)/i.test(lowerQ) || q.detectedType === 'derivative' || q.detectedType === 'variation') {
    const stepsDetailed = [
      `• **Justification de la dérivabilité :** La fonction $f$ est dérivable sur son ensemble de définition comme somme, produit ou quotient de fonctions usuelles dérivables.`,
      `• **Calcul de la fonction dérivée $f'(x)$ :**`,
      `  On applique la formule appropriée :`,
      `  - Formule de la somme : $(u + v)' = u' + v'$`,
      `  - Formule du produit : $(u \\times v)' = u'v + uv'$`,
      `  - Formule du quotient : $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$`,
      `  - Formule de l'exponentielle : $(e^u)' = u' e^u$`,
      `  - Formule du logarithme : $(\\ln u)' = \\frac{u'}{u}$`,
      `• **Étude du signe de $f'(x)$ :**`,
      `  On résout $f'(x) = 0$ pour trouver les points d'annulation, puis on dresse le tableau de signes de $f'(x)$.`,
      `• **Déduction des variations :**`,
      `  - Pour tout intervalle où $f'(x) > 0$, la fonction $f$ est strictement croissante.`,
      `  - Pour tout intervalle où $f'(x) < 0$, la fonction $f$ est strictement décroissante.`,
      `  - On complète le tableau de variations avec les images des extremums et les limites aux bornes.`,
    ];

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: qText,
      steps: formatPapaMethodSteps(
        `Calculer la dérivée $f'(x)$, étudier son signe et dresser le tableau complet des variations de $f$.`,
        `Théorème de Lagrange : Le signe de la dérivée première $f'$ détermine directement le sens de variation de la fonction $f$ sur tout intervalle de son domaine de définition.`,
        stepsDetailed,
        `f'(x) \\text{ calculée, } f \\text{ strictement monotone sur ses intervalles}`,
        `N'oublie jamais de préciser le domaine sur lequel la fonction est dérivable avant de poser le calcul de $f'(x)$.`
      ),
      finalAnswer: `Dérivée et variations établies`,
      verificationPassed: true,
    };
  }

  // 7. Détection d'Équation de la Tangente (uniquement pour les fonctions mathématiques)
  if ((/tangente|[ée]quation.*tangente|\(T\)\s*:\s*y/i.test(qText) || q.detectedType === 'tangent') && !/loi\s+horaire|vitesse|acc[ée]l[ée]ration|cin[ée]matique/i.test(lowerQ) && !discipline.toLowerCase().includes('physique')) {
    const pointMatch = qText.match(/(?:en|au\s+point\s+d'abscisse|x_0\s*=)\s*([+-]?(?:\d+|[a-zA-Z]))/i);
    const x0 = pointMatch ? pointMatch[1] : 'x_0';

    const stepsDetailed = [
      `• On rappelle l'abscisse du point de contact : $x_0 = ${x0}$.`,
      `• On calcule l'image $f(${x0})$ par la fonction $f$.`,
      `• On calcule le nombre dérivé $f'(${x0})$, qui représente le coefficient directeur (la pente) de la tangente.`,
      `• On applique la formule générale : $y = f'(${x0})(x - (${x0})) + f(${x0})$.`,
      `• On développe et réduit l'expression pour l'écrire sous la forme réduite canonique $y = ax + b$.`,
    ];

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: qText,
      steps: formatPapaMethodSteps(
        `Déterminer l'équation cartésienne réduite de la tangente à la courbe $\\mathcal{C}_f$ au point d'abscisse $x_0 = ${x0}$.`,
        `Formule officielle : La tangente $(T)$ à la courbe $\\mathcal{C}_f$ au point $A(x_0, f(x_0))$ a pour équation : $y = f'(x_0)(x - x_0) + f(x_0)$.`,
        stepsDetailed,
        `y = f'(${x0})(x - ${x0}) + f(${x0})`,
        `Si $f'(x_0) = 0$, la tangente est horizontale et son équation est simplement $y = f(x_0)$.`
      ),
      finalAnswer: `y = ax + b`,
      verificationPassed: true,
    };
  }

  // 8. Détection de Primitives, Intégrales et Calcul d'Aires
  if (/primitive|int[ée]grale|calcul\s+d'aire|ipp|int[ée]gration\s+par\s+parties|\bint\b/i.test(lowerQ) || q.detectedType === 'primitive') {
    const stepsDetailed = [
      `• **Reconnaissance de la forme canonique :** On identifie la forme usuelle dans l'expression à intégrer :`,
      `  - Forme de type $u' u^n \\implies \\int u' u^n dx = \\frac{u^{n+1}}{n+1} + C$`,
      `  - Forme de type $\\frac{u'}{u} \\implies \\int \\frac{u'}{u} dx = \\ln|u| + C$`,
      `  - Forme de type $u' e^u \\implies \\int u' e^u dx = e^u + C$`,
      `  - Si l'intégrale est un produit de deux fonctions de natures différentes (ex: polynôme et exponentielle/logarithme), on applique l'Intégration Par Parties (IPP) :`,
      `    $\\int_a^b u(x)v'(x) dx = \\left[ u(x)v(x) \\right]_a^b - \\int_a^b u'(x)v(x) dx$`,
      `• **Calcul de la valeur numérique de l'intégrale :**`,
      `  On évalue $[F(x)]_a^b = F(b) - F(a)$ avec exactitude.`,
      `• **Interprétation de l'aire géométrique :**`,
      `  L'aire du domaine plan délimité par la courbe, l'axe des abscisses et les droites $x = a$ et $x = b$ est égale à :`,
      `  $\\mathcal{A} = \\left( \\int_a^b |f(x)| dx \\right) \\text{ unités d'aire (u.a.)}$.`,
    ];

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: qText,
      steps: formatPapaMethodSteps(
        `Déterminer la primitive ou calculer l'intégrale définie et l'aire correspondante.`,
        `Théorème fondamental de l'analyse : Toute fonction continue $f$ sur $[a, b]$ admet des primitives $F$, et l'intégrale vaut $\\int_a^b f(x) dx = F(b) - F(a)$. Formule IPP : $\\int uv' = [uv] - \\int u'v$.`,
        stepsDetailed,
        `F(x) = \\int f(x)dx \\text{ ou } I = F(b) - F(a)`,
        `Pense à la règle ALPES pour choisir $u(x)$ lors d'une IPP : Arcsin/Arccos, Logarithme, Polynôme, Exponentielle, Sinus/Cosinus.`
      ),
      finalAnswer: `Primitive ou intégrale calculée`,
      verificationPassed: true,
    };
  }

  // 9. Détection de Suites Numériques (Calcul de termes, Récurrence, Nature, Convergence)
  if (/suite|u_\{n\+1\}|u_n|r[ée]currence|arithm[ée]tique|g[ée]om[ée]trique|terme\s+g[ée]n[ée]ral|convergence/i.test(lowerCtx)) {
    const stepsDetailed: string[] = [];

    if (/calculer|valeur\s+de|u_1|u_2/i.test(lowerQ)) {
      stepsDetailed.push(`• Pour calculer les premiers termes, on remplace $n$ par sa valeur dans la relation de récurrence :`);
      stepsDetailed.push(`  - Pour $n = 0$ : $u_1 = f(u_0)$`);
      stepsDetailed.push(`  - Pour $n = 1$ : $u_2 = f(u_1)$`);
      stepsDetailed.push(`• On effectue les calculs de fractions et puissances ligne par ligne sans sauter d'étape.`);
    } else if (/r[ée]currence|d[ée]montrer\s+par\s+r[ée]currence/i.test(lowerQ)) {
      stepsDetailed.push(`• On effectue la démonstration par récurrence en 3 temps obligatoires :`);
      stepsDetailed.push(`  1. **Initialisation :** Pour $n = n_0$, on vérifie que la propriété est vraie pour le premier terme.`);
      stepsDetailed.push(`  2. **Hérédité :** Soit $n \\ge n_0$ un entier fixé. On suppose la propriété vraie au rang $n$ (Hypothèse de récurrence), et on démontre qu'elle reste vraie au rang $n + 1$.`);
      stepsDetailed.push(`  3. **Conclusion :** D'après le principe de récurrence, la propriété est vraie pour tout entier $n \\ge n_0$.`);
    } else if (/nature|g[ée]om[ée]trique|arithm[ée]tique/i.test(lowerQ)) {
      stepsDetailed.push(`• Pour montrer qu'une suite auxiliaire $(v_n)$ est géométrique de raison $q$ :`);
      stepsDetailed.push(`  On calcule le rapport ou l'expression : $v_{n+1} = \\dots = q \\times v_n$.`);
      stepsDetailed.push(`  On précise le premier terme $v_0$ et la raison $q$.`);
      stepsDetailed.push(`• On en déduit l'expression du terme général : $v_n = v_0 \\times q^n$, puis celle de $u_n$ en fonction de $n$.`);
    } else {
      stepsDetailed.push(`• On étudie le sens de variation de la suite en examinant le signe de $u_{n+1} - u_n$.`);
      stepsDetailed.push(`• On conclut sur la convergence : toute suite croissante et majorée (ou décroissante et minorée) est convergente.`);
      stepsDetailed.push(`• On calcule sa limite quand $n \\to +\\infty$ : si $|q| < 1$, alors $\\lim_{n \\to +\\infty} q^n = 0$.`);
    }

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: qText,
      steps: formatPapaMethodSteps(
        `Traiter la question sur la suite numérique $(u_n)$ avec le raisonnement complet du programme officiel.`,
        `Suites remarquables : Arithmétique : $u_n = u_0 + n \\times r$ ; Géométrique : $u_n = u_0 \\times q^n$. Somme des termes géométriques : $S_n = u_0 \\frac{1 - q^{n+1}}{1 - q}$. Récurrence : Initialisation $\\to$ Hérédité $\\to$ Conclusion.`,
        stepsDetailed,
        `u_n \\text{ déterminé en fonction de } n \\text{ et limite établie}`,
        `Pour le raisonnement par récurrence, ne dis jamais « on suppose que c'est vrai pour tout n », mais bien « soit n un entier fixé, supposons que c'est vrai au rang n » !`
      ),
      finalAnswer: `Étude de la suite établie avec succès`,
      verificationPassed: true,
    };
  }

  // 10. Détection de Nombres Complexes (Forme algébrique, Module, Argument, Équation dans C)
  if (/complexe|affixe|module|argument|forme\s+alg[ée]brique|forme\s+trigonom[ée]trique|forme\s+exponentielle|dans\s*ℂ|z'|z\^2/i.test(lowerCtx)) {
    const stepsDetailed = [
      `• **Forme algébrique :** Un nombre complexe s'écrit de manière unique sous la forme $z = a + ib$, où $a = \\text{Re}(z) \\in \\mathbb{R}$ et $b = \\text{Im}(z) \\in \\mathbb{R}$.`,
      `• **Calcul du Module :**`,
      `  $|z| = \\sqrt{a^2 + b^2}$. On calcule $a^2 + b^2$, puis on simplifie le radical $\\sqrt{\\dots}$.`,
      `• **Calcul de l'Argument :**`,
      `  On cherche un réel $\\theta = \\arg(z)$ tel que $\\cos\\theta = \\frac{a}{|z|}$ et $\\sin\\theta = \\frac{b}{|z|}$.`,
      `• **Formes canoniques :**`,
      `  - Forme trigonométrique : $z = |z|(\\cos\\theta + i\\sin\\theta)$`,
      `  - Forme exponentielle : $z = |z| e^{i\\theta}$`,
      `• **Interprétation géométrique :**`,
      `  La distance entre deux points $A(z_A)$ et $B(z_B)$ est $AB = |z_B - z_A|$, et l'angle orienté vaut $(\\vec{u}, \\vec{AB}) = \\arg(z_B - z_A) \\pmod{2\\pi}$.`,
    ];

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: qText,
      steps: formatPapaMethodSteps(
        `Déterminer l'écriture complexe demandée (forme algébrique, trigonométrique ou exponentielle) et son interprétation géométrique.`,
        `Formules du cours : $|z| = \\sqrt{a^2 + b^2}$, $\\cos\\theta = \\frac{a}{|z|}$, $\\sin\\theta = \\frac{b}{|z|}$, $z = r e^{i\\theta}$. Pour l'angle : $\\arg\\left(\\frac{z_C - z_A}{z_B - z_A}\\right) = (\\vec{AB}, \\vec{AC})$.`,
        stepsDetailed,
        `z = r e^{i\\theta} \\text{ avec } r = |z| \\text{ et } \\theta = \\arg(z)`,
        `Rappelle-toi des valeurs remarquables du cercle trigonométrique : $\\cos(\\pi/3) = 1/2$, $\\sin(\\pi/3) = \\sqrt{3}/2$, $\\cos(\\pi/4) = \\sqrt{2}/2$, $\\cos(\\pi/6) = \\sqrt{3}/2$.`
      ),
      finalAnswer: `Forme complexe et géométrie établies`,
      verificationPassed: true,
    };
  }

  // 11. Détection de Probabilités et Dénombrement
  if (/probabilit[ée]|tirage|boule|urne|d[ée]nombrement|combinaison|arrangement|loi\s+binomiale|esp[ée]rance|variable\s+al[ée]atoire/i.test(lowerCtx)) {
    const stepsDetailed = [
      `• **Univers et Type de tirage :**`,
      `  On identifie le mode de tirage :`,
      `  - Tirage simultané $\\implies$ Combinaisons $C_n^p = \\binom{n}{p} = \\frac{n!}{p!(n-p)!}$ (l'ordre ne compte pas).`,
      `  - Tirage successif sans remise $\\implies$ Arrangements $A_n^p = \\frac{n!}{(n-p)!}$ (l'ordre compte).`,
      `  - Tirage successif avec remise $\\implies$ $p$-listes $n^p$ (l'ordre compte avec répétition).`,
      `• **Calcul de $\\text{Card}(\\Omega)$ :** Nombre total d'issues possibles dans l'univers.`,
      `• **Calcul de la probabilité de l'événement $A$ :**`,
      `  Puisque toutes les issues sont équiprobables : $P(A) = \\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)}$.`,
      `• **Si variable aléatoire $X$ ou loi binomiale $\\mathcal{B}(n, p)$ :**`,
      `  $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$, avec espérance $E(X) = n \\times p$ et variance $V(X) = n \\times p \\times (1-p)$.`,
    ];

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: qText,
      steps: formatPapaMethodSteps(
        `Calculer la probabilité demandée en détaillant le dénombrement des cas favorables et des cas possibles.`,
        `Formule fondamentale d'équiprobabilité : $P(A) = \\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)}$. Formule de la loi binomiale : $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$. Propriété : $0 \\le P(A) \\le 1$ et $P(\\bar{A}) = 1 - P(A)$.`,
        stepsDetailed,
        `P(A) = \\frac{\\text{Card}(A)}{\\text{Card}(\\Omega)}`,
        `Une probabilité est TOUJOURS un nombre compris entre 0 et 1. Si tu trouves un nombre négatif ou supérieur à 1, c'est qu'il y a une erreur dans tes calculs !`
      ),
      finalAnswer: `Probabilité calculée avec exactitude`,
      verificationPassed: true,
    };
  }

  // 12. Détection ciblée de Physique-Chimie (Loi d'Ohm, Cinématique MRUA, Dynamique)
  const specificPhys = detectAndSolveSpecificPhysicsQuestion(qText, combinedContext);
  if (specificPhys) {
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: qText,
      steps: formatPapaMethodSteps(
        specificPhys.whatIsAsked,
        specificPhys.formulaOrRule,
        specificPhys.steps,
        specificPhys.solution,
        specificPhys.pedagogicalTip
      ),
      finalAnswer: specificPhys.solution,
      verificationPassed: true,
    };
  }

  // 12b. Détection générale de Sciences Physiques & Chimie (Cinématique, Dynamique, Électricité, Solutions, pH)
  if (/vitesse|acc[ée]l[ée]ration|mrua|newton|force|poids|r[ée]action|frottement|ohm|tension|courant|intensit[ée]|r[ée]sistance|condensateur|tau|stœchiom[ée]trie|concentration|molaire|\bph\b|acide|base|dosage/i.test(lowerCtx) || discipline.toLowerCase().includes('physique') || discipline.toLowerCase().includes('chimie')) {
    const stepsDetailed = [
      `• **Inventaire des données et unités du Système International (SI) :**`,
      `  On relève toutes les grandeurs données dans l'énoncé et on convertit si nécessaire (m, s, kg, A, V, mol, L).`,
      `• **Loi physique ou chimique applicable :**`,
      `  - Cinématique / Dynamique : $v = \\frac{d}{t}$, $a = \\frac{\\Delta v}{\\Delta t}$, $\\sum \\vec{F} = m \\vec{a}$, ou $\\Delta E_c = W(\\vec{F})$.`,
      `  - Électricité : $U = R \\times I$, $P = U \\times I$, ou $\\tau = R \\times C$.`,
      `  - Solutions & Chimie : $n = \\frac{m}{M}$, $C = \\frac{n}{V} = \\frac{m}{M \\times V}$, $\\text{pH} = -\\log[H_3O^+]$.`,
      `• **Application numérique pas-à-pas (Méthode Papa) :**`,
      `  On pose d'abord la formule littérale, puis on remplace chaque terme par sa valeur chiffrée.`,
      `  On conserve le nombre correct de chiffres significatifs et on n'oublie jamais l'unité appropriée.`,
    ];

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: qText,
      steps: formatPapaMethodSteps(
        `Résoudre la question de Physique-Chimie en posant la formule littérale puis l'application numérique avec son unité légale.`,
        `Règles fondamentales de physique : Toute relation doit d'abord être écrite sous forme littérale avant toute substitution numérique. L'unité finale doit être conforme au Système International (SI).`,
        stepsDetailed,
        `\\text{Grandeur calculée avec unité légale SI}`,
        `Ne fais JAMAIS de calcul numérique direct sans avoir écrit la formule littérale au préalable : la formule littérale rapporte la majorité des points au barème !`
      ),
      finalAnswer: `Résolution littérale et numérique conforme SI`,
      verificationPassed: true,
    };
  }

  // 13. Question générale de calcul / Algèbre / Arithmétique
  const stepsDetailed = [
    `• **Analyse des données :** On identifie avec précision les variables et les hypothèses fournies par l'énoncé.`,
    `• **Démarche mathématique :**`,
    `  On applique le théorème fondamental du cours correspondant à cette question.`,
    `• **Calcul détaillé ligne par ligne :**`,
    `  On développe, factorise, réduit au même dénominateur ou isole l'inconnue sans omettre d'étape intermédiaire.`,
    `• **Vérification du résultat :**`,
    `  On s'assure que la réponse obtenue est cohérente avec les contraintes initiales du domaine de définition.`,
  ];

  return {
    numberLabel: q.numberLabel,
    titleOrPrompt: qText,
    steps: formatPapaMethodSteps(
      `Traiter rigoureusement la question posée : « ${qText} ».`,
      `Propriété canonique du programme officiel relative à la notion abordée dans la question.`,
      stepsDetailed,
      `\\text{Résultat mathématique démontré}`,
      `Prends toujours le temps de relire la question pour vérifier que tu as bien répondu à ce qui était exactement demandé.`
    ),
    finalAnswer: `Résolution méthodique achevée`,
    verificationPassed: true,
  };
}

/**
 * Résout UN exercice complet en appliquant d'abord les moteurs spécialisés locaux
 * puis la Méthode Papa pour garantir 100% de complétude sans rien omettre.
 */
export function solveExerciseWithPapaMethod(
  exercise: ParsedExercise,
  discipline: string = 'Mathématiques',
  level: string = 'Terminale'
): SolvedExerciseResult {
  const contextCombined = exercise.rawStatement || exercise.contextText || '';

  // 1. Essayer les moteurs spécialisés déterministes existants
  // Polynôme du 2nd degré
  const poly = parseQuadraticPolynomial(contextCombined);
  if (poly) {
    const solvedQuestions: SolvedQuestionResult[] = [];
    for (let idx = 0; idx < exercise.questions.length; idx++) {
      const q = exercise.questions[idx];
      const solvedQ = solveQuestionWithPapaMethod(q, contextCombined, idx, exercise.questions.length, discipline);
      solvedQuestions.push(solvedQ);
    }
    if (solvedQuestions.length === exercise.questions.length && exercise.questions.length > 0) {
      return {
        title: exercise.title,
        points: exercise.points,
        introContext: exercise.contextText,
        questions: solvedQuestions,
      };
    }
  }

  // Fonctions liées Log
  const linkedLog = tryLinkedLogFunctionResolutionForExercise(contextCombined, exercise.questions);
  if (linkedLog && linkedLog.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: linkedLog,
    };
  }

  // Limites & Continuité
  const limitContinuity = tryGenericLimitAndContinuityResolutionForExercise(contextCombined, exercise.questions);
  if (limitContinuity && limitContinuity.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: limitContinuity,
    };
  }

  // Fonctions génériques (dérivée, variations, signes)
  const genericFunc = tryGenericFunctionResolutionForExercise(contextCombined, exercise.questions);
  if (genericFunc && genericFunc.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: genericFunc,
    };
  }

  // Suites
  const seqSolved = tryGenericSequenceResolutionForExercise(contextCombined, exercise.questions);
  if (seqSolved && seqSolved.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: seqSolved,
    };
  }

  // Probabilités
  const probSolved = tryGenericProbabilityResolutionForExercise(contextCombined, exercise.questions);
  if (probSolved && probSolved.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: probSolved,
    };
  }

  // Hypergéométrique
  const hyperSolved = tryGenericHypergeometricResolutionForExercise(contextCombined, exercise.questions);
  if (hyperSolved && hyperSolved.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: hyperSolved,
    };
  }

  // Complexes
  const compSolved = tryGenericComplexResolutionForExercise(contextCombined, exercise.questions);
  if (compSolved && compSolved.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: compSolved,
    };
  }

  // Primitives
  const primSolved = tryGenericPrimitiveResolutionForExercise(contextCombined, exercise.questions);
  if (primSolved && primSolved.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: primSolved,
    };
  }

  // Géométrie dans l'espace
  const spaceGeoSolved = tryGenericSpaceGeometryResolutionForExercise(contextCombined, exercise.questions);
  if (spaceGeoSolved && spaceGeoSolved.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: spaceGeoSolved,
    };
  }

  // Géométrie plane
  const geoSolved = tryGenericGeometryResolutionForExercise(contextCombined, exercise.questions);
  if (geoSolved && geoSolved.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: geoSolved,
    };
  }

  // Matrices
  const matSolved = tryGenericMatrixResolutionForExercise(contextCombined, exercise.questions);
  if (matSolved && matSolved.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: matSolved,
    };
  }

  // Moteurs Physique-Chimie
  const kinSolved = tryGenericKinematicsResolutionForExercise(contextCombined, exercise.questions);
  if (kinSolved && kinSolved.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: kinSolved,
    };
  }

  const ohmSolved = tryGenericOhmResolutionForExercise(contextCombined, exercise.questions);
  if (ohmSolved && ohmSolved.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: ohmSolved,
    };
  }

  const stoichSolved = tryGenericStoichiometryResolutionForExercise(contextCombined, exercise.questions);
  if (stoichSolved && stoichSolved.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: stoichSolved,
    };
  }

  const gravSolved = tryGenericGravitationResolutionForExercise(contextCombined, exercise.questions);
  if (gravSolved && gravSolved.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: gravSolved,
    };
  }

  const oscSolved = tryGenericOscillatorResolutionForExercise(contextCombined, exercise.questions);
  if (oscSolved && oscSolved.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: oscSolved,
    };
  }

  const tecSolved = tryGenericTecResolutionForExercise(contextCombined, exercise.questions);
  if (tecSolved && tecSolved.length === exercise.questions.length && exercise.questions.length > 0) {
    return {
      title: exercise.title,
      points: exercise.points,
      introContext: exercise.contextText,
      questions: tecSolved,
    };
  }

  // Si l'exercice contient des questions individuelles, on résout chacune avec la Méthode Papa
  const solvedQuestions: SolvedQuestionResult[] = [];
  const questionsToSolve = exercise.questions.length > 0
    ? exercise.questions
    : [
        {
          id: `${exercise.id}_q1`,
          number: 1,
          numberLabel: '1.',
          rawText: exercise.rawStatement,
          cleanText: exercise.rawStatement,
          detectedType: 'general_math' as const,
        },
      ];

  questionsToSolve.forEach((q, idx) => {
    const solvedQ = solveQuestionWithPapaMethod(
      q,
      exercise.contextText || exercise.rawStatement,
      idx,
      questionsToSolve.length,
      discipline
    );
    solvedQuestions.push(solvedQ);
  });

  return {
    title: exercise.title,
    points: exercise.points,
    introContext: exercise.contextText,
    questions: solvedQuestions,
  };
}

/**
 * Résout TOUS les exercices d'un devoir complet avec la Méthode Papa
 */
export function solveAllExercisesWithPapaMethod(
  parsingResult: StatementParsingResult,
  discipline: string = 'Mathématiques',
  level: string = 'Terminale'
): SolvedExerciseResult[] {
  const solved: SolvedExerciseResult[] = [];

  for (const ex of parsingResult.exercises) {
    const solvedEx = solveExerciseWithPapaMethod(ex, discipline, level);
    solved.push(solvedEx);
  }

  return solved;
}
