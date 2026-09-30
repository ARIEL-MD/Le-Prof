# V20 — Recherche de cours & arguments philosophiques

## Corrections

- Le champ Argument ne reçoit plus de préfixes génériques tels que « On peut ainsi », « L'analyse rigoureuse met en lumière que » ou « Cette idée montre que ».
- Les reformulations algorithmiques génériques ont été neutralisées : une variante doit venir d'une formulation explicitement présente dans le corpus.
- Les catégories (« fonctions », perspectives, axes) ne sont plus considérées comme le nombre réel de variantes.
- L'espace de présentation est virtuellement très grand (1 milliard d'indices de présentation) et la sélection reste déterministe à partir de la recherche, de la session et de l'indice de recherche.
- La notion Religion possède désormais un corpus dédié de 4 perspectives et 12 arguments structurés, avec variantes de formulation.
- Une recherche de notion inconnue ne doit plus recevoir de faux arguments génériques fabriqués avec des auteurs ou citations arbitraires.
- L'interface « Toutes les fonctions » est renommée « Tous les arguments » pour ne plus confondre catégories et variantes.

## Limitation de validation

Le projet extrait ne contient pas ses dépendances `node_modules`. `tsc --noEmit` a été lancé : aucune erreur TypeScript n'est signalée dans `server/argumentVariationEngine.ts` après correction ; les erreurs restantes proviennent principalement des dépendances/types absents et des tests qui nécessitent les types Node. Les tests runtime complets ne peuvent donc pas être exécutés dans cet environnement sans installer les dépendances.
