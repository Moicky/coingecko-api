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
 * coin repository url
 * @export
 * @interface CoinsDataBaseLinksReposUrl
 */
export interface CoinsDataBaseLinksReposUrl {
    /**
     * coin github repository url
     * @type {Array<string>}
     * @memberof CoinsDataBaseLinksReposUrl
     */
    github?: Array<string>;
    /**
     * coin bitbucket repository url
     * @type {Array<string>}
     * @memberof CoinsDataBaseLinksReposUrl
     */
    bitbucket?: Array<string>;
}

/**
 * Check if a given object implements the CoinsDataBaseLinksReposUrl interface.
 */
export function instanceOfCoinsDataBaseLinksReposUrl(value: object): value is CoinsDataBaseLinksReposUrl {
    return true;
}

export function CoinsDataBaseLinksReposUrlFromJSON(json: any): CoinsDataBaseLinksReposUrl {
    return CoinsDataBaseLinksReposUrlFromJSONTyped(json, false);
}

export function CoinsDataBaseLinksReposUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinsDataBaseLinksReposUrl {
    if (json == null) {
        return json;
    }
    return {
        
        'github': json['github'] == null ? undefined : json['github'],
        'bitbucket': json['bitbucket'] == null ? undefined : json['bitbucket'],
    };
}

  export function CoinsDataBaseLinksReposUrlToJSON(json: any): CoinsDataBaseLinksReposUrl {
      return CoinsDataBaseLinksReposUrlToJSONTyped(json, false);
  }

  export function CoinsDataBaseLinksReposUrlToJSONTyped(value?: CoinsDataBaseLinksReposUrl | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'github': value['github'],
        'bitbucket': value['bitbucket'],
    };
}

