import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { searchAcademicCourseUnified } from "../academicSearchEngine";
import { AIDARA_WADE_WORKS_MONOGRAPHS } from "../../src/data/aidaraWadeFrancaisTleBase";
import { FIGURES_DE_STYLE_GENEVOIX_BASE } from "../../src/data/figuresStyleGenevoixBase";

describe("Intégration Locale — Le Français en Terminale & Figures de Style", () => {
  it("trouve immédiatement le manuel Aïdara & Wade (Français Terminale)", async () => {
    const res = await searchAcademicCourseUnified({
      query: "manuel de francais terminale aidara wade"
    });

    assert.ok(res, "Le résultat ne doit pas être null");
    assert.equal(res.discipline, "francais");
    assert.match(res.chapterTitle, /Aïdara & Wade/i);
    assert.ok(res.coreConceptsAndFormulas.length >= 3, "Doit comporter les concepts fondamentaux");
    assert.ok(res.stepByStepMethod.length > 0, "Doit comporter la méthode pas à pas");
    assert.match(res.solvedExample.problemStatement, /Demain dès l'aube/i);
  });

  it("trouve la fiche officielle Figures de Style de Mme Fereyrolles (Collège Genevoix)", async () => {
    const res = await searchAcademicCourseUnified({
      query: "exercices figures de style fereyrolles genevoix"
    });

    assert.ok(res, "Le résultat ne doit pas être null");
    assert.equal(res.discipline, "francais");
    assert.match(res.chapterTitle, /Mme Fereyrolles/i);
    assert.ok(res.coreConceptsAndFormulas.length >= 3, "Doit lister les figures d'analogie, opposition, insistance");
    assert.match(res.solvedExample.problemStatement, /noir bonheur|Germinie Lacerteux/i);
  });

  it("vérifie que les monographies d'œuvres clés sont bien présentes dans la base locale", () => {
    const hugo = AIDARA_WADE_WORKS_MONOGRAPHS.find(m => m.id === "contemplations-victor-hugo-1856");
    assert.ok(hugo, "Les Contemplations de Hugo doivent être présentes");
    assert.match(hugo.title, /Contemplations/i);
    assert.ok(hugo.modelCommentary, "Doit comporter le commentaire composé modèle de Demain dès l'aube");

    const kourouma = AIDARA_WADE_WORKS_MONOGRAPHS.find(m => m.id === "soleils-independances-kourouma-1968");
    assert.ok(kourouma, "Les Soleils des Indépendances de Kourouma doivent être présents");
    assert.match(kourouma.author, /Kourouma/i);

    const camus = AIDARA_WADE_WORKS_MONOGRAPHS.find(m => m.id === "etranger-albert-camus-1942");
    assert.ok(camus, "L'Étranger de Camus doit être présent");
    assert.match(camus.title, /Étranger/i);
  });

  it("vérifie l'intégralité des 22 citations corrigées de la fiche Genevoix", () => {
    assert.equal(FIGURES_DE_STYLE_GENEVOIX_BASE.exercise1Identification.length, 21, "Doit comporter les 21/22 items de l'exercice 1");
    assert.equal(FIGURES_DE_STYLE_GENEVOIX_BASE.exercise2MetaphorToComparison.length, 5, "Doit comporter 5 transformations de métaphores");
    assert.equal(FIGURES_DE_STYLE_GENEVOIX_BASE.exercise3LiteraryInterpretation.length, 3, "Doit comporter les 3 extraits commentés (Voltaire, Flaubert, Goncourt)");
  });
});
