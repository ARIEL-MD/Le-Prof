/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LA GÉOMÉTRIE VECTORIELLE (SANS IA)
 * =====================================================================
 *
 * Couvre les exercices de géométrie repérée usuels du secondaire, en 2D
 * (plan) comme en 3D (espace), à partir de points donnés par leurs
 * coordonnées explicites — ex: A(1;2), B(-3;0;5). Toute l'arithmétique
 * (vecteurs, normes, produit scalaire, produit vectoriel, colinéarité,
 * milieu, barycentre) est EXACTE (pas d'approximation), calculée directement
 * à partir des coordonnées extraites de l'énoncé.
 *
 * Hors périmètre (volontairement, pour ne pas risquer une réponse fausse
 * sur une mauvaise interprétation géométrique) : équations de droites/plans,
 * intersections, angles en degrés, projections, sections de solides.
 */

import { ParsedQuestion, SolvedQuestionResult } from './types';

type Vector = number[]; // 2 ou 3 coordonnées

// ==========================================================================
// 1. EXTRACTION DES POINTS DÉFINIS DANS L'ÉNONCÉ
// ==========================================================================

export function parsePoints(fullText: string): Map<string, Vector> {
  const clean = fullText.replace(/[−–—]/g, '-');
  const points = new Map<string, Vector>();
  const pattern = /\b([A-Z])\s*\(\s*(-?\d+(?:[.,]\d+)?)\s*[;,]\s*(-?\d+(?:[.,]\d+)?)\s*(?:[;,]\s*(-?\d+(?:[.,]\d+)?))?\s*\)/g;
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(clean)) !== null) {
    const name = m[1];
    const coords: Vector = [parseFloat(m[2].replace(',', '.')), parseFloat(m[3].replace(',', '.'))];
    if (m[4] !== undefined) coords.push(parseFloat(m[4].replace(',', '.')));
    points.set(name, coords);
  }
  return points;
}

// ==========================================================================
// 2. ARITHMÉTIQUE VECTORIELLE EXACTE
// ==========================================================================

function vectorBetween(P: Vector, Q: Vector): Vector {
  return P.map((_, i) => Q[i] - P[i]);
}

function norm(v: Vector): number {
  return Math.sqrt(v.reduce((s, c) => s + c * c, 0));
}

function dot(v1: Vector, v2: Vector): number {
  return v1.reduce((s, c, i) => s + c * v2[i], 0);
}

function midpoint(P: Vector, Q: Vector): Vector {
  return P.map((c, i) => (c + Q[i]) / 2);
}

/** Déterminant 2D (aire signée) — nul si les vecteurs sont colinéaires. */
function det2D(v1: Vector, v2: Vector): number {
  return v1[0] * v2[1] - v1[1] * v2[0];
}

/** Produit vectoriel 3D. */
function cross3D(v1: Vector, v2: Vector): Vector {
  return [
    v1[1] * v2[2] - v1[2] * v2[1],
    v1[2] * v2[0] - v1[0] * v2[2],
    v1[0] * v2[1] - v1[1] * v2[0],
  ];
}

function isZeroVector(v: Vector, eps = 1e-9): boolean {
  return v.every((c) => Math.abs(c) < eps);
}

function fmtNum(n: number): string {
  const r = Math.round(n * 1e6) / 1e6;
  return Number.isInteger(r) ? `${r}` : `${r}`;
}

function fmtVector(v: Vector): string {
  return `(${v.map(fmtNum).join(' ; ')})`;
}

// ==========================================================================
// 3. RÉSOLUTION D'UNE QUESTION DONNÉE
// ==========================================================================

/** Extrait toutes les paires de lettres MAJUSCULES consécutives (ex: "AB") réellement présentes dans le texte, dans l'ordre d'apparition, en ne conservant que celles dont les deux points sont connus. */
function extractKnownPointPairs(text: string, points: Map<string, Vector>): [string, string][] {
  const pairs: [string, string][] = [];
  const matches = Array.from(text.matchAll(/\b([A-Z])([A-Z])\b/g));
  for (const m of matches) {
    if (points.has(m[1]) && points.has(m[2])) pairs.push([m[1], m[2]]);
  }
  return pairs;
}

/** Extrait toutes les lettres MAJUSCULES isolées (noms de points seuls, ex: dans "A, B et C") réellement connues. */
function extractKnownSinglePoints(text: string, points: Map<string, Vector>): string[] {
  const matches = Array.from(text.matchAll(/\b([A-Z])\b/g));
  const names: string[] = [];
  for (const m of matches) {
    if (points.has(m[1])) names.push(m[1]);
  }
  return names;
}

export function solveGeometryQuestion(
  q: ParsedQuestion,
  points: Map<string, Vector>
): SolvedQuestionResult | null {
  const cleanQ = q.cleanText;
  const lowerQ = cleanQ.toLowerCase();
  const getPoint = (name: string): Vector | undefined => points.get(name);

  // --- MILIEU D'UN SEGMENT ---
  if (/milieu/i.test(lowerQ)) {
    const pairs = extractKnownPointPairs(cleanQ, points);
    if (pairs.length === 0) return null;
    const [A, B] = pairs[0];
    const P = getPoint(A)!;
    const Q = getPoint(B)!;
    if (P.length !== Q.length) return null;
    const M = midpoint(P, Q);
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`Milieu de [${A}${B}] : M = \\left(\\dfrac{x_${A}+x_${B}}{2} ; \\dfrac{y_${A}+y_${B}}{2}\\right)`],
      finalAnswer: `M = ${fmtVector(M)}`,
      verificationPassed: true,
    };
  }

  // --- NORME / LONGUEUR / DISTANCE ---
  if (/norme|longueur|distance/i.test(lowerQ)) {
    const pairs = extractKnownPointPairs(cleanQ, points);
    if (pairs.length === 0) return null;
    const [A, B] = pairs[0];
    const P = getPoint(A)!;
    const Q = getPoint(B)!;
    if (P.length !== Q.length) return null;
    const v = vectorBetween(P, Q);
    const n = norm(v);
    const sumSquares = v.map((c) => `(${fmtNum(c)})^2`).join('+');
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`${A}${B} = \\sqrt{${sumSquares}}`],
      finalAnswer: `${A}${B} = ${fmtNum(n)}`,
      verificationPassed: true,
    };
  }

  // --- PRODUIT SCALAIRE (avant "coordonnées du vecteur" pour éviter un conflit) ---
  if (/produit\s+scalaire/i.test(lowerQ)) {
    const pairs = extractKnownPointPairs(cleanQ, points);
    if (pairs.length < 2) return null;
    const [[A, B], [C, D]] = pairs;
    const P1 = getPoint(A)!, Q1 = getPoint(B)!, P2 = getPoint(C)!, Q2 = getPoint(D)!;
    if (P1.length !== Q1.length || P1.length !== P2.length) return null;
    const v1 = vectorBetween(P1, Q1);
    const v2 = vectorBetween(P2, Q2);
    const result = dot(v1, v2);
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [
        `\\overrightarrow{${A}${B}} = ${fmtVector(v1)} \\quad ; \\quad \\overrightarrow{${C}${D}} = ${fmtVector(v2)}`,
        `\\overrightarrow{${A}${B}} \\cdot \\overrightarrow{${C}${D}} = ${v1.map((c, i) => `(${fmtNum(c)})\\times(${fmtNum(v2[i])})`).join('+')}`,
      ],
      finalAnswer: `${fmtNum(result)}`,
      verificationPassed: true,
    };
  }

  // --- ORTHOGONALITÉ ---
  if (/orthogon/i.test(lowerQ)) {
    const pairs = extractKnownPointPairs(cleanQ, points);
    if (pairs.length < 2) return null;
    const [[A, B], [C, D]] = pairs;
    const P1 = getPoint(A)!, Q1 = getPoint(B)!, P2 = getPoint(C)!, Q2 = getPoint(D)!;
    if (P1.length !== Q1.length || P1.length !== P2.length) return null;
    const v1 = vectorBetween(P1, Q1);
    const v2 = vectorBetween(P2, Q2);
    const result = dot(v1, v2);
    const isOrtho = Math.abs(result) < 1e-9;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`\\overrightarrow{${A}${B}} \\cdot \\overrightarrow{${C}${D}} = ${fmtNum(result)}`],
      finalAnswer: isOrtho
        ? `Le produit scalaire est nul : ${A}${B} et ${C}${D} sont orthogonaux.`
        : `Le produit scalaire vaut ${fmtNum(result)} (non nul) : ${A}${B} et ${C}${D} ne sont pas orthogonaux.`,
      verificationPassed: true,
    };
  }

  // --- COORDONNÉES D'UN VECTEUR ---
  if (/vecteur/i.test(lowerQ) && !/produit\s+scalaire/i.test(lowerQ)) {
    const pairs = extractKnownPointPairs(cleanQ, points);
    if (pairs.length === 0) return null;
    const [A, B] = pairs[0];
    const P = getPoint(A)!, Q = getPoint(B)!;
    if (P.length !== Q.length) return null;
    const v = vectorBetween(P, Q);
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`\\overrightarrow{${A}${B}} = (x_${B}-x_${A} ; y_${B}-y_${A}${P.length === 3 ? ` ; z_${B}-z_${A}` : ''})`],
      finalAnswer: `\\overrightarrow{${A}${B}} = ${fmtVector(v)}`,
      verificationPassed: true,
    };
  }

  // --- ALIGNEMENT / COLINÉARITÉ ---
  if (/align|colin[ée]aire/i.test(lowerQ)) {
    const pairs = extractKnownPointPairs(cleanQ, points);
    let v1: Vector, v2: Vector, label: string;

    if (/colin[ée]aire/i.test(lowerQ) && pairs.length >= 2) {
      const [[A, B], [C, D]] = pairs;
      const P1 = getPoint(A)!, Q1 = getPoint(B)!, P2 = getPoint(C)!, Q2 = getPoint(D)!;
      if (P1.length !== Q1.length || P1.length !== P2.length) return null;
      v1 = vectorBetween(P1, Q1);
      v2 = vectorBetween(P2, Q2);
      label = `\\overrightarrow{${A}${B}} \\text{ et } \\overrightarrow{${C}${D}}`;
    } else {
      const singles = extractKnownSinglePoints(cleanQ, points);
      if (singles.length < 3) return null;
      const [A, B, C] = singles;
      const PA = getPoint(A)!, PB = getPoint(B)!, PC = getPoint(C)!;
      if (PA.length !== PB.length || PA.length !== PC.length) return null;
      v1 = vectorBetween(PA, PB);
      v2 = vectorBetween(PA, PC);
      label = `\\overrightarrow{${A}${B}} \\text{ et } \\overrightarrow{${A}${C}}`;
    }

    let areColinear: boolean;
    let detailStep: string;
    if (v1.length === 2) {
      const d = det2D(v1, v2);
      areColinear = Math.abs(d) < 1e-9;
      detailStep = `\\det(${label}) = ${fmtNum(v1[0])}\\times${fmtNum(v2[1])} - ${fmtNum(v1[1])}\\times${fmtNum(v2[0])} = ${fmtNum(d)}`;
    } else {
      const cr = cross3D(v1, v2);
      areColinear = isZeroVector(cr);
      detailStep = `${label} : produit vectoriel = ${fmtVector(cr)}`;
    }

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [detailStep],
      finalAnswer: areColinear ? 'Les vecteurs sont colinéaires (points alignés).' : 'Les vecteurs ne sont pas colinéaires (points non alignés).',
      verificationPassed: true,
    };
  }

  return null;
}

// ==========================================================================
// 4. POINT D'ENTRÉE
// ==========================================================================

export function tryGenericGeometryResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  const points = parsePoints(contextCombined);
  if (points.size < 2) return null;

  const solved: SolvedQuestionResult[] = [];
  for (const q of questions) {
    const result = solveGeometryQuestion(q, points);
    if (!result) return null;
    solved.push(result);
  }
  return solved;
}
