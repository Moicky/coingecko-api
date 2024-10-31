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
import type { TokenDataRelationshipsTopPools } from './TokenDataRelationshipsTopPools';
import {
    TokenDataRelationshipsTopPoolsFromJSON,
    TokenDataRelationshipsTopPoolsFromJSONTyped,
    TokenDataRelationshipsTopPoolsToJSON,
    TokenDataRelationshipsTopPoolsToJSONTyped,
} from './TokenDataRelationshipsTopPools';

/**
 * 
 * @export
 * @interface TokenDataRelationships
 */
export interface TokenDataRelationships {
    /**
     * 
     * @type {TokenDataRelationshipsTopPools}
     * @memberof TokenDataRelationships
     */
    topPools?: TokenDataRelationshipsTopPools;
}

/**
 * Check if a given object implements the TokenDataRelationships interface.
 */
export function instanceOfTokenDataRelationships(value: object): value is TokenDataRelationships {
    return true;
}

export function TokenDataRelationshipsFromJSON(json: any): TokenDataRelationships {
    return TokenDataRelationshipsFromJSONTyped(json, false);
}

export function TokenDataRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenDataRelationships {
    if (json == null) {
        return json;
    }
    return {
        
        'topPools': json['top_pools'] == null ? undefined : TokenDataRelationshipsTopPoolsFromJSON(json['top_pools']),
    };
}

  export function TokenDataRelationshipsToJSON(json: any): TokenDataRelationships {
      return TokenDataRelationshipsToJSONTyped(json, false);
  }

  export function TokenDataRelationshipsToJSONTyped(value?: TokenDataRelationships | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'top_pools': TokenDataRelationshipsTopPoolsToJSON(value['topPools']),
    };
}
