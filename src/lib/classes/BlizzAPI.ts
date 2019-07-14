import helpers from '../helpers';
import { Endpoint, RegionIdOrName } from '../../@types';
export interface BlizzAPIOptions {
  region: RegionIdOrName;
  clientId?: string;
  clientSecret?: string;
  accessToken?: string;
  validateAccessTokenOnEachQuery?: boolean;
  refreshExpiredAccessToken?: boolean;
  onAccessTokenExpire?: Function | undefined;
  onAccessTokenRevalidate?: Function | undefined;
}
export default class BlizzAPI {
  readonly options: BlizzAPIOptions;

  constructor(options: BlizzAPIOptions) {
    this.options = {
      region: options.region,
      validateAccessTokenOnEachQuery: options.validateAccessTokenOnEachQuery || false, // revalidate access token on each single query
      refreshExpiredAccessToken: options.refreshExpiredAccessToken || false, // revalidate access token if error 403
      onAccessTokenExpire: options.onAccessTokenExpire || undefined,
      onAccessTokenRevalidate: options.onAccessTokenRevalidate || undefined,
    }
  }

  // getAccessToken

  query = (endpoint: Endpoint) => helpers.query(endpoint);

  // util functions
}