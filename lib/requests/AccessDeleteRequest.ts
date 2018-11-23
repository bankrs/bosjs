import {ApiRequest, Method} from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Delete access
 */
export default class AccessDeleteRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.DELETE;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400];

    private id: number

    /**
     * @param user User should have authToken and appKey
     * @param id The access ID
     */
    public constructor (user: User, id: number) {
      super({}, user)
      this.id = id
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/accesses/${this.id}`
    }
}
