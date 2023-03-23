import axios, { AxiosBasicCredentials, AxiosRequestConfig } from "axios";
import { uri as validateUri } from "../validators";
import { Uri, HttpMethod, QueryOptions, ApiHeaders } from "../../types";

interface FetchFromUriOptions extends QueryOptions {
  uri: Uri;
  method?: HttpMethod;
  data?: string;
  auth?: AxiosBasicCredentials;
}

/**
 * Performs basic fetch request from a given uri
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchFromUri = async <T = any>(options: FetchFromUriOptions) => {
  const { uri, timeout, headers, params, data, auth } = options;

  const method = options.method || HttpMethod.GET;

  if (!validateUri(uri)) {
    throw new RangeError(
      `'${uri}' is not a valid parameter for fetchFromUri()`
    );
  }

  const requestOptions = {
    method,
    url: encodeURI(uri),
    timeout: timeout || 10000,
    ...(headers && { headers }),
    ...(params && { params }),
    ...(auth && { auth }),
    ...(data && { data }),
  } as AxiosRequestConfig;

  const response = await axios.request<T>(requestOptions);

  const lastModified = response.headers[ApiHeaders.LastModified]
    ? response.headers[ApiHeaders.LastModified]
    : null;

  return {
    ...response.data,
    ...(lastModified && { lastModified }),
  } as T;
};
