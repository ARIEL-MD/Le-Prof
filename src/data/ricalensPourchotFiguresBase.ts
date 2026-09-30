/**
 * BASE DE DONNÉES PÉDAGOGIQUE — DICTIONNAIRE DES FIGURES DE STYLE
 * Auteure : Nicole RICALENS-POURCHOT (Éditions Armand Colin, 2003 / 2005)
 * Référence incontournable de stylistique, rhétorique et analyse littéraire.
 * Comprend les 28 formules mnémotechniques, la classification alphabétique et les 16 planches thématiques.
 */

export interface FigureDeStyleEntry {
  nom: string;
  genre: 'n.f.' | 'n.m.' | 'n.m. et f.' | 'adj.';
  etymologie: string;
  definition: string;
  slogan: string;
  exemples: { citation: string; auteurOuSource: string; explication?: string }[];
  remarques: string[];
  synonymes?: string[];
  antonymes?: string[];
  planchesThematiques: string[];
}

export const RICALENS_POURCHOT_FORMULES_MNEMOTECHNIQUES = [
  { numero: 1, action: "Jongler avec le sens des mots", figures: "Antanaclase, diaphore, syllepse, tautologie. Jeux de mots sur homophonie = paronomase, catachrèse ludique." },
  { numero: 2, action: "Couper court au discours (surprise, colère, hésitation)", figures: "Anacoluthe, aposiopèse, réticence." },
  { numero: 3, action: "Invoquer absents, morts ou inanimés et les faire parler", figures: "Prosopopée (mise en scène), personnification (traits humains), sermocination (don de la parole)." },
  { numero: 4, action: "S'exprimer à moindres frais (éviter les répétitions)", figures: "Zeugme (adjonction ou disjonction), ellipse, brachylogie, enthymémisme." },
  { numero: 5, action: "Manifester compassion, politesse ou atténuer", figures: "Euphémisme, litote, métalepse, exténuation, tapinose (ironique), hypocorisme (mots caressants), circonlocution." },
  { numero: 6, action: "Transcrire et jouer avec les sons", figures: "Onomatopée (bruits), assonance (voyelles), allitération (consonnes), apophonie, dérivation, homéotéleute, polyptote." },
  { numero: 7, action: "Répéter un même mot selon sa place", figures: "Épanalepse (tête et fin de phrase A-A), épanadiplose (A-, -A), anaphore (début), épiphore (fin), symploque (début et fin combinés), palillogie (mots juxtaposés), anadiplose (ricochet), épanode (expression en écho), antépiphore (refrain strophique)." },
  { numero: 8, action: "Figuration de l'abstrait", figures: "Symbole (signe concret pour idée abstraite), abstraction (qualité nominalisée)." },
  { numero: 9, action: "Rapprochements analogiques", figures: "Comparaison (avec mot-outil), métaphore (sans mot-outil : in praesentia / in absentia / filée / concetti), antéisagoge (comparer à ce qu'il n'est pas avant d'affirmer)." },
  { numero: 10, action: "Désignation indirecte et transfert de nom", figures: "Pronomination (allusion légendaire/historique), métonymie (contiguïté), synecdoque (inclusion partie/tout), hyponymie (nom spécifique pour nom générique)." },
  { numero: 11, action: "Récits imagés", figures: "Allégorie (composition symbolique cohérente), parabole (récit moralisateur), mythe (récit fabuleux auquel on croit)." },
  { numero: 12, action: "Coupes et altérations de syllabes (métaplasmes)", figures: "Aphérèse (couper au début), apocope (couper à la fin), syncope (couper au milieu), mot-valise (télescopage), tmèse (couper un mot en deux)." },
  { numero: 13, action: "Ajouts et suppressions de liaisons", figures: "Explétion (mots en surplus), polysyndète (excès de coordonnants), asyndète (suppression des coordonnants), parataxe (suppression des articulations)." },
  { numero: 14, action: "Jeux d'esprit, lettres et contraintes", figures: "Calembour (homophones), verlan (syllabes inversées), anagramme (lettres transposées), palindrome (lisible dans les deux sens), contrepèterie (interversion grivoise), lapalissade (évidence naïve), lipogramme (lettre interdite)." },
  { numero: 15, action: "Symétrie et structures inversées", figures: "Parallélisme (structures identiques), réversion (A-B B-A avec mêmes mots), chiasme (A-B B'-A' avec mots différents), épitrochasme (rythme saccadé)." },
  { numero: 16, action: "Ironie et feinte", figures: "Astéisme (louer sous apparence de blâme mondain), antiphrase (dire le contraire du vrai), épitrope (inviter ironiquement à persévérer), chleuasme (se déprécier soi-même), prétérition (feindre de taire ce qu'on dit)." },
  { numero: 17, action: "Contrastes et alliances insolites", figures: "Attelage (deux compléments abstrait/concret liés au même verbe), oxymoron (alliance intime de termes opposés), hypallage (adjectif déplacé), antithèse (opposition de vérités), antilogie (collision paradoxale)." },
  { numero: 18, action: "Mise en relief par déplacement", figures: "Dislocation (déplacement à gauche ou droite), hyperbate (rejet en fin de phrase), hendiadyn (dédoublement d'un syntagme en deux noms coordonnés)." },
  { numero: 19, action: "Bouleversement temporel et logique", figures: "Prolepse (action anticipée), hystérologie (mettre la charrue avant les bœufs)." },
  { numero: 20, action: "Phrases asymétriques et bancales", figures: "Anapodoton (phrase en suspens), anantapodoton (phrase alternative sans second membre)." },
  { numero: 21, action: "Exagérations", figures: "Hyperbole (termes excessifs), adynaton (exagération impossible contredisant la nature)." },
  { numero: 22, action: "Interruptions et incises", figures: "Apostrophe (interpellation brutale), parembole (incise portant un jugement personnel)." },
  { numero: 23, action: "Explications et redoublements", figures: "Apposition (explicative entre virgules), redondance (redoublement de sens entre deux phrases), pléonasme volontaire (au sein de la même phrase), périphrase (détour pour un seul mot)." },
  { numero: 24, action: "Changements de catégories", figures: "Énallage (changer de classe grammaticale ou de temps), antonomase (nom propre pour nom commun ou inversement), annomination (dériver un nom commun d'un nom propre)." },
  { numero: 25, action: "Ordre des mots", figures: "Inversion (sujet après verbe), anastrophe (inversion à l'intérieur d'un syntagme)." },
  { numero: 26, action: "Vocabulaires spécifiques", figures: "Archaïsme (mot ancien désuet), néologisme (mot nouveau forgé), pérégrinisme (mot étranger emprunté)." },
  { numero: 27, action: "Listes et progressions", figures: "Énumération (éléments d'un même tout), accumulation (éléments disparates, liste ouverte), gradation (ascendante ou descendante), bathos (chute décevante après une gradation)." },
  { numero: 28, action: "Pléonasmes vicieux et verbiage", figures: "Périssologie (pléonasme involontaire fautif), battologie (redondance excessive et bavardage)." }
];

export const RICALENS_POURCHOT_FIGURES_CORPUS: FigureDeStyleEntry[] = [
  {
    nom: "Allégorie",
    genre: "n.f.",
    etymologie: "Du grec allêgoria (allos 'autre' et agoreuein 'parler en public')",
    definition: "Composition symbolique cohérente et prolongée où une notion abstraite est représentée sous la forme d'un être animé ou d'une narration concrète.",
    slogan: "Idée mise en images",
    exemples: [
      {
        citation: "Je vis cette faucheuse. Elle était dans son champ / Elle allait à grands pas, moissonnant et fauchant / Noir squelette, laissant passer le crépuscule.",
        auteurOuSource: "Victor Hugo, Les Contemplations, « Mors »",
        explication: "Allégorie de la mort faucheuse détruisant implacablement l'humanité."
      },
      {
        citation: "Quoique ses yeux soient couverts d’un bandeau, ses regards pénètrent l’avenir... La Foi et la Charité lui disent : ma sœur... et elle se nomme l’Espérance !",
        auteurOuSource: "Chateaubriand, Le Génie du Christianisme",
        explication: "Allégorie des vertus théologales personnifiées."
      }
    ],
    remarques: [
      "Diffère de la simple personnification qui reste ponctuelle et temporaire.",
      "Diffère de la métaphore filée car le comparé de l'allégorie est toujours une notion abstraite universelle."
    ],
    planchesThematiques: ["Planche XI C (Mise en relief)", "Planche XVI C (Tropes métaphoriques)"]
  },
  {
    nom: "Chiasme",
    genre: "n.m.",
    etymologie: "Du grec khiasmos 'disposition en forme de croix (X)'",
    definition: "Figure de symétrie croisée comprenant quatre termes sémantiquement différents disposés selon le schéma A - B / B' - A'.",
    slogan: "Disposition croisée",
    exemples: [
      {
        citation: "Tel qui rit vendredi, dimanche pleurera.",
        auteurOuSource: "Racine, Les Plaideurs",
        explication: "Verbe (rit) / Nom (vendredi) // Nom (dimanche) / Verbe (pleurera)."
      },
      {
        citation: "Un roi chantait en bas, en haut mourait un Dieu.",
        auteurOuSource: "Victor Hugo, La Légende des siècles",
        explication: "Sujet-Verbe / Adverbe // Adverbe / Verbe-Sujet."
      }
    ],
    remarques: [
      "Diffère de la réversion (antimétabole) qui reprend exactement les mêmes mots inversés (A-B / B-A)."
    ],
    planchesThematiques: ["Planche IX D (Jeux syntaxiques)", "Planche XIII A (Répétition de structures)"]
  },
  {
    nom: "Oxymoron (ou Oxymore)",
    genre: "n.m.",
    etymologie: "Du grec oxumôron (oxu 'aigu, spirituel' et môros 'mou, sot')",
    definition: "Alliance de deux mots de sens contradictoire ou incompatible réunis au sein du même syntagme grammatical.",
    slogan: "Intimité inattendue",
    exemples: [
      {
        citation: "Cette obscure clarté qui tombe des étoiles...",
        auteurOuSource: "Corneille, Le Cid, acte IV, sc. III",
        explication: "Alliance poétique sublime de l'obscurité et de la clarté astrale."
      },
      {
        citation: "Hâtez-vous lentement...",
        auteurOuSource: "Nicolas Boileau, L'Art poétique",
        explication: "Oxymore d'impératifs conciliant rigueur et célérité créatrice."
      },
      {
        citation: "ce qu'elle demandait, c'était le noir bonheur du sommeil...",
        auteurOuSource: "Edmond et Jules de Goncourt, Germinie Lacerteux",
        explication: "L'oubli anesthésiant de l'alcool vu comme félicité tragique."
      }
    ],
    remarques: [
      "Diffère de l'antithèse qui oppose deux vérités dans deux propositions distinctes.",
      "Diffère de l'attelage qui relie deux compléments de nature différente au même verbe."
    ],
    planchesThematiques: ["Planche V (Contraste/Opposition)", "Planche IX C (Jeux sémantiques)", "Planche XV (Surprenant)"]
  },
  {
    nom: "Attelage (ou Zeugme sémantique)",
    genre: "n.m.",
    etymologie: "Du latin attelare (lier ensemble deux forces)",
    definition: "Coordination sous la dépendance d'un même verbe ou d'une même préposition de deux compléments sémantiquement disparates (souvent l'un concret, l'autre abstrait).",
    slogan: "Couple mal assorti",
    exemples: [
      {
        citation: "Il posa sa canne et une question.",
        auteurOuSource: "Exemple classique de stylistique",
        explication: "Canne (concret) et question (abstrait) régis par le même verbe 'poser' pris en syllepse."
      },
      {
        citation: "Vêtu de probité candide et de lin blanc.",
        auteurOuSource: "Victor Hugo, La Légende des siècles, « Booz endormi »",
        explication: "Probité candide (moral/abstrait) et lin blanc (matériel/concret) sous le participe 'vêtu'."
      },
      {
        citation: "Il prit du ventre et beaucoup de pays.",
        auteurOuSource: "Jacques Prévert, Composition française",
        explication: "Ventre (anatomique) et pays (géopolitique) rattachés à 'prit'."
      }
    ],
    remarques: [
      "Le zeugme syntaxique est la mise en facteur ; l'attelage est la collision sémantique des compléments."
    ],
    planchesThematiques: ["Planche V (Contraste)", "Planche IX C (Jeux sémantiques)", "Planche XV (Surprenant)"]
  },
  {
    nom: "Prétérition",
    genre: "n.f.",
    etymologie: "Du latin praeteritio (l'action de passer sous silence)",
    definition: "Figure consistant à déclarer qu'on ne parlera pas d'un sujet au moment même où on l'expose dans le détail.",
    slogan: "Mine de rien",
    exemples: [
      {
        citation: "Je ne vous peindrai point le tumulte et les cris / Le sang de tous côtés ruisselant dans Paris...",
        auteurOuSource: "Voltaire, La Henriade",
        explication: "Voltaire dépeint l'horreur de la Saint-Barthélemy en prétendant ne pas la peindre."
      },
      {
        citation: "Je pourrais vous faire remarquer qu’elle connaissait si bien la beauté des ouvrages de l’esprit… mais pourquoi m’étendre…",
        auteurOuSource: "Bossuet, Oraison funèbre d'Henriette d'Angleterre",
        explication: "Éloge appuyé formulé sous couvert de brièveté oratoire."
      }
    ],
    remarques: [
      "Arme redoutable en rhétorique judiciaire et politique pour insinuer sans paraître attaquer."
    ],
    planchesThematiques: ["Planche IV (Complicité)", "Planche VIII (Ironie)", "Planche XI C (Mise en relief)"]
  }
];
