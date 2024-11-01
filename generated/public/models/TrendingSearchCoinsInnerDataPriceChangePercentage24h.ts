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
/**
 * coin price change percentage in 24 hours
 * @export
 * @interface TrendingSearchCoinsInnerDataPriceChangePercentage24h
 */
export interface TrendingSearchCoinsInnerDataPriceChangePercentage24h {
    /**
     * 
     * @type {number}
     * @memberof TrendingSearchCoinsInnerDataPriceChangePercentage24h
     */
    btc?: number;
    /**
     * 
     * @type {number}
     * @memberof TrendingSearchCoinsInnerDataPriceChangePercentage24h
     */
    usd?: number;
}

/**
 * Check if a given object implements the TrendingSearchCoinsInnerDataPriceChangePercentage24h interface.
 */
export function instanceOfTrendingSearchCoinsInnerDataPriceChangePercentage24h(value: object): value is TrendingSearchCoinsInnerDataPriceChangePercentage24h {
    return true;
}

export function TrendingSearchCoinsInnerDataPriceChangePercentage24hFromJSON(json: any): TrendingSearchCoinsInnerDataPriceChangePercentage24h {
    return TrendingSearchCoinsInnerDataPriceChangePercentage24hFromJSONTyped(json, false);
}

export function TrendingSearchCoinsInnerDataPriceChangePercentage24hFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrendingSearchCoinsInnerDataPriceChangePercentage24h {
    if (json == null) {
        return json;
    }
    return {
        
        'btc': json['btc'] == null ? undefined : json['btc'],
        'usd': json['usd'] == null ? undefined : json['usd'],
    };
}

  export function TrendingSearchCoinsInnerDataPriceChangePercentage24hToJSON(json: any): TrendingSearchCoinsInnerDataPriceChangePercentage24h {
      return TrendingSearchCoinsInnerDataPriceChangePercentage24hToJSONTyped(json, false);
  }

  export function TrendingSearchCoinsInnerDataPriceChangePercentage24hToJSONTyped(value?: TrendingSearchCoinsInnerDataPriceChangePercentage24h | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'btc': value['btc'],
        'usd': value['usd'],
    };
}

