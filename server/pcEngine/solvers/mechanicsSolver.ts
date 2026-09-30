/**
 * Solveurs déterministes pour la Mécanique du Point & Systèmes (Terminale C, D, E)
 * Cinématique, TCI & TEC, Projectile & Champ E (Oscilloscope), Gravitation & Satellites/Kepler, Oscillations mécaniques
 */

import { buildPcStructuredResult } from "../resultBuilder";
import { PcStructuredResult } from "../types";

export function solveMechanicsExercise(statement: string): PcStructuredResult {
  const text = statement.toLowerCase();

  // Cas 1 : Gravitation, Satellites & Lois de Kepler
  if (/gravitation|satellite|g[ée]ostationnaire|kepler|orbite|vitesse orbitale/i.test(text)) {
    const steps = [
      {
        title: "Bilan des forces et application du Théorème du Centre d'Inertie",
        observationOrData: "Satellite de masse m décrivant une orbite circulaire de rayon r = RT + z autour de la Terre (masse MT, rayon RT).",
        scientificConceptOrRule: "Dans le référentiel géocentrique galiléen, le satellite n'est soumis qu'à la force de gravitation universelle de Newton : $\\vec{F} = -\\frac{G M_T m}{r^2} \\vec{u}_r = m \\vec{a}_G$.",
        deductionOrCalculation: "- L'accélération est purement normale et centripète : $a_G = a_n = \\frac{v^2}{r} = \\frac{G M_T}{r^2}$.\n- La composante tangentielle $a_t = \\frac{dv}{dt} = 0$, donc la vitesse $v$ est rigoureusement constante : le mouvement est CIRCULAIRE UNIFORME.",
        conclusionOrJustification: "Le mouvement d'un satellite en orbite circulaire est circulaire et uniforme.",
      },
      {
        title: "Expression de la vitesse orbitale, de la vitesse angulaire et de la période",
        observationOrData: "Paramètres orbitaux à l'altitude z.",
        scientificConceptOrRule: "La vitesse linéaire s'exprime par $v = \\sqrt{\\frac{G M_T}{R_T + z}} = R_T \\sqrt{\\frac{g_0}{R_T + z}}$ avec $g_0 = \\frac{G M_T}{R_T^2}$.",
        deductionOrCalculation: `- Vitesse angulaire : $\\omega = \\frac{v}{r} = \\sqrt{\\frac{G M_T}{r^3}} = R_T \\sqrt{\\frac{g_0}{(R_T+z)^3}}$.\n- Période de révolution : $$T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi r}{v} = 2\\pi \\sqrt{\\frac{r^3}{G M_T}} = \\frac{2\\pi}{R_T} \\sqrt{\\frac{(R_T+z)^3}{g_0}}$$.`,
        conclusionOrJustification: "Expressions analytiques des grandeurs dynamiques et cinématiques établies.",
      },
      {
        title: "3ème Loi de Kepler et caractéristiques du Satellite Géostationnaire",
        observationOrData: "Constance du rapport orbital et conditions d'immobilité apparente.",
        scientificConceptOrRule: "3ème loi de Kepler : $$\\frac{T^2}{r^3} = \\frac{4\\pi^2}{G M_T} = \\text{constante}$$.",
        deductionOrCalculation: "Pour un satellite géostationnaire :\n- Il tourne dans le plan équatorial, dans le même sens que la Terre.\n- Sa période est égale à la période de rotation propre de la Terre : $T = 23\\text{h } 56\\text{min } 4\\text{s} \\approx 86164\\text{ s}$ (ou 86400 s).\n- Altitude calculée : $r = \\sqrt[3]{\\frac{G M_T T^2}{4\\pi^2}} \\implies z = r - R_T \\approx 36\\,000\\text{ km}$.",
        conclusionOrJustification: "Le satellite reste stationnaire au zénith d'un point fixe de l'équateur (idéal pour les télécommunications et la météo).",
      },
    ];

    return buildPcStructuredResult({
      title: "Physique : Mécanique Spatiale — Gravitation, Mouvement des Satellites et Lois de Kepler",
      themeId: "mecanique",
      themeTitle: "Mécanique du Point & Systèmes",
      discipline: "PHYSIQUE",
      lessonNumber: 14,
      lessonTitle: "Interaction Gravitationnelle, Satellites et Lois de Kepler",
      problemStatement: statement,
      scientificHypothesis: "L'attraction gravitationnelle newtonienne impose au satellite une accélération centripète régie par la 3ème loi de Kepler T^2/r^3 = 4*pi^2/(G*M).",
      steps,
      finalConclusion: "Le mouvement orbital est circulaire uniforme, obéit à la 3ème loi de Kepler et permet de stabiliser des satellites géostationnaires à 36 000 km d'altitude.",
      keyScientificTerms: ["Force de gravitation universelle", "Référentiel géocentrique", "Vitesse orbitale", "Période de révolution", "3ème loi de Kepler", "Satellite géostationnaire (36000 km)"],
      commonPitfallsAvoided: ["Attention à toujours compter la distance r depuis le centre de la Terre : r = RT + z."],
    });
  }

  // Cas 2 : Oscillations Mécaniques Libres (Pendule élastique horizontal)
  if (/oscillat|pendule [ée]lastique|ressort|raideur k|[ée]longation|amplitude xm|\u03C90/i.test(text)) {
    const steps = [
      {
        title: "Établissement de l'équation différentielle du mouvement",
        observationOrData: "Solide de masse m attaché à un ressort horizontal de raideur k glissant sans frottement.",
        scientificConceptOrRule: "Application du Théorème du Centre d'Inertie dans le repère terrestre galiléen : $\\vec{P} + \\vec{R} + \\vec{T} = m \\vec{a}_G$.",
        deductionOrCalculation: "Projection sur l'axe horizontal $(O, \\vec{i})$ :\n$$0 + 0 - kx = m \\ddot{x} \\implies m\\ddot{x} + kx = 0 \\iff \\ddot{x} + \\frac{k}{m}x = 0$$",
        conclusionOrJustification: "Équation différentielle d'un oscillateur harmonique non amorti.",
      },
      {
        title: "Solution de l'équation différentielle et grandeurs caractéristiques",
        observationOrData: "Forme générale de la solution : $x(t) = X_m \\cos(\\omega_0 t + \\varphi)$.",
        scientificConceptOrRule: "Pulsation propre $\\omega_0 = \\sqrt{\\frac{k}{m}}$ (rad/s), Période propre $T_0 = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{\\frac{m}{k}}$ (s), Fréquence propre $N_0 = \\frac{1}{T_0}$ (Hz).",
        deductionOrCalculation: "Détermination de l'amplitude $X_m$ et de la phase initiale $\\varphi$ à $t = 0$ :\n- $x(0) = X_m \\cos(\\varphi) = x_0$\n- $v(0) = -\\omega_0 X_m \\sin(\\varphi) = v_0$\n- On en déduit $\\tan(\\varphi) = -\\frac{v_0}{\\omega_0 x_0}$ et $X_m = \\sqrt{x_0^2 + \\frac{v_0^2}{\\omega_0^2}}$.",
        conclusionOrJustification: "Équation horaire $x(t)$ et vitesse $v(t) = \\dot{x}(t)$ entièrement déterminées.",
      },
      {
        title: "Étude énergétique et conservation de l'énergie mécanique",
        observationOrData: "Système conservatif sans frottements dissipatifs.",
        scientificConceptOrRule: "L'énergie mécanique totale $E_m$ est la somme de l'énergie cinétique $E_c$ et de l'énergie potentielle élastique $E_{pe}$.",
        deductionOrCalculation: "$$E_m = E_c(t) + E_{pe}(t) = \\frac{1}{2} m v^2 + \\frac{1}{2} k x^2 = \\frac{1}{2} k X_m^2 = \\frac{1}{2} m V_{\\max}^2 = \\text{constante}$$",
        conclusionOrJustification: "L'énergie mécanique se conserve intégralement au cours des oscillations.",
      },
    ];

    return buildPcStructuredResult({
      title: "Physique : Oscillations Mécaniques Libres non amorties (Pendule élastique)",
      themeId: "mecanique",
      themeTitle: "Mécanique du Point & Systèmes",
      discipline: "PHYSIQUE",
      lessonNumber: 15,
      lessonTitle: "Oscillations Mécaniques Libres (Pendule élastique)",
      problemStatement: statement,
      scientificHypothesis: "La force de rappel élastique T = -kx engendre un mouvement harmonique sinusoïdal conservant l'énergie mécanique Em = 1/2 k Xm^2.",
      steps,
      finalConclusion: "L'oscillateur décrit un mouvement harmonique de période propre T0 = 2*pi*sqrt(m/k) avec échange continuel et sans perte entre énergie cinétique et potentielle.",
      keyScientificTerms: ["Oscillateur harmonique", "Équation différentielle x'' + (k/m)x = 0", "Pulsation propre omega0", "Période propre T0", "Élongation x(t)", "Énergie mécanique constante"],
      commonPitfallsAvoided: ["Veiller à déterminer la phase phi avec le signe correct à la fois sur x(0) et v(0)."],
    });
  }

  // Cas 3 : Projectile dans le champ de pesanteur OU Faisceau d'électrons dans l'oscilloscope
  if (/projectile|port[ée]e|fl[èe]che|d[ée]flexion|oscilloscope|faisceau|spot/i.test(text)) {
    const isElectronDeflection = /électron|plaques|canon|spot|oscilloscope|déflexion/i.test(text);

    if (isElectronDeflection) {
      const steps = [
        {
          title: "Accélération des électrons dans le canon (Tension U_acc)",
          observationOrData: "Électrons de masse m et de charge q = -e émis sans vitesse initiale en K et accélérés par la tension UAB.",
          scientificConceptOrRule: "Application du Théorème de l'Énergie Cinétique entre les plaques accélératrices : $\\frac{1}{2} m v_0^2 - 0 = e U_{AB}$.",
          deductionOrCalculation: "$$v_0 = \\sqrt{\\frac{2 e U_{AB}}{m}}$$",
          conclusionOrJustification: "Vitesse d'injection v0 des électrons dans les plaques déflectrices déterminée.",
        },
        {
          title: "Mouvement dans le champ électrostatique uniforme E",
          observationOrData: "Pénétration entre deux plaques horizontales distantes de d sous tension déviatrice U.",
          scientificConceptOrRule: "Le poids de l'électron étant négligeable devant la force électrostatique ($P \\ll F$), le TCI donne : $\\vec{F} = q \\vec{E} = m \\vec{a} \\implies \\vec{a} = -\\frac{e \\vec{E}}{m}$.",
          deductionOrCalculation: "- Accélérations : $a_x = 0$, $a_y = \\frac{e E}{m} = \\frac{e U}{m d}$.\n- Équations horaires : $x(t) = v_0 t$, $y(t) = \\frac{e U}{2 m d} t^2$.\n- Équation cartésienne de la trajectoire parabolique :\n$$y(x) = \\frac{e U}{2 m d v_0^2} x^2$$",
          conclusionOrJustification: "Trajectoire parabolique orientée vers la plaque positive.",
        },
        {
          title: "Calcul de la déviation angulaire et de la déflexion électrostatique Y sur l'écran",
          observationOrData: "Sortie des plaques de longueur l et impact sur l'écran placé à la distance L.",
          scientificConceptOrRule: "À la sortie, le faisceau adopte un MRU rectiligne tangent à la parabole en son point médian I.",
          deductionOrCalculation: "- Déviation angulaire : $\\tan \\alpha = \\frac{v_{ys}}{v_{xs}} = \\frac{e U l}{m d v_0^2}$.\n- Déflexion sur l'écran (avec $L = IO'$) :\n$$Y = L \\times \\tan \\alpha = \\frac{e l L}{m d v_0^2} \\times U = k \\times U$$\navec sensibilité / constante $k = \\frac{e l L}{m d v_0^2}$.",
          conclusionOrJustification: "La déflexion linéaire Y est strictement proportionnelle à la tension appliquée U (principe fondamental de l'oscilloscope).",
        },
      ];

      return buildPcStructuredResult({
        title: "Physique : Mouvement d'une particule chargée dans un champ électrostatique (Oscilloscope)",
        themeId: "mecanique",
        themeTitle: "Mécanique du Point & Systèmes",
        discipline: "PHYSIQUE",
        lessonNumber: 13,
        lessonTitle: "Mouvement d'un Projectile et de Particules Chargées dans un Champ Uniforme",
        problemStatement: statement,
        scientificHypothesis: "La force électrostatique F = eE produit une trajectoire parabolique déviant linéairement le spot : Y = k*U.",
        steps,
        finalConclusion: "Le faisceau d'électrons subit une déflexion électrostatique proportionnelle à la tension U, permettant la visualisation instantanée des signaux.",
        keyScientificTerms: ["Canon à électrons", "Champ électrostatique uniforme E = U/d", "Trajectoire parabolique", "Déviation angulaire tan alpha", "Déflexion électrostatique Y = k*U"],
        commonPitfallsAvoided: ["Le poids de l'électron est toujours négligeable devant la force électrostatique."],
      });
    }

    // Projectile classique dans champ de pesanteur g
    const steps = [
      {
        title: "Équations horaires et équation de la trajectoire parabolique",
        observationOrData: "Lancement d'un solide de masse m avec une vitesse v0 faisant un angle alpha avec l'horizontale.",
        scientificConceptOrRule: "Dans le champ de pesanteur uniforme, le solide n'est soumis qu'à son poids : $\\vec{P} = m \\vec{g} = m \\vec{a} \\implies \\vec{a} = \\vec{g}$.",
        deductionOrCalculation: "- Accélérations : $a_x = 0$ ; $a_y = -g$.\n- Vitesses : $v_x(t) = v_0 \\cos\\alpha$ ; $v_y(t) = -gt + v_0 \\sin\\alpha$.\n- Positions : $x(t) = (v_0 \\cos\\alpha) t$ ; $y(t) = -\\frac{1}{2}gt^2 + (v_0 \\sin\\alpha) t + y_0$.\n- Trajectoire : $$y(x) = -\\frac{g}{2 v_0^2 \\cos^2\\alpha} x^2 + (\\tan\\alpha) x + y_0$$",
        conclusionOrJustification: "La trajectoire est une parabole de concavité tournée vers le bas.",
      },
      {
        title: "Détermination de la Flèche (altitude maximale H = yS)",
        observationOrData: "Au sommet S de la trajectoire, la composante verticale de la vitesse s'annule ($v_y = 0$).",
        scientificConceptOrRule: "$$t_S = \\frac{v_0 \\sin\\alpha}{g} \\implies y_S = H = \\frac{v_0^2 \\sin^2\\alpha}{2g} + y_0$$",
        deductionOrCalculation: "Pour $y_0 = 0$, la flèche est maximale pour un tir vertical $(\\alpha = 90^\\circ)$ où $H_{\\max} = \\frac{v_0^2}{2g}$.",
        conclusionOrJustification: "Altitude maximale du projectile calculée.",
      },
      {
        title: "Détermination de la Portée horizontale OP",
        observationOrData: "Point d'impact P sur le plan horizontal ($y = 0$).",
        scientificConceptOrRule: "Résolution de $y(x_P) = 0$ : $$x_P = \\frac{v_0^2 \\sin(2\\alpha)}{g}$$ (pour $y_0 = 0$).",
        deductionOrCalculation: "La portée est maximale lorsque $\\sin(2\\alpha) = 1 \\iff 2\\alpha = 90^\\circ \\iff \\alpha = 45^\\circ = \\frac{\\pi}{4}\\text{ rad}$, soit $x_{P,\\max} = \\frac{v_0^2}{g}$.",
        conclusionOrJustification: "Portée et angle optimal de tir de 45° établis.",
      },
    ];

    return buildPcStructuredResult({
      title: "Physique : Mouvement d'un Projectile dans le champ de pesanteur uniforme",
      themeId: "mecanique",
      themeTitle: "Mécanique du Point & Systèmes",
      discipline: "PHYSIQUE",
      lessonNumber: 13,
      lessonTitle: "Mouvement d'un Projectile et de Particules Chargées dans un Champ Uniforme",
      problemStatement: statement,
      steps,
      finalConclusion: "Le projectile décrit une parabole dont la flèche vaut (v0^2 sin^2 alpha)/(2g) et la portée maximale est atteinte pour un angle de tir de 45°.",
      keyScientificTerms: ["Champ de pesanteur uniforme g", "Équations horaires", "Trajectoire parabolique", "Flèche H (vy = 0)", "Portée OP (y = 0)", "Angle optimal 45°"],
      commonPitfallsAvoided: ["Ne pas oublier que vx est constante tout au long du mouvement (MRU selon Ox)."],
    });
  }

  // Cas 4 : Mouvement sur plan incliné / TCI / TEC
  const steps = [
    {
      title: "Bilan des forces et application du Théorème du Centre d'Inertie (TCI)",
      observationOrData: "Solide de masse m glissant sur un plan incliné d'un angle alpha.",
      scientificConceptOrRule: "Dans le référentiel terrestre galiléen : $\\vec{P} + \\vec{R}_N + \\vec{f} = m \\vec{a}_G$.",
      deductionOrCalculation: "- Projection selon la ligne de plus grande pente $(Ox)$ : $m g \\sin\\alpha - f = m a_x \\implies a_x = g \\sin\\alpha - \\frac{f}{m}$.\n- Projection normale $(Oy)$ : $- m g \\cos\\alpha + R_N = 0 \\implies R_N = m g \\cos\\alpha$.",
      conclusionOrJustification: "L'accélération ax est constante : le mouvement est rectiligne uniformément varié (MRUV).",
    },
    {
      title: "Application du Théorème de l'Énergie Cinétique (TEC)",
      observationOrData: "Calcul de la vitesse finale ou de la distance d'arrêt.",
      scientificConceptOrRule: "$$\\Delta E_c = E_{cB} - E_{cA} = W(\\vec{P}) + W(\\vec{R}_N) + W(\\vec{f})$$",
      deductionOrCalculation: "$$\\frac{1}{2} m v_B^2 - \\frac{1}{2} m v_A^2 = m g l \\sin\\alpha + 0 - f \\cdot l$$\nOn en déduit soit la vitesse $v_B = \\sqrt{v_A^2 + 2 l (g \\sin\\alpha - f/m)}$, soit l'intensité de la force de frottement $f$.",
      conclusionOrJustification: "Concordance parfaite entre la démarche dynamique (TCI) et énergétique (TEC).",
    },
  ];

  return buildPcStructuredResult({
    title: "Physique : Dynamique et Énergétique du solide (TCI et TEC sur Plan Incliné)",
    themeId: "mecanique",
    themeTitle: "Mécanique du Point & Systèmes",
    discipline: "PHYSIQUE",
    lessonNumber: 12,
    lessonTitle: "Théorème du Centre d'Inertie & Théorème de l'Énergie Cinétique",
    problemStatement: statement,
    steps,
    finalConclusion: "L'accélération constante ax = g*sin(alpha) - f/m permet de relier vitesses, distances et forces de frottement selon les lois fondamentales de Newton.",
    keyScientificTerms: ["Théorème du centre d'inertie (TCI)", "Théorème de l'énergie cinétique (TEC)", "Réaction normale", "Force de frottement f", "Travail du poids W(P) = mgh"],
    commonPitfallsAvoided: ["La réaction normale RN étant perpendiculaire au déplacement, son travail est toujours nul (W(RN) = 0)."],
  });
}
