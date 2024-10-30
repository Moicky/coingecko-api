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
 * 
 * @export
 * @interface NFTDataFloorPrice24hPercentageChange
 */
export interface NFTDataFloorPrice24hPercentageChange {
    /**
     * 
     * @type {number}
     * @memberof NFTDataFloorPrice24hPercentageChange
     */
    usd?: number;
    /**
     * 
     * @type {number}
     * @memberof NFTDataFloorPrice24hPercentageChange
     */
    nativeCurrency?: number;
}

/**
 * Check if a given object implements the NFTDataFloorPrice24hPercentageChange interface.
 */
export function instanceOfNFTDataFloorPrice24hPercentageChange(value: object): value is NFTDataFloorPrice24hPercentageChange {
    return true;
}

export function NFTDataFloorPrice24hPercentageChangeFromJSON(json: any): NFTDataFloorPrice24hPercentageChange {
    return NFTDataFloorPrice24hPercentageChangeFromJSONTyped(json, false);
}

export function NFTDataFloorPrice24hPercentageChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NFTDataFloorPrice24hPercentageChange {
    if (json == null) {
        return json;
    }
    return {
        
        'usd': json['usd'] == null ? undefined : json['usd'],
        'nativeCurrency': json['native_currency'] == null ? undefined : json['native_currency'],
    };
}

  export function NFTDataFloorPrice24hPercentageChangeToJSON(json: any): NFTDataFloorPrice24hPercentageChange {
      return NFTDataFloorPrice24hPercentageChangeToJSONTyped(json, false);
  }

  export function NFTDataFloorPrice24hPercentageChangeToJSONTyped(value?: NFTDataFloorPrice24hPercentageChange | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'usd': value['usd'],
        'native_currency': value['nativeCurrency'],
    };
}

