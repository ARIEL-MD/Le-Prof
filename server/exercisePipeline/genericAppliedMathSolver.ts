/**
 * Couche de couverture appliquée déterministe.
 *
 * Cette couche ne remplace pas les solveurs spécialisés : elle les expose au
 * routeur universel et ajoute quelques problèmes numériques scolaires qui
 * n'ont pas besoin d'un solveur symbolique lourd (pourcentages, proportions,
 * règle de trois). Aucun modèle IA, aucune API distante.
 */
import { ParsedQuestion, SolvedQuestionResult } from './types';
import { tryGenericKinematicsResolutionForExercise } from './genericKinematicsSolver';
import { tryGenericOhmResolutionForExercise } from './genericOhmSolver';
import { tryGenericStoichiometryResolutionForExercise } from './genericStoichiometrySolver';
import { tryGenericGravitationResolutionForExercise } from './genericGravitationSolver';
import { tryGenericOscillatorResolutionForExercise } from './genericOscillatorSolver';
import { tryGenericTecResolutionForExercise } from './genericTecSolver';

function n(raw: string): number {
  return Number(raw.replace(/\s/g, '').replace(',', '.'));
}

function fmt(x: number): string {
  const r = Math.round(x * 1e10) / 1e10;
  return Number.isInteger(r) ? String(r) : String(r);
}

function result(q: ParsedQuestion, steps: string[], finalAnswer: string): SolvedQuestionResult {
  return {
    numberLabel: q.numberLabel,
    titleOrPrompt: q.cleanText,
    steps,
    finalAnswer,
    verificationPassed: true,
    verificationDetails: 'Résultat obtenu par règles et calculs déterministes locaux.',
    matchedParsedQuestionId: q.id,
  };
}

function tryPercentage(q: ParsedQuestion): SolvedQuestionResult | null {
  const t = q.cleanText.replace(/[−–—]/g, '-').replace(/,/g, '.');
  if (!/%|pour\s*cent/i.test(t)) return null;

  // p % de N
  let m = t.match(/(-?\d+(?:\.\d+)?)\s*%\s*(?:de|d['’])\s*(-?\d+(?:\.\d+)?)/i);
  if (m) {
    const p = n(m[1]), base = n(m[2]), value = p * base / 100;
    return result(q,
      [`On calcule ${p}\% de ${base}.`, `${p}\%\times ${base}=\frac{${p}}{100}\times ${base}=${fmt(value)}.`],
      `${fmt(value)}`);
  }

  // N représente quel pourcentage de B ?
  m = t.match(/(-?\d+(?:\.\d+)?)\s*(?:est|repr[ée]sente)\s*(?:quel|combien)\s*%.*?(?:de|sur)\s*(-?\d+(?:\.\d+)?)/i);
  if (m) {
    const value = n(m[1]), base = n(m[2]);
    if (base === 0) return null;
    const p = value / base * 100;
    return result(q,
      [`On cherche le pourcentage représenté par ${value} sur ${base}.`, `p=\frac{${value}}{${base}}\times100=${fmt(p)}\%.`],
      `${fmt(p)}\%`);
  }

  // Augmentation / diminution d'un pourcentage : « 200 augmenté de 15 % ».
  m = t.match(/(-?\d+(?:\.\d+)?)\s+(?:augment[ée]|major[ée]|augmenter|majorer)\s+de\s+(-?\d+(?:\.\d+)?)\s*%/i);
  if (m) {
    const base = n(m[1]), p = n(m[2]), value = base * (1 + p / 100);
    return result(q,
      [`Le coefficient multiplicateur est 1+${p}/100=${fmt(1 + p / 100)}.`, `${base}\times ${fmt(1 + p / 100)}=${fmt(value)}.`],
      `${fmt(value)}`);
  }
  m = t.match(/(-?\d+(?:\.\d+)?)\s+(?:diminu[ée]|r[ée]duit|diminuer|r[ée]duire)\s+de\s+(-?\d+(?:\.\d+)?)\s*%/i);
  if (m) {
    const base = n(m[1]), p = n(m[2]), value = base * (1 - p / 100);
    return result(q,
      [`Le coefficient multiplicateur est 1-${p}/100=${fmt(1 - p / 100)}.`, `${base}\times ${fmt(1 - p / 100)}=${fmt(value)}.`],
      `${fmt(value)}`);
  }
  return null;
}

function tryProportion(q: ParsedQuestion): SolvedQuestionResult | null {
  const t = q.cleanText.replace(/[−–—]/g, '-').replace(/,/g, '.');
  if (!/proportion|proportionnal|r[èe]gle\s+de\s+trois|pour\s+\d+|co[uû]te|prix/i.test(t)) return null;

  // « a pour b, c pour x » / « a ... b ... c ... combien ».
  const m = t.match(/(-?\d+(?:\.\d+)?)\s*(?:pour|sur|correspond\s+[àa]\s+)\s*(-?\d+(?:\.\d+)?).*?(?:pour|avec|correspond\s+[àa]).*?(-?\d+(?:\.\d+)?).*?(?:combien|x\s*=|quelle|quel)/i);
  if (m) {
    const a = n(m[1]), b = n(m[2]), c = n(m[3]);
    if (a === 0) return null;
    const x = b * c / a;
    return result(q,
      [`On utilise la proportion ${a}/${b}=${c}/x.`, `${a}x=${b}\times${c}.`, `x=\frac{${b}\times${c}}{${a}}=${fmt(x)}.`],
      `${fmt(x)}`);
  }
  return null;
}

/** Résout une question par l'un des solveurs appliqués déjà présents dans le projet. */
export function tryGenericAppliedMathResolution(
  context: string,
  q: ParsedQuestion,
): SolvedQuestionResult | null {
  const full = `${context}\n${q.cleanText}`;

  const applied: Array<() => SolvedQuestionResult[] | null> = [
    () => tryGenericKinematicsResolutionForExercise(full, [q]),
    () => tryGenericOhmResolutionForExercise(full, [q]),
    () => tryGenericStoichiometryResolutionForExercise(full, [q]),
    () => tryGenericGravitationResolutionForExercise(full, [q]),
    () => tryGenericOscillatorResolutionForExercise(full, [q]),
    () => tryGenericTecResolutionForExercise(full, [q]),
  ];

  for (const attempt of applied) {
    try {
      const r = attempt();
      if (r?.length === 1 && r[0]?.finalAnswer && r[0].titleOrPrompt.trim() === q.cleanText.trim() && r[0].verificationPassed !== false) {
        return { ...r[0], matchedParsedQuestionId: q.id };
      }
    } catch {
      // Un solveur appliqué non compatible doit simplement laisser la main au suivant.
    }
  }

  return tryPercentage(q) ?? tryProportion(q);
}
