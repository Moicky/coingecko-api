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
 * coin all time low (atl) change in percentage
 * @export
 * @interface CoinsDataBaseMarketDataAtlChangePercentage
 */
export interface CoinsDataBaseMarketDataAtlChangePercentage {
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataAtlChangePercentage
     */
    btc?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataAtlChangePercentage
     */
    eur?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataAtlChangePercentage
     */
    usd?: number;
}

/**
 * Check if a given object implements the CoinsDataBaseMarketDataAtlChangePercentage interface.
 */
export function instanceOfCoinsDataBaseMarketDataAtlChangePercentage(value: object): value is CoinsDataBaseMarketDataAtlChangePercentage {
    return true;
}

export function CoinsDataBaseMarketDataAtlChangePercentageFromJSON(json: any): CoinsDataBaseMarketDataAtlChangePercentage {
    return CoinsDataBaseMarketDataAtlChangePercentageFromJSONTyped(json, false);
}

export function CoinsDataBaseMarketDataAtlChangePercentageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsDataBaseMarketDataAtlChangePercentage {
    if (json == null) {
        return json;
    }
    return {
        
        'btc': json['btc'] == null ? undefined : json['btc'],
        'eur': json['eur'] == null ? undefined : json['eur'],
        'usd': json['usd'] == null ? undefined : json['usd'],
    };
}

  export function CoinsDataBaseMarketDataAtlChangePercentageToJSON(json: any): CoinsDataBaseMarketDataAtlChangePercentage {
      return CoinsDataBaseMarketDataAtlChangePercentageToJSONTyped(json, false);
  }

  export function CoinsDataBaseMarketDataAtlChangePercentageToJSONTyped(value?: CoinsDataBaseMarketDataAtlChangePercentage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'btc': value['btc'],
        'eur': value['eur'],
        'usd': value['usd'],
    };
}

