import { ArgumentVariant } from "../argumentVariationEngine";

export const PHILO_CULTURE_SOCIETE_VARIANTS: Record<string, ArgumentVariant[]> = {
  "societe": [
    {
      id: 0,
      label: "Perspectives Fondatrices : Animal Politique, Pacte Républicain & Sociabilité",
      perspective: "Sociabilité naturelle, Contrat social & Volonté générale",
      pedagogicalAdvice: "Idéal pour poser la nécessité vitale de la vie en société et la souveraineté de l'intérêt commun.",
      arguments: [
        {
          statement: "L'homme est par essence un animal politique qui ne peut accomplir son humanité que dans la communauté organisée.",
          author: "Aristote",
          work: "La Politique",
          quote: "L'homme est par nature un animal politique... Celui qui ne peut vivre en société, ou qui n'a besoin de rien parce qu'il se suffit à lui-même, est une bête ou un dieu.",
          explanation: "Aristote démontre que la société n'est pas un accident superficiel mais le milieu indispensable à l'exercice de la parole (logos) et de la justice. Isolé, l'individu reste inachevé et barbare ; c'est la cité qui permet le plein épanouissement de ses facultés rationnelles et morales.",
          category: "Thèse (Sociabilité Naturelle)",
          connector: "De prime abord"
        },
        {
          statement: "La société politique légitime repose sur un pacte d'association où la volonté générale garantit l'égalité et la liberté de chacun.",
          author: "Jean-Jacques Rousseau",
          work: "Du contrat social",
          quote: "Chacun de nous met en commun sa personne et toute sa puissance sous la suprême direction de la volonté générale ; et nous recevons en corps chaque membre comme partie indivisible du tout.",
          explanation: "Rousseau résout le problème de la conciliation entre vie collective et liberté : par le contrat social, le citoyen ne se soumet à aucun maître individuel mais à la loi qu'il a lui-même consentie. La société civile transforme l'indépendance sauvage en liberté civique et morale.",
          category: "Fondement Juridique (Pacte d'Association)",
          connector: "En outre"
        },
        {
          statement: "La sociabilité humaine est paradoxale : c'est notre insociable sociabilité qui stimule le progrès et la culture.",
          author: "Emmanuel Kant",
          work: "Idée d'une histoire universelle au point de vue cosmopolitique",
          quote: "L'insociable sociabilité des hommes, c'est-à-dire leur inclination à entrer en société, liée toutefois à une répugnance constante à le faire, qui menace constamment de rompre cette société.",
          explanation: "Kant montre que l'homme a besoin de ses semblables pour développer ses dispositions naturelles, mais aspire en même temps à n'en faire qu'à sa tête. Cette rivalité et cette vanité obligent l'individu à surmonter sa paresse et font naître le génie, les lumières et l'État de droit.",
          category: "Dynamique Dialectique (Insociable Sociabilité)",
          connector: "Par ailleurs"
        },
        {
          statement: "La fin suprême de la société politique est la préservation de la propriété, de la liberté et de la sûreté des individus.",
          author: "John Locke",
          work: "Traité du gouvernement civil",
          quote: "La fin principale pour laquelle les hommes s'unissent en société et se soumettent à un gouvernement est la conservation de leur propriété.",
          explanation: "Locke fonde le libéralisme politique : les hommes ne renoncent pas à leurs droits fondamentaux en entrant dans la société civile. L'État n'est institué que comme un mandataire collectif chargé de protéger la vie, les biens et la liberté naturelle contre les empiétements arbitraires.",
          category: "Perspective Libérale & Droits Fondamentaux",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Critiques : Aliénation Sociale, Conflit de Classes & Domination",
      perspective: "Lutte des classes, Masques sociaux & Déterminismes institutionnels",
      pedagogicalAdvice: "À mobiliser pour déconstruire l'illusion d'une harmonie sociale spontanée et dévoiler les rapports d'oppression matérielle.",
      arguments: [
        {
          statement: "L'histoire de toute société humaine jusqu'à nos jours n'a été que l'histoire de la lutte des classes.",
          author: "Karl Marx et Friedrich Engels",
          work: "Manifeste du parti communiste",
          quote: "L'histoire de toute société jusqu'à nos jours est l'histoire de luttes de classes : homme libre et esclave, patricien et plébéien, baron et serf, maître et compagnon, oppresseurs et opprimés.",
          explanation: "Marx refuse d'idéaliser la société comme un corps harmonieux. Dans le mode de production capitaliste, la bourgeoisie possède les moyens de production et exploite le prolétariat, réduit à vendre sa force de travail. Les lois, la morale et l'État ne font que pérenniser cette domination économique.",
          category: "Thèse Matérialiste (Lutte des Classes)",
          connector: "Toutefois"
        },
        {
          statement: "La vie en société corrompt la bonté originelle de l'homme par l'institution de la propriété et l'amour-propre rivalitaire.",
          author: "Jean-Jacques Rousseau",
          work: "Discours sur l'origine et les fondements de l'inégalité parmi les hommes",
          quote: "Le premier qui, ayant enclos un terrain, s'avisa de dire : Ceci est à moi, et trouva des gens assez simples pour le croire, fut le vrai fondateur de la société civile.",
          explanation: "Pour Rousseau, la naissance de la division du travail et de la propriété privée a transformé l'amour de soi légitime en amour-propre vaniteux. La société corrompue engendre le luxe, l'hypocrisie, la jalousie et la guerre de tous contre tous, nécessitant une refondation démocratique radicale.",
          category: "Critique Généalogique de l'Inégalité",
          connector: "Dans le même sens"
        },
        {
          statement: "Dans l'état de nature sans lois sociales, la vie humaine n'est que peur permanente et guerre généralisée.",
          author: "Thomas Hobbes",
          work: "Léviathan",
          quote: "Dans un tel état, la vie de l'homme est solitaire, indigente, dégoûtante, animale et brève.",
          explanation: "Hobbes rappelle que la société n'est pas le produit de l'amour mutuel mais de la peur rationnelle de la mort violente. L'égalité naturelle des forces entre les hommes produit la méfiance réciproque et la rapine, obligeant la création d'un Léviathan souverain pour imposer l'ordre.",
          category: "Réalisme Politique (La Peur Fondatrice)",
          connector: "D'autre part"
        },
        {
          statement: "L'ordre social reproduit insidieusement la domination à travers la violence symbolique et l'habitus de classe.",
          author: "Pierre Bourdieu",
          work: "La Distinction",
          quote: "La violence symbolique est cette violence qui extorque des soumissions qui ne sont même pas perçues comme telles en s'appuyant sur des croyances collectives.",
          explanation: "Bourdieu montre que la société moderne ne maintient pas l'ordre uniquement par la police, mais en inculquant aux dominés des schémas de pensée et des goûts culturels qui leur font percevoir leur infériorité comme naturelle et légitime.",
          category: "Sociologie Critique Contemporaine",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Sociologiques & Fonctionnelles : Solidarité, Anomie & Fait Social",
      perspective: "Conscience collective, Cohésion sociale & Holisme sociologique",
      pedagogicalAdvice: "Indispensable pour traiter les sujets examinant si l'individu façonne la société ou si la société façonne l'individu.",
      arguments: [
        {
          statement: "Les faits sociaux s'imposent à l'individu de l'extérieur avec une puissance coercitive souveraine.",
          author: "Émile Durkheim",
          work: "Les Règles de la méthode sociologique",
          quote: "Est fait social toute manière d'agir, fixée ou non, susceptible d'exercer sur l'individu une contrainte extérieure.",
          explanation: "Durkheim établit que la société n'est pas une simple somme d'individus juxtaposés mais une réalité sui generis. La langue que nous parlons, les croyances morales que nous professons et les rituels civiques nous préexistent et exercent sur notre conduite une pression déterminante.",
          category: "Holisme Méthodologique",
          connector: "En premier lieu"
        },
        {
          statement: "Le passage de la solidarité mécanique à la solidarité organique permet l'émancipation de l'individualité moderne.",
          author: "Émile Durkheim",
          work: "De la division du travail social",
          quote: "La division du travail social est la source, sinon unique, du moins principale de la solidarité sociale.",
          explanation: "Dans les sociétés traditionnelles, la cohésion repose sur la ressemblance et l'écrasement de l'individu par la conscience collective (solidarité mécanique). Dans les sociétés modernes complexes, la spécialisation des métiers crée une interdépendance fonctionnelle où l'affirmation de la personnalité individuelle enrichit le lien social.",
          category: "Évolution des Liens Sociaux",
          connector: "Aussi"
        },
        {
          statement: "Le don et le contre-don constituent le roc anthropologique sur lequel repose toute alliance sociale véritable.",
          author: "Marcel Mauss",
          work: "Essai sur le don",
          quote: "Donner, recevoir, rendre : c'est là l'obligation constante qui tisse le lien social et conjurent la guerre.",
          explanation: "Mauss démontre que le marché marchand n'a pas inventé le lien humain. La triple obligation de donner, de recevoir et de rendre fonde la confiance mutuelle, transformant des étrangers potentiellement hostiles en partenaires de solidarité et d'honneur partagé.",
          category: "Anthropologie du Lien Social",
          connector: "Par ailleurs"
        },
        {
          statement: "L'anomie sociale et l'effritement des repères collectifs plongent l'individu moderne dans le désarroi existentiel.",
          author: "Émile Durkheim",
          work: "Le Suicide",
          quote: "L'homme ne peut vivre sans être rattaché à un groupe qui le dépasse et le soutient.",
          explanation: "Lorsque les crises économiques ou les bouleversements moraux affaiblissent l'encadrement normatif de la société, les désirs individuels deviennent illimités et insatiables, conduisant à la désespérance. L'individu a un besoin vital d'intégration collective.",
          category: "Diagnostic de l'Anomie",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Politiques, Éthiques & Penseurs Africains : Société Ouverte & Palabre",
      perspective: "Société ouverte, Délibération collective & Sagesse communautaire africaine",
      pedagogicalAdvice: "Particulièrement percutant pour les sujets reliant société, démocratie, individualisme et modèles communautaires africains.",
      arguments: [
        {
          statement: "L'individualisme démocratique menace la société en isolant les citoyens dans la sphère étroite de leurs intérêts privés.",
          author: "Alexis de Tocqueville",
          work: "De la démocratie en Amérique",
          quote: "L'individualisme est un sentiment réfléchi et paisible qui dispose chaque citoyen à s'isoler de la masse de ses semblables.",
          explanation: "Tocqueville avertit que le repli égoïste sur le confort matériel abandonne la gestion des affaires publiques à un despotisme tutélaire doux. La santé d'une société libre exige la participation civique active et la vitalité des associations citoyennes.",
          category: "Critique de l'Individualisme Égoïste",
          connector: "De prime abord"
        },
        {
          statement: "La société ouverte se caractérise par la liberté de critique, la tolérance et le refus du totalitarisme dogmatique.",
          author: "Karl Popper",
          work: "La Société ouverte et ses ennemis",
          quote: "Nous devons planifier pour la liberté, et non seulement pour la sécurité, ne serait-ce que parce que seule la liberté peut rendre la sécurité sûre.",
          explanation: "Popper oppose la société close tribaliste, soumise à des mythes magiques incontestables, à la société ouverte où les institutions peuvent être réformées pacifiquement par le débat rationnel et la confrontation des idées réfutables.",
          category: "Défense de la Société Ouverte",
          connector: "En outre"
        },
        {
          statement: "Dans la pensée philosophique africaine, l'individu ne s'oppose pas à la communauté mais s'y accomplit par la solidarité vitale.",
          author: "Kwasi Wiredu",
          work: "Cultural Universals and Particulars : An African Perspective",
          quote: "Dans la vision africaine du monde, la personne n'est pas un atome solitaire mais un être tissé de relations morales avec ses semblables.",
          explanation: "Wiredu montre que l'éthique communautaire traditionnelle (proche du principe d'Ubuntu) ne nie pas les droits individuels mais enseigne que l'humanité de chacun est inséparable de celle d'autrui. La société n'est pas un fardeau contractuel mais le lieu de la fraternité.",
          category: "Philosophie Africaine de la Communauté",
          connector: "D'un point de vue interculturel"
        },
        {
          statement: "La pratique de l'arbre à palabres prouve que la véritable démocratie repose sur la recherche patiente du consensus collectif.",
          author: "Paulin Hountondji",
          work: "Combats pour le sens",
          quote: "La palabre n'est pas un bavardage futile, mais une procédure rigoureuse de délibération collective visant la réconciliation et le consensus.",
          explanation: "Hountondji et les penseurs de la palabre africaine montrent que la cohésion sociale ne s'obtient pas par l'écrasement de la minorité par un vote mécanique, mais par l'écoute exhaustive de toutes les voix pour restaurer l'harmonie de la communauté.",
          category: "Délibération & Démocratie Consensuelle",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "culture": [
    {
      id: 0,
      label: "Perspectives Fondatrices : Perfectibilité, Humanisation & Triomphe sur l'Animalité",
      perspective: "Arrachement à la nature, Éducation, Morale & Perfectibilité",
      pedagogicalAdvice: "Indispensable pour poser la culture comme le processus universel par lequel l'homme s'arrache à la pure animalité.",
      arguments: [
        {
          statement: "L'homme se distingue radicalement de l'animal par sa perfectibilité indéfinie, qui rend possible la culture et l'histoire.",
          author: "Jean-Jacques Rousseau",
          work: "Discours sur l'origine et les fondements de l'inégalité parmi les hommes",
          quote: "Il y a une autre qualité très spécifique qui les distingue et sur laquelle il ne peut y avoir de contestation, c'est la faculté de se perfectionner.",
          explanation: "Tandis que l'animal est guidé par un instinct immuable qui le rend parfait dès le départ sans jamais pouvoir progresser, l'homme n'a pas d'essence figée. Sa perfectibilité lui permet d'inventer la parole, les techniques, les lois et les arts, c'est-à-dire l'ensemble de la culture.",
          category: "Thèse (La Perfectibilité Humaine)",
          connector: "De prime abord"
        },
        {
          statement: "L'homme ne peut devenir pleinement humain que par l'éducation et la transmission culturelle.",
          author: "Emmanuel Kant",
          work: "Traité de pédagogie",
          quote: "L'homme ne peut devenir homme que par l'éducation. Il n'est que ce que l'éducation fait de lui.",
          explanation: "Kant démontre que la nature ne donne à l'homme que des germes bruts d'humanité. Sans la discipline qui dompte la sauvagerie animale, sans la culture qui développe l'entendement et sans la moralisation qui éduque la volonté, l'individu resterait prisonnier de l'instinct aveugle.",
          category: "Dimension Pédagogique & Morale",
          connector: "En outre"
        },
        {
          statement: "L'homme n'a pas de nature prédéterminée : sa dignité réside dans sa liberté souveraine de s'auto-façonner par la culture.",
          author: "Pic de la Mirandole",
          work: "Discours sur la dignité de l'homme",
          quote: "Tu pourras dégénérer en formes inférieures qui sont des bêtes ; tu pourras, par la décision de ton esprit, être régénéré dans les formes supérieures qui sont divines.",
          explanation: "Le grand penseur de la Renaissance proclame que Dieu n'a assigné à l'homme aucune place fixe dans l'ordre cosmique. L'être humain est son propre sculpteur ; par le savoir, la philosophie et les arts, il s'élève au-dessus de la matérialité pour réaliser sa dignité spirituelle.",
          category: "Humanisme Classique (L'Auto-Création)",
          connector: "Par ailleurs"
        },
        {
          statement: "C'est l'interdit universel de l'inceste qui marque le passage irréversible de l'état de nature à l'état de culture.",
          author: "Claude Lévi-Strauss",
          work: "Les Structures élémentaires de la parenté",
          quote: "La prohibition de l'inceste est le processus par lequel la nature se dépasse elle-même... elle constitue la démarche fondamentale grâce à laquelle s'accomplit le passage de la nature à la culture.",
          explanation: "Lévi-Strauss prouve que l'interdiction de l'inceste est la seule règle à la fois universelle (présente dans toutes les sociétés sans exception) et normative (dépendant d'une règle instituée). En forçant les familles à échanger leurs membres, elle fonde l'alliance sociale et la culture.",
          category: "Fondement Anthropologique (Règle Universelle)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Anthropologiques : Relativisme Culturel, Éthnocentrisme & Égalité des Civilisations",
      perspective: "Déconstruction de l'ethnocentrisme, Pluralisme & Dignité des cultures",
      pedagogicalAdvice: "À mobiliser pour dénoncer le préjugé colonialiste de la « barbarie » et défendre l'égale dignité de toutes les cultures humaines.",
      arguments: [
        {
          statement: "Qualifier un autre peuple de « sauvage » ou de « barbare » ne relève que du préjugé ethnocentrique aveugle.",
          author: "Michel de Montaigne",
          work: "Essais (Des Cannibales)",
          quote: "Chacun appelle barbarie ce qui n'est pas de son usage ; comme de vrai, il semble que nous n'avons d'autre mire de la vérité et de la raison que l'exemple et idée des opinions et usances du pays où nous sommes.",
          explanation: "Dès le XVIe siècle, Montaigne dénonce l'illusion occidentale qui prend ses propres mœurs pour l'étalon universel de la civilisation. Il montre que la prétendue barbarie des peuples amérindiens est souvent bien plus proche de la pureté naturelle que la cruauté raffinée des guerres européennes.",
          category: "Critique de l'Ethnocentrisme",
          connector: "En premier lieu"
        },
        {
          statement: "Le barbare est avant tout l'homme qui croit à la barbarie et refuse de reconnaître l'humanité chez l'autre.",
          author: "Claude Lévi-Strauss",
          work: "Race et Histoire",
          quote: "Le barbare, c'est d'abord l'homme qui croit à la barbarie.",
          explanation: "Lévi-Strauss réfute l'idée d'une hiérarchie linéaire entre civilisations « primitives » et « avancées ». Chaque culture développe une originalité technique, spirituelle ou sociale adaptée à ses défis. Rejeter hors de l'humanité les modes de vie différents est précisément l'attitude barbare par excellence.",
          category: "Pluralisme Anthropologique",
          connector: "Dans le même sens"
        },
        {
          statement: "L'illusion de la supériorité de la civilisation occidentale masque la violence destructrice de son impérialisme.",
          author: "Aimé Césaire",
          work: "Discours sur le colonialisme",
          quote: "Une civilisation qui s'avère incapable de résoudre les problèmes que suscite son fonctionnement est une civilisation décadente. Une civilisation qui choisit de fermer les yeux sur ses problèmes les plus cruciaux est une civilisation atteinte.",
          explanation: "Césaire démontre que le colonialisme n'a pas civilisé l'Afrique mais a ensauvagé et décivilisé l'Europe colonisatrice. En pillant les cultures millénaires sous prétexte de « mission civilisatrice », l'Occident a trahi les valeurs humanistes dont il se réclamait.",
          category: "Critique Anticoloniale & Éthique",
          connector: "D'autre part"
        },
        {
          statement: "La véritable universalité culturelle n'est pas l'uniformisation occidentale mais le « rendez-vous du donner et du recevoir ».",
          author: "Léopold Sédar Senghor",
          work: "Liberté 1 : Négritude et Humanisme",
          quote: "La Négritude est l'ensemble des valeurs culturelles du monde noir... Elle n'est pas racisme, elle est culture ; elle est la part de l'Afrique au Banquet de l'Universel.",
          explanation: "Senghor refuse à la fois l'assimilation servile à la culture du colonisateur et le repli identitaire stérile. La civilisation de l'universel ne peut naître que du métissage fécond et du respect mutuel où chaque continent apporte ses valeurs irremplaçables.",
          category: "Humanisme de la Négritude & Métissage",
          connector: "Pour terminer"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Critiques & Psychanalytiques : Malaise dans la Culture & Aliénation",
      perspective: "Répression des pulsions, Normalisation bourgeoise & Industrie culturelle",
      pedagogicalAdvice: "Essentiel pour analyser le prix psychique et existentiel payé par l'homme pour vivre au sein d'une civilisation normée.",
      arguments: [
        {
          statement: "La culture exige le sacrifice permanent des pulsions humaines, engendrant un inévitable malaise psychique.",
          author: "Sigmund Freud",
          work: "Malaise dans la civilisation (Das Unbehagen in der Kultur)",
          quote: "L'homme civilisé a fait l'échange d'une part de possibilité de bonheur contre une part de sécurité.",
          explanation: "Freud démontre que la société et la morale ne peuvent exister sans réprimer les pulsions érotiques et agressives de l'homme par l'action culpabilisante du Surmoi. Ce refoulement forcé protège la collectivité de la barbarie mais engendre névroses, sentiment inconscient de culpabilité et souffrance intime.",
          category: "Critique Psychanalytique du Malaise",
          connector: "Toutefois"
        },
        {
          statement: "La culture institutionnelle officielle est un déguisement qui masque la décadence des instincts vitaux.",
          author: "Friedrich Nietzsche",
          work: "Crépuscule des idoles",
          quote: "La culture et l'État sont des antagonistes... Tout ce qui est grand au point de vue de la culture est apolitique, voire antipolitique.",
          explanation: "Nietzsche fustige la fausse culture des érudits et des philistins qui domestique les forces créatrices de la vie au profit de la médiocrité bourgeoise et du conformisme étatique. La véritable culture est une création tragique et dionysiaque de valeurs nouvelles par des esprits libres.",
          category: "Critique Généalogique de la Domestication",
          connector: "Sous un autre angle"
        },
        {
          statement: "L'industrie culturelle capitaliste transforme les œuvres de l'esprit en marchandises standardisées abêtissantes.",
          author: "Theodor Adorno et Max Horkheimer",
          work: "La Dialectique de la raison",
          quote: "L'industrie culturelle a pour résultat la fabrication en série d'un individu standardisé, dépouillé de toute spontanéité critique.",
          explanation: "Les penseurs de l'École de Francfort montrent que la culture de masse moderne ne libère pas les peuples mais les divertit pour mieux les soumettre aux impératifs de la consommation. Le divertissement aliénant endort la conscience politique et étouffe la véritable portée subversive de l'art.",
          category: "Théorie Critique & Industrie Culturelle",
          connector: "De surcroît"
        },
        {
          statement: "La culture dominante impose un arbitraire culturel qui légitime la reproduction des privilèges sociaux.",
          author: "Pierre Bourdieu et Jean-Claude Passeron",
          work: "La Reproduction",
          quote: "Toute action pédagogique est objectivement une violence symbolique en tant qu'imposition, par un pouvoir arbitraire, d'un arbitraire culturel.",
          explanation: "La culture transmise par l'école n'est pas neutre : elle valorise les codes linguistiques et les savoirs des classes dominantes, transformant les inégalités sociales de départ en prétendues inégalités de don ou de mérite scolaire.",
          category: "Sociologie de la Domination Culturelle",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Penseurs Africains & Émancipation Décoloniale : Renaissances & Modernité Critique",
      perspective: "Rupture avec l'aliénation coloniale, Révolution épistémique & Modernité africaine",
      pedagogicalAdvice: "Indispensable pour valoriser les philosophes africains du programme dans les sujets sur culture, traditions et développement.",
      arguments: [
        {
          statement: "La véritable émancipation culturelle de l'Afrique passe par la rupture avec l'ethnophilosophie et l'appropriation sans complexe de la rigueur scientifique universelle.",
          author: "Marcien Towa",
          work: "Essai sur la problématique philosophique en Afrique",
          quote: "Pour vaincre l'impérialisme, l'Afrique doit s'approprier le secret de la puissance occidentale, c'est-à-dire la science et la technologie, sans s'enfermer dans un passéisme stérile.",
          explanation: "Towa combat l'illusion qui voudrait réduire la culture africaine à un ensemble de proverbes et de mythes immuables. La culture vivante doit être révolutionnaire, critique et capable d'assimiler les outils de la modernité scientifique pour transformer la réalité matérielle des peuples.",
          category: "Critique de l'Ethnophilosophie",
          connector: "D'emblée"
        },
        {
          statement: "L'aliénation culturelle coloniale a infligé un traumatisme psychologique profond que seule la désaliénation politique et linguistique peut guérir.",
          author: "Frantz Fanon",
          work: "Peau noire, masques blancs",
          quote: "Parler une langue, c'est assumer un monde, c'est porter le poids d'une civilisation.",
          explanation: "Fanon montre que le colonisé a été forcé d'intérioriser un complexe d'infériorité, mesurant sa propre valeur à sa ressemblance avec le colonisateur blanc. La reconquête de la dignité culturelle exige une réappropriation lucide de son histoire et une lutte sans compromis contre les structures raciales.",
          category: "Psychanalyse Décoloniale",
          connector: "En outre"
        },
        {
          statement: "La restauration de la conscience historique africaine est la condition préalable de toute renaissance culturelle.",
          author: "Cheikh Anta Diop",
          work: "Nations nègres et culture",
          quote: "L'Afrique doit se réapproprier son passé pour pouvoir bâtir avec assurance son avenir dans le concert des nations modernes.",
          explanation: "Par ses recherches historiques et linguistiques rigoureuses sur l'Égypte antique, Cheikh Anta Diop a démontré que l'Afrique noire n'est pas entrée tardivement dans l'histoire mais en a été l'un des berceaux fondateurs. Cette vérité historique rend aux peuples africains leur fierté et leur initiative créatrice.",
          category: "Conscience Historique & Renaissance Africaine",
          connector: "Par ailleurs"
        },
        {
          statement: "L'Afrique ne doit ni s'enfermer dans un passéisme immobile ni se dissoudre dans l'occidentalisation aveugle, mais inventer une synthèse souveraine.",
          author: "Cheikh Hamidou Kane",
          work: "L'Aventure ambiguë",
          quote: "Ce qu'ils apprennent vaut-il ce qu'ils oublient ?... Il nous faut apprendre à lier le bois au bois pour faire un édifice où l'âme puisse habiter.",
          explanation: "À travers le déchirement tragique de Samba Diallo, Cheikh Hamidou Kane formule le grand dilemme culturel de l'Afrique contemporaine : comment s'ouvrir à l'efficacité technique occidentale sans perdre la sève spirituelle et communautaire des traditions ancestrales.",
          category: "Le Défi de la Double Culture",
          connector: "Pour terminer"
        }
      ]
    }
  ]
};
