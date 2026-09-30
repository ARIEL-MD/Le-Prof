/**
 * BASE DE DONNÉES PÉDAGOGIQUE — PRÉPARER LES ÉPREUVES DE FRANÇAIS AU BACCALAURÉAT
 * Auteur : Cheikh Lô THIAM (Université Gaston Berger de Saint-Louis, Sénégal)
 * Annales officielles du Baccalauréat sénégalais (1992-2006) avec corrigés d'excellence :
 * Dissertations, Commentaires de texte (suivis & composés) et Résumés suivis de discussion.
 */

export interface SenegalBacExamCorrection {
  id: string;
  year: number;
  session: string;
  type: 'dissertation' | 'commentaire' | 'resume_discussion';
  title: string;
  authorOrSource: string;
  statement: string;
  theme: string;
  problemeOuProblematique: string;
  planType: 'dialectique' | 'analytique' | 'thematique' | 'descriptif' | 'comparatif';
  detailedPlan: {
    partNumber: number;
    partTitle: string;
    subPoints: {
      label: string;
      arguments: string;
      illustrations?: string;
    }[];
  }[];
  technicalNotesOrStylistics?: string[];
  conclusionSummary?: string;
}

export const CHEIKH_LO_THIAM_ANNALES: SenegalBacExamCorrection[] = [
  // --- DISSERTATIONS OFFICIELLES DU BAC SÉNÉGALAIS ---
  {
    id: 'bac-sn-2006-chateaubriand-societe-nouvelle',
    year: 2006,
    session: 'Baccalauréat Sénégal 2006',
    type: 'dissertation',
    title: 'La société nouvelle selon Chateaubriand',
    authorOrSource: 'François-René de Chateaubriand, Mémoires d\'outre-tombe (1848)',
    statement: `Dans les Mémoires d’outre-tombe dont la publication a commencé en février 1848, Chateaubriand exprimait cette inquiétude :
« Quelle sera la société nouvelle ? Vraisemblablement, l’espèce humaine s’agrandira ; mais il est à craindre que l’homme ne diminue, que quelques facultés éminentes du génie ne se perdent, que l’imagination, la poésie, les arts, ne meurent dans les trous d’une société ruche où chaque individu ne sera plus qu’une abeille, une roue dans une machine, un atome dans la matière organisée ».
Dans quelle mesure la civilisation de masse actuelle permet-elle de vérifier cette prédiction ? Justifiez vos craintes ou vos espoirs pour l’avenir sous la forme d’un développement argumenté.`,
    theme: 'La société de masse, le machinisme et le devenir de l\'homme',
    problemeOuProblematique: 'L’intense activité matérielle et technique dans la société contemporaine a-t-elle détourné l’homme de ses facultés spirituelles et créatrices éminentes ?',
    planType: 'analytique',
    detailedPlan: [
      {
        partNumber: 1,
        partTitle: 'I. Les causes de la déshumanisation et du recul spirituel dans la société moderne',
        subPoints: [
          {
            label: 'A. L\'essor démographique et la massification urbaine',
            arguments: 'L\'accroissement de la population et l\'urbanisation effrénée favorisent l\'anonymat et le chômage, contraignant l\'individu à une logique de pure survie.',
            illustrations: 'Les bidonvilles et métropoles tentaculaires où l\'homme devient un numéro statistique.'
          },
          {
            label: 'B. Le culte de la vitesse, du rendement et de l\'automatisme',
            arguments: 'La mécanisation et la rentabilité industrielle soumettent le travailleur au rythme implacable de la machine, étouffant le temps de la rêverie.',
            illustrations: 'La métaphore de la « société ruche » où l\'ouvrier n\'est qu\'un rouage anonyme (Marx, Les Temps Modernes de Chaplin).'
          },
          {
            label: 'C. Le coût prohibitif des biens et l\'assujettissement matériel',
            arguments: 'L\'obligation de consommer crée une dépendance économique permanente qui déracine les repères éthiques, culturels et religieux ancestraux.',
            illustrations: 'Société de surconsommation asservissant l\'esprit au profit du capital.'
          }
        ]
      },
      {
        partNumber: 2,
        partTitle: 'II. Les conséquences alarmantes sur la condition humaine et les arts',
        subPoints: [
          {
            label: 'A. L\'atrophie de la sensibilité poétique et du génie artistique',
            arguments: 'Le primat de l\'utilitaire et du quantifiable marginalise la contemplation désintéressée et l\'imagination créatrice.',
            illustrations: 'Disparition de l\'art désintéressé au profit de produits commerciaux standardisés.'
          },
          {
            label: 'B. L\'éviction de l\'éthique par le pragmatisme cynique',
            arguments: 'La morale devient un concept désuet : la réussite matérielle immédiate justifie tous les compromis.',
            illustrations: 'Chosification des relations humaines dénoncée par Aimé Césaire (« colonisation égale chosification »).'
          },
          {
            label: 'C. L\'espoir d\'un sursaut humaniste par la culture',
            arguments: 'Face à cette mécanisation, la littérature et les arts demeurent le sanctuaire ultime de la résistance morale et de la liberté.',
            illustrations: 'Mouvements écologiques, retour aux valeurs spirituelles et rôle éducatif des œuvres littéraires.'
          }
        ]
      }
    ],
    conclusionSummary: 'La prédiction de Chateaubriand s\'est tragiquement vérifiée dans les excès du matérialisme contemporain. Néanmoins, l\'art et la littérature conservent le pouvoir d\'arracher l\'homme à la machinerie aliénante pour restaurer sa dignité intégrale.'
  },
  {
    id: 'bac-sn-2004-mauriac-politique-engagement',
    year: 2004,
    session: 'Baccalauréat Sénégal 2004',
    type: 'dissertation',
    title: 'L\'engagement politique de l\'écrivain selon François Mauriac',
    authorOrSource: 'François Mauriac (pendant l\'Occupation)',
    statement: `Pendant l’Occupation, François Mauriac écrivait : « [La politique] nous concerne nous tous, et nous serons des lâches si nous cédons à cette facilité : celle du détachement ».
Expliquez et discutez cette opinion à partir de vos connaissances littéraires.`,
    theme: 'L’engagement politique de l’écrivain face aux tragédies de son temps',
    problemeOuProblematique: 'L’écrivain doit-il nécessairement se faire l’écho des luttes politiques de son siècle ou a-t-il le droit légitime de se consacrer exclusivement à la création esthétique et intime ?',
    planType: 'dialectique',
    detailedPlan: [
      {
        partNumber: 1,
        partTitle: 'I. Thèse : L\'impératif moral et civique de l\'engagement politique pour l\'écrivain',
        subPoints: [
          {
            label: 'A. La responsabilité historique de l\'homme de lettres',
            arguments: 'En tant que citoyen doté de la maîtrise du langage, l\'écrivain ne peut être complice passif de la tyrannie par son silence.',
            illustrations: 'Jean-Paul Sartre (Qu\'est-ce que la littérature ?) : « L’écrivain est dans le coup, quoi qu’il fasse, marqué, compromis jusqu’à sa plus lointaine retraite » ; combat de Victor Hugo contre Napoléon III (Les Châtiments).'
          },
          {
            label: 'B. Le devoir d\'offrir une voix aux opprimés et sans-voix',
            arguments: 'La littérature devient un instrument de combat pour émouvoir les consciences et mobiliser contre l\'injustice.',
            illustrations: 'Albert Camus (Discours de Suède 1957) : « L’art n’est pas à nos yeux une réjouissance solitaire » ; le réquisitoire des poètes de la Négritude (David Diop, Césaire) contre le colonialisme.'
          }
        ]
      },
      {
        partNumber: 2,
        partTitle: 'II. Antithèse : Les limites et les périls de l\'assujettissement politique de l\'art',
        subPoints: [
          {
            label: 'A. Le risque du didactisme partisan et de la propagande',
            arguments: 'En se mettant au service d\'un parti ou d\'une idéologie, la littérature risque de perdre sa liberté critique et de dégénérer en tracts simplistes.',
            illustrations: 'Henri Troyat : « Je suis un écrivain, je suis un rêveur et plus je m’engagerai, plus je m’éloignerai de ma vraie nature » ; l\'aveu de Sartre dans Les Mots : « Longtemps j’ai pris ma plume pour une épée. Mais à présent je reconnais notre impuissance ».'
          },
          {
            label: 'B. La primauté de la vocation esthétique et universelle de l\'art',
            arguments: 'Une œuvre survit aux régimes politiques grâce à sa beauté formelle et à sa vérité humaine intemporelle.',
            illustrations: 'Théophile Gautier et le Parnasse (« L’art pour l’art ») ; Flaubert : « Le but de l’art, c’est le beau avant tout ».'
          }
        ]
      },
      {
        partNumber: 3,
        partTitle: 'III. Synthèse : La réconciliation hugolienne entre le Beau et le Progrès',
        subPoints: [
          {
            label: 'A. L\'art pour le progrès comme accomplissement sublime du beau',
            arguments: 'Loin de s\'exclure, la perfection formelle décuple l\'efficacité du message émancipateur.',
            illustrations: 'Victor Hugo : « Le beau serviteur du vrai » ; poèmes clandestins de Paul Éluard (Liberté).'
          }
        ]
      }
    ],
    conclusionSummary: 'Si le repli dans la tour d\'ivoire constitue une lâcheté en période de crise nationale, l\'écrivain ne doit pas pour autant sacrifier les exigences esthétiques de son art à la politique politicienne.'
  },
  {
    id: 'bac-sn-2003-gide-anticonformisme',
    year: 2003,
    session: 'Baccalauréat Sénégal 2003',
    type: 'dissertation',
    title: 'L\'écrivain et l\'anticonformisme selon André Gide',
    authorOrSource: 'André Gide',
    statement: `« Un grand écrivain, un grand artiste est essentiellement anticonformiste. Il navigue à contre-courant ».
À l'aide d'exemples précis, vous expliquerez et discuterez ce propos d’André Gide.`,
    theme: 'Le statut de l\'artiste dans la société : conformisme vs transgression',
    problemeOuProblematique: 'L’anticonformisme constitue-t-il la marque distinctive nécessaire du génie artistique ou bien de grands créateurs peuvent-ils s’épanouir dans la célébration des valeurs communes de leur société ?',
    planType: 'dialectique',
    detailedPlan: [
      {
        partNumber: 1,
        partTitle: 'I. Thèse : La grandeur artistique par la rupture et le refus du conformisme',
        subPoints: [
          {
            label: 'A. Rupture idéologique et morale avec les préjugés du temps',
            arguments: 'Le grand créateur dérange en refusant les hypocrisies et les vérités convenues de sa société.',
            illustrations: 'Molière (Le Tartuffe fustigeant la fausse dévotion) ; Albert Camus (L’Étranger : Meursault condamné car il refuse de jouer le jeu des conventions sentimentales).'
          },
          {
            label: 'B. Rupture esthétique et révolution du langage',
            arguments: 'Créer, c\'est inventer une langue nouvelle contre les canons académiques figés.',
            illustrations: 'Baudelaire (Les Fleurs du Mal transfigurant la laideur) ; Apollinaire (Alcools supprimant la ponctuation) ; Ahmadou Kourouma (Les Soleils des Indépendances brisant la syntaxe française classique pour le rythme malinké).'
          }
        ]
      },
      {
        partNumber: 2,
        partTitle: 'II. Antithèse : La grandeur possible dans la communion avec l\'harmonie sociale et les règles',
        subPoints: [
          {
            label: 'A. L\'artiste comme chantre et interprète des aspirations populaires',
            arguments: 'La grandeur réside aussi dans la fidélité à la tradition et la transmission des valeurs partagées.',
            illustrations: 'Les tragédies classiques de Racine et Corneille respectant scrupuleusement les règles du XVIIe siècle ; Senghor magnifiant l\'héritage et la sagesse des ancêtres sérères dans Chants d’ombre.'
          },
          {
            label: 'B. L\'anticonformisme gratuit ne remplace pas le talent créateur',
            arguments: 'Provoquer pour la forme ne suffit pas à faire une œuvre durable si l\'inspiration fait défaut.',
            illustrations: 'Les excès éphémères du Dadaïsme (Tristan Tzara) par rapport à la pérennité des grands classiques.'
          }
        ]
      }
    ],
    conclusionSummary: 'L’anticonformisme est le moteur indispensable du renouveau littéraire, mais sa véritable fécondité dépend du talent avec lequel l’artiste transfigure sa révolte en chef-d’œuvre esthétique.'
  },
  {
    id: 'bac-sn-2002-senghor-ecrivains-negres',
    year: 2002,
    session: 'Baccalauréat Sénégal 2002',
    type: 'dissertation',
    title: 'L\'aventure des écrivains nègres : littérature ou passion politique ?',
    authorOrSource: 'Léopold Sédar Senghor',
    statement: `Selon Léopold Sédar SENGHOR, « L’aventure des écrivains nègres n’a pas été une entreprise littéraire. Ce fut une passion (politique) ! ».
Commentez cette affirmation en vous référant aux thèmes majeurs de la littérature négro-africaine.`,
    theme: 'L\'évolution historique et les missions de la littérature négro-africaine',
    problemeOuProblematique: 'La littérature négro-africaine s’est-elle limitée à un engagement politique au service de l’émancipation des peuples noirs ou constitue-t-elle également une quête esthétique autonome ?',
    planType: 'thematique',
    detailedPlan: [
      {
        partNumber: 1,
        partTitle: 'I. La genèse de la Négritude dans les années 1930 : libération culturelle et politique',
        subPoints: [
          {
            label: 'A. Le combat contre le mépris racial et l\'assimilation',
            arguments: 'Rejet de la politique coloniale d\'assimilation et affirmation militante de la dignité noire.',
            illustrations: 'Césaire (Cahier d’un retour au pays natal) ; Damas (Pigments) ; revue L’Étudiant Noir.'
          }
        ]
      },
      {
        partNumber: 2,
        partTitle: 'II. Le procès sans concession du système colonial (années 1940-1950)',
        subPoints: [
          {
            label: 'A. La dénonciation des violences, travaux forcés et spoliations',
            arguments: 'L\'écrivain noir se fait le témoin accusateur de la barbarie des colonisateurs après la Seconde Guerre mondiale.',
            illustrations: 'David Diop (Coups de pilon : Le temps du martyre, Les Vautours) ; Sembène Ousmane (Les Bouts de bois de Dieu) ; Ferdinand Oyono (Une vie de boy).'
          }
        ]
      },
      {
        partNumber: 3,
        partTitle: 'III. Le désenchantement des indépendances et la critique des pouvoirs postcoloniaux',
        subPoints: [
          {
            label: 'A. La dénonciation des dérives dictatoriales et du néocolonialisme',
            arguments: 'Après 1960, la plume africaine s\'attaque aux tares des nouveaux dirigeants (népotisme, tyrannie, corruption).',
            illustrations: 'Ahmadou Kourouma (Les Soleils des Indépendances) ; Aimé Césaire (La Tragédie du roi Christophe) ; Henri Lopes (Le Pleurer-Rire).'
          }
        ]
      }
    ],
    conclusionSummary: 'La littérature négro-africaine a été viscéralement marquée par la passion politique de la libération, tout en créant des formes esthétiques d\'une éclatante originalité.'
  },

  // --- COMMENTAIRES COMPOSÉS ET SUIVIS DU BAC SÉNÉGALAIS ---
  {
    id: 'bac-sn-2004-laforgue-spleen',
    year: 2004,
    session: 'Baccalauréat Sénégal 2004',
    type: 'commentaire',
    title: 'Commentaire du poème « Spleen » de Jules Laforgue',
    authorOrSource: 'Jules Laforgue, Poèmes inédits (1890)',
    statement: `« Tout m’ennuie aujourd’hui. J’écarte mon rideau.
En haut ciel gris rayé d’une éternelle pluie,
En bas la rue où dans une brume de suie
Des ombres vont, glissant parmi les flaques d’eau.
Je regarde sans voir fouillant mon vieux cerveau,
Et machinalement sur la vitre ternie
Je fais du bout du doigt de la calligraphie.
Bah ! sortons, je verrai peut-être du nouveau.
Pas de livres parus. Passants bêtes. Personne.
Des fiacres, de la boue, et l’averse toujours...
Puis le soir et le gaz et je rentre à pas lourds...
Je mange, et bâille, et lis, rien ne me passionne...
Chacun dort !
Seul, je ne puis dormir et je m’ennuie encore. »
Consigne : Vous ferez de ce texte un commentaire suivi ou composé. Dans le cadre du commentaire composé, vous montrerez comment l’auteur donne une tonalité originale à l’évocation de sa solitude et de son ennui.`,
    theme: 'Le spleen décadent, l\'ennui existentiel et l\'isolement urbain',
    problemeOuProblematique: 'Comment l\'écriture disloquée et le jeu des correspondances traduisent-ils l\'angoisse et la monotonie d\'une conscience captive de son vide intérieur ?',
    planType: 'thematique',
    detailedPlan: [
      {
        partNumber: 1,
        partTitle: 'Centre d’intérêt 1 : L’expression du spleen et de l’ennui destructeur',
        subPoints: [
          {
            label: 'A. Le sentiment de vacuité et la lassitude intérieure',
            arguments: 'Attaque péremptoire (« Tout m’ennuie aujourd’hui »), métaphore de l\'esprit usé (« fouillant mon vieux cerveau ») et paradoxe (« regarde sans voir »).',
            illustrations: 'Geste machinal de calligraphie sur la vitre ternie traduisant l\'automatisme d\'un être déconnecté.'
          },
          {
            label: 'B. La rupture et le désenchantement de la sortie urbaine',
            arguments: 'L\'interjection désabusée (« Bah ! sortons ») débouche sur une suite de phrases nominales télégraphiques (« Pas de livres parus. Passants bêtes. Personne »).',
            illustrations: 'La rue n\'offre aucun renouveau : retour circulaire au point de départ et à l\'insomnie solitaire.'
          }
        ]
      },
      {
        partNumber: 2,
        partTitle: 'Centre d’intérêt 2 : Les correspondances symbolistes entre l\'âme du poète et le paysage extérieur',
        subPoints: [
          {
            label: 'A. La grisaille atmosphérique comme miroir psychique',
            arguments: 'Champ lexical de la morosité (« ciel gris », « éternelle pluie », « brume de suie », « boue ») créant un filtre étouffant.',
            illustrations: 'Symétrie spatiale (« En haut » / « En bas ») emprisonnant le poète dans un univers clos sans échappatoire.'
          },
          {
            label: 'B. La dislocation rythmique et stylistique du sonnet',
            arguments: 'Allitérations en [p] martelant la monotonie, polysyndète en « et » étirant les actions machinales (« mange, et bâille, et lis »).',
            illustrations: 'Mutilation du second vers du dernier tercet mettant en relief l\'isolement tragique final : « Seul, je ne puis dormir et je m’ennuie encore ».'
          }
        ]
      }
    ],
    technicalNotesOrStylistics: [
      'Phrases nominales télégraphiques marquant la décomposition de la pensée.',
      'Hyperbole de « l’éternelle pluie » pour suggérer l\'infinitude de la souffrance.',
      'Chute poétique sur l\'insomnie révélant la condition tragique du poète décadent.'
    ]
  },
  {
    id: 'bac-sn-2002-victor-hugo-quia-pulvis-es',
    year: 2002,
    session: 'Baccalauréat Sénégal 2002',
    type: 'commentaire',
    title: 'Commentaire de « Quia pulvis es » de Victor Hugo',
    authorOrSource: 'Victor Hugo, Les Contemplations (Livre III : Les Luttes et les Rêves)',
    statement: `« Ceux-ci partent, ceux-là demeurent
Sous le sombre aquilon, dont les mille voix pleurent,
Poussière et genre humain, tout s’envole à la fois.
Hélas ! Le même vent souffle, en l’ombre où nous sommes,
Sur toutes les têtes des hommes,
Sur toutes les feuilles des bois.
Ceux qui restent à ceux qui passent
Disent : - Infortunés ! déjà vos fronts s’effacent.
Quoi ! vous n’entendrez plus la parole et le bruit !
Quoi ! vous ne verrez plus ni le ciel ni les arbres !
Vous allez dormir sous les marbres !
Vous allez tomber dans la nuit ! -
Ceux qui passent à ceux qui restent
Disent : - Vous n’avez rien à vous ! vos pleurs l’attestent !
Pour vous, gloire et bonheur sont des mots décevants.
Dieu donne aux morts les biens réels, les vrais royaumes.
Vivants ! vous êtes des fantômes ;
C’est nous qui sommes les vivants ! »
Consigne : Vous ferez de ce texte un commentaire suivi ou composé montrant comment le poète suggère que la mort symbolise autant le néant absolu que la vraie vie.`,
    theme: 'Le mystère de la mort : anéantissement tragique vs délivrance spirituelle',
    problemeOuProblematique: 'Comment le dialogue entre vivants et défunts opère-t-il le renversement métaphysique de la vie apparente en néant et du trépas en résurrection véritable ?',
    planType: 'dialectique',
    detailedPlan: [
      {
        partNumber: 1,
        partTitle: 'Centre d’intérêt 1 : L\'universalité implacable de la mort et la plainte angoissée des vivants',
        subPoints: [
          {
            label: 'A. L\'allégorie du vent destructeur',
            arguments: 'Le « sombre aquilon » emporte indifféremment l\'homme et la nature, illustrant la vanité des choses terrestres.',
            illustrations: '« Poussière et genre humain, tout s’envole à la fois » ; anaphore de « Sur toutes... ».'
          },
          {
            label: 'B. La déploration funèbre des vivants',
            arguments: 'Apostrophes lamentatrices (« Infortunés ! »), anaphores de « Quoi ! » et énumération des privations sensorielles.',
            illustrations: '« Vous allez dormir sous les marbres ! Vous allez tomber dans la nuit ! »'
          }
        ]
      },
      {
        partNumber: 2,
        partTitle: 'Centre d’intérêt 2 : La réponse triomphale des morts et le renversement de la perspective spirituelle',
        subPoints: [
          {
            label: 'A. La dénonciation des illusions terrestres',
            arguments: 'Les défunts rappellent la futilité des honneurs humains (« gloire et bonheur sont des mots décevants »).',
            illustrations: 'Antithèse saisissante réduisant les vivants à des ombres éphémères (« Vivants ! vous êtes des fantômes »).'
          },
          {
            label: 'B. La possession des biens éternels dans le royaume divin',
            arguments: 'Prosopopée finale accordant la parole sacrée aux morts qui accèdent à la réalité pleine de l\'Être.',
            illustrations: 'Chute sublime et paradoxale : « C’est nous qui sommes les vivants ! ».'
          }
        ]
      }
    ]
  },
  {
    id: 'bac-sn-2001-senghor-koras-balafong',
    year: 2001,
    session: 'Baccalauréat Sénégal 2001',
    type: 'commentaire',
    title: 'Commentaire de « Que m’accompagnent koras et balafong » de Léopold Sédar Senghor',
    authorOrSource: 'Léopold Sédar Senghor, Chants d\'ombre (1945)',
    statement: `« Entendez tambour qui bat ! Maman qui m’appelle.
Elle m’a dit Toubab !
D’embrasser la plus belle.
Elle m’a dit « Seigneur » !
Choisir ! Et délicieusement écartelé entre ces deux mains amies
- Un baiser de toi Soukeïna ! - ces deux mondes antagonistes
Quand douloureusement - ah ! Je ne sais plus qui est ma sœur et qui ma sœur de lait
De celles qui bercèrent mes nuits de leur tendresse rêvée, de leurs mains mêlées
Quand douloureusement - un baiser de toi Isabelle ! - entre ces deux mains
Que je voudrais unir dans ma main chaude de nouveau.
Mais il faut choisir à l’heure de l’épreuve
J’ai choisi le verset des fleuves, des vents et des forêts
L’assonance des plaines et des rivières, choisi le rythme de sang de mon corps dépouillé
Choisi la trémulsion des balafons et l’accord des cordes et des cuivres qui semble faux, choisi le
Swing le swing oui le swing !
Charniers neigeux d’Europe.
J’ai choisi mon peuple noir peinant, mon peuple paysan,
Toute la race paysanne par le monde.
« Et les frères se sont irrités contre toi, ils t’ont mis à bêcher la terre ».
Pour être ta trompette ! »
Consigne : Vous ferez de ce poème un commentaire composé montrant comment le poète exprime son déchirement face à ses amantes d’une part, et son choix définitif à travers des images fortes d’autre part.`,
    theme: 'Le dilemme identitaire du poète entre deux cultures et son choix émancipateur',
    problemeOuProblematique: 'Comment le poète exprime-t-il le déchirement douloureux de la double appartenance culturelle avant de proclamer son engagement indéfectible auprès de son peuple ?',
    planType: 'dialectique',
    detailedPlan: [
      {
        partNumber: 1,
        partTitle: 'Centre d’intérêt 1 : L’expression du déchirement intérieur et de la séduction bicéphale',
        subPoints: [
          {
            label: 'A. L\'interpellation maternelle et le sentiment d\'aliénation',
            arguments: 'Le battement du tambour rappelle le poète à ses origines mais le mot « Toubab » résonne comme un constat douloureux d\'acculturation.',
            illustrations: '« Entendez tambour qui bat ! Maman qui m’appelle. Elle m’a dit Toubab ! ».'
          },
          {
            label: 'B. Le conflit amoureux allégorique (Soukeïna vs Isabelle)',
            arguments: 'L\'oxymore saisissant « délicieusement écartelé » traduit la richesse et la souffrance d\'un cœur partagé entre l\'Afrique noire et l\'Europe blanche.',
            illustrations: 'Répétition anaphorique de « Quand douloureusement... » et désir d\'unir ces deux mains amies.'
          }
        ]
      },
      {
        partNumber: 2,
        partTitle: 'Centre d’intérêt 2 : Le choix décisif de l\'Afrique et l\'engagement poétique de porte-voix',
        subPoints: [
          {
            label: 'A. Le choix de la terre natale et des rythmes ancestraux',
            arguments: 'Répétition incantatoire de « J\'ai choisi... » rompant avec les « charniers neigeux d\'Europe » pour épouser les sonorités de la nature africaine.',
            illustrations: '« Le verset des fleuves, des vents et des forêts... la trémulsion des balafons ».'
          },
          {
            label: 'B. La mission de guide et de trompette des opprimés',
            arguments: 'Senghor élargit son combat à toute la condition paysanne exploitée et se consacre comme porte-parole fraternel.',
            illustrations: 'Métaphore finale : « Pour être ta trompette ! ».'
          }
        ]
      }
    ]
  },
  {
    id: 'bac-sn-1995-baudelaire-lennemi',
    year: 1995,
    session: 'Baccalauréat Sénégal 1995',
    type: 'commentaire',
    title: 'Commentaire du sonnet « L’Ennemi » de Charles Baudelaire',
    authorOrSource: 'Charles Baudelaire, Les Fleurs du Mal (1857)',
    statement: `« Voilà que Ma jeunesse ne fut qu’un ténébreux orage,
Traversé çà et là par de brillants soleils ;
Le tonnerre et la pluie ont fait un tel ravage,
Qu’il reste en mon jardin bien peu de fruits vermeils.
Voilà que j’ai touché, l’automne des idées,
Et qu’il faut employer la pelle et les râteaux
Pour rassembler à neuf les terres inondées,
Où l’eau creuse des trous grands comme des tombeaux.
Et qui sait si les fleurs nouvelles que je rêve
Trouveront dans ce sol lavé comme une grève
Le mystique aliment qui ferait leur vigueur ?
- Ô douleur ! O douleur ! Le temps mange la vie ;
Et l’obscur Ennemi qui nous ronge le cœur
Du sang que nous perdons croît et se fortifie ! »
Consigne : Vous ferez de ce texte un commentaire composé étudiant la fugacité du bonheur, la tyrannie du Temps destructeur et ses entraves à la création poétique.`,
    theme: 'L\'angoisse du temps destructeur et le tarissement de l\'inspiration poétique',
    problemeOuProblematique: 'Comment la métaphore filée des saisons et du jardin dévasté traduit-elle le drame d\'un créateur en proie à l\'usure physique et au spectre de la stérilité ?',
    planType: 'thematique',
    detailedPlan: [
      {
        partNumber: 1,
        partTitle: 'Centre d’intérêt 1 : La tyrannie implacable et ravageuse du Temps',
        subPoints: [
          {
            label: 'A. La métaphore météorologique d\'une jeunesse tourmentée',
            arguments: 'La jeunesse n\'a pas été un printemps radieux mais un « ténébreux orage » parsemé de rares éclaircies (« brillants soleils »).',
            illustrations: 'Dégâts matériels causés par « le tonnerre et la pluie » réduisant l\'âme à un sol détrempé.'
          },
          {
            label: 'B. L\'allégorie monstrueuse du Temps prédateur',
            arguments: 'Personnification du Temps en bête vampirique et insatiable dans le dernier tercet.',
            illustrations: '« Le temps mange la vie ; Et l’obscur Ennemi qui nous ronge le cœur / Du sang que nous perdons croît et se fortifie ! ».'
          }
        ]
      },
      {
        partNumber: 2,
        partTitle: 'Centre d’intérêt 2 : Les menaces de stérilité pesant sur l\'acte créateur',
        subPoints: [
          {
            label: 'A. L\'esprit assimilé à un jardin en friche',
            arguments: 'L\'entrée dans « l\'automne des idées » impose un labeur pénible pour réparer un sol creusé « de trous grands comme des tombeaux ».',
            illustrations: 'Comparaison « comme une grève » marquant l\'érosion et la stérilité de la conscience.'
          },
          {
            label: 'B. Le doute angoissé quant à l\'éclosion des œuvres futures',
            arguments: 'La question oratoire du premier tercet trahit l\'incertitude de trouver encore le « mystique aliment » de la muse poétique.',
            illustrations: 'L\'espoir vacillant de faire refleurir les « fleurs nouvelles » au cœur du Spleen.'
          }
        ]
      }
    ]
  }
];
