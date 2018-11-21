/* eslint-disable */

/**
 * Describe authenticated user/developer who makes request
 */
export default interface user {
    authToken(): string // authorization token
    appKey(): string // application key
}
