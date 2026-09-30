/**
 * BASE DE CONNAISSANCES OFFICIELLE : PHYSIQUE-CHIMIE CLASSE DE SIXIÈME (6ème)
 * Source : Ministère de l'Éducation Nationale et de l'Alphabétisation - Côte d'Ivoire (École Numérique)
 * Conforme au programme officiel national et à l'Approche Par Compétences (APC)
 * 
 * Contient les 4 Grands Thèmes et l'ensemble des leçons fondamentales de 6ème :
 * 
 * THÈME 1 : ÉLECTRICITÉ
 * - Leçon 1 : Le circuit électrique (bornes de pile plate/cylindrique, bornes de lampe culot/plot, circuit électrique, générateur/récepteur, boucle, symboles normalisés, sens conventionnel (+) vers (-), conducteurs et isolants)
 * - Leçon 2 : Commande d'un circuit électrique (interrupteur simple commande permanente, bouton-poussoir ouvert/fermé commande temporaire sonnette/réfrigérateur, commutateur allumage alterné de 2 lampes, montage va-et-vient commande de 2 endroits différents)
 * - Leçon 3 : Court-circuit et protection des installations électriques (définition bornes reliées par conducteur, causes fils dénudés/isolant usé, dangers incendie/destruction générateur, disjoncteur différentiel, fusible coupe-circuit calibré, recherche et réparation de panne)
 * - Leçon 4 : Dangers des combustions (incendie, asphyxie manque O2, explosion de gaz, intoxication CO/fumées, triangle du feu: combustible + comburant + chaleur, extinction par suppression d'un élément, pictogrammes d'incendie)
 * 
 * THÈME 2 : PROPRIÉTÉS PHYSIQUES DE LA MATIÈRE
 * - Leçon 5 : Solides et liquides (solides compacts saisissables/forme propre vs solides divisés grains/pas de forme propre; liquides insaisissables/coulent/surface libre plane et horizontale au repos; verrerie de laboratoire: bécher, erlenmeyer, éprouvette, etc.; pictogrammes de sécurité)
 * - Leçon 6 : Les gaz (existence de l'air atmosphérique, propriétés: compressibilité, expansibilité, élasticité; pression des gaz; transvasement par déplacement d'eau; recueillement et conservation du gaz butane; consignes de sécurité)
 * - Leçon 7 : Température d'un corps (grandeur physique, unité légale Kelvin K, usuelle degré Celsius °C; thermomètre de laboratoire à graduation; thermomètre médical 35°C-42°C avec étranglement, température corporelle normale 37°C; repérage glace fondante 0°C et eau bouillante 100°C)
 * - Leçon 8 : Les changements d'état de l'eau (solidification à 0°C avec augmentation de volume et conservation de masse; fusion de la glace à 0°C avec diminution de volume et conservation de masse; vaporisation à 100°C par ébullition ou évaporation; condensation/liquéfaction; cycle de l'eau)
 * 
 * THÈME 3 : L'AIR ET LES COMBUSTIONS
 * - Leçon 9 : Les constituants de l'air (composition en volume : 1/5 ou 20% de dioxygène O2 et 4/5 ou 80% de diazote N2, traces de CO2 et gaz rares; sources de pollution et actions de protection/photosynthèse)
 * - Leçon 10 : Combustion d'un solide et d'un liquide dans l'air (combustion charbon de bois/carbone : Carbone + Dioxygène -> Dioxyde de carbone test à l'eau de chaux; combustion de l'alcool : Alcool + Dioxygène -> Dioxyde de carbone + Eau test au sulfate de cuivre anhydre; réactifs/produits, réaction chimique vs transformation physique)
 * - Leçon 11 : Combustion d'un gaz dans l'air (combustion complète du butane virole ouverte -> CO2 + H2O flamme bleue chaude sans fumée; combustion incomplète du butane virole fermée -> CO2 + H2O + Carbone/suie noire + Monoxyde de carbone CO très toxique flamme jaune fuligineuse)
 * 
 * THÈME 4 : MESURE DE GRANDEURS PHYSIQUES
 * - Leçon 12 : Volume d'un liquide et d'un solide (volume espace occupé noté V, unité légale m³, capacité L, correspondances 1 dm³ = 1 L, 1 m³ = 1000 L, 1 cm³ = 1 mL; mesure au récipient gradué/ménisque; mesure de solide quelconque par déplacement de liquide V = V2 - V1; formules géométriques cube a³, pavé L*l*h, cylindre pi*r²*h, sphère 4/3*pi*r³)
 * - Leçon 13 : Masse d'un solide et d'un liquide (grandeur mesurée avec balance notée m, unité légale kilogramme kg, balance Roberval, principe de simple pesée avec masses marquées, pesée d'un liquide m = m2 - m1, double pesée pour balance fausse à vide m = m2 - m1)
 */

export interface Pc6eLesson {
  lessonNumber: number;
  themeId: string;
  themeTitle: string;
  chapterTitle: string;
  situationContext: string;
  objectives: string[];
  keyDefinitions: Record<string, string>;
  formulasAndRules: Record<string, string>;
  experimentsAndObservations: {
    experimentName: string;
    protocol: string;
    observation: string;
    conclusion: string;
  }[];
  methodologySteps: {
    title: string;
    description: string;
    stepByStep: string[];
  }[];
  commonMistakesToAvoid: string[];
}

export interface Pc6eTheme {
  id: string;
  themeTitle: string;
  lessons: Pc6eLesson[];
}

export interface Pc6eKnowledgeBase {
  name: string;
  level: string;
  discipline: string;
  country: string;
  version: string;
  themes: Pc6eTheme[];
}

export const pc6eKnowledgeBase: Pc6eKnowledgeBase = {
  name: "Référentiel National Physique-Chimie 6ème",
  level: "6ème",
  discipline: "Physique-Chimie",
  country: "Côte d'Ivoire (École Numérique)",
  version: "2024-2026 APC",
  themes: [
    {
      id: "theme_1_electricite",
      themeTitle: "Thème 1 : Électricité",
      lessons: [
        {
          lessonNumber: 1,
          themeId: "theme_1_electricite",
          themeTitle: "Thème 1 : Électricité",
          chapterTitle: "Leçon 1 : Le circuit électrique",
          situationContext: "En cas de coupure de courant, des élèves apprennent à réaliser un circuit électrique avec une pile et une lampe pour éclairer leur chambre la nuit et à le schématiser.",
          objectives: [
            "Identifier les bornes d'une pile plate (petite lame + et grande lame -) et d'une pile cylindrique (bouton central + et enveloppe métallique -)",
            "Identifier les bornes d'une lampe électrique (le culot et le plot central)",
            "Réaliser et schématiser un circuit électrique simple à l'aide des symboles normalisés",
            "Définir le générateur (fait circuler le courant) et le récepteur (utilise le courant)",
            "Énoncer le sens conventionnel du courant électrique (sort par le pôle + et rentre par le pôle -)",
            "Distinguer conducteurs électriques (laissent passer le courant) et isolants électriques (ne laissent pas passer le courant)"
          ],
          keyDefinitions: {
            "Circuit électrique": "Chaîne ininterrompue d'éléments électriques (dipôles) reliés entre eux par des conducteurs aux bornes d'un générateur.",
            "Générateur": "Élément électrique qui produit et fait circuler le courant électrique dans le circuit (ex: pile, batterie, alternateur).",
            "Récepteur": "Élément électrique qui consomme et utilise le courant électrique pour fonctionner (ex: lampe, moteur, sonnerie).",
            "Sens conventionnel du courant": "Le courant électrique circule à l'extérieur du générateur de la borne positive (+) vers la borne négative (-).",
            "Conducteur électrique": "Corps qui se laisse traverser par le courant électrique (ex: métaux comme le fer, le cuivre, l'aluminium ; graphite/mine de crayon ; eau salée).",
            "Isolant électrique": "Corps qui ne se laisse pas traverser par le courant électrique (ex: plastique, bois sec, verre, caoutchouc, air sec)."
          },
          formulasAndRules: {
            "Symboles normalisés": "Pile : + | - (trait long +, trait épais court -) ; Lampe : cercle avec croix (X) ; Interrupteur ouvert / fermé ; Fil de connexion : trait droit ; Moteur : cercle avec M."
          },
          experimentsAndObservations: [
            {
              experimentName: "Allumage d'une lampe",
              protocol: "Mettre le plot central de la lampe en contact avec une borne de la pile et le culot avec l'autre borne.",
              observation: "La lampe s'allume lorsque le circuit forme une boucle fermée.",
              conclusion: "Pour qu'une lampe brille, le courant doit entrer par une borne (plot/culot) et sortir par l'autre."
            }
          ],
          methodologySteps: [
            {
              title: "Schématisation d'un circuit électrique simple",
              description: "Tracer un circuit propre et normé",
              stepByStep: [
                "1. Dessiner un rectangle au crayon et à la règle.",
                "2. Placer le symbole du générateur (+ et -) sur l'un des côtés.",
                "3. Placer le symbole de la lampe (cercle avec croix) et de l'interrupteur.",
                "4. Indiquer le sens conventionnel du courant par des flèches allant de la borne (+) vers la borne (-)."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Sur une pile plate : la PETITE lame est la borne positive (+) et la GRANDE lame est la borne négative (-).",
            "La mine de crayon (graphite) est un conducteur électrique (bien que non métallique)."
          ]
        },
        {
          lessonNumber: 2,
          themeId: "theme_1_electricite",
          themeTitle: "Thème 1 : Électricité",
          chapterTitle: "Leçon 2 : Commande d'un circuit électrique",
          situationContext: "Étude du système d'éclairage automatique d'un réfrigérateur ou d'une portière de voiture, et du montage va-et-vient dans les escaliers d'une maison.",
          objectives: [
            "Identifier l'interrupteur simple (commande permanente de fermeture ou d'ouverture)",
            "Distinguer bouton-poussoir ouvert au repos (commande temporaire ex: sonnette de porte) et bouton-poussoir fermé au repos (ex: lampe de réfrigérateur, portière)",
            "Identifier le commutateur (3 bornes : commun C, repos R, travail T) pour l'allumage alterné de 2 lampes",
            "Réaliser et expliquer le fonctionnement du montage va-et-vient (commander une lampe depuis 2 endroits différents)"
          ],
          keyDefinitions: {
            "Interrupteur simple": "Organe de commande permettant d'ouvrir ou de fermer un circuit électrique de façon permanente.",
            "Bouton-poussoir": "Organe de commande permettant d'ouvrir ou de fermer un circuit électrique de façon temporaire (pendant la durée de la pression).",
            "Commutateur": "Organe de commande à 3 bornes (commun C, repos R, travail T) permettant d'aiguiller le courant vers deux voies distinctes.",
            "Montage va-et-vient": "Circuit comportant deux commutateurs reliés entre eux permettant d'allumer ou d'éteindre une lampe depuis deux endroits distincts."
          },
          formulasAndRules: {
            "Fonctionnement du va-et-vient": "La lampe est allumée quand les 2 commutateurs sont sur la même position (soit les deux en position R, soit les deux en position T). Elle s'éteint si l'un est en R et l'autre en T."
          },
          experimentsAndObservations: [
            {
              experimentName: "Commande d'une lampe de réfrigérateur",
              protocol: "Bouton-poussoir fermé au repos inséré dans le circuit de la lampe.",
              observation: "Quand la porte est ouverte, le bouton est relâché (au repos) -> circuit fermé -> lampe allumée. Quand la porte se referme, elle appuie sur le bouton (en travail) -> circuit ouvert -> lampe éteinte.",
              conclusion: "Le bouton-poussoir fermé au repos assure l'extinction automatique à la fermeture de la porte."
            }
          ],
          methodologySteps: [
            {
              title: "Explication du fonctionnement d'un montage va-et-vient",
              description: "Détailler les 2 états possibles du circuit",
              stepByStep: [
                "1. Identifier la source d'énergie et les deux commutateurs C1 et C2.",
                "2. Vérifier si les deux commutateurs relient la même ligne conductrice (T-T' ou R-R').",
                "3. Si oui, le circuit est fermé et la lampe brille.",
                "4. Si l'un des deux commutateurs est basculé, la boucle est rompue et la lampe s'éteint."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre bouton-poussoir ouvert au repos (ferme temporairement quand on appuie, ex: sirène/sonnette) et bouton-poussoir fermé au repos (ouvre temporairement quand on appuie, ex: frigo).",
            "Dans le va-et-vient, deux commutateurs sont obligatoires (pas de simples interrupteurs)."
          ]
        },
        {
          lessonNumber: 3,
          themeId: "theme_1_electricite",
          themeTitle: "Thème 1 : Électricité",
          chapterTitle: "Leçon 3 : Court-circuit et protection des installations électriques",
          situationContext: "Un incendie causé par un court-circuit s'est déclaré dans un quartier. Des élèves apprennent les causes, dangers et dispositifs de protection électrique.",
          objectives: [
            "Définir le court-circuit (liaison directe des deux bornes d'un dipôle par un conducteur)",
            "Identifier les causes d'un court-circuit (fils dénudés qui se touchent, isolant abîmé)",
            "Énoncer les dangers d'un court-circuit (échauffement violent, incendie, destruction de générateur)",
            "Expliquer le rôle et le fonctionnement du disjoncteur et du fusible",
            "Appliquer la méthode de recherche de panne (circuit témoin ou testeur de continuité)"
          ],
          keyDefinitions: {
            "Court-circuit": "Contact direct involontaire entre les deux bornes d'un composant ou d'une source électrique par un bon conducteur.",
            "Disjoncteur": "Organe de protection automatique placé à l'entrée d'une installation qui coupe immédiatement le courant quand son intensité dépasse le seuil de sécurité ou en cas de court-circuit.",
            "Fusible": "Coupe-circuit contenant un fil métallique calibré très fin qui fond instantanément sous l'effet de la chaleur lorsqu'un courant excessif le traverse, ouvrant ainsi le circuit.",
            "Recherche de panne": "Démarche méthodique consistant à tester chaque élément du circuit (avec un testeur de continuité ou un circuit témoin) pour identifier le composant défectueux."
          },
          formulasAndRules: {
            "Consigne de sécurité absolue": "Ne JAMAIS remplacer un fusible grillé par un fil de cuivre ordinaire (danger mortel d'incendie car il ne fondra pas en cas de surintensité)."
          },
          experimentsAndObservations: [
            {
              experimentName: "Court-circuit d'une pile avec paille de fer",
              protocol: "Relier les bornes d'une pile plate par un brin de paille de fer.",
              observation: "La paille de fer rougit instantanément, s'enflamme et brûle ; la pile chauffe rapidement.",
              conclusion: "Le court-circuit génère une intensité de courant très élevée provoquant un échauffement violent capable de déclencher un incendie."
            }
          ],
          methodologySteps: [
            {
              title: "Diagnostic de panne dans un circuit électrique",
              description: "Déterminer l'élément défectueux",
              stepByStep: [
                "1. Vérifier si le circuit est bien fermé et si les connexions sont propres.",
                "2. Tester la lampe avec une pile neuve connue en bon état.",
                "3. Tester la pile avec une lampe témoin en bon état.",
                "4. Tester la continuité des fils et de l'interrupteur.",
                "5. Remplacer le seul composant défaillant identifié."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Le court-circuit d'une pile ne fait pas briller la lampe plus fort : la lampe s'éteint car le courant passe directement par le court-circuit sans la traverser.",
            "Toujours couper le disjoncteur général avant d'intervenir sur une installation électrique."
          ]
        },
        {
          lessonNumber: 4,
          themeId: "theme_1_electricite",
          themeTitle: "Thème 1 : Électricité",
          chapterTitle: "Leçon 4 : Dangers des combustions",
          situationContext: "Étude des incendies de forêt et accidents domestiques causés par des feux mal maîtrisés, analyse du triangle du feu et règles de sécurité.",
          objectives: [
            "Identifier les 4 grands dangers des combustions : incendie, asphyxie, explosion, intoxication",
            "Définir les éléments du triangle du feu : combustible, comburant (dioxygène de l'air), source de chaleur",
            "Expliquer le principe d'extinction d'un feu par élimination d'un des éléments du triangle",
            "Connaître les règles de sécurité en cas d'incendie et identifier les pictogrammes de sécurité (inflammable, comburant, explosif)"
          ],
          keyDefinitions: {
            "Incendie": "Feu incontrôlé et de grande ampleur qui se propage en détruisant les biens et l'environnement.",
            "Asphyxie": "Privation d'oxygène pour l'organisme due à la consommation du dioxygène de l'air par la combustion.",
            "Explosion": "Combustion quasi-instantanée et extrêmement violente d'un mélange de gaz et d'air au contact d'une étincelle.",
            "Intoxication": "Empoisonnement de l'organisme par inhalation de gaz toxiques (notamment le monoxyde de carbone CO et fumées).",
            "Triangle du feu": "Association indispensable de 3 éléments pour qu'une combustion existe : 1. Un combustible (ce qui brûle) ; 2. Un comburant (l'air/dioxygène) ; 3. Une source de chaleur (étincelle, flamme, chaleur)."
          },
          formulasAndRules: {
            "Principe d'extinction d'un feu": "Pour éteindre un feu, il suffit de supprimer l'un des 3 éléments du triangle du feu :\n- Supprimer la chaleur : arroser d'eau (refroidissement) ;\n- Supprimer le comburant : étouffer avec du sable, une couverture ou du CO2 (privation d'air) ;\n- Supprimer le combustible : fermer le robinet de gaz ou couper la végétation (pare-feu)."
          },
          experimentsAndObservations: [
            {
              experimentName: "Extinction de bougie sous bocal",
              protocol: "Recouvrir une bougie allumée d'un bocal en verre.",
              observation: "La flamme diminue puis s'éteint en quelques secondes.",
              conclusion: "Le feu s'éteint dès que le dioxygène (comburant) présent dans le bocal est totalement consommé."
            }
          ],
          methodologySteps: [
            {
              title: "Conduite à tenir en cas de fuite de gaz dans une cuisine",
              description: "Gestes réflexes pour éviter l'explosion",
              stepByStep: [
                "1. Ne pas allumer d'allumette, de briquet ou de bougie.",
                "2. Ne pas actionner d'interrupteur électrique (l'étincelle interne déclencherait l'explosion).",
                "3. Fermer immédiatement le robinet de la bouteille de gaz.",
                "4. Ouvrir grand les portes et fenêtres pour aérer et ventiler le local."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne jamais actionner un interrupteur électrique lorsqu'on sent une odeur de gaz.",
            "L'eau éteint un feu en refroidissant la source de chaleur (et non en supprimant le combustible)."
          ]
        }
      ]
    },
    {
      id: "theme_2_proprietes_matiere",
      themeTitle: "Thème 2 : Propriétés physiques de la matière",
      lessons: [
        {
          lessonNumber: 5,
          themeId: "theme_2_proprietes_matiere",
          themeTitle: "Thème 2 : Propriétés physiques de la matière",
          chapterTitle: "Leçon 5 : Solides et liquides",
          situationContext: "Classement des produits ramenés du marché pour la cantine (huile, sel, riz, banane, farine, charbon, eau) selon leurs états physiques et manipulation de la verrerie.",
          objectives: [
            "Définir les solides et distinguer solides compacts (forme propre) et solides divisés (en grains, sans forme propre)",
            "Définir les liquides (insaisissables, fluides, sans forme propre, surface libre plane et horizontale au repos)",
            "Reconnaître les éléments usuels de verrerie de laboratoire (bécher, erlenmeyer, tube à essais, éprouvette graduée, verre à pied, fiole jaugée, ballon)",
            "Identifier et respecter les pictogrammes de danger sur les produits de consommation"
          ],
          keyDefinitions: {
            "Solide": "Corps qu'on peut saisir entre les doigts. Se divise en solide compact et solide divisé.",
            "Solide compact": "Solide formé d'un seul bloc, qui possède une forme propre géométrique bien définie (ex: morceau de sucre, caillou, banane, craie).",
            "Solide divisé": "Solide constitué d'une multitude de petits grains, saisissable par pincées, mais qui n'a pas de forme propre et prend la forme du récipient (ex: sel, riz, sable, farine).",
            "Liquide": "Corps fluide insaisissable entre les doigts, qui coule, prend la forme du récipient et possède une surface libre plane et horizontale au repos (ex: eau, huile, alcool, pétrole).",
            "Surface libre d'un liquide": "Surface supérieure du liquide en contact avec l'air. Au repos, elle est TOUJOURS rigoureusement plane et horizontale, quelle que soit l'inclinaison du récipient."
          },
          formulasAndRules: {
            "Distinction clé": "Au repos : la surface libre d'un liquide est plane et horizontale ; la surface libre d'un solide divisé est quelconque (forme un monticule/tas)."
          },
          experimentsAndObservations: [
            {
              experimentName: "Inclinaison d'un récipient de liquide",
              protocol: "Incliner un verre contenant de l'eau colorée.",
              observation: "La surface de l'eau reste parfaitement parallèle au sol horizontal.",
              conclusion: "La surface libre d'un liquide au repos est invariablement plane et horizontale."
            }
          ],
          methodologySteps: [
            {
              title: "Tracé de la surface libre d'un liquide",
              description: "Dessiner le niveau dans un récipient incliné",
              stepByStep: [
                "1. Repérer le point de niveau imposé.",
                "2. Tracer une ligne parfaitement horizontale (parallèle au bas de la page) passant par ce point.",
                "3. Colorer la partie sous cette ligne horizontale."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas tracer la surface du liquide parallèle aux parois inclinées du verre : elle doit être horizontale !",
            "Un grain de riz isolé est un solide compact, mais le riz en vrac est un solide divisé."
          ]
        },
        {
          lessonNumber: 6,
          themeId: "theme_2_proprietes_matiere",
          themeTitle: "Thème 2 : Propriétés physiques de la matière",
          chapterTitle: "Leçon 6 : Les gaz",
          situationContext: "Mise en évidence de l'air lors de la réparation d'une chambre à air crevée chez le vulcanisateur et manipulation de seringues pour étudier les propriétés des gaz.",
          objectives: [
            "Mettre en évidence l'existence de l'air et des gaz",
            "Démontrer les 3 propriétés fondamentales des gaz : compressibilité, expansibilité, élasticité",
            "Définir la pression d'un gaz et la relation inverse entre volume et pression",
            "Réaliser le transvasement et le recueillement d'un gaz par déplacement d'eau",
            "Appliquer les règles de conservation et de sécurité du gaz butane"
          ],
          keyDefinitions: {
            "Gaz": "État de la matière fluide, invisible pour la plupart, sans forme propre ni volume propre.",
            "Compressibilité": "Propriété d'un gaz dont on peut réduire le volume en exerçant une pression (ex: enfoncer le piston d'une seringue bouchée).",
            "Expansibilité": "Propriété d'un gaz d'occuper tout le volume qui lui est offert (ex: tirer sur le piston ou parfum qui se diffuse).",
            "Élasticité": "Propriété d'un gaz de reprendre son volume initial dès que cesse la force appliquée sur lui.",
            "Pression d'un gaz": "Poussée ou force exercée par les molécules du gaz sur la surface des parois avec lesquelles il est en contact."
          },
          formulasAndRules: {
            "Loi de comportement des gaz": "- Lorsqu'on COMPRIME un gaz : son volume diminue et sa pression augmente.\n- Lorsqu'on DÉTEND un gaz : son volume augmente et sa pression diminue.",
            "Recueillement par déplacement d'eau": "Pour recueillir et conserver un gaz (comme le butane), on utilise un bocal rempli d'eau retourné dans une cuve : le gaz remplace l'eau et reste emprisonné."
          },
          experimentsAndObservations: [
            {
              experimentName: "Plongée d'un tube à essais vide dans l'eau",
              protocol: "Enfoncer verticalement un tube à essais retourné dans l'eau puis l'incliner.",
              observation: "L'eau ne pénètre pas au début. En inclinant le tube, de grosses bulles d'air s'échappent et l'eau prend la place de l'air.",
              conclusion: "L'air est une matière invisible qui occupe de l'espace."
            }
          ],
          methodologySteps: [
            {
              title: "Recueillement d'un gaz par déplacement d'eau",
              description: "Protocole expérimental de capture de gaz",
              stepByStep: [
                "1. Remplir complètement d'eau une éprouvette ou un bocal.",
                "2. Boucher avec la main et retourner l'éprouvette dans un cristallisoir rempli d'eau sans laisser entrer d'air.",
                "3. Glisser le tuyau d'arrivée du gaz sous l'ouverture du bocal.",
                "4. Le gaz monte en chassant l'eau vers le bas par poussée (déplacement d'eau)."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Les gaz n'ont ni forme propre ni volume propre (contrairement aux solides et aux liquides).",
            "Ne pas confondre compression (volume diminue, pression augmente) et détente (volume augmente, pression diminue)."
          ]
        },
        {
          lessonNumber: 7,
          themeId: "theme_2_proprietes_matiere",
          themeTitle: "Thème 2 : Propriétés physiques de la matière",
          chapterTitle: "Leçon 7 : Température d'un corps",
          situationContext: "Prise de température d'un enfant fiévreux au centre de santé de Bondoukou, étalonnage de thermomètre et mesure de points de changement d'état.",
          objectives: [
            "Définir la température comme grandeur physique mesurant le degré de chaleur d'un corps",
            "Distinguer l'unité légale internationale (Kelvin K) et l'unité usuelle (degré Celsius °C)",
            "Décrire le thermomètre de laboratoire et lire correctement une température",
            "Décrire le thermomètre médical (gradué de 35°C à 42°C avec étranglement) et connaître la température corporelle normale (37°C)",
            "Reconnaître les températures de référence : glace fondante (0°C) et eau bouillante pure (100°C)"
          ],
          keyDefinitions: {
            "Température": "Grandeur physique qui caractérise l'état thermique d'un corps (sensation de chaud ou de froid).",
            "Thermomètre": "Instrument de repérage de la température utilisant la dilatation thermique d'un liquide (mercure ou alcool coloré).",
            "Étranglement": "Rétrécissement du tube capillaire du thermomètre médical qui empêche le liquide de redescendre avant la lecture.",
            "Hyperthermie / Hypothermie": "Température corporelle > 37°C (fièvre/hyperthermie) ; température < 37°C (hypothermie)."
          },
          formulasAndRules: {
            "Points fixes de l'échelle Celsius": "- Glace fondante à pression normale : 0 °C ;\n- Eau pure bouillante à pression normale : 100 °C ;\n- Température normale du corps humain : 37 °C.",
            "Calcul de la valeur d'une division": "Valeur = (T2 - T1) / Nombre de divisions entre T1 et T2."
          },
          experimentsAndObservations: [
            {
              experimentName: "Plongée du thermomètre dans l'eau bouillante",
              protocol: "Chauffer de l'eau jusqu'à ébullition complète avec thermomètre immergé.",
              observation: "Le liquide monte et se stabilise exactement à 100°C pendant toute la durée de l'ébullition.",
              conclusion: "L'eau pure bout à température constante de 100°C sous la pression atmosphérique normale."
            }
          ],
          methodologySteps: [
            {
              title: "Lecture correcte d'un thermomètre de laboratoire",
              description: "Protocole de mesure de précision",
              stepByStep: [
                "1. Déterminer la valeur d'une petite graduation (ex: entre 30 et 40°C, 5 divisions -> 2°C par division).",
                "2. Plonger le réservoir dans le liquide sans toucher le fond du récipient.",
                "3. Attendre l'équilibre thermique (stabilisation de la colonne de liquide).",
                "4. Placer l'œil rigoureusement en face du sommet du ménisque pour lire la température."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Le toucher n'est pas fiable pour évaluer la température : seul le thermomètre fournit une mesure objective.",
            "Pour le thermomètre médical, toujours secouer le thermomètre avant usage pour faire redescendre le liquide dans le réservoir."
          ]
        },
        {
          lessonNumber: 8,
          themeId: "theme_2_proprietes_matiere",
          themeTitle: "Thème 2 : Propriétés physiques de la matière",
          chapterTitle: "Leçon 8 : Les changements d'état de l'eau",
          situationContext: "Observation des gouttelettes sous le couvercle d'une marmite en ébullition et éclatement d'une bouteille d'eau en verre oubliée au congélateur.",
          objectives: [
            "Nommer les 4 principaux changements d'état de l'eau : fusion, solidification, vaporisation (ébullition/évaporation), condensation (liquéfaction)",
            "Déterminer les températures de changement d'état sous pression normale (fusion/solidification à 0°C, vaporisation à 100°C)",
            "Démontrer la conservation de la masse au cours d'un changement d'état",
            "Mettre en évidence la variation de volume (l'eau augmente de volume en gelant et diminue en fondant)",
            "Expliquer le cycle naturel de l'eau"
          ],
          keyDefinitions: {
            "Solidification": "Passage de l'état liquide à l'état solide (se produit à 0°C pour l'eau pure ; le volume augmente mais la masse reste constante).",
            "Fusion": "Passage de l'état solide à l'état liquide (se produit à 0°C pour la glace ; le volume diminue mais la masse reste constante).",
            "Vaporisation": "Passage de l'état liquide à l'état gazeux (se fait soit par évaporation lente à toute température, soit par ébullition vive à 100°C).",
            "Condensation / Liquéfaction": "Passage de l'état gazeux (vapeur d'eau) à l'état liquide au contact d'une paroi froide."
          },
          formulasAndRules: {
            "Loi fondamentale des changements d'état": "Au cours de tout changement d'état d'un corps pur, la MASSE SE CONSERVE STRICTEMENT (m_final = m_initial), tandis que le VOLUME VARIE.",
            "Cas particulier de l'eau": "Lors de la solidification, le volume d'eau AUGMENTE d'environ 10% (ce qui explique l'éclatement des bouteilles pleines au congélateur)."
          },
          experimentsAndObservations: [
            {
              experimentName: "Pesée avant et après fusion de glaçons",
              protocol: "Peser un récipient fermé avec des glaçons, attendre la fonte complète et repeser.",
              observation: "La balance indique exactement la même masse (ex: 250 g avant et 250 g après).",
              conclusion: "La masse se conserve au cours de la fusion."
            }
          ],
          methodologySteps: [
            {
              title: "Explication de la bouteille brisée au congélateur",
              description: "Raisonnement physique étape par étape",
              stepByStep: [
                "1. Identifier le changement d'état : passage de l'eau liquide à la glace (solidification à 0°C).",
                "2. Rappeler la propriété physique : l'eau augmente de volume en se solidifiant.",
                "3. Conclure : la bouteille en verre fermée et rigide ne pouvant pas s'étirer, la poussée de la glace en expansion la brise.",
                "4. Conseil de sécurité : ne jamais remplir à ras bord un récipient en verre hermétique avant congélation."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas croire que la masse change quand l'eau gèle : la masse reste rigoureusement identique, seul le volume augmente.",
            "Ne pas confondre buée/brouillard (gouttelettes d'eau liquide en suspension) et vapeur d'eau invisible (gaz)."
          ]
        }
      ]
    },
    {
      id: "theme_3_air_combustions",
      themeTitle: "Thème 3 : L'air et les combustions",
      lessons: [
        {
          lessonNumber: 9,
          themeId: "theme_3_air_combustions",
          themeTitle: "Thème 3 : L'air et les combustions",
          chapterTitle: "Leçon 9 : Les constituants de l'air",
          situationContext: "Expérience de la bougie sous éprouvette pour déterminer les proportions de gaz dans l'air et sensibilisation contre la pollution atmosphérique.",
          objectives: [
            "Démontrer que l'air est un mélange gazeux",
            "Identifier les deux constituants majeurs de l'air : le dioxygène O2 (1/5 soit ~20%) et le diazote N2 (4/5 soit ~80%)",
            "Identifier les constituants secondaires (dioxyde de carbone CO2 <0,04%, argon, vapeur d'eau)",
            "Citer les sources de pollution de l'air (usines, pots d'échappement, feux, ordures) et proposer des actions citoyennes (planting d'arbres/photosynthèse)"
          ],
          keyDefinitions: {
            "Air": "Mélange gazeux homogène constituant l'atmosphère terrestre.",
            "Dioxygène (O2)": "Gaz constituant environ 20% (1/5) du volume de l'air, indispensable à la respiration des êtres vivants et entreteneur des combustions.",
            "Diazote (N2)": "Gaz le plus abondant de l'air constituant environ 80% (4/5) du volume de l'air, qui n'entretient pas la combustion.",
            "Dioxyde de carbone (CO2)": "Gaz présent en faible quantité (<0,04%) dans l'air sec, gaz à effet de serre absorbé par les arbres lors de la photosynthèse."
          },
          formulasAndRules: {
            "Proportions volumiques de l'air": "- Volume de Dioxygène = (1 / 5) * Volume d'air (ou 20%) ;\n- Volume de Diazote = (4 / 5) * Volume d'air (ou 80%) ;\n- Rapport : il y a 4 fois plus de diazote que de dioxygène dans l'air."
          },
          experimentsAndObservations: [
            {
              experimentName: "Bougie allumée sous éprouvette graduée dans l'eau",
              protocol: "Placer une éprouvette graduée au-dessus d'une bougie flottant sur l'eau.",
              observation: "La bougie s'éteint et l'eau monte dans l'éprouvette pour occuper exactement 1/5 du volume initial de l'air.",
              conclusion: "L'eau prend la place du dioxygène consommé par la combustion (1/5 du volume d'air)."
            }
          ],
          methodologySteps: [
            {
              title: "Calcul du volume de dioxygène ou d'air nécessaire",
              description: "Appliquer la règle des proportions de l'air",
              stepByStep: [
                "1. Pour 1 L d'air : V(O2) = 0,2 L et V(N2) = 0,8 L.",
                "2. Pour un volume d'air V_air : V(O2) = V_air / 5.",
                "3. Réciproquement : Volume d'air total = 5 * V(O2)."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Le gaz le plus abondant dans l'air est le DIAZOTE (80%), pas le dioxygène (20%).",
            "L'air n'est pas un corps pur, c'est un mélange de gaz."
          ]
        },
        {
          lessonNumber: 10,
          themeId: "theme_3_air_combustions",
          themeTitle: "Thème 3 : L'air et les combustions",
          chapterTitle: "Leçon 10 : Combustion d'un solide et d'un liquide dans l'air",
          situationContext: "Combustion de charbon de bois dans un fourneau et combustion de l'alcool en laboratoire, caractérisation des réactifs et des produits formés.",
          objectives: [
            "Réaliser la combustion du charbon de bois (carbone) et identifier le dioxyde de carbone avec le test à l'eau de chaux",
            "Réaliser la combustion de l'alcool et identifier les produits formés (dioxyde de carbone et eau)",
            "Définir une réaction chimique (transformation avec disparition de réactifs et apparition de nouveaux produits)",
            "Distinguer combustible (ce qui brûle) et comburant (ce qui fait brûler : dioxygène)",
            "Écrire les équations chimiques littérales des combustions"
          ],
          keyDefinitions: {
            "Réaction chimique": "Transformation au cours de laquelle des corps initiaux (réactifs) disparaissent et de nouveaux corps (produits) apparaissent.",
            "Combustible": "Corps capable de brûler (ex: charbon de bois/carbone, alcool, bois, essence, gaz butane).",
            "Comburant": "Corps qui permet et entretient la combustion (le gaz dioxygène).",
            "Test à l'eau de chaux": "L'eau de chaux limpide devient trouble (blanchâtre) en présence de dioxyde de carbone CO2.",
            "Test au sulfate de cuivre anhydre": "Le sulfate de cuivre anhydre blanc devient bleu en présence d'eau liquide ou de vapeur d'eau."
          },
          formulasAndRules: {
            "Équation littérale combustion carbone": "Carbone + Dioxygène -> Dioxyde de carbone",
            "Équation littérale combustion alcool": "Alcool + Dioxygène -> Dioxyde de carbone + Eau"
          },
          experimentsAndObservations: [
            {
              experimentName: "Combustion du charbon de bois dans un bocal",
              protocol: "Introduire un morceau de charbon incandescent dans un bocal de dioxygène puis verser de l'eau de chaux.",
              observation: "Le carbone brûle vivement avec éclat puis s'éteint ; l'eau de chaux ajoutée se trouble.",
              conclusion: "La combustion du carbone consomme le dioxygène et produit du dioxyde de carbone."
            }
          ],
          methodologySteps: [
            {
              title: "Identification des produits d'une combustion chimique",
              description: "Démarche de test expérimental",
              stepByStep: [
                "1. Observer les dépôts ou buée sur les parois froides : tester avec le sulfate de cuivre anhydre (s'il bleuit -> présence d'eau).",
                "2. Récupérer les gaz formés et faire barboter dans l'eau de chaux : si elle se trouble -> présence de dioxyde de carbone.",
                "3. Identifier les réactifs consommés (combustible + dioxygène).",
                "4. Écrire l'équation chimique littérale : Réactif 1 + Réactif 2 -> Produit 1 + Produit 2."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre transformation physique (changement d'état, ex: fusion de l'eau, même matière) et réaction chimique (nouvelles molécules formées).",
            "Le charbon de bois s'éteint dans un bocal fermé parce que tout le dioxygène est épuisé."
          ]
        },
        {
          lessonNumber: 11,
          themeId: "theme_3_air_combustions",
          themeTitle: "Thème 3 : L'air et les combustions",
          chapterTitle: "Leçon 11 : Combustion d'un gaz dans l'air (Butane)",
          situationContext: "En cuisine ou cantine scolaire, des élèves constatent que des casseroles noircissent quand la flamme du brûleur à gaz est jaune et découvrent la différence entre combustion complète et incomplète.",
          objectives: [
            "Distinguer la combustion complète (virole ouverte, excès de dioxygène, flamme bleue très chaude sans fumée) et ses produits (CO2 et H2O)",
            "Distinguer la combustion incomplète (virole fermée, manque de dioxygène, flamme jaune éclairante et fuligineuse) et ses produits (CO2, H2O, carbone/suie noire, monoxyde de carbone CO toxique)",
            "Écrire l'équation chimique littérale de la combustion complète du butane",
            "Expliquer les dangers du monoxyde de carbone (gaz asphyxiant inodore et mortel) et comment régler un brûleur"
          ],
          keyDefinitions: {
            "Combustion complète": "Combustion qui a lieu lorsque la quantité de dioxygène est suffisante. Flamme bleue, produit uniquement du dioxyde de carbone et de l'eau.",
            "Combustion incomplète": "Combustion qui a lieu lorsque la quantité de dioxygène est insuffisante. Flamme jaune fuligineuse, produit du dioxyde de carbone, de l'eau, des particules de carbone (suie qui noircit) et du monoxyde de carbone.",
            "Monoxyde de carbone (CO)": "Gaz très toxique, inodore et incolore issu des combustions incomplètes, responsable d'intoxications graves et d'arrêts respiratoires."
          },
          formulasAndRules: {
            "Équation littérale combustion complète du butane": "Butane + Dioxygène -> Dioxyde de carbone + Eau",
            "Équation littérale combustion incomplète du butane": "Butane + Dioxygène -> Dioxyde de carbone + Eau + Carbone + Monoxyde de carbone"
          },
          experimentsAndObservations: [
            {
              experimentName: "Réglage de la virole du brûleur Bunsen / cuisinière",
              protocol: "Ouvrir puis fermer la virole d'admission d'air.",
              observation: "Virole ouverte : flamme bleue sans dépôt. Virole fermée : flamme jaune qui dépose une suie noire (carbone) sous une soucoupe.",
              conclusion: "Le réglage de l'apport d'air conditionne la nature complète ou incomplète de la combustion."
            }
          ],
          methodologySteps: [
            {
              title: "Résolution de problème de casserole noircie",
              description: "Expliquer et remédier au noircissement",
              stepByStep: [
                "1. Constater la couleur jaune de la flamme et le dépôt noir.",
                "2. Diagnostiquer : combustion incomplète par manque d'air / dioxygène.",
                "3. Identifier le dépôt noir : ce sont des particules de carbone non brûlées (suie).",
                "4. Remède : ouvrir la virole du brûleur pour laisser entrer plus d'air ou aérer la pièce."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "La flamme bleue correspond à la combustion COMPLÈTE (la plus chaude et propre).",
            "La flamme jaune correspond à la combustion INCOMPLÈTE (produit du carbone et du CO dangereux)."
          ]
        }
      ]
    },
    {
      id: "theme_4_mesure_grandeurs",
      themeTitle: "Thème 4 : Mesure de grandeurs physiques",
      lessons: [
        {
          lessonNumber: 12,
          themeId: "theme_4_mesure_grandeurs",
          themeTitle: "Thème 4 : Mesure de grandeurs physiques",
          chapterTitle: "Leçon 12 : Volume d'un liquide et d'un solide",
          situationContext: "Achat d'huile dans un fût à la boutique, mesure du volume d'une pierre par déplacement d'eau et calcul de la contenance de citernes et bidons d'eau.",
          objectives: [
            "Définir le volume d'un corps (espace occupé noté V) et la capacité d'un récipient",
            "Identifier l'unité légale de volume (m³) et l'unité de capacité (L) avec correspondances (1 dm³ = 1 L, 1 cm³ = 1 mL, 1 m³ = 1000 L)",
            "Mesurer le volume d'un liquide à l'aide d'une éprouvette graduée (lecture au bas du ménisque)",
            "Mesurer le volume d'un solide quelconque par déplacement de liquide (V = V2 - V1)",
            "Calculer le volume de solides géométriques simples (cube, pavé droit, cylindre, sphère)"
          ],
          keyDefinitions: {
            "Volume V": "Espace à trois dimensions occupé par un corps. Unité internationale : mètre cube (m³).",
            "Capacité": "Volume maximal de liquide qu'un récipient peut contenir. Unité usuelle : litre (L).",
            "Ménisque": "Surface libre incurvée d'un liquide dans un tube étroit ; la lecture correcte se fait toujours à la base (au point le plus bas) du ménisque.",
            "Méthode par déplacement de liquide": "Technique de mesure du volume d'un solide insoluble : Volume solide V = V2 (liquide + solide) - V1 (liquide seul)."
          },
          formulasAndRules: {
            "Formules de volumes géométriques": "- Pavé droit : V = L * l * h ;\n- Cube d'arête a : V = a * a * a = a³ ;\n- Cylindre droit : V = pi * r² * h ;\n- Sphère : V = (4 / 3) * pi * r³.",
            "Tableau de correspondance volume/capacité": "1 m³ = 1 000 dm³ = 1 000 L ; 1 dm³ = 1 L ; 1 cm³ = 1 mL = 0,001 L."
          },
          experimentsAndObservations: [
            {
              experimentName: "Mesure du volume d'un caillou",
              protocol: "Verser V1 = 40 mL d'eau dans une éprouvette, immerger le caillou, lire le nouveau niveau V2 = 64 mL.",
              observation: "Le niveau monte de V1 à V2.",
              conclusion: "Le volume du caillou est V = V2 - V1 = 64 - 40 = 24 mL = 24 cm³."
            }
          ],
          methodologySteps: [
            {
              title: "Calcul du nombre de bidons remplis par une citerne",
              description: "Problème d'approvisionnement en eau",
              stepByStep: [
                "1. Calculer le volume d'un bidon : V_bidon = L * l * h = 25 cm * 60 cm * 20 cm = 30 000 cm³ = 0,03 m³.",
                "2. Noter le volume de la citerne : V_citerne = 15 m³.",
                "3. Calculer le nombre de bidons : Nb = V_citerne / V_bidon = 15 / 0,03 = 500 bidons."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Attention aux conversions d'unités : 1 m³ = 1 000 L (et NON 100 L !).",
            "Toujours placer l'œil au niveau de la base du ménisque pour éviter les erreurs de parallaxe."
          ]
        },
        {
          lessonNumber: 13,
          themeId: "theme_4_mesure_grandeurs",
          themeTitle: "Thème 4 : Mesure de grandeurs physiques",
          chapterTitle: "Leçon 13 : Masse d'un solide et d'un liquide",
          situationContext: "Pesée d'ingrédients pour un gâteau familial, vérification de la masse d'un morceau de viande chez le boucher et pesée de jus de citron dans un gobelet.",
          objectives: [
            "Définir la masse (quantité de matière notée m) et son unité légale internationale (kilogramme kg)",
            "Utiliser la balance Roberval et les masses marquées",
            "Appliquer le principe de la simple pesée pour un solide et pour un liquide (m_liquide = m2 - m1)",
            "Appliquer le principe de la double pesée (méthode de Borda) pour une balance non juste à vide (m = m2 - m1)"
          ],
          keyDefinitions: {
            "Masse m": "Grandeur physique qui mesure la quantité de matière contenue dans un corps. Unité légale : le kilogramme (kg).",
            "Balance Roberval": "Instrument de mesure de masse constitué d'un fléau à deux plateaux égaux et d'une aiguille oscillant devant un cadran.",
            "Simple pesée d'un solide": "Mettre l'objet sur un plateau et équilibrer avec des masses marquées sur l'autre plateau : m_objet = somme des masses marquées.",
            "Pesée d'un liquide": "1. Peser le récipient vide (m1) ; 2. Peser le récipient contenant le liquide (m2) ; 3. Calculer la masse du liquide m = m2 - m1.",
            "Double pesée (tare)": "Méthode permettant d'obtenir une pesée exacte avec une balance fausse à vide : m = m2 - m1."
          },
          formulasAndRules: {
            "Masse du liquide": "m_liquide = m2 (récipient plein) - m1 (récipient vide).",
            "Tableau des unités de masse": "tonne (t) | quintal (q) | . | kilogramme (kg) | hectogramme (hg) | décagramme (dag) | gramme (g) | décigramme (dg) | centigramme (cg) | milligramme (mg)."
          },
          experimentsAndObservations: [
            {
              experimentName: "Pesée d'un gobelet de jus de citron",
              protocol: "Masse du gobelet vide m1 = 150 g (100g + 50g) ; masse avec jus m2 = 710 g (500g + 200g + 10g).",
              observation: "La différence représente le jus seul.",
              conclusion: "Masse du jus de citron m = 710 g - 150 g = 560 g."
            }
          ],
          methodologySteps: [
            {
              title: "Composition d'une masse à l'aide de la boîte de masses marquées",
              description: "Déterminer la combinaison optimale de masses",
              stepByStep: [
                "1. Pour peser par exemple 875 g, décomposer en partant de la plus grande masse marquée possible :",
                "2. 500 g + 200 g + 100 g + 50 g + 20 g + 5 g = 875 g.",
                "3. Poser les masses marquées sur le plateau opposé jusqu'à équilibre parfait de l'aiguille au centre."
              ]
            }
          ],
          commonMistakesToAvoid: [
            "Ne pas confondre la masse (en kg, constante, quantité de matière) et le poids (force d'attraction en Newton N).",
            "Pour la pesée d'un liquide, ne jamais oublier de soustraire la masse du récipient vide (tare)."
          ]
        }
      ]
    }
  ]
};

export const PC_6E_CURRICULUM = pc6eKnowledgeBase.themes.flatMap(t =>
  t.lessons.map(l => ({
    themeId: t.id,
    themeTitle: t.themeTitle,
    lessonNumber: l.lessonNumber,
    lessonTitle: l.chapterTitle,
    objectives: l.objectives,
    keyDefinitions: l.keyDefinitions,
    formulasAndRules: l.formulasAndRules,
    experimentsAndObservations: l.experimentsAndObservations,
    methodologySteps: l.methodologySteps,
    commonMistakesToAvoid: l.commonMistakesToAvoid,
  }))
);
