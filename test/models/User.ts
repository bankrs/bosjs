
/**
 * Implement User interface
 */
export default class User {
	public constructor(public token: string = 'auth-token') { }

	public loggedIn(): boolean {
		return this.token !== ''
	}

	public authToken(): string {
		return this.token
	}
}
