import { OfficialIvorianCourse } from '../../types';

export const LYCEE_SVT_IMMUNOLOGIE_GENETIQUE_COURSES: OfficialIvorianCourse[] = [
  // =========================================================================
  // 1. SVT TERMINALE D : IMMUNOLOGIE (LE SYSTÈME IMMUNITAIRE)
  // =========================================================================
  {
    id: 'svt-tle-immunologie-defense-organisme',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (Terminale D)',
    level: 'terminale',
    levelLabel: 'Terminale D (Bac Scientifique)',
    serie: 'tle_d',
    serieLabel: 'Terminale D',
    chapter: 'Immunologie : La Défense de l\'Organisme & l\'Intégrité du Soi',
    lessonTitle: 'Soi et non-soi, réponses immunitaires humorale et cellulaire, et infection par le VIH',
    objectifs: [
      'Définir les notions de Soi, Non-Soi, antigène, anticorps et complexe majeur d\'histocompatibilité (CMH / HLA)',
      'Décrire les étapes de la réaction inflammatoire aiguë et de la phagocytose (immunité innée)',
      'Expliquer le déroulement de la réponse immunitaire adaptative à médiation humorale (RIMH : LB, sélection clonale, plasmocytes, anticorps circulants, neutralisation)',
      'Expliquer le déroulement de la réponse immunitaire adaptative à médiation cellulaire (RIMC : LT8, CPA, LT cytotoxiques, baisers de la mort / apoptose)',
      'Analyser le rôle pivot des lymphocytes T4 (chefs d\'orchestre via l\'interleukine 2) et le mécanisme d\'infection et de destruction par le VIH menant au SIDA'
    ],
    fullCourseContent: `I. LE SOI BIOLOGIQUE ET LE NON-SOI :
1. Le Soi biologique :
Le soi est défini par l'ensemble des molécules résultant de l'expression du génome d'un individu. À la surface de toutes les cellules nucléées se trouvent des glycoprotéines membranaires d'identité uniques : les molécules du Complexe Majeur d'Histocompatibilité (CMH ou HLA chez l'homme : CMH de classe I sur toutes les cellules nucléées, CMH de classe II sur les cellules présentatrices d'antigènes).
2. Le Non-Soi et l'antigène :
Toute substance étrangère (bactérie, virus, parasite, greffon hétérologue ou toxine) ou toute modification anormale du soi (cellule cancéreuse) reconnue par le système immunitaire et déclenchant une réaction de défense. L'antigène porte des motifs moléculaires spécifiques appelés épitopes ou déterminants antigéniques.

II. LES DEUX LIGNES DE DÉFENSE IMMUNITAIRE :
1. L'immunité innée (non spécifique, immédiate) :
- Barrières naturelles : peau et muqueuses.
- Réaction inflammatoire aiguë : vasodilatation, afflux de sang (rougeur, chaleur, gonflement, douleur).
- Phagocytose (assurée par granulocytes, macrophages et cellules dendritiques) en 4 étapes : Adhésion / Reconnaissance -> Ingestion (phagosome) -> Digestion enzymatique (lysosomes) -> Rejet des déchets (exocytose).

2. L'immunité adaptative (spécifique, avec mémoire) :
a) Réponse immunitaire à médiation humorale (RIMH) :
- Acteurs : Lymphocytes B (LB) équipés d'anticorps membranaires (BCR).
- Déroulement :
  * Sélection clonale : fixation de l'antigène libre sur le BCR spécifique.
  * Prolifération clonale et différenciation (stimulées par l'interleukine sécrétée par les LT4 helpers) : formation de LB mémoires et de plasmocytes.
  * Phase effectrice : sécrétion massive d'anticorps circulants (immunoglobulines). Les anticorps se lient spécifiquement aux antigènes pour former des complexes immuns, neutralisant les toxines et favorisant la phagocytose par opsonisation.
b) Réponse immunitaire à médiation cellulaire (RIMC) :
- Acteurs : Lymphocytes T8 (LT8) et Lymphocytes T cytotoxiques (LTc).
- Déroulement : Reconnaissance du complexe CMH I - peptide antigénique présenté par une cellule cible anormale (cellule infectée par un virus ou cellule tumorale).
- Sous l'effet de l'interleukine 2 des LT4, prolifération et différenciation en LTc. Les LTc libèrent la perforine et des granzymes provoquant la lyse et la mort cellulaire par apoptose de la cellule cible ("baiser de la mort").

III. LE RÔLE PIVOT DES LYMPHOCYTES T4 ET LE VIH :
1. Les LT4 : chefs d'orchestre de l'immunité :
Les LT4 reconnaissent l'antigène présenté sur le CMH II des cellules présentatrices d'antigène (CPA). Activés, ils se multiplient et sécrètent des cytokines (notamment l'interleukine 2 / IL-2), indispensables à la fois pour activer les LB (RIMH) et les LT8 (RIMC).
2. L'infection par le VIH (Virus de l'Immunodéficience Humaine) :
- Le VIH est un rétrovirus dont la glycoprotéine de surface gp120 se lie spécifiquement au récepteur CD4 des LT4.
- Le virus intègre son ARN transcrit en ADN dans le génome du LT4 et détruit progressivement la population de LT4.
- Lorsque le taux de LT4 descend en dessous de 200 cellules/mm³ de sang, l'organisme ne peut plus déclencher ni RIMH ni RIMC efficaces : c'est le stade SIDA déclaré (Syndrome d'Immunodéficience Acquise), caractérisé par des maladies opportunistes mortelles (tuberculose, sarcome de Kaposi, candidoses).`,
    definitions: [
      { term: 'CMH (Complexe Majeur d\'Histocompatibilité)', definition: 'Ensemble de protéines membranaires codées génétiquement, définissant la signature biologique propre à chaque individu.' },
      { term: 'Antigène', definition: 'Molécule ou micro-organisme reconnu comme étranger par le système immunitaire et capable de susciter une réponse immunitaire spécifique.' },
      { term: 'Anticorps', definition: 'Protéine sécrétée par les plasmocytes (dérivés des LB), capable de se lier spécifiquement à un antigène précis pour former un complexe immun.' },
      { term: 'Complexe immun', definition: 'Édifice moléculaire résultant de la liaison spécifique d\'anticorps circulants avec leurs antigènes cibles.' }
    ],
    propertiesAndRules: [
      { name: 'Spécificité antigène-anticorps', statement: 'Un anticorps ne reconnaît qu\'un seul épitope spécifique en raison de la complémentarité spatiale stricte de ses sites variables de fixation (paratope).' },
      { name: 'Double reconnaissance des lymphocytes T', statement: 'Un lymphocyte T ne reconnaît un antigène que si celui-ci lui est présenté associé aux molécules du CMH de l\'organisme par une cellule présentatrice.' }
    ],
    formulas: [
      { name: 'Équilibre de formation du complexe immun', formula: 'Antigène (Ag) + Anticorps (Ac) ⇄ [Ag - Ac] (Complexe immun précipité)', explanation: 'Inactivation du pouvoir pathogène et facilitation de la phagocytose par opsonisation.' }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier le type de réponse immunitaire dans un exercice de Bac',
        procedure: '1. Repérer le pathogène ou l\'anomalie : s\'il s\'agit d\'une bactérie extracellulaire ou d\'une toxine (tétanique, diphtérique), c\'est la RIMH (anticorps, LB). S\'il s\'agit d\'une cellule infectée par un virus intracellulaire, d\'un greffon ou d\'une cellule cancéreuse, c\'est la RIMC (LT8, LTc). 2. Vérifier les expériences de transfert de sérum (humorale) ou de cellules spléniques (cellulaire).',
        tip: 'Si le sérum transféré protège l\'animal receveur, la médiation est humorale. Si seules les cellules protègent, la médiation est cellulaire.'
      },
      {
        stepNumber: 2,
        title: 'Expliquer l\'effondrement immunitaire lié au VIH',
        procedure: 'Montrer la destruction ciblée des LT4 (porteurs de CD4) par le VIH, entraînant la chute d\'interleukine 2, ce qui paralyse à la fois les LB (plus d\'anticorps) et les LT8 (plus de LTc).',
        tip: 'Mentionner la séropositivité (présence d\'anticorps anti-VIH détectables) puis l\'évolution vers le SIDA clinique.'
      }
    ],
    examples: [
      {
        statement: 'Des cobayes A et B sont injectés avec de l\'anatoxine tétanique. Quinze jours plus tard, on prélève le sérum du cobaye A et on l\'injecte à un cobaye C non vacciné. On prélève les lymphocytes du cobaye B et on les injecte à un cobaye D non vacciné. Puis on inocule la toxine tétanique mortelle à C et D. Le cobaye C survit, tandis que le cobaye D meurt. Conclure sur la nature de la réponse immunitaire antitétanique.',
        solution: 'Le cobaye C ayant reçu le sérum survit car le sérum contient des anticorps circulants spécifiques anti-tétaniques sécrétés suite au contact avec l\'anatoxine. En revanche, les lymphocytes seuls n\'ont pas pu empêcher l\'action immédiate de la toxine chez le cobaye D. On conclut rigoureusement que la défense contre la toxine tétanique relève de la Réponse Immunitaire à Médiation Humorale (RIMH).'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi qualifie-t-on les lymphocytes T4 de "chefs d\'orchestre" du système immunitaire ?',
        correction: 'Les LT4 sont qualifiés de chefs d\'orchestre car, après activation par les cellules présentatrices d\'antigènes (CPA), ils sécrètent de l\'interleukine (notamment l\'IL-2), une cytokine indispensable pour stimuler la multiplication et la différenciation des lymphocytes B en plasmocytes producteurs d\'anticorps (RIMH) ET des lymphocytes T8 en lymphocytes cytotoxiques destructeurs (RIMC). Sans LT4, l\'ensemble de l\'immunité adaptative est paralysé.'
      }
    ],
    examTraps: [
      'Confondre séropositif et malade du SIDA : un individu séropositif possède des anticorps anti-VIH dans son sang mais peut rester asymptomatique pendant des années avant d\'atteindre le stade SIDA déclaré.',
      'Croire que les anticorps détruisent directement les bactéries : les anticorps neutralisent et agglutinent les antigènes, mais c\'est la phagocytose ou le système du complément qui détruit le microbe.',
      'Oublier que les lymphocytes T ne reconnaissent jamais un antigène libre : ils exigent une cellule présentatrice (CPA) avec le CMH.'
    ],
    quickMemo: 'Immunologie : RIMH (LB -> plasmocytes -> anticorps circulants contre toxines et bactéries libres). RIMC (LT8 -> LTc -> lyse des cellules infectées et cancéreuses). LT4 = pivot central via IL-2. VIH détruit les LT4, conduisant au SIDA.',
    keywords: ['Immunologie', 'Soi', 'Non-soi', 'CMH', 'Anticorps', 'Lymphocytes B', 'Lymphocytes T4', 'Lymphocytes T8', 'VIH', 'SIDA', 'Phagocytose']
  },

  // =========================================================================
  // 2. SVT TERMINALE D : GÉNÉTIQUE HUMAINE & TRANSMISSION D'ANOMALIES
  // =========================================================================
  {
    id: 'svt-tle-genetique-humaine-pedigree',
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre (Terminale D)',
    level: 'terminale',
    levelLabel: 'Terminale D (Bac Scientifique)',
    serie: 'tle_d',
    serieLabel: 'Terminale D',
    chapter: 'Génétique Humaine : Analyse des Arbres Généalogiques & Hérédité',
    lessonTitle: 'Transmission des allèles morbides, dominance/récessivité, autosome et chromosomes sexuels',
    objectifs: [
      'Lire et interpréter les symboles conventionnels d\'un arbre généalogique (pédigrée)',
      'Déterminer si l\'allèle responsable d\'une maladie génétique est dominant ou récessif avec rigueur argumentative',
      'Déterminer la localisation chromosomique du gène : autosomique ou liée au sexe (gonosomique sur le chromosome X)',
      'Établir les génotypes certains et probables des membres de la famille',
      'Calculer la probabilité pour un couple d\'avoir un enfant atteint d\'une maladie génétique (drépanocytose, daltonisme, hémophilie)'
    ],
    fullCourseContent: `I. CONVENTIONS D'ANALYSE D'UN ARBRE GÉNÉALOGIQUE :
- Carré = Homme, Rond = Femme.
- Symbole noir / hachuré = Individu atteint du phénotype morbide.
- Symbole blanc = Individu sain.
- Numérotation : Chiffres romains (I, II, III) pour les générations, chiffres arabes (1, 2, 3...) pour les individus de gauche à droite.

II. ÉTAPE 1 : DÉTERMINATION DE LA RELATION DE DOMINANCE / RÉCESSIVITÉ :
1. Règle pour prouver qu'un allèle est RÉCESSIF :
Si deux parents sains (phénotype normal) ont au moins un enfant malade, alors l'allèle responsable de la maladie est obligatoirement RÉCESSIF.
Justification : Les parents possèdent l'allèle responsable de la maladie mais ne l'expriment pas dans leur phénotype ; ils sont donc hétérozygotes (porteurs sains). Notations : Allèle normal N (dominant), allèle morbide m (récessif).
2. Règle pour prouver qu'un allèle est DOMINANT :
Chaque enfant malade a au moins un de ses deux parents malade. La maladie se transmet sans saut de génération. Deux parents atteints peuvent avoir un enfant sain (s'ils sont tous deux hétérozygotes).

III. ÉTAPE 2 : DÉTERMINATION DE LA LOCALISATION DU GÈNE (AUTOSOME OU CHROMOSOME SEXUEL) :
Hypothèse 1 : Le gène est porté par la partie spécifique du chromosome Y (hérédo-paternelle).
- Règle de rejet : Si une femme est malade, ou si un père malade a une fille saine ou un fils sain, l'hypothèse est immédiatement rejetée (la transmission ne touche pas exclusivement et sans exception tous les garçons issus d'un père atteint).

Hypothèse 2 : Le gène est récessif et porté par la partie spécifique du chromosome X (X_m).
- Règle de rejet : Toute fille malade (X_m // X_m) doit impérativement avoir un père malade (X_m // Y) car elle reçoit nécessairement un X de son père. De même, une mère malade (X_m // X_m) doit obligatoirement avoir tous ses fils malades (X_m // Y). Si ce n'est pas le cas, l'hypothèse est rejetée et le gène est AUTOSOMIQUE.
- Confirmation : La maladie touche majoritairement les garçons, car ils n'ont qu'un seul chromosome X (hémizygotie) et expriment d'emblée l'allèle récessif.

Hypothèse 3 : Le gène est porté par un autosome (chromosome non sexuel).
- Les hommes et les femmes sont touchés dans des proportions équivalentes.

IV. EXEMPLES CLASSIQUES AU PROGRAMME IVOIRIEN :
1. La drépanocytose (Anémie falciforme) :
Maladie autosomique récessive due à la mutation du gène de l'hémoglobine (HbS au lieu de HbA).
- Individu sain non porteur : HbA // HbA (100% hématies normales).
- Porteur sain (trait drépanocytaire, résistant au paludisme) : HbA // HbS.
- Malade atteint de drépanocytose : HbS // HbS (crises vaso-occlusives, hématies en faucilles).
2. Le daltonisme et l'hémophilie :
Maladies gonosomiques récessives liées au chromosome X. Une femme n'est malade que si elle est homozygote (X_d // X_d), tandis qu'un homme est malade dès qu'il porte X_d // Y.`,
    definitions: [
      { term: 'Allèle morbide', definition: 'Version mutée d\'un gène responsable de l\'apparition d\'une affection génétique ou maladie héréditaire.' },
      { term: 'Autosome', definition: 'Tout chromosome ne participant pas à la détermination génétique du sexe (les paires 1 à 22 chez l\'espèce humaine).' },
      { term: 'Gonosme', definition: 'Chromosome sexuel (X ou Y chez l\'être humain).' },
      { term: 'Hémizygote', definition: 'État d\'un individu mâle portant un seul exemplaire d\'un gène situé sur le chromosome X car le chromosome Y n\'en possède pas d\'équivalent.' }
    ],
    propertiesAndRules: [
      { name: 'Règle canonique de récessivité', statement: 'Deux parents phénotypiquement sains donnant naissance à un enfant malade prouvent formellement que l\'allèle de la tare est récessif.' },
      { name: 'Règle du père d\'une fille malade liée à X', statement: 'Si une maladie est récessive liée à X, toute fille atteinte a obligatoirement un père atteint ; si son père est sain, la tare est obligatoirement autosomique.' }
    ],
    formulas: [
      { name: 'Échiquier de croisement génétique', formula: 'P(enfant atteint) = P(père transmet m) \\times P(mère transmet m)', explanation: 'Utiliser un tableau de croisement des gamètes pour déterminer les ratios phénotypiques 1/4, 1/2, 3/4.' }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer la récessivité ou dominance',
        procedure: 'Chercher dans l\'arbre un couple sain (ex: II.3 et II.4) ayant un enfant atteint (ex: III.2). Écrire la phrase type officielle : « Les parents II.3 et II.4 sont sains et ont un enfant III.2 malade. Ils possèdent donc l\'allèle morbide sans l\'exprimer. Donc l\'allèle responsable de la maladie est récessif ». Noter : sain = N > malade = m.',
        tip: 'Cette justification rapporte systématiquement la totalité des points au Baccalauréat.'
      },
      {
        stepNumber: 2,
        title: 'Discuter la localisation chromosomique',
        procedure: '1. Éliminer Y : la maladie touche-t-elle des femmes ? Si oui, gène non porté par Y. 2. Tester l\'hypothèse liée à X récessif : trouver une fille atteinte (m//m). Son père est-il sain (N//Y) ? Si oui, elle aurait dû hériter du X_N de son père et être saine. Contradiction ! Donc le gène n\'est pas sur X. Conclusion : le gène est porté par un autosome.',
        tip: 'Toujours procéder par raisonnement par l\'absurde.'
      }
    ],
    examples: [
      {
        statement: 'Dans une famille, les parents I.1 et I.2 sont sains et ont eu un fils II.1 malade de drépanocytose et une fille II.2 saine. Quelle est la probabilité que la fille II.2 soit porteuse saine (hétérozygote) ?',
        solution: 'Puisque les parents sont sains et ont un fils malade (HbS // HbS), ils sont obligatoirement hétérozygotes (HbA // HbS). L\'échiquier de croisement entre deux hétérozygotes donne : 1/4 [HbA // HbA] sain, 2/4 [HbA // HbS] porteur sain, 1/4 [HbS // HbS] malade. Sachant que la fille II.2 est saine (phénotype normal), nous excluons le quart malade. Parmi les personnes saines possibles (3 parts), il y a 2 parts d\'hétérozygotes. Donc la probabilité qu\'elle soit hétérozygote porteuse saine est de 2/3 (environ 66,7%).'
      }
    ],
    exercises: [
      {
        question: 'Un homme daltonien épouse une femme à vision normale dont le père était daltonien. Quelle est la probabilité pour ce couple d\'avoir un enfant daltonien ? Réalisez l\'échiquier de croisement.',
        correction: 'Le daltonisme est récessif lié au chromosome X (X_d récessif, X_D dominant). Le père est daltonien : génotype (X_d // Y). La femme est de vision normale mais son père daltonien lui a nécessairement transmis son chromosome X_d : elle est donc hétérozygote (X_D // X_d). Les gamètes produits par le père sont 1/2 X_d et 1/2 Y. Les gamètes de la mère sont 1/2 X_D et 1/2 X_d. L\'échiquier donne : 1/4 fille normale vectrice (X_D // X_d), 1/4 fille daltonienne (X_d // X_d), 1/4 garçon sain (X_D // Y), 1/4 garçon daltonien (X_d // Y). La probabilité globale d\'avoir un enfant atteint est donc de 2/4 = 1/2 (50%).'
      }
    ],
    examTraps: [
      'Calculer la probabilité d\'un enfant sain étant porteur en écrivant 1/2 au lieu de 2/3 : quand l\'individu est DE SANG SAIN avéré, on élimine le quart récessif malade du dénominateur !',
      'Confondre autosome et allosome (chromosome sexuel).',
      'Oublier de préciser les allèles dominant et récessif avant de dresser l\'arbre généalogique.'
    ],
    quickMemo: 'Génétique humaine : Parents sains + enfant malade = allèle récessif. Fille malade + père sain = allèle récessif AUTOSOMIQUE. Garçons touchés en priorité = souvent lié à X récessif. Enfant sain d\'un couple d\'hétérozygotes a 2/3 de chance d\'être porteur.',
    keywords: ['Génétique humaine', 'Arbre généalogique', 'Pédigrée', 'Dominance', 'Récessivité', 'Autosomique', 'Chromosome X', 'Drépanocytose', 'Daltonisme']
  }
];
