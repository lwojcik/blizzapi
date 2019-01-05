import * as base64 from 'base-64';
import { fetchFromUri } from './fetch';

// construct checkTokenUri
// construct getTokenUri

export async function getAccessToken(oauthUri: string, clientId: string, clientSecret: string) {
  console.log(`getting access token for ${clientId}`);
  try {
    const accessTokenObject = await fetchAccessToken(oauthUri, clientId, clientSecret);
    const accessTokenReponse = await accessTokenObject.json();
    const accessToken = accessTokenReponse.access_token;
    console.log(accessToken);
    return accessToken;
  } catch (error) {
    throw error;
  }
}

export function fetchAccessToken(oauthUri: string, clientId: string, clientSecret: string) {
  console.log('fetchAccessToken');
  const headers = new Headers();
  headers.append('Authorization', `Basic ${base64.encode(`${clientId}:${clientSecret}`)}`);
  
  const data = { grant_type: 'client_credentials' };

  return fetchFromUri(oauthUri, 'POST', headers, data);
}

// getAccessToken
// validateAccessToken
// checkAccessToken