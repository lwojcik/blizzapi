/**
 * List of all available OAuth token URIs
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import RegionIdProperties from '../interfaces/RegionIdProperties';
type OAuthTokenUri = string;

const oAuthTokenUris: RegionIdProperties<OAuthTokenUri> = {
  1: 'https://us.battle.net/oauth/token',
  2: 'https://eu.battle.net/oauth/token',
  3: 'https://apac.battle.net/oauth/token',
  5: 'https://www.battlenet.com.cn/oauth/token',
};

export default oAuthTokenUris;
