# SimpleApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**simplePrice**](SimpleApi.md#simplePrice) | **GET** /simple/price | Coin Price by IDs |
| [**simpleSupportedCurrencies**](SimpleApi.md#simpleSupportedCurrencies) | **GET** /simple/supported_vs_currencies | Supported Currencies List |
| [**simpleTokenPrice**](SimpleApi.md#simpleTokenPrice) | **GET** /simple/token_price/{id} | Coin Price by Token Addresses |


<a name="simplePrice"></a>
# **simplePrice**
> simple_price_200_response simplePrice(ids, vs\_currencies, include\_market\_cap, include\_24hr\_vol, include\_24hr\_change, include\_last\_updated\_at, precision)

Coin Price by IDs

    This endpoint allows you to **query the prices of one or more coins by using their unique Coin API IDs**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ids** | **String**| coins&#39; ids, comma-separated if querying more than 1 coin.  &lt;br&gt;*refers to [&#x60;/coins/list&#x60;](/reference/coins-list). | [default to null] |
| **vs\_currencies** | **String**| target currency of coins, comma-separated if querying more than 1 currency.  &lt;br&gt;*refers to [&#x60;/simple/supported_vs_currencies&#x60;](/reference/simple-supported-currencies). | [default to null] |
| **include\_market\_cap** | **Boolean**| include market cap, default: false  | [optional] [default to null] |
| **include\_24hr\_vol** | **Boolean**| include 24hr volume, default: false | [optional] [default to null] |
| **include\_24hr\_change** | **Boolean**| include 24hr change, default: false | [optional] [default to null] |
| **include\_last\_updated\_at** | **Boolean**| include last updated price time in UNIX, default: false | [optional] [default to null] |
| **precision** | **String**| decimal place for currency price value  | [optional] [default to null] [enum: full, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] |

### Return type

[**simple_price_200_response**](../Models/simple_price_200_response.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="simpleSupportedCurrencies"></a>
# **simpleSupportedCurrencies**
> List simpleSupportedCurrencies()

Supported Currencies List

    This endpoint allows you to **query all the supported currencies on CoinGecko**.

### Parameters
This endpoint does not need any parameter.

### Return type

**List**

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="simpleTokenPrice"></a>
# **simpleTokenPrice**
> simple_token_price_200_response simpleTokenPrice(id, contract\_addresses, vs\_currencies, include\_market\_cap, include\_24hr\_vol, include\_24hr\_change, include\_last\_updated\_at, precision)

Coin Price by Token Addresses

    This endpoint allows you to **query a token price by using token contract address**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| asset platform&#39;s id  &lt;br&gt;*refers to [&#x60;/asset_platforms&#x60;](/reference/asset-platforms-list). | [default to null] |
| **contract\_addresses** | **String**| the contract addresses of tokens, comma-separated if querying more than 1 token&#39;s contract address | [default to null] |
| **vs\_currencies** | **String**| target currency of coins, comma-separated if querying more than 1 currency.  &lt;br&gt; *refers to [&#x60;/simple/supported_vs_currencies&#x60;](/reference/simple-supported-currencies). | [default to null] |
| **include\_market\_cap** | **Boolean**| include market capitalization, default: false | [optional] [default to null] |
| **include\_24hr\_vol** | **Boolean**| include 24hr volume, default: false | [optional] [default to null] |
| **include\_24hr\_change** | **Boolean**| include 24hr change  default: false | [optional] [default to null] |
| **include\_last\_updated\_at** | **Boolean**| include last updated price time in UNIX , default: false | [optional] [default to null] |
| **precision** | **String**| decimal place for currency price value  | [optional] [default to null] [enum: full, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] |

### Return type

[**simple_token_price_200_response**](../Models/simple_token_price_200_response.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

