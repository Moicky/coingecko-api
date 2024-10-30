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
 * nft collection volume in 24 hours percentage change
 * @export
 * @interface NFTDataVolume24hPercentageChange
 */
export interface NFTDataVolume24hPercentageChange {
    /**
     * 
     * @type {number}
     * @memberof NFTDataVolume24hPercentageChange
     */
    usd?: number;
    /**
     * 
     * @type {number}
     * @memberof NFTDataVolume24hPercentageChange
     */
    nativeCurrency?: number;
}

/**
 * Check if a given object implements the NFTDataVolume24hPercentageChange interface.
 */
export function instanceOfNFTDataVolume24hPercentageChange(value: object): value is NFTDataVolume24hPercentageChange {
    return true;
}

export function NFTDataVolume24hPercentageChangeFromJSON(json: any): NFTDataVolume24hPercentageChange {
    return NFTDataVolume24hPercentageChangeFromJSONTyped(json, false);
}

export function NFTDataVolume24hPercentageChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NFTDataVolume24hPercentageChange {
    if (json == null) {
        return json;
    }
    return {
        
        'usd': json['usd'] == null ? undefined : json['usd'],
        'nativeCurrency': json['native_currency'] == null ? undefined : json['native_currency'],
    };
}

  export function NFTDataVolume24hPercentageChangeToJSON(json: any): NFTDataVolume24hPercentageChange {
      return NFTDataVolume24hPercentageChangeToJSONTyped(json, false);
  }

  export function NFTDataVolume24hPercentageChangeToJSONTyped(value?: NFTDataVolume24hPercentageChange | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'usd': value['usd'],
        'native_currency': value['nativeCurrency'],
    };
}
