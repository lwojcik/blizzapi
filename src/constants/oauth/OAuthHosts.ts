/**
 * List of all available OAuth token URIs
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import {
  RegionIdProperties,
  Uri,
} from '../../types';

export const oAuthHosts: RegionIdProperties<Uri> = Object.freeze({
  1: 'https://us.battle.net',
  2: 'https://eu.battle.net',
  3: 'https://apac.battle.net',
  5: 'https://www.battlenet.com.cn',
});
