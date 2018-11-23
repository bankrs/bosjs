import ApiClient from './lib/ApiClient'
import ErrorFactory from './lib/errors/ErrorFactory'

interface config {
	url: string,
	errorFactory?: ErrorFactory,
	headers?: {name: string, value: string}[],
	httpClient?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
}

export * from './lib/requests'
export const productionURL = 'https://api.bankrs.com'
export const sandboxURL = 'https://api.sandbox.bankrs.com'

/**
 * Creates new API client
 * @param conf Client configuration object
 */
export function newClient (conf: config) : ApiClient {
  return new ApiClient(conf.url, conf.errorFactory, conf.headers, conf.httpClient)
}
