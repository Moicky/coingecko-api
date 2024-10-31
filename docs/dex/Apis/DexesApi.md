# DexesApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3/onchain*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**dexesList**](DexesApi.md#dexesList) | **GET** /networks/{network}/dexes | Supported Dexes List by Network (ID Map) |


<a name="dexesList"></a>
# **dexesList**
> DexesList dexesList(network, page)

Supported Dexes List by Network (ID Map)

    This endpoint allows you to **query all the supported decentralized exchanges (dexes) based on the provided network on GeckoTerminal**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id &lt;br&gt; *refers to [/networks](/reference/networks-list) | [default to null] |
| **page** | **Integer**| page through results &lt;br&gt; Default value: 1 | [optional] [default to null] |

### Return type

[**DexesList**](../Models/DexesList.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

