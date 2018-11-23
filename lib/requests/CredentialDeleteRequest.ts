import {ApiRequest, Method} from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Delete credentials by id
 */
export default class CredentialDeleteRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.DELETE;

    private id: string;
    /**
     * @param user
     * @param id
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
      return `/v1/developers/credentials/${this.id}`
    }
}
