export interface BlizzAPIOptions {
  validateAccessTokenOnEachQuery?: boolean;
  refreshAccessTokenIfExpired?: boolean;
  onAccessTokenExpire?: Function | undefined;
  onAccessTokenRefresh?: Function | undefined;
}