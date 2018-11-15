import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Search for a financial provider by query string.
 */
export default class ProvidersSearchRequest extends ApiRequest {
    /**
     * Search query
     */
    private readonly q: string;

    /**
     * @param user
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
