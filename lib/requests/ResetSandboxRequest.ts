import {ApiRequest, Method} from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Delete given user's account.
 */
export default class ResetSandboxRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.POST;

    /**
     * Endpoint for this request.
     */
    public readonly endpoint = '/v1/developers/reset';

    /**
     * Perform request to sandbox
     */
    public readonly sandbox: boolean = true;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 202];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400, 401];

    /**
     * Set the user whose account should be deleted.
     *
     * @param user
     * @param password current password
     */
    public constructor (user: User, password: string) {
      super({ password: password }, user)
    }
}
