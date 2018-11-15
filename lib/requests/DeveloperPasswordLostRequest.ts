import ApiRequest from '../ApiRequest'

/**
 * Password reset request.
 */
export default class DeveloperPasswordLostRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = ApiRequest.Method.POST;

    /**
     * Endpoint for this request.
     */
    public readonly endpoint = '/v1/developers/lost_password';

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [204];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes: number[] = [];

    /**
     * Set the user's email address.
     *
     * @param email
     */
    public constructor (email: string) {
      super({ email })
    }
}
