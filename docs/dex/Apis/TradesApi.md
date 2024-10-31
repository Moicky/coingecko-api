# TradesApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3/onchain*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**poolTradesContractAddress**](TradesApi.md#poolTradesContractAddress) | **GET** /networks/{network}/pools/{pool_address}/trades | Past 24 Hour Trades by Pool Address |


<a name="poolTradesContractAddress"></a>
# **poolTradesContractAddress**
> Trades poolTradesContractAddress(network, pool\_address, trade\_volume\_in\_usd\_greater\_than)

Past 24 Hour Trades by Pool Address

    This endpoint allows you to **query the last 300 trades in the past 24 hours based on the provided pool address**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id  &lt;br&gt; *refers to [/networks](/reference/networks-list)  | [default to null] |
| **pool\_address** | **String**| pool contract address | [default to null] |
| **trade\_volume\_in\_usd\_greater\_than** | **BigDecimal**| filter trades by trade volume in USD greater than this value &lt;br&gt; Default value: 0 | [optional] [default to null] |

### Return type

[**Trades**](../Models/Trades.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

