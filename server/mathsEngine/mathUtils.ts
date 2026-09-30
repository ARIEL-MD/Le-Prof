/**
 * Utilitaires mathématiques exacts pour le moteur Maths Terminale A
 */

export function gcd(a: number, b: number): number {
  let x = Math.abs(Math.round(a));
  let y = Math.abs(Math.round(b));
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

export function simplifyFraction(num: number, den: number): { num: number; den: number; str: string } {
  if (den === 0) return { num: NaN, den: 0, str: 'Indéfini' };
  if (num === 0) return { num: 0, den: 1, str: '0' };
  
  let n = Math.round(num);
  let d = Math.round(den);
  if (d < 0) {
    n = -n;
    d = -d;
  }
  
  const g = gcd(n, d);
  n = n / g;
  d = d / g;

  if (d === 1) return { num: n, den: 1, str: `${n}` };
  return { num: n, den: d, str: `\\frac{${n}}{${d}}` };
}

export function simplifySqrt(n: number): { coef: number; inside: number; str: string } {
  const val = Math.round(n);
  if (val < 0) return { coef: 0, inside: val, str: `\\sqrt{${val}}` };
  if (val === 0) return { coef: 0, inside: 0, str: '0' };
  
  let coef = 1;
  let inside = val;

  for (let i = Math.floor(Math.sqrt(val)); i >= 2; i--) {
    if (inside % (i * i) === 0) {
      coef *= i;
      inside /= i * i;
      break;
    }
  }

  if (inside === 1) return { coef, inside: 1, str: `${coef}` };
  if (coef === 1) return { coef: 1, inside, str: `\\sqrt{${inside}}` };
  return { coef, inside, str: `${coef}\\sqrt{${inside}}` };
}

export function factorial(n: number): number {
  if (n < 0 || n > 25) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

export function arrangement(n: number, p: number): number {
  if (p < 0 || p > n) return 0;
  let res = 1;
  for (let i = 0; i < p; i++) {
    res *= (n - i);
  }
  return res;
}

export function combination(n: number, p: number): number {
  if (p < 0 || p > n) return 0;
  if (p === 0 || p === n) return 1;
  const k = Math.min(p, n - p);
  let num = 1;
  let den = 1;
  for (let i = 1; i <= k; i++) {
    num *= (n - i + 1);
    den *= i;
  }
  return Math.round(num / den);
}

export function round(val: number, decimals: number = 4): number {
  const factor = Math.pow(10, decimals);
  return Math.round(val * factor) / factor;
}
