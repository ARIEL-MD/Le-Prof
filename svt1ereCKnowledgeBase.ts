/**
 * LE PROF — BASE DE CONNAISSANCES OFFICIELLE : SVT PREMIÈRE C
 * Source : Mon École à la Maison — Côte d'Ivoire École Numérique / MENA (Ministère de l'Éducation Nationale et de l'Alphabétisation)
 * 
 * Contient les 8 leçons fondamentales du programme officiel ivoirien de 1ère C :
 * 1. La structure interne du globe terrestre (Ondes P, S, L, hodographes, discontinuités Moho, Gutenberg, Lehmann)
 * 2. La fécondation chez les mammifères (Migration, capacitation, réaction acrosomique, activation, caryogamie, VIH)
 * 3. Les échanges d'ions au niveau du sol (Complexe argilo-humique, ponts calciques, pouvoir adsorbant, expérience de Way)
 * 4. L'écosystème naturel et l'écosystème agro-industriel (Forêt vs agrosystème, strates, biomasse, productivités PPB/PPN, rendements)
 * 5. La gamétogenèse chez les mammifères (Spermatogenèse, ovogenèse, méiose, crossing-over, brassages, caryotypes)
 * 6. La synthèse des protéines (Acteurs, code génétique, transcription, traduction, mutations géniques, hémoglobine)
 * 7. La transmission d'un caractère héréditaire (Monohybridisme, dominance, codominance, test-cross, système ABO)
 * 8. La photosynthèse : production de la matière organique (Facteurs lumière, CO2, température, chloroplastes, phase claire, cycle de Calvin)
 */

export type Chapter = {
  id: string;
  lessonNumber?: number;
  title: string;
  theme?: string;
  duration?: string;
  pages?: [number, number] | readonly [number, number];
  topics: string[] | readonly string[];
  formulas: string[] | readonly string[];
  methods: string[] | readonly string[];
};

export const svt1ereCKnowledgeBase = {
  name: "LE PROF — Knowledge Base SVT 1ère C",
  version: "1.0.0",
  source: "Mon École à la Maison — Côte d'Ivoire École Numérique / MENA",
  level: "Première C",
  chapters: [
    {
      id: "ch1",
      lessonNumber: 1,
      title: "La structure interne du globe terrestre",
      theme: "La géodynamique interne",
      duration: "6H",
      topics: [
        "Manifestations des activités internes de la Terre : séismes et volcans provoquant des déformations de la surface externe et des dégâts majeurs",
        "Enregistrement des ondes sismiques par sismographes pendulaires (3 coordonnées orthogonales : horizontal N-S, horizontal E-O, vertical)",
        "Les trois familles d'ondes sismiques :",
        "1. Ondes P (primaires) : longitudinales de compression-décompression, les plus rapides, se propagent dans les solides, les liquides et les gaz",
        "2. Ondes S (secondaires) : transversales de cisaillement, vitesse intermédiaire, ne se propagent que dans les solides",
        "3. Ondes L (longues) : ondes de surface à grande amplitude et longue durée, très lentes, guidées par la croûte, très destructrices",
        "Hodographes sismiques : courbes du temps de propagation en fonction de la distance épicentrale. Ondes L linéaires (vitesse constante en milieu superficiel homogène) ; ondes P et S curvilignes (vitesse croissante en profondeur avec la densité des roches)",
        "Les trois discontinuités révélatrices de la structure concentrique :",
        "- Discontinuité de Mohorovicic (Moho) : entre 10 et 70 km de profondeur (croûte/manteau supérieur)",
        "- Discontinuité de Gutenberg : à 2900 km de profondeur, chute de vitesse des ondes P et disparition complète des ondes S (preuve du noyau externe liquide)",
        "- Discontinuité de Lehmann : à 5100-5400 km de profondeur, réapparition des ondes S (preuve de la graine ou noyau interne solide)",
        "Les 4 enveloppes concentriques : croûte terrestre (continentale granitique et océanique basaltique), manteau (supérieur asthénosphérique et inférieur mésosphérique), noyau externe liquide et noyau interne (graine) solide"
      ],
      formulas: [
        "Vitesse sismique : v = distance épicentrale (d) / temps de propagation (t)",
        "Retard des ondes S sur P : Δt = t_S - t_P",
        "Profondeurs clés : Moho (10-70 km) | Gutenberg (2900 km) | Lehmann (5100-5400 km) | Centre Terre (6370 km)"
      ],
      methods: [
        "Exploiter des hodographes sismiques pour déterminer la distance à l'épicentre d'un séisme à partir du décalage temporel Δt = t_S - t_P.",
        "Démontrer l'état physique des couches terrestres en corrélant la vitesse des ondes P et S aux discontinuités de Gutenberg et Lehmann."
      ]
    },
    {
      id: "ch2",
      lessonNumber: 2,
      title: "La fécondation chez les mammifères",
      theme: "La reproduction chez les mammifères",
      duration: "4H",
      topics: [
        "Définition de la fécondation : union intime d'un gamète mâle haploïde (spermatozoïde n) et d'un gamète femelle haploïde (ovocyte II n) aboutissant à la formation d'une cellule œuf ou zygote diploïde (2n)",
        "Les 6 étapes chronologiques de la fécondation :",
        "1. Migration des gamètes :",
        "   - L'ovocyte II est capté par le pavillon de la trompe utérine lors de l'ovulation et acheminé par les cils vibratiles vers l'ampoule tubaire",
        "   - Les spermatozoïdes éjaculés dans le vagin remontent activement grâce à leur flagelle à travers le col de l'utérus, la cavité utérine et les trompes",
        "   - Réduction drastique du nombre : de 200 à 350 millions éjaculés, seule une centaine atteint l'ampoule tubaire (élimination par l'acidité vaginale, la glaire cervicale et la phagocytose utérine)",
        "   - Phénomène de capacitation : modification de la membrane acrosomique dans les voies génitales femelles conférant aux spermatozoïdes leur plein pouvoir fécondant",
        "2. Rencontre des gamètes : s'effectue obligatoirement au tiers supérieur de la trompe (ampoule tubaire)",
        "3. Pénétration d'un seul spermatozoïde :",
        "   - Traversée de la corona radiata (cellules folliculaires)",
        "   - Reconnaissance spécifique des gamètes au niveau de la zone pellucide",
        "   - Réaction acrosomique : libération d'enzymes hydrolytiques (hyaluronidase, acrosine) perforant la zone pellucide",
        "   - Fusion des membranes plasmiques de l'ovocyte II et du spermatozoïde",
        "4. Activation de l'ovocyte II et blocage de la polyspermie :",
        "   - Réaction corticale : exocytose immédiate des granules corticaux dans l'espace péri-ovocytaire, modifiant la zone pellucide et formant la membrane de fécondation imperméable aux autres spermatozoïdes (blocage absolu de la polyspermie)",
        "   - Reprise et achèvement de la deuxième division de méiose : expulsion du deuxième globule polaire (GP2) ; l'ovocyte II devient un ovule mûr",
        "5. Formation des pronucléi : gonflement du noyau de l'ovule (pronucléus femelle haploïde n) et du noyau du spermatozoïde (pronucléus mâle haploïde n)",
        "6. Caryogamie / amphimixie : rapprochement et fusion des deux pronucléi pour former le zygote diploïde (2n chromosomes)",
        "Début du développement embryonnaire : première mitose de clivage (stade 2 cellules)",
        "Rôle et importance biologique de la fécondation :",
        "- Rétablissement du nombre diploïde de chromosomes (2n) caractéristique de l'espèce",
        "- Conservation et permanence du caryotype de génération en génération",
        "- Maintien de la biodiversité et polymorphisme individuel par combinaison aléatoire des allèles parentaux",
        "- Détermination chromosomique du sexe du nouvel individu (XX = femelle, XY = mâle) selon le gonosome apporté par le spermatozoïde (X ou Y)",
        "Problèmes médicaux et santé de la reproduction :",
        "- Causes de stérilité féminine : obstruction des trompes de Fallope (salpingite, adhérences) empêchant physiquement la rencontre des gamètes",
        "- Transmission du VIH : voies de transmission mère-enfant (voie transplacentaire sanguine pendant la grossesse, lors de l'accouchement par contact sanguin, ou pendant l'allaitement maternel)"
      ],
      formulas: [
        "Formule de la fécondation : Spermatozoïde (n = 23) + Ovocyte II (n = 23) -> Zygote (2n = 46)",
        "Chronologie officielle ordonnée : Migration des gamètes -> Rencontre des gamètes -> Pénétration du spermatozoïde -> Activation de l'ovocyte II -> Formation des pronucléi -> Caryogamie -> Stade 2 cellules",
        "Détermination du sexe : Ovocyte (X) + Spermatozoïde (X) -> Fille (XX) | Ovocyte (X) + Spermatozoïde (Y) -> Garçon (XY)"
      ],
      methods: [
        "Ordonner chronologiquement les étapes de la fécondation d'après des micrographies ou schémas légendés.",
        "Justifier le diagnostic cytologique ovocyte II vs ovule : 1. Présence d'un seul globule polaire -> ovocyte II bloqué en métaphase II. 2. Présence de deux globules polaires -> ovule mûr ayant achevé la méiose suite à la pénétration du spermatozoïde.",
        "Expliquer le mécanisme empêchant la polyspermie : L'entrée du premier spermatozoïde déclenche l'éclatement des granules corticaux dans l'espace sous-zonaire, entraînant le durcissement de la zone pellucide qui devient infranchissable pour les autres spermatozoïdes."
      ]
    },
    {
      id: "ch3",
      lessonNumber: 3,
      title: "Les échanges d'ions au niveau du sol",
      theme: "Les propriétés chimiques des sols",
      duration: "6H",
      topics: [
        "Constitution fondamentale du complexe argilo-humique (CAH) : association intime de colloïdes minéraux (argile) et organiques (humus)",
        "Propriétés électrostatiques des colloïdes : les micelles d'argile et d'humus sont électronégatives (portent des charges négatives)",
        "Liaison par ponts calciques : les micelles se repoussant mutuellement dans l'eau, leur association est assurée par l'intermédiaire de cations bivalents (principalement Ca2+)",
        "Mise en évidence expérimentale des charges du sol :",
        "- Bleu de méthylène (cations colorés positifs) : adsorbé par le sol, filtrat incolore",
        "- Éosine (anions colorés négatifs) : repoussée par le sol, filtrat rouge",
        "Rôle régulateur et pouvoir adsorbant du CAH :",
        "- Fixe à sa surface les cations nutritifs de la solution du sol (Ca2+, K+, Mg2+, NH4+)",
        "- Évite le lessivage des nutriments par les pluies tropicales",
        "- Maintient l'équilibre dynamique entre le complexe adsorbant et la solution du sol : désorption en cas de déficit (absorption racinaire), adsorption en cas d'excès (engrais)",
        "Expérience de Way : percolation d'une solution de KCl sur terre argilo-humique montrant l'adsorption de potassium K+ et la libération proportionnelle d'ions calcium Ca2+ dans le filtrat sans modification des ions chlorures Cl-"
      ],
      formulas: [
        "Structure du CAH : [Feuillet d'argile]⁻ --- Ca²⁺ --- [Micelle d'humus]⁻",
        "Échange cationique de Way : CAH-Ca²⁺ + 2 K⁺ <=> CAH-2K⁺ + Ca²⁺",
        "Conservation de charge : 1 ion bivalent Ca²⁺ libéré = 2 ions monovalents (K⁺ ou Na⁺) adsorbés"
      ],
      methods: [
        "Interpréter les variations ioniques d'un filtrat lors de l'expérience de Way pour prouver le pouvoir d'échange cationique du sol.",
        "Expliquer le rôle tampon et régulateur du CAH vis-à-vis de la nutrition minérale des plantes cultivées."
      ]
    },
    {
      id: "ch4",
      lessonNumber: 4,
      title: "L'écosystème naturel et l'écosystème agro-industriel",
      theme: "Les écosystèmes",
      duration: "6H",
      topics: [
        "Définition d'un écosystème : unité fonctionnelle formée par l'interaction dynamique entre un biotope (milieu physico-chimique) et une biocénose (communauté des êtres vivants)",
        "Comparaison détaillée entre écosystème naturel (forêt naturelle, ex: parc de Taï) et agrosystème (champ de maïs, palmeraie, rizière) :",
        "- Exploitation : forêt non exploitée par l'Homme vs agrosystème intensément exploité et géré",
        "- Biodiversité : très forte biodiversité végétale et animale en forêt vs monoculture à biodiversité réduite au profit d'une seule espèce végétale",
        "- Stratification verticale : plusieurs strates végétales superposées en forêt (arborescente, arbustive, arbrisseaux, herbacée, litière) vs une seule strate homogène dans l'agrosystème",
        "- Niveaux trophiques : présence de tous les niveaux en forêt (producteurs primaires P, consommateurs I herbivores, consommateurs II/III carnivores, décomposeurs lombrics/champignons/bactéries) vs prédominance absolue des producteurs et élimination volontaire des consommateurs (parasites, ravageurs) dans l'agrosystème",
        "- Cycle de la matière : cycle FERMÉ en forêt (la matière organique morte est recyclée intégralement sur place par les décomposeurs) vs cycle OUVERT dans l'agrosystème (exportation massive de biomasse récoltée nécessitant des apports constants d'engrais, d'eau d'irrigation et de pesticides)",
        "Biomasse et pyramide des énergies :",
        "- Biomasse : masse totale de matière organique sèche présente par unité de surface à un instant donné (g/m² ou kg/ha)",
        "- Équivalences énergétiques officielles : 1 g de matière sèche végétale = 17 à 20 kJ ; 1 g de matière sèche animale = 23,5 kJ",
        "- Pyramide des énergies : représentation graphique de l'énergie emmagasinée à chaque niveau trophique ; l'énergie diminue considérablement du bas vers le haut (perte de ~90% à chaque maillon par respiration cellulaire, chaleur et déchets non assimilés)",
        "- Conséquence trophique : les chaînes alimentaires courtes (agrosystèmes producteurs -> Homme) sont beaucoup plus rentables énergétiquement que les chaînes longues de la forêt naturelle",
        "Productivités et rendements écologiques :",
        "- Productivité primaire brute (PPB) : quantité totale de matière organique produite par les végétaux chlorophylliens par unité de surface et de temps (vitesse de photosynthèse)",
        "- Productivité primaire nette (PPN) : quantité de matière restant disponible pour les consommateurs après déduction de la part consommée par la respiration (R) des producteurs : PPN = PPB - R",
        "- Rendement énergétique théorique : R_th = (Énergie produite / Énergie solaire incidente) x 100 (très faible, de l'ordre de 0,004% à 0,007%)",
        "- Rendement énergétique réel : R_r = (Énergie produite / Énergie ingérée ou absorbée) x 100 (~2% à 3,5%)"
      ],
      formulas: [
        "Productivité primaire nette : PPN = PPB - R (où R = respiration des producteurs)",
        "Rendement énergétique théorique : R_th = (Énergie produite / Énergie solaire incidente) x 100",
        "Rendement énergétique réel : R_r = (Énergie produite / Énergie ingérée) x 100",
        "Équivalences énergétiques : 1 g matière sèche végétale = 20 kJ (ou 17 kJ) | 1 g matière sèche animale = 23,5 kJ"
      ],
      methods: [
        "Construire une pyramide des énergies : 1. Choisir l'échelle graphique (ex: 1 cm pour 3.10³ kJ ou 90 000 kJ). 2. Dessiner des rectangles horizontaux centrés de hauteur constante (2 ou 3 cm) dont la longueur est proportionnelle à l'énergie de chaque niveau (P à la base, puis C1, puis C2). 3. Indiquer les valeurs chiffrées, les niveaux trophiques et le titre complet.",
        "Calculer le pourcentage d'énergie lumineuse récupérée à chaque niveau trophique : (Énergie emmagasinée par le niveau / Énergie solaire incidente) x 100.",
        "Justifier l'intérêt agronomique et écologique d'un agrosystème : Production ciblée d'une grande quantité de biomasse utile pour l'alimentation humaine grâce à des chaînes trophiques courtes, compensée par des apports d'intrants pour équilibrer le cycle ouvert de la matière."
      ]
    },
    {
      id: "ch5",
      lessonNumber: 5,
      title: "La gamétogenèse chez les mammifères",
      theme: "La reproduction chez les mammifères",
      duration: "12H",
      topics: [
        "Organisation anatomique et histologique de l'appareil reproducteur mâle et femelle",
        "Comparaison globale de la spermatogenèse et de l'ovogenèse :",
        "- Spermatogenèse : continue de la puberté à la mort, 4 phases : multiplication (mitoses spermatogonies 2n), accroissement (spermatocyte I 2n), maturation (méiose : 2 spermatocytes II n puis 4 spermatides n), différenciation/spermiogenèse (acrosome, flagelle, manchon mitochondrial). 1 spermatocyte I -> 4 spermatozoïdes",
        "- Ovogenèse : discontinue (multiplication et accroissement in utero chez le fœtus, blocage en prophase I, longue période de repos, reprise à la puberté à chaque cycle). Méiose I donne ovocyte II (n) + GP1 (n) ; méiose II bloquée en métaphase II, achevée uniquement lors de la fécondation avec expulsion du GP2 (n) -> 1 ovotide/ovule mûr",
        "Étapes cytologiques détaillées de la méiose :",
        "- 1ère division (réductionnelle) : Prophase I (appariement des homologues en bivalents, chiasmas, crossing-over/brassage intrachromosomique) -> Métaphase I (plaque équatoriale) -> Anaphase I (séparation aléatoire des chromosomes entiers à 2 chromatides sans clivage du centromère = brassage interchromosomique) -> Télophase I",
        "- 2ème division (équationnelle) : Prophase II -> Métaphase II -> Anaphase II (clivage des centromères et séparation des chromatides sœurs) -> Télophase II (formation de 4 cellules haploïdes n)",
        "Anomalies méiotiques et conséquences : méiose atypique par non-disjonction chromosomique en anaphase I ou II conduisant à des anomalies de nombre (Trisomie 21, Turner XO, Klinefelter XXY) et de structure (délétion du bras court chr 5, translocations)"
      ],
      formulas: [
        "Méiose réductionnelle : Cellule mère diploïde (2n chromosomes à 2 chromatides) -> 2 cellules haploïdes (n chromosomes à 2 chromatides)",
        "Méiose équationnelle : 2 cellules haploïdes (n à 2 chromatides) -> 4 cellules haploïdes (n à 1 chromatide)",
        "Formule chromosomique normale : Homme = 44A + XY (46 chr) | Femme = 44A + XX (46 chr)"
      ],
      methods: [
        "Reconnaître et ordonner les phases de la méiose : 1. Paires d'homologues appariés avec chiasmas = Prophase I. 2. Bivalents de part et d'autre de l'équateur = Métaphase I. 3. Séparation de chromosomes entiers dédoublés = Anaphase I. 4. Chromosomes simples alignés sur l'équateur = Métaphase II. 5. Séparation des chromatides simples = Anaphase II.",
        "Dresser le tableau comparatif rigoureux spermatogenèse / ovogenèse."
      ]
    },
    {
      id: "ch6",
      lessonNumber: 6,
      title: "La synthèse des protéines",
      theme: "La transmission des caractères héréditaires",
      duration: "9H",
      topics: [
        "Les acteurs de la synthèse protéique :",
        "- ADN (acide désoxyribonucléique) : molécule informative nucléaire bicaténaire",
        "- ARN messager (ARNm) : copie monocaténaire complémentaire du brin transcrit, contenant du ribose et de l'uracile (U) à la place de la thymine (T)",
        "- ARN de transfert (ARNt) : molécule adaptatrice en trèfle portant l'anticodon et l'acide aminé correspondant",
        "- Ribosome : complexe macromoléculaire à deux sous-unités (petite et grande) avec sites P et A",
        "- Énergie métabolique sous forme d'ATP et enzymes catalytiques (ARN polymérase, peptidases)",
        "Le code génétique universel :",
        "- 64 codons au total, 61 désignant des acides aminés, 1 codon initiateur AUG (méthionine), 3 codons stop (UAA, UAG, UGA)",
        "- Propriétés : universel, redondant/dégénéré (plusieurs codons pour un même acide aminé), non ambigu",
        "Mécanisme en deux étapes fondamentales :",
        "1. La transcription (dans le noyau) : synthèse d'ARNm à partir du brin transcrit/codant de l'ADN catalysée par l'ARN polymérase par complémentarité de bases",
        "2. La traduction (dans le cytoplasme au niveau des ribosomes) en trois étapes :",
        "   - Initiation : liaison de l'ARNm à la petite sous-unité au codon AUG, mise en place de l'ARNt-Met au site P, assemblage du ribosome complet",
        "   - Élongation : fixation du deuxième ARNt au site A, formation de la liaison peptidique, translocation du ribosome d'un codon vers 3', libération du site A",
        "   - Terminaison : arrivée à un codon stop (UAA, UAG, UGA), dissociation du complexe ribosomal, libération de la chaîne polypeptidique et élimination de la méthionine initiale",
        "Conséquence des mutations génétiques : modification de la séquence d'ADN altérant la chaîne d'acides aminés (exemple de la drépanocytose : mutation au niveau du 17e nucléotide du gène de l'hémoglobine β, valine remplaçant l'acide glutamique en position 6)"
      ],
      formulas: [
        "Complémentarité transcription : ADN transcrit 3'-TAC...-5' -> ARNm 5'-AUG...-3'",
        "Liaison peptidique : -COOH + -NH2 -> -CO-NH- + H2O"
      ],
      methods: [
        "Établir la séquence peptidique à partir d'un brin d'ADN : 1. Repérer le brin transcrit. 2. Transcrire en ARNm par complémentarité. 3. Découper en codons de 3 nucléotides. 4. Traduire chaque codon en acide aminé avec le code génétique."
      ]
    },
    {
      id: "ch7",
      lessonNumber: 7,
      title: "La transmission d'un caractère héréditaire (Monohybridisme)",
      theme: "La transmission des caractères héréditaires",
      duration: "6H",
      topics: [
        "Notions fondamentales : gène, allèle, locus, génotype, phénotype, homozygote, hétérozygote",
        "Transmission d'un gène autosomal avec dominance complète (ex: couleur du pelage chez la souris) :",
        "- Croisement 1 : Lignée pure grise [B] x Lignée pure blanche [b] -> F1 100% grise [B] (uniformité des hybrides, dominance de B sur b)",
        "- Croisement 2 : F1 (B//b) x F1 (B//b) -> F2 avec ségrégation 3/4 [B] et 1/4 [b] (75% / 25%)",
        "- Test-cross : F1 (B//b) x homozygote récessif (b//b) -> ségrégation 1/2 [B] et 1/2 [b] (50% / 50%)",
        "Transmission d'un gène autosomal avec codominance (ex: couleur des fleurs chez la Belle de nuit) :",
        "- Croisement 1 : Fleurs rouges [R] x Fleurs blanches [B] -> F1 100% fleurs roses [RB] (phénotype intermédiaire)",
        "- Croisement 2 : F1 (R//B) x F1 (R//B) -> F2 avec ségrégation 1/4 [R] (25%), 1/2 [RB] (50%), 1/4 [B] (25%)",
        "Génétique humaine : les groupes sanguins ABO (locus situé sur le chromosome n°9) :",
        "- Trois allèles : A, B (codominants entre eux, produisant les agglutinogènes A et B membranaires des hématies) et O (récessif, ne produisant aucun agglutinogène)",
        "- Génotypes et phénotypes : Groupe A (A//A ou A//O), Groupe B (B//B ou B//O), Groupe AB (A//B), Groupe O (O//O)"
      ],
      formulas: [
        "Ségrégation F2 dominance complète = 3/4 dominant + 1/4 récessif",
        "Ségrégation F2 codominance = 1/4 phénotype P1 + 1/2 phénotype intermédiaire + 1/4 phénotype P2",
        "Ségrégation Test-cross = 1/2 phénotype dominant + 1/2 phénotype récessif",
        "Système ABO : Allèles A et B codominants, allèle O récessif par rapport à A et B"
      ],
      methods: [
        "Résoudre un problème de monohybridisme : 1. Analyser la F1 pour déterminer la relation de dominance. 2. Choisir les symboles d'allèles conformes aux règles officielles. 3. Écrire les génotypes parentaux et les gamètes produits. 4. Dresser l'échiquier de croisement et vérifier la concordance des fréquences théoriques et statistiques expérimentales."
      ]
    },
    {
      id: "ch8",
      lessonNumber: 8,
      title: "La photosynthèse : production de la matière organique",
      theme: "La production de la matière organique",
      duration: "9H",
      topics: [
        "Mise en évidence de la synthèse d'amidon par les feuilles vertes éclairées (test à l'eau iodée virant au bleu-violacé)",
        "Facteurs régissant l'activité photosynthétique : intensité lumineuse (point de compensation, intensité saturante), teneur en CO2 (facteur limitant physiologique), température (optimum enzymatique 30-37°C)",
        "Ultrastructure du chloroplaste et pigments : stroma, thylakoïdes empilés en grana ; pigments séparés par chromatographie (chlorophylles a et b, xanthophylles, carotène) ; spectres d'absorption (fortes absorptions dans le bleu et le rouge, aucune dans le vert)",
        "Mécanisme complet en 2 phases :",
        "1. Phase lumineuse (photochimique dans les thylakoïdes) : capture des photons, photolyse de l'eau avec rejet d'O2 (H2O -> 2H+ + 1/2 O2 + 2e-), phosphorylation de l'ADP en ATP par la sphère pédonculée, réduction du transporteur T+ en TH2",
        "2. Phase sombre (cycle de Calvin dans le stroma) : fixation du CO2 sur le ribulose-diphosphate (Rudip en C5) par la Rubisco, formation d'acide phosphoglycérique (APG en C3), réduction en trioses phosphates (C3P) grâce à l'ATP et au TH2, régénération du Rudip et synthèse des glucides (glucose, amidon), acides aminés et lipides",
        "Équation globale bilan : 6 CO2 + 6 H2O + lumière -> C6H12O6 + 6 O2"
      ],
      formulas: [
        "Photolyse de l'eau : H2O -> 2 H⁺ + 1/2 O2 + 2 e⁻",
        "Équation bilan globale : 6 CO2 + 6 H2O -> C6H12O6 + 6 O2"
      ],
      methods: [
        "Analyser des courbes expérimentales d'intensité photosynthétique en fonction de la lumière, du CO2 ou de la température.",
        "Schématiser l'ultrastructure du chloroplaste et expliciter le couplage fonctionnel entre phase claire et cycle de Calvin."
      ]
    }
  ]
} as const;

/**
 * Normalise un texte en jetons de mots-clés sans accents ni ponctuation
 */
function normalizeQuery(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, " ")
    .split(/\s+/)
    .filter(word => word.length >= 3);
}

/**
 * Fonction de recherche du/des chapitre(s) pertinent(s) pour un énoncé donné en 1ère C SVT
 */
export function findSvt1ereCChapters(query: string, limit = 3): Chapter[] {
  const queryTokens = normalizeQuery(query);
  if (queryTokens.length === 0) {
    return svt1ereCKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[];
  }

  const scoredChapters = svt1ereCKnowledgeBase.chapters.map(chapter => {
    let score = 0;
    const titleTokens = normalizeQuery(chapter.title);
    const themeTokens = chapter.theme ? normalizeQuery(chapter.theme) : [];
    const topicsTokens = chapter.topics.flatMap(normalizeQuery);
    const formulasTokens = chapter.formulas.flatMap(normalizeQuery);
    const methodsTokens = chapter.methods.flatMap(normalizeQuery);

    for (const token of queryTokens) {
      if (titleTokens.includes(token)) score += 10;
      if (themeTokens.includes(token)) score += 6;
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
    : (svt1ereCKnowledgeBase.chapters.slice(0, limit) as unknown as Chapter[]);
}

/**
 * Construit le contexte texte officiel de 1ère C SVT pour enrichir la réponse et la méthodologie
 */
export function buildSvt1ereCContext(query: string): string {
  const chapters = findSvt1ereCChapters(query, 2);
  if (!chapters || chapters.length === 0) {
    return "";
  }

  const sections = chapters.map(ch => {
    const header = `### LEÇON ${ch.lessonNumber ?? ch.id} : ${ch.title.toUpperCase()} (Thème : ${ch.theme || "SVT 1ère C"} - Niveau : ${svt1ereCKnowledgeBase.level})\nSource : ${svt1ereCKnowledgeBase.source}`;
    const topics = `#### NOTIONS FONDAMENTALES & PROTOCOLES :\n${ch.topics.map(t => `- ${t}`).join("\n")}`;
    const formulas = `#### FORMULES, PRINCIPES ET LOIS SCIENTIFIQUES :\n${ch.formulas.map(f => `- ${f}`).join("\n")}`;
    const methods = `#### DÉMARCHES D'ANALYSE MÉTHODOLOGIQUE PAS À PAS :\n${ch.methods.map((m, idx) => `${idx + 1}. ${m}`).join("\n")}`;

    return `${header}\n\n${topics}\n\n${formulas}\n\n${methods}`;
  });

  return `=== BASE DE CONNAISSANCES OFFICIELLE SVT PREMIÈRE C (LE PROF) ===\n\n${sections.join("\n\n---\n\n")}\n\n=== FIN DU CONTEXTE OFFICIEL ===`;
}
