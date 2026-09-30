import { simplifyFraction } from '../mathsEngine/mathUtils';

export interface Polynomial2ndDegree {
  a: number;
  b: number;
  c: number;
  discriminant: number;
  x1: number | null;
  x2: number | null;
  vertexX: number;
  vertexY: number;
  isConcaveUp: boolean; // a > 0
}

/**
 * Analyse et extrait les coefficients d'un polynôme du 2nd degré f(x) = ax² + bx + c
 */
export function parseQuadraticPolynomial(text: string): Polynomial2ndDegree | null {
  const clean = text
    .replace(/[−–—]/g, '-')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3');

  // Si le texte contient des puissances de x supérieures à 2 ou des fonctions non-quadratiques,
  // ce n'est JAMAIS un polynôme du second degré !
  if (/x\^([3-9]|\d{2,})|x³|x⁴|x⁵|\bln\b|\blog\b|\bexp\b|\bsqrt\b|\/x/i.test(clean)) {
    return null;
  }

  // Chercher une expression du type f(x) = ... ou P(x) = ... ou simplement l'expression quadratique
  const polyMatch = clean.match(/(?:f|P|g|h|Q)\s*\(\s*x\s*\)\s*=\s*([^\n,;]+)/i) ||
                     clean.match(/polyn[ôo]me\s*:\s*([^\n,;]+)/i) ||
                     clean.match(/([+-]?\s*\d*\s*x\^2\s*[+-]\s*\d*\s*x\s*[+-]\s*\d+)/i) ||
                     clean.match(/([+-]?\s*\d*\s*x\^2\s*[+-]\s*\d+)/i);

  const rawExpr = (polyMatch ? polyMatch[1] : clean).replace(/\s+/g, '');

  if (/x\^([3-9]|\d{2,})|x³|x⁴|x⁵|\bln\b|\blog\b|\bexp\b|\bsqrt\b|\/x/i.test(rawExpr)) {
    return null;
  }

  const match = rawExpr.match(/([+-]?\d*(?:\.\d+)?)x\^2([+-]\d*(?:\.\d+)?x)?([+-]\d+(?:\.\d+)?)?/i) ||
                rawExpr.match(/([+-]?\d*(?:\.\d+)?)x\^2([+-]\d+(?:\.\d+)?)?([+-]\d*(?:\.\d+)?x)?/i);

  if (!match) return null;

  // Vérifier qu'il n'y a pas d'autres termes en x résiduels non pris en compte
  const remaining = rawExpr.replace(match[0], '');
  if (/x/i.test(remaining)) return null;

  const parseA = (str?: string): number => {
    if (!str || str === '+' || str === '') return 1;
    if (str === '-') return -1;
    const n = parseFloat(str);
    return isNaN(n) ? 1 : n;
  };

  const parseBx = (str?: string): number => {
    if (!str) return 0;
    const s = str.replace(/x/i, '');
    if (s === '+' || s === '') return 1;
    if (s === '-') return -1;
    const n = parseFloat(s);
    return isNaN(n) ? 0 : n;
  };

  const parseC = (str?: string): number => {
    if (!str) return 0;
    const n = parseFloat(str);
    return isNaN(n) ? 0 : n;
  };

  let a = 1;
  let b = 0;
  let c = 0;

  if (match[2] && match[2].includes('x')) {
    a = parseA(match[1]);
    b = parseBx(match[2]);
    c = parseC(match[3]);
  } else if (match[3] && match[3].includes('x')) {
    a = parseA(match[1]);
    c = parseC(match[2]);
    b = parseBx(match[3]);
  } else {
    a = parseA(match[1]);
    b = 0;
    c = parseC(match[2]);
  }

  if (a === 0) return null; // Pas du second degré

  const delta = b * b - 4 * a * c;
  let x1: number | null = null;
  let x2: number | null = null;

  if (delta > 0) {
    const sqrtDelta = Math.sqrt(delta);
    const r1 = (-b - sqrtDelta) / (2 * a);
    const r2 = (-b + sqrtDelta) / (2 * a);
    x1 = Math.min(r1, r2);
    x2 = Math.max(r1, r2);
  } else if (delta === 0) {
    x1 = -b / (2 * a);
    x2 = x1;
  }

  const vertexX = -b / (2 * a);
  const vertexY = a * vertexX * vertexX + b * vertexX + c;

  return {
    a,
    b,
    c,
    discriminant: delta,
    x1,
    x2,
    vertexX,
    vertexY,
    isConcaveUp: a > 0,
  };
}

/**
 * Calcule l'image f(x0) pour un polynôme
 */
export function evaluatePolynomial(poly: Polynomial2ndDegree, x0: number): { value: number; stepString: string } {
  const { a, b, c } = poly;
  const termA = a === 1 ? `(${x0})^2` : a === -1 ? `-(${x0})^2` : `${a} \\times (${x0})^2`;
  const valA = a * x0 * x0;

  const termB = b === 0 ? '' : b > 0 ? `+ ${b === 1 ? '' : b + ' \\times '}(${x0})` : `- ${Math.abs(b) === 1 ? '' : Math.abs(b) + ' \\times '}(${x0})`;
  const valB = b * x0;

  const termC = c === 0 ? '' : c > 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
  const valC = c;

  const total = valA + valB + valC;

  const stepString = `f(${x0}) = ${termA} ${termB} ${termC} = ${valA} ${valB >= 0 ? '+' : ''}${valB} ${valC >= 0 ? '+' : ''}${valC} = ${total}`;

  return { value: total, stepString };
}

/**
 * Vérifie mathématiquement si une factorisation ou équation est correcte
 */
export function verifyQuadraticRoots(poly: Polynomial2ndDegree, roots: number[]): boolean {
  if (poly.discriminant < 0) return roots.length === 0;
  if (poly.discriminant === 0) return roots.length === 1 && Math.abs(roots[0] - (poly.x1 ?? 0)) < 1e-6;
  if (roots.length !== 2) return false;

  const sorted = [...roots].sort((u, v) => u - v);
  return (
    Math.abs(sorted[0] - (poly.x1 ?? 0)) < 1e-6 &&
    Math.abs(sorted[1] - (poly.x2 ?? 0)) < 1e-6
  );
}
