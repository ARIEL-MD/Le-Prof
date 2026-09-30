import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { searchAcademicCourseUnified } from "../academicSearchEngine";

/**
 * Régression universelle : ces tests vérifient que le moteur ne dépend pas
 * d'une seule famille de recherches et qu'une formulation libre reste liée
 * au sujet demandé.
 */
describe("Moteur éducatif universel — requêtes libres", () => {
  const cases = [
    { query: "définition de la photosynthèse", subject: /photosynth/i },
    { query: "comment fonctionne la photosynthèse", subject: /photosynth/i },
    { query: "causes du réchauffement climatique", subject: /réchauffement|climat/i },
    { query: "conséquences de la décolonisation", subject: /décolonisation/i },
    { query: "rôle de l'ONU dans le maintien de la paix", subject: /ONU/i },
    { query: "différence entre mitose et méiose", subject: /mitose|méiose/i },
    { query: "formule de la vitesse", subject: /vitesse/i },
    { query: "méthode pour résoudre une équation du second degré", subject: /équation|second degré/i },
    { query: "argument philosophique sur la liberté", subject: /libert/i },
    { query: "citation de Kant sur la liberté", subject: /libert|Kant/i },
    { query: "personnages principaux de L'Étranger", subject: /Étranger|etranger/i },
    { query: "thèmes de L'Étranger", subject: /Étranger|etranger/i },
    { query: "manger au présent", subject: /manger/i },
    { query: "causes de la première guerre mondiale", subject: /guerre mondiale|guerre/i },
    { query: "dates importantes de la révolution française", subject: /révolution|revolution/i },
  ];

  for (const testCase of cases) {
    it(`comprend une requête libre : ${testCase.query}`, async () => {
      const result = await searchAcademicCourseUnified({ query: testCase.query });
      assert.ok(result, "Le moteur doit retourner une réponse ou un résultat d'absence");

      if (result.noResult) return;

      const searchable = [
        result.chapterTitle,
        result.definitionAndScope,
        result.directContent || "",
        ...result.coreConceptsAndFormulas.map(c => `${c.name} ${c.formulaOrRule} ${c.explanation}`)
      ].join(" ");

      assert.match(searchable, testCase.subject, `La réponse doit rester centrée sur : ${testCase.query}`);
    });
  }

  it("ne transforme pas une requête jamais prévue en fiche arbitraire", async () => {
    const result = await searchAcademicCourseUnified({
      query: "notion académique totalement inconnue zqv-928374-omega"
    });
    assert.equal(result.noResult, true);
  });

  it("accepte des formulations naturelles différentes pour une même intention", async () => {
    const queries = [
      "pourquoi la guerre froide a commencé",
      "quelles sont les origines de la guerre froide",
      "à quoi est due la guerre froide",
      "explique-moi les raisons du début de la guerre froide"
    ];

    for (const query of queries) {
      const result = await searchAcademicCourseUnified({ query });
      assert.ok(result && !result.noResult, query);
      assert.match(
        `${result.chapterTitle} ${result.definitionAndScope}`,
        /guerre froide/i,
        `Le sujet doit rester la Guerre froide : ${query}`
      );
    }
  });
});
