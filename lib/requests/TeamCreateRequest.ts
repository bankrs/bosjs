import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Create team
 */
export default class TeamCreateRequest extends ApiRequest {
    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 201];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400];

    /**
     * Request method.
     */
    public readonly method: Method = Method.POST;

    /**
     * @param user
     * @param name team name
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
