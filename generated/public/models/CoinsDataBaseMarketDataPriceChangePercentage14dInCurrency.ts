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
 * coin 14d price change in currency
 * @export
 * @interface CoinsDataBaseMarketDataPriceChangePercentage14dInCurrency
 */
export interface CoinsDataBaseMarketDataPriceChangePercentage14dInCurrency {
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataPriceChangePercentage14dInCurrency
     */
    btc?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataPriceChangePercentage14dInCurrency
     */
    eur?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataPriceChangePercentage14dInCurrency
     */
    usd?: number;
}

/**
 * Check if a given object implements the CoinsDataBaseMarketDataPriceChangePercentage14dInCurrency interface.
 */
export function instanceOfCoinsDataBaseMarketDataPriceChangePercentage14dInCurrency(value: object): value is CoinsDataBaseMarketDataPriceChangePercentage14dInCurrency {
    return true;
}

export function CoinsDataBaseMarketDataPriceChangePercentage14dInCurrencyFromJSON(json: any): CoinsDataBaseMarketDataPriceChangePercentage14dInCurrency {
    return CoinsDataBaseMarketDataPriceChangePercentage14dInCurrencyFromJSONTyped(json, false);
}

export function CoinsDataBaseMarketDataPriceChangePercentage14dInCurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsDataBaseMarketDataPriceChangePercentage14dInCurrency {
    if (json == null) {
        return json;
    }
    return {
        
        'btc': json['btc'] == null ? undefined : json['btc'],
        'eur': json['eur'] == null ? undefined : json['eur'],
        'usd': json['usd'] == null ? undefined : json['usd'],
    };
}

  export function CoinsDataBaseMarketDataPriceChangePercentage14dInCurrencyToJSON(json: any): CoinsDataBaseMarketDataPriceChangePercentage14dInCurrency {
      return CoinsDataBaseMarketDataPriceChangePercentage14dInCurrencyToJSONTyped(json, false);
  }

  export function CoinsDataBaseMarketDataPriceChangePercentage14dInCurrencyToJSONTyped(value?: CoinsDataBaseMarketDataPriceChangePercentage14dInCurrency | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'btc': value['btc'],
        'eur': value['eur'],
        'usd': value['usd'],
    };
}

