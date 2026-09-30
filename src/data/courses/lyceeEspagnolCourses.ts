import { OfficialIvorianCourse } from '../../types';

export const LYCEE_ESPAGNOL_COURSES: OfficialIvorianCourse[] = [
  // =========================================================================
  // ESPAGNOL : GRAMMAIRE FONDAMENTALE & DISTINCTIONS CLÉS (SER vs ESTAR, POR vs PARA)
  // =========================================================================
  {
    id: 'espagnol-gramatica-ser-estar-por-para',
    discipline: 'espagnol',
    disciplineLabel: 'Espagnol (Collège & Lycée)',
    level: 'terminale',
    levelLabel: 'Secondaire (3e, 2nde, 1ère, Tle)',
    serie: 'tle_a',
    serieLabel: 'Toutes Séries (A1, A2, C, D)',
    chapter: 'Gramática Fundamental: Ser vs Estar, Por vs Para & Tiempos del Pasado',
    lessonTitle: 'Distinción Esencial Ser / Estar, Valores de Por / Para, Subjuntivo y Verbos Irregulares',
    keywords: [
      'ser vs estar', 'ser', 'estar', 'por vs para', 'por', 'para',
      'subjuntivo', 'subjonctif', 'subjuntivo presente', 'voz pasiva', 'passif',
      'gramatica', 'espagnol', 'grammaire espagnole', 'verbos irregulares'
    ],
    objectifs: [
      'Distinguer et utiliser sans faute SER (nature, identité, heure, caractéristique permanente) et ESTAR (état temporaire, sentiment, localisation spatiale)',
      'Maîtriser les valeurs de POR (cause, motif, moyen, durée approximative) et de PARA (but, destination, échéance, destinataire)',
      'Conjuguer et employer le Présent du Subjonctif (obligation personnelle, doute, souhait, défense : no + subjuntivo)',
      'Former la Voix Passive (SER + participe passé accordé + por) et le Passif Réfléchi (SE + verbe à la 3e personne)'
    ],
    fullCourseContent: `1. Ser vs Estar (Règles Canoniques) :
- SER s'utilise pour :
  * L'identité et la nationalité : "Soy marfileño, soy estudiante."
  * La profession : "Mi padre es profesor de español."
  * La nature ou caractéristique permanente : "La manzana es verde (sa variété est verte)."
  * L'heure, la date et le prix : "Son las tres de la tarde. Hoy es lunes."
- ESTAR s'utilise pour :
  * La localisation spatiale / géographique : "Yamoussoukro está en Costa de Marfil."
  * L'état temporaire physique ou émotionnel : "Estoy cansado hoy. Los alumnos están contentos."
  * L'état résultant d'un changement : "La manzana está verde (elle n'est pas encore mûre)."
  * La forme progressive (estar + gérondif) : "Estamos estudiando la lección."

2. Por vs Para :
- POR exprime :
  * La cause ou le motif : "Llegó tarde por la lluvia (à cause de la pluie)."
  * Le moyen ou le passage : "Envié la carta por correo. Pasamos por Madrid."
  * La durée approximative : "Estudió por dos horas."
  * L'échange ou le prix : "Lo compré por diez euros."
- PARA exprime :
  * Le but ou l'objectif : "Estudio para aprobar el examen del Bachillerato."
  * Le destinataire : "Este regalo es para mi hermano."
  * La destination géographique : "Salgo para Abidjan mañana."
  * Une date limite / échéance : "El trabajo es para el viernes."

3. El Subjuntivo Presente (Formation & Emplois) :
- Formation régulière :
  * Verbes en -AR (hablar) : termine en -e, -es, -e, -emos, -éis, -en (hable, hables, hable, hablemos, habléis, hablen).
  * Verbes en -ER / -IR (comer, vivir) : termine en -a, -as, -a, -amos, -áis, -an (coma, comas, coma, comamos, comáis, coman).
- Verbes irréguliers fondamentaux :
  * SER : sea, seas, sea, seamos, seáis, sean.
  * ESTAR : esté, estés, esté, estemos, estéis, estén.
  * IR : vaya, vayas, vaya, vayamos, vayáis, vayan.
  * TENER : tenga, tengas, tenga, tengamos, tengáis, tengan.
  * HACER : haga, hagas, haga, hagamos, hagáis, hagan.
- Emplois obligatoires :
  * L'obligation impersonnelle + que : "Es necesario que estudies."
  * Le souhait et l'ordre : "Quiero que vengas." / "¡No hables!" (défense / impératif négatif).
  * Le doute : "Dudo que sea verdad."

4. La Voz Pasiva y la Pasiva Refleja :
- Voix passive classique : SER + Participe passé (accordé en genre et en nombre) + POR :
  * "El libro fue escrito por Cervantes."
  * "Las decisiones fueron tomadas por el director."
- Passif réfléchi (très courant en espagnol) : SE + Verbe à la 3e personne :
  * "Se habla español en muchos países."
  * "Se venden casas."`,
    definitions: [
      {
        term: 'Ser vs Estar',
        definition: "Opposition fondamentale entre SER (essence, identité intrinsèque, heure) et ESTAR (état circonstanciel ou transitoire, localisation dans l'espace)."
      },
      {
        term: 'Subjuntivo',
        definition: "Mode verbal exprimant le virtuel, le doute, le désir, l'obligation et la défense avec 'no'."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Règle d\'emploi de SER',
        statement: 'SER définit la nature profonde, la nationalité, la profession, l\'origine et l\'expression de l\'heure.',
        explanation: 'Exemple : "Soy de Costa de Marfil. Son las diez."'
      },
      {
        name: 'Règle d\'emploi de ESTAR',
        statement: 'ESTAR situe dans l\'espace géographique et décrit un état physique ou psychologique transitoire.',
        explanation: 'Exemple : "Abidjan está en el sur. Estoy muy feliz."'
      },
      {
        name: 'Règle d\'accord du participe passé dans la voix passive',
        statement: 'Dans la tournure passive avec SER, le participe passé s\'accorde obligatoirement en genre et en nombre avec le sujet.',
        explanation: 'Exemple : "Las cartas fueron enviadas."'
      }
    ],
    formulas: [
      {
        name: 'Règle de conversion à la voix passive espagnole',
        formula: 'Sujet Passif + [SER conjugué au temps de la phrase active] + Participe Passé (accordé) + por + Complément d\'Agent',
        explanation: 'En espagnol, le participe passé s\'accorde toujours en genre et en nombre avec le sujet passif.'
      },
      {
        name: 'Formation de l\'impératif négatif (Défense)',
        formula: 'NO + Verbe au Présent du Subjonctif (ex: ¡No fumes! / ¡No toques!)',
        explanation: 'La défense (impératif négatif) utilise obligatoirement le subjonctif présent en espagnol.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Choisir entre SER et ESTAR',
        procedure: '1. Identifier si la proposition exprime une identité/caractéristique permanente (-> SER) ou un état temporaire/une localisation (-> ESTAR).\n2. Vérifier si l\'adjectif change de sens selon l\'auxiliaire (ex: ser listo = être intelligent / estar listo = être prêt).\n3. Conjuguer au temps et à la personne appropriés.',
        tip: 'Pour une ville ou un lieu géographique, employer toujours ESTAR.'
      },
      {
        stepNumber: 2,
        title: 'Distinguer POR et PARA sans hésiter',
        procedure: '1. Se demander si l\'élément introduit est la cause (vers l\'arrière -> POR) ou le but/destination (vers l\'avant -> PARA).\n2. Vérifier les expressions idiomatiques (por favor, por la mañana, para siempre).',
        tip: 'PARA répond à la question "¿Para qué?" (Dans quel but ?).'
      }
    ],
    examples: [
      {
        statement: 'Compléter par SER ou ESTAR : "Madrid ... la capital de España y ... en el centro del país."',
        solution: 'Madrid ES la capital de España (identité/définition permanente) y ESTÁ en el centro del país (localisation géographique).'
      },
      {
        statement: 'Traduire : "Il est nécessaire que nous protégions la nature."',
        solution: '"Es necesario que protejamos la naturaleza." (Subjonctif présent obligatoire après formule impersonnelle).'
      }
    ],
    exercises: [
      {
        question: 'Remplacer les points par POR ou PARA :\n1. Estudio mucho ... aprobar el examen.\n2. Llegamos tarde ... el tráfico.',
        correction: '1. Estudio mucho PARA aprobar el examen (but / objectif).\n2. Llegamos tarde POR el tráfico (cause / motif).'
      }
    ],
    examTraps: [
      'Employer SER pour localiser un lieu ou une personne au lieu de ESTAR.',
      'Oublier l\'alternance de terminaison au subjonctif (-AR devient -e, -ER/-IR devient -a).',
      'Confondre POR (cause) et PARA (but/destination).'
    ],
    quickMemo: 'SER = nature, métier, heure, nationalité. ESTAR = localisation, état passager. PARA = but, destinataire. POR = cause, moyen.',
    evaluationSituation: {
      context: 'En el marco de un intercambio escolar con el Instituto Cervantes de Abidjan, un estudiante español te pide que le presentes tu ciudad.',
      instructions: [
        '1. Presenta la localización y las características de tu ciudad utilizando adecuadamente SER y ESTAR.',
        '2. Explica por qué es importante proteger los monumentos históricos utilizando PARA y el subjuntivo.'
      ],
      solutionGuide: 'Utiliser "Mi ciudad es hermosa y dinámica (SER). Está situada en el sur (ESTAR). Es indispensable que cuidemos los monumentos para que las generaciones futuras los conozcan (Subjuntivo + PARA)."'
    }
  },

  // =========================================================================
  // ESPAGNOL : VOCABULAIRE THÉMATIQUE DU BAC (ENVIRONNEMENT, JEUNESSE, SOCIÉTÉ)
  // =========================================================================
  {
    id: 'espagnol-vocabulaire-temas-sociedad-medio-ambiente',
    discipline: 'espagnol',
    disciplineLabel: 'Espagnol (Terminale A, C, D)',
    level: 'terminale',
    levelLabel: 'Terminale (Tle A, C, D)',
    serie: 'tle_a',
    serieLabel: 'Terminale Toutes Séries',
    chapter: 'Vocabulario Temático & Redacción: Medio Ambiente, Juventud y Sociedad',
    lessonTitle: 'Léxico Oficial del Bachillerato: El Cambio Climático, la Juventud y el Trabajo',
    keywords: [
      'medio ambiente', 'cambio climatico', 'calentamiento global',
      'vocabulaire espagnol', 'juventud', 'trabajo', 'redaccion',
      'conectores', 'espagnol vocabulaire', 'lexique espagnol'
    ],
    objectifs: [
      'Mobiliser le lexique de l\'environnement : el calentamiento global, los residuos, el reciclaje, las energías renovables',
      'Maîtriser le vocabulaire du monde du travail et de l\'éducation : el aprendizaje, la carrera, el éxito, el desempleo',
      'Rédiger une expression écrite argumentée (Redacción) avec connecteurs logiques espagnols (en primer lugar, sin embargo, por lo tanto, en conclusión)'
    ],
    fullCourseContent: `1. El Medio Ambiente y el Cambio Climático :
- El calentamiento global / El cambio climático : Le réchauffement climatique.
- Los gases de efecto invernadero : Les gaz à effet de serre.
- La deforestación y la desertificación : La déforestation et la désertification.
- La escasez de agua / La sequía : La pénurie d'eau / La sécheresse.
- Las energías renovables (la energía solar, eólica) : Les énergies renouvelables.
- Proteger la naturaleza / Clasificar los residuos : Protéger la nature / Trier les déchets.
- Fórmulas de acción : "Es imprescindible que protejamos nuestro planeta para las generaciones futuras."

2. La Juventud, la Educación y el Trabajo :
- El éxito académico / Aprobar el examen : La réussite scolaire / Réussir l'examen.
- El fracaso escolar / Suspender : L'échec scolaire / Échouer.
- El desempleo / El paro juvenil : Le chômage des jeunes.
- La formación profesional y la pasantía : La formation professionnelle et le stage.
- La solidaridad y el voluntariado : La solidarité et le bénévolat.

3. Conectores Lógicos para una Redacción :
- Pour introduire : "En primer lugar" (Tout d'abord), "Para empezar" (Pour commencer), "Hoy en día" (De nos jours).
- Pour ajouter : "Además" (De plus), "Asimismo" (De même).
- Pour contraster : "Sin embargo" (Cependant), "No obstante" (Néanmoins), "Por el contrario" (Au contraire).
- Pour exprimer la cause et la conséquence : "Puesto que / Ya que" (Puisque), "Por lo tanto / Por consiguiente" (Par conséquent).
- Pour conclure : "En conclusión" (En conclusion), "Para terminar" (Pour finir).`,
    definitions: [
      {
        term: 'Redacción guiada',
        definition: "Exercice d'expression écrite au Baccalauréat nécessitant une structure ordonnée (introduction, développement articulé avec connecteurs, conclusion) et un lexique précis."
      }
    ],
    propertiesAndRules: [
      {
        name: 'Cohérence textuelle et connecteurs logiques',
        statement: 'Une rédaction de Terminale doit obligatoirement articuler introduction, deux paragraphes argumentatifs reliés par des connecteurs, et conclusion synthétique.',
        explanation: 'Exemple : En primer lugar... Además... Sin embargo... Por lo tanto.'
      }
    ],
    formulas: [
      {
        name: 'Structure type d\'argumentation en espagnol',
        formula: 'En primer lugar [Argument 1] + Además [Argument 2] + Sin embargo [Nuance] + Por lo tanto [Conclusion]',
        explanation: 'Enchaînement logique canonique pour structurer un paragraphe argumentatif cohérent lors de l\'épreuve écrite.'
      }
    ],
    stepByStepMethods: [
      {
        stepNumber: 1,
        title: 'Analyser le sujet de redacción au Bac',
        procedure: '1. Souligner les mots-clés du thème (ex: medio ambiente, tecnologías, educación).\n2. Déterminer la consigne exacte (dar su opinión, proponer soluciones, debatir).\n3. Lister 4 connecteurs logiques à utiliser impérativement.',
        tip: 'Éviter le hors-sujet en reliant chaque idée directement au libellé.'
      },
      {
        stepNumber: 2,
        title: 'Rédiger les paragraphes avec variété lexicale',
        procedure: '1. Introduire le premier argument avec "En primer lugar".\n2. Ajouter un exemple illustratif concret.\n3. Conclure par une prise de position personnelle ("A mi juicio...", "Desde mi punto de vista...").',
        tip: 'Soigner les accords adjectifs-noms et l\'accentuation écrite (tilde).'
      }
    ],
    examples: [
      {
        statement: 'Illustrer une prise de position sur les énergies renouvelables.',
        solution: '"A mi parecer, el desarrollo de las energías renovables es imprescindible para frenar el cambio climático y proteger nuestro futuro."'
      }
    ],
    exercises: [
      {
        question: 'Compléter par le connecteur logique qui convient (Sin embargo / Por lo tanto / En primer lugar) :\n1. ..., el reciclaje reduce los residuos urbanos.\n2. Muchos países contaminan ; ..., existen iniciativas ecológicas alentadoras.',
        correction: '1. En primer lugar, el reciclaje reduce los residuos urbanos.\n2. Muchos países contaminan ; sin embargo, existen iniciativas ecológicas alentadoras.'
      }
    ],
    examTraps: [
      'Traduire mot à mot du français en oubliant les prépositions espagnoles régies.',
      'Oublier les accents écrits obligatoires (éxito, formación, lección, país).',
      'Rédiger un bloc compact de texte sans alinéa ni connecteurs.'
    ],
    quickMemo: 'Redacción : En primer lugar (intro) -> Además (ajout) -> Sin embargo (nuance) -> Por lo tanto (conclusion). Varier le vocabulaire et employer le subjonctif.',
    evaluationSituation: {
      context: 'El club ecológico de tu colegio organiza una campaña sobre la protección del medio ambiente.',
      instructions: [
        '1. Explica dos consecuencias graves del cambio climático.',
        '2. Propone dos soluciones ecológicas que los jóvenes pueden aplicar.'
      ],
      solutionGuide: 'Mentionner "la sequía y el aumento de las temperaturas" et proposer "utilizar el transporte público y clasificar los residuos".'
    }
  }
];
