import {ApiRequest, Method} from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Cancel running job
 */
export default class JobCancelRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.DELETE;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 204];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400];

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
