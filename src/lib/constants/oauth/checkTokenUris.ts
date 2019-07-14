/**
 * List of all available OAuth check token URIs with a token query
 * via https://develop.battle.net/documentation/guides/using-oauth
 */

import { RegionIdProperties } from '../../../../@interfaces';
import { Uri } from '../../../../@types';
import OAuthHosts from './OAuthHosts';

const endpoint = '/oauth/check_token?token=';

const checkTokenUris: RegionIdProperties<Uri> = {
  1: `${OAuthHosts[1]}${endpoint}`,
  2: `${OAuthHosts[2]}${endpoint}`,
  3: `${OAuthHosts[3]}${endpoint}`,
  5: `${OAuthHosts[5]}${endpoint}`,
};

export default Object.freeze(checkTokenUris);
