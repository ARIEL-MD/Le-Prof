/**
 * BASE DE DONNÉES PÉDAGOGIQUE OFFICIELLE — ANNALES FRANÇAIS TERMINALE A (2020)
 * BURKINA FASO — MINISTÈRE DE L'ÉDUCATION NATIONALE (MENAPLN / DGREIP)
 * Auteurs : Joseph André OUEDRAOGO (IES), Saïdou OUEDRAOGO (IES), Adama YAMEOGO (IES), W. Yolande IDO / ZONG-NABA (IES)
 * Préface : Pr Stanislas OUARO (Ministre de l'Éducation nationale)
 * 
 * Contient :
 * 1. Rappels de cours méthodologiques complets :
 *    - La contraction de texte (Règles du quart +/- 10%, respect du système d'énonciation, vocabulaire contextuel, discussion)
 *    - Le commentaire composé (Fond et forme inséparables, centres d'intérêt, citations avec mots de liaison)
 *    - L'essai littéraire / Dissertation (Analyse du sujet, plan détaillé, paragraphe argumentatif)
 * 2. Épreuves d'examen avec textes intégraux et corrigés modèles officiels :
 *    - Contraction 1 : Mukala Kadima-Nzuji, « Diagnostic de l'enseignement en Afrique » (Jeune Afrique 2011)
 *    - Contraction 2 : Joseph Ki-Zerbo, « Chefs d'États irresponsables » (À quand l'Afrique ? 2013)
 *    - Contraction 3 : Norbert Zongo, « Que faire ? » (L'Indépendant 1997)
 *    - Commentaire 1 : Mukala Kadima-Nzuji, « Gorgé de sang » (Redire les mots anciens 1977)
 *    - Commentaire 2 : Emile Lalsaga, « Perdition » (Les sillons de l'existence 2014)
 *    - Commentaire 3 : Sophie Heidi Kam, « Le blues de l'Afrique (II) » (Quêtes 2004) - Intégralement rédigé
 *    - Dissertation 1 : Catherine Cusset, Indigo (2013) - « La littérature comme énoncé de la vérité »
 *    - Dissertation 2 : Julien Clerc / Lucien Rioux (1987) - « Distraire les gens »
 *    - Dissertation 3 : Emile Lalsaga (2014) - « La poésie, seule manière de ressentir les vibrations intenses »
 *    - Dissertation 4 : Prosper Kompaoré - « Le théâtre, alternative crédible pour l'éveil des consciences »
 */

export interface BurkinaMethodoFiche {
  exercice: 'Contraction de texte' | 'Commentaire composé' | 'Dissertation littéraire';
  reglesEtPrincipes: string[];
  demarche: { etape: string; description: string; astuces: string }[];
  piegesEviter: string[];
}

export interface BurkinaSujetCorrige {
  id: string;
  type: 'contraction' | 'commentaire' | 'dissertation';
  session: string;
  titreOuAuteur: string;
  texteComplet?: string;
  resumeOfficiel?: { nombreMots: number; texte: string };
  vocabulaire?: { expression: string; sensSelonTexte: string }[];
  planDetaille?: {
    axe1: { titre: string; elements: string[] };
    axe2: { titre: string; elements: string[] };
    syntheseOuPortee?: string;
  };
  redactionComplete?: string;
}

export const BURKINA_METHODOLOGIES_OFFICIELLES: BurkinaMethodoFiche[] = [
  {
    exercice: 'Contraction de texte',
    reglesEtPrincipes: [
      "Restituer fidèlement et brièvement la pensée de l'auteur en respectant le fil logique.",
      "Respecter scrupuleusement le quart du texte initial (marge de tolérance de +/- 10%). Mentionner le décompte exact des mots à la fin.",
      "Garder le même système d'énonciation (ne jamais dire 'l'auteur dit que').",
      "S'interdire tout commentaire personnel ou jugement de valeur.",
      "Règle d'or : « Le texte, tout le texte, rien que le texte »."
    ],
    demarche: [
      { etape: "Compréhension", description: "Identifier le genre, la situation d'énonciation et l'idée générale (thème en phrase nominale, idée générale en phrase verbale).", astuces: "Repérer les connecteurs logiques explicites et implicites." },
      { etape: "Élaboration du plan", description: "Dégager les idées essentielles et les reformuler avec un lexique personnel.", astuces: "Bannir les montages de citations brutes." },
      { etape: "Vocabulaire contextuel", description: "Rédiger une phrase brève complète sans reprendre les mots de l'expression.", astuces: "Éviter les tics 'l'auteur veut dire que'." },
      { etape: "Discussion argumentée", description: "Mini-dissertation en deux axes (Thèse / Antithèse) appuyée sur des exemples tirés de la culture générale et de l'actualité.", astuces: "Penser à une courte introduction posant le problème et une conclusion nuancée." }
    ],
    piegesEviter: [
      "Dépasser la marge de tolérance de 10% (sanction automatique de points au Bac).",
      "Écrire à la 3e personne si le texte est écrit à la 1re personne.",
      "Faire un patchwork de citations empruntées au texte."
    ]
  },
  {
    exercice: 'Commentaire composé',
    reglesEtPrincipes: [
      "Règle fondamentale : Ne jamais dissocier l'étude du fond de celle de la forme.",
      "Organiser le devoir en 2 ou 3 grands centres d'intérêt (axes de lecture).",
      "Chaque sous-partie associe : Idée directrice + Relevé textuel + Procédé stylistique + Effet de sens produit.",
      "Intégrer les citations entre guillemets à l'aide d'un mot d'articulation syntaxique."
    ],
    demarche: [
      { etape: "Compréhension & Repérage", description: "Identifier le thème, examiner le paratexte, relever les champs lexicaux, figures de style et tonalités.", astuces: "Souligner les verbes, adverbes, répétitions et rythmes syntaxiques." },
      { etape: "Plan détaillé", description: "Regrouper les sous-thèmes en centres d'intérêt cohérents reliés par des transitions logiques.", astuces: "Utiliser des phrases de transition formulées sous forme interrogative ou avec 'ainsi'." },
      { etape: "Rédaction", description: "Introduction en 3 temps (entrée en matière, présentation de l'idée générale, annonce du plan), développement aéré (saut de ligne entre parties), conclusion avec bilan des procédés et ouverture.", astuces: "Présenter introduction et conclusion en un seul paragraphe chacune." }
    ],
    piegesEviter: [
      "Paraphraser le texte de façon linéaire strophe par strophe ou ligne par ligne.",
      "Dresser des catalogues de figures de style sans expliquer l'effet produit.",
      "Oublier de souligner les titres des œuvres complètes."
    ]
  },
  {
    exercice: 'Dissertation littéraire',
    reglesEtPrincipes: [
      "« Le sujet, tout le sujet, rien que le sujet » : Déterminer soigneusement le champ et les limites de l'énoncé.",
      "Le plan doit découler directement de la consigne (dialectique, thématique, analytique ou comparatif).",
      "Le développement se construit en paragraphes argumentatifs : Idée directrice nette + Explication logique + Illustration concrète (œuvre, auteur, personnage).",
      "Équilibrer le nombre d'arguments entre la première et la seconde partie."
    ],
    demarche: [
      { etape: "Étude du sujet", description: "Définition contextuelle des mots-clés, reformulation sans dénaturer, formulation du problème central.", astuces: "Identifier immédiatement le genre ciblé : poésie, roman, théâtre ou littérature générale." },
      { etape: "Mobilisation des idées", description: "Rechercher des arguments et illustrations littéraires variés (auteurs africains, classiques, modernes).", astuces: "Classer les arguments selon qu'ils confortent ou réfutent la thèse." },
      { etape: "Rédaction soignée", description: "Introduction en un paragraphe (Idée générale, reprise ou reformulation de la citation, annonce du plan), transitions nettes, conclusion équilibrée avec jugement personnel.", astuces: "Sauter deux lignes entre l'intro et le corps, une ligne entre les parties." }
    ],
    piegesEviter: [
      "Utiliser uniquement le roman quand le sujet porte sur la littérature générale.",
      "Donner des exemples sans les analyser au regard de l'argument soutenu.",
      "Opposer artificiellement deux notions quand le sujet appelle une synthèse combinatoire."
    ]
  }
];

export const BURKINA_CORRIGES_ANNALES: BurkinaSujetCorrige[] = [
  {
    id: "burkina-contraction-kadima-nzuji-2016",
    type: "contraction",
    session: "Bac 2016 - Série A4/A5 - Université Ouaga I Pr Joseph Ki-Zerbo",
    titreOuAuteur: "Mukala Kadima-Nzuji, « Diagnostic de l'enseignement en Afrique » (Jeune Afrique 2011)",
    texteComplet: "L’éducation en Afrique est en crise. Personne ne l’ignore. Cet état de fait se manifeste notamment par l’incapacité du système éducatif à former des citoyens à même de répondre aux besoins de la société... (643 mots)",
    resumeOfficiel: {
      nombreMots: 177,
      texte: "Tout le monde sait que l’enseignement en Afrique est en difficulté. Cela se traduit par le caractère inadapté de son système éducatif. Pour certains, la cause principale de la crise est l’inadéquation des programmes avec les besoins de la société. Il en résulte que les multiples réformes scolaires ont échoué. Et plus la crise perdure plus ses effets s’accentuent. À ces problèmes vient se greffer celui de la maîtrise insuffisante de la langue française. Pourtant, rien ne justifie que nous n’arrivions pas à nous séparer de cette langue plus de cinquante ans après les indépendances. Une autre absurdité est que le français des manuels est en déphasage avec celui de l’enseignant et de l’apprenant. Cependant, la rédaction des manuels de français de façon endogène ne résout pas le problème puisque cela produit une langue abâtardie qui complique les problèmes des apprenants. Une dernière incongruité est que les étudiants recourent à la langue africaine pour comprendre les cours dispensés en français. Logiquement, l’on peut s’interroger sur la pertinence de garder le français comme seul médium de l’enseignement."
    },
    vocabulaire: [
      {
        expression: "Une langue abâtardie",
        sensSelonTexte: "Une langue qui a perdu ses qualités originelles au point de devenir méconnaissable et dégradée."
      },
      {
        expression: "Vecteur d'enseignement",
        sensSelonTexte: "La langue utilisée comme moyen de transmission et de réception des connaissances dans le système scolaire."
      }
    ],
    planDetaille: {
      axe1: {
        titre: "Thèse : La pertinence d'adopter la langue du plus grand nombre",
        elements: [
          "Logique démocratique et pragmatique : Privilégier la langue majoritaire renforce l'adhésion populaire.",
          "Efficacité pédagogique : L'élève assimile plus vite les concepts dans une langue parlée au quotidien.",
          "Atténuation des barrières élitistes et des tensions sociales."
        ]
      },
      axe2: {
        titre: "Antithèse : Les limites et risques géopolitiques",
        elements: [
          "Frustration des minorités linguistiques dans des pays multilingues.",
          "Difficulté de rayonnement international et coût élevé de la traduction scientifique.",
          "Risque de fragmentation de la communication interafricaine (ex. modèle du Swahili en Tanzanie)."
        ]
      }
    }
  },
  {
    id: "burkina-contraction-ki-zerbo-2017",
    type: "contraction",
    session: "Bac 2017 - Série A4/A5 - Université Ouaga I Pr Joseph Ki-Zerbo",
    titreOuAuteur: "Joseph Ki-Zerbo, « Chefs d'États irresponsables » (À quand l'Afrique ? 2013)",
    texteComplet: "L’État en Afrique est très souvent un État patrimonial. Si celui qui est à la tête de l’État prend tous les biens publics comme bien patrimoniaux, c’est comme si l’État disparaissait... (700 mots)",
    resumeOfficiel: {
      nombreMots: 150,
      texte: "L’État en Afrique est perçu comme un bien privé et ceux qui profitent de cette situation sont les dirigeants africains. Certains leaders politiques africains font preuve de manque de responsabilité dans la gestion des affaires de la cité. Cet état de fait s’apparente à la mort de l’État. C’est tout le contraire du dirigeant colonial ainsi que des chefs traditionnels. Ces derniers étaient tenus par exemple à la responsabilité grâce à des mécanismes sociaux qui, malheureusement n’existent pas aujourd’hui. C’est pourquoi, les dirigeants africains sont plus légaux que légitimes. Outre ce défaut, ils accusent aussi des failles au plan éthique et moral. Aussi ne méritent-ils pas l’appellation d’élites. Le fait qu’ils rechignent à répondre de leurs actions vient davantage accentuer ce manque de légitimité. Or, sans cette qualité il est impossible aux leaders politiques africains d’asseoir leur autorité à l’image des chefs traditionnels de certains pays."
    },
    vocabulaire: [
      {
        expression: "L'esprit d'irresponsabilité",
        sensSelonTexte: "Le refus délibéré des dirigeants de rendre compte de leurs actes et de leur gestion devant les institutions et le peuple."
      },
      {
        expression: "Être au-dessus du commun des gens",
        sensSelonTexte: "Incarner une hauteur morale, éthique et intellectuelle exemplaire qui dépasse la moyenne ordinaire des citoyens."
      }
    ],
    planDetaille: {
      axe1: {
        titre: "Thèse : La tentation autocratique et l'irresponsabilité des dirigeants",
        elements: [
          "Personnalisation du pouvoir et sentiment d'invulnérabilité (gestion solitaire et patrimoniale).",
          "Assujettissement des contre-pouvoirs et justice aux ordres."
        ]
      },
      axe2: {
        titre: "Antithèse : Les figures exemplaires de redevabilité et de leadership moral",
        elements: [
          "Modèles historiques de transparence et d'abnégation : Nelson Mandela en Afrique du Sud, Julius Nyerere en Tanzanie.",
          "Exigences contemporaines de bonne gouvernance et sens du devoir envers la nation (Paul Kagamé au Rwanda)."
        ]
      }
    }
  },
  {
    id: "burkina-contraction-norbert-zongo-2019",
    type: "contraction",
    session: "Bac 2019 - Série A4/A5 - Université Ouaga I Pr Joseph Ki-Zerbo",
    titreOuAuteur: "Norbert Zongo, « Que faire ? » (L'Indépendant N°225, 16 décembre 1997)",
    texteComplet: "Dans les tourments de la révolution bolchévique, Lénine s’interrogea dans un célèbre ouvrage : « Que faire » ? Cette question est à l’ordre du jour en Afrique... (725 mots)",
    resumeOfficiel: {
      nombreMots: 164,
      texte: "Dans le contexte tourmenté de son pays, Lénine s’était posé la question suivante : que faire ? Cette interrogation doit être d’actualité en Afrique si l’on veut résoudre les difficultés que traverse le continent noir. De ce point de vue, l’on doit se poser la question de savoir si l’Afrique sortira la tête de l’eau. Deux camps s’affrontent autour de cette question. Il y a d’abord celui des pessimistes pour lesquels le sort du continent noir est déjà scellé. Il y a ensuite ceux qui pensent le contraire. Pour cette dernière catégorie de gens, l’Afrique est promise à un bel avenir pour peu que les Africains le veuillent. Chaque camp a ses raisons. Mais l’essentiel est que les Africains s’accordent le temps de s’interroger, de se poser permanemment des questions à l’effet d’améliorer l’existant. Cette faculté à se poser les bonnes questions à tout moment est capitale à la vie. Aussi nous les Africains, ne devons jamais arrêter de nous interroger si nous voulons progresser."
    },
    vocabulaire: [
      {
        expression: "Il en est la charpente",
        sensSelonTexte: "Le questionnement lucide constitue le socle vital et la colonne vertébrale qui soutient toute existence humaine consciente."
      },
      {
        expression: "La culture de la défaite",
        sensSelonTexte: "L'attitude passive et défaitiste qui consiste à capituler sans se battre et à s'installer dans la résignation face à l'épreuve."
      }
    ],
    planDetaille: {
      axe1: {
        titre: "Thèse : Les atouts indiscutables de l'Afro-optimisme",
        elements: [
          "Richesses géologiques colossales : or, bauxite, diamant, pétrole, coltan.",
          "Potentiel agronomique immense : millions d'hectares de terres arables encore inexploitées.",
          "Vitalité démographique : population jeune, dynamique et connectée."
        ]
      },
      axe2: {
        titre: "Antithèse : Les conditions indispensables au développement réel",
        elements: [
          "Nécessité de former et valoriser le capital humain (sortir de la dépendance intellectuelle extérieure).",
          "Culture de la rigueur, éducation civique et amour du travail bien fait.",
          "Gouvernance patriotique et visionnaire incarnée par des figures intègres (Thomas Sankara) face aux kleptocrates (Mobutu)."
        ]
      }
    }
  },
  {
    id: "burkina-commentaire-sophie-kam-2019",
    type: "commentaire",
    session: "Bac 2019 - Série A4/A5 - Université Ouaga I Pr Joseph Ki-Zerbo",
    titreOuAuteur: "Sophie Heidi Kam, « Le blues de l'Afrique (II) » (Quêtes 2004)",
    texteComplet: "Je suis l’Afrique / Mon nom est Afrique / Et pourquoi donc, fils ? / Pourquoi vers ma perte, je m’entête ?...",
    planDetaille: {
      axe1: {
        titre: "Axe 1 : Une Afrique minée par la souffrance et la guerre",
        elements: [
          "Champ lexical de la violence et du carnage : « division et destruction », « relents de cadavres », « abîmes profonds ».",
          "Métaphore des profiteurs : « terre survolée de rapaces » (écho aux « vautours » de David Diop).",
          "Accumulation tragique des victimes vulnérables : « femmes, enfants et vieillards / Affamés, malnutris et malades ».",
          "Hyperbole du désastre continu : « A profusion, je sème les malheurs qui affligent »."
        ]
      },
      axe2: {
        titre: "Axe 2 : Une poétesse habitée par une douleur déchirante et un appel à l'éveil",
        elements: [
          "Personnification de l'Afrique et énonciation en « Je » désenchanté.",
          "Pathétique et compassion filiale : « Mon cœur pleure mon impuissance », répétition de « J'entends ».",
          "Interrogation anaphorique obsédante : « Pourquoi vers ma perte, je m’entête ? » fustigeant l'autodestruction coupable.",
          "Invite au sursaut collectif pour les populations qui « demandent répit »."
        ]
      }
    },
    redactionComplete: `L’histoire de l’Afrique au cours de ces derniers siècles a été caractérisée par l’esclavage et la colonisation et leurs corollaires de souffrances. Les indépendances survenues dans les années 1960 n’ont pas véritablement affranchi le continent ni assuré le bien-être des populations. C’est ce désenchantement que traduit Sophie Heidi KAM dans « Le blues de l’Afrique », extrait de Quêtes (2004). Dans notre analyse, nous montrerons d’abord l’image désastreuse d'un continent ravagé par la guerre, puis les sentiments de douleur et d’appel au sursaut qui animent la poétesse.\n\nLe poème s'ouvre par une personnification poignante : « Je suis l’Afrique / Mon nom est Afrique » (v. 1-2). Loin de proclamer une fierté convenue, ce vers débouche aussitôt sur une interrogation récurrente : « Et pourquoi donc, fils ? / Pourquoi vers ma perte, je m’entête ? » (v. 3-4). L'anaphore de l'adverbe interrogatif souligne l'absurdité du drame. L'Afrique est dépeinte comme un champ de carnage permanent alimenté par « ces armes » (v. 5) génératrices de « ruines », « souffrances » et « abîmes profonds » au « relent de cadavre » (v. 6-7). À cette tragédie intestine s'ajoute le pillage des ressources orchestré par des puissances prédatrices, désignées par la métaphore percutante de « rapaces » (v. 12), rappelant les « vautours » dénoncés jadis par David Diop. Enfin, l'accumulation des maux accable les êtres les plus sans défense : « Je vois des femmes, des enfants et des vieillards / Affamés, malnutris et malades » (v. 20-21).\n\nFace à cette décomposition, la voix poétique se fait l'écho d'une immense affliction : « Ma douleur pour mon peuple est sans frontière / Et mon cœur pleure mon impuissance » (v. 10-11). Le terme « blues », emprunté au chant plaintif des esclaves afro-américains, unit les épreuves d'hier aux tourments présents. L'auteure répète « J'entends » comme un leitmotiv pour briser l'indifférence générale. Mais derrière le désespoir affleure l'indignation contre l'inconscience des dirigeants et des citoyens : le verbe « s'entêter » montre que l'Afrique est responsable de sa propre chute. Les questions lancinantes deviennent ainsi une sommation salutaire adressée aux fils du continent afin qu'ils prennent leur destin en main.\n\nEn définitive, Sophie Heidi Kam réussit à transformer la plainte douloureuse du « blues » en un plaidoyer pour la paix et la renaissance africaine. La poésie y retrouve sa mission fondamentale d'éveilleuse des peuples.`
  },
  {
    id: "burkina-dissertation-catherine-cusset-2019",
    type: "dissertation",
    session: "Bac 2019 - Série A4/A5 - Université Ouaga I Pr Joseph Ki-Zerbo",
    titreOuAuteur: "Catherine Cusset, Indigo (2013) : « La littérature comme énoncé de la vérité »",
    planDetaille: {
      axe1: {
        titre: "Thèse : L'exigence de vérité comme fondement de la littérature",
        elements: [
          "Le réalisme et le naturalisme comme observation scrupuleuse des faits : Émile Zola dans Le Roman expérimental (« Il garde pour lui ses émotions, il expose simplement ce qu’il a vu ») et Germinal.",
          "Le roman miroir de la société : Stendhal (« Le roman est un miroir que l’on promène le long d'une grande route »).",
          "L'engagement au prix de sa sécurité : Dénoncer les dérives au péril de sa liberté."
        ]
      },
      axe2: {
        titre: "Antithèse : Les autres fonctions indispensables de l'œuvre d'art",
        elements: [
          "La quête esthétique et l'art pour l'art : Parnasse (Théophile Gautier) célébrant la forme pure.",
          "Le pouvoir de la fiction et de l'anticipation : L'imagination féconde de Jules Verne.",
          "L'expression des passions intimes : Romantisme et lyrisme des sentiments.",
          "La fonction ludique et distractive : Échapper à la pesanteur du quotidien à travers le conte et le rêve."
        ]
      },
      syntheseOuPortee: "Synthèse combinatoire : La vérité et la fiction ne s'excluent pas. Même lorsqu'il relate la vérité, l'écrivain recourt à la subjectivité du style et aux prismes de l'art."
    }
  },
  {
    id: "burkina-dissertation-prosper-kompaore-2018",
    type: "dissertation",
    session: "Bac 2018 - Série A4/A5 - Université Ouaga I Pr Joseph Ki-Zerbo",
    titreOuAuteur: "Prosper Kompaoré, Les voix du silence : « Le théâtre, alternative de communication interactive pour l'éveil des consciences »",
    planDetaille: {
      axe1: {
        titre: "Axe 1 : Le théâtre comme instrument d'éveil populaire et interactif",
        elements: [
          "Genre populaire et accessible : Peut être joué en plein air sur les places publiques sans barrière financière.",
          "Miroir sans complaisance des tares sociétales : Jean-Pierre Guingané (Papa, oublie-moi) illustrant que « Le théâtre est le miroir de la société ».",
          "Pratique vivante du Théâtre-Forum (Guingané, Kompaoré) : Débats contradictoires où le spectateur devient acteur de sa propre libération.",
          "Pédagogie brechtienne : Le théâtre comme arme de lutte pour l'émancipation des opprimés."
        ]
      },
      axe2: {
        titre: "Axe 2 : Conditions d'épanouissement et racines culturelles",
        elements: [
          "Nécessité de politiques publiques courageuses de promotion des troupes locales et d'infrastructures.",
          "Ancrage dans les rituels traditionnels : Purification rituelle, mimes des parents à plaisanterie et tradition du Kotéba."
        ]
      }
    }
  }
];
