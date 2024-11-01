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
  DerivativesExchanges,
  DerivativesExchangesID,
  DerivativesExchangesList,
  DerivativesTickersList,
} from '../models/index';
import {
    DerivativesExchangesFromJSON,
    DerivativesExchangesToJSON,
    DerivativesExchangesIDFromJSON,
    DerivativesExchangesIDToJSON,
    DerivativesExchangesListFromJSON,
    DerivativesExchangesListToJSON,
    DerivativesTickersListFromJSON,
    DerivativesTickersListToJSON,
} from '../models/index';

export interface DerivativesExchangesRequest {
    order?: DerivativesExchangesOrderEnum;
    perPage?: number;
    page?: number;
}

export interface DerivativesExchangesIdRequest {
    id: string;
    includeTickers?: DerivativesExchangesIdIncludeTickersEnum;
}

/**
 * DerivativesApi - interface
 * 
 * @export
 * @interface DerivativesApiInterface
 */
export interface DerivativesApiInterface {
    /**
     * This endpoint allows you to **query all the derivatives exchanges with related data (id, name, open interest, .... etc) on CoinGecko**.
     * @summary Derivatives Exchanges List with Data
     * @param {'name_asc' | 'name_desc' | 'open_interest_btc_asc' | 'open_interest_btc_desc' | 'trade_volume_24h_btc_asc' | 'trade_volume_24h_btc_desc'} [order] use this to sort the order of responses, default: open_interest_btc_desc
     * @param {number} [perPage] total results per page
     * @param {number} [page] page through results, default: 1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DerivativesApiInterface
     */
    derivativesExchangesRaw(requestParameters: DerivativesExchangesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DerivativesExchanges>>;

    /**
     * This endpoint allows you to **query all the derivatives exchanges with related data (id, name, open interest, .... etc) on CoinGecko**.
     * Derivatives Exchanges List with Data
     */
    derivativesExchanges(requestParameters: DerivativesExchangesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DerivativesExchanges>;

    /**
     * This endpoint allows you to **query the derivatives exchange’s related data (id, name, open interest, .... etc) based on the exchanges’ id**.
     * @summary Derivatives Exchange Data by ID
     * @param {string} id derivative exchange id &lt;br&gt; *refers to [&#x60;/derivatives/exchanges/list&#x60;](/reference/derivatives-exchanges-list).
     * @param {'all' | 'unexpired'} [includeTickers] include tickers data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DerivativesApiInterface
     */
    derivativesExchangesIdRaw(requestParameters: DerivativesExchangesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DerivativesExchangesID>>;

    /**
     * This endpoint allows you to **query the derivatives exchange’s related data (id, name, open interest, .... etc) based on the exchanges’ id**.
     * Derivatives Exchange Data by ID
     */
    derivativesExchangesId(requestParameters: DerivativesExchangesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DerivativesExchangesID>;

    /**
     * This endpoint allows you to **query all the derivatives exchanges with id and name on CoinGecko**.
     * @summary Derivatives Exchanges List (ID Map)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DerivativesApiInterface
     */
    derivativesExchangesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DerivativesExchangesList>>;

    /**
     * This endpoint allows you to **query all the derivatives exchanges with id and name on CoinGecko**.
     * Derivatives Exchanges List (ID Map)
     */
    derivativesExchangesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DerivativesExchangesList>;

    /**
     * This endpoint allows you to **query all the tickers from derivatives exchanges on CoinGecko**.
     * @summary Derivatives Tickers List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DerivativesApiInterface
     */
    derivativesTickersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DerivativesTickersList>>;

    /**
     * This endpoint allows you to **query all the tickers from derivatives exchanges on CoinGecko**.
     * Derivatives Tickers List
     */
    derivativesTickers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DerivativesTickersList>;

}

/**
 * 
 */
export class DerivativesApi extends runtime.BaseAPI implements DerivativesApiInterface {

    /**
     * This endpoint allows you to **query all the derivatives exchanges with related data (id, name, open interest, .... etc) on CoinGecko**.
     * Derivatives Exchanges List with Data
     */
    async derivativesExchangesRaw(requestParameters: DerivativesExchangesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DerivativesExchanges>> {
        const queryParameters: any = {};

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        if (requestParameters['perPage'] != null) {
            queryParameters['per_page'] = requestParameters['perPage'];
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
            path: `/derivatives/exchanges`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DerivativesExchangesFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query all the derivatives exchanges with related data (id, name, open interest, .... etc) on CoinGecko**.
     * Derivatives Exchanges List with Data
     */
    async derivativesExchanges(requestParameters: DerivativesExchangesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DerivativesExchanges> {
        const response = await this.derivativesExchangesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query the derivatives exchange’s related data (id, name, open interest, .... etc) based on the exchanges’ id**.
     * Derivatives Exchange Data by ID
     */
    async derivativesExchangesIdRaw(requestParameters: DerivativesExchangesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DerivativesExchangesID>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling derivativesExchangesId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['includeTickers'] != null) {
            queryParameters['include_tickers'] = requestParameters['includeTickers'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/derivatives/exchanges/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DerivativesExchangesIDFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query the derivatives exchange’s related data (id, name, open interest, .... etc) based on the exchanges’ id**.
     * Derivatives Exchange Data by ID
     */
    async derivativesExchangesId(requestParameters: DerivativesExchangesIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DerivativesExchangesID> {
        const response = await this.derivativesExchangesIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query all the derivatives exchanges with id and name on CoinGecko**.
     * Derivatives Exchanges List (ID Map)
     */
    async derivativesExchangesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DerivativesExchangesList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/derivatives/exchanges/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DerivativesExchangesListFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query all the derivatives exchanges with id and name on CoinGecko**.
     * Derivatives Exchanges List (ID Map)
     */
    async derivativesExchangesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DerivativesExchangesList> {
        const response = await this.derivativesExchangesListRaw(initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query all the tickers from derivatives exchanges on CoinGecko**.
     * Derivatives Tickers List
     */
    async derivativesTickersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DerivativesTickersList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/derivatives`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DerivativesTickersListFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query all the tickers from derivatives exchanges on CoinGecko**.
     * Derivatives Tickers List
     */
    async derivativesTickers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DerivativesTickersList> {
        const response = await this.derivativesTickersRaw(initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const DerivativesExchangesOrderEnum = {
    NameAsc: 'name_asc',
    NameDesc: 'name_desc',
    OpenInterestBtcAsc: 'open_interest_btc_asc',
    OpenInterestBtcDesc: 'open_interest_btc_desc',
    TradeVolume24hBtcAsc: 'trade_volume_24h_btc_asc',
    TradeVolume24hBtcDesc: 'trade_volume_24h_btc_desc'
} as const;
export type DerivativesExchangesOrderEnum = typeof DerivativesExchangesOrderEnum[keyof typeof DerivativesExchangesOrderEnum];
/**
 * @export
 */
export const DerivativesExchangesIdIncludeTickersEnum = {
    All: 'all',
    Unexpired: 'unexpired'
} as const;
export type DerivativesExchangesIdIncludeTickersEnum = typeof DerivativesExchangesIdIncludeTickersEnum[keyof typeof DerivativesExchangesIdIncludeTickersEnum];
