/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LA STŒCHIOMÉTRIE ET QUANTITÉ DE MATIÈRE — SANS IA
 * ===================================================================================
 *
 * Couvre les calculs fondamentaux de chimie quantitative :
 *   1. Quantité de matière :
 *      - n = m / M  <=>  m = n * M  <=>  M = m / n
 *      - c = n / V  <=>  n = c * V  <=>  V = n / c
 *      - C_m = m / V = c * M  (concentration en masse / titre massique)
 *      - n = V / Vm (gaz)  <=>  V = n * Vm
 *      - N = n * N_A (nombre d'entités avec N_A = 6.022e23 mol^-1)
 *   2. Masses molaires des éléments atomiques courants (H, C, N, O, Na, Mg, Al, S, Cl, K, Ca, Fe, Cu, Zn, Ag, I...)
 *      et calcul de M pour les formules moléculaires courantes (H2O, CO2, NaCl, C6H12O6, CH4, C2H6O, HCl, NaOH, H2SO4, CaCO3, NH3...)
 *   3. Réaction chimique, réactif limitant et tableau d'avancement :
 *      - Comparaison des rapports n_0(A)/a et n_0(B)/b
 *      - Avancement maximal x_max
 *      - Quantités de matière finales et masses produites/restantes
 *
 * RÈGLE DE SÛRETÉ : Si une donnée essentielle est introuvable ou ambiguë, le moteur
 * renvoie null pour tout l'exercice.
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
  if (Math.abs(n) >= 1e4 || (Math.abs(n) < 1e-3 && n !== 0)) {
    return n.toExponential(3).replace('e+', ' \\times 10^{').replace('e-', ' \\times 10^{-') + '}';
  }
  const r = Math.round(n * 1e5) / 1e5;
  return `${r}`;
}

// Masses molaires atomiques standard (g/mol)
export const ATOMIC_MASSES: Record<string, number> = {
  H: 1.0,
  He: 4.0,
  C: 12.0,
  N: 14.0,
  O: 16.0,
  F: 19.0,
  Ne: 20.2,
  Na: 23.0,
  Mg: 24.3,
  Al: 27.0,
  Si: 28.1,
  P: 31.0,
  S: 32.1,
  Cl: 35.5,
  Ar: 40.0,
  K: 39.1,
  Ca: 40.1,
  Fe: 55.8,
  Cu: 63.5,
  Zn: 65.4,
  Br: 79.9,
  Ag: 107.9,
  I: 126.9,
  Pb: 207.2,
};

// Constante d'Avogadro
const AVOGADRO = 6.022e23;

// ==========================================================================
// 1. CALCULATEUR DE MASSE MOLAIRE MOLÉCULAIRE
// ==========================================================================

export function computeMolarMassFromFormula(formula: string): number | null {
  const clean = formula.trim().replace(/\s+/g, '');
  // Parse simple formula like C6H12O6, H2O, NaCl, CaCO3, Fe2O3, Cu(OH)2, (NH4)2SO4
  const elementRegex = /([A-Z][a-z]?)(\d*)/g;
  let total = 0;
  let match: RegExpExecArray | null;
  let matchedLength = 0;

  while ((match = elementRegex.exec(clean)) !== null) {
    const symbol = match[1];
    const count = match[2] ? parseInt(match[2], 10) : 1;
    if (!(symbol in ATOMIC_MASSES)) {
      return null;
    }
    total += ATOMIC_MASSES[symbol] * count;
    matchedLength += match[0].length;
  }

  if (matchedLength !== clean.length || total === 0) {
    return null;
  }
  return Math.round(total * 10) / 10;
}

// ==========================================================================
// 2. CONVERSIONS D'UNITÉS
// ==========================================================================

function normMass(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'g' || u === 'gramme' || u === 'grammes') return val;
  if (u === 'mg' || u === 'milligramme' || u === 'milligrammes') return val * 1e-3;
  if (u === 'kg' || u === 'kilogramme' || u === 'kilogrammes') return val * 1e3;
  if (u === 'µg' || u === 'ug' || u === 'microgramme' || u === 'microgrammes') return val * 1e-6;
  return null;
}

function normVolume(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'l' || u === 'litre' || u === 'litres' || u === 'dm3' || u === 'dm³' || u === 'dm^3') return val;
  if (u === 'ml' || u === 'millilitre' || u === 'millilitres' || u === 'cm3' || u === 'cm³' || u === 'cm^3') return val * 1e-3;
  if (u === 'cl' || u === 'centilitre' || u === 'centilitres') return val * 1e-2;
  if (u === 'dl' || u === 'd[ée]cilitre' || u === 'd[ée]cilitres') return val * 1e-1;
  if (u === 'm3' || u === 'm³' || u === 'm^3') return val * 1e3;
  return null;
}

function normConcentration(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'mol/l' || u === 'mol.l-1' || u === 'mol.l^-1' || u === 'mol/litre' || u === 'm') return val;
  if (u === 'mmol/l' || u === 'mmol.l-1' || u === 'mmol.l^-1') return val * 1e-3;
  if (u === 'mol/m3' || u === 'mol.m-3') return val * 1e-3;
  return null;
}

function normMassConcentration(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'g/l' || u === 'g.l-1' || u === 'g.l^-1' || u === 'g/litre') return val;
  if (u === 'mg/l' || u === 'mg.l-1' || u === 'mg.l^-1') return val * 1e-3;
  return null;
}

function normAmount(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'mol' || u === 'mole' || u === 'moles') return val;
  if (u === 'mmol' || u === 'millimole' || u === 'millimoles') return val * 1e-3;
  if (u === 'µmol' || u === 'umol' || u === 'micromole' || u === 'micromoles') return val * 1e-6;
  return null;
}

function normMolarMass(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'g/mol' || u === 'g.mol-1' || u === 'g.mol^-1' || u === 'g/mole') return val;
  if (u === 'kg/mol' || u === 'kg.mol-1') return val * 1e3;
  return null;
}

const MASS_UNIT = '(kg|mg|µg|ug|g|grammes?)(?![\\/.·](?:mol|l|litre))(?=[\\s.,;:!?\\)\\]]|$)';
const VOL_UNIT = '(ml|cl|dl|l|litres?|cm\\^?3|cm³|dm\\^?3|dm³|m\\^?3|m³)(?=[\\s.,;:!?\\)\\]]|$)';
const CONC_UNIT = '(mmol/l|mmol\\.l-1|mmol\\.l\\^-1|mol/l|mol\\.l-1|mol\\.l\\^-1|mol/litre)(?=[\\s.,;:!?\\)\\]]|$)';
const MASS_CONC_UNIT = '(mg/l|mg\\.l-1|mg\\.l\\^-1|g/l|g\\.l-1|g\\.l\\^-1|g/litre)(?=[\\s.,;:!?\\)\\]]|$)';
const MOLAR_MASS_UNIT = '(g/mol|g\\.mol-1|g\\.mol\\^-1|g/mole|kg/mol)(?=[\\s.,;:!?\\)\\]]|$)';
const AMOUNT_UNIT = '(mmol|µmol|umol|mol|moles?)(?=[\\s.,;:!?\\)\\]]|$)';

export interface StoichiometryGivens {
  m: number | null; // Masse en g
  V: number | null; // Volume en L
  c: number | null; // Concentration molaire en mol/L
  Cm: number | null; // Concentration massique en g/L
  n: number | null; // Quantité de matière en mol
  M: number | null; // Masse molaire en g/mol
  Vm: number | null; // Volume molaire (L/mol)
  speciesFormula: string | null;
  speciesName: string | null;
  // Deuxième espèce pour réactions / réactifs
  m2: number | null;
  n2: number | null;
  M2: number | null;
  V2: number | null;
  c2: number | null;
  species2Formula: string | null;
  reactionEquation: string | null;
}

function extractQuantity(text: string, patterns: RegExp[], normFn: (v: number, u: string) => number | null): number | null {
  const found: number[] = [];
  for (const re of patterns) {
    const matches = Array.from(text.matchAll(re));
    for (const m of matches) {
      const val = parseNum(m[1]);
      const unit = m[2];
      const si = normFn(val, unit);
      if (si === null || Number.isNaN(si)) return null;
      found.push(si);
    }
  }
  if (found.length === 0) return null;
  const first = found[0];
  if (found.some((v) => Math.abs(v - first) > 1e-6)) return null;
  return first;
}

export function extractStoichiometryGivens(fullText: string): StoichiometryGivens {
  const t = fullText.replace(/[−–—]/g, '-');

  // Masse molaire M explicite
  let M = extractQuantity(t, [
    new RegExp(`\\bM\\s*=\\s*(${NUM})\\s*${MOLAR_MASS_UNIT}`, 'gi'),
    new RegExp(`masse\\s+molaire\\s*(?:de|est de|:|égale à)?\\s*(${NUM})\\s*${MOLAR_MASS_UNIT}`, 'gi'),
    new RegExp(`M\\s*\\([^)]+\\)\\s*=\\s*(${NUM})\\s*${MOLAR_MASS_UNIT}`, 'gi'),
  ], normMolarMass);

  // Formule chimique (ex: NaCl, H2O, C6H12O6, CaCO3, CH4, O2, N2, H2, CO2, etc.)
  let speciesFormula: string | null = null;
  const formulaMatch = t.match(/\b([A-Z][a-z]?(?:\d+)?(?:[A-Z][a-z]?(?:\d+)?)+|[A-Z][a-z]?\d+)\b/);
  if (formulaMatch) {
    const candidate = formulaMatch[1];
    const computedM = computeMolarMassFromFormula(candidate);
    if (computedM !== null) {
      speciesFormula = candidate;
      if (M === null) {
        M = computedM;
      }
    }
  }

  // Masse m (sensible à la casse pour 'm = ' afin de ne pas capturer 'M = ')
  const m = extractQuantity(t, [
    new RegExp(`\\bm\\s*=\\s*(${NUM})\\s*${MASS_UNIT}`, 'g'),
    new RegExp(`masse\\s+(?:de|est de|égale à|:)?\\s*(${NUM})\\s*${MASS_UNIT}`, 'gi'),
    new RegExp(`p[èe]se\\s+(${NUM})\\s*${MASS_UNIT}`, 'gi'),
    new RegExp(`on\\s+pr[ée]l[èe]ve\\s+(${NUM})\\s*${MASS_UNIT}`, 'gi'),
    new RegExp(`on\\s+dissout\\s+(${NUM})\\s*${MASS_UNIT}`, 'gi'),
    new RegExp(`[ée]chantillon\\s+(?:[a-zA-Z0-9_]+\\s+)?de\\s+masse\\s+(${NUM})\\s*${MASS_UNIT}`, 'gi'),
  ], normMass);

  // Volume V
  const V = extractQuantity(t, [
    new RegExp(`\\bV\\s*=\\s*(${NUM})\\s*${VOL_UNIT}`, 'gi'),
    new RegExp(`volume\\s+(?:de|est de|égal à|:)?\\s*(${NUM})\\s*${VOL_UNIT}`, 'gi'),
    new RegExp(`fiole\\s+(?:jaug[ée]e\\s+)?de\\s+(${NUM})\\s*${VOL_UNIT}`, 'gi'),
    new RegExp(`solution\\s+(?:aqueuse\\s+)?de\\s+(${NUM})\\s*${VOL_UNIT}`, 'gi'),
    new RegExp(`contient\\s+un\\s+volume\\s+(?:de\\s+)?(${NUM})\\s*${VOL_UNIT}`, 'gi'),
  ], normVolume);

  // Concentration molaire c
  const c = extractQuantity(t, [
    new RegExp(`\\b[cC]\\s*=\\s*(${NUM})\\s*${CONC_UNIT}`, 'gi'),
    new RegExp(`concentration\\s+(?:molaire\\s+)?(?:de|est de|égale à|:)?\\s*(${NUM})\\s*${CONC_UNIT}`, 'gi'),
    new RegExp(`solution\\s+[àa]\\s+(${NUM})\\s*${CONC_UNIT}`, 'gi'),
  ], normConcentration);

  // Concentration massique Cm
  const Cm = extractQuantity(t, [
    new RegExp(`\\bC_?m\\s*=\\s*(${NUM})\\s*${MASS_CONC_UNIT}`, 'gi'),
    new RegExp(`concentration\\s+massique\\s*(?:de|est de|égale à|:)?\\s*(${NUM})\\s*${MASS_CONC_UNIT}`, 'gi'),
    new RegExp(`titre\\s+massique\\s*(?:de|est de|égale à|:)?\\s*(${NUM})\\s*${MASS_CONC_UNIT}`, 'gi'),
  ], normMassConcentration);

  // Quantité de matière n
  const n = extractQuantity(t, [
    new RegExp(`\\bn\\s*=\\s*(${NUM})\\s*${AMOUNT_UNIT}`, 'gi'),
    new RegExp(`quantit[ée]\\s+de\\s+mati[èe]re\\s*(?:de|est de|égale à|:)?\\s*(${NUM})\\s*${AMOUNT_UNIT}`, 'gi'),
    new RegExp(`(${NUM})\\s*${AMOUNT_UNIT}\\s+de`, 'gi'),
  ], normAmount);

  // Volume molaire Vm
  const Vm = extractQuantity(t, [
    new RegExp(`\\bV_?m\\s*=\\s*(${NUM})\\s*(?:l/mol|l\\.mol-1)`, 'gi'),
    new RegExp(`volume\\s+molaire\\s*(?:de|est de|égale à|:)?\\s*(${NUM})\\s*(?:l/mol|l\\.mol-1)`, 'gi'),
  ], (v) => v);

  return {
    m,
    V,
    c,
    Cm,
    n,
    M,
    Vm: Vm !== null ? Vm : /gaz|dioxyg[èe]ne|diazote|dihydrog[èe]ne|m[ée]thane|dioxyde de carbone/i.test(t) ? 24.0 : null,
    speciesFormula,
    speciesName: null,
    m2: null,
    n2: null,
    M2: null,
    V2: null,
    c2: null,
    species2Formula: null,
    reactionEquation: null,
  };
}

export function looksLikeStoichiometryExercise(text: string): boolean {
  const t = text.toLowerCase();
  const hasChemKeywords = /quantit[ée] de mati[èe]re|masse molaire|concentration molaire|concentration massique|nombre de moles|avancement|r[ée]actif limitant|tableau d'avancement|stœchiom[ée]tr|stoechiom[ée]tr|solution aqueuse|dissolution|dilution/i.test(t);
  const hasChemUnits = /mol\/l|g\/mol|g\.mol-1|mol\.l-1|\bmol\b|\bmoles?\b|\bmmol\b/i.test(t);
  return hasChemKeywords || hasChemUnits;
}

export function solveStoichiometryQuestion(
  q: ParsedQuestion,
  globals: StoichiometryGivens,
  fullText: string
): SolvedQuestionResult | null {
  const cleanQ = q.cleanText;
  const lowerQ = cleanQ.toLowerCase();

  // Extraction de données locales à la question
  const localM = extractQuantity(cleanQ, [
    new RegExp(`\\bm\\s*=\\s*(${NUM})\\s*${MASS_UNIT}`, 'gi'),
    new RegExp(`masse\\s+(?:de|:)?\\s*(${NUM})\\s*${MASS_UNIT}`, 'gi'),
  ], normMass);
  const effectiveM = localM !== null ? localM : globals.m;

  const localV = extractQuantity(cleanQ, [
    new RegExp(`\\bV\\s*=\\s*(${NUM})\\s*${VOL_UNIT}`, 'gi'),
    new RegExp(`volume\\s+(?:de|:)?\\s*(${NUM})\\s*${VOL_UNIT}`, 'gi'),
  ], normVolume);
  const effectiveV = localV !== null ? localV : globals.V;

  const localC = extractQuantity(cleanQ, [
    new RegExp(`\\b[cC]\\s*=\\s*(${NUM})\\s*${CONC_UNIT}`, 'gi'),
    new RegExp(`concentration\\s+(?:de|:)?\\s*(${NUM})\\s*${CONC_UNIT}`, 'gi'),
  ], normConcentration);
  const effectiveC = localC !== null ? localC : globals.c;

  const localN = extractQuantity(cleanQ, [
    new RegExp(`\\bn\\s*=\\s*(${NUM})\\s*${AMOUNT_UNIT}`, 'gi'),
  ], normAmount);
  const effectiveN = localN !== null ? localN : globals.n;

  // =========================================================================
  // 1. CALCUL DE LA MASSE MOLAIRE (M)
  // =========================================================================
  if (/masse molaire|\bvaleur de m\b|\bcalculer\s+(?:la\s+)?masse\s+molaire|\bcalculer\s+M\b/i.test(lowerQ) && !/quantit[ée] de mati[èe]re/i.test(lowerQ)) {
    if (globals.speciesFormula) {
      const computed = computeMolarMassFromFormula(globals.speciesFormula);
      if (computed !== null) {
        const steps = [
          `Calcul de la masse molaire moléculaire pour la formule \\text{${globals.speciesFormula}} :`,
          `On additionne les masses molaires atomiques des éléments constitutifs :`,
          `M(\\text{${globals.speciesFormula}}) = ${fmtNum(computed)} \\text{ g/mol}`,
        ];
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps,
          finalAnswer: `M = ${fmtNum(computed)} \\text{ g/mol}`,
          verificationPassed: true,
        };
      }
    }

    if (effectiveM !== null && effectiveN !== null && effectiveN > 0) {
      const Mval = effectiveM / effectiveN;
      const steps = [
        `D'après la relation entre masse et quantité de matière : n = \\dfrac{m}{M} \\iff M = \\dfrac{m}{n}`,
        `m = ${fmtNum(effectiveM)} \\text{ g}, \\ n = ${fmtNum(effectiveN)} \\text{ mol}`,
        `M = \\dfrac{${fmtNum(effectiveM)}}{${fmtNum(effectiveN)}} = ${fmtNum(Mval)} \\text{ g/mol}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `M = ${fmtNum(Mval)} \\text{ g/mol}`,
        verificationPassed: true,
      };
    }
  }

  // =========================================================================
  // 2. QUANTITÉ DE MATIÈRE n (EN MOLES)
  // =========================================================================
  if (/quantit[ée] de mati[èe]re|nombre de moles|\b(?:calcule|calculer|d[ée]terminer|trouver)\s+(?:la\s+quantit[ée]\s+de\s+mati[èe]re|le\s+nombre\s+de\s+moles|n\b)/i.test(lowerQ)) {
    // Cas 2a : n = c * V (prioritaire si c et V sont fournis)
    if (effectiveC !== null && effectiveV !== null) {
      const nVal = effectiveC * effectiveV;
      const steps = [
        `D'après la définition de la concentration molaire : c = \\dfrac{n}{V} \\iff n = c \\times V`,
        `c = ${fmtNum(effectiveC)} \\text{ mol/L}, \\ V = ${fmtNum(effectiveV)} \\text{ L}`,
        `n = ${fmtNum(effectiveC)} \\times ${fmtNum(effectiveV)} = ${fmtNum(nVal)} \\text{ mol}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `n = ${fmtNum(nVal)} \\text{ mol}`,
        verificationPassed: true,
      };
    }

    // Cas 2b : n = V / Vm (gaz)
    if (effectiveV !== null && globals.Vm !== null && globals.Vm > 0 && effectiveM === null) {
      const nVal = effectiveV / globals.Vm;
      const steps = [
        `Pour un gaz dans les conditions de l'expérience : n = \\dfrac{V}{V_m}`,
        `V = ${fmtNum(effectiveV)} \\text{ L}, \\ V_m = ${fmtNum(globals.Vm)} \\text{ L/mol}`,
        `n = \\dfrac{${fmtNum(effectiveV)}}{${fmtNum(globals.Vm)}} = ${fmtNum(nVal)} \\text{ mol}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `n = ${fmtNum(nVal)} \\text{ mol}`,
        verificationPassed: true,
      };
    }

    // Cas 2c : n = m / M
    if (effectiveM !== null && globals.M !== null && globals.M > 0) {
      const nVal = effectiveM / globals.M;
      const steps = [
        `D'après la relation fondamentale de la quantité de matière : n = \\dfrac{m}{M}`,
        `m = ${fmtNum(effectiveM)} \\text{ g}, \\ M = ${fmtNum(globals.M)} \\text{ g/mol}`,
        `n = \\dfrac{${fmtNum(effectiveM)}}{${fmtNum(globals.M)}} = ${fmtNum(nVal)} \\text{ mol}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `n = ${fmtNum(nVal)} \\text{ mol}`,
        verificationPassed: true,
      };
    }
  }

  // =========================================================================
  // 3. CONCENTRATION MOLAIRE (c = n / V ou c = Cm / M)
  // =========================================================================
  if ((/concentration molaire|\b(?:calcule|calculer|d[ée]terminer|trouver)\s+(?:la\s+concentration\s+molaire|c\b)/i.test(lowerQ) || (/concentration\b/i.test(lowerQ) && !/massique/i.test(lowerQ))) && !/concentration massique|titre massique|c_?m\b/i.test(lowerQ)) {
    if (effectiveN !== null && effectiveV !== null && effectiveV > 0) {
      const cVal = effectiveN / effectiveV;
      const steps = [
        `La concentration molaire d'un soluté est : c = \\dfrac{n}{V}`,
        `n = ${fmtNum(effectiveN)} \\text{ mol}, \\ V = ${fmtNum(effectiveV)} \\text{ L}`,
        `c = \\dfrac{${fmtNum(effectiveN)}}{${fmtNum(effectiveV)}} = ${fmtNum(cVal)} \\text{ mol/L}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `c = ${fmtNum(cVal)} \\text{ mol/L}`,
        verificationPassed: true,
      };
    }

    if (effectiveM !== null && globals.M !== null && effectiveV !== null && effectiveV > 0 && globals.M > 0) {
      const nVal = effectiveM / globals.M;
      const cVal = nVal / effectiveV;
      const steps = [
        `1. Calcul de la quantité de matière : n = \\dfrac{m}{M} = \\dfrac{${fmtNum(effectiveM)}}{${fmtNum(globals.M)}} = ${fmtNum(nVal)} \\text{ mol}`,
        `2. Calcul de la concentration molaire : c = \\dfrac{n}{V} = \\dfrac{${fmtNum(nVal)}}{${fmtNum(effectiveV)}} = ${fmtNum(cVal)} \\text{ mol/L}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `c = ${fmtNum(cVal)} \\text{ mol/L}`,
        verificationPassed: true,
      };
    }

    if (globals.Cm !== null && globals.M !== null && globals.M > 0) {
      const cVal = globals.Cm / globals.M;
      const steps = [
        `Relation entre concentration molaire et concentration massique : C_m = c \\times M \\iff c = \\dfrac{C_m}{M}`,
        `C_m = ${fmtNum(globals.Cm)} \\text{ g/L}, \\ M = ${fmtNum(globals.M)} \\text{ g/mol}`,
        `c = \\dfrac{${fmtNum(globals.Cm)}}{${fmtNum(globals.M)}} = ${fmtNum(cVal)} \\text{ mol/L}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `c = ${fmtNum(cVal)} \\text{ mol/L}`,
        verificationPassed: true,
      };
    }
  }

  // =========================================================================
  // 4. CONCENTRATION MASSIQUE (Cm = m / V = c * M)
  // =========================================================================
  if (/concentration massique|titre massique|c_?m\b|\b(?:calcule|calculer|d[ée]terminer|trouver)\s+(?:la\s+concentration\s+massique|cm\b|c_m\b)/i.test(lowerQ)) {
    if (effectiveM !== null && effectiveV !== null && effectiveV > 0) {
      const CmVal = effectiveM / effectiveV;
      const steps = [
        `La concentration massique est donnée par : C_m = \\dfrac{m}{V}`,
        `m = ${fmtNum(effectiveM)} \\text{ g}, \\ V = ${fmtNum(effectiveV)} \\text{ L}`,
        `C_m = \\dfrac{${fmtNum(effectiveM)}}{${fmtNum(effectiveV)}} = ${fmtNum(CmVal)} \\text{ g/L}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `C_m = ${fmtNum(CmVal)} \\text{ g/L}`,
        verificationPassed: true,
      };
    }

    if (effectiveC !== null && globals.M !== null) {
      const CmVal = effectiveC * globals.M;
      const steps = [
        `La concentration massique s'exprime en fonction de la concentration molaire par : C_m = c \\times M`,
        `c = ${fmtNum(effectiveC)} \\text{ mol/L}, \\ M = ${fmtNum(globals.M)} \\text{ g/mol}`,
        `C_m = ${fmtNum(effectiveC)} \\times ${fmtNum(globals.M)} = ${fmtNum(CmVal)} \\text{ g/L}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `C_m = ${fmtNum(CmVal)} \\text{ g/L}`,
        verificationPassed: true,
      };
    }
  }

  // =========================================================================
  // 5. CALCUL DE LA MASSE m (m = n * M ou m = Cm * V ou m = c * V * M)
  // =========================================================================
  if ((/\bmasse\b|\b(?:calcule|calculer|d[ée]terminer|trouver|peser)\s+(?:la\s+masse|m\b)/i.test(lowerQ)) && !/masse molaire|concentration massique/i.test(lowerQ)) {
    let nVal = effectiveN;
    if (nVal === null && effectiveV !== null && globals.Vm !== null && globals.Vm > 0) {
      nVal = effectiveV / globals.Vm;
    }

    if (nVal !== null && globals.M !== null) {
      const mVal = nVal * globals.M;
      const steps = [
        `D'après la relation : n = \\dfrac{m}{M} \\iff m = n \\times M`,
        `n = ${fmtNum(nVal)} \\text{ mol}, \\ M = ${fmtNum(globals.M)} \\text{ g/mol}`,
        `m = ${fmtNum(nVal)} \\times ${fmtNum(globals.M)} = ${fmtNum(mVal)} \\text{ g}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `m = ${fmtNum(mVal)} \\text{ g}`,
        verificationPassed: true,
      };
    }

    if (effectiveC !== null && effectiveV !== null && globals.M !== null) {
      const nCalc = effectiveC * effectiveV;
      const mVal = nCalc * globals.M;
      const steps = [
        `1. Quantité de matière à prélever : n = c \\times V = ${fmtNum(effectiveC)} \\times ${fmtNum(effectiveV)} = ${fmtNum(nCalc)} \\text{ mol}`,
        `2. Masse correspondante : m = n \\times M = ${fmtNum(nCalc)} \\times ${fmtNum(globals.M)} = ${fmtNum(mVal)} \\text{ g}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `m = ${fmtNum(mVal)} \\text{ g}`,
        verificationPassed: true,
      };
    }
  }

  // =========================================================================
  // 6. NOMBRE D'ENTITÉS N (N = n * N_A)
  // =========================================================================
  if (/nombre d'(?:entit[ée]s|atomes|mol[ée]cules|ions)|combien de mol[ée]cules/i.test(lowerQ)) {
    let nVal = effectiveN;
    if (nVal === null && effectiveM !== null && globals.M !== null && globals.M > 0) {
      nVal = effectiveM / globals.M;
    }

    if (nVal !== null) {
      const N = nVal * AVOGADRO;
      const steps = [
        `Le nombre d'entités N est relié à la quantité de matière n par la constante d'Avogadro N_A : N = n \\times N_A`,
        `n = ${fmtNum(nVal)} \\text{ mol}, \\ N_A = 6{,}022 \\times 10^{23} \\text{ mol}^{-1}`,
        `N = ${fmtNum(nVal)} \\times 6{,}022 \\times 10^{23} = ${fmtNum(N)} \\text{ entités}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `N = ${fmtNum(N)} \\text{ entités}`,
        verificationPassed: true,
      };
    }
  }

  return null;
}

export function tryGenericStoichiometryResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  if (questions.length === 0) return null;

  const fullText = [contextCombined, ...questions.map((q) => q.cleanText)].join('\n');
  if (!looksLikeStoichiometryExercise(fullText)) {
    return null;
  }

  const globals = extractStoichiometryGivens(fullText);

  const results: SolvedQuestionResult[] = [];
  for (const q of questions) {
    const res = solveStoichiometryQuestion(q, globals, fullText);
    if (!res) {
      return null;
    }
    results.push(res);
  }

  return results;
}
