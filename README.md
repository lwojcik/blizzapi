<img src="https://raw.githubusercontent.com/lukemnet/blizzapi-docs/master/docs/.vuepress/public/logo.png" alt="BlizzAPI logo" width="200" height="200">

# BlizzAPI

[![npm (latest)](https://img.shields.io/npm/v/blizzapi/latest.svg)](https://www.npmjs.com/package/blizzapi)
[![Travis CI Build Status](https://travis-ci.com/lukemnet/blizzapi.svg?branch=master)](https://travis-ci.com/lukemnet/blizzapi)
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

* [Repositories that depend on BlizzAPI](https://github.com/lukemnet/blizzapi/network/dependents)

## Contributions

Contributions of any kind are welcome.

You can contribute to BlizzAPI by:

* submiting a bug report or a feature suggestion
* improving documentation either within the project itself or in the [doc site repository](https://github.com/lukemnet/blizzapi-docs)
* submitting pull requests

Before contributing be sure to read [Contributing Guidelines](https://github.com/lukemnet/blizzapi/blob/master/CONTRIBUTING.md) and [Code of Conduct](https://github.com/lukemnet/blizzapi/blob/master/CODE_OF_CONDUCT.md).

## Contributors

To all who contribute code, improve documentation, submit issues or feature requests - thank you for making BlizzAPI even better!

We maintain an [AUTHORS](https://github.com/lukemnet/blizzapi/blob/master/AUTHORS) file where we keep a list of all project contributors. Please consider adding your name there with your next PR.

## License

Licensed under MIT License. See [LICENSE](https://github.com/lukemnet/blizzapi/blob/master/LICENSE) for more information.

## Legal

This project is not authored, affiliated or endorsed in any way by Blizzard Entertainment.

Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
