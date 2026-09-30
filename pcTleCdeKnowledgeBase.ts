/**
 * BASE DE CONNAISSANCES OFFICIELLE : PHYSIQUE-CHIMIE TERMINALES C, D, E
 * Source : Ministère de l'Éducation Nationale et de l'Alphabétisation - École Numérique Côte d'Ivoire
 * Conforme au programme officiel national et à l'Approche Par Compétences (APC)
 * 
 * Contient les thèmes fondamentaux :
 * 1. CHIMIE ORGANIQUE (Alcools, Composés carbonylés, Amines, Acides carboxyliques & Dérivés, Savons/Saponification, Acides alpha-aminés & Peptides)
 * 2. CHIMIE GÉNÉRALE & SOLUTIONS AQUEUSES (Solutions aqueuses, pH, Acides/Bases forts, Acides/Bases faibles, Ka/pKa, Solutions tampons, Dosages acido-basiques)
 * 3. MÉCANIQUE (Cinématique du point, Théorème du centre d'inertie & Énergie cinétique, Mouvement dans un champ uniforme g et E, Gravitation & Satellites/Kepler, Oscillations mécaniques libres)
 * 4. ÉLECTROMAGNÉTISME (Champ magnétique & Solénoïdes, Force et Loi de Laplace, Induction électromagnétique, Auto-induction, Lois de Lenz & Faraday)
 */

export interface PcLesson {
  lessonNumber: number;
  theme: string;
  title: string;
  objectives: string[];
  keyDefinitions: Record<string, string>;
  formulasAndLaws: Record<string, string>;
  experimentalProtocols: {
    title: string;
    protocol: string;
    observations: string;
    interpretations: string;
    conclusions: string;
  }[];
  commonMistakesToAvoid: string[];
}

export interface PcTheme {
  id: string;
  themeTitle: string;
  discipline: "CHIMIE" | "PHYSIQUE";
  lessons: PcLesson[];
}

export interface PcTleCdeKnowledgeBase {
  name: string;
  levels: string[];
  series: string[];
  country: string;
  version: string;
  themes: PcTheme[];
}

export const pcTleCdeKnowledgeBase: PcTleCdeKnowledgeBase = {
  name: "Référentiel National Physique-Chimie Terminales C, D, E",
  levels: ["Terminale"],
  series: ["C", "D", "E"],
  country: "Côte d'Ivoire (École Numérique)",
  version: "2024-2026 APC",
  themes: [
    // -------------------------------------------------------------
    // THÈME 1 : CHIMIE ORGANIQUE
    // -------------------------------------------------------------
    {
      id: "chimie_organique",
      themeTitle: "Chimie Organique",
      discipline: "CHIMIE",
      lessons: [
        {
          lessonNumber: 1,
          theme: "Chimie Organique",
          title: "Les Alcools",
          objectives: [
            "Définir un alcool, identifier le groupe hydroxyle (-OH) et le carbone fonctionnel",
            "Distinguer et nommer les 3 classes d'alcools (primaire, secondaire, tertiaire)",
            "Connaître les méthodes de préparation (fermentation des sucres, hydratation des alcènes selon Markovnikov)",
            "Écrire les réactions chimiques (sodium, déshydratation intra/intermoléculaire, combustion, oxydation ménagée par Cr2O7 2- et MnO4-)",
            "Identifier les polyols (glycol éthane-1,2-diol, glycérol propane-1,2,3-triol)",
          ],
          keyDefinitions: {
            "Alcool": "Composé organique possédant un groupe hydroxyle (-OH) lié à un atome de carbone tétragonal saturé (formule générale brute CnH2n+2O ou CnH2n+1OH).",
            "Classes d'alcools": "Alcool primaire (R-CH2-OH), secondaire (R1-CH(OH)-R2), tertiaire (R1-R2-R3-C-OH).",
            "Règle de Markovnikov": "Lors de l'addition d'un composé dissymétrique H-X (ou H-OH) sur un alcène dissymétrique, l'atome d'hydrogène se fixe préférentiellement sur le carbone le plus hydrogéné de la double liaison.",
            "Oxydation ménagée": "Oxydation sans rupture du squelette carboné : alcool primaire -> aldéhyde -> acide carboxylique ; alcool secondaire -> cétone ; alcool tertiaire -> non oxydable.",
          },
          formulasAndLaws: {
            "Formule générale brute alcools saturés": "CnH2n+2O ou CnH2n+1OH (M = 14n + 18 g/mol)",
            "Action du sodium": "R-OH + Na -> RO- + Na+ + 1/2 H2",
            "Déshydratation intramoléculaire (Al2O3 / H2SO4)": "Alcool -> Alcène + H2O",
            "Déshydratation intermoléculaire": "2 R-OH -> R-O-R' (étheroxyde) + H2O",
            "Oxydation éthanol par Cr2O7(2-) en défaut": "3 CH3-CH2-OH + Cr2O7(2-) + 8 H3O+ -> 3 CH3-CHO + 2 Cr(3+) + 15 H2O",
            "Oxydation éthanol par Cr2O7(2-) en excès": "3 CH3-CH2-OH + 2 Cr2O7(2-) + 16 H3O+ -> 3 CH3-COOH + 4 Cr(3+) + 27 H2O",
          },
          experimentalProtocols: [
            {
              title: "Oxydation ménagée et identification des produits formés",
              protocol: "Chauffage doux d'un alcool en présence de dichromate de potassium acidifié, puis tests à la 2,4-DNPH, liqueur de Fehling et réactif de Schiff.",
              observations: "Précipité jaune-orangé avec 2,4-DNPH (aldéhyde ou cétone). Précipité rouge brique de Cu2O avec Fehling et virage rose au Schiff uniquement avec aldéhyde.",
              interpretations: "L'alcool primaire donne un aldéhyde réducteur ; l'alcool secondaire donne une cétone non réductrice.",
              conclusions: "Permet de déterminer la classe de l'alcool de départ.",
            },
          ],
          commonMistakesToAvoid: [
            "Les alcools tertiaires ne subissent PAS d'oxydation ménagée en milieu acide dilué.",
            "Ne pas oublier de préciser si l'oxydant est en défaut (arrêt à l'aldéhyde) ou en excès (passage à l'acide carboxylique).",
          ],
        },
        {
          lessonNumber: 2,
          theme: "Chimie Organique",
          title: "Composés carbonylés : Aldéhydes et Cétones",
          objectives: [
            "Définir le groupe carbonyle C=O (formule générale brute CnH2nO)",
            "Nommer les aldéhydes (suffixe -al) et les cétones (suffixe -one)",
            "Caractériser par le test commun à la 2,4-DNPH (précipité jaune-orangé)",
            "Différencier aldéhydes et cétones par leurs propriétés réductrices (Liqueur de Fehling -> précipité rouge brique Cu2O, Réactif de Tollens -> miroir d'argent Ag, Réactif de Schiff -> coloration rose)",
          ],
          keyDefinitions: {
            "Composé carbonylé": "Composé organique oxygéné comportant le groupe carbonyle C=O (CnH2nO, M = 14n + 16 g/mol).",
            "Aldéhyde": "Composé dans lequel le groupe carbonyle est en bout de chaîne (R-CHO).",
            "Cétone": "Composé dans lequel le groupe carbonyle est lié à deux atomes de carbone (R1-CO-R2).",
            "Réactif de Tollens": "Nitrate d'argent ammoniacal [Ag(NH3)2]+ réduit en miroir d'argent métallique Ag par les aldéhydes.",
            "Liqueur de Fehling": "Solution basique contenant des ions Cu(2+) tartriques réduits à chaud en oxyde de cuivre I rouge brique Cu2O.",
          },
          formulasAndLaws: {
            "Réduction Fehling": "R-CHO + 2 Cu(2+) + 5 OH- -> R-COO- + Cu2O(s) + 3 H2O",
            "Réduction Tollens": "R-CHO + 2 [Ag(NH3)2]+ + 3 OH- -> R-COO- + 2 Ag(s) + 4 NH3 + 2 H2O",
            "Formule brute CnH2nO": "n = (M - 16)/14",
          },
          experimentalProtocols: [
            {
              title: "Différenciation aldéhyde / cétone",
              protocol: "Ajout de DNPH, puis de liqueur de Fehling au bain-marie.",
              observations: "Aldéhyde : DNPH (+) et Fehling (+ rouge brique). Cétone : DNPH (+) et Fehling (- pas de réaction).",
              interpretations: "Le groupe aldéhyde possède un pouvoir réducteur que la cétone n'a pas.",
              conclusions: "Test d'identification certain.",
            },
          ],
          commonMistakesToAvoid: [
            "Les cétones NE RÉDUISENT NI la liqueur de Fehling, NI le réactif de Tollens, NI le réactif de Schiff.",
          ],
        },
        {
          lessonNumber: 3,
          theme: "Chimie Organique",
          title: "Les Amines",
          objectives: [
            "Définir une amine dérivant de NH3 (formule générale brute CnH2n+3N)",
            "Identifier les 3 classes d'amines (primaire R-NH2, secondaire R1-NH-R2, tertiaire R1-N(R2)-R3)",
            "Expliquer le caractère basique dû au doublet non liant de l'azote (R-NH2 + H2O <=> R-NH3+ + OH-)",
            "Expliquer le caractère nucléophile (réaction d'alkylation d'Hofmann avec un dérivé halogéné R-X menant aux sels d'ammonium quaternaire)",
          ],
          keyDefinitions: {
            "Amine": "Composé organique dérivé de l'ammoniac par substitution d'un ou plusieurs atomes d'hydrogène par des radicaux alkyles ou aryles (CnH2n+3N, M = 14n + 17 g/mol).",
            "Nucléophilie": "Capacité du doublet libre de l'atome d'azote à attaquer un centre électrophile (carbone déficitaire en électrons dans R-X).",
            "Réaction d'Hofmann": "Alkylation successive des amines par des halogénoalcanes : Amine 1aire -> 2aire -> 3aire -> Sel d'ammonium quaternaire R4N+ X-.",
          },
          formulasAndLaws: {
            "Formule brute": "CnH2n+3N (M = 14n + 17 g/mol ; %N = 1400 / M)",
            "Caractère basique": "R-NH2 + H2O <=> R-NH3+ + OH-",
            "Alkylation Hofmann": "R-NH2 + R'-X -> R-NH-R' + HX (puis formation R3N et R4N+ X-)",
          },
          experimentalProtocols: [
            {
              title: "Mise en évidence du caractère basique et nucléophile",
              protocol: "Mesure du pH d'une solution d'amine et réaction avec l'iodoéthane CH3-CH2-I.",
              observations: "pH > 7 (basique). Formation d'un précipité d'iodure d'alkylammonium.",
              interpretations: "L'azote capte un proton H+ (base) et forme une liaison covalente dative avec le groupement alkyle (nucléophile).",
              conclusions: "Double réactivité fondamentale des amines.",
            },
          ],
          commonMistakesToAvoid: [
            "Attention : la classe d'une amine dépend du nombre de carbones directement liés à l'atome d'azote (et non à un carbone comme pour les alcools).",
          ],
        },
        {
          lessonNumber: 4,
          theme: "Chimie Organique",
          title: "Acides Carboxyliques et Dérivés d'acides",
          objectives: [
            "Définir le groupe carboxyle -COOH (monoacide saturé CnH2nO2, M = 14n + 32 g/mol)",
            "Identifier les 4 dérivés d'acides : Chlorures d'acyle (R-COCl), Anhydrides d'acide (R-CO-O-CO-R'), Esters (R-COO-R'), Amides (R-CO-NH2, R-CO-NHR', R-CO-NR'R'')",
            "Comparer l'estérification directe (acide + alcool <=> ester + eau : lente, limitée, athermique) et l'estérification indirecte (chlorure d'acyle/anhydride + alcool -> ester : rapide, totale, exothermique)",
            "Écrire la synthèse des amides à partir d'acides ou de chlorures d'acyle",
          ],
          keyDefinitions: {
            "Acide carboxylique": "Composé organique comportant le groupement carboxyle -COOH (CnH2nO2).",
            "Chlorure d'acyle": "Dérivé de formule R-COCl obtenu par action de SOCl2 ou PCl5 sur l'acide carboxylique.",
            "Anhydride d'acide": "Dérivé de formule R-CO-O-CO-R' obtenu par déshydratation intermoléculaire de deux acides en présence de P4O10 à chaud.",
            "Estérification directe": "R-COOH + R'-OH <=> R-COO-R' + H2O (réversible, rendement ~67% pour alcool primaire).",
            "Estérification indirecte": "R-COCl + R'-OH -> R-COO-R' + HCl ou (RCO)2O + R'OH -> R-COOR' + R-COOH (totale, rapide).",
          },
          formulasAndLaws: {
            "Masse molaire monoacide CnH2nO2": "M = 14n + 32 g/mol",
            "Synthèse chlorure d'acyle": "R-COOH + SOCl2 -> R-COCl + SO2 + HCl",
            "Synthèse amide à partir de chlorure": "R-COCl + 2 NH3 -> R-CONH2 + NH4Cl (ou R-COCl + R'NH2 -> R-CONHR' + R'NH3+ Cl-)",
            "Hydrolyse d'un ester": "R-COO-R' + H2O <=> R-COOH + R'-OH",
          },
          experimentalProtocols: [
            {
              title: "Synthèse d'un ester par voie directe et indirecte",
              protocol: "Chauffage à reflux d'un mélange acide éthanoïque + éthanol avec H2SO4 vs réaction à température ambiante de chlorure d'éthanoyle + éthanol.",
              observations: "Voie directe : équilibre lent et partiel. Voie indirecte : réaction immédiate très exothermique avec dégagement de vapeurs de HCl.",
              interpretations: "Le chlorure d'acyle est beaucoup plus réactif que l'acide carboxylique.",
              conclusions: "L'estérification indirecte présente un rendement quantitatif de 100%.",
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre estérification directe (équilibre limité) et saponification (totale).",
            "Ne pas oublier la molécule d'HCl libérée lors de la réaction avec un chlorure d'acyle.",
          ],
        },
        {
          lessonNumber: 5,
          theme: "Chimie Organique",
          title: "Fabrication d'un Savon (Saponification des corps gras)",
          objectives: [
            "Définir la saponification : hydrolyse basique d'un ester ou d'un triester de glycérol (triglycéride)",
            "Connaître les caractéristiques de la saponification : réaction lente et TOTALE",
            "Écrire la réaction de saponification d'un triglycéride (ex: palmitine, stéarine, butyrine) par la soude NaOH ou la potasse KOH",
            "Décrire le relargage dans une solution concentrée d'eau salée saturée (NaCl) et calculer la masse de savon produit ($m = 3 \\times \\frac{m_{\\text{huile}}}{M_{\\text{huile}}} \\times M_{\\text{savon}}$)",
          ],
          keyDefinitions: {
            "Saponification": "Réaction chimique entre un ester (ou triglycéride) et une base forte (NaOH ou KOH) produisant un carboxylate métallique (savon) et un alcool (ou glycérol).",
            "Triglycéride (Triester)": "Corps gras constitué par l'estérification des 3 fonctions alcool du glycérol par 3 molécules d'acides gras à longue chaîne carbonée.",
            "Relargage": "Précipitation du savon par addition d'une solution saturée de chlorure de sodium (NaCl) dans laquelle le savon est insoluble.",
            "Savon": "Sel de sodium ou de potassium d'un acide gras (ex: palmitate de sodium C15H31COO- Na+, stéarate de sodium C17H35COO- Na+).",
          },
          formulasAndLaws: {
            "Équation saponification d'un triglycéride": "Triglycéride + 3 (Na+ + OH-) -> Glycérol + 3 (R-COO- + Na+)",
            "Relation stœchiométrique": "n(savon) = 3 * n(triglycéride) <=> m(savon)/M(savon) = 3 * m(huile)/M(huile)",
            "Masse de glycérol produit": "n(glycérol) = n(huile) <=> m(glycérol) = (m(huile)/M(huile)) * 92 g/mol",
          },
          experimentalProtocols: [
            {
              title: "Préparation d'un savon de ménage au laboratoire",
              protocol: "Chauffage à reflux d'huile végétale + solution de soude alcoolique pendant 30 min, puis versement dans un cristallisoir d'eau salée glacée (relargage), filtration sur Büchner.",
              observations: "Précipitation d'un solide pâteux surnageant (savon brut).",
              interpretations: "Les ions Na+ et Cl- diminuent la solubilité du carboxylate d'acide gras.",
              conclusions: "Procédé industriel de saponification et relargage.",
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas oublier le facteur stœchiométrique 3 pour les triglycérides (1 mole de triester donne 3 moles de savon et 1 mole de glycérol).",
          ],
        },
        {
          lessonNumber: 6,
          theme: "Chimie Organique",
          title: "Les Acides alpha-aminés et Peptides",
          objectives: [
            "Définir un acide alpha-aminé : R-CH(NH2)-COOH (acide carboxylique et amine sur le même carbone alpha)",
            "Identifier la structure zwitterionique (amphion +H3N-CHR-COO-) et expliquer le caractère amphotère",
            "Écrire la réaction de condensation et la formation de la liaison peptidique -CO-NH- (dipeptides, polypeptides, protéines)",
            "Décrire le principe de synthèse exclusive d'un dipeptide (blocage/protection et activation sélective des fonctions)",
            "Caractériser par la réaction du Biuret (coloration violette avec Cu2+ en milieu basique)",
          ],
          keyDefinitions: {
            "Acide alpha-aminé": "Composé bifonctionnel comportant un groupe carboxyle -COOH et un groupe amino -NH2 fixés sur le carbone numéro 2 (carbone alpha).",
            "Amphion (Zwitterion)": "Forme dipolaire électriquement neutre résultant d'un transfert intramoléculaire de proton du -COOH vers le -NH2 (+H3N-CH(R)-COO-).",
            "Liaison peptidique": "Liaison amide -CO-NH- résultant de la condensation du carboxyle d'un acide aminé avec l'amine d'un autre avec élimination d'eau.",
            "Dipeptide": "Molécule formée de deux résidus d'acides aminés unis par une liaison peptidique.",
          },
          formulasAndLaws: {
            "Forme cationique (milieu acide pH < pKa1)": "R-CH(NH3+)-COOH",
            "Forme zwitterionique (point isoélectrique)": "R-CH(NH3+)-COO-",
            "Forme anionique (milieu basique pH > pKa2)": "R-CH(NH2)-COO-",
            "Masse molaire dipeptide": "M(dipeptide) = M(AA1) + M(AA2) - 18 g/mol",
          },
          experimentalProtocols: [
            {
              title: "Synthèse exclusive d'un dipeptide A-B",
              protocol: "1. Blocage du -NH2 de A et du -COOH de B ; 2. Activation du -COOH de A (ex: sous forme de chlorure d'acyle) ; 3. Condensation ; 4. Déblocage final.",
              observations: "Obtention sélective du seul dipeptide A-B sans sous-produits parasites (A-A, B-B, B-A).",
              interpretations: "La protection évite les réactions d'autocondensation non désirées.",
              conclusions: "Méthode rigoureuse de synthèse peptidique orientée.",
            },
          ],
          commonMistakesToAvoid: [
            "Lors de la condensation de deux acides aminés différents A et B sans protection, on obtient QUATRE dipeptides : A-A, B-B, A-B et B-A.",
          ],
        },
      ],
    },

    // -------------------------------------------------------------
    // THÈME 2 : CHIMIE GÉNÉRALE & SOLUTIONS AQUEUSES
    // -------------------------------------------------------------
    {
      id: "chimie_generale",
      themeTitle: "Chimie Générale & Solutions Aqueuses",
      discipline: "CHIMIE",
      lessons: [
        {
          lessonNumber: 7,
          theme: "Chimie Générale",
          title: "Solutions aqueuses et Notion de pH",
          objectives: [
            "Définir l'autoprotolyse de l'eau : 2 H2O <=> H3O+ + OH- et le produit ionique Ke = [H3O+][OH-] = 10^(-14) à 25°C",
            "Définir le pH = -log[H3O+] et calculer les concentrations ioniques",
            "Établir l'électroneutralité de toute solution aqueuse : Somme des charges positives = Somme des charges négatives",
            "Établir l'équation de conservation de la matière",
          ],
          keyDefinitions: {
            "Autoprotolyse de l'eau": "Réaction d'équilibre réversible entre molécules d'eau échangeant un proton : 2 H2O <=> H3O+ + OH-.",
            "Produit ionique Ke": "Constante d'équilibre de l'eau Ke = [H3O+][OH-] dépendant uniquement de la température (Ke = 10^(-14) à 25°C, pKe = 14).",
            "Électroneutralité": "Loi fondamentale imposant que la somme des concentrations des cations multipliées par leur charge égale celle des anions.",
          },
          formulasAndLaws: {
            "Relation pH": "pH = -log[H3O+] <=> [H3O+] = 10^(-pH)",
            "Produit ionique": "[OH-] = Ke / [H3O+] = 10^(pH - 14)",
            "Classification pH à 25°C": "Acide si pH < 7 ([H3O+] > [OH-]) ; Neutre si pH = 7 ; Basique si pH > 7 ([H3O+] < [OH-])",
          },
          experimentalProtocols: [
            {
              title: "Vérification de l'électroneutralité d'un mélange de sels",
              protocol: "Dissolution de masses connues de CaCl2 et KCl dans l'eau et calcul des concentrations molaires de chaque ion.",
              observations: "2 [Ca2+] + [K+] = [Cl-].",
              interpretations: "Le milieu reste rigoureusement neutre d'un point de vue électrostatique.",
              conclusions: "Validation de la loi d'électroneutralité.",
            },
          ],
          commonMistakesToAvoid: [
            "N'oubliez pas de multiplier la concentration des ions polyvalents par leur charge (ex: 2[Ca2+] ou 2[SO4 2-]).",
          ],
        },
        {
          lessonNumber: 8,
          theme: "Chimie Générale",
          title: "Acides forts et Bases fortes",
          objectives: [
            "Définir un acide fort (ionisation totale dans l'eau : HA + H2O -> H3O+ + A-) et une base forte (dissociation totale : BOH -> B+ + OH-)",
            "Exprimer le pH d'un monoacide fort : pH = -log Ca (valable pour 10^(-6) <= Ca <= 10^(-2) mol/L)",
            "Exprimer le pH d'une monobase forte : pH = 14 + log Cb (valable pour 10^(-6) <= Cb <= 10^(-2) mol/L)",
            "Calculer le pH des mélanges d'acides forts ou de bases fortes",
          ],
          keyDefinitions: {
            "Acide fort": "Espèce chimique dont la réaction avec l'eau est totale et quantitative (ex: HCl, HNO3, HBr, HI, H2SO4 pour sa 1ère acidité).",
            "Base forte": "Espèce chimique dont la dissociation dans l'eau est totale (ex: NaOH, KOH, Ca(OH)2, ion éthanolate C2H5O-).",
          },
          formulasAndLaws: {
            "pH acide fort": "pH = -log Ca",
            "pH base forte": "pH = 14 + log Cb",
            "Mélange d'acides forts": "[H3O+] = (Sum ni(H3O+)) / V_total = (C1V1 + C2V2 + ...) / VT -> pH = -log [H3O+]",
            "Mélange de bases fortes": "[OH-] = (C1V1 + C2V2 + ...) / VT -> pH = 14 + log [OH-]",
          },
          experimentalProtocols: [
            {
              title: "Dilution et vérification de la force d'un acide",
              protocol: "Mesure du pH d'une solution de HCl à C = 10^(-2) mol/L puis après dilution par 10.",
              observations: "pH initial = 2,0 ; après dilution par 10, pH = 3,0 (augmentation de 1 unité de pH).",
              interpretations: "Le pH varie strictement de 1 unité par facteur 10 de dilution car l'acide est entièrement dissocié.",
              conclusions: "Caractéristique propre aux acides forts.",
            },
          ],
          commonMistakesToAvoid: [
            "Le pH d'un mélange de deux bases fortes n'est JAMAIS la somme des deux pH : on calcule la concentration globale en OH- puis pH = 14 + log[OH-].",
          ],
        },
        {
          lessonNumber: 9,
          theme: "Chimie Générale",
          title: "Acides faibles, Bases faibles et Constante d'acidité Ka/pKa",
          objectives: [
            "Définir un acide faible et une base faible (ionisation partielle / équilibre chimique)",
            "Définir le coefficient d'ionisation alpha = [A-]/C0 et montrer qu'il augmente avec la dilution",
            "Définir la constante d'acidité Ka = [A-][H3O+]/[AH] et pKa = -log Ka",
            "Utiliser la relation d'Henderson-Hasselbalch : pH = pKa + log([Base]/[Acide])",
            "Tracer et exploiter les diagrammes de prédominance et zones de virage des indicateurs colorés",
          ],
          keyDefinitions: {
            "Acide faible": "Acide dont la réaction avec l'eau est réversible et aboutit à un équilibre chimique (ex: CH3COOH, HCOOH, NH4+).",
            "Constante d'acidité Ka": "Constante thermodynamique d'équilibre du couple Acide/Base dans l'eau : Ka = ([B][H3O+]) / [A].",
            "Diagramme de prédominance": "Axe de pH gradué en fonction du pKa : Si pH < pKa -> [Acide] > [Base] ; Si pH = pKa -> [Acide] = [Base] ; Si pH > pKa -> [Base] > [Acide].",
            "Indicateur coloré": "Couple acide/base faible HIn/In- dont les formes acide et basique présentent des couleurs différentes, avec une zone de virage comprise entre pKa - 1 et pKa + 1.",
          },
          formulasAndLaws: {
            "Relation fondamentale": "pH = pKa + log([B]/[A]) <=> [B]/[A] = 10^(pH - pKa)",
            "Coefficient de dissociation": "alpha = [A-]/C0 = 10^(-pH)/C0 (pour un acide faible)",
            "Force relative": "Plus un acide est fort, plus son Ka est grand et son pKa est faible. Plus une base est forte, plus son pKa est grand.",
          },
          experimentalProtocols: [
            {
              title: "Détermination expérimentale du pKa par demi-équivalence ou méthode graphique",
              protocol: "Mesure du pH de mélanges acide/base conjuguée de volumes variables à concentration identique et tracé de pH = f(log(Vb/Va)).",
              observations: "Droite affine de pente 1 : pH = pKa + log(Vb/Va). L'ordonnée à l'origine (pour Va = Vb) donne directement le pKa.",
              interpretations: "Vérification directe de la relation d'Henderson-Hasselbalch.",
              conclusions: "Méthode de référence pour déterminer le pKa d'un couple acido-basique.",
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre la force d'un acide (mesurée par son pKa) et sa concentration molaire C.",
          ],
        },
        {
          lessonNumber: 10,
          theme: "Chimie Générale",
          title: "Dosages acido-basiques et Solutions Tampons",
          objectives: [
            "Maîtriser les 3 types de titrages : 1. Acide fort / Base forte (pHE = 7) ; 2. Acide faible / Base forte (pHE > 7, basique) ; 3. Base faible / Acide fort (pHE < 7, acide)",
            "Appliquer la relation à l'équivalence : Ca * Va = Cb * VbE",
            "Déterminer les coordonnées du point d'équivalence E par la méthode des tangentes parallèles ou de la dérivée dpH/dV",
            "Exploiter le point de demi-équivalence F (Vb = VbE/2) où pH = pKa pour un dosage d'acide ou base faible",
            "Définir une solution tampon, ses 3 méthodes de préparation et ses propriétés remarquables (pH stable lors d'une dilution modérée ou d'un ajout modéré d'acide/base)",
            "Choisir l'indicateur coloré approprié (dont la zone de virage englobe le pHE à l'équivalence)",
          ],
          keyDefinitions: {
            "Équivalence acido-basique": "État du mélange où les réactifs acide et base ont été introduits dans des proportions stœchiométriques exactes (disparition simultanée).",
            "Solution tampon": "Mélange équimolaire d'un acide faible et de sa base conjuguée (pH = pKa) dont le pH varie très peu par dilution modérée ou addition modérée d'acide fort ou de base forte.",
            "Point de demi-équivalence": "Point atteint lorsqu'on a versé la moitié du volume équivalent (V = V_E / 2) où [Acide] = [Base conjuguée] et pH = pKa.",
          },
          formulasAndLaws: {
            "Relation d'équivalence": "Ca * Va = Cb * VbE <=> Ca = (Cb * VbE) / Va",
            "Demi-équivalence": "V_demi = VbE / 2 -> pH = pKa",
            "Préparation d'un tampon": "1. Acide faible + Base forte (Vb = VbE / 2) ; 2. Base faible + Acide fort (Va = VaE / 2) ; 3. Mélange équimolaire direct n(AH) = n(A-)",
          },
          experimentalProtocols: [
            {
              title: "Dosage pH-métrique de l'acide éthanoïque par la soude NaOH",
              protocol: "Prélèvement de 20 mL d'acide, ajout progressif de soude 0,1 mol/L à la burette avec suivi au pH-mètre, tracé de pH = f(Vb).",
              observations: "Courbe à 4 parties et 2 points d'inflexion : demi-équivalence F (pH = 4,8 = pKa) et équivalence E (VbE = 20 mL, pHE = 8,7).",
              interpretations: "À l'équivalence, la solution contient des ions éthanoate basiques, d'où pHE > 7. L'indicateur approprié est la phénolphtaléine.",
              conclusions: "Permet de déterminer à la fois la concentration Ca et le pKa du couple.",
            },
          ],
          commonMistakesToAvoid: [
            "Pour un acide faible dosé par une base forte, le pH à l'équivalence est TOUJOURS BASIQUE (pHE > 7) à 25°C, jamais neutre.",
            "L'indicateur coloré doit avoir sa zone de virage qui CONTIENT le pHE de l'équivalence (ex: BBT pour fort/fort, Phénolphtaléine pour faible/fort, Hélianthine pour fort/faible).",
          ],
        },
      ],
    },

    // -------------------------------------------------------------
    // THÈME 3 : MÉCANIQUE
    // -------------------------------------------------------------
    {
      id: "mecanique",
      themeTitle: "Mécanique du Point & Systèmes",
      discipline: "PHYSIQUE",
      lessons: [
        {
          lessonNumber: 11,
          theme: "Mécanique",
          title: "Cinématique du Point Matériel",
          objectives: [
            "Définir le vecteur-position OM, le vecteur-vitesse v = dOM/dt et le vecteur-accélération a = dv/dt = d2OM/dt2",
            "Exprimer les vecteurs dans le repère cartésien et dans la base de Frenet (a = at * tau + an * n avec at = dv/dt et an = v^2 / R)",
            "Établir les équations horaires du Mouvement Rectiligne Uniforme (MRU : a = 0, v = v0, x = v0*t + x0)",
            "Établir les équations horaires du Mouvement Rectiligne Uniformément Varié (MRUV : a = cte, v = a*t + v0, x = 1/2*a*t^2 + v0*t + x0 et relation indépendante du temps v2^2 - v1^2 = 2*a*(x2 - x1))",
            "Caractériser le Mouvement Circulaire Uniforme (MCU : v = R*omega, an = R*omega^2 = v^2/R, T = 2*pi/omega, s = v*t + s0)",
          ],
          keyDefinitions: {
            "Vecteur-accélération": "Dérivée première du vecteur-vitesse par rapport au temps : a = dv/dt = d2OM/dt2.",
            "Base de Frenet": "Repère mobile lié au point M constitué du vecteur unitaire tangent tau et du vecteur unitaire normal n dirigé vers le centre de courbure.",
            "Mouvement accéléré / retardé": "Accéléré si a . v > 0 (a et v de même sens) ; Retardé (décéléré) si a . v < 0 (sens opposés).",
            "Relation indépendante du temps": "vB^2 - vA^2 = 2 * ax * (xB - xA) pour tout mouvement rectiligne uniformément varié.",
          },
          formulasAndLaws: {
            "MRU": "a = 0 ; v = v0 ; x(t) = v0*t + x0",
            "MRUV": "a = cte ; v(t) = a*t + v0 ; x(t) = 1/2*a*t^2 + v0*t + x0 ; vB^2 - vA^2 = 2*a*AB",
            "Base de Frenet": "a_tangentielle = dv/dt ; a_normale = v^2 / R",
            "Mouvement circulaire uniforme": "v = R*omega ; a = an = v^2/R = R*omega^2 ; T = 2*pi/omega = 2*pi*R/v ; f = 1/T",
          },
          experimentalProtocols: [
            {
              title: "Étude d'un enregistrement mobile sur table à coussin d'air",
              protocol: "Mesure des intervalles de position successifs Delta x à intervalle de temps tau constant.",
              observations: "Si Delta x est constant -> MRU. Si Delta x augmente régulièrement -> MRUV accéléré.",
              interpretations: "Calcul des vitesses instantanées vi = (M_{i+1} M_{i-1}) / (2*tau) et accélérations ai = (v_{i+1} - v_{i-1}) / (2*tau).",
              conclusions: "Validation expérimentale des lois horaires cinématiques.",
            },
          ],
          commonMistakesToAvoid: [
            "Dans un mouvement circulaire uniforme, l'accélération n'est PAS nulle : elle est centripète et vaut an = v^2/R.",
          ],
        },
        {
          lessonNumber: 12,
          theme: "Mécanique",
          title: "Théorème du Centre d'Inertie & Théorème de l'Énergie Cinétique",
          objectives: [
            "Définir un référentiel galiléen (Copernic, géocentrique, terrestre du laboratoire)",
            "Énoncer le Théorème du Centre d'Inertie (2ème loi de Newton) : Sum F_ext = m * a_G",
            "Énoncer le Théorème de l'Énergie Cinétique : Delta Ec = Ec_B - Ec_A = Sum W_AB(F_ext)",
            "Appliquer le protocole systématique de mécanique (Système -> Référentiel -> Bilan des forces -> Projection sur axes)",
            "Résoudre les mouvements sur plans inclinés et pistes curvilignes avec ou sans frottements",
          ],
          keyDefinitions: {
            "Référentiel galiléen": "Référentiel dans lequel le principe de l'inertie de Newton est rigoureusement vérifié.",
            "Théorème du centre d'inertie (TCI)": "Dans un référentiel galiléen, la somme vectorielle des forces extérieures appliquées à un solide est égale au produit de sa masse par l'accélération de son centre d'inertie (Sum F_ext = m * a_G).",
            "Théorème de l'énergie cinétique (TEC)": "La variation d'énergie cinétique entre deux points A et B est égale à la somme des travaux des forces extérieures : 1/2 m vB^2 - 1/2 m vA^2 = Sum W_AB(F).",
          },
          formulasAndLaws: {
            "TCI": "Sum F_ext = m * a_G",
            "Plan incliné d'angle alpha sans frottement": "ax = g * sin(alpha) ; R = m * g * cos(alpha)",
            "Plan incliné avec frottement f": "ax = g * sin(alpha) - f/m",
            "Travail du poids": "W(P) = m * g * (zA - zB) = + m * g * h (mouvement descendant) ou - m * g * h (ascendant)",
            "Travail d'une force de frottement constante": "W(f) = - f * AB",
          },
          experimentalProtocols: [
            {
              title: "Glissement d'un solide sur plan incliné et looping circulaire",
              protocol: "Lâcher d'un solide de masse m en haut d'un plan incliné raccordé à une piste circulaire de rayon r.",
              observations: "Augmentation de la vitesse jusqu'au bas de la pente, puis décélération dans la boucle.",
              interpretations: "Application du TEC pour trouver la vitesse en tout point et du TCI dans la base de Frenet pour trouver la réaction R(theta) = 2 FL/r - mg(2 - 3 cos theta).",
              conclusions: "Condition de non-décollement : R >= 0 au sommet de la boucle.",
            },
          ],
          commonMistakesToAvoid: [
            "La réaction normale de la piste R ne travaille jamais si le contact est parfait sans frottement (W(R) = 0 car R perpendiculaire au déplacement).",
          ],
        },
        {
          lessonNumber: 13,
          theme: "Mécanique",
          title: "Mouvement d'un Projectile et de Particules Chargées dans un Champ Uniforme",
          objectives: [
            "Établir les équations horaires et la trajectoire parabolique d'un projectile dans le champ de pesanteur uniforme g : y(x) = - (g / (2 v0^2 cos^2 alpha)) * x^2 + x * tan alpha + h",
            "Calculer la portée horizontale OP = (v0^2 * sin(2*alpha)) / g (maximale pour alpha = 45°) et la flèche H = y_S = (v0^2 * sin^2 alpha) / (2g) + h",
            "Étudier le mouvement d'une particule chargée (électron) dans un champ électrostatique uniforme E : a = (q * E) / m (poids négligeable devant la force électrique F = qE)",
            "Calculer la déviation angulaire tan alpha = (e * U * l) / (m * d * v0^2) et la déflexion électrostatique sur l'écran Y = (e * U * l * L) / (m * d * v0^2) = k * U (principe de l'oscilloscope)",
          ],
          keyDefinitions: {
            "Champ uniforme": "Région de l'espace où le vecteur champ a les mêmes direction, sens et norme en tout point.",
            "Portée": "Distance horizontale entre le point de lancement et le point d'impact du projectile sur le plan horizontal.",
            "Flèche": "Altitude maximale atteinte par le projectile au sommet de sa trajectoire (où vy = 0).",
            "Déflexion électrostatique Y": "Déplacement linéaire du spot sur l'écran de l'oscilloscope, proportionnel à la tension déviatrice U appliquée aux plaques : Y = k * U.",
          },
          formulasAndLaws: {
            "Équation de la trajectoire projectile": "y(x) = - (g / (2 v0^2 cos^2 alpha)) * x^2 + (tan alpha) * x + y0",
            "Flèche (sommet S)": "yS = (v0^2 * sin^2 alpha) / (2g) (si y0 = 0)",
            "Portée maximale (au sol y=0)": "xP = (v0^2 * sin 2alpha) / g (portée max pour alpha = pi/4 = 45° : xP_max = v0^2 / g)",
            "Accélération particule chargée": "a = |q| * E / m avec E = U / d",
            "Déflexion oscilloscope": "Y = (e * l * L) / (m * d * v0^2) * U = k * U",
          },
          experimentalProtocols: [
            {
              title: "Déviation d'un faisceau d'électrons dans les plaques d'un tube cathodique",
              protocol: "Accélération des électrons par tension U_acc puis déviation par tension U_plaques.",
              observations: "Déplacement vertical du spot lumineux sur l'écran proportionnel à la tension appliquée.",
              interpretations: "Trajectoire parabolique entre les plaques puis rectiligne uniforme jusqu'à l'écran.",
              conclusions: "Fondement expérimental des oscilloscopes et canons à électrons.",
            },
          ],
          commonMistakesToAvoid: [
            "Pour un électron (q = -e < 0), la force électrostatique F = qE est dirigée en SENS INVERSE du champ électrique E.",
          ],
        },
        {
          lessonNumber: 14,
          theme: "Mécanique",
          title: "Interaction Gravitationnelle, Satellites et Lois de Kepler",
          objectives: [
            "Énoncer la loi d'attraction universelle de Newton : F = G * (mA * mB) / r^2 (G = 6,67.10^(-11) N.m^2.kg^(-2))",
            "Exprimer le champ de gravitation en fonction de l'altitude : g(z) = g0 * (RT / (RT + z))^2",
            "Démontrer que le mouvement d'un satellite en orbite circulaire est circulaire uniforme : v = sqrt(G*MT / r) = RT * sqrt(g0 / (RT + z))",
            "Établir la 3ème loi de Kepler : T^2 / r^3 = 4*pi^2 / (G*MT) = constante",
            "Définir un satellite géostationnaire (immobile pour un observateur terrestre, dans le plan équatorial, T = 24 h = 86164 s, altitude z ~ 36 000 km)",
          ],
          keyDefinitions: {
            "Loi de gravitation de Newton": "Deux corps ponctuels s'attirent avec une force proportionnelle au produit de leurs masses et inversement proportionnelle au carré de leur distance : F = G * (m1 * m2) / r^2.",
            "Satellite géostationnaire": "Satellite qui tourne dans le sens de rotation de la Terre, dans le plan de l'équateur, avec une période égale à celle de rotation propre de la Terre (T ~ 86164 s), paraissant immobile au-dessus d'un point fixe de l'équateur (altitude z = 35 800 km ~ 36 000 km).",
            "3ème loi de Kepler": "Le rapport entre le carré de la période de révolution et le cube du demi-grand axe (ou rayon) est constant pour tous les satellites d'un même astre attracteur : T^2 / r^3 = 4*pi^2 / (G*M).",
          },
          formulasAndLaws: {
            "Force gravitationnelle": "F = G * (M * m) / r^2",
            "Champ à l'altitude z": "gz = G * MT / (RT + z)^2 = g0 * [RT / (RT + z)]^2",
            "Vitesse orbitale satellite": "v = sqrt(G * MT / (RT + z)) = RT * sqrt(g0 / (RT + z))",
            "Période de révolution": "T = (2 * pi * r) / v = 2 * pi * sqrt(r^3 / (G * MT))",
            "3ème loi de Kepler": "T^2 / r^3 = 4 * pi^2 / (G * MT)",
          },
          experimentalProtocols: [
            {
              title: "Détermination de la masse de la Terre ou d'une planète par ses satellites",
              protocol: "Mesure de la période T et du rayon orbital r d'un satellite.",
              observations: "Le rapport T^2 / r^3 est constant.",
              interpretations: "Application de la 3ème loi de Kepler : M = (4 * pi^2 * r^3) / (G * T^2).",
              conclusions: "Permet de peser les astres célestes avec une précision remarquable.",
            },
          ],
          commonMistakesToAvoid: [
            "Le rayon r dans les formules est la distance AU CENTRE DE LA TERRE : r = RT + z (et non simplement l'altitude z).",
          ],
        },
        {
          lessonNumber: 15,
          theme: "Mécanique",
          title: "Oscillations Mécaniques Libres (Pendule élastique)",
          objectives: [
            "Établir l'équation différentielle du pendule élastique horizontal non amorti : m * x'' + k * x = 0 <=> x'' + (k/m) * x = 0",
            "Résoudre l'équation : x(t) = Xm * cos(omega0 * t + phi) avec pulsation propre omega0 = sqrt(k/m) et période propre T0 = 2*pi*sqrt(m/k)",
            "Déterminer les constantes Xm et phi à partir des conditions initiales",
            "Démontrer la conservation de l'énergie mécanique : Em = Ec + Epe = 1/2 * k * Xm^2 = 1/2 * m * Vm^2 = constante",
          ],
          keyDefinitions: {
            "Oscillateur mécanique libre": "Système mécanique effectuant un mouvement périodique de va-et-vient autour de sa position d'équilibre stable sans apport extérieur d'énergie après l'impulsion initiale.",
            "Période propre T0": "Durée d'une oscillation complète non amortie : T0 = 2*pi*sqrt(m/k).",
            "Énergie potentielle élastique": "Énergie emmagasinée par le ressort déformé : Epe = 1/2 * k * x^2.",
            "Énergie mécanique totale": "Somme de l'énergie cinétique et de l'énergie potentielle élastique : Em = 1/2 m v^2 + 1/2 k x^2 = 1/2 k Xm^2 (constante en l'absence de frottement).",
          },
          formulasAndLaws: {
            "Équation différentielle": "x'' + (k/m) * x = 0",
            "Pulsation propre": "omega0 = sqrt(k/m) (rad/s)",
            "Période propre": "T0 = 2*pi / omega0 = 2*pi*sqrt(m/k) (s)",
            "Fréquence propre": "N0 = 1 / T0 = (1 / 2pi) * sqrt(k/m) (Hz)",
            "Équation horaire": "x(t) = Xm * cos(omega0*t + phi) ; v(t) = x'(t) = - omega0 * Xm * sin(omega0*t + phi)",
            "Conservation de l'énergie": "Em = 1/2 k Xm^2 = 1/2 m Vmax^2",
          },
          experimentalProtocols: [
            {
              title: "Étude énergétique du pendule élastique horizontal",
              protocol: "Enregistrement de x(t) et calcul simultané de Ec(t) et Epe(t).",
              observations: "Échange continuel entre énergie cinétique et énergie potentielle élastique ; leur somme reste rigoureusement constante.",
              interpretations: "Transformation mutuelle intégrale de l'énergie en l'absence de forces dissipatives.",
              conclusions: "Système conservatif parfait.",
            },
          ],
          commonMistakesToAvoid: [
            "Attention à la phase à l'origine phi : déterminer son signe en utilisant simultanément les conditions initiales sur la position x(0) et sur la vitesse v(0).",
          ],
        },
      ],
    },

    // -------------------------------------------------------------
    // THÈME 4 : ÉLECTROMAGNÉTISME
    // -------------------------------------------------------------
    {
      id: "electromagnetisme",
      themeTitle: "Électromagnétisme & Induction",
      discipline: "PHYSIQUE",
      lessons: [
        {
          lessonNumber: 16,
          theme: "Électromagnétisme",
          title: "Champ Magnétique et Solénoïde",
          objectives: [
            "Définir le vecteur champ magnétique B (direction, sens Sud->Nord de l'aiguille aimantée, norme en Tesla)",
            "Caractériser le champ magnétique uniforme à l'intérieur d'un solénoïde long (L >= 10 R) : B = mu0 * (N / L) * I = mu0 * n * I (mu0 = 4*pi*10^(-7) S.I.)",
            "Déterminer le sens de B par la règle de la main droite ou du bonhomme d'Ampère",
            "Exploiter la superposition du champ créé B0 et du champ magnétique terrestre Bh : tan alpha = B0 / Bh",
          ],
          keyDefinitions: {
            "Champ magnétique": "Champ vectoriel créé par des aimants ou des courants électriques, caractérisé en tout point par le vecteur B dont la norme se mesure en Tesla (T) au teslamètre.",
            "Solénoïde": "Bobine cylindrique de grande longueur par rapport à son rayon (L >= 10 R) créant en son centre un champ magnétique rigoureusement uniforme.",
            "Règle de la main droite": "Le pouce dans le sens de B lorsque les doigts enroulés suivent le sens du courant I dans les spires.",
          },
          formulasAndLaws: {
            "Champ dans un solénoïde": "B = mu0 * (N/L) * I = mu0 * n * I (avec mu0 = 4*pi*10^(-7) H/m)",
            "Déviation de l'aiguille (boussole de tangentes)": "tan alpha = B_solenoide / B_terrestre_horizontal (B = Bh * tan alpha)",
            "Champ résultant": "B_total = sqrt(B0^2 + Bh^2)",
          },
          experimentalProtocols: [
            {
              title: "Tracé de la caractéristique B = f(I) d'un solénoïde",
              protocol: "Mesure de B au teslamètre au centre d'un solénoïde pour différentes valeurs du courant I.",
              observations: "Droite linéaire passant par l'origine : B = k * I.",
              interpretations: "La constante de proportionnalité k vaut mu0 * n = mu0 * N / L.",
              conclusions: "Permet de déterminer le nombre de spires N ou la perméabilité mu0.",
            },
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre N (nombre total de spires) et n (nombre de spires par mètre : n = N / L).",
          ],
        },
        {
          lessonNumber: 17,
          theme: "Électromagnétisme",
          title: "Force et Loi de Laplace",
          objectives: [
            "Énoncer la loi de Laplace : F = I * l vect B (norme F = I * l * B * sin alpha, direction perpendiculaire au plan (l, B), sens donné par la règle des 3 doigts de la main droite)",
            "Étudier les applications : Rails de Laplace, Balance de Cotton (mesure de B : B = (m * g * d') / (I * l * d)), Roue de Barlow, Haut-parleur électrodynamique",
            "Expliquer l'effet et les applications des courants de Foucault (freinage électromagnétique des poids lourds/trains, fours à induction, plaques de cuisson)",
          ],
          keyDefinitions: {
            "Force de Laplace": "Force électromagnétique subie par un conducteur rectiligne de longueur active l parcouru par un courant d'intensité I et plongé dans un champ magnétique B : F = I * l vect B.",
            "Balance de Cotton": "Dispositif de pesée électromagnétique permettant de mesurer l'intensité d'un champ magnétique B en compensant la force de Laplace par une masse étalon.",
            "Courants de Foucault": "Courants électriques induits tourbillonnaires créés dans la masse d'un conducteur plein en mouvement dans un champ magnétique ou soumis à un flux variable.",
          },
          formulasAndLaws: {
            "Loi de Laplace vectorielle": "F = I * l vect B",
            "Norme de la force de Laplace": "F = I * l * B * sin(alpha) (maximale pour l perpendiculaire à B : F = I * l * B)",
            "Équilibre de la balance de Cotton": "B = (m * g) / (I * l) (si bras égaux d = d')",
            "Tige suspendue déviée d'un angle alpha": "tan alpha = F / P = (I * l * B) / (m * g)",
          },
          experimentalProtocols: [
            {
              title: "Mesure de B par la balance de Cotton",
              protocol: "Mise sous tension du circuit de la balance placé dans l'entrefer d'un aimant et équilibrage par ajout de masses m dans le plateau.",
              observations: "Relation linéaire entre la masse d'équilibrage m et l'intensité I du courant : m = (l*B / g) * I.",
              interpretations: "Le moment de la force de Laplace compense exactement le moment du poids de la masse ajoutée.",
              conclusions: "Détermination précise du champ B de l'aimant.",
            },
          ],
          commonMistakesToAvoid: [
            "La force de Laplace ne s'exerce que sur la partie du conducteur plongée DANS le champ magnétique (longueur active l).",
          ],
        },
        {
          lessonNumber: 18,
          theme: "Électromagnétisme",
          title: "Induction Électromagnétique et Lois de Faraday & Lenz",
          objectives: [
            "Définir le flux magnétique Phi = B . S = N * B * S * cos theta (en Weber Wb)",
            "Énoncer la loi de Lenz (le courant induit s'oppose par ses effets à la cause qui lui donne naissance)",
            "Énoncer la loi de Faraday (force électromotrice induite e = - dPhi / dt)",
            "Calculer le courant induit i = e / (R + r) = - (1 / (R+r)) * dPhi/dt",
            "Étudier les applications : Génératrices et alternateurs (production sinusoïdale e = N*B*S*omega*cos(omega*t)), Transformateurs (rapport de transformation k = U2/U1 = N2/N1 = I1/I2)",
          ],
          keyDefinitions: {
            "Flux magnétique Phi": "Grandeur scalaire mesurant le nombre de lignes de champ magnétique traversant une surface S : Phi = N * B * S * cos(theta) (en Webers, Wb).",
            "Loi de Faraday": "Toute variation de flux magnétique à travers un circuit fermé engendre une force électromotrice induite e = - dPhi / dt.",
            "Loi de Lenz": "Le sens du courant induit est tel que, par ses effets magnétiques ou mécaniques, il s'oppose à la cause qui le produit.",
            "Transformateur parfait": "Appareil statique sans pertes modifiant les tensions et courants alternatifs : U2 / U1 = N2 / N1 = I1 / I2 = k.",
          },
          formulasAndLaws: {
            "Flux magnétique": "Phi = N * B * S * cos(theta) (Wb)",
            "Loi de Faraday": "e(t) = - dPhi / dt (V)",
            "Loi d'Ohm pour circuit induit": "i(t) = e / (R + r) = - (1 / (R + r)) * (dPhi / dt)",
            "Tension induite rails de Laplace": "e = B * l * v (mouvement à vitesse v constante)",
            "Rapport de transformation": "k = U2 / U1 = N2 / N1 (abaisseur si k < 1, élévateur si k > 1)",
          },
          experimentalProtocols: [
            {
              title: "Visualisation de la f.é.m. induite par variation de courant triangulaire",
              protocol: "Alimentation d'un solénoïde primaire par un courant triangulaire et observation de la tension induite aux bornes d'une bobine secondaire à l'oscilloscope.",
              observations: "Pour di/dt constant positif -> e2 = - constante négative. Pour di/dt constant négatif -> e2 = + constante positive (créneaux carrés alternés).",
              interpretations: "Validation directe de e = - k * (di/dt).",
              conclusions: "La tension induite est la dérivée temporelle opposée du flux.",
            },
          ],
          commonMistakesToAvoid: [
            "Un transformateur NE FONCTIONNE PAS en courant continu (car dPhi/dt = 0 -> e = 0).",
            "Ne pas oublier le signe moins (-) dans la loi de Faraday e = - dPhi/dt (traduction mathématique de la loi de Lenz).",
          ],
        },
      ],
    },
  ],
};
