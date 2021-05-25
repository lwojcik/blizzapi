import * as utils from '../../../../../src/utils';

import sc2realmsJson from '../../../../__testData__/sc2realms.json';
import nonexistentSc2realmsJson from '../../../../__testData__/nonexistentSc2realms.json';
import wrongSc2realmsJson from '../../../../__testData__/wrongSc2realms.json';

const { validateSc2Realm } = utils;

describe('validateSc2Realm()', () => {
  it('should be defined', () => {
    expect(validateSc2Realm).toBeDefined();
  });

  it('should be of type "function"', () => {
    expect(typeof validateSc2Realm).toBe('function');
  });

  (sc2realmsJson as ReadonlyArray<string | number>).forEach(sc2realm =>
    it(`should return true for ${sc2realm} as valid SC2 realm`, () => {
      expect(validateSc2Realm(sc2realm)).toBe(true);
    }));

  (nonexistentSc2realmsJson as ReadonlyArray<string | number>).forEach(nonexistentSc2realmsJso =>
    it(`should return false for ${nonexistentSc2realmsJso} as non-existent SC2 realm`, () => {
      expect(validateSc2Realm(nonexistentSc2realmsJso)).toBe(false);
    }));

  (wrongSc2realmsJson as ReadonlyArray<string | number>).forEach(wrongSc2realm =>
    it(`should throw RangeError for ${wrongSc2realm} as invalid SC2 realm`, () => {
      expect(() => validateSc2Realm(wrongSc2realm)).toThrow(RangeError);
    }));
});
