# ExchangesApi

All URIs are relative to *https://api.coingecko.com/api/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exchanges**](ExchangesApi.md#exchanges) | **GET** /exchanges | Exchanges List with data |
| [**exchangesId**](ExchangesApi.md#exchangesId) | **GET** /exchanges/{id} | Exchange Data by ID |
| [**exchangesIdTickers**](ExchangesApi.md#exchangesIdTickers) | **GET** /exchanges/{id}/tickers | Exchange Tickers by ID |
| [**exchangesIdVolumeChart**](ExchangesApi.md#exchangesIdVolumeChart) | **GET** /exchanges/{id}/volume_chart | Exchange Volume Chart by ID |
| [**exchangesList**](ExchangesApi.md#exchangesList) | **GET** /exchanges/list | Exchanges List (ID Map) |


<a name="exchanges"></a>
# **exchanges**
> Exchanges exchanges(per\_page, page)

Exchanges List with data

    This endpoint allows you to **query all the supported exchanges with exchanges’ data (id, name, country, .... etc) that have active trading volumes on CoinGecko**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **per\_page** | **Integer**| total results per page, default: 100 &lt;br&gt; Valid values: 1...250 | [optional] [default to null] |
| **page** | **Integer**| page through results, default: 1 | [optional] [default to null] |

### Return type

[**Exchanges**](../Models/Exchanges.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="exchangesId"></a>
# **exchangesId**
> ExchangeData exchangesId(id)

Exchange Data by ID

    This endpoint allows you to **query exchange’s data (name, year established, country, .... etc), exchange volume in BTC and top 100 tickers based on exchange’s id**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| exchange id &lt;br&gt; *refers to [&#x60;/exchanges/list&#x60;](/reference/exchanges-list). | [default to null] |

### Return type

[**ExchangeData**](../Models/ExchangeData.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="exchangesIdTickers"></a>
# **exchangesIdTickers**
> ExchangeTickers exchangesIdTickers(id, coin\_ids, include\_exchange\_logo, page, depth, order)

Exchange Tickers by ID

    This endpoint allows you to **query exchange&#39;s tickers based on exchange’s id**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| exchange id &lt;br&gt; *refers to [&#x60;/exchanges/list&#x60;](/reference/exchanges-list). | [default to null] |
| **coin\_ids** | **String**| filter tickers by coin_ids, comma-separated if querying more than 1 coin &lt;br&gt; *refers to [&#x60;/coins/list&#x60;](/reference/coins-list). | [optional] [default to null] |
| **include\_exchange\_logo** | **Boolean**| include exchange logo, default: false | [optional] [default to null] |
| **page** | **Integer**| page through results | [optional] [default to null] |
| **depth** | **Boolean**| include 2% orderbook depth (Example: cost_to_move_up_usd &amp; cost_to_move_down_usd),default: false | [optional] [default to null] |
| **order** | **String**| use this to sort the order of responses, default: trust_score_desc | [optional] [default to null] [enum: trust_score_desc, trust_score_asc, volume_desc, volume_asc] |

### Return type

[**ExchangeTickers**](../Models/ExchangeTickers.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="exchangesIdVolumeChart"></a>
# **exchangesIdVolumeChart**
> List exchangesIdVolumeChart(id, days)

Exchange Volume Chart by ID

    This endpoint allows you to **query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange’s id**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| exchange id or derivatives exchange id &lt;br&gt; *refers to [&#x60;/exchanges/list&#x60;](/reference/exchanges-list) or [&#x60;/derivatives/exchanges/list&#x60;](/reference/derivatives-exchanges-list). | [default to null] |
| **days** | **String**| data up to number of days ago | [default to null] [enum: 1, 7, 14, 30, 90, 180, 365] |

### Return type

[**List**](../Models/array.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="exchangesList"></a>
# **exchangesList**
> ExchangesList exchangesList()

Exchanges List (ID Map)

    This endpoint allows you to **query all the exchanges with id and name**.

### Parameters
This endpoint does not need any parameter.

### Return type

[**ExchangesList**](../Models/ExchangesList.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

