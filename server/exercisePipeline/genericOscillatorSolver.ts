/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LES OSCILLATEURS & CIRCUITS RLC (SANS IA)
 * =========================================================================
 *
 * 1. Oscillateur mécanique (Pendule élastique / ressort) :
 *    - Force de rappel : F = -k * x
 *    - Équation différentielle : x'' + (k/m) * x = 0  <=>  x'' + omega_0^2 * x = 0
 *    - Pulsation propre : omega_0 = sqrt(k / m)  (rad/s)
 *    - Période propre : T_0 = 2 * pi / omega_0 = 2 * pi * sqrt(m / k)  (s)
 *    - Fréquence propre : f_0 = 1 / T_0 = (1 / (2 * pi)) * sqrt(k / m)  (Hz)
 *    - Énergie mécanique : E_m = (1/2) * k * X_m^2 = (1/2) * m * V_max^2
 *    - Vitesse maximale : V_max = omega_0 * X_m
 *
 * 2. Oscillateur électrique (Circuit LC / RLC) :
 *    - Équation différentielle : q'' + (1 / (L * C)) * q = 0
 *    - Pulsation propre : omega_0 = 1 / sqrt(L * C)
 *    - Période propre : T_0 = 2 * pi * sqrt(L * C)
 *    - Énergie totale : E = (1/2) * (q^2 / C) + (1/2) * L * i^2 = (1/2) * C * U_m^2 = (1/2) * L * I_m^2
 */

import { ParsedQuestion, SolvedQuestionResult } from './types';

const NUM = '-?\\d+(?:[.,]\\d+)?';
const SCI_NUM = '-?\\d+(?:[.,]\\d+)?(?:[eE][-+]?\\d+|\\s*\\*\\s*10\\^?[-+]?\\d+|\\s*×\\s*10\\^?[-+]?\\d+)?';

function parseNum(s: string): number {
  const clean = s.replace(',', '.').replace(/\s+/g, '');
  if (/10\^?([-+]?\d+)/i.test(clean)) {
    const parts = clean.split(/[*×]|10\^?/i);
    const base = parts[0] ? parseFloat(parts[0]) : 1;
    const expMatch = clean.match(/10\^?([-+]?\d+)/i);
    const exp = expMatch ? parseInt(expMatch[1], 10) : 0;
    return base * Math.pow(10, exp);
  }
  return parseFloat(clean);
}

function fmtNum(n: number): string {
  if (Math.abs(n) >= 1e5 || (Math.abs(n) < 1e-3 && n !== 0)) {
    return n.toExponential(3).replace('e+', ' \\times 10^{').replace('e-', ' \\times 10^{-') + '}';
  }
  const r = Math.round(n * 1e4) / 1e4;
  return `${r}`;
}

function normMass(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'kg' || u === 'kilogrammes') return val;
  if (u === 'g' || u === 'grammes') return val * 1e-3;
  return null;
}

function normStiffness(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'n/m' || u === 'n.m-1' || u === 'n.m^-1') return val;
  return null;
}

function normLength(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'm' || u === 'mètres') return val;
  if (u === 'cm' || u === 'centimètres') return val * 1e-2;
  if (u === 'mm' || u === 'millimètres') return val * 1e-3;
  return null;
}

function normCapacitance(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'f' || u === 'farad' || u === 'farads') return val;
  if (u === 'µf' || u === 'uf' || u === 'microfarad' || u === 'microfarads') return val * 1e-6;
  if (u === 'nf' || u === 'nanofarad') return val * 1e-9;
  if (u === 'pf' || u === 'picofarad') return val * 1e-12;
  if (u === 'mf' || u === 'millifarad') return val * 1e-3;
  return null;
}

function normInductance(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'h' || u === 'henry' || u === 'henrys') return val;
  if (u === 'mh' || u === 'millihenry' || u === 'millihenrys') return val * 1e-3;
  if (u === 'µh' || u === 'uh' || u === 'microhenry') return val * 1e-6;
  return null;
}

export interface OscillatorGivens {
  type: 'mechanical' | 'electrical';
  // Mécanique
  m: number | null; // Masse en kg
  k: number | null; // Raideur en N/m
  Xm: number | null; // Amplitude en m
  // Électrique
  L: number | null; // Inductance en H
  C: number | null; // Capacité en F
  Um: number | null; // Tension maximale en V
  Im: number | null; // Intensité maximale en A
}

function extractQuantity(text: string, patterns: RegExp[], normFn: (v: number, u: string) => number | null): number | null {
  for (const re of patterns) {
    const matches = Array.from(text.matchAll(re));
    for (const m of matches) {
      const val = parseNum(m[1]);
      const unit = m[2];
      const si = normFn(val, unit);
      if (si !== null && !Number.isNaN(si)) return si;
    }
  }
  return null;
}

export function extractOscillatorGivens(fullText: string): OscillatorGivens {
  const t = fullText.replace(/[−–—]/g, '-');

  const isElectrical = /circuit|condensateur|bobine|inductance|capacit[ée]|farad|henry|\brlc\b|\blc\b/i.test(t);

  // Mécanique
  const m = extractQuantity(t, [
    new RegExp(`\\bm\\s*=\\s*(${NUM})\\s*(kg|g)\\b`, 'g'),
    new RegExp(`masse\\s+(?:de|est de|:)?\\s*(${NUM})\\s*(kg|g)\\b`, 'gi'),
  ], normMass);

  const k = extractQuantity(t, [
    new RegExp(`\\bk\\s*=\\s*(${NUM})\\s*(n/m|n\\.m-1|n\\.m\\^-1)\\b`, 'gi'),
    new RegExp(`raideur\\s+(?:de|est de|k\\s*=)?\\s*(${NUM})\\s*(n/m|n\\.m-1|n\\.m\\^-1)\\b`, 'gi'),
  ], normStiffness);

  const Xm = extractQuantity(t, [
    new RegExp(`(?:amplitude|X_?m|x_0|élongation\\s+maximale)\\s*(?:=|est de|de)?\\s*(${NUM})\\s*(cm|mm|m)\\b`, 'gi'),
    new RegExp(`[ée]cart[ée]\\s+de\\s+(${NUM})\\s*(cm|mm|m)\\b`, 'gi'),
  ], normLength);

  // Électrique
  const L = extractQuantity(t, [
    new RegExp(`\\bL\\s*=\\s*(${NUM})\\s*(mh|µh|uh|h)\\b`, 'gi'),
    new RegExp(`inductance\\s+(?:de|est de|L\\s*=)?\\s*(${NUM})\\s*(mh|µh|uh|h)\\b`, 'gi'),
  ], normInductance);

  const C = extractQuantity(t, [
    new RegExp(`\\bC\\s*=\\s*(${NUM})\\s*(µf|uf|nf|pf|mf|f)\\b`, 'gi'),
    new RegExp(`capacit[ée]\\s+(?:de|est de|C\\s*=)?\\s*(${NUM})\\s*(µf|uf|nf|pf|mf|f)\\b`, 'gi'),
  ], normCapacitance);

  const Um = extractQuantity(t, [
    new RegExp(`(?:U_?m|tension\\s+maximale)\\s*=\\s*(${NUM})\\s*v\\b`, 'gi'),
  ], (v) => v);

  const Im = extractQuantity(t, [
    new RegExp(`(?:I_?m|intensit[ée]\\s+maximale)\\s*=\\s*(${NUM})\\s*(ma|a)\\b`, 'gi'),
  ], (v, u) => (u.toLowerCase() === 'ma' ? v * 1e-3 : v));

  return {
    type: isElectrical ? 'electrical' : 'mechanical',
    m,
    k,
    Xm,
    L,
    C,
    Um,
    Im,
  };
}

export function looksLikeOscillatorExercise(text: string): boolean {
  const t = text.toLowerCase();
  const hasMechKeywords = /oscillat|pendule [ée]lastique|ressort|raideur|pulsation propre|p[ée]riode propre|fr[ée]quence propre|[ée]longation/i.test(t);
  const hasElecKeywords = /circuit lc|circuit rlc|oscillations [ée]lectriques|d[ée]charge d'un condensateur/i.test(t);
  return hasMechKeywords || hasElecKeywords;
}

export function solveOscillatorQuestion(
  q: ParsedQuestion,
  globals: OscillatorGivens,
  fullText: string
): SolvedQuestionResult | null {
  const cleanQ = q.cleanText;
  const lowerQ = cleanQ.toLowerCase();

  // =========================================================================
  // CAS A : OSCILLATEUR MÉCANIQUE (RESSORT / PENDULE ÉLASTIQUE)
  // =========================================================================
  if (globals.type === 'mechanical') {
    // 1. ÉQUATION DIFFÉRENTIELLE DU MOUVEMENT
    if (/équation différentielle|[ée]quation diff[ée]rentielle du mouvement/i.test(lowerQ)) {
      const steps = [
        `1. Système : solide de masse m attaché à un ressort horizontal de raideur k (référentiel terrestre supposé galiléen).`,
        `2. Bilan des forces appliquées :`,
        `   - Le poids : \\vec{P} = -m g \\vec{j}`,
        `   - La réaction normale du support : \\vec{R} = R \\vec{j}`,
        `   - La force de rappel élastique : \\vec{T} = -k x \\vec{i}`,
        `3. D'après le Théorème du Centre d'Inertie (2ème loi de Newton) : \\vec{P} + \\vec{R} + \\vec{T} = m \\vec{a}`,
        `Projection sur l'axe horizontal (Ox) : -k x = m \\ddot{x} \\iff m \\ddot{x} + k x = 0`,
        `En divisant par m : \\ddot{x} + \\dfrac{k}{m} x = 0 \\iff \\ddot{x} + \\omega_0^2 x = 0 \\quad \\text{avec } \\omega_0 = \\sqrt{\\dfrac{k}{m}}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `\\ddot{x} + \\dfrac{k}{m} x = 0 \\iff \\ddot{x} + \\omega_0^2 x = 0`,
        verificationPassed: true,
      };
    }

    // 2. PULSATION PROPRE omega_0
    if (/pulsation propre|\bomega_?0\b|calculer.*pulsation/i.test(lowerQ)) {
      if (globals.k !== null && globals.m !== null && globals.m > 0) {
        const w0 = Math.sqrt(globals.k / globals.m);
        const steps = [
          `La pulsation propre d'un oscillateur élastique est donnée par : \\omega_0 = \\sqrt{\\dfrac{k}{m}}`,
          `k = ${fmtNum(globals.k)} \\text{ N/m}, \\ m = ${fmtNum(globals.m)} \\text{ kg}`,
          `\\omega_0 = \\sqrt{\\dfrac{${fmtNum(globals.k)}}{${fmtNum(globals.m)}}} = ${fmtNum(w0)} \\text{ rad/s}`,
        ];
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps,
          finalAnswer: `\\omega_0 = ${fmtNum(w0)} \\text{ rad/s}`,
          verificationPassed: true,
        };
      }
    }

    // 3. PÉRIODE PROPRE T_0
    if (/p[ée]riode propre|\bt_?0\b|calculer.*p[ée]riode/i.test(lowerQ)) {
      if (globals.k !== null && globals.m !== null && globals.k > 0) {
        const T0 = 2 * Math.PI * Math.sqrt(globals.m / globals.k);
        const steps = [
          `La période propre des oscillations libres non amorties est : T_0 = 2\\pi \\sqrt{\\dfrac{m}{k}} = \\dfrac{2\\pi}{\\omega_0}`,
          `m = ${fmtNum(globals.m)} \\text{ kg}, \\ k = ${fmtNum(globals.k)} \\text{ N/m}`,
          `T_0 = 2\\pi \\sqrt{\\dfrac{${fmtNum(globals.m)}}{${fmtNum(globals.k)}}} = ${fmtNum(T0)} \\text{ s}`,
        ];
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps,
          finalAnswer: `T_0 = ${fmtNum(T0)} \\text{ s}`,
          verificationPassed: true,
        };
      }
    }

    // 4. ÉNERGIE MÉCANIQUE Em
    if (/énergie mécanique|[ée]nergie m[ée]canique|calculer.*e_?m\b/i.test(lowerQ)) {
      if (globals.k !== null && globals.Xm !== null) {
        const Em = 0.5 * globals.k * globals.Xm * globals.Xm;
        const steps = [
          `En l'absence de frottements, l'énergie mécanique est constante et égale à l'énergie potentielle élastique maximale :`,
          `E_m = \\dfrac{1}{2} k X_m^2`,
          `k = ${fmtNum(globals.k)} \\text{ N/m}, \\ X_m = ${fmtNum(globals.Xm)} \\text{ m}`,
          `E_m = \\dfrac{1}{2} \\times ${fmtNum(globals.k)} \\times (${fmtNum(globals.Xm)})^2 = ${fmtNum(Em)} \\text{ J}`,
        ];
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps,
          finalAnswer: `E_m = ${fmtNum(Em)} \\text{ J}`,
          verificationPassed: true,
        };
      }
    }

    // 5. VITESSE MAXIMALE Vmax
    if (/vitesse maximale|\bv_?max\b|calculer.*vitesse max/i.test(lowerQ)) {
      if (globals.k !== null && globals.m !== null && globals.Xm !== null && globals.m > 0) {
        const w0 = Math.sqrt(globals.k / globals.m);
        const Vmax = w0 * globals.Xm;
        const steps = [
          `La vitesse maximale est atteinte lors du passage par la position d'équilibre (x = 0) :`,
          `V_{\\max} = \\omega_0 \\times X_m = \\sqrt{\\dfrac{k}{m}} \\times X_m`,
          `V_{\\max} = ${fmtNum(w0)} \\times ${fmtNum(globals.Xm)} = ${fmtNum(Vmax)} \\text{ m/s}`,
        ];
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps,
          finalAnswer: `V_{\\max} = ${fmtNum(Vmax)} \\text{ m/s}`,
          verificationPassed: true,
        };
      }
    }
  }

  // =========================================================================
  // CAS B : OSCILLATEUR ÉLECTRIQUE (CIRCUIT LC / RLC)
  // =========================================================================
  if (globals.type === 'electrical') {
    // 1. ÉQUATION DIFFÉRENTIELLE EN q(t) ou u_c(t)
    if (/équation différentielle|[ée]quation diff[ée]rentielle/i.test(lowerQ)) {
      const steps = [
        `1. D'après la loi des mailles pour le circuit LC idéal (sans résistance) : u_L + u_C = 0`,
        `2. Sachant que u_L = L \\dfrac{di}{dt} et i = \\dfrac{dq}{dt} = C \\dfrac{du_C}{dt} :`,
        `   u_L = L \\dfrac{d^2q}{dt^2} = L C \\dfrac{d^2u_C}{dt^2}`,
        `3. L'équation différentielle s'écrit :`,
        `   \\dfrac{d^2q}{dt^2} + \\dfrac{1}{L C} q = 0 \\iff \\ddot{q} + \\omega_0^2 q = 0 \\quad \\text{avec } \\omega_0 = \\dfrac{1}{\\sqrt{LC}}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `\\dfrac{d^2q}{dt^2} + \\dfrac{1}{LC} q = 0`,
        verificationPassed: true,
      };
    }

    // 2. PÉRIODE PROPRE T0 (Formule de Thomson)
    if (/p[ée]riode propre|\bt_?0\b|calculer.*p[ée]riode|formule de thomson/i.test(lowerQ)) {
      if (globals.L !== null && globals.C !== null) {
        const T0 = 2 * Math.PI * Math.sqrt(globals.L * globals.C);
        const steps = [
          `La période propre d'un circuit LC est donnée par la formule de Thomson : T_0 = 2\\pi \\sqrt{L C}`,
          `L = ${fmtNum(globals.L)} \\text{ H}, \\ C = ${fmtNum(globals.C)} \\text{ F}`,
          `T_0 = 2\\pi \\sqrt{${fmtNum(globals.L)} \\times ${fmtNum(globals.C)}} = ${fmtNum(T0)} \\text{ s}`,
        ];
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps,
          finalAnswer: `T_0 = ${fmtNum(T0)} \\text{ s}`,
          verificationPassed: true,
        };
      }
    }
  }

  return null;
}

export function tryGenericOscillatorResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  if (questions.length === 0) return null;

  const fullText = [contextCombined, ...questions.map((q) => q.cleanText)].join('\n');
  if (!looksLikeOscillatorExercise(fullText)) {
    return null;
  }

  const globals = extractOscillatorGivens(fullText);

  const results: SolvedQuestionResult[] = [];
  for (const q of questions) {
    const res = solveOscillatorQuestion(q, globals, fullText);
    if (!res) {
      return null;
    }
    results.push(res);
  }

  return results;
}
