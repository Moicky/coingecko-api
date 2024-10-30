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
 * coin image url
 * @export
 * @interface CoinsHistoricalDataImage
 */
export interface CoinsHistoricalDataImage {
    /**
     * 
     * @type {string}
     * @memberof CoinsHistoricalDataImage
     */
    thumb?: string;
    /**
     * 
     * @type {string}
     * @memberof CoinsHistoricalDataImage
     */
    small?: string;
}

/**
 * Check if a given object implements the CoinsHistoricalDataImage interface.
 */
export function instanceOfCoinsHistoricalDataImage(value: object): value is CoinsHistoricalDataImage {
    return true;
}

export function CoinsHistoricalDataImageFromJSON(json: any): CoinsHistoricalDataImage {
    return CoinsHistoricalDataImageFromJSONTyped(json, false);
}

export function CoinsHistoricalDataImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsHistoricalDataImage {
    if (json == null) {
        return json;
    }
    return {
        
        'thumb': json['thumb'] == null ? undefined : json['thumb'],
        'small': json['small'] == null ? undefined : json['small'],
    };
}

  export function CoinsHistoricalDataImageToJSON(json: any): CoinsHistoricalDataImage {
      return CoinsHistoricalDataImageToJSONTyped(json, false);
  }

  export function CoinsHistoricalDataImageToJSONTyped(value?: CoinsHistoricalDataImage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'thumb': value['thumb'],
        'small': value['small'],
    };
}

