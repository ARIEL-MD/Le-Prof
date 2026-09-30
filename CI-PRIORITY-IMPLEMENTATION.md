# Implémentation — priorité Côte d'Ivoire

Modifications appliquées au projet :

- `server/curriculumPolicy.ts` : politique centrale des référentiels et matrice cible Côte d'Ivoire.
- `server/academicSearchEngine.ts` : le référentiel par défaut passe de `all` à `ci` ; les autres référentiels restent accessibles sur demande et après la recherche locale dans le flux général.
- `scripts/audit-ci-coverage.ts` : audit quantitatif de la couverture locale par niveau et discipline.
- `server/__tests__/curriculumPolicy.test.ts` : tests de non-régression sur la priorité CI.
- `CI-COVERAGE-ROADMAP.md` : feuille de route d'exhaustivité.
- `README.md` : documentation de la priorité Côte d'Ivoire.

Important : cette modification **ne prétend pas que toutes les matières ivoiriennes sont déjà documentées**. Elle met en place le cadre pour les remplir et mesurer leur couverture sans déclarer couvert ce qui ne l'est pas.
