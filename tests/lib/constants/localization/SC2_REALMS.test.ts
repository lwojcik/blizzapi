import constants from '../../../../src/lib/constants';

const { SC2_REALMS } = constants;

/* tslint:disable no-expression-statement */
describe('SC2_REALMS', () => {
  test('should be defined', () => {
    expect(SC2_REALMS).toBeDefined();
  });

  test('should be frozen', () => {
    expect(Object.isFrozen(SC2_REALMS)).toBe(true);
  });

  test('should contain 4 elements', () => {
    expect(Object.keys(SC2_REALMS).length).toStrictEqual(4);
  });

  test('should contain property "1"', () => {
    expect(SC2_REALMS[1]).toBeDefined();
  });

  test('property "1" should be of type "Array"', () => {
    expect(Array.isArray(SC2_REALMS[1])).toBe(true);
  });

  test('property "1" should contain 2 elements', () => {
    expect(Object.keys(SC2_REALMS[1]).length).toStrictEqual(2);
  });

  test('index 0 of property "1" should be equal to 1', () => {
    expect(SC2_REALMS[1][0]).toStrictEqual(1);
  });

  test('index 1 of property "1" should be equal to 2', () => {
    expect(SC2_REALMS[1][1]).toStrictEqual(2);
  });

  test('should contain property "2"', () => {
    expect(SC2_REALMS[2]).toBeDefined();
  });

  test('property "1" should be of type "Array"', () => {
    expect(Array.isArray(SC2_REALMS[1])).toBe(true);
  });

  test('property "1" should contain 2 elements', () => {
    expect(Object.keys(SC2_REALMS[1]).length).toStrictEqual(2);
  });

  test('index 0 of property "2" should be equal to 1', () => {
    expect(SC2_REALMS[1][0]).toStrictEqual(1);
  });

  test('index 1 of property "2" should be equal to 2', () => {
    expect(SC2_REALMS[1][1]).toStrictEqual(2);
  });

  test('should contain property "3"', () => {
    expect(SC2_REALMS[3]).toBeDefined();
  });

  test('property "3" should be of type "Array"', () => {
    expect(Array.isArray(SC2_REALMS[3])).toBe(true);
  });

  test('property "3" should contain 2 elements', () => {
    expect(Object.keys(SC2_REALMS[3]).length).toStrictEqual(2);
  });

  test('index 0 of property "3" should be equal to 1', () => {
    expect(SC2_REALMS[3][0]).toStrictEqual(1);
  });

  test('index 1 of property "3" should be equal to 2', () => {
    expect(SC2_REALMS[3][1]).toStrictEqual(2);
  });

  test('should contain property "5"', () => {
    expect(SC2_REALMS[5]).toBeDefined();
  });

  test('property "5" should be of type "Array"', () => {
    expect(Array.isArray(SC2_REALMS[5])).toBe(true);
  });

  test('property "5" should contain 1 element', () => {
    expect(Object.keys(SC2_REALMS[5]).length).toStrictEqual(1);
  });

  test('index 0 of property "5" should be equal to 1', () => {
    expect(SC2_REALMS[5][0]).toStrictEqual(1);
  });
});
/* tslint:enable no-expression-statement */
