import * as utils from "../../../../../src/utils";

const { checkIfLocaleLooksValid } = utils;

describe("checkIfLocaleLooksValid()", () => {
  it("should be defined", () => {
    expect(checkIfLocaleLooksValid).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof checkIfLocaleLooksValid).toBe("function");
  });

  // test.each`
  //   input      | expectedResult
  //   ${'av_CA'} | ${true}
  //   ${'tb_pk'} | ${true}
  //   ${'QQ_NN'} | ${true}
  //   ${'WZ_zD'} | ${true}
  //   ${'pO_vV'} | ${true}
  //   ${'yy_cR'} | ${true}
  //   ${'zZ_bG'} | ${true}
  //   ${'Rt_Gf'} | ${true}
  //   ${'eE_Aa'} | ${true}
  // `('returns $expectedResult for $input as non-existent locale', ({ input, expectedResult }) => {
  //   expect(checkIfLocaleLooksValid(input)).toBe(expectedResult);
  // });

  // test.each`
  //   input      | expectedResult
  //   ${'en_US'} | ${true}
  //   ${'es_MX'} | ${true}
  //   ${'pt_BR'} | ${true}
  //   ${'en_GB'} | ${true}
  //   ${'es_ES'} | ${true}
  //   ${'fr_FR'} | ${true}
  //   ${'ru_RU'} | ${true}
  //   ${'de_DE'} | ${true}
  //   ${'pt_PT'} | ${true}
  //   ${'it_IT'} | ${true}
  //   ${'ko_KR'} | ${true}
  //   ${'zh_TW'} | ${true}
  //   ${'zh_CN'} | ${true}
  //   ${'EN_US'} | ${true}
  //   ${'ES_MX'} | ${true}
  //   ${'PT_BR'} | ${true}
  //   ${'EN_GB'} | ${true}
  //   ${'ES_ES'} | ${true}
  //   ${'FR_FR'} | ${true}
  //   ${'RU_RU'} | ${true}
  //   ${'DE_DE'} | ${true}
  //   ${'PT_PT'} | ${true}
  //   ${'IT_IT'} | ${true}
  //   ${'KO_KR'} | ${true}
  //   ${'ZH_TW'} | ${true}
  //   ${'ZH_CN'} | ${true}
  //   ${'en_us'} | ${true}
  //   ${'es_mx'} | ${true}
  //   ${'pt_br'} | ${true}
  //   ${'en_gb'} | ${true}
  //   ${'es_es'} | ${true}
  //   ${'fr_fr'} | ${true}
  //   ${'ru_ru'} | ${true}
  //   ${'de_de'} | ${true}
  //   ${'pt_pt'} | ${true}
  //   ${'it_it'} | ${true}
  //   ${'ko_kr'} | ${true}
  //   ${'zh_tw'} | ${true}
  //   ${'zh_cn'} | ${true}
  // `('returns $expectedResult for $input as valid locale name', ({ input, expectedResult }) => {
  //   expect(checkIfLocaleLooksValid(input)).toBe(expectedResult);
  // });

  // test.each`
  //   input        | expectedResult
  //   ${'avA_CA'}  | ${false}
  //   ${'tb_Wpk'}  | ${false}
  //   ${'QQ_wNN'}  | ${false}
  //   ${'WZa_azD'} | ${false}
  //   ${'pOsvV'}   | ${false}
  //   ${'yy0cR'}   | ${false}
  //   ${'q1_bG'}   | ${false}
  //   ${'12_34'}   | ${false}
  //   ${'eEbd'}    | ${false}
  // `('returns $expectedResult for $input as malformed locale', ({ input, expectedResult }) => {
  //   expect(checkIfLocaleLooksValid(input)).toBe(expectedResult);
  // });
});
