# PoolsApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3/onchain*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**latestPoolsList**](PoolsApi.md#latestPoolsList) | **GET** /networks/new_pools | New Pools List |
| [**latestPoolsNetwork**](PoolsApi.md#latestPoolsNetwork) | **GET** /networks/{network}/new_pools | New Pools by Network |
| [**poolAddress**](PoolsApi.md#poolAddress) | **GET** /networks/{network}/pools/{address} | Specific Pool Data by Pool Address |
| [**poolsAddresses**](PoolsApi.md#poolsAddresses) | **GET** /networks/{network}/pools/multi/{addresses} | Multiple Pools Data by Pool Addresses |
| [**searchPools**](PoolsApi.md#searchPools) | **GET** /search/pools | Search Pools |
| [**topPoolsDex**](PoolsApi.md#topPoolsDex) | **GET** /networks/{network}/dexes/{dex}/pools | Top Pools by Dex |
| [**topPoolsNetwork**](PoolsApi.md#topPoolsNetwork) | **GET** /networks/{network}/pools | Top Pools by Network |
| [**trendingPoolsList**](PoolsApi.md#trendingPoolsList) | **GET** /networks/trending_pools | Trending Pools List |
| [**trendingPoolsNetwork**](PoolsApi.md#trendingPoolsNetwork) | **GET** /networks/{network}/trending_pools | Trending Pools by Network |


<a name="latestPoolsList"></a>
# **latestPoolsList**
> Pool latestPoolsList(include, page)

New Pools List

    This endpoint allows you to **query all the latest pools across all networks on GeckoTerminal**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **include** | **String**| attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60;, &#x60;network&#x60; | [optional] [default to null] |
| **page** | **Integer**| page through results, maximum 10 pages &lt;br&gt; Default value: 1 | [optional] [default to null] |

### Return type

[**Pool**](../Models/Pool.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="latestPoolsNetwork"></a>
# **latestPoolsNetwork**
> Pool latestPoolsNetwork(network, include, page)

New Pools by Network

    This endpoint allows you to **query all the latest pools based on provided network**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id &lt;br&gt; *refers to [/networks](/reference/networks-list) | [default to null] |
| **include** | **String**| attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60; | [optional] [default to null] |
| **page** | **Integer**| page through results, maximum 10 pages &lt;br&gt; Default value: 1 | [optional] [default to null] |

### Return type

[**Pool**](../Models/Pool.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="poolAddress"></a>
# **poolAddress**
> Pool poolAddress(network, address, include)

Specific Pool Data by Pool Address

    This endpoint allows you to **query the specific pool based on the provided network and pool address**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id &lt;br&gt; *refers to [/networks](/reference/networks-list) | [default to null] |
| **address** | **String**| pool address | [default to null] |
| **include** | **String**| attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60; | [optional] [default to null] |

### Return type

[**Pool**](../Models/Pool.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="poolsAddresses"></a>
# **poolsAddresses**
> Pool poolsAddresses(network, addresses, include)

Multiple Pools Data by Pool Addresses

    This endpoint allows you to **query multiple pools based on the provided network and pool address**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id &lt;br&gt; *refers to [/networks](/reference/networks-list) | [default to null] |
| **addresses** | **String**| pool contract address, comma-separated if more than one pool contract address, maximum 30 addresses | [default to null] |
| **include** | **String**| attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60; | [optional] [default to null] |

### Return type

[**Pool**](../Models/Pool.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="searchPools"></a>
# **searchPools**
> Pool searchPools(query, network, include, page)

Search Pools

    This endpoint allows you to **search for pools on a network**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **query** | **String**| search query | [optional] [default to null] |
| **network** | **String**| network id &lt;br&gt; *refers to [/networks](/reference/networks-list) | [optional] [default to null] |
| **include** | **String**| attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60; | [optional] [default to null] |
| **page** | **Integer**| page through results, maximum 10 pages &lt;br&gt; Default value: 1 | [optional] [default to null] |

### Return type

[**Pool**](../Models/Pool.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="topPoolsDex"></a>
# **topPoolsDex**
> Pool topPoolsDex(network, dex, include, page, sort)

Top Pools by Dex

    This endpoint allows you to **query all the top pools based on the provided network and decentralized exchange (dex)**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id &lt;br&gt; *refers to [/networks](/reference/networks-list) | [default to null] |
| **dex** | **String**| dex id &lt;br&gt; *refers to [/networks/{network}/dexes](/reference/dexes-list) | [default to null] |
| **include** | **String**| attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60; | [optional] [default to null] |
| **page** | **Integer**| page through results, maximum 10 pages &lt;br&gt; Default value: 1 | [optional] [default to null] |
| **sort** | **String**| sort the pools by field &lt;br&gt; Default value: h24_tx_count_desc | [optional] [default to null] [enum: h24_tx_count_desc, h24_volume_usd_desc] |

### Return type

[**Pool**](../Models/Pool.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="topPoolsNetwork"></a>
# **topPoolsNetwork**
> Pool topPoolsNetwork(network, include, page, sort)

Top Pools by Network

    This endpoint allows you to **query all the top pools based on the provided network**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id &lt;br&gt; *refers to [/networks](/reference/networks-list) | [default to null] |
| **include** | **String**| attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60; | [optional] [default to null] |
| **page** | **Integer**| page through results, maximum 10 pages &lt;br&gt; Default value: 1 | [optional] [default to null] |
| **sort** | **String**| sort the pools by field &lt;br&gt; Default value: h24_tx_count_desc | [optional] [default to null] [enum: h24_tx_count_desc, h24_volume_usd_desc] |

### Return type

[**Pool**](../Models/Pool.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="trendingPoolsList"></a>
# **trendingPoolsList**
> Pool trendingPoolsList(include, page)

Trending Pools List

    This endpoint allows you to **query all the trending pools across all networks on GeckoTerminal**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **include** | **String**| attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60;, &#x60;network&#x60;.  &lt;br&gt; Example: &#x60;base_token&#x60; or &#x60;base_token,dex&#x60;  | [optional] [default to null] |
| **page** | **Integer**| page through results, maximum 10 pages  &lt;br&gt; Default value: 1 | [optional] [default to null] |

### Return type

[**Pool**](../Models/Pool.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="trendingPoolsNetwork"></a>
# **trendingPoolsNetwork**
> Pool trendingPoolsNetwork(network, include, page)

Trending Pools by Network

    This endpoint allows you to **query the trending pools based on the provided network**

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **network** | **String**| network id &lt;br&gt; *refers to [/networks](/reference/networks-list) | [default to null] |
| **include** | **String**| attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60; | [optional] [default to null] |
| **page** | **Integer**| page through results, maximum 10 pages &lt;br&gt; Default value: 1 | [optional] [default to null] |

### Return type

[**Pool**](../Models/Pool.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

