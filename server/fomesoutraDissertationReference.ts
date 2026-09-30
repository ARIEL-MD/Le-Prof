/**
 * Corpus de calibration documentaire — sujets/corrigés de dissertation vus sur Fomesoutra.
 *
 * Ce module est volontairement déterministe : aucune API d'IA, aucun modèle génératif.
 * Fomesoutra sert ici de réservoir documentaire pour observer des formulations scolaires
 * ivoiriennes réelles (sujets, problématiques et plans). Le corpus ne prétend pas être
 * un référentiel officiel du ministère.
 */

export interface FomesoutraDissertationReference {
  id: string;
  genre: 'poesie' | 'roman' | 'theatre' | 'litterature';
  keywords: string[];
  reformulation: string;
  probleme: string;
  axe1: string;
  axe2: string;
  sourceLabel: string;
}

const REFERENCES: FomesoutraDissertationReference[] = [
  {
    id: 'fome-fr-01-barthes-poesie', genre: 'poesie',
    keywords: ['univers poetique', 'tourments', 'poetes', 'jamais souri'],
    reformulation: "La poésie est avant tout l'expression d'une souffrance profonde et de tourments intérieurs qui marquent l'existence du poète.",
    probleme: "La poésie est-elle exclusivement le chant de la douleur ?",
    axe1: "La poésie exprime le malaise, la mélancolie et la souffrance.",
    axe2: "La poésie célèbre aussi la vie, la joie, la beauté et l'amour.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  {
    id: 'fome-fr-02-sartre-liberte', genre: 'litterature',
    keywords: ['litterature vous jette dans la bataille', 'ecrire', 'autre facon', 'vouloir la liberte'],
    reformulation: "Selon cette opinion, écrire revient à s'engager et à lutter pour la liberté.",
    probleme: "Quel est le rôle de la littérature dans la société ?",
    axe1: "La littérature est une arme de combat au service de la liberté et de la lutte contre l'injustice.",
    axe2: "La littérature peut aussi distraire, faire rêver et procurer du plaisir au lecteur.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  {
    id: 'fome-fr-03-jules-verne', genre: 'roman',
    keywords: ['transporté mes lecteurs', 'loin de la terre', 'romans', 'voyage imaginaire'],
    reformulation: "Le roman permet au lecteur de voyager dans l'imagination et de s'évader du réel.",
    probleme: "Le roman se limite-t-il à distraire le lecteur ?",
    axe1: "Le roman divertit le lecteur et lui permet de s'évader.",
    axe2: "Le roman peut aussi instruire, faire réfléchir et contribuer à la formation du lecteur.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  {
    id: 'fome-fr-04-vilar-theatre', genre: 'theatre',
    keywords: ['theatre n est pas un divertissement', 'besoin imperieux', 'jean vilar'],
    reformulation: "Le théâtre n'est pas seulement un divertissement : il répond à un besoin humain et peut agir sur la conscience.",
    probleme: "Le théâtre est-il un simple plaisir ou une nécessité indispensable à l'homme ?",
    axe1: "Le théâtre constitue une nécessité : il éveille les consciences, reflète la vie et instruit.",
    axe2: "Le théâtre procure aussi le plaisir du spectacle, du rire et de l'émotion.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  {
    id: 'fome-fr-05-poesie-intimite', genre: 'poesie',
    keywords: ['je deteste parler de moi meme', 'parler de moi meme', 'poesie', 'intimite'],
    reformulation: "Cette opinion présente la poésie comme une expression privilégiée de l'intimité et des sentiments personnels du poète.",
    probleme: "La poésie a-t-elle pour unique fonction l'expression de l'intimité du poète ?",
    axe1: "La poésie permet au poète d'exprimer ses sentiments, ses émotions et son expérience personnelle.",
    axe2: "La poésie peut aussi dépasser l'intimité pour parler du monde, de la société et des autres.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  {
    id: 'fome-fr-06-maupassant-roman', genre: 'roman',
    keywords: ['but du roman', 'raconter une histoire', 'amuser', 'faire penser', 'maupassant'],
    reformulation: "Le roman ne doit pas seulement raconter une histoire agréable : il peut aussi amener le lecteur à réfléchir et à comprendre le monde.",
    probleme: "Quel est le véritable but du roman ?",
    axe1: "Le roman amène le lecteur à réfléchir, à comprendre les hommes et à découvrir certaines vérités.",
    axe2: "Le roman a aussi pour fonction de divertir, d'émouvoir et de procurer du plaisir.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  {
    id: 'fome-fr-07-litterature-societe', genre: 'litterature',
    keywords: ['litterature', 'cause sociale', 'culturelle', 'politique', 'engagement'],
    reformulation: "Cette conception fait de la littérature un moyen privilégié de défendre une cause sociale, culturelle ou politique.",
    probleme: "Quelle fonction la littérature doit-elle remplir dans la société ?",
    axe1: "La littérature peut s'engager dans les combats sociaux, politiques et culturels.",
    axe2: "La littérature peut aussi rechercher la beauté, exprimer les émotions et offrir une évasion au lecteur.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  {
    id: 'fome-fr-08-fiction-realite', genre: 'roman',
    keywords: ['roman', 'art de mentir', 'verite', 'imaginaire', 'invention'],
    reformulation: "Le roman repose sur l'invention et la transformation artistique du réel.",
    probleme: "Le roman repose-t-il uniquement sur l'imaginaire et l'invention ?",
    axe1: "Le roman crée des personnages, des situations et des univers imaginaires.",
    axe2: "Le roman peut aussi s'inspirer de la réalité et révéler les hommes et la société.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  {
    id: 'fome-fr-09-auteur-realite', genre: 'litterature',
    keywords: ['ecrire cest mentir', 'ecrire c est mentir', 'auteur', 'realite'],
    reformulation: "Écrire suppose une transformation de la réalité par l'imagination et le travail de l'auteur.",
    probleme: "Quelle est la fonction de l'auteur dans son rapport à la réalité ?",
    axe1: "L'auteur transforme et réinvente la réalité grâce à l'imagination et à la fiction.",
    axe2: "L'auteur peut aussi révéler des vérités sur l'homme et la société à travers cette transformation.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  {
    id: 'fome-fr-10-poete-denonciation', genre: 'poesie',
    keywords: ['mission du poete', 'denonciation', 'travers', 'contemporains'],
    reformulation: "Cette conception attribue au poète une mission critique : dénoncer les défauts et les injustices de son époque.",
    probleme: "La mission du poète se limite-t-elle uniquement à la dénonciation des travers de ses contemporains ?",
    axe1: "Le poète peut dénoncer les injustices, les vices et les dérives de son époque.",
    axe2: "La poésie peut également célébrer la beauté, exprimer les sentiments et faire rêver.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  {
    id: 'fome-fr-11-romaimagination', genre: 'roman',
    keywords: ['reussite oeuvre romanesque', 'pouvoir de limagination', 'pouvoir de l imagination', 'michel raimond'],
    reformulation: "La réussite d'un roman semble dépendre en partie de la capacité de l'auteur à créer et à imaginer.",
    probleme: "La réussite d'une œuvre romanesque repose-t-elle exclusivement sur le pouvoir de l'imagination ?",
    axe1: "L'imagination permet de créer des personnages, des intrigues et des univers captivants.",
    axe2: "La réussite romanesque dépend aussi de l'observation du réel, de l'écriture et de la construction de l'œuvre.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  {
    id: 'fome-fr-12-stendhal', genre: 'roman',
    keywords: ['roman est un miroir', 'miroir', 'promene le long', 'stendhal'],
    reformulation: "Le roman peut représenter la réalité sociale et humaine comme un miroir qui reflète le monde.",
    probleme: "Quelle est la fonction du roman ?",
    axe1: "Le roman représente la réalité, les comportements et les problèmes de la société.",
    axe2: "Le roman ne se réduit pas au reflet du réel : il invente, divertit et permet aussi d'explorer l'imaginaire.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  {
    id: 'fome-fr-13-theatre-fonction', genre: 'theatre',
    keywords: ['quelle est la fonction du theatre', 'fonction du theatre', 'fonction du théâtre'],
    reformulation: "Le sujet invite à déterminer les différentes finalités que le théâtre peut remplir auprès du spectateur et dans la société.",
    probleme: "Quelle est la fonction du théâtre ?",
    axe1: "Le théâtre divertit et procure des émotions au spectateur.",
    axe2: "Le théâtre instruit, fait réfléchir et peut dénoncer les maux de la société.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  {
    id: 'fome-fr-14-poesie-role', genre: 'poesie',
    keywords: ['quelle est la fonction de la poesie', 'fonction de la poesie', 'fonction de la poésie'],
    reformulation: "Le sujet demande d'identifier les différentes finalités de la poésie, au-delà d'une seule fonction.",
    probleme: "Quelle est la fonction de la poésie ?",
    axe1: "La poésie permet d'exprimer les émotions, de célébrer la beauté et de créer un univers esthétique.",
    axe2: "La poésie peut aussi témoigner, dénoncer les injustices et agir sur la société.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  {
    id: 'fome-fr-15-litterature-evasion', genre: 'litterature',
    keywords: ['litterature se limite', 'reve et evasion', 'rêve et évasion', 'oublier ses soucis'],
    reformulation: "La littérature peut offrir au lecteur un espace de rêve et d'évasion permettant d'oublier momentanément les difficultés du quotidien.",
    probleme: "La littérature se limite-t-elle au rêve et à l'évasion ?",
    axe1: "La littérature permet au lecteur de s'évader, de rêver et de se distraire.",
    axe2: "La littérature peut aussi instruire, émouvoir, faire réfléchir et interroger la réalité.",
    sourceLabel: 'Fomesoutra — sujets/corrigés de dissertation littéraire'
  },
  // Extension documentaire — trois documents Scribd fournis par l'utilisateur.
  // Les formulations ci-dessous sont des synthèses/paraphrases de motifs pédagogiques
  // observés dans les documents, et non une reproduction de leurs textes.
  {
    id: 'scribd-roman-realite', genre: 'roman',
    keywords: ['roman reflete la realite', 'roman denonce les maux', 'corruption injustice sociale', 'monde s effondre', 'une si longue lettre'],
    reformulation: "Le roman peut représenter la société, ses problèmes et ses cultures tout en construisant une fiction.",
    probleme: "Le roman se réduit-il à une simple représentation de la réalité ?",
    axe1: "Le roman reflète la réalité sociale, culturelle et humaine et peut dénoncer ses dérives.",
    axe2: "Le roman relève aussi de l'imagination, de la fiction et de la création d'univers romanesques.",
    sourceLabel: 'Scribd — Arguments sur le roman et la poésie'
  },
  {
    id: 'scribd-roman-engage', genre: 'roman',
    keywords: ['roman fonction engagee', 'denonciation critique', 'le mandat', 'soleils des independances', 'rebelle fatou keita'],
    reformulation: "Le roman peut prendre position face aux injustices, aux abus de pouvoir et aux pratiques sociales contestées.",
    probleme: "Le roman a-t-il pour seule fonction de dénoncer les maux de la société ?",
    axe1: "Le roman peut dénoncer la corruption, les abus de pouvoir, les injustices et certaines pratiques sociales.",
    axe2: "Le roman peut aussi divertir, faire rêver, émouvoir et développer une recherche esthétique.",
    sourceLabel: 'Scribd — Arguments sur le roman suivi du résumé des œuvres romanesques'
  },
  {
    id: 'scribd-roman-evasion', genre: 'roman',
    keywords: ['roman fonction ludique', 'imagination rire esthetique', 'planete des singes', 'petit bodiel', 'enfant noir'],
    reformulation: "Le roman peut répondre au besoin d'évasion, de rire, d'émotion et de création esthétique.",
    probleme: "Le roman se limite-t-il à divertir le lecteur ?",
    axe1: "Le roman permet l'évasion, le rire, l'émotion et le plaisir esthétique.",
    axe2: "Le roman peut également instruire, témoigner et amener le lecteur à réfléchir sur la société.",
    sourceLabel: 'Scribd — Arguments sur le roman suivi du résumé des œuvres romanesques'
  },
  {
    id: 'scribd-lecture-evasion', genre: 'litterature',
    keywords: ['lecture moyen evasion', 'lecture monde irreel', 'lecture source distraction', 'lecture moyen instruction'],
    reformulation: "La lecture peut à la fois détourner momentanément du quotidien et apporter des connaissances ou une formation.",
    probleme: "La lecture se limite-t-elle à l'évasion ?",
    axe1: "La lecture permet de rêver, de s'évader et de se distraire grâce aux univers imaginaires.",
    axe2: "La lecture permet aussi d'acquérir des connaissances, de réfléchir et de former le jugement.",
    sourceLabel: 'Scribd — Arguments sur le roman et la poésie'
  },
  {
    id: 'scribd-ecrivain', genre: 'litterature',
    keywords: ['role ecrivain', 'fonction educative', 'defenseur guide', 'garant de la liberte', 'revaloriser sa culture'],
    reformulation: "L'écrivain peut exercer une responsabilité intellectuelle, éducative et sociale tout en poursuivant une création personnelle.",
    probleme: "Quelle est la fonction de l'écrivain dans la société ?",
    axe1: "L'écrivain peut instruire, dénoncer les injustices, défendre les opprimés et valoriser une culture.",
    axe2: "L'écrivain peut aussi créer, raconter, exprimer son expérience et rechercher le plaisir esthétique.",
    sourceLabel: 'Scribd — Arguments sur le roman et la poésie'
  },
  {
    id: 'scribd-poesie-vie', genre: 'poesie',
    keywords: ['poesie expression de la vie', 'sentiments personnels', 'femme noire', 'chaka', 'misere'],
    reformulation: "La poésie peut exprimer la vie intérieure du poète tout en portant un regard sur le monde et la société.",
    probleme: "La poésie se limite-t-elle à l'expression des sentiments personnels ?",
    axe1: "La poésie exprime les sentiments, l'amour, la joie, la douleur et les expériences intimes.",
    axe2: "La poésie peut aussi dénoncer la colonisation, la misère et les injustices collectives.",
    sourceLabel: 'Scribd — Arguments sur le roman et la poésie'
  },
  {
    id: 'scribd-poesie-engagement', genre: 'poesie',
    keywords: ['poesie denonce colonisation', 'poesie critique misere', 'poete engagement', 'poesie societe'],
    reformulation: "La poésie peut devenir une parole de témoignage et de combat lorsqu'elle prend position face aux réalités collectives.",
    probleme: "La poésie a-t-elle pour seule fonction de chanter les sentiments et la beauté ?",
    axe1: "La poésie peut célébrer les sentiments, la beauté, l'amour et l'émotion.",
    axe2: "La poésie peut également dénoncer l'oppression, la misère et défendre des valeurs collectives.",
    sourceLabel: 'Scribd — Arguments sur le roman et la poésie'
  },
  {
    id: 'scribd-litterature-fonctions', genre: 'litterature',
    keywords: ['litterature denonce colonisation', 'litterature culture peuples noirs', 'fonction autobiographique', 'moyen evasion'],
    reformulation: "La littérature remplit plusieurs fonctions : représenter, témoigner, dénoncer, valoriser une culture et permettre l'évasion.",
    probleme: "Quelle est la fonction essentielle de la littérature dans la société ?",
    axe1: "La littérature peut représenter la société, transmettre une culture et dénoncer les injustices.",
    axe2: "La littérature peut aussi raconter, émouvoir, divertir et offrir au lecteur un espace d'évasion.",
    sourceLabel: 'Scribd — Arguments sur le roman et la poésie'
  },
  {
    id: 'scribd-resumes-genres', genre: 'litterature',
    keywords: ['genres litteraires', 'roman theatre poesie', 'resume oeuvres', 'methodologie dissertation litteraire', 'premiere terminale'],
    reformulation: "La dissertation littéraire mobilise la connaissance des genres, des mouvements et des œuvres pour construire une argumentation précise.",
    probleme: "Comment les connaissances littéraires permettent-elles de construire une dissertation solide ?",
    axe1: "La maîtrise des genres, des procédés et des mouvements permet de comprendre précisément les sujets littéraires.",
    axe2: "La connaissance des œuvres permet ensuite d'appuyer chaque argument par des exemples pertinents et précis.",
    sourceLabel: 'Scribd — Résumé des Œuvres Littéraires et Genres'
  },
  {
    id: 'scribd-poesie-beaute', genre: 'poesie',
    keywords: ['poesie beaute', 'harmonie sonore', 'image poetique', 'versification', 'sonnet'],
    reformulation: "La poésie travaille la langue, les sons, les images et la forme pour produire une expérience esthétique.",
    probleme: "La poésie se réduit-elle à un simple jeu sur la forme et les sons ?",
    axe1: "La poésie recherche l'harmonie, la musicalité, les images et les effets esthétiques du langage.",
    axe2: "Elle peut aussi exprimer une vision du monde, des sentiments et des préoccupations humaines ou sociales.",
    sourceLabel: 'Scribd — Résumé des Œuvres Littéraires et Genres'
  },
  {
    id: 'scribd-roman-realite-fiction', genre: 'roman',
    keywords: ['roman reflète realite', 'pure imagination', 'histoire raconte imagination', 'univers imaginaire', 'romancier cree'],
    reformulation: "Le roman oscille entre observation du réel et invention d'un univers propre à l'auteur.",
    probleme: "Le roman est-il seulement une reproduction de la réalité ?",
    axe1: "Le romancier observe les hommes, les milieux, les cultures et les problèmes de son époque.",
    axe2: "Le romancier transforme aussi le réel par l'invention, le merveilleux, le fantastique et la fiction.",
    sourceLabel: 'Scribd — Arguments sur le roman et la poésie'
  },
];

function normalize(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
}

export function findFomesoutraDissertationReference(statement: string): FomesoutraDissertationReference | null {
  const n = normalize(statement);
  let best: { item: FomesoutraDissertationReference; score: number } | null = null;
  for (const item of REFERENCES) {
    const hits = item.keywords.reduce((sum, key) => sum + (n.includes(normalize(key)) ? 1 : 0), 0);
    const threshold = item.keywords.length <= 2 ? 1 : Math.max(2, Math.ceil(item.keywords.length * 0.4));
    if (hits >= threshold) {
      const score = hits / item.keywords.length;
      if (!best || score > best.score) best = { item, score };
    }
  }
  return best?.item ?? null;
}

export const FOMESOUTRA_DISSERTATION_REFERENCE_COUNT = REFERENCES.length;
