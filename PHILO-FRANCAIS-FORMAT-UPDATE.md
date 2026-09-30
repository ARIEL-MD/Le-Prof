# Mise à jour du format Français-Philosophie

## Règle demandée
Pour un argument philosophique, le nom de l'auteur ne doit pas être injecté artificiellement dans l'explication de l'argument avec des formulations comme « Selon Freud... ».

Le format visé est :

1. **Argument** : idée claire et simple.
2. **Explication** : développement de l'idée, sans commencer par l'auteur.
3. **Citation** : citation exacte avec auteur et œuvre.
4. **Explication de la citation** : c'est ici que l'auteur est nommé et que le sens de la citation est expliqué.

## Changements
- Le reformulateur philosophique ne commence plus une explication par « Selon [auteur] », « Pour [auteur] », etc.
- Les formulations artificiellement universitaires ont été remplacées par des formulations plus simples et adaptées au niveau lycée.
- Les résultats de recherche de citations philosophiques affichent désormais explicitement l'« Explication de la citation », avec l'auteur à cet endroit.
- Un test de régression vérifie que « Selon Freud » n'apparaît pas dans l'explication d'un argument.

## Vérification
La suite TypeScript complète n'est pas exécutable dans cet environnement car `node_modules` n'est pas installé dans l'archive. Le test ajouté est donc livré avec le projet mais n'a pas été exécuté ici.
