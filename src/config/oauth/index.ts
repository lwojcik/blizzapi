import oAuthHosts from './oAuthHosts/oAuthHosts';

const getRegionPropertyArray = (endpoint: string) => ({
  1: `${oAuthHosts[1]}${endpoint}`,
  2: `${oAuthHosts[2]}${endpoint}`,
  3: `${oAuthHosts[3]}${endpoint}`,
  5: `${oAuthHosts[5]}${endpoint}`,
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
};
