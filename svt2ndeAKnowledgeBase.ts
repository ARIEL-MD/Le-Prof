/**
 * LE PROF — BASE DE CONNAISSANCES OFFICIELLE : SVT SECONDE A
 * Source : Mon École à la Maison — Ministère de l'Éducation Nationale et de l'Alphabétisation (Côte d'Ivoire)
 * Thèmes :
 * - Les grands ensembles environnementaux et l'action de l'Homme sur les écosystèmes
 * - L'organisation de la cellule et la reproduction cellulaire (Mitose, ADN, chromosomes)
 * - La nutrition, les besoins énergétiques et la santé de l'Homme
 * - La communication nerveuse, hormonale et la santé de la reproduction
 * - La nutrition minérale et photosynthétique de la plante verte
 */

export type Chapter = {
  id: string;
  lessonNumber?: number;
  title: string;
  pages?: [number, number] | readonly [number, number];
  topics: string[] | readonly string[];
  formulas: string[] | readonly string[];
  methods: string[] | readonly string[];
};

export const svt2ndeAKnowledgeBase = {
  name: "LE PROF — Knowledge Base SVT 2nde A",
  version: "1.0.0",
  source: "Mon École à la Maison — Côte d'Ivoire École Numérique / MENA",
  level: "Seconde A",
  chapters: [
    {
      id: "ch1",
      lessonNumber: 1,
      title: "Les grands ensembles environnementaux et l'action de l'Homme",
      topics: [
        "Définition d'un écosystème : ensemble dynamique formé par un milieu de vie physico-chimique (le biotope) et l'ensemble des êtres vivants qui le peuplent (la biocénose) : Écosystème = Biotope + Biocénose",
        "Les grands biomes en Côte d'Ivoire : la forêt dense humide au Sud (climat équatorial/subéquatorial guinéen, forte pluviométrie >1500 mm/an) et la savane arborée/herbeuse au Nord et Centre (climat tropical soudanien, alternance saison sèche et saison des pluies)",
        "Actions anthropiques destructrices : déforestation massive pour l'agriculture extensive (cacao, café, hévéa, palmier à huile), exploitation forestière abusive de bois d'œuvre, feux de brousse non contrôlés, braconnage de la faune sauvage, pollutions industrielles et minières (orpaillage clandestin polluant les cours d'eau au mercure et cyanure)",
        "Conséquences écologiques : érosion et appauvrissement des sols par latéritisation, disparition d'espèces animales et végétales (perte de biodiversité), perturbation du cycle hydrologique et désertification",
        "Mesures de protection et développement durable : création de parcs nationaux (Taï, Comoé, Banco, Marahoué) et réserves naturelles intégrales, reboisement intensif (journée nationale de l'arbre), agroforesterie, réglementation stricte de la chasse et de l'abattage d'arbres, assainissement et recyclage des déchets"
      ],
      formulas: [
        "Formule de l'écosystème : Écosystème = Biotope (Facteurs abiotiques) + Biocénose (Faune + Flore + Micro-organismes)",
        "Bilan du déboisement : Perte du couvert végétal -> Sol nu exposé aux pluies -> Lessivage des nutriments -> Érosion et latéritisation",
        "Règle de durabilité : Taux de prélèvement des ressources <= Taux de régénération naturelle"
      ],
      methods: [
        "Analyser une situation de dégradation d'un milieu naturel : 1. Identifier les composantes altérées du biotope (sol, eau, air). 2. Repérer les activités humaines responsables (feux, orpaillage, monocultures). 3. Décrire l'impact direct sur la biocénose (mortalité des espèces, rupture des chaînes trophiques). 4. Proposer des solutions concrètes durables adaptées (reboisement, législation, agroécologie).",
        "Distinguer la forêt dense de la savane : 1. Climat : pluviométrie continue abondante au Sud vs saison sèche marquée au Nord. 2. Végétation : grands arbres étagés à feuillage persistant vs tapis graminéen parsemé d'arbustes à écorce épaisse résistante au feu."
      ]
    },
    {
      id: "ch2",
      lessonNumber: 2,
      title: "L'organisation de la cellule vivante",
      topics: [
        "La cellule comme unité fondamentale commune à tous les êtres vivants (animaux, végétaux, champignons, bactéries)",
        "Ultrastructure de la cellule eucaryote :",
        "- Membrane plasmique : barrière semi-perméable entourant la cellule, régulant les échanges avec le milieu extérieur",
        "- Cytoplasme : milieu aqueux gélatineux contenant les organites cellulaires",
        "- Noyau cellulaire : compartiment central délimité par l'enveloppe nucléaire, renfermant le matériel génétique (chromatine constituée d'ADN et de protéines)",
        "- Mitochondries : organites siège de la respiration cellulaire produisant l'énergie cellulaire",
        "Différences structurales fondamentales entre cellule animale et cellule végétale :",
        "- Cellule végétale : présence d'une paroi pectocellulosique rigide protectrice externe, de chloroplastes riches en chlorophylle pour la photosynthèse, et d'une volumineuse vacuole centrale d'eau et de réserves",
        "- Cellule animale : forme souple sans paroi rigide, absence de chloroplastes, présence d'un centrosome intervenant dans la division cellulaire"
      ],
      formulas: [
        "Composants universels eucaryotes = Membrane plasmique + Cytoplasme + Noyau + Mitochondries",
        "Signature végétale = Paroi pectocellulosique rigide + Chloroplastes + Grande vacuole unique",
        "Signature animale = Membrane souple + Centrosome + Absence de paroi rigide et de chloroplastes"
      ],
      methods: [
        "Comparer au microscope une cellule animale (frottis de muqueuse buccale) et une cellule végétale (épiderme d'oignon) : 1. Noter la géométrie : contours rectangulaires bien délimités (cellule végétale) vs formes arrondies souples irrégulières (cellule animale). 2. Rechercher la double délimitation : présence d'une paroi épaisse doublant la membrane chez le végétal. 3. Observer la vacuole : immense poche centrale repoussant le noyau chez le végétal.",
        "Réaliser un dessin d'observation cellulaire légendé : 1. Tracer des traits continus et nets au crayon. 2. Tirer des traits de rappel horizontaux sans qu'ils se croisent. 3. Inscrire les légendes précises en minuscules d'imprimerie. 4. Indiquer le titre complet et le grossissement du microscope."
      ]
    },
    {
      id: "ch3",
      lessonNumber: 3,
      title: "La division cellulaire conforme : la mitose",
      topics: [
        "Définition de la mitose : division cellulaire permettant à une cellule mère d'engendrer deux cellules filles génétiquement conformes et identiques à la cellule mère",
        "Déroulement ordonné des quatre phases de la mitose :",
        "1. Prophase : individualisation et condensation des chromosomes fissurés en 2 chromatides réunies par un centromère, disparition de l'enveloppe nucléaire et mise en place du fuseau de division achromatique",
        "2. Métaphase : condensation maximale des chromosomes et alignement de leurs centromères sur le plan équatorial de la cellule pour former la plaque équatoriale",
        "3. Anaphase : rupture/séparation des deux chromatides sœurs de chaque chromosome au niveau du centromère, migration des chromatides vers les pôles opposés par raccourcissement des fibres du fuseau (ascension polaire)",
        "4. Télophase : décondensation des chromosomes simples monochromatidiens en chromatine, reformation d'une enveloppe nucléaire autour de chaque lot fils, cytodiérèse (partage du cytoplasme)",
        "Rôle fondamental de la mitose : maintien du nombre de chromosomes de l'espèce, croissance des organismes pluricellulaires, réparation des tissus lésés (cicatrisation) et renouvellement des cellules mortes"
      ],
      formulas: [
        "Formule de conservation mitotique : 1 cellule mère (2n) -> 2 cellules filles (2n)",
        "Chronologie mnémotechnique : Prophase -> Métaphase -> Anaphase -> Télophase (P-M-A-T)",
        "Séparation des chromatides à l'anaphase : 1 chromosome à 2 chromatides -> 2 chromosomes à 1 chromatide"
      ],
      methods: [
        "Reconnaître l'étape d'une mitose sur une vue microscopique : 1. Si chromosomes visibles sous forme de filaments épais pelotonnés dans le cytoplasme -> Prophase. 2. Si chromosomes alignés au centre de la cellule -> Métaphase. 3. Si deux groupes distincts de chromosomes s'écartent vers les extrémités opposées -> Anaphase. 4. Si deux nouvelles cellules se séparent avec reformation de parois/membranes -> Télophase.",
        "Justifier le rôle de la mitose dans l'organisme : 1. Citer la multiplication cellulaire sans altération du programme génétique. 2. Expliquer comment elle assure la croissance corporelle chez l'enfant et l'adolescent. 3. Expliquer son action dans le renouvellement quotidien des cellules de la peau et du sang."
      ]
    },
    {
      id: "ch4",
      lessonNumber: 4,
      title: "Les chromosomes et le matériel génétique humain",
      topics: [
        "Le caryotype humain : photographie classée de l'ensemble des chromosomes d'une cellule bloquée en métaphase de mitose",
        "Nombre et classification des chromosomes chez l'Homme : 46 chromosomes organisés en 23 paires d'homologues",
        "- 22 paires de chromosomes autosomes (chromosomes non sexuels identiques chez l'homme et la femme)",
        "- 1 paire de chromosomes hétérochromosomes/gonosomes (chromosomes sexuels déterminant le sexe génétique : paire XX chez la femme, paire XY chez l'homme)",
        "Formule chromosomique normale : Homme = 46, XY (ou 44A + XY) ; Femme = 46, XX (ou 44A + XX)",
        "Anomalies chromosomiques de nombre :",
        "- La trisomie 21 (syndrome de Down) : présence d'un chromosome 21 surnuméraire (47 chromosomes au total : 47, XX, +21 ou 47, XY, +21), entraînant retard psychomoteur, morphologie faciale caractéristique et malformations cardiaques",
        "- Le syndrome de Klinefelter (47, XXY) : présence de deux chromosomes X et d'un chromosome Y chez un individu de sexe masculin",
        "- Le syndrome de Turner (45, X0) : absence d'un chromosome X chez un individu de sexe féminin",
        "Nature chimique du matériel génétique : l'acide désoxyribonucléique (ADN), macromolécule en double hélice portant l'information héréditaire sous forme de gènes constitués de séquences de nucléotides"
      ],
      formulas: [
        "Formule chromosomique normale humaine : Femme = 2n = 46 = 44A + XX ; Homme = 2n = 46 = 44A + XY",
        "Formule de la trisomie 21 : 2n + 1 = 47 (45A + XX ou 45A + XY)",
        "Gamètes humains haploïdes : Ovule = n = 23 (22A + X) ; Spermatozoïde = n = 23 (22A + X ou 22A + Y)"
      ],
      methods: [
        "Analyser un document de caryotype pour identifier le sexe et une éventuelle anomalie : 1. Compter le nombre total de chromosomes (46 = normal, 47 ou 45 = anomalie de nombre). 2. Examiner la 23e paire sexuelle : deux chromosomes X identiques de taille moyenne -> sujet féminin (XX) ; un chromosome X et un petit chromosome Y -> sujet masculin (XY). 3. Parcourir les 22 paires d'autosomes : si la 21e paire présente 3 chromosomes au lieu de 2 -> trisomie 21. 4. Écrire la formule chromosomique standard complète.",
        "Expliquer la transmission du sexe de l'enfant : 1. Rappeler que la mère ne produit que des ovules porteurs du chromosome X (22A + X). 2. Rappeler que le père produit 50% de spermatozoïdes à X et 50% à Y. 3. Conclure que c'est le gamète paternel qui détermine le sexe biologique à la fécondation."
      ]
    },
    {
      id: "ch5",
      lessonNumber: 5,
      title: "L'alimentation, les besoins nutritionnels et la santé humaine",
      topics: [
        "Classification des constituants alimentaires :",
        "- Aliments simples minéraux : eau (environ 65% de la masse corporelle) et sels minéraux (calcium, fer, iode, phosphore, sodium)",
        "- Aliments simples organiques : glucides (sucres lents et rapides, principale source d'énergie immédiate), lipides (matières grasses, réserve d'énergie et structure membranaire), protides/protéines (acides aminés, rôle bâtisseur et réparateur des tissus)",
        "- Vitamines : substances organiques indispensables à très faibles doses (vitamines A, B, C, D)",
        "Valeur énergétique des nutriments : 1 g de glucides libère 17 kJ (4 kcal) ; 1 g de protides libère 17 kJ (4 kcal) ; 1 g de lipides libère 38 kJ (9 kcal)",
        "Ration alimentaire équilibrée : quantité d'aliments assurant la couverture quantitative (besoins énergétiques en kJ/jour) et qualitative (équilibre protides/lipides/glucides, minéraux et vitamines)",
        "Règle de l'équilibre qualitatif : 10 à 15% de l'apport énergétique total sous forme de protéines, 25 à 30% sous forme de lipides, 55 à 60% sous forme de glucides",
        "Maladies nutritionnelles par carence (malnutrition) :",
        "- Kwashiorkor : carence sévère en protéines chez le jeune enfant après sevrage brutal, provoquant œdèmes des membres, ventre ballonné, décoloration des cheveux et fonte musculaire",
        "- Marasme : sous-nutrition globale (déficit grave en protéines et en calories), entraînant un amaigrissement extrême (aspect de vieillard ridé)",
        "- Carences vitaminiques et minérales : rachitisme (carence en vitamine D et calcium, déformation des os), anémie ferriprive (carence en fer, pâleur et fatigue par manque d'hémoglobine), goitre (carence en iode, hypertrophie de la glande thyroïde), scorbut (carence en vitamine C)",
        "Maladies nutritionnelles par excès : surcharge pondérale et obésité (excès d'apport énergétique calorique par rapport à la dépense physique), diabète de type 2, hypertension artérielle et maladies cardiovasculaires"
      ],
      formulas: [
        "Équivalences énergétiques : 1 g de glucides = 17 kJ (4 kcal) ; 1 g de protides = 17 kJ (4 kcal) ; 1 g de lipides = 38 kJ (9 kcal)",
        "Valeur énergétique totale d'un repas : E_totale (kJ) = (m_glucides * 17) + (m_protides * 17) + (m_lipides * 38)",
        "Conversion Joules / Calories : 1 kcal = 4,18 kJ ; 1 kJ = 0,239 kcal",
        "Indice de Masse Corporelle (IMC) : IMC = Masse (kg) / (Taille (m))^2 (Normal : 18,5 à 24,9 kg/m2 ; Surpoids : >= 25 ; Obésité : >= 30)"
      ],
      methods: [
        "Calculer la valeur énergétique d'une ration alimentaire : 1. Relever les masses respectives de glucides, protides et lipides consommées en grammes. 2. Multiplier les grammes de glucides par 17 kJ. 3. Multiplier les grammes de protides par 17 kJ. 4. Multiplier les grammes de lipides par 38 kJ. 5. Sommer les trois résultats pour obtenir l'énergie globale en kJ. 6. Comparer à la dépense quotidienne de l'individu (ex: adolescent sédentaire ~10000 kJ/j ; actif ~12500 kJ/j).",
        "Diagnostiquer une anomalie nutritionnelle à partir de symptômes cliniques : 1. Si œdèmes + cheveux roux décolorés + ventre gonflé chez l'enfant sevré -> Kwashiorkor (carence en protides). 2. Si amaigrissement squelettique sans œdème -> Marasme nutritionnel. 3. Si jambes arquées en parenthèses chez le nourrisson -> Rachitisme (vitamine D / calcium). 4. Si pâleur, essoufflement et asthénie -> Anémie (carence en fer).",
        "Calculer et interpréter l'IMC : 1. Convertir la taille en mètres. 2. Diviser le poids en kg par la taille au carré. 3. Comparer aux seuils officiels de l'OMS."
      ]
    },
    {
      id: "ch6",
      lessonNumber: 6,
      title: "La communication nerveuse et le système nerveux",
      topics: [
        "Organisation générale du système nerveux :",
        "- Système nerveux central (névraxe) : encéphale (cerveau, cervelet, bulbe rachidien) logé dans la boîte crânienne et moelle épinière logée dans le canal rachidien",
        "- Système nerveux périphérique : nerfs crâniens (12 paires) et nerfs rachidiens (31 paires) reliant les centres nerveux aux organes",
        "Le réflexe inné (médullaire) : réaction motrice involontaire, automatique, stéréotypée et rapide en réponse à une stimulation sensorielle précise (ex: réflexe rotulien, réflexe myotatique, retrait de la main suite à une brûlure)",
        "Les cinq éléments constitutifs de l'arc réflexe :",
        "1. Le récepteur sensoriel (peau, fuseau neuromusculaire) captant le stimulus et le convertissant en message nerveux",
        "2. La voie conductrice afférente ou sensitive (fibres nerveuses sensitives du nerf rachidien, racine postérieure/dorsale avec ganglion spinal)",
        "3. Le centre intégrateur nerveux (la moelle épinière, substance grise centrale en forme de papillon)",
        "4. La voie conductrice efférente ou motrice (fibres motrices, racine antérieure/ventrale de la moelle épinière)",
        "5. L'effecteur musculaire qui exécute la réponse motrice (contraction du muscle)",
        "Le neurone, cellule unité du tissu nerveux : corps cellulaire (soma contenant le noyau), prolongements cytoplasmiques courts ramifiés (dendrites) et prolongement long conducteur (axone) entouré de la gaine de myéline et terminé par une arborisation terminale",
        "La synapse : zone de jonction fonctionnelle entre deux neurones ou entre un neurone et une cellule musculaire ; transmission chimique unidirectionnelle assurée par des neurotransmetteurs (ex: acétylcholine) libérés par les vésicules présynaptiques dans la fente synaptique",
        "Facteurs nocifs perturbant le système nerveux : consommation d'alcool, drogues (cannabis, cocaïne, héroïne), tabac, surmenage et manque de sommeil ; effets : ralentissement des réflexes, dépendance physique et psychologique, altération de la mémoire et des facultés cognitives"
      ],
      formulas: [
        "Trajet de l'influx dans l'arc réflexe : Stimulus -> Récepteur sensoriel -> Neurone sensitif (Voie afférente, racine dorsale) -> Moelle épinière (Centre intégrateur) -> Neurone moteur (Voie efférente, racine ventrale) -> Organe effecteur (Muscle)",
        "Polarité du neurone : Dendrites (Entrée) -> Corps cellulaire (Intégration) -> Axone (Conduction) -> Arborisation terminale (Sortie/Synapse)",
        "Transmission synaptique : Influx nerveux présynaptique -> Libération de neurotransmetteur dans la fente -> Fixation sur récepteurs postsynaptiques -> Déclenchement de l'influx postsynaptique"
      ],
      methods: [
        "Tracer et légender le circuit de l'arc réflexe médullaire : 1. Représenter la moelle épinière en coupe transversale (substance grise centrale avec cornes antérieures larges et cornes postérieures effilées, substance blanche périphérique). 2. Placer le récepteur cutané. 3. Tracer le neurone sensitif dont le corps cellulaire est dans le ganglion spinal de la racine dorsale. 4. Faire le relais synaptique dans la corne postérieure (avec ou sans interneurone). 5. Faire émerger le neurone moteur par la corne et la racine antérieure jusqu'au muscle effecteur. 6. Flécher le sens de propagation.",
        "Interpréter les expériences de section et de stimulation de Bell et Magendie sur le nerf rachidien : 1. Section du nerf rachidien entier -> perte de sensibilité et paralysie dans le territoire innervé (nerf mixte). 2. Section de la racine postérieure -> perte de sensibilité uniquement (racine sensitive afférente). 3. Section de la racine antérieure -> paralysie motrice uniquement (racine motrice efférente)."
      ]
    },
    {
      id: "ch7",
      lessonNumber: 7,
      title: "La reproduction humaine, hormones et santé sexuelle",
      topics: [
        "Caractères sexuels primaires (organes génitaux présents dès la naissance) et secondaires apparaissant à la puberté sous contrôle hormonal",
        "Appareil reproducteur mâle : testicules produisant en continu des spermatozoïdes dans les tubes séminifères (spermatogenèse) et sécrétant la testostérone par les cellules interstitielles de Leydig",
        "Appareil reproducteur femelle : ovaires produisant de façon cyclique un ovocyte (ovogenèse) et sécrétant les hormones ovariennes (œstrogènes et progestérone)",
        "Le cycle menstruel chez la femme (durée moyenne de 28 jours) :",
        "- Phase folliculaire (jours 1 à 13) : développement d'un follicule ovarien sous l'action de la FSH ; sécrétion croissante d'œstrogènes stimulant l'épaississement de la muqueuse utérine (endomètre)",
        "- Ovulation (jour 14 dans un cycle de 28 jours) : rupture du follicule mûr et expulsion de l'ovocyte sous l'effet du pic d'hormone lutéinisante (LH)",
        "- Phase lutéale (jours 15 à 28) : transformation du follicule résiduel en corps jaune sécrétant la progestérone et des œstrogènes, préparant l'endomètre (dentelle utérine) à la nidation de l'embryon",
        "- Menstruations/règles (jours 1 à 5) : chute brutale du taux d'hormones ovariennes en l'absence de fécondation provoquant la destruction et le saignement de l'endomètre",
        "Fécondation et début de grossesse : rencontre et fusion des noyaux d'un spermatozoïde et de l'ovocyte dans le premier tiers de la trompe de Fallope formant la cellule œuf diploïde",
        "Contraception et planification familiale : méthodes naturelles (abstinence périodique, Ogino-Knaus, température, glaire cervicale) et méthodes médicales modernes : pilule contraceptive œstroprogestative (blocage de l'ovulation), préservatif masculin/féminin (double protection contre grossesses non désirées et IST), stérilet/DIU, implants",
        "Infections Sexuellement Transmissibles (IST) et VIH/SIDA : modes de transmission (rapports sexuels non protégés, sang contaminé, transmission mère-enfant à l'accouchement ou allaitement) ; prévention : abstinence, fidélité mutuelle, utilisation systématique et correcte du préservatif"
      ],
      formulas: [
        "Calcul du jour d'ovulation : Jour de l'ovulation = Durée du cycle - 14 jours (ex: cycle de 28 jours -> 28 - 14 = 14e jour ; cycle de 32 jours -> 32 - 14 = 18e jour)",
        "Période de fertilité : Du 4e jour avant l'ovulation jusqu'au 1er jour après (durée de vie : spermatozoïdes ~3 à 5 jours, ovule ~24 heures)",
        "Origine des menstruations : Absence de fécondation -> Régression du corps jaune -> Chute des œstrogènes et de la progestérone -> Desquamation de l'endomètre"
      ],
      methods: [
        "Déterminer la période de fécondabilité pour une femme : 1. Noter la durée habituelle du cycle menstruel de la femme (ex: 30 jours). 2. Soustraire 14 jours pour trouver le jour précis de l'ovulation (30 - 14 = 16e jour du cycle). 3. Compter 4 jours avant le jour d'ovulation pour le début de la fertilité (du 12e jour). 4. Ajouter 1 jour après l'ovulation pour la fin de la fertilité (jusqu'au 17e jour). 5. Définir la période féconde complète.",
        "Expliquer le mode d'action d'une pilule contraceptive classique : 1. Apport régulier d'œstrogènes et progestatifs de synthèse. 2. Rétrocontrôle négatif sur l'axe hypophyso-hypothalamique maintenant un taux bas de FSH et LH. 3. Absence de pic ovulatoire de LH entraînant le blocage total de l'ovulation. 4. Épaississement de la glaire cervicale bloquant les spermatozoïdes."
      ]
    },
    {
      id: "ch8",
      lessonNumber: 8,
      title: "La nutrition de la plante verte et la photosynthèse",
      topics: [
        "L'autotrophie des végétaux chlorophylliens : capacité des plantes vertes à produire leur propre matière organique à partir de matière exclusivement minérale (eau, sels minéraux, CO2) en utilisant l'énergie lumineuse solaire",
        "Absorption de l'eau et des sels minéraux : réalisée au niveau des poils absorbants de la zone pilifère des racines, constituant la sève brute acheminée vers les feuilles par les vaisseaux conducteurs du bois (xylème)",
        "Absorption du dioxyde de carbone : capté dans l'air à travers les stomates situés principalement sur l'épiderme inférieur des feuilles",
        "Rôle de la chlorophylle et des chloroplastes : pigments verts situés dans les chloroplastes des cellules foliaires, capables de capter l'énergie lumineuse solaire (spectre d'absorption maximal dans le bleu et le rouge)",
        "La photosynthèse : réaction biochimique fondamentale se déroulant dans les chloroplastes, permettant la synthèse de glucides (amidon, glucose) et le rejet de dioxygène O2",
        "Mise en évidence expérimentale de la photosynthèse : feuille partiellement masquée par un cache noir à la lumière puis traitée à l'eau iodée ; seules les parties vertes exposées à la lumière se colorent en bleu-noir (présence d'amidon)",
        "Devenir des substances produites : les glucides élaborés forment la sève élaborée circulant dans les vaisseaux du phloème (tubes criblés) vers les organes de réserve (graines, tubercules, fruits) et les organes de croissance"
      ],
      formulas: [
        "Équation globale bilan de la photosynthèse : 6 CO2 + 6 H2O + Lumière -> C6H12O6 (Glucose) + 6 O2",
        "Coloration caractéristique de l'amidon : Amidon + Eau iodée (Lugol) -> Teinte bleu-noir foncée",
        "Deux sèves végétales : Sève brute (Eau + Sels minéraux, Xylème, ascendant) vs Sève élaborée (Eau + Matières organiques, Phloème, descendant et distributeur)"
      ],
      methods: [
        "Interpréter l'expérience de Sachs sur la synthèse d'amidon : 1. Constater le protocole : plante placée à la lumière avec une feuille partiellement cachée par un cache opaque. 2. Décoloration de la feuille à l'alcool bouillant puis révélation à l'eau iodée. 3. Observer les zones : seule la partie exposée à la lumière vire au bleu-noir, la partie cachée reste beige-jaunâtre. 4. Conclure : la lumière est indispensable à la synthèse d'amidon chez la plante verte.",
        "Démontrer la libération d'oxygène par les plantes aquatiques (Élodée) : 1. Placer des brins d'élodée sous un entonnoir surmonté d'un tube à essai rempli d'eau à la lumière. 2. Constater le dégagement de bulles de gaz. 3. Approcher une bûchette incandescente du tube : la flamme se ranime vivement. 4. Conclure au dégagement de dioxygène O2 lors de la photosynthèse."
      ]
    }
  ],
  runtimePolicy: {
    primarySource: "knowledge_base_local",
    apiRequired: false,
    apiRole: "fallback_only",
    resolutionOrder: [
      "detect_chapter",
      "retrieve_relevant_method_and_formula",
      "solve",
      "verify",
      "generate_explanation"
    ]
  }
} as const;

function normalizeQuery(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, " ")
    .split(/\s+/)
    .filter(word => word.length >= 3);
}

export function findSvt2ndeAChapters(query: string, limit = 3): Chapter[] {
  const queryTokens = normalizeQuery(query);
  if (queryTokens.length === 0) {
    return svt2ndeAKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[];
  }

  const scoredChapters = svt2ndeAKnowledgeBase.chapters.map(chapter => {
    let score = 0;
    const titleTokens = normalizeQuery(chapter.title);
    const topicsTokens = chapter.topics.flatMap(normalizeQuery);
    const formulasTokens = chapter.formulas.flatMap(normalizeQuery);
    const methodsTokens = chapter.methods.flatMap(normalizeQuery);

    for (const token of queryTokens) {
      if (titleTokens.includes(token)) score += 10;
      if (topicsTokens.includes(token)) score += 4;
      if (formulasTokens.includes(token)) score += 3;
      if (methodsTokens.includes(token)) score += 3;
    }

    return { chapter, score };
  });

  scoredChapters.sort((a, b) => b.score - a.score);

  const matched = scoredChapters
    .filter(item => item.score > 0)
    .slice(0, limit)
    .map(item => item.chapter as unknown as Chapter);

  return matched.length > 0
    ? matched
    : (svt2ndeAKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[]);
}

export function buildSvt2ndeAContext(query: string): string {
  const chapters = findSvt2ndeAChapters(query, 2);
  if (!chapters || chapters.length === 0) {
    return "";
  }

  const sections = chapters.map(ch => {
    const header = `### LEÇON ${ch.lessonNumber ?? ch.id} : ${ch.title.toUpperCase()} (Niveau : ${svt2ndeAKnowledgeBase.level})\nSource : ${svt2ndeAKnowledgeBase.source}`;
    const topics = `#### NOTIONS CLÉS :\n${ch.topics.map(t => `- ${t}`).join("\n")}`;
    const formulas = `#### FORMULES, PRINCIPES ET RELATIONS BIOLOGIQUES :\n${ch.formulas.map(f => `- ${f}`).join("\n")}`;
    const methods = `#### DÉMARCHES D'ANALYSE ET PROTOCOLES PAS À PAS :\n${ch.methods.map((m, idx) => `${idx + 1}. ${m}`).join("\n")}`;

    return `${header}\n\n${topics}\n\n${formulas}\n\n${methods}`;
  });

  return `=== BASE DE CONNAISSANCES OFFICIELLE SVT SECONDE A (LE PROF) ===\n\n${sections.join("\n\n---\n\n")}\n\n=== FIN DU CONTEXTE OFFICIEL ===`;
}
