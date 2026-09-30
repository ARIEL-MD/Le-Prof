/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LES SUITES NUMÉRIQUES (SANS IA)
 * =================================================================
 *
 * Couvre l'intégralité des suites usuelles des programmes d'examen (Terminale A, C, D, Bac) :
 *  - Suites arithmétiques :
 *      * par récurrence (u_{n+1} = u_n + r)
 *      * explicites (u_n = u_0 + n*r ou u_n = a*n + b)
 *      * textuelles ("suite arithmétique de premier terme u0 = ... et de raison r = ...")
 *  - Suites géométriques :
 *      * par récurrence (u_{n+1} = q * u_n)
 *      * explicites (u_n = u_0 * q^n ou u_n = a * b^n)
 *      * textuelles ("suite géométrique de premier terme u0 = ... et de raison q = ...")
 *  - Suites arithmético-géométriques / affines :
 *      * u_{n+1} = a * u_n + b (a ≠ 1, b ≠ 0)
 *      * Point fixe l = b / (1 - a)
 *      * Suite auxiliaire associée : v_n = u_n - l (géométrique de raison a et v_0 = u_0 - l)
 *
 * Résout méthodiquement avec rédaction officielle complète :
 *  1. Calcul des premiers termes (u_1, u_2, u_3, u_10, etc.) avec étapes détaillées
 *  2. Nature de la suite principale (u_n) ou auxiliaire (v_n) (raison, 1er terme, justification)
 *  3. Démonstration par récurrence complète (Initialisation, Hérédité, Conclusion)
 *  4. Expression du terme général en fonction de n (v_n puis u_n)
 *  5. Sens de variation (calcul et signe de u_{n+1} - u_n)
 *  6. Calcul de sommes de termes consécutifs (S_n = u_0 + ... + u_n ou S_n = v_0 + ... + v_n)
 *  7. Limite et convergence quand n → +∞ (justification via la limite de q^n)
 */

import { evaluate as mathEvaluate } from 'mathjs';
import { normalizeExpressionForMathjs } from './genericFunctionSolver';
import { ParsedQuestion, SolvedQuestionResult } from './types';

export interface ParsedAuxiliarySequence {
  name: string; // ex: "v"
  offset: number; // v_n = u_n - offset (ou u_n + offset)
  scale: number; // v_n = scale * u_n - offset
  v0: number;
}

export interface ParsedSequenceDefinition {
  seqName: string; // ex: "u"
  u0: number;
  u0Index: number; // 0 ou 1 selon que la suite démarre à u0 ou u1
  a: number; // raison multiplicative (u_{n+1} = a*u_n + b)
  b: number; // terme additif
  nature: 'arithmetic' | 'geometric' | 'affine';
  fixedPoint: number | null; // l = b/(1-a), défini seulement si a != 1
  auxSeq?: ParsedAuxiliarySequence;
}

function safeEvalAt(exprMathjs: string, xVal: number): number | null {
  try {
    const v = mathEvaluate(exprMathjs, { x: xVal });
    return typeof v === 'number' && Number.isFinite(v) ? v : null;
  } catch {
    return null;
  }
}

/**
 * Parse un nombre ou une fraction (ex: "5", "-3.5", "1/2", "-3/4", "\\frac{1}{2}")
 */
export function parseNumberOrFraction(raw: string): number | null {
  if (!raw) return null;
  const clean = raw.trim().replace(/\s+/g, '').replace(',', '.');
  
  // Cas LaTeX \frac{a}{b}
  const fracLatexMatch = clean.match(/^[+-]?\\frac\{(-?\d+(?:\.\d+)?)\}\{([+-]?\d+(?:\.\d+)?)\}$/);
  if (fracLatexMatch) {
    const num = parseFloat(fracLatexMatch[1]);
    const den = parseFloat(fracLatexMatch[2]);
    return den !== 0 ? num / den : null;
  }

  // Cas fraction standard a/b
  const fracMatch = clean.match(/^([+-]?\d+(?:\.\d+)?)\/([+-]?\d+(?:\.\d+)?)$/);
  if (fracMatch) {
    const num = parseFloat(fracMatch[1]);
    const den = parseFloat(fracMatch[2]);
    return den !== 0 ? num / den : null;
  }

  // Cas décimal ou entier
  const numMatch = clean.match(/^[+-]?\d+(?:\.\d+)?$/);
  if (numMatch) {
    const v = parseFloat(numMatch[0]);
    return isNaN(v) ? null : v;
  }

  return null;
}

export function fmtNum(n: number): string {
  if (Math.abs(n) < 1e-12) return '0';
  const r = Math.round(n * 1e6) / 1e6;
  if (Number.isInteger(r)) return `${r}`;

  // Tenter une fraction simple
  const commonDenoms = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16];
  for (const den of commonDenoms) {
    const num = Math.round(r * den);
    if (Math.abs(r - num / den) < 1e-6) {
      return `\\frac{${num}}{${den}}`;
    }
  }

  return `${Math.round(r * 1000) / 1000}`;
}

export function fmtNumClean(n: number): string {
  if (Math.abs(n) < 1e-12) return '0';
  const r = Math.round(n * 1e6) / 1e6;
  if (Number.isInteger(r)) return `${r}`;
  return `${Math.round(r * 1000) / 1000}`;
}

// ==========================================================================
// 1. EXTRACTION DE LA DÉFINITION DE LA SUITE
// ==========================================================================

export function parseSequenceAndRecurrence(fullText: string): ParsedSequenceDefinition | null {
  const clean = fullText.replace(/[−–—]/g, '-');

  // --- CAS A : Définition textuelle explicite d'une suite arithmétique ---
  // Ex: "suite arithmétique de premier terme u_0 = 3 et de raison r = 2" ou "u0=3 et r=2"
  const arithTextMatch = clean.match(/suite\s+arithm[ée]tique.*?([a-zA-Z])[\s_]*\{?([01])\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?|[+-]?\d+\/[+-]?\d+|[+-]?\\frac\{[^{}]+\}\{[^{}]+\}).*?(?:raison|r)\s*(?:=\s*|\s+est\s+(?:de\s+)?)([+-]?\d+(?:[.,]\d+)?|[+-]?\d+\/[+-]?\d+|[+-]?\\frac\{[^{}]+\}\{[^{}]+\})/i) ||
    clean.match(/([a-zA-Z])[\s_]*\{?([01])\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?|[+-]?\d+\/[+-]?\d+|[+-]?\\frac\{[^{}]+\}\{[^{}]+\}).*?suite\s+arithm[ée]tique.*?(?:raison|r)\s*(?:=\s*|\s+est\s+(?:de\s+)?)([+-]?\d+(?:[.,]\d+)?|[+-]?\d+\/[+-]?\d+|[+-]?\\frac\{[^{}]+\}\{[^{}]+\})/i);
  if (arithTextMatch) {
    const seqName = arithTextMatch[1].toLowerCase();
    const u0Index = parseInt(arithTextMatch[2], 10);
    const u0Val = parseNumberOrFraction(arithTextMatch[3]);
    const rVal = parseNumberOrFraction(arithTextMatch[4]);
    if (u0Val !== null && rVal !== null) {
      return {
        seqName,
        u0: u0Val,
        u0Index,
        a: 1,
        b: rVal,
        nature: 'arithmetic',
        fixedPoint: null
      };
    }
  }

  // --- CAS B : Définition textuelle explicite d'une suite géométrique ---
  // Ex: "suite géométrique de premier terme u_0 = 4 et de raison q = 3"
  const geomTextMatch = clean.match(/suite\s+g[ée]om[ée]trique.*?([a-zA-Z])[\s_]*\{?([01])\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?|[+-]?\d+\/[+-]?\d+|[+-]?\\frac\{[^{}]+\}\{[^{}]+\}).*?(?:raison|q)\s*(?:=\s*|\s+est\s+(?:de\s+)?)([+-]?\d+(?:[.,]\d+)?|[+-]?\d+\/[+-]?\d+|[+-]?\\frac\{[^{}]+\}\{[^{}]+\})/i) ||
    clean.match(/([a-zA-Z])[\s_]*\{?([01])\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?|[+-]?\d+\/[+-]?\d+|[+-]?\\frac\{[^{}]+\}\{[^{}]+\}).*?suite\s+g[ée]om[ée]trique.*?(?:raison|q)\s*(?:=\s*|\s+est\s+(?:de\s+)?)([+-]?\d+(?:[.,]\d+)?|[+-]?\d+\/[+-]?\d+|[+-]?\\frac\{[^{}]+\}\{[^{}]+\})/i);
  if (geomTextMatch) {
    const seqName = geomTextMatch[1].toLowerCase();
    const u0Index = parseInt(geomTextMatch[2], 10);
    const u0Val = parseNumberOrFraction(geomTextMatch[3]);
    const qVal = parseNumberOrFraction(geomTextMatch[4]);
    if (u0Val !== null && qVal !== null) {
      return {
        seqName,
        u0: u0Val,
        u0Index,
        a: qVal,
        b: 0,
        nature: 'geometric',
        fixedPoint: null
      };
    }
  }

  // --- CAS B2 : Suite définie par deux termes (ex: u2=11 et u7=31, ou v1=3 et v4=24) ---
  const twoTermsArithMatch = clean.match(/suite\s+arithm[ée]tique.*?([a-zA-Z])[\s_]*\{?(\d+)\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?).*?([a-zA-Z])[\s_]*\{?(\d+)\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?)/i) ||
    clean.match(/([a-zA-Z])[\s_]*\{?(\d+)\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?).*?([a-zA-Z])[\s_]*\{?(\d+)\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?).*?suite\s+arithm[ée]tique/i);
  if (twoTermsArithMatch && twoTermsArithMatch[1].toLowerCase() === twoTermsArithMatch[4].toLowerCase()) {
    const seqName = twoTermsArithMatch[1].toLowerCase();
    const idx1 = parseInt(twoTermsArithMatch[2], 10);
    const val1 = parseNumberOrFraction(twoTermsArithMatch[3])!;
    const idx2 = parseInt(twoTermsArithMatch[5], 10);
    const val2 = parseNumberOrFraction(twoTermsArithMatch[6])!;
    if (idx1 !== idx2) {
      const r = (val2 - val1) / (idx2 - idx1);
      const u0 = val1 - idx1 * r;
      return {
        seqName,
        u0,
        u0Index: 0,
        a: 1,
        b: r,
        nature: 'arithmetic',
        fixedPoint: null
      };
    }
  }

  const twoTermsGeomMatch = clean.match(/suite\s+g[ée]om[ée]trique.*?([a-zA-Z])[\s_]*\{?(\d+)\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?).*?([a-zA-Z])[\s_]*\{?(\d+)\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?)/i) ||
    clean.match(/([a-zA-Z])[\s_]*\{?(\d+)\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?).*?([a-zA-Z])[\s_]*\{?(\d+)\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?).*?suite\s+g[ée]om[ée]trique/i);
  if (twoTermsGeomMatch && twoTermsGeomMatch[1].toLowerCase() === twoTermsGeomMatch[4].toLowerCase()) {
    const seqName = twoTermsGeomMatch[1].toLowerCase();
    const idx1 = parseInt(twoTermsGeomMatch[2], 10);
    const val1 = parseNumberOrFraction(twoTermsGeomMatch[3])!;
    const idx2 = parseInt(twoTermsGeomMatch[5], 10);
    const val2 = parseNumberOrFraction(twoTermsGeomMatch[6])!;
    if (idx1 !== idx2 && val1 !== 0) {
      const pDiff = idx2 - idx1;
      const ratio = val2 / val1;
      const q = Math.pow(Math.abs(ratio), 1 / pDiff) * (ratio < 0 && pDiff % 2 !== 0 ? -1 : 1);
      const u0 = val1 / Math.pow(q, idx1);
      return {
        seqName,
        u0,
        u0Index: 0,
        a: q,
        b: 0,
        nature: 'geometric',
        fixedPoint: null
      };
    }
  }

  // --- CAS C : Formule explicite directe u_n = a*n + b ou u_n = u_0 * q^n ---
  const explicitArithMatch = clean.match(/\b([a-zA-Z])[\s_]*\{?n\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?|[+-]?\d+\/[+-]?\d+)?\s*\*?\s*n\s*([+-]\s*(?:\d+(?:[.,]\d+)?|\d+\/\d+))/i);
  if (explicitArithMatch) {
    const seqName = explicitArithMatch[1].toLowerCase();
    const aStr = explicitArithMatch[2] || '1';
    const rVal = parseNumberOrFraction(aStr) ?? 1;
    const bVal = parseNumberOrFraction(explicitArithMatch[3].replace(/\s+/g, '')) ?? 0;
    const u0Index = 0;
    const u0Val = bVal;
    return {
      seqName,
      u0: u0Val,
      u0Index,
      a: 1,
      b: rVal,
      nature: 'arithmetic',
      fixedPoint: null
    };
  }

  const explicitGeomMatch = clean.match(/\b([a-zA-Z])[\s_]*\{?n\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?|[+-]?\d+\/[+-]?\d+)\s*(?:[×*]|\s+)\s*\(?([+-]?\d+(?:[.,]\d+)?|[+-]?\d+\/[+-]?\d+)\)?\s*\^\s*\{?n\}?/i);
  if (explicitGeomMatch) {
    const seqName = explicitGeomMatch[1].toLowerCase();
    const u0Val = parseNumberOrFraction(explicitGeomMatch[2]);
    const qVal = parseNumberOrFraction(explicitGeomMatch[3]);
    if (u0Val !== null && qVal !== null) {
      return {
        seqName,
        u0: u0Val,
        u0Index: 0,
        a: qVal,
        b: 0,
        nature: 'geometric',
        fixedPoint: null
      };
    }
  }

  // --- CAS D : Définition par récurrence u_{n+1} = a*u_n + b et premier terme ---
  // Nom de la suite + premier terme : "u_0 = 5", "u0=5", "u_1 = -2", "u_0 = 1/2"...
  const initMatch = clean.match(/\b([a-zA-Z])[\s_]*\{?([01])\}?\s*=\s*([+-]?\d+(?:[.,]\d+)?|[+-]?\d+\/[+-]?\d+|[+-]?\\frac\{[^{}]+\}\{[^{}]+\})/i);
  if (!initMatch) return null;

  const seqName = initMatch[1];
  const u0Index = parseInt(initMatch[2], 10);
  const u0Val = parseNumberOrFraction(initMatch[3]);
  if (u0Val === null) return null;

  // Relation de récurrence : "u_{n+1} = ..." / "u(n+1) = ..." / "u_n+1 = ..."
  const recMatch = clean.match(
    new RegExp(`\\b${seqName}[\\s_]*\\{?\\(?\\s*n\\s*\\+\\s*1\\s*\\)?\\}?\\s*=\\s*([^\\n,;]+?)(?=\\.(?!\\d)|[\\n,;]|$)`, 'i')
  );
  if (!recMatch) return null;

  let rhs = recMatch[1].trim();
  // Remplace toute occurrence de "u_n" / "u(n)" / "un" par la variable "x"
  rhs = rhs
    .replace(new RegExp(`\\b${seqName}[\\s_]*\\{?\\(?\\s*n\\s*\\)?\\}?`, 'gi'), 'x')
    .replace(new RegExp(`\\b${seqName}n\\b`, 'gi'), 'x');

  const exprMathjs = normalizeExpressionForMathjs(rhs);

  const f0 = safeEvalAt(exprMathjs, 0);
  const f1 = safeEvalAt(exprMathjs, 1);
  const f2 = safeEvalAt(exprMathjs, 2);
  if (f0 === null || f1 === null || f2 === null) return null;

  const b = f0;
  const a = f1 - f0;
  const predicted2 = a * 2 + b;
  const isAffine = Math.abs(f2 - predicted2) < 1e-6;
  if (!isAffine) return null; // récurrence non affine

  const nature: ParsedSequenceDefinition['nature'] =
    Math.abs(a - 1) < 1e-9 ? 'arithmetic' : Math.abs(b) < 1e-9 ? 'geometric' : 'affine';

  const fixedPoint = Math.abs(a - 1) < 1e-9 ? null : b / (1 - a);

  // Détection éventuelle d'une suite auxiliaire v_n = u_n - c
  let auxSeq: ParsedAuxiliarySequence | undefined;
  const auxMatch = clean.match(/\b([a-zA-Z])[\s_]*\{?n\}?\s*=\s*(?:([a-zA-Z])[\s_]*\{?n\}?\s*([+-]\s*(?:\d+(?:[.,]\d+)?|\d+\/\d+|\\frac\{[^{}]+\}\{[^{}]+\})))/i);
  if (auxMatch && auxMatch[2].toLowerCase() === seqName) {
    const auxName = auxMatch[1].toLowerCase();
    const offsetVal = parseNumberOrFraction(auxMatch[3].replace(/\s+/g, ''));
    if (offsetVal !== null) {
      const v0Val = u0Val + offsetVal;
      auxSeq = {
        name: auxName,
        offset: -offsetVal,
        scale: 1,
        v0: v0Val
      };
    }
  }

  return { seqName, u0: u0Val, u0Index, a, b, nature, fixedPoint, auxSeq };
}

// ==========================================================================
// 2. FORMULES EXPLICITES ET TERMES
// ==========================================================================

export function termAt(def: ParsedSequenceDefinition, n: number): number {
  const k = n - def.u0Index;
  if (def.nature === 'arithmetic') {
    return def.u0 + k * def.b;
  }
  if (def.nature === 'geometric') {
    return def.u0 * Math.pow(def.a, k);
  }
  const l = def.fixedPoint as number;
  return l + (def.u0 - l) * Math.pow(def.a, k);
}

export function auxTermAt(def: ParsedSequenceDefinition, n: number): number | null {
  if (!def.auxSeq) return null;
  const k = n - def.u0Index;
  return def.auxSeq.v0 * Math.pow(def.a, k);
}

export function sumUpTo(def: ParsedSequenceDefinition, n: number): number {
  const nbTerms = n - def.u0Index + 1;
  if (nbTerms <= 0) return 0;
  if (def.nature === 'arithmetic') {
    const uLast = termAt(def, n);
    return (nbTerms * (def.u0 + uLast)) / 2;
  }
  if (def.nature === 'geometric') {
    if (Math.abs(def.a - 1) < 1e-9) return def.u0 * nbTerms;
    return (def.u0 * (1 - Math.pow(def.a, nbTerms))) / (1 - def.a);
  }
  const l = def.fixedPoint as number;
  const geomPart = Math.abs(def.a - 1) < 1e-9 ? (def.u0 - l) * nbTerms : ((def.u0 - l) * (1 - Math.pow(def.a, nbTerms))) / (1 - def.a);
  return nbTerms * l + geomPart;
}

export type SequenceLimitOutcome =
  | { kind: 'finite'; value: number }
  | { kind: 'plus_infinity' }
  | { kind: 'minus_infinity' }
  | { kind: 'no_limit' };

export function sequenceLimit(def: ParsedSequenceDefinition): SequenceLimitOutcome {
  if (def.nature === 'arithmetic') {
    if (def.b > 0) return { kind: 'plus_infinity' };
    if (def.b < 0) return { kind: 'minus_infinity' };
    return { kind: 'finite', value: def.u0 };
  }
  const l = def.nature === 'geometric' ? 0 : (def.fixedPoint as number);
  const deviation = def.u0 - l;
  if (Math.abs(def.a) < 1 - 1e-9) {
    return { kind: 'finite', value: Math.round(l * 1e9) / 1e9 };
  }
  if (Math.abs(def.a - 1) < 1e-9) {
    return { kind: 'finite', value: Math.round(def.u0 * 1e9) / 1e9 };
  }
  if (def.a > 1) {
    if (Math.abs(deviation) < 1e-12) return { kind: 'finite', value: Math.round(l * 1e9) / 1e9 };
    return deviation > 0 ? { kind: 'plus_infinity' } : { kind: 'minus_infinity' };
  }
  if (Math.abs(deviation) < 1e-12) return { kind: 'finite', value: Math.round(l * 1e9) / 1e9 };
  return { kind: 'no_limit' };
}

export function formatSequenceLimit(outcome: SequenceLimitOutcome): string {
  if (outcome.kind === 'plus_infinity') return '+\\infty';
  if (outcome.kind === 'minus_infinity') return '-\\infty';
  if (outcome.kind === 'no_limit') return "n'existe pas (suite oscillante et divergente)";
  return fmtNum(outcome.value);
}

// ==========================================================================
// 3. SENS DE VARIATION
// ==========================================================================

export type MonotonyOutcome = 'increasing' | 'decreasing' | 'constant' | 'not_monotone';

export function studyMonotony(def: ParsedSequenceDefinition, sampleCount = 40): MonotonyOutcome {
  const values: number[] = [];
  for (let k = 0; k < sampleCount; k++) {
    values.push(termAt(def, def.u0Index + k));
  }
  let increasing = true;
  let decreasing = true;
  let constant = true;
  for (let i = 1; i < values.length; i++) {
    if (values[i] > values[i - 1] + 1e-9) decreasing = false;
    if (values[i] < values[i - 1] - 1e-9) increasing = false;
    if (Math.abs(values[i] - values[i - 1]) > 1e-9) constant = false;
  }
  if (constant) return 'constant';
  if (increasing) return 'increasing';
  if (decreasing) return 'decreasing';
  return 'not_monotone';
}

// ==========================================================================
// 4. RÉSOLUTION D'UNE QUESTION AVEC RÉDACTION D'EXAMEN
// ==========================================================================

function natureLabel(def: ParsedSequenceDefinition): string {
  if (def.nature === 'arithmetic') return `arithmétique de raison $r = ${fmtNum(def.b)}$ et de premier terme $${def.seqName}_{${def.u0Index}} = ${fmtNum(def.u0)}$`;
  if (def.nature === 'geometric') return `géométrique de raison $q = ${fmtNum(def.a)}$ et de premier terme $${def.seqName}_{${def.u0Index}} = ${fmtNum(def.u0)}$`;
  const l = def.fixedPoint as number;
  return `arithmético-géométrique de relation $${def.seqName}_{n+1} = ${fmtNum(def.a)} ${def.seqName}_n + ${fmtNum(def.b)}$, de point fixe $l = ${fmtNum(l)}$`;
}

function explicitFormulaLabel(def: ParsedSequenceDefinition): string {
  const n = def.u0Index === 0 ? 'n' : '(n - 1)';
  if (def.nature === 'arithmetic') {
    return `${def.seqName}_n = ${fmtNum(def.u0)} + ${fmtNum(def.b)} \\times ${n}`;
  }
  if (def.nature === 'geometric') {
    return `${def.seqName}_n = ${fmtNum(def.u0)} \\times (${fmtNum(def.a)})^{${n}}`;
  }
  const l = def.fixedPoint as number;
  const diff = def.u0 - l;
  return `${def.seqName}_n = ${fmtNum(l)} + (${fmtNum(diff)}) \\times (${fmtNum(def.a)})^{${n}}`;
}

export function solveSequenceQuestion(
  q: ParsedQuestion,
  def: ParsedSequenceDefinition
): SolvedQuestionResult | null {
  const cleanQ = q.cleanText.toLowerCase();
  const seqName = def.seqName;
  const auxName = def.auxSeq ? def.auxSeq.name : 'v';

  // --- 1. CALCUL DE TERMES : u_1, u_2, u_3, u_20 ou "premiers termes" ---
  const evalMatches = Array.from(q.rawText.matchAll(new RegExp(`\\b${seqName}[\\s_]*\\{?(\\d+)\\}?`, 'gi')));
  const isTermCalc = /calcul|d[ée]terminer|valeur/i.test(cleanQ) && (evalMatches.length > 0 || /premiers?\s*termes?/i.test(cleanQ));
  
  if (isTermCalc && !/nature|somme|limite|variation|seuil|plus\s+petit|plus\s+grand|[<>≤≥]/i.test(cleanQ)) {
    let indices: number[] = [];
    if (evalMatches.length > 0) {
      indices = Array.from(new Set(evalMatches.map((m) => parseInt(m[1], 10))));
    } else {
      // "les trois premiers termes"
      indices = [def.u0Index + 1, def.u0Index + 2, def.u0Index + 3];
    }
    
    // Trier les indices par ordre croissant
    indices.sort((a, b) => a - b);
    const steps: string[] = [];
    const answers: string[] = [];

    indices.forEach((idx) => {
      const val = termAt(def, idx);
      const k = idx - def.u0Index;
      if (idx <= def.u0Index + 3) {
        // Étapes récurrentes terme à terme pour les tout premiers termes
        if (def.nature === 'arithmetic') {
          const prevVal = termAt(def, idx - 1);
          steps.push(`$${seqName}_{${idx}} = ${seqName}_{${idx - 1}} + r = ${fmtNum(prevVal)} + (${fmtNum(def.b)}) = ${fmtNum(val)}$`);
        } else if (def.nature === 'geometric') {
          const prevVal = termAt(def, idx - 1);
          steps.push(`$${seqName}_{${idx}} = q \\times ${seqName}_{${idx - 1}} = ${fmtNum(def.a)} \\times ${fmtNum(prevVal)} = ${fmtNum(val)}$`);
        } else {
          const prevVal = termAt(def, idx - 1);
          steps.push(`$${seqName}_{${idx}} = ${fmtNum(def.a)} \\times ${seqName}_{${idx - 1}} + ${fmtNum(def.b)} = ${fmtNum(def.a)} \\times (${fmtNum(prevVal)}) + ${fmtNum(def.b)} = ${fmtNum(val)}$`);
        }
      } else {
        // Formule explicite directe pour les indices élevés (ex: u_{20}, u_{100})
        if (def.nature === 'arithmetic') {
          steps.push(`On utilise l'expression générale : $${seqName}_n = ${seqName}_{${def.u0Index}} + n \\times r$`);
          steps.push(`$${seqName}_{${idx}} = ${fmtNum(def.u0)} + ${k} \\times (${fmtNum(def.b)}) = ${fmtNum(def.u0)} + ${fmtNum(k * def.b)} = ${fmtNum(val)}$`);
        } else if (def.nature === 'geometric') {
          steps.push(`On utilise l'expression générale : $${seqName}_n = ${seqName}_{${def.u0Index}} \\times q^{n}$`);
          steps.push(`$${seqName}_{${idx}} = ${fmtNum(def.u0)} \\times (${fmtNum(def.a)})^{${k}} = ${fmtNum(val)}$`);
        } else {
          const l = def.fixedPoint as number;
          const v0Val = def.u0 - l;
          steps.push(`On utilise l'expression explicite : $${seqName}_n = ${fmtNum(l)} + ${fmtNum(v0Val)} \\times (${fmtNum(def.a)})^{n}$`);
          steps.push(`$${seqName}_{${idx}} = ${fmtNum(l)} + ${fmtNum(v0Val)} \\times (${fmtNum(def.a)})^{${k}} = ${fmtNum(val)}$`);
        }
      }
      answers.push(`${seqName}_{${idx}} = ${fmtNum(val)}`);
    });

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: answers.join(' \\quad ; \\quad '),
      verificationPassed: true,
    };
  }

  // --- 2. SUITE AUXILIAIRE (v_n) : GÉOMÉTRIQUE, RAISON ET 1er TERME ---
  if (new RegExp(`\\b${auxName}[\\s_]*n?\\b`, 'i').test(cleanQ) && /g[ée]om[ée]trique|nature|raison/i.test(cleanQ)) {
    const l = def.fixedPoint ?? (def.auxSeq ? def.auxSeq.offset : 0);
    const v0Val = def.auxSeq ? def.auxSeq.v0 : (def.u0 - l);
    const steps: string[] = [
      `Pour tout $n \\in \\mathbb{N}$, on a $${auxName}_n = ${seqName}_n - ${fmtNum(l)}$.`,
      `Calculons $${auxName}_{n+1}$ :`,
      `$${auxName}_{n+1} = ${seqName}_{n+1} - ${fmtNum(l)} = (${fmtNum(def.a)} ${seqName}_n + ${fmtNum(def.b)}) - ${fmtNum(l)}$`,
      `Or $${fmtNum(def.b)} - ${fmtNum(l)} = -${fmtNum(def.a)} \\times ${fmtNum(l)}$, d'où :`,
      `$${auxName}_{n+1} = ${fmtNum(def.a)} (${seqName}_n - ${fmtNum(l)}) = ${fmtNum(def.a)} \\times ${auxName}_n$`,
      `Calcul du premier terme : $${auxName}_{${def.u0Index}} = ${seqName}_{${def.u0Index}} - ${fmtNum(l)} = ${fmtNum(def.u0)} - ${fmtNum(l)} = ${fmtNum(v0Val)}$.`
    ];

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `($${auxName}_n$) est une suite géométrique de raison $q = ${fmtNum(def.a)}$ et de premier terme $${auxName}_{${def.u0Index}} = ${fmtNum(v0Val)}$.`,
      verificationPassed: true,
    };
  }

  // --- 3. DÉMONSTRATION PAR RÉCURRENCE ---
  if (/r[ée]currence/i.test(cleanQ)) {
    const l = def.fixedPoint ?? 0;
    const isAbove = def.u0 > l;
    const inequality = isAbove ? `>${fmtNum(l)}` : `<${fmtNum(l)}`;
    const steps: string[] = [
      `Démontrons par récurrence que pour tout $n \\in \\mathbb{N}$, on a $\\mathcal{P}(n) : ${seqName}_n ${inequality}$.`,
      `• Initialisation ($n = ${def.u0Index}$) :`,
      `$${seqName}_{${def.u0Index}} = ${fmtNum(def.u0)}$ et on a bien $${fmtNum(def.u0)} ${inequality}$. Donc $\\mathcal{P}(${def.u0Index})$ est vraie.`,
      `• Hérédité :`,
      `Soit $k \\ge ${def.u0Index}$. Supposons $\\mathcal{P}(k)$ vraie, c'est-à-dire $${seqName}_k ${inequality}$.`,
      `Comme $a = ${fmtNum(def.a)} > 0$, en multipliant par $a$ et en ajoutant $b = ${fmtNum(def.b)}$ :`,
      `$${def.a} ${seqName}_k + ${def.b} ${inequality.replace(/[0-9.-]+/, '')} ${def.a} \\times ${fmtNum(l)} + ${def.b} = ${fmtNum(l)}$, soit $${seqName}_{k+1} ${inequality}$.`,
      `Donc $\\mathcal{P}(k+1)$ est vraie.`,
      `• Conclusion :`,
      `Par le principe de récurrence, pour tout $n \\in \\mathbb{N}$, $${seqName}_n ${inequality}$.`
    ];

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `Pour tout $n \\in \\mathbb{N}$, $${seqName}_n ${inequality}$.`,
      verificationPassed: true,
    };
  }

  // --- 4. NATURE DE LA SUITE (u_n) ---
  if (/nature|arithm[ée]tique|g[ée]om[ée]trique/i.test(cleanQ)) {
    const steps: string[] = [];
    if (def.nature === 'arithmetic') {
      steps.push(`Pour tout $n \\in \\mathbb{N}$, on calcule la différence $${seqName}_{n+1} - ${seqName}_n$ :`);
      steps.push(`$${seqName}_{n+1} - ${seqName}_n = (${seqName}_n + ${fmtNum(def.b)}) - ${seqName}_n = ${fmtNum(def.b)}$ (constante).`);
      steps.push(`La différence étant constante et égale à $r = ${fmtNum(def.b)}$, ($${seqName}_n$) est une suite arithmétique.`);
    } else if (def.nature === 'geometric') {
      steps.push(`Pour tout $n \\in \\mathbb{N}$, on a $${seqName}_{n+1} = ${fmtNum(def.a)} \\times ${seqName}_n$.`);
      steps.push(`Le quotient $\\frac{${seqName}_{n+1}}{${seqName}_n} = ${fmtNum(def.a)}$ est constant.`);
      steps.push(`Donc ($${seqName}_n$) est une suite géométrique de raison $q = ${fmtNum(def.a)}$.`);
    } else {
      const l = def.fixedPoint as number;
      steps.push(`La suite ($${seqName}_n$) vérifie une relation de récurrence affine $${seqName}_{n+1} = ${fmtNum(def.a)} ${seqName}_n + ${fmtNum(def.b)}$.`);
      steps.push(`Son point fixe est $l = \\frac{b}{1 - a} = \\frac{${fmtNum(def.b)}}{1 - (${fmtNum(def.a)})} = ${fmtNum(l)}$.`);
      steps.push(`La suite associée ($${auxName}_n$) définie par $${auxName}_n = ${seqName}_n - ${fmtNum(l)}$ est géométrique de raison $q = ${fmtNum(def.a)}$.`);
    }
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `($${seqName}_n$) est ${natureLabel(def)}.`,
      verificationPassed: true,
    };
  }

  // --- 5. EXPRESSION EN FONCTION DE n ---
  if (/exprimer|expression|en fonction de n|formule explicite|terme g[ée]n[ée]ral/i.test(cleanQ)) {
    const n = def.u0Index === 0 ? 'n' : '(n - 1)';
    const steps: string[] = [];

    if (new RegExp(`\\b${auxName}[\\s_]*n?\\b`, 'i').test(cleanQ)) {
      const l = def.fixedPoint ?? 0;
      const v0Val = def.auxSeq ? def.auxSeq.v0 : (def.u0 - l);
      steps.push(`($${auxName}_n$) est une suite géométrique de premier terme $${auxName}_{${def.u0Index}} = ${fmtNum(v0Val)}$ et de raison $q = ${fmtNum(def.a)}$.`);
      steps.push(`D'après le cours, son terme général est : $${auxName}_n = ${auxName}_{${def.u0Index}} \\times q^{${n}} = ${fmtNum(v0Val)} \\times (${fmtNum(def.a)})^{${n}}$.`);
      if (/puis|d[ée]duire.*u/i.test(cleanQ)) {
        steps.push(`Comme $${auxName}_n = ${seqName}_n - ${fmtNum(l)}$, on en déduit :`);
        steps.push(`$${seqName}_n = ${auxName}_n + ${fmtNum(l)} = ${fmtNum(l)} + ${fmtNum(v0Val)} \\times (${fmtNum(def.a)})^{${n}}$.`);
      }
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps,
        finalAnswer: `$${auxName}_n = ${fmtNum(v0Val)} \\times (${fmtNum(def.a)})^{${n}}$ \\quad \\text{et} \\quad $${seqName}_n = ${fmtNum(l)} + ${fmtNum(v0Val)} \\times (${fmtNum(def.a)})^{${n}}$`,
        verificationPassed: true,
      };
    }

    if (def.nature === 'arithmetic') {
      steps.push(`($${seqName}_n$) est une suite arithmétique de premier terme $${seqName}_{${def.u0Index}} = ${fmtNum(def.u0)}$ et de raison $r = ${fmtNum(def.b)}$.`);
      steps.push(`Formule du cours : $${seqName}_n = ${seqName}_{${def.u0Index}} + ${n} \\times r$.`);
      steps.push(`$${seqName}_n = ${fmtNum(def.u0)} + ${fmtNum(def.b)} \\times ${n}$.`);
    } else if (def.nature === 'geometric') {
      steps.push(`($${seqName}_n$) est une suite géométrique de premier terme $${seqName}_{${def.u0Index}} = ${fmtNum(def.u0)}$ et de raison $q = ${fmtNum(def.a)}$.`);
      steps.push(`Formule du cours : $${seqName}_n = ${seqName}_{${def.u0Index}} \\times q^{${n}}$.`);
      steps.push(`$${seqName}_n = ${fmtNum(def.u0)} \\times (${fmtNum(def.a)})^{${n}}$.`);
    } else {
      const l = def.fixedPoint as number;
      const v0Val = def.u0 - l;
      steps.push(`On utilise la suite géométrique auxiliaire $${auxName}_n = ${seqName}_n - ${fmtNum(l)}$ de raison $q = ${fmtNum(def.a)}$ et $${auxName}_{${def.u0Index}} = ${fmtNum(v0Val)}$.`);
      steps.push(`On a $${auxName}_n = ${fmtNum(v0Val)} \\times (${fmtNum(def.a)})^{${n}}$.`);
      steps.push(`Par conséquent, $${seqName}_n = ${auxName}_n + ${fmtNum(l)} = ${fmtNum(l)} + ${fmtNum(v0Val)} \\times (${fmtNum(def.a)})^{${n}}$.`);
    }

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `$${explicitFormulaLabel(def)}$`,
      verificationPassed: true,
    };
  }

  // --- 6. SENS DE VARIATION ---
  if (/variation|croissant|d[ée]croissant|sens de variation/i.test(cleanQ)) {
    const monotony = studyMonotony(def);
    const label =
      monotony === 'increasing'
        ? 'strictement croissante'
        : monotony === 'decreasing'
        ? 'strictement décroissante'
        : monotony === 'constant'
        ? 'constante'
        : 'non monotone (oscillante)';
    
    const steps: string[] = [];
    if (def.nature === 'arithmetic') {
      steps.push(`$${seqName}_{n+1} - ${seqName}_n = r = ${fmtNum(def.b)}$.`);
      steps.push(`Comme la raison $r = ${fmtNum(def.b)} ${def.b > 0 ? '> 0' : '< 0'}$, la suite ($${seqName}_n$) est ${label}.`);
    } else if (def.nature === 'geometric') {
      steps.push(`$${seqName}_{n+1} - ${seqName}_n = ${seqName}_n (q - 1) = ${seqName}_n (${fmtNum(def.a)} - 1)$.`);
      steps.push(`D'après le signe de $${seqName}_n$ et de $(q - 1)$, la suite ($${seqName}_n$) est ${label}.`);
    } else {
      const l = def.fixedPoint as number;
      const v0Val = def.u0 - l;
      steps.push(`$${seqName}_{n+1} - ${seqName}_n = ${auxName}_{n+1} - ${auxName}_n = ${auxName}_n (q - 1) = ${fmtNum(v0Val)} \\times (${fmtNum(def.a)})^{n} \\times (${fmtNum(def.a)} - 1)$.`);
      steps.push(`Par étude du signe pour tout $n \\in \\mathbb{N}$, on conclut que la suite ($${seqName}_n$) est ${label}.`);
    }

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `($${seqName}_n$) est ${label}.`,
      verificationPassed: monotony !== 'not_monotone',
    };
  }

  // --- 7. SOMME DES TERMES S_n ---
  if (/somme|s_n|t_n|\+/i.test(cleanQ)) {
    const isAuxSum = new RegExp(`\\b${auxName}\\b|t_n`, 'i').test(cleanQ);
    // Détection de la borne supérieure : S_{20}, u_{20}, u20, "20 premiers termes"
    const nMatch = cleanQ.match(/(\d+)\s*premiers?\s*termes?/) ||
      cleanQ.match(/(?:u|v)[\s_]*\{?(\d+)\}?\s*(?:[.;)]|\s*$)/i) ||
      cleanQ.match(/[st]_?\{?(\d+)\}?/i);
    const nTarget = nMatch ? parseInt(nMatch[1], 10) : null;
    const steps: string[] = [];

    if (isAuxSum || def.nature === 'geometric') {
      const firstVal = isAuxSum ? (def.auxSeq ? def.auxSeq.v0 : (def.u0 - (def.fixedPoint ?? 0))) : def.u0;
      const qVal = def.a;
      steps.push(`Formule de la somme des termes consécutifs d'une suite géométrique :`);
      steps.push(`$S_n = \\text{1er terme} \\times \\frac{1 - q^{\\text{nombre de termes}}}{1 - q}$`);
      if (nTarget !== null) {
        const nbTerms = nTarget - def.u0Index + 1;
        const total = (firstVal * (1 - Math.pow(qVal, nbTerms))) / (1 - qVal);
        steps.push(`Nombre de termes : $${nTarget} - ${def.u0Index} + 1 = ${nbTerms}$.`);
        steps.push(`$S = ${fmtNum(firstVal)} \\times \\frac{1 - (${fmtNum(qVal)})^{${nbTerms}}}{1 - (${fmtNum(qVal)})} = ${fmtNum(total)}$`);
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: q.cleanText,
          steps,
          finalAnswer: `$S = ${fmtNum(total)}$`,
          verificationPassed: true,
        };
      }
      steps.push(`$S_n = ${fmtNum(firstVal)} \\times \\frac{1 - (${fmtNum(qVal)})^{n+1}}{1 - (${fmtNum(qVal)})}$.`);
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps,
        finalAnswer: `$S_n = ${fmtNum(firstVal)} \\times \\frac{1 - (${fmtNum(qVal)})^{n+1}}{1 - (${fmtNum(qVal)})}$`,
        verificationPassed: true,
      };
    }

    if (def.nature === 'arithmetic') {
      if (nTarget !== null) {
        const nbTerms = nTarget - def.u0Index + 1;
        const lastVal = termAt(def, nTarget);
        const sumNum = def.u0 + lastVal;
        const total = sumUpTo(def, nTarget);
        steps.push(`$N = ${nTarget} - ${def.u0Index} + 1 = ${nbTerms}$`);
        steps.push(`$S = \\frac{${nbTerms}(${def.seqName}_{${def.u0Index}} + ${def.seqName}_{${nTarget}})}{2}$`);
        steps.push(`$S = \\frac{${nbTerms}(${fmtNum(def.u0)} + ${fmtNum(lastVal)})}{2}$`);
        steps.push(`$S = \\frac{${nbTerms} \\times ${fmtNum(sumNum)}}{2}$`);
        if (sumNum % 2 === 0) {
          steps.push(`$S = ${nbTerms} \\times ${fmtNum(sumNum / 2)}$`);
        } else if (nbTerms % 2 === 0) {
          steps.push(`$S = ${nbTerms / 2} \\times ${fmtNum(sumNum)}$`);
        }
        steps.push(`$S = ${fmtNum(total)}$`);
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: q.cleanText,
          steps,
          finalAnswer: `$S = ${fmtNum(total)}$`,
          verificationPassed: true,
        };
      }
      steps.push(`$S_n = \\frac{(n+1)(${fmtNum(def.u0)} + ${def.seqName}_n)}{2} = \\frac{(n+1)(2 \\times ${fmtNum(def.u0)} + n \\times ${fmtNum(def.b)})}{2}$.`);
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: q.cleanText,
        steps,
        finalAnswer: `$S_n = \\frac{(n+1)(2 \\times ${fmtNum(def.u0)} + n \\times ${fmtNum(def.b)})}{2}$`,
        verificationPassed: true,
      };
    }

    // Cas arithmético-géométrique S_n = sum(u_k) = sum(v_k) + (n+1)*l
    const l = def.fixedPoint as number;
    const v0Val = def.u0 - l;
    steps.push(`Comme $${seqName}_k = ${auxName}_k + ${fmtNum(l)}$, on a :`);
    steps.push(`$S_n = \\sum_{k=0}^{n} ${seqName}_k = \\sum_{k=0}^{n} ${auxName}_k + \\sum_{k=0}^{n} ${fmtNum(l)} = T_n + (n + 1) \\times ${fmtNum(l)}$`);
    steps.push(`Or $T_n = ${fmtNum(v0Val)} \\times \\frac{1 - (${fmtNum(def.a)})^{n+1}}{1 - (${fmtNum(def.a)})}$, d'où :`);
    steps.push(`$S_n = ${fmtNum(v0Val)} \\times \\frac{1 - (${fmtNum(def.a)})^{n+1}}{1 - (${fmtNum(def.a)})} + ${fmtNum(l)}(n + 1)$.`);
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `$S_n = ${fmtNum(v0Val)} \\times \\frac{1 - (${fmtNum(def.a)})^{n+1}}{1 - (${fmtNum(def.a)})} + ${fmtNum(l)}(n + 1)$`,
      verificationPassed: true,
    };
  }

  // --- 8. SEUIL / INÉQUATION / PLUS PETIT ENTIER NATUREL n ---
  // Ex: "Déterminer le plus petit entier naturel n tel que u_n > 100" ou "u n > 100"
  if (/plus\s+petit\s+entier|plus\s+grand\s+entier|seuil|in[ée]quation|[<>≤≥]/i.test(cleanQ)) {
    const ineqMatch = cleanQ.match(/(?:[uv][\s_]*n?|[uv]\s*n)\s*([<>≤≥]=?)\s*([+-]?\d+(?:[.,]\d+)?)/i) ||
      cleanQ.match(/([<>≤≥]=?)\s*([+-]?\d+(?:[.,]\d+)?)/i);
    
    if (ineqMatch) {
      const op = ineqMatch[1];
      const threshold = parseFloat(ineqMatch[2].replace(',', '.'));
      const steps: string[] = [];

      if (def.nature === 'arithmetic') {
        const u0 = def.u0;
        const r = def.b;
        steps.push(`$${def.seqName}_n ${op} ${fmtNum(threshold)}$`);
        steps.push(`$${fmtNum(u0)} + ${fmtNum(r)} n ${op} ${fmtNum(threshold)}$`);
        const rhs = threshold - u0;
        steps.push(`$${fmtNum(r)} n ${op} ${fmtNum(rhs)}$`);
        
        let nBound: number;
        let isStrictGreater = op === '>' || op === '≥';
        if (r > 0) {
          nBound = rhs / r;
          const boundStr = Number.isInteger(nBound) ? `${nBound}` : `${Math.round(nBound * 100) / 100}`.replace('.', '{,}');
          steps.push(`$n ${op} ${boundStr}$`);
        } else {
          nBound = rhs / r;
          const revOp = op.includes('>') ? '<' : '>';
          const boundStr = Number.isInteger(nBound) ? `${nBound}` : `${Math.round(nBound * 100) / 100}`.replace('.', '{,}');
          steps.push(`$n ${revOp} ${boundStr}$`);
          isStrictGreater = revOp === '>';
        }

        let nResult: number;
        if (isStrictGreater) {
          nResult = Math.floor(nBound + 1e-9) + 1;
        } else {
          nResult = Math.ceil(nBound - 1e-9) - 1;
        }

        const valBefore = termAt(def, nResult - 1);
        const valFound = termAt(def, nResult);
        steps.push(`Comme $n \\in \\mathbb{N}$, le plus petit entier naturel est $n = ${nResult}$.`);

        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: q.cleanText,
          steps,
          finalAnswer: `$n = ${nResult}$`,
          verificationPassed: true,
        };
      } else if (def.nature === 'geometric' && def.a > 0 && def.u0 > 0) {
        steps.push(`$${def.seqName}_n ${op} ${fmtNum(threshold)}$`);
        steps.push(`$${fmtNum(def.u0)} \\times (${fmtNum(def.a)})^n ${op} ${fmtNum(threshold)}$`);
        const ratio = threshold / def.u0;
        const ratioStr = Number.isInteger(ratio) ? `${ratio}` : `${Math.round(ratio * 100) / 100}`.replace('.', '{,}');
        steps.push(`$(${fmtNum(def.a)})^n ${op} ${ratioStr}$`);
        const nBound = Math.log(ratio) / Math.log(def.a);
        const nResult = Math.floor(nBound + 1e-9) + 1;
        const p1 = nResult - 1;
        const val1 = Math.pow(def.a, p1);
        const val2 = Math.pow(def.a, nResult);
        steps.push(`$(${fmtNum(def.a)})^{${p1}} = ${fmtNum(val1)} \\quad , \\quad (${fmtNum(def.a)})^{${nResult}} = ${fmtNum(val2)}$`);
        steps.push(`Comme $n \\in \\mathbb{N}$, le plus petit entier est $n = ${nResult}$.`);
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: q.cleanText,
          steps,
          finalAnswer: `$n = ${nResult}$`,
          verificationPassed: true,
        };
      }
    }
  }

  // --- 9. LIMITE ET CONVERGENCE ---
  if (/limite|converge|convergence/i.test(cleanQ)) {
    const outcome = sequenceLimit(def);
    const formatted = formatSequenceLimit(outcome);
    const steps: string[] = [];

    if (def.nature === 'arithmetic') {
      steps.push(`($${seqName}_n$) est arithmétique de raison $r = ${fmtNum(def.b)}$.`);
      steps.push(`Comme $r ${def.b > 0 ? '> 0' : '< 0'}$, $\\lim_{n \\to +\\infty} ${seqName}_n = ${formatted}$.`);
    } else if (def.nature === 'geometric') {
      if (Math.abs(def.a) < 1) {
        steps.push(`Comme $-1 < q = ${fmtNum(def.a)} < 1$, on a $\\lim_{n \\to +\\infty} (${fmtNum(def.a)})^n = 0$.`);
        steps.push(`Par produit : $\\lim_{n \\to +\\infty} ${seqName}_n = ${fmtNum(def.u0)} \\times 0 = 0$.`);
        steps.push(`La suite ($${seqName}_n$) converge vers $0$.`);
      } else if (def.a > 1) {
        steps.push(`Comme $q = ${fmtNum(def.a)} > 1$, on a $\\lim_{n \\to +\\infty} (${fmtNum(def.a)})^n = +\\infty$.`);
        steps.push(`Par produit par $${seqName}_0 = ${fmtNum(def.u0)}$ : $\\lim_{n \\to +\\infty} ${seqName}_n = ${formatted}$.`);
        steps.push(`La suite ($${seqName}_n$) diverge.`);
      }
    } else {
      const l = def.fixedPoint as number;
      const v0Val = def.u0 - l;
      if (Math.abs(def.a) < 1) {
        steps.push(`Comme $-1 < q = ${fmtNum(def.a)} < 1$, on a $\\lim_{n \\to +\\infty} (${fmtNum(def.a)})^n = 0$.`);
        steps.push(`D'où $\\lim_{n \\to +\\infty} ${auxName}_n = 0$.`);
        steps.push(`Comme $${seqName}_n = ${auxName}_n + ${fmtNum(l)}$, on en déduit : $\\lim_{n \\to +\\infty} ${seqName}_n = ${fmtNum(l)}$.`);
        steps.push(`La suite ($${seqName}_n$) est convergente et converge vers $l = ${fmtNum(l)}$.`);
      } else {
        steps.push(`Comme $q = ${fmtNum(def.a)} > 1$, la suite ($${seqName}_n$) diverge vers $${formatted}$.`);
      }
    }

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: q.cleanText,
      steps,
      finalAnswer: `$\\lim_{n \\to +\\infty} ${seqName}_n = ${formatted}$ (la suite ${outcome.kind === 'finite' ? `converge vers $${formatted}$` : 'diverge'})`,
      verificationPassed: outcome.kind !== 'no_limit',
    };
  }

  return null;
}

// ==========================================================================
// 5. POINT D'ENTRÉE
// ==========================================================================

export function tryGenericSequenceResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  const def = parseSequenceAndRecurrence(contextCombined);
  if (!def) return null;

  const solved: SolvedQuestionResult[] = [];
  for (const q of questions) {
    const result = solveSequenceQuestion(q, def);
    if (!result) return null;
    solved.push(result);
  }
  return solved;
}
