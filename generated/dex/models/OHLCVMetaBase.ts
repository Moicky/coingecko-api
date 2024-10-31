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
 * @interface OHLCVMetaBase
 */
export interface OHLCVMetaBase {
    /**
     * 
     * @type {string}
     * @memberof OHLCVMetaBase
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof OHLCVMetaBase
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof OHLCVMetaBase
     */
    symbol?: string;
    /**
     * 
     * @type {string}
     * @memberof OHLCVMetaBase
     */
    coingeckoCoinId?: string;
}

/**
 * Check if a given object implements the OHLCVMetaBase interface.
 */
export function instanceOfOHLCVMetaBase(value: object): value is OHLCVMetaBase {
    return true;
}

export function OHLCVMetaBaseFromJSON(json: any): OHLCVMetaBase {
    return OHLCVMetaBaseFromJSONTyped(json, false);
}

export function OHLCVMetaBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OHLCVMetaBase {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'] == null ? undefined : json['address'],
        'name': json['name'] == null ? undefined : json['name'],
        'symbol': json['symbol'] == null ? undefined : json['symbol'],
        'coingeckoCoinId': json['coingecko_coin_id'] == null ? undefined : json['coingecko_coin_id'],
    };
}

  export function OHLCVMetaBaseToJSON(json: any): OHLCVMetaBase {
      return OHLCVMetaBaseToJSONTyped(json, false);
  }

  export function OHLCVMetaBaseToJSONTyped(value?: OHLCVMetaBase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': value['address'],
        'name': value['name'],
        'symbol': value['symbol'],
        'coingecko_coin_id': value['coingeckoCoinId'],
    };
}
