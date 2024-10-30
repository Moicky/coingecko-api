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
  Categories,
  CategoriesList,
} from '../models/index';
import {
    CategoriesFromJSON,
    CategoriesToJSON,
    CategoriesListFromJSON,
    CategoriesListToJSON,
} from '../models/index';

export interface CoinsCategoriesRequest {
    order?: CoinsCategoriesOrderEnum;
}

/**
 * 
 */
export class CategoriesApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to **query all the coins categories with market data (market cap, volume, etc.) on CoinGecko**.
     * Coins Categories List with Market Data
     */
    async coinsCategoriesRaw(requestParameters: CoinsCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Categories>> {
        const queryParameters: any = {};

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/coins/categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoriesFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query all the coins categories with market data (market cap, volume, etc.) on CoinGecko**.
     * Coins Categories List with Market Data
     */
    async coinsCategories(requestParameters: CoinsCategoriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Categories> {
        const response = await this.coinsCategoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query all the coins categories on CoinGecko**.
     * Coins Categories List (ID Map)
     */
    async coinsCategoriesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CategoriesList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/coins/categories/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoriesListFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query all the coins categories on CoinGecko**.
     * Coins Categories List (ID Map)
     */
    async coinsCategoriesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CategoriesList> {
        const response = await this.coinsCategoriesListRaw(initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CoinsCategoriesOrderEnum = {
    MarketCapDesc: 'market_cap_desc',
    MarketCapAsc: 'market_cap_asc',
    NameDesc: 'name_desc',
    NameAsc: 'name_asc',
    MarketCapChange24hDesc: 'market_cap_change_24h_desc',
    MarketCapChange24hAsc: 'market_cap_change_24h_asc'
} as const;
export type CoinsCategoriesOrderEnum = typeof CoinsCategoriesOrderEnum[keyof typeof CoinsCategoriesOrderEnum];
