import { ClientId, ClientSecret } from '../@types';

export interface AccessTokenOptions {
  clientId: ClientId,
  clientSecret: ClientSecret,
  validateAccessTokenOnEachQuery?: boolean;
  refreshAccessTokenIfExpired?: boolean;
  onAccessTokenExpire?: Function | undefined;
  onAccessTokenRefresh?: Function | undefined;
}