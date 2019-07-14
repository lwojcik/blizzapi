/**
 * Class exposing configuration constants
 *
 * Via:
 *
 * https://develop.battle.net/documentation/guides/using-oauth
 * https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import * as localization from './localization';
import * as api from './api';
import * as oauth from './oauth';

const CONSTANTS = {
  REGIONS: localization.regions,
  LOCALES: localization.locales,
  DEFAULT_LOCALES: localization.defaultLocales,
  SC2_REALMS: localization.sc2Realms,
  REGION_API_HOSTS: api.regionHosts,
  OAUTH_AUTHORIZE_URIS: oauth.authorizeUris,
  OAUTH_TOKEN_URIS: oauth.tokenUris,
  OAUTH_CHECK_TOKEN_URIS: oauth.checkTokenUris,
};

export default CONSTANTS;
