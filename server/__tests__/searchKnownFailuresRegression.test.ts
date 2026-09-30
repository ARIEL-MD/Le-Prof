import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { searchAcademicCourseUnified } from "../academicSearchEngine";

describe("Recherche — trois régressions identifiées", () => {
  it("argument philosophique sur la liberté cible la liberté", async () => {
    const r = await searchAcademicCourseUnified({ query: "argument philosophique sur la liberté" });
    assert.equal(r.noResult, undefined);
    assert.match(`${r.chapterTitle} ${r.definitionAndScope}`, /libert/i);
    assert.doesNotMatch(`${r.chapterTitle} ${r.definitionAndScope}`, /Voltaire/i);
  });

  it("thèmes de L'Étranger ne retourne pas Thelma et Louise", async () => {
    const r = await searchAcademicCourseUnified({ query: "thèmes de L'Étranger" });
    assert.equal(r.noResult, undefined);
    const text = `${r.chapterTitle} ${r.definitionAndScope} ${r.directContent || ""}`;
    assert.match(text, /L.?Étranger|Camus/i);
    assert.doesNotMatch(text, /Thelma\s+et\s+Louise/i);
  });

  it("Bergson/Nietzsche reste pertinent quand le corpus NTSGOD contient les deux", async () => {
    const r = await searchAcademicCourseUnified({ query: "commentaire Bergson Nietzsche NTSGOD" });
    assert.equal(r.noResult, undefined);
    const text = [r.chapterTitle, r.definitionAndScope, r.directContent || "", r.fullCourseContent || "", r.quickRevisionMemo, ...(r.coreConceptsAndFormulas || []).flatMap(c => [c.name, c.formulaOrRule, c.explanation, c.contextOrApplication])].join(" ");
    assert.match(text, /Bergson/i);
    assert.match(text, /Nietzsche/i);
  });
});
