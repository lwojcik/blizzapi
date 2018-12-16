import { BattleNetApi, BattleNetUtils } from '../index';
import api from '../lib/api';
import * as utils from '../lib/utils';

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
