import {ApiRequest, Method} from '../ApiRequest'
import SnakeCase from '../util/SnakeCase'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Re-classify existing transactions
 */
export default class TransactionCategoriseRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.PUT;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 204];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400];

    /**
     * @param user User should have authToken and appKey
     * @param data
     */
    public constructor (user: User, data: {id: number, categoryId: number}[]) {
      super(SnakeCase(data), user)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/transactions/categorise`
    }
}
