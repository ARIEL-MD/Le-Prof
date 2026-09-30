/**
 * LE PROF — BASE DE CONNAISSANCES OFFICIELLE : FRANÇAIS 6ÈME
 * 
 * Source officielle : Fascicules et fiches pédagogiques officielles de Côte d'Ivoire (École Numérique / MENA)
 * Programme officiel national de Côte d'Ivoire (Approche Par Compétences - APC).
 * 
 * Fichier 100% autonome : zéro dépendance IA, aucun appel réseau.
 */

export type Chapter = {
  id: string;                // ex: "fr-ee-ch1", "fr-gram-ch1"
  lessonNumber?: number;
  title: string;             // titre exact de la leçon
  topics: string[] | readonly string[];          // notions abordées, règles et définitions
  formulas: string[] | readonly string[];        // structures canoniques, schémas et règles
  methods: string[] | readonly string[];         // méthodes et démarches de rédaction ou d'analyse
};

export const francais6eKnowledgeBase = {
  name: "LE PROF — Knowledge Base Français 6ème",
  version: "1.0.0",
  source: "Fascicules officiels de Français 6ème (École Numérique Côte d'Ivoire / MENA - APC)",
  level: "Sixième (6ème)",
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
  },
  chapters: [
    // =========================================================================
    // PARTIE 1 : EXPRESSION ÉCRITE
    // =========================================================================

    // -------------------------------------------------------------------------
    // LEÇON 1 : LA LETTRE PERSONNELLE
    // -------------------------------------------------------------------------
    {
      id: "fr-ee-ch1",
      lessonNumber: 1,
      title: "Expression écrite — La lettre personnelle",
      topics: [
        "Définition de la lettre personnelle : écrit destiné à une personne pour lui donner de ses nouvelles, en demander, exprimer des sentiments ou annoncer un événement.",
        "Lettre familière versus lettre non familière :",
        "- Lettre familière : adressée à un proche, ami, camarade ou parent ; ton chaleureux, tutoiement (tu, toi, ton, ta, tes), registre courant ou familier, formules d'appel affectueuses (ex: 'Salut Guédé,', 'Mon très cher ami,').",
        "- Lettre non familière : adressée à une personne avec qui l'on n'est pas intime ou à une autorité (ex: directeur de CM2, préfet, principal/proviseur, maire, juge) ; vouvoiement obligatoire (vous, votre, vos), registre soutenu, formules de politesse et de courtoisie appuyées (ex: 'Je vous prie de croire en l'expression de mon profond respect'), emploi du conditionnel de déférence ('Je souhaiterais', 'J'aimerais vous faire part').",
        "Présentation matérielle de l'enveloppe postale :",
        "- Recto (face A) : coordonnées complètes du destinataire (Nom et prénom(s), boîte postale BP, ville de destination et pays).",
        "- Verso (face B) : coordonnées de l'expéditeur (Nom et prénom(s), classe, établissement scolaire, boîte postale BP, ville de résidence).",
        "Structure spatiale obligatoire de la lettre personnelle :",
        "1. Nom, prénom et adresse de l'expéditeur : disposés en haut à gauche.",
        "2. Lieu d'où l'on écrit et date : disposés en haut à droite (ex: 'Kani, le 02 novembre 2019').",
        "3. Formule d'appel : centrée ou décalée à gauche, séparée du haut et du bas par un blanc interligne (ex: 'Cher ami,', 'Monsieur le Directeur,').",
        "4. Corps de la lettre articulé en trois parties équilibrées :",
        "   - Introduction : énonciation claire de l'objet et du motif de la lettre.",
        "   - Développement : exposé détaillé des faits, nouvelles du collège ou séjour, anecdotes ordonnées avec des paragraphes nets.",
        "   - Conclusion : synthèse finale, remerciements, souhaits, annonce d'une prochaine écriture.",
        "5. Formule finale de politesse / d'affection : adaptée au lien social (ex: 'Je t'embrasse affectueusement', 'Recevez, Monsieur, mes salutations distinguées').",
        "6. Signature de l'expéditeur : apposée en bas à droite de la feuille."
      ],
      formulas: [
        "Schéma canonique de la lettre : [Haut Gauche : Expéditeur] --- [Haut Droite : Lieu et Date] -> [Formule d'appel] -> [Corps : Intro + Développement + Conclusion] -> [Formule de politesse] -> [Bas Droite : Signature]",
        "Règle d'adresse d'enveloppe : Recto (Face A) = Destinataire (celui qui reçoit) ; Verso (Face B) = Expéditeur (celui qui écrit)",
        "Choix du registre : Ami / Parent proche => Tutoiement + Registre courant / affectueux | Adulte / Autorité / Directeur => Vouvoiement + Registre soutenu + Conditionnel de politesse"
      ],
      methods: [
        "Rédiger une lettre personnelle familière (ex: raconter son entrée en 6ème à un ami resté au village) : 1. Inscrire ses coordonnées en haut à gauche et 'Lieu, le [date]' en haut à droite. 2. Choisir une formule d'appel conviviale ('Mon cher Kofi,'). 3. Introduction : exprimer la joie d'écrire et annoncer l'objet. 4. Développement en 2-3 paragraphes : décrire la nouvelle vie de collégien (l'uniforme kaki, les différents professeurs et matières, la vie dans la cour). 5. Conclusion : prendre des nouvelles de la famille au village et encourager le destinataire à réussir son examen. 6. Insérer la formule de politesse ('Ton ami qui pense à toi,') et signer en bas à droite.",
        "Rédiger une lettre personnelle non familière à une autorité (ex: lettre de reconnaissance à son ancien maître ou directeur de CM2) : 1. Respecter la mise en page formelle. 2. Employer une formule d'appel sobre ('Monsieur le Directeur,'). 3. Employer strictement le vouvoiement et le registre soutenu. 4. Exposer ses résultats encourageants du premier trimestre et lui témoigner sa profonde gratitude pour sa formation. 5. Terminer par une formule de politesse respectueuse ('Je vous prie d'agréer, Monsieur, l'assurance de mon profond respect') et apposer sa signature."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 2 : LA DESCRIPTION
    // -------------------------------------------------------------------------
    {
      id: "fr-ee-ch2",
      lessonNumber: 2,
      title: "Expression écrite — La description d'un objet familier ou d'un lieu",
      topics: [
        "Définition de la description : présentation détaillée, fidèle et organisée d'un être, d'un objet ou d'un espace géographique permettant au lecteur de se le représenter mentalement.",
        "Description d'un objet familier (sac à dos, montre, meuble, outil) :",
        "- Éléments caractéristiques : forme géométrique, couleur, matière/textile (cuir, métal, bois, plastique), dimensions, aspect tactile et brillance.",
        "- Structure du devoir descriptif :",
        "  * Introduction : désignation de l'objet, son origine et son propriétaire dans son cadre d'usage général.",
        "  * Développement : description selon une progression logique et rigoureuse (de l'allure générale aux détails fins ; de l'extérieur vers l'intérieur ; de haut en bas).",
        "  * Conclusion : appréciation personnelle, valeur sentimentale ou utilitaire, sentiment éprouvé (admiration, fierté, attachement).",
        "Description d'un lieu non animé (site touristique, école, cour, village artisanal, magasin) :",
        "- Éléments caractéristiques : emplacement géographique, architecture des bâtiments, volumes, couleurs dominantes, aménagements naturels et décoratifs.",
        "- Organisation spatiale guidée : utilisation rigoureuse des repères spatiaux (à l'entrée, au centre, au premier plan, à droite, à gauche, au second plan, au fond, de part et d'autre).",
        "Outils de la langue au service de la description :",
        "- Temps verbaux dominants : présent de l'indicatif (description vivante et intemporelle) ou imparfait de l'indicatif (description dans un cadre passé de récit).",
        "- Expansions du nom : adjectifs qualificatifs épithètes, compléments du nom (introduits par de, en, à...), propositions subordonnées relatives apportant des détails fins.",
        "- Vocabulaire évaluatif : lexique mélioratif/appréciatif (magnifique, harmonieux, élégant, chatoyant, accueillant) versus dépréciatif (vétuste, délabré, terne, encombré).",
        "- Figures de style d'analogie : comparaisons (avec outil de comparaison : comme, tel que, pareil à) et métaphores pour rendre la vision expressive."
      ],
      formulas: [
        "Plan d'un texte descriptif : Introduction (Présentation générale de l'objet/lieu) + Développement (Progression spatiale méthodique : Extérieur -> Intérieur, Plan général -> Détails) + Conclusion (Impression, sentiment, jugement esthétique)",
        "Outils lexicaux descriptifs : Connecteurs spatiaux (à gauche, au premier plan, en face) + Expansions nominales (Adjectif + Complément du nom + Subordonnée relative) + Vocabulaire sensoriel et évaluatif"
      ],
      methods: [
        "Rédiger la description d'un objet remarquable (ex: le sac en cuir du guide touristique) : 1. Introduction : situer l'objet dans le contexte de l'excursion et identifier son propriétaire. 2. Développement : décrire l'extérieur (matière en cuir robuste, couleur rose étincelante, motifs de papillons, cordes et bretelles solides), puis décrire l'intérieur (profondeur, compartiments multiples, doublure sécurisée). 3. Conclusion : formuler son admiration pour l'élégance et la commodité de l'objet.",
        "Décrire un lieu non animé (ex: l'école du village ou une boulangerie de quartier) : 1. Introduction : nommer le lieu et indiquer sa localisation précise par rapport aux repères du quartier. 2. Développement : adopter un parcours visuel ordonné (extérieur : façade carrelée, vitrine lumineuse, vigile ; intérieur : étagères de pains dorés, parfums de cuisson, comptoir de vente). 3. Utiliser des adjectifs de couleur et des connecteurs spatiaux à chaque paragraphe. 4. Conclusion : exprimer son sentiment de bien-être dans ce lieu."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 3 : LE RÉCIT
    // -------------------------------------------------------------------------
    {
      id: "fr-ee-ch3",
      lessonNumber: 3,
      title: "Expression écrite — Le récit simple et le récit complexe",
      topics: [
        "Définition du récit : narration d'une succession d'événements réels ou imaginaires vécus par des personnages dans un cadre spatio-temporel déterminé.",
        "Le récit simple et son schéma narratif en trois temps :",
        "1. La situation initiale : ouverture du récit dans un climat d'équilibre ou de calme. Elle pose le cadre en répondant à trois questions fondamentales : Où ? (le lieu), Quand ? (l'époque, la saison ou le jour), Qui ? (présentation du narrateur et des personnages).",
        "2. Les péripéties : rupture du calme initial déclenchée par un élément perturbateur ou déclencheur (introduit par des adverbes d'irruption : 'tout à coup', 'soudain', 'brusquement'). Elles comprennent les actions, péripéties, obstacles, réactions et tentatives de résolution successives.",
        "3. La situation finale ou dénouement : achèvement de l'action, nouvel état d'équilibre, retour au calme, sentiments exprimés et éventuelle leçon morale.",
        "Le récit complexe (intégration du dialogue et de la description) :",
        "- Définition : récit dynamique comportant des échanges directs de paroles entre protagonistes (dialogue) et des notations descriptives ou des portraits rapides.",
        "- Rôle du dialogue : rendre l'action vivante, caractériser l'humeur des personnages, accélérer le rythme dramatique.",
        "Règles strictes de ponctuation et de mise en page du dialogue :",
        "- Les deux-points (:) : placés à la fin de la phrase narrative pour annoncer l'ouverture du discours direct.",
        "- Les guillemets (« ») : encadrent l'ensemble du dialogue du premier au dernier mot prononcé.",
        "- Les tirets (-) : placés en début de ligne avec un retrait d'alinéa pour marquer chaque changement d'interlocuteur.",
        "- Verbes de parole / verbes introducteurs variés : placés avant la réplique ou en proposition incise (ex: répliqua-t-il, s'écria le maître, balbutia-t-elle, ordonna-t-il).",
        "Outils grammaticaux et temporels du récit :",
        "- Alternance des temps du récit : passé simple pour les actions principales, brèves, soudaines et de premier plan ; imparfait de l'indicatif pour le second plan, les actions secondaires en cours d'accomplissement, les descriptions et les habitudes.",
        "- Verbes d'action et connecteurs chronologiques (d'abord, puis, ensuite, aussitôt, enfin)."
      ],
      formulas: [
        "Schéma narratif canonique : Situation Initiale (Calme : Qui, Où, Quand) -> Élément perturbateur ('Soudain') -> Péripéties (Actions / Conflit) -> Situation Finale (Dénouement + Bilan moral)",
        "Code typographique du dialogue : Phrase introductive avec verbe de parole : « [Alinéa] - [Réplique 1] [incise] [Alinéa] - [Réplique 2] »",
        "Couple temporel du récit : Passé simple = Actions clés de 1er plan (brèves, successives) | Imparfait = Actions d'arrière-plan (durée, décor, description)"
      ],
      methods: [
        "Construire un récit simple (ex: une fête familiale perturbée par un incident) : 1. Rédiger la situation initiale : poser le décor paisible de la réunion familiale chez les grands-parents pendant les congés de Pâques. 2. Introduire l'élément déclencheur par 'Tout à coup' (coupure de courant, étincelles au disjoncteur). 3. Dérouler les péripéties de sauvetage : panique générale, recherche d'eau et de sable, solidarité des voisins pour éteindre le feu. 4. Conclure par le dénouement heureux : reprise de la musique et soulagement général.",
        "Insérer un dialogue direct dans un récit complexe (ex: bagarre évitée dans la cour du collège) : 1. Poser le cadre de la récréation. 2. Présenter le différend entre les deux élèves. 3. Ouvrir le dialogue avec deux-points et guillemets. 4. Utiliser un tiret à chaque prise de parole en variant les verbes introducteurs ('s'écria', 'répondit d'un ton menaçant', 'intervint l'éducateur'). 5. Fermer les guillemets et achever par une conclusion sur la tolérance en milieu scolaire."
      ]
    },

    // =========================================================================
    // PARTIE 2 : GRAMMAIRE
    // =========================================================================

    // -------------------------------------------------------------------------
    // LEÇON 4 : LA PHRASE (CONSTITUANTS, TYPES ET FORMES)
    // -------------------------------------------------------------------------
    {
      id: "fr-gram-ch1",
      lessonNumber: 4,
      title: "Grammaire — La phrase : constituants, types obligatoires et formes facultatives",
      topics: [
        "Définition de la phrase : unité de communication linguistique complète dotée d'un sens, débutant par une lettre majuscule et s'achevant par une ponctuation forte (. ! ? ...).",
        "Les constituants de la phrase de base :",
        "- Constituants obligatoires (incompressibles pour la validité de la phrase minimale) :",
        "  1. Le Groupe Nominal Sujet (GNS) : peut être formé d'un nom propre (Marie), d'un pronom personnel (Elle), d'un déterminant + nom (Les enfants), d'un infinitif (Chanter libère l'esprit), ou d'un GN expansé.",
        "  2. Le Groupe Verbal (GV) : formé d'un verbe intransitif seul (Il pleut), d'un verbe transitif accompagné d'un COD ou COI (Les mécaniciens réparent la voiture), ou d'un verbe d'état avec attribut du sujet (Il est attentif).",
        "- Constituants facultatifs : groupes déplaçables et supprimables apportant des précisions de contexte (compléments circonstanciels de temps, lieu, manière, cause, but, moyen).",
        "Les quatre types obligatoires de phrases :",
        "1. Type déclaratif : transmet une information, énonce un fait ou un jugement ; se termine par un point simple (.) ; intonation montante puis descendante.",
        "2. Type interrogatif : formule une question pour obtenir une information ; se termine par un point d'interrogation (?) ; intonation montante. Se construit par intonation pure (Tu viens ?), locution 'est-ce que' (Est-ce que tu viens ?), mot interrogatif (Quand viens-tu ?) ou inversion du sujet (Viendras-tu ?).",
        "3. Type impératif (ou injonctif) : exprime un ordre, une consigne, un conseil ou une interdiction ; se conjugue sans pronom sujet ; se termine par un point simple ou d'exclamation.",
        "4. Type exclamatif : traduit une vive émotion (surprise, joie, effroi, admiration) ; commence souvent par un morphème exclamatif (Comme, Que, Quel) ; se termine par un point d'exclamation (!).",
        "Les formes facultatives de phrases (se combinant avec les 4 types obligatoires) :",
        "- Forme affirmative versus forme négative :",
        "  * Forme affirmative : affirme un fait sans marqueur négatif.",
        "  * Forme négative : nie l'action à l'aide d'adverbes de négation encadrant le verbe : 'ne... pas', 'ne... jamais', 'ne... plus', 'ne... rien', 'ne... guère', 'ne... que' (négation restrictive), ou coordination négative 'ni... ni... ne'.",
        "- Forme emphatique : insiste sur un constituant par inversion de l'ordre canonique, répétition avec un pronom anaphorique ('Ce livre, je le lis'), ou encadrement par un présentatif ('C'est... qui', 'C'est... que', 'Ce sont... qui', 'Il y a... qui', 'Voici / Voilà... qui').",
        "- Forme passive (voix active vs voix passive) :",
        "  * Définition : à la voix passive, le sujet subit l'action au lieu de l'accomplir.",
        "  * Mécanisme de transformation passive :",
        "    - Le sujet actif devient complément d'agent (introduit par la préposition 'par' ou 'de').",
        "    - Le COD actif devient le sujet passif.",
        "    - Le verbe se conjugue avec l'auxiliaire 'être' mis au temps du verbe actif, suivi du participe passé du verbe qui s'accorde obligatoirement en genre et en nombre avec le nouveau sujet.",
        "    - Exception : si le sujet actif est 'on', il n'y a pas de complément d'agent à la voix passive ('On a arrêté les cours' -> 'Les cours ont été arrêtés')."
      ],
      formulas: [
        "Structure de base : Phrase = GNS (obligatoire) + GV (obligatoire) + [Compléments Circonstanciels (facultatifs)]",
        "Matrice d'analyse d'une phrase : Type obligatoire (Déclaratif | Interrogatif | Impératif | Exclamatif) + Formes facultatives (Affirmative/Négative, Neutre/Emphatique, Active/Passive)",
        "Transformation passive : Sujet(A) + Verbe(A) + COD(A) ===> Sujet(P) [ex-COD] + ÊTRE (même temps que Verbe A) + Participe Passé (accordé) + par/de + Complément d'Agent [ex-Sujet A]"
      ],
      methods: [
        "Distinguer constituants obligatoires et facultatifs d'une phrase : 1. Repérer le verbe conjugué et son sujet -> forment le noyau obligatoire (GNS + GV). 2. Essayer de supprimer ou déplacer les autres groupes de mots. 3. Si la phrase reste grammaticalement correcte et conserve son sens plein -> ces groupes sont des constituants facultatifs (compléments circonstanciels).",
        "Effectuer une transformation active -> passive : 1. Vérifier que le verbe actif possède un COD direct. 2. Placer ce COD en tête de phrase comme nouveau sujet grammatical. 3. Conjuguer l'auxiliaire 'être' au temps exact du verbe actif (ex: présent -> est ; passé composé -> a été ; imparfait -> était ; futur -> sera). 4. Ajouter le participe passé et l'accorder en genre et en nombre avec le sujet. 5. Placer l'ancien sujet en fin de phrase précédé de 'par' (sauf si l'ancien sujet était 'on').",
        "Transformer une phrase déclarative neutre en phrase emphatique : 1. Repérer l'élément à mettre en relief (sujet, COD, CC). 2. Utiliser le présentatif 'C'est ... qui' pour un sujet, ou 'C'est ... que' pour un complément. 3. Exemple : 'Le chat mange la viande' -> 'C'est le chat qui mange la viande' (emphase sur le sujet) ou 'C'est la viande que le chat mange' (emphase sur le COD)."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 5 : LE GROUPE NOMINAL, SES EXPANSIONS ET LES DÉTERMINANTS
    // -------------------------------------------------------------------------
    {
      id: "fr-gram-ch2",
      lessonNumber: 5,
      title: "Grammaire — Le groupe nominal, ses expansions, déterminants et degrés de l'adjectif",
      topics: [
        "Organisation du groupe nominal minimal et étendu :",
        "- GN minimal obligatoire : Déterminant + Nom noyau (ex: 'Un ami', 'La légende').",
        "- Fonctions syntaxiques du GN dans la phrase : sujet du verbe, complément d'objet direct (COD), complément d'objet indirect (COI), complément circonstanciel (CC), complément du nom, mise en apposition.",
        "Les trois types d'expansions du groupe nominal :",
        "1. L'adjectif qualificatif : apporte une précision de qualité.",
        "   - Épithète : directement accolé avant ou après le nom sans virgule (ex: 'Ce tissu déchiré').",
        "   - Apposé : séparé du nom par une virgule (ex: 'Déchiré, ce tissu ne peut servir').",
        "2. Le complément du nom : groupe prépositionnel introduit par une préposition (à, de, en, pour, sans, avec...) complétant le nom noyau (ex: 'La maison en bois', 'Un jouet pour enfant').",
        "3. La proposition subordonnée relative (PSR) : proposition introduite par un pronom relatif (qui, que, dont, où, lequel...) complétant le nom antécédent (ex: 'Le coq qui chante les matins m'appartient').",
        "Les déterminants démonstratifs et possessifs :",
        "- Adjectifs démonstratifs : désignent et montrent l'être ou l'objet dont on parle.",
        "  * Masculin singulier : 'ce' (devant consonne : ce garçon) et 'cet' (devant voyelle ou h muet : cet arbre, cet homme).",
        "  * Féminin singulier : 'cette' (cette école, cette statue).",
        "  * Pluriel des deux genres : 'ces' (ces garçons, ces filles).",
        "- Adjectifs possessifs : établissent un rapport d'appartenance ou de dépendance avec le possesseur.",
        "  * Formes singulières : mon, ton, son, ma, ta, sa, notre, votre, leur.",
        "  * Formes plurielles : mes, tes, ses, nos, vos, leurs.",
        "  * Règle d'euphonie capitale : devant un nom féminin commençant par une voyelle ou un 'h' muet, on emploie obligatoirement mon, ton, son au lieu de ma, ta, sa (ex: 'mon école', 'ton amie', 'son histoire').",
        "Les degrés de comparaison de l'adjectif qualificatif :",
        "- Le comparatif : compare la qualité entre deux éléments à l'aide d'adverbes et de la conjonction 'que'.",
        "  * Comparatif d'infériorité : moins + adjectif + que (ex: 'La tortue est moins rapide que le lièvre').",
        "  * Comparatif d'égalité : aussi + adjectif + que (ex: 'Le mont A est aussi haut que le mont B').",
        "  * Comparatif de supériorité : plus + adjectif + que (ex: 'La voiture est plus rapide que le vélo').",
        "- Le superlatif : exprime le degré le plus élevé d'une qualité.",
        "  * Superlatif relatif : le plus / la plus / les plus (ou le moins...) + adjectif + [complément introduit par 'de'] (ex: 'C'est l'élève le plus studieux de la classe').",
        "  * Superlatif absolu : adjectif précédé d'un adverbe d'intensité très élevée : très, fort, bien, extrêmement, super, infiniment (ex: 'Cet élève est très intelligent', 'Un repas fort délicieux')."
      ],
      formulas: [
        "Structure du GN expansé : GN = Déterminant + Nom noyau + [Adjectif épithète] + [Complément du nom (prép + nom)] + [Subordonnée relative (pronom relatif + verbe)]",
        "Règle d'euphonie possessive : Nom féminin + début vocalique (voyelle ou h muet) => mon / ton / son (ex: mon amie, son histoire)",
        "Degrés de comparaison : Infériorité (moins ... que) | Égalité (aussi ... que) | Supériorité (plus ... que) | Superlatif relatif (le plus/moins ... de) | Superlatif absolu (très / fort / extrêmement + adj)"
      ],
      methods: [
        "Identifier et enrichir les expansions d'un nom noyau : 1. Souligner le nom principal (noyau). 2. Relever les adjectifs qualificatifs épithètes ou apposés qui s'accordent avec lui. 3. Relever les compléments du nom introduits par des prépositions (de, en, à). 4. Relever les propositions subordonnées relatives introduites par un pronom relatif (qui, que, dont, où).",
        "Choisir sans erreur entre 'ce' et 'cet' : 1. Vérifier le genre du nom : masculin singulier. 2. Regarder la première lettre du mot suivant. 3. Si c'est une consonne -> écrire 'ce' (ce village). 4. Si c'est une voyelle (a, e, i, o, u, y) ou un 'h' muet -> écrire 'cet' (cet animal, cet hôtel).",
        "Distinguer 'leur' adjectif possessif et 'leur' pronom personnel : 1. Si 'leur' précède un nom et s'accorde au pluriel ('leurs affaires') -> adjectif possessif. 2. Si 'leur' précède un verbe et signifie 'à eux / à elles' ('Je leur parle') -> pronom personnel invariable."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 6 : LES MODALITÉS DU DISCOURS (DIRECT ET INDIRECT)
    // -------------------------------------------------------------------------
    {
      id: "fr-gram-ch3",
      lessonNumber: 6,
      title: "Grammaire — Les modalités du discours : discours direct et discours indirect",
      topics: [
        "Définition du discours direct : style rapportant mot pour mot, sans altération, les paroles ou pensées de quelqu'un telles qu'elles ont été émises.",
        "Marques distinctives du discours direct :",
        "- Ponctuation spécifique : présence des deux-points (:), des guillemets ouvrants et fermants (« »), et des tirets (-) pour les répliques de dialogue.",
        "- Pronoms personnels de 1ère et 2ème personnes (je, tu, nous, vous) et adjectifs possessifs associés (mon, ton...).",
        "- Présence de verbes introducteurs de parole (dire, déclarer, demander, s'écrier, ordonner, affirmer).",
        "Définition du discours indirect : style où les paroles sont reformulées et intégrées dans une proposition subordonnée régie par un verbe introducteur (sans guillemets ni tirets).",
        "Règles impératives de transposition (Discours Direct -> Discours Indirect) :",
        "1. Changement des pronoms personnels et adjectifs :",
        "   - 'Je' / 'Tu' deviennent 'Il' ou 'Elle'.",
        "   - 'Nous' / 'Vous' deviennent 'Ils' ou 'Elles'.",
        "   - 'Mon' / 'Ton' deviennent 'Son' ; 'Ma' / 'Ta' deviennent 'Sa' ; 'Mes' / 'Tes' deviennent 'Ses'.",
        "2. Concordance des temps verbaux (lorsque le verbe introducteur est au passé) :",
        "   - Présent de l'indicatif -> Imparfait de l'indicatif (ex: 'Je viens' -> Il disait qu'il venait).",
        "   - Passé composé ou Passé simple -> Plus-que-parfait (ex: 'J'ai fini' -> Il affirma qu'il avait fini).",
        "   - Futur simple -> Conditionnel présent (ex: 'Je partirai' -> Il annonça qu'il partirait).",
        "   - Impératif -> De + Infinitif (ex: 'Sortez !' -> Il ordonna de sortir).",
        "   - Attention : si le verbe introducteur est au présent ou au futur, le temps du verbe subordonné ne subit AUCUN changement temporel.",
        "3. Transposition des repères spatio-temporels :",
        "   - 'Aujourd'hui' devient 'ce jour-là'.",
        "   - 'Hier' devient 'la veille' ; 'Avant-hier' devient 'l'avant-veille'.",
        "   - 'Demain' devient 'le lendemain' ; 'Après-demain' devient 'le surlendemain'.",
        "   - 'Cette semaine' devient 'cette semaine-là'.",
        "   - 'Dans trois jours' devient 'trois jours plus tard'.",
        "   - 'Ici' devient 'là' ou 'là-bas'."
      ],
      formulas: [
        "Table de transposition temporelle (si verbe introducteur au passé) : Présent => Imparfait | Passé composé / Passé simple => Plus-que-parfait | Futur simple => Conditionnel présent | Impératif => de + Infinitif",
        "Table des repères temporels : Aujourd'hui => Ce jour-là | Hier => La veille | Demain => Le lendemain | Ici => Là",
        "Suppression au discours indirect : Élimination complète des guillemets (« »), des deux-points (:) et des tirets d'interlocuteur"
      ],
      methods: [
        "Transposer une phrase du discours direct au discours indirect : 1. Repérer le temps du verbe introducteur (au passé ou au présent). 2. Supprimer les deux-points et les guillemets. 3. Insérer la conjonction de subordination 'que' (ou 'qu''). 4. Adapter les pronoms personnels et possessifs (passer à la 3ème personne). 5. Si le verbe introducteur est au passé, appliquer strictement la concordance des temps et transposer les adverbes de temps/lieu. 6. Vérifier la cohérence globale de la phrase complexe obtenue."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 7 : LE VERBE (MORPHOLOGIE, TEMPS DE L'INDICATIF ET AUXILIAIRES D'ASPECT)
    // -------------------------------------------------------------------------
    {
      id: "fr-gram-ch4",
      lessonNumber: 7,
      title: "Grammaire — Le verbe : morphologie, présent, futur, passé composé/imparfait et auxiliaires d'aspect",
      topics: [
        "Définition du verbe : noyau du groupe verbal indiquant une action, un état, une attitude ou un sentiment. Il se compose d'un radical (sens) et d'une terminaison/désinence (mode, temps, personne, nombre).",
        "Morphologie des verbes du 1er et 2ème groupe :",
        "- 1er groupe : verbes en '-er' à l'infinitif (participe présent en '-ant', ex: chanter -> chantant) avec radical généralement stable.",
        "- 2ème groupe : verbes en '-ir' à l'infinitif faisant leur participe présent en '-issant' (ex: finir -> finissant ; grandir -> grandissant) conservant l'infixe '-iss-' aux personnes du pluriel.",
        "Le présent de l'indicatif :",
        "- Terminaisons 1er groupe : -e, -es, -e, -ons, -ez, -ent.",
        "- Terminaisons 2ème groupe : -is, -is, -it, -issons, -issez, -issent.",
        "- Les 4 valeurs majeures du présent de l'indicatif :",
        "  1. Présent d'énonciation : action se déroulant au moment où l'on parle (ex: 'Le professeur enseigne la grammaire').",
        "  2. Présent de vérité générale : faits intemporels, lois scientifiques, proverbes (ex: 'La Terre tourne autour du Soleil').",
        "  3. Présent d'habitude ou d'itération : action répétée régulièrement (ex: 'Chaque matin, je me réveille à 6h').",
        "  4. Présent de narration / historique : rapporte des faits passés pour les rendre palpitants et vivants aux yeux du lecteur.",
        "  5. Présent de futur proche : action certaine devant se produire très prochainement (ex: 'Demain, je pars pour Yamoussoukro').",
        "Le futur simple de l'indicatif :",
        "- Formation : infinitif complet (ou base future) + terminaisons -ai, -as, -a, -ons, -ez, -ont.",
        "- Valeurs d'emploi : action à venir, promesse, ordre atténué à valeur d'impératif (ex: 'Vous ferez cet exercice avant de sortir').",
        "Le couple imparfait / passé composé dans le récit :",
        "- Passé composé : exprime le premier plan du récit, les actions principales, délimitées, achevées et ponctuelles.",
        "- Imparfait de l'indicatif : exprime le second plan du récit, le décor, les descriptions physiques et psychologiques, les actions inachevées ou répétées dans le passé (terminaisons : -ais, -ais, -ait, -ions, -iez, -aient).",
        "Les auxiliaires d'aspect et périphrases verbales :",
        "- Définition : verbes conjugués accompagnant un verbe à l'infinitif pour préciser l'état d'accomplissement ou la nuance temporelle d'une action.",
        "- Principales valeurs aspectuelles :",
        "  * Futur proche : aller + infinitif (ex: 'Le train va partir').",
        "  * Passé récent / proche : venir de + infinitif (ex: 'Nous venons d'arriver').",
        "  * Action en cours de déroulement (duratif) : être en train de + infinitif (ex: 'Il est en train de réviser').",
        "  * Aspect inchoatif (début d'action) : commencer à / se mettre à + infinitif (ex: 'Il commence à pleuvoir').",
        "  * Action imminente : être sur le point de + infinitif (ex: 'Le spectacle est sur le point de commencer')."
      ],
      formulas: [
        "Terminaisons du présent de l'indicatif : 1er groupe = -e, -es, -e, -ons, -ez, -ent | 2ème groupe = -is, -is, -it, -issons, -issez, -issent",
        "Terminaisons du futur simple : Infinitif + -ai, -as, -a, -ons, -ez, -ont",
        "Formules de périphrases d'aspect : Futur proche = Aller + Infinitif | Passé récent = Venir de + Infinitif | Déroulement = Être en train de + Infinitif | Début = Commencer à + Infinitif"
      ],
      methods: [
        "Identifier la valeur d'un verbe au présent de l'indicatif : 1. Regarder si la phrase exprime une vérité immuable ou scientifique -> présent de vérité générale. 2. Regarder s'il y a un indicateur de fréquence ('chaque jour', 'souvent') -> présent d'habitude. 3. Regarder si le fait a lieu à l'instant même -> présent d'énonciation. 4. Regarder si la phrase est insérée dans un récit au passé -> présent de narration.",
        "Choisir entre imparfait et passé composé dans un récit au passé : 1. Poser la question : l'action est-elle une action brève et soudaine qui fait avancer l'histoire ? Si oui -> passé composé. 2. L'action est-elle une description d'état, un décor, ou une habitude passée ? Si oui -> imparfait de l'indicatif."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 8 : LE GROUPE VERBAL AVEC LE VERBE ÊTRE ET SES SUBSTITUTS (VERBES D'ÉTAT)
    // -------------------------------------------------------------------------
    {
      id: "fr-gram-ch5",
      lessonNumber: 8,
      title: "Grammaire — Le groupe verbal avec le verbe être et les verbes d'état : l'attribut du sujet",
      topics: [
        "Définition du groupe verbal attributif : groupe verbal dont le verbe est le verbe 'être' ou un verbe d'état, introduisant un attribut apportant une qualification essentielle sur le sujet.",
        "Les sept verbes d'état fondamentaux : être, paraître, sembler, devenir, demeurer, rester, avoir l'air.",
        "Substituts occasionnels fonctionnant comme verbes d'état (dès lors qu'ils peuvent être remplacés par 'être') : s'appeler, être nommé, passer pour, être jugé, se révéler, tomber (ex: 'Il se nomme Koffi' = 'Il est Koffi').",
        "Les diverses natures grammaticales de l'attribut du sujet :",
        "- Un adjectif qualificatif (ex: 'Notre école est belle', 'Il paraît vigilant').",
        "- Un nom propre (ex: 'Cet enfant s'appelle Emmanuel').",
        "- Un nom commun ou groupe nominal (ex: 'Cet homme est pilote', 'Ce garçon est un grand travailleur').",
        "- Un pronom personnel ou possessif (ex: 'Ce stylo est le mien', 'C'est lui').",
        "- Un verbe à l'infinitif (ex: 'Son seul but est de réussir').",
        "- Une proposition subordonnée (ex: 'Son souhait est que tu sois heureuse').",
        "- Un adverbe (ex: 'Ces élèves sont ensemble').",
        "Distinction capitale entre adjectif attribut du sujet et adjectif épithète :",
        "- Adjectif attribut du sujet : appartient au groupe verbal (GV) et est séparé du nom qu'il qualifie par un verbe d'état (ex: 'Cet élève est intelligent'). Il ne peut pas être supprimé sans rendre la phrase bancale.",
        "- Adjectif épithète : appartient au groupe nominal (GN) et est directement rattaché au nom sans verbe intercalé (ex: 'L'élève intelligent écoute attentivement'). Il peut être supprimé sans détruire la structure de la phrase."
      ],
      formulas: [
        "Structure de la phrase attributive : Sujet + Verbe d'État (être, paraître, sembler, devenir, demeurer, rester, avoir l'air) + Attribut du Sujet",
        "Test de vérification de l'attribut : Si le verbe peut être remplacé par le verbe 'être' sans dénaturer le sens => le complément est un attribut du sujet",
        "Règle de distinction : Adjectif épithète = Dans le GN (collé au nom, supprimable) | Adjectif attribut = Dans le GV (relié par un verbe d'état, obligatoire)"
      ],
      methods: [
        "Identifier l'attribut du sujet et sa nature grammaticale dans une phrase : 1. Localiser le verbe et vérifier s'il figure parmi les 7 verbes d'état ou leurs substituts. 2. Repérer le mot ou groupe de mots qui qualifie le sujet via ce verbe. 3. Vérifier que ce groupe ne peut pas être supprimé. 4. Indiquer sa nature exacte (adjectif qualificatif, nom propre, GN, pronom, infinitif)."
      ]
    },

    // -------------------------------------------------------------------------
    // LEÇON 9 : LES ADVERBES DE TEMPS
    // -------------------------------------------------------------------------
    {
      id: "fr-gram-ch6",
      lessonNumber: 9,
      title: "Grammaire — Les adverbes de temps : formes simples, composées et emplois",
      topics: [
        "Définition de l'adverbe de temps : mot ou locution invariable qui précise, modifie ou complète le verbe en indiquant le moment où s'accomplit l'action.",
        "Les formes morphologiques des adverbes de temps :",
        "- Formes simples (un seul mot) : demain, hier, maintenant, souvent, bientôt, autrefois, jadis, tard, tôt.",
        "- Formes composées ou locutions adverbiales (plusieurs mots réunis) : aujourd'hui, plus tard, tout de suite, après-demain, avant-hier, de bonne heure, à l'instant, tout à l'heure.",
        "Les trois grandes valeurs d'emploi de l'adverbe de temps :",
        "1. Désigner une date ou un repère temporel fixe (ex: 'Demain, nous irons au champ').",
        "2. Indiquer une durée (ex: 'Mon grand-père vécut longtemps avant de s'éteindre').",
        "3. Indiquer une période ou un contraste temporel (ex: 'Autrefois j'étais timide, maintenant je m'exprime en public')."
      ],
      formulas: [
        "Typologie des adverbes de temps : Simples (hier, demain, maintenant, souvent) | Composés / Locutions (aujourd'hui, tout de suite, plus tard, après-demain)",
        "Caractère invariable : Un adverbe ne s'accorde jamais en genre ni en nombre"
      ],
      methods: [
        "Classer et employer correctement un adverbe de temps : 1. Vérifier si l'adverbe est composé d'un mot (forme simple) ou de plusieurs mots (forme composée). 2. Déterminer si son rôle est de marquer une date ponctuelle, une durée ou une époque. 3. Veiller à son invariabilité orthographique lors de l'écriture."
      ]
    }
  ]
} as const;

export function findFrancais6eChapters(query: string, limit = 3): Chapter[] {
  const q = query.toLowerCase();
  const words = q.split(/[\s,.'";:?!-]+/).filter(w => w.length > 2);

  const scored = francais6eKnowledgeBase.chapters.map(ch => {
    let score = 0;
    const titleLower = ch.title.toLowerCase();

    for (const w of words) {
      if (titleLower.includes(w)) score += 10;
      for (const t of ch.topics) {
        if (t.toLowerCase().includes(w)) score += 3;
      }
      for (const f of ch.formulas) {
        if (f.toLowerCase().includes(w)) score += 4;
      }
      for (const m of ch.methods) {
        if (m.toLowerCase().includes(w)) score += 3;
      }
    }

    return { ch, score };
  });

  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.ch as unknown as Chapter);
}

export function buildFrancais6eContext(query: string): string {
  const matches = findFrancais6eChapters(query);
  if (matches.length === 0) {
    return "Aucun chapitre de Français 6ème n'a pu être associé directement à cette requête.";
  }

  let ctx = `=== CONTEXTE LE PROF : FRANÇAIS 6ÈME (PROGRAMME OFFICIEL CÔTE D'IVOIRE APC) ===\n`;
  for (const ch of matches) {
    ctx += `\n[Chapitre / Leçon] : ${ch.title} (ID: ${ch.id})\n`;
    ctx += `[Notions clés & Règles de grammaire / rédaction] :\n`;
    for (const t of ch.topics) {
      ctx += `  - ${t}\n`;
    }
    if (ch.formulas.length > 0) {
      ctx += `[Structures canoniques & Règles indispensables] :\n`;
      for (const f of ch.formulas) {
        ctx += `  * ${f}\n`;
      }
    }
    if (ch.methods.length > 0) {
      ctx += `[Méthodes de résolution & Démarches étape par étape] :\n`;
      for (const m of ch.methods) {
        ctx += `  > ${m}\n`;
      }
    }
  }

  return ctx;
}
