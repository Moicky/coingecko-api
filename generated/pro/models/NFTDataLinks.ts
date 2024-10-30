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
 * nft collection links
 * @export
 * @interface NFTDataLinks
 */
export interface NFTDataLinks {
    /**
     * 
     * @type {string}
     * @memberof NFTDataLinks
     */
    homepage?: string;
    /**
     * 
     * @type {string}
     * @memberof NFTDataLinks
     */
    twitter?: string;
    /**
     * 
     * @type {string}
     * @memberof NFTDataLinks
     */
    discord?: string;
}

/**
 * Check if a given object implements the NFTDataLinks interface.
 */
export function instanceOfNFTDataLinks(value: object): value is NFTDataLinks {
    return true;
}

export function NFTDataLinksFromJSON(json: any): NFTDataLinks {
    return NFTDataLinksFromJSONTyped(json, false);
}

export function NFTDataLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): NFTDataLinks {
    if (json == null) {
        return json;
    }
    return {
        
        'homepage': json['homepage'] == null ? undefined : json['homepage'],
        'twitter': json['twitter'] == null ? undefined : json['twitter'],
        'discord': json['discord'] == null ? undefined : json['discord'],
    };
}

  export function NFTDataLinksToJSON(json: any): NFTDataLinks {
      return NFTDataLinksToJSONTyped(json, false);
  }

  export function NFTDataLinksToJSONTyped(value?: NFTDataLinks | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'homepage': value['homepage'],
        'twitter': value['twitter'],
        'discord': value['discord'],
    };
}

