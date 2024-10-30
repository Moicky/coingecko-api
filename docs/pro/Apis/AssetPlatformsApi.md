# AssetPlatformsApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assetPlatformsList**](AssetPlatformsApi.md#assetPlatformsList) | **GET** /asset_platforms | Asset Platforms List (ID Map) |
| [**tokenLists**](AssetPlatformsApi.md#tokenLists) | **GET** /token_lists/{asset_platform_id}/all.json | 👑 Token Lists by Asset Platform ID |


<a name="assetPlatformsList"></a>
# **assetPlatformsList**
> AssetPlatforms assetPlatformsList(filter)

Asset Platforms List (ID Map)

    This endpoint allows you to **query all the asset platforms on CoinGecko**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filter** | **String**| apply relevant filters to results | [optional] [default to null] [enum: nft] |

### Return type

[**AssetPlatforms**](../Models/AssetPlatforms.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="tokenLists"></a>
# **tokenLists**
> TokenLists tokenLists(asset\_platform\_id)

👑 Token Lists by Asset Platform ID

    This endpoint allows you to **get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **asset\_platform\_id** | **String**| asset platform id &lt;br&gt; *refers to [&#x60;/asset_platforms&#x60;](/reference/asset-platforms-list) | [default to null] |

### Return type

[**TokenLists**](../Models/TokenLists.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

