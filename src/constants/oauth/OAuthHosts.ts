/**
 * List of all available OAuth token URIs
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import { RegionIdProperties, OAuthHost, RegionIdEnum } from "../../types";

export const oAuthHosts: RegionIdProperties<OAuthHost> = Object.freeze({
  [RegionIdEnum.us]: OAuthHost.us,
  [RegionIdEnum.eu]: OAuthHost.eu,
  [RegionIdEnum.kr]: OAuthHost.kr,
  [RegionIdEnum.cn]: OAuthHost.cn,
});
