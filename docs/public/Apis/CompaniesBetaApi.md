# CompaniesBetaApi

All URIs are relative to *https://api.coingecko.com/api/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**companiesPublicTreasury**](CompaniesBetaApi.md#companiesPublicTreasury) | **GET** /companies/public_treasury/{coin_id} | Public Companies Holdings |


<a name="companiesPublicTreasury"></a>
# **companiesPublicTreasury**
> CompaniesTreasury companiesPublicTreasury(coin\_id)

Public Companies Holdings

    This endpoint allows you **query public companies’ bitcoin or ethereum holdings**.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **coin\_id** | **String**| coin id | [default to null] [enum: bitcoin, ethereum] |

### Return type

[**CompaniesTreasury**](../Models/CompaniesTreasury.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

