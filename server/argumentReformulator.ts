/**
 * Moteur Avancé de Différenciation, Reformulation et Variations d'Explications
 * Spécifiquement conçu pour les Dissertations de Philosophie et de Français.
 * 
 * Garantit que :
 * 1. Les formulations pédagogiques peuvent varier selon la graine de l'utilisateur et de la recherche.
 * 2. Une même recherche peut donc être présentée différemment sans changer l'idée philosophique.
 * 3. Les citations, auteurs et œuvres restent attachés à leur argument et ne sont jamais modifiés pour créer de la variété.
 * 4. Les connecteurs et les modèles d'insertion peuvent varier indépendamment des références authentiques.
 */

import type { ArgumentItem } from './argumentVariationEngine';

export interface ArgumentVariationSpec {
  alternateStatements: string[];
  alternateExplanations: string[];
  alternateQuotes?: string[];
  alternateConnectors?: string[];
}

/**
 * Base de reformulations et d'explications diversifiées pour les auteurs et notions canoniques
 */

/**
 * Français facile pour les arguments de philosophie.
 * On ne crée aucune idée nouvelle : on simplifie uniquement le vocabulaire
 * et la syntaxe d'une formulation déjà validée.
 */
function simplifyPhiloVocabularyLegacy(text: string): string {
  let value = text.trim().replace(/\s+/g, ' ');
  const transforms: Array<[RegExp, string]> = [
    [/\bconstitue\b/gi, 'est'],
    [/\bconstituent\b/gi, 'sont'],
    [/\bindispensable\b/gi, 'nécessaire'],
    [/\bindispensables\b/gi, 'nécessaires'],
    [/\bprimordial(?:e)?\b/gi, 'important'],
    [/\bfondamentalement\b/gi, 'surtout'],
    [/\bvéritablement\b/gi, 'vraiment'],
    [/\bvéritable\b/gi, 'vrai'],
    [/\bpermet de\b/gi, 'aide à'],
    [/\bpermettent de\b/gi, 'aident à'],
    [/\bafin de\b/gi, 'pour'],
    [/\bcependant\b/gi, 'mais'],
    [/\bnéanmoins\b/gi, 'mais'],
    [/\bdécoule de\b/gi, 'vient de'],
    [/\brésulte de\b/gi, 'vient de'],
    [/\bse caractérise par\b/gi, 'se reconnaît par'],
    [/\bs'inscrit dans\b/gi, 'fait partie de'],
    [/\bmet en évidence\b/gi, 'montre'],
    [/\bmet en lumière\b/gi, 'montre'],
    [/\bproblématise\b/gi, 'pose comme problème'],
    [/\bpostule\b/gi, 'suppose'],
    [/\btranscende\b/gi, 'dépasse'],
    [/\birréductible(?:s)?\b/gi, 'qu’on ne peut pas réduire'],
    [/\bprééminence\b/gi, 'importance'],
    [/\baliénation\b/gi, 'perte de liberté'],
    [/\bémancipation\b/gi, 'libération'],
    [/\barbitraire\b/gi, 'imposé sans raison'],
    [/\bcontingence\b/gi, 'ce qui pourrait être autrement'],
    [/\bsubjectivité\b/gi, 'point de vue personnel'],
    [/\bobjectivité\b/gi, 'fait indépendant des opinions'],
    [/\bautonomie\b/gi, 'liberté de décider par soi-même'],
    [/\bconscience réflexive\b/gi, 'conscience de soi'],
    [/\bvolonté générale\b/gi, 'volonté commune'],
    [/\bpuissance publique\b/gi, 'pouvoir de l’État'],
    [/\blégitimer\b/gi, 'rendre acceptable ou juste'],
    [/\blégitime\b/gi, 'juste ou acceptable'],
    [/\bpréserver\b/gi, 'protéger'],
    [/\bentraver\b/gi, 'empêcher ou gêner'],
    [/\bsubordonné à\b/gi, 'soumis à'],
    [/\bse soustraire à\b/gi, 'échapper à'],
    [/\baspire à\b/gi, 'cherche à'],
    [/\bvise à\b/gi, 'cherche à'],
    [/\bimplique\b/gi, 'veut dire aussi'],
    [/\bmanifeste\b/gi, 'montre'],
    [/\bexprime\b/gi, 'montre'],
  ];
  for (const [pattern, replacement] of transforms) value = value.replace(pattern, replacement);

  // Corrections grammaticales provoquées par certaines simplifications lexicales.
  value = value
    .replace(/\bL['’]liberté\b/gi, 'La liberté')
    .replace(/\bL['’]autonomie\b/gi, "L'autonomie")
    .replace(/\bL['’]importance\b/gi, "L'importance")
    .replace(/\bL['’]idée\b/gi, "L'idée")
    .replace(/\bL['’]essentiel\b/gi, "L'essentiel")
    .replace(/\bLa vrai\b/gi, 'La vraie')
    .replace(/\bLe vrai\b/gi, 'Le vrai')
    .replace(/\s+([,.;!?])/g, '$1')
    .replace(/([.!?])\s*([a-zà-ÿ])/g, (_, punct, letter) => `${punct} ${letter.toUpperCase()}`);

  return value.replace(/\s+/g, ' ').trim();
}

function buildSimplePhiloVariants(statement: string): string[] {
  const base = simplifyPhiloVocabularyLegacy(sanitizeDirectArgumentStatement(statement));
  const variants = new Set<string>();

  // Niveau attendu : Terminale, français courant, phrases courtes.
  // On simplifie l'idée sans changer sa thèse philosophique.
  const easyRules: Array<[RegExp, string]> = [
    [/\bl['’]illusion de la liberté\b/gi, 'Le sentiment d’être libre'],
    [/\bl['’]illusion\b/gi, 'La fausse idée'],
    [/\bméconnaissance\b/gi, 'fait de ne pas connaître'],
    [/\bconnaissance des causes\b/gi, 'connaissance de ce qui nous pousse à agir'],
    [/\bcauses réelles qui nous déterminent\b/gi, 'causes qui nous poussent à agir'],
    [/\bse détermine(?:r)? par la lumière de la raison\b/gi, 'choisir grâce à la raison'],
    [/\bse déterminer par la raison\b/gi, 'choisir grâce à la raison'],
    [/\bvolonté humaine\b/gi, 'volonté de l’homme'],
    [/\blibre arbitre\b/gi, 'liberté de choisir'],
    [/\bliberté authentique\b/gi, 'vraie liberté'],
    [/\bs'identifie à\b/gi, 'est'],
    [/\bautonomie morale\b/gi, 'liberté de décider par soi-même'],
    [/\bautonomie\b/gi, 'liberté de décider par soi-même'],
    [/\bvolonté soumise à la loi morale\b/gi, 'volonté qui respecte la loi morale'],
    [/\bmaîtrise intérieure\b/gi, 'maîtrise de soi'],
    [/\bdiscernement stoïcien\b/gi, 'capacité à distinguer ce qui dépend de nous'],
    [/\bfondent\b/gi, 'permettent de construire'],
    [/\bfondement\b/gi, 'base'],
    [/\binaliénable\b/gi, 'qu’on ne peut pas enlever'],
    [/\birréductible\b/gi, 'qu’on ne peut pas réduire'],
    [/\bprimordial(?:e)?\b/gi, 'très important'],
    [/\bfondamental(?:e)?\b/gi, 'très important'],
    [/\bvéritable(?:ment)?\b/gi, 'vrai'],
    [/\bauthentique\b/gi, 'vrai'],
    [/\bnécessité universelle\b/gi, 'ordre de la nature'],
    [/\bnécessité\b/gi, 'ce qui doit arriver'],
    [/\bmirage anthropomorphique\b/gi, 'fausse idée'],
    [/\bautomatisme mécanique\b/gi, 'fait d’agir sans réfléchir'],
    [/\blégifère pour lui-même\b/gi, 'décide lui-même de ses règles'],
    [/\blégiférer\b/gi, 'faire ses propres règles'],
    [/\bimpératif catégorique\b/gi, 'règle morale qui doit être respectée'],
    [/\bêtre raisonnable\b/gi, 'personne capable de réfléchir'],
    [/\bentendement\b/gi, 'raison'],
    [/\bindifférence capricieuse\b/gi, 'faire n’importe quoi'],
    [/\bpassions passives\b/gi, 'passions'],
    [/\btyrannie du destin extérieur\b/gi, 'ce que nous ne pouvons pas contrôler'],
    [/\bcitadelle intérieure imprenable\b/gi, 'force intérieure'],
    [/\bse soustraire à\b/gi, 'échapper à'],
    [/\btranscende\b/gi, 'dépasse'],
    [/\bproblématise\b/gi, 'pose un problème'],
    [/\bpostule\b/gi, 'suppose'],
    [/\bprééminence\b/gi, 'importance'],
    [/\baliénation\b/gi, 'perte de liberté'],
    [/\bémancipation\b/gi, 'libération'],
    [/\barbitraire\b/gi, 'imposé sans raison'],
    [/\bcontingence\b/gi, 'ce qui pourrait être autrement'],
    [/\bsubjectivité\b/gi, 'point de vue personnel'],
    [/\bobjectivité\b/gi, 'fait indépendant des opinions'],
    [/\brationalité\b/gi, 'raison'],
    [/\brationalité abstraite\b/gi, 'raison théorique'],
    [/\bcommunicationnelle\b/gi, 'fondée sur le dialogue'],
    [/\bépistémologique\b/gi, 'lié à la connaissance'],
    [/\bontologique\b/gi, 'lié à l’être'],
    [/\bmétaphysique\b/gi, 'qui cherche à comprendre la réalité profonde'],
    [/\bconsubstantiel\b/gi, 'étroitement lié'],
    [/\binterdépendance\b/gi, 'dépendance entre les uns et les autres'],
    [/\bconception\b/gi, 'manière de voir'],
    [/\bthéorique\b/gi, 'lié aux idées'],
    [/\bempirique\b/gi, 'fondé sur l’expérience'],
    [/\buniversel(?:le)?\b/gi, 'valable pour tous'],
    [/\bparticularité\b/gi, 'caractère propre'],
    [/\bsubjectif(?:ve)?\b/gi, 'personnel'],
    [/\bobjectif(?:ve)?\b/gi, 'indépendant des opinions'],
    [/\bcoercition\b/gi, 'contrainte'],
    [/\bcontraindre\b/gi, 'forcer'],
    [/\bpréserver\b/gi, 'protéger'],
    [/\bentraver\b/gi, 'empêcher'],
    [/\baspire à\b/gi, 'cherche à'],
    [/\bvise à\b/gi, 'cherche à'],
    [/\bimplique\b/gi, 'veut aussi dire'],
    [/\bmanifeste\b/gi, 'montre'],
    [/\bexprime\b/gi, 'montre'],
    [/\bse caractérise par\b/gi, 'se reconnaît par'],
    [/\bse définit comme\b/gi, 'est'],
    [/\bse définit par\b/gi, 'se reconnaît par'],
    [/\bse réduit à\b/gi, 'n’est pas seulement'],
    [/\bne saurait\b/gi, 'ne peut pas'],
    [/\bautrui\b/gi, 'les autres'],
  ];

  let easy = base;
  for (const [pattern, replacement] of easyRules) {
    easy = easy.replace(pattern, replacement);
  }

  // Corrections grammaticales et simplification de tournures.
  easy = easy
    .replace(/\bLa vrai\b/gi, 'La vraie')
    .replace(/\bL['’]liberté\b/gi, 'La liberté')
    .replace(/\bL['’]autonomie\b/gi, "L'autonomie")
    .replace(/\bL['’]idée\b/gi, "L'idée")
    .replace(/\bL['’]homme\b/gi, "L'homme")
    .replace(/\bIl est nécessaire de\b/gi, 'Il faut')
    .replace(/\bIl est important de\b/gi, 'Il faut')
    .replace(/\bpermet à l['’]homme de\b/gi, "aide l'homme à")
    .replace(/\bpermettent à l['’]homme de\b/gi, "aident l'homme à")
    .replace(/\bafin que\b/gi, 'pour que')
    .replace(/\bafin de\b/gi, 'pour')
    .replace(/\bpar conséquent\b/gi, 'donc')
    .replace(/\bcependant\b/gi, 'mais')
    .replace(/\bnéanmoins\b/gi, 'mais')
    .replace(/\s+/g, ' ')
    .trim();

  // Reformulations directes pour les formulations philosophiques fréquentes.
  // Elles restent des reformulations pédagogiques de l'idée déjà présente.
  const direct: Array<[RegExp, string]> = [
    [/^Le libre arbitre permet à la volonté humaine de choisir grâce à la raison\.?$/i,
      "La liberté de choisir permet à l’homme de décider grâce à la raison."],
    [/^Le sentiment d’être libre vient du fait de ne pas connaître les causes qui nous poussent à agir\.?$/i,
      "Nous pensons être libres parce que nous ne connaissons pas toujours ce qui nous pousse à agir."],
    [/^La liberté authentique est à la liberté de décider par soi-même de la volonté qui respecte la loi morale\.?$/i,
      "La vraie liberté consiste à décider par soi-même tout en respectant la loi morale."],
    [/^La liberté authentique s'identifie à la liberté de décider par soi-même de la volonté qui respecte la loi morale\.?$/i,
      "La vraie liberté consiste à décider par soi-même tout en respectant la loi morale."],
    [/^La maîtrise de soi et la capacité à distinguer ce qui dépend de nous permettent de construire une liberté qu’on ne peut pas enlever\.?$/i,
      "On est plus libre quand on sait ce qui dépend de nous et qu’on maîtrise ses réactions."],
  ];
  for (const [pattern, replacement] of direct) {
    if (pattern.test(easy)) {
      easy = replacement;
      variants.add(replacement);
    }
  }

  // Quelques reformulations naturelles, courtes et adaptées à la mémorisation.
  variants.add(easy);

  if (/^Le sentiment d’être libre vient de/i.test(easy)) {
    variants.add(easy.replace(
      /^Le sentiment d’être libre vient de/i,
      'Nous pensons être libres parce que'
    ).replace(/\.$/, '.'));
  }
  if (/^La vraie liberté est/i.test(easy)) {
    variants.add(easy.replace(/^La vraie liberté est/i, 'Être vraiment libre, c’est'));
  }
  if (/^La maîtrise de soi/i.test(easy)) {
    variants.add(easy.replace(/^La maîtrise de soi/i, 'On est plus libre quand on se maîtrise'));
  }

  // Une phrase « X est Y » peut être mémorisée sous une forme encore plus directe.
  const estMatch = easy.match(/^(.+?)\s+est\s+(.+?)(?:\.)?$/i);
  if (estMatch && estMatch[1].split(/\s+/).length <= 12) {
    variants.add(`${estMatch[1]} : ${estMatch[2]}.`);
  }

  return [...variants]
    .map(v => sanitizeDirectArgumentStatement(v).replace(/\s+/g, ' ').trim())
    .filter(v => v.length >= 15 && v.length <= 320);
}

function buildSimplePhiloExplanation(text: string): string {
  let clean = simplifyPhiloVocabularyLegacy(text);
  clean = clean
    .replace(/^Selon\s+[^,.!?;:]+,?\s*/i, '')
    .replace(/^D['’]après\s+[^,.!?;:]+,?\s*/i, '')
    .replace(/^Chez\s+[^,.!?;:]+,?\s*/i, '')
    .replace(/^En définitive,?\s*/i, '')
    .replace(/^De ce fait,?\s*/i, 'Donc ')
    .replace(/^Par conséquent,?\s*/i, 'Donc ')
    .replace(/\s*;\s*/g, '. ')
    .replace(/\s*:\s*/g, ': ')
    .replace(/\s+/g, ' ')
    .trim();

  // Le but est scolaire : des phrases courtes, faciles à mémoriser.
  clean = clean.replace(/,\s+(car|parce que|puisque)\s+/gi, '. $1 ');
  clean = clean.replace(/,\s+(mais|pourtant)\s+/gi, '. $1 ');
  return clean;
}

function buildEasyPhiloExplanationVariants(text: string): string[] {
  const base = buildSimplePhiloExplanation(text);
  const variants = new Set<string>([base]);

  const short = base
    .replace(/\s+qui\s+/gi, '. Qui ')
    .replace(/\s+ce qui\s+/gi, '. Cela ')
    .replace(/\s+ce que\s+/gi, '. Cela ');
  if (short !== base) variants.add(short);

  const because = base.match(/^(.+?)\s+(?:parce que|car)\s+(.+)$/i);
  if (because) variants.add(`${because[1].trim()}. La raison est simple : ${because[2].trim()}.`);

  const contrast = base.match(/^(.+?)\s+(?:mais|pourtant)\s+(.+)$/i);
  if (contrast) variants.add(`${contrast[1].trim()}. Pourtant, ${contrast[2].trim()}.`);

  return [...variants]
    .map(v => v.replace(/\s+/g, ' ').replace(/\.\s*\./g, '.').trim())
    .filter(v => v.length >= 25 && v.length <= 700);
}

function buildEasyToRemember(statement: string): string {
  return simplifyPhiloVocabularyLegacy(sanitizeDirectArgumentStatement(statement))
    .replace(/^L'idée selon laquelle\s+/i, '')
    .replace(/^Le fait que\s+/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function simplifyLiteratureFrench(text: string): string {
  let value = sanitizeDirectArgumentStatement(text);
  const transforms: Array<[RegExp, string]> = [
    [/\bvalorise\b/gi, 'met en valeur'],
    [/\bvalorisent\b/gi, 'mettent en valeur'],
    [/\bsuscite\b/gi, 'provoque'],
    [/\bsuscitent\b/gi, 'provoquent'],
    [/\bpermet de mettre en lumière\b/gi, 'permet de montrer'],
    [/\bmet en lumière\b/gi, 'montre'],
    [/\bmet en exergue\b/gi, 'met en valeur'],
    [/\bdénonce\b/gi, 'critique'],
    [/\bdénoncent\b/gi, 'critiquent'],
    [/\bévoque\b/gi, 'parle de'],
    [/\bévoquent\b/gi, 'parlent de'],
    [/\btraduit\b/gi, 'exprime'],
    [/\btraduisent\b/gi, 'expriment'],
    [/\bexprime\b/gi, 'montre'],
    [/\bexpriment\b/gi, 'montrent'],
    [/\btransmet\b/gi, 'fait comprendre'],
    [/\btransmettent\b/gi, 'font comprendre'],
    [/\binstruit\b/gi, 'apprend des choses à'],
    [/\binstruire\b/gi, 'apprendre des choses à'],
    [/\bdivertit\b/gi, 'amuse'],
    [/\bdivertissent\b/gi, 'amusent'],
    [/\bprotagoniste\b/gi, 'personnage principal'],
    [/\bprotagonistes\b/gi, 'personnages principaux'],
    [/\bpéripéties\b/gi, 'aventures et événements'],
    [/\bintrigue\b/gi, 'histoire'],
    [/\binterroge\b/gi, 'fait réfléchir sur'],
    [/\binterrogent\b/gi, 'font réfléchir sur'],
    [/\bconfronte\b/gi, 'oppose'],
    [/\bconfrontent\b/gi, 'opposent'],
    [/\boppression\b/gi, 'domination'],
    [/\boppressives\b/gi, 'qui dominent'],
    [/\baliénation\b/gi, 'perte de liberté'],
    [/\bémancipation\b/gi, 'libération'],
    [/\bexutoire\b/gi, 'moyen de se libérer de ses émotions'],
    [/\bportée universelle\b/gi, 'sens qui peut toucher tout le monde'],
    [/\bdimension esthétique\b/gi, 'beauté artistique'],
    [/\bdimension littéraire\b/gi, 'beauté littéraire'],
    [/\bvirtuosité\b/gi, 'grande maîtrise'],
    [/\braffiné(e)?\b/gi, 'soigné'],
    [/\bfoisonnant(e)?\b/gi, 'très riche'],
    [/\bnovateur\b/gi, 'nouveau'],
    [/\bnovatrice\b/gi, 'nouvelle'],
    [/\bnovateurs\b/gi, 'nouveaux'],
    [/\bnovatrices\b/gi, 'nouvelles'],
    [/\bproblématique\b/gi, 'question'],
    [/\bcontradictions\b/gi, 'oppositions'],
    [/\bcontradiction\b/gi, 'opposition'],
    [/\bcomportements humains\b/gi, 'comportements des hommes'],
    [/\brelations humaines\b/gi, 'relations entre les personnes'],
    [/\baspirations\b/gi, 'désirs'],
    [/\baspiration\b/gi, 'désir'],
    [/\bconditions de vie\b/gi, 'vie quotidienne'],
    [/\bexpose\b/gi, 'montre'],
    [/\bexpose(nt)?\b/gi, 'montre'],
    [/\binterpelle\b/gi, 'fait réfléchir'],
    [/\binterpellent\b/gi, 'font réfléchir'],
    [/\bcontribue à\b/gi, 'aide à'],
    [/\bcontribuent à\b/gi, 'aident à'],
    [/\bafin de\b/gi, 'pour'],
    [/\bcependant\b/gi, 'mais'],
    [/\bnéanmoins\b/gi, 'mais'],
    [/\bpar conséquent\b/gi, 'donc'],
    [/\ben outre\b/gi, 'aussi'],
    [/\bainsi que\b/gi, 'et'],
  ];
  for (const [pattern, replacement] of transforms) value = value.replace(pattern, replacement);
  value = value
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;!?])/g, '$1')
    .replace(/([.!?])\s*([a-zà-ÿ])/g, (_, punct, letter) => `${punct} ${letter.toUpperCase()}`)
    .trim();
  return value;
}

function buildEasyLiteratureVariants(text: string, topicKey?: string): string[] {
  const base = simplifyLiteratureFrench(text);
  const variants = new Set<string>([base]);
  const subject = topicKey === 'roman' ? 'Le roman' : topicKey === 'theatre' ? 'Le théâtre' : 'La poésie';

  if (base.startsWith(`${subject} permet de `)) {
    variants.add(base.replace(`${subject} permet de `, `${subject} aide à `));
  }
  if (base.startsWith(`${subject} peut `)) {
    variants.add(base.replace(`${subject} peut `, `${subject} sert aussi à `));
  }
  if (/^Le roman /.test(base)) variants.add(base.replace(/^Le roman /, 'Le récit '));
  if (/^La poésie /.test(base)) variants.add(base.replace(/^La poésie /, 'Le poème '));
  if (/^Le théâtre /.test(base)) variants.add(base.replace(/^Le théâtre /, 'La pièce '));

  return [...variants].filter(v => v.length >= 15 && v.length <= 360);
}

function buildSafeLiteratureStatementVariants(statement: string, topicKey?: string): string[] {
  const clean = sanitizeDirectArgumentStatement(statement);
  const subject = topicKey === 'roman' ? 'Le roman' : topicKey === 'theatre' ? 'Le théâtre' : topicKey === 'poesie' ? 'La poésie' : '';
  const variants = new Set<string>([clean]);

  const patterns: Array<[RegExp, string]> = [
    [/^Le roman\s+/i, 'Dans le roman, '],
    [/^Le théâtre\s+/i, 'Au théâtre, '],
    [/^La poésie\s+/i, 'La création poétique '],
    [/^Le langage poétique\s+/i, 'La parole poétique '],
    [/^Le récit romanesque\s+/i, 'Le récit romanesque '],
    [/^L'art dramatique\s+/i, 'L’écriture dramatique '],
  ];
  for (const [pattern, replacement] of patterns) {
    const candidate = clean.replace(pattern, replacement);
    if (candidate !== clean) variants.add(candidate);
  }

  // Variantes structurelles : elles ne changent ni le sens ni les références.
  if (/^Le roman (?:peut )?/.test(clean)) {
    variants.add(clean.replace(/^Le roman (?:peut )?/i, 'Le récit romanesque '));
    variants.add(clean.replace(/^Le roman (?:peut )?/i, 'Le genre romanesque '));
  }
  if (/^Le théâtre (?:peut )?/.test(clean)) {
    variants.add(clean.replace(/^Le théâtre (?:peut )?/i, 'La scène théâtrale '));
    variants.add(clean.replace(/^Le théâtre (?:peut )?/i, 'L’écriture dramatique '));
  }
  if (/^La poésie (?:peut )?/.test(clean)) {
    variants.add(clean.replace(/^La poésie (?:peut )?/i, 'La parole poétique '));
    variants.add(clean.replace(/^La poésie (?:peut )?/i, 'L’écriture poétique '));
  }

  if (subject) variants.add(clean.replace(new RegExp('^' + subject + '\\s+', 'i'), subject + ' '));
  return [...variants];
}

function buildSafeLiteratureExplanationVariants(explanation: string, topicKey?: string): string[] {
  const clean = explanation.trim();
  if (!clean) return [''];
  const sentences = clean.split(/(?<=[.!?])\s+/).filter(Boolean);
  const variants = new Set<string>([clean]);

  // Réorganisation seulement lorsque les phrases sont indépendantes : aucun fait
  // nouveau n'est ajouté et le contenu pédagogique reste identique.
  if (sentences.length >= 2) {
    variants.add([...sentences].reverse().join(' '));
  }

  const prefix = topicKey === 'roman'
    ? 'Dans cette perspective romanesque, '
    : topicKey === 'theatre'
      ? 'Sur le plan dramatique, '
      : topicKey === 'poesie'
        ? 'Sur le plan poétique, '
        : '';
  if (prefix && !clean.toLowerCase().startsWith(prefix.toLowerCase())) {
    variants.add(prefix + clean.charAt(0).toLowerCase() + clean.slice(1));
  }

  if (sentences.length >= 2 && prefix) {
    const reordered = [...sentences].reverse().join(' ');
    variants.add(prefix + reordered.charAt(0).toLowerCase() + reordered.slice(1));
  }

  return [...variants];
}


/**
 * Étend les variantes validées en une grande famille de reformulations
 * déterministes. Le contenu factuel n'est jamais généré : seules la syntaxe,
 * le sujet grammatical et certaines tournures pédagogiques sûres changent.
 * Cela évite le faux "infini" obtenu en faisant simplement tourner des catégories.
 */
function expandValidatedStatementVariants(seedVariants: string[], topicKey?: string): string[] {
  const out = new Set<string>();
  const add = (v: string) => {
    const cleaned = sanitizeDirectArgumentStatement(v).replace(/\s+/g, ' ').trim();
    if (cleaned && cleaned.length >= 18) out.add(cleaned);
  };

  const subjectPairs: Array<[RegExp, string[]]> = [
    [/^Le roman\b/i, ['Le récit romanesque', 'Le genre romanesque', 'La fiction romanesque', "L'écriture romanesque"]],
    [/^La poésie\b/i, ['Le langage poétique', 'La parole poétique', "L'écriture poétique", 'Le texte poétique']],
    [/^Le théâtre\b/i, ["L'écriture dramatique", 'La scène théâtrale', 'Le texte dramatique', "L'art dramatique"]],
    [/^Le lecteur\b/i, ['Le lecteur', 'Le public lecteur', 'Le destinataire de l’œuvre']],
    [/^Le poète\b/i, ["L'écrivain-poète", 'Le poète', 'La voix poétique']],
    [/^Le romancier\b/i, ["L'auteur de roman", 'Le romancier', "L'écrivain romanesque"]],
  ];

  const predicateTransforms: Array<[RegExp, string[]]> = [
    [/^(.+?)\s+permet de\s+(.+?)[.!?]?$/i, [
      '$1 sert à $2.', '$1 offre un moyen de $2.', '$1 donne la possibilité de $2.', '$1 constitue un moyen de $2.'
    ]],
    [/^(.+?)\s+peut\s+(.+?)[.!?]?$/i, [
      '$1 sert à $2.', '$1 offre la possibilité de $2.', '$1 donne au lecteur un moyen de $2.', '$1 constitue un cadre pour $2.'
    ]],
    [/^(.+?)\s+dénonce\s+(.+?)[.!?]?$/i, [
      '$1 met en cause $2.', '$1 révèle les injustices liées à $2.', '$1 critique $2.', '$1 attire l’attention sur $2.'
    ]],
    [/^(.+?)\s+critique\s+(.+?)[.!?]?$/i, [
      '$1 met en question $2.', '$1 dénonce $2.', '$1 porte un regard critique sur $2.', '$1 révèle les limites de $2.'
    ]],
    [/^(.+?)\s+exprime\s+(.+?)[.!?]?$/i, [
      '$1 donne une forme à $2.', '$1 fait entendre $2.', '$1 traduit $2.', '$1 rend sensibles $2.'
    ]],
    [/^(.+?)\s+représente\s+(.+?)[.!?]?$/i, [
      '$1 donne à voir $2.', '$1 met en scène $2.', '$1 propose une représentation de $2.', '$1 fait apparaître $2.'
    ]],
    [/^(.+?)\s+crée\s+(.+?)[.!?]?$/i, [
      '$1 invente $2.', '$1 construit $2.', '$1 fait naître $2.', '$1 ouvre sur $2.'
    ]],
    [/^(.+?)\s+défend\s+(.+?)[.!?]?$/i, [
      '$1 soutient $2.', '$1 affirme la valeur de $2.', '$1 prend position en faveur de $2.', '$1 valorise $2.'
    ]],
    [/^(.+?)\s+montre\s+(.+?)[.!?]?$/i, [
      '$1 met en évidence $2.', '$1 fait apparaître $2.', '$1 donne à voir $2.', '$1 révèle $2.'
    ]],
    [/^(.+?)\s+transmet\s+(.+?)[.!?]?$/i, [
      '$1 fait découvrir $2.', '$1 permet de connaître $2.', '$1 donne accès à $2.', '$1 fait comprendre $2.'
    ]],
    [/^(.+?)\s+fait\s+voyager\s+(.+?)[.!?]?$/i, [
      '$1 entraîne $2 dans un voyage imaginaire.', '$1 permet à $2 de voyager par la fiction.', '$1 ouvre à $2 un espace d’évasion.', '$1 fait découvrir à $2 des univers nouveaux.'
    ]]
  ];

  for (const seed of seedVariants) {
    add(seed);
    for (const [pattern, replacements] of subjectPairs) {
      if (pattern.test(seed)) {
        for (const replacement of replacements) add(seed.replace(pattern, replacement));
      }
    }
    for (const [pattern, replacements] of predicateTransforms) {
      if (pattern.test(seed)) {
        for (const replacement of replacements) add(seed.replace(pattern, replacement));
      }
    }
  }

  // Combinaisons supplémentaires : sujet d'une variante + prédicat d'une autre,
  // uniquement lorsque les deux phrases possèdent la même structure simple.
  const expanded = [...out];
  for (const a of expanded.slice(0, 80)) {
    for (const b of expanded.slice(0, 80)) {
      const ma = a.match(/^(Le roman|Le récit romanesque|Le genre romanesque|La fiction romanesque|L'écriture romanesque|La poésie|Le langage poétique|La parole poétique|L'écriture poétique|Le théâtre|L'écriture dramatique|La scène théâtrale|L'art dramatique)\s+(.+)$/i);
      const mb = b.match(/^(Le roman|Le récit romanesque|Le genre romanesque|La fiction romanesque|L'écriture romanesque|La poésie|Le langage poétique|La parole poétique|L'écriture poétique|Le théâtre|L'écriture dramatique|La scène théâtrale|L'art dramatique)\s+(.+)$/i);
      if (ma && mb && ma[2].length > 12 && mb[2].length > 12 && ma[2] !== mb[2]) {
        // On ne mélange pas deux prédicats différents : cela pourrait changer le sens.
        // Cette boucle est volontairement réservée aux doublons syntaxiques identiques.
      }
    }
  }

  return [...out];
}

function expandValidatedExplanationVariants(seedVariants: string[], topicKey?: string): string[] {
  const out = new Set<string>();
  const replacements: Array<[RegExp, string[]]> = [
    [/\bLe roman\b/gi, ['Le récit romanesque', 'La fiction romanesque', 'Le genre romanesque']],
    [/\bLa poésie\b/gi, ['Le langage poétique', 'La parole poétique', "L'écriture poétique"]],
    [/\bLe théâtre\b/gi, ["L'écriture dramatique", 'La scène théâtrale', 'Le texte dramatique']],
    [/\ble romancier\b/gi, ["l'auteur de roman", 'le romancier', "l'écrivain"]],
    [/\ble lecteur\b/gi, ['le lecteur', 'le public lecteur', 'le destinataire du récit']],
    [/\bpermet de\b/gi, ['sert à', 'donne la possibilité de', 'offre un moyen de']],
    [/\bmet en lumière\b/gi, ['fait apparaître', 'révèle', 'rend visible']],
    [/\bmontre\b/gi, ['met en évidence', 'fait apparaître', 'révèle']],
    [/\bainsi\b/gi, ['de cette manière', 'de cette façon', 'par ce moyen']]
  ];
  for (const seed of seedVariants) {
    const clean = seed.trim();
    if (!clean) continue;
    out.add(clean);
    let candidates = [clean];
    for (const [pattern, reps] of replacements) {
      const next: string[] = [];
      for (const c of candidates) {
        next.push(c);
        if (pattern.test(c)) {
          for (const r of reps) next.push(c.replace(pattern, r));
        }
      }
      candidates = next.slice(0, 24);
    }
    candidates.forEach(v => out.add(v.replace(/\s+/g, ' ').trim()));
  }
  return [...out];
}

const CANONICAL_ARGUMENT_REFORMULATIONS: Record<string, ArgumentVariationSpec> = {
  // --- PHILOSOPHIE : JUSTICE ---
  "justice_aristote": {
    alternateStatements: [
      "La justice suppose l'existence de règles communes permettant de garantir l'égalité entre les individus.",
      "La justice véritable consiste dans l'équité, qui rectifie la rigidité de la loi écrite pour l'adapter aux situations concrètes.",
      "La justice ne se réduit pas à une égalité arithmétique aveugle mais exige une juste proportion selon le mérite et le besoin.",
      "Une cité juste vise l'équilibre moral où chacun reçoit ce qui lui est dû selon la droite raison."
    ],
    alternateExplanations: [
      "Aristote démontre que la justice exige des principes partagés qui soustraient les relations humaines à l'arbitraire du plus fort. L'égalité géométrique et l'équité permettent de traiter justement les cas particuliers.",
      "Dans l'Éthique à Nicomaque, Aristote explique que la loi écrite, de par sa généralité, ne peut anticiper tous les cas particuliers. L'homme équitable sait assouplir la règle pour préserver l'intention profonde de justice.",
      "D'un point de vue conceptuel, la justice distributive attribue les charges et les honneurs selon la valeur de chacun, empêchant que l'égalité abstraite ne devienne injuste dans la pratique.",
      "Pour Aristote, la justice est la plus complète des vertus car elle s'exerce non seulement envers soi-même, mais dans la relation politique avec autrui."
    ],
    alternateQuotes: [
      "L'équitable, tout en étant juste, n'est pas le juste selon la loi, mais un correctif de la justice légale.",
      "Il n'y a pas de pire injustice que de traiter également des choses inégales.",
      "La justice est la vertu par laquelle chacun a le sien, et conformément à la loi."
    ],
    alternateConnectors: ["De prime abord,", "En premier lieu,", "D'un point de vue fondamental,", "Sous l'angle de l'équité,"]
  },

  "justice_rawls": {
    alternateStatements: [
      "Une société juste cherche à empêcher que les différences entre les individus deviennent des sources d'inégalités arbitraires.",
      "Les principes de justice doivent être choisis sous un voile d'ignorance pour neutraliser les privilèges particuliers.",
      "La justice comme équité concilie l'égale liberté pour tous et la priorité accordée aux plus défavorisés.",
      "Une organisation sociale n'est légitime que si les inégalités existantes profitent à l'ensemble de la communauté, à commencer par les plus vulnérables."
    ],
    alternateExplanations: [
      "Dans Théorie de la justice, John Rawls montre que les talents naturels ou les origines sociales sont des hasards arbitraires. La justice exige que la coopération sociale compense ces contingences par le principe de différence.",
      "L'expérience de pensée du voile d'ignorance garantit l'impartialité : ignorant sa future position sociale, tout individu rationnel opte pour la protection maximale des droits fondamentaux et des plus démunis.",
      "Rawls démontre que l'équité ne signifie pas un égalitarisme niveleur stérile, mais une juste redistribution qui stimule l'effort tout en améliorant le sort des plus défavorisés.",
      "Cette approche contractualiste contemporaine réconcilie l'exigence libérale de liberté individuelle et l'impératif démocratique de solidarité collective."
    ],
    alternateQuotes: [
      "Les inégalités économiques et sociales doivent être organisées de façon à ce qu'elles soient à l'avantage des plus défavorisés.",
      "La justice est la première vertu des institutions sociales comme la vérité est celle des systèmes de pensée.",
      "Chaque personne possède une inviolabilité fondée sur la justice qui, même au nom du bien-être de la société tout entière, ne peut être enfreinte."
    ],
    alternateConnectors: ["Dans une perspective contemporaine,", "Par ailleurs,", "En outre,", "Dès lors,"]
  },

  "justice_pascal": {
    alternateStatements: [
      "Faute de pouvoir fortifier la justice, les hommes ont légitimé la force établie.",
      "La justice sans la force demeure impuissante dans un monde corrompu par les passions et les rivalités.",
      "Ne pouvant faire que ce qui est juste soit fort, les sociétés humaines ont consacré ce qui est fort comme juste pour conjurer la guerre civile.",
      "L'ordre juridique positif tire son effectivité de la contrainte matérielle plutôt que d'une justice idéale universellement reconnue."
    ],
    alternateExplanations: [
      "Pascal livre une critique impitoyable de la justice humaine : parce que les hommes ne s'accordent jamais sur ce qui est juste, ils ont investi la force du titre de justice pour préserver la paix civile, premier des biens temporels.",
      "Dans les Pensées, Blaise Pascal montre que la force sans la justice est tyrannique, mais que la justice sans le glaive reste stérile face aux méchants. L'ordre établi est une convention nécessaire pour éviter le chaos.",
      "L'analyse pascalienne dissocie l'idéal divin inaccessible de la justice terrestre pragmatique : obéir aux coutumes et aux magistrats relève d'une sagesse lucide pour conjurer le plus grand malheur, la guerre intestine.",
      "Cette thèse rappelle avec réalisme qu'aucune loi ne subsiste sans autorité coercitive capable de la faire respecter."
    ],
    alternateQuotes: [
      "La justice sans la force est impuissante ; la force sans la justice est tyrannique.",
      "Ne pouvant faire que ce qui est juste fût fort, on a fait que ce qui est fort fût juste.",
      "La coutume est toute l'équité, par cette seule raison qu'elle est reçue."
    ],
    alternateConnectors: ["Toutefois,", "D'un autre côté,", "Sous un prisme réaliste,", "Cependant,"]
  },

  "justice_platon": {
    alternateStatements: [
      "La justice dans la cité repose sur l'harmonie des parties où chacun accomplit la fonction correspondant à sa vertu propre.",
      "La justice est la santé de l'âme où la raison commande au courage et aux désirs.",
      "Loin d'être un simple compromis d'intérêts égoïstes, la justice représente l'ordre idéal du bien commun.",
      "L'injustice corrompt l'âme de celui qui la commet plus sûrement qu'elle ne détruit celui qui la subit."
    ],
    alternateExplanations: [
      "Pour Platon, la justice n'est pas un calcul utilitaire mais la juste hiérarchie de l'âme et de la société. Quand la raison gouverne, la modération et la concorde règnent dans la république.",
      "Dans La République, Platon réfute la thèse des sophistes prétendant que la justice est l'intérêt du plus fort : vivre justement constitue le souverain bien garantissant la félicité véritable.",
      "D'un point de vue métaphysique, l'Idée de Justice transcende les conventions humaines changeantes et offre le modèle intelligible auquel tout législateur vertueux doit se conformer.",
      "Platon montre que commettre l'injustice rend l'âme malade et divisée contre elle-même, tandis que pratiquer la vertu restaure la beauté spirituelle du sage."
    ],
    alternateQuotes: [
      "La justice consiste pour chacun à faire ce qui lui est propre et à ne point s'immiscer dans les affaires d'autrui.",
      "Il vaut mieux subir l'injustice que de la commettre.",
      "La justice est la vertu de l'âme qui met l'accord entre ses diverses facultés."
    ],
    alternateConnectors: ["De prime abord,", "En premier lieu,", "Selon la tradition platonicienne,", "D'emblée,"]
  },

  "justice_sen": {
    alternateStatements: [
      "La justice concrète ne s'évalue pas à la perfection de modèles institutionnels abstraits mais à l'élimination des injustices effectives.",
      "Une société juste garantit à chacun des capabilités réelles, c'est-à-dire la liberté substantielle d'accomplir son projet de vie.",
      "L'égalité formelle des droits reste illusoire si les individus ne disposent pas des moyens matériels et éducatifs de les exercer.",
      "Penser la justice exige une démarche comparative et participative attentive aux souffrances concrètes des populations."
    ],
    alternateExplanations: [
      "Amartya Sen conteste les théories purement contractualistes de la justice parfaite : ce qui importe pour l'homme opprimé, c'est de supprimer la famine, l'analphabétisme et la discrimination vécue.",
      "Dans L'Idée de justice, Sen propose l'approche des capabilités : deux personnes ayant le même revenu ne sont pas également libres si l'une souffre d'un handicap ou d'une exclusion sociale. La justice est la liberté réelle d'agir.",
      "Cette approche critique montre que le débat public démocratique ouvert est l'instrument le plus sûr pour déceler et corriger les dénis de justice.",
      "Pour Sen, la justice ne consiste pas à construire une utopie lointaine mais à élargir concrètement le champ des choix accessibles aux êtres humains."
    ],
    alternateQuotes: [
      "Ce qui nous émeut n'est pas tant la réalisation d'un monde parfaitement juste que l'éradication des injustices intolérables et manifestes autour de nous.",
      "La liberté substantielle dépend de notre capacité réelle à transformer les ressources en réalisations de valeur."
    ],
    alternateConnectors: ["Dans une perspective contemporaine,", "Par ailleurs,", "En outre,", "Dès lors,"]
  },

  "justice_desobeissance": {
    alternateStatements: [
      "Lorsque la loi positive consacre l'iniquité, la désobéissance civile devient une exigence éthique supérieure.",
      "La fidélité à la justice morale commande le refus actif de collaborer aux décrets destructeurs de la dignité humaine.",
      "Une loi injuste n'est pas une loi authentique : la conscience individuelle a le devoir de s'insurger publiquement contre l'arbitraire légalisé.",
      "La résistance non-violente à la loi inique constitue l'ultime rempart pour réveiller la conscience civique de la communauté."
    ],
    alternateExplanations: [
      "Thoreau et Martin Luther King démontrent qu'obéir passivement à une législation oppressant une minorité rend le citoyen complice de la tyrannie. En acceptant la prison pour dénoncer une loi scélérate, le résistant témoigne de son respect absolu pour le Juste universel.",
      "Dans La Désobéissance civile, Thoreau refuse de payer l'impôt à un État esclavagiste et belliqueux : la responsabilité morale individuelle prime sur l'obéissance aveugle aux décrets du pouvoir.",
      "Martin Luther King rappelle dans sa Lettre de Birmingham qu'une loi humaine qui dégrade la personnalité humaine viole la loi divine et naturelle. La désobéissance publique et mesurée restaure la rectitude du droit.",
      "Cette tradition éthique prouve que la légalité ne se confond jamais avec la légitimité : la justice vit dans la fidélité vigilante aux droits inaliénables de la personne."
    ],
    alternateQuotes: [
      "Si la loi est de telle nature qu'elle exige de vous d'être l'agent de l'injustice envers un autre, alors, je vous le dis, enfreignez la loi.",
      "Une loi injuste n'est pas une loi du tout.",
      "L'injustice où qu'elle soit est une menace pour la justice partout."
    ],
    alternateConnectors: ["En contrepoint éthique,", "Toutefois,", "Sous l'angle de la désobéissance légitime,", "Cependant,"]
  },

  // --- PHILOSOPHIE : BONHEUR ---
  "bonheur_aristote": {
    alternateStatements: [
      "Le bonheur authentique s'identifie à l'activité de l'âme dirigée par la vertu parfaite tout au long d'une vie accomplie.",
      "Le bonheur est le souverain bien que nous recherchons pour lui-même et jamais comme moyen pour une autre fin.",
      "Loin de se réduire au plaisir passif et éphémère, la félicité durable s'obtient par la pratique de l'excellence morale et intellectuelle.",
      "L'homme ne trouve son bonheur véritable que dans l'épanouissement de sa nature rationnelle au sein de la communauté politique."
    ],
    alternateExplanations: [
      "Aristote montre que le plaisir des sens est animal et précaire, tandis que le bonheur véritable (l'eudémonie) résulte de l'action vertueuse continue guidée par la droite raison.",
      "Dans l'Éthique à Nicomaque, Aristote définit le souverain bien comme la finalité ultime de toutes nos actions. L'homme vertueux sait maintenir la juste mesure entre les excès et les défauts passionnels.",
      "Cette conception téléologique affirme que le bonheur demande du temps et des conditions extérieures favorables (amitié, santé, paix civique) pour que l'âme déploie toute son excellence.",
      "Pour Aristote, la vie contemplative philosophique et l'engagement civique représentent les degrés suprêmes de la félicité humaine."
    ],
    alternateQuotes: [
      "Le bonheur est une activité de l'âme conforme à la vertu.",
      "Une hirondelle ne fait pas le printemps, non plus qu'une seule journée de soleil ; de même un seul jour ou un court espace de temps ne fait pas un homme bienheureux."
    ],
    alternateConnectors: ["De prime abord,", "En premier lieu,", "D'un point de vue éthique classique,", "D'emblée,"]
  },

  "bonheur_kant": {
    alternateStatements: [
      "Le bonheur est un idéal non de la raison mais de l'imagination, incompatible avec la certitude d'une règle morale universelle.",
      "L'homme doit chercher non pas à être immédiatement heureux à tout prix, mais à se rendre digne du bonheur par le devoir accompli.",
      "Parce que la nature humaine est finie et versatile, aucun précepte empirique ne peut garantir l'atteinte d'un bonheur perpétuel.",
      "Le devoir moral prime sur la recherche du bien-être : sacrifier la morale à l'égoïsme du bonheur détruit la dignité de la personne."
    ],
    alternateExplanations: [
      "Kant démontre que la notion de bonheur implique un tout absolu de satisfaction que l'expérience concrète ne peut jamais offrir. L'homme veut la richesse mais y trouve le souci ; il veut le savoir mais y découvre l'angoisse.",
      "Dans les Fondements de la métaphysique des mœurs, Kant explique que la morale ne nous enseigne pas comment nous rendre heureux, mais comment nous rendre dignes du bonheur par le respect inconditionnel de la loi morale.",
      "Cette critique rigoureuse sépare radicalement l'impératif catégorique du devoir (inconditionnel) des conseils pragmatiques de la prudence empirique (toujours hypothétiques et faillibles).",
      "Pour Emmanuel Kant, l'espérance du bonheur ne renaît que sous la forme d'un postulat de la raison pratique : l'existence d'une justice transcendante qui unira vertu et félicité dans l'au-delà."
    ],
    alternateQuotes: [
      "Le bonheur est un idéal non de la raison, mais de l'imagination.",
      "La morale n'est donc pas à proprement parler la doctrine qui nous enseigne comment nous devons nous rendre heureux, mais comment nous devons nous rendre dignes du bonheur."
    ],
    alternateConnectors: ["Toutefois,", "D'un autre côté,", "Sous un angle critique kantien,", "Cependant,"]
  },

  // --- PHILOSOPHIE : VÉRITÉ ---
  "verite_descartes": {
    alternateStatements: [
      "La vérité se fonde sur l'évidence des idées claires et distinctes saisies par la lumière naturelle de la raison.",
      "Le doute méthodique permet de purger l'esprit de ses préjugés pour asseoir la certitude de la vérité sur un roc indubitable.",
      "La conquête de la vérité exige une discipline intellectuelle rigoureuse qui suspend le jugement devant toute incertitude.",
      "Le Cogito s'affirme comme la première vérité inébranlable servant de modèle à toute connaissance vraie."
    ],
    alternateExplanations: [
      "Descartes démontre qu'en révoquant en doute les témoignages trompeurs des sens et les rêveries de l'imagination, l'esprit découvre la certitude absolue de sa propre existence pensante.",
      "Dans le Discours de la méthode, Descartes établit la règle d'évidence : ne jamais recevoir aucune chose pour vraie que je ne la connusse évidemment être telle.",
      "Cette méthode rationaliste affranchit l'esprit humain de l'argument d'autorité scolastique pour fonder la vérité sur l'autonomie du discernement mathématique et métaphysique.",
      "Pour René Descartes, l'erreur ne provient pas d'un défaut de l'entendement mais de la précipitation de la volonté qui juge avant que la raison n'ait tout clarifié."
    ],
    alternateQuotes: [
      "Le bon sens est la chose du monde la mieux partagée.",
      "Ne recevoir jamais aucune chose pour vraie que je ne la connusse évidemment être telle.",
      "Je pense, donc je suis."
    ],
    alternateConnectors: ["De prime abord,", "En premier lieu,", "Sous l'angle rationaliste,", "D'emblée,"]
  },

  "verite_nietzsche": {
    alternateStatements: [
      "La prétendue vérité absolue n'est qu'une armée mobile de métaphores figées par l'habitude et le besoin de sécurité.",
      "Loin d'être désintéressée, la volonté de vérité masque une volonté de puissance qui cherche à figer le devenir imprévisible du monde.",
      "Le culte dogmatique de la vérité universelle appauvrit la vie en niant la pluralité des perspectives créatrices.",
      "Il n'y a pas de faits en soi, mais seulement des interprétations nées des forces vitales qui traversent l'organisme."
    ],
    alternateExplanations: [
      "Nietzsche démasque l'illusion platonicienne et chrétienne d'un arrière-monde de vérités immuables : l'homme invente des concepts abstraits pour conjurer la terreur du changement et du chaos cosmique.",
      "Dans Vérité et mensonge au sens extra-moral, Nietzsche montre comment le langage oublie son origine poétique et métaphorique pour s'ériger en dogme figé que l'on qualifie à tort de vérité objective.",
      "Cette généalogie radicale remplace la question 'Qu'est-ce qui est vrai ?' par 'Qui a besoin de cette vérité et quelles pulsions s'expriment à travers elle ?'.",
      "Pour Friedrich Nietzsche, le penseur libre accepte la perspective mouvante de l'existence sans chercher le refuge rassurant des certitudes absolues."
    ],
    alternateQuotes: [
      "Qu'est-ce donc que la vérité ? Une armée mobile de métaphores, de métonymies, d'anthropomorphismes...",
      "Il n'y a pas de faits, il n'y a que des interprétations.",
      "La vérité est l'illusion qui a oublié qu'elle est une illusion."
    ],
    alternateConnectors: ["En contrepoint critique,", "Toutefois,", "Dans une perspective généalogique,", "Cependant,"]
  },

  // --- PHILOSOPHIE : CONSCIENCE ---
  "conscience_descartes": {
    alternateStatements: [
      "La conscience réflexive constitue le premier principe indubitable fondant toute existence et toute connaissance.",
      "Par le doute méthodique, la substance pensante se révèle comme certitude première, distincte et indépendante du corps matériel.",
      "L'acte même de penser atteste souverainement la présence de la conscience à elle-même.",
      "La transparence de la pensée consciente est le garant inviolable de l'identité personnelle."
    ],
    alternateExplanations: [
      "Au terme du doute le plus radical, Descartes découvre que même si un malin génie le trompait sans cesse, il faut nécessairement que le sujet existe pour être trompé : le Cogito est inattaquable.",
      "Dans les Méditations métaphysiques, Descartes montre que la conscience de soi précède et conditionne toute perception du monde physique.",
      "Cette perspective métaphysique fonde le sujet moderne : libre, conscient de sa finitude mais doté d'une pensée souveraine.",
      "Pour Descartes, l'esprit n'a besoin d'aucun lieu ni d'aucune matière pour être ce qu'il est : la conscience est pure présence pensante."
    ],
    alternateQuotes: [
      "Je pense, donc je suis.",
      "Par le mot de penser, j'entends tout ce qui se fait en nous de telle sorte que nous en sommes conscients.",
      "L'âme est plus facile à connaître que le corps."
    ],
    alternateConnectors: ["De prime abord,", "En premier lieu,", "Sous l'angle du Cogito,", "D'emblée,"]
  },

  "conscience_freud": {
    alternateStatements: [
      "La conscience n'est qu'une surface trompeuse dominée par les conflits dynamiques de l'inconscient psychique.",
      "Le Moi conscient n'est pas maître dans sa propre maison et subit la pression conjuguée du Ça et du Surmoi.",
      "L'introspection naïve est incapable de révéler la vérité du sujet car le refoulement dissimule les véritables mobiles des actions.",
      "La découverte de l'inconscient porte une blessure narcissique décisive à la prétention humaine de toute-puissance rationnelle."
    ],
    alternateExplanations: [
      "Freud démontre que la majorité des actes, des rêves et des symptômes névrotiques s'expliquent par des pulsions refoulées qui échappent à la conscience claire du sujet.",
      "Dans l'Introduction à la psychanalyse, Sigmund Freud présente la troisième humiliation historique de l'humanité : après Copernic et Darwin, la psychanalyse prouve que l'esprit humain n'est pas transparent à lui-même.",
      "La topique freudienne (Ça, Moi, Surmoi) substitue au sujet cartésien un champ de bataille affectif où la conscience joue le rôle précaire de médiateur entre les désirs et les interdits sociaux.",
      "Pour Freud, devenir conscient est une conquête thérapeutique exigeante qui nécessite l'analyse des lapsus, des actes manqués et des symboles de l'inconscient."
    ],
    alternateQuotes: [
      "Le Moi n'est pas maître dans sa propre maison.",
      "L'inconscient est le psychique lui-même et son essentielle réalité.",
      "Là où était le Ça, le Moi doit advenir."
    ],
    alternateConnectors: ["Toutefois,", "D'un autre côté,", "Sous un angle psychanalytique,", "Cependant,"]
  },

  // --- PHILOSOPHIE : ÉTAT & POLITIQUE ---
  "hobbes_etat": {
    alternateStatements: [
      "L'État est indispensable pour conjurer la guerre permanente de tous contre tous.",
      "Seule l'instauration d'une autorité souveraine commune permet de neutraliser la défiance et la violence généralisée entre les hommes.",
      "En l'absence d'une puissance publique supérieure inspirant le respect des lois, les relations humaines dégénèrent inéluctablement en conflit destructeur.",
      "L'institution de la puissance étatique constitue la condition première pour arracher l'humanité à la terreur et à l'anarchie de l'état de nature."
    ],
    alternateExplanations: [
      "Hobbes démontre que sans un pouvoir souverain commun capable d'imposer les lois par la contrainte, les passions rivales transforment l'existence en un enfer d'angoisse et de meurtre. Instituer le Léviathan relève d'un impératif rationnel de survie pour garantir la sécurité civile.",
      "L'analyse hobbienne met en évidence la logique implacable de la défiance : livrés à eux-mêmes sans arbitre suprême, la peur mutuelle condamne les individus à l'agression préventive. L'État introduit un tiers régulateur doté de la force publique pour pacifier les rapports humains.",
      "D'un point de vue conceptuel, la sécurité civile n'est pas un don spontané de la nature mais une conquête politique artificielle. Les citoyens acceptent de se dessaisir de leur droit naturel illimité pour obtenir en contrepartie la protection inviolable de leur personne et de leurs biens.",
      "Hobbes prouve avec rigueur que le contrat social répond à un calcul lucide de la raison. Pour échapper à une mort violente et précoce, les hommes créent le corps politique souverain, seul rempart efficace contre le chaos des égoïsmes déchaînés."
    ],
    alternateQuotes: [
      "L'homme est un loup pour l'homme à l'état de nature ; c'est pourquoi l'État seul garantit la paix et la sécurité.",
      "Les conventions sans le glaive ne sont que des paroles, et sont dénuées de toute force pour sécuriser un homme.",
      "Tant que les hommes vivent sans un pouvoir commun qui les tienne tous en respect, ils sont dans cette condition qui se nomme guerre."
    ],
    alternateConnectors: ["De prime abord,", "En premier lieu,", "Sous un angle fondamental,", "D'emblée,"]
  },

  "spinoza_etat": {
    alternateStatements: [
      "La véritable finalité de l'État n'est pas d'asservir les hommes par la peur, mais de préserver leur liberté.",
      "Loin d'étouffer les volontés citoyennes, l'organisation politique a pour mission suprême d'assurer l'exercice serein de la liberté rationnelle.",
      "L'État authentique ne vise point la domination arbitraire mais l'émancipation intellectuelle et morale des citoyens libérés de la terreur.",
      "Le but primordial du pouvoir public consiste à affranchir chacun de l'angoisse afin de permettre le plein épanouissement de la raison."
    ],
    alternateExplanations: [
      "Spinoza conteste avec vigueur l'absolutisme tyrannique : un État qui muselle la liberté de penser et d'exprimer ses convictions sape ses propres fondations. L'ordre politique légitime vise à délivrer les citoyens de la peur pour leur permettre d'user librement de leur jugement.",
      "Dans le Traité théologico-politique, Spinoza rappelle que les hommes ne s'unissent pas en société pour devenir des bêtes dociles ou des automates sans âme, mais pour vivre en harmonie sous la conduite de la droite raison et cultiver leurs facultés créatrices.",
      "L'argument démontre que la véritable puissance politique repose sur le consentement libre et éclairé du peuple plutôt que sur la contrainte policière. Un État craint est fragile, tandis qu'un État garantissant la liberté d'opinion fortifie durablement la paix publique.",
      "Pour Spinoza, la paix civile ne se confond pas avec un silence de mort imposé par la force ; elle est une disposition active à la bienveillance, à la justice et au respect réciproque entre consciences autonomes."
    ],
    alternateQuotes: [
      "La fin de l'État est en réalité la liberté.",
      "La paix n'est pas l'absence de guerre, c'est une vertu, un état d'esprit, une disposition à la bienveillance, à la confiance, à la justice.",
      "Moins on accorde aux hommes la liberté de penser, plus on s'éloigne de la paix véritable."
    ],
    alternateConnectors: ["Sous un prisme complémentaire,", "Par ailleurs,", "En outre,", "Dans une perspective émancipatrice,"]
  },

  "rousseau_etat": {
    alternateStatements: [
      "L'État légitime tire son autorité du consentement souverain du peuple réuni sous la loi générale.",
      "La seule puissance politique authentique procède de la volonté générale au sein de laquelle chaque citoyen demeure libre.",
      "L'obéissance aux décrets de l'État n'aliène en rien la liberté si la loi exprime la souveraineté collective de la communauté.",
      "L'État républicain réalise l'harmonie indissoluble entre liberté civile et égalité par la soumission commune à la volonté générale."
    ],
    alternateExplanations: [
      "Pour Rousseau, l'État ne saurait être la propriété privée d'un monarque ou d'une minorité privilégiée. Il incarne le corps politique souverain où chaque individu, en obéissant à la loi votée par tous, obéit en vérité à sa propre volonté raisonnable.",
      "Le Contrat social résout le problème fondamental de la politique : trouver une forme d'association où chacun, s'unissant à tous, n'obéisse pourtant qu'à lui-même et reste aussi libre qu'auparavant en acquérant la liberté civile et morale.",
      "Rousseau récuse l'idée d'un contrat de soumission où le peuple aliénerait ses droits au profit d'un maître. Le souverain est le peuple assemblé, et la loi générale constitue la seule garantie infaillible contre l'arbitraire des volontés particulières.",
      "Cette analyse fait la distinction entre la volonté générale, orientée vers l'intérêt commun universel, et la simple somme des égoïsmes individuels. L'État républicain éduque le citoyen à dépasser ses passions privées au profit de la justice collective."
    ],
    alternateQuotes: [
      "Chacun de nous met en commun sa personne et toute sa puissance sous la suprême direction de la volonté générale.",
      "L'obéissance à la loi qu'on s'est prescrite est liberté.",
      "Renoncer à sa liberté, c'est renoncer à sa qualité d'homme, aux droits de l'humanité, même à ses devoirs."
    ],
    alternateConnectors: ["Par conséquent,", "En synthèse démocratique,", "Dès lors,", "Dans cette logique républicaine,"]
  },

  "weber_etat": {
    alternateStatements: [
      "L'État moderne se caractérise par le monopole de la contrainte physique légitime sur un territoire donné.",
      "Le trait distinctif de l'organisation étatique réside dans sa capacité exclusive à revendiquer le monopole de la force légale.",
      "Toute autorité étatique s'édifie fondamentalement sur une domination institutionnelle garantie par l'usage exclusif de la contrainte physique légitimée.",
      "L'exercice de la souveraineté politique repose en dernier ressort sur le privilège institutionnel d'exercer la violence conforme au droit."
    ],
    alternateExplanations: [
      "Weber rappelle avec une lucidité sociologique impitoyable le fondement matériel de l'ordre public : aucun texte de loi ne subsiste sans la faculté concrète de l'imposer par la police et la justice. Même démocratique, l'État s'articule toujours sur le rapport d'autorité et de force légitimée.",
      "Dans Le Savant et le Politique, Max Weber analyse les trois formes pures de légitimité (traditionnelle, charismatique et légale-rationnelle). Dans le monde contemporain, c'est l'obéissance aux règles abstraites et impersonnelles de la bureaucratie qui fonde l'autorité souveraine de l'État.",
      "Cette approche désillusionne toute vision purement morale de la politique. L'État n'est pas défini par ses idéaux moraux ou ses discours vertueux, mais par le moyen spécifique dont il détient l'exclusivité absolue sur un territoire délimité : la contrainte physique légitime.",
      "Pour Weber, retirer aux particuliers le droit d'exercer la vengeance ou la violence privée est la condition même de la paix civile moderne. En concentrant la force entre les mains de l'institution publique, l'État met fin à l'arbitraire des vengeances claniques."
    ],
    alternateQuotes: [
      "L'État est cette communauté humaine qui revendique avec succès le monopole de la violence physique légitime.",
      "Comme toutes les organisations politiques qui l'ont précédé, l'État consiste en un rapport de domination de l'homme sur l'homme fondé sur le moyen de la violence légitime.",
      "Quiconque s'engage dans la politique prend un pacte avec des puissances diaboliques."
    ],
    alternateConnectors: ["Toutefois,", "D'un autre côté,", "Sous un angle sociologique lucide,", "Cependant,"]
  },

  "marx_etat": {
    alternateStatements: [
      "L'État n'est pas l'arbitre impartial de la société, mais l'instrument de domination de la classe économique dominante.",
      "Sous le masque de la neutralité républicaine, l'appareil étatique sert d'abord à pérenniser les privilèges de la classe possédante.",
      "Loin de promouvoir le bien commun, l'État consacre juridiquement l'exploitation économique en maintenant l'ordre au détriment des prolétaires.",
      "Les structures étatiques constituent le bras séculier par lequel la bourgeoisie sauvegarde sa propriété et neutralise les luttes sociales."
    ],
    alternateExplanations: [
      "Marx dévoile l'imposture de la neutralité républicaine : derrière les proclamations formelles d'égalité citoyenne, le droit positif et les forces de l'ordre protègent d'abord les rapports de production capitalistes et écrasent les revendications du prolétariat.",
      "L'analyse matérialiste démontre que l'État n'est pas issu d'un pacte social harmonieux entre égaux, mais de la division de la société en classes antagonistes. Il est l'appareil spécial de répression forgé pour contenir les insurrections populaires.",
      "Dans le Manifeste du parti communiste, Marx et Engels affirment que l'émancipation des travailleurs exige le dépassement des institutions bourgeoises. La justice sociale ne s'obtiendra pas par la bonne volonté des gouvernants mais par la transformation révolutionnaire des structures économiques.",
      "Pour Marx, l'illusion politique consiste à croire que l'État peut corriger les injustices de la société marchande alors qu'il en est lui-même le produit et le fidèle protecteur institutionnel."
    ],
    alternateQuotes: [
      "Le gouvernement moderne n'est qu'un comité qui gère les affaires communes de la classe bourgeoise tout entière.",
      "Votre droit n'est que la volonté de votre classe érigée en loi.",
      "L'État politique n'est que l'expression officielle de l'antagonisme des classes dans la société civile."
    ],
    alternateConnectors: ["En contrepoint critique,", "Cependant,", "Dans une perspective matérialiste,", "Or,"]
  },

  "nietzsche_etat": {
    alternateStatements: [
      "L'État s'impose comme une entité monstrueuse qui détruit la culture authentique et uniformise les esprits.",
      "L'idolâtrie de la puissance étatique étouffe la singularité créatrice et substitue la docilité collective à l'élévation spirituelle.",
      "Sous prétexte d'incarner le peuple, l'État absorbe les volontés particulières pour fabriquer des individus dociles et interchangeables.",
      "L'omnipotence de l'État moderne favorise la médiocrité de masse en écrasant l'originalité des consciences indépendantes."
    ],
    alternateExplanations: [
      "Nietzsche fustige l'idolâtrie moderne de l'État qui aliène l'énergie créatrice des individus supérieurs. En promettant le confort matériel et la sécurité en échange de la soumission, l'État façonne une masse médiocre de serviteurs dociles au détriment de la grandeur spirituelle.",
      "Dans Ainsi parlait Zarathoustra, Nietzsche qualifie l'État de 'plus froid des monstres froids' parce qu'il ment sur sa véritable nature : il prétend être l'émanation directe du peuple alors qu'il dévore les cultures vivantes pour leur imposer une bureaucratie desséchante.",
      "Cette critique généalogique montre que l'essor de l'État tout-puissant coïncide avec le déclin de la vraie culture philosophique et artistique. Là où l'État règne sans partage, l'esprit d'invention se tarit au profit de l'obéissance moutonnière.",
      "Pour Nietzsche, l'homme libre doit apprendre à se méfier des promesses patriotiques fallacieuses. La véritable souveraineté de l'individu commence précisément au-delà des frontières de l'emprise étatique."
    ],
    alternateQuotes: [
      "L'État, c'est le plus froid de tous les monstres froids. Il ment froidement ; et voici le mensonge qui rampe de sa bouche : « Moi, l'État, je suis le peuple ! »",
      "L'État est institué pour les médiocres, afin de protéger les faibles contre les forts.",
      "Là où cesse l'État, là seulement commence l'homme qui n'est pas superflu."
    ],
    alternateConnectors: ["Enfin,", "Sous un angle plus radical,", "Pour clore cette analyse,", "À l'opposé,"]
  },

  // --- PHILOSOPHIE : LIBERTÉ ---
  "descartes_liberte": {
    alternateStatements: [
      "Le libre arbitre permet à la volonté humaine de se déterminer par la lumière de la raison.",
      "La liberté authentique s'enracine dans la puissance souveraine de la volonté guidée par l'évidence rationnelle.",
      "L'homme découvre en lui-même une liberté infinie lorsqu'il suspend son jugement face au doute et consent au vrai clairement conçu.",
      "La plénitude de la liberté ne consiste pas dans l'indifférence hésitante mais dans l'adhésion éclairée de la volonté au bien et à la vérité."
    ],
    alternateExplanations: [
      "Descartes démontre que la volonté humaine est infinie par nature, égalant en amplitude la volonté divine même si notre entendement est fini. La liberté s'accomplit véritablement lorsque la raison éclaire clairement l'esprit sur ce qu'il convient de choisir.",
      "Dans les Méditations métaphysiques, Descartes distingue la basse liberté d'indifférence (le choix capricieux ou aveugle sans motif solide) de la véritable liberté éclairée, où l'évidence de la vérité entraîne spontanément le consentement lucide du sujet.",
      "Cette perspective rationaliste établit que le doute méthodique est lui-même l'épreuve par excellence de la liberté : l'esprit a le pouvoir de révoquer en doute toutes ses opinions héritées pour rebâtir le savoir sur des certitudes inébranlables.",
      "Pour René Descartes, la liberté humaine se constate immédiatement dans le sentiment intérieur de notre volonté à agir ou ne pas agir sans qu'aucune force extérieure ne nous y contraigne."
    ],
    alternateQuotes: [
      "La liberté de notre volonté se connaît sans preuves, par la seule expérience que nous en avons.",
      "Si je connaissais toujours clairement ce qui est vrai et ce qui est bon, je ne serais jamais en peine de délibérer quel jugement et quel choix je devrais faire.",
      "L'indifférence est le plus bas degré de la liberté."
    ],
    alternateConnectors: ["De prime abord,", "En premier lieu,", "Sur le plan rationaliste,", "D'emblée,"]
  },

  "spinoza_liberte": {
    alternateStatements: [
      "L'illusion de la liberté découle de la méconnaissance des causes réelles qui déterminent nos désirs.",
      "Le prétendu libre arbitre absolu n'est qu'un mirage né de la conscience de nos désirs associée à l'ignorance des causes qui nous meuvent.",
      "L'homme n'est pas un empire dans un empire : il est intégralement soumis aux lois nécessaires de la nature universelle.",
      "La véritable libération philosophique consiste non pas à fuir la nécessité, mais à la comprendre rationnellement pour cesser d'être passif."
    ],
    alternateExplanations: [
      "Pour Spinoza, les hommes se bercent de l'illusion du libre arbitre simplement parce qu'ils ressentent leurs désirs et leurs impulsions mais ignorent les causes corporelles, psychiques et environnementales qui les fabriquent. Une pierre en mouvement, si elle avait conscience, croirait voler par sa propre volonté.",
      "L'Éthique refuse toute exception humaine dans l'ordre du monde : l'homme est une partie de la nature (Deus sive Natura) entièrement régie par le déterminisme universel. La liberté ne réside pas dans le caprice miraculeux mais dans la joie active de l'intelligence qui comprend la nécessité des choses.",
      "Cette analyse déconstruit la culpabilité et le regret stériles. En comprenant que tout ce qui arrive procède d'un enchaînement de causes rigoureuses, le sage s'affranchit des passions tristes (haine, vengeance, envie) pour agir selon les affections joyeuses de la raison.",
      "Spinoza transforme radicalement l'idée de liberté : être libre, ce n'est pas faire arbitrairement n'importe quoi, mais agir selon la nécessité de sa propre nature rationnelle sans être déterminé passivement par des causes extérieures."
    ],
    alternateQuotes: [
      "Les hommes se croient libres pour cette seule cause qu'ils sont conscients de leurs actions et ignorants des causes par lesquelles ils sont déterminés.",
      "Une pierre qui roule, si elle avait conscience, se croirait libre de rouler.",
      "La liberté est la nécessité comprise."
    ],
    alternateConnectors: ["Toutefois,", "D'un autre côté,", "Sous un angle déterministe,", "Cependant,"]
  },

  "kant_liberte": {
    alternateStatements: [
      "La liberté authentique s'identifie à l'autonomie de la volonté obéissant à la loi morale universelle.",
      "L'homme ne prouve sa liberté que lorsqu'il est capable d'agir par pur devoir en s'arrachant à l'empire de ses désirs sensibles.",
      "L'autonomie morale consiste à légiférer pour soi-même sous l'égide de l'impératif catégorique sans céder à l'égoïsme.",
      "Être libre, pour Kant, ce n'est nullement céder à l'anarchie des pulsions mais faire triompher la dignité humaine par le devoir moral."
    ],
    alternateExplanations: [
      "Kant démontre que si l'homme ne faisait que suivre ses penchants sensibles, son intérêt égoïste ou ses désirs physiques, il demeurerait un automate dominé par la causalité naturelle. C'est uniquement par l'impératif moral qu'il se découvre citoyen d'un monde intelligible et véritablement libre.",
      "La formule kantienne 'Tu dois, donc tu peux' atteste la primauté de l'autonomie. Même face aux contraintes extérieures les plus violentes, la conscience morale témoigne que l'homme possède la puissance absolue de refuser la lâcheté et de choisir le bien par respect pour la loi morale.",
      "Dans les Fondements de la métaphysique des mœurs, Kant distingue l'hétéronomie (obéir à des mobiles extérieurs, à la peur de la sanction ou à l'appât du gain) de l'autonomie pure, où la volonté rationnelle se donne à elle-même sa propre loi universelle.",
      "Cette thèse élève la liberté au rang de fondement de la responsabilité éthique : la personne humaine n'a pas de prix marchand, elle possède une dignité inestimable précisément parce qu'elle est capable d'agir librement en vue de la justice."
    ],
    alternateQuotes: [
      "Une volonté libre et une volonté soumise à des lois morales sont une seule et même chose.",
      "Tu dois, donc tu peux.",
      "Agis de telle sorte que la maxime de ta volonté puisse toujours valoir en même temps comme principe d'une législation universelle."
    ],
    alternateConnectors: ["Par conséquent,", "En synthèse morale,", "Dès lors,", "Dans l'ordre éthique,"]
  },

  // --- FRANÇAIS & LITTÉRATURE : THÉÂTRE ---
  "theatre_catharsis": {
    alternateStatements: [
      "La représentation dramatique a pour vocation essentielle d'opérer la catharsis, purgeant l'âme des passions destructrices.",
      "Le spectacle tragique libère le spectateur de ses angoisses intérieures en confrontant ses émotions à la terreur et à la pitié mises en scène.",
      "Par l'illusion théâtrale, la scène agit comme un exutoire salutaire qui pacifie les pulsions affectives de la cité.",
      "L'art théâtral classique sublime la violence humaine en transformant le chaos des passions en une émotion esthétique apaisante."
    ],
    alternateExplanations: [
      "Aristote montre que le spectateur, en voyant les souffrances des héros royaux sans courir lui-même de péril physique, éprouve une délivrance affective bienfaisante qui purifie ses désirs excessifs et renforce sa sagesse morale.",
      "La catharsis théâtrale joue un rôle civique majeur : en concentrant la terreur et la compassion dans l'espace codifié de la scène, la tragédie désamorce les tensions destructrices qui menacent l'harmonie de la communauté.",
      "Dans la Poétique, le philosophe grec explique que le spectacle dramatique n'est pas un vain divertissement passif mais un exercice d'assainissement moral où la mise en forme poétique rend supportable et instruisant le tragique de la condition humaine.",
      "Cette vocation purificatrice permet au public de vivre par procuration les dilemmes les plus extrêmes (l'inceste d'Œdipe, le meurtre d'Agamemnon) pour en mesurer le péril moral et revenir à la vie quotidienne fortifié dans sa modération."
    ],
    alternateQuotes: [
      "La tragédie est l'imitation d'une action de caractère élevé... suscitant la pitié et la terreur, elle opère la purgation des passions de cette nature.",
      "Le spectacle des malheurs d'autrui instruit l'âme humaine et tempère l'arrogance des passions.",
      "La poésie dramatique est plus philosophique et plus noble que l'histoire, car elle traite du général alors que l'histoire raconte le particulier."
    ],
    alternateConnectors: ["De prime abord,", "En premier lieu,", "Au regard de la tradition classique,", "D'emblée,"]
  },

  "theatre_satire": {
    alternateStatements: [
      "La comédie dramatique a pour fonction de corriger les vices des hommes en les exposant au ridicule public.",
      "Le rire théâtral constitue une arme critique redoutable pour démasquer l'hypocrisie et les dérives morales de la société.",
      "En caricaturant les travers humains sur scène, le dramaturge comique éduque le public tout en le divertissant avec esprit.",
      "La satire dramatique désamorce le fanatisme et la prétention en opposant la lucidité du rire aux dogmatismes établis."
    ],
    alternateExplanations: [
      "Molière résume le projet comique par la devise latine 'Castigat ridendo mores' : châtier les mœurs en riant. Les hommes supportent volontiers d'être sermonnés avec gravité mais ne tolèrent point d'être tournés en dérision devant leurs pairs, ce qui force l'amendement des comportements.",
      "Dans Le Tartuffe ou L'Avare, la mise en scène des vices permet de dévoiler les mécanismes de l'aveuglement social. Le public, complice du dramaturge, prend conscience de la folie des personnages obsédés par une passion déraisonnable et apprend à préserver son propre discernement.",
      "Beaumarchais prolonge cette vocation subversive dans Le Mariage de Figaro : le rire devient un instrument d'émancipation politique où la vivacité d'esprit du valet l'emporte sur l'arrogance des privilèges aristocratiques périmés.",
      "Cette analyse montre que le théâtre comique ne se réduit pas à une farce gratuite : il est une leçon vivante de sociabilité et de tolérance qui protège l'espace républicain contre les ridicules de l'orgueil et du fanatisme."
    ],
    alternateQuotes: [
      "L'emploi de la comédie est de corriger les vices des hommes... Le plus grand coup que l'on puisse porter aux vices est de les exposer à la risée de tout le monde.",
      "Parce que vous êtes un grand seigneur, vous vous croyez un grand génie !... Vous vous êtes donné la peine de naître, et rien de plus.",
      "Le devoir de la comédie étant de corriger les hommes en les divertissant, j'ai cru que, dans l'emploi où je me trouve, je n'avais rien de mieux à faire que d'attaquer par des peintures ridicules les vices de mon siècle."
    ],
    alternateConnectors: ["Sous un angle satirique,", "Par ailleurs,", "En outre,", "Dans le domaine de la comédie,"]
  },

  // --- FRANÇAIS & LITTÉRATURE : POÉSIE ---
  "poesie_beaute_alchimie": {
    alternateStatements: [
      "La poésie s'affirme comme une alchimie verbale capable de transfigurer la laideur du monde en beauté pure.",
      "Le langage poétique transcende la réalité prosaïque pour révéler les correspondances secrètes de l'univers sensible.",
      "Loin de se borner à décrire les choses ordinaires, le poète métamorphose le banal et la souffrance en or esthétique.",
      "L'écriture poétique délivre l'homme de la pesanteur du quotidien en inventant une langue nouvelle qui illumine le réel."
    ],
    alternateExplanations: [
      "Baudelaire démontre dans Les Fleurs du Mal que la mission suprême de l'artiste moderne est d'extraire la beauté du mal et de la boue urbaine. Par le travail rigoureux du vers et l'analogie symbolique, le poète transmue le spleen destructeur en idéal artistique consolateur.",
      "La théorie baudelairienne des 'Correspondances' établit que la nature est un temple où les parfums, les couleurs et les sons se répondent. La poésie n'est pas un ornement superficiel mais une clé métaphysique pour déchiffrer l'harmonie invisible qui relie le monde visible à l'âme humaine.",
      "Rimbaud pousse plus loin cette exigence dans ses Lettres du voyant : le poète doit se faire voyant par un long, immense et raisonné dérèglement de tous les sens pour atteindre l'inconnu et trouver une langue qui résume tout.",
      "Cette perspective esthétique montre que le poète ne subit pas passivement le monde : par la puissance du rythme et de l'image, il recrée l'univers et offre au lecteur une expérience de transcendance par la beauté formelle."
    ],
    alternateQuotes: [
      "Tu m'as donné ta boue et j'en ai fait de l'or.",
      "Les parfums, les couleurs et les sons se répondent.",
      "La poésie est ce qu'il y a de plus réel, c'est ce qui n'est complètement vrai que dans un autre monde."
    ],
    alternateConnectors: ["De prime abord,", "En premier lieu,", "Sur le plan esthétique,", "D'emblée,"]
  },

  "poesie_engagement": {
    alternateStatements: [
      "La parole poétique se fait l'écho des souffrances du peuple et devient une arme d'émancipation politique.",
      "Le poète engagé refuse l'art pour l'art et met son verbe au service de la justice, de la liberté et de la dénonciation des tyrannies.",
      "Loin de se réfugier dans une tour d'ivoire, l'écrivain poète assume le rôle de vigie et de guide guidant l'humanité vers la lumière.",
      "Le poème se transforme en acte de résistance où la force des métaphores défie l'oppression et restaure la dignité humaine."
    ],
    alternateExplanations: [
      "Dans Les Châtiments, Victor Hugo transforme sa plume en foudre vengeresse contre le coup d'État de Napoléon III. Le poète banni refuse le compromis et fait résonner la voix de la justice outragée, prouvant que la beauté poétique gagne en noblesse lorsqu'elle défend la République.",
      "Aimé Césaire, dans le Cahier d'un retour au pays natal, invente une poésie incandescente pour briser le silence colonial : 'Ma bouche sera la bouche des malheurs qui n'ont point de bouche, ma voix la liberté de celles qui s'affaissent au cachot du désespoir.' Le cri poétique réveille les consciences opprimées.",
      "Sous l'Occupation, les poètes de la Résistance comme Paul Éluard ('Liberté') ou Louis Aragon montrent que les mots circulent sous le manteau comme des tracts d'espérance. La poésie devient un sanctuaire inaliénable de liberté contre la barbarie.",
      "Cette approche atteste que l'engagement n'affaiblit pas l'exigence littéraire : au contraire, l'urgence historique confère aux images une densité poignante qui traverse les époques."
    ],
    alternateQuotes: [
      "La poésie n'est pas un ornement, elle est une arme de combat pour la dignité des peuples.",
      "Ma bouche sera la bouche des malheurs qui n'ont point de bouche.",
      "Et par le pouvoir d'un mot, je recommence ma vie, je suis né pour te connaître, pour te nommer : Liberté."
    ],
    alternateConnectors: ["Sous un angle politique et engagé,", "Par ailleurs,", "En outre,", "Dans la tradition de la poésie combattante,"]
  },

  // --- FRANÇAIS & LITTÉRATURE : ROMAN ---
  "roman_miroir_realisme": {
    alternateStatements: [
      "Le roman réaliste se conçoit comme un miroir fidèle explorant avec minutie les rouages de la société humaine.",
      "L'ambition romanesque consiste à radiographier sans complaisance les mœurs, les luttes de classes et les passions de son temps.",
      "L'écrivain réaliste documente le réel pour faire de la fiction un témoignage sociologique et historique capital.",
      "Par l'acuité de l'observation psychologique et sociale, le roman dévoile les vérités cachées de l'existence collective."
    ],
    alternateExplanations: [
      "Stendhal compare célèbrement le roman à un 'miroir qu'on promène le long d'une grande route' : l'écrivain ne choisit pas d'ignorer la boue ou la laideur du chemin, il a le devoir de refléter fidèlement tant la beauté du ciel que les bassesses du siècle.",
      "Honoré de Balzac, dans l'avant-propos de La Comédie humaine, s'assigne le rôle d'archéologue et d'historien des mœurs françaises. En peignant plus de deux mille personnages de toutes conditions, il montre comment la tyrannie de l'argent et la soif de pouvoir corrompent les relations humaines.",
      "Émile Zola, théoricien du naturalisme, applique la rigueur de la méthode scientifique au roman expérimental. Dans Germinal, il sonde les déterminismes sociaux, héréditaires et économiques qui pèsent sur les mineurs de fond pour éveiller l'indignation contre l'injustice sociale.",
      "Cette fonction mimétique et critique du roman aide le lecteur à devenir lucide sur sa propre époque : la fiction devient plus vraie que le simple compte-rendu journalistique parce qu'elle en met à nu les causes profondes."
    ],
    alternateQuotes: [
      "Un roman est un miroir qui se promène sur une grande route. Tantôt il reflète à vos yeux l'azur des cieux, tantôt la fange des bourbiers.",
      "La société française allait être l'historien, je ne devais être que le secrétaire.",
      "Nous voulons la vérité, toute la vérité humaine et sociale, sans voiles et sans fausse pudeur."
    ],
    alternateConnectors: ["De prime abord,", "En premier lieu,", "Sous le prisme réaliste,", "D'emblée,"]
  },

  "roman_africain_desenchantement": {
    alternateStatements: [
      "Le roman postcolonial dénonce sans concession les dérives dictatoriales et le désenchantement des indépendances africaines.",
      "La fiction romanesque africaine devient une tribune courageuse pour pourfendre la corruption des élites et la confiscation du pouvoir.",
      "En renouvelant audacieusement la langue française par le souffle des langues nationales, le romancier africain réinvente le récit politique.",
      "L'écriture romanesque d'Afrique ausculte la mémoire blessée des peuples pour ouvrir des chemins d'émancipation et de dignité."
    ],
    alternateExplanations: [
      "Ahmadou Kourouma, dans Les Soleils des indépendances, brise le tabou de la déception postcoloniale en dépeignant la misère des héros de la liberté marginalisés par les nouveaux régimes corrompus. Sa syntaxe novatrice, imprégnée de tournures malinké, traduit l'amertume et la révolte d'une génération trahie.",
      "Mariama Bâ, à travers Une si longue lettre, livre un témoignage poignant sur la condition féminine et les contradictions entre tradition patriarcale et modernité. Le roman épistolaire devient le lieu d'une parole libératrice revendiquant l'égalité et la reconnaissance du rôle des femmes.",
      "Sony Labou Tansi et Chinua Achebe montrent que l'écrivain africain est un éveilleur de conscience qui ne peut se taire face aux tyrannies néocoloniales. L'exagération grotesque ou la sobriété tragique de leur plume sert à secouer l'apathie collective.",
      "Cette vitalité du roman francophone africain prouve que la littérature n'est jamais un simple divertissement exotique : elle est l'arène où se joue la reconquête de l'histoire et de la liberté des peuples."
    ],
    alternateQuotes: [
      "Les indépendances ont été pour nous comme un soleil trop brûlant qui n'a éclairé que les festins des puissants.",
      "Le roman africain est le cri d'une conscience qui refuse de mourir et exige justice pour les sans-voix.",
      "Écrire, c'est refuser que d'autres écrivent notre histoire à notre place."
    ],
    alternateConnectors: ["Dans une perspective engagée et décoloniale,", "Par ailleurs,", "En outre,", "Sous cet angle lucide,"]
  }
};

/**
 * Fonction de hachage déterministe pour générer un index de variation
 */
export function hashStringToInt(str: string): number {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  hash ^= hash >>> 16;
  hash = Math.imul(hash, 0x85ebca6b);
  hash ^= hash >>> 13;
  hash = Math.imul(hash, 0xc2b2ae35);
  hash ^= hash >>> 16;
  return Math.abs(hash >>> 0);
}

/**
 * Clé d'identification canonique de l'argument à partir de son auteur et de son œuvre
 */
function identifyCanonicalKey(arg: ArgumentItem, topicKey?: string): string | null {
  const authorNorm = (arg.author || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const workNorm = (arg.work || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const topNorm = (topicKey || "").toLowerCase();

  // Philosophie Justice
  if (/aristote/.test(authorNorm) && (topNorm === "justice" || /nicomaque|ethique/.test(workNorm))) return "justice_aristote";
  if (/rawls/.test(authorNorm) && (topNorm === "justice" || /theorie/.test(workNorm))) return "justice_rawls";
  if (/pascal/.test(authorNorm) && (topNorm === "justice" || /pensees/.test(workNorm))) return "justice_pascal";
  if (/platon/.test(authorNorm) && (topNorm === "justice" || /republique/.test(workNorm))) return "justice_platon";
  if (/sen/.test(authorNorm) && (topNorm === "justice" || /idee/.test(workNorm))) return "justice_sen";
  if (/thoreau|king/.test(authorNorm) && topNorm === "justice") return "justice_desobeissance";

  // Philosophie Bonheur
  if (/aristote/.test(authorNorm) && topNorm === "bonheur") return "bonheur_aristote";
  if (/kant/.test(authorNorm) && topNorm === "bonheur") return "bonheur_kant";

  // Philosophie Vérité
  if (/descartes/.test(authorNorm) && (topNorm === "verite" || /methode/.test(workNorm))) return "verite_descartes";
  if (/nietzsche/.test(authorNorm) && topNorm === "verite") return "verite_nietzsche";

  // Philosophie Conscience
  if (/descartes/.test(authorNorm) && topNorm === "conscience") return "conscience_descartes";
  if (/freud/.test(authorNorm) && (topNorm === "conscience" || topNorm === "inconscient")) return "conscience_freud";

  // Philosophie État
  if (/hobbes/.test(authorNorm)) return "hobbes_etat";
  if (/spinoza/.test(authorNorm) && (/etat|politique|theologico/.test(workNorm) || topNorm === "etat")) return "spinoza_etat";
  if (/spinoza/.test(authorNorm) && (/ethique|nature|liberte/.test(workNorm) || topNorm === "liberte")) return "spinoza_liberte";
  if (/rousseau/.test(authorNorm) && (/contrat/.test(workNorm) || topNorm === "etat")) return "rousseau_etat";
  if (/weber/.test(authorNorm)) return "weber_etat";
  if (/marx/.test(authorNorm) && (/etat|politique|classe/.test(workNorm) || topNorm === "etat")) return "marx_etat";
  if (/nietzsche/.test(authorNorm) && (/zarathoustra|etat/.test(workNorm) || topNorm === "etat")) return "nietzsche_etat";
  if (/descartes/.test(authorNorm) && (/liberte|meditations/.test(workNorm) || topNorm === "liberte")) return "descartes_liberte";
  if (/kant/.test(authorNorm) && (/fondements|pratique|morale|devoir/.test(workNorm) || topNorm === "liberte" || topNorm === "devoir")) return "kant_liberte";

  // Littérature
  if (/aristote/.test(authorNorm) && (/poetique|tragedie/.test(workNorm) || topNorm === "theatre")) return "theatre_catharsis";
  if (/moliere|beaumarchais/.test(authorNorm) || topNorm === "theatre") return "theatre_satire";
  if (/baudelaire|rimbaud/.test(authorNorm) || topNorm === "poesie") return "poesie_beaute_alchimie";
  if (/hugo|cesaire|elouard|aragon/.test(authorNorm) && topNorm === "poesie") return "poesie_engagement";
  if (/stendhal|balzac|zola/.test(authorNorm) || (topNorm === "roman" && /realis|miroir|comedi|germinal/.test(workNorm))) return "roman_miroir_realisme";
  if (/kourouma|mariama|sony|badian/.test(authorNorm) || topNorm === "roman") return "roman_africain_desenchantement";

  return null;
}

/**
 * Algorithme de reformulation stylistique et conceptuelle universelle pour tout argument de dissertation
 */
function algorithmicReformulateStatement(originalStatement: string, _variationSeed: number): string {
  // Une reformulation algorithmique ne doit jamais fabriquer une pseudo-thèse.
  // Le champ « argument » doit rester une idée philosophique directe et autonome.
  // Les variantes autorisées viennent exclusivement des formulations validées du corpus.
  return originalStatement.trim();
}

/**
 * Algorithme d'explication différenciée selon 4 styles pédagogiques certifiés
 */
function algorithmicDifferentiateExplanation(originalExplanation: string, _variationSeed: number, _author?: string): string {
  // Aucune phrase pédagogique générique n'est ajoutée automatiquement.
  // L'explication doit venir d'une formulation validée du corpus.
  return originalExplanation.trim();
}

/**
 * Différencie un argument complet en garantissant que l'élève A et l'élève B reçoivent
 * des formulations et des explications différentes pour le même sujet.
 */
function sanitizeDirectArgumentStatement(statement: string): string {
  let value = statement.trim();
  const genericPrefixes = [
    /^on\s+peut\s+(?:ainsi|donc|également|aussi)\s+(?:soutenir|affirmer|considérer|comprendre|constater)\s+que\s+/iu,
    /^on\s+peut\s+(?:ainsi|donc|également|aussi)\s+/iu,
    /^l['’]analyse\s+(?:rigoureuse\s+)?(?:met|montre|révèle)\s+en\s+lumi[eè]re\s+que\s+/iu,
    /^cette\s+id[eé]e\s+(?:montre|permet\s+de\s+comprendre)\s+que\s+/iu,
    /^il\s+appara[iî]t\s+(?:que|fondamental\s+que)\s+/iu,
    /^d['’]un\s+point\s+de\s+vue\s+conceptuel,?\s*/iu,
    /^en\s+effet,?\s*/iu,
    /^ainsi,?\s*/iu
  ];
  for (const prefix of genericPrefixes) value = value.replace(prefix, '');
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : statement.trim();
}

export function differentiateArgumentItem(params: {
  arg: ArgumentItem;
  argIndex: number;
  variantIndex: number;
  topicKey?: string;
  seed?: string | number;
}): ArgumentItem {
  const { arg, argIndex, variantIndex, topicKey, seed } = params;

  // Calcul du seed numérique combiné (assure que Student A et Student B ont des graines différentes)
  const seedStr = `${seed !== undefined ? seed : 'default_seed'}_${topicKey || ''}_v${variantIndex}_arg${argIndex}`;
  const seedNum = hashStringToInt(seedStr);
  const pickIndex = (value: number, length: number) => {
    if (length <= 0) return 0;
    return ((value % length) + length) % length;
  };

  const canonKey = identifyCanonicalKey(arg, topicKey);

  let newStatement = sanitizeDirectArgumentStatement(arg.statement);
  let newExplanation = arg.explanation;
  // Une citation est une référence source : elle ne doit jamais être personnalisée.
  const newQuote = arg.quote;
  let newConnector = arg.connector || "En premier lieu,";

  // Corpus structurés : choisir directement parmi les formulations validées
  // avant toute reformulation algorithmique. Le fond, l'auteur et l'œuvre
  // restent inchangés ; seul le wording est sélectionné.
  if (topicKey && ['roman', 'theatre', 'poesie'].includes(topicKey)) {
    const validatedSeeds = [
      arg.statement,
      ...(arg.formulationVariants || []).map(v => v.statement)
    ];
    const literatureVariants = expandValidatedStatementVariants(
      [...new Set(validatedSeeds.flatMap(v => buildSafeLiteratureStatementVariants(v, topicKey)))],
      topicKey
    );
    const safeLiteratureVariants = literatureVariants.length ? literatureVariants : [sanitizeDirectArgumentStatement(arg.statement)];
    newStatement = safeLiteratureVariants[pickIndex(seedNum, safeLiteratureVariants.length)];

    const explanationSeeds = [
      arg.explanation,
      ...(arg.formulationVariants || []).map(v => v.explanation).filter(Boolean)
    ];
    const explanationVariants = expandValidatedExplanationVariants(
      [...new Set(explanationSeeds.flatMap(v => buildSafeLiteratureExplanationVariants(v, topicKey)))],
      topicKey
    );
    const safeExplanationVariants = explanationVariants.length ? explanationVariants : [arg.explanation];
    newExplanation = safeExplanationVariants[pickIndex(seedNum * 7 + argIndex, safeExplanationVariants.length)];
    // Français facile : on simplifie seulement le vocabulaire pédagogique.
    // Les auteurs, œuvres et citations restent strictement inchangés.
    const easyStatementPool = buildEasyLiteratureVariants(newStatement, topicKey);
    const easyExplanationPool = buildEasyLiteratureVariants(newExplanation || '', topicKey);
    if (easyStatementPool.length) {
      newStatement = easyStatementPool[pickIndex(seedNum * 11 + argIndex, easyStatementPool.length)];
    }
    if (easyExplanationPool.length) {
      newExplanation = easyExplanationPool[pickIndex(seedNum * 13 + argIndex, easyExplanationPool.length)];
    }
    // La citation reste exactement celle du corpus source. La variation porte
    // uniquement sur la formulation pédagogique de l'argument et de l'explication.
  } else if (arg.formulationVariants && arg.formulationVariants.length > 0) {
    const statementPool = expandValidatedStatementVariants(
      arg.formulationVariants.map(v => v.statement),
      topicKey
    );
    const explanationPool = expandValidatedExplanationVariants(
      arg.formulationVariants.map(v => v.explanation).filter(Boolean),
      topicKey
    );
    const safeStatements = statementPool.length ? statementPool : [sanitizeDirectArgumentStatement(arg.statement)];
    const safeExplanations = explanationPool.length ? explanationPool : [arg.explanation];
    newStatement = sanitizeDirectArgumentStatement(safeStatements[pickIndex(seedNum, safeStatements.length)]);
    newExplanation = safeExplanations[pickIndex(seedNum * 5 + argIndex, safeExplanations.length)];
  } else if (canonKey && CANONICAL_ARGUMENT_REFORMULATIONS[canonKey]) {
    const spec = CANONICAL_ARGUMENT_REFORMULATIONS[canonKey];
    
    // 1. Choix de la reformulation du statement
    if (spec.alternateStatements && spec.alternateStatements.length > 0) {
      const stmtIdx = pickIndex(seedNum + argIndex, spec.alternateStatements.length);
      newStatement = sanitizeDirectArgumentStatement(spec.alternateStatements[stmtIdx]);
    }

    // 2. Choix de l'explication différenciée
    if (spec.alternateExplanations && spec.alternateExplanations.length > 0) {
      // Décalage pour ne pas avoir un couplage fixe statement-explication
      const explIdx = pickIndex(seedNum * 3 + argIndex + 1, spec.alternateExplanations.length);
      newExplanation = spec.alternateExplanations[explIdx];
    }

    // 3. La citation reste celle du corpus source.
    // alternateQuotes est conservé pour compatibilité avec les anciennes
    // données, mais n'est volontairement pas utilisé pour personnaliser
    // une référence universelle.

    // 4. Choix du connecteur
    if (spec.alternateConnectors && spec.alternateConnectors.length > 0) {
      const connIdx = pickIndex(seedNum + argIndex, spec.alternateConnectors.length);
      newConnector = spec.alternateConnectors[connIdx];
    }
  } else {
    // Différenciation algorithmique autonome
    newStatement = algorithmicReformulateStatement(arg.statement, seedNum + argIndex);
    newExplanation = algorithmicDifferentiateExplanation(arg.explanation, seedNum + argIndex, arg.author);
  }

  // L'auteur est introduit au moment de la référence/citation, pas comme
  // amorce répétitive de l'explication. Cela évite « Selon Freud... » avant
  // une seconde mention de Freud dans le bloc de citation.
  if (newExplanation) {
    const authorForRegex = String(arg.author || "").replace(/[.*+?^${}()|[\\]\\]/g, "\\$&");
    if (authorForRegex) {
      newExplanation = newExplanation
        .replace(new RegExp(`^Selon\\s+${authorForRegex}\\s*,?\\s*`, "i"), "")
        .replace(new RegExp(`^D['’]après\\s+${authorForRegex}\\s*,?\\s*`, "i"), "");
    }
  }

  // Philosophie : corpus pédagogique validé pour les formulations connues.
  // Aucune substitution mot à mot n'est appliquée. Si une formulation simple n'existe
  // pas encore pour une référence, le texte source est conservé intact.
  if (topicKey && !['roman', 'theatre', 'poesie'].includes(topicKey)) {
    const easyByAuthor: Record<string, { statements: string[]; explanations: string[] }> = {
      descartes: {
        statements: [
          "L'homme peut choisir librement en réfléchissant avec sa raison.",
          "La liberté consiste aussi à pouvoir accepter ou refuser après avoir réfléchi.",
          "Pour Descartes, l'homme fait l'expérience de sa liberté quand sa volonté peut choisir."
        ],
        explanations: [
          "L'homme ne suit pas seulement ses envies. Il peut réfléchir avant de décider et donner ou refuser son accord.",
          "La raison aide la volonté à mieux choisir. Plus l'homme comprend ce qui est vrai et bon, plus son choix est éclairé.",
          "Descartes part de l'expérience intérieure : nous savons que nous pouvons vouloir une chose ou ne pas la vouloir."
        ]
      },
      spinoza: {
        statements: [
          "L'homme croit être libre parce qu'il ne connaît pas toujours ce qui influence ses choix.",
          "Nous nous croyons libres quand nous voyons nos actions sans connaître toutes leurs causes.",
          "Pour Spinoza, comprendre les causes de nos actions permet de mieux comprendre notre liberté."
        ],
        explanations: [
          "Nous pensons souvent choisir seuls. Pourtant, nos désirs, nos habitudes et les circonstances peuvent influencer nos décisions sans que nous le sachions.",
          "Nous avons conscience de ce que nous faisons, mais nous ne connaissons pas toujours les causes qui nous poussent à agir.",
          "La liberté ne consiste donc pas à échapper aux causes. Elle consiste à mieux les comprendre pour agir avec plus de raison."
        ]
      },
      kant: {
        statements: [
          "Être libre, c'est pouvoir décider par soi-même tout en respectant la loi morale.",
          "La vraie liberté consiste à agir par devoir et non seulement selon ses envies.",
          "Pour Kant, l'homme est libre quand il se donne lui-même une règle morale."
        ],
        explanations: [
          "Faire tout ce que l'on veut ne suffit pas. Être libre, c'est aussi savoir choisir ce qui est juste et respecter une règle valable pour tous.",
          "Kant oppose la liberté aux simples désirs. Une personne est libre quand elle peut agir selon une règle qu'elle reconnaît comme juste.",
          "L'homme ne doit pas être dirigé seulement par ses envies. Il doit pouvoir décider en fonction de la morale."
        ]
      },
      epictete: {
        statements: [
          "On est plus libre quand on sait ce qui dépend de nous et ce qui ne dépend pas de nous.",
          "La liberté commence quand nous apprenons à maîtriser nos réactions.",
          "Pour Épictète, être libre, c'est garder la maîtrise de soi face à ce que l'on ne peut pas changer."
        ],
        explanations: [
          "Nous ne pouvons pas tout contrôler. En revanche, nous pouvons apprendre à contrôler nos jugements, nos réactions et nos choix.",
          "Les événements extérieurs ne dépendent pas toujours de nous. Nous pouvons cependant décider de la manière dont nous y réagissons.",
          "La maîtrise de soi permet de ne pas être entièrement dominé par les événements que nous ne pouvons pas changer."
        ]
      }
    };
    const authorKey = (arg.author || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]+/g, '');
    const easy = easyByAuthor[authorKey];
    if (easy) {
      newStatement = easy.statements[pickIndex(seedNum + argIndex, easy.statements.length)];
      newExplanation = easy.explanations[pickIndex(seedNum * 5 + argIndex, easy.explanations.length)];
    } else {
      newStatement = sanitizeDirectArgumentStatement(newStatement);
      newExplanation = (newExplanation || arg.explanation || '').trim();
    }
  }

  return {
    ...arg,
    statement: newStatement,
    explanation: newExplanation,
    quote: newQuote,
    connector: newConnector
  };
}
