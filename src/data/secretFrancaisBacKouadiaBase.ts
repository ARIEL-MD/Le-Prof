// Base académique intégrale issue de l'ouvrage d'excellence :
// "SECRET FRANÇAIS BAC" par KOUADIA NAHOUNOU FÉLIX (2e - 1ère - Tle BAC Toutes Séries)
// Couvre la Dissertation littéraire (plans, sujets rédigés, citations), 
// le Commentaire composé (fond-forme, indices, sujets rédigés) 
// et le Résumé de texte avec Production écrite (étayer / réfuter).

export interface SecretFrancaisSubject {
  id: string;
  category: "dissertation" | "commentaire_compose" | "resume_production_ecrite";
  title: string;
  authorOrSource: string;
  work?: string;
  themeOrGenre: string;
  statement: string;
  planType?: "dialectique" | "inventaire" | "comparatif" | "analytique" | "etayer" | "refuter";
  problematique?: string;
  introduction: {
    amorce: string;
    citationEtExplication: string;
    problematique: string;
    annoncePlan: string;
    fullText: string;
  };
  developpement: {
    parties: {
      titre: string;
      sousParties: {
        titre: string;
        argument: string;
        explication: string;
        exemplesEtCitations: string[];
      }[];
      transition?: string;
      fullText: string;
    }[];
    fullText: string;
  };
  conclusion: {
    bilan: string;
    jugement: string;
    ouverture: string;
    fullText: string;
  };
  keywords: string[];
}

export const SECRET_FRANCAIS_KOUADIA_SUBJECTS: SecretFrancaisSubject[] = [
  // =========================================================================
  // 1. DISSERTATION : SUJET 1 — L'EFFET DE LA LITTÉRATURE SUR L'ÂME
  // =========================================================================
  {
    id: "secret-dis-01-deforme-ame",
    category: "dissertation",
    title: "Dissertation : « Je n'aime pas la littérature parce qu'elle déforme l'âme »",
    authorOrSource: "Un jeune homme / Sujet d'examen Baccalauréat",
    themeOrGenre: "Effets et fonctions de la littérature sur le lecteur",
    statement: "Un jeune homme affirme : « Je n'aime pas la littérature parce qu'elle déforme l'âme ». Qu'en pensez-vous ?",
    planType: "dialectique",
    problematique: "Dans quelle mesure l'expérience littéraire risque-t-elle de désorienter le lecteur, alors même qu'elle constitue par essence un puissant instrument d'éveil critique et d'édification humaine ?",
    introduction: {
      amorce: "Depuis l'Antiquité, une tradition unanime accorde à la littérature une vertu formatrice et civilisatrice irremplaçable sur l'esprit humain.",
      citationEtExplication: "C'est donc avec une vive surprise que l'on accueille le jugement sans appel de ce jeune homme : « Je n'aime pas la littérature parce qu'elle déforme l'âme ». L'auteur de ce réquisitoire accuse l'expérience littéraire d'exercer une influence néfaste et pernicieuse sur la sensibilité et la conduite morale du lecteur.",
      problematique: "Dès lors, quel est le véritable effet de la littérature sur la personnalité du lecteur : dans quelle mesure le livre élève-t-il la conscience humaine au lieu d'altérer le jugement moral ?",
      annoncePlan: "Il conviendra dans un premier temps d'examiner les griefs qui incitent à redouter les dérives morales de la fiction, avant de mettre en évidence dans un second temps la fonction éducatrice, émancipatrice et humaniste de la lecture.",
      fullText: `Depuis l'Antiquité, une tradition humaniste quasi unanime accorde à la littérature un rôle fondamental dans la formation intellectuelle et morale de l'individu. C'est donc avec une légitime surprise que l'on reçoit l'accusation tranchée de ce jeune homme qui confesse : « Je n'aime pas la littérature parce qu'elle déforme l'âme ». Pour ce détracteur, le commerce des livres altérerait la pureté de la conscience, corromprait les mœurs et sèmerait le trouble dans l'esprit. Dès lors, quel est le véritable impact de la littérature sur la personnalité du lecteur : dans quelle mesure égare-t-elle l'individu dans des mirages pernicieux, alors qu'elle constitue un levier privilégié d'éveil critique et d'affermissement intérieur ? Il conviendra d'examiner d'abord les raisons qui peuvent donner crédit à cette mise en garde contre les dangers de la fiction, avant de montrer combien la littérature instruit, éclaire et libère l'âme humaine.`
    },
    developpement: {
      parties: [
        {
          titre: "I. Les dérives potentielles de la littérature : quand la fiction déforme le rapport au réel",
          sousParties: [
            {
              titre: "1. L'illusion romanesque et le refus du réel",
              argument: "La littérature berce d'illusions candides les jeunes esprits et suscite des attentes chimériques face à l'existence.",
              explication: "En idéalisant les sentiments et les destinées, le roman transmet une vision enchanteresse qui rend l'individu inadapté aux exigences prosaïques du quotidien.",
              exemplesEtCitations: ["Dans 'Une Vie' de Guy de Maupassant, l'héroïne Jeanne, nourrie de romans sentimentaux au couvent, sombre dans le désenchantement absolu dès qu'elle se heurte à la médiocrité de son mariage avec Julien de Lamare.", "Madame Bovary de Flaubert incarne le bovarysme : le drame d'une âme corrompue par les fictions sentimentales."]
            },
            {
              titre: "2. La complaisance dans la violence et la dépravation morale",
              argument: "Certaines œuvres complaisantes légitiment la révolte destructrice ou exposent des scènes choquantes qui émoussent le sens moral.",
              explication: "La peinture crue des vices ou l'apologie de la subversion peut inciter le lecteur influençable à braver l'ordre social et éthique.",
              exemplesEtCitations: ["La révolte sanguinaire et les destructions d'usines dans 'Germinal' d'Émile Zola peuvent être reçues comme une apothéose de la violence aveugle.", "Dans 'Les Frasques d'Ebinto' d'Amadou Koné, la transgression passionnelle conduit à la déchéance morale et au mépris des conventions."]
            },
            {
              titre: "3. La séduction de l'immoralité et l'inadaptation sociale",
              argument: "La littérature présente parfois des scélérats fascinants qui brouillent la frontière entre vertu et turpitude.",
              explication: "Le talent de l'écrivain peut rendre attachant des personnages profondément cyniques ou dénués de scrupules.",
              exemplesEtCitations: ["Dans 'L'Étrange destin de Wangrin' d'Amadou Hampâté Bâ, le lecteur s'émerveille des ruses malhonnêtes et des escroqueries géniales du héros.", "Dans 'L'Étranger' de Camus, l'indifférence glaciale de Meursault devant la mort de sa mère et son crime heurte le sens commun."]
            }
          ],
          transition: "Toutefois, ces dérives ne condamnent pas la littérature en elle-même, mais seulement les lectures naïves ou dévoyées qui confondent la fiction avec un guide littéral de conduite. N'est-il pas évident que la littérature a avant tout pour mission d'éveiller et d'édifier l'âme ?",
          fullText: `Il serait injuste d'écarter d'un revers de main le désarroi du jeune homme, tant il est vrai que certaines fictions peuvent exercer un ascendant troublant sur des consciences fragiles. D'abord, la littérature court le risque de bercer le lecteur d'illusions trompeuses en lui masquant la dureté du monde. C'est le drame universel du bovarysme : dans 'Une Vie' de Maupassant, Jeanne, élevée dans des lectures romantiques éthérées, est incapable d'affronter la vulgarité et l'égoïsme de son époux, sombrant dans une mélancolie destructrice. Ensuite, la peinture audacieuse des passions et de la violence peut pervertir la sensibilité civique : la férocité de la grève des mineurs dans 'Germinal' de Zola frise la justification de la rage destructrice. Enfin, le génie stylistique de certains auteurs pare parfois le vice d'un éclat séduisant : sous la plume d'Amadou Hampâté Bâ, l'escroc Wangrin ('L'Étrange destin de Wangrin') subjugue le lecteur par son habileté criminelle, au point de faire oublier le caractère répréhensible de ses forfaits.`
        },
        {
          titre: "II. La littérature comme école de lucidité, d'affermissement moral et d'humanisme",
          sousParties: [
            {
              titre: "1. La libération des préjugés et l'ouverture aux autres cultures",
              argument: "Loin d'atrophier l'âme, la lecture brise l'ethnocentrisme et développe la tolérance universelle.",
              explication: "En faisant voyager le lecteur dans d'autres univers mentaux, le livre enseigne le respect des différences et la relativité des coutumes.",
              exemplesEtCitations: ["Diderot dans le 'Supplément au voyage de Bougainville' déconstruit les préjugés moraux et religieux des Européens face à la société tahitienne.", "Montesquieu dans 'Les Lettres persanes' use du regard étranger d'Usbek et Rica pour critiquer les travers de la France monarchique."]
            },
            {
              titre: "2. L'affinement du sens critique et la lucidité existentielle",
              argument: "La fréquentation des grands textes aiguise le discernement et arme le citoyen contre les dogmatismes.",
              explication: "L'écrivain engagé refuse la soumission et fournit les concepts indispensables pour démasquer l'injustice.",
              exemplesEtCitations: ["Aimé Césaire dans le 'Discours sur le colonialisme' et le 'Cahier d'un retour au pays natal' démasque la barbarie cachée sous le masque de la 'mission civilisatrice'.", "Cheikh Hamidou Kane dans 'L'Aventure ambiguë' met en scène la crise spirituelle de Samba Diallo pour forcer le lecteur à penser l'arrachement culturel."]
            },
            {
              titre: "3. La purgation des passions et la catharsis morale",
              argument: "Le spectacle des déchirements tragiques purifie le cœur de ses pulsions destructrices.",
              explication: "En observant le châtiment des démesures humaines sur la scène, le lecteur se détourne du mal et apprend la noblesse de cœur.",
              exemplesEtCitations: ["Corneille dans 'Polyeucte' et 'Le Cid' célèbre le triomphe du devoir et de la dignité sur les caprices égoïstes.", "La fable 'La cigale et la fourmi' de La Fontaine transmet avec pédagogie l'exigence de la prévoyance et de l'effort."]
            }
          ],
          transition: "En vérité, comme le soulignait Voltaire, ce ne sont pas les livres qui égarent les esprits, mais l'ignorance et le manque de culture.",
          fullText: `Cependant, borner la littérature à ses mauvais usages revient à méconnaître sa vocation régénératrice. La littérature est en vérité le plus formidable instrument de libération spirituelle dont dispose l'humanité. En premier lieu, elle guérit l'âme du poison des préjugés : en lisant les 'Lettres persanes' de Montesquieu ou le 'Supplément au voyage de Bougainville' de Diderot, le lecteur découvre la contingence de ses propres certitudes et s'ouvre à l'altérité fraternelle. En second lieu, elle fortifie le sens critique et la lucidité civique. Les poètes de la Négritude, à l'instar d'Aimé Césaire et de David Diop, ont pulvérisé la mystification coloniale en rendant aux opprimés la fierté de leur identité. Enfin, elle opère une véritable catharsis : la tragédie classique et le roman d'initiation épurent l'âme en lui montrant le coût du renoncement à soi et la grandeur du sacrifice généreux. Loin de déformer l'âme, le livre lui donne sa véritable dimension.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "Si une fréquentation superficielle ou immature de la fiction peut momentanément bercer d'illusions, la véritable littérature constitue une nourriture irremplaçable pour l'intelligence et la sensibilité.",
      jugement: "Condamner la littérature sous prétexte qu'elle déforme l'âme procède d'un contresens : c'est confondre le reflet des tourments du monde avec leur cause.",
      ouverture: "N'est-ce pas ce qu'exprimait magistralement Voltaire lorsqu'il affirmait : « Les lettres nourrissent l'âme, la rectifient, la consolent » ?",
      fullText: `Au terme de notre analyse, il apparaît clairement que la réprobation portée par le jeune homme ne concerne qu'une lecture dévoyée ou passive des textes. Si la fiction peut désorienter ceux qui la prennent pour une copie conforme du réel, elle demeure pour le lecteur averti une incomparable école de grandeur morale, d'acuité intellectuelle et de tolérance. Bien loin d'atrophier ou de déformer l'âme, la littérature l'enrichit en lui offrant le spectacle universel de la condition humaine. C'est pourquoi Voltaire avait mille fois raison de proclamer : « Les lettres nourrissent l'âme, la rectifient, la consolent » ; sans elles, l'homme serait condamné à la solitude muette de l'ignorance.`
    },
    keywords: ["je n'aime pas la littérature", "déforme l'âme", "maupassant", "zola", "bovarysme", "césaire", "voltaire", "dissertation littéraire"]
  },

  // =========================================================================
  // 2. DISSERTATION : SUJET 2 — L'ART POUR L'ART VS LITTÉRATURE ENGAGÉE
  // =========================================================================
  {
    id: "secret-dis-02-ecrire-art-non-bien",
    category: "dissertation",
    title: "Dissertation : « Écrire, ce n'est pas faire du bien, c'est faire de l'art »",
    authorOrSource: "Un auteur esthète / Sujet Baccalauréat",
    themeOrGenre: "Finalités de l'art : Esthétisme (L'Art pour l'art) et Engagement éthique",
    statement: "À ceux qui lui reprochaient son indifférence aux problèmes de son temps, un auteur a répondu : « Écrire, ce n’est pas faire du bien, c’est faire de l’art ». En prenant appui sur des œuvres que vous connaissez bien, vous direz comment vous comprenez cette opinion et si vous la partagez.",
    planType: "dialectique",
    problematique: "La création littéraire doit-elle s'isoler dans la pure recherche de la perfection esthétique, alors que sa plénitude s'accomplit lorsqu'elle met la beauté formelle au service de la condition humaine ?",
    introduction: {
      amorce: "La question des finalités de l'écriture divise profondément l'histoire des lettres : l'écrivain doit-il être un apôtre engagé ou un artisan jaloux de la pureté du beau ?",
      citationEtExplication: "C'est en récusant tout devoir moral qu'un auteur rétorque à ses détracteurs : « Écrire, ce n'est pas faire du bien, c'est faire de l'art ». Par cet aphorisme tranchant, il récuse l'utilitarisme littéraire et affirme que la valeur d'une œuvre réside exclusivement dans sa perfection formelle et sa gratuité esthétique.",
      problematique: "Dès lors, comment la création littéraire parvient-elle à concilier la souveraineté du beau formel avec l'exigence morale au service de la condition humaine ?",
      annoncePlan: "Après avoir mis en lumière les exigences de la pureté esthétique prônée par les partisans de l'art pour l'art, nous démontrerons que la littérature atteint son apogée lorsqu'elle allie la beauté de la forme au combat pour la dignité des hommes.",
      fullText: `La vocation de la création littéraire est au cœur de débats séculaires : l'écrivain doit-il mettre sa plume au service des luttes de sa communauté ou cultiver l'indépendance souveraine de son art ? C'est pour couper court aux sommations militantes qu'un auteur a répliqué : « Écrire, ce n'est pas faire du bien, c'est faire de l'art ». Selon cette perspective formaliste, la littérature trahirait sa nature intrinsèque dès lors qu'elle prétendrait corriger la société ou prêcher la morale. Dès lors, le souci esthétique exige-t-il nécessairement le désengagement face aux tragédies de l'époque, sachant que la perfection formelle constitue le véhicule privilégié d'une parole responsable et libératrice ? Nous analyserons en premier lieu les fondements de la doctrine de l'art pur, avant d'établir en second lieu que la grande littérature sait indissolublement conjoindre l'utile et l'agréable.`
    },
    developpement: {
      parties: [
        {
          titre: "I. L'exigence de la pureté esthétique : écrire pour la souveraineté du Beau",
          sousParties: [
            {
              titre: "1. Le rejet de l'utilitarisme et de la laideur du moralisme",
              argument: "Pour les partisans de l'art pur, toute visée utilitaire dégrade la littérature en propagande vulgaire.",
              explication: "Lorsque l'auteur subordonne son écriture à une cause politique ou à un catéchisme moral, il sacrifie l'harmonie du verbe aux impératifs du message.",
              exemplesEtCitations: ["Théophile Gautier dans la préface de 'Mademoiselle de Maupin' et de ses 'Poésies' : « Tout ce qui est utile est laid », « L'art c'est la liberté, le luxe, l'efflorescence ».", "André Gide met en garde : « C'est avec les beaux sentiments qu'on fait de la mauvaise littérature ».", "Tidiane Dem admet dans la préface de 'Masséni' que le souci documentaire a nui à la qualité esthétique de son texte."]
            },
            {
              titre: "2. Le culte du travail formel et l'orfèvrerie poétique",
              argument: "La beauté d'une œuvre ne réside pas dans son sujet, mais dans la rigueur souveraine de son écriture.",
              explication: "L'artiste doit ciseler le langage comme un sculpteur taille le marbre, recherchant des sonorités et des rythmes parfaits.",
              exemplesEtCitations: ["Gautier dans 'Émaux et Camées' : « Sculpte, lime, cisèle / Que ton rêve flottant / Se scelle / Dans le bloc résistant ! ».", "Gustave Flaubert écrivant à Louise Colet (1852) rêve d'écrire « un livre sur rien, un livre sans attache extérieure, qui se tiendrait de lui-même par la force interne de son style ».", "Le Parnasse de Leconte de Lisle rejetant le lyrisme personnel et politique pour la splendeur des 'Poèmes antiques'."]
            }
          ],
          transition: "Néanmoins, peut-on réduire l'écrivain à un joaillier de mots indifférent aux larmes de ses semblables ? Coupé des angoisses de son temps, l'art ne risque-t-il pas de sombrer dans un formalisme stérile ?",
          fullText: `La revendication de l'autonomie de l'art s'appuie sur une tradition rigoureuse qui refuse d'avilir la création littéraire en instrument pédagogique. Pour Théophile Gautier et le mouvement parnassien, dès qu'une chose devient utile, elle cesse d'être belle : l'art véritable est affranchi de toute servitude morale. André Gide renchérira avec perspicacité en rappelant que « c'est avec les beaux sentiments qu'on fait de la mauvaise littérature » : le roman à thèse et la poésie édifiante produisent trop souvent des œuvres simplistes où la complexité humaine est sacrifiée à la démonstration vertueuse. De surcroît, la grandeur littéraire réside dans le labeur héroïque du style, ce que Flaubert nommait « les affres du style » : trouver le mot juste, agencer les cadences, ciseler le vers comme un bijou précieux (« Sculpte, lime, cisèle » ordonne Gautier). Pour l'esthète, le salut de l'art réside dans son immunité contre le bruit du monde.`
        },
        {
          titre: "II. La réconciliation de l'art et de l'action : le Beau comme incarnation du Bien",
          sousParties: [
            {
              titre: "1. La responsabilité inéluctable de l'écrivain dans la cité",
              argument: "L'écrivain est un contemporain solidaire de ses frères ; il ne peut contempler passivement la barbarie.",
              explication: "Puisque les mots sont des pistolets chargés selon l'expression sartrienne, le silence de l'artiste face à l'injustice équivaut à une complicité coupable.",
              exemplesEtCitations: ["Jean-Paul Sartre dans 'Qu'est-ce que la littérature ?' : « La fonction de l'écrivain est de faire en sorte que nul ne puisse ignorer le monde et que nul ne puisse s'en dire innocent ».", "Wole Soyinka : « La plume ne doit plus seulement servir à écrire de belles phrases, mais aussi à faire connaître un pays, un continent aux prises avec son passé, son présent et son avenir »."]
            },
            {
              titre: "2. Le souffle esthétique décuple l'efficacité du combat",
              argument: "Le militantisme le plus ardent n'est nullement incompatible avec la perfection stylistique : la beauté poétise la lutte et grave la vérité dans les cœurs.",
              explication: "Une œuvre engagée n'atteint son but que si la forme sublime le message et transporte l'émotion du lecteur.",
              exemplesEtCitations: ["René Depestre dans 'Minerai noir' : « On se tourna vers le fleuve musculaire de l'Afrique pour assurer la relève du désespoir ».", "Émile Zola dans 'L'Assommoir' et 'Germinal' confère une dimension épique et poétique grandiose à la misère ouvrière.", "David Diop dans 'Coups de pilon' ('Les Vautours', 'Afrique') marie une violence dénonciatrice fulgurante à des allégories inoubliables."]
            }
          ],
          transition: "Ainsi se démontre que l'opposition entre faire du bien et faire de l'art est un faux dilemme.",
          fullText: `Cependant, refuser d'intervenir dans les tourments de l'humanité au nom de la beauté formelle relève d'un égoïsme insoutenable, en particulier sur une terre africaine meurtrie par les épreuves. Comme le formule Sartre avec autorité, l'écrivain vit dans son époque et tout choix esthétique est un acte de responsabilité : se taire devant l'oppression, c'est cautionner les bourreaux. Loin de s'exclure, l'engagement et l'esthétique s'enrichissent mutuellement. Les chefs-d'œuvre de la Négritude — d'Aimé Césaire ('Cahier d'un retour au pays natal') à David Diop ('Coups de pilon') — prouvent avec éclat que la véhémence politique trouve dans les métaphores fulgurantes et le rythme incantatoire une puissance démultipliée. Lorsque René Depestre évoque « le fleuve musculaire de l'Afrique », la recherche du beau devient l'épée même de la dignité humaine.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "L'affirmation d'un divorce absolu entre l'art et l'éthique ne rend compte que d'une vision partielle de la littérature.",
      jugement: "La littérature n'a pas à renoncer à la beauté pour défendre la justice ; au contraire, c'est par l'exigence suprême de sa forme qu'elle rend immortel le combat pour l'émancipation des hommes.",
      ouverture: "La véritable réussite littéraire ne réside-t-elle pas dans cette synthèse idéale où, pour reprendre la formule classique d'Horace, l'écrivain réussit à 'joindre l'utile à l'agréable' ?",
      fullText: `En définitive, proclamer qu'écrire ne consiste qu'à faire de l'art sans faire de bien constitue une provocation formaliste excessive. Si l'artiste ne doit jamais sacrifier les lois de son art à un prêche moralisateur indigent, il ne saurait pour autant s'enfermer dans une tour d'ivoire insensible. Les sommets de la littérature universelle et africaine démontrent que la beauté n'est jamais plus éclatante que lorsqu'elle se fait la voix des sans-voix. Écrire, c'est faire de l'art pour rendre hommage au bien, affirmant ainsi la dignité inaltérable de l'être humain.`
    },
    keywords: ["ecrire ce n'est pas faire du bien", "faire de l'art", "théophile gautier", "art pour l'art", "sartre", "cesaire", "depestre", "dissertation littéraire"]
  },

  // =========================================================================
  // 3. DISSERTATION : SUJET 3 — L'ÉMOTION COMME SEULE RAISON D'ÊTRE
  // =========================================================================
  {
    id: "secret-dis-03-emotion-seule-raison",
    category: "dissertation",
    title: "Dissertation : « L'émotion est-elle la seule raison d'être de la littérature ? » (Maxime Gorki)",
    authorOrSource: "Maxime Gorki / Sujet Baccalauréat",
    themeOrGenre: "Le pouvoir émotionnel et la mission cognitive de la littérature",
    statement: "Maxime Gorki, écrivain russe, affirme : « Quand un écrivain crée un bon livre, il touche le cœur avec des mots. À sa volonté, le cœur gémit, se lamente, se remplit de colère ou au contraire de sérénité et de joie ». Après avoir expliqué la pensée de l’auteur, vous vous demanderez si l’émotion est la seule raison d’être de la littérature.",
    planType: "dialectique",
    problematique: "Si l'aptitude à remuer la sensibilité constitue la marque indiscutable d'un grand livre, dans quelle mesure la littérature dépasse-t-elle la seule émotion pour éclairer l'intelligence et armer le jugement moral ?",
    introduction: {
      amorce: "Chaque lecteur a fait l'expérience intime d'un livre qui fait frissonner, pleurer ou exulter au fil des pages.",
      citationEtExplication: "C'est ce pouvoir envoûtant que consacre Maxime Gorki lorsqu'il écrit : « Quand un écrivain crée un bon livre, il touche le cœur avec des mots. À sa volonté, le cœur gémit, se lamente, se remplit de colère ou au contraire de sérénité et de joie ». L'auteur russe définit le grand livre comme une alchimie affective capable de moduler souverainement les émois de l'âme.",
      problematique: "Mais comment la littérature dépasse-t-elle le transport des passions pour accomplir sa mission d'instruire, d'édifier et d'émanciper les consciences ?",
      annoncePlan: "Nous verrons d'abord en quoi l'émotion constitue un ressort capital de la création littéraire, avant de montrer que la littérature est tout autant une source irremplaçable d'apprentissage intellectuel et d'engagement éthique.",
      fullText: `Lorsqu'un lecteur juge un ouvrage mémorable, c'est presque toujours en raison des émotions intenses qu'il a éprouvées au contact des personnages et de l'intrigue. C'est à ce privilège que Maxime Gorki reconnaît l'œuvre de génie : « Quand un écrivain crée un bon livre, il touche le cœur avec des mots. À sa volonté, le cœur gémit, se lamente, se remplit de colère ou au contraire de sérénité et de joie ». L'écrivain apparaît ici comme un magicien de la sensibilité, maître souverain de nos tourments et de nos enthousiasmes. Cependant, l'émotion est-elle la fin unique de la littérature ? Le livre ne vise-t-il pas également à éveiller l'intellect et à guider l'homme dans la cité ? Il s'agira d'étudier en premier lieu la puissance émotionnelle et cathartique du texte littéraire, puis de mettre en lumière sa dimension cognitive, morale et sociale.`
    },
    developpement: {
      parties: [
        {
          titre: "I. L'empire du cœur : la littérature comme création souveraine d'émotions",
          sousParties: [
            {
              titre: "1. Le pouvoir de troubler l'âme : tristesse et colère",
              argument: "L'écrivain plonge le lecteur dans la douleur ou l'indignation par l'identification pathétique aux épreuves des personnages.",
              explication: "Le lecteur partage les angoisses du protagoniste et éprouve une pitié sincère devant son calvaire.",
              exemplesEtCitations: ["L'échec tragique de la grève d'Étienne Lantier dans 'Germinal' de Zola déchire le cœur du lecteur acquis à la cause ouvrière.", "Dans 'La carte d'identité' de Jean-Marie Adiaffi, les humiliations insoutenables infligées au prince Mélédouman suscitent la sainte colère du lecteur contre l'arrogance coloniale."]
            },
            {
              titre: "2. Le pouvoir d'apaiser l'âme : sérénité et jubilation esthétique",
              argument: "La littérature console, guérit les blessures secrètes et fait naître une joie rayonnante par la grâce du verbe.",
              explication: "La mélodie poétique et la victoire du droit sur le mal réconcilient l'homme avec la vie.",
              exemplesEtCitations: ["Léopold Sédar Senghor dans 'Femme noire' ('Chants d'ombre') restaure la fierté et la paix intérieure des Noirs humiliés par le complexe colonial.", "La musicalité berçante de Paul Verlaine dans 'Soleils couchants' ('Poèmes saturniens') : « Fantômes vermeils / Défilent sans trêves... ».", "Le triomphe de Soundjata sur le tyran Soumaoro Kanté dans l'épopée mandingue de Djibril Tamsir Niane."]
            }
          ],
          transition: "Toutefois, si l'émotion est un atout indispensable pour captiver le lecteur, elle ne saurait constituer l'unique horizon du livre sans le réduire à un divertissement sentimental. La littérature ne s'adresse-t-elle pas aussi à l'esprit critique ?",
          fullText: `Dans un premier temps, l'observation confirme l'intuition de Maxime Gorki : la littérature possède un pouvoir démiurgique sur nos états d'âme. Elle est d'abord capable de troubler profondément la conscience en suscitant la compassion ou la révolte. Face aux sévices arbitraires subis par le prince Mélédouman dans 'La carte d'identité' d'Adiaffi, le lecteur éprouve une fureur militante contre l'injustice. De même, la mort déchirante de la petite Cosette martyrisée dans 'Les Misérables' de Victor Hugo arrache des larmes universelles. Inversement, l'écrivain sait prodiguer la sérénité et le bonheur : la célébration lumineuse de la femme africaine par Senghor dans 'Femme noire' dissout les blessures de l'aliénation, tandis que les harmonies sonores de Verlaine procurent une félicité esthétique pure.`
        },
        {
          titre: "II. L'empire de la raison : la littérature comme instrument d'instruction et d'éveil éthique",
          sousParties: [
            {
              titre: "1. L'instruction intellectuelle et le dévoilement du monde",
              argument: "Le livre transmet des connaissances historiques, linguistiques et sociologiques indispensables à l'intelligence humaine.",
              explication: "Le roman et l'essai décryptent les rouages complexes de la société et enrichissent notre vision du réel.",
              exemplesEtCitations: ["Les 'Lettres persanes' de Montesquieu constituent un tableau sociologique et institutionnel irremplaçable de l'Europe des Lumières.", "Le 'Cahier d'un retour au pays natal' de Césaire révolutionne la langue française et enrichit la conscience historique des peuples dominés.", "Maxime N'Debeka dans le poème '980 000' dénonce avec une lucidité chirurgicale l'accaparement des richesses par les élites néocoloniales."]
            },
            {
              titre: "2. L'éducation aux valeurs morales : sagesse, courage et solidarité",
              argument: "La littérature propose des trajectoires éthiques qui forment le caractère et inspirent l'engagement civique.",
              explication: "À travers des récits initiatiques ou des drames sociaux, le lecteur découvre la supériorité du partage sur l'égoïsme.",
              exemplesEtCitations: ["Dans 'Kaïdara' d'Amadou Hampâté Bâ, le voyage initiatique d'Hammadi démontre la vanité de l'or et du pouvoir au profit de la sagesse.", "Dans 'Les Bouts de bois de Dieu' de Sembène Ousmane, la grève des cheminots du Dakar-Niger exalte la solidarité inébranlable des travailleurs.", "Voltaire résume ce rôle complet : « Les lettres nourrissent l'âme, la rectifient, la consolent »."]
            }
          ],
          transition: "L'émotion et l'instruction ne sont donc pas ennemies : c'est précisément parce qu'elle touche le cœur que l'œuvre parvient à éclairer l'esprit.",
          fullText: `Cependant, borner la littérature à l'ébranlement des affects méconnaîtrait sa vocation essentielle qui est d'instruire et d'émanciper. L'œuvre littéraire s'adresse à la raison autant qu'au cœur. Elle apporte un trésor de connaissances documentaires et historiques : lire Balzac ou Sembène Ousmane, c'est pénétrer les mécanismes économiques et les contradictions d'une société tout entière. De surcroît, elle est une prodigieuse école morale. Le conte initiatique 'Kaïdara' d'Amadou Hampâté Bâ instruit la jeunesse sur les écueils de l'ambition cupide à travers le triomphe du sage Hammadi. Enfin, dans 'Les Bouts de bois de Dieu', Sembène Ousmane montre que le courage solidaire transcende la détresse individuelle. L'émotion n'est que la porte d'entrée de la vérité.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "Maxime Gorki a justement identifié la formidable puissance affective de l'écriture littéraire.",
      jugement: "Néanmoins, l'émotion n'est pas une fin en soi : elle constitue le tremplin esthétique par lequel l'auteur transmet une réflexion lucide sur l'homme et sur le monde.",
      ouverture: "Une œuvre n'est véritablement accomplie que lorsqu'elle nourrit à la fois le cœur et l'intelligence, confirmant le mot de Jean Giono selon lequel le livre doit être un 'professeur d'espérance'.",
      fullText: `En somme, l'observation de Maxime Gorki saisit avec justesse la magie par laquelle les mots bouleversent notre affectivité. Mais l'émotion ne saurait être l'unique raison d'être de la création littéraire. Un livre qui ne ferait que remuer les passions sans féconder la réflexion demeurerait incomplet. Les plus grands chefs-d'œuvre sont ceux qui savent allier le choc des sentiments à l'élévation de la conscience, faisant de la lecture un banquet total où l'âme s'émeut, apprend et grandit.`
    },
    keywords: ["gorki", "émotion", "seule raison d'être", "touche le cœur", "zola", "affectivité", "senghor", "kaidara", "dissertation littéraire"]
  },

  // =========================================================================
  // 4. DISSERTATION : SUJET 6 — LE ROMANCIER TRAVAILLE-T-IL CONTRE LE RÉEL ?
  // =========================================================================
  {
    id: "secret-dis-06-berger-contre-le-reel",
    category: "dissertation",
    title: "Dissertation : « C'est toujours contre le réel que l'écrivain travaille et de façon à l'oublier » (Yves Berger)",
    authorOrSource: "Yves Berger / Sujet Baccalauréat",
    themeOrGenre: "Le roman : Fiction, Transfiguration de la réalité et Réalisme documentaire",
    statement: "« C'est toujours contre le réel que l'écrivain travaille et de façon à l'oublier ». En prenant appui sur des œuvres romanesques, vous direz ce que vous pensez de cette opinion d'Yves Berger.",
    planType: "dialectique",
    problematique: "Dans quelle mesure l'art du romancier dépasse-t-il le refus du réel pour en proposer une transfiguration féconde révélant les vérités profondes de la condition humaine ?",
    introduction: {
      amorce: "Le roman est souvent défini comme un miroir de la société, ancré dans l'observation des mœurs contemporaines.",
      citationEtExplication: "Pourtant, prenant le contre-pied de cette tradition réaliste, le romancier Yves Berger soutient de manière provocatrice : « C'est toujours contre le réel que l'écrivain travaille et de façon à l'oublier ». Pour lui, la fiction n'a de valeur que si elle s'insurge contre la pesanteur du monde concret pour substituer à sa trivialité un univers de pure invention.",
      problematique: "Dès lors, en quoi l'activité du romancier constitue-t-elle, bien loin d'une fuite stérile, une transfiguration lucide destinée à faire mieux comprendre la réalité humaine ?",
      annoncePlan: "Nous examinerons d'abord en quoi l'acte d'écrire implique une sélection, une stylisation et un dépassement du réel visible, avant de montrer que le roman puise indéfectiblement sa sève dans l'expérience vécue et l'histoire des hommes.",
      fullText: `Parce qu'il met en scène des êtres en société, le genre romanesque est spontanément perçu comme une exploration fidèle du monde qui nous entoure. On est donc en droit d'être surpris lorsque l'écrivain Yves Berger affirme avec provocation : « C'est toujours contre le réel que l'écrivain travaille et de façon à l'oublier ». Selon cette conception idéaliste, l'essence même de l'écriture résiderait dans le refus du palpable et dans l'édification d'un monde de fiction qui efface le réel. Mais le romancier peut-il s'affranchir totalement de la terre qui le porte ? Son travail ne consiste-t-il pas plutôt à ausculter le réel pour en extraire la signification secrète ? Nous analyserons d'abord en quoi le roman opère une rupture nécessaire avec le réel immédiat, avant de démontrer que la réalité demeure la matière première inaliénable de toute grande fiction.`
    },
    developpement: {
      parties: [
        {
          titre: "I. L'art romanesque comme dépassement et subversion du réel : l'invention d'un univers",
          sousParties: [
            {
              titre: "1. L'écriture comme choix et trahison féconde de l'informe",
              argument: "Le réel brut est chaotique et inorganisé ; l'écrivain le trahit nécessairement en y effectuant un tri stylistique.",
              explication: "L'art n'est pas une photocopie mécanique mais, comme l'affirmait Alfred de Vigny, « la vérité choisie ».",
              exemplesEtCitations: ["Ferdinand Oyono dans 'Le vieux nègre et la médaille' ne décrit pas tous les Camerounais mais polarise le conflit sur Méka et le Haut-Commissaire pour styliser la confrontation coloniale.", "Marcel Proust rappelle dans 'Le Temps retrouvé' qu'une littérature qui se contente de 'décrire les choses' est la plus éloignée de la véritable réalité."]
            },
            {
              titre: "2. La transfiguration et le brouillage esthétique des faits",
              argument: "Le romancier maquille les noms, déplace les repères spatiotemporels pour s'émanciper du simple fait divers.",
              explication: "Par des métaphores et des paysages fictifs, il transforme l'histoire événementielle en mythe.",
              exemplesEtCitations: ["Ahmadou Kourouma dans 'Les Soleils des indépendances' crée la 'République des Ébènes' pour évoquer la Côte d'Ivoire postcoloniale sans s'enchaîner au carcan journalistique.", "Albert Camus dans 'L'Étranger' ne cherche pas à relater un meurtre banal à Alger mais fait de l'histoire de Meursault la parabole universelle de l'Absurde."]
            }
          ],
          transition: "Pour autant, cette métamorphose poétique signifie-t-elle que le romancier tourne définitivement le dos au monde des vivants ? Le rejet du réalisme servile équivaut-il à l'oubli pur et simple du réel ?",
          fullText: `Dans un premier temps, la thèse d'Yves Berger trouve sa justification dans le fonctionnement même de la création romanesque. Écrire exige une rupture avec le désordre informel du monde quotidien. Comme le formulait Alfred de Vigny, l'art est toujours « la vérité choisie » : sélectionner quelques personnages et une trame logique constitue déjà une mise à distance du réel. Dans 'Le vieux nègre et la médaille' d'Oyono, la dénonciation de l'hypocrisie coloniale gagne en force précisément parce que l'auteur stylise à l'extrême l'opposition entre Méka et le gouverneur. De même, chez Ahmadou Kourouma, l'invention de la « République des Ébènes » ('Les Soleils des indépendances') permet de dépasser la simple chronique politique ivoirienne de 1963 pour bâtir une fable satirique immortelle sur les tyrannies du parti unique. Le roman travaille bien 'contre' le réel plat pour dégager sa vérité poétique.`
        },
        {
          titre: "II. L'ancrage irréductible dans le réel : le roman comme miroir et exploration du monde",
          sousParties: [
            {
              titre: "1. Le roman comme mémoire du vécu et autobiographie",
              argument: "Le romancier ne peut faire abstraction de sa propre trajectoire existentielle et de son enracinement charnel.",
              explication: "Même lorsqu'il invente, l'auteur transpose les angoisses, les joies et l'enfance qu'il a réellement traversées.",
              exemplesEtCitations: ["Camara Laye dans 'L'Enfant noir' immortalise les traditions de Kouroussa et la tendresse de sa forge ancestrale.", "Cheikh Hamidou Kane dans 'L'Aventure ambiguë' transpose sa propre expérience des écoles coranique et occidentale à travers le destin de Samba Diallo."]
            },
            {
              titre: "2. Le témoignage sociopolitique et la conquête de la vérité historique",
              argument: "Le roman se fait l'écho des luttes, des injustices et des transformations de son époque.",
              explication: "Stendhal définissait le roman comme « un miroir que l'on promène le long d'une route » : il ne peut refuser de refléter la fange ou l'azur.",
              exemplesEtCitations: ["Honoré de Balzac ('La Comédie humaine') et Émile Zola ('Germinal') conçoivent le roman comme une radiographie scientifique des mœurs sociales.", "Alan Paton dans 'Pleure, ô pays bien-aimé' et Nazi Boni dans 'Crépuscule des temps anciens' plongent au cœur des réalités sud-africaines et voltaïques pour réveiller la conscience des peuples."]
            }
          ],
          transition: "En définitive, le roman ne travaille pas 'contre' le réel pour l'oublier, mais travaille 'avec' lui pour en révéler les arcanes.",
          fullText: `Toutefois, prétendre que le romancier vise à 'oublier' le réel relève de l'illusion théorique. Couper la fiction de ses racines concrètes aboutirait à une littérature exsangue et incompréhensible. D'une part, les romans autobiographiques prouvent avec force que le vécu de l'écrivain est le carburant de son œuvre : Camara Laye n'a pas travaillé contre la Haute-Guinée, mais a sublimé la réalité de son enfance dans 'L'Enfant noir'. D'autre part, le roman moderne s'affirme comme le plus puissant miroir des drames collectifs. Stendhal comparait le roman à « un miroir qui se promène sur une grande route », reflétant tour à tour l'azur et les bourbiers. Qu'il s'agisse d'Émile Zola disséquant la misère des houillères dans 'Germinal' ou d'Alan Paton dénonçant l'apartheid dans 'Pleure, ô pays bien-aimé', le romancier ausculte sans faiblir les blessures du siècle.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "Le travail romanesque ne s'oppose pas stérilement au réel : il le filtre, l'ordonne et le transfigure.",
      jugement: "Si l'écrivain refuse la copie servile et photographique du monde, c'est pour mieux en faire surgir la vérité humaine.",
      ouverture: "Comme l'écrivait Albert Camus dans 'L'Homme révolté' : « Le monde romanesque n'est que la correction de ce monde-ci suivant le désir profond de l'homme ».",
      fullText: `En conclusion, l'opinion d'Yves Berger a le mérite de rappeler que le roman n'est pas un banal procès-verbal, mais une création artistique souveraine qui recrée la réalité. Cependant, affirmer que l'écrivain travaille de façon à 'oublier' le réel constitue un contresens. Loin de fuir le monde, le grand romancier le prend à bras-le-corps pour en extraire le sens caché. Le roman ne détruit pas le réel, il l'illumine, confirmant la célèbre formule d'Albert Camus : « Le monde romanesque n'est que la correction de ce monde-ci selon le désir profond de l'homme » ; c'est en transfigurant la terre que l'écrivain nous apprend à l'habiter.`
    },
    keywords: ["contre le réel", "oublier le réel", "yves berger", "camus", "zola", "oyono", "stendhal", "camara laye", "dissertation littéraire"]
  },

  // =========================================================================
  // 5. DISSERTATION : SUJET 10 — LE THÉÂTRE VIT DE MORALE (OUVERTURE & VALEUR)
  // =========================================================================
  {
    id: "secret-dis-10-theatre-vit-de-morale",
    category: "dissertation",
    title: "Dissertation : « Le théâtre vit de morale… toute grande œuvre dramatique suppose une question de morale »",
    authorOrSource: "Critique dramatique / Sujet Baccalauréat",
    themeOrGenre: "L'art dramatique : Éthique civique, Fonction cathartique et Plaisir du spectacle",
    statement: "« Le théâtre vit de morale… toute grande œuvre dramatique suppose une question de morale et la suggère ». La valeur d’une grande œuvre dramatique est-elle, à la lumière de vos expériences, sa capacité d’être le support d’une morale ?",
    planType: "dialectique",
    problematique: "Si le conflit des devoirs et l'arbitrage éthique constituent le moteur classique de la scène théâtrale, dans quelle mesure la grandeur d'une pièce procède-t-elle tout autant de sa splendeur esthétique, de sa force poétique et du plaisir du spectacle ?",
    introduction: {
      amorce: "Depuis la tragédie antique, la scène est le lieu privilégié où s'affrontent des volontés passionnées et des conceptions opposées du juste.",
      citationEtExplication: "C'est cette dimension normative que consacre l'affirmation : « Le théâtre vit de morale… toute grande œuvre dramatique suppose une question de morale et la suggère ». Selon ce point de vue, une pièce dramatique ne mériterait le titre de chef-d'œuvre que dans la mesure où elle instruit le spectateur et propose une méditation éthique féconde.",
      problematique: "Mais comment le théâtre dépasse-t-il la simple leçon morale pour faire rayonner la fascination du spectacle, la catharsis des passions et la liberté du jeu scénique ?",
      annoncePlan: "Nous montrerons en premier lieu comment le théâtre remplit une mission éducatrice et régulatrice essentielle dans la cité, avant d'établir en second lieu que sa valeur esthétique, poétique et divertissante dépasse infiniment le simple cadre moral.",
      fullText: `Dès ses origines sacrées en Grèce, le théâtre s'est présenté comme un miroir tendu à la conscience des citoyens, mettant en scène des dilemmes héroïques où se jouent la justice et le destin. C'est ce magistère civique qu'exprime avec force la sentence : « Le théâtre vit de morale… toute grande œuvre dramatique suppose une question de morale et la suggère ». Pour l'auteur de ce jugement, le théâtre ne saurait prétendre à la grandeur sans soumettre au public une interrogation morale fondamentale. Dès lors, comment la portée d'une pièce dramatique dépasse-t-elle la stricte utilité éthique pour s'épanouir dans sa force poétique, son émotion cathartique et le plaisir pur du jeu scénique ? Il conviendra d'examiner d'abord comment la scène éduque et redresse les consciences, puis de démontrer que l'art théâtral s'affirme comme une célébration esthétique et ludique irréductible à une leçon de conduite.`
    },
    developpement: {
      parties: [
        {
          titre: "I. Le théâtre comme tribunal de la conscience et école de vertu",
          sousParties: [
            {
              titre: "1. La défense de la justice, de la dignité et du patriotisme",
              argument: "Le théâtre dramatique met en scène des figures héroïques qui sacrifient leurs intérêts égoïstes au salut de leur peuple.",
              explication: "Sur la scène, le courage civique et le refus de la trahison deviennent des leçons vivantes pour la foule.",
              exemplesEtCitations: ["Cheikh Ndao dans 'L'Exil d'Alboury' fait proclamer au roi Alboury : « Quand on a l'honneur sauf, on a tout avec soi » pour condamner la vassalité coloniale.", "Léopold Sédar Senghor dans 'Chaka' illustre le déchirement du chef qui sacrifie sa bien-aimée Nolivé pour l'amour absolu de sa nation.", "Aimé Césaire dans 'Une saison au Congo' immortalise le combat désintéressé de Patrice Lumumba pour la liberté de son peuple."]
            },
            {
              titre: "2. La correction des mœurs et le châtiment des impostures",
              argument: "Depuis Molière, la vocation de la comédie dramatique est de châtier le vice par le rire ('castigat ridendo mores').",
              explication: "En dévoilant l'hypocrisie et l'abus de pouvoir, le dramaturge assainit la vie collective.",
              exemplesEtCitations: ["Molière dans 'Tartuffe' et 'Dom Juan' ridiculise les faux dévots et le libertinage immoral.", "Guillaume Oyono Mbia dans 'Trois prétendants, un mari' caricature la cupidité des pères qui vendent leurs filles au plus offrant sous couvert de la dot."]
            }
          ],
          transition: "Toutefois, limiter le théâtre à un bréviaire de morale risquerait de le transformer en cours de catéchisme assommant. Le théâtre n'est-il pas avant tout un art vivant, un spectacle de lumière, de rythme et d'émotion pure ?",
          fullText: `Il est indéniable que les chefs-d'œuvre dramatiques résonnent d'une puissante exigence éthique. Sur les planches, le dramaturge arbitre les conflits entre le bien et le mal, inspirant au spectateur l'horreur de la forfaiture et l'amour de la justice. Dans 'L'Exil d'Alboury' de Cheikh Ndao, le roi refuse toute soumission déshonorante aux envahisseurs au nom d'un impératif catégorique : « Quand on a l'honneur sauf, on a tout avec soi ». De même, dans 'Une saison au Congo' de Césaire, le sacrifice consenti par Lumumba rappelle aux dirigeants le devoir sacré de loyauté envers le peuple. Par ailleurs, la comédie classique moliéresque s'est donné pour devise officielle de « corriger les mœurs en faisant rire » ('castigat ridendo mores') : en ridiculisant l'hypocrite Tartuffe ou le libertin Dom Juan, l'auteur rétablit l'ordre moral dans la cité.`
        },
        {
          titre: "II. Au-delà de la morale : la souveraineté du langage, le tragique et la magie du spectacle",
          sousParties: [
            {
              titre: "1. La beauté poétique du verbe et la puissance du langage",
              argument: "Une pièce touche le public d'abord par la musicalité de son texte et la force incantatoire de ses dialogues.",
              explication: "Sans la maîtrise de l'écriture poétique, la plus belle morale reste lettre morte.",
              exemplesEtCitations: ["Jean Racine dans 'Phèdre' subjugue par la splendeur incomparable de l'alexandrin tragique, même en peignant une passion coupable.", "Le discours inaugural de Lumumba dans 'Une saison au Congo' : « Je voudrais être toucan, le bel oiseau, pour être à travers le ciel, annonceur... »."]
            },
            {
              titre: "2. Le primat de la catharsis, du mystère et de l'ambiguïté humaine",
              argument: "Le grand théâtre ne donne pas des réponses toutes faites ; il explore la nuit de la condition humaine et fait éclater le rire ou les larmes.",
              explication: "L'absurde et la tragédie moderne refusent l'édification morale pour montrer le déchirement sans issue de l'homme.",
              exemplesEtCitations: ["Jean-Paul Sartre affirme : « Le théâtre n'est le support d'aucune morale ».", "Antonin Artaud dans 'Le Théâtre et son double' revendique un 'théâtre de la cruauté' qui secoue les nerfs et libère les forces enfouies.", "Eugène Ionesco dans 'Rhinocéros' et Samuel Beckett dans 'En attendant Godot' dépeignent le vertige existentiel hors de tout moralisme niais."]
            }
          ],
          transition: "La morale au théâtre n'est donc qu'un ingrédient parmi d'autres, sublimé par la puissance du spectacle.",
          fullText: `Néanmoins, réduire la valeur d'une pièce à sa portée didactique constitue une grave méprise esthétique. Le théâtre est avant tout un spectacle total (« Le théâtre n'est fait que pour être vu », disait Molière). Sa réussite tient d'abord à la magie de sa langue poétique : le frisson procuré par les vers embrasés de Racine dans 'Phèdre' ne dépend en rien d'une approbation de l'inceste, mais de la pureté du chant tragique. En outre, les dramaturges contemporains ont vigoureusement rejeté la prétention moralisatrice. Jean-Paul Sartre déclarait sans ambages que « le théâtre n'est le support d'aucune morale » : l'art dramatique doit dévoiler la liberté angoissée de l'homme en situation, sans lui dicter son devoir. Chez Ionesco ou Beckett, la déstructuration comique du langage n'enseigne aucune vertu convenue, mais révèle le néant et la déraison du monde.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "Si toute grande dramaturgie affronte inévitablement des dilemmes de conscience, la valeur théâtrale ne saurait être confisquée par le seul discours moral.",
      jugement: "Une pièce n'éduque durablement que parce qu'elle sait captiver les sens, transfigurer le langage et susciter le rire ou l'effroi.",
      ouverture: "C'est cette communion intime entre la rigueur de la pensée et l'éblouissement scénique qui fait du théâtre, selon Victor Hugo, « un point d'optique où tout ce qui existe dans le monde vient se réfléchir sous la baguette magique de l'art ».",
      fullText: `En définitive, s'il est vrai que le théâtre trouve dans les conflits éthiques un ressort dramaturgique puissant, sa valeur suprême ne se limite nullement à sa capacité d'être le support d'une morale. Le théâtre est un art à part entière, dont la gloire repose sur la scénographie, l'incarnation charnelle par les comédiens et l'éclat du dialogue poétique. Loin de se réduire à un tribunal pédagogique, la scène est cet espace enchanté où les paradoxes de l'humanité sont donnés en spectacle pour le plaisir, le vertige et la libération de tous.`
    },
    keywords: ["le théâtre vit de morale", "grande œuvre dramatique", "molière", "cheikh ndao", "sartre", "racine", "ionesco", "dissertation littéraire"]
  },

  // =========================================================================
  // 6. COMMENTAIRE COMPOSÉ : « A CELLE QUI EST RESTÉE EN FRANCE » (VICTOR HUGO)
  // =========================================================================
  {
    id: "secret-com-01-hugo-contemplations-france",
    category: "commentaire_compose",
    title: "Commentaire composé : Victor Hugo, Les Contemplations — « À celle qui est restée en France »",
    authorOrSource: "Victor Hugo",
    work: "Les Contemplations (1856) — Extrait de la dédicace",
    themeOrGenre: "Poésie élégiaque / Mémoire du deuil de Léopoldine et pèlerinage de l'exilé",
    statement: `Ainsi, ce noir chemin que je faisais, ce marbre
Que je contemplais, pâle, adossé contre un arbre,
Ce tombeau sur lequel mes pieds pouvaient marcher
La nuit que je voyais lentement approcher,
Ces ifs, ce crépuscule avec ce cimetière,
Ces sanglots, qui du moins tombaient sur cette pierre,
O mon Dieu, tout cela, c’était donc du bonheur !

Dis, qu’as-tu fait pendant tout ce temps, là ? - Seigneur,
Qu’a-t-elle fait ? - Vois-tu la vie en vos demeures ?
A quelle horloge d’ombre as-tu compté les heures ?
As-tu sans bruit parfois poussé l’autre endormi ?
Et t’es-tu, m’attendant, réveillée à demi ?
T’es-tu, pâle, accoudée à l’obscure fenêtre
De l’infini, cherchant dans l’ombre à reconnaître
Un passant, à travers le noir cercueil mal joint,
Attentive écoutant si tu n’entendais point
Quelqu’un marcher vers toi dans l’éternité sombre ?
Et t’es-tu recouchée ainsi qu’un mât qui sombre,
En disant : « Qu’est-ce donc ? Mon père ne vient pas ! »
Avez-vous tous les deux parlé de moi tout bas ?

Que de fois j’ai choisi, tout mouillés de rosée,
Des lys dans mon jardin, des lys dans ma pensée !
Que de fois j’ai cueilli de l’aubépine en fleur !
Que de fois j’ai, là-bas, cherché la tour d’Harfleur,
Murmurant : c’est demain que je pars ! et, stupide,
Je calculais le vent et la voile rapide,
Puis ma main s’ouvrait triste, et je disais : Tout fuit !
Et le bouquet tombait, sinistre, dans la nuit !`,
    planType: "dialectique",
    problematique: "Comment, devant l'impossibilité de se recueillir sur la tombe de sa fille en raison de l'exil, le poète fait-il revivre la disparue à travers la douloureuse puissance de l'imagination ?",
    introduction: {
      amorce: "Perdre un être cher est pour tout homme une épreuve déchirante, mais pour le poète romantique, ce drame intime devient le creuset d'un chef-d'œuvre universel.",
      citationEtExplication: "Le 4 septembre 1843, Léopoldine Hugo, fraîchement mariée, se noie tragiquement dans la Seine à Villequier. Cet événement arrachera à Victor Hugo les accents poignants des 'Contemplations' (1856). Dans cet extrait de la dédicace « À celle qui est restée en France », le poète, banni par l'Empire et exilé à Jersey, souffre de ne plus pouvoir se rendre sur la tombe de son enfant.",
      problematique: "Dès lors, comment l'évocation des pèlerinages d'autrefois cède-t-elle la place à une résurrection imaginaire et déchirante de la défunte ?",
      annoncePlan: "Nous étudierons d'une part le souvenir nostalgique des douloureux pèlerinages au cimetière de Villequier, puis d'autre part la présence vivante de Léopoldine dans l'imaginaire éperdu du père.",
      fullText: `Perdre un enfant est pour tout être humain une tragédie insurmontable ; pour un poète de génie, ce deuil devient la source d'une méditation universelle sur la mort et l'au-delà. Le 4 septembre 1843, la fille aînée de Victor Hugo, Léopoldine, périt noyée dans la Seine à Villequier avec son jeune époux. Cette déchirure intime inspirera au chef de file du romantisme le recueil des 'Contemplations' (1856). Dans le poème « À celle qui est restée en France », Hugo, proscrit et contraint à l'exil dans les îles anglo-normandes, souffre cruellement d'être séparé de la sépulture de son enfant. Deux centres d'intérêt structurent notre analyse méthodique : nous verrons d'abord comment le poète évoque avec mélancolie le souvenir de ses pèlerinages passés désormais impossibles, avant d'analyser la manière dont l'imagination paternelle fait revivre la jeune disparue dans le silence de l'éternité.`
    },
    developpement: {
      parties: [
        {
          titre: "1. L'évocation des douloureux pèlerinages sur la tombe de sa fille",
          sousParties: [
            {
              titre: "Le souvenir macabre transfiguré en bonheur perdu",
              argument: "Le poète convoque avec précision le décor lugubre du cimetière de Villequier pour mesurer l'étendue de sa perte actuelle.",
              explication: "Ce qui était naguère une torture vécue au milieu des tombes apparaît aujourd'hui, dans l'isolement de l'exil, comme un privilège consolateur inestimable.",
              exemplesEtCitations: ["Champ lexical funèbre : « noir chemin », « marbre », « tombeau », « ces ifs », « cimetière », « noir cercueil ».", "L'anaphore des démonstratifs dans la 1ère strophe : « ce noir chemin », « ce marbre », « ce tombeau », « ces sanglots ».", "L'exclamation déchirante du vers 91 : « Ô mon Dieu, tout cela, c'était donc du bonheur ! » (recul pathétique du proscrit)."]
            },
            {
              titre: "L'impuissance de l'exilé et les vains préparatifs en esprit",
              argument: "Dans sa solitude d'outre-mer, le poète s'abandonne à des voyages mentaux aussitôt brisés par la réalité.",
              explication: "Le rythme lancinant des anaphores traduit l'obsession d'un départ impossible vers les côtes de France.",
              exemplesEtCitations: ["L'anaphore récurrente : « Que de fois j'ai choisi... Que de fois j'ai cueilli... Que de fois j'ai cherché la tour d'Harfleur ».", "Le dénouement tragique de la rêverie : « ma main s'ouvrait triste, et je disais : Tout fuit ! / Et le bouquet tombait, sinistre, dans la nuit ! »."]
            }
          ],
          transition: "Privé de la présence physique du tombeau, le poète n'a d'autre ressource que de franchir en pensée les frontières du trépas pour dialoguer avec Léopoldine.",
          fullText: `Dans la première partie, Victor Hugo fait revivre le cadre de ses visites à Villequier. L'abondance du vocabulaire funéraire (« noir chemin », « marbre », « tombeau », « ces ifs », « pierre ») restitue l'atmosphère glacée du lieu de repos. Pourtant, par un saisissant paradoxe romantique scellé par l'exclamation « Ô mon Dieu, tout cela, c'était donc du bonheur ! », le poète réalise que pouvoir pleurer sur une tombe était encore une consolation par rapport à l'exil absolu. L'anaphore des adjectifs démonstratifs (« ce noir chemin », « ce marbre », « ce crépuscule ») souligne la précision obsédante du souvenir. Mais à Jersey, cette proximité est anéantie : la triple reprise de « Que de fois » exprime la répétition douloureuse de préparatifs imaginaires, achevés dans le désenchantement brutal du vers 111 : « Tout fuit ! / Et le bouquet tombait, sinistre, dans la nuit ! »`
        },
        {
          titre: "2. La défunte dans l'imagination et l'amour éperdu du père",
          sousParties: [
            {
              titre: "La chambre nuptiale de la mort et le refus du trépas",
              argument: "Hugo se refuse à concevoir sa fille comme un cadavre inanimé et lui attribue une vie mystérieuse dans l'ombre.",
              explication: "Le cercueil devient une couche nuptiale où elle repose aux côtés de son époux, attendant le père.",
              exemplesEtCitations: ["L'euphémisme désignant Charles Vacquerie : « l'autre endormi ».", "L'oxymore spatial : « l'obscure fenêtre / De l'infini », « noir cercueil mal joint » (le père imagine des fentes laissant passer l'air).", "Les interrogations pathétiques : « Vois-tu la vie en vos demeures ? », « À quelle horloge d'ombre as-tu compté les heures ? »."]
            },
            {
              titre: "La prosopopée et la jeunesse éternelle de Léopoldine",
              argument: "Le poète prête sa propre angoisse à la jeune morte, qui attend son père comme un amant fidèle.",
              explication: "Les fleurs cueillies en pensée symbolisent la pureté et la précocité du destin brisé de l'adolescente.",
              exemplesEtCitations: ["La prosopopée du vers 103 : Léopoldine disant dans sa tombe : « Qu'est-ce donc ? Mon père ne vient pas ! ».", "Les symboles de fraîcheur virginale : « aubépine en fleur » (fleur de l'âge), « des lys tout mouillés de rosée » (pureté innocente).", "La comparaison funèbre : « recouchée ainsi qu'un mât qui sombre »."]
            }
          ],
          transition: "Cette communion d'outre-tombe témoigne de l'immortalité de l'amour paternel par-delà le gouffre de la mort.",
          fullText: `Dans la seconde partie, l'imaginaire hugolien abolit la frontière entre la vie et la mort. Ne pouvant accepter la disparition totale de son enfant, le poète lui prête une conscience vigilante sous la pierre. À travers une série d'interrogations tendres (« Vois-tu la vie en vos demeures ? », « T'es-tu réveillée à demi ? »), il imagine Léopoldine s'inquiétant de son absence. Par le biais bouleversant de la prosopopée, il lui fait prononcer ces mots naïfs et déchirants : « Qu'est-ce donc ? Mon père ne vient pas ! ». Le tombeau se mue en une chambre nuptiale où repose « l'autre endormi », tandis que les « lys tout mouillés de rosée » et « l'aubépine en fleur » rappellent la fraîcheur d'une jeunesse fauchée au printemps de sa vie. Le poète refuse l'oubli et maintient le dialogue mystique avec l'éternité.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "Dans cette page majeure des 'Contemplations', Victor Hugo transforme la tragédie du deuil et les tourments de l'exil en une allégorie universelle de l'amour blessé.",
      jugement: "Par la puissance de son lyrisme et la précision de ses images symboliques, le poète parvient à vaincre la séparation de la mort en faisant de son vers le sanctuaire éternel de sa fille.",
      ouverture: "Cette poésie du souvenir et de l'absence fraternise avec les grands accents élégiaques de Lamartine pleurant Elvire dans 'L'Isolement' des 'Méditations poétiques'.",
      fullText: `En somme, ce poème est l'un des sommets les plus poignants du lyrisme romantique. Brisé par le deuil et accablé par l'exil politique qui lui interdit d'approcher la terre de France, Victor Hugo use de l'art poétique comme d'une passerelle spirituelle vers sa fille disparue. En transfigurant le tombeau en une demeure vivante où Léopoldine veille encore, il illustre avec majesté la fonction sacrée du poète voyant capable de triompher du temps et de la mort. Comme Lamartine pleurant son aimée dans 'L'Isolement', Hugo démontre que l'amour véritable refuse le néant et trouve dans le vers son éternelle résurrection.`
    },
    keywords: ["a celle qui est restee en france", "victor hugo", "les contemplations", "leopoldine", "villequier", "exil", "commentaire composé"]
  },

  // =========================================================================
  // 7. COMMENTAIRE COMPOSÉ : « LE PIN DES LANDES » (THÉOPHILE GAUTIER)
  // =========================================================================
  {
    id: "secret-com-02-gautier-pin-des-landes",
    category: "commentaire_compose",
    title: "Commentaire composé : Théophile Gautier, España — « Le Pin des Landes »",
    authorOrSource: "Théophile Gautier",
    work: "España (1845)",
    themeOrGenre: "Poésie parnassienne / Allégorie du poète martyr et transfiguration de la douleur en Beauté",
    statement: `On ne voit, en passant dans les Landes désertes,
Vrai Sahara français, poudré de sable blanc,
Surgir de l’herbe sèche et des flaques d’eau verte
D’autre arbre que le pin avec sa plaie au flanc ;

Car, pour lui dérober ses larmes de résine,
L’homme, avare bourreau de la création,
Qui ne vit qu’aux dépens de ceux qu’il assassine,
Dans son tronc douloureux ouvre un large sillon.

Sans regretter son sang qui coule goutte à goutte,
Le pin verse son baume et sa sève qui bout,
Et se tient toujours droit sur le bord de la route, 
Comme un soldat blessé qui veut mourir debout.

Le poète est ainsi dans les Landes du monde ;
Lorsqu’il est sans blessure, il garde son trésor.
Il faut qu’il ait au cœur une entaille profonde
Pour épancher ses vers, divines larmes d’or.`,
    planType: "dialectique",
    problematique: "Comment l'analogie filée entre le pin saigné dans le désert landais et le poète persécuté par la société exalte-t-elle la souffrance comme condition indispensable de la création artistique ?",
    introduction: {
      amorce: "Pour de nombreux poètes du XIXe siècle, issus du romantisme ou rattachés au Parnasse, la souffrance humaine constitue le creuset secret où s'élabore la perfection artistique.",
      citationEtExplication: "C'est cette intuition esthétique que Théophile Gautier développe dans son célèbre poème « Le Pin des Landes », extrait du recueil 'España' paru en 1845. À partir de la contemplation des pins résiniers méthodiquement entaillés par les hommes dans le Sud-Ouest de la France, l'écrivain conçoit une parabole lumineuse sur la vocation du créateur.",
      problematique: "Dès lors, par quels mécanismes stylistiques et poétiques le poète établit-il une analogie rigoureuse entre l'arbre martyr et le poète héroïque, élevant ainsi la douleur au rang de source suprême de beauté ?",
      annoncePlan: "Notre commentaire composé étudiera d'abord le fonctionnement de l'analogie entre le pin et le poète (richesse, générosité, héroïsme), puis mettra en lumière l'exaltation de la douloureuse inspiration poétique.",
      fullText: `Nombreux sont les poètes du XIXe siècle qui ont médité sur les liens mystérieux unissant la douleur à la création esthétique. C'est cette conviction que Théophile Gautier, figure charnière entre le romantisme et l'idéal parnassien de l'art pour l'art, met en scène dans « Le Pin des Landes », extrait de son recueil 'España' publié en 1845. En observant le spectacle insolite des arbres résiniers incisés pour leur sève dans la solitude landaise, Gautier y découvre le reflet exact de la condition de l'artiste au milieu des hommes. Deux centres d'intérêt guideront notre lecture méthodique : nous analyserons d'abord les correspondances analogiques entre le pin et le créateur, avant de montrer en second lieu comment le poème célèbre la transmutation de la souffrance en or poétique.`
    },
    developpement: {
      parties: [
        {
          titre: "1. L'analogie méthodique entre le pin martyr et le poète créateur",
          sousParties: [
            {
              titre: "La possession d'un trésor intime",
              argument: "Le pin et le poète détiennent tous deux une substance vitale d'une valeur inestimable convoitée par autrui.",
              explication: "La sève aromatique et curative de l'arbre correspond aux vers harmonieux et divins du poète.",
              exemplesEtCitations: ["Vocabulaire de la richesse végétale : « son baume », « sa sève qui bout ».", "Métaphores orfévrées associées au poète : « il garde son trésor », « divines larmes d'or ».", "L'adverbe comparatif charnière au vers 13 : « Le poète est ainsi dans les Landes du monde »."]
            },
            {
              titre: "La générosité sacrificielle et le stoïcisme héroïque",
              argument: "Tous deux acceptent le martyre sans haine et conservent une posture de dignité souveraine face aux bourreaux.",
              explication: "Le don de soi s'accomplit sans plainte : l'arbre et le poète s'érigent comme des soldats de l'esprit.",
              exemplesEtCitations: ["Personnification consentante : « Sans regretter son sang qui coule goutte à goutte / Le pin verse son baume ».", "Locution adverbiale de droiture morale : « Et se tient toujours droit ».", "Comparaison martiale explicite : « Comme un soldat blessé qui veut mourir debout »."]
            }
          ],
          transition: "Cette correspondance rigoureuse débouche sur une vision tragique de l'inspiration où le génie créateur naît de la blessure sociale.",
          fullText: `Dans la première strophe, l'analogie s'établit avec une rigueur géométrique scellée au vers 13 par l'adverbe de comparaison : « Le poète est ainsi dans les Landes du monde ». Gautier souligne d'abord la noblesse de leurs possessions respectives : si le pin recèle un « baume » précieux et parfumé qui soigne les plaies, le poète renferme au fond de son âme un « trésor » de beauté que la métaphore consacre en « divines larmes d'or ». Mais plus encore que leur richesse, c'est leur générosité héroïque qui force l'admiration. L'arbre personnifié consent à son supplice « sans regretter son sang » ; face à la violence de l'homme, il oppose la dignité immuable d'un combattant d'élite : « Comme un soldat blessé qui veut mourir debout ». Le poète fait de même : il transfigure sa solitude en grandeur stoïque.`
        },
        {
          titre: "2. L'exaltation de la douloureuse inspiration poétique",
          sousParties: [
            {
              titre: "La cruauté d'un environnement hostile et prédateur",
              argument: "Le poème dresse le tableau d'un univers désertique où la foule se comporte en bourreau insatiable.",
              explication: "La société matérialiste exploite le génie et le détruit pour s'enrichir à ses dépens.",
              exemplesEtCitations: ["Champ lexical de l'aridité : « Landes désertes », « Vrai Sahara français », « sable blanc », « herbe sèche ».", "Métonymie flétrissant l'humanité : « L'homme, avare bourreau de la création / Qui ne vit qu'aux dépens de ceux qu'il assassine ».", "Champ lexical de la torture : « plaie au flanc », « large sillon », « entaille profonde »."]
            },
            {
              titre: "L'alchimie poétique : la transfiguration de la blessure en chef-d'œuvre",
              argument: "La souffrance n'est pas un anéantissement stérile mais la condition sine qua non de la fécondité esthétique.",
              explication: "Sans la déchirure du cœur, le trésor resterait enfoui et stérile dans le silence.",
              exemplesEtCitations: ["La sentence conditionnelle fondamentale : « Lorsqu'il est sans blessure, il garde son trésor / Il faut qu'il ait au cœur une entaille profonde ».", "Les assonances plaintives en [ou] : « coule goutte à goutte », « sève qui bout », « debout ».", "La rime symbolique 'trésor / larmes d'or' consacrant la théorie baudelairienne de l'alchimie de la douleur."]
            }
          ],
          transition: "En célébrant cette blessure nécessaire, Gautier annonce la théorie du poète maudit chère aux symbolistes.",
          fullText: `Dans la seconde partie du texte, Théophile Gautier déploie une réflexion fondamentale sur les sources de l'art. L'espace physique des Landes (« désertes », « vrai Sahara français ») est le symbole de la vacuité spirituelle de la foule contemporaine. Dans cet environnement inhospitalier, l'homme est qualifié sans détour d'« avare bourreau » et de prédateur cupide. Mais c'est précisément ce harcèlement qui provoque le jaillissement poétique. La condition sine qua non du chef-d'œuvre est formulée avec l'autorité d'une loi esthétique : « Lorsqu'il est sans blessure, il garde son trésor / Il faut qu'il ait au cœur une entaille profonde / Pour épancher ses vers ». L'assonance heurtée en [ou] mime les gouttes de résine et les pleurs de l'artiste. Par une alchimie prodigieuse, la sève blessée devient de l'or pur, prouvant que le beau est l'enfant sublime de la tragédie.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "En partant de l'observation concrète des pins gemmés de Gascogne, Théophile Gautier élève une allégorie puissante sur la condition tragique du poète.",
      jugement: "Ce poème illustre avec éclat l'idéal de l'art parnassien : la conciliation d'une forme impeccablement ciselée et d'un mythe noble sur le sacrifice du créateur.",
      ouverture: "Cette allégorie du poète blessé par les hommes mais dressé vers le ciel fait écho de façon saisissante à 'L'Albatros' de Charles Baudelaire dans 'Les Fleurs du mal' (« Ses ailes de géant l'empêchent de marcher »).",
      fullText: `En conclusion, « Le Pin des Landes » s'impose comme l'un des textes manifestes de la mythologie poétique du XIXe siècle. Grâce à une analogie rigoureusement filée entre l'arbre exploité dans la lande et l'écrivain incompris des foules, Théophile Gautier transforme une scène rustique en une saisissante allégorie de la création. Le pin qui saigne pour verser son baume incarne l'artiste sacrifié sur l'autel de la Beauté. Cette célébration du poète martyr, à la fois exclu et indispensable au salut des hommes, trouve un prolongement immédiat chez Baudelaire, dont 'L'Albatros' déploiera la même majesté blessée.`
    },
    keywords: ["le pin des landes", "théophile gautier", "españa", "larmes de résine", "soldat blessé", "entaille profonde", "divines larmes d'or", "commentaire composé"]
  },

  // =========================================================================
  // 8. COMMENTAIRE COMPOSÉ : « SILENCE ON DÉVELOPPE » (JEAN-MARIE ADIAFFI)
  // =========================================================================
  {
    id: "secret-com-03-adiaffi-silence-on-developpe",
    category: "commentaire_compose",
    title: "Commentaire composé : Jean-Marie Adiaffi — « Silence on développe »",
    authorOrSource: "Jean-Marie Adiaffi",
    work: "Silence, on développe (1991)",
    themeOrGenre: "Poésie satirique et politique / Dénonciation du totalitarisme postcolonial et défense du peuple",
    statement: `Silence on développe
Silence on s’enrichit
Silence main basse sur le peuple baudet
Silence on détourne les deniers publics et les mineures
Silence on affame
Silence les princes voleurs innocents
Exécutent le peuple honnête coupable
Silence on assassine
Silence les prisons sont pleines
Silence on abrutit, on embrigade, on lave cerveaux, on
Intoxique, on rétrograde, on retourne dans l’antiquité esclavagiste, au moyen âge féodal.
Silence on retourne à la traite négrière
Silence personne n’est responsable.
Silence les ordres viennent de là-haut
Silence on drogue le peuple
Silence on prostitue
Silence les assassins prophétisent. Les tortionnaires vaticinent.
Silence le messie meurtrier annonce la fin des libertés et de la démocratie.
Silence dieu est parmi nous silence on sacre les empereurs
Bouffons qui crèvent les yeux des enfants du soleil, du ciel, de
La terre, des étoiles. Les yeux de la mer et de l’infini. Silence
On maquille les crimes, on travestit. Silence on coopère.`,
    planType: "dialectique",
    problematique: "Comment le poète démonte-t-il le caractère implacable de l'oppression totalitaire et du faux slogan de développement pour proclamer sa vibrante révolte et prendre la défense du peuple opprimé ?",
    introduction: {
      amorce: "Au lendemain des indépendances africaines, la seconde génération d'écrivains s'est heurtée avec violence aux dérives des régimes à parti unique et des dictatures néocoloniales.",
      citationEtExplication: "C'est dans ce climat de dénonciation sans concession que l'écrivain ivoirien Jean-Marie Adiaffi publie en 1992 son œuvre au titre cinglant : 'Silence, on développe'. Dans ce poème incisif, le poète s'insurge contre la confiscation du pouvoir et le pillage des richesses camouflés sous le slogan hypocrite du prétendu développement national.",
      problematique: "Dès lors, par quels procédés satiriques et rythmiques Adiaffi dévoile-t-il la violence tentaculaire de l'oppression pour mieux faire entendre le cri indomptable de sa révolte en faveur des masses bafouées ?",
      annoncePlan: "Notre commentaire composé examinera dans un premier temps le caractère multiforme et implacable de l'oppression exercée sur le peuple, avant de mettre en lumière dans un second temps l'ironie dévastatrice et la révolte émancipatrice du poète.",
      fullText: `Si la première génération des lettres négro-africaines s'est insurgée contre le colonisateur blanc, les écrivains des années 1970-1990 ont courageusement retourné leurs plumes contre les nouveaux tyrans de l'Afrique indépendante. L'écrivain et dramaturge ivoirien Jean-Marie Adiaffi figure au premier rang de ces voix indomptables. Dans son poème satirique « Silence on développe », extrait de l'ouvrage éponyme publié en 1992, il dresse un réquisitoire féroce contre les régimes corrompus qui musèlent leurs populations. Deux centres d'intérêt majeurs organisent notre étude : nous analyserons d'abord la mécanique implacable d'une oppression totale (psychologique, morale, intellectuelle et physique), avant de mettre en évidence la révolte virulente du poète qui démasque les tyrans et réhabilite la dignité du peuple.`
    },
    developpement: {
      parties: [
        {
          titre: "1. Le caractère implacable et multiforme de l'oppression totalitaire",
          sousParties: [
            {
              titre: "L'oppression psychologique et le terrorisme du silence",
              argument: "Le pouvoir impose une chape de plomb sur la société par l'injonction permanente au mutisme.",
              explication: "L'anaphore obsédante de l'impératif elliptique crée une atmosphère carcérale et paranoïaque.",
              exemplesEtCitations: ["L'anaphore du mot-ordre : « Silence on développe », « Silence on s'enrichit », « Silence on affame ».", "Le pronom indéfini anonyme et omnipotent « on » incarnant l'appareil répressif d'État."]
            },
            {
              titre: "La dégradation morale, l'abrutissement intellectuel et la terreur corporelle",
              argument: "Le régime ne se contente pas de piller les richesses : il détruit les repères éthiques et torture les corps.",
              explication: "L'abêtissement systématique des citoyens et le retour aux méthodes esclavagistes réduisent l'homme à une bête de somme.",
              exemplesEtCitations: ["Métaphore animale dégradante : « le peuple baudet ».", "L'énumération des vices entretenus : « on drogue le peuple », « on prostitue », « on détourne les deniers publics et les mineures ».", "La violence physique et concentrationnaire : « les prisons sont pleines », « on embrigade », « les tortionnaires », « crèvent les yeux ».", "Régression historique infâme : « antiquité esclavagiste », « moyen âge féodal », « traite négrière »."]
            }
          ],
          transition: "Face à cette machination monstrueuse qui érige le crime en méthode de gouvernement, le poète refuse de se taire et oppose sa parole vengeresse.",
          fullText: `Dans la première partie, Jean-Marie Adiaffi met à nu les rouages d'une terreur méthodique. Cette violence est d'abord psychologique : la répétition anaphorique forcenée de l'ordre « Silence » (martelé en tête de presque chaque vers) installe une atmosphère étouffante où toute pensée dissidente est criminalisée. L'emploi récurrent du pronom indéfini « on » (« on affame », « on assassine », « on abrutit ») évoque une machinerie dictatoriale invisible et omnipotente. Cette oppression est ensuite morale et intellectuelle : en qualifiant le peuple de « peuple baudet », le tyran revendique son animalisation pour mieux justifier l'endoctrinement (« on lave cerveaux », « on intoxique »). Enfin, elle culmine dans la barbarie physique : les cachots débordent, les tortionnaires sévissent, réactivant les heures les plus sombres de la traite négrière et du féodalisme.`
        },
        {
          titre: "2. La révolte virulente du poète et la réhabilitation du peuple",
          sousParties: [
            {
              titre: "Le portrait au vitriol des oppresseurs et la démystification du faux développement",
              argument: "Le poète démonte la rhétorique officielle en révélant que le 'développement' n'est que l'enrichissement illicite d'une clique prédatrice.",
              explication: "Par l'oxymore ironique et la dérision, Adiaffi désamorce le culte de la personnalité du tyran sanguinaire.",
              exemplesEtCitations: ["L'antithèse révélatrice : « Silence on développe » immédiatement suivie de « Silence on s'enrichit ».", "Oxymores grinçants : « les princes voleurs innocents », « le messie meurtrier ».", "Désignation carnavalesque des chefs d'État : « les empereurs bouffons ».", "Dénonciation de la lâcheté des collaborateurs : « Silence les ordres viennent de là-haut », « Silence personne n'est responsable », « Silence on coopère »."]
            },
            {
              titre: "La prise de parole en avocat du peuple innocent",
              argument: "Adiaffi prend parti pour les victimes en soulignant l'injustice flagrante de leur culpabilisation.",
              explication: "Le poète use d'une périphrase cosmique et lyrique pour conférer aux opprimés une pureté sacrée face aux crimes du régime.",
              exemplesEtCitations: ["Chiasme oxymorique : « princes voleurs innocents » face au « peuple honnête coupable ».", "Périphrase grandiose et poétique désignant les opprimés : « les enfants du soleil, du ciel, de la terre, des étoiles, de la mer et de l'infini ».", "Le cri final qui démasque le mensonge d'État : « On maquille les crimes, on travestit »."]
            }
          ],
          transition: "En rompant le silence imposé, le poème devient un acte de libération politique et civique.",
          fullText: `Dans la seconde partie, le texte s'affirme comme un manifeste de révolte et de salubrité publique. Adiaffi démasque avec une ironie cinglante l'imposture du pouvoir : le slogan sacré du « développement » n'est qu'un paravent cynique pour couvrir le pillage (« Silence on s'enrichit »). Le despote, qui prétendait au rôle de sauveur divin, est ramené à sa vérité de bandit par l'oxymore décapant du « messie meurtrier » et l'apostrophe méprisante des « empereurs bouffons ». Le poète cloue au pilori la lâcheté des exécutants qui se défaussent derrière les consignes hiérarchiques (« Silence personne n'est responsable »). Endossant la robe d'avocat des humbles, Adiaffi réhabilite ce peuple inversé en coupable : par une périphrase lumineuse, il le célèbre comme les « enfants du soleil, du ciel, de la terre, des étoiles », affirmant que le massacre de ces innocents constitue un sacrilège contre l'humanité entière.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "Dans ce poème coup-de-poing, Jean-Marie Adiaffi transforme le mot d'ordre d'asservissement ('Silence') en un éclatant vacarme de contestation républicaine.",
      jugement: "En dévoilant l'hypocrisie des tyrans qui invoquent le développement pour mieux bâillonner leurs peuples, l'écrivain rend à la poésie son statut d'arme de libération massive.",
      ouverture: "Ce cri de colère fait écho aux dénonciations satiriques du 'Pleurer-Rire' d'Henri Lopes et des 'Soleils des indépendances' d'Ahmadou Kourouma, témoignant de l'indispensable vigilance des écrivains face à la tentation totalitaire.",
      fullText: `En conclusion, « Silence on développe » de Jean-Marie Adiaffi constitue l'un des sommets de la littérature militante postcoloniale en Afrique. Par le martèlement obsédant de l'injonction au silence, le poète parvient paradoxalement à faire entendre le vacarme assourdissant de la révolte populaire. En démasquant la supercherie d'une classe dirigeante qui confond développement national et pillage personnel, Adiaffi rappelle avec éclat qu'il n'existe pas de progrès véritable sans liberté ni justice. À l'instar d'Henri Lopes dans 'Le Pleurer-Rire', il démontre que le verbe poétique demeure le dernier rempart des peuples contre la barbarie des régimes sans foi ni loi.`
    },
    keywords: ["silence on developpe", "jean-marie adiaffi", "adiaffi", "silence on s'enrichit", "peuple baudet", "messie meurtrier", "commentaire composé"]
  },

  // =========================================================================
  // 9. COMMENTAIRE COMPOSÉ : « MATURITÉ » (DENISE JALLAIS)
  // =========================================================================
  {
    id: "secret-com-04-jallais-maturite",
    category: "commentaire_compose",
    title: "Commentaire composé : Denise Jallais — « Maturité »",
    authorOrSource: "Denise Jallais",
    work: "La poésie féminine contemporaine",
    themeOrGenre: "Poésie lyrique et existentielle / Nostalgie de l'enfance et désenchantement de l'âge adulte",
    statement: `Finie la pulpe douce de l’inconscience
Tout crépite de bon sens
Puis s’éteint an par an
Comment alors la fumée
Les pas dans la cendre
Et la mesure du temps
Avant
Avant c’était l’herbe
L’eau
Le sel
Le soleil
J’étais tapie dans l’enfance
Ai-je vraiment mangé autre chose
Que du vent
Des framboises
Et le cœur pointu des roses ?
Avant il y avait
La tempête dans les fuschias
Le goût des petits pois crus
Les lilas de ma grand-mère
La mer comme une barque
A me naviguer sur le cœur
Avant c’était pâques
Des chapeaux blancs
Des marguerites
Des grands jardins acides
Des scarabées dans chaque paume
Avant il y avait des plages
Des marchés
De l’été
Des cris
Des entremets
Et l’ombre des magnolias
Avant
C’était la fête
Mais finie la pulpe douce de l’inconscience
Je suis une grande personne
Qui sait charrier les cadavres
Ceux des morts et ceux des gens
Marcher dans la cendre
Et mesurer le temps.`,
    planType: "dialectique",
    problematique: "Comment, par le contraste des images et la rupture des rythmes, la poétesse oppose-t-elle l'éden sensoriel de l'enfance aux contraintes tragiques de la maturité ?",
    introduction: {
      amorce: "S'il est une constance dans la vie des adultes, c'est cette tendance universelle à entretenir avec leur enfance une relation idyllique et amoureuse.",
      citationEtExplication: "Ce constat vaut pour Denise Jallais qui, dans son poème « Maturité » extrait de 'La Poésie féminine contemporaine', se souvient avec mélancolie de ce paradis coloré où la vie n'était que volupté. L'avènement de l'âge adulte y est vécu comme une brutale expulsion de l'insouciance.",
      problematique: "Dès lors, comment les jeux d'images et les modulations du rythme traduisent-ils ce passage déchirant du bonheur pur de l'enfance au désenchantement de l'âge mûr ?",
      annoncePlan: "Nous étudierons dans un premier axe les différents aspects de ce bonheur enfantin, avant d'analyser dans un second axe les dures réalités et la tragédie de l'âge adulte.",
      fullText: `S'il est une constante dans le regard que les adultes portent sur leur passé, c'est cette propension à célébrer l'enfance comme un âge d'or enchanté. Ce constat s'impose avec évidence dans le poème « Maturité » de Denise Jallais, extrait de l'anthologie 'La Poésie féminine contemporaine'. La poétesse y contemple avec une tendre mélancolie les splendeurs disparues des premières années pour mieux mesurer le poids accablant des responsabilités adultes. Deux centres d'intérêt ordonneront notre commentaire composé : nous analyserons d'abord l'évocation paradisiaque des bonheurs de l'enfance à travers la communion avec la nature et le réveil des sens, puis nous examinerons la prise de conscience angoissée de la fuite du temps et des épreuves de la maturité.`
    },
    developpement: {
      parties: [
        {
          titre: "1. Les différents aspects du bonheur de l'enfance : un éden sensoriel",
          sousParties: [
            {
              titre: "Une communion édénique avec la nature",
              argument: "L'enfance est dépeinte comme un âge de pure symbiose avec les éléments naturels vitaux.",
              explication: "L'eau, l'herbe, le sel et le soleil composent un univers féerique et nourricier.",
              exemplesEtCitations: ["Champ lexical de la nature primitive : « l'herbe », « l'eau », « le sel », « le soleil ».", "Métaphore nourricière : « Ai-je vraiment mangé autre chose / Que du vent / Des framboises / Et le cœur pointu des roses ? ».", "L'enfance comme refuge protecteur : « J'étais tapie dans l'enfance »."]
            },
            {
              titre: "L'éveil jubilatoire de tous les sens et la liberté d'évasion",
              argument: "Le poème célèbre l'acuité des sensations enfantines : goût, odorat, vue, ouïe et toucher.",
              explication: "Les vacances et les fêtes rythment une existence affranchie de toute contrainte matérielle.",
              exemplesEtCitations: ["Plaisir gustatif et olfactif : « petits pois crus », « lilas », « magnolias », « entremets ».", "Plaisir tactile et ludique : « des scarabées dans chaque paume ».", "Comparaison voyageuse : « La mer comme une barque / À me naviguer sur le cœur ».", "Champ lexical de la réjouissance : « pâques », « chapeaux blancs », « c'était la fête »."]
            }
          ],
          transition: "Malheureusement, cet éden ne pouvait être éternel, et le surgissement de la maturité brise ce cercle enchanté.",
          fullText: `Dans le premier axe, Denise Jallais fait revivre les délices d'un passé radieux. L'enfance apparaît d'abord comme un état de grâce et d'harmonie totale avec le cosmos. Énumérés en vers brefs et limpides, les éléments primordiaux (« l'herbe », « l'eau », « le sel », « le soleil ») créent un univers lumineux et protecteur au sein duquel l'enfant était « tapie » comme dans un nid douillet. Cette vie se nourrit d'une poésie concrète où les délices de la nature deviennent des friandises métaphoriques : manger « du vent », « des framboises » et le « cœur pointu des roses ». Tous les sens sont en fête : le goût des « petits pois crus », le parfum des « lilas » et des « magnolias », jusqu'au contact tactile singulier des « scarabées dans chaque paume ». L'insouciance absolue faisait de chaque instant une fête perpétuelle.`
        },
        {
          titre: "2. Les dures réalités et la tragédie de l'âge adulte",
          sousParties: [
            {
              titre: "L'âge de la responsabilité et la mort de l'insouciance",
              argument: "Devenir adulte, c'est rompre avec la rêverie pour se soumettre aux diktats de la raison et du devoir.",
              explication: "Le bon sens étouffe la fraîcheur poétique et impose la conscience du tragique.",
              exemplesEtCitations: ["Rupture annoncée dès l'ouverture et reprise à la fin : « Finie la pulpe douce de l'inconscience ».", "Métaphore fruitière de l'insouciance dévorée par la sécheresse de la raison : « Tout crépite de bon sens ».", "Constat résigné d'affirmation : « Je suis une grande personne »."]
            },
            {
              titre: "La fuite inexorable du temps et la hantise de la mort",
              argument: "L'adulte est habité par la conscience douloureuse du néant et de l'anéantissement.",
              explication: "Les cendres, la fumée et les cadavres symbolisent la décrépitude inéluctable de l'existence.",
              exemplesEtCitations: ["Formules anaphoriques du regret : « Avant », « Avant c'était », « Avant il y avait » opposées au présent accablant.", "Lexique du feu mourant : « la fumée », « les pas dans la cendre ».", "Image funèbre saisissante : « Qui sait charrier les cadavres / Ceux des morts et ceux des gens / Marcher dans la cendre / Et mesurer le temps »."]
            }
          ],
          transition: "Cette prise de conscience de la condition humaine débouche sur une nostalgie indépassable.",
          fullText: `Dans le second axe, la poétesse dresse le constat cruel de la désillusion. Dès le vers liminaire, le participe passé « Finie » scelle la mort de l'innocence : « Finie la pulpe douce de l'inconscience ». Le bon sens adulte n'apporte nulle paix : il « crépite » comme un incendie destructeur qui brûle les rêves. Les imparfaits nostalgiques (« c'était », « il y avait ») s'effacent devant un présent sinistre : « Je suis une grande personne ». Désormais, l'adulte est celui qui doit « charrier les cadavres », marcher dans la « cendre » des illusions perdues et « mesurer le temps ». L'omniprésence du lexique funèbre et de la cendre traduit l'entrée dans la finitude : le temps cesse d'être une promesse d'été pour devenir l'artisan implacable de la mort.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "Le poème « Maturité » met en scène la douloureuse dialectique entre l'éden insouciant de l'enfance et la pesanteur mortifère de l'âge adulte.",
      jugement: "Par la puissance de ses métaphores sensorielles et la musicalité contrastée de ses rythmes, Denise Jallais traduit le malaise existentiel de tout être confronté à l'usure du temps.",
      ouverture: "Ce chant nostalgique rejoint les accents de Baudelaire célébrant dans 'Moesta et errabunda' le paradis perdu des premières années : « Mais le vert paradis des amours enfantines... L'innocent paradis, plein de plaisirs furtifs, / Est-il déjà plus loin que l'Inde et que la Chine ? ».",
      fullText: `En conclusion, « Maturité » de Denise Jallais exprime avec une intensité bouleversante la blessure originelle de l'adulte : la perte irréversible de l'enfance. En confrontant l'abondance sensuelle d'autrefois à la cendre du présent, la poétesse fait de son poème un tombeau érigé à l'insouciance. Si la maturité confère à l'être le discernement et la lucidité, elle lui arrache le trésor de l'émerveillement. À l'image du « vert paradis des amours enfantines » pleuré par Baudelaire, l'enfance reste pour Denise Jallais cette patrie perdue que seule la création poétique peut brièvement ressusciter.`
    },
    keywords: ["denise jallais", "maturite", "pulpe douce de l'inconscience", "tout crepite de bon sens", "avant c'etait l'herbe", "charrier les cadavres", "commentaire composé"]
  },

  // =========================================================================
  // 10. COMMENTAIRE COMPOSÉ : « UN COUP D'ÉTAT » (HENRI LOPÈS)
  // =========================================================================
  {
    id: "secret-com-05-lopes-coup-detat",
    category: "commentaire_compose",
    title: "Commentaire composé : Henri Lopès, Le Pleurer-Rire — « Un coup d'État »",
    authorOrSource: "Henri Lopès",
    work: "Le Pleurer-Rire (1982)",
    themeOrGenre: "Roman satirique et politique / Chronique d'un coup d'État africain et désillusion populaire",
    statement: `Toute la journée, la radio a continué son programme de musique militaire, l’interrompant à intervalles réguliers pour diffuser, sans autre commentaire, le communiqué du matin par la voix au ton d’instituteur appliqué. Farfouillant dans mon poste, j’ai réussi à capter des stations étrangères. Longs commentaires, sauf sur ce qui se passait et que je voulais savoir... Radio France Internationale nous fit entendre la voix de Polépolé. Une déclaration faite de l’étranger dans laquelle les nouveaux chefs du pays étaient baptisés de putschistes...
Elengui et moi le remerciâmes de son attitude. Nous n’aimons pas le sang. Car dans ces choses-là c’est nous, les innocents, qui le versons. Mais les nègres auraient-ils vraiment sorti leurs sagaies et leurs flèches si Polépolé s’était entêté ? Est-ce qu’il gouvernait en s’occupant d’eux ? Qui serait allé mourir à sa place ? 
Lui ou un autre, pour nous, c’était toujours la même vie. Hier, nos misères provenaient du Blanc qu’il fallait chasser pour que le bonheur vienne. Aujourd’hui les Oncles sont partis et la misère est toujours là. Qui donc faut-il chasser ? La garde de Polépolé n’avait pas résisté, cette nuit-là. Je n’en ris pas et ne l’en blâme pas. Peut-on ramener sous le sol l’igname montée en tige ? 
Ça n’a pas tardé. Dès le lendemain, la radio a commencé à publier des messages de soutien des différents corps de l’armée et des commandants de toutes les zones militaires.`,
    planType: "dialectique",
    problematique: "Comment le narrateur rend-il compte de la mécanique prévisible du coup d'État pour exprimer la lassitude, l'indifférence et le pessimisme politique du peuple ?",
    introduction: {
      amorce: "Depuis les années 1960, l'histoire politique africaine a été scandée par une succession tragique de coups d'État militaires renversant des régimes corrompus pour en installer d'autres tout aussi prédateurs.",
      citationEtExplication: "C'est cette désillusion collective qu'Henri Lopès, romancier congolais de la deuxième génération, dépeint avec une ironie mordante dans son chef-d'œuvre 'Le Pleurer-Rire' publié en 1982. Dans l'épisode intitulé « Un coup d'État », le narrateur relate la chute sans gloire du président Polépolé, renversé par une junte militaire.",
      problematique: "Dès lors, comment le récit de ce brusque changement de régime révèle-t-il la résignation désabusée et le scepticisme lucide du petit peuple africain ?",
      annoncePlan: "Nous étudierons dans un premier centre d'intérêt les manifestations caractéristiques du changement de régime (mise sous tutelle des médias, fuite du président et allégeance de l'armée), avant d'analyser dans un second centre d'intérêt les sentiments de lassitude, d'indifférence et de fatalisme éprouvés par le narrateur.",
      fullText: `L'accession des États africains à la souveraineté internationale a rapidement été assombrie par l'irruption récurrente des coups de force militaires sur la scène politique. Témoin critique de ces dérives, le romancier congolais Henri Lopès publie en 1982 'Le Pleurer-Rire', satire féroce des dictatures tropicales. Dans l'extrait « Un coup d'État », il met en scène la destitution du président Polépolé et les réactions populaires qui l'accompagnent. Deux axes d'analyse structureront notre commentaire composé : nous verrons d'abord comment le texte restitue la mise en scène classique du coup d'État à travers le contrôle des médias, l'exil lâche du souverain déchu et l'opportunisme de l'armée, puis nous analyserons les sentiments de désabusement, d'ironie et de profonde lassitude exprimés par le narrateur face à cette comédie politique.`
    },
    developpement: {
      parties: [
        {
          titre: "1. La scénographie d'un changement de régime : la mécanique du coup de force",
          sousParties: [
            {
              titre: "Le contrôle militaire des médias et le simulacre de communication",
              argument: "La radio nationale devient immédiatement l'instrument de propagande exclusif des putschistes.",
              explication: "La musique martiale et la lecture maladroite du communiqué traduisent la confiscation de la parole publique.",
              exemplesEtCitations: ["Répétition de la musique militaire interrompant les programmes.", "La comparaison ironique : « la voix au ton d'instituteur appliqué » (le soldat jouant gauchement au journaliste).", "Le recours obligatoire aux radios étrangères comme RFI pour savoir ce qui se trame dans son propre pays."]
            },
            {
              titre: "La fuite sans gloire du dirigeant et l'allégeance opportuniste des troupes",
              argument: "Le discours moralisateur de Polépolé en exil masque mal son absence totale de légitimité populaire et la trahison immédiate de sa garde.",
              explication: "L'armée retourne sa veste sans scrupule, démontrant l'inanité des fidélités officielles.",
              exemplesEtCitations: ["Périphrase du chef en fuite : « déclaration faite de l'étranger ».", "Le proverbe populaire fataliste : « Peut-on ramener sous le sol l'igname montée en tige ? ».", "L'empressement servile des officiers : « Dès le lendemain, la radio a commencé à publier des messages de soutien des différents corps de l'armée »."]
            }
          ],
          transition: "Cette rotation mécanique des maîtres du pouvoir ne trompe nullement les citoyens ordinaires, spectateurs désabusés d'une tragédie répétitive.",
          fullText: `Dans un premier temps, Henri Lopès démonte avec une précision clinique la liturgie stéréotypée des putschs militaires en Afrique. Le premier signal du changement réside dans l'invasion des ondes : les programmes habituels sont balayés par des marches martiales et un « communiqué du matin » lu « d'un ton d'instituteur appliqué », métaphore cinglante qui souligne l'amateurisme des soldats mués en censeurs. La confiscation de la vérité locale oblige la population à tendre l'oreille vers RFI pour apprendre la fuite du président Polépolé. Réfugié à l'étranger, celui-ci invoque pompeusement le refus d'un « bain de sang inutile », paravent héroïque qui dissimule mal sa terreur personnelle et le lâchage unanime de sa garde prétorienne. L'empressement des généraux à proclamer leur allégeance aux nouveaux maîtres boucle la boucle d'une farce prévisible.`
        },
        {
          titre: "2. Les sentiments du narrateur : désillusion, lassitude et scepticisme populaire",
          sousParties: [
            {
              titre: "L'indifférence et le refus du sacrifice héroïque",
              argument: "Le petit peuple refuse de servir de chair à canon pour des tyrans qui ne se sont jamais souciés de lui.",
              explication: "Les questions oratoires démystifient le prétendu devoir de fidélité nationale.",
              exemplesEtCitations: ["Questions rhétoriques décapantes : « Mais les nègres auraient-ils vraiment sorti leurs sagaies et leurs flèches si Polépolé s'était entêté ? », « Est-ce qu'il gouvernait en s'occupant d'eux ? Qui serait allé mourir à sa place ? ».", "Revendication du droit à la survie des humbles : « Car dans ces choses-là c'est nous, les innocents, qui le versons »."]
            },
            {
              titre: "Le pessimisme historique et le sentiment de vacuité",
              argument: "Qu'il s'agisse des colons blancs ou des dictateurs noirs, la misère demeure la condition invariable des masses.",
              explication: "Le narrateur formule un désenchantement amer qui constate la pérennité du malheur social.",
              exemplesEtCitations: ["L'adage désabusé : « Lui ou un autre, pour nous, c'était toujours la même vie ».", "L'antithèse historique : « Hier, nos misères provenaient du Blanc... Aujourd'hui les Oncles sont partis et la misère est toujours là. Qui donc faut-il chasser ? »."]
            }
          ],
          transition: "Cette lucidité populaire transforme le récit en une satire politique dévastatrice.",
          fullText: `Dans un second temps, le texte s'élève au rang de réquisitoire contre l'illusion des indépendances à travers la voix désabusée du narrateur. Le peuple refuse catégoriquement d'être dupe de la comédie guerrière. Les interrogations oratoires (« Qui serait allé mourir à sa place ? ») tranchent dans le vif de la démagogie : pourquoi le paysan ou l'ouvrier défendrait-il un monarque qui n'a jamais amélioré son sort ? Ce refus de verser son sang traduit un puissant instinct de conservation face à des maîtres interchangeables : « Lui ou un autre, pour nous, c'était toujours la même vie ». Le constat final est d'une lucidité tragique : le départ des colons blancs n'a débouché que sur l'installation des « Oncles » dictateurs, laissant la pauvreté intacte. L'indifférence du narrateur n'est pas de la lâcheté, mais la suprême défense des faibles contre les impostures de l'Histoire.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "À travers le récit de ce coup d'État, Henri Lopès réussit le tour de force de marier la truculence satirique à une méditation sociologique rigoureuse sur le pouvoir en Afrique.",
      jugement: "En adoptant le point de vue du citoyen anonyme, l'auteur dépouille le dictateur de son aura sacrée et dénonce l'hypocrisie des querelles de palais.",
      ouverture: "Cette démystification du pouvoir postcolonial fait écho au roman d'Ahmadou Kourouma 'En attendant le vote des bêtes sauvages' où le tyran Koyaga met en scène sa propre caricature sous les yeux d'un peuple pris en otage.",
      fullText: `En conclusion, « Un coup d'État » extrait du 'Pleurer-Rire' d'Henri Lopès offre une radiographie sans complaisance des impasses politiques de l'Afrique postcoloniale. Par le recours à un narrateur populaire armé d'un bon sens décapant et d'une ironie salvatrice, l'écrivain congolais démystifie les discours pompeux des dirigeants comme des putschistes. En montrant que la succession des régimes ne modifie en rien la précarité des masses laborieuses, Lopès interpelle avec gravité la conscience africaine : le salut ne viendra pas des armes ni des proclamations radiophoniques, mais d'une véritable refondation démocratique au service des peuples.`
    },
    keywords: ["un coup d'etat", "henri lopes", "le pleurer-rire", "polepole", "la radio", "elengui", "qui serait alle mourir a sa place", "commentaire composé"]
  },

  // =========================================================================
  // 11. COMMENTAIRE COMPOSÉ : « LES VAUTOURS » (DAVID DIOP)
  // =========================================================================
  {
    id: "secret-com-06-david-diop-vautours",
    category: "commentaire_compose",
    title: "Commentaire composé : David Diop, Coups de pilon — « Les Vautours »",
    authorOrSource: "David Diop",
    work: "Coups de pilon (1956)",
    themeOrGenre: "Poésie engagée de la Négritude / Réquisitoire anticolonialiste et foi révolutionnaire",
    statement: `En ce temps-là
A coups de gueule de civilisation
A coups d’eau bénite sur les fronts domestiqués
Les vautours construisaient à l’ombre de leurs serres
Le sanglant monument de l’ère tutélaire
En ce temps-là
Les rires agonisaient dans l’enfer métallique des routes
Et le rythme monotone des Pater-Noster
Couvrait les hurlements des plantations à profit
O le souvenir acide des baisers arrachés
Les promesses mutilées au choc des mitrailleuses
Hommes étranges qui n’étiez pas des hommes
Vous saviez tous les livres vous ne saviez pas l’amour
Et les mains qui fécondent le ventre de la terre
Les racines de nos mains profondes comme la révolte
Malgré vos chants d’orgueil au milieu des charniers
Les villages désolés l’Afrique écartelée
L’espoir vivait en nous comme une citadelle
Et des mines du Souaziland à la sueur lourde des usines d’Europe
Le printemps prendra chair sous nos pas de clarté.`,
    planType: "dialectique",
    problematique: "Comment le poète démonte-t-il les violences iniques de la colonisation pour justifier son sentiment d'indignation et proclamer l'inéluctable avènement de la liberté africaine ?",
    introduction: {
      amorce: "Au lendemain de la Seconde Guerre mondiale, la poésie négro-africaine devient le fer de lance de la lutte anticoloniale, troquant l'élégie nostalgique contre une parole de feu.",
      citationEtExplication: "David Mandessi Diop (1927-1960), poète métis sénégalo-camerounais de la seconde génération de la Négritude, incarne cette intransigeance dans son recueil 'Coups de pilon' paru en 1956. Son poème emblématique « Les Vautours » constitue un réquisitoire implacable contre l'hypocrisie et les massacres perpétrés par l'impérialisme occidental en terre africaine.",
      problematique: "Dès lors, en exploitant les ressources de l'invective et des allégories poétiques, comment l'auteur justifie-t-il son sentiment de révolte par la dénonciation des pratiques odieuses du colonisateur avant de sonner le réveil de l'espoir révolutionnaire ?",
      annoncePlan: "Notre commentaire composé mettra en évidence dans un premier temps le tableau des atrocités et de l'exploitation coloniales, avant d'analyser dans un second temps la révolte indignée du poète et sa foi invincible dans la libération de l'Afrique.",
      fullText: `Au cœur des années 1950, alors que les peuples colonisés amorcent leur marche héroïque vers les indépendances, la poésie négro-africaine se fait l'écho vibrant de leurs aspirations. David Diop, disparu tragiquement à l'âge de trente-trois ans, s'impose dans son unique recueil 'Coups de pilon' (1956) comme la voix la plus incisive de la Négritude militante. Dans « Les Vautours », il jette à la face du monde la vérité crue de l'oppression européenne. Deux centres d'intérêt guideront notre analyse méthodique : nous examinerons d'abord comment le poète dévoile les pratiques inhumaines du colonisateur (travail forcé, génocide, exploitation économique et aliénation culturelle), puis nous étudierons les ressorts de sa sainte révolte débouchant sur la prophétie triomphale d'une Afrique affranchie.`
    },
    developpement: {
      parties: [
        {
          titre: "1. Le réquisitoire contre les pratiques odieuses du colonisateur",
          sousParties: [
            {
              titre: "Le travail forcé et l'entreprise d'extermination",
              argument: "La colonisation n'a pas apporté le progrès mais a transformé le continent en un bagne géant.",
              explication: "Les chantiers et les plantations ont englouti des millions de vies sous le couvert de la 'tutelle'.",
              exemplesEtCitations: ["Métaphore animale prédatrice : « Les vautours construisaient à l'ombre de leurs serres / Le sanglant monument de l'ère tutélaire ».", "Métaphore concentrationnaire : « l'enfer métallique des routes ».", "Métonymie de la douleur ouvrière : « les hurlements des plantations à profit ».", "Champ lexical de la mort de masse : « charniers », « villages désolés », « l'Afrique écartelée »."]
            },
            {
              titre: "La complicité de l'Église et l'aliénation des esprits",
              argument: "L'évangélisation a servi de caution morale et spirituelle à la violence économique.",
              explication: "La prière et le baptême ont anesthésié la résistance des Noirs pour mieux les soumettre.",
              exemplesEtCitations: ["L'anaphore accusatrice : « À coups de gueule de civilisation / À coups d'eau bénite sur les fronts domestiqués ».", "L'opposition révoltante : « Et le rythme monotone des Pater-Noster / Couvrait les hurlements des plantations à profit »."]
            }
          ],
          transition: "Cette trahison absolue des idéaux de fraternité soulève le mépris et l'indignation sacrée du poète.",
          fullText: `Dans un premier temps, David Diop instruit le procès sans appel du colonialisme. Dès le titre et la première strophe, les envahisseurs sont déchus de leur humanité par la métaphore animale des « vautours », charognards rapaces dont la prétendue tutelle n'a édifié qu'un « sanglant monument ». Le poète dénonce avec virulence la collusion hypocrite du sabre et du goupillon : les « coups de gueule de civilisation » font alliance avec les « coups d'eau bénite » pour imposer le joug sur des « fronts domestiqués ». Loin d'émanciper, l'ordre colonial broie les hommes dans le travail forcé : sur « l'enfer métallique des routes », le chant pieux des « Pater-Noster » étouffe cyniquement les râles des forçats de la terre. Le continent devient un charnier à ciel ouvert, une « Afrique écartelée » livrée au pillage des richesses.`
        },
        {
          titre: "2. La révolte du poète et la prophétie de la libération",
          sousParties: [
            {
              titre: "Le constat cinglant de la faillite morale occidentale",
              argument: "Les colons se piquaient de culture livresque mais ignoraient la seule valeur fondamentale : l'amour du prochain.",
              explication: "L'antithèse oppose le savoir intellectuel aride à la noblesse humaine des opprimés.",
              exemplesEtCitations: ["L'apostrophe décapante : « Hommes étranges qui n'étiez pas des hommes / Vous saviez tous les livres vous ne saviez pas l'amour ».", "L'oxymore dénonçant la tromperie : « Les promesses mutilées au choc des mitrailleuses »."]
            },
            {
              titre: "L'espérance invincible et la métaphore du renouveau printanier",
              argument: "Malgré les sévices, la résistance des peuples noirs est demeurée inébranlable et prépare la victoire.",
              explication: "La solidarité internationale des prolétaires noirs portera l'aube d'un monde sans chaînes.",
              exemplesEtCitations: ["Comparaison fortifiante : « L'espoir vivait en nous comme une citadelle ».", "Enracinement tellurique : « Les racines de nos mains profondes comme la révolte ».", "Allégorie de la révolution triomphante : « Le printemps prendra chair sous nos pas de clarté »."]
            }
          ],
          transition: "Le poème s'achève non sur une lamentation, mais sur un serment de victoire.",
          fullText: `Dans un second temps, le texte vibre d'une révolte hautaine qui culmine dans l'affirmation d'une espérance indestructible. David Diop refuse aux bourreaux le titre d'hommes par une apostrophe cinglante : « Hommes étranges qui n'étiez pas des hommes / Vous saviez tous les livres vous ne saviez pas l'amour ». Cette aridité morale des oppresseurs se heurte à la puissance vitale des Africains, intimement soudés au « ventre de la terre ». Même sous le feu des mitrailleuses, « l'espoir vivait en nous comme une citadelle ». Par une vision eschatologique et solidaire qui unit les mineurs du Swaziland aux ouvriers d'Europe, Diop annonce la fin inéluctable de l'hiver colonial : l'allégorie finale du « printemps qui prendra chair sous nos pas de clarté » consacre la poésie comme prophétie lumineuse de l'indépendance retrouvée.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "Dans « Les Vautours », David Diop transforme l'amertume d'un peuple bafoué en une étincelle révolutionnaire rédemptrice.",
      jugement: "Alliant la violence du pamphlet à la majesté du souffle lyrique, l'auteur réalise la devise de la Négritude combattante : faire du poème une arme de dignité.",
      ouverture: "Cette parole sans concession confirme la célèbre formule d'Aimé Césaire dans son 'Discours sur le colonialisme' : « Une nation qui colonise, une civilisation qui justifie la colonisation donc la force est déjà une civilisation malade ».",
      fullText: `En conclusion, « Les Vautours » de David Diop demeure l'un des chefs-d'œuvre les plus vibrants de la littérature engagée universelle. En arrachant le masque mensonger de la mission civilisatrice pour faire entendre la rumeur des charniers et le sanglot des plantations, le poète donne une voix indestructible aux martyrs de la terre. Mais son génie est d'avoir su dépasser l'indignation pour faire de sa strophe une promesse de renouveau. En proclamant que le printemps de l'Afrique prendra chair sous les pas des peuples debout, David Diop a prouvé que la poésie est la plus haute célébration de la liberté humaine.`
    },
    keywords: ["les vautours", "david diop", "coups de pilon", "a coups de gueule de civilisation", "pater-noster", "hommes etranges", "le printemps prendra chair", "commentaire composé"]
  },

  // =========================================================================
  // 12. COMMENTAIRE COMPOSÉ : « LE LIVRE DE MA MÈRE » (ALBERT COHEN)
  // =========================================================================
  {
    id: "secret-com-07-albert-cohen-livre-mere",
    category: "commentaire_compose",
    title: "Commentaire composé : Albert Cohen — Le Livre de ma mère (1954)",
    authorOrSource: "Albert Cohen",
    work: "Le Livre de ma mère (1954)",
    themeOrGenre: "Récit autobiographique et élégiaque / Célébration sacrée de la mère et forme de la prière liturgique",
    statement: `Louange à vous, mères de tous les pays, louange à vous en votre soeur ma mère, en la majesté de ma mère morte. Mères de toute la terre, Nos Dames les mères, je vous salue, vieilles chéries, vous qui nous avez appris à faire les noeuds des lacets de nos souliers, qui nous avez appris à nous moucher, oui, qui nous avez montré qu'il faut souffler dans le mouchoir et y faire feufeu, comme vous nous disiez, vous, mères de tous les pays, vous qui patiemment enfourniez, cuillère après cuillère, la semoule que nous, bébés, faisions tant de chichis pour accepter, vous qui, pour nous encourager à avaler des pruneaux cuits, nous expliquiez que les pruneaux sont de petits nègres qui veulent rentrer dans leur maison et alors le petit crétin, ravi et soudain poète, ouvrait la porte de la maison, vous qui nous avez appris à nous gargariser et qui faisiez reureu pour nous encourager et nous montrer, vous qui étiez sans cesse à arranger nos mèches bouclées et nos cravates pour que nous fussions jolis avant l'arrivée des visites ou avant notre départ pour l'école, vous qui sans cesse harnachiez et pomponniez vos vilains nigauds petits poneys de fils dont vous étiez les bouleversantes propriétaires, vous qui nettoyiez tout de nous et nos sales genoux terreux ou écorchés et nos sales petits nez de marmots morveux, vous qui n'aviez aucun dégoût de nous, vous, toujours si faibles avec nous, indulgentes qui plus tard vous laissiez si facilement embobiner et refaire par vos fils adolescents et leur donniez toutes vos économies, je vous salue, majestés de nos mères. Je vous salue, mères pleines de grâce.`,
    planType: "dialectique",
    problematique: "Comment, à travers le souvenir ému des gestes du quotidien, le narrateur dresse-t-il un portrait idéalisé de la mère et structure-t-il son texte comme une authentique prière liturgique ?",
    introduction: {
      amorce: "Dans le domaine de l'autobiographie littéraire, la disparition de la mère suscite souvent une quête désespérée pour ressusciter sa figure tutélaire par la magie du verbe.",
      citationEtExplication: "C'est à cet élan sacré qu'obéit l'écrivain d'origine suisse et juive ottomane Albert Cohen dans son bouleversant récit 'Le Livre de ma mère', publié en 1954. Dans cette célébration lyrique, l'auteur transcende les menus gestes de l'enfance pour rendre un hommage quasi religieux à sa génitrice et à toutes les mères de la terre.",
      problematique: "Dès lors, par quels procédés affectifs et rhétoriques Cohen sublime-t-il l'amour maternel au point de transformer son hommage en une véritable prière sacrée ?",
      annoncePlan: "Notre commentaire composé examinera dans un premier axe l'image chaleureuse, nourricière et indulgente de la mère, avant d'analyser dans un second axe le fonctionnement du texte comme une oraison mystique calquée sur les prières mariales.",
      fullText: `Dans la littérature autobiographique, la mémoire de la mère disparue hante les grands créateurs comme un sanctuaire inviolable de tendresse. L'écrivain Albert Cohen donne à cette dévotion ses lettres de noblesse dans son chef-d'œuvre 'Le Livre de ma mère' paru en 1954. Face à la majesté du deuil, il immortalise les soins minuscules de l'enfance pour ériger sa mère au rang d'une divinité terrestre. Deux centres d'intérêt ordonnent notre étude : nous verrons d'abord comment le narrateur brosse un portrait profondément émouvant et idéalisé de la mère (nourricière, éducatrice, affectueuse et indulgente), puis nous montrerons comment la forme même du texte emprunte la rhétorique et la ferveur incantatoire d'une prière liturgique.`
    },
    developpement: {
      parties: [
        {
          titre: "1. L'image de la mère : célébration de l'amour inconditionnel",
          sousParties: [
            {
              titre: "Une mère nourricière et patiente éducatrice",
              argument: "La mère initie l'enfant aux rudiments de la vie corporelle et sociale avec une patience inépuisable.",
              explication: "Le champ lexical de l'alimentation et des soins quotidiens montre une attention de chaque seconde.",
              exemplesEtCitations: ["Vocabulaire alimentaire maternel : « cuillère après cuillère », « la semoule », « pruneaux cuits ».", "Apprentissage des gestes fondateurs : « faire les nœuds des lacets », « se moucher », « souffler dans le mouchoir », « se gargariser ».", "La ruse affectueuse pour faire manger le petit : « les pruneaux sont de petits nègres qui veulent rentrer dans leur maison »."]
            },
            {
              titre: "La tendresse familière et la sublime complaisance maternelle",
              argument: "L'amour maternel accepte tout sans dégoût et pardonne les ingratitudes de l'adolescence.",
              explication: "L'emploi d'oxymores affectueux et du registre familier illustre une complicité fusionnelle.",
              exemplesEtCitations: ["Expressions familières attendries : « faire feufeu », « faisiez reureu », « sales petits nez de marmots morveux ».", "Désignation paradoxale des enfants : « vilains nigauds petits poneys de fils ».", "L'aveuglement sublime du sacrifice : « toujours si faibles avec nous, indulgentes qui plus tard vous laissiez si facilement embobiner... et leur donniez toutes vos économies »."]
            }
          ],
          transition: "Cette dévotion sans borne ne relève plus du simple sentiment humain : elle hisse la mère au rang d'une figure divine.",
          fullText: `Dans le premier centre d'intérêt, Albert Cohen égrène avec une infinie nostalgie les preuves matérielles de l'amour maternel. La mère est d'abord la dispensatrice généreuse de la vie : avec une tendresse inaltérable, elle nourrit le nourrisson difficile (« cuillère après cuillère ») et transforme chaque repas en féerie imaginative pour vaincre ses caprices. Elle est ensuite la première éducatrice sociale, apprenant à son fils à nouer ses souliers ou à se tenir dignement avant l'arrivée des visites. Mais ce qui bouleverse le narrateur devenu adulte, c'est l'absence totale de dégoût (« nos sales genoux terreux », « nez de marmots morveux ») et cette faiblesse admirable qui conduisait la mère à se laisser dépouiller de ses maigres économies pour faire plaisir à ses fils adolescents. Cet amour immérité confine au sublime.`
        },
        {
          titre: "2. Un texte structuré comme une prière liturgique",
          sousParties: [
            {
              titre: "Le calque explicite sur la dévotion mariale catholique",
              argument: "Le texte s'ouvre et se clôt sur des formules sacrées empruntées au culte marial.",
              explication: "La mère est vénérée avec les termes réservés à la Vierge Marie et aux souveraines divines.",
              exemplesEtCitations: ["L'anaphore sacrée : « Louange à vous », « Nos Dames les mères », « je vous salue ».", "La reprise finale littérale de l'Ave Maria : « Je vous salue, mères pleines de grâce ».", "Le lexique de la royauté spirituelle : « en la majesté de ma mère morte », « majestés de nos mères »."]
            },
            {
              titre: "Le souffle incantatoire et la transe extatique du fils adorateur",
              argument: "Le rythme étiré sur vingt lignes sans point figure une respiration d'oraison continue.",
              explication: "La prolifération des anaphores de la deuxième personne installe un tête-à-tête mystique avec l'absolu.",
              exemplesEtCitations: ["L'anaphore pronominale obsédante du vocatif : « vous qui nous avez appris... vous qui patiemment... vous qui sans cesse... vous qui n'aviez aucun dégoût ».", "La phrase fleuve déployée sur vingt-deux lignes rythmée par des virgules pour refuser toute interruption de communion."]
            }
          ],
          transition: "En consacrant sa mère comme divinité, l'écrivain lui offre une jeunesse éternelle.",
          fullText: `Dans le second centre d'intérêt, l'originalité éclatante de l'extrait tient à sa nature liturgique. Dès l'exorde, les formules d'adoration (« Louange à vous », « Nos Dames les mères ») sacralisent la figure maternelle. La clôture du passage accomplit une transfiguration religieuse explicite en paraphrasant la salutation angélique de l'Ave Maria : « Je vous salue, mères pleines de grâce ». La mère n'est plus une femme ordinaire, elle devient la médiatrice divine entre l'homme et l'infini. Cette déification s'incarne dans la syntaxe même du texte : une unique et prodigieuse phrase de plus de vingt lignes, emportée par la litanie anaphorique du pronom « vous qui », mime le souffle ininterrompu d'un croyant en extase. Par la grâce de ce chant funèbre, le fils élève sa mère au-dessus des outrages de la mort.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "Dans cette page anthologique du 'Livre de ma mère', Albert Cohen fond le réalisme le plus intime des souvenirs d'enfance dans le moule grandiose de la prière.",
      jugement: "En hissant les soins maternels anodins au rang d'actes sacramentels, l'auteur témoigne avec une sincérité désarmante de la dette imprescriptible des enfants envers leurs mères.",
      ouverture: "Cet hommage universel rejoint l'émouvant constat formulé par Louise Colet en 1837 : « L'amour d'une mère pour son enfant, c'est le symbole terrestre et touchant de l'amour de Dieu pour l'humanité ».",
      fullText: `En conclusion, ce passage du 'Livre de ma mère' d'Albert Cohen constitue l'un des monuments les plus purs de la piété filiale en langue française. En enchâssant les détails triviaux et familiers du quotidien enfantin dans la majesté d'une litanie sacrée, l'écrivain réalise une synthèse poétique inoubliable. Sa mère morte devient le symbole vivant de la grâce, de la générosité et du don absolu de soi. Comme l'exprimait avec ferveur Louise Colet, l'amour maternel demeure le plus bel avant-goût du divin sur terre ; et par ce texte incandescent, Cohen a su lui offrir l'éternité.`
    },
    keywords: ["albert cohen", "le livre de ma mere", "louange a vous meres", "nos dames les meres", "je vous salue meres pleines de grace", "priere", "commentaire composé"]
  },

  // =========================================================================
  // 13. COMMENTAIRE COMPOSÉ : « PENSER » (MAXIME N'DEBEKA)
  // =========================================================================
  {
    id: "secret-com-08-ndebeka-penser",
    category: "commentaire_compose",
    title: "Commentaire composé : Maxime N'Debeka — « Penser »",
    authorOrSource: "Maxime N'Debeka",
    work: "Soleils neufs (1969)",
    themeOrGenre: "Poésie lyrique et philosophique / Angoisse de la mort, révolte prométhéenne et salut par l'amour militant",
    statement: `Penser
Penser
Qu’on meurt toujours seul mon amour 
Me fait peur
Penser 
Que le temps nous effrite de jour en jour
M’emplit de terreur
Pour moi j’irai baptiser Adam et Eve
Pour guérir le fléau de l’homme
J’irai à mon tour gravir le Sinaï
Pour briser les dix commandements maudits
Si malgré cela on meurt toujours seul mon amour
Alors je glisserai des falaises de la vie
Pour déposer ma demeure au fond d’une tombe 
Où je m’allongerai près de toi dans le lit de notre amour
Près de toi dans le lit des beaux jours
Tu me couvriras de tes rubis je te couvrirai de mes armes
On se couvrira d’amour, de notre amour
Oh comme on s’aimera on saura combattre
Là, bercé par le tambour des promeneurs
Bercé par les maracas des feuilles mortes
Arrosé par les rires des soleils
On se lèvera pour déposer aussi notre demeure
Sur les cimes de chaque compagnon
On se lèvera avec la flamme de camarade
Pour enseigner à savoir mourir
Penser
Qu’on meurt toujours seul mon amour 
Me fait peur
Penser 
Que le temps nous effrite de jour en jour
M’emplit de terreur`,
    planType: "dialectique",
    problematique: "Comment, à partir du vertige angoissé de la solitude face au trépas, le poète surmonte-t-il la fatalité par la révolte prométhéenne, l'amour fusionnel et la lutte solidaire ?",
    introduction: {
      amorce: "Indissociable de la condition terrestre, la mort est l'inévitable horizon de tout être humain, inspirant tour à tour la résignation stoïque ou la terreur panique.",
      citationEtExplication: "C'est cette obsession déchirante que l'écrivain et poète congolais Maxime N'Debeka affronte dans son poème « Penser », issu du recueil 'Soleils neufs' publié en 1969 aux éditions Clé. Hanté par l'idée de devoir mourir dans la solitude, le poète s'insurge contre cette loi universelle.",
      problematique: "Dès lors, par quels procédés lyriques et symboliques le texte fait-il succéder aux affres paralysantes de la mort les moyens héroïques imaginés par le créateur pour vaincre le néant ?",
      annoncePlan: "Notre analyse méthodique examinera d'abord les manifestations de l'angoisse de la mort (fuite du temps, solitude et désespoir), puis démontrera les voies par lesquelles le poète la surmonte (la révolte sacrilège, la fraternité militante et l'immortalité de l'amour).",
      fullText: `La certitude de notre finitude suscite chez l'homme une angoisse existentielle que la parole poétique a pour mission de sonder et d'apprivoiser. Figure majeure de la poésie congolaise engagée, Maxime N'Debeka publie en 1969 le recueil 'Soleils neufs'. Dans le poème liminaire « Penser », il confesse sa terreur devant l'irrémédiable fuite des jours et le spectre de la mort solitaire. Deux centres d'intérêt structurent notre commentaire composé : nous étudierons en premier lieu les manifestations poignantes de cette angoisse de la mort, avant d'analyser en second lieu les puissances libératrices – la révolte métaphysique, l'amour charnel et l'engagement fraternel – qui permettent au poète de terrasser le néant.`
    },
    developpement: {
      parties: [
        {
          titre: "1. L'angoisse de la mort : le vertige de la solitude et du temps",
          sousParties: [
            {
              titre: "L'érosion corrosive du temps et la claustrophobie mentale",
              argument: "Le poète éprouve physiquement la dégradation continue de son être sous l'effet du temps.",
              explication: "Le verbe 'Penser', scandé comme un glas, enferme la conscience dans une méditation oppressante.",
              exemplesEtCitations: ["Répétition obsédante du verbe à l'infinitif en tête de strophe : « Penser », « Penser ».", "Métaphore de l'usure continue : « Que le temps nous effrite de jour en jour / M'emplit de terreur ».", "La structure cyclique et fermée du poème (les six premiers vers sont repris intégralement à la fin pour figurer l'enfermement)."]
            },
            {
              titre: "Le drame de la mort solitaire",
              argument: "La terreur suprême n'est pas le trépas en lui-même, mais l'incommunicabilité absolue de l'agonie.",
              explication: "Les rimes intérieures et le lexique funèbre renforcent le désarroi du cœur.",
              exemplesEtCitations: ["L'aveu pathétique : « Qu'on meurt toujours seul mon amour / Me fait peur ».", "Rimes intérieures en [eur] : « peur », « terreur », « meurt ».", "Vocabulaire de la fatalité : « fléau », « tombe », « falaises de la vie »."]
            }
          ],
          transition: "Toutefois, loin de capituler devant cette fatalité, le poète dresse contre elle une triple riposte révolutionnaire.",
          fullText: `Dans le premier centre d'intérêt, Maxime N'Debeka peint les affres d'une âme assaillie par la lucidité. L'acte même de « Penser », répété avec insistance en ouverture et en clôture de poème, prend la forme d'un piège mental dont le poète ne peut s'évader. Le temps n'est pas un allié, mais un acide destructeur qui « nous effrite de jour en jour », instillant une véritable « terreur ». Mais le comble du supplice réside dans la solitude inhérente au trépas : « Qu'on meurt toujours seul mon amour / Me fait peur ». L'écho lugubre des sonorités en [eur] (« peur », « terreur ») et la composition circulaire du texte traduisent l'étau d'un destin implacable qui menace de broyer toute espérance.`
        },
        {
          titre: "2. Les armes de la victoire : révolte prométhéenne, amour fusionnel et fraternité",
          sousParties: [
            {
              titre: "La révolte métaphysique et prométhéenne",
              argument: "Le poète s'attaque aux dogmes religieux qui légitiment la mort et défie le Créateur.",
              explication: "Vouloir rebaptiser Adam et briser les tables de la Loi constitue un acte de reconquête de la vie.",
              exemplesEtCitations: ["L'élan blasphématoire salvateur : « Pour moi j'irai baptiser Adam et Ève / Pour guérir le fléau de l'homme ».", "Le défi au sommet sacré : « J'irai à mon tour gravir le Sinaï / Pour briser les dix commandements maudits »."]
            },
            {
              titre: "La transfiguration par l'amour et la résurrection militante",
              argument: "Dans la tombe, l'amour transcende la pourriture, et le couple se relève pour guider ses camarades.",
              explication: "La mort n'est pas une fin, mais une semence de lumière pour les vivants.",
              exemplesEtCitations: ["Métaphores d'alliance amoureuse et guerrière : « Tu me couvriras de tes rubis je te couvrirai de mes armes / On se couvrira d'amour ».", "La résurrection héroïque au service du peuple : « On se lèvera pour déposer aussi notre demeure / Sur les cimes de chaque compagnon / On se lèvera avec la flamme de camarade / Pour enseigner à savoir mourir »."]
            }
          ],
          transition: "Par cette transfiguration sublime, la mort cesse d'être une défaite pour devenir un étendard d'émancipation.",
          fullText: `Dans le second centre d'intérêt, le poème s'embrase d'une énergie rédemptrice extraordinaire. N'Debeka commence par rejeter le fatalisme biblique du péché originel : dans un geste prométhéen grandiose, il proclame son intention d'aller « baptiser Adam et Ève » et de « briser les dix commandements maudits » sur le Sinaï pour extirper la mort de l'humanité. Mieux encore, il oppose à l'isolement du trépas la puissance invincible de l'amour : la tombe devient « le lit de notre amour » où s'échangent « rubis » et « armes ». Loin de pourrir dans l'oubli, les amants ressuscités se dressent « avec la flamme de camarade » pour fertiliser le combat des vivants. La mort est ainsi apprivoisée et transfigurée en un acte d'héroïsme immortel.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "Dans ce poème saisissant, Maxime N'Debeka démontre que si l'angoisse du temps et de la mort est universelle, elle peut être conjurée par la force de l'art et l'amour partagé.",
      jugement: "En articulant le lyrisme le plus intime à l'engagement révolutionnaire fraternel, l'auteur redéfinit la mort comme le prolongement actif de la vie dans la conscience des compagnons de lutte.",
      ouverture: "Cette victoire de l'amour régénérateur sur la poussière du tombeau fait écho à la vision immortelle de Baudelaire dans « La Mort des amants » : « Nous aurons des lits pleins d'odeurs légères... Et plus tard un Ange, entr'ouvrant les portes, / Viendra ranimer, fidèle et joyeux, / Les miroirs ternis et les flammes mortes ».",
      fullText: `En conclusion, « Penser » de Maxime N'Debeka s'impose comme un magnifique hymne de triomphe sur la fatalité du néant. Si la conscience de notre fragilité commence par paralyser l'esprit, le poète trouve dans le blasphème sacré, la fusion amoureuse et la fraternité révolutionnaire les ressorts d'une éclatante résurrection. En métamorphosant la sépulture en sanctuaire d'amour d'où jaillit « la flamme de camarade », N'Debeka prouve que l'homme armé de tendresse et de solidarité ne meurt jamais tout à fait. Comme l'affirmait Baudelaire dans 'La Mort des amants', la poésie est ce miracle souverain qui arrache l'amour aux ténèbres pour le faire briller sur les cimes de l'avenir.`
    },
    keywords: ["maxime n'debeka", "soleils neufs", "penser", "qu'on meurt toujours seul", "le temps nous effrite", "baptiser adam et eve", "flamme de camarade", "commentaire composé"]
  },

  // =========================================================================
  // 14. COMMENTAIRE COMPOSÉ : « À UNE PASSANTE » (CHARLES BAUDELAIRE)
  // =========================================================================
  {
    id: "secret-com-09-baudelaire-passante",
    category: "commentaire_compose",
    title: "Commentaire composé : Charles Baudelaire, Les Fleurs du mal — « À une passante »",
    authorOrSource: "Charles Baudelaire",
    work: "Les Fleurs du mal (1857) — Section « Tableaux parisiens »",
    themeOrGenre: "Poésie symboliste / La modernité urbaine, le coup de foudre et l'inaccessibilité de l'Idéal",
    statement: `La rue assourdissante autour de moi hurlait.
Longue, mince, en grand deuil, douleur majestueuse,
Une femme passa, d’une main fastueuse
Soulevant, balançant le feston et l’ourlet ;

Agile et noble, avec sa jambe de statue.
Moi, je buvais, crispé comme un extravagant,
Dans son œil, ciel livide où germe l’ouragan,
La douceur qui fascine et le plaisir qui tue.

Un éclair... puis la nuit ! - Fugitive beauté
Dont le regard m’a fait soudainement renaître,
Ne te verrai-je plus que dans l’éternité ?

Ailleurs, bien loin d’ici ! trop tard ! jamais peut-être !
Car j’ignore où tu fuis, tu ne sais où je vais,
Ô toi que j’eusse aimée, ô toi qui le savais !`,
    planType: "dialectique",
    problematique: "Comment la rencontre fugitive avec la femme en deuil dans le tumulte parisien déclenche-t-elle un coup de foudre tragique qui révèle au poète l'inaccessibilité absolue de l'Idéal ?",
    introduction: {
      amorce: "L'avènement de la grande métropole moderne au XIXe siècle a radicalement bouleversé l'imaginaire poétique en introduisant la foule anonyme au cœur de la création.",
      citationEtExplication: "C'est dans cette esthétique urbaine nouvelle que Charles Baudelaire insère dans la section « Tableaux parisiens » de son recueil 'Les Fleurs du mal' (1857) son célèbre sonnet « À une passante ». Né de la vision fulgurante d'une inconnue croisée dans une rue parisienne, le poème relate un éblouissement amoureux aussi instantané que désespéré.",
      problematique: "Dès lors, par quels mécanismes stylistiques et rythmiques la rencontre avec cette silhouette contrastée se mue-t-elle en une allégorie poignante de l'Idéal entrevu et aussitôt perdu ?",
      annoncePlan: "Notre commentaire composé étudiera en premier lieu la fascination immédiate exercée par la passante au cœur du chaos urbain, avant de démontrer en second lieu comment cette apparition consacre la fatalité du spleen et l'impossibilité d'atteindre l'Idéal sur terre.",
      fullText: `L'expérience de la modernité baudelairienne trouve dans le spectacle de la rue parisienne son terrain d'exploration le plus fécond. Dans le sonnet « À une passante », extrait des 'Fleurs du mal' (1857), Charles Baudelaire saisit l'essence même de la poésie de la cité : le jaillissement d'un éclair de pure beauté au sein de la laideur quotidienne. Deux centres d'intérêt majeurs guideront notre analyse méthodique : nous verrons d'abord comment la rencontre impromptue avec cette femme mystérieuse et majestueuse déclenche chez le poète un bouleversement passionnel violent, puis nous examinerons en quoi cette fugitive vision symbolise la quête d'un Idéal impossible, replongeant à jamais le poète dans la nuit du spleen.`
    },
    developpement: {
      parties: [
        {
          titre: "1. La rencontre avec la passante : l'éblouissement au cœur du chaos urbain",
          sousParties: [
            {
              titre: "Un cadre hostile et agressif",
              argument: "Le premier vers campe une atmosphère sonore oppressante qui isole le poète dans la tourbe citadine.",
              explication: "L'animalisation de la rue et les allitérations heurtées rendent sensible la violence de la métropole.",
              exemplesEtCitations: ["Personnification agressive : « La rue assourdissante autour de moi hurlait ».", "Allitération en /r/ et assonances fermées mimant le fracas des pavés et des voitures hippomobiles."]
            },
            {
              titre: "L'apparition majestueuse et le coup de foudre paralysant",
              argument: "Au milieu de cette foule bruyante émerge une silhouette aristocratique et sculpturale qui foudroie le poète.",
              explication: "Le poète boit le regard de la femme comme un philtre empoisonné, mêlant extase et angoisse.",
              exemplesEtCitations: ["Rythme ternaire et noblesse du port : « Longue, mince, en grand deuil, douleur majestueuse ».", "Comparaison classique sacralisante : « jambe de statue ».", "Trouble convulsif du poète : « Moi, je buvais, crispé comme un extravagant ».", "Antithèses et oxymores fascinants : « ciel livide où germe l'ouragan », « La douceur qui fascine et le plaisir qui tue »."]
            }
          ],
          transition: "Mais cette apparition est aussi brève qu'un météore, et sa fuite précipite le poète dans une détresse métaphysique insurmontable.",
          fullText: `Dans la première partie, Baudelaire installe un contraste violent entre le cadre et la créature. La rue n'est pas un décor neutre : personnifiée et animalisée par le verbe « hurlait », elle assaille le poète dans un vacarme assourdissant. C'est dans ce tumulte hostile que surgit la passante, vêtue d'un « grand deuil » qui lui confère une « douleur majestueuse ». Sa démarche chaloupée et souveraine (« jambe de statue ») rappelle l'éternité des déesses antiques. Face à elle, le poète subit un coup de foudre physique d'une intensité inouïe : « crispé comme un extravagant », il boit dans ses yeux un venin capiteux fait d'antithèses fascinantes, entre « douceur » et « plaisir qui tue ». Cette femme énigmatique réunit en elle l'amour et la mort.`
        },
        {
          titre: "2. La perte irréversible et l'Idéal inaccessible",
          sousParties: [
            {
              titre: "La fulgurance éphémère du bonheur",
              argument: "Le vers 9 marque la fracture temporelle tragique par une rupture syntaxique radicale.",
              explication: "L'apparition n'a duré qu'une seconde avant de s'engloutir dans l'oubli de la foule.",
              exemplesEtCitations: ["L'antithèse brève et percutante des points de suspension : « Un éclair... puis la nuit ! ».", "La périphrase oxymorique : « Fugitive beauté ».", "La résurrection éphémère : « Dont le regard m'a fait soudainement renaître »."]
            },
            {
              titre: "Le dialogue impossible et le triomphe du spleen",
              argument: "La séparation des amants potentiels est définitive : seule l'éternité pourrait réparer le rendez-vous manqué.",
              explication: "La structure en chiasme et le subjonctif plus-que-parfait consacrent un amour virtuel à jamais défunt.",
              exemplesEtCitations: ["Chiasme de la séparation spatiale : « Car j'ignore où tu fuis, tu ne sais où je vais ».", "Rythme haché de la fatalité : « Ailleurs, bien loin d'ici ! trop tard ! jamais peut-être ! ».", "L'apostrophe déchirante aux morts : « Ô toi que j'eusse aimée, ô toi qui le savais ! »."]
            }
          ],
          transition: "Le sonnet se referme comme une épitaphe gravée sur le tombeau d'un bonheur entrevu.",
          fullText: `Dans la seconde partie, la rupture est consommée au vers 9 avec une concision foudroyante : « Un éclair... puis la nuit ! ». La passante n'a fait que traverser le champ visuel du poète pour le replonger dans des ténèbres plus profondes encore. Par une métaphore d'une rare tristesse, l'écrivain constate que la communion humaine dans la ville moderne est vouée à l'échec. Les deux existences se croisent sans pouvoir s'étreindre, comme le souligne le chiasme symétrique du vers 13 : « Car j'ignore où tu fuis, tu ne sais où je vais ». Le plus-que-parfait du subjonctif (« Ô toi que j'eusse aimée ») résonne comme une oraison funèbre : la femme aimée est déjà une disparue. L'Idéal entrevu s'est évanoui, laissant le poète seul face à la douleur irrémédiable du spleen.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "Dans ce sonnet magistral des 'Tableaux parisiens', Charles Baudelaire invente le mythe moderne de la beauté fugitive.",
      jugement: "Par la perfection de sa facture classique et la tension de ses oxymores, le poète transcende un fait divers urbain pour en faire l'emblème de la tragédie humaine où le bonheur se refuse au moment même où il se révèle.",
      ouverture: "Ce poème illustre avec une sombre grandeur la définition baudelairienne du Beau formulée dans ses 'Fusées' : « C'est quelque chose d'ardent et de triste, quelque chose d'un peu vague, laissant carrière à la conjecture ».",
      fullText: `En conclusion, « À une passante » de Charles Baudelaire est l'une des pièces les plus admirables des 'Fleurs du mal'. En captant la beauté insaisissable d'une inconnue au sein du maelström urbain, l'écrivain donne une forme inoubliable au drame de la modernité : l'impossibilité de fixer le bonheur terrestre. Cet amour foudroyé, qui ne pourra s'accomplir que dans l'éternité du tombeau, résume à lui seul le tragique combat baudelairien entre le Spleen dévorant et l'Idéal inaccessible. Le sonnet demeure le chef-d'œuvre de la rencontre manquée, où la poésie seule a le pouvoir d'immortaliser l'éclair de l'instant.`
    },
    keywords: ["a une passante", "baudelaire", "les fleurs du mal", "tableaux parisiens", "la rue assourdissante autour de moi hurlait", "fugitive beaute", "o toi que j'eusse aimee", "commentaire composé"]
  },

  // =========================================================================
  // 15. COMMENTAIRE COMPOSÉ : « JE VOUS REMERCIE MON DIEU » (BERNARD DADIÉ)
  // =========================================================================
  {
    id: "secret-com-10-dadie-remercie-mon-dieu",
    category: "commentaire_compose",
    title: "Commentaire composé : Bernard B. Dadié — « Je vous remercie mon Dieu »",
    authorOrSource: "Bernard Binlin Dadié",
    work: "La Ronde des jours (1956)",
    themeOrGenre: "Poésie lyrique de la Négritude / La fierté d'être Noir, la douleur historique et la mission universelle",
    statement: `Je vous remercie mon Dieu, de m’avoir créé Noir, 
d’avoir fait de moi 
la somme de toutes les douleurs, 
mis sur ma tête, 
le Monde.
J’ai la livrée du Centaure(1)
Et je porte le Monde depuis le premier matin.
Le blanc est une couleur de circonstance
Le noir, la couleur de tous les jours
Et je porte le Monde depuis le premier soir.
Je suis content
de la forme de ma tête
faite pour porter le Monde,
Satisfait 
de la forme de mon nez
qui doit humer tout le vent du Monde,
Heureux 
de la forme de mes jambes
prêtes à courir toutes les étapes du Monde.
Je vous remercie mon Dieu, de m’avoir créé Noir, 
d’avoir fait de moi 
la somme de toutes les douleurs.
Trente-six épées ont transpercé mon cœur.
Trente-six brasiers ont brûlé mon corps.
Et mon sang sur tous les calvaires a rougi la neige,
Et mon sang à tous les levants a rougi la nature.
Je suis quand même 
Content de porter le Monde
Content de mes bras courts
 de mes bras longs
de l’épaisseur de mes lèvres.
Je vous remercie mon Dieu, de m’avoir créé Noir, 
Je porte le Monde depuis l’aube des temps
Et mon rire sur le Monde,
 dans la nuit
crée le jour.`,
    planType: "dialectique",
    problematique: "Comment le poète ivoirien Bernard Dadié assume-t-il la mémoire des calvaires séculaires subis par la race noire pour la transfigurer en une éclatante profession de fierté et d'humanisme rédempteur ?",
    introduction: {
      amorce: "Longtemps humilié par le discours colonial qui assimilait la peau noire à une malédiction, l'homme africain a trouvé dans la Négritude le vecteur héroïque de sa réhabilitation.",
      citationEtExplication: "Le grand écrivain ivoirien Bernard Binlin Dadié donne à ce combat une noblesse spirituelle inégalée dans son poème « Je vous remercie mon Dieu », extrait du recueil 'La Ronde des jours' (1956). Loin de maudire son sort ou d'implorer la pitié, le poète entonne une prière d'action de grâce pour revendiquer hautement son identité nègre.",
      problematique: "Dès lors, par quels procédés d'écriture et modulations lyriques le poète articule-t-il le rappel des souffrances historiques du Noir à une fierté inaltérable investie d'une mission messianique universelle ?",
      annoncePlan: "Notre commentaire composé examinera dans un premier centre d'intérêt le poids de la souffrance historique portée par le Noir, avant de démontrer dans un second centre d'intérêt la fierté physique, culturelle et spirituelle qui culmine dans la création d'un jour nouveau pour l'humanité.",
      fullText: `Durant des siècles, l'Occident a cherché à inculquer aux peuples noirs un sentiment d'infériorité et de honte corporelle pour asseoir sa domination. C'est à ce conditionnement séculaire que s'attaque le monument de la littérature ivoirienne Bernard Binlin Dadié dans son célèbre poème « Je vous remercie mon Dieu », extrait de 'La Ronde des jours' (1956). Par une prière d'allégresse audacieuse, l'auteur remercie le Tout-Puissant de l'avoir créé Noir. Deux centres d'intérêt structurent notre analyse méthodique : nous verrons d'abord comment le poème assume la réalité tragique des calvaires historiques endurés par le peuple noir, puis nous étudierons la fierté radieuse avec laquelle l'Africain revendique sa beauté charnelle et son rôle de pilier bienveillant du monde.`
    },
    developpement: {
      parties: [
        {
          titre: "1. La souffrance du Noir : le portement du fardeau universel",
          sousParties: [
            {
              titre: "Le corps supplicié sur les calvaires de l'Histoire",
              argument: "Le Noir a traversé les plus abominables épreuves physiques : esclavage, travail forcé et tortures.",
              explication: "Le vocabulaire religieux du martyre assimile le destin des Noirs à une passion christique.",
              exemplesEtCitations: ["Métaphores sacrificielles : « Trente-six épées ont transpercé mon cœur », « Trente-six brasiers ont brûlé mon corps ».", "L'universalité du sang versé : « Et mon sang sur tous les calvaires a rougi la neige / Et mon sang à tous les levants a rougi la nature ».", "La métaphore de la douleur totale : « d'avoir fait de moi / la somme de toutes les douleurs »."]
            },
            {
              titre: "Le géant cosmique condamné à porter le monde",
              argument: "Le Noir est le véritable Atlas des temps modernes, condamné depuis toujours aux tâches les plus rudes.",
              explication: "L'allusion au Centaure et la majuscule au mot 'Monde' confèrent au travailleur noir une stature mythique.",
              exemplesEtCitations: ["L'allégorie mythologique : « J'ai la livrée du Centaure » (créature mi-homme mi-cheval de trait).", "La répétition de la charge surhumaine : « mis sur ma tête, le Monde », « Et je porte le Monde depuis le premier matin ».", "L'opposition symbolique des couleurs : « Le blanc est une couleur de circonstance / Le noir, la couleur de tous les jours »."]
            }
          ],
          transition: "Cependant, cette accumulation de supplices ne suscite nulle haine : elle devient le socle d'une fierté rayonnante.",
          fullText: `Dans la première partie, Bernard Dadié ne dissimule rien des tragédies immenses subies par les siens. Le Noir est désigné comme « la somme de toutes les douleurs », condensant sur sa seule personne le martyre de l'humanité. Par des images hyperboliques empruntées à la liturgie chrétienne, l'auteur évoque les « trente-six épées » et les « trente-six brasiers » qui ont lacéré son corps. Le sang noir répandu sur les « calvaires » évoque la sueur des plantations esclavagistes et les chantiers forcés où les Noirs furent traités en bêtes de somme. L'allusion à « la livrée du Centaure » assimile l'Africain à un géant hybride portant le fardeau des civilisations. Mais ce rôle sacrificiel est accepté avec grandeur : le Noir est celui qui porte le Monde sur sa tête depuis l'aube des temps.`
        },
        {
          titre: "2. La fierté et la mission rédemptrice du Noir",
          sousParties: [
            {
              titre: "La célébration sans complexe de la morphologie négro-africaine",
              argument: "Dadié réhabilite les traits physiques dénigrés par les théories racistes pour en faire des attributs d'élection.",
              explication: "La tête, le nez épaté et les lèvres épaisses deviennent des symboles d'adaptation harmonieuse à la planète.",
              exemplesEtCitations: ["Gradation des adjectifs de félicité : « Je suis content... Satisfait... Heureux ».", "Éloge des traits anatomiques : « de la forme de ma tête... de mon nez qui doit humer tout le vent du Monde... de l'épaisseur de mes lèvres ».", "La formule d'action de grâce anaphorique : « Je vous remercie mon Dieu, de m'avoir créé Noir »."]
            },
            {
              titre: "La vocation messianique : le rire qui illumine le monde",
              argument: "Loin de nourrir le ressentiment, le Noir apporte à la terre sa vitalité, son endurance et sa joie inextinguible.",
              explication: "Le rire africain triomphe des ténèbres et enfante un ordre nouveau.",
              exemplesEtCitations: ["L'antithèse éclatante finale : « Et mon rire sur le Monde, / dans la nuit / crée le jour ».", "La générosité absolue : le rire africain comme principe créateur et bienveillant pour l'humanité entière."]
            }
          ],
          transition: "Cette profession de foi transforme la prière en hymne humaniste planétaire.",
          fullText: `Dans la seconde partie, la souffrance s'efface devant une jubilation souveraine. Dadié renverse radicalement les préjugés esthétiques occidentaux en faisant l'éloge poétique de ses traits physiques. Par une gradation lumineuse (« Content... Satisfait... Heureux »), il loue la forme de sa tête conçue pour soutenir le Monde, la largeur de son nez ouvert à tous les souffles terrestres et « l'épaisseur de ses lèvres ». Cette fierté corporelle fonde une mission spirituelle régénératrice. Le poème culmine dans une antithèse prodigieuse où le Noir affirme sa fonction démiurgique : « Et mon rire sur le Monde, / dans la nuit / crée le jour ». L'homme noir n'est plus la victime silencieuse de l'histoire, mais la lumière vivante qui féconde l'avenir de tous les hommes.`
        }
      ],
      fullText: ""
    },
    conclusion: {
      bilan: "« Je vous remercie mon Dieu » de Bernard Dadié représente l'une des plus pures incarnations de la Négritude humaniste et sereine.",
      jugement: "Sans jamais verser dans l'aigreur ni la rancœur, l'écrivain ivoirien transmue des siècles de persécutions en une profession d'amour universel et de fierté sereine.",
      ouverture: "Cette vision messianique de l'Afrique réconciliée rejoint le vœu d'Aimé Césaire dans le 'Cahier d'un retour au pays natal' : « Liez, liez-moi sans remords / liez-moi de vos vastes bras à l'argile lumineuse... et voici le temps de se ceindre les reins comme un vaillant homme ».",
      fullText: `En conclusion, « Je vous remercie mon Dieu » de Bernard Binlin Dadié est un monument de la poésie africaine de langue française. En adoptant le ton de la prière d'action de grâce pour célébrer une identité trop longtemps outragée, le poète accomplit une libération psychologique et spirituelle totale. Porteur des douleurs du globe, le Noir se révèle être le pilier indispensable sans lequel la terre s'écroulerait. En faisant du rire africain une puissance solaire capable de chasser la nuit, Dadié démontre avec majesté que la Négritude n'est pas un repli frileux, mais un don infini d'espérance offert à l'humanité tout entière.`
    },
    keywords: ["je vous remercie mon dieu", "bernard dadie", "la ronde des jours", "cree noir", "somme de toutes les douleurs", "livree du centaure", "mon rire sur le monde dans la nuit cree le jour", "commentaire composé"]
  }
];

// =========================================================================
// LES 100 CITATIONS INDISPENSABLES POUR LA DISSERTATION LITTÉRAIRE
// =========================================================================
export type CitationCategory = "LitteratureGenerale" | "Litterature generale" | "Poesie" | "Theatre" | "Roman";

export interface LiteraryCitation {
  id: number;
  author: string;
  sourceOrWork?: string;
  quote: string;
  category: CitationCategory;
}

export const SECRET_FRANCAIS_100_CITATIONS: LiteraryCitation[] = [
  // LITTÉRATURE GÉNÉRALE (1-25)
  { id: 1, author: "Marcel Arland", quote: "Je ne conçois pas de littérature sans éthique.", category: "LitteratureGenerale" },
  { id: 2, author: "Charles Lassailly", quote: "La littérature crée des mœurs aux sociétés qui veulent sembler vivre.", category: "LitteratureGenerale" },
  { id: 3, author: "César Aira", quote: "La littérature n'a pas d'autre fonction que de mettre en scène un écrivain.", category: "LitteratureGenerale" },
  { id: 4, author: "Charles Baudelaire", quote: "Toute littérature dérive du péché.", category: "LitteratureGenerale" },
  { id: 5, author: "Charles Baudelaire", quote: "Congédier la passion et la raison, c'est tuer la littérature.", category: "LitteratureGenerale" },
  { id: 6, author: "Gustave Flaubert", quote: "Le difficile en littérature, c'est de savoir quoi ne pas dire.", category: "LitteratureGenerale" },
  { id: 7, author: "Marguerite Yourcenar", quote: "On entre en littérature comme on entre en religion.", category: "LitteratureGenerale" },
  { id: 8, author: "Louis-Octave Uzanne", quote: "La mode est la littérature de la femme. La toilette est son style personnel.", category: "LitteratureGenerale" },
  { id: 9, author: "André Gide", quote: "C'est avec les beaux sentiments qu'on fait de la mauvaise littérature.", category: "LitteratureGenerale" },
  { id: 10, author: "Gustave Flaubert", quote: "Mais il n'y a pas en littérature de bonnes intentions : le style est tout.", category: "LitteratureGenerale" },
  { id: 11, author: "Émile Zola", quote: "Les gouvernements suspectent la littérature parce qu'elle est une force qui leur échappe.", category: "LitteratureGenerale" },
  { id: 12, author: "Amin Maalouf", quote: "J'ai toujours le sentiment que mon premier pays aujourd'hui, c'est la littérature.", category: "LitteratureGenerale" },
  { id: 13, author: "Jules Renard", quote: "Je sais que la littérature ne nourrit pas son homme. Par bonheur, je n'ai pas très faim.", category: "LitteratureGenerale" },
  { id: 14, author: "J-C Malgoire", quote: "La littérature est parfaitement inutile : sa seule utilité est qu'elle aide à vivre.", category: "LitteratureGenerale" },
  { id: 15, author: "Oscar Wilde", quote: "La littérature devance toujours la vie. Elle ne la copie pas mais la modèle à son gré.", category: "LitteratureGenerale" },
  { id: 16, author: "Joseph Joubert", quote: "La littérature des peuples commence par les fables et finit par les romans.", category: "LitteratureGenerale" },
  { id: 17, author: "Benjamin Disraeli", quote: "Vous savez qui sont les critiques ? Les hommes qui ont échoué en littérature et en art.", category: "LitteratureGenerale" },
  { id: 18, author: "Rex Desmarchais", quote: "La littérature n'est-elle jamais autre chose qu'un refuge contre l'angoisse ?", category: "LitteratureGenerale" },
  { id: 19, author: "Morgan Sportès", quote: "La littérature est une maladie. Ou peut-être un remède à une maladie.", category: "LitteratureGenerale" },
  { id: 20, author: "Charles-Louis Philippe", quote: "Toutes les crises morales de la littérature sont les crises morales de la bourgeoisie.", category: "LitteratureGenerale" },
  { id: 21, author: "Jean Rostand", quote: "Littérature : proclamer devant tous ce qu'on a soin de cacher à son entourage.", category: "LitteratureGenerale" },
  { id: 22, author: "Oscar Wilde", quote: "La littérature anticipe toujours la vie. Elle ne la copie point, mais la moule à ses fins.", category: "LitteratureGenerale" },
  { id: 23, author: "Ayya Khema", quote: "Qu'est-ce que la littérature, sinon une vie plus élevée et une forme supérieure de bonheur ?", category: "LitteratureGenerale" },
  { id: 24, author: "Henri Lefebvre", quote: "La littérature ne peut nous apporter le salut parce qu'elle a besoin elle-même d'être sauvée.", category: "LitteratureGenerale" },
  { id: 25, author: "Joris-Karl Huysmans", quote: "Vraiment, quand j'y songe, la littérature n'a qu'une raison d'être, sauver celui qui la fait du dégoût de vivre.", category: "LitteratureGenerale" },

  // POÉSIE (26-56)
  { id: 26, author: "Johann Wolfgang von Goethe", sourceOrWork: "Maximes et réflexions", quote: "On devrait souhaiter à tout homme sensé une certaine dose de poésie.", category: "Poesie" },
  { id: 27, author: "Johann Wolfgang von Goethe", quote: "Qu'est-ce que la poésie ? Une pensée dans une image.", category: "Poesie" },
  { id: 28, author: "Voltaire", sourceOrWork: "Lettres philosophiques", quote: "En ouvrages de goût, en musique, en poésie, en peinture, c'est le goût qui tient lieu de montre ; et celui qui n'en juge que par des règles en juge mal.", category: "Poesie" },
  { id: 29, author: "Voltaire", quote: "La poésie est une espèce de musique : il faut l'entendre pour en juger.", category: "Poesie" },
  { id: 30, author: "Charles Baudelaire", sourceOrWork: "L’Artiste", quote: "La poésie n'a pas d'autre but qu'elle-même.", category: "Poesie" },
  { id: 31, author: "Charles Baudelaire", sourceOrWork: "Les Fleurs du mal, L'Albatros", quote: "Le poète est semblable au prince des nuées. Ses ailes de géant l'empêchent de marcher.", category: "Poesie" },
  { id: 32, author: "Victor Hugo", sourceOrWork: "Odes et Ballades", quote: "La poésie, c'est tout ce qu'il y a d'intime dans tout.", category: "Poesie" },
  { id: 33, author: "Arthur Rimbaud", sourceOrWork: "Lettre du Voyant", quote: "Le poète se fait voyant par un long, immense et raisonné dérèglement de tous les sens.", category: "Poesie" },
  { id: 34, author: "Paul Valéry", sourceOrWork: "Tel Quel", quote: "La plupart des hommes ont de la poésie une idée si vague que ce vague même de leur idée est pour eux la définition de la poésie.", category: "Poesie" },
  { id: 35, author: "Paul Valéry", sourceOrWork: "Tel Quel", quote: "Le poème, cette hésitation prolongée entre le son et le sens.", category: "Poesie" },
  { id: 36, author: "Paul Valéry", sourceOrWork: "Variété", quote: "La poésie est l'ambition d'un discours qui soit chargé de plus de sens, et mêlé de plus de musique, que le langage ordinaire n'en porte et n'en peut porter.", category: "Poesie" },
  { id: 37, author: "Jean Cocteau", sourceOrWork: "La difficulté d'être (1947)", quote: "La poésie cesse à l'idée. Toute idée la tue.", category: "Poesie" },
  { id: 38, author: "Jean Cocteau", sourceOrWork: "Le Secret professionnel", quote: "Voilà le rôle de la poésie. Elle dévoile, dans toute la force du terme. Elle montre nues, sous une lumière qui secoue la torpeur, les choses surprenantes qui nous environnent et que nos sens enregistraient machinalement.", category: "Poesie" },
  { id: 39, author: "Jean Cocteau", sourceOrWork: "Journal d'un inconnu", quote: "Le poète se souvient de l'avenir.", category: "Poesie" },
  { id: 40, author: "Percy Bysshe Shelley", sourceOrWork: "Défense de la poésie", quote: "La poésie immortalise tout ce qu'il y a de meilleur et de plus beau dans le monde.", category: "Poesie" },
  { id: 41, author: "Alain", sourceOrWork: "Préliminaires à l'esthétique", quote: "Le vrai poète est celui qui trouve l'idée en forgeant le vers.", category: "Poesie" },
  { id: 42, author: "Guillaume Apollinaire", sourceOrWork: "La Femme assise (1914)", quote: "Douce poésie ! le plus beau des arts ! / Toi qui, suscitant en nous le pouvoir créateur, nous met tout proches de la divinité.", category: "Poesie" },
  { id: 43, author: "Roch Carrier", quote: "La poésie, c'est de la pensée en train de naître.", category: "Poesie" },
  { id: 44, author: "Andrée Chédid", sourceOrWork: "Terre et poésie", quote: "Si la poésie n'a pas bouleversé notre vie, c'est qu'elle ne nous est rien. Apaisante ou traumatisante, elle doit marquer de son signe ; autrement, nous n'en avons connu que l'imposture.", category: "Poesie" },
  { id: 45, author: "Paul Éluard", sourceOrWork: "Ralentir Travaux", quote: "Le poète est celui qui inspire bien plus que celui qui est inspiré.", category: "Poesie" },
  { id: 46, author: "Jacques Prévert", quote: "La poésie, c'est un des plus vrais, un des plus utiles surnoms de la vie.", category: "Poesie" },
  { id: 47, author: "Raymond Queneau", quote: "Comme le théâtre est fait pour être joué, la poésie est avant tout faite pour être dite.", category: "Poesie" },
  { id: 48, author: "Pierre Reverdy", sourceOrWork: "Le Livre de mon bord", quote: "Rien ne vaut d'être dit en poésie que l'indicible, c'est pourquoi l'on compte beaucoup sur ce qui se passe entre les lignes.", category: "Poesie" },
  { id: 49, author: "Jean-Paul Sartre", sourceOrWork: "Qu'est-ce que la littérature ?", quote: "Les poètes sont des hommes qui refusent d'utiliser le langage.", category: "Poesie" },
  { id: 50, author: "Jean Cocteau", quote: "Je sais que la poésie est indispensable, mais je ne sais pas à quoi.", category: "Poesie" },
  { id: 51, author: "Friedrich Klopstock", quote: "Faire de la poésie, c'est se confesser.", category: "Poesie" },
  { id: 52, author: "William Shakespeare", quote: "La poésie est cette musique que tout homme porte en soi.", category: "Poesie" },
  { id: 53, author: "Jean Genet", quote: "La poésie ou l'art d'utiliser les restes. D'utiliser la merde et de vous la faire bouffer.", category: "Poesie" },
  { id: 54, author: "Nathalie Sarraute", quote: "La poésie, dans une œuvre, c'est ce qui fait apparaître l'invisible.", category: "Poesie" },
  { id: 55, author: "Henri-Frédéric Amiel", quote: "La vie sans poésie et la vie sans infini, c'est comme un paysage sans ciel : on y étouffe.", category: "Poesie" },
  { id: 56, author: "Jean Anouilh", quote: "Oui, je me demande parfois si l'homme, tout bien pesé, n'a pas fait faire à la connaissance un énorme pas en arrière en renonçant à l'imagination et à la poésie comme moyens d'investigation scientifique...", category: "Poesie" },

  // THÉÂTRE (57-80)
  { id: 57, author: "William Shakespeare", sourceOrWork: "Comme il vous plaira", quote: "Le monde entier est un théâtre, et tous, hommes et femmes, n'en sont que les acteurs. Et notre vie durant nous jouons plusieurs rôles.", category: "Theatre" },
  { id: 58, author: "William Shakespeare", sourceOrWork: "Le Marchand de Venise", quote: "Je tiens ce monde pour ce qu'il est : un théâtre où chacun doit jouer son rôle.", category: "Theatre" },
  { id: 59, author: "William Shakespeare", sourceOrWork: "Hamlet", quote: "Le théâtre a pour objet d'être le miroir de la nature, de montrer à la vertu ses propres traits, à l'infamie sa propre image, et au temps même sa forme et ses traits.", category: "Theatre" },
  { id: 60, author: "Victor Hugo", sourceOrWork: "Les Burgraves", quote: "Le théâtre doit faire de la pensée le pain de la foule.", category: "Theatre" },
  { id: 61, author: "Victor Hugo", sourceOrWork: "Faits et croyances", quote: "Une pièce de théâtre, c'est quelqu'un. C'est une voix qui parle, c'est un esprit qui éclaire, c'est une conscience qui avertit.", category: "Theatre" },
  { id: 62, author: "Victor Hugo", quote: "Il y a deux manières de passionner la foule au théâtre : par le grand et par le vrai. Le grand prend les masses, le vrai saisit l'individu.", category: "Theatre" },
  { id: 63, author: "Victor Hugo", quote: "Le théâtre est un point d'optique. Tout ce qui existe dans le monde, dans l'histoire, dans la vie, dans l'homme, tout doit et peut s'y réfléchir, mais sous la baguette magique de l'art.", category: "Theatre" },
  { id: 64, author: "Victor Hugo", quote: "Le théâtre est une tribune.", category: "Theatre" },
  { id: 65, author: "Nicolas Boileau", sourceOrWork: "L'Art poétique", quote: "Qu'en un lieu, qu'en un jour, un seul fait accompli / Tienne jusqu'à la fin le théâtre rempli.", category: "Theatre" },
  { id: 66, author: "Molière", quote: "Le théâtre n'est fait que pour être vu.", category: "Theatre" },
  { id: 67, author: "Eugène Ionesco", quote: "Tout est langage au théâtre, les mots, les gestes, les objets. Il n'y a pas que la parole.", category: "Theatre" },
  { id: 68, author: "André Gide", quote: "C'est une extraordinaire chose que le théâtre. Des gens comme vous et moi s'assemblent le soir dans une salle pour voir feindre par d'autres des passions qu'eux n'ont pas le droit d'avoir.", category: "Theatre" },
  { id: 69, author: "Antonin Artaud", sourceOrWork: "Le Théâtre et son double", quote: "Sans un élément de cruauté à la base de tout spectacle, le théâtre n'est pas.", category: "Theatre" },
  { id: 70, author: "Georges Perros", sourceOrWork: "Papiers collés 1 (1973)", quote: "Le théâtre, c'est du présent mis en bouteille.", category: "Theatre" },
  { id: 71, author: "Arthur Adamov", quote: "Une pièce de théâtre doit être le lieu où le monde visible et le monde invisible se touchent et se heurtent.", category: "Theatre" },
  { id: 72, author: "Jean Anouilh", sourceOrWork: "Antigone", quote: "C'est reposant la tragédie, parce qu'on sait qu'il n'y a plus d'espoir, le sale espoir.", category: "Theatre" },
  { id: 73, author: "Raymond Queneau", quote: "Comme le théâtre est fait pour être joué, la poésie est avant tout faite pour être dite.", category: "Theatre" },
  { id: 74, author: "Victor Haïm", quote: "Le théâtre est fait pour diviser, voire déranger.", category: "Theatre" },
  { id: 75, author: "Antoine Vitez", quote: "Une mise en scène n'est jamais neutre. Toujours, il s'agit d'un choix.", category: "Theatre" },
  { id: 76, author: "Michel Bouquet", quote: "N'oubliez jamais que les gens viennent au théâtre non pour vous voir jouer mais pour jouer avec vous.", category: "Theatre" },
  { id: 77, author: "Bertolt Brecht", quote: "Un théâtre où on ne rit pas est un théâtre dont on doit rire.", category: "Theatre" },
  { id: 78, author: "Olivier Py", quote: "Au cinéma, ce qui marche bien, ce sont les scènes de rencontre. Au théâtre, ce sont les scènes de rupture.", category: "Theatre" },
  { id: 79, author: "Jacques Lassalle", quote: "Faire du théâtre exige une double aptitude : à la révolte et à l'admiration.", category: "Theatre" },
  { id: 80, author: "Michel Deutsch", quote: "Le théâtre est toujours le lieu d'un débat moral.", category: "Theatre" },

  // ROMAN (81-100)
  { id: 81, author: "Honoré de Balzac", sourceOrWork: "Avant-propos de 1842 à La Comédie humaine", quote: "En dressant l'inventaire des vices et des vertus, en rassemblant les principaux faits des passions, en peignant les caractères, [...] peut-être pouvais-je arriver à écrire l'histoire oubliée par tant d'historiens, celle des mœurs.", category: "Roman" },
  { id: 82, author: "George Sand", sourceOrWork: "Lettre à Flaubert (1876)", quote: "L'Éducation sentimentale a été un livre incompris... quand on ne nous comprend pas, c'est toujours notre faute.", category: "Roman" },
  { id: 83, author: "Gustave Flaubert", sourceOrWork: "Lettre à Louise Colet (1852)", quote: "Ce qui me semble beau, ce que je voudrais faire, c'est un livre sur rien, un livre sans attache extérieure, qui se tiendrait de lui-même par la force interne de son style.", category: "Roman" },
  { id: 84, author: "Gustave Flaubert", sourceOrWork: "Lettre à Louise Colet (1852)", quote: "L'auteur, dans son œuvre, doit être comme Dieu dans l'univers, présent partout, et visible nulle part.", category: "Roman" },
  { id: 85, author: "Gustave Flaubert", sourceOrWork: "Correspondance (1861)", quote: "On ne choisit pas son sujet. Voilà ce que le public et les critiques ne comprennent pas. Le secret des chefs-d'œuvre est là, dans la concordance du sujet et du tempérament de l'auteur.", category: "Roman" },
  { id: 86, author: "Stendhal", sourceOrWork: "Le Rouge et le Noir", quote: "Un roman est un miroir qui se promène sur une grande route. Tantôt il reflète à vos yeux l'azur des cieux, tantôt la fange des bourbiers de la route.", category: "Roman" },
  { id: 87, author: "Stendhal", quote: "Un roman est comme un archet, la caisse du violon qui rend les sons, c'est l'âme du lecteur.", category: "Roman" },
  { id: 88, author: "Émile Zola", quote: "Nous autres romanciers, nous sommes les juges d'instruction des hommes et de leurs passions.", category: "Roman" },
  { id: 89, author: "Émile Zola", sourceOrWork: "Le Roman expérimental (1880)", quote: "Le romancier est fait d'un observateur et d'un expérimentateur. [...] Le roman naturaliste est une expérience véritable que le romancier fait sur l'homme, en s'aidant de l'observation.", category: "Roman" },
  { id: 90, author: "Louis Aragon", quote: "Le roman est une machine inventée par l'homme pour l'appréhension du réel dans sa complexité.", category: "Roman" },
  { id: 91, author: "Louis Aragon", sourceOrWork: "Blanche ou l'Oubli", quote: "Jusqu'ici, les romanciers se sont contentés de parodier le monde. Il s'agit maintenant de l'inventer.", category: "Roman" },
  { id: 92, author: "Mikhaïl Bakhtine", sourceOrWork: "Esthétique et théorie du roman", quote: "Le roman est le seul genre en devenir, et encore inachevé. Il se constitue sous nos yeux.", category: "Roman" },
  { id: 93, author: "Georges Duhamel", sourceOrWork: "Les Maîtres", quote: "Le romancier est l'historien du présent, alors que l'historien est le romancier du passé.", category: "Roman" },
  { id: 94, author: "Marcel Proust", sourceOrWork: "Le Temps retrouvé", quote: "La littérature qui se contente de « décrire les choses », d'en donner seulement un misérable relevé de lignes et de surfaces, est celle qui, tout en s'appelant réaliste, est la plus éloignée de la réalité.", category: "Roman" },
  { id: 95, author: "Alain Robbe-Grillet", sourceOrWork: "Pour un nouveau roman", quote: "Chaque romancier, chaque roman doit inventer sa propre forme. Aucune recette ne peut remplacer cette réflexion continuelle. Le livre crée pour lui ses propres règles.", category: "Roman" },
  { id: 96, author: "Alain Robbe-Grillet", quote: "L'écrivain doit accepter avec orgueil de porter sa propre date, sachant qu'il n'y a pas de chef-d'œuvre dans l'éternité, mais seulement des œuvres dans l'histoire.", category: "Roman" },
  { id: 97, author: "Alain Robbe-Grillet", quote: "Croire que le romancier a « quelque chose à dire », et qu'il cherche ensuite comment le dire, représente le plus grave des contre-sens. Car c'est précisément ce « comment », cette manière de dire, qui constitue son projet d'écrivain.", category: "Roman" },
  { id: 98, author: "Marthe Robert", sourceOrWork: "Roman des origines et origines du roman", quote: "Le roman se distingue de tous les autres genres littéraires par son aptitude non pas à reproduire la réalité, mais à remuer la vie pour lui recréer sans cesse de nouvelles conditions.", category: "Roman" },
  { id: 99, author: "Virginia Woolf", quote: "Le roman est la seule forme d'art qui cherche à nous faire croire qu'elle donne un rapport complet et véridique de la vie d'une personne réelle.", category: "Roman" },
  { id: 100, author: "Honoré de Balzac", sourceOrWork: "La Comédie humaine", quote: "La société française allait être l'historien, je ne devais être que le secrétaire.", category: "Roman" }
];

export function findKouadiaSubject(query: string): SecretFrancaisSubject | null {
  if (!query) return null;
  const rawQ = query.trim();
  const q = rawQ.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "'");

  // 1. Recherche directe par ID exact
  const directId = SECRET_FRANCAIS_KOUADIA_SUBJECTS.find(s => s.id.toLowerCase() === rawQ.toLowerCase());
  if (directId) return directId;

  const GENERIC_TERMS = new Set([
    "commentaire",
    "commentaire compose",
    "commentaire compose sur",
    "commentaire litteraire",
    "dissertation",
    "dissertation litteraire",
    "sujet",
    "sujet bac",
    "examen",
    "baccalaureat",
    "bac"
  ]);

  let bestSubject: SecretFrancaisSubject | null = null;
  let bestScore = 0;

  for (const s of SECRET_FRANCAIS_KOUADIA_SUBJECTS) {
    let score = 0;
    const cleanTitle = s.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "'");
    const cleanAuthor = s.authorOrSource.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "'");
    const cleanWork = (s.work || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "'");
    const cleanStatement = s.statement.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "'");

    // Correspondance avec le titre
    if (q.includes(cleanTitle) || cleanTitle.includes(q)) {
      score += 40;
    }

    // Correspondance auteur ou œuvre
    if (cleanAuthor && cleanAuthor.length > 3 && q.includes(cleanAuthor)) {
      score += 30;
    }
    if (cleanWork && cleanWork.length > 3 && q.includes(cleanWork)) {
      score += 30;
    }

    // Correspondance avec l'énoncé du sujet
    if (cleanStatement.includes(q) || (q.length > 20 && cleanStatement.includes(q.slice(0, 30)))) {
      score += 50;
    }

    // Mots-clés spécifiques (en ignorant les termes génériques)
    for (const kw of s.keywords) {
      const cleanKw = kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[’']/g, "'").trim();
      if (GENERIC_TERMS.has(cleanKw) || cleanKw.length < 3) continue;

      if (q.includes(cleanKw)) {
        // Donner plus de poids aux mots-clés distinctifs multi-mots
        score += cleanKw.includes(" ") ? 25 : 12;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestSubject = s;
    }
  }

  // Seuil minimal pour éviter les faux positifs sur de simples mots isolés
  return bestScore >= 12 ? bestSubject : null;
}
