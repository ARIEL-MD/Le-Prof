import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  BookOpen, 
  Compass, 
  Copy, 
  Check, 
  FileText, 
  ListOrdered, 
  ShieldCheck, 
  Lightbulb, 
  Target,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Quote,
  Library,
  BookMarked,
  LayoutGrid,
  AlignLeft,
  Search,
  Award,
  Globe,
  Maximize2,
  X
} from 'lucide-react';
import { MethodologyAnalysisResult, AssistanceLevel, SubPartData, DevelopmentPartData } from '../types';
import { StructuredExamRenderer, parseExamIntoExercises, cleanFinalAnswer } from './StructuredExamRenderer';
import { DirectRestitutionRenderer } from './DirectRestitutionRenderer';
import { AcademicPaperRenderer } from './AcademicPaperRenderer';
import { PhiloPreliminaryWorkView } from './PhiloPreliminaryWorkView';
import { FrancaisPreliminaryWorkView } from './FrancaisPreliminaryWorkView';
import { formatMathSymbols } from '../utils/mathFormatter';
import { MathText } from './MathText';

interface ScientificTheoremCard {
  id: string;
  category: string;
  badgeColor: string;
  title: string;
  formula: string;
  conditions?: string;
  examTip: string;
}

function getScientificCourseTheorems(subjectTitle: string, result: MethodologyAnalysisResult): ScientificTheoremCard[] {
  const cards: ScientificTheoremCard[] = [];
  const textCorpus = `${subjectTitle} ${result.disciplineIdentified || ''} ${result.exerciseTypeIdentified || ''} ${(result.sourceDecomposition?.fasciculeKnowledgeUsed || []).join(' ')} ${(result.sourceDecomposition?.fasciculeMethodologies || []).join(' ')} ${result.level5FullRedaction || ''}`.toLowerCase();

  const isPhysics = /physique|m[ée]canique|cin[ée]matique|newton|projectile|fl[èe]che|port[ée]e|pesanteur|gravit|satellite|kepler|vitesse orbitale|circuit|condensateur|bobine|oscillat|ressort|pendule|loi d'ohm|tec\b|energie cin[ée]tique|travail|puissance|optique|ondes?|radioactiv/i.test(textCorpus);
  const isChemistry = /chimie|st[œoe]chiom[ée]trie|mole\b|quantit[ée] de mati[èe]re|concentration|dosage|titrage|ph\b|acide|base|pka|avancement|r[ée]actif limitant|solution|tampon/i.test(textCorpus);
  const isSVT = /svt|biologie|g[ée]n[ée]tique|all[èe]le|g[èe]ne|chromosome|croisement|mendel|test-cross|dihybrid|monohybrid|hardy-weinberg|respiration|photosynth[èe]se|glyc[ée]mie|insuline|glucagon|tectonique|s[ée]isme|volcan|géothermie/i.test(textCorpus);
  const isStats = /statistique|r[ée]gression|ajustement|nuage de points|point moyen|covariance|variance|correl|moindres carr[ée]s|mayer/i.test(textCorpus);
  const isSequences = /suite|g[ée]om[ée]trique|arithm[ée]tique|u_n|v_n|u0|v0|raison|premier terme|somme/i.test(textCorpus);
  const isFunctions = /fonction|d[ée]riv|limite|int[ée]gral|primitive|variation|tvi|tangente|asymptote|exponentielle|logarithme|ln\(|e\^/i.test(textCorpus);
  const isComplex = /complexe|module|argument|forme trigonom[ée]trique|imaginaire|i\^2|affixe/i.test(textCorpus);
  const isProbabilities = /probabilit|d[ée]nombrement|combinaison|arrangement|factorielle|arbre pond[ée]r|loi binomiale|esp[ée]rance/i.test(textCorpus);

  // --- 1. PHYSIQUE ---
  if (isPhysics) {
    if (/cin[ée]matique|projectile|newton|fl[èe]che|port[ée]e|mouvement/i.test(textCorpus)) {
      cards.push({
        id: 'phys-newton',
        category: 'Mécanique & Dynamique',
        badgeColor: 'bg-indigo-950 text-indigo-300 border-indigo-700',
        title: "Deuxième Loi de Newton (Principe Fondamental de la Dynamique)",
        formula: "$\\sum \\vec{F}_{\\text{ext}} = m \\cdot \\vec{a}_G \\quad \\implies \\quad \\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{OM}}{dt^2}$",
        conditions: "Dans un référentiel galiléen, pour un système de masse constante $m$.",
        examTip: "Toujours préciser le système, le référentiel d'étude et le bilan des forces extérieures avant d'appliquer la 2e loi.",
      });

      cards.push({
        id: 'phys-projectile',
        category: 'Cinématique & Balistique',
        badgeColor: 'bg-sky-950 text-sky-300 border-sky-700',
        title: "Équations Horaires & Portée d'un Projectile",
        formula: "$x(t) = (v_0 \\cos\\alpha) t \\quad ; \\quad y(t) = -\\frac{1}{2}g t^2 + (v_0 \\sin\\alpha) t + y_0 \\quad ; \\quad x_P = \\frac{v_0^2 \\sin(2\\alpha)}{g}$",
        conditions: "Champ de pesanteur uniforme $\\vec{g} = -g\\vec{j}$ sans frottement.",
        examTip: "Pour trouver la flèche (sommet), poser $v_y(t_S) = 0 \\iff t_S = \\frac{v_0\\sin\\alpha}{g}$ puis calculer $y(t_S)$.",
      });
    }

    if (/energie|tec|travail|pesanteur|frottement/i.test(textCorpus) || isPhysics) {
      cards.push({
        id: 'phys-tec',
        category: 'Énergie & Théorème du TEC',
        badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-700',
        title: "Théorème de l'Énergie Cinétique (TEC)",
        formula: "$\\Delta E_c = E_{c,B} - E_{c,A} = \\frac{1}{2}m v_B^2 - \\frac{1}{2}m v_A^2 = \\sum W_{A \\to B}(\\vec{F})$",
        conditions: "$W(\\vec{P}) = mg(z_A - z_B)$ ; le travail d'une force perpendiculaire au déplacement est nul.",
        examTip: "Vérifier le signe du travail : moteur ($W > 0$) si la force favorise le mouvement, résistant ($W < 0$) sinon.",
      });
    }

    if (/condensateur|circuit|loi d'ohm|rc|rl|constante de temps/i.test(textCorpus)) {
      cards.push({
        id: 'phys-rc',
        category: 'Électronique & Circuits RC',
        badgeColor: 'bg-amber-950 text-amber-300 border-amber-700',
        title: "Charge d'un Condensateur & Constante de Temps $\\tau$",
        formula: "$u_C(t) = E\\left(1 - e^{-t/\\tau}\\right) \\quad \\text{avec } \\tau = R \\cdot C \\quad ; \\quad i(t) = \\frac{E}{R} e^{-t/\\tau}$",
        conditions: "À $t = 0$, $u_C(0) = 0\\,\\text{V}$. À $t = 5\\tau$, la charge atteint $99\\,\\%$ (régime permanent).",
        examTip: "Graphiquement, la tangente à l'origine coupe l'asymptote $u_C = E$ à l'abscisse $t = \\tau$.",
      });
    }

    if (/gravit|satellite|kepler/i.test(textCorpus)) {
      cards.push({
        id: 'phys-kepler',
        category: 'Gravitation & Kepler',
        badgeColor: 'bg-purple-950 text-purple-300 border-purple-700',
        title: "Vitesse Orbitale & Troisième Loi de Kepler",
        formula: "$v = \\sqrt{\\frac{G \\cdot M}{r}} \\quad ; \\quad \\frac{T^2}{r^3} = \\frac{4\\pi^2}{G \\cdot M} = \\text{constante}$",
        conditions: "Orbite circulaire de rayon $r = R_T + h$ dans le référentiel géocentrique galiléen.",
        examTip: "Ne pas oublier d'ajouter le rayon de la Terre $R_T$ à l'altitude $h$ : $r = R_T + h$ (en mètres).",
      });
    }
  }

  // --- 2. CHIMIE ---
  if (isChemistry) {
    cards.push({
      id: 'chem-stoichiometry',
      category: 'Stœchiométrie & Bilan de Matière',
      badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-700',
      title: "Quantité de Matière & Réactif Limitant",
      formula: "$n = \\frac{m}{M} = C \\times V = \\frac{V_{\\text{gaz}}}{V_m} \\quad ; \\quad x_{\\max} = \\min\\left(\\frac{n_0(A)}{a}, \\frac{n_0(B)}{b}\\right)$",
      conditions: "Pour une réaction d'équation $a\\,\\text{A} + b\\,\\text{B} \\to c\\,\\text{C} + d\\,\\text{D}$.",
      examTip: "Le réactif limitant est celui qui conduit à la plus petite valeur de l'avancement maximal $x_{\\max}$.",
    });

    cards.push({
      id: 'chem-ph-titration',
      category: 'Acido-Basicité & Titrage',
      badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-700',
      title: "pH & Équivalence d'un Titrage Acido-Basique",
      formula: "$\\text{pH} = \\text{pK}_a + \\log\\left(\\frac{[\\text{A}^-]}{[\\text{AH}]}\\right) \\quad ; \\quad C_A \\cdot V_{AE} = C_B \\cdot V_B$",
      conditions: "À l'équivalence, les réactifs titré et titrant sont introduits dans les proportions stœchiométriques.",
      examTip: "À la demi-équivalence ($V = V_{BE}/2$), on a $[\\text{A}^-] = [\\text{AH}]$ donc $\\text{pH} = \\text{pK}_a$.",
    });
  }

  // --- 3. SVT (Génétique, Métabolisme, Physiologie, Géologie) ---
  if (isSVT) {
    cards.push({
      id: 'svt-genetics',
      category: 'Génétique & Hérédité',
      badgeColor: 'bg-teal-950 text-teal-300 border-teal-700',
      title: "Proportions de Mendel & Taux de Recombinaison",
      formula: "$p = \\frac{\\text{Nombre d'individus recombinés}}{\\text{Effectif total}} \\times 100\\,\\% \\quad (p < 50\\,\\% \\implies \\text{gènes liés})$",
      conditions: "Test-cross : croisement d'un individu hétérozygote $F_1$ avec un récessif homozygote.",
      examTip: "4 phénotypes équiprobables ($25\\,\\%$ chacun) = 2 gènes indépendants. 2 phénotypes parentaux majoritaires = gènes liés.",
    });

    cards.push({
      id: 'svt-hardy-weinberg',
      category: 'Génétique des Populations',
      badgeColor: 'bg-indigo-950 text-indigo-300 border-indigo-700',
      title: "Équilibre de Hardy-Weinberg",
      formula: "$p + q = 1 \\quad \\implies \\quad p^2 + 2pq + q^2 = 1 \\quad (f(AA) = p^2, \\; f(Aa) = 2pq, \\; f(aa) = q^2)$",
      conditions: "Population panmictique, de grand effectif, sans mutation, sélection ni dérive génétique.",
      examTip: "Calculer d'abord la fréquence de l'allèle récessif $q = \\sqrt{f(aa)}$ avant d'en déduire $p = 1 - q$.",
    });

    cards.push({
      id: 'svt-respiration',
      category: 'Métabolisme & Énergie',
      badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-700',
      title: "Bilan Énergétique de la Respiration Cellulaire",
      formula: "$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\,\\text{O}_2 + 6\\,\\text{H}_2\\text{O} \\longrightarrow 6\\,\\text{CO}_2 + 12\\,\\text{H}_2\\text{O} + 36\\text{ à }38\\,\\text{ATP}$",
      conditions: "En milieu aérobie : glycolyse cytosolique + cycle de Krebs + chaîne respiratoire mitochondriale.",
      examTip: "Le rendement de la respiration ($\approx 40\\,\\%$) est très supérieur à celui de la fermentation ($2\\,\\text{ATP}$).",
    });
  }

  // --- 4. STATISTIQUES À DEUX VARIABLES ---
  if (isStats) {
    cards.push({
      id: 'stats-linear-regression',
      category: 'Statistiques à Deux Variables',
      badgeColor: 'bg-sky-950 text-sky-300 border-sky-700',
      title: "Ajustement Linéaire par les Moindres Carrés ($y = ax + b$)",
      formula: "$a = \\frac{\\text{Cov}(X, Y)}{V(X)} \\quad ; \\quad b = \\bar{y} - a\\bar{x} \\quad ; \\quad r = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\cdot \\sigma_Y}$",
      conditions: "Le point moyen $G(\\bar{x}, \\bar{y})$ appartient toujours à la droite de régression. Un ajustement est bon si $|r| \\ge 0{,}87$.",
      examTip: "Toujours vérifier que $G(\\bar{x}, \\bar{y})$ vérifie l'équation $y = ax + b$ trouvée pour valider son calcul.",
    });
  }

  // --- 5. MATHÉMATIQUES (Suites, Analyse, Complexes, Probabilités) ---
  if (isSequences || (!isPhysics && !isChemistry && !isSVT && !isStats && !isFunctions && !isComplex && !isProbabilities)) {
    cards.push({
      id: 'geom-explicit',
      category: 'Suites Géométriques',
      badgeColor: 'bg-indigo-950 text-indigo-300 border-indigo-700',
      title: "Terme général d'une suite géométrique",
      formula: "$v_n = v_p \\times q^{n - p} \\quad \\text{et pour } p = 0 : \\quad v_n = v_0 \\times q^n$",
      conditions: "Pour tout $n \\in \\mathbb{N}$ et $p \\in \\mathbb{N}$, avec une raison $q \\in \\mathbb{R}^*$.",
      examTip: "Pour calculer la raison $q$ à partir de deux termes $v_p$ et $v_q$ ($q > p$), poser $q^{q - p} = \\frac{v_q}{v_p}$ puis $q = \\left(\\frac{v_q}{v_p}\\right)^{\\frac{1}{q-p}}$.",
    });

    cards.push({
      id: 'geom-sum',
      category: 'Calcul de Somme',
      badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-700',
      title: "Somme des termes consécutifs d'une suite géométrique",
      formula: "$S_N = v_{\\text{premier}} \\times \\frac{1 - q^N}{1 - q} = v_{\\text{premier}} \\times \\frac{q^N - 1}{q - 1} \\quad (q \\neq 1)$",
      conditions: "Le nombre de termes vaut $N = n_{\\text{fin}} - n_{\\text{début}} + 1$. Pour $\\sum_{k=0}^n v_k$, $N = n + 1$.",
      examTip: "Attention au piège classique : $\\sum_{k=0}^{20} v_k$ contient $20 - 0 + 1 = 21$ termes et non 20 !",
    });

    cards.push({
      id: 'arith-explicit',
      category: 'Suites Arithmétiques',
      badgeColor: 'bg-sky-950 text-sky-300 border-sky-700',
      title: "Terme général d'une suite arithmétique",
      formula: "$u_n = u_p + (n - p)r \\quad \\text{et pour } p = 0 : \\quad u_n = u_0 + nr$",
      conditions: "Pour tout $n, p \\in \\mathbb{N}$, avec une raison constante $r \\in \\mathbb{R}$.",
      examTip: "La raison se détermine par la formule : $r = \\frac{u_q - u_p}{q - p}$.",
    });
  }

  if (isFunctions) {
    cards.push({
      id: 'func-derivatives',
      category: 'Dérivation & Analyse',
      badgeColor: 'bg-indigo-950 text-indigo-300 border-indigo-700',
      title: "Règles opératoires de dérivation",
      formula: "$(u \\cdot v)' = u'v + uv' \\quad ; \\quad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2} \\quad ; \\quad (e^u)' = u'e^u \\quad ; \\quad (\\ln(u))' = \\frac{u'}{u}$",
      conditions: "Sur tout intervalle où $u$ et $v$ sont dérivables, avec $v(x) \\neq 0$.",
      examTip: "Toujours poser $u(x)$, $v(x)$, $u'(x)$ et $v'(x)$ sur son brouillon avant d'appliquer la formule.",
    });

    cards.push({
      id: 'func-tvi',
      category: 'Théorème Fondamental',
      badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-700',
      title: "Théorème des Valeurs Intermédiaires (Corollaire de la Bijection)",
      formula: "Si $f$ est continue et strictement monotone sur $[a;b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet une unique solution $\\alpha \\in [a;b]$.",
      conditions: "Trois conditions : 1. Continuité ; 2. Stricte monotonie ; 3. $k \\in f([a;b])$.",
      examTip: "Citer explicitement les 3 hypothèses du théorème avant de conclure.",
    });
  }

  if (isComplex) {
    cards.push({
      id: 'complex-forms',
      category: 'Nombres Complexes',
      badgeColor: 'bg-amber-950 text-amber-300 border-amber-700',
      title: "Forme Trigonométrique & Formule de Moivre",
      formula: "$z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta} \\quad ; \\quad (\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$",
      conditions: "Avec $r = |z| = \\sqrt{a^2 + b^2} > 0$ et $\\theta = \\arg(z) \\pmod{2\\pi}$.",
      examTip: "Pour écrire sous forme exponentielle, factoriser toujours par le module $r$ en premier lieu.",
    });
  }

  if (isProbabilities) {
    cards.push({
      id: 'prob-binomial',
      category: 'Probabilités & Dénombrement',
      badgeColor: 'bg-teal-950 text-teal-300 border-teal-700',
      title: "Loi Binomiale $\\mathcal{B}(n, p)$ & Combinaisons",
      formula: "$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k} \\quad \\text{avec } \\binom{n}{k} = \\frac{n!}{k!(n - k)!} \\quad ; \\quad E(X) = n \\cdot p$",
      conditions: "Répétition de $n$ épreuves de Bernoulli identiques et indépendantes avec probabilité de succès $p$.",
      examTip: "Vérifier la condition $P(X \\ge 1) = 1 - P(X = 0)$ pour calculer rapidement la probabilité d'au moins un succès.",
    });
  }

  // Injecter les connaissances du référentiel si présentes
  if (result.sourceDecomposition?.fasciculeKnowledgeUsed && result.sourceDecomposition.fasciculeKnowledgeUsed.length > 0) {
    result.sourceDecomposition.fasciculeKnowledgeUsed.forEach((item, kIdx) => {
      if (cards.length < 8) {
        cards.push({
          id: `fascicule-know-${kIdx}`,
          category: 'Référentiel Officiel',
          badgeColor: 'bg-purple-950 text-purple-300 border-purple-700',
          title: `Règle de Référence #${kIdx + 1}`,
          formula: item,
          conditions: 'Conformité aux exigences du programme officiel.',
          examTip: "Appliquez rigoureusement cette propriété dans la résolution.",
        });
      }
    });
  }

  return cards;
}

interface ParsedMethodologyRule {
  label?: string;
  formula: string;
}

function parseMethodologyRules(rawRule: string): ParsedMethodologyRule[] {
  if (!rawRule) return [];
  const segments = rawRule.includes('\n')
    ? rawRule.split('\n').map(s => s.trim()).filter(Boolean)
    : rawRule.includes(';')
    ? rawRule.split(/\s*;\s*/).map(s => s.replace(/\s*\.\s*$/, '').trim()).filter(Boolean)
    : [rawRule.trim()];

  return segments.map(seg => {
    const colonIdx = seg.indexOf(':');
    if (colonIdx !== -1) {
      const potentialLabel = seg.substring(0, colonIdx).trim();
      const potentialFormula = seg.substring(colonIdx + 1).trim();
      if (potentialLabel.length > 0 && potentialLabel.length < 60 && potentialFormula.length > 0) {
        return { label: potentialLabel, formula: potentialFormula };
      }
    }
    return { formula: seg };
  });
}

interface AnalysisResultsViewProps {
  result: MethodologyAnalysisResult;
  subjectTitle: string;
  onSelectVariant?: (variantIndex: number) => void;
}

export const AnalysisResultsView: React.FC<AnalysisResultsViewProps> = ({
  result,
  subjectTitle,
  onSelectVariant,
}) => {
  const [activeTab, setActiveTab] = useState<'copie_integrale' | 'structured_redaction' | 'citations_index' | 'step_by_step'>('copie_integrale');
  const [copied, setCopied] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>('all');
  const [paragraphViewMode, setParagraphViewMode] = useState<'triad' | 'full' | 'both'>('both');
  const [copieDisplayMode, setCopieDisplayMode] = useState<'clean' | 'annotated'>('clean');
  const [fontFamily, setFontFamily] = useState<'sans' | 'serif'>('sans');
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [isFullscreenReader, setIsFullscreenReader] = useState(false);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);

  const fullRedactionText = useMemo(() => {
    let raw = result.level5FullRedaction || result.fullSynthesizedResponse || '';
    
    // Si structuredRedaction est présent, réparer un éventuel renvoi ou compléter la Troisième Partie
    if (result.structuredRedaction) {
      const sr = result.structuredRedaction;
      const introText = sr.introduction?.fullText || 
        [sr.introduction?.amorce, sr.introduction?.definitionTension, sr.introduction?.problematique, sr.introduction?.annoncePlan].filter(Boolean).join(' ');
      
      const p1Text = sr.development?.part1?.fullText || 
        sr.development?.part1?.subParts?.map((sp: any) => sp.fullText || [sp.argument, sp.explication].filter(Boolean).join(' ')).filter(Boolean).join('\n\n');
      
      const p2Text = sr.development?.part2?.fullText || 
        sr.development?.part2?.subParts?.map((sp: any) => sp.fullText || [sp.argument, sp.explication].filter(Boolean).join(' ')).filter(Boolean).join('\n\n');
      
      const p3Text = sr.development?.part3?.fullText || 
        sr.development?.part3?.subParts?.map((sp: any) => sp.fullText || [sp.argument, sp.explication].filter(Boolean).join(' ')).filter(Boolean).join('\n\n');
      
      const conclText = sr.conclusion?.fullText || 
        [sr.conclusion?.bilanSynthese, sr.conclusion?.reponseDefinitive, sr.conclusion?.elargissement].filter(Boolean).join(' ');

      const hasValidPart3Content = Boolean(introText || p1Text || conclText);

      if (hasValidPart3Content) {
        const fullPart3Markdown = [
          '## III. TROISIÈME PARTIE : COMMENTAIRE HISTORIQUE ORGANISÉ (10 points)',
          introText ? `### Introduction du commentaire\n${introText}` : '',
          '### Développement structuré',
          p1Text ? `#### 1. ${sr.development?.part1?.title || 'Premier axe d\'analyse'}\n${p1Text}` : '',
          sr.development?.transition1 ? `*Transition :* ${sr.development.transition1}` : '',
          p2Text ? `#### 2. ${sr.development?.part2?.title || 'Deuxième axe d\'analyse'}\n${p2Text}` : '',
          sr.development?.transition2 ? `*Transition :* ${sr.development.transition2}` : '',
          p3Text ? `#### 3. ${sr.development?.part3?.title || 'Troisième axe d\'analyse'}\n${p3Text}` : '',
          conclText ? `### Conclusion du commentaire\n${conclText}` : ''
        ].filter(Boolean).join('\n\n');

        // Cas A : Il y a un texte de renvoi comme "(Voir section structurée ci-dessous)" ou "Voir section"
        if (/(?:\(Voir|Voir|cf\.)\s+section\s+structur[ée]e[^\n\)]*\)?/i.test(raw)) {
          raw = raw.replace(/(?:##\s*III[^\n]*\n*)?(?:[^\n]*)(?:\(Voir|Voir|cf\.)\s+section\s+structur[ée]e[^\n\)]*\)?/i, fullPart3Markdown);
        } else if (!/##\s*III|TROISI[ÈE]ME\s+PARTIE/i.test(raw)) {
          // Cas B : La troisième partie est totalement absente du texte brut
          raw = `${raw.trim()}\n\n---\n\n${fullPart3Markdown}`;
        }
      }
    }

    return raw;
  }, [result.level5FullRedaction, result.fullSynthesizedResponse, result.structuredRedaction]);

  // Note: result.isFallback stays available on the payload for logs/analytics, but is
  // intentionally never surfaced in the UI — same continuity principle as ChatGPT silently
  // downgrading to a lighter model instead of showing an outage banner.
  const fallbackBanner = null;

  // Reliable structured resolution sent directly by the AI as JSON for Maths / Physique-Chimie / SVT
  // (see structuredScientificResolution). When present, this is passed straight into
  // StructuredExamRenderer instead of letting it re-parse the free-text redaction, which is what
  // used to produce messy, hard-to-follow displays when the raw text didn't perfectly match the
  // expected format.
  const scientificExercises = (result.structuredScientificResolution || [])
    .filter((ex) => ex && (ex.questions?.length || ex.introContext))
    .map((ex, exIdx) => ({
      id: `sci-ex-${exIdx + 1}`,
      title: ex.title || `Exercice ${exIdx + 1}`,
      points: ex.points || undefined,
      introContext: ex.introContext || undefined,
      questions: (ex.questions || []).map((q) => ({
        raw: [q.titleOrPrompt, ...(q.steps || []), q.finalAnswer].filter(Boolean).join('\n'),
        numberLabel: q.numberLabel,
        titleOrPrompt: q.titleOrPrompt || undefined,
        steps: (q.steps || []).map((s) => formatMathSymbols(s)),
        finalAnswer: q.finalAnswer ? cleanFinalAnswer(q.finalAnswer) : undefined,
      })),
    }));

  const isForeignLanguage = /allemand|deutsch|german|anglais|english|espagnol|spanish|español/i.test(
    (result.disciplineIdentified || '') + ' ' + subjectTitle + ' ' + (result.exerciseTypeIdentified || '')
  );

  const isPhiloDiscipline = /philosophie|philo\b/i.test(
    (result.disciplineIdentified || '') + ' ' + (result.exerciseTypeIdentified || '')
  );

  const isLiteraryOrHumanities = isPhiloDiscipline || /fran[çc]ais|litt[ée]rature|lettres|histoire|g[ée]ographie/i.test(
    (result.disciplineIdentified || '') + ' ' + (result.exerciseTypeIdentified || '')
  );

  const isScientificDiscipline = /math[ée]matiques?|maths?|physique|chimie|svt|biologie|g[ée]ologie|sciences physiques|sciences de la vie|sciences naturelles/i.test(
    (result.disciplineIdentified || '') + ' ' + (result.exerciseTypeIdentified || '')
  );

  const hasScientificIndicators =
    !isLiteraryOrHumanities &&
    (Boolean(result.structuredScientificResolution && result.structuredScientificResolution.length > 0) ||
      isScientificDiscipline ||
      /math[ée]matiques?|maths?|physique|chimie|svt/i.test(result.disciplineIdentified || '') ||
      /calcul\b|calcule\b|fonction\b|suite\b|intégrale|primitive|dérivée|complexe|probabilité|barycentre|matrice|vecteur|équation|inéquation|pythagore|thal[èe]s|fraction\b|factoriser|démontrer\b|f\(x\)|f\([0-9]+\)|f'\(x\)|1\+1|\d+\s*[\+\-\*\/×÷\^=]\s*\d+|(?<![a-zA-Z])[a-zA-Z]\s*=\s*[-+]?\d+|limite\b|continuit[ée]\b|prolongement\b|tableau de variation|tableau de signe|trin[ôo]me|polyn[ôo]me|discriminant|dérivabilité|stœchiométrie|molaire|titrage|\bexo\b|exercice\s*\d/i.test(
        (result.disciplineIdentified || '') + ' ' + subjectTitle + ' ' + (result.exerciseTypeIdentified || '')
      ));

  const isMath = !isForeignLanguage && !isLiteraryOrHumanities && hasScientificIndicators;

  const isComplexDocumentOrEssay = !isMath && (
    /dissertation|commentaire\s*(?:compos[ée]|de texte|de document|historique)?|situation d['’]evaluation|[ée]tude de document|texte argumentatif|sujet de r[ée]flexion|essai philosophique|essai/i.test(
      (result.exerciseTypeIdentified || '') + ' ' + (result.fasciculeMethodologyActivated?.name || '') + ' ' + subjectTitle
    ) || subjectTitle.trim().length > 250
  );

  const isDirectQuestionOrRestitution =
    !isForeignLanguage &&
    !isMath &&
    !isComplexDocumentOrEssay &&
    (Boolean(result.isDirectRestitution) ||
      /restitution|question directe|questions? de cours|chronologie|notions? & concepts|d[ée]finition/i.test(
        (result.exerciseTypeIdentified || '') + ' ' + (result.fasciculeMethodologyActivated?.name || '')
      ) ||
      (/\b(cite|citez|liste|listez|enumere|énumère|énumérez|donne|donnez|nomme|nommez|mentionne|mentionnez|quels sont|quelles sont|quel est|quelle est|définis|définir|définissez|qu'est-ce que|qu'est ce que|caractérise|caractérisez|précise|précisez|indique|indiquez)\b/i.test(subjectTitle) &&
        !/\b(dissertation|rédige|redige|discutez|dans quelle mesure|partages-tu|commentaire|document)\b/i.test(subjectTitle) &&
        subjectTitle.trim().length < 200) ||
      (!/\b(dissertation|rédige|redige|discutez|dans quelle mesure|partages-tu|commentaire|document)\b/i.test(subjectTitle) &&
        subjectTitle.trim().length < 140 &&
        !/\?.*\?/.test(subjectTitle) &&
        /\b(relief\w*|climat\w*|fleuve\w*|hydrographie|atout\w*|facteur\w*|cause\w*|conséquence\w*|définition|notion)\b/i.test(subjectTitle)));

  const isArgumentCorpus = Boolean(result.isDirectRestitution) && /argument|recherche d['’]arguments/i.test(
    `${result.exerciseTypeIdentified || ''} ${result.fasciculeMethodologyActivated?.name || ''} ${subjectTitle}`
  );

  const isExplicitDissertationOrEssay = !isMath && !isDirectQuestionOrRestitution && (/dissertation|commentaire\s*(?:compos[ée]|de texte|de document|historique)?|production [ée]crite|texte argumentatif|sujet de r[ée]flexion|essai philosophique|essai/i.test(
    (result.exerciseTypeIdentified || '') + ' ' + subjectTitle
  ) || isComplexDocumentOrEssay);

  const isAcademicPaper = !isMath && (
    Boolean(result.isAcademicPaper) || 
    Boolean(result.academicPaperType) ||
    /commentaire\s*(?:de\s*document|historique|de\s*texte)|situation\s*d['’]evaluation|[ée]tude\s*de\s*document/i.test(
      (result.exerciseTypeIdentified || '') + ' ' + (result.academicPaperType || '') + ' ' + subjectTitle
    )
  );

  const isPhilo = !isForeignLanguage && !isScientificDiscipline && !isDirectQuestionOrRestitution && /philosophie|philo\b/i.test(
    (result.disciplineIdentified || '') + ' ' + subjectTitle + ' ' + (result.exerciseTypeIdentified || '')
  );

  const hasValidPhiloWork = Boolean(
    isPhilo &&
    result.philoPreliminaryWork &&
    (result.philoPreliminaryWork.problematisation?.probleme ||
      (result.philoPreliminaryWork.lexiqueDefinitions && result.philoPreliminaryWork.lexiqueDefinitions.length > 0))
  );

  const isFrancaisDissertation = !isForeignLanguage && !isScientificDiscipline && !isDirectQuestionOrRestitution && /fran[çc]ais|litt[ée]rature|dissertation litt[ée]raire/i.test(
    (result.disciplineIdentified || '') + ' ' + subjectTitle + ' ' + (result.exerciseTypeIdentified || '')
  );

  const hasValidFrancaisWork = Boolean(
    result.francaisPreliminaryWork &&
    (result.francaisPreliminaryWork.introductionMethodique?.texteComplet ||
      (result.francaisPreliminaryWork.analyseDuSujet?.motsCles && result.francaisPreliminaryWork.analyseDuSujet.motsCles.length > 0))
  );

  const renderStructuredExamBlocks = (text: string) => {
    if (!text) return null;
    return (
      <AcademicPaperRenderer
        content={text}
        subjectTitle={subjectTitle}
        discipline={result.disciplineIdentified}
      />
    );
  };

  const renderEnrichedText = (text: string) => {
    if (!text) return null;
    return <MathText text={text} />;
  };

  const handleCopy = (textToCopy?: string) => {
    navigator.clipboard.writeText(textToCopy || fullRedactionText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const structured = result.structuredRedaction;

  // Extract individual clean paragraphs for the ready-to-hand-in examination paper
  const introParagraph = structured?.introduction?.fullText || 
    `${structured?.introduction?.amorce || ''} ${structured?.introduction?.definitionTension || ''} ${structured?.introduction?.problematique || ''} ${structured?.introduction?.annoncePlan || ''}`.trim();

  const part1Chapeau = structured?.development?.part1?.thesisOverview?.trim();
  const part1SubParagraphs = (structured?.development?.part1?.subParts || []).map((sp) => {
    return sp.fullText || `${sp.argument} ${sp.explication} ${sp.illustration ? `Comme l'illustre ${sp.illustration.auteur} dans ${sp.illustration.oeuvre} : « ${sp.illustration.citation} ». ${sp.illustration.analyseIllustration}` : ''}`.trim();
  });
  const part1Fallback = (!part1SubParagraphs.length && structured?.development?.part1?.fullText) ? [structured.development.part1.fullText] : [];

  const transition1Paragraph = structured?.development?.transition1?.trim();

  const part2Chapeau = structured?.development?.part2?.thesisOverview?.trim();
  const part2SubParagraphs = (structured?.development?.part2?.subParts || []).map((sp) => {
    return sp.fullText || `${sp.argument} ${sp.explication} ${sp.illustration ? `Comme l'illustre ${sp.illustration.auteur} dans ${sp.illustration.oeuvre} : « ${sp.illustration.citation} ». ${sp.illustration.analyseIllustration}` : ''}`.trim();
  });
  const part2Fallback = (!part2SubParagraphs.length && structured?.development?.part2?.fullText) ? [structured.development.part2.fullText] : [];

  const transition2Paragraph = structured?.development?.transition2?.trim();
  const part3Chapeau = structured?.development?.part3?.thesisOverview?.trim();
  const part3SubParagraphs = (structured?.development?.part3?.subParts || []).map((sp) => {
    return sp.fullText || `${sp.argument} ${sp.explication} ${sp.illustration ? `Comme l'illustre ${sp.illustration.auteur} dans ${sp.illustration.oeuvre} : « ${sp.illustration.citation} ». ${sp.illustration.analyseIllustration}` : ''}`.trim();
  });
  const part3Fallback = (!part3SubParagraphs.length && structured?.development?.part3?.fullText) ? [structured.development.part3.fullText] : [];

  const conclusionParagraph = structured?.conclusion?.fullText || 
    `${structured?.conclusion?.bilanSynthese || ''} ${structured?.conclusion?.reponseDefinitive || ''} ${structured?.conclusion?.elargissement || ''}`.trim();

  const rawFullText = (fullRedactionText || result.level5FullRedaction || result.fullSynthesizedResponse || '').trim();
  const hasNumberedQuestionsOrExamSections = /^(?:#{1,3}\s*|[1-9]\d?[\.\)]\s+|Question\s+\d|Exercice\s+[I|V|X\d]+|[I|V|X]+[\.\:\-]\s*|Partie\s+[A-Z\d]|Section\s+[A-Z\d])/im.test(rawFullText);
  const hasStructuredEssayParts = Boolean(
    introParagraph.trim() &&
    (part1SubParagraphs.length > 0 || part1Fallback.length > 0 || part1Chapeau)
  );

  const shouldUseAcademicPaperRenderer =
    !isMath &&
    !isDirectQuestionOrRestitution &&
    !hasStructuredEssayParts &&
    (
      isAcademicPaper ||
      hasNumberedQuestionsOrExamSections ||
      (isForeignLanguage && !isExplicitDissertationOrEssay) ||
      (!introParagraph.trim() && !part1SubParagraphs.length && !part1Fallback.length && !conclusionParagraph.trim())
    );

  // Generate 100% clean continuous redaction string (for copying / rendering ready to submit)
  const getCleanReadyToSubmitEssay = (withIndentation = true): string => {
    if (isDirectQuestionOrRestitution) {
      return (result.level5FullRedaction || result.fullSynthesizedResponse || '').trim();
    }
    if (isMath) {
      const raw = result.level5FullRedaction || result.fullSynthesizedResponse || '';
      if (scientificExercises && scientificExercises.length > 0) {
        return scientificExercises.map((ex) => {
          let str = `===================================================\n`;
          str += `${ex.title.toUpperCase()} ${ex.points ? `(${ex.points})` : ''}\n`;
          str += `===================================================\n\n`;
          if (ex.introContext) str += `${ex.introContext}\n\n`;
          ex.questions.forEach((q) => {
            str += `${q.numberLabel} ${q.titleOrPrompt || ''}\n`;
            if (q.steps && q.steps.length > 0) {
              q.steps.forEach((st) => {
                str += `   • ${st}\n`;
              });
            }
            if (q.finalAnswer) {
              str += `   ➜ RÉSULTAT FINAL : ${q.finalAnswer}\n`;
            }
            str += '\n';
          });
          return str.trim();
        }).join('\n\n\n');
      }
      const parsed = parseExamIntoExercises(raw);
      if (parsed && parsed.length > 0) {
        return parsed.map((ex) => {
          let str = `===================================================\n`;
          str += `${ex.title.toUpperCase()} ${ex.points ? `(${ex.points})` : ''}\n`;
          str += `===================================================\n\n`;
          if (ex.introContext) str += `${ex.introContext}\n\n`;
          ex.questions.forEach((q) => {
            str += `${q.numberLabel} ${q.titleOrPrompt || ''}\n`;
            if (q.steps && q.steps.length > 0) {
              q.steps.forEach((st) => {
                str += `   • ${st}\n`;
              });
            }
            if (q.finalAnswer) {
              str += `   ➜ RÉSULTAT FINAL : ${q.finalAnswer}\n`;
            }
            str += '\n';
          });
          return str.trim();
        }).join('\n\n\n');
      }
      return raw.trim();
    }

    const indentPrefix = withIndentation ? "    " : "";
    const blocks: string[] = [];

    // 1. Introduction
    if (introParagraph && introParagraph.trim()) {
      blocks.push(`${indentPrefix}${introParagraph.trim()}`);
    }

    // 2. Développement - Axe 1
    const p1List: string[] = [];
    if (part1Chapeau && part1Chapeau.trim()) {
      p1List.push(`${indentPrefix}${part1Chapeau.trim()}`);
    }
    const p1Subs = part1SubParagraphs.length > 0 ? part1SubParagraphs : part1Fallback;
    p1Subs.forEach(p => {
      if (p && p.trim()) p1List.push(`${indentPrefix}${p.trim()}`);
    });
    if (p1List.length > 0) {
      blocks.push(p1List.join("\n\n"));
    }

    // 3. Transition 1
    if (transition1Paragraph && transition1Paragraph.trim()) {
      blocks.push(`${indentPrefix}${transition1Paragraph.trim()}`);
    }

    // 4. Développement - Axe 2
    const p2List: string[] = [];
    if (part2Chapeau && part2Chapeau.trim()) {
      p2List.push(`${indentPrefix}${part2Chapeau.trim()}`);
    }
    const p2Subs = part2SubParagraphs.length > 0 ? part2SubParagraphs : part2Fallback;
    p2Subs.forEach(p => {
      if (p && p.trim()) p2List.push(`${indentPrefix}${p.trim()}`);
    });
    if (p2List.length > 0) {
      blocks.push(p2List.join("\n\n"));
    }

    // 5. Transition 2 & Axe 3 (if applicable)
    if (transition2Paragraph && transition2Paragraph.trim()) {
      blocks.push(`${indentPrefix}${transition2Paragraph.trim()}`);
    }
    if (part3Chapeau || part3SubParagraphs.length > 0 || part3Fallback.length > 0) {
      const p3List: string[] = [];
      if (part3Chapeau && part3Chapeau.trim()) p3List.push(`${indentPrefix}${part3Chapeau.trim()}`);
      const p3Subs = part3SubParagraphs.length > 0 ? part3SubParagraphs : part3Fallback;
      p3Subs.forEach(p => {
        if (p && p.trim()) p3List.push(`${indentPrefix}${p.trim()}`);
      });
      if (p3List.length > 0) blocks.push(p3List.join("\n\n"));
    }

    // 6. Conclusion
    if (conclusionParagraph && conclusionParagraph.trim()) {
      blocks.push(`${indentPrefix}${conclusionParagraph.trim()}`);
    }

    const structuredResult = blocks.join("\n\n\n").trim();
    const sourceRaw = (result.level5FullRedaction || result.fullSynthesizedResponse || '').trim();

    if (sourceRaw && sourceRaw.length >= Math.max(80, structuredResult.length)) {
      return sourceRaw;
    }
    if (structuredResult && structuredResult.length >= 80) {
      return structuredResult;
    }
    if (sourceRaw) {
      return sourceRaw;
    }

    return structuredResult || '';
  };

  const cleanEssayText = getCleanReadyToSubmitEssay(true);
  const wordCount = cleanEssayText ? cleanEssayText.trim().split(/\s+/).length : 0;
  const readTimeMinutes = Math.max(1, Math.round(wordCount / 180));

  // Extract all citations and works from the development parts
  const collectAllIllustrations = () => {
    const illustrations: Array<{
      partTitle: string;
      subPartLetter: string;
      argument: string;
      auteur: string;
      oeuvre: string;
      citation: string;
      analyseIllustration: string;
    }> = [];

    const parts: Array<DevelopmentPartData | undefined> = [
      structured?.development?.part1,
      structured?.development?.part2,
      structured?.development?.part3,
    ];

    parts.forEach((part, pIdx) => {
      if (!part) return;
      const partName = part.title || `Partie ${pIdx + 1}`;

      if (Array.isArray(part.subParts) && part.subParts.length > 0) {
        part.subParts.forEach((sp) => {
          if (sp.illustration) {
            illustrations.push({
              partTitle: partName,
              subPartLetter: sp.subPartLetter || 'A',
              argument: sp.argument || '',
              auteur: sp.illustration.auteur || '',
              oeuvre: sp.illustration.oeuvre || '',
              citation: sp.illustration.citation || '',
              analyseIllustration: sp.illustration.analyseIllustration || '',
            });
          }
        });
      }
    });

    return illustrations;
  };

  const allIllustrations = collectAllIllustrations();

  // Helper to render subparts cleanly
  const renderSubPartContent = (subPart: SubPartData, idx: number) => {
    return (
      <div key={idx} className="bg-white border border-slate-300 dark:bg-slate-900 dark:border-slate-800 rounded-lg p-4 space-y-3.5 transition-colors">
        {/* Subpart Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 font-mono font-bold text-xs flex items-center justify-center border">
              {subPart.subPartLetter || `§${idx + 1}`}
            </span>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              {subPart.title || `Sous-partie ${subPart.subPartLetter}`}
            </h4>
          </div>
          <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 border">
            Triade Académique
          </span>
        </div>

        {/* TRIAD VIEW (Argument + Explication + Illustration) */}
        {(paragraphViewMode === 'triad' || paragraphViewMode === 'both') && (
          <div className="space-y-3">
            {/* 1. L'ARGUMENT */}
            <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-lg border border-slate-300 dark:border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <Target className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
                <span>1. L'Argument (Idée directrice) :</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium pl-5 leading-relaxed">
                <MathText text={subPart.argument} />
              </div>
            </div>

            {/* 2. L'EXPLICATION */}
            <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-lg border border-slate-300 dark:border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <Lightbulb className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
                <span>2. L'Explication (Raisonnement conceptuel) :</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 pl-5 leading-relaxed">
                <MathText text={subPart.explication} />
              </div>
            </div>

            {/* 3. L'ILLUSTRATION (Auteur + Œuvre + Citation + Analyse) */}
            {subPart.illustration && (
              <div className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-lg border border-slate-300 dark:border-slate-800 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <Quote className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
                    <span>3. L'Illustration & Citation :</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-200 text-slate-800 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 border flex items-center gap-1">
                      <GraduationCap className="w-3 h-3 text-slate-500" />
                      {subPart.illustration.auteur}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 border italic">
                      {subPart.illustration.oeuvre}
                    </span>
                  </div>
                </div>

                {/* Citation Textuelle */}
                {subPart.illustration.citation && (
                  <div className="bg-white dark:bg-slate-900 p-3 rounded border-l-2 border-slate-400 dark:border-slate-600 border-y border-r border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-100 font-serif italic">
                    <MathText text={subPart.illustration.citation} />
                  </div>
                )}

                {/* Analyse de la citation */}
                {subPart.illustration.analyseIllustration && (
                  <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-2.5 rounded border border-slate-200 dark:border-slate-800 flex items-start gap-2">
                    <span className="text-slate-900 dark:text-slate-100 font-semibold shrink-0">Portée :</span>
                    <div><MathText text={subPart.illustration.analyseIllustration} /></div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* FULL REDACTED PARAGRAPH */}
        {(paragraphViewMode === 'full' || paragraphViewMode === 'both') && (
          <div className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <AlignLeft className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                Paragraphe rédigé en continu :
              </span>
              <button
                onClick={() => handleCopy(subPart.fullText)}
                className="text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-1 cursor-pointer"
                title="Copier ce paragraphe"
              >
                <Copy className="w-3 h-3" />
                Copier
              </button>
            </div>
            <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm leading-relaxed font-serif whitespace-pre-line text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified">
              <MathText text={subPart.fullText} />
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderDevelopmentPart = (part: DevelopmentPartData, partKey: string, badgeNumber: number) => {
    const isExpanded = expandedSection === partKey || expandedSection === 'all';

    return (
      <div key={partKey} className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg overflow-hidden">
        <div 
          onClick={() => setExpandedSection(isExpanded ? null : partKey)}
          className="p-3.5 sm:p-4 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 font-mono font-bold text-xs flex items-center justify-center border shrink-0">
              {badgeNumber}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {part.title || `Partie ${badgeNumber}`}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {part.thesisOverview || 'Argumentation structurée en sous-parties canoniques'}
              </p>
            </div>
          </div>
          {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-500 dark:text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />}
        </div>

        {isExpanded && (
          <div className="p-4 sm:p-5 space-y-4 sm:space-y-5">
            {/* SubParts List */}
            {Array.isArray(part.subParts) && part.subParts.length > 0 ? (
              <div className="space-y-4">
                {part.subParts.map((sp, idx) => renderSubPartContent(sp, idx))}
              </div>
            ) : (
              /* Fallback for simple string subparts */
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-lg border border-slate-300 dark:border-slate-800">
                    <span className="font-semibold text-slate-900 dark:text-slate-100 block mb-1">A. Sous-partie A :</span>
                    <p className="text-slate-700 dark:text-slate-300">{part.subPartA}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-lg border border-slate-300 dark:border-slate-800">
                    <span className="font-semibold text-slate-900 dark:text-slate-100 block mb-1">B. Sous-partie B :</span>
                    <p className="text-slate-700 dark:text-slate-300">{part.subPartB}</p>
                  </div>
                </div>
                <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm leading-relaxed font-serif whitespace-pre-line text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified">
                  {part.fullText}
                </div>
              </div>
            )}

            {/* Transition */}
            {partKey === 'part1' && structured?.development?.transition1 && (
              <div className="bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 p-3 rounded-lg text-xs text-slate-800 dark:text-slate-200">
                <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">Transition rédigée (Partie I ➔ Partie II) :</span>
                <p className="italic">« {structured.development.transition1} »</p>
              </div>
            )}

            {partKey === 'part2' && structured?.development?.transition2 && (
              <div className="bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 p-3 rounded-lg text-xs text-slate-800 dark:text-slate-200">
                <span className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">Transition rédigée (Partie II ➔ Partie III) :</span>
                <p className="italic">« {structured.development.transition2} »</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div id="analysis-results-card" className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl shadow-xs overflow-hidden transition-colors">
      {fallbackBanner && <div className="p-3 sm:p-4 pb-0">{fallbackBanner}</div>}
      
      {/* Header Banner — repliable pour alléger la page et aller droit au but sur mobile */}
      {(!isMath && (Boolean(result.conceptualDisambiguation?.hasAmbiguousTerm) || Boolean(result.subjectNatureAnalysis) || Boolean(result.pedagogicalTransferExplanation && !isForeignLanguage && !isDirectQuestionOrRestitution))) && (
        <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 transition-colors">
          {/* Barre de titre accordéon discrète */}
          <button
            type="button"
            onClick={() => setIsMethodologyOpen((prev) => !prev)}
            className="w-full flex items-center justify-between px-3 sm:px-5 py-2.5 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors text-left cursor-pointer"
            aria-expanded={isMethodologyOpen}
          >
            <div className="flex items-center gap-2 min-w-0">
              <Compass className="w-4 h-4 text-slate-600 dark:text-slate-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                Repères & Analyse du sujet
                {result.subjectNatureAnalysis?.recommendedAxesCount ? ` (${result.subjectNatureAnalysis.recommendedAxesCount} axes)` : ''}
              </span>
              {result.subjectNatureAnalysis?.subjectType && (
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                  {result.subjectNatureAnalysis.subjectType}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 shrink-0">
              <span>{isMethodologyOpen ? 'Masquer' : 'Voir les repères'}</span>
              {isMethodologyOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </div>
          </button>

          {/* Contenu détaillé affiché uniquement à la demande */}
          {isMethodologyOpen && (
            <div className="p-3.5 sm:p-5 pt-1 border-t border-slate-200/70 dark:border-slate-800/70 space-y-3 animate-in fade-in duration-150">
              {/* Conceptual Disambiguation */}
              {result.conceptualDisambiguation?.hasAmbiguousTerm && (
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-3 space-y-1">
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wide flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                    Terme ambigu détecté : « {result.conceptualDisambiguation.term} »
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300">
                    Sens possibles : {result.conceptualDisambiguation.possibleMeanings.join(' • ')}
                  </p>
                  <p className="text-xs text-slate-800 dark:text-slate-200">
                    <strong>Sens retenu ici :</strong> {result.conceptualDisambiguation.retainedMeaning}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                    {result.conceptualDisambiguation.justification}
                  </p>
                </div>
              )}

              {/* Subject Nature Analysis */}
              {result.subjectNatureAnalysis && (
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-3 sm:p-4 space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-2">
                    <span className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wide">
                      Reconnaissance & Choix du Plan
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {result.subjectNatureAnalysis.detectedGeographicContext && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                          <Globe className="w-3 h-3 text-slate-600 dark:text-slate-400" />
                          {result.subjectNatureAnalysis.detectedGeographicContext}
                        </span>
                      )}
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                        Type : {result.subjectNatureAnalysis.subjectType}
                      </span>
                    </div>
                  </div>

                  {result.subjectNatureAnalysis.detectedCurriculumMethodology && (
                    <div className="text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800">
                      <strong className="text-slate-900 dark:text-slate-200">Stratégie clé :</strong>{' '}
                      {result.subjectNatureAnalysis.detectedCurriculumMethodology}
                    </div>
                  )}

                  {result.subjectNatureAnalysis.tensionOrOpposition && (
                    <div className="text-xs text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 rounded-lg p-2.5 space-y-1 border border-slate-200 dark:border-slate-800">
                      <strong className="block text-slate-900 dark:text-slate-200">Tension / Problématique :</strong>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        <MathText text={result.subjectNatureAnalysis.tensionOrOpposition} />
                      </p>
                    </div>
                  )}

                  <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 text-xs space-y-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                      Plan retenu : {result.subjectNatureAnalysis.recommendedAxesCount} axes
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      <MathText text={result.subjectNatureAnalysis.justificationPlan} />
                    </p>
                  </div>
                </div>
              )}

              {result.pedagogicalTransferExplanation && !isForeignLanguage && !isDirectQuestionOrRestitution && (
                <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-300 dark:border-slate-700 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-slate-200">
                    <Lightbulb className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                    <span>L'Astuce du Prof :</span>
                  </div>
                  <div className="text-xs text-slate-800 dark:text-slate-300 leading-relaxed">
                    <MathText text={result.pedagogicalTransferExplanation} />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Navigation Tabs */}
      {!isArgumentCorpus && (
      <div className="sticky top-0 z-20 px-2 sm:px-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <div className="w-full py-1.5">
          <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100/90 dark:bg-slate-900/90 rounded-xl sm:bg-transparent sm:dark:bg-transparent sm:p-0 sm:flex sm:items-center sm:gap-1.5">
            {[
              { id: 'copie_integrale' as const, shortLabel: isDirectQuestionOrRestitution ? 'Réponse' : 'Corrigé', label: isMath ? 'Corrigé & Copie' : (isDirectQuestionOrRestitution ? 'Réponse Directe' : 'Corrigé & Copie'), icon: FileText },
              { id: 'structured_redaction' as const, shortLabel: 'Méthode', label: isMath ? 'Guide Méthode' : (isDirectQuestionOrRestitution ? 'Décomposition' : 'Décomposition Méthodique'), icon: LayoutGrid },
              { id: 'citations_index' as const, shortLabel: isMath ? 'Formules' : (isDirectQuestionOrRestitution ? 'Repères' : 'Auteurs'), label: isMath ? 'Formules Clés' : (isDirectQuestionOrRestitution ? `Repères (${allIllustrations.length})` : `Index Auteurs (${allIllustrations.length})`), icon: Library },
              { id: 'step_by_step' as const, shortLabel: 'Étapes', label: isMath ? 'Calculs Pas-à-Pas' : 'Démarche Pas-à-Pas', icon: ListOrdered },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-1 sm:gap-1.5 px-1.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-bold sm:font-semibold transition-all cursor-pointer min-w-0 text-center ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                  }`}
                  title={tab.label}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{tab.shortLabel}</span>
                  <span className="hidden md:inline font-normal opacity-90 whitespace-nowrap">{tab.label.replace(tab.shortLabel, '')}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      )}

      {/* TAB CONTENT */}
      <div className="p-3 sm:p-6 pt-3 sm:pt-4 space-y-4">

        {/* ========================================================
            TAB 0: COPIE INTÉGRALE IN EXTENSO (PRÊTE À RENDRE)
           ======================================================== */}
        {activeTab === 'copie_integrale' && (
          <div className="space-y-4 sm:space-y-6">
            {/* Reading Toolbar & Copy Actions */}
            <div className="p-2.5 sm:p-3.5 rounded-lg border flex flex-wrap items-center justify-between gap-2.5 bg-slate-50 border-slate-300 dark:bg-slate-900/90 dark:border-slate-800">
              {/* Copy Label */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <FileText className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span>Copie rédigée</span>
              </div>

              {/* Actions & Fullscreen Reader Button */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Fullscreen Reader Mode Button */}
                <button
                  type="button"
                  onClick={() => setIsFullscreenReader(true)}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer bg-white hover:bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 dark:border-slate-700"
                  title="Ouvrir en plein écran sans aucune distraction"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                  <span>Mode Plein Écran</span>
                </button>

                <button
                  onClick={() => handleCopy(cleanEssayText)}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white"
                  title="Copier la copie complète"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{copied ? 'Copié !' : 'Copier'}</span>
                </button>
              </div>
            </div>

            {/* Travail Préliminaire de Philosophie (Méthodologie Officielle : Lexique, Reformulation, Problématisation, Plan) */}
            {hasValidPhiloWork && result.philoPreliminaryWork && (
              <PhiloPreliminaryWorkView work={result.philoPreliminaryWork} subjectTitle={subjectTitle} />
            )}

            {/* Travail Préliminaire de Français / Dissertation Littéraire (Méthodologie Officielle : Brouillon, Vocations, Intro sans consigne, Problème sans ou) */}
            {hasValidFrancaisWork && result.francaisPreliminaryWork && (
              <FrancaisPreliminaryWorkView work={result.francaisPreliminaryWork} subjectTitle={subjectTitle} />
            )}

            {/* Examination Paper Canvas (Clean Academic Paper - fully contrast optimized) */}
            <div 
              id="examination-paper-anchor"
              className={`rounded-xl p-3 sm:p-8 md:p-12 ${fontFamily === 'serif' ? 'font-serif' : 'font-sans'} ${fontSize === 'large' ? 'text-base sm:text-lg' : 'text-[15px] sm:text-base'} leading-relaxed sm:leading-loose transition-colors border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-800`}
            >
              {/* THE ESSAY / MATH RESOLUTION BODY */}
              {isMath ? (
                <div className="space-y-4">
                  <StructuredExamRenderer
                    rawText={fullRedactionText || cleanEssayText}
                    subjectTitle={subjectTitle}
                    discipline={result.disciplineIdentified}
                    onCopy={handleCopy}
                    structuredExercises={scientificExercises}
                  />
                </div>
              ) : isDirectQuestionOrRestitution ? (
                <div className="space-y-4 text-slate-900 dark:text-slate-100 font-sans">
                  <DirectRestitutionRenderer
                    rawText={fullRedactionText || cleanEssayText}
                    subjectTitle={subjectTitle}
                    discipline={result.disciplineIdentified}
                  />
                </div>
              ) : shouldUseAcademicPaperRenderer ? (
                <div className="space-y-3 sm:space-y-4 text-slate-900 dark:text-slate-100 font-sans">
                  <AcademicPaperRenderer
                    content={fullRedactionText || result.level5FullRedaction || result.fullSynthesizedResponse || cleanEssayText || ''}
                    subjectTitle={subjectTitle}
                    discipline={result.disciplineIdentified}
                  />
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6 text-slate-900 dark:text-slate-100">

                  {/* 1. INTRODUCTION */}
                  {introParagraph.trim() && (
                    <div className="relative group">
                      {copieDisplayMode === 'annotated' && (
                        <div className="mb-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-sans font-bold uppercase tracking-wide border bg-indigo-100 dark:bg-indigo-950/80 text-indigo-950 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700">
                          <span>1. INTRODUCTION (Amorce + Citation du sujet + Explication + Problématique + Annonce de plan)</span>
                        </div>
                      )}

                      <p className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose whitespace-pre-line font-normal sm:font-medium indent-4 sm:indent-10">
                        {renderEnrichedText(introParagraph)}
                      </p>
                    </div>
                  )}

                  {/* SAUT DE 2 LIGNES ENTRE INTRODUCTION ET DÉVELOPPEMENT */}
                  {introParagraph.trim() && (part1Chapeau?.trim() || part1SubParagraphs.length > 0 || part1Fallback.length > 0) && (
                    <div className="py-2 sm:py-3.5 flex items-center justify-center gap-2 select-none" aria-hidden="true">
                      <span className="h-px flex-1 max-w-[40px] sm:max-w-[80px] bg-slate-200 dark:bg-slate-800"></span>
                      <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        Saut de 2 lignes • Développement
                      </span>
                      <span className="h-px flex-1 max-w-[40px] sm:max-w-[80px] bg-slate-200 dark:bg-slate-800"></span>
                    </div>
                  )}

                  {/* 2. DÉVELOPPEMENT - AXE I */}
                  {(part1Chapeau?.trim() || part1SubParagraphs.length > 0 || part1Fallback.length > 0) && (
                    <div className="space-y-3 sm:space-y-5">
                      {copieDisplayMode === 'annotated' && (
                        <div className="mb-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-sans font-bold uppercase tracking-wide border bg-indigo-100 dark:bg-indigo-950/80 text-indigo-950 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700">
                          <span>2. PREMIÈRE PARTIE : THÈSE / EXPLICATION (Chapeau + 3 Arguments A, B, C)</span>
                        </div>
                      )}

                      {/* Chapeau Axe 1 */}
                      {part1Chapeau?.trim() && (
                        <p className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose whitespace-pre-line font-normal sm:font-medium indent-4 sm:indent-10">
                          {renderEnrichedText(part1Chapeau)}
                        </p>
                      )}

                      {/* Sous-parties Axe 1 */}
                      {part1SubParagraphs.length > 0 ? (
                        part1SubParagraphs.map((subPText, sIdx) => {
                          if (!subPText?.trim()) return null;
                          return (
                            <p key={sIdx} className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose whitespace-pre-line font-normal sm:font-medium indent-4 sm:indent-10">
                              {renderEnrichedText(subPText)}
                            </p>
                          );
                        })
                      ) : (
                        part1Fallback.map((p, idx) => {
                          if (!p?.trim()) return null;
                          return (
                            <p key={idx} className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose whitespace-pre-line font-normal sm:font-medium indent-4 sm:indent-10">
                              {renderEnrichedText(p)}
                            </p>
                          );
                        })
                      )}
                    </div>
                  )}

                  {/* SAUT DE LIGNE ENTRE AXE I ET TRANSITION */}
                  {transition1Paragraph?.trim() && (
                    <>
                      <div className="py-1.5 sm:py-2.5 flex items-center justify-center gap-2 select-none" aria-hidden="true">
                        <span className="h-px w-8 sm:w-16 bg-slate-200 dark:bg-slate-800"></span>
                        <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-wider font-medium text-slate-400 dark:text-slate-500">
                          Saut de ligne
                        </span>
                        <span className="h-px w-8 sm:w-16 bg-slate-200 dark:bg-slate-800"></span>
                      </div>

                      {/* 3. TRANSITION MAJEURE INTER-PARTIES */}
                      <div>
                        {copieDisplayMode === 'annotated' && (
                          <div className="mb-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-sans font-bold uppercase tracking-wide border bg-sky-100 dark:bg-sky-950/80 text-sky-950 dark:text-sky-200 border-sky-300 dark:border-sky-700">
                            <span>Transition Charnière (Bilan Axe I ➔ Question ouvrant l'Axe II)</span>
                          </div>
                        )}
                        <p className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose whitespace-pre-line font-normal sm:font-medium indent-4 sm:indent-10">
                          {renderEnrichedText(transition1Paragraph)}
                        </p>
                      </div>

                      <div className="py-1.5 sm:py-2.5 flex items-center justify-center gap-2 select-none" aria-hidden="true">
                        <span className="h-px w-8 sm:w-16 bg-slate-200 dark:bg-slate-800"></span>
                        <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-wider font-medium text-slate-400 dark:text-slate-500">
                          Saut de ligne
                        </span>
                        <span className="h-px w-8 sm:w-16 bg-slate-200 dark:bg-slate-800"></span>
                      </div>
                    </>
                  )}

                  {/* 4. DÉVELOPPEMENT - AXE II */}
                  {(part2Chapeau?.trim() || part2SubParagraphs.length > 0 || part2Fallback.length > 0) && (
                    <div className="space-y-3 sm:space-y-5">
                      {copieDisplayMode === 'annotated' && (
                        <div className="mb-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-sans font-bold uppercase tracking-wide border bg-indigo-100 dark:bg-indigo-950/80 text-indigo-950 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700">
                          <span>3. DEUXIÈME PARTIE : DISCUSSION / ANTITHÈSE (Chapeau + 3 Arguments A, B, C)</span>
                        </div>
                      )}

                      {/* Chapeau Axe 2 */}
                      {part2Chapeau?.trim() && (
                        <p className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose whitespace-pre-line font-normal sm:font-medium indent-4 sm:indent-10">
                          {renderEnrichedText(part2Chapeau)}
                        </p>
                      )}

                      {/* Sous-parties Axe 2 */}
                      {part2SubParagraphs.length > 0 ? (
                        part2SubParagraphs.map((subPText, sIdx) => {
                          if (!subPText?.trim()) return null;
                          return (
                            <p key={sIdx} className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose whitespace-pre-line font-normal sm:font-medium indent-4 sm:indent-10">
                              {renderEnrichedText(subPText)}
                            </p>
                          );
                        })
                      ) : (
                        part2Fallback.map((p, idx) => {
                          if (!p?.trim()) return null;
                          return (
                            <p key={idx} className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose whitespace-pre-line font-normal sm:font-medium indent-4 sm:indent-10">
                              {renderEnrichedText(p)}
                            </p>
                          );
                        })
                      )}
                    </div>
                  )}

                  {/* AXE III (SI PRÉSENT DANS PLAN EN 3 PARTIES) */}
                  {structured?.development?.part3 && (
                    <div className="space-y-3 sm:space-y-5 pt-3 sm:pt-4">
                      {transition2Paragraph?.trim() && (
                        <div className="py-2">
                          <p className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose whitespace-pre-line font-normal sm:font-medium indent-4 sm:indent-10">
                            {renderEnrichedText(transition2Paragraph)}
                          </p>
                        </div>
                      )}

                      {part3Chapeau?.trim() && (
                        <p className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose whitespace-pre-line font-normal sm:font-medium indent-4 sm:indent-10">
                          {renderEnrichedText(part3Chapeau)}
                        </p>
                      )}

                      {part3SubParagraphs.map((subPText, sIdx) => {
                        if (!subPText?.trim()) return null;
                        return (
                          <p key={sIdx} className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose whitespace-pre-line font-normal sm:font-medium indent-4 sm:indent-10">
                            {renderEnrichedText(subPText)}
                          </p>
                        );
                      })}
                    </div>
                  )}

                  {/* SAUT DE 2 LIGNES ENTRE DÉVELOPPEMENT ET CONCLUSION */}
                  {conclusionParagraph?.trim() && (
                    <>
                      <div className="py-2 sm:py-3.5 flex items-center justify-center gap-2 select-none" aria-hidden="true">
                        <span className="h-px flex-1 max-w-[40px] sm:max-w-[80px] bg-slate-200 dark:bg-slate-800"></span>
                        <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                          Saut de 2 lignes • Conclusion
                        </span>
                        <span className="h-px flex-1 max-w-[40px] sm:max-w-[80px] bg-slate-200 dark:bg-slate-800"></span>
                      </div>

                      {/* 5. CONCLUSION */}
                      <div>
                        {copieDisplayMode === 'annotated' && (
                          <div className="mb-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-sans font-bold uppercase tracking-wide border bg-emerald-100 dark:bg-emerald-950/80 text-emerald-950 dark:text-emerald-200 border-emerald-300 dark:border-emerald-700">
                            <span>4. CONCLUSION (Bilan Axe I + Bilan Axe II + Prise de position personnelle sans synthèse artificielle)</span>
                          </div>
                        )}

                        <p className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose whitespace-pre-line font-normal sm:font-medium indent-4 sm:indent-10">
                          {renderEnrichedText(conclusionParagraph)}
                        </p>
                      </div>
                    </>
                  )}

                </div>
              )}

              {/* End of Paper Sign-off */}
              <div className="mt-10 pt-6 border-t flex items-center gap-2 text-xs font-sans border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <Award className="w-4 h-4 text-emerald-500" />
                <span className="font-bold text-emerald-900 dark:text-emerald-400">Fin de la Rédaction — Devoir Conforme aux Canons Officiels</span>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================
            TAB 1: STRUCTURED IN EXTENSO REDACTION & TRIADS / MATH METHOD
           ======================================================== */}
        {activeTab === 'structured_redaction' && (
          <div className="space-y-6">
            {isMath ? (
              /* MATH METHODOLOGY & "COMMENT FAIRE" GUIDE */
              <div className="space-y-6">
                {/* Banner Guide Méthodologique */}
                <div className="border p-4 rounded-lg flex items-start gap-3 text-xs bg-slate-50 border-slate-300 text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-200">
                  <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-slate-600 dark:text-slate-400" />
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Boîte à Outils « Comment Faire » (Astuces & Réflexes)</h3>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                      Voici la stratégie intellectuelle, les formules requises, les étapes sans saut de calcul et les réflexes d'auto-contrôle pour maîtriser ce type d'exercice et obtenir 20/20.
                    </p>
                  </div>
                </div>

                {/* 5 Cards of the Math Guide */}
                <div className="space-y-4 sm:space-y-5">
                  {/* 1. Comment aborder le sujet */}
                  <div className="border rounded-lg overflow-hidden bg-white border-slate-300 dark:bg-slate-900 dark:border-slate-800">
                    <div className="p-3.5 sm:p-4 border-b flex items-center gap-3 bg-slate-50 border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
                      <span className="w-6 h-6 rounded font-mono font-bold text-xs flex items-center justify-center border shrink-0 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700">
                        1
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Comment aborder ce sujet (Démarche intellectuelle)</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Analyse de l'énoncé, ensemble de validité et cadre théorique</p>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 text-xs sm:text-sm leading-relaxed space-y-3 font-sans text-slate-700 dark:text-slate-300">
                      <p>
                        <strong>Démarche recommandée :</strong> Avant de vous lancer dans les calculs, lisez l'intégralité de l'énoncé. Identifiez les objets mathématiques (nombres, suites, fonctions, vecteurs, figures géométriques) et déterminez l'ensemble de référence (<span className="font-mono text-slate-900 dark:text-slate-100">ℝ, ℂ, ℕ, ℤ</span>).
                      </p>
                      <div className="p-3 rounded-lg border space-y-1 bg-slate-50 border-slate-200 dark:bg-slate-950 dark:border-slate-800">
                        <strong className="block text-xs font-semibold text-slate-900 dark:text-slate-100">Point de vigilance initial :</strong>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          Toujours poser les conditions d'existence (dénominateur non nul, quantité sous la racine positive ou nulle, argument du logarithme strictement positif) avant toute transformation algébrique.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2. Formules et Théorèmes Clés */}
                  <div className="border rounded-lg overflow-hidden bg-white border-slate-300 dark:bg-slate-900 dark:border-slate-800">
                    <div className="p-3.5 sm:p-4 border-b flex items-center gap-3 bg-slate-50 border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
                      <span className="w-6 h-6 rounded font-mono font-bold text-xs flex items-center justify-center border shrink-0 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700">
                        2
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Formules de Cours & Théorèmes Clés Indispensables</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Les outils théoriques mobilisés pour résoudre cet exercice</p>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 text-xs sm:text-sm leading-relaxed space-y-3 font-sans text-slate-700 dark:text-slate-300">
                      <p>
                        Pour résoudre cet exercice avec un maximum de rigueur, appliquez systématiquement les théorèmes du programme en citant explicitement leurs hypothèses avant tout calcul.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg border text-xs space-y-1 bg-slate-50 border-slate-200 dark:bg-slate-950 dark:border-slate-800">
                          <span className="font-semibold block text-slate-900 dark:text-slate-100">Règle de rédaction mathématique :</span>
                          <p className="text-slate-600 dark:text-slate-400">Toujours écrire la formule littérale avant d'effectuer l'application numérique.</p>
                        </div>
                        <div className="p-3 rounded-lg border text-xs space-y-1 bg-slate-50 border-slate-200 dark:bg-slate-950 dark:border-slate-800">
                          <span className="font-semibold block text-slate-900 dark:text-slate-100">Connecteurs déductifs :</span>
                          <p className="text-slate-600 dark:text-slate-400">Enchaîner vos lignes avec « Soit », « On sait que », « Or », « D'où », « Par conséquent ».</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. Démonstrations et Calculs Détaillés Pas à Pas */}
                  <div className="border rounded-lg overflow-hidden bg-white border-slate-300 dark:bg-slate-900 dark:border-slate-800">
                    <div className="p-3.5 sm:p-4 border-b flex items-center justify-between bg-slate-50 border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded font-mono font-bold text-xs flex items-center justify-center border shrink-0 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700">
                          3
                        </span>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Résolution Détaillée Pas à Pas (Sans Saut d'Étape)</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">Toutes les questions résolues avec explications complètes</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCopy(cleanEssayText)}
                        className="text-xs flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        Copier
                      </button>
                    </div>
                    <div className="p-4 sm:p-5 border-t bg-slate-50/70 border-slate-200 dark:bg-slate-950/70 dark:border-slate-800">
                      <StructuredExamRenderer
                        rawText={fullRedactionText || cleanEssayText}
                        paperTheme="dark"
                        subjectTitle={subjectTitle}
                        discipline={result.disciplineIdentified}
                        onCopy={handleCopy}
                        structuredExercises={scientificExercises}
                      />
                    </div>
                  </div>

                  {/* 4. Les Pièges Classiques à Éviter */}
                  <div className="border rounded-lg overflow-hidden bg-white border-slate-300 dark:bg-slate-900 dark:border-slate-800">
                    <div className="p-3.5 sm:p-4 border-b flex items-center gap-3 bg-slate-50 border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
                      <span className="w-6 h-6 rounded font-mono font-bold text-xs flex items-center justify-center border shrink-0 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700">
                        4
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Les Pièges Classiques à Éviter à l'Examen</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Erreurs fréquentes relevées par les jurys et correcteurs</p>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 text-xs sm:text-sm leading-relaxed space-y-2.5 font-sans text-slate-700 dark:text-slate-300">
                      <ul className="list-disc list-inside space-y-1.5 text-xs p-3.5 rounded-lg border text-slate-800 bg-slate-50 border-slate-300 dark:text-slate-200 dark:bg-slate-950 dark:border-slate-800">
                        <li><strong>Erreurs de signes dans les développements :</strong> Attention au signe négatif devant une parenthèse ou une fraction.</li>
                        <li><strong>Oubli des conditions d'existence :</strong> Résoudre une équation sans vérifier si les solutions appartiennent au domaine de validité.</li>
                        <li><strong>Confusion entre valeur exacte et valeur approchée :</strong> Conserver les valeurs exactes avec les fractions, racines, $\pi$, $e$ et $\ln$, sauf consigne explicite d'arrondi.</li>
                        <li><strong>Démonstration incomplète :</strong> Conclure sans avoir vérifié toutes les hypothèses du théorème appliqué.</li>
                      </ul>
                    </div>
                  </div>

                  {/* 5. Méthode d'Auto-Contrôle */}
                  <div className="border rounded-lg overflow-hidden bg-white border-slate-300 dark:bg-slate-900 dark:border-slate-800">
                    <div className="p-3.5 sm:p-4 border-b flex items-center gap-3 bg-slate-50 border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
                      <span className="w-6 h-6 rounded font-mono font-bold text-xs flex items-center justify-center border shrink-0 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700">
                        5
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Méthode d'Auto-Contrôle & Vérification du Résultat</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Comment vérifier vous-même vos résultats avant de rendre votre copie</p>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 text-xs sm:text-sm leading-relaxed space-y-3 font-sans text-slate-700 dark:text-slate-300">
                      <p>
                        Avant de clore l'épreuve, appliquez ces 3 réflexes d'auto-contrôle :
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div className="p-3 rounded-lg border space-y-1 bg-slate-50 border-slate-200 dark:bg-slate-950 dark:border-slate-800">
                          <span className="font-semibold block text-slate-900 dark:text-slate-100">1. Réinjection test</span>
                          <p className="text-slate-600 dark:text-slate-400">Réinjectez la solution trouvée dans l'équation de départ pour vous assurer de l'égalité.</p>
                        </div>
                        <div className="p-3 rounded-lg border space-y-1 bg-slate-50 border-slate-200 dark:bg-slate-950 dark:border-slate-800">
                          <span className="font-semibold block text-slate-900 dark:text-slate-100">2. Ordre de grandeur</span>
                          <p className="text-slate-600 dark:text-slate-400">Vérifiez la cohérence physique ou géométrique (longueur positive, probabilité entre 0 et 1).</p>
                        </div>
                        <div className="p-3 rounded-lg border space-y-1 bg-slate-50 border-slate-200 dark:bg-slate-950 dark:border-slate-800">
                          <span className="font-semibold block text-slate-900 dark:text-slate-100">3. Réponse à la consigne</span>
                          <p className="text-slate-600 dark:text-slate-400">Assurez-vous que le résultat final est clairement formulé avec l'unité requise.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              /* HUMANITIES TRIAD REDACTION VIEW */
              <>
                {/* View Mode Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl border bg-slate-50 border-slate-200 dark:bg-slate-950 dark:border-slate-800">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      Affichage des paragraphes :
                    </span>
                    <div className="inline-flex rounded-lg p-1 border text-xs bg-slate-100 border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                      <button
                        onClick={() => setParagraphViewMode('both')}
                        className={`px-2.5 py-1 rounded font-medium transition-all ${
                          paragraphViewMode === 'both'
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Vue Complète (Triade + Paragraphe)
                      </button>
                      <button
                        onClick={() => setParagraphViewMode('triad')}
                        className={`px-2.5 py-1 rounded font-medium transition-all ${
                          paragraphViewMode === 'triad'
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Triade Décomposée Seule
                      </button>
                      <button
                        onClick={() => setParagraphViewMode('full')}
                        className={`px-2.5 py-1 rounded font-medium transition-all ${
                          paragraphViewMode === 'full'
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Texte Rédigé Seul
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <button
                      onClick={() => setExpandedSection(expandedSection === 'all' ? null : 'all')}
                      className="px-2.5 py-1 rounded transition-colors text-slate-700 hover:text-slate-900 bg-slate-200 hover:bg-slate-300 dark:text-slate-300 dark:hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700"
                    >
                      {expandedSection === 'all' ? 'Tout replier' : 'Tout déplier'}
                    </button>
                  </div>
                </div>

                {/* Pedagogical Banner on the Triad */}
                <div className="border border-slate-300 dark:border-slate-800 p-3.5 sm:p-4 rounded-lg flex items-start gap-3 text-xs bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
                  <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-slate-600 dark:text-slate-400" />
                  <div>
                    <strong className="block mb-0.5 text-slate-900 dark:text-white">Règle de correction officielle :</strong>
                    <span>Chaque paragraphe de développement suit impérativement le triptyque : <strong>1. Argument</strong> (Idée directrice) ➔ <strong>2. Explication</strong> (Analyse logique) ➔ <strong>3. Illustration</strong> (Nom de l'auteur, titre exact de l'œuvre et citation textuelle commentée).</span>
                  </div>
                </div>

                {/* Structured Sections */}
                <div className="space-y-5">
                  
                  {/* TRAVAIL PRÉLIMINAIRE OFFICIEL EN PHILOSOPHIE */}
                  {hasValidPhiloWork && result.philoPreliminaryWork && (
                    <PhiloPreliminaryWorkView work={result.philoPreliminaryWork} subjectTitle={subjectTitle} />
                  )}

                  {/* TRAVAIL PRÉLIMINAIRE OFFICIEL EN FRANÇAIS (DISSERTATION LITTÉRAIRE) */}
                  {hasValidFrancaisWork && result.francaisPreliminaryWork && (
                    <FrancaisPreliminaryWorkView work={result.francaisPreliminaryWork} subjectTitle={subjectTitle} />
                  )}

                  {/* 1. INTRODUCTION */}
                  <div className="border rounded-xl overflow-hidden shadow-sm bg-slate-50 border-slate-200 dark:bg-slate-950 dark:border-slate-800">
                    <div 
                      onClick={() => setExpandedSection(expandedSection === 'intro' ? null : 'intro')}
                      className="p-4 border-b flex items-center justify-between cursor-pointer transition-colors bg-slate-100/80 border-slate-200 hover:bg-slate-100 dark:bg-slate-900/80 dark:border-slate-800 dark:hover:bg-slate-900"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center border shrink-0 bg-indigo-100/60 text-indigo-700 border-indigo-300 dark:bg-indigo-900/60 dark:text-indigo-300 dark:border-indigo-700">
                          1
                        </span>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white">INTRODUCTION (4 Phases Obligatoires)</h3>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400">Accroche / Définition & Tension / Problématique / Annonce de plan</p>
                        </div>
                      </div>
                      {expandedSection === 'intro' || expandedSection === 'all' ? <ChevronUp className="w-4 h-4 text-slate-600 dark:text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-600 dark:text-slate-400" />}
                    </div>

                    {(expandedSection === 'intro' || expandedSection === 'all') && (
                      <div className="p-5 space-y-4">
                        {structured?.introduction && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                            <div className="p-3.5 rounded-xl border space-y-1 bg-slate-100/90 border-slate-200 dark:bg-slate-900/90 dark:border-slate-800">
                              <span className="font-bold block text-indigo-600 dark:text-indigo-400">① Amorce / Accroche :</span>
                              <p className="leading-relaxed text-slate-700 dark:text-slate-300">{structured.introduction.amorce}</p>
                            </div>
                            <div className="p-3.5 rounded-xl border space-y-1 bg-slate-100/90 border-slate-200 dark:bg-slate-900/90 dark:border-slate-800">
                              <span className="font-bold block text-indigo-600 dark:text-indigo-400">② Définition & Tension des termes :</span>
                              <p className="leading-relaxed text-slate-700 dark:text-slate-300">{structured.introduction.definitionTension}</p>
                            </div>
                            <div className="p-3.5 rounded-xl border space-y-1 bg-slate-100/90 border-amber-100/50 dark:bg-slate-900/90 dark:border-amber-900/50">
                              <span className="font-bold block text-amber-600 dark:text-amber-400">③ Problématique formulée sous forme d'aporie :</span>
                              <p className="font-medium leading-relaxed text-slate-800 dark:text-slate-200">{structured.introduction.problematique}</p>
                            </div>
                            <div className="p-3.5 rounded-xl border space-y-1 bg-slate-100/90 border-emerald-100/50 dark:bg-slate-900/90 dark:border-emerald-900/50">
                              <span className="font-bold block text-emerald-600 dark:text-emerald-400">④ Annonce explicite du plan :</span>
                              <p className="leading-relaxed text-slate-700 dark:text-slate-300">{structured.introduction.annoncePlan}</p>
                            </div>
                          </div>
                        )}

                        <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Texte de l'Introduction rédigé en continu :</span>
                            <button
                              onClick={() => handleCopy(structured?.introduction?.fullText)}
                              className="text-[10px] flex items-center gap-1 text-slate-600 hover:text-indigo-700 dark:text-slate-400 dark:hover:text-indigo-300"
                            >
                              <Copy className="w-3 h-3" />
                              Copier
                            </button>
                          </div>
                          <div className="p-4 rounded-xl border text-xs sm:text-sm leading-relaxed font-serif whitespace-pre-line bg-slate-100/50 border-slate-200/70 text-slate-800 dark:bg-slate-900/50 dark:border-slate-800/70 dark:text-slate-200 text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified">
                            {structured?.introduction?.fullText || result.stepByStepBreakdown[0]?.content || fullRedactionText}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2. DÉVELOPPEMENT - PARTIE I */}
                  {structured?.development?.part1 ? (
                    renderDevelopmentPart(structured.development.part1, 'part1', 2)
                  ) : null}

                  {/* 3. DÉVELOPPEMENT - PARTIE II */}
                  {structured?.development?.part2 ? (
                    renderDevelopmentPart(structured.development.part2, 'part2', 3)
                  ) : null}

                  {/* 4. DÉVELOPPEMENT - PARTIE III */}
                  {structured?.development?.part3 ? (
                    renderDevelopmentPart(structured.development.part3, 'part3', 4)
                  ) : null}

                  {/* Fallback si structured.development est vide mais stepByStepBreakdown existe */}
                  {!structured?.development?.part1 && !structured?.development?.part2 && Array.isArray(result.stepByStepBreakdown) && result.stepByStepBreakdown.length > 0 && (
                    <div className="border rounded-xl overflow-hidden shadow-sm bg-slate-50 border-slate-200 dark:bg-slate-950 dark:border-slate-800">
                      <div className="p-4 border-b flex items-center justify-between bg-slate-100/80 border-slate-200 dark:bg-slate-900/80 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center border shrink-0 bg-indigo-100/60 text-indigo-700 border-indigo-300 dark:bg-indigo-900/60 dark:text-indigo-300 dark:border-indigo-700">
                            2
                          </span>
                          <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-white">DÉMONSTRATION PAS À PAS & RÉDACTION</h3>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400">Progression des étapes démonstratives</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-5 space-y-4">
                        {result.stepByStepBreakdown.map((step, sIdx) => (
                          <div key={sIdx} className="p-4 rounded-xl border space-y-2 bg-slate-100/90 border-slate-200 dark:bg-slate-900/90 dark:border-slate-800">
                            {/* Empilé sur mobile : ligne 1 = n° étape + règle, ligne 2 = titre complet pleine largeur */}
                            <div className="space-y-1 border-b pb-2 border-slate-200/80 dark:border-slate-800/80">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[11px] font-bold uppercase tracking-wide text-indigo-700 dark:text-indigo-300 shrink-0">
                                  Étape {step.stepNumber}
                                </span>
                                {step.methodologyRuleApplied && (
                                  <span className="text-[10px] px-2 py-0.5 rounded text-slate-600 bg-slate-200 dark:text-slate-400 dark:bg-slate-800 text-right break-words">
                                    <MathText text={step.methodologyRuleApplied} />
                                  </span>
                                )}
                              </div>
                              {step.stepTitle && (
                                <div className="text-xs font-bold text-indigo-900 dark:text-indigo-200 leading-snug break-words">
                                  <MathText text={step.stepTitle} />
                                </div>
                              )}
                            </div>
                            <div className="text-xs sm:text-sm leading-relaxed font-serif whitespace-pre-line text-slate-800 dark:text-slate-200 text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified">
                              <MathText text={step.content} />
                            </div>
                            {step.pedagogicalTip && (
                              <div className="text-xs p-2.5 rounded-lg border text-slate-700 bg-slate-50 border-slate-200 dark:text-slate-300 dark:bg-slate-900/60 dark:border-slate-800 flex items-start gap-2">
                                <span className="font-semibold text-slate-900 dark:text-slate-100 shrink-0">Remarque méthodologique :</span>
                                <div><MathText text={step.pedagogicalTip} /></div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 5. CONCLUSION */}
                  <div className="border rounded-xl overflow-hidden shadow-sm bg-slate-50 border-slate-200 dark:bg-slate-950 dark:border-slate-800">
                    <div 
                      onClick={() => setExpandedSection(expandedSection === 'conclusion' ? null : 'conclusion')}
                      className="p-4 border-b flex items-center justify-between cursor-pointer transition-colors bg-slate-100/80 border-slate-200 hover:bg-slate-100 dark:bg-slate-900/80 dark:border-slate-800 dark:hover:bg-slate-900"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center border shrink-0 bg-emerald-100/60 text-emerald-700 border-emerald-300 dark:bg-emerald-900/60 dark:text-emerald-300 dark:border-emerald-700">
                          5
                        </span>
                        <div>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white">CONCLUSION (3 Temps Canoniques)</h3>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400">Bilan des acquis / Réponse définitive / Élargissement de portée</p>
                        </div>
                      </div>
                      {expandedSection === 'conclusion' || expandedSection === 'all' ? <ChevronUp className="w-4 h-4 text-slate-600 dark:text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-600 dark:text-slate-400" />}
                    </div>

                    {(expandedSection === 'conclusion' || expandedSection === 'all') && (
                      <div className="p-5 space-y-4">
                        {structured?.conclusion && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                            <div className="p-3.5 rounded-xl border space-y-1 bg-slate-100/90 border-slate-200 dark:bg-slate-900/90 dark:border-slate-800">
                              <span className="font-bold block text-emerald-600 dark:text-emerald-400">① Bilan synthétique :</span>
                              <p className="leading-relaxed text-slate-700 dark:text-slate-300">{structured.conclusion.bilanSynthese}</p>
                            </div>
                            <div className="p-3.5 rounded-xl border space-y-1 bg-slate-100/90 border-slate-200 dark:bg-slate-900/90 dark:border-slate-800">
                              <span className="font-bold block text-emerald-600 dark:text-emerald-400">② Réponse définitive au sujet :</span>
                              <p className="leading-relaxed text-slate-700 dark:text-slate-300">{structured.conclusion.reponseDefinitive}</p>
                            </div>
                            <div className="p-3.5 rounded-xl border space-y-1 bg-slate-100/90 border-slate-200 dark:bg-slate-900/90 dark:border-slate-800">
                              <span className="font-bold block text-emerald-600 dark:text-emerald-400">③ Élargissement prospectif :</span>
                              <p className="leading-relaxed text-slate-700 dark:text-slate-300">{structured.conclusion.elargissement}</p>
                            </div>
                          </div>
                        )}

                        <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Texte de la Conclusion rédigé en continu :</span>
                            <button
                              onClick={() => handleCopy(structured?.conclusion?.fullText)}
                              className="text-[10px] flex items-center gap-1 text-slate-600 hover:text-indigo-700 dark:text-slate-400 dark:hover:text-indigo-300"
                            >
                              <Copy className="w-3 h-3" />
                              Copier
                            </button>
                          </div>
                          <div className="p-3.5 rounded-lg border text-xs sm:text-sm leading-relaxed font-serif whitespace-pre-line bg-slate-50 border-slate-300 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-100 text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified">
                            {structured?.conclusion?.fullText || result.stepByStepBreakdown[result.stepByStepBreakdown.length - 1]?.content}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </>
            )}
          </div>
        )}

        {/* ========================================================
            TAB: CITATIONS & AUTHORS INDEX / MATH & SCIENCE THEOREMS
           ======================================================== */}
        {activeTab === 'citations_index' && (
          <div className="space-y-4">
            <div className="p-3.5 rounded-lg border space-y-1 bg-slate-50 border-slate-300 dark:bg-slate-900 dark:border-slate-800">
              <h3 className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2 text-slate-900 dark:text-white">
                <Library className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                {isMath ? "Index des Formules, Lois & Théorèmes Scientifiques Mobilisés" : "Index Précis des Auteurs, Œuvres et Citations Mobilisés"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {isMath 
                  ? "Fiche mémo des théorèmes, lois fondamentales (Physique, Chimie, SVT, Maths, Statistiques), définitions et propriétés scientifiques indispensables."
                  : "Fiche mémo pour vos révisions : chaque référence est contextualisée avec son œuvre d'origine et la démonstration associée."}
              </p>
            </div>

            {isMath ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getScientificCourseTheorems(subjectTitle, result).map((card, idx) => (
                  <div key={card.id || idx} className="border rounded-lg p-4 space-y-3 transition-colors bg-white border-slate-300 dark:bg-slate-900 dark:border-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded font-mono font-bold text-xs flex items-center justify-center border bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                          {idx + 1}
                        </span>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white"><MathText text={card.title} /></h4>
                      </div>
                      <span className="text-xs font-medium px-2 py-0.5 rounded border bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                        {card.category}
                      </span>
                    </div>

                    {/* Formula KaTeX block */}
                    <div className="p-3 rounded-lg border text-xs sm:text-sm font-mono flex items-center justify-center overflow-x-auto bg-slate-50 border-slate-200 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-100">
                      <MathText text={card.formula} />
                    </div>

                    {card.conditions && (
                      <div className="text-xs p-2.5 rounded-lg border space-y-1 text-slate-700 bg-slate-50 border-slate-200 dark:text-slate-300 dark:bg-slate-950 dark:border-slate-800">
                        <span className="font-semibold block text-xs text-slate-900 dark:text-slate-100">Conditions d'application :</span>
                        <div className="leading-relaxed"><MathText text={card.conditions} /></div>
                      </div>
                    )}

                    {card.examTip && (
                      <div className="text-xs p-2.5 rounded-lg border flex items-start gap-2 text-slate-800 bg-slate-50 border-slate-300 dark:text-slate-200 dark:bg-slate-950 dark:border-slate-800">
                        <Lightbulb className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-500 dark:text-slate-400" />
                        <div>
                          <strong className="block text-xs mb-0.5 font-semibold text-slate-900 dark:text-slate-100">Réflexe pour l'examen :</strong>
                          <div className="leading-relaxed"><MathText text={card.examTip} /></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : allIllustrations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allIllustrations.map((item, idx) => (
                  <div key={idx} className="border rounded-lg p-4 space-y-2.5 transition-colors bg-white border-slate-300 dark:bg-slate-900 dark:border-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded font-mono font-bold text-xs flex items-center justify-center border bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                          {idx + 1}
                        </span>
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{item.auteur}</h4>
                      </div>
                      <span className="text-xs font-medium px-2 py-0.5 rounded border italic text-slate-700 bg-slate-100 border-slate-300 dark:text-slate-300 dark:bg-slate-800 dark:border-slate-700">
                        {item.oeuvre}
                      </span>
                    </div>

                    <div className="text-xs flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Localisation :</span>
                      <span>{item.partTitle} (Sous-partie {item.subPartLetter})</span>
                    </div>

                    {item.citation && (
                      <div className="p-3 rounded border-l-2 border-slate-400 dark:border-slate-600 border-y border-r border-slate-200 dark:border-slate-800 text-xs font-serif italic bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
                        <MathText text={item.citation} />
                      </div>
                    )}

                    <div className="text-xs p-2.5 rounded-lg border space-y-1 text-slate-700 bg-slate-50 border-slate-200 dark:text-slate-300 dark:bg-slate-950 dark:border-slate-800">
                      <span className="font-semibold block text-xs text-slate-900 dark:text-slate-100">Argument soutenu :</span>
                      <div><MathText text={item.argument} /></div>
                    </div>

                    {item.analyseIllustration && (
                      <div className="text-xs p-2.5 rounded-lg border text-slate-700 bg-slate-50 border-slate-200 dark:text-slate-300 dark:bg-slate-950 dark:border-slate-800">
                        <strong className="block text-xs mb-0.5 font-semibold text-slate-900 dark:text-slate-100">Portée doctrinale :</strong>
                        <div><MathText text={item.analyseIllustration} /></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-lg border text-center text-xs bg-slate-50 border-slate-300 text-slate-600 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-400">
                Aucune illustration spécifique extraite. Consultez l'onglet « Rédaction » pour le texte intégral.
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            TAB 2: STEP-BY-STEP BREAKDOWN
           ======================================================== */}
        {activeTab === 'step_by_step' && (
          <div className="space-y-4">
            {result.stepByStepBreakdown.map((step, index) => (
              <div 
                key={index}
                className="border rounded-lg p-4 space-y-3 transition-colors bg-white border-slate-300 dark:bg-slate-900 dark:border-slate-800"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded font-mono font-bold text-xs flex items-center justify-center border bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                      {step.stepNumber}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white"><MathText text={step.stepTitle} /></h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {step.sourceTags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs font-medium px-2 py-0.5 rounded border bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {step.methodologyRuleApplied && (() => {
                  const parsedRules = parseMethodologyRules(step.methodologyRuleApplied);
                  return (
                    <div className="text-xs p-3 rounded-lg border flex flex-col gap-2 bg-slate-50 border-slate-300 dark:bg-slate-950 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                          <BookOpen className="w-3 h-3" />
                        </div>
                        <span className="font-semibold text-xs text-slate-800 dark:text-slate-200">
                          Règle du référentiel
                        </span>
                      </div>

                      <div className="space-y-1.5 pt-0.5">
                        {parsedRules.map((item, rIdx) => (
                          <div
                            key={rIdx}
                            className="p-2 sm:p-2.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2"
                          >
                            {item.label ? (
                              <>
                                <span className="font-semibold text-slate-900 dark:text-slate-100 text-xs shrink-0 flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400 shrink-0" />
                                  {item.label} :
                                </span>
                                <div className="text-xs text-slate-800 dark:text-slate-200 font-medium break-words overflow-x-auto no-scrollbar py-0.5">
                                  <MathText text={item.formula} />
                                </div>
                              </>
                            ) : (
                              <div className="text-xs text-slate-800 dark:text-slate-200 font-medium break-words overflow-x-auto no-scrollbar py-0.5 flex items-start gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400 mt-1.5 shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <MathText text={item.formula} />
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })()}

                <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-line p-3.5 rounded-lg border text-slate-900 bg-slate-50 border-slate-300 dark:text-slate-100 dark:bg-slate-950 dark:border-slate-800 text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified">
                  <MathText text={step.content} />
                </div>

                {step.pedagogicalTip && (
                  <div className="text-xs p-2.5 rounded-lg border flex items-start gap-2 text-slate-800 bg-slate-50 border-slate-300 dark:text-slate-200 dark:bg-slate-950 dark:border-slate-800">
                    <GraduationCap className="w-4 h-4 shrink-0 mt-0.5 text-slate-500 dark:text-slate-400" />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">Conseil pour l'élève : </span>
                      <span><MathText text={step.pedagogicalTip} /></span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ========================================================
          FULLSCREEN READER MODAL (MODE LECTURE SANS DISTRACTION)
         ======================================================== */}
      {isFullscreenReader && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex flex-col justify-between overflow-hidden animate-in fade-in duration-200">
          {/* Top Sticky Controls Bar */}
          <div className="shrink-0 bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 px-3 sm:px-6 py-2.5 flex items-center justify-between gap-2 shadow-xs">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                Mode Lecture Plein Écran
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => handleCopy(cleanEssayText)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0030B6] hover:bg-[#002594] text-white cursor-pointer transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copié' : 'Copier'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIsFullscreenReader(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 cursor-pointer transition-colors"
                title="Quitter le plein écran"
              >
                <X className="w-4 h-4" />
                <span>Fermer</span>
              </button>
            </div>
          </div>

          {/* Scrollable Document Body */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-8 md:p-12 max-w-4xl mx-auto w-full">
            <div className={`bg-white dark:bg-slate-950 rounded-xl p-4 sm:p-10 border border-slate-300 dark:border-slate-800 shadow-lg ${fontFamily === 'serif' ? 'font-serif' : 'font-sans'} ${fontSize === 'large' ? 'text-base sm:text-lg' : 'text-[15px] sm:text-base'} text-slate-900 dark:text-slate-100 leading-relaxed sm:leading-loose`}>
              
              {/* Academic Header in Modal */}
              <div className="text-center pb-3 mb-4 border-b border-slate-200 dark:border-slate-800/80 font-sans">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                  {isMath ? "Exercice & Résolution Pas à Pas" : (isDirectQuestionOrRestitution ? "Restitution Directe" : "Copie d'Examen In Extenso")}
                </span>
              </div>

              {/* Body in Modal */}
              {isMath ? (
                <StructuredExamRenderer
                  rawText={fullRedactionText || cleanEssayText}
                  subjectTitle={subjectTitle}
                  discipline={result.disciplineIdentified}
                  onCopy={handleCopy}
                  structuredExercises={scientificExercises}
                />
              ) : isDirectQuestionOrRestitution ? (
                <DirectRestitutionRenderer
                  rawText={fullRedactionText || cleanEssayText}
                  subjectTitle={subjectTitle}
                  discipline={result.disciplineIdentified}
                />
              ) : shouldUseAcademicPaperRenderer ? (
                <AcademicPaperRenderer
                  content={fullRedactionText || result.level5FullRedaction || result.fullSynthesizedResponse || cleanEssayText || ''}
                  subjectTitle={subjectTitle}
                  discipline={result.disciplineIdentified}
                />
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {introParagraph.trim() && (
                    <div>
                      {copieDisplayMode === 'annotated' && (
                        <div className="mb-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-sans font-medium uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                          1. Introduction
                        </div>
                      )}
                      <p className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose indent-4 sm:indent-10 font-normal sm:font-medium">
                        {renderEnrichedText(introParagraph)}
                      </p>
                    </div>
                  )}

                  {introParagraph.trim() && (part1Chapeau?.trim() || part1SubParagraphs.length > 0 || part1Fallback.length > 0) && (
                    <div className="py-2 flex items-center justify-center gap-2 select-none" aria-hidden="true">
                      <span className="h-px flex-1 max-w-[60px] bg-slate-200 dark:bg-slate-800"></span>
                      <span className="text-[9px] font-sans uppercase font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        Saut de 2 lignes
                      </span>
                      <span className="h-px flex-1 max-w-[60px] bg-slate-200 dark:bg-slate-800"></span>
                    </div>
                  )}

                  {(part1Chapeau?.trim() || part1SubParagraphs.length > 0 || part1Fallback.length > 0) && (
                    <div className="space-y-3">
                      {copieDisplayMode === 'annotated' && (
                        <div className="mb-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-sans font-medium uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                          2. Axe I
                        </div>
                      )}
                      {part1Chapeau?.trim() && (
                        <p className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose indent-4 sm:indent-10 font-normal sm:font-medium">
                          {renderEnrichedText(part1Chapeau)}
                        </p>
                      )}
                      {part1SubParagraphs.length > 0 ? (
                        part1SubParagraphs.map((subPText, sIdx) => subPText?.trim() && (
                          <p key={sIdx} className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose indent-4 sm:indent-10 font-normal sm:font-medium">
                            {renderEnrichedText(subPText)}
                          </p>
                        ))
                      ) : (
                        part1Fallback.map((p, idx) => p?.trim() && (
                          <p key={idx} className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose indent-4 sm:indent-10 font-normal sm:font-medium">
                            {renderEnrichedText(p)}
                          </p>
                        ))
                      )}
                    </div>
                  )}

                  {transition1Paragraph?.trim() && (
                    <div className="space-y-2">
                      <div className="py-1 flex items-center justify-center gap-2 select-none" aria-hidden="true">
                        <span className="h-px w-10 bg-slate-200 dark:bg-slate-800"></span>
                        <span className="text-[9px] font-sans text-slate-400">Saut de ligne</span>
                        <span className="h-px w-10 bg-slate-200 dark:bg-slate-800"></span>
                      </div>
                      {copieDisplayMode === 'annotated' && (
                        <div className="mb-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-sans font-medium uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                          Transition
                        </div>
                      )}
                      <p className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose indent-4 sm:indent-10 font-normal sm:font-medium">
                        {renderEnrichedText(transition1Paragraph)}
                      </p>
                      <div className="py-1 flex items-center justify-center gap-2 select-none" aria-hidden="true">
                        <span className="h-px w-10 bg-slate-200 dark:bg-slate-800"></span>
                        <span className="text-[9px] font-sans text-slate-400">Saut de ligne</span>
                        <span className="h-px w-10 bg-slate-200 dark:bg-slate-800"></span>
                      </div>
                    </div>
                  )}

                  {(part2Chapeau?.trim() || part2SubParagraphs.length > 0 || part2Fallback.length > 0) && (
                    <div className="space-y-3">
                      {copieDisplayMode === 'annotated' && (
                        <div className="mb-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-sans font-medium uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                          3. Axe II
                        </div>
                      )}
                      {part2Chapeau?.trim() && (
                        <p className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose indent-4 sm:indent-10 font-normal sm:font-medium">
                          {renderEnrichedText(part2Chapeau)}
                        </p>
                      )}
                      {part2SubParagraphs.length > 0 ? (
                        part2SubParagraphs.map((subPText, sIdx) => subPText?.trim() && (
                          <p key={sIdx} className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose indent-4 sm:indent-10 font-normal sm:font-medium">
                            {renderEnrichedText(subPText)}
                          </p>
                        ))
                      ) : (
                        part2Fallback.map((p, idx) => p?.trim() && (
                          <p key={idx} className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose indent-4 sm:indent-10 font-normal sm:font-medium">
                            {renderEnrichedText(p)}
                          </p>
                        ))
                      )}
                    </div>
                  )}

                  {conclusionParagraph?.trim() && (
                    <div className="space-y-2 pt-2">
                      <div className="py-2 flex items-center justify-center gap-2 select-none" aria-hidden="true">
                        <span className="h-px flex-1 max-w-[60px] bg-slate-200 dark:bg-slate-800"></span>
                        <span className="text-[9px] font-sans uppercase font-semibold text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                          Saut de 2 lignes
                        </span>
                        <span className="h-px flex-1 max-w-[60px] bg-slate-200 dark:bg-slate-800"></span>
                      </div>
                      {copieDisplayMode === 'annotated' && (
                        <div className="mb-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-sans font-medium uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                          4. Conclusion
                        </div>
                      )}
                      <p className="text-justify [text-align-last:left] [text-justify:inter-word] hyphens-auto word-justified leading-relaxed sm:leading-loose indent-4 sm:indent-10 font-normal sm:font-medium">
                        {renderEnrichedText(conclusionParagraph)}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

