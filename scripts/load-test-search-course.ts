/**
 * Test de charge progressif du moteur local de Recherche de Cours & Notions.
 *
 * Ce script mesure le moteur directement (pas HTTP) afin d'isoler le coût
 * du moteur des limites de débit volontairement présentes sur /api/search-course.
 *
 * Niveaux : 100 -> 1000 -> 10000 utilisateurs simulés.
 * Chaque utilisateur envoie une recherche avec un seed distinct. Le moteur
 * conserve volontairement son bucketing/cache de production.
 */
import { performance } from "node:perf_hooks";
import { searchAcademicCourseUnified, getSearchCacheStats, resetSearchCacheStats } from "../server/academicSearchEngine";

const LOADS = (process.env.LOAD_SEARCH_LOADS || "100,1000,10000").split(",").map(Number).filter(Number.isFinite);
const BYPASS_CACHE = process.env.LOAD_SEARCH_BYPASS_CACHE === "1";

const QUERIES = [
  "guerre froide",
  "bloc oriental et bloc occidental",
  "théorème de Pythagore",
  "définition de la mitose",
  "oxydation des corps purs simples",
  "fonction évasive de la poésie",
  "fonction réaliste du roman",
  "liberté en philosophie",
];

function percentile(values: number[], p: number): number {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))];
}

async function runLoad(users: number) {
  const durations: number[] = [];
  let successful = 0;
  const started = performance.now();
  resetSearchCacheStats();

  await Promise.all(Array.from({ length: users }, async (_, i) => {
    const query = QUERIES[i % QUERIES.length];
    const start = performance.now();
    const result = await searchAcademicCourseUnified({
      query,
      userSeed: `load-user-${i}`,
      variant: i % 4,
      bypassCache: BYPASS_CACHE,
    });
    durations.push(performance.now() - start);
    if (result && !result.noResult) successful++;
  }));

  const wallMs = performance.now() - started;
  return {
    users,
    successful,
    successRatePct: Number(((successful / users) * 100).toFixed(2)),
    wallMs: Number(wallMs.toFixed(2)),
    throughputReqPerSec: Number((users / (wallMs / 1000)).toFixed(2)),
    p50Ms: Number(percentile(durations, 0.50).toFixed(3)),
    p95Ms: Number(percentile(durations, 0.95).toFixed(3)),
    maxMs: Number(Math.max(...durations).toFixed(3)),
    cache: getSearchCacheStats(),
  };
}

for (const users of LOADS) {
  console.log(JSON.stringify(await runLoad(users)));
}
