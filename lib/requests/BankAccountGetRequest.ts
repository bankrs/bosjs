import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * List all bank accounts
 */
export default class BankAccountGetRequest extends ApiRequest {
    private id: number;

    /**
     * @param user User should have authToken and appKey
     * @param id Bank account ID
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
      return `/v1/accounts/${this.id}`
    }
}
