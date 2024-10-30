# Documentation for CoinGecko Public API V3

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.coingecko.com/api/v3*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *AssetPlatformsApi* | [**assetPlatformsList**](Apis/AssetPlatformsApi.md#assetplatformslist) | **GET** /asset_platforms | Asset Platforms List (ID Map) |
| *CategoriesApi* | [**coinsCategories**](Apis/CategoriesApi.md#coinscategories) | **GET** /coins/categories | Coins Categories List with Market Data |
*CategoriesApi* | [**coinsCategoriesList**](Apis/CategoriesApi.md#coinscategorieslist) | **GET** /coins/categories/list | Coins Categories List (ID Map) |
| *CoinsApi* | [**coinsId**](Apis/CoinsApi.md#coinsid) | **GET** /coins/{id} | Coin Data by ID |
*CoinsApi* | [**coinsIdHistory**](Apis/CoinsApi.md#coinsidhistory) | **GET** /coins/{id}/history | Coin Historical Data by ID |
*CoinsApi* | [**coinsIdMarketChart**](Apis/CoinsApi.md#coinsidmarketchart) | **GET** /coins/{id}/market_chart | Coin Historical Chart Data by ID |
*CoinsApi* | [**coinsIdMarketChartRange**](Apis/CoinsApi.md#coinsidmarketchartrange) | **GET** /coins/{id}/market_chart/range | Coin Historical Chart Data within Time Range by ID |
*CoinsApi* | [**coinsIdOhlc**](Apis/CoinsApi.md#coinsidohlc) | **GET** /coins/{id}/ohlc | Coin OHLC Chart by ID |
*CoinsApi* | [**coinsIdTickers**](Apis/CoinsApi.md#coinsidtickers) | **GET** /coins/{id}/tickers | Coin Tickers by ID |
*CoinsApi* | [**coinsList**](Apis/CoinsApi.md#coinslist) | **GET** /coins/list | Coins List (ID Map) |
*CoinsApi* | [**coinsMarkets**](Apis/CoinsApi.md#coinsmarkets) | **GET** /coins/markets | Coins List with Market Data |
| *CompaniesBetaApi* | [**companiesPublicTreasury**](Apis/CompaniesBetaApi.md#companiespublictreasury) | **GET** /companies/public_treasury/{coin_id} | Public Companies Holdings |
| *ContractApi* | [**coinsContractAddress**](Apis/ContractApi.md#coinscontractaddress) | **GET** /coins/{id}/contract/{contract_address} | Coin Data by Token Address |
*ContractApi* | [**contractAddressMarketChart**](Apis/ContractApi.md#contractaddressmarketchart) | **GET** /coins/{id}/contract/{contract_address}/market_chart | Coin Historical Chart Data by Token Address |
*ContractApi* | [**contractAddressMarketChartRange**](Apis/ContractApi.md#contractaddressmarketchartrange) | **GET** /coins/{id}/contract/{contract_address}/market_chart/range | Coin Historical Chart Data within Time Range by Token Address |
| *DerivativesApi* | [**derivativesExchanges**](Apis/DerivativesApi.md#derivativesexchanges) | **GET** /derivatives/exchanges | Derivatives Exchanges List with Data |
*DerivativesApi* | [**derivativesExchangesId**](Apis/DerivativesApi.md#derivativesexchangesid) | **GET** /derivatives/exchanges/{id} | Derivatives Exchange Data by ID |
*DerivativesApi* | [**derivativesExchangesList**](Apis/DerivativesApi.md#derivativesexchangeslist) | **GET** /derivatives/exchanges/list | Derivatives Exchanges List (ID Map) |
*DerivativesApi* | [**derivativesTickers**](Apis/DerivativesApi.md#derivativestickers) | **GET** /derivatives | Derivatives Tickers List |
| *ExchangeRatesApi* | [**exchangeRates**](Apis/ExchangeRatesApi.md#exchangerates) | **GET** /exchange_rates | BTC-to-Currency Exchange Rates |
| *ExchangesApi* | [**exchanges**](Apis/ExchangesApi.md#exchanges) | **GET** /exchanges | Exchanges List with data |
*ExchangesApi* | [**exchangesId**](Apis/ExchangesApi.md#exchangesid) | **GET** /exchanges/{id} | Exchange Data by ID |
*ExchangesApi* | [**exchangesIdTickers**](Apis/ExchangesApi.md#exchangesidtickers) | **GET** /exchanges/{id}/tickers | Exchange Tickers by ID |
*ExchangesApi* | [**exchangesIdVolumeChart**](Apis/ExchangesApi.md#exchangesidvolumechart) | **GET** /exchanges/{id}/volume_chart | Exchange Volume Chart by ID |
*ExchangesApi* | [**exchangesList**](Apis/ExchangesApi.md#exchangeslist) | **GET** /exchanges/list | Exchanges List (ID Map) |
| *GlobalApi* | [**cryptoGlobal**](Apis/GlobalApi.md#cryptoglobal) | **GET** /global | Crypto Global Market Data |
*GlobalApi* | [**globalDeFi**](Apis/GlobalApi.md#globaldefi) | **GET** /global/decentralized_finance_defi | Global De-Fi Market Data |
| *NFTsBetaApi* | [**nftsContractAddress**](Apis/NFTsBetaApi.md#nftscontractaddress) | **GET** /nfts/{asset_platform_id}/contract/{contract_address} | NFTs Collection Data by Contract Address |
*NFTsBetaApi* | [**nftsId**](Apis/NFTsBetaApi.md#nftsid) | **GET** /nfts/{id} | NFTs Collection Data by ID |
*NFTsBetaApi* | [**nftsList**](Apis/NFTsBetaApi.md#nftslist) | **GET** /nfts/list | NFTs List (ID Map) |
| *PingApi* | [**pingServer**](Apis/PingApi.md#pingserver) | **GET** /ping | Check API server status |
| *SearchApi* | [**searchData**](Apis/SearchApi.md#searchdata) | **GET** /search | Search Queries |
| *SimpleApi* | [**simplePrice**](Apis/SimpleApi.md#simpleprice) | **GET** /simple/price | Coin Price by IDs |
*SimpleApi* | [**simpleSupportedCurrencies**](Apis/SimpleApi.md#simplesupportedcurrencies) | **GET** /simple/supported_vs_currencies | Supported Currencies List |
*SimpleApi* | [**simpleTokenPrice**](Apis/SimpleApi.md#simpletokenprice) | **GET** /simple/token_price/{id} | Coin Price by Token Addresses |
| *TrendingApi* | [**trendingSearch**](Apis/TrendingApi.md#trendingsearch) | **GET** /search/trending | Trending Search List |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [AssetPlatforms](./Models/AssetPlatforms.md)
 - [Categories](./Models/Categories.md)
 - [CategoriesList](./Models/CategoriesList.md)
 - [CoinsContractAddress](./Models/CoinsContractAddress.md)
 - [CoinsDataBase](./Models/CoinsDataBase.md)
 - [CoinsDataBase_community_data](./Models/CoinsDataBase_community_data.md)
 - [CoinsDataBase_developer_data](./Models/CoinsDataBase_developer_data.md)
 - [CoinsDataBase_developer_data_code_additions_deletions_4_weeks](./Models/CoinsDataBase_developer_data_code_additions_deletions_4_weeks.md)
 - [CoinsDataBase_image](./Models/CoinsDataBase_image.md)
 - [CoinsDataBase_links](./Models/CoinsDataBase_links.md)
 - [CoinsDataBase_links_repos_url](./Models/CoinsDataBase_links_repos_url.md)
 - [CoinsDataBase_market_data](./Models/CoinsDataBase_market_data.md)
 - [CoinsDataBase_market_data_ath](./Models/CoinsDataBase_market_data_ath.md)
 - [CoinsDataBase_market_data_ath_change_percentage](./Models/CoinsDataBase_market_data_ath_change_percentage.md)
 - [CoinsDataBase_market_data_ath_date](./Models/CoinsDataBase_market_data_ath_date.md)
 - [CoinsDataBase_market_data_atl](./Models/CoinsDataBase_market_data_atl.md)
 - [CoinsDataBase_market_data_atl_change_percentage](./Models/CoinsDataBase_market_data_atl_change_percentage.md)
 - [CoinsDataBase_market_data_atl_date](./Models/CoinsDataBase_market_data_atl_date.md)
 - [CoinsDataBase_market_data_current_price](./Models/CoinsDataBase_market_data_current_price.md)
 - [CoinsDataBase_market_data_fully_diluted_valuation](./Models/CoinsDataBase_market_data_fully_diluted_valuation.md)
 - [CoinsDataBase_market_data_high_24h](./Models/CoinsDataBase_market_data_high_24h.md)
 - [CoinsDataBase_market_data_low_24h](./Models/CoinsDataBase_market_data_low_24h.md)
 - [CoinsDataBase_market_data_market_cap](./Models/CoinsDataBase_market_data_market_cap.md)
 - [CoinsDataBase_market_data_market_cap_change_24h_in_currency](./Models/CoinsDataBase_market_data_market_cap_change_24h_in_currency.md)
 - [CoinsDataBase_market_data_market_cap_change_percentage_24h_in_currency](./Models/CoinsDataBase_market_data_market_cap_change_percentage_24h_in_currency.md)
 - [CoinsDataBase_market_data_price_change_percentage_14d_in_currency](./Models/CoinsDataBase_market_data_price_change_percentage_14d_in_currency.md)
 - [CoinsDataBase_market_data_price_change_percentage_1h_in_currency](./Models/CoinsDataBase_market_data_price_change_percentage_1h_in_currency.md)
 - [CoinsDataBase_market_data_price_change_percentage_1y_in_currency](./Models/CoinsDataBase_market_data_price_change_percentage_1y_in_currency.md)
 - [CoinsDataBase_market_data_price_change_percentage_200d_in_currency](./Models/CoinsDataBase_market_data_price_change_percentage_200d_in_currency.md)
 - [CoinsDataBase_market_data_price_change_percentage_24h_in_currency](./Models/CoinsDataBase_market_data_price_change_percentage_24h_in_currency.md)
 - [CoinsDataBase_market_data_price_change_percentage_30d_in_currency](./Models/CoinsDataBase_market_data_price_change_percentage_30d_in_currency.md)
 - [CoinsDataBase_market_data_price_change_percentage_60d_in_currency](./Models/CoinsDataBase_market_data_price_change_percentage_60d_in_currency.md)
 - [CoinsDataBase_market_data_price_change_percentage_7d_in_currency](./Models/CoinsDataBase_market_data_price_change_percentage_7d_in_currency.md)
 - [CoinsDataBase_market_data_total_volume](./Models/CoinsDataBase_market_data_total_volume.md)
 - [CoinsDataBase_tickers_inner](./Models/CoinsDataBase_tickers_inner.md)
 - [CoinsDataBase_tickers_inner_converted_last](./Models/CoinsDataBase_tickers_inner_converted_last.md)
 - [CoinsDataBase_tickers_inner_converted_volume](./Models/CoinsDataBase_tickers_inner_converted_volume.md)
 - [CoinsDataBase_tickers_inner_market](./Models/CoinsDataBase_tickers_inner_market.md)
 - [CoinsHistoricalData](./Models/CoinsHistoricalData.md)
 - [CoinsHistoricalData_community_data](./Models/CoinsHistoricalData_community_data.md)
 - [CoinsHistoricalData_developer_data](./Models/CoinsHistoricalData_developer_data.md)
 - [CoinsHistoricalData_developer_data_code_additions_deletions_4_weeks](./Models/CoinsHistoricalData_developer_data_code_additions_deletions_4_weeks.md)
 - [CoinsHistoricalData_image](./Models/CoinsHistoricalData_image.md)
 - [CoinsHistoricalData_market_data](./Models/CoinsHistoricalData_market_data.md)
 - [CoinsHistoricalData_market_data_current_price](./Models/CoinsHistoricalData_market_data_current_price.md)
 - [CoinsHistoricalData_market_data_market_cap](./Models/CoinsHistoricalData_market_data_market_cap.md)
 - [CoinsHistoricalData_market_data_total_volume](./Models/CoinsHistoricalData_market_data_total_volume.md)
 - [CoinsHistoricalData_public_interest_stats](./Models/CoinsHistoricalData_public_interest_stats.md)
 - [CoinsID](./Models/CoinsID.md)
 - [CoinsList_inner](./Models/CoinsList_inner.md)
 - [CoinsMarketChart](./Models/CoinsMarketChart.md)
 - [CoinsMarketChartRange](./Models/CoinsMarketChartRange.md)
 - [CoinsMarkets](./Models/CoinsMarkets.md)
 - [CoinsMarkets_sparkline_in_7d](./Models/CoinsMarkets_sparkline_in_7d.md)
 - [CoinsTickers](./Models/CoinsTickers.md)
 - [CoinsTickers_tickers_inner](./Models/CoinsTickers_tickers_inner.md)
 - [CoinsTickers_tickers_inner_market](./Models/CoinsTickers_tickers_inner_market.md)
 - [CompaniesTreasury](./Models/CompaniesTreasury.md)
 - [CompaniesTreasury_companies_inner](./Models/CompaniesTreasury_companies_inner.md)
 - [DerivativesExchanges](./Models/DerivativesExchanges.md)
 - [DerivativesExchangesID](./Models/DerivativesExchangesID.md)
 - [DerivativesExchangesList](./Models/DerivativesExchangesList.md)
 - [DerivativesTickersList](./Models/DerivativesTickersList.md)
 - [ExchangeData](./Models/ExchangeData.md)
 - [ExchangeRates](./Models/ExchangeRates.md)
 - [ExchangeRates_rates_value](./Models/ExchangeRates_rates_value.md)
 - [ExchangeTickers](./Models/ExchangeTickers.md)
 - [Exchanges](./Models/Exchanges.md)
 - [ExchangesList](./Models/ExchangesList.md)
 - [Global](./Models/Global.md)
 - [GlobalDeFi](./Models/GlobalDeFi.md)
 - [GlobalDeFi_data](./Models/GlobalDeFi_data.md)
 - [Global_data](./Models/Global_data.md)
 - [Global_data_market_cap_percentage](./Models/Global_data_market_cap_percentage.md)
 - [Global_data_total_market_cap](./Models/Global_data_total_market_cap.md)
 - [Global_data_total_volume](./Models/Global_data_total_volume.md)
 - [NFTData](./Models/NFTData.md)
 - [NFTData_ath](./Models/NFTData_ath.md)
 - [NFTData_ath_change_percentage](./Models/NFTData_ath_change_percentage.md)
 - [NFTData_ath_date](./Models/NFTData_ath_date.md)
 - [NFTData_banner_image](./Models/NFTData_banner_image.md)
 - [NFTData_explorers_inner](./Models/NFTData_explorers_inner.md)
 - [NFTData_floor_price](./Models/NFTData_floor_price.md)
 - [NFTData_floor_price_14d_percentage_change](./Models/NFTData_floor_price_14d_percentage_change.md)
 - [NFTData_floor_price_1y_percentage_change](./Models/NFTData_floor_price_1y_percentage_change.md)
 - [NFTData_floor_price_24h_percentage_change](./Models/NFTData_floor_price_24h_percentage_change.md)
 - [NFTData_floor_price_30d_percentage_change](./Models/NFTData_floor_price_30d_percentage_change.md)
 - [NFTData_floor_price_60d_percentage_change](./Models/NFTData_floor_price_60d_percentage_change.md)
 - [NFTData_floor_price_7d_percentage_change](./Models/NFTData_floor_price_7d_percentage_change.md)
 - [NFTData_image](./Models/NFTData_image.md)
 - [NFTData_links](./Models/NFTData_links.md)
 - [NFTData_market_cap](./Models/NFTData_market_cap.md)
 - [NFTData_market_cap_24h_percentage_change](./Models/NFTData_market_cap_24h_percentage_change.md)
 - [NFTData_volume_24h](./Models/NFTData_volume_24h.md)
 - [NFTData_volume_24h_percentage_change](./Models/NFTData_volume_24h_percentage_change.md)
 - [NFTList](./Models/NFTList.md)
 - [Ping](./Models/Ping.md)
 - [Search](./Models/Search.md)
 - [Search_categories_inner](./Models/Search_categories_inner.md)
 - [Search_coins_inner](./Models/Search_coins_inner.md)
 - [Search_exchanges_inner](./Models/Search_exchanges_inner.md)
 - [Search_nfts_inner](./Models/Search_nfts_inner.md)
 - [SimplePrice](./Models/SimplePrice.md)
 - [TrendingSearch](./Models/TrendingSearch.md)
 - [TrendingSearch_categories_inner](./Models/TrendingSearch_categories_inner.md)
 - [TrendingSearch_categories_inner_data](./Models/TrendingSearch_categories_inner_data.md)
 - [TrendingSearch_categories_inner_data_market_cap_change_percentage_24h](./Models/TrendingSearch_categories_inner_data_market_cap_change_percentage_24h.md)
 - [TrendingSearch_coins_inner](./Models/TrendingSearch_coins_inner.md)
 - [TrendingSearch_coins_inner_data](./Models/TrendingSearch_coins_inner_data.md)
 - [TrendingSearch_coins_inner_data_price_change_percentage_24h](./Models/TrendingSearch_coins_inner_data_price_change_percentage_24h.md)
 - [TrendingSearch_nfts_inner](./Models/TrendingSearch_nfts_inner.md)
 - [TrendingSearch_nfts_inner_data](./Models/TrendingSearch_nfts_inner_data.md)
 - [simple_price_200_response](./Models/simple_price_200_response.md)
 - [simple_token_price_200_response](./Models/simple_token_price_200_response.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="apiKeyAuth"></a>
### apiKeyAuth

- **Type**: API key
- **API key parameter name**: x-cg-demo-api-key
- **Location**: HTTP header

<a name="apiKeyQueryParam"></a>
### apiKeyQueryParam

- **Type**: API key
- **API key parameter name**: x_cg_demo_api_key
- **Location**: URL query string

