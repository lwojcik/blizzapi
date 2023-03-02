import { getTokenUriByRegion } from "../../utils";
import { fetchFromUri } from "../fetch";
import {
  ClientId,
  ClientSecret,
  HttpMethod,
  AccessTokenObject,
  RegionIdOrName,
} from "../../types";

interface FetchAccessTokenOptions {
  region: RegionIdOrName;
  clientId?: ClientId;
  clientSecret?: ClientSecret;
}

export const getAccessTokenObject = (options: FetchAccessTokenOptions) => {
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

  const data = "grant_type=client_credentials";

  const auth = {
    username: clientId,
    password: clientSecret,
  };

  const uri = getTokenUriByRegion(region);

  return fetchFromUri<AccessTokenObject>({
    data,
    auth,
    uri,
    method: HttpMethod.POST,
  });
};
