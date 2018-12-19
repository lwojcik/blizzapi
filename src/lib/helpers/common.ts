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
