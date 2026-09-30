import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { searchAcademicCourseUnified } from "../academicSearchEngine";
import { DIOMANDE_OEUVRES_PROGRAMME, DIOMANDE_SUJETS_REDIGES } from "../../src/data/diomandeNarcisseDissertationBase";
import { BURKINA_METHODOLOGIES_OFFICIELLES, BURKINA_CORRIGES_ANNALES } from "../../src/data/annalesBacBurkinaFasoBase";

describe("Intégration Locale — Diomande Sadia Narcisse & Annales Bac Burkina Faso", () => {
  it("trouve immédiatement le fascicule Dissertation Littéraire en Une Minute (Diomande Sadia Narcisse)", async () => {
    const res = await searchAcademicCourseUnified({
      query: "dissertation litteraire en une minute diomande sadia narcisse tle a c d"
    });

    assert.ok(res, "Le résultat Diomande Narcisse ne doit pas être null");
    assert.equal(res.discipline, "francais");
    assert.match(res.chapterTitle, /Diomande Sadia Narcisse/i);
    assert.ok(res.coreConceptsAndFormulas.length >= 4, "Doit comporter l'intro en 4 mouvements, le paragraphe et les 16 œuvres");
    assert.match(res.solvedExample.problemStatement, /poésie est un ornement|confondre ces trois genres/i);
  });

  it("trouve immédiatement les Annales de Français Terminale A du Burkina Faso (MENAPLN)", async () => {
    const res = await searchAcademicCourseUnified({
      query: "annales de francais terminale a 2020 menapln burkina faso stanislas ouaro"
    });

    assert.ok(res, "Le résultat Annales Bac Burkina ne doit pas être null");
    assert.equal(res.discipline, "francais");
    assert.match(res.chapterTitle, /MENAPLN.*Burkina Faso/i);
    assert.ok(res.coreConceptsAndFormulas.length >= 4, "Doit comporter les méthodologies contraction, commentaire, dissertation");
    assert.match(res.solvedExample.problemStatement, /Sophie Heidi Kam|blues de l’Afrique/i);
  });

  it("vérifie l'intégrité de la base Diomande Narcisse (16 œuvres et 4 sujets rédigés)", () => {
    assert.equal(DIOMANDE_OEUVRES_PROGRAMME.length, 15, "Doit contenir le corpus des œuvres au programme");
    assert.equal(DIOMANDE_SUJETS_REDIGES.length, 4, "Doit contenir 4 sujets rédigés in extenso");

    const kakou = DIOMANDE_OEUVRES_PROGRAMME.find(o => o.auteur.includes("Kakou"));
    assert.ok(kakou, "La fiche de Hyacinthe Kakou doit exister");
    assert.equal(kakou.genre, "Théâtre");

    const sujetDramaturge = DIOMANDE_SUJETS_REDIGES.find(s => s.numero === 2);
    assert.ok(sujetDramaturge, "Le sujet 2 (dramaturge / amuser la galerie) doit exister");
    assert.ok(sujetDramaturge.developpement.axe1.argumentsEtExemples.length >= 2);
    assert.ok(sujetDramaturge.developpement.axe2.argumentsEtExemples.length >= 2);
  });

  it("vérifie l'intégrité des méthodologies et corrigés des Annales Bac Burkina Faso", () => {
    assert.equal(BURKINA_METHODOLOGIES_OFFICIELLES.length, 3, "Doit couvrir les 3 épreuves au choix");
    assert.ok(BURKINA_CORRIGES_ANNALES.length >= 4, "Doit contenir les corrigés officiels de Ouaga I");

    const sophieKam = BURKINA_CORRIGES_ANNALES.find(c => c.id === "burkina-commentaire-sophie-kam-2019");
    assert.ok(sophieKam, "Le corrigé de Sophie Heidi Kam doit exister");
    assert.ok(sophieKam.redactionComplete && sophieKam.redactionComplete.length > 200, "Le commentaire doit être rédigé");

    const kadimaContraction = BURKINA_CORRIGES_ANNALES.find(c => c.id === "burkina-contraction-kadima-nzuji-2016");
    assert.ok(kadimaContraction, "La contraction de Kadima-Nzuji doit exister");
    assert.equal(kadimaContraction.resumeOfficiel?.nombreMots, 177, "Le décompte officiel est de 177 mots");
  });
});
