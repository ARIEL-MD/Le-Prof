import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { findFomesoutraDissertationReference, FOMESOUTRA_DISSERTATION_REFERENCE_COUNT } from '../fomesoutraDissertationReference';
import { solveFrancaisTle } from '../francaisTleEngine/francaisTleEngine';

describe('Corpus Fomesoutra — dissertation littéraire ivoirienne', () => {
  it('charge un corpus déterministe de références', () => {
    assert.ok(FOMESOUTRA_DISSERTATION_REFERENCE_COUNT >= 25);
  });

  it('reconnaît Barthes et restitue le problème scolaire attendu', () => {
    const r = findFomesoutraDissertationReference('Roland Barthes : « L’univers poétique est rempli de tourments qui font des poètes des gens qui n’ont jamais souri. »');
    assert.ok(r);
    assert.equal(r.probleme, 'La poésie est-elle exclusivement le chant de la douleur ?');
  });

  it('reconnaît Sartre et ne force pas « Dans quelle mesure »', () => {
    const r = solveFrancaisTle('« La littérature vous jette dans la bataille, écrire c’est une autre façon de vouloir la liberté. »');
    assert.ok(r.success);
    assert.equal(r.result?.problemStatement, 'Quel est le rôle de la littérature dans la société ?');
    assert.ok(!/dans quelle mesure/i.test(r.result?.problemStatement || ''));
    assert.match(r.methodologyAnalysis?.francaisPreliminaryWork?.analyseDuSujet?.reformulation || '', /s’engager|lutter pour la liberté/i);
  });

  it('reconnaît Jules Verne et produit deux axes cohérents', () => {
    const r = solveFrancaisTle('Jules Verne : « J’ai quelquefois transporté mes lecteurs loin de la terre dans mes romans. »');
    assert.equal(r.result?.problemStatement, 'Le roman se limite-t-il à distraire le lecteur ?');
    assert.match(r.result?.thesis || '', /divertit|s’évader/i);
    assert.match(r.result?.antithesis || '', /instruire|réfléchir/i);
  });

  it('reconnaît Stendhal et conserve une problématique simple', () => {
    const r = solveFrancaisTle('Stendhal : « Le roman est un miroir que l’on promène le long d’un chemin. »');
    assert.equal(r.result?.problemStatement, 'Quelle est la fonction du roman ?');
  });
  it('renforce le modèle roman réalité / imagination à partir du corpus Scribd', () => {
    const r = findFomesoutraDissertationReference('Le roman reflète la réalité mais il est aussi le fruit de l’imagination.');
    assert.ok(r);
    assert.equal(r.probleme, 'Le roman est-il seulement une reproduction de la réalité ?');
  });

  it('reconnaît le modèle lecture évasion / instruction', () => {
    const r = findFomesoutraDissertationReference('La lecture comme moyen d’évasion et comme moyen d’instruction.');
    assert.ok(r);
    assert.equal(r.probleme, "La lecture se limite-t-elle à l'évasion ?");
  });

  it('reconnaît le modèle écrivain éducateur / créateur', () => {
    const r = findFomesoutraDissertationReference('Le rôle de l’écrivain : fonction éducative, défenseur des sans voix, revalorisation de la culture.');
    assert.ok(r);
    assert.equal(r.probleme, "Quelle est la fonction de l'écrivain dans la société ?");
  });

});
