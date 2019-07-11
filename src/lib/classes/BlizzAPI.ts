import { InitOptions } from '../../@interfaces';
import helpers from '../helpers';

export default class BlizzAPI {
  readonly options: InitOptions;

  constructor(options: InitOptions) {
    this.options = {
      region: options.region,
      validateAccessTokenOnEachQuery: options.validateAccessTokenOnEachQuery || false, // revalidate access token on each single query
      revalidateAccessTokenIfExpired: options.revalidateAccessTokenIfExpired || false, // revalidate access token if error 403
      onAccessTokenExpire: options.onAccessTokenExpire || undefined,
      onAccessTokenRevalidate: options.onAccessTokenRevalidate || undefined,
    }
  }

  query = async (endpoint: string) => helpers.query(endpoint);
}