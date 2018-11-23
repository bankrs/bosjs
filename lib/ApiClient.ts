/* eslint-disable no-unused-vars,no-undef,no-useless-constructor */
import AccessDenied from './errors/AccessDenied'
import UnexpectedCode from './errors/UnexpectedCode'
import UserError from './errors/UserError'
import Unauthorized from './errors/Unauthorized'
import ErrorFactory from './errors/ErrorFactory'
import { ApiRequest } from './ApiRequest'
import Config from './Config'

export default class ApiClient {
    /**
     * List of slots to invoked when access is denied.
     */
    private onAccessDeniedSlots: ((error: Error, request: ApiRequest) => void)[] = [];

    /**
     * List of slots to invoked when request is unauthorized.
     */
    private onUnauthorizedSlots: ((request: ApiRequest) => void)[] = [];

    /**
     * List of slots to be invoked when input from the user causes an error.
     */
    private onUserErrorSlots: ((error: UserError, request: ApiRequest) => void)[] = [];

    /**
     * List of slots to be invoked when an unexpected error occurs.
     */
    private onUnexpectedErrorSlots: ((error: Error, request: ApiRequest) => void)[] = [];

    private environment: string = '';

    /**
     * Init client
     *
     * @param baseUrl the base URL of API endpoints.
     * @param errorFactory mapper for error code to full message
     * @param headers array of additional headers
     * @param httpClient HTTP client to make network requests, default is browser fetch()
     */
    public constructor (
        private readonly baseUrl: URL | string,
        private readonly errorFactory?: ErrorFactory,
        private readonly headers?: Array<{name: string, value: string}>,
        private readonly httpClient: (input: RequestInfo, init?: RequestInit) => Promise<Response> = fetch
    ) {}

    /**
     * Send the given request to its endpoint.
     *
     * @param request Request to be sent.
     * @param onSuccess Callback to be called in case of success.
     * @param onError Callback to be called in case of error.
     */
    public async send (request: ApiRequest, onSuccess?: (response: any) => void, onError?: (error: Error) => void) {
      try {
        const response = await this.sendHttpRequest(request)
        if (onSuccess) onSuccess(response)
      } catch (e) {
        if (e instanceof AccessDenied) {
          this.onAccessDeniedSlots.forEach(slot => slot(e, request))
        } else if (e instanceof Unauthorized) {
          this.onUnauthorizedSlots.forEach(slot => slot(request))
        } else if (e instanceof UserError) {
          this.onUserErrorSlots.forEach(slot => slot(e, request))
        } else {
          this.onUnexpectedErrorSlots.forEach(slot => slot(e, request))
        }

        if (onError) onError(e)
      }
    }

    /**
     * Explicitly set environment
     * @param env environment name
     */
    public setEnvironment (env: string) {
      this.environment = env
    }

    /**
     * Connect a slot to be invoked when access is denied.
     *
     * @param slot Slot to be invoked when access is denied.
     */
    public onAccessDenied (slot: (error: Error, request: ApiRequest) => void) {
      this.onAccessDeniedSlots.push(slot)
      return this
    }

    /**
     * Connect a slot to be invoked when request is unauthorized.
     * @param slot Slot to be invoked.
     */
    public onUnauthorized (slot: (request: ApiRequest) => void) {
      this.onUnauthorizedSlots.push(slot)
      return this
    }

    /**
     * Connect a slot to be invoked when input from the user causes an error.
     *
     * @param slot Slot to be invoked when input from the user causes an error.
     */
    public onUserError (slot: (error: UserError, request: ApiRequest) => void) {
      this.onUserErrorSlots.push(slot)
      return this
    }

    /**
     * Connect a slot to be invoked when an unexpected error occurs.
     *
     * @param slot Slot to be invoked when an unexpected error occurs.
     */
    public onUnexpectedError (slot: (error: Error, request: ApiRequest) => void) {
      this.onUnexpectedErrorSlots.push(slot)
      return this
    }

    /**
     * Send the given request to its endpoint.
     *
     * @param request
     *
     * @returns A promise to be resolved with the response.
     */
    private sendHttpRequest (request: ApiRequest) : Promise<any> {
      if (!request.endpoint) {
        throw new Error('request endpoint is not set')
      }

      const method = ['HEAD', 'GET', 'POST', 'PUT', 'DELETE'][request.method]
      const baseUrl = this.baseUrl.toString()
      const url = new URL(request.endpoint, baseUrl).toString()

      const params: RequestInit = {}
      params.method = method
      params.mode = 'cors'
      params.headers = []

      if (request.user) {
        if (request.user.authToken() !== '') {
          params.headers.push(['X-Token', request.user.authToken()])
        }

        if (request.user.appKey() !== '') {
          params.headers.push(['X-Application-Key', request.user.appKey()])
        }
      }

      if (this.environment !== '') {
        params.headers.push(['X-Environment', this.environment])
      }

      if (params.method !== 'HEAD' && params.method !== 'GET') {
        params.headers.push(['Content-Type', 'application/json'])
        params.body = JSON.stringify(request.payload)
      }

      params.headers.push(['User-Agent', 'bosjs-bankrs-os-client/' + Config.version])

      if (this.headers) {
        for (let i = 0; i < this.headers.length; i++) {
          const h = this.headers[i]
          params.headers.push([h.name, h.value])
        }
      }

      return this.httpClient(url, params).then(response => this.handleHttpResponse(request, response))
    }

    /**
     * Handle the given HTTP response to the given request.
     *
     * @param request
     * @param response
     */
    private handleHttpResponse (request: ApiRequest, response: Response) {
      if (request.successCodes.indexOf(response.status) >= 0) {
        return response.json().catch(() => {})
      }

      if (response.status === 400 || request.expectedCodes.indexOf(response.status) >= 0) {
        return response.json().then((payload: any) => {
          let e = { code: '' }

          if (payload.errors) {
            e = payload.errors[0] || {}
          }

          if (e.code === 'deactivated_environment' || e.code === 'access_denied') {
            throw new AccessDenied(e.code, this.errorFactory)
          }

          throw new UserError(response.status, e.code, this.errorFactory)
        })
      }

      if (response.status === 401) {
        throw new Unauthorized()
      }

      if (response.status === 403) {
        throw new AccessDenied()
      }

      throw new UnexpectedCode(response.status, request.expectedCodes)
    }
}
