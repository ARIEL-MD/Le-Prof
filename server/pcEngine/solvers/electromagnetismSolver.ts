/**
 * Solveurs déterministes pour l'Électromagnétisme & Induction (Terminale C, D, E)
 * Champ magnétique & Solénoïde, Force de Laplace & Balance de Cotton, Induction & Lois de Faraday/Lenz, Transformateurs
 */

import { buildPcStructuredResult } from "../resultBuilder";
import { PcStructuredResult } from "../types";

export function solveElectromagnetismExercise(statement: string): PcStructuredResult {
  const text = statement.toLowerCase();

  // Cas 1 : Force et Loi de Laplace / Balance de Cotton / Tige déviée / Rails
  if (/force de laplace|loi de laplace|balance de cotton|roue de barlow|rails de laplace|tige de laplace|f = i\s*l\s*b/i.test(text)) {
    const isCotton = /balance de cotton/i.test(text);
    const isSuspendedRod = /tige.*dévi|tige.*inclin|axe.*passant par a/i.test(text);

    if (isCotton) {
      const steps = [
        {
          title: "Description du dispositif de la balance de Cotton",
          observationOrData: "Fléau mobile autour de l'axe horizontal (Delta) muni d'un conducteur actif rectiligne de longueur l et d'un plateau à masse m.",
          scientificConceptOrRule: "Les portions en arc de cercle ont une droite d'action passant par l'axe de rotation : leurs moments sont nuls. Seul le conducteur actif subit une force de Laplace créant un moment moteur.",
          deductionOrCalculation: "Force de Laplace : $F = I \\cdot l \\cdot B$ (pour $\\vec{l} \\perp \\vec{B}$).\nPoids dans le plateau : $P = m \\cdot g$.",
          conclusionOrJustification: "Le dispositif isole rigoureusement l'action de la force de Laplace.",
        },
        {
          title: "Application du Théorème des Moments à l'équilibre",
          observationOrData: "Équilibre horizontal du fléau.",
          scientificConceptOrRule: "$$\\sum \\mathcal{M}_{(\\Delta)}(\\vec{F}_{\\text{ext}}) = 0 \\iff \\mathcal{M}_{(\\Delta)}(\\vec{F}) + \\mathcal{M}_{(\\Delta)}(\\vec{P}) = 0$$",
          deductionOrCalculation: "$$F \\times d = P \\times d' \\iff (I \\cdot l \\cdot B) \\times d = (m \\cdot g) \\times d'$$\nPour des bras égaux ($d = d'$) :\n$$I \\cdot l \\cdot B = m \\cdot g \\implies B = \\frac{m \\cdot g}{I \\cdot l} \\quad \\text{ou} \\quad I = \\frac{m \\cdot g}{l \\cdot B}$$",
          conclusionOrJustification: "Relation linéaire directe entre courant I et masse m d'équilibrage.",
        },
        {
          title: "Exploitation graphique et détermination de B",
          observationOrData: "Tracé de la courbe $I = f(m)$ ou $m = f(I)$ droite passant par l'origine.",
          scientificConceptOrRule: "Pente $k = \\frac{\\Delta I}{\\Delta m} = \\frac{g}{l \\cdot B} \\implies B = \\frac{g}{k \\cdot l}$.",
          deductionOrCalculation: "Calcul numérique de la valeur du champ magnétique $B$ en Tesla (T).",
          conclusionOrJustification: "Valeur expérimentale précise du champ magnétique mesuré.",
        },
      ];

      return buildPcStructuredResult({
        title: "Physique : Force de Laplace et Mesure du Champ Magnétique (Balance de Cotton)",
        themeId: "electromagnetisme",
        themeTitle: "Électromagnétisme & Induction",
        discipline: "PHYSIQUE",
        lessonNumber: 17,
        lessonTitle: "Force et Loi de Laplace",
        problemStatement: statement,
        scientificHypothesis: "À l'équilibre de la balance, le moment de la force de Laplace compense exactement le moment du poids : I*l*B = m*g.",
        steps,
        finalConclusion: "La balance de Cotton permet de déterminer la valeur du champ magnétique B = (m*g)/(I*l) grâce à l'équilibre des moments.",
        keyScientificTerms: ["Loi de Laplace F = I l vect B", "Balance de Cotton", "Théorème des moments", "Moment de force", "Champ magnétique B (Tesla)"],
        commonPitfallsAvoided: ["Les portions de circuit en arc de cercle centré sur l'axe n'exercent aucun moment de rotation."],
      });
    }

    // Tige suspendue inclinée
    const steps = [
      {
        title: "Bilan des forces extérieures appliquées à la tige",
        observationOrData: "Tige conductrice de masse m, longueur l, inclinée d'un angle alpha avec la verticale sous courant I et champ B.",
        scientificConceptOrRule: "Forces appliquées : Poids $\\vec{P}$ appliqué en G, Réaction du support $\\vec{R}$ en A, Force de Laplace $\\vec{F} = I \\vec{l} \\wedge \\vec{B}$.",
        deductionOrCalculation: "Norme de la force : $F = I \\cdot l \\cdot B$ (ou $F = \\frac{I h B}{\\cos\\alpha}$ selon la portion immergée).",
        conclusionOrJustification: "Système de trois forces coplanaires en équilibre.",
      },
      {
        title: "Équilibre de rotation et relation des moments",
        observationOrData: "Équilibre statique : $\\sum \\mathcal{M}_{(A)}(\\vec{F}_{\\text{ext}}) = 0$.",
        scientificConceptOrRule: "$$\\mathcal{M}_{(A)}(\\vec{P}) + \\mathcal{M}_{(A)}(\\vec{F}) = 0 \\iff - F \\times \\frac{l}{2} \\cos\\alpha + P \\times \\frac{l}{2} \\sin\\alpha = 0$$",
        deductionOrCalculation: "$$F = P \\times \\tan\\alpha \\iff I \\cdot l \\cdot B = m \\cdot g \\cdot \\tan\\alpha \\implies \\tan\\alpha = \\frac{I \\cdot l \\cdot B}{m \\cdot g}$$",
        conclusionOrJustification: "Détermination de l'angle d'inclinaison alpha ou de l'intensité I nécessaire.",
      },
    ];

    return buildPcStructuredResult({
      title: "Physique : Équilibre d'une Tige conductrice sous l'action de la Force de Laplace",
      themeId: "electromagnetisme",
      themeTitle: "Électromagnétisme & Induction",
      discipline: "PHYSIQUE",
      lessonNumber: 17,
      lessonTitle: "Force et Loi de Laplace",
      problemStatement: statement,
      steps,
      finalConclusion: "L'angle de déviation de la tige obéit à la relation tan(alpha) = (I*l*B)/(m*g), traduisant l'équilibre entre force de Laplace et pesanteur.",
      keyScientificTerms: ["Force de Laplace", "Règle des 3 doigts de la main droite", "Équilibre des moments", "Angle d'inclinaison tan alpha"],
      commonPitfallsAvoided: ["Prendre garde au bras de levier du poids qui vaut (l/2)*sin(alpha) pour une tige homogène pivotant en son extrémité."],
    });
  }

  // Cas 2 : Induction électromagnétique / Lois de Faraday & Lenz / Transformateurs
  if (/induction|flux magn[ée]tique|faraday|loi de lenz|fem|f\.?é\.?m|transformateur/i.test(text)) {
    const isTransformer = /transformateur/i.test(text);

    if (isTransformer) {
      const steps = [
        {
          title: "Principe de fonctionnement du transformateur",
          observationOrData: "Deux enroulements primaire (N1 spires) et secondaire (N2 spires) couplés par un circuit magnétique doux.",
          scientificConceptOrRule: "Le courant alternatif primaire crée un flux magnétique variable $\\Phi(t)$ qui induit une f.é.m. alternative au secondaire selon la loi de Faraday.",
          deductionOrCalculation: "Tensions efficaces : $U_1 = - e_1 = N_1 \\frac{d\\Phi}{dt}$ et $U_2 = e_2 = - N_2 \\frac{d\\Phi}{dt}$.",
          conclusionOrJustification: "Transmission d'énergie électrique par induction mutuelle.",
        },
        {
          title: "Rapport de transformation et conservation de la puissance",
          observationOrData: "Régime alternatif sinusoïdal.",
          scientificConceptOrRule: "Rapport de transformation : $$k = \\frac{U_2}{U_1} = \\frac{N_2}{N_1} = \\frac{I_1}{I_2}$$",
          deductionOrCalculation: "- Si $k < 1$ ($N_2 < N_1$) : Transformateur ABAISSEUR de tension.\n- Si $k > 1$ ($N_2 > N_1$) : Transformateur ÉLÉVATEUR de tension.\n- Pour un transformateur parfait (rendement $\\eta = 1$) : Puissance apparente $S_1 = S_2 \\iff U_1 I_1 = U_2 I_2$.",
          conclusionOrJustification: "Calcul des grandeurs électriques au secondaire ($U_2, I_2, N_2$).",
        },
      ];

      return buildPcStructuredResult({
        title: "Physique : Induction Électromagnétique — Étude du Transformateur parfait",
        themeId: "electromagnetisme",
        themeTitle: "Électromagnétisme & Induction",
        discipline: "PHYSIQUE",
        lessonNumber: 18,
        lessonTitle: "Induction Électromagnétique et Lois de Faraday & Lenz",
        problemStatement: statement,
        scientificHypothesis: "Le couplage magnétique parfait impose un rapport constant k = U2/U1 = N2/N1 = I1/I2.",
        steps,
        finalConclusion: "Le transformateur permet d'élever ou d'abaisser une tension alternative avec un rapport k = N2/N1 sans modifier la fréquence.",
        keyScientificTerms: ["Induction mutuelle", "Transformateur parfait", "Rapport de transformation k = N2/N1", "Élévateur / Abaisseur", "Puissance P = U*I"],
        commonPitfallsAvoided: ["Un transformateur ne fonctionne JAMAIS en courant continu."],
      });
    }

    // Induction générale & f.é.m. Faraday
    const steps = [
      {
        title: "Expression du Flux Magnétique à travers le circuit",
        observationOrData: "Circuit de surface S comportant N spires plongé dans un champ magnétique B.",
        scientificConceptOrRule: "$$\\Phi = N \\cdot \\vec{B} \\cdot \\vec{S} = N \\cdot B \\cdot S \\cdot \\cos\\theta$$ (en Webers, Wb).",
        deductionOrCalculation: "- Pour un solénoïde créant $B(t) = \\mu_0 \\frac{N_1}{l} i(t)$ : $$\\Phi(t) = \\mu_0 \\frac{\\pi N_1 N_2 r^2}{l} i(t) = k \\cdot i(t)$$",
        conclusionOrJustification: "Le flux magnétique est proportionnel au courant inducteur.",
      },
      {
        title: "Loi de Faraday et calcul de la f.é.m. induite e(t)",
        observationOrData: "Variation temporelle du flux $\\frac{d\\Phi}{dt}$.",
        scientificConceptOrRule: "Loi de Faraday : $$e(t) = - \\frac{d\\Phi}{dt}$$ (en Volts, V). Le signe (-) traduit la loi de Lenz.",
        deductionOrCalculation: "- Si $\\frac{di}{dt} > 0$ (croissance linéaire) : $e = - k \\frac{di}{dt} < 0$ (tension constante négative).\n- Si $\\frac{di}{dt} = 0$ (courant constant) : $e = 0\\text{ V}$.\n- Si $\\frac{di}{dt} < 0$ (décroissance linéaire) : $e = - k \\frac{di}{dt} > 0$ (tension constante positive).",
        conclusionOrJustification: "Génération de créneaux de tension induite observés à l'oscilloscope.",
      },
      {
        title: "Loi de Lenz et sens du courant induit",
        observationOrData: "Détermination du sens de circulation de i.",
        scientificConceptOrRule: "Loi de Lenz : Le courant induit s'oppose par ses effets (champ magnétique propre induit) à la variation de flux qui lui donne naissance.",
        deductionOrCalculation: "Intensité du courant induit : $$i(t) = \\frac{e(t)}{R + r} = - \\frac{1}{R+r} \\frac{d\\Phi}{dt}$$",
        conclusionOrJustification: "Le sens physique du courant induit est validé par la règle du flux maximal et la loi de Lenz.",
      },
    ];

    return buildPcStructuredResult({
      title: "Physique : Lois de l'Induction Électromagnétique (Faraday & Lenz)",
      themeId: "electromagnetisme",
      themeTitle: "Électromagnétisme & Induction",
      discipline: "PHYSIQUE",
      lessonNumber: 18,
      lessonTitle: "Induction Électromagnétique et Lois de Faraday & Lenz",
      problemStatement: statement,
      scientificHypothesis: "Toute variation temporelle de flux magnétique crée une f.é.m. e = -dPhi/dt dont le sens s'oppose à cette variation.",
      steps,
      finalConclusion: "La loi de Faraday e = -dPhi/dt quantifie la tension induite et la loi de Lenz en fixe le sens modérateur.",
      keyScientificTerms: ["Flux magnétique Phi (Wb)", "Loi de Faraday e = -dPhi/dt", "Loi de Lenz", "Courant induit i = e/(R+r)", "Auto-induction"],
      commonPitfallsAvoided: ["Ne jamais omettre le signe (-) de la loi de Faraday traduisant l'opposition de Lenz."],
    });
  }

  // Cas 3 : Champ Magnétique dans un Solénoïde
  const steps = [
    {
      title: "Expression du champ magnétique créé par un solénoïde long",
      observationOrData: "Solénoïde de longueur L comportant N spires parcouru par un courant I.",
      scientificConceptOrRule: "À l'intérieur d'un solénoïde infiniment long ($L \\ge 10 R$), le champ magnétique est uniforme et a pour intensité : $$B = \\mu_0 \\cdot \\frac{N}{L} \\cdot I = \\mu_0 \\cdot n \\cdot I$$ avec $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ S.I.}$.",
      deductionOrCalculation: "- Nombre de spires par mètre : $n = \\frac{N}{L}$.\n- Détermination du sens du vecteur $\\vec{B}$ par la règle de la main droite ou du bonhomme d'Ampère.",
      conclusionOrJustification: "Champ magnétique interne rigoureusement uniforme et axial.",
    },
    {
      title: "Superposition avec le champ terrestre et déviation de l'aiguille",
      observationOrData: "Aiguille aimantée placée au centre O du solénoïde perpendiculaire à l'axe à courant nul.",
      scientificConceptOrRule: "Le champ total est la somme vectorielle $\\vec{B}_{\\text{total}} = \\vec{B}_0 + \\vec{B}_h$.",
      deductionOrCalculation: "$$\\tan\\alpha = \\frac{B_0}{B_h} \\implies B_0 = B_h \\cdot \\tan\\alpha \\quad \\text{et} \\quad B = \\sqrt{B_0^2 + B_h^2}$$",
      conclusionOrJustification: "L'angle de déviation permet la mesure absolue du champ créé.",
    },
  ];

  return buildPcStructuredResult({
    title: "Physique : Champ Magnétique uniforme créé par un Solénoïde",
    themeId: "electromagnetisme",
    themeTitle: "Électromagnétisme & Induction",
    discipline: "PHYSIQUE",
    lessonNumber: 16,
    lessonTitle: "Champ Magnétique et Solénoïde",
    problemStatement: statement,
    steps,
    finalConclusion: "Le champ au centre du solénoïde est B = mu0*(N/L)*I, orienté selon la règle de la main droite et vérifiable par la déviation tan(alpha) = B0/Bh.",
    keyScientificTerms: ["Solénoïde", "Champ magnétique uniforme", "Perméabilité du vide mu0 = 4pi.10^-7", "Règle de la main droite", "Boussole des tangentes tan alpha = B0/Bh"],
    commonPitfallsAvoided: ["Convertir impérativement la longueur L en mètres (m) et non en cm."],
  });
}
