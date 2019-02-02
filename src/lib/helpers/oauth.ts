import * as base64 from 'base-64';
import { fetchFromUri } from './fetch';
import { Uri, ClientId, ClientSecret } from '../types';

export async function getAccessToken(oauthUri: Uri, clientId: ClientId, clientSecret: ClientSecret) {
  try {
    const accessTokenObject = await fetchAccessToken(oauthUri, clientId, clientSecret);
    const accessToken = <string>accessTokenObject.access_token;
    return accessToken;
  } catch (error) {
    throw error;
  }
}

export function fetchAccessToken(oauthUri: Uri, clientId: ClientId, clientSecret: ClientSecret) {
  const headers = new Headers();
  headers.append('Authorization', `Basic ${base64.encode(`${clientId}:${clientSecret}`)}`);

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');

  return fetchFromUri(oauthUri, 'POST', headers, params);
}

// validateAccessToken
