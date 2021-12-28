<img src="https://raw.githubusercontent.com/blizzapi/blizzapi-docs/master/docs/.vuepress/public/logo.png" alt="BlizzAPI logo" width="200" height="200">

# BlizzAPI

[![npm (latest)](https://img.shields.io/npm/v/blizzapi/latest.svg)](https://www.npmjs.com/package/blizzapi)
[![Build status](https://ci.appveyor.com/api/projects/status/r7pjg9an30d5dupk/branch/master?svg=true)](https://ci.appveyor.com/project/lwojcik/blizzapi/branch/master)
[![codecov](https://codecov.io/gh/blizzapi/blizzapi/branch/master/graph/badge.svg?token=M3vY98GiIn)](https://codecov.io/gh/blizzapi/blizzapi)

Flexible and feature-rich JavaScript / TypeScript library for easy access to [Blizzard Battle.net APIs](https://develop.battle.net/).

## Install

```bash
npm install blizzapi
```

## Quick start

```javascript
const { BlizzAPI } = require("blizzapi");

/**
 * Or using TypeScript:
 * import { BlizzAPI } from 'blizzapi';
 */

const api = new BlizzAPI({
  region: "us",
  clientId: "client id",
  clientSecret: "client secret",
});

const data = await api.query("/path/to/endpoint");

console.log(data);
```

## Manual build

```bash
git clone https://github.com/blizzapi/blizzapi.git
cd blizzapi
npm install
npm run build
```

## Documentation & examples

- [blizzapi.lukem.net](https://blizzapi.lukem.net) - documentation
- [blizzapi-docs](https://github.com/blizzapi/blizzapi-docs) - documentation repo on GitHub

- [blizzapi-example](https://github.com/blizzapi/blizzapi-example) - sample Express.js REST API with usage examples

- [Repositories that depend on BlizzAPI](https://github.com/blizzapi/blizzapi/network/dependents)

## Contributions

Contributions of any kind are welcome.

You can contribute to BlizzAPI by:

- submiting a bug report or a feature suggestion
- improving documentation either within the project itself or in the [doc site repository](https://github.com/blizzapi/blizzapi-docs)
- submitting pull requests

Before contributing be sure to read [Contributing Guidelines](https://github.com/blizzapi/blizzapi/blob/master/CONTRIBUTING.md) and [Code of Conduct](https://github.com/blizzapi/blizzapi/blob/master/CODE_OF_CONDUCT.md).

## Contributors

To all who contribute code, improve documentation, submit issues or feature requests - thank you for making BlizzAPI even better!

We maintain an [AUTHORS](https://github.com/blizzapi/blizzapi/blob/master/AUTHORS) file where we keep a list of all project contributors. Please consider adding your name there with your next PR.

## License

Licensed under MIT License. See [LICENSE](https://github.com/blizzapi/blizzapi/blob/master/LICENSE) for more information.

## Legal

This project is not authored, affiliated or endorsed in any way by Blizzard Entertainment.

Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
