/**
 * Comprehensive Math & Science Notation Formatter
 * Formats mathematical exponents, scientific units, chemical formulas, vectors, and operators
 * to authentic academic typographic standards (superscripts, subscripts, Greek symbols, etc.).
 */

const SUPERSCRIPT_CHARS: Record<string, string> = {
  '0': '⁰',
  '1': '¹',
  '2': '²',
  '3': '³',
  '4': '⁴',
  '5': '⁵',
  '6': '⁶',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹',
  '+': '⁺',
  '-': '⁻',
  '=': '⁼',
  '(': '⁽',
  ')': '⁾',
  'n': 'ⁿ',
  'i': 'ⁱ',
  'a': 'ᵃ',
  'b': 'ᵇ',
  'c': 'ᶜ',
  'd': 'ᵈ',
  'e': 'ᵉ',
  'f': 'ᶠ',
  'g': 'ᵍ',
  'h': 'ʰ',
  'j': 'ʲ',
  'k': 'ᵏ',
  'l': 'ˡ',
  'm': 'ᵐ',
  'o': 'ᵒ',
  'p': 'ᵖ',
  'r': 'ʳ',
  's': 'ˢ',
  't': 'ᵗ',
  'u': 'ᵘ',
  'v': 'ᵛ',
  'w': 'ʷ',
  'x': 'ˣ',
  'y': 'ʸ',
  'z': 'ᶻ',
  'A': 'ᴬ',
  'B': 'ᴮ',
  'D': 'ᴰ',
  'E': 'ᴱ',
  'G': 'ᴳ',
  'H': 'ᴴ',
  'I': 'ᴵ',
  'J': 'ᴶ',
  'K': 'ᴷ',
  'L': 'ᴸ',
  'M': 'ᴹ',
  'N': 'ᴺ',
  'O': 'ᴼ',
  'P': 'ᴾ',
  'R': 'ᴿ',
  'T': 'ᵀ',
  'U': 'ᵁ',
  'V': 'ⱽ',
  'W': 'ᵂ',
};

const SUBSCRIPT_CHARS: Record<string, string> = {
  '0': '₀',
  '1': '₁',
  '2': '₂',
  '3': '₃',
  '4': '₄',
  '5': '₅',
  '6': '₆',
  '7': '₇',
  '8': '₈',
  '9': '₉',
  '+': '₊',
  '-': '₋',
  '=': '₌',
  '(': '₍',
  ')': '₎',
  'a': 'ₐ',
  'e': 'ₑ',
  'h': 'ₕ',
  'i': 'ᵢ',
  'j': 'ⱼ',
  'k': 'ₖ',
  'l': 'ₗ',
  'm': 'ₘ',
  'n': 'ₙ',
  'o': 'ₒ',
  'p': 'ₚ',
  'r': 'ᵣ',
  's': 'ₛ',
  't': 'ₜ',
  'u': 'ᵤ',
  'v': 'ᵥ',
  'x': 'ₓ',
};

/**
 * Converts a string to real Unicode superscript characters
 */
export function toSuperscript(str: string): string {
  if (!str) return '';
  return str
    .split('')
    .map((ch) => SUPERSCRIPT_CHARS[ch] || ch)
    .join('');
}

/**
 * Converts a string to real Unicode subscript characters
 */
export function toSubscript(str: string): string {
  if (!str) return '';
  return str
    .split('')
    .map((ch) => SUBSCRIPT_CHARS[ch] || ch)
    .join('');
}

/**
 * Transforms any caret exponent pattern (^2, ^n, ^{n+1}, ^(2x), ^(-3)) into true math superscripts.
 */
export function formatExponents(text: string): string {
  if (!text) return '';
  let out = text;

  // 0. Expressions en langage naturel : "x au carré" -> "x²", "x au cube" -> "x³"
  out = out.replace(/([a-zA-Z0-9\(\)\]\}])\s+au\s+carr[ée]\b/gi, (_, base) => `${base}²`);
  out = out.replace(/([a-zA-Z0-9\(\)\]\}])\s+au\s+cube\b/gi, (_, base) => `${base}³`);
  out = out.replace(/([a-zA-Z0-9\(\)\]\}])\s+(?:à\s+la\s+puissance|puissance)\s+([0-9a-zA-Z\+\-]+)\b/gi, (_, base, p) => `${base}${toSuperscript(p)}`);

  // 1. Explicit brace/parenthesis caret exponents: ^{2x+1}, ^(n-1), 10^{-3}, e^(-x)
  out = out.replace(/\^{([^}]+)}/g, (_, exp) => toSuperscript(exp));
  out = out.replace(/\^\(([^)]+)\)/g, (_, exp) => toSuperscript(exp));

  // 2. Simple caret exponents: ^2, ^3, ^-1, ^10, ^n, ^k, ^x, ^t, ^+, ^-
  out = out.replace(/\^([0-9]{1,3}|[nNkKxXtT]|\-[0-9]{1,3})(?![0-9a-zA-Z\^])/g, (_, exp) => toSuperscript(exp));

  // 3. Units with inverse powers: mol.L-1, m.s-2, kg.m-3, g.mol-1, J.K-1
  out = out.replace(/\b(mol|kg|g|m|km|cm|mm|s|min|h|rad|cd|A|V|W|J|N|Pa|Hz|Ω)\.([a-zA-Z]+)(-[0-9]+)\b/g, (_, u1, u2, p) => {
    return `${u1}·${u2}${toSuperscript(p)}`;
  });

  // 4. Common variable & function powers written without carets in French texts:
  // e.g. "x2", "x3", "y2", "t2", "z2", "cos2(x)", "sin2(x)", "tan2(x)", "ln2(x)"
  out = out.replace(/\b(cos|sin|tan|ln|exp|ch|sh|th)([2345])\(/gi, (_, fn, p) => {
    return `${fn}${toSuperscript(p)}(`;
  });

  out = out.replace(/([xyzXYZtuTU])([23456789])(?![0-9a-zA-Z_])/g, (_, v, p) => {
    return `${v}${toSuperscript(p)}`;
  });

  // 5. Parenthesized terms followed by digit power: (x-3)2 -> (x-3)², (2x+1)3 -> (2x+1)³
  out = out.replace(/(\)[23456789])(?![0-9a-zA-Z_])/g, (m) => {
    const digit = m.slice(1);
    return `)${toSuperscript(digit)}`;
  });

  // 6. Geometry & physics dimensions: cm2, cm3, m2, m3, km2, mm2
  out = out.replace(/\b(cm|mm|km|dm|m)([23])\b/g, (_, unit, p) => {
    return `${unit}${toSuperscript(p)}`;
  });

  return out;
}

/**
 * Normalizes chemical formulas and ionic charges:
 * H3O+ -> H₃O⁺, SO4^2- -> SO₄²⁻, Fe2+ -> Fe²⁺, Cu2+ -> Cu²⁺, etc.
 */
export function formatChemicalNotations(text: string): string {
  if (!text) return '';
  let out = text;

  // Specific common ions and formulas
  out = out.replace(/\bH3O\+/g, 'H₃O⁺');
  out = out.replace(/\bHO\-/g, 'HO⁻');
  out = out.replace(/\bOH\-/g, 'OH⁻');
  out = out.replace(/\bSO4\s*2\-/g, 'SO₄²⁻');
  out = out.replace(/\bSO4\s*\^?2\-/g, 'SO₄²⁻');
  out = out.replace(/\bCO3\s*2\-/g, 'CO₃²⁻');
  out = out.replace(/\bPO4\s*3\-/g, 'PO₄³⁻');
  out = out.replace(/\bNO3\-/g, 'NO₃⁻');
  out = out.replace(/\bNH4\+/g, 'NH₄⁺');
  out = out.replace(/\bFe2\+/g, 'Fe²⁺');
  out = out.replace(/\bFe3\+/g, 'Fe³⁺');
  out = out.replace(/\bCu2\+/g, 'Cu²⁺');
  out = out.replace(/\bZn2\+/g, 'Zn²⁺');
  out = out.replace(/\bAl3\+/g, 'Al³⁺');
  out = out.replace(/\bCa2\+/g, 'Ca²⁺');
  out = out.replace(/\bMg2\+/g, 'Mg²⁺');
  out = out.replace(/\bCl\-/g, 'Cl⁻');
  out = out.replace(/\bAg\+/g, 'Ag⁺');
  out = out.replace(/\bNa\+/g, 'Na⁺');
  out = out.replace(/\bK\+/g, 'K⁺');
  out = out.replace(/\bH2O\b/g, 'H₂O');
  out = out.replace(/\bCO2\b/g, 'CO₂');
  out = out.replace(/\bO2\b/g, 'O₂');
  out = out.replace(/\bN2\b/g, 'N₂');
  out = out.replace(/\bH2\b/g, 'H₂');
  out = out.replace(/\bCH4\b/g, 'CH₄');
  out = out.replace(/\bC2H6\b/g, 'C₂H₆');
  out = out.replace(/\bC2H4\b/g, 'C₂H₄');
  out = out.replace(/\bC6H12O6\b/g, 'C₆H₁₂O₆');

  // Math sequences subscripts: u_n -> uₙ, u_{n+1} -> uₙ₊₁, v_n -> vₙ
  out = out.replace(/\bu_\{([^}]+)\}/g, (_, sub) => `u${toSubscript(sub)}`);
  out = out.replace(/\bu_([0-9a-zA-Z]+)/g, (_, sub) => `u${toSubscript(sub)}`);
  out = out.replace(/\bv_\{([^}]+)\}/g, (_, sub) => `v${toSubscript(sub)}`);
  out = out.replace(/\bv_([0-9a-zA-Z]+)/g, (_, sub) => `v${toSubscript(sub)}`);

  return out;
}

/**
 * Universal math and science normalizer for text, formulas, steps, and final results.
 */
export function formatMathSymbols(str: string): string {
  if (!str) return '';
  let out = str.normalize('NFC');

  // Clean common OCR and encoding artifacts from French academic PDF copies
  out = out
    // Supprimer les artefacts résiduels de croix multiples (×××× ou × ×)
    .replace(/(?:×\s*){2,}/g, '')
    .replace(/[×xX]{3,}/g, '')
    .replace(/\*{2,}/g, '')
    // Arrow OCR artifacts like ÞÑ, ->, =>
    .replace(/ÞÑ/g, '➔')
    .replace(/->|-->|→/g, '➔')
    // Minus sign variants (do not touch letters with accents!)
    .replace(/[\u2010-\u2015\u2212]/g, '-')
    // Replace standalone acute accents used as minus ONLY between numbers/math expressions
    .replace(/(\d+)\s*´\s*(\d+)/g, '$1 - $2')
    // Set memberships OCR artifacts (e.g. nPN -> n ∈ ℕ, xPR -> x ∈ ℝ)
    .replace(/\b([a-zA-Z])PN\b/g, '$1 \\in \\mathbb{N}')
    .replace(/\b([a-zA-Z])PR\b/g, '$1 \\in \\mathbb{R}')
    .replace(/\b([a-zA-Z])PZ\b/g, '$1 \\in \\mathbb{Z}')
    .replace(/\b([a-zA-Z])PQ\b/g, '$1 \\in \\mathbb{Q}');

  // 0. Réparation des formes corrompues de dérivées / primes :
  // f^{`′`}(1), f^{′}(1), f^{`'}(1), f^{\prime}(1), f'(1)
  out = out.replace(/([a-zA-Z])\^\{[`'′\s]*\\?prime[`'′\s]*\}/g, "$1'");
  out = out.replace(/([a-zA-Z])\^\{[`'′\s]+\}/g, "$1'");
  out = out.replace(/([a-zA-Z])\^\{[`'′]+[`'′]+\}/g, "$1''");
  out = out.replace(/([a-zA-Z])[`'′]+/g, (m, letter) => `${letter}${m.slice(1).replace(/[`'′]/g, "'")}`);

  return out;
}

/**
 * Checks if a string contains mathematical, physical, chemical or formula syntax
 */
export function containsMathOrScience(text: string): boolean {
  if (!text) return false;
  // Détection de structures mathématiques/chimiques/fractions
  const hasLatex = /\\(frac|sqrt|lim|int|sum|vec|text|mathrm|mathbf|mathbb|alpha|beta|Delta|theta|pi|ln|sin|cos|tan|rightleftharpoons|pm|times|div|infty|le|ge|neq|prime)/.test(text);
  const hasDelimiters = /\$|\(|\)|\/|\^|_|\[|\]|√|∫|∑|⇄|⟶|≤|≥|≠|±|∞|′/.test(text);
  const hasSlashFraction = /(\([^\)]+\)|[0-9a-zA-Z\[\]\+\-\*·\^\u2070-\u209F\u00B2\u00B3\u00B9\u2080-\u2089]+)\s*\/\s*(\([^\)]+\)|[0-9a-zA-Z\[\]\+\-\*·\^\u2070-\u209F\u00B2\u00B3\u00B9\u2080-\u2089]+)/.test(text);
  const hasChemical = /\b(Ka|pKa|pH|H3O\+|HO\-|OH\-|H2O|CO2|SO4|NO3|NH4|Fe2\+|Fe3\+|Cu2\+|Ca2\+|Mg2\+|Al3\+|Zn2\+|Cl\-|Na\+|K\+|ADP|ATP|Pi|CAH|NADPH)\b|\[[A-Za-z0-9\+\-\u2070-\u209F\u2080-\u2089]+\]/.test(text);
  const hasFunctionOrEq = /\b(f\(x\)|f'\(x\)|g\(x\)|g'\(x\)|u_n|u_\{n\+1\}|v_n|lim|limite|cos|sin|tan|ln|exp)\b|[=<>≤≥≠]/.test(text);
  const hasLimitSyntax = /\blim\b|\blimite\b|lim_\{|x\s*(?:->|➔|→|\\to)/i.test(text);
  const hasReactionArrow = /(?:->|-->|→|➔|<=>|⇄|\\to|\\rightleftharpoons)/.test(text);
  const hasBondOrComplex = /(?:---|--\[|\]--|[²³]?[⁺⁻]|\[Micelle)/.test(text);
  const hasGenetics = /\b([A-Za-z]\/\/[A-Za-z]|\[[A-Za-z\+]\])\b|\d+\/\d+\s*\[[A-Za-z\+]\]/.test(text);
  const hasPhysicsFormulas = /\b(v\s*=\s*d\s*\/\s*t|Δt\s*=\s*|Ec\s*=\s*|Ep\s*=\s*|Em\s*=\s*|U\s*=\s*R|P\s*=\s*U|sin\([^)]+\)\s*\/\s*v)/i.test(text);

  return hasLatex || hasReactionArrow || hasBondOrComplex || hasChemical || hasSlashFraction || hasLimitSyntax || hasGenetics || hasPhysicsFormulas || (hasDelimiters && hasFunctionOrEq);
}

/**
 * Converts user natural/pseudo math, chemistry, fractions, unicode and formulas
 * into clean standard LaTeX for KaTeX rendering.
 *
 * Example:
 * "Ka = ([A⁻]·[H₃O⁺]) / [AH]" -> "K_a = \\frac{[\\text{A}^-] \\cdot [\\text{H}_3\\text{O}^+]}{[\\text{AH}]}"
 * "(3x^2+1)/(x-2)" -> "\\frac{3x^2+1}{x-2}"
 * "lim (x ➔ 0+) (x - 2 + 1/x) = +∞" -> "\\lim_{x \\to 0^+} \\left(x - 2 + \\frac{1}{x}\\right) = +\\infty"
 * "lim_{0+} = +∞ ; lim_{inf} = +∞" -> "\\lim_{x \\to 0^+} = +\\infty \\quad ; \\quad \\lim_{x \\to +\\infty} = +\\infty"
 */
export function convertNaturalOrPseudoMathToLatex(input: string): string {
  if (!input) return '';
  let str = input.trim().normalize('NFC');

  // If already full LaTeX wrapped in $$ or $, handle clean up
  if (str.startsWith('$$') && str.endsWith('$$')) {
    str = str.slice(2, -2).trim();
  } else if (str.startsWith('$') && str.endsWith('$') && str.length >= 2) {
    str = str.slice(1, -1).trim();
  }

  // 0. Réparation des caractères de contrôle non imprimables (ASCII 0x00-0x08, 0x0B, 0x0C)
  str = str.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, ' ');
  str = str.replace(/\\\\([a-zA-Z]+)/g, '\\$1');
  str = str.trim();

  // 0.b Réparation des formes corrompues de dérivées / primes :
  // f^{`′`}(1), f^{′}(1), f^{`'}(1), f^{\prime}(1), f'(1)
  str = str.replace(/([a-zA-Z])\^\{[`'′\s]*\\?prime[`'′\s]*\}/g, "$1'");
  str = str.replace(/([a-zA-Z])\^\{[`'′\s]+\}/g, "$1'");
  str = str.replace(/([a-zA-Z])\^\{[`'′]+[`'′]+\}/g, "$1''");
  str = str.replace(/([a-zA-Z])[`'′]+/g, (m, letter) => `${letter}${m.slice(1).replace(/[`'′]/g, "'")}`);

  // 1. Uniformiser les séparateurs de multiplication, flèches et symboles cassés
  str = str.replace(/\\f\\frac\{/g, '\\frac{');
  str = str.replace(/\brac\{/g, '\\frac{');

  // Nettoyer d'abord les artefacts Markdown (** ou ***) et les répétitions de croix (×××× ou × ×)
  str = str.replace(/\*\*([^*]+)\*\*/g, '$1');
  str = str.replace(/\*{2,}/g, '');
  str = str.replace(/(?:×\s*){2,}/g, '');
  str = str.replace(/[×xX]{3,}/g, '');

  // Strict Academic Rule: Remplacer les astérisques '*' et '∗' par '\times' UNIQUEMENT dans les contextes réels de multiplication
  // (entre deux chiffres, variables ou parenthèses)
  str = str.replace(/([0-9a-zA-Z\)\}\]])\s*[\*∗]\s*([0-9a-zA-Z\(\{\\])/g, '$1 \\times $2');
  str = str.replace(/(\d+)\s*×\s*(\d+)/g, '$1 \\times $2');
  str = str.replace(/(?<!\\)\*/g, '');
  str = str.replace(/·|•/g, ' \\cdot ');

  // 1.b Natural French exponents: "au carré", "au cube", "puissance n"
  str = str.replace(/([a-zA-Z0-9\(\)\]\}])\s+au\s+carr[ée]\b/gi, '$1^2');
  str = str.replace(/([a-zA-Z0-9\(\)\]\}])\s+au\s+cube\b/gi, '$1^3');
  str = str.replace(/([a-zA-Z0-9\(\)\]\}])\s+(?:à\s+la\s+puissance|puissance)\s+([0-9a-zA-Z\+\-]+)\b/gi, '$1^{$2}');

  // 1.c Dénombrement, Arrangements et Combinaisons (ex: A42 -> A_4^2, C42 -> C_4^2, A_n^p, C_n^p, \binom{n}{p}, A102 -> A_{10}^2)
  str = str.replace(/\bA(\d{1,2})(\d{1,2})\b/g, 'A_{$1}^{$2}');
  str = str.replace(/\bC(\d{1,2})(\d{1,2})\b/g, '\\binom{$1}{$2}');
  str = str.replace(/\bA_(\d+)\^(\d+)\b/g, 'A_{$1}^{$2}');
  str = str.replace(/\bC_(\d+)\^(\d+)\b/g, '\\binom{$1}{$2}');

  // 1.d Confusion OCR et notations abrégées de suites :
  // v_o / u_o / w_o -> v_0 / u_0 / w_0
  str = str.replace(/\b([uvwUVW])_[oO]\b/g, '$1_0');
  str = str.replace(/\b([uvwUVW])[oO]\b/g, '$1_0');

  // Notations de suites sans underscore : u7 -> u_7, u0 -> u_0, u2 -> u_2, u20 -> u_{20}, v4 -> v_4, v8 -> v_8
  str = str.replace(/\b([uvwUVW])(\d{1,2})\b/g, (_, s, idx) => `${s.toLowerCase()}_{${idx}}`);

  // Suites pour v et w (qui ne sont pas des mots français courants) : vn -> v_n, wn -> w_n
  str = str.replace(/\b([vwVW])n\b/g, (_, s) => `${s.toLowerCase()}_n`);

  // RÈGLE FONDAMENTALE : En français, "un" est le mot le plus courant ("un devoir", "un texte", "un problème").
  // On ne doit JAMAIS convertir un mot "un" ou "Un" isolé en "u_n" SAUF s'il s'agit explicitement d'une suite mathématique :
  // a) Facteur numérique ou produit mathématique direct : 2un, 3*un, \times un
  str = str.replace(/(\d+(?:[.,]\d+)?)\s*([uU])n\b/g, '$1 $2_n');
  str = str.replace(/([0-9a-zA-Z\)\}\]])\s*[\*∗]\s*([uU])n\b/g, '$1 \\times $2_n');
  str = str.replace(/\\times\s*([uU])n\b/g, '\\times $1_n');
  str = str.replace(/\b([uU])n\s*\\times/g, '$1_n \\times');
  str = str.replace(/\b([uU])n\s*\/\s*([0-9a-zA-Z_\(\)]+)/g, '$1_n / $2');
  str = str.replace(/([0-9a-zA-Z_\(\)]+)\s*\/\s*([uU])n\b/g, '$1 / $2_n');
  // b) Entre parenthèses ou crochets de suite : (un) -> (u_n), [un] -> [u_n]
  str = str.replace(/\(([uU])n\)/g, '($1_n)');
  str = str.replace(/\[([uU])n\]/g, '[$1_n]');
  // c) Indice composé direct collé (sans espace) : un+1 -> u_{n+1}, un-1 -> u_{n-1}, un+2 -> u_{n+2}
  str = str.replace(/\b([uvwUVW])n([+\-])(\d+)\b/g, '$1_{n$2$3}');
  // d) Précédé explicitement d'un terme relatif aux suites : "suite un", "la suite un", "terme un"
  str = str.replace(/\b(suites?|termes?)\s+([uU])n\b/gi, '$1 $2_n');
  // e) Égalité ou comparaison mathématique : un = ..., un <= ..., un >= ..., un > ...
  str = str.replace(/\b([uU])n\s*([=<>≤≥≠])/g, '$1_n $2');

  // Variables avec exposant sans chapeau (ex: x2 -> x^2, x3 -> x^3, y2 -> y^2, t2 -> t^2)
  str = str.replace(/\b([xyzXYZtuTU])([23456789])\b/g, '$1^$2');

  // Puissances courantes dans les suites géométriques et analyse :
  // q3 -> q^3, q2 -> q^2, q4 -> q^4, qn -> q^n
  str = str.replace(/\bq(\d+)\b/g, 'q^{$1}');
  str = str.replace(/\bqn\b/g, 'q^n');
  
  // Expressions comme 2n > ... ou 3 * 2n ou 2n = 256 -> 2^n ou 3 \times 2^n
  str = str.replace(/(\d+)\s*\\times\s*([23456789])n\b/g, '$1 \\times $2^n');
  str = str.replace(/\b([23456789])n\s*([><=≤≥≠])/g, '$1^n $2');
  str = str.replace(/\b([23456789])n\b(?!\s*([a-zA-Z]))/g, (match, base) => {
    // Si suivi d'un opérateur ou isolé, c'est généralement 2^n dans les suites géométriques
    return `${base}^n`;
  });
  
  // Évaluations de puissances comme 28 = 256, 29 = 512 dans les résolutions d'inéquations de suites
  str = str.replace(/\b2(\d)\s*=\s*(\d{2,})/g, '2^{$1} = $2');
  str = str.replace(/(\d+)\s*\\times\s*2(\d)\b/g, '$1 \\times 2^{$2}');

  // 2. Conversion des indices et exposants Unicode en syntaxe standard LaTeX
  const unicodeSuperscripts: Record<string, string> = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    '⁺': '+', '⁻': '-', '⁼': '=', '⁽': '(', '⁾': ')', 'ⁿ': 'n', 'ⁱ': 'i', 'ˣ': 'x'
  };
  const unicodeSubscripts: Record<string, string> = {
    '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
    '₊': '+', '₋': '-', '₌': '=', '₍': '(', '₎': ')', 'ₐ': 'a', 'ₑ': 'e', 'ₕ': 'h', 'ᵢ': 'i', 'ⱼ': 'j',
    'ₖ': 'k', 'ₗ': 'l', 'ₘ': 'm', 'ₙ': 'n', 'ₒ': 'o', 'ₚ': 'p', 'ᵣ': 'r', 'ₛ': 's', 'ₜ': 't', 'ᵤ': 'u',
    'ᵥ': 'v', 'ₓ': 'x'
  };

  // Convert unicode super/sub in chemical & math notation
  str = str.replace(/([A-Za-z0-9\]\)])([⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿⁱˣ]+)/g, (_, base, sups) => {
    const cleanSup = sups.split('').map((c: string) => unicodeSuperscripts[c] || c).join('');
    return `${base}^{${cleanSup}}`;
  });

  str = str.replace(/([A-Za-z\]\)])([₀₁₂₃₄₅₆₇₈₉₊₋ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓ]+)/g, (_, base, subs) => {
    const cleanSub = subs.split('').map((c: string) => unicodeSubscripts[c] || c).join('');
    return `${base}_{${cleanSub}}`;
  });

  // 3. Spécial Ka, pKa, pH, ions chimiques
  str = str.replace(/\bKa\b(?!\s*\{)/g, 'K_a');
  str = str.replace(/\bpKa\b/g, '\\text{p}K_a');
  str = str.replace(/\bpH\s*=\s*-log\s*\[\s*H3O\+?\s*\]/gi, '\\text{pH} = -\\log[\\text{H}_3\\text{O}^+]');
  str = str.replace(/\bpH\s*=\s*-log\s*\[\s*H_3O\^?\+?\s*\]/gi, '\\text{pH} = -\\log[\\text{H}_3\\text{O}^+]');
  str = str.replace(/\[\s*A\^?-\s*\]/g, '[\\text{A}^-]');
  str = str.replace(/\[\s*A\^?\-\s*\]/g, '[\\text{A}^-]');
  str = str.replace(/\[\s*A\^?\+\s*\]/g, '[\\text{A}^+]');
  str = str.replace(/\[\s*H3O\^?\+?\s*\]/g, '[\\text{H}_3\\text{O}^+]');
  str = str.replace(/\[\s*H_3O\^?\+?\s*\]/g, '[\\text{H}_3\\text{O}^+]');
  str = str.replace(/\[\s*HO\^?\-?\s*\]/g, '[\\text{HO}^-]');
  str = str.replace(/\[\s*OH\^?\-?\s*\]/g, '[\\text{HO}^-]');
  str = str.replace(/\[\s*AH\s*\]/g, '[\\text{AH}]');
  str = str.replace(/\[\s*BH\^?\+?\s*\]/g, '[\\text{BH}^+]');
  str = str.replace(/\[\s*B\s*\]/g, '[\\text{B}]');

  // 4. Limites mathématiques usuelles (toutes variantes naturelles / pseudo-LaTeX)
  // Cas A : lim_{0+} ou lim_{0-} ou lim_{inf} ou lim_{+inf} ou lim_{-inf}
  str = str.replace(/\\?lim(?:ite)?_\{?\s*0\s*\^\s*\+\s*\}?/gi, '\\lim_{x \\to 0^+}');
  str = str.replace(/\\?lim(?:ite)?_\{?\s*0\s*\^\s*-\s*\}?/gi, '\\lim_{x \\to 0^-}');
  str = str.replace(/\\?lim(?:ite)?_\{?\s*0\s*\+\s*\}?/gi, '\\lim_{x \\to 0^+}');
  str = str.replace(/\\?lim(?:ite)?_\{?\s*0\s*-\s*\}?/gi, '\\lim_{x \\to 0^-}');
  str = str.replace(/\\?lim(?:ite)?_\{?\s*(?:\+?inf|\+?infini|\+\s*\\infty|\+∞)\s*\}?/gi, '\\lim_{x \\to +\\infty}');
  str = str.replace(/\\?lim(?:ite)?_\{?\s*(?:-inf|-infini|-\s*\\infty|-∞)\s*\}?/gi, '\\lim_{x \\to -\\infty}');

  // Cas B : lim (x -> target) ou lim(x ➔ target)
  str = str.replace(/\b\\?lim(?:ite)?\s*\(\s*([a-zA-Z])\s*(?:->|➔|→|\\to)\s*0\s*\^\s*(\+|\-)\s*\)/gi, '\\lim_{$1 \\to 0^{$2}}');
  str = str.replace(/\b\\?lim(?:ite)?\s*\(\s*([a-zA-Z])\s*(?:->|➔|→|\\to)\s*0\s*(\+|\-)\s*\)/gi, '\\lim_{$1 \\to 0^{$2}}');
  str = str.replace(/\b\\?lim(?:ite)?\s*\(\s*([a-zA-Z])\s*(?:->|➔|→|\\to)\s*(\+?∞|\+?inf|\+?infini|\+\s*\\infty)\s*\)/gi, '\\lim_{$1 \\to +\\infty}');
  str = str.replace(/\b\\?lim(?:ite)?\s*\(\s*([a-zA-Z])\s*(?:->|➔|→|\\to)\s*(\-?∞|\-?inf|\-?infini|\-\s*\\infty)\s*\)/gi, '\\lim_{$1 \\to -\\infty}');
  str = str.replace(/\b\\?lim(?:ite)?\s*\(\s*([a-zA-Z])\s*(?:->|➔|→|\\to)\s*([^)]+)\s*\)/gi, (_, v, target) => {
    let cleanT = target.trim()
      .replace(/\\infty/g, '\\infty')
      .replace(/\+?inf(?:ini)?|\+∞/gi, '+\\infty')
      .replace(/-inf(?:ini)?|-∞/gi, '-\\infty')
      .replace(/0\s*\+/g, '0^+')
      .replace(/0\s*-/g, '0^-');
    return `\\lim_{${v} \\to ${cleanT}}`;
  });

  // Cas C : lim x -> target ou limx -> target (sans parenthèses)
  str = str.replace(/\b\\?lim(?:ite)?\s*([a-zA-Z])\s*(?:->|➔|→|\\to)\s*0\s*\^\s*(\+|\-)/gi, '\\lim_{$1 \\to 0^{$2}}');
  str = str.replace(/\b\\?lim(?:ite)?\s*([a-zA-Z])\s*(?:->|➔|→|\\to)\s*0\s*(\+|\-)/gi, '\\lim_{$1 \\to 0^{$2}}');
  str = str.replace(/\b\\?lim(?:ite)?\s*([a-zA-Z])\s*(?:->|➔|→|\\to)\s*(\+?∞|\+?inf|\+?infini|\+\s*\\infty)/gi, '\\lim_{$1 \\to +\\infty}');
  str = str.replace(/\b\\?lim(?:ite)?\s*([a-zA-Z])\s*(?:->|➔|→|\\to)\s*(\-?∞|\-?inf|\-?infini|\-\s*\\infty)/gi, '\\lim_{$1 \\to -\\infty}');
  str = str.replace(/\b\\?lim([a-zA-Z])\b/gi, '\\lim_{$1}');

  // 5. Symboles d'infini
  str = str
    .replace(/\b\+?infinity\b|\+inf\b|\+infini\b/gi, '+\\infty')
    .replace(/\b-infinity\b|-inf\b|-infini\b/gi, '-\\infty')
    .replace(/\binfinity\b|\binfini\b/gi, '\\infty')
    .replace(/\+∞/g, '+\\infty')
    .replace(/-∞/g, '-\\infty')
    .replace(/∞/g, '\\infty');

  // 6. Racines
  str = str.replace(/√\s*([0-9a-zA-Z]+)/g, '\\sqrt{$1}');
  str = str.replace(/√\s*\(([^)]+)\)/g, '\\sqrt{$1}');
  str = str.replace(/ⁿ√\s*([0-9a-zA-Z]+)/g, '\\sqrt[n]{$1}');
  str = str.replace(/ⁿ√\s*\(([^)]+)\)/g, '\\sqrt[n]{$1}');
  str = str.replace(/\bsqrt\(([^)]+)\)/gi, '\\sqrt{$1}');

  // 7. Vecteurs
  str = str.replace(/([a-zA-Z]{1,3})⃗/g, '\\vec{$1}');
  str = str.replace(/⃗([a-zA-Z]{1,3})/g, '\\vec{$1}');

  // 8. Suites u_n, u_n+1, v_n, v_n+1, w_n, w_n+1
  str = str.replace(/\b([uvwUVW])_n\b/g, (_, s) => `${s.toLowerCase()}_n`);
  str = str.replace(/\b([uvwUVW])_(?:\{n\+1\}|n\+1)/g, (_, s) => `${s.toLowerCase()}_{n+1}`);
  str = str.replace(/\b([uvwUVW])_(?:\{n-1\}|n-1)/g, (_, s) => `${s.toLowerCase()}_{n-1}`);
  str = str.replace(/\b([uvwUVW])_(?:\{2n\}|2n)/g, (_, s) => `${s.toLowerCase()}_{2n}`);

  // 9. Symboles et flèches
  str = str.replace(/⇄|\\rightleftharpoons/g, ' \\rightleftharpoons ');
  str = str.replace(/⟶|->|-->|➔|→/g, ' \\to ');
  str = str.replace(/⟺|<=>/g, ' \\iff ');
  str = str.replace(/⟹|=>/g, ' \\implies ');
  str = str.replace(/---/g, ' \\text{ --- } ');
  str = str.replace(/<=|≤/g, ' \\le ');
  str = str.replace(/>=|≥/g, ' \\ge ');
  str = str.replace(/!=|≠/g, ' \\neq ');
  str = str.replace(/~=|≈/g, ' \\approx ');
  str = str.replace(/(?:\\Delta|Δ)\s*([a-zA-Z])/g, '\\Delta $1');
  str = str.replace(/(?:\\Delta|Δ)/g, '\\Delta ');

  // 9.b Indices standards en physique (v1, v2, i1, i2)
  str = str.replace(/\b([uvwUVW])(\d{1,2})\b/g, (_, s, idx) => `${s.toLowerCase()}_{${idx}}`);
  str = str.replace(/\b([ijkIJK])(\d{1,2})\b/g, (_, s, idx) => `${s.toLowerCase()}_{${idx}}`);

  // 10. CONVERSION MAJEURE DES FRACTIONS NATURELLES AVEC SLASH "/"
  // Cas A0 : Fonctions trigonométriques ou logarithmiques (ex: sin(i1) / v1, cos(x) / 2)
  str = str.replace(/\\?(sin|cos|tan|ln|log|exp)\s*\(\s*([a-zA-Z0-9_{}]+)\s*\)\s*\/\s*([a-zA-Z0-9_{}]+)/gi, (_, fn, arg, den) => {
    return `\\frac{\\${fn.toLowerCase()}(${arg})}{${den}}`;
  });

  // Cas A : Parenthèses explicites : (numérateur) / (dénominateur)
  str = str.replace(/\(\s*([^\(\)]+)\s*\)\s*\/\s*\(\s*([^\(\)]+)\s*\)/g, '\\frac{$1}{$2}');
  str = str.replace(/\(\s*([^\(\)]+)\s*\)\s*\/\s*(\[[^\[\]]+\]|[a-zA-Z0-9_\^\+\-]+)/g, '\\frac{$1}{$2}');
  str = str.replace(/(\[[^\[\]]+\]|[a-zA-Z0-9_\^\+\-]+)\s*\/\s*\(\s*([^\(\)]+)\s*\)/g, '\\frac{$1}{$2}');
  // Produits de concentrations au numérateur / dénominateur (ex: [A-][H3O+] / [AH])
  str = str.replace(/((?:\[[^\[\]]+\]|\s|\\cdot|·|\*)+)\s*\/\s*(\[[^\[\]]+\])/g, '\\frac{$1}{$2}');
  str = str.replace(/(\[[^\[\]]+\])\s*\/\s*(\[[^\[\]]+\])/g, '\\frac{$1}{$2}');

  // Cas B : Fraction simple A / B (ex: 1/x, 1/x^2, 3/x, a/b, 1/2, n/V, m/M, d/t)
  // Ne pas transformer les unités comme km/h, m/s ou les numérations cellulaires / concentrations (ex: 200/mm³, 1000/mm3, 5/s)
  str = str.replace(/\b([0-9a-zA-Z\^\+\-]+)\s*\/\s*([0-9a-zA-Z\^\+\-]+)\b/g, (match, num, den) => {
    if (/^(h|s|min|L|mL|µL|uL|mol|mm|mm2|mm3|mm³|cm|cm2|cm3|cm³|m|m2|m3|m³|km|kg|g|mg|µg|an|ans|j|jour|jours)$/i.test(den)) {
      return match;
    }
    return `\\frac{${num}}{${den}}`;
  });

  // 10.b Espèces chimiques et biologiques fréquentes
  str = str
    .replace(/\bH2O\b/g, '\\text{H}_2\\text{O}')
    .replace(/\bCO2\b/g, '\\text{CO}_2')
    .replace(/\bO2\b/g, '\\text{O}_2')
    .replace(/\bN2\b/g, '\\text{N}_2')
    .replace(/\bH2\b/g, '\\text{H}_2')
    .replace(/\bC6H12O6\b/g, '\\text{C}_6\\text{H}_{12}\\text{O}_6')
    .replace(/\bCH4\b/g, '\\text{CH}_4')
    .replace(/\bH\s*[\+⁺]\b|\bH\^\+\b/g, '\\text{H}^+')
    .replace(/\be\s*[\-⁻]\b|\be\^-\b/g, 'e^-')
    .replace(/\bCa\s*2\s*[\+⁺]\b|\bCa\^?2\+\b|Ca²⁺/g, '\\text{Ca}^{2+}')
    .replace(/\bMg\s*2\s*[\+⁺]\b|\bMg\^?2\+\b|Mg²⁺/g, '\\text{Mg}^{2+}')
    .replace(/\bFe\s*2\s*[\+⁺]\b|\bFe\^?2\+\b|Fe²⁺/g, '\\text{Fe}^{2+}')
    .replace(/\bFe\s*3\s*[\+⁺]\b|\bFe\^?3\+\b|Fe³⁺/g, '\\text{Fe}^{3+}')
    .replace(/\bCu\s*2\s*[\+⁺]\b|\bCu\^?2\+\b|Cu²⁺/g, '\\text{Cu}^{2+}')
    .replace(/\bZn\s*2\s*[\+⁺]\b|\bZn\^?2\+\b|Zn²⁺/g, '\\text{Zn}^{2+}')
    .replace(/\bAl\s*3\s*[\+⁺]\b|\bAl\^?3\+\b|Al³⁺/g, '\\text{Al}^{3+}')
    .replace(/\bCl\s*[\-⁻]\b|Cl⁻/g, '\\text{Cl}^-')
    .replace(/\bNa\s*[\+⁺]\b|Na⁺/g, '\\text{Na}^+')
    .replace(/\bK\s*[\+⁺]\b|K⁺/g, '\\text{K}^+')
    .replace(/\bAg\s*[\+⁺]\b|Ag⁺/g, '\\text{Ag}^+')
    .replace(/\bSO4\s*\^?2\s*[\-⁻]\b|SO₄²⁻/g, '\\text{SO}_4^{2-}')
    .replace(/\bCO3\s*\^?2\s*[\-⁻]\b|CO₃²⁻/g, '\\text{CO}_3^{2-}')
    .replace(/\bPO4\s*\^?3\s*[\-⁻]\b|PO₄³⁻/g, '\\text{PO}_4^{3-}')
    .replace(/\bNO3\s*[\-⁻]\b|NO₃⁻/g, '\\text{NO}_3^-')
    .replace(/\bNH4\s*[\+⁺]\b|NH₄⁺/g, '\\text{NH}_4^+')
    .replace(/\bADP\b/g, '\\text{ADP}')
    .replace(/\bATP\b/g, '\\text{ATP}')
    .replace(/\bPi\b/g, '\\text{P}_i')
    .replace(/\bTH2\b/g, '\\text{TH}_2')
    .replace(/\bT\s*[\+⁺]\b/g, '\\text{T}^+')
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
    .replace(/\b([A-Za-z])\/\/([A-Za-z])\b/g, '\\text{$1//$2}');

  // 11. Mise en forme des points-virgules de séparation d'équations (sans altérer les espacements LaTeX \;)
  str = str.replace(/(?<!\\)\s*;\s*/g, ' \\quad ; \\quad ');

  // 12. Encapsulation propre des parenthèses contenant des fractions
  str = str.replace(
    /(?<!\\left)\(\s*((?:(?!\\left|\\right)[^()])*?\\frac\{[^}]+\}\{[^}]+\}(?:(?!\\left|\\right)[^()])*?)\s*(?<!\\right)\)/g,
    '\\left($1\\right)'
  );

  // 13. Nettoyage des imbrications \text{\text{...}}
  str = str.replace(/\\text\{\s*\\text\{([^}]+)\}\s*\}/g, '\\text{$1}');

  return str;
}

/**
 * Universal canonicalizer for math expressions.
 * Ensures a single canonical representation throughout the application.
 */
export function canonicalizeMathExpression(expr: string): string {
  if (!expr) return '';
  return convertNaturalOrPseudoMathToLatex(expr);
}

/**
 * Recursively sanitizes any data structure (string, object, array)
 * stripping any technical artifacts (e.g. \f\f, rac{, f^{`′`}, x2, u20, vn, 2n, q3, limx, A102, ∗)
 */
export function sanitizeMathAndScientificOutput<T>(data: T): T {
  if (!data) return data;

  if (typeof data === 'string') {
    let str: string = data;
    // 1. Caractères non imprimables
    str = str.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, ' ');
    str = str.replace(/\\\\([a-zA-Z]+)/g, '\\$1');

    // 2. Fractions cassées
    str = str.replace(/\brac\{/g, '\\frac{');

    // 3. Dérivées corrompues
    str = str.replace(/([a-zA-Z])\^\{[`'′\s]*\\?prime[`'′\s]*\}/g, "$1'");
    str = str.replace(/([a-zA-Z])\^\{[`'′\s]+\}/g, "$1'");
    str = str.replace(/([a-zA-Z])\^\{[`'′]+[`'′]+\}/g, "$1''");

    // 4. Astérisques de multiplication
    str = str.replace(/(\d+)\s*∗\s*(\d+)/g, '$1 \\times $2');

    // 5. Nettoyage des délimiteurs $ superflus autour d'espaces vides ou ponctuation
    str = str.replace(/\$\s*\$/g, '');

    // 6. Suppression des $ orphelins isolés dans du texte sans formule
    const dollarCount = (str.match(/(?<!\\)\$/g) || []).length;
    if (dollarCount % 2 !== 0) {
      str = str.replace(/(^|\s)\$(\s|$)/g, '$1$2');
    }

    return str as unknown as T;
  }

  if (Array.isArray(data)) {
    return data.map((item) => sanitizeMathAndScientificOutput(item)) as unknown as T;
  }

  if (typeof data === 'object') {
    const res: Record<string, any> = {};
    for (const [key, val] of Object.entries(data as Record<string, any>)) {
      res[key] = sanitizeMathAndScientificOutput(val);
    }
    return res as unknown as T;
  }

  return data;
}


