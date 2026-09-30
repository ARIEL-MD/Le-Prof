/**
 * BASE DE DONNÉES PÉDAGOGIQUE — SUJETS DE PHILOSOPHIE CORRIGÉS (SV. NTSGOD)
 * Source : Fomesoutra.com
 * Niveau : Terminale (Toutes Séries) — Philosophie Africaine & Universelle
 * 
 * Contient :
 * 1. 11 Dissertations philosophiques avec :
 *    - Définitions conceptuelles des termes essentiels
 *    - Reformulations fidèles
 *    - Problème central posé sous forme interrogative
 *    - Axes d'analyse (Thèse / Antithèse) et corpus d'auteurs et citations philosophiques
 * 2. 8 Commentaires de textes philosophiques intégraux avec étude ordonnée et intérêt philosophique :
 *    - Sujet 1 : Henri Bergson, L'évolution créatrice (conscience animale vs humaine, mécanismes cérébraux, choix indéfini)
 *    - Sujet 2 : Hegel, Esthétique (double existence de l'homme : en soi et pour soi, activité théorique et pratique)
 *    - Sujet 3 : Nietzsche, Généalogie de la morale (l'oubli comme faculté active, digestion psychique, condition du bonheur)
 *    - Sujet 4 : Jean-Paul Sartre, L'Existentialisme est un humanisme (la liberté pour la liberté, vouloir la liberté des autres)
 *    - Sujet 5 : Rousseau, Discours sur l'inégalité (vivre et mourir libre soumis aux lois, l'honorable joug)
 *    - Sujet 6 : Nietzsche, Par-delà le bien et le mal (l'instinct grégaire d'obéissance, tartufferie des dirigeants)
 *    - Sujet 7 : Nietzsche, Humain, trop humain (la justice comme troc entre puissances égales, illusion de l'acte non-égoïste)
 *    - Sujet 8 : David Hume, Essais politiques / Du contrat originel (le consentement populaire est rare, origine dans la force)
 */

export interface PhiloDissertationNtsgod {
  numero: number;
  sujet: string;
  definitions: { terme: string; definition: string }[];
  reformulation: string;
  probleme: string;
  axe1: { titre: string; argumentsEtReferences: { point: string; citationOuAuteur: string }[] };
  axe2: { titre: string; argumentsEtReferences: { point: string; citationOuAuteur: string }[] };
  reponseOuBilan: string;
}

export interface PhiloCommentaireNtsgod {
  numero: number;
  auteur: string;
  oeuvre: string;
  texteExtrait: string;
  elementsIntroduction: {
    theme: string;
    probleme: string;
    these: string;
  };
  etudeOrdonnee: {
    mouvement1: { delimitation: string; analyse: string };
    mouvement2: { delimitation: string; analyse: string };
  };
  interetPhilosophique: {
    critiqueInterne: { intention: string; appreciation: string };
    critiqueExterne: { enjeu: string; enjeuProblematise: string; references: string[] };
  };
}

export const PHILO_NTSGOD_DISSERTATIONS: PhiloDissertationNtsgod[] = [
  {
    numero: 1,
    sujet: "La conscience nous exclut-elle de l’animalité ?",
    definitions: [
      { terme: "La conscience", definition: "Faculté permettant de connaître, de distinguer le bien du mal et le vrai du faux." },
      { terme: "Exclut-elle", definition: "Met-elle à l'abri, met-elle totalement hors, préserve-t-elle, distingue-t-elle absolument de." },
      { terme: "L'animalité", definition: "Ensemble des caractères propres à l'animal (instincts bruts, violence pulsionnelle, immoralité)." }
    ],
    reformulation: "La conscience en tant que faculté de connaître et de juger éloigne-t-elle définitivement l’homme de l’instinct animal ?",
    probleme: "Quel est l’impact réel de la conscience sur le comportement pulsionnel de l’homme ?",
    axe1: {
      titre: "Malgré la conscience, l’homme demeure enraciné dans l’animalité",
      argumentsEtReferences: [
        {
          point: "Les guerres destructrices, la barbarie et la violence moderne prouvent la persistance de l'animalité.",
          citationOuAuteur: "HOBBES, Léviathan : « L’homme est un loup pour l’homme. »"
        },
        {
          point: "L'inconscient psychique détermine la conscience et pousse l'homme à des décharges pulsionnelles agressives.",
          citationOuAuteur: "FREUD, Malaise dans la civilisation (1929) : « L'homme n'est point cet être débonnaire au cœur assoiffé d'amour... mais un être qui doit porter au compte de ses données instinctives une bonne somme d'agressivité. »"
        },
        {
          point: "La conscience n'est qu'une surface fragile face aux forces souterraines.",
          citationOuAuteur: "Paul VALÉRY : « La conscience règne mais ne gouverne pas. »"
        }
      ]
    },
    axe2: {
      titre: "La conscience constitue la rupture ontologique qui élève l’homme au-dessus de la bête",
      argumentsEtReferences: [
        {
          point: "La faculté de penser définit l'essence humaine et le rend sujet de connaissance.",
          citationOuAuteur: "DESCARTES, Discours de la méthode : « Je suis une substance dont toute l'essence ou la nature n'est que de penser. »"
        },
        {
          point: "La dignité du roseau pensant face à l'immensité aveugle de l'univers.",
          citationOuAuteur: "PASCAL, Pensées : « L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant. »"
        },
        {
          point: "La conscience morale confère l'exclusivité du devoir, de la justice et de la liberté.",
          citationOuAuteur: "ROUSSEAU, Émile (Livre IV) : « Conscience ! Conscience ! Instinct divin, immortelle et céleste voix ; guide assuré... sans toi je ne sens rien en moi qui m’élève au-dessus des bêtes. »"
        },
        {
          point: "Le pouvoir d'affirmer le « Je » fonde la dignité humaine.",
          citationOuAuteur: "KANT, Anthropologie du point de vue pragmatique : « Posséder le Je dans sa représentation : ce pouvoir élève l'homme infiniment au-dessus de toutes les autres créatures. »"
        },
        {
          point: "Capacité de se projeter dans l'avenir et de transcender le temps présent.",
          citationOuAuteur: "HEIDEGGER, Les Concepts fondamentaux de la Métaphysique : L’homme est un « être des lointains »."
        }
      ]
    },
    reponseOuBilan: "Bien que l'inconscient et les pulsions biologiques l'influencent, la conscience demeure le repère normatif et le sceau de la grandeur morale de l'homme."
  },
  {
    numero: 2,
    sujet: "Peut-on considérer l’inconscient comme une nature ou une histoire ?",
    definitions: [
      { terme: "L'inconscient", definition: "Instance psychique où sont emmagasinés instincts, pulsions et désirs refoulés échappant à la conscience claire." },
      { terme: "Nature", definition: "Le donné inné, l'ensemble des dispositions biologiques universelles présentes dès la naissance." },
      { terme: "Histoire", definition: "L'acquis au fil de l'existence, produit de l'éducation, des traumatismes et des interactions sociales." }
    ],
    reformulation: "L'inconscient est-il une structure biologique innée ou une construction issue du vécu et de la biographie personnelle ?",
    probleme: "Quelle est la genèse et la véritable nature de l'inconscient psychique ?",
    axe1: {
      titre: "L’inconscient comme instance naturelle et universelle",
      argumentsEtReferences: [
        {
          point: "L'universalité des mécanismes de refoulement et des actes psychiques échappant au contrôle volontaire.",
          citationOuAuteur: "FREUD, Métapsychologie : « Il se produit fréquemment des actes psychiques qui présupposent d'autres actes ne bénéficiant pas du témoignage de la conscience. »"
        },
        {
          point: "L'homme ne peut effacer sa composante biologique et animale.",
          citationOuAuteur: "PASCAL, Pensées : « L'homme n'est ni ange ni bête, et le malheur veut que qui veut faire l'ange fait la bête. »"
        },
        {
          point: "Dispositions structurales présentes dès l'origine de la vie mentale.",
          citationOuAuteur: "Jean PIAGET : L'« inconscient intellectuel » présent dès la naissance prédisposant au développement cognitif."
        }
      ]
    },
    axe2: {
      titre: "L’inconscient comme produit de l’histoire singulière et collective",
      argumentsEtReferences: [
        {
          point: "Le refoulement dépend des interdits familiaux, de l'éducation et des événements biographiques vécus.",
          citationOuAuteur: "William WORDSWORTH : « L’enfant est le père de l’homme. »"
        },
        {
          point: "L'inconscient se forge au cours du développement psychosexuel et des relations parentales.",
          citationOuAuteur: "FREUD, Cinq leçons sur la psychanalyse : L'importance des expériences infantiles refoulées."
        },
        {
          point: "L'héritage archétypal transindividuel transmis à travers les mythes et symboles de l'humanité.",
          citationOuAuteur: "Carl Gustav JUNG : La notion d'« inconscient collectif »."
        }
      ]
    },
    reponseOuBilan: "L'inconscient est à la fois naturel (par ses racines pulsionnelles) et éminemment historique (par le matériau refoulé issu de la culture et du vécu)."
  },
  {
    numero: 3,
    sujet: "L’État est-il un mal nécessaire ?",
    definitions: [
      { terme: "L'État", definition: "Société organisée en personne morale autonome dotée de pouvoirs politiques, juridiques et administratifs sur un territoire." },
      { terme: "Mal nécessaire", definition: "Un pis-aller, dommage inévitable dont on doit s'accommoder faute de mieux pour prévenir une catastrophe pire." }
    ],
    reformulation: "L'État constitue-t-il une contrainte répressive mais indispensable à la survie collective ?",
    probleme: "L'institution étatique aliène-t-elle l'homme ou garantit-elle son humanisation sociale ?",
    axe1: {
      titre: "L’État comme appareil d'oppression et cimetière des libertés",
      argumentsEtReferences: [
        {
          point: "L'État maintient son autorité par la coercition et le monopole des forces armées.",
          citationOuAuteur: "Louis ALTHUSSER : Distinction entre les Appareils Répressifs d’État (ARE : police, armée) et Idéologiques (AIE : école, médias)."
        },
        {
          point: "L'État étouffe l'individualité et les initiatives libres sous la machine bureaucratique.",
          citationOuAuteur: "BAKOUNINE : « L’État est un vaste cimetière où viennent s’enterrer toutes les manifestations de la vie individuelle. »"
        },
        {
          point: "L'État légitime la domination économique des nantis au détriment des démunis.",
          citationOuAuteur: "ROUSSEAU (Contrat social) : « Les lois sont toujours utiles à ceux qui possèdent et nuisibles à ceux qui n'ont rien. » ; MARX : L'État comme outil de la classe dominante."
        }
      ]
    },
    axe2: {
      titre: "La nécessité vitale de l’État : pacificateur et garant du droit",
      argumentsEtReferences: [
        {
          point: "Sans autorité centrale, les hommes sombrent dans l'anarchie sanguinaire de l'état de nature.",
          citationOuAuteur: "HOBBES, Léviathan : L'état de nature est une « guerre de chacun contre chacun »."
        },
        {
          point: "L'État réconcilie les aspirations particulières avec la volonté générale universelle.",
          citationOuAuteur: "HEGEL, Principes de la philosophie du droit : L'État comme accomplissement de l'Idée éthique."
        },
        {
          point: "La finalité véritable de la souveraineté est la sécurité et la liberté des citoyens.",
          citationOuAuteur: "SPINOZA, Traité théologico-politique : « La fin de l’État, c’est la liberté et non la domination. »"
        },
        {
          point: "L'obéissance aux lois communes émancipe du bon plaisir tyrannique d'autrui.",
          citationOuAuteur: "ROUSSEAU, Du Contrat social : « L'obéissance à la loi qu'on s'est prescrite est liberté. »"
        }
      ]
    },
    reponseOuBilan: "L'État est un rempart salutaire : ses contraintes institutionnelles sont le prix indispensable de la liberté civile et de la paix civile."
  },
  {
    numero: 4,
    sujet: "Le pouvoir d’État est-il nécessairement violent ?",
    definitions: [
      { terme: "Pouvoir d'État", definition: "Autorité politique souveraine chargée de diriger la cité et de faire appliquer les lois." },
      { terme: "Nécessairement", definition: "Inévitablement, obligatoirement, par essence." },
      { terme: "Violent", definition: "Brutal, abusant de la force physique ou de la contrainte psychique pour s'imposer." }
    ],
    reformulation: "L'exercice de l'autorité souveraine exige-t-il obligatoirement l'usage de la contrainte et de la force coercitive ?",
    probleme: "Quelle est la légitimité et la mesure de la violence au service de l'ordre politique ?",
    axe1: {
      titre: "La violence est omniprésente dans la genèse et la pratique étatique",
      argumentsEtReferences: [
        {
          point: "L'État recourt aux armes pour contraindre et aliéner les récalcitrants.",
          citationOuAuteur: "Louis ALTHUSSER (les ARE) ; SCHOPENHAUER : « L'État n'est que la muselière dont le but est de rendre inoffensive cette bête carnassière, l'homme. »"
        },
        {
          point: "La violence physique est l'aveu de l'échec de la persuasion rationnelle.",
          citationOuAuteur: "Georges GUSDORF, La Vertu de force : La violence est une « énergie de désespoir »."
        }
      ]
    },
    axe2: {
      titre: "La force publique légitime est la condition du maintien de la paix civile",
      argumentsEtReferences: [
        {
          point: "Pour dompter la violence privée anarchique, l'État doit disposer d'une force supérieure dissuasive.",
          citationOuAuteur: "HOBBES, Léviathan : Nécessité d'un pouvoir commun qui tienne tous les hommes en respect."
        },
        {
          point: "La justice a besoin du glaive de la force pour ne pas rester un vain mot.",
          citationOuAuteur: "PASCAL, Pensées : « La justice sans la force est impuissante ; la force sans la justice est tyrannique. »"
        },
        {
          point: "Équilibre entre force pacificatrice et risque despotique.",
          citationOuAuteur: "Paul VALÉRY, Regards sur le monde actuel : « Si l'État est fort il nous écrase, s'il est faible nous périssons. »"
        }
      ]
    },
    reponseOuBilan: "L'État détient le monopole de la contrainte physique légitime (Max Weber), mais cette force doit demeurer strictement subordonnée au droit et à la dignité citoyenne."
  },
  {
    numero: 5,
    sujet: "« L’enfer c’est l’absence des autres ». Qu’en pensez-vous ?",
    definitions: [
      { terme: "L'enfer", definition: "Lieu ou état de tourment intolérable, de malheur et de détresse absolue." },
      { terme: "L'absence des autres", definition: "La solitude totale, l'isolement complet, la rupture de tout lien social." }
    ],
    reformulation: "La privation de toute relation avec autrui est-elle le pire des supplices pour l'homme ?",
    probleme: "La solitude absolue aliène-t-elle l'homme plus que la cohabitation conflictuelle avec ses semblables ?",
    axe1: {
      titre: "L'isolement total dépouille l'homme de son humanité",
      argumentsEtReferences: [
        {
          point: "L'homme ne peut se réaliser pleinement qu'au sein de la communauté politique.",
          citationOuAuteur: "ARISTOTE, La Politique : « L’homme est un animal politique. »"
        },
        {
          point: "Hors de l'ambiance sociale et du langage d'autrui, l'enfant reste un simple animal sauvage.",
          citationOuAuteur: "Lucien MALSON, Les enfants sauvages : « Les hommes ne sont pas des hommes hors de l'ambiance sociale. »"
        },
        {
          point: "L'altérité est la source première de l'élévation et de l'apprentissage personnel.",
          citationOuAuteur: "SAINT-EXUPÉRY, Terre des hommes : « Si tu diffères de moi, mon frère, loin de me léser, tu m'enrichis. »"
        }
      ]
    },
    axe2: {
      titre: "La présence d'autrui peut devenir un enfer d'aliénation et de rivalité",
      argumentsEtReferences: [
        {
          point: "Le regard de l'autre me chosifie, paralyse ma spontanéité et aliène ma liberté.",
          citationOuAuteur: "SARTRE, L'Être et le Néant : « Je saisis le regard de l'autre au sein même de mon acte, comme solidification et aliénation de mes propres possibilités. » ; Huis-clos : « L'enfer, c'est les autres. »"
        },
        {
          point: "L'agressivité spontanée fait d'autrui un rival menaçant et jaloux.",
          citationOuAuteur: "FREUD, Malaise dans la civilisation : L'homme porte au compte de ses instincts une bonne dose d'hostilité envers le prochain."
        }
      ]
    },
    reponseOuBilan: "Si la rivalité avec autrui engendre parfois la discorde, la privation absolue de lien social constitue le véritable anéantissement psychologique et moral de l'être humain."
  },
  {
    numero: 6,
    sujet: "Suffit-il d'appliquer le droit pour que règne la justice ?",
    definitions: [
      { terme: "Suffit-il", definition: "Est-il nécessaire et pleinement satisfaisant, la condition unique nécessaire et suffisante." },
      { terme: "Appliquer le droit", definition: "Exécuter les lois positives et les règles juridiques instituées dans la société." },
      { terme: "Justice", definition: "L'équité, l'impartialité morale, la juste distribution des droits et des devoirs." }
    ],
    reformulation: "La simple obéissance aveugle aux lois positives garantit-elle à elle seule l'établissement de la véritable équité morale ?",
    probleme: "La légalité juridique se confond-elle nécessairement avec la légitimité éthique de la justice ?",
    axe1: {
      titre: "Le droit positif peut être instrument d'injustice et d'oppression",
      argumentsEtReferences: [
        {
          point: "Une loi formellement légale peut être souverainement injuste (procès inique de Socrate).",
          citationOuAuteur: "PLATON, L'Apologie de Socrate : La condamnation légale mais injuste du juste."
        },
        {
          point: "Le droit masque les intérêts égoïstes de la bourgeoisie dirigeante.",
          citationOuAuteur: "MARX : La loi est un instrument d'exploitation au service de la classe dominante ; BAKOUNINE : L'État fossoyeur de la liberté."
        }
      ]
    },
    axe2: {
      titre: "L'application du droit est la condition nécessaire pour écarter l'arbitraire",
      argumentsEtReferences: [
        {
          point: "Sans règles juridiques fixes, prévaut la loi sanguinaire du plus fort.",
          citationOuAuteur: "HOBBES, Léviathan ; SPINOZA : « Le droit est l'essence de la justice. »"
        },
        {
          point: "La loi impersonnelle assure l'égalité des citoyens devant l'autorité.",
          citationOuAuteur: "ROUSSEAU, Du Contrat social : « Il n'y a pas de liberté sans lois, ni où quelqu'un est au-dessus des lois. »"
        },
        {
          point: "Le droit délimite les libertés respectives de chacun.",
          citationOuAuteur: "KANT : « Le droit est l'ensemble des conditions qui permettent à la liberté de chacun de s'accorder avec la liberté de tous. »"
        }
      ]
    },
    reponseOuBilan: "L'application du droit est indispensable mais insuffisante : le droit positif doit être constamment éclairé et rectifié par l'équité morale et le sens humain."
  }
];

export const PHILO_NTSGOD_COMMENTAIRES: PhiloCommentaireNtsgod[] = [
  {
    numero: 1,
    auteur: "Henri BERGSON",
    oeuvre: "L'évolution créatrice",
    texteExtrait: "« Comment n’être pas frappé du fait que l’homme est capable d’apprendre n’importe quel exercice, de fabriquer n’importe quel objet... Le cerveau humain est fait pour nous laisser choisir parmi eux... Du limité à l'illimité il y a toute la distance du fermé à l'ouvert. Ce n'est pas une différence de degré, mais de nature. Radicale aussi est la différence entre la conscience animale et la conscience humaine. »",
    elementsIntroduction: {
      theme: "Conscience animale et conscience humaine.",
      probleme: "Peut-on assimiler la conscience animale à la conscience humaine ?",
      these: "La conscience humaine diffère radicalement de celle de l'animal : le cerveau humain ouvre sur des capacités d'invention motrice et créatrice illimitées."
    },
    etudeOrdonnee: {
      mouvement1: {
        delimitation: "L1 à L10 (« Comment n'être... de nature »)",
        analyse: "Confrontation anatomique et fonctionnelle des cerveaux animal et humain : le nombre indéfini de mécanismes moteurs ouverts au choix conscient chez l'homme."
      },
      mouvement2: {
        delimitation: "L11 à L12 (« Radicale aussi... conscience humaine »)",
        analyse: "Thèse conclusive : passage qualitatif du fermé à l'ouvert, affirmant une différence de nature ontologique et non de simple degré."
      }
    },
    interetPhilosophique: {
      critiqueInterne: {
        intention: "Démontrer la singularité absolue de la conscience et de l'intelligence fabricatrice humaine.",
        appreciation: "Démonstration rigoureuse appuyée sur l'analyse de l'homo faber et du choix indéfini."
      },
      critiqueExterne: {
        enjeu: "Le fondement de la dignité humaine.",
        enjeuProblematise: "La conscience fonde-t-elle exclusivement la supériorité et la valeur de l'homme ?",
        references: [
          "Descartes (cogito cartésien, animaux-machines sans pensée)",
          "Pascal (le roseau pensant)",
          "Nietzsche (la conscience comme simple épiphénomène secondaire de la vie pulsionnelle)",
          "Freud (le moi détrôné par l'inconscient)"
        ]
      }
    }
  },
  {
    numero: 2,
    auteur: "G.W.F. HEGEL",
    oeuvre: "Esthétique (1835)",
    texteExtrait: "« Les choses de la nature n'existent qu'immédiatement et d'une seule façon, tandis que l'homme, parce qu'il est esprit, a une double existence... Il existe pour soi, se contemple, se pense... théoriquement et par son activité pratique... l'enfant qui jette des pierres dans le torrent admire une œuvre où il bénéficie du spectacle de sa propre activité. »",
    elementsIntroduction: {
      theme: "L'existence de l'homme comparée aux choses de la nature.",
      probleme: "L'homme existe-t-il sur le même mode que les objets de la nature ?",
      these: "L'homme a une double existence (en soi et pour soi) conquise par la contemplation théorique et la transformation pratique du monde extérieur."
    },
    etudeOrdonnee: {
      mouvement1: {
        delimitation: "« Les choses... un être pour soi »",
        analyse: "Distinction ontologique entre l'existence immédiate des choses naturelles et l'être-pour-soi réflexif de l'homme."
      },
      mouvement2: {
        delimitation: "« Cette conscience de soi... sa propre activité »",
        analyse: "Les deux voies d'acquisition de la conscience de soi : le retour réflexif de la pensée (voie théorique) et l'empreinte humaine imprimée sur la matière (voie pratique)."
      }
    },
    interetPhilosophique: {
      critiqueInterne: {
        intention: "Montrer que la conscience de soi n'est pas un donné passif mais une conquête active par le travail et l'esprit.",
        appreciation: "Exemple célèbre de l'enfant et des ricochets sur l'eau illustrant l'extériorisation de l'esprit."
      },
      critiqueExterne: {
        enjeu: "L'essence de l'humanité.",
        enjeuProblematise: "L'homme se résume-t-il à sa conscience réflexive ou est-il tributaire de forces biologiques obscures ?",
        references: [
          "Kant (le pouvoir du 'Je')",
          "Pascal (grandeur dans la pensée)",
          "Freud (le malaise civilisationnel et les pulsions)",
          "Nietzsche (la volonté de puissance contre l'intellectualisme stérile)"
        ]
      }
    }
  },
  {
    numero: 3,
    auteur: "Friedrich NIETZSCHE",
    oeuvre: "Généalogie de la morale",
    texteExtrait: "« L'oubli n’est pas seulement une force d'inertie... c'est bien plutôt un pouvoir actif, une faculté d'enrayement dans le vrai sens du mot... faire silence, faire table rase dans notre conscience... nul bonheur, nulle sérénité ne pourrait exister sans faculté d'oubli. L'homme sans oubli est semblable à un dyspeptique. »",
    elementsIntroduction: {
      theme: "La fonction régulatrice et vitale de l'oubli.",
      probleme: "L'oubli est-il une défaillance négative de la mémoire ou une puissance active salvatrice ?",
      these: "L'oubli est une faculté active et ordonnatrice indispensable à la sérénité psychique et au bonheur de l'instant."
    },
    etudeOrdonnee: {
      mouvement1: {
        delimitation: "L1 à L14 (« L'oubli... l'ordre psychique »)",
        analyse: "Métaphore de la digestion psychique : l'oubli actif comme filtre protecteur pour permettre l'accueil du neuf."
      },
      mouvement2: {
        delimitation: "L14 à L17 (« On en conclura... dyspeptique »)",
        analyse: "L'oubli posé comme condition préalable et nécessaire de toute jouissance, joie et action présente."
      }
    },
    interetPhilosophique: {
      critiqueInterne: {
        intention: "Réhabiliter l'oubli contre l'illusion moralisatrice et doloriste du souvenir perpétuel.",
        appreciation: "Image saisissante du dyspeptique incapable de digérer le passé."
      },
      critiqueExterne: {
        enjeu: "La mémoire, l'action et le bonheur.",
        enjeuProblematise: "L'oubli est-il toujours garant du bonheur, ou le devoir de mémoire est-il un impératif moral et historique ?",
        references: [
          "Freud (oubli motivé par le refoulement des traumatismes, Psychopathologie de la vie quotidienne)",
          "Bergson (mémoire pure et sélection pragmatique pour l'action présente)",
          "Platon (l'oubli comme déchéance de l'âme dans le mythe d'Er, République X)"
        ]
      }
    }
  }
];
