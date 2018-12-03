import * as index from '../index';
import * as lib from '../lib';

describe('Index', () => {
  test('should be defined', () => {
    expect(index).toBeDefined();
  });

  test('should export BattleNetUtils namespace', () => {
    expect(index.BattleNetUtils).toBeDefined();
  });

  test('BattleNetUtils should be strictly equal to lib module', () => {
    expect(index.BattleNetUtils).toStrictEqual(lib);
  });
});
