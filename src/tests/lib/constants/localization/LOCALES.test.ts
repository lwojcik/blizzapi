import constants from '../../../../lib/constants';

const { LOCALES } = constants;

/* tslint:disable no-expression-statement */
describe('LOCALES', () => {
  test('should be defined', () => {
    expect(LOCALES).toBeDefined();
  });

  test('should be frozen', () => {
    expect(Object.isFrozen(LOCALES)).toBe(true);
  });

  test('should contain 4 elements', () => {
    expect(Object.keys(LOCALES).length).toStrictEqual(4);
  });

  test('should contain property "1"', () => {
    expect(LOCALES[1]).toBeDefined();
  });

  test('property "1" should be of type "Array"', () => {
    expect(Array.isArray(LOCALES[1])).toBe(true);
  });

  test('property "1" should contain 3 elements', () => {
    expect(Object.keys(LOCALES[1]).length).toStrictEqual(3);
  });

  test('index 0 of property "1" should be equal to "en_US"', () => {
    expect(LOCALES[1][0]).toStrictEqual('en_US');
  });

  test('index 1 of property "1" should be equal to "es_MX"', () => {
    expect(LOCALES[1][1]).toStrictEqual('es_MX');
  });

  test('index 2 of property "1" should be equal to "pt_BR"', () => {
    expect(LOCALES[1][2]).toStrictEqual('pt_BR');
  });

  test('should contain property "2"', () => {
    expect(LOCALES[2]).toBeDefined();
  });

  test('property "2" should be of type "Array"', () => {
    expect(Array.isArray(LOCALES[2])).toBe(true);
  });

  test('property "2" should contain 7 elements', () => {
    expect(Object.keys(LOCALES[2]).length).toStrictEqual(7);
  });

  test('index 0 of property "2" should be equal to "en_GB"', () => {
    expect(LOCALES[2][0]).toStrictEqual('en_GB');
  });

  test('index 1 of property "2" should be equal to "es_ES"', () => {
    expect(LOCALES[2][1]).toStrictEqual('es_ES');
  });

  test('index 2 of property "2" should be equal to "fr_FR"', () => {
    expect(LOCALES[2][2]).toStrictEqual('fr_FR');
  });

  test('index 3 of property "2" should be equal to "ru_RU"', () => {
    expect(LOCALES[2][3]).toStrictEqual('ru_RU');
  });

  test('index 4 of property "2" should be equal to "de_DE"', () => {
    expect(LOCALES[2][4]).toStrictEqual('de_DE');
  });

  test('index 5 of property "2" should be equal to "pt_PT"', () => {
    expect(LOCALES[2][5]).toStrictEqual('pt_PT');
  });

  test('index 6 of property "2" should be equal to "it_IT"', () => {
    expect(LOCALES[2][6]).toStrictEqual('it_IT');
  });

  test('should contain property "3"', () => {
    expect(LOCALES[3]).toBeDefined();
  });

  test('property "3" should be of type "Array"', () => {
    expect(Array.isArray(LOCALES[3])).toBe(true);
  });

  test('property "3" should contain 2 elements', () => {
    expect(Object.keys(LOCALES[3]).length).toStrictEqual(2);
  });

  test('index 0 of property "3" should be equal to "ko_KR"', () => {
    expect(LOCALES[3][0]).toStrictEqual('ko_KR');
  });

  test('index 0 of property "3" should be equal to "zh_TW"', () => {
    expect(LOCALES[3][1]).toStrictEqual('zh_TW');
  });

  test('should contain property "5"', () => {
    expect(LOCALES[5]).toBeDefined();
  });

  test('property "5" should be of type "Array"', () => {
    expect(Array.isArray(LOCALES[5])).toBe(true);
  });

  test('property "5" should contain 1 element', () => {
    expect(Object.keys(LOCALES[5]).length).toStrictEqual(1);
  });

  test('index 0 of property "5" should be equal to "zh_TW"', () => {
    expect(LOCALES[5][0]).toStrictEqual('zh_CN');
  });
});
/* tslint:enable no-expression-statement */
