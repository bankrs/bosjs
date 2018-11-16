import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import ResetSandboxRequest from '../../lib/requests/ResetSandboxRequest'
import User from '../models/User'

@suite
class ResetSandboxRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/reset')
  }

  @test
  'request method is DELETE' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.POST)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 202])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400, 401])
  }

  @test
  'expected payload' () {
    assert.deepEqual(this.request.payload, { password: '123' })
  }

  private get request () {
    return new ResetSandboxRequest(new User(), '123')
  }
}
