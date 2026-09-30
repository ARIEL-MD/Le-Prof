import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { searchAcademicCourseUnified } from "../academicSearchEngine";
import { CHEIKH_LO_THIAM_ANNALES } from "../../src/data/cheikhLoThiamBacFrancaisBase";
import { MAMADOU_DANFA_TOPICS, MAMADOU_DANFA_LITERARY_PILLARS, CONNECTEURS_LOGIQUES_TABLE } from "../../src/data/mamadouDanfaDissertationBacBase";

describe("Intégration Locale — Annales Cheikh Lô Thiam & Méthode Mamadou Lamine Danfa", () => {
  it("trouve immédiatement le recueil de Cheikh Lô Thiam (UGB Saint-Louis)", async () => {
    const res = await searchAcademicCourseUnified({
      query: "annales bac senegal francais cheikh lo thiam"
    });

    assert.ok(res, "Le résultat Cheikh Lô Thiam ne doit pas être null");
    assert.equal(res.discipline, "francais");
    assert.match(res.chapterTitle, /Cheikh Lô Thiam/i);
    assert.ok(res.coreConceptsAndFormulas.length >= 3, "Doit contenir les concepts de dissertation, commentaire et résumé");
    assert.match(res.solvedExample.problemStatement, /Quia pulvis es|Victor Hugo/i);
  });

  it("trouve immédiatement le manuel de dissertation de Mamadou Lamine Danfa (UCAD)", async () => {
    const res = await searchAcademicCourseUnified({
      query: "reussir la dissertation francaise au bac mamadou lamine danfa ucad"
    });

    assert.ok(res, "Le résultat Mamadou Lamine Danfa ne doit pas être null");
    assert.equal(res.discipline, "francais");
    assert.match(res.chapterTitle, /Mamadou Lamine Danfa/i);
    assert.ok(res.coreConceptsAndFormulas.length >= 3, "Doit comporter les piliers théoriques et la grille de connecteurs");
    assert.match(res.solvedExample.problemStatement, /ouvrir les yeux du lecteur/i);
  });

  it("vérifie l'intégrité des annales de Cheikh Lô Thiam", () => {
    assert.ok(CHEIKH_LO_THIAM_ANNALES.length >= 5, "Doit comporter les annales majeures");
    
    const chateaubriand = CHEIKH_LO_THIAM_ANNALES.find(a => a.id.includes("chateaubriand"));
    assert.ok(chateaubriand, "Le sujet 2006 de Chateaubriand doit exister");
    assert.equal(chateaubriand.planType, "analytique");

    const laforgue = CHEIKH_LO_THIAM_ANNALES.find(a => a.id.includes("laforgue"));
    assert.ok(laforgue, "Le sujet Spleen de Laforgue doit exister");
    assert.ok(laforgue.detailedPlan.length >= 2, "Doit comporter les 2 centres d'intérêt");
  });

  it("vérifie les piliers théoriques et les connecteurs logiques de Mamadou Lamine Danfa", () => {
    assert.ok(MAMADOU_DANFA_LITERARY_PILLARS.length >= 5, "Doit comporter les 6 piliers théoriques");
    assert.ok(CONNECTEURS_LOGIQUES_TABLE.length >= 8, "Doit comporter les catégories de connecteurs logiques");
    assert.ok(MAMADOU_DANFA_TOPICS.length >= 5, "Doit comporter les sujets types approfondis");
  });
});
