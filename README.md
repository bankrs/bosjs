# bosjs - a Bankrs OS JavaScript client

This is the official JavaScript client for accessing the Bankrs OS [API](https://bankrs.docs.apiary.io).

## Installation 
```sh
npm i @bankrs/bosjs
```

## Usage

### JavaScript
```javascript
import {config, newClient, DeveloperLoginRequest} from '@bankrs/bosjs';

const c = newClient({url: config.sandboxURL});

c.send(new DeveloperLoginRequest('developer@mail.com', 'devPa55'), data => {
  console.log('success', `token: ${data.token}`);
}, err => {
  console.error(err);
});
```

### TypeScript
```javascript
import {config, newClient, DeveloperLoginRequest} from '@bankrs/bosjs'

const c = newClient({url: config.sandboxURL})

c.send(new DeveloperLoginRequest('developer@mail.com', 'devPa55'), (data: any) => {
  console.log('success', `token: ${data.token}`)
}, (err: Error) => {
  console.error(err)
})
```

### Node.js
To use in Node.js project it required to install `node-fetch` package which implements `fetch()` function.

```sh
npm i node-fetch --save
```

```javascript
const fetch = require('node-fetch');
const api = require('@bankrs/bosjs');
const c = api.newClient({url: api.config.sandboxURL, httpClient: fetch});

c.send(new api.DeveloperLoginRequest('developer@mail.com', 'devPa55'), data => {
  console.log('success', `token: ${data.token}`);
}, err => {
  console.error(err);
});
```

## Test 
```sh
npm test
```
