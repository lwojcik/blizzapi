import BlizzAPI from '../../../src/lib/classes/BlizzAPI';

describe('BlizzAPI class', () => {
  test('should be defined', () => {
    expect(BlizzAPI).toBeDefined();
  });

  test('should define query method', () => {
    expect(new BlizzAPI({ region: '', clientId: '', clientSecret: '' }).query).toBeDefined();
  });


  test('should define getAccessToken method', () => {
    expect(new BlizzAPI({ region: '', clientId: '', clientSecret: '' }).getAccessToken).toBeDefined();
  });

  test('should define validateAccessToken method', () => {
    expect(new BlizzAPI({ region: '', clientId: '', clientSecret: '' }).validateAccessToken).toBeDefined();
  });

  test('should define getAllRegions method', () => {
    expect(BlizzAPI.getAllRegions).toBeDefined();
  });

  test('should define getAllRegionIds method', () => {
    expect(BlizzAPI.getAllRegionIds).toBeDefined();
  });

  test('should define getAllRegionNames method', () => {
    expect(BlizzAPI.getAllRegionNames).toBeDefined();
  });

  test('should define getRegionNameById method', () => {
    expect(BlizzAPI.getRegionNameById).toBeDefined();
  });

  test('should define validateRegionId method', () => {
    expect(BlizzAPI.validateRegionId).toBeDefined();
  });

  test('should define getRegionIdByName method', () => {
    expect(BlizzAPI.getRegionIdByName).toBeDefined();
  });

  test('should define validateRegionName method', () => {
    expect(BlizzAPI.validateRegionName).toBeDefined();
  });

  test('should define getAllLocales method', () => {
    expect(BlizzAPI.getAllLocales).toBeDefined();
  });

  test('should define getAllLocaleNames method', () => {
    expect(BlizzAPI.getAllLocaleNames).toBeDefined();
  });

  test('should define getLocalesByRegionId method', () => {
    expect(BlizzAPI.getLocalesByRegionId).toBeDefined();
  });

  test('should define checkIfLocaleLooksValid method', () => {
    expect(BlizzAPI.checkIfLocaleLooksValid).toBeDefined();
  });


  test('should define validateLocale method', () => {
    expect(BlizzAPI.validateLocale).toBeDefined();
  });

  test('should define isLocaleValidForRegionId method', () => {
    expect(BlizzAPI.isLocaleValidForRegionId).toBeDefined();
  });

  test('should define getAllSc2Realms method', () => {
    expect(BlizzAPI.isLocaleValidForRegionId).toBeDefined();
  });

  test('should define getAllAvailableSc2Realms method', () => {
    expect(BlizzAPI.getAllAvailableSc2Realms).toBeDefined();
  });

  test('should define getSc2RealmsByRegionId method', () => {
    expect(BlizzAPI.getSc2RealmsByRegionId).toBeDefined();
  });

  test('should define checkIfSc2RealmLooksValid method', () => {
    expect(BlizzAPI.checkIfSc2RealmLooksValid).toBeDefined();
  });

  test('should define validateSc2Realm method', () => {
    expect(BlizzAPI.validateSc2Realm).toBeDefined();
  });

  test('should define isSc2RealmValidForRegionId method', () => {
    expect(BlizzAPI.isSc2RealmValidForRegionId).toBeDefined();
  });

  test('should query an endpoint', async () => {
    const bnetApi = new BlizzAPI({
      region: 'us',
      clientId: 'sample client id',
      clientSecret: 'sample client secret'
    });

    const response = await bnetApi.query('/sample/endpoint');
    expect(response).toMatchSnapshot();
  });

  test('should validate access token', async () => {
    const bnetApi = new BlizzAPI({
      region: 'us',
      clientId: 'sample client id',
      clientSecret: 'sample client secret'
    });

    const response = await bnetApi.validateAccessToken('us', 'correctAccessToken');
    expect(response).toMatchSnapshot();
  });
});