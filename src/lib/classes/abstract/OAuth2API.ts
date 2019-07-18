export default class OAuth2API {
  readonly clientId: string;
  readonly clientSecret: string;

  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }
}
