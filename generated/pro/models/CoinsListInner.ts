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
 * @interface CoinsListInner
 */
export interface CoinsListInner {
    /**
     * coin id
     * @type {string}
     * @memberof CoinsListInner
     */
    id?: string;
    /**
     * coin symbol
     * @type {string}
     * @memberof CoinsListInner
     */
    symbol?: string;
    /**
     * coin name
     * @type {string}
     * @memberof CoinsListInner
     */
    name?: string;
    /**
     * coin asset platform and contract address
     * @type {{ [key: string]: string; }}
     * @memberof CoinsListInner
     */
    platforms?: { [key: string]: string; };
}

/**
 * Check if a given object implements the CoinsListInner interface.
 */
export function instanceOfCoinsListInner(value: object): value is CoinsListInner {
    return true;
}

export function CoinsListInnerFromJSON(json: any): CoinsListInner {
    return CoinsListInnerFromJSONTyped(json, false);
}

export function CoinsListInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsListInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'symbol': json['symbol'] == null ? undefined : json['symbol'],
        'name': json['name'] == null ? undefined : json['name'],
        'platforms': json['platforms'] == null ? undefined : json['platforms'],
    };
}

  export function CoinsListInnerToJSON(json: any): CoinsListInner {
      return CoinsListInnerToJSONTyped(json, false);
  }

  export function CoinsListInnerToJSONTyped(value?: CoinsListInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'symbol': value['symbol'],
        'name': value['name'],
        'platforms': value['platforms'],
    };
}

