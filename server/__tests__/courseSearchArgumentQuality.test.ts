import assert from "node:assert/strict";
import { test } from "node:test";
import { searchAcademicCourseUnified } from "../academicSearchEngine";

test("Recherche de cours — qualité des arguments philosophiques", async (t) => {
  await t.test("formule directement les arguments sans amorces génériques", async () => {
    const res = await searchAcademicCourseUnified({ query: "argument sur autrui", userSeed: "quality_a" });
    assert.ok(res);
    const statements = res.coreConceptsAndFormulas.map(c => c.name).join(" ");
    assert.doesNotMatch(statements, /On peut ainsi|On peut donc|L'analyse rigoureuse|Cette idée montre|Il apparaît que/i);
  });

  await t.test("ne fabrique pas de corpus pour une notion inconnue", async () => {
    const res = await searchAcademicCourseUnified({ query: "argument sur relidion", userSeed: "unknown_a" });
    if (res) {
      const text = JSON.stringify(res.coreConceptsAndFormulas);
      assert.doesNotMatch(text, /Jean-Paul Sartre|Friedrich Nietzsche|Merleau-Ponty/i);
    }
  });

  await t.test("permet une rotation de présentation au-delà des catégories visibles", async () => {
    const a = await searchAcademicCourseUnified({ query: "argument sur autrui", userSeed: "rotation_a", variant: 7 });
    const b = await searchAcademicCourseUnified({ query: "argument sur autrui", userSeed: "rotation_a", variant: 8 });
    assert.ok(a && b);
    assert.ok((a.totalVariants || 0) >= 1_000_000_000);
  });
});
