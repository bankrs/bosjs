import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Update team
 */
export default class TeamUpdateRequest extends ApiRequest {
    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 204];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400, 404];

    /**
     * Request method.
     */
    public readonly method: Method = Method.PUT;

    /**
     * @param user
     * @param name new team name
     */
    public constructor (user: User, name: string) {
      super({ name: name }, user)
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
