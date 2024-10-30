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
import type { CoinsHistoricalDataPublicInterestStats } from './CoinsHistoricalDataPublicInterestStats';
import {
    CoinsHistoricalDataPublicInterestStatsFromJSON,
    CoinsHistoricalDataPublicInterestStatsFromJSONTyped,
    CoinsHistoricalDataPublicInterestStatsToJSON,
    CoinsHistoricalDataPublicInterestStatsToJSONTyped,
} from './CoinsHistoricalDataPublicInterestStats';
import type { CoinsHistoricalDataDeveloperData } from './CoinsHistoricalDataDeveloperData';
import {
    CoinsHistoricalDataDeveloperDataFromJSON,
    CoinsHistoricalDataDeveloperDataFromJSONTyped,
    CoinsHistoricalDataDeveloperDataToJSON,
    CoinsHistoricalDataDeveloperDataToJSONTyped,
} from './CoinsHistoricalDataDeveloperData';
import type { CoinsHistoricalDataMarketData } from './CoinsHistoricalDataMarketData';
import {
    CoinsHistoricalDataMarketDataFromJSON,
    CoinsHistoricalDataMarketDataFromJSONTyped,
    CoinsHistoricalDataMarketDataToJSON,
    CoinsHistoricalDataMarketDataToJSONTyped,
} from './CoinsHistoricalDataMarketData';
import type { CoinsHistoricalDataImage } from './CoinsHistoricalDataImage';
import {
    CoinsHistoricalDataImageFromJSON,
    CoinsHistoricalDataImageFromJSONTyped,
    CoinsHistoricalDataImageToJSON,
    CoinsHistoricalDataImageToJSONTyped,
} from './CoinsHistoricalDataImage';
import type { CoinsHistoricalDataCommunityData } from './CoinsHistoricalDataCommunityData';
import {
    CoinsHistoricalDataCommunityDataFromJSON,
    CoinsHistoricalDataCommunityDataFromJSONTyped,
    CoinsHistoricalDataCommunityDataToJSON,
    CoinsHistoricalDataCommunityDataToJSONTyped,
} from './CoinsHistoricalDataCommunityData';

/**
 * 
 * @export
 * @interface CoinsHistoricalData
 */
export interface CoinsHistoricalData {
    /**
     * coin id
     * @type {string}
     * @memberof CoinsHistoricalData
     */
    id?: string;
    /**
     * coin symbol
     * @type {string}
     * @memberof CoinsHistoricalData
     */
    symbol?: string;
    /**
     * coin name
     * @type {string}
     * @memberof CoinsHistoricalData
     */
    name?: string;
    /**
     * coin localization
     * @type {{ [key: string]: string; }}
     * @memberof CoinsHistoricalData
     */
    localization?: { [key: string]: string; };
    /**
     * 
     * @type {CoinsHistoricalDataImage}
     * @memberof CoinsHistoricalData
     */
    image?: CoinsHistoricalDataImage;
    /**
     * 
     * @type {CoinsHistoricalDataMarketData}
     * @memberof CoinsHistoricalData
     */
    marketData?: CoinsHistoricalDataMarketData;
    /**
     * 
     * @type {CoinsHistoricalDataCommunityData}
     * @memberof CoinsHistoricalData
     */
    communityData?: CoinsHistoricalDataCommunityData;
    /**
     * 
     * @type {CoinsHistoricalDataDeveloperData}
     * @memberof CoinsHistoricalData
     */
    developerData?: CoinsHistoricalDataDeveloperData;
    /**
     * 
     * @type {CoinsHistoricalDataPublicInterestStats}
     * @memberof CoinsHistoricalData
     */
    publicInterestStats?: CoinsHistoricalDataPublicInterestStats;
}

/**
 * Check if a given object implements the CoinsHistoricalData interface.
 */
export function instanceOfCoinsHistoricalData(value: object): value is CoinsHistoricalData {
    return true;
}

export function CoinsHistoricalDataFromJSON(json: any): CoinsHistoricalData {
    return CoinsHistoricalDataFromJSONTyped(json, false);
}

export function CoinsHistoricalDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsHistoricalData {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'symbol': json['symbol'] == null ? undefined : json['symbol'],
        'name': json['name'] == null ? undefined : json['name'],
        'localization': json['localization'] == null ? undefined : json['localization'],
        'image': json['image'] == null ? undefined : CoinsHistoricalDataImageFromJSON(json['image']),
        'marketData': json['market_data'] == null ? undefined : CoinsHistoricalDataMarketDataFromJSON(json['market_data']),
        'communityData': json['community_data'] == null ? undefined : CoinsHistoricalDataCommunityDataFromJSON(json['community_data']),
        'developerData': json['developer_data'] == null ? undefined : CoinsHistoricalDataDeveloperDataFromJSON(json['developer_data']),
        'publicInterestStats': json['public_interest_stats'] == null ? undefined : CoinsHistoricalDataPublicInterestStatsFromJSON(json['public_interest_stats']),
    };
}

  export function CoinsHistoricalDataToJSON(json: any): CoinsHistoricalData {
      return CoinsHistoricalDataToJSONTyped(json, false);
  }

  export function CoinsHistoricalDataToJSONTyped(value?: CoinsHistoricalData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'symbol': value['symbol'],
        'name': value['name'],
        'localization': value['localization'],
        'image': CoinsHistoricalDataImageToJSON(value['image']),
        'market_data': CoinsHistoricalDataMarketDataToJSON(value['marketData']),
        'community_data': CoinsHistoricalDataCommunityDataToJSON(value['communityData']),
        'developer_data': CoinsHistoricalDataDeveloperDataToJSON(value['developerData']),
        'public_interest_stats': CoinsHistoricalDataPublicInterestStatsToJSON(value['publicInterestStats']),
    };
}
