import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { searchAcademicCourseUnified } from "../academicSearchEngine";

describe("Rotation des recherches Français sans IA", () => {
  it("varie deux recherches identiques même sans userSeed", async () => {
    const a = await searchAcademicCourseUnified({ query: "arguments sur le roman", bypassCache: true });
    const b = await searchAcademicCourseUnified({ query: "arguments sur le roman", bypassCache: true });
    assert.ok(a && b);
    const ta = a!.coreConceptsAndFormulas.slice(0, 4).map(x => `${x.name}|${x.explanation}`).join("\n");
    const tb = b!.coreConceptsAndFormulas.slice(0, 4).map(x => `${x.name}|${x.explanation}`).join("\n");
    assert.notEqual(ta, tb);
  });

  it("permet une variation contrôlée avec searchIteration", async () => {
    const a = await searchAcademicCourseUnified({ query: "arguments sur le roman", searchIteration: 0, bypassCache: true });
    const b = await searchAcademicCourseUnified({ query: "arguments sur le roman", searchIteration: 1, bypassCache: true });
    assert.ok(a && b);
    const ta = a!.coreConceptsAndFormulas.map(x => x.name).join("|");
    const tb = b!.coreConceptsAndFormulas.map(x => x.name).join("|");
    assert.notEqual(ta, tb);
  });
});
