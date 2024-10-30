# ContractApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**coinsContractAddress**](ContractApi.md#coinsContractAddress) | **GET** /coins/{id}/contract/{contract_address} | Coin Data by Token Address |
| [**contractAddressMarketChart**](ContractApi.md#contractAddressMarketChart) | **GET** /coins/{id}/contract/{contract_address}/market_chart | Coin Historical Chart Data by Token Address |
| [**contractAddressMarketChartRange**](ContractApi.md#contractAddressMarketChartRange) | **GET** /coins/{id}/contract/{contract_address}/market_chart/range | Coin Historical Chart Data within Time Range by Token Address |


<a name="coinsContractAddress"></a>
# **coinsContractAddress**
> CoinsContractAddress coinsContractAddress(id, contract\_address)

Coin Data by Token Address

    This endpoint allows you to **query all the coin data (name, price, market .... including exchange tickers) on CoinGecko coin page based on asset platform and particular token contract address**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| asset platform id &lt;br&gt; *refers to [&#x60;/asset_platforms&#x60;](/reference/asset-platforms-list). | [default to null] |
| **contract\_address** | **String**| the contract address of token | [default to null] |

### Return type

[**CoinsContractAddress**](../Models/CoinsContractAddress.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="contractAddressMarketChart"></a>
# **contractAddressMarketChart**
> CoinsMarketChart contractAddressMarketChart(id, contract\_address, vs\_currency, days, interval, precision)

Coin Historical Chart Data by Token Address

    This endpoint allows you to **get the historical chart data including time in UNIX, price, market cap and 24hrs volume based on asset platform and particular token contract address**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| asset platform id &lt;br&gt; *refers to [&#x60;/asset_platforms&#x60;](/reference/asset-platforms-list). | [default to null] |
| **contract\_address** | **String**| the contract address of token | [default to null] |
| **vs\_currency** | **String**| target currency of market data &lt;br&gt; *refers to [&#x60;/simple/supported_vs_currencies&#x60;](/reference/simple-supported-currencies). | [default to null] |
| **days** | **String**| data up to number of days ago &lt;br&gt; you may use any integer or &#x60;max&#x60; for number of days | [default to null] |
| **interval** | **String**| data interval, leave empty for auto granularity | [optional] [default to null] [enum: 5m, hourly, daily] |
| **precision** | **String**| decimal place for currency price value | [optional] [default to null] [enum: full, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] |

### Return type

[**CoinsMarketChart**](../Models/CoinsMarketChart.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="contractAddressMarketChartRange"></a>
# **contractAddressMarketChartRange**
> CoinsMarketChartRange contractAddressMarketChartRange(id, contract\_address, vs\_currency, from, to, interval, precision)

Coin Historical Chart Data within Time Range by Token Address

    This endpoint allows you to **get the historical chart data within certain time range in UNIX along with price, market cap and 24hrs volume  based on asset platform and particular token contract address**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| asset platform id &lt;br&gt; *refers to [&#x60;/asset_platforms&#x60;](/reference/asset-platforms-list) | [default to null] |
| **contract\_address** | **String**| the contract address of token | [default to null] |
| **vs\_currency** | **String**| target currency of market data &lt;br&gt; *refers to [&#x60;/simple/supported_vs_currencies&#x60;](/reference/simple-supported-currencies). | [default to null] |
| **from** | **BigDecimal**| starting date in UNIX timestamp | [default to null] |
| **to** | **BigDecimal**| ending date in UNIX timestamp | [default to null] |
| **interval** | **String**| data interval, leave empty for auto granularity | [optional] [default to null] [enum: 5m, hourly, daily] |
| **precision** | **String**| decimal place for currency price value | [optional] [default to null] [enum: full, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] |

### Return type

[**CoinsMarketChartRange**](../Models/CoinsMarketChartRange.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

