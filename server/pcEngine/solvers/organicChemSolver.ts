/**
 * Solveurs déterministes pour la Chimie Organique (Terminale C, D, E)
 * Alcools, Composés carbonylés, Amines, Acides & Dérivés, Savons/Saponification, Acides alpha-aminés & Peptides
 */

import { buildPcStructuredResult } from "../resultBuilder";
import { PcStructuredResult } from "../types";

export function solveOrganicChemExercise(statement: string): PcStructuredResult {
  const text = statement.toLowerCase();

  // Cas 1 : Saponification / Fabrication de savon / Triglycérides
  if (/savon|saponifi|triglyc|triester|palmitine|st[ée]arine|butyrine|corps gras/i.test(text)) {
    const isPalmitine = /palmit/i.test(text);
    const isStearine = /st[ée]ar/i.test(text);
    const isButyrine = /butyr/i.test(text);

    let triesterName = isPalmitine ? "la palmitine (tripalmitate de glycéryle)" : isStearine ? "la stéarine (tristéarate de glycéryle)" : "la butyrine (tributyrate de glycéryle)";
    let acidFormula = isPalmitine ? "CH3-(CH2)14-COOH" : isStearine ? "CH3-(CH2)16-COOH" : "CH3-(CH2)2-COOH";
    let soapFormula = isPalmitine ? "CH3-(CH2)14-COO- Na+" : isStearine ? "CH3-(CH2)16-COO- Na+" : "CH3-(CH2)2-COO- Na+";
    let soapName = isPalmitine ? "palmitate de sodium" : isStearine ? "stéarate de sodium" : "butanoate de sodium";

    const steps = [
      {
        title: "Identification du corps gras et de l'acide gras constitutif",
        observationOrData: `Étude d'un corps gras constitué à partir de l'acide gras de formule ${acidFormula}.`,
        scientificConceptOrRule: "Un triglycéride (triester de glycérol) résulte de l'estérification des 3 fonctions alcool du glycérol (propane-1,2,3-triol) par 3 molécules d'acide gras.",
        deductionOrCalculation: `- L'acide gras est : ${acidFormula}.\n- Le triester correspondant est ${triesterName} de structure générale :\n  CH2-O-CO-R\n  |\n  CH-O-CO-R\n  |\n  CH2-O-CO-R`,
        conclusionOrJustification: `Le corps gras est bien un triester de formule semi-développée identifiée.`,
      },
      {
        title: "Équation-bilan et caractéristiques de la réaction de saponification",
        observationOrData: "Action d'une solution concentrée d'hydroxyde de sodium (soude) à chaud.",
        scientificConceptOrRule: "La saponification est l'hydrolyse d'un ester en milieu basique. C'est une réaction lente mais TOTALE (rendement quantitatif de 100%).",
        deductionOrCalculation: `Équation-bilan de la réaction :\nTriglycéride + 3 (Na+ + OH-) -> Glycérol (HO-CH2-CHOH-CH2-OH) + 3 (${soapFormula})\n\nRelation stœchiométrique fondamentale :\n$$n(\\text{savon}) = 3 \\times n(\\text{triglycéride}) = 3 \\times \\frac{m_{\\text{corps gras}}}{M_{\\text{corps gras}}}$$`,
        conclusionOrJustification: `Formation de glycérol et du savon (${soapName}).`,
      },
      {
        title: "Calcul de la masse de savon produit et procédé de relargage",
        observationOrData: "Précipitation du savon après refroidissement du mélange réactionnel.",
        scientificConceptOrRule: "Le relargage consiste à verser le mélange dans une solution saturée de chlorure de sodium (NaCl) dans laquelle le savon, très peu soluble, précipite sous forme solide.",
        deductionOrCalculation: `Masse théorique de savon obtenu :\n$$m_{\\text{savon}} = 3 \\times \\frac{m_{\\text{huile}}}{M_{\\text{huile}}} \\times M_{\\text{savon}}$$\nMasse de glycérol coproduit :\n$$m_{\\text{glycérol}} = \\frac{m_{\\text{huile}}}{M_{\\text{huile}}} \\times M_{\\text{glycérol}} \\quad (M = 92\\text{ g/mol})$$`,
        conclusionOrJustification: "Le savon obtenu possède des propriétés amphiphiles (tête hydrophile et queue lipophile détergente).",
      },
    ];

    return buildPcStructuredResult({
      title: "Chimie Organique : Fabrication d'un Savon (Saponification d'un Triglycéride)",
      themeId: "chimie_organique",
      themeTitle: "Chimie Organique",
      discipline: "CHIMIE",
      lessonNumber: 5,
      lessonTitle: "Fabrication d'un Savon",
      problemStatement: statement,
      scientificHypothesis: "La saponification d'un triester par une base forte est une réaction lente et totale produisant 3 moles de savon et 1 mole de glycérol.",
      steps,
      finalConclusion: `La saponification de l'huile par la soude est une réaction totale produisant le ${soapName} (savon) et du glycérol récupérable après relargage.`,
      keyScientificTerms: ["Saponification", "Triglycéride", "Glycérol", "Carboxylate de sodium (savon)", "Relargage à l'eau salée", "Réaction totale"],
      commonPitfallsAvoided: ["Ne pas oublier le coefficient stœchiométrique 3 devant la soude et le savon pour un triglycéride."],
    });
  }

  // Cas 2 : Acides alpha-aminés & Peptides
  if (/acide.*amin|dipeptide|peptid|zwitterion|amphion/i.test(text)) {
    const steps = [
      {
        title: "Structure de l'acide alpha-aminé et état zwitterionique",
        observationOrData: "Molécule bifonctionnelle comportant un groupement carboxyle -COOH et un groupement amine -NH2 sur le carbone alpha (n°2).",
        scientificConceptOrRule: "À l'état pur ou en solution neutre, l'acide aminé existe sous la forme d'un ion dipolaire globalement neutre appelé amphion ou zwitterion (+H3N-CHR-COO-).",
        deductionOrCalculation: "- En milieu acide (pH < pKa1) : forme cationique prédominante +H3N-CHR-COOH.\n- En milieu basique (pH > pKa2) : forme anionique prédominante H2N-CHR-COO-.",
        conclusionOrJustification: "Les acides alpha-aminés possèdent un caractère amphotère.",
      },
      {
        title: "Formation de la liaison peptidique et condensation",
        observationOrData: "Réaction de condensation entre deux acides alpha-aminés A et B.",
        scientificConceptOrRule: "La liaison peptidique est la fonction amide -CO-NH- reliant le carboxyle d'un acide aminé à l'amine du second avec élimination d'une molécule d'eau.",
        deductionOrCalculation: "Pour synthétiser exclusivement le dipeptide A-B sans sous-produits parasites :\n1. Bloquer (protéger) la fonction -NH2 de A et la fonction -COOH de B.\n2. Activer la fonction -COOH de A (ex: chlorure d'acyle).\n3. Réaliser le couplage peptidique.\n4. Débloquer les fonctions protégées.",
        conclusionOrJustification: "Obtention sélective du dipeptide cible.",
      },
      {
        title: "Masse molaire et analyse quantitative du dipeptide",
        observationOrData: "Calcul de la formule brute et de la masse molaire.",
        scientificConceptOrRule: "$$M(\\text{dipeptide}) = M(A) + M(B) - M(H_2O) = M(A) + M(B) - 18\\text{ g/mol}$$",
        deductionOrCalculation: "L'analyse élémentaire (%C, %H, %N, %O) permet de déterminer avec précision le radical alkyle R de la chaîne latérale.",
        conclusionOrJustification: "Identification structurale complète du peptide.",
      },
    ];

    return buildPcStructuredResult({
      title: "Chimie Organique : Acides alpha-aminés et Synthèse Peptidique",
      themeId: "chimie_organique",
      themeTitle: "Chimie Organique",
      discipline: "CHIMIE",
      lessonNumber: 6,
      lessonTitle: "Les Acides alpha-aminés et Peptides",
      problemStatement: statement,
      scientificHypothesis: "La synthèse contrôlée d'un dipeptide exige le blocage et l'activation sélective des fonctions antagonistes.",
      steps,
      finalConclusion: "La condensation peptidique unit les résidus d'acides aminés par des liaisons -CO-NH-, caractérisables par la réaction du Biuret.",
      keyScientificTerms: ["Acide alpha-aminé", "Amphion / Zwitterion", "Liaison peptidique (-CO-NH-)", "Blocage et activation", "Réaction du Biuret"],
      commonPitfallsAvoided: ["Sans protection sélective préalable, 2 acides aminés différents donnent 4 dipeptides distincts."],
    });
  }

  // Cas 3 : Amines (Basiques & Nucléophiles, Hofmann)
  if (/amine|m[ée]thanamine|[ée]thanamine|tri[ée]thylamine|hofmann/i.test(text)) {
    const steps = [
      {
        title: "Formule brute générale et identification de la classe de l'amine",
        observationOrData: "Amine saturée contenant un atome d'azote : formule brute générale CnH2n+3N.",
        scientificConceptOrRule: "La classe d'une amine est déterminée par le nombre de groupes alkyles directement liés à l'atome d'azote : primaire (R-NH2), secondaire (R1-NH-R2), tertiaire (R1-R2-R3-N).",
        deductionOrCalculation: "Masse molaire : $M = 14n + 17\\text{ g/mol}$.\nPourcentage en azote : $\\%N = \\frac{1400}{M} \\implies M = \\frac{1400}{\\%N}$.\nOn déduit ensuite le nombre d'atomes de carbone $n = \\frac{M - 17}{14}$.",
        conclusionOrJustification: "Formule brute et squelette carboné établis.",
      },
      {
        title: "Caractère basique de l'amine dans l'eau",
        observationOrData: "Réaction avec l'eau : élévation du pH au-dessus de 7.",
        scientificConceptOrRule: "Le doublet électronique libre porté par l'atome d'azote capte un proton H+ de l'eau (base de Brönsted).",
        deductionOrCalculation: "Équation-bilan :\n$$R\\text{-}NH_2 + H_2O \\rightleftharpoons R\\text{-}NH_3^+ + OH^-$$\nLe pH est lié à la constante d'acidité par $pH = pKa + \\log\\frac{[\\text{Amine}]}{[\\text{Ion alkylammonium}]}$.",
        conclusionOrJustification: "Les amines sont des bases faibles en solution aqueuse.",
      },
      {
        title: "Caractère nucléophile : Réaction d'alkylation d'Hofmann",
        observationOrData: "Action d'un halogénoalcane (ex: iodoéthane CH3-CH2-I ou chlorométhane).",
        scientificConceptOrRule: "Le doublet de l'azote (centre nucléophile) attaque le carbone électrophile porteur de l'halogène pour former un sel d'ammonium quaternaire par alkylations successives.",
        deductionOrCalculation: "Exemple avec une amine tertiaire :\n$$R_3N + R'\\text{-}I \\longrightarrow R_3R'N^+ + I^- \\quad (\\text{iodure de tétraalkylammonium})$$",
        conclusionOrJustification: "Mise en évidence expérimentale du pouvoir nucléophile du doublet de l'azote.",
      },
    ];

    return buildPcStructuredResult({
      title: "Chimie Organique : Propriétés chimiques des Amines (Basiques et Nucléophiles)",
      themeId: "chimie_organique",
      themeTitle: "Chimie Organique",
      discipline: "CHIMIE",
      lessonNumber: 3,
      lessonTitle: "Les Amines",
      problemStatement: statement,
      scientificHypothesis: "Le doublet non liant de l'atome d'azote confère simultanément aux amines un caractère basique (fixation de H+) et nucléophile (attaque sur R-X).",
      steps,
      finalConclusion: "Les amines réagissent comme bases faibles avec l'eau et comme réactifs nucléophiles lors de l'alkylation d'Hofmann conduisant aux sels d'ammonium quaternaire.",
      keyScientificTerms: ["Amine (1aire, 2aire, 3aire)", "Doublet non liant de l'azote", "Caractère basique", "Nucléophilie", "Alkylation d'Hofmann", "Sel d'ammonium quaternaire"],
      commonPitfallsAvoided: ["La classe d'une amine dépend du nombre de liaisons C-N formées sur l'azote (et non sur le carbone)."],
    });
  }

  // Cas 4 : Composés carbonylés (Aldéhydes vs Cétones) & Alcools
  const steps = [
    {
      title: "Détermination de la formule brute et du groupe fonctionnel",
      observationOrData: "Composé oxygéné de masse molaire M.",
      scientificConceptOrRule: "Composé carbonylé CnH2nO (M = 14n + 16 g/mol) vs Alcool CnH2n+2O (M = 14n + 18 g/mol).",
      deductionOrCalculation: "- Si test à la 2,4-DNPH positif (précipité jaune-orangé) : présence du groupe carbonyle C=O.\n- Détermination de n : $n = \\frac{M - 16}{14}$.",
      conclusionOrJustification: "Le composé appartient à la famille des composés carbonylés.",
    },
    {
      title: "Différenciation par les réactions d'oxydoréduction spécifiques",
      observationOrData: "Tests aux réactifs réducteurs (Liqueur de Fehling, Réactif de Tollens, Réactif de Schiff).",
      scientificConceptOrRule: "Seuls les aldéhydes R-CHO possèdent des propriétés réductrices et s'oxydent en acides/ions carboxylates ; les cétones ne réagissent pas.",
      deductionOrCalculation: "- Liqueur de Fehling : $R\\text{-}CHO + 2 Cu^{2+} + 5 OH^- \\longrightarrow R\\text{-}COO^- + Cu_2O(s) \\downarrow (\\text{rouge brique}) + 3 H_2O$\n- Réactif de Tollens : $R\\text{-}CHO + 2 [Ag(NH_3)_2]^+ + 3 OH^- \\longrightarrow R\\text{-}COO^- + 2 Ag(s) \\downarrow (\\text{miroir d'argent}) + 4 NH_3 + 2 H_2O$\n- Réactif de Schiff : coloration rose violacée immédiate.",
      conclusionOrJustification: "Identification formelle de la fonction aldéhyde ou cétone.",
    },
    {
      title: "Formules semi-développées et nomenclature officielle UICPA",
      observationOrData: "Prise en compte de la structure de la chaîne (linéaire ou ramifiée).",
      scientificConceptOrRule: "Règles officielles de nomenclature : suffixe '-al' pour l'aldéhyde (C1 obligatoire) et '-one' pour la cétone.",
      deductionOrCalculation: "Écriture des isomères de position et de chaîne avec justification du composé retenu.",
      conclusionOrJustification: "Identification complète du composé organique.",
    },
  ];

  return buildPcStructuredResult({
    title: "Chimie Organique : Caractérisation et Oxydoréduction des Composés Carbonylés",
    themeId: "chimie_organique",
    themeTitle: "Chimie Organique",
    discipline: "CHIMIE",
    lessonNumber: 2,
    lessonTitle: "Composés carbonylés : Aldéhydes et Cétones",
    problemStatement: statement,
    steps,
    finalConclusion: "Les aldéhydes et cétones se caractérisent ensemble par la 2,4-DNPH, mais seuls les aldéhydes réduisent la liqueur de Fehling et le réactif de Tollens.",
    keyScientificTerms: ["Groupe carbonyle (C=O)", "Aldéhyde (-al)", "Cétone (-one)", "2,4-DNPH (précipité jaune-orangé)", "Liqueur de Fehling (Cu2O rouge brique)", "Réactif de Tollens (miroir d'argent)"],
    commonPitfallsAvoided: ["Les cétones sont réfractaires à l'oxydation ménagée douce."],
  });
}
