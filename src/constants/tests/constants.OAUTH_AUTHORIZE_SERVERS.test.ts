import constants from '../constants';

const { OAUTH_AUTHORIZE_SERVERS } = constants;

describe('OAUTH_AUTHORIZE_SERVERS', () => {
  test('should be defined', () => {
    expect(OAUTH_AUTHORIZE_SERVERS).toBeDefined();
  });

  test('should contain 4 elements', () => {
    expect(Object.keys(OAUTH_AUTHORIZE_SERVERS).length).toEqual(4);
  });

  test('should contain property "1"', () => {
    expect(OAUTH_AUTHORIZE_SERVERS[1]).toBeDefined();
  });

  test('property "1" should be equal to "https://us.battle.net/oauth/authorize"', () => {
    expect(OAUTH_AUTHORIZE_SERVERS[1]).toEqual('https://us.battle.net/oauth/authorize');
  });

  test('should contain property "2"', () => {
    expect(OAUTH_AUTHORIZE_SERVERS[2]).toBeDefined();
  });

  test('property "2" should be equal to "https://eu.battle.net/oauth/authorize"', () => {
    expect(OAUTH_AUTHORIZE_SERVERS[2]).toEqual('https://eu.battle.net/oauth/authorize');
  });

  test('should contain property "3"', () => {
    expect(OAUTH_AUTHORIZE_SERVERS[3]).toBeDefined();
  });

  test('property "3" should be equal to "https://apac.battle.net/oauth/authorize"', () => {
    expect(OAUTH_AUTHORIZE_SERVERS[3]).toEqual('https://apac.battle.net/oauth/authorize');
  });

  test('should contain property "5"', () => {
    expect(OAUTH_AUTHORIZE_SERVERS[5]).toBeDefined();
  });

  test('property "5" should be equal to "https://www.battlenet.com.cn/oauth/authorize"', () => {
    expect(OAUTH_AUTHORIZE_SERVERS[5]).toEqual('https://www.battlenet.com.cn/oauth/authorize');
  });
});
