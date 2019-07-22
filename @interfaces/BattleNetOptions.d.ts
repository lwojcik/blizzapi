import { RegionIdOrName, ClientId, ClientSecret, AccessToken } from '../@types';

export interface BattleNetOptions {
  region: RegionIdOrName;
  clientId: ClientId;
  clientSecret: ClientSecret;
  accessToken?: AccessToken;
}
