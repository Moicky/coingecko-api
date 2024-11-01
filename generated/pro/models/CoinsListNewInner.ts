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
 * 
 * @export
 * @interface CoinsListNewInner
 */
export interface CoinsListNewInner {
    /**
     * coin id
     * @type {string}
     * @memberof CoinsListNewInner
     */
    id?: string;
    /**
     * coin symbol
     * @type {string}
     * @memberof CoinsListNewInner
     */
    symbol?: string;
    /**
     * coin name
     * @type {string}
     * @memberof CoinsListNewInner
     */
    name?: string;
    /**
     * timestamp when coin was activated on CoinGecko
     * @type {number}
     * @memberof CoinsListNewInner
     */
    activatedAt?: number;
}

/**
 * Check if a given object implements the CoinsListNewInner interface.
 */
export function instanceOfCoinsListNewInner(value: object): value is CoinsListNewInner {
    return true;
}

export function CoinsListNewInnerFromJSON(json: any): CoinsListNewInner {
    return CoinsListNewInnerFromJSONTyped(json, false);
}

export function CoinsListNewInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsListNewInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'symbol': json['symbol'] == null ? undefined : json['symbol'],
        'name': json['name'] == null ? undefined : json['name'],
        'activatedAt': json['activated_at'] == null ? undefined : json['activated_at'],
    };
}

  export function CoinsListNewInnerToJSON(json: any): CoinsListNewInner {
      return CoinsListNewInnerToJSONTyped(json, false);
  }

  export function CoinsListNewInnerToJSONTyped(value?: CoinsListNewInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'symbol': value['symbol'],
        'name': value['name'],
        'activated_at': value['activatedAt'],
    };
}

