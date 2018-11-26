import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Update webhook
 */
export default class WebhookUpdateRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method: Method = Method.PUT;

    private id: string;

    /**
     * @param user
     * @param webhook
     */
    public constructor (user: User, id: string, webhook: any) {
      super(webhook, user)
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
