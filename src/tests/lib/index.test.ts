import * as lib from '../../lib';
import * as utils from '../../lib/utils';

describe('Lib module', () => {
  test('should export lib/utils', () => {
    expect(lib).toStrictEqual(utils);
  });
});
