import { ClientId, ClientSecret, RegionIdOrName } from '../../../../@types';
import fetchAccessToken from './fetchAccessToken';
import { getTokenUriByRegion } from '../../utils';

export default async (region: RegionIdOrName, clientId: ClientId, clientSecret: ClientSecret) => {
  const oauthUri = getTokenUriByRegion(region);

  const accessTokenObject = await fetchAccessToken(oauthUri, clientId, clientSecret);
  return <string>accessTokenObject.access_token;
};
