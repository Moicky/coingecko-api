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
 * nft collection floor price 24 hours percentage change
 * @export
 * @interface NFTsMarketsInnerFloorPrice24hPercentageChange
 */
export interface NFTsMarketsInnerFloorPrice24hPercentageChange {
    /**
     * 
     * @type {number}
     * @memberof NFTsMarketsInnerFloorPrice24hPercentageChange
     */
    usd?: number;
    /**
     * 
     * @type {number}
     * @memberof NFTsMarketsInnerFloorPrice24hPercentageChange
     */
    nativeCurrency?: number;
}

/**
 * Check if a given object implements the NFTsMarketsInnerFloorPrice24hPercentageChange interface.
 */
export function instanceOfNFTsMarketsInnerFloorPrice24hPercentageChange(value: object): value is NFTsMarketsInnerFloorPrice24hPercentageChange {
    return true;
}

export function NFTsMarketsInnerFloorPrice24hPercentageChangeFromJSON(json: any): NFTsMarketsInnerFloorPrice24hPercentageChange {
    return NFTsMarketsInnerFloorPrice24hPercentageChangeFromJSONTyped(json, false);
}

export function NFTsMarketsInnerFloorPrice24hPercentageChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NFTsMarketsInnerFloorPrice24hPercentageChange {
    if (json == null) {
        return json;
    }
    return {
        
        'usd': json['usd'] == null ? undefined : json['usd'],
        'nativeCurrency': json['native_currency'] == null ? undefined : json['native_currency'],
    };
}

  export function NFTsMarketsInnerFloorPrice24hPercentageChangeToJSON(json: any): NFTsMarketsInnerFloorPrice24hPercentageChange {
      return NFTsMarketsInnerFloorPrice24hPercentageChangeToJSONTyped(json, false);
  }

  export function NFTsMarketsInnerFloorPrice24hPercentageChangeToJSONTyped(value?: NFTsMarketsInnerFloorPrice24hPercentageChange | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'usd': value['usd'],
        'native_currency': value['nativeCurrency'],
    };
}

