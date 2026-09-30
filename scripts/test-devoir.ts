import { parseStatement } from '../server/exercisePipeline/statementParser';
import { tryDeterministicExerciseResolution } from '../server/exercisePipeline/exerciseSolverPipeline';

const devoir = `
EXERCICE 1 — ÉQUATION
Résoudre dans R :
2x³ - 3x² - 8x + 12 = 0.

EXERCICE 2 — INÉQUATION
Résoudre dans R :
(x - 2)(x + 1)(2x - 3) ≥ 0.

EXERCICE 3 — FONCTION
Soit
f(x) = (x² + 1)/(x - 1).

1. Déterminer l'ensemble de définition de f.
2. Calculer les limites aux bornes du domaine.
3. Calculer f'(x).
4. Étudier le signe de f'(x).
5. Dresser le tableau de variations de f.
6. Déterminer les éventuelles asymptotes.
7. Donner une interprétation graphique des résultats.

EXERCICE 4 — SUITE
On définit la suite (u_n) par :
u_0 = 2
et
u_{n+1} = 3u_n - 4.

1. Calculer u_1, u_2 et u_3.
2. Déterminer une expression de u_n.
3. Étudier la convergence de la suite.

EXERCICE 5 — NOMBRES COMPLEXES
Soit
z = (1 + i)/(1 - i).

1. Simplifier z.
2. Donner sa forme algébrique.
3. Donner son module.
4. Donner un argument de z.
5. Donner sa forme trigonométrique.

EXERCICE 6 — PROBABILITÉS
Une urne contient 5 boules rouges, 3 boules bleues et 2 boules vertes.
On tire simultanément 2 boules au hasard.

1. Calculer la probabilité d'obtenir deux boules rouges.
2. Calculer la probabilité d'obtenir deux boules de même couleur.
3. Calculer la probabilité d'obtenir au moins une boule bleue.

EXERCICE 7 — STATISTIQUES
On considère la série :
8 ; 10 ; 10 ; 12 ; 14 ; 15 ; 15 ; 16 ; 18 ; 22.

1. Calculer la moyenne.
2. Déterminer la médiane.
3. Déterminer les quartiles.
4. Calculer l'étendue.
5. Calculer la variance.
6. Calculer l'écart-type.

EXERCICE 8 — MATRICE
Soit

A = [[1,2],[3,4]].

1. Calculer det(A).
2. Déterminer A⁻¹.
3. Vérifier que AA⁻¹ = I.

EXERCICE 9 — INTÉGRALE
Calculer :
∫₀¹ (3x² + 2x + 1) dx.

EXERCICE 10 — TRIGONOMÉTRIE
Résoudre dans R :
sin(x) = √3/2.

Donner toutes les solutions.

EXERCICE 11 — LOGARITHME
Résoudre dans R :
ln(x - 1) + ln(x + 1) = ln(3).

Préciser d'abord les conditions d'existence.

EXERCICE 12 — EXPONENTIELLE
Résoudre :
e^{2x} - 5e^x + 6 = 0.

EXERCICE 13 — VECTEURS / GÉOMÉTRIE
Dans un repère, on donne :
A(1,2), B(4,6), C(7,2).

1. Calculer les coordonnées des vecteurs AB et AC.
2. Calculer le produit scalaire AB·AC.
3. Déterminer si le triangle ABC est rectangle.
4. Calculer les longueurs AB et AC.

EXERCICE 14 — ÉQUATION DIFFÉRENTIELLE
Résoudre :
y' - 2y = 4.

Donner la solution générale puis déterminer la solution vérifiant y(0)=3.

EXERCICE 15 — DÉMONSTRATION
Soit n un entier naturel.

Démontrer par récurrence que :
1 + 2 + 3 + ... + n = n(n+1)/2.
`;

const parsed = parseStatement(devoir);

console.log('=== PARSING ===');
console.log('Nombre d\'exercices détectés:', parsed.exercises.length);
for (const ex of parsed.exercises) {
  console.log(`- ${ex.title || '(sans titre)'} : ${ex.questions.length} question(s), types: ${ex.questions.map(q => q.detectedType).join(', ')}`);
}

console.log('\n=== RESOLUTION DETERMINISTE (globale) ===');
const result = tryDeterministicExerciseResolution(parsed);

if (!result) {
  console.log('ECHEC global: le moteur a renvoyé null.');
} else {
  console.log('Succès:', result.success);
  for (const ex of result.solvedExercises) {
    console.log(`\n--- ${ex.title} ---`);
    for (const q of ex.questions) {
      console.log(`  ${q.numberLabel} => ${q.finalAnswer}`);
    }
  }
}

console.log('\n\n=== RESOLUTION EXERCICE PAR EXERCICE (isolation des echecs) ===');
for (const ex of parsed.exercises) {
  const singleParsed = { ...parsed, exercises: [ex] };
  const r = tryDeterministicExerciseResolution(singleParsed as any);
  if (!r) {
    console.log(`[ECHEC] ${ex.title} — au moins une question non résolue par un moteur spécialisé.`);
  } else {
    console.log(`[OK]    ${ex.title}`);
    for (const q of r.solvedExercises[0].questions) {
      console.log(`         ${q.numberLabel} => ${q.finalAnswer}`);
    }
  }
}
