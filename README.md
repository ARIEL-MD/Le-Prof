# Le Prof — Examens & Concours (BEPC & BAC)

Plateforme éducative d'excellence académique couvrant les programmes de la 6e à la Terminale, CPGE et Supérieur (Baccalauréats francophones, Brevet, IB, AP, A-Levels).

---

## Caractéristiques Principales

- **Moteur de Recherche Local-First, Déterministe & Sécurisé** :
  - Les cours officiels et bases pédagogiques locales sont toujours prioritaires.
  - Aucun texte générique ou argument inventé n'est fabriqué lorsqu'une connaissance fiable manque.
  - Wikipédia/Wikidata ne servent qu'en dernier recours pour les connaissances hors corpus, avec un libellé explicite de source externe.
  - Les recherches argumentatives sont personnalisées par utilisateur et ne partagent pas un résultat final mis en cache.
- **Recherche de Cours & Notions — couverture 6e à Terminale :**
  - **Philosophie Terminale** : 24 grandes notions du programme officiel intégralement couvertes. Pour chaque notion : thèses, antithèses, 8 arguments académiques structurés (Idée → Explication préalable → Citation exacte entre guillemets avec titre d'œuvre et date → Commentaire analytique), étymologies et distinctions conceptuelles majeures.
  - **Français & Littérature** : Genres littéraires (Roman, Poésie, Théâtre), les 9 vocations de la littérature, mouvements littéraires (Classicisme, Lumières, Romantisme, Réalisme, Parnasse, Symbolisme, Négritude, Littérature africaine post-indépendance), recueil de figures de style et fiches méthodologiques.
  - **Histoire-Géographie** : Fiches de cours officielles, chronologies détaillées de la décolonisation, de la Guerre froide, de l'espace ivoirien et de la mondialisation.
  - **Mathématiques & Sciences (PC, SVT)** : Formules, définitions, théorèmes fondamentaux, méthodes étape par étape, pièges d'examen et exemples types résolus de la 6e à la Terminale.
- **Moteur de Résolution Déterministe (Méthode Papa)** :
  - Respect scrupuleux des directives d'excellence pédagogique officielles.
  - Traitement rigoureux des exercices mathématiques, équations, calculs et démonstrations.
  - Structure réglementaire stricte pour le commentaire de document d'Histoire-Géo et la dissertation philosophique.
- **Formules Mathématiques Riches** : Rendu LaTeX natif haute fidélité via KaTeX et saisie dynamique via MathLive.

---

## Installation et Lancement

### Prérequis

- **Node.js** (version 18 ou supérieure)
- **npm**

### 1. Installation des dépendances

```bash
npm install
```

### 2. Démarrer en mode développement

```bash
npm run dev
```

L'application est accessible à l'adresse : [http://localhost:3000](http://localhost:3000)

### 3. Lancer les tests de validation académique

```bash
npm test
```

### 4. Compiler pour la production

```bash
npm run build
npm start
```

## Priorité Côte d'Ivoire — Recherche de Cours & Notions
Le référentiel par défaut de la recherche est désormais la **Côte d'Ivoire**. L'ordre de recherche visé est : corpus ivoirien → ressources francophones compatibles → ressources internationales. La couverture est auditée séparément par niveau et discipline ; un domaine absent du corpus local n'est pas présenté comme couvert.
