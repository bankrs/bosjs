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
      const fromDate = this.formatDate([this.from.getFullYear(), this.from.getMonth() + 1, this.from.getDate()])
      const toDate = this.formatDate([this.to.getFullYear(), this.to.getMonth() + 1, this.to.getDate()])

      return `/v1${this.domain}?from_date=${fromDate.join('-')}&to_date=${toDate.join('-')}`
    }

    private formatDate(date: number[]): string[]
    {
      const formated: string[] = []

      for (let i = 0; i < 3; i++) {
        if (isNaN(date[i])) {
          throw new Error("date not match YYYY-MM-DD format")
        }

        const d = date[i]

        if (i > 0 && d < 10) {
          formated.push(`0${d}`)
          continue
        }

        formated.push(d.toString())
      }

      return formated
    }
}
