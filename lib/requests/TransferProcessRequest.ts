
import ApiRequest from '../ApiRequest'
import SnakeCase from '../util/SnakeCase'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/* eslint-disable no-undef */
interface attributes {
  intent: string
  version: number
  confirm: boolean
  type: string
  challengeAnswers: {id: string, value: string}[]
}
/* eslint-enable no-undef */

/**
 * Process created transfer
 */
export default class TransferProcessRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = ApiRequest.Method.POST;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200];

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
      return `/v1/transfers/${this.id}`
    }
}
