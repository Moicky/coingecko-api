# TokensApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3/onchain*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**poolTokenInfoContractAddress**](TokensApi.md#poolTokenInfoContractAddress) | **GET** /networks/{network}/pools/{pool_address}/info | Pool Tokens Info by Pool Address |
| [**tokenDataContractAddress**](TokensApi.md#tokenDataContractAddress) | **GET** /networks/{network}/tokens/{address} | Token Data by Token Address |
| [**tokenInfoContractAddress**](TokensApi.md#tokenInfoContractAddress) | **GET** /networks/{network}/tokens/{address}/info | Token Info by Token Address |
| [**tokensDataContractAddresses**](TokensApi.md#tokensDataContractAddresses) | **GET** /networks/{network}/tokens/multi/{addresses} | Tokens Data by Token Addresses |
| [**tokensInfoRecentUpdated**](TokensApi.md#tokensInfoRecentUpdated) | **GET** /tokens/info_recently_updated | Most Recently Updated Tokens List |
| [**topPoolsContractAddress**](TokensApi.md#topPoolsContractAddress) | **GET** /networks/{network}/tokens/{token_address}/pools | Top Pools by Token Address |


<a name="poolTokenInfoContractAddress"></a>
# **poolTokenInfoContractAddress**
> PoolTokensInfo poolTokenInfoContractAddress(network, pool\_address)

Pool Tokens Info by Pool Address

    This endpoint allows you to **query pool info including base and quote token info based on provided pool contract address on a network**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id  &lt;br&gt; *refers to [/networks](/reference/networks-list)  | [default to null] |
| **pool\_address** | **String**| pool contract address | [default to null] |

### Return type

[**PoolTokensInfo**](../Models/PoolTokensInfo.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="tokenDataContractAddress"></a>
# **tokenDataContractAddress**
> Token tokenDataContractAddress(network, address, include)

Token Data by Token Address

    This endpoint allows you to **query specific token data based on the provided token contract address on a network**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id  &lt;br&gt; *refers to [/networks](/reference/networks-list)  | [default to null] |
| **address** | **String**| token contract address | [default to null] |
| **include** | **String**| attributes to include | [optional] [default to null] [enum: top_pools] |

### Return type

[**Token**](../Models/Token.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="tokenInfoContractAddress"></a>
# **tokenInfoContractAddress**
> TokenInfo tokenInfoContractAddress(network, address)

Token Info by Token Address

    This endpoint allows you to **query specific token info such as name,symbol, coingecko id etc. based on provided token contract address on a network**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id  &lt;br&gt; *refers to [/networks](/reference/networks-list)  | [default to null] |
| **address** | **String**| token contract address | [default to null] |

### Return type

[**TokenInfo**](../Models/TokenInfo.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="tokensDataContractAddresses"></a>
# **tokensDataContractAddresses**
> Token tokensDataContractAddresses(network, addresses, include)

Tokens Data by Token Addresses

    This endpoint allows you to **query multiple tokens data based on the provided token contract addresses on a network**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id  &lt;br&gt; *refers to [/networks](/reference/networks-list)  | [default to null] |
| **addresses** | **String**| token contract address, comma-separated if more than one token contract address | [default to null] |
| **include** | **String**| attributes to include | [optional] [default to null] [enum: top_pools] |

### Return type

[**Token**](../Models/Token.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="tokensInfoRecentUpdated"></a>
# **tokensInfoRecentUpdated**
> TokenInfoRecentlyUpdated tokensInfoRecentUpdated(include, network)

Most Recently Updated Tokens List

    This endpoint allows you to **query 100 most recently updated tokens info of a specific network or across all networks on GeckoTerminal**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **include** | **String**| Attributes for related resources to include, which will be returned under the top-level &#39;included&#39; key | [optional] [default to null] [enum: network] |
| **network** | **String**| Filter tokens by provided network  &lt;br&gt; *refers to [/networks](/reference/networks-list)  | [optional] [default to null] |

### Return type

[**TokenInfoRecentlyUpdated**](../Models/TokenInfoRecentlyUpdated.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="topPoolsContractAddress"></a>
# **topPoolsContractAddress**
> Pool topPoolsContractAddress(network, token\_address, include, page, sort)

Top Pools by Token Address

    This endpoint allows you to **query top pools based on the provided token contract address on a network**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id &lt;br&gt; *refers to [/networks](/reference/networks-list) | [default to null] |
| **token\_address** | **String**| token contract address | [default to null] |
| **include** | **String**| attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60; | [optional] [default to null] |
| **page** | **Integer**| page through results, maximum 10 pages &lt;br&gt; Default value: 1 | [optional] [default to null] |
| **sort** | **String**| sort the pools by field &lt;br&gt; Default value: h24_volume_usd_liquidity_desc | [optional] [default to null] [enum: h24_volume_usd_liquidity_desc, h24_tx_count_desc, h24_volume_usd_desc] |

### Return type

[**Pool**](../Models/Pool.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

