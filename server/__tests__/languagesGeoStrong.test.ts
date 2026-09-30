import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { solveLanguageExercise } from '../languagesEngine/languagesEngine';
import { solveGeo6e } from '../geo6eEngine/geo6eEngine';

describe('Coverage renforcée — langues et géographie 6e', () => {
  it('English: future, reported speech and comparative', () => {
    assert.match(solveLanguageExercise('Conjugate in future simple: go', 'anglais').fullSolution, /will go/i);
    assert.match(solveLanguageExercise('Reported speech: "I am tired today"', 'anglais').fullSolution, /was tired|that day/i);
    assert.match(solveLanguageExercise('Comparative: tall and expensive', 'anglais').fullSolution, /taller than|more expensive than/i);
  });
  it('German: Präteritum and subordinate word order', () => {
    assert.match(solveLanguageExercise('Präteritum: gehen', 'allemand').fullSolution, /ging/i);
    assert.match(solveLanguageExercise('weil: Er lernt viel', 'allemand').fullSolution, /verbe|fin|weil/i);
  });
  it('Spanish: ser/estar and por/para', () => {
    assert.match(solveLanguageExercise('Ser y estar: explique la règle', 'espagnol').fullSolution, /SER|ESTAR/i);
    assert.match(solveLanguageExercise('Por o para: explique la règle', 'espagnol').fullSolution, /PARA|POR/i);
  });
  it('Geography 6e: scale and thermal amplitude', () => {
    const scale = solveGeo6e('Échelle : 1 cm représente 5 km. La distance sur la carte est 3 cm. Calculer la distance réelle.');
    assert.match(scale.result.finalConclusion, /15 km/i);
    const amp = solveGeo6e('La température maximale est 32 °C et la minimale est 20 °C. Calculer l’amplitude thermique.');
    assert.match(amp.result.finalConclusion, /12 °C/i);
  });
});
