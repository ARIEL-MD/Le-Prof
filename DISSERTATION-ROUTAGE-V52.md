# Le Prof V52 — Routage robuste des devoirs de dissertation Français / Philosophie

## Objectif

Reconnaître automatiquement un vrai devoir/sujet de dissertation de Français ou de Philosophie avant les moteurs de recherche de notions, définitions, arguments et cours.

## Règles

- « définition de X » → définition, jamais dissertation.
- « argument sur la poésie » → arguments littéraires, jamais dissertation.
- « citation sur la liberté » → citation, jamais dissertation.
- « guerre froide » → savoir/cours ciblé, jamais commentaire de dissertation.
- « devoir de dissertation philosophique : … » → moteur de dissertation philosophique.
- « dissertation de français : … » → moteur de dissertation française.
- « sujet de philosophie : Peut-on… ? » → dissertation philosophique si les marqueurs sont suffisants.
- « sujet de français : La poésie… ? » → dissertation française si les marqueurs sont suffisants.
- « méthode dissertation philosophique » → méthodologie, pas rédaction complète.

## Architecture

`dissertationTaskRouter.ts` centralise la reconnaissance. Il est utilisé par :

1. `localTutorEngine.ts` pour le routage de réponse.
2. `academicSearchEngine.ts` pour éviter qu'une recherche de devoir tombe dans un corpus générique.
3. `universalExerciseRouter.ts` qui expose `dissertationType` (`francais` / `philosophie`) et force la tâche `redaction`.

## Contraintes

Aucune API d'IA n'est utilisée. Le routage est déterministe et local.
