import ApiRequest from '../ApiRequest'
import ToParams from '../util/ToParams'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * List all transactions
 */
export default class TransactionListRequest extends ApiRequest {
    private filterParams: string = '';

    /**
     * @param user User should have authToken and appKey
     * @param filters
     */
    public constructor (user: User, filters: {accessId?: number, accountId?: number, since?: Date, limit?: number, offset?: number}) {
      super({}, user)
      this.filterParams = ToParams(filters)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/transactions${this.filterParams}`
    }
}
