import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { searchAcademicCourseUnified } from "../academicSearchEngine";

/**
 * Requêtes volontairement inédites : elles ne doivent jamais devenir des règles
 * codées individuellement. Ces tests vérifient que Recherche de Cours & Notions
 * reste généraliste pour les élèves de 6e à Terminale, en Côte d'Ivoire et à
 * l'international.
 */
describe("Recherche de Cours & Notions — recherches éducatives libres", () => {
  const cases = [
    { query: "comment la pêche contribue-t-elle à l'économie de la Côte d'Ivoire", expected: /p[eê]che|[eé]conomie|ivoire/i },
    { query: "pourquoi les jeunes quittent-ils les zones rurales", expected: /rural|jeune|exode/i },
    { query: "comment le changement climatique affecte l'agriculture", expected: /climat|agricultur/i },
    { query: "explique la différence entre mitose et méiose", expected: /mitose|m[eé]iose/i },
    { query: "comment résoudre une équation du second degré", expected: /[eé]quation|second degr[eé]|polyn[oô]me/i },
    { query: "pourquoi les saisons existent-elles", expected: /saison|terre|soleil/i },
    { query: "explique le rapport entre conscience et liberté chez Sartre", expected: /conscience|libert[eé]|Sartre/i },
    { query: "quelle différence existe entre métaphore et comparaison", expected: /m[eé]taphore|comparaison/i },
    { query: "what is photosynthesis", expected: /photosynth|plant|energy/i },
    { query: "rôle de l'ONU dans le maintien de la paix", expected: /ONU|paix|maintien/i }
  ];

  for (const item of cases) {
    it(`traite une requête libre : ${item.query}`, async () => {
      const res = await searchAcademicCourseUnified({ query: item.query });
      assert.ok(res, "Le moteur doit toujours produire un objet de résultat");
      assert.notEqual(res.chapterTitle, "", "Le résultat doit avoir un titre");
      if (!res.noResult) {
        const corpus = `${res.chapterTitle} ${res.definitionAndScope} ${res.directContent || ""}`;
        assert.match(corpus, item.expected, `Le résultat doit rester sémantiquement lié à : ${item.query}`);
      }
    });
  }

  it("refuse une requête composée artificielle sans rapport", async () => {
    const res = await searchAcademicCourseUnified({
      query: "agriculture lunaire quantique 847291"
    });
    assert.equal(res.noResult, true);
  });

  it("ne transforme pas une recherche générale en fiche de philosophie par défaut", async () => {
    const res = await searchAcademicCourseUnified({ query: "comment fonctionne un volcan" });
    assert.ok(res);
    if (!res.noResult) {
      assert.doesNotMatch(res.disciplineLabel, /Philosophie/i);
      assert.match(`${res.chapterTitle} ${res.definitionAndScope}`, /volcan|magm|[eé]ruption/i);
    }
  });
});
