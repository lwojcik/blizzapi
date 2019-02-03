import 'cross-fetch/polyfill';
import { Uri, HttpMethod } from '../types';
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
export const fetchFromUri = async (
  uri: Uri,
  method: HttpMethod = 'GET',
  headers?: Headers,
  params?: URLSearchParams,
) => {
  try {
    const isUriValid = validateUri(uri);
    /* tslint:disable no-if-statement */
    if (!isUriValid) throw new RangeError(`'${uri}' is not a valid parameter for fetchFromUri()`);
    /* tslint:enable no-if-statement */
    const options = {
      method,
    };
    /* tslint:disable no-if-statement no-expression-statement */
    if (headers) Object.assign(options, { headers });

    // GET request method cannot have body, so I'm doing this
    if (method === 'POST') Object.assign(options, { body: params });
    /* tslint:enable no-if-statement */

    const responseObject = await fetch(uri, options);
    const response = await responseObject;
    /* tslint:disable no-if-statement */
    if (!response.ok) return response;
    /* tslint:enable no-if-statement */

    const parsedResponse = await response.json();
    return parsedResponse;
  } catch (err) {
    throw err;
  }
};
