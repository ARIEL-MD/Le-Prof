# Le Prof V33 — rapport d'implémentation

## Ajouts
- registre multipays de routage scolaire ;
- détection explicite du pays ;
- mode pays strict : un pays explicitement demandé hors Côte d'Ivoire bloque le fallback vers le référentiel ivoirien ;
- détection de l'intention scolaire (définition, date, cause, conséquence, formule, théorème, cours, résumé, exercice, etc.) ;
- registre transversal de matières ;
- métadonnées de provenance pays/autorité dans `CourseSearchResult` ;
- documentation de la politique multipays ;
- tests unitaires de routage.

## Vérification
Les trois nouveaux fichiers TypeScript de routage ont été vérifiés avec TypeScript en cible ES2022 et ne présentent pas d'erreur dans cette vérification ciblée.

La suite complète de tests n'a pas pu être exécutée dans l'environnement de travail car les dépendances npm (`node_modules`, notamment `tsx`) ne sont pas présentes et l'installation hors ligne n'est pas disponible. Le code existant n'a pas été considéré comme « testé » sur cette base.

## Référentiel ivoirien
La Côte d'Ivoire reste prioritaire. Le MENAET indique que les programmes éducatifs ivoiriens évoluent et publie les programmes ainsi que des supports didactiques ; une circulaire officielle existe notamment pour les programmes en vigueur et le ministère publie des supports pour 2026-2027.
