/**
 * List of all available OAuth token URIs
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import { RegionIdProperties } from '../../../../@interfaces';
import { Uri } from '../../../../@types';
import OAuthHosts from './OAuthHosts';

const endpoint = '/oauth/token';

const tokenUris: RegionIdProperties<Uri> = {
  1: `${OAuthHosts}${endpoint}`,
  2: `${OAuthHosts}${endpoint}`,
  3: `${OAuthHosts}${endpoint}`,
  5: `${OAuthHosts}${endpoint}`,
};

export default Object.freeze(tokenUris);
