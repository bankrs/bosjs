import ApiRequest from '../ApiRequest'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Resend confirmation email
 */
export default class ResendConfirmationRequest extends ApiRequest {
    /**
     * Request method.
     */
    public readonly method = ApiRequest.Method.POST;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [202];

    /**
     * @param user
     */
    public constructor (user: User) {
      super({}, user)
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return '/v1/developers/send_confirmation'
    }
}
