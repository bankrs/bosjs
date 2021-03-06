import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars

/**
 * User login request.
 */
export default class DeveloperLoginRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method: Method = Method.POST;

    /**
     * Endpoint for this request.
     */
    public readonly endpoint = '/v1/developers/login';

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400, 401];

    /**
     * Set the user's email address and password.
     *
     * @param email
     * @param password
     */
    public constructor (email: string, password: string) {
      super({ email, password })
    }
}
