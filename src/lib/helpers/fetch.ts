import 'cross-fetch/polyfill';
import { Uri } from '../types';
import { validateUri } from './common';

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
