import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Update team member accesses
 */
export default class TeamMemberAccessUpdateRequest extends ApiRequest {
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

    private id: string;

    /**
     * @param user
     * @param memberId
     * @param accesses array of accesses to update
     */
    public constructor (user: User, memberId: string, accesses: any) {
      super({ accesses: accesses }, user)
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
