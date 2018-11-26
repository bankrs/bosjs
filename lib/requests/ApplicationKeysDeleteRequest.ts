import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Delete application key by id
 */
export default class ApplicationKeysDeleteRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method: Method = Method.DELETE;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 204];

    private id: string;

    /**
     * @param user
     * @param key key to delete
     */
    public constructor (user: User, key: string) {
      super({}, user)
      this.id = key
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/developers/application_keys/${this.id}`
    }
}
