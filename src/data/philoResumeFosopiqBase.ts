/**
 * BASE DE DONNÉES PÉDAGOGIQUE — RÉSUMÉ DES COURS DE PHILOSOPHIE (FONDATION FOSOPIQ ÉDUCATION)
 * Niveau : Terminale (Toutes Séries) — Programme Panafricain & Francophone
 * 
 * Contient :
 * - 9 Leçons complètes avec approche dialectique stricte :
 *   1. La Conscience (Aspects positifs, limites via l'inconscient, critique de l'inconscient)
 *   2. La Violence (Fait naturel vs capacité de dépassement par la raison et la morale)
 *   3. Autrui (Autrui aliénateur vs autrui source de bonheur et d'humanisation)
 *   4. L'État (Nécessité pour la paix et le bonheur vs aliénation/oppression et voies alternatives)
 *   5. La Religion (Fait naturel/culturel, bienfaits libérateurs vs aliénation, dogmatisme et violence)
 *   6. L'Histoire (L'homme produit de l'histoire vs l'homme acteur et artisan de son histoire)
 *   7. Le Travail (Aliénant et punitif vs essence, survie, dignité et libération de l'homme)
 *   8. La Technique et la Science (Aliénation/dangers vs maîtrise de la nature et libération)
 *   9. La Philosophie (Inutilité apparente et querelles vs fer de lance des sciences et guide éthique)
 * - Lexique des définitions conceptuelles fondamentales.
 */

export interface LeconFosopiqItem {
  numero: number;
  titre: string;
  thesePositive: {
    ideesPrincipales: string[];
    auteursEtCitations: { auteur: string; citationOuThese: string; commentaire: string }[];
  };
  antitheseCritique: {
    ideesPrincipales: string[];
    auteursEtCitations: { auteur: string; citationOuThese: string; commentaire: string }[];
  };
  syntheseBilan: string;
}

export const PHILO_RESUME_FOSOPIQ_LECONS: LeconFosopiqItem[] = [
  {
    numero: 1,
    titre: "La Conscience et l'Inconscient",
    thesePositive: {
      ideesPrincipales: [
        "La conscience fait la grandeur de l'homme et le rend responsable de ses actes.",
        "Le doute méthodique cartésien révèle le caractère indubitable du sujet pensant.",
        "La conscience morale est un instinct divin céleste et immortel (Rousseau).",
        "Conscience signifie choisir : elle garantit le libre arbitre (Bergson).",
        "La conscience est une lumière qui arrache l'homme à l'obscurité et à l'irrationalité (Kant : Sapere aude)."
      ],
      auteursEtCitations: [
        {
          auteur: "Blaise Pascal",
          citationOuThese: "L'homme n'est qu'un roseau le plus faible de la nature mais c'est un roseau pensant (Pensées)",
          commentaire: "La conscience fait la misère et la grandeur de l'homme, l'élevant au-dessus de l'univers muet."
        },
        {
          auteur: "René Descartes",
          citationOuThese: "Je pense donc je suis (Discours de la méthode)",
          commentaire: "Le cogito constitue la vérité première inébranlable qui fonde l'existence pensante."
        },
        {
          auteur: "Jean-Jacques Rousseau",
          citationOuThese: "Conscience ! Conscience ! Instinct divin, juge infaillible du bien et du mal",
          commentaire: "La conscience morale rend l'homme semblable à Dieu en créant l'amour désintéressé du bien."
        },
        {
          auteur: "Henri Bergson",
          citationOuThese: "Conscience signifie choisir, choisir c'est choisir, ne pas choisir c'est encore choisir",
          commentaire: "La conscience est engagée dans l'action et l'anticipation de l'avenir."
        }
      ]
    },
    antitheseCritique: {
      ideesPrincipales: [
        "La vie psychique ne se résume pas à la conscience : l'inconscient abrite pulsions et traumatismes.",
        "L'homme n'est pas maître de ses rêves, tics, lapsus et actes manqués (Freud).",
        "L'inconscient peut servir d'alibi ou de mauvaise foi pour fuir sa responsabilité (Sartre).",
        "Le freudisme risque d'inventer en chaque homme un animal redoutable (Alain)."
      ],
      auteursEtCitations: [
        {
          auteur: "Sigmund Freud",
          citationOuThese: "Pour bien comprendre la vie psychique, il est indispensable d'arrêter de surestimer la conscience",
          commentaire: "L'inconscient constitue le fondement obscur de la majeure partie des conduites humaines."
        },
        {
          auteur: "Jean-Paul Sartre",
          citationOuThese: "L'inconscient est la mauvaise foi de la conscience (Huis clos / L'Être et le néant)",
          commentaire: "L'homme est irréductiblement libre : se réfugier derrière l'inconscient est une lâche démission."
        },
        {
          auteur: "Alain",
          citationOuThese: "Le freudisme si fameux est un art d'inventer en chaque homme un animal redoutable",
          commentaire: "La conscience réflexive doit garder la souveraineté morale sur le moi."
        }
      ]
    },
    syntheseBilan: "Bien que l'inconscient révèle des déterminismes psychiques indéniables, la conscience demeure l'instance indispensable de lucidité éthique et de responsabilité personnelle."
  },
  {
    numero: 2,
    titre: "La Violence",
    thesePositive: {
      ideesPrincipales: [
        "La violence est un fait naturel ancré dans l'instinct de survie et l'agressivité innée.",
        "L'état de nature hobbesien est une guerre perpétuelle de tous contre tous.",
        "Pour Nietzsche, la violence vitale est l'expression même de la force afirmatrice contre la dégénérescence."
      ],
      auteursEtCitations: [
        {
          auteur: "Sigmund Freud",
          citationOuThese: "L'homme n'est point cet être débonnaire au cœur assoiffé d'amour [...] il porte au compte de ses données instinctives une bonne somme d'agressivité (Malaise dans la civilisation)",
          commentaire: "La pulsion de destruction (Thanatos) est consubstantielle à la constitution psychique."
        },
        {
          auteur: "Thomas Hobbes",
          citationOuThese: "L'homme est un loup pour l'homme (Homo homini lupus - Léviathan)",
          commentaire: "Sans autorité souveraine commune, l'agressivité rivale engendre la peur permanente de la mort violente."
        },
        {
          auteur: "Friedrich Nietzsche",
          citationOuThese: "Vivre c'est essentiellement dépouiller, blesser, violenter le faible et lui imposer ses formes propres (Par-delà le bien et le mal)",
          commentaire: "La vie est volonté de puissance et dépassement de la faiblesse."
        }
      ]
    },
    antitheseCritique: {
      ideesPrincipales: [
        "L'homme peut et doit transcender la violence par la raison et la conscience morale.",
        "L'éducation et la justice permettent de désamorcer l'animalité.",
        "La conscience morale est un juge infaillible réfrénant les impulsions destructrices."
      ],
      auteursEtCitations: [
        {
          auteur: "Blaise Pascal",
          citationOuThese: "Penser fait la grandeur de l'homme",
          commentaire: "La rationalité distingue l'homme des bêtes et condamne l'usage de la force aveugle."
        },
        {
          auteur: "Honoré de Balzac",
          citationOuThese: "Notre conscience est un juge infaillible quand nous ne l'avons pas assassinée (La Peau de chagrin)",
          commentaire: "La voix intérieure de la conscience condamne tout forfait contre autrui."
        }
      ]
    },
    syntheseBilan: "Si la violence est une tentation instinctive, l'institution du droit, de la culture et de la conscience morale transforme l'agressivité brute en concorde civile."
  },
  {
    numero: 3,
    titre: "Autrui",
    thesePositive: {
      ideesPrincipales: [
        "Autrui est source de bonheur, d'humanisation et de réalisation personnelle.",
        "L'homme est un être social qui ne peut s'épanouir dans l'isolement complet.",
        "Seydou Badian démontre l'interdépendance vitale de la communauté humaine.",
        "Par l'éducation dispensée par autrui, l'enfant accède au statut d'être raisonnable (Kant).",
        "Spinoza affirme qu'autrui peut être 'un dieu pour l'homme'."
      ],
      auteursEtCitations: [
        {
          auteur: "Seydou Badian",
          citationOuThese: "L'homme n'est rien sans les autres. C'est dans les bras que nous venons au monde, c'est dans les bras que nous partirons (Sous l'orage)",
          commentaire: "L'existence humaine est intégralement tissée par la solidarité et la dette envers la communauté."
        },
        {
          auteur: "Aristote",
          citationOuThese: "L'homme est un animal politique (Politique)",
          commentaire: "La vie en cité est la finalité naturelle permettant l'actualisation des vertus humaines."
        },
        {
          auteur: "Emmanuel Kant",
          citationOuThese: "L'homme n'est homme que par l'éducation",
          commentaire: "Seul le commerce pédagogique avec autrui transforme la sauvagerie en liberté morale."
        },
        {
          auteur: "Baruch Spinoza",
          citationOuThese: "L'homme est un dieu pour l'homme (Homo homini deus)",
          commentaire: "L'entraide rationnelle entre humains multiplie la puissance d'agir de chacun."
        }
      ]
    },
    antitheseCritique: {
      ideesPrincipales: [
        "Autrui peut être aliénateur et constituer un obstacle majeur à ma liberté.",
        "Le regard d'autrui me fige en objet et m'exproprie de mon intimité (Sartre).",
        "Les relations humaines s'enracinent dans la lutte à mort des consciences (Hegel).",
        "À l'état de nature, autrui représente un danger permanent (Hobbes)."
      ],
      auteursEtCitations: [
        {
          auteur: "Jean-Paul Sartre",
          citationOuThese: "Je saisis le regard de l'autre au sein de mon acte comme solidification et aliénation de mes possibilités",
          commentaire: "Le jugement d'autrui m'objective et me fait subir l'épreuve aliénante de la honte."
        },
        {
          auteur: "G.W.F. Hegel",
          citationOuThese: "La relation qui existe entre l'autre et moi s'établit toujours sur la base du conflit",
          commentaire: "Chaque conscience cherche à s'imposer à l'autre pour obtenir sa reconnaissance."
        },
        {
          auteur: "Thomas Hobbes",
          citationOuThese: "L'homme est un loup pour l'homme",
          commentaire: "La rivalité des convoitises fait d'autrui une menace dont il faut se prémunir."
        }
      ]
    },
    syntheseBilan: "Autrui est simultanément la menace de mon aliénation par son regard et la condition indispensable de mon accomplissement conscient et moral."
  },
  {
    numero: 4,
    titre: "L'État et la Politique",
    thesePositive: {
      ideesPrincipales: [
        "L'État est nécessaire pour assurer la sécurité, la paix et le bonheur collectif.",
        "L'État de droit arrache l'homme à la brutalité animale et l'élève à la rationalité civile (Rousseau).",
        "L'État protège les faibles, assure l'égalité juridique et promeut la justice sociale.",
        "La force publique légitime est le rempart indispensable contre l'anarchie criminelle (Pascal)."
      ],
      auteursEtCitations: [
        {
          auteur: "Jean-Jacques Rousseau",
          citationOuThese: "Par l'État de droit l'homme s'arrache de la brutalité animale et accède à la moralité et à la rationalité (Du contrat social)",
          commentaire: "La liberté civile sous la loi universelle remplace la licence sauvage instable."
        },
        {
          auteur: "Henri Bergson",
          citationOuThese: "Je préfère la pire des lois que le meilleur des maîtres car le maître a des préférences tandis que la loi n'en a aucun",
          commentaire: "L'impartialité impersonnelle de la légalité garantit l'égalité de traitement des citoyens."
        },
        {
          auteur: "Blaise Pascal",
          citationOuThese: "La force sans la justice est tyrannique mais la justice sans la force est impuissante",
          commentaire: "L'État doit adosser le droit à la contrainte légitime pour faire régner l'ordre."
        }
      ]
    },
    antitheseCritique: {
      ideesPrincipales: [
        "L'État aliène l'homme par des lois rigides qui étouffent la spontanéité naturelle.",
        "L'anarchisme dénonce l'État comme un vaste tombeau des libertés individuelles (Bakounine).",
        "Le marxisme voit dans l'État l'instrument policier de la classe bourgeoise dominante.",
        "Nietzsche dénonce l'État comme le plus froid des monstres froids qui prétend usurper le peuple.",
        "La violence étatique peut être contestée par la non-violence (Gandhi) ou transcendée par la sagesse (Platon)."
      ],
      auteursEtCitations: [
        {
          auteur: "Mikhaïl Bakounine",
          citationOuThese: "L'État est un immense cimetière où viennent s'enterrer les libertés individuelles",
          commentaire: "L'appareil étatique impose l'hétéronomie et écrase l'autonomie créatrice du peuple."
        },
        {
          auteur: "Karl Marx",
          citationOuThese: "Prolétaires de tous les pays, unissez-vous !",
          commentaire: "L'État bourgeois doit dépérir pour céder la place à une société sans classes."
        },
        {
          auteur: "Friedrich Nietzsche",
          citationOuThese: "L'État est un monstre froid, le plus froid de tous les monstres froids : il ment au peuple et voici le mensonge qui sort de sa bouche : c'est moi le peuple (Ainsi parlait Zarathoustra)",
          commentaire: "L'État broie les individualités créatrices sous le conformisme grégaire."
        },
        {
          auteur: "Mohandas Gandhi",
          citationOuThese: "La victoire par la violence équivaut à la défaite car elle est momentanée",
          commentaire: "Seule la vérité de la non-violence produit une harmonie politique durable."
        },
        {
          auteur: "Platon",
          citationOuThese: "Il faudrait pour le bonheur des États que les philosophes fussent rois ou que les rois fussent philosophes (La République)",
          commentaire: "La politique requiert le savoir éthique suprême plutôt que la seule force nue."
        }
      ]
    },
    syntheseBilan: "Bien que l'État porte le risque constant de la bureaucratie oppressive, l'État de droit démocratique demeure la condition matérielle sine qua non de la liberté civile."
  },
  {
    numero: 5,
    titre: "Dieu et la Religion",
    thesePositive: {
      ideesPrincipales: [
        "La religion répond à une disposition naturelle du cœur et à la quête humaine de transcendance.",
        "Bergson souligne qu'il n'y a jamais eu de société sans religion.",
        "La religion libère de l'angoisse existentielle face à la mort et aux aléas de la condition terrestre.",
        "Elle inculque des valeurs morales universelles : fraternité, pardon, amour du prochain et justice.",
        "Elle constitue un puissant facteur unificateur et de cohésion sociale (Youakim Moubarak)."
      ],
      auteursEtCitations: [
        {
          auteur: "Blaise Pascal",
          citationOuThese: "Le cœur a ses raisons que la raison ne connaît point (Pensées)",
          commentaire: "La foi est une certitude intuitive qui dépasse les déductions géométriques froides."
        },
        {
          auteur: "Henri Bergson",
          citationOuThese: "La religion nous libère de l'angoisse de la mort (Les Deux Sources de la morale et de la religion)",
          commentaire: "L'instinct fabulateur religieux protège l'esprit contre la démoralisation face à sa finitude."
        },
        {
          auteur: "Youakim Moubarak",
          citationOuThese: "De tous les facteurs d'unité entre les hommes il est certain que jusqu'à nos jours la religion est le facteur le plus unificateur",
          commentaire: "La croyance partagée crée un lien communautaire transcendant les frontières géographiques."
        }
      ]
    },
    antitheseCritique: {
      ideesPrincipales: [
        "La religion est une construction culturelle née de la peur et de la faiblesse terrestre de l'homme.",
        "Pour Nietzsche, Dieu est une invention des faibles ; sa mort ouvre la voie au surhomme créateur.",
        "Feuerbach montre que Dieu est la projection imaginaire et aliénée des aspirations de l'homme.",
        "La religion a souvent servi d'opium du peuple pour justifier l'exploitation sociale (Marx).",
        "Le fanatisme religieux peut attiser la violence sectaire (Hobbes : le royaume de Dieu s'obtient par la violence)."
      ],
      auteursEtCitations: [
        {
          auteur: "Friedrich Nietzsche",
          citationOuThese: "Dieu est mort, vive le surhomme ! (Le Gai Savoir / L'Antéchrist)",
          commentaire: "L'émancipation humaine exige de briser les valeurs nihilistes de la soumission théologique."
        },
        {
          auteur: "Ludwig Feuerbach",
          citationOuThese: "Les dieux sont les vœux de l'homme réalisés (L'Essence du christianisme)",
          commentaire: "Pour glorifier Dieu, l'homme s'est dépouillé de ses propres grandeurs terrestres."
        },
        {
          auteur: "Karl Marx",
          citationOuThese: "La religion est le soupir de la créature opprimée, elle est l'opium du peuple",
          commentaire: "La promesse de béatitude céleste endort la conscience de classe révolutionnaire."
        }
      ]
    },
    syntheseBilan: "La religion offre un réconfort spirituel et un socle de valeurs partagées, mais elle doit être épurée de tout fanatisme et obscurantisme par l'esprit critique rationnel."
  },
  {
    numero: 6,
    titre: "L'Histoire",
    thesePositive: {
      ideesPrincipales: [
        "L'homme est acteur et artisan de son histoire par le travail, la technique et la lutte sociale.",
        "Sartre affirme que l'homme n'est rien d'autre que ce qu'il se fait dans ses projets concrets.",
        "Marx montre que les hommes transforment le monde en changeant leurs conditions matérielles d'existence."
      ],
      auteursEtCitations: [
        {
          auteur: "Jean-Paul Sartre",
          citationOuThese: "L'homme n'est rien d'autre que celui qui se réalise (L'Existentialisme est un humanisme)",
          commentaire: "Rejet de tout fatalisme : l'histoire humaine est faite de choix et d'engagements libres."
        },
        {
          auteur: "Karl Marx",
          citationOuThese: "L'histoire n'est que l'activité de l'homme qui poursuit ses objectifs (La Sainte Famille)",
          commentaire: "Le devenir historique procède de l'action transformatrice des classes productrices."
        }
      ]
    },
    antitheseCritique: {
      ideesPrincipales: [
        "L'homme est aussi le produit de l'histoire, façonné par les traditions et le poids du passé.",
        "La temporalité, le vieillissement et la mort rappellent l'impuissance de l'individu face au flux temporel.",
        "Les doctrines religieuses et idéalistes placent l'histoire sous l'égide divine ou providentielle (Plotin, Hegel).",
        "Pour Freud, la personnalité adulte demeure prisonnière de l'histoire infantile : 'l'enfant est le père de l'homme'."
      ],
      auteursEtCitations: [
        {
          auteur: "Plotin",
          citationOuThese: "Tout émane de Dieu",
          commentaire: "Vision métaphysique où les créatures participent passivement d'un ordre émané."
        },
        {
          auteur: "G.W.F. Hegel",
          citationOuThese: "C'est l'esprit, sa volonté naturelle et nécessaire qui gouverne les événements de ce monde",
          commentaire: "La ruse de la raison utilise les passions des hommes pour accomplir le destin de l'Esprit universel."
        },
        {
          auteur: "Sigmund Freud / Wordsworth",
          citationOuThese: "L'enfant est le père de l'homme",
          commentaire: "Les expériences primaires de l'enfance déterminent inconsciemment les conduites futures."
        }
      ]
    },
    syntheseBilan: "L'homme hérite d'une histoire qu'il n'a pas choisie, mais il conserve le pouvoir critique et révolutionnaire de la réorienter par ses choix conscients."
  },
  {
    numero: 7,
    titre: "Le Travail",
    thesePositive: {
      ideesPrincipales: [
        "Le travail est l'essence même de l'homme, assurant sa survie et son humanisation.",
        "Il permet de dompter la nature et de devenir 'comme maître et possesseur' (Descartes).",
        "Bernard Dadié érige le travail en condition absolue d'indépendance et de dignité de la jeunesse.",
        "Voltaire rappelle que le travail éloigne l'ennui, le vice et le besoin."
      ],
      auteursEtCitations: [
        {
          auteur: "René Descartes",
          citationOuThese: "Par le travail et la technique l'homme deviendra comme maître et possesseur de la nature",
          commentaire: "Le travail méthodique subjugue les forces hostiles du milieu pour le confort humain."
        },
        {
          auteur: "Bernard B. Dadié",
          citationOuThese: "Le travail et après le travail l'indépendance, n'être à la charge de personne, telle doit être la devise de notre génération (Climbié)",
          commentaire: "Le travail libère de la tutelle d'autrui et forge la souveraineté de l'individu africain."
        },
        {
          auteur: "Voltaire",
          citationOuThese: "Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin (Candide)",
          commentaire: "L'effort productif ordonné apporte l'équilibre mental et moral indispensable à l'existence."
        }
      ]
    },
    antitheseCritique: {
      ideesPrincipales: [
        "Le travail peut devenir aliénant lorsqu'il réduit l'homme à l'état de machine ou de marchandise.",
        "Dans la tradition biblique, le travail est vécu comme punition et douleur ('à la sueur de ton front').",
        "La division parcellisée et le machinisme étouffent l'esprit de l'ouvrier (Marx).",
        "Platon condamnait les travaux manuels et serviles qui détériorent le corps et l'âme."
      ],
      auteursEtCitations: [
        {
          auteur: "La Bible",
          citationOuThese: "Tu gagneras ton pain à la sueur de ton front (Genèse 3:19)",
          commentaire: "Le travail comme châtiment de la transgression originelle."
        },
        {
          auteur: "Karl Marx",
          citationOuThese: "Le travail aliéné est sacrifice de soi, mortification (Manuscrits de 1844)",
          commentaire: "L'ouvrier est dépossédé de son produit, de son geste et de son essence générique."
        },
        {
          auteur: "Platon",
          citationOuThese: "Tout ce qui est manœuvrier et artisanal détruit le corps en même temps que l'âme",
          commentaire: "La répétition mécanique abrutit l'esprit et entrave l'élévation philosophique."
        }
      ]
    },
    syntheseBilan: "Le travail n'est émancipateur que s'il est librement organisé dans la justice sociale et affranchi de l'exploitation économique."
  },
  {
    numero: 8,
    titre: "La Technique et la Science",
    thesePositive: {
      ideesPrincipales: [
        "La science délivre l'homme de l'obscurantisme, des superstitions et des peurs ancestrales.",
        "Descartes souligne que toute vraie science est connaissance certaine et évidente.",
        "Jean Rostand observe que la science a conféré à l'homme des pouvoirs quasi-divins.",
        "La technique allège la fatigue humaine, augmente l'espérance de vie et favorise la communication planétaire."
      ],
      auteursEtCitations: [
        {
          auteur: "René Descartes",
          citationOuThese: "Toute science est une connaissance certaine et évidente (Règles pour la direction de l'esprit)",
          commentaire: "La méthode scientifique substitue la clarté rigoureuse aux opinions confuses."
        },
        {
          auteur: "Jean Rostand",
          citationOuThese: "La science a fait de nous des dieux avant même que nous méritions d'être des hommes",
          commentaire: "L'essor vertigineux des savoirs biomédicaux et physiques donne à l'homme le contrôle du vivant."
        }
      ]
    },
    antitheseCritique: {
      ideesPrincipales: [
        "La technique moderne déchaîne des périls globaux : armes de destruction massive, pollution, réchauffement climatique.",
        "Hans Jonas formule l'impératif de responsabilité pour préserver une vie authentique sur terre.",
        "Rabelais rappelle l'urgence du contrôle éthique : 'science sans conscience n'est que ruine de l'âme'.",
        "Aldous Huxley (Le Meilleur des mondes) avertit contre la dystopie du conditionnement technoscientifique.",
        "Face aux énigmes de la mort et de la souffrance, la science reste muette (Kant, Karl Jaspers)."
      ],
      auteursEtCitations: [
        {
          auteur: "Hans Jonas",
          citationOuThese: "Agis de telle sorte que les effets de ton action soient compatibles avec la permanence d'une vie authentiquement humaine sur terre (Le Principe responsabilité)",
          commentaire: "L'éthique technologique doit prévenir l'anéantissement de l'avenir humain."
        },
        {
          auteur: "François Rabelais",
          citationOuThese: "Science sans conscience n'est que ruine de l'âme (Pantagruel)",
          commentaire: "La puissance sans la vertu morale devient un instrument d'autodestruction."
        },
        {
          auteur: "Karl Jaspers",
          citationOuThese: "Avec leurs résultats stupéfiants sur le plan particulier, les sciences modernes ne font qu'approfondir le mystère sur le plan général",
          commentaire: "La technique résout des problèmes locaux mais ne donne pas le sens global de l'existence."
        }
      ]
    },
    syntheseBilan: "La science et la technique sont des instruments indispensables de libération matérielle, à l'unique condition d'être subordonnées à la conscience morale et à l'éthique philosophique."
  },
  {
    numero: 9,
    titre: "La Philosophie",
    thesePositive: {
      ideesPrincipales: [
        "La philosophie est le fer de lance des sciences : l'esprit critique stimule la découverte continue.",
        "Elle a nourri l'avènement de la démocratie moderne et de la Déclaration universelle des droits de l'homme.",
        "Elle constitue la conscience morale et éthique des applications scientifiques et techniques.",
        "Vivre sans philosopher équivaut à avoir les yeux fermés sans tâcher de les ouvrir (Descartes)."
      ],
      auteursEtCitations: [
        {
          auteur: "René Descartes",
          citationOuThese: "C'est proprement avoir les yeux fermés sans tâcher jamais de les ouvrir que de vivre sans philosopher (Principes de la philosophie)",
          commentaire: "La philosophie éclaire la route de la vie et arrache l'homme à l'aveuglement instinctif."
        },
        {
          auteur: "François Rabelais",
          citationOuThese: "Science sans conscience n'est que ruine de l'âme",
          commentaire: "La philosophie rappelle à la science ses devoirs envers la dignité de la personne."
        }
      ]
    },
    antitheseCritique: {
      ideesPrincipales: [
        "La philosophie est parfois perçue comme une discipline inutile et déconnectée des urgences matérielles quotidiennes.",
        "Le sens commun la raille à travers l'adage latin : 'Primum vivere, deinde philosophari' (Il faut vivre d'abord et philosopher ensuite).",
        "Marx lui reproche de se borner à interpréter le monde au lieu de s'engager dans sa transformation concrète.",
        "Le désaccord perpétuel des systèmes philosophiques fait d'elle un 'champ de bataille' sans consensus certain (Kant)."
      ],
      auteursEtCitations: [
        {
          auteur: "Karl Marx",
          citationOuThese: "Les philosophes n'ont fait qu'interpréter le monde de diverses manières, ce qui importe c'est de le transformer (Thèses sur Feuerbach XI)",
          commentaire: "La spéculation théorique pure est vaine sans la pratique révolutionnaire."
        },
        {
          auteur: "Emmanuel Kant",
          citationOuThese: "La philosophie est un champ où se livrent des batailles sans fin (Critique de la raison pure)",
          commentaire: "L'absence de méthode univoque empêche la philosophie d'atteindre la certitude unanime des sciences."
        }
      ]
    },
    syntheseBilan: "Loin d'être un luxe désuet, la philosophie est l'exercice le plus vital de la raison humaine, garantissant l'indépendance du jugement et la vigilance démocratique."
  }
];
