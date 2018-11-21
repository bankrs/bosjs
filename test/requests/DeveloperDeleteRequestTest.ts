import { suite, test } from 'mocha-typescript'
import { assert } from 'chai'

import ApiRequest from '../../lib/ApiRequest'
import DeveloperDeleteRequest from '../../lib/requests/DeveloperDeleteRequest'
import User from '../models/User'

@suite
class DeveloperDeleteRequestTest {
  @test
  'expected endpoint' () {
    assert.strictEqual(this.request.endpoint, '/v1/developers')
  }

  @test
  'request method' () {
    assert.strictEqual(this.request.method, ApiRequest.Method.DELETE)
  }

  @test
  'expected success codes' () {
    assert.deepEqual(this.request.successCodes, [200, 202, 204])
  }

  @test
  'expected error codes' () {
    assert.deepEqual(this.request.errorCodes, [400, 401, 403])
  }

  @test
  'expected payload password' () {
    assert.deepEqual(this.request.payload, { password: '123' })
  }

  @test
  'expected payload email' () {
    assert.deepEqual(this.requestOauth.payload, { email: 'user@mail.com' })
  }

  private get request () {
    return new DeveloperDeleteRequest(new User(), { password: '123' })
  }

  private get requestOauth () {
    return new DeveloperDeleteRequest(new User(), { email: 'user@mail.com' })
  }
}
