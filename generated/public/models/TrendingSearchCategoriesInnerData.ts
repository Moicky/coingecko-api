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
import type { TrendingSearchCategoriesInnerDataMarketCapChangePercentage24h } from './TrendingSearchCategoriesInnerDataMarketCapChangePercentage24h';
import {
    TrendingSearchCategoriesInnerDataMarketCapChangePercentage24hFromJSON,
    TrendingSearchCategoriesInnerDataMarketCapChangePercentage24hFromJSONTyped,
    TrendingSearchCategoriesInnerDataMarketCapChangePercentage24hToJSON,
    TrendingSearchCategoriesInnerDataMarketCapChangePercentage24hToJSONTyped,
} from './TrendingSearchCategoriesInnerDataMarketCapChangePercentage24h';

/**
 * 
 * @export
 * @interface TrendingSearchCategoriesInnerData
 */
export interface TrendingSearchCategoriesInnerData {
    /**
     * category market cap
     * @type {number}
     * @memberof TrendingSearchCategoriesInnerData
     */
    marketCap?: number;
    /**
     * category market cap in btc
     * @type {number}
     * @memberof TrendingSearchCategoriesInnerData
     */
    marketCapBtc?: number;
    /**
     * category total volume
     * @type {number}
     * @memberof TrendingSearchCategoriesInnerData
     */
    totalVolume?: number;
    /**
     * category total volume in btc
     * @type {number}
     * @memberof TrendingSearchCategoriesInnerData
     */
    totalVolumeBtc?: number;
    /**
     * 
     * @type {TrendingSearchCategoriesInnerDataMarketCapChangePercentage24h}
     * @memberof TrendingSearchCategoriesInnerData
     */
    marketCapChangePercentage24h?: TrendingSearchCategoriesInnerDataMarketCapChangePercentage24h;
    /**
     * category sparkline image url
     * @type {string}
     * @memberof TrendingSearchCategoriesInnerData
     */
    sparkline?: string;
}

/**
 * Check if a given object implements the TrendingSearchCategoriesInnerData interface.
 */
export function instanceOfTrendingSearchCategoriesInnerData(value: object): value is TrendingSearchCategoriesInnerData {
    return true;
}

export function TrendingSearchCategoriesInnerDataFromJSON(json: any): TrendingSearchCategoriesInnerData {
    return TrendingSearchCategoriesInnerDataFromJSONTyped(json, false);
}

export function TrendingSearchCategoriesInnerDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrendingSearchCategoriesInnerData {
    if (json == null) {
        return json;
    }
    return {
        
        'marketCap': json['market_cap'] == null ? undefined : json['market_cap'],
        'marketCapBtc': json['market_cap_btc'] == null ? undefined : json['market_cap_btc'],
        'totalVolume': json['total_volume'] == null ? undefined : json['total_volume'],
        'totalVolumeBtc': json['total_volume_btc'] == null ? undefined : json['total_volume_btc'],
        'marketCapChangePercentage24h': json['market_cap_change_percentage_24h'] == null ? undefined : TrendingSearchCategoriesInnerDataMarketCapChangePercentage24hFromJSON(json['market_cap_change_percentage_24h']),
        'sparkline': json['sparkline'] == null ? undefined : json['sparkline'],
    };
}

  export function TrendingSearchCategoriesInnerDataToJSON(json: any): TrendingSearchCategoriesInnerData {
      return TrendingSearchCategoriesInnerDataToJSONTyped(json, false);
  }

  export function TrendingSearchCategoriesInnerDataToJSONTyped(value?: TrendingSearchCategoriesInnerData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'market_cap': value['marketCap'],
        'market_cap_btc': value['marketCapBtc'],
        'total_volume': value['totalVolume'],
        'total_volume_btc': value['totalVolumeBtc'],
        'market_cap_change_percentage_24h': TrendingSearchCategoriesInnerDataMarketCapChangePercentage24hToJSON(value['marketCapChangePercentage24h']),
        'sparkline': value['sparkline'],
    };
}
