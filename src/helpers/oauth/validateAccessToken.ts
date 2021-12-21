import { getCheckTokenUriByRegion } from "../../utils/oauth/checkTokenUris";
import { fetchFromUri } from "../fetch";
import { RegionIdOrName, AccessToken } from "../../types";

interface InvalidTokenResponse {
  error: "invalid_token";
}

export const validateAccessToken = async (
  regionIdOrName: RegionIdOrName,
  accessToken: AccessToken
) => {
  try {
    const checkTokenUri = getCheckTokenUriByRegion(regionIdOrName);
    const requestPath = `${checkTokenUri}${accessToken}`;
    const response = (await fetchFromUri({
      uri: requestPath,
    })) as any | InvalidTokenResponse; // eslint-disable-line @typescript-eslint/no-explicit-any
    return !(response.error && response.error === "invalid_token");
  } catch (error) {
    return false;
  }
};
