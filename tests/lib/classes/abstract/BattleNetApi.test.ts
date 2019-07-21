import BattleNetAPI from '../../../../src/lib/classes/abstract/BattleNetAPI';
// import * as oauth from '../../../../src/lib/helpers';

jest.genMockFromModule('../../../../src/lib/classes/abstract/BattleNetAPI');

// tslint:disable
class BattleNetAPIMock extends BattleNetAPI {
  constructor(accessToken?: string) {
    super('us', 'sample client id from BattleNetAPIMock', 'sample client secret from BattleNetAPIMock', accessToken);
  }

  query(uri: string) {
    return {
      status: 'ok',
      uri,
    };
  }
}
// tslint:enable

/* tslint:disable no-expression-statement */
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


  test('should get access token', async () => {
    const bnetApi = new BattleNetAPIMock('sample provided access token');
    const response = await bnetApi.getAccessToken();
    expect(response).toMatchSnapshot();
  });

  test('should validate access token', async () => {
    const response = await BattleNetAPIMock.validateAccessToken('us', 'sample access token');
    expect(response).toMatchSnapshot();
  });
});
/* tslint:enable no-expression-statement */
