/**
 * List of all available OAuth token URIs
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import '../../interfaces';
import '../../types';

const oAuthTokenUris: Interfaces.IRegionIdProperties<Types.TokenUri> = {
  1: 'https://us.battle.net/oauth/token',
  2: 'https://eu.battle.net/oauth/token',
  3: 'https://apac.battle.net/oauth/token',
  5: 'https://www.battlenet.com.cn/oauth/token',
};

export default oAuthTokenUris;
