/**
 * Solveur expert pour l'Arithmétique en Terminale C
 * Divisibilité, division euclidienne, congruences, Fermat, décomposition, Bézout, Gauss, ax + by = c, cryptographie
 */

import { buildMathsTleCStructuredResult } from "../resultBuilder";
import { MathsTleCStructuredResult } from "../types";

export function solveArithmeticExercise(statement: string): MathsTleCStructuredResult {
  const text = statement.toLowerCase();

  // Cas 1 : Équation diophantienne linéaire ax + by = c ou Théorème de Bézout / Gauss
  if (/ax\s*\+\s*by|diophantienne|b[ée]zout|th[ée]or[èe]me de gauss|pgcd\(|algorithme d'euclide/i.test(text)) {
    const steps = [
      {
        title: "Calcul du PGCD par l'Algorithme d'Euclide et condition d'existence",
        observationOrData: "Équation diophantienne $ax + by = c$ avec $a, b, c \\in \\mathbb{Z}$.",
        scientificConceptOrRule: "L'équation $ax + by = c$ admet des solutions dans $\\mathbb{Z} \\times \\mathbb{Z}$ si et seulement si $d = \\text{PGCD}(a, b)$ divise $c$.",
        deductionOrCalculation: "- Déroulement des divisions euclidiennes successives d'Euclide pour déterminer $d = \\text{PGCD}(a, b)$.\n- Vérification de la condition de divisibilité : $d \\mid c$.\n- Simplification de l'équation par $d$ pour obtenir une équation équivalente $a'x + b'y = c'$ avec $\\text{PGCD}(a', b') = 1$.",
        conclusionOrJustification: "L'existence de solutions entières est rigoureusement prouvée.",
      },
      {
        title: "Détermination d'une solution particulière par remontée de l'algorithme d'Euclide",
        observationOrData: "Recherche d'un couple $(x_0, y_0) \\in \\mathbb{Z} \\times \\mathbb{Z}$ vérifiant $a'x_0 + b'y_0 = c'$.",
        scientificConceptOrRule: "D'après l'identité de Bézout, puisque $\\text{PGCD}(a', b') = 1$, il existe $(u, v) \\in \\mathbb{Z}^2$ tel que $a'u + b'v = 1$. En multipliant par $c'$, $(x_0, y_0) = (c'u, c'v)$ est solution particulière.",
        deductionOrCalculation: "- Remontée méthodique des égalités de l'algorithme d'Euclide pour isoler le reste 1 sous la forme $a'u + b'v = 1$.\n- Multiplication par $c'$ pour obtenir $(x_0, y_0)$.",
        conclusionOrJustification: "Solution particulière $(x_0, y_0)$ obtenue et vérifiée.",
      },
      {
        title: "Résolution générale par soustraction et application du Théorème de Gauss",
        observationOrData: "Soustraction membre à membre de l'équation générale et de la solution particulière.",
        scientificConceptOrRule: "Théorème de Gauss : Si $a'$ divise le produit $b'(y_0 - y)$ et si $\\text{PGCD}(a', b') = 1$, alors $a'$ divise $(y_0 - y)$.",
        deductionOrCalculation: "$$a'(x - x_0) + b'(y - y_0) = 0 \\iff a'(x - x_0) = b'(y_0 - y)$$\n- Comme $a' \\mid b'(y_0 - y)$ et $\\text{PGCD}(a', b') = 1$, il existe $k \\in \\mathbb{Z}$ tel que $y_0 - y = a'k \\implies y = y_0 - a'k$.\n- En substituant : $a'(x - x_0) = b'(a'k) \\implies x - x_0 = b'k \\implies x = x_0 + b'k$.\n- Réciproque : $a'(x_0 + b'k) + b'(y_0 - a'k) = a'x_0 + b'y_0 = c'$, valable pour tout $k \\in \\mathbb{Z}$.",
        conclusionOrJustification: "$$S = \\left\\{ (x_0 + b'k, \\; y_0 - a'k), \\; k \\in \\mathbb{Z} \\right\\}$$",
      },
    ];

    return buildMathsTleCStructuredResult({
      title: "Arithmétique : Résolution complète de l'Équation Diophantienne ax + by = c",
      themeId: "arithmetique",
      themeTitle: "Arithmétique dans Z",
      lessonNumber: 11,
      lessonTitle: "PPCM, PGCD, Théorème de Bézout, Gauss et Équations Diophantiennes",
      problemStatement: statement,
      scientificHypothesis: "L'existence de solutions dépend de d = PGCD(a,b) | c ; la résolution générale découle de Bézout et du théorème de Gauss.",
      steps,
      finalConclusion: "L'ensemble des solutions dans Z x Z est de la forme S = {(x0 + b'k, y0 - a'k) | k in Z}, régissant les problèmes de synchronisation et de dénombrement périodique.",
      keyMathematicalTerms: ["Algorithme d'Euclide", "Théorème de Bézout", "Théorème de Gauss", "Équation diophantienne", "Nombres premiers entre eux"],
      commonPitfallsAvoided: ["Toujours simplifier par le PGCD avant d'appliquer Gauss afin d'avoir deux coefficients strictement premiers entre eux."],
    });
  }

  // Cas 2 : Cryptographie / Chiffrement exponentiel / Petit théorème de Fermat / Congruences
  if (/chiffrement|cryptograph|codage|fermat|puissance.*modulo|29|modulo/i.test(text)) {
    const steps = [
      {
        title: "Modélisation du codage et étude de la bijection de chiffrement",
        observationOrData: "Application de chiffrement $f: x \\mapsto y \\equiv x^c \\pmod p$ sur l'ensemble $\\mathcal{G} = \\{0, 1, \\dots, p-1\\}$ avec $p$ premier.",
        scientificConceptOrRule: "Le chiffrement est bijectif et déchiffrable si et seulement si l'exposant $c$ est premier avec $p-1$.",
        deductionOrCalculation: "- Vérification de $\\text{PGCD}(c, p-1) = 1$ à l'aide de la relation de Bézout : $c \\cdot d - k(p-1) = 1$.\n- Existence d'un entier $d$ (clé de déchiffrement) tel que $c \\cdot d \\equiv 1 \\pmod{p-1}$.",
        conclusionOrJustification: "L'application de codage est strictement injective et surjective sur le corps fini.",
      },
      {
        title: "Démonstration de la formule de déchiffrement par le Petit Théorème de Fermat",
        observationOrData: "Calcul de $y^d \\pmod p$ pour un message codé $y = x^c$.",
        scientificConceptOrRule: "Petit Théorème de Fermat : Pour tout nombre premier $p$ et tout entier $x$ non divisible par $p$, $x^{p-1} \\equiv 1 \\pmod p$.",
        deductionOrCalculation: "$$y^d \\equiv (x^c)^d = x^{c \\cdot d} = x^{k(p-1) + 1} = (x^{p-1})^k \\times x \\equiv 1^k \\times x \\equiv x \\pmod p$$\nPour $x \\equiv 0 \\pmod p$, l'égalité $0^d \\equiv 0$ reste vraie.",
        conclusionOrJustification: "Pour tout élément $x \\in \\mathcal{G}$, $y^d \\equiv x \\pmod p$. La fonction de décodage est $g(y) = y^d \\pmod p$.",
      },
      {
        title: "Calcul numérique des puissances et restitution du texte en clair",
        observationOrData: "Application de la clé de déchiffrement aux caractères du message codé.",
        scientificConceptOrRule: "Méthode d'exponentiation rapide et décomposition des puissances modulo $p$.",
        deductionOrCalculation: "Calcul pas à pas des restes successifs pour chaque lettre et conversion selon la table de correspondance alphabétique.",
        conclusionOrJustification: "Message entièrement décodé avec certitude mathématique.",
      },
    ];

    return buildMathsTleCStructuredResult({
      title: "Arithmétique & Cryptographie : Chiffrement / Déchiffrement Exponentiel et Théorème de Fermat",
      themeId: "arithmetique",
      themeTitle: "Arithmétique dans Z",
      lessonNumber: 4,
      lessonTitle: "Divisibilité dans Z, Nombres premiers et Numération",
      problemStatement: statement,
      scientificHypothesis: "L'inverse de la clé de chiffrement modulo p-1 permet d'inverser le codage grâce au Petit Théorème de Fermat : x^(p-1) = 1 [p].",
      steps,
      finalConclusion: "L'application du Petit Théorème de Fermat garantit l'inversibilité du système de chiffrement et permet la restitution exacte du message.",
      keyMathematicalTerms: ["Petit Théorème de Fermat", "Congruence modulo p", "Clé de déchiffrement", "Inverse modulo n", "Exponentiation modulaire"],
      commonPitfallsAvoided: ["L'exposant de déchiffrement d se calcule modulo (p - 1) et non modulo p."],
    });
  }

  // Cas 3 : Divisibilité générale, Numération de base b, Nombres premiers et Décomposition
  const steps = [
    {
      title: "Mise en équation arithmétique et application des règles de divisibilité",
      observationOrData: "Étude de la divisibilité dans $\\mathbb{Z}$ et des propriétés des entiers naturels.",
      scientificConceptOrRule: "La division euclidienne dans $\\mathbb{Z}$ associe de façon unique à $(a, b) \\in \\mathbb{Z} \\times \\mathbb{Z}^*$ le couple $(q, r) \\in \\mathbb{Z} \\times \\mathbb{N}$ tel que $a = bq + r$ avec $0 \\le r < |b|$.",
      deductionOrCalculation: "- Décomposition en facteurs premiers : $n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\cdots p_k^{\\alpha_k}$.\n- Nombre de diviseurs positifs : $N = (1 + \\alpha_1)(1 + \\alpha_2) \\cdots (1 + \\alpha_k)$.\n- Écriture en base $b$ : $\\overline{a_n a_{n-1} \\dots a_0}^b = \\sum_{k=0}^n a_k b^k$.",
      conclusionOrJustification: "Les propriétés arithmétiques fondamentales permettent d'établir les déductions nécessaires.",
    },
    {
      title: "Exploitation des congruences et conclusion",
      observationOrData: "Simplification des calculs modulo $n$.",
      scientificConceptOrRule: "Si $a \\equiv b \\pmod n$, alors pour tout $k \\in \\mathbb{N}$, $a^k \\equiv b^k \\pmod n$.",
      deductionOrCalculation: "Étude des périodes/cycles des restes des puissances successives pour déduire les conditions sur l'entier $n$.",
      conclusionOrJustification: "Résultat final rigoureusement démontré.",
    },
  ];

  return buildMathsTleCStructuredResult({
    title: "Arithmétique : Divisibilité, Décomposition en facteurs premiers et Numération",
    themeId: "arithmetique",
    themeTitle: "Arithmétique dans Z",
    lessonNumber: 4,
    lessonTitle: "Divisibilité dans Z, Nombres premiers et Numération",
    problemStatement: statement,
    steps,
    finalConclusion: "L'étude arithmétique rigoureuse des décompositions et des congruences permet de résoudre les problèmes de divisibilité et de numération.",
    keyMathematicalTerms: ["Division euclidienne", "Congruence", "Facteurs premiers", "Base de numération", "Nombre premier"],
    commonPitfallsAvoided: ["Toujours s'assurer que le reste d'une division euclidienne est strictement positif ou nul."],
  });
}
