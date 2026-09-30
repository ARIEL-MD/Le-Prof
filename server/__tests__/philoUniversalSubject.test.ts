import test from "node:test";
import assert from "node:assert/strict";
import { parseAndAnalyzePhiloSubject } from "../philoEngine/philoSubjectParser";

const SUBJECTS = [
  "Peut-on être heureux sans autrui ?",
  "Faut-il toujours dire la vérité ?",
  "Doit-on obéir aux lois ?",
  "Est-il raisonnable de désirer ?",
  "Le bonheur dépend-il de nous ?",
  "La technique suffit-elle à rendre l'homme heureux ?",
  "L'idée d'inconscient exclut-elle l'idée de liberté ?",
  "Pourquoi faut-il philosopher ?",
  "Dans quelle mesure la science dit-elle la vérité ?",
  "En quoi le travail est-il une activité proprement humaine ?",
  "Jusqu'à quel point sommes-nous responsables de nos actes ?",
  "À quelles conditions peut-on être libre ?",
  "La liberté, est-ce faire tout ce que l'on veut ?",
  "Obéir, est-ce renoncer à sa liberté ?",
  "Le désir est-il un obstacle au bonheur ?",
  "La conscience de soi suffit-elle à se connaître ?",
  "Peut-on connaître autrui ?",
  "La vérité est-elle toujours préférable à l'illusion ?",
  "La justice consiste-t-elle à traiter tout le monde de la même manière ?",
  "Le droit est-il nécessaire à la liberté ?",
  "La loi peut-elle être injuste ?",
  "L'État doit-il limiter la liberté ?",
  "La religion est-elle contraire à la raison ?",
  "La foi exclut-elle la connaissance ?",
  "L'art nous éloigne-t-il de la réalité ?",
  "Le beau est-il une propriété des choses ?",
  "Le langage exprime-t-il seulement la pensée ?",
  "Peut-on penser sans langage ?",
  "La mémoire nous empêche-t-elle d'oublier ?",
  "L'histoire a-t-elle un sens ?",
  "Les événements historiques sont-ils prévisibles ?",
  "L'homme est-il naturellement bon ?",
  "La culture nous éloigne-t-elle de la nature ?",
  "Le progrès technique est-il nécessairement un progrès humain ?",
  "La science peut-elle tout expliquer ?",
  "Pourquoi y a-t-il des lois scientifiques ?",
  "Le travail libère-t-il réellement l'homme ?",
  "Le devoir peut-il être contraire au bonheur ?",
  "A-t-on le droit de désobéir à une loi injuste ?",
  "Qu'est-ce qu'être libre ?",
  "Que signifie être conscient ?",
  "Comment distinguer la vérité de l'opinion ?",
  "Pourquoi désirons-nous ce que nous n'avons pas ?",
  "La philosophie est-elle inutile ?",
  "La mort donne-t-elle un sens à la vie ?",
  "Vivre, est-ce seulement ne pas mourir ?",
  "Peut-on échapper au temps ?",
  "Le passé détermine-t-il notre présent ?",
  "Autrui est-il un obstacle à ma liberté ?",
  "Peut-on vivre sans société ?",
  "La société nous rend-elle plus libres ?",
  "Nature et culture s'opposent-elles nécessairement ?",
  "Une œuvre d'art doit-elle être belle ?",
  "L'éducation rend-elle libre ?",
  "La raison doit-elle toujours s'opposer au désir ?",
  "Est-il possible de vivre sans illusion ?",
  "Toute opinion est-elle respectable ?",
  "La conscience morale suffit-elle à déterminer le bien ?",
  "La fin justifie-t-elle les moyens ?",
  "La liberté suppose-t-elle la responsabilité ?",
  "Peut-on être libre dans une société de lois ?",
];

for (const subject of SUBJECTS) {
  test(`analyse universelle : ${subject}`, () => {
    const parsed = parseAndAnalyzePhiloSubject(subject);
    assert.equal(parsed.sujetNettoye + " ?", subject);
    assert.equal(parsed.problemeCourt, subject);
    assert.ok(parsed.reformulation.includes(parsed.sujetNettoye));
    const anchors = parsed.sujetNettoye.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(w => w.length >= 5);
    const aspect2Norm = parsed.aspect2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    assert.ok(anchors.some(w => aspect2Norm.includes(w)), "L'aspect 2 doit conserver au moins un ancrage du sujet");
    assert.ok(parsed.predicatPrincipal.length > 0);
  });
}

test("ne remplace jamais un sujet multi-notions par une notion isolée", () => {
  const p = parseAndAnalyzePhiloSubject("Le désir est-il un obstacle au bonheur ?");
  assert.equal(p.problemeCourt, "Le désir est-il un obstacle au bonheur ?");
  assert.match(p.reformulation, /désir.*obstacle.*bonheur/i);
});

test("conserve les relations exactes inconscient/liberté", () => {
  const p = parseAndAnalyzePhiloSubject("L'idée d'inconscient exclut-elle l'idée de liberté ?");
  assert.equal(p.problemeCourt, "L'idée d'inconscient exclut-elle l'idée de liberté ?");
  assert.match(p.reformulation, /inconscient.*exclut.*liberté/i);
});

test("ne fabrique pas un faux opérateur pour les sujets 'dans quelle mesure'", () => {
  const p = parseAndAnalyzePhiloSubject("Dans quelle mesure la science dit-elle la vérité ?");
  assert.equal(p.problemeCourt, "Dans quelle mesure la science dit-elle la vérité ?");
  assert.doesNotMatch(p.aspect1, /dans quelle mesure.*dans quelle mesure/i);
});

test("gère un sujet affirmatif sans point d'interrogation", () => {
  const p = parseAndAnalyzePhiloSubject("La liberté consiste à faire ce que l'on veut");
  assert.equal(p.problemeCourt, "La liberté consiste à faire ce que l'on veut ?");
  assert.ok(p.reformulation.includes("La liberté consiste à faire ce que l'on veut"));
});

test("refuse un sujet vide", () => {
  assert.throws(() => parseAndAnalyzePhiloSubject("   "), /sujet.*vide/i);
});
