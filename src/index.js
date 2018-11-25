const helpers = require('./helpers/helpers');

// main class

class BattleNetAPI {
  constructor(clientID, clientSecret, options) {
    this.clientID = clientID;
    this.clientSecret = clientSecret;
    this.options = options || {
      locale: 'en_US',
      useChinaGateway: false,
    };
  }
}

const BattleNetHelpers = helpers;

module.exports = {
  BattleNetAPI,
  BattleNetHelpers,
};
