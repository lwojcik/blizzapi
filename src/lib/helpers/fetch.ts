import 'cross-fetch/polyfill';
import { Uri } from '../types';
import { validateUri } from './common';

/**
 * Performs basic fetch request from given uri
 * @function
 * @param {string} uri Fetch request uri
 * @returns {object} Data returned by requested uri
 */
export async function fetchFromUri(uri:Uri, method = 'GET', headers?:Headers, data?:object) {
  console.log(`fetching from uri ${uri}`);
  try {
    const isUriValid = validateUri(uri);

    if (!isUriValid) {
      throw new RangeError(`'${uri}' is not a valid parameter for fetchFromUri()`);
    }

    const response = await fetch(uri, {
      headers,
      method,
      body: JSON.stringify(data),
    });
    console.log(response);
    return response;
  } catch (err) {
    throw err;
  }
}
