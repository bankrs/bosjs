import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Update credentials
 */
export default class CredentialUpdateRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = ApiRequest.Method.PUT;

    private id: string;

    /**
     * @param user
     * @param id
     * @param credential
     */
    public constructor (user: User, id: string, credential: any) {
      super(credential, user)
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
