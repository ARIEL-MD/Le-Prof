/**
 * Récupère ou génère un identifiant d'élève unique et persistant (userSeed)
 * pour que chaque élève bénéficie de reformulations, arguments et citations personnalisés
 * sans répétition monotone entre élèves.
 */
export function getConnectedUserSeed(): string {
  try {
    const raw = localStorage.getItem('leprof_student_profile') || localStorage.getItem('declic_student_profile');
    if (raw) {
      const p = JSON.parse(raw);
      if (p.id || p.fullName) {
        return `${p.id || ''}_${p.fullName || ''}`;
      }
    }
    let fallback = localStorage.getItem('leprof_user_seed');
    if (!fallback) {
      fallback = 'usr_' + Math.random().toString(36).substring(2, 11);
      localStorage.setItem('leprof_user_seed', fallback);
    }
    return fallback;
  } catch {
    return 'default_user_seed';
  }
}
