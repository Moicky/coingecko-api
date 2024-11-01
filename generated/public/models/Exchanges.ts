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
 * @interface Exchanges
 */
export interface Exchanges {
    /**
     * exchange id
     * @type {string}
     * @memberof Exchanges
     */
    id?: string;
    /**
     * exchange name
     * @type {string}
     * @memberof Exchanges
     */
    name?: string;
    /**
     * exchange established year
     * @type {number}
     * @memberof Exchanges
     */
    yearEstablished?: number;
    /**
     * exchange country
     * @type {string}
     * @memberof Exchanges
     */
    country?: string;
    /**
     * exchange description
     * @type {string}
     * @memberof Exchanges
     */
    description?: string;
    /**
     * exchange website url
     * @type {string}
     * @memberof Exchanges
     */
    url?: string;
    /**
     * exchange image url
     * @type {string}
     * @memberof Exchanges
     */
    image?: string;
    /**
     * exchange trading incentive
     * @type {boolean}
     * @memberof Exchanges
     */
    hasTradingIncentive?: boolean;
    /**
     * exchange trust score
     * @type {number}
     * @memberof Exchanges
     */
    trustScore?: number;
    /**
     * exchange trust score rank
     * @type {number}
     * @memberof Exchanges
     */
    trustScoreRank?: number;
    /**
     * exchange trade volume in BTC in 24 hours
     * @type {number}
     * @memberof Exchanges
     */
    tradeVolume24hBtc?: number;
    /**
     * normalized trading volume by traffic in BTC in 24 hours <br>*refers to [`this blog`](https://blog.coingecko.com/trust-score/).
     * @type {number}
     * @memberof Exchanges
     */
    tradeVolume24hBtcNormalized?: number;
}

/**
 * Check if a given object implements the Exchanges interface.
 */
export function instanceOfExchanges(value: object): value is Exchanges {
    return true;
}

export function ExchangesFromJSON(json: any): Exchanges {
    return ExchangesFromJSONTyped(json, false);
}

export function ExchangesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Exchanges {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'yearEstablished': json['year_established'] == null ? undefined : json['year_established'],
        'country': json['country'] == null ? undefined : json['country'],
        'description': json['description'] == null ? undefined : json['description'],
        'url': json['url'] == null ? undefined : json['url'],
        'image': json['image'] == null ? undefined : json['image'],
        'hasTradingIncentive': json['has_trading_incentive'] == null ? undefined : json['has_trading_incentive'],
        'trustScore': json['trust_score'] == null ? undefined : json['trust_score'],
        'trustScoreRank': json['trust_score_rank'] == null ? undefined : json['trust_score_rank'],
        'tradeVolume24hBtc': json['trade_volume_24h_btc'] == null ? undefined : json['trade_volume_24h_btc'],
        'tradeVolume24hBtcNormalized': json['trade_volume_24h_btc_normalized'] == null ? undefined : json['trade_volume_24h_btc_normalized'],
    };
}

  export function ExchangesToJSON(json: any): Exchanges {
      return ExchangesToJSONTyped(json, false);
  }

  export function ExchangesToJSONTyped(value?: Exchanges | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'year_established': value['yearEstablished'],
        'country': value['country'],
        'description': value['description'],
        'url': value['url'],
        'image': value['image'],
        'has_trading_incentive': value['hasTradingIncentive'],
        'trust_score': value['trustScore'],
        'trust_score_rank': value['trustScoreRank'],
        'trade_volume_24h_btc': value['tradeVolume24hBtc'],
        'trade_volume_24h_btc_normalized': value['tradeVolume24hBtcNormalized'],
    };
}

