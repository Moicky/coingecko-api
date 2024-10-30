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
 * coin 200d price change in currency
 * @export
 * @interface CoinsDataBaseMarketDataPriceChangePercentage200dInCurrency
 */
export interface CoinsDataBaseMarketDataPriceChangePercentage200dInCurrency {
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataPriceChangePercentage200dInCurrency
     */
    btc?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataPriceChangePercentage200dInCurrency
     */
    eur?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataPriceChangePercentage200dInCurrency
     */
    usd?: number;
}

/**
 * Check if a given object implements the CoinsDataBaseMarketDataPriceChangePercentage200dInCurrency interface.
 */
export function instanceOfCoinsDataBaseMarketDataPriceChangePercentage200dInCurrency(value: object): value is CoinsDataBaseMarketDataPriceChangePercentage200dInCurrency {
    return true;
}

export function CoinsDataBaseMarketDataPriceChangePercentage200dInCurrencyFromJSON(json: any): CoinsDataBaseMarketDataPriceChangePercentage200dInCurrency {
    return CoinsDataBaseMarketDataPriceChangePercentage200dInCurrencyFromJSONTyped(json, false);
}

export function CoinsDataBaseMarketDataPriceChangePercentage200dInCurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsDataBaseMarketDataPriceChangePercentage200dInCurrency {
    if (json == null) {
        return json;
    }
    return {
        
        'btc': json['btc'] == null ? undefined : json['btc'],
        'eur': json['eur'] == null ? undefined : json['eur'],
        'usd': json['usd'] == null ? undefined : json['usd'],
    };
}

  export function CoinsDataBaseMarketDataPriceChangePercentage200dInCurrencyToJSON(json: any): CoinsDataBaseMarketDataPriceChangePercentage200dInCurrency {
      return CoinsDataBaseMarketDataPriceChangePercentage200dInCurrencyToJSONTyped(json, false);
  }

  export function CoinsDataBaseMarketDataPriceChangePercentage200dInCurrencyToJSONTyped(value?: CoinsDataBaseMarketDataPriceChangePercentage200dInCurrency | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'btc': value['btc'],
        'eur': value['eur'],
        'usd': value['usd'],
    };
}

