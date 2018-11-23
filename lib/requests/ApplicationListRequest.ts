import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Requests application list.
 */
export default class ApplicationListRequest extends ApiRequest {
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
    return `/v1/developers/applications`
  }
}
