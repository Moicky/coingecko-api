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
 * nft collection floor price 14 days percentage change
 * @export
 * @interface NFTDataFloorPrice14dPercentageChange
 */
export interface NFTDataFloorPrice14dPercentageChange {
    /**
     * 
     * @type {number}
     * @memberof NFTDataFloorPrice14dPercentageChange
     */
    usd?: number;
    /**
     * 
     * @type {number}
     * @memberof NFTDataFloorPrice14dPercentageChange
     */
    nativeCurrency?: number;
}

/**
 * Check if a given object implements the NFTDataFloorPrice14dPercentageChange interface.
 */
export function instanceOfNFTDataFloorPrice14dPercentageChange(value: object): value is NFTDataFloorPrice14dPercentageChange {
    return true;
}

export function NFTDataFloorPrice14dPercentageChangeFromJSON(json: any): NFTDataFloorPrice14dPercentageChange {
    return NFTDataFloorPrice14dPercentageChangeFromJSONTyped(json, false);
}

export function NFTDataFloorPrice14dPercentageChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NFTDataFloorPrice14dPercentageChange {
    if (json == null) {
        return json;
    }
    return {
        
        'usd': json['usd'] == null ? undefined : json['usd'],
        'nativeCurrency': json['native_currency'] == null ? undefined : json['native_currency'],
    };
}

  export function NFTDataFloorPrice14dPercentageChangeToJSON(json: any): NFTDataFloorPrice14dPercentageChange {
      return NFTDataFloorPrice14dPercentageChangeToJSONTyped(json, false);
  }

  export function NFTDataFloorPrice14dPercentageChangeToJSONTyped(value?: NFTDataFloorPrice14dPercentageChange | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'usd': value['usd'],
        'native_currency': value['nativeCurrency'],
    };
}

