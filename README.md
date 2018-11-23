# bosjs - a Bankrs OS JavaScript client

This is the official JavaScript client for accessing the Bankrs OS [API](https://bankrs.docs.apiary.io).

## Installation 
```sh
npm i @bankrs/bosjs
```

## Usage

### JavaScript
```javascript
import * as bosjs from 'bosjs';
```

### TypeScript
```typescript
import bosjs from 'bosjs'
```

### Node.js
To use in Node.js project it required to install `node-fetch` package which implements `fetch()` function.

```sh
npm i node-fetch --save
```

```javascript
const fetch = require('node-fetch');
const bosjs = require('bosjs');
const api = bosjs.newClient({url: bosjs.sandboxURL, httpClient: fetch});
```

## Test 
```sh
npm test
```
