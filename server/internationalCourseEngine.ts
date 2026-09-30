import { CourseSearchResult, CourseConceptFormula } from '../src/types';
import { findInternationalCourse } from '../src/data/internationalCoursesBase';

/**
 * Moteur encyclopédique éducatif international :
 * Ne s'active que si la requête cible explicitement un programme international ou supérieur,
 * ou si aucune ressource locale n'a répondu.
 */
export function isInternationalQuery(query: string): boolean {
  const q = normalize(query);
  return /\b(international|bac\s+international|ib\s+diploma|cambridge|a[- ]levels?|cpge|classes?\s+prepa|universite|superieur|toefl|ielts|dele|goethe|sat|ap\s+physics|ap\s+chem)\b/i.test(q);
}

function cleanQuery(value: string): string {
  return (value || '').trim().replace(/\s+/g, ' ');
}

function normalize(value: string): string {
  return cleanQuery(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s'-]/g, ' ').replace(/\s+/g, ' ').trim();
}

const STOP_WORDS = new Set([
  'a','au','aux','avec','ce','ceci','cela','ces','cette','dans','de','des','du','en','et','est','etait','etre','il','ils','je','la','le','les','leur','leurs','ma','mais','me','mes','mon','ne','nos','notre','nous','on','ou','par','pas','pour','que','quel','quelle','quelles','quels','qui','quoi','sa','se','ses','son','sur','ta','te','tes','toi','ton','tous','tout','un','une','vos','votre','vous','y','d','l','donne','donner','donnez','moi','cherche','chercher','recherche','recherches','trouve','trouver','explique','expliquer','parle','parler','montre','montrer','faire','fais','fait','svp','stp','please','peux','peut','pouvez','comment','pourquoi','est-ce','estce','qu','quelque','faire-moi','fais-moi'
]);
const GENERIC = new Set(['argument','arguments','citation','citations','exemple','exemples','definition','definir','resume','synthese','analyse','cours','notion','notions','fiche','revision','information','informations','question','questions','reponse','reponses','explication','explications','detail','details','principal','principaux','principale','principales','donner','donnez','montre','montrer','explique','expliquer','calcul','calculer','solution','solutions','methode','methodes','conjugaison','conjugue','conjuguer','traduction','traduire','compare','comparer','comparaison','difference','differences']);

function tokens(value: string): string[] { return normalize(value).split(/\s+/).filter(t => t.length >= 2 && !STOP_WORDS.has(t)); }
function meaningful(value: string): string[] { return tokens(value).filter(t => !GENERIC.has(t)); }

// Abréviations et variantes lexicales fréquentes : elles enrichissent la recherche,
// sans définir de types de requêtes. La requête originale reste toujours prioritaire.
const QUERY_ALIASES: Record<string,string> = {
  'onu': 'organisation des nations unies',
  'otAN': 'organisation du traite de l atlantique nord',
  'otan': 'organisation du traite de l atlantique nord',
  'ue': 'union europeenne',
  'ua': 'union africaine',
  'omc': 'organisation mondiale du commerce',
  'fmi': 'fonds monetaire international',
  'bce': 'banque centrale europeenne',
  'pib': 'produit interieur brut',
  'adn': 'acide desoxyribonucleique',
  'svt': 'sciences de la vie et de la terre'
};

function buildVariants(query: string): string[] {
  const q = cleanQuery(query);
  const variants = new Set<string>([q]);
  const normalized = normalize(q);
  for (const [alias, expansion] of Object.entries(QUERY_ALIASES)) {
    if (new RegExp(`\\b${alias}\\b`, 'i').test(normalized)) variants.add(q.replace(new RegExp(`\\b${alias}\\b`, 'i'), expansion));
  }
  const raw = tokens(q);
  const core = meaningful(q);
  if (core.length) variants.add(core.join(' '));
  if (raw.length >= 3) {
    variants.add(raw.slice(0, Math.min(10, raw.length)).join(' '));
    variants.add(raw.slice(Math.max(0, raw.length - 10)).join(' '));
  }
  for (let n = Math.min(5, raw.length); n >= 2 && variants.size < 14; n--) {
    for (let i = 0; i + n <= raw.length && variants.size < 14; i++) variants.add(raw.slice(i, i + n).join(' '));
  }
  return [...variants].slice(0, 14);
}

function overlap(queryTokens: string[], text: string): number {
  const t = normalize(text); if (!t) return 0;
  return [...new Set(queryTokens)].reduce((s, token) => s + (t.includes(token) ? (token.length >= 7 ? 5 : token.length >= 5 ? 3 : 1) : 0), 0);
}

function rank(title: string, snippet: string, query: string, variant: string, index: number): number {
  const t = normalize(title), v = normalize(variant), q = normalize(query);
  let score = overlap(meaningful(query), title) * 10 + overlap(meaningful(query), snippet) * 3;
  score += overlap(meaningful(variant), title) * 6 + overlap(meaningful(variant), snippet) * 2;
  if (t === q) score += 180;
  if (t === v) score += 120;
  if (v.length > 8 && t.includes(v)) score += 60;
  if (/homonymie|disambiguation|liste|index|portail/i.test(t)) score -= 100;
  return score - index * 0.2;
}

const WIKI_VARIANT_CONCURRENCY = 4;

async function wikiSearch(query: string, lang: 'fr'|'en') {
  const results = new Map<string, any>();
  const variants = buildVariants(query);

  // Les variantes sont indépendantes : les traiter par petits lots permet de
  // réduire fortement la latence cumulée sans ouvrir jusqu'à 14 connexions
  // simultanées vers Wikipédia. Une erreur/timeout d'une variante reste isolé
  // et les autres résultats sont toujours fusionnés.
  for (let start = 0; start < variants.length; start += WIKI_VARIANT_CONCURRENCY) {
    const batch = variants.slice(start, start + WIKI_VARIANT_CONCURRENCY);
    const batchResults = await Promise.all(batch.map(async (variant) => {
      try {
        const url = `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(variant)}&srlimit=12&srprop=snippet&format=json&origin=*`;
        const res = await fetch(url, { headers: { 'User-Agent': 'LeProfAcademicEngine/5.0' }, signal: AbortSignal.timeout(4500) });
        if (!res.ok) return [];

        const data: any = await res.json();
        return (Array.isArray(data?.query?.search) ? data.query.search : [])
          .map((hit: any, index: number) => {
            const title = String(hit?.title || '').trim();
            if (!title) return null;
            const snippet = String(hit?.snippet || '').replace(/<[^>]+>/g, ' ');
            const score = rank(title, snippet, query, variant, index);
            return { title, snippet, score, lang };
          })
          .filter(Boolean);
      } catch {
        return [];
      }
    }));

    for (const hits of batchResults) {
      for (const hit of hits) {
        const key = normalize(hit.title);
        const old = results.get(key);
        if (!old || hit.score > old.score) results.set(key, hit);
      }
    }
  }

  return [...results.values()].sort((a,b) => b.score-a.score).slice(0, 10);
}

async function wikiPage(candidate: any) {
  try {
    const url = `https://${candidate.lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(candidate.title)}`;
    const res = await fetch(url, { headers: { 'User-Agent': 'LeProfAcademicEngine/5.0' }, signal: AbortSignal.timeout(4500) });
    if (!res.ok) return null;
    const data: any = await res.json();
    if (!data?.extract || data.type === 'disambiguation') return null;
    return { ...candidate, title: String(data.title || candidate.title), extract: String(data.extract), url: String(data.content_urls?.desktop?.page || '') };
  } catch { return null; }
}

async function targetedPassages(candidate: any, query: string): Promise<{heading:string; content:string}|null> {
  try {
    const url = `https://${candidate.lang}.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${encodeURIComponent(candidate.title)}&format=json&formatversion=2&explaintext=1`;
    const res = await fetch(url, { headers: { 'User-Agent': 'LeProfAcademicEngine/5.0' }, signal: AbortSignal.timeout(4500) });
    if (!res.ok) return null;
    const data: any = await res.json();
    const text = String(data?.query?.pages?.[0]?.extract || '').trim();
    if (!text) return null;
    const qTokens = meaningful(query);
    const paragraphs = text.split(/\n{1,2}/).map(p => p.trim()).filter(p => p.length >= 60);
    const ranked = paragraphs.map((p, i) => ({ p, s: overlap(qTokens, p) + (i < 3 ? 0.5 : 0) })).filter(x => x.s > 0).sort((a,b) => b.s-a.s);
    if (!ranked.length) return null;
    return { heading: 'Informations directement pertinentes', content: ranked.slice(0, 6).map(x => x.p).join('\n\n') };
  } catch { return null; }
}

function inferDiscipline(query: string): {code:string; label:string} {
  const q = normalize(query);
  if (/philosoph|liberte|conscience|inconscient|bonheur|justice|verite|morale|raison/.test(q)) return {code:'philo',label:'Philosophie'};
  if (/equation|derivee|integrale|geometr|probabilite|statistique|matrice|arithmet|calcul/.test(q)) return {code:'maths',label:'Mathématiques'};
  if (/physique|vitesse|force|energie|electricite|optique|mecanique|mouvement/.test(q)) return {code:'physique',label:'Physique'};
  if (/chimie|atome|molecule|reaction|acide|base|oxydation/.test(q)) return {code:'chimie',label:'Chimie'};
  if (/cellule|photosynthese|mitose|meiose|adn|genetique|ecosysteme|biologie/.test(q)) return {code:'svt',label:'SVT / Biologie'};
  if (/conjugaison|grammaire|syntaxe|orthographe|roman|poeme|litterature|figure de style/.test(q)) return {code:'francais',label:'Français / Littérature'};
  if (/guerre|revolution|colonisation|independance|histoire|empire|traite|royaume|president/.test(q)) return {code:'histoire',label:'Histoire'};
  if (/cote d ivoire|afrique|climat|population|geographie|urbanisation|agriculture|peche|mondialisation|economie/.test(q)) return {code:'geo',label:'Géographie / Économie'};
  return {code:'general',label:'Recherche éducative universelle'};
}

export async function searchInternationalAcademicCourse(params: {query:string; discipline?:string; level?:string; curriculum?:string}): Promise<CourseSearchResult|null> {
  const q = cleanQuery(params.query); if (!q) return null;
  const built = findInternationalCourse(q); if (built) return built;
  // searchMultiLingualEncyclopedia fait de véritables appels réseau (Wikipédia FR/EN,
  // jusqu'à 14 variantes de requête en séquence) : coûteux en latence et non local.
  // DISABLE_EXTERNAL_KNOWLEDGE_FALLBACK=true garde le lookup local ci-dessus mais saute
  // ce recours externe, pour un mode strictement local/déterministe à grande échelle.
  if (process.env.DISABLE_EXTERNAL_KNOWLEDGE_FALLBACK === "true") return null;
  return searchMultiLingualEncyclopedia(q);
}

export async function searchMultiLingualEncyclopedia(query: string): Promise<CourseSearchResult|null> {
  const q = cleanQuery(query); if (!q) return null;
  try {
    const isExplicitEnglish = /\b(the|and|of|in|for|with|what|why|how|define|explain|calculate|difference|between|physics|chemistry|biology|mathematics)\b/i.test(q);
    const langs: Array<'fr'|'en'> = isExplicitEnglish ? ['en'] : ['fr'];
    const candidates = (await Promise.all(langs.map(l => wikiSearch(q,l)))).flat();
    const ranked = candidates.sort((a,b) => b.score-a.score);
    if (!ranked.length || ranked[0].score < 25) return null;

    const mTokens = meaningful(q);
    let best:any = null; let bestContent:any = null; let bestTotal = -Infinity;
    for (const candidate of ranked.slice(0,5)) {
      // Barrière anti-faux positifs : le titre ou extrait doit obligatoirement avoir une correspondance sémantique
      if (mTokens.length > 0) {
        const titleOverlap = overlap(mTokens, candidate.title);
        const snippetOverlap = overlap(mTokens, candidate.snippet);
        if (titleOverlap === 0 && snippetOverlap === 0) continue;
      }

      const page = await wikiPage(candidate); if (!page) continue;
      const targeted = await targetedPassages(page,q);
      const contentScore = targeted ? overlap(mTokens, targeted.content) : overlap(mTokens, page.extract);
      if (contentScore === 0 && mTokens.length > 0) continue;

      const total = candidate.score + contentScore * 2;
      if (total > bestTotal) { bestTotal = total; best = page; bestContent = targeted; }
    }
    if (!best || bestTotal < 20) return null;

    const content = bestContent?.content || best.extract;
    const heading = bestContent?.heading || best.title;
    const paragraphs = content.split(/\n+/).map((p:string)=>p.trim()).filter((p:string)=>p.length>25);
    const concepts: CourseConceptFormula[] = paragraphs.slice(0,6).map((p:string,i:number)=>({
      name: i===0 ? heading : `Information ${i+1}`,
      formulaOrRule: p.slice(0,500), explanation:p,
      contextOrApplication:`Passage sélectionné pour sa pertinence avec la requête « ${q} ».`
    }));
    const discipline = inferDiscipline(q);
    return {
      query:q, discipline:discipline.code as any, disciplineLabel:discipline.label,
      cycle:'second_cycle_bac', level:'terminale', levelLabel:'Tous niveaux & enseignement supérieur',
      chapterTitle: bestContent ? `${heading} — ${best.title}` : best.title,
      definitionAndScope:content, coreConceptsAndFormulas:concepts,
      stepByStepMethod:[], solvedExample:{problemStatement:'',solutionStepByStep:'',finalAnswer:''},
      classicExamTraps:[], selfCheckChecklist:[], quickRevisionMemo:paragraphs.slice(0,2).join(' '),
      certificationNote:`Source encyclopédique externe : Wikipédia ${best.lang.toUpperCase()}. Résultat sélectionné par correspondance de la requête et vérification du contenu ; aucune réponse générique n'est fabriquée si aucune source pertinente n'est trouvée.`,
      curriculumStandard:'Recherche éducative universelle', isInternational:true, directContent:content, isDirectAnswer:true
    };
  } catch { return null; }
}
