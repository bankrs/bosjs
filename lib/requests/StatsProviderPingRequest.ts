import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Provider ping statuses by provide id
 */
export default class StatsProviderPingRequest extends ApiRequest {
    /**
     * Provide id
     */
    private readonly Id: string;

    /**
     * @param user
     * @param id
     */
    public constructor (user: User, id: string) {
      super({}, user)
      this.Id = id
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/stats/provider_ping?id=${this.Id}`
    }
}
