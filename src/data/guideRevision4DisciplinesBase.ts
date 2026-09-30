/**
 * GUIDE OFFICIEL DE RÉVISION : FRANÇAIS - PHILOSOPHIE - HISTOIRE - GÉOGRAPHIE
 * Corpus intégral d'Excellence Pédagogique - Terminale Baccalauréat (127 pages)
 * Référentiel conforme aux programmes officiels MENA / DPFC et examens du Baccalauréat
 */

export interface GuideRevisionSection {
  id: string;
  discipline: 'francais' | 'philosophie' | 'histoire' | 'geographie';
  disciplineLabel: string;
  pageRange: string;
  title: string;
  summary: string;
  contentMarkdown: string;
  keywords: string[];
}

export const GUIDE_4_DISCIPLINES_SECTIONS: GuideRevisionSection[] = [
  // =========================================================================
  // 1. FRANÇAIS (PAGES 4 À 46)
  // =========================================================================
  {
    id: 'fr-chapitre-1-litterature-negro-africaine',
    discipline: 'francais',
    disciplineLabel: 'Français & Littérature',
    pageRange: 'p. 4',
    title: 'Chapitre 1 : La Littérature Négro-Africaine — Naissance et Évolution',
    summary: 'Genèse à Harlem (Negro-Renaissance, 1930) et évolution en Poésie, Roman et Théâtre avant et après les Indépendances.',
    keywords: ['litterature negro africaine', 'negro renaissance', 'harlem', 'cesaire', 'senghor', 'damas', 'david diop', 'kourouma', 'ousmane sembene', 'oyono', 'dadie', 'batouala', 'william ponty'],
    contentMarkdown: `# CHAPITRE 1 : LA LITTÉRATURE NÉGRO-AFRICAINE : NAISSANCE ET ÉVOLUTION

## I. Origine et Contexte : La Negro-Renaissance de Harlem (1930)
Dans les années 1930 naît à Harlem (USA) la **Negro-Renaissance**, mouvement visant à faire retrouver au Noir américain son identité culturelle en célébrant le caractère mythique et merveilleux de l'Afrique et l'*« African Personality »* (Claude McKay). 
- **Pionniers américains :** Countee Cullen, Claude McKay, W.E.B. Du Bois, Langston Hughes, Jean Toomer, Wallace Thurman.
- **Rayonnement :** Leurs écrits inspirent les étudiants noirs à Paris (Césaire, Senghor, Damas) dans la reconquête de leur dignité bafouée.

---

## II. La Poésie Négro-Africaine
### 1. Avant les Indépendances (Combat de la Négritude)
- **Objectif :** Traduire le déchirement de l'âme noire asservie, réhabiliter les valeurs traditionnelles africaines et briser l'acculturation.
- **Pionniers :** Léopold Sédar Senghor (*Éthiopiques*, *Chants d'ombre*), Léon-Gontran Damas (*Pigments*), Aimé Césaire (*Cahier d'un retour au pays natal*), David Diop (*Coups de pilon*).
- **Formule consacrée :** Fatho Amoy souligne : *« La poésie nègre pleure et pleurera toujours les souffrances d'un cœur qui use de ronce. »*

### 2. Après les Indépendances (Procès de la société néocoloniale)
- **Contexte :** Constat amer que seuls les dirigeants ont changé mais que les pratiques oppressives coloniales demeurent.
- **Auteurs engagés :** Maxime N'Débéka (écrivant de prison son recueil pamphlétaire *L'Oseille*), Pierre Nagala.

---

## III. Le Roman Négro-Africain
### 1. Avant les Indépendances (Éloge traditionnel et éveil des consciences)
- **Pionniers :** René Maran (*Batouala*, Prix Goncourt 1921), Ousmane Socé (*Karim*), Paul Hazoumé (*Doguicimi*).
- **Éclosion des années 1950 :** Dénonciation crue du drame colonial et appel à la révolte : Sembène Ousmane (*Ô pays, mon beau peuple*), Ferdinand Oyono (*Le Vieux Nègre et la médaille*, *Une vie de boy*).

### 2. Après les Indépendances (Littérature du désenchantement et de la désillusion)
- **Rupture fondatrice :** Ahmadou Kourouma (*Les Soleils des indépendances*, 1968) met en scène la déchéance tragique de Fama Doumbouya face aux « bâtards de la politique ».
- **Maux stigmatisés :**
  - Impuissance et corruption de la société : *Xala* (Sembène Ousmane).
  - Lourdeurs administratives et bureaucratie stérile : *Le Mandat* (Sembène Ousmane).
  - Conflit des générations et tradition : *Sous l'orage* (Seydou Badian).
  - Choc des cultures et déchirement intellectuel : *L'Aventure ambiguë* (Cheikh Hamidou Kane).
  - Dictature et partis uniques présidentiels : *Le Cercle des tropiques* (Alioum Fantouré avec le despote Ban Koulé), *La Parenthèse de sang* (Sony Labou Tansi).

---

## IV. Le Théâtre Négro-Africain
- **Origines (1944) :** École normale William Ponty à Dakar (théâtre colonial initialement destiné à valoriser l'Empire).
- **Le théâtre de contestation :** Bernard Binlin Dadié, Fodéba Keïta.
- **Après les Indépendances (Critique des cours présidentielles et des tares sociales) :**
  - Mégalomanie et tyrannie du pouvoir : *La Tragédie du roi Christophe* (Aimé Césaire), *Le Président* (Maxime N'Débéka).
  - Hypocrisie et enrichissement illicite des nouveaux riches : *Monsieur Thôgô-gnini* (Bernard Dadié).
  - Matérialisme matrimonial et mariage forcé : *Trois prétendants... un mari* (Guillaume Oyono Mbia).`
  },
  {
    id: 'fr-chapitre-2-courants-litteraires',
    discipline: 'francais',
    disciplineLabel: 'Français & Littérature',
    pageRange: 'p. 5 - 7',
    title: 'Chapitre 2 : Les Grands Courants Littéraires',
    summary: 'Étude doctrinale, principes esthétiques, chefs de file et citations clés des 8 courants : Classicisme, Lumières, Romantisme, Réalisme, Naturalisme, Parnasse, Symbolisme, Surréalisme.',
    keywords: ['classicisme', 'siecle des lumieres', 'romantisme', 'realisme', 'naturalisme', 'parnasse', 'symbolisme', 'surrealisme', 'boileau', 'voltaire', 'victor hugo', 'zola', 'theophile gautier', 'baudelaire', 'andre breton'],
    contentMarkdown: `# CHAPITRE 2 : LES COURANTS LITTÉRAIRES

## 1. Le Classicisme (2e moitié du XVIIe siècle, 1661-1685 sous Louis XIV)
- **Principes fondamentaux :**
  - *Bienséance :* Respect des mœurs et convenances morales/politiques ; exclusion de la violence physique directe sur scène. Boileau (*Art poétique*) : *« Que votre âme et vos mœurs, peintes dans vos ouvrages, / N'offrent jamais de vous que de nobles images. »*
  - *Vraisemblance :* Ce qui paraît vrai et crédible aux yeux du public.
  - *Règle des trois unités théâtrales :* Unité de temps (24h), lieu (un seul décor), action (une seule intrigue). Boileau : *« Qu'en un lieu, qu'en un jour, un seul fait accompli / Tienne jusqu'à la fin tout le théâtre rempli. »*
  - *Culte de la Raison :* Imitation de la nature humaine universelle. Boileau : *« Que la nature soit votre étude unique. »*

## 2. Le Siècle des Lumières (XVIIIe siècle)
- **Idéal :** Triomphe de la Raison, vulgarisation scientifique (*L'Encyclopédie* de Diderot et d'Alembert), émancipation politique et recul de l'obscurantisme.
- **Formule de Diderot :** Renverser *« toutes les barrières que la raison n'aura point posées »*.
- **Combat contre les préjugés et l'intolérance :** Voltaire (*Zadig*, *Candide*, *L'Ingénu*, *Micromégas*). Citation de Voltaire : *« Les hommes tombent sur quelques vérités scientifiques ; mais sur les questions métaphysiques, les discussions sont sans fin. »*

## 3. Le Romantisme (Fin XVIIIe - 1ère moitié XIXe siècle)
- **Précurseurs :** Mme de Staël, Chateaubriand, Benjamin Constant.
- **Principes :** Culte du « Moi », épanchement lyrique, primauté de la sensibilité sur la raison, refuge consolateur dans la nature bienveillante.
- **Sensibilité blessée :** Senancour (*Oberman*) : *« J'avais besoin de bonheur, j'étais né pour souffrir. »*
- **Nature refuge :** Lamartine (*Le Vallon*) : *« Mais la nature est là qui t'invite et qui t'aime ; / Plonge-toi dans son sein qu'elle t'ouvre toujours. »*
- **Évasion temporelle :** Fuite du « mal du siècle » vers le rêve, l'infini ou le sentiment religieux (Vigny, *Mont des Oliviers* ; Lamartine, *Harmonies poétiques et religieuses*).

## 4. Le Réalisme (vers 1830)
- **Rupture :** Rejet de l'idéalisme romantique sous l'influence du positivisme scientifique.
- **Principes :**
  - *Souci de vérité objective :* Observation minutieuse, enquête documentaire de terrain.
  - *Refus de l'imagination débridée :* Peinture fidèle de la société contemporaine.
  - *Impersonnalité et neutralité narrative :* Flaubert : *« Un romancier n'a pas le droit d'exprimer une opinion sur quoi que ce soit. »*
- **Limite féconde :** Maupassant rappelle la part subjective inaliénable de l'artiste : *« Le réaliste, s'il est un artiste, cherchera non pas à nous donner la photocopie banale de la vie, mais à nous en donner la vision plus complète, plus saisissante et plus probante que la réalité même. »*

## 5. Le Naturalisme (Zola, Maupassant, Goncourt)
- **Prolongement scientifique :** Application directe de la méthode expérimentale du médecin Claude Bernard et du déterminisme d'Auguste Comte.
- **Théorie de Zola (*Le Roman expérimental*) :** L'écrivain est un observateur et un expérimentateur qui démontre comment le milieu social et l'hérédité biologique conditionnent le comportement humain.
- **Limites :** Tentative d'assimiler l'art à une science exacte ; subjectivité émotionnelle inévitable (ex: Zola prenant parti pour les mineurs en grève dans *Germinal*).

## 6. Le Parnasse (L'Art pour l'Art)
- **Chef de file :** Théophile Gautier : *« Un homme ne doit jamais laisser de la sensibilité dans ses œuvres. »*
- **Culte de la forme pure :** Théophile Gautier (*Émaux et Camées*) : *« Sculpte, lime, cisèle ; / Que ton rêve flottant / Se scelle / Dans le bloc résistant ! »*
- **Impersonnalité et refus de l'engagement :** Baudelaire : *« Le principe de la poésie est strictement et simplement l'aspiration humaine vers une beauté supérieure. »*

## 7. Le Symbolisme (Fin XIXe siècle)
- **Précurseur :** Charles Baudelaire (les correspondances sensorielles et spirituelles).
- **Principes :** Le monde visible est une forêt de symboles masquant l'Idée pure ; la poésie doit suggérer plutôt que décrire.
- **Formule de Stéphane Mallarmé :** *« Nommer un objet, c'est supprimer les trois quarts de la jouissance du poème qui est faite de deviner peu à peu : le suggérer, voilà le rêve. »*
- **Musicalité impaire :** Paul Verlaine (*Art poétique*) : *« De la musique avant toute chose, / Et pour cela préfère l'Impair. »*

## 8. Le Surréalisme (1924, fondé par André Breton)
- **Contexte :** Traumatisme de la Première Guerre mondiale, révolte contre la raison bourgeoise et influence de la psychanalyse de Freud (l'inconscient, le rêve).
- **Écriture automatique :** André Breton (*Manifeste du surréalisme*) : *« Écrivez vite sans sujet préconçu, assez vite pour ne pas retenir et ne pas tenter de vous relire. »*
- **Image surréaliste :** Rapprochement d'éléments arbitrairement éloignés pour provoquer l'étincelle poétique.`
  },
  {
    id: 'fr-chapitre-3-etude-poesie-roman-theatre',
    discipline: 'francais',
    disciplineLabel: 'Français & Littérature',
    pageRange: 'p. 8 - 19',
    title: 'Chapitre 3 : Étude Approfondie des Genres (Poésie, Roman, Théâtre) & Banques d\'Arguments',
    summary: 'Prosodie et versification complètes, structure narrative romanesque, dramaturgie théâtrale et corpus exhaustif des arguments/exemples pour chaque fonction littéraire.',
    keywords: ['versification', 'alexandrin', 'dierese', 'synarese', 'enjambement', 'focalisation', 'roman', 'theatre', 'catharsis', 'arguments dissertation litteraire'],
    contentMarkdown: `# CHAPITRE 3 : LES GENRES LITTÉRAIRES

## I. ÉTUDE DE LA POÉSIE (Prosodie & Versification)
1. **Mesure du vers :**
   - Alexandrin (12 syllabes, césure médiane à l'hémistiche 6//6) : *« Seul le silence est grand // tout le reste est faiblesse »* (Vigny).
   - Décasyllabe (10 syllabes), Octosyllabe (8 syllabes), Heptasyllabe (7 syllabes).
2. **Décompte des syllabes et le « E » muet :**
   - Le « e » compte devant consonne ou « h » aspiré.
   - Le « e » s'élide (ne compte pas) devant voyelle, « h » muet ou en fin de vers.
   - *Diérèse :* prononciation en deux syllabes d'un groupe habituel (*li-on* pour *lion*).
   - *Synérèse :* fusion en une syllabe (*duel* en une émission).
   - *Enjambement, Rejet et Contre-rejet :* ruptures métriques mettant en valeur le sens.
3. **Les Sonorités & Rimes :**
   - *Assonance :* répétition de voyelles.
   - *Allitération :* répétition de consonnes.
   - *Disposition :* Plates (AABB), Croisées (ABAB), Embrassées (ABBA).
   - *Qualité :* Pauvres (1 son : *matin/chemin*), Suffisantes (2 sons : *brève/sève*), Riches (3 sons et plus : *parade/estrade*).

---

## II. ARGUMENTS & ŒUVRES POUR LA DISSERTATION : POÉSIE
- **Fonction Lyrique :**
  - *Exprime douleur et deuil :* Victor Hugo, *Les Contemplations* (douleur après la noyade de Léopoldine).
  - *Célèbre l'amour et l'attachement :* Baudelaire, « À une passante » (*Les Fleurs du mal*).
- **Fonction Esthétique :**
  - *Musicalité des mots :* Victor Hugo, « Demain, dès l'aube » (*Les Contemplations*).
  - *Images fortes et évocatrices :* Baudelaire, « Correspondances » (*Les Fleurs du mal*).
  - *Langue travaillée et originale :* Guillaume Apollinaire, *Calligrammes* (mariage art visuel et texte).
- **Fonction Évasive / Fictive :**
  - *Mondes imaginaires :* Baudelaire, « L'Invitation au voyage » (*Les Fleurs du mal*).
  - *Créatures mythiques :* Apollinaire, « Mélusine » (*Alcools*).
- **Fonction Ludique :**
  - *Faire rire et amuser :* La Fontaine, « Le Corbeau et le Renard » (*Fables*).
  - *Divertir par l'inventivité visuelle :* Apollinaire, *Calligrammes*.
- **Fonction Didactique :**
  - *Leçons de morale :* La Fontaine, « Le Lièvre et la Tortue » (*Fables*).
  - *Enrichissement linguistique :* Bernard Dadié, *La Ronde des jours* (métaphores des mains laborieuses).
- **Fonction Engagée :**
  - *Dénoncer les injustices :* Victor Hugo, *Les Contemplations* (« Melancholia » sur le travail des enfants).
  - *Critiquer la corruption :* Tommy David Golé Bi Gnamien, *Les Vers de Corrupthius*.
  - *Lutter contre l'oppression :* Aimé Césaire, *Cahier d'un retour au pays natal*.
  - *Célébrer la diversité :* Léopold Sédar Senghor, *Chants d'ombre*.
  - *Défendre la liberté :* Paul Éluard, « Liberté » (*Poésie et Vérité 1942*).
  - *Critiquer la guerre :* Guillaume Apollinaire, *Calligrammes*.
  - *Donner voix aux marginalisés :* David Diop, « Afrique » (*Coups de pilon*).

---

## III. ÉTUDE DU ROMAN & BANQUE D'ARGUMENTS
1. **Constituants du Roman :**
   - Discours narratif (schéma narratif quinaire : SI -> EP -> Péripéties -> Résolution -> SF).
   - Cadre spatio-temporel et système des personnages (sujet, objet, adjuvant, opposant, destinateur, destinataire).
   - Les trois focalisations :
     - *Zéro (omnisciente) :* Le narrateur sait tout (pensées, passé, avenir) : Balzac, *Le Père Goriot*.
     - *Externe :* Le narrateur est témoin neutre, caméra extérieure : Flaubert, *Bouvard et Pécuchet*.
     - *Interne :* Le récit est filtré par la subjectivité d'un personnage : Flaubert, *L'Éducation sentimentale*.
2. **Arguments Roman :**
   - *Lyrique :* Sylvain Kean Zoh (*La Voix de ma rue* - détresse de l'enfant de rue) ; Camara Laye (*L'Enfant noir*) ; Bernard Dadié (*Climbié*).
   - *Esthétique :* Mariama Bâ (*Une si longue lettre*) ; Henri Lopes (*Le Chercheur d'Afriques*).
   - *Évasif / Fictif :* Pierre Boulle (*La Planète des singes*) ; J.K. Rowling (*Harry Potter*).
   - *Ludique :* Ferdinand Oyono (*Une vie de boy* - ironie savoureuse de Toundi) ; Amadou Koné (*Les Frasques d'Ebinto*).
   - *Didactique :* Alex Haley (*Racines*) ; Mathurin Goli Bi Irié (*Sous le voile de la mariée*) ; Ahmadou Kourouma (*Les Soleils des indépendances*).
   - *Engagé / Satirique :* Fatou Keïta (*Rebelle* - lutte contre l'excision) ; Ousmane Sembène (*Le Mandat*, *Les Bouts de bois de Dieu*) ; Ahmadou Kourouma (*Allah n'est pas obligé* - enfants-soldats).
   - *Réaliste :* Amadou Koné (*Les Frasques d'Ebinto* - cadre d'Adiaké et Abidjan) ; Djibril Tamsir Niane (*Soundjata ou l'épopée mandingue*).

---

## IV. ÉTUDE DU THÉÂTRE & BANQUE D'ARGUMENTS
1. **Spécificités théâtrales :**
   - Double énonciation, didascalies, répliques, tirades, stichomythies, apartés.
   - Formes : Tragédie classique (*Phèdre* de Racine), Comédie satirique (*Tartuffe* de Molière), Drame romantique (*Hernani* de Victor Hugo), Théâtre de l'absurde (*Rhinocéros* de Ionesco).
2. **Arguments Théâtre :**
   - *Lyrique :* Racine (*Phèdre*) ; Shakespeare (*Roméo et Juliette*).
   - *Esthétique :* Corneille (*Le Cid*) ; Edmond Rostand (*Cyrano de Bergerac*) ; Jean Anouilh (*Antigone*).
   - *Évasif / Merveilleux :* Bernard Dadié (*Les Voix dans le vent* - personnages imaginaires Nahoubou et Bacoulou) ; Ionesco (*Rhinocéros*).
   - *Ludique :* Hyacinthe Kakou (*On se chamaille pour un siège*) ; Molière (*Le Malade imaginaire*, *Les Fourberies de Scapin*).
   - *Didactique :* Molière (*L'Avare*) ; Corneille (*Le Cid* - devoir moral et honneur).
   - *Engagé :* Aimé Césaire (*La Tragédie du roi Christophe*, *Une saison au Congo*) ; Guillaume Oyono Mbia (*Trois prétendants... un mari*) ; Jean Genet (*Les Nègres*) ; Soro Guefala (*L'Ordonnance*).`
  },
  {
    id: 'fr-chapitre-4-outils-langue-connecteurs',
    discipline: 'francais',
    disciplineLabel: 'Français & Langue',
    pageRange: 'p. 21 - 25',
    title: 'Chapitre 4 : Étude des Figures de Style / Tonalités Littéraires / Focalisation / Les Connecteurs Logiques / Sémantique – Sens et Relations',
    summary: 'Le cours complet officiel du fascicule : Définitions et inventaire exhaustif des figures de style (atténuation, substitution, amplification, opposition, construction), 11 tonalités littéraires avec indices, 3 focalisations illustrées (Balzac, Flaubert), tableau intégral des connecteurs logiques et lexique sémantique complet (26 notions).',
    keywords: ['figures de style', 'euphemisme', 'litote', 'preterition', 'metonymie', 'synecdoque', 'periphrase', 'antonomase', 'onomatopee', 'hyperbole', 'accumulation', 'anaphore', 'gradation', 'paronomase', 'oxymore', 'antithese', 'antiphrase', 'chiasme', 'paradoxe', 'attelage', 'zeugma', 'parallelisme', 'ellipse', 'anacoluthe', 'asyndete', 'interrogation oratoire', 'tonalites litteraires', 'satirique', 'didactique', 'pathetique', 'lyrique', 'comique', 'polemique', 'realiste', 'fantastique', 'epique', 'ironique', 'tragique', 'focalisation', 'point de vue', 'focalisation zero', 'focalisation externe', 'focalisation interne', 'connecteurs logiques', 'semantique', 'champ lexical', 'champ semantique', 'denotation', 'connotation'],
    contentMarkdown: `# CHAPITRE 4 : ÉTUDE DES FIGURES DE STYLE / TONALITÉS LITTÉRAIRES / FOCALISATION / LES CONNECTEURS LOGIQUES / SÉMANTIQUE – SENS ET RELATIONS

---

## I. LES FIGURES DE STYLE

### DÉFINITION
On appelle **figure de style** ou **de rhétorique**, les procédés d’expressions par lesquels, en s’écartant de l’usage ordinaire de la langue, un auteur cherche à séduire, émouvoir ou persuader le lecteur. On peut classer les figures de style suivant leur mode de fonctionnement.

---

### A. LES FIGURES DE L'ATTÉNUATION
* **L’euphémisme :** Elle consiste à atténuer l’expression d’une pensée pour la rendre moins brutale, moins blessante.  
  *Exemple :* « Il s’est éteint » (au lieu de : il est mort).
* **La litote :** Elle consiste à dire peu pour suggérer beaucoup (dire le moins pour faire entendre le plus).  
  *Exemple :* « Je ne t’aimais pas moins. »
* **La prétérition :** Figure par laquelle on affirme passer sous silence quelque chose dont on parle néanmoins explicitement.  
  *Exemple :* « Si vous comptez sur moi pour vous révéler qu’il s’agit de trafic d’avions, vous vous trompez lourdement. » (Hergé, *Tintin*).

---

### B. LES FIGURES DE SUBSTITUTION
* **La métonymie :** Elle consiste à remplacer un mot par un autre, logiquement associé, pour désigner quelque chose :
  - *Le contenant pour le contenu :* « Je peux boire un verre » (= le liquide contenu dans le verre).
  - *L’auteur par l’œuvre :* « Lire un Camus » (= un roman d’Albert Camus).
  - *Le lieu pour le produit :* « Il a acheté un Nokia » (= un téléphone portable de la marque/origine Nokia).
  - *La partie pour le tout ou le tout pour la partie :* « Mon ami est sans toit » (= il n’a pas de maison).
  - *La matière pour l’objet :* « Ils ont croisé le fer » (= les épées).
* **L’Onomatopée :** Figure de style dans laquelle les mots se font entendre par leurs sons, les bruits qu'ils expriment directement.  
  *Exemple :* « Le tic-tac me dérange » (l'horloge).
* **La synecdoque :** Elle consiste à remplacer un mot par un autre mot qui entretient avec le premier un rapport d’inclusion :
  - *Prendre la partie pour le tout :* « Il s’est construit un beau toit. »
  - *Prendre la matière pour l’objet :* « Elle porte un sac de qualité. »
* **La périphrase :** Elle consiste à remplacer un mot par une expression descriptive de sens équivalent.  
  *Exemples :* « La perle des lagunes a été beaucoup visitée pendant ces vacances » (= Abidjan) ; « La ville rose » (= Toulouse).
* **L'Antonomase :** Figure de style consistant à remplacer un nom commun par un nom propre emblématique ou inversement.  
  *Exemples :* « Un Tartufe » pour désigner un hypocrite ; « L'empereur des Français » pour Napoléon.

---

### C. LES FIGURES D’AMPLIFICATION
* **L’hyperbole :** C’est un procédé qui consiste à exagérer l’expression pour produire une forte impression.  
  *Exemple :* « Cet homme est un géant » (exagération pour signifier qu’il est de très grande taille).
* **L’accumulation :** C’est l’énumération, la succession rapide de mots (noms, verbes, adverbes, adjectifs) ayant la même valeur syntaxique et dont le but est de produire un effet d’abondance.  
  *Exemple :* « Cet enfant est très intelligent, excellent, super, génial. »
* **L’anaphore :** C’est la répétition d’un même mot ou d'une même expression en début de vers, de phrase, de paragraphe ou de strophe qui se suivent.  
  *Exemple :*  
  « Tu dors et le monde marche  
  Tu dors et le monde va »
* **La gradation :** C’est une succession de termes d'intensité croissante (gradation ascendante, la plus fréquente) ou décroissante (gradation descendante, beaucoup plus rare).  
  *Exemple :* « C’est un roc, c’est un pic, c’est un cap ! » (Edmond Rostand, *Cyrano de Bergerac*).
* **La répétition :** On répète plusieurs fois le même mot au sein du texte pour créer un martèlement expressif.  
  *Exemple :* « Oh ! Cèdre du Liban, Cèdres de nos délires, / Cèdres de notre extase et de notre fierté. » (Charles Corm).
* **La paronomase :** Elle consiste à employer dans le même segment des termes (deux au moins) de sens différents et de parenté phonique très proche, de manière à créer un effet saisissant.  
  *Exemple :* « Pâles membres de Perle, et ces cheveux soyeux. » (Paul Valéry).

---

### D. LES FIGURES D’OPPOSITION
* **L’oxymore :** C’est le rapprochement de deux mots de sens contraire au sein du même groupe grammatical.  
  *Exemple :* « Ce silence bruyant la perturbait énormément. »
* **L’antithèse :** Elle oppose très fortement deux (2) termes ou deux (2) ensembles de termes dans une même phrase ou un même énoncé.  
  *Exemple :* « Il produit la richesse en créant la misère. »
* **L’antiphrase :** Elle exprime une idée par son contraire dans une intention ironique.  
  *Exemple :* « Quel courage ! » (dit pour dénoncer en réalité la lâcheté de quelqu’un).
* **Le chiasme :** Un chiasme est composé de deux expressions qui se suivent, mais la deuxième adopte l’ordre inverse de la première (schéma A – B / B’ – A’).  
  *Exemple :* « Parler en mangeant, manger en parlant. »
* **Le Paradoxe :** Énoncé qui paraît contenir une contradiction avec l'opinion courante. Le paradoxe est très efficace dans une argumentation car il surprend et remet en cause les fausses évidences.  
  *Exemple :* « On est quelquefois aussi différent de soi-même que des autres. » (La Rochefoucauld).
* **L’attelage (ou Zeugma) :** Il rapproche sous un même verbe deux compléments désignant un élément concret et un élément abstrait.  
  *Exemple :* « Il admirait l’exaltation de son âme et les dentelles de sa jupe. » (Flaubert).  
  *Effet :* Le rapprochement de « l’âme » et de la « jupe » provoque un effet comique et illustre l’ironie flaubertienne.

---

### E. LES FIGURES DE CONSTRUCTION
* **Le parallélisme :** On utilise une syntaxe semblable pour deux énoncés pour rythmer la phrase ou pour orner le discours. Le parallélisme peut être rapproché de la comparaison car on compare généralement deux objets en les approchant pour mieux faire sentir leurs rapports ou oppositions.  
  *Exemple :* « Que la vie est belle ! Que la nature est tendre ! »
* **L'ellipse :** Ce mot signifie « omission ». On supprime des termes qui cependant peuvent aisément se deviner par le contexte.  
  *Exemple :* « Je t'aimais inconstant, qu'aurais-je fait fidèle ? » (Jean Racine, *Andromaque*). [*...qu'aurais-je fait si tu avais été fidèle ?*]
* **L'anacoluthe :** On provoque un écart délibéré par rapport à la syntaxe courante pour marquer la surprise ou l'émotion.  
  *Exemple :* « Exilé sur le sol au milieu des huées, / Ses ailes de géant l'empêchent de marcher. » (Charles Baudelaire, *L'Albatros*).
* **L'asyndète :** Elle consiste en une absence systématique d'outils de liaison (conjonctions ou adverbes) entre les groupes, les propositions ou les phrases.  
  *Exemple :* « Le jour tombait. La terre devenait grisâtre. J'attendais, l'œil fixé sur la ligne des arbres où l'un des deux chemins conduisait tout droit. J'étais inquiet. » (Henri Bosco).
* **L'interrogation oratoire (ou rhétorique) :** L'interrogation, comme procédure oratoire, est une figure de rhétorique qui ressort du pathétique. On s'en sert pour exprimer toutes les passions vives, pour presser, convaincre, réduire et confondre l'adversaire.  
  *Exemple :* Achille parle à Agamemnon pour Iphigénie qui lui a été promise :  
  « Juste Ciel ! Puis-je entendre et souffrir ce langage ?  
  [...] Qu'ai-je à me plaindre ? Où les pertes que j'ai faites ?  
  Je n'y vais que pour vous, barbare que vous êtes. » (Jean Racine, *Iphigénie*).

---

## II. LES TONALITÉS LITTÉRAIRES

### DÉFINITION
La **tonalité** (ou registre littéraire), c’est l’impression ou l’émotion dominante qui se dégage d’un texte. En effet, lorsque l’auteur écrit un texte, il cherche toujours à atteindre un objectif : dénoncer une situation, instruire le lecteur, susciter le rire ou émouvoir. Chacun de ces objectifs correspond à une tonalité.

### LES DIFFÉRENTES TONALITÉS LITTÉRAIRES
1. **La tonalité satirique :** Un texte a une tonalité satirique lorsque l’auteur dénonce ou critique certaines tares ou maux qui minent la société en utilisant le rire et la dérision. À travers ce texte, l’auteur cherche à faire prendre conscience et à éclairer le lecteur.
2. **La tonalité didactique :** Un texte a une tonalité didactique lorsque le lecteur reçoit un enseignement, c’est-à-dire que le texte lui apporte de la connaissance, l’éduque ou l’informe méthodiquement.
3. **La tonalité pathétique :** Un texte a une tonalité pathétique lorsqu’il attire la compassion du lecteur, c’est-à-dire que dans le texte l’auteur décrit des faits et des souffrances qui font pitié et inspirent la douleur.
4. **La tonalité lyrique :** Un texte a une tonalité lyrique lorsque l’auteur met en évidence ses propres sentiments intimes. Cette tonalité se caractérise par l'emploi fréquent de la première personne (« je »), les marques de l'affectivité et l'expression poétique des émotions.
5. **La tonalité comique :** C’est lorsque le texte provoque directement le rire ou le sourire chez le lecteur. Cette tonalité est particulièrement présente dans les textes théâtraux (comédies, farces, jeux de mots, quiproquos).
6. **La tonalité polémique :** Un texte a une tonalité polémique lorsqu’il confronte violemment deux idées contradictoires et que l'auteur attaque vigoureusement son adversaire pour réfuter sa thèse.
7. **La tonalité réaliste :** Elle vise à présenter, sans souci d'embellissement artificiel, les éléments qui appartiennent à l'univers du réel quotidien. *Indices :* Lexique à effet de réel, détails concrets, éléments bruts de la société et de la nature.
8. **La tonalité fantastique :** Elle naît de l'intrusion ou de la pénétration brutale de l'irrationnel et du surnaturel dans la vie réelle. Elle s'établit donc à la frontière incertaine du réel et de l'irréel, provoquant le doute et l'angoisse.
9. **La tonalité épique :** Inspirée des grandes épopées grecques et latines de l'Antiquité, elle vise à grandir et à exalter les actions des personnages en insistant sur leur bravoure surhumaine, leur héroïsme et la dimension collective du combat.
10. **La tonalité ironique :** Elle vise à dire le contraire de ce que l'on pense dans une perspective de moquerie ou de raillerie. Elle tourne en dérision une attitude ou un fait en créant une complicité critique avec le lecteur.
11. **La tonalité tragique :** Elle naît de la conjonction de deux éléments fondamentaux : la mort inéluctable d’un personnage et le poids écrasant du destin (la fatalité contre laquelle les efforts humains sont vains). *Indices :* Champ lexical de la souffrance, du désespoir, de la faute et de la mort.

---

## III. LA FOCALISATION (LE POINT DE VUE NARRATIF)

### DÉFINITION
La **focalisation**, encore appelée **point de vue narratif**, c’est l’angle sous lequel le narrateur raconte une histoire et filtre les informations transmises au lecteur. On distingue ainsi trois types fondamentaux de focalisation :

### 1. La Focalisation Zéro (ou Point de vue omniscient)
On dit qu’un texte est écrit en focalisation zéro lorsque le narrateur connaît **tout** de l’histoire : le passé, le présent, l'avenir des personnages, leurs pensées les plus secrètes, leurs motivations intimes et leur façon d’agir.
* **Extrait officiel :**  
  > « Le père Goriot, vieillard de soixante-neuf ans environ, s’était retiré chez madame Vauquer, en 1813, après avoir quitté les affaires. Il y avait d’abord pris l’appartement occupé par madame Couture, et donnait alors douze cents francs de pension, en homme pour qui cinq louis de plus ou de moins étaient une bagatelle. Madame Vauquer avait rafraîchi les trois chambres de cet appartement moyennant une indemnité préalable qui paya, dit-on, [...] »  
  — Honoré de Balzac, *Le Père Goriot*
* **Analyse :** Dans ce texte, l’auteur laisse peu de place à l’imagination du lecteur : il donne tous les éléments sur les personnages, leur âge, l’endroit où ils habitent, leur histoire antérieure, le montant précis du loyer...

### 2. La Focalisation Externe (ou Point de vue objectif)
En focalisation externe, le narrateur se place en **observateur neutre et extérieur** (comme une caméra témoin). Il rapporte uniquement ce qu’il voit et ce qu’il entend, l’action telle qu’elle se passe, sans jamais avoir accès aux pensées ni aux intentions intérieures des personnages. Cette façon de procéder laisse une grande part à l’imagination et à l'interprétation du lecteur.
* **Extrait officiel :**  
  > « L’un venait de la Bastille, l’autre du Jardin des Plantes. Le plus grand, vêtu de toile, marchait le chapeau en arrière, le gilet déboutonné et sa cravate à la main. Le plus petit, dont le corps disparaissait dans une redingote marron, baissait la tête sous une casquette à visière pointue. Quand ils furent arrivés au milieu du boulevard, ils s’assirent à la même minute, sur le même banc. »  
  — Gustave Flaubert, *Bouvard et Pécuchet*
* **Analyse :** Ici, l’auteur nous donne un strict minimum d’informations : il se contente de rapporter les apparences physiques, les gestes et les déplacements visibles de l'extérieur.

### 3. La Focalisation Interne (ou Point de vue subjectif)
En focalisation interne, le narrateur se glisse dans la peau d’**un personnage particulier** pour filtrer l'histoire à travers son regard. Il décrit alors ce que voit, entend, ressent et pense uniquement ce personnage-là.
* **Extrait officiel :**  
  > « Frédéric, en face, distinguait l’ombre de ses cils. Elle trempait ses lèvres dans son verre, cassait un peu de croûte entre ses doigts ; le médaillon de lapis-lazuli, attaché par une chaînette d’or à son poignet, de temps à autre sonnait contre son assiette. Ceux qui étaient là, pourtant, n’avaient pas l’air de la remarquer. [...] »  
  — Gustave Flaubert, *L’Éducation sentimentale*
* **Analyse :** Ici, l’auteur se glisse dans la conscience de Frédéric Moreau pour rapporter ses émotions amoureuses et ses observations subjectives centrées sur Madame Arnoux.

---

## IV. LES CONNECTEURS LOGIQUES

Tableau synthétique des connecteurs indispensables pour organiser et réussir la dissertation littéraire et le commentaire composé :

| Catégorie | Rôle / Fonction | Principaux connecteurs à employer |
| :--- | :--- | :--- |
| **Connecteurs de but** | Exprimer l’objectif ou l’intention d’une action | « Afin de », « à cette fin », « dans ce but », « pour cela », « afin que », « pour que », « dans l’optique de », « en vue de » |
| **Connecteurs de cause** | Indiquer la raison ou l’origine explicative d’un fait | « Parce que », « car », « à force de », « en raison de », « faute de », « comme », « du fait que », « étant donné que », « puisque », « sous prétexte que », « attendu que », « c’est que », « grâce à », « à cause de » |
| **Connecteurs de conséquence** | Exprimer le résultat ou la conclusion d’un fait | « Ainsi », « alors », « c’est pourquoi », « dès lors », « d’où », « par conséquent », « de sorte que », « de telle manière que », « si bien que », « à un tel point que », « jusqu’à ce que », « faute de quoi », « de ce fait », « ce qui explique pourquoi » |
| **Connecteurs d’opposition** | Exprimer une idée contraire ou nuancer un propos | « Mais », « toutefois », « cependant », « par contre », « néanmoins », « à l’opposé », « au contraire », « d’ailleurs », « du reste », « en revanche », « pourtant », « au demeurant », « du moins », « alors que », « même si », « nul doute que », « quand bien même », « quoique », « tandis que », « en admettant que », « au lieu que », « malgré », « en dépit de », « à l’exception de », « Il est certain que… mais il faut aussi noter que », « Bien que… il n’en demeure pas moins que », « Certes… mais », « Il est vrai que… mais » |
| **Connecteurs de synthèse / de transition** | Résumer ou introduire une conclusion partielle | « De ce qui précède, nous pouvons retenir que », « À mi-parcours de notre réflexion, retenons que », « Résumons-nous pour dire que », « Tout cet ensemble justifie l’idée selon laquelle », « À ce niveau de notre réflexion, notons que » |
| **Connecteurs d’explication / de reformulation** | Clarifier, préciser ou reformuler une idée | « En effet », « en clair », « en fait », « en réalité », « plus exactement », « notons que », « soulignons que », « précisons que », « en d’autres termes », « mieux », « autrement dit », « c’est-à-dire », « il apparaît donc que », « pour dire que », « ce qui signifie que », « ce qui sous-entend que », « il faut entendre par là que », « tout le sens de cette pensée est que », « on retient de cette pensée que », « cette affirmation révèle que », « de cette pensée, il en découle que » |
| **Connecteurs d’énumération** | Structurer et ordonner les idées dans un discours | « D’abord… ensuite… de plus… enfin… », « Premièrement… deuxièmement… troisièmement… », « En premier lieu… en second lieu… en dernier lieu… », « D’une part… d’autre part… », « Aussi… en outre… par ailleurs… » |
| **Connecteurs d’illustration / d’exemple** | Introduire un exemple ou une illustration concrète | « Nous pouvons citer par exemple », « C’est le cas de », « Citons en particulier », « En l’occurrence », « Illustrons-nous à travers le cas de », « En guise d’illustration, nous pouvons citer », « Corroborons nos propos avec » |
| **Connecteurs d’appui / de citation d’auteur** | Introduire ou appuyer une citation ou une opinion | « C’est justement ce que pense… », « C’est à juste titre que… affirme ceci », « C’est dans cette optique que… affirme ceci », « … s’inscrit dans cette vision des choses quand il affirme ceci », « … n’a donc pas tort d’affirmer que », « C’est ce que pense… » |
| **Connecteurs de conclusion** | Clôturer ou terminer une réflexion générale | « En conclusion », « En définitive », « Pour finir », « En somme », « En guise de conclusion », « Pour conclure », « Au final », « Pour mettre un terme à notre réflexion », « Au terme de notre analyse », « Au crépuscule de notre réflexion », « Au terme de notre investigation », « Finalement » |
| **Connecteurs d’additions** | Ajouter un nouvel argument ou une idée supplémentaire | « De plus », « en outre », « également », « de surcroît », « par ailleurs » |

---

## V. SÉMANTIQUE – SENS ET RELATIONS

Tableau exhaustif des 26 notions de sémantique littéraire au programme :

| Notion | Définition précise | Exemple canonique |
| :--- | :--- | :--- |
| **Polysémie** | Propriété d'un mot qui possède plusieurs sens différents selon le contexte | « Feuille » (d'arbre / de papier) |
| **Champ sémantique** | Ensemble des sens et acceptions que peut prendre un même mot | « Chien » → animal domestique / personne méprisable / cran d'arme à feu |
| **Champ lexical** | Ensemble de mots de natures différentes renvoyant à une même idée ou à un même thème | « Courir, sauter, marcher » → activité physique |
| **Sens propre** | Sens premier, littéral ou le plus courant d’un mot | « Courir » → se déplacer rapidement à pied |
| **Sens figuré** | Usage imagé ou métaphorique d’un mot par transfert de sens | « Cœur de pierre » → personne insensible |
| **Mots mélioratifs** | Vocabulaire laudatif exprimant un jugement favorable ou valorisant | « Brillant, talentueux, admirable » |
| **Mots péjoratifs** | Vocabulaire dépréciatif exprimant un jugement défavorable ou négatif | « Médiocre, nul, vulgaire » |
| **Énoncé explicite** | Énoncé clairement et littéralement formulé, sans ambiguïté | « Il fait froid » |
| **Énoncé implicite** | Énoncé sous-entendu qui nécessite une interprétation du récepteur | « Il frissonne » → suggère implicitement qu'il a froid |
| **Dénotation** | Sens premier, objectif, stable et partagé par tous (définition du dictionnaire) | « Chat » = petit félin domestique |
| **Connotation** | Sens secondaire, subjectif, affectif ou culturel qui s'ajoute au sens premier | « Chat » → agilité, mystère, douceur, indépendance |
| **Synonyme** | Mots ou expressions de même classe grammaticale ayant un sens très proche | « Fatigué » / « Épuisé » |
| **Antonyme** | Mots de sens contraire | « Grand » / « Petit » |
| **Homonyme** | Mots phonétiquement identiques ou graphiquement identiques mais de sens différent | « Mer » / « Mère » / « Maire » |
| **Paronyme** | Mots phonétiquement très proches, différant d'un seul phonème | « Conjecture » (supposition) / « Conjoncture » (situation économique) |
| **Mots de même famille** | Mots partageant le même radical étymologique | « Pauvre » → « appauvrir », « appauvrissement », « pauvreté » |
| **Hyperonyme** | Mot générique dont le sens englobe celui d’autres mots plus spécifiques | « Animal » → hyperonyme de « chat » et « chien » |
| **Hyponyme** | Mot spécifique dont le sens est compris dans un mot plus générique | « Chat » → hyponyme de « animal » |
| **Homographes non homophones** | Mots écrits exactement de la même manière, mais prononcés différemment et de sens distincts | « Les poules du couvent » / « Elles couvent leurs œufs » |
| **Mot polysémique dans contexte** | Le contexte d'énonciation détermine et précise le sens actualisé d’un mot polysémique | « Feuille » → arbre ou copie d'examen selon la phrase |
| **Figures de style liées au sens** | Procédés modifiant la relation de sens habituelle (métaphore, métonymie, antonomase) | « Un cœur de pierre » (métaphore modifiant le sens de pierre) |
| **Synonymie partielle** | Mots de sens très proches mais non interchangeables dans tous les contextes | « Maison » / « Demeure » (registres et nuances distincts) |
| **Antonymie graduelle** | Opposition par degrés intermédiaires mesurables | « Grand » / « Moyen » / « Petit » ; « Brûlant » / « Tiède » / « Glacé » |
| **Antonymie complémentaire** | Opposition binaire totale et sans intermédiaire (l'un exclut rigoureusement l'autre) | « Vivant » / « Mort » ; « Vrai » / « Faux » |
| **Antonymie réciproque** | Relation d'opposition impliquant une inversion de point de vue ou de rôle | « Acheter » / « Vendre » ; « Prêter » / « Emprunter » |
| **Connotation affective (positive / négative / neutre)** | Valeur affective ou émotionnelle prise par le mot selon le registre | « Enfant » (neutre/affectueux) / « Gamin » / « Mioche » (dépréciatif) |
| **Étymologie et sens historique** | Origine d'un terme et transformation de sa signification à travers les siècles | « Idiot » (du grec *idios* = particulier/isolé, ayant évolué vers un sens péjoratif) |
| **Champ sémantique restreint / étendu** | Étendue du spectre de significations d'un mot | « Meuble » (champ restreint) vs « Objet » (champ étendu) |
| **Mots polysémiques contextuels** | Variation du sens d'un terme selon le registre technique ou littéraire | « Banque » → organisme financier / banquette / rive fluviale |
| **Famille de mots étendue** | Dérivation morphologique large autour d'une racine | « Écrire » → « écrivain », « écriture », « réécriture », « scribe » |
| **Nuances de sens** | Différences subtiles d'intensité ou de nuance entre termes voisins | « Aimer » / « Adorer » ; « Maison » / « Demeure » / « Habitation » |`
  },
  {
    id: 'fr-chapitre-5-methodologie-et-applications',
    discipline: 'francais',
    disciplineLabel: 'Français & Méthodologie',
    pageRange: 'p. 25 - 37',
    title: 'Chapitre 5 : Méthodologies Complètes & Devoirs Entièrement Rédigés',
    summary: 'Dissertation littéraire (canevas passe-partout + sujet corrigé du théâtre comique), Commentaire composé (grille, barème + poème Mukala Kadima N\'zuji rédigé + poème Zadi Zaourou rédigé), Résumé de texte et Production écrite (banque d\'arguments par thèmes sociaux).',
    keywords: ['methodologie dissertation francaise', 'commentaire compose', 'gorge de sang', 'mukala kadima', 'fer de lance', 'zadi zaourou', 'resume de texte', 'production ecrite'],
    contentMarkdown: `# CHAPITRE 5 : MÉTHODOLOGIE ET APPLICATIONS CORRIGÉES

## I. Méthodologie de la Dissertation Littéraire
- **Travail préliminaire :** Analyse contextuelle du sujet, délimitation du problème central, formulation des deux axes dialectiques (Thèse / Antithèse).
- **Modèle d'Introduction passe-partout :**
  > *« Depuis toujours, la littérature accompagne l'homme dans sa vie et dans ses difficultés. À ce sujet, [Auteur/Critique] affirme que [Thèse]. Autrement dit, [Reformulation]. Cette affirmation pose alors le problème de [Problématique]. Pour y répondre, nous montrerons d'abord [Axe 1 : Thèse], puis nous analyserons [Axe 2 : Antithèse]. »*
- **Sujet d'application rédigé :** *« Au théâtre, point n'est besoin de réfléchir, de penser. Tout est dans l'hilarité. » Expliquez et discutez.*
  - *Thèse :* Le théâtre au service du rire et du divertissement (*On se chamaille pour un siège* de Hyacinthe Kakou, *Le Malade imaginaire* de Molière).
  - *Antithèse :* Le théâtre comme miroir critique et éveil des consciences (*Trois prétendants... un mari* d'Oyono Mbia, *Une saison au Congo* de Césaire, *L'Ordonnance* de Soro Guefala).

---

## II. Méthodologie du Commentaire Composé & Applications
- **Barème officiel (20 pts) :** Organisation des idées (6 pts), Compréhension du sujet (6 pts), Langue et expression (6 pts), Présentation de la copie (2 pts).
- **Application 1 (Poésie tragique de guerre) :** *« Gorgé de sang »* de Mukala Kadima N'zuji (*Redire les mots anciens*, 1977).
  - *Axe 1 :* Les conséquences apocalyptiques de la guerre sur les êtres humains (hécatombe, violence physique, détresse morale, répétition obsédante du mot « sang », anaphores de « tombent » et « crient »).
  - *Axe 2 :* Les conséquences désastreuses sur la nature (terre calcinée, forêts obscures, personnification des « soleils crispés »).
- **Application 2 (Poésie épique de combat) :** *« Fer de lance »* de Bottey Zadi Zaourou (2002).
  - *Axe 1 :* L'hostilité et la cruauté de la nature (métaphore des fauves, soleil accablant, hivernages rudes, tonnerre menaçant).
  - *Axe 2 :* La farouche détermination et la stature surhumaine des guerriers (hyperboles épiques, oxymore du *« cœur de granit »*, génies infernaux invulnérables sur le chemin de la gloire).

---

## III. Résumé de Texte & Production Écrite
- **Les 11 règles d'or du résumé :** Suivre l'ordre sans inverser, réduire au tiers sans utiliser « selon l'auteur », respecter scrupuleusement la marge de mots (± 10%), conserver les mots-clés sans paraphraser.
- **Production écrite - Banque d'arguments thématiques :**
  - *Éducation :* Atout d'émancipation et de civisme / Obstacles ruraux et financiers / Solutions d'investissement et formation.
  - *Jeunesse :* Dynamisme entrepreneurial / Chômage et tentation d'exode / Politiques d'insertion.
  - *Pauvreté :* Causes d'accès inéquitable / Conséquences sanitaires et déscolarisation / Solutions d'industrialisation et de redistribution.
  - *Réseaux sociaux :* Communication rapide et opportunités professionnelles / Cyberharcèlement, fake news et isolement social.
  - *Immigration :* Causes économiques et climatiques / Enjeux de fuite des cerveaux et intégration.
  - *Paix :* Condition sine qua non du progrès / Menaces de conflits communautaires et mauvaise gouvernance.
  - *TIC :* Dématérialisation et commerce en ligne / Cybercriminalité et dépendance numérique.
  - *Pollution :* Rejets industriels et plastiques / Réchauffement climatique et mesures d'économie circulaire.
  - *MST & Drogue :* Éducation sanitaire en milieu scolaire, suivi addictologique et application des lois pénales.`
  },
  {
    id: 'fr-chapitre-6-citations-resumes-et-40-sujets',
    discipline: 'francais',
    disciplineLabel: 'Français & Dissertation',
    pageRange: 'p. 38 - 46',
    title: 'Chapitre 6 : Citations Commentées, Fiches d\'Œuvres & 40 Sujets types Bac',
    summary: 'Répertoire intégral de citations expliquées (Poésie, Roman, Théâtre), résumés littéraires canoniques et fiches de problématisation complète des 40 sujets d\'examen.',
    keywords: ['citations francais', 'resumes oeuvres litteraires', 'sujets dissertation bac', '40 sujets francais', 'plan dialectique'],
    contentMarkdown: `# CHAPITRE 6 : CITATIONS EXPLIQUÉES, RÉSUMÉS D'ŒUVRES ET 40 SUJETS DE DISSERTATION

## I. Citations Littéraires Majeures Expliquées
- **Poésie engagée :**
  - Lamartine : *« La mission de la poésie est de suivre la pente des institutions et de la presse, de se faire peuple... »*
  - Aimé Césaire : *« Nous vous haïssons vous et votre raison... »* (Rejet de la rationalité instrumentale coloniale).
  - Paul Éluard : *« La poésie doit servir. Elle est une arme, un outil. »*
- **Poésie esthétique et évasive :**
  - Théophile Gautier : *« Sculpte, lime, cisèle... »*
  - Paul Verlaine : *« De la musique avant toute chose... »*
  - Madame de Staël : *« La poésie doit être le miroir terrestre de la divinité... »*
- **Roman engagé :**
  - Ousmane Sembène : *« Le roman est une école du peuple. »*
  - Jean-Paul Sartre : *« L'écrivain avec sa plume, c'est comme un soldat avec son arme. »*
  - Stendhal : *« Le roman est un miroir que l'on promène le long d'un chemin. »*
- **Théâtre :**
  - Antonin Artaud : *« L'action du théâtre comme celle de la peste est bienfaisante, car poussant les hommes à se voir tels qu'ils sont... »*
  - Bertolt Brecht : *« Le théâtre n'a qu'un seul but, c'est de divertir les hommes. »*
  - Jean-Louis Barrault : *« Le théâtre est le premier sérum que l'homme ait inventé pour se protéger de la maladie de l'angoisse. »*

---

## II. Les 40 Sujets de Dissertation Littéraire Décortiqués
Chaque sujet du guide est analysé avec **Reformulation**, **Problème central**, **Thèse (Axe 1)** et **Antithèse (Axe 2)** :
- **Sujet 1 (Barthes) :** Le chant du poète face à la douleur et aux tourments du monde.
- **Sujet 2 (Engagement) :** *« La littérature vous jette dans la bataille... »* (Littérature arme de liberté vs divertissement esthétique).
- **Sujet 3 (Jules Verne) :** L'évasion spatio-temporelle vs la fonction cognitive et d'apprentissage.
- **Sujet 4 (Jean Vilar) :** Le théâtre comme nécessité vitale de l'être humain vs simple loisir élitiste.
- **Sujet 5 (Lyrisme intime) :** Refus de parler de soi-même en poésie : le chant du "Moi" vs la tribune sociale universelle.
- **Sujet 6 (Maupassant) :** Le roman pour faire penser et déchiffrer le monde vs le plaisir récréatif de l'intrigue.
- **Sujet 7 (Conscience révolutionnaire) :** Défense exclusive d'une cause politique vs autonomie du Beau artistique.
- **Sujet 8 (L'art de mentir) :** Fiction romanesque et mensonge esthétique vs ancrage dans le réel documentaire.
- **Sujet 9 (Écrire, c'est mentir) :** L'invention créatrice transfigurant le monde vs le dévoilement des vérités humaines.
- **Sujet 10 (Camus) :** Le devoir envers les opprimés de l'histoire vs la création gratuite d'harmonie.
- **Sujet 11 (Mongo Beti) :** La littérature africaine comme instrument de libération des peuples.
- **Sujet 12 (Apedo-Amah) :** Le poète brisant les hypocrisies de la société vs la recherche de pureté mélodieuse.
- **Sujet 13 (Camara Nangala) :** Le regard critique porté sur les dysfonctionnements sociétaux.
- **Sujet 14 (Michel Raimond) :** Les prestiges de l'imaginaire dans le succès du roman.
- **Sujet 15 (Théâtre et mouchoir) :** Purgation des émotions (catharsis, larmes) vs dénonciation politique et satire sociale.
- **Sujet 16 (Le bâton de l'aveugle) :** L'écrivain comme guide contre la soumission et l'ignorance.
- **Sujet 17 (Cocteau) :** La poésie comme dévoilement du réel et regard neuf sur les objets familiers.
- **Sujet 18 (Stendhal - miroir de route) :** Réflexion fidèle de la réalité vs transfiguration imaginaire.
- **Sujet 19 (Goncourt - créer des êtres vivants) :** Réalisme psychologique des personnages vs créatures fabuleuses.
- **Sujets 20 à 40 :** Exploration approfondie des controverses littéraires (Césaire, Sartre, Troyat, Mauriac, Vigneault, Neruda, Baudelaire, Hugo, Christine Orban).`
  },

  // =========================================================================
  // 2. PHILOSOPHIE (PAGES 48 À 78)
  // =========================================================================
  {
    id: 'philo-methodologie-dissertation-et-commentaire',
    discipline: 'philosophie',
    disciplineLabel: 'Philosophie',
    pageRange: 'p. 48 - 53',
    title: 'Méthodologie de la Dissertation et du Commentaire Philosophique avec Corrigés Types',
    summary: 'Étude parcellaire rigoureuse, construction canonique du problème et des deux aspects, techniques d\'introduction et de conclusion, corrigé modèle intégral du sujet sur l\'extinction de la philosophie et commentaire intégral du texte de David Hume sur la société.',
    keywords: ['methodologie dissertation philosophie', 'commentaire de texte philosophique', 'extinction de la philosophie', 'david hume traite de la nature humaine', 'etude ordonnee', 'interet philosophique'],
    contentMarkdown: `# MÉTHODOLOGIE PHILOSOPHIQUE OFFICIELLE & APPLICATIONS CORRIGÉES

## I. Méthodologie de la Dissertation Philosophique (Page 48)
1. **Étapes du travail préliminaire :**
   - *Définition contextuelle des termes :* Cerner le sens philosophique précis de chaque concept.
   - *Reformulation :* Exprimer fidèlement le sens avec ses propres mots sans le dénaturer.
   - *Problématisation canonique :*
     - **Le Problème :** Une question centrale courte révélant la tension fondamentale.
     - **Les Aspects :** Deux questions secondaires directes articulées par *« dans quelle mesure... ?, toutefois, ... ? »*.
2. **Techniques de conclusion en trois temps :** Bilan de la thèse, apport de l'antithèse, prise de position équilibrée portant sur le bonheur, la liberté, la vérité ou la dignité humaine.

---

## II. Sujet Modèle Rédigé : « Faut-il envisager l'extinction de la philosophie dans l'ordonnancement du savoir et de l'existence ? » (Pages 49-50)
- **Étude parcellaire :**
  - Philosophie = quête critique de sagesse et de vérité.
  - Extinction = disparition, suppression de son rôle.
  - Ordonnancement = organisation et hiérarchisation des savoirs et de la vie.
- **Problème central :** *Peut-on se passer de la philosophie ?*
- **Aspects :** *Dans quelle mesure la philosophie pourrait-elle s'effacer de l'ordonnancement du savoir et de la vie humaine ?, toutefois, n'est-elle pas irréductiblement indispensable à l'élaboration de la pensée et à l'existence ?*
- **Développement rédigé :**
  - *Axe 1 (Thèse) :* La philosophie semble vaine et dépassable (ne résout pas les problèmes pratiques - Marx ; ne donne pas de résultats apodictiques - Jaspers ; source de divergences insolubles).
  - *Axe 2 (Antithèse) :* La philosophie est le fondement irremplaçable du savoir et de la dignité (éveil critique - Descartes ; racines de l'arbre du savoir - Descartes ; boussole morale guidant l'âme - Sénèque).

---

## III. Méthodologie du Commentaire de Texte Philosophique & Application (Pages 51-53)
1. **Grille de lecture :** Thème, Problème, Thèse, Antithèse, Intention (but immédiat), Enjeu (but lointain), Structure logique en mouvements.
2. **Étude ordonnée vs Intérêt philosophique (Critique interne & externe).**
3. **Application Corrigée Intégrale :** Texte de David Hume (*Traité de la nature humaine* sur la faiblesse biologique de l'homme et le rôle compensateur de la société).
   - *1er Mouvement (L1 à L7) :* L'homme est écrasé par la disproportion entre ses besoins immenses et la faiblesse de ses moyens naturels.
   - *2e Mouvement (L8 à L13) :* La société seule supplée à ses infirmités, décuple ses facultés et assure son bonheur.
   - *Critique externe :* Prolongement avec Aristote (*l'animal politique*) et nuance critique avec Durkheim (contrainte sociale) et Freud (agressivité et malaise dans la civilisation).`
  },
  {
    id: 'philo-corpus-arguments-et-citations-notions',
    discipline: 'philosophie',
    disciplineLabel: 'Philosophie',
    pageRange: 'p. 54 - 78',
    title: 'Corpus Exhaustif d\'Arguments, Explications et Citations par Notions (17 Chapitres)',
    summary: 'Tableau bilatéral complet Thèse / Antithèse avec explications conceptuelles et citations authentiques vérifiées pour toutes les notions du programme officiel.',
    keywords: ['conscience', 'inconscient', 'memoire', 'oubli', 'liberte', 'violence', 'societe', 'autrui', 'etat', 'loi', 'droit et justice', 'religion', 'atheisme', 'foi et raison', 'humanite', 'progres technique', 'travail', 'art', 'desir', 'langage', 'verite'],
    contentMarkdown: `# CORPUS DOCTRINAL PHILOSOPHIQUE — NOTIONS DU PROGRAMME

## 1. La Conscience & L'Inconscient (p. 54-55, 70)
- **Thèse : La conscience définit l'homme et fonde sa dignité :**
  - Prouve l'existence indubitable : Descartes (*Discours de la méthode*) : *« Je pense, donc je suis. »*
  - Conscience morale innée : Rousseau (*Émile*) : *« Conscience ! Conscience ! Juge infaillible du bien et du mal... »*
  - Conservation du passé et mémoire : Bergson (*L'Énergie spirituelle*) : *« Toute conscience signifie choix et mémoire. »*
- **Antithèse : L'inconscient limite la souveraineté de la conscience :**
  - Le Moi détrôné : Freud (*Introduction à la psychanalyse*) : *« Le moi n'est pas maître dans sa propre maison. »*
  - Les petites perceptions imperceptibles : Leibniz (*Nouveaux essais*).
  - Déterminisme caché : Spinoza (*Éthique*) : *« Les hommes se croient libres parce qu'ils sont conscients de leurs actions et ignorants des causes qui les déterminent. »*
  - Objection existentialiste : Sartre (*L'Être et le Néant*) : *« L'inconscient est une manière de se mentir à soi-même (mauvaise foi). »*

## 2. Oubli et Mémoire (p. 56, 74)
- **L'oubli est nécessaire à la vie :**
  - Libération du poids du passé : Rousseau (*Julie ou la Nouvelle Héloïse*) : *« Ce n'est point le présent que je crains, c'est le passé qui me tourmente. »*
  - Savourer l'instant présent : Nietzsche (*Considérations inactuelles*) : *« Sans l'oubli, l'homme ne peut savourer l'instant présent. »*
  - Mécanisme de défense psychologique : Freud (*Psychopathologie de la vie quotidienne*).
  - Condition du pardon politique : Paul Ricœur (*La mémoire, l'histoire, l'oubli*).
- **La mémoire est indispensable :**
  - Éviter la répétition des erreurs historiques : George Santayana : *« Ceux qui ne peuvent se souvenir du passé sont condamnés à le répéter. »*
  - Cohésion sociale et identité collective : Bergson ; Gusdorf : *« Oublier, c'est trahir. »*

## 3. La Liberté (p. 56-57, 73)
- **La liberté est une réalité fondamentale :**
  - Évidence immédiate de la volonté : Descartes (*Principes de la philosophie*) : *« La liberté de notre volonté se connaît sans preuve. »*
  - Condamnation ontologique à la liberté : Sartre (*L'existentialisme est un humanisme*) : *« L'homme est condamné à être libre. »*
  - Conscience du choix actif : Bergson (*Essai sur les données immédiates*).
- **La liberté est une illusion :**
  - Déterminisme des lois naturelles et pulsionnelles : Spinoza (*Lettre à Schuller* sur la pierre qui roule).
  - Aliénation politique et sociale : Bakounine (*Étatisme et anarchie*) : *« L'État est un vaste cimetière où viennent s'enterrer toutes les manifestations de la liberté individuelle. »*
  - Soumission aux lois : Rousseau (*Du contrat social*) : *« L'homme est né libre, et partout il est dans les fers. »*

## 4. La Violence (p. 57, 73)
- **La violence est naturelle ou nécessaire :**
  - Pulsion agressive innée : Konrad Lorenz (*De l'agression*) ; Freud (*Malaise dans la civilisation*) : *« L'homme porte en lui une bonne somme d'agressivité. »*
  - État de nature belliqueux : Hobbes (*Léviathan*) : *« L'homme est un loup pour l'homme. »*
  - Moteur de l'histoire et des révolutions : Marx (*Le Capital*) : *« La violence est l'accoucheuse de toute vieille société qui en porte une nouvelle dans ses flancs. »*
- **La violence est culturelle et illégitime :**
  - Dégradation morale : François Héritier (*De la violence*) ; Rousseau (*Discours sur l'inégalité*).
  - Négation de la dignité humaine : Hannah Arendt (*De la violence*) : *« La violence détruit le pouvoir et humilie les hommes. »*
  - Force de l'âme et non-violence : Gandhi (*L'Autonomie de l'Inde*) : *« La violence est la loi de la brute. »*

## 5. La Société et Autrui (p. 58-59, 72)
- **Société naturelle vs conventionnelle :** Aristote (*Politique*) : *« L'homme est par nature un animal politique. »* vs Hobbes / Rousseau (*Du contrat social*).
- **Autrui : Richesse vs Menace :**
  - *Obstacle et aliénation :* Sartre (*Huis clos*) : *« L'enfer, c'est les autres »* et le regard objectivant (*L'Être et le Néant*).
  - *Médiateur indispensable :* Saint-Exupéry (*Terre des hommes*) : *« Si tu diffères de moi, loin de me léser, tu m'enrichis. »* ; Hegel (la reconnaissance mutuelle dans la *Phénoménologie de l'esprit*).

## 6. L'État, la Loi, le Droit et la Justice (p. 59-61, 73, 75)
- **L'État protecteur vs Léviathan oppresseur :** Spinoza (*Traité théologico-politique* : la fin de l'État est la liberté) vs Nietzsche (*Ainsi parlait Zarathoustra* : *« L'État est le plus froid des monstres froids »*).
- **La Loi garante de liberté :** Rousseau (*Lettres écrites de la montagne*) : *« Il n'y a point de liberté sans lois. »* vs Marx (instrument de la classe dominante).
- **La Justice équitable :** Aristote (*Éthique à Nicomaque*) : donner à chacun son dû proportionnel ; Montesquieu (*De l'esprit des lois*) : séparation impérative des pouvoirs exécutif, législatif et judiciaire.

## 7. Religion, Foi, Raison & Athéisme (p. 61-63, 75)
- **Opposition Foi / Raison :** Tertullien (*Je crois parce que c'est absurde*) ; Kant (limites de la raison théorique).
- **Complémentarité :** Jean-Paul II (*Fides et Ratio*) : *« La foi et la raison sont comme deux ailes sur lesquelles l'esprit humain s'élève vers la contemplation de la vérité. »* ; Thomas d'Aquin (*Somme théologique*).
- **Aliénation religieuse :** Karl Marx (*L'opium du peuple*) ; Freud (*L'Avenir d'une illusion*).

## 8. Travail, Technique et Art (p. 66-67, 74)
- **Travail :** Châtiment aliénant (Genèse, Marx) vs Facteur d'humanisation, de libération et de dignité (Hegel, Voltaire, Bernard Dadié dans *Climbié*).
- **Progrès technique :** Maîtrise de la nature (Descartes) vs Asservissement et déshumanisation (Rabelais, Jacques Ellul, Albert Einstein : *« comme une hache dans les mains d'un criminel »*).
- **Art :** Pureté esthétique et imitation (Platon, Oscar Wilde) vs Transfiguration de la souffrance et révolte humaine (Nietzsche : *« Nous avons l'art pour ne pas mourir de la vérité »* ; Malraux : *« L'art est un anti-destin »*).

## 9. Le Langage et la Vérité (p. 68-69, 77-78)
- **Langage :** Écrin fidèle de la pensée claire (Boileau, Hegel : *« C'est dans les mots que nous pensons »*) vs Limites incommensurables de l'indicible (Bergson, Wittgenstein : *« Les limites de mon langage signifient les limites de mon propre monde »*).
- **Vérité scientifique et mathématique :** Modèle de démonstration rationnelle absolue (Galilée, Descartes, Leibniz) vs Vérité faillible, relative et construite par l'effort expérimental (Karl Popper, Gaston Bachelard : *« Toute nouvelle vérité naît malgré l'évidence »* ; Claude Bernard).`
  },

  // =========================================================================
  // 3. GÉOGRAPHIE (PAGES 80 À 94)
  // =========================================================================
  {
    id: 'geo-economie-ivoirienne-et-coree-du-sud',
    discipline: 'geographie',
    disciplineLabel: 'Géographie Économique',
    pageRange: 'p. 80 - 91',
    title: 'Géographie Économique : Côte d\'Ivoire (Fondements, Secteurs, Problèmes/Solutions) & Corée du Sud',
    summary: 'Étude intégrale des atouts naturels, humains et politiques de la Côte d\'Ivoire, analyse détaillée des secteurs primaire, secondaire et tertiaire, diagnostic des faiblesses et solutions d\'émergence ; étude complète du modèle sud-coréen (des ruines de la guerre aux chaebols et à la 5e puissance nucléaire).',
    keywords: ['economie ivoirienne', 'cacao cafe', 'secteur informel', 'anader', 'cepici', 'industrie ivoirienne', 'coree du sud', 'chaebols', 'miracle du fleuve han', 'samsung', 'posco'],
    contentMarkdown: `# GÉOGRAPHIE ÉCONOMIQUE DE LA CÔTE D'IVOIRE ET DE LA CORÉE DU SUD

## I. Les Fondements de l'Économie Ivoirienne (Pages 80-81)
1. **Fondements naturels :**
   - *Relief :* Plaines littorales au Sud (favorable aux plantations de rente et aux métropoles), Plateaux au Centre/Nord (cultures vivrières et élevage), Massifs montagneux à l'Ouest (Mont Nimba 1752m, Tonkoui, mines et café d'altitude).
   - *Climat & Végétation :* Climat subéquatorial humide au Sud (forêt dense), tropical humide au Centre (savane préforestière), tropical sec au Nord (savane herbeuse, coton, anacarde).
   - *Sols :* Ferrallitiques profonds au Sud (cacao, café, hévéa), hydromorphes en basse côte (banane, palmier), ferrugineux au Nord.
   - *Sous-sol minier et énergétique :* Or (Ity, Tongon, Angovia, Bonikro), Manganèse (Bondoukou, Lauzoua), Nickel (Sipilou), Pétrole offshore et Gaz naturel (Jacqueville, blocs Baleine et Calao).
   - *Hydrographie :* Fleuves Comoé, Bandama, Sassandra, Cavally ; 560 km de façade maritime sur le Golfe de Guinée.
2. **Fondements humains et démographiques :**
   - Population d'environ 29 millions d'habitants, croissance de 3,8%/an.
   - Extrême jeunesse : plus de 77 % ont moins de 35 ans (réservoir dynamique de main-d'œuvre et vaste marché intérieur de consommation).
   - Apport déterminant de la main-d'œuvre étrangère sous-régionale (Burkina Faso, Mali, Guinée).
3. **Fondements politiques :**
   - Choix du libéralisme économique ouvert sur l'extérieur dès 1960 par Félix Houphouët-Boigny.
   - Rôle de l'État-planificateur : création des sociétés d'État (CAISTAB, SODEMI, SODESUCRE).
   - Dispositif moderne d'attractivité : Code des investissements avantageux, Guichet unique du CEPICI.

---

## II. Les Secteurs d'Activité Économique en Côte d'Ivoire (Pages 82-86)
- **Secteur Primaire (Moteur national : 30 à 33 % du PIB, 70 % des recettes d'exportation) :**
  - *Agriculture :* 1er producteur mondial de cacao (plus de 2 millions de tonnes), rang mondial pour le café, l'anacarde, l'hévéa et l'huile de palme. Encadrement : ANADER, CNRA, Conseil Café-Cacao.
  - *Pêche :* Ports autonomes d'Abidjan (1er port thonier d'Afrique) et de San-Pédro.
  - *Élevage :* Traditionnel au Nord (Korhogo, Ferké) et moderne périurbain (volailles, porcins).
  - *Forêt :* Couvert réduit à 2,5 millions d'ha (essences nobles : Iroko, Acajou, Bété, Samba).
- **Secteur Secondaire (Industrie : 18 à 20 % du PIB, 15 % des actifs) :**
  - Agroalimentaire (Nestlé, Solibra, Sania, Cemoi), Raffinage pétrolier (SIR à Abidjan), Textile (Uniwax), Cimenteries (CIMAF, LafargeHolcim).
- **Secteur Tertiaire :**
  - *Commerce & Secteur informel :* L'informel emploie plus de 60 % des actifs urbains.
  - *Transports :* Axe ferroviaire SITARAIL (Abidjan-Ouagadougou, 1159 km), autoroutes, aéroport international Félix Houphouët-Boigny.
  - *Tourisme :* Balnéaire (Bassam, Assinie), culturel (Yamoussoukro) et d'affaires (Abidjan).

---

## III. Problèmes et Solutions de l'Économie Ivoirienne (Pages 87-88)
- **Freins sectoriels et structurels :** Dépendance au binôme café-cacao, détérioration des termes de l'échange, déforestation, manque d'industrie lourde, chômage des jeunes, pression fiscale, corruption.
- **Solutions stratégiques :** Transformation locale des matières premières (broyage du cacao, transformation de l'anacarde), industrialisation durable, réhabilitation des pistes rurales, formation professionnelle adéquate.

---

## IV. La Corée du Sud : Modèle de Puissance Émergente (Pages 89-91)
1. **Contraintes initiales surmontées :**
   - Territoire exigu à 70 % montagneux (chaîne du Taebaek), sous-sol pauvre en minerais, dévastation de la guerre de Corée (1950-1953).
2. **Les facteurs du succès (« Le Miracle du fleuve Han ») :**
   - *Révolution éducative :* Alphabétisation passée de 22% à 88% dès 1970 ; culte confucéen de l'effort et du travail.
   - *L'État stratège et les Chaebols :* Partenariat étroit avec les conglomérats industriels familiaux (Samsung, Hyundai, LG, Daewoo, POSCO).
   - *Phases d'industrialisation :*
     - 1953-1961 : Substitution aux importations (textile, alimentation).
     - 1961-1973 : Promotion des exportations légères.
     - 1973-1980 : Industries lourdes (sidérurgie, chantiers navals d'Ulsan, chimie).
     - Depuis 1990 : Haute technologie, semi-conducteurs, 5e puissance mondiale de l'énergie nucléaire, leader mondial des TIC (4G/5G, IA).`
  },
  {
    id: 'geo-integration-regionale-cedeao-et-ue-acp',
    discipline: 'geographie',
    disciplineLabel: 'Géographie Internationale',
    pageRange: 'p. 92 - 94',
    title: 'Intégration Régionale & Coopération Nord-Sud : La CEDEAO et les Relations UE - ACP',
    summary: 'Analyse des traités, organes, réalisations concrètes (ECOMOG, Ecobank, passeport CEDEAO), défis monétaires et géopolitiques en Afrique de l\'Ouest ; dynamique historique des accords de Yaoundé, Lomé I-IV et Cotonou entre l\'Europe et les pays ACP.',
    keywords: ['cedeao', 'ecomog', 'ecobank', 'ue acp', 'accords de lome', 'accord de cotonou', 'stabex', 'sysmin', 'integration economique'],
    contentMarkdown: `# LA CEDEAO ET LES RELATIONS UE - ACP

## I. La CEDEAO (Communauté Économique des États de l'Afrique de l'Ouest) (Pages 92-93)
1. **Fondation et Cadre Institutionnel :**
   - Créée le **28 mai 1975** par le Traité de Lagos à l'initiative des présidents Yakubu Gowon (Nigeria) et Gnassingbé Eyadéma (Togo).
   - Siège : Abuja (Nigeria).
   - 15 États membres (après le retrait de la Mauritanie en 1999) répartis entre francophones (8), anglophones (5) et lusophones (2).
2. **Organes :**
   - Conférence des Chefs d'État et de gouvernement (organe suprême à présidence tournante).
   - Conseil des ministres, Commission de la CEDEAO (exécutif), Parlement communautaire, Cour de justice de la Communauté.
3. **Réalisations et Succès :**
   - *Politico-militaire :* Maintien de la paix via l'**ECOMOG** (interventions historiques au Libéria, en Sierra Leone, en Guinée-Bissau).
   - *Économique & Financier :* Fondation de la banque panafricaine **Ecobank**, projets d'interconnexion électrique et routière.
   - *Social :* Institution du **Passeport CEDEAO** consacrant la libre circulation des personnes et des biens sans visa.
4. **Limites et Défis :**
   - Faible volume des échanges intra-communautaires (inférieur à 10 %).
   - Pluralité de monnaies non convertibles (retard de la monnaie unique ECO).
   - Instabilité politique, résurgence des coups d'État et menace terroriste dans le Sahel.

---

## II. Les Relations UE - ACP : Modèle de Coopération Nord-Sud (Page 94)
1. **Présentation des Acteurs :**
   - **Union Européenne (UE) :** 27 États industrialisés, premier marché de consommation mondial.
   - **Groupe ACP (Afrique, Caraïbes, Pacifique) :** Fondé à Georgetown en 1975, rassemblant 79 pays en développement exportateurs de matières premières.
2. **Évolution des Accords de Partenariat :**
   - *Accords de Yaoundé I (1963) et II (1969) :* Coopération commerciale avec les 18 États africains associés (EAMA).
   - *Conventions de Lomé (Togo) :*
     - **Lomé I (1975) :** Accès préférentiel en franchise de douane pour les produits ACP et création du mécanisme **STABEX** (stabilisation des recettes d'exportation agricole).
     - **Lomé II (1979) :** Création du **SYSMIN** pour compenser les chutes des cours des produits miniers.
     - **Lomé III (1984) et Lomé IV (1989) :** Intégration des droits de l'homme et financement par la Banque Européenne d'Investissement (BEI) et le FED.
   - *Accord de Cotonou (23 janvier 2000, pour 20 ans) :*
     - Dialogue politique renforcé, bonne gouvernance, mise en place des Accords de Partenariat Économique (APE).
3. **Bilan Critique :**
   - *Points forts :* Débouchés stables, appui budgétaire, formation de cadres, aide humanitaire.
   - *Points faibles :* Maintien des pays ACP dans le rôle de fournisseurs de produits bruts, détérioration continue des termes de l'échange, endettement lourd et conditionnalités politiques strictes.`
  },

  // =========================================================================
  // 4. HISTOIRE (PAGES 96 À 126)
  // =========================================================================
  {
    id: 'hist-onu-et-relations-internationales-guerre-froide',
    discipline: 'histoire',
    disciplineLabel: 'Histoire des Relations Internationales',
    pageRange: 'p. 96 - 105',
    title: 'L\'ONU, la Guerre Froide (1947-1991), les Crises et l\'Ordre Mondial Contemporain',
    summary: 'Étude complète de la création de l\'ONU et de son bilan ; genèse de la bipolarisation (Truman, Marshall, Jdanov, Kominform) ; crises majeures (Berlin 1948 et 1961, Cuba 1962, Vietnam) ; effondrement de l\'URSS et transition du monde unipolaire au monde multipolaire (BRICS).',
    keywords: ['onu', 'guerre froide', 'bipolarisation', 'crise de berlin', 'pont aerien', 'mur de berlin', 'crise de cuba', 'guerre du vietnam', 'effondrement urss', 'monde multipolaire', 'brics'],
    contentMarkdown: `# L'ONU, LA GUERRE FROIDE ET LES MUTATIONS DU MONDE CONTEMPORAIN

## I. L'ONU (Organisation des Nations Unies) (Pages 96-97)
1. **Genèse :** Charte de l'Atlantique (1941) -> Déclaration de Washington (1942) -> Conférences de Moscou et Téhéran (1943) -> Dumbarton Oaks (1944) -> Yalta (1945) -> Adoption de la Charte à San Francisco (26 juin 1945). Entrée en vigueur le **24 octobre 1945** (siège à New York, 193 États membres).
2. **Organes directeurs :**
   - *Assemblée générale :* Délibérations démocratiques (1 État = 1 voix).
   - *Conseil de sécurité :* 5 membres permanents avec droit de veto (USA, Russie, Chine, France, Royaume-Uni) et 10 non-permanents élus pour 2 ans.
   - *Secrétariat général :* Dirigé par António Guterres.
   - *Cour Internationale de Justice (La Haye) & Conseil Économique et Social (ECOSOC).*
   - *Institutions spécialisées :* FMI, Banque Mondiale, UNESCO, OMS, FAO, HCR, UNICEF, PAM.
3. **Bilan global :**
   - *Succès :* Décolonisation, médiations pacifiques, missions des Casques bleus, programmes sanitaires mondiaux.
   - *Limites :* Blocages fréquents dus à l'abus du droit de veto, absence d'armée permanente propre, échecs tragiques (Génocide du Rwanda 1994, Srebrenica, guerres unilatérales).

---

## II. L'Ère de la Bipolarisation et de la Guerre Froide (1947-1991) (Pages 98-99)
- **Rupture de 1947 :**
  - Côté américain : **Doctrine Truman** (endiguement / *containment* du communisme, 12 mars 1947) et **Plan Marshall** (aide économique à la reconstruction européenne, 5 juin 1947).
  - Côté soviétique : **Doctrine Jdanov** (scission du monde en camp impérialiste vs camp anti-impérialiste, septembre 1947) et création du **Kominform** (octobre 1947).
- **Organisation et Fonctionnement des deux Blocs :**
  - *Bloc Occidental (Capitaliste) :* 
    - **Politique :** Politique d'endiguement (*containment*) annoncée le 12 mars 1947 pour freiner le communisme et soutenir les démocraties libérales.
    - **Militaire :** Alliances de sécurité collective : **OTAN** (4 avril 1949, Conseil de l'alliance et Comité militaire plaçant l'Europe sous le « parapluie atomique » US), **OTASE** (1954, Asie du Sud-Est), **ANZUS** (1951, Pacifique) et **CENTO** (1959, ex-Pacte de Bagdad, Moyen-Orient).
    - **Économique :** **OECE** (avril 1948) pour répartir l'aide du Plan Marshall, devenant l'**OCDE** (1961) pour consolider la coopération économique et le libre-échange.
  - *Bloc Oriental (Communiste) :* 
    - **Politique :** Doctrine Jdanov et **Kominform** (octobre 1947) pour coordonner les partis communistes et contrôler les démocraties populaires d'Europe de l'Est.
    - **Militaire :** **Pacte de Varsovie** (mai 1955, sauf Yougoslavie) sous commandement unique soviétique avec secrétariat permanent à Moscou ; accords bilatéraux avec la Chine (1950) et Cuba (1962).
    - **Économique :** **COMECON / CAEM** (janvier 1949) pour coordonner et planifier les économies des pays socialistes selon le modèle soviétique.

---

## III. Les Grandes Crises de la Guerre Froide (Pages 100-103)
1. **Première crise de Berlin (1948-1949) :**
   - Cause : Fusion des zones occidentales (Trizone) et création du Deutsche Mark.
   - Blocus soviétique terrestre total (24 juin 1948 - 12 mai 1949).
   - Riposte américaine : Pont aérien géant de 11 mois (275 000 vols, 2,5 millions de tonnes de fret).
   - Issue : Levée du blocus et scission définitive de l'Allemagne en deux États : **RFA** (Bonn, mai 1949) et **RDA** (Berlin-Est, octobre 1949).
2. **Deuxième crise de Berlin et le Mur (1958-1961) :**
   - Cause : Exode massif de plus de 3 millions de citoyens d'Allemagne de l'Est fuyant vers l'Ouest.
   - Construction du **Mur de Berlin** dans la nuit du 12 au 13 août 1961 (140 km d'enceinte, 302 miradors, 14 000 gardes armés).
3. **La Crise des Fusées de Cuba (Octobre 1962) :**
   - Révolution de Fidel Castro (1959), échec de l'invasion de la baie des Cochons (1961).
   - Découverte par les avions espions U2 de missiles nucléaires soviétiques installés à 150 km des côtes américaines.
   - Blocus maritime décrété par J.F. Kennedy (22 octobre 1962). Négociations et retrait des missiles soviétiques en échange du retrait des missiles Jupiter américains en Turquie.
   - Conséquence directe : Prise de conscience du péril thermo-nucléaire et inauguration de la **Coexistence pacifique** (Téléphone rouge, Traité de Moscou 1963, accords SALT I et II).
4. **La Guerre du Vietnam (1964-1975) :**
   - Refus des élections de Genève par le Sud soutenu par Washington (théorie des dominos).
   - Guérilla du Viêt-Cong soutenue par l'URSS et la Chine. Enlisement américain sous Johnson et Nixon malgré 7,8 millions de tonnes de bombes et l'agent orange.
   - Chute de Saïgon le 30 avril 1975 et réunification communiste du pays.

---

## IV. Fin de la Guerre Froide et Ordre Mondial Actuel (Pages 104-105)
- **Effondrement du bloc soviétique :** Accords d'Helsinki (1975), stagnation économique, réformes de Gorbatchev (*Glasnost* et *Perestroïka*, 1985), chute du Mur de Berlin (9 novembre 1989), dissolution du Pacte de Varsovie et disparition officielle de l'URSS le **25 décembre 1991**.
- **L'ère de l'hyperpuissance unipolaire américaine (1991-2001) :** « Gendarmes du monde », triomphe de la guerre du Golfe (1991), suprématie du dollar et américanisation culturelle.
- **Le monde multipolaire (Depuis 2001) :** Attentats du 11 septembre 2001, enlisement militaire en Irak et Afghanistan, émergence des **BRICS** (Brésil, Russie, Inde, Chine, Afrique du Sud), montée en puissance économique de la Chine, affirmation régionale de l'UE et de l'Afrique du Sud.`
  },
  {
    id: 'hist-decolonisation-afrique-et-algerie',
    discipline: 'histoire',
    disciplineLabel: 'Histoire de l\'Afrique',
    pageRange: 'p. 106 - 114',
    title: 'Décolonisation de l\'Afrique, Indépendance de la Côte d\'Ivoire, Guerre d\'Algérie & Mutations de la Civilisation Africaine',
    summary: 'Facteurs internes et externes de l\'éveil nationaliste africain ; étapes pacifiques de l\'émancipation ivoirienne (1944-1960) ; guerre d\'indépendance d\'Algérie (1954-1962) ; création de l\'Union Africaine (2002) ; étude comparative des civilisations occidentale et négro-africaine.',
    keywords: ['nationalisme africain', 'decolonisation cote d ivoire', 'felix houphouet boigny', 'saa', 'marche des femmes grand bassam', 'dimbokro 1950', 'decolonisation algerie', 'fln', 'accords d evian', 'union africaine', 'civilisation negro africaine'],
    contentMarkdown: `# DÉCOLONISATION AFRICAINE, HISTOIRE DE LA CÔTE D'IVOIRE ET CIVILISATIONS

## I. La Montée des Nationalismes en Afrique (Pages 106-107)
- **Facteurs internes :** Inégalités criantes du système colonial, travail forcé, impôt de capitation, dépossession des terres fertiles, émergence d'une élite africaine instruite à l'école des Blancs (Houphouët-Boigny, Senghor, Sékou Touré, Nkrumah).
- **Facteurs externes :** Choc de la 2nde Guerre mondiale brisant le mythe de l'invincibilité blanche, anticolonialisme proclamé des deux superpuissances (USA et URSS), tribune anticoloniale de l'ONU, conférence historique de **Bandung (1955)** consacrant l'éveil du Tiers-Monde.
- **Formes d'action :** Syndicats de lutte (Syndicat Agricole Africain SAA, UGTAN), partis politiques (PDCI-RDA, CPP de Nkrumah, Néo-Destour de Bourguiba, Istiqlal marocain), mouvements littéraires et culturels (Négritude, FEANF).

---

## II. L'Accession à l'Indépendance de la Côte d'Ivoire (1944-1960) (Pages 108-109)
1. **La période de l'Espoir (1944-1947) :**
   - Conférence de Brazzaville (janvier-février 1944) sous de Gaulle.
   - Création du Syndicat Agricole Africain (**SAA**) en août 1944 par Félix Houphouët-Boigny, Gabriel Dadié et Marcel Lauphoüet pour défendre les planteurs africains.
   - Victoires parlementaires de 1946 : **Abolition du travail forcé (loi Houphouët-Boigny du 11 avril 1946)**, loi Lamine Guèye (citoyenneté française), fondation du **PDCI** (avril 1946) et création du **RDA** à Bamako (octobre 1946).
2. **La période de Lutte et de Répression (1947-1950) :**
   - Apparentement tactique du RDA au Parti Communiste Français (PCF).
   - Répression féroce orchestrée par le gouverneur Laurent Élisée Péchoux : arrestations de dirigeants politiques, mutations forcées.
   - **Fusillade sanglante de Dimbokro (30 janvier 1950) :** 13 militants assassinés, plus de 50 blessés.
   - **Marche héroïque des femmes sur Grand-Bassam (24 décembre 1949) :** Mobilisation pacifique pour exiger la libération des détenus politiques.
3. **La collaboration jusqu'à l'Indépendance (1950-1960) :**
   - Désapparentement d'avec le PCF (octobre 1950) et alliance avec les partis modérés (UDSR de Mitterrand).
   - **Loi-cadre Defferre (23 juin 1956) :** Autonomie interne des territoires.
   - **Référendum de 1958 :** Vote « OUI » massif à la Communauté française, suivi de négociations pacifiques.
   - **Proclamation solennelle de l'Indépendance le 7 août 1960** par Félix Houphouët-Boigny.

---

## III. La Décolonisation de l'Algérie (1954-1962) (Page 110)
- **Contexte colonial inégalitaire :** 3 départements français annexés ; 1 million de pieds-noirs privilégiés face à 9 millions de musulmans soumis à l'indigénat.
- **Déclenchement armé :** « Toussaint rouge » (1er novembre 1954) lancée par le **FLN** et l'**ALN** (Ahmed Ben Bella).
- **Crise majeure :** Bataille d'Alger (1957), putsch du 13 mai 1958 provoquant l'effondrement de la IVe République et le rappel du général de Gaulle.
- **Dénouement :** Discours de De Gaulle sur l'autodétermination (1959), terrorisme de l'OAS, signature des **Accords d'Évian (18 mars 1962)** et proclamation de l'indépendance algérienne le **5 juillet 1962**.

---

## IV. L'Union Africaine (UA) (Pages 111-112)
- **Transition :** De l'OUA (fondée le 25 mai 1963 à Addis-Abeba) à l'**UA** (initiée au sommet de Syrte en 1999, acte constitutif de Lomé en 2000, sommet inaugural de Durban le 9 juillet 2002 sous Muammar Kadhafi et Thabo Mbeki).
- **Organes :** Conférence des chefs d'État, Commission de l'UA, Parlement Panafricain (PAP), Conseil de Paix et de Sécurité (CPS).
- **Bilan :** Gestion des conflits (Darfur, Somalie), médiations politiques, mais dépendance financière extérieure à 95% et lenteur d'intégration.

---

## V. Croyances et Valeurs : Occident vs Civilisation Négro-Africaine (Pages 113-114)
- **Monde Occidental :** Primauté de l'individu autonome, libéralisme économique, démocratie pluraliste et séparation des pouvoirs, culture de masse médiatisée ; dérives matérialistes et inégalités.
- **Civilisation Négro-Africaine :**
  - *Tradition :* Primauté du groupe et solidarité communautaire, démocratie de la palabre sous l'arbre à palabres, respect sacré des anciens et culte des ancêtres, cosmologie unitaire.
  - *Mutations contemporaines :* Émergence de l'État moderne, transition vers l'économie de marché mondialisée, transition de la famille élargie vers la famille nucléaire, émancipation croissante de la femme.`
  },
  {
    id: 'hist-geo-tableau-analyse-sujets-bac',
    discipline: 'histoire',
    disciplineLabel: 'Méthodologie & Sujets Types Histoire-Géographie',
    pageRange: 'p. 115 - 126',
    title: 'Méthodologie Dissertation & Commentaire de Documents en Histoire-Géographie + Tableau des 24 Sujets Types',
    summary: 'Cadrage méthodologique complet (plans chronologique, biographique, dialectique, inventaire, comparatif ; méthode NODDACI pour document) et grille analytique exhaustive des 24 sujets officiels du Baccalauréat.',
    keywords: ['methodologie histoire geographie', 'commentaire document histoire', 'noddaci', 'tableau des sujets histoire geo', 'plans de dissertation'],
    contentMarkdown: `# MÉTHODOLOGIE HISTOIRE-GÉOGRAPHIE & GRILLE DES 24 SUJETS TYPES

## I. Méthodologie de la Dissertation en Histoire-Géographie (Pages 115-116)
1. **Types de plans selon la consigne :**
   - *Plan chronologique / évolutif :* Pour les sujets comportant deux bornes temporelles (ex: *« La Côte d'Ivoire de 1944 à 1960 »*).
   - *Plan biographique :* Étude d'une figure historique majeure (origines, réalisations, fin/héritage).
   - *Plan dialectique :* Confrontation thèse/antithèse (ex: *« L'histoire est-elle importante uniquement pour l'individu ? »*).
   - *Plan inventaire / tableau :* Vue d'ensemble thématique regroupant les aspects selon leurs ressemblances.
   - *Plan comparatif :* Examen parallèle de deux réalités (ressemblances vs dissemblances).
2. **Structure formelle obligatoire :**
   - Introduction en 3 blocs : Généralité (mots-clés, dates, cadrage spatial/temporel) -> Problématique centrale -> Annonce du plan.
   - Développement équilibré en 2 ou 3 parties avec phrases de transition nettes.
   - Conclusion : Bilan répondant directement à la problématique + Ouverture prospective.

---

## II. Méthodologie du Commentaire de Documents (Méthode NODDACI) (Page 117)
- **N - Nature :** Article, discours, carte thématique, tableau statistique, courbe d'évolution, texte juridique.
- **O - Origine :** Ouvrage de référence, auteur, édition, page et date exacte.
- **D - Date :** Moment précis de production et contexte historique de parution.
- **D - Destinataire :** Public ciblé, assemblée, nation ou communauté internationale.
- **A - Auteur :** Identité, statut politique ou scientifique, prise de position idéologique.
- **C - Contexte historique :** Événements déterminants entourant la naissance du document.
- **I - Idée générale :** Message essentiel synthétisé en une phrase claire.
- **Exploitation :** Respect rigoureux des consignes d'action (*« Relevez »* = citation littérale ; *« Expliquez »* = éclairage des causes et mécanismes ; *« Commentez »* = analyse critique avec connaissances certifiées du cours).

---

## III. Tableau Analytique des 24 Grands Sujets d'Examen (Pages 118-126)
Le guide synthétise les problématiques, axes et arguments détaillés pour :
1. *La place de l'industrie dans l'économie ivoirienne* (Atouts, types d'usines, impact 18-20% PIB).
2. *Les fondements humains et politiques du développement ivoirien* (Jeunesse 77%, libéralisme, CEPICI, défis formation-emploi).
3. *Le capital humain dans l'économie ivoirienne* (Atouts démographiques, moteur de la production, défis sociaux).
4. *Le territoire sud-coréen face aux contraintes naturelles* (70% montagnes, climat continental rude, pauvreté du sous-sol).
5. *Le secteur tertiaire ivoirien : le commerce* (Commerce intérieur traditionnel/moderne, exportations agricoles, partenariats UE/Chine).
6. *Le rôle des transports dans le développement de la Côte d'Ivoire* (Routier, ferroviaire SITARAIL, ports Abidjan/San-Pédro).
7. *L'exploitation forestière en Côte d'Ivoire* (Essences précieuses, apport économique vs péril écologique de la déforestation).
8. *L'élevage en Côte d'Ivoire* (Atouts de la savane, élevage traditionnel vs moderne, filières non conventionnelles).
9. *La pêche en Côte d'Ivoire* (Façade maritime, artisanale vs industrielle, 1er port thonier africain).
10. *L'agriculture ivoirienne* (Moteur national 30% PIB, cultures de rente vs vivrières, modernisation technique).
11. *Le tourisme en Côte d'Ivoire* (Patrimoine Grand-Bassam UNESCO, tourisme balnéaire, créateur d'emplois).
12. *La CEDEAO : Succès et Échecs* (Maintien de la paix ECOMOG, Ecobank vs pluralité des monnaies et crises politiques).
13. *La Coexistence Pacifique (1956-1979)* (Équilibre de la terreur, téléphone rouge, accords SALT, mission Apollo-Soyouz).
14. *La Seconde Guerre du Vietnam (1964-1975)* (Accords de Genève bafoués, enlisement US, agent orange, chute de Saïgon).
15. *L'effondrement du bloc de l'Est (1985-1991)* (Accords d'Helsinki, Glasnost/Perestroïka de Gorbatchev, chute du Mur de Berlin).
16. *L'avènement du monde unipolaire (1991-2001)* (Hégémonie militaire américaine, dollar étalon, américanisation culturelle).
17. *D'un monde unipolaire à un monde multipolaire* (Choc du 11 septembre, montée en puissance des BRICS).
18. *Les fondements et manifestations des nationalismes en Afrique* (Syndicalisme, partis politiques, actions pacifiques et armées).
19. *L'accession de la Côte d'Ivoire à l'indépendance (1944-1960)* (SAA, loi Houphouët-Boigny abolissant le travail forcé, Dimbokro 1950, 7 août 1960).
20. *La décolonisation de l'Algérie (1954-1962)* (Toussaint rouge, FLN/ALN, bataille d'Alger, accords d'Évian).
21. *L'Union Africaine : Succès et Limites* (Résolution des crises, NEPAD vs dépendance financière à 95%).
22. *La crise des fusées de Cuba (1962)* (Révolution castriste, missiles soviétiques, blocus Kennedy, traité de Moscou 1963).
23. *Les deux crises de Berlin (1948-1949 et 1958-1961)* (Blocus et pont aérien ; érection du Mur de Berlin).
24. *L'ONU : Succès et Échecs* (Défense de la paix, décolonisation vs blocages du veto, drames non empêchés).`
  }
];

/**
 * Recherche rapide et ciblée dans le fascicule intégral des 4 disciplines
 */
export function searchGuideRevision4Disciplines(query: string): GuideRevisionSection | null {
  const normQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  for (const section of GUIDE_4_DISCIPLINES_SECTIONS) {
    if (section.keywords.some(k => normQuery.includes(k))) {
      return section;
    }
  }

  // Fallback par correspondance dans le titre ou markdown
  const matched = GUIDE_4_DISCIPLINES_SECTIONS.find(s => 
    s.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normQuery) ||
    s.contentMarkdown.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(normQuery)
  );

  return matched || null;
}
