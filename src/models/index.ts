/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AiResponse
 */
export interface AiResponse {
    /**
     * 
     * @type {string}
     * @memberof AiResponse
     */
    query: string;
    /**
     * 
     * @type {string}
     * @memberof AiResponse
     */
    answer: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof AiResponse
     */
    data: Array<any>;
    /**
     * 
     * @type {number}
     * @memberof AiResponse
     */
    toolCalls?: number;
}
/**
 * 
 * @export
 * @interface ApiError
 */
export interface ApiError {
    /**
     * 
     * @type {ApiErrorError}
     * @memberof ApiError
     */
    error: ApiErrorError;
}
/**
 * 
 * @export
 * @interface ApiErrorError
 */
export interface ApiErrorError {
    /**
     * 
     * @type {string}
     * @memberof ApiErrorError
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof ApiErrorError
     */
    message: string;
    /**
     * 
     * @type {any}
     * @memberof ApiErrorError
     */
    details?: any | null;
}
/**
 * 
 * @export
 * @interface ConvertResponse
 */
export interface ConvertResponse {
    /**
     * 
     * @type {string}
     * @memberof ConvertResponse
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof ConvertResponse
     */
    fromCountry?: string;
    /**
     * 
     * @type {number}
     * @memberof ConvertResponse
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof ConvertResponse
     */
    date: string;
    /**
     * 
     * @type {string}
     * @memberof ConvertResponse
     */
    requestedDate?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ConvertResponse
     */
    asOf?: { [key: string]: string; };
    /**
     * 
     * @type {Array<ConvertResponseResultsInner>}
     * @memberof ConvertResponse
     */
    results: Array<ConvertResponseResultsInner>;
    /**
     * 
     * @type {string}
     * @memberof ConvertResponse
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface ConvertResponseResultsInner
 */
export interface ConvertResponseResultsInner {
    /**
     * 
     * @type {string}
     * @memberof ConvertResponseResultsInner
     */
    to: string;
    /**
     * 
     * @type {string}
     * @memberof ConvertResponseResultsInner
     */
    toCountry?: string;
    /**
     * 
     * @type {number}
     * @memberof ConvertResponseResultsInner
     */
    result: number;
    /**
     * 
     * @type {number}
     * @memberof ConvertResponseResultsInner
     */
    rate: number;
    /**
     * 
     * @type {ConvertResponseResultsInnerPpp}
     * @memberof ConvertResponseResultsInner
     */
    ppp?: ConvertResponseResultsInnerPpp;
}
/**
 * 
 * @export
 * @interface ConvertResponseResultsInnerPpp
 */
export interface ConvertResponseResultsInnerPpp {
    /**
     * 
     * @type {number}
     * @memberof ConvertResponseResultsInnerPpp
     */
    fromFactor: number;
    /**
     * 
     * @type {number}
     * @memberof ConvertResponseResultsInnerPpp
     */
    toFactor: number;
    /**
     * 
     * @type {number}
     * @memberof ConvertResponseResultsInnerPpp
     */
    result: number;
    /**
     * 
     * @type {number}
     * @memberof ConvertResponseResultsInnerPpp
     */
    year: number;
    /**
     * 
     * @type {string}
     * @memberof ConvertResponseResultsInnerPpp
     */
    source: string;
    /**
     * 
     * @type {string}
     * @memberof ConvertResponseResultsInnerPpp
     */
    error: string;
}
/**
 * 
 * @export
 * @interface ConvertResponseResultsInnerPppAnyOf
 */
export interface ConvertResponseResultsInnerPppAnyOf {
    /**
     * 
     * @type {number}
     * @memberof ConvertResponseResultsInnerPppAnyOf
     */
    fromFactor: number;
    /**
     * 
     * @type {number}
     * @memberof ConvertResponseResultsInnerPppAnyOf
     */
    toFactor: number;
    /**
     * 
     * @type {number}
     * @memberof ConvertResponseResultsInnerPppAnyOf
     */
    result: number;
    /**
     * 
     * @type {number}
     * @memberof ConvertResponseResultsInnerPppAnyOf
     */
    year: number;
    /**
     * 
     * @type {string}
     * @memberof ConvertResponseResultsInnerPppAnyOf
     */
    source: string;
}
/**
 * 
 * @export
 * @interface ConvertResponseResultsInnerPppAnyOf1
 */
export interface ConvertResponseResultsInnerPppAnyOf1 {
    /**
     * 
     * @type {string}
     * @memberof ConvertResponseResultsInnerPppAnyOf1
     */
    error: string;
}
/**
 * 
 * @export
 * @interface CorrelationResponse
 */
export interface CorrelationResponse {
    /**
     * 
     * @type {string}
     * @memberof CorrelationResponse
     */
    base: string;
    /**
     * 
     * @type {string}
     * @memberof CorrelationResponse
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof CorrelationResponse
     */
    to: string;
    /**
     * 
     * @type {Array<CorrelationResponseResultsInner>}
     * @memberof CorrelationResponse
     */
    results: Array<CorrelationResponseResultsInner>;
}
/**
 * 
 * @export
 * @interface CorrelationResponseResultsInner
 */
export interface CorrelationResponseResultsInner {
    /**
     * 
     * @type {string}
     * @memberof CorrelationResponseResultsInner
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof CorrelationResponseResultsInner
     */
    correlation: number | null;
    /**
     * 
     * @type {number}
     * @memberof CorrelationResponseResultsInner
     */
    observations: number;
    /**
     * 
     * @type {string}
     * @memberof CorrelationResponseResultsInner
     */
    note?: string;
}
/**
 * 
 * @export
 * @interface CountriesResponseInner
 */
export interface CountriesResponseInner {
    /**
     * 
     * @type {string}
     * @memberof CountriesResponseInner
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof CountriesResponseInner
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CountriesResponseInner
     */
    currencies?: Array<string>;
}
/**
 * 
 * @export
 * @interface CurrenciesResponseInner
 */
export interface CurrenciesResponseInner {
    /**
     * 
     * @type {string}
     * @memberof CurrenciesResponseInner
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof CurrenciesResponseInner
     */
    numeric: string;
    /**
     * 
     * @type {string}
     * @memberof CurrenciesResponseInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CurrenciesResponseInner
     */
    symbol: string;
}
/**
 * 
 * @export
 * @interface DrawdownResponse
 */
export interface DrawdownResponse {
    /**
     * 
     * @type {string}
     * @memberof DrawdownResponse
     */
    base: string;
    /**
     * 
     * @type {string}
     * @memberof DrawdownResponse
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof DrawdownResponse
     */
    to: string;
    /**
     * 
     * @type {DrawdownResponseModeEnum}
     * @memberof DrawdownResponse
     */
    mode: DrawdownResponseModeEnum;
    /**
     * 
     * @type {DrawdownResponseSortEnum}
     * @memberof DrawdownResponse
     */
    sort?: DrawdownResponseSortEnum;
    /**
     * 
     * @type {DrawdownResponseUniverseEnum}
     * @memberof DrawdownResponse
     */
    universe?: DrawdownResponseUniverseEnum;
    /**
     * 
     * @type {Array<DrawdownResponseResultsInner>}
     * @memberof DrawdownResponse
     */
    results: Array<DrawdownResponseResultsInner>;
}


/**
 * @export
 */
export const DrawdownResponseModeEnum = {
    Compare: 'compare',
    Ranking: 'ranking'
} as const;
export type DrawdownResponseModeEnum = typeof DrawdownResponseModeEnum[keyof typeof DrawdownResponseModeEnum];

/**
 * @export
 */
export const DrawdownResponseSortEnum = {
    Deepest: 'deepest',
    Recovery: 'recovery'
} as const;
export type DrawdownResponseSortEnum = typeof DrawdownResponseSortEnum[keyof typeof DrawdownResponseSortEnum];

/**
 * @export
 */
export const DrawdownResponseUniverseEnum = {
    Liquid: 'liquid',
    Majors: 'majors'
} as const;
export type DrawdownResponseUniverseEnum = typeof DrawdownResponseUniverseEnum[keyof typeof DrawdownResponseUniverseEnum];

/**
 * 
 * @export
 * @interface DrawdownResponseResultsInner
 */
export interface DrawdownResponseResultsInner {
    /**
     * 
     * @type {string}
     * @memberof DrawdownResponseResultsInner
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof DrawdownResponseResultsInner
     */
    maxDrawdownPct: number | null;
    /**
     * 
     * @type {string}
     * @memberof DrawdownResponseResultsInner
     */
    peakDate?: string;
    /**
     * 
     * @type {string}
     * @memberof DrawdownResponseResultsInner
     */
    troughDate?: string;
    /**
     * 
     * @type {string}
     * @memberof DrawdownResponseResultsInner
     */
    recoveryDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DrawdownResponseResultsInner
     */
    recoveryDays?: number | null;
    /**
     * 
     * @type {string}
     * @memberof DrawdownResponseResultsInner
     */
    note?: string;
}
/**
 * 
 * @export
 * @interface HistoryAnalysisResponse
 */
export interface HistoryAnalysisResponse {
    /**
     * 
     * @type {string}
     * @memberof HistoryAnalysisResponse
     */
    base: string;
    /**
     * 
     * @type {string}
     * @memberof HistoryAnalysisResponse
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof HistoryAnalysisResponse
     */
    to: string;
    /**
     * 
     * @type {HistoryAnalysisResponseModeEnum}
     * @memberof HistoryAnalysisResponse
     */
    mode: HistoryAnalysisResponseModeEnum;
    /**
     * 
     * @type {HistoryAnalysisResponseSortEnum}
     * @memberof HistoryAnalysisResponse
     */
    sort?: HistoryAnalysisResponseSortEnum;
    /**
     * 
     * @type {HistoryAnalysisResponseAssetClassEnum}
     * @memberof HistoryAnalysisResponse
     */
    assetClass?: HistoryAnalysisResponseAssetClassEnum;
    /**
     * 
     * @type {HistoryAnalysisResponseIntervalEnum}
     * @memberof HistoryAnalysisResponse
     */
    interval?: HistoryAnalysisResponseIntervalEnum;
    /**
     * 
     * @type {boolean}
     * @memberof HistoryAnalysisResponse
     */
    stats: boolean;
    /**
     * 
     * @type {Array<HistoryAnalysisResponseResultsInner>}
     * @memberof HistoryAnalysisResponse
     */
    results: Array<HistoryAnalysisResponseResultsInner>;
}


/**
 * @export
 */
export const HistoryAnalysisResponseModeEnum = {
    Compare: 'compare',
    Movers: 'movers'
} as const;
export type HistoryAnalysisResponseModeEnum = typeof HistoryAnalysisResponseModeEnum[keyof typeof HistoryAnalysisResponseModeEnum];

/**
 * @export
 */
export const HistoryAnalysisResponseSortEnum = {
    Strengthened: 'strengthened',
    Weakened: 'weakened'
} as const;
export type HistoryAnalysisResponseSortEnum = typeof HistoryAnalysisResponseSortEnum[keyof typeof HistoryAnalysisResponseSortEnum];

/**
 * @export
 */
export const HistoryAnalysisResponseAssetClassEnum = {
    Fiat: 'fiat',
    Metals: 'metals',
    All: 'all',
    Crypto: 'crypto'
} as const;
export type HistoryAnalysisResponseAssetClassEnum = typeof HistoryAnalysisResponseAssetClassEnum[keyof typeof HistoryAnalysisResponseAssetClassEnum];

/**
 * @export
 */
export const HistoryAnalysisResponseIntervalEnum = {
    Daily: 'daily',
    Weekly: 'weekly',
    Monthly: 'monthly',
    Yearly: 'yearly'
} as const;
export type HistoryAnalysisResponseIntervalEnum = typeof HistoryAnalysisResponseIntervalEnum[keyof typeof HistoryAnalysisResponseIntervalEnum];

/**
 * 
 * @export
 * @interface HistoryAnalysisResponseResultsInner
 */
export interface HistoryAnalysisResponseResultsInner {
    /**
     * 
     * @type {string}
     * @memberof HistoryAnalysisResponseResultsInner
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof HistoryAnalysisResponseResultsInner
     */
    startDate: string;
    /**
     * 
     * @type {string}
     * @memberof HistoryAnalysisResponseResultsInner
     */
    endDate: string;
    /**
     * 
     * @type {number}
     * @memberof HistoryAnalysisResponseResultsInner
     */
    startRate: number | null;
    /**
     * 
     * @type {number}
     * @memberof HistoryAnalysisResponseResultsInner
     */
    endRate: number | null;
    /**
     * 
     * @type {number}
     * @memberof HistoryAnalysisResponseResultsInner
     */
    changePct: number | null;
    /**
     * 
     * @type {number}
     * @memberof HistoryAnalysisResponseResultsInner
     */
    strengthenedPct: number | null;
    /**
     * 
     * @type {HistoryAnalysisResponseResultsInnerStats}
     * @memberof HistoryAnalysisResponseResultsInner
     */
    stats?: HistoryAnalysisResponseResultsInnerStats;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof HistoryAnalysisResponseResultsInner
     */
    series?: { [key: string]: number; };
    /**
     * 
     * @type {number}
     * @memberof HistoryAnalysisResponseResultsInner
     */
    volatility?: number | null;
    /**
     * 
     * @type {string}
     * @memberof HistoryAnalysisResponseResultsInner
     */
    note?: string;
}
/**
 * 
 * @export
 * @interface HistoryAnalysisResponseResultsInnerStats
 */
export interface HistoryAnalysisResponseResultsInnerStats {
    /**
     * 
     * @type {number}
     * @memberof HistoryAnalysisResponseResultsInnerStats
     */
    min: number;
    /**
     * 
     * @type {number}
     * @memberof HistoryAnalysisResponseResultsInnerStats
     */
    max: number;
    /**
     * 
     * @type {number}
     * @memberof HistoryAnalysisResponseResultsInnerStats
     */
    avg: number;
}
/**
 * 
 * @export
 * @interface HistoryResponse
 */
export interface HistoryResponse {
    /**
     * 
     * @type {string}
     * @memberof HistoryResponse
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof HistoryResponse
     */
    base: string;
    /**
     * 
     * @type {HistoryResponseIntervalEnum}
     * @memberof HistoryResponse
     */
    interval: HistoryResponseIntervalEnum;
    /**
     * 
     * @type {string}
     * @memberof HistoryResponse
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof HistoryResponse
     */
    to: string;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof HistoryResponse
     */
    rates: { [key: string]: number; };
}


/**
 * @export
 */
export const HistoryResponseIntervalEnum = {
    Daily: 'daily',
    Weekly: 'weekly',
    Monthly: 'monthly',
    Yearly: 'yearly'
} as const;
export type HistoryResponseIntervalEnum = typeof HistoryResponseIntervalEnum[keyof typeof HistoryResponseIntervalEnum];

/**
 * 
 * @export
 * @interface MeanReversionResponse
 */
export interface MeanReversionResponse {
    /**
     * 
     * @type {string}
     * @memberof MeanReversionResponse
     */
    base: string;
    /**
     * 
     * @type {string}
     * @memberof MeanReversionResponse
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof MeanReversionResponse
     */
    to: string;
    /**
     * 
     * @type {MeanReversionResponseUniverseEnum}
     * @memberof MeanReversionResponse
     */
    universe?: MeanReversionResponseUniverseEnum;
    /**
     * 
     * @type {Array<MeanReversionResponseResultsInner>}
     * @memberof MeanReversionResponse
     */
    results: Array<MeanReversionResponseResultsInner>;
}


/**
 * @export
 */
export const MeanReversionResponseUniverseEnum = {
    Liquid: 'liquid',
    Majors: 'majors'
} as const;
export type MeanReversionResponseUniverseEnum = typeof MeanReversionResponseUniverseEnum[keyof typeof MeanReversionResponseUniverseEnum];

/**
 * 
 * @export
 * @interface MeanReversionResponseResultsInner
 */
export interface MeanReversionResponseResultsInner {
    /**
     * 
     * @type {string}
     * @memberof MeanReversionResponseResultsInner
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof MeanReversionResponseResultsInner
     */
    score: number | null;
    /**
     * 
     * @type {number}
     * @memberof MeanReversionResponseResultsInner
     */
    deviationPct: number | null;
    /**
     * 
     * @type {number}
     * @memberof MeanReversionResponseResultsInner
     */
    reversionFrequency: number | null;
    /**
     * 
     * @type {number}
     * @memberof MeanReversionResponseResultsInner
     */
    halfLifeDays: number | null;
    /**
     * 
     * @type {string}
     * @memberof MeanReversionResponseResultsInner
     */
    note?: string;
}
/**
 * 
 * @export
 * @interface PppAnalysisResponse
 */
export interface PppAnalysisResponse {
    /**
     * 
     * @type {number}
     * @memberof PppAnalysisResponse
     */
    from: number;
    /**
     * 
     * @type {number}
     * @memberof PppAnalysisResponse
     */
    to: number;
    /**
     * 
     * @type {PppAnalysisResponseModeEnum}
     * @memberof PppAnalysisResponse
     */
    mode: PppAnalysisResponseModeEnum;
    /**
     * 
     * @type {PppAnalysisResponseSortEnum}
     * @memberof PppAnalysisResponse
     */
    sort?: PppAnalysisResponseSortEnum;
    /**
     * 
     * @type {boolean}
     * @memberof PppAnalysisResponse
     */
    stats: boolean;
    /**
     * 
     * @type {Array<PppAnalysisResponseResultsInner>}
     * @memberof PppAnalysisResponse
     */
    results: Array<PppAnalysisResponseResultsInner>;
}


/**
 * @export
 */
export const PppAnalysisResponseModeEnum = {
    Compare: 'compare',
    Movers: 'movers'
} as const;
export type PppAnalysisResponseModeEnum = typeof PppAnalysisResponseModeEnum[keyof typeof PppAnalysisResponseModeEnum];

/**
 * @export
 */
export const PppAnalysisResponseSortEnum = {
    Increased: 'increased',
    Decreased: 'decreased'
} as const;
export type PppAnalysisResponseSortEnum = typeof PppAnalysisResponseSortEnum[keyof typeof PppAnalysisResponseSortEnum];

/**
 * 
 * @export
 * @interface PppAnalysisResponseResultsInner
 */
export interface PppAnalysisResponseResultsInner {
    /**
     * 
     * @type {string}
     * @memberof PppAnalysisResponseResultsInner
     */
    country: string;
    /**
     * 
     * @type {number}
     * @memberof PppAnalysisResponseResultsInner
     */
    startYear: number;
    /**
     * 
     * @type {number}
     * @memberof PppAnalysisResponseResultsInner
     */
    endYear: number;
    /**
     * 
     * @type {number}
     * @memberof PppAnalysisResponseResultsInner
     */
    startFactor: number | null;
    /**
     * 
     * @type {number}
     * @memberof PppAnalysisResponseResultsInner
     */
    endFactor: number | null;
    /**
     * 
     * @type {number}
     * @memberof PppAnalysisResponseResultsInner
     */
    changePct: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof PppAnalysisResponseResultsInner
     */
    projected: boolean;
    /**
     * 
     * @type {HistoryAnalysisResponseResultsInnerStats}
     * @memberof PppAnalysisResponseResultsInner
     */
    stats?: HistoryAnalysisResponseResultsInnerStats;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof PppAnalysisResponseResultsInner
     */
    series?: { [key: string]: number; };
    /**
     * 
     * @type {string}
     * @memberof PppAnalysisResponseResultsInner
     */
    note?: string;
}
/**
 * 
 * @export
 * @interface RatesByBaseResponse
 */
export interface RatesByBaseResponse {
    /**
     * 
     * @type {string}
     * @memberof RatesByBaseResponse
     */
    base: string;
    /**
     * 
     * @type {string}
     * @memberof RatesByBaseResponse
     */
    date: string;
    /**
     * 
     * @type {string}
     * @memberof RatesByBaseResponse
     */
    requestedDate?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RatesByBaseResponse
     */
    asOf?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof RatesByBaseResponse
     */
    rates: { [key: string]: number; };
    /**
     * 
     * @type {RatesByBaseResponsePpp}
     * @memberof RatesByBaseResponse
     */
    ppp?: RatesByBaseResponsePpp;
}
/**
 * 
 * @export
 * @interface RatesByBaseResponsePpp
 */
export interface RatesByBaseResponsePpp {
    /**
     * 
     * @type {string}
     * @memberof RatesByBaseResponsePpp
     */
    base: string;
    /**
     * 
     * @type {number}
     * @memberof RatesByBaseResponsePpp
     */
    year: number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof RatesByBaseResponsePpp
     */
    values: { [key: string]: number; };
}
/**
 * 
 * @export
 * @interface RatesResponse
 */
export interface RatesResponse {
    /**
     * 
     * @type {string}
     * @memberof RatesResponse
     */
    date: string;
    /**
     * 
     * @type {RatesResponseBaseEnum}
     * @memberof RatesResponse
     */
    base: RatesResponseBaseEnum;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof RatesResponse
     */
    rates: { [key: string]: number; };
    /**
     * 
     * @type {string}
     * @memberof RatesResponse
     */
    requestedDate?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RatesResponse
     */
    asOf?: { [key: string]: string; };
}


/**
 * @export
 */
export const RatesResponseBaseEnum = {
    Usd: 'USD'
} as const;
export type RatesResponseBaseEnum = typeof RatesResponseBaseEnum[keyof typeof RatesResponseBaseEnum];

/**
 * 
 * @export
 * @interface SafeHavenResponse
 */
export interface SafeHavenResponse {
    /**
     * 
     * @type {string}
     * @memberof SafeHavenResponse
     */
    base: string;
    /**
     * 
     * @type {string}
     * @memberof SafeHavenResponse
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof SafeHavenResponse
     */
    to: string;
    /**
     * 
     * @type {SafeHavenResponseCrisis}
     * @memberof SafeHavenResponse
     */
    crisis: SafeHavenResponseCrisis;
    /**
     * 
     * @type {SafeHavenResponseUniverseEnum}
     * @memberof SafeHavenResponse
     */
    universe?: SafeHavenResponseUniverseEnum;
    /**
     * 
     * @type {Array<SafeHavenResponseResultsInner>}
     * @memberof SafeHavenResponse
     */
    results: Array<SafeHavenResponseResultsInner>;
}


/**
 * @export
 */
export const SafeHavenResponseUniverseEnum = {
    Liquid: 'liquid',
    Majors: 'majors'
} as const;
export type SafeHavenResponseUniverseEnum = typeof SafeHavenResponseUniverseEnum[keyof typeof SafeHavenResponseUniverseEnum];

/**
 * 
 * @export
 * @interface SafeHavenResponseCrisis
 */
export interface SafeHavenResponseCrisis {
    /**
     * 
     * @type {string}
     * @memberof SafeHavenResponseCrisis
     */
    label: string;
    /**
     * 
     * @type {string}
     * @memberof SafeHavenResponseCrisis
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof SafeHavenResponseCrisis
     */
    to: string;
}
/**
 * 
 * @export
 * @interface SafeHavenResponseResultsInner
 */
export interface SafeHavenResponseResultsInner {
    /**
     * 
     * @type {string}
     * @memberof SafeHavenResponseResultsInner
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof SafeHavenResponseResultsInner
     */
    score: number | null;
    /**
     * 
     * @type {number}
     * @memberof SafeHavenResponseResultsInner
     */
    volatility: number | null;
    /**
     * 
     * @type {number}
     * @memberof SafeHavenResponseResultsInner
     */
    maxDrawdownPct: number | null;
    /**
     * 
     * @type {number}
     * @memberof SafeHavenResponseResultsInner
     */
    crisisReturnPct: number | null;
    /**
     * 
     * @type {string}
     * @memberof SafeHavenResponseResultsInner
     */
    note?: string;
}
/**
 * 
 * @export
 * @interface VolatilityResponse
 */
export interface VolatilityResponse {
    /**
     * 
     * @type {string}
     * @memberof VolatilityResponse
     */
    base: string;
    /**
     * 
     * @type {string}
     * @memberof VolatilityResponse
     */
    from: string;
    /**
     * 
     * @type {string}
     * @memberof VolatilityResponse
     */
    to: string;
    /**
     * 
     * @type {VolatilityResponseModeEnum}
     * @memberof VolatilityResponse
     */
    mode: VolatilityResponseModeEnum;
    /**
     * 
     * @type {VolatilityResponseSortEnum}
     * @memberof VolatilityResponse
     */
    sort?: VolatilityResponseSortEnum;
    /**
     * 
     * @type {VolatilityResponseUniverseEnum}
     * @memberof VolatilityResponse
     */
    universe?: VolatilityResponseUniverseEnum;
    /**
     * 
     * @type {VolatilityResponseBasisEnum}
     * @memberof VolatilityResponse
     */
    basis: VolatilityResponseBasisEnum;
    /**
     * 
     * @type {Array<VolatilityResponseResultsInner>}
     * @memberof VolatilityResponse
     */
    results: Array<VolatilityResponseResultsInner>;
}


/**
 * @export
 */
export const VolatilityResponseModeEnum = {
    Compare: 'compare',
    Ranking: 'ranking'
} as const;
export type VolatilityResponseModeEnum = typeof VolatilityResponseModeEnum[keyof typeof VolatilityResponseModeEnum];

/**
 * @export
 */
export const VolatilityResponseSortEnum = {
    Stable: 'stable',
    Volatile: 'volatile'
} as const;
export type VolatilityResponseSortEnum = typeof VolatilityResponseSortEnum[keyof typeof VolatilityResponseSortEnum];

/**
 * @export
 */
export const VolatilityResponseUniverseEnum = {
    Liquid: 'liquid',
    Majors: 'majors'
} as const;
export type VolatilityResponseUniverseEnum = typeof VolatilityResponseUniverseEnum[keyof typeof VolatilityResponseUniverseEnum];

/**
 * @export
 */
export const VolatilityResponseBasisEnum = {
    AnnualizedDaily: 'annualized-daily'
} as const;
export type VolatilityResponseBasisEnum = typeof VolatilityResponseBasisEnum[keyof typeof VolatilityResponseBasisEnum];

/**
 * 
 * @export
 * @interface VolatilityResponseResultsInner
 */
export interface VolatilityResponseResultsInner {
    /**
     * 
     * @type {string}
     * @memberof VolatilityResponseResultsInner
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof VolatilityResponseResultsInner
     */
    volatility: number | null;
    /**
     * 
     * @type {number}
     * @memberof VolatilityResponseResultsInner
     */
    observations: number;
    /**
     * 
     * @type {string}
     * @memberof VolatilityResponseResultsInner
     */
    note?: string;
}
