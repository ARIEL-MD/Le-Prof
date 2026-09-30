# Le Prof V50 — Correction de la recherche et de la présentation

## Corrections
- Une recherche documentaire n'affiche plus les préfixes `Leçon X :` dans le titre présenté à l'élève.
- Suppression des formulations génériques du type « Dans les programmes officiels... » dans les réponses de recherche concernées.
- `argument sur roman` / `donne argument sur roman` est désormais traité comme une **recherche d'arguments**, et non comme une demande de dissertation complète.
- Pour une recherche d'arguments, le moteur retourne directement : fonction littéraire → argument → explication → illustration → œuvre/auteur.
- La vue de résultats ne montre plus les onglets de dissertation (« Repères », « Méthode », « Copie rédigée », etc.) pour une recherche directe d'arguments.
- Les marqueurs Markdown (`**`, `##`, etc.) sont rendus visuellement et ne doivent plus apparaître comme caractères bruts dans les vues concernées.

## Tests
- Recherche générale d'arguments sur le roman : 24 arguments produits à partir du corpus local.
- Recherche ciblée « arguments sur roman engagé » : 6 arguments produits.
- Transpilation syntaxique des 6 fichiers modifiés : OK.
- Vérification des anciennes formulations « Dans les programmes officiels... » : aucune occurrence restante dans `server/` et `src/`.
