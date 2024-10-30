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
import type { CoinsDataBaseCommunityData } from './CoinsDataBaseCommunityData';
import {
    CoinsDataBaseCommunityDataFromJSON,
    CoinsDataBaseCommunityDataFromJSONTyped,
    CoinsDataBaseCommunityDataToJSON,
    CoinsDataBaseCommunityDataToJSONTyped,
} from './CoinsDataBaseCommunityData';
import type { CoinsDataBaseImage } from './CoinsDataBaseImage';
import {
    CoinsDataBaseImageFromJSON,
    CoinsDataBaseImageFromJSONTyped,
    CoinsDataBaseImageToJSON,
    CoinsDataBaseImageToJSONTyped,
} from './CoinsDataBaseImage';
import type { CoinsDataBaseDeveloperData } from './CoinsDataBaseDeveloperData';
import {
    CoinsDataBaseDeveloperDataFromJSON,
    CoinsDataBaseDeveloperDataFromJSONTyped,
    CoinsDataBaseDeveloperDataToJSON,
    CoinsDataBaseDeveloperDataToJSONTyped,
} from './CoinsDataBaseDeveloperData';
import type { CoinsDataBaseTickersInner } from './CoinsDataBaseTickersInner';
import {
    CoinsDataBaseTickersInnerFromJSON,
    CoinsDataBaseTickersInnerFromJSONTyped,
    CoinsDataBaseTickersInnerToJSON,
    CoinsDataBaseTickersInnerToJSONTyped,
} from './CoinsDataBaseTickersInner';
import type { CoinsDataBaseLinks } from './CoinsDataBaseLinks';
import {
    CoinsDataBaseLinksFromJSON,
    CoinsDataBaseLinksFromJSONTyped,
    CoinsDataBaseLinksToJSON,
    CoinsDataBaseLinksToJSONTyped,
} from './CoinsDataBaseLinks';
import type { CoinsDataBaseMarketData } from './CoinsDataBaseMarketData';
import {
    CoinsDataBaseMarketDataFromJSON,
    CoinsDataBaseMarketDataFromJSONTyped,
    CoinsDataBaseMarketDataToJSON,
    CoinsDataBaseMarketDataToJSONTyped,
} from './CoinsDataBaseMarketData';

/**
 * 
 * @export
 * @interface CoinsContractAddress
 */
export interface CoinsContractAddress {
    /**
     * coin id
     * @type {string}
     * @memberof CoinsContractAddress
     */
    id?: string;
    /**
     * coin symbol
     * @type {string}
     * @memberof CoinsContractAddress
     */
    symbol?: string;
    /**
     * coin name
     * @type {string}
     * @memberof CoinsContractAddress
     */
    name?: string;
    /**
     * coin web slug
     * @type {string}
     * @memberof CoinsContractAddress
     */
    webSlug?: string;
    /**
     * coin asset platform id
     * @type {string}
     * @memberof CoinsContractAddress
     */
    assetPlatformId?: string;
    /**
     * coin asset platform and contract address
     * @type {{ [key: string]: string; }}
     * @memberof CoinsContractAddress
     */
    platforms?: { [key: string]: string; };
    /**
     * detailed coin asset platform and contract address
     * @type {{ [key: string]: string; }}
     * @memberof CoinsContractAddress
     */
    detailPlatforms?: { [key: string]: string; };
    /**
     * blockchain block time in minutes
     * @type {number}
     * @memberof CoinsContractAddress
     */
    blockTimeInMinutes?: number;
    /**
     * blockchain hashing algorithm
     * @type {string}
     * @memberof CoinsContractAddress
     */
    hashingAlgorithm?: string;
    /**
     * coin categories
     * @type {Array<string>}
     * @memberof CoinsContractAddress
     */
    categories?: Array<string>;
    /**
     * preview listing coin
     * @type {boolean}
     * @memberof CoinsContractAddress
     */
    previewListing?: boolean;
    /**
     * public notice
     * @type {string}
     * @memberof CoinsContractAddress
     */
    publicNotice?: string;
    /**
     * additional notices
     * @type {Array<string>}
     * @memberof CoinsContractAddress
     */
    additionalNotices?: Array<string>;
    /**
     * coin name localization
     * @type {{ [key: string]: string; }}
     * @memberof CoinsContractAddress
     */
    localization?: { [key: string]: string; };
    /**
     * coin description
     * @type {{ [key: string]: string; }}
     * @memberof CoinsContractAddress
     */
    description?: { [key: string]: string; };
    /**
     * 
     * @type {CoinsDataBaseLinks}
     * @memberof CoinsContractAddress
     */
    links?: CoinsDataBaseLinks;
    /**
     * 
     * @type {CoinsDataBaseImage}
     * @memberof CoinsContractAddress
     */
    image?: CoinsDataBaseImage;
    /**
     * coin country of origin
     * @type {string}
     * @memberof CoinsContractAddress
     */
    countryOrigin?: string;
    /**
     * coin genesis date
     * @type {Date}
     * @memberof CoinsContractAddress
     */
    genesisDate?: Date;
    /**
     * coin sentiment votes up percentage
     * @type {number}
     * @memberof CoinsContractAddress
     */
    sentimentVotesUpPercentage?: number;
    /**
     * coin sentiment votes down percentage
     * @type {number}
     * @memberof CoinsContractAddress
     */
    sentimentVotesDownPercentage?: number;
    /**
     * coin rank by market cap
     * @type {number}
     * @memberof CoinsContractAddress
     */
    marketCapRank?: number;
    /**
     * 
     * @type {CoinsDataBaseMarketData}
     * @memberof CoinsContractAddress
     */
    marketData?: CoinsDataBaseMarketData;
    /**
     * 
     * @type {CoinsDataBaseCommunityData}
     * @memberof CoinsContractAddress
     */
    communityData?: CoinsDataBaseCommunityData;
    /**
     * 
     * @type {CoinsDataBaseDeveloperData}
     * @memberof CoinsContractAddress
     */
    developerData?: CoinsDataBaseDeveloperData;
    /**
     * coin status updates
     * @type {Array<object>}
     * @memberof CoinsContractAddress
     */
    statusUpdates?: Array<object>;
    /**
     * coin last updated timestamp
     * @type {Date}
     * @memberof CoinsContractAddress
     */
    lastUpdated?: Date;
    /**
     * coin tickers
     * @type {Array<CoinsDataBaseTickersInner>}
     * @memberof CoinsContractAddress
     */
    tickers?: Array<CoinsDataBaseTickersInner>;
}

/**
 * Check if a given object implements the CoinsContractAddress interface.
 */
export function instanceOfCoinsContractAddress(value: object): value is CoinsContractAddress {
    return true;
}

export function CoinsContractAddressFromJSON(json: any): CoinsContractAddress {
    return CoinsContractAddressFromJSONTyped(json, false);
}

export function CoinsContractAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsContractAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'symbol': json['symbol'] == null ? undefined : json['symbol'],
        'name': json['name'] == null ? undefined : json['name'],
        'webSlug': json['web_slug'] == null ? undefined : json['web_slug'],
        'assetPlatformId': json['asset_platform_id'] == null ? undefined : json['asset_platform_id'],
        'platforms': json['platforms'] == null ? undefined : json['platforms'],
        'detailPlatforms': json['detail_platforms'] == null ? undefined : json['detail_platforms'],
        'blockTimeInMinutes': json['block_time_in_minutes'] == null ? undefined : json['block_time_in_minutes'],
        'hashingAlgorithm': json['hashing_algorithm'] == null ? undefined : json['hashing_algorithm'],
        'categories': json['categories'] == null ? undefined : json['categories'],
        'previewListing': json['preview_listing'] == null ? undefined : json['preview_listing'],
        'publicNotice': json['public_notice'] == null ? undefined : json['public_notice'],
        'additionalNotices': json['additional_notices'] == null ? undefined : json['additional_notices'],
        'localization': json['localization'] == null ? undefined : json['localization'],
        'description': json['description'] == null ? undefined : json['description'],
        'links': json['links'] == null ? undefined : CoinsDataBaseLinksFromJSON(json['links']),
        'image': json['image'] == null ? undefined : CoinsDataBaseImageFromJSON(json['image']),
        'countryOrigin': json['country_origin'] == null ? undefined : json['country_origin'],
        'genesisDate': json['genesis_date'] == null ? undefined : (new Date(json['genesis_date'])),
        'sentimentVotesUpPercentage': json['sentiment_votes_up_percentage'] == null ? undefined : json['sentiment_votes_up_percentage'],
        'sentimentVotesDownPercentage': json['sentiment_votes_down_percentage'] == null ? undefined : json['sentiment_votes_down_percentage'],
        'marketCapRank': json['market_cap_rank'] == null ? undefined : json['market_cap_rank'],
        'marketData': json['market_data'] == null ? undefined : CoinsDataBaseMarketDataFromJSON(json['market_data']),
        'communityData': json['community_data'] == null ? undefined : CoinsDataBaseCommunityDataFromJSON(json['community_data']),
        'developerData': json['developer_data'] == null ? undefined : CoinsDataBaseDeveloperDataFromJSON(json['developer_data']),
        'statusUpdates': json['status_updates'] == null ? undefined : json['status_updates'],
        'lastUpdated': json['last_updated'] == null ? undefined : (new Date(json['last_updated'])),
        'tickers': json['tickers'] == null ? undefined : ((json['tickers'] as Array<any>).map(CoinsDataBaseTickersInnerFromJSON)),
    };
}

  export function CoinsContractAddressToJSON(json: any): CoinsContractAddress {
      return CoinsContractAddressToJSONTyped(json, false);
  }

  export function CoinsContractAddressToJSONTyped(value?: CoinsContractAddress | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'symbol': value['symbol'],
        'name': value['name'],
        'web_slug': value['webSlug'],
        'asset_platform_id': value['assetPlatformId'],
        'platforms': value['platforms'],
        'detail_platforms': value['detailPlatforms'],
        'block_time_in_minutes': value['blockTimeInMinutes'],
        'hashing_algorithm': value['hashingAlgorithm'],
        'categories': value['categories'],
        'preview_listing': value['previewListing'],
        'public_notice': value['publicNotice'],
        'additional_notices': value['additionalNotices'],
        'localization': value['localization'],
        'description': value['description'],
        'links': CoinsDataBaseLinksToJSON(value['links']),
        'image': CoinsDataBaseImageToJSON(value['image']),
        'country_origin': value['countryOrigin'],
        'genesis_date': value['genesisDate'] == null ? undefined : ((value['genesisDate']).toISOString()),
        'sentiment_votes_up_percentage': value['sentimentVotesUpPercentage'],
        'sentiment_votes_down_percentage': value['sentimentVotesDownPercentage'],
        'market_cap_rank': value['marketCapRank'],
        'market_data': CoinsDataBaseMarketDataToJSON(value['marketData']),
        'community_data': CoinsDataBaseCommunityDataToJSON(value['communityData']),
        'developer_data': CoinsDataBaseDeveloperDataToJSON(value['developerData']),
        'status_updates': value['statusUpdates'],
        'last_updated': value['lastUpdated'] == null ? undefined : ((value['lastUpdated']).toISOString()),
        'tickers': value['tickers'] == null ? undefined : ((value['tickers'] as Array<any>).map(CoinsDataBaseTickersInnerToJSON)),
    };
}

