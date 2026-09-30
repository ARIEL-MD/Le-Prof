import test from 'node:test';
import assert from 'node:assert/strict';
import { parseStatement } from '../exercisePipeline/statementParser';
import { resolveMathQuestion } from '../exercisePipeline/mathResolutionOrchestrator';

function solve(text:string){
 const p=parseStatement(text); assert.ok(p.exercises[0]?.questions[0]);
 return resolveMathQuestion(text,p.exercises[0].questions[0]);
}

test('broad math: puissance et racine',()=>{ const r=solve('Calculer 2^5'); assert.ok(r); assert.match(r!.finalAnswer,/32/); });
test('broad math: logarithme',()=>{ const r=solve('Résoudre ln(x)=2'); assert.ok(r); assert.match(r!.finalAnswer,/e\^2/); });
test('broad math: trigonométrie remarquable',()=>{ const r=solve('Calculer sin(pi/6)'); assert.ok(r); assert.match(r!.finalAnswer,/1\/2/); });
test('broad math: factorielle',()=>{ const r=solve('Calculer 5!'); assert.ok(r); assert.match(r!.finalAnswer,/120/); });
test('broad math: milieu',()=>{ const r=solve('Trouver le milieu du segment A(2,4) B(6,8)'); assert.ok(r); assert.match(r!.finalAnswer,/4/); });
test('broad math: dérivée',()=>{ const r=solve("Déterminer la dérivée de f(x)=x^3+2x"); assert.ok(r); assert.match(r!.finalAnswer,/3/); });
