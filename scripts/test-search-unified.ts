import { searchAcademicCourseUnified } from '../server/academicSearchEngine';

async function main() {
  const queries = [
    "MANIFESTATIONS LA PREMIERE CRISE DE BERLIN",
    "LE BLOC ORIENTAL OU COMMUNISTE",
    "LE BLOC OCCIDENTAL OU CAPITALISTE",
    "ORGANISATION ET FONCTIONNEMENT DES BLOCS",
    "PROBLEMES DE L'AGRICULTURE IVOIRIENNE",
    "THEOREME DE PYTHAGORE"
  ];

  for (const q of queries) {
    console.log('===============================================================');
    console.log(`QUERY: "${q}"`);
    const res = await searchAcademicCourseUnified({ query: q });
    console.log(`Discipline: ${res.disciplineLabel}`);
    console.log(`Level: ${res.levelLabel}`);
    console.log(`Chapter Title: ${res.chapterTitle}`);
    console.log(`isDirectAnswer: ${res.isDirectAnswer}`);
    console.log(`DirectContent Preview:\n${res.directContent?.slice(0, 300)}...`);
  }
}

main().catch(console.error);
