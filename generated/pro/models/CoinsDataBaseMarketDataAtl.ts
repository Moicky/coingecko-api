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
 * coin all time low (atl) in currency
 * @export
 * @interface CoinsDataBaseMarketDataAtl
 */
export interface CoinsDataBaseMarketDataAtl {
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataAtl
     */
    btc?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataAtl
     */
    eur?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataAtl
     */
    usd?: number;
}

/**
 * Check if a given object implements the CoinsDataBaseMarketDataAtl interface.
 */
export function instanceOfCoinsDataBaseMarketDataAtl(value: object): value is CoinsDataBaseMarketDataAtl {
    return true;
}

export function CoinsDataBaseMarketDataAtlFromJSON(json: any): CoinsDataBaseMarketDataAtl {
    return CoinsDataBaseMarketDataAtlFromJSONTyped(json, false);
}

export function CoinsDataBaseMarketDataAtlFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsDataBaseMarketDataAtl {
    if (json == null) {
        return json;
    }
    return {
        
        'btc': json['btc'] == null ? undefined : json['btc'],
        'eur': json['eur'] == null ? undefined : json['eur'],
        'usd': json['usd'] == null ? undefined : json['usd'],
    };
}

  export function CoinsDataBaseMarketDataAtlToJSON(json: any): CoinsDataBaseMarketDataAtl {
      return CoinsDataBaseMarketDataAtlToJSONTyped(json, false);
  }

  export function CoinsDataBaseMarketDataAtlToJSONTyped(value?: CoinsDataBaseMarketDataAtl | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'btc': value['btc'],
        'eur': value['eur'],
        'usd': value['usd'],
    };
}

