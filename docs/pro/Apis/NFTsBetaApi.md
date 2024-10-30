# NFTsBetaApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**nftsContractAddress**](NFTsBetaApi.md#nftsContractAddress) | **GET** /nfts/{asset_platform_id}/contract/{contract_address} | NFTs Collection Data by Contract Address |
| [**nftsContractAddressMarketChart**](NFTsBetaApi.md#nftsContractAddressMarketChart) | **GET** /nfts/{asset_platform_id}/contract/{contract_address}/market_chart | 💼 NFTs Collection Historical Chart Data by Contract Address |
| [**nftsId**](NFTsBetaApi.md#nftsId) | **GET** /nfts/{id} | NFTs Collection Data by ID |
| [**nftsIdMarketChart**](NFTsBetaApi.md#nftsIdMarketChart) | **GET** /nfts/{id}/market_chart | 💼 NFTs Collection Historical Chart Data by ID |
| [**nftsIdTickers**](NFTsBetaApi.md#nftsIdTickers) | **GET** /nfts/{id}/tickers | 💼 NFTs Collection Tickers by ID |
| [**nftsList**](NFTsBetaApi.md#nftsList) | **GET** /nfts/list | NFTs List (ID Map) |
| [**nftsMarkets**](NFTsBetaApi.md#nftsMarkets) | **GET** /nfts/markets | 💼 NFTs List with Market Data |


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

<a name="nftsContractAddressMarketChart"></a>
# **nftsContractAddressMarketChart**
> NFTMarketChart nftsContractAddressMarketChart(asset\_platform\_id, contract\_address, days)

💼 NFTs Collection Historical Chart Data by Contract Address

    This endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24h volume, by number of days away from now based on the provided contract address**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **asset\_platform\_id** | **String**| asset platform id &lt;br&gt; *refers to [&#x60;/asset_platforms&#x60;](/reference/asset-platforms-list) | [default to null] |
| **contract\_address** | **String**| contract address of the nft collection | [default to null] |
| **days** | **String**| data up to number of days ago &lt;br&gt; Valid values: any integer or max  | [default to null] |

### Return type

[**NFTMarketChart**](../Models/NFTMarketChart.md)

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

<a name="nftsIdMarketChart"></a>
# **nftsIdMarketChart**
> NFTMarketChart nftsIdMarketChart(id, days)

💼 NFTs Collection Historical Chart Data by ID

    This endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24h volume, by number of days away from now**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| NFTs id &lt;br&gt; *refers to [&#x60;/nfts/list&#x60;](/reference/nfts-list). | [default to null] |
| **days** | **String**| data up to number of days  &lt;br&gt; Valid values: any integer or max  | [default to null] |

### Return type

[**NFTMarketChart**](../Models/NFTMarketChart.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="nftsIdTickers"></a>
# **nftsIdTickers**
> NFTTickers nftsIdTickers(id)

💼 NFTs Collection Tickers by ID

    This endpoint allows you to **query the latest floor price and 24h volume of a NFT collection, on each NFT marketplace, e.g. OpenSea and LooksRare**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| NFTs id &lt;br&gt; *refers to [&#x60;/nfts/list&#x60;](/reference/nfts-list). | [default to null] |

### Return type

[**NFTTickers**](../Models/NFTTickers.md)

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
| **per\_page** | **BigDecimal**| total results per page &lt;br&gt; Valid values: 1...250 | [optional] [default to null] |
| **page** | **BigDecimal**| page through results | [optional] [default to null] |

### Return type

[**NFTList**](../Models/NFTList.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="nftsMarkets"></a>
# **nftsMarkets**
> List nftsMarkets(asset\_platform\_id, order, per\_page, page)

💼 NFTs List with Market Data

    This endpoint allows you to **query all the supported NFT collections with floor price, market cap, volume and market related data on CoinGecko**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **asset\_platform\_id** | **String**| filter result by asset platform (blockchain network)  &lt;br&gt; *refers to [&#x60;/asset_platforms&#x60;](/reference/asset-platforms-list) filter&#x3D;&#x60;nft&#x60;  | [optional] [default to null] |
| **order** | **String**| sort results by field  &lt;br&gt; Default: &#x60;market_cap_usd_desc&#x60; | [optional] [default to null] [enum: h24_volume_native_asc, h24_volume_native_desc, h24_volume_usd_asc, h24_volume_usd_desc, market_cap_usd_asc, market_cap_usd_desc] |
| **per\_page** | **BigDecimal**| total results per page  &lt;br&gt; Valid values: any integer between 1 and 250  &lt;br&gt; Default: &#x60;100&#x60; | [optional] [default to null] |
| **page** | **BigDecimal**| page through results  &lt;br&gt; Default: &#x60;1&#x60; | [optional] [default to null] |

### Return type

[**List**](../Models/NFTsMarkets_inner.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

