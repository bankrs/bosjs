import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import SnakeCase from '../util/SnakeCase'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Add new access
 */
export default class AccessCreateRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.POST;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 202];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400];

    /**
     * @param user User should have authToken and appKey
     * @param data
     */
    public constructor (user: User, data: {providerId: string, answers: {id: string, value: string, store?: boolean, validUntil?: Date}[] }) {
      super(SnakeCase(data), user)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/accesses`
    }
}
