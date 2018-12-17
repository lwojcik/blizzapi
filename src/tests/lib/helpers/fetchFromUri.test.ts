import { fetchFromUri } from '../../../lib/helpers';
// jest.mock('cross-fetch');

// const fetch = jest.fn();

// // jest.mock('fetch');

// TODO: test fetch with this: https://www.npmjs.com/package/jest-fetch-mock

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
    expect.assertions(1);
    return expect(fetchFromUri(input)).rejects.toThrow(expectedResult);
  });

  // test.each`
  //   input                                             | expectedResult
  //   ${'https://httpstat.us/200'}                      | ${1}
  //   ${'http://httpstat.us/200'}                       | ${1}
  //   ${'https://httpstat.us/404'}                      | ${1}
  //   `('calls fetch function for $input as correct uri', async ({ input, expectedResult }) => {
  //     fetchFromUri(input)
  //       .then(() => {
  //         expect(fetch.mock.calls.length).toBe(expectedResult);
  //       })
  //       .catch((error) => {
  //         expect(error).toMatch('error');
  //       });
  //     // fetch.get.mockResolvedValue(input);
  //     // expect.assertions(1);
  //     // const fetch = jest.fn();
  //     // fetchFromUri(input)
  //     //   .then(() => {
  //     //     expect(fetch.mock.calls.length).toBe(expectedResult)
  //     //   });
  // });
});
