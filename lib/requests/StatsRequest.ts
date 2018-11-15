import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

export default abstract class StatsRequest extends ApiRequest { // eslint-disable-line no-undef
    /**
     * Data domain.
     */
    protected readonly domain: string = '';

    /**
     * Set interval to fetch the data from.
     *
     * @param user
     * @param from
     * @param to
     */
    public constructor (user: User, private readonly from: Date, private readonly to: Date) {
      super({}, user)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint () {
      const fromDate = [this.from.getFullYear(), this.from.getMonth() + 1, this.from.getDate()]

      for (let i = 0; i < 3; i++) {
        if (isNaN(fromDate[i])) {
          throw new Error("'from' date not match YYYY-MM-DD format")
        }
      }

      const toDate = [this.to.getFullYear(), this.to.getMonth() + 1, this.to.getDate()]

      for (let i = 0; i < 3; i++) {
        if (isNaN(toDate[i])) {
          throw new Error("'to' date not match YYYY-MM-DD format")
        }
      }

      return `/v1${this.domain}?from_date=${fromDate.join('-')}&to_date=${toDate.join('-')}`
    }
}
