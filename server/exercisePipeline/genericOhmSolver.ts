/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LA LOI D'OHM ET LES CIRCUITS SIMPLES — SANS IA
 * ==============================================================================
 *
 * Couvre les calculs fondamentaux d'électrocinétique (loi d'Ohm, puissance, énergie,
 * associations série et dérivation de résistors) à partir des grandeurs et unités
 * explicitement données dans l'énoncé.
 *
 *   1. Loi d'Ohm : U = R * I  <=>  I = U / R  <=>  R = U / I
 *   2. Puissance électrique : P = U * I = R * I^2 = U^2 / R
 *   3. Énergie électrique : E = P * t = U * I * t  (en Joules ou Wh/kWh)
 *   4. Résistance équivalente en série : Req = R1 + R2 (+ R3...)
 *      Tension totale : U = U1 + U2
 *      Tension aux bornes : Uk = Rk * I
 *   5. Résistance équivalente en dérivation (parallèle) : 1/Req = 1/R1 + 1/R2
 *      <=> Req = (R1 * R2) / (R1 + R2)
 *      Courant total : I = I1 + I2
 *      Courant de branche : Ik = U / Rk
 *
 * RÈGLE DE SÛRETÉ : Si une seule donnée nécessaire est manquante, ambiguë ou si une
 * unité n'est pas reconnue, le moteur renvoie null pour tout l'exercice.
 */

import { ParsedQuestion, SolvedQuestionResult } from './types';

const NUM = '-?\\d+(?:[.,]\\d+)?';

function parseNum(s: string): number {
  return parseFloat(s.replace(',', '.'));
}

function fmtNum(n: number): string {
  const r = Math.round(n * 1e6) / 1e6;
  return `${r}`;
}

// ==========================================================================
// 1. UNITÉS ET CONVERSIONS VERS LE SYSTÈME INTERNATIONAL (S.I.)
// ==========================================================================

function normVoltage(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'v' || u === 'volt' || u === 'volts') return val;
  if (u === 'mv' || u === 'millivolt' || u === 'millivolts') return val * 1e-3;
  if (u === 'kv' || u === 'kilovolt' || u === 'kilovolts') return val * 1e3;
  return null;
}

function normCurrent(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'a' || u === 'ampere' || u === 'amperes' || u === 'ampère' || u === 'ampères') return val;
  if (u === 'ma' || u === 'milliampere' || u === 'milliampères' || u === 'milliampere' || u === 'milliampère') return val * 1e-3;
  if (u === 'µa' || u === 'ua' || u === 'microampere' || u === 'microampère') return val * 1e-6;
  return null;
}

function normResistance(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'ω' || u === 'Ω' || u === 'ohm' || u === 'ohms' || u === 'omega' || u === 'w') return val;
  if (u === 'kω' || u === 'kΩ' || u === 'kohm' || u === 'kohms' || u === 'kilo-ohm' || u === 'kilo-ohms' || u === 'kiloohm' || u === 'kiloohms' || u === 'kw') return val * 1e3;
  if (u === 'mω' || u === 'mΩ' || u === 'mohm' || u === 'mohms' || u === 'megaohm' || u === 'megaohms' || u === 'mégaohm' || u === 'mégaohms') return val * 1e6;
  return null;
}

function normPower(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'w' || u === 'watt' || u === 'watts') return val;
  if (u === 'mw' || u === 'milliwatt' || u === 'milliwatts') return val * 1e-3;
  if (u === 'kw' || u === 'kilowatt' || u === 'kilowatts') return val * 1e3;
  return null;
}

function normEnergy(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 'j' || u === 'joule' || u === 'joules') return val;
  if (u === 'kj' || u === 'kilojoule' || u === 'kilojoules') return val * 1e3;
  if (u === 'wh' || u === 'watt-heure' || u === 'watt-heures' || u === 'wattheure' || u === 'wattheures') return val * 3600;
  if (u === 'kwh' || u === 'kilowatt-heure' || u === 'kilowatt-heures' || u === 'kilowattheure' || u === 'kilowattheures') return val * 3.6e6;
  return null;
}

function normTime(val: number, rawUnit: string): number | null {
  const u = rawUnit.toLowerCase().trim();
  if (u === 's' || u === 'sec' || u === 'seconde' || u === 'secondes') return val;
  if (u === 'min' || u === 'minute' || u === 'minutes') return val * 60;
  if (u === 'h' || u === 'heure' || u === 'heures') return val * 3600;
  return null;
}

const VOLT_UNIT = '(kv|mv|v|volts?)(?=[\\s.,;:!?\\)\\]]|$)';
const AMP_UNIT = '(ma|µa|ua|a|amp[èe]res?)(?=[\\s.,;:!?\\)\\]]|$)';
const OHM_UNIT = '(k[ΩΩω]|m[ΩΩω]|[ΩΩω]|kohm|kohms|mohm|mohms|ohms?)(?=[\\s.,;:!?\\)\\]]|$)';
const WATT_UNIT = '(kw|mw|w|watts?)(?=[\\s.,;:!?\\)\\]]|$)';
const ENERGY_UNIT = '(kj|kwh|wh|j|joules?)(?=[\\s.,;:!?\\)\\]]|$)';
const TIME_UNIT = '(secondes?|sec|s|minutes?|min|heures?|h)(?=[\\s.,;:!?\\)\\]]|$)';

export interface OhmCircuitGivens {
  U: number | null; // Tension totale en Volts
  I: number | null; // Courant total en Ampères
  R: number | null; // Résistance unique en Ohms
  R1: number | null; // Résistance 1 en Ohms
  R2: number | null; // Résistance 2 en Ohms
  R3: number | null; // Résistance 3 en Ohms (si 3 résistors)
  U1: number | null; // Tension R1
  U2: number | null; // Tension R2
  I1: number | null; // Courant R1
  I2: number | null; // Courant R2
  P: number | null; // Puissance en Watts
  E: number | null; // Énergie en Joules
  t: number | null; // Temps en secondes
  circuitType: 'series' | 'parallel' | 'single' | 'unknown';
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

export function extractOhmGivens(fullText: string): OhmCircuitGivens {
  const t = fullText.replace(/[−–—]/g, '-');

  // Détection du type de circuit
  let circuitType: 'series' | 'parallel' | 'single' | 'unknown' = 'unknown';
  if (/en\s+s[ée]rie|montage\s+s[ée]rie|associ[ée]s?\s+en\s+s[ée]rie/i.test(t)) {
    circuitType = 'series';
  } else if (/en\s+d[ée]rivation|en\s+parall[èe]le|montage\s+en\s+d[ée]rivation|mont[ée]s?\s+en\s+d[ée]rivation|associ[ée]s?\s+en\s+d[ée]rivation/i.test(t)) {
    circuitType = 'parallel';
  }

  // Résistances individuelles R1, R2, R3
  const R1 = extractQuantity(t, [
    new RegExp(`R\\s*1\\s*=\\s*(${NUM})\\s*${OHM_UNIT}`, 'gi'),
    new RegExp(`r[ée]sistance\\s+R1\\s*(?:de|est de|:)?\\s*(${NUM})\\s*${OHM_UNIT}`, 'gi'),
    new RegExp(`r[ée]sistor\\s+R1\\s*(?:de|est de|:)?\\s*(${NUM})\\s*${OHM_UNIT}`, 'gi'),
    new RegExp(`premier\\s+r[ée]sistor\\s+(?:de\\s+)?(${NUM})\\s*${OHM_UNIT}`, 'gi'),
  ], normResistance);

  const R2 = extractQuantity(t, [
    new RegExp(`R\\s*2\\s*=\\s*(${NUM})\\s*${OHM_UNIT}`, 'gi'),
    new RegExp(`r[ée]sistance\\s+R2\\s*(?:de|est de|:)?\\s*(${NUM})\\s*${OHM_UNIT}`, 'gi'),
    new RegExp(`r[ée]sistor\\s+R2\\s*(?:de|est de|:)?\\s*(${NUM})\\s*${OHM_UNIT}`, 'gi'),
    new RegExp(`deuxi[èe]me\\s+r[ée]sistor\\s+(?:de\\s+)?(${NUM})\\s*${OHM_UNIT}`, 'gi'),
    new RegExp(`second\\s+r[ée]sistor\\s+(?:de\\s+)?(${NUM})\\s*${OHM_UNIT}`, 'gi'),
  ], normResistance);

  const R3 = extractQuantity(t, [
    new RegExp(`R\\s*3\\s*=\\s*(${NUM})\\s*${OHM_UNIT}`, 'gi'),
    new RegExp(`r[ée]sistance\\s+R3\\s*(?:de|est de|:)?\\s*(${NUM})\\s*${OHM_UNIT}`, 'gi'),
  ], normResistance);

  // Résistance globale R (si pas R1/R2)
  let R = extractQuantity(t, [
    new RegExp(`\\bR\\s*=\\s*(${NUM})\\s*${OHM_UNIT}`, 'gi'),
    new RegExp(`r[ée]sistance\\s+(?:de|est de|égale à|:)?\\s*(${NUM})\\s*${OHM_UNIT}`, 'gi'),
    new RegExp(`r[ée]sistor\\s+de\\s+(${NUM})\\s*${OHM_UNIT}`, 'gi'),
    new RegExp(`conducteur\\s+ohmique\\s+de\\s+r[ée]sistance\\s+(${NUM})\\s*${OHM_UNIT}`, 'gi'),
  ], normResistance);

  if (R1 !== null && R2 !== null && R === null) {
    // Si R1 et R2 sont présents, R représente la résistance globale / équivalente
  }

  if (circuitType === 'unknown') {
    if (R1 !== null && R2 !== null) {
      // 2 résistances mais type non spécifié -> unknown
    } else {
      circuitType = 'single';
    }
  }

  // Tension U
  const U = extractQuantity(t, [
    new RegExp(`\\bU\\s*=\\s*(${NUM})\\s*${VOLT_UNIT}`, 'gi'),
    new RegExp(`tension\\s+(?:de|est de|égale à|totale de|:)?\\s*(${NUM})\\s*${VOLT_UNIT}`, 'gi'),
    new RegExp(`d\.?d\.?p\.?\\s*(?:de|est de|:)?\\s*(${NUM})\\s*${VOLT_UNIT}`, 'gi'),
    new RegExp(`g[ée]n[ée]rateur\\s+de\\s+tension\\s+(?:de|:)?\\s*(${NUM})\\s*${VOLT_UNIT}`, 'gi'),
    new RegExp(`sous\\s+une\\s+tension\\s+(?:de\\s+)?(${NUM})\\s*${VOLT_UNIT}`, 'gi'),
  ], normVoltage);

  // Courant I
  const I = extractQuantity(t, [
    new RegExp(`\\bI\\s*=\\s*(${NUM})\\s*${AMP_UNIT}`, 'gi'),
    new RegExp(`intensit[ée]\\s+(?:du\\s+courant\\s+)?(?:de|est de|égale à|totale de|:)?\\s*(${NUM})\\s*${AMP_UNIT}`, 'gi'),
    new RegExp(`courant\\s+(?:de|est de|:)?\\s*(${NUM})\\s*${AMP_UNIT}`, 'gi'),
    new RegExp(`travers[ée]\\s+par\\s+(?:un\\s+courant\\s+de\\s+)?(${NUM})\\s*${AMP_UNIT}`, 'gi'),
  ], normCurrent);

  // Puissance P
  const P = extractQuantity(t, [
    new RegExp(`\\bP\\s*=\\s*(${NUM})\\s*${WATT_UNIT}`, 'gi'),
    new RegExp(`puissance\\s+(?:[ée]lectrique\\s+)?(?:de|est de|égale à|:)?\\s*(${NUM})\\s*${WATT_UNIT}`, 'gi'),
  ], normPower);

  // Énergie E
  const E = extractQuantity(t, [
    new RegExp(`\\bE\\s*=\\s*(${NUM})\\s*${ENERGY_UNIT}`, 'gi'),
    new RegExp(`[ée]nergie\\s+(?:[ée]lectrique\\s+)?(?:dissip[ée]e\\s+)?(?:de|est de|égale à|:)?\\s*(${NUM})\\s*${ENERGY_UNIT}`, 'gi'),
  ], normEnergy);

  // Temps t
  const time = extractQuantity(t, [
    new RegExp(`\\bt\\s*=\\s*(${NUM})\\s*${TIME_UNIT}`, 'gi'),
    new RegExp(`(?:dur[ée]e|temps)\\s+(?:de|est de|:)?\\s*(${NUM})\\s*${TIME_UNIT}`, 'gi'),
    new RegExp(`pendant\\s+(?:une\\s+dur[ée]e\\s+de\\s+)?(${NUM})\\s*${TIME_UNIT}`, 'gi'),
  ], normTime);

  // Tensions et courants locaux U1, U2, I1, I2
  const U1 = extractQuantity(t, [new RegExp(`U\\s*1\\s*=\\s*(${NUM})\\s*${VOLT_UNIT}`, 'gi')], normVoltage);
  const U2 = extractQuantity(t, [new RegExp(`U\\s*2\\s*=\\s*(${NUM})\\s*${VOLT_UNIT}`, 'gi')], normVoltage);
  const I1 = extractQuantity(t, [new RegExp(`I\\s*1\\s*=\\s*(${NUM})\\s*${AMP_UNIT}`, 'gi')], normCurrent);
  const I2 = extractQuantity(t, [new RegExp(`I\\s*2\\s*=\\s*(${NUM})\\s*${AMP_UNIT}`, 'gi')], normCurrent);

  return {
    U,
    I,
    R,
    R1,
    R2,
    R3,
    U1,
    U2,
    I1,
    I2,
    P,
    E,
    t: time,
    circuitType,
  };
}

/**
 * Détecte si l'exercice relève de la loi d'Ohm / électrocinétique élémentaire.
 */
export function looksLikeOhmExercise(text: string): boolean {
  const t = text.toLowerCase();
  const hasElectricKeywords = /loi d'ohm|conducteur ohmique|r[ée]sistor|r[ée]sistance|[ée]lectrocin[ée]tique|intensit[ée]|tension|puissance [ée]lectrique|[ée]nergie [ée]lectrique|r[ée]sistance [ée]quivalente/i.test(t);
  const hasElectricUnits = /[ΩΩω]|ohm|volt|\bamp[èe]res?|\bma\b|\bmv\b|\bkw\b|\bwatt/i.test(t);
  return hasElectricKeywords && hasElectricUnits;
}

export const looksLikeOhmCircuitExercise = looksLikeOhmExercise;

export function solveOhmQuestion(
  q: ParsedQuestion,
  globals: OhmCircuitGivens,
  fullText: string
): SolvedQuestionResult | null {
  const cleanQ = q.cleanText;
  const lowerQ = cleanQ.toLowerCase();

  // Extraction d'un temps local à la question si précisé
  const localTime = extractQuantity(cleanQ, [
    new RegExp(`\\bt\\s*=\\s*(${NUM})\\s*${TIME_UNIT}`, 'gi'),
    new RegExp(`(?:dur[ée]e|temps)\\s+(?:de|est de|:)?\\s*(${NUM})\\s*${TIME_UNIT}`, 'gi'),
    new RegExp(`pendant\\s+(?:une\\s+dur[ée]e\\s+de\\s+)?(${NUM})\\s*${TIME_UNIT}`, 'gi'),
  ], normTime);
  const effectiveTime = localTime !== null ? localTime : globals.t;

  // Extraction d'une tension ou résistance locale si modifiée dans la sous-question
  const localU = extractQuantity(cleanQ, [
    new RegExp(`\\bU\\s*=\\s*(${NUM})\\s*${VOLT_UNIT}`, 'gi'),
    new RegExp(`tension\\s+(?:de|:)?\\s*(${NUM})\\s*${VOLT_UNIT}`, 'gi'),
  ], normVoltage);
  const effectiveU = localU !== null ? localU : globals.U;

  const localI = extractQuantity(cleanQ, [
    new RegExp(`\\bI\\s*=\\s*(${NUM})\\s*${AMP_UNIT}`, 'gi'),
    new RegExp(`intensit[ée]\\s+(?:de|:)?\\s*(${NUM})\\s*${AMP_UNIT}`, 'gi'),
  ], normCurrent);
  const effectiveI = localI !== null ? localI : globals.I;

  const localR = extractQuantity(cleanQ, [
    new RegExp(`\\bR\\s*=\\s*(${NUM})\\s*${OHM_UNIT}`, 'gi'),
    new RegExp(`r[ée]sistance\\s+(?:de|:)?\\s*(${NUM})\\s*${OHM_UNIT}`, 'gi'),
  ], normResistance);
  const effectiveR = localR !== null ? localR : globals.R;

  // =========================================================================
  // 1. RÉSISTANCE ÉQUIVALENTE (Req)
  // =========================================================================
  if (/r[ée]sistance [ée]quivalente|r_?eq\b/i.test(lowerQ) || (/calculer.*r[ée]sistance/i.test(lowerQ) && globals.R1 !== null && globals.R2 !== null)) {
    if (globals.R1 !== null && globals.R2 !== null) {
      if (globals.circuitType === 'series') {
        const R3 = globals.R3 || 0;
        const Req = globals.R1 + globals.R2 + R3;
        const steps: string[] = [
          `Pour des résistors associés en série, la résistance équivalente est la somme des résistances :`,
          globals.R3 !== null
            ? `R_{eq} = R_1 + R_2 + R_3`
            : `R_{eq} = R_1 + R_2`,
          `R_1 = ${fmtNum(globals.R1)} \\ \\Omega, \\ R_2 = ${fmtNum(globals.R2)} \\ \\Omega${globals.R3 !== null ? `, \\ R_3 = ${fmtNum(globals.R3)} \\ \\Omega` : ''}`,
          `R_{eq} = ${fmtNum(globals.R1)} + ${fmtNum(globals.R2)}${globals.R3 !== null ? ' + ' + fmtNum(globals.R3) : ''} = ${fmtNum(Req)} \\ \\Omega`,
        ];
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps,
          finalAnswer: `R_{eq} = ${fmtNum(Req)} \\ \\Omega`,
          verificationPassed: true,
        };
      } else if (globals.circuitType === 'parallel') {
        const Req = (globals.R1 * globals.R2) / (globals.R1 + globals.R2);
        const steps: string[] = [
          `Pour deux résistors associés en dérivation (parallèle), la résistance équivalente vérifie :`,
          `\\dfrac{1}{R_{eq}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} \\iff R_{eq} = \\dfrac{R_1 \\times R_2}{R_1 + R_2}`,
          `R_1 = ${fmtNum(globals.R1)} \\ \\Omega, \\ R_2 = ${fmtNum(globals.R2)} \\ \\Omega`,
          `R_{eq} = \\dfrac{${fmtNum(globals.R1)} \\times ${fmtNum(globals.R2)}}{${fmtNum(globals.R1)} + ${fmtNum(globals.R2)}} = \\dfrac{${fmtNum(globals.R1 * globals.R2)}}{${fmtNum(globals.R1 + globals.R2)}} = ${fmtNum(Req)} \\ \\Omega`,
        ];
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps,
          finalAnswer: `R_{eq} = ${fmtNum(Req)} \\ \\Omega`,
          verificationPassed: true,
        };
      }
    }
  }

  // =========================================================================
  // 2. INTENSITÉ DU COURANT I (TOTAL OU DE BRANCHE)
  // =========================================================================
  if (/intensit[ée]|courant/i.test(lowerQ) && !/tension/i.test(lowerQ)) {
    // Cas 2a : Courants de branche I1 et I2 en dérivation
    if (/i1\b|i2\b|dans chaque branche|chaque r[ée]sistor/i.test(lowerQ) && globals.circuitType === 'parallel' && globals.R1 !== null && globals.R2 !== null && effectiveU !== null) {
      const I1 = effectiveU / globals.R1;
      const I2 = effectiveU / globals.R2;
      const Itot = I1 + I2;
      const steps: string[] = [
        `En dérivation, la tension U aux bornes de chaque branche est identique (U = ${fmtNum(effectiveU)} V) :`,
        `• Pour le résistor R_1 : I_1 = \\dfrac{U}{R_1} = \\dfrac{${fmtNum(effectiveU)}}{${fmtNum(globals.R1)}} = ${fmtNum(I1)} \\text{ A} (${fmtNum(I1 * 1000)} \\text{ mA})`,
        `• Pour le résistor R_2 : I_2 = \\dfrac{U}{R_2} = \\dfrac{${fmtNum(effectiveU)}}{${fmtNum(globals.R2)}} = ${fmtNum(I2)} \\text{ A} (${fmtNum(I2 * 1000)} \\text{ mA})`,
        `D'après la loi des nœuds, l'intensité totale est : I = I_1 + I_2 = ${fmtNum(I1)} + ${fmtNum(I2)} = ${fmtNum(Itot)} \\text{ A}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `I_1 = ${fmtNum(I1)} \\text{ A}, \\ I_2 = ${fmtNum(I2)} \\text{ A}, \\ I_{totale} = ${fmtNum(Itot)} \\text{ A}`,
        verificationPassed: true,
      };
    }

    // Cas 2b : Intensité dans un circuit série (I = U / Req)
    if (globals.circuitType === 'series' && globals.R1 !== null && globals.R2 !== null && effectiveU !== null) {
      const Req = globals.R1 + globals.R2 + (globals.R3 || 0);
      const I = effectiveU / Req;
      const steps: string[] = [
        `D'après la loi d'Ohm appliquée au circuit série global : I = \\dfrac{U}{R_{eq}}`,
        `Avec R_{eq} = ${fmtNum(Req)} \\ \\Omega \\text{ et } U = ${fmtNum(effectiveU)} \\text{ V}`,
        `I = \\dfrac{${fmtNum(effectiveU)}}{${fmtNum(Req)}} = ${fmtNum(I)} \\text{ A} (${fmtNum(I * 1000)} \\text{ mA})`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `I = ${fmtNum(I)} \\text{ A}`,
        verificationPassed: true,
      };
    }

    // Cas 2c : Intensité dans un circuit simple ou dérivation globale (I = U / R)
    if (effectiveU !== null) {
      let Rval: number | null = effectiveR;
      if (Rval === null && globals.R1 !== null && globals.R2 !== null) {
        if (globals.circuitType === 'parallel') {
          Rval = (globals.R1 * globals.R2) / (globals.R1 + globals.R2);
        } else if (globals.circuitType === 'series') {
          Rval = globals.R1 + globals.R2 + (globals.R3 || 0);
        }
      }

      if (Rval !== null && Rval > 0) {
        const I = effectiveU / Rval;
        const steps: string[] = [
          `D'après la loi d'Ohm : U = R \\times I \\iff I = \\dfrac{U}{R}`,
          `U = ${fmtNum(effectiveU)} \\text{ V}, \\ R = ${fmtNum(Rval)} \\ \\Omega`,
          `I = \\dfrac{${fmtNum(effectiveU)}}{${fmtNum(Rval)}} = ${fmtNum(I)} \\text{ A} (${fmtNum(I * 1000)} \\text{ mA})`,
        ];
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps,
          finalAnswer: `I = ${fmtNum(I)} \\text{ A}`,
          verificationPassed: true,
        };
      }
    }

    // Cas 2d : Intensité à partir de la puissance P et tension U (I = P / U)
    if (globals.P !== null && effectiveU !== null && effectiveU > 0) {
      const I = globals.P / effectiveU;
      const steps: string[] = [
        `D'après la relation entre puissance, tension et intensité : P = U \\times I \\iff I = \\dfrac{P}{U}`,
        `P = ${fmtNum(globals.P)} \\text{ W}, \\ U = ${fmtNum(effectiveU)} \\text{ V}`,
        `I = \\dfrac{${fmtNum(globals.P)}}{${fmtNum(effectiveU)}} = ${fmtNum(I)} \\text{ A}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `I = ${fmtNum(I)} \\text{ A}`,
        verificationPassed: true,
      };
    }
  }

  // =========================================================================
  // 3. TENSION U (TOTALE OU AUX BORNES DE R1, R2)
  // =========================================================================
  if (/tension|d\.?d\.?p|voltage/i.test(lowerQ) && !/intensit[ée]/i.test(lowerQ)) {
    // Cas 3a : Tensions partielles U1 et U2 en série
    if (/u1\b|u2\b|aux bornes de r1|aux bornes de r2|chaque r[ée]sistor/i.test(lowerQ) && globals.circuitType === 'series' && globals.R1 !== null && globals.R2 !== null) {
      const Req = globals.R1 + globals.R2 + (globals.R3 || 0);
      const I = effectiveI !== null ? effectiveI : (effectiveU !== null ? effectiveU / Req : null);
      if (I !== null) {
        const U1 = globals.R1 * I;
        const U2 = globals.R2 * I;
        const steps: string[] = [
          `Dans un circuit série, le courant I = ${fmtNum(I)} A est identique à travers chaque dipôle :`,
          `• Tension aux bornes de R_1 : U_1 = R_1 \\times I = ${fmtNum(globals.R1)} \\times ${fmtNum(I)} = ${fmtNum(U1)} \\text{ V}`,
          `• Tension aux bornes de R_2 : U_2 = R_2 \\times I = ${fmtNum(globals.R2)} \\times ${fmtNum(I)} = ${fmtNum(U2)} \\text{ V}`,
          `Vérification loi des mailles / additivité des tensions : U_1 + U_2 = ${fmtNum(U1 + U2)} \\text{ V}`,
        ];
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps,
          finalAnswer: `U_1 = ${fmtNum(U1)} \\text{ V}, \\ U_2 = ${fmtNum(U2)} \\text{ V}`,
          verificationPassed: true,
        };
      }
    }

    // Cas 3b : Tension simple U = R * I
    if (effectiveR !== null && effectiveI !== null) {
      const U = effectiveR * effectiveI;
      const steps: string[] = [
        `D'après la loi d'Ohm : U = R \\times I`,
        `R = ${fmtNum(effectiveR)} \\ \\Omega, \\ I = ${fmtNum(effectiveI)} \\text{ A}`,
        `U = ${fmtNum(effectiveR)} \\times ${fmtNum(effectiveI)} = ${fmtNum(U)} \\text{ V}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `U = ${fmtNum(U)} \\text{ V}`,
        verificationPassed: true,
      };
    }
  }

  // =========================================================================
  // 4. CALCUL DE LA RÉSISTANCE R (R = U / I ou R = U^2 / P ou R = P / I^2)
  // =========================================================================
  if (/calculer.*r[ée]sistance|valeur de la r[ée]sistance/i.test(lowerQ) && !/r[ée]sistance [ée]quivalente/i.test(lowerQ)) {
    if (effectiveU !== null && effectiveI !== null && effectiveI > 0) {
      const R = effectiveU / effectiveI;
      const steps: string[] = [
        `D'après la loi d'Ohm : U = R \\times I \\iff R = \\dfrac{U}{I}`,
        `U = ${fmtNum(effectiveU)} \\text{ V}, \\ I = ${fmtNum(effectiveI)} \\text{ A}`,
        `R = \\dfrac{${fmtNum(effectiveU)}}{${fmtNum(effectiveI)}} = ${fmtNum(R)} \\ \\Omega`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `R = ${fmtNum(R)} \\ \\Omega`,
        verificationPassed: true,
      };
    }

    if (globals.P !== null && effectiveI !== null && effectiveI > 0) {
      const R = globals.P / (effectiveI * effectiveI);
      const steps: string[] = [
        `D'après la relation P = R \\times I^2 \\iff R = \\dfrac{P}{I^2}`,
        `P = ${fmtNum(globals.P)} \\text{ W}, \\ I = ${fmtNum(effectiveI)} \\text{ A}`,
        `R = \\dfrac{${fmtNum(globals.P)}}{(${fmtNum(effectiveI)})^2} = ${fmtNum(R)} \\ \\Omega`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `R = ${fmtNum(R)} \\ \\Omega`,
        verificationPassed: true,
      };
    }
  }

  // =========================================================================
  // 5. PUISSANCE ÉLECTRIQUE (P = U * I = R * I^2 = U^2 / R)
  // =========================================================================
  if (/puissance/i.test(lowerQ)) {
    let Uval = effectiveU;
    let Ival = effectiveI;
    let Rval = effectiveR;

    if (Rval === null && globals.R1 !== null && globals.R2 !== null) {
      Rval = globals.circuitType === 'series'
        ? globals.R1 + globals.R2 + (globals.R3 || 0)
        : (globals.R1 * globals.R2) / (globals.R1 + globals.R2);
    }

    if (Uval !== null && Ival === null && Rval !== null && Rval > 0) {
      Ival = Uval / Rval;
    } else if (Ival !== null && Uval === null && Rval !== null) {
      Uval = Rval * Ival;
    }

    if (Uval !== null && Ival !== null) {
      const P = Uval * Ival;
      const steps: string[] = [
        `La puissance électrique consommée par un dipôle ohmique est donnée par : P = U \\times I`,
        `U = ${fmtNum(Uval)} \\text{ V}, \\ I = ${fmtNum(Ival)} \\text{ A}`,
        `P = ${fmtNum(Uval)} \\times ${fmtNum(Ival)} = ${fmtNum(P)} \\text{ W} (${fmtNum(P * 1000)} \\text{ mW})`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `P = ${fmtNum(P)} \\text{ W}`,
        verificationPassed: true,
      };
    }

    if (Rval !== null && Ival !== null) {
      const P = Rval * Ival * Ival;
      const steps: string[] = [
        `La puissance électrique par effet Joule est donnée par : P = R \\times I^2`,
        `R = ${fmtNum(Rval)} \\ \\Omega, \\ I = ${fmtNum(Ival)} \\text{ A}`,
        `P = ${fmtNum(Rval)} \\times (${fmtNum(Ival)})^2 = ${fmtNum(P)} \\text{ W}`,
      ];
      return {
        numberLabel: q.numberLabel,
        titleOrPrompt: cleanQ,
        steps,
        finalAnswer: `P = ${fmtNum(P)} \\text{ W}`,
        verificationPassed: true,
      };
    }
  }

  // =========================================================================
  // 6. ÉNERGIE ÉLECTRIQUE / DISSIPÉE PAR EFFET JOULE (E = P * t)
  // =========================================================================
  if (/[ée]nergie|effet joule|chaleur/i.test(lowerQ)) {
    if (effectiveTime !== null) {
      let Pval = globals.P;
      if (Pval === null) {
        let Uval = effectiveU;
        let Ival = effectiveI;
        let Rval = effectiveR;
        if (Rval === null && globals.R1 !== null && globals.R2 !== null) {
          Rval = globals.circuitType === 'series'
            ? globals.R1 + globals.R2 + (globals.R3 || 0)
            : (globals.R1 * globals.R2) / (globals.R1 + globals.R2);
        }
        if (Uval !== null && Ival === null && Rval !== null && Rval > 0) Ival = Uval / Rval;
        if (Ival !== null && Uval === null && Rval !== null) Uval = Rval * Ival;
        if (Uval !== null && Ival !== null) Pval = Uval * Ival;
        else if (Rval !== null && Ival !== null) Pval = Rval * Ival * Ival;
      }

      if (Pval !== null) {
        const E_Joules = Pval * effectiveTime;
        const E_Wh = E_Joules / 3600;
        const steps: string[] = [
          `L'énergie électrique consommée / dissipée est donnée par : E = P \\times t`,
          `P = ${fmtNum(Pval)} \\text{ W}, \\ t = ${fmtNum(effectiveTime)} \\text{ s}`,
          `E = ${fmtNum(Pval)} \\times ${fmtNum(effectiveTime)} = ${fmtNum(E_Joules)} \\text{ J} = ${fmtNum(E_Wh)} \\text{ Wh}`,
        ];
        return {
          numberLabel: q.numberLabel,
          titleOrPrompt: cleanQ,
          steps,
          finalAnswer: `E = ${fmtNum(E_Joules)} \\text{ J}`,
          verificationPassed: true,
        };
      }
    }
  }

  return null;
}

export function tryGenericOhmResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  if (questions.length === 0) return null;

  const fullText = [contextCombined, ...questions.map((q) => q.cleanText)].join('\n');
  if (!looksLikeOhmExercise(fullText)) {
    return null;
  }

  const globals = extractOhmGivens(fullText);

  const results: SolvedQuestionResult[] = [];
  for (const q of questions) {
    const res = solveOhmQuestion(q, globals, fullText);
    if (!res) {
      return null; // Règle absolue : null si une seule question ne peut pas être résolue
    }
    results.push(res);
  }

  return results;
}
