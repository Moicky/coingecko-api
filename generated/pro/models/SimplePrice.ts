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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SimplePrice
 */
export interface SimplePrice {
    /**
     * price in USD
     * @type {number}
     * @memberof SimplePrice
     */
    usd?: number;
    /**
     * market cap in USD
     * @type {number}
     * @memberof SimplePrice
     */
    usdMarketCap?: number;
    /**
     * 24h volume in USD
     * @type {number}
     * @memberof SimplePrice
     */
    usd24hVol?: number;
    /**
     * 24h change in USD
     * @type {number}
     * @memberof SimplePrice
     */
    usd24hChange?: number;
    /**
     * last updated timestamp
     * @type {number}
     * @memberof SimplePrice
     */
    lastUpdatedAt?: number;
}

/**
 * Check if a given object implements the SimplePrice interface.
 */
export function instanceOfSimplePrice(value: object): value is SimplePrice {
    return true;
}

export function SimplePriceFromJSON(json: any): SimplePrice {
    return SimplePriceFromJSONTyped(json, false);
}

export function SimplePriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimplePrice {
    if (json == null) {
        return json;
    }
    return {
        
        'usd': json['usd'] == null ? undefined : json['usd'],
        'usdMarketCap': json['usd_market_cap'] == null ? undefined : json['usd_market_cap'],
        'usd24hVol': json['usd_24h_vol'] == null ? undefined : json['usd_24h_vol'],
        'usd24hChange': json['usd_24h_change'] == null ? undefined : json['usd_24h_change'],
        'lastUpdatedAt': json['last_updated_at'] == null ? undefined : json['last_updated_at'],
    };
}

  export function SimplePriceToJSON(json: any): SimplePrice {
      return SimplePriceToJSONTyped(json, false);
  }

  export function SimplePriceToJSONTyped(value?: SimplePrice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'usd': value['usd'],
        'usd_market_cap': value['usdMarketCap'],
        'usd_24h_vol': value['usd24hVol'],
        'usd_24h_change': value['usd24hChange'],
        'last_updated_at': value['lastUpdatedAt'],
    };
}

