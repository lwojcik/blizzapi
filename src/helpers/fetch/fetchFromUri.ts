import axios, { AxiosBasicCredentials } from 'axios';
import { uri as validateUri } from '../validators';
import {
  Uri,
  HttpMethod,
} from '../../types';

interface FetchFromUriOptions {
  uri: Uri;
  method?: HttpMethod;
  headers?: object | Headers;
  data?: string;
  auth?: AxiosBasicCredentials;
}

/**
 * Performs basic fetch request from a given uri
 */
export default async (options: FetchFromUriOptions) => {
  const {
    uri,
    headers,
    data,
    auth,
  } = options;

  const method = options.method || 'GET';

  try {
    if (!validateUri(uri)) {
      throw new RangeError(`'${uri}' is not a valid parameter for fetchFromUri()`);
    }

    const requestOptions = {
      method,
      url: encodeURI(uri),
      ...headers && { headers },
      ...auth && { auth },
      ...data && { data },
    };

    const response = await axios.request(requestOptions);
    return response.data;
  } catch (error) {
    throw error;
  }
};
