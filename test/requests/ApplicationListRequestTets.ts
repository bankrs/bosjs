import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import ApplicationListRequest from '../../lib/requests/ApplicationListRequest'
import User from '../models/User'

@suite
class ApplicationListRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/applications')
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
    assert.deepEqual(this.request.payload, {})
  }

  private get request () {
    return new ApplicationListRequest(new User())
  }
}
