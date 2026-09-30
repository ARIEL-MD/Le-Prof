import { OfficialIvorianCourse } from '../../types';

export const LYCEE_HUMANITIES_COURSES: OfficialIvorianCourse[] = [
  // ==========================================
  // 1. TERMINALE (TOUTES SÉRIES) - PHILOSOPHIE (DPFC / MENA)
  // ==========================================
  {
    id: 'philo-tle-methodologie-dissertation-et-commentaire',
    discipline: 'philo',
    disciplineLabel: 'Philosophie (Terminale Toutes Séries : A1, A2, C, D, E)',
    level: 'terminale',
    levelLabel: 'Terminale (Tle A1, A2, C, D, E - Bac)',
    serie: 'tle_a',
    serieLabel: 'Terminale Toutes Séries (A, C, D, E)',
    chapter: 'Méthodologie Officielle du Baccalauréat : Dissertation Philosophique & Commentaire de Texte',
    lessonTitle: 'Étude parcellaire, Problématisation (3 techniques), 3 Modèles d\'Introduction (Paradoxe), Développement 2 Axes, Conclusion officielle & Commentaire (NODDACI philosophique / Étude ordonnée et Intérêt)',
    objectifs: [
      'Maîtriser les étapes du travail préliminaire de la dissertation : Lexique contextuel, Reformulation, Problématisation (les 3 techniques) et Aspects du sujet (1ère question + 2ème question avec antithèse questionnée)',
      'Rédiger l\'introduction de dissertation en un seul bloc selon les 3 techniques officielles (par citation, par opinion générale partagée, par définition du concept)',
      'Structurer le développement de dissertation en 2 grands axes (Thèse / Antithèse) avec 3 arguments étayés d\'illustrations philosophiques majeures et une transition claire',
      'Rédiger la conclusion officielle de dissertation avec Bilan (Axe 1 / Axe 2), Point de vue personnel (porté sur le bonheur, la liberté, la vérité ou la connaissance de l\'homme) et Ouverture',
      'Maîtriser la grille de lecture du commentaire de texte philosophique (Thème, Problème, Thèse, Antithèse, Intention/visée argumentative, Enjeu lointain, Structure logique en mouvements, Démarche argumentative)',
      'Rédiger le développement du commentaire philosophique en deux parties strictes : 1. Étude ordonnée (explication des mouvements sans paraphrase) et 2. Intérêt philosophique (Critique interne + Critique externe)'
    ],
    fullCourseContent: `I. MÉTHODOLOGIE OFFICIELLE DE LA DISSERTATION PHILOSOPHIQUE AU BACCALAURÉAT :

1. LES ÉTAPES DU TRAVAIL PRÉLIMINAIRE AU BROUILLON :
- LEXIQUE OU DÉFINITION DES MOTS : Repérer les mots pertinents (porteurs de sens) du sujet et leur donner des définitions contextuelles tout en respectant la syntaxe.
- REFORMULATION DU SUJET : Réécrire le sujet à partir de ses propres mots tout en gardant son sens authentique pour le rendre limpide.
- PROBLÉMATISATION DU SUJET (Forme interrogative - 3 techniques au choix) :
  * Technique 1 (Focalisation sur le thème central) : Joindre les termes "impact", "critique", "rapport" (Ex : Le progrès technique a-t-il un impact sur le bonheur ?).
  * Technique 2 (Créer une polémique) : Insérer les adverbes "toujours", "réellement", "vraiment" (Ex : L'essor de la technique est-il toujours bénéfique à l'homme ?).
  * Technique 3 (Placer l'homme au centre) : Débuter par "L'homme..." (Ex : L'homme a-t-il besoin du progrès technique pour accéder au bonheur ?).
- LES ASPECTS DU SUJET (Les 2 grands axes de réflexion sous forme interrogative) :
  * 1ère Question (Axe 1 - Thèse) : « En quoi / Dans quelle mesure / Dans quel sens + [Sujet de base au conditionnel] ? »
  * 2ème Question (Axe 2 - Antithèse) : « Cependant / Toutefois + [Antithèse questionnée : ne + verbe + t-il/elle pas] ? »
- RÈGLE POUR TROUVER UNE BONNE ANTITHÈSE :
  * Si Axe 1 s'oriente vers la NÉCESSITÉ -> Antithèse avec : obstacle, menace, frein, nuisible, néfaste, inconvénient, limite, insuffisant, dangereux, aliénation.
  * Si Axe 1 s'oriente vers le DANGER -> Antithèse avec : facteur, source, nécessaire, indispensable, bénéfique, utile, condition, émancipation.
  * Si Axe 1 s'oriente vers l'ASPECT UNIQUE -> Antithèse : ouvrir le débat sur d'autres facteurs.
  * Si sujet alternatif -> Axe 1 = première alternative, Axe 2 = seconde alternative.

2. LA RÉDACTION DE L'INTRODUCTION (En un seul bloc, 2 éléments obligatoires) :
- Le Paradoxe (partant d'une citation, d'une opinion courante ou d'une définition menant à une contradiction).
- L'Insertion de la problématisation (problème + questions des aspects 1 et 2).
- LES 3 MODÈLES DE RÉDACTION D'INTRODUCTION PASSE-PARTOUT :
  * Modèle 1 (Par Citation) : « Dans [source/ouvrage], [nom de l'auteur] affirme : « [citation] ». Pour lui, [explication de la citation]. Or force est de constater que [opinion contraire ou critique]. De cette contradiction naît le problème suivant : [formulation du problème] ? Pour y répondre, il faudra examiner : [aspect 1], et comment [aspect 2] ? »
  * Modèle 2 (Par Constat / Opinion partagée) : « D'après l'opinion généralement partagée, [idée reconnue]. Or, force est de reconnaître que [critique ou opinion contraire], ce qui souligne que le sujet ne fait pas consensus. Face à cette divergence, le problème qui se pose est de savoir [formulation du problème] ? La résolution de cette question exige de réfléchir aux aspects suivants : [aspect 1] ? Toutefois, [aspect 2] ? »
  * Modèle 3 (Par Définition) : « Le terme [concept] peut se définir comme [définition principale + rôle]. Cependant, certains estiment que [opinion contraire ou limite]. Face à cette divergence, le problème qui se pose est de savoir [formulation du problème] ? La résolution de cette question exige de réfléchir aux aspects suivants : [aspect 1] ? Cependant, [aspect 2] ? »

3. LE DÉVELOPPEMENT :
- Axe 1 (Thèse) : 3 arguments ordonnés (Idée directrice -> Explication rationnelle -> Référence philosophique / Citation analysée).
- Transition : Phrase bilan de l'Axe 1 + question d'ouverture vers l'Axe 2 (« De ce qui précède, nous retenons que... Toutefois, ne convient-il pas de se demander si... ? »).
- Axe 2 (Antithèse) : 3 arguments d'approfondissement / contradiction étayés d'auteurs.
- Saut de 2 à 3 lignes entre l'introduction, le développement et la conclusion.

4. LA CONCLUSION OFFICIELLE (Bilan + Point de vue personnel + Ouverture) :
- Modèle 1 : « Au terme de notre analyse, il convient de retenir que [Thèse - Axe 1]. Toutefois, force est de reconnaître que [Antithèse - Axe 2]. En ce qui nous concerne, nous dirons que [Point de vue personnel orienté vers le bonheur, la liberté, la vérité ou la connaissance de l'homme]. Mais, [Ouverture sous forme d'un sujet connexe] ? »
- Modèle 2 : « Pour clore notre analyse, nous dirons que [Thèse]. Toutefois, il n'en demeure pas moins que [Antithèse]. Pour notre part, notons que [Point de vue personnel]. Mais, [Ouverture] ? »

---

II. MÉTHODOLOGIE DU COMMENTAIRE DE TEXTE PHILOSOPHIQUE :

1. LA GRILLE DE LECTURE DU TEXTE :
- LE THÈME : De quoi parle le texte ? (Repéré par le champ lexical dominant : le rapport entre A et B, le rôle de A, les limites de A...).
- LE PROBLÈME : À quelle question implicite ou explicite répond le texte ?
- LA THÈSE : Que soutient l'auteur ? (Souvent visible dans les premières ou dernières lignes du texte).
- L'ANTITHÈSE : Quelles sont les limites de la position de l'auteur ?
- L'INTENTION : Quel est le but immédiat de l'auteur ? (Visée argumentative, le "pourquoi" de la thèse).
- L'ENJEU : Quel est le but lointain et universel ? (Le bonheur, la liberté, la vérité, la dignité humaine).
- LA STRUCTURE LOGIQUE : Découpage en 2 ou 3 mouvements (par paragraphes, connecteurs logiques ou enchaînement d'idées).
- LA DÉMARCHE ARGUMENTATIVE : Comment l'auteur s'y prend pour convaincre (thèse d'abord puis arguments, arguments menant à la thèse, raisonnement par analogie, etc.).

2. L'INTRODUCTION DU COMMENTAIRE PHILOSOPHIQUE :
- Formule canonique : « Dans ce texte de [Auteur] extrait de [Source/Ouvrage], l'auteur aborde la problématique de [Thème]. À la question de savoir : [Problème] ?, notre auteur répond que [Thèse]. Dès lors, comment procède-t-il pour défendre cette thèse ? » (Suivi de l'annonce des mouvements).

3. LE DÉVELOPPEMENT EN DEUX PARTIES DISTINCTES :
- PARTIE 1 : L'ÉTUDE ORDONNÉE :
  * Expliquer le texte mouvement par mouvement en dégageant les concepts, les arguments, les figures et les allusions.
  * Interdiction absolue de la paraphrase, du contre-sens et du non-sens.
  * Élaborer des transitions rigoureuses entre les mouvements.
- PARTIE 2 : L'INTÉRÊT PHILOSOPHIQUE :
  * A. Critique interne : Cohérence de l'argumentation, adéquation entre démarche et intention, forces et faiblesses des arguments.
  * B. Critique externe : Justifier la position de l'auteur en s'appuyant sur d'autres philosophes (confirmation), puis dépasser sa position à l'aide d'auteurs contradictoires (nuance / antithèse).

4. LA CONCLUSION DU COMMENTAIRE :
- Bilan du débat engagé dans la critique externe + Prise de position personnelle argumentée sur la portée du texte + Ouverture.`,
    definitions: [
      {
        term: 'Étude parcellaire',
        definition: 'Travail préparatoire au brouillon consistant à définir le lexique contextuel, reformuler le sujet et poser la problématique et ses deux aspects.'
      },
      {
        term: 'Intention de l\'auteur',
        definition: 'Objectif immédiat (visée argumentative) pour lequel le philosophe a rédigé son texte.'
      },
      {
        term: 'Enjeu philosophique',
        definition: 'Finalité lointaine et universelle de la réflexion (bonheur, liberté, vérité, connaissance de soi).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle des 3 parties séparées par sauts de ligne',
        statement: 'La dissertation et le commentaire se composent de 3 blocs nets (Introduction, Développement, Conclusion) séparés par un saut de 2 à 3 lignes, avec alinéa à chaque paragraphe.'
      },
      {
        name: 'Règle du point de vue personnel en conclusion',
        statement: 'Le point de vue personnel de la conclusion doit toujours être ancré dans une valeur universelle (le bonheur, la liberté, la vérité ou la connaissance de l\'homme) et ne jamais comporter de citation d\'auteur.'
      }
    ],
    formulas: [
      {
        name: 'Structure de l\'Aspect 1 et de l\'Aspect 2',
        formula: 'Aspect 1 = « En quoi / Dans quelle mesure + Sujet ? » | Aspect 2 = « Cependant, [Antithèse questionnée : ne... pas] ? »',
        explanation: 'Formule canonique d\'interrogation des deux axes de la dissertation.',
        unitOrCondition: 'Introduction de dissertation'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Formuler la problématique par les 3 techniques',
        procedure: '1. Technique du thème central : joindre "impact", "rapport" ou "critique".\n2. Technique polémique : insérer "toujours", "réellement" ou "vraiment".\n3. Technique anthropologique : commencer par "L\'homme a-t-il besoin de...".',
        tip: 'Choisir la formulation la plus percutante.'
      },
      {
        stepNumber: 2,
        title: 'Mener la critique interne et externe en commentaire',
        procedure: 'Critique interne : évaluer la solidité logique du texte et l\'adéquation démarche/intention. Critique externe : convoquer d\'autres philosophes pour appuyer la thèse, puis d\'autres pour la limiter.',
        tip: 'Ne jamais résumer le texte en guise d\'intérêt philosophique.'
      }
    ],
    examples: [
      {
        statement: 'Sujet : « Faut-il envisager l\'extinction de la philosophie dans l\'ordonnancement du savoir et de l\'existence ? » Rédige l\'introduction par constat.',
        solution: 'Selon l’opinion courante, la philosophie apparaît comme une discipline abstraite qui ne s’intéresse pas directement aux réalités pratiques. Or, il est également reconnu qu’elle joue un rôle dans la réflexion et dans la structuration du savoir. Face à cette divergence, le problème se pose : peut-on se passer de la philosophie ? Pour répondre à ce problème d’autres questions s’ajoutent : dans quelle mesure la philosophie pourrait-elle s’effacer de l’ordonnancement du savoir et de la vie humaine ? Toutefois, n’est-elle pas indispensable dans la vie de l’homme ?'
      }
    ],
    exercises: [
      {
        question: 'Quelle est la formule officielle pour annoncer les mouvements d\'un texte philosophique dans l\'introduction du commentaire ?',
        correction: '« Pour mieux appréhender ce texte, nous le scinderons en deux mouvements : dans le premier, qui va de la ligne X à la ligne Y (« ... »), l\'auteur montre [mouvement 1]. Dans le second, qui va de la ligne Y à la ligne Z (« ... »), il met en relief [mouvement 2]. »'
      }
    ],
    evaluationSituation: {
      context: 'Au Baccalauréat, un sujet de dissertation philosophique demande : « L\'homme n\'est-il libre que dans la solitude ? »',
      instructions: [
        '1. Définis les termes clés et reformule le sujet.',
        '2. Rédige les aspects 1 et 2.',
        '3. Rédige l\'introduction complète par paradoxe.'
      ],
      solutionGuide: '1. Lexique : Homme (sujet pensant et moral), Libre (absence de contrainte, autonomie), Solitude (état d\'isolement sans autrui). Reformulation : L\'être humain ne peut-il jouir d\'une liberté authentique qu\'en vivant à l\'écart de toute société ?\n2. Aspect 1 : Dans quelle mesure la présence d\'autrui et les contraintes sociales constituent-elles une entrave à la liberté individuelle ? Aspect 2 : Toutefois, la solitude absolue ne prive-t-elle pas l\'homme des conditions mêmes de son humanisation et de son épanouissement ?\n3. Introduction rédigée : « D’après l’opinion courante, la liberté s\'éprouve dans l\'indépendance totale, loin du regard inquisiteur et des lois restrictives de la collectivité. Or, force est de reconnaître que hors de toute vie sociale, l\'homme demeure une créature vulnérable et démunie, incapable de développer sa raison. Face à cette contradiction, le problème qui se pose est de savoir si la liberté humaine s\'accomplit dans le rejet d\'autrui ou au sein de la cité. Pour y répondre, nous examinerons d\'abord en quoi la société peut constituer un frein à la liberté individuelle, avant de montrer en quoi la présence d\'autrui est la condition indispensable de la liberté véritable. »'
    },
    examTraps: [
      'Faire une introduction en plusieurs paragraphes (l\'introduction doit être un bloc unique).',
      'Donner des citations d\'auteurs dans la conclusion.',
      'Faire de la paraphrase linéaire au lieu d\'une étude ordonnée et d\'un intérêt philosophique distinct.'
    ],
    quickMemo: 'Dissertation : Étude parcellaire -> Intro bloc unique (Paradoxe+Problème+Aspects) -> Dév 2 axes (3 arguments + auteurs) -> Conclusion (Bilan+Point de vue personnel+Ouverture). Commentaire : Grille -> Intro -> Étude ordonnée -> Intérêt (Critique interne + Critique externe) -> Conclusion.',
    keywords: ['philosophie', 'Terminale', 'Bac', 'méthodologie', 'dissertation philosophique', 'commentaire de texte', 'paradoxe', 'critique interne', 'critique externe', 'Hume', 'Descartes', 'Kant', 'Sartre']
  },

  // ==========================================
  // 2. TERMINALE - TOUTES NOTIONS DE PHILOSOPHIE & CITATIONS
  // ==========================================
  {
    id: 'philo-tle-notions-theses-citations-repertoire',
    discipline: 'philo',
    disciplineLabel: 'Philosophie (Répertoire Exhaustif des Notions & Citations Bac)',
    level: 'terminale',
    levelLabel: 'Terminale (Toutes Séries)',
    serie: 'tle_a',
    serieLabel: 'Terminale Toutes Séries',
    chapter: 'Le Répertoire Intégral des Notions du Programme avec Thèses, Antithèses, Auteurs & Citations',
    lessonTitle: 'Conscience, Inconscient, Mémoire/Oubli, Liberté, Violence, Société, Autrui, État & Loi, Religion & Foi/Raison, Humanité, Histoire, Colonisation, Mythe/Raison, Technique, Travail, Art, Désir, Langage, Vérité',
    objectifs: [
      'Maîtriser les thèses, antithèses et citations argumentées de toutes les notions du programme',
      'Mobiliser avec exactitude les auteurs au programme (Descartes, Rousseau, Kant, Hegel, Marx, Freud, Bergson, Spinoza, Sartre, Nietzsche, Bachelard, Popper, Césaire, Dadié)',
      'Construire instantanément des plans dialectiques rigoureux sur n\'importe quel sujet de Bac'
    ],
    fullCourseContent: `RÉPERTOIRE DES NOTIONS, THÈSES, ANTITHÈSES ET CITATIONS OFFICIELLES :

1. LA CONSCIENCE & L'INCONSCIENT :
- La Conscience définit l'homme : Descartes (Discours de la méthode : « Je pense, donc je suis » - le Cogito fonde la certitude) ; Rousseau (Émile : « Conscience ! Conscience ! Juge infaillible du bien et du mal ») ; Bergson (L'Énergie spirituelle : « Toute conscience signifie choix » et mémoire).
- Limites / L'Inconscient existe : Freud (Introduction à la psychanalyse : « Le Moi n'est pas maître dans sa propre maison » ; L'Interprétation des rêves : « Le rêve est la voie royale vers l'inconscient ») ; Leibniz (Nouveaux essais : « Une infinité de petites perceptions ») ; Sartre (L'Être et le Néant : l'inconscient comme mauvaise foi).
- Responsabilité : Sartre (« L'homme est condamné à être libre ») vs Freud (« L'homme n'est pas entièrement libre de ses instincts ») vs Spinoza (« La liberté, c'est la connaissance de la nécessité »).

2. MÉMOIRE ET OUBLI :
- L'Oubli est nécessaire : Nietzsche (Seconde Considération inactuelle : « Sans l'oubli, l'homme ne peut savourer l'instant présent ») ; Freud (mécanisme de défense psychique) ; Ricœur (La mémoire, l'histoire, l'oubli : l'oubli condition du pardon et de la réconciliation).
- La Mémoire est indispensable : Bergson (« La mémoire est l'âme même de l'esprit ») ; Santayana (« Ceux qui ne peuvent se souvenir du passé sont condamnés à le répéter ») ; Malraux (« Ce qui disparaît de la mémoire disparaît de l'histoire »).

3. LA LIBERTÉ :
- Liberté comme réalité : Descartes (« La liberté de notre volonté se connaît sans preuves ») ; Rousseau (« L'obéissance à la loi qu'on s'est prescrite est liberté ») ; Sartre (« L'homme est liberté »).
- Liberté comme illusion : Spinoza (Éthique : « Les hommes se croient libres parce qu'ils sont conscients de leurs actions et ignorants des causes qui les déterminent ») ; Bakounine (« L'État est un vaste cimetière de la liberté ») ; Marx (aliénation économique).

4. LA VIOLENCE & L'ÉTAT :
- Violence naturelle / constitutive : Hobbes (Léviathan : « L'homme est un loup pour l'homme » à l'état de nature) ; Lorenz (De l'agression : instinct de survie) ; Freud (pulsion d'agressivité).
- Violence culturelle / néfaste : Rousseau (« L'homme naît bon, c'est la société qui le corrompt ») ; Françoise Héritier (violence transmise par l'éducation) ; Eric Weil (« La violence est une instauration de la barbarie ») ; Gandhi (« La violence est la loi de la brute »).
- Rôle de l'État : Hobbes & Spinoza (sécurité et fin du chaos) vs Nietzsche (« L'État est le plus froid des monstres froids ») vs Marx (instrument d'oppression de classe).

5. LA SOCIÉTÉ & AUTRUI :
- Société naturelle et vitale : Aristote (Politique : « L'homme est par nature un animal politique ») ; Rousseau (Contrat social : protection mutuelle).
- Société aliénante : Durkheim (contrainte sociale) ; Sartre (« L'enfer, c'est les autres » / « Autrui est le médiateur indispensable entre moi et moi-même ») ; Saint-Exupéry (« Si tu diffères de moi, loin de me léser, tu m'enrichis »).

6. DROIT ET JUSTICE :
- Droit organisateur : Montesquieu (« Il n'y a point de liberté si les juges ne sont pas séparés du législateur ») ; Aristote (« La justice consiste à donner à chacun ce qui lui est dû »).
- Limites du droit : Marx (« Votre droit n'est que la volonté de votre classe érigée en loi ») ; Voltaire (« Il vaut mieux hasarder de sauver un coupable que de condamner un innocent »).

7. LA RELIGION & FOI / RAISON :
- Foi et Raison complémentaires : Jean-Paul II (Fides et Ratio : « La foi et la raison sont comme deux ailes sur lesquelles l'esprit humain s'élève vers la vérité ») ; Thomas d'Aquin (harmonie des deux lumières).
- Foi et Raison opposées : Tertullien (« Je crois parce que c'est absurde ») ; Kant (« La raison pure ne peut prouver l'existence de Dieu ; la foi seule peut y croire ») ; Marx (« La religion est l'opium du peuple ») ; Freud (« L'avenir d'une illusion »).

8. PROGRÈS TECHNIQUE ET SCIENTIFIQUE :
- Technique libératrice : Descartes (« Maîtres et possesseurs de la nature ») ; Claude Bernard (« La science nous rend capables de prévoir et d'agir sur la nature »).
- Technique asservissante / dangereuse : Rabelais (« Science sans conscience n'est que ruine de l'âme ») ; Einstein (« Toute notre évolution technique est comme une hache dans les mains d'un criminel ») ; Ellul (monde artificiel incontrôlé) ; Rousseau (« Nos âmes se sont corrompues à mesure que nos sciences et nos arts se sont avancés »).

9. LE TRAVAIL & L'ART :
- Travail libérateur : Hegel & Kojève (l'homme s'humanise et transforme la nature) ; Voltaire (« Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin ») ; Bernard Dadié (Climbié : « Le travail, après le travail l'indépendance »).
- Travail aliénant : Marx (Manuscrits de 1844 : travail aliéné où l'ouvrier se nie).
- L'Art nécessaire : Camus (« L'art est une révolte contre le monde ») ; Picasso (« L'art lave notre âme de la poussière du quotidien ») ; Nietzsche (« Nous avons l'art pour ne pas mourir de la vérité ») ; Malraux (« L'art est un anti-destin »).
- L'Art inutile : Oscar Wilde (« Tout art est absolument inutile ») ; Platon (copie de copie au 3ème degré).

10. LE LANGAGE & LA VÉRITÉ :
- Langage exprime la pensée : Boileau (« Ce que l'on conçoit bien s'énonce clairement ») ; Hegel (« C'est dans les mots que nous pensons »).
- Langage trahit la pensée : Bergson (« La pensée demeure incommensurable avec le langage ») ; Wittgenstein (« Les limites de mon langage signifient les limites de mon propre monde »).
- Vérité : Kant (adéquation pensée-objet) ; Bachelard (« Toute nouvelle vérité naît malgré l'évidence ») ; Popper (falsifiabilité) ; Nietzsche (vérité comme métaphores consolidées).`,
    definitions: [
      {
        term: 'Aliénation',
        definition: 'État d\'un individu qui est dépossédé de sa liberté, de son être ou du fruit de son travail, devenant étranger à lui-même sous l\'effet d\'une force extérieure.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de pertinence doctrinale',
        statement: 'Toujours expliciter le lien conceptuel entre la citation de l\'auteur et l\'argument défendu.'
      }
    ],
    formulas: [],
    stepByStepMethods: [],
    examples: [],
    exercises: [],
    evaluationSituation: {
      context: 'Sujet Bac : « Le travail libère-t-il l\'homme ? »',
      instructions: ['Établis la thèse (travail émancipateur) et l\'antithèse (travail aliénant) avec citations.'],
      solutionGuide: 'Thèse : Hegel (humanisation et maîtrise de la nature), Dadié (indépendance par le labeur), Voltaire (remède à l\'ennui et au besoin). Antithèse : Marx (aliénation ouvrière dans le système capitaliste), Simone de Beauvoir (fatigue écrasante privant de loisirs), Genèse 3:19 (travail comme châtiment).'
    },
    examTraps: ['Confondre vérité formelle (mathématique) et vérité matérielle (expérimentale).'],
    quickMemo: 'Toutes les notions s\'articulent autour de couples dialectiques : Liberté/Contrainte, Raison/Sensibilité, Nature/Culture.',
    keywords: ['philosophie', 'Terminale', 'citations', 'auteurs', 'Descartes', 'Marx', 'Freud', 'Rousseau', 'Kant', 'Hegel']
  },

  // ==========================================
  // 3. TERMINALE - FRANÇAIS (DISSERTATION, COMMENTAIRE, RÉSUMÉ, COURANTS, FIGURES)
  // ==========================================
  {
    id: 'francais-tle-methodologie-complete-guide-officiel',
    discipline: 'francais',
    disciplineLabel: 'Français (Terminale - Bac Toutes Séries : A1, A2, C, D, E)',
    level: 'terminale',
    levelLabel: 'Terminale (Bac)',
    serie: 'tle_a',
    serieLabel: 'Terminale Toutes Séries',
    chapter: 'Méthodologie Intégrale : Dissertation Littéraire, Commentaire Composé, Résumé + Production Écrite, Figures de Style & Courants',
    lessonTitle: 'Méthode complète de la dissertation (les 9 vocations d\'œuvre, introductions types, conclusion), Commentaire composé (Idée -> Outil -> Exemple -> Transition, barème 6+6+6+2), Résumé (11 règles) & Guide des 40 sujets',
    objectifs: [
      'Appliquer la méthode officielle de la dissertation littéraire (Analyser le sujet, repérer la vocation parmi les 9 vocations de l\'œuvre, rédiger l\'introduction en 3 étapes avec formule passe-partout, développer en 2 axes et conclure sans citation)',
      'Maîtriser le commentaire composé au Bac : Introduction en 3 parties, Développement en 2 centres d\'intérêt suivant strictement la formule Idée → Outil d\'analyse → Exemple/Citation → Transition, Conclusion avec au moins 2 intérêts (Littéraire, Didactique, Philosophique, Social, Humanitaire, Historique, Stylistique)',
      'Connaître le barème officiel du commentaire : Organisation des idées (6 pts), Compréhension (6 pts), Langue et expression (6 pts), Présentation (2 pts) avec saut de deux lignes et alinéas',
      'Appliquer les 11 règles d\'or du résumé de texte (réduction au 1/3, fidélité à l\'énonciation sans "selon l\'auteur") et la méthodologie de la production écrite',
      'Maîtriser les figures de style (Analogie, Substitution, Atténuation, Amplification, Opposition, Construction), les tonalités littéraires et les connecteurs logiques'
    ],
    fullCourseContent: `I. DISSERTATION LITTÉRAIRE AU BACCALAURÉAT :

1. TRAVAIL PRÉLIMINAIRE :
- Analyser le sujet : Mots-clés, thème, consigne (expliquer, discuter).
- Repérer la VOCATION (les fonctions de l'œuvre) :
  * Lyrique : reflète le vécu et les sentiments intimes de l'auteur.
  * Émotive : suscite des sentiments et émotions chez le lecteur.
  * Morale et éducative : destinée à éduquer et moraliser le lecteur.
  * Didactique : dispense des connaissances et des savoirs.
  * Ludique : destinée à divertir et faire rire.
  * Satirique : dénonce les tares, vices et injustices de la société.
  * Esthétique : exprime la recherche du beau et le culte de la forme.
  * Fictive et évasive : plonge le lecteur dans l'imagination, l'irréel et le rêve.
  * Réaliste : reflet fidèle et authentique de la réalité sociale.

2. RÉDACTION DE L'INTRODUCTION (3 parties essentielles en un seul paragraphe) :
- Amener le sujet (définition du thème ou contexte littéraire/historique).
- Poser le problème (reprendre et reformuler le sujet).
- Annoncer le plan (Axe 1, puis Axe 2).
- EXEMPLES D'INTRODUCTION PASSE-PARTOUT DU GUIDE OFFICIEL :
  * Exemple 1 : « Depuis toujours, la littérature accompagne l'homme dans sa vie et dans ses difficultés. À ce sujet, [nom de l'auteur ou du critique] affirme que [sujet ou thèse]. Autrement dit, [reformulation]. Cette affirmation pose alors le problème de [problématique]. Pour y répondre, nous montrerons d'abord [axe 1], puis [axe 2]. »
  * Exemple 2 : « La littérature a toujours joué un rôle important dans la vie de l'homme. Selon [nom de l'auteur], [sujet ou thèse]. En d'autres termes, [reformulation]. Cette idée amène à se demander [problématique]. Pour répondre à cette question, nous verrons d'abord [axe 1], ensuite [axe 2]. »

3. DÉVELOPPEMENT :
- Organisé en 2 grands axes (Plan dialectique : Thèse / Antithèse).
- Chaque paragraphe respecte : Idée principale -> Idée secondaire / explication -> Illustration concrète (auteur, œuvre, intrigue ou citation).
- Transition nette entre Axe 1 et Axe 2.

4. CONCLUSION (Bilan + Portée générale) :
- Rappel de l'essentiel sans répéter mot à mot.
- INTERDICTION FORMELLE DE DONNER DES CITATIONS DANS LA CONCLUSION.
- Formule officielle : « En conclusion, nous retenons que [Axe 1]. Cependant, il ne faut pas négliger que [Axe 2]. Quant à nous, rappelons que [la littérature / le roman / la poésie / le théâtre] reste un art vivant et nécessaire, quel que soit le contexte. »

---

II. COMMENTAIRE COMPOSÉ AU BACCALAURÉAT :

1. INTRODUCTION (3 éléments essentiels) :
- Contexte du texte : Situer l'extrait dans l'œuvre et la production de l'auteur (titre, auteur, date, éditeur, cadre).
- Idée générale : Présenter le thème central du texte.
- Annonce du plan : Présenter les deux centres d'intérêt qui guideront le développement.

2. DÉVELOPPEMENT EN 2 CENTRES D'INTÉRÊT :
- Chaque centre d'intérêt se décompose en idées secondaires.
- FORMULE OBLIGATOIRE DU PARAGRAPHE DE COMMENTAIRE :
  **Idée secondaire → Outils d'analyse formels (procédés de langue, figures, temps verbaux, syntaxe) → Exemples cités entre guillemets → Effet de sens → Transition vers l'idée suivante.**

3. CONCLUSION (3 parties) :
- Bilan : Rappeler les principaux points analysés.
- Intérêts du texte : Citer et justifier au moins DEUX (2) intérêts parmi : Littéraire, Didactique, Philosophique, Social, Humanitaire, Historique, Stylistique.
- Ouverture : Facultative.

4. PRÉSENTATION ET BARÈME OFFICIEL DU BACCALAURÉAT :
- Organisation des idées (OI) : 6 points
- Compréhension du sujet (CS) : 6 points
- Langue et expression (LE) : 6 points
- Présentation (P) : 2 points
- Règle de présentation : Sauter deux lignes entre l'introduction et le développement, et entre le développement et la conclusion. Alinéa au début de chaque paragraphe.

---

III. RÉSUMÉ DE TEXTE & PRODUCTION ÉCRITE :

1. LES 11 RÈGLES D'OR DU RÉSUMÉ :
- CE QU'IL FAUT FAIRE : 1. Suivre l'ordre des idées ; 2. Réduire au 1/3 comme si on était l'auteur ; 3. Respecter la structure ; 4. Prendre pour soi les affirmations ; 5. Conserver les mots-clés ; 6. Trouver des synonymes ; 7. Recenser les idées essentielles ; 8. Synthétiser en une phrase ; 9. Reformuler avec clarté ; 10. Assurer la cohérence par connecteurs ; 11. Respecter le quota de mots (±10%).
- CE QU'IL NE FAUT PAS FAIRE : 1. Pas de "selon l'auteur" ; 2. Pas de paraphrase mot à mot ; 3. Pas de jugement personnel ; 4. Pas d'exemples secondaires recopiés.

2. PRODUCTION ÉCRITE :
- Thèmes récurrents : Éducation, Jeunesse ivoirienne, Pauvreté, Réseaux sociaux, Immigration, Paix et Réconciliation, TIC, Pollution/Environnement, MST/Santé, Drogue.
- Structure : Introduction (Thème + Sujet + Reformulation + Question) -> Développement argumenté en 2 ou 3 parties avec exemples -> Conclusion avec bilan et référence à une œuvre littéraire.

---

IV. COURANTS LITTÉRAIRES, GENRES & FIGURES DE STYLE :
- Courants : Classicisme (bienséance, vraisemblance, 3 unités, Boileau), Lumières (Raison, esprit critique, Voltaire, Diderot), Romantisme (moi, lyrisme, nature, Lamartine, Hugo), Réalisme (souci du vrai, refus imagination, Flaubert, Maupassant), Naturalisme (déterminisme social, méthode expérimentale, Zola), Parnasse (art pour l'art, Théophile Gautier), Symbolisme (suggestion, Baudelaire, Mallarmé, Verlaine), Surréalisme (écriture automatique, Breton, Éluard), Négritude (Césaire, Senghor, Damas).
- Figures de style :
  * Analogie : Comparaison, métaphore, métaphore filée, personnification, allégorie.
  * Substitution : Métonymie (contenant/contenu, auteur/œuvre, matière/objet), synecdoque, périphrase, antonomase, onomatopée.
  * Atténuation : Euphémisme, litote, prétérition.
  * Amplification : Hyperbole, accumulation, anaphore, gradation, répétition, paronomase.
  * Opposition : Oxymore, antithèse, antiphrase, chiasme (A-B/B'-A'), paradoxe, attelage.
  * Construction : Parallélisme, ellipse, anacoluthe, asyndète, interrogation oratoire.`,
    definitions: [
      {
        term: 'Métonymie',
        definition: 'Figure de substitution remplaçant un mot par un autre logiquement associé (le contenant pour le contenu, l\'auteur pour l\'œuvre, la matière pour l\'objet).'
      },
      {
        term: 'Oxymore',
        definition: 'Rapprochement de deux mots de sens contradictoire au sein d\'un même groupe syntaxique (ex : « ce silence bruyant »).'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle formelle du commentaire composé',
        statement: 'Chaque paragraphe de développement doit obligatoirement suivre l\'enchaînement : Idée → Outil d\'analyse linguistique/stylistique → Exemple textuel → Interprétation.'
      }
    ],
    formulas: [
      {
        name: 'Barème officiel Baccalauréat Français',
        formula: 'OI (6 pts) + CS (6 pts) + LE (6 pts) + Présentation (2 pts) = 20/20',
        explanation: 'Barème officiel DPFC / DECO pour le commentaire composé et la dissertation.',
        unitOrCondition: 'Épreuve écrite de français'
      }
    ],
    stepByStepMethods: [],
    examples: [],
    exercises: [],
    evaluationSituation: {
      context: 'Sujet Bac : « Au théâtre, point n\'est besoin de réfléchir, de penser. Tout est dans l\'hilarité. » Expliquez et discutez.',
      instructions: ['Présente l\'analyse (Mots-clés, Thème, Thèse, Antithèse) et l\'introduction rédigée.'],
      solutionGuide: 'Thèse : Le théâtre est au service du divertissement et du rire (Kacou : On se chamaille pour un siège ; Molière : Le Malade imaginaire). Antithèse : Le théâtre reflète la réalité et éveille les consciences (Césaire : Une Saison au Congo ; Dadié : Monsieur Tôgôgnini ; Oyono M\'bia : Trois Prétendants... un mari). Conclusion : Double mission du théâtre, divertir et faire réfléchir.'
    },
    examTraps: ['Mettre des citations dans la conclusion d\'une dissertation littéraire.'],
    quickMemo: 'Dissertation : 9 vocations, intro en 3 étapes, plan en 2 axes, conclusion sans citation. Commentaire : Idée -> Outil -> Exemple -> Transition, 2 intérêts minimum en conclusion.',
    keywords: ['Français', 'Terminale', 'Bac', 'dissertation littéraire', 'commentaire composé', 'résumé de texte', 'figures de style', 'Césaire', 'Kourouma', 'Dadié', 'Senghor']
  },

  // ==========================================
  // 4. TERMINALE - HISTOIRE-GÉOGRAPHIE (DISSERTATION, NODDACI & TABLEAUX D'ANALYSE)
  // ==========================================
  {
    id: 'hg-tle-methodologie-dissertation-commentaire-tableaux-axes',
    discipline: 'histoire',
    disciplineLabel: 'Histoire-Géographie (Terminale Toutes Séries : A, C, D, E)',
    level: 'terminale',
    levelLabel: 'Terminale (Toutes Séries)',
    serie: 'tle_a',
    serieLabel: 'Terminale Toutes Séries',
    chapter: 'Méthodologie Intégrale de la Dissertation, du Commentaire de Documents (NODDACI) & Tableaux d\'Analyse des Sujets',
    lessonTitle: 'Méthodologie Intégrale de la Dissertation et du Commentaire de Documents (Plans Types et Méthode NODDACI)',
    objectifs: [
      'Maîtriser la méthodologie de la dissertation en Histoire-Géographie (Introduction en 3 parties, Développement en 2 ou 3 parties avec idées principales, faits chiffrés et transitions, Conclusion avec bilan et ouverture)',
      'Identifier et appliquer les 5 types de plans en dissertation HG : Chronologique (Plan évolutif), Biographique (Origine/Actions/Disparition), Dialectique (Thèse/Antithèse), Sujet tableau (Plan inventaire), Sujet de comparaison (Plan comparatif : Ressemblances / Différences)',
      'Maîtriser la méthode NODDACI pour la présentation du commentaire de document : Nature, Origine, Date, Destinataire, Auteur, Contexte historique, Idée générale',
      'Traiter les questions de compréhension et d\'exploitation (Expliquez, Commentez, Analysez, Discutez, Justifiez, Portée) sans paraphrase',
      'Mobiliser les tableaux d\'analyse par axes et arguments pour l\'économie ivoirienne, la Corée du Sud, la CEDEAO, l\'UE-ACP, l\'ONU, la Guerre Froide, la décolonisation africaine et l\'indépendance de la Côte d\'Ivoire'
    ],
    fullCourseContent: `I. MÉTHODOLOGIE OFFICIELLE DE LA DISSERTATION EN HISTOIRE-GÉOGRAPHIE :

1. STRUCTURE EN 3 PARTIES INDISPENSABLES :
- L'INTRODUCTION :
  * La Généralité : Situer le sujet, définir les mots-clés, rappeler les dates repères et le contexte spatio-temporel.
  * La Problématique : Question centrale soulevée par le sujet qui guide l'analyse.
  * L'Annonce du plan : Présenter clairement les 2 ou 3 parties du développement.
- LE DÉVELOPPEMENT :
  * 2 ou 3 grandes parties ordonnées.
  * Chaque partie commence par une idée principale clairement formulée.
  * Développer avec des explications, des dates, des chiffres précis, des faits historiques ou géographiques concrets.
  * Terminer chaque partie par une phrase de transition (affirmative ou interrogative).
- LA CONCLUSION :
  * Le Bilan : Répondre nettement et directement à la problématique.
  * L'Ouverture : Proposer une nouvelle piste de réflexion dépassant le sujet.

2. LES 5 TYPES DE SUJETS ET PLANS ADAPTÉS EN HISTOIRE-GÉOGRAPHIE :
- Le sujet chronologique (2 bornes temporelles, ex: « La décolonisation de la Côte d'Ivoire de 1944 à 1960 ») -> **Plan Évolutif** (différentes étapes chronologiques cohérentes).
- Le sujet biographique (sur une personnalité, ex: « F.H.B de 1905 à 1993 ») -> **Plan Biographique en 3 parties** : 1. Son origine ; 2. Ses actions et réalisations ; 3. Sa fin ou sa disparition.
- Le sujet dialectique / discussion (oppose deux points de vue) -> **Plan Dialectique** : 1. Thèse (soutenir l'idée) ; 2. Antithèse (rejeter ou nuancer).
- Le sujet tableau (vue d'ensemble générale) -> **Plan Inventaire** (analyser tous les aspects et les regrouper par ressemblance).
- Le sujet de comparaison (compare deux réalités, ex: « L'agriculture ivoirienne et l'agriculture française ») -> **Plan Comparatif** : 1. Les ressemblances ; 2. Les différences.

3. RÈGLES DE RÉDACTION FORMELLE :
- Sauter deux lignes entre l'introduction et le développement, et entre le développement et la conclusion.
- Commencer chaque grande partie par un alinéa.
- Style impersonnel : PROSCRIRE l'usage du « je » et les abréviations.

---

II. MÉTHODOLOGIE DU COMMENTAIRE DE DOCUMENTS EN HISTOIRE-GÉOGRAPHIE :

1. QUESTIONS DE PRÉSENTATION DU DOCUMENT (MÉTHODE NODDACI) :
- **N** - Nature : Texte juridique, discours, article de presse, tableau statistique, courbe d'évolution, carte, photographie.
- **O** - Origine / Source : Titre de l'ouvrage, maison d'édition, page, lieu.
- **D** - Date : Année ou jour précis de publication ou réalisation.
- **D** - Destinataire : Personne, peuple ou institution à qui s'adresse le document.
- **A** - Auteur : Nom, prénom et fonction / rôle historique ou scientifique.
- **C** - Contexte historique : Circonstances historiques ou géographiques précises ayant précédé les faits.
- **I** - Idée générale : Thème central et message principal du document.

2. QUESTIONS DE COMPRÉHENSION :
- Relever et dégager directement les informations dans le document (« selon le document », « relevez »).

3. QUESTIONS D'EXPLOITATION :
- « Expliquez » : Éclairer un passage en précisant les dates, lieux, causes et mécanismes.
- « Commentez » : Expliquer et ajouter des remarques personnelles critiques (valider ou montrer les limites).
- « Analysez » : Dégager les composantes, évolutions et conséquences (courant en géographie).
- « Discutez / Appréciez / Êtes-vous d'accord ? » : Montrer ce qui est vrai mais aussi ce qui est insuffisant ou contestable.
- « Justifiez / Montrez » : Argumenter exclusivement dans le sens de l'auteur avec des preuves.
- « La Portée » : Montrer les conséquences historiques futures dont les germes apparaissent dans le document.
- Erreurs à éviter : Pas d'abréviations, pas de tirets désordonnés, numéroter chaque réponse, éviter la paraphrase et le style personnel ("je", "tu").

---

III. SYNTHÈSE DES TABLEAUX D'ANALYSE DE SUJETS DU BACCALAURÉAT :

1. ÉCONOMIE IVOIRIENNE :
- Fondements naturels : Relief tabulaire favorable, diversité climatique (subéquatorial au Sud, tropical humide au Centre, sec au Nord), sols fertiles (ferralitiques au Sud, ferrugineux au Nord), sous-sol (or, diamant, pétrole/gaz), réseau hydrographique dense (Comoé, Bandama, Sassandra, Cavally).
- Fondements humains & politiques : 77,7% < 35 ans (main-d'œuvre abondante), apport de l'immigration, libéralisme économique, rôle de l'État-planificateur (sociétés d'État, PND), Code des investissements et guichet unique CEPICI.
- Agriculture : 33% du PIB, 70% des recettes d'exportation, 1er producteur mondial de cacao ; cultures vivrières vs commerciales.
- Industrie : Agroalimentaire, textile, bois, raffinage SIR, BTP (18-20% du PIB).
- Tertiaire : Commerce intérieur et extérieur, secteur informel (>60% des emplois), transports (SITARAIL, ports d'Abidjan et San Pedro), tourisme.
- Problèmes : Dépendance au binôme café-cacao, chute des cours, déforestation, analphabétisme, dette, corruption. Solutions : Transformation locale, diversification industrielle, civisme fiscal, reboisement.

2. GÉOGRAPHIE INTERNATIONALE :
- Corée du Sud : 70% de montagnes, pauvreté en matières premières, révolution éducative (alphabétisation 22% en 1945 à 88% en 1970), État-développeur et Chaebols (Samsung, POSCO, Hyundai), 3 phases (Substitution aux importations 1953-1961, Exportations légères 1961-1973, Industries lourdes et TIC 1973-1980+).
- CEDEAO (28 mai 1975 Lagos, 15 pays) : Objectifs d'intégration, organes (Conférence des chefs d'État, Conseil des ministres, Commission dirigée par Omar Touray, ECOMOG, Ecobank, passeport CEDEAO). Limites : Échanges intra-communautaires < 10%, diversité des monnaies, terrorisme.
- Relations UE-ACP : Accords de Yaoundé (I et II), Lomé (I à IV avec STABEX et SYSMIN), Cotonou 2000. Succès : Débouchés stables, aides financières. Limites : Détérioration des termes de l'échange, endettement.

3. HISTOIRE MONDIALE & NATIONALE :
- ONU (26 juin 1945 San Francisco, 24 oct 1945) : AG, CS (5 permanents avec veto + 10 élus), Secrétariat (Guterres), CIJ La Haye, ECOSOC, institutions spécialisées (FMI, BM, OMS, UNESCO). Succès : Médiations, décolonisation, casques bleus. Échecs : Veto paralysant, génocide rwandais 1994, guerres unilatérales (Irak).
- Guerre Froide (1947-1991) : Bipolarisation 1947 (Truman/Marshall vs Jdanov/Kominform), Alliances (OTAN 1949 vs Pacte de Varsovie 1955), Crises de Berlin (1948-1949 pont aérien ; 1961 mur), Cuba 1962, Coexistence pacifique et Détente (Téléphone rouge 1963, SALT I 1972, Helsinki 1975), Guerre du Vietnam (1964-1975, défaite US), Gorbatchev 1985 (Glasnost, Perestroïka, START I), chute du Mur 1989, fin de l'URSS 25 décembre 1991.
- Indépendance de la Côte d'Ivoire : Période de l'espoir (1944-1947 : SAA 1944, Député Houphouët-Boigny, loi travail forcé 1946, PDCI-RDA 1946), Lutte et répression (1947-1950 : alliance PCF, répression Péchoux, fusillade Dimbokro 1950, Marche des femmes de Grand-Bassam 24 déc 1949), Collaboration et indépendance (1950-1960 : désapparentement 1950, Loi-cadre Defferre 1956, Communauté 1958 "OUI", Indépendance 7 août 1960).`,
    definitions: [
      {
        term: 'NODDACI',
        definition: 'Méthode mnémotechnique officielle de présentation d\'un document en Histoire-Géographie : Nature, Origine, Date, Destinataire, Auteur, Contexte historique, Idée générale.'
      },
      {
        term: 'Plan évolutif',
        definition: 'Plan de dissertation en Histoire adopté lorsque le sujet comporte deux bornes chronologiques précises, découpant l\'analyse en étapes temporelles successives.'
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle de neutralité stylistique en HG',
        statement: 'Ne jamais utiliser la première personne ("je", "nous", "mon avis") ni d\'abréviations dans une dissertation d\'Histoire ou de Géographie.'
      }
    ],
    formulas: [
      {
        name: 'Structure du paragraphe en dissertation HG',
        formula: 'Idée principale + Explication du phénomène + Faits précis (dates, chiffres, localisations) + Transition',
        explanation: 'Garantit un développement dense et rigoureux.',
        unitOrCondition: 'Paragraphe de dissertation HG'
      }
    ],
    stepByStepMethods: [],
    examples: [],
    exercises: [],
    evaluationSituation: {
      context: 'Sujet Bac : « La décolonisation de la Côte d\'Ivoire de 1944 à 1960 »',
      instructions: ['Indique le type de plan adapté et découpe le sujet en 3 étapes chronologiques cohérentes.'],
      solutionGuide: 'Type de plan : Plan évolutif (chronologique).\nPartie 1 (1944-1947) : L\'éveil politique et syndical (Brazzaville, création du SAA, lois Houphouët-Boigny et création du PDCI-RDA).\nPartie 2 (1947-1950) : La période des tensions et de la répression coloniale (alliance avec le PCF, fusillade de Dimbokro, marche des femmes de Grand-Bassam).\nPartie 3 (1950-1960) : La collaboration et la marche pacifique vers la souveraineté (désapparentement du PCF, loi-cadre Defferre 1956, Communauté française de 1958 et proclamation de l\'indépendance le 7 août 1960).'
    },
    examTraps: ['Confondre plan inventaire (sujet tableau) et plan dialectique (sujet de discussion).'],
    quickMemo: 'Dissertation HG : 5 types de plans (Évolutif, Biographique, Dialectique, Inventaire, Comparatif). Commentaire : NODDACI, pas de "je", pas de paraphrase.',
    keywords: ['Histoire', 'Géographie', 'Terminale', 'Bac', 'NODDACI', 'dissertation HG', 'méthodologie', 'plan évolutif', 'plan dialectique', 'commentaire composé']
  },
  {
    id: 'hg-tle-h1-onu',
    discipline: 'histoire',
    disciplineLabel: 'Histoire (Terminale Toutes Séries)',
    level: 'terminale',
    levelLabel: 'Terminale (Bac)',
    serie: 'tle_a',
    serieLabel: 'Terminale A, C, D, E',
    chapter: 'Le Monde Contemporain',
    lessonTitle: 'L\'ONU : Création, Fonctionnement, Bilan et Perspectives',
    objectifs: [
      'Connaître les origines (Conférence de San Francisco, Charte du 26 juin 1945, 24 octobre 1945)',
      'Maîtriser les 4 buts fondamentaux (Paix/sécurité, Droits de l\'homme, Coopération internationale, Centre harmonisateur)',
      'Décrire les 6 organes principaux (Assemblée Générale, Conseil de Sécurité et droit de veto, Secrétariat général, CIJ, ECOSOC, Conseil de Tutelle)',
      'Analyser le bilan : succès (maintien de la paix, décolonisation, aide humanitaire) et limites (droit de veto paralysant, dépendance financière, hégémonie des grandes puissances)'
    ],
    fullCourseContent: `I. CRÉATION ET BUTS DE L'ONU :
- Origines : Née des ruines de la 2nde Guerre mondiale (échec de la SDN). Conférence de San Francisco (25 avril - 26 juin 1945) réunissant 50 États. Entrée en vigueur de la Charte le 24 octobre 1945.
- 4 Buts fondamentaux :
  1. Maintenir la paix et la sécurité internationales.
  2. Développer des relations amicales entre les nations fondées sur l'égalité des droits des peuples.
  3. Réaliser la coopération internationale dans tous les domaines (économique, social, culturel, humanitaire).
  4. Être un centre où s'harmonisent les efforts des nations.
- Principes : Égalité souveraine des États, règlement pacifique des différends, non-ingérence dans les affaires intérieures.

II. STRUCTURE ET FONCTIONNEMENT :
- Assemblée Générale (AG) : 193 États membres, 1 État = 1 voix. Vote les résolutions et le budget.
- Conseil de Sécurité (CS) : Organe exécutif suprême. 15 membres (5 permanents avec droit de veto : USA, Russie, Chine, France, Royaume-Uni ; 10 non-permanents élus pour 2 ans). Décisions exécutoires (résolutions contraignantes).
- Secrétariat Général : Dirigé par Antonio Guterres (depuis 2017). Administre l'organisation et conduit les missions de bons offices.
- Cour Internationale de Justice (CIJ à La Haye) : Règle les litiges juridiques entre États.
- ECOSOC : Coordonne les institutions spécialisées (UNESCO, OMS, UNICEF, HCR, FMI, Banque Mondiale, FAO, OIT).

III. BILAN ET PERSPECTIVES :
- Succès majeurs : Aucune guerre mondiale depuis 1945, accélération de la décolonisation (résolution 1514 de 1960), missions de casques bleus (plus de 70 missions), secours humanitaire et lutte contre les épidémies.
- Limites et blocages :
  1. Droit de veto paralysant : Blocage du Conseil de Sécurité durant la Guerre Froide et lors des crises récentes (Syrie, Ukraine).
  2. Dépendance financière vis-à-vis des grandes puissances contributrices.
  3. Unilatéralisme de certaines superpuissances (intervention en Irak en 2003 sans mandat onusien).
- Perspectives de réforme : Élargissement du Conseil de Sécurité (attribution de sièges permanents à l'Afrique, au Brésil, à l'Inde, au Japon, à l'Allemagne), limitation de l'usage du droit de veto.`,
    definitions: [
      { term: 'Charte des Nations Unies', definition: 'Traité fondateur de l\'ONU signé à San Francisco le 26 juin 1945, fixant les 4 buts et les 7 principes régissant les relations internationales.' },
      { term: 'Droit de veto', definition: 'Droit accordé aux 5 membres permanents du Conseil de Sécurité (USA, Russie, Chine, France, Royaume-Uni) de bloquer toute résolution non procédurale par leur seul vote négatif.' },
      { term: 'Casques bleus', definition: 'Forces militaires et policières multinationales de maintien de la paix déployées par l\'ONU avec l\'accord préalable des belligérants.' },
      { term: 'Sécurité collective', definition: 'Principe selon lequel la sécurité de chaque État est l\'affaire de tous les autres, toute agression contre l\'un déclenchant une riposte solidaire concertée.' },
      { term: 'Non-ingérence', definition: 'Principe fondamental de l\'article 2 §7 de la Charte interdisant à l\'ONU d\'intervenir dans les affaires qui relèvent essentiellement de la juridiction nationale d\'un État.' }
    ],
    propertiesAndRules: [
      {
        name: 'Les 4 Buts fondamentaux de l\'ONU (Article 1 de la Charte)',
        statement: `1. Maintenir la paix et la sécurité internationales par des mesures collectives.
2. Développer entre les nations des relations amicales fondées sur le respect de l'égalité des droits des peuples et de leur droit à disposer d'eux-mêmes.
3. Réaliser la coopération internationale sur les plans économique, social, culturel et humanitaire.
4. Être un centre où s'harmonisent les efforts communs des nations.`
      },
      {
        name: 'Les 7 Principes directeurs de l\'action de l\'ONU (Article 2 de la Charte)',
        statement: `1. Égalité souveraine de tous les États membres.
2. Exécution de bonne foi des obligations de la Charte.
3. Règlement pacifique des différends internationaux.
4. Non-recours à la menace ou à l'emploi de la force contre l'intégrité territoriale ou l'indépendance d'un État.
5. Obligation d'assistance à l'ONU et refus d'aide à l'État agresseur.
6. Respect des principes par les États non-membres pour maintenir la paix.
7. Non-ingérence dans les affaires intérieures des États souverains.`
      },
      {
        name: 'Les 6 Organes principaux de l\'ONU',
        statement: `• Assemblée Générale (193 membres, 1 voix par État, vote des résolutions et du budget)
• Conseil de Sécurité (15 membres dont 5 permanents avec droit de veto, résolutions contraignantes)
• Secrétariat Général (dirigé par Antonio Guterres, administration et missions de médiation)
• Cour Internationale de Justice (CIJ à La Haye, règlement des litiges juridiques entre États)
• Conseil Économique et Social (ECOSOC, coordination des agences spécialisées UNESCO, OMS, UNICEF, HCR, FAO)
• Conseil de Tutelle (supervision des territoires sous tutelle, inactif depuis 1994)`
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Identifier les fondements et origines de l\'ONU',
        procedure: 'Rappeler l\'échec de la SDN, la Déclaration des Nations Unies (1942), la Conférence de San Francisco (25 avril - 26 juin 1945) et l\'entrée en vigueur de la Charte le 24 octobre 1945.',
        tip: 'Toujours mentionner les 50 États fondateurs et la volonté d\'éviter une 3e guerre mondiale.'
      },
      {
        stepNumber: 2,
        title: 'Articuler Buts (objectifs) et Principes de la Charte',
        procedure: 'Distinguer nettement les 4 Buts fondamentaux (la finalité : paix, amitié, coopération, harmonisation) des 7 Principes (les règles de conduite : égalité souveraine, non-ingérence, règlement pacifique).',
        tip: 'Citer expressément les Articles 1 et 2 de la Charte de San Francisco.'
      },
      {
        stepNumber: 3,
        title: 'Analyser le fonctionnement et le rôle du Conseil de Sécurité',
        procedure: 'Expliquer la composition (5 permanents + 10 élus) et le mécanisme du droit de veto qui confère aux superpuissances le monopole de la décision sous le Chapitre VII.',
        tip: 'Montrer le contraste entre les résolutions contraignantes du CS et les simples recommandations de l\'Assemblée Générale.'
      },
      {
        stepNumber: 4,
        title: 'Dresser un bilan critique équilibré (Succès et Limites)',
        procedure: 'Mettre en valeur les réussites (décolonisation, absence de conflit mondial direct, missions humanitaires) face aux blocages géopolitiques (veto en Guerre froide, guerres unilatérales, crises actuelles).',
        tip: 'Évoquer les perspectives de réforme (sièges permanents pour l\'Afrique, limitation du veto).'
      }
    ],
    examples: [],
    exercises: [],
    evaluationSituation: {
      context: 'Sujet Bac : « L\'ONU face au défi du maintien de la paix depuis 1945 »',
      instructions: ['Dégage la problématique et élabore un plan dialectique en deux axes.'],
      solutionGuide: 'Problématique : Dans quelle mesure l\'ONU parvient-elle à garantir la sécurité collective malgré ses blocages structurels ?\nAxe 1 : Les réalisations concrètes de l\'ONU pour la préservation de la paix.\nAxe 2 : Les limites structurelles et la nécessité urgente d\'une réforme du Conseil de Sécurité.'
    },
    examTraps: [
      'Confondre les Buts (objectifs à atteindre : paix, coopération) avec les Principes (règles juridiques de conduite : souveraineté, non-ingérence).',
      'Confondre les compétences de l\'Assemblée Générale (recommandations non contraignantes) avec celles du Conseil de Sécurité (résolutions exécutoires et contraignantes).',
      'Oublier le rôle majeur de l\'ONU dans la décolonisation (résolution 1514 de 1960).'
    ],
    quickMemo: 'ONU : 24 octobre 1945, 193 pays, 4 buts (Art. 1), 7 principes (Art. 2), 6 organes dont le Conseil de Sécurité (5 permanents avec droit de veto). Succès (casques bleus, décolonisation) et limites (blocage du veto).',
    keywords: [
      'ONU', 'L\'ONU', 'Nations Unies', 'Organisation des Nations Unies', 'San Francisco', 'Charte de l\'ONU',
      'Charte des Nations Unies', 'objectifs de l\'ONU', 'principes de l\'ONU', 'buts de l\'ONU', 'organes de l\'ONU',
      'Conseil de Sécurité', 'Veto', 'droit de veto', 'Casques bleus', 'Guterres', 'bilan de l\'ONU', 'sécurité collective', 'maintien de la paix'
    ]
  },
  {
    id: 'hg-tle-g1-fondements-eco-ci',
    discipline: 'geographie',
    disciplineLabel: 'Géographie (Terminale Toutes Séries)',
    level: 'terminale',
    levelLabel: 'Terminale (Bac)',
    serie: 'tle_a',
    serieLabel: 'Terminale A, C, D, E',
    chapter: 'L\'Économie Ivoirienne',
    lessonTitle: 'Les Fondements du Développement Économique de la Côte d\'Ivoire',
    objectifs: [
      'Analyser les fondements naturels : relief plat et tabulaire (plaines littorales, plateaux intérieurs, chaîne du mont Nimba 1752m au mont Tonkpi), climat tropical et subéquatorial, sols ferralitiques et ferrugineux, hydrographie riche',
      'Analyser les fondements humains : 29,38 millions d\'habitants (RGPH 2021), jeunesse de la population (77% < 35 ans), dynamisme entrepreneurial et apport de l\'immigration',
      'Analyser les fondements politiques et économiques : Libéralisme économique, capitalisme d\'État (sociétés d\'État, SODEFOR, SODECI), Code des investissements et Plan National de Développement (PND)'
    ],
    fullCourseContent: `I. LES FONDEMENTS NATURELS :
- Un relief tabulaire et accessible : Dominé par de vastes plaines au sud et des plateaux étagés au centre et au nord (altitudes modestes de 200 à 500 m). Les seules montagnes se situent à l'ouest (Mont Nimba culminant à 1752 m, Mont Tonkpi à 1189 m). Ce relief facilite l'aménagement des infrastructures de transport et les cultures mécanisées.
- Une diversité climatique favorable : Climat subéquatorial (Attiéen) au sud avec 4 saisons et forte pluviométrie (> 1500 mm/an) propice aux cultures d'exportation ; Climat tropical humide (Baouléen) au centre ; Climat tropical sec (Soudanien) au nord propice au coton, à l'anacarde et à l'élevage.
- Des sols variés et fertiles : Sols ferralitiques riches en humus au sud (forêt) propices au binôme café-cacao, palmier à huile, hévéa ; Sols ferrugineux au nord adaptés aux céréales et tubercules.
- Un réseau hydrographique dense : 4 grands fleuves navigables en lagune (Comoé, Bandama, Sassandra, Cavally) permettant l'irrigation, la pêche et l'énergie hydroélectrique (barrages de Kossou, Taabo, Buyo, Soubré, Gribo-Popoli).
- Ressources minières et énergétiques : Gisements d'or (Tongon, Ity, Yaouré), manganèse (Lauzoua), nickel, et surtout découvertes majeures de pétrole et de gaz naturel offshore (champs Baleine et Calao).

II. LES FONDEMENTS HUMAINS :
- Dynamique démographique : Population estimée à 29,38 millions d'habitants (RGPH 2021) avec un taux d'accroissement naturel vigoureux (2,5%/an).
- Une population jeune et active : Plus de 77 % des habitants ont moins de 35 ans, constituant une main-d'œuvre abondante, disponible et dynamique.
- Une terre d'immigration et de brassage : Environ 22 % de résidents étrangers (Burkinabés, Maliens, Guinéens...) intégrés au tissu économique agricole, commercial et artisanal.

III. LES FONDEMENTS POLITIQUES ET ÉCONOMIQUES :
- Le choix du libéralisme économique : Ouverture aux capitaux privés étrangers dès 1960 avec un Code des investissements incitatif et sécurisant.
- L'État-développeur et planificateur : Création de sociétés d'État de développement agricole (SATMACI, SODEPALM, SODESUCRE) et pilotage par les Plans Nationaux de Développement (PND 2021-2025).
- Stabilité des institutions et diplomatie d'ouverture : Climat des affaires attractif promu par le Centre de Promotion des Investissements en Côte d'Ivoire (CEPICI).`,
    definitions: [
      { term: 'Relief tabulaire', definition: 'Relief plat et régulier formé de plaines et de plateaux sans dénivellations brutales, facilitant l\'aménagement du territoire.' },
      { term: 'Libéralisme économique', definition: 'Doctrine économique fondée sur la liberté d\'entreprise, le libre marché, la libre concurrence et la protection des investissements privés.' }
    ],
    propertiesAndRules: [
      {
        name: 'Les piliers de l\'économie ivoirienne',
        statement: '1er producteur mondial de cacao et d\'anacarde (cajou), leader africain de l\'hévéa, puissance industrielle de l\'UEMOA (agroalimentaire, SIR, cimenteries), hub logistique maritime (ports d\'Abidjan et San-Pedro) et place financière (BRVM).'
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Analyser les atouts naturels',
        procedure: 'Étudier le relief tabulaire facilitateur, les climats (subéquatorial au Sud, tropical au Nord), les sols fertiles et les barrages hydroélectriques.',
        tip: 'Mentionner les récentes découvertes de pétrole et gaz offshore (Baleine et Calao).'
      },
      {
        stepNumber: 2,
        title: 'Analyser les atouts humains et politiques',
        procedure: 'Souligner la jeunesse démographique (77% < 35 ans), la main-d\'œuvre disponible, le libéralisme économique et le rôle historique de l\'agriculture motrice.',
        tip: 'Citer la célèbre formule du Président Houphouët-Boigny : « Le succès de ce pays repose sur l\'agriculture ».'
      }
    ],
    examples: [],
    exercises: [],
    evaluationSituation: {
      context: 'Sujet Bac : « Les facteurs naturels sont-ils les seuls moteurs du développement de la Côte d\'Ivoire ? »',
      instructions: ['Dégage la problématique et élabore le plan de dissertation en 2 axes.'],
      solutionGuide: 'Plan : 1. Les atouts naturels exceptionnels (relief, climat, sols, hydrographie) / 2. L\'importance déterminante des facteurs humains et des choix politiques stratégiques.'
    },
    examTraps: ['Oublier de mentionner les nouvelles découvertes énergétiques (pétrole/gaz : Baleine et Calao).'],
    quickMemo: 'Fondements Éco CI : 322 462 km², relief plat (Nimba 1752m), 4 fleuves, 29,38M d\'habitants (77% < 35 ans), libéralisme, PND, CEPICI, gisements Baleine/Calao.',
    keywords: [
      'Côte d\'Ivoire', 'Cote d\'Ivoire', 'Économie ivoirienne', 'Economie ivoirienne',
      'Fondements économiques de la Côte d\'Ivoire', 'Relief', 'Climat', 'Démographie', 'Libéralisme',
      'PND', 'Baleine', 'Calao', 'Houphouët-Boigny', 'Agriculture ivoirienne', 'Cacao', 'Café', 'Anacarde'
    ]
  },
  {
    id: 'hg-tle-g2-bouake-metropole-centre',
    discipline: 'geographie',
    disciplineLabel: 'Géographie (Terminale Toutes Séries)',
    level: 'terminale',
    levelLabel: 'Terminale (Bac)',
    serie: 'tle_a',
    serieLabel: 'Terminale A, C, D, E',
    chapter: 'L\'Économie Ivoirienne et l\'Aménagement du Territoire',
    lessonTitle: 'Bouaké : Deuxième Pôle Économique, Carrefour National et Métropole d\'Équilibre',
    objectifs: [
      'Analyser la position géographique et le rôle de carrefour stratégique de Bouaké (Centre du pays, axe Abidjan-Niger, autoroute du Nord)',
      'Décrire les piliers économiques de Bouaké : berceau de l\'industrie textile (Gonfreville, CIDT), transformation de l\'anacarde, Marché de Gros de Bouaké (MGB)',
      'Comprendre la fonction de métropole d\'équilibre face à la macrocéphalie d\'Abidjan (aménagement du territoire, politique de l\'AVB, pôle universitaire et administratif)'
    ],
    fullCourseContent: `I. SITUATION GÉOGRAPHIQUE ET RÔLE DE CARREFOUR STRATÉGIQUE :
- Position centrale : Située dans la Région du Gbêkê sur les plateaux du Centre ivoirien, Bouaké est la 2e agglomération urbaine la plus peuplée de Côte d'Ivoire.
- Nœud de communication multimodal : Carrefour routier majeur reliant le littoral sud aux régions septentrionales et aux pays sans littoral (Burkina Faso, Mali, Niger). Étape ferroviaire historique de la ligne Abidjan-Niger (SITARAIL) et desservie par le prolongement de l'autoroute du Nord.
- Aire d'influence régionale : Bouaké polarise le V-Baoulé et l'ensemble des départements du Centre (Béoumi, Sakassou, Botro, Katiola).

II. UN PÔLE AGRO-INDUSTRIEL, TEXTILE ET COMMERCIAL :
- Berceau de l'industrie textile ivoirienne : Implantation historique des Établissements R. Gonfreville dès 1921 (filature et tissage), usines d'égrenage de coton de la CIDT (Compagnie Ivoirienne pour le Développement des Textiles) et Trituraf.
- Agro-industrie et transformation : Essor des unités modernes de transformation de la noix de cajou (anacarde) dont la Côte d'Ivoire est le 1er producteur mondial, transformation vivrière et provenderies.
- Le Marché de Gros de Bouaké (MGB) : Plus grand marché de gros vivrier d'Afrique de l'Ouest inauguré en 1998, plaque tournante sous-régionale de collecte, stockage et redistribution des produits vivriers (igname, maïs, légumes, oignons) vers Abidjan et les pays sahéliens.

III. RÔLE DANS L'AMÉNAGEMENT DU TERRITOIRE ET PERSPECTIVES :
- Métropole d'équilibre : Conçue historiquement (avec l'Autorité pour la Vallée du Bandama - AVB) pour faire contrepoids à l'hégémonie économique et démographique écrasante du District d'Abidjan (macrocéphalie urbaine).
- Pôle éducatif, médical et administratif : Siège de l'Université Alassane Ouattara (UAO), grands centres hospitaliers universitaires (CHU de Bouaké) et commandements militaires.
- Renaissance post-crise et modernisation : Réhabilitation des infrastructures, modernisation du réseau viaire urbain et reprise des investissements industriels.`,
    definitions: [
      { term: 'Métropole d\'équilibre', definition: 'Grande ville régionale choisie et aménagée par l\'État pour contrebalancer la domination d\'une capitale macrocéphale et stimuler le développement de l\'intérieur du pays.' },
      { term: 'Marché de Gros de Bouaké (MGB)', definition: 'Plateforme logistique et commerciale moderne dédiée au transit, au stockage et à la redistribution en gros des denrées vivrières entre le Nord, le Centre et le Sud de la Côte d\'Ivoire.' }
    ],
    propertiesAndRules: [
      {
        name: 'Les 3 piliers du rayonnement de Bouaké',
        statement: `1. Carrefour géographique et ferroviaire stratégique (axe Abidjan-Ouagadougou et autoroute du Nord).
2. Pôle agro-industriel et textile historique (textile Gonfreville, égrenage de coton CIDT, transformation du cajou).
3. Métropole d'équilibre et grand marché de gros vivrier d'Afrique de l'Ouest (MGB).`
      }
    ],
    formulas: [],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Caractériser le site et la situation de Bouaké',
        procedure: 'Situer la ville dans le département de Bouaké / région du Gbêkê, plateaux du centre, carrefour de communication Nord-Sud.',
        tip: 'Toujours mentionner la ligne de chemin de fer Abidjan-Niger et l\'autoroute du Nord.'
      },
      {
        stepNumber: 2,
        title: 'Expliquer les fonctions économiques clés',
        procedure: 'Détailler l\'industrie textile (Gonfreville), l\'agro-industrie (coton, cajou) et le rôle commercial du Marché de Gros.',
        tip: 'Souligner le rôle de redistributeur vivrier sous-régional.'
      },
      {
        stepNumber: 3,
        title: 'Évaluer son rôle dans l\'aménagement du territoire ivoirien',
        procedure: 'Expliquer la notion de métropole d\'équilibre face à Abidjan et les politiques publiques (AVB, infrastructures universitaires et hospitalières).',
        tip: 'Discuter les défis de la relance post-crise.'
      }
    ],
    examples: [],
    exercises: [],
    evaluationSituation: {
      context: 'Sujet Bac : « Bouaké peut-elle constituer une véritable métropole d\'équilibre face à Abidjan ? »',
      instructions: ['Formule la problématique et élabore un plan en deux parties.'],
      solutionGuide: 'Problématique : En quoi les atouts géographiques, industriels et logistiques de Bouaké lui permettent-ils de freiner la macrocéphalie d\'Abidjan, et quels défis freinent encore cette dynamique ?\nAxe 1 : Les atouts indiscutables de Bouaké comme 2e pôle national (carrefour, textile, marché de gros, université).\nAxe 2 : Les limites structurelles persistantes (concentration excessive des capitaux à Abidjan, besoin de renforcement industriel).'
    },
    examTraps: [
      'Confondre Bouaké (capitale économique du Centre) avec Yamoussoukro (capitale politique et administrative).',
      'Oublier de citer le Marché de Gros de Bouaké (MGB) ou l\'industrie textile (Gonfreville/CIDT).'
    ],
    quickMemo: 'Bouaké : 2e ville de Côte d\'Ivoire, région du Gbêkê, carrefour Abidjan-Niger, industrie textile (Gonfreville 1921), marché de gros MGB, métropole d\'équilibre (AVB).',
    keywords: [
      'Bouaké', 'Bouake', 'Gbêkê', 'Gbeke', 'Marché de Gros', 'MGB', 'Gonfreville', 'Textile', 'CIDT',
      'Métropole d\'équilibre', 'Metropole d\'equilibre', 'Carrefour', 'Abidjan-Niger', 'Centre Côte d\'Ivoire', 'Deuxième ville Côte d\'Ivoire'
    ]
  }
];
