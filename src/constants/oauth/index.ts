import { oAuthHosts } from "./OAuthHosts";
import {
  RegionIdProperties,
  Uri,
  OAuthEndpoint,
  RegionIdEnum,
} from "../../types";

const getRegionPropertyArray = (endpoint: string): RegionIdProperties<Uri> =>
  Object.freeze({
    [RegionIdEnum.us]: `${oAuthHosts[RegionIdEnum.us]}${endpoint}`,
    [RegionIdEnum.eu]: `${oAuthHosts[RegionIdEnum.eu]}${endpoint}`,
    [RegionIdEnum.kr]: `${oAuthHosts[RegionIdEnum.kr]}${endpoint}`,
    [RegionIdEnum.cn]: `${oAuthHosts[RegionIdEnum.cn]}${endpoint}`,
  });

export const authorizeUris = getRegionPropertyArray(OAuthEndpoint.authorize);
export const tokenUris = getRegionPropertyArray(OAuthEndpoint.token);
export const checkTokenUris = getRegionPropertyArray(OAuthEndpoint.checkToken);
