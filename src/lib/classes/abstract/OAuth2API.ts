/* tslint:disable:no-class no-unnecessary-class no-this no-expression-statement */

export default abstract class OAuth2API {
  readonly clientId: string;
  readonly clientSecret: string;

  constructor(clientId: string, clientSecret: string) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  public abstract query(uri: string): object;
}

/* tslint:enable:no-class no-unnecessary-class no-this no-expression-statement */
