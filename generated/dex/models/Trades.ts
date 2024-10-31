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
import type { TradesDataInner } from './TradesDataInner';
import {
    TradesDataInnerFromJSON,
    TradesDataInnerFromJSONTyped,
    TradesDataInnerToJSON,
    TradesDataInnerToJSONTyped,
} from './TradesDataInner';

/**
 * 
 * @export
 * @interface Trades
 */
export interface Trades {
    /**
     * 
     * @type {Array<TradesDataInner>}
     * @memberof Trades
     */
    data?: Array<TradesDataInner>;
}

/**
 * Check if a given object implements the Trades interface.
 */
export function instanceOfTrades(value: object): value is Trades {
    return true;
}

export function TradesFromJSON(json: any): Trades {
    return TradesFromJSONTyped(json, false);
}

export function TradesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Trades {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(TradesDataInnerFromJSON)),
    };
}

  export function TradesToJSON(json: any): Trades {
      return TradesToJSONTyped(json, false);
  }

  export function TradesToJSONTyped(value?: Trades | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(TradesDataInnerToJSON)),
    };
}
