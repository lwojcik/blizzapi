import * as helpers from '../helpers';
import * as utils from '../utils';
import BattleNetAPI from './abstract/BattleNetAPI';
import { Endpoint } from '../../../@types';
import { BattleNetOptions, AccessTokenOptions } from '../../../@interfaces';

interface BlizzAPIOptions extends BattleNetOptions, AccessTokenOptions {};

export default class BlizzAPI extends BattleNetAPI {
  readonly options: AccessTokenOptions;

  constructor(options: BlizzAPIOptions) {
    super({
      region: options.region,
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      accessToken: options.accessToken,
    });
    this.options = {
      validateAccessTokenOnEachQuery: options.validateAccessTokenOnEachQuery || false, 
      refreshExpiredAccessToken: options.refreshExpiredAccessToken || false,
      onAccessTokenExpired: options.onAccessTokenExpired || undefined,
      onAccessTokenRefresh: options.onAccessTokenRefresh || undefined,
    };
  }

  query = async (endpoint: Endpoint) =>
    helpers.query({
      endpoint,
      region: this.region,
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      accessToken: await this.getAccessToken(),
      options: {
        ...this.options,
      },
    });

  static getAllRegions = utils.getAllRegions;
  static getAllRegionIds = utils.getAllRegionIds;
  static getAllRegionNames = utils.getAllRegionNames;
  static getRegionNameById = utils.getRegionNameById;
  static validateRegionId = utils.validateRegionId;
  static getRegionIdByName = utils.getRegionIdByName;
  static validateRegionName = utils.validateRegionName;
  static getAllLocales = utils.getAllLocales;
  static getAllLocaleNames = utils.getAllLocaleNames;
  static getLocalesByRegionId = utils.getLocalesByRegionId;
  static checkIfLocaleLooksValid = utils.checkIfLocaleLooksValid;
  static validateLocale = utils.validateLocale;
  static isLocaleValidForRegionId = utils.isLocaleValidForRegionId;
  static getAllSc2Realms = utils.getAllSc2Realms;
  static getAllAvailableSc2Realms = utils.getAllAvailableSc2Realms;
  static getSc2RealmsByRegionId = utils.getSc2RealmsByRegionId;
  static checkIfSc2RealmLooksValid = utils.checkIfSc2RealmLooksValid;
  static validateSc2Realm = utils.validateSc2Realm;
  static isSc2RealmValidForRegionId = utils.isSc2RealmValidForRegionId;
}
