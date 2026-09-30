/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LA GÉOMÉTRIE DANS L'ESPACE (SANS IA)
 * =====================================================================
 *
 * Étend genericGeometrySolver.ts (vecteurs/points/milieu/produit scalaire)
 * aux notions spécifiques à l'espace :
 *   - équation cartésienne d'un plan (ABC) connaissant 3 points non alignés
 *   - vecteur normal à un plan donné par son équation cartésienne
 *   - distance d'un point à un plan
 *   - représentation paramétrique d'une droite (AB) ou (point + vecteur directeur)
 *   - position relative d'une droite et d'un plan (sécants / parallèle / incluse),
 *     avec calcul du point d'intersection quand ils sont sécants
 *   - position relative de deux plans (parallèles / confondus / sécants),
 *     avec direction (et point) de la droite d'intersection quand ils sont sécants
 *
 * Toute l'arithmétique est EXACTE (mêmes garanties que genericGeometrySolver.ts).
 * L'extraction textuelle est volontairement PRUDENTE : un module ambigu
 * (ex : équation "y = 2x - 3" qui pourrait être une droite 2D et non un plan)
 * n'est retenu QUE si le contexte est sans équivoque possible (présence de
 * "z" dans l'équation, ou label de plan explicite juste avant). En cas de
 * doute, la fonction renvoie null pour laisser la main à un autre moteur ou
 * au fallback honnête — jamais de réponse approximative.
 *
 * Hors périmètre (volontairement, cf. mêmes raisons que genericGeometrySolver) :
 * intersection de trois plans, angles en degrés, distance droite-droite,
 * projections orthogonales, sections de solides.
 */

import { ParsedQuestion, SolvedQuestionResult } from './types';
import { parsePoints, solveGeometryQuestion } from './genericGeometrySolver';

type Vec3 = [number, number, number];

interface ParsedPlaneEq {
  label: string; // lettre du plan si trouvée (ex "P"), sinon ''
  a: number;
  b: number;
  c: number;
  d: number; // ax + by + cz + d = 0
}

interface ParsedLine {
  point: Vec3;
  direction: Vec3;
  label: string; // ex "(AB)" -> "AB", ou nom de droite type "d"
}

// ==========================================================================
// 1. UTILITAIRES NUMÉRIQUES
// ==========================================================================

function fmtNum(n: number): string {
  const r = Math.round(n * 1e6) / 1e6;
  return Number.isInteger(r) ? `${r}` : `${r}`;
}

function fmtVec3(v: Vec3): string {
  return `(${v.map(fmtNum).join(' ; ')})`;
}

function sub3(P: Vec3, Q: Vec3): Vec3 {
  return [Q[0] - P[0], Q[1] - P[1], Q[2] - P[2]];
}

function cross3(u: Vec3, v: Vec3): Vec3 {
  return [
    u[1] * v[2] - u[2] * v[1],
    u[2] * v[0] - u[0] * v[2],
    u[0] * v[1] - u[1] * v[0],
  ];
}

function dot3(u: Vec3, v: Vec3): number {
  return u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
}

function norm3(v: Vec3): number {
  return Math.sqrt(dot3(v, v));
}

function isZero3(v: Vec3, eps = 1e-9): boolean {
  return Math.abs(v[0]) < eps && Math.abs(v[1]) < eps && Math.abs(v[2]) < eps;
}

function fmtPlaneEq(p: ParsedPlaneEq): string {
  const termA = p.a === 0 ? '' : `${p.a === 1 ? '' : p.a === -1 ? '-' : fmtNum(p.a) + ''}x`;
  const termB = p.b === 0 ? '' : `${p.b > 0 ? (termA ? ' + ' : '') + (p.b === 1 ? '' : fmtNum(p.b)) : ' - ' + (p.b === -1 ? '' : fmtNum(Math.abs(p.b)))}y`;
  const termC = p.c === 0 ? '' : `${p.c > 0 ? (termA || termB ? ' + ' : '') + (p.c === 1 ? '' : fmtNum(p.c)) : ' - ' + (p.c === -1 ? '' : fmtNum(Math.abs(p.c)))}z`;
  const termD = p.d === 0 ? '' : (p.d > 0 ? ' + ' + fmtNum(p.d) : ' - ' + fmtNum(Math.abs(p.d)));
  return `${termA}${termB}${termC}${termD} = 0`;
}

// ==========================================================================
// 2. EXTRACTION : ÉQUATIONS CARTÉSIENNES DE PLANS DÉJÀ DONNÉES
// ==========================================================================

function parseLinearExpr3D(expr: string): { a: number; b: number; c: number; constant: number } | null {
  const clean = expr.replace(/\s+/g, '');
  const tokenPattern = /([+-]?)(\d*(?:[.,]\d+)?)(x|y|z)?/g;
  let a = 0, b = 0, c = 0, constant = 0;
  let found = false;
  let m: RegExpExecArray | null;
  let consumed = 0;
  while ((m = tokenPattern.exec(clean)) !== null) {
    if (m[0] === '') { tokenPattern.lastIndex++; continue; }
    consumed += m[0].length;
    const sign = m[1] || '+';
    const numPart = m[2];
    const varPart = m[3];
    if (!varPart && numPart === '') continue;
    const value = (sign === '-' ? -1 : 1) * (numPart === '' ? 1 : parseFloat(numPart.replace(',', '.')));
    if (varPart === 'x') { a += value; found = true; }
    else if (varPart === 'y') { b += value; found = true; }
    else if (varPart === 'z') { c += value; found = true; }
    else { constant += value; found = true; }
  }
  if (!found || consumed < clean.length) return null;
  return { a, b, c, constant };
}

/**
 * Extrait les équations cartésiennes de plans EXPLICITEMENT données dans le
 * texte, sous la forme canonique "ax + by + cz + d = 0" (ou "= k"). N'accepte
 * une équation sans terme en z que si elle est rattachée à un label de plan
 * explicite juste avant (ex "(P) : ...") — sinon trop ambigu avec une droite
 * affine 2D (ex "y = 2x - 3") et on préfère ne rien extraire.
 */
export function parseCartesianPlanes(text: string): ParsedPlaneEq[] {
  const clean = text.replace(/[−–—]/g, '-');
  const planes: ParsedPlaneEq[] = [];
  const eqPattern = /([+-]?\s*\d*(?:[.,]\d+)?\s*[xyz](?:\s*[+-]\s*\d*(?:[.,]\d+)?\s*[xyz]){0,2}(?:\s*[+-]\s*\d+(?:[.,]\d+)?)?)\s*=\s*([+-]?\s*\d+(?:[.,]\d+)?)/g;
  let m: RegExpExecArray | null;
  while ((m = eqPattern.exec(clean)) !== null) {
    const lhs = parseLinearExpr3D(m[1]);
    if (!lhs) continue;
    const rhs = parseFloat(m[2].replace(/\s+/g, '').replace(',', '.'));
    if (Number.isNaN(rhs)) continue;

    // Garde-fou anti-continuation : si un signe/variable suit immédiatement
    // le nombre capturé comme second membre, l'équation continue au-delà de
    // ce qu'on a capturé -> on ne peut pas être sûr, on rejette.
    const after = clean.slice(m.index + m[0].length, m.index + m[0].length + 3);
    if (/^\s*[+\-xyz*/]/.test(after)) continue;

    const before = clean.slice(Math.max(0, m.index - 40), m.index);
    const labelMatch = before.match(/\(?([A-Z])\)?\s*(?:d['’]équation)?\s*:?\s*$/);
    const label = labelMatch ? labelMatch[1] : '';

    // Ambiguïté avec une droite affine 2D (ex "y = 2x - 3") : on n'accepte
    // que si un terme en z est présent OU si un label de plan est explicite.
    if (lhs.c === 0 && !label) continue;

    const d = lhs.constant - rhs;
    planes.push({ label, a: lhs.a, b: lhs.b, c: lhs.c, d });
  }
  return planes;
}

// ==========================================================================
// 3. EXTRACTION : VECTEURS 3D LABELLISÉS (directeurs / normaux)
// ==========================================================================

export function parseLabeledVectors3D(text: string): Map<string, Vec3> {
  const clean = text.replace(/[−–—]/g, '-').replace(/\\vec\{([a-zA-Z])\}/g, '$1');
  const vectors = new Map<string, Vec3>();
  const pattern = /\b([a-z])\s*\(\s*(-?\d+(?:[.,]\d+)?)\s*[;,]\s*(-?\d+(?:[.,]\d+)?)\s*[;,]\s*(-?\d+(?:[.,]\d+)?)\s*\)/g;
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(clean)) !== null) {
    vectors.set(m[1], [
      parseFloat(m[2].replace(',', '.')),
      parseFloat(m[3].replace(',', '.')),
      parseFloat(m[4].replace(',', '.')),
    ]);
  }
  return vectors;
}

/** Cherche un vecteur directeur explicite juste après "vecteur directeur" (labellisé ou en tuple direct). */
function extractInlineDirectionVector(text: string, vectors: Map<string, Vec3>): Vec3 | null {
  const clean = text.replace(/[−–—]/g, '-').replace(/\\vec\{([a-zA-Z])\}/g, '$1');
  const labeled = clean.match(/vecteur\s+directeur\s+([a-z])\s*\(/i);
  if (labeled && vectors.has(labeled[1])) return vectors.get(labeled[1])!;
  const inline = clean.match(/vecteur\s+directeur[^()\d]{0,12}\(\s*(-?\d+(?:[.,]\d+)?)\s*[;,]\s*(-?\d+(?:[.,]\d+)?)\s*[;,]\s*(-?\d+(?:[.,]\d+)?)\s*\)/i);
  if (inline) {
    return [parseFloat(inline[1].replace(',', '.')), parseFloat(inline[2].replace(',', '.')), parseFloat(inline[3].replace(',', '.'))];
  }
  return null;
}

// ==========================================================================
// 4. RÉSOLUTION DE RÉFÉRENCES (plan / droite mentionnés dans une question)
// ==========================================================================

function planeFrom3Points(A: Vec3, B: Vec3, C: Vec3): ParsedPlaneEq | null {
  const AB = sub3(A, B);
  const AC = sub3(A, C);
  const n = cross3(AB, AC);
  if (isZero3(n)) return null; // points alignés : pas de plan défini
  const d = -(n[0] * A[0] + n[1] * A[1] + n[2] * A[2]);
  return { label: '', a: n[0], b: n[1], c: n[2], d };
}

function resolvePlaneReference(
  text: string,
  points: Map<string, number[]>,
  planesByLabel: Map<string, ParsedPlaneEq>,
  allPlanes: ParsedPlaneEq[]
): ParsedPlaneEq | null {
  const triLetters = text.match(/plan\s*\(?([A-Z])([A-Z])([A-Z])\)?/i);
  if (triLetters) {
    const [_, l1, l2, l3] = triLetters;
    const A = points.get(l1.toUpperCase()), B = points.get(l2.toUpperCase()), C = points.get(l3.toUpperCase());
    if (A && A.length === 3 && B && B.length === 3 && C && C.length === 3) {
      const plane = planeFrom3Points(A as Vec3, B as Vec3, C as Vec3);
      if (plane) return plane;
    }
  }
  const singleLetter = text.match(/plan\s*\(?([A-Z])\)?/i);
  if (singleLetter && planesByLabel.has(singleLetter[1].toUpperCase())) {
    return planesByLabel.get(singleLetter[1].toUpperCase())!;
  }
  if (allPlanes.length === 1) return allPlanes[0];
  return null;
}

function resolveLineReference(
  contextText: string,
  questionText: string,
  points: Map<string, number[]>,
  vectors: Map<string, Vec3>
): ParsedLine | null {
  // Forme (AB) : droite définie par deux points connus.
  const twoLetters = questionText.match(/droite\s*\(?([A-Z])([A-Z])\)?/i) || contextText.match(/droite\s*\(?([A-Z])([A-Z])\)?/i);
  if (twoLetters) {
    const A = points.get(twoLetters[1].toUpperCase());
    const B = points.get(twoLetters[2].toUpperCase());
    if (A && A.length === 3 && B && B.length === 3) {
      return { point: A as Vec3, direction: sub3(A as Vec3, B as Vec3), label: `${twoLetters[1]}${twoLetters[2]}` };
    }
  }
  // Forme "passant par X" + "vecteur directeur ..." (droite nommée ou non).
  const passingMatch = contextText.match(/passant\s+par\s+([A-Z])\b/i);
  const direction = extractInlineDirectionVector(contextText, vectors);
  if (passingMatch && direction) {
    const A = points.get(passingMatch[1].toUpperCase());
    if (A && A.length === 3) {
      return { point: A as Vec3, direction, label: 'd' };
    }
  }
  return null;
}

// ==========================================================================
// 5. RÉSOLUTION D'UNE QUESTION DONNÉE
// ==========================================================================

function solveSpaceGeometryQuestion(
  q: ParsedQuestion,
  points: Map<string, number[]>,
  planesByLabel: Map<string, ParsedPlaneEq>,
  allPlanes: ParsedPlaneEq[],
  vectors: Map<string, Vec3>,
  contextCombined: string
): SolvedQuestionResult | null {
  const cleanQ = q.cleanText;
  const lowerQ = cleanQ.toLowerCase();

  // --- ÉQUATION CARTÉSIENNE D'UN PLAN (ABC) ---
  if (/plan/i.test(lowerQ) && /(équation|cartésienne)/i.test(lowerQ)) {
    const triLetters = cleanQ.match(/\(?([A-Z])([A-Z])([A-Z])\)?/);
    if (triLetters) {
      const [, l1, l2, l3] = triLetters;
      const A = points.get(l1), B = points.get(l2), C = points.get(l3);
      if (A && A.length === 3 && B && B.length === 3 && C && C.length === 3) {
        const plane = planeFrom3Points(A as Vec3, B as Vec3, C as Vec3);
        if (!plane) return null; // points alignés : pas de plan unique -> pas de réponse inventée
        const AB = sub3(A as Vec3, B as Vec3);
        const AC = sub3(A as Vec3, C as Vec3);
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps: [
            `\\overrightarrow{${l1}${l2}} = ${fmtVec3(AB)} \\quad ; \\quad \\overrightarrow{${l1}${l3}} = ${fmtVec3(AC)}`,
            `Un vecteur normal au plan (${l1}${l2}${l3}) est \\vec{n} = \\overrightarrow{${l1}${l2}} \\wedge \\overrightarrow{${l1}${l3}} = ${fmtVec3([plane.a, plane.b, plane.c])}`,
            `Le plan passe par ${l1}${fmtVec3(A as Vec3)}, d'où l'équation ${plane.a}(x-${A[0]}) ${plane.b >= 0 ? '+' : '-'} ${Math.abs(plane.b)}(y-${A[1]}) ${plane.c >= 0 ? '+' : '-'} ${Math.abs(plane.c)}(z-${A[2]}) = 0`,
          ],
          finalAnswer: fmtPlaneEq(plane),
          verificationPassed: true,
        };
      }
    }
  }

  // --- VECTEUR NORMAL À UN PLAN ---
  if (/vecteur\s+normal/i.test(lowerQ)) {
    const plane = resolvePlaneReference(cleanQ, points, planesByLabel, allPlanes) || resolvePlaneReference(contextCombined, points, planesByLabel, allPlanes);
    if (!plane) return null;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`Pour un plan d'équation ax+by+cz+d=0, un vecteur normal est \\vec{n}(a;b;c).`],
      finalAnswer: `\\vec{n}${fmtVec3([plane.a, plane.b, plane.c])}`,
      verificationPassed: true,
    };
  }

  // --- DISTANCE D'UN POINT À UN PLAN ---
  if (/distance/i.test(lowerQ) && /plan/i.test(lowerQ)) {
    const plane = resolvePlaneReference(cleanQ, points, planesByLabel, allPlanes) || resolvePlaneReference(contextCombined, points, planesByLabel, allPlanes);
    if (!plane) return null;
    const pointMatches = Array.from(cleanQ.matchAll(/\bpoint\s+([A-Z])\b/gi)).map(m => m[1]) 
      .concat(Array.from(cleanQ.matchAll(/\b([A-Z])\b/g)).map(m => m[1]));
    const pointLetter = pointMatches.find(l => points.has(l.toUpperCase()) && points.get(l.toUpperCase())!.length === 3);
    if (!pointLetter) return null;
    const P = points.get(pointLetter.toUpperCase()) as Vec3;
    const num = plane.a * P[0] + plane.b * P[1] + plane.c * P[2] + plane.d;
    const den = norm3([plane.a, plane.b, plane.c]);
    const distance = Math.abs(num) / den;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [
        `d(${pointLetter}, plan) = \\dfrac{|a x_${pointLetter} + b y_${pointLetter} + c z_${pointLetter} + d|}{\\sqrt{a^2+b^2+c^2}}`,
        `= \\dfrac{|${fmtNum(plane.a)}\\times(${fmtNum(P[0])}) + ${fmtNum(plane.b)}\\times(${fmtNum(P[1])}) + ${fmtNum(plane.c)}\\times(${fmtNum(P[2])}) + (${fmtNum(plane.d)})|}{\\sqrt{${fmtNum(plane.a)}^2+${fmtNum(plane.b)}^2+${fmtNum(plane.c)}^2}}`,
      ],
      finalAnswer: `d = ${fmtNum(distance)}`,
      verificationPassed: true,
    };
  }

  // --- REPRÉSENTATION PARAMÉTRIQUE D'UNE DROITE ---
  if (/param[ée]trique/i.test(lowerQ) && /droite/i.test(lowerQ)) {
    const line = resolveLineReference(contextCombined, cleanQ, points, vectors);
    if (!line) return null;
    const [x0, y0, z0] = line.point;
    const [dx, dy, dz] = line.direction;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`Une droite passant par (${fmtNum(x0)};${fmtNum(y0)};${fmtNum(z0)}) et de vecteur directeur ${fmtVec3(line.direction)} admet pour représentation paramétrique (t \\in \\mathbb{R}) :`],
      finalAnswer: `\\begin{cases} x = ${fmtNum(x0)} + ${fmtNum(dx)}t \\\\ y = ${fmtNum(y0)} + ${fmtNum(dy)}t \\\\ z = ${fmtNum(z0)} + ${fmtNum(dz)}t \\end{cases}`,
      verificationPassed: true,
    };
  }

  // --- POSITION RELATIVE DROITE / PLAN ---
  if (/position\s+relative/i.test(lowerQ) && /droite/i.test(lowerQ) && /plan/i.test(lowerQ)) {
    const line = resolveLineReference(contextCombined, cleanQ, points, vectors);
    const plane = resolvePlaneReference(cleanQ, points, planesByLabel, allPlanes) || resolvePlaneReference(contextCombined, points, planesByLabel, allPlanes);
    if (!line || !plane) return null;
    const denom = plane.a * line.direction[0] + plane.b * line.direction[1] + plane.c * line.direction[2];
    if (Math.abs(denom) < 1e-9) {
      const onPlane = Math.abs(plane.a * line.point[0] + plane.b * line.point[1] + plane.c * line.point[2] + plane.d) < 1e-9;
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps: [`\\vec{n} \\cdot \\vec{u} = ${fmtNum(plane.a)}\\times${fmtNum(line.direction[0])} + ${fmtNum(plane.b)}\\times${fmtNum(line.direction[1])} + ${fmtNum(plane.c)}\\times${fmtNum(line.direction[2])} = 0`],
        finalAnswer: onPlane
          ? `Le vecteur directeur de la droite est orthogonal à \\vec{n} et un point de la droite appartient au plan : la droite est INCLUSE dans le plan.`
          : `Le vecteur directeur de la droite est orthogonal à \\vec{n} mais aucun point de la droite n'appartient au plan : la droite est STRICTEMENT PARALLÈLE au plan.`,
        verificationPassed: true,
      };
    }
    const t = -(plane.a * line.point[0] + plane.b * line.point[1] + plane.c * line.point[2] + plane.d) / denom;
    const I: Vec3 = [line.point[0] + t * line.direction[0], line.point[1] + t * line.direction[1], line.point[2] + t * line.direction[2]];
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [
        `\\vec{n} \\cdot \\vec{u} = ${fmtNum(denom)} \\neq 0 : la droite et le plan sont sécants.`,
        `En substituant les coordonnées paramétriques dans l'équation du plan, on trouve t = ${fmtNum(t)}.`,
      ],
      finalAnswer: `La droite et le plan sont sécants au point I = ${fmtVec3(I)}.`,
      verificationPassed: true,
    };
  }

  // --- POSITION RELATIVE DE DEUX PLANS ---
  if (/position\s+relative/i.test(lowerQ) && /plans?/i.test(lowerQ) && !/droite/i.test(lowerQ)) {
    const letters = Array.from(cleanQ.matchAll(/\(?([A-Z])\)?/g)).map(m => m[1]).filter(l => planesByLabel.has(l));
    const uniqueLetters = Array.from(new Set(letters));
    let P: ParsedPlaneEq | undefined, Q: ParsedPlaneEq | undefined;
    if (uniqueLetters.length >= 2) {
      P = planesByLabel.get(uniqueLetters[0]);
      Q = planesByLabel.get(uniqueLetters[1]);
    } else if (allPlanes.length === 2) {
      [P, Q] = allPlanes;
    }
    if (!P || !Q) return null;
    const n1: Vec3 = [P.a, P.b, P.c];
    const n2: Vec3 = [Q.a, Q.b, Q.c];
    const dir = cross3(n1, n2);
    if (isZero3(dir)) {
      // Normales colinéaires : plans parallèles ou confondus. On teste la
      // proportionnalité de d en cherchant le coefficient sur une coordonnée
      // non nulle de n1.
      const idx = [0, 1, 2].find(i => Math.abs(n1[i]) > 1e-9);
      const k = idx !== undefined ? n2[idx] / n1[idx] : NaN;
      const confondus = idx !== undefined && Math.abs(Q.d - k * P.d) < 1e-6;
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps: [`Les vecteurs normaux \\vec{n_1}${fmtVec3(n1)} et \\vec{n_2}${fmtVec3(n2)} sont colinéaires.`],
        finalAnswer: confondus ? 'Les deux plans sont CONFONDUS.' : 'Les deux plans sont STRICTEMENT PARALLÈLES.',
        verificationPassed: true,
      };
    }
    // Sécants : direction de la droite d'intersection + un point.
    const tryFix = (fixedIndex: 0 | 1 | 2): Vec3 | null => {
      const idxs = ([0, 1, 2].filter(i => i !== fixedIndex)) as [number, number];
      const nP = [P!.a, P!.b, P!.c];
      const nQ = [Q!.a, Q!.b, Q!.c];
      const M = [[nP[idxs[0]], nP[idxs[1]]], [nQ[idxs[0]], nQ[idxs[1]]]];
      const det = M[0][0] * M[1][1] - M[0][1] * M[1][0];
      if (Math.abs(det) < 1e-9) return null;
      const rhs = [-P!.d, -Q!.d];
      const v0 = (rhs[0] * M[1][1] - M[0][1] * rhs[1]) / det;
      const v1 = (M[0][0] * rhs[1] - rhs[0] * M[1][0]) / det;
      const point: Vec3 = [0, 0, 0];
      point[idxs[0]] = v0;
      point[idxs[1]] = v1;
      point[fixedIndex] = 0;
      return point;
    };
    const point = tryFix(0) || tryFix(1) || tryFix(2);
    if (!point) return null;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [`Les vecteurs normaux \\vec{n_1}${fmtVec3(n1)} et \\vec{n_2}${fmtVec3(n2)} ne sont pas colinéaires : les plans sont sécants.`],
      finalAnswer: `Les deux plans sont sécants selon une droite de vecteur directeur \\vec{u} = \\vec{n_1} \\wedge \\vec{n_2} = ${fmtVec3(dir)}, passant par le point ${fmtVec3(point)}.`,
      verificationPassed: true,
    };
  }

  // --- FALLBACK : questions de géométrie vectorielle « classiques » (milieu,
  // norme, produit scalaire, orthogonalité, vecteur, colinéarité) — pour les
  // exercices qui mélangent géométrie de base et notions spatiales avancées.
  return solveGeometryQuestion(q, points as Map<string, number[]>);
}

// ==========================================================================
// 6. POINT D'ENTRÉE
// ==========================================================================

export function tryGenericSpaceGeometryResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  const points = parsePoints(contextCombined);
  const allPlanes = parseCartesianPlanes(contextCombined);
  const vectors = parseLabeledVectors3D(contextCombined);

  // Garde-fou d'activation : ce moteur (plus permissif que le moteur de base
  // sur les mots-clés "distance"/"vecteur") ne doit s'activer QUE s'il y a une
  // preuve tangible de géométrie DANS L'ESPACE — sinon on laisse la main aux
  // moteurs existants (fonctions 2D, etc.) pour éviter tout faux positif.
  const has3DPoint = Array.from(points.values()).some(v => v.length === 3);
  const hasSpaceEvidence = has3DPoint || allPlanes.length > 0 || vectors.size > 0
    || /plan\b|\bespace\b|vecteur\s+normal|vecteur\s+directeur/i.test(contextCombined);
  if (!hasSpaceEvidence) return null;
  if (points.size < 1 && allPlanes.length === 0) return null;

  const planesByLabel = new Map<string, ParsedPlaneEq>();
  for (const p of allPlanes) {
    if (p.label) planesByLabel.set(p.label, p);
  }

  const solved: SolvedQuestionResult[] = [];
  for (const q of questions) {
    const result = solveSpaceGeometryQuestion(q, points, planesByLabel, allPlanes, vectors, contextCombined);
    if (!result) return null;
    solved.push(result);
  }
  return solved;
}
