import { Uri, ClientId, ClientSecret } from '../../types';
import fetchAccessToken from './fetchAccessToken';

export default async (oauthUri: Uri, clientId: ClientId, clientSecret: ClientSecret) => {
  const accessTokenObject = await fetchAccessToken(oauthUri, clientId, clientSecret);
  return <string>accessTokenObject.access_token;
};
