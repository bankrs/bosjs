import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import {Method} from '../../lib/ApiRequest'
import ApplicationDeleteRequest from '../../lib/requests/ApplicationDeleteRequest'
import User from '../models/User'

@suite
class ApplicationDeleteRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers/applications/123')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, Method.DELETE)
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
    return new ApplicationDeleteRequest(new User(), '123', { password: '123' })
  }
}
