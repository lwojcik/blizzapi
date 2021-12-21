import axios, { AxiosBasicCredentials, AxiosRequestConfig } from "axios";
import { uri as validateUri } from "../validators";
import { Uri, HttpMethod, QueryOptions } from "../../types";

interface FetchFromUriOptions extends QueryOptions {
  uri: Uri;
  method?: HttpMethod;
  data?: string;
  auth?: AxiosBasicCredentials;
}

/**
 * Performs basic fetch request from a given uri
 */
export const fetchFromUri = async (options: FetchFromUriOptions) => {
  const { uri, timeout, headers, params, data, auth } = options;

  const method = options.method || "GET";

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
  };

  const response = await axios.request(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    requestOptions as AxiosRequestConfig<any>
  );

  const lastModified = response.headers["last-modified"]
    ? response.headers["last-modified"]
    : null;

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(response.data as any),
    ...(lastModified && { lastModified }),
  };
};
