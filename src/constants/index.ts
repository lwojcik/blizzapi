/**
 * Class exposing configuration constants
 *
 * Via:
 *
 * https://develop.battle.net/documentation/guides/using-oauth
 * https://develop.battle.net/documentation/guides/regionality-partitions-and-localization
 */

import {
  ConstantKey,
  DefaultLocaleIndex,
  LocaleArray,
  RegionIdProperties,
  RegionNameArray,
  Sc2RealmArray,
} from "../types";
import * as localization from "./localization";
import * as api from "./api";
import * as oauth from "./oauth";

export const constants = {
  [ConstantKey.REGIONS]:
    localization.regions as RegionIdProperties<RegionNameArray>,
  [ConstantKey.LOCALES]:
    localization.locales as RegionIdProperties<LocaleArray>,
  [ConstantKey.DEFAULT_LOCALES]:
    localization.defaultLocales as RegionIdProperties<DefaultLocaleIndex>,
  [ConstantKey.SC2_REALMS]:
    localization.sc2Realms as RegionIdProperties<Sc2RealmArray>,
  [ConstantKey.REGION_API_HOSTS]: api.regionHosts,
  [ConstantKey.OAUTH_AUTHORIZE_URIS]: oauth.authorizeUris,
  [ConstantKey.OAUTH_TOKEN_URIS]: oauth.tokenUris,
  [ConstantKey.OAUTH_CHECK_TOKEN_URIS]: oauth.checkTokenUris,
};
