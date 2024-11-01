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
import type { NetworksListDataInnerAttributes } from './NetworksListDataInnerAttributes';
import {
    NetworksListDataInnerAttributesFromJSON,
    NetworksListDataInnerAttributesFromJSONTyped,
    NetworksListDataInnerAttributesToJSON,
    NetworksListDataInnerAttributesToJSONTyped,
} from './NetworksListDataInnerAttributes';

/**
 * 
 * @export
 * @interface NetworksListDataInner
 */
export interface NetworksListDataInner {
    /**
     * 
     * @type {string}
     * @memberof NetworksListDataInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof NetworksListDataInner
     */
    type?: string;
    /**
     * 
     * @type {NetworksListDataInnerAttributes}
     * @memberof NetworksListDataInner
     */
    attributes?: NetworksListDataInnerAttributes;
}

/**
 * Check if a given object implements the NetworksListDataInner interface.
 */
export function instanceOfNetworksListDataInner(value: object): value is NetworksListDataInner {
    return true;
}

export function NetworksListDataInnerFromJSON(json: any): NetworksListDataInner {
    return NetworksListDataInnerFromJSONTyped(json, false);
}

export function NetworksListDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworksListDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : json['type'],
        'attributes': json['attributes'] == null ? undefined : NetworksListDataInnerAttributesFromJSON(json['attributes']),
    };
}

  export function NetworksListDataInnerToJSON(json: any): NetworksListDataInner {
      return NetworksListDataInnerToJSONTyped(json, false);
  }

  export function NetworksListDataInnerToJSONTyped(value?: NetworksListDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'type': value['type'],
        'attributes': NetworksListDataInnerAttributesToJSON(value['attributes']),
    };
}

