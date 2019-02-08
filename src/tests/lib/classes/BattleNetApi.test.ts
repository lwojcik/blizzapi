import BattleNetApi from '../../../lib/classes/BattleNetApi';

/* tslint:disable no-expression-statement */
describe('BattleNetApi class', () => {
  test('should be defined', () => {
    expect(BattleNetApi).toBeDefined();
  });

  test('should be a class', () => {
    expect(new BattleNetApi('eu', 'test', 'test')).toBeInstanceOf(BattleNetApi);
  });

  test('should expose query() method', () => {
    expect(new BattleNetApi('eu', 'test', 'test').query).toBeDefined();
  });
});
/* tslint:enable no-expression-statement */
