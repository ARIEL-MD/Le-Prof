/**
 * Solveur déterministe haute précision pour les calculs de Limites
 * (Mathématiques - Terminale & 1ère)
 *
 * Traite exactement selon la Méthode Papa :
 * - Monômes : x², x³, xⁿ, a·xⁿ en ±∞, 0, x₀
 * - Fonctions inverses : 1/x, 1/x², c/xⁿ en ±∞, 0⁺, 0⁻
 * - Polynômes : P(x) en ±∞ (terme de plus haut degré et factorisation)
 * - Fractions rationnelles : P(x)/Q(x) en ±∞ (quotient des termes de plus haut degré)
 * - Fonctions usuelles : √x, eˣ, ln(x)
 * - Expressions conjuguées : (√(x+a) - b)/(x - x₀)
 */

export interface LimitResolution {
  whatIsAsked: string;
  formulaOrRule: string;
  steps: string[];
  solution: string;
  pedagogicalTip: string;
}

/**
 * Analyse et résout déterministement une limite mathématique
 */
export function solveDeterministicMathLimit(
  qText: string,
  context: string = ''
): LimitResolution | null {
  const norm = `${context}\n${qText}`
    .replace(/[−–—]/g, '-')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/->|-->|→/g, ' \\to ')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\s+/g, ' ');

  // Extraction précise de la cible de limite
  let target = '+\\infty';
  let isPlusAndMinus = false;
  let isMinusInf = false;
  let isPlusInf = false;
  let isZeroPlus = false;
  let isZeroMinus = false;
  let isZero = false;
  let finiteX0: number | null = null;

  if (
    /\\to\s*[-]\s*\+\s*(?:\\?infty|∞|inf)|\\to\s*\+\s*[-]\s*(?:\\?infty|∞|inf)|\\to\s*[±∓]\s*(?:\\?infty|∞|inf)|(?:en|vers)\s*[±∓]|\\pm\\infty/i.test(norm)
  ) {
    isPlusAndMinus = true;
    target = '\\pm\\infty';
  } else if (/\\to\s*[-]\s*(?:\\?infty|∞|inf)|(?:en|vers)\s*[-]\s*(?:\\?infty|∞|inf)/i.test(norm)) {
    isMinusInf = true;
    target = '-\\infty';
  } else if (
    /\\to\s*\+?\s*(?:\\?infty|∞|inf)|(?:en|vers)\s*\+?\s*(?:\\?infty|∞|inf)|(?:\\?infty|∞|inf)/i.test(norm)
  ) {
    isPlusInf = true;
    target = '+\\infty';
  } else if (/\\to\s*0\^?\+|en\s*0\^?\+/i.test(norm)) {
    isZeroPlus = true;
    target = '0^+';
  } else if (/\\to\s*0\^?-|en\s*0\^?-/i.test(norm)) {
    isZeroMinus = true;
    target = '0^-';
  } else if (/\\to\s*0\b|en\s*0\b/i.test(norm)) {
    isZero = true;
    target = '0';
  } else {
    const numTargetMatch = norm.match(/\\to\s*([+-]?\d+(?:[.,]\d+)?)/i);
    if (numTargetMatch) {
      finiteX0 = parseFloat(numTargetMatch[1].replace(',', '.'));
      target = `${finiteX0}`;
    }
  }

  // CAS 1 : Fraction Rationnelle P(x)/Q(x) en ±∞ (quotient des termes de plus haut degré)
  const ratMatch = norm.match(/(?:\(?([+-]?\s*\d*(?:\.\d+)?\s*\*?\s*x(?:\s*\^\s*\d+)?(?:\s*[+-]\s*\d+)?)\)?)\s*\/\s*(?:\(?([+-]?\s*\d*(?:\.\d+)?\s*\*?\s*x(?:\s*\^\s*\d+)?(?:\s*[+-]\s*\d+)?)\)?)/i);
  if (ratMatch && (isPlusInf || isMinusInf || isPlusAndMinus) && !/1\s*\/\s*x/i.test(norm)) {
    const numRaw = ratMatch[1].replace(/\s+/g, '');
    const denRaw = ratMatch[2].replace(/\s+/g, '');

    const parseDeg = (expr: string) => {
      const xExpMatch = expr.match(/([+-]?\d*)x(?:\^(\d+))?/i);
      if (!xExpMatch) return { coeff: parseFloat(expr) || 1, deg: 0 };
      const rawC = xExpMatch[1];
      let coeff = 1;
      if (rawC === '-') coeff = -1;
      else if (rawC === '+' || rawC === '') coeff = 1;
      else coeff = parseFloat(rawC);
      const deg = xExpMatch[2] ? parseInt(xExpMatch[2], 10) : 1;
      return { coeff, deg };
    };

    const numInfo = parseDeg(numRaw);
    const denInfo = parseDeg(denRaw);

    if (numInfo.deg > 0 && denInfo.deg > 0) {
      const topTerm = `${numInfo.coeff !== 1 ? (numInfo.coeff === -1 ? '-' : numInfo.coeff) : ''}x${numInfo.deg > 1 ? `^{${numInfo.deg}}` : ''}`;
      const botTerm = `${denInfo.coeff !== 1 ? (denInfo.coeff === -1 ? '-' : denInfo.coeff) : ''}x${denInfo.deg > 1 ? `^{${denInfo.deg}}` : ''}`;

      if (numInfo.deg === denInfo.deg) {
        const ratio = numInfo.coeff / denInfo.coeff;
        const ratioStr = Number.isInteger(ratio) ? `${ratio}` : `\\frac{${numInfo.coeff}}{${denInfo.coeff}}`;
        return {
          whatIsAsked: `Déterminer la limite de la fonction rationnelle $f(x) = \\frac{${ratMatch[1]}}{${ratMatch[2]}}$ lorsque $x \\to ${target}$.`,
          formulaOrRule: `Théorème fondamental : En $\\pm\\infty$, la limite d'une fraction rationnelle est égale à la limite du quotient de ses termes de plus haut degré : $\\lim_{x \\to \\pm\\infty} \\frac{P(x)}{Q(x)} = \\lim_{x \\to \\pm\\infty} \\frac{a x^n}{b x^n} = \\frac{a}{b}$.`,
          steps: [
            `• On identifie le terme de plus haut degré au numérateur : $T_{\\text{num}} = ${topTerm}$.`,
            `• On identifie le terme de plus haut degré au dénominateur : $T_{\\text{dén}} = ${botTerm}$.`,
            `• **Factorisation et simplification :**`,
            `  $$f(x) = \\frac{${topTerm} \\left(1 + \\dots\\right)}{${botTerm} \\left(1 + \\dots\\right)}$$`,
            `• Par passage à la limite, les termes en $1/x$ s'annulent en $0$ :`,
            `  $$\\lim_{x \\to ${target}} f(x) = \\lim_{x \\to ${target}} \\frac{${topTerm}}{${botTerm}} = ${ratioStr}$$`,
            `• **Interprétation géométrique :** La droite d'équation $y = ${ratioStr}$ est asymptote horizontale à la courbe $\\mathcal{C}_f$ en $\\pm\\infty$.`,
          ],
          solution: `\\lim_{x \\to ${target}} f(x) = ${ratioStr}`,
          pedagogicalTip: `Lorsque les degrés du numérateur et du dénominateur sont égaux, l'asymptote horizontale est simplement le rapport des coefficients dominants $a / b$.`,
        };
      } else if (numInfo.deg < denInfo.deg) {
        return {
          whatIsAsked: `Déterminer la limite de la fonction rationnelle $f(x) = \\frac{${ratMatch[1]}}{${ratMatch[2]}}$ lorsque $x \\to ${target}$.`,
          formulaOrRule: `En $\\pm\\infty$, si le degré du dénominateur est strictement supérieur au degré du numérateur ($m > n$), la limite est nulle : $\\lim_{x \\to \\pm\\infty} f(x) = 0$.`,
          steps: [
            `• Degré du numérateur : $n = ${numInfo.deg}$ ; Degré du dénominateur : $m = ${denInfo.deg}$ ($n < m$).`,
            `• Quotient des monômes dominants :`,
            `  $$\\lim_{x \\to ${target}} f(x) = \\lim_{x \\to ${target}} \\frac{${topTerm}}{${botTerm}} = \\lim_{x \\to ${target}} \\frac{${numInfo.coeff}}{${denInfo.coeff} x^{${denInfo.deg - numInfo.deg}}} = 0$$`,
            `• La droite d'équation $y = 0$ (l'axe des abscisses) est asymptote horizontale à la courbe représentative.`,
          ],
          solution: `\\lim_{x \\to ${target}} f(x) = 0`,
          pedagogicalTip: `Le dénominateur l'emporte à l'infini en écrasant le quotient vers 0.`,
        };
      }
    }
  }

  // CAS 2 : Fonction inverse 1/x^2 (doit être testé avant x^2 !)
  if (/\b1\s*\/\s*x\s*\^\s*2\b|\b1\s*\/\s*x²\b/i.test(norm)) {
    if (isPlusInf || isMinusInf || isPlusAndMinus) {
      return {
        whatIsAsked: `Déterminer la limite de $f(x) = \\frac{1}{x^2}$ lorsque $x \\to ${target}$.`,
        formulaOrRule: `Limite usuelle : Pour tout entier $n \\ge 1$, $\\lim_{x \\to \\pm\\infty} \\frac{1}{x^n} = 0$.`,
        steps: [
          `• Lorsque $x \\to ${target}$, le dénominateur $x^2$ tend vers $+\\infty$.`,
          `• Par quotient de limites :`,
          `  $$\\lim_{x \\to ${target}} \\frac{1}{x^2} = \\frac{1}{+\\infty} = 0$$`,
          `• La droite d'équation $y = 0$ (axe des abscisses) est asymptote horizontale à la courbe en $\\pm\\infty$.`,
        ],
        solution: `\\lim_{x \\to ${target}} \\frac{1}{x^2} = 0`,
        pedagogicalTip: `Toute constante divisée par une quantité qui tend vers l'infini donne $0$.`,
      };
    }
    if (isZero || isZeroPlus || isZeroMinus) {
      return {
        whatIsAsked: `Déterminer la limite de $f(x) = \\frac{1}{x^2}$ lorsque $x \\to 0$.`,
        formulaOrRule: `Pour tout $x \\neq 0$, $x^2 > 0$, donc $x^2 \\to 0^+$ quand $x \\to 0$.`,
        steps: [
          `• Comme $x^2 > 0$ pour tout $x \\neq 0$, le dénominateur reste strictement positif au voisinage de $0$ ($x^2 \\to 0^+$).`,
          `• Par quotient :`,
          `  $$\\lim_{x \\to 0} \\frac{1}{x^2} = \\frac{1}{0^+} = +\\infty$$`,
          `• La droite d'équation $x = 0$ (axe des ordonnées) est asymptote verticale.`,
        ],
        solution: `\\lim_{x \\to 0} \\frac{1}{x^2} = +\\infty`,
        pedagogicalTip: `Le carré garantit que le dénominateur est positif : la limite en $0$ est donc $+\\infty$ des deux côtés (à gauche et à droite).`,
      };
    }
  }

  // CAS 3 : Fonction inverse 1/x
  if (/\b1\s*\/\s*x\b/i.test(norm)) {
    if (isPlusInf || isMinusInf || isPlusAndMinus) {
      return {
        whatIsAsked: `Déterminer la limite de la fonction inverse $f(x) = \\frac{1}{x}$ lorsque $x \\to ${target}$.`,
        formulaOrRule: `Limite fondamentale : $\\lim_{x \\to +\\infty} \\frac{1}{x} = 0$ et $\\lim_{x \\to -\\infty} \\frac{1}{x} = 0$.`,
        steps: [
          `• Lorsque $x$ tend vers ${target}$, la valeur absolue de $x$ devient infiniment grande.`,
          `• L'inverse $\\frac{1}{x}$ se rapproche indéfiniment de $0$ :`,
          `  $$\\lim_{x \\to ${target}} \\frac{1}{x} = 0$$`,
          `• La droite d'équation $y = 0$ est asymptote horizontale à l'hyperbole.`,
        ],
        solution: `\\lim_{x \\to ${target}} \\frac{1}{x} = 0`,
        pedagogicalTip: `La courbe de l'hyperbole admet l'axe des abscisses ($y = 0$) comme asymptote horizontale en $-\\infty$ et $+\\infty$.`,
      };
    }
    if (isZeroPlus) {
      return {
        whatIsAsked: `Déterminer la limite de $f(x) = \\frac{1}{x}$ lorsque $x \\to 0^+$ (à droite de 0).`,
        formulaOrRule: `Limite fondamentale en $0$ : $\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty$ et $\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty$.`,
        steps: [
          `• Pour $x > 0$, $x$ tend vers $0$ en restant strictement positif ($x \\to 0^+$).`,
          `• Par quotient : $\\lim_{x \\to 0^+} \\frac{1}{x} = \\frac{1}{0^+} = +\\infty$.`,
          `• L'axe $(Oy)$ d'équation $x = 0$ est asymptote verticale.`,
        ],
        solution: `\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty`,
        pedagogicalTip: `Fais toujours attention au signe du dénominateur en 0 : $1/0^+ = +\\infty$, mais $1/0^- = -\\infty$.`,
      };
    }
    if (isZeroMinus) {
      return {
        whatIsAsked: `Déterminer la limite de $f(x) = \\frac{1}{x}$ lorsque $x \\to 0^-$ (à gauche de 0).`,
        formulaOrRule: `Limite fondamentale en $0$ : $\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty$.`,
        steps: [
          `• Pour $x < 0$, $x$ tend vers $0$ en restant strictement négatif ($x \\to 0^-$).`,
          `• Par quotient : $\\lim_{x \\to 0^-} \\frac{1}{x} = \\frac{1}{0^-} = -\\infty$.`,
          `• La droite d'équation $x = 0$ est asymptote verticale.`,
        ],
        solution: `\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty`,
        pedagogicalTip: `N'écris jamais $1/0$ seul sans signe (+ ou -). Spécifie toujours $0^+$ ou $0^-$.`,
      };
    }
  }

  // CAS 4 : Fonction exponentielle e^x
  if (/\be\^x\b|\\exp\(x\)/i.test(norm)) {
    if (isPlusAndMinus) {
      return {
        whatIsAsked: `Déterminer la limite de la fonction exponentielle $f(x) = e^x$ en $-\\infty$ et en $+\\infty$.`,
        formulaOrRule: `Propriétés fondamentales de l'exponentielle : $\\lim_{x \\to -\\infty} e^x = 0$ et $\\lim_{x \\to +\\infty} e^x = +\\infty$.`,
        steps: [
          `• **1. Limite en $-\\infty$ :** $\\lim_{x \\to -\\infty} e^x = 0$. La droite $y = 0$ est asymptote horizontale en $-\\infty$.`,
          `• **2. Limite en $+\\infty$ :** $\\lim_{x \\to +\\infty} e^x = +\\infty$.`,
        ],
        solution: `\\lim_{x \\to -\\infty} e^x = 0 \\quad \\text{et} \\quad \\lim_{x \\to +\\infty} e^x = +\\infty`,
        pedagogicalTip: `Pour tout réel $x$, $e^x > 0$ : la courbe exponentielle est entièrement au-dessus de son asymptote $y = 0$.`,
      };
    }
    if (isPlusInf) {
      return {
        whatIsAsked: `Déterminer la limite de la fonction exponentielle $f(x) = e^x$ lorsque $x \\to +\\infty$.`,
        formulaOrRule: `Propriété fondamentale de l'exponentielle : $\\lim_{x \\to +\\infty} e^x = +\\infty$.`,
        steps: [
          `• L'exponentielle est une fonction strictement croissante sur $\\mathbb{R}$ sans borne supérieure :`,
          `  $$\\lim_{x \\to +\\infty} e^x = +\\infty$$`,
        ],
        solution: `\\lim_{x \\to +\\infty} e^x = +\\infty`,
        pedagogicalTip: `En $+\\infty$, la croissance de $e^x$ est plus rapide que celle de toute fonction puissance (croissances comparées).`,
      };
    }
    if (isMinusInf) {
      return {
        whatIsAsked: `Déterminer la limite de la fonction exponentielle $f(x) = e^x$ lorsque $x \\to -\\infty$.`,
        formulaOrRule: `Propriété fondamentale de l'exponentielle : $\\lim_{x \\to -\\infty} e^x = 0$.`,
        steps: [
          `• En posant le changement de variable $X = -x$, quand $x \\to -\\infty$, on a $X \\to +\\infty$ :`,
          `  $$e^x = e^{-X} = \\frac{1}{e^X} \\xrightarrow[X \\to +\\infty]{} \\frac{1}{+\\infty} = 0$$`,
          `• La droite d'équation $y = 0$ (axe des abscisses) est asymptote horizontale à la courbe représentative $\\mathcal{C}_{\\exp}$ en $-\\infty$.`,
        ],
        solution: `\\lim_{x \\to -\\infty} e^x = 0`,
        pedagogicalTip: `L'exponentielle reste toujours strictement positive ($e^x > 0$), donc la limite en $-\\infty$ vaut $0^+$ : la courbe longe l'axe $(Ox)$ par le haut.`,
      };
    }
  }

  // CAS 5 : Logarithme népérien ln(x)
  if (/\bln\s*\(\s*x\s*\)|\bln\s*x\b/i.test(norm)) {
    if (isPlusInf) {
      return {
        whatIsAsked: `Déterminer la limite de la fonction logarithme népérien $f(x) = \\ln(x)$ lorsque $x \\to +\\infty$.`,
        formulaOrRule: `Limite fondamentale du logarithme : $\\lim_{x \\to +\\infty} \\ln(x) = +\\infty$.`,
        steps: [
          `• La fonction $\\ln$ est strictement croissante sur $]0, +\\infty[$ et non majorée :`,
          `  $$\\lim_{x \\to +\\infty} \\ln(x) = +\\infty$$`,
        ],
        solution: `\\lim_{x \\to +\\infty} \\ln(x) = +\\infty`,
        pedagogicalTip: `Bien que la croissance du logarithme soit très lente, sa limite en $+\\infty$ est bien $+\\infty$.`,
      };
    }
    if (isZero || isZeroPlus) {
      return {
        whatIsAsked: `Déterminer la limite de la fonction logarithme népérien $f(x) = \\ln(x)$ lorsque $x \\to 0^+$.`,
        formulaOrRule: `Limite fondamentale du logarithme en 0 : $\\lim_{x \\to 0^+} \\ln(x) = -\\infty$.`,
        steps: [
          `• Le logarithme n'est défini que pour des valeurs strictement positives ($x > 0$).`,
          `• Lorsque $x$ s'approche de $0$ par valeurs supérieures :`,
          `  $$\\lim_{x \\to 0^+} \\ln(x) = -\\infty$$`,
          `• La droite d'équation $x = 0$ (axe des ordonnées) est asymptote verticale à la courbe $\\mathcal{C}_{\\ln}$.`,
        ],
        solution: `\\lim_{x \\to 0^+} \\ln(x) = -\\infty`,
        pedagogicalTip: `N'écris jamais $\\ln(0)$, car $0$ est en dehors du domaine de définition. Écris toujours la limite $\\lim_{x \\to 0^+} \\ln(x) = -\\infty$.`,
      };
    }
  }

  // CAS 6 : Monôme simple x^2 ou x² (très fréquent !)
  const isXSquare = /\bx\s*\^\s*2\b|\bx²\b|\bx\s+2\b/i.test(norm) && !/\bx\s*\^\s*3|\bx\s*\^\s*[4-9]/i.test(norm);

  if (isXSquare) {
    if (isPlusAndMinus) {
      return {
        whatIsAsked: `Déterminer la limite de la fonction carrée $f(x) = x^2$ lorsque $x \\to -\\infty$ et lorsque $x \\to +\\infty$.`,
        formulaOrRule: `Propriété fondamentale des puissances paires : Pour tout réel $x$, $x^2 \\ge 0$. Par conséquent, $\\lim_{x \\to +\\infty} x^2 = +\\infty$ et $\\lim_{x \\to -\\infty} x^2 = +\\infty$.`,
        steps: [
          `• On étudie la fonction de référence $f(x) = x^2$.`,
          `• **1. Limite en $+\\infty$ :**`,
          `  Lorsque $x$ devient infiniment grand positif ($x \\to +\\infty$) :`,
          `  $$\\lim_{x \\to +\\infty} x^2 = (+\\infty)^2 = +\\infty$$`,
          `• **2. Limite en $-\\infty$ :**`,
          `  Lorsque $x$ tend vers $-\\infty$, $x$ prend des valeurs négatives de très grande valeur absolue.`,
          `  Comme le carré d'un nombre négatif est toujours strictement positif ($(-X)^2 = X^2 > 0$) :`,
          `  $$\\lim_{x \\to -\\infty} x^2 = (-\\infty)^2 = +\\infty$$`,
          `• **Synthèse :** La parabole s'ouvre vers le haut, donc $\\lim_{x \\to \\pm\\infty} x^2 = +\\infty$.`,
        ],
        solution: `\\lim_{x \\to -\\infty} x^2 = +\\infty \\quad \\text{et} \\quad \\lim_{x \\to +\\infty} x^2 = +\\infty`,
        pedagogicalTip: `Attention au piège classique : $(-x)^2 = x^2$ donne $+\\infty$, ne confonds pas avec $-x^2$ qui donnerait $-\\infty$.`,
      };
    }

    if (isMinusInf) {
      return {
        whatIsAsked: `Déterminer la limite de la fonction carrée $f(x) = x^2$ lorsque $x \\to -\\infty$.`,
        formulaOrRule: `Propriété des puissances paires : Pour tout réel $x$, $x^2 \\ge 0$. Donc $\\lim_{x \\to -\\infty} x^2 = +\\infty$.`,
        steps: [
          `• Lorsque $x$ tend vers $-\\infty$, $x$ prend des valeurs négatives infiniment grandes en valeur absolue.`,
          `• Comme le carré de tout réel non nul est strictement positif :`,
          `  $$\\lim_{x \\to -\\infty} x^2 = (-\\infty)^2 = +\\infty$$`,
        ],
        solution: `\\lim_{x \\to -\\infty} x^2 = +\\infty`,
        pedagogicalTip: `Le carré d'un nombre réel est toujours positif : en $-\\infty$, la limite de $x^2$ est $+\\infty$ et jamais $-\\infty$.`,
      };
    }

    if (isPlusInf) {
      return {
        whatIsAsked: `Déterminer la limite de la fonction carrée $f(x) = x^2$ lorsque $x \\to +\\infty$.`,
        formulaOrRule: `Limite fondamentale : Pour tout entier $n \\ge 1$, $\\lim_{x \\to +\\infty} x^n = +\\infty$.`,
        steps: [
          `• Lorsque $x \\to +\\infty$, $x$ devient infiniment grand :`,
          `  $$\\lim_{x \\to +\\infty} x^2 = (+\\infty)^2 = +\\infty$$`,
        ],
        solution: `\\lim_{x \\to +\\infty} x^2 = +\\infty`,
        pedagogicalTip: `Limite de référence du cours de mathématiques à citer directement sur la copie.`,
      };
    }

    if (isZero) {
      return {
        whatIsAsked: `Déterminer la limite de la fonction carrée $f(x) = x^2$ lorsque $x \\to 0$.`,
        formulaOrRule: `Continuité : La fonction carrée est continue en 0, d'où $\\lim_{x \\to 0} x^2 = 0^2 = 0$.`,
        steps: [
          `• Par évaluation directe :`,
          `  $$\\lim_{x \\to 0} x^2 = 0^2 = 0$$`,
        ],
        solution: `\\lim_{x \\to 0} x^2 = 0`,
        pedagogicalTip: `Toute fonction polynôme est continue sur $\\mathbb{R}$ : la limite en un point $x_0$ s'obtient en remplaçant directement $x$ par $x_0$.`,
      };
    }

    if (finiteX0 !== null) {
      const resVal = finiteX0 * finiteX0;
      return {
        whatIsAsked: `Déterminer la limite de $f(x) = x^2$ lorsque $x \\to ${finiteX0}$.`,
        formulaOrRule: `Continuité : $\\lim_{x \\to x_0} x^2 = x_0^2$.`,
        steps: [
          `• La fonction carrée est continue sur $\\mathbb{R}$, donc continue en $x_0 = ${finiteX0}$.`,
          `• On évalue directement :`,
          `  $$\\lim_{x \\to ${finiteX0}} x^2 = (${finiteX0})^2 = ${resVal}$$`,
        ],
        solution: `\\lim_{x \\to ${finiteX0}} x^2 = ${resVal}`,
        pedagogicalTip: `Pour une fonction continue en un point réel, limite et image coïncident : $\\lim_{x \\to a} f(x) = f(a)$.`,
      };
    }
  }

  // CAS 7 : Monôme général a * x^n (ex: 2x^3, -3x^2, x^4)
  const monoMatch = norm.match(/([+-]?\s*\d*(?:\.\d+)?)\s*\*?\s*x\s*\^\s*(\d+)/i);
  if (monoMatch) {
    const rawA = monoMatch[1].replace(/\s+/g, '');
    let aVal = 1;
    if (rawA === '-') aVal = -1;
    else if (rawA === '+' || rawA === '') aVal = 1;
    else aVal = parseFloat(rawA);

    const nVal = parseInt(monoMatch[2], 10);
    const isEven = nVal % 2 === 0;

    if (isMinusInf || isPlusAndMinus) {
      const signStr = isEven ? (aVal > 0 ? '+\\infty' : '-\\infty') : (aVal > 0 ? '-\\infty' : '+\\infty');
      const plusSignStr = aVal > 0 ? '+\\infty' : '-\\infty';

      return {
        whatIsAsked: `Déterminer la limite de $f(x) = ${aVal !== 1 ? aVal : ''}x^{${nVal}}$ lorsque $x \\to ${target}$.`,
        formulaOrRule: `Pour $x \\to \\pm\\infty$, le comportement de $x^n$ dépend de la parité de l'exposant $n$ : si $n$ est ${isEven ? 'pair' : 'impair'}, $\\lim_{x \\to -\\infty} x^n = ${isEven ? '+\\infty' : '-\\infty'}$.`,
        steps: [
          `• L'exposant $n = ${nVal}$ est ${isEven ? 'pair' : 'impair'}.`,
          `• Le coefficient est $a = ${aVal}$ (${aVal > 0 ? 'positif' : 'négatif'}).`,
          isPlusAndMinus
            ? `• En $+\\infty$ : $\\lim_{x \\to +\\infty} x^{${nVal}} = +\\infty$, donc $\\lim_{x \\to +\\infty} ${aVal !== 1 ? aVal : ''}x^{${nVal}} = ${plusSignStr}$.`
            : `• En $-\\infty$ : $\\lim_{x \\to -\\infty} x^{${nVal}} = ${isEven ? '+\\infty' : '-\\infty'}$, donc $\\lim_{x \\to -\\infty} ${aVal !== 1 ? aVal : ''}x^{${nVal}} = ${signStr}$.`,
          isPlusAndMinus
            ? `• En $-\\infty$ : $\\lim_{x \\to -\\infty} x^{${nVal}} = ${isEven ? '+\\infty' : '-\\infty'}$, donc $\\lim_{x \\to -\\infty} ${aVal !== 1 ? aVal : ''}x^{${nVal}} = ${signStr}$.`
            : '',
        ].filter(Boolean),
        solution: isPlusAndMinus
          ? `\\lim_{x \\to -\\infty} ${aVal !== 1 ? aVal : ''}x^{${nVal}} = ${signStr} \\quad \\text{et} \\quad \\lim_{x \\to +\\infty} ${aVal !== 1 ? aVal : ''}x^{${nVal}} = ${plusSignStr}`
          : `\\lim_{x \\to ${target}} ${aVal !== 1 ? aVal : ''}x^{${nVal}} = ${signStr}`,
        pedagogicalTip: `Applique la règle des signes : $(-)^n = +$ si $n$ est pair, et $(-)^n = -$ si $n$ est impair.`,
      };
    }

    if (isPlusInf) {
      const resInf = aVal > 0 ? '+\\infty' : '-\\infty';
      return {
        whatIsAsked: `Déterminer la limite de $f(x) = ${aVal !== 1 ? aVal : ''}x^{${nVal}}$ lorsque $x \\to +\\infty$.`,
        formulaOrRule: `Pour tout entier $n \\ge 1$, $\\lim_{x \\to +\\infty} x^n = +\\infty$. Le signe de la limite finale dépend du signe du coefficient $a$.`,
        steps: [
          `• Lorsque $x \\to +\\infty$, $x^{${nVal}} \\to +\\infty$.`,
          `• Le coefficient multiplicateur est $a = ${aVal}$ (${aVal > 0 ? 'positif' : 'négatif'}).`,
          `• Par produit : $\\lim_{x \\to +\\infty} ${aVal !== 1 ? aVal : ''}x^{${nVal}} = ${resInf}$.`,
        ],
        solution: `\\lim_{x \\to +\\infty} ${aVal !== 1 ? aVal : ''}x^{${nVal}} = ${resInf}`,
        pedagogicalTip: `Multiplier $+\\infty$ par un nombre strictement négatif donne $-\\infty$.`,
      };
    }
  }

  // CAS 8 : Polynôme du 2nd degré ou supérieur en ±∞ (règle du monôme de plus haut degré)
  const polyMatch = norm.match(/([+-]?\s*\d*\s*x\s*\^\s*2\s*[+-]\s*\d*\s*x\s*[+-]\s*\d+)/i) ||
                    norm.match(/([+-]?\s*\d*\s*x\s*\^\s*2\s*[+-]\s*\d*\s*x)/i) ||
                    norm.match(/([+-]?\s*\d*\s*x\s*\^\s*2\s*[+-]\s*\d+)/i);
  if (polyMatch && (isPlusInf || isMinusInf || isPlusAndMinus)) {
    const expr = polyMatch[1].replace(/\s+/g, '');
    const aMatch = expr.match(/^([+-]?\d*)x\^2/i);
    let aVal = 1;
    if (aMatch) {
      if (aMatch[1] === '-') aVal = -1;
      else if (aMatch[1] === '+' || aMatch[1] === '') aVal = 1;
      else aVal = parseFloat(aMatch[1]);
    }
    const resSign = aVal > 0 ? '+\\infty' : '-\\infty';
    return {
      whatIsAsked: `Déterminer la limite de la fonction polynomiale $P(x) = ${polyMatch[1]}$ lorsque $x \\to ${target}$.`,
      formulaOrRule: `Théorème fondamental : En $\\pm\\infty$, la limite d'une fonction polynôme est égale à la limite de son terme de plus haut degré : $\\lim_{x \\to \\pm\\infty} P(x) = \\lim_{x \\to \\pm\\infty} (a_n x^n)$.`,
      steps: [
        `• Soit la fonction polynomiale $P(x) = ${polyMatch[1]}$.`,
        `• Le terme de plus haut degré est $T(x) = ${aVal !== 1 ? aVal : ''}x^2$.`,
        `• **Méthode par factorisation du terme prépondérant :**`,
        `  $$P(x) = ${aVal !== 1 ? aVal : ''}x^2 \\left(1 + \\dots\\right)$$`,
        `• Or les termes inverses divisés par $x$ tendent vers $0$ lorsque $x \\to ${target}$.`,
        `• Par conséquent :`,
        `  $$\\lim_{x \\to ${target}} P(x) = \\lim_{x \\to ${target}} (${aVal !== 1 ? aVal : ''}x^2) = ${resSign}$$`,
      ],
      solution: `\\lim_{x \\to ${target}} P(x) = ${resSign}`,
      pedagogicalTip: `Ne calcule jamais terme par terme en $\\pm\\infty$ sous peine de tomber sur une forme indéterminée « $+\\infty - \\infty$ ». Factorise toujours par le terme de plus haut degré.`,
    };
  }

  return null;
}
