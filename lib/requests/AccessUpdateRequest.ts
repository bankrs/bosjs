import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Update access
 */
export default class AccessUpdateRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method: Method = Method.POST;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 204];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400];

    private id: number

    /**
     * @param user User should have authToken and appKey
     * @param data
     */
    public constructor (user: User, id: number, data: {id: string, value: string, store?: boolean}[]) {
      super({ challenge_answers: data }, user)
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
