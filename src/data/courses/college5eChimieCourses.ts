import { OfficialIvorianCourse } from '../../types';

export const COLLEGE_5E_CHIMIE_COURSES: OfficialIvorianCourse[] = [
  // ========================================================
  // 5ÈME - CHIMIE : LEÇON 1 - LES MÉLANGES ET LEURS SÉPARATIONS
  // ========================================================
  {
    id: 'pc-5e-melanges-homogenes-heterogenes-separations',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Mélanges et Corps Purs',
    lessonTitle: 'Les Mélanges : Mélanges homogènes et hétérogènes, dissolution, miscibilité et techniques de séparation',
    objectifs: [
      'Distinguer un mélange homogène (un seul constituant visible à l\'œil nu : eau + sel, eau + alcool) d\'un mélange hétérogène (au moins deux constituants visibles : eau + sable, eau + huile)',
      'Définir les notions de soluté (corps dissous), de solvant (liquide qui dissout) et de solution (mélange homogène obtenu)',
      'Distinguer les corps solubles et insolubles, ainsi que les liquides miscibles et non-miscibles',
      'Caractériser une suspension (dispersion d\'un solide dans un liquide) et une émulsion (dispersion de gouttelettes d\'un liquide dans un autre)',
      'Maîtriser les techniques de séparation : décantation et filtration pour les mélanges hétérogènes, vaporisation et distillation pour les mélanges homogènes'
    ],
    fullCourseContent: `1. Mélanges Homogènes :
- Définition : Un mélange homogène est un mélange dans lequel on ne peut pas distinguer les différents constituants à l'œil nu après agitation.
- Cas solide-liquide (Dissolution) :
  * Mélange de sel (ou sucre) et d'eau : le sel disparaît dans l'eau. On dit que le sel se dissout : il est SOLUBLE dans l'eau.
  * Vocabulaire fondamental :
    - Le Soluté : Corps solide, liquide ou gazeux dissous (ex : le sel, le sucre).
    - Le Solvant : Liquide en plus grande quantité qui dissout le soluté (ex : l'eau).
    - La Solution : Mélange homogène résultant de la dissolution d'un soluté dans un solvant (solution aqueuse si le solvant est l'eau).
    - Solution saturée : Solution dans laquelle le solvant ne peut plus dissoudre de soluté supplémentaire (le soluté en excès reste visible au fond).
- Cas liquide-liquide (Miscibilité) :
  * Mélange d'eau et d'alcool (ou sirop) : les deux liquides se mélangent parfaitement en toutes proportions. On dit qu'ils sont MISCIBLES.

2. Mélanges Hétérogènes :
- Définition : Un mélange hétérogène est un mélange dont on peut distinguer au moins deux constituants distincts à l'œil nu.
- Cas solide-liquide (Suspension) :
  * Mélange d'eau et de sable (ou farine de maïs, terre) : le sable ne se dissout pas, il est INSOLUBLE dans l'eau.
  * Lors de l'agitation, les grains dispersés forment une SUSPENSION avant de retomber au fond.
- Cas liquide-liquide (Émulsion) :
  * Mélange d'eau et d'huile : l'eau et l'huile ne se mélangent pas, elles sont NON-MISCIBLES.
  * Après forte agitation, l'huile forme de minuscules gouttelettes en suspension dans l'eau : c'est une ÉMULSION. Après repos, l'huile moins dense surnage sur l'eau.

3. Techniques de séparation des mélanges :
- Pour les mélanges HÉTÉROGÈNES :
  * La Décantation : Consiste à laisser reposer le mélange. Sous l'effet de la gravité, les particules solides lourdes se déposent au fond du récipient (ou l'huile surnage à la surface).
  * La Filtration : Consiste à verser le mélange à travers un papier filtre posé sur un entonnoir. Le filtre retient les résidus solides. Le liquide limpide obtenu s'appelle le FILTRAT.
- Pour les mélanges HOMOGÈNES :
  * La Vaporisation (Évaporation / Ébullition) : Séparation d'un solide dissous dans un liquide (ex : eau salée). En portant à ébullition, l'eau s'évapore sous forme de vapeur et les cristaux de sel pur restent au fond du récipient (principe des marais salants).
  * La Distillation simple : Séparation de deux liquides miscibles (ex : eau et alcool) ou purification d'eau. Le mélange est chauffé dans un ballon : le constituant le plus volatil s'évapore en premier, ses vapeurs passent dans un réfrigérant à eau où elles se condensent. Le liquide pur condensé recueilli s'appelle le DISTILLAT.`,
    definitions: [
      {
        term: 'Mélange homogène',
        definition: 'Mélange dont on ne distingue pas les différents constituants à l\'œil nu.'
      },
      {
        term: 'Mélange hétérogène',
        definition: 'Mélange dont on distingue au moins deux constituants à l\'œil nu.'
      },
      {
        term: 'Filtrat',
        definition: 'Liquide clair et limpide recueilli après avoir traversé un filtre.'
      },
      {
        term: 'Distillat',
        definition: 'Liquide pur recueilli par condensation des vapeurs lors d\'une distillation.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Principe de séparation hétérogène',
        statement: 'La décantation suivie d\'une filtration permet de séparer les constituants solides d\'un mélange hétérogène.'
      },
      {
        name: 'Principe de séparation homogène',
        statement: 'La vaporisation permet d\'isoler le soluté solide ; la distillation permet d\'isoler et recueillir le liquide le plus volatil.'
      }
    ],
    formulas: [
      {
        name: 'Conservation de la masse lors de la dissolution',
        formula: 'm_{\\text{solution}} = m_{\\text{solvant}} + m_{\\text{soluté}}',
        explanation: 'Lors de la dissolution, la masse totale se conserve rigoureusement (ex: 100 g d\'eau + 10 g de sel = 110 g d\'eau salée).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Rendre potable une eau boueuse de marigot au village',
        procedure: '1. Laisser reposer l\'eau dans un grand récipient pour permettre la décantation des boues lourdes au fond. 2. Transvaser délicatement le liquide surnageant et le filtrer sur un linge propre ou du sable fin (filtration). 3. Faire bouillir l\'eau recueillie (chauffage) pendant plusieurs minutes pour éliminer tous les germes microbiens avant consommation.',
        tip: 'La filtration ne retire que les particules visibles ; seule l\'ébullition détruit les micro-organismes pathogènes.'
      }
    ],
    examples: [
      {
        statement: 'On mélange 200 mL d\'eau et 50 mL d\'alcool. Quel type de mélange obtient-on et comment récupérer l\'alcool ?',
        solution: 'L\'eau et l\'alcool étant miscibles, on obtient un mélange homogène. Pour séparer l\'alcool de l\'eau, on réalise une distillation : l\'alcool s\'évapore à 78 °C, se condense dans le réfrigérant et est recueilli sous forme de distillat.'
      }
    ],
    exercises: [
      {
        question: 'Distingue une émulsion d\'une suspension en donnant un exemple pour chacune.',
        correction: 'Une émulsion est la dispersion de fines gouttelettes d\'un liquide dans un autre liquide non miscible (ex : eau + huile après agitation). Une suspension est la dispersion de particules solides insolubles dans un liquide (ex : eau + sable ou eau + farine de maïs après agitation).'
      }
    ],
    evaluationSituation: {
      context: 'Pendant la saison sèche dans un village près de Bongouanou, les puits sont à sec. Les habitants doivent puiser l\'eau trouble d\'une rivière. Ton ami propose de boire directement cette eau décantée.',
      instructions: [
        '1. Qualifie la nature du mélange que constitue l\'eau de rivière trouble.',
        '2. Explique pourquoi la seule décantation ne suffit pas à rendre l\'eau propre et saine.',
        '3. Propose un protocole complet en trois étapes pour assainir cette eau pour la boisson.'
      ],
      solutionGuide: '1. L\'eau de rivière trouble est un mélange hétérogène. 2. La décantation ne retient que les boues les plus lourdes ; des matières solides fines restent en suspension et l\'eau contient des microbes invisibles nocifs. 3. Protocole : 1° Décantation pour déposer les sables ; 2° Filtration sur filtre ou tissu serré pour retenir les particules fines ; 3° Chauffage à ébullition (ou chloration) pour stériliser et tuer les micro-organismes.'
    },
    examTraps: [
      'Confondre soluble (capacité d\'un solide à se dissoudre dans un liquide) et miscible (capacité de deux liquides à se mélanger).',
      'Croire que la filtration d\'eau salée permet d\'isoler le sel (le sel dissous traverse les pores du filtre car la solution est homogène).',
      'Confondre soluté (corps dissous) et solvant (liquide qui dissout).'
    ],
    quickMemo: 'Homogène = 1 seul constituant visible (eau+sel, eau+alcool) | Hétérogène = plusieurs constituants visibles (eau+huile, eau+sable) | Hétérogène -> Décantation + Filtration | Homogène -> Distillation + Vaporisation.',
    keywords: ['mélange homogène', 'mélange hétérogène', 'soluté', 'solvant', 'solution', 'miscible', 'suspension', 'émulsion', 'décantation', 'filtration', 'distillation', '5e']
  },

  // ========================================================
  // 5ÈME - CHIMIE : LEÇON 2 - ATOMES, MOLÉCULES ET CORPS PURS
  // ========================================================
  {
    id: 'pc-5e-atomes-molecules-corps-purs',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Structure de la Matière',
    lessonTitle: 'Atomes, molécules, modèles compacts, corps purs simples et composés',
    objectifs: [
      'Définir l\'atome comme le constituant élémentaire de la matière, invisible à l\'œil nu (taille de l\'ordre de 0,1 nm = 10^-10 m)',
      'Identifier les symboles chimiques des atomes usuels : Carbone (C), Hydrogène (H), Oxygène (O), Azote (N), Soufre (S), Chlore (Cl), Fer (Fe), Cuivre (Cu), Calcium (Ca), Aluminium (Al), Sodium (Na), Plomb (Pb)',
      'Définir la molécule comme un assemblage ordonné et stable de deux ou plusieurs atomes liés',
      'Écrire et décoder les formules chimiques et modèles moléculaires compacts (H2, O2, N2, H2O, CO2, SO2, CO, CH4, HCl)',
      'Distinguer un corps pur simple (molécules formées d\'atomes identiques : O2, N2, H2, Fe) d\'un corps pur composé (molécules formées d\'atomes différents : H2O, CO2, SO2, NH3) et d\'un mélange'
    ],
    fullCourseContent: `1. La Notion d\'Atome :
- Historique et nature : Depuis l'Antiquité grecque avec Démocrite, l'atome est pensé comme la plus petite particule de matière.
- Dimensions : L'atome est minuscule, son diamètre est de l'ordre de 0,1 nanomètre : 1 nm = 0,000000001 m = 10^-9 m (soit environ 1 Angström = 10^-10 m). Il est invisible à l'œil nu et même au microscope optique standard.
- Structure simplifiée : Un atome est formé d'un noyau central chargé positivement (contenant les nucléons : protons de charge positive et neutrons électriquement neutres) autour duquel gravitent des électrons chargés négativement.
- Symbole chimique : Représenté par une lettre majuscule (la première lettre du nom), parfois suivie d'une lettre minuscule pour lever l'ambiguïté.
  * Carbone : C
  * Hydrogène : H
  * Oxygène : O
  * Azote : N (du latin Nitrogène)
  * Soufre : S
  * Chlore : Cl
  * Fer : Fe
  * Cuivre : Cu
  * Calcium : Ca
  * Aluminium : Al
  * Sodium : Na (du latin Natrium)
  * Potassium : K (du latin Kalium)
  * Plomb : Pb

2. La Notion de Molécule :
- Définition : Une molécule est un assemblage ordonné, stable et électriquement neutre de deux ou plusieurs atomes fortement liés entre eux.
- Modèles moléculaires (représentation par billes de couleur standardisées) :
  * Atome d'Hydrogène (H) : petite bille blanche.
  * Atome de Carbone (C) : bille noire.
  * Atome d'Oxygène (O) : bille rouge.
  * Atome d'Azote (N) : bille bleue.
  * Atome de Chlore (Cl) : bille verte.
  * Atome de Soufre (S) : bille jaune.
- Formules chimiques des molécules fondamentales :
  * Dihydrogène : H2 (2 atomes H liés)
  * Dioxygène : O2 (2 atomes O liés)
  * Diazote : N2 (2 atomes N liés)
  * Eau : H2O (2 atomes H + 1 atome O)
  * Dioxyde de carbone : CO2 (1 atome C + 2 atomes O)
  * Monoxyde de carbone : CO (1 atome C + 1 atome O)
  * Dioxyde de soufre : SO2 (1 atome S + 2 atomes O)
  * Méthane : CH4 (1 atome C + 4 atomes H)
  * Chlorure d'hydrogène : HCl (1 atome H + 1 atome Cl)
- Atomicité : Nombre total d'atomes contenus dans une molécule.
  Exemple : La molécule de quinine C20H24O2N2 a une atomicité de 20 + 24 + 2 + 2 = 48 atomes.

3. Classification : Corps Purs Simples, Corps Purs Composés et Mélanges :
- Corps Pur : Substance constituée d'une seule espèce chimique (toutes les entités sont identiques).
  * Corps pur simple : Les molécules sont constituées exclusivement d'atomes de même nature.
    Exemples : O2 (dioxygène), N2 (diazote), H2 (dihydrogène), Cl2 (dichlore), Fe (fer), Cu (cuivre), Ar (argon).
  * Corps pur composé : Les molécules sont formées d'au moins deux types d'atomes différents.
    Exemples : H2O (eau), CO2 (dioxyde de carbone), SO2 (dioxyde de soufre), CH4 (méthane), HCl (acide chlorhydrique), NH3 (ammoniac).
- Mélange : Matière composée de plusieurs types de molécules différentes.
  Exemple : L'air atmosphérique est un mélange de diazote (N2 ~ 78%), de dioxygène (O2 ~ 21%) et d'autres gaz rares (CO2, Ar ~ 1%).`,
    definitions: [
      {
        term: 'Atome',
        definition: 'Plus petite particule élémentaire constitutive de toute molécule et de la matière.'
      },
      {
        term: 'Molécule',
        definition: 'Ensemble ordonné d\'atomes unis par des liaisons chimiques.'
      },
      {
        term: 'Corps pur simple',
        definition: 'Corps pur dont les molécules ne sont formées que d\'atomes identiques d\'un seul élément chimique.'
      },
      {
        term: 'Corps pur composé',
        definition: 'Corps pur dont chaque molécule renferme des atomes d\'éléments chimiques différents.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle des symboles chimiques',
        statement: 'Le symbole d\'un élément commence TOUJOURS par une majuscule (C, O, N) et la seconde lettre éventuelle est obligatoirement minuscule (Cl, Fe, Cu).'
      },
      {
        name: 'Distinction Corps pur / Mélange',
        statement: 'Un corps pur a des constantes physiques fixes (T° fusion, T° ébullition précises) ; un mélange bout ou fond sur une plage de température variable.'
      }
    ],
    formulas: [
      {
        name: 'Atomicité d\'une molécule',
        formula: '\\text{Atomicité} = \\sum \\text{indices des atomes}',
        explanation: 'Somme de tous les atomes composant une seule molécule (ex: H2SO4 -> 2 + 1 + 4 = 7 atomes).'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Déterminer la nature d\'un corps chimique',
        procedure: '1. Écrire la formule chimique. 2. Compter les lettres majuscules : s\'il n\'y en a qu\'une seule (ex: O2, Fe, Cl2), c\'est un corps pur simple. 3. S\'il y a au moins deux majuscules différentes (ex: CO2, H2O), c\'est un corps pur composé. 4. Si la substance réunit plusieurs formules différentes (ex: l\'air, le jus d\'orange), c\'est un mélange.',
        tip: 'Attention : CO (monoxyde de carbone : C et O) est un composé ; Co (cobalt) est un corps simple !'
      }
    ],
    examples: [
      {
        statement: 'La molécule de vitamine C a pour formule C6H8O6. Donne la nature de ses atomes et calcule son atomicité.',
        solution: 'Elle contient 6 atomes de Carbone (C), 8 atomes d\'Hydrogène (H) et 6 atomes d\'Oxygène (O). Son atomicité totale est de 6 + 8 + 6 = 20 atomes. C\'est un corps pur composé.'
      }
    ],
    exercises: [
      {
        question: 'Classe les espèces suivantes en corps purs simples et corps purs composés : Cl2, NH3, SO2, N2, H2O, O2.',
        correction: '- Corps purs simples : Cl2, N2, O2 (molécules formées d\'un seul type d\'atomes).\n- Corps purs composés : NH3, SO2, H2O (molécules formées d\'atomes de types différents).'
      }
    ],
    evaluationSituation: {
      context: 'En classe de 5ème au Lycée Moderne de Cocody, les élèves assemblent avec des boules en plastique une molécule comprenant 1 bille bleue (azote) et 2 billes rouges (oxygène).',
      instructions: [
        '1. Donne le nom et la formule chimique de cette molécule.',
        '2. Calcule son atomicité.',
        '3. S\'agit-il d\'un corps pur simple ou d\'un corps pur composé ? Justifie.'
      ],
      solutionGuide: '1. Nom : Dioxyde d\'azote. Formule chimique : NO2. 2. Atomicité : 1 + 2 = 3 atomes. 3. C\'est un corps pur composé car sa molécule est constituée d\'atomes d\'éléments chimiques différents (azote N et oxygène O).'
    },
    examTraps: [
      'Confondre CO (monoxyde de carbone, deux atomes C et O) avec Co (cobalt, un seul atome).',
      'Penser que l\'eau (H2O) est un corps pur simple parce que c\'est un liquide pur (c\'est un corps pur composé car formé d\'hydrogène et d\'oxygène).',
      'Confondre atome (ex: O) et molécule de corps simple (ex: O2).'
    ],
    quickMemo: 'Atome = C, H, O, N, Cl... | Molécule = assemblage d\'atomes (H2O, CO2...) | Simple = 1 seul élément (O2, H2, Fe) | Composé = plusieurs éléments (H2O, CO2, NaCl) | Mélange = plusieurs molécules (Air, sève).',
    keywords: ['atome', 'molécule', 'symbole chimique', 'formule chimique', 'corps pur simple', 'corps pur composé', 'mélange', '5e']
  },

  // ========================================================
  // 5ÈME - CHIMIE : LEÇON 3 - COMBUSTIONS DU CARBONE ET DU SOUFRE
  // ========================================================
  {
    id: 'pc-5e-combustions-carbone-soufre-reactions-chimiques',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Mélanges et Réactions Chimiques',
    lessonTitle: 'Combustions du carbone et du soufre : Expériences, équations-bilans, eau de chaux, permanganate et impact environnemental',
    objectifs: [
      'Définir la combustion comme une réaction chimique exothermique entre un combustible (carbone, soufre, bois) et un comburant (dioxygène O2)',
      'Décrire la combustion complète du carbone : incandescence vive dans O2, formation de dioxyde de carbone (CO2) identifié par le trouble de l\'eau de chaux',
      'Expliquer les dangers de la combustion incomplète du carbone : production de monoxyde de carbone (CO), gaz inodore, incolore, toxique, asphyxiant et mortel',
      'Décrire la combustion du soufre : petite flamme bleue dans l\'air, flamme bleue vive dans O2, formation de dioxyde de soufre (SO2) identifié par la décoloration du permanganate de potassium',
      'Connaître les conséquences environnementales : effet de serre (CO2), pluies acides (SO2 réagissant avec l\'eau atmosphérique pour former H2SO4)',
      'Identifier les pictogrammes de sécurité de dangerosité chimique (inflammable, explosif, toxique, corrosif, nocif environnement)'
    ],
    fullCourseContent: `1. Notion générale de Combustion :
- Une combustion est une transformation chimique au cours de laquelle un corps brûle en consommant du dioxygène tout en dégageant de la chaleur (réaction exothermique) et de la lumière.
- Les trois éléments indispensables (Triangle du feu) :
  * Le Combustible : la matière qui brûle (charbon de bois, soufre, butane, papier).
  * Le Comburant : le gaz qui permet et entretient la combustion (le dioxygène O2 de l'air).
  * L'Énergie d'activation : la source de chaleur initiale (étincelle, flamme d'allumette).

2. Combustion du Carbone :
- Combustion complète dans le dioxygène :
  * Expérience : On porte un morceau de charbon de bois (carbone pur C) à l'incandescence et on le plonge dans un bocal rempli de dioxygène pur.
  * Observation : La combustion est beaucoup plus vive que dans l'air, avec projection d'étincelles éclatantes.
  * Identification du produit : En versant de l'eau de chaux limpide dans le bocal après combustion, celle-ci devient laiteuse et SE TROUBLE.
  * Conclusion : Le gaz formé est le DIOXYDE DE CARBONE (CO2).
  * Équation-bilan : C + O2 -> CO2.
- Combustion incomplète du carbone (Danger mortel) :
  * Se produit lorsque le dioxygène est en quantité insuffisante (pièce fermée, fourneau mal aéré pendant l'harmattan).
  * Il se forme une fumée noire (particules de carbone/suie) et un gaz extrêmement dangereux : le MONOXYDE DE CARBONE (CO).
  * Dangerosité du CO : Gaz incolore, inodore et sans saveur. Une fois inhalé, il se fixe sur l'hémoglobine du sang à la place du dioxygène, provoquant vertiges, céphalées, perte de conscience, asphyxie et mort rapide.
- Impact du CO2 sur l'environnement :
  * Le rejet massif de CO2 (feux de brousse, usines, gaz d'échappement) intensifie l'EFFET DE SERRE, responsable du réchauffement climatique mondial.

3. Combustion du Soufre :
- Expérience :
  * Le soufre (S) est un solide jaune pulvérulent ou en morceaux.
  * À l'air libre : il brûle avec une petite flamme bleue pâle en dégageant une odeur piquante et suffocante.
  * Dans un bocal de dioxygène pur : la combustion devient très vive avec une belle flamme bleue vive et formation d'une légère fumée blanche de trioxyde de soufre (SO3).
- Identification du gaz formé :
  * Le gaz dégagé est soluble dans l'eau.
  * En introduisant quelques gouttes d'une solution violette de PERMANGANATE DE POTASSIUM (KMnO4), celle-ci se DÉCOLORE complètement.
  * Conclusion : Le produit formé est le DIOXYDE DE SOUFRE (SO2).
  * Équation-bilan : S + O2 -> SO2.
- Dangers du SO2 et Pluies Acides :
  * Sur l'Homme : Gaz suffocant, très irritant pour les yeux, le nez, la gorge et les bronches (toux sèche, détresse respiratoire).
  * Sur l'Environnement : Dans l'atmosphère, le SO2 réagit avec l'eau des nuages et le dioxygène pour former de l'ACIDE SULFURIQUE (H2SO4) : cela engendre les PLUIES ACIDES qui détruisent les forêts, dégradent les édifices en pierre et corrodent les toitures en tôle métallique.
- Applications industrielles du SO2 : Fabrication de l'acide sulfurique, désinfection des fûts de vin, blanchiment des pâtes à papier et textiles.

4. Pictogrammes de Sécurité des Réactifs :
- Flamme : Produit inflammable (butane, alcool).
- Tête de mort sur deux tibias : Produit toxique ou mortel même à faible dose (monoxyde de carbone).
- Point d'exclamation : Produit irritant ou nocif pour la peau et les voies respiratoires (dioxyde de soufre).
- Arbre et poisson morts : Produit dangereux pour l'environnement aquatique et terrestre.`,
    definitions: [
      {
        term: 'Combustion',
        definition: 'Réaction chimique d\'oxydation vive entre un combustible et un comburant avec dégagement de chaleur et de lumière.'
      },
      {
        term: 'Comburant',
        definition: 'Substance (le plus souvent le dioxygène O2) indispensable pour entretenir la combustion d\'un combustible.'
      },
      {
        term: 'Monoxyde de carbone (CO)',
        definition: 'Gaz toxique incolore et inodore issu de la combustion incomplète du carbone en manque d\'oxygène.'
      },
      {
        term: 'Pluie acide',
        definition: 'Précipitation rendue acide par la dissolution de gaz polluants industriels comme le dioxyde de soufre (SO2).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Test de caractérisation du CO2',
        statement: 'Le dioxyde de carbone trouble l\'eau de chaux limpide en formant un précipité blanc de carbonate de calcium.'
      },
      {
        name: 'Test de caractérisation du SO2',
        statement: 'Le dioxyde de soufre décolore une solution violette de permanganate de potassium.'
      }
    ],
    formulas: [
      {
        name: 'Combustion complète du carbone',
        formula: '\\text{C} + \\text{O}_2 \\longrightarrow \\text{CO}_2',
        explanation: '1 atome de carbone réagit avec 1 molécule de dioxygène pour donner 1 molécule de dioxyde de carbone.'
      },
      {
        name: 'Combustion du soufre',
        formula: '\\text{S} + \\text{O}_2 \\longrightarrow \\text{SO}_2',
        explanation: 'Le soufre réagit avec le dioxygène pour produire du dioxyde de soufre.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier un gaz incolore inconnu entre H2, CO2 et SO2',
        procedure: '1. Approcher une flamme : si une détonation ("pop") se produit, c\'est du dihydrogène (H2). 2. Injecter un peu d\'eau de chaux limpide : si elle se trouble en blanc, c\'est du dioxyde de carbone (CO2). 3. Injecter une goutte de permanganate de potassium violet : si la teinte violette disparaît avec une odeur piquante de soufre, c\'est du dioxyde de soufre (SO2).',
        tip: 'Toujours manipuler le soufre sous hotte ventilée ou en plein air avec un masque à gaz.'
      }
    ],
    examples: [
      {
        statement: 'Lors d\'une combustion de charbon dans un flacon de dioxygène de volume 1 L, la masse de carbone consommée est de 1,2 g. Écris l\'équation de la réaction et indique le test de reconnaissance du gaz formé.',
        solution: 'Équation-bilan : C + O2 -> CO2.\nLe gaz formé est le dioxyde de carbone. On le reconnaît en versant de l\'eau de chaux limpide dans le flacon : celle-ci se trouble et blanchit immédiatement.'
      }
    ],
    exercises: [
      {
        question: 'Pourquoi les feux de charbon allumés à l\'intérieur des chambres fermées pendant l\'harmattan à Bouna provoquent-ils des intoxications mortelles ?',
        correction: 'Dans une chambre fermée, le dioxygène de l\'air s\'épuise rapidement. La combustion du charbon de bois devient incomplète et engendre du monoxyde de carbone (CO). Ce gaz inodore et invisible asphyxie les personnes endormies sans qu\'elles ne s\'en aperçoivent.'
      }
    ],
    evaluationSituation: {
      context: 'À Bouna, une mère applique une poudre jaune de soufre pour traiter des boutons. Son jeune fils jette par inadvertance un morceau de ce soufre dans le fourneau de cuisine allumé. Une fumée suffocante envahit la pièce et la famille se met à tousser violemment.',
      instructions: [
        '1. Nomme la réaction chimique qui s\'est produite dans le fourneau.',
        '2. Nomme le gaz toxique dégagé et écris son équation-bilan.',
        '3. Quel réactif de laboratoire permet d\'identifier ce gaz ?',
        '4. Quelle consigne d\'urgence doit appliquer la famille ?'
      ],
      solutionGuide: '1. Il s\'agit de la combustion du soufre dans le dioxygène de l\'air. 2. Le gaz produit est le dioxyde de soufre (SO2). Équation : S + O2 -> SO2. 3. Ce gaz décolore la solution violette de permanganate de potassium. 4. Évacuer la pièce, ouvrir immédiatement toutes les portes et fenêtres pour aérer et renouveler l\'air afin de stopper l\'inhalation du gaz suffocant.'
    },
    examTraps: [
      'Confondre dioxyde de carbone (CO2, trouble l\'eau de chaux) et dioxyde de soufre (SO2, décolore le permanganate).',
      'Confondre combustion complète (dioxygène en excès -> CO2) et incomplète (dioxygène insuffisant -> CO mortel).',
      'Oublier le rôle du comburant (O2) dans l\'équation chimique.'
    ],
    quickMemo: 'Carbone + O2 -> CO2 (trouble l\'eau de chaux) | Manque d\'O2 -> CO (inodore, asphyxiant, mortel) | Soufre + O2 -> SO2 (odeur piquante, décolore le permanganate violet, pluies acides).',
    keywords: ['combustion', 'carbone', 'soufre', 'dioxyde de carbone', 'monoxyde de carbone', 'dioxyde de soufre', 'eau de chaux', 'permanganate', 'effet de serre', '5e']
  },

  // ========================================================
  // 5ÈME - CHIMIE : LEÇON 4 - RÉACTIONS CHIMIQUES, ÉQUATIONS & STŒCHIOMÉTRIE
  // ========================================================
  {
    id: 'pc-5e-reactions-chimiques-equations-stoechiometrie',
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '5e',
    levelLabel: '5ème (Cinquième)',
    serie: '5e',
    serieLabel: 'Collège 5ème',
    chapter: 'Mélanges et Réactions Chimiques',
    lessonTitle: 'Réactions chimiques et équations-bilans : Loi de Lavoisier, équilibrage, notion de mole et calculs stœchiométriques',
    objectifs: [
      'Définir une réaction chimique comme une transformation au cours de laquelle des réactifs disparaissent et de nouveaux produits apparaissent',
      'Étudier des réactions types : oxydation lente du fer (rouille 4Fe + 3O2 -> 2Fe2O3), oxydation vive (3Fe + 2O2 -> Fe3O4), sulfuration (Fe + S -> FeS) et attaque d\'acide sur métal (Zn + 2HCl -> ZnCl2 + H2)',
      'Énoncer la loi de Lavoisier : conservation des atomes et conservation de la masse globale (m_réactifs = m_produits)',
      'Équilibrer une équation chimique en utilisant des coefficients stœchiométriques appropriés',
      'Définir la mole (N = 6,02 × 10^23 entités), la masse molaire atomique et moléculaire (M en g/mol), et la quantité de matière n = m / M = V / Vm',
      'Résoudre un problème chimique par la règle de proportionnalité stœchiométrique'
    ],
    fullCourseContent: `1. Généralités sur les Réactions Chimiques :
- Définition : Une réaction chimique est un réarrangement d'atomes au cours duquel des espèces chimiques initiales (les réactifs) sont consommées et de nouvelles espèces chimiques (les produits) se forment.
- Écriture symbolique : Réactifs -> Produits (la flèche signifie "donne").
- Exemples majeurs de réactions étudiées en classe de 5ème :
  * Oxydation lente du fer (formation de la rouille en présence d'air humide) :
    4 Fe + 3 O2 -> 2 Fe2O3 (trioxyde de difer / oxyde ferrique).
  * Oxydation vive du fer (combustion vive dans le dioxygène pur) :
    3 Fe + 2 O2 -> Fe3O4 (oxyde magnétique / tétroxyde de trifer).
  * Action du soufre sur le fer (sulfuration par chauffage) :
    Fe + S -> FeS (sulfure de fer noir).
  * Action de l'acide chlorhydrique sur le zinc :
    Zn + 2 HCl -> ZnCl2 + H2 (dégagement de dihydrogène inflammable et chlorure de zinc).

2. Loi de Conservation de Lavoisier et Équilibrage :
- Loi de Lavoisier (1789) : "Rien ne se perd, rien ne se crée, tout se transforme."
  * Conservation des atomes : Au cours d'une réaction, aucun atome n'est créé ni détruit ; le nombre d'atomes de chaque élément reste strictement égal entre les réactifs et les produits.
  * Conservation de la masse : La masse totale des réactifs disparus est égale à la masse totale des produits formés :
    m1 + m2 + ... (avant) = m\'1 + m\'2 + ... (après).
- Règle d'équilibrage :
  * On ne modifie JAMAIS les formules des molécules (ne jamais toucher aux indices en bas à droite).
  * On place des nombres entiers appelés coefficients stœchiométriques devant les molécules.
  * Exemples :
    2 H2 + O2 -> 2 H2O
    2 Cu + O2 -> 2 CuO
    4 Al + 3 O2 -> 2 Al2O3
    CH4 + 2 O2 -> CO2 + 2 H2O

3. Notions Quantitatives : La Mole et les Masses Molaires :
- La Mole (symbole mol) : Unité de quantité de matière renfermant exactement 6,02 × 10^23 entités élémentaires (Nombre d'Avogadro N_A).
- Masse molaire atomique (M) : Masse d'une mole d'atomes, exprimée en g/mol.
  Exemples : H = 1 g/mol ; C = 12 g/mol ; N = 14 g/mol ; O = 16 g/mol ; S = 32 g/mol ; Fe = 56 g/mol ; Cu = 63,5 g/mol ; Zn = 65 g/mol.
- Masse molaire moléculaire : Somme des masses molaires atomiques des atomes de la molécule.
  Exemples :
  * M(H2O) = 2×1 + 16 = 18 g/mol
  * M(CO2) = 12 + 2×16 = 44 g/mol
  * M(Fe2O3) = 2×56 + 3×16 = 160 g/mol
- Formules de la quantité de matière (n) :
  * n = m / M (m en g, M en g/mol, n en mol).
  * Pour un gaz : n = V / V_m (avec V_m = 22,4 L/mol dans les CNTP).

4. Méthode de Résolution par Règle de Proportion Stœchiométrique :
Soit la réaction équilibrée : a A + b B -> c C + d D.
D'après l'équation, les quantités de matière consommées et formées sont proportionnelles aux coefficients stœchiométriques :
n_A / a = n_B / b = n_C / c = n_D / d.
Méthode en 5 étapes :
1. Écrire et équilibrer l'équation-bilan.
2. Calculer les masses molaires utiles (M).
3. Calculer la quantité de matière n du réactif connu (n = m/M ou n = V/V_m).
4. Utiliser l'égalité des rapports stœchiométriques pour trouver n du produit cherché.
5. Calculer la masse demandée : m = n × M (ou le volume V = n × V_m).`,
    definitions: [
      {
        term: 'Réaction chimique',
        definition: 'Transformation de la matière au cours de laquelle des liaisons se rompent et se reforment, transformant des réactifs en produits.'
      },
      {
        term: 'Mole',
        definition: 'Quantité de matière d\'un système contenant 6,02 × 10^23 entités chimiques élémentaires.'
      },
      {
        term: 'Masse molaire (M)',
        definition: 'Masse d\'une mole d\'atomes ou de molécules, exprimée en grammes par mole (g/mol).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Loi de conservation de la masse',
        statement: 'Dans tout système fermé, la masse globale des corps formés est exactement égale à la masse globale des corps réagissants.'
      },
      {
        name: 'Règle de proportion stœchiométrique',
        statement: 'Pour a A + b B -> c C, le rapport n_A / a = n_B / b = n_C / c est vérifié lorsque les réactifs sont dans les proportions stœchiométriques.'
      }
    ],
    formulas: [
      {
        name: 'Quantité de matière (solide / liquide)',
        formula: 'n = \\frac{m}{M} \\iff m = n \\times M',
        explanation: 'Relation entre nombre de moles n (mol), masse m (g) et masse molaire M (g/mol).'
      },
      {
        name: 'Quantité de matière pour un gaz',
        formula: 'n = \\frac{V}{V_m} \\iff V = n \\times V_m',
        explanation: 'Relation avec le volume molaire gazeux (Vm = 22,4 L/mol dans les CNTP).'
      },
      {
        name: 'Proportionnalité stœchiométrique',
        formula: '\\frac{n_A}{a} = \\frac{n_B}{b} = \\frac{n_C}{c}',
        explanation: 'Lien fondamental entre les quantités de matière d\'une réaction aA + bB -> cC.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Calculer la masse de produit formé lors d\'une réaction',
        procedure: '1. Écrire et équilibrer rigoureusement l\'équation chimique. 2. Calculer la quantité de matière n du réactif fourni : n = m / M. 3. Poser la relation stœchiométrique n(produit)/c = n(réactif)/a. 4. En déduire n(produit) = (c/a) × n(réactif). 5. Calculer la masse finale m(produit) = n(produit) × M(produit).',
        tip: 'Toujours s\'assurer que les masses sont en grammes et les volumes en litres avant d\'appliquer les formules.'
      }
    ],
    examples: [
      {
        statement: 'On fait brûler 6 g de carbone (M = 12 g/mol) dans du dioxygène. Calcule le nombre de moles de carbone brûlé et la masse de CO2 (M = 44 g/mol) obtenue.',
        solution: 'Équation : C + O2 -> CO2 (coefficients 1, 1, 1).\n1. n(C) = m / M = 6 / 12 = 0,5 mol.\n2. D\'après l\'équation : n(CO2) = n(C) = 0,5 mol.\n3. Masse de CO2 : m = n × M = 0,5 × 44 = 22 g.'
      }
    ],
    exercises: [
      {
        question: 'Équilibre les équations suivantes : 1) Al + O2 -> Al2O3 ; 2) Fe + O2 -> Fe3O4 ; 3) Zn + HCl -> ZnCl2 + H2.',
        correction: '1) 4 Al + 3 O2 -> 2 Al2O3\n2) 3 Fe + 2 O2 -> Fe3O4\n3) Zn + 2 HCl -> ZnCl2 + H2'
      }
    ],
    evaluationSituation: {
      context: 'Dans une aciérie à Vridi, la fabrication du fer à partir d\'oxyde ferrique Fe2O3 s\'effectue selon la réaction : Fe2O3 + 3 CO -> 2 Fe + 3 CO2. On fait réagir 3,2 kg d\'oxyde ferrique. Données : M(Fe2O3) = 160 g/mol ; M(Fe) = 56 g/mol.',
      instructions: [
        '1. Citer les réactifs et les produits de cette réaction.',
        '2. Vérifier que l\'équation est correctement équilibrée.',
        '3. Calculer la quantité de matière de Fe2O3 présent dans 3,2 kg.',
        '4. Déterminer la masse de fer métallique pur produite.'
      ],
      solutionGuide: '1. Réactifs : Fe2O3 et CO ; Produits : Fe et CO2. 2. Vérification : Fe (2 à gauche, 2 à droite), C (3 à gauche, 3 à droite), O (3 + 3 = 6 à gauche, 3×2 = 6 à droite) -> Équation parfaitement équilibrée. 3. m = 3,2 kg = 3200 g. n(Fe2O3) = 3200 / 160 = 20 mol. 4. D\'après les coefficients : n(Fe) / 2 = n(Fe2O3) / 1 => n(Fe) = 2 × 20 = 40 mol. Masse de fer : m(Fe) = n × M = 40 × 56 = 2240 g = 2,24 kg de fer.'
    },
    examTraps: [
      'Oublier de convertir les kilogrammes en grammes avant de diviser par la masse molaire.',
      'Changer les indices de la molécule pour équilibrer (ex: écrire Fe2O2 au lieu d\'ajouter un coefficient).',
      'Confondre masse molaire (M en g/mol) et quantité de matière (n en mol).'
    ],
    quickMemo: 'Lavoisier : rien ne se perd, m(réactifs) = m(produits) | n = m / M = V / Vm | Stœchiométrie : aA + bB -> cC => nA/a = nB/b = nC/c.',
    keywords: ['réaction chimique', 'équation chimique', 'Lavoisier', 'coefficients stœchiométriques', 'mole', 'masse molaire', 'stœchiométrie', '5e']
  }
];
