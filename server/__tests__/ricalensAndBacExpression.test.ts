import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { searchAcademicCourseUnified } from "../academicSearchEngine";
import { RICALENS_POURCHOT_FORMULES_MNEMOTECHNIQUES, RICALENS_POURCHOT_FIGURES_CORPUS } from "../../src/data/ricalensPourchotFiguresBase";
import { BAC_COMMENTAIRES_COMPOSES, BAC_DISSERTATIONS_LITTERAIRES, BAC_RESUME_DISCUSSIONS } from "../../src/data/bacExpressionEcriteCompleteBase";

describe("Intégration Locale — Dictionnaire Ricalens-Pourchot & Bac Expression Écrite", () => {
  it("trouve immédiatement le Dictionnaire des Figures de Style de Nicole Ricalens-Pourchot", async () => {
    const res = await searchAcademicCourseUnified({
      query: "dictionnaire des figures de style nicole ricalens pourchot armand colin"
    });

    assert.ok(res, "Le résultat Ricalens-Pourchot ne doit pas être null");
    assert.equal(res.discipline, "francais");
    assert.match(res.chapterTitle, /Nicole Ricalens-Pourchot/i);
    assert.ok(res.coreConceptsAndFormulas.length >= 4, "Doit comporter les 28 formules et les distinctions fondamentales");
    assert.match(res.solvedExample.problemStatement, /marchand accoudé sur son comptoir avide|hypallage/i);
  });

  it("trouve immédiatement le recueil d'Expression Écrite au Baccalauréat (Bottey Zady Zaourou, Fer de lance)", async () => {
    const res = await searchAcademicCourseUnified({
      query: "commentaire compose bottey zady zaourou fer de lance"
    });

    assert.ok(res, "Le résultat d'expression écrite ne doit pas être null");
    assert.equal(res.discipline, "francais");
    assert.match(res.chapterTitle, /Expression Écrite au Baccalauréat/i);
    assert.ok(res.coreConceptsAndFormulas.length >= 4, "Doit comporter les architectures de commentaire, dissertation et résumé");
    assert.match(res.solvedExample.problemStatement, /Bottey Zady Zaourou/i);
  });

  it("vérifie l'intégrité des 28 formules et des fiches de figures de Ricalens-Pourchot", () => {
    assert.equal(RICALENS_POURCHOT_FORMULES_MNEMOTECHNIQUES.length, 28, "Doit contenir exactement 28 formules mnémotechniques");
    assert.ok(RICALENS_POURCHOT_FIGURES_CORPUS.length >= 5, "Doit contenir le corpus détaillé de figures");

    const chiasme = RICALENS_POURCHOT_FIGURES_CORPUS.find(f => f.nom.toLowerCase() === "chiasme");
    assert.ok(chiasme, "La fiche du Chiasme doit exister");
    assert.equal(chiasme.slogan, "Disposition croisée");

    const oxymore = RICALENS_POURCHOT_FIGURES_CORPUS.find(f => f.nom.toLowerCase().includes("oxymor"));
    assert.ok(oxymore, "La fiche de l'Oxymore doit exister");
    assert.equal(oxymore.slogan, "Intimité inattendue");
  });

  it("vérifie l'intégrité des sujets de commentaire, dissertation et résumé-discussion", () => {
    assert.ok(BAC_COMMENTAIRES_COMPOSES.length >= 5, "Doit contenir au moins 5 commentaires composés approfondis");
    assert.ok(BAC_DISSERTATIONS_LITTERAIRES.length >= 3, "Doit contenir les dissertations rédigées");
    assert.ok(BAC_RESUME_DISCUSSIONS.length >= 3, "Doit contenir les sujets complets de résumé-discussion");

    const oyono = BAC_COMMENTAIRES_COMPOSES.find(c => c.auteur.includes("OYONO"));
    assert.ok(oyono, "Le commentaire sur Ferdinand Oyono doit exister");
    assert.equal(oyono.axesLecture.length, 2, "Doit avoir 2 grands axes de lecture");

    const king = BAC_RESUME_DISCUSSIONS.find(r => r.auteur.includes("KING"));
    assert.ok(king, "Le sujet sur Martin Luther King doit exister");
    assert.ok(king.resumeTexte.texte.length > 50, "Le résumé doit être rédigé");
  });
});
