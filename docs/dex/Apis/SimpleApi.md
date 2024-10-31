# SimpleApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3/onchain*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**onchainSimplePrice**](SimpleApi.md#onchainSimplePrice) | **GET** /simple/networks/{network}/token_price/{addresses} | Token Price by Token Addresses |


<a name="onchainSimplePrice"></a>
# **onchainSimplePrice**
> SimplePrice onchainSimplePrice(network, addresses)

Token Price by Token Addresses

    This endpoint allows you to **get token price based on the provided token contract address on a network**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id  &lt;br&gt; *refers to [/networks](/reference/networks-list) | [default to null] |
| **addresses** | **String**| token contract address, comma-separated if more than one token contract address,100 addresses | [default to null] |

### Return type

[**SimplePrice**](../Models/SimplePrice.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

