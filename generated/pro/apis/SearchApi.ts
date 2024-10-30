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
  Search,
} from '../models/index';
import {
    SearchFromJSON,
    SearchToJSON,
} from '../models/index';

export interface SearchDataRequest {
    query: string;
}

/**
 * 
 */
export class SearchApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to **search for coins, categories and markets listed on CoinGecko**.
     * Search Queries
     */
    async searchDataRaw(requestParameters: SearchDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Search>> {
        if (requestParameters['query'] == null) {
            throw new runtime.RequiredError(
                'query',
                'Required parameter "query" was null or undefined when calling searchData().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **search for coins, categories and markets listed on CoinGecko**.
     * Search Queries
     */
    async searchData(requestParameters: SearchDataRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Search> {
        const response = await this.searchDataRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
