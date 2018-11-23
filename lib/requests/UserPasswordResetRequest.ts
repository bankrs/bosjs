
import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Logout user
 */
export default class UserPasswordResetRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.POST;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 204];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400, 401];

    /**
     * @param user User should have authToken and appKey
     * @param email
     * @param newPassword
     */
    public constructor (user: User, email: string, newPassword: string) {
      super({ username: email, password: newPassword }, user)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/users/reset_password`
    }
}
