import { OfficialIvorianCourse } from '../../types';

import { svt6eKnowledgeBase } from '../../../svt6eKnowledgeBase';
import { svt2ndeAKnowledgeBase } from '../../../svt2ndeAKnowledgeBase';
import { svt2ndeCKnowledgeBase } from '../../../svt2ndeCKnowledgeBase';
import { svt1ereAKnowledgeBase } from '../../../svt1ereAKnowledgeBase';
import { svt1ereCKnowledgeBase } from '../../../svt1ereCKnowledgeBase';
import { svt1ereDKnowledgeBase } from '../../../svt1ereDKnowledgeBase';
import { svtTleDKnowledgeBase } from '../../../svtTleDKnowledgeBase';

import { MATHS_6E_CURRICULUM } from '../../../maths6eKnowledgeBase';
import { maths2ndeAKnowledgeBase } from '../../../maths2ndeAKnowledgeBase';
import { maths2ndeCKnowledgeBase } from '../../../maths2ndeCKnowledgeBase';
import { maths1ereCKnowledgeBase } from '../../../maths1ereCKnowledgeBase';
import { mathsTleAKnowledgeBase } from '../../../mathsTleAKnowledgeBase';
import { mathsTleCKnowledgeBase } from '../../../mathsTleCKnowledgeBase';
import { MATHS_TLE_D_CURRICULUM } from '../../../mathsTleDKnowledgeBase';

import { PC_6E_CURRICULUM } from '../../../pc6eKnowledgeBase';
import { pc2ndeAKnowledgeBase } from '../../../pc2ndeAKnowledgeBase';
import { pc2ndeCKnowledgeBase } from '../../../pc2ndeCKnowledgeBase';
import { pcTleCdeKnowledgeBase } from '../../../pcTleCdeKnowledgeBase';

import { francais6eKnowledgeBase } from '../../../francais6eKnowledgeBase';
import { francaisTleDissertationKnowledgeBase } from '../../../francaisTleDissertationKnowledgeBase';
import { GEO_6E_CURRICULUM } from '../../../geographie6eKnowledgeBase';
import { histoireGeo6eKnowledgeBase } from '../../../histoireGeo6eKnowledgeBase';

function toDefinitionsArray(defs: any): { term: string; definition: string }[] {
  if (!defs) return [];
  if (Array.isArray(defs)) {
    return defs.map(d => ({
      term: typeof d === 'string' ? d : d.term || d.name || '',
      definition: typeof d === 'string' ? d : d.definition || d.desc || ''
    }));
  }
  if (typeof defs === 'object') {
    return Object.entries(defs).map(([k, v]) => ({
      term: k,
      definition: typeof v === 'string' ? v : JSON.stringify(v)
    }));
  }
  return [];
}

function toPropertiesArray(props: any): { name: string; statement: string; explanation?: string }[] {
  if (!props) return [];
  if (Array.isArray(props)) {
    return props.map((p, i) => ({
      name: typeof p === 'string' ? `Règle ${i + 1}` : p.name || p.rule || `Règle ${i + 1}`,
      statement: typeof p === 'string' ? p : p.statement || p.formula || '',
      explanation: typeof p === 'string' ? undefined : p.explanation || p.context
    }));
  }
  if (typeof props === 'object') {
    return Object.entries(props).map(([k, v]) => ({
      name: k,
      statement: typeof v === 'string' ? v : JSON.stringify(v)
    }));
  }
  return [];
}

function toFormulasArray(formulas: any): { name: string; formula: string; explanation: string }[] {
  if (!formulas) return [];
  if (Array.isArray(formulas)) {
    return formulas.map((f, i) => ({
      name: typeof f === 'string' ? `Formule ${i + 1}` : f.name || f.rule || `Formule ${i + 1}`,
      formula: typeof f === 'string' ? f : f.formula || f.statement || '',
      explanation: typeof f === 'string' ? '' : f.explanation || f.variables || ''
    }));
  }
  if (typeof formulas === 'object') {
    return Object.entries(formulas).map(([k, v]) => ({
      name: k,
      formula: typeof v === 'string' ? v : JSON.stringify(v),
      explanation: ''
    }));
  }
  return [];
}

const DANGEROUS_GENERIC_KEYWORDS = new Set([
  'causes', 'cause', 'consequences', 'consequence', 'origines', 'origine', 'effets', 'impact',
  'facteurs', 'facteur', 'definition', 'bilan', 'problemes', 'probleme', 'difficultes', 'difficulte',
  'solutions', 'solution', 'mesures', 'mesure', 'caracteristiques', 'caracteristique', 'etapes', 'etape',
  'formes', 'forme', 'types', 'type', 'objectifs', 'objectif', 'principes', 'principe',
  'manifestations', 'manifestation', 'roles', 'role', 'structure', 'structures', 'organes', 'organe',
  'fonctionnement', 'mecanisme', 'mecanismes', 'actions', 'action', 'deroulement', 'faits', 'fait',
  'evenements', 'evenement', 'notion', 'notions', 'concept', 'concepts', 'generalites', 'introduction',
  'conclusion', 'methodes', 'methode', 'proprietes', 'propriete', 'theoreme', 'theoremes',
  'cote', 'ivoire', 'sujet', 'analyse', 'ordre', 'travail', 'esprit', 'portant', 'general', 'canonique',
  'question', 'reponse', 'illustree', 'argumentee', 'ordonnee', 'cours', 'lecon', 'theme', 'chapitre',
  'classe', 'niveau', 'serie', 'alors', 'apres', 'avant', 'proche', 'seconde', 'deuxieme', 'premiere',
  'derniere', 'nouvelle', 'nouvel', 'nouveau', 'grand', 'grande', 'grands', 'grandes', 'petit', 'petite',
  'petits', 'petites', 'homme', 'hommes', 'femme', 'femmes', 'monde', 'pays', 'temps', 'annee', 'annees',
  'siecle', 'siecles', 'partie', 'parties', 'point', 'points', 'element', 'elements', 'periode', 'periodes',
  'etude', 'etudes', 'definitions', 'etymologie', 'signifie', 'acheve', 'etend', 'histoire', 'geographie',
  'francais', 'philosophie', 'mathematiques', 'physique', 'chimie', 'sciences', 'roman', 'poesie', 'theatre',
  'litterature', 'texte', 'textes', 'auteur', 'auteurs', 'oeuvre', 'oeuvres'
]);

function extractKeywords(title: string, _topics?: string[]): string[] {
  const words = new Set<string>();
  const cleanTitle = title.trim();
  if (cleanTitle) {
    words.add(cleanTitle);
  }
  if (/c[oô]te\s+d['’]ivoire/i.test(title)) {
    words.add("Côte d'Ivoire");
  }
  title.split(/[\s,;:()'-]+/).forEach(w => {
    const clean = w.toLowerCase().trim();
    if (clean.length >= 5 && !DANGEROUS_GENERIC_KEYWORDS.has(clean)) {
      words.add(clean);
    }
  });
  return Array.from(words).slice(0, 10);
}

const courses: OfficialIvorianCourse[] = [];

// 1. SVT 6ème
for (const ch of svt6eKnowledgeBase.chapters) {
  const defs = toDefinitionsArray(ch.topics);
  courses.push({
    id: `svt-6e-${ch.id}`,
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre',
    level: '6e',
    levelLabel: 'Sixième (6ème)',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: defs,
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Règle clé ${i + 1}`, statement: f })),
    formulas: [],
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Méthode ${i + 1}`,
      procedure: m,
      tip: 'Suivre rigoureusement la démarche scientifique expérimentale.'
    })),
    examples: [],
    exercises: [],
    examTraps: [],
    quickMemo: `${ch.title} : notions fondamentales au programme officiel de 6ème.`,
    keywords: [ch.title, 'svt 6ème', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

// 2. SVT 2nde A & C
for (const ch of svt2ndeAKnowledgeBase.chapters) {
  courses.push({
    id: `svt-2nde-a-${ch.id}`,
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre',
    level: '2nde',
    levelLabel: 'Seconde A',
    serie: '2nde_a',
    serieLabel: 'Série A',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: toDefinitionsArray(ch.topics),
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Règle clé ${i + 1}`, statement: f })),
    formulas: [],
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Méthode ${i + 1}`,
      procedure: m,
      tip: 'Respecter le protocole d\'observation et d\'analyse en SVT.'
    })),
    examples: [],
    exercises: [],
    examTraps: [],
    quickMemo: `${ch.title} : programme officiel de Seconde A.`,
    keywords: [ch.title, 'svt 2nde a', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

for (const ch of svt2ndeCKnowledgeBase.chapters) {
  courses.push({
    id: `svt-2nde-c-${ch.id}`,
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre',
    level: '2nde',
    levelLabel: 'Seconde C',
    serie: '2nde_c',
    serieLabel: 'Série C',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: toDefinitionsArray(ch.topics),
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Loi / Propriété ${i + 1}`, statement: f })),
    formulas: [],
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Méthode ${i + 1}`,
      procedure: m,
      tip: 'Bien formaliser les hypothèses et l\'interprétation des résultats.'
    })),
    examples: [],
    exercises: [],
    examTraps: [],
    quickMemo: `${ch.title} : cours de SVT Seconde C.`,
    keywords: [ch.title, 'svt 2nde c', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

// 3. SVT 1ère A, C & D
for (const ch of svt1ereAKnowledgeBase.chapters) {
  courses.push({
    id: `svt-1ere-a-${ch.id}`,
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre',
    level: '1ere',
    levelLabel: 'Première A',
    serie: '1ere_a',
    serieLabel: 'Série A',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: toDefinitionsArray(ch.topics),
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Propriété ${i + 1}`, statement: f })),
    formulas: [],
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Démarche ${i + 1}`,
      procedure: m,
      tip: 'Précision du vocabulaire biologique.'
    })),
    examples: [],
    exercises: [],
    examTraps: [],
    quickMemo: `${ch.title} : programme officiel 1ère A.`,
    keywords: [ch.title, 'svt 1ere a', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

for (const ch of svt1ereCKnowledgeBase.chapters) {
  courses.push({
    id: `svt-1ere-c-${ch.id}`,
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre',
    level: '1ere',
    levelLabel: 'Première C',
    serie: '1ere_c',
    serieLabel: 'Série C',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: toDefinitionsArray(ch.topics),
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Propriété ${i + 1}`, statement: f })),
    formulas: [],
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Démarche ${i + 1}`,
      procedure: m,
      tip: 'Raisonnement scientifique et justification.'
    })),
    examples: [],
    exercises: [],
    examTraps: [],
    quickMemo: `${ch.title} : programme officiel 1ère C.`,
    keywords: [ch.title, 'svt 1ere c', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

for (const ch of svt1ereDKnowledgeBase.chapters) {
  courses.push({
    id: `svt-1ere-d-${ch.id}`,
    discipline: 'svt',
    disciplineLabel: 'Sciences de la Vie et de la Terre',
    level: '1ere',
    levelLabel: 'Première D',
    serie: '1ere_d',
    serieLabel: 'Série D',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: toDefinitionsArray(ch.topics),
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Propriété / Bilan ${i + 1}`, statement: f })),
    formulas: [],
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Démarche ${i + 1}`,
      procedure: m,
      tip: 'Analyse et interprétation de documents expérimentaux.'
    })),
    examples: [],
    exercises: [],
    examTraps: [],
    quickMemo: `${ch.title} : cours de SVT 1ère D.`,
    keywords: [ch.title, 'svt 1ere d', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

// 4. SVT Tle D (themes -> lessons)
if (svtTleDKnowledgeBase?.themes) {
  for (const theme of svtTleDKnowledgeBase.themes) {
    for (const lesson of theme.lessons) {
      courses.push({
        id: `svt-tle-d-${lesson.lessonNumber}-${theme.id}`,
        discipline: 'svt',
        disciplineLabel: 'Sciences de la Vie et de la Terre',
        level: 'terminale',
        levelLabel: 'Terminale D',
        serie: 'tle_d',
        serieLabel: 'Série D',
        chapter: `${theme.title} : ${lesson.title}`,
        lessonTitle: lesson.title,
        objectifs: lesson.objectives || [],
        fullCourseContent: [
          ...toDefinitionsArray(lesson.keyDefinitions).map(d => `• ${d.term} : ${d.definition}`),
          ...toPropertiesArray((lesson as any).formulasAndRules).map(p => `• ${p.name} : ${p.statement}`),
          ...(Array.isArray((lesson as any).methodologySteps) ? (lesson as any).methodologySteps : [])
        ].join('\n\n'),
        definitions: toDefinitionsArray(lesson.keyDefinitions),
        propertiesAndRules: toPropertiesArray((lesson as any).formulasAndRules),
        formulas: [],
        stepByStepMethods: (Array.isArray((lesson as any).methodologySteps) ? (lesson as any).methodologySteps : []).map((m: string, i: number) => ({
          stepNumber: i + 1,
          title: `Méthode ${i + 1}`,
          procedure: m,
          tip: 'Indispensable pour la restitution organisée de connaissances au Bac D.'
        })),
        examples: [],
        exercises: [],
        examTraps: Array.isArray(lesson.commonMistakesToAvoid) ? lesson.commonMistakesToAvoid : [],
        quickMemo: `${lesson.title} : notions clés de Terminale D.`,
        keywords: [lesson.title, theme.title, 'svt terminale d', ...(lesson.objectives || [])]
      });
    }
  }
}

// 5. Maths 6ème (MATHS_6E_CURRICULUM)
for (const item of MATHS_6E_CURRICULUM) {
  const defs = toDefinitionsArray(item.keyDefinitions);
  const props = toPropertiesArray(item.formulasAndRules);
  const forms = toFormulasArray(item.formulasAndRules);
  const methods = (Array.isArray(item.methodsAndAlgorithms) ? item.methodsAndAlgorithms : []).map((m: any, i: number) => ({
    stepNumber: i + 1,
    title: m.title || `Méthode ${i + 1}`,
    procedure: Array.isArray(m.steps) ? m.steps.join(' ; ') : (m.procedure || ''),
    tip: m.example || ''
  }));

  courses.push({
    id: `maths-6e-${item.lessonNumber}`,
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '6e',
    levelLabel: 'Sixième (6ème)',
    chapter: item.themeTitle,
    lessonTitle: item.lessonTitle,
    objectifs: item.objectives || [],
    fullCourseContent: [
      ...defs.map(d => `• Définition de ${d.term} : ${d.definition}`),
      ...props.map(f => `• Propriété / Règle : ${f.name} (${f.statement})`),
      ...methods.map(m => `• Méthode [${m.title}] : ${m.procedure}`)
    ].join('\n\n'),
    definitions: defs,
    propertiesAndRules: props,
    formulas: forms,
    stepByStepMethods: methods,
    examples: [],
    exercises: [],
    examTraps: Array.isArray(item.commonMistakesToAvoid) ? item.commonMistakesToAvoid : [],
    quickMemo: `${item.lessonTitle} : cours de Mathématiques 6ème.`,
    keywords: [item.lessonTitle, item.themeTitle, 'maths 6ème', ...(item.objectives || [])]
  });
}

// 6. Maths 2nde A & C
for (const ch of maths2ndeAKnowledgeBase.chapters) {
  courses.push({
    id: `maths-2nde-a-${ch.id}`,
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '2nde',
    levelLabel: 'Seconde A',
    serie: '2nde_a',
    serieLabel: 'Série A',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: toDefinitionsArray(ch.topics),
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Propriété ${i + 1}`, statement: f })),
    formulas: ch.formulas.map((f: string, i: number) => ({ name: `Formule ${i + 1}`, formula: f, explanation: '' })),
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Méthode ${i + 1}`,
      procedure: m,
      tip: 'Vérifier soigneusement chaque étape de calcul.'
    })),
    examples: [],
    exercises: [],
    examTraps: [],
    quickMemo: `${ch.title} : cours de Maths 2nde A.`,
    keywords: [ch.title, 'maths 2nde a', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

for (const ch of maths2ndeCKnowledgeBase.chapters) {
  courses.push({
    id: `maths-2nde-c-${ch.id}`,
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '2nde',
    levelLabel: 'Seconde C',
    serie: '2nde_c',
    serieLabel: 'Série C',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: toDefinitionsArray(ch.topics),
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Théorème / Règle ${i + 1}`, statement: f })),
    formulas: ch.formulas.map((f: string, i: number) => ({ name: `Formule ${i + 1}`, formula: f, explanation: '' })),
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Méthode ${i + 1}`,
      procedure: m,
      tip: 'Rigueur de la démonstration géométrique ou algébrique.'
    })),
    examples: [],
    exercises: [],
    examTraps: [],
    quickMemo: `${ch.title} : cours de Maths 2nde C.`,
    keywords: [ch.title, 'maths 2nde c', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

// 7. Maths 1ère C
for (const ch of maths1ereCKnowledgeBase.chapters) {
  courses.push({
    id: `maths-1ere-c-${ch.id}`,
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: '1ere',
    levelLabel: 'Première C',
    serie: '1ere_c',
    serieLabel: 'Série C',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: toDefinitionsArray(ch.topics),
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Propriété / Théorème ${i + 1}`, statement: f })),
    formulas: ch.formulas.map((f: string, i: number) => ({ name: `Formule ${i + 1}`, formula: f, explanation: '' })),
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Méthode ${i + 1}`,
      procedure: m,
      tip: 'Application méthodique des théorèmes au programme de 1ère C.'
    })),
    examples: [],
    exercises: [],
    examTraps: [],
    quickMemo: `${ch.title} : cours approfondi de Maths 1ère C.`,
    keywords: [ch.title, 'maths 1ere c', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

// 8. Maths Tle A & C & D
for (const ch of mathsTleAKnowledgeBase.chapters) {
  courses.push({
    id: `maths-tle-a-${ch.id}`,
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: 'terminale',
    levelLabel: 'Terminale A',
    serie: 'tle_a',
    serieLabel: 'Série A',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: toDefinitionsArray(ch.topics),
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Propriété ${i + 1}`, statement: f })),
    formulas: ch.formulas.map((f: string, i: number) => ({ name: `Formule ${i + 1}`, formula: f, explanation: '' })),
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Méthode ${i + 1}`,
      procedure: m,
      tip: 'Calculs de dérivées, limites et probabilités au Bac A.'
    })),
    examples: [],
    exercises: [],
    examTraps: [],
    quickMemo: `${ch.title} : cours de Maths Terminale A.`,
    keywords: [ch.title, 'maths terminale a', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

if (mathsTleCKnowledgeBase?.themes) {
  for (const theme of mathsTleCKnowledgeBase.themes) {
    for (const lesson of theme.lessons) {
      courses.push({
        id: `maths-tle-c-${lesson.lessonNumber}-${theme.id}`,
        discipline: 'mathematiques',
        disciplineLabel: 'Mathématiques',
        level: 'terminale',
        levelLabel: 'Terminale C',
        serie: 'tle_c',
        serieLabel: 'Série C',
        chapter: `${theme.themeTitle} : ${lesson.title}`,
        lessonTitle: lesson.title,
        objectifs: lesson.objectives || [],
        fullCourseContent: [
          ...toDefinitionsArray(lesson.keyDefinitions).map(d => `• ${d.term} : ${d.definition}`),
          ...toPropertiesArray(lesson.formulasAndTheorems).map(p => `• ${p.name} : ${p.statement}`)
        ].join('\n\n'),
        definitions: toDefinitionsArray(lesson.keyDefinitions),
        propertiesAndRules: toPropertiesArray(lesson.formulasAndTheorems),
        formulas: toFormulasArray(lesson.formulasAndTheorems),
        stepByStepMethods: (Array.isArray(lesson.methodsAndAlgorithms) ? lesson.methodsAndAlgorithms : []).map((m: any, i: number) => ({
          stepNumber: i + 1,
          title: m.title || `Méthode ${i + 1}`,
          procedure: Array.isArray(m.steps) ? m.steps.join(' ; ') : (m.procedure || ''),
          tip: m.example || ''
        })),
        examples: [],
        exercises: [],
        examTraps: Array.isArray(lesson.commonMistakesToAvoid) ? lesson.commonMistakesToAvoid : [],
        quickMemo: `${lesson.title} : cours de Maths Terminale C.`,
        keywords: [lesson.title, theme.themeTitle, 'maths terminale c', ...(lesson.objectives || [])]
      });
    }
  }
}

for (const item of MATHS_TLE_D_CURRICULUM) {
  const defs = toDefinitionsArray(item.keyDefinitions);
  const props = toPropertiesArray(item.formulasAndTheorems);
  const forms = toFormulasArray(item.formulasAndTheorems);
  const methods = (Array.isArray(item.methodsAndAlgorithms) ? item.methodsAndAlgorithms : []).map((m: any, i: number) => ({
    stepNumber: i + 1,
    title: m.title || `Méthode ${i + 1}`,
    procedure: Array.isArray(m.steps) ? m.steps.join(' ; ') : Array.isArray(m.stepByStep) ? m.stepByStep.join(' ; ') : (typeof m === 'string' ? m : m.description || ''),
    tip: m.example || m.description || ''
  }));

  courses.push({
    id: `maths-tle-d-${item.lessonNumber}`,
    discipline: 'mathematiques',
    disciplineLabel: 'Mathématiques',
    level: 'terminale',
    levelLabel: 'Terminale D',
    serie: 'tle_d',
    serieLabel: 'Série D',
    chapter: item.themeTitle,
    lessonTitle: item.lessonTitle,
    objectifs: item.objectives || [],
    fullCourseContent: [
      ...defs.map(d => `• ${d.term} : ${d.definition}`),
      ...props.map(f => `• ${f.name} : ${f.statement}`),
      ...methods.map(m => `• ${m.title} : ${m.procedure}`)
    ].join('\n\n'),
    definitions: defs,
    propertiesAndRules: props,
    formulas: forms,
    stepByStepMethods: methods,
    examples: [],
    exercises: [],
    examTraps: Array.isArray(item.commonMistakesToAvoid) ? item.commonMistakesToAvoid : [],
    quickMemo: `${item.lessonTitle} : cours officiel de Maths Terminale D.`,
    keywords: [item.lessonTitle, item.themeTitle, 'maths terminale d', ...(item.objectives || [])]
  });
}

// 9. Physique-Chimie 6ème, 2nde A, 2nde C, Tle C/D/E
for (const item of PC_6E_CURRICULUM) {
  const defs = toDefinitionsArray(item.keyDefinitions);
  const props = toPropertiesArray(item.formulasAndRules);
  const forms = toFormulasArray(item.formulasAndRules);
  const methods = (Array.isArray(item.methodologySteps) ? item.methodologySteps : []).map((m: any, i: number) => ({
    stepNumber: i + 1,
    title: m.title || `Étape ${i + 1}`,
    procedure: typeof m === 'string' ? m : (Array.isArray(m.steps) ? m.steps.join(' ; ') : m.description || ''),
    tip: 'Respecter les consignes de sécurité au laboratoire.'
  }));

  courses.push({
    id: `pc-6e-${item.lessonNumber}`,
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '6e',
    levelLabel: 'Sixième (6ème)',
    chapter: item.themeTitle,
    lessonTitle: item.lessonTitle,
    objectifs: item.objectives || [],
    fullCourseContent: [
      ...defs.map(d => `• ${d.term} : ${d.definition}`),
      ...props.map(f => `• ${f.name} : ${f.statement}`)
    ].join('\n\n'),
    definitions: defs,
    propertiesAndRules: props,
    formulas: forms,
    stepByStepMethods: methods,
    examples: [],
    exercises: [],
    examTraps: Array.isArray(item.commonMistakesToAvoid) ? item.commonMistakesToAvoid : [],
    quickMemo: `${item.lessonTitle} : cours de Physique-Chimie 6ème.`,
    keywords: [item.lessonTitle, item.themeTitle, 'pc 6ème', ...(item.objectives || [])]
  });
}

for (const ch of pc2ndeAKnowledgeBase.chapters) {
  courses.push({
    id: `pc-2nde-a-${ch.id}`,
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '2nde',
    levelLabel: 'Seconde A',
    serie: '2nde_a',
    serieLabel: 'Série A',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: toDefinitionsArray(ch.topics),
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Loi / Formule ${i + 1}`, statement: f })),
    formulas: ch.formulas.map((f: string, i: number) => ({ name: `Formule ${i + 1}`, formula: f, explanation: '' })),
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Méthode ${i + 1}`,
      procedure: m,
      tip: 'Vérifier les unités internationales (SI).'
    })),
    examples: [],
    exercises: [],
    examTraps: [],
    quickMemo: `${ch.title} : cours de Physique-Chimie 2nde A.`,
    keywords: [ch.title, 'pc 2nde a', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

for (const ch of pc2ndeCKnowledgeBase.chapters) {
  courses.push({
    id: `pc-2nde-c-${ch.id}`,
    discipline: 'physique_chimie',
    disciplineLabel: 'Physique-Chimie',
    level: '2nde',
    levelLabel: 'Seconde C',
    serie: '2nde_c',
    serieLabel: 'Série C',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: toDefinitionsArray(ch.topics),
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Loi physique ${i + 1}`, statement: f })),
    formulas: ch.formulas.map((f: string, i: number) => ({ name: `Formule ${i + 1}`, formula: f, explanation: '' })),
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Méthode ${i + 1}`,
      procedure: m,
      tip: 'Précision des bilans de forces et unités.'
    })),
    examples: [],
    exercises: [],
    examTraps: [],
    quickMemo: `${ch.title} : cours de Physique-Chimie 2nde C.`,
    keywords: [ch.title, 'pc 2nde c', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

if (pcTleCdeKnowledgeBase?.themes) {
  for (const theme of pcTleCdeKnowledgeBase.themes) {
    for (const lesson of theme.lessons) {
      courses.push({
        id: `pc-tle-${lesson.lessonNumber}-${theme.id}`,
        discipline: 'physique_chimie',
        disciplineLabel: 'Physique-Chimie',
        level: 'terminale',
        levelLabel: 'Terminale C, D, E',
        serie: 'tle_c',
        serieLabel: 'Séries C, D, E',
        chapter: `${theme.themeTitle} : ${lesson.title}`,
        lessonTitle: lesson.title,
        objectifs: lesson.objectives || [],
        fullCourseContent: [
          ...toDefinitionsArray(lesson.keyDefinitions).map(d => `• ${d.term} : ${d.definition}`),
          ...toPropertiesArray(lesson.formulasAndLaws).map(p => `• ${p.name} : ${p.statement}`)
        ].join('\n\n'),
        definitions: toDefinitionsArray(lesson.keyDefinitions),
        propertiesAndRules: toPropertiesArray(lesson.formulasAndLaws),
        formulas: toFormulasArray(lesson.formulasAndLaws),
        stepByStepMethods: (Array.isArray((lesson as any).methodologySteps) ? (lesson as any).methodologySteps : []).map((m: string, i: number) => ({
          stepNumber: i + 1,
          title: `Étape ${i + 1}`,
          procedure: m,
          tip: 'Indispensable pour la résolution des problèmes de Bac.'
        })),
        examples: [],
        exercises: [],
        examTraps: Array.isArray(lesson.commonMistakesToAvoid) ? lesson.commonMistakesToAvoid : [],
        quickMemo: `${lesson.title} : cours officiel de Physique-Chimie Terminale C/D/E.`,
        keywords: [lesson.title, theme.themeTitle, 'pc terminale c d e', ...(lesson.objectives || [])]
      });
    }
  }
}

// 10. Histoire-Géographie 6ème
for (const ch of histoireGeo6eKnowledgeBase.chapters) {
  const isGeo = ch.id.startsWith('geo');
  courses.push({
    id: `hg-6e-${ch.id}`,
    discipline: isGeo ? 'geographie' : 'histoire',
    disciplineLabel: isGeo ? 'Géographie' : 'Histoire',
    level: '6e',
    levelLabel: 'Sixième (6ème)',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: toDefinitionsArray(ch.topics),
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Repère clé ${i + 1}`, statement: f })),
    formulas: [],
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Méthode ${i + 1}`,
      procedure: m,
      tip: 'Toujours justifier avec les repères historiques ou géographiques.'
    })),
    examples: [],
    exercises: [],
    examTraps: [],
    quickMemo: `${ch.title} : cours d'Histoire-Géo 6ème.`,
    keywords: [ch.title, isGeo ? 'géographie 6ème' : 'histoire 6ème', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

// 11. Géographie 6ème (GEO_6E_CURRICULUM)
for (const item of GEO_6E_CURRICULUM) {
  const defs = toDefinitionsArray(item.keyDefinitions);
  const props = toPropertiesArray(item.coreConceptsAndRules);
  const methods = (Array.isArray(item.methodologySteps) ? item.methodologySteps : []).map((m: any, i: number) => ({
    stepNumber: i + 1,
    title: `Étape ${i + 1}`,
    procedure: typeof m === 'string' ? m : (m.title || m.procedure || ''),
    tip: 'Analyse méthodique des cartes et paysages.'
  }));

  courses.push({
    id: `geo-6e-curr-${item.lessonNumber}`,
    discipline: 'geographie',
    disciplineLabel: 'Géographie',
    level: '6e',
    levelLabel: 'Sixième (6ème)',
    chapter: item.themeTitle,
    lessonTitle: item.lessonTitle,
    objectifs: item.objectives || [],
    fullCourseContent: [
      ...defs.map(d => `• ${d.term} : ${d.definition}`),
      ...props.map(r => `• ${r.name} : ${r.statement}`)
    ].join('\n\n'),
    definitions: defs,
    propertiesAndRules: props,
    formulas: [],
    stepByStepMethods: methods,
    examples: [],
    exercises: [],
    examTraps: Array.isArray(item.commonMistakesToAvoid) ? item.commonMistakesToAvoid : [],
    quickMemo: `${item.lessonTitle} : cours de Géographie 6ème.`,
    keywords: [item.lessonTitle, item.themeTitle, 'géographie 6ème', ...(item.objectives || [])]
  });
}

// 12. Français 6ème
for (const ch of francais6eKnowledgeBase.chapters) {
  courses.push({
    id: `fr-6e-${ch.id}`,
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: '6e',
    levelLabel: 'Sixième (6ème)',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: toDefinitionsArray(ch.topics),
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Règle de grammaire / style ${i + 1}`, statement: f })),
    formulas: [],
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Démarche ${i + 1}`,
      procedure: m,
      tip: 'Application scrupuleuse des règles d\'orthographe et de grammaire.'
    })),
    examples: [],
    exercises: [],
    examTraps: [],
    quickMemo: `${ch.title} : cours de Français 6ème.`,
    keywords: [ch.title, 'français 6ème', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

// 13. Français Tle Dissertation
for (const ch of francaisTleDissertationKnowledgeBase.chapters) {
  courses.push({
    id: `fr-tle-dissert-${ch.id}`,
    discipline: 'francais',
    disciplineLabel: 'Français',
    level: 'terminale',
    levelLabel: 'Terminale',
    chapter: ch.title,
    lessonTitle: ch.title,
    objectifs: [...ch.topics].slice(0, 4),
    fullCourseContent: ch.topics.join('\n\n'),
    definitions: toDefinitionsArray(ch.topics),
    propertiesAndRules: ch.formulas.map((f: string, i: number) => ({ name: `Axe d'argumentation ${i + 1}`, statement: f })),
    formulas: [],
    stepByStepMethods: ch.methods.map((m: string, i: number) => ({
      stepNumber: i + 1,
      title: `Méthode ${i + 1}`,
      procedure: m,
      tip: 'Expliquer le mécanisme littéraire avant d\'insérer la citation avec son œuvre.'
    })),
    examples: [],
    exercises: [],
    examTraps: [
      'Ne jamais juxtaposer des citations sans explication préalable du procédé littéraire.',
      'Toujours préciser l\'auteur et le titre de l\'œuvre entre guillemets.'
    ],
    quickMemo: `${ch.title} : méthodologie de la dissertation littéraire au Bac.`,
    keywords: [ch.title, 'dissertation littéraire', 'français terminale', ...extractKeywords(ch.title, [...ch.topics])]
  });
}

export const CONVERTED_KNOWLEDGE_BASE_COURSES: OfficialIvorianCourse[] = courses;
