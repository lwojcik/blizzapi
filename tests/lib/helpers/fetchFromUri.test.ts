import { fetchFromUri } from "../../../src/helpers/fetch";

describe("fetchFromUri()", () => {
  it("should be defined", () => {
    expect(fetchFromUri).toBeDefined();
  });

  it("should be function", () => {
    expect(fetchFromUri).toBeTruthy();
    expect(typeof fetchFromUri).toBe("function");
  });

  it.each`
    input                        | expectedResult
    ${"www.example.com"}         | ${RangeError}
    ${"htp://www.example.com"}   | ${RangeError}
    ${"://blog.example.com"}     | ${RangeError}
    ${"//blog.example.com"}      | ${RangeError}
    ${"www.example.com/product"} | ${RangeError}
    ${"example.com/product"}     | ${RangeError}
    ${"examplecom"}              | ${RangeError}
    ${"1234567890"}              | ${RangeError}
    ${"1a2b3c"}                  | ${RangeError}
    ${"ftp://test"}              | ${RangeError}
    ${"255.255.255.255"}         | ${RangeError}
    ${"ssh://255.255.255.255"}   | ${RangeError}
  `(
    "throws $expectedResult for incorrect uri $input",
    async ({ input, expectedResult }) => {
      expect.assertions(1);
      await expect(fetchFromUri(input)).rejects.toThrow(expectedResult);
    }
  );
});
