import { RegionIdOrName, AccessToken } from '../../types';
import { getCheckTokenUriByRegion } from '../../utils/oauth/checkTokenUris';
import { fetchFromUri } from '../../helpers/fetch';

export default async (regionIdOrName: RegionIdOrName, accessToken: AccessToken) => {
  const checkTokenUri = getCheckTokenUriByRegion(regionIdOrName);
  console.log(checkTokenUri);
  const requestPath = `${checkTokenUri}${accessToken}`;
  const response = await fetchFromUri(requestPath);
  return response;
};
