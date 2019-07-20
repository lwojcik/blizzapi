import BattleNetAPI from '../../../../src/lib/classes/abstract/BattleNetAPI';

// tslint:disable
class BattleNetAPIMock extends BattleNetAPI {
  constructor() {
    super('us', 'foo', 'bar', 'baz');
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
    expect(new BattleNetAPIMock().region).toBe('us');
  });

  test('should define clientId property', () => {
    expect(new BattleNetAPIMock().clientId).toBe('foo');
  });

  test('should define clientSecret property', () => {
    expect(new BattleNetAPIMock().clientSecret).toBe('bar');
  });

  test('should define accessToken property', () => {
    expect(new BattleNetAPIMock().accessToken).toBe('baz');
  });

  test('should define setAccessToken method', () => {
    expect(new BattleNetAPIMock().setAccessToken).toBeDefined;
  });

  test('should define validateAccessToken method', () => {
    expect(BattleNetAPIMock.validateAccessToken).toBeDefined;
  });

  test('should define getAccessToken method', () => {
    expect(new BattleNetAPIMock().getAccessToken).toBeDefined;
  });
});
/* tslint:enable no-expression-statement */
