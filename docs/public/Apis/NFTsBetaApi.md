# NFTsBetaApi

All URIs are relative to *https://api.coingecko.com/api/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**nftsContractAddress**](NFTsBetaApi.md#nftsContractAddress) | **GET** /nfts/{asset_platform_id}/contract/{contract_address} | NFTs Collection Data by Contract Address |
| [**nftsId**](NFTsBetaApi.md#nftsId) | **GET** /nfts/{id} | NFTs Collection Data by ID |
| [**nftsList**](NFTsBetaApi.md#nftsList) | **GET** /nfts/list | NFTs List (ID Map) |


<a name="nftsContractAddress"></a>
# **nftsContractAddress**
> NFTData nftsContractAddress(asset\_platform\_id, contract\_address)

NFTs Collection Data by Contract Address

    This endpoint allows you to **query all the NFT data (name, floor price, 24 hr volume....) based on the nft collection contract address and respective asset platform**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **asset\_platform\_id** | **String**| asset platform id &lt;br&gt; *refers to [&#x60;/asset_platforms&#x60;](/reference/asset-platforms-list) | [default to null] |
| **contract\_address** | **String**| the contract address of token | [default to null] |

### Return type

[**NFTData**](../Models/NFTData.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="nftsId"></a>
# **nftsId**
> NFTData nftsId(id)

NFTs Collection Data by ID

    This endpoint allows you to **query all the NFT data (name, floor price, 24 hr volume....) based on the nft collection id**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| NFTs id &lt;br&gt; *refers to [&#x60;/nfts/list&#x60;](/reference/nfts-list). | [default to null] |

### Return type

[**NFTData**](../Models/NFTData.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="nftsList"></a>
# **nftsList**
> NFTList nftsList(order, per\_page, page)

NFTs List (ID Map)

    This endpoint allows you to **query all supported NFTs with id, contract address, name, asset platform id and symbol on CoinGecko**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **order** | **String**| use this to sort the order of responses | [optional] [default to null] [enum: h24_volume_usd_asc, h24_volume_usd_desc, h24_volume_native_asc, h24_volume_native_desc, floor_price_native_asc, floor_price_native_desc, market_cap_native_asc, market_cap_native_desc, market_cap_usd_asc, market_cap_usd_desc] |
| **per\_page** | **Integer**| total results per page &lt;br&gt; Valid values: 1...250 | [optional] [default to null] |
| **page** | **Integer**| page through results | [optional] [default to null] |

### Return type

[**NFTList**](../Models/NFTList.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

