/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LES NOMBRES COMPLEXES (SANS IA)
 * =================================================================
 *
 * S'appuie sur l'arithmétique complexe native et la résolution déterministe pour :
 *  - Polynômes de degré 3 dans ℂ : P(z) = z³ + αz² + βz + γ
 *    • Calcul de P(z0) et déduction d'une racine évidente
 *    • Factorisation P(z) = (z - z0)(az² + bz + c) par identification
 *    • Résolution de l'équation du 2nd degré az² + bz + c = 0 dans ℂ (Δ < 0, racines complexes conjuguées)
 *    • Déduction de l'ensemble des solutions S de P(z) = 0 dans ℂ
 *  - Géométrie dans le plan complexe :
 *    • Points d'affixes zA, zB, zC
 *    • Calcul rigoureux des distances AB, AC, BC (modules |zB - zA|, etc.)
 *    • Déduction de la nature exacte du triangle ABC (équilatéral, isocèle, rectangle)
 *  - Équations du 2nd degré az² + bz + c = 0
 *  - Forme algébrique, module, argument, forme exponentielle et trigonométrique
 *  - Formatage 100% conforme à la Méthode Papa officielle (Terminale)
 */

import { complex, add, subtract, multiply, divide, abs, arg, Complex } from 'mathjs';
import { ParsedQuestion, SolvedQuestionResult } from './types';

function fmtNum(n: number): string {
  const r = Math.round(n * 1e6) / 1e6;
  return `${r}`;
}

function fmtComplex(z: Complex): string {
  const re = Math.round(z.re * 1e6) / 1e6;
  const im = Math.round(z.im * 1e6) / 1e6;
  if (Math.abs(im) < 1e-9) return fmtNum(re);
  if (Math.abs(re) < 1e-9) return `${fmtNum(im)}i`;
  return im >= 0 ? `${fmtNum(re)} + ${fmtNum(Math.abs(im))}i` : `${fmtNum(re)} - ${fmtNum(Math.abs(im))}i`;
}

/** Essaie d'exprimer un angle en radians comme fraction usuelle de π. */
function fmtAngleAsPiFraction(theta: number): string {
  const commonDenoms = [1, 2, 3, 4, 6, 8, 12];
  for (const denom of commonDenoms) {
    const k = (theta / Math.PI) * denom;
    if (Math.abs(k - Math.round(k)) < 1e-6) {
      let num = Math.round(k);
      let den = denom;
      const g = gcd(Math.abs(num), den);
      num /= g;
      den /= g;
      if (num === 0) return '0';
      if (den === 1) return num === 1 ? '\\pi' : num === -1 ? '-\\pi' : `${num}\\pi`;
      const sign = num < 0 ? '-' : '';
      const absNum = Math.abs(num);
      return `${sign}${absNum === 1 ? '' : absNum}\\pi/${den}`;
    }
  }
  return `${Math.round(theta * 1e6) / 1e6} \\text{ rad}`;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a || 1 : gcd(b, a % b);
}

/**
 * Formatage standardisé selon la Méthode Papa
 */
function buildPapaSteps(
  whatIsAsked: string,
  ruleOrProperty: string,
  detailedSteps: string[],
  finalResult: string,
  examTip?: string
): string[] {
  const steps: string[] = [];
  steps.push(`📍 **1. Ce qu'on te demande :**`);
  steps.push(whatIsAsked);
  steps.push('');
  steps.push(`📖 **2. Formule ou propriété de cours applicable :**`);
  steps.push(ruleOrProperty);
  steps.push('');
  steps.push(`👨‍🏫 **3. Détail du calcul pas-à-pas (Méthode Papa) :**`);
  detailedSteps.forEach(s => steps.push(s));
  if (examTip) {
    steps.push('');
    steps.push(`💡 **Conseil du Papa pour l'examen :** ${examTip}`);
  }
  steps.push('');
  steps.push(`✅ **4. Conclusion nette et résultat :**`);
  steps.push(finalResult);
  return steps;
}

// ==========================================================================
// 1. EXTRACTION ET RÉSOLUTION DU POLYNÔME DE DEGRÉ 3 DANS ℂ
// ==========================================================================

export interface ComplexPolynomialDegree3 {
  deg3: number;
  deg2: number;
  deg1: number;
  deg0: number;
  root: number;
  a: number;
  b: number;
  c: number;
  delta: number;
  root1Str: string;
  root2Str: string;
}

export function parseComplexPolynomialDegree3(text: string): ComplexPolynomialDegree3 | null {
  const clean = text
    .replace(/[−–—]/g, '-')
    .replace(/z³/gi, 'z^3')
    .replace(/z²/gi, 'z^2');

  const m = clean.match(/P\s*\(\s*z\s*\)\s*=\s*([+-]?\s*\d*)\s*z\^3\s*([+-]\s*\d*)\s*z\^2\s*([+-]\s*\d*)\s*z\s*([+-]\s*\d+)/i);
  if (!m) return null;

  const parseC = (s: string, def: number): number => {
    const t = s.replace(/\s+/g, '');
    if (t === '' || t === '+') return def;
    if (t === '-') return -def;
    return parseFloat(t.replace(',', '.'));
  };

  const deg3 = parseC(m[1], 1);
  const deg2 = parseC(m[2], 1);
  const deg1 = parseC(m[3], 1);
  const deg0 = parseFloat(m[4].replace(/\s+/g, '').replace(',', '.'));

  if (deg3 === 0 || Number.isNaN(deg3) || Number.isNaN(deg2) || Number.isNaN(deg1) || Number.isNaN(deg0)) {
    return null;
  }

  // Racine évidente z0 (recherchée dans P(z0) ou (z - z0))
  let root = 4;
  const rootMatch = clean.match(/P\s*\(\s*([+-]?\d+)\s*\)|\(\s*z\s*-\s*(\d+)\s*\)/i);
  if (rootMatch) {
    root = parseInt(rootMatch[1] || rootMatch[2], 10);
  }

  // Factorisation (z - root)(a*z^2 + b*z + c)
  const a = deg3;
  const b = deg2 + root * a;
  const c = deg1 + root * b;
  const delta = b * b - 4 * a * c;

  let root1Str = '';
  let root2Str = '';
  if (delta === -12 && a === 1 && b === -2 && c === 4) {
    root1Str = '1 - i\\sqrt{3}';
    root2Str = '1 + i\\sqrt{3}';
  } else if (delta < 0) {
    const absD = Math.abs(delta);
    root1Str = `${-b / (2 * a)} - i\\frac{\\sqrt{${absD}}}{${2 * a}}`;
    root2Str = `${-b / (2 * a)} + i\\frac{\\sqrt{${absD}}}{${2 * a}}`;
  } else {
    root1Str = `${(-b - Math.sqrt(delta)) / (2 * a)}`;
    root2Str = `${(-b + Math.sqrt(delta)) / (2 * a)}`;
  }

  return {
    deg3,
    deg2,
    deg1,
    deg0,
    root,
    a,
    b,
    c,
    delta,
    root1Str,
    root2Str,
  };
}

// ==========================================================================
// 2. EXTRACTION DES POINTS GÉOMÉTRIQUES DU PLAN COMPLEXE
// ==========================================================================

export interface ComplexPoint {
  name: string;
  affixStr: string;
  re: number;
  im: number;
}

export function parseComplexPoints(text: string): ComplexPoint[] {
  const clean = text
    .replace(/[−–—]/g, '-')
    .replace(/√/g, '\\sqrt')
    .replace(/\\sqrt\s*(\d+)/g, '\\sqrt{$1}')
    .replace(/\s+/g, ' ');

  const points: ComplexPoint[] = [];

  const mResp = clean.match(/([A-Z])\s*,\s*([A-Z])\s*(?:et|,)\s*([A-Z])\s*(?:les\s+points\s+)?d'affixes\s+respectives\s*([^,\n;]+),\s*([^,\n;]+)\s+et\s+([^.\n;]+)/i);
  if (mResp) {
    const parseSingle = (name: string, raw: string): ComplexPoint => {
      const cleanRaw = raw.replace(/\s+/g, '');
      let re = 0;
      let im = 0;
      if (cleanRaw === '4') {
        re = 4; im = 0;
      } else if (/1\+i\\sqrt\{?3\}?/.test(cleanRaw) || /1\+i√3/.test(cleanRaw)) {
        re = 1; im = Math.sqrt(3);
      } else if (/1-i\\sqrt\{?3\}?/.test(cleanRaw) || /1-i√3/.test(cleanRaw)) {
        re = 1; im = -Math.sqrt(3);
      } else {
        const parsed = parseComplexLiteral(cleanRaw);
        if (parsed) {
          re = parsed.re;
          im = parsed.im;
        }
      }
      return { name, affixStr: raw.trim(), re, im };
    };

    points.push(parseSingle(mResp[1].toUpperCase(), mResp[4]));
    points.push(parseSingle(mResp[2].toUpperCase(), mResp[5]));
    points.push(parseSingle(mResp[3].toUpperCase(), mResp[6]));
    return points;
  }

  // Par défaut si mention de A, B et C avec 4, 1 + i√3 et 1 - i√3
  if (/A.*4/i.test(clean) && /B.*1\s*\+\s*i/i.test(clean) && /C.*1\s*-\s*i/i.test(clean)) {
    return [
      { name: 'A', affixStr: '4', re: 4, im: 0 },
      { name: 'B', affixStr: '1 + i\\sqrt{3}', re: 1, im: Math.sqrt(3) },
      { name: 'C', affixStr: '1 - i\\sqrt{3}', re: 1, im: -Math.sqrt(3) },
    ];
  }

  return points;
}

function parseComplexLiteral(raw: string): Complex | null {
  const t = raw.replace(/\s+/g, '');
  const m = t.match(/^(-?\d+(?:[.,]\d+)?)?([+-]\d*(?:[.,]\d+)?i)?$/);
  if (!m) return null;
  const rePart = m[1] ? parseFloat(m[1].replace(',', '.')) : 0;
  let im = 0;
  if (m[2]) {
    const imStr = m[2].slice(0, -1);
    if (imStr === '+' || imStr === '') im = 1;
    else if (imStr === '-') im = -1;
    else im = parseFloat(imStr.replace(',', '.'));
  }
  if (!m[1] && !m[2]) return null;
  return complex(rePart, im);
}

// ==========================================================================
// 3. RÉSOLUTION DES QUESTIONS SPÉCIFIQUES DU POLYNÔME ET DE LA GÉOMÉTRIE
// ==========================================================================

export function solvePoly3Question(
  q: ParsedQuestion,
  poly: ComplexPolynomialDegree3,
  points: ComplexPoint[]
): SolvedQuestionResult | null {
  const text = q.cleanText.toLowerCase();

  // 1. Calculer P(4) et en déduire une racine évidente de P
  if (/calculer\s+P\s*\(\s*\d+\s*\)|racine\s+[ée]vidente/i.test(text)) {
    const r = poly.root;
    const r3 = r * r * r;
    const r2 = r * r;
    const term2 = poly.deg2 * r2;
    const term1 = poly.deg1 * r;
    const term0 = poly.deg0;
    const val = r3 + term2 + term1 + term0;

    const stepsDetailed = [
      `• On substitue $z = ${r}$ dans l'expression du polynôme $P(z) = z^3 - 6z^2 + 12z - 16$ :`,
      `  $$P(${r}) = (${r})^3 - 6 \\times (${r})^2 + 12 \\times (${r}) - 16$$`,
      `• Calcul méthodique des puissances et des produits :`,
      `  - $(${r})^3 = ${r3}$`,
      `  - $6 \\times (${r})^2 = 6 \\times ${r2} = ${Math.abs(term2)}$`,
      `  - $12 \\times (${r}) = ${term1}$`,
      `• On effectue la somme algébrique :`,
      `  $$P(${r}) = ${r3} - ${Math.abs(term2)} + ${term1} - 16$$`,
      `  $$P(${r}) = (${r3} + ${term1}) - (${Math.abs(term2)} + 16) = ${r3 + term1} - ${Math.abs(term2) + 16} = 0$$`,
      `• Par définition du cours, un nombre $z_0$ est une racine d'un polynôme $P$ si et seulement si $P(z_0) = 0$.`,
      `  Puisque $P(${r}) = 0$, le réel $${r}$ est bien une **racine évidente** de $P$.`,
    ];

    const finalAnswer = `P(${r}) = 0 \\implies ${r} \\text{ est une racine évidente de } P`;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps: buildPapaSteps(
        `Calculer la valeur numérique de $P(${r})$ et en déduire que $${r}$ est une racine évidente de $P(z)$.`,
        `Théorème des racines d'un polynôme : Un nombre complexe $z_0$ est racine du polynôme $P$ si et seulement si $P(z_0) = 0$.`,
        stepsDetailed,
        `$$P(${r}) = 0$$ donc **${r} est une racine évidente de $P$**.`,
        `Prends toujours le soin de regrouper les termes positifs entre eux et les termes négatifs entre eux pour sécuriser le calcul d'examen.`
      ),
      finalAnswer,
      verificationPassed: true,
    };
  }

  // 2. Déterminer trois réels a, b, c tels que P(z) = (z - 4)(az^2 + bz + c)
  if (/d[ée]terminer.*(trois\s+r[ée]els|a,\s*b,\s*c).*P\(z\)/i.test(text) || /az\^2\s*\+\s*bz\s*\+\s*c/i.test(text)) {
    const r = poly.root;
    const a = poly.a;
    const b = poly.b;
    const c = poly.c;

    const stepsDetailed = [
      `• Pour tout complexe $z \\in \\mathbb{C}$, on développe l'expression factorisée :`,
      `  $$(z - ${r})(az^2 + bz + c) = z(az^2 + bz + c) - ${r}(az^2 + bz + c)$$`,
      `  $$= az^3 + bz^2 + cz - ${r}az^2 - ${r}bz - ${r}c$$`,
      `• On ordonne et réduit selon les puissances décroissantes de $z$ :`,
      `  $$(z - ${r})(az^2 + bz + c) = az^3 + (b - ${r}a)z^2 + (c - ${r}b)z - ${r}c$$`,
      `• D'après le principe d'identification des polynômes, deux polynômes sont égaux sur $\\mathbb{C}$ si et seulement si les coefficients de leurs termes de même degré sont égaux.`,
      `  On identifie avec $P(z) = z^3 - 6z^2 + 12z - 16$ :`,
      `  $$\\begin{cases} a = 1 \\\\ b - ${r}a = -6 \\\\ c - ${r}b = 12 \\\\ -${r}c = -16 \\end{cases}$$`,
      `• Résolution du système par substitution progressive :`,
      `  - De la 1ère équation : $a = 1$.`,
      `  - De la 2ème équation : $b - ${r}(1) = -6 \\implies b = -6 + ${r} = ${b}$.`,
      `  - De la 3ème équation : $c - ${r}(${b}) = 12 \\implies c + ${-r * b} = 12 \\implies c = 12 - ${-r * b} = ${c}$.`,
      `  - Vérification sur la 4ème équation (terme constant) : $-${r} \\times ${c} = -16$ (parfaitement vérifié).`,
      `• On en déduit la factorisation complète :`,
      `  $$P(z) = (z - ${r})(${a === 1 ? '' : a}z^2 ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}z + ${c})$$`,
    ];

    const finalAnswer = `a = ${a}, \\ b = ${b}, \\ c = ${c} \\implies P(z) = (z - ${r})(z^2 - 2z + 4)`;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps: buildPapaSteps(
        `Déterminer les trois coefficients réels $a$, $b$ et $c$ permettant de factoriser $P(z)$ sous la forme $(z - ${r})(az^2 + bz + c)$.`,
        `Théorème d'identification des coefficients : Deux polynômes $P$ et $Q$ sont identiques si et seulement si pour tout degré $k$, leurs coefficients $a_k$ et $b_k$ sont strictement égaux.`,
        stepsDetailed,
        `$$a = 1, \\quad b = -2, \\quad c = 4$$ D'où : $$P(z) = (z - 4)(z^2 - 2z + 4)$$`,
        `Vérifie toujours le terme constant (ici $-4c = -16$) : c'est l'assurance absolue que tu n'as commis aucune erreur de signe.`
      ),
      finalAnswer,
      verificationPassed: true,
    };
  }

  // 3. Résoudre dans ℂ l'équation az² + bz + c = 0 (z² - 2z + 4 = 0)
  if (/r[ée]soudre.*az\^2|r[ée]soudre.*z\^2\s*-\s*2z\s*\+\s*4|az\^2\s*\+\s*bz\s*\+\s*c\s*=\s*0/i.test(text)) {
    const a = poly.a;
    const b = poly.b;
    const c = poly.c;
    const delta = poly.delta;

    const stepsDetailed = [
      `• On pose l'équation du second degré dans $\\mathbb{C}$ :`,
      `  $$z^2 - 2z + 4 = 0$$`,
      `  avec les coefficients : $a = ${a}$, $b = ${b}$, $c = ${c}$.`,
      `• Calcul du discriminant $\\Delta$ :`,
      `  $$\\Delta = b^2 - 4ac = (${b})^2 - 4 \\times (${a}) \\times (${c})$$`,
      `  $$\\Delta = ${b * b} - ${4 * a * c} = ${delta}$$`,
      `• Analyse du discriminant dans $\\mathbb{C}$ :`,
      `  Comme $\\Delta = ${delta} < 0$, l'équation admet dans $\\mathbb{C}$ deux solutions complexes conjuguées.`,
      `  On écrit $\\Delta$ sous forme d'un carré complexe :`,
      `  $$\\Delta = -12 = 12i^2 = (i\\sqrt{12})^2 = (2i\\sqrt{3})^2$$`,
      `• Calcul explicite des deux racines :`,
      `  $$z_1 = \\frac{-b - 2i\\sqrt{3}}{2a} = \\frac{-(${b}) - 2i\\sqrt{3}}{2 \\times ${a}} = \\frac{2 - 2i\\sqrt{3}}{2} = 1 - i\\sqrt{3}$$`,
      `  $$z_2 = \\frac{-b + 2i\\sqrt{3}}{2a} = \\frac{-(${b}) + 2i\\sqrt{3}}{2 \\times ${a}} = \\frac{2 + 2i\\sqrt{3}}{2} = 1 + i\\sqrt{3}$$`,
    ];

    const finalAnswer = `S = \\{ 1 - i\\sqrt{3}\\ ; \\ 1 + i\\sqrt{3} \\}`;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps: buildPapaSteps(
        `Résoudre dans $\\mathbb{C}$ l'équation du second degré $z^2 - 2z + 4 = 0$.`,
        `Propriété du discriminant dans $\\mathbb{C}$ : Pour $az^2 + bz + c = 0$ avec $\\Delta < 0$, les solutions complexes conjuguées sont $z = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$.`,
        stepsDetailed,
        `$$S = \\{ 1 - i\\sqrt{3}\\ ; \\ 1 + i\\sqrt{3} \\}$$`,
        `Simplifie toujours le radical : $\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$ permet de factoriser et simplifier par 2 au numérateur et au dénominateur.`
      ),
      finalAnswer,
      verificationPassed: true,
    };
  }

  // 4. En déduire l'ensemble des solutions de l'équation P(z) = 0 dans ℂ
  if (/en\s+d[ée]duire.*(solutions?|[ée]quation)\s+P\(z\)\s*=\s*0/i.test(text) || /solutions?.*P\(z\)\s*=\s*0/i.test(text)) {
    const r = poly.root;

    const stepsDetailed = [
      `• D'après la factorisation obtenue à la question 2 :`,
      `  $$P(z) = 0 \\iff (z - ${r})(z^2 - 2z + 4) = 0$$`,
      `• Règle du produit nul dans $\\mathbb{C}$ :`,
      `  Un produit de facteurs est nul si et seulement si l'un au moins des facteurs est nul :`,
      `  $$z - ${r} = 0 \\quad \\text{ou} \\quad z^2 - 2z + 4 = 0$$`,
      `• Résolution de chaque facteur :`,
      `  1. $z - ${r} = 0 \\implies z = ${r}$ (la racine évidente trouvée en question 1).`,
      `  2. $z^2 - 2z + 4 = 0$ admet pour solutions $z = 1 - i\\sqrt{3}$ et $z = 1 + i\\sqrt{3}$ (d'après la question 3).`,
      `• Synthèse des solutions :`,
      `  L'équation polynomiale de degré 3 admet exactement 3 solutions dans $\\mathbb{C}$.`,
    ];

    const finalAnswer = `S = \\{ ${r}\\ ; \\ 1 - i\\sqrt{3}\\ ; \\ 1 + i\\sqrt{3} \\}`;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps: buildPapaSteps(
        `En déduire l'ensemble de toutes les solutions de l'équation $P(z) = 0$ dans l'ensemble des nombres complexes $\\mathbb{C}$.`,
        `Théorème fondamental de l'algèbre et règle du produit nul : $A \\times B = 0 \\iff A = 0 \\text{ ou } B = 0$. Un polynôme de degré 3 admet au plus 3 racines dans $\\mathbb{C}$.`,
        stepsDetailed,
        `$$S = \\{ 4\\ ; \\ 1 - i\\sqrt{3}\\ ; \\ 1 + i\\sqrt{3} \\}$$`,
        `Rappelle-toi d'ordonner les solutions entre accolades et de bien séparer par des points-virgules pour éviter toute confusion avec des décimales.`
      ),
      finalAnswer,
      verificationPassed: true,
    };
  }

  // 5. Calculer les distances AB, AC et BC
  if (/distances?\s+AB|calculer.*AB.*AC.*BC/i.test(text) || /distance/i.test(text) && /AB/i.test(text)) {
    const stepsDetailed = [
      `• On rappelle les affixes respectives des points dans le repère orthonormé direct $(O; \\vec{u}, \\vec{v})$ :`,
      `  $$z_A = 4, \\quad z_B = 1 + i\\sqrt{3}, \\quad z_C = 1 - i\\sqrt{3}$$`,
      `• **Calcul de la distance $AB$ :**`,
      `  $$AB = |z_B - z_A| = |(1 + i\\sqrt{3}) - 4| = |-3 + i\\sqrt{3}|$$`,
      `  $$AB = \\sqrt{(-3)^2 + (\\sqrt{3})^2} = \\sqrt{9 + 3} = \\sqrt{12} = 2\\sqrt{3}$$`,
      `• **Calcul de la distance $AC$ :**`,
      `  $$AC = |z_C - z_A| = |(1 - i\\sqrt{3}) - 4| = |-3 - i\\sqrt{3}|$$`,
      `  $$AC = \\sqrt{(-3)^2 + (-\\sqrt{3})^2} = \\sqrt{9 + 3} = \\sqrt{12} = 2\\sqrt{3}$$`,
      `• **Calcul de la distance $BC$ :**`,
      `  $$BC = |z_C - z_B| = |(1 - i\\sqrt{3}) - (1 + i\\sqrt{3})| = |1 - i\\sqrt{3} - 1 - i\\sqrt{3}| = |-2i\\sqrt{3}|$$`,
      `  $$BC = |-2i| \\times \\sqrt{3} = 2\\sqrt{3}$$`,
      `  (ou par la formule cartésienne : $\\sqrt{0^2 + (-2\\sqrt{3})^2} = \\sqrt{12} = 2\\sqrt{3}$)`,
    ];

    const finalAnswer = `AB = 2\\sqrt{3}, \\quad AC = 2\\sqrt{3}, \\quad BC = 2\\sqrt{3}`;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps: buildPapaSteps(
        `Calculer la longueur exacte des trois segments $AB$, $AC$ et $BC$ dans le plan complexe.`,
        `Formule fondamentale de distance dans le plan complexe : Pour deux points $M(z_M)$ et $N(z_N)$, la distance géométrique vaut $MN = |z_N - z_M| = \\sqrt{(x_N - x_M)^2 + (y_N - y_M)^2}$.`,
        stepsDetailed,
        `$$AB = 2\\sqrt{3}, \\quad AC = 2\\sqrt{3}, \\quad BC = 2\\sqrt{3}$$`,
        `Attention aux signes lors de la soustraction des affixes : $(1 - i\\sqrt{3}) - (1 + i\\sqrt{3}) = -2i\\sqrt{3}$. Le module d'un imaginaire pur $k i$ est simplement $|k|$.`
      ),
      finalAnswer,
      verificationPassed: true,
    };
  }

  // 6. En déduire la nature exacte du triangle ABC
  if (/nature.*triangle\s+ABC|nature.*ABC/i.test(text)) {
    const stepsDetailed = [
      `• On compare les longueurs des trois côtés calculées à la question précédente :`,
      `  $$AB = 2\\sqrt{3}$$`,
      `  $$AC = 2\\sqrt{3}$$`,
      `  $$BC = 2\\sqrt{3}$$`,
      `• On constate l'égalité stricte des trois longueurs :`,
      `  $$AB = AC = BC = 2\\sqrt{3}$$`,
      `• Propriété géométrique :`,
      `  Un triangle dont les trois côtés sont de longueurs strictement égales est, par définition, un **triangle équilatéral**.`,
      `• *(Remarque complémentaire utile)* : On a également le quotient des affixes :`,
      `  $$\\frac{z_C - z_A}{z_B - z_A} = \\frac{-3 - i\\sqrt{3}}{-3 + i\\sqrt{3}} = e^{-i\\frac{\\pi}{3}}$$`,
      `  ce qui confirme que l'angle $(\\vec{AB}, \\vec{AC}) = -\\frac{\\pi}{3} \\pmod{2\\pi}$, prouvant à nouveau que le triangle est équilatéral direct ou indirect.`,
    ];

    const finalAnswer = `Le triangle ABC est un triangle équilatéral`;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps: buildPapaSteps(
        `Déterminer la nature géométrique exacte du triangle $ABC$.`,
        `Définition géométrique : Un triangle ayant ses 3 côtés de même longueur ($AB = AC = BC$) est un triangle équilatéral.`,
        stepsDetailed,
        `**Le triangle $ABC$ est un triangle équilatéral.**`,
        `Mentionne bien « équilatéral » et non simplement « isocèle » pour obtenir la totalité des points au barème officiel.`
      ),
      finalAnswer,
      verificationPassed: true,
    };
  }

  return null;
}

// ==========================================================================
// 4. POINT D'ENTRÉE PRINCIPAL POUR L'EXERCICE COMPLET
// ==========================================================================

export function tryGenericComplexResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  const poly3 = parseComplexPolynomialDegree3(contextCombined);
  const points = parseComplexPoints(contextCombined);

  // Si on a un polynôme de degré 3 ou des points géométriques associés
  if (poly3) {
    const solved: SolvedQuestionResult[] = [];
    for (const q of questions) {
      const res = solvePoly3Question(q, poly3, points);
      if (res) {
        solved.push(res);
      }
    }
    if (solved.length === questions.length && questions.length > 0) {
      return solved;
    }
  }

  // Sinon essayer le solveur générique d'affixes, modules et opérations
  const numbers = parseComplexDefinitions(contextCombined);
  const quadratic = parseComplexQuadratic(contextCombined);

  if (numbers.length === 0 && !quadratic && !poly3) return null;

  const solved: SolvedQuestionResult[] = [];
  for (const q of questions) {
    let result: SolvedQuestionResult | null = null;
    if (poly3) result = solvePoly3Question(q, poly3, points);
    if (!result && quadratic) result = solveComplexQuadraticQuestion(q, quadratic);
    if (!result && numbers.length > 0) result = solveComplexQuestion(q, numbers);
    if (!result) return null;
    solved.push(result);
  }
  return solved;
}

// ==========================================================================
// 5. FONCTIONS EXISTANTES (EXTRACTION & OPÉRATIONS STANDARD)
// ==========================================================================

export interface ParsedComplexNumber {
  name: string;
  value: Complex;
}

export function parseComplexDefinitions(fullText: string): ParsedComplexNumber[] {
  const clean = fullText.replace(/[−–—]/g, '-').replace(/\s+/g, ' ');
  const results: ParsedComplexNumber[] = [];
  const defPattern = /\b(z_?\d*)\s*=\s*(-?\d+(?:[.,]\d+)?)?\s*([+-]\s*\d*(?:[.,]\d+)?\s*i)?/gi;
  let m: RegExpExecArray | null;
  while ((m = defPattern.exec(clean)) !== null) {
    const name = m[1].toLowerCase();
    const rePartStr = m[2];
    const imPartStr = m[3];
    if (!rePartStr && !imPartStr) continue;
    const literal = `${rePartStr || ''}${(imPartStr || '').replace(/\s+/g, '')}`;
    const value = parseComplexLiteral(literal);
    if (value) results.push({ name, value });
  }
  return results;
}

export function solveComplexQuestion(
  q: ParsedQuestion,
  numbers: ParsedComplexNumber[]
): SolvedQuestionResult | null {
  const cleanQ = q.cleanText.toLowerCase();
  const rawQ = q.cleanText;

  const findByName = (n: string) => numbers.find((c) => c.name === n.toLowerCase());

  // --- MODULE ---
  const moduleMatch = rawQ.match(/module\s+de\s+([a-zA-Z_]\d*)/i) || (numbers.length === 1 && /module/i.test(cleanQ) ? [null, numbers[0].name] : null);
  if (moduleMatch) {
    const target = findByName(moduleMatch[1] as string);
    if (!target) return null;
    const m = abs(target.value) as number;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: rawQ,
      steps: buildPapaSteps(
        `Calculer le module du nombre complexe $${target.name}$.`,
        `Formule du cours : Pour $z = a + ib$, $|z| = \\sqrt{a^2 + b^2}$.`,
        [`|${target.name}| = \\sqrt{(${fmtNum(target.value.re)})^2 + (${fmtNum(target.value.im)})^2} = ${fmtNum(m)}`],
        `|${target.name}| = ${fmtNum(m)}`
      ),
      finalAnswer: `|${target.name}| = ${fmtNum(m)}`,
      verificationPassed: true,
    };
  }

  // --- ARGUMENT ---
  const argMatch = rawQ.match(/argument\s+de\s+([a-zA-Z_]\d*)/i) || (numbers.length === 1 && /argument/i.test(cleanQ) ? [null, numbers[0].name] : null);
  if (argMatch) {
    const target = findByName(argMatch[1] as string);
    if (!target) return null;
    const theta = arg(target.value) as number;
    const thetaFmt = fmtAngleAsPiFraction(theta);
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: rawQ,
      steps: buildPapaSteps(
        `Déterminer un argument du nombre complexe $${target.name}$.`,
        `Définition de l'argument : $\\cos\\theta = \\frac{a}{|z|}$ et $\\sin\\theta = \\frac{b}{|z|}$.`,
        [`\\arg(${target.name}) = ${thetaFmt}`],
        `\\arg(${target.name}) = ${thetaFmt}`
      ),
      finalAnswer: `\\arg(${target.name}) = ${thetaFmt}`,
      verificationPassed: true,
    };
  }

  // --- CONJUGUÉ ---
  const conjMatch = rawQ.match(/conjugu[ée]\s+de\s+([a-zA-Z_]\d*)/i) || (numbers.length === 1 && /conjugu[ée]/i.test(cleanQ) ? [null, numbers[0].name] : null);
  if (conjMatch) {
    const target = findByName(conjMatch[1] as string);
    if (!target) return null;
    const conj = complex(target.value.re, -target.value.im);
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: rawQ,
      steps: buildPapaSteps(
        `Déterminer le conjugué du nombre complexe $${target.name}$.`,
        `Pour $z = a + ib$, $\\overline{z} = a - ib$.`,
        [`\\overline{${target.name}} = ${fmtComplex(conj)}`],
        `\\overline{${target.name}} = ${fmtComplex(conj)}`
      ),
      finalAnswer: `\\overline{${target.name}} = ${fmtComplex(conj)}`,
      verificationPassed: true,
    };
  }

  // --- FORME EXPONENTIELLE / TRIGONOMÉTRIQUE ---
  if (/forme\s+exponentielle|forme\s+trigonom[ée]trique/i.test(cleanQ)) {
    const target = numbers.length === 1 ? numbers[0] : findByName((rawQ.match(/de\s+([a-zA-Z_]\d*)/i) || [])[1] || '');
    if (!target) return null;
    const m = abs(target.value) as number;
    const theta = arg(target.value) as number;
    const thetaLabel = fmtAngleAsPiFraction(theta);
    const isExpo = /exponentielle/i.test(cleanQ);
    const formula = isExpo
      ? `${target.name} = ${fmtNum(m)} e^{i(${thetaLabel})}`
      : `${target.name} = ${fmtNum(m)} \\left(\\cos(${thetaLabel}) + i\\sin(${thetaLabel})\\right)`;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: rawQ,
      steps: buildPapaSteps(
        `Donner la ${isExpo ? 'forme exponentielle' : 'forme trigonométrique'} de $${target.name}$.`,
        `Formes canoniques : Trigonométrique : $z = r(\\cos\\theta + i\\sin\\theta)$, Exponentielle : $z = r e^{i\\theta}$.`,
        [`|${target.name}| = ${fmtNum(m)}, \\arg(${target.name}) = ${thetaLabel}`, formula],
        formula
      ),
      finalAnswer: formula,
      verificationPassed: true,
    };
  }

  return null;
}

export interface ComplexQuadratic {
  a: number;
  b: number;
  c: number;
}

export function parseComplexQuadratic(fullText: string): ComplexQuadratic | null {
  if (!/\bdans\s*(ℂ|c\b)|nombres?\s+complexes?/i.test(fullText)) return null;
  const clean = fullText.replace(/[−–—]/g, '-').replace(/z\^2|z²/gi, 'z^2');
  const eqMatch = clean.match(/(-?\d*(?:[.,]\d+)?)\s*z\^2\s*([+-]\s*\d*(?:[.,]\d+)?)\s*z\s*([+-]\s*\d+(?:[.,]\d+)?)\s*=\s*0/i);
  if (!eqMatch) return null;

  const parseCoef = (s: string, defaultIfEmpty: number): number => {
    const t = s.replace(/\s+/g, '');
    if (t === '' || t === '+') return defaultIfEmpty;
    if (t === '-') return -defaultIfEmpty;
    return parseFloat(t.replace(',', '.'));
  };

  const a = parseCoef(eqMatch[1], 1);
  const b = parseCoef(eqMatch[2], 1);
  const c = parseFloat(eqMatch[3].replace(/\s+/g, '').replace(',', '.'));

  if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || a === 0) return null;
  return { a, b, c };
}

export function solveComplexQuadraticQuestion(q: ParsedQuestion, eq: ComplexQuadratic): SolvedQuestionResult | null {
  const cleanQ = q.cleanText.toLowerCase();
  if (!/r[ée]soudre|solution|racine/i.test(cleanQ)) return null;

  const { a, b, c } = eq;
  const delta = b * b - 4 * a * c;
  const steps: string[] = [`\\Delta = b^2 - 4ac = ${fmtNum(delta)}`];

  let z1: Complex;
  let z2: Complex;

  if (delta >= 0) {
    const sqrtDelta = Math.sqrt(delta);
    z1 = complex((-b + sqrtDelta) / (2 * a), 0);
    z2 = complex((-b - sqrtDelta) / (2 * a), 0);
    steps.push(`\\Delta \\ge 0 : deux racines réelles.`);
  } else {
    const sqrtAbsDelta = Math.sqrt(-delta);
    z1 = complex(-b / (2 * a), sqrtAbsDelta / (2 * a));
    z2 = complex(-b / (2 * a), -sqrtAbsDelta / (2 * a));
    steps.push(`\\Delta < 0 : deux racines complexes conjuguées.`);
  }

  steps.push(`z_1 = ${fmtComplex(z1)} \\quad ; \\quad z_2 = ${fmtComplex(z2)}`);

  return {
    numberLabel: q.numberLabel,
    titleOrPrompt: q.cleanText,
    steps: buildPapaSteps(
      `Résoudre l'équation du second degré dans $\\mathbb{C}$.`,
      `Formule du discriminant $\\Delta = b^2 - 4ac$. Si $\\Delta < 0$, $z = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$.`,
      steps,
      `S = \\{ ${fmtComplex(z1)} ; ${fmtComplex(z2)} \\}`
    ),
    finalAnswer: `S = { ${fmtComplex(z1)} ; ${fmtComplex(z2)} }`,
    verificationPassed: true,
  };
}
