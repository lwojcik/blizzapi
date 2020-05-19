<img src="https://raw.githubusercontent.com/lukemnet/blizzapi-docs/master/docs/.vuepress/public/logo.png" alt="BlizzAPI logo" width="200" height="200">

# BlizzAPI

[![Travis CI Build Status](https://travis-ci.org/lukemnet/blizzapi.svg?branch=master)](https://travis-ci.org/lukemnet/blizzapi)
[![Maintainability](https://api.codeclimate.com/v1/badges/8c2b8e4efe8441ad055f/maintainability)](https://codeclimate.com/github/lukemnet/blizzapi/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8c2b8e4efe8441ad055f/test_coverage)](https://codeclimate.com/github/lukemnet/blizzapi/test_coverage) 

Flexible feature-rich library for easy access to [Battle.net API](https://develop.battle.net/).

## Install

```bash
npm install blizzapi
```

## Quick start

```javascript
const BlizzAPI = require('blizzapi');

const api = new BlizzAPI({
  region: 'us',
  clientId: 'client id',
  clientSecret: 'client secret'
});

const data = await api.query('/path/to/endpoint');

console.log(data);
``` 

## Manual build

```bash
git clone https://github.com/lukemnet/blizzapi.git
cd blizzapi
npm install
npm run build
```

## Documentation & examples

* [blizzapi.lukem.net](https://blizzapi.lukem.net) - documentation
* [blizzapi-docs](https://github.com/lukemnet/blizzapi-docs) - documentation repo on GitHub

* [blizzapi-example](https://github.com/lukemnet/blizzapi-example) - sample Express.js REST API with usage examples

## License

Licensed under MIT License. See [LICENSE](https://github.com/lukemnet/blizzapi/blob/master/LICENSE) for more information.

## Legal

Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
