/**
 * Solveur déterministe pour les exercices de Limites, Continuité,
 * Expressions Conjuguées et Prolongement par Continuité.
 * 
 * Conçu pour les programmes de Terminale (D, C, E, A) et 1ère (C, D) :
 * - Justification de non-définition / Valeur interdite (dénominateur nul)
 * - Multiplication par l'expression conjuguée & simplification par (x - x0)
 * - Levée d'indétermination (forme 0/0) et calcul de limite finie en x0
 * - Prolongement par continuité en x0, théorème de continuité et valeur g(x0)
 */

import { ParsedQuestion, SolvedQuestionResult } from './types';

export interface RadicalConjugateFunction {
  funcName: string;
  rawExpr: string;
  domainStr: string;
  domainLow: number;
  x0: number; // point d'indétermination / valeur exclue
  radicandLinearCoeff: number; // ex: 1 pour x+1
  radicandConstant: number; // ex: 1 pour x+1
  radicandStr: string; // ex: "x + 1"
  subtractedConstant: number; // ex: 2 pour √(x+1) - 2
  denominatorLinearCoeff: number; // ex: 1 pour x - 3
  denominatorConstant: number; // ex: -3 pour x - 3
  simplifiedNumerator: number; // ex: 1
  limitValue: number; // ex: 1/4 = 0.25
  limitFracStr: string; // ex: "1/4"
  isRadicalMinusConst: boolean;
}

export interface RationalLimitFunction {
  funcName: string;
  rawExpr: string;
  x0: number;
  numPoly: { a: number; b: number; c: number };
  denPoly: { a: number; b: number; c: number };
  limitValue: number;
  limitFracStr: string;
}

/**
 * Tente d'extraire une fonction avec expression conjuguée √(u(x)) - c / (x - x0)
 */
export function parseRadicalConjugateFunction(text: string): RadicalConjugateFunction | null {
  const clean = text
    .replace(/[−–—]/g, '-')
    .replace(/\\sqrt\s*\{([^}]+)\}/g, '√($1)')
    .replace(/\\frac\s*\{([^}]+)\}\s*\{([^}]+)\}/g, '($1) / ($2)')
    .replace(/\s+/g, ' ');

  // Recherche de f(x) = ...
  const fnMatch = clean.match(/\b([fFgGhH])\s*\(\s*x\s*\)\s*=\s*([^;\n]+?)(?=(?:\s+On\s+note|\s+où|\s+avec|\s+pour\s+tout|\s*\.|\s*\$|\s*\\\)|\s*\n|$))/i);
  if (!fnMatch) return null;

  const funcName = fnMatch[1];
  const rawExpr = fnMatch[2].trim();

  // Recherche du dénominateur (x - x0) ou (a*x - b)
  // Formes : (√(x+1) - 2) / (x - 3) ou √(x+1) - 2 / (x - 3)
  const fracMatch = rawExpr.match(/(?:\(?\s*√\s*\(\s*([^)]+)\s*\)\s*-\s*(\d+(?:[.,]\d+)?)\s*\)?)\s*\/\s*\(?\s*x\s*-\s*(-?\d+(?:[.,]\d+)?)\s*\)?/i) ||
                    rawExpr.match(/(?:\(?\s*√\s*\(\s*([^)]+)\s*\)\s*-\s*(\d+(?:[.,]\d+)?)\s*\)?)\s*\/\s*\(?\s*(-?\d+(?:[.,]\d+)?)\s*-\s*x\s*\)?/i);

  if (!fracMatch) return null;

  const radicandInside = fracMatch[1].trim(); // ex: "x + 1"
  const cVal = parseFloat(fracMatch[2].replace(',', '.')); // ex: 2
  const x0Val = parseFloat(fracMatch[3].replace(',', '.')); // ex: 3

  if (isNaN(cVal) || isNaN(x0Val)) return null;

  // Analyse du radicande : a*x + b
  const radMatch = radicandInside.match(/(?:(-?\d+(?:[.,]\d+)?)\s*\*?\s*)?x\s*([+-]\s*\d+(?:[.,]\d+)?)?/i);
  let radA = 1;
  let radB = 0;
  if (radMatch) {
    if (radMatch[1]) {
      radA = radMatch[1] === '-' ? -1 : parseFloat(radMatch[1].replace(',', '.'));
    }
    if (radMatch[2]) {
      radB = parseFloat(radMatch[2].replace(/\s+/g, '').replace(',', '.'));
    }
  }

  // Vérification de la cohérence : à x = x0, √(a*x0 + b) doit être égal à cVal (pour donner 0/0)
  const radAtX0 = radA * x0Val + radB;
  if (radAtX0 < 0 || Math.abs(Math.sqrt(radAtX0) - cVal) > 0.001) {
    return null;
  }

  // Expression conjuguée : (√(rad) - c)(√(rad) + c) = rad - c^2 = radA*x + radB - c^2
  // À x = x0, radA*x0 + radB - c^2 = 0, donc rad - c^2 = radA * (x - x0).
  // La simplification par (x - x0) donne donc radA / (√(rad) + c) !
  const simplifiedNum = radA;
  const denomLimit = Math.sqrt(radAtX0) + cVal; // cVal + cVal = 2*cVal
  const limitVal = simplifiedNum / denomLimit;

  let limitFracStr = `${limitVal}`;
  if (simplifiedNum === 1 && denomLimit === 4) limitFracStr = "1/4";
  else if (simplifiedNum === 1 && denomLimit === 2) limitFracStr = "1/2";
  else if (simplifiedNum === 1 && denomLimit === 6) limitFracStr = "1/6";
  else if (simplifiedNum === 1 && denomLimit === 8) limitFracStr = "1/8";
  else if (Number.isInteger(denomLimit) && Number.isInteger(simplifiedNum)) {
    limitFracStr = `${simplifiedNum}/${denomLimit}`;
  }

  // Recherche du domaine annoncé
  let domainStr = `[-${radB / radA} ; +∞[ \\ {${x0Val}}`;
  const domMatch = text.match(/\[\s*(-?\d+(?:[.,]\d+)?)\s*;\s*\+?∞\s*\[\s*(?:\\|\/|priv[ée]\s+de)\s*\{?\s*(-?\d+(?:[.,]\d+)?)\s*\}?/i);
  if (domMatch) {
    domainStr = `[${domMatch[1]} ; +∞[ \\ {${domMatch[2]}}`;
  }

  return {
    funcName,
    rawExpr,
    domainStr,
    domainLow: -radB / radA,
    x0: x0Val,
    radicandLinearCoeff: radA,
    radicandConstant: radB,
    radicandStr: radicandInside,
    subtractedConstant: cVal,
    denominatorLinearCoeff: 1,
    denominatorConstant: -x0Val,
    simplifiedNumerator: simplifiedNum,
    limitValue: limitVal,
    limitFracStr,
    isRadicalMinusConst: true,
  };
}

/**
 * Résout une question spécifique sur une fonction de type expression conjuguée / limite
 */
export function solveRadicalConjugateQuestion(
  q: ParsedQuestion,
  fn: RadicalConjugateFunction
): SolvedQuestionResult | null {
  const textLower = q.cleanText.toLowerCase();

  // --------------------------------------------------------------------------
  // Type 1 : Justification de non-définition en x0 ou domaine de définition
  // --------------------------------------------------------------------------
  if (
    /justifier.*(pas\s+d[ée]finie|d[ée]finition)|domaine.*d[ée]finition|valeur.*interdite|pourquoi.*pas\s+d[ée]finie/i.test(textLower) ||
    /pas\s+d[ée]finie\s+en/i.test(textLower)
  ) {
    const { funcName, x0, radicandStr, subtractedConstant, domainStr } = fn;
    const radValAtX0 = fn.radicandLinearCoeff * x0 + fn.radicandConstant;

    const steps = [
      `Pour qu'un réel $x$ admette une image par la fonction $${funcName}$, deux conditions mathématiques doivent être simultanément satisfaites :`,
      `1. L'expression sous le radical doit être positive ou nulle : $${radicandStr} \\ge 0 \\iff x \\ge ${fn.domainLow}$.`,
      `2. Le dénominateur doit être non nul : $x - ${x0} \\neq 0 \\iff x \\neq ${x0}$.`,
      `Pour $x = ${x0}$ :`,
      `• La quantité sous la racine carrée est bien positive : $${radicandStr} = ${radValAtX0} \\ge 0$, et $\\sqrt{${radValAtX0}} = ${subtractedConstant}$.`,
      `• Cependant, le dénominateur s'annule : $x - ${x0} = ${x0} - ${x0} = 0$.`,
      `En mathématiques, la division par zéro est strictement indéfinie dans $\\mathbb{R}$ (le quotient « $\\frac{0}{0}$ » n'a pas de sens arithmétique direct).`,
      `Conclusion : Le réel $x = ${x0}$ est une valeur interdite. La fonction $${funcName}$ n'est donc pas définie en $x = ${x0}$, et son ensemble de définition est bien $\\mathcal{D}_{${funcName}} = ${domainStr}$.`,
    ];

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `${funcName} n'est pas définie en x = ${x0} car le dénominateur s'annule en ce point (${x0} - ${x0} = 0).`,
      verificationPassed: true,
    };
  }

  // --------------------------------------------------------------------------
  // Type 2 : Expression conjuguée & simplification
  // --------------------------------------------------------------------------
  if (
    /expression\s+conjugu[ée]e|conjugu[ée]|montrer\s+que.*pour\s+tout\s+x\s*[≠!=]|f\(x\)\s*=\s*1\s*\//i.test(textLower) ||
    /multipliant\s+par.*conjugu[ée]/i.test(textLower)
  ) {
    const { funcName, x0, radicandStr, subtractedConstant } = fn;
    const c2 = subtractedConstant * subtractedConstant;

    const steps = [
      `Pour tout $x \\in \\mathcal{D}_{${funcName}}$ (donc $x \\ge ${fn.domainLow}$ et $x \\neq ${x0}$), le numérateur de $${funcName}(x)$ est de la forme $a - b$ avec :`,
      `$$a = \\sqrt{${radicandStr}} \\quad \\text{et} \\quad b = ${subtractedConstant}$$`,
      `Son expression conjuguée associée est $a + b = \\sqrt{${radicandStr}} + ${subtractedConstant}$.`,
      `Puisque $x \\ge ${fn.domainLow}$, $\\sqrt{${radicandStr}} \\ge 0$, d'où $\\sqrt{${radicandStr}} + ${subtractedConstant} \\ge ${subtractedConstant} > 0$ : l'expression conjuguée ne s'annule jamais sur l'ensemble de définition.`,
      `En multipliant le numérateur et le dénominateur de $${funcName}(x)$ par cette expression conjuguée :`,
      `$$${funcName}(x) = \\frac{(\\sqrt{${radicandStr}} - ${subtractedConstant})(\\sqrt{${radicandStr}} + ${subtractedConstant})}{(x - ${x0})(\\sqrt{${radicandStr}} + ${subtractedConstant})}$$`,
      `On utilise l'identité remarquable $(a - b)(a + b) = a^2 - b^2$ au numérateur :`,
      `$$(\\sqrt{${radicandStr}} - ${subtractedConstant})(\\sqrt{${radicandStr}} + ${subtractedConstant}) = (\\sqrt{${radicandStr}})^2 - (${subtractedConstant})^2 = (${radicandStr}) - ${c2} = x - ${x0}$$`,
      `L'expression de $${funcName}(x)$ devient :`,
      `$$${funcName}(x) = \\frac{x - ${x0}}{(x - ${x0})(\\sqrt{${radicandStr}} + ${subtractedConstant})}$$`,
      `Puisque $x \\neq ${x0}$, le facteur $(x - ${x0})$ est non nul ($x - ${x0} \\neq 0$). On peut donc simplifier par $(x - ${x0})$ :`,
      `$$${funcName}(x) = \\frac{1}{\\sqrt{${radicandStr}} + ${subtractedConstant}}$$`,
      `Conclusion : Pour tout $x \\neq ${x0}$ (avec $x \\ge ${fn.domainLow}$), on a bien $${funcName}(x) = \\frac{1}{\\sqrt{${radicandStr}} + ${subtractedConstant}}$.`,
    ];

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `${funcName}(x) = 1 / (√(${radicandStr}) + ${subtractedConstant}) pour tout x ≠ ${x0}`,
      verificationPassed: true,
    };
  }

  // --------------------------------------------------------------------------
  // Type 3 : Détermination explicite de la fonction g (prolongement par continuité)
  // --------------------------------------------------------------------------
  if (
    /d[ée]terminer.*(?:fonction\s+)?g\b|d[ée]finir.*prolongement|expression.*prolongement|fonction\s+g\b|donner.*g\b/i.test(textLower) ||
    (/prolongement\s+par\s+continuit[ée]/i.test(textLower) && /\b(?:fonction\s+)?g\b/i.test(textLower) && !/justifier|montrer|prouver/i.test(textLower))
  ) {
    const { funcName, x0, radicandStr, subtractedConstant, limitFracStr, domainLow } = fn;
    const radValAtX0 = fn.radicandLinearCoeff * x0 + fn.radicandConstant;
    const denomLim = Math.sqrt(radValAtX0) + subtractedConstant;

    const steps = [
      `1. Ensemble de définition de la fonction prolongée $g$ :`,
      `La fonction $${funcName}$ est définie sur $[${domainLow} ; +\\infty[ \\setminus \\{${x0}\\}$. En adjoignant la valeur $x = ${x0}$, le prolongement par continuité $g$ est défini sur l'intervalle :`,
      `$$\\mathcal{D}_g = [${domainLow} ; +\\infty[$$`,
      ``,
      `2. Définition explicite de $g(x)$ :`,
      `Par définition du prolongement par continuité :`,
      `• Pour tout $x \\in \\mathcal{D}_{${funcName}}$ ($x \\ge ${domainLow}$ et $x \\neq ${x0}$), $g(x) = ${funcName}(x) = \\frac{\\sqrt{${radicandStr}} - ${subtractedConstant}}{x - ${x0}}$.`,
      `• En $x = ${x0}$, $g(${x0}) = \\lim_{x \\to ${x0}} ${funcName}(x) = \\frac{1}{${denomLim}} = ${limitFracStr}$.`,
      ``,
      `Ainsi, la fonction $g$ s'écrit par morceaux :`,
      `$$g(x) = \\begin{cases} \\frac{\\sqrt{${radicandStr}} - ${subtractedConstant}}{x - ${x0}} & \\text{si } x \\in [${domainLow} ; +\\infty[ \\setminus \\{${x0}\\} \\\\[6pt] ${limitFracStr} & \\text{si } x = ${x0} \\end{cases}$$`,
      ``,
      `3. Formule simplifiée continue sur tout $\\mathcal{D}_g$ :`,
      `Puisque pour tout $x \\neq ${x0}$, on a simplifié par quantité conjuguée $${funcName}(x) = \\frac{1}{\\sqrt{${radicandStr}} + ${subtractedConstant}}$, et que pour $x = ${x0}$, $\\frac{1}{\\sqrt{${radicandStr}} + ${subtractedConstant}} = \\frac{1}{${denomLim}} = ${limitFracStr} = g(${x0})$, la fonction $g$ peut être définie de manière unifiée sur tout $[${domainLow} ; +\\infty[$ par :`,
      `$$g(x) = \\frac{1}{\\sqrt{${radicandStr}} + ${subtractedConstant}}$$`,
    ];

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `g est définie sur [${domainLow} ; +∞[ par g(x) = ${funcName}(x) si x ≠ ${x0} et g(${x0}) = ${limitFracStr} (ou g(x) = 1/(√(${radicandStr}) + ${subtractedConstant})).`,
      verificationPassed: true,
    };
  }

  // --------------------------------------------------------------------------
  // Type 4 : Limite en x0 & Justification de l'admissibilité du prolongement
  // --------------------------------------------------------------------------
  if (
    /limite.*en\s*(-?\d+)|limite\s+de\s+[fFgGhH]|prolong\w*.*continuit[ée]|valeur.*prolongement|continuit[ée]\s+en|admet.*prolong\w*|prolongeable/i.test(textLower) ||
    /en\s+d[ée]duire\s+la\s+limite/i.test(textLower)
  ) {
    const { funcName, x0, radicandStr, subtractedConstant, limitValue, limitFracStr, domainLow } = fn;
    const radValAtX0 = fn.radicandLinearCoeff * x0 + fn.radicandConstant;
    const denomLim = Math.sqrt(radValAtX0) + subtractedConstant;

    const steps = [
      `1. Calcul de la limite de $${funcName}$ en $x = ${x0}$ :`,
      `Dans l'expression initiale, $\\lim_{x \\to ${x0}} (\\sqrt{${radicandStr}} - ${subtractedConstant}) = 0$ et $\\lim_{x \\to ${x0}} (x - ${x0}) = 0$, ce qui conduit à la forme indéterminée « $\\frac{0}{0}$ ».`,
      `On lève l'indétermination en multipliant le numérateur et le dénominateur par l'expression conjuguée $(\\sqrt{${radicandStr}} + ${subtractedConstant})$ pour tout $x \\neq ${x0}$ :`,
      `$$${funcName}(x) = \\frac{(\\sqrt{${radicandStr}} - ${subtractedConstant})(\\sqrt{${radicandStr}} + ${subtractedConstant})}{(x - ${x0})(\\sqrt{${radicandStr}} + ${subtractedConstant})} = \\frac{(${radicandStr}) - ${subtractedConstant * subtractedConstant}}{(x - ${x0})(\\sqrt{${radicandStr}} + ${subtractedConstant})} = \\frac{x - ${x0}}{(x - ${x0})(\\sqrt{${radicandStr}} + ${subtractedConstant})} = \\frac{1}{\\sqrt{${radicandStr}} + ${subtractedConstant}}$$`,
      `Par passage à la limite lorsque $x \\to ${x0}$ :`,
      `$$\\lim_{x \\to ${x0}} (\\sqrt{${radicandStr}} + ${subtractedConstant}) = \\sqrt{${radValAtX0}} + ${subtractedConstant} = ${subtractedConstant} + ${subtractedConstant} = ${denomLim}$$`,
      `Par quotient de limites :`,
      `$$\\lim_{x \\to ${x0}} ${funcName}(x) = \\frac{1}{${denomLim}} = ${limitFracStr}${limitFracStr !== `${limitValue}` ? ` = ${limitValue}` : ''}$$`,
      ``,
      `2. Justification du prolongement par continuité en $x = ${x0}$ :`,
      `• Théorème : Une fonction $${funcName}$ non définie en un point $x_0$ est prolongeable par continuité en $x_0$ si et seulement si elle admet en ce point une limite finie réelle : $\\lim_{x \\to x_0} ${funcName}(x) = L \\in \\mathbb{R}$.`,
      `• Ici, le point $${x0} \\notin \\mathcal{D}_{${funcName}}$, et $\\lim_{x \\to ${x0}} ${funcName}(x) = ${limitFracStr} \\in \\mathbb{R}$. Cette limite est finie.`,
      `• **Conclusion : La fonction $${funcName}$ admet un prolongement par continuité en $x = ${x0}$.**`,
    ];

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `lim_{x→${x0}} ${funcName}(x) = ${limitFracStr} (limite finie), donc ${funcName} est prolongeable par continuité (admet bien un prolongement par continuité) en ${x0}.`,
      verificationPassed: true,
    };
  }

  return null;
}

/**
 * Tente de résoudre un exercice complet de Limites, Continuité et Expression Conjuguée
 */
export function tryGenericLimitAndContinuityResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  const fn = parseRadicalConjugateFunction(contextCombined);
  if (!fn) return null;

  const solved: SolvedQuestionResult[] = [];

  for (const q of questions) {
    const res = solveRadicalConjugateQuestion(q, fn);
    if (!res) {
      return null; // Tous les points doivent être résolus avec rigueur mathématique
    }
    solved.push(res);
  }

  return solved;
}

/**
 * Génère une résolution pas-à-pas complète pour une fonction à expression conjuguée (3 étapes canoniques).
 */
export function solveRadicalConjugateExercise(fn: RadicalConjugateFunction): SolvedQuestionResult[] {
  const dummyQuestions: ParsedQuestion[] = [
    {
      id: 'q1',
      number: 1,
      numberLabel: '1.',
      rawText: `Justifier que ${fn.funcName} n'est pas définie en x = ${fn.x0}.`,
      cleanText: `Justifier que ${fn.funcName} n'est pas définie en x = ${fn.x0}.`,
      detectedType: 'general_math',
    },
    {
      id: 'q2',
      number: 2,
      numberLabel: '2.',
      rawText: `En multipliant par l'expression conjuguée, simplifier ${fn.funcName}(x).`,
      cleanText: `En multipliant par l'expression conjuguée, simplifier ${fn.funcName}(x).`,
      detectedType: 'general_math',
    },
    {
      id: 'q3',
      number: 3,
      numberLabel: '3.',
      rawText: `Calculer la limite en ${fn.x0} et étudier le prolongement par continuité.`,
      cleanText: `Calculer la limite en ${fn.x0} et étudier le prolongement par continuité.`,
      detectedType: 'limits',
    },
  ];

  return dummyQuestions.map(q => solveRadicalConjugateQuestion(q, fn)).filter(Boolean) as SolvedQuestionResult[];
}

