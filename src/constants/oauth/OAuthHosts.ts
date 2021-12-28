/**
 * List of all available OAuth token URIs
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import { RegionIdProperties, RegionId, OAuthHost } from "../../types";

export const oAuthHosts: RegionIdProperties<OAuthHost> = Object.freeze({
  [RegionId.us]: OAuthHost.us,
  [RegionId.eu]: OAuthHost.eu,
  [RegionId.kr]: OAuthHost.kr,
  [RegionId.cn]: OAuthHost.cn,
});
