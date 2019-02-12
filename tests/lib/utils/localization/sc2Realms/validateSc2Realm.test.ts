import * as utils from '../../../../../src/lib/utils';
const { validateSc2Realm } = utils;

import sc2realmsJson from '../../../../__testData__/sc2realms.json';
import nonexistentSc2realmsJson from '../../../../__testData__/nonexistentSc2realms.json';
import wrongSc2realmsJson from '../../../../__testData__/wrongSc2realms.json';

/* tslint:disable no-expression-statement */
describe('validateSc2Realm()', () => {
  test('should be defined', () => {
    expect(validateSc2Realm).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof validateSc2Realm).toBe('function');
  });

  (sc2realmsJson as ReadonlyArray<string | number>).forEach(sc2realm =>
    test(`should return true for ${sc2realm} as valid SC2 realm`, () => {
      expect(validateSc2Realm(sc2realm)).toBe(true);
    }),
  );

  (nonexistentSc2realmsJson as ReadonlyArray<string | number>).forEach(nonexistentSc2realmsJso =>
    test(`should return false for ${nonexistentSc2realmsJso} as non-existent SC2 realm`, () => {
      expect(validateSc2Realm(nonexistentSc2realmsJso)).toBe(false);
    }),
  );

  (wrongSc2realmsJson as ReadonlyArray<string | number>).forEach(wrongSc2realm =>
    test('should throw RangeError for ${wrongSc2realm} as invalid SC2 realm', () => {
      expect(() => validateSc2Realm(wrongSc2realm)).toThrow(RangeError);
    }),
  );
});
/* tslint:enable no-expression-statement */
