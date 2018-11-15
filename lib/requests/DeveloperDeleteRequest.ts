import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Delete given user's account.
 */
export default class DeveloperDeleteRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = ApiRequest.Method.DELETE;

    /**
     * Endpoint for this request.
     */
    public readonly endpoint = '/v1/developers';

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 202, 204];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400, 401, 403];

    /**
     * Set the user whose account should be deleted.
     *
     * @param user
     * @param password current password
     */
    public constructor (user: User, data: {password?: string, email?: string}) {
      super(data, user)
    }
}
