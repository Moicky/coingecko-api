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
 * @interface DerivativesExchanges
 */
export interface DerivativesExchanges {
    /**
     * derivatives exchange name
     * @type {string}
     * @memberof DerivativesExchanges
     */
    name?: string;
    /**
     * derivatives exchange id
     * @type {string}
     * @memberof DerivativesExchanges
     */
    id?: string;
    /**
     * derivatives exchange open interest in BTC
     * @type {number}
     * @memberof DerivativesExchanges
     */
    openInterestBtc?: number;
    /**
     * derivatives exchange trade volume in BTC in 24 hours
     * @type {string}
     * @memberof DerivativesExchanges
     */
    tradeVolume24hBtc?: string;
    /**
     * number of perpetual pairs in the derivatives exchange
     * @type {number}
     * @memberof DerivativesExchanges
     */
    numberOfPerpetualPairs?: number;
    /**
     * number of futures pairs in the derivatives exchange
     * @type {number}
     * @memberof DerivativesExchanges
     */
    numberOfFuturesPairs?: number;
    /**
     * derivatives exchange image url
     * @type {string}
     * @memberof DerivativesExchanges
     */
    image?: string;
    /**
     * derivatives exchange established year
     * @type {number}
     * @memberof DerivativesExchanges
     */
    yearEstablished?: number | null;
    /**
     * derivatives exchange incorporated country
     * @type {string}
     * @memberof DerivativesExchanges
     */
    country?: string | null;
    /**
     * derivatives exchange description
     * @type {string}
     * @memberof DerivativesExchanges
     */
    description?: string;
    /**
     * derivatives exchange website url
     * @type {string}
     * @memberof DerivativesExchanges
     */
    url?: string;
}

/**
 * Check if a given object implements the DerivativesExchanges interface.
 */
export function instanceOfDerivativesExchanges(value: object): value is DerivativesExchanges {
    return true;
}

export function DerivativesExchangesFromJSON(json: any): DerivativesExchanges {
    return DerivativesExchangesFromJSONTyped(json, false);
}

export function DerivativesExchangesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DerivativesExchanges {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'id': json['id'] == null ? undefined : json['id'],
        'openInterestBtc': json['open_interest_btc'] == null ? undefined : json['open_interest_btc'],
        'tradeVolume24hBtc': json['trade_volume_24h_btc'] == null ? undefined : json['trade_volume_24h_btc'],
        'numberOfPerpetualPairs': json['number_of_perpetual_pairs'] == null ? undefined : json['number_of_perpetual_pairs'],
        'numberOfFuturesPairs': json['number_of_futures_pairs'] == null ? undefined : json['number_of_futures_pairs'],
        'image': json['image'] == null ? undefined : json['image'],
        'yearEstablished': json['year_established'] == null ? undefined : json['year_established'],
        'country': json['country'] == null ? undefined : json['country'],
        'description': json['description'] == null ? undefined : json['description'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

  export function DerivativesExchangesToJSON(json: any): DerivativesExchanges {
      return DerivativesExchangesToJSONTyped(json, false);
  }

  export function DerivativesExchangesToJSONTyped(value?: DerivativesExchanges | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'id': value['id'],
        'open_interest_btc': value['openInterestBtc'],
        'trade_volume_24h_btc': value['tradeVolume24hBtc'],
        'number_of_perpetual_pairs': value['numberOfPerpetualPairs'],
        'number_of_futures_pairs': value['numberOfFuturesPairs'],
        'image': value['image'],
        'year_established': value['yearEstablished'],
        'country': value['country'],
        'description': value['description'],
        'url': value['url'],
    };
}

