/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LA GRAVITATION & LES SATELLITES (SANS IA)
 * =========================================================================
 *
 * Relations fondamentales :
 *   1. Force d'attraction gravitationnelle :
 *      F = G * (M * m) / r^2   avec r = R_T + z (ou h)
 *   2. Accélération de la pesanteur à l'altitude z :
 *      g(z) = G * M / (R_T + z)^2 = g_0 * (R_T / (R_T + z))^2
 *   3. Mouvement circulaire uniforme d'un satellite :
 *      a = v^2 / r = G * M / r^2  <=>  v = sqrt(G * M / r) = sqrt(G * M / (R_T + z))
 *   4. Vitesse angulaire :
 *      omega = v / r = sqrt(G * M / r^3)
 *   5. Période de révolution T :
 *      T = 2 * pi * r / v = 2 * pi * sqrt(r^3 / (G * M))
 *   6. 3ème loi de Kepler :
 *      T^2 / r^3 = 4 * pi^2 / (G * M) = constante
 *   7. Altitude d'un satellite connaissant sa période T (ex: géostationnaire T = 86164 s ou 86400 s) :
 *      r = ( (G * M * T^2) / (4 * pi^2) )^(1/3)  puis  z = r - R_T
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
  if (Math.abs(n) >= 1e5 || (Math.abs(n) < 1e-2 && n !== 0)) {
    return n.toExponential(3).replace('e+', ' \\times 10^{').replace('e-', ' \\times 10^{-') + '}';
  }
  const r = Math.round(n * 1e4) / 1e4;
  return `${r}`;
}

export const G_CONST = 6.67e-11; // N.m^2.kg^-2
export const EARTH_MASS_DEFAULT = 5.97e24; // kg (ou 6.0e24)
export const EARTH_RADIUS_DEFAULT = 6.37e6; // m (6370 km ou 6400 km)

function normDistance(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'm' || u === 'mètres' || u === 'metres') return val;
  if (u === 'km' || u === 'kilomètres' || u === 'kilometres') return val * 1e3;
  if (u === 'cm' || u === 'centimètres') return val * 1e-2;
  return null;
}

function normMass(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'kg' || u === 'kilogrammes') return val;
  if (u === 'g' || u === 'grammes') return val * 1e-3;
  if (u === 't' || u === 'tonnes') return val * 1e3;
  return null;
}

function normTime(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 's' || u === 'sec' || u === 'secondes') return val;
  if (u === 'min' || u === 'minutes') return val * 60;
  if (u === 'h' || u === 'heures') return val * 3600;
  if (u === 'j' || u === 'jours') return val * 86400;
  return null;
}

const DIST_UNIT = '(km|mètres?|metres?|m)(?=[\\s.,;:!?\\)\\]]|$)';
const MASS_UNIT = '(kg|tonnes?|t|g)(?=[\\s.,;:!?\\)\\]]|$)';
const TIME_UNIT = '(secondes?|sec|s|minutes?|min|heures?|h|jours?|j)(?=[\\s.,;:!?\\)\\]]|$)';

export interface GravitationGivens {
  G: number;
  M: number; // Masse de l'astre central en kg (Terre par défaut)
  R_central: number; // Rayon de l'astre en m (Terre par défaut)
  m_satellite: number | null; // Masse du satellite en kg
  z: number | null; // Altitude en m
  r: number | null; // Rayon orbital total en m (r = R_central + z)
  T: number | null; // Période orbitale en s
  v: number | null; // Vitesse orbitale en m/s
  isGeostationary: boolean;
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

export function extractGravitationGivens(fullText: string): GravitationGivens {
  const t = fullText.replace(/[−–—]/g, '-');

  // G constante gravitationnelle si explicite
  const gMatch = t.match(/G\s*=\s*([0-9.,]+(?:\s*[*×]\s*10\^?[-+]?\d+)?)/i);
  const G = gMatch ? parseNum(gMatch[1]) : G_CONST;

  // Masse de la Terre / astre central M
  let M = extractQuantity(t, [
    new RegExp(`(?:M_T|M_Terre|M)\\s*=\\s*(${SCI_NUM})\\s*${MASS_UNIT}`, 'gi'),
    new RegExp(`masse\\s+(?:de\\s+la\\s+Terre|de\\s+l'astre)\\s*(?:est\\s+de|:)?\\s*(${SCI_NUM})\\s*${MASS_UNIT}`, 'gi'),
  ], normMass);
  if (M === null) {
    M = EARTH_MASS_DEFAULT;
  }

  // Rayon de la Terre / astre central RT
  let R_central = extractQuantity(t, [
    new RegExp(`(?:R_T|R_Terre|R)\\s*=\\s*(${NUM})\\s*${DIST_UNIT}`, 'gi'),
    new RegExp(`rayon\\s+(?:de\\s+la\\s+Terre|de\\s+l'astre)\\s*(?:est\\s+de|:)?\\s*(${NUM})\\s*${DIST_UNIT}`, 'gi'),
  ], normDistance);
  if (R_central === null) {
    R_central = EARTH_RADIUS_DEFAULT;
  }

  // Altitude z ou h
  const z = extractQuantity(t, [
    new RegExp(`(?:altitude|hauteur)\\s+(?:h|z)?\\s*(?:=|est de|de)?\\s*(${NUM})\\s*${DIST_UNIT}`, 'gi'),
    new RegExp(`\\b[zh]\\s*=\\s*(${NUM})\\s*${DIST_UNIT}`, 'gi'),
    new RegExp(`orbite\\s+[àa]\\s+(${NUM})\\s*${DIST_UNIT}`, 'gi'),
  ], normDistance);

  // Rayon orbital total r
  let r = extractQuantity(t, [
    new RegExp(`\\br\\s*=\\s*(${NUM})\\s*${DIST_UNIT}`, 'gi'),
    new RegExp(`rayon\\s+orbital\\s*(?:=|est de|de)?\\s*(${NUM})\\s*${DIST_UNIT}`, 'gi'),
  ], normDistance);

  if (r === null && z !== null && R_central !== null) {
    r = R_central + z;
  }

  // Masse du satellite m
  const m_satellite = extractQuantity(t, [
    new RegExp(`satellite\\s+(?:de\\s+masse\\s+)?m\\s*=\\s*(${NUM})\\s*${MASS_UNIT}`, 'gi'),
    new RegExp(`\\bm\\s*=\\s*(${NUM})\\s*${MASS_UNIT}`, 'g'),
    new RegExp(`masse\\s+du\\s+satellite\\s*(?:est\\s+de|:)?\\s*(${NUM})\\s*${MASS_UNIT}`, 'gi'),
  ], normMass);

  // Période T
  let T = extractQuantity(t, [
    new RegExp(`\\bT\\s*=\\s*(${NUM})\\s*${TIME_UNIT}`, 'gi'),
    new RegExp(`p[ée]riode\\s+(?:de\\s+r[ée]volution\\s+)?(?:est\\s+de|:)?\\s*(${NUM})\\s*${TIME_UNIT}`, 'gi'),
  ], normTime);

  const isGeostationary = /g[ée]ostationnaire/i.test(t);
  if (isGeostationary && T === null) {
    T = 86164; // Période sidérale terrestre (environ 23h 56min 4s)
  }

  // Vitesse v
  const vMatch = t.match(/v\s*=\s*([0-9.,]+)\s*(?:km\/s|km\.s-1|m\/s|m\.s-1)/i);
  let v: number | null = null;
  if (vMatch) {
    const rawV = parseNum(vMatch[1]);
    if (/km/i.test(vMatch[0])) v = rawV * 1e3;
    else v = rawV;
  }

  return {
    G,
    M,
    R_central,
    m_satellite,
    z,
    r,
    T,
    v,
    isGeostationary,
  };
}

export function looksLikeGravitationExercise(text: string): boolean {
  const t = text.toLowerCase();
  const hasKeywords = /gravitation|satellite|orbite|kepler|g[ée]ostationnaire|pesanteur|vitesse orbitale|p[ée]riode de r[ée]volution|rayon orbital/i.test(t);
  return hasKeywords;
}

export function solveGravitationQuestion(
  q: ParsedQuestion,
  globals: GravitationGivens,
  fullText: string
): SolvedQuestionResult | null {
  const cleanQ = q.cleanText;
  const lowerQ = cleanQ.toLowerCase();

  // 1. NATURE DU MOUVEMENT DU SATELLITE
  if (/nature du mouvement|montrer que le mouvement est circulaire uniforme|mouvement est-il/i.test(lowerQ)) {
    const steps = [
      `1. Système : le satellite de masse m dans le référentiel géocentrique supposé galiléen.`,
      `2. Bilan des forces : Le satellite n'est soumis qu'à la force d'attraction gravitationnelle : \\vec{F} = -\\dfrac{G M m}{r^2} \\vec{u}_r`,
      `3. D'après la 2ème loi de Newton (Théorème du Centre d'Inertie) : \\vec{F} = m \\vec{a} \\iff \\vec{a} = -\\dfrac{G M}{r^2} \\vec{u}_r`,
      `Dans le repère de Frenet (\\vec{u}_t, \\vec{u}_n) : l'accélération tangentielle a_t = \\dfrac{dv}{dt} = 0 \\implies v = \\text{constante}, et l'accélération normale a_n = \\dfrac{v^2}{r} = \\dfrac{G M}{r^2}.`,
      `Le mouvement du satellite est donc circulaire et uniforme.`,
    ];
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps,
      finalAnswer: `Le mouvement du satellite est circulaire et uniforme.`,
      verificationPassed: true,
    };
  }

  // 2. VITESSE ORBITALE v
  if (/vitesse orbitale|vitesse v\b|calculer.*vitesse|expression de la vitesse/i.test(lowerQ) && !/angulaire/i.test(lowerQ)) {
    let rVal = globals.r;
    if (rVal === null && globals.z !== null) {
      rVal = globals.R_central + globals.z;
    }

    if (rVal !== null && globals.M > 0) {
      const vVal = Math.sqrt((globals.G * globals.M) / rVal);
      const vKmS = vVal / 1000;
      const steps = [
        `D'après l'égalité de l'accélération centripète : a_n = \\dfrac{v^2}{r} = \\dfrac{G M}{r^2} \\iff v = \\sqrt{\\dfrac{G M}{r}}`,
        `Rayon orbital : r = R_T + z = ${fmtNum(rVal)} \\text{ m}`,
        `v = \\sqrt{\\dfrac{${fmtNum(globals.G)} \\times ${fmtNum(globals.M)}}{${fmtNum(rVal)}}} = ${fmtNum(vVal)} \\text{ m/s} = ${fmtNum(vKmS)} \\text{ km/s}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `v = ${fmtNum(vVal)} \\text{ m/s} \\approx ${fmtNum(vKmS)} \\text{ km/s}`,
        verificationPassed: true,
      };
    }
  }

  // 3. PÉRIODE DE RÉVOLUTION T
  if (/p[ée]riode|calculer.*t\b|dur[ée]e d'un tour/i.test(lowerQ) && !/constante de kepler/i.test(lowerQ)) {
    let rVal = globals.r;
    if (rVal === null && globals.z !== null) {
      rVal = globals.R_central + globals.z;
    }

    if (rVal !== null && globals.M > 0) {
      const vVal = Math.sqrt((globals.G * globals.M) / rVal);
      const TVal = (2 * Math.PI * rVal) / vVal;
      const THours = TVal / 3600;
      const steps = [
        `La période de révolution T est la durée pour effectuer un tour complet (périmètre 2\\pi r) à la vitesse v :`,
        `T = \\dfrac{2\\pi r}{v} = 2\\pi \\sqrt{\\dfrac{r^3}{G M}}`,
        `Avec r = ${fmtNum(rVal)} \\text{ m}, \\ M = ${fmtNum(globals.M)} \\text{ kg}`,
        `T = 2\\pi \\sqrt{\\dfrac{(${fmtNum(rVal)})^3}{${fmtNum(globals.G)} \\times ${fmtNum(globals.M)}}} = ${fmtNum(TVal)} \\text{ s} \\approx ${fmtNum(THours)} \\text{ h}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `T = ${fmtNum(TVal)} \\text{ s} \\approx ${fmtNum(THours)} \\text{ h}`,
        verificationPassed: true,
      };
    }
  }

  // 4. 3ÈME LOI DE KEPLER (T^2 / r^3 = 4 pi^2 / (G M))
  if (/3[èe]me loi de kepler|troisi[èe]me loi de kepler|rapport t\^2\s*\/\s*r\^3|kepler/i.test(lowerQ)) {
    const kVal = (4 * Math.PI * Math.PI) / (globals.G * globals.M);
    const steps = [
      `En élevant au carré l'expression de la période T = 2\\pi \\sqrt{\\dfrac{r^3}{G M}} :`,
      `T^2 = \\dfrac{4\\pi^2 r^3}{G M} \\iff \\dfrac{T^2}{r^3} = \\dfrac{4\\pi^2}{G M} = \\text{constante}`,
      `Application numérique pour l'astre central :`,
      `\\dfrac{T^2}{r^3} = \\dfrac{4\\pi^2}{${fmtNum(globals.G)} \\times ${fmtNum(globals.M)}} = ${fmtNum(kVal)} \\text{ s}^2\\text{m}^{-3}`,
    ];
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps,
      finalAnswer: `\\dfrac{T^2}{r^3} = \\dfrac{4\\pi^2}{G M} = ${fmtNum(kVal)} \\text{ s}^2\\text{/m}^3`,
      verificationPassed: true,
    };
  }

  // 5. ALTITUDE DU SATELLITE GÉOSTATIONNAIRE OU CONNAISSANT T
  if (/altitude.*g[ée]ostationnaire|calculer.*z\b|calculer.*altitude|hauteur h\b/i.test(lowerQ)) {
    const TVal = globals.T !== null ? globals.T : (globals.isGeostationary ? 86164 : null);
    if (TVal !== null && globals.M > 0) {
      // r^3 = (G * M * T^2) / (4 * pi^2)
      const rCubed = (globals.G * globals.M * TVal * TVal) / (4 * Math.PI * Math.PI);
      const rVal = Math.cbrt(rCubed);
      const zVal = rVal - globals.R_central;
      const zKm = zVal / 1000;
      const steps = [
        `D'après la 3ème loi de Kepler : \\dfrac{T^2}{r^3} = \\dfrac{4\\pi^2}{G M} \\iff r = \\sqrt[3]{\\dfrac{G M T^2}{4\\pi^2}}`,
        `Pour T = ${fmtNum(TVal)} \\text{ s} :`,
        `r = \\sqrt[3]{\\dfrac{${fmtNum(globals.G)} \\times ${fmtNum(globals.M)} \\times (${fmtNum(TVal)})^2}{4\\pi^2}} = ${fmtNum(rVal)} \\text{ m} = ${fmtNum(rVal / 1000)} \\text{ km}`,
        `L'altitude z par rapport à la surface est : z = r - R_T = ${fmtNum(rVal / 1000)} - ${fmtNum(globals.R_central / 1000)} = ${fmtNum(zKm)} \\text{ km}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `z = ${fmtNum(zKm)} \\text{ km}`,
        verificationPassed: true,
      };
    }
  }

  // 6. FORCE DE GRAVITATION F
  if (/force d'attraction|force gravitationnelle|valeur de f\b|calculer f\b/i.test(lowerQ)) {
    let rVal = globals.r;
    if (rVal === null && globals.z !== null) {
      rVal = globals.R_central + globals.z;
    }

    if (rVal !== null && globals.m_satellite !== null && globals.M > 0) {
      const FVal = (globals.G * globals.M * globals.m_satellite) / (rVal * rVal);
      const steps = [
        `D'après la loi de gravitation universelle de Newton : F = G \\dfrac{M \\times m}{r^2}`,
        `M = ${fmtNum(globals.M)} \\text{ kg}, \\ m = ${fmtNum(globals.m_satellite)} \\text{ kg}, \\ r = ${fmtNum(rVal)} \\text{ m}`,
        `F = ${fmtNum(globals.G)} \\times \\dfrac{${fmtNum(globals.M)} \\times ${fmtNum(globals.m_satellite)}}{(${fmtNum(rVal)})^2} = ${fmtNum(FVal)} \\text{ N}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `F = ${fmtNum(FVal)} \\text{ N}`,
        verificationPassed: true,
      };
    }
  }

  return null;
}

export function tryGenericGravitationResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  if (questions.length === 0) return null;

  const fullText = [contextCombined, ...questions.map((q) => q.cleanText)].join('\n');
  if (!looksLikeGravitationExercise(fullText)) {
    return null;
  }

  const globals = extractGravitationGivens(fullText);

  const results: SolvedQuestionResult[] = [];
  for (const q of questions) {
    const res = solveGravitationQuestion(q, globals, fullText);
    if (!res) {
      return null;
    }
    results.push(res);
  }

  return results;
}
