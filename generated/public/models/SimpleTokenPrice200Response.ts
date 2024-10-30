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
import type { SimplePrice } from './SimplePrice';
import {
    SimplePriceFromJSON,
    SimplePriceFromJSONTyped,
    SimplePriceToJSON,
    SimplePriceToJSONTyped,
} from './SimplePrice';

/**
 * 
 * @export
 * @interface SimpleTokenPrice200Response
 */
export interface SimpleTokenPrice200Response {
    /**
     * 
     * @type {SimplePrice}
     * @memberof SimpleTokenPrice200Response
     */
    _0x2260fac5e5542a773aa44fbcfedf7c193bc2c599?: SimplePrice;
}

/**
 * Check if a given object implements the SimpleTokenPrice200Response interface.
 */
export function instanceOfSimpleTokenPrice200Response(value: object): value is SimpleTokenPrice200Response {
    return true;
}

export function SimpleTokenPrice200ResponseFromJSON(json: any): SimpleTokenPrice200Response {
    return SimpleTokenPrice200ResponseFromJSONTyped(json, false);
}

export function SimpleTokenPrice200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimpleTokenPrice200Response {
    if (json == null) {
        return json;
    }
    return {
        
        '_0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': json['0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'] == null ? undefined : SimplePriceFromJSON(json['0x2260fac5e5542a773aa44fbcfedf7c193bc2c599']),
    };
}

  export function SimpleTokenPrice200ResponseToJSON(json: any): SimpleTokenPrice200Response {
      return SimpleTokenPrice200ResponseToJSONTyped(json, false);
  }

  export function SimpleTokenPrice200ResponseToJSONTyped(value?: SimpleTokenPrice200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': SimplePriceToJSON(value['_0x2260fac5e5542a773aa44fbcfedf7c193bc2c599']),
    };
}

