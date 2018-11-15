import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Requests application configuration settings.
 */
export default class ApplicationSettingsGetRequest extends ApiRequest {
    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [404];

    private applicationId: string;

    /**
     * @param user
     * @param applicationId
     */
    public constructor (user: User, applicationId: string) {
      super({}, user)
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
