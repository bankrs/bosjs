import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import ApplicationKeysDeleteRequest from '../../lib/requests/ApplicationKeysDeleteRequest'
import User from '../models/User'

@suite
class ApplicationKeysDeleteRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/application_keys/123')
  }

  @test
  'request method is DELETE' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.DELETE)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 204])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400])
  }

  @test
  'expected payload' () {
    assert.deepEqual(this.request.payload, {})
  }

  private get request () {
    return new ApplicationKeysDeleteRequest(new User(), '123')
  }
}
