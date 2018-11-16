import {suite, test} from 'mocha-typescript';
import {assert} from 'chai';

import ApiRequest from '../../lib/ApiRequest';
import CredentialGetRequest from '../../lib/requests/CredentialGetRequest';
import User from '../models/User';

@suite
class CredentialGetRequestTest
{
    @test
    'expected endpoint'()
    {
        assert.strictEqual(this.request.endpoint, '/v1/developers/credentials/123');
    }

    @test
    'request method is POST'()
    {
        assert.strictEqual(this.request.method, ApiRequest.Method.GET);
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
        assert.deepEqual(this.request.payload, {});
    }

    private get request()
    {
        return new CredentialGetRequest(new User, '123');
    }
}
