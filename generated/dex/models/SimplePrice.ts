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
import type { SimplePriceData } from './SimplePriceData';
import {
    SimplePriceDataFromJSON,
    SimplePriceDataFromJSONTyped,
    SimplePriceDataToJSON,
    SimplePriceDataToJSONTyped,
} from './SimplePriceData';

/**
 * 
 * @export
 * @interface SimplePrice
 */
export interface SimplePrice {
    /**
     * 
     * @type {SimplePriceData}
     * @memberof SimplePrice
     */
    data?: SimplePriceData;
}

/**
 * Check if a given object implements the SimplePrice interface.
 */
export function instanceOfSimplePrice(value: object): value is SimplePrice {
    return true;
}

export function SimplePriceFromJSON(json: any): SimplePrice {
    return SimplePriceFromJSONTyped(json, false);
}

export function SimplePriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimplePrice {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : SimplePriceDataFromJSON(json['data']),
    };
}

  export function SimplePriceToJSON(json: any): SimplePrice {
      return SimplePriceToJSONTyped(json, false);
  }

  export function SimplePriceToJSONTyped(value?: SimplePrice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': SimplePriceDataToJSON(value['data']),
    };
}
