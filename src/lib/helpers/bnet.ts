import { RegionIdOrName, AccessToken } from '../types';
import { getApiHostByRegionIdOrRegionName } from '../utils/api/hosts';
import { fetchFromUri } from './fetch';

// construct checkTokenUri
// construct getTokenUri

export function queryEndpoint(region: RegionIdOrName, endpoint:string, accessToken:AccessToken) {
  const apiHost = getApiHostByRegionIdOrRegionName(region);
  const requestUri = `${apiHost}${endpoint}`;

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${accessToken}`);

  return fetchFromUri(requestUri, 'GET', headers);
}

// getAccessToken
// validateAccessToken
// checkAccessToken