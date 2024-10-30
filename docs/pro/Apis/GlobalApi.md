# GlobalApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cryptoGlobal**](GlobalApi.md#cryptoGlobal) | **GET** /global | Crypto Global Market Data |
| [**globalDeFi**](GlobalApi.md#globalDeFi) | **GET** /global/decentralized_finance_defi | Global De-Fi Market Data |
| [**globalMarketCapChart**](GlobalApi.md#globalMarketCapChart) | **GET** /global/market_cap_chart | 💼 Global Market Cap Chart Data |


<a name="cryptoGlobal"></a>
# **cryptoGlobal**
> Global cryptoGlobal()

Crypto Global Market Data

    This endpoint allows you **query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc**.

### Parameters
This endpoint does not need any parameter.

### Return type

[**Global**](../Models/Global.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="globalDeFi"></a>
# **globalDeFi**
> GlobalDeFi globalDeFi()

Global De-Fi Market Data

    This endpoint allows you **query top 100 cryptocurrency global decentralized finance (defi) data including defi market cap, trading volume**.

### Parameters
This endpoint does not need any parameter.

### Return type

[**GlobalDeFi**](../Models/GlobalDeFi.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="globalMarketCapChart"></a>
# **globalMarketCapChart**
> GlobalMarketCapChart globalMarketCapChart(days, vs\_currency)

💼 Global Market Cap Chart Data

    This endpoint allows you to **query historical global market cap and volume data by number of days away from now**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **days** | **String**| data up to number of days ago  &lt;br&gt;Valid values: any integer  | [default to null] [enum: 1, 7, 14, 30, 90, 180, 365, max] |
| **vs\_currency** | **String**| target currency of market cap, default: usd &lt;br&gt; *refers to [&#x60;/simple/supported_vs_currencies&#x60;](/reference/simple-supported-currencies)  | [optional] [default to null] |

### Return type

[**GlobalMarketCapChart**](../Models/GlobalMarketCapChart.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

