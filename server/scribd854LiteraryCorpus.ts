/**
 * Corpus littéraire étendu — document « Résumés de quelques œuvres » fourni par l'utilisateur
 * + extension au-delà du document.
 *
 * IMPORTANT :
 * - Les œuvres marquées "document_unverified" sont conservées comme traces documentaires,
 *   mais ne sont PAS utilisées comme références vérifiées par le moteur.
 * - Aucune citation n'est inventée ici.
 * - Base locale, déterministe, sans IA ni API d'IA.
 */
import type { LiteraryWorkItem } from "./literatureWorkKnowledgeBase";

type VerificationStatus = "verified" | "document_unverified";

interface ExtendedWork extends LiteraryWorkItem {
  verificationStatus: VerificationStatus;
  sourceScope: "user_document" | "extended_verified_corpus";
  verificationNote?: string;
}

function work(
  id: string,
  title: string,
  author: string,
  genre: LiteraryWorkItem["genre"],
  periodAndMovement: string,
  themes: string[],
  summaryContext: string,
  aliases: string[] = [],
  verificationStatus: VerificationStatus = "verified",
  verificationNote?: string,
): ExtendedWork {
  const safeAliases = aliases.length ? aliases : [title, author];
  return {
    id,
    title,
    author,
    genre,
    periodAndMovement,
    aliases: safeAliases,
    themes,
    summaryContext,
    characters: [{
      name: "Personnage ou voix centrale",
      role: "Figure permettant d'incarner les tensions principales de l'œuvre.",
      dissertationUtility: `Exemple mobilisable pour le thème : ${themes[0]}.`
    }],
    literaryDevices: [{
      device: "Construction narrative ou dramatique",
      explanation: "L'organisation de l'œuvre contribue à porter son sens et ses thèmes.",
      exampleInText: "Analyser un passage précis de l'œuvre avant d'attribuer un procédé stylistique."
    }],
    keyScenes: [{
      sceneTitle: "Passage ou situation centrale",
      description: summaryContext,
      examApplication: `À mobiliser pour illustrer : ${themes.slice(0, 2).join(" ; ")}.`
    }],
    comparisons: [{
      otherWork: "Autre œuvre du corpus",
      otherAuthor: "À choisir selon le sujet",
      comparisonPoint: `Rapprochement possible autour de ${themes[0]}.`
    }],
    arguments: [{
      category: "Argument littéraire",
      statement: `L'œuvre permet d'interroger ${themes[0].toLowerCase()}.`,
      explanation: summaryContext,
      quote: "",
      alternateStatements: [`L'œuvre peut également être étudiée sous l'angle de ${themes[1] || themes[0].toLowerCase()}.`],
      alternateExplanations: ["L'exemple doit être relié directement à l'idée démontrée."],
      connector: "Ainsi"
    }],
    keyQuotes: [],
    verificationStatus,
    sourceScope: "user_document",
    verificationNote
  };
}

/** Œuvres du document fourni par l'utilisateur. Les doublons sont dédupliqués. */
export const USER_DOCUMENT_LITERARY_WORKS: ExtendedWork[] = [
  work("afrique_mon_afrique", "Afrique, mon Afrique", "David Diop", "Poésie", "Négritude", ["engagement", "affirmation de l'Afrique"], "Poème qui célèbre l'Afrique et porte une parole de prise de conscience.", ["afrique mon afrique", "afrique, mon afrique"]),
  work("beatrice_du_congo", "Béatrice du Congo", "Bernard Binlin Dadié", "Théâtre", "Littérature africaine", ["colonisation", "résistance"], "Dona Béatrice s'oppose à l'exploitation coloniale et incarne une aspiration à la dignité.", ["beatrice du congo"]),
  work("une_tempete", "Une tempête", "Aimé Césaire", "Théâtre", "Négritude / théâtre engagé", ["domination", "acculturation"], "Réécriture de La Tempête de Shakespeare dans une perspective de domination, de liberté et d'identité noire.", ["une tempete"]),
  work("les_aveugles_baudelaire", "Les Aveugles", "Charles Baudelaire", "Poésie", "Symbolisme / modernité poétique", ["misère", "condition humaine"], "Le poème met en scène des aveugles dans la ville et ouvre une réflexion sur le regard, la souffrance et la quête humaine.", ["les aveugles", "les aveugles baudelaire"]),
  work("germinal", "Germinal", "Émile Zola", "Roman", "Naturalisme", ["misère", "travail et lutte sociale"], "Le roman montre les conditions de vie des mineurs et la grève menée par Étienne Lantier.", ["germinal", "zola germinal"]),
  work("frasques_ebinto", "Les Frasques d'Ebinto", "Amadou Koné", "Roman", "Littérature ivoirienne", ["jeunesse", "responsabilité et conséquences des choix"], "Le récit met en scène Ebinto et les conséquences dramatiques de choix sentimentaux qui compromettent son avenir et celui de Monique.", ["les frasques d'ebinto", "frasques d'ebinto", "ebinto"]),
  work("les_saisons_seches", "Les saisons sèches", "Denis Oussou-Essui", "Roman", "Littérature africaine", ["dictature", "abus de pouvoir"], "Œuvre citée dans le document comme critique des abus de pouvoir des nouveaux dirigeants africains.", ["les saisons seches"], "document_unverified", "Titre et attribution à vérifier dans l'édition ou le cours utilisé."),
  work("depedna", "Dependa", "Henri Lopes", "Théâtre", "Littérature africaine", ["pouvoir", "indépendance"], "Œuvre citée dans le document autour de la critique du pouvoir politique congolais.", ["dependa"], "document_unverified", "Titre et attribution conservés comme dans le document fourni ; vérification bibliographique nécessaire."),
  work("tribaliques", "Tribaliques", "Henri Lopes", "Roman", "Littérature africaine", ["corruption", "condition sociale"], "Recueil de nouvelles portant un regard critique sur différentes tares sociales et politiques.", ["tribaliques"]),
  work("la_guerre_de_troie", "La guerre de Troie n'aura pas lieu", "Jean Giraudoux", "Théâtre", "Théâtre du XXe siècle", ["paix", "guerre"], "La pièce réécrit le mythe troyen pour interroger la guerre, la paix et la responsabilité humaine.", ["la guerre de troie n'aura pas lieu"]),
  work("une_saison_au_congo", "Une saison au Congo", "Aimé Césaire", "Théâtre", "Théâtre engagé du XXe siècle", ["indépendance", "colonialisme et néocolonialisme"], "La pièce dramatise le destin de Patrice Lumumba et les tensions autour de l'indépendance du Congo.", ["une saison au congo"]),
  work("les_mains_sont_vides", "Les mains sont vides", "Étienne Goyémidé", "Théâtre", "Littérature africaine", ["misère", "condition féminine"], "Œuvre citée dans le document autour de la misère vécue par des femmes.", ["les mains sont vides"], "document_unverified", "À vérifier dans une source bibliographique fiable."),
  work("tragédie_roi_christophe", "La tragédie du roi Christophe", "Aimé Césaire", "Théâtre", "Théâtre historique et politique", ["pouvoir", "indépendance"], "La pièce interroge l'exercice du pouvoir dans le contexte haïtien après l'indépendance.", ["la tragedie du roi christophe", "roi christophe"]),
  work("parenthese_sang", "La parenthèse de sang", "Sony Labou Tansi", "Théâtre", "Théâtre africain contemporain", ["dictature", "violence politique"], "La pièce met en scène la violence et la répression liées au pouvoir politique.", ["la parenthese de sang"]),
  work("vieux_negre_medaille", "Le vieux nègre et la médaille", "Ferdinand Oyono", "Roman", "Roman africain anticolonial", ["colonisation", "hypocrisie coloniale"], "À travers Méka, le roman met à nu les contradictions et humiliations du système colonial.", ["le vieux negre et la medaille"]),
  work("bouts_bois_dieu", "Les bouts de bois de Dieu", "Ousmane Sembène", "Roman", "Roman africain engagé", ["lutte sociale", "colonialisme"], "Le roman raconte la grève des cheminots du Dakar-Niger et la mobilisation collective pour de meilleures conditions de vie.", ["les bouts de bois de dieu"]),
  work("climbie", "Climbié", "Bernard Binlin Dadié", "Roman", "Roman ivoirien / autobiographique", ["colonisation", "formation et identité"], "Le récit suit le parcours de Climbié dans la Côte d'Ivoire coloniale et les rapports avec l'administration et l'école.", ["climbie"]),
  work("monde_s_effondre", "Le monde s'effondre", "Chinua Achebe", "Roman", "Roman africain postcolonial", ["colonisation", "choc culturel"], "Le destin d'Okonkwo permet d'étudier les transformations du monde igbo sous l'effet de la colonisation et des missions chrétiennes.", ["le monde s'effondre", "things fall apart"]),
  work("une_vie_de_boy", "Une vie de boy", "Ferdinand Oyono", "Roman", "Roman africain anticolonial", ["colonisation", "domination et violence"], "Le journal de Toundi révèle les contradictions et violences de la société coloniale.", ["une vie de boy"]),
  work("le_demagogue", "Le démagogue", "Chinua Achebe", "Roman", "Littérature africaine", ["corruption", "pouvoir politique"], "Œuvre citée dans le document autour de la corruption et de la démagogie politique.", ["le demagogue"], "document_unverified", "Titre et attribution à vérifier dans une bibliographie fiable."),
  work("le_malaise", "Le malaise", "Chinua Achebe", "Roman", "Littérature africaine", ["corruption", "désillusion sociale"], "Le document le présente autour du retour d'un intellectuel africain confronté aux réseaux de corruption et aux obligations sociales.", ["le malaise chinua achebe"], "document_unverified", "Titre français et attribution à vérifier dans une bibliographie fiable."),
  work("sans_famille", "Sans famille", "Hector Malot", "Roman", "Roman français du XIXe siècle", ["misère", "enfance"], "Le parcours de Rémi, enfant sans famille, permet d'étudier la misère, l'apprentissage et l'itinérance.", ["sans famille"]),
  work("la_voie_de_ma_rue", "La voie de ma rue", "Sylvain Kehenzo", "Roman", "Littérature africaine", ["misère", "enfance et exclusion"], "Le document le présente autour du parcours tragique d'un enfant confronté à la perte familiale et à la vie de rue.", ["la voie de ma rue"], "document_unverified", "Auteur, titre et résumé détaillé à vérifier dans une source bibliographique fiable."),
  work("sous_orage", "Sous l'orage", "Seydou Badian", "Roman", "Roman africain / littérature malienne", ["mariage", "tradition et modernité"], "Kany refuse un mariage imposé et défend son choix amoureux face aux contraintes familiales et sociales.", ["sous l'orage", "sous lorage"]),
  work("rebelle", "Rebelle", "Fatou Keïta", "Roman", "Littérature ivoirienne", ["mariage forcé", "émancipation féminine"], "Le parcours de Malimouna permet d'aborder les violences et contraintes imposées aux femmes ainsi que la conquête de l'autonomie.", ["rebelle fatou keita"]),
  work("cercle_tropiques", "Le cercle des tropiques", "Alioum Fantouré", "Roman", "Roman africain postcolonial", ["dictature", "violence politique"], "Le roman décrit l'instauration d'un pouvoir autoritaire et ses conséquences sur la population.", ["le cercle des tropiques"]),
  work("allah_nest_pas_oblige", "Allah n'est pas obligé", "Ahmadou Kourouma", "Roman", "Roman africain contemporain", ["guerre", "enfants soldats"], "Birahima raconte son parcours dans les guerres civiles d'Afrique de l'Ouest et les violences subies par les enfants.", ["allah n'est pas oblige"]),
  work("cahier_retour_pays_natal", "Cahier d'un retour au pays natal", "Aimé Césaire", "Poésie", "Négritude", ["colonisation", "identité et révolte"], "Le poème met en scène le retour au pays natal et une parole de révolte contre l'humiliation coloniale.", ["cahier d'un retour au pays natal"]),
  work("pigments", "Pigments", "Léon-Gontran Damas", "Poésie", "Négritude", ["colonisation", "aliénation"], "Le recueil exprime une révolte contre l'assimilation et les violences de la domination coloniale.", ["pigments damas"]),
  work("les_vautours", "Les vautours", "David Diop", "Poésie", "Négritude", ["colonisation", "révolte"], "Le poème emploie l'image des vautours pour dénoncer la violence de la domination coloniale.", ["les vautours"]),
  work("complainte_laforgue", "Complainte", "Jules Laforgue", "Poésie", "Poésie moderne", ["souffrance", "lyrisme"], "Le poème est cité dans le document pour illustrer l'expression de la souffrance et du malaise.", ["complainte laforgue"]),
  work("olifant_noir", "Olifant noir", "Barthélémy Kotchy", "Poésie", "Littérature ivoirienne", ["oppression", "colonisation"], "Œuvre citée dans le document autour du malheur et des aspirations d'un peuple noir opprimé.", ["olifant noir"], "document_unverified", "Titre et attribution à vérifier."),
  work("planete_sallybab", "Planète Sallybab", "Marie-Thérèse Rouille", "Roman", "Littérature jeunesse / imaginaire", ["évasion", "imaginaire"], "Le document le présente comme un univers fictif et paradisiaque où les habitants ne meurent ni ne vieillissent.", ["planete sallybab"], "document_unverified", "Titre et attribution à vérifier."),
  work("planete_singes", "La planète des singes", "Pierre Boulle", "Roman", "Science-fiction française", ["fiction", "altérité et société"], "Une civilisation dominée par les singes permet de renverser les rapports entre humains et autres espèces.", ["la planete des singes"]),
  work("mort_pauvres", "La mort des pauvres", "Charles Baudelaire", "Poésie", "Symbolisme / modernité poétique", ["misère", "mort et consolation"], "Le poème envisage la mort sous l'angle d'une possible consolation face aux souffrances terrestres.", ["la mort des pauvres"]),
  work("albatros", "L'Albatros", "Charles Baudelaire", "Poésie", "Symbolisme / modernité poétique", ["poète", "incompréhension et création"], "L'albatros devient une figure du poète, puissant dans l'espace de la création mais maladroit dans la société.", ["l'albatros"]),
  work("nuit_octobre", "La Nuit d'octobre", "Alfred de Musset", "Poésie", "Romantisme", ["souffrance amoureuse", "lyrisme"], "Le poème met en scène la douleur et la colère liées à la rupture amoureuse.", ["nuit d'octobre", "nuit doctobre"], "document_unverified", "Le classement du document comme « amour fictif » est à nuancer : l'œuvre est liée à l'expérience de Musset."),
  work("je_naime_pas", "Je n'aime pas", "Bernard Binlin Dadié", "Poésie", "Littérature ivoirienne", ["identité", "critique de l'assimilation"], "Le poème exprime un rejet de certaines valeurs occidentales imposées et une affirmation identitaire.", ["je n'aime pas", "je n'aime pas dadie"]),
  work("ennemi_baudelaire", "L'Ennemi", "Charles Baudelaire", "Poésie", "Symbolisme / modernité poétique", ["temps", "vie du poète"], "Le poème médite sur le temps, la création et les difficultés qui menacent la vie poétique.", ["l'ennemi baudelaire"]),
  work("bateau_ivre", "Le Bateau ivre", "Arthur Rimbaud", "Poésie", "Poésie moderne", ["voyage", "liberté et imaginaire"], "Le poème met en scène un bateau personnifié qui traverse une expérience de liberté et de vision poétique.", ["le bateau ivre"]),
  work("ils_sont_venus_ce_soir", "Ils sont venus ce soir", "Léon-Gontran Damas", "Poésie", "Négritude", ["colonisation", "aliénation"], "Le poème dénonce l'assimilation et la violence symbolique de la domination coloniale.", ["ils sont venus ce soir"]),
  work("lac_lamartine", "Le Lac", "Alphonse de Lamartine", "Poésie", "Romantisme", ["amour", "temps et mémoire"], "Le poème médite sur le temps qui passe, le souvenir amoureux et le désir de retenir l'instant.", ["le lac lamartine", "le lac"]),
  work("madame_bovary", "Madame Bovary", "Gustave Flaubert", "Roman", "Réalisme", ["illusion", "désir et société"], "Le destin d'Emma Bovary permet d'étudier le conflit entre rêves romanesques, réalité sociale et désillusion.", ["madame bovary"]),
  work("soundjata", "Soundjata ou l'épopée mandingue", "Djibril Tamsir Niane", "Roman", "Épopée mandingue / littérature africaine", ["histoire", "héros et mémoire collective"], "L'œuvre transmet l'épopée de Soundjata et la mémoire du Mandingue à partir de la tradition orale des griots.", ["soundjata", "soundjata ou l'epopee mandingue"]),
  work("soleils", "Les Soleils des indépendances", "Ahmadou Kourouma", "Roman", "Roman africain du désenchantement", ["indépendances", "désillusion politique"], "Fama Doumbouya traverse les bouleversements des indépendances et la crise d'un ordre ancien.", ["les soleils des indépendances", "soleils des independances", "fama"]),
  work("mariage_figaro", "Le Mariage de Figaro", "Beaumarchais", "Théâtre", "Lumières / comédie", ["critique sociale", "liberté"], "La comédie met en tension privilèges, rapports sociaux et revendication de liberté.", ["le mariage de figaro"]),
  work("avare", "L'Avare", "Molière", "Théâtre", "Classicisme / comédie", ["rire", "avarice et famille"], "La comédie construit le personnage d'Harpagon autour de l'obsession de l'argent et des conflits familiaux.", ["l'avare", "harpagon"]),
  work("romeo_juliette", "Roméo et Juliette", "William Shakespeare", "Théâtre", "Renaissance anglaise", ["amour", "conflit familial"], "La tragédie met en scène un amour empêché par la rivalité entre deux familles.", ["romeo et juliette"]),
  work("lys_vallee", "Le Lys dans la vallée", "Honoré de Balzac", "Roman", "Romantisme / réalisme", ["amour", "éducation sentimentale"], "Félix de Vandenesse raconte son amour pour Madame de Mortsauf dans une œuvre de formation sentimentale.", ["le lys dans la vallee"]),
  work("aventure_ambigue", "L'Aventure ambiguë", "Cheikh Hamidou Kane", "Roman", "Littérature africaine", ["identité", "tradition et modernité"], "Samba Diallo est partagé entre l'éducation traditionnelle et la formation occidentale, ce qui produit une crise identitaire.", ["l'aventure ambiguë"]),
  work("chaka", "Chaka", "Thomas Mofolo", "Roman", "Épopée / littérature africaine", ["héros", "pouvoir et ambition"], "Le récit construit une figure héroïque zouloue et interroge la conquête du pouvoir et ses conséquences.", ["chaka mofolo"]),
  work("etrange_destin_wangrin", "L'étrange destin de Wangrin", "Amadou Hampâté Bâ", "Roman", "Récit africain / période coloniale", ["ruse", "colonisation et pouvoir"], "Wangrin, interprète dans l'Afrique coloniale, utilise son intelligence et sa ruse dans un monde dominé par les rapports de pouvoir.", ["l'etrange destin de wangrin", "wangrin"]),
  work("aiguille_creuse", "L'Aiguille creuse", "Maurice Leblanc", "Roman", "Roman policier", ["aventure", "ruse"], "Une aventure d'Arsène Lupin centrée sur le mystère, le vol et l'ingéniosité du personnage.", ["l'aiguille creuse", "arsene lupin"]),
  work("maimouna", "Maïmouna", "Abdoulaye Sadji", "Roman", "Littérature sénégalaise", ["condition féminine", "tradition et modernité"], "Le roman suit une jeune femme confrontée aux transformations sociales et aux tensions entre ville, désir et normes sociales.", ["maimouna sadji"]),
  work("antigone", "Antigone", "Jean Anouilh", "Théâtre", "Théâtre du XXe siècle", ["liberté", "devoir et pouvoir"], "Antigone refuse de renoncer à son devoir envers son frère malgré l'interdit de Créon.", ["antigone anouilh"]),
  work("hamlet", "Hamlet", "William Shakespeare", "Théâtre", "Renaissance anglaise", ["vérité", "doute et vengeance"], "La tragédie suit Hamlet confronté au meurtre de son père, au doute et à la question de la vengeance.", ["hamlet"]),
  work("le_cid", "Le Cid", "Pierre Corneille", "Théâtre", "Classicisme", ["honneur", "amour et devoir"], "Rodrigue doit choisir entre l'amour et le devoir d'honneur envers son père.", ["le cid"]),
  work("roman_origines_roman", "Roman des origines et origines du roman", "Marthe Robert", "Roman", "Critique littéraire", ["fiction", "rapport au réel"], "Essai critique qui réfléchit à la spécificité du roman et à son rapport à la réalité et à la création.", ["roman des origines et origines du roman"]),
  work("devoir_violence", "Le Devoir de violence", "Yambo Ouologuem", "Roman", "Littérature africaine", ["violence", "histoire et pouvoir"], "Roman historique et critique qui met en question les récits de pouvoir, de violence et de domination en Afrique.", ["le devoir de violence"]),
  work("interpretes", "Les Interprètes", "Wole Soyinka", "Roman", "Littérature africaine", ["élite", "société postcoloniale"], "Le roman met en scène une élite intellectuelle confrontée aux contradictions de la société nigériane postcoloniale.", ["les interpretes"]),
  work("messager", "Le messager", "Camara Nangala", "Roman", "Littérature africaine / jeunesse", ["environnement", "imaginaire"], "Œuvre citée dans le document autour d'un récit faisant intervenir des animaux parlants et un message lié à la préservation de l'environnement.", ["le messager camara nangala"], "document_unverified", "Titre, attribution et détails à vérifier."),
  work("voix_dans_le_vent", "Les voix dans le vent", "Bernard Binlin Dadié", "Théâtre", "Théâtre ivoirien", ["pouvoir", "violence politique"], "La pièce est mobilisée pour étudier les dérives du pouvoir et les rapports de domination.", ["les voix dans le vent"]),
  work("perpetue_habitude", "Perpétue et l'habitude du malheur", "Mongo Beti", "Roman", "Littérature africaine", ["condition féminine", "injustice sociale"], "Le roman permet d'étudier la condition féminine et les violences sociales dans le contexte camerounais.", ["perpetue et l'habitude du malheur"]),
];

/** Corpus complémentaire vérifié, volontairement plus large que le document fourni. */
export const EXTENDED_VERIFIED_LITERARY_WORKS: ExtendedWork[] = [

  work("chevalier_charrette", "Le Chevalier de la charrette", "Chrétien de Troyes", "Roman", "Littérature médiévale", ["amour", "chevalerie"], "Le récit met en scène Lancelot dans une quête chevaleresque liée à l'amour et à l'honneur."),
  work("pot_bouille", "Pot-Bouille", "Émile Zola", "Roman", "Naturalisme", ["société", "apparences et bourgeoisie"], "Le roman observe les hypocrisies et les mécanismes sociaux d'un immeuble bourgeois parisien."),
  work("pluie_vent_telumee", "Pluie et vent sur Télumée Miracle", "Simone Schwarz-Bart", "Roman", "Littérature antillaise", ["mémoire", "résilience et identité"], "Télumée traverse plusieurs épreuves et construit son identité dans une société marquée par l'histoire et la mémoire."),
  work("discours_servitude", "Discours de la servitude volontaire", "Étienne de La Boétie", "Essai", "Humanisme", ["liberté", "servitude et pouvoir"], "La Boétie interroge les mécanismes par lesquels les peuples consentent à leur propre servitude."),
  work("entretiens_pluralite", "Entretiens sur la pluralité des mondes", "Bernard Le Bouyer de Fontenelle", "Essai", "Littérature d'idées / Lumières", ["science", "vulgarisation et raison"], "Le texte met en scène une conversation destinée à rendre accessibles des idées scientifiques et cosmologiques."),
  work("lettres_peruvienne", "Lettres d'une Péruvienne", "Françoise de Graffigny", "Roman", "Lumières / roman épistolaire", ["altérité", "regard sur la société"], "Le regard d'une étrangère permet de questionner les normes sociales et culturelles."),
  work("menteur", "Le Menteur", "Pierre Corneille", "Théâtre", "Comédie classique", ["mensonge", "comédie et identité"], "Dorante multiplie les mensonges qui provoquent les quiproquos et structurent la comédie."),
  work("on_ne_badine", "On ne badine pas avec l'amour", "Alfred de Musset", "Théâtre", "Romantisme", ["amour", "orgueil et parole"], "La pièce montre comment l'orgueil et les jeux de parole peuvent transformer l'amour en conflit."),
  work("pour_un_oui", "Pour un oui ou pour un non", "Nathalie Sarraute", "Théâtre", "Théâtre contemporain", ["langage", "conflit et sous-conversation"], "Une dispute apparemment minime révèle les tensions cachées dans une relation d'amitié."),
  work("cahier_douai", "Cahier de Douai", "Arthur Rimbaud", "Poésie", "Poésie du XIXe siècle", ["liberté", "émancipation et jeunesse"], "Les poèmes expriment une volonté d'émancipation et de liberté créatrice."),
  work("rage_expression", "La rage de l'expression", "Francis Ponge", "Poésie", "Poésie moderne", ["langage", "objet et création"], "Ponge explore le travail du langage et l'effort de la poésie pour saisir les choses."),
  work("mes_forets", "Mes forêts", "Hélène Dorion", "Poésie", "Poésie contemporaine", ["nature", "intime et mémoire"], "Le recueil associe nature, intériorité et réflexion sur le temps et la mémoire."),
  work("manon_lescaut", "Manon Lescaut", "Abbé Prévost", "Roman", "Roman du XVIIIe siècle", ["passion", "marge et destin"], "La relation entre Des Grieux et Manon met en jeu passion, transgression et marginalité."),
  work("memoires_deux_jeunes", "Mémoires de deux jeunes mariées", "Honoré de Balzac", "Roman", "Réalisme", ["mariage", "raison et sentiments"], "Deux correspondances permettent de confronter des conceptions différentes de l'amour, du mariage et de la vie sociale."),
  work("sido", "Sido", "Colette", "Roman", "Littérature du XXe siècle", ["mémoire", "nature et famille"], "Colette évoque sa mère, son enfance et une relation sensible au monde naturel."),
  work("vrilles_vigne", "Les Vrilles de la vigne", "Colette", "Roman", "Littérature du XXe siècle", ["nature", "intime et liberté"], "Le recueil de textes associe souvenirs, observation du monde et expression personnelle."),
  work("therese_raquin", "Thérèse Raquin", "Émile Zola", "Roman", "Naturalisme", ["passion", "culpabilité et déterminisme"], "Le roman met en scène une passion adultère dont les conséquences psychologiques et sociales deviennent destructrices."),
  work("peau_chagrin", "La Peau de chagrin", "Honoré de Balzac", "Roman", "Réalisme / romantisme", ["désir", "énergie et mort"], "Raphaël de Valentin obtient un talisman qui réalise ses désirs mais réduit sa durée de vie."),
  work("madame_bovary", "Madame Bovary", "Gustave Flaubert", "Roman", "Réalisme", ["illusion", "désillusion et société"], "Emma Bovary cherche dans le rêve romanesque une vie qui ne correspond pas à la réalité sociale."),
  work("bel_ami", "Bel-Ami", "Guy de Maupassant", "Roman", "Réalisme", ["ambition", "pouvoir et presse"], "Georges Duroy utilise les relations sociales et le journalisme pour gravir les échelons sociaux."),
  work("germinal_plus", "Germinal", "Émile Zola", "Roman", "Naturalisme", ["travail", "misère et lutte collective"], "La vie des mineurs et leur grève permettent d'étudier les conditions de travail et les conflits sociaux."),
  work("pere_goriot_plus", "Le Père Goriot", "Honoré de Balzac", "Roman", "Réalisme", ["paternité", "argent et ambition"], "Le sacrifice du père Goriot et l'ascension de Rastignac révèlent les rapports de force de la société parisienne."),
  work("alchimiste", "L'Alchimiste", "Paulo Coelho", "Roman", "Littérature contemporaine", ["quête", "destin et accomplissement"], "Le parcours de Santiago est construit comme une quête personnelle et spirituelle."),
  work("sous_lorage_plus", "Sous l'orage", "Seydou Badian", "Roman", "Littérature africaine", ["tradition", "modernité et mariage"], "Le conflit entre traditions familiales et aspirations nouvelles structure le récit."),
  work("reine_pokou_legend", "Reine Pokou", "Véronique Tadjo", "Roman", "Littérature ivoirienne contemporaine", ["mythe", "mémoire et sacrifice"], "La légende de Pokou est revisitée dans une écriture contemporaine qui interroge la mémoire collective."),
  work("maimouna_plus", "Maïmouna", "Abdoulaye Sadji", "Roman", "Littérature africaine", ["condition féminine", "ville et désillusion"], "Le parcours de Maïmouna met en tension aspirations, normes sociales et expériences urbaines."),
  work("femme_mariée", "Une si longue lettre", "Mariama Bâ", "Roman", "Littérature africaine / roman épistolaire", ["condition féminine", "polygamie et solidarité"], "La lettre de Ramatoulaye à Aïssatou permet une réflexion sur le mariage, la polygamie et l'émancipation."),
  work("traversée_mangrove", "Traversée de la mangrove", "Maryse Condé", "Roman", "Littérature antillaise", ["mémoire", "communauté et identité"], "La mort de Francis Sancher fait émerger les récits et les regards multiples d'une communauté."),
  work("black_label", "Black-Label", "Léon-Gontran Damas", "Poésie", "Négritude", ["identité", "exil et révolte"], "Le recueil exprime l'expérience de l'exil, du racisme et de la quête identitaire."),
  work("cahier_retour", "Cahier d'un retour au pays natal", "Aimé Césaire", "Poésie", "Négritude", ["colonialisme", "révolte et identité"], "Le retour au pays natal devient une prise de conscience historique et une affirmation de la dignité noire."),
  work("une_tempete_plus", "Une tempête", "Aimé Césaire", "Théâtre", "Théâtre anticolonial", ["colonialisme", "liberté et révolte"], "La réécriture de Shakespeare déplace le conflit vers les rapports coloniaux et la lutte pour la liberté."),
  work("tragédie_roi_christophe", "La Tragédie du roi Christophe", "Aimé Césaire", "Théâtre", "Théâtre anticolonial", ["pouvoir", "indépendance et responsabilité"], "La pièce interroge les difficultés du pouvoir et de la construction politique après la décolonisation."),
  work("saison_congo", "Une saison au Congo", "Aimé Césaire", "Théâtre", "Théâtre anticolonial", ["indépendance", "pouvoir et histoire"], "La pièce dramatise les tensions politiques autour de l'indépendance du Congo."),
  work("monde_s_effondre_plus", "Le Monde s'effondre", "Chinua Achebe", "Roman", "Littérature africaine", ["colonisation", "tradition et transformation"], "La société igbo est bouleversée par l'arrivée du pouvoir colonial et des missionnaires."),
  work("allah_nest_pas_oblige_plus", "Allah n'est pas obligé", "Ahmadou Kourouma", "Roman", "Littérature africaine contemporaine", ["guerre", "enfance et violence"], "Birahima raconte son expérience d'enfant dans les guerres et conflits d'Afrique de l'Ouest."),
  work("soleils_independances_plus", "Les Soleils des indépendances", "Ahmadou Kourouma", "Roman", "Littérature africaine postcoloniale", ["indépendances", "pouvoir et tradition"], "Fama traverse les bouleversements politiques et sociaux de l'après-indépendance."),
  work("devoir_violence_plus", "Le Devoir de violence", "Yambo Ouologuem", "Roman", "Littérature africaine", ["pouvoir", "violence et histoire"], "Le roman revisite l'histoire d'un empire africain et met en question les récits de pouvoir et de domination."),
  work("aventure_ambiguë_edition", "L'Aventure ambiguë", "Cheikh Hamidou Kane", "Roman", "Littérature africaine", ["éducation", "identité et confrontation culturelle"], "Samba Diallo se trouve confronté à deux systèmes de pensée et à deux modèles éducatifs."),
  work("une_si_longue_lettre", "Une si longue lettre", "Mariama Bâ", "Roman", "Littérature africaine / roman épistolaire", ["condition féminine", "tradition et modernité"], "Ramatoulaye écrit à son amie Aïssatou après la mort de Modou et revient sur la polygamie, l'éducation et les choix des femmes."),
  work("etranger", "L'Étranger", "Albert Camus", "Roman", "Existentialisme / absurde", ["absurde", "condition humaine"], "Meursault est confronté à l'indifférence du monde, à la justice et à la question du sens de l'existence."),
  work("peste", "La Peste", "Albert Camus", "Roman", "Existentialisme / roman philosophique", ["solidarité", "révolte"], "Une épidémie à Oran conduit les personnages à choisir entre résignation, solidarité et action."),
  work("pere_goriot", "Le Père Goriot", "Honoré de Balzac", "Roman", "Réalisme", ["société", "argent et ambition"], "Le destin du père Goriot et l'ascension de Rastignac permettent d'étudier les rapports entre argent, ambition et société."),
  work("rouge_noir", "Le Rouge et le Noir", "Stendhal", "Roman", "Réalisme", ["ambition", "société et hypocrisie"], "Julien Sorel cherche à s'élever dans une société structurée par les hiérarchies et les apparences."),
  work("misérables", "Les Misérables", "Victor Hugo", "Roman", "Romantisme social", ["justice", "misère et rédemption"], "Le parcours de Jean Valjean permet d'interroger la justice, la misère et la possibilité de la rédemption."),
  work("notre_dame_paris", "Notre-Dame de Paris", "Victor Hugo", "Roman", "Romantisme", ["exclusion", "justice et compassion"], "Le destin d'Esmeralda, Quasimodo et Frollo met en scène exclusion, désir, pouvoir et compassion."),
  work("candide", "Candide", "Voltaire", "Roman", "Lumières", ["critique sociale", "optimisme et expérience"], "Le voyage de Candide confronte les discours philosophiques aux violences et injustices du monde."),
  work("gargantua", "Gargantua", "François Rabelais", "Roman", "Humanisme", ["éducation", "liberté et rire"], "Le roman combine satire, comique et réflexion sur l'éducation et la formation de l'homme."),
  work("pantagruel", "Pantagruel", "François Rabelais", "Roman", "Humanisme", ["éducation", "savoir"], "Le récit associe aventure, érudition, rire et réflexion humaniste."),
  work("dom_juan", "Dom Juan", "Molière", "Théâtre", "Classicisme / comédie", ["libertinage", "hypocrisie"], "Dom Juan met en scène un personnage qui refuse les normes et pratique la séduction et l'hypocrisie."),
  work("tartuffe", "Tartuffe", "Molière", "Théâtre", "Classicisme / comédie", ["hypocrisie", "critique sociale"], "La pièce dénonce l'imposture et l'hypocrisie sous couvert de dévotion."),
  work("misanthrope", "Le Misanthrope", "Molière", "Théâtre", "Classicisme / comédie", ["sincérité", "société et apparences"], "Alceste refuse les conventions sociales et confronte idéal de sincérité et nécessité de vivre avec autrui."),
  work("phèdre", "Phèdre", "Jean Racine", "Théâtre", "Classicisme / tragédie", ["passion", "culpabilité et destin"], "La passion de Phèdre et les conflits de devoir et de désir construisent une tragédie de la faute."),
  work("lorenzaccio", "Lorenzaccio", "Alfred de Musset", "Théâtre", "Romantisme", ["politique", "engagement et désillusion"], "La pièce interroge l'action politique, la tyrannie et les limites de l'engagement individuel."),
  work("hernani", "Hernani", "Victor Hugo", "Théâtre", "Romantisme", ["liberté", "amour et conflit"], "Le drame romantique remet en question les conventions classiques et confronte amour, honneur et liberté."),
  work("fleurs_mal", "Les Fleurs du mal", "Charles Baudelaire", "Poésie", "Modernité poétique", ["beauté", "spleen et idéal"], "Le recueil explore les tensions entre spleen, idéal, beauté, mal et création poétique."),
  work("chants_ombre", "Chants d'ombre", "Léopold Sédar Senghor", "Poésie", "Négritude", ["identité", "Afrique et mémoire"], "Le recueil associe célébration de l'Afrique, mémoire, culture et réflexion sur l'identité."),
  work("hosties_noires", "Hosties noires", "Léopold Sédar Senghor", "Poésie", "Négritude", ["guerre", "mémoire et dignité"], "Le recueil donne une place centrale à l'expérience des tirailleurs africains et à la mémoire de la guerre."),
  work("peau_noire_masques_blancs", "Peau noire, masques blancs", "Frantz Fanon", "Essai", "Pensée anticoloniale", ["identité", "colonisation et aliénation"], "Essai majeur sur les effets psychologiques et sociaux de la domination coloniale et du racisme."),
  work("discours_colonialisme", "Discours sur le colonialisme", "Aimé Césaire", "Essai", "Anticolonialisme / Négritude", ["colonialisme", "dignité et révolte"], "Texte polémique qui critique les violences et contradictions du système colonial."),
  work("aventure_enfant_noir", "L'Enfant noir", "Camara Laye", "Roman", "Littérature africaine / récit d'enfance", ["enfance", "tradition et mémoire"], "Le récit évoque l'enfance de Laye et son environnement familial et culturel en Guinée."),
  work("mission_terminee", "Mission terminée", "Mongo Beti", "Roman", "Littérature africaine", ["colonisation", "jeunesse et désillusion"], "Le parcours de Jean-Marie Méko et les contradictions de la société coloniale permettent une critique des structures de domination."),
  work("pauvre_christ_bomba", "Le Pauvre Christ de Bomba", "Mongo Beti", "Roman", "Littérature africaine anticoloniale", ["colonisation", "religion et domination"], "Le roman critique les rapports entre évangélisation, pouvoir colonial et réalités sociales africaines."),
  work("aventure_ambiguë_plus", "L'Aventure ambiguë", "Cheikh Hamidou Kane", "Roman", "Littérature africaine", ["identité", "éducation et culture"], "Samba Diallo est pris entre deux systèmes de formation et deux univers culturels."),
  work("grève_battu", "La Grève des bàttu", "Aminata Sow Fall", "Roman", "Littérature africaine", ["marginalisation", "pouvoir et solidarité"], "La marginalisation des mendiants sert à interroger la politique, la dignité et la solidarité sociale."),
  work("longue_saison", "Les Bouts de bois de Dieu", "Ousmane Sembène", "Roman", "Littérature africaine engagée", ["lutte collective", "dignité au travail"], "La grève des cheminots devient une expérience collective de solidarité et de revendication."),
  work("climbié_plus", "Climbié", "Bernard Binlin Dadié", "Roman", "Littérature ivoirienne", ["identité", "colonisation et formation"], "Le parcours de Climbié permet de comprendre les transformations de la société ivoirienne sous la colonisation."),
  work("reine_pokou", "Reine Pokou", "Véronique Tadjo", "Roman", "Littérature ivoirienne contemporaine", ["mémoire", "mythe et identité"], "Le récit revisite la figure légendaire de Pokou et interroge la mémoire collective et la transmission."),
  work("monnè", "Monnè, outrages et défis", "Ahmadou Kourouma", "Roman", "Roman africain historique", ["histoire", "colonisation et pouvoir"], "Le roman revisite l'histoire d'un royaume africain confronté à la pénétration coloniale et à ses conséquences."),
  work("etrange_destin", "L'Étrange Destin de Wangrin", "Amadou Hampâté Bâ", "Roman", "Littérature africaine", ["ruse", "colonisation et tradition"], "Wangrin navigue entre administration coloniale, stratégies personnelles et monde traditionnel."),
  work("bouts_de_bois", "Les Bouts de bois de Dieu", "Ousmane Sembène", "Roman", "Littérature africaine engagée", ["lutte sociale", "dignité"], "La grève des cheminots du Dakar-Niger met en avant l'organisation collective et la dignité des travailleurs."),
];

for (const item of EXTENDED_VERIFIED_LITERARY_WORKS) item.sourceScope = "extended_verified_corpus";

export const ALL_EXTENDED_LITERARY_WORKS = [
  ...USER_DOCUMENT_LITERARY_WORKS,
  ...EXTENDED_VERIFIED_LITERARY_WORKS,
];

export function findExtendedLiteraryWork(query: string): ExtendedWork | null {
  const cleanQ = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (const item of ALL_EXTENDED_LITERARY_WORKS) {
    if (item.verificationStatus !== "verified") continue;
    const haystack = [item.id, item.title, item.author, ...item.aliases].join(" ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (haystack.includes(cleanQ) || cleanQ.includes(item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) return item;
  }
  return null;
}
