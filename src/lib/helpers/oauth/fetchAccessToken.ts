import * as base64 from 'base-64';
import { fetchFromUri } from '../fetch';
import { Uri, ClientId, ClientSecret } from '../../../../@types';

export default (oauthUri: Uri, clientId: ClientId, clientSecret: ClientSecret) => {
  // const headers = new Headers();
  const params = new URLSearchParams();

  const headers = {
    Authorization: `Basic ${base64.encode(`${clientId}:${clientSecret}`)}`
  };

  // /* tslint:disable no-expression-statement */
  // headers.append('Authorization', );
  params.append('grant_type', 'client_credentials');
  // /* tslint:enable no-expression-statement */

  return fetchFromUri(oauthUri, 'POST', headers, params);
};
