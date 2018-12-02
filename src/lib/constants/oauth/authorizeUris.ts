/**
 * List of all available OAuth authorize uris
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import '../../interfaces';
import '../../types';


const oAuthAuthorizeUris: Interfaces.IRegionIdProperties<Types.AuthorizeUri> = {
  1: 'https://us.battle.net/oauth/authorize',
  2: 'https://eu.battle.net/oauth/authorize',
  3: 'https://apac.battle.net/oauth/authorize',
  5: 'https://www.battlenet.com.cn/oauth/authorize',
};

export default oAuthAuthorizeUris;
