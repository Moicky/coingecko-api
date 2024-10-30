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

import { mapValues } from '../runtime';
import type { TrendingSearchCategoriesInnerData } from './TrendingSearchCategoriesInnerData';
import {
    TrendingSearchCategoriesInnerDataFromJSON,
    TrendingSearchCategoriesInnerDataFromJSONTyped,
    TrendingSearchCategoriesInnerDataToJSON,
    TrendingSearchCategoriesInnerDataToJSONTyped,
} from './TrendingSearchCategoriesInnerData';

/**
 * 
 * @export
 * @interface TrendingSearchCategoriesInner
 */
export interface TrendingSearchCategoriesInner {
    /**
     * 
     * @type {number}
     * @memberof TrendingSearchCategoriesInner
     */
    id?: number;
    /**
     * category name
     * @type {string}
     * @memberof TrendingSearchCategoriesInner
     */
    name?: string;
    /**
     * category market cap 1 hour change
     * @type {number}
     * @memberof TrendingSearchCategoriesInner
     */
    marketCap1hChange?: number;
    /**
     * category web slug
     * @type {string}
     * @memberof TrendingSearchCategoriesInner
     */
    slug?: string;
    /**
     * category number of coins
     * @type {number}
     * @memberof TrendingSearchCategoriesInner
     */
    coinsCount?: number;
    /**
     * 
     * @type {TrendingSearchCategoriesInnerData}
     * @memberof TrendingSearchCategoriesInner
     */
    data?: TrendingSearchCategoriesInnerData;
}

/**
 * Check if a given object implements the TrendingSearchCategoriesInner interface.
 */
export function instanceOfTrendingSearchCategoriesInner(value: object): value is TrendingSearchCategoriesInner {
    return true;
}

export function TrendingSearchCategoriesInnerFromJSON(json: any): TrendingSearchCategoriesInner {
    return TrendingSearchCategoriesInnerFromJSONTyped(json, false);
}

export function TrendingSearchCategoriesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrendingSearchCategoriesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'marketCap1hChange': json['market_cap_1h_change'] == null ? undefined : json['market_cap_1h_change'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'coinsCount': json['coins_count'] == null ? undefined : json['coins_count'],
        'data': json['data'] == null ? undefined : TrendingSearchCategoriesInnerDataFromJSON(json['data']),
    };
}

  export function TrendingSearchCategoriesInnerToJSON(json: any): TrendingSearchCategoriesInner {
      return TrendingSearchCategoriesInnerToJSONTyped(json, false);
  }

  export function TrendingSearchCategoriesInnerToJSONTyped(value?: TrendingSearchCategoriesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'market_cap_1h_change': value['marketCap1hChange'],
        'slug': value['slug'],
        'coins_count': value['coinsCount'],
        'data': TrendingSearchCategoriesInnerDataToJSON(value['data']),
    };
}

