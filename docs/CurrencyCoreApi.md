# CurrencyCoreApi

All URIs are relative to *https://api.currency-core.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**ai**](CurrencyCoreApi.md#ai) | **GET** /ai | AI |
| [**convert**](CurrencyCoreApi.md#convert) | **GET** /convert | Convert |
| [**correlation**](CurrencyCoreApi.md#correlation) | **GET** /correlation | Correlation |
| [**countries**](CurrencyCoreApi.md#countries) | **GET** /countries | Countries |
| [**currencies**](CurrencyCoreApi.md#currencies) | **GET** /currencies | Currencies |
| [**drawdown**](CurrencyCoreApi.md#drawdown) | **GET** /drawdown | Drawdown |
| [**history**](CurrencyCoreApi.md#history) | **GET** /history | History |
| [**historyAnalysis**](CurrencyCoreApi.md#historyanalysis) | **GET** /history/analysis | History analysis |
| [**meanReversion**](CurrencyCoreApi.md#meanreversion) | **GET** /mean-reversion | Mean reversion |
| [**pppAnalysis**](CurrencyCoreApi.md#pppanalysis) | **GET** /ppp/analysis | PPP analysis |
| [**rates**](CurrencyCoreApi.md#rates) | **GET** /rates | Rates |
| [**ratesByBase**](CurrencyCoreApi.md#ratesbybase) | **GET** /rates/{base} | Rates by base |
| [**safeHaven**](CurrencyCoreApi.md#safehaven) | **GET** /safe-haven | Safe haven |
| [**volatility**](CurrencyCoreApi.md#volatility) | **GET** /volatility | Volatility |



## ai

> AiResponse ai(q)

AI

Ask a natural-language currency question; the model answers using live rates.

### Example

```ts
import {
  Configuration,
  CurrencyCoreApi,
} from '@currencycore/sdk';
import type { AiRequest } from '@currencycore/sdk';

async function example() {
  console.log("🚀 Testing @currencycore/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CurrencyCoreApi(config);

  const body = {
    // string | A natural-language question, e.g. \"Convert 50 euro to indian rupees\" or \"What\'s the USD to EUR rate today?\".
    q: Convert 50 euro to indian rupees,
  } satisfies AiRequest;

  try {
    const data = await api.ai(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **q** | `string` | A natural-language question, e.g. \&quot;Convert 50 euro to indian rupees\&quot; or \&quot;What\&#39;s the USD to EUR rate today?\&quot;. | [Defaults to `undefined`] |

### Return type

[**AiResponse**](AiResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **400** | Invalid or missing request parameters. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **429** | Rate limit or monthly quota exceeded. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## convert

> ConvertResponse convert(from, to, amount, ppp, date)

Convert

Convert an amount between currencies, optionally PPP-adjusted.

### Example

```ts
import {
  Configuration,
  CurrencyCoreApi,
} from '@currencycore/sdk';
import type { ConvertRequest } from '@currencycore/sdk';

async function example() {
  console.log("🚀 Testing @currencycore/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CurrencyCoreApi(config);

  const body = {
    // string | Source currency (ISO 4217), e.g. USD. For PPP (ppp=true) pair it with a country as CUR:COUNTRY, e.g. USD:USA.
    from: USD,
    // string | One or more target currencies, comma-separated, e.g. EUR,INR (max 25). For PPP use CUR:COUNTRY pairs, e.g. EUR:DEU,INR:IND.
    to: EUR,INR,
    // number | Amount to convert. Optional, defaults to 1 (so each result equals the rate). (optional)
    amount: 100,
    // boolean | When true, apply a PPP adjustment. Every currency must then carry a country code. (optional)
    ppp: false,
    // string | Rate date in YYYY-MM-DD (UTC). Must not be in the future. Defaults to latest. (optional)
    date: date_example,
  } satisfies ConvertRequest;

  try {
    const data = await api.convert(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **from** | `string` | Source currency (ISO 4217), e.g. USD. For PPP (ppp&#x3D;true) pair it with a country as CUR:COUNTRY, e.g. USD:USA. | [Defaults to `undefined`] |
| **to** | `string` | One or more target currencies, comma-separated, e.g. EUR,INR (max 25). For PPP use CUR:COUNTRY pairs, e.g. EUR:DEU,INR:IND. | [Defaults to `undefined`] |
| **amount** | `number` | Amount to convert. Optional, defaults to 1 (so each result equals the rate). | [Optional] [Defaults to `undefined`] |
| **ppp** | `boolean` | When true, apply a PPP adjustment. Every currency must then carry a country code. | [Optional] [Defaults to `undefined`] |
| **date** | `string` | Rate date in YYYY-MM-DD (UTC). Must not be in the future. Defaults to latest. | [Optional] [Defaults to `undefined`] |

### Return type

[**ConvertResponse**](ConvertResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **400** | Invalid or missing request parameters. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **429** | Rate limit or monthly quota exceeded. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## correlation

> CorrelationResponse correlation(currencies, base, from, to)

Correlation

Correlation of each currency\&#39;s daily returns with a base currency\&#39;s, over a window. Growth plan or higher.

### Example

```ts
import {
  Configuration,
  CurrencyCoreApi,
} from '@currencycore/sdk';
import type { CorrelationRequest } from '@currencycore/sdk';

async function example() {
  console.log("🚀 Testing @currencycore/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CurrencyCoreApi(config);

  const body = {
    // string | Comma-separated currencies to correlate with `base`, e.g. GBP,CHF,SEK.
    currencies: GBP,CHF,SEK,
    // string | Reference currency to correlate against (3-letter ISO 4217). Defaults to USD (a non-USD base is more meaningful). (optional)
    base: EUR,
    // string | Window start YYYY-MM-DD (UTC). Defaults to 365 days before `to`. (optional)
    from: from_example,
    // string | Window end YYYY-MM-DD (UTC). Defaults to today. (optional)
    to: to_example,
  } satisfies CorrelationRequest;

  try {
    const data = await api.correlation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **currencies** | `string` | Comma-separated currencies to correlate with &#x60;base&#x60;, e.g. GBP,CHF,SEK. | [Defaults to `undefined`] |
| **base** | `string` | Reference currency to correlate against (3-letter ISO 4217). Defaults to USD (a non-USD base is more meaningful). | [Optional] [Defaults to `undefined`] |
| **from** | `string` | Window start YYYY-MM-DD (UTC). Defaults to 365 days before &#x60;to&#x60;. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Window end YYYY-MM-DD (UTC). Defaults to today. | [Optional] [Defaults to `undefined`] |

### Return type

[**CorrelationResponse**](CorrelationResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **400** | Invalid or missing request parameters. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Requires the growth plan or higher. |  -  |
| **429** | Rate limit or monthly quota exceeded. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## countries

> Array&lt;CountriesResponseInner&gt; countries()

Countries

The supported countries and their official currencies. Public, no key needed.

### Example

```ts
import {
  Configuration,
  CurrencyCoreApi,
} from '@currencycore/sdk';
import type { CountriesRequest } from '@currencycore/sdk';

async function example() {
  console.log("🚀 Testing @currencycore/sdk SDK...");
  const api = new CurrencyCoreApi();

  try {
    const data = await api.countries();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;CountriesResponseInner&gt;**](CountriesResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **400** | Invalid or missing request parameters. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## currencies

> Array&lt;CurrenciesResponseInner&gt; currencies()

Currencies

The full list of supported ISO 4217 currencies. Use it to resolve a name or symbol to its code, or to check whether a currency is supported (so a missing one fails clearly, not silently). Public, no key needed.

### Example

```ts
import {
  Configuration,
  CurrencyCoreApi,
} from '@currencycore/sdk';
import type { CurrenciesRequest } from '@currencycore/sdk';

async function example() {
  console.log("🚀 Testing @currencycore/sdk SDK...");
  const api = new CurrencyCoreApi();

  try {
    const data = await api.currencies();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;CurrenciesResponseInner&gt;**](CurrenciesResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **400** | Invalid or missing request parameters. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## drawdown

> DrawdownResponse drawdown(currency, base, from, to, sort, universe, limit)

Drawdown

Maximum peak-to-trough decline vs a base (with peak/trough/recovery), or a drawdown ranking. Growth plan or higher.

### Example

```ts
import {
  Configuration,
  CurrencyCoreApi,
} from '@currencycore/sdk';
import type { DrawdownRequest } from '@currencycore/sdk';

async function example() {
  console.log("🚀 Testing @currencycore/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CurrencyCoreApi(config);

  const body = {
    // string | Currency to measure (3-letter ISO 4217), or a comma-separated list. OMIT to RANK the liquid set by drawdown. (optional)
    currency: EUR,
    // string | Base currency to measure against (3-letter ISO 4217). Defaults to USD. (optional)
    base: USD,
    // string | Window start YYYY-MM-DD (UTC). Defaults to 365 days before `to`. (optional)
    from: from_example,
    // string | Window end YYYY-MM-DD (UTC). Defaults to today. (optional)
    to: to_example,
    // string | Ranking direction: deepest (largest decline first, default) or recovery (fastest recovery first). (optional)
    sort: deepest,
    // string | Ranking universe: liquid (default) or majors. (optional)
    universe: liquid,
    // number | Ranking: how many to return (default 10, max 50). (optional)
    limit: 10,
  } satisfies DrawdownRequest;

  try {
    const data = await api.drawdown(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **currency** | `string` | Currency to measure (3-letter ISO 4217), or a comma-separated list. OMIT to RANK the liquid set by drawdown. | [Optional] [Defaults to `undefined`] |
| **base** | `string` | Base currency to measure against (3-letter ISO 4217). Defaults to USD. | [Optional] [Defaults to `undefined`] |
| **from** | `string` | Window start YYYY-MM-DD (UTC). Defaults to 365 days before &#x60;to&#x60;. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Window end YYYY-MM-DD (UTC). Defaults to today. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | Ranking direction: deepest (largest decline first, default) or recovery (fastest recovery first). | [Optional] [Defaults to `undefined`] |
| **universe** | `string` | Ranking universe: liquid (default) or majors. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Ranking: how many to return (default 10, max 50). | [Optional] [Defaults to `undefined`] |

### Return type

[**DrawdownResponse**](DrawdownResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **400** | Invalid or missing request parameters. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Requires the growth plan or higher. |  -  |
| **429** | Rate limit or monthly quota exceeded. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## history

> HistoryResponse history(currency, from, to, base, interval)

History

A single currency\&#39;s daily rate time series over a date range. Growth plan or higher.

### Example

```ts
import {
  Configuration,
  CurrencyCoreApi,
} from '@currencycore/sdk';
import type { HistoryRequest } from '@currencycore/sdk';

async function example() {
  console.log("🚀 Testing @currencycore/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CurrencyCoreApi(config);

  const body = {
    // string | The currency whose history to fetch (3-letter ISO 4217), e.g. INR. One currency per call.
    currency: INR,
    // string | Start date YYYY-MM-DD (UTC). Defaults to 7 days before `to`. (optional)
    from: from_example,
    // string | End date YYYY-MM-DD (UTC). Defaults to today; a future date clamps to today. (optional)
    to: to_example,
    // string | Base currency the rates are expressed against (3-letter ISO 4217). Defaults to USD. (optional)
    base: USD,
    // string | Aggregation: daily (default), weekly, monthly, or yearly. Coarser intervals average the daily rates per bucket (weekly key = the week\'s Monday, monthly = YYYY-MM, yearly = YYYY). (optional)
    interval: daily,
  } satisfies HistoryRequest;

  try {
    const data = await api.history(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **currency** | `string` | The currency whose history to fetch (3-letter ISO 4217), e.g. INR. One currency per call. | [Defaults to `undefined`] |
| **from** | `string` | Start date YYYY-MM-DD (UTC). Defaults to 7 days before &#x60;to&#x60;. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | End date YYYY-MM-DD (UTC). Defaults to today; a future date clamps to today. | [Optional] [Defaults to `undefined`] |
| **base** | `string` | Base currency the rates are expressed against (3-letter ISO 4217). Defaults to USD. | [Optional] [Defaults to `undefined`] |
| **interval** | `string` | Aggregation: daily (default), weekly, monthly, or yearly. Coarser intervals average the daily rates per bucket (weekly key &#x3D; the week\&#39;s Monday, monthly &#x3D; YYYY-MM, yearly &#x3D; YYYY). | [Optional] [Defaults to `undefined`] |

### Return type

[**HistoryResponse**](HistoryResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **400** | Invalid or missing request parameters. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Requires the growth plan or higher. |  -  |
| **429** | Rate limit or monthly quota exceeded. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## historyAnalysis

> HistoryAnalysisResponse historyAnalysis(base, currencies, from, to, period, sort, assetClass, limit, interval, stats)

History analysis

Trends, comparisons &amp; \&#39;movers\&#39;: % change, strength, and min/max/avg over a window. Growth plan or higher.

### Example

```ts
import {
  Configuration,
  CurrencyCoreApi,
} from '@currencycore/sdk';
import type { HistoryAnalysisRequest } from '@currencycore/sdk';

async function example() {
  console.log("🚀 Testing @currencycore/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CurrencyCoreApi(config);

  const body = {
    // string | Currency everything is measured against (3-letter ISO 4217). Defaults to USD. (optional)
    base: USD,
    // string | Comma-separated currencies to compare, e.g. GBP,EUR,AED. OMIT to rank ALL currencies vs base (\'movers\' mode). (optional)
    currencies: GBP,EUR,AED,
    // string | Window start YYYY-MM-DD (UTC). Defaults to 20 years (2 decades) before `to`. See `period` for a shorthand. (optional)
    from: from_example,
    // string | Window end YYYY-MM-DD (UTC). Defaults to today; a future date clamps to today. (optional)
    to: to_example,
    // string | Relative window shorthand for `from`: e.g. 10y, 6m, 30d, ytd, max. Ignored if `from` is given. (optional)
    period: 10y,
    // string | Movers ranking: strengthened (default) or weakened. (optional)
    sort: strengthened,
    // string | Movers universe: fiat (default, the liquid tradeable currencies), metals (XAU/XAG/XPT/XPD), or all (every currency incl. illiquid/frontier). fiat excludes metals/synthetics + illiquid frontier codes; redenomination artifacts are always dropped. (optional)
    assetClass: fiat,
    // number | Movers: how many top results to return (default 10, max 200). (optional)
    limit: 10,
    // string | Attach a trend series per named currency: weekly, monthly, or yearly (compare mode only). (optional)
    interval: yearly,
    // boolean | Include min/max/avg over the window per currency. Defaults to true; pass false to skip. (optional)
    stats: true,
  } satisfies HistoryAnalysisRequest;

  try {
    const data = await api.historyAnalysis(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **base** | `string` | Currency everything is measured against (3-letter ISO 4217). Defaults to USD. | [Optional] [Defaults to `undefined`] |
| **currencies** | `string` | Comma-separated currencies to compare, e.g. GBP,EUR,AED. OMIT to rank ALL currencies vs base (\&#39;movers\&#39; mode). | [Optional] [Defaults to `undefined`] |
| **from** | `string` | Window start YYYY-MM-DD (UTC). Defaults to 20 years (2 decades) before &#x60;to&#x60;. See &#x60;period&#x60; for a shorthand. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Window end YYYY-MM-DD (UTC). Defaults to today; a future date clamps to today. | [Optional] [Defaults to `undefined`] |
| **period** | `string` | Relative window shorthand for &#x60;from&#x60;: e.g. 10y, 6m, 30d, ytd, max. Ignored if &#x60;from&#x60; is given. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | Movers ranking: strengthened (default) or weakened. | [Optional] [Defaults to `undefined`] |
| **assetClass** | `string` | Movers universe: fiat (default, the liquid tradeable currencies), metals (XAU/XAG/XPT/XPD), or all (every currency incl. illiquid/frontier). fiat excludes metals/synthetics + illiquid frontier codes; redenomination artifacts are always dropped. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Movers: how many top results to return (default 10, max 200). | [Optional] [Defaults to `undefined`] |
| **interval** | `string` | Attach a trend series per named currency: weekly, monthly, or yearly (compare mode only). | [Optional] [Defaults to `undefined`] |
| **stats** | `boolean` | Include min/max/avg over the window per currency. Defaults to true; pass false to skip. | [Optional] [Defaults to `undefined`] |

### Return type

[**HistoryAnalysisResponse**](HistoryAnalysisResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **400** | Invalid or missing request parameters. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Requires the growth plan or higher. |  -  |
| **429** | Rate limit or monthly quota exceeded. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## meanReversion

> MeanReversionResponse meanReversion(currencies, base, from, to, limit)

Mean reversion

Ranks currencies by how strongly they revert to their mean (crossing frequency + reversion half-life). Growth plan or higher.

### Example

```ts
import {
  Configuration,
  CurrencyCoreApi,
} from '@currencycore/sdk';
import type { MeanReversionRequest } from '@currencycore/sdk';

async function example() {
  console.log("🚀 Testing @currencycore/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CurrencyCoreApi(config);

  const body = {
    // string | Comma-separated currencies to score, e.g. EUR,GBP. OMIT to rank the liquid set. (optional)
    currencies: EUR,GBP,
    // string | Base currency to measure against (3-letter ISO 4217). Defaults to USD. (optional)
    base: USD,
    // string | Window start YYYY-MM-DD (UTC). Defaults to ~2 years before `to`. (optional)
    from: from_example,
    // string | Window end YYYY-MM-DD (UTC). Defaults to today. (optional)
    to: to_example,
    // number | How many to return (default 10, max 50). (optional)
    limit: 10,
  } satisfies MeanReversionRequest;

  try {
    const data = await api.meanReversion(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **currencies** | `string` | Comma-separated currencies to score, e.g. EUR,GBP. OMIT to rank the liquid set. | [Optional] [Defaults to `undefined`] |
| **base** | `string` | Base currency to measure against (3-letter ISO 4217). Defaults to USD. | [Optional] [Defaults to `undefined`] |
| **from** | `string` | Window start YYYY-MM-DD (UTC). Defaults to ~2 years before &#x60;to&#x60;. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Window end YYYY-MM-DD (UTC). Defaults to today. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | How many to return (default 10, max 50). | [Optional] [Defaults to `undefined`] |

### Return type

[**MeanReversionResponse**](MeanReversionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **400** | Invalid or missing request parameters. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Requires the growth plan or higher. |  -  |
| **429** | Rate limit or monthly quota exceeded. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pppAnalysis

> PppAnalysisResponse pppAnalysis(countries, from, to, period, sort, limit, stats)

PPP analysis

PPP over time: how a country\&#39;s purchasing-power-parity factor changed, comparing countries, or \&#39;movers\&#39;. Growth plan or higher.

### Example

```ts
import {
  Configuration,
  CurrencyCoreApi,
} from '@currencycore/sdk';
import type { PppAnalysisRequest } from '@currencycore/sdk';

async function example() {
  console.log("🚀 Testing @currencycore/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CurrencyCoreApi(config);

  const body = {
    // string | Comma-separated ISO 3166-1 alpha-3 country codes to compare, e.g. IND,DEU,USA. OMIT to rank ALL countries by PPP-factor change (\'movers\' mode). (optional)
    countries: IND,DEU,USA,
    // string | Window start YEAR (e.g. 2015). Defaults to 10 years before `to`. See `period` for a shorthand. (optional)
    from: from_example,
    // string | Window end YEAR (e.g. 2024). Defaults to the current year. (optional)
    to: to_example,
    // string | Relative window shorthand for `from`: e.g. 10y, 20y, max. Ignored if `from` is given. (optional)
    period: 10y,
    // string | Movers ranking: increased (PPP factor rose most, default) or decreased. (optional)
    sort: increased,
    // number | Movers: how many top results to return (default 10, max 200). (optional)
    limit: 10,
    // boolean | Include min/max/avg of the PPP factor over the window per country. Defaults to true; pass false to skip. (optional)
    stats: true,
  } satisfies PppAnalysisRequest;

  try {
    const data = await api.pppAnalysis(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **countries** | `string` | Comma-separated ISO 3166-1 alpha-3 country codes to compare, e.g. IND,DEU,USA. OMIT to rank ALL countries by PPP-factor change (\&#39;movers\&#39; mode). | [Optional] [Defaults to `undefined`] |
| **from** | `string` | Window start YEAR (e.g. 2015). Defaults to 10 years before &#x60;to&#x60;. See &#x60;period&#x60; for a shorthand. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Window end YEAR (e.g. 2024). Defaults to the current year. | [Optional] [Defaults to `undefined`] |
| **period** | `string` | Relative window shorthand for &#x60;from&#x60;: e.g. 10y, 20y, max. Ignored if &#x60;from&#x60; is given. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | Movers ranking: increased (PPP factor rose most, default) or decreased. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Movers: how many top results to return (default 10, max 200). | [Optional] [Defaults to `undefined`] |
| **stats** | `boolean` | Include min/max/avg of the PPP factor over the window per country. Defaults to true; pass false to skip. | [Optional] [Defaults to `undefined`] |

### Return type

[**PppAnalysisResponse**](PppAnalysisResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **400** | Invalid or missing request parameters. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Requires the growth plan or higher. |  -  |
| **429** | Rate limit or monthly quota exceeded. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## rates

> RatesResponse rates(date)

Rates

The full exchange-rate snapshot for a date (USD base).

### Example

```ts
import {
  Configuration,
  CurrencyCoreApi,
} from '@currencycore/sdk';
import type { RatesRequest } from '@currencycore/sdk';

async function example() {
  console.log("🚀 Testing @currencycore/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CurrencyCoreApi(config);

  const body = {
    // string | YYYY-MM-DD. Defaults to the latest available date. (optional)
    date: date_example,
  } satisfies RatesRequest;

  try {
    const data = await api.rates(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **date** | `string` | YYYY-MM-DD. Defaults to the latest available date. | [Optional] [Defaults to `undefined`] |

### Return type

[**RatesResponse**](RatesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **400** | Invalid or missing request parameters. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **429** | Rate limit or monthly quota exceeded. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## ratesByBase

> RatesByBaseResponse ratesByBase(base, date)

Rates by base

The same snapshot re-expressed against any base currency.

### Example

```ts
import {
  Configuration,
  CurrencyCoreApi,
} from '@currencycore/sdk';
import type { RatesByBaseRequest } from '@currencycore/sdk';

async function example() {
  console.log("🚀 Testing @currencycore/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CurrencyCoreApi(config);

  const body = {
    // string | Base currency (3-letter ISO 4217), e.g. EUR.
    base: EUR,
    // string | YYYY-MM-DD. Defaults to the latest available date. (optional)
    date: date_example,
  } satisfies RatesByBaseRequest;

  try {
    const data = await api.ratesByBase(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **base** | `string` | Base currency (3-letter ISO 4217), e.g. EUR. | [Defaults to `undefined`] |
| **date** | `string` | YYYY-MM-DD. Defaults to the latest available date. | [Optional] [Defaults to `undefined`] |

### Return type

[**RatesByBaseResponse**](RatesByBaseResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **400** | Invalid or missing request parameters. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **429** | Rate limit or monthly quota exceeded. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## safeHaven

> SafeHavenResponse safeHaven(currencies, base, from, to, limit)

Safe haven

Ranks currencies by a composite safe-haven score (low volatility + shallow drawdown + 2008-crisis resilience). Growth plan or higher.

### Example

```ts
import {
  Configuration,
  CurrencyCoreApi,
} from '@currencycore/sdk';
import type { SafeHavenRequest } from '@currencycore/sdk';

async function example() {
  console.log("🚀 Testing @currencycore/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CurrencyCoreApi(config);

  const body = {
    // string | Comma-separated currencies to score, e.g. CHF,JPY. OMIT to rank the safe-haven pool (includes gold). (optional)
    currencies: CHF,JPY,
    // string | Base currency to measure against (3-letter ISO 4217). Defaults to USD. (optional)
    base: USD,
    // string | Window start YYYY-MM-DD (UTC). Defaults to 2007-01-01 (spans the 2008 crisis + COVID). (optional)
    from: from_example,
    // string | Window end YYYY-MM-DD (UTC). Defaults to today. (optional)
    to: to_example,
    // number | How many to return (default 10, max 50). (optional)
    limit: 10,
  } satisfies SafeHavenRequest;

  try {
    const data = await api.safeHaven(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **currencies** | `string` | Comma-separated currencies to score, e.g. CHF,JPY. OMIT to rank the safe-haven pool (includes gold). | [Optional] [Defaults to `undefined`] |
| **base** | `string` | Base currency to measure against (3-letter ISO 4217). Defaults to USD. | [Optional] [Defaults to `undefined`] |
| **from** | `string` | Window start YYYY-MM-DD (UTC). Defaults to 2007-01-01 (spans the 2008 crisis + COVID). | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Window end YYYY-MM-DD (UTC). Defaults to today. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | How many to return (default 10, max 50). | [Optional] [Defaults to `undefined`] |

### Return type

[**SafeHavenResponse**](SafeHavenResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **400** | Invalid or missing request parameters. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Requires the growth plan or higher. |  -  |
| **429** | Rate limit or monthly quota exceeded. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## volatility

> VolatilityResponse volatility(currency, base, from, to, sort, universe, limit)

Volatility

Annualized volatility of a currency vs a base, or a stability ranking of the liquid currencies. Growth plan or higher.

### Example

```ts
import {
  Configuration,
  CurrencyCoreApi,
} from '@currencycore/sdk';
import type { VolatilityRequest } from '@currencycore/sdk';

async function example() {
  console.log("🚀 Testing @currencycore/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CurrencyCoreApi(config);

  const body = {
    // string | Currency to measure (3-letter ISO 4217), or a comma-separated list to compare. OMIT to RANK the liquid-currency set by stability. (optional)
    currency: EUR,
    // string | Base currency to measure against (3-letter ISO 4217). Defaults to USD. (optional)
    base: USD,
    // string | Window start YYYY-MM-DD (UTC). Defaults to 365 days before `to`. (optional)
    from: from_example,
    // string | Window end YYYY-MM-DD (UTC). Defaults to today; a future date clamps to today. (optional)
    to: to_example,
    // string | Ranking direction: stable (least volatile first, default) or volatile. (optional)
    sort: stable,
    // string | Ranking universe: liquid (default, broad set) or majors (USD/EUR/GBP/JPY/CHF/CAD/AUD/NZD). Use majors for \'most volatile major pair\'. (optional)
    universe: liquid,
    // number | Ranking: how many to return (default 10, max 50). (optional)
    limit: 10,
  } satisfies VolatilityRequest;

  try {
    const data = await api.volatility(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **currency** | `string` | Currency to measure (3-letter ISO 4217), or a comma-separated list to compare. OMIT to RANK the liquid-currency set by stability. | [Optional] [Defaults to `undefined`] |
| **base** | `string` | Base currency to measure against (3-letter ISO 4217). Defaults to USD. | [Optional] [Defaults to `undefined`] |
| **from** | `string` | Window start YYYY-MM-DD (UTC). Defaults to 365 days before &#x60;to&#x60;. | [Optional] [Defaults to `undefined`] |
| **to** | `string` | Window end YYYY-MM-DD (UTC). Defaults to today; a future date clamps to today. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | Ranking direction: stable (least volatile first, default) or volatile. | [Optional] [Defaults to `undefined`] |
| **universe** | `string` | Ranking universe: liquid (default, broad set) or majors (USD/EUR/GBP/JPY/CHF/CAD/AUD/NZD). Use majors for \&#39;most volatile major pair\&#39;. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Ranking: how many to return (default 10, max 50). | [Optional] [Defaults to `undefined`] |

### Return type

[**VolatilityResponse**](VolatilityResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. |  -  |
| **400** | Invalid or missing request parameters. |  -  |
| **401** | Missing or invalid API key. |  -  |
| **403** | Requires the growth plan or higher. |  -  |
| **429** | Rate limit or monthly quota exceeded. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

