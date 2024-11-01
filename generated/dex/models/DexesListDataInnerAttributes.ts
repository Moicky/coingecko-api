/* tslint:disable */
/* eslint-disable */
/**
 * On Chain DEX API (Beta)
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2-beta
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
 * @interface DexesListDataInnerAttributes
 */
export interface DexesListDataInnerAttributes {
    /**
     * 
     * @type {string}
     * @memberof DexesListDataInnerAttributes
     */
    name?: string;
}

/**
 * Check if a given object implements the DexesListDataInnerAttributes interface.
 */
export function instanceOfDexesListDataInnerAttributes(value: object): value is DexesListDataInnerAttributes {
    return true;
}

export function DexesListDataInnerAttributesFromJSON(json: any): DexesListDataInnerAttributes {
    return DexesListDataInnerAttributesFromJSONTyped(json, false);
}

export function DexesListDataInnerAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DexesListDataInnerAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
    };
}

  export function DexesListDataInnerAttributesToJSON(json: any): DexesListDataInnerAttributes {
      return DexesListDataInnerAttributesToJSONTyped(json, false);
  }

  export function DexesListDataInnerAttributesToJSONTyped(value?: DexesListDataInnerAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
    };
}

