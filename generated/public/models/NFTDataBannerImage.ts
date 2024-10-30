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
 * nft collection banner image url
 * @export
 * @interface NFTDataBannerImage
 */
export interface NFTDataBannerImage {
    /**
     * 
     * @type {string}
     * @memberof NFTDataBannerImage
     */
    small?: string;
}

/**
 * Check if a given object implements the NFTDataBannerImage interface.
 */
export function instanceOfNFTDataBannerImage(value: object): value is NFTDataBannerImage {
    return true;
}

export function NFTDataBannerImageFromJSON(json: any): NFTDataBannerImage {
    return NFTDataBannerImageFromJSONTyped(json, false);
}

export function NFTDataBannerImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): NFTDataBannerImage {
    if (json == null) {
        return json;
    }
    return {
        
        'small': json['small'] == null ? undefined : json['small'],
    };
}

  export function NFTDataBannerImageToJSON(json: any): NFTDataBannerImage {
      return NFTDataBannerImageToJSONTyped(json, false);
  }

  export function NFTDataBannerImageToJSONTyped(value?: NFTDataBannerImage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'small': value['small'],
    };
}
