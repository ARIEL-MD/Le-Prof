import test from "node:test";
import assert from "node:assert/strict";
import { solvePhiloTle } from "../philoEngine/philoEngine";

const subjects = [
  "La philosophie est-elle utile ?",
  "Le travail rend-il l'homme libre ?",
  "L'inconscient prive-t-il l'homme de sa liberté ?",
  "La science peut-elle répondre à toutes les questions que l'homme se pose ?",
  "La conscience de soi suffit-elle à définir l'homme ?",
  "La vérité dépend-elle du point de vue ?",
  "L'art nous éloigne-t-il de la réalité ?",
  "Le langage exprime-t-il fidèlement la pensée ?",
  "La culture nous éloigne-t-elle de la nature ?",
  "Le désir est-il un obstacle au bonheur ?",
  "La justice consiste-t-elle à traiter tout le monde de la même manière ?",
  "Une loi injuste doit-elle être obéie ?",
  "La liberté consiste-t-elle à faire ce que l'on veut ?",
  "L'homme peut-il vivre sans autrui ?",
  "Faut-il envisager l'extinction de la philosophie dans l'ordonnancement du savoir et de l'existence ?",
];

function normalize(value: string) {
  return value.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function anchors(subject: string) {
  const stop = new Set([
    "quelle", "quelles", "quels", "comment", "pourquoi", "mesure",
    "peut", "peut-on", "peut-il", "peut-elle", "doit", "doit-on",
    "doit-il", "doit-elle", "faut", "faut-il", "dans", "sans",
    "pour", "avec", "est", "sont", "homme", "hommes", "nous",
  ]);
  return normalize(subject)
    .replace(/\bl['’]/g, " ")
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter(w => w.length >= 3)
    .filter(w => !stop.has(w))
    .filter(w => !/-t-(?:il|elle|on|ils|elles)$/.test(w))
    .slice(0, 4);
}

test("V60 — qualité réelle des rédactions philosophiques sur des sujets variés", () => {
  const failures: string[] = [];

  for (const subject of subjects) {
    const solved = solvePhiloTle(subject);
    if (!solved.success || !solved.methodologyAnalysis || !solved.structuredRedaction) {
      failures.push(`${subject} => moteur incomplet`);
      continue;
    }

    const analysis = solved.methodologyAnalysis;
    const redaction = solved.structuredRedaction;
    const problem = analysis.philoPreliminaryWork.problematisation.probleme;
    const full = normalize(analysis.level5FullRedaction);
    const conclusion = normalize(redaction.conclusion.fullText);
    const subjectNorm = normalize(subject);

    if (normalize(problem) !== subjectNorm) {
      failures.push(`${subject} => problème non identique au sujet`);
    }

    const as = analysis.philoPreliminaryWork.problematisation;
    if (!as.aspect1.endsWith("?") || !as.aspect2.endsWith("?")) {
      failures.push(`${subject} => aspects non interrogatifs`);
    }

    if (redaction.development.part1.subParts.length !== 3 ||
        redaction.development.part2.subParts.length !== 3) {
      failures.push(`${subject} => développement incomplet`);
    }

    const parts = [
      ...redaction.development.part1.subParts,
      ...redaction.development.part2.subParts,
    ];
    for (const part of parts) {
      if (part.explication.length < 30 || part.fullText.length < 180) {
        failures.push(`${subject} => argument trop court`);
      }
      if (!part.illustration.auteur || !part.illustration.oeuvre || !part.illustration.citation) {
        failures.push(`${subject} => référence philosophique incomplète`);
      }
    }

    const hits = anchors(subject).filter(a => full.includes(a)).length;
    const conclusionHits = anchors(subject).filter(a => conclusion.includes(a)).length;
    if (hits < 2) failures.push(`${subject} => développement insuffisamment ancré dans le sujet`);
    if (conclusionHits < 2) failures.push(`${subject} => conclusion insuffisamment ancrée dans le sujet`);

    if (/la réponse doit porter précisément sur le rapport posé entre les termes/i.test(redaction.conclusion.fullText)) {
      failures.push(`${subject} => ancien texte de secours générique encore présent`);
    }
  }

  assert.deepEqual(failures, [], failures.join("\n"));
});
