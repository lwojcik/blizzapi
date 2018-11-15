const fetch = require('cross-fetch');

// API regions
// via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization

const API_REGIONS = {
  1: 'us',
  2: 'eu',
  3: 'kr',
  5: 'ch',
};

// API locales and their availability in different regions
// via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization


const API_LOCALES = {
  us: [
    'en_US',
    'es_MX',
    'pt_BR',
  ],
  eu: [
    'en_GB',
    'es_ES',
    'fr_FR',
    'ru_RU',
    'de_DE',
    'pt_PT',
    'it_IT',
  ],
  kr: [
    'ko_KR',
  ],
  tw: [
    'zh_TW',
  ],
  ch: [
    'zh_CN',
  ],
};

// base API URL - general

const API_SERVER = 'api.blizzard.com';

// base API URL - China

const API_SERVER_CHINA = 'api.blizzard.com.cn';

// OAuth authentication endpoint

const OAUTH_ENDPOINT = '/oauth/authorize';

// OAuth authentication endpoint - we use whole URL here as per https://develop.battle.net/documentation/guides/using-oauth

const OAUTH_ENDPOINT_CHINA = 'https://www.battlenet.com.cn/oauth/authorize';

// convert region id to region code

const getRegionCodeById = (regionId) => {
  if (API_REGIONS.includes(regionId)) {
    return API_REGIONS[regionId];
  }
  throw new Error(`${regionId} is not a valid region id. Visit https://develop.battle.net/documentation/guides/regionality-partitions-and-localization for more info.`);
};

// get available locales for given region Id

const getRegionLocalesById = (regionId) => { // eslint-disable-line
  const regionCode = getRegionCodeById(regionId);
  return API_LOCALES[regionCode];
};

// verifying if locale is available in given region

const checkLocaleAvailability = (regionId, locale) => {
  const availableLocales = getRegionLocalesById(regionId);

  if (availableLocales.includes(locale)) {
    return true;
  }
  return false;
};

// general method for building API URLs

const constructApiUrl = (regionId, endpoint, locale, useChinaGateway) => { // eslint-disable-line
  const isLocaleSupportedInRegion = checkLocaleAvailability(regionId, locale);

  if (isLocaleSupportedInRegion) {
    let apiUrl;
    const regionCode = getRegionCodeById(regionId);

    if (useChinaGateway) {
      apiUrl = `https://${API_SERVER_CHINA}${endpoint}?locale=${locale}`;
    } else {
      apiUrl = `https://${regionCode}${API_SERVER}${endpoint}?locale=${locale}`;
    }
    return apiUrl;
  }
  throw new Error(`Locale ${locale} is not supported for region id ${regionId}. Visit https://develop.battle.net/documentation/guides/regionality-partitions-and-localization for more info.`);
};

// main class

class BattleNetAPI {
  constructor(clientID, clientSecret, options) {
    this.clientID = clientID;
    this.clientSecret = clientSecret;
    this.options = options || {
      locale: 'en_US',
      useChinaGateway: false,
    };
  }

  async getAccessToken(regionId) {
    try {
      const apiUrl = constructApiUrl(regionId)
      //const data = await fetch(apiUrl);
      return data.json();
    } catch (error) {
      return error;
    }
  }

  // fetchAccessToken(clientID, clientSecret) {

  // }

  // validateAccessToken

  // query
}

module.exports = BattleNetAPI;
