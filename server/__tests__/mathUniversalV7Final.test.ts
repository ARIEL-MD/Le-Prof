import test from 'node:test';
import assert from 'node:assert/strict';
import { solveUniversalMathHomework } from '../exercisePipeline/universalMathEngine';

const solve=(s:string)=>solveUniversalMathHomework(s);

test('V7 system 2x2',()=>{
 const r=solve('1. Résoudre le système x+y=5 ; 2x-y=1.');
 assert.equal(r.success,true); assert.match(r.solvedExercises[0].questions[0].finalAnswer,/x\s*=\s*2/); assert.match(r.solvedExercises[0].questions[0].finalAnswer,/y\s*=\s*3/);
});

test('V7 rational equation',()=>{
 const r=solve('1. Résoudre 1/(x+1)=2.');
 assert.equal(r.success,true); assert.match(r.solvedExercises[0].questions[0].finalAnswer,/-0\.5|-1\/2/);
});

test('V7 integration by parts',()=>{
 const r=solve('1. Déterminer une primitive de x*cos(x).');
 assert.equal(r.success,true); assert.match(r.solvedExercises[0].questions[0].finalAnswer,/x\\sin|xsin/);
});

test('V7 substitution integral',()=>{
 const r=solve('1. Déterminer une primitive de (2x+1)^3.');
 assert.equal(r.success,true); assert.match(r.solvedExercises[0].questions[0].finalAnswer,/\^\{4\}|4/);
});

test('V7 coordinate geometry',()=>{
 const r=solve('1. Dans un repère, A(1,2) et B(4,6). Calculer la distance AB.');
 assert.equal(r.success,true); assert.match(r.solvedExercises[0].questions[0].finalAnswer,/5/);
});

test('V7 algebra simplification',()=>{
 const r=solve('1. Simplifier (x+1)^2 - x^2.');
 assert.equal(r.success,true); assert.match(r.solvedExercises[0].questions[0].finalAnswer,/2 x|2\*x|2x/);
});

test('V7 mixed multi-question deterministic chaining',()=>{
 const r=solve(`EXERCICE 1\nf(x)=x^2+1.\n1. Calculer f(2).\n2. En déduire la valeur obtenue puis calculer 3x+1.`);
 assert.equal(r.success,true);
 assert.equal(r.report?.isComplete,true);
});


test('V7 linear equation natural wording',()=>{
 const r=solve('1. Trouver x : 2x+4=10.');
 assert.equal(r.success,true); assert.match(r.solvedExercises[0].questions[0].finalAnswer,/3/);
});

test('V7 rational linear denominator',()=>{
 const r=solve('1. Résoudre 1/(x+1)=2.');
 assert.equal(r.success,true); assert.match(r.solvedExercises[0].questions[0].finalAnswer,/-0\.5|-1\/2/);
});

test('V7 arithmetic sequence sum',()=>{
 const r=solve('1. Suite arithmétique de premier terme 3 et de raison 2 : calculer la somme des 4 premiers termes.');
 assert.equal(r.success,true); assert.match(r.solvedExercises[0].questions[0].finalAnswer,/24/);
});

test('V7 percentage',()=>{
 const r=solve('1. Calculer 20% de 150.');
 assert.equal(r.success,true); assert.match(r.solvedExercises[0].questions[0].finalAnswer,/30/);
});
