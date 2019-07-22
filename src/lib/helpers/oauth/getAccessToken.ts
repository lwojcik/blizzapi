import { ClientId, ClientSecret, RegionIdOrName } from '../../../../@types';
import fetchAccessToken from './fetchAccessToken';
import { getTokenUriByRegion } from '../../utils';

interface GetAccessTokenOptions {
  region: RegionIdOrName,
  clientId: ClientId,
  clientSecret: ClientSecret,
}

export default async (options: GetAccessTokenOptions) => {
  const { region, clientId, clientSecret } = options;
  const oauthUri = getTokenUriByRegion(region);
  const accessTokenObject = await fetchAccessToken({ oauthUri, clientId, clientSecret });
  return <string>accessTokenObject.access_token;
};
