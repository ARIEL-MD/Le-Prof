import { LanguageResolutionResult } from "./types";

export interface SpanishVerb {
  infinitivo: string;
  presente: string;
  indefinido: string;
  subjuntivo: string;
  gerundio: string;
  participio: string;
  french: string;
}

export const SPANISH_VERBS: Record<string, SpanishVerb> = {
  ser: { infinitivo: "ser", presente: "soy, eres, es, somos, sois, son", indefinido: "fui, fuiste, fue, fuimos, fuisteis, fueron", subjuntivo: "sea, seas, sea, seamos, seáis, sean", gerundio: "siendo", participio: "sido", french: "être (nature, identité, caractéristique permanente)" },
  estar: { infinitivo: "estar", presente: "estoy, estás, está, estamos, estáis, están", indefinido: "estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron", subjuntivo: "esté, estés, esté, estemos, estéis, estén", gerundio: "estando", participio: "estado", french: "être (état temporaire, localisation, sentiment)" },
  ir: { infinitivo: "ir", presente: "voy, vas, va, vamos, vais, van", indefinido: "fui, fuiste, fue, fuimos, fuisteis, fueron", subjuntivo: "vaya, vayas, vaya, vayamos, vayáis, vayan", gerundio: "yendo", participio: "ido", french: "aller" },
  tener: { infinitivo: "tener", presente: "tengo, tienes, tiene, tenemos, tenéis, tienen", indefinido: "tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron", subjuntivo: "tenga, tengas, tenga, tengamos, tengáis, tengan", gerundio: "teniendo", participio: "tenido", french: "avoir, posséder" },
  hacer: { infinitivo: "hacer", presente: "hago, haces, hace, hacemos, hacéis, hacen", indefinido: "hice, hiciste, hizo, hicimos, hicisteis, hicieron", subjuntivo: "haga, hagas, haga, hagamos, hagáis, hagan", gerundio: "haciendo", participio: "hecho", french: "faire" },
  poder: { infinitivo: "poder", presente: "puedo, puedes, puede, podemos, podéis, pueden", indefinido: "pude, pudiste, pudo, pudimos, pudisteis, pudieron", subjuntivo: "pueda, puedas, pueda, podamos, podáis, puedan", gerundio: "pudiendo", participio: "podido", french: "pouvoir" },
  decir: { infinitivo: "decir", presente: "digo, dices, dice, decimos, decís, dicen", indefinido: "dije, dijiste, dijo, dijimos, dijisteis, dijeron", subjuntivo: "diga, digas, diga, digamos, digáis, digan", gerundio: "diciendo", participio: "dicho", french: "dire" },
  ver: { infinitivo: "ver", presente: "veo, ves, ve, vemos, veis, ven", indefinido: "vi, viste, vio, vimos, visteis, vieron", subjuntivo: "vea, veas, vea, veamos, veáis, vean", gerundio: "viendo", participio: "visto", french: "voir" },
  dar: { infinitivo: "dar", presente: "doy, das, da, damos, dais, dan", indefinido: "di, diste, dio, dimos, disteis, dieron", subjuntivo: "dé, des, dé, demos, deis, den", gerundio: "dando", participio: "dado", french: "donner" },
  saber: { infinitivo: "saber", presente: "sé, sabes, sabe, sabemos, sabéis, saben", indefinido: "supe, supiste, supo, supimos, supisteis, supieron", subjuntivo: "sepa, sepas, sepa, sepamos, sepáis, sepan", gerundio: "sabiendo", participio: "sabido", french: "savoir" },
  querer: { infinitivo: "querer", presente: "quiero, quieres, quiere, queremos, queréis, quieren", indefinido: "quise, quisiste, quiso, quisimos, quisisteis, quisieron", subjuntivo: "quiera, quieras, quiera, queramos, queráis, quieran", gerundio: "queriendo", participio: "querido", french: "vouloir, aimer" },
  poner: { infinitivo: "poner", presente: "pongo, pones, pone, ponemos, ponéis, ponen", indefinido: "puse, pusiste, puso, pusimos, pusisteis, pusieron", subjuntivo: "ponga, pongas, ponga, pongamos, pongáis, pongan", gerundio: "poniendo", participio: "puesto", french: "mettre, poser" },
  hablar: { infinitivo: "hablar", presente: "hablo, hablas, habla, hablamos, habláis, hablan", indefinido: "hablé, hablaste, habló, hablamos, hablasteis, hablaron", subjuntivo: "hable, hables, hable, hablemos, habléis, hablen", gerundio: "hablando", participio: "hablado", french: "parler" },
  comer: { infinitivo: "comer", presente: "como, comes, come, comemos, coméis, comen", indefinido: "comí, comiste, comió, comimos, comisteis, comieron", subjuntivo: "coma, comas, coma, comamos, comáis, coman", gerundio: "comiendo", participio: "comido", french: "manger" },
  vivir: { infinitivo: "vivir", presente: "vivo, vives, vive, vivimos, vivís, viven", indefinido: "viví, viviste, vivió, vivimos, vivisteis, vivieron", subjuntivo: "viva, vivas, viva, vivamos, viváis, vivan", gerundio: "viviendo", participio: "vivido", french: "vivre" },
};

/**
 * Solve Ser vs Estar exercise
 */
export function solveSerVsEstar(sentence: string): {
  solvedSentence: string;
  chosenVerb: string;
  ruleExplanation: string;
} {
  const clean = sentence.trim();
  const lower = clean.toLowerCase();

  let chosen = "es";
  let explanation = "Utilisation de SER pour exprimer une caractéristique permanente ou une définition.";

  if (/\b(cansad|enferm|trist|content|alegr|ocupad|preocupad|aburrid|limpi|suci)\w*\b/i.test(lower)) {
    chosen = /\b(yo)\b/i.test(lower) ? "estoy" : (/\b(tú)\b/i.test(lower) ? "estás" : (/\b(ellos|ellas|ustedes)\b/i.test(lower) ? "están" : "está"));
    explanation = "Utilisation de **ESTAR** : il s'agit d'un **état temporaire, d'une humeur ou d'une condition physique/psychologique** susceptible de changer.";
  } else if (/\b(en\s+(madrid|abidjan|casa|la escuela|la clase|el aula|españa))\b/i.test(lower) || /\b(aquí|allí|lejos|cerca)\b/i.test(lower)) {
    chosen = /\b(yo)\b/i.test(lower) ? "estoy" : (/\b(ellos|ellas)\b/i.test(lower) ? "están" : "está");
    explanation = "Utilisation de **ESTAR** : il s'agit de la **localisation géographique ou spatiale** d'une personne ou d'un objet.";
  } else if (/\b(profesor|médico|abogado|estudiante|alumno|chileno|marfileño|español|francés)\b/i.test(lower)) {
    chosen = /\b(yo)\b/i.test(lower) ? "soy" : (/\b(tú)\b/i.test(lower) ? "eres" : (/\b(ellos|ellas)\b/i.test(lower) ? "son" : "es"));
    explanation = "Utilisation de **SER** : il s'agit de l'**identité, de la nationalité ou de la profession** (caractéristique constitutive).";
  } else if (/\b(las\s+(dos|tres|cuatro|cinco|seis|ocho|diez)|la\s+una)\b/i.test(lower)) {
    chosen = /\bla\s+una\b/i.test(lower) ? "es" : "son";
    explanation = "Utilisation de **SER** : expression obligatoire pour **l'heure et la date** (*Son las tres de la tarde*).";
  }

  const solvedSentence = clean.replace(/[\(\[\_]+(ser|estar)[\)\]\_]+/i, `**${chosen}**`);

  return {
    solvedSentence,
    chosenVerb: chosen,
    ruleExplanation: `Règle de distinction fondamentale SER vs ESTAR :\n• **SER** s'emploie pour : l'identité, l'origine, la nationalité, la profession, l'heure, et les qualités intrinsèques/permanentes.\n• **ESTAR** s'emploie pour : la localisation dans l'espace (*¿Dónde está?*), les états physiques et émotionnels passagers (*Estoy alegre/cansado*), et la forme progressive (*estar + gérondif*).`,
  };
}

/**
 * Solve Por vs Para exercise
 */
export function solvePorVsPara(sentence: string): {
  solvedSentence: string;
  chosenPreposition: "por" | "para";
  ruleExplanation: string;
} {
  const clean = sentence.trim();
  const lower = clean.toLowerCase();

  let chosen: "por" | "para" = "para";
  let explanation = "Expression du but ou du destinataire.";

  if (/\b(gracias|causa|motivo|culpa|medio|teléfono|tren|avión|precio|euros|francos|tiempo|dos horas|la mañana|la tarde)\b/i.test(lower)) {
    chosen = "por";
    explanation = "Utilisation de **POR** : exprime la **cause, le moyen de transport/communication, le prix/échange, ou la durée approximative**.";
  } else if (/\b(estudiar|aprender|viajar|comprar|mañana|el lunes|ti|mí|los niños|aprobar|el examen)\b/i.test(lower)) {
    chosen = "para";
    explanation = "Utilisation de **PARA** : exprime le **but / la finalité** (+ infinitif), le **destinataire** (*para ti*), ou une **échéance temporelle précise** (*para mañana*).";
  }

  const solvedSentence = clean.replace(/[\(\[\_]+(por|para)[\)\]\_]+/i, `**${chosen}**`);

  return {
    solvedSentence,
    chosenPreposition: chosen,
    ruleExplanation: `Règle d'or POR vs PARA :\n• **POR** = La CAUSE (le pourquoi en amont), le moyen, l'échange, l'auteur/agent (*por el autor*).\n• **PARA** = Le BUT / L'OBJECTIF (vers quoi on tend : *estudiar para triunfar*), le destinataire (*este regalo es para ti*), ou la date limite (*para el viernes*).`,
  };
}

/**
 * Detailed sentence analysis for a single Spanish sentence (preventing dissertation)
 */
export function analyzeSpanishSentence(sentence: string): {
  frenchTranslation: string;
  syntacticBreakdown: Array<{ function: string; element: string; nature: string }>;
  grammarRules: string;
  sentenceTransformations: {
    negativa: string;
    interrogativa: string;
    pasado: string;
  };
} {
  const clean = sentence.trim();
  const words = clean.split(/\s+/);

  const breakdown: Array<{ function: string; element: string; nature: string }> = [];
  let subject = words[0];
  let verb = words[1] || "";
  let rest = words.slice(2).join(" ");

  breakdown.push({ function: "Sujeto (Sujet)", element: subject, nature: "Pronom personnel ou Groupe Nominal" });
  if (verb) {
    breakdown.push({ function: "Verbo conjugado", element: verb, nature: "Verbe régulier ou irrégulier" });
  }
  if (rest) {
    breakdown.push({ function: "Complemento directo / indirecto / circunstancial", element: rest, nature: "Groupe Prépositionnel ou Nominal" });
  }

  // Common sentence translations
  let frenchTranslation = "Traduction en français de la phrase espagnole.";
  const lower = clean.toLowerCase();
  if (/^el alumno estudia espa[ñn]ol/i.test(lower)) frenchTranslation = "L'élève étudie l'espagnol.";
  else if (/^la escuela es muy importante/i.test(lower)) frenchTranslation = "L'école est très importante.";
  else if (/^estoy cansado/i.test(lower)) frenchTranslation = "Je suis fatigué.";
  else if (/^voy al colegio todos los d[íi]as/i.test(lower)) frenchTranslation = "Je vais au collège tous les jours.";
  else if (/^los j[óo]venes protegen el medio ambiente/i.test(lower)) frenchTranslation = "Les jeunes protègent l'environnement.";
  else frenchTranslation = `[Traduction fidèle de « ${clean} » selon le contexte].`;

  return {
    frenchTranslation,
    syntacticBreakdown: breakdown,
    grammarRules: `1. **Omission fréquente du pronom sujet** : En espagnol, la terminaison du verbe indique la personne (ex : *hablo* = je parle, pas besoin de répéter *yo* sauf pour insister).\n2. **Double ponctuation obligatoire** : Toute phrase interrogative s'ouvre par **¿** et se ferme par **?** ; toute phrase exclamative s'ouvre par **¡** et se ferme par **!**.\n3. **La préposition « a » devant un COD de personne** : Devant un être humain déterminé, on intercale obligatoirement la préposition « a » (*Veo a mi amigo*).`,
    sentenceTransformations: {
      negativa: `Forma negativa : No + verbo + resto (Ex : No ${verb} ${rest}).`,
      interrogativa: `Forma interrogativa : ¿ ${clean} ? (Marque d'inversion d'ouverture ¿).`,
      pasado: `Pretérito indefinido : Transformer le verbe au passé révolu.`,
    },
  };
}

/**
 * Spanish essay / Redacción generator for exam topics
 */
export function generateSpanishRedaccion(topic: string): {
  title: string;
  spanishRedaccion: string;
  frenchMirrorTranslation: string;
  keyConnectors: Array<{ word: string; translation: string; function: string }>;
} {
  const clean = topic.trim();
  const lower = clean.toLowerCase();

  let title = "Tema: La importancia de la educación para los jóvenes (Redacción)";
  let sentences = [
    "La educación constituye el pilar fundamental para el desarrollo personal, cívico y profesional de la juventud.",
    "En la escuela, los alumnos no solo adquieren conocimientos teóricos, sino también valores esenciales de convivencia.",
    "Además, una sólida formación académica permite a los jóvenes acceder a un empleo digno y combatir la pobreza.",
    "Por otro lado, la escuela enseña el respeto mutuo, la solidaridad y la igualdad entre hombres y mujeres.",
    "En conclusión, invertir en la educación es la mejor manera de garantizar un futuro próspero y pacífico para toda la sociedad.",
  ];

  let frenchSentences = [
    "L'éducation constitue le pilier fondamental pour le développement personnel, civique et professionnel de la jeunesse.",
    "À l'école, les élèves n'acquièrent pas seulement des connaissances théoriques, mais aussi des valeurs essentielles de vie en société.",
    "De plus, une solide formation académique permet aux jeunes d'accéder à un emploi digne et de lutter contre la pauvreté.",
    "D'un autre côté, l'école enseigne le respect mutuel, la solidarité et l'égalité entre les hommes et les femmes.",
    "En conclusion, investir dans l'éducation est la meilleure manière de garantir un avenir prospère et pacifique pour toute la société.",
  ];

  if (/medio ambiente|naturaleza|contaminaci[óo]n|planeta/i.test(lower)) {
    title = "Tema: La protección del medio ambiente por los jóvenes";
    sentences = [
      "Hoy en día, la protección del medio ambiente es una urgencia vital para la supervivencia de nuestro planeta.",
      "Los jóvenes deben tomar conciencia del grave peligro que representan la contaminación y el calentamiento global.",
      "Por consiguiente, cada ciudadano puede contribuir adoptando gestos sencillos como reciclar y ahorrar agua y energía.",
      "Además, es necesario plantar árboles y reducir drásticamente el uso de plásticos no biodegradables.",
      "Para concluir, cuidar la naturaleza no es una opción, sino un deber sagrado hacia las generaciones venideras.",
    ];
    frenchSentences = [
      "Aujourd'hui, la protection de l'environnement est une urgence vitale pour la survie de notre planète.",
      "Les jeunes doivent prendre conscience du grave danger que représentent la pollution et le réchauffement climatique.",
      "Par conséquent, chaque citoyen peut contribuer en adoptant des gestes simples comme recycler et économiser l'eau et l'énergie.",
      "De plus, il est nécessaire de planter des arbres et de réduire drastiquement l'usage des plastiques non biodégradables.",
      "Pour conclure, prendre soin de la nature n'est pas une option, mais un devoir sacré envers les générations futures.",
    ];
  } else if (/redes sociales|internet|m[óo]vil|tel[ée]fono/i.test(lower)) {
    title = "Tema: El impacto de las redes sociales en la vida de los adolescentes";
    sentences = [
      "En el siglo XXI, las redes sociales forman una parte inseparable de la vida cotidiana de millones de jóvenes.",
      "Por un lado, permiten comunicarse instantáneamente con amigos de todo el mundo y acceder a valiosa información.",
      "Sin embargo, el uso abusivo de las pantallas puede causar adicción, insomnio y una peligrosa pérdida de concentración.",
      "Por tanto, los adolescentes deben aprender a navegar de manera crítica y responsable protegiendo su intimidad.",
      "En resumen, la tecnología es una herramienta extraordinaria si se utiliza con prudencia y equilibrio.",
    ];
    frenchSentences = [
      "Au XXIe siècle, les réseaux sociaux font partie intégrante du quotidien de millions de jeunes.",
      "D'un côté, ils permettent de communiquer instantanément avec des amis du monde entier et d'accéder à des informations précieuses.",
      "Cependant, l'usage abusif des écrans peut provoquer de l'addiction, des insomnies et une dangereuse baisse de concentration.",
      "Par conséquent, les adolescents doivent apprendre à naviguer de manière critique et responsable en protégeant leur vie privée.",
      "En résumé, la technologie est un outil extraordinaire si on l'utilise avec prudence et équilibre.",
    ];
  }

  const spanishRedaccion = sentences.map((s, idx) => `${idx + 1}. ${s}`).join("\n");
  const frenchMirrorTranslation = frenchSentences.map((s, idx) => `${idx + 1}. ${s}`).join("\n");

  return {
    title,
    spanishRedaccion,
    frenchMirrorTranslation,
    keyConnectors: [
      { word: "En primer lugar", translation: "En premier lieu", function: "Commencer l'argumentation" },
      { word: "Además", translation: "De plus / En outre", function: "Ajouter un argument convergent" },
      { word: "Por un lado ... Por otro lado", translation: "D'un côté ... D'un autre côté", function: "Nuancer avec deux perspectives" },
      { word: "Sin embargo", translation: "Cependant / Néanmoins", function: "Introduire une opposition" },
      { word: "En conclusión / En resumen", translation: "En conclusion / En résumé", function: "Clore la rédaction" },
    ],
  };
}

export function cleanSpanishPrefixes(sentence: string): string {
  let res = sentence.trim();
  let prev = "";
  while (res !== prev) {
    prev = res;
    res = res
      .replace(/^(?:voici\s+(?:mon|un|notre)?\s*devoir(?:\s+d'espagnol)?\s*:?)/i, "")
      .replace(/^(?:ejercicio(?:\s*\d+)?\s*:?|exercice(?:\s*\d+)?\s*:?)/i, "")
      .replace(/^(?:transforma\s+(?:esta\s+frase\s+)?a\s+(?:la\s+)?voz\s+pasiva\s*:?)/i, "")
      .replace(/^(?:pasa\s+(?:esta\s+frase\s+)?a\s+(?:la\s+)?voz\s+pasiva\s*:?)/i, "")
      .replace(/^(?:pon\s+(?:esta\s+frase\s+)?en\s+(?:la\s+)?voz\s+pasiva\s*:?)/i, "")
      .replace(/^(?:voz\s+pasiva\s*:?|passif\s*:?)/i, "")
      .replace(/^(?:completa\s+con\s+(?:el\s+)?subjuntivo\s*:?)/i, "")
      .trim();
  }
  return res.replace(/^["':\s]+|["'\s]+$/g, "");
}

/**
 * Solve passive voice transformation in Spanish
 */
export function solveSpanishPassiveVoice(sentence: string): {
  solvedSentence: string;
  breakdown: string;
  ruleExplanation: string;
} {
  const clean = cleanSpanishPrefixes(sentence).replace(/[.?]$/, "");
  const words = clean.split(/\s+/);

  // Common verbs and their participles (masculine and feminine)
  const participles: Record<string, { ms: string; fs: string; mp: string; fp: string; tense: "presente" | "indefinido" }> = {
    escribió: { ms: "escrito", fs: "escrita", mp: "escritos", fp: "escritas", tense: "indefinido" },
    escribe: { ms: "escrito", fs: "escrita", mp: "escritos", fp: "escritas", tense: "presente" },
    explicó: { ms: "explicado", fs: "explicada", mp: "explicados", fp: "explicadas", tense: "indefinido" },
    explica: { ms: "explicado", fs: "explicada", mp: "explicados", fp: "explicadas", tense: "presente" },
    leyó: { ms: "leído", fs: "leída", mp: "leídos", fp: "leídas", tense: "indefinido" },
    lee: { ms: "leído", fs: "leída", mp: "leídos", fp: "leídas", tense: "presente" },
    descubrió: { ms: "descubierto", fs: "descubierta", mp: "descubiertos", fp: "descubiertas", tense: "indefinido" },
    construyó: { ms: "construido", fs: "construida", mp: "construidos", fp: "construidas", tense: "indefinido" },
    hizo: { ms: "hecho", fs: "hecha", mp: "hechos", fp: "hechas", tense: "indefinido" },
    pintó: { ms: "pintado", fs: "pintada", mp: "pintados", fp: "pintadas", tense: "indefinido" },
    compró: { ms: "comprado", fs: "comprada", mp: "comprados", fp: "compradas", tense: "indefinido" },
  };

  for (let i = 1; i < words.length - 1; i++) {
    const w = words[i].toLowerCase();
    const pInfo = participles[w] || (w.endsWith("ió") || w.endsWith("ó") ? {
      ms: `${w.replace(/ió$|ó$/, "")}ado`,
      fs: `${w.replace(/ió$|ó$/, "")}ada`,
      mp: `${w.replace(/ió$|ó$/, "")}ados`,
      fp: `${w.replace(/ió$|ó$/, "")}adas`,
      tense: "indefinido" as const
    } : null);

    if (pInfo) {
      const subject = words.slice(0, i).join(" ");
      const rawObject = words.slice(i + 1).join(" ");
      const isFeminine = /\b(la|las|una|unas)\b/i.test(rawObject) || /\b\w+(ción|sión|dad|tad|ez)\b/i.test(rawObject);
      const isPlural = /\b(los|las|unos|unas)\b/i.test(rawObject) || rawObject.toLowerCase().endsWith("s");

      let auxSer = pInfo.tense === "indefinido" 
        ? (isPlural ? "fueron" : "fue") 
        : (isPlural ? "son" : "es");

      let part = isPlural 
        ? (isFeminine ? pInfo.fp : pInfo.mp) 
        : (isFeminine ? pInfo.fs : pInfo.ms);

      const capitalizedObj = rawObject.charAt(0).toUpperCase() + rawObject.slice(1);
      const solved = `${capitalizedObj} ${auxSer} ${part} por ${subject}.`;

      return {
        solvedSentence: solved,
        breakdown: `• Complément d'Objet Direct (COD) devenu Sujet Patient : **${rawObject}**\n• Auxiliaire SER conjugué : **${auxSer}** (${pInfo.tense === "indefinido" ? "Pretérito indefinido" : "Presente"})\n• Participe passé accordé en genre et en nombre : **${part}** (${isFeminine ? "féminin" : "masculin"} ${isPlural ? "pluriel" : "singulier"})\n• Complément d'agent introduit par POR : **por ${subject}**`,
        ruleExplanation: `Structure obligatoire de la voix passive en espagnol (Voz pasiva con SER) :\n**Sujeto paciente + SER (au temps du verbe actif) + Participio pasado (accordé) + POR + Complemento agente**.\nExemple classique : *El autor escribió la novela ➜ La novela fue escrita por el autor*.`,
      };
    }
  }

  // Fallback
  return {
    solvedSentence: `Sujeto paciente + SER + Participio pasado (acordado) + por + Complemento agente.`,
    breakdown: `1. Placer le complément d'objet direct en début de phrase.\n2. Conjuguer le verbe SER au même temps que le verbe actif d'origine (es/son ou fue/fueron).\n3. Accorder le participe passé en genre et en nombre avec le nouveau sujet.\n4. Introduire l'auteur de l'action par « por ».`,
    ruleExplanation: `La voix passive en espagnol utilise obligatoirement l'auxiliaire SER et la préposition POR.`,
  };
}

/**
 * Solve Spanish Subjunctive exercise
 */
export function solveSpanishSubjunctive(sentence: string): {
  solvedSentence: string;
  subjunctiveForm: string;
  ruleExplanation: string;
} {
  const clean = cleanSpanishPrefixes(sentence).trim();
  const lower = clean.toLowerCase();

  let verbCandidate = "estudies";
  let explanation = "Emploi du subjonctif présent après une expression d'obligation ou de nécessité impersonnelle (*es necesario que, es importante que*).";

  if (/estudi\w*/i.test(lower)) {
    verbCandidate = /tú/i.test(lower) ? "estudies" : (/los jóvenes|alumnos|ellos/i.test(lower) ? "estudien" : "estudie");
  } else if (/aprend\w*/i.test(lower)) {
    verbCandidate = /tú/i.test(lower) ? "aprendas" : (/los jóvenes|alumnos|ellos/i.test(lower) ? "aprendan" : "aprenda");
  } else if (/hag\w*|hacer/i.test(lower)) {
    verbCandidate = /tú/i.test(lower) ? "hagas" : "haga";
  } else if (/le\w*|leer/i.test(lower)) {
    verbCandidate = /tú/i.test(lower) ? "leas" : "lea";
  } else if (/escrib\w*|escribir/i.test(lower)) {
    verbCandidate = /tú/i.test(lower) ? "escribas" : "escriba";
  }

  const solvedSentence = clean.replace(/[\(\[\_]+[a-zA-Z\s]+[\)\]\_]+/i, `**${verbCandidate}**`);

  return {
    solvedSentence: solvedSentence !== clean ? solvedSentence : `${clean} ➜ Verbo al Subjuntivo : **${verbCandidate}**`,
    subjunctiveForm: verbCandidate,
    ruleExplanation: `Règle du Subjonctif Présent en espagnol (Presente de Subjuntivo) :\n1. **Inversion des voyelles caractéristiques** :\n   • Verbes en -AR prennent les terminaisons en **-e** (-e, -es, -e, -emos, -éis, -en).\n   • Verbes en -ER et -IR prennent les terminaisons en **-a** (-a, -as, -a, -amos, -áis, -an).\n2. **Déclencheurs fréquents** : *Es necesario que, Es importante que, Para que, Ojalá, Quiero que, Dudo que*.`,
  };
}
