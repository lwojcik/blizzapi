import constants from '../constants';

const { REGIONS } = constants;

describe('REGIONS', () => {
  test('should be defined', () => {
    expect(REGIONS).toBeDefined();
  });

  test('should contain 4 elements', () => {
    expect(Object.keys(REGIONS).length).toEqual(4);
  });

  test('should contain property "1"', () => {
    expect(REGIONS[1]).toBeDefined();
  });

  test('property "1" should be equal to "us"', () => {
    expect(REGIONS[1]).toEqual('us');
  });

  test('should contain property "2"', () => {
    expect(REGIONS[2]).toBeDefined();
  });

  test('property "2" should be equal to "eu"', () => {
    expect(REGIONS[2]).toEqual('eu');
  });

  test('should contain property "3"', () => {
    expect(REGIONS[2]).toBeDefined();
  });

  test('property "3" should be of type "Array"', () => {
    expect(Array.isArray(REGIONS[3])).toBe(true);
  });

  test('index 0 of property "3" should be equal to "kr"', () => {
    expect(REGIONS[3][0]).toEqual('kr');
  });

  test('index 1 of property "3" should be equal to "tw"', () => {
    expect(REGIONS[3][1]).toEqual('tw');
  });

  test('should contain property "5"', () => {
    expect(REGIONS[5]).toBeDefined();
  });

  test('property "5" should be equal to "cn"', () => {
    expect(REGIONS[5]).toEqual('cn');
  });
});
