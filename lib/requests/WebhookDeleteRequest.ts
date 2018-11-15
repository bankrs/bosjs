import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Delete webhook
 */
export default class WebhookDeleteRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = ApiRequest.Method.DELETE;

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
      return `/v1/webhooks/${this.id}`
    }
}
