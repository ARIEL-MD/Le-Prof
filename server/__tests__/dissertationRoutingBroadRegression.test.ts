import { strict as assert } from "node:assert";
import { test } from "node:test";
import { detectDissertationTask } from "../dissertationTaskRouter";

test("routage dissertation — formes courtes de philosophie et français", () => {
  const philo = [
    "Le travail libère-t-il l’homme ?",
    "La science peut-elle tout expliquer ?",
    "L’art nous éloigne-t-il de la réalité ?",
    "La vérité est-elle toujours bonne à dire ?",
    "Peut-on vivre sans autrui ?",
  ];
  for (const q of philo) {
    const r = detectDissertationTask(q);
    assert.equal(r.isDissertation, true, q);
    assert.equal(r.discipline, "philosophie", q);
  }

  const francais = [
    "Le roman est-il un miroir de la société ?",
    "La poésie est-elle seulement un ornement du langage ?",
    "Le théâtre doit-il seulement divertir ?",
  ];
  for (const q of francais) {
    const r = detectDissertationTask(q);
    assert.equal(r.isDissertation, true, q);
    assert.equal(r.discipline, "francais", q);
  }

  const direct = [
    "argument sur poésie",
    "définition de mythe",
    "cours sur la guerre froide",
    "citation sur la liberté",
    "auteur de L’Étranger",
  ];
  for (const q of direct) {
    const r = detectDissertationTask(q);
    assert.equal(r.isDissertation, false, q);
  }
});
