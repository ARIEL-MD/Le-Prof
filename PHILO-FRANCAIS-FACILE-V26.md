# V26 — Philosophie : français facile à retenir

- Les arguments philosophiques conservent leur idée, auteur, œuvre et citation.
- Les formulations sont simplifiées avec un vocabulaire accessible au niveau Terminale.
- Les variantes changent la formulation, pas le contenu philosophique.
- Les explications sont également simplifiées.
- Le bloc de rappel affiche « À retenir » pour la philosophie.
- Aucun nouveau fait, auteur ou citation n'est créé par cette couche.

La compilation TypeScript complète reste bloquée par l'absence de dépendances (`react`, `lucide-react`, etc.) dans l'environnement de test.

## V26 — renforcement « français facile » des arguments

- Les arguments philosophiques sont simplifiés avant affichage : vocabulaire courant, phrases plus courtes et suppression des amorces académiques inutiles.
- La simplification ne doit jamais modifier l'auteur, l'œuvre ou la citation associée à l'argument.
- La variation entre utilisateurs repose sur le `userSeed` + la recherche + l'index de présentation : le même fond peut être présenté avec une formulation différente.
- Une citation reste une donnée de référence : elle n'est pas paraphrasée pour créer artificiellement une différence entre utilisateurs.
- Les variantes doivent rester sémantiquement équivalentes ; le moteur ne doit pas inventer une nouvelle thèse pour obtenir de l'unicité.
