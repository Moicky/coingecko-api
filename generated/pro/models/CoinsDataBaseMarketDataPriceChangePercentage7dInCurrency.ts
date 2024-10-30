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
 * coin 7d price change in currency
 * @export
 * @interface CoinsDataBaseMarketDataPriceChangePercentage7dInCurrency
 */
export interface CoinsDataBaseMarketDataPriceChangePercentage7dInCurrency {
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataPriceChangePercentage7dInCurrency
     */
    btc?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataPriceChangePercentage7dInCurrency
     */
    eur?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataPriceChangePercentage7dInCurrency
     */
    usd?: number;
}

/**
 * Check if a given object implements the CoinsDataBaseMarketDataPriceChangePercentage7dInCurrency interface.
 */
export function instanceOfCoinsDataBaseMarketDataPriceChangePercentage7dInCurrency(value: object): value is CoinsDataBaseMarketDataPriceChangePercentage7dInCurrency {
    return true;
}

export function CoinsDataBaseMarketDataPriceChangePercentage7dInCurrencyFromJSON(json: any): CoinsDataBaseMarketDataPriceChangePercentage7dInCurrency {
    return CoinsDataBaseMarketDataPriceChangePercentage7dInCurrencyFromJSONTyped(json, false);
}

export function CoinsDataBaseMarketDataPriceChangePercentage7dInCurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsDataBaseMarketDataPriceChangePercentage7dInCurrency {
    if (json == null) {
        return json;
    }
    return {
        
        'btc': json['btc'] == null ? undefined : json['btc'],
        'eur': json['eur'] == null ? undefined : json['eur'],
        'usd': json['usd'] == null ? undefined : json['usd'],
    };
}

  export function CoinsDataBaseMarketDataPriceChangePercentage7dInCurrencyToJSON(json: any): CoinsDataBaseMarketDataPriceChangePercentage7dInCurrency {
      return CoinsDataBaseMarketDataPriceChangePercentage7dInCurrencyToJSONTyped(json, false);
  }

  export function CoinsDataBaseMarketDataPriceChangePercentage7dInCurrencyToJSONTyped(value?: CoinsDataBaseMarketDataPriceChangePercentage7dInCurrency | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'btc': value['btc'],
        'eur': value['eur'],
        'usd': value['usd'],
    };
}

