import React, { useState } from 'react';
import {
  Calculator,
  Atom,
  Dna,
  Layers,
  ChevronDown,
  ChevronUp,
  Search,
  Info,
  Check
} from 'lucide-react';
import { MathText } from './MathText';
import { FractionFormulaBuilder } from './FractionFormulaBuilder';
import { cleanNaturalScientificText, isMathExpression, wrapInlineMath } from './RichScientificInput';

export interface ScientificSymbolItem {
  label: string;
  latex: string;
  insertText: string;
  description: string;
  category: 'fraction' | 'math' | 'analyse' | 'ensembles' | 'geometrie' | 'physique' | 'chimie' | 'svt';
  subject?: 'math' | 'pc' | 'svt' | 'all';
}

export const SCIENTIFIC_SYMBOLS: ScientificSymbolItem[] = [
  // --- FRACTIONS & OPÉRATIONS FONDAMENTALES ---
  { label: '3/x', latex: '\\frac{3}{x}', insertText: '3/x', description: 'Fraction 3 sur x', category: 'fraction', subject: 'math' },
  { label: 'a/b', latex: '\\frac{a}{b}', insertText: 'a/b', description: 'Fraction a sur b', category: 'fraction', subject: 'all' },
  { label: '1/2', latex: '\\frac{1}{2}', insertText: '1/2', description: 'Fraction un demi', category: 'fraction', subject: 'all' },
  { label: '1/x', latex: '\\frac{1}{x}', insertText: '1/x', description: 'Fraction 1 sur x', category: 'fraction', subject: 'math' },
  { label: '1/x²', latex: '\\frac{1}{x^2}', insertText: '1/x²', description: 'Fraction 1 sur x²', category: 'fraction', subject: 'math' },
  { label: 'n/V', latex: '\\frac{n}{V}', insertText: 'n/V', description: 'Concentration molaire C = n/V', category: 'fraction', subject: 'pc' },
  { label: 'm/M', latex: '\\frac{m}{M}', insertText: 'm/M', description: 'Quantité de matière n = m/M', category: 'fraction', subject: 'pc' },
  { label: '√x', latex: '\\sqrt{x}', insertText: '√x', description: 'Racine carrée de x', category: 'fraction', subject: 'math' },
  { label: '√3', latex: '\\sqrt{3}', insertText: '√3', description: 'Racine carrée de 3', category: 'fraction', subject: 'math' },
  { label: 'ⁿ√x', latex: '\\sqrt[n]{x}', insertText: 'ⁿ√x', description: 'Racine n-ième', category: 'fraction', subject: 'math' },
  { label: 'x²', latex: 'x^2', insertText: 'x²', description: 'x au carré', category: 'fraction', subject: 'math' },
  { label: 'x³', latex: 'x^3', insertText: 'x³', description: 'x au cube', category: 'fraction', subject: 'math' },
  { label: 'xⁿ', latex: 'x^n', insertText: 'xⁿ', description: 'x puissance n', category: 'fraction', subject: 'math' },
  { label: 'uₙ', latex: 'u_n', insertText: 'uₙ', description: 'Terme d\'une suite u_n', category: 'fraction', subject: 'math' },
  { label: 'uₙ₊₁', latex: 'u_{n+1}', insertText: 'uₙ₊₁', description: 'Terme suivant u_{n+1}', category: 'fraction', subject: 'math' },
  { label: '±', latex: '\\pm', insertText: '±', description: 'Plus ou moins', category: 'fraction', subject: 'all' },
  { label: '×', latex: '\\times', insertText: ' × ', description: 'Multiplication mathématique', category: 'fraction', subject: 'all' },
  { label: '÷', latex: '\\div', insertText: ' ÷ ', description: 'Division', category: 'fraction', subject: 'all' },
  { label: '|x|', latex: '|x|', insertText: '|x|', description: 'Valeur absolue de x', category: 'fraction', subject: 'math' },

  // --- MATHS : ANALYSE & FONCTIONS ---
  { label: 'lim 0⁺', latex: '\\lim_{x \\to 0^+} f(x)', insertText: 'lim (x → 0⁺) f(x)', description: 'Limite en 0 par valeurs supérieures', category: 'analyse', subject: 'math' },
  { label: 'lim 0⁻', latex: '\\lim_{x \\to 0^-} f(x)', insertText: 'lim (x → 0⁻) f(x)', description: 'Limite en 0 par valeurs inférieures', category: 'analyse', subject: 'math' },
  { label: 'lim +∞', latex: '\\lim_{x \\to +\\infty} f(x)', insertText: 'lim (x → +∞) f(x)', description: 'Limite en plus l\'infini', category: 'analyse', subject: 'math' },
  { label: 'lim -∞', latex: '\\lim_{x \\to -\\infty} f(x)', insertText: 'lim (x → -∞) f(x)', description: 'Limite en moins l\'infini', category: 'analyse', subject: 'math' },
  { label: '+∞', latex: '+\\infty', insertText: '+∞', description: 'Plus l\'infini', category: 'analyse', subject: 'math' },
  { label: '-∞', latex: '-\\infty', insertText: '-∞', description: 'Moins l\'infini', category: 'analyse', subject: 'math' },
  { label: "f'(x)", latex: "f'(x)", insertText: "f'(x)", description: 'Dérivée première f\'(x)', category: 'analyse', subject: 'math' },
  { label: "f''(x)", latex: "f''(x)", insertText: "f''(x)", description: 'Dérivée seconde f\'\'(x)', category: 'analyse', subject: 'math' },
  { label: 'ln(x)', latex: '\\ln(x)', insertText: 'ln(x)', description: 'Logarithme népérien', category: 'analyse', subject: 'math' },
  { label: 'eˣ', latex: 'e^x', insertText: 'eˣ', description: 'Fonction exponentielle e^x', category: 'analyse', subject: 'math' },
  { label: 'e⁻ˣ', latex: 'e^{-x}', insertText: 'e⁻ˣ', description: 'Exponentielle négative', category: 'analyse', subject: 'math' },
  { label: '∫ f(x)dx', latex: '\\int f(x)\\,dx', insertText: '∫ f(x) dx', description: 'Intégrale ou primitive', category: 'analyse', subject: 'math' },
  { label: '∫ₐᵇ f(x)dx', latex: '\\int_a^b f(x)\\,dx', insertText: '∫[a,b] f(x) dx', description: 'Intégrale de a à b', category: 'analyse', subject: 'math' },
  { label: '∑', latex: '\\sum_{i=1}^n', insertText: '∑(i=1..n)', description: 'Somme indexée', category: 'analyse', subject: 'math' },
  { label: 'cos(x)', latex: '\\cos(x)', insertText: 'cos(x)', description: 'Cosinus', category: 'analyse', subject: 'math' },
  { label: 'sin(x)', latex: '\\sin(x)', insertText: 'sin(x)', description: 'Sinus', category: 'analyse', subject: 'math' },
  { label: 'tan(x)', latex: '\\tan(x)', insertText: 'tan(x)', description: 'Tangente', category: 'analyse', subject: 'math' },
  { label: 'π', latex: '\\pi', insertText: 'π', description: 'Nombre Pi', category: 'analyse', subject: 'math' },
  { label: 'Δ', latex: '\\Delta', insertText: 'Δ', description: 'Delta (Discriminant ou variation)', category: 'analyse', subject: 'all' },
  { label: 'α', latex: '\\alpha', insertText: 'α', description: 'Alpha', category: 'analyse', subject: 'math' },
  { label: 'β', latex: '\\beta', insertText: 'β', description: 'Bêta', category: 'analyse', subject: 'math' },
  { label: 'θ', latex: '\\theta', insertText: 'θ', description: 'Angle Thêta', category: 'analyse', subject: 'all' },

  // --- ENSEMBLES, INTERVALLES & LOGIQUE ---
  { label: ']0;+∞[', latex: ']0; +\\infty[', insertText: ']0; +∞[', description: 'Intervalle ouvert des réels strictement positifs', category: 'ensembles', subject: 'math' },
  { label: '[0;+∞[', latex: '[0; +\\infty[', insertText: '[0; +∞[', description: 'Intervalle des réels positifs', category: 'ensembles', subject: 'math' },
  { label: ']-∞;0[', latex: ']-\\infty; 0[', insertText: ']-∞; 0[', description: 'Intervalle des réels strictement négatifs', category: 'ensembles', subject: 'math' },
  { label: '[a;b]', latex: '[a; b]', insertText: '[a; b]', description: 'Segment fermé [a ; b]', category: 'ensembles', subject: 'math' },
  { label: 'ℝ', latex: '\\mathbb{R}', insertText: 'ℝ', description: 'Ensemble des nombres réels', category: 'ensembles', subject: 'math' },
  { label: 'ℝ*', latex: '\\mathbb{R}^*', insertText: 'ℝ*', description: 'Ensemble des réels non nuls', category: 'ensembles', subject: 'math' },
  { label: 'ℝ₊*', latex: '\\mathbb{R}_+^*', insertText: 'ℝ₊*', description: 'Réels strictement positifs', category: 'ensembles', subject: 'math' },
  { label: 'ℕ', latex: '\\mathbb{N}', insertText: 'ℕ', description: 'Ensemble des entiers naturels', category: 'ensembles', subject: 'math' },
  { label: 'ℤ', latex: '\\mathbb{Z}', insertText: 'ℤ', description: 'Ensemble des entiers relatifs', category: 'ensembles', subject: 'math' },
  { label: 'ℂ', latex: '\\mathbb{C}', insertText: 'ℂ', description: 'Ensemble des nombres complexes', category: 'ensembles', subject: 'math' },
  { label: '∈', latex: '\\in', insertText: ' ∈ ', description: 'Appartient à', category: 'ensembles', subject: 'math' },
  { label: '∉', latex: '\\notin', insertText: ' ∉ ', description: 'N\'appartient pas à', category: 'ensembles', subject: 'math' },
  { label: '⊂', latex: '\\subset', insertText: ' ⊂ ', description: 'Inclus dans', category: 'ensembles', subject: 'math' },
  { label: '∩', latex: '\\cap', insertText: ' ∩ ', description: 'Intersection', category: 'ensembles', subject: 'math' },
  { label: '∪', latex: '\\cup', insertText: ' ∪ ', description: 'Union', category: 'ensembles', subject: 'math' },
  { label: '∅', latex: '\\emptyset', insertText: '∅', description: 'Ensemble vide', category: 'ensembles', subject: 'math' },
  { label: '∀', latex: '\\forall', insertText: '∀', description: 'Pour tout (quantificateur universel)', category: 'ensembles', subject: 'math' },
  { label: '∃', latex: '\\exists', insertText: '∃', description: 'Il existe', category: 'ensembles', subject: 'math' },
  { label: '⟺', latex: '\\iff', insertText: ' ⟺ ', description: 'Équivaut à (si et seulement si)', category: 'ensembles', subject: 'math' },
  { label: '⟹', latex: '\\implies', insertText: ' ⟹ ', description: 'Implique', category: 'ensembles', subject: 'math' },
  { label: 'A_n^p', latex: 'A_n^p = \\frac{n!}{(n-p)!}', insertText: 'A(n,p)', description: 'Arrangements de p éléments parmi n', category: 'ensembles', subject: 'math' },
  { label: 'C_n^p', latex: '\\binom{n}{p} = \\frac{n!}{p!(n-p)!}', insertText: 'C(n,p)', description: 'Combinaisons de p éléments parmi n', category: 'ensembles', subject: 'math' },
  { label: 'n!', latex: 'n!', insertText: 'n!', description: 'Factorielle n', category: 'ensembles', subject: 'math' },
  { label: 'P(A∩B)', latex: 'P(A \\cap B)', insertText: 'P(A ∩ B)', description: 'Probabilité de l\'intersection', category: 'ensembles', subject: 'math' },
  { label: 'P_A(B)', latex: 'P_A(B) = \\frac{P(A \\cap B)}{P(A)}', insertText: 'P_A(B) = P(A ∩ B) / P(A)', description: 'Probabilité conditionnelle de B sachant A', category: 'ensembles', subject: 'math' },
  { label: 'X ~ B(n,p)', latex: 'P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}', insertText: 'P(X=k) = C(n,k)·p^k·(1-p)^(n-k)', description: 'Loi binomiale B(n, p)', category: 'ensembles', subject: 'math' },
  { label: 'G(x̄, ȳ)', latex: 'G(\\bar{x}, \\bar{y})', insertText: 'G(x̄, ȳ)', description: 'Point moyen du nuage de points', category: 'ensembles', subject: 'math' },
  { label: 'Cov(X,Y)', latex: '\\text{Cov}(X,Y)', insertText: 'Cov(X,Y)', description: 'Covariance statistique', category: 'ensembles', subject: 'math' },
  { label: 'r', latex: 'r = \\frac{\\text{Cov}(X,Y)}{\\sigma_X \\sigma_Y}', insertText: 'r = Cov(X,Y) / (σ_X · σ_Y)', description: 'Coefficient de corrélation linéaire', category: 'ensembles', subject: 'math' },
  { label: 'y=ax+b', latex: 'y = ax + b', insertText: 'y = ax + b', description: 'Droite de régression des moindres carrés', category: 'ensembles', subject: 'math' },
  { label: '≤', latex: '\\le', insertText: '≤', description: 'Inférieur ou égal', category: 'ensembles', subject: 'math' },
  { label: '≥', latex: '\\ge', insertText: '≥', description: 'Supérieur ou égal', category: 'ensembles', subject: 'math' },
  { label: '≠', latex: '\\neq', insertText: '≠', description: 'Différent de', category: 'ensembles', subject: 'math' },
  { label: '≈', latex: '\\approx', insertText: '≈', description: 'Environ égal', category: 'ensembles', subject: 'all' },

  // --- GÉOMÉTRIE & VECTEURS ---
  { label: '(C_f)', latex: '(C_f)', insertText: '(C_f)', description: 'Courbe représentative de la fonction f', category: 'geometrie', subject: 'math' },
  { label: '⃗u', latex: '\\vec{u}', insertText: 'u⃗', description: 'Vecteur u', category: 'geometrie', subject: 'math' },
  { label: '⃗v', latex: '\\vec{v}', insertText: 'v⃗', description: 'Vecteur v', category: 'geometrie', subject: 'math' },
  { label: '⃗AB', latex: '\\vec{AB}', insertText: 'AB⃗', description: 'Vecteur AB', category: 'geometrie', subject: 'math' },
  { label: '(O; i⃗, j⃗)', latex: '(O; \\vec{i}, \\vec{j})', insertText: '(O; i⃗, j⃗)', description: 'Repère orthonormé du plan', category: 'geometrie', subject: 'math' },
  { label: '⃗0', latex: '\\vec{0}', insertText: '0⃗', description: 'Vecteur nul', category: 'geometrie', subject: 'math' },
  { label: '||⃗u||', latex: '\\|\\vec{u}\\|', insertText: '||u⃗||', description: 'Norme du vecteur u', category: 'geometrie', subject: 'math' },
  { label: '⃗u · ⃗v', latex: '\\vec{u} \\cdot \\vec{v}', insertText: 'u⃗ · v⃗', description: 'Produit scalaire u scalaire v', category: 'geometrie', subject: 'math' },
  { label: '⊥', latex: '\\perp', insertText: ' ⊥ ', description: 'Perpendiculaire / orthogonal', category: 'geometrie', subject: 'math' },
  { label: '∥', latex: '\\parallel', insertText: ' ∥ ', description: 'Parallèle', category: 'geometrie', subject: 'math' },
  { label: 'Â', latex: '\\widehat{A}', insertText: 'Â', description: 'Angle chapeau A', category: 'geometrie', subject: 'math' },
  { label: 'ABC^', latex: '\\widehat{ABC}', insertText: 'ABĈ', description: 'Angle géométrique ABC', category: 'geometrie', subject: 'math' },
  { label: '°', latex: '^\\circ', insertText: '°', description: 'Degré d\'angle ou Celsius', category: 'geometrie', subject: 'all' },

  // --- PHYSIQUE (PC) ---
  { label: '⃗P', latex: '\\vec{P}', insertText: 'P⃗', description: 'Vecteur Poids (P = m · g)', category: 'physique', subject: 'pc' },
  { label: '⃗R', latex: '\\vec{R}', insertText: 'R⃗', description: 'Vecteur Réaction du support', category: 'physique', subject: 'pc' },
  { label: '⃗F', latex: '\\vec{F}', insertText: 'F⃗', description: 'Vecteur Force', category: 'physique', subject: 'pc' },
  { label: '⃗v', latex: '\\vec{v}', insertText: 'v⃗', description: 'Vecteur Vitesse', category: 'physique', subject: 'pc' },
  { label: '⃗a', latex: '\\vec{a}', insertText: 'a⃗', description: 'Vecteur Accélération', category: 'physique', subject: 'pc' },
  { label: 'Δt', latex: '\\Delta t', insertText: 'Δt', description: 'Durée ou intervalle de temps', category: 'physique', subject: 'pc' },
  { label: 'ΔE', latex: '\\Delta E', insertText: 'ΔE', description: 'Variation d\'énergie', category: 'physique', subject: 'pc' },
  { label: 'Ec', latex: 'E_c = \\frac{1}{2}mv^2', insertText: 'Ec = 1/2 · m · v²', description: 'Énergie cinétique', category: 'physique', subject: 'pc' },
  { label: 'Ep', latex: 'E_p = m g h', insertText: 'Ep = m · g · h', description: 'Énergie potentielle de pesanteur', category: 'physique', subject: 'pc' },
  { label: 'Em', latex: 'E_m = E_c + E_p', insertText: 'Em = Ec + Ep', description: 'Énergie mécanique totale', category: 'physique', subject: 'pc' },
  { label: 'U=R.I', latex: 'U = R \\cdot I', insertText: 'U = R · I', description: 'Loi d\'Ohm', category: 'physique', subject: 'pc' },
  { label: 'Ω', latex: '\\Omega', insertText: 'Ω', description: 'Ohm (résistance)', category: 'physique', subject: 'pc' },
  { label: 'μF', latex: '\\mu\\text{F}', insertText: 'μF', description: 'Microfarad (capacité condensateur)', category: 'physique', subject: 'pc' },
  { label: 'λ', latex: '\\lambda', insertText: 'λ', description: 'Longueur d\'onde ou constante radioactive', category: 'physique', subject: 'pc' },
  { label: 'ρ', latex: '\\rho', insertText: 'ρ', description: 'Masse volumique ou résistivité', category: 'physique', subject: 'pc' },
  { label: 'τ', latex: '\\tau', insertText: 'τ', description: 'Constante de temps (circuit RC/RL)', category: 'physique', subject: 'pc' },
  { label: 'm/s²', latex: '\\text{m/s}^2', insertText: 'm/s²', description: 'Unité d\'accélération', category: 'physique', subject: 'pc' },
  { label: 'J', latex: '\\text{J}', insertText: 'J', description: 'Joule (énergie)', category: 'physique', subject: 'pc' },
  { label: 'W', latex: '\\text{W}', insertText: 'W', description: 'Watt (puissance)', category: 'physique', subject: 'pc' },
  { label: 'N', latex: '\\text{N}', insertText: 'N', description: 'Newton (force)', category: 'physique', subject: 'pc' },
  { label: 'Pa', latex: '\\text{Pa}', insertText: 'Pa', description: 'Pascal (pression)', category: 'physique', subject: 'pc' },

  // --- CHIMIE (PC) ---
  { label: '⇄', latex: '\\rightleftharpoons', insertText: ' ⇄ ', description: 'Équilibre chimique réversible', category: 'chimie', subject: 'pc' },
  { label: '⟶', latex: '\\longrightarrow', insertText: ' ⟶ ', description: 'Réaction chimique totale', category: 'chimie', subject: 'pc' },
  { label: 'H₃O⁺', latex: '[\\text{H}_3\\text{O}^+]', insertText: '[H₃O⁺]', description: 'Ion oxonium / hydronium', category: 'chimie', subject: 'pc' },
  { label: 'HO⁻', latex: '[\\text{HO}^-]', insertText: '[HO⁻]', description: 'Ion hydroxyde', category: 'chimie', subject: 'pc' },
  { label: 'H₂O', latex: '\\text{H}_2\\text{O}', insertText: 'H₂O', description: 'Eau', category: 'chimie', subject: 'pc' },
  { label: 'CO₂', latex: '\\text{CO}_2', insertText: 'CO₂', description: 'Dioxyde de carbone', category: 'chimie', subject: 'pc' },
  { label: 'O₂', latex: '\\text{O}_2', insertText: 'O₂', description: 'Dioxygène', category: 'chimie', subject: 'pc' },
  { label: 'pH', latex: '\\text{pH} = -\\log[\\text{H}_3\\text{O}^+]', insertText: 'pH = -log[H₃O⁺]', description: 'Potentiel hydrogène', category: 'chimie', subject: 'pc' },
  { label: 'pKa', latex: '\\text{p}K_a', insertText: 'pKₐ', description: 'Constante d\'acidité', category: 'chimie', subject: 'pc' },
  { label: 'mol/L', latex: '\\text{mol/L}', insertText: 'mol/L', description: 'Concentration molaire', category: 'chimie', subject: 'pc' },
  { label: 'g/mol', latex: '\\text{g/mol}', insertText: 'g/mol', description: 'Masse molaire M', category: 'chimie', subject: 'pc' },
  { label: '[X]', latex: '[\\text{X}]', insertText: '[X]', description: 'Concentration effective de l\'espèce X', category: 'chimie', subject: 'pc' },
  { label: 'n=m/M', latex: 'n = \\frac{m}{M}', insertText: 'n = m / M', description: 'Formule des moles par la masse', category: 'chimie', subject: 'pc' },
  { label: 'C=n/V', latex: 'C = \\frac{n}{V}', insertText: 'C = n / V', description: 'Formule de concentration molaire', category: 'chimie', subject: 'pc' },
  { label: 'Ka', latex: 'K_a = \\frac{[\\text{A}^-] \\cdot [\\text{H}_3\\text{O}^+]}{[\\text{AH}]}', insertText: 'Kₐ = ([A⁻] · [H₃O⁺]) / [AH]', description: 'Constante d\'équilibre d\'un acide', category: 'chimie', subject: 'pc' },

  // --- SVT & SCIENCES NATURELLES ---
  { label: '♀', latex: '\\text{♀ (Femelle)}', insertText: '♀', description: 'Individu femelle / Fleur femelle', category: 'svt', subject: 'svt' },
  { label: '♂', latex: '\\text{♂ (Mâle)}', insertText: '♂', description: 'Individu mâle / Fleur mâle', category: 'svt', subject: 'svt' },
  { label: '× (Croisement)', latex: '\\times \\text{ (Croisement)}', insertText: ' × ', description: 'Croisement génétique entre deux lignées', category: 'svt', subject: 'svt' },
  { label: '[A//a]', latex: '[\\text{A//a}]', insertText: '[A//a]', description: 'Génotype hétérozygote', category: 'svt', subject: 'svt' },
  { label: '[A//A]', latex: '[\\text{A//A}]', insertText: '[A//A]', description: 'Génotype homozygote dominant', category: 'svt', subject: 'svt' },
  { label: '[a//a]', latex: '[\\text{a//a}]', insertText: '[a//a]', description: 'Génotype homozygote récessif', category: 'svt', subject: 'svt' },
  { label: 'F₁', latex: 'F_1', insertText: 'F₁', description: 'Première génération filiale (100% hybride)', category: 'svt', subject: 'svt' },
  { label: 'F₂', latex: 'F_2', insertText: 'F₂', description: 'Deuxième génération issue du croisement F1 x F1', category: 'svt', subject: 'svt' },
  { label: '(A)', latex: '(A)', insertText: '(A)', description: 'Phénotype ou allèle porté par le gamète', category: 'svt', subject: 'svt' },
  { label: 'ADN', latex: '\\text{ADN}', insertText: 'ADN', description: 'Acide Désoxyribonucléique', category: 'svt', subject: 'svt' },
  { label: 'ARNm', latex: '\\text{ARNm}', insertText: 'ARNm', description: 'ARN messager', category: 'svt', subject: 'svt' },
  { label: 'ATP', latex: '\\text{ATP}', insertText: 'ATP', description: 'Adénosine Triphosphate (énergie cellulaire)', category: 'svt', subject: 'svt' },
  { label: 'ADP', latex: '\\text{ADP} + \\text{Pi}', insertText: 'ADP + Pi', description: 'Adénosine Diphosphate + Phosphate inorganique', category: 'svt', subject: 'svt' },
  { label: 'μm', latex: '\\mu\\text{m}', insertText: 'μm', description: 'Micromètre (échelle cellulaire)', category: 'svt', subject: 'svt' },
  { label: 'C₆H₁₂O₆', latex: '\\text{C}_6\\text{H}_{12}\\text{O}_6', insertText: 'C₆H₁₂O₆', description: 'Glucose (photosynthèse et respiration)', category: 'svt', subject: 'svt' },
  { label: 'Caryotype', latex: '2n = 46', insertText: '2n = 46', description: 'Formule chromosomique diploïde humaine', category: 'svt', subject: 'svt' },
  { label: 'n haploïde', latex: 'n = 23', insertText: 'n = 23', description: 'Formule chromosomique des gamètes', category: 'svt', subject: 'svt' },
];

interface ScientificSymbolsBarProps {
  onInsert: (text: string) => void;
  className?: string;
  defaultOpen?: boolean;
}

export const ScientificSymbolsBar: React.FC<ScientificSymbolsBarProps> = ({
  onInsert,
  className = '',
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [activeTab, setActiveTab] = useState<'all' | 'fraction' | 'math' | 'pc' | 'svt'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);

  // Modal custom fraction wizard
  const [showFractionBuilder, setShowFractionBuilder] = useState(false);

  const filteredSymbols = SCIENTIFIC_SYMBOLS.filter((sym) => {
    // Subject filter
    if (activeTab === 'fraction') {
      if (sym.category !== 'fraction') return false;
    } else if (activeTab === 'math') {
      if (sym.subject !== 'math' && sym.category !== 'fraction' && sym.category !== 'analyse' && sym.category !== 'ensembles' && sym.category !== 'geometrie') return false;
    } else if (activeTab === 'pc') {
      if (sym.subject !== 'pc' && sym.category !== 'physique' && sym.category !== 'chimie') return false;
    } else if (activeTab === 'svt') {
      if (sym.subject !== 'svt' && sym.category !== 'svt') return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        sym.label.toLowerCase().includes(q) ||
        sym.description.toLowerCase().includes(q) ||
        sym.insertText.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleSymbolClick = (item: ScientificSymbolItem) => {
    // Toujours privilégier la vraie formule LaTeX (ex: \frac{a}{b}, \sqrt{x}, x^2, \vec{u}, etc.)
    // pour qu'elle s'affiche sous forme d'îlot MathLive modifiable
    const raw = item.latex || item.insertText;
    const clean = cleanNaturalScientificText(raw);
    const toInsert = isMathExpression(clean) ? wrapInlineMath(clean) : clean;
    onInsert(toInsert);
    setCopiedSymbol(item.label);
    setTimeout(() => setCopiedSymbol(null), 1200);
  };

  return (
    <div className={`border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900/90 shadow-xs transition-all ${className}`}>
      {/* Header Toggle */}
      <div className="flex items-center justify-between p-2.5 sm:p-3 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/60 rounded-t-xl">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300">
            <Calculator className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Palette de Symboles & Fractions (Maths • PC • SVT)</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200 dark:border-indigo-800">
            Fractions empilées \frac&#123;a&#125;&#123;b&#125;, racines, limites, vecteurs, chimie, génétique
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Quick Fraction Creator Shortcut */}
          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setShowFractionBuilder((prev) => !prev);
            }}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-xs cursor-pointer active:scale-95"
            title="Ouvrir le bâtisseur de fraction personnalisée avec tous les symboles"
          >
            <span>+ Fraction</span>
            <span className="font-mono text-[11px] bg-white/20 px-1.5 py-0.2 rounded-md">a/b</span>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors cursor-pointer"
            title={isOpen ? 'Replier la palette de symboles' : 'Déplier tous les symboles'}
          >
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Direct Quick-Access Chips when collapsed or open */}
      <div className="p-2 sm:p-2.5 bg-slate-50/40 dark:bg-slate-950/30 flex items-center gap-1.5 overflow-x-auto no-scrollbar border-b border-slate-100 dark:border-slate-800/60">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 shrink-0 mr-1 flex items-center gap-1">
          <Info className="w-3 h-3 text-indigo-500" />
          <span>Accès direct :</span>
        </span>
        
        {/* Most used symbols in high school baccalaureate (CI / African & French curriculum) */}
        {[
          { text: '\\frac{3}{x}', display: '3/x', title: 'Fraction 3/x' },
          { text: '\\frac{a}{b}', display: 'a/b', title: 'Fraction empilée LaTeX \\frac{a}{b}' },
          { text: 'K_a = \\frac{[\\text{A}^-] \\cdot [\\text{H}_3\\text{O}^+]}{[\\text{AH}]}', display: 'Ka (Acide)', title: 'Formule constante Ka' },
          { text: ']0; +\\infty[', display: ']0;+∞[', title: 'Intervalle ]0 ; +∞[' },
          { text: '+\\infty', display: '+∞', title: 'Plus l\'infini' },
          { text: '-\\infty', display: '-∞', title: 'Moins l\'infini' },
          { text: '\\sqrt{3}', display: '√3', title: 'Racine carrée de 3' },
          { text: "f'(x)", display: "f'(x)", title: 'Dérivée f\'(x)' },
          { text: '\\lim_{x \\to 0^+} f(x)', display: 'lim 0⁺', title: 'Limite en 0⁺' },
          { text: '\\lim_{x \\to +\\infty} f(x)', display: 'lim +∞', title: 'Limite en +∞' },
          { text: '(C_f)', display: '(Cf)', title: 'Courbe représentative (Cf)' },
          { text: '\\vec{u}', display: '⃗u', title: 'Vecteur u' },
          { text: '\\vec{P}', display: '⃗P', title: 'Poids en physique' },
          { text: ' \\rightleftharpoons ', display: '⇄', title: 'Équilibre chimique' },
          { text: '♀', display: '♀', title: 'Femelle SVT' },
          { text: '♂', display: '♂', title: 'Mâle SVT' },
        ].map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onInsert(cleanNaturalScientificText(item.text))}
            className="px-2 py-1 text-xs font-mono font-semibold rounded-lg bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/80 text-indigo-900 dark:text-indigo-200 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600 shadow-2xs transition-all cursor-pointer shrink-0 active:scale-95"
            title={item.title}
          >
            {item.display}
          </button>
        ))}
      </div>

      {/* Expanded Full Palette */}
      {isOpen && (
        <div className="p-3 sm:p-4 space-y-3">
          
          {/* Custom Fraction Builder Component with Symbol Keypad & Live KaTeX */}
          {showFractionBuilder && (
            <div className="mb-3">
              <FractionFormulaBuilder
                onInsert={(latex) => {
                  onInsert(cleanNaturalScientificText(latex));
                  setShowFractionBuilder(false);
                }}
                onClose={() => setShowFractionBuilder(false)}
              />
            </div>
          )}

          {/* Discipline Category Tabs & Search Bar */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer shrink-0 ${
                  activeTab === 'all'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>Tous les symboles ({SCIENTIFIC_SYMBOLS.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('fraction')}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer shrink-0 ${
                  activeTab === 'fraction'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <span className="font-mono font-bold text-[11px]">a/b</span>
                <span>Fractions & Racines</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('math')}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer shrink-0 ${
                  activeTab === 'math'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Calculator className="w-3 h-3" />
                <span>Mathématiques</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('pc')}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer shrink-0 ${
                  activeTab === 'pc'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Atom className="w-3 h-3" />
                <span>Physique-Chimie</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('svt')}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer shrink-0 ${
                  activeTab === 'svt'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Dna className="w-3 h-3" />
                <span>SVT & Biologie</span>
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-48">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filtrer (ex: lim, ohm, gamète...)"
                className="w-full text-xs pl-8 pr-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Grid of Clickable Symbols with Live Tooltip Preview */}
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1.5 max-h-56 overflow-y-auto p-1 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/50 dark:bg-slate-950/50">
            {filteredSymbols.map((sym, index) => {
              const isCopied = copiedSymbol === sym.label;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSymbolClick(sym)}
                  title={`${sym.description} (${sym.insertText})`}
                  className={`relative group flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all cursor-pointer active:scale-95 ${
                    isCopied
                      ? 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                      : 'bg-white dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 text-slate-800 dark:text-slate-200 shadow-2xs'
                  }`}
                >
                  {isCopied ? (
                    <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 py-1">
                      <Check className="w-3.5 h-3.5" />
                      <span>Inséré !</span>
                    </div>
                  ) : (
                    <>
                      <div className="font-serif text-sm font-semibold text-indigo-950 dark:text-indigo-100 mb-0.5 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                        <MathText text={`$${sym.latex}$`} />
                      </div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 font-sans leading-tight">
                        {sym.label}
                      </span>
                    </>
                  )}
                </button>
              );
            })}

            {filteredSymbols.length === 0 && (
              <div className="col-span-full py-6 text-center text-xs text-slate-400">
                Aucun symbole trouvé pour "{searchQuery}". Essayez un autre mot-clé.
              </div>
            )}
          </div>

          <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between flex-wrap gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
            <span className="flex items-center gap-1.5"><Info className="w-3.5 h-3.5 shrink-0 text-slate-400" /><span><strong>Astuce :</strong> Vous pouvez taper des fractions naturelles comme <code>Ka = ([A⁻]·[H₃O⁺]) / [AH]</code> ou <code>3/x</code>, ou utiliser <code>+ Fraction</code> pour un rendu parfait.</span></span>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Rendu KaTeX avec barres de fraction réelles</span>
          </div>
        </div>
      )}
    </div>
  );
};

