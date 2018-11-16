import { suite, test } from 'mocha-typescript';
import { assert } from 'chai';

import ApplicationCreateRequest from '../lib/requests/ApplicationCreateRequest';
import AccessDenied from '../lib/errors/AccessDenied';
import UserError from '../lib/errors/UserError';
import ApiClient from '../lib/ApiClient';
import ApiRequest from '../lib/ApiRequest';
import User from './models/User';

@suite
class ApiClientTest {
	@test
	async 'all connected slots are invoked when access denied signal is emitted'() {
		const error = new AccessDenied;
		const apiClient = this.mockApiClient(error);
		const request = new class extends ApiRequest { }({});
		const calls: { error: Error, request: ApiRequest }[] = [];

		apiClient
			.onAccessDenied((error, request) => { calls.push({ error, request }); })
			.onAccessDenied((error, request) => { calls.push({ error, request }); });

		await apiClient.send(request);

		assert.lengthOf(calls, 2);
		calls.forEach(call => {
			assert.strictEqual(call.error, error);
			assert.strictEqual(call.request, request)
		});
	}

	@test
	async 'all connected slots are invoked when user error signal is emitted'() {
		const error = new UserError(400, 'general');
		const apiClient = this.mockApiClient(error);
		const request = new class extends ApiRequest { }({});
		const calls: { error: UserError, request: ApiRequest }[] = [];

		apiClient
			.onUserError((error, request) => { calls.push({ error, request }); })
			.onUserError((error, request) => { calls.push({ error, request }); });

		await apiClient.send(request);

		assert.lengthOf(calls, 2);
		calls.forEach(call => {
			assert.strictEqual(call.error, error);
			assert.strictEqual(call.request, request);
		});
	}

	@test
	async 'all connected slots are invoked when unexpected error signal is emitted'() {
		const error = new Error;
		const apiClient = this.mockApiClient(error);
		const request = new class extends ApiRequest { }({});
		const calls: { error: Error, request: ApiRequest }[] = [];

		apiClient
			.onUnexpectedError((error, request) => { calls.push({ error, request }); })
			.onUnexpectedError((error, request) => { calls.push({ error, request }); });

		await apiClient.send(request);

		assert.lengthOf(calls, 2);
		calls.forEach(call => {
			assert.strictEqual(call.error, error);
			assert.strictEqual(call.request, request);
		});
	}

	@test
	async 'success callback is invoked'() {
		let invoked = false;
		const apiClient = new class extends ApiClient { }('');
		(<any>apiClient).sendHttpRequest = () => Promise.resolve({});

		await apiClient.send(new class extends ApiRequest { }({}), () => invoked = true);

		assert.isTrue(invoked);
	}

	@test
	async 'error callback is invoked'() {
		let invoked = false, invokedWith = undefined;
		const error = new Error;
		const apiClient = this.mockApiClient(error);

		await apiClient.send(
			new class extends ApiRequest { }({}),
			undefined,
			e => { invoked = true; invokedWith = error; }
		);

		assert.isTrue(invoked);
		assert.strictEqual(invokedWith, error);
	}

	@test
	async 'set httpClient'() {
		const httpClientMock = (input: RequestInfo, init?: RequestInit): Promise<Response> => {
			return Promise.resolve(new Response(`{"status": "created"}`));
		}
		
		let resBody = null;
		let resErr = null;

		const c = new ApiClient('https://api.com', undefined, undefined, httpClientMock)
		await c.send(new ApplicationCreateRequest(new User, {}), (res) => {
			resBody = res
		}, (err) => {
			resErr = err
		});

		assert.strictEqual(resErr, null);
		assert.deepEqual(resBody, { status: 'created' });
	}

	private mockApiClient(error: Error): ApiClient {
		const mock = new class extends ApiClient { }('');
		(<any>mock).sendHttpRequest = () => { throw error; };

		return mock;
	}
}
