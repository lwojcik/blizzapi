export interface AccessTokenOptions {
  validateAccessTokenOnEachQuery?: boolean;
  refreshAccessTokenIfExpired?: boolean;
  onAccessTokenExpire?: Function | undefined;
  onAccessTokenRefresh?: Function | undefined;
}