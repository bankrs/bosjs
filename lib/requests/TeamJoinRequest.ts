import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Join team by apply invite
 */
export default class TeamJoinRequest extends ApiRequest {
    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 404, 409];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400];

    /**
     * Request method.
     */
    public readonly method = ApiRequest.Method.POST;

    /**
     * @param user User if session present
     * @param token
     */
    public constructor (token: string, user?: User) {
      super({ token: token }, user)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/developers/team/join`
    }
}
