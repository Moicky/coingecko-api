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
 * coin 24h price change in currency
 * @export
 * @interface CoinsDataBaseMarketDataPriceChangePercentage24hInCurrency
 */
export interface CoinsDataBaseMarketDataPriceChangePercentage24hInCurrency {
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataPriceChangePercentage24hInCurrency
     */
    btc?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataPriceChangePercentage24hInCurrency
     */
    eur?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataPriceChangePercentage24hInCurrency
     */
    usd?: number;
}

/**
 * Check if a given object implements the CoinsDataBaseMarketDataPriceChangePercentage24hInCurrency interface.
 */
export function instanceOfCoinsDataBaseMarketDataPriceChangePercentage24hInCurrency(value: object): value is CoinsDataBaseMarketDataPriceChangePercentage24hInCurrency {
    return true;
}

export function CoinsDataBaseMarketDataPriceChangePercentage24hInCurrencyFromJSON(json: any): CoinsDataBaseMarketDataPriceChangePercentage24hInCurrency {
    return CoinsDataBaseMarketDataPriceChangePercentage24hInCurrencyFromJSONTyped(json, false);
}

export function CoinsDataBaseMarketDataPriceChangePercentage24hInCurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsDataBaseMarketDataPriceChangePercentage24hInCurrency {
    if (json == null) {
        return json;
    }
    return {
        
        'btc': json['btc'] == null ? undefined : json['btc'],
        'eur': json['eur'] == null ? undefined : json['eur'],
        'usd': json['usd'] == null ? undefined : json['usd'],
    };
}

  export function CoinsDataBaseMarketDataPriceChangePercentage24hInCurrencyToJSON(json: any): CoinsDataBaseMarketDataPriceChangePercentage24hInCurrency {
      return CoinsDataBaseMarketDataPriceChangePercentage24hInCurrencyToJSONTyped(json, false);
  }

  export function CoinsDataBaseMarketDataPriceChangePercentage24hInCurrencyToJSONTyped(value?: CoinsDataBaseMarketDataPriceChangePercentage24hInCurrency | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'btc': value['btc'],
        'eur': value['eur'],
        'usd': value['usd'],
    };
}
