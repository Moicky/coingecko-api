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
import type { CoinsTickersTickersInner } from './CoinsTickersTickersInner';
import {
    CoinsTickersTickersInnerFromJSON,
    CoinsTickersTickersInnerFromJSONTyped,
    CoinsTickersTickersInnerToJSON,
    CoinsTickersTickersInnerToJSONTyped,
} from './CoinsTickersTickersInner';

/**
 * 
 * @export
 * @interface ExchangeTickers
 */
export interface ExchangeTickers {
    /**
     * coin name
     * @type {string}
     * @memberof ExchangeTickers
     */
    name?: string;
    /**
     * list of tickers
     * @type {Array<CoinsTickersTickersInner>}
     * @memberof ExchangeTickers
     */
    tickers?: Array<CoinsTickersTickersInner>;
}

/**
 * Check if a given object implements the ExchangeTickers interface.
 */
export function instanceOfExchangeTickers(value: object): value is ExchangeTickers {
    return true;
}

export function ExchangeTickersFromJSON(json: any): ExchangeTickers {
    return ExchangeTickersFromJSONTyped(json, false);
}

export function ExchangeTickersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExchangeTickers {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'tickers': json['tickers'] == null ? undefined : ((json['tickers'] as Array<any>).map(CoinsTickersTickersInnerFromJSON)),
    };
}

  export function ExchangeTickersToJSON(json: any): ExchangeTickers {
      return ExchangeTickersToJSONTyped(json, false);
  }

  export function ExchangeTickersToJSONTyped(value?: ExchangeTickers | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'tickers': value['tickers'] == null ? undefined : ((value['tickers'] as Array<any>).map(CoinsTickersTickersInnerToJSON)),
    };
}

