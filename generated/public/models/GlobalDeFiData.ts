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
 * @interface GlobalDeFiData
 */
export interface GlobalDeFiData {
    /**
     * defi market cap
     * @type {string}
     * @memberof GlobalDeFiData
     */
    defiMarketCap?: string;
    /**
     * eth market cap
     * @type {string}
     * @memberof GlobalDeFiData
     */
    ethMarketCap?: string;
    /**
     * defi to eth ratio
     * @type {string}
     * @memberof GlobalDeFiData
     */
    defiToEthRatio?: string;
    /**
     * defi trading volume in 24 hours
     * @type {string}
     * @memberof GlobalDeFiData
     */
    tradingVolume24h?: string;
    /**
     * defi dominance
     * @type {string}
     * @memberof GlobalDeFiData
     */
    defiDominance?: string;
    /**
     * defi top coin name
     * @type {string}
     * @memberof GlobalDeFiData
     */
    topCoinName?: string;
    /**
     * defi top coin dominance
     * @type {number}
     * @memberof GlobalDeFiData
     */
    topCoinDefiDominance?: number;
}

/**
 * Check if a given object implements the GlobalDeFiData interface.
 */
export function instanceOfGlobalDeFiData(value: object): value is GlobalDeFiData {
    return true;
}

export function GlobalDeFiDataFromJSON(json: any): GlobalDeFiData {
    return GlobalDeFiDataFromJSONTyped(json, false);
}

export function GlobalDeFiDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalDeFiData {
    if (json == null) {
        return json;
    }
    return {
        
        'defiMarketCap': json['defi_market_cap'] == null ? undefined : json['defi_market_cap'],
        'ethMarketCap': json['eth_market_cap'] == null ? undefined : json['eth_market_cap'],
        'defiToEthRatio': json['defi_to_eth_ratio'] == null ? undefined : json['defi_to_eth_ratio'],
        'tradingVolume24h': json['trading_volume_24h'] == null ? undefined : json['trading_volume_24h'],
        'defiDominance': json['defi_dominance'] == null ? undefined : json['defi_dominance'],
        'topCoinName': json['top_coin_name'] == null ? undefined : json['top_coin_name'],
        'topCoinDefiDominance': json['top_coin_defi_dominance'] == null ? undefined : json['top_coin_defi_dominance'],
    };
}

  export function GlobalDeFiDataToJSON(json: any): GlobalDeFiData {
      return GlobalDeFiDataToJSONTyped(json, false);
  }

  export function GlobalDeFiDataToJSONTyped(value?: GlobalDeFiData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'defi_market_cap': value['defiMarketCap'],
        'eth_market_cap': value['ethMarketCap'],
        'defi_to_eth_ratio': value['defiToEthRatio'],
        'trading_volume_24h': value['tradingVolume24h'],
        'defi_dominance': value['defiDominance'],
        'top_coin_name': value['topCoinName'],
        'top_coin_defi_dominance': value['topCoinDefiDominance'],
    };
}

