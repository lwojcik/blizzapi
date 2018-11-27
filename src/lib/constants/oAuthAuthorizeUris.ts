/**
 * List of all available OAuth authorize uris
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import Constant from '../interfaces/Constant';

type authorizeUri = string;

const oAuthAuthorizeUris: Constant<authorizeUri> = {
  1: 'https://us.battle.net/oauth/authorize',
  2: 'https://eu.battle.net/oauth/authorize',
  3: 'https://apac.battle.net/oauth/authorize',
  5: 'https://www.battlenet.com.cn/oauth/authorize',
};

export default oAuthAuthorizeUris;

