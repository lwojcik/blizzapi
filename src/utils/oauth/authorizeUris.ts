import { constants } from "../../constants";
import { getConstantByRegion } from "../common";
import { RegionIdOrName, ConstantKey } from "../../types";

/**
 * Returns a list of all OAuth authorize uris
 *
 * @return List of all OAuth authorize uris indexed by region id as array of strings.
 */
export const getAllAuthorizeUris = () =>
  constants[ConstantKey.OAUTH_AUTHORIZE_URIS];

/**
 * Returns OAuth authorize uri for given region id or region name
 *
 * @param regionIdOrName Region id or region name
 * @return OAuth authorize uri as a string
 */
export const getAuthorizeUriByRegion = (regionIdOrName: RegionIdOrName) =>
  getConstantByRegion(regionIdOrName, ConstantKey.OAUTH_AUTHORIZE_URIS);
