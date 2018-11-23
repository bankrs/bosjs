import { ApiRequest, Method } from '../ApiRequest' // eslint-disable-line no-unused-vars

/**
 * Send confirmation token
 */
export default class DeveloperConfirmationRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = Method.POST;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200, 404];

    /**
     * @param token
     */
    public constructor (token: string) {
      super({ token: token })
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return '/v1/developers/confirm'
    }
}
