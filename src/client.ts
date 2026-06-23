/* tslint:disable */
/* eslint-disable */
import { Configuration } from './runtime';
import { CurrencyCoreApi } from './apis';

// Ambient: `process` exists on Node but not in the browser / React Native.
// Declared locally so no `@types/node` dependency leaks into the bundle.
declare const process: { env?: Record<string, string | undefined> } | undefined;

export interface CreateClientOptions {
  /**
   * API key (e.g. `cc_live_...`). Falls back to the `CURRENCYCORE_API_KEY`
   * environment variable on Node. Omit it for the public reference endpoints
   * (`countries`, `currencies`).
   */
  apiKey?: string;
  /**
   * Full base URL override. Falls back to `CURRENCYCORE_BASE_URL`, otherwise
   * the public host with the chosen `version`.
   */
  baseUrl?: string;
  /** API version segment of the default base URL. Defaults to `v1`. */
  version?: string;
}

const DEFAULT_HOST = 'https://api.currency-core.com';

function fromEnv(name: string): string | undefined {
  // Guarded: `process` does not exist in the browser / React Native.
  return typeof process !== 'undefined' && process.env ? process.env[name] : undefined;
}

/**
 * Build a configured {@link CurrencyCoreApi}. Resolves the API key and base URL
 * from explicit options first, then the environment.
 */
export function createClient(options: CreateClientOptions = {}): CurrencyCoreApi {
  const apiKey = options.apiKey ?? fromEnv('CURRENCYCORE_API_KEY');
  const version = options.version ?? 'v1';
  const basePath =
    options.baseUrl ?? fromEnv('CURRENCYCORE_BASE_URL') ?? `${DEFAULT_HOST}/${version}`;
  return new CurrencyCoreApi(new Configuration({ basePath, accessToken: apiKey }));
}
