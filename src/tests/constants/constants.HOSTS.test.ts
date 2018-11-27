import constants from '../../lib/constants';

const { HOSTS } = constants;

describe('HOSTS', () => {
  test('should be defined', () => {
    expect(HOSTS).toBeDefined();
  });

  test('should contain 4 elements', () => {
    expect(Object.keys(HOSTS).length).toEqual(4);
  });

  test('should contain property "1"', () => {
    expect(HOSTS[1]).toBeDefined();
  });

  test('property "1" should be equal to "https://us.api.blizzard.com"', () => {
    expect(HOSTS[1]).toEqual('https://us.api.blizzard.com');
  });

  test('should contain property "2"', () => {
    expect(HOSTS[2]).toBeDefined();
  });

  test('property "2" should be equal to "https://eu.api.blizzard.com"', () => {
    expect(HOSTS[2]).toEqual('https://eu.api.blizzard.com');
  });

  test('should contain property "3"', () => {
    expect(HOSTS[3]).toBeDefined();
  });

  test('property "3" should be equal to "https://kr.api.blizzard.com"', () => {
    expect(HOSTS[3]).toEqual('https://kr.api.blizzard.com');
  });

  test('should contain property "5"', () => {
    expect(HOSTS[5]).toBeDefined();
  });

  test('property "5" should be equal to "https://api.blizzard.com.cn"', () => {
    expect(HOSTS[5]).toEqual('https://api.blizzard.com.cn');
  });
});
