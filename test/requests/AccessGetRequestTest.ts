import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import AccessGetRequest from '../../lib/requests/AccessGetRequest'
import User from '../models/User'

@suite
class AccessGetRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/accesses/123')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.GET)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400])
  }

  @test
  'expected payload' () {
    assert.isEmpty(this.request.payload)
  }

  private get request () {
    return new AccessGetRequest(new User(), 123)
  }
}