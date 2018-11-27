/**
 * List of all available OAuth check token URIs with a token query
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import Constant from '../interfaces/Constant';

type OAuthCheckTokenUri = string;

const oAuthCheckTokenUris: Constant<OAuthCheckTokenUri> = {
  1: 'https://us.battle.net/oauth/check_token?token=',
  2: 'https://eu.battle.net/oauth/check_token?token=',
  3: 'https://apac.battle.net/oauth/check_token?token=',
  5: 'https://www.battlenet.com.cn/oauth/check_token?token=',
};

export default oAuthCheckTokenUris;
