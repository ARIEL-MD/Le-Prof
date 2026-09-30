import { AcademicSerie } from '../types';

/**
 * Liste unique des séries/profils académiques (Côte d'Ivoire), partagée entre
 * SubjectInputPanel (résolution d'exercice) et HomeworkGraderView (correction
 * de devoir), afin que les deux fonctionnalités adaptent identiquement leurs
 * méthodes au niveau réel de l'élève (ex: ne jamais appliquer une méthode de
 * Terminale C à une copie de 6e ou de Terminale A2).
 */
export const ACADEMIC_SERIES_OPTIONS: Array<{
  id: AcademicSerie;
  label: string;
  shortLabel: string;
  desc: string;
  cycle: 'college' | 'lycee' | 'autre';
  gradeName: string;
}> = [
  { id: 'auto', label: 'Auto-détection', shortLabel: 'Auto', desc: 'Détecte automatiquement votre classe et niveau scolaire', cycle: 'autre', gradeName: 'Auto' },
  // Collège (Premier Cycle)
  { id: '6e', label: '6ᵉ', shortLabel: '6ᵉ', desc: 'Programme officiel 6e : initiation scientifique, calcul, géométrie, grammaire & récits', cycle: 'college', gradeName: '6ème' },
  { id: '5e', label: '5ᵉ', shortLabel: '5ᵉ', desc: 'Programme officiel 5e : priorité opératoire, fractions, proportionnalité, sciences', cycle: 'college', gradeName: '5ème' },
  { id: '4e', label: '4ᵉ', shortLabel: '4ᵉ', desc: 'Programme officiel 4e : théorème de Pythagore, puissances, équations, argumentation', cycle: 'college', gradeName: '4ème' },
  { id: '3e_bepc', label: '3ᵉ / BEPC', shortLabel: '3ᵉ BEPC', desc: 'Programme officiel 3e et méthodologie officielle examen BEPC (Thalès, trigonométrie, chimie, texte argumentatif)', cycle: 'college', gradeName: '3ème' },
  // Lycée (Second Cycle)
  { id: '2nde_a', label: '2nde A', shortLabel: '2nde A', desc: 'Programme officiel Seconde A : lettres, langues, histoire-géo, logique', cycle: 'lycee', gradeName: '2nde A' },
  { id: '2nde_c', label: '2nde C', shortLabel: '2nde C', desc: 'Programme officiel Seconde C : fonctions, vecteurs, trigonométrie, physique-chimie', cycle: 'lycee', gradeName: '2nde C' },
  { id: '1ere_a', label: '1ère A', shortLabel: '1ère A', desc: 'Programme officiel Première A : littérature africaine et mondiale, histoire-géo, langues', cycle: 'lycee', gradeName: '1ère A' },
  { id: '1ere_c', label: '1ère C', shortLabel: '1ère C', desc: 'Programme officiel Première C : barycentres, dérivation, produit scalaire, chimie organique', cycle: 'lycee', gradeName: '1ère C' },
  { id: '1ere_d', label: '1ère D', shortLabel: '1ère D', desc: 'Programme officiel Première D : biologie, géologie, fonctions, chimie', cycle: 'lycee', gradeName: '1ère D' },
  { id: 'tle_a', label: 'Terminale A', shortLabel: 'Tle A', desc: 'Programme officiel Terminale A : philosophie approfondie, littérature, probabilités A, histoire-géo Bac', cycle: 'lycee', gradeName: 'Tle A' },
  { id: 'tle_a1', label: 'Terminale A1', shortLabel: 'Tle A1', desc: 'Programme officiel Terminale A1 : dominante littéraire, langues vivantes renforcées, philo', cycle: 'lycee', gradeName: 'Tle A1' },
  { id: 'tle_a2', label: 'Terminale A2', shortLabel: 'Tle A2', desc: 'Programme officiel Terminale A2 : méthode de Mayer, moindres carrés A2, philo, géographie', cycle: 'lycee', gradeName: 'Tle A2' },
  { id: 'tle_c', label: 'Terminale C', shortLabel: 'Tle C', desc: 'Programme officiel Terminale C : arithmétique, géométrie dans l\'espace, intégrales, physique approfondie', cycle: 'lycee', gradeName: 'Tle C' },
  { id: 'tle_d', label: 'Terminale D', shortLabel: 'Tle D', desc: 'Programme officiel Terminale D : analyse (ln, exp, suites, intégrales), génétique, mécanique, chimie Bac', cycle: 'lycee', gradeName: 'Tle D' },
  { id: 'tle_e', label: 'Terminale E', shortLabel: 'Tle E', desc: 'Programme officiel Terminale E : mathématiques et physique appliquées, mécanique industrielle, électrotechnique', cycle: 'lycee', gradeName: 'Tle E' },
];
