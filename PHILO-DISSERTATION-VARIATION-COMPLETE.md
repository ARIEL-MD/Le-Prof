# Philosophie — variation rédactionnelle multi-utilisateurs

## Règle
Pour un même sujet philosophique, le moteur conserve le même raisonnement pédagogique : problématique, axes, logique dialectique, références pertinentes et synthèse méthodologique. La rédaction varie selon `userSeed` ou `variantIndex`.

## Variation
- introduction : approche définition / constat / citation sélectionnée par seed ;
- connecteurs logiques : palettes différentes ;
- formulations des arguments : variantes déterministes ;
- références et illustrations : sélection contrôlée par seed quand une banque de variantes existe ;
- conclusion : trois formulations structurées différentes ;
- plan et ordre des grandes parties : conservés.

## Anti-copie
Le moteur ne doit pas simplement remplacer quelques mots : les blocs rédactionnels principaux disposent de formulations distinctes. Deux utilisateurs avec des seeds différents ne doivent donc pas recevoir une copie textuelle identique tout en conservant le même fond méthodologique.

## Validation
Un test `server/__tests__/philoUserVariation.test.ts` vérifie qu'un même sujet conserve la problématique et les axes mais produit une introduction et une conclusion différentes pour deux utilisateurs.

La compilation TypeScript complète n'a pas pu être exécutée dans l'environnement de travail car plusieurs définitions `@types/*` manquent dans `node_modules`. Le code source et le test sont inclus pour validation après `npm install` propre.
