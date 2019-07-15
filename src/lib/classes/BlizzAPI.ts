import * as helpers from '../helpers';
import * as utils from '../utils';
import { Endpoint, RegionIdOrName } from '../../../@types';
import BattleNetAPI = require('./abstract/BattleNetAPI');
export interface BlizzAPIOptions {
  validateAccessTokenOnEachQuery?: boolean;
  refreshExpiredAccessToken?: boolean;
  onAccessTokenExpire?: Function | undefined;
  onAccessTokenRefresh?: Function | undefined;
}

export interface BattleNetOptions extends BlizzAPIOptions {
  region: RegionIdOrName;
  clientId: string;
  clientSecret: string;
  accessToken?: string;
}

export default class BlizzAPI extends BattleNetAPI {
  readonly options: BlizzAPIOptions;

  constructor(options: BattleNetOptions) {
    super(options.region, options.clientId, options.clientSecret, options.accessToken);
    this.options = {
      validateAccessTokenOnEachQuery: options.validateAccessTokenOnEachQuery
        ? options.validateAccessTokenOnEachQuery
        : false, // revalidate access token on each single query
      refreshExpiredAccessToken: options.refreshExpiredAccessToken
        ? options.refreshExpiredAccessToken
        : false, // revalidate access token if error 403
      onAccessTokenRefresh: options.onAccessTokenRefresh ? options.onAccessTokenRefresh : undefined, // function to run when access token is refreshed
    };
  }

  query = async (endpoint: Endpoint) =>
    helpers.query(this.region, endpoint, await this.getAccessToken(), this.options);

  static getAllRegions = utils.getAllRegions;
  static getAllRegionIds = utils.getAllRegionIds;
  static getAllRegionNames = utils.getAllRegionNames;
  static getRegionNameById = utils.getRegionNameById;
  static validateRegionId = utils.validateRegionId;
  // static validateRegion = utils.validateRegion;
  static getRegionIdByName = utils.getRegionIdByName;
  static validateRegionName = utils.validateRegionName;
  static getAllLocales = utils.getAllLocales;
  static getAllLocaleNames = utils.getAllLocaleNames;
  static getLocalesByRegionId = utils.getLocalesByRegionId;
  // static getLocalesByRegion = utils.getLocalesByRegionI;
  static checkIfLocaleLooksValid = utils.checkIfLocaleLooksValid;
  static validateLocale = utils.validateLocale;
  static isLocaleValidForRegionId = utils.isLocaleValidForRegionId;
  // static isLocaleValidForRegion = utils.isLocaleValidForRegion;
  static getAllSc2Realms = utils.getAllSc2Realms;
  static getAllAvailableSc2Realms = utils.getAllAvailableSc2Realms;
  static getSc2RealmsByRegionId = utils.getSc2RealmsByRegionId;
  // static getSc2RealmsByRegion = utils.getSc2RealmsByRegion;
  static checkIfSc2RealmLooksValid = utils.checkIfSc2RealmLooksValid;
  static validateSc2Realm = utils.validateSc2Realm;
  static isSc2RealmValidForRegionId = utils.isSc2RealmValidForRegionId;
  // static isSc2RealmValidForRegion = utils.isSc2RealmValidForRegion;
  static getAllApiHosts = utils.getAllApiHosts;
  static getApiHostByRegion = utils.getApiHostByRegion;
}
