/**
 * Classifieur sémantique pour les exercices de Physique-Chimie Terminales C, D, E
 */

export interface PcClassificationResult {
  discipline: "CHIMIE" | "PHYSIQUE";
  themeId: string;
  themeTitle: string;
  lessonNumber: number;
  lessonTitle: string;
  topicType:
    | "organic_alcohols"
    | "organic_carbonyls"
    | "organic_amines"
    | "organic_acids_derivatives"
    | "organic_saponification_soap"
    | "organic_amino_acids_peptides"
    | "general_chem_aqueous_ph"
    | "general_chem_strong_acids_bases"
    | "general_chem_weak_acids_bases_ka"
    | "general_chem_titration_buffers"
    | "physics_kinematics"
    | "physics_newton_tci_tec"
    | "physics_uniform_field_projectile_oscilloscope"
    | "physics_gravitation_satellites_kepler"
    | "physics_mechanical_oscillations"
    | "physics_magnetic_field_solenoid"
    | "physics_laplace_law_cotton"
    | "physics_electromagnetic_induction_faraday";
  confidence: number;
}

export function classifyPcExercise(statement: string): PcClassificationResult {
  const text = statement.toLowerCase();

  // 1. Saponification / Savons / Triglycérides
  if (/saponifi|savon|triglyc|triester|palmitine|st[ée]arine|butyrine|corps gras|huile de table|acide gras|relargage/i.test(text)) {
    return {
      discipline: "CHIMIE",
      themeId: "chimie_organique",
      themeTitle: "Chimie Organique",
      lessonNumber: 5,
      lessonTitle: "Fabrication d'un Savon (Saponification)",
      topicType: "organic_saponification_soap",
      confidence: 0.98,
    };
  }

  // 2. Acides alpha-aminés & Peptides
  if (/acide\s*(\u03B1|\u03B1-|alpha-?)\s*amin|zwitterion|amphion|dipeptide|tripeptide|polypeptide|liaison peptidique|prot[ée]ine|biuret|alanine|glycine|valine/i.test(text)) {
    return {
      discipline: "CHIMIE",
      themeId: "chimie_organique",
      themeTitle: "Chimie Organique",
      lessonNumber: 6,
      lessonTitle: "Les Acides alpha-aminés et Peptides",
      topicType: "organic_amino_acids_peptides",
      confidence: 0.98,
    };
  }

  // 3. Amines
  if (/amine|alkylamine|m[ée]thanamine|[ée]thanamine|tri[ée]thylamine|sel d'ammonium quaternaire|r[ée]action d'hofmann|alkylation des amines|nucl[ée]ophile/i.test(text)) {
    return {
      discipline: "CHIMIE",
      themeId: "chimie_organique",
      themeTitle: "Chimie Organique",
      lessonNumber: 3,
      lessonTitle: "Les Amines",
      topicType: "organic_amines",
      confidence: 0.95,
    };
  }

  // 4. Composés carbonylés (Aldéhydes / Cétones)
  if (/ald[ée]hyde|c[ée]tone|compos[ée] carbonyl[ée]|2,4-dnph|dnph|fehling|tollens|schiff|pr[ée]cipit[ée] rouge brique|miroir d'argent|butanone|propanal|m[ée]thanal/i.test(text)) {
    return {
      discipline: "CHIMIE",
      themeId: "chimie_organique",
      themeTitle: "Chimie Organique",
      lessonNumber: 2,
      lessonTitle: "Composés carbonylés : Aldéhydes et Cétones",
      topicType: "organic_carbonyls",
      confidence: 0.96,
    };
  }

  // 5. Acides carboxyliques & Dérivés (Chlorures d'acyle, Anhydrides, Esters, Amides)
  if (/acide carboxylique|chlorure d'acyle|chlorure de propanoyle|chlorure d'[ée]thanoyle|anhydride d'acide|ester|est[ée]rification|amide|socl2|pcl5|p4o10|hydrolyse d'un ester/i.test(text)) {
    return {
      discipline: "CHIMIE",
      themeId: "chimie_organique",
      themeTitle: "Chimie Organique",
      lessonNumber: 4,
      lessonTitle: "Acides Carboxyliques et Dérivés d'acides",
      topicType: "organic_acids_derivatives",
      confidence: 0.95,
    };
  }

  // 6. Alcools
  if (/alcool|hydroxyle|markovnikov|d[ée]shydratation intramol[ée]culaire|d[ée]shydratation intermol[ée]culaire|glycol|glyc[ée]rol|polyol|oxydation m[ée]nag[ée]e|dichromate de potassium/i.test(text)) {
    return {
      discipline: "CHIMIE",
      themeId: "chimie_organique",
      themeTitle: "Chimie Organique",
      lessonNumber: 1,
      lessonTitle: "Les Alcools",
      topicType: "organic_alcohols",
      confidence: 0.95,
    };
  }

  // 7. Dosages et solutions tampons
  if (/dosage|titrage|solution tampon|point d'[ée]quivalence|demi-[ée]quivalence|tangentes parall[èe]les|ph[ée]nolphtal[ée]ine|bbt|h[ée]lianthine|burette|erlenmeyer|zone de virage/i.test(text)) {
    return {
      discipline: "CHIMIE",
      themeId: "chimie_generale",
      themeTitle: "Chimie Générale & Solutions Aqueuses",
      lessonNumber: 10,
      lessonTitle: "Dosages acido-basiques et Solutions Tampons",
      topicType: "general_chem_titration_buffers",
      confidence: 0.97,
    };
  }

  // 8. Acides faibles, bases faibles, Ka / pKa
  if (/acide faible|base faible|constante d'acidit[ée]|pka|ka|henderson|coefficient de dissociation|dissociation partielle|degr[ée] d'ionisation|amphot[èe]re/i.test(text)) {
    return {
      discipline: "CHIMIE",
      themeId: "chimie_generale",
      themeTitle: "Chimie Générale & Solutions Aqueuses",
      lessonNumber: 9,
      lessonTitle: "Acides faibles, Bases faibles et Constante d'acidité Ka/pKa",
      topicType: "general_chem_weak_acids_bases_ka",
      confidence: 0.96,
    };
  }

  // 9. Acides forts & bases fortes
  if (/acide fort|base forte|acide chlorhydrique|soude|hydroxyde de sodium|acide nitrique|acide bromhydrique|ph = -log|ph = 14 \+ log/i.test(text)) {
    return {
      discipline: "CHIMIE",
      themeId: "chimie_generale",
      themeTitle: "Chimie Générale & Solutions Aqueuses",
      lessonNumber: 8,
      lessonTitle: "Acides forts et Bases fortes",
      topicType: "general_chem_strong_acids_bases",
      confidence: 0.95,
    };
  }

  // 10. Solutions aqueuses & pH
  if (/solution aqueuse|autoprotolyse|produit ionique|ke = 10\^-14|[ée]lectroneutralit[ée]|concentration molaire volumique/i.test(text)) {
    return {
      discipline: "CHIMIE",
      themeId: "chimie_generale",
      themeTitle: "Chimie Générale & Solutions Aqueuses",
      lessonNumber: 7,
      lessonTitle: "Solutions aqueuses et Notion de pH",
      topicType: "general_chem_aqueous_ph",
      confidence: 0.93,
    };
  }

  // 11. Induction électromagnétique & Faraday / Lenz
  if (/induction|f\.?é\.?m|fem induite|faraday|loi de lenz|flux magn[ée]tique|weber|bobine induite|bobine inductrice|transformateur|foucault|alternateur/i.test(text)) {
    return {
      discipline: "PHYSIQUE",
      themeId: "electromagnetisme",
      themeTitle: "Électromagnétisme & Induction",
      lessonNumber: 18,
      lessonTitle: "Induction Électromagnétique et Lois de Faraday & Lenz",
      topicType: "physics_electromagnetic_induction_faraday",
      confidence: 0.98,
    };
  }

  // 12. Loi de Laplace & Balance de Cotton
  if (/force de laplace|loi de laplace|balance de cotton|roue de barlow|rails de laplace|tige de laplace|f = i\s*l\s*b/i.test(text)) {
    return {
      discipline: "PHYSIQUE",
      themeId: "electromagnetisme",
      themeTitle: "Électromagnétisme & Induction",
      lessonNumber: 17,
      lessonTitle: "Force et Loi de Laplace",
      topicType: "physics_laplace_law_cotton",
      confidence: 0.98,
    };
  }

  // 13. Champ magnétique & Solénoïde
  if (/champ magn[ée]tique|sol[ée]no[ïi]de|teslam[èe]tre|tesla|\u03BC0|spires par m[èe]tre|aiguille aimant[ée]|bonhomme d'amp[èe]re/i.test(text)) {
    return {
      discipline: "PHYSIQUE",
      themeId: "electromagnetisme",
      themeTitle: "Électromagnétisme & Induction",
      lessonNumber: 16,
      lessonTitle: "Champ Magnétique et Solénoïde",
      topicType: "physics_magnetic_field_solenoid",
      confidence: 0.96,
    };
  }

  // 14. Gravitation, Satellites & Lois de Kepler
  if (/gravitation|satellite|g[ée]ostationnaire|kepler|orbite|vitesse orbitale|attraction universelle|p[ée]riode de r[ée]volution|altitude z|rayon de la terre/i.test(text)) {
    return {
      discipline: "PHYSIQUE",
      themeId: "mecanique",
      themeTitle: "Mécanique du Point & Systèmes",
      lessonNumber: 14,
      lessonTitle: "Interaction Gravitationnelle, Satellites et Lois de Kepler",
      topicType: "physics_gravitation_satellites_kepler",
      confidence: 0.98,
    };
  }

  // 15. Oscillations mécaniques (Pendule élastique)
  if (/oscillat|pendule [ée]lastique|ressort|raideur k|[ée]longation|amplitude xm|pulsation propre|p[ée]riode propre to|\u03C90|mouvement harmonique|[ée]nergie potentielle [ée]lastique/i.test(text)) {
    return {
      discipline: "PHYSIQUE",
      themeId: "mecanique",
      themeTitle: "Mécanique du Point & Systèmes",
      lessonNumber: 15,
      lessonTitle: "Oscillations Mécaniques Libres (Pendule élastique)",
      topicType: "physics_mechanical_oscillations",
      confidence: 0.98,
    };
  }

  // 16. Mouvement dans champ uniforme (Projectile / Oscilloscope / Déflexion)
  if (/projectile|port[ée]e|fl[èe]che|angle de tir|d[ée]flexion [ée]lectrostatique|d[ée]viation angulaire|plaques de l'oscilloscope|spot lumineux|canon [àa] [ée]lectrons/i.test(text)) {
    return {
      discipline: "PHYSIQUE",
      themeId: "mecanique",
      themeTitle: "Mécanique du Point & Systèmes",
      lessonNumber: 13,
      lessonTitle: "Mouvement d'un Projectile et de Particules Chargées dans un Champ Uniforme",
      topicType: "physics_uniform_field_projectile_oscilloscope",
      confidence: 0.97,
    };
  }

  // 17. Newton, TCI, TEC, Plan incliné
  if (/centre d'inertie|th[ée]or[èe]me du centre d'inertie|th[ée]or[èe]me de l'[ée]nergie cin[ée]tique|frottement|plan inclin[ée]|r[ée]action normale|bilan des forces|loi de newton/i.test(text)) {
    return {
      discipline: "PHYSIQUE",
      themeId: "mecanique",
      themeTitle: "Mécanique du Point & Systèmes",
      lessonNumber: 12,
      lessonTitle: "Théorème du Centre d'Inertie & Théorème de l'Énergie Cinétique",
      topicType: "physics_newton_tci_tec",
      confidence: 0.95,
    };
  }

  // 18. Cinématique du point
  if (/cin[ée]matique|vecteur-vitesse|vecteur-acc[ée]l[ée]ration|vecteur-position|frenet|[ée]quations horaires|mouvement rectiligne|mouvement circulaire/i.test(text)) {
    return {
      discipline: "PHYSIQUE",
      themeId: "mecanique",
      themeTitle: "Mécanique du Point & Systèmes",
      lessonNumber: 11,
      lessonTitle: "Cinématique du Point Matériel",
      topicType: "physics_kinematics",
      confidence: 0.94,
    };
  }

  // Par défaut : Chimie organique si formule chimique, sinon Mécanique uniquement si termes physiques présents
  if (/c\d+h\d+|ch3|cooh|oh|nh2/i.test(text)) {
    return {
      discipline: "CHIMIE",
      themeId: "chimie_organique",
      themeTitle: "Chimie Organique",
      lessonNumber: 1,
      lessonTitle: "Chimie Organique Générale",
      topicType: "organic_alcohols",
      confidence: 0.75,
    };
  }

  // Si des termes de mécanique/physique sont présents, orienter vers Mécanique
  if (/solide|mobile|force|vitesse|acc[ée]l[ée]ration|frottement|ressort|masse\s*m|g\s*=\s*\d|joule|\bnewton\b|pesanteur|cin[ée]tique|vecteur|rep[èe]re|trajectoire|mouvement|point\s+mat[ée]riel/i.test(text)) {
    return {
      discipline: "PHYSIQUE",
      themeId: "mecanique",
      themeTitle: "Mécanique du Point & Systèmes",
      lessonNumber: 12,
      lessonTitle: "Théorème du Centre d'Inertie & Mouvements",
      topicType: "physics_newton_tci_tec",
      confidence: 0.75,
    };
  }

  // Aucun terme de physique ni de chimie détecté
  return {
    discipline: "PHYSIQUE",
    themeId: "mecanique",
    themeTitle: "Mécanique du Point & Systèmes",
    lessonNumber: 12,
    lessonTitle: "Théorème du Centre d'Inertie & Mouvements",
    topicType: "physics_newton_tci_tec",
    confidence: 0,
  };
}
