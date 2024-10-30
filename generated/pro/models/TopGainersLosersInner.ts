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
 * @interface TopGainersLosersInner
 */
export interface TopGainersLosersInner {
    /**
     * coin id
     * @type {string}
     * @memberof TopGainersLosersInner
     */
    id?: string;
    /**
     * coin symbol
     * @type {string}
     * @memberof TopGainersLosersInner
     */
    symbol?: string;
    /**
     * coin name
     * @type {string}
     * @memberof TopGainersLosersInner
     */
    name?: string;
    /**
     * coin image url
     * @type {string}
     * @memberof TopGainersLosersInner
     */
    image?: string;
    /**
     * coin rank by market cap
     * @type {number}
     * @memberof TopGainersLosersInner
     */
    marketCapRank?: number;
    /**
     * coin price in USD
     * @type {number}
     * @memberof TopGainersLosersInner
     */
    usd?: number;
    /**
     * coin 24h volume in USD
     * @type {number}
     * @memberof TopGainersLosersInner
     */
    usd24hVol?: number;
    /**
     * coin 1 year change in USD
     * @type {number}
     * @memberof TopGainersLosersInner
     */
    usd1yChange?: number;
}

/**
 * Check if a given object implements the TopGainersLosersInner interface.
 */
export function instanceOfTopGainersLosersInner(value: object): value is TopGainersLosersInner {
    return true;
}

export function TopGainersLosersInnerFromJSON(json: any): TopGainersLosersInner {
    return TopGainersLosersInnerFromJSONTyped(json, false);
}

export function TopGainersLosersInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TopGainersLosersInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'symbol': json['symbol'] == null ? undefined : json['symbol'],
        'name': json['name'] == null ? undefined : json['name'],
        'image': json['image'] == null ? undefined : json['image'],
        'marketCapRank': json['market_cap_rank'] == null ? undefined : json['market_cap_rank'],
        'usd': json['usd'] == null ? undefined : json['usd'],
        'usd24hVol': json['usd_24h_vol'] == null ? undefined : json['usd_24h_vol'],
        'usd1yChange': json['usd_1y_change'] == null ? undefined : json['usd_1y_change'],
    };
}

  export function TopGainersLosersInnerToJSON(json: any): TopGainersLosersInner {
      return TopGainersLosersInnerToJSONTyped(json, false);
  }

  export function TopGainersLosersInnerToJSONTyped(value?: TopGainersLosersInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'symbol': value['symbol'],
        'name': value['name'],
        'image': value['image'],
        'market_cap_rank': value['marketCapRank'],
        'usd': value['usd'],
        'usd_24h_vol': value['usd24hVol'],
        'usd_1y_change': value['usd1yChange'],
    };
}

