# Le Prof — Correctif moteur de dissertation philosophique V59

## Problèmes corrigés

1. **Désalignement titre ↔ arguments**
   - Les variantes n'étaient plus découpées arbitrairement en « 3 premiers arguments = Axe I / 3 suivants = Axe II ».
   - Les arguments sont maintenant classés selon leur orientation (`thèse`, `antithèse`, `synthèse`) à partir de leur catégorie puis de leur contenu.
   - Lorsqu'une relation philosophique possède déjà deux axes définis, les variantes sont alignées sur les titres réels de ces axes.

2. **Transition incohérente après variation**
   - Une transition préenregistrée pouvait rester liée à un ancien ordre d'axes alors que les arguments avaient changé.
   - Avec une variante utilisateur, la transition est désormais construite à partir des axes effectivement sélectionnés.

3. **Conclusion trop générique**
   - La conclusion n'utilise plus systématiquement trois phrases interchangeables.
   - Pour les sujets sur l'utilité de la philosophie, elle distingue explicitement l'utilité pratique immédiate de l'utilité critique, réflexive et éthique.
   - Pour les autres sujets, elle synthétise les deux axes effectivement générés avant de répondre au rapport entre les notions du sujet.

4. **Répétition automatique « Si..., alors... »**
   - Le validateur dispose maintenant de plusieurs formulations d'analyse du lien avec le sujet.
   - Les six sous-parties ne reçoivent plus systématiquement la même structure causale.

5. **Validateur trop permissif**
   - Le contrôle de cohérence vérifie maintenant sémantiquement si le titre d'un axe et ses arguments portent dans la même direction.
   - `isApproved` et les indicateurs de contrôle reflètent désormais réellement les résultats de l'audit au lieu d'être forcés à `true`.

6. **Prompt académique**
   - Le prompt ne force plus implicitement « Axe I = thèse / Axe II = antithèse ».
   - Il impose désormais l'enchaînement : sujet → problème → aspects → arguments → orientation des arguments → titres d'axes compatibles → transition réelle → conclusion précise.

## Régression ajoutée

Un test couvre le sujet : **« La philosophie est-elle utile ? »** avec plusieurs `userSeed` afin de vérifier que la variation ne mélange jamais le titre de l'axe critique avec les arguments défendant l'utilité de la philosophie.

## Vérification

- Vérification TypeScript ciblée : aucune erreur relevée dans `philoEngine.ts` et `philoMethodologyValidator.ts`.
- Exécution complète des tests Node non disponible dans l'environnement de vérification car l'archive ne contient pas les dépendances `node_modules` / `tsx`.

## Batterie V59 ajoutée

Une batterie de régression supplémentaire couvre 30 sujets variés : philosophie/utilité, liberté, responsabilité, travail, bonheur, mythe, vérité, science, technique, art, justice, État, conscience, langage, culture et autrui. Elle teste également plusieurs graines de variation sur « La philosophie est-elle utile ? » afin de détecter une inversion entre les axes et leurs arguments.

Le fichier de test est `server/__tests__/philoDissertationMultiSubjectsV59.test.ts`.
