import {ApiRequest, Method} from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Get scheduled transaction
 */
export default class ScheduledTransactionGetRequest extends ApiRequest {
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
      return `/v1/scheduled_transactions/${this.id}`
    }
}
