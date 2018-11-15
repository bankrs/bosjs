/**
 * Describe authenticated user/developer who makes request
 */
export default interface user {
    loggedIn(): boolean
    authToken(): string
}
