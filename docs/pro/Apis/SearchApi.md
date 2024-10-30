# SearchApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**searchData**](SearchApi.md#searchData) | **GET** /search | Search Queries |


<a name="searchData"></a>
# **searchData**
> Search searchData(query)

Search Queries

    This endpoint allows you to **search for coins, categories and markets listed on CoinGecko**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **query** | **String**| search query | [default to null] |

### Return type

[**Search**](../Models/Search.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

