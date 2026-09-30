import { ArgumentVariant } from '../argumentVariationEngine';

/**
 * Enrichissement inspiré des axes présents dans les trois documents Scribd fournis.
 * Les formulations ci-dessous sont réécrites dans un français simple ; elles ne
 * reproduisent pas les paragraphes des sources. Les citations ne sont ajoutées
 * que lorsqu'elles sont déjà utilisées dans le corpus du projet.
 */
export const FRENCH_SOURCE_EXPANSIONS: Record<string, ArgumentVariant[]> = {
  roman: [{
    id: 30,
    label: 'Axes supplémentaires — roman, réalité et société',
    perspective: 'Réalisme, critique sociale, culture et évasion',
    pedagogicalAdvice: 'Arguments courts inspirés des axes des sources fournies.',
    arguments: [
      { statement: 'Le roman peut dénoncer les pratiques sociales qui font souffrir les individus.', author: 'Fatou Keïta', work: 'Rebelle', quote: '', explanation: 'Le récit montre une pratique ou une situation injuste et permet au lecteur d’en voir les conséquences. Le roman devient ainsi un moyen de faire réfléchir sur la société.', category: 'Engagement social', connector: 'D’abord' },
      { statement: 'Le roman peut montrer les effets de la colonisation sur les populations.', author: 'Ferdinand Oyono', work: 'Le Vieux Nègre et la Médaille', quote: '', explanation: 'À travers le destin des personnages, le lecteur découvre les humiliations et les injustices liées au système colonial. La fiction aide donc à comprendre une réalité historique.', category: 'Critique sociale', connector: 'Ensuite' },
      { statement: 'Le roman peut faire découvrir l’histoire et la culture d’un peuple.', author: 'Djibril Tamsir Niane', work: 'Soundjata ou l’épopée mandingue', quote: '', explanation: 'Le récit fait connaître des personnages, des traditions et des événements liés à une société. Il peut ainsi transmettre une mémoire collective.', category: 'Fonction historique et culturelle', connector: 'Par ailleurs' },
      { statement: 'Le roman peut aussi permettre au lecteur de s’évader de la réalité.', author: 'Marie-Thérèse Rhoui', work: 'La Planète de Saliba', quote: '', explanation: 'La fiction crée un monde différent du quotidien. Le lecteur peut alors imaginer d’autres lieux, d’autres vies et d’autres possibilités.', category: 'Évasion', connector: 'Enfin' },
      { statement: 'Le roman peut apprendre au lecteur des valeurs utiles dans la vie.', author: 'Amadou Koné', work: 'Les Frasques d’Ebinto', quote: '', explanation: 'À travers les choix et les erreurs des personnages, le lecteur peut réfléchir au travail, à la responsabilité et aux conséquences de ses actes.', category: 'Fonction didactique', connector: 'De plus' }
    ]
  }],
  poesie: [{
    id: 30,
    label: 'Axes supplémentaires — poésie et engagement',
    perspective: 'Engagement, émotions, beauté et transmission',
    pedagogicalAdvice: 'Formulations simples pour les dissertations sur les fonctions de la poésie.',
    arguments: [
      { statement: 'La poésie peut dénoncer la colonisation et défendre la liberté.', author: 'David Diop', work: 'Coups de pilon', quote: '', explanation: 'Le poète transforme sa colère en paroles. Il montre les injustices de la domination et appelle à la libération.', category: 'Poésie engagée', connector: 'D’abord' },
      { statement: 'La poésie peut donner une voix à ceux qui souffrent.', author: 'Aimé Césaire', work: 'Cahier d’un retour au pays natal', quote: 'Ma bouche sera la bouche des malheurs qui n’ont point de bouche.', explanation: 'Le poète parle au nom de personnes qui ne peuvent pas faire entendre leur voix. La poésie devient ainsi un moyen de dénoncer la souffrance.', category: 'Défense des opprimés', connector: 'Ensuite' },
      { statement: 'La poésie peut transmettre une leçon de vie.', author: 'Jean de La Fontaine', work: 'Les Fables', quote: '', explanation: 'Une histoire courte peut présenter un comportement et montrer ses conséquences. Le lecteur peut alors retenir une leçon morale.', category: 'Fonction didactique', connector: 'Par ailleurs' },
      { statement: 'La poésie peut célébrer la beauté et la culture africaine.', author: 'Léopold Sédar Senghor', work: 'Chants d’ombre', quote: '', explanation: 'Le poète utilise les mots et les images pour rendre hommage à l’Afrique, à sa culture et à sa beauté.', category: 'Célébration culturelle', connector: 'Enfin' }
    ]
  }],
  theatre: [{
    id: 30,
    label: 'Axes supplémentaires — théâtre, rire et société',
    perspective: 'Divertissement, critique sociale et réflexion',
    pedagogicalAdvice: 'Arguments simples inspirés des axes des sources fournies.',
    arguments: [
      { statement: 'Le théâtre peut dénoncer les mauvais usages du pouvoir.', author: 'Aimé Césaire', work: 'La Tragédie du roi Christophe', quote: '', explanation: 'La pièce montre les difficultés liées au pouvoir et à la manière de gouverner. Le spectacle pousse le public à réfléchir à la responsabilité des dirigeants.', category: 'Engagement politique', connector: 'D’abord' },
      { statement: 'Le théâtre peut critiquer l’argent et la cupidité.', author: 'Guillaume Oyono-Mbia', work: 'Trois Prétendants… un mari', quote: '', explanation: 'Les personnages peuvent être poussés par l’argent à prendre de mauvaises décisions. Le théâtre montre alors les effets de la cupidité sur les relations humaines.', category: 'Critique sociale', connector: 'Ensuite' },
      { statement: 'Le théâtre peut divertir grâce aux situations comiques.', author: 'Soro Guéfala', work: 'L’Ordonnance', quote: '', explanation: 'Les gestes, les malentendus et les situations inattendues provoquent le rire. Le spectateur se détend tout en suivant l’histoire.', category: 'Fonction ludique', connector: 'Par ailleurs' },
      { statement: 'Le théâtre peut apprendre une leçon au spectateur.', author: 'Pierre Corneille', work: 'Le Cid', quote: 'Aux âmes bien nées, la valeur n’attend point le nombre des années.', explanation: 'Les personnages et leurs choix permettent de réfléchir aux valeurs humaines. Le spectacle peut donc divertir tout en donnant matière à penser.', category: 'Fonction didactique', connector: 'Enfin' }
    ]
  }],
  litterature: [{
    id: 30,
    label: 'Axes supplémentaires — littérature et société',
    perspective: 'Conscience, culture, critique et formation',
    pedagogicalAdvice: 'Arguments transversaux utilisables pour plusieurs genres littéraires.',
    arguments: [
      { statement: 'La littérature peut aider le lecteur à prendre conscience des problèmes de la société.', author: 'Fatou Keïta', work: 'Rebelle', quote: '', explanation: 'En montrant une injustice ou une difficulté réelle, l’œuvre pousse le lecteur à réfléchir. Elle peut ainsi participer à une prise de conscience.', category: 'Éveil des consciences', connector: 'D’abord' },
      { statement: 'La littérature peut transmettre une culture et une mémoire.', author: 'Léopold Sédar Senghor', work: 'Chants d’ombre', quote: '', explanation: 'Les œuvres gardent des histoires, des valeurs et des façons de voir le monde. Elles permettent donc de transmettre une partie de la mémoire d’un peuple.', category: 'Culture et mémoire', connector: 'Ensuite' },
      { statement: 'La littérature peut divertir et faire rêver.', author: 'Antoine de Saint-Exupéry', work: 'Le Petit Prince', quote: '', explanation: 'La fiction fait sortir le lecteur de son quotidien. Elle lui permet d’imaginer des personnages, des lieux et des situations nouvelles.', category: 'Évasion', connector: 'Par ailleurs' },
      { statement: 'La littérature peut faire réfléchir sur les comportements humains.', author: 'Albert Camus', work: 'L’Étranger', quote: '', explanation: 'Les personnages placent le lecteur devant des choix et des situations difficiles. Le lecteur peut alors réfléchir à la liberté, à la responsabilité et aux relations humaines.', category: 'Réflexion', connector: 'Enfin' }
    ]
  }]
};

export const PHILO_SOURCE_EXPANSIONS: Record<string, ArgumentVariant[]> = {
  philosophie: [{
    id: 30,
    label: 'Arguments supplémentaires — valeur de la philosophie',
    perspective: 'Raison, esprit critique et conduite de la vie',
    pedagogicalAdvice: 'Formulations simples issues des axes du document philosophique fourni.',
    arguments: [
      { statement: 'La philosophie aide l’homme à mieux penser et à mieux orienter sa vie.', author: 'René Descartes', work: 'Principes de la philosophie', quote: '', explanation: 'Philosopher oblige à examiner ses idées au lieu de les accepter sans réfléchir. Cette réflexion peut aider à mieux comprendre ses choix et ses actions.', category: 'Valeur de la philosophie', connector: 'D’abord' },
      { statement: 'La philosophie développe l’esprit critique.', author: 'Socrate', work: 'Apologie de Socrate', quote: '', explanation: 'Elle nous apprend à poser des questions et à demander des raisons. Elle évite ainsi d’accepter une idée seulement parce que tout le monde la répète.', category: 'Esprit critique', connector: 'Ensuite' },
      { statement: 'La philosophie peut remettre en question les habitudes et les idées reçues.', author: 'Karl Marx', work: 'Contribution à la critique de la philosophie du droit de Hegel', quote: '', explanation: 'La réflexion philosophique peut révéler des problèmes cachés derrière des pratiques considérées comme normales. Elle peut donc ouvrir un débat sur la société.', category: 'Critique sociale', connector: 'Par ailleurs' }
    ]
  }],
  societe: [{
    id: 30,
    label: 'Arguments supplémentaires — société',
    perspective: 'Individu, règles, éducation et entraide',
    pedagogicalAdvice: 'Arguments simples inspirés du chapitre sur la société du document fourni.',
    arguments: [
      { statement: 'La société protège les individus grâce à des règles communes.', author: 'Thomas Hobbes', work: 'Le Léviathan', quote: '', explanation: 'Les règles limitent certaines violences et permettent aux personnes de vivre ensemble. Elles donnent ainsi un cadre à la vie collective.', category: 'Ordre social', connector: 'D’abord' },
      { statement: 'La société nous apprend des valeurs par l’éducation.', author: 'Jean-Jacques Rousseau', work: 'Du contrat social', quote: '', explanation: 'En vivant avec les autres, nous apprenons des règles et des façons de nous comporter. La vie sociale participe donc à notre formation morale.', category: 'Éducation', connector: 'Ensuite' },
      { statement: 'La société permet aux individus de s’entraider.', author: 'David Hume', work: 'Traité de la nature humaine', quote: '', explanation: 'Un individu ne peut pas tout faire seul. La coopération permet de répondre à des besoins que chacun aurait du mal à satisfaire isolément.', category: 'Entraide', connector: 'Enfin' }
    ]
  }],
  morale: [{
    id: 30,
    label: 'Arguments supplémentaires — morale',
    perspective: 'Éducation, société et jugement moral',
    pedagogicalAdvice: 'Arguments simples inspirés du chapitre sur la morale du document fourni.',
    arguments: [
      { statement: 'L’éducation joue un rôle important dans la formation morale.', author: 'Émile Durkheim', work: 'L’Éducation morale', quote: '', explanation: 'L’enfant apprend progressivement des règles et des valeurs dans sa famille et dans la société. La morale peut donc se construire par l’éducation.', category: 'Morale acquise', connector: 'D’abord' },
      { statement: 'Les règles morales peuvent varier selon les sociétés.', author: 'Émile Durkheim', work: 'Les Règles de la méthode sociologique', quote: '', explanation: 'Les sociétés n’ont pas toujours les mêmes habitudes ni les mêmes règles. Cela montre que certaines façons de juger le bien et le mal dépendent du contexte social.', category: 'Relativité morale', connector: 'Ensuite' },
      { statement: 'La raison peut aider l’homme à distinguer ce qu’il doit faire.', author: 'Emmanuel Kant', work: 'Fondements de la métaphysique des mœurs', quote: '', explanation: 'La morale ne consiste pas seulement à suivre ses envies. Il faut aussi réfléchir à la règle que l’on suit et se demander si elle peut être valable pour tous.', category: 'Raison morale', connector: 'Enfin' }
    ]
  }],
  conscience: [{
    id: 30,
    label: 'Arguments supplémentaires — conscience',
    perspective: 'Conscience de soi et vie sociale',
    pedagogicalAdvice: 'Arguments simples inspirés du chapitre sur la conscience du document fourni.',
    arguments: [
      { statement: 'La conscience permet à l’homme de réfléchir sur ses propres actions.', author: 'René Descartes', work: 'Méditations métaphysiques', quote: '', explanation: 'L’homme peut prendre du recul sur ce qu’il pense et sur ce qu’il fait. Il peut ainsi examiner ses idées et ses choix.', category: 'Conscience de soi', connector: 'D’abord' },
      { statement: 'La conscience de soi se construit aussi dans la relation avec les autres.', author: 'Georg Wilhelm Friedrich Hegel', work: 'Phénoménologie de l’esprit', quote: '', explanation: 'Nous découvrons une partie de notre identité à travers le regard et la reconnaissance des autres. La relation avec autrui participe donc à la construction de soi.', category: 'Conscience et autrui', connector: 'Enfin' }
    ]
  }]
};
