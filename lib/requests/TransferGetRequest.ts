import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Get transfer
 */
export default class TransferGetRequest extends ApiRequest {
    private id: number;

    /**
     * @param user User should have authToken and appKey
     * @param id
     */
    public constructor (user: User, id: number) {
      super({}, user)
      this.id = id
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/transfers/${this.id}`
    }
}
