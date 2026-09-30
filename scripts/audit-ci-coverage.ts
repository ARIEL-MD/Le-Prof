import { ALL_OFFICIAL_IVORIAN_COURSES } from '../src/data/courses/index';
import { COTE_IVOIRE_SCHOOL_SCOPE } from '../server/curriculumPolicy';

const normalize = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
const courses = ALL_OFFICIAL_IVORIAN_COURSES;
const disciplineCounts = new Map<string, number>();
const levelCounts = new Map<string, number>();
for (const c of courses) {
  const d = c.disciplineLabel || c.discipline || 'Inconnu';
  const l = c.levelLabel || c.level || 'Inconnu';
  disciplineCounts.set(d, (disciplineCounts.get(d) || 0) + 1);
  levelCounts.set(l, (levelCounts.get(l) || 0) + 1);
}

const coveredDisciplines = COTE_IVOIRE_SCHOOL_SCOPE.priorityDisciplines.filter(d =>
  [...disciplineCounts.keys()].some(existing => normalize(existing) === normalize(d) || normalize(existing).includes(normalize(d)) || normalize(d).includes(normalize(existing)))
);
const missingDisciplines = COTE_IVOIRE_SCHOOL_SCOPE.priorityDisciplines.filter(d => !coveredDisciplines.includes(d));

console.log('=== LE PROF — AUDIT DE COUVERTURE CÔTE D’IVOIRE ===');
console.log(`Cours locaux indexés : ${courses.length}`);
console.log(`Disciplines prioritaires couvertes : ${coveredDisciplines.length}/${COTE_IVOIRE_SCHOOL_SCOPE.priorityDisciplines.length}`);
console.log(`Disciplines prioritaires encore absentes/à vérifier : ${missingDisciplines.join(', ') || 'aucune'}`);
console.log('\n--- Par niveau ---');
for (const level of [...COTE_IVOIRE_SCHOOL_SCOPE.primary, ...COTE_IVOIRE_SCHOOL_SCOPE.lowerSecondary, ...COTE_IVOIRE_SCHOOL_SCOPE.upperSecondary]) {
  const hit = [...levelCounts.entries()].filter(([k]) => normalize(k).includes(normalize(level)) || normalize(level).includes(normalize(k)));
  const count = hit.reduce((n, [,v]) => n+v, 0);
  console.log(`${level.padEnd(6)} ${count} cours`);
}
console.log('\n--- Par discipline ---');
for (const [d, n] of [...disciplineCounts.entries()].sort((a,b) => b[1]-a[1])) console.log(`${d}: ${n}`);
console.log('\nRÈGLE : un domaine sans corpus local n’est PAS déclaré « couvert » ; il doit être alimenté depuis le référentiel ivoirien puis audité.');
