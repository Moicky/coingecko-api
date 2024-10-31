# NetworksApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3/onchain*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**networksList**](NetworksApi.md#networksList) | **GET** /networks | Supported Networks List (ID Map) |


<a name="networksList"></a>
# **networksList**
> NetworksList networksList(page)

Supported Networks List (ID Map)

    This endpoint allows you to **query all the supported networks on GeckoTerminal**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page through results &lt;br&gt; Default value: 1 | [optional] [default to null] |

### Return type

[**NetworksList**](../Models/NetworksList.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

