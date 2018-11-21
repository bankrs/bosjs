import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import AccessDeleteRequest from '../../lib/requests/AccessDeleteRequest'
import User from '../models/User'

@suite
class AccessDeleteRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/accesses/123')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.DELETE)
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
    return new AccessDeleteRequest(new User(), 123)
  }
}
