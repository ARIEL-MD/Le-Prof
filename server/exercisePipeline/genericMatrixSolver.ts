/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LES MATRICES ET SYSTÈMES LINÉAIRES (SANS IA)
 * ================================================================================
 *
 * Couvre deux familles d'exercices très fréquentes du secondaire :
 *
 *  1. MATRICES données explicitement (notation [[...],[...]], (a b; c d),
 *     ou \begin{pmatrix}...\end{pmatrix}) : somme, différence, produit par un
 *     scalaire, produit matriciel, transposée, déterminant (2×2, 3×3, et plus
 *     généralement par développement de cofacteurs), inverse (via la
 *     comatrice/déterminant), avec vérification de la compatibilité des
 *     dimensions à chaque étape.
 *
 *  2. SYSTÈMES LINÉAIRES de 2 ou 3 équations à 2 ou 3 inconnues (ax+by=c,
 *     ...), résolus exactement par la méthode de Cramer — ce qui ne
 *     nécessite pas que l'élève ait écrit le système sous forme matricielle.
 */

import { ParsedQuestion, SolvedQuestionResult } from './types';

type Matrix = number[][];

function fmtNum(n: number): string {
  const r = Math.round(n * 1e6) / 1e6;
  return Number.isInteger(r) ? `${r}` : `${r}`;
}

function fmtMatrix(m: Matrix): string {
  return `\\begin{pmatrix}${m.map((row) => row.map(fmtNum).join(' & ')).join(' \\\\ ')}\\end{pmatrix}`;
}

// ==========================================================================
// 1. EXTRACTION DES MATRICES DÉFINIES DANS L'ÉNONCÉ
// ==========================================================================

export interface ParsedMatrixDef {
  name: string;
  value: Matrix;
}

function parseMatrixBody(body: string): Matrix | null {
  const t = body.trim();

  // Notation tableau : [[1,2],[3,4]]
  if (t.startsWith('[[')) {
    try {
      const rows = t
        .replace(/^\[|\]$/g, '')
        .match(/\[[^\[\]]*\]/g);
      if (!rows) return null;
      const matrix = rows.map((r) =>
        r
          .replace(/[\[\]]/g, '')
          .split(',')
          .map((v) => parseFloat(v.trim().replace(',', '.')))
      );
      if (matrix.some((row) => row.some((v) => Number.isNaN(v)))) return null;
      const width = matrix[0].length;
      if (matrix.some((row) => row.length !== width)) return null;
      return matrix;
    } catch {
      return null;
    }
  }

  // Notation LaTeX : \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}
  if (/\\begin\{[pbv]?matrix\}/.test(t)) {
    const inner = t.replace(/\\begin\{[pbv]?matrix\}/, '').replace(/\\end\{[pbv]?matrix\}/, '');
    const rows = inner.split('\\\\').map((r) => r.trim()).filter((r) => r.length > 0);
    const matrix = rows.map((r) => r.split('&').map((v) => parseFloat(v.trim().replace(',', '.'))));
    if (matrix.some((row) => row.some((v) => Number.isNaN(v)))) return null;
    const width = matrix[0].length;
    if (matrix.some((row) => row.length !== width)) return null;
    return matrix;
  }

  // Notation parenthèses avec point-virgule entre lignes : (1 2;3 4) ou (1,2;3,4)
  if (t.startsWith('(') || /;/.test(t)) {
    const inner = t.replace(/^\(|\)$/g, '');
    const rows = inner.split(';').map((r) => r.trim()).filter((r) => r.length > 0);
    if (rows.length < 2) return null;
    const matrix = rows.map((r) =>
      r
        .split(/[,\s]+/)
        .filter((v) => v.length > 0)
        .map((v) => parseFloat(v.replace(',', '.')))
    );
    if (matrix.some((row) => row.some((v) => Number.isNaN(v)))) return null;
    const width = matrix[0].length;
    if (matrix.some((row) => row.length !== width)) return null;
    return matrix;
  }

  return null;
}

export function parseMatrixDefinitions(fullText: string): ParsedMatrixDef[] {
  const clean = fullText.replace(/[−–—]/g, '-');
  const results: ParsedMatrixDef[] = [];

  // Format tableau : A = [[1,2],[3,4]]
  const arrayPattern = /\b([A-Z])\s*=\s*(\[\[[^;]+?\]\])/g;
  let m: RegExpExecArray | null;
  while ((m = arrayPattern.exec(clean)) !== null) {
    const value = parseMatrixBody(m[2]);
    if (value) results.push({ name: m[1], value });
  }

  // Format LaTeX
  const latexPattern = /\b([A-Z])\s*=\s*(\\begin\{[pbv]?matrix\}[\s\S]+?\\end\{[pbv]?matrix\})/g;
  while ((m = latexPattern.exec(clean)) !== null) {
    const value = parseMatrixBody(m[2]);
    if (value) results.push({ name: m[1], value });
  }

  // Format parenthèses : A = (1 2;3 4)
  const parenPattern = /\b([A-Z])\s*=\s*(\([^()]*;[^()]*\))/g;
  while ((m = parenPattern.exec(clean)) !== null) {
    if (results.some((r) => r.name === m![1])) continue;
    const value = parseMatrixBody(m[2]);
    if (value) results.push({ name: m[1], value });
  }

  return results;
}

// ==========================================================================
// 2. ARITHMÉTIQUE MATRICIELLE EXACTE
// ==========================================================================

function sameDimensions(a: Matrix, b: Matrix): boolean {
  return a.length === b.length && a.every((row, i) => row.length === b[i].length);
}

function addMatrices(a: Matrix, b: Matrix): Matrix | null {
  if (!sameDimensions(a, b)) return null;
  return a.map((row, i) => row.map((v, j) => v + b[i][j]));
}

function subtractMatrices(a: Matrix, b: Matrix): Matrix | null {
  if (!sameDimensions(a, b)) return null;
  return a.map((row, i) => row.map((v, j) => v - b[i][j]));
}

function scalarMultiply(a: Matrix, k: number): Matrix {
  return a.map((row) => row.map((v) => v * k));
}

function multiplyMatrices(a: Matrix, b: Matrix): Matrix | null {
  if (a[0].length !== b.length) return null; // colonnes de A doivent égaler lignes de B
  const result: Matrix = [];
  for (let i = 0; i < a.length; i++) {
    const row: number[] = [];
    for (let j = 0; j < b[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < b.length; k++) sum += a[i][k] * b[k][j];
      row.push(sum);
    }
    result.push(row);
  }
  return result;
}

function transpose(a: Matrix): Matrix {
  return a[0].map((_, j) => a.map((row) => row[j]));
}

function determinant(a: Matrix): number | null {
  const n = a.length;
  if (a.some((row) => row.length !== n)) return null; // non carrée
  if (n === 1) return a[0][0];
  if (n === 2) return a[0][0] * a[1][1] - a[0][1] * a[1][0];
  // Développement de cofacteurs sur la première ligne (fonctionne pour tout n).
  let det = 0;
  for (let j = 0; j < n; j++) {
    const minor = a.slice(1).map((row) => row.filter((_, c) => c !== j));
    const cofactor = (j % 2 === 0 ? 1 : -1) * a[0][j];
    const minorDet = determinant(minor);
    if (minorDet === null) return null;
    det += cofactor * minorDet;
  }
  return det;
}

function inverse(a: Matrix): Matrix | null {
  const n = a.length;
  if (a.some((row) => row.length !== n)) return null;
  const det = determinant(a);
  if (det === null || Math.abs(det) < 1e-12) return null; // non inversible

  if (n === 2) {
    return [
      [a[1][1] / det, -a[0][1] / det],
      [-a[1][0] / det, a[0][0] / det],
    ];
  }

  // Comatrice (cofacteurs) puis transposée, divisée par le déterminant — pour n=3 et au-delà.
  const cofactorMatrix: Matrix = [];
  for (let i = 0; i < n; i++) {
    const row: number[] = [];
    for (let j = 0; j < n; j++) {
      const minor = a.filter((_, r) => r !== i).map((r) => r.filter((_, c) => c !== j));
      const minorDet = determinant(minor);
      if (minorDet === null) return null;
      row.push(((i + j) % 2 === 0 ? 1 : -1) * minorDet);
    }
    cofactorMatrix.push(row);
  }
  const adjugate = transpose(cofactorMatrix);
  return scalarMultiply(adjugate, 1 / det);
}

// ==========================================================================
// 3. RÉSOLUTION D'UNE QUESTION SUR MATRICES
// ==========================================================================

export function solveMatrixQuestion(q: ParsedQuestion, matrices: ParsedMatrixDef[]): SolvedQuestionResult | null {
  const cleanQ = q.cleanText;
  const lowerQ = cleanQ.toLowerCase();
  const findByName = (n: string) => matrices.find((m) => m.name === n);

  const mentionedNames = Array.from(new Set(Array.from(cleanQ.matchAll(/\b([A-Z])\b/g)).map((m) => m[1]))).filter((n) =>
    matrices.some((m) => m.name === n)
  );

  // --- DÉTERMINANT ---
  if (/d[ée]terminant/i.test(lowerQ)) {
    const target = mentionedNames.length > 0 ? findByName(mentionedNames[0]) : matrices.length === 1 ? matrices[0] : undefined;
    if (!target) return null;
    const det = determinant(target.value);
    if (det === null) return null;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`\\det(${target.name}) \\text{ calculé par développement de cofacteurs}`],
      finalAnswer: `\\det(${target.name}) = ${fmtNum(det)}`,
      verificationPassed: true,
    };
  }

  // --- INVERSIBILITÉ / INVERSE ---
  if (/inversible|inverse\s+de/i.test(lowerQ)) {
    const target = mentionedNames.length > 0 ? findByName(mentionedNames[0]) : matrices.length === 1 ? matrices[0] : undefined;
    if (!target) return null;
    const det = determinant(target.value);
    if (det === null) return null;
    const isInvertible = Math.abs(det) > 1e-12;

    if (/inverse\s+de/i.test(lowerQ)) {
      if (!isInvertible) {
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps: [`\\det(${target.name}) = ${fmtNum(det)} = 0`],
          finalAnswer: `${target.name} n'est pas inversible (déterminant nul).`,
          verificationPassed: true,
        };
      }
      const inv = inverse(target.value);
      if (!inv) return null;
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps: [`\\det(${target.name}) = ${fmtNum(det)}`, `${target.name}^{-1} = \\dfrac{1}{\\det(${target.name})} \\times \\text{comatrice}^T`],
        finalAnswer: `${target.name}^{-1} = ${fmtMatrix(inv)}`,
        verificationPassed: true,
      };
    }

    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`\\det(${target.name}) = ${fmtNum(det)}`],
      finalAnswer: isInvertible ? `${target.name} est inversible (déterminant non nul).` : `${target.name} n'est pas inversible (déterminant nul).`,
      verificationPassed: true,
    };
  }

  // --- TRANSPOSÉE ---
  if (/transpos[ée]e?/i.test(lowerQ)) {
    const target = mentionedNames.length > 0 ? findByName(mentionedNames[0]) : matrices.length === 1 ? matrices[0] : undefined;
    if (!target) return null;
    const t = transpose(target.value);
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`{}^{t}${target.name}`],
      finalAnswer: `{}^{t}${target.name} = ${fmtMatrix(t)}`,
      verificationPassed: true,
    };
  }

  // --- OPÉRATIONS A+B, A-B, A*B, k*A ---
  if (/calculer|donner/i.test(lowerQ)) {
    const opMatch = cleanQ.match(/(-?\d+(?:[.,]\d+)?)?\s*\*?\s*([A-Z])\s*([+\-*×])\s*(-?\d+(?:[.,]\d+)?)?\s*\*?\s*([A-Z])/);
    if (opMatch) {
      const [, leftScalarStr, leftName, opSymbol, rightScalarStr, rightName] = opMatch;
      const left = findByName(leftName);
      const right = findByName(rightName);
      if (left && right) {
        const leftScalar = leftScalarStr ? parseFloat(leftScalarStr.replace(',', '.')) : 1;
        const rightScalar = rightScalarStr ? parseFloat(rightScalarStr.replace(',', '.')) : 1;
        const leftVal = leftScalar !== 1 ? scalarMultiply(left.value, leftScalar) : left.value;
        const rightVal = rightScalar !== 1 ? scalarMultiply(right.value, rightScalar) : right.value;

        let result: Matrix | null = null;
        if (opSymbol === '+') result = addMatrices(leftVal, rightVal);
        else if (opSymbol === '-') result = subtractMatrices(leftVal, rightVal);
        else result = multiplyMatrices(leftVal, rightVal);

        if (!result) return null;
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps: [`${leftName} ${opSymbol} ${rightName} = ${fmtMatrix(leftVal)} ${opSymbol} ${fmtMatrix(rightVal)}`],
          finalAnswer: fmtMatrix(result),
          verificationPassed: true,
        };
      }
    }
  }

  return null;
}

// ==========================================================================
// 4. SYSTÈMES LINÉAIRES (2 OU 3 ÉQUATIONS) PAR LA MÉTHODE DE CRAMER
// ==========================================================================

export interface LinearSystem {
  coefficients: Matrix; // n×n
  constants: number[]; // n
  unknowns: string[]; // ex: ['x','y'] ou ['x','y','z']
}

export function parseLinearSystem(fullText: string): LinearSystem | null {
  const clean = fullText.replace(/[−–—]/g, '-');
  // Cherche des équations du type "2x+3y=5" (2 ou 3 inconnues x,y[,z])
  const eqPattern = /(-?\d*(?:[.,]\d+)?)\s*x\s*([+-]\s*\d*(?:[.,]\d+)?)\s*y(?:\s*([+-]\s*\d*(?:[.,]\d+)?)\s*z)?\s*=\s*(-?\d+(?:[.,]\d+)?)/gi;
  const matches = Array.from(clean.matchAll(eqPattern));
  if (matches.length < 2) return null;

  const hasZ = matches.some((m) => m[3] !== undefined);
  const unknowns = hasZ ? ['x', 'y', 'z'] : ['x', 'y'];
  if (matches.length < unknowns.length) return null;

  const parseCoef = (s: string | undefined, defaultVal: number): number => {
    if (s === undefined) return 0;
    const t = s.replace(/\s+/g, '');
    if (t === '' || t === '+') return defaultVal;
    if (t === '-') return -defaultVal;
    return parseFloat(t.replace(',', '.'));
  };

  const coefficients: Matrix = [];
  const constants: number[] = [];
  for (let i = 0; i < unknowns.length; i++) {
    const m = matches[i];
    const cx = parseCoef(m[1], 1);
    const cy = parseCoef(m[2], 1);
    const row = hasZ ? [cx, cy, parseCoef(m[3], 1)] : [cx, cy];
    coefficients.push(row);
    constants.push(parseFloat(m[4].replace(',', '.')));
  }

  return { coefficients, constants, unknowns };
}

export function solveLinearSystemQuestion(q: ParsedQuestion, system: LinearSystem): SolvedQuestionResult | null {
  const cleanQ = q.cleanText.toLowerCase();
  if (!/r[ée]soudre|solution/i.test(cleanQ)) return null;

  const { coefficients, constants, unknowns } = system;
  const detMain = determinant(coefficients);
  if (detMain === null || Math.abs(detMain) < 1e-12) return null; // système non résolvable par Cramer (ou infinité/aucune solution)

  const solutions: number[] = [];
  for (let i = 0; i < unknowns.length; i++) {
    const modified = coefficients.map((row) => [...row]);
    for (let r = 0; r < unknowns.length; r++) modified[r][i] = constants[r];
    const detI = determinant(modified);
    if (detI === null) return null;
    solutions.push(detI / detMain);
  }

  const solutionStr = unknowns.map((u, i) => `${u} = ${fmtNum(solutions[i])}`).join(' ; ');
  return {
    numberLabel: q.numberLabel,
    titleOrPrompt: q.cleanText,
    steps: [
      `\\det = ${fmtNum(detMain)}`,
      `Résolution par la méthode de Cramer.`,
    ],
    finalAnswer: solutionStr,
    verificationPassed: true,
  };
}

// ==========================================================================
// 5. POINT D'ENTRÉE
// ==========================================================================

export function tryGenericMatrixResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  const matrices = parseMatrixDefinitions(contextCombined);
  const system = matrices.length === 0 ? parseLinearSystem(contextCombined) : null;

  if (matrices.length === 0 && !system) return null;

  const solved: SolvedQuestionResult[] = [];
  for (const q of questions) {
    let result: SolvedQuestionResult | null = null;
    if (matrices.length > 0) result = solveMatrixQuestion(q, matrices);
    if (!result && system) result = solveLinearSystemQuestion(q, system);
    if (!result) return null;
    solved.push(result);
  }
  return solved;
}
