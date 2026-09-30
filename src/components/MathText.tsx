import React, { useMemo } from 'react';
import katex from 'katex';
import { convertNaturalOrPseudoMathToLatex, formatExponents, formatChemicalNotations, formatMathSymbols, containsMathOrScience } from '../utils/mathFormatter';
import { ensureNumberedTitlesBold } from '../utils/textFormatter';

/**
 * MathText — Rendu mathématique et scientifique universel (KaTeX).
 *
 * Rendu garanti :
 * - Fractions empilées exactes : \frac{3}{x}, \frac{a}{b}, \frac{v_{n+1}}{v_n}, (3x+1)/(x-2)
 * - Suites et relations : (u_n), v_{n+1} = 2 \times v_n, v_n = 3 \times 2^n, u_0 = 5
 * - Sommes & Séries : \sum_{k=1}^n, \sum_{i=0}^{\infty}
 * - Puissances & Exposants : 5^2, x^n, 2^n, q^n, e^x, 10^{-3}, x², x³
 * - Formules en bloc : $$ f(x) = ... $$ ou \[ ... \]
 * - Formules en ligne : $ ... $ ou \( ... \)
 * - Analyse & Limites : \lim_{x \to 0}, \int_a^b f(x)dx, f'(x)
 * - Chimie & constantes : Ka = [A⁻][H₃O⁺]/[AH], pH = -log[H₃O⁺], Ec = 1/2 m v²
 */

interface MathTextProps {
  text: string;
  className?: string;
}

// Nettoie et prépare une expression mathématique pour KaTeX
export function cleanMathForKaTeX(expr: string): string {
  if (!expr) return '';
  let clean = expr.trim().normalize('NFC');

  // 1. Retirer d'éventuels délimiteurs redondants
  while (
    (clean.startsWith('$$') && clean.endsWith('$$') && clean.length >= 4) ||
    (clean.startsWith('\\[') && clean.endsWith('\\]') && clean.length >= 4) ||
    (clean.startsWith('$') && clean.endsWith('$') && clean.length >= 2) ||
    (clean.startsWith('\\(') && clean.endsWith('\\)') && clean.length >= 4)
  ) {
    if (clean.startsWith('$$') && clean.endsWith('$$')) {
      clean = clean.slice(2, -2).trim();
    } else if (clean.startsWith('\\[') && clean.endsWith('\\]')) {
      clean = clean.slice(2, -2).trim();
    } else if (clean.startsWith('\\(') && clean.endsWith('\\)')) {
      clean = clean.slice(2, -2).trim();
    } else if (clean.startsWith('$') && clean.endsWith('$')) {
      clean = clean.slice(1, -1).trim();
    }
  }

  // Nettoyer d'éventuels délimiteurs internes orphelins \( ou \)
  clean = clean.replace(/\\([()])/g, '$1');

  // 2. Normalisation des caractères de contrôle et caractères non imprimables (ASCII 0x00-0x08, 0x0B, 0x0C)
  clean = clean.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, ' ');
  // Normaliser les antislashs multiples devant les commandes LaTeX (ex: \\\\frac -> \\frac)
  clean = clean.replace(/\\\\([a-zA-Z]+)/g, '\\$1');
  // Réparer \frac si écrit sans antislash ou avec rac{
  clean = clean.replace(/\brac\{/g, '\\frac{');

  // 3. Règle académique : nettoyer d'abord les artefacts Markdown et répétitions de symboles
  clean = clean.replace(/\*\*([^*]+)\*\*/g, '$1');
  clean = clean.replace(/\*{2,}/g, '');
  clean = clean.replace(/(?:×\s*){2,}/g, '');
  clean = clean.replace(/[×xX]{3,}/g, '');

  // Remplacer UNIQUEMENT les astérisques '*' et '∗' ou symboles '×' dans les contextes réels de multiplication
  clean = clean.replace(/([0-9a-zA-Z\)\}\]])\s*[\*∗]\s*([0-9a-zA-Z\(\{\\])/g, '$1 \\times $2');
  clean = clean.replace(/(\d+)\s*×\s*(\d+)/g, '$1 \\times $2');
  clean = clean.replace(/(?<!\\)\*/g, '');

  // 4. Arrangements & Combinaisons (A42 -> A_4^2, C42 -> \binom{4}{2}, A102 -> A_{10}^2)
  clean = clean.replace(/\bA(\d{1,2})(\d{1,2})\b/g, 'A_{$1}^{$2}');
  clean = clean.replace(/\bC(\d{1,2})(\d{1,2})\b/g, '\\binom{$1}{$2}');
  clean = clean.replace(/\bA_(\d+)\^(\d+)\b/g, 'A_{$1}^{$2}');
  clean = clean.replace(/\bC_(\d+)\^(\d+)\b/g, '\\binom{$1}{$2}');

  // 4.b Dérivées et symboles prime (ex: f^{`′`}(1), f^{′}(1), f^{`'}(1) -> f'(1))
  clean = clean.replace(/([a-zA-Z])\^\{[`'′\s]*\\?prime[`'′\s]*\}/g, "$1'");
  clean = clean.replace(/([a-zA-Z])\^\{[`'′\s]+\}/g, "$1'");
  clean = clean.replace(/([a-zA-Z])\^\{[`'′]+[`'′]+\}/g, "$1''");
  clean = clean.replace(/([a-zA-Z])[`'′]+/g, (m, letter) => `${letter}${m.slice(1).replace(/[`'′]/g, "'")}`);

  // 5. Correction des confusions OCR fréquentes sur l'indice zéro (v_o -> v_0, u_o -> u_0, w_o -> w_0)
  clean = clean.replace(/\b([uvwUVW])_[oO]\b/g, '$1_0');
  clean = clean.replace(/\b([uvwUVW])[oO]\s*=\s*/g, '$1_0 = ');

  // 5.b Intervalles ouverts français avec crochets inversés (ex: ]0;+\infty[ -> \left]0;+\infty\right[ ou ]0;+\infty[)
  clean = clean.replace(/\\\]/g, ']').replace(/\\\[/g, '[');

  // 6. Convertir systématiquement les notations naturelles/pseudo-LaTeX (fractions, limites, exposants, infinis)
  clean = convertNaturalOrPseudoMathToLatex(clean);

  // 7. Normalisation des symboles scientifiques (Physique, Chimie, SVT, Statistiques)
  clean = clean
    .replace(/°C\b|℃/g, '{^\\circ}\\text{C}')
    .replace(/\\vec\s*([a-zA-Z])\b/g, '\\vec{$1}')
    .replace(/\bvec\(([a-zA-Z0-9]+)\)/g, '\\vec{$1}')
    .replace(/\b([uvwFfaPpgEBr])_ext\b/gi, '$1_{\\text{ext}}')
    .replace(/\bDelta\s*Ec\b|\b\\Delta\s*Ec\b/gi, '\\Delta E_c')
    .replace(/\bDelta\s*Ep\b|\b\\Delta\s*Ep\b/gi, '\\Delta E_p')
    .replace(/\bDelta\s*Em\b|\b\\Delta\s*Em\b/gi, '\\Delta E_m')
    .replace(/\bEc\b(?![a-zA-Z])/g, 'E_c')
    .replace(/\bEp\b(?![a-zA-Z])/g, 'E_p')
    .replace(/\bEm\b(?![a-zA-Z])/g, 'E_m')
    .replace(/\bEe\b(?![a-zA-Z])/g, 'E_e')
    .replace(/\bu_C\b/g, 'u_C')
    .replace(/\bu_L\b/g, 'u_L')
    .replace(/\bu_R\b/g, 'u_R')
    .replace(/\bi_C\b/g, 'i_C')
    .replace(/\bxmax\b|\bx_max\b/gi, 'x_{\\max}')
    .replace(/\bxeq\b|\bx_eq\b/gi, 'x_{\\text{éq}}')
    .replace(/\bpH\b/g, '\\text{pH}')
    .replace(/\bpKa\b/g, '\\text{pK}_a')
    .replace(/\bKa\b/g, 'K_a')
    .replace(/\bKe\b/g, 'K_e')
    .replace(/\bV_E\b|\bV_e\b|\bVE\b/g, 'V_E')
    .replace(/\bV_AE\b|\bVAE\b/g, 'V_{AE}')
    .replace(/\bV_BE\b|\bVBE\b/g, 'V_{BE}')
    .replace(/\b\[H3O\+\]|\b\[H3O\^\+\]/g, '[\\text{H}_3\\text{O}^+]')
    .replace(/\b\[HO\-\]|\b\[HO\^\-\]|\b\[OH\-\]/g, '[\\text{HO}^-]')
    .replace(/\b\[A\-\]|\b\[A\^\-\]/g, '[\\text{A}^-]')
    .replace(/\b\[AH\]/g, '[\\text{AH}]')
    .replace(/\b\[B\]/g, '[\\text{B}]')
    .replace(/\b\[BH\+\]|\b\[BH\^\+\]/g, '[\\text{BH}^+]')
    .replace(/\bH3O\+/g, '\\text{H}_3\\text{O}^+')
    .replace(/\bHO\-/g, '\\text{HO}^-')
    .replace(/\bSO4\^?2\-/g, '\\text{SO}_4^{2-}')
    .replace(/\bCO3\^?2\-/g, '\\text{CO}_3^{2-}')
    .replace(/\bPO4\^?3\-/g, '\\text{PO}_4^{3-}')
    .replace(/\bNO3\-/g, '\\text{NO}_3^-')
    .replace(/\bNH4\+/g, '\\text{NH}_4^+')
    .replace(/\bFe2\+/g, '\\text{Fe}^{2+}')
    .replace(/\bFe3\+/g, '\\text{Fe}^{3+}')
    .replace(/\bCu2\+/g, '\\text{Cu}^{2+}')
    .replace(/\bZn2\+/g, '\\text{Zn}^{2+}')
    .replace(/\bAl3\+/g, '\\text{Al}^{3+}')
    .replace(/\bCa2\+/g, '\\text{Ca}^{2+}')
    .replace(/\bMg2\+/g, '\\text{Mg}^{2+}')
    .replace(/\bCl\-/g, '\\text{Cl}^-')
    .replace(/\bAg\+/g, '\\text{Ag}^+')
    .replace(/\bNa\+/g, '\\text{Na}^+')
    .replace(/\bK\+/g, '\\text{K}^+')
    .replace(/\bH2O\b/g, '\\text{H}_2\\text{O}')
    .replace(/\bCO2\b/g, '\\text{CO}_2')
    .replace(/\bO2\b/g, '\\text{O}_2')
    .replace(/\bN2\b/g, '\\text{N}_2')
    .replace(/\bH2\b/g, '\\text{H}_2')
    .replace(/\bC6H12O6\b/g, '\\text{C}_6\\text{H}_{12}\\text{O}_6')
    // Biologie & SVT (photosynthèse, respiration, biochimie, pédologie, génétique)
    .replace(/\bADP\b/g, '\\text{ADP}')
    .replace(/\bATP\b/g, '\\text{ATP}')
    .replace(/\bPi\b/g, '\\text{P}_i')
    .replace(/\bTH2\b/g, '\\text{TH}_2')
    .replace(/\bT\s*[\+⁺]\b/g, '\\text{T}^+')
    .replace(/\bNADPH,H\s*[\+⁺]?\b/g, '\\text{NADPH,H}^+')
    .replace(/\bCAH\-Ca\s*2\s*[\+⁺]\b|\bCAH\-Ca²⁺\b/g, '\\text{CAH-Ca}^{2+}')
    .replace(/\bCAH\-2H\s*[\+⁺]\b|\bCAH\-2H⁺\b/g, '\\text{CAH-2H}^+')
    .replace(/\bCAH\-2K\s*[\+⁺]\b|\bCAH\-2K⁺\b/g, '\\text{CAH-2K}^+')
    .replace(/\bCAH\b/g, '\\text{CAH}')
    .replace(/\[Micelle d\x27Argile\][\-⁻]?/gi, '[\\text{Micelle d\x27Argile}]^-')
    .replace(/\[Micelle d\x27Humus\][\-⁻]?/gi, '[\\text{Micelle d\x27Humus}]^-')
    .replace(/\b(Énergie|energie)\b/gi, '\\text{Énergie}')
    .replace(/\bGamètes\b/gi, '\\text{Gamètes}')
    .replace(/\bacides racinaires\b/gi, '\\text{acides racinaires}')
    .replace(/\blibéré\b/gi, '\\text{libéré}')
    .replace(/\bsolution\b/gi, '\\text{solution}')
    .replace(/\b([A-Za-z])\/\/([A-Za-z])\b/g, '\\text{$1//$2}')
    .replace(/---/g, ' \\text{ --- } ')
    // 7.b Physique & Chimie : Lettres grecques et constantes fondamentales
    .replace(/\b(alpha|beta|gamma|delta|epsilon|theta|lambda|mu|nu|xi|pi|rho|sigma|tau|phi|omega)\b(?![A-Za-z])/g, '\\$1')
    .replace(/\b(Delta|Gamma|Theta|Lambda|Sigma|Phi|Omega)\b(?![A-Za-z])/g, '\\$1')
    .replace(/\\?(sin|cos|tan|ln|log|exp)\b(?![A-Za-z])/gi, (m, fn) => `\\${fn.toLowerCase()}`)
    .replace(/\b(T0|v0|x0|y0|z0|t0|N0|i0|u0)\b/g, (m) => `${m[0]}_0`)
    .replace(/\b(n1|n2|i1|i2|v1|v2|t1|t2)\b/g, (m) => `${m[0]}_${m[1]}`)
    .replace(/\b(VP|VS|tP|tS)\b/g, (m) => `${m[0]}_${m[1]}`)
    .replace(/\b(FC|VES|PA)\b/g, '\\text{$1}')
    .replace(/\b(F1|F2|P1|P2)\b/g, (m) => `${m[0]}_${m[1]}`)
    // Multiplications x entre symboles ou parenthèses
    .replace(/([0-9a-zA-Z\)\}\]])\s+[xX]\s+([0-9a-zA-Z\(\{\\])/g, '$1 \\times $2')
    // Unités physiques courantes
    .replace(/\b(mol\/L|mol\.L[-⁻]?1)\b/g, '\\text{ mol/L}')
    .replace(/\b(g\/mol|g\.mol[-⁻]?1)\b/g, '\\text{ g/mol}')
    .replace(/\b(g\/L|g\.L[-⁻]?1)\b/g, '\\text{ g/L}')
    .replace(/\b(m\/s|m\.s[-⁻]?1)\b/g, '\\text{ m/s}')
    .replace(/\b(m\.s[-⁻]?2)\b/g, '\\text{ m/s}^2')
    .replace(/\b(km\/h)\b/g, '\\text{ km/h}')
    // Génétique et génotypes SVT
    .replace(/\b([A-Za-z\+]{1,3})\/\/([A-Za-z\+]{1,3})\b/g, '\\text{$1//$2}')
    .replace(/\b(X\^?[A-Za-z\+]*)\/\/(X\^?[A-Za-z\+]*|Y)\b/g, '\\text{$1//$2}')
    // Flèches chimiques bidirectionnelles et directes
    .replace(/(?:<=>|<->|⇄|⇌|\\rightleftharpoons)/g, ' \\rightleftharpoons ')
    .replace(/(?:->|-->|→|➔|\\longrightarrow)/g, ' \\to ')
    // Électrons et ions chimiques isolés
    .replace(/(\b\d*)\s*H\+/g, '$1\\text{H}^+')
    .replace(/(\b\d*)\s*e\-/g, '$1e^-')
    // Statistiques
    .replace(/\bx_bar\b|\bxbar\b|x̄/gi, '\\bar{x}')
    .replace(/\by_bar\b|\bybar\b|ȳ/gi, '\\bar{y}')
    .replace(/\bCov\(([a-zA-Z]),\s*([a-zA-Z])\)/gi, '\\text{Cov}($1, $2)')
    .replace(/\bV\(([a-zA-Z])\)/g, 'V($1)')
    .replace(/\bsigma_([a-zA-Z0-9]+)/g, '\\sigma_{$1}')
    .replace(/\b\+?infinity\b|\+inf\b|\+infini\b/gi, '+\\infty')
    .replace(/\b-infinity\b|-inf\b|-infini\b/gi, '-\\infty')
    .replace(/\binfinity\b|\binfini\b/gi, '\\infty')
    .replace(/∞/g, '\\infty')
    .replace(/➔|→/g, '\\to ')
    .replace(/ÞÑ/g, '\\to ')
    .replace(/\b([a-zA-Z])\s+in\s+([NRZQCR])\b/g, '$1 \\in \\mathbb{$2}')
    .replace(/∈\s*ℕ|\\in\s*N\b/g, '\\in \\mathbb{N}')
    .replace(/∈\s*ℝ|\\in\s*R\b/g, '\\in \\mathbb{R}')
    .replace(/∈\s*ℤ|\\in\s*Z\b/g, '\\in \\mathbb{Z}')
    .replace(/∈\s*ℚ|\\in\s*Q\b/g, '\\in \\mathbb{Q}')
    .replace(/∈\s*ℂ|\\in\s*C\b/g, '\\in \\mathbb{C}')
    .replace(/ℕ/g, '\\mathbb{N}')
    .replace(/ℝ/g, '\\mathbb{R}')
    .replace(/ℤ/g, '\\mathbb{Z}')
    .replace(/ℚ/g, '\\mathbb{Q}')
    .replace(/ℂ/g, '\\mathbb{C}');

  // 7. Formatage de la virgule décimale française dans les nombres mathématiques (ex: 24,25 -> 24{,}25 ; 333,33 -> 333{,}33)
  clean = clean.replace(/(\d+),(\d+)/g, '$1{,}$2');

  // 8. Réparer les fractions mal formées ou cassées (ex: \frac{a}{b^}{2} -> \frac{a}{b^2})
  clean = clean.replace(/\\frac\{([^{}]+)\}\{([a-zA-Z0-9_\+\-]+)\^\}\{(\d+)\}/g, '\\frac{$1}{$2^{$3}}');
  clean = clean.replace(/\^\{\}\{(\d+)\}/g, '^{$1}');

  // 9. Normalisation des exposants simples dans KaTeX (ex: 2^n, q^n, 10^-3)
  clean = clean.replace(/\^([a-zA-Z0-9\+\-]+)/g, '^{$1}');

  // 10. Nettoyage des imbrications \text{\text{...}}
  clean = clean.replace(/\\text\{\s*\\text\{([^}]+)\}\s*\}/g, '\\text{$1}');

  // 10.b Normaliser les mots français de SVT (ex: Énergie, lumière) pour KaTeX
  clean = clean.replace(/\b([ÉEéè]nergie|lumi[eèé]re|chaleur|chlorophylle)\b/gi, '\\text{$1}');

  // 10.c Retirer un éventuel deux-points résiduel au début de la formule
  clean = clean.replace(/^:\s*/, '');

  // 10.d Normaliser les connecteurs logiques français 'et' / 'ou' isolés entre formules vers \quad \text{et} \quad
  clean = clean.replace(/(?<=[0-9a-zA-Z\}\)\^_\s])\s+\bet\b\s+(?=[0-9a-zA-Z\\\(])/g, ' \\quad \\text{et} \\quad ');
  clean = clean.replace(/(?<=[0-9a-zA-Z\}\)\^_\s])\s+\bou\b\s+(?=[0-9a-zA-Z\\\(])/g, ' \\quad \\text{ou} \\quad ');

  return clean;
}

/**
 * Équilibre les accolades '{' / '}' d'une expression LaTeX.
 *
 * Les moteurs IA (ou l'OCR de l'énoncé source) génèrent parfois une accolade
 * fermante en trop ou en moins, ex: "u_{n+1}} = \frac{2}{3}u_n" (une '}' de
 * trop après l'indice). KaTeX refuse alors la formule entière et, comme
 * throwOnError est à false, il ne lève pas d'exception : il renvoie un
 * <span class="katex-error"> qui affiche le LaTeX brut en rouge — exactement
 * le symptôme observé ("suites écrites pas normalement, en rouge").
 *
 * On répare donc l'équilibre des accolades avant le rendu : toute '}' qui
 * n'a pas de '{' ouvrante correspondante est retirée, et toute '{' restée
 * ouverte en fin de chaîne est refermée automatiquement.
 */
export function balanceBraces(expr: string): string {
  if (!expr) return expr;
  let depth = 0;
  let result = '';
  for (let i = 0; i < expr.length; i++) {
    const ch = expr[i];
    if (ch === '\\' && (expr[i + 1] === '{' || expr[i + 1] === '}')) {
      // Accolade échappée \{ ou \} : littérale, ne compte pas dans l'équilibrage.
      result += ch + expr[i + 1];
      i++;
      continue;
    }
    if (ch === '{') {
      depth++;
      result += ch;
    } else if (ch === '}') {
      if (depth === 0) {
        // Accolade fermante surnuméraire : on l'ignore silencieusement.
        continue;
      }
      depth--;
      result += ch;
    } else {
      result += ch;
    }
  }
  // Referme les accolades restées ouvertes.
  if (depth > 0) {
    result += '}'.repeat(depth);
  }
  return result;
}

// Convertit une expression mathématique en HTML KaTeX sécurisé
export function renderKaTeX(expr: string, displayMode: boolean): string {
  let clean = cleanMathForKaTeX(expr);
  if (!clean) return '';
  clean = balanceBraces(clean);

  // Répare les sorties IA qui mélangent LaTeX et texte dans une même formule.
  // KaTeX peut sinon afficher un .katex-error rouge contenant le LaTeX brut.
  const repairForKaTeX = (value: string): string => {
    let repaired = value
      .replace(/\\\\([A-Za-z]+)/g, '\\$1')
      .replace(/\\quad\b/g, '\\;')
      .replace(/\\qquad\b/g, '\\;\\;')
      .replace(/\\enspace\b/g, '\\;')
      .replace(/\\thinspace\b/g, '\\,')
      .replace(/\\times\b/g, '\\times ')
      .replace(/\\cdot\b/g, '\\cdot ')
      .replace(/\\leq\b/g, '\\leq ')
      .replace(/\\geq\b/g, '\\geq ')
      .replace(/\\neq\b/g, '\\neq ')
      .replace(/\\infty\b/g, '\\infty')
      .replace(/\\to\b/g, '\\to ')
      // Commandes Unicode parfois générées comme du pseudo-LaTeX.
      .replace(/\\mathbb\s*\{([NRZQC])\}/g, '\\mathbb{$1}')
      .replace(/\\vec\s*\{([^{}]+)\}/g, '\\vec{$1}')
      .replace(/\\text\s*\{([^{}]*)\}/g, '\\text{$1}')
      // Évite les exposants nus invalides du type x^ ou b^ suivi d'un espace.
      .replace(/\^\s+(?=[A-Za-z0-9])/g, '^')
      .trim();
    return repaired;
  };

  clean = repairForKaTeX(clean);

  // Rendu de secours en typographie scientifique lisible (jamais le LaTeX
  // brut en rouge de KaTeX), utilisé chaque fois que KaTeX ne parvient pas
  // à produire une formule propre — que ce soit via une exception ou via un
  // <span class="katex-error"> renvoyé silencieusement (throwOnError: false).
  const gracefulFallback = (): string => {
    // Nettoyer les commandes de syntaxe LaTeX pour ne jamais laisser de balises brutes
    let readable = clean
      .replace(/\\left\s*([(\[{|])/g, '$1')
      .replace(/\\right\s*([)\]}|])/g, '$1')
      .replace(/\\left\./g, '')
      .replace(/\\right\./g, '')
      .replace(/\\text\{([^}]+)\}/g, '$1')
      .replace(/\\mathrm\{([^}]+)\}/g, '$1')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
      .replace(/\\cdot/g, '·')
      .replace(/\\times/g, '×')
      .replace(/\\quad|\\qquad|\\;|\\,|\\!/g, ' ')
      .replace(/\\/g, '');
    const formatted = formatExponents(formatChemicalNotations(formatMathSymbols(readable)));
    return `<span class="katex-fallback font-serif italic font-medium text-slate-900 dark:text-slate-100">${formatted}</span>`;
  };

  try {
    const html = katex.renderToString(clean, {
      displayMode,
      throwOnError: false,
      output: 'htmlAndMathml',
      strict: false,
      trust: true,
    });

    // Avec throwOnError=false, KaTeX peut signaler une erreur sans lancer
    // d'exception. Dans ce cas, ne montrons jamais le LaTeX rouge brut :
    // retentons une version réparée puis utilisons une vraie typographie de secours.
    if (html.includes('katex-error')) {
      const retry = balanceBraces(repairForKaTeX(formatMathSymbols(clean)));
      const retryHtml = katex.renderToString(retry, {
        displayMode,
        throwOnError: false,
        output: 'htmlAndMathml',
        strict: false,
        trust: true,
      });
      if (!retryHtml.includes('katex-error')) return retryHtml;
      // Les deux tentatives ont échoué : ne jamais renvoyer le span
      // katex-error (LaTeX brut en rouge) à l'utilisateur.
      return gracefulFallback();
    }

    return html;
  } catch {
    // Fallback gracieux en typographie scientifique lisible.
    return gracefulFallback();
  }
}

interface Segment {
  type: 'text' | 'inline-math' | 'block-math';
  content: string;
}

/**
 * Trouve l'index de fermeture d'une accolade '{' équilibrée avec support des imbrications.
 */
function findMatchingBrace(str: string, openIndex: number): number {
  let depth = 0;
  for (let i = openIndex; i < str.length; i++) {
    if (str[i] === '{') {
      depth++;
    } else if (str[i] === '}') {
      depth--;
      if (depth === 0) {
        return i;
      }
    }
  }
  return -1;
}

/**
 * Détecte les mots ordinaires du français narratif pour empêcher qu'une phrase
 * entière soit engloutie par erreur dans une formule KaTeX sans espaces.
 */
export function hasNarrativeFrenchWords(str: string): boolean {
  if (!str) return false;
  // Retirer les balises LaTeX de texte (\text{...}, \mathrm{...}) et les commandes LaTeX (\frac, \infty, etc.)
  const stripped = str
    .replace(/\\(?:text|mathrm|mathbf|mathsf|mathtt)\{[^}]*\}/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ');
  return /\b(est|sont|sur|dans|de|du|des|donne|donnent|fournit|aboutit|devient|obtenu|obtenue|croissante|décroissante|strictement|continue|dérivable|positive|négative|converge|diverge|pour tout|lorsque|sachant que|on a|on constate|alors que|donc on|par conséquent|en déduire|démontrer|montrer|calculer|déterminer|conclusion)\b/i.test(stripped);
}

/**
 * Vérifie si une chaîne ressemble à une formule pure (sans phrase narrative en français).
 */
export function isPureFormula(str: string): boolean {
  let trimmed = str.trim();
  if (!trimmed) return false;

  // Lignes de citation Markdown '>', titres '#' ou contenant du Markdown gras '**' ne sont jamais des formules pures
  if (/^[>#]/.test(trimmed) || trimmed.includes('**')) {
    return false;
  }

  // Enlever la puce initiale éventuelle
  trimmed = trimmed.replace(/^[•▸➔➜→►\-*]\s*/, '').trim();

  // Retirer les balises LaTeX \text{...} et toutes les commandes LaTeX \command pour l'analyse lexicale
  const withoutLatexText = trimmed.replace(/\\(?:text|mathrm|mathbf|mathsf|mathtt)\{[^}]*\}/g, ' ');
  const withoutLatexCommands = withoutLatexText.replace(/\\[a-zA-Z]+/g, ' ');

  // Si elle contient des mots narratifs français, ce n'est PAS une formule pure
  if (hasNarrativeFrenchWords(withoutLatexCommands)) {
    return false;
  }

  // Si elle contient des mots de liaison / d'exercice typiques (français, anglais, allemand, espagnol), c'est du texte narratif
  if (/\b(Calculer|Démontrer|Montrer|Déterminer|En déduire|Soit\s+[a-zA-Z]|Pour tout|Lorsque|On a|Sachant que|Exercice|Question|Partie|Étude|tableau|variation|tangente|asymptote|branche|consigne|relation|récurrence|premier terme|raison|somme|quotient|différence|constante|suite|arithmétique|géométrique|answer|question|true|false|because|social|media|teenager|people|text|explain|sentence|phrase|selon|d'après|justification|citation|croissante|décroissante|strictement|continue|dérivable|convergente|divergente)\b/i.test(withoutLatexCommands)) {
    return false;
  }

  // Règle générale : si la chaîne contient un mot ordinaire de 2 lettres ou plus séparé par des espaces qui n'est pas mathématique,
  // ce n'est PAS une formule pure, c'est du texte narratif (ex: "sur", "dans", "est", "de", "et", "ou", etc.) !
  const nonMathWords = (withoutLatexCommands.match(/\b[a-zA-ZÀ-ÿ]{2,}\b/g) || []).filter(
    (w) => !/^(sin|cos|tan|cot|ln|log|exp|lim|max|min|sup|inf|gcd|lcm|det|dim|ker|deg|arg|pka|ph|div|sum|int|cov|var|vec|frac|sqrt|adp|atp|nadph|nadp|cah|co2|h2o|energie|[eéèÉÈ]nergie|[eéèÉÈ]nergies|lumi[eèé]re|chaleur|chlorophylle|glucose|maltose|amidon|micelle|argile|humus|gametes|gamete|solution|libere|libéré|racinaires|acides|ext|eff|cdot|times|quad|qquad|binom|pi|mu|nu|xi|dx|dy|dt|dr|dz|df|dg|dh|re|im|pk|ka|ke|kb|ph|ov|ec|ep|em|ui|ac|ab|bc|cd|da|om|oa|ob|oc|am|bm|cm|mm|km|mg|kg|hz|pa|mol|so|no|co|na|cl|fe|al|cu|zn|ag|au|ba|ca|mg|ii|iv|vi|ix|bpm|hpa|rad|fc|ves|cal|kcal)$/i.test(w)
  );
  if (nonMathWords.length >= 1) {
    return false;
  }

  // Équation mathématique, limite, fraction, dérivée ou calcul explicite, flèches de réaction
  const hasMathStructure = /[=<>≤≥≠≈∈∉⊂⊆∪∩\+−×÷\/\^±∞√∫∑⇄⟶⇌]|\b(lim|limite|frac|sqrt|vec|ln|exp|sin|cos|tan)\b|\\(frac|dfrac|tfrac|sqrt|lim|int|sum|prod|vec|text|mathrm|mathbf|mathbb|left|right|binom|pi|infty|times|cdot|quad|qquad|cup|cap|leq|geq|neq|approx|pm|alpha|beta|gamma|theta|lambda|mu|rho|tau|omega|Omega)|(?:->|-->|→|➔|<=>|<->|⇄|⇌|---|--\[|\\to|\\rightleftharpoons)|\b([A-Za-z]{1,2}\/\/[A-Za-z]{1,2})\b|\b\d+\/\d+\s*\[[A-Za-z\+]{1,3}\]|\[CAH\]|\bCAH-[0-9a-zA-Z\+²⁺]+/i.test(trimmed);
  const isAllowedFormulaChars = /^[a-zA-Z0-9_\(\)\^\+\−\-\*\/\=\s\.,\\\{\}\[\]·'≤≥≠±∞√∫∑➔→;:<>|!~%\u2070-\u209F\u00B2\u00B3\u00B9\u2080-\u2089éèàêëîïôöûüùçÉÈÀÊËÎÏÔÖÛÜÙÇ]+$/.test(trimmed);

  return hasMathStructure && isAllowedFormulaChars;
}

/**
 * Découpe un segment de texte brut pour y détecter et extraire
 * les expressions mathématiques non délimitées par $...$
 * (ex: "v_n = 3 \times 2^n", "v_{n+1} = 2 \times v_n", "(v_n)", "q^n", "x^2", "u_0 = 5", "A_4^2 = 12")
 */
export function extractImplicitMathFromText(text: string): Segment[] {
  if (!text) return [];

  // Patterns d'expressions mathématiques et scientifiques à reconnaître dans le texte courant :
  // 1. Fractions \frac{...}{...} ou formes cassées
  // 2. Dénombrement : A42, A_4^2, C42, C_n^p, \binom{n}{p}
  // 3. Équations complètes en Maths, Physique, Chimie, SVT, Statistiques
  // 4. Vecteurs : \vec{F}, \vec{a}, \vec{v}, \vec{P}, \vec{g}, \vec{u}, \vec{OM}, \vec{AB}
  // 5. Espèces chimiques & pH : H3O+, HO-, SO4^2-, Fe2+, [H3O+], pH = 3,4, pKa = 4,8, n = m/M
  // 6. Statistiques & Probabilités : G(x̄, ȳ), Cov(X,Y), V(X), r = 0,98, y = ax + b, P(X=k)
  // 7. Génétique : 3/4 [A] + 1/4 [a], p + q = 1, p^2 + 2pq + q^2 = 1, croisement F1 x F1, génotype A//a
  // 8. Puissances, suites, indices, unités (m.s-2, mol.L-1, °C, kg, N, J, W, Pa, Hz, Ω)
  // 9. Intervalles mathématiques : [0 ; 1], ]0 ; +\infty[, ]-\infty ; 2]
  // RÈGLE CRITIQUE : Ne JAMAIS inclure \b[uU]n\b isolé dans mathRegex car en français "un" est l'article indéfini.
  // Les suites (un) ne sont reconnues que : entre parenthèses (un), avec indice composé un+1, avec égalité un = ..., ou après "suite un".
  const mathRegex = /(?:\\frac\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}|\b\\vec\{[^{}]+\}|\b(?:A|C)\d{2}\b|\b[AC]_\d+\^\d+|\b\\binom\{\d+\}\{\d+\}|(?:\b\d*\s*[A-Z][a-zA-Z0-9_\(\)\[\]\^⁺⁻\+\-éèÉ]*(?:\s*[\+]\s*\d*\s*[A-Z][a-zA-Z0-9_\(\)\[\]\^⁺⁻\+\-éèÉ]*)*\s*(?:->|-->|→|➔|<=>|<->|⇄|⇌|\\to|\\rightleftharpoons|\\longrightarrow)\s*[^.,;!?\n\r()]{2,100})|\[CAH\]\s*[^.,;!?\n\r()]{2,60}|\bCAH-[0-9a-zA-Z\+²⁺]+\b|\[Micelle d['’][A-Za-z\s]+\][\-⁻]?|\b\d+\/\d+\s*\[[A-Za-z\+]{1,3}\](?:\s*[\+]\s*\d+\/\d+\s*\[[A-Za-z\+]{1,3}\])*\b|\[[A-Za-z\+]{1,3}\]\s*[×xX]\s*\[[A-Za-z\+]{1,3}\]|\b[A-Za-z]{1,2}\/\/[A-Za-z]{1,2}\b|\bX\^[A-Za-z]\/\/(?:X\^[A-Za-z]|Y)\b|\bF1\s*[×xX]\s*(?:F1|P[12])\b|\bP1\s*[×xX]\s*P2\b|\bp\s*\+\s*q\s*=\s*1\b|\bp[\^²2]+\s*\+\s*2\s*pq\s*\+\s*q[\^²2]+\s*=\s*1\b|\bf\([A-Za-z]{1,2}\)\s*=\s*[^.,;!?\n\r()]{1,40}|\b(?:pH|pKa|Ka|Ke)\s*=\s*[^.,;!?\n\r()]{1,60}|\[\s*H_?3O\^?\+?\s*\]\s*=\s*[^.,;!?\n\r()]{1,40}|\b(?:Cov|V|E)\([A-Z](?:,\s*[A-Z])?\)\s*=\s*[-+]?\d+(?:[.,]\d+)?|\br\s*=\s*[-+]?\d+(?:[.,]\d+)?|\b[S]\s*=\s*[^.,;!?\n\r()]{1,60}|\b[N]\s*=\s*\d+\s*[-+]\s*\d+\s*[-+]\s*\d+\s*=\s*\d+|\b[uvwUVW]_(?:\{[^{}]+\}|[0-9a-zA-Z]+)\s*(?:[=<>≤≥≠\+\-]|\\times|\\cdot|\*)\s*[^.,;!?\n\r()]{1,60}|\b[uvwUVW]n[+\-]\d+\s*(?:[=<>≤≥≠\+\-]|\\times|\\cdot|\*)\s*[^.,;!?\n\r()]{1,60}|\b(?:[vwVW][0-9n]|[uU]\d{1,2})\s*(?:[=<>≤≥≠\+\-]|\\times|\\cdot|\*)\s*[^.,;!?\n\r()]{1,60}|\b[uU]n\s*(?:[=<>≤≥≠]|\\times|\\cdot|\*)\s*[^.,;!?\n\r()]{1,60}|\([uvwUVW]_[0-9a-zA-Z{}]+\)|\([uvwUVW][0-9a-zA-Z]\)|\b[uvwUVW]_(?:\{[^{}]+\}|[0-9a-zA-Z]+)\b|\b[uvwUVW]\d{1,2}\b|\b[vwVW]n\b|\b[uvwUVW]n[+\-]\d+\b|\b(?:suites?|termes?)\s+[uU]n\b|\b[qQ]\d+\s*=\s*\d+|\b[qQ]\^\d+\s*=\s*\d+|\b[23456789]n\s*[><=≤≥≠]\s*[-+]?\d+(?:[.,]\d+)?|\b\d+\s*=\s*\d+\s*,\s*\d+\s*=\s*\d+|\b\d+\s*[+\-]\s*\d+n\s*[><=≤≥]\s*\d+|\b\d+n\s*[><=≤≥]\s*\d+|\bn\s*[><=≤≥]\s*[-+]?\d+(?:[.,]\d+)?|\bn\s*=\s*\d+|\b[a-zA-Z0-9\)]\^(?:\{[^{}]+\}|[0-9a-zA-Z\+\-]+)\b|[a-zA-Z0-9\(\)][²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿⁱˣ]+|\b(?:[a-zA-Z]\s*=\s*[-+]?\d+(?:[.,]\d+)?|[a-zA-Z]\s*[<>≤≥]\s*[-+]?\d+(?:[.,]\d+)?)\b|\b(?:sin|cos|tan)\([a-zA-Z0-9_]+\)\s*\/\s*[a-zA-Z0-9_]+\s*=\s*(?:sin|cos|tan)\([a-zA-Z0-9_]+\)\s*\/\s*[a-zA-Z0-9_]+|\b(?:v\s*=\s*d\s*\/\s*t|Ec\s*=\s*1\/2\s*m\s*v\^2|E_c\s*=\s*1\/2\s*m\s*v\^2|Ep\s*=\s*m\s*g\s*z|Em\s*=\s*Ec\s*\+\s*Ep|U\s*=\s*R\s*[×\*·xX]?\s*I|P\s*=\s*U\s*[×\*·xX]?\s*I|q\s*=\s*C\s*u_?C|i\s*=\s*C\s*du_?C\/dt|tau\s*=\s*RC|tau\s*=\s*L\/R|W\s*=\s*F\s*[×\*·xX]?\s*d|T_?0\s*=\s*2\s*pi\s*sqrt\([a-zA-Z0-9_]+\)|lambda\s*=\s*[a-zA-Z0-9_]+\s*\/\s*[a-zA-Z0-9_]+|n1\s*sin\(i1\)\s*=\s*n2\s*sin\(i2\)|n\s*=\s*m\s*\/\s*M|C\s*=\s*n\s*\/\s*V|Cm\s*=\s*m\s*\/\s*V|V_?[PS]\s*=\s*d\s*\/\s*t_?[PS]|VP\s*=\s*d\s*\/\s*tP|VS\s*=\s*d\s*\/\s*tS|Q\s*=\s*FC\s*[×\*·xX]?\s*VES|v\s*=\s*\(?1\/V\)?\s*[×\*·xX]?\s*dx\/dt)\b|\bΔ[a-zA-Z]\s*=\s*[^.,;!?\n\r()]{1,60}|\\(?:times|cdot|pm|mp|le|ge|neq|approx|infty|alpha|beta|Delta|theta|lambda|pi|mu|rho|tau|omega|Omega|vec|binom)\b|[\[\]]\s*[-+]?(?:\d+(?:[.,]\d+)?|\\\\?infty|∞)\s*[;,]\s*[-+]?(?:\d+(?:[.,]\d+)?|\\\\?infty|∞)\s*[\[\]])/g;

  const result: Segment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = mathRegex.exec(text)) !== null) {
    const matchStart = match.index;
    let matchText = match[0];

    // Ajouter le texte précédent s'il existe
    if (matchStart > lastIndex) {
      const prevText = text.substring(lastIndex, matchStart);
      result.push({ type: 'text', content: prevText });
    }

    let preText = '';
    let postText = '';

    // Si le match commence par "suite un" ou "terme un", on conserve "suite " dans le texte
    const suiteMatch = matchText.match(/^((?:suites?|termes?)\s+)([uU]n)$/i);
    if (suiteMatch) {
      preText = suiteMatch[1];
      matchText = `${suiteMatch[2].charAt(0).toLowerCase()}_n`;
    }

    // Si la formule englobe une conjonction ou mot de liaison narratif (ex: "u0 = 2 et"), on le détache
    const trailingStop = matchText.match(/^(.*?)(\s+(?:et|ou|où|si|alors|donc|car|avec|pour|dans|sur|qui|que|quand|est|sont|soit|or|d'où|puisque|comme)\b.*)$/i);
    if (trailingStop && trailingStop[1].trim().length > 0) {
      matchText = trailingStop[1];
      postText = trailingStop[2] + postText;
    }

    // Détacher la ponctuation finale (. , ; : !) pour qu'elle ne soit pas incluse dans la formule
    const trailingPunct = matchText.match(/^(.*?)([.,;:!?]+)$/);
    if (trailingPunct && trailingPunct[1].trim().length > 0) {
      matchText = trailingPunct[1];
      postText = trailingPunct[2] + postText;
    }

    if (preText) {
      result.push({ type: 'text', content: preText });
    }

    result.push({ type: 'inline-math', content: matchText });

    if (postText) {
      result.push({ type: 'text', content: postText });
    }

    lastIndex = matchStart + match[0].length;
  }

  // Ajouter le reste du texte
  if (lastIndex < text.length) {
    result.push({ type: 'text', content: text.substring(lastIndex) });
  }

  return result;
}

/**
 * Découpe une chaîne en segments de texte ordinaire et de formules mathématiques LaTeX.
 */
/**
 * Les moteurs de résolution peuvent parfois renvoyer du LaTeX "nu" au milieu
 * d'une phrase (sans $...$ / \\(...\\)). Exemple :
 * "Calculons : g\\geq\\frac{...}{...}."
 *
 * Avant le parsing, on isole ces portions mathématiques. Cela évite que KaTeX
 * reçoive seulement une commande isolée et que le reste de la formule apparaisse
 * en texte brut.
 */
export function wrapBareLatexInText(raw: string): string {
  if (!raw) return raw;

  // Les générateurs de corrigés peuvent produire du LaTeX sans délimiteurs :
  //   "u_{n+1} = \\frac{2}{3} \\times u_n"
  //   "Pour tout n \\in \\mathbb{N}, on a u_{n+1} = ..."
  // Il ne faut surtout pas dépendre d'un simple regex qui s'arrête au premier
  // espace : une formule peut contenir plusieurs commandes et plusieurs groupes {}.
  const latexCommand = /\\(?:frac|dfrac|tfrac|sqrt|root|binom|vec|mathbb|mathcal|mathrm|mathbf|mathsf|mathtt|text|operatorname|overline|underline|bar|overset|underset|boxed|cancel|lim|sum|prod|int|infty|to|rightleftharpoons|leq?|geq?|neq|approx|equiv|pm|mp|times|cdot|div|Delta|alpha|beta|gamma|delta|epsilon|varepsilon|theta|lambda|mu|rho|sigma|tau|phi|varphi|omega|Omega|pi|in|notin|subseteq?|supseteq?|left|right|quad|qquad|cup|cap)(?![A-Za-z])/;
  const mathAnchor = /(?:\\(?:frac|dfrac|tfrac|sqrt|vec|binom|mathbb)\b|(?:\b|[ΔΩα-ωΑ-Ω])(?:[A-Za-zÀ-ÿ0-9_ΔΩα-ωΑ-Ω]+(?:\([^)]*\))?(?:\{[^}]*\})?|\\vec\{[^}]+\})(?:[′\x27]*)(?:_[{A-Za-z0-9+\-]+)?(?:\^[{A-Za-z0-9+\-]+)?(?:\s*[\/]\s*(?:[A-Za-z0-9_]+(?:\([^)]*\))?(?:\{[^}]*\})?))?\s*(?:=|<|>|≤|≥|≠|≈|->|-->|→|➔|<=>|<->|⇄|⇌|\\to|\\rightleftharpoons))/;
  const scientificPattern = /(?:\\(?:frac|dfrac|tfrac|sqrt|root|binom|vec|mathbb|mathcal|mathrm|mathbf|mathsf|mathtt|text|operatorname|lim|sum|prod|int|infty|to|rightleftharpoons)\b|\b(?:pH|pKa|Ka|Ke)\b|\[\s*H_?3O\^?\+?\s*\]|\b[A-Za-z]{1,2}\/\/[A-Za-z]{1,2}\b|\b\d+\/\d+\s*\[[A-Za-z\+]{1,3}\]|\b[FP][12]\s*[×xX]\s*[FP][12]\b|\[CAH\]|\bCAH-[0-9a-zA-Z\+²⁺]+|\b(?:Ec|Ep|Em|Ee|E_c|E_p|E_m|W|T_?0|tau|lambda|rho|nu|omega|Omega)\b\s*[=≈<>]|\b\d+(?:[.,]\d+)?\s*(?:mol\/L|mol\.L[-⁻]?1|g\/mol|g\.mol[-⁻]?1|m\/s|m\.s[-⁻]?[12]|km\/h|hPa|rad\/s)\b)/i;

  // Trouve la fin d'une expression LaTeX en respectant les accolades imbriquées.
  const consumeBalanced = (line: string, start: number): number => {
    let depth = 0;
    let seenBrace = false;
    for (let i = start; i < line.length; i++) {
      const ch = line[i];
      if (ch === '{') { depth++; seenBrace = true; }
      else if (ch === '}') { depth = Math.max(0, depth - 1); }

      // Une ponctuation finale hors accolades termine la formule.
      if (seenBrace && depth === 0 && i > start && /[.!?]/.test(ch) && /\s|$/.test(line[i + 1] || '')) {
        return i;
      }
    }
    return line.length;
  };

  return raw.split('\n').map((line) => {
    if (!line || /\$|\\\(|\\\[/.test(line)) return line;
    // Ne jamais altérer les citations '>' ou titres '#' Markdown
    if (/^\s*[>#]/.test(line)) return line;
    if (!latexCommand.test(line) && !mathAnchor.test(line) && !scientificPattern.test(line)) return line;

    // 1) Cas le plus fréquent : une ligne entièrement mathématique.
    // On conserve une éventuelle puce/flèche/numérotation devant la formule.
    const prefixMatch = line.match(/^(\s*(?:[•▸➔➜→►\-*+]+\s*|(?:\d+[.)]\s*))?)/);
    const prefix = prefixMatch?.[0] || '';
    const body = line.slice(prefix.length).trim();

    // Détacher une éventuelle ponctuation finale pour évaluer si la ligne est une formule pure
    let bodyFormula = body;
    let bodyPunct = '';
    const endPunct = body.match(/([.,;:!?]+)$/);
    if (endPunct) {
      bodyPunct = endPunct[1];
      bodyFormula = body.slice(0, -bodyPunct.length).trim();
    }

    // Si tout le corps est déjà une formule mathématique pure
    if (isPureFormula(bodyFormula)) {
      return `${prefix}\\(${bodyFormula}\\)${bodyPunct}`;
    }

    // Si la ligne correspond au format standard "Notion/Loi : Formule ou réaction"
    const colonMatch = body.match(/^([^:\n]{2,80}\s*:\s*)(.+)$/);
    if (colonMatch) {
      const titlePrefix = colonMatch[1];
      let formulaPart = colonMatch[2].trim();
      let commentPart = '';
      let trailingPunct = '';

      const punctMatch = formulaPart.match(/([.,;:!?]+)$/);
      if (punctMatch) {
        trailingPunct = punctMatch[1];
        formulaPart = formulaPart.slice(0, -trailingPunct.length).trim();
      }

      const commentMatch = formulaPart.match(/\s+(\((?:avec|où|en\s+|si\s+|pour\s+|dans\s+|unités?|[a-zA-ZÀ-ÿ\s,']{4,})\))$/i);
      if (commentMatch) {
        commentPart = commentMatch[1];
        formulaPart = formulaPart.slice(0, commentMatch.index).trim();
      }

      if (isPureFormula(formulaPart)) {
        return `${prefix}${titlePrefix}\\(${formulaPart}\\)${commentPart ? ' ' + commentPart : ''}${trailingPunct}`;
      }
    }

    // Détecte une équation/index au milieu d'une phrase
    const anchorMatch = body.match(mathAnchor) || body.match(scientificPattern);
    const eq = anchorMatch && anchorMatch.index !== undefined ? anchorMatch.index : -1;
    const cmd = body.search(latexCommand);
    let start = eq >= 0 ? eq : cmd;
    if (start < 0) return line;

    // Si une commande LaTeX apparaît avant l'équation, elle fait partie de la
    // formule. Pour une phrase comme "Pour tout n ... u_n = ...", on démarre
    // à u_n, pas à \\mathbb{N}.
    if (eq >= 0 && cmd >= 0 && cmd < eq) {
      const commandOnlyContext = body.slice(cmd, eq);
      if (/^\\(?:in|mathbb|mathcal)\b/.test(commandOnlyContext.trim())) {
        start = eq;
      } else {
        start = cmd;
      }
    }

    // Si le premier ancrage est précédé d'opérateurs ou variables mathématiques (ex: "alors 6 - u_n > 0"),
    // remonter jusqu'au début de la formule mathématique en s'arrêtant au dernier mot narratif prose.
    const beforeAnchor = body.slice(0, start);
    const proseWordMatch = beforeAnchor.match(/.*(?:\b([a-zA-ZÀ-ÿ]{2,})\b|\b([aAàÀyY])\b)(?!\s*[_^+\-*/])/);
    if (proseWordMatch && proseWordMatch.index !== undefined) {
      const word = proseWordMatch[1] || proseWordMatch[2];
      const isSequenceVar = /^[uvwUVW]n$/i.test(word) && /^\s*[+\-]\s*\d+/.test(beforeAnchor.slice(proseWordMatch.index + proseWordMatch[0].length));
      if (!/^(sin|cos|tan|cot|ln|log|exp|lim|max|min|sup|inf|gcd|lcm|det|dim|ker|deg|arg|sqrt|vec|adp|atp|nadph|cah|fc|ves|[eéèÉÈ]nergie|lumi[eèé]re)$/i.test(word) && !isSequenceVar) {
        let actualStart = proseWordMatch.index + proseWordMatch[0].length;
        while (actualStart < start && /[\s:]/.test(body[actualStart])) {
          actualStart++;
        }
        start = actualStart;
      }
    } else {
      start = 0;
    }

    const before = body.slice(0, start);
    const formulaStart = start;
    const tail = body.slice(formulaStart);

    // Détection précise de la fin de formule en respectant parenthèses, accolades et crochets
    let depthParen = 0;
    let depthBrace = 0;
    let depthBracket = 0;
    let formulaLen = tail.length;

    for (let i = 0; i < tail.length; i++) {
      const ch = tail[i];
      if (ch === '(') depthParen++;
      else if (ch === ')') depthParen = Math.max(0, depthParen - 1);
      else if (ch === '{') depthBrace++;
      else if (ch === '}') depthBrace = Math.max(0, depthBrace - 1);
      else if (ch === '[') depthBracket++;
      else if (ch === ']') depthBracket = Math.max(0, depthBracket - 1);

      // Au niveau supérieur (hors délimiteurs imbriqués) :
      if (depthParen === 0 && depthBrace === 0 && depthBracket === 0) {
        // Ponctuation séparatrice suivie d'un mot narratif ou majuscule : ', f est' ou '; donc'
        if (i > 0 && /^[,;]\s+[a-zA-ZÀ-ÿ]/i.test(tail.slice(i))) {
          formulaLen = i;
          break;
        }
        // Fin de phrase par point
        if (i > 0 && /^[.!?](?:\s|$)/.test(tail.slice(i))) {
          formulaLen = i;
          break;
        }
        // Mots narratifs de liaison ou français prose
        if (i > 0 && /^\s+(?:et|ou|alors|donc|car|d'où|puisque|soit|or|si|comme|on\s+a|avec|pour|sachant\s+que|est|sont|sur|dans|de|du|des|la|le|les|une|un|qui|que|où|quand|donne|donnent|fournit|aboutit|devient|obtenu|obtenue|croissante|décroissante|strictement|continue|dérivable|positive|négative|admet|vaut|converge|diverge)\b/i.test(tail.slice(i))) {
          formulaLen = i;
          break;
        }
      }
    }

    let end = formulaStart + formulaLen;

    // Exclure un éventuel commentaire narratif entre parenthèses à la fin de la formule
    const parenComment = tail.slice(0, end - formulaStart).match(/\s+(\((?:avec|où|en\s+|si\s+|pour\s+|dans\s+|unités?|[a-zA-ZÀ-ÿ\s,']{4,})\))$/i);
    if (parenComment && parenComment.index !== undefined) {
      end = formulaStart + parenComment.index;
    }

    let candidate = body.slice(formulaStart, end).trim();
    if (!candidate || candidate.length < 2) return line;

    // Nettoyer un éventuel deux-points résiduel au début de candidate
    if (candidate.startsWith(':')) {
      candidate = candidate.replace(/^:\s*/, '').trim();
    }

    // Ne pas englober si le candidat contient des mots narratifs français
    if (hasNarrativeFrenchWords(candidate)) return line;

    // Évite de transformer une simple commande \text{...} en formule lorsqu'elle
    // est utilisée comme morceau de prose. Les équations/fractions/intervalles restent ciblés.
    const clearlyMath = /[=<>≤≥≠≈^_]|\\(?:frac|sqrt|vec|binom|times|cdot|mathbb|lim|sum|int|infty|to|pm|mp|alpha|beta|gamma|Delta|pi|theta|lambda|sigma|omega|Omega)\b|[\[\]]\s*[-+]?(?:\d+(?:[.,]\d+)?|\\\\?infty|∞)\s*[;,]\s*[-+]?(?:\d+(?:[.,]\d+)?|\\\\?infty|∞)\s*[\[\]]|\b[A-Za-z]{1,2}\/\/[A-Za-z]{1,2}\b|\b\d+\/\d+\s*\[[A-Za-z\+]{1,3}\]|\b[FP][12]\s*[×xX]\s*[FP][12]\b|\[CAH\]|\bCAH-[0-9a-zA-Z\+²⁺]+|(?:->|-->|→|➔|<=>|<->|⇄|⇌)/.test(candidate);
    if (!clearlyMath) return line;

    const suffix = body.slice(end);
    const wrappedSuffix = wrapBareLatexInText(suffix);
    return `${prefix}${before}\\(${candidate}\\)${wrappedSuffix}`;
  }).join('\n');
}

export function parseMathSegments(raw: string): Segment[] {
  if (!raw) return [];

  // Prétraitement initial : corriger les sauts de page, doubles antislashs globaux et les confusions o/0 sur indices
  let normalized = wrapBareLatexInText(raw)
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, ' ')
    .replace(/\\\\([a-zA-Z]+)/g, '\\$1')
    .replace(/\b([uvwUVW])_[oO]\b/g, '$1_0')
    .replace(/\b([uvwUVW])[oO]\s*=\s*/g, '$1_0 = ');

  // Nettoyer les intervalles ouverts français échappés avec antislash (ex: \]0;+\infty[\ -> ]0;+\infty[)
  // Attention: On ne touche pas à \[ ... \] si c'est un vrai bloc de formule display math LaTeX
  normalized = normalized.replace(/\\\]\s*([^\\\[\]\n]+)\s*\\\[/g, ']$1[');
  normalized = normalized.replace(/\\\]\s*([^\\\[\]\n]+)\s*\\\]/g, ']$1]');
  normalized = normalized.replace(/\\\[\s*([^\\\[\]\n]+)\s*\\\[/g, '[$1[');
  normalized = normalized.replace(/\\\](?!\s*[a-zA-Z0-9_\+\-\\\{])/g, ']');

  const trimmed = normalized.trim();

  // Si la chaîne est déjà entièrement une formule LaTeX délimitée par $$ ... $$ ou \[ ... \]
  if ((trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length >= 4) ||
      (trimmed.startsWith('\\[') && trimmed.endsWith('\\]') && trimmed.length >= 4)) {
    const unwrap = trimmed.slice(2, -2).trim();
    if (hasNarrativeFrenchWords(unwrap)) {
      return extractImplicitMathFromText(unwrap);
    }
    return [{ type: 'block-math', content: trimmed }];
  }

  // Si la chaîne est entièrement délimitée par $ ... $ ou \( ... \)
  if ((trimmed.startsWith('$') && trimmed.endsWith('$') && trimmed.length >= 2 && !trimmed.slice(1, -1).includes('$')) ||
      (trimmed.startsWith('\\(') && trimmed.endsWith('\\)') && trimmed.length >= 4)) {
    const unwrap = trimmed.slice(trimmed.startsWith('\\(') ? 2 : 1, trimmed.endsWith('\\)') ? -2 : -1).trim();
    if (hasNarrativeFrenchWords(unwrap)) {
      return extractImplicitMathFromText(unwrap);
    }
    return [{ type: 'inline-math', content: unwrap }];
  }

  // Si la chaîne commence par une puce (ex: • lim ... ou • \(...\)) et le reste est une formule
  const bulletMatch = normalized.match(/^([•▸\-*+]\s*)(.+)$/s);
  if (bulletMatch && !bulletMatch[2].includes('\n')) {
    const rawBulletContent = bulletMatch[2].trim();
    if ((rawBulletContent.startsWith('\\(') && rawBulletContent.endsWith('\\)') && rawBulletContent.length >= 4) ||
        (rawBulletContent.startsWith('$') && rawBulletContent.endsWith('$') && rawBulletContent.length >= 2)) {
      const stripped = rawBulletContent.slice(rawBulletContent.startsWith('\\(') ? 2 : 1, rawBulletContent.endsWith('\\)') ? -2 : -1).trim();
      if (hasNarrativeFrenchWords(stripped)) {
        return [
          { type: 'text', content: bulletMatch[1] },
          ...extractImplicitMathFromText(stripped)
        ];
      }
      return [
        { type: 'text', content: bulletMatch[1] },
        { type: 'inline-math', content: stripped }
      ];
    }
    if (isPureFormula(rawBulletContent)) {
      return [
        { type: 'text', content: bulletMatch[1] },
        { type: 'inline-math', content: rawBulletContent }
      ];
    }
  }

  // Si toute la chaîne est une équation mathématique pure sans texte narratif
  if (isPureFormula(trimmed) && !trimmed.includes('\n')) {
    return [{ type: 'inline-math', content: trimmed }];
  }

  // Si la ligne correspond au format standard "Notion/Loi : Formule ou réaction"
  // Ex: "Vitesse de propagation sismique : v = d / t (avec d en km et t en secondes)"
  //     "Équation globale photosynthèse : 6 CO2 + 6 H2O -> C6H12O6 + 6 O2"
  const colonMatch = trimmed.match(/^([•▸\-*]\s*)?([^:\n]{2,80}\s*:\s*)(.+)$/s);
  if (colonMatch && !trimmed.includes('\n') && !/\$|\\\(|\\\[/.test(colonMatch[3])) {
    const prefix = (colonMatch[1] || '') + colonMatch[2];
    let formulaPart = colonMatch[3].trim();
    let commentPart = '';
    let trailingPunct = '';

    const punctMatch = formulaPart.match(/([.,;:!?]+)$/);
    if (punctMatch) {
      trailingPunct = punctMatch[1];
      formulaPart = formulaPart.slice(0, -trailingPunct.length).trim();
    }

    // Détecte une remarque explicative finale entre parenthèses
    const commentMatch = formulaPart.match(/\s+(\((?:avec|où|en\s+|si\s+|pour\s+|dans\s+|unités?|[a-zA-ZÀ-ÿ\s,']{3,})\))$/i);
    if (commentMatch) {
      commentPart = commentMatch[1];
      formulaPart = formulaPart.slice(0, commentMatch.index).trim();
    }

    if (isPureFormula(formulaPart)) {
      const segs: Segment[] = [{ type: 'text', content: prefix }];
      segs.push({ type: 'inline-math', content: formulaPart });
      if (commentPart || trailingPunct) {
        segs.push({ type: 'text', content: (commentPart ? ' ' + commentPart : '') + trailingPunct });
      }
      return segs;
    }
  }

  const primarySegments: Segment[] = [];
  let cursor = 0;
  const len = normalized.length;

  while (cursor < len) {
    // 1. Recherche de $$ ... $$ (bloc math)
    if (normalized.startsWith('$$', cursor)) {
      const endIdx = normalized.indexOf('$$', cursor + 2);
      if (endIdx !== -1) {
        const math = normalized.substring(cursor + 2, endIdx);
        if (hasNarrativeFrenchWords(math)) {
          const subSegs = extractImplicitMathFromText(math);
          primarySegments.push(...subSegs);
        } else {
          primarySegments.push({ type: 'block-math', content: math });
        }
        cursor = endIdx + 2;
        continue;
      }
    }

    // 2. Recherche de \[ ... \] (bloc math)
    if (normalized.startsWith('\\[', cursor)) {
      const endIdx = normalized.indexOf('\\]', cursor + 2);
      if (endIdx !== -1) {
        const math = normalized.substring(cursor + 2, endIdx);
        if (hasNarrativeFrenchWords(math)) {
          const subSegs = extractImplicitMathFromText(math);
          primarySegments.push(...subSegs);
        } else {
          primarySegments.push({ type: 'block-math', content: math });
        }
        cursor = endIdx + 2;
        continue;
      }
    }

    // 3. Recherche de $ ... $ (inline math explicite)
    if (normalized[cursor] === '$' && (cursor === 0 || normalized[cursor - 1] !== '\\')) {
      const nextDollar = normalized.indexOf('$', cursor + 1);
      if (nextDollar !== -1 && !normalized.substring(cursor + 1, nextDollar).includes('\n')) {
        const math = normalized.substring(cursor + 1, nextDollar);
        if (hasNarrativeFrenchWords(math)) {
          const subSegs = extractImplicitMathFromText(math);
          primarySegments.push(...subSegs);
        } else {
          primarySegments.push({ type: 'inline-math', content: math });
        }
        cursor = nextDollar + 1;
        continue;
      }
    }

    // 4. Recherche de \( ... \) (inline math explicite)
    if (normalized.startsWith('\\(', cursor)) {
      const endIdx = normalized.indexOf('\\)', cursor + 2);
      if (endIdx !== -1) {
        const math = normalized.substring(cursor + 2, endIdx);
        if (hasNarrativeFrenchWords(math)) {
          const subSegs = extractImplicitMathFromText(math);
          primarySegments.push(...subSegs);
        } else {
          primarySegments.push({ type: 'inline-math', content: math });
        }
        cursor = endIdx + 2;
        continue;
      }
    }

    // 5. Recherche de commandes LaTeX équilibrées (\frac, \sqrt, \lim, \int, \sum, etc.)
    if (normalized[cursor] === '\\') {
      // Commandes à un ou deux arguments entre accolades. Cette branche est importante
      // lorsque le moteur renvoie du LaTeX nu hors de $...$: \frac{...}{...}, \vec{F},
      // \text{et}, \mathbb{N}, \binom{n}{p}, etc. doivent rester une seule formule.
      const bracedCommand = normalized.substring(cursor).match(/^\\(frac|dfrac|tfrac|binom|text|textbf|textit|textrm|mathrm|mathbf|mathbb|mathcal|mathsf|mathtt|operatorname|vec|bar|overline|underline|overbrace|underbrace|overset|underset|boxed|cancel)\b/);
      if (bracedCommand) {
        let pos = cursor + bracedCommand[0].length;
        while (/\s/.test(normalized[pos] || '')) pos++;
        const firstOpen = normalized.indexOf('{', pos);
        if (firstOpen === pos) {
          const firstClose = findMatchingBrace(normalized, firstOpen);
          if (firstClose !== -1) {
            let end = firstClose + 1;
            // Fractions and binomials have a second mandatory argument.
            if (/^(?:frac|dfrac|tfrac|binom)$/.test(bracedCommand[1])) {
              let secondPos = end;
              while (/\s/.test(normalized[secondPos] || '')) secondPos++;
              if (normalized[secondPos] === '{') {
                const secondClose = findMatchingBrace(normalized, secondPos);
                if (secondClose !== -1) end = secondClose + 1;
              }
            }
            primarySegments.push({ type: 'inline-math', content: normalized.substring(cursor, end) });
            cursor = end;
            continue;
          }
        }
      }

      // \sqrt[opt]{arg} ou \sqrt{arg}
      if (normalized.startsWith('\\sqrt', cursor)) {
        let argStart = cursor + 5;
        if (normalized[argStart] === '[') {
          const optClose = normalized.indexOf(']', argStart);
          if (optClose !== -1) argStart = optClose + 1;
        }
        const braceOpen = normalized.indexOf('{', argStart);
        if (braceOpen !== -1 && /^\s*$/.test(normalized.substring(argStart, braceOpen))) {
          const braceClose = findMatchingBrace(normalized, braceOpen);
          if (braceClose !== -1) {
            const fullSqrt = normalized.substring(cursor, braceClose + 1);
            primarySegments.push({ type: 'inline-math', content: fullSqrt });
            cursor = braceClose + 1;
            continue;
          }
        }
      }

      // 4.b Blocs délimités \left ... \right (ex: \left(\frac{1}{2}\right)^n)
      if (normalized.startsWith('\\left', cursor)) {
        const rightIdx = normalized.indexOf('\\right', cursor + 5);
        if (rightIdx !== -1) {
          let end = rightIdx + 6;
          while (/\s/.test(normalized[end] || '')) end++;
          // Délimiteur fermant après \right : ), ], \}, |, .
          if (end < normalized.length) {
            if (normalized[end] === '\\' && (normalized[end + 1] === '}' || normalized[end + 1] === '{')) {
              end += 2;
            } else if (/[)\]}|.]/.test(normalized[end])) {
              end += 1;
            }
          }
          // Exposant ou indice suivant immédiatement : ^n, ^{n+1}, _k
          while (/\s/.test(normalized[end] || '')) end++;
          if (normalized[end] === '^' || normalized[end] === '_') {
            end++;
            if (normalized[end] === '{') {
              const bEnd = findMatchingBrace(normalized, end);
              if (bEnd !== -1) end = bEnd + 1;
            } else if (/[0-9a-zA-Z]/.test(normalized[end] || '')) {
              end++;
            }
          }
          const leftBlock = normalized.substring(cursor, end);
          primarySegments.push({ type: 'inline-math', content: leftBlock });
          cursor = end;
          continue;
        }
      }

      // \lim_{...}, \int_{...}^{...}, \sum_{...}^{...}
      if (/^\\(lim|int|sum|prod|bigcup|bigcap)\b/.test(normalized.substring(cursor))) {
        const macroMatch = normalized.substring(cursor).match(/^\\(lim|int|sum|prod|bigcup|bigcap)(?:_\{[^{}]*\}|\^[^{}]*|_[a-zA-Z0-9=\\+\-]+|\^[a-zA-Z0-9\\+\-]+)*(?:\s*[a-zA-Z0-9\(\)\{\}\^_\\\,]+)?/);
        if (macroMatch) {
          primarySegments.push({ type: 'inline-math', content: macroMatch[0] });
          cursor += macroMatch[0].length;
          continue;
        }
      }

      // Symboles LaTeX simples : \infty, \alpha, \beta, \Delta, \pi, \le, \ge, \neq, \times, \pm, etc.
      const symMatch = normalized.substring(cursor).match(/^\\(infty|pm|mp|times|div|le|leq|ge|geq|neq|approx|equiv|rightleftharpoons|longrightarrow|leftrightarrow|Longleftrightarrow|subset|subseteq|supset|supseteq|cap|cup|emptyset|forall|exists|iff|implies|in|notin|alpha|beta|gamma|delta|epsilon|varepsilon|theta|lambda|mu|rho|sigma|tau|phi|varphi|omega|Omega|pi|ln|log|exp|sin|cos|tan|quad|qquad|;|:|!|text|mathrm|mathbf|mathbb|mathcal|mathsf|mathtt|operatorname|dfrac|tfrac|binom|bar|overline|underline|overbrace|underbrace|overset|underset|boxed|cancel|prime|circ|degree|cdots|ldots|dots|displaystyle|textstyle|scriptstyle|scriptscriptstyle)\b/);
      if (symMatch) {
        primarySegments.push({ type: 'inline-math', content: symMatch[0] });
        cursor += symMatch[0].length;
        continue;
      }

      // Commandes d'espacement LaTeX sans nom alphabétique : \, \; \: \!
      const spacingMatch = normalized.substring(cursor).match(/^\\[,;:!]/);
      if (spacingMatch) {
        primarySegments.push({ type: 'inline-math', content: spacingMatch[0] });
        cursor += spacingMatch[0].length;
        continue;
      }
    }

    // Caractère de texte standard
    const lastSeg = primarySegments[primarySegments.length - 1];
    if (lastSeg && lastSeg.type === 'text') {
      lastSeg.content += normalized[cursor];
    } else {
      primarySegments.push({ type: 'text', content: normalized[cursor] });
    }
    cursor++;
  }

  // Passe de raffinement : dans les segments de type 'text', scanner et extraire
  // les formules implicites (ex: "v_n = 3 \times 2^n", "2^n", "u_0 = 5")
  const finalSegments: Segment[] = [];
  for (const seg of primarySegments) {
    if (seg.type === 'text') {
      const subSegments = extractImplicitMathFromText(seg.content);
      finalSegments.push(...subSegments);
    } else {
      finalSegments.push(seg);
    }
  }

  // Dernière passe : fusionner les fragments mathématiques séparés uniquement
  // par des espaces, séparateurs ou commandes d'espacement LaTeX.
  // Exemple fréquent des moteurs IA :
  //   u_n = 4 \quad ; \quad u_{n+1} = 2 \times u_n
  // Sans cette fusion, \quad et ; peuvent être isolés et apparaître comme
  // du texte brut. La fusion garantit qu'une relation complète est envoyée
  // à KaTeX en une seule expression.
  const mergedSegments: Segment[] = [];
  for (const seg of finalSegments) {
    const previous = mergedSegments[mergedSegments.length - 1];

    if (previous?.type === 'inline-math' && seg.type === 'inline-math') {
      previous.content = `${previous.content} ${seg.content}`.trim();
      continue;
    }

    if (previous?.type === 'inline-math' && seg.type === 'text') {
      const separator = seg.content;
      const isMathSeparator = /^(?:\s|[=<>≤≥≠±\+\-×\*])+$/u.test(separator);
      if (isMathSeparator) {
        previous.content += separator;
        continue;
      }
    }

    if (previous?.type === 'text' && seg.type === 'inline-math') {
      const prefix = previous.content;
      // Ne fusionne que le préfixe final purement séparateur ; le texte
      // narratif reste du texte normal.
      const match = prefix.match(/^(.*?)(\s*[=<>≤≥≠±\+\-×\*]\s*)$/u);
      if (match && match[1].trim() === '') {
        mergedSegments.pop();
        mergedSegments.push({ type: 'inline-math', content: `${match[2]}${seg.content}`.trim() });
        continue;
      }
    }

    mergedSegments.push(seg);
  }

  return mergedSegments;
}

export const MathText: React.FC<MathTextProps> = ({ text, className = '' }) => {
  const segments = useMemo(() => parseMathSegments(text || ''), [text]);

  if (!text) return null;

  return (
    <span className={`math-text-container ${className}`}>
      {segments.map((seg, idx) => {
        if (seg.type === 'block-math') {
          const html = renderKaTeX(seg.content, true);
          return (
            <div
              key={idx}
              className="my-2.5 overflow-x-auto touch-pan-x text-center py-1 select-text"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        if (seg.type === 'inline-math') {
          const html = renderKaTeX(seg.content, false);
          return (
            <span
              key={idx}
              className="inline-math px-1 align-middle select-text"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        // Texte brut (conserve les espaces et accents naturels, avec rendu propre du gras/italique sans étoiles **)
        return (
          <span key={idx} className="whitespace-pre-wrap">
            {renderInlineMarkdownText(seg.content, idx)}
          </span>
        );
      })}
    </span>
  );
};

/**
 * Rendu inline propre du formatage Markdown simple (**gras**, *italique*, `code`)
 * pour les segments textuels, éliminant les astérisques brutes résiduelles (**)
 * et appliquant une typographie scientifique propre (indices chimiques, exposants).
 */
function renderInlineMarkdownText(content: string, segKey: string | number): React.ReactNode {
  if (!content) return null;

  const formatPlainText = (s: string): string => {
    if (!s) return s;
    return formatChemicalNotations(formatExponents(formatMathSymbols(s)));
  };

  // Nettoyer tout artefact de croix multiples (×××× ou × ×)
  let cleanContent = content
    .replace(/(?:×\s*){2,}/g, '')
    .replace(/[×xX]{3,}/g, '');

  // Met systématiquement en gras tout titre numéroté (ex: "1. TITRE :", "2. OBJECTIFS FONDAMENTAUX :")
  cleanContent = ensureNumberedTitlesBold(cleanContent);

  if (!cleanContent.includes('**') && !cleanContent.includes('*') && !cleanContent.includes('_') && !cleanContent.includes('`')) {
    return formatPlainText(cleanContent);
  }

  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\*[^*]+\*|(?<!\w)_[^_]+_(?!\w))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let partIdx = 0;

  while ((match = regex.exec(cleanContent)) !== null) {
    if (match.index > lastIndex) {
      const rawSlice = cleanContent.substring(lastIndex, match.index).replace(/\*\*/g, '').replace(/(?<!\w)\*(?!\w)/g, '');
      parts.push(formatPlainText(rawSlice));
    }

    const token = match[0];
    if ((token.startsWith('**') && token.endsWith('**')) || (token.startsWith('__') && token.endsWith('__'))) {
      parts.push(
        <strong key={`${segKey}-b-${partIdx++}`} className="font-bold text-inherit">
          {formatPlainText(token.slice(2, -2).trim())}
        </strong>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code key={`${segKey}-c-${partIdx++}`} className="px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono text-inherit">
          {token.slice(1, -1)}
        </code>
      );
    } else if ((token.startsWith('*') && token.endsWith('*')) || (token.startsWith('_') && token.endsWith('_'))) {
      parts.push(
        <em key={`${segKey}-i-${partIdx++}`} className="italic text-inherit">
          {formatPlainText(token.slice(1, -1).trim())}
        </em>
      );
    } else {
      parts.push(formatPlainText(token));
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < cleanContent.length) {
    const rawTail = cleanContent.substring(lastIndex).replace(/\*\*/g, '').replace(/(?<!\w)\*(?!\w)/g, '');
    parts.push(formatPlainText(rawTail));
  }

  return parts;
}

export default MathText;


