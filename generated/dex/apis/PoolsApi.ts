/* tslint:disable */
/* eslint-disable */
/**
 * On Chain DEX API (Beta)
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2-beta
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Pool,
} from '../models/index';
import {
    PoolFromJSON,
    PoolToJSON,
} from '../models/index';

export interface LatestPoolsListRequest {
    include?: string;
    page?: number;
}

export interface LatestPoolsNetworkRequest {
    network: string;
    include?: string;
    page?: number;
}

export interface PoolAddressRequest {
    network: string;
    address: string;
    include?: string;
}

export interface PoolsAddressesRequest {
    network: string;
    addresses: string;
    include?: string;
}

export interface SearchPoolsRequest {
    query?: string;
    network?: string;
    include?: string;
    page?: number;
}

export interface TopPoolsDexRequest {
    network: string;
    dex: string;
    include?: string;
    page?: number;
    sort?: TopPoolsDexSortEnum;
}

export interface TopPoolsNetworkRequest {
    network: string;
    include?: string;
    page?: number;
    sort?: TopPoolsNetworkSortEnum;
}

export interface TrendingPoolsListRequest {
    include?: string;
    page?: number;
}

export interface TrendingPoolsNetworkRequest {
    network: string;
    include?: string;
    page?: number;
}

/**
 * PoolsApi - interface
 * 
 * @export
 * @interface PoolsApiInterface
 */
export interface PoolsApiInterface {
    /**
     * This endpoint allows you to **query all the latest pools across all networks on GeckoTerminal**
     * @summary New Pools List
     * @param {string} [include] attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60;, &#x60;network&#x60;
     * @param {number} [page] page through results, maximum 10 pages &lt;br&gt; Default value: 1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApiInterface
     */
    latestPoolsListRaw(requestParameters: LatestPoolsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>>;

    /**
     * This endpoint allows you to **query all the latest pools across all networks on GeckoTerminal**
     * New Pools List
     */
    latestPoolsList(requestParameters: LatestPoolsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool>;

    /**
     * This endpoint allows you to **query all the latest pools based on provided network**
     * @summary New Pools by Network
     * @param {string} network network id &lt;br&gt; *refers to [/networks](/reference/networks-list)
     * @param {string} [include] attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60;
     * @param {number} [page] page through results, maximum 10 pages &lt;br&gt; Default value: 1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApiInterface
     */
    latestPoolsNetworkRaw(requestParameters: LatestPoolsNetworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>>;

    /**
     * This endpoint allows you to **query all the latest pools based on provided network**
     * New Pools by Network
     */
    latestPoolsNetwork(requestParameters: LatestPoolsNetworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool>;

    /**
     * This endpoint allows you to **query the specific pool based on the provided network and pool address**
     * @summary Specific Pool Data by Pool Address
     * @param {string} network network id &lt;br&gt; *refers to [/networks](/reference/networks-list)
     * @param {string} address pool address
     * @param {string} [include] attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApiInterface
     */
    poolAddressRaw(requestParameters: PoolAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>>;

    /**
     * This endpoint allows you to **query the specific pool based on the provided network and pool address**
     * Specific Pool Data by Pool Address
     */
    poolAddress(requestParameters: PoolAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool>;

    /**
     * This endpoint allows you to **query multiple pools based on the provided network and pool address**
     * @summary Multiple Pools Data by Pool Addresses
     * @param {string} network network id &lt;br&gt; *refers to [/networks](/reference/networks-list)
     * @param {string} addresses pool contract address, comma-separated if more than one pool contract address, maximum 30 addresses
     * @param {string} [include] attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApiInterface
     */
    poolsAddressesRaw(requestParameters: PoolsAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>>;

    /**
     * This endpoint allows you to **query multiple pools based on the provided network and pool address**
     * Multiple Pools Data by Pool Addresses
     */
    poolsAddresses(requestParameters: PoolsAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool>;

    /**
     * This endpoint allows you to **search for pools on a network**
     * @summary Search Pools
     * @param {string} [query] search query
     * @param {string} [network] network id &lt;br&gt; *refers to [/networks](/reference/networks-list)
     * @param {string} [include] attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60;
     * @param {number} [page] page through results, maximum 10 pages &lt;br&gt; Default value: 1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApiInterface
     */
    searchPoolsRaw(requestParameters: SearchPoolsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>>;

    /**
     * This endpoint allows you to **search for pools on a network**
     * Search Pools
     */
    searchPools(requestParameters: SearchPoolsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool>;

    /**
     * This endpoint allows you to **query all the top pools based on the provided network and decentralized exchange (dex)**
     * @summary Top Pools by Dex
     * @param {string} network network id &lt;br&gt; *refers to [/networks](/reference/networks-list)
     * @param {string} dex dex id &lt;br&gt; *refers to [/networks/{network}/dexes](/reference/dexes-list)
     * @param {string} [include] attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60;
     * @param {number} [page] page through results, maximum 10 pages &lt;br&gt; Default value: 1
     * @param {'h24_tx_count_desc' | 'h24_volume_usd_desc'} [sort] sort the pools by field &lt;br&gt; Default value: h24_tx_count_desc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApiInterface
     */
    topPoolsDexRaw(requestParameters: TopPoolsDexRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>>;

    /**
     * This endpoint allows you to **query all the top pools based on the provided network and decentralized exchange (dex)**
     * Top Pools by Dex
     */
    topPoolsDex(requestParameters: TopPoolsDexRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool>;

    /**
     * This endpoint allows you to **query all the top pools based on the provided network**
     * @summary Top Pools by Network
     * @param {string} network network id &lt;br&gt; *refers to [/networks](/reference/networks-list)
     * @param {string} [include] attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60;
     * @param {number} [page] page through results, maximum 10 pages &lt;br&gt; Default value: 1
     * @param {'h24_tx_count_desc' | 'h24_volume_usd_desc'} [sort] sort the pools by field &lt;br&gt; Default value: h24_tx_count_desc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApiInterface
     */
    topPoolsNetworkRaw(requestParameters: TopPoolsNetworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>>;

    /**
     * This endpoint allows you to **query all the top pools based on the provided network**
     * Top Pools by Network
     */
    topPoolsNetwork(requestParameters: TopPoolsNetworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool>;

    /**
     * This endpoint allows you to **query all the trending pools across all networks on GeckoTerminal**
     * @summary Trending Pools List
     * @param {string} [include] attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60;, &#x60;network&#x60;.  &lt;br&gt; Example: &#x60;base_token&#x60; or &#x60;base_token,dex&#x60; 
     * @param {number} [page] page through results, maximum 10 pages  &lt;br&gt; Default value: 1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApiInterface
     */
    trendingPoolsListRaw(requestParameters: TrendingPoolsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>>;

    /**
     * This endpoint allows you to **query all the trending pools across all networks on GeckoTerminal**
     * Trending Pools List
     */
    trendingPoolsList(requestParameters: TrendingPoolsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool>;

    /**
     * This endpoint allows you to **query the trending pools based on the provided network**
     * @summary Trending Pools by Network
     * @param {string} network network id &lt;br&gt; *refers to [/networks](/reference/networks-list)
     * @param {string} [include] attributes to include, comma-separated if more than one to include &lt;br&gt; Available values: &#x60;base_token&#x60;, &#x60;quote_token&#x60;, &#x60;dex&#x60;
     * @param {number} [page] page through results, maximum 10 pages &lt;br&gt; Default value: 1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoolsApiInterface
     */
    trendingPoolsNetworkRaw(requestParameters: TrendingPoolsNetworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>>;

    /**
     * This endpoint allows you to **query the trending pools based on the provided network**
     * Trending Pools by Network
     */
    trendingPoolsNetwork(requestParameters: TrendingPoolsNetworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool>;

}

/**
 * 
 */
export class PoolsApi extends runtime.BaseAPI implements PoolsApiInterface {

    /**
     * This endpoint allows you to **query all the latest pools across all networks on GeckoTerminal**
     * New Pools List
     */
    async latestPoolsListRaw(requestParameters: LatestPoolsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>> {
        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/networks/new_pools`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PoolFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query all the latest pools across all networks on GeckoTerminal**
     * New Pools List
     */
    async latestPoolsList(requestParameters: LatestPoolsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool> {
        const response = await this.latestPoolsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query all the latest pools based on provided network**
     * New Pools by Network
     */
    async latestPoolsNetworkRaw(requestParameters: LatestPoolsNetworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>> {
        if (requestParameters['network'] == null) {
            throw new runtime.RequiredError(
                'network',
                'Required parameter "network" was null or undefined when calling latestPoolsNetwork().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/networks/{network}/new_pools`.replace(`{${"network"}}`, encodeURIComponent(String(requestParameters['network']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PoolFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query all the latest pools based on provided network**
     * New Pools by Network
     */
    async latestPoolsNetwork(requestParameters: LatestPoolsNetworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool> {
        const response = await this.latestPoolsNetworkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query the specific pool based on the provided network and pool address**
     * Specific Pool Data by Pool Address
     */
    async poolAddressRaw(requestParameters: PoolAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>> {
        if (requestParameters['network'] == null) {
            throw new runtime.RequiredError(
                'network',
                'Required parameter "network" was null or undefined when calling poolAddress().'
            );
        }

        if (requestParameters['address'] == null) {
            throw new runtime.RequiredError(
                'address',
                'Required parameter "address" was null or undefined when calling poolAddress().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/networks/{network}/pools/{address}`.replace(`{${"network"}}`, encodeURIComponent(String(requestParameters['network']))).replace(`{${"address"}}`, encodeURIComponent(String(requestParameters['address']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PoolFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query the specific pool based on the provided network and pool address**
     * Specific Pool Data by Pool Address
     */
    async poolAddress(requestParameters: PoolAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool> {
        const response = await this.poolAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query multiple pools based on the provided network and pool address**
     * Multiple Pools Data by Pool Addresses
     */
    async poolsAddressesRaw(requestParameters: PoolsAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>> {
        if (requestParameters['network'] == null) {
            throw new runtime.RequiredError(
                'network',
                'Required parameter "network" was null or undefined when calling poolsAddresses().'
            );
        }

        if (requestParameters['addresses'] == null) {
            throw new runtime.RequiredError(
                'addresses',
                'Required parameter "addresses" was null or undefined when calling poolsAddresses().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/networks/{network}/pools/multi/{addresses}`.replace(`{${"network"}}`, encodeURIComponent(String(requestParameters['network']))).replace(`{${"addresses"}}`, encodeURIComponent(String(requestParameters['addresses']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PoolFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query multiple pools based on the provided network and pool address**
     * Multiple Pools Data by Pool Addresses
     */
    async poolsAddresses(requestParameters: PoolsAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool> {
        const response = await this.poolsAddressesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **search for pools on a network**
     * Search Pools
     */
    async searchPoolsRaw(requestParameters: SearchPoolsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>> {
        const queryParameters: any = {};

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        if (requestParameters['network'] != null) {
            queryParameters['network'] = requestParameters['network'];
        }

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/search/pools`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PoolFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **search for pools on a network**
     * Search Pools
     */
    async searchPools(requestParameters: SearchPoolsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool> {
        const response = await this.searchPoolsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query all the top pools based on the provided network and decentralized exchange (dex)**
     * Top Pools by Dex
     */
    async topPoolsDexRaw(requestParameters: TopPoolsDexRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>> {
        if (requestParameters['network'] == null) {
            throw new runtime.RequiredError(
                'network',
                'Required parameter "network" was null or undefined when calling topPoolsDex().'
            );
        }

        if (requestParameters['dex'] == null) {
            throw new runtime.RequiredError(
                'dex',
                'Required parameter "dex" was null or undefined when calling topPoolsDex().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/networks/{network}/dexes/{dex}/pools`.replace(`{${"network"}}`, encodeURIComponent(String(requestParameters['network']))).replace(`{${"dex"}}`, encodeURIComponent(String(requestParameters['dex']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PoolFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query all the top pools based on the provided network and decentralized exchange (dex)**
     * Top Pools by Dex
     */
    async topPoolsDex(requestParameters: TopPoolsDexRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool> {
        const response = await this.topPoolsDexRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query all the top pools based on the provided network**
     * Top Pools by Network
     */
    async topPoolsNetworkRaw(requestParameters: TopPoolsNetworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>> {
        if (requestParameters['network'] == null) {
            throw new runtime.RequiredError(
                'network',
                'Required parameter "network" was null or undefined when calling topPoolsNetwork().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/networks/{network}/pools`.replace(`{${"network"}}`, encodeURIComponent(String(requestParameters['network']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PoolFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query all the top pools based on the provided network**
     * Top Pools by Network
     */
    async topPoolsNetwork(requestParameters: TopPoolsNetworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool> {
        const response = await this.topPoolsNetworkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query all the trending pools across all networks on GeckoTerminal**
     * Trending Pools List
     */
    async trendingPoolsListRaw(requestParameters: TrendingPoolsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>> {
        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/networks/trending_pools`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PoolFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query all the trending pools across all networks on GeckoTerminal**
     * Trending Pools List
     */
    async trendingPoolsList(requestParameters: TrendingPoolsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool> {
        const response = await this.trendingPoolsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query the trending pools based on the provided network**
     * Trending Pools by Network
     */
    async trendingPoolsNetworkRaw(requestParameters: TrendingPoolsNetworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Pool>> {
        if (requestParameters['network'] == null) {
            throw new runtime.RequiredError(
                'network',
                'Required parameter "network" was null or undefined when calling trendingPoolsNetwork().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['include'] != null) {
            queryParameters['include'] = requestParameters['include'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/networks/{network}/trending_pools`.replace(`{${"network"}}`, encodeURIComponent(String(requestParameters['network']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PoolFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query the trending pools based on the provided network**
     * Trending Pools by Network
     */
    async trendingPoolsNetwork(requestParameters: TrendingPoolsNetworkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Pool> {
        const response = await this.trendingPoolsNetworkRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const TopPoolsDexSortEnum = {
    TxCountDesc: 'h24_tx_count_desc',
    VolumeUsdDesc: 'h24_volume_usd_desc'
} as const;
export type TopPoolsDexSortEnum = typeof TopPoolsDexSortEnum[keyof typeof TopPoolsDexSortEnum];
/**
 * @export
 */
export const TopPoolsNetworkSortEnum = {
    TxCountDesc: 'h24_tx_count_desc',
    VolumeUsdDesc: 'h24_volume_usd_desc'
} as const;
export type TopPoolsNetworkSortEnum = typeof TopPoolsNetworkSortEnum[keyof typeof TopPoolsNetworkSortEnum];
