import { ArgumentVariant } from "../argumentVariationEngine";

export const PHILO_EPISTEMOLOGY_VARIANTS: Record<string, ArgumentVariant[]> = {
  "verite": [
    {
      id: 0,
      label: "Perspectives Rationalistes & Réalistes : Vérité-Adéquation, Évidence & Certitude",
      perspective: "Vérité-adéquation, Cogito, Démonstration & Idée claire et distincte",
      pedagogicalAdvice: "Le cadre classique idéal pour affirmer l'existence d'une vérité objective accessible à la raison humaine.",
      arguments: [
        {
          statement: "La vérité se définit traditionnellement comme l'adéquation exacte entre la pensée de l'esprit et la réalité de la chose.",
          author: "Thomas d'Aquin",
          work: "Somme théologique",
          quote: "La vérité est la conformité de l'intellect et de la chose (Veritas est adaequatio intellectus et rei).",
          explanation: "Cette définition classique fonde le réalisme philosophique : une affirmation n'est pas vraie simplement parce qu'elle nous séduit ou nous est utile, mais parce que ce que l'esprit énonce correspond rigoureusement à l'état réel des choses dans le monde.",
          category: "Thèse (Vérité-Adéquation & Objectivité)",
          connector: "De prime abord"
        },
        {
          statement: "La certitude première de la vérité réside dans l'évidence lumineuse de la conscience réflexive qui résiste au doute le plus radical.",
          author: "René Descartes",
          work: "Discours de la méthode",
          quote: "Je pense, donc je suis (Cogito, ergo sum) : cette vérité était si ferme et si assurée que toutes les plus extravagantes suppositions des sceptiques n'étaient pas capables de l'ébranler.",
          explanation: "Même si je doute de l'existence du monde extérieur ou de mon corps sensible, le fait même de douter prouve que j'existe en tant qu'être pensant. Cette évidence pure sert de modèle de vérité à toute connaissance : n'admettre pour vrai que ce qui est clair et distinct à l'esprit.",
          category: "Fondement Épistémologique (Le Cogito Cartésien)",
          connector: "En second lieu"
        },
        {
          statement: "La vérité est le critère d'elle-même et dévoile l'erreur comme la lumière chasse l'obscurité.",
          author: "Baruch Spinoza",
          work: "Éthique (Livre II)",
          quote: "De même que la lumière se fait connaître elle-même et fait connaître les ténèbres, ainsi la vérité est la norme d'elle-même et du faux.",
          explanation: "Spinoza réfute l'idée qu'il faudrait une marque extérieure pour reconnaître la vérité. Avoir une idée vraie, c'est savoir avec certitude qu'elle est vraie, car l'esprit participe alors à l'ordre intelligible de la nature sans illusion imaginaire.",
          category: "Norme de la Vérité (Spinoza & La Clarté Intrinsèque)",
          connector: "Par ailleurs"
        },
        {
          statement: "L'allégorie de la caverne illustre que l'accès à la vérité exige une pénible conversion de l'âme loin des illusions sensibles du sens commun.",
          author: "Platon",
          work: "La République (Livre VII)",
          quote: "L'ascension et la contemplation des choses d'en haut est l'élévation de l'âme vers le monde intelligible.",
          explanation: "Les hommes ignorants prennent les ombres projetées sur la paroi pour la réalité ultime. Pour contempler la vérité des Idées pures et du Bien, le philosophe doit briser les chaînes de l'opinion vulgaire et accepter l'effort intellectuel de la dialectique rationnelle.",
          category: "Conversion Philosophique (L'Allégorie de la Caverne)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Sceptiques & Généalogiques : Relativisme, Illusion & Volonté de Puissance",
      perspective: "Scepticisme, Illusion métaphysique & Vérité au service de la vie",
      pedagogicalAdvice: "À mobiliser pour problématiser le dogmatisme et interroger les mobiles cachés de notre désir de vérité.",
      arguments: [
        {
          statement: "La prétendue vérité absolue n'est souvent qu'une illusion poétique oubliée et figée par l'usage social du langage.",
          author: "Friedrich Nietzsche",
          work: "Vérité et mensonge au sens extra-moral",
          quote: "Qu'est-ce donc que la vérité ? Une multitude mouvante de métaphores, de métonymies, d'anthropomorphismes... des illusions dont on a oublié qu'elles le sont.",
          explanation: "Nietzsche soutient que l'homme invente des vérités fixes pour se sécuriser face au chaos du devenir. Les concepts abstraits ne sont que des monnaies effacées dont on a perdu l'empreinte originelle. La volonté de vérité masque en réalité une peur existentielle de la vie.",
          category: "Antithèse (Critique Généalogique de la Vérité)",
          connector: "D'un autre côté"
        },
        {
          statement: "La faiblesse de l'entendement humain et la diversité des coutumes empêchent d'atteindre une certitude absolue et universelle.",
          author: "Michel de Montaigne",
          work: "Essais (Apologie de Raimond Sebond)",
          quote: "Que sais-je ? La vérité et la raison sont communes à un chacun, et ne sont non plus à qui les a dites premièrement qu'à qui les dit après.",
          explanation: "Montaigne rappelle que ce qui est vérité en deçà des Pyrénées est erreur au-delà. Nos sens nous trompent et nos jugements dépendent de nos passions et de notre éducation culturelle. Le sage sceptique suspend son jugement pour préserver sa liberté d'esprit.",
          category: "Scepticisme Humaniste (Relativité des Jugements)",
          connector: "Cependant"
        },
        {
          statement: "La raison humaine est incapable de prouver rationnellement ses principes premiers sans tomber dans le cercle vicieux ou la foi du cœur.",
          author: "Blaise Pascal",
          work: "Pensées",
          quote: "Le cœur a ses raisons que la raison ne connaît point... Nous connaissons la vérité, non seulement par la raison, mais encore par le cœur.",
          explanation: "Pascal montre que la raison géométrique elle-même s'appuie sur des évidences premières qu'elle ne peut démontrer (l'espace, le temps, le mouvement). Vouloir tout prouver par la seule déduction rationnelle est une prétention orgueilleuse vouée à l'échec.",
          category: "Limites de la Raison (Le Cœur & L'Intuition)",
          connector: "Qui plus est"
        },
        {
          statement: "Le pragmatisme redéfinit la vérité non comme une copie passive du réel, mais comme ce qui réussit et enrichit l'action humaine.",
          author: "William James",
          work: "Le Pragmatisme",
          quote: "Le vrai consiste tout simplement dans ce qui est avantageux pour notre pensée, de même que le juste consiste dans ce qui est avantageux pour notre conduite.",
          explanation: "Pour le pragmatisme, une idée n'est pas vraie dans l'abstrait : elle « devient » vraie dans la mesure où elle nous permet d'agir efficacement sur le monde, de résoudre des problèmes concrets et d'orienter fructueusement notre existence.",
          category: "Pragmatisme Épistémologique (Utilité & Vérification)",
          connector: "Pour clore cet axe"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Épistémologiques : Rectification, Falsification & Vérité Scientifique",
      perspective: "Réfutabilité poppérienne, Obstacles épistémologiques & Histoire des sciences",
      pedagogicalAdvice: "Indispensable pour traiter la vérité dans le domaine scientifique et montrer sa nature dynamique et approchée.",
      arguments: [
        {
          statement: "La vérité scientifique ne se caractérise pas par une certitude définitive, mais par sa capacité constante à être mise à l'épreuve et réfutée.",
          author: "Karl Popper",
          work: "La Logique de la découverte scientifique",
          quote: "Le critère de la scientificité d'une théorie réside dans sa falsifiabilité, sa réfutabilité ou sa testabilité.",
          explanation: "Aucune accumulation d'observations concordantes (mille cygnes blancs) ne prouve de façon certaine une loi universelle, car une seule observation contraire (un cygne noir) suffit à la renverser. Une théorie est scientifique tant qu'elle résiste aux tentatives rigoureuses de falsification.",
          category: "Thèse Épistémologique (Critère de Falsifiabilité)",
          connector: "En premier lieu"
        },
        {
          statement: "La science progresse non pas par accumulation passive de données, mais par la rectification continue de ses propres erreurs.",
          author: "Gaston Bachelard",
          work: "La Formation de l'esprit scientifique",
          quote: "La vérité scientifique est une erreur rectifiée... On connaît contre une connaissance antérieure.",
          explanation: "Bachelard montre que l'accès à la vérité exige de surmonter des « obstacles épistémologiques » : l'opinion commune, l'expérience première trompeuse ou les métaphores naïves. Penser scientifiquement, c'est savoir poser des problèmes critiques et déconstruire les certitudes établies.",
          category: "Rectification Rationnelle (Obstacles Épistémologiques)",
          connector: "Dans la même perspective"
        },
        {
          statement: "L'expérimentation scientifique force la nature à répondre aux hypothèses rationnelles préétablies par le chercheur.",
          author: "Claude Bernard",
          work: "Introduction à l'étude de la médecine expérimentale",
          quote: "L'expérimentateur n'est pas celui qui constate seulement des faits, mais celui qui interroge la nature au moyen d'une idée préconçue.",
          explanation: "Claude Bernard théorise la méthode expérimentale (observation, idée hypothétique, expérience, conclusion). L'esprit ne subit pas passivement le réel : il conçoit activement un dispositif de laboratoire pour valider ou infirmer rigoureusement sa théorie.",
          category: "Méthode Expérimentale (Hypothèse & Dispositif)",
          connector: "D'autre part"
        },
        {
          statement: "L'histoire des sciences avance par révolutions paradigmatiques successives qui transforment notre regard sur l'univers.",
          author: "Thomas Kuhn",
          work: "La Structure des révolutions scientifiques",
          quote: "Lorsque les paradigmes changent, le monde lui-même change avec eux.",
          explanation: "Kuhn montre que la recherche scientifique s'exerce dans le cadre d'un paradigme partagé par une communauté. Quand les anomalies s'accumulent, une crise survient menant à une rupture fondamentale (comme le passage de Ptolémée à Galilée, ou de Newton à Einstein).",
          category: "Ruptures Paradigmatiques (Histoire des Sciences)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Éthiques & Politiques : Devoir de Vérité, Courage & Espace Public",
      perspective: "Devoir inconditionnel de vérité, Mensonge d'État & Parlaisse",
      pedagogicalAdvice: "À mobiliser pour les sujets traitant de la vérité face au mensonge, au pouvoir politique et à la responsabilité morale.",
      arguments: [
        {
          statement: "Dire la vérité est un devoir moral inconditionnel envers l'humanité qui ne tolère aucune exception de complaisance.",
          author: "Emmanuel Kant",
          work: "D'un prétendu droit de mentir par humanité",
          quote: "La véracité dans les déclarations que l'on ne peut éviter est le devoir formel de l'homme envers chacun, quelque grand que soit le préjudice qui peut en résulter.",
          explanation: "Kant soutient que tolérer le mensonge, même pour sauver un ami poursuivi par des assassins, anéantit le fondement même du droit et de la confiance réciproque entre les hommes. Dès lors qu'une exception est admise, toute promesse humaine perd sa validité morale.",
          category: "Thèse Morale Déontologique (Véracité Inconditionnelle)",
          connector: "De prime abord"
        },
        {
          statement: "Le mensonge systématique du pouvoir politique détruit le sens même de la réalité commune au sein de la cité.",
          author: "Hannah Arendt",
          work: "Vérité et politique",
          quote: "Le mensonge politique constant n'a pas seulement pour but de faire croire une fausseté, mais d'éradiquer chez les citoyens le sens par lequel nous distinguons le réel de la fiction.",
          explanation: "Arendt avertit que la vérité factuelle est bien plus vulnérable que la vérité rationnelle. Quand les dirigeants falsifient l'histoire et les faits établis, ils brisent le tissu du monde partagé qui rend possible la délibération démocratique et l'action citoyenne.",
          category: "Politique & Espace Public (Vérité de Fait & Mensonge Totalitaire)",
          connector: "Par ailleurs"
        },
        {
          statement: "Le courage de dire la vérité face au pouvoir (le franc-parler) est l'épreuve suprême de l'éthique philosophique.",
          author: "Michel Foucault",
          work: "Le Courage de la vérité (Le gouvernement de soi et des autres II)",
          quote: "La parrêsia est le courage de dire toute la vérité sans masque ni rhétorique au péril de sa propre sécurité.",
          explanation: "Foucault analyse la tradition antique des cyniques et de Socrate. Le philosophe authentique ne cherche pas à plaire aux puissants par de beaux discours mais prend le risque personnel d'énoncer une vérité dérangeante qui exige des gouvernants une transformation morale.",
          category: "Éthique du Sujet (La Parrêsia & Le Franc-Parler)",
          connector: "Toutefois"
        },
        {
          statement: "La vérité politique doit se construire dans un espace de communication libre et débarrassé de toute violence dominatrice.",
          author: "Jürgen Habermas",
          work: "Théorie de l'agir communicationnel",
          quote: "La validité d'une norme ne peut être admise que si elle rencontre l'accord de tous les participants dans une discussion exempte de contrainte.",
          explanation: "Habermas propose une éthique de la discussion : la vérité d'un consensus ne découle ni de la tradition imposée ni de la force d'un chef, mais de la confrontation loyale des meilleurs arguments entre citoyens libres et égaux.",
          category: "Consensus Démocratique (Agir Communicationnel)",
          connector: "Pour terminer"
        }
      ]
    }
  ],

  "technique": [
    {
      id: 0,
      label: "Perspectives Humanistes & Prométhéennes : Maîtrise de la Nature & Émancipation",
      perspective: "Homo faber, Maîtrise du monde & Amélioration des conditions d'existence",
      pedagogicalAdvice: "À mobiliser pour valoriser la technique comme conquête d'humanité et libération face à la précarité naturelle.",
      arguments: [
        {
          statement: "L'outil technique est le prolongement intentionnel de la main humaine qui définit l'homme comme inventeur conscient.",
          author: "Henri Bergson",
          work: "L'Évolution créatrice",
          quote: "Si nous pouvions nous dépouiller de tout orgueil, nous définirions peut-être l'homme non pas comme un être de pensée (Homo sapiens), mais comme un fabriquant d'outils (Homo faber).",
          explanation: "Bergson montre que l'intelligence humaine est originellement ordonnée à la fabrication d'instruments artificiels. Alors que l'animal possède des outils organiques fixes, l'homme crée des outils variés pour agir indéfiniment sur la matière inerte et transformer son milieu.",
          category: "Thèse Anthropologique (Homo Faber & Outil)",
          connector: "De prime abord"
        },
        {
          statement: "La science appliquée à la technique a pour mission de délivrer l'humanité des servitudes physiques de la nature.",
          author: "René Descartes",
          work: "Discours de la méthode (Sixième partie)",
          quote: "Nous rendre comme maîtres et possesseurs de la nature.",
          explanation: "Descartes rompt avec la philosophie contemplative des Anciens. En découvrant les lois mécaniques de la physique, les hommes peuvent concevoir des machines pour soulager la fatigue humaine et perfectionner la médecine afin de préserver la santé corporelle.",
          category: "Projet Prométhéen (Maîtrise & Confort Humain)",
          connector: "En outre"
        },
        {
          statement: "La technique permet à l'humanité de dépasser sa déficience biologique originelle pour s'ériger en souveraine de son destin.",
          author: "Platon",
          work: "Protagoras",
          quote: "Prométhée déroba à Héphaïstos et à Athéna le feu et l'art mécanique pour en faire don aux hommes nus et désarmés.",
          explanation: "Dans le mythe de Prométhée, l'homme est laissé nu et sans défense par Épiméthée face aux fauves carnassiers. Le don du feu et de la technique compense cette faiblesse naturelle et permet aux hommes de fabriquer des vêtements, des armes et de bâtir des cités.",
          category: "Mythe Fondateur (Prométhée & La Prothèse Humaine)",
          connector: "Par ailleurs"
        },
        {
          statement: "Le développement des machines automatiques libère l'ouvrier de la peine brute pour lui permettre de déployer ses facultés spirituelles.",
          author: "Karl Marx",
          work: "Manuscrits de 1844",
          quote: "L'histoire de l'industrie est le livre ouvert des forces humaines essentielles.",
          explanation: "Marx reconnaît la puissance libératrice potentielle du machinisme moderne. Si les moyens de production sont socialisés au lieu d'être confisqués par le profit capitaliste, la technique permettra de réduire le temps de travail contraint pour élargir le temps de la culture.",
          category: "Matérialisme Historique (Forces Productives Émancipatrices)",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 1,
      label: "Perspectives Critiques & Phénoménologiques : Arraisonnement, Aliénation & Menace",
      perspective: "Gestell heideggérien, Démesure technicienne & Aliénation de l'ouvrier",
      pedagogicalAdvice: "Indispensable pour examiner les dangers de la technique devenue fin en soi et le risque de déshumanisation.",
      arguments: [
        {
          statement: "La technique moderne ne se contente plus de fabriquer des objets : elle arraisonne la nature entière comme un stock d'énergie exploitable.",
          author: "Martin Heidegger",
          work: "La Question de la technique",
          quote: "L'essence de la technique moderne réside dans l'arraisonnement (das Gestell) qui somme la nature d'avoir à livrer une énergie qui puisse être accumulée.",
          explanation: "Heidegger distingue la technique artisanale ancienne (qui respectait le dévoilement naturel) de la technoscience contemporaine. Le fleuve n'est plus un paysage admiré mais un potentiel hydroélectrique. Le péril suprême est que l'homme lui-même finisse par être traité comme un stock de ressources humaines manipulables.",
          category: "Antithèse Métaphysique (L'Arraisonnement Heideggérien)",
          connector: "D'un autre côté"
        },
        {
          statement: "La cadence infernale de la machine industrielle asservit le travailleur et détruit son intériorité créatrice.",
          author: "Simone Weil",
          work: "La Condition ouvrière",
          quote: "La machine ne laisse aucune place à la pensée : le travailleur y est dégradé au rang de simple appendice de fer.",
          explanation: "Après avoir travaillé elle-même dans les usines Renault, Simone Weil témoigne que la taylorisation asservit les gestes et l'attention de l'ouvrier à une cadence mécanique insensible, le privant du sentiment de dignité humaine et de toute joie créative.",
          category: "Aliénation Industrielle (La Condition Ouvrière)",
          connector: "Cependant"
        },
        {
          statement: "Le système technicien cesse d'être un moyen au service de l'homme pour devenir un milieu autonome tout-puissant régissant la société.",
          author: "Jacques Ellul",
          work: "Le Système technicien",
          quote: "La technique n'est plus un instrument entre les mains de l'homme : c'est l'homme qui est devenu l'instrument de la technique.",
          explanation: "Ellul dénonce l'illusion du contrôle politique sur la technique. Guidée par le seul critère de l'efficacité maximale, la technique s'auto-développe sans frein moral, réduisant la politique, l'éducation et la culture à de purs impératifs d'adaptation technologique.",
          category: "Critique Sociologique (L'Autonomie du Système Technicien)",
          connector: "Qui plus est"
        },
        {
          statement: "La prolifération d'objets techniques hautement perfectionnés suscite chez l'homme le sentiment humiliant de sa propre infériorité biologique.",
          author: "Günther Anders",
          work: "L'Obsolescence de l'homme",
          quote: "Nous sommes pris de « honte prométhéenne » devant la perfection sans faille des produits que nous avons nous-mêmes fabriqués.",
          explanation: "Anders montre le décalage tragique entre notre capacité technique de fabriquer (pouvant anéantir l'humanité par l'atome) et notre incapacité morale et imaginative de nous représenter les conséquences réelles de nos créations technologiques.",
          category: "Honte Prométhéenne & Obsolescence de l'Humain",
          connector: "Pour terminer cet axe"
        }
      ]
    },
    {
      id: 2,
      label: "Perspectives Éthiques & Prudentielles : Responsabilité & Régulation de l'Avenir",
      perspective: "Principe responsabilité, Heuristique de la peur & Écologie",
      pedagogicalAdvice: "À mobiliser pour les sujets croisant la technique avec l'avenir de la Terre, la responsabilité morale et l'écologie.",
      arguments: [
        {
          statement: "La puissance destructrice inédite de la technoscience exige une éthique nouvelle fondée sur la vulnérabilité de la vie terrestre.",
          author: "Hans Jonas",
          work: "Le Principe responsabilité",
          quote: "Le Prométhée définitivement déchaîné réclame une éthique qui, par des entraves librement consenties, empêche son pouvoir de devenir un malheur pour l'homme.",
          explanation: "Les éthiques traditionnelles ne régissaient que les relations immédiates d'homme à homme. Face au péril écologique mondial, Jonas formule un nouvel impératif : nous devons nous soumettre à une heuristique de la peur pour garantir la survie des générations futures.",
          category: "Thèse Éthique (Le Principe Responsabilité)",
          connector: "En premier lieu"
        },
        {
          statement: "L'objet technique ne doit pas être diabolisé mais compris dans son ontologie propre pour réconcilier l'homme et la machine.",
          author: "Gilbert Simondon",
          work: "Du mode d'existence des objets techniques",
          quote: "La culture s'est constituée en système de défense contre les techniques ; or cette défense se présente comme une défense de l'homme, présupposant que les objets techniques ne contiennent pas de réalité humaine.",
          explanation: "Simondon refuse à la fois la technophobie aveugle et le culte idolâtre de la rentabilité. Un objet technique est un condensé de rationalité humaine. L'homme doit devenir le chef d'orchestre vigilant de ses machines plutôt que leur maître arrogant ou leur esclave craintif.",
          category: "Ontologie de l'Objet Technique (Humanisme Technique)",
          connector: "Dans la même perspective"
        },
        {
          statement: "La maîtrise technique doit s'accompagner d'un contrat naturel révisant notre droit exclusif de propriété sur la Terre.",
          author: "Michel Serres",
          work: "Le Contrat naturel",
          quote: "De maîtres et possesseurs de la nature, nous devons devenir ses partenaires et ses débiteurs vigilants.",
          explanation: "Serres montre que le droit fondé sur le seul contrat social entre êtres humains est désormais obsolète. La Terre réagit à nos pollutions comme un acteur juridique global. Nous devons instaurer un pacte mutuel avec la nature pour sauver l'humanité.",
          category: "Écologie Politique (Le Contrat Naturel)",
          connector: "D'autre part"
        },
        {
          statement: "Les choix technologiques ne doivent pas être abandonnés aux seuls experts mais soumis au débat démocratique éclairé.",
          author: "Jürgen Habermas",
          work: "La Technique et la science comme « idéologie »",
          quote: "Une prise de décision rationnelle sur l'orientation du progrès technique requiert une discussion publique dégagée des intérêts technocratiques.",
          explanation: "Habermas dénonce la technocratie qui présente les avancées industrielles comme des fatalités objectives incontournables. La société démocratique doit se réapproprier les finalités du développement technique par la délibération collective.",
          category: "Délibération Démocratique & Refus de la Technocratie",
          connector: "Enfin"
        }
      ]
    },
    {
      id: 3,
      label: "Perspectives Internationales & Décoloniales : Technique, Souveraineté & Savoirs Endogènes",
      perspective: "Transfert technologique, Souveraineté africaine & Écologie décoloniale",
      pedagogicalAdvice: "À privilégier pour les sujets croisant technique, impérialisme, souveraineté industrielle et savoirs traditionnels.",
      arguments: [
        {
          statement: "La maîtrise de la science et de la technologie moderne est la condition sine qua non de la véritable souveraineté politique de l'Afrique.",
          author: "Marcien Towa",
          work: "L'Idée d'une philosophie négro-africaine",
          quote: "La prise de possession du secret de la puissance occidentale réside dans l'assimilation créatrice de la science et de la technique.",
          explanation: "Towa affirme que l'Afrique ne recouvrera sa dignité et son indépendance effective que si elle s'approprie le noyau dur de la modernité : la rationalité scientifique et la technique industrielle, indispensables pour nourrir ses peuples et affirmer son autonomie.",
          category: "Thèse Décoloniale (Souveraineté Technologique)",
          connector: "De prime abord"
        },
        {
          statement: "La science moderne a souvent invisibilisé les savoirs techniques endogènes qui préservaient l'équilibre écologique des sociétés traditionnelles.",
          author: "Paulin Hountondji",
          work: "Combats pour le sens : un itinéraire africain",
          quote: "Il est impératif de réhabiliter les savoirs endogènes et de les intégrer de manière critique dans la dynamique de la recherche mondiale.",
          explanation: "Hountondji met en garde contre l'extraversion scientifique où le Sud se borne à fournir des données brutes au Nord. La réappropriation critique des techniques locales (agronomie, pharmacopée, métallurgie) est un levier majeur de libération épistémologique.",
          category: "Épistémologie Critique (Savoirs Endogènes)",
          connector: "Par ailleurs"
        },
        {
          statement: "Le développement technique ne doit pas reproduire aveuglément le modèle prédateur occidental mais inventer une modernité sobre et solidaire.",
          author: "Felwine Sarr",
          work: "Afrotopia",
          quote: "Il s'agit d'habiter le monde avec mesure, en articulant les acquis de la technique avec la sagesse ancestrale de la relation au vivant.",
          explanation: "Sarr plaide pour une fécondation mutuelle : l'Afrique contemporaine a l'opportunité historique d'éviter les impasses destructrices du productivisme occidental en concevant des technologies frugales respectueuses des écosystèmes et de la solidarité communautaire.",
          category: "Afrotopia & Nouvelle Pensée du Progrès",
          connector: "Toutefois"
        },
        {
          statement: "L'universalité de la technique ne doit pas se confondre avec l'occidentalisation forcée des modes de vie.",
          author: "Cheikh Anta Diop",
          work: "Civilisation ou Barbarie",
          quote: "L'Afrique doit se réapproprier son passé scientifique pour bâtir avec confiance son avenir technologique.",
          explanation: "Diop rappelle que l'Afrique pharaonique a été le berceau historique de nombreuses sciences appliquées (géométrie, architecture, médecine). Retrouver cette mémoire historique restaure l'assurance créatrice des peuples africains pour dominer les technologies du XXIe siècle.",
          category: "Histoire des Sciences & Mémoire Décoloniale",
          connector: "Pour terminer"
        }
      ]
    }
  ]
};
