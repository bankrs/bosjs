import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * User logout request.
 */
export default class DeveloperLogoutRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method: Method = Method.POST;

    /**
     * Endpoint for this request.
     */
    public readonly endpoint = '/v1/developers/logout';

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [204, 401, 403];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes: number[] = [];

    /**
     * Set the user to be logged out.
     *
     * @param user
     */
    public constructor (user: User) {
      super({}, user)
    }
}
