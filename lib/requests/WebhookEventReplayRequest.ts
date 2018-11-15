import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Replay event to webhook endpoint
 */
export default class WebhookEventReplayRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = ApiRequest.Method.POST;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 202];

    private id: string;
    /**
     * @param user
     * @param id    event id
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
      return `/v1/events/${this.id}/replay`
    }
}
