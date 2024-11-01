/* tslint:disable */
/* eslint-disable */
/**
 * CoinGecko Public API V3
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
  Ping,
} from '../models/index';
import {
    PingFromJSON,
    PingToJSON,
} from '../models/index';

/**
 * PingApi - interface
 * 
 * @export
 * @interface PingApiInterface
 */
export interface PingApiInterface {
    /**
     * This endpoint allows you to **check the API server status**.
     * @summary Check API server status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PingApiInterface
     */
    pingServerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Ping>>;

    /**
     * This endpoint allows you to **check the API server status**.
     * Check API server status
     */
    pingServer(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Ping>;

}

/**
 * 
 */
export class PingApi extends runtime.BaseAPI implements PingApiInterface {

    /**
     * This endpoint allows you to **check the API server status**.
     * Check API server status
     */
    async pingServerRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Ping>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_demo_api_key"] = await this.configuration.apiKey("x_cg_demo_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-demo-api-key"] = await this.configuration.apiKey("x-cg-demo-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/ping`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PingFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **check the API server status**.
     * Check API server status
     */
    async pingServer(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Ping> {
        const response = await this.pingServerRaw(initOverrides);
        return await response.value();
    }

}
