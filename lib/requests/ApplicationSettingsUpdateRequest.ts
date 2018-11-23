import {ApiRequest, Method} from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Requests application configuration settings.
 */
export default class ApplicationSettingsUpdateRequest extends ApiRequest {
    private applicationId: string;

    /**
     * Request method.
     */
    public readonly method = Method.PUT;

    /**
     * @param user
     * @param applicationId
     */
    public constructor (user: User, applicationId: string, data: any) {
      super(data, user)
      this.applicationId = applicationId
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/developers/applications/${this.applicationId}/settings`
    }
}
