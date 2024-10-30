# CategoriesApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**coinsCategories**](CategoriesApi.md#coinsCategories) | **GET** /coins/categories | Coins Categories List with Market Data |
| [**coinsCategoriesList**](CategoriesApi.md#coinsCategoriesList) | **GET** /coins/categories/list | Coins Categories List (ID Map) |


<a name="coinsCategories"></a>
# **coinsCategories**
> Categories coinsCategories(order)

Coins Categories List with Market Data

    This endpoint allows you to **query all the coins categories with market data (market cap, volume, etc.) on CoinGecko**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **order** | **String**| sort results by field, default: market_cap_desc | [optional] [default to null] [enum: market_cap_desc, market_cap_asc, name_desc, name_asc, market_cap_change_24h_desc, market_cap_change_24h_asc] |

### Return type

[**Categories**](../Models/Categories.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="coinsCategoriesList"></a>
# **coinsCategoriesList**
> CategoriesList coinsCategoriesList()

Coins Categories List (ID Map)

    This endpoint allows you to **query all the coins categories on CoinGecko**.

### Parameters
This endpoint does not need any parameter.

### Return type

[**CategoriesList**](../Models/CategoriesList.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

