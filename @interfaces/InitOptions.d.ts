export default interface InitOptions {
  region: string | number;
  clientId?: string;
  clientSecret?: string;
  accessToken?: string;
  validateAccessTokenOnEachQuery?: boolean;
  revalidateAccessTokenIfExpired?: boolean;
  onAccessTokenExpire?: Function | undefined;
  onAccessTokenRevalidate?: Function | undefined;
}
