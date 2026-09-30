# LE PROF — Mise à niveau du moteur Maths avec le cours MPSI fourni

## Ce qui a été ajouté

- Index local de recherche construit à partir du PDF de mathématiques MPSI fourni par l'utilisateur.
- 31 chapitres de référence couvrant notamment : complexes, fonctions usuelles, équations différentielles, géométrie, coniques, combinatoire, arithmétique, espaces vectoriels, polynômes, fractions rationnelles, suites, dérivation, intégration, développements limités, matrices, déterminants, produit scalaire, fonctions de plusieurs variables et calcul intégral.
- Recherche multi-termes avec normalisation des accents et synonymes mathématiques.
- Les résultats de recherche Maths peuvent maintenant remonter plusieurs pages pertinentes du cours local au lieu d'une simple fiche générique.
- Le contexte de cours est également injecté dans le moteur de résolution lorsqu'il est pertinent.

## Robustesse du calcul

Ajout d'un niveau d'algèbre symbolique local supplémentaire :

- résolution d'équations polynomiales jusqu'au degré 4 ;
- racines réelles et complexes calculées numériquement pour les degrés supérieurs à 2 ;
- inéquations polynomiales jusqu'au degré 4 avec étude des intervalles ;
- dérivation symbolique générale lorsque les solveurs spécialisés ne reconnaissent pas directement la forme ;
- calcul/simplification d'expressions mathématiques générales avec vérification d'exécution ;
- aucun résultat générique ou inventé n'est accepté si aucun calcul réel n'a réussi.

## Validation effectuée

- Transpilation syntaxique des nouveaux fichiers TypeScript : OK.
- Tests dédiés ajoutés pour la recherche MPSI, matrices/déterminants, équation polynomiale de degré 3 et inéquation polynomiale.

## Limitation de validation

L'environnement d'exécution actuel ne possède pas les dépendances npm installées. `npm ci` a expiré pendant l'installation. La suite runtime complète et le build Vite ne sont donc pas déclarés comme exécutés ici.
