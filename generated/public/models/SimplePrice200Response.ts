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
 * @interface SimplePrice200Response
 */
export interface SimplePrice200Response {
    /**
     * 
     * @type {SimplePrice}
     * @memberof SimplePrice200Response
     */
    bitcoin?: SimplePrice;
}

/**
 * Check if a given object implements the SimplePrice200Response interface.
 */
export function instanceOfSimplePrice200Response(value: object): value is SimplePrice200Response {
    return true;
}

export function SimplePrice200ResponseFromJSON(json: any): SimplePrice200Response {
    return SimplePrice200ResponseFromJSONTyped(json, false);
}

export function SimplePrice200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimplePrice200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'bitcoin': json['bitcoin'] == null ? undefined : SimplePriceFromJSON(json['bitcoin']),
    };
}

  export function SimplePrice200ResponseToJSON(json: any): SimplePrice200Response {
      return SimplePrice200ResponseToJSONTyped(json, false);
  }

  export function SimplePrice200ResponseToJSONTyped(value?: SimplePrice200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bitcoin': SimplePriceToJSON(value['bitcoin']),
    };
}

