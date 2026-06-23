# CurrencyCore SDK for TypeScript

Official client for the [CurrencyCore](https://currency-core.com) API — currency
conversion, FX rates, PPP, and analytics. Runs in Node.js, the browser, and
React Native (uses the global `fetch`).

Generated from the CurrencyCore OpenAPI 3.1 spec with
[OpenAPI Generator](https://openapi-generator.tech) (`typescript-fetch`), plus a
thin hand-written `createClient` helper for API-key and version handling.

## Install

```bash
npm install @currencycore/sdk
```

## Quickstart

```ts
import { createClient } from '@currencycore/sdk';

const api = createClient({ apiKey: 'cc_live_...' }); // or set CURRENCYCORE_API_KEY
const res = await api.convert({ from: 'USD', to: 'EUR', amount: 100 });
console.log(res.results[0]);
```

Public reference endpoints need no key:

```ts
const api = createClient();
const currencies = await api.currencies();
```

## Endpoints

All 14 endpoints are methods on the `api` client. `*` marks a required argument; the rest are optional. **Public** = no key; **Free** = any plan with a key; **Growth** = Growth plan or higher.

| Endpoint | Call | Plan |
| --- | --- | --- |
| Convert an amount (optional PPP) | `api.convert({ from*, to*, amount, ppp, date })` | Free |
| Rate snapshot for a date (USD base) | `api.rates({ date })` | Free |
| Rate snapshot in any base | `api.ratesByBase({ base*, date })` | Free |
| One currency's daily time series | `api.history({ currency*, from, to, base, interval })` | Growth |
| Trends, comparisons & movers | `api.historyAnalysis({ base, currencies, from, to, period, sort, assetClass, limit, interval, stats })` | Growth |
| PPP factor over time / movers | `api.pppAnalysis({ countries, from, to, period, sort, limit, stats })` | Growth |
| Volatility or stability ranking | `api.volatility({ currency, base, from, to, sort, universe, limit })` | Growth |
| Return correlation vs a base | `api.correlation({ currencies*, base, from, to })` | Growth |
| Max drawdown or ranking | `api.drawdown({ currency, base, from, to, sort, universe, limit })` | Growth |
| Safe-haven score ranking | `api.safeHaven({ currencies, base, from, to, limit })` | Growth |
| Mean-reversion ranking | `api.meanReversion({ currencies, base, from, to, limit })` | Growth |
| Supported countries + currencies | `api.countries()` | Public |
| Supported ISO 4217 currencies | `api.currencies()` | Public |
| Natural-language question | `api.ai({ q* })` | Free |

More calls:

```ts
await api.rates();                                    // latest snapshot (USD base)
await api.ratesByBase({ base: 'EUR' });               // same snapshot, EUR base
await api.history({ currency: 'INR', from: '2024-01-01' });
await api.volatility({ universe: 'majors', sort: 'volatile' }); // most-volatile majors
await api.ai({ q: 'How has the rupee moved this year?' });
```

## API key

`createClient` resolves the key as `options.apiKey` → `CURRENCYCORE_API_KEY`.
In the browser or React Native, pass it explicitly — **never ship a secret key
in a client bundle**. Proxy requests through your backend or use a short-lived
token.

## API version

The base URL is `https://api.currency-core.com/{version}` (default `v1`):

```ts
createClient({ version: 'v1' });
createClient({ baseUrl: 'https://api.currency-core.com/v1' }); // full override
```

## Low-level client

```ts
import { CurrencyCoreApi, Configuration } from '@currencycore/sdk';

const api = new CurrencyCoreApi(
  new Configuration({ basePath: 'https://api.currency-core.com/v1', accessToken: 'cc_live_...' }),
);
```

## Regenerate

The committed `openapi.json` is the source of truth. After updating it:

```bash
npm run generate && npm run build
```

Hand-written files (`package.json`, `src/index.ts`, `src/client.ts`, this README)
are protected by `.openapi-generator-ignore`.

## License

MIT
