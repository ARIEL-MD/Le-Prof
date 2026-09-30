import { OfficialIvorianCourse } from '../../types';

export const LYCEE_SVT_1ERE_COURSES: OfficialIvorianCourse[] = [
  // ==========================================
  // 1. SVT - 1ÈRE D : GAMÉTOGENÈSE & FÉCONDATION
  // ==========================================
  {
    id: 'svt-1ere-d-gametogenese-fecondation',
    discipline: 'svt',
    disciplineLabel: 'SVT (Première D)',
    level: '1ere',
    levelLabel: 'Première D',
    serie: '1ere_d',
    serieLabel: 'Première D',
    chapter: "Reproduction humaine et transmission de la vie",
    lessonTitle: "La gamétogenèse (spermatogenèse et ovogenèse) et la fécondation",
    objectifs: [
      "Décrire les étapes comparées de la spermatogenèse et de l'ovogenèse (multiplication, accroissement, maturation méiotique, différenciation)",
      "Expliquer le rôle de la méiose dans le passage de la diploïdie (2n = 46) à l'haploïdie (n = 23)",
      "Analyser les étapes de la fécondation (reconnaissance des gamètes, réaction acrosomique, blocage de la polyspermie, caryogamie)",
      "Comprendre comment le brassage chromosomique (interchromosomique et intrachromosomique) crée la diversité génétique"
    ],
    fullCourseContent: `1. La Spermatogenèse (chez l'homme) :
- Lieu : Se déroule de façon continue de la puberté jusqu'à la fin de la vie dans la paroi des tubes séminifères des testicules, de la périphérie vers la lumière.
- Les 4 phases successives :
  * Multiplication : les spermatogonies (2n) souches se divisent par mitoses successives.
  * Accroissement : chaque spermatogonie se transforme en spermatocyte I (2n).
  * Maturation (Méiose) :
    - 1ère division méiotique (réductionnelle) : 1 spermatocyte I (2n) donne 2 spermatocytes II (n chromosomes à 2 chromatides).
    - 2ème division méiotique (équationnelle) : chaque spermatocyte II donne 2 spermatides (n chromosomes à 1 chromatide), soit 4 spermatides par spermatocyte I.
  * Différenciation (Spermiogenèse) : les spermatides s'effilent, perdent leur cytoplasme, forment un acrosome riche en enzymes lytiques, condensent leur noyau et développent un flagelle moteur pour devenir des spermatozoïdes mobiles.

2. L'Ovogenèse (chez la femme) :
- Lieu : Dans les ovaires, processus cyclique et discontinu commencé dès la vie fœtale et interrompu à la ménopause.
- Déroulement chronologique :
  * Avant la naissance : multiplication des ovogonies (2n), puis entrée en méiose I et blocage en prophase I sous forme d'ovocytes I (2n) logés dans les follicules primordiaux.
  * De la puberté à la ménopause (à chaque cycle) : un follicule mûr achève sa première division méiotique juste avant l'ovulation et émet le 1er globule polaire (expulsé). Il devient un ovocyte II (n) bloqué en métaphase II.
  * Si fécondation : la pénétration d'un spermatozoïde déclenche l'achèvement de la méiose II avec émission du 2ème globule polaire et formation de l'ovotide fécondé.

3. La Fécondation :
- Lieu : A lieu dans le tiers supérieur de la trompe de Fallope.
- Mécanismes physiologiques :
  * Pénétration et réaction acrosomique : les enzymes de l'acrosome digèrent la corona radiata et la zone pellucide.
  * Blocage de la polyspermie : réaction corticale avec libération du contenu des granules corticaux durcissant la membrane de l'ovocyte pour empêcher l'entrée d'autres spermatozoïdes.
  * Rapprochement des pronoyaux (pronucléus mâle et femelle) et fusion : caryogamie rétablissant la diploïdie (2n = 46 chromosomes) et formant la cellule œuf (zygote).`,
    definitions: [
      {
        term: 'Méiose',
        definition: "Succession de deux divisions cellulaires (réductionnelle puis équationnelle) produisant 4 cellules haploïdes (n) à partir d'une cellule mère diploïde (2n)."
      },
      {
        term: 'Caryogamie',
        definition: "Fusion des deux pronuclei (noyaux haploïdes du spermatozoïde et de l'ovocyte) lors de la fécondation pour former le noyau diploïde du zygote."
      },
      {
        term: 'Polyspermie',
        definition: "Pénétration anormale de plusieurs spermatozoïdes dans un même ovocyte, rendant l'embryon non viable et empêchée naturellement par la réaction corticale."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de parité méiotique',
        statement: '1 spermatocyte I (2n) donne 4 spermatozoïdes viables (n) ; 1 ovocyte I (2n) ne donne qu\'1 seul ovocyte II fonctionnel (n) et des globules polaires dégénérescents.'
      },
      {
        name: 'Alternance méiose / fécondation',
        statement: 'La méiose réduit le nombre de chromosomes de moitié (2n → n) ; la fécondation le rétablit (n + n → 2n), assurant la pérennité du caryotype de l\'espèce.'
      }
    ],
    formulas: [
      {
        name: 'Bilan chromosomique de la fécondation',
        formula: 'n \\; (\\text{spermatozoïde}) + n \\; (\\text{ovocyte}) = 2n \\; (\\text{zygote}) = 46 \\; \\text{chromosomes}',
        explanation: 'Rétablissement rigoureux du nombre diploïde caractéristique de l\'espèce humaine.',
        unitOrCondition: 'Espèce humaine'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Comparer spermatogenèse et ovogenèse dans un tableau synthétique',
        procedure: '1. Colonne 1 : Critères (Lieu, Début, Rythme, Nombre de gamètes viables produits par cellule souche, Présence de spermiogenèse).\n2. Colonne 2 : Spermatogenèse (Tubes séminifères, Puberté, Continu, 4 spermatozoïdes, Oui flagellation).\n3. Colonne 3 : Ovogenèse (Ovaire, Vie intra-utérine, Cyclique par mois, 1 seul ovocyte utile + globules polaires, Non).',
        tip: 'Ce tableau comparatif est une question récurrente aux examens de Première D et au Bac D.'
      }
    ],
    examples: [
      {
        statement: "Combien de spermatozoïdes fonctionnels sont issus de la méiose de 50 spermatocytes I ? Combien d'ovocytes mûrs sont issus de 50 ovocytes I ?",
        solution: "1. Chaque spermatocyte I produit 4 spermatozoïdes : 50 × 4 = 200 spermatozoïdes.\n2. Chaque ovocyte I ne donne qu'un seul ovocyte II fonctionnel (les autres cellules étant des globules polaires qui dégénèrent) : 50 × 1 = 50 ovocytes."
      }
    ],
    exercises: [
      {
        question: "À quel moment précis s'achève la deuxième division méiotique chez la femme ?",
        correction: "La deuxième division méiotique chez la femme ne s'achève que s'il y a fécondation, c'est-à-dire lors de la pénétration d'un spermatozoïde dans l'ovocyte II bloqué en métaphase II."
      }
    ],
    evaluationSituation: {
      context: "Un couple consulte au service de procréation médicalement assistée du CHU de Treichville après deux années d'infertilité inexpliquée. Le spermogramme du mari indique 60 millions de spermatozoïdes par mL avec 75% de formes très mobiles et normales. Chez l'épouse, les analyses montrent une absence totale de glaire cervicale filante au 14e jour du cycle et des trompes de Fallope obstruées suite à une salpingite.",
      instructions: [
        "1. Interprète les résultats du spermogramme de l'époux.",
        "2. Explique en quoi l'obstruction bilatérale des trompes de Fallope chez l'épouse empêche la survenue d'une grossesse naturelle.",
        "3. Propose la technique de procréation médicalement assistée (PMA) la plus indiquée pour ce couple."
      ],
      solutionGuide: "1. Le spermogramme est parfaitement normal (normospermie). 2. La fécondation a obligatoirement lieu dans le tiers supérieur de la trompe de Fallope ; l'obstruction empêche la rencontre physique entre les spermatozoïdes et l'ovocyte. 3. La Fécondation In Vitro et Transfert d'Embryon (FIVETE), car la fécondation est alors réalisée en éprouvette au laboratoire avant réimplantation de l'embryon dans la cavité utérine."
    },
    examTraps: [
      "Dire que la femme pond un ovule lors de l'ovulation : c'est un ovocyte II bloqué en métaphase II, pas encore un ovule achevé.",
      "Confondre phase de maturation (qui est la méiose) et phase de différenciation (qui est la spermiogenèse)."
    ],
    quickMemo: "Méiose : 2n → n. Homme : continu dès la puberté, 1 cellule donne 4 spermatozoïdes. Femme : discontinu dès vie fœtale, 1 cellule donne 1 ovocyte II. Fécondation dans le tiers externe de la trompe.",
    keywords: ["gamétogenèse", "spermatogenèse", "ovogenèse", "méiose", "fécondation", "caryogamie", "spermatozoïde", "ovocyte", "svt 1ere d"]
  },

  // ==========================================
  // 2. SVT - 1ÈRE D : RÉGULATION HORMONALE DES CYCLES SEXUELS
  // ==========================================
  {
    id: 'svt-1ere-d-regulation-hormonale-femme',
    discipline: 'svt',
    disciplineLabel: 'SVT (Première D)',
    level: '1ere',
    levelLabel: 'Première D',
    serie: '1ere_d',
    serieLabel: 'Première D',
    chapter: "Régulation neuro-endocrine des fonctions de reproduction",
    lessonTitle: "La régulation neuro-hormonale du cycle sexuel chez la femme",
    objectifs: [
      "Expliquer le synchronisme entre le cycle ovarien (folliculaire, ovulation, lutéale) et le cycle utérin (menstruation, prolifération, dentelle utérine)",
      "Identifier les hormones ovariennes (œstrogènes, progestérone) et hypophysaires (FSH, LH)",
      "Analyser les rétrocontrôles négatif et positif exercés par les hormones ovariennes sur l'axe hypothalamo-hypophysaire",
      "Expliquer le mécanisme d'action des pilules contraceptives combinées"
    ],
    fullCourseContent: `1. Le cycle ovarien et le cycle utérin :
- Durée moyenne de référence : 28 jours (début marqué par le 1er jour des règles/menstruations).
- Cycle ovarien en deux phases séparées par l'ovulation :
  * Phase folliculaire (jours 1 à 13) : maturation d'un follicule cavitaire qui grossit pour devenir le follicule mûr de De Graaf. Sécrétion croissante d'œstrogènes par la thèque interne et la granulosa.
  * Ovulation (jour 14) : rupture du follicule mûr et expulsion de l'ovocyte II recueilli par le pavillon de la trompe.
  * Phase lutéale (jours 15 à 28) : transformation des restes du follicule en corps jaune sécrétant à la fois œstrogènes et forte dose de progestérone. En l'absence de fécondation, le corps jaune dégénère en corps blanc (lutéolyse).
- Cycle utérin :
  * Menstruation (jours 1 à 5) : desquamation de la couche superficielle de l'endomètre suite à la chute brutale des hormones ovariennes.
  * Phase proliférative (jours 6 à 14) : épaississement de l'endomètre sous l'action stimulante des œstrogènes.
  * Phase sécrétoire (jours 15 à 28) : formation de la dentelle utérine riche en glandes sécrétrices de glycogène et en vaisseaux sanguins spiralés sous l'action conjointe de la progestérone et des œstrogènes, préparant la nidation.

2. L'axe hypothalamo-hypophysaire :
- L'hypothalamus sécrète une neurohormone, la GnRH (Gonadotrophine Releasing Hormone), de manière pulsatile.
- La GnRH stimule l'hypophyse antérieure qui sécrète les gonadostimulines :
  * FSH (Follicle Stimulating Hormone) : stimule la croissance et la maturation des follicules ovariens.
  * LH (Luteinizing Hormone) : déclenche l'ovulation par un pic sécrétoire massif (le pic ovulatoire de LH) 24 à 36 h avant l'ovulation et stimule le corps jaune.

3. La boucle de rétrocontrôle (Feed-back) :
- Rétrocontrôle négatif (RC-) : À dose modérée pendant la phase folliculaire et à forte dose conjointe avec la progestérone en phase lutéale, les hormones ovariennes freinent la sécrétion de FSH et LH par l'hypophyse.
- Rétrocontrôle positif (RC+) déclencheur de l'ovulation : Vers le 12e-13e jour, la concentration d'œstrogènes dépasse un seuil critique (> 200 pg/mL pendant 48h). Au lieu de freiner, elle déclenche une décharge explosive de GnRH, entraînant le pic de LH (et FSH) responsable de l'ovulation.

4. Principe de la pilule contraceptive œstroprogestative :
Apporte quotidiennement de faibles doses d'œstrogènes et de progestérone de synthèse qui exercent un rétrocontrôle négatif permanent sur l'hypophyse : bloquent le pic de LH, suppriment l'ovulation, rendent la glaire cervicale imperméable aux spermatozoïdes et maintiennent un endomètre impropre à la nidation.`,
    definitions: [
      {
        term: 'Pic de LH',
        definition: "Élévation brutale et massive de la concentration sanguine d'hormone lutéinisante déclenchée par rétrocontrôle positif des œstrogènes, provoquant l'ovulation 24 à 36 heures plus tard."
      },
      {
        term: 'Corps jaune',
        definition: "Glande endocrine temporaire formée dans l'ovaire à partir des restes du follicule rompu après l'ovulation, responsable de la sécrétion de progestérone."
      },
      {
        term: 'Rétrocontrôle négatif',
        definition: "Mécanisme homéostatique par lequel une élévation de l'hormone effectrice ovarienne freine la sécrétion de l'hormone régulatrice cérébrale."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Condition du pic de LH',
        statement: 'Le rétrocontrôle positif ne s\'exerce que si le taux d\'œstrogènes dépasse le seuil critique d\'environ 200 pg/mL pendant au moins 36 à 48 heures.'
      },
      {
        name: 'Origine des règles',
        statement: 'La chute conjointe des taux sanguins d\'œstrogènes et de progestérone en fin de cycle (due à la mort du corps jaune) déclenche la nécrose et le saignement de l\'endomètre (menstruation).'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Analyser l\'effet d\'une castration ou d\'une ovariectomie bilatérale',
        procedure: '1. Constater la suppression de la production d\'œstrogènes et de progestérone.\n2. Noter la disparition des rétrocontrôles négatifs sur l\'axe hypothalamo-hypophysaire.\n3. En déduire une hypersécrétion continue de FSH et de LH (taux sanguins très élevés).\n4. Conclure : les ovaires exercent normalement un frein permanent (RC-) sur l\'hypophyse.',
        tip: 'Ce raisonnement expérimental est un grand classique de l\'APC au secondaire ivoirien.'
      }
    ],
    examples: [
      {
        statement: "Pourquoi observe-t-on une chute de la sécrétion de FSH et LH après l'ovulation (pendant la phase lutéale) ?",
        solution: "Pendant la phase lutéale, le corps jaune produit une grande quantité de progestérone associée à des œstrogènes. Cette association exerce un puissant rétrocontrôle négatif sur l'hypophyse et l'hypothalamus, ce qui bloque la libération de FSH et de LH."
      }
    ],
    exercises: [
      {
        question: "Expliquez précisément quel phénomène ovarien est à l'origine du déclenchement des menstruations chez la femme.",
        correction: "En l'absence de fécondation, le corps jaune régresse et meurt (lutéolyse). Cela entraîne une baisse brutale des concentrations sanguines d'œstrogènes et de progestérone. Privée de ce soutien hormonal, la muqueuse utérine (endomètre) se nécrose et desquame : ce sont les règles."
      }
    ],
    evaluationSituation: {
      context: "Une jeune femme de 22 ans prend une pilule contraceptive combinée (œstrogène + progestatif de synthèse). Elle réalise un bilan sanguin au 14e jour de sa plaquette. Les résultats indiquent : taux de FSH très bas, absence de pic de LH, endomètre mince et atrophique.",
      instructions: [
        "1. Explique pourquoi le pic de LH est absent chez cette femme.",
        "2. Déduis si une ovulation a pu se produire ce mois-ci.",
        "3. Précise les trois modes d'action contraceptifs assurés par cette pilule combinée."
      ],
      solutionGuide: "1. La prise quotidienne d'hormones de synthèse maintient un rétrocontrôle négatif permanent sur l'axe hypophysaire, empêchant le déclenchement du pic de LH. 2. Sans pic de LH, il n'y a aucune ovulation possible. 3. Blocage de l'ovulation (action antigonadotrope), imperméabilisation de la glaire cervicale et endomètre impropre à la nidation."
    },
    examTraps: [
      "Croire que la progestérone est sécrétée pendant la phase folliculaire : la progestérone n'est sécrétée qu'en phase lutéale par le corps jaune.",
      "Confondre rétrocontrôle négatif (frein) et rétrocontrôle positif (emballement déclenchant le pic de LH)."
    ],
    quickMemo: "Hypothalamus (GnRH) → Hypophyse (FSH pour follicule, LH pour ovulation) → Ovaire (œstrogènes en phase 1, œstrogènes + progestérone en phase 2). Pic d'œstrogène = pic de LH = ovulation.",
    keywords: ["régulation hormonale", "cycle ovarien", "cycle utérin", "FSH", "LH", "œstrogène", "progestérone", "corps jaune", "rétrocontrôle", "ovulation", "svt 1ere d"]
  },

  // ==========================================
  // 3. SVT - 1ÈRE D : LA PHOTOSYNTHÈSE
  // ==========================================
  {
    id: 'svt-1ere-d-photosynthese-metabolisme-vegetal',
    discipline: 'svt',
    disciplineLabel: 'SVT (Première D)',
    level: '1ere',
    levelLabel: 'Première D',
    serie: '1ere_d',
    serieLabel: 'Première D',
    chapter: "La nutrition autotrophe des végétaux chlorophylliens",
    lessonTitle: "La photosynthèse : phase photochimique claire et phase d'assimilation du carbone (cycle de Calvin)",
    objectifs: [
      "Écrire l'équation globale de la photosynthèse et identifier les réactifs (eau, CO2, lumière) et produits (glucose, O2)",
      "Localiser précisément les deux phases dans le chloroplaste (thylakoïdes pour la phase photochimique, stroma pour le cycle de Calvin)",
      "Expliquer la photolyse de l'eau, la production de NADPH, H+ et d'ATP",
      "Décrire la fixation du CO2 par la Rubisco et l'incorporation dans les molécules organiques (amidon, saccharose)"
    ],
    fullCourseContent: `1. Équation bilan et siège de la photosynthèse :
- Équation chimique équilibrée :
  6 CO₂ + 6 H₂O + Énergie lumineuse ➔ C₆H₁₂O₆ (glucose) + 6 O₂
- L'organite siège : Le chloroplaste, délimité par une double membrane renfermant :
  * Les thylakoïdes (empilements de disques appelés grana) dont la membrane contient les pigments photosynthétiques (chlorophylle a, b, caroténoïdes) regroupés en photosystèmes (PSI et PSII).
  * Le stroma, fluide contenant les enzymes clés, dont la Rubisco (Ribulose 1,5-bisphosphate carboxylase/oxygénase).

2. Phase 1 : La phase photochimique (dépendante de la lumière, dans la membrane des thylakoïdes) :
- Les photons lumineux excitent les molécules de chlorophylle du photosystème II (PSII).
- Photolyse de l'eau : 2 H₂O ➔ 4 H⁺ + 4 e⁻ + O₂. Le dioxygène dégagé lors de la photosynthèse provient exclusivement de la molécule d'eau (expérience de Ruben et Kamen avec l'isotope ¹⁸O).
- Chaîne de transporteurs d'électrons : les électrons circulent le long d'une chaîne membranaire jusqu'à un accepteur final (NADP⁺) réduit en NADPH, H⁺.
- Photophosphorylation de l'ADP : le flux de protons H⁺ à travers l'ATP synthase permet la synthèse d'ATP (molécule d'énergie universelle).
- Bilan phase claire : Production d'ATP et de NADPH, H⁺ avec dégagement de dioxygène O₂.

3. Phase 2 : La phase thermochimique ou non photochimique (Cycle de Calvin, dans le stroma) :
- Ne nécessite pas directement de lumière mais exige l'ATP et le NADPH, H⁺ produits par la phase claire.
- Étapes du cycle de Calvin :
  * Fixation du CO₂ sur un sucre en C5 (RuBP : Ribulose 1,5-bisphosphate) catalysée par l'enzyme Rubisco, formant 2 molécules d'acide 3-phosphoglycérique (APG, molécule en C3).
  * Réduction de l'APG en trioses-phosphates (G3P) en consommant de l'ATP et du NADPH, H⁺.
  * Régénération du RuBP et synthèse des glucides complexes (amidon temporaire de réserve dans le chloroplaste, saccharose circulant dans la sève élaborée).`,
    definitions: [
      {
        term: 'Photosynthèse',
        definition: "Processus biochimique par lequel les organismes autotrophes convertissent l'énergie lumineuse solaire en énergie chimique stockée dans des liaisons organiques à partir d'eau et de CO2."
      },
      {
        term: 'Photolyse de l\'eau',
        definition: "Oxydation de la molécule d'eau à la lumière au niveau du photosystème II libérant des électrons, des protons et du dioxygène gazeux."
      },
      {
        term: 'Rubisco',
        definition: "Enzyme la plus abondante de la biosphère, localisée dans le stroma des chloroplastes, assurant la fixation du CO2 minéral sur le RuBP."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Origine du dioxygène photosynthétique',
        statement: 'Le dioxygène O₂ rejeté provient impérativement de l\'oxydation de l\'eau (H₂O) et non de la molécule de dioxyde de carbone (CO₂).'
      },
      {
        name: 'Couplage des deux phases',
        statement: 'La phase sombre ne peut durer longtemps à l\'obscurité car elle épuise rapidement le stock d\'ATP et de NADPH, H⁺ régénéré par la lumière.'
      }
    ],
    formulas: [
      {
        name: 'Équation globale de la photosynthèse',
        formula: '6 \\, \\text{CO}_2 + 6 \\, \\text{H}_2\\text{O} \\xrightarrow{\\text{lumière}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6 \\, \\text{O}_2',
        explanation: 'Conversion de matières minérales en matière organique glucidique.',
        unitOrCondition: 'Végétaux chlorophylliens'
      },
      {
        name: 'Photolyse de l\'eau',
        formula: '2 \\, \\text{H}_2\\text{O} \\xrightarrow{\\text{photons}} 4 \\, \\text{H}^+ + 4 \\, \\text{e}^- + \\text{O}_2 \\uparrow',
        explanation: 'Siège : membrane des thylakoïdes au niveau du photosystème II.',
        unitOrCondition: 'Phase photochimique'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Interpréter l\'expérience de Ruben et Kamen (traçage isotopique)',
        procedure: '1. Expérience 1 : H₂¹⁸O + CO₂ ➔ le dioxygène dégagé est marqué (¹⁸O₂).\n2. Expérience 2 : H₂O + C¹⁸O₂ ➔ le dioxygène dégagé n\'est pas marqué (¹⁶O₂), le traceur se retrouve dans les sucres.\n3. Conclusion : L\'oxygène O₂ rejeté provient exclusivement de l\'eau.',
        tip: 'Ce raisonnement démontre la nature rédox de la photosynthèse.'
      }
    ],
    examples: [
      {
        statement: "Une plante aquatique (élodée) est placée à la lumière dans une eau enrichie en hydrogénocarbonate de sodium. Que constate-t-on et comment tester le gaz recueilli ?",
        solution: "On observe un dégagement de bulles de gaz. En approchant une bûchette incandescente de l'ouverture du tube à essai, la flamme se ravive : cela prouve que le gaz émis est du dioxygène (O₂)."
      }
    ],
    exercises: [
      {
        question: "Citez les deux produits de la phase photochimique indispensables au déroulement du cycle de Calvin.",
        correction: "L'ATP (apportant l'énergie) et le NADPH, H⁺ (coenzyme réduit apportant le pouvoir réducteur pour réduire l'APG en sucres)."
      }
    ],
    evaluationSituation: {
      context: "Un planteur de palmier à huile dans la région de Dabou constate que durant les périodes de fort ensoleillement avec un arrosage régulier, le rendement de ses parcelles explose, alors qu'en période de brume sèche poussiéreuse (Harmattan prolongé), la croissance foliaire est bloquée.",
      instructions: [
        "1. Relie la baisse d'ensoleillement et le dépôt de poussière sur les feuilles à l'activité de la photosynthèse.",
        "2. Précise au niveau cellulaire quelle étape de la photosynthèse est directement inhibée par le manque de lumière.",
        "3. Explique les conséquences sur la synthèse d'huile de palme (lipides de réserve) dans les régimes.",
        "4. Propose une solution d'entretien pour améliorer la captation lumineuse."
      ],
      solutionGuide: "1. La poussière fait écran à la lumière et obstrue les stomates, réduisant l'entrée du CO₂. 2. La phase photochimique dans les thylakoïdes est ralentie, diminuant la production d'ATP et NADPH. 3. Sans ces coenzymes, le cycle de Calvin s'arrête, privant la plante de précurseurs glucidiques nécessaires à la lipogenèse. 4. Élagage des palmes mortes, espacement adéquat des plants et lavage par aspersion si possible."
    },
    examTraps: [
      "Dire que l'oxygène libéré provient du dioxyde de carbone : c'est faux, il provient de l'eau.",
      "Croire que la phase non photochimique a obligatoirement lieu la nuit : elle a lieu le jour en même temps que la phase claire car elle consomme immédiatement l'ATP produit."
    ],
    quickMemo: "Photosynthèse : 6 CO₂ + 6 H₂O → Glucose + 6 O₂. Phase claire (thylakoïdes) = photolyse H₂O + ATP + NADPH. Phase sombre (stroma, Rubisco) = fixation CO₂ + Cycle de Calvin.",
    keywords: ["photosynthèse", "chloroplaste", "thylakoïde", "stroma", "Rubisco", "cycle de Calvin", "photolyse de l'eau", "ATP", "NADPH", "svt 1ere d"]
  }
];
