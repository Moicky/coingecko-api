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
  SimplePrice,
} from '../models/index';
import {
    SimplePriceFromJSON,
    SimplePriceToJSON,
} from '../models/index';

export interface OnchainSimplePriceRequest {
    network: string;
    addresses: string;
}

/**
 * SimpleApi - interface
 * 
 * @export
 * @interface SimpleApiInterface
 */
export interface SimpleApiInterface {
    /**
     * This endpoint allows you to **get token price based on the provided token contract address on a network**
     * @summary Token Price by Token Addresses
     * @param {string} network network id  &lt;br&gt; *refers to [/networks](/reference/networks-list)
     * @param {string} addresses token contract address, comma-separated if more than one token contract address,100 addresses
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SimpleApiInterface
     */
    onchainSimplePriceRaw(requestParameters: OnchainSimplePriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SimplePrice>>;

    /**
     * This endpoint allows you to **get token price based on the provided token contract address on a network**
     * Token Price by Token Addresses
     */
    onchainSimplePrice(requestParameters: OnchainSimplePriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SimplePrice>;

}

/**
 * 
 */
export class SimpleApi extends runtime.BaseAPI implements SimpleApiInterface {

    /**
     * This endpoint allows you to **get token price based on the provided token contract address on a network**
     * Token Price by Token Addresses
     */
    async onchainSimplePriceRaw(requestParameters: OnchainSimplePriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SimplePrice>> {
        if (requestParameters['network'] == null) {
            throw new runtime.RequiredError(
                'network',
                'Required parameter "network" was null or undefined when calling onchainSimplePrice().'
            );
        }

        if (requestParameters['addresses'] == null) {
            throw new runtime.RequiredError(
                'addresses',
                'Required parameter "addresses" was null or undefined when calling onchainSimplePrice().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/simple/networks/{network}/token_price/{addresses}`.replace(`{${"network"}}`, encodeURIComponent(String(requestParameters['network']))).replace(`{${"addresses"}}`, encodeURIComponent(String(requestParameters['addresses']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SimplePriceFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **get token price based on the provided token contract address on a network**
     * Token Price by Token Addresses
     */
    async onchainSimplePrice(requestParameters: OnchainSimplePriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SimplePrice> {
        const response = await this.onchainSimplePriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}