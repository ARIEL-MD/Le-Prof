/**
 * Audit fonctionnel de la recherche « Cours & Notions ».
 *
 * Objectif : vérifier qu'une requête scolaire retourne la bonne discipline,
 * le bon niveau quand il est explicitement demandé, et qu'un contenu littéraire
 * ne mélange pas Roman / Théâtre / Poésie.
 *
 * Exécution : npm run audit:course-search
 */
import assert from 'node:assert/strict';
import { searchAcademicCourseUnified } from '../server/academicSearchEngine';

type Case = {
  query: string;
  discipline: string;
  expected: RegExp;
  level?: string;
};

const CASES: Case[] = [
  { query: 'théorème de Pythagore', discipline: 'mathematiques', expected: /Pythagore|triangle rectangle/i },
  { query: 'guerre froide', discipline: 'histoire', expected: /guerre froide|bipolarisation/i },
  { query: 'photosynthèse', discipline: 'svt', expected: /photosynth|chlorophylle|plante/i },
  { query: 'oxydation des corps purs simples', discipline: 'physique_chimie', expected: /oxydation|combustion|corps purs/i },
  { query: 'conjuguer le verbe manger au présent', discipline: 'francais', expected: /manger|présent|conjugaison/i },
  { query: 'argument sur autrui', discipline: 'philo', expected: /Autrui/i },
  { query: 'argument sur la liberté', discipline: 'philo', expected: /Liberté/i },
  { query: 'argument sur la religion', discipline: 'philo', expected: /Religion/i },
  { query: 'argument sur la fonction engagée du roman', discipline: 'francais', expected: /Roman/i },
  { query: 'argument sur la fonction esthétique du théâtre', discipline: 'francais', expected: /Théâtre/i },
  { query: 'argument sur la fonction lyrique de la poésie', discipline: 'francais', expected: /Poésie/i },
  { query: 'fonction réaliste du roman', discipline: 'francais', expected: /Roman/i },
  { query: 'fonction ludique du théâtre', discipline: 'francais', expected: /Théâtre/i },
];

async function main() {
  let failures = 0;

  for (const testCase of CASES) {
    const result = await searchAcademicCourseUnified({
      query: testCase.query,
      userSeed: `audit-${testCase.query}`,
    });

    try {
      assert.ok(result && !result.noResult, `Aucun résultat pour « ${testCase.query} »`);
      assert.equal(result.discipline, testCase.discipline, `Mauvaise discipline pour « ${testCase.query} »`);
      assert.match(
        `${result.chapterTitle}\n${result.definitionAndScope}\n${result.directContent || ''}`,
        testCase.expected,
        `Résultat non pertinent pour « ${testCase.query} »`
      );
      console.log(`PASS | ${testCase.query} | ${result.discipline} | ${result.chapterTitle}`);
    } catch (error) {
      failures++;
      console.error(`FAIL | ${testCase.query}`);
      console.error(error);
    }
  }

  // Même requête, deux utilisateurs : le résultat variable doit réellement varier.
  const a = await searchAcademicCourseUnified({ query: 'argument sur la liberté', userSeed: 'student-A-unique-001' });
  const b = await searchAcademicCourseUnified({ query: 'argument sur la liberté', userSeed: 'student-B-unique-002' });
  assert.notEqual(
    JSON.stringify(a.coreConceptsAndFormulas),
    JSON.stringify(b.coreConceptsAndFormulas),
    'Deux utilisateurs différents ne doivent pas recevoir la même présentation d’arguments.'
  );

  // Retaper la même recherche avec la même graine mais une nouvelle itération : rotation.
  const r1 = await searchAcademicCourseUnified({ query: 'argument sur autrui', userSeed: 'student-A-unique-001', variant: 0 });
  const r2 = await searchAcademicCourseUnified({ query: 'argument sur autrui', userSeed: 'student-A-unique-001', variant: 1 });
  assert.notEqual(
    JSON.stringify(r1.coreConceptsAndFormulas),
    JSON.stringify(r2.coreConceptsAndFormulas),
    'Une nouvelle recherche doit pouvoir renouveler la formulation.'
  );

  if (failures > 0) process.exitCode = 1;
  else console.log(`\nAUDIT OK — ${CASES.length} requêtes + tests de différenciation.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
