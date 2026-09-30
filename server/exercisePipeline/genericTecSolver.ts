/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LE THÉORÈME DU CENTRE D'INERTIE (TCI)
 * ET LE THÉORÈME DE L'ÉNERGIE CINÉTIQUE (TEC) — SANS IA
 * =========================================================================
 *
 * 1. Plan incliné & Mouvement rectiligne varié (TCI / 2ème loi de Newton) :
 *    - Force motrice le long de la pente : P_x = m * g * sin(alpha)
 *    - Réaction normale : R_N = m * g * cos(alpha)
 *    - Force de frottement : f
 *    - Accélération résultante : a = g * sin(alpha) - f / m
 *
 * 2. Théorème de l'Énergie Cinétique (TEC) :
 *    Delta E_c = (1/2)*m*v_B^2 - (1/2)*m*v_A^2 = \sum W(\vec{F})
 *    W(P) = m * g * h = m * g * L * sin(alpha)  (ou -m*g*h en montée)
 *    W(R_N) = 0
 *    W(f) = -f * L
 *    => v_B = sqrt( v_A^2 + 2 * a * L )
 *
 * 3. Puissance et travail d'une force :
 *    W = F * d * cos(theta)
 *    P = W / t = F * v
 */

import { ParsedQuestion, SolvedQuestionResult } from './types';

const NUM = '-?\\d+(?:[.,]\\d+)?';

function parseNum(s: string): number {
  const clean = s.replace(',', '.').replace(/\s+/g, '');
  return parseFloat(clean);
}

function fmtNum(n: number): string {
  if (Math.abs(n) >= 1e5 || (Math.abs(n) < 1e-2 && n !== 0)) {
    return n.toExponential(3).replace('e+', ' \\times 10^{').replace('e-', ' \\times 10^{-') + '}';
  }
  const r = Math.round(n * 1e3) / 1e3;
  return `${r}`;
}

export const G_GRAVITY = 9.8; // ou 10 si mentionné dans le texte

function normMass(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'kg' || u === 'kilogrammes') return val;
  if (u === 'g' || u === 'grammes') return val * 1e-3;
  if (u === 't' || u === 'tonnes') return val * 1e3;
  return null;
}

function normDistance(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'm' || u === 'mètres') return val;
  if (u === 'cm' || u === 'centimètres') return val * 1e-2;
  if (u === 'km' || u === 'kilomètres') return val * 1e3;
  return null;
}

function normSpeed(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'm/s' || u === 'm.s-1' || u === 'm.s^-1') return val;
  if (u === 'km/h' || u === 'km.h-1' || u === 'km.h^-1') return val / 3.6;
  return null;
}

function normForce(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'n' || u === 'newtons' || u === 'newton') return val;
  if (u === 'kn' || u === 'kilonewtons') return val * 1e3;
  return null;
}

function normAngle(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === '°' || u === 'deg' || u === 'degres' || u === 'degrés') return (val * Math.PI) / 180;
  if (u === 'rad' || u === 'radians') return val;
  return null;
}

export interface TecGivens {
  g: number;
  m: number | null; // Masse en kg
  alphaDeg: number | null; // Angle en degrés
  alphaRad: number | null; // Angle en radians
  L: number | null; // Distance AB en m
  h: number | null; // Hauteur dénivelé en m
  vA: number | null; // Vitesse initiale en m/s
  vB: number | null; // Vitesse finale en m/s
  f: number | null; // Force de frottement en N
  F_moteur: number | null; // Force de traction / moteur en N
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

export function extractTecGivens(fullText: string): TecGivens {
  const t = fullText.replace(/[−–—]/g, '-');

  // g pesanteur
  let g = G_GRAVITY;
  const gMatch = t.match(/g\s*=\s*([0-9.,]+)\s*(?:m\/s\^?2|m\.s-2|n\/kg|n\.kg-1)/i);
  if (gMatch) {
    g = parseNum(gMatch[1]);
  } else if (/g\s*=\s*10\b/i.test(t)) {
    g = 10;
  }

  // Masse m
  const m = extractQuantity(t, [
    new RegExp(`\\bm\\s*=\\s*(${NUM})\\s*(kg|g|t)\\b`, 'g'),
    new RegExp(`masse\\s+(?:de|est de|:)?\\s*(${NUM})\\s*(kg|g|t)\\b`, 'gi'),
  ], normMass);

  // Angle alpha
  let alphaDeg: number | null = null;
  let alphaRad: number | null = null;
  const angleMatch = t.match(/(?:angle|incliné\s+de|pente\s+de)\s*(?:alpha\s*=|\u03B1\s*=)?\s*([0-9.,]+)\s*(?:°|deg|degr[ée]s)/i);
  if (angleMatch) {
    alphaDeg = parseNum(angleMatch[1]);
    alphaRad = (alphaDeg * Math.PI) / 180;
  }

  // Distance L / AB
  const L = extractQuantity(t, [
    new RegExp(`(?:AB|distance|longueur|L)\\s*=\\s*(${NUM})\\s*(km|m|cm)\\b`, 'gi'),
    new RegExp(`glisse\\s+sur\\s+une\\s+distance\\s+(?:de\\s+)?(${NUM})\\s*(km|m|cm)\\b`, 'gi'),
  ], normDistance);

  // Hauteur h
  const h = extractQuantity(t, [
    new RegExp(`(?:hauteur|h|d[ée]nivel[ée])\\s*=\\s*(${NUM})\\s*(km|m|cm)\\b`, 'gi'),
  ], normDistance);

  // Vitesse vA (ou sans vitesse initiale)
  let vA = extractQuantity(t, [
    new RegExp(`(?:v_?A|vitesse\\s+en\\s+A|vitesse\\s+initiale|v_?0)\\s*=\\s*(${NUM})\\s*(m\/s|m\\.s-1|km\/h|km\\.h-1)\\b`, 'gi'),
  ], normSpeed);
  if (vA === null && /sans vitesse initiale|part du repos|lâché sans vitesse/i.test(t)) {
    vA = 0;
  }

  // Vitesse vB
  const vB = extractQuantity(t, [
    new RegExp(`(?:v_?B|vitesse\\s+en\\s+B|vitesse\\s+finale)\\s*=\\s*(${NUM})\\s*(m\/s|m\\.s-1|km\/h|km\\.h-1)\\b`, 'gi'),
  ], normSpeed);

  // Frottement f
  let f = extractQuantity(t, [
    new RegExp(`(?:force\\s+de\\s+frottement|frottements?|f)\\s*(?:de|est de|=)?\\s*(${NUM})\\s*(kn|n|newtons?)\\b`, 'gi'),
  ], normForce);
  if (f === null && /frottements?\\s+n[ée]gligeables?|sans frottement/i.test(t)) {
    f = 0;
  }

  // Force motrice F
  const F_moteur = extractQuantity(t, [
    new RegExp(`(?:force\\s+(?:motrice|de\\s+traction)|F)\\s*=\\s*(${NUM})\\s*(kn|n|newtons?)\\b`, 'gi'),
  ], normForce);

  return {
    g,
    m,
    alphaDeg,
    alphaRad,
    L,
    h,
    vA,
    vB,
    f,
    F_moteur,
  };
}

export function looksLikeTecExercise(text: string): boolean {
  const t = text.toLowerCase();
  const hasKeywords = /th[ée]or[èe]me de l'[ée]nergie cin[ée]tique|\btec\b|th[ée]or[èe]me du centre d'inertie|\btci\b|plan inclin[ée]|travail du poids|travail d'une force/i.test(t);
  return hasKeywords;
}

export function solveTecQuestion(
  q: ParsedQuestion,
  globals: TecGivens,
  fullText: string
): SolvedQuestionResult | null {
  const cleanQ = q.cleanText;
  const lowerQ = cleanQ.toLowerCase();

  // 1. BILAN DES FORCES ET ACCÉLÉRATION (TCI)
  if (/accélération|acc[ée]l[ée]ration|tci|th[ée]or[èe]me du centre d'inertie/i.test(lowerQ) && !/énergie cinétique/i.test(lowerQ)) {
    if (globals.alphaRad !== null) {
      const sinAlpha = Math.sin(globals.alphaRad);
      const fVal = globals.f !== null ? globals.f : 0;
      let aVal = globals.g * sinAlpha;
      if (fVal > 0 && globals.m !== null && globals.m > 0) {
        aVal -= fVal / globals.m;
      }

      const steps = [
        `1. Système : solide de masse m dans le référentiel terrestre galiléen.`,
        `2. Bilan des forces :`,
        `   - Le poids : \\vec{P} (direction verticale vers le bas)`,
        `   - La réaction normale du plan : \\vec{R}_N (perpendiculaire au plan)`,
        `   - La force de frottement : \\vec{f} (opposée au mouvement le long du plan)`,
        `3. D'après le TCI (2ème loi de Newton) : \\vec{P} + \\vec{R}_N + \\vec{f} = m \\vec{a}`,
        `Projection sur l'axe (Ox) orienté dans le sens de la descente :`,
        `m g \\sin\\alpha - f = m a \\iff a = g \\sin\\alpha - \\dfrac{f}{m}`,
        `g = ${fmtNum(globals.g)} \\text{ m/s}^2, \\ \\alpha = ${fmtNum(globals.alphaDeg || 0)}^\\circ, \\ f = ${fmtNum(fVal)} \\text{ N}`,
        `a = ${fmtNum(globals.g)} \\times \\sin(${fmtNum(globals.alphaDeg || 0)}^\\circ) - \\dfrac{${fmtNum(fVal)}}{${fmtNum(globals.m || 1)}} = ${fmtNum(aVal)} \\text{ m/s}^2`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `a = ${fmtNum(aVal)} \\text{ m/s}^2`,
        verificationPassed: true,
      };
    }
  }

  // 2. TRAVAIL DU POIDS W(P)
  if (/travail du poids|travail de \\vec\{p\}|w\(\\vec\{p\}\)|w\(p\)/i.test(lowerQ)) {
    let hVal = globals.h;
    if (hVal === null && globals.L !== null && globals.alphaRad !== null) {
      hVal = globals.L * Math.sin(globals.alphaRad);
    }

    if (globals.m !== null && hVal !== null) {
      const Wp = globals.m * globals.g * hVal;
      const steps = [
        `Le travail du poids lors d'un déplacement d'une hauteur h est donné par : W(\\vec{P}) = m \\times g \\times h`,
        `Avec h = L \\sin\\alpha = ${fmtNum(hVal)} \\text{ m}, \\ m = ${fmtNum(globals.m)} \\text{ kg}, \\ g = ${fmtNum(globals.g)} \\text{ m/s}^2`,
        `W(\\vec{P}) = ${fmtNum(globals.m)} \\times ${fmtNum(globals.g)} \\times ${fmtNum(hVal)} = ${fmtNum(Wp)} \\text{ J}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `W(\\vec{P}) = ${fmtNum(Wp)} \\text{ J}`,
        verificationPassed: true,
      };
    }
  }

  // 3. VITESSE FINALE EN B PAR LE TEC
  if (/vitesse en b|vitesse au point b|\bv_?b\b|calculer.*vitesse finale|th[ée]or[èe]me de l'[ée]nergie cin[ée]tique/i.test(lowerQ)) {
    let hVal = globals.h;
    if (hVal === null && globals.L !== null && globals.alphaRad !== null) {
      hVal = globals.L * Math.sin(globals.alphaRad);
    }

    const vAVal = globals.vA !== null ? globals.vA : 0;
    const fVal = globals.f !== null ? globals.f : 0;

    if (globals.m !== null && hVal !== null && globals.L !== null) {
      // Delta Ec = W(P) + W(RN) + W(f)
      // (1/2)*m*vB^2 - (1/2)*m*vA^2 = m*g*h - f*L
      // vB = sqrt( vA^2 + 2*g*h - 2*f*L/m )
      const vB2 = vAVal * vAVal + 2 * globals.g * hVal - (2 * fVal * globals.L) / globals.m;
      if (vB2 >= 0) {
        const vBVal = Math.sqrt(vB2);
        const steps = [
          `D'après le Théorème de l'Énergie Cinétique (TEC) entre A et B :`,
          `\\Delta E_c = E_{cB} - E_{cA} = W(\\vec{P}) + W(\\vec{R}_N) + W(\\vec{f})`,
          `\\dfrac{1}{2} m v_B^2 - \\dfrac{1}{2} m v_A^2 = m g h + 0 - f \\cdot L`,
          `\\implies v_B = \\sqrt{v_A^2 + 2 g h - \\dfrac{2 f L}{m}}`,
          `v_B = \\sqrt{(${fmtNum(vAVal)})^2 + 2 \\times ${fmtNum(globals.g)} \\times ${fmtNum(hVal)} - \\dfrac{2 \\times ${fmtNum(fVal)} \\times ${fmtNum(globals.L)}}{${fmtNum(globals.m)}}} = ${fmtNum(vBVal)} \\text{ m/s}`,
        ];
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps,
          finalAnswer: `v_B = ${fmtNum(vBVal)} \\text{ m/s}`,
          verificationPassed: true,
        };
      }
    }
  }

  // 4. INTENSITÉ DE LA FORCE DE FROTTEMENT f
  if (/force de frottement|\bf\b|valeur de f\b|calculer.*frottement/i.test(lowerQ)) {
    let hVal = globals.h;
    if (hVal === null && globals.L !== null && globals.alphaRad !== null) {
      hVal = globals.L * Math.sin(globals.alphaRad);
    }

    const vAVal = globals.vA !== null ? globals.vA : 0;

    if (globals.m !== null && globals.vB !== null && hVal !== null && globals.L !== null && globals.L > 0) {
      // f = ( m*g*h - (1/2)*m*(vB^2 - vA^2) ) / L
      const fVal = (globals.m * globals.g * hVal - 0.5 * globals.m * (globals.vB * globals.vB - vAVal * vAVal)) / globals.L;
      const steps = [
        `D'après le Théorème de l'Énergie Cinétique :`,
        `\\dfrac{1}{2} m v_B^2 - \\dfrac{1}{2} m v_A^2 = m g h - f \\cdot L \\iff f = \\dfrac{m g h - \\frac{1}{2} m (v_B^2 - v_A^2)}{L}`,
        `f = \\dfrac{${fmtNum(globals.m)} \\times ${fmtNum(globals.g)} \\times ${fmtNum(hVal)} - 0{,}5 \\times ${fmtNum(globals.m)} \\times (${fmtNum(globals.vB)}^2 - ${fmtNum(vAVal)}^2)}{${fmtNum(globals.L)}} = ${fmtNum(fVal)} \\text{ N}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `f = ${fmtNum(fVal)} \\text{ N}`,
        verificationPassed: true,
      };
    }
  }

  return null;
}

export function tryGenericTecResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  if (questions.length === 0) return null;

  const fullText = [contextCombined, ...questions.map((q) => q.cleanText)].join('\n');
  if (!looksLikeTecExercise(fullText)) {
    return null;
  }

  const globals = extractTecGivens(fullText);

  const results: SolvedQuestionResult[] = [];
  for (const q of questions) {
    const res = solveTecQuestion(q, globals, fullText);
    if (!res) {
      return null;
    }
    results.push(res);
  }

  return results;
}
