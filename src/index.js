const fetch = require('cross-fetch');

const constants = require('./constants');
const helpers =require('./helpers');

const query = async (url) => {
  try {
    const data = await fetch(url);
    return data.json();
  } catch (error) {
    return error;
  }
};

// convert region id to region code

const getRegionCodeById = (regionId) => {
  if (API_REGIONS.includes(regionId)) {
    return API_REGIONS[regionId];
  }
  throw new Error(`${regionId} is not a valid region id.`);
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
  throw new Error(`Locale ${locale} is not supported for region id ${regionId}.`);
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

  getData(regionId, apiPath) {
    return 
  }

  // fetchAccessToken(clientID, clientSecret) {

  // }

  // validateAccessToken

  // query
}

module.exports = BattleNetAPI;
