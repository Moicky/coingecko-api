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
/**
 * 
 * @export
 * @interface CoinsMarketChart
 */
export interface CoinsMarketChart {
    /**
     * 
     * @type {Array<Array<number>>}
     * @memberof CoinsMarketChart
     */
    prices?: Array<Array<number>>;
    /**
     * 
     * @type {Array<Array<number>>}
     * @memberof CoinsMarketChart
     */
    marketCaps?: Array<Array<number>>;
    /**
     * 
     * @type {Array<Array<number>>}
     * @memberof CoinsMarketChart
     */
    totalVolumes?: Array<Array<number>>;
}

/**
 * Check if a given object implements the CoinsMarketChart interface.
 */
export function instanceOfCoinsMarketChart(value: object): value is CoinsMarketChart {
    return true;
}

export function CoinsMarketChartFromJSON(json: any): CoinsMarketChart {
    return CoinsMarketChartFromJSONTyped(json, false);
}

export function CoinsMarketChartFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsMarketChart {
    if (json == null) {
        return json;
    }
    return {
        
        'prices': json['prices'] == null ? undefined : json['prices'],
        'marketCaps': json['market_caps'] == null ? undefined : json['market_caps'],
        'totalVolumes': json['total_volumes'] == null ? undefined : json['total_volumes'],
    };
}

  export function CoinsMarketChartToJSON(json: any): CoinsMarketChart {
      return CoinsMarketChartToJSONTyped(json, false);
  }

  export function CoinsMarketChartToJSONTyped(value?: CoinsMarketChart | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'prices': value['prices'],
        'market_caps': value['marketCaps'],
        'total_volumes': value['totalVolumes'],
    };
}

