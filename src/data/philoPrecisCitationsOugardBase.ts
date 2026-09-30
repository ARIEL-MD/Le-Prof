/**
 * BASE DE DONNÉES PÉDAGOGIQUE — PRÉCIS DE CITATIONS PHILOSOPHIQUES (OUGARD AIMÉ)
 * Édition : MÉDITON — Collection "PRÉCIS"
 * Ministère de l'Éducation Nationale et de la Formation Professionnelle — République de Côte d'Ivoire
 * Niveau : Terminale (Toutes Séries) & Second Cycle
 * 
 * Contient :
 * 1. 25 Thèmes majeurs du programme officiel avec pour chaque thème :
 *    - Définition conceptuelle de la notion
 *    - Citations à aspect positif (thèse / valorisation) avec auteurs, œuvres et explications de sens
 *    - Citations à aspect critique (antithèse / limites) avec auteurs, œuvres et explications de sens
 * 2. Dictionnaire de Philosophie adapté à l'étude parcellaire (termes essentiels de A à V pour l'analyse des sujets).
 */

export interface CitationPhilosophiqueItem {
  citation: string;
  auteur: string;
  titreOuQualite?: string;
  oeuvre?: string;
  explication: string;
}

export interface ThemeCitationsPhilo {
  id: string;
  nomTheme: string;
  definition: string;
  citationsAspectPositif: CitationPhilosophiqueItem[];
  citationsAspectCritique: CitationPhilosophiqueItem[];
}

export interface TermeLexiqueParcellaire {
  terme: string;
  definition: string;
}

export const PRECIS_CITATIONS_OUGARD_THEMES: ThemeCitationsPhilo[] = [
  {
    id: "conscience",
    nomTheme: "La Conscience",
    definition: "Intuition immédiate que la pensée a d'elle-même ou d'un objet extérieur. Au sens moral, sentiment immédiat ou jugement réfléchi sur la valeur des actes humains. Faculté de connaître, de juger et de distinguer le bien du mal.",
    citationsAspectPositif: [
      {
        citation: "Connais-toi toi-même",
        auteur: "Socrate",
        titreOuQualite: "Père de la philosophie véritable",
        explication: "L'esprit doit descendre en lui-même pour dégager les vérités qui sommeillent en lui. Chaque être humain doit savoir ce qu'il fait et pourquoi il le fait."
      },
      {
        citation: "Au-dessus des étangs, au-dessus des vallées [...] mon esprit, tu te meus avec agilité",
        auteur: "Charles Baudelaire",
        oeuvre: "Élévation (Les Fleurs du Mal)",
        explication: "Grâce à la faculté de penser, l'homme regarde au-delà du monde sensible, vers le monde intelligible. La pensée élève l'homme au-dessus de l'animalité."
      },
      {
        citation: "Une vie sans examen n’est pas vivable pour l’homme",
        auteur: "Platon",
        oeuvre: "Apologie de Socrate 38a",
        explication: "La philosophie est une réflexion morale invitant à se détourner de l'inessentiel et des fausses valeurs."
      },
      {
        citation: "Il n’y a point de pensée en nous sinon par l’unique sujet, je",
        auteur: "Alain (Émile-Auguste Chartier)",
        oeuvre: "Éléments de philosophie",
        explication: "C'est une faute de grossir le terme d'inconscient en monstre intérieur. La faculté de penser est le propre de l'homme conscient."
      },
      {
        citation: "Le bon sens ou raison est la chose du monde la mieux partagée",
        auteur: "René Descartes",
        oeuvre: "Discours de la méthode",
        explication: "La conscience rationnelle est naturelle et universellement partagée chez l'homme."
      },
      {
        citation: "Je pense donc je suis (cogito ergo sum)",
        auteur: "René Descartes",
        oeuvre: "Discours de la méthode",
        explication: "La conscience est la réalité indubitable fondant l'existence humaine. L'homme n'existe véritablement que dans la mesure où il est conscient de son existence pensante."
      },
      {
        citation: "L’homme n’est qu’un roseau, le plus faible de la nature ; mais c’est un roseau pensant",
        auteur: "Blaise Pascal",
        oeuvre: "Pensées",
        explication: "La conscience de sa propre misère hisse l'homme au-dessus de la création. Investi d'une grandeur paradoxale née de la compréhension de sa petitesse."
      },
      {
        citation: "Toute conscience est conscience de quelque chose",
        auteur: "Edmund Husserl",
        oeuvre: "Méditations cartésiennes",
        explication: "La conscience est intentionnelle : elle se transcende toujours vers un objet extérieur."
      },
      {
        citation: "La conscience nous fait aimer le bien que la raison lui fait connaître",
        auteur: "Jean-Jacques Rousseau",
        oeuvre: "Émile ou De l'éducation",
        explication: "La conscience morale confère à l'homme la volonté agissante d'accomplir le devoir."
      },
      {
        citation: "Ce qui élève l’homme par rapport à l’animal, c’est la conscience qu’il a d’être un animal… Du fait qu’il sait qu’il est animal, il cesse de l’être",
        auteur: "G.W.F. Hegel",
        explication: "L'homme se connaît connaissant, capable de se prendre pour objet d'analyse et de se regarder vivre."
      }
    ],
    citationsAspectCritique: [
      {
        citation: "Dans le psychisme, l’inconscient est un élément primaire et fondamental",
        auteur: "Arthur Schopenhauer",
        oeuvre: "Le Monde comme volonté et comme représentation",
        explication: "L'inconscient constitue la part majeure et déterminante du psychisme humain par rapport à la surface consciente."
      },
      {
        citation: "La conscience n’est pas tout notre psychisme. Elle en est la part intéressée à l’action au présent. La part laissée dans l’ombre peut être considérée comme l’inconscient",
        auteur: "Henri Bergson",
        explication: "L'inconscient conserve le passé alors que la conscience ne sélectionne que ce qui sert l'action présente."
      },
      {
        citation: "La conscience de soi-même n’est donc pas encore une connaissance de soi-même",
        auteur: "Emmanuel Kant",
        oeuvre: "Critique de la raison pure",
        explication: "Avoir conscience d'exister ('que je suis') n'équivaut pas à connaître son essence ('ce que je suis')."
      },
      {
        citation: "On ne peut être à la fenêtre et se voir passer dans la rue",
        auteur: "Auguste Comte",
        oeuvre: "Cours de philosophie positive",
        explication: "L'introspection pure est impossible car le sujet observant et l'objet observé se confondent."
      },
      {
        citation: "C’est notre conscience qui nous fait croire que l’homme est le centre de l’univers",
        auteur: "Baruch Spinoza",
        oeuvre: "Éthique",
        explication: "La conscience produit l'illusion finaliste et anthropocentrique."
      },
      {
        citation: "La conscience est un épiphénomène, une réalité de moindre valeur",
        auteur: "Friedrich Nietzsche",
        oeuvre: "La Volonté de puissance",
        explication: "La conscience est superficielle face à la vitalité pulsionnelle de l'organisme corporel."
      },
      {
        citation: "Le moi n’est pas seulement maître dans sa propre maison",
        auteur: "Sigmund Freud",
        oeuvre: "Introduction à la psychanalyse",
        explication: "Découverte de l'inconscient : troisième blessure narcissique de l'humanité après Copernic et Darwin."
      },
      {
        citation: "La conscience règne mais ne gouverne pas",
        auteur: "Paul Valéry",
        oeuvre: "Mauvaises pensées",
        explication: "La conscience n'a qu'une autorité de parade face aux déterminismes obscurs de la vie intérieure."
      },
      {
        citation: "Ce n’est pas la conscience des hommes qui détermine leur être, c’est inversement leur être social qui détermine leur conscience",
        auteur: "Karl Marx",
        oeuvre: "Contribution à la critique de l'économie politique",
        explication: "Les conditions matérielles et économiques produisent les formes de conscience."
      }
    ]
  },
  {
    id: "inconscient",
    nomTheme: "L'Inconscient",
    definition: "Ensemble des contenus psychiques (pulsions, désirs refoulés) échappant au contrôle de la conscience tout en demeurant actifs.",
    citationsAspectPositif: [
      {
        citation: "Pour bien comprendre la vie psychique, il est indispensable de cesser de surestimer la conscience [...] nous possédons de multiples preuves de l'existence de l'inconscient",
        auteur: "Sigmund Freud",
        oeuvre: "Métapsychologie",
        explication: "L'inconscient offre la clé d'explication des actes manqués, rêves, symptômes névrotiques et lapsus."
      },
      {
        citation: "Le moi n’est pas maître dans sa propre maison",
        auteur: "Sigmund Freud",
        oeuvre: "Essais de psychanalyse appliquée",
        explication: "Révèle que l'homme est habité par des forces psychiques inconscientes déterminantes."
      },
      {
        citation: "L’homme n’est point cet être débonnaire au cœur assoiffé d’amour [...] il compte dans ses données instinctives une bonne somme d'agressivité",
        auteur: "Sigmund Freud",
        oeuvre: "Malaise dans la civilisation",
        explication: "L'agressivité inconsciente fait partie intégrante de la structure pulsionnelle humaine."
      },
      {
        citation: "Homo homini lupus (L'homme est un loup pour l'homme)",
        auteur: "Thomas Hobbes",
        oeuvre: "Léviathan",
        explication: "Les passions animales et agressives sommeillent au fond de la nature humaine."
      }
    ],
    citationsAspectCritique: [
      {
        citation: "La plus grave des erreurs est de croire que l’inconscient est un autre moi",
        auteur: "Alain",
        oeuvre: "Éléments de philosophie",
        explication: "L'inconscient n'est pas un double fantasmagorique ; il ne faut pas déresponsabiliser le sujet pensant."
      },
      {
        citation: "L’homme est responsable de tout ce qu’il fait",
        auteur: "Jean-Paul Sartre",
        oeuvre: "L'Existentialisme est un humanisme",
        explication: "L'inconscient freudien sert d'alibi et de mauvaise foi pour fuir sa propre responsabilité existentielle."
      },
      {
        citation: "Si je suis détenteur d’une partie seulement de moi-même, je ne suis responsable que de celle-ci",
        auteur: "Alain",
        oeuvre: "Éléments de philosophie",
        explication: "Admettre l'inconscient dissout la responsabilité morale du citoyen."
      },
      {
        citation: "Admettre l’inconscient, c’est retirer la cohérence au 'je'",
        auteur: "Pierre Janet",
        oeuvre: "L'Automatisme psychologique",
        explication: "L'inconscient sape l'unité de la personnalité volontaire et libre."
      }
    ]
  },
  {
    id: "memoire",
    nomTheme: "La Mémoire et l'Oubli",
    definition: "Faculté mentale permettant de rappeler à la conscience un contenu ou une représentation l'ayant affectée antérieurement.",
    citationsAspectPositif: [
      {
        citation: "Conscience signifie d’abord mémoire",
        auteur: "Henri Bergson",
        oeuvre: "L'Énergie spirituelle",
        explication: "Le sujet conscient relie le passé au présent par le fil continu de la remémoration."
      },
      {
        citation: "Tout notre passé se conserve",
        auteur: "Henri Bergson",
        oeuvre: "Matière et mémoire",
        explication: "La mémoire pure conserve l'intégralité du vécu sans perte définitive."
      },
      {
        citation: "Il est possible de vivre presque sans se souvenir et de vivre heureux [...] mais il est impossible de vivre sans oublier",
        auteur: "Friedrich Nietzsche",
        oeuvre: "Considérations inactuelles II",
        explication: "L'oubli est une force plastique active indispensable à l'action présente et à la santé vitale."
      },
      {
        citation: "Le souvenir est thérapeutique et source de liberté",
        auteur: "Sigmund Freud",
        oeuvre: "Introduction à la psychanalyse",
        explication: "La prise de conscience du souvenir refoulé guérit le sujet des traumatismes anciens."
      },
      {
        citation: "L’enfant est le père de l’homme",
        auteur: "William Wordsworth",
        oeuvre: "Rainbow",
        explication: "Le passé infantile façonne les fondements de la personnalité adulte."
      },
      {
        citation: "Se souvenir de tout serait aussi fâcheux que ne se souvenir de rien",
        auteur: "William James",
        oeuvre: "Principes de psychologie",
        explication: "La mémoire doit être sélective pour ne pas saturer l'esprit."
      },
      {
        citation: "La mémoire est le réservoir par lequel l’homme conserve toutes ses idées",
        auteur: "John Locke",
        explication: "Base de la continuité des représentations empiriques de l'entendement."
      }
    ],
    citationsAspectCritique: [
      {
        citation: "Il ne s’agit pas de savoir comment les souvenirs se détruisent mais pourquoi ils ne peuvent pas être évoqués",
        auteur: "Sigmund Freud",
        oeuvre: "Introduction à la psychanalyse",
        explication: "L'oubli est un refoulement actif opéré par le surmoi et non une défaillance mécanique."
      }
    ]
  },
  {
    id: "societe",
    nomTheme: "La Société et la Sociabilité",
    definition: "Ensemble d'individus vivant en communauté organisée par des institutions et des règles de fonctionnement explicites.",
    citationsAspectPositif: [
      {
        citation: "L’homme est par nature un animal politique",
        auteur: "Aristote",
        oeuvre: "Politique",
        explication: "La cité est le cadre naturel et constitutif de l'humanité de l'homme."
      },
      {
        citation: "Quiconque ne peut vivre en société ou n’en a pas besoin est une bête ou un dieu",
        auteur: "Aristote",
        oeuvre: "Politique",
        explication: "L'homme isolé de tout lien social déchoit dans la bestialité ou relève du divin."
      },
      {
        citation: "C’est seulement dans l’État que l’homme a une existence conforme à la raison",
        auteur: "G.W.F. Hegel",
        oeuvre: "La Raison dans l'histoire",
        explication: "L'État élève la vie sociale au rang de réalité rationnelle et éthique."
      },
      {
        citation: "L’enfer c’est l’absence des autres",
        auteur: "Roger Garaudy",
        oeuvre: "Biographie du XXe siècle",
        explication: "La solitude absolue constitue le pire supplice et la négation du développement humain."
      },
      {
        citation: "Hors de la société civile, nous n’avons pour nous protéger que nos propres forces ; dans la société civile, nous avons celles de tous",
        auteur: "Thomas Hobbes",
        oeuvre: "Le Citoyen",
        explication: "La solidarité sociale constitue la meilleure protection contre l'insécurité."
      },
      {
        citation: "Avant la rencontre d’autrui et du groupe, l’homme n’est rien que des virtualités aussi légères qu’une transparente vapeur",
        auteur: "Lucien Malson",
        oeuvre: "Les Enfants sauvages",
        explication: "Sans le milieu social, l'homme ne peut développer ni langage, ni pensée, ni conscience morale."
      },
      {
        citation: "Quand notre conscience parle, c’est la société qui parle en nous",
        auteur: "Émile Durkheim",
        oeuvre: "L'Éducation morale",
        explication: "La société est la source normative de nos impératifs moraux intériorisés."
      }
    ],
    citationsAspectCritique: [
      {
        citation: "L’enfer, c’est les autres",
        auteur: "Jean-Paul Sartre",
        oeuvre: "Huis clos",
        explication: "Le regard d'autrui fige, chosifie et aliène ma liberté dans la rivalité des consciences."
      },
      {
        citation: "Sitôt que les hommes sont en société… l’état de guerre commence",
        auteur: "Montesquieu",
        oeuvre: "De l'esprit des lois",
        explication: "La vie collective éveille les rivalités de puissance et de domination entre groupes."
      },
      {
        citation: "La nature a fait l’homme heureux et bon, mais la société le déprave",
        auteur: "Jean-Jacques Rousseau",
        oeuvre: "Rousseau juge de Jean-Jacques",
        explication: "L'état social artificiel pervertit la bonté originelle par l'amour-propre et la convoitise."
      },
      {
        citation: "L’homme est un animal social qui déteste ses semblables",
        auteur: "Eugène Delacroix",
        explication: "Ambivalence constante entre le besoin de vivre ensemble et le rejet mutuel."
      },
      {
        citation: "L’histoire de toute société jusqu’à nos jours n’a été que l’histoire de la lutte des classes",
        auteur: "Karl Marx & Friedrich Engels",
        oeuvre: "Manifeste du parti communiste",
        explication: "La société n'est pas une harmonie mais un espace d'exploitation des prolétaires par la bourgeoisie."
      }
    ]
  },
  {
    id: "violence",
    nomTheme: "La Violence",
    definition: "Tout acte ou comportement portant atteinte à l'intégrité physique, morale, psychologique ou intellectuelle d'autrui. Contrainte exercée par force ou intimidation.",
    citationsAspectPositif: [
      {
        citation: "La violence joue encore dans l’histoire un rôle révolutionnaire",
        auteur: "Karl Marx",
        oeuvre: "Le Manifeste du parti communiste",
        explication: "La violence insurrectionnelle brise les chaînes de l'exploitation économique."
      },
      {
        citation: "C’est dans les grèves que le prolétariat affirme son existence",
        auteur: "Georges Sorel",
        oeuvre: "Réflexions sur la violence",
        explication: "La violence du prolétariat est un moyen pur de lutte pour sa libération."
      },
      {
        citation: "Ce n’est pas la violence qui restaure, mais la violence qui ruine, qu’il faut condamner",
        auteur: "Nicolas Machiavel",
        oeuvre: "Le Prince / Discours sur la première décade de Tite-Live",
        explication: "La violence fondatrice et pacificatrice qui rétablit l'État est légitime face au chaos."
      },
      {
        citation: "La justice sans la force est impuissante",
        auteur: "Blaise Pascal",
        oeuvre: "Pensées",
        explication: "Le droit doit pouvoir contraindre pour se faire respecter des méchants."
      },
      {
        citation: "L’État revendique avec succès le monopole de la violence physique légitime",
        auteur: "Max Weber",
        oeuvre: "Le Savant et le Politique",
        explication: "L'État neutralise les violences privées en se réservant le droit légal de contrainte."
      },
      {
        citation: "Là où il n’y a le choix qu’entre la lâcheté et la violence, je conseillerais la violence",
        auteur: "Mohandas Gandhi",
        oeuvre: "Lettre à Misrahi",
        explication: "Entre deux maux, le refus de la soumission lâche prime sur l'inaction complice."
      }
    ],
    citationsAspectCritique: [
      {
        citation: "La plus grande force dont puisse disposer l’humanité, c’est la non-violence",
        auteur: "Mohandas Gandhi",
        explication: "L'ahimsa et la résistance pacifique constituent la véritable puissance morale victorieuse."
      },
      {
        citation: "La discipline transforme l’animalité en humanité",
        auteur: "Emmanuel Kant",
        oeuvre: "Traité de pédagogie",
        explication: "L'éducation et la règle morale canalisent les pulsions violentes naturelles."
      },
      {
        citation: "La violence a coutume d’engendrer la violence",
        auteur: "Eschyle",
        oeuvre: "Agamemnon",
        explication: "La violence alimente un cercle vicieux sans fin de vengeances réciproques."
      },
      {
        citation: "La violence est le mal absolu",
        auteur: "Karl Marx",
        oeuvre: "Anti-Dühring",
        explication: "En soi, la brutalité détruit les fondements du bonheur humain."
      }
    ]
  },
  {
    id: "autrui",
    nomTheme: "Autrui et l'Altérité",
    definition: "Mon prochain, mon semblable. Mon alter ego : un autre moi-même qui n'est pas moi.",
    citationsAspectPositif: [
      {
        citation: "Si tu diffères de moi, loin de me léser, tu m’enrichis",
        auteur: "Antoine de Saint-Exupéry",
        oeuvre: "Terre des hommes",
        explication: "La différence de l'autre est une source d'élévation et d'apprentissage mutuel."
      },
      {
        citation: "Le poussin qui reste à côté de sa mère reçoit la cuisse de la sauterelle",
        auteur: "Sagesse Akan",
        oeuvre: "Proverbe ivoirien",
        explication: "La proximité et la solidarité communautaire assurent la subsistance et la protection."
      },
      {
        citation: "Autrui est le médiateur indispensable entre moi et moi-même",
        auteur: "Jean-Paul Sartre",
        oeuvre: "L'Être et le Néant",
        explication: "J'ai besoin de la reconnaissance d'autrui pour prendre conscience de ma propre existence."
      },
      {
        citation: "L’homme ne peut devenir homme que par l’éducation",
        auteur: "Emmanuel Kant",
        oeuvre: "Traité de pédagogie",
        explication: "C'est autrui et l'institution éducative qui accomplissent l'humanisation du sujet."
      }
    ],
    citationsAspectCritique: [
      {
        citation: "La honte est liée à la présence immédiate et brûlante d’autrui",
        auteur: "Jean-Paul Sartre",
        oeuvre: "L'Être et le Néant",
        explication: "Le regard jugeant d'autrui m'objective et me fait éprouver ma vulnérabilité."
      },
      {
        citation: "Toute conscience se pose en s’opposant aux autres",
        auteur: "G.W.F. Hegel",
        oeuvre: "Phénoménologie de l'esprit",
        explication: "La dialectique du maître et de l'esclave montre que la reconnaissance s'obtient au prix d'un combat."
      },
      {
        citation: "Qui n’aime pas la solitude n’aime pas la liberté, car on n’est libre qu’en étant seul",
        auteur: "Arthur Schopenhauer",
        oeuvre: "Aphorismes sur la sagesse dans la vie",
        explication: "Les relations sociales imposent concessions et hypocrisie."
      },
      {
        citation: "Si pour te faire sourire, je t’aborde avec une mine joyeuse, c’est que j’ai intérêt à ton sourire",
        auteur: "Max Stirner",
        oeuvre: "L'Unique et sa propriété",
        explication: "L'altérité est souvent instrumentalisée par l'égoïsme individuel."
      }
    ]
  },
  {
    id: "etat_justice",
    nomTheme: "L'État et la Justice",
    definition: "Société organisée dotée de pouvoirs politiques, administratifs et juridiques sur un territoire. La justice est l'équité, l'attribution à chacun de ce qui lui revient selon le droit.",
    citationsAspectPositif: [
      {
        citation: "La liberté consiste à ne dépendre que des lois",
        auteur: "Montesquieu",
        oeuvre: "De l'esprit des lois",
        explication: "La loi impersonnelle protège les citoyens de l'arbitraire des volontés particulières."
      },
      {
        citation: "Pour être libre, il faut être citoyen de l’État car l’État est la réalité où l’individu trouve sa liberté",
        auteur: "G.W.F. Hegel",
        oeuvre: "La Raison dans l'histoire",
        explication: "L'État donne corps et garanties concrètes à la liberté rationnelle."
      },
      {
        citation: "L’homme est un animal qui a besoin d’un maître",
        auteur: "Emmanuel Kant",
        oeuvre: "Idée d'une histoire universelle au point de vue cosmopolitique",
        explication: "Le maître civil (l'État de droit) force l'homme à plier ses penchants égoïstes sous la loi commune."
      },
      {
        citation: "L’obéissance à la loi qu’on s’est prescrite est liberté",
        auteur: "Jean-Jacques Rousseau",
        oeuvre: "Du contrat social",
        explication: "L'autonomie politique : le citoyen obéit à la volonté générale dont il est lui-même membre souverain."
      },
      {
        citation: "La fin de l’État est en réalité la sécurité et la liberté et non la domination",
        auteur: "Baruch Spinoza",
        oeuvre: "Traité théologico-politique",
        explication: "L'État véritable libère les citoyens de la peur et permet le plein exercice de la raison."
      }
    ],
    citationsAspectCritique: [
      {
        citation: "Ce qui fait de l’État un enfer, c’est que l’homme essaie d’en faire un paradis",
        auteur: "Friedrich Hölderlin",
        explication: "Le fanatisme étatique et le totalitarisme détruisent la liberté au nom d'un idéal forcé."
      },
      {
        citation: "L’État, c’est le plus froid des monstres froids : il ment froidement et voici le mensonge qui sort de sa bouche : 'Moi l’État, je suis le peuple'",
        auteur: "Friedrich Nietzsche",
        oeuvre: "Ainsi parlait Zarathoustra",
        explication: "Dénonce l'hypocrisie de la bureaucratie étatique qui dévore les cultures vivantes."
      },
      {
        citation: "Tout appareil d’État fonctionne à la fois avec violence et avec idéologie",
        auteur: "Louis Althusser",
        oeuvre: "Idéologie et appareils idéologiques d'État",
        explication: "L'État maintient la domination bourgeoise par les tribunaux, la police et l'école."
      },
      {
        citation: "L’État est un vaste cimetière où viennent s’enterrer toutes les manifestations des libertés individuelles",
        auteur: "Mikhaïl Bakounine",
        oeuvre: "Socialisme autoritaire et libertaire",
        explication: "Thèse anarchiste : l'État est par essence l'oppresseur de l'individu."
      },
      {
        citation: "Tout homme qui a du pouvoir est porté à en abuser ; il va jusqu’à ce qu’il trouve des limites",
        auteur: "Montesquieu",
        oeuvre: "De l'esprit des lois",
        explication: "Exige la séparation stricte des pouvoirs (législatif, exécutif, judiciaire)."
      }
    ]
  },
  {
    id: "religion_dieu",
    nomTheme: "Dieu et la Religion",
    definition: "Rapport de l'homme avec le sacré, l'Être suprême transcendant. Ensemble de croyances, de rites et de pratiques ordonnées au divin.",
    citationsAspectPositif: [
      {
        citation: "Raison et foi sont comme deux ailes qui permettent à l’esprit humain de s’élever vers la contemplation de la vérité",
        auteur: "Jean-Paul II",
        oeuvre: "Fides et Ratio",
        explication: "Complémentarité harmonieuse entre la quête rationnelle et la lumière spirituelle."
      },
      {
        citation: "Un peu de philosophie incline l’esprit à l’athéisme, mais une philosophie profonde amène les esprits à la religion",
        auteur: "Francis Bacon",
        oeuvre: "Essais de morale et de politique",
        explication: "La réflexion ultime sur l'ordre de l'univers ramène à la cause première divine."
      },
      {
        citation: "Il n’y a jamais eu de société sans religion",
        auteur: "Henri Bergson",
        oeuvre: "Les Deux Sources de la morale et de la religion",
        explication: "La religion remplit une fonction fabulatrice vitale de cohésion sociale et de parade à la peur de la mort."
      },
      {
        citation: "L’univers m’embarrasse, et je ne puis songer que cette horloge existe et n’ait pas d’horloger",
        auteur: "Voltaire",
        oeuvre: "Satires",
        explication: "Argument déiste téléologique : l'ordre parfait de la nature prouve l'artisan suprême."
      },
      {
        citation: "Si Dieu n’existait pas, tout serait permis",
        auteur: "Fiodor Dostoïevski",
        oeuvre: "Les Frères Karamazov",
        explication: "L'existence de Dieu fonde l'impératif moral et la responsabilité absolue."
      }
    ],
    citationsAspectCritique: [
      {
        citation: "Si Dieu est, l’homme est esclave ; or l’homme peut et doit être libre, donc Dieu n’existe pas",
        auteur: "Mikhaïl Bakounine",
        oeuvre: "Dieu et l'État",
        explication: "L'antithèse absolue entre transcendance divine autoritaire et émancipation humaine."
      },
      {
        citation: "Pour enrichir Dieu, l’homme s’appauvrit [...] l’homme pauvre possède un Dieu riche",
        auteur: "Ludwig Feuerbach",
        oeuvre: "L'Essence du christianisme",
        explication: "La théologie n'est que la projection aliénée des qualités humaines idéalisées dans le ciel."
      },
      {
        citation: "La religion est l’opium du peuple",
        auteur: "Karl Marx",
        oeuvre: "Critique de la philosophie du droit de Hegel",
        explication: "Elle endort la révolte des exploités en leur promettant un paradis illusoire."
      },
      {
        citation: "Les doctrines religieuses sont toutes des illusions ; on ne peut les prouver",
        auteur: "Sigmund Freud",
        oeuvre: "L'Avenir d'une illusion",
        explication: "La religion répond au besoin infantile et angoissé d'un père protecteur céleste."
      },
      {
        citation: "La religion est l’asile de l’ignorance",
        auteur: "Baruch Spinoza",
        oeuvre: "Éthique",
        explication: "Invoquer la volonté de Dieu sert de refuge dès qu'on renonce à chercher les causes naturelles."
      }
    ]
  },
  {
    id: "travail",
    nomTheme: "Le Travail",
    definition: "Activité intellectuelle ou physique par laquelle l'homme transforme la nature, produit des biens utiles et se transforme lui-même.",
    citationsAspectPositif: [
      {
        citation: "Ce qui distingue dès l’abord le plus mauvais architecte de l’abeille la plus experte, c’est qu’il a construit la cellule dans sa tête avant de la construire dans la ruche",
        auteur: "Karl Marx",
        oeuvre: "Le Capital",
        explication: "Le travail humain est une activité consciente téléologique, guidée par une idée préalable."
      },
      {
        citation: "Le travail éloigne de nous trois grands maux : l’ennui, le vice et le besoin",
        auteur: "Voltaire",
        oeuvre: "Candide",
        explication: "Le travail moralise, occupe l'esprit et subvient aux besoins de la vie."
      },
      {
        citation: "Par le travail, la femme a pu franchir la distance qui la séparait de l’homme",
        auteur: "Simone de Beauvoir",
        oeuvre: "Le Deuxième Sexe",
        explication: "L'indépendance économique acquise par le travail est la condition de l'émancipation."
      },
      {
        citation: "Le travail et après le travail, l’indépendance ; n’être à la charge de personne",
        auteur: "Bernard B. Dadié",
        oeuvre: "Climbié",
        explication: "Le travail est le vecteur d'autonomie et de dignité de la jeunesse africaine."
      },
      {
        citation: "Le travail, même s’il ne sort pas l’homme de sa pauvreté, lui garantit au moins sa dignité",
        auteur: "Amadou Koné",
        oeuvre: "Les Frasques d'Ebinto",
        explication: "La noblesse de l'effort productif confère une place respectée dans la communauté."
      }
    ],
    citationsAspectCritique: [
      {
        citation: "Le règne de la liberté ne commence en réalité que là où cesse le travail imposé par le besoin",
        auteur: "Karl Marx",
        oeuvre: "Le Capital",
        explication: "Le travail contraint par la subsistance reste soumis à la nécessité ; la liberté exige le temps libéré."
      },
      {
        citation: "Le travail ne produit pas que des marchandises ; il se produit lui-même et produit l’ouvrier comme une marchandise",
        auteur: "Karl Marx",
        oeuvre: "Manuscrits de 1844",
        explication: "L'aliénation capitaliste chosifie le travailleur dépossédé de son produit."
      },
      {
        citation: "Le travail est la meilleure des polices [...] il tient en bride le développement de l’indépendance",
        auteur: "Friedrich Nietzsche",
        oeuvre: "Aurore",
        explication: "L'épuisement par le labeur empêche toute réflexion critique et sédition."
      },
      {
        citation: "C’est à la sueur de ton visage que tu mangeras ton pain",
        auteur: "La Bible",
        oeuvre: "Genèse 3:19",
        explication: "Le travail vécu comme peine, châtiment et fardeau de la condition terrestre."
      }
    ]
  },
  {
    id: "technique_science",
    nomTheme: "La Technique et la Science",
    definition: "La science est la connaissance théorique, rationnelle et méthodique des lois du réel. La technique est le savoir-faire opératoire et l'application pratique des moyens pour transformer le monde.",
    citationsAspectPositif: [
      {
        citation: "Nous rendre comme maîtres et possesseurs de la nature",
        auteur: "René Descartes",
        oeuvre: "Discours de la méthode",
        explication: "La physique appliquée et la médecine améliorent les conditions d'existence matérielle et la santé de l'homme."
      },
      {
        citation: "Science d’où prévoyance ; prévoyance d’où action",
        auteur: "Auguste Comte",
        oeuvre: "Cours de philosophie positive",
        explication: "La connaissance rationnelle des lois permet d'anticiper l'avenir et de maîtriser efficacement l'environnement."
      },
      {
        citation: "L’univers est écrit en langue mathématique",
        auteur: "Galilée",
        oeuvre: "L'Essayeur",
        explication: "L'esprit scientifique substitue la mesure rigoureuse aux fables spéculatives."
      },
      {
        citation: "La technique nous délivre des corvées serviles et élargit notre champ d'action",
        auteur: "André Leroi-Gourhan",
        oeuvre: "Le Geste et la Parole",
        explication: "L'outil et la machine prolongent les organes humains et libèrent du temps pour l'esprit."
      }
    ],
    citationsAspectCritique: [
      {
        citation: "Science sans conscience n’est que ruine de l’âme",
        auteur: "François Rabelais",
        oeuvre: "Pantagruel",
        explication: "Le savoir opératoire sans discernement moral conduit à la destruction éthique de l'humanité."
      },
      {
        citation: "La promesse de la technique moderne s’est inversée en menace",
        auteur: "Hans Jonas",
        oeuvre: "Le Principe responsabilité",
        explication: "Le péril nucléaire et le désastre écologique exigent une éthique de la préservation de la vie future."
      },
      {
        citation: "Le progrès technique est comme une hache qu’on aurait mise dans les mains d’un psychopathe",
        auteur: "Albert Einstein",
        explication: "Le décalage tragique entre la toute-puissance des moyens matériels et l'immaturité spirituelle."
      },
      {
        citation: "La technique ne respecte rien, elle n’a qu’un moyen, transformer toute chose en moyen",
        auteur: "Jacques Ellul",
        oeuvre: "La Technique ou l'enjeu du siècle",
        explication: "Le système technicien totalitaire désacralise l'humain en le subordonnant à l'impératif du rendement."
      }
    ]
  },
  {
    id: "philosophie",
    nomTheme: "La Philosophie",
    definition: "Activité critique et rationnelle prenant pour objet l'homme et l'univers. Amour de la sagesse (philein-sophia) et quête inlassable de vérité.",
    citationsAspectPositif: [
      {
        citation: "Ce que je sais, c’est que je ne sais rien",
        auteur: "Socrate",
        oeuvre: "Apologie de Socrate",
        explication: "L'aveu d'ignorance délivre des faux savoirs dogmatiques et déclenche la recherche authentique."
      },
      {
        citation: "C’est proprement avoir les yeux fermés sans tâcher jamais de les ouvrir que de vivre sans philosopher",
        auteur: "René Descartes",
        oeuvre: "Principes de la philosophie",
        explication: "La réflexion philosophique éclaire la conduite de la vie et arrache l'homme au sommeil instinctif."
      },
      {
        citation: "La philosophie est fille de l’étonnement",
        auteur: "Aristote",
        oeuvre: "Métaphysique",
        explication: "C'est l'étonnement devant ce qui semblait évident qui met la pensée en marche."
      },
      {
        citation: "Tant que les philosophes ne seront pas rois dans les cités, il n’y aura pas de trêve aux maux des cités",
        auteur: "Platon",
        oeuvre: "La République",
        explication: "Le gouvernement de la société doit être guidé par la sagesse et la justice rationnelle."
      },
      {
        citation: "En philosophie, les questions sont plus essentielles que les réponses",
        auteur: "Karl Jaspers",
        oeuvre: "Introduction à la philosophie",
        explication: "L'exigence de questionnement critique prime sur tout dogmatisme figé."
      }
    ],
    citationsAspectCritique: [
      {
        citation: "Les philosophes n’ont fait qu’interpréter le monde de diverses manières ; ce qui importe, c’est de le transformer",
        auteur: "Karl Marx",
        oeuvre: "Thèses sur Feuerbach (XI)",
        explication: "Critique de la spéculation stérile : la philosophie doit s'incarner dans la praxis révolutionnaire."
      },
      {
        citation: "La philosophie est un champ de bataille où se livrent des combats sans fin",
        auteur: "Emmanuel Kant",
        oeuvre: "Critique de la raison pure",
        explication: "Incapacité de la métaphysique dogmatique à s'accorder sur des vérités universelles unanimes."
      },
      {
        citation: "L’oisiveté est la mère de la philosophie",
        auteur: "Thomas Hobbes",
        oeuvre: "Léviathan",
        explication: "La philosophie naît du loisir et peut dégénérer en vains bavardages coupés des nécessités pratiques."
      },
      {
        citation: "Les problèmes philosophiques sont des pseudo-problèmes que la science dissipe",
        auteur: "Auguste Comte",
        oeuvre: "Cours de philosophie positive",
        explication: "L'âge positif et scientifique dépasse les rêveries métaphysiques d'autrefois."
      }
    ]
  }
];

export const DICTIONNAIRE_PARCELLAIRE_OUGARD: TermeLexiqueParcellaire[] = [
  { terme: "Absence des autres", definition: "La solitude, la négation d'autrui, l'inexistence de la société." },
  { terme: "Absolu", definition: "Ce qui est dépourvu de limites, ne dépend de rien d'autre que soi et ne se détermine pas par rapport à l'extérieur." },
  { terme: "Abstrait", definition: "Idée ou qualité extraite par la pensée d'une totalité concrète, hors de laquelle elle n'a pas d'existence sensible." },
  { terme: "Acte manqué", definition: "Comportement humain involontaire révélant des pulsions ou désirs inconscients refoulés (Freud)." },
  { terme: "Activité caduque", definition: "Pratique dépassée, rétrograde, inactuelle ou périmée face aux exigences du présent." },
  { terme: "Animalité", definition: "Ensemble des caractères propres à l'animal (instincts bruts, pulsions, absence de réflexion morale)." },
  { terme: "Arbitraire", definition: "Ce qui ne reçoit pas de justification rationnelle ni de légitimité légale ; pur caprice ou force sans règle." },
  { terme: "Argument d'autorité", definition: "Argument fondé non sur sa valeur démonstrative propre, mais sur le prestige ou la position de celui qui l'énonce." },
  { terme: "Bonheur", definition: "État de pleine satisfaction, félicité, bien-être intégral et plénitude où cesse le manque." },
  { terme: "Conscience", definition: "Intuition immédiate que la pensée a d'elle-même et de ses actes. Faculté de juger le bien et le mal." },
  { terme: "Contrainte", definition: "Pression ou force extérieure qui s'exerce sur un individu et l'oblige à agir contre sa volonté (distinct de l'obligation consentie)." },
  { terme: "Déterminisme", definition: "Principe selon lequel tout événement est rigoureusement produit par des conditions et causes antérieures nécessaires." },
  { terme: "Dialectique", definition: "Processus de pensée qui prend en charge des propositions contradictoires pour faire émerger une synthèse supérieure." },
  { terme: "Droit positif", definition: "Ensemble des lois écrites et promulguées en vigueur dans une société étatique donnée." },
  { terme: "Droit naturel", definition: "Ensemble des droits inhérents à la nature humaine (liberté, vie, dignité) antérieurs et supérieurs aux lois écrites." },
  { terme: "Inconscient", definition: "Partie du psychisme regroupant les désirs et pulsions refoulés qui échappent à l'introspection consciente tout en restant actifs." },
  { terme: "Liberté", definition: "Pouvoir d'agir sans contrainte extérieure selon sa propre volonté, ou autonomie d'obéir aux lois rationnelles prescrites." },
  { terme: "Mythe", definition: "Récit fabuleux imaginaire ou allégorique contenant une explication symbolique du monde et de la destinée humaine." },
  { terme: "Raison", definition: "Faculté humaine de juger, de distinguer le vrai du faux et le bien du mal, et d'enchaîner logiquement des idées." },
  { terme: "Rationalisme", definition: "Doctrine philosophique affirmant la primauté de la raison comme instrument exclusif ou supérieur de connaissance." },
  { terme: "Technique", definition: "Ensemble des procédés rationnels et des moyens matériels destinés à transformer la nature pour satisfaire les besoins humains." },
  { terme: "Travail", definition: "Activité consciente et coordonnée par laquelle l'homme façonne la matière, s'humanise et assure sa survie." }
];
