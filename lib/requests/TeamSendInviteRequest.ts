import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Send invite to new team member
 */
export default class TeamSendInviteRequest extends ApiRequest {
    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 202];

    /**
     * Request method.
     */
    public readonly method: Method = Method.POST;

    /**
     * @param user
     * @param email
     */
    public constructor (user: User, email: string) {
      super({ email: email }, user)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/developers/team/invite`
    }
}
