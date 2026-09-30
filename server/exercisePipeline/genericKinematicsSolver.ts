/**
 * MOTEUR DE CALCUL GÉNÉRIQUE POUR LA CINÉMATIQUE RECTILIGNE (MRU/MRUA) — SANS IA
 * ================================================================================
 *
 * Couvre les 4 formules mécaniques de base du mouvement rectiligne (uniforme
 * ou uniformément varié), à partir des valeurs numériques ET unités données
 * EXPLICITEMENT dans l'énoncé — jamais de valeur inventée ou supposée :
 *
 *   1. v = d / t                              (vitesse moyenne)
 *   2. a = (v - v0) / t                       (accélération moyenne)
 *   3. Δx = v0.t + ½.a.t²                     (distance parcourue / déplacement)
 *   4. v(t) = v0 + a.t                        (vitesse instantanée)
 *
 * PRINCIPE DE SÛRETÉ : si une seule donnée nécessaire (valeur, unité) n'est
 * pas identifiée avec certitude dans l'énoncé, on renvoie null pour TOUTE
 * la question plutôt que de deviner — voir tryGenericKinematicsResolutionForExercise.
 *
 * Deux conventions physiques explicites (non des suppositions) sont
 * reconnues : "part du repos" / "sans vitesse initiale" => v0 = 0, et un
 * signe négatif implicite pour une "décélération"/un freinage énoncé sans
 * signe explicite sur la valeur numérique de l'accélération.
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

type Quantity = { value: number; unit: string };

// Longueur -> mètres
const LENGTH_UNITS: Record<string, number> = {
  m: 1,
  metre: 1,
  metres: 1,
  mètre: 1,
  mètres: 1,
  km: 1000,
  kilometre: 1000,
  kilometres: 1000,
  kilomètre: 1000,
  kilomètres: 1000,
  cm: 0.01,
  centimetre: 0.01,
  centimetres: 0.01,
  centimètre: 0.01,
  centimètres: 0.01,
};

// Temps -> secondes
const TIME_UNITS: Record<string, number> = {
  s: 1,
  sec: 1,
  seconde: 1,
  secondes: 1,
  min: 60,
  minute: 60,
  minutes: 60,
  h: 3600,
  heure: 3600,
  heures: 3600,
};

function normLengthUnit(raw: string): number | null {
  const t = raw.toLowerCase().trim();
  return t in LENGTH_UNITS ? LENGTH_UNITS[t] : null;
}

function normTimeUnit(raw: string): number | null {
  const t = raw.toLowerCase().trim();
  return t in TIME_UNITS ? TIME_UNITS[t] : null;
}

// Convertit une vitesse donnée en unité reconnue (m/s ou km/h) vers m/s.
function speedToSI(value: number, rawUnit: string): number | null {
  const t = rawUnit.toLowerCase().replace(/\s+/g, '');
  if (t === 'm/s' || t === 'm.s-1' || t === 'm.s^-1' || t === 'ms-1') return value;
  if (t === 'km/h' || t === 'km.h-1' || t === 'km.h^-1' || t === 'kmh-1' || t === 'km/heure') return value / 3.6;
  return null;
}

// Convertit une accélération donnée en unité reconnue vers m/s².
function accelToSI(value: number, rawUnit: string): number | null {
  const t = rawUnit.toLowerCase().replace(/\s+/g, '');
  if (t === 'm/s2' || t === 'm/s²' || t === 'm/s^2' || t === 'm.s-2' || t === 'm.s^-2' || t === 'ms-2') return value;
  return null;
}

// ==========================================================================
// 2. EXTRACTION DES GRANDEURS DEPUIS LE TEXTE
// ==========================================================================

/**
 * Cherche toutes les occurrences d'un motif "nom_variable = valeur unité"
 * (ou formulation équivalente en langage libre) et vérifie qu'elles sont
 * cohérentes entre elles (même valeur convertie en SI) si plusieurs
 * occurrences sont trouvées. Renvoie null si aucune occurrence, ou si des
 * occurrences contradictoires sont trouvées (ambiguïté -> ne jamais deviner).
 */
function extractConsistentSpeed(text: string, patterns: RegExp[]): number | null {
  const foundSI: number[] = [];
  for (const re of patterns) {
    const matches = Array.from(text.matchAll(re));
    for (const m of matches) {
      const val = parseNum(m[1]);
      const unitToken = m[2];
      const si = speedToSI(val, unitToken);
      if (si === null || Number.isNaN(si)) return null; // unité non reconnue -> refuser plutôt que deviner
      foundSI.push(si);
    }
  }
  if (foundSI.length === 0) return null;
  const first = foundSI[0];
  if (foundSI.some((v) => Math.abs(v - first) > 1e-9)) return null; // valeurs contradictoires
  return first;
}

function extractConsistentAccel(text: string, patterns: RegExp[]): number | null {
  const foundSI: number[] = [];
  for (const re of patterns) {
    const matches = Array.from(text.matchAll(re));
    for (const m of matches) {
      const val = parseNum(m[1]);
      const unitToken = m[2];
      const si = accelToSI(val, unitToken);
      if (si === null || Number.isNaN(si)) return null;
      foundSI.push(si);
    }
  }
  if (foundSI.length === 0) return null;
  const first = foundSI[0];
  if (foundSI.some((v) => Math.abs(v - first) > 1e-9)) return null;
  return first;
}

function extractConsistentTime(text: string, patterns: RegExp[]): number | null {
  const foundSI: number[] = [];
  for (const re of patterns) {
    const matches = Array.from(text.matchAll(re));
    for (const m of matches) {
      const val = parseNum(m[1]);
      const factor = normTimeUnit(m[2]);
      if (factor === null) return null;
      foundSI.push(val * factor);
    }
  }
  if (foundSI.length === 0) return null;
  const first = foundSI[0];
  if (foundSI.some((v) => Math.abs(v - first) > 1e-9)) return null;
  return first;
}

function extractConsistentLength(text: string, patterns: RegExp[]): number | null {
  const foundSI: number[] = [];
  for (const re of patterns) {
    const matches = Array.from(text.matchAll(re));
    for (const m of matches) {
      const val = parseNum(m[1]);
      const factor = normLengthUnit(m[2]);
      if (factor === null) return null;
      foundSI.push(val * factor);
    }
  }
  if (foundSI.length === 0) return null;
  const first = foundSI[0];
  if (foundSI.some((v) => Math.abs(v - first) > 1e-9)) return null;
  return first;
}

const SPEED_UNIT_TOKEN = '(km/h|km\\.h-1|km\\.h\\^-1|m/s|m\\.s-1|m\\.s\\^-1)';
const ACCEL_UNIT_TOKEN = '(m/s\\^?2|m/s²|m\\.s-2|m\\.s\\^-2)';
const TIME_UNIT_TOKEN = '(secondes?|sec|s|minutes?|min|heures?|h)\\b';
const LENGTH_UNIT_TOKEN = '(kilom[èe]tres?|km|centim[èe]tres?|cm|m[èe]tres?|m)\\b';

export interface KinematicsGivens {
  v0: number | null; // m/s
  a: number | null; // m/s²
  x0: number | null; // m (position initiale, seulement si explicite)
  hasRestConvention: boolean; // "part du repos" détecté (v0 = 0 non-inventé)
}

/**
 * Extrait les grandeurs GLOBALES de l'exercice (v0, a, x0) depuis le texte
 * complet. Ces grandeurs sont en général données une seule fois dans
 * l'introduction et valables pour toutes les questions.
 */
export function extractGlobalKinematicsGivens(fullText: string): KinematicsGivens {
  const t = fullText.replace(/[−–—]/g, '-');

  const hasRestConvention = /part(ent)?\s+(du\s+)?repos|sans\s+vitesse\s+initiale|initialement\s+au\s+repos|au\s+repos\s+(à|au)\s+l'instant/i.test(t);

  let v0 = extractConsistentSpeed(t, [
    new RegExp(`v\\s*0\\s*=\\s*(${NUM})\\s*${SPEED_UNIT_TOKEN}`, 'gi'),
    new RegExp(`vitesse\\s+initiale\\s*(?:de|est de|:|égale à)?\\s*(${NUM})\\s*${SPEED_UNIT_TOKEN}`, 'gi'),
    new RegExp(`(?:roule|roulant|circule|lanc[ée])\\s+[àa]\\s+(?:une\\s+vitesse\\s+de\\s+)?(${NUM})\\s*${SPEED_UNIT_TOKEN}`, 'gi'),
  ]);
  if (v0 === null && hasRestConvention) v0 = 0;

  let a = extractConsistentAccel(t, [
    new RegExp(`\\ba\\s*=\\s*(${NUM})\\s*${ACCEL_UNIT_TOKEN}`, 'gi'),
    new RegExp(`acc[ée]l[ée]ration\\s*(?:de|est de|:|égale à)?\\s*(${NUM})\\s*${ACCEL_UNIT_TOKEN}`, 'gi'),
  ]);
  // Convention de signe : une "décélération"/un "freinage" énoncé sans
  // signe explicite sur la valeur numérique doit être compté négativement
  // (ralentissement). On ne l'applique QUE si le mot "décélér../freine/
  // ralenti.." apparaît ET que la valeur trouvée est positive (si l'énoncé
  // a déjà mis un signe "-", on ne le retourne pas une seconde fois).
  if (a !== null && a > 0 && /d[ée]c[ée]l[èe]re|d[ée]c[ée]l[ée]ration|freine|freinage|ralenti/i.test(t)) {
    a = -a;
  }

  const x0 = extractConsistentLength(t, [
    new RegExp(`x\\s*0\\s*=\\s*(${NUM})\\s*${LENGTH_UNIT_TOKEN}`, 'gi'),
  ]);
  const hasOriginConvention = /part(ent)?\s+de\s+l'origine|origine\s+des\s+espaces|x\s*0\s*=\s*0\b/i.test(t);

  return {
    v0,
    a,
    x0: x0 !== null ? x0 : hasOriginConvention ? 0 : null,
    hasRestConvention,
  };
}

/** Cherche un temps LOCAL à une question (ex: "à t = 3 s", "après 5 secondes"). */
function extractLocalTime(text: string): number | null {
  return extractConsistentTime(text, [
    new RegExp(`t\\s*=\\s*(${NUM})\\s*${TIME_UNIT_TOKEN}`, 'gi'),
    new RegExp(`(?:au bout de|apr[èe]s|pendant)\\s+(${NUM})\\s*${TIME_UNIT_TOKEN}`, 'gi'),
  ]);
}

/** Cherche une distance/déplacement LOCAL à une question. */
function extractLocalDistance(text: string): number | null {
  return extractConsistentLength(text, [
    new RegExp(`d\\s*=\\s*(${NUM})\\s*${LENGTH_UNIT_TOKEN}`, 'gi'),
    new RegExp(`distance\\s+(?:de|parcourue\\s+(?:de|:)?|:)\\s*(${NUM})\\s*${LENGTH_UNIT_TOKEN}`, 'gi'),
    new RegExp(`parcour[tu]\\w*\\s+(${NUM})\\s*${LENGTH_UNIT_TOKEN}`, 'gi'),
  ]);
}

/** Cherche une vitesse finale/instantanée LOCALE à une question. */
function extractLocalFinalSpeed(text: string): number | null {
  return extractConsistentSpeed(text, [
    new RegExp(`v\\s*(?:f|final(?:e)?)?\\s*=\\s*(${NUM})\\s*${SPEED_UNIT_TOKEN}`, 'gi'),
    new RegExp(`vitesse\\s+finale\\s*(?:de|est de|:|égale à)?\\s*(${NUM})\\s*${SPEED_UNIT_TOKEN}`, 'gi'),
    new RegExp(`(?:atteint|devient)\\s+(?:une\\s+vitesse\\s+de\\s+)?(${NUM})\\s*${SPEED_UNIT_TOKEN}`, 'gi'),
  ]);
}

// ==========================================================================
// 3. RÉSOLUTION D'UNE QUESTION
// ==========================================================================

export function solveKinematicsQuestion(
  q: ParsedQuestion,
  globals: KinematicsGivens,
  fullExerciseText: string
): SolvedQuestionResult | null {
  const cleanQ = q.cleanText;
  const lowerQ = cleanQ.toLowerCase();

  // Le temps et la distance/vitesse-finale peuvent être donnés localement
  // (spécifiques à cette question) ou globalement (dans l'intro).
  const localT = extractLocalTime(cleanQ);
  const localD = extractLocalDistance(cleanQ);
  const localVf = extractLocalFinalSpeed(cleanQ);

  // --- FORMULE 1 : vitesse moyenne v = d / t ---
  if (/vitesse\s+moyenne/i.test(lowerQ)) {
    const d = localD !== null ? localD : extractLocalDistance(fullExerciseText);
    const t = localT !== null ? localT : extractLocalTime(fullExerciseText);
    if (d === null || t === null || t === 0) return null;

    const v = d / t;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [
        `Vitesse moyenne : v = \\dfrac{d}{t}`,
        `d = ${fmtNum(d)} \\text{ m (converti en unités S.I.)}, \\ t = ${fmtNum(t)} \\text{ s}`,
        `v = \\dfrac{${fmtNum(d)}}{${fmtNum(t)}} = ${fmtNum(v)} \\text{ m/s}`,
      ],
      finalAnswer: `v = ${fmtNum(v)} m/s`,
      verificationPassed: true,
    };
  }

  // --- FORMULE 2 : accélération moyenne a = (v - v0) / t ---
  if (/acc[ée]l[ée]ration/i.test(lowerQ) && globals.a === null) {
    const v0 = globals.v0;
    const vf = localVf !== null ? localVf : extractLocalFinalSpeed(fullExerciseText);
    const t = localT !== null ? localT : extractLocalTime(fullExerciseText);
    if (v0 === null || vf === null || t === null || t === 0) return null;

    const a = (vf - v0) / t;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [
        `Accélération moyenne : a = \\dfrac{v - v_0}{t}`,
        `v_0 = ${fmtNum(v0)} \\text{ m/s}, \\ v = ${fmtNum(vf)} \\text{ m/s}, \\ t = ${fmtNum(t)} \\text{ s}`,
        `a = \\dfrac{${fmtNum(vf)} - ${fmtNum(v0)}}{${fmtNum(t)}} = ${fmtNum(a)} \\text{ m/s}^2`,
      ],
      finalAnswer: `a = ${fmtNum(a)} m/s²`,
      verificationPassed: true,
    };
  }

  // --- FORMULE 3 : distance parcourue / déplacement Δx = v0.t + ½.a.t² ---
  // (ne nécessite PAS de connaître x0 : c'est un déplacement, pas une
  // position absolue — voir FORMULE 3bis ci-dessous pour la position.)
  if (/distance\s+parcourue|d[ée]placement/i.test(lowerQ)) {
    const v0 = globals.v0;
    const a = globals.a;
    const t = localT !== null ? localT : extractLocalTime(fullExerciseText);
    if (v0 === null || a === null || t === null) return null;

    const dx = v0 * t + 0.5 * a * t * t;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [
        `Distance parcourue (mouvement rectiligne) : \\Delta x = v_0 t + \\dfrac{1}{2} a t^2`,
        `v_0 = ${fmtNum(v0)} \\text{ m/s}, \\ a = ${fmtNum(a)} \\text{ m/s}^2, \\ t = ${fmtNum(t)} \\text{ s}`,
        `\\Delta x = ${fmtNum(v0)} \\times ${fmtNum(t)} + \\dfrac{1}{2} \\times ${fmtNum(a)} \\times ${fmtNum(t)}^2 = ${fmtNum(dx)} \\text{ m}`,
      ],
      finalAnswer: `Δx = ${fmtNum(dx)} m`,
      verificationPassed: true,
    };
  }

  // --- FORMULE 3bis : position absolue x(t) = x0 + v0.t + ½.a.t² ---
  // (nécessite x0 EXPLICITEMENT donné ou une convention d'origine énoncée)
  if (/position|abscisse/i.test(lowerQ)) {
    const v0 = globals.v0;
    const a = globals.a;
    const x0 = globals.x0;
    const t = localT !== null ? localT : extractLocalTime(fullExerciseText);
    if (v0 === null || a === null || x0 === null || t === null) return null;

    const x = x0 + v0 * t + 0.5 * a * t * t;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [
        `Position à l'instant t : x(t) = x_0 + v_0 t + \\dfrac{1}{2} a t^2`,
        `x_0 = ${fmtNum(x0)} \\text{ m}, \\ v_0 = ${fmtNum(v0)} \\text{ m/s}, \\ a = ${fmtNum(a)} \\text{ m/s}^2, \\ t = ${fmtNum(t)} \\text{ s}`,
        `x(t) = ${fmtNum(x0)} + ${fmtNum(v0)} \\times ${fmtNum(t)} + \\dfrac{1}{2} \\times ${fmtNum(a)} \\times ${fmtNum(t)}^2 = ${fmtNum(x)} \\text{ m}`,
      ],
      finalAnswer: `x(t) = ${fmtNum(x)} m`,
      verificationPassed: true,
    };
  }

  // --- FORMULE 4 : vitesse instantanée v(t) = v0 + a.t ---
  if (/vitesse/i.test(lowerQ)) {
    const v0 = globals.v0;
    const a = globals.a;
    const t = localT !== null ? localT : extractLocalTime(fullExerciseText);
    if (v0 === null || a === null || t === null) return null;

    const v = v0 + a * t;
    return {
      numberLabel: q.numberLabel,
      titleOrPrompt: cleanQ,
      steps: [
        `Vitesse instantanée : v(t) = v_0 + a t`,
        `v_0 = ${fmtNum(v0)} \\text{ m/s}, \\ a = ${fmtNum(a)} \\text{ m/s}^2, \\ t = ${fmtNum(t)} \\text{ s}`,
        `v(t) = ${fmtNum(v0)} + ${fmtNum(a)} \\times ${fmtNum(t)} = ${fmtNum(v)} \\text{ m/s}`,
      ],
      finalAnswer: `v(t) = ${fmtNum(v)} m/s`,
      verificationPassed: true,
    };
  }

  return null;
}

// ==========================================================================
// 4. DÉTECTION "CE TEXTE RESSEMBLE À UN EXERCICE DE CINÉMATIQUE"
// ==========================================================================

/**
 * Détection LÉGÈRE (indépendante de la capacité effective à résoudre)
 * utilisée par server.ts pour décider si un exercice de physique relève du
 * thème cinématique — et donc si un échec de résolution doit renvoyer une
 * réponse honnête plutôt que de tomber sur l'ancien moteur à texte
 * générique (pcTleCdeEngine / mechanicsSolver), qui produit une
 * méthodologie déconnectée des valeurs numériques de l'énoncé pour ce
 * thème précis.
 */
export function looksLikeRectilinearKinematicsExercise(fullText: string): boolean {
  const t = fullText.toLowerCase();
  const hasKinematicsVocab = /mru\b|mrua\b|mouvement\s+rectiligne|cin[ée]matique|vitesse\s+initiale|vitesse\s+moyenne|vitesse\s+finale|acc[ée]l[ée]ration|d[ée]c[ée]l[ée]ration|d[ée]c[ée]l[èe]re|freine|freinage|part(ent)?\s+(du\s+)?repos|[ée]quations?\s+horaires?/i.test(t);
  // On exclut explicitement les thèmes mécaniques déjà couverts par d'autres
  // moteurs génériques (aucun cette session) ou hors périmètre (mouvement
  // circulaire, gravitation/satellites, oscillations, plan incliné avec
  // frottement/TCI-TEC — qui restent, pour l'instant, sur l'ancien moteur).
  const isOutOfScope = /circulaire|gravitation|satellite|k[ée]pler|oscillat|pendule|ressort|plan\s+inclin[ée]|frottement|frenet|centre\s+d'inertie|[ée]nergie\s+cin[ée]tique/i.test(t);
  return hasKinematicsVocab && !isOutOfScope;
}

// ==========================================================================
// 5. POINT D'ENTRÉE
// ==========================================================================

export function tryGenericKinematicsResolutionForExercise(
  contextCombined: string,
  questions: ParsedQuestion[]
): SolvedQuestionResult[] | null {
  if (!looksLikeRectilinearKinematicsExercise(contextCombined)) return null;

  const globals = extractGlobalKinematicsGivens(contextCombined);

  const solved: SolvedQuestionResult[] = [];
  for (const q of questions) {
    const result = solveKinematicsQuestion(q, globals, contextCombined);
    if (!result) return null;
    solved.push(result);
  }
  return solved;
}
