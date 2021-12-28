import { constants } from "../../constants";
import { getConstantByRegion } from "../common";
import { RegionIdOrName, ConstantKey } from "../../types";

/**
 * Returns a list of all OAuth check token uris
 *
 * @return List of all OAuth check token uris indexed by region id as array of strings.
 */
export const getAllCheckTokenUris = () =>
  constants[ConstantKey.OAUTH_CHECK_TOKEN_URIS];

/**
 * Returns OAuth check token uri for given region id or region name
 *
 * @param regionIdOrName Region id or region name
 * @return OAuth check token uri as a string
 */
export const getCheckTokenUriByRegion = (regionIdOrName: RegionIdOrName) =>
  getConstantByRegion(regionIdOrName, ConstantKey.OAUTH_CHECK_TOKEN_URIS);
