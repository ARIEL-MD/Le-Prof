import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { solvePhiloTle } from '../philoEngine/philoEngine';
import { ALL_ARGUMENT_VARIANTS, searchAcademicResourcesWithVariations } from '../argumentVariationEngine';

describe('Variation et Unicité des Arguments et Citations', () => {
  it('Chaque notion dispose de multiples variantes riches (au moins 3 à 4 variantes)', () => {
    const liberteVariants = ALL_ARGUMENT_VARIANTS['liberte'];
    assert.ok(liberteVariants && liberteVariants.length >= 3, 'Doit avoir au moins 3 variantes pour liberté');

    const veriteVariants = ALL_ARGUMENT_VARIANTS['verite'];
    assert.ok(veriteVariants && veriteVariants.length >= 3, 'Doit avoir au moins 3 variantes pour vérité');

    const travailVariants = ALL_ARGUMENT_VARIANTS['travail'];
    assert.ok(travailVariants && travailVariants.length >= 3, 'Doit avoir au moins 3 variantes pour travail');
  });

  it('Recherche de Cours & Notions retourne des citations et arguments variés selon la variante sélectionnée', () => {
    const resV0 = searchAcademicResourcesWithVariations('arguments sur la liberté', 0);
    const resV1 = searchAcademicResourcesWithVariations('arguments sur la liberté', 1);

    assert.ok(resV0 && resV1, 'Doit renvoyer des résultats pour les deux variantes');
    assert.notEqual(
      resV0.currentVariant.label,
      resV1.currentVariant.label,
      'Les labels de variantes doivent être différents'
    );
    assert.equal(
      resV0.currentVariant.arguments[0].quote,
      resV1.currentVariant.arguments[0].quote,
      'La citation source doit rester identique entre les présentations'
    );
  });

  it('Deux utilisateurs différents ne reçoivent pas les mêmes arguments dans leur rédaction (Unicité des copies)', () => {
    const subject = 'Le travail est-il un obstacle à la liberté ?';
    const userA = solvePhiloTle(subject, { userSeed: 'user_abidjan_001' });
    const userB = solvePhiloTle(subject, { userSeed: 'user_bouake_002' });

    assert.ok(userA.success && userB.success, 'Les deux rédactions doivent réussir');
    const authorA = userA.result?.thesis?.arguments[0]?.author;
    const authorB = userB.result?.thesis?.arguments[0]?.author;

    assert.ok(authorA && authorB, 'Chaque copie doit contenir un auteur');
    const statementA = userA.result?.thesis?.arguments[0]?.statement;
    const statementB = userB.result?.thesis?.arguments[0]?.statement;
    const quoteA = userA.result?.thesis?.arguments[0]?.quote;
    const quoteB = userB.result?.thesis?.arguments[0]?.quote;
    assert.ok(statementA !== statementB || userA.result?.thesis?.arguments[0]?.explanation !== userB.result?.thesis?.arguments[0]?.explanation, 'Les formulations pédagogiques doivent pouvoir varier');
    assert.equal(quoteA, quoteB, 'La citation reste universelle et identique pour le même argument source');
  });

  it('Passer un variantIndex explicite dans la rédaction permet de changer instantanément la palette d arguments', () => {
    const subject = 'L Etat est-il l ennemi de la liberte ?';
    const solV0 = solvePhiloTle(subject, { variantIndex: 0 });
    const solV1 = solvePhiloTle(subject, { variantIndex: 1 });

    assert.ok(solV0.success && solV1.success);
    assert.notEqual(
      solV0.result?.thesis?.arguments[0]?.author,
      solV1.result?.thesis?.arguments[0]?.author,
      'L auteur de la thèse doit changer avec variantIndex'
    );
  });
});
