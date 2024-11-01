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
 * coin image url
 * @export
 * @interface CoinsDataBaseImage
 */
export interface CoinsDataBaseImage {
    /**
     * 
     * @type {string}
     * @memberof CoinsDataBaseImage
     */
    thumb?: string;
    /**
     * 
     * @type {string}
     * @memberof CoinsDataBaseImage
     */
    small?: string;
    /**
     * 
     * @type {string}
     * @memberof CoinsDataBaseImage
     */
    large?: string;
}

/**
 * Check if a given object implements the CoinsDataBaseImage interface.
 */
export function instanceOfCoinsDataBaseImage(value: object): value is CoinsDataBaseImage {
    return true;
}

export function CoinsDataBaseImageFromJSON(json: any): CoinsDataBaseImage {
    return CoinsDataBaseImageFromJSONTyped(json, false);
}

export function CoinsDataBaseImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsDataBaseImage {
    if (json == null) {
        return json;
    }
    return {
        
        'thumb': json['thumb'] == null ? undefined : json['thumb'],
        'small': json['small'] == null ? undefined : json['small'],
        'large': json['large'] == null ? undefined : json['large'],
    };
}

  export function CoinsDataBaseImageToJSON(json: any): CoinsDataBaseImage {
      return CoinsDataBaseImageToJSONTyped(json, false);
  }

  export function CoinsDataBaseImageToJSONTyped(value?: CoinsDataBaseImage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'thumb': value['thumb'],
        'small': value['small'],
        'large': value['large'],
    };
}

