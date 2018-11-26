import regions from './regions';
import locales from './locales';
import defaultLocales from './defaultLocales';
// export * from './servers';
// export * from './regions';

// TODO: complete this

// interface CONSTANT<Value> {
//   [regionId: string]: Value;
// }

export default class CONSTANTS {
  public static readonly REGIONS = regions;
  public static readonly LOCALES = locales;
  public static readonly DEFAULT_LOCALES = defaultLocales;
  // public static readonly SERVERS = servers;
}


// interface CONSTANT<Value> {
//   [regionId: string]: Value;
// }

// export default class CONSTANTS {
//   public static readonly REGIONS: CONSTANT<string | string[]> = {
//     1: 'us',
//     2: 'eu',
//     3: ['kr', 'tw'],
//     5: 'cn',
//   };

//   public static readonly LOCALES: CONSTANT<string[]> = {
//     1: ['en_US', 'es_MX', 'pt_BR'],
//     2: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT'],
//     3: ['ko_KR', 'zh_TW'],
//     5: ['zh_CN'],
//   };

//   public static readonly DEFAULT_LOCALES: CONSTANT<number> = {
//     1: 0,
//     2: 0,
//     3: 0,
//     5: 0,
//   };

//   public static readonly SERVERS: CONSTANT<string> = {
//     1: 'https://us.api.blizzard.com',
//     2: 'https://eu.api.blizzard.com',
//     3: 'https://kr.api.blizzard.com',
//     5: 'https://api.blizzard.com.cn',
//   };

//   public static readonly SC2_REALMS: CONSTANT<number[]> = {
//     1: [1, 2],
//     2: [1, 2],
//     3: [1, 2],
//     5: [1],
//   };

//   public static readonly OAUTH_AUTHORIZE_SERVERS: CONSTANT<string> = {
//     1: 'https://us.battle.net/oauth/authorize',
//     2: 'https://eu.battle.net/oauth/authorize',
//     3: 'https://apac.battle.net/oauth/authorize',
//     5: 'https://www.battlenet.com.cn/oauth/authorize',
//   };

//   public static readonly OAUTH_TOKEN_URIS: CONSTANT<string> = {
//     1: 'https://us.battle.net/oauth/token',
//     2: 'https://eu.battle.net/oauth/token',
//     3: 'https://apac.battle.net/oauth/token',
//     5: 'https://www.battlenet.com.cn/oauth/token',
//   };

//   public static readonly OAUTH_CHECK_TOKEN_URIS: CONSTANT<string> = {
//     1: 'https://us.battle.net/oauth/check_token?token=',
//     2: 'https://eu.battle.net/oauth/check_token?token=',
//     3: 'https://apac.battle.net/oauth/check_token?token=',
//     5: 'https://www.battlenet.com.cn/oauth/check_token?token=',
//   };
// }
