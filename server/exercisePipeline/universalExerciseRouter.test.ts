import { routeUniversalExercise } from './universalExerciseRouter';

type Case = { discipline: string; text: string; family: string; task: string };

const cases: Case[] = [
  { discipline: 'Mathématiques', text: 'Résoudre 2x + 3 = 7', family: 'mathematiques', task: 'resolution' },
  { discipline: 'Physique-Chimie', text: 'Calculer la vitesse d’un mobile qui parcourt 100 m en 20 s', family: 'physique_chimie', task: 'calcul' },
  { discipline: 'SVT', text: 'Expliquer le rôle des chromosomes dans l’hérédité', family: 'svt', task: 'analyse' },
  { discipline: 'Français', text: 'Analysez cette figure de style dans le texte', family: 'francais', task: 'analyse' },
  { discipline: 'Philosophie', text: 'La liberté est-elle une illusion ?', family: 'philosophie', task: 'unknown' },
  { discipline: 'Histoire-Géographie', text: 'Donner les causes de la guerre froide', family: 'histoire_geographie', task: 'question_cours' },
  { discipline: 'Anglais', text: 'Translate this sentence into English: Je suis étudiant.', family: 'anglais', task: 'traduction' },
  { discipline: 'Espagnol', text: 'Traduire cette phrase en espagnol : Je suis étudiant.', family: 'espagnol', task: 'traduction' },
  { discipline: 'Allemand', text: 'Traduire cette phrase en allemand : Je suis étudiant.', family: 'allemand', task: 'traduction' },
  { discipline: 'EDHC', text: 'Expliquer un devoir du citoyen dans une démocratie', family: 'edhc', task: 'analyse' },
  { discipline: 'Informatique', text: 'Écrire un algorithme pour calculer la moyenne de trois nombres', family: 'informatique', task: 'calcul' },
  { discipline: 'Économie-Gestion', text: 'Calculer le coût total si le coût unitaire est de 500 FCFA pour 20 unités', family: 'economie_gestion', task: 'calcul' },
];

for (const c of cases) {
  const route = routeUniversalExercise(c.text, c.discipline);
  if (route.family !== c.family || route.task !== c.task || route.confidence !== 'high') {
    throw new Error(`${c.discipline}: attendu ${c.family}/${c.task}/high, obtenu ${route.family}/${route.task}/${route.confidence}`);
  }
}

// Sans discipline explicite, les marqueurs lexicaux doivent rester cohérents.
const lexicalCases: Array<[string, string]> = [
  ['Résoudre x² - 1 = 0', 'mathematiques'],
  ['Calculer la vitesse du mobile', 'physique_chimie'],
  ['Expliquer la mitose', 'svt'],
  ['Corrige cette dissertation sur le roman', 'francais'],
  ['La liberté est-elle une illusion ?', 'philosophie'],
  ['Donner les causes de la guerre froide', 'histoire_geographie'],
  ['Translate this sentence into English', 'anglais'],
  ['Traduire en espagnol : Je suis étudiant', 'espagnol'],
  ['Traduire en allemand : Ich bin Schüler', 'allemand'],
  ['Expliquer les droits du citoyen en démocratie', 'edhc'],
  ['Écrire un algorithme en Python', 'informatique'],
  ['Calculer le coût et le profit', 'economie_gestion'],
];
for (const [text, family] of lexicalCases) {
  const route = routeUniversalExercise(text);
  if (route.family !== family) throw new Error(`Lexical route incorrecte pour « ${text} »: ${route.family}`);
}

console.log(`OK: ${cases.length + lexicalCases.length} tests de routage multi-matières`);
