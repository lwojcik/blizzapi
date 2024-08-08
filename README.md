# BlizzAPI

> **This project is no longer maintained or updated. While Battle.net API has been reasonably stable within last few years and that means the library should theoretically continue working for a while, I am no longer able to provide any support or maintenance. In case of bugs or breaking changes, feel free to fork the repo and publish your own updated version.**

Flexible and feature-rich JavaScript / TypeScript library for easy access to Blizzard Battle.net APIs.

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
git clone https://github.com/lwojcik/blizzapi.git
cd blizzapi
npm install
npm run build
```

## Documentation

See [blizzapi-docs](https://github.com/lwojcik/blizzapi-docs) repo.

## Legal

This project is not authored, affiliated or endorsed in any way by Blizzard Entertainment.

Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
