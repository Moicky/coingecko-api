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
import type { PoolDataInnerAttributes } from './PoolDataInnerAttributes';
import {
    PoolDataInnerAttributesFromJSON,
    PoolDataInnerAttributesFromJSONTyped,
    PoolDataInnerAttributesToJSON,
    PoolDataInnerAttributesToJSONTyped,
} from './PoolDataInnerAttributes';
import type { PoolDataInnerRelationships } from './PoolDataInnerRelationships';
import {
    PoolDataInnerRelationshipsFromJSON,
    PoolDataInnerRelationshipsFromJSONTyped,
    PoolDataInnerRelationshipsToJSON,
    PoolDataInnerRelationshipsToJSONTyped,
} from './PoolDataInnerRelationships';

/**
 * 
 * @export
 * @interface PoolDataInner
 */
export interface PoolDataInner {
    /**
     * 
     * @type {string}
     * @memberof PoolDataInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof PoolDataInner
     */
    type?: string;
    /**
     * 
     * @type {PoolDataInnerAttributes}
     * @memberof PoolDataInner
     */
    attributes?: PoolDataInnerAttributes;
    /**
     * 
     * @type {PoolDataInnerRelationships}
     * @memberof PoolDataInner
     */
    relationships?: PoolDataInnerRelationships;
}

/**
 * Check if a given object implements the PoolDataInner interface.
 */
export function instanceOfPoolDataInner(value: object): value is PoolDataInner {
    return true;
}

export function PoolDataInnerFromJSON(json: any): PoolDataInner {
    return PoolDataInnerFromJSONTyped(json, false);
}

export function PoolDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoolDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : json['type'],
        'attributes': json['attributes'] == null ? undefined : PoolDataInnerAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : PoolDataInnerRelationshipsFromJSON(json['relationships']),
    };
}

  export function PoolDataInnerToJSON(json: any): PoolDataInner {
      return PoolDataInnerToJSONTyped(json, false);
  }

  export function PoolDataInnerToJSONTyped(value?: PoolDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'type': value['type'],
        'attributes': PoolDataInnerAttributesToJSON(value['attributes']),
        'relationships': PoolDataInnerRelationshipsToJSON(value['relationships']),
    };
}
