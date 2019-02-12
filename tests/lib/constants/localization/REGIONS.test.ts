import constants from '../../../../src/lib/constants';

const { REGIONS } = constants;

/* tslint:disable no-expression-statement */
describe('REGIONS', () => {
  test('should be defined', () => {
    expect(REGIONS).toBeDefined();
  });

  test('should be frozen', () => {
    expect(Object.isFrozen(REGIONS)).toBe(true);
  });

  test('should contain 4 elements', () => {
    expect(Object.keys(REGIONS).length).toStrictEqual(4);
  });

  test('should contain property "1"', () => {
    expect(REGIONS[1]).toBeDefined();
  });

  test('should contain property "2"', () => {
    expect(REGIONS[2]).toBeDefined();
  });

  test('should contain property "3"', () => {
    expect(REGIONS[3]).toBeDefined();
  });

  test('should contain property "5"', () => {
    expect(REGIONS[5]).toBeDefined();
  });

  describe('Property 1', () => {
    test('value should be an array', () => {
      expect(typeof REGIONS[1]).toBeTruthy();
      expect(REGIONS[1].constructor === Array).toBe(true);
    });

    test('value array should contain 1 element', () => {
      expect(REGIONS[1].length).toStrictEqual(1);
    });

    test('index 0 of value array should be equal to "us"', () => {
      expect(REGIONS[1][0]).toStrictEqual('us');
    });
  });

  describe('Property 2', () => {
    test('value should be an array', () => {
      expect(typeof REGIONS[2]).toBeTruthy();
      expect(REGIONS[2].constructor === Array).toBe(true);
    });

    test('value array should contain 1 element', () => {
      expect(REGIONS[2].length).toStrictEqual(1);
    });

    test('index 0 of value array should be equal to "eu"', () => {
      expect(REGIONS[2][0]).toStrictEqual('eu');
    });
  });

  describe('Property 3', () => {
    test('value should be an array', () => {
      expect(typeof REGIONS[3]).toBeTruthy();
      expect(REGIONS[3].constructor === Array).toBe(true);
    });

    test('value array should contain 2 elements', () => {
      expect(REGIONS[3].length).toStrictEqual(2);
    });

    test('index 0 of value array should be equal to "kr"', () => {
      expect(REGIONS[3][0]).toStrictEqual('kr');
    });

    test('index 1 of value array should be equal to "tw"', () => {
      expect(REGIONS[3][1]).toStrictEqual('tw');
    });
  });

  describe('Property 5', () => {
    test('value should be an array', () => {
      expect(typeof REGIONS[5]).toBeTruthy();
      expect(REGIONS[5].constructor === Array).toBe(true);
    });

    test('value array should contain 1 element', () => {
      expect(REGIONS[5].length).toStrictEqual(1);
    });

    test('index 0 of value array should be equal to "cn"', () => {
      expect(REGIONS[5][0]).toStrictEqual('cn');
    });
  });
});
/* tslint:enable no-expression-statement */
