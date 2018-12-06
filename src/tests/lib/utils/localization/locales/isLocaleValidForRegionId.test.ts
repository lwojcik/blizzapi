import * as utils from '../../../../../lib/utils';
const { isLocaleValidForRegionId } = utils;

describe('isLocaleValidForRegionId()', () => {
  test('should be defined', () => {
    expect(isLocaleValidForRegionId).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof isLocaleValidForRegionId).toBe('function');
  });

  test.each`
    inputLocale | inputRegionId | expectedResult
    ${'en_US'}  | ${1}          | ${true}
    ${'es_MX'}  | ${1}          | ${true}
    ${'pt_BR'}  | ${1}          | ${true}
    ${'en_GB'}  | ${2}          | ${true}
    ${'es_ES'}  | ${2}          | ${true}
    ${'fr_FR'}  | ${2}          | ${true}
    ${'ru_RU'}  | ${2}          | ${true}
    ${'de_DE'}  | ${2}          | ${true}
    ${'pt_PT'}  | ${2}          | ${true}
    ${'it_IT'}  | ${2}          | ${true}
    ${'ko_KR'}  | ${3}          | ${true}
    ${'zh_TW'}  | ${3}          | ${true}
    ${'zh_CN'}  | ${5}          | ${true}
    ${'EN_US'}  | ${1}          | ${true}
    ${'ES_MX'}  | ${1}          | ${true}
    ${'PT_BR'}  | ${1}          | ${true}
    ${'EN_GB'}  | ${2}          | ${true}
    ${'ES_ES'}  | ${2}          | ${true}
    ${'FR_FR'}  | ${2}          | ${true}
    ${'RU_RU'}  | ${2}          | ${true}
    ${'DE_DE'}  | ${2}          | ${true}
    ${'PT_PT'}  | ${2}          | ${true}
    ${'IT_IT'}  | ${2}          | ${true}
    ${'KO_KR'}  | ${3}          | ${true}
    ${'ZH_TW'}  | ${3}          | ${true}
    ${'ZH_CN'}  | ${5}          | ${true}
    ${'en_us'}  | ${1}          | ${true}
    ${'es_mx'}  | ${1}          | ${true}
    ${'pt_br'}  | ${1}          | ${true}
    ${'en_gb'}  | ${2}          | ${true}
    ${'es_es'}  | ${2}          | ${true}
    ${'fr_fr'}  | ${2}          | ${true}
    ${'ru_ru'}  | ${2}          | ${true}
    ${'de_de'}  | ${2}          | ${true}
    ${'pt_pt'}  | ${2}          | ${true}
    ${'it_it'}  | ${2}          | ${true}
    ${'ko_kr'}  | ${3}          | ${true}
    ${'zh_tw'}  | ${3}          | ${true}
    ${'zh_cn'}  | ${5}          | ${true}
  `('returns $expectedResult for $inputLocale and $inputRegionId as valid parameters', ({ inputLocale, inputRegionId, expectedResult }) => {
    expect(isLocaleValidForRegionId(inputLocale, inputRegionId)).toBe(expectedResult);
  });

  test.each`
    inputLocale | inputRegionId | expectedResult
    ${'av_CA'}  | ${1}          | ${RangeError}
    ${'tb_pk'}  | ${1}          | ${RangeError}
    ${'QQ_NN'}  | ${2}          | ${RangeError}
    ${'WZ_zD'}  | ${2}          | ${RangeError}
    ${'pO_vV'}  | ${3}          | ${RangeError}
    ${'yy_cR'}  | ${3}          | ${RangeError}
    ${'zZ_bG'}  | ${5}          | ${RangeError}
    ${'Rt_Gf'}  | ${5}          | ${RangeError}
    ${'eE_Aa'}  | ${5}          | ${RangeError}
  `('throws $expectedResult for $inputLocale as non-existent locale', ({ inputLocale, inputRegionId }) => {
    expect(() => { isLocaleValidForRegionId(inputLocale, inputRegionId); }).toThrow();
  });

  test.each`
    inputLocale   | inputRegionId | expectedResult
    ${'avA_CA'}   | ${1}          | ${RangeError}
    ${'tb_Wpk'}   | ${1}          | ${RangeError}
    ${'QQ_wNN'}   | ${2}          | ${RangeError}
    ${'WZa_azD'}  | ${2}          | ${RangeError}
    ${'pOsvV'}    | ${3}          | ${RangeError}
    ${'yy0cR'}    | ${3}          | ${RangeError}
    ${'q1_bG'}    | ${5}          | ${RangeError}
    ${'12_34'}    | ${5}          | ${RangeError}
    ${'eEbd'}     | ${5}          | ${RangeError}
  `('throws $expectedResult for $inputLocale as incorrect locale', ({ inputLocale, inputRegionId }) => {
    expect(() => { isLocaleValidForRegionId(inputLocale, inputRegionId) }).toThrow();
  });

  test.each`
    inputLocale | inputRegionId | expectedResult
    ${'en_US'}  | ${10}         | ${RangeError}
    ${'es_MX'}  | ${11}         | ${RangeError}
    ${'pt_BR'}  | ${12}         | ${RangeError}
    ${'en_GB'}  | ${11}         | ${RangeError}
    ${'es_ES'}  | ${10}         | ${RangeError}
    ${'fr_FR'}  | ${7}          | ${RangeError}
    ${'ru_RU'}  | ${8}          | ${RangeError}
    ${'de_DE'}  | ${9}          | ${RangeError}
    ${'pt_PT'}  | ${0}          | ${RangeError}
    ${'it_IT'}  | ${10}         | ${RangeError}
    ${'ko_KR'}  | ${12}         | ${RangeError}
    ${'zh_TW'}  | ${22}         | ${RangeError}
    ${'zh_CN'}  | ${33}         | ${RangeError}
  `('returns $expectedResult for $inputRegionId as incorrect region id', ({ inputLocale, inputRegionId }) => {
    expect(() => { isLocaleValidForRegionId(inputLocale, inputRegionId) }).toThrow();
  });

  test.each`
  inputLocale   | inputRegionId | expectedResult
  ${'avA_CA'}   | ${'8'}        | ${RangeError}
  ${'tb_Wpk'}   | ${8}          | ${RangeError}
  ${'QQ_wNN'}   | ${8}          | ${RangeError}
  ${'WZa_azD'}  | ${'9'}        | ${RangeError}
  ${'pOsvV'}    | ${'10'}       | ${RangeError}
  ${'yy0cR'}    | ${11}         | ${RangeError}
  ${'q1_bG'}    | ${'12'}       | ${RangeError}
  ${'12_34'}    | ${0}          | ${RangeError}
  ${'eEbd'}     | ${'0'}        | ${RangeError}
`('throws $expectedResult for $inputLocale as incorrect locale and $inputRegionId as incorrect region id', ({ inputLocale, inputRegionId, expectedResult }) => {
  expect(() => { isLocaleValidForRegionId(inputLocale, inputRegionId) }).toThrow(expectedResult);
});
});
