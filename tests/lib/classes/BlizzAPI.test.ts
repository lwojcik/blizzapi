import BlizzAPI from '../../../src/classes/BlizzAPI';

describe('BlizzAPI class', () => {
  test('should be defined', () => {
    expect(BlizzAPI).toBeDefined();
  });

  test('should define query method', () => {
    expect(new BlizzAPI({ region: '', clientId: '', clientSecret: '' }).query).toBeDefined();
  });

  test('should define getAccessToken method', () => {
    expect(new BlizzAPI({
      region: '',
      clientId: '',
      clientSecret: '',
    }).getAccessToken).toBeDefined();
  });

  test('should define validateAccessToken static method', () => {
    expect(BlizzAPI.validateAccessToken).toBeDefined();
  });

  test('should define getAllRegions static method', () => {
    expect(BlizzAPI.getAllRegions).toBeDefined();
  });

  test('should define getAllRegionIds static method', () => {
    expect(BlizzAPI.getAllRegionIds).toBeDefined();
  });

  test('should define getAllRegionNames static method', () => {
    expect(BlizzAPI.getAllRegionNames).toBeDefined();
  });

  test('should define getRegionNameById static method', () => {
    expect(BlizzAPI.getRegionNameById).toBeDefined();
  });

  test('should define validateRegionId static method', () => {
    expect(BlizzAPI.validateRegionId).toBeDefined();
  });

  test('should define getRegionIdByName static method', () => {
    expect(BlizzAPI.getRegionIdByName).toBeDefined();
  });

  test('should define validateRegionName static method', () => {
    expect(BlizzAPI.validateRegionName).toBeDefined();
  });

  test('should define getAllLocales static method', () => {
    expect(BlizzAPI.getAllLocales).toBeDefined();
  });

  test('should define getAllLocaleNames static method', () => {
    expect(BlizzAPI.getAllLocaleNames).toBeDefined();
  });

  test('should define getLocalesByRegionId static method', () => {
    expect(BlizzAPI.getLocalesByRegionId).toBeDefined();
  });

  test('should define checkIfLocaleLooksValid static method', () => {
    expect(BlizzAPI.checkIfLocaleLooksValid).toBeDefined();
  });


  test('should define validateLocale static method', () => {
    expect(BlizzAPI.validateLocale).toBeDefined();
  });

  test('should define isLocaleValidForRegionId static method', () => {
    expect(BlizzAPI.isLocaleValidForRegionId).toBeDefined();
  });

  test('should define getAllSc2Realms static method', () => {
    expect(BlizzAPI.isLocaleValidForRegionId).toBeDefined();
  });

  test('should define getAllAvailableSc2Realms static method', () => {
    expect(BlizzAPI.getAllAvailableSc2Realms).toBeDefined();
  });

  test('should define getSc2RealmsByRegionId static method', () => {
    expect(BlizzAPI.getSc2RealmsByRegionId).toBeDefined();
  });

  test('should define checkIfSc2RealmLooksValid static method', () => {
    expect(BlizzAPI.checkIfSc2RealmLooksValid).toBeDefined();
  });

  test('should define validateSc2Realm static method', () => {
    expect(BlizzAPI.validateSc2Realm).toBeDefined();
  });

  test('should define isSc2RealmValidForRegionId static method', () => {
    expect(BlizzAPI.isSc2RealmValidForRegionId).toBeDefined();
  });

  test('should define getDefaultLocaleNameForRegionId static method', () => {
    expect(BlizzAPI.getDefaultLocaleNameForRegionId).toBeDefined();
  });

  test('should define getAllDefaultLocaleNames static method', () => {
    expect(BlizzAPI.getAllDefaultLocaleNames).toBeDefined();
  });

  test('should query an endpoint', async () => {
    const bnetApi = new BlizzAPI({
      region: 'us',
      clientId: 'valid_client_id',
      clientSecret: 'valid_client_secret'
    });

    const response = await bnetApi.query('/sample/endpoint');
    expect(response).toMatchSnapshot();
  });

  test('should validate access token and return true', async () => {
    const response = await BlizzAPI.validateAccessToken('us', 'valid_access_token');
    expect(response).toMatchSnapshot();
  });
});