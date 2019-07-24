import { RegionIdOrName, AccessToken } from '../../../../@types';
import { getCheckTokenUriByRegion } from '../../utils/oauth/checkTokenUris';
import { fetchFromUri } from '../../helpers/fetch';

export default async (regionIdOrName: RegionIdOrName, accessToken: AccessToken) => {
  try {
    const checkTokenUri = getCheckTokenUriByRegion(regionIdOrName);
    const requestPath = `${checkTokenUri}${accessToken}`;
    const response = await fetchFromUri({ uri: requestPath });
    console.log(response);
    return !(response.error && response.error === 'invalid_token');
  } catch (error) {
    return false;
  }
};
