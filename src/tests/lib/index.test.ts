import * as lib from '../../lib';

describe('Lib module', () => {
  test('should export BattleNetUtils', () => {
    expect(lib.BattleNetUtils).toBeDefined();
  });
});
