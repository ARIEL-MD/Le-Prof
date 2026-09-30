# Intégration dans LE PROF

## 1. Copier
Place `mathsTleAKnowledgeBase.ts` dans ton dossier de connaissances, par exemple:
`src/knowledge/mathsTleAKnowledgeBase.ts`

## 2. Priorité de résolution
Dans `homeworkCorrectionFallback.ts` et/ou `aiOrchestrator.ts` :

1. Détecter qu'il s'agit de Maths Tle A.
2. Appeler `findMathsChapters(enonce)`.
3. Construire le contexte avec `buildMathsContext(enonce)`.
4. Envoyer ce contexte au solveur local.
5. Vérifier le résultat avec un solveur/calculateur.
6. Seulement si le moteur local ne sait pas traiter le cas, appeler l'API comme secours.

## 3. Règle essentielle
Ne pas faire:
`exercice -> API -> réponse`

Faire:
`exercice -> détection -> Knowledge Base Tle A -> méthode/formules -> solveur -> vérification -> réponse`

## 4. Photo
Pour une photo:
`photo -> OCR/vision -> énoncé propre -> même pipeline Maths Tle A`

## 5. PDF source
Le PDF complet doit rester disponible dans un dossier local de données, par exemple:
`data/courses/maths-tle-a.pdf`

La Knowledge Base contient la structure pédagogique; le PDF reste la source détaillée.
