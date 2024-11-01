/* tslint:disable */
/* eslint-disable */
/**
 * On Chain DEX API (Beta)
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2-beta
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
 * @interface SimplePriceDataAttributes
 */
export interface SimplePriceDataAttributes {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SimplePriceDataAttributes
     */
    tokenPrices?: { [key: string]: string; };
}

/**
 * Check if a given object implements the SimplePriceDataAttributes interface.
 */
export function instanceOfSimplePriceDataAttributes(value: object): value is SimplePriceDataAttributes {
    return true;
}

export function SimplePriceDataAttributesFromJSON(json: any): SimplePriceDataAttributes {
    return SimplePriceDataAttributesFromJSONTyped(json, false);
}

export function SimplePriceDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimplePriceDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'tokenPrices': json['token_prices'] == null ? undefined : json['token_prices'],
    };
}

  export function SimplePriceDataAttributesToJSON(json: any): SimplePriceDataAttributes {
      return SimplePriceDataAttributesToJSONTyped(json, false);
  }

  export function SimplePriceDataAttributesToJSONTyped(value?: SimplePriceDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'token_prices': value['tokenPrices'],
    };
}

