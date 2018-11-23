import {ApiRequest, Method} from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Create webhook
 */
export default class WebhookCreateRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.POST;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 201];

    /**
     * @param user
     * @param webhook
     */
    public constructor (user: User, webhook: any) {
      super(webhook, user)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/webhooks`
    }
}
