import * as base64 from 'base-64';
import { fetchFromUri } from '../fetch';
import { Uri, ClientId, ClientSecret } from '../../../../@types';

interface FetchAccessTokenOptions {
  oauthUri: Uri;
  clientId: ClientId;
  clientSecret: ClientSecret;
}

export default (options: FetchAccessTokenOptions) => {
  const { oauthUri, clientId, clientSecret } = options;
  const params = {
    grant_type: 'client_credentials',
  };

  const headers = {
    Authorization: `Basic ${base64.encode(`${clientId}:${clientSecret}`)}`,
  };

  return fetchFromUri({
    headers,
    params,
    uri: oauthUri,
    method: 'POST',
  });
};
