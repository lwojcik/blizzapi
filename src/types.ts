/** Common */

export type Uri = string;

/** Generic */

export enum ConstantKey {
  REGIONS = "REGIONS",
  LOCALES = "LOCALES",
  DEFAULT_LOCALES = "DEFAULT_LOCALES",
  REGION_API_HOSTS = "REGION_API_HOSTS",
  SC2_REALMS = "SC2_REALMS",
  OAUTH_AUTHORIZE_URIS = "OAUTH_AUTHORIZE_URIS",
  OAUTH_TOKEN_URIS = "OAUTH_TOKEN_URIS",
  OAUTH_CHECK_TOKEN_URIS = "OAUTH_CHECK_TOKEN_URIS",
}

/** Regions */

export enum RegionNameEnum {
  us = "us",
  eu = "eu",
  kr = "kr",
  tw = "tw",
  cn = "cn",
}

export enum RegionIdEnum {
  us = 1,
  eu = 2,
  kr = 3,
  tw = 3,
  cn = 5,
}

export enum RegionIdAsStringEnum {
  us = "1",
  eu = "2",
  kr = "3",
  tw = "3",
  cn = "5",
}

export type RegionId = 1 | 2 | 3 | 5;

export type RegionIdAsString = "1" | "2" | "3" | "5";

export type RegionName = "us" | "eu" | "kr" | "tw" | "cn";

export type RegionIdKey = string;
export type RegionIdAsNumberOrString = RegionId | RegionIdAsString;
export type RegionIdArray = ReadonlyArray<RegionId>;
export type RegionNameArray = ReadonlyArray<RegionName>;

/** Locales */

export enum Locale {
  en_US = "en_US",
  es_MX = "es_MX",
  pt_BR = "pt_BR",
  en_GB = "en_GB",
  es_ES = "es_ES",
  fr_FR = "fr_FR",
  ru_RU = "ru_RU",
  de_DE = "de_DE",
  pt_PT = "pt_PT",
  it_IT = "it_IT",
  ko_KR = "ko_KR",
  zh_TW = "zh_TW",
  zh_CN = "zh_CN",
}

export type LocaleArray = ReadonlyArray<Locale>;

/** Default locales */

export enum DefaultLocaleIndex {
  us = 0,
  eu = 0,
  kr = 0,
  tw = 0,
  cn = 0,
}

export type DefaultLocaleIndexArray = ReadonlyArray<DefaultLocaleIndex>;

/** StarCraft II realms  */

export enum Sc2Realm {
  US = 1,
  LatAm = 2,
  Europe = 1,
  Russia = 2,
  Korea = 1,
  Taiwan = 2,
  China = 1,
}

export enum Sc2RealmAsString {
  US = "1",
  LatAm = "2",
  Europe = "1",
  Russia = "2",
  Korea = "1",
  Taiwan = "2",
  China = "1",
}

export type Sc2RealmArray = ReadonlyArray<Sc2Realm>;
export type Sc2RealmList = ReadonlyArray<Sc2Realm>;
export type Sc2RealmAsNumberOrString = Sc2Realm | Sc2RealmAsString;

/** API class types */

export type RegionIdOrName = RegionId | RegionName;
export type MaybeRegion = RegionIdOrName | undefined;
export type ClientId = string;
export type ClientSecret = string;
export type Endpoint = string;

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
}

export type ValidatorFunction = (endpoint: Endpoint) => boolean;

export type AccessTokenObject = {
  access_token: string;
  token_type?: string;
  expires_in?: number;
  scope?: string;
};

export type AccessToken = AccessTokenObject["access_token"] | undefined;

/* OAuth flow URIs */

export enum OAuthHost {
  us = "https://us.battle.net",
  eu = "https://eu.battle.net",
  kr = "https://apac.battle.net",
  tw = "https://apac.battle.net",
  cn = "https://www.battlenet.com.cn",
}

export enum RegionHost {
  us = "https://us.api.blizzard.com",
  eu = "https://eu.api.blizzard.com",
  kr = "https://kr.api.blizzard.com",
  tw = "https://tw.api.blizzard.com",
  cn = "https://gateway.battlenet.com.cn",
}

export enum OAuthEndpoint {
  authorize = "/oauth/authorize",
  token = "/oauth/token",
  checkToken = "/oauth/check_token?token=",
}

/** API headers */

export enum ApiHeaders {
  LastModified = "last-modified",
}

/** Errors */

export enum ErrorCode {
  NotAuthorized = 401,
}

export enum ErrorResponseMessage {
  InvalidToken = "invalid_token",
  AccessTokenInvalid = "access_token_invalid",
  AccessTokenExpired = "access_token_invalid",
}

export type InvalidAccessTokenError = {
  error: ErrorResponseMessage.AccessTokenInvalid;
};

export type ExpiredAccessTokenError = {
  error: ErrorResponseMessage.AccessTokenExpired;
};

export type ResponseError = InvalidAccessTokenError | ExpiredAccessTokenError;

/** Interfaces */

export interface AccessTokenOptions {
  validateAccessTokenOnEachQuery?: boolean;
  refreshExpiredAccessToken?: boolean;
  onAccessTokenExpired?: () => void;
  onAccessTokenRefresh?: (newAccessToken: string) => void;
}

export interface QueryOptions {
  timeout?: number;
  region?: RegionIdOrName;
  headers?: object | Headers;
  params?: object | URLSearchParams;
}

export interface BattleNetOptions {
  region: RegionIdOrName;
  clientId?: ClientId;
  clientSecret?: ClientSecret;
  accessToken?: AccessToken;
}

export interface BattleNetQueryOptions {
  region: RegionIdOrName;
  clientId?: string;
  clientSecret?: string;
  accessToken?: AccessToken;
  endpoint: string;
  options: AccessTokenOptions & QueryOptions;
}

export type RegionIdProperties<Value> = {
  readonly [key in RegionId]: Value;
};

export interface BlizzAPIOptions extends BattleNetOptions, AccessTokenOptions {}
