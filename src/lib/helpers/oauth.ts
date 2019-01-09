import * as base64 from 'base-64';
import { fetchFromUri } from './fetch';

// construct checkTokenUri
// construct getTokenUri

export async function getAccessToken(oauthUri: string, clientId: string, clientSecret: string) {
  try {
    const accessTokenObject = await fetchAccessToken(oauthUri, clientId, clientSecret);
    const accessToken = accessTokenObject.access_token;
    return accessToken;
  } catch (error) {
    throw error;
  }
}

export function fetchAccessToken(oauthUri: string, clientId: string, clientSecret: string) {
  const headers = new Headers();
  headers.append('Authorization', `Basic ${base64.encode(`${clientId}:${clientSecret}`)}`);
  
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');

  return fetchFromUri(oauthUri, 'POST', headers, params);
}

// getAccessToken
// validateAccessToken
// checkAccessToken