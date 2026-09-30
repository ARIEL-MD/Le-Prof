import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { searchAcademicCourseUnified } from "../academicSearchEngine";

describe("Recherche de Cours & Notions — arguments sur le roman", () => {
  it("comprend plusieurs formulations naturelles de la même demande", async () => {
    const queries = [
      "arguments sur le roman",
      "arguments roman",
      "donne-moi des arguments pour une dissertation sur le roman",
    ];

    for (const query of queries) {
      const result = await searchAcademicCourseUnified({
        query,
        userSeed: "roman-test-user-1",
      });
      assert.ok(result, query);
      assert.equal(result.discipline, "francais", query);
      assert.match(result.chapterTitle, /roman/i, query);
      assert.ok(result.coreConceptsAndFormulas.length >= 4, query);
      assert.ok(result.coreConceptsAndFormulas.some((item) => /Argument/i.test(item.name)), query);
    }
  });

  it("fait tourner la rédaction pour le même utilisateur et différencie aussi deux utilisateurs", async () => {
    const a1 = await searchAcademicCourseUnified({ query: "arguments sur le roman", userSeed: "same-user-a", bypassCache: true });
    const a2 = await searchAcademicCourseUnified({ query: "arguments sur le roman", userSeed: "same-user-a", bypassCache: true });
    const b = await searchAcademicCourseUnified({ query: "arguments sur le roman", userSeed: "different-user-b", bypassCache: true });

    assert.ok(a1 && a2 && b);
    const textA1 = a1!.coreConceptsAndFormulas.slice(0, 4).map((x) => `${x.name}|${x.explanation}`).join("\n");
    const textA2 = a2!.coreConceptsAndFormulas.slice(0, 4).map((x) => `${x.name}|${x.explanation}`).join("\n");
    const textB = b!.coreConceptsAndFormulas.slice(0, 4).map((x) => `${x.name}|${x.explanation}`).join("\n");

    assert.notEqual(textA1, textA2, "Deux recherches successives du même utilisateur doivent varier la rédaction");
    assert.notEqual(textA1, textB, "Deux utilisateurs doivent pouvoir recevoir des formulations différentes");
  });

  it("permet de charger des arguments complémentaires sans doublons", async () => {
    const initial = await searchAcademicCourseUnified({
      query: "arguments sur le roman",
      userSeed: "voir-plus-user",
      appendVariants: false,
    });
    const expanded = await searchAcademicCourseUnified({
      query: "arguments sur le roman",
      userSeed: "voir-plus-user",
      appendVariants: true,
    });

    assert.ok(initial);
    assert.ok(expanded);
    assert.ok(expanded!.coreConceptsAndFormulas.length >= initial!.coreConceptsAndFormulas.length);

    const keys = expanded!.coreConceptsAndFormulas.map((item) =>
      `${item.name}\u001f${item.formulaOrRule || ""}\u001f${item.explanation || ""}`
    );
    assert.equal(new Set(keys).size, keys.length);
  });
});

describe("Variantes textuelles profondes — Roman", () => {
  it("ne confond plus variation et rotation des fonctions", async () => {
    const a = await searchAcademicCourseUnified({
      query: "arguments sur la fonction engagée du roman",
      userSeed: "roman-engage-user-a",
      bypassCache: true,
    });
    const b = await searchAcademicCourseUnified({
      query: "arguments sur la fonction engagée du roman",
      userSeed: "roman-engage-user-b",
      bypassCache: true,
    });
    assert.ok(a && b);
    assert.match(a!.chapterTitle, /roman/i);
    assert.match(b!.chapterTitle, /roman/i);
    assert.ok(a!.coreConceptsAndFormulas.length > 0);
    assert.ok(b!.coreConceptsAndFormulas.length > 0);
    assert.ok(a!.coreConceptsAndFormulas.every(x => /FONCTION ENGAG/i.test(x.name)));
    assert.ok(b!.coreConceptsAndFormulas.every(x => /FONCTION ENGAG/i.test(x.name)));
    const ta = a!.coreConceptsAndFormulas.map(x => `${x.name}|${x.explanation}`).join("\n");
    const tb = b!.coreConceptsAndFormulas.map(x => `${x.name}|${x.explanation}`).join("\n");
    assert.notEqual(ta, tb);
  });

  it("varie le texte argumentatif sans changer l'oeuvre ni l'auteur", async () => {
    const a = await searchAcademicCourseUnified({
      query: "arguments sur le roman",
      userSeed: "roman-deep-a",
      variant: 101,
      bypassCache: true,
    });
    const b = await searchAcademicCourseUnified({
      query: "arguments sur le roman",
      userSeed: "roman-deep-b",
      variant: 202,
      bypassCache: true,
    });
    assert.ok(a && b);
    const fa = a!.coreConceptsAndFormulas[0];
    const fb = b!.coreConceptsAndFormulas[0];
    assert.ok(fa && fb);
    assert.notEqual(fa.name, fb.name);
    assert.match(fa.formulaOrRule || "", /Auteur :/);
    assert.match(fb.formulaOrRule || "", /Auteur :/);
    assert.ok((a!.totalVariants || 0) >= 1_000_000_000);
    assert.equal(a!.openEndedVariants, true);
  });
});
