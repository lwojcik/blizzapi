import { ClientId, ClientSecret } from '../@types';

export interface AccessTokenOptions {
  validateAccessTokenOnEachQuery?: boolean;
  refreshExpiredAccessToken?: boolean;
  onAccessTokenExpired?: Function | undefined;
  onAccessTokenRefresh?: Function | undefined;
}