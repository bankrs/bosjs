import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Create new application key
 */
export default class ApplicationKeysCreateRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = ApiRequest.Method.POST;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 201];

    private id: string;

    /**
     * @param user
     * @param id  application id
     */
    public constructor (user: User, id: string) {
      super({}, user)
      this.id = id
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/developers/applications/${this.id}/keys`
    }
}
