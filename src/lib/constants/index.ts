import regions from './regions';
import locales from './locales';
import defaultLocales from './defaultLocales';
import hosts from './hosts';
import sc2realms from './sc2realms';
import oAuthAuthorizeUris from './oAuthAuthorizeUris';
import oAuthTokenUris from './oAuthTokenUris';
import oAuthCheckTokenUris from './oAuthCheckTokenUris';

export default class CONSTANTS {
  public static readonly REGIONS = regions;
  public static readonly LOCALES = locales;
  public static readonly DEFAULT_LOCALES = defaultLocales;
  public static readonly HOSTS = hosts;
  public static readonly SC2_REALMS = sc2realms;
  public static readonly OAUTH_AUTHORIZE_URIS = oAuthAuthorizeUris;
  public static readonly OAUTH_TOKEN_URIS = oAuthTokenUris;
  public static readonly OAUTH_CHECK_TOKEN_URIS = oAuthCheckTokenUris;
}
