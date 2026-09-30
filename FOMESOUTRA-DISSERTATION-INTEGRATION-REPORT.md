# Intégration Fomesoutra — dissertation française

## Objectif
Calibrer le moteur déterministe de dissertation littéraire de Le Prof sur des sujets/corrigés documentaires disponibles sur Fomesoutra, notamment la ressource « Quelques sujets de dissertation et de synthèse, leur problématiques et un plan possible » ainsi que les banques de sujets/corrigés de Français Terminale.

## Règle ajoutée
Pour un sujet reconnu, le moteur suit prioritairement :

`Sujet -> Reformulation fidèle -> Problème interrogatif scolaire -> Axe 1 -> Axe 2`

Il ne force plus « Dans quelle mesure… » pour les sujets calibrés et ne transforme pas automatiquement une question scolaire simple en problématique artificiellement complexe.

## Corpus déterministe
15 patrons de référence ont été intégrés dans `server/fomesoutraDissertationReference.ts`, avec notamment :
- Barthes / poésie et souffrance ;
- Sartre / littérature et liberté ;
- Jules Verne / roman et distraction ;
- Jean Vilar / théâtre ;
- poésie et intimité ;
- Maupassant / but du roman ;
- littérature et société ;
- roman / imaginaire et réalité ;
- Stendhal / fonction du roman ;
- poésie / mission du poète ;
- théâtre / fonction ;
- poésie / fonction ;
- littérature / rêve et évasion.

## Séparation des sources
Fomesoutra est traité comme **source documentaire pédagogique**, pas comme preuve automatique que chaque document est un programme officiel du ministère.

## Contraintes
- aucune IA générative ;
- aucune API d'IA ;
- résolution locale et déterministe ;
- pas de source Fomesoutra affichée à côté de la réponse utilisateur ;
- les métadonnées de provenance restent internes au moteur.

## Vérification
Le fichier principal et le nouveau module passent la vérification syntaxique TypeScript ciblée disponible dans l'environnement. L'exécution des tests Node n'a pas pu être lancée car les définitions TypeScript Node / dépendances locales ne sont pas installées dans cet environnement de travail.
