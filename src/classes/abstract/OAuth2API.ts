import {
  ClientId,
  ClientSecret,
} from '../../types';

export default class OAuth2API {
  readonly clientId: ClientId;

  readonly clientSecret: ClientSecret;

  constructor(clientId: ClientId, clientSecret: ClientSecret) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }
}
