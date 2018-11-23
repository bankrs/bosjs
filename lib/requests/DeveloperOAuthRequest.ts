import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars

/**
 * New password request.
 */
export default class DeveloperOAuthRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.POST;

    /**
     * Endpoint for this request.
     */
    public readonly endpoint = '/v1/developers/oauth';

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400, 401];

    /**
     * Set the user new password.
     *
     * @param provider
     * @param token
     */
    public constructor (provider: string, code: string) {
      super({ provider: provider, code: code })
    }
}
