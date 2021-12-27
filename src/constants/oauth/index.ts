import { oAuthHosts } from "./OAuthHosts";
import { RegionIdProperties, RegionId, Uri, OAuthEndpoint } from "../../types";

const getRegionPropertyArray = (endpoint: string): RegionIdProperties<Uri> =>
  Object.freeze({
    [RegionId.us]: `${oAuthHosts[RegionId.us]}${endpoint}`,
    [RegionId.eu]: `${oAuthHosts[RegionId.eu]}${endpoint}`,
    [RegionId.kr]: `${oAuthHosts[RegionId.kr]}${endpoint}`,
    [RegionId.cn]: `${oAuthHosts[RegionId.cn]}${endpoint}`,
  });

export const authorizeUris = getRegionPropertyArray(OAuthEndpoint.authorize);
export const tokenUris = getRegionPropertyArray(OAuthEndpoint.token);
export const checkTokenUris = getRegionPropertyArray(OAuthEndpoint.checkToken);
