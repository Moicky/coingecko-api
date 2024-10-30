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
  AssetPlatforms,
  TokenLists,
} from '../models/index';
import {
    AssetPlatformsFromJSON,
    AssetPlatformsToJSON,
    TokenListsFromJSON,
    TokenListsToJSON,
} from '../models/index';

export interface AssetPlatformsListRequest {
    filter?: AssetPlatformsListFilterEnum;
}

export interface TokenListsRequest {
    assetPlatformId: string;
}

/**
 * 
 */
export class AssetPlatformsApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to **query all the asset platforms on CoinGecko**.
     * Asset Platforms List (ID Map)
     */
    async assetPlatformsListRaw(requestParameters: AssetPlatformsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AssetPlatforms>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_pro_api_key"] = await this.configuration.apiKey("x_cg_pro_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-pro-api-key"] = await this.configuration.apiKey("x-cg-pro-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/asset_platforms`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetPlatformsFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query all the asset platforms on CoinGecko**.
     * Asset Platforms List (ID Map)
     */
    async assetPlatformsList(requestParameters: AssetPlatformsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AssetPlatforms> {
        const response = await this.assetPlatformsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)**
     * 👑 Token Lists by Asset Platform ID
     */
    async tokenListsRaw(requestParameters: TokenListsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TokenLists>> {
        if (requestParameters['assetPlatformId'] == null) {
            throw new runtime.RequiredError(
                'assetPlatformId',
                'Required parameter "assetPlatformId" was null or undefined when calling tokenLists().'
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
            path: `/token_lists/{asset_platform_id}/all.json`.replace(`{${"asset_platform_id"}}`, encodeURIComponent(String(requestParameters['assetPlatformId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenListsFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)**
     * 👑 Token Lists by Asset Platform ID
     */
    async tokenLists(requestParameters: TokenListsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TokenLists> {
        const response = await this.tokenListsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AssetPlatformsListFilterEnum = {
    Nft: 'nft'
} as const;
export type AssetPlatformsListFilterEnum = typeof AssetPlatformsListFilterEnum[keyof typeof AssetPlatformsListFilterEnum];