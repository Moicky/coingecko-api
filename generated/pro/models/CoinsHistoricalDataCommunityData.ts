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
 * coin community data
 * @export
 * @interface CoinsHistoricalDataCommunityData
 */
export interface CoinsHistoricalDataCommunityData {
    /**
     * coin facebook likes
     * @type {number}
     * @memberof CoinsHistoricalDataCommunityData
     */
    facebookLikes?: number;
    /**
     * coin twitter followers
     * @type {number}
     * @memberof CoinsHistoricalDataCommunityData
     */
    twitterFollowers?: number;
    /**
     * coin reddit average posts 48h
     * @type {number}
     * @memberof CoinsHistoricalDataCommunityData
     */
    redditAveragePosts48h?: number;
    /**
     * coin reddit average comments 48h
     * @type {number}
     * @memberof CoinsHistoricalDataCommunityData
     */
    redditAverageComments48h?: number;
    /**
     * coin reddit subscribers
     * @type {number}
     * @memberof CoinsHistoricalDataCommunityData
     */
    redditSubscribers?: number;
    /**
     * coin reddit accounts active 48h
     * @type {number}
     * @memberof CoinsHistoricalDataCommunityData
     */
    redditAccountsActive48h?: number;
}

/**
 * Check if a given object implements the CoinsHistoricalDataCommunityData interface.
 */
export function instanceOfCoinsHistoricalDataCommunityData(value: object): value is CoinsHistoricalDataCommunityData {
    return true;
}

export function CoinsHistoricalDataCommunityDataFromJSON(json: any): CoinsHistoricalDataCommunityData {
    return CoinsHistoricalDataCommunityDataFromJSONTyped(json, false);
}

export function CoinsHistoricalDataCommunityDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsHistoricalDataCommunityData {
    if (json == null) {
        return json;
    }
    return {
        
        'facebookLikes': json['facebook_likes'] == null ? undefined : json['facebook_likes'],
        'twitterFollowers': json['twitter_followers'] == null ? undefined : json['twitter_followers'],
        'redditAveragePosts48h': json['reddit_average_posts_48h'] == null ? undefined : json['reddit_average_posts_48h'],
        'redditAverageComments48h': json['reddit_average_comments_48h'] == null ? undefined : json['reddit_average_comments_48h'],
        'redditSubscribers': json['reddit_subscribers'] == null ? undefined : json['reddit_subscribers'],
        'redditAccountsActive48h': json['reddit_accounts_active_48h'] == null ? undefined : json['reddit_accounts_active_48h'],
    };
}

  export function CoinsHistoricalDataCommunityDataToJSON(json: any): CoinsHistoricalDataCommunityData {
      return CoinsHistoricalDataCommunityDataToJSONTyped(json, false);
  }

  export function CoinsHistoricalDataCommunityDataToJSONTyped(value?: CoinsHistoricalDataCommunityData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'facebook_likes': value['facebookLikes'],
        'twitter_followers': value['twitterFollowers'],
        'reddit_average_posts_48h': value['redditAveragePosts48h'],
        'reddit_average_comments_48h': value['redditAverageComments48h'],
        'reddit_subscribers': value['redditSubscribers'],
        'reddit_accounts_active_48h': value['redditAccountsActive48h'],
    };
}
