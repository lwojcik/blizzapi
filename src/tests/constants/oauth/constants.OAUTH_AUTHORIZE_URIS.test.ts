import constants from '../../../lib/constants';

const { OAUTH_AUTHORIZE_URIS } = constants;

describe('OAUTH_AUTHORIZE_URIS', () => {
  test('should be defined', () => {
    expect(OAUTH_AUTHORIZE_URIS).toBeDefined();
  });
  test('should contain 4 elements', () => {
    expect(Object.keys(OAUTH_AUTHORIZE_URIS).length).toStrictEqual(4);
  });
  test('should contain property "1"', () => {
    expect(OAUTH_AUTHORIZE_URIS[1]).toBeDefined();
  });
  test('property "1" should be equal to "https://us.battle.net/oauth/authorize"', () => {
    expect(OAUTH_AUTHORIZE_URIS[1]).toStrictEqual('https://us.battle.net/oauth/authorize');
  });
  test('should contain property "2"', () => {
    expect(OAUTH_AUTHORIZE_URIS[2]).toBeDefined();
  });
  test('property "2" should be equal to "https://eu.battle.net/oauth/authorize"', () => {
    expect(OAUTH_AUTHORIZE_URIS[2]).toStrictEqual('https://eu.battle.net/oauth/authorize');
  });
  test('should contain property "3"', () => {
    expect(OAUTH_AUTHORIZE_URIS[3]).toBeDefined();
  });
  test('property "3" should be equal to "https://apac.battle.net/oauth/authorize"', () => {
    expect(OAUTH_AUTHORIZE_URIS[3]).toStrictEqual('https://apac.battle.net/oauth/authorize');
  });
  test('should contain property "5"', () => {
    expect(OAUTH_AUTHORIZE_URIS[5]).toBeDefined();
  });
  test('property "5" should be equal to "https://www.battlenet.com.cn/oauth/authorize"', () => {
    expect(OAUTH_AUTHORIZE_URIS[5]).toStrictEqual('https://www.battlenet.com.cn/oauth/authorize');
  });
});
