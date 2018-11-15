import ApiClient from './lib/ApiClient'
import ErrorFactory from './lib/errors/ErrorFactory'

export const productionURL = 'https://api.bankrs.com'
export const sandboxURL = 'https://api.sandbox.bankrs.com'

export interface ClientConfig {
	url: string,
	errorFactory: ErrorFactory,
	headers: [{name: string, value: string}],
	httpClient: (input: RequestInfo, init?: RequestInit) => Promise<Response>
}

/**
 * Creates new API client
 * @param conf Client configuration object
 */
export function newClient (conf: ClientConfig) : ApiClient {
  return new ApiClient(conf.url, conf.errorFactory, conf.headers, conf.httpClient)
}
