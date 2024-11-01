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
 * @interface TrendingSearchNftsInnerData
 */
export interface TrendingSearchNftsInnerData {
    /**
     * nft collection floor price
     * @type {string}
     * @memberof TrendingSearchNftsInnerData
     */
    floorPrice?: string;
    /**
     * nft collection floor price in usd 24 hours percentage change
     * @type {string}
     * @memberof TrendingSearchNftsInnerData
     */
    floorPriceInUsd24hPercentageChange?: string;
    /**
     * nft collection volume in 24 hours
     * @type {string}
     * @memberof TrendingSearchNftsInnerData
     */
    h24Volume?: string;
    /**
     * nft collection 24 hours average sale price
     * @type {string}
     * @memberof TrendingSearchNftsInnerData
     */
    h24AverageSalePrice?: string;
    /**
     * nft collection sparkline image url
     * @type {string}
     * @memberof TrendingSearchNftsInnerData
     */
    sparkline?: string;
    /**
     * 
     * @type {string}
     * @memberof TrendingSearchNftsInnerData
     */
    content?: string;
}

/**
 * Check if a given object implements the TrendingSearchNftsInnerData interface.
 */
export function instanceOfTrendingSearchNftsInnerData(value: object): value is TrendingSearchNftsInnerData {
    return true;
}

export function TrendingSearchNftsInnerDataFromJSON(json: any): TrendingSearchNftsInnerData {
    return TrendingSearchNftsInnerDataFromJSONTyped(json, false);
}

export function TrendingSearchNftsInnerDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrendingSearchNftsInnerData {
    if (json == null) {
        return json;
    }
    return {
        
        'floorPrice': json['floor_price'] == null ? undefined : json['floor_price'],
        'floorPriceInUsd24hPercentageChange': json['floor_price_in_usd_24h_percentage_change'] == null ? undefined : json['floor_price_in_usd_24h_percentage_change'],
        'h24Volume': json['h24_volume'] == null ? undefined : json['h24_volume'],
        'h24AverageSalePrice': json['h24_average_sale_price'] == null ? undefined : json['h24_average_sale_price'],
        'sparkline': json['sparkline'] == null ? undefined : json['sparkline'],
        'content': json['content'] == null ? undefined : json['content'],
    };
}

  export function TrendingSearchNftsInnerDataToJSON(json: any): TrendingSearchNftsInnerData {
      return TrendingSearchNftsInnerDataToJSONTyped(json, false);
  }

  export function TrendingSearchNftsInnerDataToJSONTyped(value?: TrendingSearchNftsInnerData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'floor_price': value['floorPrice'],
        'floor_price_in_usd_24h_percentage_change': value['floorPriceInUsd24hPercentageChange'],
        'h24_volume': value['h24Volume'],
        'h24_average_sale_price': value['h24AverageSalePrice'],
        'sparkline': value['sparkline'],
        'content': value['content'],
    };
}

