import test from "node:test";
import assert from "node:assert/strict";
import { solvePhiloTle } from "../philoEngine/philoEngine";

const subjects = [
  "L’art nous éloigne-t-il de la réalité ?",
  "Le désir est-il un obstacle au bonheur ?",
  "L’inconscient prive-t-il l’homme de sa liberté ?",
  "Le travail et la liberté",
  "Pourquoi philosopher ?",
  "Dans quelle mesure la science peut-elle prétendre à la vérité ?",
  "Obéir, est-ce renoncer à sa liberté ?",
  "La raison exclut-elle le mythe ?",
  "À quelles conditions l’homme peut-il être libre ?",
  "La philosophie est-elle inutile ?",
  "La justice consiste-t-elle à traiter tout le monde de la même manière ?",
  "L’existence précède-t-elle l’essence ?",
  "La technique nous libère-t-elle du travail ?",
  "Une loi injuste doit-elle être obéie ?",
  "La vérité dépend-elle du point de vue ?"
];

function norm(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "'").replace(/\s+/g, " ").trim();
}

function significantWords(subject: string) {
  return norm(subject).replace(/[^a-z0-9\s]/g, " ").split(/\s+/)
    .filter(w => w.length >= 5)
    .filter(w => !new Set(["quelle","quelles","quels","comment","pourquoi","mesure","homme","hommes","peut","peut-on","faut","faut-il","doit","doit-on","dans","sans","pour","avec","est","sont"]).has(w));
}
test("pipeline complet : le sujet exact reste la source de vérité", () => {
  for (const subject of subjects) {
    const solved = solvePhiloTle(subject);
    assert.equal(solved.success, true, `sujet refusé: ${subject}`);
    const result = solved.result!;
    const analysis = solved.methodologyAnalysis!;
    const redaction = solved.structuredRedaction!;
    const exact = norm(subject).replace(/\?$/,"").trim();

    assert.equal(norm(result.problemStatement).replace(/\?$/,"").trim(), exact, `problème détourné: ${subject}`);
    assert.ok(norm(analysis.philoPreliminaryWork.problematisation.probleme).includes(exact.replace(/\?$/,"").trim()), `problématisation détournée: ${subject}`);
    assert.ok(norm(analysis.level5FullRedaction).includes(exact.replace(/\?$/,"").trim()), `rédaction sans sujet exact: ${subject}`);

    const conclusion = norm(redaction.conclusion.fullText);
    for (const w of significantWords(subject).slice(0, 4)) {
      assert.ok(conclusion.includes(w), `terme du sujet absent de la conclusion (${w}): ${subject}`);
    }

    const full = norm(analysis.level5FullRedaction);
    assert.ok(full.includes(norm(subject).replace(/\?$/,"").trim()), `sujet exact absent de la copie finale: ${subject}`);
  }
});

test("cas critique : L’art nous éloigne-t-il de la réalité ?", () => {
  const subject = "L’art nous éloigne-t-il de la réalité ?";
  const solved = solvePhiloTle(subject);
  assert.equal(solved.success, true);
  const redaction = solved.structuredRedaction!;
  const intro = norm(redaction.introduction.fullText);
  const conclusion = norm(redaction.conclusion.fullText);
  const whole = norm(solved.methodologyAnalysis!.level5FullRedaction);
  for (const term of ["art", "éloigne", "réalité"]) {
    const t = norm(term);
    assert.ok(intro.includes(t) || whole.includes(t), `terme ${term} perdu dans le développement du sujet`);
    assert.ok(conclusion.includes(t), `terme ${term} perdu en conclusion`);
  }
  assert.equal(norm(solved.result!.problemStatement), norm(subject), "le problème final doit rester la question exacte");
});
