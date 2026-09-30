import test from "node:test";
import assert from "node:assert/strict";
import { solvePhiloTle } from "../philoEngine/philoEngine";

/**
 * Batterie de régression V59 : sujets de natures différentes.
 * Objectif : vérifier que le moteur raisonne à partir du sujet exact,
 * conserve la tension philosophique et n'inverse pas titre/arguments.
 */
const subjects = [
  "La philosophie est-elle utile ?",
  "Peut-on se passer de la philosophie ?",
  "Pourquoi philosopher ?",
  "La philosophie est-elle inutile ?",
  "L'homme est-il responsable de tout ce qu'il fait ?",
  "L'inconscient prive-t-il l'homme de sa liberté ?",
  "Le travail rend-il l'homme libre ?",
  "Obéir, est-ce renoncer à sa liberté ?",
  "À quelles conditions l'homme peut-il être libre ?",
  "Le désir est-il un obstacle au bonheur ?",
  "Le bonheur dépend-il de nous ?",
  "La raison exclut-elle le mythe ?",
  "La vérité dépend-elle du point de vue ?",
  "La science permet-elle de tout connaître ?",
  "Dans quelle mesure la science peut-elle prétendre à la vérité ?",
  "La technique nous libère-t-elle du travail ?",
  "La technique nous rend-elle plus libres ?",
  "L'art nous éloigne-t-il de la réalité ?",
  "L'art a-t-il pour seule fonction de divertir ?",
  "La justice consiste-t-elle à traiter tout le monde de la même manière ?",
  "Une loi injuste doit-elle être obéie ?",
  "L'État est-il nécessaire à la liberté ?",
  "La liberté consiste-t-elle à faire ce que l'on veut ?",
  "La conscience de soi suffit-elle à se connaître ?",
  "Le langage exprime-t-il fidèlement la pensée ?",
  "Peut-on être heureux sans être libre ?",
  "Le progrès technique est-il toujours un progrès humain ?",
  "Le travail est-il une malédiction ?",
  "La culture nous éloigne-t-elle de la nature ?",
  "L'homme peut-il vivre sans autrui ?"
];

function normalize(s: string) {
  return s.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function words(subject: string) {
  const stop = new Set([
    "quelle", "quelles", "quels", "comment", "pourquoi", "mesure",
    "peut", "peut-on", "peut-il", "peut-elle", "faut", "faut-il",
    "doit", "doit-on", "dans", "sans", "pour", "avec", "est", "sont",
    "elle", "il", "les", "des", "une", "un", "aux", "tout", "tous"
  ]);
  return normalize(subject).replace(/[^a-z0-9\s-]/g, " ").split(/\s+/)
    .filter(w => w.length >= 5 && !stop.has(w));
}

test("V59 — batterie multi-sujets : cohérence générale", () => {
  const failures: string[] = [];

  for (const subject of subjects) {
    const solved = solvePhiloTle(subject);
    if (!solved.success) {
      failures.push(`${subject} => solvePhiloTle=false`);
      continue;
    }

    const analysis = solved.methodologyAnalysis;
    const redaction = solved.structuredRedaction;
    if (!analysis || !redaction) {
      failures.push(`${subject} => analyse/rédaction absente`);
      continue;
    }

    const exact = normalize(subject).replace(/\?$/, "").trim();
    const problem = normalize(analysis.philoPreliminaryWork.problematisation.probleme);
    if (!problem.includes(exact)) failures.push(`${subject} => problème détourné`);
    if (!normalize(analysis.level5FullRedaction).includes(exact)) failures.push(`${subject} => sujet absent de la copie finale`);

    const conclusion = normalize(redaction.conclusion.fullText);
    for (const word of words(subject).slice(0, 3)) {
      if (!conclusion.includes(word)) failures.push(`${subject} => terme ${word} absent de conclusion`);
    }

    const report = analysis.philoPreliminaryWork.validationReport;
    if (!report?.isValid) failures.push(`${subject} => validation interne invalide`);
    if (report && report.scoreConformite < 10) failures.push(`${subject} => score conformité ${report.scoreConformite}/12`);
  }

  assert.deepEqual(failures, [], failures.join("\n"));
});

test("V59 — variation : plusieurs graines ne doivent pas inverser la logique des axes", () => {
  const subject = "La philosophie est-elle utile ?";
  const seeds = ["alpha", "beta", "gamma", "delta", "omega", "ariel", "2026"];

  for (const seed of seeds) {
    const solved = solvePhiloTle(subject, { userSeed: seed } as any);
    assert.equal(solved.success, true, `échec pour seed=${seed}`);
    const report = solved.methodologyAnalysis?.philoPreliminaryWork.validationReport;
    assert.ok(report?.isValid, `validation invalide pour seed=${seed}`);
    assert.ok(report?.part1Audit?.isApproved, `Axe 1 non approuvé pour seed=${seed}`);
    assert.ok(report?.part2Audit?.isApproved, `Axe 2 non approuvé pour seed=${seed}`);
  }
});

for (const subject of subjects) {
  test(`V59 — sujet isolé : ${subject}`, () => {
    const solved = solvePhiloTle(subject);
    assert.equal(solved.success, true);
    assert.equal(
      normalize(solved.result!.problemStatement),
      normalize(subject),
      "le moteur doit conserver le sujet exact comme problème central"
    );
  });
}
