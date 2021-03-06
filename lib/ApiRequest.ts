/* eslint-disable no-unused-vars,no-undef,no-useless-constructor */
import User from './authentication/User'

/**
 * Enumeration of allowed request methods.
 */
export enum Method {HEAD, GET, POST, PUT, DELETE}

export abstract class ApiRequest {
    /**
     * Request method.
     */
    public readonly method: Method = Method.GET;

    /**
     * Endpoint for this request.
     */
    public readonly endpoint: string | undefined;

    /**
     * When true then perform request to sandbox API
     */
    public readonly sandbox: boolean = false;

    /**
     * Allowed success codes.
     */
    public readonly successCodes = [200];

    /**
     * Allowed error codes.
     */
    public readonly errorCodes = [400];

    /**
     * Set this request payload.
     *
     * @param payload data to send
     * @param user user credentials
     */
    public constructor (public readonly payload: any, public readonly user?: User) {}

    /**
     * Allowed success and error codes.
     */
    public get expectedCodes (): number[] {
      return this.successCodes.concat(this.errorCodes)
    }
}
