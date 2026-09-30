# Recherche de Cours & Notions — Universal Search Upgrade

## Objectif

La recherche doit respecter une règle simple : **la réponse doit correspondre exactement à ce que l'élève demande**.

Exemple :
- « définition de vitesse » → la définition de **vitesse**, pas le chapitre complet ;
- « causes de la Seconde Guerre mondiale » → les **causes**, pas une fiche générale ;
- « conséquences de la Guerre froide » → les **conséquences** ;
- « théorème de Pythagore » → l'**énoncé / la propriété** correspondante ;
- « cours sur la photosynthèse » → le **cours complet**.

## Hiérarchie des sources

1. Référentiel officiel local intégré au projet.
2. Bases académiques locales soigneusement structurées.
3. Référentiels internationaux lorsque l'utilisateur les demande.
4. Encyclopédie externe uniquement en dernier recours, explicitement marquée comme externe.
5. Aucun résultat plutôt qu'une réponse inventée ou générique.

## Renforcement ajouté

- Recherche stricte des définitions dans `definitions[]` avant la recherche générale.
- Tolérance aux accents, pluriels et fautes simples sans changer le terme recherché.
- Ajout de la provenance : `sourceKind`, `sourceName`, `sourceUrl`, `verificationStatus`, `confidence`.
- Les réponses Wikipédia ne sont plus présentées comme des savoirs « officiels ».
- Filtrage supplémentaire des résultats encyclopédiques dont le titre ne correspond pas suffisamment au sujet.
- Test de régression dédié aux définitions exactes.

## Couverture actuelle du référentiel local

Le corpus contient actuellement plusieurs dizaines de collections de cours couvrant notamment :
mathématiques, physique-chimie, SVT, français, histoire, géographie, philosophie, anglais,
allemand, espagnol et EDHC, du collège au lycée selon les collections disponibles.

Le corpus local contient environ :
- 950+ définitions structurées ;
- 330+ formules ;
- 770+ exemples/exercices structurés.

Ces chiffres décrivent le corpus présent dans cette version et **ne signifient pas que tous les chapitres de tous les programmes de toutes les séries sont déjà couverts**.

## Règle de fiabilité

Le moteur ne doit jamais transformer une réponse générique en « définition officielle » ou « cours certifié ».
Quand aucune source suffisamment pertinente n'est disponible, le comportement attendu est :

> Aucun résultat suffisamment vérifié n'a été trouvé pour cette demande.

L'élève peut alors reformuler ou préciser le niveau, la matière, la série ou le programme.
