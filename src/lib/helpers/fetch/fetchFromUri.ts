import axios from 'axios';
import { Uri, HttpMethod } from '../../../../@types';
import { uri as validateUri } from '../validators';

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
  headers?: object | Headers,
  params?: URLSearchParams,
) => {
  try {
    if (!validateUri(uri)) {
      throw new RangeError(`'${uri}' is not a valid parameter for fetchFromUri()`);
    }
    const requestOptions = {
      method,
    };

    /* tslint:disable no-expression-statement no-object-mutation */
    if (headers) Object.assign(requestOptions, { headers });

    // GET request method cannot have body, so I'm doing this
    if (method === 'POST') Object.assign(requestOptions, { params });
    /* tslint:enable no-expression-statement no-object-mutation */
    const response = await axios.get(uri, requestOptions);
    return response.data;
  } catch (error) {
    throw error;
  }
};
