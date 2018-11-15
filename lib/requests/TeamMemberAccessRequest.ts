import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Get team member accesses
 */
export default class TeamMemberAccessRequest extends ApiRequest {
    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400, 404];

    private id: string;

    /**
     * @param user
     * @param memberId
     */
    public constructor (user: User, memberId: string) {
      super({}, user)
      this.id = memberId
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/developers/team_members/${this.id}/accesses`
    }
}
