import { oAuthHosts } from "./OAuthHosts";
import { RegionIdProperties, Uri } from "../../types";

const getRegionPropertyArray = (endpoint: string): RegionIdProperties<Uri> =>
  Object.freeze({
    1: `${oAuthHosts[1]}${endpoint}`,
    2: `${oAuthHosts[2]}${endpoint}`,
    3: `${oAuthHosts[3]}${endpoint}`,
    5: `${oAuthHosts[5]}${endpoint}`,
  });

const authorizeEndpoint = "/oauth/authorize";
const tokenEndpoint = "/oauth/token";
const checkTokenEndpoint = "/oauth/check_token?token=";

export const authorizeUris = getRegionPropertyArray(authorizeEndpoint);
export const tokenUris = getRegionPropertyArray(tokenEndpoint);
export const checkTokenUris = getRegionPropertyArray(checkTokenEndpoint);
