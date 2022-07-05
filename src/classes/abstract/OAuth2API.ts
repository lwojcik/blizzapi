import { ClientId, ClientSecret } from "../../types";

export abstract class OAuth2API {
  readonly clientId: ClientId | undefined;

  readonly clientSecret: ClientSecret | undefined;

  constructor(
    clientId: ClientId | undefined,
    clientSecret: ClientSecret | undefined
  ) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }
}
