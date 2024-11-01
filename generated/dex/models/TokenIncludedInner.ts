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
import type { TokenIncludedInnerRelationships } from './TokenIncludedInnerRelationships';
import {
    TokenIncludedInnerRelationshipsFromJSON,
    TokenIncludedInnerRelationshipsFromJSONTyped,
    TokenIncludedInnerRelationshipsToJSON,
    TokenIncludedInnerRelationshipsToJSONTyped,
} from './TokenIncludedInnerRelationships';
import type { TokenIncludedInnerAttributes } from './TokenIncludedInnerAttributes';
import {
    TokenIncludedInnerAttributesFromJSON,
    TokenIncludedInnerAttributesFromJSONTyped,
    TokenIncludedInnerAttributesToJSON,
    TokenIncludedInnerAttributesToJSONTyped,
} from './TokenIncludedInnerAttributes';

/**
 * 
 * @export
 * @interface TokenIncludedInner
 */
export interface TokenIncludedInner {
    /**
     * 
     * @type {string}
     * @memberof TokenIncludedInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenIncludedInner
     */
    type?: string;
    /**
     * 
     * @type {TokenIncludedInnerAttributes}
     * @memberof TokenIncludedInner
     */
    attributes?: TokenIncludedInnerAttributes;
    /**
     * 
     * @type {TokenIncludedInnerRelationships}
     * @memberof TokenIncludedInner
     */
    relationships?: TokenIncludedInnerRelationships;
}

/**
 * Check if a given object implements the TokenIncludedInner interface.
 */
export function instanceOfTokenIncludedInner(value: object): value is TokenIncludedInner {
    return true;
}

export function TokenIncludedInnerFromJSON(json: any): TokenIncludedInner {
    return TokenIncludedInnerFromJSONTyped(json, false);
}

export function TokenIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenIncludedInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : json['type'],
        'attributes': json['attributes'] == null ? undefined : TokenIncludedInnerAttributesFromJSON(json['attributes']),
        'relationships': json['relationships'] == null ? undefined : TokenIncludedInnerRelationshipsFromJSON(json['relationships']),
    };
}

  export function TokenIncludedInnerToJSON(json: any): TokenIncludedInner {
      return TokenIncludedInnerToJSONTyped(json, false);
  }

  export function TokenIncludedInnerToJSONTyped(value?: TokenIncludedInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'type': value['type'],
        'attributes': TokenIncludedInnerAttributesToJSON(value['attributes']),
        'relationships': TokenIncludedInnerRelationshipsToJSON(value['relationships']),
    };
}

