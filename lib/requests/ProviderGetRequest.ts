import {ApiRequest, Method} from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Get provider by ID
 */
export default class ProviderGetRequest extends ApiRequest {
    private id: string;

    /**
     * @param user User should have appKey
     * @param id provider ID
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
      return `/v1/providers/${this.id}`
    }
}
