import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Delete user with all related data
 */
export default class UserDeleteRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method: Method = Method.DELETE;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 202];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400, 401];

    /**
     * @param user User should have authToken and appKey
     * @param email
     * @param password
     */
    public constructor (user: User, password: string) {
      super({ password }, user)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/users`
    }
}
