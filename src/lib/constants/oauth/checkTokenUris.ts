/**
 * List of all available OAuth check token URIs with a token query
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import { IRegionIdProperties } from '../../interfaces';
import { CheckTokenUri } from '../../types';

const oAuthCheckTokenUris: IRegionIdProperties<CheckTokenUri> = Object.freeze({
  1: 'https://us.battle.net/oauth/check_token?token=',
  2: 'https://eu.battle.net/oauth/check_token?token=',
  3: 'https://apac.battle.net/oauth/check_token?token=',
  5: 'https://www.battlenet.com.cn/oauth/check_token?token=',
});

export default oAuthCheckTokenUris;
