# GlobalApi

All URIs are relative to *https://api.coingecko.com/api/v3*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cryptoGlobal**](GlobalApi.md#cryptoGlobal) | **GET** /global | Crypto Global Market Data |
| [**globalDeFi**](GlobalApi.md#globalDeFi) | **GET** /global/decentralized_finance_defi | Global De-Fi Market Data |


<a name="cryptoGlobal"></a>
# **cryptoGlobal**
> Global cryptoGlobal()

Crypto Global Market Data

    This endpoint allows you **query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc**.

### Parameters
This endpoint does not need any parameter.

### Return type

[**Global**](../Models/Global.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="globalDeFi"></a>
# **globalDeFi**
> GlobalDeFi globalDeFi()

Global De-Fi Market Data

    This endpoint allows you **query top 100 cryptocurrency global decentralized finance (defi) data including defi market cap, trading volume**.

### Parameters
This endpoint does not need any parameter.

### Return type

[**GlobalDeFi**](../Models/GlobalDeFi.md)

### Authorization

[apiKeyQueryParam](../README.md#apiKeyQueryParam), [apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

