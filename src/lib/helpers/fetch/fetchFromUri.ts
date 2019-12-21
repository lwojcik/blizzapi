import axios from 'axios';
import { Uri, HttpMethod } from '../../../../@types';
import { uri as validateUri } from '../validators';

interface FetchFromUriOptions {
  uri: Uri,
  method?: HttpMethod;
  headers?: object | Headers;
  params?: object;
}

/**
 * Performs basic fetch request from a given uri
 */
export default async (options: FetchFromUriOptions) => {
  const uri = encodeURI(options.uri);
  const method = options.method || 'GET';
  try {
    if (!validateUri(uri)) {
      throw new RangeError(`'${uri}' is not a valid parameter for fetchFromUri()`);
    }
    const requestOptions = {
      method,
    };

    /* tslint:disable no-object-mutation */
    if (options.headers) Object.assign(requestOptions, { headers: options.headers });

    // GET request method cannot have body, so I'm doing this nonsense
    if (method === 'POST') Object.assign(requestOptions, { params: options.params });
    /* tslint:enable no-object-mutation */
    const response = await axios.get(uri, requestOptions);
    return response.data;
  } catch (error) {
    throw error;
  }
};
