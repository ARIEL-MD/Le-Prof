import test from "node:test";
import assert from "node:assert/strict";
import { cleanPhiloSubject, detectModalType, parseAndAnalyzePhiloSubject } from "../philoEngine/philoSubjectParser";

const subjects = [
  "Peut-on être libre sans être conscient de soi ?","Peut-il y avoir une vérité sans démonstration ?","Peut-on penser sans langage ?",
  "Faut-il toujours dire la vérité ?","Faut-il renoncer à ses désirs pour être heureux ?","Doit-on obéir aux lois pour être libre ?",
  "L'homme doit-il travailler pour être libre ?","Le travail rend-il l'homme libre ?","Le désir dépend-il de nous ?","Le bonheur dépend-il de nous ?",
  "La liberté dépend-elle de la connaissance ?","Suffit-il de vouloir pour être libre ?","Est-il suffisant de connaître le bien pour le faire ?",
  "Obéir, est-ce renoncer à sa liberté ?","La liberté est-elle compatible avec l'inconscient ?","L'idée d'inconscient exclut-elle l'idée de liberté ?",
  "Le mythe est-il aux antipodes de la raison ?","Le bonheur est-il un mythe ?","La philosophie est-elle inutile ?","La philosophie est-elle un mythe ?",
  "Pourquoi philosopher ?","Pourquoi faut-il philosopher ?","À quoi sert la philosophie ?","En quoi la philosophie est-elle utile ?",
  "Dans quelle mesure le travail libère-t-il l'homme ?","Comment la conscience peut-elle être libre ?","À quelles conditions l'homme peut-il être libre ?",
  "Jusqu'à quel point la science peut-elle prétendre à la vérité ?","Que vaut une vérité qui ne peut être démontrée ?","Quelle est la valeur de la vérité ?",
  "Quelle place faut-il accorder à la raison ?","La technique est-elle une libération ou une servitude ?","La raison exclut-elle le mythe ?",
  "La culture s'oppose-t-elle à la nature ?","La conscience suffit-elle à garantir la liberté ?","L'homme est-il responsable de tout ce qu'il fait ?",
  "La justice consiste-t-elle à traiter tout le monde de la même manière ?","La loi est-elle toujours juste ?","La morale peut-elle être universelle ?",
  "La vérité est-elle toujours bonne à dire ?","La science peut-elle tout expliquer ?","Le progrès est-il nécessairement un bien ?",
  "Le travail est-il une nécessité ou une liberté ?","Le bonheur est-il compatible avec la liberté ?","La liberté consiste-t-elle à faire ce que l'on veut ?",
  "L'art peut-il nous apprendre quelque chose ?","La beauté est-elle objective ?","L'histoire a-t-elle un sens ?","L'homme est-il naturellement bon ?",
  "La société nous rend-elle plus libres ?","La technique nous libère-t-elle du travail ?","La religion est-elle un obstacle à la raison ?","La foi exclut-elle la raison ?",
  "La connaissance de soi est-elle possible ?","Peut-on se connaître soi-même ?","Peut-on être heureux dans une société injuste ?",
  "Faut-il apprendre à désirer moins pour être heureux ?","Doit-on choisir entre bonheur et vérité ?","La vérité dépend-elle du point de vue ?",
  "La justice dépend-elle des lois ?","Le devoir suffit-il à fonder la morale ?","La liberté est-elle un droit ou un pouvoir ?",
  "Le langage exprime-t-il fidèlement la pensée ?","La conscience est-elle transparente à elle-même ?","L'inconscient détermine-t-il nos actes ?",
  "La raison peut-elle maîtriser les passions ?","Les passions sont-elles un obstacle à la liberté ?","Le désir est-il un obstacle au bonheur ?",
  "Le désir est-il nécessaire au bonheur ?","Le plaisir suffit-il au bonheur ?","La vertu suffit-elle au bonheur ?","La société est-elle nécessaire à l'homme ?",
  "Autrui est-il un obstacle à ma liberté ?","Autrui est-il nécessaire à la connaissance de soi ?","La solitude est-elle une condition du bonheur ?",
  "L'État est-il nécessaire à la liberté ?","L'État peut-il être juste ?","La désobéissance est-elle parfois un devoir ?","Peut-on être libre sous la contrainte ?",
  "Une loi injuste doit-elle être obéie ?","La philosophie doit-elle rejeter tout recours au mythe ?","La philosophie peut-elle transformer le monde ?",
  "La philosophie sert-elle à vivre ?","La science remplace-t-elle la philosophie ?","La technique peut-elle remplacer le travail humain ?",
  "Le progrès scientifique rend-il l'homme plus libre ?","La conscience de la mort empêche-t-elle de vivre ?","La mort donne-t-elle un sens à la vie ?",
  "La vie a-t-elle un sens ?","L'existence précède-t-elle l'essence ?","Sommes-nous condamnés à être libres ?",
  "Peut-on être responsable de ce que l'on ignore ?","L'ignorance excuse-t-elle la faute ?","Le savoir rend-il nécessairement meilleur ?",
  "L'opinion est-elle un obstacle à la connaissance ?","Douter, est-ce renoncer à savoir ?","Faut-il douter de tout ?",
  "La raison peut-elle se passer de l'expérience ?","L'expérience suffit-elle à produire la connaissance ?","La vérité scientifique est-elle définitive ?",
  "L'homme peut-il vivre sans illusion ?","L'illusion est-elle nécessaire au bonheur ?"
];

function words(s: string): string[] {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, " ").replace(/[^a-z0-9\s]/g," ").split(/\s+/)
    .filter(w=>w.length>=5)
    .filter(w=>!new Set(["quelle","quelles","quels","comment","pourquoi","mesure","homme","hommes","faire","faut","doit","peut","etre","dans","sans","pour","avec","cette","jusqu"]).has(w));
}

test("couverture exhaustive des formes de sujets", () => {
  for (const subject of subjects) {
    const a = parseAndAnalyzePhiloSubject(subject); const exact = cleanPhiloSubject(subject);
    assert.equal(a.sujetNettoye.replace(/\s*\?\s*$/, ""), exact.replace(/\s*\?\s*$/, ""), subject);
    assert.ok(a.problemeCourt.toLowerCase().includes(exact.toLowerCase().replace(/\?$/, "")), `problème non ancré: ${subject}`);
    assert.ok(a.reformulation.includes(exact), `reformulation non ancrée: ${subject}`);
    const corpus = `${a.aspect1} ${a.aspect2} ${a.reformulation}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const significant = words(subject);
    const hits = significant.filter(w=>corpus.includes(w));
    assert.ok(hits.length >= Math.min(2, significant.length), `termes perdus: ${subject}`);
  }
});

test("les opérateurs philosophiques majeurs sont reconnus", () => {
  const forms: Array<[string,string]> = [["Peut-on penser sans langage ?","PEUT_ON"],["Faut-il toujours dire la vérité ?","FAUT_IL"],["Doit-on obéir aux lois ?","DOIT_ON"],["Le bonheur dépend-il de nous ?","DEPEND_IL"],["Suffit-il de vouloir pour être libre ?","SUFFIT_IL"],["L'idée d'inconscient exclut-elle l'idée de liberté ?","EXCLUT_IL"],["Pourquoi philosopher ?","POURQUOI"],["Le travail rend-il l'homme libre ?","EST_IL"]];
  for (const [s,e] of forms) assert.equal(detectModalType(s),e,s);
});

test("les deux pôles conceptuels d'un sujet relationnel restent présents", () => {
  const pairs: Array<[string,string[]]> = [["Le désir est-il un obstacle au bonheur ?",["desir","bonheur"]],["L'inconscient exclut-il la liberté ?",["inconscient","liberte"]],["Le travail rend-il l'homme libre ?",["travail","libre"]],["La raison exclut-elle le mythe ?",["raison","mythe"]],["La société nous rend-elle plus libres ?",["societe","libres"]]];
  for (const [subject,terms] of pairs) { const a=parseAndAnalyzePhiloSubject(subject); const corpus=`${a.problemeCourt} ${a.aspect1} ${a.aspect2} ${a.reformulation}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""); for(const term of terms) assert.ok(corpus.includes(term),`${subject}: terme perdu ${term}`); }
});
