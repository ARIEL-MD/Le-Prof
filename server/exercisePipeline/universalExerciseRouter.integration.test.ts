import { parseStatement } from './statementParser';

const cases = [
  ['Mathématiques', 'Résoudre 2x + 3 = 7', 'mathematiques', 'resolution'],
  ['Physique-Chimie', 'Calculer la vitesse d’un mobile qui parcourt 100 m en 20 s', 'physique_chimie', 'calcul'],
  ['SVT', 'Expliquer le rôle des chromosomes dans l’hérédité', 'svt', 'analyse'],
  ['Français', 'Analysez cette figure de style dans le texte', 'francais', 'analyse'],
  ['Philosophie', 'La liberté est-elle une illusion ?', 'philosophie', 'unknown'],
  ['Histoire-Géographie', 'Donner les causes de la guerre froide', 'histoire_geographie', 'question_cours'],
  ['Anglais', 'Translate this sentence into English: Je suis étudiant.', 'anglais', 'traduction'],
  ['Espagnol', 'Traduire cette phrase en espagnol : Je suis étudiant.', 'espagnol', 'traduction'],
  ['Allemand', 'Traduire cette phrase en allemand : Je suis étudiant.', 'allemand', 'traduction'],
  ['EDHC', 'Expliquer un devoir du citoyen dans une démocratie', 'edhc', 'analyse'],
  ['Informatique', 'Écrire un algorithme en Python', 'informatique', 'unknown'],
  ['Économie-Gestion', 'Calculer le coût total : 500 FCFA × 20 unités', 'economie_gestion', 'calcul'],
] as const;

for (const [label, text, family, task] of cases) {
  const parsed = parseStatement(text);
  const route = parsed.exercises[0]?.questions[0]?.universalRoute;
  if (!route) throw new Error(`${label}: route absente du parseur`);
  if (route.family !== family || route.task !== task) {
    throw new Error(`${label}: attendu ${family}/${task}, obtenu ${route.family}/${route.task}`);
  }
}

console.log(`OK: ${cases.length} tests d'intégration parseur → routeur`);
