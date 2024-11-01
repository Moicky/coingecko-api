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
 * coin fully diluted valuation (fdv) in currency
 * @export
 * @interface CoinsDataBaseMarketDataFullyDilutedValuation
 */
export interface CoinsDataBaseMarketDataFullyDilutedValuation {
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataFullyDilutedValuation
     */
    btc?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataFullyDilutedValuation
     */
    eur?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsDataBaseMarketDataFullyDilutedValuation
     */
    usd?: number;
}

/**
 * Check if a given object implements the CoinsDataBaseMarketDataFullyDilutedValuation interface.
 */
export function instanceOfCoinsDataBaseMarketDataFullyDilutedValuation(value: object): value is CoinsDataBaseMarketDataFullyDilutedValuation {
    return true;
}

export function CoinsDataBaseMarketDataFullyDilutedValuationFromJSON(json: any): CoinsDataBaseMarketDataFullyDilutedValuation {
    return CoinsDataBaseMarketDataFullyDilutedValuationFromJSONTyped(json, false);
}

export function CoinsDataBaseMarketDataFullyDilutedValuationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsDataBaseMarketDataFullyDilutedValuation {
    if (json == null) {
        return json;
    }
    return {
        
        'btc': json['btc'] == null ? undefined : json['btc'],
        'eur': json['eur'] == null ? undefined : json['eur'],
        'usd': json['usd'] == null ? undefined : json['usd'],
    };
}

  export function CoinsDataBaseMarketDataFullyDilutedValuationToJSON(json: any): CoinsDataBaseMarketDataFullyDilutedValuation {
      return CoinsDataBaseMarketDataFullyDilutedValuationToJSONTyped(json, false);
  }

  export function CoinsDataBaseMarketDataFullyDilutedValuationToJSONTyped(value?: CoinsDataBaseMarketDataFullyDilutedValuation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'btc': value['btc'],
        'eur': value['eur'],
        'usd': value['usd'],
    };
}

