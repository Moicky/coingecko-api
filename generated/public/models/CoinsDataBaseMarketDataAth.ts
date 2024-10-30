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
 * coin all time high (ath) in currency
 * @export
 * @interface CoinsDataBaseMarketDataAth
 */
export interface CoinsDataBaseMarketDataAth {
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataAth
     */
    btc?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataAth
     */
    eur?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataAth
     */
    usd?: number;
}

/**
 * Check if a given object implements the CoinsDataBaseMarketDataAth interface.
 */
export function instanceOfCoinsDataBaseMarketDataAth(value: object): value is CoinsDataBaseMarketDataAth {
    return true;
}

export function CoinsDataBaseMarketDataAthFromJSON(json: any): CoinsDataBaseMarketDataAth {
    return CoinsDataBaseMarketDataAthFromJSONTyped(json, false);
}

export function CoinsDataBaseMarketDataAthFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsDataBaseMarketDataAth {
    if (json == null) {
        return json;
    }
    return {
        
        'btc': json['btc'] == null ? undefined : json['btc'],
        'eur': json['eur'] == null ? undefined : json['eur'],
        'usd': json['usd'] == null ? undefined : json['usd'],
    };
}

  export function CoinsDataBaseMarketDataAthToJSON(json: any): CoinsDataBaseMarketDataAth {
      return CoinsDataBaseMarketDataAthToJSONTyped(json, false);
  }

  export function CoinsDataBaseMarketDataAthToJSONTyped(value?: CoinsDataBaseMarketDataAth | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'btc': value['btc'],
        'eur': value['eur'],
        'usd': value['usd'],
    };
}

