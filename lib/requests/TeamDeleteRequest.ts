import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Delete team
 */
export default class TeamDeleteRequest extends ApiRequest {
    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 204];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400, 401, 404];

    /**
     * Request method.
     */
    public readonly method: Method = Method.DELETE;

    /**
     * @param user
     * @param data confirmation object with email or password
     */
    public constructor (user: User, data: {password?: string, email?: string}) {
      super(data, user)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/developers/team`
    }
}
