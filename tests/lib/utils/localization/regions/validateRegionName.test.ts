import * as utils from "../../../../../src/utils";

const { validateRegionName } = utils;

describe("validateRegionName()", () => {
  it("should be defined", () => {
    expect(validateRegionName).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof validateRegionName).toBe("function");
  });

  // test.each`
  //   input   | expectedResult
  //   ${'us'} | ${true}
  //   ${'US'} | ${true}
  //   ${'Us'} | ${true}
  //   ${'uS'} | ${true}
  //   ${'eu'} | ${true}
  //   ${'EU'} | ${true}
  //   ${'Eu'} | ${true}
  //   ${'eU'} | ${true}
  //   ${'kr'} | ${true}
  //   ${'KR'} | ${true}
  //   ${'Kr'} | ${true}
  //   ${'kR'} | ${true}
  //   ${'tw'} | ${true}
  //   ${'TW'} | ${true}
  //   ${'Tw'} | ${true}
  //   ${'tW'} | ${true}
  //   ${'cn'} | ${true}
  //   ${'CN'} | ${true}
  //   ${'Cn'} | ${true}
  //   ${'cN'} | ${true}
  // `('returns $expectedResult for region name $input', ({ input, expectedResult }) => {
  //   expect(validateRegionName(input)).toBe(expectedResult);
  // });

  // test.each`
  //   input      | expectedResult
  //   ${'10'}    | ${false}
  //   ${'9999'}  | ${false}
  //   ${'23232'} | ${false}
  //   ${'a1'}    | ${false}
  //   ${'adasf'} | ${false}
  //   ${'1abc'}  | ${false}
  //   ${'!@#$'}  | ${false}
  //   ${'><1'}   | ${false}
  // `('returns $expectedResult for $input as string', ({ input, expectedResult }) => {
  //   expect(validateRegionName(input)).toBe(expectedResult);
  // });
});
