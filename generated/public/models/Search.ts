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
import type { SearchCoinsInner } from './SearchCoinsInner';
import {
    SearchCoinsInnerFromJSON,
    SearchCoinsInnerFromJSONTyped,
    SearchCoinsInnerToJSON,
    SearchCoinsInnerToJSONTyped,
} from './SearchCoinsInner';
import type { SearchNftsInner } from './SearchNftsInner';
import {
    SearchNftsInnerFromJSON,
    SearchNftsInnerFromJSONTyped,
    SearchNftsInnerToJSON,
    SearchNftsInnerToJSONTyped,
} from './SearchNftsInner';
import type { SearchCategoriesInner } from './SearchCategoriesInner';
import {
    SearchCategoriesInnerFromJSON,
    SearchCategoriesInnerFromJSONTyped,
    SearchCategoriesInnerToJSON,
    SearchCategoriesInnerToJSONTyped,
} from './SearchCategoriesInner';
import type { SearchExchangesInner } from './SearchExchangesInner';
import {
    SearchExchangesInnerFromJSON,
    SearchExchangesInnerFromJSONTyped,
    SearchExchangesInnerToJSON,
    SearchExchangesInnerToJSONTyped,
} from './SearchExchangesInner';

/**
 * 
 * @export
 * @interface Search
 */
export interface Search {
    /**
     * 
     * @type {Array<SearchCoinsInner>}
     * @memberof Search
     */
    coins?: Array<SearchCoinsInner>;
    /**
     * 
     * @type {Array<SearchExchangesInner>}
     * @memberof Search
     */
    exchanges?: Array<SearchExchangesInner>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Search
     */
    icos?: Array<string>;
    /**
     * 
     * @type {Array<SearchCategoriesInner>}
     * @memberof Search
     */
    categories?: Array<SearchCategoriesInner>;
    /**
     * 
     * @type {Array<SearchNftsInner>}
     * @memberof Search
     */
    nfts?: Array<SearchNftsInner>;
}

/**
 * Check if a given object implements the Search interface.
 */
export function instanceOfSearch(value: object): value is Search {
    return true;
}

export function SearchFromJSON(json: any): Search {
    return SearchFromJSONTyped(json, false);
}

export function SearchFromJSONTyped(json: any, ignoreDiscriminator: boolean): Search {
    if (json == null) {
        return json;
    }
    return {
        
        'coins': json['coins'] == null ? undefined : ((json['coins'] as Array<any>).map(SearchCoinsInnerFromJSON)),
        'exchanges': json['exchanges'] == null ? undefined : ((json['exchanges'] as Array<any>).map(SearchExchangesInnerFromJSON)),
        'icos': json['icos'] == null ? undefined : json['icos'],
        'categories': json['categories'] == null ? undefined : ((json['categories'] as Array<any>).map(SearchCategoriesInnerFromJSON)),
        'nfts': json['nfts'] == null ? undefined : ((json['nfts'] as Array<any>).map(SearchNftsInnerFromJSON)),
    };
}

  export function SearchToJSON(json: any): Search {
      return SearchToJSONTyped(json, false);
  }

  export function SearchToJSONTyped(value?: Search | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'coins': value['coins'] == null ? undefined : ((value['coins'] as Array<any>).map(SearchCoinsInnerToJSON)),
        'exchanges': value['exchanges'] == null ? undefined : ((value['exchanges'] as Array<any>).map(SearchExchangesInnerToJSON)),
        'icos': value['icos'],
        'categories': value['categories'] == null ? undefined : ((value['categories'] as Array<any>).map(SearchCategoriesInnerToJSON)),
        'nfts': value['nfts'] == null ? undefined : ((value['nfts'] as Array<any>).map(SearchNftsInnerToJSON)),
    };
}

