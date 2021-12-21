import { Uri } from "../../types";

/**
 * Validates uri via matching it against regex pattern
 * @function
 * @param {string} uri Fetch request uri starting with http(s)
 * (e.g. https://example.com/api/endpoint)
 * @returns {Boolean} True for valid uri, false for incorrect one
 */
export const uriValidator = (uri: Uri) => {
  // based on https://www.regextester.com/1965
  const uriTestRegex = /(?:http[s]?:\/\/)[^\s(["<,>]*\.[^\s[",><]*/gm;
  return uriTestRegex.test(uri);
};
