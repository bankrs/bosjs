import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Cancel transfer
 */
export default class TransferCancelRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.POST;

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
    public constructor (user: User, id: number, data: {version: number, type: string}) {
      super(data, user)
      this.id = id
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/transfers/${this.id}/cancel`
    }
}
