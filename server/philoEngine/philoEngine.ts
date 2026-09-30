import { philosophieTleKnowledgeBase } from "../../src/data/philosophieTleKnowledgeBase";
import { PHILO_CONNECTEURS, PHILO_INTRO_APPROACHES } from "../../src/data/philoMethodoBase";
import { MethodologyAnalysisResult, StructuredRedaction, PhiloIntroVariant } from "../../src/types";
import { ALL_ARGUMENT_VARIANTS, identifyArgumentTopic } from "../argumentVariationEngine";
import { findMatchingPhiloRelation } from "./philoRelationsDatabase";
import { validateAndEnforcePhiloMethodology, PhiloComponentsToValidate, validateDissertation } from "./philoMethodologyValidator";
import { parseAndAnalyzePhiloSubject } from "./philoSubjectParser";

export { validateDissertation };

export interface PhiloSolveOptions {
  userSeed?: string;
  variantIndex?: number;
  studentProfile?: any;
}

function getTopicKeyFromNotionId(notionId: string): string | null {
  const map: Record<string, string> = {
    "art-et-travail": "travail",
    "la-technique": "technique",
    "l-art-et-le-beau": "art",
    "la-liberte": "liberte",
    "le-devoir": "devoir",
    "le-bonheur": "bonheur",
    "la-verite": "verite",
    "la-science-et-la-theorie": "science",
    "l-histoire": "histoire",
    "la-conscience": "conscience",
    "inconscient-responsabilite": "inconscient",
    "etat-societe-loi-violence": "etat",
    "la-justice-et-le-droit": "justice",
    "la-religion": "religion",
    "le-temps-et-l-existence": "temps",
    "la-culture-et-l-education": "culture",
    "la-mort-et-la-finitude": "mort",
    "autrui": "autrui",
    "la-nature": "nature",
    "le-langage": "langage",
    "le-desir": "desir",
    "memoire-et-oubli": "memoire",
    "la-philosophie-utilite": "philosophie",
  };
  return map[notionId] || null;
}

/**
 * SCORING PAR MOTS-CLÉS (remplace l'ancien if/else "premier match gagne")
 * ========================================================================
 * L'ancienne logique testait les notions dans un ORDRE FIXE et s'arrêtait
 * à la première regex qui matchait : un sujet contenant à la fois "société"
 * et "art" tombait toujours sur la même notion, quel que soit le vrai sens
 * du sujet, car l'ordre du if/else décidait à la place du contenu réel.
 *
 * Ici, CHAQUE notion reçoit un score = somme des poids des mots-clés
 * trouvés dans le sujet (mots-clés "forts" = quasi certains, "faibles" =
 * indicatifs mais ambigus). On choisit la notion au score le plus élevé,
 * et on calcule une confiance réelle à partir de l'écart avec le
 * deuxième meilleur score (pas une valeur arbitraire recopiée).
 */
interface NotionKeywordWeights {
  strong: RegExp[];
  weak: RegExp[];
}

const NOTION_KEYWORDS: Record<string, NotionKeywordWeights> = {
  "la-conscience": {
    strong: [/conscience de soi/, /cogito/, /introspection/, /connaissance de soi/],
    weak: [/\bconscience\b/, /\bidentite\b/, /\bmoi\b/],
  },
  "inconscient-responsabilite": {
    strong: [/inconscient/, /\bfreud\b/, /refoul/, /pulsion/, /psychanalyse/],
    weak: [/responsabilite/, /determinisme psychique/],
  },
  "memoire-et-oubli": {
    strong: [/\bmemoire\b/, /\boubli\b/, /souvenir/],
    weak: [/\bpasse\b/, /amnesie/],
  },
  "etat-societe-loi-violence": {
    strong: [/\bl.etat\b/, /contrat social/, /\bhobbes\b/, /\bleviathan\b/, /anarchie/],
    weak: [/\bloi\b/, /pouvoir politique/, /desordre/, /\bviolence\b/, /\bsociete\b/],
  },
  "la-philosophie-utilite": {
    strong: [/\bphilosoph(?:ie|e|er|ons|ant)\b/, /vivre sans philosopher/, /utilite de la philosophie/, /philosophie.*(?:mythe|illusion|chim[èe]re|inutile|inutilit[ée]|bavardage|sp[ée]culat)/, /[aà]\s+quoi\s+sert\s+la\s+philosophie/, /\bmythe\s+et\s+raison\b/, /\bmythe.*raison\b/, /\braison.*mythe\b/],
    weak: [/\bsagesse\b/, /speculat/, /\binutile\b/, /\bmythe\b/, /\braison\b/],
  },
  "art-et-travail": {
    strong: [/\btravail\b/, /\btravaill\w*/, /\blabeur\b/, /\bouvrier(s)?\b/, /\bsalari[ée](s)?\b/, /ali[ée]nation\s+(?:du\s+)?travail/, /valeur\s+travail/, /division\s+du\s+travail/],
    weak: [/\bactivit[ée]\s+humaine\b/, /\bproduction\b/, /\bm[ée]tier\b/, /\bforce\s+de\s+travail\b/],
  },
  "le-bonheur": {
    strong: [/\bbonheur\b/, /\bheureu(x|se)\b/, /\bepicure\b/, /ataraxie/, /eudemonisme/],
    weak: [/\bplaisir\b/, /\bfelicite\b/, /\bjoie\b/],
  },
  "la-liberte": {
    strong: [/\bliberte\b/, /\blibre(s)?\b/, /libre.arbitre/, /\bdeterminisme\b/, /\bdestin\b/, /\bfatalis(me)?\b/, /\bvolont[ée]\b/, /\bma[iî]tre\b/],
    weak: [/\bcontrainte\b/, /\bautonomie\b/, /\bchoix\b/],
  },
  "le-devoir": {
    strong: [/\bdevoir(s)?\b/, /devoir\s+moral/, /notion\s+de\s+devoir/, /accomplir\s+(?:son|le)\s+devoir/, /imperatif\s+categorique/, /\bkant\b/, /devoir\s+et\s+bonheur/, /exigence\s+morale/, /\bobligations?\b/],
    weak: [/obligation\s+morale/, /loi\s+morale/, /conscience\s+morale/, /\bmorale\b/, /\bobligatoire\b/],
  },
  "la-justice-et-le-droit": {
    strong: [/\bjustice\b/, /\bdroit\b/, /\bequite\b/, /droit naturel/],
    weak: [/\bloi\b/, /\begalite\b/],
  },
  "la-verite": {
    strong: [/\bverite\b/, /\bfaux\b/, /demonstration/, /\bevidence\b/, /\braison\b/, /\brationnel\b/, /\blogos\b/, /\bmuthos\b/, /\bconnaissance\b/],
    weak: [/\bcertitude\b/, /\bopinion\b/, /\bantipode\b/, /\billusion\b/],
  },
  "le-desir": {
    strong: [/\bdesir\b/, /\bmanque\b/, /\bconvoitise\b/],
    weak: [/\binsatisfaction\b/, /\bplaisir\b/],
  },
  "autrui": {
    strong: [
      /\bautrui\b/,
      /\bautruis\b/,
      /alter ego/,
      /visage d.autrui/,
      /reconnaissance d.autrui/,
      /huis clos/,
      /autrui.*(?:menace|obstacle|danger|ennemi|entrave|limite|regard|visage|ami|societe|libert)/,
      /(?:menace|obstacle|danger|ennemi|entrave|limite|regard|visage|ami|besoin|peur|respect).*(?:d['’]|pour\s+)?autrui/,
      /vivre sans autrui/,
      /se passer d.autrui/,
      /peut-on connaitre autrui/,
      /connaitre autrui/,
      /autrui.*nous/
    ],
    weak: [/\bl.autre\b/, /\bautre(s)?\b/, /\balterite\b/, /\bsolipsisme\b/, /\bintersubjectivite\b/],
  },
  "la-nature": {
    strong: [/\bnature\b/, /maitres et possesseurs/, /\becologie\b/],
    weak: [/\benvironnement\b/, /\bmonde naturel\b/],
  },
  "le-langage": {
    strong: [/\blangage\b/, /\bmots\b/, /signe linguistique/],
    weak: [/\bparole\b/, /\bcommunication\b/],
  },
  "l-histoire": {
    strong: [/sens de l.histoire/, /histoire et devenir/, /evenement(s)? historique(s)?/, /evenements historiques/, /imprevisible(s)?/, /previsibilite/, /ruse de la raison/, /historicisme/, /marx.*histoire/, /hegel.*histoire/, /cournot/],
    weak: [/\bhistoire\b/, /\bhistorique(s)?\b/, /\bcontingence\b/, /\bnecessite\b/, /\bdevenir\b/, /\bhasard\b/, /\bprogres\b/],
  },
  "la-religion": {
    strong: [/\breligion(s)?\b/, /\bfoi\b/, /\bdieu\b/, /\bdivin\b/, /\bcroyance(s)?\b/, /\bcroire\b/, /\bpriere\b/, /\bsacr[ée]\b/, /\bprofane\b/, /\bath[ée]is(me)?\b/, /\bopiac[ée]\b/, /opium du peuple/, /salut de l.ame/],
    weak: [/\bculte\b/, /\bdogme(s)?\b/, /\bagnostique\b/, /\btranscendance\b/, /\bpeche\b/, /\bpecher\b/],
  },
  "la-science-et-la-theorie": {
    strong: [/\bscience(s)?\b/, /\bscientifique(s)?\b/, /\btheorie(s)?\b/, /\bexperimentation\b/, /methode experimentale/, /refutabilit[ée]/, /falsifiabilit[ée]/, /\bpopper\b/, /\bbachelard\b/, /claude bernard/, /\bhypothese\b/, /\bdemonstration\b/],
    weak: [/\bexperience\b/, /loi scientifique/, /\bmodele\b/, /epistemolog\w*/],
  },
  "la-technique": {
    strong: [/\btechnique(s)?\b/, /progr[èe]s\s+technique/, /\bmachine(s)?\b/, /\brobot(s)?\b/, /intelligence\s+artificielle/, /technoscience/, /ma[iî]tres\s+et\s+possesseurs\s+de\s+la\s+nature/, /hans\s+jonas/, /principe\s+responsabilit[ée]/, /homo\s+faber/, /\boutil(s)?\b/, /\bm[ée]canisation\b/],
    weak: [/\bengin(s)?\b/, /\bartifice\b/, /m[ée]canique/],
  },
  "l-art-et-le-beau": {
    strong: [/oeuvre\s+d['’]art/, /\bartiste(s)?\b/, /\bbeaut[ée]\b/, /\bbeau\b/, /\besthetique\b/, /jugement\s+de\s+go[uû]t/, /pla[iî]t\s+universellement/, /\bg[ée]nie\b/, /imitation\s+de\s+la\s+nature/, /\bart(s)?\b/, /cr[ée]ation\s+artistique/],
    weak: [/\bcr[ée]ation\b/, /\bsublime\b/, /\btalent\b/, /contemplation/],
  },
  "le-temps-et-l-existence": {
    strong: [/\btemps\b/, /\bduree\b/, /fuite du temps/, /\bfinitude\b/, /etre-vers-la-mort/, /instant present/, /temporalite/],
    weak: [/\bephemere\b/, /\bmoment\b/, /\bdevenir\b/, /\bchangement\b/, /\bpass[ée]\b/, /\bavenir\b/, /\bfutur\b/],
  },
  "la-culture-et-l-education": {
    strong: [/\bculture(s)?\b/, /\beducation\b/, /\bethnocentrisme\b/, /\bbarbare(s)?\b/, /\bbarbarie\b/, /etat de nature/, /homme civilise/, /diversite des cultures/, /levi-strauss/],
    weak: [/\btradition(s)?\b/, /\bcoutume(s)?\b/, /\bcivilisation(s)?\b/, /\bsauvage(s)?\b/],
  },
  "la-mort-et-la-finitude": {
    strong: [/\bmort\b/, /\bmourir\b/, /finitude humaine/, /apprendre a mourir/, /la mort n.est rien pour nous/, /angoisse de la mort/, /\bneant\b/],
    weak: [/\bdisparition\b/, /\bmortel(le)?\b/, /\bfin\b/, /\bfini\b/],
  },
};

/**
 * LEXIQUE OFFICIEL POUR L'ÉTUDE PARCELLAIRE DU SUJET
 */
const PHILO_LEXICON: Record<string, string> = {
  "histoire": "Processus temporel et dynamique par lequel l'humanité transforme collectivement ses conditions d'existence matérielle et spirituelle.",
  "evenement": "Fait marquant, singulier et irréversible qui rompt la continuité temporelle et transforme le cours des affaires humaines.",
  "imprevisible": "Ce qui échappe à l'anticipation rationnelle, au calcul déterministe ou aux lois de prévision causale.",
  "contingence": "Caractère de ce qui peut être ou ne pas être, arriver ou ne pas arriver, par opposition à la nécessité absolue.",
  "necessite": "Caractère de ce qui ne peut pas ne pas être ou se produire autrement, obéissant à des lois universelles et invariables.",
  "philosophie": "Amour de la sagesse, réflexion critique et rationnelle sur les fondements du savoir, de l'action et du sens de l'existence.",
  "philosopher": "Exercer sa raison de manière critique pour questionner les évidences et rechercher la vérité.",
  "mythe": "Sens 1 (littéral) : Récit traditionnel imaginaire qui met en scène des dieux ou des forces surnaturelles. Sens 2 (sens du sujet) : Illusion trompeuse, idée fausse ou promesse sans résultat concret.",
  "utilite": "Qualité de ce qui sert à quelque chose, produit un effet bénéfique et aide l'homme dans sa vie pratique ou morale.",
  "inutile": "Ce qui ne produit aucun résultat concret et n'aide pas à améliorer la vie des êtres humains.",
  "chimere": "Illusion de l'esprit, idée irréalisable ou fausse promesse.",
  "technique": "Ensemble des outils et des méthodes créés par l'homme pour transformer la nature et faciliter la vie.",
  "progres": "Amélioration continue des connaissances, des conditions de vie ou du comportement moral de l'humanité.",
  "bonheur": "État durable de joie, de paix intérieure et de satisfaction complète de l'être humain.",
  "liberte": "Pouvoir d'agir selon sa volonté en respectant les lois et sans être dominé par la force d'autrui.",
  "conscience": "Faculté réflexive par laquelle l'homme a la connaissance immédiate de ses états, de ses actes et du monde extérieur.",
  "inconscient": "Partie du psychisme constituée de pulsions et de désirs refoulés qui échappent au contrôle immédiat de la conscience.",
  "etat": "Organisation politique souveraine exerçant son autorité sur une population et un territoire pour garantir l'ordre et la justice.",
  "societe": "Collectivité organisée d'individus unis par des règles, des institutions et des liens d'interdépendance.",
  "loi": "Règle générale, impersonnelle et obligatoire prescrite par l'autorité légitime pour organiser la vie en communauté.",
  "justice": "Principe moral et institutionnel exigeant le respect des droits de chacun, l'équité et la conformité aux lois.",
  "droit": "Ensemble des règles juridiques régissant les rapports humains, ou prérogative fondamentale reconnue à l'individu.",
  "verite": "Adéquation rigoureuse de la pensée ou du jugement avec la réalité objective, opposée à l'erreur et à l'illusion.",
  "art": "Activité créatrice désintéressée par laquelle l'homme produit des œuvres destinées à susciter une émotion esthétique.",
  "travail": "Activité consciente et transformatrice par laquelle l'homme modifie la nature pour subvenir à ses besoins et s'humaniser.",
  "desir": "Tendance psychologique consciente vers un objet perçu comme source de plaisir ou de complétude.",
  "langage": "Système de signes permettant à l'homme d'exprimer, de structurer et de partager sa pensée avec autrui.",
  "pensee": "Activité de l'esprit par laquelle l'homme forme des représentations, des jugements et des raisonnements.",
  "realite": "Ensemble de ce qui existe effectivement, indépendamment de la manière dont nous le représentons.",
  "fonction": "Rôle ou finalité assigné à une activité, une pratique ou une œuvre.",
  "divertir": "Détourner momentanément l'esprit des préoccupations ordinaires en procurant plaisir ou distraction.",
  "autrui": "Un autre moi-même, un être humain semblable à moi en tant que sujet, mais différent de moi dans sa singularité.",
  "devoir": "Obligation morale inconditionnelle imposée par la raison pratique, distincte de la simple contrainte physique.",
  "nature": "Ordre du monde physique indépendant de l'artifice humain, ou ensemble des caractères constitutifs d'un être.",
  "memoire": "Faculté de conserver, d'enregistrer et de réactualiser dans la conscience les expériences passées.",
  "oubli": "Effacement ou suspension, involontaire ou nécessaire, des traces mnésiques dans la conscience.",
  "existence": "Fait d'être au monde en tant qu'être conscient, libre, historique et en perpétuel projet.",
  "savoir": "Ensemble ordonné de connaissances vérifiées, transmissibles et justifiées par la méthode rationnelle.",
  "extinction": "Disparition complète, fait de cesser d'exister ou d'être aboli dans l'organisation humaine.",
  "ordonnancement": "Organisation méthodique, structuration hiérarchisée et harmonieuse d'un ensemble de savoirs ou de pratiques.",
  "necessaire": "Ce qui ne peut pas ne pas être, ou ce dont la présence est indispensable pour atteindre une fin.",
  "suffisant": "Ce qui suffit à soi-même pour combler une exigence sans requérir aucun complément extérieur.",
  "illusion": "Croyance erronée alimentée par un désir inconscient ou une apparence trompeuse prise pour la réalité.",
  "alienation": "État de dépossession de soi-même, où l'individu est asservi à des forces matérielles ou sociales qu'il ne maîtrise plus.",
  "menace": "Péril, danger ou contrainte extérieure qui fait peser un risque d'atteinte, d'entrave ou d'aliénation sur une réalité ou une faculté fondamentale.",
  "obstacle": "Ce qui s'oppose à la progression, freine un mouvement ou empêche l'accomplissement d'une action ou d'une faculté.",
  "homme": "Être conscient, doué de raison, de langage et de liberté morale, artisan de sa propre destinée.",
  "raison": "Faculté cognitive et réflexive permettant de penser logiquement, d'ordonner le réel, de distinguer le vrai du faux par la démonstration et de guider la conduite morale.",
  "antipodes": "Situation d'opposition diamétrale, de contradiction absolue ou d'incompatibilité irréductible entre deux principes ou réalités.",
  "logos": "Discours rationnel, cohérent et démonstratif visant la vérité universelle, historiquement opposé au récit fabuleux (muthos).",
  "muthos": "Récit symbolique, imaginaire et poétique transmis par la tradition pour donner un sens global aux mystères du monde et de l'existence.",
  "religion": "Ensemble structuré de croyances, de dogmes et de rites reliant l'homme à une puissance transcendante ou sacrée.",
  "foi": "Adhésion inconditionnelle, intime et confiante de l'esprit à une vérité transcendante sans exigence de preuve empirique.",
  "croyance": "Adhésion de l'esprit à une idée tenue pour vraie sans démonstration logique ou vérification scientifique irréfutable.",
  "dieu": "Principe suprême transcendant, créateur ou ordonnateur de l'univers, garant du sens et de la justice ultime.",
  "sacre": "Ce qui est séparé du domaine profane et inspire la vénération, le respect absolu ou la crainte religieuse.",
  "science": "Connaissance rationnelle, méthodique, universelle et vérifiable du réel par l'observation, la théorie et l'expérimentation.",
  "theorie": "Construction conceptuelle rationnelle visant à expliquer un ensemble de phénomènes observés au moyen de principes et de lois.",
  "experience": "Sens 1 : Épreuve vécue subjective de l'existence. Sens 2 (scientifique) : Protocole d'observation méthodiquement provoqué pour tester une hypothèse.",
  "experimentation": "Intervention active et contrôlée dans le cours des phénomènes de la nature pour vérifier ou réfuter une hypothèse scientifique.",
  "hypothese": "Proposition explicative provisoire formulée par la raison pour rendre compte d'un phénomène, en attente de vérification par les faits.",
  "refutabilite": "Critère poppérien selon lequel une théorie scientifique doit pouvoir être soumise à des tests susceptibles d'en démontrer la fausseté.",
  "beau": "Qualité d'une œuvre ou d'une réalité qui suscite un sentiment esthétique désintéressé d'harmonie et d'admiration dans l'esprit.",
  "esthetique": "Discipline philosophique interrogeant le sentiment du beau, les critères du goût et la nature de la création artistique.",
  "genie": "Faculté innée de l'esprit par laquelle la nature donne ses règles à l'art selon Kant, produisant des œuvres originales et exemplaires.",
  "temps": "Milieu indéfini, continu et irréversible dans lequel se succèdent les états de conscience et les événements du monde.",
  "duree": "Temps qualitatif, continu et indivisible tel qu'il est immédiatement éprouvé par la conscience vécue selon Bergson.",
  "finitude": "Condition de l'être humain borné par des limites spatiales, temporelles, cognitives et inéluctablement voué à la mort.",
  "mort": "Cessation définitive de l'existence biologique et de la conscience corporelle d'un être vivant.",
  "angoisse": "Sentiment diffus et vertigineux de saisie de sa propre liberté et de sa finitude face au néant possible.",
  "culture": "Processus d'arrachement à l'animalité instinctive par l'acquisition du langage, des techniques, des coutumes et des valeurs.",
  "education": "Action exercée sur les jeunes générations pour développer harmonieusement leurs facultés physiques, intellectuelles et morales.",
  "civilisation": "État d'avancement des mœurs, des sciences, des institutions et des techniques atteint par une société humaine.",
  "ethnocentrisme": "Tendance spontanée à ériger les normes et valeurs de sa propre culture en modèle universel et à juger inférieures les autres.",
  "barbare": "Sens 1 (péjoratif) : Être sanguinaire ou inculte. Sens 2 (Lévi-Strauss) : Désignation par laquelle un groupe rejette l'autre hors de l'humanité.",
  "morale": "Ensemble de normes, de devoirs et de valeurs guidant la distinction entre le bien et le mal dans la conduite humaine.",
  "bien": "Valeur suprême et idéal moral positif orientant l'action humaine vers la perfection, la justice et la vertu.",
  "mal": "Ce qui détruit, corrompt l'être, engendre la souffrance injuste ou viole la dignité de la personne humaine.",
  "vertu": "Disposition constante et acquise de la volonté à agir conformément au bien moral et à la rectitude de la raison."
};

function extractPhiloLexique(statement: string, matchedNotionName: string): { terme: string; definition: string }[] {
  const clean = statement.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const found: { terme: string; definition: string }[] = [];
  const added = new Set<string>();

  // Prise en charge prioritaire du binôme "Mythe et Raison"
  if (/\bmythe\b/i.test(clean) && /\braison\b/i.test(clean)) {
    found.push({
      terme: "Mythe (Muthos)",
      definition: "Récit traditionnel imaginaire et symbolique mettant en scène des forces surnaturelles pour expliquer le monde, souvent perçu comme le rival de l'explication rationnelle."
    });
    added.add("mythe");
    found.push({
      terme: "Raison (Logos)",
      definition: "Faculté de juger, de démontrer et d'ordonner la pensée selon des principes logiques et des preuves vérifiables."
    });
    added.add("raison");
    if (/\bantipode\b/i.test(clean)) {
      found.push({
        terme: "Aux antipodes",
        definition: "Situation d'opposition diamétrale, d'incompatibilité absolue ou de contradiction totale entre deux ordres de pensée."
      });
      added.add("antipodes");
    }
  } else if (/\bmythe\b/i.test(clean)) {
    const isFigurativeUse = /philosophie|bonheur|libert|verite|justice|homme/i.test(clean);
    found.push({
      terme: isFigurativeUse ? "Mythe (Polysémie critique)" : "Mythe",
      definition: isFigurativeUse
        ? "Sens 1 (littéral) : Récit fondateur sacré. Sens 2 (contextuel ici - au cœur du sujet) : Illusion trompeuse, chimère ou promesse stérile sans utilité concrète ni efficacité pratique."
        : PHILO_LEXICON["mythe"]
    });
    added.add("mythe");
  }

  if (/\bextinction\b/i.test(clean)) {
    found.push({
      terme: "Extinction",
      definition: "Disparition complète, effacement définitif ou cessation d'une activité ou d'un ordre de savoir."
    });
    added.add("extinction");
  }

  if (/\bordonnancement\b/i.test(clean)) {
    found.push({
      terme: "Ordonnancement",
      definition: "Organisation méthodique, disposition rationnelle et hiérarchisation structurée des connaissances et de l'existence humaine."
    });
    added.add("ordonnancement");
  }

  for (const [key, def] of Object.entries(PHILO_LEXICON)) {
    const regex = new RegExp(`\\b${key}\\b`, "i");
    if (regex.test(clean) && !added.has(key)) {
      found.push({ terme: key.charAt(0).toUpperCase() + key.slice(1), definition: def });
      added.add(key);
    }
  }

  // Si moins de 2 termes trouvés, ajouter la notion appariée
  if (found.length < 2) {
    const notionKey = matchedNotionName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/^la\s+|^le\s+|^l['’]\s*/, "");
    if (!added.has(notionKey)) {
      found.push({
        terme: matchedNotionName,
        definition: PHILO_LEXICON[notionKey] || "Concept philosophique central interrogeant la condition humaine, le savoir et l'action morale."
      });
    }
  }

  return found.slice(0, 4);
}

interface ScoredMatch {
  notion: (typeof philosophieTleKnowledgeBase.notions)[number];
  score: number;
}

function scoreNotions(cleanText: string): ScoredMatch[] {
  return philosophieTleKnowledgeBase.notions.map((notion) => {
    const weights = NOTION_KEYWORDS[notion.id];
    if (!weights) return { notion, score: 0 };
    let score = 0;
    for (const re of weights.strong) if (re.test(cleanText)) score += 3;
    for (const re of weights.weak) if (re.test(cleanText)) score += 1;
    return { notion, score };
  }).sort((a, b) => b.score - a.score);
}

export interface PhiloSolutionResult {
  title: string;
  themeId: string;
  themeTitle: string;
  notionName: string;
  problemStatement: string;
  reformulation: string;
  thesis: {
    title: string;
    arguments: { statement: string; author: string; work: string; quote: string; explanation: string }[];
  };
  antithesis: {
    title: string;
    arguments: { statement: string; author: string; work: string; quote: string; explanation: string }[];
  };
  synthesisAndPersonalView: string;
  steps: {
    phaseName: string;
    methodDescription: string;
    draftingAdvice: string;
    exemplaryDraft: string;
  }[];
  finalConclusion: string;
  toMethodologyAnalysisResult: () => MethodologyAnalysisResult;
}

export function solvePhiloTle(statement: string, options?: PhiloSolveOptions): {
  success: boolean;
  classification: {
    notionId: string;
    notionName: string;
    confidence: number;
  };
  result?: PhiloSolutionResult;
  methodologyAnalysis?: MethodologyAnalysisResult;
  structuredRedaction?: StructuredRedaction;
  pedagogicalMetadata?: {
    level: string;
    discipline: string;
    examType: string;
  };
} {
  const clean = statement.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const subjectExact = statement.trim().replace(/\s+/g, " ");

  // Protection stricte : si le sujet relève d'une langue vivante (anglais, allemand, espagnol),
  // d'histoire-géographie, ou de maths/sciences, ou s'il s'agit d'un simple devoir d'une autre matière,
  // ne jamais forcer la dissertation philosophique.
  if (/\b(?:devoir|exercice|cours|fiche|sujet|epreuve|epreuves)\s+(?:d['’]|de\s+)(?:anglais|englais|english|allemand|deutsch|espagnol|maths?|physique|chimie|svt|histoire|g[ée]ographie|geo)\b/i.test(clean)) {
    return {
      success: false,
      classification: { notionId: "", notionName: "", confidence: 0 },
    };
  }
  if (/\b(?:commentaire\s+de\s+document|situation\s+d['’]evaluation|guerre\s+froide|bipolarisation|plan\s+marshall|kominform|otan|pacte\s+de\s+varsovie|crise\s+de\s+cuba|blocus\s+de\s+berlin|decolonisation|houphouet|algerie|fln|societe\s+des\s+nations|sdn|union\s+africaine|relief\s+ivoirien|climat\s+ivoirien)\b/i.test(clean)) {
    return {
      success: false,
      classification: { notionId: "", notionName: "", confidence: 0 },
    };
  }
  if (/\b(reading comprehension|passive voice|reported speech|fill in the blanks|true or false|wh- questions|verbs in brackets|turn into passive|social media)\b/i.test(clean)) {
    return {
      success: false,
      classification: { notionId: "", notionName: "", confidence: 0 },
    };
  }

  // Classement de TOUTES les notions par score de pertinence (voir
  // scoreNotions plus haut) : la meilleure notion gagne réellement au
  // contenu du sujet, pas à l'ordre d'un if/else.
  const ranked = scoreNotions(clean);
  const best = ranked[0];
  const second = ranked[1];

  // MOTEUR LOCAL DETERMINISTE SANS IA : Recherche dans la base des relations et concepts philosophiques
  const matchedRelation = findMatchingPhiloRelation(subjectExact);

  // MOTEUR PHILOSOPHIQUE OUVERT : l'absence de correspondance dans le lexique
  // ne signifie pas que le sujet n'est pas philosophique. Un sujet inédit,
  // affirmatif ou formulé de manière atypique doit quand même être traité.
  // La confiance reste basse lorsqu'aucun appariement n'est disponible.

  let matchedNotion = best && best.score > 0 ? best.notion : (
    matchedRelation ? (philosophieTleKnowledgeBase.notions.find(n => n.name.toLowerCase().includes(matchedRelation.concept1.toLowerCase())) || philosophieTleKnowledgeBase.notions[0]) : philosophieTleKnowledgeBase.notions[0]
  );

  // Les sujets croisés doivent conserver leur relation, même si un seul mot-clé
  // obtient artificiellement le meilleur score. Priorité aux couples conceptuels.
  if (/(?:inconscient|inconsciente).*?(?:libert[ée]|libre)|(?:libert[ée]|libre).*?(?:inconscient|inconsciente)/i.test(clean)) {
    const crossNotion = philosophieTleKnowledgeBase.notions.find(n => n.id === "inconscient-responsabilite");
    if (crossNotion) matchedNotion = crossNotion;
  }

  // Confiance calculée à partir de l'écart réel entre le 1er et le 2e score,
  // pas une constante recopiée. Un sujet qui ne matche AUCUN mot-clé connu
  // (score 0) obtient une confiance basse : le site doit rester honnête sur
  // le fait qu'il traite ce sujet par défaut, faute de mieux, plutôt que de
  // prétendre à une certitude qu'il n'a pas.
  let confidence: number;

  if (matchedRelation) {
    confidence = 0.99;
  } else if (!best || best.score === 0) {
    confidence = 0.35;
  } else {
    const gap = best.score - (second?.score || 0);
    confidence = Math.min(0.5 + gap * 0.08 + best.score * 0.02, 0.98);
  }
  const isLowConfidence = confidence < 0.6;

  // 1. ÉTAPES DU TRAVAIL PRÉLIMINAIRE
  // A. Lexique ou Définition contextuelle des mots pertinents
  const lexiqueDefinitions = matchedRelation
    ? matchedRelation.lexiqueDefinitions
    : extractPhiloLexique(subjectExact, matchedNotion.name);

  // B. Reformulation du sujet en mots simples et authentiques
  const cleanSubjectNorm = clean;
  const isMytheRaison = /mythe/i.test(cleanSubjectNorm) && /raison|logos|antipode/i.test(cleanSubjectNorm);

  const mytheRaisonThesis = {
    title: "Le mythe s'oppose radicalement aux exigences critiques et démonstratives de la raison",
    arguments: [
      {
        statement: "Le mythe repose sur l'autorité de la tradition et l'imagination fabuleuse, à l'opposé de l'esprit critique de la raison.",
        author: "Platon",
        work: "La République",
        quote: "Il faut refuser les fables trompeuses des poètes qui égarent l'âme loin de la vérité.",
        explanation: "Le mythe impose des représentations anthropomorphiques et dogmatiques là où la raison (logos) exige un examen libre, autonome et rigoureux."
      },
      {
        statement: "La pensée rationnelle et philosophique s'est précisément construite en rupture avec les fictions mythiques.",
        author: "René Descartes",
        work: "Discours de la méthode",
        quote: "Rejeter toutes les opinions reçues autrefois en sa créance pour y appliquer sa seule raison.",
        explanation: "Le passage historique du muthos au logos marque l'émancipation de l'esprit humain, substituant la preuve causale aux explications surnaturelles."
      },
      {
        statement: "L'esprit positif et scientifique récuse l'explication mythologique comme un stade primitif de l'intelligence.",
        author: "Auguste Comte",
        work: "Discours sur l'esprit positif",
        quote: "L'état théologique ou fictif représente l'enfance de l'intelligence humaine, appelée à s'effacer devant l'état positif et rationnel.",
        explanation: "La pensée mythique attribue les phénomènes naturels à des puissances surnaturelles imaginaires, tandis que la raison positive découvre les lois invariables du réel par l'observation et la démonstration."
      }
    ]
  };

  const mytheRaisonAntithesis = {
    title: "Le mythe recèle une rationalité symbolique et constitue un allié indispensable de la raison",
    arguments: [
      {
        statement: "Le mythe est historiquement la matrice fondatrice de la raison, cherchant déjà à expliquer et ordonner le monde.",
        author: "Jean-Pierre Vernant",
        work: "Mythe et pensée chez les Grecs",
        quote: "La raison est née dans le sillage du mythe dont elle a rationalisé les interrogations fondamentales.",
        explanation: "Loin d'être absurde, la pensée mythique structure l'univers mental des hommes et prépare l'émergence des concepts rationnels."
      },
      {
        statement: "La philosophie recourt elle-même au mythe comme allégorie pour exprimer des vérités métaphysiques indémontrables.",
        author: "Paul Ricœur",
        work: "La Métaphore vive",
        quote: "Le symbole donne à penser.",
        explanation: "À l'image de l'allégorie de la caverne chez Platon, le mythe offre un détour symbolique irremplaçable pour éclairer la condition humaine."
      },
      {
        statement: "Le mythe met en œuvre des opérations intellectuelles et logiques aussi complexes que la raison scientifique.",
        author: "Claude Lévi-Strauss",
        work: "Anthropologie structurale",
        quote: "Un mythe se rapporte toujours à des événements passés, mais sa valeur intrinsèque provient de ce que ces événements forment une structure permanente.",
        explanation: "Loin d'être un délire informe, le mythe organise l'univers et résout symboliquement les contradictions fondamentales entre l'homme et la nature."
      }
    ]
  };

  const isPhiloExtinctionOrPasser =
    /philosoph/i.test(cleanSubjectNorm) &&
    /extinction|ordonnancement|efface|disparition|passer/i.test(cleanSubjectNorm);

  const isPhiloMythe =
    /philosoph/i.test(cleanSubjectNorm) &&
    /mythe|chim[èe]re/i.test(cleanSubjectNorm) &&
    !/recours\s+au\s+mythe|rejet.*mythe|mythe.*raison/i.test(cleanSubjectNorm);

  const philoExtinctionThesis = {
    title: "La philosophie pourrait s’effacer de l’ordonnancement du savoir et de la vie humaine en raison de son inefficacité pratique et spéculative",
    arguments: [
      {
        statement: "La philosophie ne résout pas les problèmes pratiques.",
        author: "Karl Marx",
        work: "L’Idéologie allemande",
        quote: "Les philosophes n’ont fait qu’interpréter le monde de diverses manières ; ce qui importe, c’est de le transformer.",
        explanation: "Philosopher se limite souvent à réfléchir et à interpréter le monde, sans apporter de solutions concrètes aux difficultés quotidiennes des hommes. Face aux urgences sociales, économiques ou politiques, elle paraît impuissante.",
        analyseIllustration: "Cette mise en garde montre que philosopher seul ne suffit pas : seule l’action concrète permet d’améliorer réellement la condition humaine."
      },
      {
        statement: "La philosophie ne donne pas de connaissances fiables.",
        author: "Karl Jaspers",
        work: "Introduction à la philosophie",
        quote: "Contrairement à la science, la philosophie ne donne pas de résultats apodictiques.",
        explanation: "Contrairement aux sciences expérimentales et exactes qui accumulent des vérités vérifiables, elle repose sur des spéculations et des débats sans certitudes définitives, ce qui la rend instable et peu fiable.",
        analyseIllustration: "Ainsi, la philosophie apparaît comme une réflexion ouverte mais incapable de produire des certitudes universelles."
      },
      {
        statement: "La philosophie est source de divergences et de confusion.",
        author: "Karl Jaspers",
        work: "Introduction à la philosophie",
        quote: "En philosophie, il n’y a pas d’unanimité établissant un savoir définitif.",
        explanation: "Chaque philosophe développe une pensée différente, souvent opposée à celle des autres, ce qui empêche l’établissement de vérités communes et stables. Cette absence d’unanimité peut rendre la philosophie difficile à suivre et peu utile pour orienter clairement la pensée humaine.",
        analyseIllustration: "Cette absence de consensus montre la difficulté de fonder un savoir apodictique sur la seule réflexion philosophique."
      }
    ]
  };

  const philoExtinctionAntithesis = {
    title: "La philosophie demeure indispensable dans la vie de l’homme et l’organisation du savoir",
    arguments: [
      {
        statement: "La philosophie libère l’esprit des préjugés et développe l’esprit critique.",
        author: "René Descartes",
        work: "Les Principes de la philosophie",
        quote: "C’est proprement avoir les yeux fermés sans jamais tâcher de les ouvrir que de vivre sans philosopher.",
        explanation: "Philosopher permet à l’homme de réfléchir par lui-même, de remettre en question les idées reçues et d’éviter l’obscurantisme.",
        analyseIllustration: "Sans cette vigilance critique, l’homme resterait prisonnier des préjugés et de l'ignorance."
      },
      {
        statement: "La philosophie est le fondement de toute connaissance.",
        author: "René Descartes",
        work: "Les Principes de la philosophie",
        quote: "Toute la philosophie est comme un arbre dont les racines sont la métaphysique, le tronc est la physique et les branches sont les autres sciences.",
        explanation: "Toutes les sciences commencent par un questionnement, un doute ou une recherche de vérité, et cette attitude trouve son origine dans la philosophie.",
        analyseIllustration: "Ainsi, la philosophie structure, unifie et donne tout son sens au savoir humain."
      },
      {
        statement: "La philosophie éclaire le sens de l’existence humaine.",
        author: "Sénèque",
        work: "Lettres à Lucilius",
        quote: "La philosophie seule rend l'âme droite, elle règle la vie, elle gouverne les actions, elle montre ce qu'il faut faire et ce qu'il faut éviter.",
        explanation: "Elle permet à l’homme d’interroger sa condition, ses valeurs et ses choix, offrant des repères moraux et intellectuels pour guider l’action.",
        analyseIllustration: "Cette citation montre que philosopher est indispensable pour donner direction, réflexion et profondeur à l’existence humaine."
      }
    ]
  };

  const isAutruiMenaceLiberte =
    /autrui/i.test(cleanSubjectNorm) &&
    /menace|obstacle|danger|ennemi|entrave|detruit|opprim/i.test(cleanSubjectNorm) &&
    /libert/i.test(cleanSubjectNorm);

  const autruiMenaceThesis = {
    title: "Autrui constitue une menace pour ma liberté subjective, un rival aliénant et une entrave à la souveraineté du moi",
    arguments: [
      {
        statement: "Le regard chosifiant d'autrui aliène ma liberté originelle en me figeant sous son jugement en objet manipulable.",
        author: "Jean-Paul Sartre",
        work: "Huis clos & L'Être et le Néant",
        quote: "L'enfer, c'est les autres.",
        explanation: "Sous le regard d'autrui, je suis dépossédé de ma subjectivité fluide et de ma liberté première pour être réduit à une essence pétrifiée et définie par un jugement extérieur que je ne contrôle pas.",
        analyseIllustration: "Cette célèbre formule sartrienne met au jour l'épreuve ontologique du regard d'autrui, qui menace constamment la souveraineté intime de notre liberté."
      },
      {
        statement: "Dans l'état de nature sans règles communes, autrui apparaît d'abord comme un rival redoutable et une menace permanente pour ma liberté et ma vie.",
        author: "Thomas Hobbes",
        work: "Léviathan & Du Citoyen",
        quote: "L'homme est un loup pour l'homme (Homo homini lupus).",
        explanation: "La rivalité spontanée pour les mêmes biens, la défiance mutuelle et la recherche de domination transforment autrui en agresseur potentiel, engendrant une insécurité radicale où la liberté individuelle est constamment compromise.",
        analyseIllustration: "Hobbes démontre avec réalisme que la liberté sauvage face à autrui se détruit elle-même dans la peur et la confrontation perpétuelle."
      },
      {
        statement: "La cohabitation sociale avec autrui blesse l'indépendance de l'individu et lui impose des contraintes souvent pénibles.",
        author: "Arthur Schopenhauer",
        work: "Parerga et Paralipomena",
        quote: "Une compagnie de porcs-épics s'était resserrée par une froide journée d'hiver pour se préserver du gel ; mais aussitôt ils sentirent leurs piquants mutuels, ce qui les força à s'éloigner.",
        explanation: "L'apologue des porcs-épics illustre le dilemme tragique de l'intersubjectivité : le besoin d'autrui rapproche les hommes mais leur proximité excessive blesse leur liberté et génère irritations, compromis et faux-semblants.",
        analyseIllustration: "Cette parabole prouve que la liberté personnelle doit constamment se défendre contre l'intrusion et la pression envahissante d'autrui."
      }
    ]
  };

  const autruiMenaceAntithesis = {
    title: "Autrui est le médiateur indispensable à l'éveil de la conscience libre, à la reconnaissance mutuelle et à la liberté véritable",
    arguments: [
      {
        statement: "La liberté et la conscience de soi ne peuvent s'accomplir dans le solipsisme et exigent la reconnaissance mutuelle avec une autre conscience libre.",
        author: "G.W.F. Hegel",
        work: "Phénoménologie de l'esprit",
        quote: "La conscience de soi n'est en soi et pour soi que parce qu'elle est en soi et pour soi pour une autre conscience de soi ; c'est-à-dire qu'elle n'est qu'en tant qu'être reconnu.",
        explanation: "Une liberté solitaire demeurerait abstraite, inconsciente d'elle-même et réduite à la pure animalité. C'est en affrontant autrui et en exigeant d'être reconnu comme liberté que le sujet accède à la dignité spirituelle et à l'autonomie réelle.",
        analyseIllustration: "Hegel établit ainsi que loin d'anéantir ma liberté, autrui est le miroir dialectique sans lequel nulle liberté humaine ne peut advenir."
      },
      {
        statement: "L'épiphanie du visage d'autrui arrache le sujet à l'arbitraire égoïste et élève sa liberté à la dignité de la responsabilité morale.",
        author: "Emmanuel Levinas",
        work: "Totalité et Infini & Éthique et Infini",
        quote: "Le visage d'autrui s'impose à moi sans que je puisse rester sourd à son appel... Il me signifie : « Tu ne commettras pas de meurtre ».",
        explanation: "La rencontre d'autrui ne détruit pas la liberté mais l'investit éthiquement. En découvrant la vulnérabilité sacrée d'autrui, ma liberté cesse d'être une force aveugle et prédatrice pour devenir une liberté responsable et généreuse.",
        analyseIllustration: "Levinas démontre que la relation morale à autrui confère à notre liberté sa noblesse la plus pure et sa véritable grandeur humaine."
      },
      {
        statement: "C'est dans l'association avec autrui et sous la garantie de la loi commune que la liberté sauvage se transforme en liberté civile et morale authentique.",
        author: "Jean-Jacques Rousseau",
        work: "Du contrat social",
        quote: "L'obéissance à la loi qu'on s'est prescrite est liberté.",
        explanation: "Rousseau montre que l'indépendance de l'homme isolé n'est qu'une illusion précaire soumise à la force. En s'unissant à autrui dans le corps politique, chacun gagne la liberté civile garantie par tous et l'autonomie morale qui commande d'agir selon la raison et la justice.",
        analyseIllustration: "Rousseau prouve que la liberté ne se réalise pas contre autrui dans la défiance, mais avec autrui dans le pacte social et la solidarité républicaine."
      }
    ]
  };

  let detectedTopicKey = identifyArgumentTopic(subjectExact) || 
    identifyArgumentTopic(cleanSubjectNorm) || 
    getTopicKeyFromNotionId(matchedNotion.id);

  // Garde disciplinaire : un mot comme « langage » peut être confondu avec
  // un corpus de poésie/littérature. Pour une dissertation philosophique,
  // les variantes littéraires ne sont activées que si le sujet contient
  // explicitement un signal littéraire.
  const literaryTopicKeys = new Set(["roman", "theatre", "poesie"]);
  const hasExplicitLiterarySignal = /\b(?:roman|poesie|poete|po[èe]me|theatre|pi[eè]ce|comedie|tragedie|vers|strophe|sonnet|fable|nouvelle)\b/i.test(cleanSubjectNorm);
  if (detectedTopicKey && literaryTopicKeys.has(detectedTopicKey) && !hasExplicitLiterarySignal) {
    detectedTopicKey = getTopicKeyFromNotionId(matchedNotion.id);
    if (detectedTopicKey && literaryTopicKeys.has(detectedTopicKey)) {
      detectedTopicKey = null;
    }
  }

  // Le corpus général « philosophie » contient aussi des variantes d'histoire
  // de la philosophie africaine. Elles ne doivent pas apparaître dans un sujet
  // générique sur l'utilité de la philosophie : on conserve alors les arguments
  // du couple conceptuel reconnu par le moteur.
  const hasAfricanPhilosophySignal = /\b(?:africaine?|hountondji|towa|ethnophilosophie|oralisme|sagesse africaine)\b/i.test(cleanSubjectNorm);
  if (detectedTopicKey === "philosophie" && !hasAfricanPhilosophySignal) {
    detectedTopicKey = null;
  }

  const availableVariants = detectedTopicKey && ALL_ARGUMENT_VARIANTS[detectedTopicKey]
    ? ALL_ARGUMENT_VARIANTS[detectedTopicKey]
    : null;

  const getSubjectHash = (str: string): number => {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    // Avalanche bit mixer so low bits (modulo) distribute uniformly across user seeds
    h ^= h >>> 16;
    h = Math.imul(h, 0x85ebca6b);
    h ^= h >>> 13;
    h = Math.imul(h, 0xc2b2ae35);
    h ^= h >>> 16;
    return Math.abs(h >>> 0);
  };

  const subjectHash = getSubjectHash(cleanSubjectNorm);
  const effectiveUserSeed = options?.userSeed ? `${options.userSeed}_${cleanSubjectNorm}` : null;
  const userHash = effectiveUserSeed ? getSubjectHash(effectiveUserSeed) : subjectHash;

  /** Alignement sémantique : une variante ne doit jamais décider arbitrairement
   * quel bloc appartient à l'Axe I ou à l'Axe II. */
  type AxisPolarity = 'thesis' | 'antithesis' | 'synthesis';
  const normalizeForPolarity = (value: string) => value
    .toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const inferAxisPolarity = (arg: any, subject: string): AxisPolarity => {
    const category = normalizeForPolarity(String(arg?.category || ''));
    if (/synthese|depassement|articulation|nuance|complement/.test(category)) return 'synthesis';
    if (/antithese|critique|objection|limite|determin|alien|asserv|steril|ineffic|inutile|danger|menace/.test(category)) return 'antithesis';
    if (/these|fondation|utile|necess|indispens|emancip|autonomie|liber|construction|role/.test(category)) return 'thesis';

    const text = normalizeForPolarity(`${arg?.statement || ''} ${arg?.explanation || ''}`);
    const positive = [/\butil/, /\bnecess/, /\bindispens/, /\bfondament/, /\bpermet/, /\bconstrui/, /\bdevelop/, /\bliber/, /\bemancip/, /\bautonom/, /\bverite/, /\bsens/, /\bhumanis/, /\bguide/, /\beveil/, /\bconnaiss/];
    const negative = [/\binutil/, /\bineffic/, /\bsteril/, /\babstrait/, /\bimpuiss/, /\blimit/, /\bmenac/, /\bobstacle/, /\billusion/, /\bchimere/, /\bconfus/, /\bincertain/, /\bdesaccord/, /\bdivergen/, /\balien/, /\basserv/, /\boppress/, /\bstagn/, /\bimpasse/];
    let pos = 0, neg = 0;
    for (const re of positive) if (re.test(text)) pos++;
    for (const re of negative) if (re.test(text)) neg++;
    if (pos > neg + 1) return 'thesis';
    if (neg > pos + 1) return 'antithesis';
    return 'synthesis';
  };

  const selectVariantArgumentsForRelation = (variantArgs: any[], relation: any, canonicalAxe1Args: any[], canonicalAxe2Args: any[], subject: string) => {
    const axis1: any[] = [];
    const axis2: any[] = [];
    const synthesis: any[] = [];
    const titlePolarity = (title: string): AxisPolarity => {
      const p = normalizeForPolarity(title);
      const negative = /inutil|ineffic|steril|impuiss|limite|menace|obstacle|critique|abstrait|illusion|ali[eé]n|asserv|danger|desaccord|divergen|oppress|exclut|determin/.test(p);
      const positive = /utile|necess|indispens|fondament|liber|emancip|autonom|humanis|eclair|construi|reconnait|condition|guide|role|valeur/.test(p);
      if (negative && !positive) return 'antithesis';
      if (positive && !negative) return 'thesis';
      return 'synthesis';
    };
    const p1 = titlePolarity(relation.axe1.title);
    const p2 = titlePolarity(relation.axe2.title);
    for (const arg of variantArgs) {
      const side = inferAxisPolarity(arg, subject);
      if (side === 'synthesis') synthesis.push(arg);
      else if ((side === 'thesis' && p1 === 'thesis') || (side === 'antithesis' && p1 === 'antithesis')) axis1.push(arg);
      else if ((side === 'thesis' && p2 === 'thesis') || (side === 'antithesis' && p2 === 'antithesis')) axis2.push(arg);
    }
    for (const arg of synthesis) {
      // Un dépassement est généralement rattaché au second temps dialectique
      // lorsqu'il existe une opposition nette entre les deux titres.
      if (p2 === 'thesis' && axis2.length < 3) axis2.push(arg);
      else if (p1 === 'thesis' && axis1.length < 3) axis1.push(arg);
      else if (axis2.length < 3) axis2.push(arg);
      else if (axis1.length < 3) axis1.push(arg);
    }
    const fill = (target: any[], fallback: any[]) => {
      const used = new Set(target.map(a => String(a.author || '').toLowerCase()));
      for (const arg of fallback) {
        if (target.length >= 3) break;
        const key = String(arg.author || '').toLowerCase();
        if (!used.has(key)) { target.push(arg); used.add(key); }
      }
      while (target.length < 3 && fallback.length) target.push(fallback[target.length % fallback.length]);
    };
    fill(axis1, canonicalAxe1Args);
    fill(axis2, canonicalAxe2Args);
    return { axis1: axis1.slice(0, 3), axis2: axis2.slice(0, 3) };
  };

  const selectVariantArguments = (variantArgs: any[], canonicalThesisArgs: any[], canonicalAntithesisArgs: any[], subject: string) => {
    const thesisArgs: any[] = [];
    const antithesisArgs: any[] = [];
    const synthesisArgs: any[] = [];
    for (const arg of variantArgs) {
      const side = inferAxisPolarity(arg, subject);
      if (side === 'thesis') thesisArgs.push(arg);
      else if (side === 'antithesis') antithesisArgs.push(arg);
      else synthesisArgs.push(arg);
    }
    if (thesisArgs.length >= 2 && antithesisArgs.length === 0) {
      antithesisArgs.push(...canonicalAntithesisArgs);
    } else if (antithesisArgs.length >= 2 && thesisArgs.length === 0) {
      thesisArgs.push(...canonicalThesisArgs);
    } else {
      for (const arg of synthesisArgs) {
        if (thesisArgs.length < 3) thesisArgs.push(arg);
        else if (antithesisArgs.length < 3) antithesisArgs.push(arg);
      }
      if (thesisArgs.length === 0) thesisArgs.push(...canonicalThesisArgs);
      if (antithesisArgs.length === 0) antithesisArgs.push(...canonicalAntithesisArgs);
    }
    const fill = (target: any[], fallback: any[]) => {
      const used = new Set(target.map(a => String(a.author || '').toLowerCase()));
      for (const arg of fallback) {
        if (target.length >= 3) break;
        const key = String(arg.author || '').toLowerCase();
        if (!used.has(key)) { target.push(arg); used.add(key); }
      }
      while (target.length < 3 && fallback.length) target.push(fallback[target.length % fallback.length]);
    };
    fill(thesisArgs, canonicalThesisArgs);
    fill(antithesisArgs, canonicalAntithesisArgs);
    return { thesisArgs: thesisArgs.slice(0, 3), antithesisArgs: antithesisArgs.slice(0, 3) };
  };

  let activeVariantIdx = 0;
  if (availableVariants && availableVariants.length > 0) {
    if (typeof options?.variantIndex === "number" && options.variantIndex >= 0) {
      activeVariantIdx = options.variantIndex % availableVariants.length;
    } else if (options?.userSeed) {
      activeVariantIdx = userHash % availableVariants.length;
    } else {
      activeVariantIdx = subjectHash % availableVariants.length;
    }
  }

  let thesisToUse = matchedNotion.thesis;
  let antithesisToUse = matchedNotion.antithesis;

  const hasExplicitVariantOrSeed = (typeof options?.variantIndex === "number") || Boolean(options?.userSeed);

  if (hasExplicitVariantOrSeed && availableVariants && availableVariants.length > 0) {
    const selectedVariant = availableVariants[activeVariantIdx];
    if (matchedRelation) {
      const aligned = selectVariantArgumentsForRelation(
        selectedVariant?.arguments || [],
        matchedRelation,
        matchedRelation.axe1.arguments,
        matchedRelation.axe2.arguments,
        subjectExact
      );
      thesisToUse = { title: matchedRelation.axe1.title, arguments: aligned.axis1 };
      antithesisToUse = { title: matchedRelation.axe2.title, arguments: aligned.axis2 };
    } else {
      const aligned = selectVariantArguments(
        selectedVariant?.arguments || [],
        matchedNotion.thesis.arguments,
        matchedNotion.antithesis.arguments,
        subjectExact
      );
      thesisToUse = { title: matchedNotion.thesis.title, arguments: aligned.thesisArgs };
      antithesisToUse = { title: matchedNotion.antithesis.title, arguments: aligned.antithesisArgs };
    }
  } else if (isMytheRaison && (options?.variantIndex === undefined || options.variantIndex === 0)) {
    thesisToUse = mytheRaisonThesis;
    antithesisToUse = mytheRaisonAntithesis;
  } else if (isPhiloExtinctionOrPasser && (options?.variantIndex === undefined || options.variantIndex === 0)) {
    thesisToUse = philoExtinctionThesis;
    antithesisToUse = philoExtinctionAntithesis;
  } else if (isAutruiMenaceLiberte && (options?.variantIndex === undefined || options.variantIndex === 0)) {
    thesisToUse = autruiMenaceThesis;
    antithesisToUse = autruiMenaceAntithesis;
  } else if (matchedRelation) {
    thesisToUse = { title: matchedRelation.axe1.title, arguments: matchedRelation.axe1.arguments };
    antithesisToUse = { title: matchedRelation.axe2.title, arguments: matchedRelation.axe2.arguments };
  } else if (availableVariants && availableVariants.length > 0) {
    const selectedVariant = availableVariants[activeVariantIdx];
    const aligned = selectVariantArguments(
      selectedVariant?.arguments || [],
      matchedNotion.thesis.arguments,
      matchedNotion.antithesis.arguments,
      subjectExact
    );
    thesisToUse = { title: matchedNotion.thesis.title, arguments: aligned.thesisArgs };
    antithesisToUse = { title: matchedNotion.antithesis.title, arguments: aligned.antithesisArgs };
  }

  // Rotation déterministe pour unicité des copies par utilisateur
  if (options?.userSeed && thesisToUse.arguments.length > 1) {
    const shift = (userHash % (thesisToUse.arguments.length - 1)) + 1;
    thesisToUse = {
      ...thesisToUse,
      arguments: [...thesisToUse.arguments.slice(shift), ...thesisToUse.arguments.slice(0, shift)]
    };
  }

  // Garantie absolue d'excellence : chaque axe doit comporter au moins 3 arguments pour les sous-parties A, B, C
  if (thesisToUse.arguments.length < 3) {
    const clonedThesisArgs = [...thesisToUse.arguments];
    const fallbackCandidates = matchedNotion.thesis.arguments;
    for (const cand of fallbackCandidates) {
      if (clonedThesisArgs.length >= 3) break;
      if (!clonedThesisArgs.some(a => a.author.toLowerCase() === cand.author.toLowerCase())) {
        clonedThesisArgs.push(cand);
      }
    }
    while (clonedThesisArgs.length < 3 && fallbackCandidates.length > 0) {
      clonedThesisArgs.push(fallbackCandidates[clonedThesisArgs.length % fallbackCandidates.length]);
    }
    thesisToUse = { ...thesisToUse, arguments: clonedThesisArgs };
  }

  if (antithesisToUse.arguments.length < 3) {
    const clonedAntiArgs = [...antithesisToUse.arguments];
    const fallbackCandidates = matchedNotion.antithesis.arguments;
    for (const cand of fallbackCandidates) {
      if (clonedAntiArgs.length >= 3) break;
      if (!clonedAntiArgs.some(a => a.author.toLowerCase() === cand.author.toLowerCase())) {
        clonedAntiArgs.push(cand);
      }
    }
    while (clonedAntiArgs.length < 3 && fallbackCandidates.length > 0) {
      clonedAntiArgs.push(fallbackCandidates[clonedAntiArgs.length % fallbackCandidates.length]);
    }
    antithesisToUse = { ...antithesisToUse, arguments: clonedAntiArgs };
  }

  // REFORMULATION UNIVERSELLE : conserver la proposition exacte du sujet.
  const parsedSubjectCanonical = parseAndAnalyzePhiloSubject(subjectExact);
  let reformulation = matchedRelation?.reformulationPattern
    ? matchedRelation.reformulationPattern
    : parsedSubjectCanonical.reformulation;

  // C. Problématisation du sujet
  // RÈGLE ABSOLUE : LE PROBLÈME DOIT OBLIGATOIREMENT ÊTRE UNE QUESTION CENTRALE DIRECTE.
  // INTERDICTIONS STRICTES :
  // - JAMAIS d'affirmation ni de thèse comme problème
  // - JAMAIS de mot 'ou' dans le problème (les alternatives artificielles sont formellement proscrites)
  // - JAMAIS de confusion entre problème, reformulation, thèse et axes
  // PROBLÉMATISATION UNIVERSELLE : la question exacte est la source de vérité.
  let problemeCourt = parsedSubjectCanonical.problemeCourt;

  // GARDE-FOU UNIVERSEL DE FIDÉLITÉ AU SUJET
  const normalizeSubjectQuestion = (raw: string): string => {
    let q = raw.trim().replace(/^(?:sujet\s*\d*\s*[:\-–]\s*|dissertation\s*[:\-–]\s*)/i, "").replace(/^[«"“\s]+|[»"”\s]+$/g, "").replace(/\s+/g, " ");
    q = q.replace(/[.]+$/, "").trim();
    if (!q.endsWith("?")) q += " ?";
    return q;
  };
  const subjectAsProblem = (raw: string): string => {
    const q = normalizeSubjectQuestion(raw).replace(/^dans\s+quelle\s+mesure\s+/i, "").replace(/^en\s+quoi\s+/i, "").replace(/^pourquoi\s+/i, "");
    return q.endsWith("?") ? q : `${q} ?`;
  };
  const affirmativeFromSubject = (raw: string): string => {
    let s = normalizeSubjectQuestion(raw).replace(/\s*\?\s*$/, "").trim();
    s = s.replace(/^dans\s+quelle\s+mesure\s+/i, "").replace(/^en\s+quoi\s+/i, "").replace(/^pourquoi\s+/i, "");
    s = s.replace(/\b(est|sont)-t-(il|elle|ils|elles)\b/gi, "$1").replace(/\b(peut|peuvent)-t-(il|elle|ils|elles)\b/gi, "$1").replace(/\b(doit|doivent)-t-(il|elle|ils|elles)\b/gi, "$1");
    s = s.replace(/^faut-il\s+/i, "il faut ").replace(/^peut-on\s+/i, "il est possible de ").replace(/^doit-on\s+/i, "il faut ");
    return s.charAt(0).toLowerCase() + s.slice(1);
  };
  const universalContrary = (raw: string): string => {
    let s = affirmativeFromSubject(raw);
    const replacements: Array<[RegExp, string]> = [
      [/\bune menace\b/gi, "une condition possible de réalisation"], [/\bun obstacle\b/gi, "un moyen de réalisation"], [/\bun danger\b/gi, "une possibilité d'émancipation"], [/\bune entrave\b/gi, "un facteur de réalisation"], [/\bmenace\b/gi, "favorise"], [/\bempêche\b/gi, "permet"], [/\bentrave\b/gi, "favorise"], [/\blimite\b/gi, "rend possible"], [/\baliène\b/gi, "émancipe"], [/\basservit\b/gi, "libère"], [/\bopprime\b/gi, "protège"], [/\bdétruit\b/gi, "construit"], [/\béloigne\b/gi, "rapproche"], [/\bexclut\b/gi, "intègre"], [/\bnie\b/gi, "reconnaît"], [/\bnécessaire\b/gi, "dispensable"], [/\bindispensable\b/gi, "dispensable"], [/\bpossible\b/gi, "impossible"], [/\bimpossible\b/gi, "possible"]
    ];
    for (const [re, replacement] of replacements) if (re.test(s)) return s.replace(re, replacement);
    return `le rapport inverse entre les termes du sujet : ${s}`;
  };

  // Garanties absolues sur le problème :
  // 1. Toujours une question (doit se terminer par un point d'interrogation)
  if (!problemeCourt.trim().endsWith("?")) {
    problemeCourt = `${problemeCourt.trim()} ?`;
  }
  // 2. Interdiction formelle du mot 'ou' dans la problématique
  if (/\bou\b/i.test(problemeCourt)) {
    problemeCourt = problemeCourt.replace(/\s+ou\s+.*?\?/i, " ?");
  }

  // INVARIANT : aucune notion ni relation pré-enregistrée ne peut remplacer le sujet exact.
  problemeCourt = parsedSubjectCanonical.problemeCourt;

  // Extraction du sujet direct pour l'Aspect 1 (commence par "dans quelle mesure [sujet] ?")
  const extractSubjectForAspect1 = (rawSubject: string): string => {
    let s = rawSubject.trim();
    // Retirer les préfixes ("Sujet :", "Sujet 1 :", "Dissertation :", etc.)
    s = s.replace(/^(?:sujet\s*\d*\s*[:\-–]\s*|dissertation\s*[:\-–]\s*|exercice\s*\d*\s*[:\-–]\s*)/i, "");
    // Retirer les guillemets et ponctuation de bordure
    s = s.replace(/^[\"«“\s]+|[\"»”\s\.\?!]+$/g, "").trim();
    // Retirer les préambules interrogatifs redondants
    s = s.replace(/^(?:en quoi|pourquoi)\s+/i, "");
    s = s.replace(/^(?:dans|en)\s+quelle\s+mesure\s+/i, "");
    if (s.length > 0) {
      s = s.charAt(0).toLowerCase() + s.slice(1);
    }
    return `dans quelle mesure ${s} ?`;
  };

  // Construction de l'Aspect 2 : simple phrase interrogative courte posant l'antithèse (précédée de "toutefois, ")
  const buildAspect2Interrogative = (cleanNorm: string): string => {
    if (/histoire|historique/i.test(cleanNorm) && /imprevisible|previsib/i.test(cleanNorm)) {
      return "toutefois, ne sont-ils pas prévisibles ?";
    }
    if (/philosophie|philosophe/i.test(cleanNorm) && /extinction|effacer|passer/i.test(cleanNorm)) {
      return "toutefois, n’est-elle pas indispensable dans la vie de l’homme ?";
    }
    if (/philosophie|philosophe/i.test(cleanNorm) && /mythe|inutile|chimere|illusion/i.test(cleanNorm)) {
      return "toutefois, ne constitue-t-elle pas une nécessité vitale pour l'homme ?";
    }
    if (/mythe/i.test(cleanNorm) && /raison|logos|antipode/i.test(cleanNorm)) {
      return "toutefois, ne recèle-t-il pas une rationalité féconde pour la raison ?";
    }
    if (/travail/i.test(cleanNorm)) {
      if (/liber|emancip/i.test(cleanNorm)) {
        return "toutefois, ne peut-il pas devenir une source d'aliénation ?";
      }
      return "toutefois, ne participe-t-il pas à l'émancipation humaine ?";
    }
    if (/technique|machine/i.test(cleanNorm)) {
      if (/danger|menace|asserv|peur/i.test(cleanNorm)) {
        return "toutefois, ne contribue-t-elle pas à la libération de l'homme ?";
      }
      return "toutefois, ne risque-t-elle pas d'asservir l'homme ?";
    }
    if (/religion|foi|dieu|croyance/i.test(cleanNorm)) {
      if (/illusion|alien|opium|tromp/i.test(cleanNorm)) {
        return "toutefois, n'est-elle pas indispensable à l'existence humaine ?";
      }
      return "toutefois, ne heurte-t-elle pas les exigences critiques de la raison ?";
    }
    if (/\b(?:science|theorie|experiment|scientifique)\b/i.test(cleanNorm)) {
      if (/absolu|certain|infaillible|tout/i.test(cleanNorm)) {
        return "toutefois, les théories scientifiques ne demeurent-elles pas révisables ?";
      }
      return "toutefois, la science ne fournit-elle pas des vérités certaines ?";
    }
    if (/conscience/i.test(cleanNorm)) {
      if (/suffit|definir|homme|essence|tout/i.test(cleanNorm)) {
        return "toutefois, ne s'avère-t-elle pas insuffisante face à l'inconscient et aux déterminismes corporels ?";
      }
      return "toutefois, la conscience ne comporte-t-elle pas des illusions et des limites fondamentales ?";
    }
    if (/art|artiste|beau|esthetique/i.test(cleanNorm)) {
      if (/eloigne|illusion|tromp|inutile/i.test(cleanNorm)) {
        return "toutefois, ne permet-il pas au contraire de dévoiler la réalité ?";
      }
      return "toutefois, l'art ne peut-il pas se réduire à une simple illusion séduisante ?";
    }
    if (/liberte|libre/i.test(cleanNorm)) {
      if (/tout ce qu|faire ce qu/i.test(cleanNorm)) {
        return "toutefois, la liberté ne suppose-t-elle pas le respect de règles et de lois ?";
      }
      if (/illusion/i.test(cleanNorm)) {
        return "toutefois, l'homme ne possède-t-il pas un authentique libre arbitre ?";
      }
      return "toutefois, les déterminismes ne viennent-ils pas limiter notre liberté ?";
    }
    if (/etat/i.test(cleanNorm)) {
      if (/ennemi|obstacle|opprim|menace/i.test(cleanNorm)) {
        return "toutefois, n'est-il pas la condition indispensable de la liberté ?";
      }
      return "toutefois, ne risque-t-il pas de porter atteinte aux libertés individuelles ?";
    }
    if (/bonheur/i.test(cleanNorm)) {
      if (/illusion|impossible|chimere/i.test(cleanNorm)) {
        return "toutefois, l'homme ne peut-il pas y parvenir par la sagesse ?";
      }
      return "toutefois, le bonheur n'est-il pas un idéal inaccessible ?";
    }
    if (/responsab/i.test(cleanNorm)) {
      return "toutefois, les déterminismes ne viennent-ils pas atténuer cette responsabilité ?";
    }
    if (/inconscient/i.test(cleanNorm)) {
      return "toutefois, le sujet ne demeure-t-il pas responsable de ses actes ?";
    }
    if (/verite/i.test(cleanNorm)) {
      if (/toujours|devoir|absolu/i.test(cleanNorm)) {
        return "toutefois, le mensonge ne peut-il pas être parfois moralement justifié ?";
      }
      return "toutefois, la recherche de la vérité n'est-elle pas une exigence inconditionnelle ?";
    }
    if (/temps|duree|finitude/i.test(cleanNorm)) {
      if (/ennemi|obstacle|angoisse|detruit/i.test(cleanNorm)) {
        return "toutefois, n'est-il pas la condition même de l'action et de la liberté ?";
      }
      return "toutefois, le temps n'entraîne-t-il pas l'homme vers sa propre finitude ?";
    }
    if (/culture|education|civilisation/i.test(cleanNorm)) {
      if (/denature|corrompt|opprime/i.test(cleanNorm)) {
        return "toutefois, ne participe-t-elle pas pleinement à l'humanisation de l'homme ?";
      }
      return "toutefois, les conventions sociales n'étouffent-elles pas la liberté naturelle ?";
    }
    if (/mort|mourir/i.test(cleanNorm)) {
      if (/sens|absurde|detruit/i.test(cleanNorm)) {
        return "toutefois, ne donne-t-elle pas au contraire toute sa valeur à l'existence ?";
      }
      return "toutefois, la mort ne demeure-t-elle pas le scandale de toute conscience ?";
    }
    if (/autrui/i.test(cleanNorm)) {
      if (/obstacle|enfer|menace/i.test(cleanNorm)) {
        return "toutefois, autrui n'est-il pas indispensable à la découverte de soi ?";
      }
      return "toutefois, la présence d'autrui ne menace-t-elle pas notre liberté ?";
    }
    if (/justice|loi/i.test(cleanNorm)) {
      if (/obeir|suffit/i.test(cleanNorm)) {
        return "toutefois, la justice n'exige-t-elle pas de se référer à un idéal moral supérieur ?";
      }
      return "toutefois, les lois positives ne sont-elles pas imparfaites ?";
    }

    return "toutefois, ne convient-il pas de soutenir la position inverse ?";
  };
  // ASPECTS UNIVERSELS : conserver la relation exacte du sujet.
  const parsedSubjectForAspects = parseAndAnalyzePhiloSubject(subjectExact);
  let aspect1 = matchedRelation?.aspect1 || parsedSubjectForAspects.aspect1;
  let aspect2 = matchedRelation?.aspect2 || parsedSubjectForAspects.aspect2;

  // Même lorsqu'une relation spécialisée est reconnue, chaque aspect doit
  // conserver un ancrage lexical du sujet exact. Un aspect trop générique est
  // reconstruit à partir des termes du sujet.
  const subjectAnchorTokens = cleanSubjectNorm
    .split(/\s+/)
    .filter(w => w.length >= 4)
    .filter(w => !/^(quelle|quelles|quels|comment|pourquoi|peut|doit|faut|dans|mesure|homme|sont|avec|sans)$/i.test(w))
    .filter(w => !/-t-(?:il|elle|on|ils|elles)$/.test(w));
  const aspect2HasAnchor = subjectAnchorTokens.some(token =>
    normalizeForPolarity(aspect2).includes(normalizeForPolarity(token))
  );
  if (!aspect2HasAnchor) {
    aspect2 = parsedSubjectForAspects.aspect2;
  }

  // Normalisation des aspects pour l'insertion fluide dans l'annonce du plan sans formules clichées
  const lowerFirst = (s: string) => (s ? s.charAt(0).toLowerCase() + s.slice(1) : "");
  const cleanAspect1 = lowerFirst(aspect1.trim().replace(/\?$/, "")).trim();
  let cleanAspect2 = lowerFirst(aspect2.trim());
  if (!cleanAspect2.startsWith("toutefois")) {
    cleanAspect2 = `toutefois, ${cleanAspect2}`;
  }
  if (!cleanAspect2.endsWith("?")) {
    cleanAspect2 = `${cleanAspect2} ?`;
  }
  const formattedAspects = `${cleanAspect1} ?, ${cleanAspect2}`;

  // Formule canonique obligatoire reliant le problème aux questions secondaires
  const phraseLiaisonAspects = "Pour répondre à ce problème d’autres questions s’ajoutent :";

  // D. Rédaction des 3 Façons Canoniques d'Introduire le Sujet
  const firstThesisArg = thesisToUse.arguments[0] || {
    author: "Platon",
    work: "La République",
    quote: "La justice consiste à faire ce qui est conforme à sa nature propre",
    explanation: "Elle régule l'harmonie entre l'âme et la cité."
  };

  const introAmorceDef = (
    isPhiloExtinctionOrPasser
      ? "La philosophie se définit comme l’amour de la sagesse et la quête de la vérité. En tant qu’activité spéculative elle est une discipline vaine qui éloigne l’homme de la réalité, des préoccupations concrètes. Cependant, elle est également considérée comme essentielle à la réflexion humaine et à l’organisation du savoir."
      : isMytheRaison
      ? "Si l'on définit traditionnellement le mythe comme un récit fabuleux issu de l'imagination collective et la raison comme la faculté logique de discerner le vrai du faux par la démonstration, ces deux démarches semblent s'exclure mutuellement. Pourtant, l'histoire de la pensée philosophique montre que mythe et raison entretiennent des rapports étroits et féconds."
      : matchedRelation?.introAmorces?.definition
      ? matchedRelation.introAmorces.definition
      : matchedRelation
      ? `Si l'on définit traditionnellement ${matchedRelation.concept1.toLowerCase()}${matchedRelation.concept2 ? ` et ${matchedRelation.concept2.toLowerCase()}` : ""}, leur relation soulève une tension philosophique majeure : ${matchedRelation.tensionPhilosophique.toLowerCase()}`
      : `Si l'on définit traditionnellement ${matchedNotion.name.toLowerCase()} comme ${matchedNotion.definition.toLowerCase()}, elle apparaît comme une exigence fondamentale pour l'existence humaine. Cependant, l'examen critique révèle que cette approche première se heurte à des limites réelles et à des contradictions pratiques.`
  );

  const introVariantDefinition: PhiloIntroVariant = {
    type: 'definition',
    titre: "Introduction par Définition Conceptuelle",
    description: "Partir de la définition claire des notions et de l'origine du sujet pour faire apparaître la difficulté.",
    amorceParadoxe: introAmorceDef,
    texteComplet: `${introAmorceDef} De cette tension naît le problème suivant : ${lowerFirst(problemeCourt)} ${phraseLiaisonAspects} ${formattedAspects}`
  };

  const introAmorceConstat = (
    isPhiloExtinctionOrPasser
      ? "Selon l’opinion courante, la philosophie apparaît comme une discipline abstraite qui ne s’intéresse pas directement aux réalités pratiques. Or, il est également reconnu qu’elle joue un rôle dans la réflexion et dans la structuration du savoir."
      : isMytheRaison
      ? "Dans l'évolution historique des sociétés, on constate souvent que le progrès scientifique et rationnel a cherché à dissiper les croyances et les récits mythologiques du passé. Cependant, la réflexion philosophique elle-même ne cesse de recourir à des allégories mythiques pour rendre compréhensibles des vérités métaphysiques profondes."
      : matchedRelation?.introAmorces?.constat
      ? matchedRelation.introAmorces.constat
      : matchedRelation
      ? `Dans l'expérience commune et l'organisation sociale, la question relative à ${/^[aeiouyéèêh]/i.test(matchedRelation.concept1) ? "l'" : "la notion de "}${matchedRelation.concept1.toLowerCase()} suscite des positions contrastées : d'un côté la reconnaissance de sa fécondité indispensable, de l'autre l'épreuve de ses contraintes ou de ses tensions inhérentes.`
      : `Dans l'expérience humaine et l'histoire des idées, ${matchedNotion.name.toLowerCase()} se présente spontanément comme une dimension essentielle de notre existence. Cependant, un examen critique révèle rapidement de profondes tensions entre son idéal proclamé et ses conditions concrètes d'exercice.`
  );

  const introVariantConstat: PhiloIntroVariant = {
    type: 'constat',
    titre: "Introduction par Constat d'Expérience ou de Société",
    description: "Partir d'une observation de la vie quotidienne avant de poser la question philosophique.",
    amorceParadoxe: introAmorceConstat,
    texteComplet: `${introAmorceConstat} Face à cette divergence, le problème se pose : ${lowerFirst(problemeCourt)} ${phraseLiaisonAspects} ${formattedAspects}`
  };

  const introAmorceCitation = (
    isPhiloExtinctionOrPasser
      ? "Le philosophe français Claude Bernard, dans « Introduction à l’étude de la médecine expérimentale », écrit : « La philosophie n’apprend rien, et ne peut rien apprendre d’elle-même parce qu’elle n’expérimente pas. » Pour lui, elle semble incapable de produire des connaissances pratiques et certaines. Or force est de constater que la philosophie est également considérée comme fondamentale pour la pensée et le savoir humains."
      : isMytheRaison
      ? "Dans son ouvrage « Mythe et pensée chez les Grecs », Jean-Pierre Vernant écrit que « la raison est née dans le sillage du mythe dont elle a rationalisé les interrogations fondamentales ». Cette idée suggère que le muthos et le logos ne sont pas de simples rivaux inconciliables."
      : matchedRelation?.introAmorces?.citation
      ? `Dans « ${matchedRelation.introAmorces.citation.oeuvre} », ${matchedRelation.introAmorces.citation.auteur} écrit : « ${matchedRelation.introAmorces.citation.citation} ». Par cette formule, ${matchedRelation.introAmorces.citation.explication} ${matchedRelation.introAmorces.citation.contreConstat}`
      : `Dans « ${firstThesisArg.work} », ${firstThesisArg.author} écrit : « ${firstThesisArg.quote} ». Cette prise de position valorise une dimension essentielle de la question. Toutefois, force est de constater qu'une telle thèse suscite d'importantes objections philosophiques.`
  );

  const introVariantCitation: PhiloIntroVariant = {
    type: 'citation',
    titre: "Introduction par Citation d'un Auteur",
    description: "Prendre appui sur la phrase célèbre d'un auteur pour lancer la réflexion.",
    amorceParadoxe: introAmorceCitation,
    texteComplet: `${introAmorceCitation} De cette contradiction naît le problème suivant : ${lowerFirst(problemeCourt)} ${phraseLiaisonAspects} ${formattedAspects}`
  };

  const introVariants: PhiloIntroVariant[] = [
    introVariantDefinition,
    introVariantConstat,
    introVariantCitation
  ];

  // Sélection de l'introduction retenue pour la rédaction complète
  // Variation déterministe par utilisateur : le fond et le plan restent identiques,
  // mais l'approche rédactionnelle de l'introduction varie selon userSeed/variantIndex.
  const introCandidates = isPhiloExtinctionOrPasser || isMytheRaison
    ? [introVariantDefinition, introVariantCitation, introVariantConstat]
    : /technique|progres|histoire|societe|travail|bonheur/i.test(cleanSubjectNorm)
    ? [introVariantConstat, introVariantDefinition, introVariantCitation]
    : /art|verite|conscience|inconscient|liberte|justice/i.test(cleanSubjectNorm)
    ? [introVariantDefinition, introVariantCitation, introVariantConstat]
    : [introVariantConstat, introVariantCitation, introVariantDefinition];

  const introSeed = typeof options?.variantIndex === "number"
    ? Math.abs(options.variantIndex)
    : options?.userSeed
    ? (options.userSeed + "|" + cleanSubjectNorm).split("").reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0, 2166136261)
    : 0;
  const chosenIntro = introCandidates[introSeed % introCandidates.length];
  let introFullText = chosenIntro.texteComplet;

  // 2. DÉVELOPPEMENT EN DEUX AXES AVEC CONNECTEURS VARIÉS ET STRUCTURE RIGOUREUSE
  // (Phrase d'affirmation solide et variée, explication approfondie de l'argument avant la citation, puis illustration et analyse spécifique)
  const CONNECTOR_PALETTES = [
    {
      axe1: ["Tout d’abord,", "Aussi,", "Enfin,"],
      axe2: ["D’emblée,", "Par ailleurs,", "Pour terminer,"]
    },
    {
      axe1: ["En premier lieu,", "De surcroît,", "En dernier lieu,"],
      axe2: ["Tout d'abord,", "En outre,", "En définitive,"]
    },
    {
      axe1: ["D’emblée,", "Par ailleurs,", "Pour clore ce premier temps,"],
      axe2: ["En premier lieu,", "Qui plus est,", "Pour clore cette analyse,"]
    },
    {
      axe1: ["Au point de départ de l’analyse,", "Dans le même sens,", "Enfin,"],
      axe2: ["À titre liminaire,", "Parallèlement,", "En dernier ressort,"]
    },
    {
      axe1: ["De prime abord,", "Aussi,", "Pour achever cette démonstration,"],
      axe2: ["D’entrée de jeu,", "De surcroît,", "En dernière analyse,"]
    }
  ];

  const CITATION_INTRO_PALETTES = [
    {
      axe1: ["C’est ce qu’exprime", "Cette analyse rejoint le constat de", "C’est ce que démontre avec rigueur"],
      axe2: ["C’est ainsi qu’affirme", "Cette perspective est étayée par", "Comme l’établit"]
    },
    {
      axe1: ["Cette vérité philosophique est mise en lumière par", "Cette idée trouve un écho décisif chez", "C’est ce que théorise"],
      axe2: ["Comme le souligne à juste titre", "Cette objection est solidement articulée par", "C’est ce qu’enseigne"]
    },
    {
      axe1: ["Tel est le sens de la réflexion de", "Dans cette même perspective, on observera avec", "C’est ce que met en évidence"],
      axe2: ["À cet égard, la critique formulée par", "Cette position s'accorde avec la pensée de", "Comme le rappelle judicieusement"]
    },
    {
      axe1: ["Comme le donne à penser", "Cette analyse est corroborée par", "C’est ce que soutient avec force"],
      axe2: ["Telle est précisément la position défendue par", "Cette exigence critique est mise en avant par", "Comme le démontre magistralement"]
    }
  ];

  const NOTION_CONCEPTUAL_SIGNIFICANCES: Record<string, { axe1: string; axe2: string }> = {
    "art-et-travail": {
      axe1: "l'effort méthodique du travail façonne la matière, discipline les pulsions immédiates et élève l'homme à l'autonomie",
      axe2: "les conditions matérielles de la division du travail et de la rentabilité risquent de déposséder le travailleur du sens de son activité",
    },
    "la-technique": {
      axe1: "l'arraisonnement technicien et l'automatisation font peser un risque d'asservissement et de dépendance sur la vie humaine",
      axe2: "la maîtrise critique et éthique des instruments techniques permet de libérer l'homme des servitudes naturelles et d'étendre son pouvoir d'action",
    },
    "l-art-et-le-beau": {
      axe1: "l'expérience esthétique nous arrache à l'utilitarisme quotidien en nous invitant à une contemplation désintéressée et pure de la beauté",
      axe2: "loin d'être un vain divertissement, la création artistique dévoile la vérité sensible du monde et réveille la liberté créatrice de l'esprit",
    },
    "la-liberte": {
      axe1: "la liberté s'éprouve d'abord comme l'affirmation souveraine d'un pouvoir de choisir et d'agir sans contrainte extérieure arbitraire",
      axe2: "l'authentique liberté ne saurait se réduire au caprice individuel et suppose l'obéissance réfléchie aux lois rationnelles et morales",
    },
    "le-devoir": {
      axe1: "l'impératif du devoir exige le renoncement aux penchants égoïstes pour se conformer à l'universalité de la loi morale",
      axe2: "l'accomplissement des devoirs éthiques doit s'articuler avec la légitime recherche du bonheur et de l'épanouissement humain",
    },
    "le-bonheur": {
      axe1: "l'aspiration au souverain bien oriente naturellement la volonté et s'accomplit dans la modération des désirs et la sérénité de l'âme",
      axe2: "la recherche absolue du bonheur se heurte à la finitude humaine, à la douleur inévitable et aux contradictions du désir",
    },
    "la-verite": {
      axe1: "la conquête méthodique du vrai exige d'écarter résolument les opinions trompeuses, les préjugés et les illusions affectives",
      axe2: "l'exercice rigoureux de la rationalité impose de reconnaître les limites de notre savoir et la dimension inachevée de toute certitude",
    },
    "la-science-et-la-theorie": {
      axe1: "la démarche expérimentale et la modélisation mathématique permettent de dégager des lois universelles régissant les phénomènes naturels",
      axe2: "la rectitude épistémologique exige de concevoir toute vérité scientifique comme une hypothèse provisoire, faillible et réfutable",
    },
    "l-histoire": {
      axe1: "le cours des événements humains est marqué par la contingence, le surgissement de l'inattendu et l'imprévisibilité de la liberté",
      axe2: "le devenir historique est sous-tendu par des dynamiques structurelles, des ruses de la raison ou des nécessités économiques intelligibles",
    },
    "la-conscience": {
      axe1: "la présence à soi de la conscience arrache l'homme à l'immédiateté animale et fonde sa dignité de sujet moral responsable",
      axe2: "la conscience immédiate peut être le siège d'illusions tenaces masquant les déterminismes corporels et sociaux qui la conditionnent",
    },
    "inconscient-responsabilite": {
      axe1: "l'existence de forces psychiques inconscientes relativise l'illusion d'une maîtrise souveraine et absolue du moi sur lui-même",
      axe2: "l'existence de déterminismes inconscients ne dispense nullement le sujet de son obligation morale et juridique de répondre de ses actes",
    },
    "etat-societe-loi-violence": {
      axe1: "l'instauration de l'autorité étatique et la force des lois sont indispensables pour conjurer la violence destructrice et garantir la sécurité civile",
      axe2: "l'exercice du pouvoir institutionnel comporte toujours le risque d'oppression et d'aliénation au détriment des libertés fondamentales",
    },
    "la-justice-et-le-droit": {
      axe1: "l'institution du droit positif et l'application stricte des règles juridiques constituent le rempart nécessaire contre l'arbitraire et la loi du plus fort",
      axe2: "l'exigence morale de justice transcende la simple conformité légale et peut légitimer la contestation des lois iniques",
    },
    "la-religion": {
      axe1: "la foi et l'expérience du sacré répondent à une aspiration existentielle profonde d'espérance, de salut et de transcendance",
      axe2: "la critique philosophique doit dénoncer les dérives dogmatiques et superstitieuses pour préserver l'émancipation rationnelle de l'esprit",
    },
    "le-temps-et-l-existence": {
      axe1: "le caractère irréversible de l'écoulement temporel confronte l'homme à l'angoisse de sa fragilité et à l'inéluctable fuite de l'instant",
      axe2: "la temporalité vécue, la mémoire et l'anticipation constituent le lieu même où la liberté forge des projets et donne sens à la vie",
    },
    "la-culture-et-l-education": {
      axe1: "l'éducation et la transmission culturelle façonnent l'esprit humain et le font accéder à l'universalité de la raison",
      axe2: "les conditionnements culturels particuliers risquent d'engendrer l'ethnocentrisme et d'entraver la pensée autonome",
    },
    "la-mort-et-la-finitude": {
      axe1: "la certitude de la mort rappelle à l'homme l'irrémédiable finitude de sa condition et la fragilité de toutes ses entreprises",
      axe2: "la conscience lucide de la mort incite l'homme à conférer une valeur inestimable à chaque instant et à vivre avec gravité et dignité",
    },
    "autrui": {
      axe1: "le détour par la relation à autrui et la reconnaissance réciproque sont indispensables pour sortir du solipsisme et se connaître soi-même",
      axe2: "la coexistence avec l'autre porte en elle la menace du conflit, de la chosification du regard et de l'aliénation de soi",
    },
    "la-nature": {
      axe1: "la nature offre un ordre harmonieux et une mesure fondatrice dont l'homme s'écarte au risque du dérèglement et de la démesure",
      axe2: "la liberté humaine suppose de dépasser la pure nécessité naturelle par la culture, la technique et la transformation du monde",
    },
    "le-langage": {
      axe1: "le langage est l'instrument souverain par lequel la pensée s'objective, se précise et se partage dans la communauté humaine",
      axe2: "la rigidité des mots institués trahit souvent l'indicible complexité du sensible et les nuances les plus intimes de la conscience",
    },
    "le-desir": {
      axe1: "le désir est la force motrice et vitale qui arrache l'homme à la passivité pour l'élancer vers la création et la quête de transcendance",
      axe2: "l'insatiabilité du manque et la démesure des passions peuvent asservir l'âme à une souffrance ininterrompue",
    },
    "memoire-et-oubli": {
      axe1: "la mémoire conserve les traces du passé pour édifier l'identité personnelle et prémunir les sociétés contre la répétition des tragédies",
      axe2: "la faculté d'oubli s'avère vitale pour ne pas étouffer sous le poids des souvenirs et demeurer disponible pour l'action présente",
    },
    "la-philosophie-utilite": {
      axe1: "la philosophie peut sembler éloignée des urgences matérielles immédiates et susciter le soupçon d'inutilité pratique",
      axe2: "la réflexion philosophique demeure irremplaçable pour former le jugement critique et guider l'homme vers la liberté et la sagesse",
    },
  };

  const seedShift = (typeof options?.variantIndex === "number") ? options.variantIndex * 2 : 0;
  const connectorPaletteIndex = Math.abs(userHash + seedShift) % CONNECTOR_PALETTES.length;
  const citationPaletteIndex = Math.abs((userHash >>> 2) + seedShift) % CITATION_INTRO_PALETTES.length;

  const part1Connectors = CONNECTOR_PALETTES[connectorPaletteIndex].axe1;
  const part2Connectors = CONNECTOR_PALETTES[connectorPaletteIndex].axe2;
  const part1CitationIntros = CITATION_INTRO_PALETTES[citationPaletteIndex].axe1;
  const part2CitationIntros = CITATION_INTRO_PALETTES[citationPaletteIndex].axe2;

  const buildAxeOpening = (
    title: string,
    significance: string,
    isAxe1: boolean,
    hash: number,
    isSpecialCase?: boolean,
    specialText?: string
  ): string => {
    if (isSpecialCase && specialText) {
      return specialText;
    }

    const titleClean = title.trim().replace(/^Axe\s+[I|V|X]+\s*:\s*/i, "").replace(/\.+$/, "");
    const titleLower = titleClean.charAt(0).toLowerCase() + titleClean.slice(1);
    const variantIndex = (hash + (isAxe1 ? 0 : 2)) % 5;

    if (isAxe1) {
      switch (variantIndex) {
        case 0:
          return `Affirmer que ${titleLower} implique que ${significance}. Plusieurs arguments permettent de justifier cette idée.`;
        case 1:
          return `Soutenir que ${titleLower} revient à considérer que ${significance}. Plusieurs raisons fondent cette affirmation.`;
        case 2:
          return `Poser que ${titleLower} conduit à admettre que ${significance}. De solides arguments viennent étayer cette perspective.`;
        case 3:
          return `Défendre l’idée selon laquelle ${titleLower} suppose de reconnaître que ${significance}. Divers arguments permettent de fonder cette position.`;
        case 4:
        default:
          return `Considérer que ${titleLower} revient à admettre que ${significance}. Plusieurs considérations décisives soutiennent cette approche.`;
      }
    } else {
      switch (variantIndex) {
        case 0:
          return `Dire que ${titleLower} revient à reconnaître que ${significance}. Plusieurs arguments permettent de le démontrer.`;
        case 1:
          return `Reconnaître que ${titleLower} suppose d’admettre que ${significance}. Plusieurs raisons viennent étayer cette réalité.`;
        case 2:
          return `Considérer que ${titleLower} invite à concevoir que ${significance}. De multiples arguments viennent nourrir cette objection.`;
        case 3:
          return `Observer que ${titleLower} exige de constater que ${significance}. Plusieurs arguments décisifs viennent confirmer cette antithèse.`;
        case 4:
        default:
          return `Soutenir au contraire que ${titleLower} revient à faire valoir que ${significance}. De solides raisons justifient ce dépassement critique.`;
      }
    }
  };

  const buildAnalyseIllustration = (
    arg: { author: string; work?: string; quote: string; explanation: string; statement: string; analyseIllustration?: string },
    idx: number,
    isAxe1: boolean,
    hash: number,
    oeuvreText: string
  ): string => {
    if (arg.analyseIllustration && arg.analyseIllustration.length > 20) {
      return arg.analyseIllustration;
    }

    const variantIndex = (hash + idx * 3 + (isAxe1 ? 0 : 2)) % 5;

    switch (variantIndex) {
      case 0:
        return `L'analyse de ${arg.author} permet ainsi de saisir l'enjeu central de cette position : loin d'être un constat accessoire, cette réflexion met en lumière la nécessité de dépasser les évidences immédiates pour accorder à cette réalité toute sa portée philosophique.`;
      case 1:
        return `Cette perspective dégagée par ${arg.author} dans ${oeuvreText} apporte un ancrage décisif au raisonnement : elle montre en quoi le problème dépasse la simple opinion subjective pour engager les principes mêmes de l'intelligibilité et de l'action.`;
      case 2:
        return `À travers cette réflexion, ${arg.author} montre que l'argument ne vaut pas seulement comme une critique abstraite, mais comme un repère fondamental pour penser la condition humaine confrontée à ses propres exigences.`;
      case 3:
        return `Le propos de ${arg.author} vient ainsi sceller la solidité de la démonstration : en dévoilant la structure interne du problème, il confirme que la démarche rationnelle ne peut faire l'économie d'un tel discernement conceptuel.`;
      case 4:
      default:
        return `La contribution de ${arg.author} éclaire ainsi d'un jour nouveau le fil conducteur de cette thèse, en établissant la cohérence fondamentale qui unit l'exigence critique à l'émancipation de la pensée.`;
    }
  };

  const part1Title = `Axe I : ${thesisToUse.title}`;
  const part1Significance = NOTION_CONCEPTUAL_SIGNIFICANCES[matchedNotion.id]?.axe1 ||
    "cette thèse première met en jeu les fondements mêmes de la question posée";
  const specialOverviewAxe1 = (isPhiloExtinctionOrPasser || isMytheRaison)
    ? (
      isPhiloExtinctionOrPasser
        ? "Affirmer que la philosophie peut s’effacer de l’ordonnancement du savoir et de la vie humaine implique qu’elle serait inutile ou inefficace. Plusieurs arguments permettent de justifier cette idée."
        : "Affirmer que le mythe s'oppose radicalement aux exigences critiques et démonstratives de la raison implique qu'il appartiendrait à l'illusion irrationnelle. Plusieurs arguments permettent de justifier cette idée."
    )
    : matchedRelation?.axe1.overview;

  const part1ThesisOverview = specialOverviewAxe1 || buildAxeOpening(
    thesisToUse.title,
    part1Significance,
    true,
    subjectHash
  );

  const formatSubPartParagraph = (
    conn: string,
    rawStatement: string,
    rawExplanation: string,
    author: string,
    work: string | undefined,
    rawQuote: string,
    citIntro: string,
    rawAnalyse: string
  ): string => {
    // 1. Idée directrice avec connecteur logique harmonieux
    const trimmedStatement = rawStatement.trim();
    const statementEndsPunct = /[.!?]$/.test(trimmedStatement);
    const ideaClean = statementEndsPunct ? trimmedStatement : `${trimmedStatement}.`;

    let openingPhrase: string;
    if (!conn || !conn.trim()) {
      openingPhrase = ideaClean;
    } else {
      const trimmedConn = conn.trim();
      const isProperNoun = /^(?:Platon|Aristote|Descartes|Spinoza|Kant|Hegel|Marx|Nietzsche|Freud|Sartre|Bergson|Bachelard|Popper|Rousseau|Hobbes|Locke|Alain|Pascal|Socrate|Augustin|Épicure|Épictète|Machiavel|Montesquieu|Comte|Durkheim|Weber|Arendt|Canguilhem|Foucault|Lévi-Strauss|Simone de Beauvoir|Claude Bernard|Jean-Pierre Vernant|Danfa|Thiam|Tradition|Dieu|L'État|L’État)\b/i.test(ideaClean);
      const startsWithQuote = /^["«]/.test(ideaClean);

      if (!isProperNoun && !startsWithQuote && trimmedConn.endsWith(",")) {
        const lowerFirst = ideaClean.charAt(0).toLowerCase() + ideaClean.slice(1);
        openingPhrase = `${trimmedConn} ${lowerFirst}`;
      } else {
        openingPhrase = `${trimmedConn} ${ideaClean}`;
      }
    }

    // 2. Explication conceptuelle du mécanisme
    const trimmedExpl = rawExplanation.trim();
    const explClean = /[.!?]$/.test(trimmedExpl) ? trimmedExpl : `${trimmedExpl}.`;

    // 3. Référence philosophique et citation
    const oeuvreClean = work ? (work.includes("«") ? work : `« ${work} »`) : "ses écrits";
    const quoteTrimmed = rawQuote.trim().replace(/^[\"«]\s*|\s*[\"»]$/g, "");
    const quoteHasTerminalPunct = /[.!?…]$/.test(quoteTrimmed);
    const citationContent = quoteHasTerminalPunct ? `« ${quoteTrimmed} »` : `« ${quoteTrimmed} ».`;

    // Vérifier si l'explication mentionne déjà le nom de l'auteur pour éviter les redites lourdes
    const authorParts = author.split(" ");
    const authorLastName = authorParts[authorParts.length - 1];
    const escapedAuthorLastName = authorLastName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const explicationAlreadyNamesAuthor = new RegExp(`\\b${escapedAuthorLastName}\\b`, "i").test(trimmedExpl);

    let citationBloc: string;
    if (explicationAlreadyNamesAuthor) {
      citationBloc = `C'est précisément cette thèse que ${author} explicite dans ${oeuvreClean} : ${citationContent}`;
    } else {
      citationBloc = `${citIntro} ${author} dans ${oeuvreClean} : ${citationContent}`;
    }

    // 4. Analyse de l'illustration
    const trimmedAnalyse = rawAnalyse.trim();
    const analyseClean = /[.!?]$/.test(trimmedAnalyse) ? trimmedAnalyse : `${trimmedAnalyse}.`;

    return `${openingPhrase} ${explClean} ${citationBloc} ${analyseClean}`.replace(/\s{2,}/g, " ").trim();
  };

  const part1SubParts = thesisToUse.arguments.map((arg, idx) => {
    const letters = ["A", "B", "C"];
    const conn = part1Connectors[idx] || "Par ailleurs,";
    const citIntro = part1CitationIntros[idx] || "Comme le souligne";
    const oeuvreText = arg.work ? (arg.work.includes("«") ? arg.work : `« ${arg.work} »`) : "ses écrits";
    
    const analyseIllustration = buildAnalyseIllustration(arg as any, idx, true, subjectHash, oeuvreText);

    const fullText = formatSubPartParagraph(
      conn,
      arg.statement,
      arg.explanation,
      arg.author,
      arg.work,
      arg.quote,
      citIntro,
      analyseIllustration
    );

    return {
      subPartLetter: letters[idx] || `${idx + 1}`,
      title: `Argument ${idx + 1} (${arg.author})`,
      argument: arg.statement,
      explication: arg.explanation,
      illustration: {
        auteur: arg.author,
        oeuvre: arg.work,
        citation: arg.quote,
        analyseIllustration
      },
      fullText
    };
  });

  // Transition canonique
  // Bilan de l'Axe 1 (dérivé du 1er aspect sous forme déclarative)
  // suivi de "Toutefois," et du 2e aspect exact
  const convertAspect1ToAffirmative = (asp1: string): string => {
    let s = asp1.trim();
    s = s.replace(/^(?:dans|en)\s+quelle\s+mesure\s+/i, "");
    s = s.replace(/\s*\?+$/, "").trim();
    s = s.replace(/^peut-on\s+/i, "l'on peut ");
    s = s.replace(/^doit-on\s+/i, "l'on doit ");
    s = s.replace(/^faut-il\s+/i, "il faut ");
    s = s.replace(/-(?:t-)?(?:ils?|elles?|on)\b/gi, "");
    s = s.replace(/\b(sont|est|constitue|menace|libère)\s+(?:ils?|elles?|on)\b/gi, "$1");
    s = s.replace(/\s{2,}/g, " ").trim();
    return s;
  };

  const questionRelanceAxe2 = aspect2.replace(/^toutefois,?\s*/i, "").trim();

  const bilanAxe1 = isPhiloExtinctionOrPasser
    ? "la philosophie pourrait s’effacer de l’ordonnancement du savoir et de la vie humaine"
    : isMytheRaison
    ? "le mythe s'oppose aux exigences démonstratives de la raison"
    : convertAspect1ToAffirmative(aspect1);

  const variantTransition = hasExplicitVariantOrSeed
    ? `De ce qui précède, nous retenons que ${thesisToUse.title.replace(/^Axe\s+[I|V|X]+\s*:\s*/i, '').replace(/[.!]+$/, '').trim().toLowerCase()}. Toutefois, cette première lecture ne suffit pas à épuiser le problème : il faut encore examiner la portée et les limites de ${antithesisToUse.title.replace(/^Axe\s+[I|V|X]+\s*:\s*/i, '').replace(/[.!]+$/, '').trim().toLowerCase()}.`
    : null;

  const transition1 = variantTransition || matchedRelation?.transition ||
    `De ce qui précède, nous retenons que ${bilanAxe1}. Toutefois, ${questionRelanceAxe2}`;

  const part2Title = `Axe II : ${antithesisToUse.title}`;
  const part2Significance = NOTION_CONCEPTUAL_SIGNIFICANCES[matchedNotion.id]?.axe2 ||
    "l'analyse philosophique exige d'interroger les limites et les objections qui s'opposent à la thèse initiale";
  const specialOverviewAxe2 = (isPhiloExtinctionOrPasser || isMytheRaison)
    ? (
      isPhiloExtinctionOrPasser
        ? "Dire que la philosophie demeure indispensable dans la vie de l’homme revient à reconnaître qu’elle est essentielle à la pensée et à l’action. Plusieurs arguments permettent de le démontrer."
        : "Dire que le mythe recèle une rationalité symbolique indispensable revient à reconnaître la complémentarité profonde du muthos et du logos. Plusieurs arguments permettent de le démontrer."
    )
    : matchedRelation?.axe2.overview;

  const part2ThesisOverview = specialOverviewAxe2 || buildAxeOpening(
    antithesisToUse.title,
    part2Significance,
    false,
    subjectHash
  );

  const part2SubParts = antithesisToUse.arguments.map((arg, idx) => {
    const letters = ["A", "B", "C"];
    const conn = part2Connectors[idx] || "De plus,";
    const citIntro = part2CitationIntros[idx] || "Comme le souligne";
    const oeuvreText = arg.work ? (arg.work.includes("«") ? arg.work : `« ${arg.work} »`) : "ses écrits";
    
    const analyseIllustration = buildAnalyseIllustration(arg as any, idx, false, subjectHash, oeuvreText);

    const fullText = formatSubPartParagraph(
      conn,
      arg.statement,
      arg.explanation,
      arg.author,
      arg.work,
      arg.quote,
      citIntro,
      analyseIllustration
    );

    return {
      subPartLetter: letters[idx] || `${idx + 1}`,
      title: `Objection ${idx + 1} (${arg.author})`,
      argument: arg.statement,
      explication: arg.explanation,
      illustration: {
        auteur: arg.author,
        oeuvre: arg.work,
        citation: arg.quote,
        analyseIllustration
      },
      fullText
    };
  });

  // 3. CONCLUSION DIALECTIQUE — réponse construite à partir du rapport exact du sujet.
  const buildDialecticalConclusion = () => {
    // Une relation reconnue possède une conclusion construite pour le couple
    // conceptuel exact. Elle doit être prioritaire sur la conclusion générique.
    if (matchedRelation?.conclusion) {
      return {
        bilan: matchedRelation.conclusion.bilanSynthese,
        reponse: matchedRelation.conclusion.reponseDefinitive,
        ouverture: matchedRelation.conclusion.elargissement
      };
    }

    const norm = normalizeForPolarity(subjectExact);
    if (/philosoph/.test(norm) && /util|inutil|mythe|chimere|illusion|pratique/.test(norm)) {
      return {
        bilan: "Au terme de notre analyse, la philosophie ne fournit pas toujours une utilité immédiate comparable à celle d'une technique ou d'une science expérimentale ; cette objection est donc pertinente si l'utilité est réduite au rendement pratique.",
        reponse: "Toutefois, cette conception est insuffisante : philosopher a une utilité propre, puisqu'il s'agit d'examiner les croyances, de clarifier les valeurs, de mettre en question les fins de l'action et d'orienter la conduite. La philosophie est ainsi utile non comme un outil de production, mais comme une pratique critique et réflexive.",
        ouverture: "La question de son utilité conduit alors à distinguer les moyens dont l'homme dispose pour agir des exigences de pensée qui permettent de déterminer pourquoi et pour quoi il agit."
      };
    }
    const thesis = thesisToUse.title.replace(/^Axe\s+[I|V|X]+\s*:\s*/i, '').replace(/[.!]+$/, '').trim();
    const anti = antithesisToUse.title.replace(/^Axe\s+[I|V|X]+\s*:\s*/i, '').replace(/[.!]+$/, '').trim();
    const conclusionVariants = [
      {
        reponse: `Toutefois, la réponse ne consiste pas à retenir mécaniquement l'une de ces positions. Il faut reconnaître ce que la première met justement en lumière, puis intégrer la critique de la seconde afin de déterminer les conditions, les limites et la portée de la relation posée par le sujet.`,
        ouverture: `Ainsi comprise, la question ne demande pas une opposition artificielle, mais une réponse conditionnée par le sens précis donné aux notions et par les exigences concrètes de l'action humaine.`
      },
      {
        reponse: `En définitive, la première position éclaire une dimension réelle du problème, mais elle reste insuffisante sans l'objection de la seconde. La réponse doit donc préciser les conditions et les limites dans lesquelles la relation étudiée peut être admise.`,
        ouverture: `Cette conclusion invite à examiner les conditions concrètes dans lesquelles la liberté, la vérité, le bonheur ou l'action humaine prennent effectivement sens.`
      },
      {
        reponse: `Il faut donc dépasser l'opposition initiale : la première thèse conserve sa part de vérité, tandis que la seconde en révèle les limites. La réponse dépend ainsi du sens précis des notions et de leur relation dans la situation étudiée.`,
        ouverture: `L'enjeu est alors de penser cette relation sans absolutiser une seule dimension du problème et sans perdre de vue les exigences de l'existence humaine.`
      }
    ];
    const selectedConclusion = conclusionVariants[userHash % conclusionVariants.length];
    return {
      bilan: `Au terme de notre analyse, deux dimensions complémentaires apparaissent : d'abord, ${thesis.charAt(0).toLowerCase() + thesis.slice(1)} ; ensuite, ${anti.charAt(0).toLowerCase() + anti.slice(1)}.`,
      reponse: selectedConclusion.reponse,
      ouverture: selectedConclusion.ouverture
    };
  };

  const conclusionBuilt = buildDialecticalConclusion();
  const bilanSynthese = conclusionBuilt.bilan;
  const reponseDefinitive = conclusionBuilt.reponse;
  const elargissement = conclusionBuilt.ouverture;
  const conclusionFullText = `${bilanSynthese} ${reponseDefinitive} ${elargissement}`;

  // CONTRÔLE SILENCIEUX & VALIDATION DES 8 RÈGLES MÉTHODOLOGIQUES CANONIQUES
  // ==========================================================================
  const rawComponentsToValidate: PhiloComponentsToValidate = {
    subjectExact,
    cleanSubjectNorm,
    problemeCourt,
    aspect1,
    aspect2,
    phraseLiaisonAspects,
    introFullText,
    part1Title,
    part2Title,
    hasPart3: false,
    part1SubParts,
    part2SubParts,
    transition1,
    bilanSynthese,
    reponseDefinitive,
    elargissement,
    conclusionFullText,
    lexiqueDefinitions,
    part1Connectors,
    part2Connectors,
    part1CitationIntros,
    part2CitationIntros
  };

  const { validatedComponents, report: philoValidationReport } = validateAndEnforcePhiloMethodology(rawComponentsToValidate);

  problemeCourt = validatedComponents.problemeCourt;
  aspect1 = validatedComponents.aspect1;
  aspect2 = validatedComponents.aspect2;
  introFullText = validatedComponents.introFullText;
  const validatedPart1Title = validatedComponents.part1Title;
  const validatedPart2Title = validatedComponents.part2Title;
  const validatedPart1SubParts = validatedComponents.part1SubParts;
  const validatedPart2SubParts = validatedComponents.part2SubParts;
  const validatedTransition1 = validatedComponents.transition1;
  const validatedBilanSynthese = validatedComponents.bilanSynthese;
  const validatedReponseDefinitive = validatedComponents.reponseDefinitive;
  const validatedElargissement = validatedComponents.elargissement;
  const validatedConclusionFullText = validatedComponents.conclusionFullText;

  const part1Full = `${part1ThesisOverview}\n\n` + validatedPart1SubParts.map(sp => sp.fullText).join("\n\n");
  const part2Full = `${part2ThesisOverview}\n\n` + validatedPart2SubParts.map(sp => sp.fullText).join("\n\n");

  const fullRedactionText = `INTRODUCTION\n\n${introFullText}\n\n` +
    `I. ${validatedPart1Title}\n\n${part1Full}\n\n` +
    `Transition :\n${validatedTransition1}\n\n` +
    `II. ${validatedPart2Title}\n\n${part2Full}\n\n` +
    `CONCLUSION\n\n${validatedConclusionFullText}`;

  const structuredRedaction: StructuredRedaction = {
    planSummary: `${validatedPart1Title} | ${validatedPart2Title}`,
    introduction: {
      amorce: chosenIntro.amorceParadoxe.split('.')[0] + '.',
      definitionTension: chosenIntro.amorceParadoxe.split('.').slice(1).join('.').trim(),
      problematique: problemeCourt,
      annoncePlan: `${phraseLiaisonAspects} ${formattedAspects}`,
      fullText: introFullText
    },
    development: {
      part1: {
        partNumber: 1,
        title: validatedPart1Title,
        thesisOverview: part1ThesisOverview,
        subParts: validatedPart1SubParts.map(sp => ({
          ...sp,
          illustration: {
            ...sp.illustration,
            analyseIllustration: sp.illustration.analyseIllustration || ""
          }
        })),
        fullText: part1Full
      },
      transition1: validatedTransition1,
      part2: {
        partNumber: 2,
        title: validatedPart2Title,
        thesisOverview: part2ThesisOverview,
        subParts: validatedPart2SubParts.map(sp => ({
          ...sp,
          illustration: {
            ...sp.illustration,
            analyseIllustration: sp.illustration.analyseIllustration || ""
          }
        })),
        fullText: part2Full
      }
    },
    conclusion: {
      bilanSynthese: validatedBilanSynthese,
      reponseDefinitive: validatedReponseDefinitive,
      elargissement: validatedElargissement,
      fullText: validatedConclusionFullText
    }
  };

  const steps = [
    {
      phaseName: "1. Travail Préliminaire (Lexique & Problématisation)",
      methodDescription: "Définitions contextuelles des mots clés du sujet, reformulation fidèle et problème interrogatif court.",
      draftingAdvice: "Le problème doit être court et percutant (pas de formulation alambiquée).",
      exemplaryDraft: `• Lexique :\n` + lexiqueDefinitions.map(l => `  - ${l.terme} : ${l.definition}`).join("\n") +
        `\n\n• Reformulation : ${reformulation}\n• Problème court : ${problemeCourt}\n• Aspect 1 : ${aspect1}\n• Aspect 2 : ${aspect2}`
    },
    {
      phaseName: "2. Introduction (En un seul bloc continu)",
      methodDescription: "Paradoxe initial (constat/définition) + Problème philosophique court + Questions des 2 aspects.",
      draftingAdvice: "Rédiger en un seul bloc continu sans alinéa interne.",
      exemplaryDraft: introFullText
    },
    {
      phaseName: "3. Axe I — Thèse étayée",
      methodDescription: "Développement ordonné d'arguments avec auteurs, œuvres et citations expliquées.",
      draftingAdvice: "Connecteurs variés : D'emblée, Par ailleurs, Enfin.",
      exemplaryDraft: part1Full
    },
    {
      phaseName: "4. Transition & Axe II — Antithèse critique",
      methodDescription: "Transition charnière (« De ce qui précède... Toutefois... ? ») puis examen des objections.",
      draftingAdvice: "La transition fait le bilan de l'Axe 1 et ouvre par une question sur l'Axe 2.",
      exemplaryDraft: `Transition : ${validatedTransition1}\n\n${part2Full}`
    },
    {
      phaseName: "5. Conclusion (Bilan + Point de vue motivé + Ouverture)",
      methodDescription: "Bilan équilibré des deux axes + Position personnelle motivée + Ouverture.",
      draftingAdvice: "Ne pas introduire de nouvelle citation en conclusion.",
      exemplaryDraft: validatedConclusionFullText
    }
  ];

  const methodologyAnalysis: MethodologyAnalysisResult = {
    exerciseTypeIdentified: "Dissertation Philosophique Canonique",
    disciplineIdentified: "Philosophie",
    conceptualDisambiguation: (() => {
      if (matchedRelation?.disambiguation) {
        return {
          hasAmbiguousTerm: true,
          term: matchedRelation.disambiguation.term,
          possibleMeanings: matchedRelation.disambiguation.possibleMeanings,
          retainedMeaning: matchedRelation.disambiguation.retainedMeaning,
          justification: matchedRelation.disambiguation.justification
        };
      }

      const hasMythe = /\bmythe\b/i.test(cleanSubjectNorm);
      const hasInutile = /\binutile|inutilit[ée]\b/i.test(cleanSubjectNorm);
      const hasIllusion = /\billusion\b/i.test(cleanSubjectNorm);

      if (isMytheRaison) {
        return {
          hasAmbiguousTerm: true,
          term: "Mythe et Raison (Muthos vs Logos / Les Antipodes)",
          possibleMeanings: [
            "Sens 1 (Opposition radicale) : Le mythe comme fable irrationnelle, imaginaire et dogmatique, diamétralement opposé aux preuves logiques et démonstratives de la raison.",
            "Sens 2 (Complémentarité et origine commune) : Le mythe comme matrice symbolique du questionnement humain, cherchant déjà à ordonner le monde et nourrissant la pensée philosophique."
          ],
          retainedMeaning: "Dépasser la fausse antinomie des antipodes : reconnaître l'opposition méthodologique entre le muthos et le logos tout en démontrant leur solidarité fondamentale dans la quête du sens.",
          justification: "RÈGLE D'OR MÉTHODOLOGIQUE ANTI-HORS-SUJET : Ne pas réduire le sujet à un simple rejet du mythe au profit de la science. Le sujet interroge la relation ('aux antipodes') : il convient de montrer la rupture critique sans ignorer la valeur philosophique et symbolique du mythe."
        };
      }

      if (hasMythe) {
        return {
          hasAmbiguousTerm: true,
          term: "Mythe (Polysémie critique & Évitement du hors-sujet)",
          possibleMeanings: [
            "Sens 1 (littéral/historique) : Récit sacré et fabuleux des origines mettant en scène des puissances divines (Muthos opposé au Logos rationnel).",
            "Sens 2 (figuré/critique en contexte) : Illusion trompeuse, chimère, discours stérile ou promesse vaine sans utilité concrète ni efficacité pratique."
          ],
          retainedMeaning: "Sens 2 (Illusion / Inutilité pratique) : Dans ce sujet, 'un mythe' est l'attribut critique de la philosophie. Le sujet porte exclusivement sur l'UTILITÉ, la FÉCONDITÉ et la NÉCESSITÉ de la philosophie pour l'existence humaine.",
          justification: "RÈGLE D'OR MÉTHODOLOGIQUE ANTI-HORS-SUJET : Ne pas confondre ce sujet avec une récitation historique sur le passage du mythe à la raison (Homère/Vernant). Traiter ce sujet exige d'analyser le reproche d'inutilité pratique face à l'utilité spirituelle et éthique."
        };
      }

      if (hasInutile || hasIllusion) {
        return {
          hasAmbiguousTerm: true,
          term: hasInutile ? "Utilité / Inutilité" : "Illusion",
          possibleMeanings: [
            "Sens matériel/immédiat : Ce qui produit un rendement technique, financier ou physique quantifiable.",
            "Sens philosophique/existentiel : Ce qui éclaire le sens de l'action, libère la conscience des préjugés et fonde les valeurs humaines."
          ],
          retainedMeaning: "Confrontation dialectique : dépasser l'inutilité pratique apparente pour révéler l'indispensable utilité existentielle et émancipatrice.",
          justification: "Précision sémantique impérative pour construire un axe antithétique pertinent sans contradiction factuelle."
        };
      }

      return {
        hasAmbiguousTerm: isLowConfidence,
        term: matchedNotion.name,
        possibleMeanings: [matchedNotion.definition],
        retainedMeaning: isLowConfidence
          ? "Notion la plus proche trouvée dans le référentiel officiel."
          : "Sens philosophique certifié du programme de Terminale (BAC)",
        justification: "Conformité stricte à la méthodologie officielle de dissertation philosophique."
      };
    })(),
    philoPreliminaryWork: {
      tensionPhilosophique: matchedRelation ? matchedRelation.tensionPhilosophique : undefined,
      validationReport: philoValidationReport,
      lexiqueDefinitions,
      reformulation,
      problematisation: {
        probleme: problemeCourt,
        aspect1,
        aspect2
      },
      introVariants,
      activeVariant: availableVariants ? activeVariantIdx : undefined,
      totalVariants: availableVariants ? availableVariants.length : undefined,
      argumentVariantsAvailable: availableVariants ? availableVariants.map(v => ({
        id: v.id,
        label: v.label,
        perspective: v.perspective
      })) : undefined,
      planAxe1: {
        titre: validatedPart1Title,
        arguments: validatedPart1SubParts.map(a => ({
          idee: a.argument,
          auteur: a.illustration.auteur,
          oeuvre: a.illustration.oeuvre,
          citation: a.illustration.citation,
          explication: a.explication
        }))
      },
      transitionAxe1Axe2: validatedTransition1,
      planAxe2: {
        titre: validatedPart2Title,
        arguments: validatedPart2SubParts.map(a => ({
          idee: a.argument,
          auteur: a.illustration.auteur,
          oeuvre: a.illustration.oeuvre,
          citation: a.illustration.citation,
          explication: a.explication
        }))
      }
    },
    fasciculeMethodologyActivated: {
      name: `Méthodologie Officielle de Dissertation Philosophique`,
      description: `Traitement selon les étapes préliminaires (Lexique, Reformulation, Problématisation) et rédaction intégrale en 2 axes.`,
      stepsApplied: [
        "1. Lexique contextuel des mots pertinents du sujet.",
        "2. Reformulation claire et authentique du sujet.",
        "3. Problématisation concise (Problème court + 2 Aspects interrogatifs).",
        "4. Introduction rédigée en un seul bloc continu.",
        "5. Développement en 2 axes équilibrés reliés par une transition canonique.",
        "6. Conclusion tripartite (Bilan, Point de vue personnel motivé, Ouverture)."
      ]
    },
    sourceDecomposition: {
      fasciculeMethodologies: ["Canevas officiel de dissertation philosophique"],
      fasciculeKnowledgeUsed: [matchedNotion.definition, ...matchedNotion.thesis.arguments.map(a => `${a.author} : ${a.work}`)],
      externalKnowledgeMobilized: matchedNotion.antithesis.arguments.map(a => `${a.author} : ${a.work}`)
    },
    pedagogicalTransferExplanation: "",
    level1Hint: `Interrogez la tension entre ${matchedNotion.thesis.title} et ${matchedNotion.antithesis.title}.`,
    level2Methodology: steps.map(s => `${s.phaseName} : ${s.methodDescription}`).join("\n"),
    level3GuidanceSteps: [
      `1. Introduction : Poser le problème court (${problemeCourt})`,
      `2. Axe I : ${part1Title}`,
      `3. Transition : Mettre en doute la suffisance de la thèse`,
      `4. Axe II : ${part2Title}`,
      `5. Conclusion : Proposer une synthèse philosophique motivée`
    ],
    level4DetailedOutline: `I. TRAVAIL PRÉLIMINAIRE\n- Lexique des mots pertinents\n- Reformulation : ${reformulation}\n- Problème court : ${problemeCourt}\n- Aspects : ${aspect1} / ${aspect2}\n\nII. INTRODUCTION (En un seul bloc continu)\n\nIII. DÉVELOPPEMENT\n1. ${part1Title}\n` + part1SubParts.map(sp => `   * ${sp.title}`).join("\n") + `\n2. ${part2Title}\n` + part2SubParts.map(sp => `   * ${sp.title}`).join("\n") + `\n\nIV. CONCLUSION\n- Bilan : ${bilanSynthese}\n- Réponse personnelle : ${reponseDefinitive}\n- Élargissement : ${elargissement}`,
    level5FullRedaction: fullRedactionText,
    structuredRedaction,
    stepByStepBreakdown: steps.map((s, idx) => ({
      stepNumber: idx + 1,
      stepTitle: s.phaseName,
      methodologyRuleApplied: s.methodDescription,
      content: s.exemplaryDraft,
      sourceTags: ["Philosophie", matchedNotion.name],
      pedagogicalTip: s.draftingAdvice
    })),
    fullSynthesizedResponse: fullRedactionText,
    evaluationCriteria: [
      {
        criterion: "Compréhension et problématisation du sujet",
        fasciculeOrigin: true,
        scoreMax: 5,
        description: "Dégagement net du paradoxe et formulation précise du problème philosophique.",
        tipsForAutonomy: "Éviter les amorces passe-partout. Formuler les deux aspects du problème avec rigueur."
      },
      {
        criterion: "Cohérence de l'argumentation et culture philosophique",
        fasciculeOrigin: true,
        scoreMax: 8,
        description: "Mobilisation pertinente d'auteurs, d'œuvres et de citations expliquées en contexte.",
        tipsForAutonomy: "Toujours articuler : Idée directrice -> Raisonnement logique -> Citation exacte de l'auteur -> Explication."
      },
      {
        criterion: "Organisation du plan et transitions dialectiques",
        fasciculeOrigin: true,
        scoreMax: 5,
        description: "Enchaînement rigoureux des axes et présence d'une transition charnière interrogative.",
        tipsForAutonomy: "La transition ne doit pas être un simple résumé : elle doit démontrer pourquoi la thèse 1 est incomplète."
      },
      {
        criterion: "Qualité de l'expression et présentation de la copie",
        fasciculeOrigin: true,
        scoreMax: 2,
        description: "Langue soignée, vocabulaire philosophique précis et respect de la forme continue sans titres apparents.",
        tipsForAutonomy: "Dans la copie finale, n'écrivez aucun titre ou numéro : utilisez des alinéas nets et des sauts de 2 lignes."
      }
    ],
    isAcademicPaper: true,
    isDirectRestitution: false,
    academicPaperType: "Dissertation Philosophique Canonique",
    isFallback: false,
    activeVariant: availableVariants ? activeVariantIdx : undefined,
    totalVariants: availableVariants ? availableVariants.length : undefined,
    argumentVariantsAvailable: availableVariants ? availableVariants.map(v => ({
      id: v.id,
      label: v.label,
      perspective: v.perspective
    })) : undefined
  };

  const result: PhiloSolutionResult = {
    title: `Dissertation Philosophique — ${matchedNotion.name}`,
    themeId: matchedNotion.id,
    themeTitle: "Programme Officiel de Philosophie Terminale (BAC CI)",
    notionName: matchedNotion.name,
    problemStatement: problemeCourt,
    reformulation,
    thesis: thesisToUse,
    antithesis: antithesisToUse,
    synthesisAndPersonalView: `Synthèse : L'analyse dialectique réconcilie l'exigence critique et l'accomplissement humain.`,
    steps,
    finalConclusion: `Résolution certifiée conforme au barème et aux normes méthodologiques de la DPFC pour l'épreuve de Philosophie au Baccalauréat ivoirien.`,
    toMethodologyAnalysisResult: () => methodologyAnalysis
  };

  return {
    success: true,
    classification: {
      notionId: matchedNotion.id,
      notionName: matchedNotion.name,
      confidence
    },
    result,
    methodologyAnalysis,
    structuredRedaction,
    pedagogicalMetadata: {
      level: "Terminale A, C, D",
      discipline: "Philosophie",
      examType: "Baccalauréat"
    }
  };
}

export function resolvePhiloSubject(statement: string, options?: PhiloSolveOptions) {
  const res = solvePhiloTle(statement, options);
  if (!res.success || !res.methodologyAnalysis) return null;
  return {
    success: true,
    subjectType: "philosophie",
    problematisation: res.methodologyAnalysis.philoPreliminaryWork?.problematisation || {
      probleme: res.result?.problemStatement || "",
      aspect1: "",
      aspect2: "",
    },
    redactionComplete: res.methodologyAnalysis.level5FullRedaction || "",
    methodologyAnalysis: res.methodologyAnalysis,
    result: res.result,
  };
}
