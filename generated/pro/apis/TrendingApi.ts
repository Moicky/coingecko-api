/* tslint:disable */
/* eslint-disable */
/**
 * CoinGecko Pro API V3
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  TrendingSearch,
} from '../models/index';
import {
    TrendingSearchFromJSON,
    TrendingSearchToJSON,
} from '../models/index';

/**
 * TrendingApi - interface
 * 
 * @export
 * @interface TrendingApiInterface
 */
export interface TrendingApiInterface {
    /**
     * This endpoint allows you **query trending search coins, nfts and categories on CoinGecko in the last 24 hours**.
     * @summary Trending Search List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrendingApiInterface
     */
    trendingSearchRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TrendingSearch>>;

    /**
     * This endpoint allows you **query trending search coins, nfts and categories on CoinGecko in the last 24 hours**.
     * Trending Search List
     */
    trendingSearch(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TrendingSearch>;

}

/**
 * 
 */
export class TrendingApi extends runtime.BaseAPI implements TrendingApiInterface {

    /**
     * This endpoint allows you **query trending search coins, nfts and categories on CoinGecko in the last 24 hours**.
     * Trending Search List
     */
    async trendingSearchRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TrendingSearch>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/search/trending`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TrendingSearchFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you **query trending search coins, nfts and categories on CoinGecko in the last 24 hours**.
     * Trending Search List
     */
    async trendingSearch(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TrendingSearch> {
        const response = await this.trendingSearchRaw(initOverrides);
        return await response.value();
    }

}
