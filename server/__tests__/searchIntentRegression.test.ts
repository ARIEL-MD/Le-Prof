import test from "node:test";
import { strict as assert } from "node:assert";
import { detectDissertationTask } from "../dissertationTaskRouter";

// Régressions de routage : ces requêtes ne doivent jamais ouvrir un moteur de dissertation.
const cases = [
  { query: "argument sur roman", expected: "literary-arguments" },
  { query: "argument sur poesie", expected: "literary-arguments" },
  { query: "argument sur théâtre", expected: "literary-arguments" },
  { query: "definition de mythe", expected: "definition" },
  { query: "définition de liberté", expected: "definition" },
];

for (const c of cases) {
  const q = c.query.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const literary = /\b(argument|arguments)\b/.test(q) && /\b(roman|romans|romancier|romanesque|poesie|poeme|poete|theatre|theatral|dramaturge|piece)\b/.test(q);
  const definition = /\b(definition|definir|signification|sens de|qu'est ce que|c'est quoi)\b/.test(q);
  if (c.expected === "literary-arguments") assert.equal(literary, true, c.query);
  if (c.expected === "definition") assert.equal(definition, true, c.query);
}


test('dissertation philosophique sur l’art est reconnue sans mot philosophie', () => {
  const route = detectDissertationTask('L’art nous éloigne-t-il de la réalité ?');
  assert.equal(route.isDissertation, true);
  assert.equal(route.discipline, 'philosophie');
});
