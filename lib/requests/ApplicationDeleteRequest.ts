import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Delete application by id
 */
export default class ApplicationDeleteRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = ApiRequest.Method.DELETE;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 202];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400, 401];

    private id: string;

    /**
     * @param user
     * @param id application id
     * @param data confirmation object with email or password
     */
    public constructor (user: User, id: string, data: {password?: string, email?: string}) {
      super(data, user)
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
