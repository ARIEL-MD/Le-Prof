import { detectDissertationTask } from '../dissertationTaskRouter';
import { routeUniversalExercise } from '../exercisePipeline/universalExerciseRouter';

const cases = [
  ['devoir de dissertation philosophique : La liberté est-elle une illusion ?', 'philosophie', 'solve'],
  ['dissertation de français : La poésie doit-elle seulement rechercher le beau ?', 'francais', 'solve'],
  ['sujet de philosophie : Peut-on être libre sans les autres ?', 'philosophie', 'solve'],
  ['devoir de français : Le roman doit-il être le miroir de la société ?', 'francais', 'solve'],
] as const;
for (const [q, expected, kind] of cases) {
  const r = detectDissertationTask(q);
  if (!r.isDissertation || r.discipline !== expected || r.kind !== kind) throw new Error(`FAIL ${q}: ${JSON.stringify(r)}`);
  const u = routeUniversalExercise(q);
  if (u.dissertationType !== expected || u.task !== 'redaction') throw new Error(`FAIL universal ${q}: ${JSON.stringify(u)}`);
}

const negatives = [
  ['definition de mythe', 'none'],
  ['argument sur poesie', 'none'],
  ['guerre froide', 'none'],
  ['méthode dissertation philosophique', 'method'],
] as const;
for (const [q, expected] of negatives) {
  const r = detectDissertationTask(q);
  if (expected === 'none' && r.isDissertation) throw new Error(`FALSE POSITIVE ${q}: ${JSON.stringify(r)}`);
  if (expected === 'method' && r.kind !== 'method') throw new Error(`METHOD ROUTE ${q}: ${JSON.stringify(r)}`);
}

console.log('DISSERTATION ROUTER TESTS: PASS');
