/**
 * List of all available OAuth token URIs
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import Constant from '../interfaces/Constant';

type OAuthTokenUri = string;

const oAuthTokenUris: Constant<OAuthTokenUri> = {
  1: 'https://us.battle.net/oauth/token',
  2: 'https://eu.battle.net/oauth/token',
  3: 'https://apac.battle.net/oauth/token',
  5: 'https://www.battlenet.com.cn/oauth/token',
};

export default oAuthTokenUris;
