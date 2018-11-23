import {ApiRequest, Method} from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Get credentials list
 */
export default class CredentialListRequest extends ApiRequest {
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
      return `/v1/developers/applications/${this.id}/credentials`
    }
}
