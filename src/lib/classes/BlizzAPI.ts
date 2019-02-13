import {
  RegionIdOrName,
  RegionIdAsNumberOrString,
  RegionName,
  Locale,
  Sc2RealmAsNumberOrString,
  ClientId,
  ClientSecret,
  Endpoint,
  Endpoints,
  AccessToken,
  Selector,
  EndpointsWithSelectors,
} from '../types';
import { QueryOptions } from '../interfaces';
import BattleNetAPI from './abstract/BattleNetAPI';
import * as bnetHelpers from '../helpers/bnet';
import * as bnetUtils from '../utils';

/* tslint:disable:no-class no-this no-expression-statement no-object-mutation readonly-keyword typedef */

export default class BlizzAPI extends BattleNetAPI {
  readonly options: QueryOptions;

  constructor(
    region: RegionIdOrName,
    clientId: ClientId,
    clientSecret: ClientSecret,
    accessToken?: AccessToken,
    options?: QueryOptions,
  ) {
    super(region, clientId, clientSecret, accessToken);
    this.options = (options as QueryOptions) || {
      batchQueryInterval: 1000, // interval between subsequent batch queries
      validateAccessToken: false, // whether access token should be validated
      onAccessTokenInvalid: null, // function to run when access token is invalid
      onAccessTokenRefresh: null, // function to run when access token is refreshed
    };
  }

  query = async (endpoint: Endpoint, options = this.options) =>
    bnetHelpers.query(this.region, endpoint, await this.getAccessToken(), options);

  querySearch = async (endpoint: Endpoint, selector: Selector, options = this.options) =>
    bnetHelpers.querySearch(this.region, endpoint, selector, await this.getAccessToken(), options);

  queryBatch = async (endpoints: Endpoints, options = this.options) =>
    bnetHelpers.queryBatch(this.region, endpoints, await this.getAccessToken(), options);

  querySearchBatch = async (
    endpointsWithSelectors: EndpointsWithSelectors,
    options = this.options,
  ) =>
    bnetHelpers.querySearchBatch(
      this.region,
      endpointsWithSelectors,
      await this.getAccessToken(),
      options,
    );

  /** Static utils */

  static getAllApiHosts = () => bnetUtils.getAllApiHosts();

  static getApiHostByRegion = (regionIdOrName: RegionIdOrName) =>
    bnetUtils.getApiHostByRegion(regionIdOrName);

  static getAllDefaultLocaleIndexes = () => bnetUtils.getAllDefaultLocaleIndexes();

  static getDefaultLocaleIndexForRegionId = (regionId: RegionIdAsNumberOrString) =>
    bnetUtils.getDefaultLocaleIndexForRegionId(regionId);

  static getDefaultLocaleNameForRegionId = (regionId: RegionIdAsNumberOrString) =>
    bnetUtils.getDefaultLocaleIndexForRegionId(regionId);

  static getAllDefaultLocaleNames = () => bnetUtils.getAllDefaultLocaleNames();

  static getAllLocales = () => bnetUtils.getAllLocales();

  static getAllLocaleNames = () => bnetUtils.getAllLocaleNames();

  static getLocalesByRegionId = (regionId: RegionIdAsNumberOrString) =>
    bnetUtils.getLocalesByRegionId(regionId);

  static checkIfLocaleLooksValid = (locale: Locale) => bnetUtils.checkIfLocaleLooksValid(locale);

  static validateLocale = (locale: Locale) => bnetUtils.validateLocale(locale);

  static isLocaleValidForRegionId = (locale: Locale, regionId: RegionIdAsNumberOrString) =>
    bnetUtils.isLocaleValidForRegionId(locale, regionId);

  static getAllRegions = () => bnetUtils.getAllRegions();

  static getAllRegionIds = () => bnetUtils.getAllRegionIds();

  static getAllRegionNames = () => bnetUtils.getAllRegionNames();

  static getRegionNameById = (regionId: RegionIdAsNumberOrString) =>
    bnetUtils.getRegionNameById(regionId);

  static validateRegionId = (regionId: RegionIdAsNumberOrString) =>
    bnetUtils.validateRegionId(regionId);

  static getRegionIdByName = (regionName: RegionName) => bnetUtils.getRegionIdByName(regionName);

  static validateRegionName = (regionName: RegionName) => bnetUtils.validateRegionName(regionName);

  static getAllSc2Realms = () => bnetUtils.getAllSc2Realms();

  static getAllAvailableSc2Realms = () => bnetUtils.getAllAvailableSc2Realms();

  static getSc2RealmsByRegionId = (regionId: RegionIdAsNumberOrString) =>
    bnetUtils.getSc2RealmsByRegionId(regionId);

  static checkIfSc2RealmLooksValid = (sc2Realm: Sc2RealmAsNumberOrString) =>
    bnetUtils.checkIfSc2RealmLooksValid(sc2Realm);

  static validateSc2Realm = (sc2Realm: Sc2RealmAsNumberOrString) =>
    bnetUtils.validateSc2Realm(sc2Realm);

  static isSc2RealmValidForRegionId = (
    sc2Realm: Sc2RealmAsNumberOrString,
    regionId: RegionIdAsNumberOrString,
  ) => bnetUtils.isSc2RealmValidForRegionId(sc2Realm, regionId);

  static getAllAuthorizeUris = () => bnetUtils.getAllAuthorizeUris();

  static getAuthorizeUriByRegion = (regionIdOrName: RegionIdOrName) =>
    bnetUtils.getAuthorizeUriByRegion(regionIdOrName);

  static getAllCheckTokenUris = () => bnetUtils.getAllCheckTokenUris();

  static getCheckTokenUriByRegion = (regionIdOrName: RegionIdOrName) =>
    bnetUtils.getCheckTokenUriByRegion(regionIdOrName);

  static getAllTokenUris = () => bnetUtils.getAllTokenUris();

  static getTokenUriByRegion = (regionIdOrName: RegionIdOrName) =>
    bnetUtils.getTokenUriByRegion(regionIdOrName);
}

/* tslint:disable:no-unnecessary-class no-this */
