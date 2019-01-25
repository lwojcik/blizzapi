/**
 * List of all available OAuth token URIs
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import { RegionIdProperties } from '../../interfaces';
import { TokenUri } from '../../types';

const oAuthTokenUris: RegionIdProperties<TokenUri> = {
  1: 'https://us.battle.net/oauth/token',
  2: 'https://eu.battle.net/oauth/token',
  3: 'https://apac.battle.net/oauth/token',
  5: 'https://www.battlenet.com.cn/oauth/token',
};

export default Object.freeze(oAuthTokenUris);
