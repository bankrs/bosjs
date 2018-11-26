import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Switch to another team/default account
 */
export default class TeamSwitchRequest extends ApiRequest {
    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 204];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400];

    /**
     * Request method.
     */
    public readonly method: Method = Method.POST;

    private teamId: string | undefined;

    /**
     * @param user
     * @param id team ID for switching to another team or null for use default account
     */
    public constructor (user: User, id?: string) {
      super({}, user)
      this.teamId = id
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      const q = this.teamId ? `?team_id=${this.teamId}` : ''
      return `/v1/developers/team/switch${q}`
    }
}
