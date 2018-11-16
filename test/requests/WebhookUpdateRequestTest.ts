import {suite, test} from 'mocha-typescript';
import {assert} from 'chai';

import ApiRequest from '../../lib/ApiRequest';
import WebhookUpdateRequest from '../../lib/requests/WebhookUpdateRequest';
import User from '../models/User';

const data = {
    api_version: 1,
    url: 'https://site.com/webhooks',
    events: ['*']
};

@suite
class WebhookUpdateRequestTest
{
    @test
    'expected endpoint'()
    {
        assert.strictEqual(this.request.endpoint, '/v1/webhooks/123');
    }

    @test
    'request method is PUT'()
    {
        assert.strictEqual(this.request.method, ApiRequest.Method.PUT);
    }

    @test
    'expected success codes'()
    {
        assert.deepEqual(this.request.successCodes, [200]);
    }

    @test
    'expected error codes'()
    {
        assert.deepEqual(this.request.errorCodes, [400]);
    }

    @test
    'expected payload'()
    {
        assert.deepEqual(this.request.payload, data);
    }

    private get request()
    {
        return new WebhookUpdateRequest(new User, '123', data);
    }
}
