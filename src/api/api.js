// Via https://develop.battle.net/documentation/guides/regionality-partitions-and-localization

const constants = {
  REGIONS: {
    1: 'us',
    2: 'eu',
    3: 'kr',
    5: 'cn',
  },
  LOCALES: {
    1: [
      'en_US',
      'es_MX',
      'pt_BR',
    ],
    2: [
      'en_GB',
      'es_ES',
      'fr_FR',
      'ru_RU',
      'de_DE',
      'pt_PT',
      'it_IT',
    ],
    3: [
      'ko_KR',
      'zh_TW',
    ],
    5: [
      'zh_CN',
    ],
  },
  DEFAULT_LOCALES: {
    1: 0,
    2: 0,
    3: 0,
    5: 0,
  },
  SERVERS: {
    1: 'https://us.api.blizzard.com',
    2: 'https://eu.api.blizzard.com',
    3: 'https://kr.api.blizzard.com',
    5: 'https://api.blizzard.com.cn',
  },
  REALMS: {
    1: [1, 2],
    2: [1, 2],
    3: [1, 2],
    5: [1],
  },
  OAUTH_AUTHORIZE_SERVERS: {
    1: 'https://us.battle.net/oauth/authorize',
    2: 'https://eu.battle.net/oauth/authorize',
    3: 'https://apac.battle.net/oauth/authorize',
    5: 'https://www.battlenet.com.cn/oauth/authorize',
  },
  OAUTH_TOKEN_URIS: {
    1: 'https://us.battle.net/oauth/token',
    2: 'https://eu.battle.net/oauth/token',
    3: 'https://apac.battle.net/oauth/token',
    5: 'https://www.battlenet.com.cn/oauth/token',
  },
  OAUTH_CHECK_TOKEN_URIS: {
    1: 'https://us.battle.net/oauth/check_token?token=',
    2: 'https://eu.battle.net/oauth/check_token?token=',
    3: 'https://apac.battle.net/oauth/check_token?token=',
    5: 'https://www.battlenet.com.cn/oauth/check_token?token=',
  },
};

module.exports = constants;
