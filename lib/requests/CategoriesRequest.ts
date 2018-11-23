import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Get categories
 */
export default class CategoriesRequest extends ApiRequest {
  /**
     * @param user User should have authToken and appKey
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
    return `/v1/categories`
  }
}
