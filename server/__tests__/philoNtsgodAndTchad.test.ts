import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { searchAcademicCourseUnified } from "../academicSearchEngine";
import { PHILO_NTSGOD_DISSERTATIONS, PHILO_NTSGOD_COMMENTAIRES } from "../../src/data/philoNtsgodCorpusBase";
import { PHILO_TCHAD_FARCHA_SUJETS } from "../../src/data/philoTchadFarchaBase";

describe("Intégration Locale — Philosophie NTSGOD & Philo Tchad Farcha", () => {
  it("trouve immédiatement le recueil SV. NTSGOD (Des Sujets de Philosophie Corrigés)", async () => {
    const res = await searchAcademicCourseUnified({
      query: "des sujets de philosophie corriges ntsgod fomesoutra"
    });

    assert.ok(res, "Le résultat NTSGOD ne doit pas être null");
    assert.equal(res.discipline, "philo");
    assert.match(res.chapterTitle, /NTSGOD/i);
    assert.ok(res.coreConceptsAndFormulas.length >= 4, "Doit comporter les 4 temps de dissertation et le commentaire");
    assert.match(res.solvedExample.problemStatement, /conscience nous exclut.*animalité/i);
  });

  it("trouve le commentaire ordonné de Bergson ou Nietzsche dans le recueil NTSGOD", async () => {
    const res = await searchAcademicCourseUnified({
      query: "l'evolution creatrice bergson declic different de nature ntsgod"
    });

    assert.ok(res, "Le résultat du texte de Bergson ne doit pas être null");
    assert.equal(res.discipline, "philo");
    assert.match(res.chapterTitle, /NTSGOD/i);
  });

  it("trouve immédiatement le recueil 20 Sujets de Philo Type Bac (Saleh Mahamat Addimi & Allah Hogoum Bessalé - Tchad)", async () => {
    const res = await searchAcademicCourseUnified({
      query: "20 sujets de philo type bac saleh mahamat addimi allah hogoum bessale lycee adventiste de farcha tchad"
    });

    assert.ok(res, "Le résultat Philo Tchad ne doit pas être null");
    assert.equal(res.discipline, "philo");
    assert.match(res.chapterTitle, /20 Sujets de Philo Type Bac.*Farcha/i);
    assert.ok(res.coreConceptsAndFormulas.length >= 4, "Doit comporter Seydou Badian, Hölderlin, Sankara, Machiavel");
    assert.match(res.solvedExample.problemStatement, /violence qui restaure.*Machiavel/i);
  });

  it("trouve le sujet de philosophie de François Tombalbaye et Thomas Sankara", async () => {
    const res = await searchAcademicCourseUnified({
      query: "comment peut on avoir une paix durable dans un etat thomas sankara francois tombalbaye"
    });

    assert.ok(res, "Le sujet sur la paix durable doit être reconnu");
    assert.equal(res.discipline, "philo");
  });

  it("vérifie l'intégrité de la base NTSGOD (11 dissertations et 8 commentaires)", () => {
    assert.ok(PHILO_NTSGOD_DISSERTATIONS.length >= 6, "Doit contenir les dissertations phares");
    assert.ok(PHILO_NTSGOD_COMMENTAIRES.length >= 3, "Doit contenir les commentaires de textes intégraux");

    const sujetConscience = PHILO_NTSGOD_DISSERTATIONS.find(d => d.numero === 1);
    assert.ok(sujetConscience, "Le sujet 1 doit exister");
    assert.ok(sujetConscience.definitions.length >= 3);
    assert.ok(sujetConscience.axe1.argumentsEtReferences.length >= 2);
    assert.ok(sujetConscience.axe2.argumentsEtReferences.length >= 2);

    const commBergson = PHILO_NTSGOD_COMMENTAIRES.find(c => c.auteur.includes("BERGSON"));
    assert.ok(commBergson, "Le commentaire de Bergson doit exister");
    assert.match(commBergson.elementsIntroduction.these, /cerveau/i);
  });

  it("vérifie l'intégrité des 20 sujets du recueil Tchad Farcha", () => {
    assert.ok(PHILO_TCHAD_FARCHA_SUJETS.length >= 15, "Doit contenir les sujets clés du recueil");

    const sujetAutrui = PHILO_TCHAD_FARCHA_SUJETS.find(s => s.numero === 3);
    assert.ok(sujetAutrui, "Le sujet 3 (peut-on vivre sans autrui) doit exister");
    assert.ok(sujetAutrui.these.auteursCites.includes("Seydou Badian"));

    const sujetMachiavel = PHILO_TCHAD_FARCHA_SUJETS.find(s => s.numero === 20);
    assert.ok(sujetMachiavel, "Le sujet 20 (Bac 2021 Machiavel) doit exister");
    assert.equal(sujetMachiavel.sessionBac, "Baccalauréat 2021");
  });
});
