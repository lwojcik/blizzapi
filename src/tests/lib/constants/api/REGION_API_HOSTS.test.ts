import constants from '../../../../lib/constants';

const { REGION_API_HOSTS } = constants;

describe('REGION_API_HOSTS', () => {
  test('should be defined', () => {
    expect(REGION_API_HOSTS).toBeDefined();
  });

  test('should contain 4 elements', () => {
    expect(Object.keys(REGION_API_HOSTS).length).toStrictEqual(4);
  });

  test('should contain property "1"', () => {
    expect(REGION_API_HOSTS[1]).toBeDefined();
  });

  test('property "1" should be equal to "https://us.api.blizzard.com"', () => {
    expect(REGION_API_HOSTS[1]).toStrictEqual('https://us.api.blizzard.com');
  });

  test('should contain property "2"', () => {
    expect(REGION_API_HOSTS[2]).toBeDefined();
  });

  test('property "2" should be equal to "https://eu.api.blizzard.com"', () => {
    expect(REGION_API_HOSTS[2]).toStrictEqual('https://eu.api.blizzard.com');
  });

  test('should contain property "3"', () => {
    expect(REGION_API_HOSTS[3]).toBeDefined();
  });

  test('property "3" should be equal to "https://kr.api.blizzard.com"', () => {
    expect(REGION_API_HOSTS[3]).toStrictEqual('https://kr.api.blizzard.com');
  });

  test('should contain property "5"', () => {
    expect(REGION_API_HOSTS[5]).toBeDefined();
  });

  test('property "5" should be equal to "https://api.blizzard.com.cn"', () => {
    expect(REGION_API_HOSTS[5]).toStrictEqual('https://api.blizzard.com.cn');
  });
});
