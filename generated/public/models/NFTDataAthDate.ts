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
 * nft collection all time highs date
 * @export
 * @interface NFTDataAthDate
 */
export interface NFTDataAthDate {
    /**
     * 
     * @type {Date}
     * @memberof NFTDataAthDate
     */
    nativeCurrency?: Date;
    /**
     * 
     * @type {Date}
     * @memberof NFTDataAthDate
     */
    usd?: Date;
}

/**
 * Check if a given object implements the NFTDataAthDate interface.
 */
export function instanceOfNFTDataAthDate(value: object): value is NFTDataAthDate {
    return true;
}

export function NFTDataAthDateFromJSON(json: any): NFTDataAthDate {
    return NFTDataAthDateFromJSONTyped(json, false);
}

export function NFTDataAthDateFromJSONTyped(json: any, ignoreDiscriminator: boolean): NFTDataAthDate {
    if (json == null) {
        return json;
    }
    return {
        
        'nativeCurrency': json['native_currency'] == null ? undefined : (new Date(json['native_currency'])),
        'usd': json['usd'] == null ? undefined : (new Date(json['usd'])),
    };
}

  export function NFTDataAthDateToJSON(json: any): NFTDataAthDate {
      return NFTDataAthDateToJSONTyped(json, false);
  }

  export function NFTDataAthDateToJSONTyped(value?: NFTDataAthDate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'native_currency': value['nativeCurrency'] == null ? undefined : ((value['nativeCurrency']).toISOString()),
        'usd': value['usd'] == null ? undefined : ((value['usd']).toISOString()),
    };
}

