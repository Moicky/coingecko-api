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
 * coin all time low (atl) date
 * @export
 * @interface CoinsDataBaseMarketDataAtlDate
 */
export interface CoinsDataBaseMarketDataAtlDate {
    /**
     * 
     * @type {string}
     * @memberof CoinsDataBaseMarketDataAtlDate
     */
    btc?: string;
    /**
     * 
     * @type {string}
     * @memberof CoinsDataBaseMarketDataAtlDate
     */
    eur?: string;
    /**
     * 
     * @type {string}
     * @memberof CoinsDataBaseMarketDataAtlDate
     */
    usd?: string;
}

/**
 * Check if a given object implements the CoinsDataBaseMarketDataAtlDate interface.
 */
export function instanceOfCoinsDataBaseMarketDataAtlDate(value: object): value is CoinsDataBaseMarketDataAtlDate {
    return true;
}

export function CoinsDataBaseMarketDataAtlDateFromJSON(json: any): CoinsDataBaseMarketDataAtlDate {
    return CoinsDataBaseMarketDataAtlDateFromJSONTyped(json, false);
}

export function CoinsDataBaseMarketDataAtlDateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsDataBaseMarketDataAtlDate {
    if (json == null) {
        return json;
    }
    return {
        
        'btc': json['btc'] == null ? undefined : json['btc'],
        'eur': json['eur'] == null ? undefined : json['eur'],
        'usd': json['usd'] == null ? undefined : json['usd'],
    };
}

  export function CoinsDataBaseMarketDataAtlDateToJSON(json: any): CoinsDataBaseMarketDataAtlDate {
      return CoinsDataBaseMarketDataAtlDateToJSONTyped(json, false);
  }

  export function CoinsDataBaseMarketDataAtlDateToJSONTyped(value?: CoinsDataBaseMarketDataAtlDate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'btc': value['btc'],
        'eur': value['eur'],
        'usd': value['usd'],
    };
}
