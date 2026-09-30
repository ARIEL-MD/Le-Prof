import test from "node:test";
import assert from "node:assert/strict";
import {
  cleanPhiloSubject,
  detectModalType,
  parseAndAnalyzePhiloSubject,
} from "../philoEngine/philoSubjectParser";

const cases = [
  ["Peut-on être heureux sans autrui ?", "PEUT_ON"],
  ["Faut-il toujours dire la vérité ?", "FAUT_IL"],
  ["Doit-on obéir aux lois ?", "DOIT_ON"],
  ["Est-il possible d'être libre ?", "PEUT_ON"],
  ["Le bonheur dépend-il de nous ?", "DEPEND_IL"],
  ["Suffit-il de vouloir pour être libre ?", "SUFFIT_IL"],
  ["Obéir, est-ce renoncer à sa liberté ?", "RENONCER"],
  ["Pourquoi philosopher ?", "POURQUOI"],
  ["L'inconscient exclut-il l'idée de liberté ?", "EXCLUT_IL"],
  ["Le travail rend-il l'homme libre ?", "EST_IL"],
] as const;

test("philosophy subject parser: recognizes major question forms", () => {
  for (const [subject, expected] of cases) {
    const parsed = parseAndAnalyzePhiloSubject(subject);
    assert.equal(parsed.modalType, expected, subject);
    assert.equal(parsed.sujetNettoye, subject.slice(0, -1).trim());
    assert.match(parsed.problemeCourt, /\?$/);
    assert.ok(parsed.reformulation.length >= 20, subject);
  }
});

test("philosophy subject parser: preserves the exact question instead of substituting a notion", () => {
  const subjects = [
    "Le désir est-il un obstacle au bonheur ?",
    "La science nous libère-t-elle de l'erreur ?",
    "L'art nous éloigne-t-il de la réalité ?",
    "Peut-on être juste sans être libre ?",
    "La technique suffit-elle à rendre l'homme heureux ?",
  ];

  for (const subject of subjects) {
    const parsed = parseAndAnalyzePhiloSubject(subject);
    const exact = subject.slice(0, -1).trim();
    assert.equal(parsed.problemeCourt, `${exact} ?`, `problem replaced for: ${subject}`);
    assert.ok(parsed.reformulation.includes(exact), `reformulation lost exact subject: ${subject}`);
  }
});

test("philosophy subject parser: preserves exact terms in multi-notion subjects", () => {
  const subjects = [
    "La liberté dépend-elle de la connaissance de soi ?",
    "Le désir peut-il être compatible avec le devoir ?",
    "La vérité est-elle compatible avec le bonheur ?",
    "La justice exige-t-elle l'égalité ?",
    "La technique est-elle un moyen de domination de la nature ?",
  ];

  for (const subject of subjects) {
    const parsed = parseAndAnalyzePhiloSubject(subject);
    const exact = subject.slice(0, -1).trim();
    assert.equal(parsed.problemeCourt, `${exact} ?`);
    assert.ok(parsed.aspect1.toLowerCase().includes(exact.toLowerCase().slice(0, 18)));
  }
});

test("philosophy subject parser: cleans school prefixes without changing meaning", () => {
  assert.equal(cleanPhiloSubject("Sujet 1 : « La liberté est-elle une illusion ? »"), "La liberté est-elle une illusion");
  assert.equal(cleanPhiloSubject("Dissertation : Le bonheur dépend-il de nous ?"), "Le bonheur dépend-il de nous");
});

test("philosophy modal detector: does not classify ordinary notion words as a question form", () => {
  assert.equal(detectModalType("La liberté et le bonheur"), "GENERIC");
  assert.equal(detectModalType("Le rapport entre science et vérité"), "GENERIC");
});
