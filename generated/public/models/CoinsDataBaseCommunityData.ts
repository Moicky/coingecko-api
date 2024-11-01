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
 * coin community data
 * @export
 * @interface CoinsDataBaseCommunityData
 */
export interface CoinsDataBaseCommunityData {
    /**
     * coin facebook likes
     * @type {number}
     * @memberof CoinsDataBaseCommunityData
     */
    facebookLikes?: number;
    /**
     * coin twitter followers
     * @type {number}
     * @memberof CoinsDataBaseCommunityData
     */
    twitterFollowers?: number;
    /**
     * coin reddit average posts in 48 hours
     * @type {number}
     * @memberof CoinsDataBaseCommunityData
     */
    redditAveragePosts48h?: number;
    /**
     * coin reddit average comments in 48 hours
     * @type {number}
     * @memberof CoinsDataBaseCommunityData
     */
    redditAverageComments48h?: number;
    /**
     * coin reddit subscribers
     * @type {number}
     * @memberof CoinsDataBaseCommunityData
     */
    redditSubscribers?: number;
    /**
     * coin reddit active accounts in 48 hours
     * @type {number}
     * @memberof CoinsDataBaseCommunityData
     */
    redditAccountsActive48h?: number;
    /**
     * coin telegram channel user count
     * @type {number}
     * @memberof CoinsDataBaseCommunityData
     */
    telegramChannelUserCount?: number;
}

/**
 * Check if a given object implements the CoinsDataBaseCommunityData interface.
 */
export function instanceOfCoinsDataBaseCommunityData(value: object): value is CoinsDataBaseCommunityData {
    return true;
}

export function CoinsDataBaseCommunityDataFromJSON(json: any): CoinsDataBaseCommunityData {
    return CoinsDataBaseCommunityDataFromJSONTyped(json, false);
}

export function CoinsDataBaseCommunityDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsDataBaseCommunityData {
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
        'telegramChannelUserCount': json['telegram_channel_user_count'] == null ? undefined : json['telegram_channel_user_count'],
    };
}

  export function CoinsDataBaseCommunityDataToJSON(json: any): CoinsDataBaseCommunityData {
      return CoinsDataBaseCommunityDataToJSONTyped(json, false);
  }

  export function CoinsDataBaseCommunityDataToJSONTyped(value?: CoinsDataBaseCommunityData | null, ignoreDiscriminator: boolean = false): any {
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
        'telegram_channel_user_count': value['telegramChannelUserCount'],
    };
}

