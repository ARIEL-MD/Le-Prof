import test from 'node:test';
import assert from 'node:assert/strict';
import { solveAcademicDeterministic } from '../academicDeterministic/academicDeterministicEngine';

test('SES: taux de chômage',()=>{ const r=solveAcademicDeterministic('Une population active compte 800 personnes dont 64 chômeurs. Calculer le taux de chômage.','SES'); assert.ok(r); assert.match(r!.fullSynthesizedResponse,/8/); });
test('SES: inflation',()=>{ const r=solveAcademicDeterministic("L'indice passe de 120 à 126. Calculer le taux d'inflation.",'SES'); assert.ok(r); assert.match(r!.fullSynthesizedResponse,/5/); });
test('Informatique: binaire',()=>{ const r=solveAcademicDeterministic('Convertir 13 en binaire.','Informatique'); assert.ok(r); assert.match(r!.fullSynthesizedResponse,/1101/); });
test('Droit-Gestion: TVA',()=>{ const r=solveAcademicDeterministic('Un prix HT est de 100 avec une TVA de 18 %. Calculer le prix TTC.','Droit-Gestion'); assert.ok(r); assert.match(r!.fullSynthesizedResponse,/118/); });
test('SI: Ohm',()=>{ const r=solveAcademicDeterministic("U=12 V et R=4 ohms. Calculer I avec la loi d'Ohm.",'Sciences de l’ingénieur'); assert.ok(r); assert.match(r!.fullSynthesizedResponse,/3/); });
