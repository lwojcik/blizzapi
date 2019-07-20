import * as utils from '../../../../src/lib/utils';
import constants from '../../../../src/lib/constants';

const { REGIONS } = constants;

const { getAllRegionNames } = utils;

/* tslint:disable no-expression-statement */
describe('getAllRegionNames()', () => {
  test('should be defined', () => {
    expect(getAllRegionNames).toBeDefined();
  });

  test('should be of type "function"', () => {
    expect(typeof getAllRegionNames).toBe('function');
  });

  test('should return an array', () => {
    expect(typeof getAllRegionNames).toBeTruthy();
    expect(getAllRegionNames().constructor === Array).toBe(true);
  });

  test('number of returned elements should match length of constants.REGIONS values after flattening', () => {
    const flattenedRegionsLength = <number>(
      ([] as ReadonlyArray<string>).concat(...Object.values(REGIONS)).length
    );
    expect(getAllRegionNames().length).toStrictEqual(flattenedRegionsLength);
  });
});
/* tslint:enable no-expression-statement */
