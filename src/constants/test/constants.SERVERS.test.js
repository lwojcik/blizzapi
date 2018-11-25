const CONSTANTS = require('../constants');

const { SERVERS } = CONSTANTS;

describe('SERVERS', () => {
  test('should be defined', () => {
    expect(SERVERS).toBeDefined();
  });

  test('should contain 4 elements', () => {
    expect(Object.keys(SERVERS).length).toEqual(4);
  });

  test('should contain property "1"', () => {
    expect(SERVERS[1]).toBeDefined();
  });


  test('property "1" should be equal to "https://us.api.blizzard.com"', () => {
    expect(SERVERS[1]).toEqual('https://us.api.blizzard.com');
  });

  test('should contain property "2"', () => {
    expect(SERVERS[2]).toBeDefined();
  });

  test('property "2" should be equal to "https://eu.api.blizzard.com"', () => {
    expect(SERVERS[2]).toEqual('https://eu.api.blizzard.com');
  });

  test('should contain property "3"', () => {
    expect(SERVERS[3]).toBeDefined();
  });

  test('property "3" should be equal to "https://kr.api.blizzard.com"', () => {
    expect(SERVERS[3]).toEqual('https://kr.api.blizzard.com');
  });

  test('should contain property "5"', () => {
    expect(SERVERS[5]).toBeDefined();
  });

  test('property "5" should be equal to "https://api.blizzard.com.cn"', () => {
    expect(SERVERS[5]).toEqual('https://api.blizzard.com.cn');
  });
});
