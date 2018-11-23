import {ApiRequest, Method} from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Send test event to webhook endpoint
 */
export default class WebhookTestRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.POST;

    private id: string;
    /**
     * @param user
     * @param id    webhook id
     * @param event event type
     */
    public constructor (user: User, id: string, event: string) {
      super({ event }, user)
      this.id = id
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/webhooks/${this.id}/test`
    }
}
