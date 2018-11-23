import {ApiRequest, Method} from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Validate IBAN
 */
export default class IBANRequest extends ApiRequest {
    private iban: string;

    /**
     * @param user User should have authToken and appKey
     * @param iban  IBAN to validate
     */
    public constructor (user: User, iban: string) {
      super({}, user)
      this.iban = iban
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/iban/${this.iban}`
    }
}
