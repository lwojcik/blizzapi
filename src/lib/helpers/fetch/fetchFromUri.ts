import { Uri, HttpMethod } from '../../types';
import { uri as validateUri } from '../validators';
import 'cross-fetch/polyfill';

/**
 * Performs basic fetch request from given uri
 * @function
 * @param {string} uri Fetch request uri
 * @param {string} method HTTP method to be used. Defaults to 'GET'
 * @param {Headers} headers HTTP request headers
 * @param {URLSearchParams} params HTTP request body parameters
 * @returns {object} Data returned by requested uri
 */
export default async (
  uri: Uri,
  method: HttpMethod = 'GET',
  headers?: Headers,
  params?: URLSearchParams,
) => {
  try {
    // tslint:disable-next-line no-if-statement
    if (!validateUri(uri)) {
      throw new RangeError(`'${uri}' is not a valid parameter for fetchFromUri()`);
    }
    const options = {
      method,
    };

    /* tslint:disable no-if-statement no-expression-statement */
    if (headers) Object.assign(options, { headers });

    // GET request method cannot have body, so I'm doing this
    if (method === 'POST') Object.assign(options, { body: params });
    /* tslint:enable no-if-statement */

    const response = await fetch(uri, options);

    switch (response.status) {
      case 200:
        const parsedResponse = await response.json();
        return parsedResponse;
      case 401:
        return {
          status: response.status,
          statusText: response.statusText,
          message: 'Client credentials wrong or missing (client id, client secret or access token)',
        };
      default:
        return {
          status: response.status,
          statusText: response.statusText,
        };
    }
  } catch (err) {
    throw err;
  }
};
