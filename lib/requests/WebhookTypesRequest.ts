import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Get webhooks types
 */
export default class WebhookTypesRequest extends ApiRequest {
  /**
     * @param user
     */
  public constructor (user: User) {
    super({}, user)
  }

  /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
  public get endpoint (): string {
    return `/v1/webhooks_types`
  }
}
