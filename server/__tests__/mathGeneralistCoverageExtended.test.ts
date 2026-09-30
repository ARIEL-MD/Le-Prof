import test from 'node:test';
import assert from 'node:assert/strict';
import { tryGenericAdvancedMathResolution } from '../exercisePipeline/genericAdvancedMathSolver';

function q(cleanText:string, detectedType:any='general_math'): any { return { id: Math.random().toString(), numberLabel:'Q', cleanText, detectedType }; }
function solve(s:string, t='general_math') { return tryGenericAdvancedMathResolution('', q(s,t)); }

test('generalist: valeur absolue', () => assert.match(solve('Résoudre |x-3| = 5')?.finalAnswer ?? '', /-2|8/));
test('generalist: trigonométrie', () => assert.ok(solve('Résoudre sin(x) = 0.5')?.finalAnswer));
test('generalist: exponentielle', () => assert.ok(solve('Résoudre e^x = 5')?.finalAnswer));
test('generalist: logarithme', () => assert.ok(solve('Résoudre ln(x) = 2')?.finalAnswer));
test('generalist: système 2x2', () => assert.match(solve('Résoudre le système\nx+y=5\n2x-y=1')?.finalAnswer ?? '', /x = 2.*y = 3/));
test('generalist: cubique', () => assert.ok(solve('Résoudre x^3 - 6x^2 + 11x - 6 = 0','equation')?.finalAnswer));
test('generalist: inéquation polynomiale', () => assert.ok(solve('Résoudre x^2 - 4 >= 0','inequation')?.finalAnswer));
test('generalist: factorisation', () => assert.ok(solve('Factoriser x^3-6x^2+11x-6','factorisation')?.finalAnswer));
