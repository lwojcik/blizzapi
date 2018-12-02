import * as index from '../index';

describe('Project index', () => {
  test('should export BattleNetUtils', () => {
    expect(index.BattleNetUtils).toBeDefined();
  });
});
