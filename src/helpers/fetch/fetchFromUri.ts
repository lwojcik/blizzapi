import axios, { AxiosBasicCredentials } from 'axios';
import { uri as validateUri } from '../validators';
import {
  Uri,
  HttpMethod,
  QueryOptions,
} from '../../types';

interface FetchFromUriOptions extends QueryOptions {
  uri: Uri;
  method?: HttpMethod;
  data?: string;
  auth?: AxiosBasicCredentials;
}

/**
 * Performs basic fetch request from a given uri
 */
export default async (options: FetchFromUriOptions) => {
  const {
    uri,
    timeout,
    headers,
    params,
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
      timeout: timeout || 10000,
      ...headers && { headers },
      ...params && { params },
      ...auth && { auth },
      ...data && { data },
    };

    const response = await axios.request(requestOptions);

    return {
      ...response.data,
      ...(response?.headers && 'last-modified' in response.headers) ?
          ({ lastModified: response.headers['last-modified'] }) : ({}),
    };
  } catch (error) {
    throw error;
  }
};
