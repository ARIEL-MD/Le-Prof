// ============================================================================
// RECUEIL DES 50 SUJETS DE DISSERTATION PHILOSOPHIQUE TRAITÉS ET CORRIGÉS
// Auteur : John Kennedy OUALI
// Devise : "L'éducation notre dénominateur commun"
// Ouvrage didactique de référence pour les élèves de Terminale (Afrique Francophone & International)
// ============================================================================

export interface PhiloSujetCorrige {
  numero: number;
  enonce: string;
  theme: string;
  notions: string[];
  introduction: {
    accroche: string;
    definitionsEtSens: string;
    problematisation: string;
    questionsDirectrices: string[];
  };
  axesDeveloppement: {
    titreAxe: string;
    arguments: {
      idee: string;
      auteursEtCitations: string;
      explicationEtExemples: string;
    }[];
  }[];
  conclusion: {
    bilan: string;
    reponseNuancee: string;
    ouverture: string;
  };
}

export const PHILO_50_SUJETS_OUALI_CATALOG = [
  "SUJET 1 : Qu'apporte de douter ?",
  "SUJET 2 : La religion est-elle nécessairement en conflit avec la raison ?",
  "SUJET 3 : Opposer science et philosophie, est-ce légitime ?",
  "SUJET 4 : Le questionnement perpétuel peut-il être source de savoir ?",
  "SUJET 5 : Faut-il opposer foi et raison ?",
  "SUJET 6 : Peut-on critiquer la démocratie ?",
  "SUJET 7 : L'État est-il un mal nécessaire ?",
  "SUJET 8 : Ce qui fait l'homme tient plus de la culture que de la nature.",
  "SUJET 9 : « La philosophie se trahit elle-même lorsqu'elle dégénère en dogmatisme » ? Qu'en pensez-vous ?",
  "SUJET 10 : Expliquez et critiquez cette affirmation : « Qui possède le savoir ne philosophie point »",
  "SUJET 11 : L'obéissance aux lois est-elle conciliable à la liberté humaine ?",
  "SUJET 12 : L'homme est-il conscient de tous ses actes ?",
  "SUJET 13 : Quelle est la place de la souffrance dans la connaissance de soi ?",
  "SUJET 14 : La passion rend-elle aveugle ?",
  "SUJET 15 : Y a-t-il des questions auxquelles aucune science ne répond ?",
  "SUJET 16 : « L'art africain est loin d'un monde d'exhibitionniste de la beauté, mais fort heureusement se sert des valeurs esthétiques, en dégageant ses fonctions ». Faites une étude critique.",
  "SUJET 17 : La liberté consiste-t-elle à faire ce qui nous plaît ?",
  "SUJET 18 : Faut-il préférer la liberté au bonheur ?",
  "SUJET 19 : Une société sans religion est-elle possible ?",
  "SUJET 20 : Les théories scientifiques décrivent-elles la réalité ?",
  "SUJET 21 : Faut-il préférer la liberté au bonheur ?",
  "SUJET 22 : Le travail n'est-il qu'une contrainte ?",
  "SUJET 23 : Croire en la science, est-ce une forme de religion ?",
  "SUJET 24 : La connaissance de soi est-elle plus facile que la connaissance des choses ?",
  "SUJET 25 : La liberté consiste-t-elle à faire ce qui nous plaît ?",
  "SUJET 26 : La science se limite-t-elle à constater les faits ?",
  "SUJET 27 : La technique peut-elle transformer la morale ?",
  "SUJET 28 : Grâce aux progrès de la science et de la technique, l'homme est devenu « maître et possesseur de la nature ». Pensez-vous qu'il en soit plus heureux ?",
  "SUJET 29 : Les pratiques artistiques transforment-elles le monde ?",
  "SUJET 30 : Revient-il à l'État de décider de ce qui est juste ?",
  "SUJET 31 : La foi est-elle l'ennemi de la preuve ?",
  "SUJET 32 : Le temps efface-t-il l'histoire ?",
  "SUJET 33 : La politique peut-elle être un métier ?",
  "SUJET 34 : Discuter est-ce renoncer à la violence ?",
  "SUJET 35 : La passion est-elle ennemie du bonheur ?",
  "SUJET 36 : L'inconscient échappe-t-il à toute forme de connaissance ?",
  "SUJET 37 : Sommes-nous responsables de l'avenir ?",
  "SUJET 38 : Le langage n'est-il qu'un outil ?",
  "SUJET 39 : Pouvons-nous affirmer que le temps nous appartient ?",
  "SUJET 40 : La conscience fait-elle la grandeur ou la misère de l'homme ?",
  "SUJET 41 : Être libre, est-ce faire ce que l'on veut ?",
  "SUJET 42 : La conscience peut-elle nous tromper ?",
  "SUJET 43 : La liberté comporte-t-elle des degrés ?",
  "SUJET 44 : Autrui m'est-il toujours étranger ?",
  "SUJET 45 : Le bonheur nous échappe-t-il inévitablement ?",
  "SUJET 46 : Peut-on penser une société sans État ?",
  "SUJET 47 : Faut-il rester fidèle ?",
  "SUJET 48 : Existe-t-il des violences légitimes ?",
  "SUJET 49 : Sommes-nous prisonniers de notre corps ?",
  "SUJET 50 : Discuter est-ce renoncer à la violence ?"
];

export const PHILO_CORRIGES_MAJEURS_OUALI: PhiloSujetCorrige[] = [
  {
    numero: 1,
    enonce: "Qu'apporte de douter ?",
    theme: "La vérité, la méthode et la liberté de pensée",
    notions: ["Doute", "Vérité", "Raison", "Dogmatisme", "Scepticisme"],
    introduction: {
      accroche: "Le doute est l'état naturel de l'esprit qui s'interroge devant l'incertitude d'un fait ou la suspension du jugement entre deux thèses contradictoires.",
      definitionsEtSens: "Douter, c'est refuser l'assentiment aveugle et remettre en question les préjugés hérités de l'enfance et de l'éducation (Descartes).",
      problematisation: "Le doute est-il un instrument libérateur de découverte intellectuelle ou conduit-il à une paralysie stérile de la pensée et de l'action ?",
      questionsDirectrices: [
        "En quoi le doute méthodique constitue-t-il le moteur irremplaçable de la certitude rationnelle ?",
        "Toutefois, le doute sceptique radical ne menace-t-il pas de bloquer toute décision pratique et toute science ?",
        "Dans quelle mesure le doute, entendu comme refus de croire (Alain), est-il le sel de l'esprit et la condition de l'action lucide ?"
      ]
    },
    axesDeveloppement: [
      {
        titreAxe: "Axe 1 : Le doute méthodique comme instrument fondateur de la certitude",
        arguments: [
          {
            idee: "Le doute cartésien permet de déraciner les préjugés et d'établir la première vérité indubitable.",
            auteursEtCitations: "Descartes (Discours de la méthode, 1637 ; Principes de la philosophie, I, 1) : « Il fallait que je rejetasse comme absolument faux tout ce dont je pouvais imaginer le moindre doute » ; « Cogito ergo sum ».",
            explicationEtExemples: "L'inspection de l'esprit suspend le jugement pour n'accorder sa créance qu'à l'évidence claire et distincte, affirmant l'autonomie souveraine de la raison."
          }
        ]
      },
      {
        titreAxe: "Axe 2 : Les périls du doute sceptique généralisé (paralysie et régression)",
        arguments: [
          {
            idee: "Le pyrrhonisme et le scepticisme radical détruisent tout point d'appui et rendent l'action impossible.",
            auteursEtCitations: "Blaise Pascal (Pensées) : le combat contre les certitudes du cœur ; Pyrrhon d'Élis.",
            explicationEtExemples: "Pour agir, il faut nécessairement trancher et tenir pour vrai ce que l'on perçoit de la situation ; le doute infini mène à l'indifférence morbide."
          }
        ]
      },
      {
        titreAxe: "Axe 3 : Le doute critique comme sel de l'esprit et vigilance dans l'action",
        arguments: [
          {
            idee: "Douter dans le détail de l'action permet de se corriger continuellement et préserve du fanatisme.",
            auteursEtCitations: "Alain (Propos) : « Le doute est le sel de l'esprit (...) penser c'est n'affirmer que provisoirement ce qu'on avance ».",
            explicationEtExemples: "Le savant travaille avec des hypothèses révisables et l'homme d'État lucide sait réorienter sa politique dès qu'il constate une erreur."
          }
        ]
      }
    ],
    conclusion: {
      bilan: "Le doute apporte la condition d'une pensée émancipée dès lors qu'il s'exerce avec méthode sans s'ériger en système absolu.",
      reponseNuancee: "Le doute méthodique délivre du dogmatisme aveugle sans paralyser l'action vivante.",
      ouverture: "Le doute philosophique reste la boussole suprême de la liberté démocratique."
    }
  },
  {
    numero: 7,
    enonce: "L'État est-il un mal nécessaire ?",
    theme: "La société, l'État, la morale et la liberté",
    notions: ["État", "Violence", "Droit", "Justice", "Liberté"],
    introduction: {
      accroche: "L'histoire humaine est traversée par l'interrogation récurrente sur le rôle politique et social de l'État comme autorité souveraine.",
      definitionsEtSens: "L'État est l'institutionnalisation du pouvoir politique exerçant son autorité sur un territoire donné par des lois et des appareils administratifs.",
      problematisation: "L'État n'est-il qu'un monstre oppressif dont les hommes ne peuvent se passer, ou bien le garant fondamental de la liberté et du droit ?",
      questionsDirectrices: [
        "En quoi l'État se manifeste-t-il comme un 'mal' par ses prérogatives coercitives et son oppression de classe ?",
        "Pourquoi est-il pourtant 'nécessaire' pour conjurer l'état de guerre permanente ?",
        "Comment concevoir un État de droit légitimé par la volonté générale où l'obéissance aux lois soit liberté ?"
      ]
    },
    axesDeveloppement: [
      {
        titreAxe: "Axe 1 : L'État perçu comme un mal aliénant et liberticide",
        arguments: [
          {
            idee: "L'État monopolise la violence répressive et sert les intérêts de la classe dominante.",
            auteursEtCitations: "Karl Marx & Friedrich Engels (L'Idéologie allemande, Le Manifeste du parti communiste) : instrument d'oppression ; Bakounine et Proudhon : « Le gouvernement de l'homme par l'homme, c'est de la servitude ».",
            explicationEtExemples: "Althusser théorise les appareils idéologiques et répressifs d'État (police, justice, prison)."
          },
          {
            idee: "L'État ment au peuple en prétendant incarner l'intérêt général.",
            auteursEtCitations: "Nietzsche (Ainsi parlait Zarathoustra) : « L'État, c'est le plus froid de tous les monstres froids (...) moi l'État, je suis le peuple ».",
            explicationEtExemples: "Paul Valéry : « Si l'État est fort, il nous écrase ; s'il est faible, nous périssons »."
          }
        ]
      },
      {
        titreAxe: "Axe 2 : La nécessité vitale de l'État contre l'anarchie destructrice",
        arguments: [
          {
            idee: "Sans autorité étatique, les hommes régressent dans la violence de l'état de nature.",
            auteursEtCitations: "Thomas Hobbes (Léviathan) : « L'homme est un loup pour l'homme » ; Bossuet ; Ahmadou Kourouma (Allah n'est pas obligé) sur le chaos libérien sans État.",
            explicationEtExemples: "Max Weber démontre que l'État détient le monopole de la violence physique légitime pour pacifier la cité."
          }
        ]
      },
      {
        titreAxe: "Axe 3 : L'État républicain comme réalisation de la liberté civile",
        arguments: [
          {
            idee: "Dans l'État de droit fondé sur la volonté générale, la loi protège le citoyen et garantit son épanouissement.",
            auteursEtCitations: "Spinoza (Traité théologico-politique) : « La fin de l'État est en réalité la liberté » ; Rousseau (Du contrat social) : « L'obéissance à la loi qu'on s'est prescrite est liberté » ; Hegel.",
            explicationEtExemples: "L'État n'est pas un mal dès lors qu'il est soumis au contrôle démocratique et à la séparation des pouvoirs (Montesquieu)."
          }
        ]
      }
    ],
    conclusion: {
      bilan: "L'État apparaît contraignant au départ mais s'avère la condition indispensable pour échapper à la loi du plus fort.",
      reponseNuancee: "L'État n'est pas un mal en soi ; il ne devient maléfique que lorsqu'il dévie en despotisme totalitaire.",
      ouverture: "La démocratie constitutionnelle permet précisément de limiter l'État par le droit."
    }
  },
  {
    numero: 16,
    enonce: "« L'art africain est loin d'un monde d'exhibitionniste de la beauté, mais fort heureusement se sert des valeurs esthétiques, en dégageant ses fonctions ». Faites une étude critique.",
    theme: "L'art, la culture et l'esthétique africaine",
    notions: ["Art", "Esthétique", "Culture", "Fonctionnalité", "Tradition africaine"],
    introduction: {
      accroche: "L'histoire des civilisations témoigne de la fécondité artistique du continent noir, longtemps méconnue par le regard occidental ethnocentrique.",
      definitionsEtSens: "L'art africain traditionnel ne sépare pas le beau de la vie : il unit forme esthétique et fonctions communautaires vivantes.",
      problematisation: "L'art africain se réduit-il à une finalité utilitaire sans gratuité esthétique, ou réalise-t-il une synthèse originale où le beau est indissociable de l'efficacité sacrée et sociale ?",
      questionsDirectrices: [
        "Quelles sont les fonctions vitales (ludique, magico-religieuse, politique) de l'art négro-africain ?",
        "En quoi cette subordination de la beauté à l'utile contredit-elle la thèse occidentale de 'l'art pour l'art' ?",
        "Face à la mondialisation contemporaine, comment l'art africain affirme-t-il son universalité créatrice ?"
      ]
    },
    axesDeveloppement: [
      {
        titreAxe: "Axe 1 : Les fonctions intégrées de l'art traditionnel africain",
        arguments: [
          {
            idee: "Les sculptures, masques (Nimba, Koden) et bronzes (Nok, Ifé) exercent une fonction sacrée, pédagogique et thérapeutique.",
            auteursEtCitations: "Adage africain : « En Afrique, est beau ce qui sert » ; masques rituels et musique thérapeutique.",
            explicationEtExemples: "L'œuvre d'art mobilise la communauté entière (chants, danses collectives) sans distinction entre artiste individuel et spectateur passif."
          }
        ]
      },
      {
        titreAxe: "Axe 2 : Dépassement de la doctrine désintéressée de 'l'art pour l'art'",
        arguments: [
          {
            idee: "Pour Kant, le beau est une 'finalité sans fin' ; or en Afrique, l'art a une finalité communautaire explicite.",
            auteursEtCitations: "Emmanuel Kant (Critique de la faculté de juger) vs Joseph Ki-Zerbo : « Confort sans effort n'est que ruine de l'âme ».",
            explicationEtExemples: "L'esthétique africaine ne s'arrête pas à la contemplation passive d'un objet en musée, mais participe à l'harmonie du cosmos."
          }
        ]
      },
      {
        titreAxe: "Axe 3 : L'universalité et l'engagement contemporain de l'artiste africain",
        arguments: [
          {
            idee: "L'art africain contemporain conserve sa puissance identitaire tout en s'ouvrant aux dialogues mondiaux.",
            auteursEtCitations: "Léopold Sédar Senghor (Enracinement et ouverture) ; Youssouf N'Dour : « L'art n'a pas de frontière ».",
            explicationEtExemples: "Face aux médias numériques, l'artiste réinterprète son patrimoine pour dénoncer les injustices et célébrer l'émancipation du continent."
          }
        ]
      }
    ],
    conclusion: {
      bilan: "L'art africain est la preuve vivante qu'une œuvre peut atteindre le sommet de la beauté plastique tout en vibrant d'une utilité sacrée et sociale.",
      reponseNuancee: "Il ne s'agit ni de pur utilitarisme prosaïque, ni de pur formalisme vain : c'est un art total au service de l'homme.",
      ouverture: "Cette conception holistique inspire aujourd'hui l'art contemporain mondial en quête de sens."
    }
  },
  {
    numero: 34,
    enonce: "Discuter est-ce renoncer à la violence ?",
    theme: "Le langage, la violence, la justice et la démocratie",
    notions: ["Langage", "Dialogue", "Violence", "Justice", "Éthique de la discussion"],
    introduction: {
      accroche: "Face aux crises et tensions contemporaines, le dialogue est unanimement proclamé comme l'unique alternative civilisée aux conflits sanglants.",
      definitionsEtSens: "Discuter suppose la rencontre de deux logos, la suspension de la force brute et la volonté de convaincre par des arguments rationnels.",
      problematisation: "L'acte de discuter implique-t-il nécessairement l'éradication de la violence, ou peut-il abriter une violence symbolique et rhétorique plus sournoise ?",
      questionsDirectrices: [
        "En quoi l'entrée dans la discussion constitue-t-elle un renoncement effectif à la brutalité physique ?",
        "Toutefois, la discussion ne peut-elle pas être instrumentalisée comme arme de domination ou masque de mauvaise foi ?",
        "Quelles sont les conditions éthiques d'une véritable discussion pacifiante (Habermas, Ricœur) ?"
      ]
    },
    axesDeveloppement: [
      {
        titreAxe: "Axe 1 : Le dialogue comme négation de la violence physique",
        arguments: [
          {
            idee: "L'homme est un être de parole ; substituer les arguments aux coups marque le saut dans la civilisation.",
            auteursEtCitations: "Aristote (L'homme animal doué de langage dans La Politique) ; Pascal : « Tous les efforts de la violence ne peuvent affaiblir la vérité ».",
            explicationEtExemples: "Le débat parlementaire et la justice contradictoire remplacent la vengeance privée et la loi du talion."
          }
        ]
      },
      {
        titreAxe: "Axe 2 : Les violences dissimulées de la discussion (rhétorique et différend)",
        arguments: [
          {
            idee: "Le langage peut devenir une arme de manipulation sophistique et de violence symbolique.",
            auteursEtCitations: "Platon (Gorgias) sur la rhétorique des sophistes ; Jean-François Lyotard (La Condition postmoderne, Le Différend).",
            explicationEtExemples: "Quand les interlocuteurs refusent d'entendre les arguments de l'autre ou imposent des règles inégales, discuter aggrave le conflit."
          }
        ]
      },
      {
        titreAxe: "Axe 3 : L'éthique de la discussion et la justice comme conditions du dialogue réel",
        arguments: [
          {
            idee: "Discuter n'éradique la violence que si les participants reconnaissent l'égale dignité de l'autre et acceptent de réduire les injustices réelles.",
            auteursEtCitations: "Jürgen Habermas (De l'éthique de la discussion) ; John Rawls (Théorie de la justice) ; Aristote sur la philia (l'amitié civique).",
            explicationEtExemples: "Un dialogue sincère exige la reconnaissance mutuelle et la volonté de parvenir à un consensus rationnel."
          }
        ]
      }
    ],
    conclusion: {
      bilan: "Discuter n'est pas un automatisme magique mais un devoir éthique exigeant une ascèse contre ses propres passions violentes.",
      reponseNuancee: "Le dialogue authentique désamorce la violence uniquement lorsqu'il est nourri par la justice et le respect réciproque.",
      ouverture: "Dans nos sociétés pluriculturelles, l'apprentissage du débat critique est le rempart suprême de la paix."
    }
  }
];
