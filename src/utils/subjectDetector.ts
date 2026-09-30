import { DisciplineType, EducationCycle, SecondaryLevel, AcademicSerie } from '../types';
import { DEFAULT_FASCICULES } from '../data/defaultFascicules';
import { parseConjugationRequest } from './conjugator/universalConjugator';

const VALID_DISCIPLINES: DisciplineType[] = [
  'philo', 'francais', 'histoire', 'geographie',
  'mathematiques', 'physique_chimie', 'svt',
  'anglais', 'allemand', 'espagnol',
];

/**
 * Calls the semantic AI classifier (/api/detect-subject) to identify the discipline of a
 * subject/exercise the way a human expert (or Claude) would — by understanding the meaning
 * of the statement, not just matching exact keywords. Works for any discipline (Maths,
 * Physique-Chimie, SVT included) and any class level. Returns null if the AI call fails or
 * times out, so callers can gracefully fall back to the local keyword-based detector.
 */
export async function detectDisciplineWithAI(
  rawSubject: string,
  signal?: AbortSignal
): Promise<{ discipline: DisciplineType; exerciseType?: string } | null> {
  const trimmed = rawSubject.trim();
  if (!trimmed || trimmed.length < 6) return null;

  try {
    const res = await fetch('/api/detect-subject', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subjectTopic: trimmed }),
      signal,
    });
    if (!res.ok) return null;
    const data = await res.json();
    const disc = data?.data?.discipline as DisciplineType | undefined;
    if (!disc || !VALID_DISCIPLINES.includes(disc)) return null;
    return { discipline: disc, exerciseType: data?.data?.exerciseType };
  } catch {
    return null;
  }
}

/**
 * Runs the fast local (instant) detection immediately, then refines it in the background with
 * the semantic AI classifier so that math/physics-chemistry/SVT (and every other discipline)
 * get detected reliably regardless of phrasing or class level. `onRefined` is called only if
 * the AI changes the outcome, so the caller can update its UI without flicker otherwise.
 */
export function detectSubjectMetadataSmart(
  rawSubject: string,
  onRefined: (result: SubjectDetectionResult) => void,
  signal?: AbortSignal
): SubjectDetectionResult {
  const instant = detectSubjectMetadata(rawSubject);

  detectDisciplineWithAI(rawSubject, signal).then((aiResult) => {
    if (!aiResult) return;
    if (aiResult.discipline === instant.discipline) return; // already agrees, nothing to refine
    const refined = detectSubjectMetadata(rawSubject, aiResult.discipline);
    onRefined(refined);
  });

  return instant;
}

export interface SubjectDetectionResult {
  discipline: DisciplineType;
  disciplineLabel: string;
  disciplineIcon?: string;
  cycle: EducationCycle;
  cycleLabel: string;
  level: SecondaryLevel;
  levelLabel: string;
  serie: AcademicSerie;
  serieLabel: string;
  exerciseType: string;
  exerciseCategory: 'dissertation' | 'commentaire' | 'etude_document' | 'reflexion' | 'resume' | 'texte_argumentatif' | 'situation_evaluation' | 'recit_redaction';
  confidence: number;
  matchedKeywords: string[];
  recommendedFasciculeId: string;
  recommendedPlanStructure: '2_axes' | '3_axes';
  explanation: string;
}

interface DisciplineSignature {
  discipline: DisciplineType;
  disciplineLabel: string;
  disciplineIcon?: string;
  fasciculeId: string;
  primaryKeywords: RegExp[];
  secondaryKeywords: RegExp[];
  authorsAndFigures: RegExp[];
  typicalSubjects: RegExp[];
}

const DISCIPLINE_SIGNATURES: DisciplineSignature[] = [
  // 1. PHILOSOPHIE
  {
    discipline: 'philo',
    disciplineLabel: 'Philosophie',
    
    fasciculeId: 'philo-dissertation',
    primaryKeywords: [
      /\b(philosoph\w*|pens[ée]\w+|conscience|inconscient|libert[ée]|libre\s+arbitre|responsabilit[ée]|responsable|d[ée]sir|devoir\s+moral|notion\s+de\s+devoir|morale?|justice|injustice|droit\s+naturel|[ée]tat|etat|v[ée]rit[ée]|raison|bonheur|autrui|existence|exister|ali[ée]nation|souverainet[ée]|th[ée]orie\s+et\s+praxis|aporie|m[ée]taphysique)\b/i,
      /\b(connaissance|religion|foi|dieu|divin|croyance|sacr[ée]|profane|science|technique|travail|nature|culture|l['’]homme|langage|soci[ée]t[ée]|ali[ée]ne|lib[èe]re|affranch\w+|asserv\w+|connaissance\s+de\s+soi|absolu|relatif|universel|singulier|essence|ontolog\w+|d[ée]terminisme|fatalisme)\b/i,
      /\b(sens\s+de\s+l['’]histoire|l['’]histoire|histoire\s+et\s+devenir|devenir\s+historique|[ée]v[ée]nements?\s+historiques?|impr[ée]visible|impr[ée]visibles|pr[ée]visibilit[ée]|contingence|contingent|n[ée]cessit[ée]|n[ée]cessaire|historicisme|ruse\s+de\s+la\s+raison|t[ée]l[ée]ologie)\b/i,
      /\b(falsifiabilit[ée]|r[ée]futabilit[ée]|arraisonnement|homo\s+faber|dur[ée]e|finitude|angoisse\s+existentielle|ethnocentrisme|barbare|barbarie|la\s+mort\s+n['’]est\s+rien|apprendre\s+[àa]\s+mourir)\b/i,
    ],
    secondaryKeywords: [
      /\b(peut-on|faut-il|est-il l[ée]gitime|en quoi|suffit-il|l'homme est-il|l'humanit[ée]|la condition humaine|l'homme|homme)\b/i,
      /\b(vérité|illusion|jugement|vertu|souverain|tyrannie|démocratie|morale|éthique|bien|mal|loi|droit|sens|mort|hasard|destin|progrès)\b/i,
    ],
    authorsAndFigures: [
      /\b(descartes|kant|hegel|nietzsche|sartre|rousseau|platon|aristote|spinoza|marx|freud|alain|bergson|[ée]picure|machiavel|hobbes|locke|hannah arendt|pascal|montaigne|augustin|s[ée]n[èe]que|bacon|jonas|canguilhem|foucault|socrate|leibniz|schopenhauer|cournot|raymond aron|popper|bachelard|claude bernard|l[ée]vi-strauss|durkheim|feuerbach|kierkegaard|camus|jank[ée]l[ée]vitch|ellul|simondon|merleau-ponty|l[ée]vinas)\b/i,
    ],
    typicalSubjects: [
      /nous lib[èe]re-t-il ou nous ali[èe]ne-t-il/i,
      /l'[ée]tat est-il/i,
      /la libert[ée] consiste-t-elle/i,
      /peut-on d[ée]sob[ée]ir/i,
      /le travail est-il/i,
      /l'art est-il/i,
      /l'homme est-il/i,
      /responsable de tout ce qu'il fait/i,
      /la v[ée]rit[ée] est-elle/i,
      /peut-on se passer de/i,
      /les [ée]v[ée]nements historiques sont[- ]ils/i,
      /l['’]histoire a-t-elle un sens/i,
      /l['’]histoire est-elle/i,
      /la religion est-elle/i,
      /la science peut-elle/i,
      /la technique est-elle/i,
      /le temps est-il/i,
      /la mort est-elle/i,
      /la culture d[ée]nature-t-elle/i,
    ],
  },

  // 2. FRANÇAIS & LITTÉRATURE (6e à Terminale)
  {
    discipline: 'francais',
    disciplineLabel: 'Français & Lettres',
    
    fasciculeId: 'francais-litterature',
    primaryKeywords: [
      /\b(conjug\w*|verbe\w*|indicatif|subjonctif|conditionnel|imp[ée]ratif|infinitif|participe|temps\s+simple|temps\s+compos[ée]|pr[ée]sent|imparfait|pass[ée]\s+simple|pass[ée]\s+compos[ée]|futur\s+simple|plus-que-parfait|futur\s+ant[ée]rieur|pass[ée]\s+ant[ée]rieur|auxiliaire)\b/i,
      /\b(grammaire|nature\s+et\s+fonction|classe\s+grammaticale|fonction\s+grammaticale|accord\w*|participe\s+pass[ée]|accord\s+du\s+participe|groupe\s+nominal|compl[ée]ment\s+d['’]objet|cod\b|coi\b|cos\b|[ée]pith[èe]te|attribut|subordonn[ée]e|proposition|voix\s+passive|voix\s+active|pronom\w*|adjectif\w*|adverbe\w*|mets\s+au\s+pluriel|mets\s+au\s+f[ée]minin|singulier|pluriel|conjonction|pr[ée]position)\b/i,
      /\b(litt[ée]rature|litt[ée]raire|th[ée]âtre|roman|po[ée]sie|po[èe]me|po[èe]te|vers|com[ée]die|trag[ée]die|dramaturge|dramatique|[ée]crivain|auteur|lecteur|spectateur|personnage|sc[èe]ne|hilarit[ée]|esth[ée]tique|fiction|r[ée]cit|narrat\w+|lyri\w+|militant\w+|engagement|versification|strophe|alexandrin|rimes?|m[ée]taphore|catharsis|didascalie|tragique|comique)\b/i,
      /\b(expliqu\w+ et discut\w+|dans quelle mesure l'[ée]crivain|l'œuvre litt[ée]raire|le roman est|la po[ée]sie est|le th[ée]âtre est|la fonction du roman|le r[ôo]le de l'[ée]crivain)\b/i,
      /\b([ée]tayant|[ée]taye|[ée]tayer|r[ée]futant|r[ée]fute|r[ée]futer|cdvr|commission dialogue|texte argumentatif|sujet de r[ée]flexion|r[ée]sum[ée] de texte|volume initial|1\/3 de son volume|marge de plus ou moins 10%|bepc)\b/i,
      /\b(portrait|raconte|d[ée]cris|dialogue|conte|fable|sch[ée]ma narratif|p[ée]rip[ée]ties|compr[ée]hension du texte)\b/i,
    ],
    secondaryKeywords: [
      /\b(miser sur|distraction|d[ée]tente|amusement|divertissement|peindre la soci[ée]t[ée]|miroir|[ée]mouvoir|instruire|plaire|d[ée]noncer|t[ée]moigner)\b/i,
      /\b(roman n[ée]gro-africain|n[ée]gritude|romantisme|r[ée]alisme|naturalisme|classicisme|surr[ée]alisme|symbolisme)\b/i,
    ],
    authorsAndFigures: [
      /\b(c[ée]saire|senghor|dadi[ée]|kourouma|camara laye|oyono|moli[èe]re|victor hugo|baudelaire|zola|stendhal|flaubert|camus|anouilh|marivaux|rimbaud|verlaine|mallarm[ée]|corneille|racine|la fontaine|montesquieu|voltaire|balzac|maupassant|jean-paul sartre|david diop|guy de maupassant|hyacinthe kacou|guillaume oyono|brigivie guirathe)\b/i,
    ],
    typicalSubjects: [
      /conjugue|conjuguer|au pr[ée]sent|au futur|à l['’]imparfait|au pass[ée]|accorde le|quelle est la nature|donne la fonction|mets la phrase/i,
      /le th[ée]âtre n'est fait que pour/i,
      /l'[ée]crivain doit [êe]tre la voix/i,
      /la po[ée]sie a-t-elle pour seule fonction/i,
      /le roman est un miroir/i,
      /au cours d'un d[ée]bat/i,
      /identifie le th[èe]me/i,
      /reformule la th[èe]se/i,
      /r[ée]sume ce texte/i,
      /raconte une sc[èe]ne/i,
      /fais le portrait/i,
    ],
  },

  // 3. HISTOIRE (6e à Terminale)
  {
    discipline: 'histoire',
    disciplineLabel: 'Histoire',
    
    fasciculeId: 'histoire-methodologie',
    primaryKeywords: [
      /\b(histoire|historique|guerre|conflit|trait[ée]|r[ée]volution|d[ée]colonisation|ind[ée]pendance|guerre froide|bipolarisation|imp[ée]rialisme|colonisation|tiers-monde|nationalisme|conf[ée]rence|onu|sdn|r[ée]sistance|crise|fascisme|nazisme|totalitarisme|d[ée]mocratie|empire|monarchie|r[ée]publique|bataille|armistice|pr[ée]histoire|antiquit[ée]|moyen [âa]ge|empires soudanais|ghana|mali|songha[ïi]|traite n[ée]gri[èe]re)\b/i,
      /\b(1914|1918|1939|1945|1947|1955|1956|1960|1962|1989|1991|xixe si[èe]cle|xxe si[èe]cle|yalta|potsdam|bandung|berlin|cuba|vietnam|alg[ée]rie|rda|syndicat agricole)\b/i,
    ],
    secondaryKeywords: [
      /\b(causes?|cons[ée]quences?|enjeux|bilan|facteurs?|[ée]tapes?|[ée]volution|c[ée]sure|rupture|tournant|continuit[ée]|processus|phase)\b/i,
    ],
    authorsAndFigures: [
      /\b(houphou[ëe]t-boigny|samory tour[ée]|de gaulle|churchill|roosevelt|staline|khrouchtchev|kennedy|gorbatchev|l[ée]nine|hitler|mussolini|mao|nasser|nkrumah|mandela|lumumba|sekou tour[ée]|sankara|soundiata keita|kankan moussa|sonni ali ber)\b/i,
    ],
    typicalSubjects: [
      /relations am[ée]ricano-sovi[ée]tiques/i,
      /la guerre froide/i,
      /la bipolarisation du monde/i,
      /la d[ée]colonisation en afrique/i,
      /la conf[ée]rence de bandung/i,
      /l'accession de la c[ôo]te d'ivoire/i,
      /les grands empires/i,
    ],
  },

  // 4. GÉOGRAPHIE (6e à Terminale)
  {
    discipline: 'geographie',
    disciplineLabel: 'Géographie',
    
    fasciculeId: 'geographie-methodologie',
    primaryKeywords: [
      /\b(g[ée]ographie|g[ée]ographique|espace|territoire|spatial|am[ée]nagement|d[ée]veloppement|agriculture|agricole|cacao|caf[ée]|industrie|port|abidjan|san pedro|ville|urbain|urbanisation|rural|exode rural|littoral|littoralisation|climat\w*|relief\w*|hydrographie|montagne\w*|plaine\w*|plateau\w*|inselberg\w*|population|d[ée]mographie|flux|mondialisation|puissance|[ée]tats-unis|usa|chine|ue|triade|m[ée]tropole|m[ée]gapole|hinterland|d[ée]forestation|environnement|reboisement)\b/i,
    ],
    secondaryKeywords: [
      /\b(atouts?|contraintes?|facteurs?|disparit[ée]s?|in[ée]galit[ée]s?|contrastes?|dynamiques?|perspectives?|d[ée]fis?|mutations?|croissance|potentiel)\b/i,
    ],
    authorsAndFigures: [
      /\b(c[ôo]te d['’]ivoire|ivoir\w*|afrique subsaharienne|am[ée]rique du nord|sun belt|manufacturing belt|fa[çc]ade maritime|golfe de guin[ée]e|fleuve bandama|fleuve como[ée]|sassandra|cavally)\b/i,
    ],
    typicalSubjects: [
      /l'agriculture ivoirienne/i,
      /le port autonome d'abidjan/i,
      /les contrastes nord\/sud/i,
      /l'am[ée]nagement du territoire/i,
      /l'organisation de l'espace am[ée]ricain/i,
      /l'urbanisation en afrique/i,
      /la d[ée]forestation en c[ôo]te d'ivoire/i,
      /relief\w*.*c[ôo]te d['’]ivoire|c[ôo]te d['’]ivoire.*relief\w*/i,
      /climat\w*.*c[ôo]te d['’]ivoire|c[ôo]te d['’]ivoire.*climat\w*/i,
    ],
  },

  // 5. MATHÉMATIQUES (6e à Terminale)
  {
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    
    fasciculeId: 'math-lycee',
    primaryKeywords: [
      /\b(math[ée]matiques?|maths?|calcul\w*|calcule|calculer|résoudre|résous|simplifier|simplifie|fonction|d[ée]riv[ée]e|int[ée]grale|primitive|limite|suite|complexe|barycentre|probabilit[ée]|statistique|statistiques|s[ée]rie double|nuage de points|point moyen|droite de mayer|ajustement lin[ée]aire|droite de r[ée]gression|moindres carr[ée]s|cov\(x,y\)|covariance|coefficient de corr[ée]lation|rang de l'ann[ée]e|pourcentage|matrice|vecteur|rep[èe]re|asymptote|tableau de variations|in[ée]quation|[ée]quation|r[ée]currence|convex\w+|tangente|polyn[ôo]me|trigonom[ée]tr\w+|exponentielle|logarithme|ln\(|exp\(|e\^[a-z0-9]|f\(x\)|f\([0-9]+\)|f'\(x\)|f'\([0-9]+\)|g\(x\)|g\([0-9]+\)|h\(x\)|P\(x\)|u_n|u_\{n\}|\(u_n\)|z_A|z_B|factoriser|d[ée]velopper et r[ée]duire|identit[ée]s? remarquables?|pythagore|thal[èe]s|calcul litt[ée]ral|fraction|arithm[ée]tique|pgcd|ppcm|sym[ée]trie|angle|cos|sin|tan|cosinus|sinus|tangente|infini|infinie?s?|\+∞|\-∞|∞)\b/i,
      /\b(d[ée]montrer par r[ée]currence|calculer la d[ée]riv[ée]e|dresser le tableau de variation|calculer la limite|d[ée]terminer l'ensemble de d[ée]finition|r[ée]soudre dans [RCZ]|calculer l'esp[ée]rance|loi de probabilit[ée]|loi binomiale|d[ée]terminer la nature de la transformation|forme exponentielle|module et argument|calculer la distance|d[ée]montrer que le triangle est rectangle|connaissances math[ée]matiques|production argument[ée] bas[ée]e sur|taux de r[ée]ussite)\b/i,
      /\d+\s*[\+\-\*\/×÷\^=]\s*\d+/,
      /[a-z]\s*\(\s*[xX0-9a-z\s,\-\+]+\s*\)\s*=/i,
      /[a-z]\s*\(\s*[0-9]+\s*\)/i,
      /x\s*\^?\s*[2-9²³]/i,
      /[0-9xX]\s*[\+\-\*\/×÷\^=]\s*[0-9xX]/,
    ],
    secondaryKeywords: [
      /\b(convexe|concave|point d'inflexion|bijection|th[ée]or[èe]me des valeurs interm[ée]diaires|tvi|accroissements finis|somme|produit scalaire|produit vectoriel|plan affine|droite de r[ée]gression|moindres carr[ée]s|cov\w+|variance|[ée]cart-type|tirage sans remise|tirage avec remise|combinaisons?|arrangements?|⃗[a-zA-Z]+|cos\(|sin\(|tan\(|\+inf|\-inf|\+infini|\-infini|ajustement affine|m[ée]thode des moindres carr[ée]s|m[ée]thode de mayer)\b/i,
      /\b(f'\(x\)|f''\(x\)|lim_{|\\lim|\\int|\\sum|\\frac|\\sqrt|\\alpha|\\beta|\\theta|\\pi|[0-9]+[xXyYzZ]|[xXyYzZ]\^2|x̄|ȳ)\b/i,
    ],
    authorsAndFigures: [
      /\b(pythagore|thal[èe]s|euler|newton|leibniz|gauss|descartes|pascal|fermat|cauchy|riemann|laplace|bernoulli|poisson|bayes|mayer)\b/i,
    ],
    typicalSubjects: [
      /soit la fonction f/i,
      /soit la suite \(/i,
      /d[ée]terminer les limites/i,
      /r[ée]soudre dans c/i,
      /une urne contient/i,
      /montrer que pour tout n/i,
      /étudier les variations/i,
      /calculer l'int[ée]grale/i,
      /factoriser l'expression/i,
      /d[ée]velopper et r[ée]duire/i,
      /soit a\(x\) =/i,
    ],
  },

  // 6. PHYSIQUE - CHIMIE (Collège & Lycée)
  {
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique - Chimie',
    
    fasciculeId: 'physique-chimie-expert',
    primaryKeywords: [
      /\b(physique|chimie|m[ée]canique|cin[ée]matique|dynamique|newton|pesanteur|frottement|vitesse|acc[ée]l[ée]ration|trajectoire|projectile|satellite|kepler|gravitation|vecteur vitesse|[ée]nergie cin[ée]tique|[ée]nergie potentielle|travail|puissance|ressort|pendule|oscillateur|condensateur|bobine|dip[ôo]le|circuit rc|circuit rl|circuit rlc|onde|fr[ée]quence|p[ée]riode|longueur d'onde|optique|lentille|vergence|foyer|radioactivit[ée]|demi-vie|noyau|nucl[ée]aire|d[ée]faut de masse|mol|molaire|concentration|acide|base|ph|pka|tampon|dosage|titrage|[ée]quivalence|avancement|r[ée]actif limitant|oxydor[ée]duction|r[ée]action redox|oxydant|r[ée]ducteur|cin[ée]tique chimique|catalyseur|est[ée]rification|hydrolyse|saponification|alc[oo]l|alc[èe]ne|alcane|ester|acide carboxylique)\b/i,
      /\b(loi de newton|th[ée]or[èe]me de l'[ée]nergie cin[ée]tique|bilan des forces|tableau d'avancement|relation de dosage|constante d'[ée]quilibre|demi-[ée]quation|[ée]quation diff[ée]rentielle|constante de temps \tau)\b/i,
    ],
    secondaryKeywords: [
      /\b(joule|watt|newton|volt|amp[èe]re|ohm|farad|henry|becquerel|kelvin|pression|pascal|volume|masse volumique|quantit[ée] de mati[èe]re|conductim[ée]trie|absorbance|spectrophotom[ée]trie)\b/i,
      /\b(m\/s|m\.s\^\{-1\}|rad\/s|mol\/l|g\/mol|g\/l|kg|cm\^3|ml)\b/i,
    ],
    authorsAndFigures: [
      /\b(newton|kepler|galil[ée]e|coulomb|faraday|amp[èe]re|ohm|maxwell|planck|einstein|bohr|curie|lavoisier|mendele[ïi]ev|br[öo]nsted|le chatelier|arrhenius)\b/i,
    ],
    typicalSubjects: [
      /un solide de masse m/i,
      /on lance un projectile/i,
      /un condensateur de capacit[ée]/i,
      /on dose un volume v/i,
      /on m[ée]lange une mole/i,
      /la d[ée]sint[ée]gration du/i,
      /calculer l'acc[ée]l[ée]ration/i,
      /d[ée]terminer la constante de temps/i,
      /calculer le ph de la solution/i,
    ],
  },

  // 7. SCIENCES DE LA VIE ET DE LA TERRE (SVT)
  {
    discipline: 'svt',
    disciplineLabel: 'SVT',
    
    fasciculeId: 'svt-sciences-vie-terre',
    primaryKeywords: [
      /\b(svt|biologie|g[ée]ologie|cellule|adn|arn|chromosome|g[èe]ne|all[èe]le|mitose|m[ée]iose|crossing-over|brassage|drosophile|croisement|g[ée]notype|ph[ée]notype|arbre g[ée]n[ée]alogique|h[ée]r[ée]dit[ée]|mutation|prot[ée]ine|transcription|traduction|syst[èe]me immunitaire|anticorps|antig[èe]ne|lymphocyte|lymphocytes? (t4|t8|b)|plasmocyte|phagocytose|vih|sida|s[ée]ropositif|vaccin|neurone|synapse|r[ée]flexe myotatique|potentiel d'action|potentiel de repos|neurotransmetteur|hormone|glyc[ée]mie|pancr[ée]as|insuline|glucagon|fsh|lh|progest[ée]rone|œstrog[èe]ne|ovulation|spermatozo[ïi]de|f[ée]condation|tectonique|plaque|subduction|dorsale|magmatisme|volcanisme|s[ée]isme|orogen[èe]se|m[ée]tamorphisme|lithosph[èe]re|asth[ée]nosph[èe]re|p[ée]ridotite|granite|basalte)\b/i,
      /\b(sch[ée]ma fonctionnel|sch[ée]ma bilan|restitution organis[ée]e|arbre g[ée]n[ée]alogique|brassage interchromosomique|brassage intrachromosomique|transmission d'une anomalie|zone de convergence)\b/i,
    ],
    secondaryKeywords: [
      /\b(dominant|r[ée]cessif|codominant|autosome|gonosome|chromosome x|caryotype|g[èe]nes li[ée]s|g[èe]nes ind[ée]pendants|test-cross|r[ée]trocroisement|recombin[ée]s|all[èe]le sain|all[èe]le mut[ée])\b/i,
      /\b(je constate|or je sais que|j'en d[ée]duis que|mise en relation|bilan fonctionnel)\b/i,
    ],
    authorsAndFigures: [
      /\b(mendel|morgan|watson|crick|darwin|pasteur|wegener)\b/i,
    ],
    typicalSubjects: [
      /arbre g[ée]n[ée]alogique/i,
      /croisement de drosophiles/i,
      /r[ée]ponse immunitaire/i,
      /potentiel d'action/i,
      /la subduction oc[ée]anique/i,
      /la r[ée]gulation de la glyc[ée]mie/i,
      /coop[ée]ration cellulaire/i,
    ],
  },

  // 8. ANGLAIS
  {
    discipline: 'anglais',
    disciplineLabel: 'Anglais',
    
    fasciculeId: 'anglais-exam-excellence',
    primaryKeywords: [
      /\b(anglais|english|englais|reading comprehension|passive voice|reported speech|conditionals?|relative clause|essay|composition|wh- questions|true or false|text indicates|author's purpose|synonyms?|antonyms?|fill in the blanks?|turn into passive|give your opinion|write an essay|write a letter|discuss this statement|topic sentence|linking words|translate into english|traduire en anglais|traduis en anglais|gap-fill|verbs? in brackets|simple past|past simple|present perfect|past continuous|present continuous|phrasal verbs?|irregular verbs?|direct questions|reading text)\b/i,
      /\b(although|furthermore|moreover|however|on the other hand|therefore|in conclusion|nevertheless|despite|in order to|as a result)\b/i,
      /\b(the\s+\w+|is\s+a|are\s+a|was\s+a|were\s+a|have\s+been|has\s+been|i\s+am|he\s+is|she\s+is|they\s+are|we\s+are|it\s+is|there\s+is|there\s+are|don't|doesn't|didn't|won't|can't|couldn't|yesterday|tomorrow|always|never|every\s+day)\b/i,
    ],
    secondaryKeywords: [
      /\b(past continuous|past perfect|present perfect|modal verbs|must|should|would have|irregular verbs|phrasal verbs|adverb|adjective|prefix|suffix|preposition|pronoun)\b/i,
      /\b(globalization|social media|technology|climate change|education|youth|employment|environment|human rights|school|student|teacher)\b/i,
    ],
    authorsAndFigures: [
      /\b(shakespeare|orwell|woolf|hemingway|dickens|chinua achebe|wole soyinka|ngugi wa thiong'o|toni morrison)\b/i,
    ],
    typicalSubjects: [
      /write an essay/i,
      /do you agree or disagree/i,
      /turn the following into passive/i,
      /comprehension questions/i,
      /write a formal letter/i,
      /discuss the advantages and disadvantages/i,
      /translate into english/i,
      /put the verbs into/i,
      /fill in the blanks/i,
    ],
  },

  // 9. ALLEMAND
  {
    discipline: 'allemand',
    disciplineLabel: 'Allemand',
    
    fasciculeId: 'allemand-excellence-lv2',
    primaryKeywords: [
      /\b(allemand|deutsch|german|textverst[äa]ndnis|leseverstehen|grammatik|aufsatz|stellungnahme|[üu]bersetzung|version|thema|fragen zum text|richtig oder falsch|begr[üu]ndung|deklination|adjektivdeklination|kasus|nominativ|akkusativ|dativ|genitiv|passiv|konjunktiv ii|konjunktiv|nebensatz|weil|obwohl|damit|wenn|dass|um\s*\.\.\.\s*zu|pr[äa]positionen|wechselpr[äa]positionen|traduire en allemand|traduis en allemand|[üu]bersetze|[üu]bersetzen|freie produktion|wortschatz|gegenteil)\b/i,
      /\b(zuerst|au[ßs]erdem|dar[üu]ber hinaus|einerseits|andererseits|meiner meinung nach|schlie[ßs]lich|zusammenfassend)\b/i,
      /\b(ich\s+bin|du\s+bist|er\s+ist|sie\s+ist|wir\s+sind|ihr\s+seid|sie\s+sind|ich\s+habe|er\s+hat|sie\s+hat|wir\s+haben|es\s+gibt|in\s+der\s+schule|zu\s+hause|jeden\s+tag|nicht|kein|keine|keinen)\b/i,
    ],
    secondaryKeywords: [
      /\b(w-fragen|zeilennummer|textstelle|satzbau|verbletztstellung|partizip ii|modalverben|trennbare verben|konjugation|vokabeln)\b/i,
      /\b(umweltschutz|jugend|beruf|ausbildung|digitalisierung|klimawandel|solidarit[äa]t|schule|sch[üu]ler)\b/i,
    ],
    authorsAndFigures: [
      /\b(goethe|schiller|kafka|brecht|thomas mann|heinrich b[öo]ll)\b/i,
    ],
    typicalSubjects: [
      /fragen zum text/i,
      /richtig oder falsch/i,
      /setzen sie ins passiv/i,
      /was ist ihre meinung/i,
      /verfassen sie einen leserbrief/i,
      /nehmen sie stellung/i,
      /[üu]bersetzen sie/i,
      /im perfekt/i,
    ],
  },

  // 10. ESPAGNOL
  {
    discipline: 'espagnol',
    disciplineLabel: 'Espagnol',
    
    fasciculeId: 'espagnol-excellence-lv2',
    primaryKeywords: [
      /\b(espagnol|espa[ñn]ol|spanish|comprensi[óo]n lectora|gram[áa]tica|redacci[óo]n|ensayo|preguntas de comprensi[óo]n|verdadero o falso|justificaci[óo]n textual|subjuntivo|presente de subjuntivo|imperfecto de subjuntivo|ser y estar|ser o estar|por y para|por o para|concordancia|per[íi]frasis|voz pasiva|estilo indirecto|conectores|traduire en espagnol|traduis en espagnol|traduce|traducir)\b/i,
      /\b(en primer lugar|adem[áa]s|por un lado|por otro lado|sin embargo|por lo tanto|en conclusi[óo]n|a mi parecer|opino que)\b/i,
      /\b(yo\s+soy|t[úu]\s+eres|[ée]l\s+es|ella\s+es|nosotros\s+somos|ellos\s+son|yo\s+tengo|[ée]l\s+tiene|ella\s+tiene|tenemos|tienen|en\s+la\s+escuela|en\s+casa|todos\s+los\s+d[íi]as|no\s+es|por\s+qu[ée]|c[óo]mo|d[óo]nde|qui[ée]n|qu[ée]|cu[áa]ndo)\b/i,
    ],
    secondaryKeywords: [
      /\b(pret[ée]rito perfecto|pret[ée]rito indefinido|imperfecto|condicional|acentuaci[óo]n|pronombres|art[íi]culos|g[ée]nero y n[úu]mero|vocabulario)\b/i,
      /\b(juventud|medio ambiente|tecnolog[íi]a|migraci[óo]n|educaci[óo]n|sociedad hispana|escuela|alumno)\b/i,
    ],
    authorsAndFigures: [
      /\b(cervantes|garc[íi]a m[áa]rquez|borges|lorca|neruda|octavio paz|isabel allende|cort[áa]zar)\b/i,
    ],
    typicalSubjects: [
      /preguntas de comprensi[óo]n/i,
      /verdadero o falso/i,
      /complete con ser o estar/i,
      /use el subjuntivo/i,
      /redacci[óo]n/i,
      /d[ée] su opini[óo]n/i,
      /escriba un art[íi]culo/i,
      /traduzca al espa[ñn]ol/i,
    ],
  },

  // 11. EDHC (Éducation aux Droits de l'Homme et à la Citoyenneté)
  {
    discipline: 'edhc',
    disciplineLabel: 'EDHC (Droits de l\'Homme & Citoyenneté)',
    fasciculeId: 'edhc-excellence',
    primaryKeywords: [
      /\b(edhc|droits de l'homme|citoyennet[ée]|civisme|bien public|patrimoine public|coh[ée]sion sociale|r[ée]conciliation|droit international humanitaire|dih|paix|tol[ée]rance|d[ée]mocratie|vote|urne|scrutin|constitution|devoirs du citoyen|imp[ôo]t|taxe|civisme fiscal|corruption|pots-de-vin|lutte contre la corruption|environnement|protection de l'environnement|d[ée]veloppement durable|sant[ée] de la reproduction|ist|vih|violences bas[ée]es sur le genre|vbg|grossesse en milieu scolaire|droit des enfants|travail des enfants)\b/i,
    ],
    secondaryKeywords: [
      /\b(solidarit[ée]|respect des symboles|hymne national|drapeau|armoiries|r[èe]glement int[ée]rieur|vie en communaut[ée]|code de la route|s[ée]curit[ée] routi[èe]re)\b/i,
    ],
    authorsAndFigures: [
      /\b(onu|unesco|unicef|cndh|haute autorit[ée] pour la bonne gouvernance|habg)\b/i,
    ],
    typicalSubjects: [
      /situation d'[ée]valuation/i,
      /propose des solutions/i,
      /droits et devoirs/i,
      /impact du non-paiement des imp[ôo]ts/i,
      /pr[ée]servation des biens publics/i,
    ],
  },

  // 12. TICE & INFORMATIQUE
  {
    discipline: 'tice',
    disciplineLabel: 'TICE & Informatique',
    fasciculeId: 'tice-informatique',
    primaryKeywords: [
      /\b(tice|informatique|ordinateur|logiciel|mat[ée]riel|syst[èe]me d'exploitation|windows|linux|traitement de texte|word|tableur|excel|formule excel|classeur|cellule|internet|r[ée]seau|adresse ip|algorithme|organigramme|boucle|variable|pseudo-code|programmation|python|html|css|base de donn[ée]es|sql|s[ée]curit[ée] informatique|cybers[ée]curit[ée]|virus|antivirus|p[ée]riph[ée]rique)\b/i,
    ],
    secondaryKeywords: [
      /\b(clavier|souris|processeur|ram|disque dur|carte m[èe]re|navigateur|moteur de recherche|messagerie)\b/i,
    ],
    authorsAndFigures: [
      /\b(alan turing|ada lovelace|von neumann|tim berners-lee)\b/i,
    ],
    typicalSubjects: [
      /algorithme/i,
      /formule du tableur/i,
      /r[ée]alise l'organigramme/i,
      /structure d'un ordinateur/i,
    ],
  },
];

/**
 * Detect Specific Academic Serie (Terminale A2, A1, D, C, E, 1ère A/CD, 2nde A/C, 3e BEPC...)
 */
export function detectAcademicSerie(text: string, level: SecondaryLevel): { serie: AcademicSerie; serieLabel: string } {
  // 1. Explicit Series keywords
  if (/\b(terminale\s*a2|tle\s*a2|bac\s*a2|s[ée]rie\s*a2|\ba2\b)\b/i.test(text)) {
    return { serie: 'tle_a2', serieLabel: 'Terminale A2 (Programme A2)' };
  }
  if (/\b(terminale\s*a1|tle\s*a1|bac\s*a1|s[ée]rie\s*a1|\ba1\b)\b/i.test(text)) {
    return { serie: 'tle_a1', serieLabel: 'Terminale A1 (Programme A1)' };
  }
  if (/\b(terminale\s*d|tle\s*d|bac\s*d|s[ée]rie\s*d|\bd\b)\b/i.test(text)) {
    return { serie: 'tle_d', serieLabel: 'Terminale D (Programme D)' };
  }
  if (/\b(terminale\s*c|tle\s*c|bac\s*c|s[ée]rie\s*c|\bc\b)\b/i.test(text)) {
    return { serie: 'tle_c', serieLabel: 'Terminale C (Programme C)' };
  }
  if (/\b(terminale\s*e|tle\s*e|bac\s*e|s[ée]rie\s*e|ti|technique\s*industrielle)\b/i.test(text)) {
    return { serie: 'tle_e', serieLabel: 'Terminale E / TI (Technologique)' };
  }
  if (/\b(1[èe]re\s*a|1re\s*a|premi[èe]re\s*a|1ere\s*a|1[èe]re\s*a2|1[èe]re\s*a1)\b/i.test(text)) {
    return { serie: '1ere_a', serieLabel: 'Première A (Littéraire)' };
  }
  if (/\b(1[èe]re\s*c|1re\s*c|premi[èe]re\s*c|1[èe]re\s*d|1re\s*d|premi[èe]re\s*d|1[èe]re\s*s|1re\s*s)\b/i.test(text)) {
    return { serie: '1ere_c_d', serieLabel: 'Première C / D (Scientifique)' };
  }
  if (/\b(2nde\s*a|2de\s*a|seconde\s*a)\b/i.test(text)) {
    return { serie: '2nde_a', serieLabel: 'Seconde A (Littéraire)' };
  }
  if (/\b(2nde\s*c|2de\s*c|seconde\s*c|2nde\s*s|seconde\s*s)\b/i.test(text)) {
    return { serie: '2nde_c', serieLabel: 'Seconde C (Scientifique)' };
  }
  if (level === '3e' || /\b(3[èe]me|3e|troisi[èe]me|bepc|brevet)\b/i.test(text)) {
    return { serie: '3e_bepc', serieLabel: 'Classe de 3ᵉ (BEPC)' };
  }
  if (level === '6e' || level === '5e' || level === '4e') {
    return { serie: 'college_6e_4e', serieLabel: 'Collège (6ᵉ - 5ᵉ - 4ᵉ)' };
  }
  if (level === 'superieur') {
    return { serie: 'superieur', serieLabel: 'Enseignement Supérieur / Université' };
  }

  // Implicit / Topic-based series matching
  if (/\b(mayer|droite\s+de\s+mayer|s[ée]rie\s+double.*mayer)\b/i.test(text)) {
    return { serie: 'tle_a2', serieLabel: 'Terminale A2 (Méthode de Mayer / Programme A2)' };
  }
  if (/\b(similitudes?|arithm[ée]tique.*modulo|congruence|espace\s+vectoriel|barycentre\s+dans\s+l['’]espace)\b/i.test(text)) {
    return { serie: 'tle_c', serieLabel: 'Terminale C (Notions approfondies Série C)' };
  }

  // Default general
  if (level === 'terminale') {
    return { serie: 'auto', serieLabel: 'Terminale (Toutes séries / Auto-adapté)' };
  }
  if (level === '1ere') {
    return { serie: 'auto', serieLabel: 'Première (Toutes séries)' };
  }
  if (level === '2nde') {
    return { serie: 'auto', serieLabel: 'Seconde (Toutes séries)' };
  }

  return { serie: 'auto', serieLabel: 'Auto-détecté (Toutes séries)' };
}

/**
 * Detect Specific Grade / Level (6e, 5e, 4e, 3e, 2nde, 1ere, Terminale)
 */
export function detectLevel(text: string): { level: SecondaryLevel; levelLabel: string; cycle: EducationCycle; cycleLabel: string } {
  // 1. Explicit grade checks
  if (/\b(6[èe]me|6e|sixi[èe]me)\b/i.test(text)) {
    return {
      level: '6e',
      levelLabel: 'Classe de 6ᵉ (Collège)',
      cycle: 'premier_cycle_bepc',
      cycleLabel: 'Premier Cycle (Collège)',
    };
  }
  if (/\b(5[èe]me|5e|cinqui[èe]me)\b/i.test(text)) {
    return {
      level: '5e',
      levelLabel: 'Classe de 5ᵉ (Collège)',
      cycle: 'premier_cycle_bepc',
      cycleLabel: 'Premier Cycle (Collège)',
    };
  }
  if (/\b(4[èe]me|4e|quatri[èe]me)\b/i.test(text)) {
    return {
      level: '4e',
      levelLabel: 'Classe de 4ᵉ (Collège)',
      cycle: 'premier_cycle_bepc',
      cycleLabel: 'Premier Cycle (Collège)',
    };
  }
  if (/\b(3[èe]me|3e|troisi[èe]me|bepc|brevet|cdvr|étayant|réfutant|r[ée]sume ce texte|au 1\/3 de son volume|marge de plus ou moins 10%|compr[ée]hension \(4pts\)|vocabulaire \(2pts\))\b/i.test(text)) {
    return {
      level: '3e',
      levelLabel: 'Classe de 3ᵉ (BEPC / Examen)',
      cycle: 'premier_cycle_bepc',
      cycleLabel: 'Premier Cycle (Collège / 3e - BEPC)',
    };
  }
  if (/\b(terminale|tle|bac|baccalaur[ée]at)\b/i.test(text)) {
    return {
      level: 'terminale',
      levelLabel: 'Classe de Terminale (BAC)',
      cycle: 'second_cycle_bac',
      cycleLabel: 'Second Cycle (BAC)',
    };
  }
  if (/\b(1[èe]re|1re|premi[èe]re|1ere)\b/i.test(text) && !/\bpremi[èe]re\s+(?:guerre|partie|question|fois|moiti[ée]|étape)\b/i.test(text)) {
    return {
      level: '1ere',
      levelLabel: 'Classe de 1ʳᵉ',
      cycle: 'second_cycle_bac',
      cycleLabel: 'Second Cycle (2nde, 1ère, Tle)',
    };
  }
  if (
    /\b(2nde|2de)\b/i.test(text) ||
    /\bseconde\s+(?:a|c|s|l|t)\b/i.test(text) ||
    /\bclasse\s+de\s+seconde\b|\ben\s+seconde\b/i.test(text) ||
    (/\bseconde\b/i.test(text) && !/\bseconde\s+(?:guerre|partie|moiti[ée]|chance|fois|phase|place|étape|question|période)\b/i.test(text))
  ) {
    return {
      level: '2nde',
      levelLabel: 'Classe de 2ⁿᵈᵉ',
      cycle: 'second_cycle_bac',
      cycleLabel: 'Second Cycle (2nde, 1ère, Tle)',
    };
  }

  // 1.5 Higher Education / University / CPGE checks
  if (/\b(licence|l1|l2|l3|master|mpsi|pcsi|mp|psi|bcpst|cpge|pr[ée]pa|bts|dut|universit[ée]|sup[ée]rieur|endomorphisme|espace vectoriel|diagonalis\w+|valeurs? propres?|vecteurs? propres?|polyn[ôo]me caract[ée]ristique|d[ée]veloppement limit[ée]|int[ée]grale impropre|s[ée]rie enti[èe]re|s[ée]rie num[ée]rique|topologie|espace m[ée]trique)\b/i.test(text)) {
    return {
      level: 'superieur',
      levelLabel: 'Enseignement Supérieur & Université (L1/L2/L3, CPGE)',
      cycle: 'superieur_universite',
      cycleLabel: 'Enseignement Supérieur & Université',
    };
  }

  // 2. Implicit / Pedagogical Content inference
  // College indicators (6e-4e narrative/descriptive or basic math)
  if (/\b(portrait|raconte|d[ée]cris|dialogue|conte|march[ée] au village|sch[ée]ma narratif)\b/i.test(text)) {
    return {
      level: '6e',
      levelLabel: 'Classe de 6ᵉ / 5ᵉ (Collège)',
      cycle: 'premier_cycle_bepc',
      cycleLabel: 'Premier Cycle (Collège)',
    };
  }

  if (/\b(pythagore|thal[èe]s|factoriser|d[ée]velopper et r[ée]duire|identit[ée]s? remarquables?|situation d'[ée]valuation|déforestation en côte d'ivoire)\b/i.test(text)) {
    return {
      level: '3e',
      levelLabel: 'Classe de 3ᵉ (BEPC)',
      cycle: 'premier_cycle_bepc',
      cycleLabel: 'Premier Cycle (Collège / 3e - BEPC)',
    };
  }

  // Advanced Second Cycle indicators
  if (/\b(philosoph|conscience|inconscient|ali[ée]nation|d[ée]terminisme|bipolarisation|dando|guerre froide|e\^x|ln\(|exponentielle|logarithme|intégrale|complexe|récurrence)\b/i.test(text)) {
    return {
      level: 'terminale',
      levelLabel: 'Classe de Terminale (BAC)',
      cycle: 'second_cycle_bac',
      cycleLabel: 'Second Cycle (BAC)',
    };
  }

  // Default Second Cycle
  return {
    level: 'terminale',
    levelLabel: 'Second Cycle (BAC)',
    cycle: 'second_cycle_bac',
    cycleLabel: 'Second Cycle (BAC)',
  };
}

/**
 * Detect exercise type based on discipline, cycle and specific level
 */
function detectExerciseType(text: string, discipline: DisciplineType, level: SecondaryLevel, cycle: EducationCycle): {
  exerciseType: string;
  category: 'dissertation' | 'commentaire' | 'etude_document' | 'reflexion' | 'resume' | 'texte_argumentatif' | 'situation_evaluation' | 'recit_redaction';
} {
  // 1. Classes de 6e, 5e, 4e
  if (level === '6e' || level === '5e' || level === '4e') {
    if (discipline === 'francais') {
      if (/\b(portrait|décris|description)\b/i.test(text)) {
        return {
          exerciseType: 'Expression écrite : Portrait & Description (6e/5e)',
          category: 'recit_redaction',
        };
      }
      if (/\b(dialogue|discutent|réplique)\b/i.test(text)) {
        return {
          exerciseType: 'Expression écrite : Insertion de dialogue (6e/5e/4e)',
          category: 'recit_redaction',
        };
      }
      if (/\b(argument|explique pourquoi|avis)\b/i.test(text)) {
        return {
          exerciseType: 'Expression écrite : Initiation au paragraphe argumentatif (4e)',
          category: 'recit_redaction',
        };
      }
      return {
        exerciseType: 'Expression écrite : Récit narratif & péripéties (Collège 6e-4e)',
        category: 'recit_redaction',
      };
    }

    if (discipline === 'mathematiques') {
      return {
        exerciseType: 'Exercice de Mathématiques Collège (Calcul numérique, littéral & géométrie 6e-4e)',
        category: 'reflexion',
      };
    }

    if (discipline === 'histoire' || discipline === 'geographie') {
      return {
        exerciseType: 'Questions de connaissances & Repères spatio-temporels (Collège 6e-4e)',
        category: 'situation_evaluation',
      };
    }
  }

  // 2. Classe de 3e / BEPC
  if (level === '3e' || (cycle === 'premier_cycle_bepc' && level !== '6e' && level !== '5e' && level !== '4e')) {
    if (discipline === 'francais') {
      const isResume = /\b(r[ée]sum[ée]|r[ée]sume ce texte|volume initial|compr[ée]hension \(4pts\)|vocabulaire \(2pts\)|deuxi[èe]me sujet|deuxieme sujet)\b/i.test(text);
      if (isResume) {
        return {
          exerciseType: 'Résumé de texte argumentatif & Questions (Épreuve Français 3e / BEPC)',
          category: 'resume',
        };
      }
      return {
        exerciseType: 'Texte argumentatif de réflexion - Étayer ou Réfuter (Épreuve Français 3e / BEPC)',
        category: 'texte_argumentatif',
      };
    }

    if (discipline === 'histoire' || discipline === 'geographie') {
      return {
        exerciseType: 'Situation d\'évaluation & Maîtrise des connaissances (Histoire-Géo 3e / BEPC)',
        category: 'situation_evaluation',
      };
    }

    if (discipline === 'mathematiques') {
      return {
        exerciseType: 'Exercice & Problème de Mathématiques (Calcul littéral, Thalès, Pythagore - 3e / BEPC)',
        category: 'reflexion',
      };
    }

    if (discipline === 'physique_chimie') {
      return {
        exerciseType: 'Exercice de Physique-Chimie (Électricité, Mécanique, Solutions & Chimie - 3e / BEPC)',
        category: 'reflexion',
      };
    }

    if (discipline === 'svt') {
      return {
        exerciseType: 'Exercice & Raisonnement scientifique en SVT (Reproduction, Immunité, Géologie - 3e / BEPC)',
        category: 'situation_evaluation',
      };
    }

    if (discipline === 'anglais') {
      return {
        exerciseType: 'English BEPC Exam (Reading Comprehension, Grammar & Guided Writing)',
        category: 'reflexion',
      };
    }

    if (discipline === 'allemand') {
      return {
        exerciseType: 'Deutsch BEPC Prüfung (Textverständnis, Grammatik & Kurzer Aufsatz)',
        category: 'reflexion',
      };
    }

    if (discipline === 'espagnol') {
      return {
        exerciseType: 'Español Examen BEPC (Comprensión, Gramática y Redacción)',
        category: 'reflexion',
      };
    }
  }

  // 3. Second Cycle (2nde, 1ère, Terminale)
  // Mathematics
  if (discipline === 'mathematiques') {
    if (level === '2nde' || /\b(2nde|seconde|forme canonique|polynôme du second degré)\b/i.test(text)) {
      return {
        exerciseType: 'Exercice de Mathématiques 2nde (Fonctions, Polynômes & Vecteurs)',
        category: 'reflexion',
      };
    }
    if (level === '1ere' || /\b(1ère|1ere|première|dérivée|sens de variation|barycentre)\b/i.test(text)) {
      return {
        exerciseType: 'Exercice de Mathématiques 1ère (Dérivation, Suites & Barycentres)',
        category: 'reflexion',
      };
    }
    if (/\b(probl[èe]me|partie a|partie b|partie c|étude de fonction|fonction numérique)\b/i.test(text)) {
      return {
        exerciseType: 'Problème de synthèse de Mathématiques (Étude de fonction exp/ln & Branches infinies - BAC)',
        category: 'reflexion',
      };
    }
    if (/\b(suite|récurrence|un\+1|u_n)\b/i.test(text)) {
      return {
        exerciseType: 'Exercice de suites numériques & démonstration par récurrence (BAC)',
        category: 'reflexion',
      };
    }
    if (/\b(complexe|affixe|plan complexe|module|argument|similitude)\b/i.test(text)) {
      return {
        exerciseType: 'Exercice sur les Nombres Complexes & Géométrie (BAC)',
        category: 'reflexion',
      };
    }
    if (/\b(urne|boule|probabilité|variable aléatoire|loi binomiale|espérance)\b/i.test(text)) {
      return {
        exerciseType: 'Exercice de Dénombrement, Probabilités & Variables Aléatoires (BAC)',
        category: 'reflexion',
      };
    }
    return {
      exerciseType: 'Résolution intégrale & Démonstration pas à pas de Mathématiques (BAC)',
      category: 'reflexion',
    };
  }

  // Physique - Chimie
  if (discipline === 'physique_chimie') {
    if (/\b(dosage|titrage|ph|pka|tampon|acide|base|acide éthanoïque|soude)\b/i.test(text)) {
      return {
        exerciseType: 'Problème de Chimie : Réactions acido-basiques, Dosage pH-métrique & Titrage (BAC)',
        category: 'reflexion',
      };
    }
    if (/\b(estérification|hydrolyse|saponification|ester|alcool|acide carboxylique)\b/i.test(text)) {
      return {
        exerciseType: 'Exercice de Chimie Organique : Estérification, Hydrolyse & Rendement (BAC)',
        category: 'reflexion',
      };
    }
    if (/\b(projectile|champ de pesanteur|trajectoire|vitesse v0|portée|flèche|newton)\b/i.test(text)) {
      return {
        exerciseType: 'Problème de Mécanique : Mouvement de Projectile & Lois de Newton (BAC)',
        category: 'reflexion',
      };
    }
    if (/\b(condensateur|bobine|circuit rc|circuit rlc|dipôle|oscillations)\b/i.test(text)) {
      return {
        exerciseType: 'Exercice d\'Électricité & Électronique : Circuits RC/RLC & Équations Différentielles (BAC)',
        category: 'reflexion',
      };
    }
    if (/\b(radioactivité|désintégration|demi-vie|nucléaire|défaut de masse)\b/i.test(text)) {
      return {
        exerciseType: 'Exercice de Physique Nucléaire : Radioactivité & Énergie de liaison (BAC)',
        category: 'reflexion',
      };
    }
    return {
      exerciseType: 'Résolution intégrale de Physique-Chimie avec formules littérales et calculs sans saut (BAC)',
      category: 'reflexion',
    };
  }

  // SVT
  if (discipline === 'svt') {
    if (/\b(croisement|drosophile|arbre généalogique|hérédité|allèle|dominant|récessif)\b/i.test(text)) {
      return {
        exerciseType: 'Exercice de Génétique formelle & Analyse d\'arbres généalogiques (BAC)',
        category: 'reflexion',
      };
    }
    if (/\b(immun|anticorps|antigène|lymphocyte|sida|vih|phagocytose)\b/i.test(text)) {
      return {
        exerciseType: 'Raisonnement scientifique & Restitution organisée en Immunologie (BAC)',
        category: 'reflexion',
      };
    }
    if (/\b(subduction|tectonique|plaque|dorsale|magmatisme|séisme)\b/i.test(text)) {
      return {
        exerciseType: 'Étude géologique & Dynamique de la lithosphère (BAC)',
        category: 'reflexion',
      };
    }
    return {
      exerciseType: 'Raisonnement scientifique & Exploitation méthodique de documents en SVT (BAC)',
      category: 'reflexion',
    };
  }

  // Anglais
  if (discipline === 'anglais') {
    if (/\b(translate|traduire|traduis|translation)\b/i.test(text)) {
      return {
        exerciseType: 'Exercice de Traduction & Vocabulaire (Thème / Version)',
        category: 'reflexion',
      };
    }
    if (/\b(essay|composition|article|letter|discuss|opinion|write an essay|guided writing)\b/i.test(text)) {
      return {
        exerciseType: 'English Guided Writing & Argumentative Essay (BAC)',
        category: 'reflexion',
      };
    }
    if (/\b(passive|reported speech|conditionals|relative|brackets|gap-fill|tense|verbs?|fill in)\b/i.test(text) || text.length < 250) {
      return {
        exerciseType: 'Exercice de Grammaire & Syntaxe Anglaise (Language in Use)',
        category: 'reflexion',
      };
    }
    return {
      exerciseType: 'Épreuve Complète d\'Anglais (Reading Comprehension & Language Practice)',
      category: 'reflexion',
    };
  }

  // Allemand
  if (discipline === 'allemand') {
    if (/\b(übersetze|übersetzen|traduire|traduis|übersetzung)\b/i.test(text)) {
      return {
        exerciseType: 'Übersetzung & Wortschatz (Traduction en allemand)',
        category: 'reflexion',
      };
    }
    if (/\b(aufsatz|stellungnahme|leserbrief|meinung|freie produktion)\b/i.test(text)) {
      return {
        exerciseType: 'Deutsch Freier Aufsatz & Schriftlicher Ausdruck (BAC)',
        category: 'reflexion',
      };
    }
    if (/\b(grammatik|perfekt|präteritum|passiv|deklination|kasus|nebensatz|weil|wenn|lückentext)\b/i.test(text) || text.length < 250) {
      return {
        exerciseType: 'Grammatik & Sprachpraxis (Exercice d\'allemand)',
        category: 'reflexion',
      };
    }
    return {
      exerciseType: 'Épreuve Complète d\'Allemand (Textverständnis & Grammatik - BAC)',
      category: 'reflexion',
    };
  }

  // Espagnol
  if (discipline === 'espagnol') {
    if (/\b(traduce|traducir|traduire|traduis|traducción)\b/i.test(text)) {
      return {
        exerciseType: 'Traducción & Vocabulario (Thème / Version espagnole)',
        category: 'reflexion',
      };
    }
    if (/\b(redacción|ensayo|artículo|opinión|carta|expresión escrita)\b/i.test(text)) {
      return {
        exerciseType: 'Español Redacción y Expresión Escrita (BAC)',
        category: 'reflexion',
      };
    }
    if (/\b(gramática|ser y estar|ser o estar|por y para|subjuntivo|pretérito|verbos)\b/i.test(text) || text.length < 250) {
      return {
        exerciseType: 'Gramática y Competencia Lingüística (Exercice d\'espagnol)',
        category: 'reflexion',
      };
    }
    return {
      exerciseType: 'Épreuve Complète d\'Espagnol (Comprensión y Gramática - BAC)',
      category: 'reflexion',
    };
  }

  const isCommentaire = 
    /\b(commentaire|commentez|expliquer le texte|lignes?\s*\d+|vers\s*\d+|strophes?\s*\d+|didascalie|d[ée]gagez l'int[ée]r[êe]t|étudiez ce texte|étudier le document)\b/i.test(text) ||
    (text.length > 300 && /\b(texte|extrait|auteur|source|date)\b/i.test(text));

  const isEtudeDocument = 
    /\b(document\s*1|document\s*2|tableau statistique|carte|graphique|dando|critique de document|analyser le document)\b/i.test(text);

  if (isEtudeDocument) {
    return {
      exerciseType: discipline === 'histoire' 
        ? 'Étude critique de document(s) historique (Méthode D-A-N-D-O - BAC)' 
        : 'Analyse documentaire & données statistiques en Géographie (BAC)',
      category: 'etude_document',
    };
  }

  if (isCommentaire) {
    if (discipline === 'francais') {
      return {
        exerciseType: 'Commentaire composé littéraire (Poésie, Roman ou Théâtre - BAC)',
        category: 'commentaire',
      };
    }
    if (discipline === 'philo') {
      return {
        exerciseType: 'Commentaire méthodique de texte philosophique (1ère & Terminale)',
        category: 'commentaire',
      };
    }
    return {
      exerciseType: 'Commentaire critique de documents (BAC)',
      category: 'commentaire',
    };
  }

  // Conjugaison & morphologie verbale (toutes langues)
  // NB : on exige un vocabulaire d'INSTRUCTION explicite (conjugue/conjuguez/
  // conjuguer/conjugaison) et non la simple présence du mot "verbe" ou du
  // participe passé "conjugué", qui apparaissent couramment dans des exercices
  // d'ANALYSE grammaticale ("identifiez le verbe conjugué...") sans être eux-mêmes
  // des demandes de conjugaison.
  if (/\b(conjugue|conjugues|conjuguez|conjuguons|conjuguent|conjuguer|conjugaison|indicatif|subjonctif|conditionnel)\b/i.test(text)) {
    return {
      exerciseType: 'Exercice de conjugaison & morphologie verbale',
      category: 'situation_evaluation',
    };
  }

  // Grammaire & étude de la langue française
  if (/\b(accord\w*|participe\s+pass[ée]|accorde|accordez|nature\s+et\s+fonction|classe\s+grammaticale|fonction\s+grammaticale|mets\s+au\s+pluriel|mets\s+au\s+f[ée]minin|compl[ée]ment\s+d['’]objet|cod\b|coi\b|voix\s+passive|voix\s+active|subordonn[ée]e|conjonction|adjectif|pronom|adverbe)\b/i.test(text)) {
    return {
      exerciseType: 'Exercice de grammaire & langue française',
      category: 'situation_evaluation',
    };
  }

  // Check for Direct Question / Citation / Restitution of knowledge (NOT a dissertation)
  const isDirectQuestionOrRestitution =
    /\b(cite|citez|liste|listez|enumere|énumère|énumérez|donne|donnez|nomme|nommez|mentionne|mentionnez|quels sont|quelles sont|quel est|quelle est|d[ée]finis|d[ée]finir|d[ée]finissez|qu'est-ce que|qu'est ce que|caract[ée]rise|caract[ée]risez|pr[ée]cise|pr[ée]cisez|indique|indiquez)\b/i.test(text) ||
    (!/\b(dissertation|r[ée]dige|discutez|dans quelle mesure|partages-tu|commentaire|document)\b/i.test(text) &&
      text.trim().length < 140 &&
      !/\?.*\?/.test(text) &&
      /\b(relief\w*|climat\w*|fleuve\w*|hydrographie|atout\w*|facteur\w*|cause\w*|cons[ée]quence\w*|d[ée]finition|notion)\b/i.test(text));

  if (isDirectQuestionOrRestitution) {
    if (discipline === 'geographie') {
      return {
        exerciseType: 'Question Directe / Restitution de connaissances en Géographie (BAC / Lycée)',
        category: 'situation_evaluation',
      };
    }
    if (discipline === 'histoire') {
      return {
        exerciseType: 'Question Directe / Restitution de connaissances en Histoire (BAC / Lycée)',
        category: 'situation_evaluation',
      };
    }
    if (discipline === 'philo') {
      return {
        exerciseType: 'Question de cours & Définition conceptuelle en Philosophie (BAC)',
        category: 'reflexion',
      };
    }
    if (discipline === 'francais') {
      return {
        exerciseType: 'Question de cours & Connaissances littéraires (BAC)',
        category: 'reflexion',
      };
    }
  }

  // Default: Dissertation Second Cycle / BAC
  if (discipline === 'francais') {
    return {
      exerciseType: level === '2nde'
        ? 'Dissertation littéraire guidée (2nde)'
        : 'Dissertation littéraire canonique (Expliquer & Discuter - 1ère / Tle BAC)',
      category: 'dissertation',
    };
  }
  if (discipline === 'philo') {
    return {
      exerciseType: 'Dissertation philosophique canonique (2 axes - Thèse / Antithèse 1ère & Terminale)',
      category: 'dissertation',
    };
  }
  if (discipline === 'histoire') {
    return {
      exerciseType: 'Dissertation historique (Plan Évolutif ou Thématique - BAC)',
      category: 'dissertation',
    };
  }

  return {
    exerciseType: 'Dissertation géographique (Plan Thématique & Analyse Spatiale - BAC)',
    category: 'dissertation',
  };
}

/**
 * Main auto-detection algorithm for any input text.
 * @param rawSubject The raw exercise/subject text typed or scanned by the user.
 * @param aiDiscipline Optional discipline already determined by the semantic AI classifier
 *   (see /api/detect-subject). When provided, it takes priority over the local keyword
 *   scoring below — the keyword engine still runs to infer level, exercise type and the
 *   matching fascicule, but the discipline itself is trusted from the AI (which reasons on
 *   meaning, not just keywords, and is far more reliable regardless of class level).
 */
export function detectSubjectMetadata(rawSubject: string, aiDiscipline?: DisciplineType): SubjectDetectionResult {
  const trimmed = rawSubject.trim();
  if (!trimmed) {
    const defaultFasc = DEFAULT_FASCICULES[0];
    return {
      discipline: defaultFasc.discipline,
      disciplineLabel: defaultFasc.disciplineLabel,
      
      cycle: 'premier_cycle_bepc',
      cycleLabel: 'Premier Cycle (Collège)',
      level: '6e',
      levelLabel: '6e à Terminale',
      serie: 'auto',
      serieLabel: 'Toutes séries (Auto-adapté)',
      exerciseType: 'Expression écrite & Résolution méthodique',
      exerciseCategory: 'recit_redaction',
      confidence: 100,
      matchedKeywords: [],
      recommendedFasciculeId: defaultFasc.id,
      recommendedPlanStructure: '2_axes',
      explanation: 'Moteur multi-niveaux et multi-séries (6e à la Terminale A1, A2, C, D...) actif en attente d\'un sujet.',
    };
  }

  // 00. VÉRIFICATION PRIORITAIRE : DEMANDE DE CONJUGAISON UNIVERSELLE
  const parsedConj = parseConjugationRequest(trimmed);
  const trimmedWordCount = trimmed.split(/\s+/).filter(Boolean).length;
  const isShortConjugationCommand =
    trimmedWordCount <= 12 && /\b(conjugue|conjuguer|verbe\s+\w+\s+au)\b/i.test(trimmed);
  if (parsedConj.isConjugationIntent || isShortConjugationCommand) {
    const disc: DisciplineType = parsedConj.language === 'en' ? 'anglais' : parsedConj.language === 'de' ? 'allemand' : parsedConj.language === 'es' ? 'espagnol' : 'francais';
    const langLabel = parsedConj.languageLabel || (disc === 'anglais' ? 'Anglais' : disc === 'allemand' ? 'Allemand' : disc === 'espagnol' ? 'Espagnol' : 'Français');
    return {
      discipline: disc,
      disciplineLabel: langLabel,
      cycle: 'premier_cycle_bepc',
      cycleLabel: 'Collège & Lycée',
      level: '6e',
      levelLabel: 'Tous niveaux',
      serie: 'auto',
      serieLabel: 'Toutes séries (Auto-adapté)',
      exerciseType: 'Exercice de conjugaison & morphologie verbale',
      exerciseCategory: 'situation_evaluation',
      confidence: 100,
      matchedKeywords: ['conjugaison', parsedConj.infinitive || 'verbe', parsedConj.requestedTenseLabel || 'présent'].filter(Boolean),
      recommendedFasciculeId: disc === 'anglais' ? 'anglais-exam-excellence' : disc === 'allemand' ? 'allemand-excellence-lv2' : disc === 'espagnol' ? 'espagnol-excellence-lv2' : 'francais-college-initiation',
      recommendedPlanStructure: '2_axes',
      explanation: `Exercice de morphologie et conjugaison verbale (${parsedConj.infinitive || 'verbe'}) en ${langLabel}.`,
    };
  }

  const scores: Record<DisciplineType, { score: number; matches: string[] }> = {
    philo: { score: 0, matches: [] },
    francais: { score: 0, matches: [] },
    histoire: { score: 0, matches: [] },
    geographie: { score: 0, matches: [] },
    mathematiques: { score: 0, matches: [] },
    physique_chimie: { score: 0, matches: [] },
    svt: { score: 0, matches: [] },
    anglais: { score: 0, matches: [] },
    allemand: { score: 0, matches: [] },
    espagnol: { score: 0, matches: [] },
    edhc: { score: 0, matches: [] },
    tice: { score: 0, matches: [] },
    ses: { score: 0, matches: [] },
    informatique: { score: 0, matches: [] },
    droit_gestion: { score: 0, matches: [] },
    sciences_ingenieur: { score: 0, matches: [] },
    autre: { score: 0, matches: [] },
  };

  // 0. EXPLICIT HOMEWORK & DIRECT DISCIPLINE DIRECTIVE (+100 points)
  // Détecte "mon devoir d'anglais", "devoir d'englais", "devoir de svt", "exercice de maths", etc.
  const hwMatch = trimmed.match(/\b(?:mon\s+)?(?:devoir|exercice|cours|fiche|interro|sujet|épreuve|epreuve)\s+(?:d['’]|de\s+)(anglais|englais|english|allemand|deutsch|espagnol|español|spanish|maths?|math[ée]matiques?|physique|chimie|svt|biologie|g[ée]ologie|fran[çc]ais|litt[ée]rature|lettres|histoire|g[ée]ographie|philo|philosophie)\b/i);
  if (hwMatch) {
    const rawDisc = hwMatch[1].toLowerCase();
    if (/anglais|englais|english/.test(rawDisc)) { scores.anglais.score += 100; scores.anglais.matches.push('Devoir anglais explicite'); }
    else if (/allemand|deutsch/.test(rawDisc)) { scores.allemand.score += 100; scores.allemand.matches.push('Devoir allemand explicite'); }
    else if (/espagnol|español|spanish/.test(rawDisc)) { scores.espagnol.score += 100; scores.espagnol.matches.push('Devoir espagnol explicite'); }
    else if (/math/.test(rawDisc)) { scores.mathematiques.score += 100; scores.mathematiques.matches.push('Devoir maths explicite'); }
    else if (/physique|chimie/.test(rawDisc)) { scores.physique_chimie.score += 100; scores.physique_chimie.matches.push('Devoir PC explicite'); }
    else if (/svt|biologie|geologie/.test(rawDisc)) { scores.svt.score += 100; scores.svt.matches.push('Devoir SVT explicite'); }
    else if (/francais|litterature|lettres/.test(rawDisc)) { scores.francais.score += 100; scores.francais.matches.push('Devoir français explicite'); }
    else if (/histoire/.test(rawDisc)) { scores.histoire.score += 100; scores.histoire.matches.push('Devoir histoire explicite'); }
    else if (/geo/.test(rawDisc)) { scores.geographie.score += 100; scores.geographie.matches.push('Devoir géo explicite'); }
    else if (/philo/.test(rawDisc)) { scores.philo.score += 100; scores.philo.matches.push('Devoir philo explicite'); }
  }

  DISCIPLINE_SIGNATURES.forEach((sig) => {
    // 1. Check Primary Keywords (+10 points)
    sig.primaryKeywords.forEach((regex) => {
      const match = trimmed.match(regex);
      if (match) {
        scores[sig.discipline].score += 10;
        scores[sig.discipline].matches.push(match[0]);
      }
    });

    // 2. Check Authors and Famous Figures (+15 points)
    sig.authorsAndFigures.forEach((regex) => {
      const match = trimmed.match(regex);
      if (match) {
        scores[sig.discipline].score += 15;
        scores[sig.discipline].matches.push(match[0]);
      }
    });

    // 3. Check Typical Subjects (+20 points)
    sig.typicalSubjects.forEach((regex) => {
      if (regex.test(trimmed)) {
        scores[sig.discipline].score += 20;
        scores[sig.discipline].matches.push('Formulation type');
      }
    });

    // 4. Check Secondary Keywords (+4 points)
    sig.secondaryKeywords.forEach((regex) => {
      const match = trimmed.match(regex);
      if (match) {
        scores[sig.discipline].score += 4;
        scores[sig.discipline].matches.push(match[0]);
      }
    });
  });

  // Determine top discipline
  let bestDiscipline: DisciplineType = 'philo';
  let highestScore = -1;

  (Object.keys(scores) as DisciplineType[]).forEach((disc) => {
    if (scores[disc].score > highestScore) {
      highestScore = scores[disc].score;
      bestDiscipline = disc;
    }
  });

  // If the semantic AI classifier already identified the discipline, trust it: it reasons on
  // the meaning of the exercise (like a real teacher would), so it catches math/physics-chemistry/SVT
  // exercises that don't contain any of the exact keywords below, at any class level.
  const aiOverrideApplied = !!aiDiscipline && Object.prototype.hasOwnProperty.call(scores, aiDiscipline);
  if (aiOverrideApplied) {
    bestDiscipline = aiDiscipline as DisciplineType;
    highestScore = Math.max(highestScore, 10);
  }

  // Fallback heuristic if score is 0 or very low
  if (!aiOverrideApplied && highestScore <= 0) {
    if (/^[\s\d\+\-\*\/×÷\^\(\)\.\,\=\<\>\!\%\?xXyYzZ\s]+$/.test(trimmed) && /\d/.test(trimmed)) {
      bestDiscipline = 'mathematiques';
    } else if (/\b(f\(x\)|e\^x|ln\(x\)|limite|\blim\b|suite|complexe|probabilité|calculer|calcule|démontrer|intégrale|dérivée|matrice|vecteur|repère|sin|cos|tan|factoriser|pythagore|thalès|fraction)\b|[=<>≤≥∫∑√]|\$\$.*\$\$|\\lim|\\frac/i.test(trimmed)) {
      bestDiscipline = 'mathematiques';
    } else if (/\b(dosage|newton|condensateur|projectile|acide|base|ph|vitesse|accélération|circuit rc|mol|chimie|physique)\b/i.test(trimmed)) {
      bestDiscipline = 'physique_chimie';
    } else if (/\b(svt|adn|cellule|chromosome|arbre généalogique|immunité|synapse|mitose|méiose|subduction|tectonique)\b/i.test(trimmed)) {
      bestDiscipline = 'svt';
    } else if (/\b(allemand|deutsch|german|textverständnis|leseverstehen|grammatik|aufsatz|deklination|weil|obwohl|schon|nicht|kein|schule|hausaufgabe|wichtig|bildung|jugend)\b/i.test(trimmed) || (trimmed.match(/\b(ich|du|er|sie|wir|ihr|ist|sind|hat|haben|der|die|das|den|dem|des|schule|lehrer|schüler|deutschland|berlin)\b/gi) || []).length >= 3) {
      bestDiscipline = 'allemand';
    } else if (/\b(español|spanish|espagnol|comprensión|subjuntivo|ser y estar|ser o estar|redacción|por y para|por o para|escuela|alumno|profesor)\b/i.test(trimmed) || (trimmed.match(/\b(yo|tú|él|ella|usted|nosotros|vosotros|ellos|ellas|ustedes|soy|eres|somos|sois|son|estoy|estás|está|estamos|están|tengo|tiene|los|las|unos|unas|alumno|alumnos|escuela|todos|días|españa|madrid|barcelona)\b/gi) || []).length >= 3 || (/[¿¡]/.test(trimmed) && (trimmed.match(/\b(yo|tú|él|ella|usted|nosotros|soy|es|son|está|están|tengo|tiene|los|las|alumno|alumnos|escuela)\b/gi) || []).length >= 1)) {
      bestDiscipline = 'espagnol';
    } else if (/\b(english|anglais|englais|reading comprehension|essay|passive voice|reported speech|grammar|wh-|translate|translation)\b/i.test(trimmed) || (trimmed.match(/\b(the|is|are|was|were|have|has|had|do|does|did|will|would|can|could|don't|doesn't|didn't|yesterday|tomorrow|school|teacher|student)\b/gi) || []).length >= 3) {
      bestDiscipline = 'anglais';
    } else if (/\b(philosoph\w*|pens[ée]\w*|v[ée]rit[ée]|connaissance|conscience|inconscient|libert[ée]|libre\s+arbitre|responsabilit[ée]|responsable|justice|injustice|[ée]tat|etat|morale?|bonheur|devoir|raison|religion|science|technique|travail|nature|culture|l['’]homme|existence|langage|soci[ée]t[ée]|autrui|d[ée]sir|passion|mort|d[ée]terminisme)\b/i.test(trimmed)) {
      bestDiscipline = 'philo';
    } else if (/\b(théâtre|roman|poésie|écrivain|comédie|littérature|hilarité|étayant|réfutant|cdvr|bepc|résume ce texte|portrait|raconte|dialogue|conjug|verbe|grammaire|accord)\b/i.test(trimmed)) {
      bestDiscipline = 'francais';
    } else if (/\b(guerre|siècle|1945|colonisation|pays|traité|crise|empires|préhistoire)\b/i.test(trimmed)) {
      bestDiscipline = 'histoire';
    } else if (/\b(espace|agriculture|côte d'ivoire|climat|population|ville|port|déforestation)\b/i.test(trimmed)) {
      bestDiscipline = 'geographie';
    } else {
      // Si aucune notion philosophique explicite n'est présente, ne JAMAIS forcer Philosophie !
      const hasPhiloConcept = /\b(philosoph\w*|pens[ée]\w+|conscience|inconscient|libert[ée]|libre\s+arbitre|responsabilit[ée]|responsable|justice|injustice|[ée]tat|etat|morale?|bonheur|devoir|raison|religion|science|technique|travail|nature|culture|l['’]homme|existence|langage|soci[ée]t[ée]|autrui|d[ée]sir|passion|mort|d[ée]terminisme)\b/i.test(trimmed);
      bestDiscipline = hasPhiloConcept ? 'philo' : 'francais';
    }
  }

  // RÈGLE ABSOLUE D'IDENTIFICATION DE LA DISCIPLINE (Philosophie vs Littérature) :
  // Si le sujet porte sur une notion philosophique (vérité, liberté, responsabilité,
  // conscience, justice, État, bonheur, devoir, travail, raison, homme...) SANS porter
  // explicitement sur un genre ou un objet littéraire (roman, poésie, théâtre, écrivain...),
  // il doit OBLIGATOIREMENT être traité en PHILOSOPHIE.
  const hasExplicitLiterature = /\b(litt[ée]rature|litt[ée]raire|roman|romancier|po[ée]sie|po[èe]me|po[èe]te|th[ée]âtre|dramaturge|pi[èe]ce de th[ée]âtre|[ée]crivain|h[ée]ros|personnage|vers\b|strophe|alexandrin|com[ée]die|trag[ée]die|didascalie|versification|tragique|comique)\b/i.test(trimmed);

  const hasPhilosophicalNotions = /\b(philosoph\w*|pens[ée]\w*|v[ée]rit[ée]|connaissance|conscience|inconscient|libert[ée]|libre\s+arbitre|responsabilit[ée]|responsable|justice|injustice|[ée]tat|etat|morale?|bonheur|devoir|raison|religion|science|technique|travail|nature|culture|l['’]homme|existence|exister|langage|soci[ée]t[ée]|autrui|d[ée]sir|passion|mort|d[ée]terminisme|fatalisme|ali[ée]nation|loi|droit|bien|mal|jugement|vertu|souverainet[ée])\b/i.test(trimmed);

  const isMathOrScience = bestDiscipline === 'mathematiques' || bestDiscipline === 'physique_chimie' || bestDiscipline === 'svt';
  const isLanguage = bestDiscipline === 'anglais' || bestDiscipline === 'allemand' || bestDiscipline === 'espagnol';
  const isHistoryGeo = (bestDiscipline === 'histoire' || bestDiscipline === 'geographie') && /\b(si[èe]cle|1945|guerre|colonisation|d[ée]colonisation|climat|relief|d[ée]mographie|am[ée]nagement)\b/i.test(trimmed);

  if (hasPhilosophicalNotions && !hasExplicitLiterature && !isMathOrScience && !isLanguage && !isHistoryGeo) {
    bestDiscipline = 'philo';
  }

  const { level, levelLabel, cycle, cycleLabel } = detectLevel(trimmed);
  const { serie, serieLabel } = detectAcademicSerie(trimmed, level);
  const { exerciseType, category } = detectExerciseType(trimmed, bestDiscipline, level, cycle);

  // Recommended Fascicule based on Grade Level & Discipline
  let targetFasciculeId = 'philo-dissertation';
  if (level === '6e' || level === '5e' || level === '4e') {
    if (bestDiscipline === 'francais') targetFasciculeId = 'francais-college-initiation';
    else if (bestDiscipline === 'mathematiques') targetFasciculeId = 'math-college';
    else if (bestDiscipline === 'histoire' || bestDiscipline === 'geographie') targetFasciculeId = 'histoire-geo-college';
    else if (bestDiscipline === 'physique_chimie') targetFasciculeId = 'physique-chimie-expert';
    else if (bestDiscipline === 'svt') targetFasciculeId = 'svt-sciences-vie-terre';
    else if (bestDiscipline === 'anglais') targetFasciculeId = 'anglais-exam-excellence';
    else if (bestDiscipline === 'allemand') targetFasciculeId = 'allemand-excellence-lv2';
    else if (bestDiscipline === 'espagnol') targetFasciculeId = 'espagnol-excellence-lv2';
    else targetFasciculeId = 'francais-college-initiation';
  } else if (level === '3e') {
    if (bestDiscipline === 'francais') targetFasciculeId = 'francais-bepc-texte-argumentatif';
    else if (bestDiscipline === 'mathematiques') targetFasciculeId = 'math-college';
    else if (bestDiscipline === 'histoire' || bestDiscipline === 'geographie') targetFasciculeId = 'histoire-geo-college';
    else if (bestDiscipline === 'physique_chimie') targetFasciculeId = 'physique-chimie-expert';
    else if (bestDiscipline === 'svt') targetFasciculeId = 'svt-sciences-vie-terre';
    else if (bestDiscipline === 'anglais') targetFasciculeId = 'anglais-exam-excellence';
    else if (bestDiscipline === 'allemand') targetFasciculeId = 'allemand-excellence-lv2';
    else if (bestDiscipline === 'espagnol') targetFasciculeId = 'espagnol-excellence-lv2';
    else targetFasciculeId = 'francais-bepc-texte-argumentatif';
  } else if (level === 'superieur' || cycle === 'superieur_universite') {
    if (bestDiscipline === 'mathematiques') targetFasciculeId = 'math-superieur-universite';
    else if (bestDiscipline === 'physique_chimie') targetFasciculeId = 'physique-chimie-expert';
    else if (bestDiscipline === 'svt') targetFasciculeId = 'svt-sciences-vie-terre';
    else targetFasciculeId = 'math-superieur-universite';
  } else {
    // 2nde, 1ère, Terminale
    if (bestDiscipline === 'mathematiques') targetFasciculeId = 'math-lycee';
    else if (bestDiscipline === 'physique_chimie') targetFasciculeId = 'physique-chimie-expert';
    else if (bestDiscipline === 'svt') targetFasciculeId = 'svt-sciences-vie-terre';
    else if (bestDiscipline === 'anglais') targetFasciculeId = 'anglais-exam-excellence';
    else if (bestDiscipline === 'allemand') targetFasciculeId = 'allemand-excellence-lv2';
    else if (bestDiscipline === 'espagnol') targetFasciculeId = 'espagnol-excellence-lv2';
    else if (bestDiscipline === 'francais') targetFasciculeId = 'francais-litterature';
    else if (bestDiscipline === 'histoire') targetFasciculeId = 'histoire-methodologie';
    else if (bestDiscipline === 'geographie') targetFasciculeId = 'geographie-methodologie';
    else targetFasciculeId = 'philo-dissertation';
  }

  const targetFascicule = DEFAULT_FASCICULES.find((f) => f.id === targetFasciculeId) || DEFAULT_FASCICULES[0];
  
  const matchingSignature = DISCIPLINE_SIGNATURES.find((s) => s.discipline === bestDiscipline) || DISCIPLINE_SIGNATURES[0];
  const confidence = aiOverrideApplied ? 98 : Math.min(99, Math.max(78, 72 + highestScore * 2));
  const uniqueMatches = Array.from(new Set(scores[bestDiscipline].matches));

  const explanation = aiOverrideApplied
    ? `Discipline confirmée : ${matchingSignature.disciplineLabel}. Niveau & Série : ${serieLabel}. Démonstration et astuces conformes aux exigences d'examen.`
    : `Niveau & Série : ${serieLabel} (${matchingSignature.disciplineLabel}). Démarche et rigueur conformes au programme.`;

  return {
    discipline: bestDiscipline,
    disciplineLabel: matchingSignature.disciplineLabel,
    disciplineIcon: matchingSignature.disciplineIcon,
    cycle,
    cycleLabel,
    level,
    levelLabel,
    serie,
    serieLabel,
    exerciseType,
    exerciseCategory: category,
    confidence,
    matchedKeywords: uniqueMatches,
    recommendedFasciculeId: targetFascicule.id,
    recommendedPlanStructure: '2_axes',
    explanation,
  };
}
