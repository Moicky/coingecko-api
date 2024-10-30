# AssetPlatformsApi

All URIs are relative to *https://api.coingecko.com/api/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**assetPlatformsList**](AssetPlatformsApi.md#assetPlatformsList) | **GET** /asset_platforms | Asset Platforms List (ID Map) |


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

