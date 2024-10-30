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
 * coin code additions deletions 4 weeks
 * @export
 * @interface CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4Weeks
 */
export interface CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4Weeks {
    /**
     * 
     * @type {number}
     * @memberof CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4Weeks
     */
    additions?: number;
    /**
     * 
     * @type {number}
     * @memberof CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4Weeks
     */
    deletions?: number;
}

/**
 * Check if a given object implements the CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4Weeks interface.
 */
export function instanceOfCoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4Weeks(value: object): value is CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4Weeks {
    return true;
}

export function CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4WeeksFromJSON(json: any): CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4Weeks {
    return CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4WeeksFromJSONTyped(json, false);
}

export function CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4WeeksFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4Weeks {
    if (json == null) {
        return json;
    }
    return {
        
        'additions': json['additions'] == null ? undefined : json['additions'],
        'deletions': json['deletions'] == null ? undefined : json['deletions'],
    };
}

  export function CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4WeeksToJSON(json: any): CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4Weeks {
      return CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4WeeksToJSONTyped(json, false);
  }

  export function CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4WeeksToJSONTyped(value?: CoinsHistoricalDataDeveloperDataCodeAdditionsDeletions4Weeks | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'additions': value['additions'],
        'deletions': value['deletions'],
    };
}
