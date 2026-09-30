# Le Prof V46 — Moteur de réponse universel sans IA

## Objectif
Transformer la base documentaire en moteur de réponse déterministe : comprendre la demande, choisir le bon routage et restituer uniquement la facette demandée quand une réponse ciblée est disponible.

## Changements
- Extension du routeur scolaire : définition, date, cause, conséquence, formule, théorème, méthode, exercice, traduction, résumé, comparaison, argument, citation, exemple, rôle, objectifs, principes, organes, limites, atouts, manifestations, caractéristiques, cours, auteur et œuvre.
- Priorité aux intentions précises avant les intentions génériques.
- Ajout d'une politique centrale de forme de réponse, indépendante de la matière.
- Une réponse ciblée déjà disponible reste prioritaire ; la politique ne fabrique aucun contenu.
- Les facettes sans contenu ciblé conservent la fiche existante au lieu de produire une réponse artificielle.
- Les résultats « no result » ne sont jamais transformés en contenu.
- Compatible avec la séparation stricte des pays et la hiérarchie des sources déjà présentes.

## Référentiel
La Côte d'Ivoire reste le référentiel par défaut. Le MENA indique que la DPFC assure notamment la mise en œuvre pédagogique et la production/diffusion de documentation, manuels et matériels conformes aux programmes définis. Les supports retenus 2026-2027 sont publiés par le ministère. Le moteur conserve donc la distinction entre source officielle, source académique et ressource externe.

## Principe de vérification
Le corpus documentaire sert de matière première ; la couche V46 ne prétend pas rendre une ressource officielle simplement parce qu'elle est indexée. Les contenus ouverts ou externes restent identifiés comme tels dans les métadonnées internes.

## Sans IA
Aucun appel à OpenAI, Gemini, Claude, Mistral ou autre API d'IA n'est ajouté. Le comportement repose sur règles, index, bases locales, recherche déterministe et sources documentaires.
