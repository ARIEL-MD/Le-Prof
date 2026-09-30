import { PhiloRelationEntry } from "../philoRelationsDatabase";

/**
 * RELATIONS PHILOSOPHIQUES CANONIQUES : INCONSCIENT, LIBERTÉ & RESPONSABILITÉ
 * ============================================================================
 * Traitement rigoureux des sujets classiques du baccalauréat :
 * - "L'idée d'inconscient exclut-elle l'idée de liberté ?"
 * - "L'inconscient est-il une menace pour la liberté ?"
 * - "L'homme est-il responsable malgré son inconscient ?"
 * - "L'inconscient ruine-t-il le libre arbitre ?"
 */
export const PHILO_RELATIONS_INCONSCIENT_LIBERTE: PhiloRelationEntry[] = [
  {
    id: "inconscient-liberte-determinisme",
    label: "L'inconscient et la liberté (Déterminisme psychique vs émancipation lucide)",
    triggerRegex: /(?:l['’]inconscient|inconscient).*?(?:libert|libre\s+arbitre|libre\b)|(?:la\s+libert|libert|libre\s+arbitre|libre\b).*?(?:l['’]inconscient|inconscient)/i,
    concept1: "l'inconscient",
    concept2: "la liberté",
    lexiqueDefinitions: [
      {
        terme: "L'inconscient",
        definition: "Ensemble des pulsions, désirs refoulés et processus psychiques dynamiques qui échappent à la claire conscience du sujet tout en exerçant une influence déterminante sur ses pensées, ses affects et ses conduites (Freud)."
      },
      {
        terme: "La liberté",
        definition: "Faculté d'autodétermination de la volonté par laquelle un sujet choisit et agit de manière éclairée, en étant capable de répondre de ses actes sans être asservi à des nécessités extérieures ou à des pulsions aveugles."
      },
      {
        terme: "Exclut-il / Exclut-elle",
        definition: "Rapport d'incompatibilité radicale et définitive selon lequel l'affirmation ou la réalité de l'un entraîne nécessairement l'impossibilité, la suppression ou la négation absolue de l'autre."
      }
    ],
    reformulationPattern: "Il s'agit de se demander si la découverte d'un déterminisme inconscient ruine irrémédiablement le pouvoir d'autodétermination de la volonté humaine, ou si la prise de conscience de ces forces obscures constitue paradoxalement le point de départ d'une liberté authentique et conquise.",
    tensionPhilosophique: "D'un côté, si les mobiles profonds de nos actes sont régis par des pulsions inconscientes que notre volonté ne contrôle pas, le sentiment de liberté n'est qu'une illusion narcissique naïve ; de l'autre, la démarche psychanalytique et l'exigence morale prouvent que l'inconscient peut être élucidé, ouvrant la voie à une libération lucide de soi-même.",
    introAmorces: {
      definition: "L'inconscient désigne l'ensemble des forces psychiques refoulées qui échappent à la lucidité réflexive, tandis que la liberté se conçoit comme la capacité pour la volonté humaine de se déterminer d'elle-même. Dès lors, si l'homme est secrètement gouverné par des pulsions involontaires qu'il ignore, l'hypothèse de l'inconscient semble priver le sujet de toute maîtrise sur ses propres choix.",
      constat: "Dans l'expérience quotidienne, nous éprouvons spontanément la certitude intime d'être les auteurs souverains de nos décisions. Cependant, le constat de nos lapsus, de nos angoisses inexplicables et de nos contradictions intérieures suggère que des déterminismes psychiques inconscients agissent à notre insu, remettant en cause l'évidence immédiate de notre liberté.",
      citation: {
        auteur: "Sigmund Freud",
        oeuvre: "Une difficulté de la psychanalyse",
        citation: "Le moi n'est pas maître dans sa propre maison.",
        explication: "Freud affirme que la conscience vigilante ne règne pas en souveraine sur le psychisme, mais subit l'influence déterminante de forces inconscientes méconnues.",
        contreConstat: "Toutefois, la cure psychanalytique et la responsabilité éthique refusent de réduire l'homme à une pure marionnette de ses pulsions, affirmant la possibilité d'une réappropriation de soi."
      }
    },
    disambiguation: {
      term: "Inconscient et liberté",
      possibleMeanings: [
        "Sens 1 (Fatalisme psychique) : L'inconscient comme force mécanique aveugle qui anéantit toute possibilité de choix volontaire et de responsabilité.",
        "Sens 2 (Mauvaise foi existentielle) : L'inconscient invoqué comme prétexte commode et alibi pour fuir son angoisse et renoncer à sa liberté (Sartre).",
        "Sens 3 (Condition d'une liberté lucide) : L'inconscient comme obstacle à analyser pour substituer la connaissance critique de soi à l'illusion du libre arbitre immédiat (Freud, Ricœur)."
      ],
      retainedMeaning: "Sens 3 : Articuler déterminisme psychique et émancipation réflexive. Le sujet demande si l'inconscient interdit la liberté ou s'il oblige à passer d'une liberté illusoire à une liberté conquise.",
      justification: "RÈGLE MÉTHODOLOGIQUE ANTI-HORS-SUJET : Ne pas réduire le sujet à un simple exposé dogmatique de la doctrine freudienne. Il faut affronter le problème philosophique de la liberté face au déterminisme."
    },
    problemeCourt: "L’idée d’inconscient exclut-elle l’idée de liberté ?",
    aspect1: "dans quelle mesure l'hypothèse de l'inconscient ruine l'illusion d'une liberté souveraine et transparente à elle-même ?",
    aspect2: "toutefois, l'élucidation critique de l'inconscient ne constitue-t-elle pas le fondement d'une liberté authentique et conquise ?",
    axe1: {
      title: "L'hypothèse de l'inconscient semble exclure la liberté en révélant les déterminismes profonds qui gouvernent le sujet à son insu",
      significance: "l'inconscient inflige une blessure narcissique à l'homme en démontrant que la conscience n'est ni souveraine ni transparente",
      overview: "Affirmer que l'inconscient exclut la liberté implique que la volonté consciente capitule devant des forces psychiques involontaires. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "La découverte de l'inconscient démontre que la conscience est lacunaire et constamment déterminée par des conflits psychiques refoulés.",
          author: "Sigmund Freud",
          work: "Une difficulté de la psychanalyse",
          quote: "Le moi n'est pas maître dans sa propre maison.",
          explanation: "Freud inflige à l'humanité sa troisième grande blessure narcissique : après Copernic et Darwin, la psychanalyse prouve que le Moi conscient n'est qu'une surface fragile, manipulée par les pulsions du Ça et la sévérité du Surmoi.",
          analyseIllustration: "Par rapport au sujet, si nos désirs et nos jugements résultent de pulsions ignorées, la liberté entendue comme maîtrise absolue de soi n'est qu'une croyance naïve que l'inconscient vient précisément détruire."
        },
        {
          statement: "La croyance en un libre arbitre souverain procède uniquement de l'ignorance des causes intérieures qui nous déterminent.",
          author: "Baruch Spinoza",
          work: "Lettre à Schuller (Correspondance)",
          quote: "Les hommes se croient libres pour cette seule cause qu'ils sont conscients de leurs actions et ignorants des causes par lesquelles ils sont déterminés.",
          explanation: "Spinoza montre que l'homme fait partie intégrante de la nature et obéit à un déterminisme universel. La conscience n'enregistre que les effets de ses appétits sans en apercevoir la causalité réelle.",
          analyseIllustration: "Appliqué au problème posé, ce principe montre que l'inconscient psychique constitue le voile causal qui démasque la prétendue liberté immédiate comme un pur mirage de l'amour-propre."
        },
        {
          statement: "Les actes manqués, lapsus et symptômes pathologiques attestent empiriquement de la victoire de l'inconscient sur la volonté délibérée.",
          author: "Sigmund Freud",
          work: "Psychopathologie de la vie quotidienne",
          quote: "L'acte manqué est un acte réussi du point de vue de l'inconscient.",
          explanation: "Dans le trébuchement du langage ou l'oubli involontaire, c'est l'intention refoulée qui triomphe de la volonté affichée du sujet, prouvant l'impuissance relative de la conscience.",
          analyseIllustration: "Cela prouve directement que l'homme n'agit pas toujours selon sa volonté délibérée : l'inconscient s'oppose dans la réalité quotidienne à l'exercice effectif de la liberté."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que l'inconscient semble exclure la liberté en assignant nos actions à des déterminismes pulsionnels invisibles. Toutefois, conclure à l'anéantissement pur et simple de la liberté reviendrait à dissoudre toute responsabilité morale et à transformer l'inconscient en un alibi commode pour justifier nos fautes. Dès lors, cette exclusion apparente ne doit-elle pas être dépassée afin de comprendre comment la lucidité sur l'inconscient permet au contraire d'édifier une liberté véritable ?",
    axe2: {
      title: "Loin d'anéantir la liberté, la reconnaissance de l'inconscient est la condition indispensable pour conquérir une liberté lucide et responsable",
      significance: "l'inconscient n'annule pas la liberté mais oblige à abandonner l'illusion du libre arbitre abstrait pour une autonomie conquise par la connaissance",
      overview: "Soutenir au contraire que l'inconscient n'exclut pas la liberté revient à faire valoir que la connaissance de ses déterminismes est la condition même de l'émancipation. Plusieurs raisons viennent étayer cette réalité.",
      arguments: [
        {
          statement: "Invoquer l'inconscient pour récuser sa liberté relève de la mauvaise foi d'un sujet qui tente de fuir son angoisse et sa responsabilité.",
          author: "Jean-Paul Sartre",
          work: "L'Être et le Néant",
          quote: "L'homme est condamné à être libre.",
          explanation: "Pour Sartre, la conscience humaine est liberté absolue et néantisation ; poser un inconscient réifié qui agirait à notre place constitue une ruse lâche de mauvaise foi pour esquiver la charge écrasante de ses choix.",
          analyseIllustration: "Par rapport à la question posée, l'inconscient ne saurait donc exclure la liberté : prétendre être déterminé par son inconscient est encore un choix libre par lequel l'homme renonce à s'assumer."
        },
        {
          statement: "La psychanalyse n'est pas un fatalisme biologique mais une pratique émancipatrice d'élargissement de la conscience et de maîtrise de soi.",
          author: "Sigmund Freud",
          work: "Nouvelles conférences d'introduction à la psychanalyse",
          quote: "Là où était le Ça, le Moi doit advenir.",
          explanation: "La cure psychanalytique a pour finalité explicite d'affranchir le patient du joug de ses traumatismes refoulés en substituant la lucidité de la raison à l'aveuglement pulsionnel.",
          analyseIllustration: "Au regard de la problématique, l'inconscient n'exclut pas la liberté : il en est le terrain d'épreuve et de conquête, car l'homme ne s'émancipe véritablement qu'en affrontant ce qui le détermine."
        },
        {
          statement: "La liberté humaine authentique ne consiste pas en une indépendance magique mais dans l'appropriation réflexive de son propre désir.",
          author: "Paul Ricœur",
          work: "De l'interprétation. Essai sur Freud",
          quote: "La liberté ne commence pas par elle-même ; elle est une tâche d'appropriation du désir d'exister à travers ses figures symboliques.",
          explanation: "Ricœur souligne que la liberté n'est pas un point de départ instantané mais un travail patient de déchiffrement de ses opacités intérieures, par lequel le sujet accède à une responsabilité mature.",
          analyseIllustration: "Ainsi, l'inconscient et la liberté ne s'excluent pas : ils s'articulent dans une dialectique féconde où la liberté se forge précisément dans l'effort de compréhension et de dépassement de ses ombres."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre analyse, il apparaît que l'inconscient exclut sans conteste l'illusion d'une liberté immédiate, transparente et toute-puissante.",
      reponseDefinitive: "Toutefois, nous affirmons que l'inconscient n'exclut nullement l'exigence ni la possibilité de la liberté humaine : en dissipant le mirage du libre arbitre spontané, il engage le sujet dans la conquête exigeante d'une autonomie lucide.",
      elargissement: "En ce qui nous concerne, nous dirons que la liberté véritable ne consiste pas à ignorer ses déterminismes intérieurs, mais à avoir le courage moral de les élucider pour répondre dignement de son existence."
    }
  },
  {
    id: "inconscient-responsabilite-faute",
    label: "L'inconscient et la responsabilité morale",
    triggerRegex: /(?:l['’]inconscient|inconscient).*?(?:responsab|faute|culpabilit|juger)|(?:responsab|faute|culpabilit|juger).*?(?:l['’]inconscient|inconscient)/i,
    concept1: "l'inconscient",
    concept2: "la responsabilité",
    lexiqueDefinitions: [
      {
        terme: "L'inconscient",
        definition: "Structure psychique dynamique qui échappe à la lucidité réflexive du sujet tout en motivant secrètement ses actes."
      },
      {
        terme: "La responsabilité",
        definition: "Obligation morale et juridique pour un individu de répondre de ses actes, de leurs conséquences et d'en assumer la charge devant sa conscience et devant la société."
      }
    ],
    reformulationPattern: "Il s'agit de se demander si l'existence de pulsions inconscientes exonère l'homme de la culpabilité de ses actes, ou si l'exigence éthique impose à chacun de répondre de ce qu'il accomplit en dépit de ses obscurités intérieures.",
    tensionPhilosophique: "D'un côté, on ne saurait équitablement imputer une faute à un sujet agi par des forces qu'il ignore ; de l'autre, admettre l'inconscient comme excuse universelle ruinerait l'ordre juridique et la dignité morale.",
    introAmorces: {
      definition: "La responsabilité suppose que le sujet soit l'auteur conscient et volontaire de ses actes, tandis que l'inconscient désigne des processus qui lui échappent. Si nos actes procèdent de forces obscures, la responsabilité semble compromise.",
      constat: "Dans la pratique judiciaire et morale, l'accusé invoque parfois son inconscience ou des pulsions irrépressibles pour échapper au châtiment, confrontant la justice à la frontière entre déterminisme psychique et faute imputable.",
      citation: {
        auteur: "Jean-Paul Sartre",
        oeuvre: "L'Être et le Néant",
        citation: "L'homme est condamné à être libre.",
        explication: "Sartre refuse tout déterminisme psychique qui servirait d'excuse à l'abandon de la responsabilité morale.",
        contreConstat: "Toutefois, la psychiatrie moderne et la psychanalyse soulignent la réalité clinique de pathologies où le contrôle conscient est temporairement anéanti."
      }
    },
    disambiguation: {
      term: "Inconscient et responsabilité",
      possibleMeanings: [
        "Sens pénal : Capacité d'imputation juridique et discernement de l'acte au moment des faits.",
        "Sens éthique et existentiel : Capacité pour le sujet moral de s'assumer pleinement et de réparer le tort causé."
      ],
      retainedMeaning: "Sens éthique et philosophique de l'imputabilité morale de l'acte.",
      justification: "Le sujet interroge le fondement moral du devoir de répondre de soi malgré la part d'ombre du psychisme."
    },
    problemeCourt: "L'homme est-il responsable malgré son inconscient ?",
    aspect1: "dans quelle mesure l'inconscient semble atténuer ou suspendre la responsabilité humaine ?",
    aspect2: "toutefois, l'exigence morale n'impose-t-elle pas au sujet de répondre de ce qu'il est et de ce qu'il fait ?",
    axe1: {
      title: "L'inconscient semble fragiliser la responsabilité en dépossédant le sujet de la pleine maîtrise de ses actes",
      significance: "la responsabilité suppose le contrôle conscient et l'intention délibérée que l'inconscient vient relativiser",
      overview: "Affirmer que l'inconscient diminue la responsabilité revient à constater que l'homme ne peut être tenu pour coupable de ce qu'il n'a pas consciemment voulu. Plusieurs arguments permettent de justifier cette idée.",
      arguments: [
        {
          statement: "La justice et la morale exigent le discernement et l'intentionnalité consciente pour imputer une faute.",
          author: "Aristote",
          work: "Éthique à Nicomaque",
          quote: "L'action faite par ignorance n'est pas volontaire.",
          explanation: "Aristote distingue l'acte volontaire, accompli en connaissance de cause, de l'acte involontaire commis sous la contrainte ou dans l'ignorance des circonstances réelles.",
          analyseIllustration: "Si l'inconscient agit comme une force interne insoupçonnée, l'acte relève d'une forme d'ignorance fondamentale qui interdit de condamner l'homme comme s'il avait délibéré sereinement."
        },
        {
          statement: "Les déterminismes pulsionnels inconscients restreignent l'autonomie du sujet moral.",
          author: "Sigmund Freud",
          work: "Introduction à la psychanalyse",
          quote: "Le moi n'est pas maître dans sa propre maison.",
          explanation: "Freud démontre que des névroses et des conduites destructrices échappent totalement à la volonté lucide du sujet.",
          analyseIllustration: "Il paraît dès lors injuste d'exiger une responsabilité absolue d'un individu aux prises avec des forces psychiques pathologiques qu'il ne domine pas."
        },
        {
          statement: "Le déterminisme universel de la nature contredit l'illusion d'une culpabilité métaphysique absolue.",
          author: "Baruch Spinoza",
          work: "Éthique",
          quote: "Il n'y a dans l'esprit aucune volonté absolue ou libre.",
          explanation: "Pour Spinoza, le blâme et l'éloge sont des passions fondées sur l'ignorance des causes qui nous meuvent nécessairement.",
          analyseIllustration: "L'inconscient rappelle la condition naturelle de l'homme, soumis à des nécessités causales qui commandent la compassion plutôt que la vengeance morale."
        }
      ]
    },
    transition: "De ce qui précède, nous retenons que l'inconscient semble faire obstacle à l'imputation directe de la faute en révélant les opacités de la volonté. Toutefois, admettre que l'homme est irresponsable de ses actes conduirait à dissoudre la dignité du sujet et à transformer l'inconscient en un alibi permanent. Dès lors, ne faut-il pas réaffirmer le devoir pour chacun d'assumer ses actes et d'éclairer son inconscient ?",
    axe2: {
      title: "Loin de dédouaner l'homme, la responsabilité morale commande au sujet de s'assumer pleinement et d'élucider ses désirs",
      significance: "la responsabilité ne s'arrête pas aux frontières de la conscience mais s'étend à la totalité de l'existence",
      overview: "Reconnaître la responsabilité morale suppose d'admettre que l'homme est tenu de répondre de ses actes sans se réfugier dans des excuses faciles. Plusieurs raisons viennent étayer cette réalité.",
      arguments: [
        {
          statement: "Se prévaloir de l'inconscient pour esquiver ses fautes relève de la lâcheté existentielle et de la mauvaise foi.",
          author: "Jean-Paul Sartre",
          work: "L'Être et le Néant",
          quote: "L'homme est condamné à être libre.",
          explanation: "Pour Sartre, la psychanalyse freudienne risque de fabriquer une mythologie commode où le sujet se pose en victime innocente d'un monstre intérieur indépendant.",
          analyseIllustration: "L'homme demeure absolument responsable de tout ce qu'il fait, car accepter passivement ses penchants est encore un choix librement consenti."
        },
        {
          statement: "Le sujet a le devoir éthique et pratique de travailler à la connaissance de soi pour maîtriser ses pulsions.",
          author: "Sigmund Freud",
          work: "Nouvelles conférences d'introduction à la psychanalyse",
          quote: "Là où était le Ça, le Moi doit advenir.",
          explanation: "Freud ne prétend nullement que l'homme doive capituler devant le Ça : la psychanalyse est une morale de la lucidité qui exige l'effort continu d'intégration du Moi.",
          analyseIllustration: "L'inconscient ne supprime donc pas la responsabilité : il assigne au sujet la tâche impérative de devenir conscient de ses zones d'ombre pour en répondre."
        },
        {
          statement: "L'impératif moral de la conscience oblige l'homme à se vouloir autonome et garant de ses choix devant la loi universelle.",
          author: "Emmanuel Kant",
          work: "Critique de la raison pratique",
          quote: "Tu dois, donc tu peux.",
          explanation: "Kant démontre que le devoir moral révèle en l'homme une liberté intelligible capable de s'arracher à tous les déterminismes sensibles ou psychologiques.",
          analyseIllustration: "Quelle que soit la force des pulsions inconscientes, la dignité de la personne réside dans son pouvoir de leur résister au nom du respect de la loi morale."
        }
      ]
    },
    conclusion: {
      bilanSynthese: "Au terme de notre réflexion, il est indéniable que l'inconscient complexifie le jugement moral en révélant que l'homme n'est pas transparent à lui-même.",
      reponseDefinitive: "Toutefois, nous affirmons que l'inconscient ne dispense nullement le sujet de sa responsabilité : il lui impose au contraire le devoir plus haut de se connaître pour agir avec lucidité.",
      elargissement: "En ce qui nous concerne, nous dirons que la grandeur morale de l'homme réside dans sa capacité à assumer ses actes sans chercher de faux alibis psychologiques."
    }
  }
];
