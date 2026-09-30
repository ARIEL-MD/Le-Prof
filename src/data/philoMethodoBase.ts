/**
 * BASE DE DONNÉES MÉTHODOLOGIQUE DE PHILOSOPHIE (TERMINALES A, C, D)
 * Conforme aux normes officielles de la DPFC / Inspection Générale de Philosophie.
 *
 * Fournit :
 * 1. La base de connecteurs logiques indispensables et variés (interdiction de répéter "Selon l'opinion courante" et "Or, force est de").
 * 2. Les 3 démarches canoniques d'introduction :
 *    - Par Définition conceptuelle
 *    - Par Constat d'expérience / de sens commun
 *    - Par Citation / Référence doctrinale
 * 3. Des matrices de transition canonique entre Axe 1 et Axe 2.
 * 4. Des formules de conclusion en trois temps.
 */

export interface PhiloIntroTemplate {
  mode: 'definition' | 'constat' | 'citation';
  nom: string;
  description: string;
  exemplesAmorce: string[];
  connecteursOpposition: string[];
}

export const PHILO_INTRO_APPROACHES: Record<'definition' | 'constat' | 'citation', PhiloIntroTemplate> = {
  definition: {
    mode: 'definition',
    nom: 'Introduction par Définition',
    description: 'Partir de la définition claire des mots du sujet pour faire apparaître le débat ou l\'opposition d\'idées.',
    exemplesAmorce: [
      "Si l'on définit {notion} comme {definition},",
      "Défini simplement comme {definition}, le concept de {notion} désigne",
      "Au sens premier, {notion} renvoie à {definition}, ce qui signifie",
      "L'étude du cours montre que {notion} se comprend comme {definition}. Ainsi,",
      "Sur le plan des idées, {notion} se caractérise par {definition}."
    ],
    connecteursOpposition: [
      "Pourtant, cette définition ne suffit pas à expliquer toute la réalité :",
      "Toutefois, dans la vie pratique, cette définition rencontre une contradiction :",
      "Mais cette définition théorique s'oppose au fait que",
      "Cependant, cette idée première cache une vraie difficulté :",
      "Mais dès que l'on observe la réalité, on remarque que"
    ]
  },
  constat: {
    mode: 'constat',
    nom: 'Introduction par Constat d\'Expérience',
    description: 'Partir d\'un fait de la vie quotidienne ou d\'une idée courante pour montrer le problème.',
    exemplesAmorce: [
      "L'expérience de la vie quotidienne montre souvent que {notion}",
      "L'observation des comportements humains montre que {notion}",
      "On entend souvent dire dans la société que {notion}",
      "Au premier abord, quand on regarde notre époque, on a l'impression que {notion}",
      "L'histoire des hommes montre régulièrement que {notion}"
    ],
    connecteursOpposition: [
      "Pourtant, une réflexion plus attentive remet en cause cette première idée :",
      "Cependant, la réflexion philosophique montre les limites d'un tel constat :",
      "Mais cette certitude première cache une contradiction importante :",
      "Toutefois, si l'on examine bien les choses, on découvre que",
      "Mais cette première impression ne doit pas faire oublier que"
    ]
  },
  citation: {
    mode: 'citation',
    nom: 'Introduction par Citation',
    description: 'Partir d\'une citation connue ou de l\'avis d\'un grand auteur pour lancer la discussion.',
    exemplesAmorce: [
      "Dans une formule célèbre, {auteur} affirme que « {citation} » ({oeuvre}). Par cette phrase,",
      "Dans l'histoire des idées, {auteur} écrit dans « {oeuvre} » que « {citation} ». Cette idée montre que",
      "Comme l'explique {auteur}, « {citation} ». Cette pensée invite à considérer que",
      "En écrivant dans « {oeuvre} » que « {citation} », {auteur} soulignait déjà que"
    ],
    connecteursOpposition: [
      "Pourtant, cette idée soulève un vrai débat dès lors que l'on voit que",
      "Cependant, cette affirmation ne ferme pas le débat, car",
      "Mais d'autres penseurs contestent ce point de vue en montrant que",
      "Toutefois, cette position ne fait pas l'unanimité car on constate aussi que",
      "Pourtant, cette affirmation cache un autre aspect essentiel :"
    ]
  }
};

/**
 * BANQUE DE CONNECTEURS LOGIQUES PHILOSOPHIQUES CLASSÉS PAR FONCTION
 * Clairs, variés et faciles à comprendre (aucun mot dur ou pompeux).
 */
export const PHILO_CONNECTEURS = {
  // 1. Amorces & Présentation de la tension
  miseEnTension: [
    "Pourtant, un examen attentif montre que",
    "Cependant, cette idée première s'oppose au fait que",
    "Toutefois, la réflexion fait apparaître une tension claire :",
    "Mais dès lors que l'on regarde la réalité de plus près,",
    "Pourtant, cette opinion courante cache une vraie difficulté :",
    "D'un autre côté, il faut souligner que"
  ],

  // 2. Formules d'introduction du problème court (JAMAIS DE 'OU' DANS LE PROBLÈME !)
  amorceProbleme: [
    "Dès lors, le problème qui se pose est le suivant :",
    "Face à cette opposition, un problème central s'impose :",
    "De ce débat d'idées ressort le problème suivant :",
    "Cette tension conduit à poser la question essentielle :",
    "On est donc amené à poser ce problème direct :"
  ],

  // 3. Phrase canonique de liaison obligatoire après le problème et annonce des deux aspects
  phraseLiaisonAspects: "Pour répondre à ce problème d’autres questions s’ajoutent :",
  annonceAspects: [
    {
      mode: "Canonique officiel (Pour répondre à ce problème d'autres questions s'ajoutent)",
      texte: (asp1: string, asp2: string) => `Pour répondre à ce problème d’autres questions s’ajoutent : d’une part, ${asp1} D’autre part, ${asp2}`
    },
    {
      mode: "Variante fluide",
      texte: (asp1: string, asp2: string) => `Pour répondre à ce problème d’autres questions s’ajoutent : ${asp1} ${asp2}`
    }
  ],

  // 4. Développement - Axe 1 (Thèse)
  axe1: {
    chapeau: [
      "D'abord, il faut reconnaître que",
      "En premier lieu, une première analyse montre que",
      "Pour commencer, de solides raisons permettent d'affirmer que",
      "D'abord, l'expérience et la raison confirment que"
    ],
    arg1Connecteur: ["En premier lieu,", "D'abord,", "Tout d'abord,", "Pour débuter,"],
    arg2Connecteur: ["De plus,", "Ensuite,", "Par ailleurs,", "Dans le même sens,", "Aussi,"],
    arg3Connecteur: ["Enfin,", "Pour compléter cette idée,", "En dernier lieu,", "Finalement,"]
  },

  // 5. Mobilisation des doctrines & Citations
  citationIntro: [
    "C'est exactement ce que soutient",
    "Cette idée s'appuie sur la pensée de",
    "Comme l'explique clairement",
    "À ce sujet, la réflexion de",
    "C'est en ce sens qu'affirme"
  ],

  // 6. Explication & Analyse conceptuelle
  explication: [
    "Autrement dit,",
    "En clair, cela signifie que",
    "On comprend ainsi que",
    "Cette idée permet de comprendre que",
    "Cela montre clairement que"
  ],

  // 7. Transitions canoniques entre Axe 1 et Axe 2 (Modèles variés officiels)
  transitionsCanoniques: [
    (axe1Titre: string, axe2Titre: string) =>
      `De ce qui précède, nous retenons que ${axe1Titre.toLowerCase()}. Toutefois, cette première explication suffit-elle à clore le débat ? Ne faut-il pas plutôt se demander si ${axe2Titre.toLowerCase()} ?`,
    (axe1Titre: string, axe2Titre: string) =>
      `Au terme de cette première partie, les arguments en faveur de ${axe1Titre.toLowerCase()} sont solides. Cependant, cette position n'a-t-elle pas des limites importantes ? Ne doit-on pas s'interroger sur ${axe2Titre.toLowerCase()} ?`,
    (axe1Titre: string, axe2Titre: string) =>
      `S'il est vrai que ${axe1Titre.toLowerCase()}, cette idée ne répond pas à toutes les questions. Dès lors, ne faut-il pas examiner une objection importante et se demander si ${axe2Titre.toLowerCase()} ?`,
    (axe1Titre: string, axe2Titre: string) =>
      `Cette première analyse montre bien la force de ${axe1Titre.toLowerCase()}. Pourtant, la réalité invite à nuancer ce propos : dans quelle mesure ${axe2Titre.toLowerCase()} ?`
  ],

  // 8. Développement - Axe 2 (Antithèse / Dépassement)
  axe2: {
    chapeau: [
      "Cependant, un examen plus attentif oblige à nuancer la thèse précédente.",
      "Toutefois, la réflexion philosophique montre les limites d'une telle position.",
      "Néanmoins, en y regardant de plus près, cette première idée rencontre des objections importantes.",
      "Mais cette première affirmation doit être confrontée à ses limites réelles."
    ],
    arg1Connecteur: ["D'un autre côté,", "En premier lieu,", "D'un point de vue critique,", "Cependant,"],
    arg2Connecteur: ["De plus,", "Par ailleurs,", "Ensuite,", "Cette critique est encore plus forte si l'on remarque que"],
    arg3Connecteur: ["Enfin,", "En dernier lieu,", "Pour achever cette analyse,", "Finalement,"]
  },

  // 9. Conclusion en 3 temps
  conclusion: {
    bilan: [
      (these: string, antithese: string) =>
        `Au terme de notre réflexion, il apparaît que ${these.toLowerCase()}. Toutefois, notre analyse a aussi montré que ${antithese.toLowerCase()}.`,
      (these: string, antithese: string) =>
        `En résumé, notre démarche a permis de comprendre que si ${these.toLowerCase()}, il n'en reste pas moins que ${antithese.toLowerCase()}.`,
      (these: string, antithese: string) =>
        `À l'issue de cet examen, nous retenons que ${these.toLowerCase()}. Néanmoins, la prise en compte de ${antithese.toLowerCase()} est indispensable pour bien juger le sujet.`
    ],
    positionPersonnelle: [
      (notion: string) =>
        `Pour notre part, nous pensons que ${notion.toLowerCase()} prend toute sa valeur quand elle respecte la liberté, la justice et la dignité humaine.`,
      (notion: string) =>
        `En ce qui nous concerne, nous estimons que ${notion.toLowerCase()} ne peut être un but valable que si elle sert le bien et le bonheur des hommes.`,
      (notion: string) =>
        `À notre avis, l'homme ne peut réussir sa vie que s'il utilise ${notion.toLowerCase()} avec sagesse et esprit critique.`
    ],
    ouverture: [
      "Dès lors, une nouvelle question se pose : notre société moderne saura-t-elle garder les valeurs nécessaires pour maîtriser son avenir ?",
      "Ainsi, le sujet ouvre sur une interrogation plus vaste : comment concilier le progrès des techniques avec le respect des êtres humains ?",
      "Finalement, la réflexion philosophique reste une recherche vivante pour aider chaque personne à être plus libre et plus juste."
    ]
  }
};
