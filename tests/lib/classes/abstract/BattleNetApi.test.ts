import BattleNetAPI from '../../../../src/lib/classes/abstract/BattleNetAPI';
// import * as oauth from '../../../../src/lib/helpers';

jest.genMockFromModule('../../../../src/lib/classes/abstract/BattleNetAPI');

// tslint:disable-next-line: no-object-mutation
BattleNetAPI.prototype.getAccessToken = jest.fn().mockImplementation(() =>
  Promise.resolve('valid_access_token_from_BattleNetAPIMock'));

// tslint:disable
class BattleNetAPIMock extends BattleNetAPI {
  constructor(accessToken?: string) {
    super({
      accessToken,
      region: 'us',
      clientId: 'valid_client_id_from_BattleNetAPIMock',
      clientSecret: 'valid_client_secret_from_BattleNetAPIMock',
    });
  }

  query(uri: string) {
    return {
      status: 'ok',
      uri,
    };
  }
}
// tslint:enable

describe('BattleNetAPI class', () => {
  test('should be defined', () => {
    expect(BattleNetAPI).toBeDefined();
  });

  test('should define region property', () => {
    expect(new BattleNetAPIMock().region).toMatchSnapshot();
  });

  test('should define clientId property', () => {
    expect(new BattleNetAPIMock().clientId).toMatchSnapshot();
  });

  test('should define clientSecret property', () => {
    expect(new BattleNetAPIMock().clientSecret).toMatchSnapshot();
  });

  test('should save accessToken as undefined', () => {
    expect(new BattleNetAPIMock().accessToken).toMatchSnapshot();
  });

  test('should set access token', async () => {
    const bnetApi = new BattleNetAPIMock();
    const response = await bnetApi.setAccessToken();
    expect(response).toMatchSnapshot();
  });

  test('should get access token', async () => {
    const bnetApi = new BattleNetAPIMock();
    const response = await bnetApi.getAccessToken();
    expect(response).toMatchSnapshot();
  });


  test('should get access token when provided by user', async () => {
    const bnetApi = new BattleNetAPIMock('valid_access_token');
    const response = await bnetApi.getAccessToken();
    expect(response).toMatchSnapshot();
  });

  test('should validate access token and return true', async () => {
    const response = await BattleNetAPIMock.validateAccessToken('us', 'valid_access_token');
    expect(response).toMatchSnapshot();
  });
});