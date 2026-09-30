import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { francaisTleKnowledgeBase } from "../../src/data/francaisTleKnowledgeBase";
import { searchAcademicCourseUnified } from "../academicSearchEngine";

describe("Module pédagogique ROMAN — fonctions et références", () => {
  const roman = francaisTleKnowledgeBase.literaryGenreStudy.find((item) => item.genre === "Roman");

  it("contient les 7 fonctions demandées", () => {
    assert.ok(roman);
    const names = roman!.functions.map((f) => f.functionName);
    for (const expected of [
      "Fonction lyrique",
      "Fonction esthétique",
      "Fonction évasive / fictive",
      "Fonction ludique",
      "Fonction didactique",
      "Fonction engagée / satirique",
      "Fonction réaliste",
    ]) assert.ok(names.includes(expected), expected);
  });

  it("chaque argument possède la structure pédagogique complète", () => {
    assert.ok(roman);
    const all = roman!.functions.flatMap((f) => f.argumentsAndExamples);
    assert.ok(all.length >= 20);
    for (const item of all) {
      assert.ok(item.argument.trim());
      assert.ok(item.explanation.trim());
      assert.ok(item.example.trim());
      assert.ok(item.work.trim());
      assert.ok(item.author.trim());
      assert.ok(item.phraseToRemember.trim());
      assert.ok(Array.isArray(item.variants));
      assert.ok(item.variants!.length >= 3);
    }
  });

  it("n'utilise pas les anciennes citations inventées dans les variantes ROMAN", () => {
    const badFragments = [
      "Le roman est le seul genre littéraire qui n'a pas de règles fixes",
      "Nous sommes des anatomistes et des physiologistes de l'âme et du corps humain",
      "Quand on a la bâtardise au front",
      "Ceux qui marchaient n'étaient plus des esclaves",
    ];
    const json = JSON.stringify(roman);
    for (const fragment of badFragments) assert.equal(json.includes(fragment), false, fragment);
  });

  it("reconnaît les recherches naturelles sur les fonctions du roman", async () => {
    for (const query of [
      "fonction lyrique du roman",
      "fonction esthétique du roman",
      "fonction évasive du roman",
      "fonction ludique du roman",
      "fonction didactique du roman",
      "fonction engagée du roman",
      "fonction réaliste du roman",
    ]) {
      const result = await searchAcademicCourseUnified({ query, userSeed: "roman-functions-test" });
      assert.ok(result, query);
      assert.equal(result!.discipline, "francais", query);
      assert.match(result!.chapterTitle, /roman/i, query);
    }
  });
});
