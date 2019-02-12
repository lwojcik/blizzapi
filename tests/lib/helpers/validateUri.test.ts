import { Uri } from '../../../src/lib/types';
import { uri as validateUri } from '../../../src/lib/helpers/validators';

import urisJson from '../../__testData__/uris.json';
import invalidUrisJson from '../../__testData__/invalidUris.json';

/* tslint:disable no-expression-statement */
describe('validateUri()', () => {
  test('should be defined', () => {
    expect(validateUri).toBeDefined();
  });

  test('should be function', () => {
    expect(validateUri).toBeTruthy();
    expect(typeof validateUri).toBe('function');
  });

  test('should be function', () => {
    expect(validateUri).toBeTruthy();
    expect(typeof validateUri).toBe('function');
  });

  (urisJson as ReadonlyArray<Uri>).forEach(uri => {
    test(`returns true for ${uri} as correct uri`, () => {
      expect(validateUri(uri)).toBe(true);
    });
  });

  (invalidUrisJson as ReadonlyArray<Uri>).forEach(uri => {
    test(`returns false for ${uri} as invalid uri`, () => {
      expect(validateUri(uri)).toBe(false);
    });
  });
});
/* tslint:enable no-expression-statement */
