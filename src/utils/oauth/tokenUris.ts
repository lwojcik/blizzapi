import { constants } from "../../constants";
import { getConstantByRegion } from "../common";
import { RegionIdOrName, Uri, ConstantKey } from "../../types";

/**
 * Returns a list of all OAuth token uris
 *
 * @return List of all OAuth token uris indexed by region id as array of strings.
 */
export const getAllTokenUris = () => constants[ConstantKey.OAUTH_TOKEN_URIS];

/**
 * Returns OAuth token uri for given region id or region name
 *
 * @param regionIdOrName Region id or region name
 * @return OAuth token uri as a string
 */
export const getTokenUriByRegion = (regionIdOrName: RegionIdOrName): string =>
  <Uri>getConstantByRegion(regionIdOrName, ConstantKey.OAUTH_TOKEN_URIS);
