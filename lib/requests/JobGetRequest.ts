import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Get job details
 */
export default class JobGetRequest extends ApiRequest {
    private id: string;

    /**
     * @param user User should have authToken and appKey
     * @param id Job ID
     */
    public constructor (user: User, id: string) {
      super({}, user)
      this.id = id
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/jobs/${this.id}`
    }
}
