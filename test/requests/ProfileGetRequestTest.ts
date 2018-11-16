import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import ProfileGetRequest from '../../lib/requests/ProfileGetRequest'
import User from '../models/User'

@suite
class ProfileGetRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/profile')
  }

  @test
  'request method is GET' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.GET)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200])
  }

  private get request () {
    return new ProfileGetRequest(new User())
  }
}
