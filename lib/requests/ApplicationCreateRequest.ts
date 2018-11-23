import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Create application
 */
export default class ApplicationCreateRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.POST;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 201];

    /**
     * @param user
     * @param attr
     */
    public constructor (user: User, attr: any) {
      super(attr, user)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/developers/applications`
    }
}
