import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { resolvePhiloSubject } from "../philoEngine/philoEngine";
import { resolveIvorianSubject } from "../ivorianFallback";
import { solveHistoireGeo } from "../histoireGeoEngine/histoireGeoEngine";

describe("Sujet Philo : Le mythe est-il aux antipodes de la raison ?", () => {
  it("rejette le sujet dans l'engine Histoire-Géo", () => {
    const hgRes = solveHistoireGeo("le mythe est il aux antipodes de la raison ?");
    assert.equal(hgRes.success, false, "Histoire-Géo ne doit JAMAIS traiter un sujet de philosophie");
  });

  it("résout le sujet dans l'engine Philo avec rigueur et sans hors-sujet", () => {
    const philoRes = resolvePhiloSubject("le mythe est il aux antipodes de la raison ?");
    assert.ok(philoRes, "Doit renvoyer une résolution de philosophie");
    assert.equal(philoRes.subjectType, "philosophie");
    assert.match(philoRes.problematisation.probleme, /mythe/i);
    assert.match(philoRes.problematisation.probleme, /raison/i);
    assert.ok(!philoRes.problematisation.probleme.toLowerCase().includes(" ou "), "Pas de 'ou' artificiel dans la problématique");
    
    // Vérification des auteurs mobilisés (Platon, Descartes, Vernant, Ricoeur)
    const fullText = philoRes.redactionComplete;
    assert.match(fullText, /Vernant/i, "Doit mobiliser Jean-Pierre Vernant");
    assert.match(fullText, /Platon/i, "Doit mobiliser Platon");
    assert.match(fullText, /Descartes/i, "Doit mobiliser Descartes");

    // Vérification des aspects
    assert.ok(philoRes.problematisation.aspect1.length > 10);
    assert.ok(philoRes.problematisation.aspect2.length > 10);
  });

  it("route correctement via resolveIvorianSubject vers la philosophie et non l'histoire", async () => {
    const unifiedRes = await resolveIvorianSubject("le mythe est il aux antipodes de la raison ?", "tle");
    assert.ok(unifiedRes, "Le résultat unifié ne doit pas être null");
    assert.equal(unifiedRes.canonicalDiscipline, "philo", "Doit être classifié en philo");
    assert.notEqual(unifiedRes.canonicalDiscipline, "histoire_geo", "Ne doit PAS être classifié en histoire_geo");
    assert.ok(!unifiedRes.finalAnswer.includes("Organisation des Nations Unies"), "Ne doit jamais contenir l'ONU");
  });

  it("route vers la philosophie même si la discipline envoyée était 'Histoire' par mégarde", async () => {
    const unifiedRes = await resolveIvorianSubject("le mythe est il aux antipodes de la raison ?", "tle", "Histoire");
    assert.ok(unifiedRes, "Le résultat unifié ne doit pas être null");
    assert.equal(unifiedRes.canonicalDiscipline, "philo", "Doit être corrigé et classifié en philo");
    assert.notEqual(unifiedRes.canonicalDiscipline, "histoire_geo");
    assert.ok(!unifiedRes.finalAnswer.includes("Organisation des Nations Unies"), "Ne doit jamais contenir l'ONU");
    assert.match(unifiedRes.finalAnswer, /Vernant|Platon|Descartes/i);
  });
});
