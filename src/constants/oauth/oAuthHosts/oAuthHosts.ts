/**
 * List of all available OAuth token URIs
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import deepFreeze from '../../../utils/deepFreeze/deepFreeze';

const oAuthHosts = deepFreeze({
  1: 'https://us.battle.net',
  2: 'https://eu.battle.net',
  3: 'https://apac.battle.net',
  5: 'https://www.battlenet.com.cn',
});

export default oAuthHosts;
