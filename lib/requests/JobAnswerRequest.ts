import {ApiRequest, Method} from '../ApiRequest'
import SnakeCase from '../util/SnakeCase'
import User from '../authentication/User' // eslint-disable-line no-unused-vars

/**
 * Answering a challenged job
 */
export default class JobAnswerRequest extends ApiRequest {
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

    private id: string;

    /**
     * @param user User should have authToken and appKey
     * @param id Job ID
     */
    public constructor (user: User, id: string, answer: {id: string, value: string, store?: boolean, validUntil?: Date}) {
      super(SnakeCase(answer), user)
      this.id = id
    }

    /**
     * Get endpoint for this request.
     *
     * @returns Endpoint for this request.
     */
    public get endpoint (): string {
      return `/v1/jobs/${this.id}`
    }
}
