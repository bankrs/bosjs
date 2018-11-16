import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Changes user's password.
 */
export default class DeveloperNewPasswordRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = ApiRequest.Method.POST;

    /**
     * Endpoint for this request.
     */
    public readonly endpoint = '/v1/developers/password';

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400];

    /**
     * @param user
     * @param currentPassword
     * @param newPassword
     */
    public constructor (user: User, currentPassword: string, newPassword: string) {
      super({ old_password: currentPassword, new_password: newPassword }, user)
    }
}
