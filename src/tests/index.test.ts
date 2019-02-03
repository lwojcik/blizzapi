import { BattleNetApi, BattleNetUtils } from '../index';
import { default as api } from '../lib/classes/BattleNetApi';
import * as utils from '../lib/utils';

/* tslint:disable no-expression-statement */
describe('Index', () => {
  test('should export BattleNetApi namespace', () => {
    expect(BattleNetApi).toBeDefined();
  });

  test('should export BattleNetUtils namespace', () => {
    expect(BattleNetUtils).toBeDefined();
  });

  test('BattleNetApi should be strictly equal to lib/api/BattleNetApi module', () => {
    expect(BattleNetApi).toStrictEqual(api);
  });

  test('BattleNetUtils should be strictly equal to lib/utils module', () => {
    expect(BattleNetUtils).toStrictEqual(utils);
  });
});
/* tslint:enable no-expression-statement */
