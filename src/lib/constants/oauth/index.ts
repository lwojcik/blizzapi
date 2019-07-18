import { RegionIdProperties } from '../../../../@interfaces';
import { Uri } from '../../../../@types';
import OAuthHosts from './OAuthHosts';

const getRegionPropertyArray = (endpoint: string): RegionIdProperties<Uri> => ({
  1: `${OAuthHosts[1]}${endpoint}`,
  2: `${OAuthHosts[2]}${endpoint}`,
  3: `${OAuthHosts[3]}${endpoint}`,
  5: `${OAuthHosts[5]}${endpoint}`,
});

const authorizeEndpoint = '/oauth/authorize';
const tokenEndpoint = '/oauth/token';
const checkTokenEndpoint = '/oauth/check_token?token=';

const authorizeUris = getRegionPropertyArray(authorizeEndpoint);
const tokenUris = getRegionPropertyArray(tokenEndpoint);
const checkTokenUris = getRegionPropertyArray(checkTokenEndpoint);

export default {
  authorizeUris: Object.freeze(authorizeUris),
  tokenUris: Object.freeze(tokenUris),
  checkTokenUris: Object.freeze(checkTokenUris),
}
