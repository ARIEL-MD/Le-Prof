# Audit Recherche de Cours & Notions — couverture scolaire

## Objectif

Le moteur doit privilégier une fiche pédagogique locale et vérifiée lorsqu'elle existe. Une source encyclopédique externe ne doit jamais être présentée comme un « cours officiel ».

## Couverture présente dans V22

### Collège
- 6e : mathématiques, physique-chimie, chimie, histoire, géographie, français/humanités, SVT via les bases collège/converties.
- 5e : mathématiques, physique-chimie/chimie, SVT, histoire, géographie, français/humanités.
- 4e : mathématiques, physique-chimie, SVT, français ; sciences/humanités communes.
- 3e / BEPC : mathématiques, physique-chimie, SVT, français, histoire-géographie, anglais/EDHC via les collections collège.

### Lycée
- Seconde : français, histoire, géographie, mathématiques, SVT, physique-chimie ; bases complémentaires.
- Première : mathématiques C/D, physique-chimie C/D/E, SVT D, histoire-géographie A/C/D, allemand/espagnol et bases complémentaires.
- Terminale : mathématiques A/C/D/E, physique-chimie C/D/E, SVT C/D, histoire-géographie, philosophie, français/littérature, allemand, espagnol, anglais et EDHC selon les collections présentes.

## Limites identifiées

La promesse « toutes matières, toutes séries, tous chapitres » ne doit pas être considérée comme automatiquement acquise simplement parce que le moteur accepte une recherche libre. Certaines matières, niveaux ou séries possèdent une couverture plus dense que d'autres dans les fichiers locaux.

Le moteur applique donc désormais la règle suivante :

1. chercher d'abord dans les connaissances locales spécialisées ;
2. ne jamais inventer un cours lorsqu'aucune fiche pertinente n'est trouvée ;
3. utiliser Wikipédia/Wikidata uniquement en dernier recours et en signalant qu'il s'agit d'une source encyclopédique externe ;
4. retourner « Aucun résultat pertinent » lorsqu'aucune source suffisamment pertinente n'est disponible ;
5. conserver le genre Roman/Théâtre/Poésie explicitement demandé par l'élève ;
6. personnaliser les recherches argumentatives avec la graine complète de l'utilisateur, sans les mettre en cache sous un bucket partagé.

## Tests ajoutés

Le script `scripts/audit-course-search.ts` vérifie :

- mathématiques : Pythagore ;
- histoire : Guerre froide ;
- SVT : photosynthèse ;
- physique-chimie : oxydation ;
- français : conjugaison ;
- philosophie : Autrui, Liberté, Religion ;
- français/littérature : Roman, Théâtre, Poésie ;
- différenciation entre deux utilisateurs ;
- rotation lors d'une nouvelle recherche ;
- absence de mélange Roman/Théâtre/Poésie.

## Test de charge

Le script existant `scripts/load-test-search-course.ts` accepte déjà des charges arbitraires via `LOAD_SEARCH_LOADS`, par exemple `1000000`. Il faut distinguer « un million d'utilisateurs inscrits » de « un million de requêtes simultanées » : ce dernier cas exige une infrastructure distribuée et ne peut pas être certifié par un simple test local.
