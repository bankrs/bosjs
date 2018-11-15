import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Get list of team accesses
 */
export default class TeamAccessListRequest extends ApiRequest {
    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400, 404];

    /**
     * @param user
     */
    public constructor (user: User) {
      super({}, user)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/developers/team/accesses`
    }
}
