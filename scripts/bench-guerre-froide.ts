/**
 * Benchmark local de « guerre froide » pour Recherche de Cours & Notions.
 *
 * Mesure séparément le premier appel (construction one-off des index) et
 * les appels suivants. Le benchmark ne fait aucun appel réseau.
 */
import { performance } from "node:perf_hooks";
const ITERATIONS = Number(process.env.BENCH_ITERATIONS || 200);
const QUERY = "guerre froide";

const moduleStart = performance.now();
const { findOfficialCourse } = await import("../src/data/courses/index");
const moduleLoadMs = performance.now() - moduleStart;

const firstStart = performance.now();
const firstResult = findOfficialCourse(QUERY);
const firstMs = performance.now() - firstStart;

const samples: number[] = [];
for (let i = 0; i < ITERATIONS; i++) {
  const start = performance.now();
  const result = findOfficialCourse(QUERY);
  samples.push(performance.now() - start);
  if (!result) throw new Error(`Aucun résultat pour « ${QUERY} »`);
}

const sorted = [...samples].sort((a, b) => a - b);
const percentile = (p: number) => sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * p))];

console.log(JSON.stringify({
  query: QUERY,
  iterations: ITERATIONS,
  moduleLoadMs: Number(moduleLoadMs.toFixed(3)),
  firstCallMs: Number(firstMs.toFixed(3)),
  meanMs: Number((samples.reduce((a, b) => a + b, 0) / samples.length).toFixed(3)),
  p50Ms: Number(percentile(0.50).toFixed(3)),
  p95Ms: Number(percentile(0.95).toFixed(3)),
  maxMs: Number(sorted[sorted.length - 1].toFixed(3)),
}, null, 2));
