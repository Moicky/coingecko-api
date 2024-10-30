# CoinsApi

All URIs are relative to *https://api.coingecko.com/api/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**coinsId**](CoinsApi.md#coinsId) | **GET** /coins/{id} | Coin Data by ID |
| [**coinsIdHistory**](CoinsApi.md#coinsIdHistory) | **GET** /coins/{id}/history | Coin Historical Data by ID |
| [**coinsIdMarketChart**](CoinsApi.md#coinsIdMarketChart) | **GET** /coins/{id}/market_chart | Coin Historical Chart Data by ID |
| [**coinsIdMarketChartRange**](CoinsApi.md#coinsIdMarketChartRange) | **GET** /coins/{id}/market_chart/range | Coin Historical Chart Data within Time Range by ID |
| [**coinsIdOhlc**](CoinsApi.md#coinsIdOhlc) | **GET** /coins/{id}/ohlc | Coin OHLC Chart by ID |
| [**coinsIdTickers**](CoinsApi.md#coinsIdTickers) | **GET** /coins/{id}/tickers | Coin Tickers by ID |
| [**coinsList**](CoinsApi.md#coinsList) | **GET** /coins/list | Coins List (ID Map) |
| [**coinsMarkets**](CoinsApi.md#coinsMarkets) | **GET** /coins/markets | Coins List with Market Data |


<a name="coinsId"></a>
# **coinsId**
> CoinsID coinsId(id, localization, tickers, market\_data, community\_data, developer\_data, sparkline)

Coin Data by ID

    This endpoint allows you to **query all the coin data of a coin (name, price, market .... including exchange tickers) on CoinGecko coin page based on a particular coin id**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| coin id &lt;br&gt; *refers to [&#x60;/coins/list&#x60;](/reference/coins-list). | [default to null] |
| **localization** | **Boolean**| include all the localized languages in the response, default: true | [optional] [default to null] |
| **tickers** | **Boolean**| include tickers data, default: true | [optional] [default to null] |
| **market\_data** | **Boolean**| include market data, default: true | [optional] [default to null] |
| **community\_data** | **Boolean**| include community data, default: true | [optional] [default to null] |
| **developer\_data** | **Boolean**| include developer data, default: true | [optional] [default to null] |
| **sparkline** | **Boolean**| include sparkline 7 days data, default: false | [optional] [default to null] |

### Return type

[**CoinsID**](../Models/CoinsID.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="coinsIdHistory"></a>
# **coinsIdHistory**
> CoinsHistoricalData coinsIdHistory(id, date, localization)

Coin Historical Data by ID

    This endpoint allows you to **query the historical data (price, market cap, 24hrs volume, etc) at a given date for a coin based on a particular coin id**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| coin id &lt;br&gt; *refers to [&#x60;/coins/list&#x60;](/reference/coins-list). | [default to null] |
| **date** | **String**| the date of data snapshot &lt;br&gt; Format: &#x60;dd-mm-yyyy&#x60; | [default to null] |
| **localization** | **Boolean**| include all the localized languages in response, default: true | [optional] [default to null] |

### Return type

[**CoinsHistoricalData**](../Models/CoinsHistoricalData.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="coinsIdMarketChart"></a>
# **coinsIdMarketChart**
> CoinsMarketChart coinsIdMarketChart(id, vs\_currency, days, interval, precision)

Coin Historical Chart Data by ID

    This endpoint allows you to **get the historical chart data of a coin including time in UNIX, price, market cap and 24hrs volume based on particular coin id**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| coin id &lt;br&gt; *refers to [&#x60;/coins/list&#x60;](/reference/coins-list). | [default to null] |
| **vs\_currency** | **String**| target currency of market data &lt;br&gt; *refers to [&#x60;/simple/supported_vs_currencies&#x60;](/reference/simple-supported-currencies). | [default to null] |
| **days** | **String**| data up to number of days ago &lt;br&gt; you may use any integer for number of days | [default to null] |
| **interval** | **String**| data interval, leave empty for auto granularity Possible value: daily | [optional] [default to null] [enum: daily] |
| **precision** | **String**| decimal place for currency price value | [optional] [default to null] [enum: full, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] |

### Return type

[**CoinsMarketChart**](../Models/CoinsMarketChart.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="coinsIdMarketChartRange"></a>
# **coinsIdMarketChartRange**
> CoinsMarketChartRange coinsIdMarketChartRange(id, vs\_currency, from, to, precision)

Coin Historical Chart Data within Time Range by ID

    This endpoint allows you to **get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hrs volume based on particular coin id**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| coin id &lt;br&gt; *refers to [&#x60;/coins/list&#x60;](/reference/coins-list). | [default to null] |
| **vs\_currency** | **String**| target currency of market data &lt;br&gt; *refers to [&#x60;/simple/supported_vs_currencies&#x60;](/reference/simple-supported-currencies). | [default to null] |
| **from** | **Integer**| starting date in UNIX timestamp  | [default to null] |
| **to** | **Integer**| ending date in UNIX timestamp | [default to null] |
| **precision** | **String**| decimal place for currency price value | [optional] [default to null] [enum: full, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] |

### Return type

[**CoinsMarketChartRange**](../Models/CoinsMarketChartRange.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="coinsIdOhlc"></a>
# **coinsIdOhlc**
> List coinsIdOhlc(id, vs\_currency, days, precision)

Coin OHLC Chart by ID

    This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin id**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| coin id &lt;br&gt; *refers to [&#x60;/coins/list&#x60;](/reference/coins-list). | [default to null] |
| **vs\_currency** | **String**| target currency of price data &lt;br&gt; *refers to [&#x60;/simple/supported_vs_currencies&#x60;](/reference/simple-supported-currencies). | [default to null] |
| **days** | **String**| data up to number of days ago  | [default to null] [enum: 1, 7, 14, 30, 90, 180, 365] |
| **precision** | **String**| decimal place for currency price value | [optional] [default to null] [enum: full, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] |

### Return type

[**List**](../Models/array.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="coinsIdTickers"></a>
# **coinsIdTickers**
> CoinsTickers coinsIdTickers(id, exchange\_ids, include\_exchange\_logo, page, order, depth)

Coin Tickers by ID

    This endpoint allows you to **query the coin tickers on both centralized exchange (cex) and decentralized exchange (dex) based on a particular coin id**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| coin id &lt;br&gt; *refers to [&#x60;/coins/list&#x60;](/reference/coins-list). | [default to null] |
| **exchange\_ids** | **String**| exchange id &lt;br&gt; *refers to [&#x60;/exchanges/list&#x60;](/reference/exchanges-list). | [optional] [default to null] |
| **include\_exchange\_logo** | **Boolean**| include exchange logo, default: false | [optional] [default to null] |
| **page** | **Integer**| page through results | [optional] [default to null] |
| **order** | **String**| use this to sort the order of responses, default: trust_score_desc | [optional] [default to null] [enum: trust_score_desc, trust_score_asc, volume_desc, volume_asc] |
| **depth** | **Boolean**| include 2% orderbook depth, ie. &#x60;cost_to_move_up_usd&#x60; and &#x60;cost_to_move_down_usd&#x60; &lt;br&gt; default: false | [optional] [default to null] |

### Return type

[**CoinsTickers**](../Models/CoinsTickers.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="coinsList"></a>
# **coinsList**
> List coinsList(include\_platform)

Coins List (ID Map)

    This endpoint allows you to **query all the supported coins on CoinGecko with coins id, name and symbol**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **include\_platform** | **Boolean**| include platform and token&#39;s contract addresses, default: false | [optional] [default to null] |

### Return type

[**List**](../Models/CoinsList_inner.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="coinsMarkets"></a>
# **coinsMarkets**
> CoinsMarkets coinsMarkets(vs\_currency, ids, category, order, per\_page, page, sparkline, price\_change\_percentage, locale, precision)

Coins List with Market Data

    This endpoint allows you to **query all the supported coins with price, market cap, volume and market related data**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **vs\_currency** | **String**| target currency of coins and market data &lt;br&gt; *refers to [&#x60;/simple/supported_vs_currencies&#x60;](/reference/simple-supported-currencies). | [default to null] |
| **ids** | **String**| coins&#39; ids, comma-separated if querying more than 1 coin.  &lt;br&gt; *refers to [&#x60;/coins/list&#x60;](/reference/coins-list). | [optional] [default to null] |
| **category** | **String**| filter based on coins&#39; category &lt;br&gt; *refers to [&#x60;/coins/categories/list&#x60;](/reference/coins-categories-list). | [optional] [default to null] |
| **order** | **String**| sort result by field, default: market_cap_desc | [optional] [default to null] [enum: market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc] |
| **per\_page** | **Integer**| total results per page, default: 100 &lt;br&gt; Valid values: 1...250 | [optional] [default to null] |
| **page** | **Integer**| page through results, default: 1 | [optional] [default to null] |
| **sparkline** | **Boolean**| include sparkline 7 days data, default: false | [optional] [default to null] |
| **price\_change\_percentage** | **String**| include price change percentage timeframe, comma-separated if query more than 1 price change percentage timeframe &lt;br&gt; Valid values: 1h, 24h, 7d, 14d, 30d, 200d, 1y | [optional] [default to null] |
| **locale** | **String**| language background, default: en | [optional] [default to null] [enum: ar, bg, cs, da, de, el, en, es, fi, fr, he, hi, hr, hu, id, it, ja, ko, lt, nl, no, pl, pt, ro, ru, sk, sl, sv, th, tr, uk, vi, zh, zh-tw] |
| **precision** | **String**| decimal place for currency price value | [optional] [default to null] [enum: full, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] |

### Return type

[**CoinsMarkets**](../Models/CoinsMarkets.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

