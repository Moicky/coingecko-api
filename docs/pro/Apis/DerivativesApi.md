# DerivativesApi

All URIs are relative to *https://pro-api.coingecko.com/api/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**derivativesExchanges**](DerivativesApi.md#derivativesExchanges) | **GET** /derivatives/exchanges | Derivatives Exchanges List with Data |
| [**derivativesExchangesId**](DerivativesApi.md#derivativesExchangesId) | **GET** /derivatives/exchanges/{id} | Derivatives Exchange Data by ID |
| [**derivativesExchangesList**](DerivativesApi.md#derivativesExchangesList) | **GET** /derivatives/exchanges/list | Derivatives Exchanges List (ID Map) |
| [**derivativesTickers**](DerivativesApi.md#derivativesTickers) | **GET** /derivatives | Derivatives Tickers List |


<a name="derivativesExchanges"></a>
# **derivativesExchanges**
> DerivativesExchanges derivativesExchanges(order, per\_page, page)

Derivatives Exchanges List with Data

    This endpoint allows you to **query all the derivatives exchanges with related data (id, name, open interest, .... etc) on CoinGecko**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **order** | **String**| use this to sort the order of responses, default: open_interest_btc_desc | [optional] [default to null] [enum: name_asc, name_desc, open_interest_btc_asc, open_interest_btc_desc, trade_volume_24h_btc_asc, trade_volume_24h_btc_desc] |
| **per\_page** | **BigDecimal**| total results per page | [optional] [default to null] |
| **page** | **BigDecimal**| page through results, default: 1 | [optional] [default to null] |

### Return type

[**DerivativesExchanges**](../Models/DerivativesExchanges.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="derivativesExchangesId"></a>
# **derivativesExchangesId**
> DerivativesExchangesID derivativesExchangesId(id, include\_tickers)

Derivatives Exchange Data by ID

    This endpoint allows you to **query the derivatives exchange’s related data (id, name, open interest, .... etc) based on the exchanges’ id**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| derivative exchange id &lt;br&gt; *refers to [&#x60;/derivatives/exchanges/list&#x60;](/reference/derivatives-exchanges-list). | [default to null] |
| **include\_tickers** | **String**| include tickers data | [optional] [default to null] [enum: all, unexpired] |

### Return type

[**DerivativesExchangesID**](../Models/DerivativesExchangesID.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="derivativesExchangesList"></a>
# **derivativesExchangesList**
> DerivativesExchangesList derivativesExchangesList()

Derivatives Exchanges List (ID Map)

    This endpoint allows you to **query all the derivatives exchanges with id and name on CoinGecko**.

### Parameters
This endpoint does not need any parameter.

### Return type

[**DerivativesExchangesList**](../Models/DerivativesExchangesList.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="derivativesTickers"></a>
# **derivativesTickers**
> DerivativesTickersList derivativesTickers()

Derivatives Tickers List

    This endpoint allows you to **query all the tickers from derivatives exchanges on CoinGecko**.

### Parameters
This endpoint does not need any parameter.

### Return type

[**DerivativesTickersList**](../Models/DerivativesTickersList.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

