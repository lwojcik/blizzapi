import { fetchFromUri } from '../fetch';
import {
  Uri,
  ClientId,
  ClientSecret,
} from '../../types';

interface FetchAccessTokenOptions {
  oauthUri: Uri;
  clientId: ClientId;
  clientSecret: ClientSecret;
}

export const fetchAccessToken = (options: FetchAccessTokenOptions) => {
  const {
    oauthUri,
    clientId,
    clientSecret,
  } = options;

  const auth = {
    username: clientId,
    password: clientSecret,
  };

  const data = 'grant_type=client_credentials';

  return fetchFromUri({
    data,
    auth,
    uri: oauthUri,
    method: 'POST',
  });
};
