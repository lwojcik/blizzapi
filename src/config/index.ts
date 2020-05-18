/**
 * Class exposing configuration constants
 *
 * Via:
 *
 * https://develop.battle.net/documentation/guides/using-oauth
 * https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import * as localization from 'config/localization';
import * as api from 'config/api';
import oauth from 'config/oauth';
import { ConfigObject } from 'types';

const config = {
  REGIONS: localization.regions,
  LOCALES: localization.locales,
  DEFAULT_LOCALES: localization.defaultLocales,
  SC2_REALMS: localization.sc2Realms,
  REGION_API_HOSTS: api.regionHosts,
  OAUTH_AUTHORIZE_URIS: oauth.authorizeUris,
  OAUTH_TOKEN_URIS: oauth.tokenUris,
  OAUTH_CHECK_TOKEN_URIS: oauth.checkTokenUris,
} as ConfigObject;

export default config;
