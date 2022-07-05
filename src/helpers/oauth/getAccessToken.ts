import { fetchAccessToken } from "./fetchAccessToken";
import { getTokenUriByRegion } from "../../utils";
import { ClientId, ClientSecret, RegionIdOrName } from "../../types";

interface GetAccessTokenOptions {
  region: RegionIdOrName;
  clientId?: ClientId;
  clientSecret?: ClientSecret;
}

export const getAccessToken = async (options: GetAccessTokenOptions) => {
  const { region, clientId, clientSecret } = options;

  if (!clientId) {
    throw new Error(
      "Cannot get access token because no Battle.net client id was provided"
    );
  }

  if (!clientSecret) {
    throw new Error(
      "Cannot get access token because no Battle.net client secret was provided"
    );
  }

  const oauthUri = getTokenUriByRegion(region);
  const accessTokenObject = await fetchAccessToken({
    oauthUri,
    clientId,
    clientSecret,
  });
  return <string>accessTokenObject.access_token;
};
