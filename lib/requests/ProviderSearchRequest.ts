import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Search for a financial provider by query string.
 */
export default class ProviderSearchRequest extends ApiRequest {
    /**
     * Search query
     */
    private readonly q: string;

    /**
     * @param user User should have appKey
     * @param q
     */
    public constructor (user: User, q: string) {
      super({}, user)
      this.q = q
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      const q = encodeURIComponent(this.q.trim())
      return `/v1/providers?q=${q}`
    }
}
