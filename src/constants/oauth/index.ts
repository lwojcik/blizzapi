import { oAuthHosts } from "./OAuthHosts";
import { RegionIdProperties, RegionId, Uri } from "../../types";

const getRegionPropertyArray = (endpoint: string): RegionIdProperties<Uri> =>
  Object.freeze({
    [RegionId.us]: `${oAuthHosts[RegionId.us]}${endpoint}`,
    [RegionId.eu]: `${oAuthHosts[RegionId.eu]}${endpoint}`,
    [RegionId.kr]: `${oAuthHosts[RegionId.kr]}${endpoint}`,
    [RegionId.cn]: `${oAuthHosts[RegionId.cn]}${endpoint}`,
  });

const authorizeEndpoint = "/oauth/authorize";
const tokenEndpoint = "/oauth/token";
const checkTokenEndpoint = "/oauth/check_token?token=";

export const authorizeUris = getRegionPropertyArray(authorizeEndpoint);
export const tokenUris = getRegionPropertyArray(tokenEndpoint);
export const checkTokenUris = getRegionPropertyArray(checkTokenEndpoint);
