import axios from 'axios';
import { HttpMethod } from '../../../../types';
import { uri as validateUri } from '../../validators';

interface FetchFromUriOptions {
  uri: string,
  method?: HttpMethod;
  headers?: object | Headers;
  params?: object;
}

/**
 * Performs basic fetch request from a given uri
 */
export default async (options: FetchFromUriOptions) => {
  const {
    uri,
    method,
    headers, 
    params,
  } = options;

  const encodedUri = encodeURI(uri);
  const fetchMethod = method || 'GET';
  try {
    if (!validateUri(encodedUri)) {
      throw new RangeError(`'${uri}' is not a valid parameter for fetchFromUri()`);
    }
    const requestOptions = {
      method,
    };

    /* tslint:disable no-object-mutation */
    if (headers) Object.assign(requestOptions, { headers });

    // GET request method cannot have body, so I'm doing this nonsense
    if (fetchMethod === 'POST') Object.assign(requestOptions, { params });
    /* tslint:enable no-object-mutation */
    const response = await axios.get(uri, requestOptions);
    return response.data;
  } catch (error) {
    throw error;
  }
};
