import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import ToParams from '../util/ToParams'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Get a list of all scheduled transactions
 */
export default class ScheduledTransactionListRequest extends ApiRequest {
    private filterParams: string = '';

    /**
     * @param user User should have authToken and appKey
     * @param filters
     */
    public constructor (user: User, filters: {accessId?: number, accountId?: number}) {
      super({}, user)
      this.filterParams = ToParams(filters)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/scheduled_transactions${this.filterParams}`
    }
}
