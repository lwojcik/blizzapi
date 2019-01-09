import 'cross-fetch/polyfill';
import { Uri } from '../types';
import { validateUri } from './common';

/**
 * Performs basic fetch request from given uri
 * @function
 * @param {string} uri Fetch request uri
 * @param {string} method HTTP method to be used. Defaults to 'GET'
 * @param {Headers} headers HTTP request headers
 * @param {URLSearchParams} params HTTP request body parameters
 * @returns {object} Data returned by requested uri
 */
export async function fetchFromUri(uri:Uri, method = 'GET', headers?:Headers, params?:URLSearchParams) {
  try {
    const isUriValid = validateUri(uri);

    if (!isUriValid) {
      throw new RangeError(`'${uri}' is not a valid parameter for fetchFromUri()`);
    }

    const options = {
      method,
    };

    if (headers) {
      Object.assign(options, { headers });
    }

    // GET request method cannot have body, so I'm doing this
    if (method === 'POST') {
      Object.assign(options, { body: params });
    }
    const responseObject = await fetch(uri, options);
    const response = await responseObject.json();
    return response;
  } catch (err) {
    throw err;
  }
}
