import * as base64 from 'base-64';
import { fetchFromUri } from '../fetch';
import { Uri, ClientId, ClientSecret } from '../../../../@types';

export default (oauthUri: Uri, clientId: ClientId, clientSecret: ClientSecret) => {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');

  const headers = {
    Authorization: `Basic ${base64.encode(`${clientId}:${clientSecret}`)}`
  };

  return fetchFromUri(oauthUri, 'POST', headers, params);
};
