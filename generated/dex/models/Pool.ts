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
import type { PoolIncludedInner } from './PoolIncludedInner';
import {
    PoolIncludedInnerFromJSON,
    PoolIncludedInnerFromJSONTyped,
    PoolIncludedInnerToJSON,
    PoolIncludedInnerToJSONTyped,
} from './PoolIncludedInner';
import type { PoolDataInner } from './PoolDataInner';
import {
    PoolDataInnerFromJSON,
    PoolDataInnerFromJSONTyped,
    PoolDataInnerToJSON,
    PoolDataInnerToJSONTyped,
} from './PoolDataInner';

/**
 * 
 * @export
 * @interface Pool
 */
export interface Pool {
    /**
     * 
     * @type {Array<PoolDataInner>}
     * @memberof Pool
     */
    data?: Array<PoolDataInner>;
    /**
     * 
     * @type {Array<PoolIncludedInner>}
     * @memberof Pool
     */
    included?: Array<PoolIncludedInner>;
}

/**
 * Check if a given object implements the Pool interface.
 */
export function instanceOfPool(value: object): value is Pool {
    return true;
}

export function PoolFromJSON(json: any): Pool {
    return PoolFromJSONTyped(json, false);
}

export function PoolFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pool {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(PoolDataInnerFromJSON)),
        'included': json['included'] == null ? undefined : ((json['included'] as Array<any>).map(PoolIncludedInnerFromJSON)),
    };
}

  export function PoolToJSON(json: any): Pool {
      return PoolToJSONTyped(json, false);
  }

  export function PoolToJSONTyped(value?: Pool | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(PoolDataInnerToJSON)),
        'included': value['included'] == null ? undefined : ((value['included'] as Array<any>).map(PoolIncludedInnerToJSON)),
    };
}
