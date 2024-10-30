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
 * @interface Ping
 */
export interface Ping {
    /**
     * 
     * @type {string}
     * @memberof Ping
     */
    geckoSays?: string;
}

/**
 * Check if a given object implements the Ping interface.
 */
export function instanceOfPing(value: object): value is Ping {
    return true;
}

export function PingFromJSON(json: any): Ping {
    return PingFromJSONTyped(json, false);
}

export function PingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Ping {
    if (json == null) {
        return json;
    }
    return {
        
        'geckoSays': json['gecko_says'] == null ? undefined : json['gecko_says'],
    };
}

  export function PingToJSON(json: any): Ping {
      return PingToJSONTyped(json, false);
  }

  export function PingToJSONTyped(value?: Ping | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'gecko_says': value['geckoSays'],
    };
}

