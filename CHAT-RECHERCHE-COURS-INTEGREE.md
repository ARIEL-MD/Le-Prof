# Recherche de cours intégrée au chat

La recherche de cours et de notions est désormais déclenchée directement depuis la barre de conversation.

- Une demande explicite de cours/notion/définition/date/auteur/causes/conséquences, etc. appelle `/api/search-course`.
- Le résultat est affiché comme un tour assistant dans le fil de discussion.
- Aucun nom de site, URL ou bouton « Vérifié / Sources utilisées » n'est affiché dans cette carte.
- Les demandes d'exercices continuent vers le moteur de résolution existant.
- Le bouton séparé « Cours / Chercher un cours » est retiré de la barre d'outils.
- Le moteur `/api/search-course` reste local/déterministe selon l'architecture existante.
