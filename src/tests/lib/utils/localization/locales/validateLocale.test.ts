import * as utils from '../../../../../lib/utils';
const { validateLocale } = utils;

describe('validateLocale()', () => {
  test('should be defined', () => {
    expect(validateLocale).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof validateLocale).toBe('function');
  });

  test.each`
    input      | expectedResult
    ${'en_US'} | ${true}
    ${'es_MX'} | ${true}
    ${'pt_BR'} | ${true}
    ${'en_GB'} | ${true}
    ${'es_ES'} | ${true}
    ${'fr_FR'} | ${true}
    ${'ru_RU'} | ${true}
    ${'de_DE'} | ${true}
    ${'pt_PT'} | ${true}
    ${'it_IT'} | ${true}
    ${'ko_KR'} | ${true}
    ${'zh_TW'} | ${true}
    ${'zh_CN'} | ${true}
    ${'EN_US'} | ${true}
    ${'ES_MX'} | ${true}
    ${'PT_BR'} | ${true}
    ${'EN_GB'} | ${true}
    ${'ES_ES'} | ${true}
    ${'FR_FR'} | ${true}
    ${'RU_RU'} | ${true}
    ${'DE_DE'} | ${true}
    ${'PT_PT'} | ${true}
    ${'IT_IT'} | ${true}
    ${'KO_KR'} | ${true}
    ${'ZH_TW'} | ${true}
    ${'ZH_CN'} | ${true}
    ${'en_us'} | ${true}
    ${'es_mx'} | ${true}
    ${'pt_br'} | ${true}
    ${'en_gb'} | ${true}
    ${'es_es'} | ${true}
    ${'fr_fr'} | ${true}
    ${'ru_ru'} | ${true}
    ${'de_de'} | ${true}
    ${'pt_pt'} | ${true}
    ${'it_it'} | ${true}
    ${'ko_kr'} | ${true}
    ${'zh_tw'} | ${true}
    ${'zh_cn'} | ${true}
  `('returns $expectedResult for $input as valid locale name', ({ input, expectedResult }) => {
    expect(validateLocale(input)).toBe(expectedResult);
  });

  test.each`
    input       | expectedResult
    ${'av_CA'}  | ${false}
    ${'tb_pk'}  | ${false}
    ${'QQ_NN'}  | ${false}
    ${'WZ_zD'}  | ${false}
    ${'pO_vV'}  | ${false}
    ${'yy_cR'}  | ${false}
    ${'zZ_bG'}  | ${false}
    ${'Rt_Gf'}  | ${false}
    ${'eE_Aa'}  | ${false}
  `('returns $expectedResult for $input as non-existent locale', ({ input, expectedResult }) => {
    expect(validateLocale(input)).toBe(expectedResult);
  });

  test.each`
    input         | expectedResult
    ${'avA_CA'}   | ${RangeError}
    ${'tb_Wpk'}   | ${RangeError}
    ${'QQ_wNN'}   | ${RangeError}
    ${'WZa_azD'}  | ${RangeError}
    ${'pOsvV'}    | ${RangeError}
    ${'yy0cR'}    | ${RangeError}
    ${'q1_bG'}    | ${RangeError}
    ${'12_34'}    | ${RangeError}
    ${'eEbd'}     | ${RangeError}
  `('throws $expectedResult for $input as incorrect locale', ({ input, expectedResult }) => {
    expect(() => {
      validateLocale(input)
    }).toThrow(expectedResult);
  });
});
