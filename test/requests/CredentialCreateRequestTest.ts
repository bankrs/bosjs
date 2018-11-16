import {suite, test} from 'mocha-typescript';
import {assert} from 'chai';

import ApiRequest from '../../lib/ApiRequest';
import CredentialCreateRequest from '../../lib/requests/CredentialCreateRequest';
import User from '../models/User';

const data = {
    provider:"ICS",
    keys: { 
        secret:"s123",
        token:"t123"
    }
};

@suite
class CredentialCreateRequestTest
{
    @test
    'expected endpoint'()
    {
        assert.strictEqual(this.request.endpoint, '/v1/developers/applications/123/credentials');
    }

    @test
    'request method is POST'()
    {
        assert.strictEqual(this.request.method, ApiRequest.Method.POST);
    }

    @test
    'expected success codes'()
    {
        assert.deepEqual(this.request.successCodes, [200, 201]);
    }

    @test
    'expected error codes'()
    {
        assert.deepEqual(this.request.errorCodes, [400, 409]);
    }

    @test
    'expected payload'()
    {
        assert.deepEqual(this.request.payload, data);
    }

    private get request()
    {
        return new CredentialCreateRequest(new User, '123', data);
    }
}
