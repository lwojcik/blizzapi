import 'cross-fetch/polyfill';
import { Uri } from '../types';

/**
 * Validates uri via matching it against regex pattern
 * @function
 * @param {string} uri Fetch request uri starting with http(s) (e.g. https://example.com/api/endpoint)
 * @returns {Boolean} True for valid uri, false for incorrect one
 */
export function validateUri(uri:Uri) {
  // via https://www.regextester.com/94502
  const uriTestRegex = /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
  uriTestRegex.lastIndex = 0;
  return uriTestRegex.test(uri);
}

/**
 * Performs basic fetch request from given uri
 * @function
 * @param {string} uri Fetch request uri
 * @returns {object} Data returned by requested uri
 */
export function fetchFromUri(uri:Uri) {
  const isUriValid = validateUri(uri);

  if (!isUriValid) {
    throw new RangeError(`'${uri}' is not a valid parameter for fetchFromUri()`);
  }

  return fetch(uri);
}
