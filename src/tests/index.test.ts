import * as index from '../index';
import * as lib from '../lib';

describe('Index', () => {
  test('should be defined', () => {
    expect(index).toBeDefined();
  });

  test('should export lib module', () => {
    expect(index).toStrictEqual(lib);
  });
});
