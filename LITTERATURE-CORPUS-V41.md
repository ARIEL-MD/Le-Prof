# V41 — Corpus littéraire étendu sans IA

## Ce qui est renforcé
- Intégration dédupliquée des œuvres présentes dans le document « Résumés de quelques œuvres » fourni par l'utilisateur.
- Séparation stricte entre références vérifiées et éléments que le document lui-même signalait comme à vérifier.
- Extension du corpus au-delà de ce document avec des œuvres françaises, africaines, ivoiriennes et francophones supplémentaires.
- Recherche déterministe locale par titre, auteur et alias.
- Aucune citation inventée dans le nouveau corpus.
- Les références documentaires ne sont pas affichées comme des liens de sources dans la réponse utilisateur.

## Règle de fiabilité
Une œuvre marquée `document_unverified` est conservée pour ne pas perdre l'information du document fourni, mais le moteur de recherche académique ne la sert pas comme œuvre vérifiée.

## Architecture
`question -> détection de l'œuvre -> corpus vérifié -> thèmes -> argument -> exemple -> dissertation`

Le moteur conserve également le comportement Fomesoutra déjà intégré :
`Sujet -> reformulation fidèle -> problème interrogatif naturel -> axe 1 -> axe 2`.

## Contexte Côte d'Ivoire
La Côte d'Ivoire reste le contexte prioritaire du projet. Le ministère indique que les programmes éducatifs ivoiriens sont structurés autour des programmes nationaux et publie les supports/manuels retenus pour l'année scolaire 2026-2027. Les œuvres du corpus sont donc traitées comme ressources littéraires et pédagogiques ; une œuvre n'est pas automatiquement déclarée « œuvre officielle au programme » sans preuve curriculaire.

## Contrôle technique
- `server/literatureWorkKnowledgeBase.ts` + `server/scribd854LiteraryCorpus.ts` : compilation TypeScript ciblée réussie.
- Corpus étendu : 95 entrées uniques.
- Tests complets : l'environnement ne possède pas les types Node/tests nécessaires ; la compilation complète remonte uniquement ces dépendances de test manquantes et quelques anciens problèmes de typage du projet.

## Extension V42 — recherche web pédagogique

Recherche complémentaire effectuée sur des sources institutionnelles publiques : MENA Côte d'Ivoire, Ministère de l'Éducation nationale du Sénégal, Éduscol / Ministère français de l'Éducation nationale et UNESCO-IICBA. Le registre `server/webEducationalSourceRegistry.ts` conserve ces références pour le routage et le contrôle en arrière-plan, sans afficher les sites à l'élève.

Le corpus littéraire a été étendu avec des œuvres supplémentaires issues notamment des programmes français 2026-2027 et de la littérature francophone/africaine. Les entrées ajoutées restent déterministes, locales et sans API d'IA.
