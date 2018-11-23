import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Create application
 */
export default class ApplicationUpdateRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.PUT;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 204];

    private id: string;

    /**
     * @param user
     * @param id application id
     * @param attr
     */
    public constructor (user: User, id: string, attr: any) {
      super(attr, user)
      this.id = id
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/developers/applications/${this.id}`
    }
}
