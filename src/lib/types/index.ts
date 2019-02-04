import { EndpointWithSelector } from '../interfaces';

/** Common */
export type Uri = string;

/** Generic */

export type ConstantKey =
  | 'REGIONS'
  | 'LOCALES'
  | 'DEFAULT_LOCALES'
  | 'REGION_API_HOSTS'
  | 'SC2_REALMS'
  | 'OAUTH_AUTHORIZE_URIS'
  | 'OAUTH_TOKEN_URIS'
  | 'OAUTH_CHECK_TOKEN_URIS';

export type ConstantKeys = ReadonlyArray<ConstantKey>;

/** Regions */

export type RegionId = number;
export type RegionIdKey = string;
export type RegionIdAsNumberOrString = RegionId | RegionIdKey;
export type RegionIdArray = ReadonlyArray<RegionId>;
export type RegionName = string;
export type RegionNameArray = ReadonlyArray<RegionName>;

/** Locales */

export type Locale = string;
export type LocaleArray = ReadonlyArray<Locale>;

/** Default locales */
export type DefaultLocaleIndex = number;
export type DefaultLocaleIndexArray = ReadonlyArray<DefaultLocaleIndex>;

/** StarCraft II realms  */

export type Sc2Realm = number;
export type Sc2RealmArray = ReadonlyArray<Sc2Realm>;
export type Sc2RealmList = ReadonlyArray<Sc2Realm>;
export type Sc2RealmAsNumberOrString = Sc2Realm | string;

/** API class types */

export type RegionIdOrName = RegionId | RegionName;
export type MaybeRegion = RegionIdOrName | undefined;
export type ClientId = string;
export type ClientSecret = string;
export type AccessToken = string;
export type Options = Object | undefined;
export type Endpoint = string;
export type Endpoints = ReadonlyArray<Endpoint>;
export type HttpMethod = 'GET' | 'POST';
export type Selector = string;

export type EndpointsWithSelectors = ReadonlyArray<EndpointWithSelector>;
