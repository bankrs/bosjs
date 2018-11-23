import {ApiRequest, Method} from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Login user
 */
export default class UserLoginRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.POST;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400, 401];

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
      return `/v1/users/login`
    }
}
