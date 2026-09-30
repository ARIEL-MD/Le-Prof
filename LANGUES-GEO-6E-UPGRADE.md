# Renforcement Anglais / Allemand / Espagnol / Géographie 6e — V10

## Objectif
Porter les quatre domaines de « solide » à un niveau plus robuste, sans IA générative, en renforçant la reconnaissance et la résolution déterministes.

## Anglais
Ajouts :
- conjugaison Present Simple, Past Simple, Future Simple, Present/Past Continuous, Present/Past Perfect ;
- formes irrégulières fréquentes ;
- reported speech élémentaire avec changement des repères ;
- comparatif courant ;
- détection renforcée des consignes de conjugaison et de grammaire.

## Allemand
Ajouts :
- Präteritum des verbes fréquents ;
- ordre des mots après weil/dass/obwohl/wenn ;
- rappel déterministe des verbes de modalité ;
- conservation des solveurs Perfekt/Passiv existants.

## Espagnol
Ajouts :
- renforcement du Prétérito Indefinido pour verbes réguliers ;
- distinction Ser / Estar ;
- distinction Por / Para ;
- conservation des solveurs passif et subjonctif existants.

## Géographie 6e
Ajouts :
- calcul d'échelle ;
- amplitude thermique ;
- densité de population ;
- coordonnées géographiques simples ;
- conversion simple liée à la rotation terrestre ;
- intégration de ces résultats dans le moteur Géographie 6e existant.

## Validation
- transpilation syntaxique TypeScript des fichiers modifiés : OK ;
- tests fonctionnels isolés des nouveaux solveurs : OK ;
- cas validés : 9 cas langues + 2 cas géographie quantitative ;
- aucune API d'IA ni service externe de résolution ajouté.

## Limite connue
La batterie Node complète du projet dépend de `tsx` et des dépendances npm installées. L'environnement de travail actuel ne contient pas `tsx`; la validation complète de production doit donc être effectuée après installation des dépendances du projet.
