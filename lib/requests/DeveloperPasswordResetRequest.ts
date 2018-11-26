import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars

/**
 * New password request.
 */
export default class DeveloperPasswordResetRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method: Method = Method.POST;

    /**
     * Endpoint for this request.
     */
    public readonly endpoint = '/v1/developers/reset_password';

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [202];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400, 401];

    /**
     * Set the user new password.
     *
     * @param password
     * @param token
     */
    public constructor (password: string, token: string) {
      super({ password, token })
    }
}
