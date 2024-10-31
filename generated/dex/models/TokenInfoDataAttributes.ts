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
 * @interface TokenInfoDataAttributes
 */
export interface TokenInfoDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof TokenInfoDataAttributes
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenInfoDataAttributes
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenInfoDataAttributes
     */
    symbol?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenInfoDataAttributes
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenInfoDataAttributes
     */
    coingeckoCoinId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TokenInfoDataAttributes
     */
    websites?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TokenInfoDataAttributes
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof TokenInfoDataAttributes
     */
    gtScore?: number;
    /**
     * 
     * @type {string}
     * @memberof TokenInfoDataAttributes
     */
    discordUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenInfoDataAttributes
     */
    telegramHandle?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenInfoDataAttributes
     */
    twitterHandle?: string;
}

/**
 * Check if a given object implements the TokenInfoDataAttributes interface.
 */
export function instanceOfTokenInfoDataAttributes(value: object): value is TokenInfoDataAttributes {
    return true;
}

export function TokenInfoDataAttributesFromJSON(json: any): TokenInfoDataAttributes {
    return TokenInfoDataAttributesFromJSONTyped(json, false);
}

export function TokenInfoDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenInfoDataAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'] == null ? undefined : json['address'],
        'name': json['name'] == null ? undefined : json['name'],
        'symbol': json['symbol'] == null ? undefined : json['symbol'],
        'imageUrl': json['image_url'] == null ? undefined : json['image_url'],
        'coingeckoCoinId': json['coingecko_coin_id'] == null ? undefined : json['coingecko_coin_id'],
        'websites': json['websites'] == null ? undefined : json['websites'],
        'description': json['description'] == null ? undefined : json['description'],
        'gtScore': json['gt_score'] == null ? undefined : json['gt_score'],
        'discordUrl': json['discord_url'] == null ? undefined : json['discord_url'],
        'telegramHandle': json['telegram_handle'] == null ? undefined : json['telegram_handle'],
        'twitterHandle': json['twitter_handle'] == null ? undefined : json['twitter_handle'],
    };
}

  export function TokenInfoDataAttributesToJSON(json: any): TokenInfoDataAttributes {
      return TokenInfoDataAttributesToJSONTyped(json, false);
  }

  export function TokenInfoDataAttributesToJSONTyped(value?: TokenInfoDataAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': value['address'],
        'name': value['name'],
        'symbol': value['symbol'],
        'image_url': value['imageUrl'],
        'coingecko_coin_id': value['coingeckoCoinId'],
        'websites': value['websites'],
        'description': value['description'],
        'gt_score': value['gtScore'],
        'discord_url': value['discordUrl'],
        'telegram_handle': value['telegramHandle'],
        'twitter_handle': value['twitterHandle'],
    };
}
