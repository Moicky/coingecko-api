# OHLCVApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3/onchain*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**poolOhlcvContractAddress**](OHLCVApi.md#poolOhlcvContractAddress) | **GET** /networks/{network}/pools/{pool_address}/ohlcv/{timeframe} | Pool OHLCV chart by Pool Address |


<a name="poolOhlcvContractAddress"></a>
# **poolOhlcvContractAddress**
> OHLCV poolOhlcvContractAddress(network, pool\_address, timeframe, aggregate, before\_timestamp, limit, currency, token)

Pool OHLCV chart by Pool Address

    This endpoint allows you to **get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id  &lt;br&gt; *refers to [/networks](/reference/networks-list) | [default to null] |
| **pool\_address** | **String**| pool contract address | [default to null] |
| **timeframe** | **String**| timeframe of the OHLCV chart | [default to null] [enum: day, hour, minute] |
| **aggregate** | **String**| time period to aggregate each OHLCV &lt;br&gt; Available values (day) : &#x60;1&#x60; &lt;br&gt; Available values (hour) : &#x60;1&#x60; , &#x60;4&#x60; , &#x60;12&#x60; &lt;br&gt; Available values (minute) : &#x60;1&#x60; , &#x60;5&#x60; , &#x60;15&#x60; &lt;br&gt; Default value: 1 | [optional] [default to null] |
| **before\_timestamp** | **Integer**| return ohlcv data before this timestamp (integer seconds since epoch) | [optional] [default to null] |
| **limit** | **Integer**| number of ohlcv results to return, maximum 1000 &lt;br&gt; Default value: 100 | [optional] [default to null] |
| **currency** | **String**| return ohlcv in USD or quote token  &lt;br&gt; Default value: usd | [optional] [default to null] [enum: usd, token] |
| **token** | **String**| return ohlcv for token  &lt;br&gt; use this to invert the chart &lt;br&gt; Available values: &#39;base&#39;, &#39;quote&#39; or token address | [optional] [default to null] |

### Return type

[**OHLCV**](../Models/OHLCV.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

