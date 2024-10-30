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


import * as runtime from '../runtime';
import type {
  CoinsHistoricalData,
  CoinsID,
  CoinsListInner,
  CoinsMarketChart,
  CoinsMarketChartRange,
  CoinsMarkets,
  CoinsTickers,
} from '../models/index';
import {
    CoinsHistoricalDataFromJSON,
    CoinsHistoricalDataToJSON,
    CoinsIDFromJSON,
    CoinsIDToJSON,
    CoinsListInnerFromJSON,
    CoinsListInnerToJSON,
    CoinsMarketChartFromJSON,
    CoinsMarketChartToJSON,
    CoinsMarketChartRangeFromJSON,
    CoinsMarketChartRangeToJSON,
    CoinsMarketsFromJSON,
    CoinsMarketsToJSON,
    CoinsTickersFromJSON,
    CoinsTickersToJSON,
} from '../models/index';

export interface CoinsIdRequest {
    id: string;
    localization?: boolean;
    tickers?: boolean;
    marketData?: boolean;
    communityData?: boolean;
    developerData?: boolean;
    sparkline?: boolean;
}

export interface CoinsIdHistoryRequest {
    id: string;
    date: string;
    localization?: boolean;
}

export interface CoinsIdMarketChartRequest {
    id: string;
    vsCurrency: string;
    days: string;
    interval?: CoinsIdMarketChartIntervalEnum;
    precision?: CoinsIdMarketChartPrecisionEnum;
}

export interface CoinsIdMarketChartRangeRequest {
    id: string;
    vsCurrency: string;
    from: number;
    to: number;
    precision?: CoinsIdMarketChartRangePrecisionEnum;
}

export interface CoinsIdOhlcRequest {
    id: string;
    vsCurrency: string;
    days: CoinsIdOhlcDaysEnum;
    precision?: CoinsIdOhlcPrecisionEnum;
}

export interface CoinsIdTickersRequest {
    id: string;
    exchangeIds?: string;
    includeExchangeLogo?: boolean;
    page?: number;
    order?: CoinsIdTickersOrderEnum;
    depth?: boolean;
}

export interface CoinsListRequest {
    includePlatform?: boolean;
}

export interface CoinsMarketsRequest {
    vsCurrency: string;
    ids?: string;
    category?: string;
    order?: CoinsMarketsOrderEnum;
    perPage?: number;
    page?: number;
    sparkline?: boolean;
    priceChangePercentage?: string;
    locale?: CoinsMarketsLocaleEnum;
    precision?: CoinsMarketsPrecisionEnum;
}

/**
 * 
 */
export class CoinsApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to **query all the coin data of a coin (name, price, market .... including exchange tickers) on CoinGecko coin page based on a particular coin id**.
     * Coin Data by ID
     */
    async coinsIdRaw(requestParameters: CoinsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CoinsID>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling coinsId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['localization'] != null) {
            queryParameters['localization'] = requestParameters['localization'];
        }

        if (requestParameters['tickers'] != null) {
            queryParameters['tickers'] = requestParameters['tickers'];
        }

        if (requestParameters['marketData'] != null) {
            queryParameters['market_data'] = requestParameters['marketData'];
        }

        if (requestParameters['communityData'] != null) {
            queryParameters['community_data'] = requestParameters['communityData'];
        }

        if (requestParameters['developerData'] != null) {
            queryParameters['developer_data'] = requestParameters['developerData'];
        }

        if (requestParameters['sparkline'] != null) {
            queryParameters['sparkline'] = requestParameters['sparkline'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_demo_api_key"] = await this.configuration.apiKey("x_cg_demo_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-demo-api-key"] = await this.configuration.apiKey("x-cg-demo-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/coins/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CoinsIDFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query all the coin data of a coin (name, price, market .... including exchange tickers) on CoinGecko coin page based on a particular coin id**.
     * Coin Data by ID
     */
    async coinsId(requestParameters: CoinsIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoinsID> {
        const response = await this.coinsIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query the historical data (price, market cap, 24hrs volume, etc) at a given date for a coin based on a particular coin id**.
     * Coin Historical Data by ID
     */
    async coinsIdHistoryRaw(requestParameters: CoinsIdHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CoinsHistoricalData>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling coinsIdHistory().'
            );
        }

        if (requestParameters['date'] == null) {
            throw new runtime.RequiredError(
                'date',
                'Required parameter "date" was null or undefined when calling coinsIdHistory().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['date'] != null) {
            queryParameters['date'] = requestParameters['date'];
        }

        if (requestParameters['localization'] != null) {
            queryParameters['localization'] = requestParameters['localization'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_demo_api_key"] = await this.configuration.apiKey("x_cg_demo_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-demo-api-key"] = await this.configuration.apiKey("x-cg-demo-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/coins/{id}/history`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CoinsHistoricalDataFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query the historical data (price, market cap, 24hrs volume, etc) at a given date for a coin based on a particular coin id**.
     * Coin Historical Data by ID
     */
    async coinsIdHistory(requestParameters: CoinsIdHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoinsHistoricalData> {
        const response = await this.coinsIdHistoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **get the historical chart data of a coin including time in UNIX, price, market cap and 24hrs volume based on particular coin id**.
     * Coin Historical Chart Data by ID
     */
    async coinsIdMarketChartRaw(requestParameters: CoinsIdMarketChartRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CoinsMarketChart>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling coinsIdMarketChart().'
            );
        }

        if (requestParameters['vsCurrency'] == null) {
            throw new runtime.RequiredError(
                'vsCurrency',
                'Required parameter "vsCurrency" was null or undefined when calling coinsIdMarketChart().'
            );
        }

        if (requestParameters['days'] == null) {
            throw new runtime.RequiredError(
                'days',
                'Required parameter "days" was null or undefined when calling coinsIdMarketChart().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['vsCurrency'] != null) {
            queryParameters['vs_currency'] = requestParameters['vsCurrency'];
        }

        if (requestParameters['days'] != null) {
            queryParameters['days'] = requestParameters['days'];
        }

        if (requestParameters['interval'] != null) {
            queryParameters['interval'] = requestParameters['interval'];
        }

        if (requestParameters['precision'] != null) {
            queryParameters['precision'] = requestParameters['precision'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_demo_api_key"] = await this.configuration.apiKey("x_cg_demo_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-demo-api-key"] = await this.configuration.apiKey("x-cg-demo-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/coins/{id}/market_chart`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CoinsMarketChartFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **get the historical chart data of a coin including time in UNIX, price, market cap and 24hrs volume based on particular coin id**.
     * Coin Historical Chart Data by ID
     */
    async coinsIdMarketChart(requestParameters: CoinsIdMarketChartRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoinsMarketChart> {
        const response = await this.coinsIdMarketChartRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hrs volume based on particular coin id**.
     * Coin Historical Chart Data within Time Range by ID
     */
    async coinsIdMarketChartRangeRaw(requestParameters: CoinsIdMarketChartRangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CoinsMarketChartRange>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling coinsIdMarketChartRange().'
            );
        }

        if (requestParameters['vsCurrency'] == null) {
            throw new runtime.RequiredError(
                'vsCurrency',
                'Required parameter "vsCurrency" was null or undefined when calling coinsIdMarketChartRange().'
            );
        }

        if (requestParameters['from'] == null) {
            throw new runtime.RequiredError(
                'from',
                'Required parameter "from" was null or undefined when calling coinsIdMarketChartRange().'
            );
        }

        if (requestParameters['to'] == null) {
            throw new runtime.RequiredError(
                'to',
                'Required parameter "to" was null or undefined when calling coinsIdMarketChartRange().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['vsCurrency'] != null) {
            queryParameters['vs_currency'] = requestParameters['vsCurrency'];
        }

        if (requestParameters['from'] != null) {
            queryParameters['from'] = requestParameters['from'];
        }

        if (requestParameters['to'] != null) {
            queryParameters['to'] = requestParameters['to'];
        }

        if (requestParameters['precision'] != null) {
            queryParameters['precision'] = requestParameters['precision'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_demo_api_key"] = await this.configuration.apiKey("x_cg_demo_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-demo-api-key"] = await this.configuration.apiKey("x-cg-demo-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/coins/{id}/market_chart/range`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CoinsMarketChartRangeFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hrs volume based on particular coin id**.
     * Coin Historical Chart Data within Time Range by ID
     */
    async coinsIdMarketChartRange(requestParameters: CoinsIdMarketChartRangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoinsMarketChartRange> {
        const response = await this.coinsIdMarketChartRangeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin id**.
     * Coin OHLC Chart by ID
     */
    async coinsIdOhlcRaw(requestParameters: CoinsIdOhlcRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Array<number>>>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling coinsIdOhlc().'
            );
        }

        if (requestParameters['vsCurrency'] == null) {
            throw new runtime.RequiredError(
                'vsCurrency',
                'Required parameter "vsCurrency" was null or undefined when calling coinsIdOhlc().'
            );
        }

        if (requestParameters['days'] == null) {
            throw new runtime.RequiredError(
                'days',
                'Required parameter "days" was null or undefined when calling coinsIdOhlc().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['vsCurrency'] != null) {
            queryParameters['vs_currency'] = requestParameters['vsCurrency'];
        }

        if (requestParameters['days'] != null) {
            queryParameters['days'] = requestParameters['days'];
        }

        if (requestParameters['precision'] != null) {
            queryParameters['precision'] = requestParameters['precision'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_demo_api_key"] = await this.configuration.apiKey("x_cg_demo_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-demo-api-key"] = await this.configuration.apiKey("x-cg-demo-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/coins/{id}/ohlc`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin id**.
     * Coin OHLC Chart by ID
     */
    async coinsIdOhlc(requestParameters: CoinsIdOhlcRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Array<number>>> {
        const response = await this.coinsIdOhlcRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query the coin tickers on both centralized exchange (cex) and decentralized exchange (dex) based on a particular coin id**.
     * Coin Tickers by ID
     */
    async coinsIdTickersRaw(requestParameters: CoinsIdTickersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CoinsTickers>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling coinsIdTickers().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['exchangeIds'] != null) {
            queryParameters['exchange_ids'] = requestParameters['exchangeIds'];
        }

        if (requestParameters['includeExchangeLogo'] != null) {
            queryParameters['include_exchange_logo'] = requestParameters['includeExchangeLogo'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        if (requestParameters['depth'] != null) {
            queryParameters['depth'] = requestParameters['depth'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_demo_api_key"] = await this.configuration.apiKey("x_cg_demo_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-demo-api-key"] = await this.configuration.apiKey("x-cg-demo-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/coins/{id}/tickers`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CoinsTickersFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query the coin tickers on both centralized exchange (cex) and decentralized exchange (dex) based on a particular coin id**.
     * Coin Tickers by ID
     */
    async coinsIdTickers(requestParameters: CoinsIdTickersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoinsTickers> {
        const response = await this.coinsIdTickersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query all the supported coins on CoinGecko with coins id, name and symbol**.
     * Coins List (ID Map)
     */
    async coinsListRaw(requestParameters: CoinsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CoinsListInner>>> {
        const queryParameters: any = {};

        if (requestParameters['includePlatform'] != null) {
            queryParameters['include_platform'] = requestParameters['includePlatform'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_demo_api_key"] = await this.configuration.apiKey("x_cg_demo_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-demo-api-key"] = await this.configuration.apiKey("x-cg-demo-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/coins/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CoinsListInnerFromJSON));
    }

    /**
     * This endpoint allows you to **query all the supported coins on CoinGecko with coins id, name and symbol**.
     * Coins List (ID Map)
     */
    async coinsList(requestParameters: CoinsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CoinsListInner>> {
        const response = await this.coinsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to **query all the supported coins with price, market cap, volume and market related data**.
     * Coins List with Market Data
     */
    async coinsMarketsRaw(requestParameters: CoinsMarketsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CoinsMarkets>> {
        if (requestParameters['vsCurrency'] == null) {
            throw new runtime.RequiredError(
                'vsCurrency',
                'Required parameter "vsCurrency" was null or undefined when calling coinsMarkets().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['vsCurrency'] != null) {
            queryParameters['vs_currency'] = requestParameters['vsCurrency'];
        }

        if (requestParameters['ids'] != null) {
            queryParameters['ids'] = requestParameters['ids'];
        }

        if (requestParameters['category'] != null) {
            queryParameters['category'] = requestParameters['category'];
        }

        if (requestParameters['order'] != null) {
            queryParameters['order'] = requestParameters['order'];
        }

        if (requestParameters['perPage'] != null) {
            queryParameters['per_page'] = requestParameters['perPage'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['sparkline'] != null) {
            queryParameters['sparkline'] = requestParameters['sparkline'];
        }

        if (requestParameters['priceChangePercentage'] != null) {
            queryParameters['price_change_percentage'] = requestParameters['priceChangePercentage'];
        }

        if (requestParameters['locale'] != null) {
            queryParameters['locale'] = requestParameters['locale'];
        }

        if (requestParameters['precision'] != null) {
            queryParameters['precision'] = requestParameters['precision'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["x_cg_demo_api_key"] = await this.configuration.apiKey("x_cg_demo_api_key"); // apiKeyQueryParam authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-cg-demo-api-key"] = await this.configuration.apiKey("x-cg-demo-api-key"); // apiKeyAuth authentication
        }

        const response = await this.request({
            path: `/coins/markets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CoinsMarketsFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to **query all the supported coins with price, market cap, volume and market related data**.
     * Coins List with Market Data
     */
    async coinsMarkets(requestParameters: CoinsMarketsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CoinsMarkets> {
        const response = await this.coinsMarketsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CoinsIdMarketChartIntervalEnum = {
    Daily: 'daily'
} as const;
export type CoinsIdMarketChartIntervalEnum = typeof CoinsIdMarketChartIntervalEnum[keyof typeof CoinsIdMarketChartIntervalEnum];
/**
 * @export
 */
export const CoinsIdMarketChartPrecisionEnum = {
    Full: 'full',
    _0: '0',
    _1: '1',
    _2: '2',
    _3: '3',
    _4: '4',
    _5: '5',
    _6: '6',
    _7: '7',
    _8: '8',
    _9: '9',
    _10: '10',
    _11: '11',
    _12: '12',
    _13: '13',
    _14: '14',
    _15: '15',
    _16: '16',
    _17: '17',
    _18: '18'
} as const;
export type CoinsIdMarketChartPrecisionEnum = typeof CoinsIdMarketChartPrecisionEnum[keyof typeof CoinsIdMarketChartPrecisionEnum];
/**
 * @export
 */
export const CoinsIdMarketChartRangePrecisionEnum = {
    Full: 'full',
    _0: '0',
    _1: '1',
    _2: '2',
    _3: '3',
    _4: '4',
    _5: '5',
    _6: '6',
    _7: '7',
    _8: '8',
    _9: '9',
    _10: '10',
    _11: '11',
    _12: '12',
    _13: '13',
    _14: '14',
    _15: '15',
    _16: '16',
    _17: '17',
    _18: '18'
} as const;
export type CoinsIdMarketChartRangePrecisionEnum = typeof CoinsIdMarketChartRangePrecisionEnum[keyof typeof CoinsIdMarketChartRangePrecisionEnum];
/**
 * @export
 */
export const CoinsIdOhlcDaysEnum = {
    _1: '1',
    _7: '7',
    _14: '14',
    _30: '30',
    _90: '90',
    _180: '180',
    _365: '365'
} as const;
export type CoinsIdOhlcDaysEnum = typeof CoinsIdOhlcDaysEnum[keyof typeof CoinsIdOhlcDaysEnum];
/**
 * @export
 */
export const CoinsIdOhlcPrecisionEnum = {
    Full: 'full',
    _0: '0',
    _1: '1',
    _2: '2',
    _3: '3',
    _4: '4',
    _5: '5',
    _6: '6',
    _7: '7',
    _8: '8',
    _9: '9',
    _10: '10',
    _11: '11',
    _12: '12',
    _13: '13',
    _14: '14',
    _15: '15',
    _16: '16',
    _17: '17',
    _18: '18'
} as const;
export type CoinsIdOhlcPrecisionEnum = typeof CoinsIdOhlcPrecisionEnum[keyof typeof CoinsIdOhlcPrecisionEnum];
/**
 * @export
 */
export const CoinsIdTickersOrderEnum = {
    TrustScoreDesc: 'trust_score_desc',
    TrustScoreAsc: 'trust_score_asc',
    VolumeDesc: 'volume_desc',
    VolumeAsc: 'volume_asc'
} as const;
export type CoinsIdTickersOrderEnum = typeof CoinsIdTickersOrderEnum[keyof typeof CoinsIdTickersOrderEnum];
/**
 * @export
 */
export const CoinsMarketsOrderEnum = {
    MarketCapAsc: 'market_cap_asc',
    MarketCapDesc: 'market_cap_desc',
    VolumeAsc: 'volume_asc',
    VolumeDesc: 'volume_desc',
    IdAsc: 'id_asc',
    IdDesc: 'id_desc'
} as const;
export type CoinsMarketsOrderEnum = typeof CoinsMarketsOrderEnum[keyof typeof CoinsMarketsOrderEnum];
/**
 * @export
 */
export const CoinsMarketsLocaleEnum = {
    Ar: 'ar',
    Bg: 'bg',
    Cs: 'cs',
    Da: 'da',
    De: 'de',
    El: 'el',
    En: 'en',
    Es: 'es',
    Fi: 'fi',
    Fr: 'fr',
    He: 'he',
    Hi: 'hi',
    Hr: 'hr',
    Hu: 'hu',
    Id: 'id',
    It: 'it',
    Ja: 'ja',
    Ko: 'ko',
    Lt: 'lt',
    Nl: 'nl',
    No: 'no',
    Pl: 'pl',
    Pt: 'pt',
    Ro: 'ro',
    Ru: 'ru',
    Sk: 'sk',
    Sl: 'sl',
    Sv: 'sv',
    Th: 'th',
    Tr: 'tr',
    Uk: 'uk',
    Vi: 'vi',
    Zh: 'zh',
    ZhTw: 'zh-tw'
} as const;
export type CoinsMarketsLocaleEnum = typeof CoinsMarketsLocaleEnum[keyof typeof CoinsMarketsLocaleEnum];
/**
 * @export
 */
export const CoinsMarketsPrecisionEnum = {
    Full: 'full',
    _0: '0',
    _1: '1',
    _2: '2',
    _3: '3',
    _4: '4',
    _5: '5',
    _6: '6',
    _7: '7',
    _8: '8',
    _9: '9',
    _10: '10',
    _11: '11',
    _12: '12',
    _13: '13',
    _14: '14',
    _15: '15',
    _16: '16',
    _17: '17',
    _18: '18'
} as const;
export type CoinsMarketsPrecisionEnum = typeof CoinsMarketsPrecisionEnum[keyof typeof CoinsMarketsPrecisionEnum];