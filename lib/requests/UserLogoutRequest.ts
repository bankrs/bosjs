import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Logout user
 */
export default class UserLogoutRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = ApiRequest.Method.POST;

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
     */
    public constructor (user: User) {
      super({}, user)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/users/logout`
    }
}
