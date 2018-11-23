import {ApiRequest, Method} from '../ApiRequest'

/**
 * New user registration request.
 */
export default class DeveloperCreateRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.POST;

    /**
     * Endpoint for this request.
     */
    public readonly endpoint = '/v1/developers';

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [201];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400, 409];

    /**
     * Set the new user's email address and password.
     *
     * @param email
     * @param password
     */
    public constructor (email: string, password: string) {
      super({ email, password })
    }
}
