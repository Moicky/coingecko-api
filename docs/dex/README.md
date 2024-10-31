# Documentation for On Chain DEX API (Beta)

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://pro-api.coingecko.com/api/v3/onchain*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *DexesApi* | [**dexesList**](Apis/DexesApi.md#dexeslist) | **GET** /networks/{network}/dexes | Supported Dexes List by Network (ID Map) |
| *NetworksApi* | [**networksList**](Apis/NetworksApi.md#networkslist) | **GET** /networks | Supported Networks List (ID Map) |
| *OHLCVApi* | [**poolOhlcvContractAddress**](Apis/OHLCVApi.md#poolohlcvcontractaddress) | **GET** /networks/{network}/pools/{pool_address}/ohlcv/{timeframe} | Pool OHLCV chart by Pool Address |
| *PoolsApi* | [**latestPoolsList**](Apis/PoolsApi.md#latestpoolslist) | **GET** /networks/new_pools | New Pools List |
*PoolsApi* | [**latestPoolsNetwork**](Apis/PoolsApi.md#latestpoolsnetwork) | **GET** /networks/{network}/new_pools | New Pools by Network |
*PoolsApi* | [**poolAddress**](Apis/PoolsApi.md#pooladdress) | **GET** /networks/{network}/pools/{address} | Specific Pool Data by Pool Address |
*PoolsApi* | [**poolsAddresses**](Apis/PoolsApi.md#poolsaddresses) | **GET** /networks/{network}/pools/multi/{addresses} | Multiple Pools Data by Pool Addresses |
*PoolsApi* | [**searchPools**](Apis/PoolsApi.md#searchpools) | **GET** /search/pools | Search Pools |
*PoolsApi* | [**topPoolsDex**](Apis/PoolsApi.md#toppoolsdex) | **GET** /networks/{network}/dexes/{dex}/pools | Top Pools by Dex |
*PoolsApi* | [**topPoolsNetwork**](Apis/PoolsApi.md#toppoolsnetwork) | **GET** /networks/{network}/pools | Top Pools by Network |
*PoolsApi* | [**trendingPoolsList**](Apis/PoolsApi.md#trendingpoolslist) | **GET** /networks/trending_pools | Trending Pools List |
*PoolsApi* | [**trendingPoolsNetwork**](Apis/PoolsApi.md#trendingpoolsnetwork) | **GET** /networks/{network}/trending_pools | Trending Pools by Network |
| *SimpleApi* | [**onchainSimplePrice**](Apis/SimpleApi.md#onchainsimpleprice) | **GET** /simple/networks/{network}/token_price/{addresses} | Token Price by Token Addresses |
| *TokensApi* | [**poolTokenInfoContractAddress**](Apis/TokensApi.md#pooltokeninfocontractaddress) | **GET** /networks/{network}/pools/{pool_address}/info | Pool Tokens Info by Pool Address |
*TokensApi* | [**tokenDataContractAddress**](Apis/TokensApi.md#tokendatacontractaddress) | **GET** /networks/{network}/tokens/{address} | Token Data by Token Address |
*TokensApi* | [**tokenInfoContractAddress**](Apis/TokensApi.md#tokeninfocontractaddress) | **GET** /networks/{network}/tokens/{address}/info | Token Info by Token Address |
*TokensApi* | [**tokensDataContractAddresses**](Apis/TokensApi.md#tokensdatacontractaddresses) | **GET** /networks/{network}/tokens/multi/{addresses} | Tokens Data by Token Addresses |
*TokensApi* | [**tokensInfoRecentUpdated**](Apis/TokensApi.md#tokensinforecentupdated) | **GET** /tokens/info_recently_updated | Most Recently Updated Tokens List |
*TokensApi* | [**topPoolsContractAddress**](Apis/TokensApi.md#toppoolscontractaddress) | **GET** /networks/{network}/tokens/{token_address}/pools | Top Pools by Token Address |
| *TradesApi* | [**poolTradesContractAddress**](Apis/TradesApi.md#pooltradescontractaddress) | **GET** /networks/{network}/pools/{pool_address}/trades | Past 24 Hour Trades by Pool Address |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [DexesList](./Models/DexesList.md)
 - [DexesList_data_inner](./Models/DexesList_data_inner.md)
 - [DexesList_data_inner_attributes](./Models/DexesList_data_inner_attributes.md)
 - [NetworksList](./Models/NetworksList.md)
 - [NetworksList_data_inner](./Models/NetworksList_data_inner.md)
 - [NetworksList_data_inner_attributes](./Models/NetworksList_data_inner_attributes.md)
 - [OHLCV](./Models/OHLCV.md)
 - [OHLCV_data](./Models/OHLCV_data.md)
 - [OHLCV_data_attributes](./Models/OHLCV_data_attributes.md)
 - [OHLCV_meta](./Models/OHLCV_meta.md)
 - [OHLCV_meta_base](./Models/OHLCV_meta_base.md)
 - [Pool](./Models/Pool.md)
 - [PoolTokensInfo](./Models/PoolTokensInfo.md)
 - [Pool_data_inner](./Models/Pool_data_inner.md)
 - [Pool_data_inner_attributes](./Models/Pool_data_inner_attributes.md)
 - [Pool_data_inner_attributes_price_change_percentage](./Models/Pool_data_inner_attributes_price_change_percentage.md)
 - [Pool_data_inner_attributes_transactions](./Models/Pool_data_inner_attributes_transactions.md)
 - [Pool_data_inner_attributes_transactions_m5](./Models/Pool_data_inner_attributes_transactions_m5.md)
 - [Pool_data_inner_relationships](./Models/Pool_data_inner_relationships.md)
 - [Pool_data_inner_relationships_base_token](./Models/Pool_data_inner_relationships_base_token.md)
 - [Pool_data_inner_relationships_base_token_data](./Models/Pool_data_inner_relationships_base_token_data.md)
 - [Pool_included_inner](./Models/Pool_included_inner.md)
 - [Pool_included_inner_attributes](./Models/Pool_included_inner_attributes.md)
 - [SimplePrice](./Models/SimplePrice.md)
 - [SimplePrice_data](./Models/SimplePrice_data.md)
 - [SimplePrice_data_attributes](./Models/SimplePrice_data_attributes.md)
 - [Token](./Models/Token.md)
 - [TokenInfo](./Models/TokenInfo.md)
 - [TokenInfoRecentlyUpdated](./Models/TokenInfoRecentlyUpdated.md)
 - [TokenInfo_data](./Models/TokenInfo_data.md)
 - [TokenInfo_data_attributes](./Models/TokenInfo_data_attributes.md)
 - [Token_data](./Models/Token_data.md)
 - [Token_data_attributes](./Models/Token_data_attributes.md)
 - [Token_data_attributes_volume_usd](./Models/Token_data_attributes_volume_usd.md)
 - [Token_data_relationships](./Models/Token_data_relationships.md)
 - [Token_data_relationships_top_pools](./Models/Token_data_relationships_top_pools.md)
 - [Token_included_inner](./Models/Token_included_inner.md)
 - [Token_included_inner_attributes](./Models/Token_included_inner_attributes.md)
 - [Token_included_inner_relationships](./Models/Token_included_inner_relationships.md)
 - [Trades](./Models/Trades.md)
 - [Trades_data_inner](./Models/Trades_data_inner.md)
 - [Trades_data_inner_attributes](./Models/Trades_data_inner_attributes.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="apiKeyAuth"></a>
### apiKeyAuth

- **Type**: API key
- **API key parameter name**: x-cg-pro-api-key
- **Location**: HTTP header

<a name="apiKeyQueryParam"></a>
### apiKeyQueryParam

- **Type**: API key
- **API key parameter name**: x_cg_pro_api_key
- **Location**: URL query string

