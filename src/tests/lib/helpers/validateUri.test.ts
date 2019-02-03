import { validateUri } from '../../../lib/helpers/common';

/* tslint:disable no-expression-statement */
describe('validateUri()', () => {
  test('should be defined', () => {
    expect(validateUri).toBeDefined();
  });

  test('should be function', () => {
    expect(validateUri).toBeTruthy();
    expect(typeof validateUri).toBe('function');
  });

  test('should be function', () => {
    expect(validateUri).toBeTruthy();
    expect(typeof validateUri).toBe('function');
  });

  test.each`
    input                                             | expectedResult
    ${'https://www.example.com'}                      | ${true}
    ${'http://www.example.com'}                       | ${true}
    ${'http://blog.example.com'}                      | ${true}
    ${'https://blog.example.com'}                     | ${true}
    ${'http://www.example.com/product'}               | ${true}
    ${'https://www.example.com/product'}              | ${true}
    ${'http://www.example.com/products?id=1&page=2'}  | ${true}
    ${'https://www.example.com/products?id=1&page=2'} | ${true}
    ${'http://www.example.com#up'}                    | ${true}
    ${'https://www.example.com#up'}                   | ${true}
    ${'http://255.255.255.255'}                       | ${true}
    ${'https://255.255.255.255'}                      | ${true}
  `('returns $expectedResult for correct uri $input', ({ input, expectedResult }) => {
    expect(validateUri(input)).toBe(expectedResult);
  });

  test.each`
    input                        | expectedResult
    ${'www.example.com'}         | ${false}
    ${'htp://www.example.com'}   | ${false}
    ${'://blog.example.com'}     | ${false}
    ${'//blog.example.com'}      | ${false}
    ${'www.example.com/product'} | ${false}
    ${'example.com/product'}     | ${false}
    ${'examplecom'}              | ${false}
    ${'1234567890'}              | ${false}
    ${'1a2b3c'}                  | ${false}
    ${'ftp://test'}              | ${false}
    ${'255.255.255.255'}         | ${false}
    ${'ssh://255.255.255.255'}   | ${false}
  `('returns $expectedResult for incorrect uri $input', ({ input, expectedResult }) => {
    expect(validateUri(input)).toBe(expectedResult);
  });
});
/* tslint:enable no-expression-statement */
