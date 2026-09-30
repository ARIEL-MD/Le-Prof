# Le Prof V36 — Architecture de traduction

## Intégration

Le module « Pose ton devoir ou exercice (toutes matières) » dispose maintenant de trois voies :

1. **Traduction locale** : moteur déterministe intégré, sans IA et sans API externe, avec lexique pédagogique Français / Anglais / Allemand / Espagnol.
2. **Détection de langue locale** : choix « Auto » ou langue imposée.
3. **Google Traduction externe** : bouton volontaire qui ouvre Google Traduction dans un nouvel onglet avec le texte et les langues préremplis. Le Prof n'appelle aucune API Google.

## Limite volontaire

La traduction locale ne prétend pas être un traducteur universel : elle couvre les expressions et consignes scolaires présentes dans son lexique. Pour une phrase libre ou une langue non couverte, l'utilisateur peut utiliser le bouton Google Traduction.

## Garantie d'architecture

- Aucun SDK OpenAI / Gemini / Claude / Mistral / DeepL n'a été ajouté.
- Aucune API d'IA n'est utilisée pour la traduction.
- Aucun appel Google Cloud Translation API n'est effectué.
- Le bouton Google utilise uniquement une URL publique du site Google Traduction.
