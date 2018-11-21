import ApiRequest from '../ApiRequest'
import SnakeCase from '../util/SnakeCase'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/* eslint-disable no-undef */
interface attributes {
  from: string
  to: {iban: string, name: string, bankAccessId: number, bankAccountId: number}
  type?: string
  schedule?: {start: Date, until: Date, frequency: string, interval?: number, byDay?: number}
  amount: {value: string, currency: string}
  entryDate?: Date
  usage?: string
  challengeAnswers?: {id: string, value: string, store?: boolean, validUntil?: Date}[]
}
/* eslint-enable no-undef */

/**
 * Update repeated transaction
 */
export default class RepeatedTransactionUpdateRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = ApiRequest.Method.PUT;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 201];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400];

    private id: number;

    /**
     * @param user User should have authToken and appKey
     * @param id
     * @param data
     */
    public constructor (user: User, id: number, data: attributes) {
      super(SnakeCase(data), user)
      this.id = id
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/repeated_transactions/${this.id}`
    }
}
