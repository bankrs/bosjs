import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import AccessRefreshRequest from '../../lib/requests/AccessRefreshRequest'
import User from '../models/User'

@suite
class AccessRefreshRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/accesses/123/refresh')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 202])
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
    return new AccessRefreshRequest(new User(), 123)
  }
}
