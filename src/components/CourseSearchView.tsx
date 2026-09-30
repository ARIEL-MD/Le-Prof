import React, { useState } from 'react';
import { 
  Search, 
  AlertTriangle, 
  BookOpen, 
  ShieldCheck, 
  Copy, 
  Check, 
  ArrowRight,
  BrainCircuit,
  Lightbulb,
  BookmarkPlus,
  User,
  Quote,
  Award,
  Compass,
  Filter,
  Sparkles,
  Layers,
  Globe,
  RefreshCw,
  Shuffle,
  SlidersHorizontal,
  RotateCw,
  ChevronDown
} from 'lucide-react';
import { CourseSearchResult, CourseConceptFormula } from '../types';
import { DisciplineIcon } from './DisciplineIcon';
import { MathText } from './MathText';
import { getConnectedUserSeed } from '../utils/userSeed';
import { ensureNumberedTitlesBold } from '../utils/textFormatter';

/**
 * Détermine si une explication doit être affichée :
 * - Elle doit être présente et non vide
 * - Ne doit pas être une mention administrative ou texte de remplissage (ex: "Définition officielle conforme...", "MENA / DPFC", etc.)
 * - Ne doit pas faire doublon avec la formule, la règle ou la définition déjà affichée juste au-dessus
 */
export function hasDisplayableExplanation(explanation?: string, formulaOrRule?: string): boolean {
  if (!explanation) return false;
  const exp = explanation.trim();
  if (!exp) return false;

  const expLower = exp.toLowerCase();

  // Filtrer les mentions administratives et formules de remplissage
  if (
    expLower.includes('définition officielle conforme') ||
    expLower.includes('definition officielle conforme') ||
    expLower.includes('mena / dpfc') ||
    expLower.includes('cadre conceptuel fondamental') ||
    expLower.includes('règle clé & propriété') ||
    expLower.includes('regle cle & propriete') ||
    expLower === 'définition officielle.' ||
    expLower === 'definition officielle.' ||
    expLower === 'règle du cours.' ||
    expLower === 'regle du cours.'
  ) {
    return false;
  }

  // Vérifier si l'explication est déjà donnée au-dessus dans formulaOrRule
  if (formulaOrRule) {
    const fLower = formulaOrRule.trim().toLowerCase();
    if (fLower === expLower) {
      return false;
    }
    if (fLower.includes(expLower)) {
      return false;
    }
    if (expLower.includes(fLower) && expLower.length - fLower.length < 15) {
      return false;
    }
  }

  return true;
}

export interface ParsedAcademicScope {
  leadDefinition: string;
  dialecticalPoles?: { poleA: string; poleB: string };
  officialGuidance?: string;
  rawCleaned: string;
}

/**
 * Assainit et structure le cadrage académique pour éliminer toute trace de plan brut (I. II. etc.)
 * et valoriser une présentation exécutive claire (Définition maîtresse, Tension dialectique, Consigne d'examen).
 */
export function parseAcademicScope(rawScope: string, discipline?: string): ParsedAcademicScope {
  // 1. Élimination impérative et chirurgicale des marqueurs de plan de cours brut (I., II., 1., A., etc.)
  let cleaned = (rawScope || '')
    .replace(/^[I|V|X]+\.\s+[A-ZÀ-Ÿ\s\-':,]+/gm, '')
    .replace(/^\d+\.\s+[A-ZÀ-Ÿ\s\-':,]+/gm, '')
    .replace(/^[A-Z]\.\s+[A-ZÀ-Ÿ\s\-':,]+/gm, '')
    .replace(/^(?:INTRODUCTION|GENERALITES|DEFINITION|PROPRIETES|CONCLUSION|PLAN DU COURS)\b/gim, '')
    .trim();

  // 2. Détection de la tension dialectique (d'une part ... d'autre part ..., ou problématique centrale)
  let poleA = '';
  let poleB = '';

  const partMatch = cleaned.match(/d'une part[,\s]+(.*?)[;\.]\s+d'autre part[,\s]+(.*?)(?:\.|$)/i);
  if (partMatch) {
    poleA = partMatch[1].trim();
    poleB = partMatch[2].trim();
  } else {
    const probMatch = cleaned.match(/Problématique centrale d'examen\s*:\s*(.*?)\?\s*Ou bien au contraire,\s*(.*?)\?/i);
    if (probMatch) {
      poleA = probMatch[1].trim();
      poleB = probMatch[2].trim();
    }
  }

  // 3. Extraction des consignes officielles ou attentes du correcteur
  let guidance = '';
  const guideMatch = cleaned.match(/(?:Cadrage & Enjeux|Cadrage officiel|Enjeux au Baccalauréat|Critère d'évaluation|Exigence officielle)\s*:\s*(.*)/i);
  if (guideMatch) {
    guidance = guideMatch[1].trim();
  }

  // 4. Paragraphes propres (sans les lignes d'enjeux déjà extraites)
  const paragraphs = cleaned
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0)
    .filter(p => !/(?:Cadrage & Enjeux|Cadrage officiel|Enjeux au Baccalauréat)\s*:/i.test(p));

  const lead = paragraphs.slice(0, 2).join('\n\n') || cleaned;

  return {
    leadDefinition: lead,
    dialecticalPoles: poleA && poleB ? { poleA, poleB } : undefined,
    officialGuidance: guidance,
    rawCleaned: cleaned
  };
}

/**
 * Nettoie toute mention superflue de classe ou d'examen spécifique (ex: 3ème, BEPC, Classe de 3ème)
 * afin de garantir un affichage universel, épuré et centré sur la notion recherchée.
 */
export function cleanNoClassMentions(text?: string): string {
  if (!text) return '';
  return text
    .replace(/\s*\((?:Programme Officiel\s*)?(?:3[èe]me?|3e|\bBEPC\b)[^)]*\)/gi, '')
    .replace(/\s*-\s*3e\s*\/\s*BEPC\b/gi, '')
    .replace(/\b(?:au|du|pour le|à l'examen du|à l'épreuve du)\s+BEPC\b/gi, "à l'examen")
    .replace(/\b(?:des épreuves du|des épreuves de)\s+BEPC\b/gi, "des épreuves d'examen")
    .replace(/\b(?:de la classe de 3[èe]me?|de 3[èe]me?|en 3[èe]me?|en classe de 3[èe]me?)\b/gi, "")
    .replace(/\b(?:Classe de\s+)?3[èe]me?\s*(?:\/|\()\s*BEPC\)?/gi, "")
    .replace(/\bClasse de 3[èe]me?\b/gi, "")
    .replace(/\b3[èe]me\s*\(BEPC\)/gi, "")
    .replace(/\bBEPC\b/g, "l'examen")
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

export interface ParsedArgumentCard {
  isArgument: boolean;
  isCitation: boolean;
  category: string;
  number?: string;
  statement: string;
  author?: string;
  work?: string;
  quote?: string;
  explanation?: string;
  example?: string;
  modelParagraph?: string;
  contextAdvice?: string;
  isPhiloIllustration?: boolean;
  illustrationCommentary?: string;
  rawItem: CourseConceptFormula;
}

/**
 * Explication simple et générique de l'argument (dissertation de philosophie), affichée
 * AVANT l'illustration. Volontairement en français facile, sans nommer l'auteur ni la citation
 * (qui n'apparaissent qu'ensuite, dans le bloc Illustration) : ce n'est pas ici qu'on justifie
 * l'argument par une référence, mais qu'on explique simplement pourquoi il tient debout.
 */
export function buildSimpleArgumentExplanation(statement: string, idx = 0, sourceExplanation = ""): string {
  const clean = statement.replace(/^Argument\s*:\s*/i, '').replace(/\s+/g, ' ').trim().replace(/[.!?]+$/, '');
  const key = clean.toLowerCase().replace(/[’']/g, "'");

  // Formulations pédagogiques validées : même idée, français simple, sans phrase passe-partout.
  const known: Record<string, string[]> = {
    "le libre arbitre permet à la volonté humaine de se déterminer par la lumière de la raison": [
      "L'homme peut réfléchir avant d'agir et choisir ce qu'il veut faire. Sa raison l'aide à prendre une décision au lieu de suivre seulement ses envies."
    ],
    "l'illusion de la liberté découle de la méconnaissance des causes réelles qui nous déterminent": [
      "Nous pensons parfois être libres parce que nous ne connaissons pas tout ce qui influence nos choix. Nos désirs, nos habitudes et les circonstances peuvent guider nos actions sans que nous le sachions."
    ],
    "la liberté authentique s'identifie à l'autonomie de la volonté soumise à la loi morale": [
      "Être libre, ce n'est pas seulement faire ce que l'on veut. C'est aussi être capable de décider par soi-même et de respecter ce que l'on considère comme juste."
    ],
    "la maîtrise intérieure et le discernement stoïcien fondent une liberté inaliénable": [
      "On est plus libre quand on sait ce qui dépend de nous et ce qui ne dépend pas de nous. Il faut donc apprendre à maîtriser ses réactions face aux choses que l'on ne peut pas changer."
    ]
  };

  const variants = known[key];
  if (variants?.length) return variants[idx % variants.length];

  // Aucun texte générique : si aucune formulation simple validée n'existe,
  // on conserve l'explication source plutôt que d'afficher un champ vide.
  return sourceExplanation.trim();
}

/**
 * Reformule en français facile le texte riche déjà existant, quand il sert d'« Explication de
 * l'illustration » : on garde le sens et les faits, on retire seulement l'excès de vocabulaire
 * savant quand une formulation plus simple est possible sans rien inventer.
 */
function simplifyIllustrationText(text: string): string {
  return text
    .replace(/\bDeus sive Natura\b/gi, "Dieu, c'est-à-dire la Nature")
    .replace(/\beudaimonia\b/gi, "le bonheur véritable")
    .replace(/\bataraxie\b/gi, "la tranquillité de l'âme")
    .trim();
}

/**
 * Génère, de façon déterministe mais variée (selon l'auteur et l'index de l'argument),
 * l'« Explication de l'illustration » obligatoire pour la dissertation de philosophie :
 * ce que la citation/l'illustration montre concrètement et en quoi elle soutient l'argument.
 * Aucun fait n'est inventé ici : le texte reste une formule méthodologique générique de lien
 * entre l'illustration déjà citée (auteur, œuvre, citation) et l'argument qu'elle appuie.
 */
export function buildIllustrationCommentary(author: string, work: string, idx: number): string {
  const cleanAuthor = author || "l'auteur";
  const variants = [
    `${cleanAuthor} défend ici l'idée présentée dans l'argument.`,
    `Cette citation de ${cleanAuthor} appuie l'idée de l'argument.`,
    `La citation de ${cleanAuthor} donne un exemple de cette idée.`,
    `${cleanAuthor} montre ici pourquoi cette idée peut être défendue.`,
    `Cette référence permet de relier l'argument à la pensée de ${cleanAuthor}.`
  ];
  return variants[Math.abs(idx) % variants.length];
}

/**
 * Analyse et structure chaque argument littéraire ou philosophique pour un affichage de dissertation d'élite.
 */
export function parseConceptItem(item: CourseConceptFormula, idx: number, discipline?: string): ParsedArgumentCard {
  const isArg = /argument/i.test(item.name) || /thèse/i.test(item.name) || /antithèse/i.test(item.name);
  const isCit = /citation/i.test(item.name);

  // Catégorie extraite des crochets [Catégorie] ou déduite
  let category = "Notion Fondamentale";
  const bracketMatch = item.name.match(/\[(.*?)\]/);
  if (bracketMatch) {
    category = bracketMatch[1].trim();
  } else if (isCit) {
    category = "Citation d'Autorité";
  } else if (/formule/i.test(item.name)) {
    category = "Formule & Propriété";
  }
  // Nettoyage impératif de toute mention de "Variante"
  category = category
    .replace(/^Variante\s*\d+\s*[-–:]\s*/i, '')
    .replace(/\bVariante\s*\d+\b/i, '')
    .trim() || "Perspective d'Analyse";

  // Énoncé de l'argument (après les crochets ou deux-points)
  let statement = item.name;
  if (bracketMatch) {
    const parts = item.name.split(/\]\s*:\s*/);
    statement = parts.length > 1 ? parts[1].trim() : item.name.replace(/\[.*?\]\s*/, '').trim();
  } else if (item.name.includes(" : ")) {
    statement = item.name.split(" : ").slice(1).join(" : ").trim();
  }
  // Nettoyer d'éventuels préfixes redondants "Argument : " ou "Argument #1 : " ou mentions de variante
  statement = statement
    .replace(/^Variante\s*\d+\s*[-–:]\s*/i, '')
    .replace(/^Argument(?:\s*#\d+)?\s*:\s*/i, '')
    .trim();

  // Extraction Auteur, Œuvre, Citation, Exemple depuis formulaOrRule
  let author = "";
  let work = "";
  let quote = "";
  let example = "";

  const authorMatch = item.formulaOrRule.match(/Auteur\s*:\s*([^|]+)/i);
  if (authorMatch) author = authorMatch[1].trim();

  const workMatch = item.formulaOrRule.match(/Œuvre\s*:\s*([^|]+)/i);
  if (workMatch) work = workMatch[1].trim().replace(/^\*|\*$/g, '');

  const quoteMatch = item.formulaOrRule.match(/Citation\s*:\s*«?\s*([^»|]+)\s*»?/i);
  if (quoteMatch) {
    quote = quoteMatch[1].trim();
  } else if (isCit && item.formulaOrRule.startsWith("«")) {
    quote = item.formulaOrRule.replace(/^«\s*|\s*»$/g, '').trim();
  } else if (isCit) {
    const nameQuoteMatch = item.name.match(/«\s*([^»]+)\s*»/) || item.formulaOrRule.match(/«\s*([^»]+)\s*»/);
    if (nameQuoteMatch) {
      quote = nameQuoteMatch[1].trim();
    }
  }

  // Pour une citation, le statement principal doit être la formule exacte
  if (isCit && quote) {
    statement = `« ${quote} »`;
  }

  const exampleMatch = item.formulaOrRule.match(/Exemple\s*:\s*(.+)$/i);
  if (exampleMatch) {
    example = exampleMatch[1].trim();
  }

  // Découpage propre entre explication théorique et exemple concret
  let explanation = (item.explanation || "").trim();
  if (explanation) {
    // Si l'explication contient "Dans [Œuvre/Auteur]..."
    const dansMatch = explanation.match(/^(.*?)(Dans\s+[A-ZÀ-Ÿ].*)$/s);
    if (dansMatch && dansMatch[1].trim().length > 15) {
      explanation = dansMatch[1].trim();
      if (!example || example.length < dansMatch[2].trim().length) {
        example = dansMatch[2].trim();
      }
    }
  }

  // Nettoyage des préfixes "Exemple : " dans l'exemple
  if (example) {
    example = example.replace(/^Exemple\s*:\s*/i, '').trim();
  }

  let contextAdvice = item.contextOrApplication || "";

  // Pour la dissertation de PHILOSOPHIE, la structure obligatoire est :
  // Argument → Explication (simple, sans nommer l'auteur) → Illustration (auteur/œuvre/citation)
  // → Explication de l'illustration (ce que la citation montre, en lien avec l'argument).
  // On distingue cette illustration philosophique de l'« Exemple » du français : elle repose sur
  // une citation (formulaOrRule contient « Citation : ») et non sur un exemple d'œuvre narratif.
  const isPhiloIllustration = isArg && Boolean(quote) && !example && (
    discipline === 'philo' || /citation\s*:/i.test(item.formulaOrRule)
  );
  // Le texte riche déjà présent dans les données (qui nomme l'auteur et commente la citation)
  // est en réalité l'« Explication de l'illustration » : il ne doit pas apparaître dans le bloc
  // « Explication » de l'argument, qui doit rester générique, simple, et sans nom d'auteur.
  const illustrationCommentary = isPhiloIllustration
    ? simplifyIllustrationText(explanation) || buildIllustrationCommentary(author, work, idx)
    : undefined;
  if (isPhiloIllustration) {
    explanation = buildSimpleArgumentExplanation(statement, idx, explanation);
  }

  return {
    isArgument: isArg,
    isCitation: isCit,
    category,
    number: isArg ? `#${String(idx + 1).padStart(2, '0')}` : undefined,
    statement,
    author,
    work,
    quote,
    explanation,
    example,
    modelParagraph: undefined,
    contextAdvice,
    isPhiloIllustration,
    illustrationCommentary,
    rawItem: item
  };
}

/**
 * Palette documentaire sobre et contrastée pour les vocations et notions.
 */
export function getCategoryBadgeStyle(_cat: string): { bg: string; text: string; border: string; dot: string } {
  return {
    bg: 'bg-slate-100 dark:bg-slate-800',
    text: 'text-slate-800 dark:text-slate-200',
    border: 'border-slate-300 dark:border-slate-700',
    dot: 'bg-[#0030B6] dark:bg-sky-400'
  };
}

interface CourseSearchViewProps {
  onSelectQuery?: (query: string) => void;
}

const cleanSearchDisplayTitle = (title: string, fallback: string): string => {
  const raw = (title || fallback || '').trim();
  const withoutLessonPrefix = raw.replace(/^leçon\s+[^:：-]{1,100}[:：-]\s*/i, '').trim();
  return withoutLessonPrefix || raw || 'Résultat de recherche';
};

export function CourseSearchView({ onSelectQuery }: CourseSearchViewProps) {
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<CourseSearchResult | null>(null);
  const [copiedMemo, setCopiedMemo] = useState<boolean>(false);
  
  // Nouveaux états dédiés au corpus d'arguments d'examen
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [argumentSearchFilter, setArgumentSearchFilter] = useState<string>('');
  const [copiedCardIdx, setCopiedCardIdx] = useState<number | null>(null);
  const [copiedAllArgs, setCopiedAllArgs] = useState<boolean>(false);

  // Nouveaux états dédiés au recueil de citations officielles
  const [selectedCitationCategory, setSelectedCitationCategory] = useState<string>('all');
  const [citationSearchFilter, setCitationSearchFilter] = useState<string>('');
  const [copiedCitationIdx, setCopiedCitationIdx] = useState<number | null>(null);
  const [copiedAllCitations, setCopiedAllCitations] = useState<boolean>(false);

  // Nouveaux états dédiés aux référentiels internationaux et à la variation d'arguments
  const [selectedCurriculum, setSelectedCurriculum] = useState<string>('all');
  const [currentVariant, setCurrentVariant] = useState<number>(0);
  const [showFullCourseForDirect, setShowFullCourseForDirect] = useState<boolean>(false);
  const [visibleArgCount, setVisibleArgCount] = useState<number>(4);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const isCitationCorpus = Boolean(
    searchResult && (
      /recueil\s+(?:officiel\s+)?de\s+citations|citations?\s+philosophiques?|citations?\s+litt[eé]raires?|citations?\s+authentifi[eé]es?/i.test(searchResult.chapterTitle) ||
      (searchResult.coreConceptsAndFormulas || []).some(c => /^citation\s*#?\d*/i.test(c.name)) ||
      (/\bcitations?\b/i.test(searchResult.query) && !/\barguments?\b/i.test(searchResult.query))
    )
  );

  const isArgCorpus = !isCitationCorpus && Boolean(
    searchResult && (
      (searchResult.coreConceptsAndFormulas || []).some(c => /argument|thèse|antithèse|vocation/i.test(c.name)) ||
      /\b(?:argument|arguments|these|theses|antithese|dissertation|fonction)\b/i.test(searchResult.query) ||
      Boolean(searchResult.argumentVariantsAvailable?.length)
    )
  );

  const handleSearch = async (overrideQuery?: string, overrideVariant?: number, overrideCurriculum?: string) => {
    const q = (overrideQuery !== undefined ? overrideQuery : query).trim();
    if (!q) return;

    // Détermination dynamique et intelligente de la variante :
    // 1. Si une variante spécifique est passée (clic sur un onglet de variante) -> on la charge
    // 2. Si l'élève resoumet / retape la même recherche et qu'il existe plusieurs variantes -> permutation automatique vers la variante suivante !
    // 3. Si c'est une nouvelle recherche différente -> on démarre à 0
    let variantToUse: number | undefined;
    if (overrideVariant !== undefined) {
      variantToUse = overrideVariant;
    } else if (
      searchResult &&
      cleanNoClassMentions(q).toLowerCase() === cleanNoClassMentions(searchResult.query).toLowerCase() &&
      (searchResult.totalVariants || searchResult.argumentVariantsAvailable?.length || 0) > 1
    ) {
      const total = searchResult.openEndedVariants
        ? Number.MAX_SAFE_INTEGER
        : (searchResult.totalVariants || searchResult.argumentVariantsAvailable?.length || 4);
      variantToUse = ((searchResult.activeVariant ?? currentVariant) + 1) % total;
    } else {
      // Pour une nouvelle recherche, on laisse undefined pour que le serveur détermine
      // la variante initiale selon le userSeed (permettant à 2 utilisateurs différents
      // d'avoir des présentations et formulations différentes dès la première recherche)
      variantToUse = undefined;
    }

    const curriculumToUse = overrideCurriculum !== undefined ? overrideCurriculum : selectedCurriculum;
    const userSeed = getConnectedUserSeed();

    setIsLoading(true);
    setError(null);
    setShowFullCourseForDirect(false);

    try {
      const response = await fetch('/api/search-course', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: q,
          variant: variantToUse,
          curriculum: curriculumToUse,
          userSeed,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la recherche (${response.status})`);
      }

      const data = await response.json();
      const resData = (data.success && data.data) ? data.data : (data.data || data);
      if (resData && (resData.chapterTitle || resData.coreConceptsAndFormulas)) {
        setSearchResult(resData);
        if (typeof resData.activeVariant === 'number') {
          setCurrentVariant(resData.activeVariant);
        }
        setVisibleArgCount(4);
      } else {
        throw new Error(data.error || 'Aucune donnée reçue du serveur.');
      }

      setTimeout(() => {
        const el = document.getElementById('course-search-results');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Erreur lors de la recherche académique.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoirPlus = async () => {
    if (!searchResult) return;
    const currentListLength = (searchResult.coreConceptsAndFormulas || []).length;
    
    // Si la recherche contient plus d'arguments que ce qui est affiché, on en montre davantage
    if (currentListLength > visibleArgCount) {
      setVisibleArgCount(prev => prev + 4);
      return;
    }

    // Si le serveur possède des angles/arguments complémentaires non encore chargés, on fait appel avec appendVariants: true
    if ((searchResult.totalVariants || 0) > 1 && !searchResult.hasLoadedAllVariants) {
      setIsLoadingMore(true);
      try {
        const response = await fetch('/api/search-course', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: searchResult.query,
            appendVariants: true,
            curriculum: selectedCurriculum,
            userSeed: getConnectedUserSeed(),
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const resData = (data.success && data.data) ? data.data : (data.data || data);
          if (resData && resData.coreConceptsAndFormulas) {
            // Conserver les arguments déjà affichés et fusionner uniquement les
            // perspectives complémentaires. Cela évite qu'un clic sur « Voir plus »
            // remplace brutalement la première sélection personnalisée de l'élève.
            const previousItems = searchResult.coreConceptsAndFormulas || [];
            const incomingItems = resData.coreConceptsAndFormulas || [];
            const seen = new Set<string>();
            const mergedItems = [...previousItems, ...incomingItems].filter((item) => {
              const key = [
                item.name || '',
                item.formulaOrRule || '',
                item.explanation || ''
              ].join('\u001f').trim();
              if (!key || seen.has(key)) return false;
              seen.add(key);
              return true;
            });

            setSearchResult({
              ...searchResult,
              ...resData,
              coreConceptsAndFormulas: mergedItems,
              totalVariants: resData.totalVariants ?? searchResult.totalVariants,
              argumentVariantsAvailable: resData.argumentVariantsAvailable ?? searchResult.argumentVariantsAvailable,
              hasLoadedAllVariants: true
            });
            setVisibleArgCount(prev => Math.min(mergedItems.length, Math.max(prev + 6, prev)));
          }
        }
      } catch (err) {
        console.error("Erreur lors du chargement 'Voir plus' :", err);
      } finally {
        setIsLoadingMore(false);
      }
    } else {
      setVisibleArgCount(prev => prev + 4);
    }
  };

  const handleCopyMemo = () => {
    if (!searchResult) return;

    if (searchResult.directContent) {
      navigator.clipboard.writeText(searchResult.directContent.trim());
      setCopiedMemo(true);
      setTimeout(() => setCopiedMemo(false), 2000);
      return;
    }

    const items = searchResult.coreConceptsAndFormulas || [];
    const isArgCorpus = 
      items.some(c => /argument|thèse|antithèse|vocation/i.test(c.name) || /auteur\s*:/i.test(c.formulaOrRule)) ||
      /\b(?:argument|arguments|these|theses|antithese|dissertation|fonction)\b/i.test(searchResult.query);

    if (isArgCorpus) {
      const parsedArgs = items.map((item, idx) => parseConceptItem(item, idx, searchResult.discipline));
      const content = parsedArgs.map(arg => {
        const cat = arg.category ? `${arg.category.toUpperCase()}\n` : '';
        const expl = arg.explanation ? `${arg.explanation}\n` : '';
        if (arg.isPhiloIllustration) {
          const illustration = `Illustration : ${arg.author}${arg.work ? `, *${arg.work}*` : ''} — « ${arg.quote} »`;
          const commentaire = arg.illustrationCommentary ? `\nExplication de l'illustration : ${arg.illustrationCommentary}` : '';
          return `${cat}Argument : ${arg.statement}\n${expl}${illustration}${commentaire}`.trim();
        }
        const ex = arg.example ? `Exemple : ${arg.example}` : (arg.author || arg.work) ? `Exemple : Dans ${arg.work ? `*${arg.work}*` : ''} de ${arg.author || 'l’auteur'}` : '';
        return `${cat}Argument : ${arg.statement}\n${expl}${ex}`.trim();
      }).join('\n\n');

      navigator.clipboard.writeText(content);
      setCopiedMemo(true);
      setTimeout(() => setCopiedMemo(false), 2000);
      return;
    }

    const content = `${searchResult.chapterTitle.toUpperCase()}
Discipline : ${searchResult.disciplineLabel}
Chapitre : ${searchResult.chapterTitle}

DÉFINITION & CADRE :
${searchResult.definitionAndScope}

CONCEPTS & FORMULES CLÉS :
${searchResult.coreConceptsAndFormulas.map(c => {
  const showExp = hasDisplayableExplanation(c.explanation, c.formulaOrRule);
  return `• ${c.name} : ${c.formulaOrRule}${showExp ? `\n  Explication : ${c.explanation}` : ''}`;
}).join('\n\n')}

${searchResult.stepByStepMethod && searchResult.stepByStepMethod.length > 0 ? `MÉTHODE PAS À PAS :\n${searchResult.stepByStepMethod.map(m => `Étape ${m.stepNumber} - ${m.title} : ${m.whatToDo}\nAstuce : ${m.reflexOrTip}`).join('\n\n')}\n\n` : ''}${searchResult.classicExamTraps && searchResult.classicExamTraps.length > 0 ? `PIÈGES D'EXAMEN :\n${searchResult.classicExamTraps.map(t => `• ${t}`).join('\n')}\n\n` : ''}${searchResult.quickRevisionMemo ? `MÉMO EXPRESS :\n${searchResult.quickRevisionMemo}\n` : ''}`;

    navigator.clipboard.writeText(content.trim());
    setCopiedMemo(true);
    setTimeout(() => setCopiedMemo(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Search Header Banner */}
      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-5 sm:p-6 shadow-xs relative overflow-hidden transition-colors">
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#0030B6] text-white flex items-center justify-center font-bold shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2 flex-wrap">
                  <span>Recherche de Cours & Notions</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                  Recherche libre et universelle pour les élèves de la 6e à la Terminale, toutes séries et toutes matières, en Côte d’Ivoire et à l’international : cours, notions, définitions, explications, méthodes, formules, exercices, histoire, géographie, sciences, mathématiques, français, philosophie, langues et bien plus.
                </p>
              </div>
            </div>
          </div>

          {/* Search Input Bar */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="relative pt-1"
          >
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Recherchez une notion, théorème ou cours (ex: Thalès, Pythagore, résistance à la colonisation, oxydation...)"
                className="w-full pl-10 pr-36 py-2.5 sm:py-3 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 hover:border-slate-400 focus:border-[#0030B6] focus:ring-1 focus:ring-[#0030B6] rounded-lg text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 shadow-2xs focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className="absolute right-1.5 sm:right-2 px-4 py-2 bg-[#0030B6] hover:bg-[#002699] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Recherche...</span>
                  </>
                ) : (
                  <>
                    <span>Rechercher</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="p-8 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl text-center space-y-4 animate-pulse shadow-sm">
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-600/30 rounded-2xl mx-auto flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <BrainCircuit className="w-6 h-6 animate-spin" />
          </div>
          <div className="space-y-2">
            <div className="text-base font-semibold text-slate-900 dark:text-slate-200">Recherche académique certifiée en cours...</div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              Vérification des théorèmes, formules exactes, astuces d'examen et étapes de calcul selon les programmes officiels.
            </p>
          </div>
        </div>
      )}

      {/* Search Results Display */}
      {searchResult && !isLoading && (
        <div id="course-search-results" className="space-y-6">
          {/* Main Chapter Banner */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm dark:shadow-xl relative overflow-hidden transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/30 rounded-xl text-xs font-semibold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                    <DisciplineIcon discipline={searchResult.disciplineLabel} className="w-3.5 h-3.5" />
                    <span>{searchResult.disciplineLabel}</span>
                  </span>
                  {searchResult.openEndedVariants && (
                    <span className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 rounded-xl text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                      Variantes dynamiques ∞
                    </span>
                  )}
                  {searchResult.isDirectAnswer && (
                    <span className="px-2.5 py-1 bg-amber-50 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 rounded-xl text-xs font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      <span>Réponse Ciblée</span>
                    </span>
                  )}
                  {searchResult.curriculumStandard && (
                    <span className="px-3 py-1 bg-sky-100 dark:bg-sky-500/10 border border-sky-300 dark:border-sky-500/20 rounded-xl text-xs font-semibold text-sky-800 dark:text-sky-300 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                      <span>{searchResult.curriculumStandard}</span>
                    </span>
                  )}
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {cleanSearchDisplayTitle(cleanNoClassMentions(searchResult.chapterTitle || ""), searchResult.query.trim())}
                </h2>
              </div>


              {searchResult.noResult && (
                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
                  <p className="font-semibold">Aucun résultat pertinent trouvé.</p>
                  <p className="mt-1 text-sm">Essayez une formulation plus précise ou le nom exact de la notion recherchée.</p>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyMemo}
                  className="px-3.5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all shadow-xs"
                >
                  {copiedMemo ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copier la Fiche</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Organisation Intelligente selon le Type de Recherche (Arguments en priorité si recherche d'arguments) */}
            {(() => {
              const items = searchResult.coreConceptsAndFormulas || [];
              const parsedScope = parseAcademicScope(searchResult.definitionAndScope, searchResult.discipline);

              const renderCadrage = (isSubordinate: boolean) => (
                <div className={`border rounded-3xl p-5 sm:p-7 space-y-4 shadow-xs transition-colors ${
                  isSubordinate
                    ? "bg-slate-50/70 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800/80"
                    : "bg-white dark:bg-slate-950/70 border-slate-200 dark:border-slate-800"
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                      <Compass className="w-4 h-4" />
                      <span>{isSubordinate ? "Repères de Synthèse & Enjeux du Genre" : "Repères Fondamentaux & Cadrage"}</span>
                    </div>
                  </div>

                  {/* Synthèse essentielle (sans puces de plan brut I. II.) */}
                  <div className="space-y-3">
                    {parsedScope.leadDefinition.split(/\n\s*\n/).map((para, pIdx) => {
                      const pTrim = para.trim();
                      if (!pTrim) return null;
                      const lines = pTrim.split('\n').map(l => l.trim()).filter(Boolean);
                      return (
                        <div key={pIdx} className="space-y-2 text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                          {lines.map((l, lIdx) => {
                            const isBullet = l.startsWith('•') || l.startsWith('-') || l.startsWith('*');
                            if (isBullet) {
                              return (
                                <div key={lIdx} className="flex items-start gap-2.5 pl-1 sm:pl-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#0030B6] dark:bg-indigo-400 mt-2 shrink-0" />
                                  <span className="flex-1">
                                    <MathText text={l.replace(/^[•\-\*]\s*/, '')} />
                                  </span>
                                </div>
                              );
                            }
                            return (
                              <div key={lIdx}>
                                <MathText text={l} />
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>

                  {/* Tension dialectique / Deux Pôles d'Analyse si détectés */}
                  {parsedScope.dialecticalPoles && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                      <div className="bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 rounded-2xl p-4 space-y-1.5 shadow-xs">
                        <div className="text-[11px] font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-blue-600" />
                          Pôle A • Thèse & Ancrage Réaliste / Positif
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {parsedScope.dialecticalPoles.poleA}
                        </p>
                      </div>

                      <div className="bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/40 rounded-2xl p-4 space-y-1.5 shadow-xs">
                        <div className="text-[11px] font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-purple-600" />
                          Pôle B • Antithèse & Dépassement / Création
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {parsedScope.dialecticalPoles.poleB}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Exigence de la grille d'évaluation officielle */}
                  {parsedScope.officialGuidance && (
                    <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-3.5 sm:p-4 flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 shadow-2xs">
                      <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div className="leading-relaxed">
                        <strong className="font-semibold text-slate-900 dark:text-slate-100">Exigence officielle du correcteur : </strong>
                        {parsedScope.officialGuidance}
                      </div>
                    </div>
                  )}
                </div>
              );

              const renderArgumentsCorpus = () => {
                const parsedArgs = items.map((item, idx) => parseConceptItem(item, idx, searchResult.discipline));
                const availableCats: string[] = Array.from(new Set(parsedArgs.map(a => a.category).filter(Boolean))) as string[];
                const filterQ = argumentSearchFilter.trim().toLowerCase();
                const filteredArgs = parsedArgs.filter(a => {
                  const matchCat = selectedCategory === 'all' || a.category === selectedCategory;
                  if (!matchCat) return false;
                  if (!filterQ) return true;
                  return (
                    a.statement.toLowerCase().includes(filterQ) ||
                    (a.author && a.author.toLowerCase().includes(filterQ)) ||
                    (a.work && a.work.toLowerCase().includes(filterQ)) ||
                    (a.quote && a.quote.toLowerCase().includes(filterQ)) ||
                    (a.explanation && a.explanation.toLowerCase().includes(filterQ)) ||
                    (a.example && a.example.toLowerCase().includes(filterQ))
                  );
                });

                const formatArgForCopy = (arg: ParsedArgumentCard): string => {
                  const header = arg.category ? `${arg.category.toUpperCase()}\n` : '';
                  const expl = arg.explanation ? `${arg.explanation}\n` : '';
                  if (arg.isPhiloIllustration) {
                    const illustration = `Illustration : ${arg.author}${arg.work ? `, *${arg.work}*` : ''} — « ${arg.quote} »`;
                    const commentaire = arg.illustrationCommentary ? `\nExplication de l'illustration : ${arg.illustrationCommentary}` : '';
                    return `${header}Argument : ${arg.statement}\n${expl}${illustration}${commentaire}`.trim();
                  }
                  const authorLine = arg.author ? `Auteur : ${arg.author}\n` : '';
                  const workLine = arg.work ? `Œuvre : ${arg.work.replace(/^\*|\*$/g, '')}\n` : '';
                  const ex = arg.example ? `Exemple : ${arg.example}` : '';
                  const fallbackEx = !ex && (arg.author || arg.work) ? `Exemple : Dans ${arg.work ? arg.work.replace(/^\*|\*$/g, '') : "l’œuvre"}${arg.author ? ` de ${arg.author}` : ''}.` : '';
                  return `${header}Argument : ${arg.statement}\n${expl}${authorLine}${workLine}${ex || fallbackEx}`.trim();
                };

                const handleCopySingleArg = (arg: ParsedArgumentCard, idx: number) => {
                  navigator.clipboard.writeText(formatArgForCopy(arg));
                  setCopiedCardIdx(idx);
                  setTimeout(() => setCopiedCardIdx(null), 2000);
                };

                const handleCopyAll = () => {
                  const allTxt = filteredArgs.map(formatArgForCopy).join('\n\n');
                  navigator.clipboard.writeText(allTxt);
                  setCopiedAllArgs(true);
                  setTimeout(() => setCopiedAllArgs(false), 2000);
                };

                return (
                  <div className="space-y-4 pt-2">
                    {/* En-tête du Corpus d'Arguments */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-indigo-50/80 via-white to-slate-50 dark:from-indigo-950/40 dark:via-slate-900 dark:to-slate-900 p-4 sm:p-5 rounded-3xl border border-indigo-200/80 dark:border-indigo-500/20 shadow-xs">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-600 text-white flex items-center gap-1 shadow-2xs">
                            <Sparkles className="w-3 h-3" /> Corpus d'Arguments Validés
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {filteredArgs.length} argument{filteredArgs.length > 1 ? 's' : ''} disponible{filteredArgs.length > 1 ? 's' : ''}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                          Arguments de Dissertation & Exemples Littéraires
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Chaque argument est formulé avec son idée directrice, son explication approfondie et son exemple d'œuvre certifié.
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                        <button
                          type="button"
                          onClick={handleCopyAll}
                          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all shadow-sm shrink-0 cursor-pointer"
                        >
                          {copiedAllArgs ? (
                            <>
                              <Check className="w-4 h-4 text-emerald-300" />
                              <span>Corpus Copié !</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copier tous les arguments ({filteredArgs.length})</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Barre de Filtres & Recherche Dynamique */}
                    <div className="bg-slate-50 dark:bg-slate-900/60 p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <div className="relative flex-1">
                          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            value={argumentSearchFilter}
                            onChange={(e) => setArgumentSearchFilter(e.target.value)}
                            placeholder="Filtrer par auteur (Balzac, Zola, Hugo...), œuvre ou mot-clé..."
                            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/30"
                          />
                        </div>

                        {argumentSearchFilter && (
                          <button
                            type="button"
                            onClick={() => setArgumentSearchFilter('')}
                            className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline px-1 cursor-pointer"
                          >
                            Effacer le filtre
                          </button>
                        )}
                      </div>

                      {/* Catégories en Chips cliquables */}
                      {availableCats.length > 1 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <button
                            type="button"
                            onClick={() => setSelectedCategory('all')}
                            className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                              selectedCategory === 'all'
                                ? 'bg-indigo-600 text-white shadow-2xs'
                                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                            }`}
                          >
                            Tous les arguments ({parsedArgs.length})
                          </button>

                          {availableCats.map((cat, idx) => {
                            const count = parsedArgs.filter(a => a.category === cat).length;
                            const isSelected = selectedCategory === cat;
                            const style = getCategoryBadgeStyle(cat);
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setSelectedCategory(isSelected ? 'all' : cat)}
                                className={`px-2.5 py-1 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer border ${
                                  isSelected
                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                                    : `${style.bg} ${style.text} ${style.border} hover:opacity-90`
                                }`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : style.dot}`} />
                                <span>{cat}</span>
                                <span className={`text-[10px] px-1 py-0.2 rounded-md font-mono ${
                                  isSelected ? 'bg-indigo-700 text-white' : 'bg-white/80 dark:bg-slate-900/60'
                                }`}>
                                  {count}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Grille des Cartes d'Arguments Haute Définition */}
                    {filteredArgs.length === 0 ? (
                      <div className="p-8 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2">
                        <Filter className="w-8 h-8 mx-auto text-slate-400" />
                        <div className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                          Aucun argument ne correspond au filtre « {argumentSearchFilter} »
                        </div>
                        <p className="text-xs text-slate-500">
                          Essayez un autre mot-clé ou réinitialisez la sélection pour afficher tous les arguments.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setArgumentSearchFilter('');
                            setSelectedCategory('all');
                          }}
                          className="mt-2 px-3 py-1.5 text-xs bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 font-semibold rounded-xl hover:bg-indigo-100 cursor-pointer"
                        >
                          Réinitialiser tous les filtres
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-4">
                        {filteredArgs.slice(0, visibleArgCount).map((arg, idx) => {
                          const badgeStyle = getCategoryBadgeStyle(arg.category);
                          const isCopied = copiedCardIdx === idx;

                          return (
                            <div
                              key={idx}
                              className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/40 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xs hover:shadow-md transition-all relative overflow-hidden"
                            >
                              {/* Barre supérieure : Fonction / Catégorie */}
                              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className={`px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider border flex items-center gap-1.5 ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}>
                                    <span className={`w-2 h-2 rounded-full ${badgeStyle.dot}`} />
                                    <span>{arg.category}</span>
                                  </span>

                                  {arg.number && (
                                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                                      {arg.number}
                                    </span>
                                  )}
                                </div>

                                <button
                                  type="button"
                                  onClick={() => handleCopySingleArg(arg, idx)}
                                  className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                                >
                                  {isCopied ? (
                                    <>
                                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copié !</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3.5 h-3.5" />
                                      <span>Copier cet argument</span>
                                    </>
                                  )}
                                </button>
                              </div>

                              {/* Argument principal */}
                              <div className="space-y-2">
                                <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                                  <span className="text-indigo-600 dark:text-indigo-400 font-black mr-2">Argument :</span>
                                  <span>{arg.statement}</span>
                                </div>

                                {/* Explication approfondie */}
                                {arg.explanation && (
                                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                                    {arg.explanation}
                                  </p>
                                )}
                              </div>

                              {arg.isPhiloIllustration ? (
                                <>
                                  {/* Illustration philosophique : auteur, œuvre, citation */}
                                  <div className="bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 rounded-2xl p-4 text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed space-y-1.5">
                                    <span className="font-extrabold text-amber-900 dark:text-amber-300 mr-2">Illustration :</span>
                                    <span>{arg.author}{arg.work ? `, ${arg.work.includes('«') ? arg.work : `« ${arg.work} »`}` : ''}</span>
                                    <blockquote className="text-xs sm:text-sm italic font-serif leading-relaxed pl-3 border-l-2 border-amber-300 dark:border-amber-700">
                                      « {arg.quote} »
                                    </blockquote>
                                  </div>

                                  {/* Explication de l'illustration : obligatoire pour la dissertation de philosophie */}
                                  {arg.illustrationCommentary && (
                                    <div className="bg-slate-50 dark:bg-slate-950/60 border-l-3 border-indigo-500 p-3.5 sm:p-4 rounded-r-2xl space-y-1 shadow-2xs">
                                      <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                                        Explication de l'illustration
                                      </div>
                                      <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                                        {arg.illustrationCommentary}
                                      </p>
                                    </div>
                                  )}
                                </>
                              ) : (
                                <>
                                  {/* Exemple littéraire : ordre obligatoire = Auteur → Œuvre → Exemple */}
                                  {(arg.author || arg.work || arg.example) ? (
                                    <div className="bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 rounded-2xl p-4 text-sm sm:text-base text-slate-800 dark:text-slate-100 leading-relaxed space-y-1.5">
                                      <div className="font-extrabold text-amber-900 dark:text-amber-300">Exemple littéraire</div>
                                      {arg.author && (
                                        <div><span className="font-semibold">Auteur :</span> {arg.author}</div>
                                      )}
                                      {arg.work && (
                                        <div><span className="font-semibold">Œuvre :</span> {arg.work.replace(/^\*|\*$/g, '')}</div>
                                      )}
                                      {arg.example && (
                                        <div><span className="font-semibold">Exemple :</span> {arg.example}</div>
                                      )}
                                    </div>
                                  ) : null}

                                  {/* Citation probante textuelle if quote exists and wasn't in example */}
                                  {arg.quote && !arg.example?.includes(arg.quote) && (
                                    <div className="bg-slate-50 dark:bg-slate-950/60 border-l-3 border-indigo-500 p-3.5 sm:p-4 rounded-r-2xl space-y-1 shadow-2xs">
                                      <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                                        <Quote className="w-3 h-3" /> Citation / Preuve Textuelle
                                      </div>
                                      <blockquote className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 italic font-serif leading-relaxed">
                                        « {arg.quote} »
                                      </blockquote>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Bouton « Voir plus » pour afficher plus d'arguments et d'angles d'analyse */}
                    {((filteredArgs.length > visibleArgCount) || ((searchResult.totalVariants || 0) > 1 && !searchResult.hasLoadedAllVariants)) && (
                      <div className="pt-2 text-center">
                        <button
                          type="button"
                          onClick={handleVoirPlus}
                          disabled={isLoadingMore}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
                        >
                          {isLoadingMore ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Chargement d'angles et d'arguments complémentaires...</span>
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4" />
                              <span>Voir plus</span>
                              <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-mono font-normal">
                                {Math.min(visibleArgCount, filteredArgs.length)} / {filteredArgs.length}
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                );
              };

              const renderCitationCorpus = () => {
                const parsedCitations = items.map((item, idx) => parseConceptItem(item, idx));
                const availableCats: string[] = Array.from(new Set(parsedCitations.map(c => c.category).filter(Boolean))) as string[];
                const filterQ = citationSearchFilter.trim().toLowerCase();
                const filteredCitations = parsedCitations.filter(c => {
                  const matchCat = selectedCitationCategory === 'all' || c.category === selectedCitationCategory;
                  if (!matchCat) return false;
                  if (!filterQ) return true;
                  return (
                    c.statement.toLowerCase().includes(filterQ) ||
                    (c.author && c.author.toLowerCase().includes(filterQ)) ||
                    (c.work && c.work.toLowerCase().includes(filterQ)) ||
                    (c.quote && c.quote.toLowerCase().includes(filterQ)) ||
                    (c.explanation && c.explanation.toLowerCase().includes(filterQ)) ||
                    (c.contextAdvice && c.contextAdvice.toLowerCase().includes(filterQ))
                  );
                });

                const handleCopySingleCitation = (c: ParsedArgumentCard, idx: number) => {
                  const authorWork = `${c.author || 'Auteur'}${c.work ? `, *${c.work}*` : ''}`;
                  const quoteStr = c.quote || c.statement;
                  const text = `« ${quoteStr.replace(/^«\s*|\s*»$/g, '')} »\n— ${authorWork}\n\nPortée : ${c.explanation || ''}\n\nModèle d'insertion Bac : ${c.contextAdvice || ''}`.trim();
                  navigator.clipboard.writeText(text);
                  setCopiedCitationIdx(idx);
                  setTimeout(() => setCopiedCitationIdx(null), 2000);
                };

                const handleCopyAllCitations = () => {
                  const allTxt = filteredCitations.map((c, i) => {
                    const header = c.category ? `[${c.category.toUpperCase()}]` : `[CITATION #${i + 1}]`;
                    const authorWork = `${c.author || 'Auteur'}${c.work ? `, *${c.work}*` : ''}`;
                    const quoteStr = c.quote || c.statement;
                    const exp = c.explanation ? `\nPortée : ${c.explanation}` : '';
                    const mod = c.contextAdvice ? `\nModèle d'insertion : ${c.contextAdvice}` : '';
                    return `${header}\n« ${quoteStr.replace(/^«\s*|\s*»$/g, '')} »\n— ${authorWork}${exp}${mod}`.trim();
                  }).join('\n\n────────────────────────────────\n\n');
                  navigator.clipboard.writeText(allTxt);
                  setCopiedAllCitations(true);
                  setTimeout(() => setCopiedAllCitations(false), 2000);
                };

                return (
                  <div className="space-y-4 pt-2">
                    {/* En-tête du Recueil de Citations */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-amber-50/90 via-white to-slate-50 dark:from-amber-950/40 dark:via-slate-900 dark:to-slate-900 p-4 sm:p-5 rounded-3xl border border-amber-200/80 dark:border-amber-500/20 shadow-xs">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-600 text-white flex items-center gap-1 shadow-2xs">
                            <Quote className="w-3 h-3" /> Recueil Officiel de Citations
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {filteredCitations.length} citation{filteredCitations.length > 1 ? 's' : ''} disponible{filteredCitations.length > 1 ? 's' : ''}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
                          Citations Authentifiées pour Dissertation & Écrit d'Examen
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Chaque citation est certifiée avec son auteur, le titre précis de son œuvre, son sens philosophique et son modèle d'insertion au Bac.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleCopyAllCitations}
                        className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all shadow-sm shrink-0 cursor-pointer self-start sm:self-auto"
                      >
                        {copiedAllCitations ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-300" />
                            <span>Recueil Copié !</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copier toutes les citations ({filteredCitations.length})</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Méthode canonique d'insertion au Bac */}
                    <div className="bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-2xl p-4 flex items-start gap-3 shadow-2xs">
                      <Award className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed space-y-1">
                        <strong className="font-bold text-slate-900 dark:text-slate-100">Règle d'or de l'épreuve du Baccalauréat : </strong>
                        <span>
                          Une citation ne doit jamais ouvrir brutalement un paragraphe ni remplacer l'argument. Respectez toujours la chaîne canonique : 
                          <strong className="text-amber-900 dark:text-amber-300 font-bold"> Idée directrice ➔ Explication préalable approfondie (2-3 phrases) ➔ Citation exacte avec auteur et œuvre ➔ Commentaire de l'illustration</strong>.
                        </span>
                      </div>
                    </div>

                    {/* Barre de Filtres & Recherche de Citations */}
                    <div className="bg-slate-50 dark:bg-slate-900/60 p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <div className="relative flex-1">
                          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            value={citationSearchFilter}
                            onChange={(e) => setCitationSearchFilter(e.target.value)}
                            placeholder="Filtrer par auteur (Sartre, Descartes, Rousseau, Hugo...), œuvre ou mot-clé..."
                            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/30"
                          />
                        </div>

                        {citationSearchFilter && (
                          <button
                            type="button"
                            onClick={() => setCitationSearchFilter('')}
                            className="text-xs text-amber-600 dark:text-amber-400 hover:underline px-1 cursor-pointer"
                          >
                            Effacer le filtre
                          </button>
                        )}
                      </div>

                      {/* Catégories en Chips */}
                      {availableCats.length > 1 && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <button
                            type="button"
                            onClick={() => setSelectedCitationCategory('all')}
                            className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                              selectedCitationCategory === 'all'
                                ? 'bg-amber-600 text-white shadow-2xs'
                                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                            }`}
                          >
                            Toutes les citations ({parsedCitations.length})
                          </button>

                          {availableCats.map((cat, idx) => {
                            const count = parsedCitations.filter(c => c.category === cat).length;
                            const isSelected = selectedCitationCategory === cat;
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setSelectedCitationCategory(isSelected ? 'all' : cat)}
                                className={`px-2.5 py-1 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer border ${
                                  isSelected
                                    ? 'bg-amber-600 text-white border-amber-600 shadow-2xs'
                                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                                }`}
                              >
                                <span>{cat}</span>
                                <span className={`text-[10px] px-1 py-0.2 rounded-md font-mono ${
                                  isSelected ? 'bg-amber-700 text-white' : 'bg-slate-100 dark:bg-slate-900/60'
                                }`}>
                                  {count}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Grille des Cartes de Citation */}
                    {filteredCitations.length === 0 ? (
                      <div className="p-8 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl space-y-2">
                        <Filter className="w-8 h-8 mx-auto text-slate-400" />
                        <div className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                          Aucune citation ne correspond au filtre « {citationSearchFilter} »
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setCitationSearchFilter('');
                            setSelectedCitationCategory('all');
                          }}
                          className="mt-2 px-3 py-1.5 text-xs bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 font-semibold rounded-xl hover:bg-amber-100 cursor-pointer"
                        >
                          Réinitialiser le filtre
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-4">
                        {filteredCitations.map((cit, idx) => {
                          const isCopied = copiedCitationIdx === idx;
                          const cleanQuote = (cit.quote || cit.statement).replace(/^«\s*|\s*»$/g, '').trim();

                          return (
                            <div
                              key={idx}
                              className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-500/40 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xs hover:shadow-md transition-all relative overflow-hidden"
                            >
                              {/* Barre supérieure : Catégorie & Bouton Copier */}
                              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 flex items-center gap-1.5">
                                    <Quote className="w-3 h-3 text-amber-600" />
                                    <span>{cit.category}</span>
                                  </span>

                                  {cit.number && (
                                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                                      {cit.number}
                                    </span>
                                  )}
                                </div>

                                <button
                                  type="button"
                                  onClick={() => handleCopySingleCitation(cit, idx)}
                                  className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-600 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                                >
                                  {isCopied ? (
                                    <>
                                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copié !</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3.5 h-3.5" />
                                      <span>Copier la citation</span>
                                    </>
                                  )}
                                </button>
                              </div>

                              {/* Bloc Citation Noble & Mis en valeur */}
                              <div className="bg-amber-50/70 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-2xl p-4 sm:p-5 space-y-2 shadow-2xs">
                                <blockquote className="text-base sm:text-xl font-serif italic text-slate-900 dark:text-slate-100 leading-relaxed font-medium">
                                  « {cleanQuote} »
                                </blockquote>
                              </div>

                              {/* Auteur et Œuvre explicites */}
                              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
                                <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-slate-100">
                                  <User className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                                  <span>{cit.author || "Auteur"}</span>
                                </div>
                                {cit.work && (
                                  <>
                                    <span className="text-slate-400 dark:text-slate-600">•</span>
                                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 italic">
                                      <BookOpen className="w-4 h-4 text-slate-400" />
                                      <span>{cit.work}</span>
                                    </div>
                                  </>
                                )}
                              </div>

                              {/* Sens & Portée de la citation */}
                              {cit.explanation && (
                                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                  <strong className="font-bold text-slate-900 dark:text-slate-100 mr-1.5">Sens & Portée :</strong>
                                  <span>{cit.explanation}</span>
                                </div>
                              )}

                              {/* Modèle d'insertion dans la dissertation */}
                              {cit.contextAdvice && (
                                <div className="bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/70 dark:border-indigo-800/40 rounded-2xl p-3.5 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 leading-relaxed">
                                  <strong className="font-bold text-indigo-700 dark:text-indigo-400 block mb-1">
                                    Modèle d'insertion au Baccalauréat :
                                  </strong>
                                  <span>{cit.contextAdvice}</span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              };

              const renderStandardConcepts = () => (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4" />
                    <span>
                      {searchResult.discipline === 'mathematiques' || searchResult.discipline === 'physique_chimie'
                        ? "Formules Fondamentales & Lois Scientifiques"
                        : "Notions Fondamentales, Propriétés & Repères"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items.slice(0, visibleArgCount).map((item, idx) => (
                      <div 
                        key={idx} 
                        className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 space-y-3 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
                      >
                        <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm flex items-center justify-between">
                          <span>{item.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md">
                            {/formule/i.test(item.name) || searchResult.discipline === 'mathematiques' || searchResult.discipline === 'physique_chimie'
                              ? `Formule #${idx + 1}`
                              : `Point Clé #${idx + 1}`}
                          </span>
                        </div>
                        
                        <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-500/20 rounded-xl text-sm sm:text-base text-indigo-900 dark:text-indigo-200 overflow-x-auto">
                          {item.formulaOrRule.includes('\n') || /(?:^|\s)[0-9]+\.\s+/.test(item.formulaOrRule) ? (
                            <div className="space-y-2">
                              {item.formulaOrRule
                                .replace(/(?<=[.!?])\s+([0-9]+\.\s+)/g, '\n$1')
                                .replace(/([^\n])\s+•\s+/g, '$1\n• ')
                                .split('\n')
                                .map(l => l.trim())
                                .filter(Boolean)
                                .map((l, lIdx) => {
                                  const isBullet = l.startsWith('•') || l.startsWith('-') || l.startsWith('*');
                                  const isNumbered = /^[0-9]+\./.test(l);
                                  return (
                                    <div key={lIdx} className={`flex items-start gap-2.5 ${isBullet || isNumbered ? 'pl-1 sm:pl-2' : ''}`}>
                                      {isBullet ? (
                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                                      ) : isNumbered ? (
                                        <span className="font-bold text-indigo-600 dark:text-indigo-400 shrink-0">
                                          {l.match(/^[0-9]+\./)?.[0]}
                                        </span>
                                      ) : null}
                                      <span className="flex-1 font-semibold">
                                        <MathText text={isBullet ? l.replace(/^[•\-\*]\s*/, '') : isNumbered ? l.replace(/^[0-9]+\.\s*/, '') : l} />
                                      </span>
                                    </div>
                                  );
                                })}
                            </div>
                          ) : (
                            <div className="font-bold font-mono">
                              <MathText text={item.formulaOrRule} />
                            </div>
                          )}
                        </div>

                        {hasDisplayableExplanation(item.explanation, item.formulaOrRule) && (
                          <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                            <span className="font-semibold text-slate-900 dark:text-slate-400">Explication : </span>
                            <MathText text={item.explanation} />
                          </div>
                        )}

                        {item.contextOrApplication && searchResult.discipline !== 'philo' && (
                          <div className="text-xs text-slate-700 dark:text-slate-400 bg-white dark:bg-slate-900/90 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800/80 shadow-2xs">
                            <span className="font-semibold text-indigo-700 dark:text-indigo-400">
                              {searchResult.discipline === 'philo' ? '' : "Quand l'utiliser : "}
                            </span>
                            <MathText text={item.contextOrApplication} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {items.length > visibleArgCount && (
                    <div className="pt-3 text-center">
                      <button
                        type="button"
                        onClick={() => setVisibleArgCount(prev => prev + 4)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                      >
                        <ChevronDown className="w-4 h-4" />
                        <span>Voir plus</span>
                        <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-mono font-normal">
                          {Math.min(visibleArgCount, items.length)} / {items.length}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              );

              const renderDirectContent = (content: string) => {
                // Normalise le contenu pour s'assurer que les sections, puces et sous-numérotations ne soient jamais combinées
                let normalized = content.trim();
                // Met systématiquement en gras tous les titres numérotés (ex: "1. CRÉATION :", "2. OBJECTIFS FONDAMENTAUX :")
                normalized = ensureNumberedTitlesBold(normalized);
                normalized = normalized.replace(/([^\n])\s*(###\s+)/g, '$1\n\n$2');
                normalized = normalized.replace(/([^\n])\s*(\*\*(?:Définition|Propriétés|Formules|Mémo|Objectifs|Principes|Organes|Bilan|À retenir)[^:]*:\*\*)/gi, '$1\n\n$2');
                // Isole chaque titre numéroté en tant que nouvelle section distincte avec saut de ligne
                normalized = normalized.replace(/(^|[^\n])\n*(\*{0,2}[0-9]+\.\s+[^\n:]{2,90}(?::|\*{2}|$))/g, '$1\n\n$2');
                normalized = normalized.replace(/([^\n])\s+•\s+/g, '$1\n• ');
                normalized = normalized.replace(/(?<=[.!?])\s+([0-9]+\.\s+)/g, '\n  $1');

                if (searchResult.isDirectAnswer) {
                  const blocks = normalized.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);

                  return (
                    <div className="space-y-4">
                      {blocks.map((block, bIdx) => {
                        const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
                        if (lines.length === 0) return null;

                        const firstLine = lines[0];
                        const restLines = lines.slice(1);
                        
                        // En-tête principal de la fiche (ex: "### ..." ou grand titre en majuscules tout en haut)
                        const isMainTitle = bIdx === 0 && (
                          firstLine.startsWith('### ') ||
                          firstLine.startsWith('# ') ||
                          /^[A-ZÀ-Ÿ0-9\s'’()\-:]{4,}$/.test(firstLine.replace(/^#+\s*/, '').trim())
                        );
                        if (isMainTitle) {
                          const displayTitle = firstLine.replace(/^#+\s*/, '').trim();
                          return (
                            <div key={bIdx} className="bg-gradient-to-r from-blue-50/90 via-indigo-50/70 to-slate-50 dark:from-slate-900 dark:via-indigo-950/30 dark:to-slate-900 border border-blue-200/80 dark:border-indigo-800/50 rounded-2xl p-5 sm:p-6 shadow-2xs">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#0030B6] dark:bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                                  <BookOpen className="w-5 h-5" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold uppercase tracking-wider text-[#0030B6] dark:text-indigo-400">
                                    Fiche de Révision Conforme
                                  </div>
                                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                                    <MathText text={displayTitle} />
                                  </h2>
                                </div>
                              </div>
                              {restLines.length > 0 && (
                                <div className="mt-4 space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                                  {restLines.map((rLine, rIdx) => (
                                    <div key={rIdx} className="flex items-start gap-2.5">
                                      <span className="w-2 h-2 rounded-full bg-[#0030B6] dark:bg-indigo-400 mt-2 shrink-0" />
                                      <span className="flex-1"><MathText text={rLine.replace(/^[•\-\*]\s*/, '')} /></span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        }

                        // Détection des sections et parties numérotées
                        const isNumberedHeader = /^\*{0,2}[0-9]+\.\s+/.test(firstLine);
                        const isMarkdownHeader = /^\*\*(.+?)\*\*|^###\s+/.test(firstLine);
                        const isAllCapHeader = /^[A-ZÀ-Ÿ\s]{3,}\s*:?$/.test(firstLine) || /^[A-ZÀ-Ÿ\s]{3,}\s+L['’]/.test(firstLine);
                        const isHeader = isNumberedHeader || isMarkdownHeader || isAllCapHeader;

                        let headerTitle = firstLine;
                        let headerBadge: string | null = null;
                        if (isNumberedHeader) {
                          const cleanFirst = firstLine.replace(/^\*\*|\*\*$/g, '').trim();
                          const numMatch = cleanFirst.match(/^([0-9]+)\.\s*(.*)/);
                          if (numMatch) {
                            headerBadge = numMatch[1];
                            const rawTitleText = numMatch[2].replace(/:$/, '').trim();
                            // Le titre conserve son numéro et son format bold canonique : "2. OBJECTIFS FONDAMENTAUX :"
                            headerTitle = `${numMatch[1]}. ${rawTitleText} :`;
                          }
                        } else if (isMarkdownHeader) {
                          headerTitle = firstLine.replace(/^\*\*|\*\*$/g, '').replace(/^###\s*/, '').replace(/:$/, '').trim();
                        } else if (isAllCapHeader) {
                          headerTitle = firstLine.replace(/:$/, '').trim();
                        }

                        // Icône contextuelle selon la thématique
                        let SectionIcon = Layers;
                        const lowerTitle = headerTitle.toLowerCase();
                        if (lowerTitle.includes('but') || lowerTitle.includes('objectif') || lowerTitle.includes('mission')) {
                          SectionIcon = Sparkles;
                        } else if (lowerTitle.includes('principe') || lowerTitle.includes('règle') || lowerTitle.includes('fondement')) {
                          SectionIcon = ShieldCheck;
                        } else if (lowerTitle.includes('organe') || lowerTitle.includes('structure') || lowerTitle.includes('institution')) {
                          SectionIcon = Layers;
                        } else if (lowerTitle.includes('bilan') || lowerTitle.includes('limite') || lowerTitle.includes('perspective') || lowerTitle.includes('succès')) {
                          SectionIcon = Award;
                        } else if (lowerTitle.includes('définition')) {
                          SectionIcon = BookOpen;
                        } else if (lowerTitle.includes('cause') || lowerTitle.includes('rupture') || lowerTitle.includes('divergence')) {
                          SectionIcon = Compass;
                        }

                        return (
                          <div key={bIdx} className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4">
                            {isHeader && (
                              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                                {headerBadge ? (
                                  <div className="w-7 h-7 rounded-lg bg-[#0030B6] dark:bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                                    {headerBadge}
                                  </div>
                                ) : (
                                  <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-indigo-950/60 text-[#0030B6] dark:text-indigo-400 flex items-center justify-center shrink-0">
                                    <SectionIcon className="w-4 h-4" />
                                  </div>
                                )}
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                                  <MathText text={headerTitle} />
                                </h3>
                              </div>
                            )}

                            <div className="space-y-3">
                              {(isHeader ? restLines : lines).map((line, lIdx) => {
                                const isBullet = line.startsWith('•') || line.startsWith('-') || line.startsWith('*');
                                const isIndented = line.startsWith('  ') || /^\s+[0-9]+\./.test(line) || /^\s+[-•]/.test(line);
                                const cleanLine = line.replace(/^[•\-\*]\s*/, '').trim();

                                // Détecte si la ligne interne est un titre numéroté (ex: "2. OBJECTIFS FONDAMENTAUX :")
                                const isNumberedTitle = /^\*{0,2}[0-9]+\.\s+[^\n:]{2,90}(?::|$)/.test(cleanLine);
                                if (isNumberedTitle) {
                                  const bolded = cleanLine.startsWith('**') ? cleanLine : `**${cleanLine.endsWith(':') ? cleanLine : `${cleanLine} :`}**`;
                                  return (
                                    <div key={lIdx} className="pt-3 pb-1 text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                                      <MathText text={bolded} />
                                    </div>
                                  );
                                }

                                if (isIndented) {
                                  return (
                                    <div key={lIdx} className="ml-4 sm:ml-6 pl-3 border-l-2 border-indigo-200 dark:border-indigo-800 py-1 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                                      <MathText text={cleanLine} />
                                    </div>
                                  );
                                }

                                return (
                                  <div key={lIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                                    {isBullet ? (
                                      <span className="w-2 h-2 rounded-full bg-[#0030B6] dark:bg-indigo-400 mt-2 shrink-0" />
                                    ) : (
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 mt-2 shrink-0" />
                                    )}
                                    <div className="flex-1">
                                      <MathText text={cleanLine} />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                }

                const rawSections = normalized.split(/(?=\n(?:[0-9]+\.\s+|À retenir\s+))/g);

                return (
                  <div className="space-y-6">
                    {rawSections.map((sec, idx) => {
                      const trimmed = sec.trim();
                      if (!trimmed) return null;

                      // Bloc "À retenir pour un devoir"
                      if (/^À retenir/i.test(trimmed)) {
                        const lines = trimmed.split('\n');
                        const title = lines[0];
                        const body = lines.slice(1).join('\n').trim();
                        return (
                          <div
                            key={idx}
                            className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-300/80 dark:border-amber-600/40 rounded-3xl p-5 sm:p-6 space-y-2.5 shadow-sm"
                          >
                            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-amber-900 dark:text-amber-300">
                              <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                              <span>{title}</span>
                            </div>
                            <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-medium">
                              <MathText text={body} />
                            </p>
                          </div>
                        );
                      }

                      // Section numérotée (ex: 1. RIMH et RIMC, 2. OBJECTIFS FONDAMENTAUX :)
                      const matchTitle = trimmed.match(/^(\*{0,2}[0-9]+\.\s+[^\n]+)\n*([\s\S]*)$/);
                      const sectionTitle = matchTitle ? matchTitle[1].replace(/^\*\*|\*\*$/g, '').trim() : '';
                      const sectionBody = matchTitle ? matchTitle[2] : trimmed;

                      return (
                        <div
                          key={idx}
                          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 space-y-4 shadow-xs"
                        >
                          {sectionTitle && (
                            <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                              <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-400 font-bold flex items-center justify-center text-sm shrink-0">
                                {sectionTitle.match(/^[0-9]+/)?.[0] || '•'}
                              </div>
                              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                                <MathText text={sectionTitle.endsWith(':') ? sectionTitle : `${sectionTitle} :`} />
                              </h3>
                            </div>
                          )}

                          <div className="space-y-3.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                            {sectionBody.split(/\n\s*\n/).map((para, pIdx) => {
                              const pTrim = para.trim();
                              if (!pTrim) return null;

                              // Schéma vertical avec flèches ↓
                              if (pTrim.includes('↓')) {
                                const steps = pTrim.split(/\s*↓\s*/).filter(Boolean);
                                return (
                                  <div key={pIdx} className="my-3 p-4 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-2xl">
                                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                                      Chaîne causale & Séquence d'infection :
                                    </div>
                                    <div className="flex flex-col items-center space-y-1.5">
                                      {steps.map((step, sIdx) => (
                                        <React.Fragment key={sIdx}>
                                          <div className="px-3.5 py-1.5 bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 rounded-xl text-xs sm:text-sm font-semibold text-indigo-900 dark:text-indigo-200 shadow-2xs text-center">
                                            {step}
                                          </div>
                                          {sIdx < steps.length - 1 && (
                                            <div className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">↓</div>
                                          )}
                                        </React.Fragment>
                                      ))}
                                    </div>
                                  </div>
                                );
                              }

                              // Schéma horizontal avec flèches →
                              if (pTrim.startsWith('Schéma :') || pTrim.startsWith('Schema :') || (pTrim.includes('→') && !pTrim.includes('\n'))) {
                                const isLabeled = /^Sch[eé]ma\s*:\s*/i.test(pTrim);
                                const flowText = pTrim.replace(/^Sch[eé]ma\s*:\s*/i, '').trim();
                                const flowSteps = flowText.split(/\s*→\s*/);
                                return (
                                  <div key={pIdx} className="my-2.5 p-3.5 bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-800/40 rounded-2xl">
                                    {isLabeled && (
                                      <div className="text-[11px] font-bold text-indigo-800 dark:text-indigo-300 uppercase tracking-wider mb-2">
                                        Schéma de la réaction :
                                      </div>
                                    )}
                                    <div className="flex flex-wrap items-center gap-2">
                                      {flowSteps.map((st, stIdx) => (
                                        <React.Fragment key={stIdx}>
                                          <span className="px-2.5 py-1 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-800/60 font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100 shadow-2xs">
                                            {st}
                                          </span>
                                          {stIdx < flowSteps.length - 1 && (
                                            <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                                          )}
                                        </React.Fragment>
                                      ))}
                                    </div>
                                  </div>
                                );
                              }

                              // Ligne avec 👉
                              if (pTrim.startsWith('👉')) {
                                return (
                                  <div key={pIdx} className="p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 rounded-xl font-semibold text-indigo-900 dark:text-indigo-200">
                                    <MathText text={pTrim} />
                                  </div>
                                );
                              }

                              // Paragraphe classique avec puces
                              return (
                                <div key={pIdx} className="space-y-1">
                                  {pTrim.split('\n').map((line, lIdx) => {
                                    const lTrim = line.trim();
                                    // Titre numéroté interne (ex: "2. OBJECTIFS FONDAMENTAUX :")
                                    if (/^\*{0,2}[0-9]+\.\s+[^\n:]{2,90}(?::|$)/.test(lTrim)) {
                                      const bolded = lTrim.startsWith('**') ? lTrim : `**${lTrim.endsWith(':') ? lTrim : `${lTrim} :`}**`;
                                      return (
                                        <div key={lIdx} className="pt-2.5 pb-1 font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                                          <MathText text={bolded} />
                                        </div>
                                      );
                                    }
                                    if (lTrim.startsWith('•') || lTrim.startsWith('-')) {
                                      return (
                                        <div key={lIdx} className="flex items-start gap-2 pl-2">
                                          <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                                          <span className="flex-1">
                                            <MathText text={lTrim.replace(/^[•\-]\s*/, '')} />
                                          </span>
                                        </div>
                                      );
                                    }
                                    return (
                                      <div key={lIdx}>
                                        <MathText text={line} />
                                      </div>
                                    );
                                  })}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              };

              return searchResult.directContent ? (
                <div className="space-y-6">
                  {renderDirectContent(searchResult.directContent)}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => setShowFullCourseForDirect(!showFullCourseForDirect)}
                      className="px-4 py-2.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800/60 text-indigo-900 dark:text-indigo-200 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-xs cursor-pointer"
                    >
                      <Lightbulb className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      <span>{showFullCourseForDirect ? "Masquer les Notions Fondamentales, Propriétés & Repères" : "Consulter les Notions Fondamentales, Propriétés & Repères"}</span>
                    </button>
                  </div>
                  {showFullCourseForDirect && (
                    <div className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800 animate-in fade-in duration-300">
                      {renderCadrage(false)}
                      {items.length > 0 && renderStandardConcepts()}
                    </div>
                  )}
                </div>
              ) : isCitationCorpus ? (
                renderCitationCorpus()
              ) : isArgCorpus ? (
                renderArgumentsCorpus()
              ) : (
                <>
                  {renderCadrage(false)}
                  {items.length > 0 && renderStandardConcepts()}
                </>
              );
            })()}

            {/* Exam Traps */}
            {!isArgCorpus && (!searchResult.directContent || showFullCourseForDirect) && searchResult.classicExamTraps && searchResult.classicExamTraps.length > 0 && (
              <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800/40 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span>Pièges Classiques d'Examen à Éviter</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-rose-900 dark:text-rose-200/90">
                  {searchResult.classicExamTraps.map((trap, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white/70 dark:bg-rose-950/40 p-2.5 rounded-xl border border-rose-100 dark:border-rose-900/30 shadow-2xs">
                      <span className="text-rose-600 dark:text-rose-400 font-bold mt-0.5">•</span>
                      <span>{trap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Revision Memo */}
            {!isArgCorpus && (!searchResult.directContent || showFullCourseForDirect) && searchResult.quickRevisionMemo && (
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-500/30 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 shadow-xs">
                <BookmarkPlus className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-semibold text-indigo-900 dark:text-indigo-300">Mémo Flash pour le Jour de l'Épreuve :</div>
                  <p className="leading-relaxed text-slate-800 dark:text-indigo-200">{searchResult.quickRevisionMemo}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
