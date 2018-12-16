import * as utils from '../../../lib/utils';

describe('utils', () => {
  test('should be defined', () => {
    expect(utils).toBeDefined();
  });

  test('should be of type "Object"', () => {
    expect(utils).toBeTruthy();
    expect(typeof utils).toBe('object');
  });

  test('should expose method getAllRegions()', () => {
    expect(utils.getAllRegions).toBeDefined();
    expect(utils.getAllRegions).toBeTruthy();
    expect(typeof utils.getAllRegions).toBe('function');
  });

  test('should expose method getAllRegionIds()', () => {
    expect(utils.getAllRegionIds).toBeDefined();
    expect(utils.getAllRegionIds).toBeTruthy();
    expect(typeof utils.getAllRegionIds).toBe('function');
  });

  test('should expose method getAllRegionNames()', () => {
    expect(utils.getAllRegionNames).toBeDefined();
    expect(utils.getAllRegionNames).toBeTruthy();
    expect(typeof utils.getAllRegionNames).toBe('function');
  });

  test('should expose method getRegionNameById()', () => {
    expect(utils.getRegionNameById).toBeDefined();
    expect(utils.getRegionNameById).toBeTruthy();
    expect(typeof utils.getRegionNameById).toBe('function');
  });

  test('should expose method validateRegionId()', () => {
    expect(utils.validateRegionId).toBeDefined();
    expect(utils.validateRegionId).toBeTruthy();
    expect(typeof utils.validateRegionId).toBe('function');
  });

  test('should expose method getRegionIdByName()', () => {
    expect(utils.getRegionIdByName).toBeDefined();
    expect(utils.getRegionIdByName).toBeTruthy();
    expect(typeof utils.getRegionIdByName).toBe('function');
  });

  test('should expose method validateRegionName()', () => {
    expect(utils.validateRegionName).toBeDefined();
    expect(utils.validateRegionName).toBeTruthy();
    expect(typeof utils.validateRegionName).toBe('function');
  });

  test('should expose method getAllLocales()', () => {
    expect(utils.getAllLocales).toBeDefined();
    expect(utils.getAllLocales).toBeTruthy();
    expect(typeof utils.getAllLocales).toBe('function');
  });

  test('should expose method getAllLocaleNames()', () => {
    expect(utils.getAllLocaleNames).toBeDefined();
    expect(utils.getAllLocaleNames).toBeTruthy();
    expect(typeof utils.getAllLocaleNames).toBe('function');
  });

  test('should expose method getLocalesByRegionId()', () => {
    expect(utils.getLocalesByRegionId).toBeDefined();
    expect(utils.getLocalesByRegionId).toBeTruthy();
    expect(typeof utils.getLocalesByRegionId).toBe('function');
  });

  test('should expose method checkIfLocaleLooksValid()', () => {
    expect(utils.checkIfLocaleLooksValid).toBeDefined();
    expect(utils.checkIfLocaleLooksValid).toBeTruthy();
    expect(typeof utils.checkIfLocaleLooksValid).toBe('function');
  });

  test('should expose method validateLocale()', () => {
    expect(utils.validateLocale).toBeDefined();
    expect(utils.validateLocale).toBeTruthy();
    expect(typeof utils.validateLocale).toBe('function');
  });

  test('should expose method getAllDefaultLocaleIndexes()', () => {
    expect(utils.getAllDefaultLocaleIndexes).toBeDefined();
    expect(utils.getAllDefaultLocaleIndexes).toBeTruthy();
    expect(typeof utils.getAllDefaultLocaleIndexes).toBe('function');
  });

  test('should expose method isLocaleValidForRegionId()', () => {
    expect(utils.isLocaleValidForRegionId).toBeDefined();
    expect(utils.isLocaleValidForRegionId).toBeTruthy();
    expect(typeof utils.isLocaleValidForRegionId).toBe('function');
  });

  test('should expose method getAllDefaultLocaleIndexes()', () => {
    expect(utils.getAllDefaultLocaleIndexes).toBeDefined();
    expect(utils.getAllDefaultLocaleIndexes).toBeTruthy();
    expect(typeof utils.getAllDefaultLocaleIndexes).toBe('function');
  });

  test('should expose method getAllDefaultLocaleNames()', () => {
    expect(utils.getAllDefaultLocaleNames).toBeDefined();
    expect(utils.getAllDefaultLocaleNames).toBeTruthy();
    expect(typeof utils.getAllDefaultLocaleNames).toBe('function');
  });

  test('should expose method getDefaultLocaleIndexForRegionId()', () => {
    expect(utils.getDefaultLocaleIndexForRegionId).toBeDefined();
    expect(utils.getDefaultLocaleIndexForRegionId).toBeTruthy();
    expect(typeof utils.getDefaultLocaleIndexForRegionId).toBe('function');
  });

  test('should expose method getDefaultLocaleNameForRegionId()', () => {
    expect(utils.getDefaultLocaleNameForRegionId).toBeDefined();
    expect(utils.getDefaultLocaleNameForRegionId).toBeTruthy();
    expect(typeof utils.getDefaultLocaleNameForRegionId).toBe('function');
  });

  test('should expose method getAllSc2Realms()', () => {
    expect(utils.getAllSc2Realms).toBeDefined();
    expect(utils.getAllSc2Realms).toBeTruthy();
    expect(typeof utils.getAllSc2Realms).toBe('function');
  });

  test('should expose method getAllAvailableSc2Realms()', () => {
    expect(utils.getAllAvailableSc2Realms).toBeDefined();
    expect(utils.getAllAvailableSc2Realms).toBeTruthy();
    expect(typeof utils.getAllAvailableSc2Realms).toBe('function');
  });

  test('should expose method getSc2RealmsByRegionId()', () => {
    expect(utils.getSc2RealmsByRegionId).toBeDefined();
    expect(utils.getSc2RealmsByRegionId).toBeTruthy();
    expect(typeof utils.getSc2RealmsByRegionId).toBe('function');
  });

  test('should expose method checkIfSc2RealmLooksValid()', () => {
    expect(utils.checkIfSc2RealmLooksValid).toBeDefined();
    expect(utils.checkIfSc2RealmLooksValid).toBeTruthy();
    expect(typeof utils.checkIfSc2RealmLooksValid).toBe('function');
  });

  test('should expose method validateSc2Realm()', () => {
    expect(utils.validateSc2Realm).toBeDefined();
    expect(utils.validateSc2Realm).toBeTruthy();
    expect(typeof utils.validateSc2Realm).toBe('function');
  });

  test('should expose method isSc2RealmValidForRegionId()', () => {
    expect(utils.isSc2RealmValidForRegionId).toBeDefined();
    expect(utils.isSc2RealmValidForRegionId).toBeTruthy();
    expect(typeof utils.isSc2RealmValidForRegionId).toBe('function');
  });

  test('should expose method getAllApiHosts()', () => {
    expect(utils.getAllApiHosts).toBeDefined();
    expect(utils.getAllApiHosts).toBeTruthy();
    expect(typeof utils.getAllApiHosts).toBe('function');
  });

  test('should expose method getApiHostByRegionId()', () => {
    expect(utils.getApiHostByRegionId).toBeDefined();
    expect(utils.getApiHostByRegionId).toBeTruthy();
    expect(typeof utils.getApiHostByRegionId).toBe('function');
  });

  test('should expose method getApiHostByRegionName()', () => {
    expect(utils.getApiHostByRegionName).toBeDefined();
    expect(utils.getApiHostByRegionName).toBeTruthy();
    expect(typeof utils.getApiHostByRegionName).toBe('function');
  });

  test('should expose method getAllAuthorizeUris()', () => {
    expect(utils.getAllAuthorizeUris).toBeDefined();
    expect(utils.getAllAuthorizeUris).toBeTruthy();
    expect(typeof utils.getAllAuthorizeUris).toBe('function');
  });

  test('should expose method getAuthorizeUriByRegionId()', () => {
    expect(utils.getAuthorizeUriByRegionId).toBeDefined();
    expect(utils.getAuthorizeUriByRegionId).toBeTruthy();
    expect(typeof utils.getAuthorizeUriByRegionId).toBe('function');
  });

  test('should expose method getAuthorizeUriByRegionName()', () => {
    expect(utils.getAuthorizeUriByRegionName).toBeDefined();
    expect(utils.getAuthorizeUriByRegionName).toBeTruthy();
    expect(typeof utils.getAuthorizeUriByRegionName).toBe('function');
  });

  test('should expose method getAllCheckTokenUris()', () => {
    expect(utils.getAllCheckTokenUris).toBeDefined();
    expect(utils.getAllCheckTokenUris).toBeTruthy();
    expect(typeof utils.getAllCheckTokenUris).toBe('function');
  });

  test('should expose method getCheckTokenUriByRegionId()', () => {
    expect(utils.getCheckTokenUriByRegionId).toBeDefined();
    expect(utils.getCheckTokenUriByRegionId).toBeTruthy();
    expect(typeof utils.getCheckTokenUriByRegionId).toBe('function');
  });

  test('should expose method getCheckTokenUriByRegionName()', () => {
    expect(utils.getCheckTokenUriByRegionName).toBeDefined();
    expect(utils.getCheckTokenUriByRegionName).toBeTruthy();
    expect(typeof utils.getCheckTokenUriByRegionName).toBe('function');
  });

  test('should expose method getAllTokenUris()', () => {
    expect(utils.getAllTokenUris).toBeDefined();
    expect(utils.getAllTokenUris).toBeTruthy();
    expect(typeof utils.getAllTokenUris).toBe('function');
  });

  test('should expose method getTokenUriByRegionId()', () => {
    expect(utils.getTokenUriByRegionId).toBeDefined();
    expect(utils.getTokenUriByRegionId).toBeTruthy();
    expect(typeof utils.getTokenUriByRegionId).toBe('function');
  });

  test('should expose method getTokenUriByRegionName()', () => {
    expect(utils.getTokenUriByRegionName).toBeDefined();
    expect(utils.getTokenUriByRegionName).toBeTruthy();
    expect(typeof utils.getTokenUriByRegionName).toBe('function');
  });
});
