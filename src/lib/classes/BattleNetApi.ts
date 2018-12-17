import { RegionIdOrName, ClientId, ClientSecret, AccessToken, Options } from '../types';

export default class BattleNetApi {
  public region: RegionIdOrName;
  public clientId: ClientId;
  public clientSecret: ClientSecret;
  public options: Options;
  accessToken: AccessToken;

  constructor(region: RegionIdOrName, clientId:ClientId, clientSecret:ClientSecret, options?: Options) {
    console.log('constructing BattleNetApi class object');
    this.region = region;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = '';
    this.options = options;
  }

  connect() {
    console.log('Bnet Api class connect');
    this.accessToken = this.fetchAccessToken(this.region, this.clientId, this.clientSecret);
  }

  private fetchAccessToken(region: RegionIdOrName, clientId:ClientId, clientSecret: ClientSecret): AccessToken {
    console.log(`getting access token for region ${region}, clientId ${clientId} and clientSecret ${clientSecret}`);
    return '123456789';
  }


}
