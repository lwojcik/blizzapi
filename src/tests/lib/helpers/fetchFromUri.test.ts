import { fetchFromUri } from '../../../lib/helpers';

describe('fetchFromUri()', () => {
  test('should be defined', () => {
    expect(fetchFromUri).toBeDefined();
  });

  test('should be function', () => {
    expect(fetchFromUri).toBeTruthy();
    expect(typeof fetchFromUri).toBe('function');
  });

  test.each`
    input                         | expectedResult
    ${'www.example.com'}          | ${RangeError}
    ${'htp://www.example.com'}    | ${RangeError}
    ${'://blog.example.com'}      | ${RangeError}
    ${'//blog.example.com'}       | ${RangeError}
    ${'www.example.com/product'}  | ${RangeError}
    ${'example.com/product'}      | ${RangeError}
    ${'examplecom'}               | ${RangeError}
    ${'1234567890'}               | ${RangeError}
    ${'1a2b3c'}                   | ${RangeError}
    ${'ftp://test'}               | ${RangeError}
    ${'255.255.255.255'}          | ${RangeError}
    ${'ssh://255.255.255.255'}    | ${RangeError}
    `('throws $expectedResult for incorrect uri $input', ({ input, expectedResult }) => {
      expect(() => { fetchFromUri(input); }).toThrow(expectedResult);
    });

  test.each`
    input                                             | expectedResult
    ${'https://httpstat.us/200'}                      | ${'object'}
    ${'http://httpstat.us/200'}                       | ${'object'}
    ${'https://httpstat.us/404'}                      | ${'object'}
    ${'https://google.com'}                           | ${'object'}
    ${'https://microsoft.com'}                        | ${'object'}
    `('returns fetched data for $input as correct uri', ({ input, expectedResult }) => {
      expect(typeof fetchFromUri(input)).toBe(expectedResult);
  });
});
