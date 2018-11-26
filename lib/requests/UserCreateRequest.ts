import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Create new user
 */
export default class UserCreateRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method: Method = Method.POST;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 201];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400];

    /**
     * @param user User should have appKey
     * @param email
     * @param password
     */
    public constructor (user: User, email: string, password: string) {
      super({ username: email, password: password }, user)
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
